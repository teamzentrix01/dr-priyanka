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

export default function FibroidSurgeryDoctorBuddhiVihar() {
  const faqs = [
    {
      q: "Do all fibroids need surgery?",
      a: "No. Many are only monitored, and treatment depends on symptoms, size and location.",
    },
    {
      q: "Why keep a symptom diary?",
      a: "It shows your doctor the pattern and helps in choosing the right option.",
    },
    {
      q: "Should I get a second opinion?",
      a: "It is sensible before surgery.",
    },
    {
      q: "How do I verify a surgeon&apos;s qualifications?",
      a: "Check the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Will fibroids affect pregnancy plans?",
      a: "It depends on their size and position. Ask your doctor about your case.",
    },
    {
      q: "How long is recovery?",
      a: "It varies. Your surgeon will give guidance for your case.",
    },
    {
      q: "Can I ask about costs upfront?",
      a: "Yes. Ask for a written estimate that lists what is included.",
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
                Fibroid Surgery Doctor Near Buddhi Vihar, Moradabad:
                Understanding Your Options Before You Decide
              </h1>

              <p className="mb-4 text-gray-700">
                A fibroid diagnosis does not automatically mean surgery. Many
                fibroids are only monitored, and treatment depends on symptoms,
                size, position and your future plans. The best preparation is
                understanding your options and arriving at the doctor&apos;s
                office with clear notes and good questions. This guide is
                general information, not medical advice. It names no individual
                doctors, because I cannot verify or rank them, and only a
                qualified doctor can diagnose you and recommend treatment.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                section on hospital environment.
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
                <li>
                  Many cause no symptoms and are found on routine scans.
                </li>
                <li>Some cause heavy periods, pressure or pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That May Prompt a Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Seek urgent care for sudden severe pain or very heavy bleeding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy or prolonged periods</li>
                <li>Pelvic pain or pressure</li>
                <li>Frequent urination or bloating</li>
                <li>Pain during periods or intimacy</li>
                <li>Difficulty conceiving</li>
                <li>A fibroid found on a scan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Keep a Symptom Diary
              </h2>

              <p className="mb-4 text-gray-700">
                A diary helps your doctor see the pattern. Two or three months
                of notes is very useful.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Record period dates and how heavy the bleeding is.
                </li>
                <li>Note pain, its timing and severity.</li>
                <li>
                  Mark bloating, urinary changes and tiredness.
                </li>
                <li>
                  Note how symptoms affect work and daily life.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options in General
              </h2>

              <p className="mb-4 text-gray-700">
                Options depend on your case, so discuss each with your doctor.
                Ask why a particular option is advised for you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Watchful Monitoring:</strong> Regular checks when
                  symptoms are mild or absent.
                </li>
                <li>
                  <strong>Medicines:</strong> To manage symptoms, where
                  suitable.
                </li>
                <li>
                  <strong>Procedures:</strong> Selected less invasive approaches
                  for certain cases.
                </li>
                <li>
                  <strong>Surgery to Remove Fibroids:</strong> Keeps the uterus,
                  often considered when future pregnancy matters.
                </li>
                <li>
                  <strong>Surgery to Remove the Uterus:</strong> Considered in
                  specific situations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Surgery Is Not Always the First Step
              </h2>

              <p className="mb-4 text-gray-700">
                A good doctor explains the trade-offs honestly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask how urgent treatment really is.</li>
                <li>Ask what happens if you wait and monitor.</li>
                <li>Ask what signs would change the plan.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Think About Future Plans
              </h2>

              <p className="mb-4 text-gray-700">
                Your goals shape the choice. Share these openly, since they
                change the advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Do you hope to have children in future?</li>
                <li>How do symptoms affect your daily life?</li>
                <li>How do you feel about different options?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is sensible before surgery. A good doctor will not be
                offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Compare explanations, not only recommendations.
                </li>
                <li>
                  Carry the same scans and reports to every visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Specialists
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your gynaecologist or family doctor</li>
                <li>Friends and relatives with similar experience</li>
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

              <p className="mb-4 text-gray-700">
                You should leave informed, not rushed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen to your full history?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>
                  Does the doctor discuss alternatives and avoid pressure?
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
                <li>
                  What type and size of fibroid do I have, and where is it?
                </li>
                <li>Does it need treatment now?</li>
                <li>What are all my options?</li>
                <li>What are the benefits and risks of each?</li>
                <li>
                  How will each affect future pregnancy plans?
                </li>
                <li>
                  How long are the hospital stay and recovery?
                </li>
                <li>What follow-up will I need?</li>
                <li>What is the total estimated cost?</li>
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
                <li>Ultrasound scans</li>
                <li>Blood tests</li>
                <li>Other imaging, if needed</li>
                <li>Anaesthesia fitness checks before surgery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consent
              </h2>

              <p className="mb-4 text-gray-700">
                Never sign without understanding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Understand what will be done and why.</li>
                <li>Know the risks and expected recovery.</li>
                <li>Read consent forms carefully.</li>
                <li>Ask about anything unclear.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Surgery, If Advised
              </h2>

              <p className="mb-4 text-gray-700">
                Your surgeon will give specific instructions.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow guidance on food, drink and medicines.</li>
                <li>Arrange a family member to stay with you.</li>
                <li>Plan leave from work and household help.</li>
                <li>
                  Keep reports, ID and insurance papers together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery differs from person to person.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow wound care and activity advice.</li>
                <li>Take medicines exactly as prescribed.</li>
                <li>
                  Ask when driving, lifting and exercise are safe.
                </li>
                <li>Attend all follow-up visits.</li>
                <li>
                  Report fever, severe pain, heavy bleeding or wound changes
                  promptly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Visit in person before deciding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clean, well-maintained wards and operation areas</li>
                <li>Trained nursing and anaesthesia support</li>
                <li>Emergency and backup arrangements</li>
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
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Privacy:</strong> Curtains or partitions and quiet
                  waiting areas.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors for
                  stretchers and accessible washrooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, soft lighting
                  and good ventilation.
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
                <li>Surgeon, hospital and anaesthesia fees</li>
                <li>Medicines and follow-up visits</li>
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
                <li>
                  Dismissing questions or a second opinion
                </li>
                <li>Guaranteed results or unrealistic promises</li>
                <li>Unclear costs and no written estimate</li>
                <li>Unverifiable qualifications</li>
                <li>
                  Relying on online advice instead of a doctor
                </li>
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