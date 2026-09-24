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

export default function MTPPillsVsSurgicalAbortionDoctor() {
  const faqs = [
    {
      q: "Is MTP legal in India?",
      a: "Yes, Medical Termination of Pregnancy is legal in India under the MTP Act, subject to specific conditions and gestational limits.",
    },
    {
      q: "What's the main difference between MTP pills and surgical abortion?",
      a: "MTP pills use doctor-prescribed medication over a few days, while surgical abortion involves a brief in-clinic procedure, both under medical supervision.",
    },
    {
      q: "Can I take MTP pills without consulting a doctor?",
      a: "No, self-managed termination without medical supervision carries serious health risks and is not recommended.",
    },
    {
      q: "How is the right method decided?",
      a: "Your doctor decides based on gestational age, health history, and a proper examination, including confirming the pregnancy is not ectopic.",
    },
    {
      q: "Is follow-up required after either method?",
      a: "Yes, both methods require a follow-up visit to confirm the process was complete and to monitor recovery.",
    },
    {
      q: "Is the consultation confidential?",
      a: "Yes, a proper MTP consultation is conducted privately and confidentially with your treating doctor.",
    },
    {
      q: "Does gynaecologistmoradabad.com offer MTP services?",
      a: "This specific service isn't listed on the website; it's best to contact the clinic directly to confirm availability.",
    },
    {
      q: "What should I bring to an MTP consultation?",
      a: "Bring any pregnancy confirmation test results, your last menstrual period date, and details of your medical history.",
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
                MTP Pills vs Surgical Abortion Doctor: A Complete Comparison
                Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Deciding between MTP (Medical Termination of Pregnancy) pills
                and surgical abortion is a deeply personal decision that should
                always be made with proper medical guidance. This guide explains
                the difference between the two approaches, who is generally
                eligible for each, safety considerations, and how to find the
                right doctor to consult before making this decision.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding MTP (Medical Termination of Pregnancy) in India
              </h2>

              <p className="mb-4 text-gray-700">
                Medical Termination of Pregnancy is legal in India under the MTP
                Act, subject to specific conditions and gestational limits set
                by law. Key points to understand:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  MTP is only legally and safely performed under the supervision
                  of a registered medical practitioner, at a facility approved
                  for this purpose.
                </li>
                <li>
                  The gestational age (how many weeks pregnant you are)
                  significantly influences which method — medical (pills) or
                  surgical — is appropriate and legally permitted.
                </li>
                <li>
                  Self-managed abortion without medical supervision, including
                  obtaining pills without a doctor&apos;s guidance, carries
                  serious health risks and is not a safe or recommended
                  approach.
                </li>
                <li>
                  A proper consultation is essential to confirm pregnancy
                  details (including gestational age and location, to rule out
                  ectopic pregnancy), assess your health, and determine the
                  safest and most appropriate method for your specific
                  situation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Medical Termination Using MTP Pills?
              </h2>

              <p className="mb-4 text-gray-700">
                The medical (pill-based) method uses a doctor-prescribed
                combination of medications to end a pregnancy, typically used in
                earlier stages of pregnancy as determined by your doctor.
              </p>

              <p className="mb-4 text-gray-700">Key facts about this approach:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It involves medications taken under medical supervision, in a
                  specific sequence prescribed by the doctor.
                </li>
                <li>
                  It is generally considered for early pregnancy, with the exact
                  gestational limit determined by your doctor based on medical
                  guidelines.
                </li>
                <li>
                  The process typically involves monitoring by the doctor,
                  including a follow-up visit to confirm the pregnancy has been
                  fully terminated.
                </li>
                <li>
                  Bleeding and cramping are expected as part of the process,
                  similar to a heavy period, though the doctor will explain
                  what&apos;s normal versus what needs medical attention.
                </li>
                <li>
                  A follow-up ultrasound or check-up is usually necessary to
                  confirm the procedure was complete and successful.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Surgical Abortion?
              </h2>

              <p className="mb-4 text-gray-700">
                Surgical methods involve a minor procedure performed at a clinic
                or hospital, typically used depending on gestational age or
                specific medical circumstances.
              </p>

              <p className="mb-4 text-gray-700">Key facts about surgical methods:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed under local or general anaesthesia, depending on the
                  specific procedure and gestational age.
                </li>
                <li>
                  Usually a relatively quick procedure, often completed within a
                  short hospital or clinic visit.
                </li>
                <li>
                  Can be used across a broader range of gestational ages
                  compared to the medical (pill) method, depending on legal and
                  medical guidelines.
                </li>
                <li>
                  Involves direct medical supervision throughout, with recovery
                  monitored before discharge.
                </li>
                <li>
                  A follow-up visit is still generally recommended to confirm
                  complete recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Differences Between MTP Pills and Surgical Abortion
              </h2>

              <div className="mb-6 overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 text-left text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                        Factor
                      </th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                        MTP Pills (Medical Method)
                      </th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                        Surgical Method
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Gestational suitability
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Generally early pregnancy, as determined by doctor
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Can be suitable across a broader range, per medical
                        assessment
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Procedure type
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Medication-based, taken under supervision
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Minor procedure performed at a clinic/hospital
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Anaesthesia
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Not typically required
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        May involve local or general anaesthesia
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Time involved
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Process occurs over a few days with monitoring
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Usually completed in a single clinic/hospital visit
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Physical experience
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Cramping and bleeding similar to a heavy period
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Procedure-related recovery, monitored on-site
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Follow-up
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Required to confirm complete termination
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Required to confirm recovery
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Influence Which Method Is Recommended
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor will consider several factors before recommending
                medical or surgical termination:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Gestational age</strong>, which is one of the most
                  significant factors in determining eligibility for each
                  method.
                </li>
                <li>
                  <strong>Overall health history</strong>, including any
                  pre-existing medical conditions.
                </li>
                <li>
                  <strong>Location of the pregnancy</strong>, to confirm it is
                  not ectopic (outside the uterus), which requires different
                  management entirely.
                </li>
                <li>
                  <strong>Personal preference</strong>, where medically
                  appropriate, since some women prefer the medical route while
                  others prefer a surgical approach.
                </li>
                <li>
                  <strong>Access to follow-up care</strong>, since both methods
                  require a follow-up visit to confirm the process was
                  successful.
                </li>
                <li>
                  <strong>Any specific medical contraindications</strong> that
                  might make one method safer than the other for you
                  individually.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Medical Supervision Is Essential for Either Method
              </h2>

              <p className="mb-4 text-gray-700">
                Regardless of which method is used, proper medical supervision
                is critical for several reasons:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Confirming gestational age accurately</strong>{" "}
                  through examination and ultrasound before proceeding.
                </li>
                <li>
                  <strong>Ruling out ectopic pregnancy</strong>, which requires
                  a completely different, urgent medical approach.
                </li>
                <li>
                  <strong>Monitoring for complications</strong>, such as
                  incomplete termination, excessive bleeding, or infection.
                </li>
                <li>
                  <strong>Providing appropriate pain management and support</strong>{" "}
                  throughout the process.
                </li>
                <li>
                  <strong>Ensuring legal compliance with the MTP Act</strong>,
                  including any required consent and documentation.
                </li>
                <li>
                  <strong>Offering follow-up contraception counseling</strong>,
                  if desired, to support future reproductive health planning.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks of Self-Managed Termination Without Medical Supervision
              </h2>

              <p className="mb-4 text-gray-700">
                It&apos;s important to understand why medical supervision
                matters so much:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Incorrect gestational age assessment</strong>{" "}
                  without proper examination can lead to using an inappropriate
                  or unsafe method.
                </li>
                <li>
                  <strong>Missed ectopic pregnancy</strong>, which can become
                  life-threatening without proper diagnosis and urgent care.
                </li>
                <li>
                  <strong>Incomplete termination</strong>, which can lead to
                  infection or the need for emergency surgical intervention
                  later.
                </li>
                <li>
                  <strong>Lack of monitoring for complications</strong>, such as
                  excessive bleeding, without medical support readily available.
                </li>
                <li>
                  <strong>No follow-up confirmation</strong>, leaving
                  uncertainty about whether the process was fully successful.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you are considering termination of pregnancy for any reason,
                consulting a qualified gynaecologist first is the safest and
                most responsible first step.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                A proper MTP consultation typically includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Confirmation of pregnancy and gestational age through
                  examination and ultrasound.
                </li>
                <li>
                  A private, confidential discussion of your situation and
                  preferences.
                </li>
                <li>
                  Explanation of both medical and surgical options, where
                  medically appropriate for your gestational age.
                </li>
                <li>
                  Review of your medical history to identify any relevant health
                  considerations.
                </li>
                <li>
                  Clear explanation of the chosen method, including what to
                  expect, risks, and the follow-up process.
                </li>
                <li>
                  Discussion of contraception options, if you wish to plan for
                  the future.
                </li>
                <li>
                  Emotional support and a judgment-free environment, since this
                  is often a difficult and personal decision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Based on my gestational age, which method do you recommend
                  and why?
                </li>
                <li>
                  What are the specific risks and success rates associated with
                  each option in my case?
                </li>
                <li>
                  What will the follow-up process involve, and when should I
                  return?
                </li>
                <li>
                  What symptoms during recovery would require me to contact you
                  immediately?
                </li>
                <li>
                  What contraception options should I consider going forward?
                </li>
                <li>
                  Is my pregnancy confirmed to be inside the uterus (not
                  ectopic)?
                </li>
                <li>
                  What is the total cost involved, including consultation,
                  procedure, and follow-up?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Support Throughout the Process
              </h2>

              <p className="mb-4 text-gray-700">
                This is often an emotionally significant decision, and a good
                doctor should provide:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A non-judgmental, confidential space to discuss your
                  situation.
                </li>
                <li>
                  Clear, honest information without pressure toward any
                  particular choice.
                </li>
                <li>
                  Time to ask questions and fully understand your options.
                </li>
                <li>
                  Guidance on emotional support resources, if needed, alongside
                  the medical process.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For those researching MTP pills vs surgical abortion, Dr.
                Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) is a gynaecologist based in Moradabad. Here&apos;s an honest
                look at what her website covers on this specific topic:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Her clinic, Dr. Priyanka Gynaec, is presented as a leading
                  gynaecology practice in Moradabad, offering pregnancy care,
                  laparoscopic surgery, diagnostic hysteroscopy, and
                  fertility/IVF treatment.
                </li>
                <li>
                  The website does not explicitly list MTP or pregnancy
                  termination services among its listed offerings, which
                  currently focus on antenatal/postnatal care, laparoscopic
                  surgery, and fertility treatment.
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
                Choosing between MTP pills and surgical abortion is a decision
                that should always be made with proper medical guidance —
                considering gestational age, health history, and personal
                circumstances. Both methods are safe when performed under
                appropriate medical supervision at a registered facility. The
                most important first step is a confidential, judgment-free
                consultation with a qualified gynaecologist who can confirm your
                specific situation and guide you toward the safest, most
                appropriate option.
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
