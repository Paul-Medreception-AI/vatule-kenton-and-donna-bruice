# Vatulé — deployment notes

Next.js 15 (App Router), static-prerendered, deployed on Vercel.
The inquiry form is the only server-side piece: a server action that sends mail
through **AWS SES** in account `343218184620`, `us-east-1`.

---

## 1. DNS — add in Cloudflare (zone `vatule.com`)

SES is in **production access** on this account (50k/day, healthy) — no sandbox
restriction. The `vatule.com` identity is **verified and sending**; DKIM status
is `SUCCESS`. All records below are already live in the zone. They are recorded
here so the setup can be rebuilt or audited.

### DKIM — three CNAMEs (required to send)

| Type  | Name                                                        | Target                                                                  |
| ----- | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| CNAME | `p57dg4doggi5exzzgwoyfoe2kjgdh7rq._domainkey`               | `p57dg4doggi5exzzgwoyfoe2kjgdh7rq.dkim.amazonses.com`                   |
| CNAME | `efjgq3pkimkmhiv43barfdwv2obiafpu._domainkey`               | `efjgq3pkimkmhiv43barfdwv2obiafpu.dkim.amazonses.com`                   |
| CNAME | `da4t7cdzbyc4cue3iznsvicn3iduudif._domainkey`               | `da4t7cdzbyc4cue3iznsvicn3iduudif.dkim.amazonses.com`                   |

> **Set these to DNS-only (grey cloud), not proxied.** Cloudflare's orange-cloud
> proxy rewrites CNAME targets and DKIM validation will never succeed.

### Domain verification — one TXT

SES can verify the domain by this record independently of DKIM, which is useful
if DKIM polling is slow (it can lag badly when the identity was created before
the DNS records existed).

| Type | Name         | Value                                          |
| ---- | ------------ | ---------------------------------------------- |
| TXT  | `_amazonses` | `t3nUF96rCD5w4kwtnESvyXJcVn1brr1MU3wlWBbI258=` |

Re-fetch the token any time with:

```bash
aws ses verify-domain-identity --domain vatule.com --region us-east-1 \
  --query VerificationToken --output text
```

That call is idempotent — it returns the existing token rather than issuing a
new one. The same is true of `aws ses verify-domain-dkim`, which returns the
same three DKIM tokens and re-triggers polling without invalidating the CNAMEs
already in DNS.

### SPF — amend the existing record

The zone currently has:

```
vatule.com.  TXT  "v=spf1 include:_spf.google.com ~all"
```

Change to (one record, not two — multiple SPF records break SPF):

```
vatule.com.  TXT  "v=spf1 include:_spf.google.com include:amazonses.com ~all"
```

Google Workspace keeps working; SES is added alongside it. **Do not remove the
existing MX record** (`smtp.google.com`) — `info@vatule.com` receives through
Google Workspace, and SES here is send-only.

### Verify once DNS has propagated

```bash
aws sesv2 get-email-identity --region us-east-1 --email-identity vatule.com \
  --query '{Verified:VerifiedForSendingStatus,Dkim:DkimAttributes.Status}'
```

Both should read `true` / `SUCCESS`. Usually minutes; allow up to 72h.

### Site hosting

`vatule.com` and `www` CNAME to Vercel (`3fd9308d3dbccc87.vercel-dns-016.com`);
the apex 308-redirects to `www`. The old Kinsta WordPress host is no longer in
the path — an offboarding export from June 2026 still shows Kinsta records, so
disregard that file and trust the live zone.

The zone is small and every record matters:

| Record                  | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `vatule.com` CNAME      | site → Vercel                            |
| `www` CNAME             | site → Vercel                            |
| `MX 1 smtp.google.com`  | **inbound mail for `info@vatule.com`**   |
| SPF TXT                 | authorises Google *and* SES to send      |
| `_dmarc` TXT            | `p=quarantine` — unauthenticated mail is quarantined, so DKIM is not optional |
| 3 × `_domainkey` CNAME  | SES DKIM                                 |
| `_amazonses` TXT        | SES domain verification                  |

The MX is Google's modern single-record Workspace format, **not** a GoDaddy
leftover. Removing it would stop `info@vatule.com` receiving anything —
including the inquiries this site sends there.

---

## 2. Vercel environment variables

