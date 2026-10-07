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

export default function DoctorForHeavyPeriodsNearMe() {
  const faqs = [
    {
      q: "Who is the best doctor for heavy periods near me in Moradabad?",
      a: "Dr. Priyanka Pachauri is a highly experienced gynaecologist trusted by women in Moradabad for heavy and irregular periods.",
    },
    {
      q: "What is considered a heavy period?",
      a: "Soaking a pad every hour, bleeding beyond 7 days, or passing large clots are signs of heavy periods.",
    },
    {
      q: "What are the main causes of heavy periods?",
      a: "Common causes include PCOS, fibroids, thyroid imbalance, polyps, and hormonal fluctuations.",
    },
    {
      q: "Can heavy periods be treated without surgery?",
      a: "Yes, many cases improve with medication, hormonal therapy, and lifestyle changes.",
    },
    {
      q: "Do fibroids always require surgery?",
      a: "Not always; small fibroids may be monitored or treated medically, while larger ones may need laparoscopic removal.",
    },
    {
      q: "Can heavy periods affect fertility?",
      a: "Yes, if the cause is PCOS, fibroids, or hormonal imbalance, it can impact conception if left untreated.",
    },
    {
      q: "Is heavy bleeding a sign of cancer?",
      a: "Rarely; most cases are due to treatable hormonal or structural causes, but evaluation is important to rule this out.",
    },
    {
      q: "Does the clinic offer laparoscopic treatment for fibroids?",
      a: "Yes, Dr. Priyanka Pachauri performs laparoscopic myomectomy to remove fibroids while preserving the uterus.",
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
                Doctor for Heavy Periods Near Me – Complete Guide by Dr.
                Priyanka Pachauri, Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Heavy periods, medically known as menorrhagia, are far more
                common than most women realize, yet many suffer silently for
                years without seeking help. If you are constantly searching
                &quot;doctor for heavy periods near me,&quot; it usually means
                your periods are disrupting your daily life, work, or sleep.
                This guide explains what counts as heavy bleeding, why it
                happens, and why visiting an experienced gynaecologist like Dr.
                Priyanka Pachauri in Moradabad can bring lasting relief.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as &quot;Heavy&quot; Periods?
              </h2>

              <p className="mb-4 text-gray-700">
                Every woman&apos;s cycle is different, but there are clear medical
                signs that indicate your bleeding is beyond normal and needs
                attention.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Soaking through one or more sanitary pads/tampons every hour
                  for several hours in a row.
                </li>
                <li>
                  Needing to use double protection (pad plus tampon) to control
                  flow.
                </li>
                <li>Bleeding that lasts longer than 7 days.</li>
                <li>Passing blood clots larger than a coin size.</li>
                <li>Needing to wake up at night to change protection.</li>
                <li>
                  Flow so heavy it restricts daily activities, work, or
                  exercise.
                </li>
                <li>Bleeding between periods or after intercourse.</li>
                <li>
                  Constant tiredness, weakness, or breathlessness due to blood
                  loss.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If any of these apply to you, it&apos;s time to consult a
                gynaecologist for heavy periods rather than waiting for the next
                cycle to &quot;settle down&quot; on its own.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Heavy Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Heavy bleeding can stem from several underlying conditions, and
                identifying the exact cause is essential for effective
                treatment.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS (Polycystic Ovary Syndrome) disrupting normal ovulation.
                </li>
                <li>
                  Thyroid imbalance affecting the menstrual cycle.
                </li>
                <li>
                  Perimenopause, when hormone levels fluctuate before menopause.
                </li>
                <li>
                  Anovulation (cycles without ovulation), common in teenagers
                  and women nearing menopause.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Structural causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uterine fibroids (non-cancerous growths in the uterus).
                </li>
                <li>
                  Uterine polyps causing irregular, heavy spotting.
                </li>
                <li>
                  Adenomyosis, where uterine lining tissue grows into the muscle
                  wall.
                </li>
                <li>Ovarian cysts affecting hormonal balance.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Other causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  IUD (copper coil) related heavy bleeding.
                </li>
                <li>Blood clotting disorders.</li>
                <li>Pelvic Inflammatory Disease (PID) or infections.</li>
                <li>
                  Certain medications, including blood thinners.
                </li>
                <li>
                  Rarely, uterine or cervical cancer (which is why timely
                  check-ups matter).
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Heavy Periods Should Never Be Ignored
              </h2>

              <p className="mb-4 text-gray-700">
                Many women normalize heavy bleeding, assuming &quot;this is just
                how my body is.&quot; However, untreated menorrhagia can lead to
                serious complications.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Iron-deficiency anaemia causing fatigue, dizziness, and
                  weakness.
                </li>
                <li>
                  Disruption to work, social life, and mental well-being.
                </li>
                <li>
                  Increased risk of missing early signs of fibroids or polyps.
                </li>
                <li>
                  Higher chances of fertility complications if the underlying
                  cause is untreated.
                </li>
                <li>
                  Emotional stress and anxiety around unpredictable bleeding.
                </li>
                <li>
                  Delayed diagnosis of conditions like adenomyosis or, rarely,
                  cancer.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor for Heavy Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bleeding soaks through protection every 1–2 hours for multiple
                  hours.
                </li>
                <li>Periods last longer than 7 days consistently.</li>
                <li>
                  You feel constantly tired, dizzy, or short of breath.
                </li>
                <li>You pass large clots frequently.</li>
                <li>Bleeding occurs between periods or after menopause.</li>
                <li>
                  Heavy periods are accompanied by severe pelvic pain.
                </li>
                <li>
                  You are trying to conceive and have irregular heavy cycles.
                </li>
                <li>
                  Over-the-counter pain relief or home remedies provide no
                  improvement.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Diagnoses Heavy Periods
              </h2>

              <p className="mb-4 text-gray-700">
                A structured, thorough evaluation helps identify the exact cause
                of heavy bleeding so that treatment is targeted and effective
                rather than generic.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed menstrual and medical history discussion.
                </li>
                <li>Physical and pelvic examination.</li>
                <li>
                  Ultrasound (2D/3D/4D) to check for fibroids, polyps, or cysts.
                </li>
                <li>
                  Blood tests to check haemoglobin, thyroid function, and
                  clotting factors.
                </li>
                <li>
                  Hormonal profile testing when PCOS or hormonal imbalance is
                  suspected.
                </li>
                <li>
                  Diagnostic hysteroscopy to directly view the uterine cavity
                  when needed.
                </li>
                <li>
                  Pap smear or biopsy in select cases to rule out abnormal cell
                  changes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Trusted Doctor for Heavy Periods Near
                You
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is one of the most sought-after
                gynaecologists in Moradabad, known for her precise diagnosis and
                compassionate approach toward women dealing with heavy or
                irregular periods.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials with international fellowship training.
                </li>
                <li>
                  Expertise in advanced 3D laparoscopic and hysteroscopic
                  procedures.
                </li>
                <li>
                  Access to modern diagnostic tools, including 3D/4D ultrasound
                  machines.
                </li>
                <li>
                  Strong track record in treating fibroids, adenomyosis, and
                  PCOS-related bleeding.
                </li>
                <li>
                  Fertility-preserving treatment approach wherever medically
                  possible.
                </li>
                <li>
                  Known for patient, detailed consultations without rushing
                  appointments.
                </li>
                <li>
                  Trusted by patients across Moradabad through consistent
                  word-of-mouth referrals.
                </li>
                <li>
                  Focus on both immediate symptom relief and long-term hormonal
                  balance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options Offered for Heavy Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Medical management with hormonal or non-hormonal medication.
                </li>
                <li>
                  Laparoscopic Myomectomy for uterine fibroid removal while
                  preserving the uterus.
                </li>
                <li>
                  Hysteroscopic Polypectomy for painless removal of uterine
                  polyps.
                </li>
                <li>
                  Diagnostic Hysteroscopy to identify the internal cause of
                  bleeding.
                </li>
                <li>
                  Laparoscopic Hysterectomy for severe, non-responsive cases
                  when medically appropriate.
                </li>
                <li>
                  PCOS management combining medication, diet, and lifestyle
                  guidance.
                </li>
                <li>
                  Iron and nutritional support to correct anaemia caused by
                  blood loss.
                </li>
                <li>
                  Regular monitoring and follow-up to track improvement over
                  cycles.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri Over a General Clinic?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Specialized focus on female reproductive health, not generic
                  treatment.
                </li>
                <li>
                  Faster, more accurate diagnosis using advanced imaging
                  technology.
                </li>
                <li>
                  Minimally invasive surgical options with quicker recovery time.
                </li>
                <li>
                  A team that maintains continuity of care across visits.
                </li>
                <li>
                  Fertility-conscious treatment planning for women planning
                  future pregnancies.
                </li>
                <li>
                  Comfortable, private clinic environment suited for sensitive
                  discussions.
                </li>
                <li>
                  Consistently positive patient outcomes and testimonials.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Heavy Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Heavy bleeding is normal for every
                  woman. <strong>Fact:</strong> Bleeding that disrupts daily
                  life or causes weakness is not normal and needs evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> Only older women get fibroids.{" "}
                  <strong>Fact:</strong> Fibroids can occur in women in their
                  20s and 30s as well.
                </li>
                <li>
                  <strong>Myth:</strong> Heavy periods always mean something
                  serious like cancer. <strong>Fact:</strong> Most cases are due
                  to hormonal imbalance or fibroids, which are treatable.
                </li>
                <li>
                  <strong>Myth:</strong> Birth control pills are the only
                  solution. <strong>Fact:</strong> Treatment depends on the
                  cause and can range from lifestyle changes to minor
                  procedures.
                </li>
                <li>
                  <strong>Myth:</strong> Surgery is always required.{" "}
                  <strong>Fact:</strong> Many women improve significantly with
                  medication alone.
                </li>
                <li>
                  <strong>Myth:</strong> Heavy periods don&apos;t affect fertility.{" "}
                  <strong>Fact:</strong> Underlying causes like PCOS or fibroids
                  can impact conception if untreated.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Tips to Support Menstrual Health
              </h2>

              <p className="mb-4 text-gray-700">
                While medical treatment addresses the root cause, these habits
                can support overall hormonal balance.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat iron-rich foods such as leafy greens, jaggery, and lentils
                  to prevent anaemia.
                </li>
                <li>Stay well-hydrated throughout your cycle.</li>
                <li>
                  Maintain a healthy weight, as excess weight can worsen
                  hormonal imbalance.
                </li>
                <li>
                  Exercise moderately and consistently to support hormone
                  regulation.
                </li>
                <li>
                  Reduce stress through yoga, meditation, or light physical
                  activity.
                </li>
                <li>
                  Track your cycle length, flow, and clot size using an app or
                  diary.
                </li>
                <li>
                  Avoid self-medicating with hormonal pills without medical
                  guidance.
                </li>
                <li>
                  Get adequate sleep to support overall hormonal health.
                </li>
                <li>
                  Schedule an annual gynaecological check-up even without
                  visible symptoms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, comfortable, and judgment-free consultation space.
                </li>
                <li>
                  Sufficient time to describe your bleeding pattern and symptoms
                  in detail.
                </li>
                <li>
                  Clear explanation of possible causes based on your history and
                  tests.
                </li>
                <li>
                  Only necessary diagnostic tests recommended, avoiding
                  unnecessary expenses.
                </li>
                <li>
                  Step-by-step discussion of treatment options, starting with
                  the least invasive.
                </li>
                <li>
                  Guidance on diet, iron supplementation, and lifestyle
                  alongside medical care.
                </li>
                <li>
                  Ongoing follow-up to monitor your response to treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Heavy Periods at Different Life Stages
              </h2>

              <p className="mb-4 text-gray-700">
                The reasons behind heavy bleeding often change depending on age
                and life stage, which is why an age-appropriate evaluation
                matters.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Teenagers:</strong> Irregular ovulation is common in
                  the first few years after periods begin, often leading to
                  unpredictable heavy flow.
                </li>
                <li>
                  <strong>Women in their 20s–30s:</strong> PCOS, fibroids, and
                  thyroid issues are frequent causes during the reproductive
                  years.
                </li>
                <li>
                  <strong>Women trying to conceive:</strong> Heavy or irregular
                  cycles may signal an underlying issue that needs correction
                  before pregnancy planning.
                </li>
                <li>
                  <strong>Postpartum women:</strong> Hormonal shifts after
                  childbirth or breastfeeding can temporarily alter period flow.
                </li>
                <li>
                  <strong>Women approaching perimenopause (40s):</strong>{" "}
                  Fluctuating hormones frequently cause heavier, longer, or
                  unpredictable periods.
                </li>
                <li>
                  <strong>Women with an IUD/copper coil:</strong> Some
                  experience heavier bleeding as a side effect, which should be
                  discussed with a gynaecologist if it becomes excessive.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Nutrition Support for Heavy Bleeding
              </h2>

              <p className="mb-4 text-gray-700">
                Since heavy periods often lead to iron loss, nutritional support
                plays an important supporting role alongside medical treatment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Include iron-rich foods like spinach, beetroot, jaggery,
                  dates, and lentils in daily meals.
                </li>
                <li>
                  Pair iron-rich foods with vitamin C sources (citrus fruits,
                  tomatoes) to improve absorption.
                </li>
                <li>
                  Add protein-rich foods such as eggs, paneer, and pulses to
                  support recovery.
                </li>
                <li>
                  Limit tea and coffee around meals, as they can reduce iron
                  absorption.
                </li>
                <li>
                  Stay consistent with any iron or vitamin supplements
                  prescribed by your doctor.
                </li>
                <li>
                  Include hydrating fluids and electrolytes during heavy flow
                  days.
                </li>
                <li>
                  Avoid crash diets, as sudden weight changes can worsen
                  hormonal imbalance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Appointment with Dr. Priyanka Pachauri, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you are searching for a reliable doctor for heavy periods
                near me, Dr. Priyanka Pachauri&apos;s clinic in Moradabad offers
                expert diagnosis, advanced treatment, and a comfortable
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
              <p className="text-gray-700">
                Heavy periods are not something you need to &quot;just live
                with.&quot; Whether the cause is hormonal, structural, or related
                to an underlying condition like PCOS or fibroids, timely
                diagnosis makes treatment far more effective. Choosing an
                experienced doctor for heavy periods near me like Dr. Priyanka
                Pachauri ensures you receive accurate diagnosis, a comfortable
                consultation experience, and a treatment plan designed around
                your health, fertility goals, and lifestyle.
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
