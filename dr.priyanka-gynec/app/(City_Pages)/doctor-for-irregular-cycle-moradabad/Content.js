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

export default function DoctorForIrregularCycleMoradabad() {
  const faqs = [
    {
      q: "Who is the best doctor for irregular cycle in Moradabad?",
      a: "Dr. Priyanka Pachauri is a trusted and experienced gynaecologist in Moradabad for diagnosing and treating irregular menstrual cycles.",
    },
    {
      q: "How is an irregular cycle different from a one-time delayed period?",
      a: "An irregular cycle involves a repeated, unpredictable pattern month after month, unlike a single occasional delay.",
    },
    {
      q: "What is the most common cause of irregular cycles?",
      a: "PCOS is one of the most common causes, along with thyroid imbalance and chronic stress.",
    },
    {
      q: "Can weight affect cycle regularity?",
      a: "Yes, both significant weight gain and weight loss can disrupt hormonal balance and cause irregular cycles.",
    },
    {
      q: "Can irregular cycles be treated without medication?",
      a: "Mild cases may improve with lifestyle changes, but many require medical evaluation and treatment for lasting results.",
    },
    {
      q: "Does an irregular cycle always mean infertility?",
      a: "No, but it can make conception harder to plan; treatment often improves both regularity and fertility outcomes.",
    },
    {
      q: "How long should I track my cycle before seeing a doctor?",
      a: "If irregularity persists for 3 or more consecutive cycles, it's advisable to consult a doctor.",
    },
    {
      q: "Does the clinic help with cycle regulation for women planning pregnancy?",
      a: "Yes, ovulation induction and fertility-focused treatment are offered for women with irregular cycles trying to conceive.",
    },
    {
      q: "Can stress alone cause long-term cycle irregularity?",
      a: "Yes, chronic, prolonged stress can disrupt hormonal signalling and lead to ongoing cycle irregularity if unmanaged.",
    },
    {
      q: "Is it normal for cycle length to change slightly with age?",
      a: "Yes, some variation is normal, but a significant or sudden change should still be evaluated by a doctor.",
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
                Doctor for Irregular Cycle in Moradabad – Complete Guide by Dr.
                Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                An irregular menstrual cycle is more than just an inconvenience —
                it can make planning your daily life, work, and even family
                planning unpredictable and stressful. Unlike a simple one-time
                delay, cycle irregularity often follows a repeating pattern of
                unpredictability that can point to an underlying hormonal issue.
                If you are searching for a doctor for irregular cycle in
                Moradabad, this guide explains what qualifies as an irregular
                cycle, its patterns, causes, and how Dr. Priyanka Pachauri helps
                women bring back predictability and balance to their cycles.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does an &quot;Irregular Cycle&quot; Actually Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                A regular menstrual cycle typically falls between 21 and 35 days,
                with a fairly consistent pattern month to month. An irregular
                cycle refers to a noticeable, repeated variation from this
                pattern rather than a single occasional delay.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycle length varying significantly from month to month (for
                  example, 24 days one month and 40 days the next).
                </li>
                <li>
                  Unpredictable gaps between periods, making it hard to
                  anticipate your next cycle.
                </li>
                <li>
                  Periods that are sometimes very light and other times
                  unusually heavy.
                </li>
                <li>
                  Skipping periods altogether for one or more months without
                  pregnancy.
                </li>
                <li>
                  Experiencing periods more frequently than every 21 days.
                </li>
                <li>
                  Spotting between periods on a recurring basis.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Unlike a single delayed period, an irregular cycle is defined by
                this ongoing unpredictability, which is why it often requires a
                different diagnostic approach.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Cycle Irregularity
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the specific pattern of irregularity helps guide
                diagnosis and treatment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Oligomenorrhoea:</strong> infrequent periods, often
                  more than 35 days apart.
                </li>
                <li>
                  <strong>Polymenorrhoea:</strong> frequent periods occurring
                  less than 21 days apart.
                </li>
                <li>
                  <strong>Amenorrhoea:</strong> absence of periods for three or
                  more consecutive months.
                </li>
                <li>
                  <strong>Metrorrhagia:</strong> irregular bleeding or spotting
                  between expected periods.
                </li>
                <li>
                  <strong>Variable cycle length:</strong> cycles that differ
                  significantly in length from one month to the next, without a
                  consistent pattern.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of an Irregular Menstrual Cycle
              </h2>

              <p className="mb-4 text-gray-700">
                Irregular cycles are almost always linked to disruptions in the
                hormonal signals that regulate ovulation and menstruation.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS (Polycystic Ovary Syndrome), one of the leading causes of
                  long-term cycle irregularity.
                </li>
                <li>
                  Thyroid dysfunction, both underactive and overactive.
                </li>
                <li>
                  High prolactin levels interfering with ovulation.
                </li>
                <li>
                  Perimenopause, as hormone production becomes inconsistent
                  before menopause.
                </li>
                <li>
                  Premature ovarian insufficiency in younger women.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle-related causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chronic stress affecting the hormonal signals from the brain
                  to the ovaries.
                </li>
                <li>
                  Significant weight fluctuations, either gain or loss.
                </li>
                <li>Excessive or intense physical exercise.</li>
                <li>Poor or inconsistent sleep patterns.</li>
                <li>Extreme dieting or nutritional deficiencies.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical and structural causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uterine polyps or fibroids causing irregular bleeding
                  patterns.
                </li>
                <li>
                  Recent use or discontinuation of hormonal contraception.
                </li>
                <li>
                  Chronic illnesses affecting overall hormone regulation.
                </li>
                <li>
                  Certain medications affecting the menstrual cycle.
                </li>
                <li>
                  Postpartum or breastfeeding-related hormonal shifts.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Irregular Cycles Should Be Evaluated
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Long-term untreated PCOS can affect fertility and increase
                  certain long-term health risks.
                </li>
                <li>
                  Unmanaged thyroid imbalance can affect metabolism, weight, and
                  overall wellbeing.
                </li>
                <li>
                  Chronic anovulation makes it difficult to predict fertile
                  windows for those trying to conceive.
                </li>
                <li>
                  Irregular bleeding patterns can sometimes mask other
                  underlying uterine conditions.
                </li>
                <li>
                  Ongoing unpredictability can create significant stress around
                  planning daily life and pregnancy.
                </li>
                <li>
                  Some causes of irregularity, if identified early, are simpler
                  to manage before they progress.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor for an Irregular Cycle
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your cycle length varies by more than 7–9 days from month to
                  month on a regular basis.
                </li>
                <li>
                  You have gone 3 or more months without a period, and pregnancy
                  has been ruled out.
                </li>
                <li>
                  You are experiencing periods more often than every 21 days.
                </li>
                <li>
                  Irregular cycles are accompanied by acne, excess facial hair,
                  or unexplained weight changes.
                </li>
                <li>
                  You notice spotting between periods on a recurring basis.
                </li>
                <li>
                  Irregular cycles are affecting your ability to plan a
                  pregnancy.
                </li>
                <li>
                  Irregularity is accompanied by fatigue, hair thinning, or mood
                  changes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Diagnoses Cycle Irregularity
              </h2>

              <p className="mb-4 text-gray-700">
                Because irregular cycles can stem from several different causes,
                a structured diagnostic process is essential to reach the right
                conclusion.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed tracking and discussion of your cycle pattern over
                  recent months.
                </li>
                <li>Physical and pelvic examination.</li>
                <li>
                  Ultrasound (2D/3D/4D) to assess the ovaries and uterus for
                  cysts, PCOS features, or structural causes.
                </li>
                <li>
                  Hormonal blood tests, including thyroid, prolactin, and
                  reproductive hormone panels.
                </li>
                <li>
                  Blood sugar and insulin resistance testing when PCOS is
                  suspected.
                </li>
                <li>
                  Additional testing based on your specific symptoms and cycle
                  pattern.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri – Trusted Doctor for Irregular Cycle
                in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced gynaecologist in
                Moradabad known for her systematic, patient-centered approach to
                diagnosing and correcting menstrual cycle irregularities.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials with international fellowship training.
                </li>
                <li>
                  Extensive experience managing PCOS, thyroid-linked, and
                  stress-related cycle irregularities.
                </li>
                <li>
                  Access to advanced diagnostic tools, including 3D/4D
                  ultrasound imaging.
                </li>
                <li>
                  Personalized treatment plans based on cycle pattern, age, and
                  fertility goals.
                </li>
                <li>
                  Known for taking time to understand your specific cycle
                  history rather than offering generic solutions.
                </li>
                <li>
                  Strong reputation among women across Moradabad for effective
                  long-term cycle management.
                </li>
                <li>
                  Focus on restoring natural hormonal balance wherever possible.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options Offered for Irregular Cycles
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS management through medication, diet, and lifestyle
                  guidance.
                </li>
                <li>
                  Thyroid evaluation and coordinated hormonal correction.
                </li>
                <li>
                  Ovulation induction for women trying to conceive with
                  irregular cycles.
                </li>
                <li>
                  Hormonal therapy to help regulate cycle length and
                  predictability.
                </li>
                <li>
                  Diagnostic hysteroscopy or ultrasound-guided evaluation for
                  structural causes.
                </li>
                <li>
                  Nutrition and lifestyle counselling to support natural cycle
                  regularity.
                </li>
                <li>
                  Long-term monitoring with cycle tracking across several
                  months.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri Over Guessing at Home?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Accurate identification of the specific type and cause of
                  irregularity.
                </li>
                <li>
                  Comprehensive hormonal testing rather than a one-size-fits-all
                  approach.
                </li>
                <li>
                  Fertility-focused guidance for women planning to conceive.
                </li>
                <li>
                  Consistent tracking of your progress across multiple cycles.
                </li>
                <li>
                  A comfortable, private setting to discuss sensitive
                  cycle-related concerns.
                </li>
                <li>
                  Avoids reliance on unsupervised hormonal medication or
                  unverified remedies.
                </li>
                <li>
                  Long-term treatment planning aimed at restoring natural
                  balance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Irregular Cycles
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> An irregular cycle is just a personal
                  trait and not a medical concern. <strong>Fact:</strong> Ongoing
                  irregularity is usually linked to an identifiable and often
                  treatable hormonal cause.
                </li>
                <li>
                  <strong>Myth:</strong> Only women trying to conceive need to
                  worry about irregular cycles. <strong>Fact:</strong> Irregular
                  cycles can affect long-term health and should be evaluated
                  regardless of pregnancy plans.
                </li>
                <li>
                  <strong>Myth:</strong> Weight has nothing to do with cycle
                  regularity. <strong>Fact:</strong> Both being underweight and
                  overweight can significantly affect hormonal balance and cycle
                  regularity.
                </li>
                <li>
                  <strong>Myth:</strong> Irregular cycles always mean PCOS.{" "}
                  <strong>Fact:</strong> While PCOS is common, thyroid issues,
                  stress, and other factors can also cause irregularity.
                </li>
                <li>
                  <strong>Myth:</strong> Once cycles become irregular, they can
                  never return to normal. <strong>Fact:</strong> With proper
                  diagnosis and treatment, many women regain regular,
                  predictable cycles.
                </li>
                <li>
                  <strong>Myth:</strong> Tracking your cycle isn&apos;t
                  necessary if you&apos;re not trying to conceive.{" "}
                  <strong>Fact:</strong> Cycle tracking helps identify
                  irregularity patterns early, regardless of pregnancy plans.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Tips to Support Cycle Regularity
              </h2>

              <p className="mb-4 text-gray-700">
                While medical treatment addresses the root cause, these daily
                habits can support hormonal balance over time.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Maintain a consistent sleep schedule of 7–8 hours each night.
                </li>
                <li>
                  Manage stress through yoga, meditation, or relaxation
                  practices.
                </li>
                <li>
                  Maintain a stable, healthy body weight through balanced
                  nutrition.
                </li>
                <li>
                  Avoid sudden, extreme changes in exercise intensity or diet.
                </li>
                <li>
                  Eat a balanced diet with adequate protein, healthy fats, and
                  fibre.
                </li>
                <li>
                  Limit excessive caffeine and processed food intake.
                </li>
                <li>
                  Use a cycle-tracking app or diary to document length, flow,
                  and symptoms.
                </li>
                <li>
                  Avoid unsupervised use of hormonal supplements or medication.
                </li>
                <li>
                  Stay consistent with any treatment plan recommended by your
                  doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Irregular Cycles and Fertility Planning
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular ovulation makes it harder to predict fertile days
                  for conception.
                </li>
                <li>
                  Tracking basal body temperature or ovulation kits may be less
                  reliable with irregular cycles.
                </li>
                <li>
                  Treating the underlying cause often improves both cycle
                  regularity and fertility outcomes.
                </li>
                <li>
                  Ovulation induction can help women with irregular cycles
                  conceive more predictably.
                </li>
                <li>
                  Early evaluation is especially important for women over 30
                  planning pregnancy with irregular cycles.
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
                  Detailed review of your cycle history, ideally with tracked
                  data if available.
                </li>
                <li>
                  Clear explanation of the likely cause based on examination and
                  test results.
                </li>
                <li>
                  Only necessary diagnostic tests recommended to reach an
                  accurate diagnosis.
                </li>
                <li>
                  A treatment plan tailored to your specific cycle pattern and
                  life goals.
                </li>
                <li>
                  Guidance on lifestyle adjustments to support hormonal
                  balance.
                </li>
                <li>
                  Ongoing follow-up to monitor cycle regularity improvement over
                  several months.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Appointment with Dr. Priyanka Pachauri, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If unpredictable periods are affecting your daily life or family
                planning, and you are searching for a reliable doctor for
                irregular cycle in Moradabad, Dr. Priyanka Pachauri&apos;s
                clinic offers thorough diagnosis and personalized, long-term
                treatment.
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
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
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
              <p className="text-gray-700">
                An irregular cycle is your body&apos;s signal that its hormonal
                balance needs attention, whether the cause is PCOS, thyroid
                imbalance, stress, or another underlying factor. Rather than
                living with constant unpredictability, timely evaluation by an
                experienced doctor for irregular cycle in Moradabad like Dr.
                Priyanka Pachauri can help identify the exact cause and guide
                you toward regular, predictable, and healthier cycles.
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
