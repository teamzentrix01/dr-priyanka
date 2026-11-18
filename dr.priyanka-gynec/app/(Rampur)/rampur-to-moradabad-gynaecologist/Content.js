
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Where is the clinic in Moradabad?",
    a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
  },
  {
    q: "Do I need to book before travelling from Rampur?",
    a: "Yes, booking in advance is recommended. Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
  },
  {
    q: "Can tests and ultrasound be done on the same day?",
    a: "This depends on what you need. Ask the clinic when you book, so that you can plan your day.",
  },
  {
    q: "How many visits will I need?",
    a: "It varies. A second opinion may need one visit, while fertility treatment or pregnancy care needs several. Ask your doctor for the likely schedule.",
  },
  {
    q: "Can some follow-up checks be done in Rampur?",
    a: "Some routine checks and tests may be possible locally. Ask your doctor, and share the reports with the clinic.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Previous prescriptions, blood tests, ultrasounds, surgical records, a list of medicines, identification and your questions. If pregnant, bring your antenatal card.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "Is it safe to travel during pregnancy?",
    a: "It depends on your stage and health. Ask your doctor, carry your antenatal card, take breaks and know the warning signs that need urgent care.",
  },
  {
    q: "Can I get a second opinion about surgery?",
    a: "Yes. Bring your reports and scans, and the doctor will review them and explain your options.",
  },
  {
    q: "How do I book an appointment?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on the clinic website.',
  },
];

