import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function HighRiskPregnancyMoradabad() {
  const faqs = [
    {
      q: "What makes a pregnancy 'high risk'?",
      a: "A pregnancy becomes high risk when the mother or baby has a higher chance of complications due to factors like maternal age, pre-existing health conditions, or pregnancy-related issues such as preeclampsia.",
    },
    {
      q: "Can a high risk pregnancy still result in a normal, healthy delivery?",
      a: "Yes, with proper monitoring and timely management, most high risk pregnancies result in healthy outcomes for both mother and baby.",
    },
    {
      q: "Is gestational diabetes considered a high risk condition?",
      a: "Yes, gestational diabetes requires close monitoring and management to prevent complications for both mother and baby.",
    },
    {
      q: "At what age is a pregnancy considered high risk due to maternal age?",
      a: "Pregnancies in women above 35 years are generally considered higher risk and monitored more closely.",
    },
    {
      q: "Are twin pregnancies automatically high risk?",
      a: "Yes, multiple pregnancies like twins or triplets are classified as high risk due to increased chances of preterm labor and other complications.",
    },
    {
      q: "What tests are done during a high risk pregnancy?",
      a: "Common tests include frequent ultrasounds, Doppler studies, non-stress tests, blood sugar and blood pressure monitoring, and genetic screening if required.",
    },
    {
      q: "Can preeclampsia be managed without early delivery?",
      a: "Mild preeclampsia can often be managed with medication and monitoring, but severe cases may require early delivery for the safety of mother and baby.",
    },
    {
      q: "How can I book a consultation for high risk pregnancy care in Moradabad?",
      a: "You can call or WhatsApp the clinic directly using the contact details above to schedule a consultation and evaluation.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 order-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                High Risk Pregnancy Treatment in Moradabad – Expert Care by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Every pregnancy deserves careful attention, but some pregnancies require an extra level of monitoring, expertise, and personalized care to ensure the safety of both mother and baby. If you have been told that your pregnancy is &quot;high risk,&quot; it is natural to feel anxious, but with the right medical team, most high risk pregnancies result in healthy outcomes. Dr. Priyanka Gynaec offers specialized high risk pregnancy treatment in Moradabad, combining advanced diagnostic technology with compassionate, round-the-clock guidance to help mothers navigate this journey safely.
              </p>

              <p className="text-gray-700">
                This comprehensive guide explains what a high risk pregnancy means, what factors contribute to it, how it is monitored, and what treatment and care options are available in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Is a High Risk Pregnancy? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a High Risk Pregnancy?
              </h2>

              <p className="text-gray-700 mb-4">
                A high risk pregnancy is one where the mother, the baby, or both face a higher-than-average chance of health complications before, during, or after delivery. Being labeled &quot;high risk&quot; does not mean something will definitely go wrong; rather, it means the pregnancy requires closer monitoring, specialized testing, and sometimes early intervention to prevent complications and ensure a safe outcome.
              </p>

              <p className="text-gray-700">
                High risk pregnancies can be identified early in some cases, based on pre-existing health conditions, while in others, risk factors may develop during the course of the pregnancy itself. Either way, timely identification and expert management significantly improve outcomes for both mother and child.
              </p>
            </div>

            {/* Section 3 — Common Causes and Risk Factors */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding what makes a pregnancy high risk helps expectant mothers and their families know what to expect and why closer monitoring may be recommended.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Maternal Health Conditions
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Pre-existing Diabetes or Gestational Diabetes:</strong> High blood sugar levels can affect both maternal and fetal health if not well controlled.</li>
                <li><strong>High Blood Pressure (Hypertension) or Preeclampsia:</strong> A condition unique to pregnancy that can affect the liver, kidneys, and placenta if untreated.</li>
                <li><strong>Thyroid Disorders:</strong> Both hypothyroidism and hyperthyroidism can impact pregnancy outcomes if not managed properly.</li>
                <li><strong>Heart Disease:</strong> Pre-existing cardiac conditions require specialized monitoring throughout pregnancy.</li>
                <li><strong>Kidney Disease:</strong> Can affect blood pressure regulation and fetal growth.</li>
                <li><strong>Autoimmune Disorders:</strong> Conditions like lupus or antiphospholipid syndrome increase the risk of complications.</li>
                <li><strong>Obesity:</strong> Increases the risk of gestational diabetes, hypertension, and delivery complications.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pregnancy-Related Factors
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Advanced Maternal Age:</strong> Pregnancies in women above 35 years carry a higher risk of chromosomal abnormalities and complications.</li>
                <li><strong>Multiple Pregnancy (Twins or Triplets):</strong> Carrying more than one baby increases the risk of preterm labor and other complications.</li>
                <li><strong>Placenta Previa or Placental Abruption:</strong> Abnormal placental position or premature separation can cause bleeding and require careful management.</li>
                <li><strong>History of Miscarriage or Preterm Birth:</strong> A previous pregnancy loss or early delivery increases the risk in subsequent pregnancies.</li>
                <li><strong>Rh Incompatibility:</strong> When the mother&apos;s and baby&apos;s blood types are incompatible, requiring monitoring and treatment.</li>
                <li><strong>Fetal Growth Restriction:</strong> When the baby is not growing at the expected rate inside the womb.</li>
                <li><strong>Polyhydramnios or Oligohydramnios:</strong> Abnormal levels of amniotic fluid, either too much or too little.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lifestyle-Related Factors
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Smoking, alcohol consumption, or substance use during pregnancy</li>
                <li>Poor nutrition or being significantly underweight</li>
                <li>Chronic, unmanaged stress</li>
              </ul>
            </div>

            {/* Section 4 — Warning Signs That Require Immediate Attention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs That Require Immediate Attention
              </h2>

              <p className="text-gray-700 mb-4">
                Expectant mothers should seek immediate medical attention if they experience:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe or persistent headaches</li>
                <li>Blurred vision or visual disturbances</li>
                <li>Sudden swelling of the face, hands, or feet</li>
                <li>Severe abdominal pain</li>
                <li>Vaginal bleeding or unusual discharge</li>
                <li>Reduced fetal movements</li>
                <li>Persistent vomiting</li>
                <li>High fever</li>
                <li>Sudden leakage of fluid before term</li>
              </ul>

              <p className="text-gray-700">
                Recognizing these warning signs early and reporting them promptly can prevent complications from progressing and allow for timely intervention.
              </p>
            </div>

            {/* Section 5 — How Is a High Risk Pregnancy Diagnosed and Monitored? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is a High Risk Pregnancy Diagnosed and Monitored?
              </h2>

              <p className="text-gray-700 mb-4">
                At Dr. Priyanka Gynaec, high risk pregnancies are managed with a structured, closely monitored care plan tailored to each mother&apos;s specific condition. This typically includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Detailed Medical History Review:</strong> Assessing pre-existing conditions, previous pregnancy outcomes, and family history.</li>
                <li><strong>Frequent Antenatal Visits:</strong> More frequent check-ups compared to a standard pregnancy to track progress closely.</li>
                <li><strong>Advanced 3D/4D Ultrasound Scans:</strong> For detailed assessment of fetal growth, anatomy, and well-being.</li>
                <li><strong>Doppler Studies:</strong> To monitor blood flow to the baby through the umbilical cord and placenta.</li>
                <li><strong>Blood Sugar and Blood Pressure Monitoring:</strong> Regular tracking to manage gestational diabetes or hypertension effectively.</li>
                <li><strong>Non-Stress Tests (NST):</strong> To monitor the baby&apos;s heart rate and well-being, especially in the third trimester.</li>
                <li><strong>Genetic Screening and Testing:</strong> For mothers at risk of chromosomal abnormalities, especially with advanced maternal age.</li>
                <li><strong>Growth Scans:</strong> Periodic scans to ensure the baby is growing appropriately, particularly important in cases of fetal growth restriction or multiple pregnancy.</li>
              </ul>
            </div>

            {/* Section 6 — Treatment and Management Approaches */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment and Management Approaches
              </h2>

              <p className="text-gray-700 mb-4">
                Management of a high risk pregnancy is highly individualized, based on the specific condition involved. Common approaches include:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Medical Management of Underlying Conditions
              </h3>

              <p className="text-gray-700 mb-3">
                For conditions like gestational diabetes, hypertension, or thyroid disorders, careful medication management combined with dietary and lifestyle guidance helps keep the mother and baby safe throughout pregnancy.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Close Fetal Monitoring
              </h3>

              <p className="text-gray-700 mb-3">
                Regular ultrasound scans, Doppler studies, and non-stress tests help track the baby&apos;s growth and well-being, allowing the medical team to detect any concerns early and intervene promptly if needed.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Specialized Care for Multiple Pregnancies
              </h3>

              <p className="text-gray-700 mb-3">
                Twin or triplet pregnancies require more frequent monitoring for preterm labor, growth discrepancies between babies, and other complications specific to multiple gestations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Preeclampsia Management
              </h3>

              <p className="text-gray-700 mb-3">
                For mothers who develop preeclampsia, treatment may include blood pressure medication, close monitoring of liver and kidney function, and in some cases, early delivery if the condition becomes severe.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Planning for Safe Delivery
              </h3>

              <p className="text-gray-700 mb-3">
                Depending on the specific risk factors, the delivery plan may involve a scheduled induction, cesarean delivery, or a carefully monitored vaginal delivery in a well-equipped facility with immediate access to neonatal support if required.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Preconception Counselling
              </h3>

              <p className="text-gray-700">
                For women with known health conditions who are planning a pregnancy, preconception counselling helps optimize health before conception, significantly reducing risks during the pregnancy itself.
              </p>
            </div>

            {/* Section 7 — The Importance of a Multidisciplinary Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Importance of a Multidisciplinary Approach
              </h2>

              <p className="text-gray-700">
                High risk pregnancies often benefit from a team-based approach, where the Gynaecologist works alongside specialists such as endocrinologists, cardiologists, or nephrologists, depending on the mother&apos;s specific health condition. This collaborative approach ensures that every aspect of the mother&apos;s health is addressed, giving both mother and baby the best possible chance of a healthy outcome.
              </p>
            </div>

            {/* Section 8 — Why Choose Dr. Priyanka Gynaec for High Risk Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec for High Risk Pregnancy Care in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Expectant mothers across Moradabad trust Dr. Priyanka Gynaec for high risk pregnancy management because of a genuine, patient-first philosophy combined with advanced medical technology. Key reasons include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Access to advanced 3D/4D ultrasound and Doppler imaging for precise fetal monitoring</li>
                <li>Personalized care plans tailored to each mother&apos;s specific risk factors</li>
                <li>Close, frequent monitoring throughout pregnancy to catch complications early</li>
                <li>A calm, reassuring approach that helps reduce anxiety during a stressful time</li>
                <li>Continuity of care from the first antenatal visit through delivery and postpartum recovery</li>
                <li>A strong reputation built on safe deliveries and positive outcomes for mothers and babies</li>
              </ul>
            </div>

            {/* Section 9 — Life After a High Risk Pregnancy: Postpartum Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Life After a High Risk Pregnancy: Postpartum Care
              </h2>

              <p className="text-gray-700">
                Care does not end at delivery. Mothers who experienced a high risk pregnancy are monitored closely in the postpartum period as well, since conditions like gestational diabetes or hypertension can sometimes persist or require follow-up testing after birth. Guidance is also provided on breastfeeding, recovery, and planning for future pregnancies if applicable.
              </p>
            </div>

            {/* Section 10 — Tips for a Healthier Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips for a Healthier Pregnancy
              </h2>

              <p className="text-gray-700 mb-4">
                While not all risk factors can be controlled, expectant mothers can support a healthier pregnancy by:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Attending all scheduled antenatal appointments without skipping visits</li>
                <li>Following prescribed dietary and medication guidelines closely</li>
                <li>Monitoring blood pressure and blood sugar at home if advised</li>
                <li>Getting adequate rest and avoiding excessive physical strain</li>
                <li>Reporting any unusual symptoms to the doctor immediately rather than waiting</li>
                <li>Avoiding smoking, alcohol, and self-medication during pregnancy</li>
              </ul>
            </div>

            {/* Section 11 — Speciality & Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Speciality &amp; Contact Information
              </h2>

              <p className="text-gray-700 mb-4">
                <strong>Speciality:</strong> Pregnancy &amp; Birthing Care, High Risk Pregnancy Management, Antenatal Services, Gynaecology &amp; Advanced 3D Laparoscopy, Fertility &amp; IVF, Paediatrics
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact &amp; Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:9079765578" className="hover:underline">
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a href="tel:8979670705" className="hover:underline">
                          +91 8979670705 (WhatsApp)
                        </a>
                      </div>

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:contact@drpriyankaGynaec.com"
                          className="hover:underline"
                        >
                          contact@drpriyankaGynaec.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        https://www.gynaecologistmoradabad.com/
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Link href="/contact">
                    <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                      <Phone className="inline mr-2" size={18} />
                      Contact Us
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                      Explore Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 12 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}