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

export default function DoctorForPregnancyConfirmationMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see to confirm pregnancy in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri provides confirmation and antenatal care in Moradabad.",
    },
    {
      q: "When can I take a home pregnancy test?",
      a: "From the first day of a missed period, using morning urine.",
    },
    {
      q: "Is a blood test better than a urine test?",
      a: "Blood tests detect pregnancy slightly earlier and measure hCG exactly.",
    },
    {
      q: "When should I get my first scan?",
      a: "Usually around 6–8 weeks, when the heartbeat can be seen.",
    },
    {
      q: "Why do I need a scan if my test is positive?",
      a: "To confirm the pregnancy is in the uterus and developing normally.",
    },
    {
      q: "What if the scan shows nothing yet?",
      a: "It may be too early. A repeat scan is usually advised after a week.",
    },
    {
      q: "Can a home test be wrong?",
      a: "Yes, especially if done too early or with diluted urine.",
    },
    {
      q: "Which medicines should I start after confirmation?",
      a: "Usually folic acid and other supplements as prescribed by your doctor.",
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
                Doctor for Pregnancy Confirmation in Moradabad: Tests, Scans &
                First Steps
              </h1>

              <p className="mb-4 text-gray-700">
                A missed period, a faint line on a home test, or a sudden
                feeling that something has changed can bring excitement, worry,
                or both. Either way, the next step is the same: confirm the
                pregnancy properly and start care early.
              </p>

              <p className="mb-4 text-gray-700">
                A home test is a good first step, but it cannot tell you whether
                the pregnancy is in the right place, whether the baby is
                developing, or how many weeks you are. A gynaecologist can
                answer all of this with a simple blood test and ultrasound.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains early signs, how pregnancy is confirmed,
                what to do afterwards, and how to consult Dr. Priyanka Pachauri
                in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Early Signs of Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Signs vary from woman to woman. Some feel them within days,
                others notice nothing for weeks.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Missed or delayed period.</li>
                <li>
                  Nausea or vomiting, often called morning sickness.
                </li>
                <li>Breast tenderness or swelling.</li>
                <li>Unusual tiredness.</li>
                <li>Frequent urination.</li>
                <li>Mild cramping or light spotting.</li>
                <li>Mood swings.</li>
                <li>Food cravings or aversions to smells.</li>
                <li>Bloating and constipation.</li>
                <li>Metallic taste in the mouth.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Important: these signs also occur with hormonal changes, stress
                and other conditions, so they cannot confirm pregnancy alone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ways to Confirm Pregnancy
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Home Urine Pregnancy Test
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detects the hormone hCG in urine.
                </li>
                <li>
                  Most accurate from the first day of a missed period.
                </li>
                <li>
                  Best done with the first urine of the morning.
                </li>
                <li>Follow the kit instructions exactly.</li>
              </ul>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                Limits
              </h4>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A test done too early may show a false negative.
                </li>
                <li>
                  A faint line should be repeated after 2–3 days.
                </li>
                <li>
                  It cannot tell where the pregnancy is located.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Blood Test (Beta-hCG)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Measures the exact level of hCG in blood.
                </li>
                <li>
                  Can detect pregnancy earlier than a urine test.
                </li>
                <li>
                  A repeat test after 48 hours shows whether the level is rising
                  normally.
                </li>
                <li>
                  Useful when the scan is too early or symptoms are unusual.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Ultrasound Scan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The most reliable way to confirm a healthy pregnancy.
                </li>
                <li>
                  Shows the gestational sac inside the uterus.
                </li>
                <li>
                  Later shows the baby&apos;s heartbeat and size.
                </li>
                <li>Helps estimate the due date.</li>
              </ul>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                Typical timeline
              </h4>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  About 5 weeks: gestational sac may be seen.
                </li>
                <li>
                  About 6 weeks: heartbeat is often visible.
                </li>
                <li>
                  Around 7–8 weeks: baby&apos;s size and heartbeat are clearer.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Clinical Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your doctor combines your history, symptoms and reports for a
                  complete picture.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Doctor&apos;s Confirmation Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Confirms location:</strong> rules out ectopic
                  pregnancy, which is an emergency.
                </li>
                <li>
                  <strong>Confirms viability:</strong> checks that the baby is
                  growing and has a heartbeat.
                </li>
                <li>
                  <strong>Dates the pregnancy:</strong> gives an accurate due
                  date.
                </li>
                <li>
                  <strong>Checks for twins:</strong> early scans can show more
                  than one baby.
                </li>
                <li>
                  <strong>Spots risks early:</strong> bleeding, pain, cysts or
                  fibroids are picked up in time.
                </li>
                <li>
                  <strong>Starts safe care:</strong> folic acid, vitamins and
                  advice begin at the right time.
                </li>
                <li>
                  <strong>Ends uncertainty:</strong> you know exactly where you
                  stand.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Visit a Doctor After a Positive Test?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  As soon as the test is positive, ideally within the first 6–8
                  weeks.
                </li>
                <li>
                  Immediately if you have bleeding, severe pain, dizziness or
                  vomiting that will not stop.
                </li>
                <li>
                  If you have a history of miscarriage, ectopic pregnancy or
                  fertility treatment.
                </li>
                <li>
                  If you have diabetes, thyroid problems, high blood pressure or
                  PCOS.
                </li>
                <li>
                  If you are over 35 or have had previous pregnancy
                  complications.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic care and a focus on safe motherhood, including
                high-risk pregnancies.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Warm, unhurried consultations:</strong> you can ask
                  every question.
                </li>
                <li>
                  <strong>Advanced imaging:</strong> 3D and 4D ultrasound for
                  clear early scans.
                </li>
                <li>
                  <strong>Complete pregnancy journey:</strong> antenatal care,
                  birthing support and normal delivery under one roof.
                </li>
                <li>
                  <strong>Experience with high-risk cases:</strong> careful
                  monitoring when needed.
                </li>
                <li>
                  <strong>Fertility background:</strong> support for women who
                  conceived after treatment.
                </li>
                <li>
                  <strong>Location:</strong> A2, near Old Roadways, Gandhi
                  Nagar, Moradabad.
                </li>
                <li>
                  <strong>Easy booking:</strong> call, WhatsApp or email.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens at Your Pregnancy Confirmation Visit
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Consultation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Date of your last period and cycle length.
                </li>
                <li>
                  Symptoms, home test result and any bleeding or pain.
                </li>
                <li>
                  Past pregnancies, miscarriages or surgeries.
                </li>
                <li>Medical conditions and current medicines.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood pressure, weight and general health.</li>
                <li>Abdominal examination.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Urine or blood pregnancy test, if not already done.
                </li>
                <li>Haemoglobin, blood group and Rh factor.</li>
                <li>Blood sugar and thyroid tests when needed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Ultrasound
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Confirms location and number of babies.
                </li>
                <li>Checks the heartbeat, when visible.</li>
                <li>Estimates the due date.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Plan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vitamins and folic acid.</li>
                <li>Diet and lifestyle advice.</li>
                <li>Schedule for future scans and visits.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What If the Scan Is Too Early?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  If the test is positive but nothing is visible yet, the doctor
                  may advise a repeat scan in 7–10 days.
                </li>
                <li>
                  A repeat hCG blood test may be added.
                </li>
                <li>
                  Try not to panic, as an early scan often cannot show much.
                </li>
                <li>Report pain or bleeding at once.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Possible Findings and What They Mean
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Healthy pregnancy in the uterus:</strong> care begins
                  as planned.
                </li>
                <li>
                  <strong>Pregnancy of unknown location:</strong> close follow-up
                  to rule out ectopic pregnancy.
                </li>
                <li>
                  <strong>Ectopic pregnancy:</strong> needs urgent treatment.
                </li>
                <li>
                  <strong>Blighted ovum or early loss:</strong> the doctor
                  explains the options and supports you.
                </li>
                <li>
                  <strong>Twins:</strong> more frequent monitoring is planned.
                </li>
                <li>
                  <strong>Molar pregnancy (rare):</strong> needs specialist care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Essential Do&apos;s After Confirmation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Start folic acid as advised.</li>
                <li>
                  Eat balanced meals with protein, fruits, vegetables and iron.
                </li>
                <li>Drink enough water.</li>
                <li>Take rest and sleep well.</li>
                <li>Attend all check-ups and scans.</li>
                <li>Keep prescribed medicines on time.</li>
                <li>
                  Report any bleeding, pain or unusual discharge promptly.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Don&apos;ts
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Do not smoke, drink alcohol or use tobacco.
                </li>
                <li>
                  Do not take any medicine without asking your doctor.
                </li>
                <li>Do not lift heavy weights or over-exert.</li>
                <li>Do not skip meals or follow crash diets.</li>
                <li>Do not ignore warning signs.</li>
                <li>
                  Do not rely on home remedies for pregnancy problems.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your First Trimester Check-Up Schedule
              </h2>

              <p className="mb-4 text-gray-700">
                A clear schedule helps you know what to expect in the first
                three months.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>First visit (6-8 weeks):</strong> confirmation scan,
                  history, blood pressure and starting supplements.
                </li>
                <li>
                  <strong>Blood tests:</strong> haemoglobin, blood group and Rh
                  factor, blood sugar, thyroid, urine test and infection
                  screening as advised.
                </li>
                <li>
                  <strong>Dating scan (around 8-10 weeks):</strong> confirms the
                  due date and the baby&apos;s growth.
                </li>
                <li>
                  <strong>NT scan (11-13 weeks):</strong> checks the baby&apos;s
                  neck-fold thickness, as part of early screening.
                </li>
                <li>
                  <strong>Follow-up visits:</strong> usually every 4 weeks in a
                  normal pregnancy, and more often if there are risk factors.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor may adjust this plan to suit your health and
                history.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Nutrition Tips for Early Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Good food supports the baby&apos;s early development and helps
                manage nausea.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat small, frequent meals instead of three large ones.
                </li>
                <li>
                  Include protein: dal, curd, paneer, eggs (if you eat them),
                  sprouts and nuts.
                </li>
                <li>
                  Add iron-rich foods: spinach, beetroot, dates, jaggery and
                  pomegranate.
                </li>
                <li>
                  Choose whole grains such as roti, oats and brown rice.
                </li>
                <li>
                  Eat fruits and vegetables in different colours every day.
                </li>
                <li>
                  Sip water or lemon water through the day to stay hydrated.
                </li>
                <li>
                  Keep dry snacks like plain biscuits or roasted chana at your
                  bedside for morning nausea.
                </li>
                <li>
                  Limit caffeine, and avoid raw or undercooked food,
                  unpasteurised milk and street food that may not be clean.
                </li>
                <li>
                  Avoid papaya in large amounts and ask your doctor about
                  anything you are unsure of.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Easing Common Early Pregnancy Discomforts
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Nausea:</strong> ginger tea, light meals and avoiding
                  strong smells.
                </li>
                <li>
                  <strong>Tiredness:</strong> short naps and an early bedtime.
                </li>
                <li>
                  <strong>Frequent urination:</strong> normal in the first
                  trimester, so keep drinking water.
                </li>
                <li>
                  <strong>Constipation:</strong> more fibre, fluids and gentle
                  walking.
                </li>
                <li>
                  <strong>Heartburn:</strong> smaller meals and avoiding spicy
                  or oily food late at night.
                </li>
                <li>
                  <strong>Mood swings:</strong> talk to your partner or family,
                  and share how you feel with your doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Involving Your Partner and Family
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy is easier when the family is part of it.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Invite your husband or a family member to the first scan.
                </li>
                <li>
                  Share the doctor&apos;s advice so they can help with diet and
                  rest.
                </li>
                <li>
                  Ask them to watch for warning signs and help you reach the
                  clinic quickly.
                </li>
                <li>
                  Talk openly about fears, as anxiety is very common in early
                  pregnancy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs in Early Pregnancy: Call the Clinic
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Vaginal bleeding, even light spotting.
                </li>
                <li>
                  Severe or one-sided abdominal pain.
                </li>
                <li>
                  Vomiting so severe that you cannot keep food or water down.
                </li>
                <li>Fever with chills.</li>
                <li>Burning while passing urine.</li>
                <li>Dizziness or fainting.</li>
                <li>
                  Shoulder-tip pain along with abdominal pain.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                For heavy bleeding or intense pain, go to the nearest hospital
                emergency first, then inform your doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> A home test is enough.{" "}
                  <strong>Fact:</strong> It only shows hCG. A scan confirms
                  location, health and dates.
                </li>
                <li>
                  <strong>Myth:</strong> No symptoms means no pregnancy.{" "}
                  <strong>Fact:</strong> Some women have very few early
                  symptoms.
                </li>
                <li>
                  <strong>Myth:</strong> Spotting always means miscarriage.{" "}
                  <strong>Fact:</strong> Many spotting cases continue normally,
                  but it still needs a check-up.
                </li>
                <li>
                  <strong>Myth:</strong> Scans harm the baby.{" "}
                  <strong>Fact:</strong> Ultrasound is considered safe when done
                  for medical reasons.
                </li>
                <li>
                  <strong>Myth:</strong> First visit can wait until the third
                  month. <strong>Fact:</strong> Early care is safer and gives
                  time to prevent problems.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Pregnancy Confirmation with Dr. Priyanka Pachauri
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
