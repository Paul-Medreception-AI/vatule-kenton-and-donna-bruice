import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vatulé collects, uses and protects the information you share when you inquire about a stay.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 2026"
      intro="Vatulé is a private vacation rental owned and operated by Donna and Kenton Bruice. This policy explains what we collect when you inquire about a stay, how we use it, and how we protect it."
    >
      <LegalSection heading="Who we are">
        <p>
          Vatulé is a privately owned vacation rental estate in La Punta
          Estates, Punta Mita, Nayarit, México. This website is operated by the
          owners. You can reach us at info@vatule.com or +1 (970) 456-3115.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect">
        <p>
          When you submit an inquiry through this website, we collect only what
          you enter in the form: your name, email address, phone number, the
          dates you are considering, the size of your party, and any comments
          you choose to add.
        </p>
        <p>
          If analytics are enabled, our website may also collect standard,
          aggregated usage data such as pages viewed and general location at the
          city level. This data is not linked to your inquiry.
        </p>
      </LegalSection>

      <LegalSection heading="How we use it">
        <p>
          We use your information for one purpose: to respond to your inquiry
          and, if you go on to book, to arrange your stay. We reply personally.
        </p>
        <p>
          We do not sell your information. We do not share it with booking
          platforms, listing sites or advertisers. We do not add you to a
          marketing list unless you ask us to.
        </p>
      </LegalSection>

      <LegalSection heading="Who we share it with">
        <p>
          Inquiries are delivered to the owners by email through our email
          service provider. If you book, we may share the details necessary to
          host you — arrival times, party size, dietary requirements — with the
          estate&rsquo;s on-site staff and, where required, with the Punta Mita
          resort for gate access and beach club registration.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep it">
        <p>
          We retain inquiry correspondence for as long as it is useful for
          serving you and for our own records. You may ask us to delete your
          information at any time by emailing info@vatule.com.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You may ask us to access, correct or delete the information you have
          given us. Write to info@vatule.com and we will act on your request.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          This site uses only the cookies necessary for it to function, plus
          analytics cookies where enabled. You can block cookies in your browser
          settings; the site will still work.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about this policy? Email{" "}
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
