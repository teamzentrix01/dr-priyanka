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

export default function HysteroscopyDoctorBuddhiVihar() {
  const faqs = [
    {
      q: "What is hysteroscopy used for?",
      a: "To look inside the uterus and, in some cases, treat certain findings.",
    },
    {
      q: "Is it always done under anaesthesia?",
      a: "Not always. Your doctor will explain the plan for your case.",
    },
    {
      q: "Is it a day-care procedure?",
      a: "Often, but it depends on the type and your health. Ask your doctor.",
    },
    {
      q: "How do I verify a doctor&apos;s qualifications?",
      a: "Check the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, if you feel unsure about the advice.",
    },
    {
      q: "What symptoms need urgent care afterwards?",
      a: "Fever, heavy bleeding, severe pain or foul-smelling discharge.",
    },
    {
      q: "Can I ask about costs upfront?",
      a: "Yes. Ask for a written estimate that lists what is included.",
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
                Hysteroscopy Doctor in Buddhi Vihar, Moradabad: What to Expect
                and How to Choose
              </h1>

              <p className="mb-4 text-gray-700">
                When a doctor suggests hysteroscopy, many women feel nervous
                about an unfamiliar procedure. Knowing what it involves, how to
                prepare and what to ask makes the experience far calmer. This
                guide covers the basics and how to judge a doctor and facility.
                It is general information, not medical advice. It names no
                individual doctors, because I cannot verify or rank them, and
                only a qualified doctor can diagnose you and recommend
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
                sections on clinic and hospital environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Hysteroscopy?
              </h2>

              <p className="mb-4 text-gray-700">
                It is a procedure to look inside the uterus. Your doctor decides
                whether it suits your condition.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A thin, lighted telescope-like instrument is passed through
                  the vagina and cervix.
                </li>
                <li>
                  The doctor views the uterine cavity on a screen.
                </li>
                <li>
                  It can be used to examine the lining and detect certain
                  problems.
                </li>
                <li>
                  In some cases, small treatments are done during the same
                  procedure.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostic and Operative Hysteroscopy
              </h2>

              <p className="mb-4 text-gray-700">
                There are two broad types. Ask which one is planned and why.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Diagnostic:</strong> Used to look and assess.
                </li>
                <li>
                  <strong>Operative:</strong> Used to treat certain findings
                  during the procedure.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Might It Be Advised?
              </h2>

              <p className="mb-4 text-gray-700">
                Only your doctor can say whether it applies to you. It is one
                tool among several, not always the first step.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Abnormal or heavy bleeding</li>
                <li>Bleeding between periods or after menopause</li>
                <li>Difficulty conceiving, in selected cases</li>
                <li>
                  Findings on a scan that need a closer look
                </li>
                <li>Repeated pregnancy loss, in selected cases</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms to Report
              </h2>

              <p className="mb-4 text-gray-700">
                Consider a gynaecology visit if you notice any of the following.
                Seek urgent care for sudden severe pain or very heavy bleeding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Very heavy or prolonged periods</li>
                <li>Bleeding between periods</li>
                <li>Any bleeding after menopause</li>
                <li>Pelvic pain or unusual discharge</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Doctor Performs It
              </h2>

              <p className="mb-4 text-gray-700">
                A gynaecologist with relevant training usually performs it.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask about their specific training and experience with
                  hysteroscopy.
                </li>
                <li>Ask how often they perform the procedure.</li>
                <li>
                  Ask who assists and who provides anaesthesia, if used.
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
                <li>Your gynaecologist or family doctor</li>
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
                <li>Training and experience in hysteroscopy</li>
                <li>
                  The facility where the procedure would be done
                </li>
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
                  You can request a female staff member to be present.
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
                <li>Why is hysteroscopy advised in my case?</li>
                <li>Is it diagnostic or operative?</li>
                <li>
                  What anaesthesia or pain relief will be used?
                </li>
                <li>What are the risks and benefits?</li>
                <li>
                  How long does it take, and is it day-care?
                </li>
                <li>What will recovery involve?</li>
                <li>When will I get results?</li>
                <li>What is the estimated cost?</li>
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
                <li>
                  Carry the same scans and reports to every visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests Before the Procedure
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor may advise checks. Ask why each is needed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ultrasound scans</li>
                <li>Blood tests</li>
                <li>Anaesthesia fitness checks, if relevant</li>
                <li>A pregnancy test, where applicable</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Timing
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor will advise when to schedule it.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Timing in relation to your cycle may matter.
                </li>
                <li>
                  Tell the doctor about any bleeding, infection symptoms or
                  possible pregnancy.
                </li>
                <li>Follow the instructions you are given.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for the Day
              </h2>

              <p className="mb-4 text-gray-700">
                Instructions depend on your case.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow guidance on food, drink and medicines.</li>
                <li>Arrange a family member to accompany you.</li>
                <li>Wear comfortable, loose clothing.</li>
                <li>
                  Carry your reports, ID and consent papers.
                </li>
                <li>Plan rest for the remainder of the day.</li>
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
                During the Procedure
              </h2>

              <p className="mb-4 text-gray-700">
                Your team will explain each step beforehand. Ask what you will
                feel, so there are no surprises.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You may have pain relief or anaesthesia, depending on the
                  plan.
                </li>
                <li>Staff monitor you throughout.</li>
                <li>Tell staff if you feel discomfort.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery differs from person to person. Report fever, heavy
                bleeding, severe pain or foul-smelling discharge promptly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some cramping or light bleeding can occur. Ask your doctor
                  what is expected.
                </li>
                <li>Follow activity and medicine advice.</li>
                <li>Rest as advised.</li>
                <li>Attend your follow-up visit.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Facility
              </h2>

              <p className="mb-4 text-gray-700">
                Visit in person before deciding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clean, well-maintained procedure and recovery areas
                </li>
                <li>Trained nursing and anaesthesia support</li>
                <li>Emergency and backup arrangements</li>
                <li>Clear billing and discharge process</li>
                <li>Privacy during changing and recovery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Facility Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Design supports comfort and trust. Planners such as{" "}
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
                  <strong>Privacy:</strong> Private changing space and screened
                  recovery bays.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, soft lighting
                  and good ventilation.
                </li>
                <li>
                  <strong>Order:</strong> Clear signs and discreet registration.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Costs, Red Flags and Mistakes
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for a written estimate listing consultation, procedure,
                anaesthesia and facility charges.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Check insurance acceptance and the claim process.
                </li>
                <li>
                  Be cautious of pressure to book immediately or guaranteed
                  outcomes.
                </li>
                <li>
                  Avoid unclear costs and unverifiable qualifications.
                </li>
                <li>
                  Do not skip follow-up or self-medicate from online advice.
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