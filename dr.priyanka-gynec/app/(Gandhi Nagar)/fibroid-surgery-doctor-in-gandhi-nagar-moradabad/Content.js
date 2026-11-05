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

export default function FibroidSurgeryDoctorGandhiNagar() {
  const faqs = [
    {
      q: "Do all fibroids need surgery?",
      a: "No. Many are only monitored, and treatment depends on symptoms, size and location.",
    },
    {
      q: "Why keep a symptom diary?",
      a: "It shows your doctor the pattern and guides the choice of option.",
    },
    {
      q: "Which doctor should I see first?",
      a: "A gynaecologist is usually the right starting point.",
    },
    {
      q: "When is it an emergency?",
      a: "Sudden severe pain, bleeding that soaks protection hourly or fainting need immediate care.",
    },
    {
      q: "Should I get a second opinion?",
      a: "It is sensible before surgery.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Check the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Will fibroids affect pregnancy plans?",
      a: "It depends on their size and position. Ask your doctor.",
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
                Fibroid Surgery Doctor in Gandhi Nagar, Moradabad: Living with
                Fibroids Day to Day
              </h1>

              <p className="mb-4 text-gray-700">
                Many women live with fibroids for years, planning their days
                around heavy periods, pressure or pain. Surgery is only one
                option among several, and many fibroids are simply monitored.
                This guide focuses on daily life, when to seek help and how to
                choose a doctor. It is general information, not medical advice.
                It names no individual doctors, because I cannot verify or rank
                them, and only a qualified doctor can diagnose you and recommend
                treatment.{" "}
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
                What Are Fibroids?
              </h2>

              <p className="mb-4 text-gray-700">
                Fibroids are non-cancerous growths in or around the uterus.
                Never self-diagnose. A doctor&apos;s examination and scan are
                needed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>They vary in size, number and position.</li>
                <li>Many cause no symptoms.</li>
                <li>Some cause heavy periods, pressure or pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Symptoms Can Affect Daily Life
              </h2>

              <p className="mb-4 text-gray-700">
                If symptoms affect your life, they deserve attention.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy or prolonged periods that disrupt plans</li>
                <li>Pelvic pressure or pain</li>
                <li>Frequent urination or bloating</li>
                <li>Tiredness</li>
                <li>Discomfort during intimacy</li>
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
                <li>Dizziness or fainting</li>
                <li>Fever with pelvic pain</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Keep a Symptom Diary
              </h2>

              <p className="mb-4 text-gray-700">
                A diary shows your doctor the pattern. Two or three months of
                notes is very helpful.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Record period dates and flow.</li>
                <li>Note pain, timing and severity.</li>
                <li>
                  Mark bloating, urinary changes and tiredness.
                </li>
                <li>
                  Note how symptoms affect work and activities.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Work Days
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Keep spare protection and a change of clothes handy.
                </li>
                <li>
                  Plan important meetings with your cycle in mind, where
                  possible.
                </li>
                <li>Take short breaks when tired.</li>
                <li>
                  Tell a trusted colleague or manager if you need flexibility.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Managing Home and Family
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Share heavy chores during difficult days.</li>
                <li>Keep easy meals ready.</li>
                <li>Let family know when you need rest.</li>
                <li>Avoid pushing through severe pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Food and Rest
              </h2>

              <p className="mb-4 text-gray-700">
                Advice must be personal. Avoid unverified remedies and crash
                diets.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask your doctor about food, iron levels and supplements.
                </li>
                <li>Rest when drained.</li>
                <li>
                  Ask a qualified dietitian for a personal plan if needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Avoid comparing yourself with others.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk to someone you trust.</li>
                <li>
                  Tell your doctor how much symptoms affect you.
                </li>
                <li>
                  Seek support if worry or low mood continues.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Book a Routine Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy bleeding that repeats cycle after cycle
                </li>
                <li>Constant tiredness or paleness</li>
                <li>Growing pressure or pain</li>
                <li>Difficulty conceiving</li>
                <li>A fibroid found on a scan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Doctor to See
              </h2>

              <p className="mb-4 text-gray-700">
                A gynaecologist is usually the right starting point. Bring
                earlier scans and your diary.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>They examine you and advise tests.</li>
                <li>
                  They discuss options and refer you to a surgeon if needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Options in General
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor decides what suits you. Ask why a particular option
                is advised for you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Watchful monitoring</li>
                <li>
                  Medicines to manage symptoms, where suitable
                </li>
                <li>Selected procedures</li>
                <li>
                  Surgery to remove fibroids or the uterus in certain
                  situations
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Think About Future Plans
              </h2>

              <p className="mb-4 text-gray-700">
                Share these openly, since they change the advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Do you hope to have children?</li>
                <li>How do symptoms affect daily life?</li>
                <li>How do you feel about each option?</li>
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
                <li>Recognised medical degree and surgical training</li>
                <li>Registration with the relevant medical council</li>
                <li>Experience with the procedure proposed</li>
                <li>The hospital where surgery would take place</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen to your full history?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>
                  Does the doctor discuss alternatives and avoid pressure?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What type and size of fibroid do I have?</li>
                <li>Does it need treatment now?</li>
                <li>
                  What are all my options, with benefits and risks?
                </li>
                <li>
                  How will each affect future pregnancy plans?
                </li>
                <li>What is the estimated cost?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is sensible before surgery. A good doctor will not be
                offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Carry the same scans and reports to every visit.
                </li>
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
                  the waiting area.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  clean washrooms.
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
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Request a written estimate and ask what it includes.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation, test and scan charges</li>
                <li>
                  Surgeon, hospital and anaesthesia fees if surgery is advised
                </li>
                <li>Insurance coverage and claim process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pressure to book surgery immediately</li>
                <li>No explanation of alternatives</li>
                <li>Guaranteed results or unrealistic promises</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>
                  Living with heavy bleeding for years without a check
                </li>
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