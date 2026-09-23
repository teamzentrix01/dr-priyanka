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

export default function SafePregnancyTerminationClinicNearMe() {
  const faqs = [
    {
      q: "How do I know if a termination clinic is legally registered?",
      a: "Ask directly about the facility's MTP center approval and the treating doctor's medical registration.",
    },
    {
      q: "What are red flags of an unsafe clinic?",
      a: "No physical examination, selling medication without consultation, pressure to decide quickly, and unhygienic facilities are all warning signs.",
    },
    {
      q: "Is it safe to get MTP pills without an ultrasound?",
      a: "No, an ultrasound is important to confirm gestational age and rule out ectopic pregnancy before proceeding with any method.",
    },
    {
      q: "Will my visit be confidential?",
      a: "Yes, a legitimate clinic should conduct consultations privately and keep your medical records confidential.",
    },
    {
      q: "Should I choose the closest clinic or prioritize safety?",
      a: "Safety and legal registration should always come first, even if it means traveling slightly further.",
    },
    {
      q: "What documentation should a legal clinic provide or request?",
      a: "Proper consent documentation and confirmation of registration, in compliance with the MTP Act, should be part of the process.",
    },
    {
      q: "Does gynaecologistmoradabad.com offer pregnancy termination services?",
      a: "This service is not listed on the website; contact the clinic directly and confidentially to confirm availability.",
    },
    {
      q: "What should I bring to verify and consult a clinic properly?",
      a: "Bring your pregnancy test results, last menstrual period date, and a list of questions to verify the clinic's legitimacy and discuss your options.",
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
                Safe Pregnancy Termination Clinic Near Me: How to Choose the
                Right One
              </h1>

              <p className="mb-4 text-gray-700">
                Finding a safe pregnancy termination clinic near me is one of
                the most important steps in ensuring a legal, medically
                supervised, and confidential experience during a difficult
                decision. This guide focuses specifically on how to verify a
                clinic is genuinely safe and registered, what to look for (and
                avoid), and how to approach this search with confidence and care
                for your own wellbeing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why &quot;Safe&quot; Is the Most Important Word in This Search
              </h2>

              <p className="mb-4 text-gray-700">
                Unlike searching for many other medical services, safety takes
                on particular importance here because:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Unregistered or unsafe providers exist</strong>, and
                  choosing the wrong one can pose serious health risks.
                </li>
                <li>
                  <strong>Legal compliance matters</strong> — termination in
                  India must be performed under the MTP Act, by a registered
                  medical practitioner, at an approved facility.
                </li>
                <li>
                  <strong>Complications can arise</strong> if a procedure
                  isn&apos;t performed correctly or without proper follow-up
                  care.
                </li>
                <li>
                  <strong>Confidentiality and dignity should be guaranteed</strong>,
                  which isn&apos;t always the case with informal or
                  unregistered providers.
                </li>
                <li>
                  <strong>Emotional wellbeing is better supported</strong> in a
                  professional, compassionate, medically sound environment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes a Pregnancy Termination Clinic Legally
                &quot;Safe&quot; in India
              </h2>

              <p className="mb-4 text-gray-700">
                Under the MTP (Medical Termination of Pregnancy) Act, a
                legitimate clinic or facility should meet these standards:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Registered and approved status</strong> — the facility
                  should be officially recognized to perform MTP procedures.
                </li>
                <li>
                  <strong>A registered medical practitioner (RMP)</strong> — the
                  doctor performing or supervising the procedure must be
                  properly qualified and registered.
                </li>
                <li>
                  <strong>Compliance with gestational limits</strong> — the
                  clinic should only perform procedures within legally permitted
                  gestational age limits, based on proper assessment.
                </li>
                <li>
                  <strong>Proper documentation and consent processes</strong>{" "}
                  — legitimate clinics follow required legal documentation,
                  including patient consent, in accordance with the law.
                </li>
                <li>
                  <strong>Compliance with the PCPNDT Act</strong> — clinics
                  offering ultrasound and pregnancy-related services must also
                  comply with laws preventing sex-selective practices, and
                  should never offer or suggest sex determination.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags That Indicate an Unsafe or Unregistered Provider
              </h2>

              <p className="mb-4 text-gray-700">
                Be cautious of any provider or so-called &quot;clinic&quot; that
                shows these warning signs:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  No clear medical registration or credentials displayed or
                  provided upon request.
                </li>
                <li>
                  Offering procedures without any physical examination or
                  ultrasound to confirm gestational age and pregnancy location.
                </li>
                <li>
                  Selling medication without a proper consultation,
                  prescription, or medical supervision.
                </li>
                <li>
                  No follow-up care offered or recommended after the procedure.
                </li>
                <li>
                  Unhygienic, poorly maintained facilities.
                </li>
                <li>
                  Pressure to decide quickly without adequate time for questions
                  or consideration.
                </li>
                <li>
                  Any hint of offering sex determination, which is illegal and a
                  serious red flag about the provider&apos;s overall legitimacy
                  and ethics.
                </li>
                <li>
                  Unusually low prices with no transparency about what&apos;s
                  actually included or how the procedure will be performed.
                </li>
                <li>
                  Operating outside a proper clinical or hospital setting, such
                  as informal, unregistered locations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Verify a Clinic Is Genuinely Safe and Registered
              </h2>

              <p className="mb-4 text-gray-700">
                Before booking, take these verification steps:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask directly about the doctor&apos;s registration with the
                  relevant state medical council.
                </li>
                <li>
                  Confirm the facility is an approved MTP center, as required
                  under the MTP Act.
                </li>
                <li>
                  Ask about the specific process — a proper clinic will always
                  require an examination and ultrasound before proceeding.
                </li>
                <li>
                  Check for transparency about cost and what&apos;s included,
                  rather than vague or unusually low pricing.
                </li>
                <li>
                  Look for a clear, professional consultation process, not a
                  rushed or transactional interaction.
                </li>
                <li>
                  Ask about follow-up care and what happens if complications
                  arise.
                </li>
                <li>
                  Trust your own observations during an initial visit or call —
                  a legitimate clinic will welcome your questions rather than
                  avoid them.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Safe, Well-Run Clinic Should Offer You
              </h2>

              <p className="mb-4 text-gray-700">
                A genuinely safe pregnancy termination clinic should provide:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, confidential initial consultation, free from
                  judgment.
                </li>
                <li>
                  A proper physical examination and ultrasound to confirm
                  gestational age and pregnancy location.
                </li>
                <li>
                  Clear explanation of available options, appropriate to your
                  specific situation.
                </li>
                <li>
                  Transparent discussion of the procedure, risks, and recovery
                  expectations.
                </li>
                <li>
                  Legally compliant documentation and consent processes.
                </li>
                <li>
                  A structured follow-up plan to confirm successful completion
                  and monitor recovery.
                </li>
                <li>
                  Emotional support and a respectful, compassionate environment
                  throughout.
                </li>
                <li>
                  Contraception counseling, if desired, for future family
                  planning.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Proximity (&quot;Near Me&quot;) Still Matters, Alongside
                Safety
              </h2>

              <p className="mb-4 text-gray-700">
                While safety is the top priority, choosing a clinic that&apos;s
                also reasonably close to you offers practical benefits:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Easier access for follow-up visits, which are essential
                  regardless of the method used.
                </li>
                <li>
                  Faster response if any concerns or complications arise during
                  recovery.
                </li>
                <li>
                  Reduced stress and travel burden during an already emotionally
                  significant time.
                </li>
                <li>
                  More convenient access to a support person, such as a trusted
                  friend or family member, if you&apos;d like company during the
                  process.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                That said, safety and legitimacy should never be compromised
                purely for convenience — it&apos;s worth traveling a little
                further, if necessary, to reach a genuinely safe, registered
                provider.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Booking Your Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Is this facility a registered and approved MTP center?
                </li>
                <li>
                  Is the treating doctor a registered medical practitioner?
                </li>
                <li>
                  What will the consultation process involve before any
                  procedure is decided?
                </li>
                <li>
                  Will an ultrasound be performed to confirm gestational age and
                  pregnancy location?
                </li>
                <li>
                  What are my options based on my specific gestational age?
                </li>
                <li>
                  What does the follow-up process look like?
                </li>
                <li>
                  Is this consultation confidential?
                </li>
                <li>
                  What is the total cost, and what does it include?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Protecting Your Confidentiality Throughout the Process
              </h2>

              <p className="mb-4 text-gray-700">
                Confidentiality is a reasonable and important expectation. A
                safe, professional clinic should:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Keep your medical records private and secure.
                </li>
                <li>
                  Conduct consultations in a private setting, without unnecessary
                  involvement of others unless you choose to include them.
                </li>
                <li>
                  Respect your decision without judgment or unsolicited
                  opinions.
                </li>
                <li>
                  Clearly explain your rights regarding privacy and consent
                  under the MTP Act.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing During Your Search and Decision
              </h2>

              <p className="mb-4 text-gray-700">
                This process can understandably bring up a range of emotions. A
                few supportive practices can help:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Take the time you need to gather information and ask questions
                  before deciding.
                </li>
                <li>
                  Bring a trusted support person to your consultation, if that
                  helps you feel more comfortable.
                </li>
                <li>
                  Ask about counseling or emotional support resources, if you
                  feel you would benefit from them.
                </li>
                <li>
                  Remember that seeking safe, legal care is a responsible and
                  health-protective choice, regardless of the reasons behind
                  your decision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For those searching for a safe pregnancy termination clinic near
                me in the Moradabad area, Dr. Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) is a practicing, presumably registered gynaecologist in the
                city. Here&apos;s an honest analysis of her website in this
                specific context:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Her clinic, Dr. Priyanka Gynaec, is presented as a
                  well-equipped practice offering antenatal/postnatal care,
                  high-risk pregnancy management, laparoscopic surgery,
                  diagnostic hysteroscopy, and fertility/IVF treatment,
                  supported by modern technology.
                </li>
                <li>
                  The website does not explicitly list pregnancy termination or
                  MTP services among its currently stated offerings.
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Your Basic Rights Under the MTP Act
              </h2>

              <p className="mb-4 text-gray-700">
                Knowing your general rights can help you feel more confident and
                better protected throughout this process:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>You have the right to a confidential consultation</strong>{" "}
                  — your personal information and medical details should not be
                  shared without your consent.
                </li>
                <li>
                  <strong>You have the right to be treated without judgment</strong>,
                  regardless of your personal circumstances or reasons for
                  seeking termination.
                </li>
                <li>
                  <strong>
                    You have the right to receive care from a properly
                    registered medical practitioner
                  </strong>, at a facility approved to provide this service.
                </li>
                <li>
                  <strong>
                    You have the right to clear information about your options
                  </strong>, the procedure, risks, and what to expect —
                  explained in a way you can understand.
                </li>
                <li>
                  <strong>You have the right to follow-up care</strong>, to
                  confirm the procedure was successful and to address any
                  concerns afterward.
                </li>
                <li>
                  <strong>You have the right to decline sex determination requests</strong>{" "}
                  — and should be alert to any provider who offers or suggests
                  this, as it is both illegal and a serious ethical red flag.
                </li>
                <li>
                  <strong>
                    You have the right to ask questions at any point
                  </strong>{" "}
                  and to take the time you need before making a final decision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Do If You Encounter an Unsafe or Suspicious Provider
              </h2>

              <p className="mb-4 text-gray-700">
                If you come across a clinic or individual that raises any of the
                red flags mentioned earlier in this guide, consider these steps:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Trust your instincts</strong> — if something feels
                  rushed, unclear, or unprofessional, it&apos;s reasonable to
                  seek care elsewhere.
                </li>
                <li>
                  <strong>Ask for clarity directly</strong> — a legitimate
                  provider will not hesitate to explain their registration,
                  process, and safety measures when asked.
                </li>
                <li>
                  <strong>Do not proceed with any procedure or medication</strong>{" "}
                  if you haven&apos;t had a proper examination and consultation
                  first.
                </li>
                <li>
                  <strong>Seek a second opinion</strong> from another registered
                  clinic if you feel uncertain about the first one you
                  contacted.
                </li>
                <li>
                  <strong>Reach out to a trusted local hospital or registered
                  gynaecology clinic</strong> for guidance if you&apos;re unsure
                  where else to turn.
                </li>
                <li>
                  Avoid providers who pressure you to decide immediately or who
                  discourage you from asking questions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bringing Support Into the Process, If You Choose To
              </h2>

              <p className="mb-4 text-gray-700">
                While this is ultimately your personal decision, involving
                trusted support can sometimes make the process feel less
                overwhelming:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A trusted friend or family member can accompany you to
                  consultations if that feels supportive.
                </li>
                <li>
                  Your partner, if appropriate and if you choose to involve
                  them, can be part of the discussion and decision-making
                  process.
                </li>
                <li>
                  A counselor or support helpline, if available locally, can
                  offer additional emotional guidance during a difficult time.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Ultimately, whether you choose to involve others or keep the
                process entirely private is your decision to make, and a
                respectful clinic will support whichever approach feels right
                for you.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-gray-700">
                Finding a safe pregnancy termination clinic near me means
                prioritizing legal registration, medical supervision,
                transparency, and confidentiality above convenience or cost
                alone. Use the verification steps in this guide — checking
                credentials, asking direct questions, and watching for red flags
                — to ensure you receive safe, legal, and compassionate care
                during this important decision.
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
