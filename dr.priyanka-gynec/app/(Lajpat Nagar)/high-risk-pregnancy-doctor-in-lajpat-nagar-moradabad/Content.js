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

export default function HighRiskPregnancyDoctorLajpatNagar() {
  const faqs = [
    {
      q: "Is it normal to feel very anxious?",
      a: "Yes. Tell your doctor if worry affects sleep, eating or daily life.",
    },
    {
      q: "Does high risk mean something will go wrong?",
      a: "No. It means closer monitoring and early action are advised.",
    },
    {
      q: "How can my family help?",
      a: "By listening, sharing chores and learning the warning signs.",
    },
    {
      q: "What symptoms need urgent help?",
      a: "Follow your doctor&apos;s list. Heavy bleeding, severe pain and reduced baby movements need immediate attention.",
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
      q: "Should I avoid searching online?",
      a: "Limit it, and ask your doctor for reliable sources.",
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
                High Risk Pregnancy Doctor in Lajpat Nagar, Moradabad: Managing
                Worry and Finding Emotional Support
              </h1>

              <p className="mb-4 text-gray-700">
                Being told a pregnancy is &quot;high risk&quot; often brings
                fear, guilt and sleepless nights. The label means closer
                monitoring and early action, not that something will go wrong.
                Looking after your mind is part of looking after the pregnancy.
                This guide covers emotional coping, family support and how to
                choose a doctor and hospital. It is general information, not
                medical advice. It names no individual doctors, because I cannot
                verify or rank them, and only a qualified doctor can assess your
                pregnancy. If you have warning signs, contact your doctor or go
                to an emergency facility immediately.{" "}
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
                What &quot;High Risk&quot; Means
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor sees a higher chance of complications. Many high
                risk pregnancies end well when care is timely.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Checkups, tests and scans may be more frequent.
                </li>
                <li>Delivery planning is usually discussed earlier.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Worry Is Normal
              </h2>

              <p className="mb-4 text-gray-700">
                Strong feelings are expected. Naming these feelings makes them
                easier to handle.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fear of complications</li>
                <li>
                  Guilt, wondering if you caused it (you almost never did)
                </li>
                <li>Anxiety before every test or scan</li>
                <li>Frustration with restrictions</li>
                <li>Feeling alone</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Get Clear Information
              </h2>

              <p className="mb-4 text-gray-700">
                Uncertainty feeds anxiety. Write the answers down for family.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask your doctor why the pregnancy is considered high risk.
                </li>
                <li>Ask what the plan is, in plain words.</li>
                <li>Ask which signs need urgent attention.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing a Doctor Who Listens
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

              <p className="mb-4 text-gray-700">
                You should leave informed, not overwhelmed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Does the doctor explain risks honestly without causing
                  needless fear?
                </li>
                <li>
                  Does the doctor welcome questions about your worries?
                </li>
                <li>Does the doctor respect your feelings?</li>
                <li>Does the doctor avoid pressure?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Why is my pregnancy high risk?</li>
                <li>
                  How often will I need checkups and scans?
                </li>
                <li>Which symptoms need an immediate call?</li>
                <li>
                  How can I reach the clinic between visits?
                </li>
                <li>Where will delivery take place?</li>
                <li>What emotional support is available?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Know the Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for your personal list. Knowing exactly what to watch for
                reduces constant worrying.
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
                Limit Alarming Information
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Avoid searching symptoms late at night.</li>
                <li>
                  Do not compare your case with online stories.
                </li>
                <li>
                  Ask your doctor to recommend reliable sources.
                </li>
                <li>Mute groups that increase your fear.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Daily Calming Habits
              </h2>

              <p className="mb-4 text-gray-700">
                Advice must be personal, so check with your doctor.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Keep regular sleep and meal times.</li>
                <li>
                  Take gentle activity only if your doctor allows.
                </li>
                <li>Try slow breathing or quiet time.</li>
                <li>
                  Keep a short diary of thoughts and questions for the next
                  visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Talk About It
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Share your feelings with a trusted person.</li>
                <li>
                  Tell your partner what helps and what does not.
                </li>
                <li>
                  Tell your doctor if worry affects sleep or eating.
                </li>
                <li>Ask about counselling or support groups.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Professional Support
              </h2>

              <p className="mb-4 text-gray-700">
                Tell your doctor if you notice any of the following. Support and
                treatment are available. If you feel unsafe or have thoughts of
                harming yourself, seek immediate help.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Constant anxiety or panic</li>
                <li>Persistent low mood or loss of interest</li>
                <li>
                  Trouble sleeping beyond physical discomfort
                </li>
                <li>Inability to function day to day</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Family Can Help
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Listen without rushing to fix.</li>
                <li>Share chores so she can rest.</li>
                <li>Attend key visits if she wishes.</li>
                <li>Avoid blaming or scary stories.</li>
                <li>
                  Learn the warning signs and emergency plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Organise Records
              </h2>

              <p className="mb-4 text-gray-700">
                Being organised reduces last-minute stress.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>One folder, arranged by date</li>
                <li>Photo copies on two phones</li>
                <li>A one-page medicine and allergy summary</li>
                <li>
                  Carry the folder to every visit and to hospital
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Build an Emergency Plan
              </h2>

              <p className="mb-4 text-gray-700">
                A plan on paper calms the mind.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Decide the hospital and fastest route.</li>
                <li>Agree on who drives and a backup.</li>
                <li>Keep a packed bag ready.</li>
                <li>Save emergency numbers on several phones.</li>
                <li>
                  Arrange care for children or elders at home.
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
                  <strong>Calm:</strong> Quiet corridors, soft lighting and
                  sound-softening finishes.
                </li>
                <li>
                  <strong>Privacy:</strong> Screens and curtains in shared
                  areas.
                </li>
                <li>
                  <strong>Visibility:</strong> Layouts that let staff observe
                  patients easily.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors for
                  stretchers and lift access.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive beds and a seat for a
                  companion where allowed.
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
                <li>
                  Never delay urgent care while seeking another opinion.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Clear costs reduce one source of stress.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask for a written estimate for the pregnancy and delivery.
                </li>
                <li>
                  Ask about costs if the plan changes or a newborn needs extra
                  care.
                </li>
                <li>Check insurance coverage and the claim process.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Dismissing your fears</li>
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>Missing checkups or ignoring warning signs</li>
                <li>Hiding anxiety from your doctor</li>
                <li>Self-medicating from online advice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Lajpat
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
                        recommend or rank any doctor or hospital. Consult a
                        qualified healthcare professional for pregnancy care and
                        treatment.
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
                      <p>Lajpat Nagar, Moradabad, Uttar Pradesh, India</p>
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