| Variable                | Value                                | Notes                                              |
| ----------------------- | ------------------------------------ | -------------------------------------------------- |
| `SES_ACCESS_KEY_ID`     | *(IAM access key)*                   | See §3                                             |
| `SES_SECRET_ACCESS_KEY` | *(IAM secret)*                       | Mark as sensitive                                  |
| `SES_REGION`            | `us-east-1`                          | Optional; defaults to `us-east-1`                  |
| `INQUIRY_FROM`          | `Vatulé <inquiries@vatule.com>`      | Optional; must be on the verified domain           |
| `NEXT_PUBLIC_GA_ID`     | *(GA4 measurement ID)*               | Optional; analytics are skipped when unset         |
| `NEXT_PUBLIC_FILM_VIMEO_ID`   | `1216639692`                         | The film on Vimeo ("Casa Vatule")                  |
| `NEXT_PUBLIC_FILM_VIMEO_HASH` | `e3cfb41aaa`                         | Required — the video is unlisted                   |
| `NEXT_PUBLIC_FILM_YOUTUBE_ID` | *(video ID)*                         | Optional fallback if you ever move off Vimeo       |

**Why not `AWS_ACCESS_KEY_ID`?** Vercel functions run on AWS Lambda, where the
`AWS_*` names are reserved by the runtime and cannot be set as project env vars.
The action reads `SES_*` and passes credentials to the SES client explicitly.

Inquiries are delivered to **both** `info@vatule.com` and `vatulepm@gmail.com`,
with `Reply-To` set to the guest, so replying goes straight back to them.

---

## 3. IAM credentials

The integration needs one permission: `ses:SendEmail`.

Rather than reuse a broad existing key, create a least-privilege user scoped to
this domain identity:

```bash
aws iam create-user --user-name vatule-site-mailer

aws iam put-user-policy --user-name vatule-site-mailer \
  --policy-name vatule-ses-send \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Action": "ses:SendEmail",
      "Resource": "arn:aws:ses:us-east-1:343218184620:identity/vatule.com"
    }]
  }'

aws iam create-access-key --user-name vatule-site-mailer
```

Put the returned key and secret into the Vercel env vars above. That key can do
nothing except send mail as `vatule.com` — if it ever leaked it could not touch
anything else in the account.

---

## 4. The film

`components/FilmSection.tsx` renders a poster with a play button and loads
nothing until it is clicked.

It plays **"Casa Vatule"** on Vimeo: <https://vimeo.com/1216639692>

The video is **unlisted**, so the embed needs Vimeo's privacy hash. Without
`h=e3cfb41aaa` the player returns **401 Unauthorized**. The hash is not a
secret — it appears in the public share URL and in the page's `og:video:url` —
but it is mandatory, so both env vars must be set together.

If the film ever stops playing, check in this order:

1. Both `NEXT_PUBLIC_FILM_VIMEO_ID` and `..._HASH` are set. These are inlined at
   build time, so changing them requires a redeploy, not just a restart.
2. The hash still matches. Vimeo reissues it if the video's privacy setting is
   changed and re-saved. Re-copy it from the share URL.
3. Vimeo's **Embed → Where can this be embedded?** setting allows `vatule.com`.
   If it is restricted to specific domains, that list must include the site.

The 298 MB master cannot live in the repo — GitHub hard-blocks files over
100 MB — which is why this is hosted rather than self-hosted. The former 20-second
placeholder clip has been removed now that the real film is wired up.


---

## 5. Availability calendar

The owners publish an iCloud calendar, "Vatulé availability":

```
https://p102-caldav.icloud.com/published/2/MTcxMTQ0OTg0MTcxMTQ0OXE1HYnve5TimsWWs4gkq4nM_W-IJBrUvnpBph1da7owZG_qeW1QjtNHbJB3O2brnsIwmlxPGmQ4GkFKUjfw1dY
```

(`webcal://` → `https://`.) It parses cleanly — 32 `RESERVED`/`Stay` events — but
**as of August 2026 every event in it is in the past**, the latest ending
2026-04-11.

No availability UI is wired up, deliberately. Publishing "available" from a stale
feed would show open dates over booked weeks. Confirm with the owners that the
calendar is actively maintained before building on it.

---

## 6. Local development

```bash
npm install
npm run dev          # http://localhost:3000
npx next build       # must pass before deploying
```

Without `SES_*` set, the form returns an honest error pointing the guest at the
phone number and email rather than silently failing.
