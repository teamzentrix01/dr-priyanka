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

export default function DoctorForPregnancyMonitoringMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for pregnancy monitoring in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri provides antenatal and high-risk pregnancy care in Moradabad.",
    },
    {
      q: "How often should I visit during pregnancy?",
      a: "Monthly until 28 weeks, every 2 weeks until 36 weeks, then weekly, unless advised otherwise.",
    },
    {
      q: "Which scans are done during pregnancy?",
      a: "Usually a dating scan, NT scan, anomaly scan and growth scans, plus others if needed.",
    },
    {
      q: "What is a high-risk pregnancy?",
      a: "One with factors like age, diabetes, high blood pressure or twins that need closer follow-up.",
    },
    {
      q: "Is ultrasound safe for the baby?",
      a: "Yes, when done for medical reasons at the right times.",
    },
    {
      q: "Which tests check for gestational diabetes?",
      a: "A glucose tolerance test, usually at 24–28 weeks.",
    },
    {
      q: "How do I count baby movements?",
      a: "Note about 10 movements while lying on your side. Report any reduction the same day.",
    },
    {
      q: "When should I go to the hospital?",
      a: "With bleeding, leaking fluid, reduced movements, severe pain or regular early contractions.",
    },
    {
      q: "Can I skip check-ups if I feel fine?",
      a: "No. Many pregnancy problems have no early symptoms.",
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
                Doctor for Pregnancy Monitoring Near Me: Schedule, Tests & Care
                in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy lasts about nine months, but a healthy pregnancy is
                not something you can leave to chance. Regular monitoring is how
                doctors keep watch on two lives at once: yours and your
                baby&apos;s.
              </p>

              <p className="mb-4 text-gray-700">
                Many pregnancy problems, such as high blood pressure, gestational
                diabetes, anaemia, low fluid or slow growth, give no clear
                symptoms early on. You may feel perfectly well while a problem
                quietly develops. Regular check-ups catch these issues in time,
                when treatment is simple and outcomes are good.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what pregnancy monitoring includes, how
                often to visit, which tests are done in each trimester, what
                extra care high-risk pregnancies need and how to consult Dr.
                Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Pregnancy Monitoring?
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy monitoring, also called antenatal care, is the regular
                follow-up of a pregnant woman and her baby. It includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Checking the mother&apos;s health: weight, blood pressure,
                  urine, blood tests and symptoms.
                </li>
                <li>
                  Checking the baby&apos;s health: heartbeat, growth, position
                  and movements.
                </li>
                <li>Ultrasound scans at planned stages.</li>
                <li>
                  Screening tests for conditions that can affect mother or baby.
                </li>
                <li>Vaccinations and supplements.</li>
                <li>Advice on diet, activity, sleep and warning signs.</li>
                <li>Delivery planning in the last months.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Regular Monitoring Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Early detection:</strong> problems like pre-eclampsia
                  and diabetes are found before they cause harm.
                </li>
                <li>
                  <strong>Safer for the baby:</strong> growth problems and low
                  fluid are noticed in time.
                </li>
                <li>
                  <strong>Safer for the mother:</strong> anaemia, infection and
                  blood pressure are controlled.
                </li>
                <li>
                  <strong>Accurate dates:</strong> scans confirm your due date.
                </li>
                <li>
                  <strong>Peace of mind:</strong> reassurance reduces anxiety.
                </li>
                <li>
                  <strong>Better delivery planning:</strong> the safest mode and
                  timing of birth can be decided in advance.
                </li>
                <li>
                  <strong>Fewer emergencies:</strong> prepared care beats a
                  rushed decision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Often Should You Visit?
              </h2>

              <p className="mb-4 text-gray-700">
                A typical schedule for a low-risk pregnancy looks like this.
                Your doctor may adjust it.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Weeks 1–28:</strong> once a month.
                </li>
                <li>
                  <strong>Weeks 28–36:</strong> every 2 weeks.
                </li>
                <li>
                  <strong>Weeks 36 to delivery:</strong> every week.
                </li>
                <li>
                  <strong>High-risk pregnancy:</strong> more frequent visits, as
                  advised.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Tip:</strong> keep every appointment, even if you feel
                well, and always carry your antenatal file.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Monitoring in the First Trimester (Weeks 1–12)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Is Done
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Confirmation scan to locate the pregnancy and see the
                  heartbeat.
                </li>
                <li>Dating scan for the due date.</li>
                <li>History and examination, including weight and blood pressure.</li>
                <li>
                  NT scan (11–13 weeks) as part of early screening.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Haemoglobin (anaemia).</li>
                <li>Blood group and Rh factor.</li>
                <li>Blood sugar.</li>
                <li>Thyroid profile.</li>
                <li>Urine test.</li>
                <li>Infection screening as advised.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Care and Advice
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Start folic acid and other supplements as prescribed.
                </li>
                <li>Manage nausea with small, frequent meals.</li>
                <li>Avoid tobacco, alcohol and unprescribed medicines.</li>
                <li>Report bleeding or severe pain at once.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Monitoring in the Second Trimester (Weeks 13–27)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Is Done
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Anomaly (level II) scan at 18–20 weeks: a detailed check of
                  the baby&apos;s organs.
                </li>
                <li>Placenta and fluid check.</li>
                <li>Cervical length, when needed.</li>
                <li>Blood pressure, weight and urine at every visit.</li>
                <li>
                  Fundal height measurement, to track the baby&apos;s growth.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Glucose tolerance test at 24–28 weeks for gestational diabetes.
                </li>
                <li>Repeat haemoglobin.</li>
                <li>Other tests based on your health.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Care and Advice
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Take iron and calcium as prescribed.</li>
                <li>Begin noticing baby movements.</li>
                <li>
                  Tetanus vaccination and other vaccines as advised.
                </li>
                <li>Gentle exercise and good posture.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Monitoring in the Third Trimester (Weeks 28–40)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Is Done
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Growth scan to check the baby&apos;s size and weight.
                </li>
                <li>
                  Baby&apos;s position: head down, breech or sideways.
                </li>
                <li>Amniotic fluid level.</li>
                <li>
                  Doppler scan in selected cases to check blood flow.
                </li>
                <li>
                  Non-stress test (NST) in selected cases to check the heartbeat
                  pattern.
                </li>
                <li>
                  Blood pressure and urine protein checks at each visit.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Repeat haemoglobin and other tests as needed.</li>
                <li>
                  Screening for infections before delivery, if advised.
                </li>
                <li>
                  Anti-D injection at about 28 weeks for Rh-negative mothers, as
                  advised.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Care and Advice
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Kick counting from around 28 weeks.</li>
                <li>Planning the place and mode of delivery.</li>
                <li>Packing the hospital bag by 36 weeks.</li>
                <li>Learning the signs of labour.</li>
                <li>Discussing pain relief options.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Things Monitored at Every Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Blood pressure:</strong> rising pressure can signal
                  pre-eclampsia.
                </li>
                <li>
                  <strong>Weight gain:</strong> too little or too much can
                  affect the baby.
                </li>
                <li>
                  <strong>Urine protein and sugar:</strong> early clues to
                  kidney problems and diabetes.
                </li>
                <li>
                  <strong>Swelling</strong> of face, hands and feet.
                </li>
                <li>
                  <strong>Baby&apos;s heartbeat.</strong>
                </li>
                <li>
                  <strong>Size of the uterus</strong> and baby&apos;s growth.
                </li>
                <li>
                  <strong>Baby&apos;s movements.</strong>
                </li>
                <li>
                  <strong>Your symptoms and concerns.</strong>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding the Important Screening Tests
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Anaemia check:</strong> low haemoglobin is very common
                  in India and needs early treatment.
                </li>
                <li>
                  <strong>Gestational diabetes test:</strong> high sugar in
                  pregnancy can affect the baby&apos;s growth and delivery.
                </li>
                <li>
                  <strong>Thyroid test:</strong> both low and high thyroid can
                  affect the pregnancy.
                </li>
                <li>
                  <strong>Blood group and Rh factor:</strong> Rh-negative
                  mothers may need an anti-D injection.
                </li>
                <li>
                  <strong>NT scan and other screening:</strong> estimate the
                  chance of certain conditions and guide further testing when
                  needed.
                </li>
                <li>
                  <strong>Urine culture:</strong> finds silent urinary
                  infections that can cause early labour.
                </li>
                <li>
                  <strong>Blood pressure monitoring:</strong> the key check for
                  pre-eclampsia.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Needs Extra Monitoring? (High-Risk Pregnancy)
              </h2>

              <p className="mb-4 text-gray-700">
                Some pregnancies need closer follow-up and sometimes more
                frequent scans. Examples include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Age above 35 or below 18.</li>
                <li>Twins or triplets.</li>
                <li>
                  Diabetes, high blood pressure, thyroid disease, kidney or
                  heart disease.
                </li>
                <li>
                  Previous miscarriage, stillbirth or preterm birth.
                </li>
                <li>Previous C-section or uterine surgery.</li>
                <li>Low-lying placenta (placenta previa).</li>
                <li>Low or high amniotic fluid.</li>
                <li>Baby found to be small or large for dates.</li>
                <li>Rh-negative blood group.</li>
                <li>Pregnancy after IVF or fertility treatment.</li>
                <li>Severe anaemia.</li>
                <li>Bleeding or repeated pain in pregnancy.</li>
                <li>History of pre-eclampsia in an earlier pregnancy.</li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                What Extra Monitoring May Include
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits and scans.</li>
                <li>Home blood pressure or sugar tracking.</li>
                <li>Doppler and growth scans.</li>
                <li>NST or other fetal monitoring.</li>
                <li>Closer control of medicines and diet.</li>
                <li>Planned delivery timing and place.</li>
                <li>Early admission when required.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>High-risk</strong> does not mean something will go
                wrong. It means more careful watching so that problems are
                caught early.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Monitoring at Home: What You Can Do
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Count baby movements daily from around 28 weeks.
                </li>
                <li>Track your weight as advised.</li>
                <li>
                  Check your blood pressure at home if your doctor asks.
                </li>
                <li>Monitor your blood sugar if you have diabetes.</li>
                <li>Note any swelling, headaches or vision changes.</li>
                <li>Keep a small diary of symptoms and questions.</li>
                <li>Take medicines and supplements on time.</li>
                <li>Keep your antenatal file and reports safe.</li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Simple Kick Count
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Choose a time when the baby is usually active.
                </li>
                <li>Lie on your left side and note the time.</li>
                <li>Count movements until you reach about 10.</li>
                <li>
                  Reduced or changed movement should be reported the same day.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Do Not Wait for the Next Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Contact your doctor or go to the hospital immediately if you
                have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal bleeding.</li>
                <li>Leaking of fluid or a sudden gush of water.</li>
                <li>Reduced or absent baby movements.</li>
                <li>Severe or constant abdominal pain.</li>
                <li>Regular contractions before 37 weeks.</li>
                <li>
                  Severe headache, blurred vision or sudden swelling of face and
                  hands.
                </li>
                <li>Pain under the right ribs with nausea.</li>
                <li>Fever, chills or burning while passing urine.</li>
                <li>Persistent vomiting.</li>
                <li>Pain, redness and swelling in one leg.</li>
                <li>Any fall or blow to the belly.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                For heavy bleeding or intense pain, go to the nearest hospital
                emergency first, then inform your doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Nutrition and Lifestyle During Monitoring
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat balanced meals: dal, vegetables, fruit, curd, milk and
                  whole grains.
                </li>
                <li>
                  Include protein: dal, paneer, eggs (if you eat them), sprouts
                  and nuts.
                </li>
                <li>
                  Add iron and calcium-rich foods, along with prescribed
                  supplements.
                </li>
                <li>Drink enough water.</li>
                <li>
                  Avoid raw or undercooked food and unclean street food.
                </li>
                <li>Limit caffeine, and avoid tobacco and alcohol completely.</li>
                <li>
                  Walk gently and exercise as your doctor advises.
                </li>
                <li>
                  Sleep 7–8 hours, preferably on your side in later months.
                </li>
                <li>
                  Manage stress with rest, family support and relaxation.
                </li>
                <li>Do not self-medicate, even for common problems.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Each Antenatal Visit
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Conversation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>How you and the baby have been feeling.</li>
                <li>
                  Movements, pain, bleeding, discharge or other concerns.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Mother&apos;s Check
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weight and blood pressure.</li>
                <li>Swelling and general health.</li>
                <li>Urine test when needed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Baby&apos;s Check
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Belly measurement and position.</li>
                <li>Heartbeat.</li>
                <li>Ultrasound at the planned weeks.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Reports and Advice
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A simple explanation of your results.
                </li>
                <li>Diet, rest and medicine guidance.</li>
                <li>
                  Date of your next visit and warning signs to remember.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Pregnancy Monitoring
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> If I feel fine, I do not need regular
                  check-ups. <strong>Fact:</strong> Many problems have no early
                  symptoms.
                </li>
                <li>
                  <strong>Myth:</strong> Too many scans harm the baby.{" "}
                  <strong>Fact:</strong> Ultrasound is considered safe when done
                  for medical reasons and at the right times.
                </li>
                <li>
                  <strong>Myth:</strong> High-risk means something is definitely
                  wrong. <strong>Fact:</strong> It only means closer watching.
                </li>
                <li>
                  <strong>Myth:</strong> Monitoring is only needed in the last
                  months. <strong>Fact:</strong> Early care prevents many later
                  problems.
                </li>
                <li>
                  <strong>Myth:</strong> One visit to a doctor is enough if my
                  first scan was normal. <strong>Fact:</strong> Pregnancy
                  changes week by week, so regular follow-up matters.
                </li>
                <li>
                  <strong>Myth:</strong> Home remedies can replace medical
                  monitoring. <strong>Fact:</strong> They cannot detect blood
                  pressure, sugar or growth problems.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Pregnancy Monitoring with Dr. Priyanka Pachauri
              </h2>

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
                        Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
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
