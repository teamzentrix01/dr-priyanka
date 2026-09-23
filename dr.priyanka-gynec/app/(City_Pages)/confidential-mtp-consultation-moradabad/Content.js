import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function ConfidentialMTPConsultationMoradabad() {
  const faqs = [
    {
      q: "Is my consent alone enough for MTP, or do I need my husband's or partner's permission?",
      a: "Generally, a woman's own informed consent is what's legally required for MTP in most circumstances.",
    },
    {
      q: "Can I attend an MTP consultation without anyone else present?",
      a: "Yes, most clinics allow you to attend privately and alone, unless you choose to involve someone else.",
    },
    {
      q: "Does marital status affect my right to seek this consultation?",
      a: "No, both married and unmarried women can seek MTP consultation and care under Indian law.",
    },
    {
      q: "Will my family find out through insurance or shared records?",
      a: "This depends on your specific billing and insurance arrangement — ask the clinic directly if this is a concern for you.",
    },
    {
      q: "What should I do if a provider seems judgmental?",
      a: "It's reasonable and advisable to seek care from a different, more professional and respectful provider.",
    },
    {
      q: "How can I confirm a clinic's confidentiality practices in advance?",
      a: "Call or message ahead and ask directly how they handle privacy, consent, and record-keeping.",
    },
    {
      q: "Does gynaecologistmoradabad.com offer confidential MTP consultations?",
      a: "This specific service isn't listed on the website; contact the clinic directly and privately to confirm.",
    },
    {
      q: "What should I prepare before a confidential consultation?",
      a: "Prepare any pregnancy test results, your last menstrual period date, and a list of privacy questions you want answered.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Confidential MTP Consultation Moradabad: Understanding Your
                Privacy
              </h1>

              <p className="mb-4 text-gray-700">
                For many women, the idea of seeking a confidential MTP (Medical
                Termination of Pregnancy) consultation in Moradabad brings as
                much concern about privacy as it does about the medical process
                itself. This guide focuses specifically on what confidentiality
                actually means in this context, your privacy rights under Indian
                law, common concerns women have, and how to find a genuinely
                discreet, judgment-free consultation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Confidentiality Concerns Are So Common
              </h2>

              <p className="mb-4 text-gray-700">
                It&apos;s completely understandable that privacy is often the
                first worry, given:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Social stigma</strong> that unfortunately still
                  surrounds this topic in many communities.
                </li>
                <li>
                  <strong>Concerns about family members finding out</strong>,
                  especially for unmarried women or those in specific family
                  situations.
                </li>
                <li>
                  <strong>Workplace or insurance privacy worries</strong>,
                  particularly if medical records could be accessed by others.
                </li>
                <li>
                  <strong>Fear of judgment from healthcare staff</strong>{" "}
                  themselves, which can discourage women from seeking timely
                  care.
                </li>
                <li>
                  <strong>Uncertainty about legal rights</strong>, especially
                  around whether a partner&apos;s or family&apos;s consent is
                  required.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Understanding your actual rights and what genuine
                confidentiality involves can help ease many of these concerns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Confidentiality Actually Means in a Medical Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                A confidential MTP consultation generally means:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your personal and medical information is not shared with
                  anyone without your explicit consent.
                </li>
                <li>
                  The consultation takes place privately, typically one-on-one
                  with the doctor, unless you choose to include someone else.
                </li>
                <li>
                  Medical records are kept secure, following standard patient
                  confidentiality practices.
                </li>
                <li>
                  You are not required to disclose your reasons for seeking
                  termination beyond what&apos;s medically relevant.
                </li>
                <li>
                  Staff are expected to maintain professional discretion
                  throughout your visit and any follow-up care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Legal Rights Regarding Consent and Privacy in India
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the legal framework can help clarify common
                misconceptions:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Under Indian law, a woman&apos;s own consent is
                  what&apos;s legally required</strong> for Medical Termination
                  of Pregnancy — not the consent of a husband, partner, or
                  family member, in most circumstances.
                </li>
                <li>
                  <strong>Minors and certain other specific situations</strong>{" "}
                  may involve additional legal considerations, which a doctor
                  can clarify directly and confidentially.
                </li>
                <li>
                  <strong>Marital status does not determine eligibility</strong>{" "}
                  for MTP consultation and care — both married and unmarried
                  women can seek this service.
                </li>
                <li>
                  <strong>Medical practitioners are bound by professional
                  confidentiality standards</strong>, meaning your information
                  should not be disclosed without your permission, except in
                  specific legally mandated circumstances.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This information is general in nature; for guidance specific to
                your exact situation, always discuss your rights directly and
                confidentially with your treating doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Privacy Concerns and How They&apos;re Typically Addressed
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                &quot;Will my family find out?&quot;
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A confidential consultation means your information isn&apos;t
                  shared with family members unless you choose to involve them
                  yourself.
                </li>
                <li>
                  You can typically attend consultations alone, without
                  requiring anyone else&apos;s presence.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                &quot;Do I need my partner&apos;s or husband&apos;s
                permission?&quot;
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Generally, your own informed consent is what matters legally
                  for this decision — this is an important point many women
                  aren&apos;t aware of.
                </li>
                <li>
                  A good doctor will clarify this directly if you have questions
                  about your specific situation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                &quot;Will this appear on shared insurance records my family can
                see?&quot;
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  This is a valid practical concern worth discussing directly
                  with the clinic, especially if you&apos;re using family-linked
                  insurance.
                </li>
                <li>
                  Ask the clinic directly about billing and documentation
                  practices if this is a concern for your specific situation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                &quot;Will hospital or clinic staff judge me?&quot;
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A professional, patient-centered clinic should train staff to
                  maintain a respectful, non-judgmental approach regardless of a
                  patient&apos;s circumstances.
                </li>
                <li>
                  If you experience judgment or disrespect from any provider,
                  it&apos;s reasonable to seek care elsewhere.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a Genuinely Confidential Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private space for your initial conversation with the doctor,
                  away from other patients or staff who don&apos;t need to be
                  involved.
                </li>
                <li>
                  The doctor asking permission before including anyone else in
                  the conversation, such as a family member you may have brought
                  along.
                </li>
                <li>
                  Clear communication about how your information will be
                  recorded and who has access to it.
                </li>
                <li>
                  No unnecessary questions about your personal circumstances
                  beyond what&apos;s medically relevant to your care.
                </li>
                <li>
                  Respectful, professional language throughout, without
                  judgmental tone or unsolicited opinions.
                </li>
                <li>
                  The option to ask about confidentiality directly, and receive
                  clear, honest answers.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Find a Clinic That Prioritizes Confidentiality
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Call or message before booking to ask directly about their
                  privacy and confidentiality practices.
                </li>
                <li>
                  Ask whether you can attend the consultation alone, without
                  requiring anyone else&apos;s presence.
                </li>
                <li>
                  Ask how your medical records are stored and who has access to
                  them.
                </li>
                <li>
                  Observe the clinic&apos;s overall professionalism during your
                  initial interactions — respectful, clear communication is a
                  good sign.
                </li>
                <li>
                  Trust your own comfort level — if something feels off
                  regarding privacy, it&apos;s reasonable to seek care
                  elsewhere.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions You Can Ask to Confirm Confidentiality
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Can I attend this consultation privately, without anyone else
                  present?
                </li>
                <li>
                  Is my consent alone sufficient to proceed, or is anyone
                  else&apos;s involvement required?
                </li>
                <li>
                  How is my medical information stored, and who has access to
                  it?
                </li>
                <li>
                  Will anything about this visit appear on shared or family
                  insurance records?
                </li>
                <li>
                  How do you ensure staff maintain confidentiality throughout
                  the process?
                </li>
                <li>
                  Can I ask questions about my rights and privacy at any point
                  during my care?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Considerations for Unmarried Women
              </h2>

              <p className="mb-4 text-gray-700">
                Unmarried women sometimes face additional worry about privacy
                and judgment. It&apos;s worth knowing:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Marital status does not affect your legal right</strong>{" "}
                  to seek MTP consultation and care.
                </li>
                <li>
                  <strong>A professional clinic should treat all patients with
                  the same standard of respect and confidentiality</strong>,
                  regardless of marital status.
                </li>
                <li>
                  <strong>If you encounter judgment or unnecessary questioning
                  about your marital status</strong> during a consultation, this
                  is a sign to seek care from a more professional provider.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Digital Communication Can Support Privacy
              </h2>

              <p className="mb-4 text-gray-700">
                Many women find it easier to take the first step toward a
                confidential consultation through digital channels rather than a
                phone call or walk-in visit. Consider these approaches:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>WhatsApp messaging</strong> allows you to ask general
                  questions about the clinic&apos;s process before committing to
                  an in-person visit, without needing to speak aloud in a space
                  where you might be overheard.
                </li>
                <li>
                  <strong>Email inquiries</strong> give you time to word your
                  questions carefully and receive a written response you can
                  review privately.
                </li>
                <li>
                  <strong>Scheduling appointments for times that work with your
                  personal privacy needs</strong>, such as a time when
                  you&apos;re less likely to be accompanied or observed by
                  family members.
                </li>
                <li>
                  <strong>Asking the clinic whether appointment confirmations
                  are sent in a discreet manner</strong> (for example, avoiding
                  language in SMS or call reminders that might reveal the nature
                  of your visit to someone else who might see your phone).
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If privacy at home or around shared devices is a specific
                concern, it&apos;s worth mentioning this directly to the clinic
                — many are accustomed to helping patients navigate these
                practical privacy considerations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding the Difference Between Privacy and Secrecy
              </h2>

              <p className="mb-4 text-gray-700">
                It can help to separate two related but different ideas:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Privacy</strong> means you have the right to control
                  who knows about your personal medical decisions — this is a
                  protection the law and professional medical ethics support.
                </li>
                <li>
                  <strong>Secrecy</strong>, on the other hand, is a personal
                  choice about whether or not you want to share this information
                  with specific people in your life, such as a partner, parent,
                  or close friend.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                You are entitled to privacy as a baseline right in any medical
                setting. Whether you choose secrecy — meaning you don&apos;t
                share this with certain people — is entirely your own personal
                decision, and there&apos;s no single &quot;right&quot; answer.
                Some women choose to involve a partner or parent for support,
                while others prefer to manage the process entirely on their own.
                Both approaches are valid, and a respectful clinic should
                support whichever choice feels right for you without pressuring
                you in either direction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Your Consultation: Maintaining Ongoing Privacy
              </h2>

              <p className="mb-4 text-gray-700">
                Confidentiality doesn&apos;t end once your consultation or
                procedure is complete. A few points to keep in mind for ongoing
                privacy:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Follow-up appointments</strong> should be scheduled
                  and conducted with the same level of discretion as your
                  initial visit.
                </li>
                <li>
                  <strong>Any prescribed medications</strong> should be
                  collected and stored in a way that maintains your privacy at
                  home, if that&apos;s a concern for you.
                </li>
                <li>
                  <strong>Billing and payment records</strong> — ask the clinic
                  how these are generated and whether they contain any details
                  you&apos;d prefer to keep general rather than specific.
                </li>
                <li>
                  <strong>Digital records or patient portals</strong>, if used
                  by the clinic, should have appropriate privacy and password
                  protections, which you can ask about directly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Final Word on Seeking Care Without Fear
              </h2>

              <p className="mb-4 text-gray-700">
                It&apos;s worth remembering that seeking medical care —
                including a confidential MTP consultation — is a normal,
                responsible part of managing your own health. You are not
                obligated to justify your decision to anyone beyond what&apos;s
                medically necessary for your treating doctor to provide safe
                care. A professional, ethical healthcare provider will recognize
                this and treat your visit with the same respect and discretion
                given to any other private medical matter, allowing you to focus
                on your health and wellbeing without unnecessary fear or
                judgment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Building Confidence Before Your Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                If privacy concerns are making you hesitant to seek care, these
                steps may help:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Call ahead anonymously</strong> with general questions
                  about the clinic&apos;s process and confidentiality practices
                  before booking.
                </li>
                <li>
                  <strong>Write down your specific privacy concerns</strong>{" "}
                  so you remember to raise them during your consultation.
                </li>
                <li>
                  <strong>Consider bringing a trusted support person</strong>,
                  only if that feels helpful to you — attending alone is also
                  completely acceptable.
                </li>
                <li>
                  <strong>Remember that seeking timely, confidential medical
                  care</strong> is a responsible and protective choice for your
                  own health.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women researching confidential MTP consultation in
                Moradabad, Dr. Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) is a practicing gynaecologist in the city. Here&apos;s an
                honest look at what her website offers in this specific context:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Her clinic, Dr. Priyanka Gynaec, is presented as a
                  professional gynaecology practice offering antenatal/postnatal
                  care, high-risk pregnancy management, laparoscopic surgery,
                  diagnostic hysteroscopy, and fertility/IVF treatment.
                </li>
                <li>
                  The website&apos;s patient testimonials generally reflect
                  themes of respectful, clear communication, which are relevant
                  qualities for any confidential consultation.
                </li>
                <li>
                  MTP or pregnancy termination services are not explicitly
                  listed among the website&apos;s currently stated offerings.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details of Dr. Priyanka Gynaec, Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Fertility Specialist (MBBS, MS)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+919079765578"
                        className="hover:underline"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </Link>

                  <Link
                    href="/services"
                    className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <p className="text-gray-700">
                Seeking a confidential MTP consultation in Moradabad should
                never mean compromising on privacy, respect, or judgment-free
                care. Understanding your legal rights, knowing what genuine
                confidentiality looks like, and asking direct questions before
                booking can help you find a provider who treats your privacy —
                and your decision — with the seriousness and respect it
                deserves.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
