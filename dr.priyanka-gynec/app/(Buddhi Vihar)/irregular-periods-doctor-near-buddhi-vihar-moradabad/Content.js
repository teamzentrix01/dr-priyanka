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

export default function IrregularPeriodsDoctorBuddhiVihar() {
  const faqs = [
    {
      q: "Are irregular periods always serious?",
      a: "No, but persistent changes should be checked by a doctor.",
    },
    {
      q: "Are irregular cycles normal in teenagers?",
      a: "Early cycles often vary, but very painful or heavy periods deserve a check.",
    },
    {
      q: "Should bleeding after menopause be checked?",
      a: "Yes. Any bleeding after menopause needs prompt medical review.",
    },
    {
      q: "Which doctor should I see first?",
      a: "A gynaecologist is usually a good starting point.",
    },
    {
      q: "Should I track my periods?",
      a: "Yes. Cycle notes help the doctor understand your pattern.",
    },
    {
      q: "Can I ask for a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially if you feel unsure about the advice.",
    },
    {
      q: "Where can I learn more about clinic planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
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
                Irregular Periods Doctor Near Buddhi Vihar, Moradabad:
                Understanding Period Changes at Every Age
              </h1>

              <p className="mb-4 text-gray-700">
                What counts as &quot;irregular&quot; depends partly on age. A
                pattern that is common in a teenager may need attention in a
                woman in her thirties. Knowing what to expect at each stage
                helps you decide when a doctor&apos;s visit is worthwhile. This
                guide is general information, not medical advice. It names no
                individual doctors, because I cannot verify or rank them, and
                only a qualified doctor can diagnose you or advise treatment.
                Space Build works in interior planning, and its insight appears
                in the sections on clinic environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Age Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Hormones change across life. Your doctor judges what is expected
                for you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycles often settle slowly after the first periods.</li>
                <li>
                  Pregnancy, feeding and stress can shift patterns.
                </li>
                <li>
                  Later years bring changes linked to menopause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Teenage Years
              </h2>

              <p className="mb-4 text-gray-700">
                Cycles may take time to settle. A gentle, patient doctor makes a
                big difference at this age.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Early cycles can vary in length and flow.</li>
                <li>
                  Very painful, very heavy or absent periods deserve a check.
                </li>
                <li>
                  Parents can ask whether the doctor sees teenagers comfortably.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Young Adult Years
              </h2>

              <p className="mb-4 text-gray-700">
                Irregularity here is worth understanding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Changes in stress, sleep, weight or routine can affect cycles.
                </li>
                <li>Persistent irregularity should be checked.</li>
                <li>
                  Planning pregnancy makes cycle patterns especially relevant.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Pregnancy and During Feeding
              </h2>

              <p className="mb-4 text-gray-700">
                Cycles may take time to return.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Timing varies widely between women.</li>
                <li>
                  Ask your doctor what to expect in your case.
                </li>
                <li>
                  Report very heavy bleeding or other worries promptly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Years Before Menopause
              </h2>

              <p className="mb-4 text-gray-700">
                Changes are common in the late thirties and forties.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycles may become shorter, longer or unpredictable.
                </li>
                <li>Flow may change.</li>
                <li>
                  Any unusual bleeding pattern is worth discussing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Menopause
              </h2>

              <p className="mb-4 text-gray-700">
                Periods should not return.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Any bleeding after menopause needs prompt medical review.
                </li>
                <li>Do not wait or assume it is harmless.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Consider a visit if any of the following applies. Seek urgent
                care for sudden severe pain or very heavy bleeding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycles are consistently irregular</li>
                <li>
                  Periods stop for several months without pregnancy
                </li>
                <li>
                  Bleeding is very heavy or lasts unusually long
                </li>
                <li>You bleed between periods or after intimacy</li>
                <li>Pain affects daily life</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Track Your Cycle
              </h2>

              <p className="mb-4 text-gray-700">
                Records help the doctor greatly. A notebook or phone app is
                enough.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of each period.</li>
                <li>
                  Record how long bleeding lasts and how heavy it is.
                </li>
                <li>
                  Mark pain, mood changes and other symptoms.
                </li>
                <li>Note weight changes and major stress.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Doctor to See
              </h2>

              <p className="mb-4 text-gray-700">
                A gynaecologist is usually the right starting point.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some cases involve an endocrinologist or dietitian.
                </li>
                <li>
                  Your family doctor can guide you if you are unsure.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Doctors
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or earlier gynaecologist</li>
                <li>
                  Friends and relatives with similar experience
                </li>
                <li>Hospital and clinic listings</li>
                <li>Official medical council directories</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Verify Qualifications
              </h2>

              <p className="mb-4 text-gray-700">
                Credentials can be verified through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of experience in gynaecology</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen without judgement?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>
                  Does the doctor avoid pressure or fear-based advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Female or Male Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                This is a personal preference.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask when booking whether a female doctor is available.
                </li>
                <li>
                  You can request a female staff member during examinations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down, or take someone along.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What may be causing my pattern?</li>
                <li>Which tests do I need, and why?</li>
                <li>
                  What are my options, including monitoring?
                </li>
                <li>Which lifestyle changes may help?</li>
                <li>When should I return for follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests You May Be Advised
              </h2>

              <p className="mb-4 text-gray-700">
                Ask what each test will show.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A pregnancy test, where relevant</li>
                <li>Blood tests</li>
                <li>Ultrasound scans</li>
                <li>Other checks, depending on your case</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Daily Habits
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor or a qualified dietitian for personal guidance
                rather than following online plans. Do not start or stop
                medicines without advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Balanced, regular meals</li>
                <li>Regular activity you enjoy</li>
                <li>A steady sleep routine</li>
                <li>Stress management</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bring your cycle notes and past reports.</li>
                <li>List medicines and past conditions.</li>
                <li>Write down your questions.</li>
                <li>Take a trusted companion if you wish.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Planners such as Space Build focus on these elements when
                designing healthcare interiors. Clinical standards remain the
                responsibility of the medical team.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Privacy:</strong> Consultation doors do not open onto
                  the waiting area, and registration is discreet.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, soft lighting
                  and short waits.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Costs and Second Opinions
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is acceptable if you feel unsure, and a good
                doctor will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask for an itemised bill covering consultation, tests and
                  follow-up.
                </li>
                <li>Check insurance acceptance, if relevant.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Dismissing your concerns</li>
                <li>Ignoring irregular periods for years</li>
                <li>Ignoring any bleeding after menopause</li>
                <li>Stopping medicines without advice</li>
                <li>Self-medicating from online advice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning Near Buddhi
                Vihar, Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Interior Partner</p>
                      <p>Space Build</p>
                      <p className="text-sm text-gray-600">
                        Healthcare interior planning and clinic design support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Important Note</p>
                      <p className="text-sm text-gray-600">
                        This page provides general information only. It does not
                        recommend or rank any doctor. Consult a qualified
                        healthcare professional for diagnosis and treatment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+919927611780"
                        className="hover:underline"
                      >
                        +91 99276 11780
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+918077973797"
                        className="hover:underline"
                      >
                        +91 80779 73797
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:spacebuild.india@gmail.com"
                        className="break-all hover:underline"
                      >
                        spacebuild.india@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p>Near Buddhi Vihar, Moradabad, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.spacebuild.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.spacebuild.co.in
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
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQ)
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