export default function RampurToMoradabadGynaecologistTripPlanner() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Rampur to Moradabad Gynaecologist – Trip Planner
            </h1>

            <p>
              Travelling to another city for a medical consultation takes
              planning. You want to use your time well, bring the right
              documents, avoid unnecessary repeat visits and feel calm when
              you arrive. This guide is a practical trip planner for women
              from Rampur visiting <strong>Dr. Priyanka Pachauri</strong> at{" "}
              <strong>Dr. Priyanka Gynaec</strong> in Moradabad.
            </p>

            <p>
              The clinic&apos;s philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong> It is a
              women&apos;s health and fertility centre offering gynaecology,
              laparoscopy, IVF and pregnancy care.
            </p>

            <p>
              <strong>Address:</strong> A2, near Old Roadways, Gandhi Nagar,
              Moradabad, Uttar Pradesh – 244001
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Decide What Kind of Visit You Need
              </h2>
              <p>Knowing the purpose of your trip helps you prepare.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Single consultation:</strong> A symptom check, a
                  second opinion on surgery or a preconception visit
                </li>
                <li>
                  <strong>Consultation plus tests:</strong> Ultrasound or
                  blood tests on the same trip, if your doctor advises
                </li>
                <li>
                  <strong>Series of visits:</strong> Fertility monitoring,
                  antenatal check-ups or post-surgery follow-up
                </li>
                <li>
                  <strong>Procedure:</strong> Laparoscopy, hysteroscopy or
                  another planned treatment
                </li>
              </ul>
              <p>
                When you book, tell the clinic your purpose in a few words.
                Ask whether tests can be done on the same day and how many
                visits are likely.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Before You Leave Rampur
              </h2>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Book First
                </h3>
                <p>
                  Call <strong>+91 90797 65578</strong> or message on WhatsApp
                  at <strong>+91 89796 70705</strong>. Share your name, the
                  reason for your visit and your preferred day. Confirm the
                  current timings, and ask whether any preparation, such as
                  fasting or a full bladder for a scan, is needed.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Collect Your Documents
                </h3>
                <p>Bring:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Previous prescriptions and discharge summaries</li>
                  <li>Blood test reports</li>
                  <li>Ultrasound and other scan reports</li>
                  <li>Surgical records, if any</li>
                  <li>Your antenatal card, if pregnant</li>
                  <li>A list of current medicines and supplements</li>
                  <li>Identification</li>
                  <li>
                    Your partner&apos;s reports, if you are consulting about
                    fertility
                  </li>
                </ul>
                <p>
                  Keep them in one folder, in date order, and take clear
                  photos on your phone as a backup.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Write Down Your Story
                </h3>
                <p>
                  A short note saves time and helps you remember details:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Date of your last period and usual cycle length</li>
                  <li>When symptoms began and how they have changed</li>
                  <li>Treatments you have already tried</li>
                  <li>Allergies and past surgeries</li>
                  <li>Your top three questions for the doctor</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Plan Support
                </h3>
                <p>
                  Consider travelling with a family member or friend. They
                  can help carry documents, remember instructions and offer
                  comfort. Remember that you can still choose to speak with
                  the doctor privately.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning the Journey
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Leave early enough to arrive without rushing</li>
                <li>
                  Carry water and a light snack, unless you have been asked
                  to fast
                </li>
                <li>Wear comfortable, loose clothing</li>
                <li>Keep your phone charged, with the clinic&apos;s number saved</li>
                <li>
                  Carry some cash and a card, and ask the clinic about
                  accepted payment methods
                </li>
                <li>
                  If you are pregnant, take breaks on long journeys, stay
                  hydrated and follow your doctor&apos;s advice about travel
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                At the Clinic
              </h2>

              <p>
                <strong>On arrival:</strong> Let the staff know you have
                travelled from out of town. This may help them plan your
                visit, though they cannot always change waiting times.
              </p>

              <p>
                <strong>During the consultation:</strong> The visit begins
                with a conversation about your symptoms, cycle history, past
                pregnancies and health. An examination is done only when it
                is necessary, and it is explained beforehand. Ultrasound or
                blood tests are advised only when they add useful information.
                You will hear what was found and what your options are,
                including non-surgical ones.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                Before you leave:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Ask for the plan in simple, clear words, and write it down
                </li>
                <li>Confirm the medicines, doses and duration</li>
                <li>Ask which tests need repeating and when</li>
                <li>
                  Ask when you should return, and what could change that
                  schedule
                </li>
                <li>Ask which warning signs need urgent care</li>
                <li>
                  Check how to reach the clinic with questions after you go
                  home
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How to Reduce Repeat Trips
              </h2>
              <p>
                Every trip costs time and effort, so ask early:
              </p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong>Can tests be done the same day?</strong> Ask when
                  you book.
                </li>
                <li>
                  <strong>Which follow-up checks can be done closer to home?</strong>{" "}
                  Routine checks or blood tests may be possible locally if
                  the doctor agrees.
                </li>
                <li>
                  <strong>Can reports be shared by phone or WhatsApp?</strong>{" "}
                  Ask the clinic whether this is possible for your situation.
                </li>
                <li>
                  <strong>How will I know when to return?</strong> Get a date
                  or a clear trigger.
                </li>
                <li>
                  <strong>
                    What should I do if symptoms change between visits?
                  </strong>{" "}
                  Ask for a contact plan.
                </li>
              </ol>
              <p>
                Never delay urgent care to wait for a follow-up appointment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                If You Need Fertility Treatment
              </h2>
              <p>
                Fertility cycles are time-sensitive, and monitoring visits may
                be frequent. Ask for the expected schedule at the very first
                consultation, so you can plan leave from work, family support
                and any stay in the city. Both partners are encouraged to
                attend the first visit. The clinic offers ovulation induction,
                IVF, time-lapse embryo monitoring and AI-powered semen analysis
                with DNA integrity testing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                If You Are Pregnant
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Carry your antenatal card and reports every time</li>
                <li>
                  Ask which visits and scans must happen at the clinic, and
                  which checks can be done locally
                </li>
                <li>
                  Learn the warning signs: bleeding, leaking fluid, severe
                  abdominal pain, reduced baby movements, severe headache,
                  blurred vision or early contractions
                </li>
                <li>
                  Identify the nearest hospital with emergency and delivery
                  facilities to your home
                </li>
                <li>Near your due date, discuss when to leave and where to go</li>
              </ul>
              <p>
                In an emergency, go to the nearest emergency facility
                immediately. Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                If You Are Planning Surgery
              </h2>
              <p>Ask about:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Pre-operative tests you can complete in advance</li>
                <li>Expected length of stay</li>
                <li>Who should accompany you</li>
                <li>
                  Recovery advice, including when it is safe to travel home
                </li>
                <li>Follow-up visits and warning signs after discharge</li>
              </ul>
              <p>
                Keyhole procedures often allow a shorter stay, though this
                depends on the surgery and your recovery. The clinic offers
                3D laparoscopic cystectomy, myomectomy, hysterectomy,
                endometriosis surgery, sacrocolpopexy and sterilization, along
                with diagnostic hysteroscopy and hysteroscopic polypectomy.
                Surgery is recommended only when it is the best option, and
                alternatives are always discussed first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Services You Can Combine in One Place
              </h2>
              <p>
                Because the clinic offers several services, some needs can be
                met on the same trip, where appropriate:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Gynaecology consultation and PCOS care</li>
                <li>
                  Pregnancy care, including ultrasound on a Voluson E22
                  3D/4D machine
                </li>
                <li>Fertility evaluation</li>
                <li>Postnatal follow-up and newborn care</li>
                <li>Paediatric consultation and vaccinations for your baby</li>
              </ul>
              <p>Ask the clinic what can be combined, and book accordingly.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and endometriosis care,
                  with a compassionate approach
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Gynaecology,
                  fertility, pregnancy and paediatric services
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice based on what you
                  truly need
                </li>
              </ul>
              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Clinic Address and Appointments
              </h2>
              <p className="mb-5">
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>

              <div className="space-y-3">
                <p className="flex flex-wrap items-center gap-2">
                  <Phone size={18} />
                  <strong>Call for appointment:</strong>
                  <a
                    href="tel:+919079765578"
                    className="font-semibold text-[#8F1738] hover:underline"
                  >
                    +91 90797 65578
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-2">
                  <Phone size={18} />
                  <strong>WhatsApp:</strong>
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#8F1738] hover:underline"
                  >
                    +91 89796 70705
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-2">
                  <Mail size={18} />
                  <strong>Email:</strong>
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="break-all font-semibold text-[#8F1738] hover:underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-2">
                  <Globe size={18} />
                  <strong>Website:</strong>
                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all font-semibold text-[#8F1738] hover:underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  Explore Services
                </Link>
              </div>
            </section>

            <section className="space-y-5 pt-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </section>
          </article>

          <aside className="lg:sticky lg:top-24">
            <LandingEnquiryForm />
          </aside>
        </div>
      </section>
    </main>
  );
}
