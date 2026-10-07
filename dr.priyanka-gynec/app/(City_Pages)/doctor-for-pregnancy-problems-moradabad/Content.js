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

export default function DoctorForPregnancyProblemsMoradabad() {
  const faqs = [
    {
      q: "Who is the best doctor for pregnancy problems in Moradabad?",
      a: "Dr. Priyanka Pachauri is a trusted and experienced gynaecologist in Moradabad for normal and high-risk pregnancy care.",
    },
    {
      q: "What are the warning signs of pregnancy complications?",
      a: "Heavy bleeding, severe pain, reduced foetal movement, and swelling with high blood pressure are key warning signs.",
    },
    {
      q: "Can a high-risk pregnancy still result in normal delivery?",
      a: "Yes, with proper monitoring and care, many high-risk pregnancies can still have a safe normal delivery.",
    },
    {
      q: "What causes gestational diabetes during pregnancy?",
      a: "Hormonal changes during pregnancy can affect insulin function, leading to gestational diabetes in some women.",
    },
    {
      q: "When should I report reduced baby movement?",
      a: "Any noticeable decrease in foetal movement should be reported to your doctor immediately, especially in the third trimester.",
    },
    {
      q: "Is spotting during pregnancy always serious?",
      a: "Not always, but any bleeding during pregnancy should be checked promptly by a doctor.",
    },
    {
      q: "How often should I have antenatal check-ups?",
      a: "Frequency increases with each trimester and is higher for high-risk pregnancies; your doctor will guide the schedule.",
    },
    {
      q: "Does the clinic manage high-risk pregnancies?",
      a: "Yes, Dr. Priyanka Pachauri has extensive experience managing high-risk pregnancy cases with advanced monitoring.",
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
                Doctor for Pregnancy Problems in Moradabad – Complete Guide by
                Dr. Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy is one of the most beautiful yet delicate phases in a
                woman&apos;s life, and even minor complications can cause
                significant worry for expecting mothers and their families. If
                you are searching for a doctor for pregnancy problems in
                Moradabad, it usually means you&apos;re facing symptoms that
                need reassurance, monitoring, or timely medical intervention.
                This guide explains common pregnancy complications, warning
                signs to watch for, and why experienced care from a specialist
                like Dr. Priyanka Pachauri matters at every stage of pregnancy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Timely Pregnancy Care Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Every pregnancy is unique, and problems can arise at any stage —
                from the first missed period to the final weeks before delivery.
                Early detection and proper management significantly reduce risks
                for both mother and baby.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular check-ups help catch complications before they become
                  serious.
                </li>
                <li>
                  Timely intervention can prevent conditions from progressing to
                  emergencies.
                </li>
                <li>
                  Continuous monitoring supports healthy foetal growth and
                  development.
                </li>
                <li>
                  Early guidance helps manage pre-existing conditions like
                  diabetes or hypertension safely.
                </li>
                <li>
                  A trusted doctor-patient relationship reduces anxiety
                  throughout the pregnancy journey.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Pregnancy Problems Women Face
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy complications can occur during any trimester and range
                from mild to serious. Understanding them helps you know when to
                seek help.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First trimester concerns:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Severe morning sickness (hyperemesis gravidarum).
                </li>
                <li>Spotting or bleeding in early pregnancy.</li>
                <li>Threatened miscarriage.</li>
                <li>
                  Ectopic pregnancy (a medical emergency).
                </li>
                <li>Extreme fatigue or dizziness.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second trimester concerns:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gestational diabetes.</li>
                <li>High blood pressure or pre-eclampsia symptoms.</li>
                <li>Low-lying placenta (placenta previa).</li>
                <li>Reduced or abnormal foetal movement.</li>
                <li>Anaemia due to iron deficiency.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third trimester concerns:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pre-term labour signs before 37 weeks.</li>
                <li>Reduced foetal movement.</li>
                <li>
                  Swelling in hands, feet, or face (possible pre-eclampsia).
                </li>
                <li>Excessive or reduced amniotic fluid levels.</li>
                <li>Breech or abnormal baby positioning.</li>
                <li>Water breaking before labour begins.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Conditions requiring high-risk pregnancy care:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Advanced maternal age (35+ years).</li>
                <li>Multiple pregnancies (twins or more).</li>
                <li>History of miscarriage or pregnancy loss.</li>
                <li>
                  Pre-existing diabetes, thyroid, or heart conditions.
                </li>
                <li>Previous caesarean delivery.</li>
                <li>PCOS or fertility treatment-assisted pregnancy.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs During Pregnancy That Need Immediate Attention
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy vaginal bleeding at any stage of pregnancy.
                </li>
                <li>Severe abdominal or pelvic pain.</li>
                <li>
                  Sudden, severe headache with blurred vision.
                </li>
                <li>
                  Swelling in the face, hands, or feet along with high blood
                  pressure.
                </li>
                <li>
                  Reduced or no foetal movement compared to usual pattern.
                </li>
                <li>
                  Fluid leaking or gushing from the vagina before due date.
                </li>
                <li>
                  Persistent vomiting preventing fluid or food intake.
                </li>
                <li>High fever during pregnancy.</li>
                <li>
                  Contractions occurring regularly before 37 weeks.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you notice any of these symptoms, it&apos;s essential to
                consult a gynaecologist for pregnancy complications immediately
                rather than waiting for your next scheduled visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Manages Pregnancy Problems
              </h2>

              <p className="mb-4 text-gray-700">
                A structured, technology-supported approach ensures both mother
                and baby are monitored closely throughout the pregnancy journey.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed medical history and risk assessment at the first
                  visit.
                </li>
                <li>
                  Regular antenatal check-ups as per trimester-specific
                  schedules.
                </li>
                <li>
                  Advanced 3D/4D ultrasound scans to monitor foetal growth and
                  development.
                </li>
                <li>
                  Blood tests to screen for anaemia, gestational diabetes, and
                  infections.
                </li>
                <li>
                  Blood pressure monitoring to detect early signs of
                  pre-eclampsia.
                </li>
                <li>
                  NST (Non-Stress Test) and Doppler studies for high-risk
                  pregnancies.
                </li>
                <li>
                  Coordinated care with other specialists when pre-existing
                  conditions are involved.
                </li>
                <li>
                  Personalized birth planning based on individual risk factors.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri – Trusted Doctor for Pregnancy
                Problems in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly regarded gynaecologist in
                Moradabad, known for her expertise in managing both normal and
                high-risk pregnancies with a compassionate, safety-first
                approach.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials and international fellowship training.
                </li>
                <li>
                  Extensive experience managing high-risk pregnancies and
                  complications.
                </li>
                <li>
                  Access to advanced diagnostic technology, including 3D/4D
                  ultrasound machines.
                </li>
                <li>
                  Strong track record supporting safe normal deliveries whenever
                  medically possible.
                </li>
                <li>
                  Known for clear communication and reassurance throughout
                  pregnancy.
                </li>
                <li>
                  Continuity of care from the first antenatal visit through
                  delivery and postnatal follow-up.
                </li>
                <li>
                  Trusted by families across Moradabad for safe-motherhood
                  focused care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services Offered for Pregnancy Care and Complications
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Antenatal Services with structured trimester-wise screening.
                </li>
                <li>
                  High-risk pregnancy monitoring and management.
                </li>
                <li>
                  Pregnancy & Birthing Care with personalized birth plans.
                </li>
                <li>
                  Normal Delivery support prioritizing natural birth when safe.
                </li>
                <li>
                  Management of gestational diabetes and hypertension during
                  pregnancy.
                </li>
                <li>
                  Foetal growth monitoring through advanced ultrasound imaging.
                </li>
                <li>
                  Postnatal care and follow-up for mother and newborn.
                </li>
                <li>
                  Paediatric care coordination for newborn health needs.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Pregnancy Care?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Specialized expertise in identifying and managing pregnancy
                  complications early.
                </li>
                <li>
                  Advanced imaging technology for accurate foetal monitoring.
                </li>
                <li>
                  A dedicated team that maintains continuity of care throughout
                  your pregnancy.
                </li>
                <li>
                  Personalized attention rather than a one-size-fits-all
                  approach.
                </li>
                <li>
                  Strong focus on safe, natural delivery while being fully
                  prepared for emergencies.
                </li>
                <li>
                  Comfortable, supportive environment reducing anxiety for
                  expecting mothers.
                </li>
                <li>
                  Positive outcomes reflected consistently in patient
                  testimonials.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Pregnancy Problems
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Spotting during pregnancy always means
                  miscarriage. <strong>Fact:</strong> Light spotting can occur
                  for several harmless reasons, but it should always be checked.
                </li>
                <li>
                  <strong>Myth:</strong> High-risk pregnancy always means a
                  caesarean delivery. <strong>Fact:</strong> Many high-risk
                  pregnancies can still result in safe normal delivery with
                  proper monitoring.
                </li>
                <li>
                  <strong>Myth:</strong> Morning sickness only happens in the
                  morning. <strong>Fact:</strong> Nausea can occur at any time
                  of day and, in severe cases, needs medical management.
                </li>
                <li>
                  <strong>Myth:</strong> Reduced baby movement is normal in
                  later pregnancy. <strong>Fact:</strong> Any noticeable
                  reduction in foetal movement should be reported to your doctor
                  immediately.
                </li>
                <li>
                  <strong>Myth:</strong> Gestational diabetes only affects
                  overweight women. <strong>Fact:</strong> It can occur in women
                  of any body type due to hormonal changes during pregnancy.
                </li>
                <li>
                  <strong>Myth:</strong> Once a complication is managed, no
                  further monitoring is needed. <strong>Fact:</strong> Continued
                  monitoring throughout pregnancy is essential even after
                  initial stabilization.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Tips for a Healthier Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                While medical supervision is essential for managing
                complications, certain everyday habits support a smoother
                pregnancy overall.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Attend all scheduled antenatal check-ups without skipping
                  appointments.
                </li>
                <li>
                  Maintain a balanced diet rich in iron, calcium, folic acid,
                  and protein.
                </li>
                <li>Stay adequately hydrated throughout the day.</li>
                <li>
                  Get adequate rest and avoid overexertion, especially in
                  high-risk pregnancies.
                </li>
                <li>
                  Monitor foetal movements daily during the third trimester.
                </li>
                <li>
                  Avoid smoking, alcohol, and unprescribed medications
                  completely.
                </li>
                <li>
                  Manage stress through light walks, prenatal yoga, or
                  relaxation techniques (as approved by your doctor).
                </li>
                <li>
                  Keep track of blood pressure and blood sugar levels if
                  advised.
                </li>
                <li>
                  Report any unusual symptoms immediately rather than waiting
                  for the next visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A calm, supportive, and reassuring consultation environment.
                </li>
                <li>
                  Detailed discussion of your pregnancy history and current
                  symptoms.
                </li>
                <li>
                  Clear explanation of test results and what they mean for you
                  and your baby.
                </li>
                <li>
                  A personalized care plan based on your specific risk factors.
                </li>
                <li>
                  Guidance on diet, activity levels, and warning signs to watch
                  for.
                </li>
                <li>
                  Coordinated referrals to other specialists if additional care
                  is needed.
                </li>
                <li>
                  Ongoing follow-up support throughout each trimester.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Care at Different Stages
              </h2>

              <p className="mb-4 text-gray-700">
                Each trimester comes with its own focus areas, and a specialist
                adjusts monitoring accordingly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>First trimester:</strong> Confirming pregnancy, dating
                  scan, screening for early complications, and managing morning
                  sickness.
                </li>
                <li>
                  <strong>Second trimester:</strong> Detailed anomaly scan,
                  gestational diabetes screening, and monitoring foetal growth.
                </li>
                <li>
                  <strong>Third trimester:</strong> Frequent check-ups, growth
                  scans, positioning checks, and birth plan preparation.
                </li>
                <li>
                  <strong>High-risk cases:</strong> More frequent monitoring,
                  specialist coordination, and close tracking of blood pressure,
                  sugar levels, and foetal wellbeing.
                </li>
                <li>
                  <strong>Postnatal stage:</strong> Recovery monitoring,
                  breastfeeding support, and newborn care guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing During a Complicated Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy complications don&apos;t just affect the body — they
                can also take a toll on mental and emotional health. Addressing
                this is an important part of complete pregnancy care.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Open communication with your doctor helps reduce anxiety around
                  test results and symptoms.
                </li>
                <li>
                  Joining a support system of family or other expecting mothers
                  can ease emotional stress.
                </li>
                <li>
                  Practicing mindfulness or gentle breathing exercises can help
                  manage worry between visits.
                </li>
                <li>
                  Asking questions during consultations helps you feel more in
                  control of your care.
                </li>
                <li>
                  Recognizing that seeking frequent reassurance is normal, not
                  excessive, during a high-risk pregnancy.
                </li>
                <li>
                  Discussing any anxiety or low mood with your doctor, as
                  untreated stress can affect overall pregnancy health.
                </li>
                <li>
                  Involving your partner or family in appointments for added
                  support and shared understanding.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Role of Nutrition in Preventing Pregnancy Complications
              </h2>

              <p className="mb-4 text-gray-700">
                Proper nutrition throughout pregnancy plays a significant role in
                reducing the risk of certain complications and supporting healthy
                foetal development.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Include folic acid-rich foods and supplements, especially in
                  early pregnancy, to support neural development.
                </li>
                <li>
                  Eat iron-rich foods like leafy greens and lentils to prevent
                  pregnancy-related anaemia.
                </li>
                <li>
                  Include calcium and vitamin D sources for bone health of both
                  mother and baby.
                </li>
                <li>
                  Maintain balanced blood sugar levels through controlled
                  carbohydrate intake, especially if diagnosed with gestational
                  diabetes.
                </li>
                <li>
                  Stay hydrated and include adequate fibre to prevent
                  constipation, a common pregnancy discomfort.
                </li>
                <li>
                  Avoid raw or undercooked foods, unpasteurized dairy, and
                  excessive caffeine.
                </li>
                <li>
                  Follow personalized dietary advice from your doctor based on
                  any existing conditions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Appointment with Dr. Priyanka Pachauri, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you are experiencing pregnancy complications or simply want
                expert, reassuring care throughout your pregnancy, Dr. Priyanka
                Pachauri&apos;s clinic in Moradabad is ready to support you at
                every step.
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
                Pregnancy problems, whether mild or high-risk, are best managed
                with timely diagnosis and consistent, expert monitoring. Ignoring
                warning signs or delaying a visit can increase risks for both
                mother and baby. Choosing an experienced doctor for pregnancy
                problems in Moradabad like Dr. Priyanka Pachauri ensures you
                receive attentive, technology-supported, and compassionate care
                throughout your pregnancy journey — from the first trimester to a
                safe delivery.
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
