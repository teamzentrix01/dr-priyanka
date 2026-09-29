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

export default function DoctorForSafeAbortionMoradabad() {
  const faqs = [
    {
      q: "Is abortion legal in India?",
      a: "Yes, abortion is legal under the MTP Act when performed by a registered medical practitioner within specified legal guidelines.",
    },
    {
      q: "Who can I consult for safe, confidential guidance in Moradabad?",
      a: "Dr. Priyanka Pachauri is a registered gynaecologist in Moradabad who provides confidential consultations regarding pregnancy options.",
    },
    {
      q: "Do I need my husband's or family's permission?",
      a: "In most cases, a woman's own consent is legally sufficient; your doctor can clarify details specific to your situation.",
    },
    {
      q: "Is it safe to take abortion pills bought online without a doctor?",
      a: "No, medication should only be taken under medical supervision to ensure safety and completeness of the process.",
    },
    {
      q: "Will an abortion affect my future fertility?",
      a: "A safe, medically supervised procedure generally does not affect future fertility.",
    },
    {
      q: "What determines which method is used?",
      a: "The gestational age of the pregnancy and individual health factors, assessed through a medical consultation, determine the appropriate method.",
    },
    {
      q: "Is the consultation confidential?",
      a: "Yes, confidentiality is both a legal right and a standard part of professional medical care.",
    },
    {
      q: "What if I already had a procedure elsewhere and now have symptoms like bleeding or fever?",
      a: "You should seek medical attention immediately; contact the clinic promptly for urgent evaluation and follow-up care.",
    },
    {
      q: "How soon after a suspected pregnancy should I consult a doctor?",
      a: "As early as possible; earlier consultation allows for more accurate dating and a wider range of safe, legally permitted options.",
    },
    {
      q: "Will the clinic guide me on contraception afterward?",
      a: "Yes, guidance on suitable future contraception options is typically offered as part of complete follow-up care.",
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
                Doctor for Safe Abortion in Moradabad – A Guide by Dr. Priyanka
                Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                Deciding to terminate a pregnancy is a deeply personal decision,
                and one that should always be made with accurate medical
                information, complete confidentiality, and the guidance of a
                qualified, registered gynaecologist. Unsafe or unregulated
                abortion methods carry serious health risks, which is why
                finding a doctor for safe abortion in Moradabad who follows
                India&apos;s legal and medical guidelines is so important. This
                guide explains what safe, legal abortion (Medical Termination of
                Pregnancy) involves, and how consulting an experienced
                gynaecologist like Dr. Priyanka Pachauri ensures your safety,
                privacy, and wellbeing throughout the process.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Medical Termination of Pregnancy (MTP)
              </h2>

              <p className="mb-4 text-gray-700">
                Medical Termination of Pregnancy, commonly referred to as MTP or
                abortion, is a legally recognized medical procedure in India,
                governed by the MTP Act, 1971, and its subsequent amendments in
                2003 and 2021.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  MTP is legal in India under specific medical and gestational
                  guidelines.
                </li>
                <li>
                  The procedure must be performed by a registered medical
                  practitioner at an approved facility.
                </li>
                <li>
                  The MTP Act 2021 expanded eligibility and extended gestational
                  limits for certain categories of women.
                </li>
                <li>
                  Termination can be requested for reasons including
                  contraceptive failure, risk to the mother&apos;s health,
                  foetal abnormalities, or other qualifying circumstances.
                </li>
                <li>
                  Confidentiality is a legal right for anyone seeking MTP
                  services in India.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing a Registered Doctor Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Unsafe or unregulated abortion practices remain a serious public
                health concern, and choosing a qualified gynaecologist is
                essential for your safety.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Registered doctors follow strict safety protocols and use
                  approved medical methods.
                </li>
                <li>
                  Proper gestational age assessment ensures the correct and
                  safest method is used.
                </li>
                <li>
                  Registered facilities are equipped to manage complications
                  immediately, should they arise.
                </li>
                <li>
                  A qualified doctor provides accurate information about legal
                  requirements and timelines.
                </li>
                <li>
                  Confidentiality and dignity are maintained throughout the
                  process.
                </li>
                <li>
                  Follow-up care is provided to ensure complete recovery and
                  rule out complications.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Safe Abortion Methods
              </h2>

              <p className="mb-4 text-gray-700">
                The appropriate method depends primarily on how far along the
                pregnancy is, and this is determined through a proper medical
                evaluation.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical (medication) abortion:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Involves taking prescribed medication under medical
                  supervision.
                </li>
                <li>
                  Generally used in earlier stages of pregnancy, as advised by a
                  doctor.
                </li>
                <li>
                  Requires follow-up to confirm the process is complete.
                </li>
                <li>
                  Must only be done under a doctor&apos;s guidance, never
                  through self-medication or unverified sources.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Surgical abortion:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A minor procedure performed at a medical facility.
                </li>
                <li>
                  May be recommended based on gestational age or specific
                  medical circumstances.
                </li>
                <li>
                  Performed under proper medical and hygienic conditions.
                </li>
                <li>
                  Includes monitoring and aftercare as part of the procedure.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Concerns Women Have About Abortion
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fear of judgment or lack of privacy during the process.
                </li>
                <li>
                  Confusion about what is legally allowed and required in India.
                </li>
                <li>
                  Uncertainty about which method is appropriate for their
                  situation.
                </li>
                <li>
                  Worry about pain, safety, or potential complications.
                </li>
                <li>
                  Questions about future fertility and reproductive health after
                  the procedure.
                </li>
                <li>
                  Concerns about confidentiality, especially regarding family or
                  partner involvement.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A good gynaecologist addresses each of these concerns openly,
                honestly, and without judgment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Unsafe Abortion Practices Are Dangerous
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Unregulated medication use without proper dosage or
                  supervision can lead to incomplete termination.
                </li>
                <li>
                  Unsafe procedures significantly increase the risk of infection
                  and heavy bleeding.
                </li>
                <li>
                  Lack of proper gestational assessment can lead to serious
                  complications.
                </li>
                <li>
                  Absence of follow-up care can delay detection of incomplete
                  procedures or infections.
                </li>
                <li>
                  Unsafe practices can, in serious cases, affect future
                  fertility or overall health.
                </li>
                <li>
                  Seeking help from unregistered or unqualified providers is
                  both medically risky and against the safeguards built into
                  Indian law.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Consult a Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  As soon as you confirm or suspect a pregnancy you wish to
                  discuss options for.
                </li>
                <li>
                  If you need accurate information about legal timelines and
                  gestational limits.
                </li>
                <li>
                  If you have started or are considering medication without
                  medical supervision.
                </li>
                <li>
                  If you experience heavy bleeding, severe pain, or fever after
                  any procedure.
                </li>
                <li>
                  If you need confidential guidance without judgment about your
                  options.
                </li>
                <li>
                  If you require follow-up care after a termination performed
                  elsewhere.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Supports Women Seeking Guidance
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri provides a confidential, respectful, and
                medically accurate consultation space for women navigating
                decisions around pregnancy, in line with Indian medical and
                legal guidelines.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Private, non-judgmental consultations to discuss your
                  situation and options.
                </li>
                <li>
                  Accurate gestational age assessment through ultrasound.
                </li>
                <li>
                  Clear explanation of legal eligibility and the process involved
                  under the MTP Act.
                </li>
                <li>
                  Guidance on the appropriate and safest medically approved
                  approach based on individual circumstances.
                </li>
                <li>
                  Pre-procedure counselling covering what to expect physically
                  and emotionally.
                </li>
                <li>
                  Post-procedure follow-up to confirm complete recovery and
                  address any complications.
                </li>
                <li>
                  Complete confidentiality maintained throughout every step of
                  your care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri – Trusted Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a well-established and experienced
                gynaecologist in Moradabad, known for treating every patient with
                dignity, privacy, and medical accuracy — qualities that are
                especially important when discussing pregnancy-related decisions.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials with international fellowship training.
                </li>
                <li>
                  Extensive experience in comprehensive women&apos;s
                  reproductive healthcare.
                </li>
                <li>
                  Access to advanced ultrasound technology for accurate
                  pregnancy dating.
                </li>
                <li>
                  Known for a compassionate, respectful, and confidential
                  consultation approach.
                </li>
                <li>
                  Strong emphasis on patient safety and adherence to medical and
                  legal guidelines.
                </li>
                <li>
                  Trusted by women across Moradabad for sensitive and private
                  healthcare needs.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Your First Consultation Typically Involves
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A confidential discussion about your situation and what you
                  need.
                </li>
                <li>
                  An ultrasound scan to confirm gestational age accurately.
                </li>
                <li>
                  Basic health screening to check for any factors relevant to
                  your care.
                </li>
                <li>
                  A clear explanation of the options available to you, based on
                  your specific circumstances.
                </li>
                <li>
                  Honest answers to any questions or concerns you may have.
                </li>
                <li>
                  A follow-up plan tailored to your individual situation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Confidential, Professional Guidance Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ensures you have complete, accurate information before making
                  any decision.
                </li>
                <li>
                  Protects your physical safety through proper medical
                  supervision.
                </li>
                <li>
                  Respects your privacy and legal right to confidentiality.
                </li>
                <li>
                  Reduces anxiety through clear communication and support.
                </li>
                <li>
                  Provides a safety net for follow-up care and monitoring.
                </li>
                <li>
                  Connects you with legitimate, registered medical care rather
                  than unverified sources.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Abortion in India
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Abortion is illegal in India.{" "}
                  <strong>Fact:</strong> Abortion is legal under the MTP Act when
                  performed by a registered practitioner within specified
                  guidelines.
                </li>
                <li>
                  <strong>Myth:</strong> You need a husband&apos;s or
                  family&apos;s consent for an abortion. <strong>Fact:</strong>{" "}
                  The law recognizes a woman&apos;s own consent as sufficient in
                  most circumstances; a doctor can clarify specifics for your
                  situation.
                </li>
                <li>
                  <strong>Myth:</strong> All abortion pills available online are
                  safe to use without medical supervision. <strong>Fact:</strong>{" "}
                  Medication abortion should only be taken under a doctor&apos;s
                  guidance to ensure safety and completeness.
                </li>
                <li>
                  <strong>Myth:</strong> Abortion always affects future
                  fertility. <strong>Fact:</strong> A safe, medically supervised
                  abortion generally does not affect future fertility.
                </li>
                <li>
                  <strong>Myth:</strong> There is only one method of abortion.{" "}
                  <strong>Fact:</strong> The appropriate method depends on
                  gestational age and individual health factors, determined
                  through medical evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> You must justify your reasons
                  extensively to receive care. <strong>Fact:</strong> A
                  registered doctor&apos;s role is to provide safe, confidential
                  guidance based on your circumstances and applicable legal
                  criteria.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some cramping and bleeding is normal for a period of days
                  following the procedure, as guided by your doctor.
                </li>
                <li>
                  Rest and avoiding strenuous activity is generally recommended
                  in the initial recovery period.
                </li>
                <li>
                  A follow-up visit is typically scheduled to confirm the
                  process is complete.
                </li>
                <li>
                  Watch for warning signs such as heavy bleeding, severe pain,
                  or fever, and contact your doctor immediately if these occur.
                </li>
                <li>
                  Emotional support is available and encouraged; it&apos;s
                  normal to experience a range of emotions afterward.
                </li>
                <li>
                  Guidance on future contraception is usually offered to support
                  your reproductive health going forward.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Support and Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                It&apos;s normal to experience a mix of emotions, including
                relief, sadness, or uncertainty, after this decision.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  There is no single &quot;right&quot; way to feel, and your
                  emotional experience is valid.
                </li>
                <li>
                  Speaking openly with your doctor about how you&apos;re feeling
                  is encouraged.
                </li>
                <li>
                  Support from a trusted friend, partner, or family member can
                  help, if you choose to share.
                </li>
                <li>
                  Confidential counselling support can be arranged if you feel
                  you need additional emotional care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking a Confidential Consultation with Dr. Priyanka Pachauri,
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you need confidential, accurate guidance regarding pregnancy
                options, Dr. Priyanka Pachauri&apos;s clinic in Moradabad offers
                a respectful, private, and medically sound consultation.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call for Appointment</p>
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
                Choosing to consult a doctor for safe abortion in Moradabad
                rather than relying on unverified sources is one of the most
                important decisions you can make for your health and safety. A
                registered, experienced gynaecologist like Dr. Priyanka Pachauri
                ensures your care is legal, medically sound, confidential, and
                free of judgment — giving you the accurate information and
                support you need to make the right decision for yourself.
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
