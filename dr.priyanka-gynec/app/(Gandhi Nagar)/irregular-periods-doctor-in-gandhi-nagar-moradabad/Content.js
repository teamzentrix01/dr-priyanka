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

export default function IrregularPeriodsDoctorGandhiNagar() {
  const faqs = [
    {
      q: "Can stress change my periods?",
      a: "It can coincide with changes, but repeated irregularity should be checked by a doctor.",
    },
    {
      q: "Can travel or shift work affect cycles?",
      a: "They may, but ask a doctor if changes persist.",
    },
    {
      q: "Why keep a combined diary?",
      a: "It links your cycle with routine and helps your doctor see patterns.",
    },
    {
      q: "Which doctor should I see first?",
      a: "A gynaecologist is usually a good starting point.",
    },
    {
      q: "When is it an emergency?",
      a: "Sudden severe pain, bleeding that soaks protection hourly or fainting need immediate care.",
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
                Irregular Periods Doctor in Gandhi Nagar, Moradabad: How Daily
                Routine Can Affect Your Cycle
              </h1>

              <p className="mb-4 text-gray-700">
                Cycles do not run in isolation. Busy schedules, poor sleep,
                stress, travel and big routine changes can all coincide with a
                late or unusual period. Still, a pattern that keeps repeating
                deserves a doctor&apos;s attention rather than a guess. This
                guide explains how routine and cycles are linked, when to see a
                doctor and how to choose one. It is general information, not
                medical advice. It names no individual doctors, because I cannot
                verify or rank them, and only a qualified doctor can diagnose
                you or advise treatment.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                sections on clinic environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cycles Respond to Life
              </h2>

              <p className="mb-4 text-gray-700">
                The body&apos;s hormonal rhythm can shift with circumstances. A
                single changed cycle after a stressful month is not always a
                concern. Repeated changes are worth checking.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Stress and worry</li>
                <li>Disturbed sleep or shift work</li>
                <li>Travel and time-zone changes</li>
                <li>Illness or recovery from it</li>
                <li>
                  Large changes in weight, food or exercise
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stress and Cycles
              </h2>

              <p className="mb-4 text-gray-700">
                Pressure at work or home is common. Do not assume stress is the
                only cause. Let a doctor confirm.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask yourself what changed around the time your cycle did.
                </li>
                <li>
                  Note exams, deadlines, family events or illness.
                </li>
                <li>
                  Discuss lasting stress with your doctor, since support is
                  available.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Sleep and Shift Work
              </h2>

              <p className="mb-4 text-gray-700">
                Irregular sleep can accompany irregular cycles.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Note your usual sleep hours and any recent change.
                </li>
                <li>
                  Mention night shifts or frequent schedule changes to your
                  doctor.
                </li>
                <li>
                  Ask for advice that fits your work, not a generic routine.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Travel and Routine Changes
              </h2>

              <p className="mb-4 text-gray-700">
                Short-term disruption sometimes settles.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Record travel dates beside your period dates.</li>
                <li>
                  Note changes in climate, food or daily habits.
                </li>
                <li>
                  Report cycles that do not settle after routine returns to
                  normal.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Food, Weight and Exercise
              </h2>

              <p className="mb-4 text-gray-700">
                Large changes can matter. Avoid crash diets and unverified
                plans.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note sudden weight gain or loss.</li>
                <li>
                  Mention major diet changes or intense training.
                </li>
                <li>
                  Ask your doctor or a qualified dietitian for personal
                  guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When It May Not Be Routine
              </h2>

              <p className="mb-4 text-gray-700">
                Do not blame lifestyle alone if you notice any of the following.
                A doctor can look for other causes.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycles that stay irregular for several months
                </li>
                <li>
                  Periods that stop for months without pregnancy
                </li>
                <li>Very heavy or prolonged bleeding</li>
                <li>Bleeding between periods or after intimacy</li>
                <li>Severe pain</li>
                <li>
                  Acne, excess hair growth or other changes alongside
                  irregularity
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Urgent Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Seek urgent care for the following. Do not wait for an
                appointment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden severe pain</li>
                <li>
                  Bleeding that soaks protection every hour
                </li>
                <li>Fainting or dizziness</li>
                <li>Heavy bleeding in possible pregnancy</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Keep a Combined Diary
              </h2>

              <p className="mb-4 text-gray-700">
                A diary that links cycle and routine is very useful. Two or
                three months of notes helps your doctor see patterns.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Period start and end dates and flow</li>
                <li>Pain and mood</li>
                <li>Sleep, stress level and major events</li>
                <li>Travel, illness and medicines</li>
                <li>Weight changes, if you track them</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Doctor to See
              </h2>

              <p className="mb-4 text-gray-700">
                A gynaecologist is usually the right starting point. Bring
                earlier reports and your diary.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>They examine you and advise tests.</li>
                <li>They may involve an endocrinologist or dietitian.</li>
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
                <li>Does the doctor ask about your routine and stress?</li>
                <li>Does the doctor explain in simple language?</li>
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
                <li>Could my routine be affecting my cycle?</li>
                <li>Which tests do I need, and why?</li>
                <li>
                  What are my options, including monitoring?
                </li>
                <li>Which changes may help me?</li>
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
                Medicines and Remedies
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Take medicines exactly as prescribed.</li>
                <li>Never start or stop medicines without advice.</li>
                <li>Avoid unverified supplements and remedies.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk to someone you trust.</li>
                <li>Tell your doctor if you feel low or anxious.</li>
                <li>Seek support if worry affects daily life.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Planners such as{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                focus on these elements when designing healthcare interiors.
                Clinical standards remain the responsibility of the medical
                team.
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
                <li>
                  Blaming stress alone and ignoring repeated irregularity
                </li>
                <li>Ignoring irregular periods for years</li>
                <li>Stopping medicines without advice</li>
                <li>Self-medicating from online advice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Gandhi
                Nagar, Moradabad
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
                      <p>Gandhi Nagar, Moradabad, Uttar Pradesh, India</p>
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