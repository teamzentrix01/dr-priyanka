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

export default function GynaecologistAppointmentBuddhiVihar() {
  const faqs = [
    {
      q: "What should I do right after the appointment?",
      a: "Write down the plan, medicines, tests and follow-up date while it is fresh.",
    },
    {
      q: "How do I keep my reports organised?",
      a: "Use one folder arranged by date, with photo copies on your phone.",
    },
    {
      q: "Can I ask the clinic questions after the visit?",
      a: "Yes. Ask for the best way and time to reach them.",
    },
    {
      q: "Should I attend follow-ups if I feel better?",
      a: "Yes, unless your doctor says otherwise.",
    },
    {
      q: "When should I call the clinic urgently?",
      a: "For sudden severe pain, very heavy bleeding or fever, seek immediate care.",
    },
    {
      q: "Can I stop a medicine if I feel fine?",
      a: "Not without asking your doctor.",
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
                Gynaecologist Appointment in Buddhi Vihar, Moradabad: What to Do
                After the Visit
              </h1>

              <p className="mb-4 text-gray-700">
                Most advice focuses on getting to the appointment. What you do
                afterwards matters just as much. Understanding the plan, keeping
                records tidy and attending follow-ups turn one consultation into
                real, continuing care. This guide covers the after-visit steps
                and how to judge a clinic. It is general information, not
                medical advice. It names no individual doctors, because I cannot
                verify or rank them, and only a qualified doctor can diagnose
                you or advise treatment. Space Build works in interior planning,
                and its insight appears in the sections on clinic environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the After-Visit Stage Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Many women leave unsure of the plan. A few minutes of organising
                saves a lot of confusion later.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Details are easy to forget once you leave.</li>
                <li>Missed tests and follow-ups delay care.</li>
                <li>Clear records help every future visit.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Before You Leave the Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                Use the last few minutes well.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Repeat the plan back to the doctor in your own words.
                </li>
                <li>Confirm medicines, doses and timings.</li>
                <li>Confirm which tests are needed and where.</li>
                <li>Note the follow-up date.</li>
                <li>Ask who to call with questions.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Write Down the Key Points
              </h2>

              <p className="mb-4 text-gray-700">
                Memory fades quickly. Write them in a notebook or phone note
                straight away.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diagnosis or likely cause, in the doctor&apos;s words
                </li>
                <li>Medicines and how to take them</li>
                <li>Tests to complete and by when</li>
                <li>Lifestyle advice given</li>
                <li>Warning signs to watch for</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Your Prescription
              </h2>

              <p className="mb-4 text-gray-700">
                Ask when anything is unclear. Never change or stop a medicine
                without asking the doctor.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Medicine name and what it is for</li>
                <li>Dose, timing and duration</li>
                <li>Whether to take it with food</li>
                <li>What to do if you miss a dose</li>
                <li>Possible side effects to report</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Completing Tests
              </h2>

              <p className="mb-4 text-gray-700">
                Plan them promptly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask whether preparation is needed, such as fasting.
                </li>
                <li>
                  Choose a lab or scan centre your doctor trusts.
                </li>
                <li>Book the test soon after the visit.</li>
                <li>Keep the receipt and report together.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Collecting and Checking Reports
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Check your name, age and date on every report.
                </li>
                <li>Ask when results will be ready.</li>
                <li>
                  Do not interpret technical terms through internet searches.
                </li>
                <li>Take reports to your doctor for explanation.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Organise Your Records
              </h2>

              <p className="mb-4 text-gray-700">
                A simple system works best. Carry the folder to every
                appointment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>One folder, arranged by date</li>
                <li>
                  A page listing medicines, allergies and past conditions
                </li>
                <li>Photo copies stored on your phone</li>
                <li>A note of each visit&apos;s key points</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Track Your Symptoms
              </h2>

              <p className="mb-4 text-gray-700">
                Notes help your doctor judge progress.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Record changes in symptoms after treatment starts.
                </li>
                <li>Note period dates, if relevant.</li>
                <li>Mark side effects or new concerns.</li>
                <li>Write down questions as they arise.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Know When to Call the Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                Ask the doctor to define this for your case. Seek urgent care
                for sudden severe pain, very heavy bleeding or fever.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Symptoms getting worse</li>
                <li>New or unexpected symptoms</li>
                <li>Side effects from medicines</li>
                <li>Confusion about the plan</li>
                <li>
                  Test results that arrive with concerning notes
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-Up Appointments
              </h2>

              <p className="mb-4 text-gray-700">
                Do not skip them when you feel better.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Book the next visit before leaving, if possible.
                </li>
                <li>Set a phone reminder.</li>
                <li>Bring reports and your notes.</li>
                <li>Ask what the doctor will review.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for the Next Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  List what has improved and what has not.
                </li>
                <li>Bring all new reports.</li>
                <li>
                  Write your questions in order of importance.
                </li>
                <li>
                  Note any medicines you stopped or changed, and why.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If You Feel Unsure About the Plan
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask the clinic to clarify by phone or at a short visit.
                </li>
                <li>
                  Ask your doctor whether a second opinion is reasonable.
                </li>
                <li>Carry the same reports to any new doctor.</li>
                <li>
                  Never delay urgent care while seeking another opinion.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Sharing Information with Family
              </h2>

              <p className="mb-4 text-gray-700">
                Decide for yourself how much to share.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tell a trusted family member the plan and warning signs.
                </li>
                <li>Share the clinic&apos;s contact details.</li>
                <li>
                  Ask them to attend important visits if you wish.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Managing Costs and Bills
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask for an itemised bill.</li>
                <li>Keep all receipts in the same folder.</li>
                <li>Check insurance claim requirements.</li>
                <li>
                  Note which items need follow-up payment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Rescheduling and Missed Visits
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Inform the clinic as early as possible.</li>
                <li>Ask for the next available slot.</li>
                <li>Do not skip important follow-ups.</li>
                <li>Carry your reports to the new date.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judging the Clinic After Your Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Reflect on how it went. If several answers are no, consider
                another clinic.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Were you listened to and treated respectfully?
                </li>
                <li>Was the plan explained clearly?</li>
                <li>Was privacy protected?</li>
                <li>Was the clinic clean and comfortable?</li>
                <li>Were costs clear?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Design supports comfort and trust. Planners such as Space Build
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
                <li>
                  <strong>Sound:</strong> Rooms that keep conversations private.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>No clear follow-up plan</li>
                <li>Dismissing your questions</li>
                <li>
                  Poor privacy during consultation or examination
                </li>
                <li>Unclear costs</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Leaving without understanding the plan</li>
                <li>Skipping tests or follow-ups</li>
                <li>
                  Stopping medicines when symptoms improve
                </li>
                <li>Keeping reports scattered</li>
                <li>Self-medicating from online advice</li>
                <li>Not asking questions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Simple After-Visit Checklist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Write down the plan and warning signs.</li>
                <li>
                  Fill prescriptions and start medicines as directed.
                </li>
                <li>Book and complete tests.</li>
                <li>File reports and receipts in one folder.</li>
                <li>Set a follow-up reminder.</li>
                <li>
                  Note symptoms and questions for next time.
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