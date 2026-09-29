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

export default function DoctorForPregnancyCheckupNearMe() {
  const faqs = [
    {
      q: "Who is the best doctor for pregnancy checkup near me in Moradabad?",
      a: "Dr. Priyanka Pachauri is a highly recommended gynaecologist for complete antenatal checkups.",
    },
    {
      q: "How often should I go for pregnancy checkups?",
      a: "Monthly in early pregnancy, increasing to weekly visits closer to delivery.",
    },
    {
      q: "What tests are done in the first checkup?",
      a: "Blood tests, blood group, urine test, and an early dating scan are typically done.",
    },
    {
      q: "Is a pregnancy checkup needed if I feel completely fine?",
      a: "Yes, regular checkups detect silent complications before symptoms appear.",
    },
    {
      q: "Does Dr. Priyanka Gynaec handle high-risk pregnancy checkups?",
      a: "Yes, high-risk pregnancies are monitored closely with additional scans and tests.",
    },
    {
      q: "What should I bring to my pregnancy checkup?",
      a: "Carry previous reports, scan results, and a list of any symptoms or questions.",
    },
    {
      q: "Can my partner accompany me to the checkup?",
      a: "Yes, partners are welcome, especially during major scans and discussions.",
    },
    {
      q: "Can I book an appointment online?",
      a: "Yes, visit https://www.gynaecologistmoradabad.com/ or contact directly via call/WhatsApp.",
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
                Doctor for Pregnancy Checkup Near Me – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Regular pregnancy checkups are the foundation of a safe and
                healthy pregnancy journey. From confirming pregnancy to
                monitoring the baby&apos;s growth and preparing for a safe
                delivery, every visit plays an important role. If you are
                searching for a reliable &quot;doctor for pregnancy checkup near
                me&quot; in Moradabad, choosing an experienced gynaecologist who
                offers complete antenatal care under one roof can make the
                entire journey smoother and safer.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, a leading gynaecologist in Moradabad,
                provides comprehensive pregnancy checkups combining personal
                attention with advanced technology. This guide explains
                everything about pregnancy checkups — what happens during each
                visit, how often you should go, and why Dr. Priyanka Gynaec is a
                trusted choice for expecting mothers nearby.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Regular Pregnancy Checkups Matter
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy checkups, also called antenatal visits, are essential
                for tracking the health of both mother and baby throughout the
                nine months.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Confirms pregnancy and estimates the due date.
                </li>
                <li>
                  Monitors baby&apos;s growth and development at every stage.
                </li>
                <li>
                  Tracks mother&apos;s blood pressure, weight, and overall
                  health.
                </li>
                <li>
                  Detects early signs of complications like gestational diabetes
                  or pre-eclampsia.
                </li>
                <li>
                  Provides timely vaccinations and supplements needed during
                  pregnancy.
                </li>
                <li>
                  Offers guidance on diet, exercise, and lifestyle for a healthy
                  pregnancy.
                </li>
                <li>
                  Builds a strong doctor-patient relationship, useful during
                  delivery planning.
                </li>
                <li>
                  Reduces anxiety by keeping expecting parents informed at every
                  step.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During a Pregnancy Checkup Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Each pregnancy checkup typically includes a combination of the
                following:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Weight and blood pressure measurement.
                </li>
                <li>
                  Abdominal examination to check the size and position of the
                  uterus.
                </li>
                <li>
                  Fetal heartbeat check, once detectable.
                </li>
                <li>
                  Urine test, to screen for protein, sugar, or infection.
                </li>
                <li>
                  Blood tests, including hemoglobin, blood group, and infection
                  screening.
                </li>
                <li>
                  Ultrasound scans, as scheduled for the specific trimester.
                </li>
                <li>
                  Discussion of symptoms, such as nausea, swelling, or
                  discomfort.
                </li>
                <li>
                  Guidance on diet, supplements, and lifestyle adjustments.
                </li>
                <li>
                  Answering questions and addressing concerns from the expecting
                  mother.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recommended Pregnancy Checkup Schedule
              </h2>

              <p className="mb-4 text-gray-700">
                The frequency of checkups increases as pregnancy progresses,
                allowing closer monitoring near delivery.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester (up to 12 weeks):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Initial checkup to confirm pregnancy.
                </li>
                <li>
                  Blood tests, blood group, and infection screening.
                </li>
                <li>
                  Dating scan and NT scan for early risk assessment.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester (13–27 weeks):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Monthly checkups.</li>
                <li>Anomaly scan around 18–22 weeks.</li>
                <li>Screening for gestational diabetes.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester (28 weeks to delivery):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Checkups every 2 weeks until 36 weeks.</li>
                <li>Weekly checkups from 36 weeks until delivery.</li>
                <li>
                  Growth scans, Doppler studies (if needed), and delivery
                  planning discussions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Tests Done During Pregnancy Checkups
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Complete Blood Count (CBC):</strong> to check
                  hemoglobin and detect anemia.
                </li>
                <li>
                  <strong>Blood group and Rh factor test.</strong>
                </li>
                <li>
                  <strong>Blood sugar test:</strong> to screen for gestational
                  diabetes.
                </li>
                <li>
                  <strong>Thyroid function test.</strong>
                </li>
                <li>
                  <strong>Urine routine and culture test.</strong>
                </li>
                <li>
                  <strong>Infection screening:</strong> including HIV, hepatitis
                  B, and syphilis, as per standard protocols.
                </li>
                <li>
                  <strong>Double marker / NT scan:</strong> for early
                  chromosomal risk screening.
                </li>
                <li>
                  <strong>Anomaly scan:</strong> detailed structural evaluation
                  of the baby.
                </li>
                <li>
                  <strong>Growth scans and Doppler studies:</strong> especially
                  important in high-risk pregnancies.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Needs More Frequent Pregnancy Checkups?
              </h2>

              <p className="mb-4 text-gray-700">
                While every pregnancy benefits from regular monitoring, some
                women need closer follow-up:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Women with diabetes, thyroid disorders, or hypertension.
                </li>
                <li>
                  Women with a history of miscarriage or pregnancy loss.
                </li>
                <li>
                  Women carrying twins or multiple pregnancies.
                </li>
                <li>
                  Women with a previous C-section or complicated delivery.
                </li>
                <li>Women above 35 years of age.</li>
                <li>
                  Women who conceived through IVF or fertility treatment.
                </li>
                <li>
                  Women experiencing bleeding, pain, or reduced fetal movement.
                </li>
                <li>
                  Women with low-lying placenta or other placental concerns.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Advanced Facilities Available for Pregnancy Checkups
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is equipped with modern technology to support
                thorough pregnancy monitoring:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Voluson E22BT2024:</strong> advanced 3D/4D ultrasound
                  machine for accurate imaging.
                </li>
                <li>
                  AI-based imaging support to improve detection of
                  abnormalities.
                </li>
                <li>
                  Doppler ultrasound facility for high-risk pregnancy monitoring.
                </li>
                <li>
                  On-site blood and urine testing coordination for faster
                  results.
                </li>
                <li>
                  Digital record-keeping, making it easy to track progress
                  across visits.
                </li>
                <li>
                  Comfortable consultation and scanning rooms for a stress-free
                  experience.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Pregnancy Checkups Near You
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medalist gynaecologist with international fellowship
                  training in maternal health.
                </li>
                <li>
                  Expertise in both normal and high-risk pregnancy management.
                </li>
                <li>
                  Access to advanced 3D/4D ultrasound and AI-based imaging.
                </li>
                <li>
                  Patient-first approach — every visit is unhurried, with time
                  for questions and concerns.
                </li>
                <li>
                  Continuity of care, with the same doctor following your
                  pregnancy from the first visit to delivery.
                </li>
                <li>
                  Strong reputation built on genuine patient trust and
                  referrals.
                </li>
                <li>
                  Conveniently located clinic in Gandhi Nagar, Moradabad.
                </li>
                <li>
                  Easy appointment booking via call or WhatsApp.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Prepare for Your Pregnancy Checkup
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Carry previous reports and scan results for continuity of
                  care.
                </li>
                <li>
                  Note down your symptoms or concerns before the visit.
                </li>
                <li>
                  Track fetal movements in the third trimester and report any
                  changes.
                </li>
                <li>
                  Wear comfortable clothing for easy examination.
                </li>
                <li>
                  Avoid heavy meals right before certain tests, if advised.
                </li>
                <li>
                  Bring your partner or family member, especially for major
                  scans.
                </li>
                <li>
                  Prepare a list of questions about diet, exercise, or delivery
                  planning.
                </li>
                <li>
                  Follow the recommended checkup schedule rather than skipping
                  visits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That Need an Immediate Checkup
              </h2>

              <p className="mb-4 text-gray-700">
                Apart from scheduled visits, contact your doctor immediately if
                you notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Vaginal bleeding or spotting at any stage.
                </li>
                <li>Severe abdominal or pelvic pain.</li>
                <li>Reduced or absent fetal movements.</li>
                <li>Leaking of fluid before the due date.</li>
                <li>
                  Persistent headache with blurred vision or swelling (possible
                  pre-eclampsia signs).
                </li>
                <li>High fever.</li>
                <li>Dizziness or fainting.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you experience any of these symptoms, call{" "}
                <a
                  href="tel:+919079765578"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  +91 90797 65578
                </a>{" "}
                immediately rather than waiting for the next scheduled visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Pregnancy Checkups – Busted
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Checkups are only needed if
                  something feels wrong.&quot; <strong>Fact:</strong> Regular
                  checkups catch complications early, even before symptoms
                  appear.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;One doctor visit per trimester is
                  enough.&quot; <strong>Fact:</strong> Frequency increases as
                  pregnancy progresses, especially in the third trimester.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Blood tests are unnecessary if
                  you feel fine.&quot; <strong>Fact:</strong> Many conditions
                  like gestational diabetes or anemia are silent without
                  testing.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;High-risk pregnancies always need
                  hospital admission.&quot; <strong>Fact:</strong> Many
                  high-risk pregnancies are managed successfully with closer
                  outpatient monitoring.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;First-time mothers need more
                  checkups than experienced mothers.&quot; <strong>Fact:</strong>{" "}
                  Checkup frequency depends on individual health factors, not
                  just parity.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes a Good Pregnancy Checkup Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                When searching for a &quot;doctor for pregnancy checkup near
                me,&quot; these qualities matter most in choosing the right
                clinic:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  On-site ultrasound and testing facilities, reducing the need
                  to travel between labs and clinic.
                </li>
                <li>
                  Experienced doctor for both normal and high-risk pregnancies.
                </li>
                <li>
                  Consistent doctor continuity rather than seeing a different
                  doctor every visit.
                </li>
                <li>
                  Clear communication about test results and next steps.
                </li>
                <li>
                  Comfortable, private examination environment.
                </li>
                <li>
                  Easy appointment scheduling, including quick responses for
                  urgent concerns.
                </li>
                <li>
                  Positive patient reviews reflecting reliable, compassionate
                  care.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Dr. Priyanka Gynaec offers all of these, making it a dependable
                choice for pregnancy checkups in and around Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Choosing the Same Doctor Throughout Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Complete medical history is known and tracked from the very
                  first visit.
                </li>
                <li>
                  Faster identification of changes in health patterns across
                  checkups.
                </li>
                <li>
                  Personalized care plan built around your specific pregnancy
                  needs.
                </li>
                <li>
                  Reduced anxiety, since you build trust and familiarity with
                  one doctor.
                </li>
                <li>
                  Better coordination between checkups, scans, and delivery
                  planning.
                </li>
                <li>
                  Consistent record-keeping, useful for the delivering hospital
                  and paediatrician.
                </li>
                <li>
                  Quicker decision-making if any complication needs urgent
                  attention.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Nutrition and Lifestyle Guidance Given During Checkups
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy checkups are also an opportunity to receive
                personalized lifestyle advice, including:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Balanced diet recommendations rich in iron, calcium, and folic
                  acid.
                </li>
                <li>
                  Safe exercise guidance appropriate for each trimester.
                </li>
                <li>
                  Weight gain monitoring to ensure healthy progress.
                </li>
                <li>
                  Sleep and rest recommendations, especially in the later
                  trimesters.
                </li>
                <li>
                  Guidance on managing common symptoms like nausea, back pain,
                  or swelling.
                </li>
                <li>
                  Advice on avoiding harmful substances, including smoking,
                  alcohol, and certain medications.
                </li>
                <li>
                  Preparation tips for breastfeeding and postpartum recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postpartum Checkup: Completing the Pregnancy Care Journey
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy checkups don&apos;t end at delivery. A postpartum
                visit is equally important:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Usually scheduled 4–6 weeks after delivery.
                </li>
                <li>
                  Checks physical recovery, including healing after normal
                  delivery or C-section.
                </li>
                <li>
                  Reviews breastfeeding progress and addresses any difficulties.
                </li>
                <li>
                  Screens for postpartum mood changes, offering support if
                  needed.
                </li>
                <li>
                  Discusses contraception options for future family planning.
                </li>
                <li>
                  Provides guidance on resuming normal activities and exercise.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Including a postpartum checkup ensures complete, continuous care
                from pregnancy confirmation through recovery after delivery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Pregnancy Checkups Help Plan a Safe Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tracks baby&apos;s position in the final weeks, helping decide
                  between normal delivery and C-section.
                </li>
                <li>
                  Monitors amniotic fluid levels, important for planning the
                  timing of delivery.
                </li>
                <li>
                  Identifies any last-minute risk factors that may require
                  hospital-based delivery planning.
                </li>
                <li>
                  Prepares the mother mentally and physically through guidance
                  on labour signs and hospital readiness.
                </li>
                <li>
                  Ensures a smooth handover of complete medical records to the
                  delivery team.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Consistent checkups throughout pregnancy, paired with an
                experienced doctor&apos;s guidance, significantly reduce the
                chances of last-minute complications during labour and delivery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Gynaec – Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For complete pregnancy checkups and antenatal care, reach out
                directly:
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
                FAQs on Doctor for Pregnancy Checkup Near Me
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
