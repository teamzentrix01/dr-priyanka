
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Rampur?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Rampur and nearby areas travel there for consultations.",
  },
  {
    q: "Can PCOS be cured?",
    a: "PCOS is a long-term condition, but symptoms can be managed very well with lifestyle changes, medication and regular follow-up.",
  },
  {
    q: "Can I get pregnant if I have PCOS?",
    a: "Yes, many women with PCOS conceive naturally or with treatment such as ovulation induction. Your doctor will guide you.",
  },
  {
    q: "How often will I need follow-up?",
    a: "It depends on your plan and goals. Your doctor will set a schedule and explain which checks can be done closer to home.",
  },
  {
    q: "What diet is best for PCOS?",
    a: "A balanced diet with vegetables, fruit, whole grains, pulses and adequate protein, with limited sugary and refined foods. Your doctor can personalise this.",
  },
  {
    q: "Does PCOS always cause weight gain?",
    a: "No. Many women with PCOS are of normal weight, though weight gain is common and can worsen symptoms.",
  },
  {
    q: "Will I need IVF for PCOS?",
    a: "Not always. Many women conceive with lifestyle changes and ovulation induction. IVF is considered when other treatments do not work or other factors are present.",
  },
  {
    q: "Does PCOS increase diabetes risk?",
    a: "It can, because of insulin resistance, so periodic blood sugar checks and a healthy lifestyle are important.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on www.gynaecologistmoradabad.com.",
  },
];

