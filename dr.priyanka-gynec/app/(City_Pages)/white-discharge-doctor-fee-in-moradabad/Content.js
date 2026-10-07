import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function WhiteDischargeDoctorFeeMoradabad() {
  const faqs = [
    {
      q: "What is the white discharge doctor fee in Moradabad?",
      a: "It varies by doctor and clinic. Call +91 90797 65578 to confirm Dr. Priyanka's current fee.",
    },
    {
      q: "Does the fee include tests?",
      a: "Usually the consultation fee covers the visit. Tests and medicines are charged separately if needed.",
    },
    {
      q: "Will I need tests for white discharge?",
      a: "Not always. Tests like a swab or Pap smear are advised only when needed.",
    },
    {
      q: "Is a follow-up visit charged separately?",
      a: "Policies differ. Ask at booking whether follow-ups are included.",
    },
    {
      q: "Can I find out the fee before visiting?",
      a: "Yes. Call, WhatsApp +91 89796 70705 or email drpriyankagynaec@gmail.com.",
    },
    {
      q: "Is it cheaper to buy medicines from a chemist?",
      a: "It may seem cheaper, but wrong medicines often cause repeat infections and higher costs.",
    },
    {
      q: "Which doctor treats white discharge?",
      a: "A gynaecologist. Dr. Priyanka Pachauri treats it in Moradabad.",
    },
    {
      q: "How many visits does treatment take?",
      a: "Many cases need one visit and a short follow-up. It depends on the cause.",
    },
    {
      q: "Is a female doctor available?",
      a: "Yes. Dr. Priyanka Pachauri is a female gynaecologist.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge Doctor Fee in Moradabad: Consultation, Tests &amp; Treatment Cost Explained
              </h1>

              <p className="mb-4 text-gray-700">
                When women search for a white discharge doctor fee in Moradabad,
                they are usually asking a bigger question: &quot;Can I afford to
                get this treated, and will it be worth it?&quot;
              </p>

              <p className="mb-4 text-gray-700">
                Worry about cost is one of the main reasons women delay care.
                Some wait weeks or months, and some rely on pharmacy medicines.
                That often turns a simple, treatable problem into a long-running
                one.
              </p>

              <p className="text-gray-700">
                This guide explains what you pay for, what affects the cost and
                how to avoid unnecessary expenses. It also tells you how to find
                out the exact fee at Dr. Priyanka Gynaec before you visit.
              </p>
            </div>

            {/* Section 2 — Why Fees Vary */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Doctor Fees Vary
              </h2>

              <p className="mb-4 text-gray-700">
                There is no single fixed fee for white discharge treatment in
                Moradabad. The total cost depends on several things.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The doctor&apos;s experience and qualifications</li>
                <li>Type of facility: a private clinic, a nursing home or a large hospital</li>
                <li>Whether it is a first visit or a follow-up</li>
                <li>Tests required for diagnosis</li>
                <li>The cause of the discharge (the treatment differs)</li>
                <li>Length of the medicine course</li>
                <li>Any scans or procedures needed</li>
                <li>Number of follow-up visits</li>
              </ul>

              <p className="text-gray-700">
                Because of this, anyone who quotes a total cost without
                examining you is guessing. Reliable pricing comes after the
                doctor knows your cause.
              </p>
            </div>

            {/* Section 3 — What Consultation Includes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does the Consultation Fee Include?
              </h2>

              <p className="mb-4 text-gray-700">
                A consultation fee is not just &quot;time with the doctor.&quot;
                A proper visit covers a lot.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Listening to your history and symptoms</li>
                <li>Questions about periods, hygiene, sexual health and medical conditions</li>
                <li>Physical and pelvic examination where needed</li>
                <li>Explanation of the likely cause</li>
                <li>A written prescription and treatment plan</li>
                <li>Advice on hygiene, diet and prevention</li>
                <li>Answers to your questions</li>
                <li>Guidance on when to return</li>
              </ul>
            </div>

            {/* Section 4 — Cost Components */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Typical Cost Components of White Discharge Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                Your total spending usually has up to four parts.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Consultation Fee
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The first visit is usually the main cost.</li>
                <li>Follow-up visits may be charged differently.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Diagnostic Tests (Only If Needed)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal swab or discharge test</li>
                <li>pH test</li>
                <li>Pap smear</li>
                <li>Urine test</li>
                <li>Blood sugar and other blood tests</li>
                <li>Pelvic ultrasound if pain or other findings are present</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Medicines
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antifungal tablets, creams or pessaries</li>
                <li>Antibiotics for bacterial infections</li>
                <li>Anti-parasitic medicines when required</li>
                <li>Supportive supplements, if advised</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Follow-Up
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A review to confirm the infection has cleared</li>
                <li>Repeat tests only in stubborn or recurring cases</li>
              </ul>

              <p className="text-gray-700">
                Many women need only a consultation, a basic test and a short
                medicine course. More complex cases can need more investigation.
              </p>
            </div>

            {/* Section 5 — Is Cheaper Better */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is a Cheaper Option Always Better?
              </h2>

              <p className="mb-4 text-gray-700">
                It is natural to look for low-cost care. But the cheapest route
                is often the most expensive in the long run.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hidden Costs of Skipping Proper Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Repeated pharmacy purchases that do not work</li>
                <li>Wrong medicines that hide symptoms</li>
                <li>Infections that return again and again</li>
                <li>Lost workdays and discomfort</li>
                <li>Complications such as pelvic infection</li>
                <li>Higher costs later for advanced treatment</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Gives Real Value
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A correct diagnosis the first time</li>
                <li>Cause-based treatment instead of guesswork</li>
                <li>Only the tests you genuinely need</li>
                <li>Honest advice with no unnecessary extras</li>
                <li>Follow-up that prevents recurrence</li>
              </ul>
            </div>

            {/* Section 6 — Avoid Expenses */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Avoid Unnecessary Expenses
              </h2>

              <p className="mb-4 text-gray-700">
                You can control costs without compromising care.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Book a consultation early, before the infection spreads or worsens.</li>
                <li>Bring your previous reports and prescriptions to avoid repeat tests.</li>
                <li>Ask your doctor which tests are essential and which are optional.</li>
                <li>Complete the full medicine course so the problem does not return.</li>
                <li>Do not buy medicines on the advice of a chemist or friend.</li>
                <li>Attend follow-ups so a lingering infection is caught early.</li>
                <li>Practise good hygiene to prevent recurrence.</li>
                <li>Ask about the total expected plan, not just the first visit.</li>
              </ul>
            </div>

            {/* Section 7 — About Clinic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec: Care That Puts You First
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                center in Moradabad. Its philosophy is &quot;Her Health
                First.&quot; Your comfort, privacy and choices sit at the centre
                of every consultation.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a respected gynaecologist known for
                empathetic, safe-motherhood focused care and for expertise
                across a woman&apos;s life stages.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Women Trust the Clinic
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A caring female gynaecologist who listens carefully</li>
                <li>Private, respectful consultations</li>
                <li>Advanced diagnostic support, including 3D/4D ultrasound</li>
                <li>Treatment based on your exact cause</li>
                <li>Continuity of care, so your history is remembered</li>
                <li>Complete women&apos;s health services in one place</li>
                <li>A reputation built on families recommending the clinic</li>
              </ul>
            </div>

            {/* Section 8 — Visit Process */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens When You Visit?
              </h2>

              <p className="mb-4 text-gray-700">
                Knowing the process removes anxiety about the visit and the
                bill.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Step 1: You describe your symptoms privately.</li>
                <li>Step 2: The doctor asks about your cycle, hygiene and history.</li>
                <li>Step 3: An examination is done only if needed, with your consent.</li>
                <li>Step 4: Tests are advised only where they will change the treatment.</li>
                <li>Step 5: The cause is explained in simple words.</li>
                <li>Step 6: You receive a treatment plan and a follow-up date.</li>
                <li>Step 7: You can ask about costs and expectations openly.</li>
              </ul>
            </div>

            {/* Section 9 — Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes of White Discharge You Should Know
              </h2>

              <p className="mb-4 text-gray-700">
                A short overview helps you understand why tests may be advised.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal physiological discharge: hormones, ovulation, pregnancy</li>
                <li>Yeast infection: thick, white, curdy discharge with itching</li>
                <li>Bacterial vaginosis: thin, greyish discharge with a fishy smell</li>
                <li>Trichomoniasis: frothy, yellow-green discharge</li>
                <li>Cervicitis: inflammation of the cervix</li>
                <li>Pelvic inflammatory disease: discharge with lower abdominal pain</li>
                <li>Other factors: diabetes, poor hygiene, tight clothing, weak immunity</li>
              </ul>
            </div>

            {/* Section 10 — Symptoms Not to Wait */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Mean You Should Not Wait
              </h2>

              <p className="mb-4 text-gray-700">
                Do not delay a visit because of cost concerns if you notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Foul-smelling or coloured discharge</li>
                <li>Discharge with fever or lower abdominal pain</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Burning during urination</li>
                <li>Symptoms lasting more than a few days</li>
                <li>Repeated infections</li>
                <li>Unusual discharge during pregnancy</li>
                <li>A sudden watery leak in pregnancy (seek urgent care)</li>
              </ul>
            </div>

            {/* Section 11 — Home Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care Tips While You Wait for Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                These habits help but do not replace treatment.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wash only the outer genital area with plain water or a mild wash.</li>
                <li>Avoid douching and scented products.</li>
                <li>Wear breathable cotton underwear and change it daily.</li>
                <li>Wipe from front to back.</li>
                <li>Change sanitary pads every 4 to 6 hours.</li>
                <li>Keep blood sugar controlled if you are diabetic.</li>
                <li>Drink enough water and eat a balanced diet.</li>
              </ul>
            </div>

            {/* Section 12 — Does Delay Cost More */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Does Delayed Treatment Cost More?
              </h2>

              <p className="mb-4 text-gray-700">Often, yes.</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Untreated infections can spread upward to the uterus and tubes.</li>
                <li>Pelvic infection can cause chronic pain.</li>
                <li>Repeated infections can affect fertility over time.</li>
                <li>A simple infection can become a longer, costlier treatment.</li>
              </ul>

              <p className="text-gray-700">
                Early care usually means fewer visits, fewer tests and lower
                overall cost.
              </p>
            </div>

            {/* Section 13 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before You Book
              </h2>

              <p className="mb-4 text-gray-700">
                Do not hesitate to ask these on the phone or on WhatsApp.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What is the consultation fee for a first visit?</li>
                <li>Is a follow-up visit charged separately?</li>
                <li>Which tests might be needed, and are they done at the clinic?</li>
                <li>What are the clinic&apos;s timings?</li>
                <li>Do I need to bring any previous reports?</li>
                <li>Is a female doctor available? (Yes, Dr. Priyanka Pachauri.)</li>
              </ul>
            </div>

            {/* Section 14 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-6 text-black">
                Do not let cost worries delay your care. Reach out, ask your
                questions and book a private, respectful consultation.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone / Appointments</p>
                    <div className="flex flex-wrap items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8979670705" className="hover:underline">
                        +91 89796 70705 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Clinic Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 15 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
