
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

export default function LadyDoctorRamgangaVihar() {
  const faqs = [
    {
      q: "What does &quot;lady doctor&quot; mean?",
      a: "It is an informal term for a female doctor, often a gynaecologist.",
    },
    {
      q: "At what age should a girl first see a gynaecologist?",
      a: "Only when there is a concern or your doctor advises. Ask your family doctor for guidance.",
    },
    {
      q: "Can I request a lady doctor when booking?",
      a: "Yes. Ask whether one is available on your preferred day.",
    },
    {
      q: "Do I need a visit if I feel fine?",
      a: "Routine check-ups can still be useful. Your doctor will advise how often.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "What should I bring to the visit?",
      a: "Past reports, a medicine list, ID, your notes and your questions.",
    },
    {
      q: "When is a visit urgent?",
      a: "Sudden severe pain or very heavy bleeding needs immediate care.",
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
                Lady Doctor in Ramganga Vihar, Moradabad: Care at Every Stage
                of a Woman&apos;s Life
              </h1>

              <p className="mb-4 text-gray-700">
                A woman&apos;s health needs change with age. A teenager, a new
                mother and a woman approaching menopause may all want a lady
                doctor, but for very different reasons. Knowing what each stage
                involves helps you book the right visit at the right time. This
                guide is general information, not medical advice. It names no
                individual doctors, because I cannot verify or rank them, and
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
                Why Life Stage Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Health questions shift as life changes. Telling the clinic your
                stage and concern helps them direct you well.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Early years bring questions about periods and growth.</li>
                <li>
                  Adult years bring concerns about cycles, contraception and
                  pregnancy.
                </li>
                <li>
                  Later years bring changes linked to menopause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Teenage Years
              </h2>

              <p className="mb-4 text-gray-700">
                Many girls and parents have questions during puberty. A gentle,
                patient doctor makes a big difference at this age. Parents can
                ask whether the doctor sees teenagers comfortably.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods that have not started by the expected age
                </li>
                <li>Very painful, heavy or irregular periods</li>
                <li>Concerns about growth, skin or weight</li>
                <li>General questions about changes in the body</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Young Adult Years
              </h2>

              <p className="mb-4 text-gray-700">
                This stage often brings new questions. Honest conversation helps
                the doctor give useful advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycle changes and period pain</li>
                <li>Contraception and family planning guidance</li>
                <li>Concerns about discharge or discomfort</li>
                <li>Preconception advice before planning pregnancy</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning a Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Visiting before pregnancy can help. Do not start supplements or
                remedies without medical advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Discuss your health history and medicines.</li>
                <li>
                  Ask what checks or supplements your doctor advises.
                </li>
                <li>Share any past pregnancy problems.</li>
                <li>
                  Ask about lifestyle guidance specific to you.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                During Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Regular antenatal visits are important. Seek urgent care for
                heavy bleeding, severe pain or reduced baby movements.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Contact a doctor soon after you know you are pregnant.
                </li>
                <li>Keep scheduled checkups and tests.</li>
                <li>
                  Ask which symptoms need urgent attention.
                </li>
                <li>Plan the delivery hospital early.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Postnatal care matters too. Mothers often skip their own
                follow-up. Please do not.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recovery checks for the mother</li>
                <li>Guidance on feeding and rest</li>
                <li>Discussion of contraception</li>
                <li>Support if you feel low or overwhelmed</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Midlife and Menopause
              </h2>

              <p className="mb-4 text-gray-700">
                Changes in later years can be confusing. Any bleeding after
                periods have stopped should be checked promptly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycles becoming irregular</li>
                <li>Hot flushes, sleep trouble or mood changes</li>
                <li>
                  Questions about bone health and routine screening
                </li>
                <li>Concerns about bleeding patterns</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Routine Check-Ups
              </h2>

              <p className="mb-4 text-gray-700">
                Visits are not only for illness. Regular check-ups can catch
                concerns early.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your doctor advises how often to come.</li>
                <li>
                  Ask which screenings suit your age and history.
                </li>
                <li>Keep records of past reports together.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Doctor for Which Concern
              </h2>

              <p className="mb-4 text-gray-700">
                &quot;Lady doctor&quot; can mean different specialists. Say your
                concern when booking, so you see the right person.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Gynaecologist:</strong> Periods, pregnancy,
                  contraception, pelvic concerns, menopause.
                </li>
                <li>
                  <strong>General Physician:</strong> Fever, infections and
                  general check-ups.
                </li>
                <li>
                  <strong>Dermatologist:</strong> Skin and hair concerns.
                </li>
                <li>
                  <strong>Endocrinologist:</strong> Hormone and thyroid
                  concerns, usually by referral.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Find a Lady Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Use reliable sources. Aim for two or three options to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or earlier doctor</li>
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
                <li>
                  Recognised medical degree and any specialist training
                </li>
                <li>Registration with the relevant medical council</li>
                <li>Years of experience</li>
                <li>Experience with concerns like yours</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Communication Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Notice how the doctor talks to you. You should leave feeling
                heard and informed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does she listen without judgement?</li>
                <li>Does she explain in simple language?</li>
                <li>Does she welcome questions?</li>
                <li>Does she respect your choices?</li>
                <li>
                  Does she avoid pressure or fear-based advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask When Booking
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Is a lady doctor available on my preferred day?
                </li>
                <li>
                  Is an appointment needed, or can I walk in?
                </li>
                <li>What is the consultation fee?</li>
                <li>
                  Is a female staff member present during examinations?
                </li>
                <li>How long is the usual wait?</li>
                <li>How do I reach the clinic after hours?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for the Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Write down your symptoms and when they began.</li>
                <li>Note cycle dates, if relevant.</li>
                <li>List current medicines and past conditions.</li>
                <li>Bring earlier reports and scans.</li>
                <li>Prepare your questions.</li>
                <li>Take a trusted companion if you wish.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy and Dignity
              </h2>

              <p className="mb-4 text-gray-700">
                Privacy is essential in women&apos;s health. If privacy feels
                weak, consider another clinic.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Consultation doors should not open onto the waiting area.
                </li>
                <li>Examination areas should be screened.</li>
                <li>Registration should not be overheard.</li>
                <li>
                  Staff should explain what they are doing and ask before
                  examining.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Design shapes comfort and trust. Planners such as{" "}
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
                  <strong>Layout:</strong> A clear flow from reception to
                  waiting to consultation.
                </li>
                <li>
                  <strong>Surfaces:</strong> Washable, non-porous materials
                  that are easy to keep clean.
                </li>
                <li>
                  <strong>Lighting:</strong> Soft, glare-free light in waiting
                  areas and bright light for examination.
                </li>
                <li>
                  <strong>Sound:</strong> Rooms that keep conversations private.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors,
                  non-slip floors and accessible washrooms.
                </li>
                <li>
                  <strong>Seating:</strong> Supportive chairs, with space for
                  companions and elders.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Family-Friendly Features
              </h2>

              <p className="mb-4 text-gray-700">
                Many women visit with children or elders.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A safe, tidy corner for small children</li>
                <li>Seating suited to elderly companions</li>
                <li>Drinking water and clean washrooms nearby</li>
                <li>Short waiting times where possible</li>
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
                <li>Consultation fee</li>
                <li>Test and scan charges</li>
                <li>Medicine and follow-up costs</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is sensible when you feel unsure, especially before surgery.
                A good doctor will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Compare explanations, not only prescriptions.
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
                <li>
                  Poor privacy during consultation or examination
                </li>
                <li>Dismissing your concerns</li>
                <li>
                  Delaying a visit despite worsening symptoms
                </li>
                <li>Skipping follow-up</li>
                <li>Self-medicating from online advice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Ramganga
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
                      <p>Ramganga Vihar, Moradabad, Uttar Pradesh, India</p>
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