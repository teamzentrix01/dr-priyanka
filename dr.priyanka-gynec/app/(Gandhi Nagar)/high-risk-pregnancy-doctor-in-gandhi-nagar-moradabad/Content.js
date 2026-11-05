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

export default function HighRiskPregnancyDoctorGandhiNagar() {
  const faqs = [
    {
      q: "What should I track in a high risk pregnancy?",
      a: "Only what your doctor advises. Ask for a personal list and how often to record it.",
    },
    {
      q: "Why keep a tracking sheet?",
      a: "It helps your doctor spot patterns and decide faster.",
    },
    {
      q: "What symptoms need urgent help?",
      a: "Follow your doctor&apos;s list. Heavy bleeding, severe pain and reduced baby movements need immediate attention.",
    },
    {
      q: "Should I bring my notes to every visit?",
      a: "Yes, along with reports and your medicine list.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, if time allows and you feel unsure.",
    },
    {
      q: "What should I ask about the hospital?",
      a: "Ask about emergency cover, anaesthesia, blood support and newborn care.",
    },
    {
      q: "Where can I learn more about hospital planning?",
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
                High Risk Pregnancy Doctor in Gandhi Nagar, Moradabad: A
                Tracking Sheet and Question List for Every Checkup
              </h1>

              <p className="mb-4 text-gray-700">
                A &quot;high risk&quot; label means closer monitoring, not that
                something will go wrong. One of the most useful things a family
                can do is keep clear, simple records so each checkup is
                productive. This guide explains what to track, which questions
                to bring and how to judge a doctor and hospital. It is general
                information, not medical advice. It names no individual doctors,
                because I cannot verify or rank them, and only your own doctor
                can tell you what to measure, how often and what counts as
                urgent. If you have warning signs, contact your doctor or go to
                an emergency facility immediately.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                sections on hospital environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Keep a Tracking Sheet
              </h2>

              <p className="mb-4 text-gray-700">
                Good records help your doctor decide faster. Track only what
                your doctor asks you to track.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Memory is unreliable between visits.</li>
                <li>Patterns are easier to spot on paper.</li>
                <li>Calm, factual notes reduce anxiety.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ask Your Doctor What to Track
              </h2>

              <p className="mb-4 text-gray-700">
                Every case differs. Write the answers on the first page of your
                notebook.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Which measurements or symptoms matter for you?
                </li>
                <li>How often should you record them?</li>
                <li>
                  What readings or changes should prompt a call?
                </li>
                <li>Who should you call, and at what hours?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Build a Simple Sheet
              </h2>

              <p className="mb-4 text-gray-700">
                A notebook or phone note is enough. Keep the format the same
                every day.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Date and time of each entry</li>
                <li>
                  The item tracked, such as symptoms or readings your doctor
                  requested
                </li>
                <li>Medicines taken and any missed doses</li>
                <li>Questions that came to mind</li>
                <li>Anything unusual, however small</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms Diary
              </h2>

              <p className="mb-4 text-gray-700">
                Do not diagnose yourself. Just record.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Note new or changing symptoms and when they began.
                </li>
                <li>
                  Record how long they last and what makes them better or worse.
                </li>
                <li>
                  Mention headaches, swelling, pain, bleeding or fluid leakage
                  if they occur.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Baby Movement Notes
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor whether and how to track this. Do not wait for
                the next appointment if movement reduces.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Learn what your doctor considers a normal pattern for you.
                </li>
                <li>
                  Note the time of day you feel the most movement.
                </li>
                <li>Report a clear drop in movement immediately.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Readings
              </h2>

              <p className="mb-4 text-gray-700">
                Only measure what your doctor advises.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Use the equipment and method your doctor recommends.
                </li>
                <li>
                  Record readings at the same time each day, if advised.
                </li>
                <li>Bring the log to every visit.</li>
                <li>Ask what readings should trigger a call.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicine Log
              </h2>

              <p className="mb-4 text-gray-700">
                Never stop or change a medicine without asking your doctor.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  List every medicine and supplement, with dose and timing.
                </li>
                <li>Tick off each dose.</li>
                <li>Note side effects.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Report and Scan Folder
              </h2>

              <p className="mb-4 text-gray-700">
                Carry the folder to every visit and to hospital.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>One folder, arranged by date</li>
                <li>
                  Photo copies on your phone and your partner&apos;s phone
                </li>
                <li>
                  A one-page summary of medicines, allergies and past conditions
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Know the Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor for your personal list. Seek immediate care if
                these occur.
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
                Questions to Bring to Each Checkup
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down, or ask your companion to.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Is my pregnancy progressing as expected?</li>
                <li>Do any results need follow-up?</li>
                <li>
                  Should my medicines, tests or schedule change?
                </li>
                <li>Which signs should I watch for this month?</li>
                <li>When is the next scan or test?</li>
                <li>How does this affect delivery planning?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing a Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or current gynaecologist</li>
                <li>
                  Friends and relatives with similar experiences
                </li>
                <li>Hospital listings</li>
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
                <li>Experience with high risk cases</li>
                <li>The hospital where the doctor delivers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor review your notes seriously?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>
                  Does the doctor discuss risks honestly without causing
                  needless fear?
                </li>
                <li>
                  Does the doctor welcome questions and avoid pressure?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is acceptable and often reassuring. A good doctor will not be
                offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Carry the same reports and tracking sheet.</li>
                <li>
                  Never delay urgent care while seeking another opinion.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Visit before your due date if possible.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Distance from home and night-time travel</li>
                <li>
                  Round-the-clock emergency and obstetric cover
                </li>
                <li>Anaesthesia and blood support</li>
                <li>
                  A newborn care unit or clear transfer arrangements
                </li>
                <li>Trained nursing staff</li>
                <li>Clear billing and discharge process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Hospital Environment Looks Like
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
                  <strong>Visibility:</strong> Layouts that let staff observe
                  patients easily.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors for
                  stretchers, non-slip floors and lift access.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Privacy:</strong> Screens and curtains in shared
                  areas.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive beds, soft lighting, good
                  ventilation and a seat for a companion.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Plan
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Decide the hospital and fastest route.</li>
                <li>Agree on who drives and a backup.</li>
                <li>
                  Keep a packed bag and the document folder ready.
                </li>
                <li>
                  Save emergency numbers on several phones.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Limit alarming online content.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Share worries with someone you trust.</li>
                <li>Tell your doctor if you feel anxious or low.</li>
                <li>Ask about counselling or support groups.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask for a written estimate for the pregnancy and delivery.
                </li>
                <li>
                  Ask about costs if the plan changes or a newborn needs extra
                  care.
                </li>
                <li>
                  Check insurance coverage and the claim process.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>
                  Dismissing your concerns or a second opinion
                </li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>Missing checkups or ignoring warning signs</li>
                <li>Self-medicating from online advice</li>
                <li>Keeping reports scattered</li>
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
                        Healthcare interior planning and hospital design support
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
                        healthcare professional for pregnancy assessment and
                        urgent concerns.
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