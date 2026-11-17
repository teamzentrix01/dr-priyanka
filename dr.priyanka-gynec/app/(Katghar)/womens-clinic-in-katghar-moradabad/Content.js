
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Katghar?",
    a: "The clinic is in Gandhi Nagar, Moradabad, and serves women from Katghar and other parts of the city.",
  },
  {
    q: "What kind of clinic is Dr. Priyanka Gynaec?",
    a: "It is a women's health and fertility centre offering gynaecology, pregnancy care, fertility and IVF, laparoscopic surgery, hysteroscopy and paediatric care.",
  },
  {
    q: "Who will I consult?",
    a: "You will consult Dr. Priyanka Pachauri.",
  },
  {
    q: "Do I need an appointment?",
    a: "Booking in advance is recommended so you have enough consultation time. Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm the current timings and fees directly with the clinic when you book.",
  },
  {
    q: "Can unmarried women or teenagers visit?",
    a: "Yes. Women of any age or marital status can consult a gynaecologist for periods, hormonal concerns, infections or preventive care.",
  },
  {
    q: "Will my visit be private?",
    a: "Your concerns are discussed respectfully and your medical details are kept confidential.",
  },
  {
    q: "Does the clinic offer IVF and pregnancy care?",
    a: "Yes. It offers fertility and IVF treatment, antenatal care, normal delivery support, high-risk pregnancy management and postnatal care.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports and scans, and the doctor will review them and explain your options.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on the clinic website.",
  },
];

