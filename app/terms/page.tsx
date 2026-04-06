import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Safar",
  description: "Terms of use and end user license agreement for the Safar app.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen font-sans" style={{ background: "#2E2E2E", color: "#fff" }}>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1
          className="font-display text-4xl font-extrabold uppercase tracking-tight mb-2"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Terms of Use
        </h1>
        <p className="text-white/40 text-sm mb-12">Effective date: April 6, 2026</p>

        <Section title="Agreement to Terms">
          These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the Safar mobile application
          and any related services (collectively, the &ldquo;App&rdquo;) operated by Safar
          (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By downloading, installing,
          or using the App, you agree to be bound by these Terms. If you do not agree, do not use
          the App.
        </Section>

        <Section title="Eligibility">
          You must be at least 13 years of age to use the App. By using the App, you represent that
          you meet this requirement. If you are under the age of majority in your jurisdiction, you
          represent that a parent or legal guardian has reviewed and agreed to these Terms on your
          behalf.
        </Section>

        <Section title="Acceptable Use">
          <p className="mb-4">
            You agree to use the App only for lawful purposes and in a manner consistent with these
            Terms. Specifically, you must <strong className="text-white">not</strong>:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Post, share, or transmit content that is objectionable, offensive, hateful, obscene,
              defamatory, discriminatory, or otherwise inappropriate.
            </li>
            <li>
              Harass, bully, intimidate, stalk, or threaten any other user or third party.
            </li>
            <li>
              Spam, flood, or engage in any abusive, repetitive, or disruptive behavior on the
              platform.
            </li>
            <li>
              Impersonate any person or entity, or falsely represent your affiliation with any person
              or entity.
            </li>
            <li>
              Post content that infringes any third party&apos;s intellectual property rights,
              privacy rights, or any other legal rights.
            </li>
            <li>
              Use the App to distribute malware, viruses, or any other harmful code or material.
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the App, its servers, or any
              connected systems.
            </li>
            <li>
              Use automated tools, bots, or scrapers to access or collect data from the App without
              our prior written consent.
            </li>
          </ul>
        </Section>

        <Section title="User-Generated Content">
          <p className="mb-4">
            The App allows you to create and share content including trip posts, place reviews,
            comments, ratings, notes, and profile information (collectively, &ldquo;User
            Content&rdquo;).
          </p>
          <SubSection title="Ownership">
            You retain ownership of the User Content you create. We do not claim ownership of your
            content.
          </SubSection>
          <SubSection title="License to Safar">
            By posting User Content, you grant Safar a non-exclusive, worldwide, royalty-free
            license to use, store, display, and distribute your content solely for the purpose of
            operating and providing the App and its features to you and other users. This license
            ends when you delete the content or your account.
          </SubSection>
          <SubSection title="Your Responsibility">
            You are solely responsible for the User Content you post. You represent that you have
            all necessary rights to share such content and that it does not violate any applicable
            law or these Terms.
          </SubSection>
        </Section>

        <Section title="Content Moderation">
          We reserve the right — but not the obligation — to review, remove, or restrict access to
          any User Content that we determine, in our sole discretion, violates these Terms or is
          otherwise harmful, objectionable, or inappropriate. We also reserve the right to suspend
          or permanently terminate accounts that violate these Terms, engage in abusive behavior, or
          otherwise harm the Safar community. We may take these actions without prior notice.
        </Section>

        <Section title="Reporting Objectionable Content">
          If you encounter content or behavior that violates these Terms, please report it to us at{" "}
          <a
            href="mailto:support@getsafar.ca"
            className="underline text-white/80 hover:text-white"
          >
            support@getsafar.ca
          </a>
          . We will review reports and take appropriate action.
        </Section>

        <Section title="Account Deletion">
          You may delete your account at any time by contacting us at{" "}
          <a
            href="mailto:support@getsafar.ca"
            className="underline text-white/80 hover:text-white"
          >
            support@getsafar.ca
          </a>
          . Upon deletion, your profile, cities, places, posts, comments, and associated data will
          be permanently removed from our systems. Some residual data may remain in backups for a
          limited period before being purged.
        </Section>

        <Section title="Intellectual Property">
          All content, design, graphics, and code comprising the App — excluding User Content — are
          owned by or licensed to Safar and are protected by applicable intellectual property laws.
          You may not copy, modify, distribute, or create derivative works from any part of the App
          without our prior written consent.
        </Section>

        <Section title="Third-Party Services">
          The App integrates third-party services (including Supabase for backend infrastructure and
          Apple for authentication). Your use of those services is subject to their respective terms
          and privacy policies. We are not responsible for the practices of any third-party service
          provider.
        </Section>

        <Section title="Disclaimer of Warranties">
          THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo; WITHOUT WARRANTY
          OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL
          WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE
          UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
        </Section>

        <Section title="Limitation of Liability">
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SAFAR AND ITS OFFICERS, DIRECTORS,
          EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF DATA, LOSS OF PROFITS, OR LOSS OF
          GOODWILL — ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, EVEN IF
          WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY TO YOU FOR
          ANY CLAIM ARISING OUT OF THESE TERMS OR YOUR USE OF THE APP SHALL NOT EXCEED THE AMOUNT
          YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR CAD $100, WHICHEVER IS GREATER.
        </Section>

        <Section title="Indemnification">
          You agree to indemnify, defend, and hold harmless Safar and its officers, directors,
          employees, and agents from and against any claims, liabilities, damages, losses, and
          expenses (including reasonable legal fees) arising out of or related to your use of the
          App, your User Content, or your violation of these Terms.
        </Section>

        <Section title="Governing Law">
          These Terms are governed by and construed in accordance with the laws of British Columbia, Canada,
          without regard to its conflict of law principles. Any disputes arising under these Terms
          shall be subject to the exclusive jurisdiction of the courts located in British Columbia, Canada.
        </Section>

        <Section title="Changes to These Terms">
          We may update these Terms from time to time. We will post the revised Terms here with an
          updated effective date. Your continued use of the App after any changes constitutes your
          acceptance of the new Terms. If we make material changes, we will make reasonable efforts
          to notify you.
        </Section>

        <Section title="Contact">
          If you have questions about these Terms, or to report a violation, contact us at{" "}
          <a
            href="mailto:support@getsafar.ca"
            className="underline text-white/80 hover:text-white"
          >
            support@getsafar.ca
          </a>
          .
        </Section>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link href="/" className="text-white/40 text-sm hover:text-white/70 transition-colors">
            ← Back to Safar
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl font-extrabold uppercase tracking-tight mb-3"
        style={{ fontFamily: "var(--font-barlow-condensed)" }}
      >
        {title}
      </h2>
      <div className="text-white/70 leading-relaxed">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
