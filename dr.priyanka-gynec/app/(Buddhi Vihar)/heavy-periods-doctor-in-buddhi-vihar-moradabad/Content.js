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

export default function HeavyPeriodsDoctorBuddhiVihar() {
  const faqs = [
    {
      q: "Are heavy periods normal?",
      a: "They are common, but they should be checked, especially if they disrupt daily life.",
    },
    {
      q: "Can heavy periods cause tiredness?",
      a: "Yes, they can. A doctor can check your blood levels.",
    },
    {
      q: "Which doctor should I see?",
      a: "A gynaecologist is usually the right starting point.",
    },
    {
      q: "Why keep a bleeding diary?",
      a: "It shows your doctor the pattern and helps guide tests and treatment.",
    },
    {
      q: "When is it an emergency?",
      a: "Soaking through protection hourly, fainting, severe pain or heavy bleeding in pregnancy need immediate care.",
    },
    {
      q: "Can I ask for a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially before surgery or if you feel unsure.",
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
                Heavy Periods Doctor in Buddhi Vihar, Moradabad: Recognising
                Heavy Bleeding and Getting the Right Help
              </h1>

              <p className="mb-4 text-gray-700">
                Many women live with heavy periods for years because they assume
                it is normal or feel embarrassed to mention it. Heavy bleeding
                can drain energy, disrupt work and sometimes signals a condition
                that deserves treatment. This guide explains how to recognise
                it, how to prepare for a visit and how to choose a doctor and
                clinic. It is general information, not medical advice. It names
                no individual doctors, because I cannot verify or rank them, and
                only a qualified doctor can diagnose you or advise treatment.{" "}
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
                What Counts as Heavy Bleeding?
              </h2>

              <p className="mb-4 text-gray-700">
                There is no single number, so look at how it affects you. If it
                disrupts daily life, it is worth discussing with a doctor.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Soaking through pads or other protection very quickly
                </li>
                <li>Needing to change protection at night</li>
                <li>Passing large clots</li>
                <li>
                  Bleeding for much longer than your usual pattern
                </li>
                <li>Planning your day around your period</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why It Should Not Be Ignored
              </h2>

              <p className="mb-4 text-gray-700">
                Heavy periods can affect your health. Do not assume it is
                something you must simply tolerate.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  They may cause tiredness, dizziness or breathlessness.
                </li>
                <li>
                  Repeated heavy loss may lead to low iron, which a doctor can
                  check.
                </li>
                <li>
                  They can hide an underlying condition that needs treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Possible Causes
              </h2>

              <p className="mb-4 text-gray-700">
                Only a doctor can find yours. Never self-diagnose from symptoms
                alone.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Hormonal imbalance</li>
                <li>
                  Growths in the uterus, such as fibroids or polyps
                </li>
                <li>Conditions affecting the uterine lining</li>
                <li>Thyroid or clotting-related conditions</li>
                <li>Certain medicines</li>
                <li>Pregnancy-related causes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Care
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait for an appointment if you have any of the following.
                Go to an emergency facility immediately.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bleeding that soaks through protection every hour for several
                  hours
                </li>
                <li>Dizziness, fainting or a racing heart</li>
                <li>Severe pain with heavy bleeding</li>
                <li>
                  Heavy bleeding while pregnant or possibly pregnant
                </li>
                <li>Fever with heavy bleeding</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs to Book a Routine Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy bleeding that repeats cycle after cycle
                </li>
                <li>Periods lasting much longer than before</li>
                <li>Bleeding between periods or after intimacy</li>
                <li>Constant tiredness or paleness</li>
                <li>Pain that affects daily life</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Keep a Bleeding Diary
              </h2>

              <p className="mb-4 text-gray-700">
                A diary helps your doctor more than memory. Two or three months
                of notes is very useful.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Record start and end dates of each period.</li>
                <li>
                  Note how many times you change protection each day.
                </li>
                <li>Mark clots and their size.</li>
                <li>Note pain, dizziness and tiredness.</li>
                <li>
                  Record how it affects work and activities.
                </li>
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
                <li>They may involve other specialists if needed.</li>
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
                <li>
                  Blood tests, including checks for iron levels
                </li>
                <li>Ultrasound scans</li>
                <li>Other tests, depending on your case</li>
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

              <p className="mb-4 text-gray-700">
                You should leave feeling heard.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen without judgement?</li>
                <li>
                  Does the doctor take your symptoms seriously?
                </li>
                <li>Does the doctor explain in simple language?</li>
                <li>
                  Does the doctor welcome questions and avoid pressure?
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
                <li>What may be causing my heavy bleeding?</li>
                <li>Which tests do I need, and why?</li>
                <li>
                  What are my options, with benefits and risks?
                </li>
                <li>Do I need iron or other support?</li>
                <li>
                  How will treatment affect future pregnancy plans?
                </li>
                <li>When should I return for follow-up?</li>
                <li>
                  Which symptoms should make me call urgently?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Is Personal
              </h2>

              <p className="mb-4 text-gray-700">
                Options depend on the cause and your goals. Do not start or stop
                medicines without your doctor&apos;s advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Medicines to reduce bleeding or regulate cycles, where
                  suitable
                </li>
                <li>Treatment of any underlying condition</li>
                <li>Procedures or surgery in selected cases</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Everyday Support
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor about nutrition for your case. Avoid unverified
                remedies and supplements.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat regular meals, and ask your doctor about iron and
                  nutrition for your case.
                </li>
                <li>Rest when you feel drained.</li>
                <li>
                  Keep spare protection and a change of clothes handy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Heavy periods can affect confidence and social life.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk to someone you trust.</li>
                <li>Tell your doctor how much it affects you.</li>
                <li>
                  Seek support if worry or low mood continues.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is acceptable if you feel unsure, especially before surgery.
                A good doctor will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Carry the same reports to each visit.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for an itemised bill.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation fee and follow-up charges</li>
                <li>Test and scan costs</li>
                <li>Medicine and procedure costs</li>
                <li>Insurance acceptance, if relevant</li>
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
                  clean washrooms close by.
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
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Dismissing your concerns</li>
                <li>
                  Living with heavy bleeding for years without a check
                </li>
                <li>Ignoring tiredness and dizziness</li>
                <li>Stopping medicines without advice</li>
                <li>Self-medicating from online advice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Buddhi
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
                      <p>Buddhi Vihar, Moradabad, Uttar Pradesh, India</p>
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