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

export default function AntenatalCareDoctorBuddhiVihar() {
  const faqs = [
    {
      q: "When should I start antenatal checkups?",
      a: "As soon as you know or suspect you are pregnant. Your doctor will set the schedule.",
    },
    {
      q: "Which doctor leads antenatal care?",
      a: "An obstetrician or gynaecologist, supported by nurses and other specialists.",
    },
    {
      q: "How often are checkups needed?",
      a: "It varies by case, and visits usually become more frequent later in pregnancy.",
    },
    {
      q: "Can I request a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "What should I bring to each visit?",
      a: "Reports, a medicine list and your questions.",
    },
    {
      q: "What symptoms need urgent help?",
      a: "Heavy bleeding, severe pain or reduced baby movements. Follow your doctor&apos;s specific advice.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, if you feel unsure about the advice.",
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
                Antenatal Care Doctor in Buddhi Vihar, Moradabad: A
                Trimester-Wise Guide to Checkups
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy lasts about nine months, and care changes as it moves
                along. Knowing what each stage usually involves helps you ask
                better questions and prepare for every visit. This guide gives a
                general overview and a checklist for choosing a doctor and
                clinic. It is general information, not medical advice. It names
                no individual doctors, because I cannot verify or rank them, and
                your own doctor decides your schedule, tests and treatment.{" "}
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
                What Is Antenatal Care?
              </h2>

              <p className="mb-4 text-gray-700">
                It is the medical care given during pregnancy. Schedules differ
                for every woman.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular checkups to monitor you and your baby</li>
                <li>Tests and scans advised by your doctor</li>
                <li>Guidance on food, activity and rest</li>
                <li>Planning for delivery and early newborn care</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Start
              </h2>

              <p className="mb-4 text-gray-700">
                Contact a doctor as soon as you know or suspect you are pregnant.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Early guidance is valuable.</li>
                <li>Your doctor will set the timing of the first visit.</li>
                <li>Report any worrying symptoms promptly.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                First Trimester: The Early Weeks
              </h2>

              <p className="mb-4 text-gray-700">
                This stage is usually about confirmation and baseline checks.
                Never start or stop medicines without medical advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Confirming the pregnancy and taking your history
                </li>
                <li>Basic examination and recommended tests</li>
                <li>
                  Early discussion of food, supplements and medicines
                </li>
                <li>Guidance on common early symptoms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Second Trimester: The Middle Months
              </h2>

              <p className="mb-4 text-gray-700">
                Many women feel more settled here. Ask your doctor what to watch
                for and when to call.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular weight and blood pressure checks</li>
                <li>Scans and tests your doctor advises</li>
                <li>Discussion of baby movements</li>
                <li>Guidance on activity, posture and rest</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Third Trimester: The Final Months
              </h2>

              <p className="mb-4 text-gray-700">
                Attention turns to delivery planning. Keep emergency contacts
                and transport ready.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent checkups</li>
                <li>
                  Monitoring of the baby&apos;s growth and position, as advised
                </li>
                <li>Birth plan and hospital discussion</li>
                <li>
                  Signs of labour and when to go to hospital
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs to Discuss
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor which symptoms need urgent attention. Seek
                immediate care if you notice these.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding</li>
                <li>Severe or constant pain</li>
                <li>Reduced baby movements</li>
                <li>Leaking fluid</li>
                <li>
                  Severe headache with vision changes or swelling
                </li>
                <li>Fever</li>
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
                <li>Trusted friends and relatives</li>
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
                <li>Years of experience in obstetrics</li>
                <li>The hospital where delivery would take place</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                You will visit often, so rapport matters.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Does the doctor listen to your history and worries?
                </li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>
                  Does the doctor avoid fear-based or pressured advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Female or Male Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                This is a personal preference. Choose the person who helps you
                speak openly.
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
                <li>How often will I need checkups?</li>
                <li>
                  Which tests and scans will I need, and when?
                </li>
                <li>Which symptoms need an urgent call?</li>
                <li>
                  How can I reach the clinic between visits?
                </li>
                <li>Where will delivery take place?</li>
                <li>
                  What are the estimated costs across the pregnancy?
                </li>
                <li>Who covers if you are unavailable?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Each Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note symptoms and questions beforehand.</li>
                <li>
                  Bring earlier reports, scans and the prescription file.
                </li>
                <li>Carry a list of medicines and supplements.</li>
                <li>Wear comfortable, easy-to-change clothing.</li>
                <li>Take a family member if you wish.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests and Scans
              </h2>

              <p className="mb-4 text-gray-700">
                Ask what each test is for and when results will be ready. Let
                your obstetrician explain reports, rather than searching online.
                Sex determination through scans is prohibited by law in India.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask what each test is for.</li>
                <li>Ask when results will be ready.</li>
                <li>Ask whether any preparation is needed.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Food, Activity and Rest
              </h2>

              <p className="mb-4 text-gray-700">
                Advice must be personal. Avoid unverified remedies and online
                diets.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask your doctor about food, supplements and safe activity.
                </li>
                <li>Rest well and keep a regular routine.</li>
                <li>
                  Ask a qualified dietitian for a personal plan if needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Share worries with someone you trust.</li>
                <li>Tell your doctor if you feel anxious or low.</li>
                <li>
                  Ask about antenatal classes for information and support.
                </li>
                <li>Limit alarming online content.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Delivery Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Visit before your due date if possible.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Distance from home and night-time travel</li>
                <li>
                  Emergency and obstetric cover round the clock
                </li>
                <li>Anaesthesia, blood support and newborn care</li>
                <li>Clear billing and discharge process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Antenatal Clinic Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Design supports comfort for pregnant visitors. Planners such as{" "}
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
                  <strong>Seating:</strong> Supportive chairs with armrests at
                  an easy height.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and a
                  lift where needed.
                </li>
                <li>
                  <strong>Flooring:</strong> Non-slip surfaces.
                </li>
                <li>
                  <strong>Privacy:</strong> Consultation doors that do not open
                  onto the waiting area, and screened examination spaces.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous materials and
                  clean washrooms close by.
                </li>
                <li>
                  <strong>Atmosphere:</strong> Soft lighting, good ventilation
                  and short waits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Request a written estimate where possible.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation fee per visit</li>
                <li>Test and scan charges</li>
                <li>Delivery and hospital costs</li>
                <li>Medicine and follow-up charges</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is acceptable if you feel unsure. A good doctor will not be
                offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Carry the same reports to each visit.</li>
                <li>
                  Never delay urgent care while seeking another opinion.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs</li>
                <li>
                  Skipping checkups or ignoring warning signs
                </li>
                <li>Self-medicating from online advice</li>
                <li>
                  Leaving delivery planning until the last moment
                </li>
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
                        healthcare professional for pregnancy advice and urgent
                        concerns.
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