export default function PCOSDoctorNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              PCOS Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad
            </h1>

            <p>
              PCOS is not a one-time problem to fix. It is a long-term
              hormonal condition that is best managed with a steady plan,
              regular follow-up and a doctor who understands your goals. For
              some women the goal is regular periods. For others it is clearer
              skin, healthier weight or a pregnancy.
            </p>

            <p>
              If you live in Rampur, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in Moradabad, not
              in Rampur, and women from Rampur and nearby areas travel there
              for consultations. Its philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong> Your symptoms,
              goals and story shape the plan.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is PCOS?
              </h2>
              <p>
                Polycystic ovary syndrome is a hormonal condition in which the
                ovaries may not release eggs regularly, and levels of certain
                hormones, especially androgens, may be higher than usual.
                Insulin resistance is also common. The ovaries may show many
                small follicles on ultrasound, but these are not harmful cysts
                in the usual sense.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Common Symptoms
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Irregular, infrequent or absent periods</li>
                <li>Difficulty conceiving</li>
                <li>Acne and oily skin</li>
                <li>Excess hair growth on the face, chest or abdomen</li>
                <li>Thinning scalp hair</li>
                <li>Weight gain, especially around the abdomen</li>
                <li>Dark, velvety skin patches on the neck or underarms</li>
                <li>Mood changes and tiredness</li>
              </ul>
              <p>
                One symptom alone does not mean PCOS. A proper evaluation is
                needed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How PCOS Is Diagnosed
              </h2>
              <p>There is no single test. Diagnosis usually combines:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Your menstrual history and symptoms</li>
                <li>Physical examination</li>
                <li>
                  Blood tests for hormones, thyroid function, blood sugar and
                  other markers as advised
                </li>
                <li>
                  Ultrasound of the ovaries and uterus, using a Voluson E22
                  3D/4D ultrasound machine for detailed imaging
                </li>
              </ul>
              <p>
                Other conditions, such as thyroid problems, can mimic PCOS, so
                they are checked first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Long-Term Follow-Up Matters
              </h2>
              <p>
                PCOS can be linked with insulin resistance, higher diabetes
                risk, raised cholesterol, thickening of the uterine lining
                when periods are infrequent, and pregnancy complications such
                as gestational diabetes. With regular review, these risks can
                be reduced and symptoms kept under control.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Building Your PCOS Plan
              </h2>
              <p>Treatment depends on your main concern.</p>

              <h3 className="text-lg font-semibold text-gray-900">
                If Your Goal Is Regular Periods and Symptom Control
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Lifestyle changes as the foundation</li>
                <li>
                  Hormonal treatment where appropriate, to regulate periods
                  and protect the uterine lining
                </li>
                <li>Treatment for acne or excess hair growth</li>
                <li>
                  Medicines that improve insulin sensitivity, where suitable
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                If Your Goal Is Pregnancy
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Ovulation tracking and ovulation induction</li>
                <li>Guided treatment with ultrasound monitoring</li>
                <li>
                  Advanced fertility options, including IVF, when simpler
                  measures do not work
                </li>
              </ul>

              <p>
                The clinic offers fertility evaluation for both partners, IVF,
                time-lapse embryo monitoring, and AI-powered semen analysis
                with DNA integrity testing. Many women with PCOS conceive
                with lifestyle changes and ovulation induction alone.
              </p>

              <p>
                <strong>
                  Never start or stop hormonal medicines on your own.
                </strong>{" "}
                They need evaluation and monitoring.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Lifestyle: The Foundation
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Balanced diet:</strong> Vegetables, fruit, whole
                  grains, pulses and adequate protein, with fewer sugary
                  drinks and refined foods.
                </li>
                <li>
                  <strong>Regular activity:</strong> Brisk walking, yoga or
                  strength training that you enjoy and can keep up.
                </li>
                <li>
                  <strong>Gradual weight management:</strong> Even modest
                  weight loss may help restore regular ovulation in women who
                  are overweight.
                </li>
                <li>
                  <strong>Sleep and stress care:</strong> Both affect hormones.
                </li>
                <li>
                  <strong>No smoking:</strong> It worsens hormonal and
                  metabolic health.
                </li>
              </ul>
              <p>
                Please avoid crash diets and unproven supplements. Slow,
                steady changes work better than extreme ones.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Track Your Progress Between Visits
              </h2>
              <p>
                When your doctor is in another city, a simple record helps
                both of you.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Period diary:</strong> Note the first day of each
                  period, flow and any pain.
                </li>
                <li>
                  <strong>Weight and waist:</strong> Measure every few weeks.
                </li>
                <li>
                  <strong>Skin and hair:</strong> Note changes in acne or hair
                  growth.
                </li>
                <li>
                  <strong>Symptoms and mood:</strong> Record how you feel.
                </li>
                <li>
                  <strong>Medicines:</strong> Note what you take, and any side
                  effects.
                </li>
                <li>
                  <strong>Reports:</strong> Keep blood tests and scans in date
                  order.
                </li>
              </ul>
              <p>
                Bring this record to each visit. Patterns across several
                months are more useful than a single snapshot.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Follow-Up When You Live in Rampur
              </h2>

              <h3 className="text-lg font-semibold text-gray-900">
                Ask Your Doctor at the First Visit
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>How often will I need to come to the clinic?</li>
                <li>
                  Which blood tests can be done closer to home, if the doctor
                  agrees?
                </li>
                <li>
                  When should I repeat tests, and which results should I share?
                </li>
                <li>What changes should make me contact you sooner?</li>
                <li>
                  If I am trying to conceive, what is the monitoring schedule?
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Make Visits Easier
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Book in advance and confirm timings</li>
                <li>Bring your diary, reports and a list of medicines</li>
                <li>
                  Ask whether tests and consultation can be planned on the
                  same day
                </li>
                <li>Travel with a family member where helpful</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS and Pregnancy
              </h2>
              <p>
                Many women with PCOS have healthy pregnancies. Some face a
                higher chance of gestational diabetes, high blood pressure or
                miscarriage, so regular antenatal care is important. Dr.
                Priyanka Pachauri provides antenatal services and high-risk
                pregnancy monitoring, so care can continue under one roof from
                conception to delivery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS Is Not Only About Fertility
              </h2>
              <p>
                If your concern is acne, hair growth, weight or irregular
                periods, treatment is still valuable. Managing PCOS early also
                protects long-term health, including heart health and diabetes
                risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS in Teenagers
              </h2>
              <p>
                Irregular periods are common in the first couple of years
                after a girl&apos;s first period, so a doctor assesses carefully
                before labelling it as PCOS. Persistent irregular cycles,
                significant acne, excess hair or rapid weight gain deserve
                evaluation. Gentle guidance on diet, activity and emotional
                support often comes first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Wellbeing
              </h2>
              <p>
                Visible symptoms and fertility worries can affect confidence
                and mood. Talk openly with your doctor, family or a trusted
                friend. If low mood or anxiety becomes persistent, please ask
                for support, since emotional health is part of good PCOS care.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When to See a PCOS Doctor
              </h2>
              <p>Book a consultation if you have:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Periods less often than every 35 days, or absent for several
                  months
                </li>
                <li>Difficulty conceiving after 6 to 12 months of trying</li>
                <li>Persistent acne, excess hair or hair thinning</li>
                <li>Rapid or unexplained weight gain</li>
                <li>
                  A PCOS diagnosis and uncertainty about the next steps
                </li>
                <li>Very heavy or prolonged bleeding</li>
              </ul>
              <p>
                For sudden severe pain or very heavy bleeding with dizziness,
                go to the nearest emergency facility immediately. Do not delay
                care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>A listening-first approach</strong> with personalised
                  plans, never one-size-fits-all
                </li>
                <li>
                  <strong>Complete support</strong> from PCOS diagnosis to
                  fertility treatment, pregnancy and delivery
                </li>
                <li>
                  <strong>Advanced imaging and laboratory technology</strong>
                </li>
                <li>
                  <strong>Honest guidance</strong> on what is needed and what
                  is not
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
              </ul>
              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Clinic Address and Appointments
              </h2>
              <p>
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <h3 className="mb-4 text-2xl font-bold">
                  Book Your PCOS Consultation
                </h3>
                <p className="mb-6">
                  Discuss your symptoms, treatment goals and follow-up plan
                  with Dr. Priyanka Pachauri.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0" />
                    <div>
                      <strong>Call for appointment:</strong>{" "}
                      <a
                        href="tel:+919079765578"
                        className="underline underline-offset-2"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0" />
                    <div>
                      <strong>WhatsApp:</strong>{" "}
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0" />
                    <div>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all underline underline-offset-2"
                      >
                        drpriyankagynaec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 shrink-0" />
                    <div>
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all underline underline-offset-2"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#8F1738] hover:text-white"
                  >
                    Our Services
                  </Link>
                </div>
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
                  <h3 className="font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="mt-2 text-gray-700">{faq.a}</p>
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