export default function WomensClinicKatgharMoradabad() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Women&apos;s Clinic in Katghar Moradabad – Dr. Priyanka Pachauri
            </h1>

            <p>
              Women&apos;s health is not one single need. It changes with age,
              with life plans and with every new symptom. A good women&apos;s
              clinic does more than treat a problem. It becomes a place where
              you can ask questions early, follow your health over the years
              and receive care without embarrassment.
            </p>

            <p>
              If you live in Katghar or nearby areas of Moradabad,{" "}
              <strong>Dr. Priyanka Gynaec</strong>, led by{" "}
              <strong>Dr. Priyanka Pachauri</strong>, is a women&apos;s health
              and fertility centre to consider. The clinic is located in{" "}
              <strong>Gandhi Nagar, Moradabad</strong>, and serves women from
              Katghar and other parts of the city. Its philosophy is{" "}
              <strong>&ldquo;Her Health First.&rdquo;</strong> You are listened
              to, informed and never rushed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              What a Women&apos;s Clinic Should Offer
            </h2>

            <p>Before choosing a clinic, it helps to know what good care looks like.</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Time to talk:</strong> A doctor who listens before
                prescribing
              </li>
              <li>
                <strong>Privacy:</strong> A setting where sensitive questions
                can be asked freely
              </li>
              <li>
                <strong>Clear explanations:</strong> Findings and options in
                simple language
              </li>
              <li>
                <strong>Modern diagnostics:</strong> Accurate imaging and tests
              </li>
              <li>
                <strong>Range of services:</strong> Gynaecology, pregnancy and
                fertility in one place, so you do not need repeated referrals
              </li>
              <li>
                <strong>Honest advice:</strong> Tests and surgery only when
                they are truly needed
              </li>
              <li>
                <strong>Follow-up:</strong> A team that remembers your history
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              Care Under One Roof
            </h2>

            <p>Dr. Priyanka Gynaec offers care that grows with you.</p>

            <div className="space-y-4">
              <p>
                <strong>Gynaecology:</strong> Period problems, PCOS, infections,
                pelvic pain, fibroids, cysts, contraception and menopause
                symptoms.
              </p>
              <p>
                <strong>Pregnancy care:</strong> Antenatal check-ups,
                ultrasound, normal delivery support and high-risk pregnancy
                monitoring.
              </p>
              <p>
                <strong>Fertility and IVF:</strong> Evaluation of both partners,
                ovulation induction, IVF and advanced laboratory support.
              </p>
              <p>
                <strong>Surgery:</strong> 3D laparoscopy and hysteroscopy for
                conditions that need a procedure.
              </p>
              <p>
                <strong>Postnatal and paediatric care:</strong> Recovery support
                for mothers, and vaccinations and newborn care for babies.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Technology Used With Empathy
            </h2>

            <p>The clinic combines modern tools with a gentle approach:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>High-definition 3D laparoscopic surgery</li>
              <li>Voluson E22 3D and 4D ultrasound</li>
              <li>Time-lapse imaging for embryo monitoring</li>
              <li>AI-powered semen analysis and DNA integrity testing</li>
            </ul>

            <p>
              Technology supports the doctor&apos;s judgement. It does not
              replace the conversation with you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Your Visit, Step by Step
            </h2>

            <p>
              Many women delay a visit because they do not know what to expect.
              Here is a typical journey.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 1: Booking
                </h3>
                <p>
                  Call <strong>+91 90797 65578</strong> or message on WhatsApp
                  at <strong>+91 89796 70705</strong>. Share your name, the
                  reason for your visit and your preferred day. Confirm current
                  timings with the clinic.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 2: Before You Arrive
                </h3>
                <p>
                  Collect previous prescriptions, blood tests, ultrasounds and
                  surgical records. Note the date of your last period, your
                  symptoms and your questions. If you are pregnant, bring your
                  antenatal card.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 3: The Conversation
                </h3>
                <p>
                  The visit begins with a discussion of your symptoms, cycle
                  history, past pregnancies and general health. There is no
                  rush, and you can speak freely.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 4: Examination and Tests, Only If Needed
                </h3>
                <p>
                  An examination is done only when it is necessary, and it is
                  explained beforehand. You can ask for a pause or decline any
                  step. Ultrasound or blood tests are advised only when they
                  add useful information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 5: Explanation and Plan
                </h3>
                <p>
                  Your doctor explains what was found, what it means and what
                  your options are, including non-surgical ones. You are given
                  time to ask questions and decide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 6: Follow-Up
                </h3>
                <p>
                  You leave with a clear plan for medicines, tests and your
                  next visit, and with guidance on warning signs that need
                  earlier attention.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Common Reasons Women Visit a Clinic
            </h2>

            <h3 className="text-xl font-semibold text-gray-900">
              Periods and Hormones
            </h3>

            <p>
              Irregular, missed, painful or heavy periods are among the most
              common concerns. Causes include PCOS, thyroid imbalance, fibroids,
              polyps and endometriosis. A proper examination, ultrasound and
              tests point to the right treatment.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">PCOS</h3>

            <p>
              PCOS can cause irregular cycles, acne, excess hair, weight gain
              and difficulty conceiving. It is highly treatable. Lifestyle
              changes, medicines and ovulation induction help many women
              regulate cycles or conceive.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Pelvic Pain and Infections
            </h3>

            <p>
              Persistent pelvic pain, unusual discharge, itching or pain
              during intercourse should not be ignored. They may point to
              infections, cysts or endometriosis, all of which can be treated.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Trying to Conceive
            </h3>

            <p>
              If pregnancy has not happened after 12 months of trying, or 6
              months if you are 35 or older, an evaluation is a good idea. Seek
              help sooner if your periods are irregular or you have known
              gynaecological conditions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">Pregnancy</h3>

            <p>
              Early registration helps the doctor confirm the pregnancy,
              begin supplements and identify any risk factors. Regular visits
              protect both mother and baby.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">Menopause</h3>

            <p>
              Hot flushes, sleep trouble, mood changes and heavy or irregular
              periods in the years before menopause can be eased with advice
              and treatment. Any bleeding after menopause should always be
              examined.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              When Surgery Is Needed
            </h2>

            <p>
              Many conditions are first managed with medicines or lifestyle
              changes. When surgery is the best option, keyhole techniques
              often mean smaller scars, less pain and faster recovery. The
              clinic offers:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Laparoscopic cystectomy</strong> for ovarian cysts,
                preserving fertility
              </li>
              <li>
                <strong>Laparoscopic myomectomy</strong> for fibroids,
                preserving the uterus
              </li>
              <li>
                <strong>Laparoscopic hysterectomy</strong> when medically
                necessary
              </li>
              <li>
                <strong>Endometriosis surgery</strong> for pelvic pain relief
              </li>
              <li>
                <strong>Sacrocolpopexy</strong> for prolapse
              </li>
              <li>
                <strong>Laparoscopic sterilization</strong> as a day-care
                procedure
              </li>
              <li>
                <strong>Diagnostic hysteroscopy and hysteroscopic
                polypectomy</strong> for problems inside the uterus
              </li>
            </ul>

            <p>
              Alternatives are always discussed first, and you can bring your
              reports for a second opinion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Privacy and Comfort
            </h2>

            <p>
              Women often worry about being judged. At Dr. Priyanka Gynaec,
              concerns are discussed respectfully and your medical details are
              kept confidential. You may bring a family member or friend, or
              choose to speak with the doctor privately. No question is too
              small or too embarrassing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Care at Every Age
            </h2>

            <div className="space-y-4">
              <p>
                <strong>Teenagers:</strong> Guidance on first periods, painful
                or irregular cycles and hormonal concerns, in a gentle setting.
              </p>
              <p>
                <strong>Twenties and thirties:</strong> Contraception, PCOS,
                pregnancy planning, fertility, pregnancy and postnatal
                recovery.
              </p>
              <p>
                <strong>Forties:</strong> Fibroids, heavy periods, perimenopause
                and preventive screening.
              </p>
              <p>
                <strong>After menopause:</strong> Evaluation of bleeding,
                pelvic floor health and long-term wellbeing.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Signs You Should Not Wait
            </h2>

            <p>Book a visit soon if you notice:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Missed, irregular, very heavy or very painful periods</li>
              <li>Bleeding between periods, after intercourse or after menopause</li>
              <li>Persistent pelvic pain</li>
              <li>Unusual discharge with itching, burning or odour</li>
              <li>A lump, cyst or fibroid found on a scan</li>
              <li>A positive pregnancy test</li>
            </ul>

            <p>
              For sudden severe pain, very heavy bleeding, bleeding during
              pregnancy or reduced baby movements, go to the nearest emergency
              facility immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Why Women Trust Dr. Priyanka Gynaec
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Expertise with heart:</strong> Training in laparoscopy,
                fertility treatment and endometriosis care, with a
                compassionate approach
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
              <li>
                <strong>Trust earned over time:</strong> A reputation built on
                families recommending the clinic to one another
              </li>
            </ul>

            <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Clinic Address and Appointments
              </h2>

              <p className="mb-5">
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                , reachable for women from Katghar and other parts of the city.
              </p>

              <div className="space-y-3">
                <p className="flex flex-wrap items-center gap-2">
                  <Phone size={18} />
                  <strong>Call for appointment:</strong>
                  <a href="tel:+919079765578" className="underline">
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
                    className="underline"
                  >
                    +91 89796 70705
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-2">
                  <Mail size={18} />
                  <strong>Email:</strong>
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="underline"
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
                    className="underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <section className="pt-4">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
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
