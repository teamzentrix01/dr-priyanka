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

export default function DoctorForPregnancyScanMoradabad() {
  const faqs = [
    {
      q: "Who is the best doctor for pregnancy scan in Moradabad?",
      a: "Dr. Priyanka Pachauri is a highly recommended gynaecologist in Moradabad for accurate pregnancy ultrasound scans.",
    },
    {
      q: "When should I get my first pregnancy scan?",
      a: "The first dating scan is usually done between 6–9 weeks of pregnancy.",
    },
    {
      q: "What is checked in the anomaly scan?",
      a: "It checks the baby's brain, heart, spine, and organs in detail, usually at 18–22 weeks.",
    },
    {
      q: "Is 3D/4D scan safe during pregnancy?",
      a: "Yes, ultrasound scans, including 3D/4D, are safe when done by qualified professionals.",
    },
    {
      q: "How many scans are needed during a normal pregnancy?",
      a: "Typically 3–4 scans are recommended across all three trimesters.",
    },
    {
      q: "Can I know the baby's growth through scans?",
      a: "Yes, growth scans in the third trimester track the baby's weight and development.",
    },
    {
      q: "Does Dr. Priyanka Gynaec handle high-risk pregnancy scans?",
      a: "Yes, Doppler and growth scans are available for high-risk pregnancy monitoring.",
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
                Doctor for Pregnancy Scan in Moradabad – Dr. Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy is one of the most precious journeys in a
                woman&apos;s life, and regular ultrasound scans play a vital
                role in ensuring both mother and baby stay healthy at every
                stage. Choosing the right doctor for pregnancy scan in Moradabad
                is not just about getting an image of the baby — it&apos;s about
                accurate screening, early detection of complications, and expert
                guidance throughout the nine months.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, a leading gynaecologist in Moradabad,
                offers advanced 3D/4D ultrasound imaging combined with
                personalised antenatal care, making her one of the most trusted
                names for pregnancy scans in the region.
              </p>

              <p className="mb-4 text-gray-700">
                This detailed guide explains everything about pregnancy scans —
                types, timing, importance, what to expect, and why Dr. Priyanka
                Gynaec is a preferred choice for expecting mothers in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Pregnancy Scans Are Important
              </h2>

              <p className="mb-4 text-gray-700">
                Ultrasound scans during pregnancy are not just routine
                formalities — they provide critical medical information at every
                stage.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Confirms pregnancy location and rules out ectopic pregnancy.
                </li>
                <li>
                  Detects fetal heartbeat and confirms viability.
                </li>
                <li>
                  Estimates gestational age and expected delivery date.
                </li>
                <li>
                  Screens for birth defects and chromosomal abnormalities.
                </li>
                <li>
                  Monitors fetal growth and development.
                </li>
                <li>
                  Checks placenta position (important to detect placenta previa).
                </li>
                <li>Measures amniotic fluid levels.</li>
                <li>Detects multiple pregnancies (twins/triplets).</li>
                <li>
                  Identifies complications early, allowing timely intervention.
                </li>
                <li>
                  Provides reassurance to expecting parents at every milestone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Pregnancy Scans Offered
              </h2>

              <p className="mb-4 text-gray-700">
                Different scans are recommended at different stages of
                pregnancy. Dr. Priyanka Gynaec offers a complete range:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Dating Scan (6–9 weeks):</strong> Confirms pregnancy,
                  location, and due date.
                </li>
                <li>
                  <strong>NT Scan / Nuchal Translucency Scan (11–14 weeks):</strong>{" "}
                  Screens for chromosomal conditions like Down syndrome.
                </li>
                <li>
                  <strong>Anomaly Scan / Level II Scan (18–22 weeks):</strong>{" "}
                  Detailed check of baby&apos;s organs, brain, heart, and spine.
                </li>
                <li>
                  <strong>Growth Scan (28–32 weeks):</strong> Monitors
                  baby&apos;s growth, weight, and amniotic fluid.
                </li>
                <li>
                  <strong>Doppler Scan:</strong> Checks blood flow in the
                  umbilical cord and baby&apos;s brain, especially in high-risk
                  pregnancies.
                </li>
                <li>
                  <strong>3D/4D Scan:</strong> Provides real-time, lifelike
                  images and moving visuals of the baby.
                </li>
                <li>
                  <strong>Full-term Scan (36+ weeks):</strong> Confirms
                  baby&apos;s position, fluid levels, and readiness for
                  delivery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Scan Schedule – Trimester-Wise Guide
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester (up to 12 weeks):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirm pregnancy and heartbeat.</li>
                <li>Dating scan for accurate due date.</li>
                <li>NT scan for early risk screening.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester (13–27 weeks):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Anomaly scan for detailed organ check.</li>
                <li>Placenta position assessment.</li>
                <li>
                  Gender determination (as per legal and medical guidelines).
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester (28 weeks to delivery):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Growth monitoring scans.</li>
                <li>
                  Doppler studies if growth restriction is suspected.
                </li>
                <li>Position and fluid check before delivery.</li>
                <li>Final scan to plan for safe delivery.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Advanced Technology Used for Pregnancy Scans
              </h2>

              <p className="mb-4 text-gray-700">
                Accurate scanning depends heavily on the quality of equipment
                used. Dr. Priyanka Gynaec is equipped with:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Voluson E22BT2024:</strong> a high-end 3D & 4D
                  ultrasound machine for precise imaging.
                </li>
                <li>
                  AI-based imaging support for enhanced accuracy in detecting
                  abnormalities.
                </li>
                <li>
                  High-resolution Doppler studies for blood flow assessment in
                  high-risk cases.
                </li>
                <li>
                  Digital reporting, allowing quick sharing of scan results with
                  patients.
                </li>
                <li>
                  Comfortable, private scanning rooms designed for a stress-free
                  experience.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Get Regular Pregnancy Scans?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>All pregnant women, as part of standard antenatal care.</li>
                <li>
                  Women with a history of miscarriage or pregnancy loss.
                </li>
                <li>
                  Women with diabetes, thyroid, or hypertension.
                </li>
                <li>Women carrying twins or multiple pregnancies.</li>
                <li>
                  Women with previous C-section or complicated delivery.
                </li>
                <li>
                  Women above 35 years of age (advanced maternal age).
                </li>
                <li>
                  Women experiencing bleeding, pain, or reduced fetal movement.
                </li>
                <li>
                  Women undergoing IVF or fertility-assisted pregnancy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a Pregnancy Scan Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A brief consultation with the doctor before the scan.
                </li>
                <li>
                  Comfortable positioning on the examination table.
                </li>
                <li>
                  Application of gel for clear ultrasound transmission.
                </li>
                <li>
                  Real-time viewing of the baby on screen during the scan.
                </li>
                <li>
                  Explanation of findings by the doctor immediately after.
                </li>
                <li>
                  Printed/digital report provided for your records.
                </li>
                <li>
                  Guidance on next steps or follow-up scans, if required.
                </li>
                <li>
                  Answers to any questions or concerns you may have.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Concerns Addressed During Pregnancy Scans
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Is the baby growing normally?</strong> Growth scans
                  track weight and development against standard charts.
                </li>
                <li>
                  <strong>Is the placenta in a safe position?</strong> Checked
                  in every second and third trimester scan.
                </li>
                <li>
                  <strong>Is there enough amniotic fluid?</strong> Measured to
                  rule out oligohydramnios or polyhydramnios.
                </li>
                <li>
                  <strong>Are there any structural abnormalities?</strong> Anomaly
                  scan checks organs, limbs, brain, and spine in detail.
                </li>
                <li>
                  <strong>Is the pregnancy progressing safely for high-risk
                  mothers?</strong> Doppler and growth scans monitor closely.
                </li>
                <li>
                  <strong>When is the expected delivery date?</strong> Most
                  accurately estimated through an early dating scan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Pregnancy Scans in
                Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medalist gynaecologist with international fellowship
                  training in maternal health.
                </li>
                <li>
                  Expertise in high-risk pregnancy monitoring alongside routine
                  antenatal scans.
                </li>
                <li>
                  Access to cutting-edge 3D/4D ultrasound and AI-based imaging.
                </li>
                <li>
                  A patient-first philosophy — every scan is explained clearly,
                  without medical jargon.
                </li>
                <li>
                  Continuity of care — the same doctor and team follow your
                  pregnancy from the first scan to delivery.
                </li>
                <li>
                  Strong reputation built on genuine patient trust, reflected in
                  testimonials and referrals.
                </li>
                <li>
                  Conveniently located clinic in Gandhi Nagar, Moradabad.
                </li>
                <li>
                  Quick appointment booking via phone call or WhatsApp.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Smooth Pregnancy Scan Experience
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Drink water before early scans, as a full bladder improves
                  image clarity.
                </li>
                <li>
                  Wear comfortable, loose clothing for easy access to the
                  abdomen.
                </li>
                <li>
                  Carry previous scan reports for comparison and continuity.
                </li>
                <li>
                  Note down questions in advance to discuss with the doctor.
                </li>
                <li>
                  Avoid heavy meals right before certain scans, if advised.
                </li>
                <li>
                  Bring your partner or family member, especially for milestone
                  scans like the anomaly scan.
                </li>
                <li>
                  Follow the recommended scan schedule rather than skipping
                  appointments.
                </li>
                <li>
                  Discuss any symptoms like reduced fetal movement or pain
                  before the scan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Regular Scans Matter for a Safe Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Helps in early detection of complications such as growth
                  restriction or low fluid levels.
                </li>
                <li>
                  Assists in planning the mode of delivery (normal vs C-section)
                  based on baby&apos;s position.
                </li>
                <li>
                  Reduces risk of unexpected complications during labour.
                </li>
                <li>
                  Provides peace of mind to expecting parents throughout the
                  pregnancy.
                </li>
                <li>
                  Supports timely referral for specialist care if any high-risk
                  condition is detected.
                </li>
                <li>
                  Builds a complete pregnancy record, useful for the delivering
                  hospital and paediatrician.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That Need an Urgent Pregnancy Scan
              </h2>

              <p className="mb-4 text-gray-700">
                Apart from the routine schedule, some symptoms call for an
                immediate, unscheduled scan:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sudden vaginal bleeding or spotting at any stage of pregnancy.
                </li>
                <li>Severe abdominal or pelvic pain.</li>
                <li>
                  Reduced or absent fetal movements, especially after 28 weeks.
                </li>
                <li>
                  Leaking of fluid before the due date (possible water breaking).
                </li>
                <li>High fever during pregnancy.</li>
                <li>
                  Sudden swelling of hands, face, or feet with headache
                  (possible pre-eclampsia sign).
                </li>
                <li>Dizziness or fainting spells.</li>
                <li>
                  History of previous pregnancy loss, warranting closer
                  monitoring.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you notice any of these signs, contact the clinic immediately
                at{" "}
                <a
                  href="tel:+919079765578"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  +91 90797 65578
                </a>{" "}
                rather than waiting for the next scheduled visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Pregnancy Scans – Busted
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Too many scans are harmful for
                  the baby.&quot; <strong>Fact:</strong> Standard scans done at
                  recommended intervals by a qualified doctor are safe.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;3D/4D scans are only for
                  pictures, not medical use.&quot; <strong>Fact:</strong> They
                  also help assess facial structure and certain physical
                  abnormalities.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;One scan in the whole pregnancy
                  is enough.&quot; <strong>Fact:</strong> Different scans at
                  different stages check different aspects of the baby&apos;s
                  health.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Scans can predict delivery date
                  with 100% accuracy.&quot; <strong>Fact:</strong> Early dating
                  scans give a close estimate, but the exact date can vary.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;All ultrasound clinics offer the
                  same accuracy.&quot; <strong>Fact:</strong> Machine quality and
                  doctor&apos;s expertise significantly affect scan accuracy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cost Factors to Consider for Pregnancy Scans
              </h2>

              <p className="mb-4 text-gray-700">
                While exact pricing should always be confirmed directly with the
                clinic, these factors typically influence the cost of a
                pregnancy scan:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Type of scan (dating scan vs anomaly scan vs 3D/4D scan).
                </li>
                <li>
                  Stage of pregnancy and complexity of assessment required.
                </li>
                <li>
                  Additional tests, such as Doppler studies for high-risk cases.
                </li>
                <li>
                  Equipment quality, with advanced machines like Voluson
                  E22BT2024 offering higher accuracy.
                </li>
                <li>
                  Doctor&apos;s expertise and consultation included with the
                  scan.
                </li>
                <li>
                  Follow-up scans needed for monitoring specific conditions.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                For an accurate quote based on your pregnancy stage, it&apos;s
                best to call or WhatsApp the clinic directly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Choosing an Experienced Gynaecologist for Your
                Pregnancy Scans
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Accurate interpretation of scan images, reducing chances of
                  missed abnormalities.
                </li>
                <li>
                  Personalized risk assessment based on your medical history,
                  not just the scan alone.
                </li>
                <li>
                  Seamless coordination between scan findings and your ongoing
                  antenatal care plan.
                </li>
                <li>
                  Faster decision-making if a complication is detected, since
                  the same doctor manages your case.
                </li>
                <li>
                  Reduced anxiety, as an experienced doctor can explain findings
                  clearly and reassuringly.
                </li>
                <li>
                  Better outcomes for high-risk pregnancies through timely,
                  expert-guided monitoring.
                </li>
                <li>
                  One consistent medical record from the first scan to delivery,
                  useful for the hospital team.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Gynaec – Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For accurate pregnancy scans and complete antenatal care, reach
                out directly:
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
                FAQs on Pregnancy Scan Doctor in Moradabad
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
