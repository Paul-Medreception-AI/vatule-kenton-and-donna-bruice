import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing the use of the Vatulé website. Booking terms are set out separately in the rental agreement.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="August 2026"
      intro="These terms govern your use of the Vatulé website. They are not your rental contract — the terms of any stay are set out in the rental agreement we provide when you book."
    >
      <LegalSection heading="Acceptance">
        <p>
          By using this website you agree to these terms. If you do not agree,
          please do not use the site.
        </p>
      </LegalSection>

      <LegalSection heading="About the information here">
        <p>
          We describe the estate, its amenities and its rates as accurately as
          we can. Photographs are of Vatulé itself. Even so, descriptions,
          availability and rates are provided for general information and may
          change.
        </p>
        <p>
          Nothing on this website is an offer or a binding reservation. A stay
          is confirmed only when we have agreed dates with you in writing and
          you have signed the rental agreement.
        </p>
      </LegalSection>

      <LegalSection heading="Rates and fees">
        <p>
          Published nightly rates are quoted in US dollars and are subject to
          Mexican tax. We do not charge service or cleaning fees. A nominal
          access fee is collected by Punta Mita Master Condominium&rsquo;s HOA.
          An additional-guest charge of $650 per day per adult applies to groups
          of more than ten adults; it does not apply to youth under 21 years of
          age.
        </p>
        <p>
          Rates are subject to change at any point prior to confirmation. The
          rate that applies to your stay is the one stated in your rental
          agreement.
        </p>
      </LegalSection>

      <LegalSection heading="Booking terms">
        <p>
          Payment schedule, deposit, cancellation, damage, house rules,
          occupancy limits and all other conditions of stay are governed by the
          rental agreement, which we will send you before booking. Where these
          website terms and the rental agreement differ, the rental agreement
          governs.
        </p>
      </LegalSection>

      <LegalSection heading="Resort facilities">
        <p>
          Access to the golf courses, tennis club, fitness centre and beach
          clubs is provided by Punta Mita Resort and its operators, subject to
          their own rules, availability and charges. Those facilities are not
          operated by Vatulé.
        </p>
      </LegalSection>

      <LegalSection heading="Content and images">
        <p>
          The text and photographs on this site are the property of the owners
          of Vatulé or their photographers, and may not be reproduced without
          permission.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          This website is provided as-is. To the extent permitted by law, we are
          not liable for any loss arising from your use of the site or from
          reliance on information published here. Nothing in these terms limits
          liability that cannot lawfully be limited.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms? Email{" "}
          <a
            href="mailto:info@vatule.com"
            className="text-[var(--color-brass)] underline-offset-4 hover:underline"
          >
            info@vatule.com
          </a>{" "}
          or call{" "}
          <a
            href="tel:+19704563115"
            className="text-[var(--color-brass)] underline-offset-4 hover:underline"
          >
            +1 (970) 456-3115
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
