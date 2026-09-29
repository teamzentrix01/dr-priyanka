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

export default function DoctorForPeriodProblemsNearMe() {
  const faqs = [
    {
      q: "Who is the best doctor for period problems in Moradabad?",
      a: "Dr. Priyanka Pachauri is a highly recommended gynaecologist for diagnosing and treating menstrual disorders.",
    },
    {
      q: "What causes irregular periods?",
      a: "PCOS, thyroid disorders, stress, and hormonal imbalance are common causes of irregular periods.",
    },
    {
      q: "When should I see a doctor for heavy periods?",
      a: "If you soak a pad every 1–2 hours or pass large clots, consult a doctor immediately.",
    },
    {
      q: "Can period problems affect fertility?",
      a: "Yes, untreated conditions like PCOS or endometriosis can impact fertility over time.",
    },
    {
      q: "Is painful periods always normal?",
      a: "No, severe period pain can indicate endometriosis or fibroids and should be evaluated.",
    },
    {
      q: "How are period problems diagnosed?",
      a: "Through pelvic exam, ultrasound, hormonal blood tests, and sometimes hysteroscopy.",
    },
    {
      q: "Does Dr. Priyanka Gynaec treat PCOS?",
      a: "Yes, PCOS management with lifestyle guidance and medication is offered at the clinic.",
    },
    {
      q: "How can I book an appointment online?",
      a: "Visit https://www.gynaecologistmoradabad.com/ or contact directly via call/WhatsApp.",
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
                Doctor for Period Problems Near Me – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Menstrual problems are among the most common reasons women
                search for &quot;doctor for period problems near me.&quot;
                Whether it&apos;s irregular cycles, heavy bleeding, missed
                periods, or unbearable cramps, these issues can disrupt daily
                life and, if ignored, may point to an underlying health
                condition that needs timely attention.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, a leading gynaecologist in Moradabad,
                specialises in diagnosing and treating all types of menstrual
                disorders with a personalised, patient-first approach. If you
                are searching for expert, nearby care for period-related issues,
                this guide covers everything you need to know — causes,
                symptoms, treatment options, and why Dr. Priyanka Gynaec is a
                trusted choice for women across Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as a &quot;Period Problem&quot;?
              </h2>

              <p className="mb-4 text-gray-700">
                A normal menstrual cycle can vary from woman to woman, but
                certain patterns indicate that something needs medical
                attention.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Irregular periods:</strong> cycles shorter than 21
                  days or longer than 35 days.
                </li>
                <li>
                  <strong>Heavy menstrual bleeding (Menorrhagia):</strong>{" "}
                  soaking through pads/tampons every 1–2 hours.
                </li>
                <li>
                  <strong>Painful periods (Dysmenorrhea):</strong> cramps severe
                  enough to affect daily activities.
                </li>
                <li>
                  <strong>Missed periods (Amenorrhea):</strong> no period for 3
                  or more months (when not pregnant).
                </li>
                <li>
                  <strong>Spotting between periods.</strong>
                </li>
                <li>
                  <strong>Very light or scanty periods.</strong>
                </li>
                <li>
                  <strong>Prolonged periods:</strong> lasting more than 7 days.
                </li>
                <li>
                  <strong>PMS and mood-related symptoms:</strong> that interfere
                  with daily life.
                </li>
                <li>
                  <strong>Periods that suddenly change pattern:</strong> after
                  being regular for years.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Period Problems
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the root cause is key to effective treatment.
                Frequent causes include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal imbalance, especially involving estrogen and
                  progesterone.
                </li>
                <li>
                  Polycystic Ovary Syndrome (PCOS), a leading cause of irregular
                  periods.
                </li>
                <li>
                  Thyroid disorders (hypothyroidism or hyperthyroidism).
                </li>
                <li>Uterine fibroids or polyps.</li>
                <li>
                  Endometriosis, causing painful and heavy periods.
                </li>
                <li>
                  Stress and lifestyle factors, including poor sleep and
                  excessive exercise.
                </li>
                <li>Sudden weight gain or weight loss.</li>
                <li>
                  Perimenopause, as the body transitions toward menopause.
                </li>
                <li>
                  Certain medications, including blood thinners or hormonal
                  contraceptives.
                </li>
                <li>
                  Uterine infections or pelvic inflammatory disease (PID).
                </li>
                <li>
                  Underlying bleeding disorders, in rare cases.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Mean You Should See a Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                Many women delay treatment, assuming period problems are
                &quot;normal.&quot; Consult a doctor if you experience:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bleeding so heavy it disrupts work, sleep, or daily routine.
                </li>
                <li>
                  Severe pain that doesn&apos;t respond to regular painkillers.
                </li>
                <li>
                  Periods missing for 3+ months without pregnancy.
                </li>
                <li>Bleeding or spotting after menopause.</li>
                <li>
                  Sudden change in cycle length or flow pattern.
                </li>
                <li>
                  Fatigue, dizziness, or paleness (possible signs of anemia from
                  heavy bleeding).
                </li>
                <li>
                  Pain during intercourse linked with your cycle.
                </li>
                <li>
                  Difficulty conceiving alongside irregular periods.
                </li>
                <li>
                  Excessive facial/body hair growth or acne with irregular
                  cycles (possible PCOS).
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why You Shouldn&apos;t Ignore Period Problems
              </h2>

              <p className="mb-4 text-gray-700">
                Leaving menstrual issues untreated can lead to bigger
                complications over time:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chronic anemia from prolonged heavy bleeding.
                </li>
                <li>
                  Worsening PCOS symptoms, including weight gain and fertility
                  issues.
                </li>
                <li>
                  Growth of untreated fibroids or polyps.
                </li>
                <li>
                  Increased risk of infertility if the underlying cause is not
                  addressed.
                </li>
                <li>
                  Progression of endometriosis, making future treatment more
                  complex.
                </li>
                <li>
                  Emotional and mental health impact due to unpredictable cycles
                  and chronic pain.
                </li>
                <li>
                  Delayed detection of thyroid or hormonal disorders affecting
                  overall health.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Diagnoses Period Problems
              </h2>

              <p className="mb-4 text-gray-700">
                A structured, thorough diagnostic process ensures the right
                treatment plan:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed menstrual and medical history review.
                </li>
                <li>Physical and pelvic examination.</li>
                <li>
                  Ultrasound scan (3D/4D) using the advanced Voluson E22BT2024
                  machine to check the uterus and ovaries.
                </li>
                <li>
                  Hormonal blood tests to assess thyroid, PCOS, and other
                  hormone levels.
                </li>
                <li>
                  Complete blood count (CBC) to check for anemia from heavy
                  bleeding.
                </li>
                <li>
                  Diagnostic hysteroscopy, if fibroids or polyps are suspected.
                </li>
                <li>
                  Pap smear or additional tests, when clinically indicated.
                </li>
                <li>
                  Lifestyle and stress assessment, since these strongly
                  influence cycle regularity.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Period Problems
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment is tailored based on the cause, age, and whether the
                patient is planning a pregnancy.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal therapy to regulate irregular cycles.
                </li>
                <li>
                  Oral contraceptive pills, when appropriate, to manage heavy or
                  painful periods.
                </li>
                <li>
                  Iron and nutritional supplementation for anemia caused by
                  heavy bleeding.
                </li>
                <li>
                  PCOS management plan, including lifestyle guidance and
                  medication.
                </li>
                <li>
                  Thyroid treatment, if an underlying thyroid disorder is
                  detected.
                </li>
                <li>
                  Hysteroscopic removal of polyps for abnormal bleeding caused
                  by growths.
                </li>
                <li>
                  Laparoscopic myomectomy for fibroids affecting menstrual flow.
                </li>
                <li>
                  Pain management protocols for severe dysmenorrhea.
                </li>
                <li>
                  Endometriosis-specific treatment, including laparoscopic
                  excision if needed.
                </li>
                <li>
                  Regular monitoring and follow-up to track improvement over
                  cycles.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Because Dr. Priyanka specialises in laparoscopic gynaecological
                surgery, even structural causes like fibroids, polyps, or
                endometriosis are managed with minimally invasive techniques,
                ensuring quicker recovery and fertility preservation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Period Problems Near You
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medalist gynaecologist with international fellowship
                  training.
                </li>
                <li>
                  Deep expertise in menstrual disorders, PCOS, fibroids, and
                  endometriosis.
                </li>
                <li>
                  Access to advanced diagnostic technology, including 3D/4D
                  ultrasound and AI-based imaging.
                </li>
                <li>
                  Patient-first approach — symptoms are heard carefully before
                  jumping to treatment.
                </li>
                <li>
                  Continuity of care, with the same team tracking your progress
                  over multiple cycles.
                </li>
                <li>
                  Strong local reputation built on genuine patient trust and
                  referrals.
                </li>
                <li>
                  Conveniently located in Gandhi Nagar, Moradabad, easy to reach
                  for local patients.
                </li>
                <li>
                  Quick appointment scheduling via call or WhatsApp.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Tips to Support Healthy Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Alongside medical treatment, these habits can help manage period
                problems better:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Maintain a balanced diet rich in iron, vitamins, and protein.
                </li>
                <li>
                  Exercise moderately and regularly, avoiding extreme workouts.
                </li>
                <li>
                  Manage stress through relaxation techniques or counselling if
                  needed.
                </li>
                <li>Get adequate sleep every night.</li>
                <li>
                  Track your menstrual cycle using an app or calendar for
                  accurate history.
                </li>
                <li>
                  Avoid crash dieting or sudden extreme weight changes.
                </li>
                <li>
                  Limit caffeine and processed food, which can worsen PMS
                  symptoms.
                </li>
                <li>Stay well hydrated throughout the month.</li>
                <li>
                  Attend regular gynaecological check-ups, even without major
                  complaints.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Book an Urgent Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Some period-related symptoms need immediate medical attention
                rather than waiting:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Soaking a pad or tampon every hour for several consecutive
                  hours.
                </li>
                <li>Passing large blood clots repeatedly.</li>
                <li>Severe pain accompanied by fever or vomiting.</li>
                <li>
                  Bleeding after menopause, even a small amount.
                </li>
                <li>Fainting or extreme weakness during periods.</li>
                <li>
                  Sudden, unexplained absence of periods in a sexually active
                  woman (to rule out pregnancy-related complications).
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you notice any of these, call{" "}
                <a
                  href="tel:+919079765578"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  +91 90797 65578
                </a>{" "}
                or reach out on WhatsApp immediately rather than waiting for a
                scheduled visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Period Problems – Busted
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Irregular periods are normal for
                  everyone.&quot; <strong>Fact:</strong> Occasional variation is
                  normal, but persistent irregularity needs evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Heavy bleeding is just a heavy
                  flow, nothing serious.&quot; <strong>Fact:</strong> It can
                  indicate fibroids, hormonal imbalance, or other conditions
                  needing treatment.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Painkillers are the only solution
                  for period pain.&quot; <strong>Fact:</strong> Severe pain
                  often has an underlying cause, like endometriosis, that needs
                  specific treatment.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;PCOS only affects
                  fertility.&quot; <strong>Fact:</strong> PCOS also affects
                  metabolism, skin, hair, and long-term health if untreated.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;You should wait months before
                  seeing a doctor for period issues.&quot; <strong>Fact:</strong>{" "}
                  Early consultation leads to simpler, faster treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Period Problems at Different Life Stages
              </h2>

              <p className="mb-4 text-gray-700">
                Menstrual issues can present differently depending on a
                woman&apos;s age and life stage:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Teenagers (early years after menarche):</strong>{" "}
                  Irregular cycles are common initially, but persistent heavy or
                  extremely painful periods still need evaluation.
                </li>
                <li>
                  <strong>Reproductive age (20s–30s):</strong> PCOS, fibroids,
                  and stress-related irregularities are more common; fertility
                  planning often plays a role in treatment choice.
                </li>
                <li>
                  <strong>Late 30s–40s:</strong> Fibroids, adenomyosis, and
                  hormonal shifts can cause heavier or longer periods.
                </li>
                <li>
                  <strong>Perimenopause (40s–50s):</strong> Cycles often become
                  irregular before stopping completely; unusual heavy bleeding
                  still needs to be checked.
                </li>
                <li>
                  <strong>Postmenopausal women:</strong> Any bleeding after
                  menopause is not normal and requires immediate medical
                  evaluation.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Understanding which stage you&apos;re in helps Dr. Priyanka
                tailor the right diagnostic tests and treatment plan for your
                specific situation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Period Problems Are Linked to Overall Health
              </h2>

              <p className="mb-4 text-gray-700">
                Menstrual health is often a reflection of a woman&apos;s overall
                wellbeing. Period irregularities can be an early signal of:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Metabolic issues, such as insulin resistance linked to PCOS.
                </li>
                <li>
                  Thyroid dysfunction, affecting energy levels, weight, and
                  mood.
                </li>
                <li>
                  Nutritional deficiencies, particularly iron-deficiency anemia
                  from heavy bleeding.
                </li>
                <li>
                  Chronic stress or mental health strain, which can disrupt
                  hormonal balance.
                </li>
                <li>
                  Reproductive tract conditions, including fibroids, polyps, and
                  endometriosis.
                </li>
                <li>
                  Bone health risks, in cases of long-term missed periods
                  affecting estrogen levels.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This is why a thorough evaluation — not just symptom-based
                painkillers — is important when period problems persist.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Sets Apart a Good Period Problems Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                When searching for a &quot;doctor for period problems near
                me,&quot; look for these qualities to ensure you get the right
                care:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Proper diagnostic facilities on-site, such as ultrasound and
                  hormonal testing.
                </li>
                <li>
                  Experience in both medical and surgical management of
                  menstrual disorders.
                </li>
                <li>
                  Willingness to investigate root causes, not just prescribe
                  temporary pain relief.
                </li>
                <li>
                  Clear explanation of test results and treatment options.
                </li>
                <li>
                  Comfortable, private consultation environment for discussing
                  sensitive symptoms.
                </li>
                <li>
                  Accessible follow-up support, especially useful when tracking
                  treatment progress across cycles.
                </li>
                <li>
                  Positive patient reviews and testimonials reflecting
                  consistent, trustworthy care.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Dr. Priyanka Gynaec meets all these criteria, making it a
                dependable choice for women in and around Moradabad dealing with
                period-related concerns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Gynaec – Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you&apos;re searching for a reliable doctor for period
                problems near me, reach out directly:
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
                      <p className="font-semibold">Phone/Call for Appointment</p>
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
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                FAQs on Doctor for Period Problems Near Me
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
