# Vatulé — deployment notes

Next.js 15 (App Router), static-prerendered, deployed on Vercel.
The inquiry form is the only server-side piece: a server action that sends mail
through **AWS SES** in account `343218184620`, `us-east-1`.

---

## 1. DNS — add in Cloudflare (zone `vatule.com`)

SES is already in **production access** on this account (50k/day, healthy), so
there is no sandbox restriction. The domain identity `vatule.com` is created and
waiting on DKIM.

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

`vatule.com` and `www` currently CNAME to `vatulevacationhome.hosting.kinsta.cloud`
(the old WordPress host). Cutting over to Vercel means repointing those two
records at Vercel and leaving everything else — MX, DKIM, SPF, the Google
verification TXTs — untouched.

---

## 2. Vercel environment variables

| Variable                | Value                                | Notes                                              |
| ----------------------- | ------------------------------------ | -------------------------------------------------- |
| `SES_ACCESS_KEY_ID`     | *(IAM access key)*                   | See §3                                             |
| `SES_SECRET_ACCESS_KEY` | *(IAM secret)*                       | Mark as sensitive                                  |
| `SES_REGION`            | `us-east-1`                          | Optional; defaults to `us-east-1`                  |
| `INQUIRY_FROM`          | `Vatulé <inquiries@vatule.com>`      | Optional; must be on the verified domain           |
| `NEXT_PUBLIC_GA_ID`     | *(GA4 measurement ID)*               | Optional; analytics are skipped when unset         |
| `NEXT_PUBLIC_FILM_YOUTUBE_ID` | *(video ID)*                   | Optional; see §4                                   |

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

- **Currently**: plays `public/video/vatule-loop.mp4` — a 4.9 MB silent clip that
  is only the **first 20 seconds** of the full film. It is a placeholder.
- **To use the full film**: upload to Vimeo or YouTube and set
  `NEXT_PUBLIC_FILM_YOUTUBE_ID`. The component switches to a privacy-mode embed
  and the self-hosted clip is no longer used (delete it to save 4.9 MB).

The 298 MB master cannot live in the repo — GitHub hard-blocks files over 100 MB.

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
