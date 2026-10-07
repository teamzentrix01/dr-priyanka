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

export default function DoctorForDelayedPeriodsMoradabad() {
  const faqs = [
    {
      q: "Who is the best doctor for delayed periods in Moradabad?",
      a: "Dr. Priyanka Pachauri is a trusted and experienced gynaecologist in Moradabad for delayed and irregular periods.",
    },
    {
      q: "How late can a period be before it's considered a concern?",
      a: "If your period is more than 7–10 days late and pregnancy is ruled out, it's advisable to consult a doctor.",
    },
    {
      q: "What is the most common cause of delayed periods?",
      a: "Besides pregnancy, PCOS is one of the most common causes, along with stress and thyroid imbalance.",
    },
    {
      q: "Can stress alone delay periods?",
      a: "Yes, high stress levels can disrupt hormone signals and delay ovulation, leading to a late period.",
    },
    {
      q: "Is PCOS curable?",
      a: "PCOS is a manageable condition; symptoms and cycle regularity can be controlled with proper treatment and lifestyle changes.",
    },
    {
      q: "Can delayed periods affect my chances of conceiving?",
      a: "Yes, irregular ovulation linked to delayed periods can make conception harder without treatment.",
    },
    {
      q: "Do I need a blood test for delayed periods?",
      a: "Yes, hormonal blood tests like thyroid and prolactin levels help identify the exact cause.",
    },
    {
      q: "Does the clinic help with irregular periods while planning pregnancy?",
      a: "Yes, ovulation induction and fertility-focused treatment are offered for women trying to conceive.",
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
                Doctor for Delayed Periods in Moradabad – Complete Guide by Dr.
                Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                A delayed or missed period can bring on instant worry, whether
                the concern is pregnancy, hormonal imbalance, or an underlying
                health condition. If your cycle is unpredictable month after
                month and you are searching for a doctor for delayed periods in
                Moradabad, this guide will help you understand the possible
                reasons behind the delay, when it&apos;s a cause for concern, and
                why an experienced gynaecologist like Dr. Priyanka Pachauri can
                help you get answers quickly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as a &quot;Delayed&quot; Period?
              </h2>

              <p className="mb-4 text-gray-700">
                A normal menstrual cycle typically ranges from 21 to 35 days, but
                this can vary from woman to woman. Understanding what is normal
                versus what needs attention is the first step.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A cycle occurring anywhere between 21–35 days is generally
                  considered normal.
                </li>
                <li>
                  A period is considered &quot;late&quot; if it hasn&apos;t
                  started 5–7 days after your expected date.
                </li>
                <li>
                  Periods that are absent for more than 3 months (excluding
                  pregnancy) are termed amenorrhoea.
                </li>
                <li>
                  Occasional one-off delays due to stress or travel are usually
                  not a concern.
                </li>
                <li>
                  Recurrent delays over multiple cycles need medical evaluation.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If your periods are consistently irregular or delayed, it&apos;s
                time to consult a gynaecologist for late periods rather than
                waiting it out repeatedly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Delayed Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Delayed periods can result from a wide range of factors, from
                lifestyle changes to underlying hormonal conditions.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS (Polycystic Ovary Syndrome), one of the most common
                  causes of irregular cycles.
                </li>
                <li>
                  Thyroid dysfunction (both hypothyroidism and hyperthyroidism).
                </li>
                <li>
                  High prolactin levels affecting ovulation.
                </li>
                <li>
                  Perimenopause, as hormone levels shift before menopause.
                </li>
                <li>
                  Hormonal contraceptive use or recent discontinuation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle-related causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Excessive stress or anxiety.</li>
                <li>Sudden weight gain or weight loss.</li>
                <li>Over-exercising or intense physical training.</li>
                <li>Poor sleep patterns and irregular routines.</li>
                <li>Crash dieting or nutritional deficiencies.</li>
                <li>Long-distance travel or major lifestyle changes.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy (the most common cause of a missed period).
                </li>
                <li>Uterine fibroids or polyps.</li>
                <li>
                  Chronic illnesses affecting hormone regulation.
                </li>
                <li>
                  Certain medications, including antidepressants or chemotherapy
                  drugs.
                </li>
                <li>
                  Breastfeeding, which naturally delays the return of periods.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why You Shouldn&apos;t Ignore Delayed Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Untreated PCOS can lead to long-term fertility complications.
                </li>
                <li>
                  Thyroid imbalance left unaddressed can affect metabolism,
                  weight, and mental health.
                </li>
                <li>
                  Chronic anovulation (lack of ovulation) increases risk of
                  irregular bleeding patterns.
                </li>
                <li>
                  Delayed diagnosis of underlying conditions can complicate
                  future pregnancy planning.
                </li>
                <li>
                  Hormonal imbalances, if untreated, can affect bone health and
                  heart health over time.
                </li>
                <li>
                  Persistent irregular cycles may signal early signs of
                  conditions needing long-term management.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor for Delayed Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods are more than 7–10 days late and pregnancy has been
                  ruled out.
                </li>
                <li>
                  Periods have stopped altogether for 3 months or more.
                </li>
                <li>
                  Delayed periods are accompanied by excessive facial hair,
                  acne, or weight gain.
                </li>
                <li>
                  You experience unexplained fatigue, hair thinning, or mood
                  changes alongside irregular cycles.
                </li>
                <li>
                  Delayed periods occur repeatedly over several months.
                </li>
                <li>
                  You are planning pregnancy and have irregular ovulation
                  patterns.
                </li>
                <li>
                  Delayed periods are accompanied by pelvic pain or unusual
                  discharge.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Diagnoses the Cause
              </h2>

              <p className="mb-4 text-gray-700">
                A step-by-step evaluation helps identify whether the delay is due
                to a simple lifestyle factor or an underlying medical condition
                requiring treatment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed menstrual history and cycle pattern discussion.
                </li>
                <li>
                  Pregnancy test to rule out or confirm pregnancy first.
                </li>
                <li>Physical and pelvic examination.</li>
                <li>
                  Ultrasound (2D/3D/4D) to check the ovaries and uterus for
                  cysts, PCOS, or fibroids.
                </li>
                <li>
                  Hormonal blood tests, including thyroid, prolactin, and
                  reproductive hormone levels.
                </li>
                <li>
                  Blood sugar and insulin resistance tests when PCOS is
                  suspected.
                </li>
                <li>
                  Additional tests based on individual symptoms and history.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri – Trusted Doctor for Delayed Periods
                in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced gynaecologist in
                Moradabad known for her thorough diagnostic approach and
                empathetic care for women dealing with irregular or missed
                periods.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials with international fellowship training.
                </li>
                <li>
                  Extensive experience managing PCOS, thyroid-related, and
                  hormonal cycle irregularities.
                </li>
                <li>
                  Access to advanced diagnostic tools, including 3D/4D
                  ultrasound imaging.
                </li>
                <li>
                  Individualized treatment plans based on age, fertility goals,
                  and underlying cause.
                </li>
                <li>
                  Known for patient, detailed consultations that address root
                  causes, not just symptoms.
                </li>
                <li>
                  Strong reputation built through consistent patient trust and
                  referrals across Moradabad.
                </li>
                <li>
                  Focus on long-term hormonal balance alongside immediate cycle
                  regulation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options Offered for Delayed Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS management combining medication, diet, and lifestyle
                  guidance.
                </li>
                <li>
                  Thyroid evaluation and coordinated treatment for hormonal
                  balance.
                </li>
                <li>
                  Ovulation induction for women trying to conceive with
                  irregular cycles.
                </li>
                <li>
                  Hormonal therapy to regulate cycle length and flow.
                </li>
                <li>
                  Diagnostic hysteroscopy or laparoscopy in structural cases
                  like fibroids or polyps.
                </li>
                <li>
                  Lifestyle and nutrition counselling to support natural cycle
                  regularity.
                </li>
                <li>
                  Regular monitoring and follow-up to track hormonal improvement
                  over time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri Over Self-Diagnosis?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Accurate identification of the real cause instead of
                  guesswork.
                </li>
                <li>
                  Comprehensive hormonal testing to rule out multiple possible
                  conditions.
                </li>
                <li>
                  Fertility-conscious treatment approach for women planning
                  future pregnancy.
                </li>
                <li>
                  Continuity of care with a team that tracks your progress over
                  several cycles.
                </li>
                <li>
                  Comfortable, private environment for discussing sensitive
                  symptoms.
                </li>
                <li>
                  Avoids unnecessary use of over-the-counter hormonal pills
                  without proper diagnosis.
                </li>
                <li>
                  Long-term treatment planning rather than temporary fixes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Delayed Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> A late period always means pregnancy.{" "}
                  <strong>Fact:</strong> Stress, PCOS, thyroid issues, and
                  lifestyle factors are equally common causes.
                </li>
                <li>
                  <strong>Myth:</strong> Irregular periods are just &quot;how
                  some women are&quot; and don&apos;t need treatment.{" "}
                  <strong>Fact:</strong> Persistent irregularity often points to
                  a treatable hormonal cause.
                </li>
                <li>
                  <strong>Myth:</strong> Only overweight women get PCOS.{" "}
                  <strong>Fact:</strong> PCOS affects women of all body types,
                  including those who are lean.
                </li>
                <li>
                  <strong>Myth:</strong> Skipping periods occasionally is
                  completely harmless. <strong>Fact:</strong> Frequent skipped
                  cycles can indicate anovulation, which may affect fertility.
                </li>
                <li>
                  <strong>Myth:</strong> Home remedies can permanently fix
                  irregular cycles. <strong>Fact:</strong> While lifestyle
                  changes help, underlying hormonal issues often need medical
                  treatment.
                </li>
                <li>
                  <strong>Myth:</strong> Birth control is the only way to
                  regulate periods. <strong>Fact:</strong> Treatment depends on
                  the root cause and may involve diet, medication, or hormonal
                  therapy tailored to your needs.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Tips to Support Regular Cycles
              </h2>

              <p className="mb-4 text-gray-700">
                Alongside medical treatment, certain daily habits can help
                support natural hormonal balance and cycle regularity.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Maintain a consistent sleep schedule of 7–8 hours each night.
                </li>
                <li>
                  Manage stress through yoga, meditation, or relaxation
                  techniques.
                </li>
                <li>
                  Maintain a healthy, stable body weight through balanced
                  nutrition.
                </li>
                <li>
                  Avoid extreme exercise routines or sudden intense training
                  changes.
                </li>
                <li>
                  Eat a balanced diet rich in whole grains, protein, and healthy
                  fats.
                </li>
                <li>
                  Limit excessive caffeine and processed food intake.
                </li>
                <li>
                  Track your cycle length and symptoms using an app or diary.
                </li>
                <li>
                  Avoid crash dieting or skipping meals frequently.
                </li>
                <li>
                  Stay consistent with any prescribed medication or supplements.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A calm, private, and judgment-free consultation environment.
                </li>
                <li>
                  Adequate time to discuss your cycle history and any related
                  symptoms.
                </li>
                <li>
                  Clear explanation of possible causes based on examination and
                  test results.
                </li>
                <li>
                  Only necessary diagnostic tests recommended for an accurate
                  diagnosis.
                </li>
                <li>
                  Step-by-step treatment plan explained in simple,
                  easy-to-understand terms.
                </li>
                <li>
                  Guidance on lifestyle changes to support hormonal balance
                  long-term.
                </li>
                <li>
                  Ongoing follow-up to monitor cycle regularity over several
                  months.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Appointment with Dr. Priyanka Pachauri, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you are searching for a dependable doctor for delayed periods
                in Moradabad, Dr. Priyanka Pachauri&apos;s clinic offers
                accurate diagnosis, personalized treatment, and a comfortable
                environment for every woman.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call for Appointment</p>
                      <a
                        href="tel:+919079765578"
                        className="hover:underline"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.gynaecologistmoradabad.com
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delayed Periods at Different Life Stages
              </h2>

              <p className="mb-4 text-gray-700">
                The reasons behind delayed periods often vary depending on age
                and life stage, making an age-appropriate evaluation important.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Teenagers:</strong> Irregular cycles are common in the
                  first 1–2 years after periods begin as hormones stabilize.
                </li>
                <li>
                  <strong>Women in their 20s–30s:</strong> PCOS, thyroid issues,
                  and stress are the most frequent causes during this stage.
                </li>
                <li>
                  <strong>Women trying to conceive:</strong> Irregular ovulation
                  may need correction through medical guidance before pregnancy
                  planning.
                </li>
                <li>
                  <strong>Postpartum and breastfeeding women:</strong> Periods
                  naturally take time to return and may remain irregular
                  temporarily.
                </li>
                <li>
                  <strong>Women approaching perimenopause (40s):</strong>{" "}
                  Hormonal shifts often cause delayed or skipped cycles as
                  menopause approaches.
                </li>
                <li>
                  <strong>Women on hormonal contraceptives:</strong> Cycle
                  changes are common while on or after stopping birth control
                  methods.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Nutrition Support for Hormonal Balance
              </h2>

              <p className="mb-4 text-gray-700">
                Nutrition plays a supporting role in regulating hormones and
                supporting a healthy, regular menstrual cycle.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Include healthy fats such as nuts, seeds, and ghee to support
                  hormone production.
                </li>
                <li>
                  Eat protein-rich foods like eggs, pulses, and paneer for
                  balanced blood sugar levels.
                </li>
                <li>
                  Add fibre-rich vegetables and whole grains to support insulin
                  sensitivity, especially with PCOS.
                </li>
                <li>
                  Limit refined sugar and processed foods that can worsen
                  hormonal imbalance.
                </li>
                <li>Stay adequately hydrated throughout the day.</li>
                <li>
                  Include iron and vitamin D-rich foods to support overall
                  reproductive health.
                </li>
                <li>
                  Avoid excessive caffeine, which can affect hormone regulation
                  and stress levels.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-gray-700">
                Delayed or irregular periods are your body&apos;s way of
                signaling that something needs attention, whether it&apos;s
                stress, weight changes, or an underlying hormonal condition like
                PCOS or thyroid imbalance. Ignoring the pattern for months can
                delay diagnosis and treatment. Consulting an experienced doctor
                for delayed periods in Moradabad like Dr. Priyanka Pachauri
                ensures you get an accurate diagnosis, a personalized treatment
                plan, and long-term support for regular, healthy cycles.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
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
