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

export default function AntenatalCareMoradabad() {
  const faqs = [
    {
      q: "When should I start antenatal care after confirming pregnancy?",
      a: "Antenatal care should begin as soon as pregnancy is confirmed, ideally within the first few weeks, to establish a due date and begin essential care.",
    },
    {
      q: "How often should I have antenatal check-ups?",
      a: "Visits are typically monthly in early pregnancy, every two weeks in the third trimester, and weekly as the due date approaches, depending on individual risk factors.",
    },
    {
      q: "What tests are done during the first antenatal visit?",
      a: "The first visit usually includes blood tests, blood pressure check, weight assessment, and an early ultrasound to confirm the pregnancy.",
    },
    {
      q: "Is the anomaly scan necessary during pregnancy?",
      a: "Yes, the anomaly scan around 18–20 weeks is important to assess the baby's organ development and detect any structural concerns early.",
    },
    {
      q: "What supplements are recommended during pregnancy?",
      a: "Folic acid and iron are commonly recommended, along with calcium and other vitamins based on individual nutritional needs.",
    },
    {
      q: "Can antenatal care help prevent pregnancy complications?",
      a: "Yes, regular antenatal care allows early detection and management of conditions like gestational diabetes and hypertension, reducing the risk of complications.",
    },
    {
      q: "Is exercise safe during pregnancy?",
      a: "Light, doctor-approved exercises like walking are generally safe and beneficial during a healthy pregnancy.",
    },
    {
      q: "How can I book a consultation for antenatal care in Moradabad?",
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
                Antenatal Care Treatment in Moradabad – Expert Pregnancy Guidance by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Pregnancy is a journey filled with excitement, anticipation, and, for many women, a fair amount of uncertainty. Regular antenatal care is the foundation of a safe and healthy pregnancy, helping detect potential complications early and ensuring that both mother and baby receive the attention they need at every stage. Dr. Priyanka Gynaec offers comprehensive antenatal care treatment in Moradabad, combining structured check-ups, advanced diagnostic technology, and personalized guidance to support expectant mothers from the first trimester through delivery.
              </p>

              <p className="text-gray-700">
                This detailed guide explains what antenatal care involves, why it is important, what to expect at each stage of pregnancy, and how expert care in Moradabad can make a real difference in your pregnancy journey.
              </p>
            </div>

            {/* Section 2 — What Is Antenatal Care? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Antenatal Care?
              </h2>

              <p className="text-gray-700 mb-4">
                Antenatal care, also known as prenatal care, refers to the regular medical check-ups and health guidance provided to a woman throughout her pregnancy. The goal of antenatal care is to monitor the health of both mother and baby, identify and manage any risk factors early, and prepare the mother physically and emotionally for childbirth.
              </p>

              <p className="text-gray-700">
                Antenatal care typically begins as soon as pregnancy is confirmed and continues through regular visits until delivery, with the frequency of visits increasing as the pregnancy progresses, especially in the final trimester.
              </p>
            </div>

            {/* Section 3 — Why Is Antenatal Care Important? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Is Antenatal Care Important?
              </h2>

              <p className="text-gray-700 mb-4">
                Consistent antenatal care offers significant benefits for both mother and baby, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Early Detection of Complications:</strong> Conditions like gestational diabetes, high blood pressure, or anemia can be identified and managed before they become serious.</li>
                <li><strong>Monitoring Fetal Growth and Development:</strong> Regular scans and check-ups ensure the baby is growing as expected at each stage.</li>
                <li><strong>Reducing Risk of Maternal and Infant Mortality:</strong> Timely intervention through proper antenatal care significantly reduces risks associated with pregnancy and childbirth.</li>
                <li><strong>Guidance on Nutrition and Lifestyle:</strong> Expectant mothers receive personalized advice on diet, exercise, and lifestyle adjustments to support a healthy pregnancy.</li>
                <li><strong>Emotional Support and Reassurance:</strong> Regular contact with a trusted doctor helps ease anxiety and answers questions as they arise throughout the pregnancy.</li>
                <li><strong>Birth Planning:</strong> Antenatal visits allow the doctor and mother to discuss delivery preferences and prepare for a safe, informed birth experience.</li>
              </ul>
            </div>

            {/* Section 4 — When Should Antenatal Care Begin? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should Antenatal Care Begin?
              </h2>

              <p className="text-gray-700">
                Ideally, antenatal care should begin as soon as a woman confirms her pregnancy, or even earlier through preconception counselling if she is planning to conceive. Early initiation of antenatal care allows the doctor to establish an accurate due date, screen for any pre-existing health conditions, and begin essential supplementation, such as folic acid, which plays a crucial role in preventing neural tube defects in the developing baby.
              </p>
            </div>

            {/* Section 5 — Antenatal Care Schedule: What to Expect at Each Stage */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Antenatal Care Schedule: What to Expect at Each Stage
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec follows a structured antenatal care schedule tailored to each trimester, ensuring nothing is missed throughout the pregnancy journey.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                First Trimester (Weeks 1–12)
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirmation of pregnancy and calculation of expected due date</li>
                <li>Detailed medical history review, including any pre-existing conditions</li>
                <li>Initial blood tests, including blood group, hemoglobin, thyroid, and infection screening</li>
                <li>Early ultrasound to confirm viability, gestational age, and rule out ectopic pregnancy</li>
                <li>Guidance on nutrition, folic acid supplementation, and managing early pregnancy symptoms like nausea</li>
                <li>Screening for chromosomal abnormalities, if opted for, such as NT scan and dual marker test</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Second Trimester (Weeks 13–26)
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular check-ups to monitor blood pressure, weight gain, and overall health</li>
                <li>Detailed anomaly scan (usually around 18–20 weeks) to assess the baby's organ development</li>
                <li>Screening for gestational diabetes, typically between 24–28 weeks</li>
                <li>Monitoring fetal growth and movements</li>
                <li>Guidance on continued nutrition, exercise, and managing common second-trimester symptoms</li>
                <li>Tetanus and other recommended vaccinations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Third Trimester (Weeks 27–40)
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>More frequent visits, often every two weeks and then weekly as the due date approaches</li>
                <li>Growth scans to monitor the baby's size, position, and amniotic fluid levels</li>
                <li>Monitoring for signs of preeclampsia, gestational diabetes complications, or preterm labor</li>
                <li>Non-stress tests and Doppler studies in high-risk cases</li>
                <li>Birth preparation counselling, including discussion of delivery preferences and pain management options</li>
                <li>Final preparations and readiness planning for labor and delivery</li>
              </ul>
            </div>

            {/* Section 6 — Key Tests and Screenings During Antenatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Key Tests and Screenings During Antenatal Care
              </h2>

              <p className="text-gray-700 mb-4">
                Throughout pregnancy, several important tests help ensure the health and safety of both mother and baby:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Blood Tests:</strong> Blood group and Rh factor, hemoglobin levels, thyroid function, blood sugar, HIV, hepatitis B, and other infection screenings</li>
                <li><strong>Urine Tests:</strong> To check for urinary tract infections and protein levels, which can indicate preeclampsia</li>
                <li><strong>Ultrasound Scans:</strong> Performed at different stages to confirm viability, assess anatomy, monitor growth, and check placental position</li>
                <li><strong>Glucose Tolerance Test:</strong> To screen for gestational diabetes, usually done between 24 and 28 weeks</li>
                <li><strong>NT Scan and Dual Marker Test:</strong> Early screening for chromosomal abnormalities like Down syndrome</li>
                <li><strong>Anomaly Scan:</strong> A detailed ultrasound around 18–20 weeks to check the baby's organs and development</li>
                <li><strong>Doppler Studies:</strong> To assess blood flow to the baby, particularly important in high-risk pregnancies</li>
              </ul>
            </div>

            {/* Section 7 — Nutrition and Lifestyle Guidance During Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Nutrition and Lifestyle Guidance During Pregnancy
              </h2>

              <p className="text-gray-700 mb-4">
                Proper nutrition and lifestyle choices play a vital role in supporting a healthy pregnancy. As part of antenatal care, Dr. Priyanka Gynaec provides personalized guidance on:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Balanced Diet:</strong> Ensuring adequate intake of protein, iron, calcium, and essential vitamins to support fetal growth and maternal health</li>
                <li><strong>Folic Acid and Iron Supplementation:</strong> Essential supplements to prevent neural tube defects and manage anemia during pregnancy</li>
                <li><strong>Safe Physical Activity:</strong> Light exercises and walking, when medically appropriate, to maintain fitness and prepare the body for labor</li>
                <li><strong>Adequate Hydration and Rest:</strong> Supporting overall well-being throughout the pregnancy</li>
                <li><strong>Avoiding Harmful Substances:</strong> Guidance on avoiding smoking, alcohol, and unprescribed medications during pregnancy</li>
                <li><strong>Managing Common Discomforts:</strong> Practical advice for nausea, back pain, swelling, and other common pregnancy symptoms</li>
              </ul>
            </div>

            {/* Section 8 — Antenatal Care for High Risk Pregnancies */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Antenatal Care for High Risk Pregnancies
              </h2>

              <p className="text-gray-700">
                Some pregnancies require closer monitoring due to pre-existing conditions or complications that develop during pregnancy, such as gestational diabetes, hypertension, multiple pregnancy, or advanced maternal age. For these mothers, Dr. Priyanka Gynaec provides an intensified antenatal care plan involving more frequent visits, additional testing, and close collaboration with other specialists when needed, ensuring that both mother and baby remain safe throughout the pregnancy.
              </p>
            </div>

            {/* Section 9 — The Role of Advanced Technology in Antenatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Role of Advanced Technology in Antenatal Care
              </h2>

              <p className="text-gray-700 mb-4">
                Modern antenatal care benefits greatly from advanced diagnostic tools that allow for more accurate monitoring. At Dr. Priyanka Gynaec, expectant mothers have access to:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>3D/4D Ultrasound Imaging:</strong> For detailed visualization of the baby's anatomy and development</li>
                <li><strong>Doppler Ultrasound:</strong> To assess blood flow and detect early signs of growth restriction or placental insufficiency</li>
                <li><strong>Non-Stress Tests (NST):</strong> To monitor fetal heart rate and well-being, especially in the third trimester</li>
                <li><strong>Digital Health Tracking:</strong> Where applicable, tools to help mothers track blood pressure, blood sugar, and fetal movements at home between visits</li>
              </ul>

              <p className="text-gray-700">
                This combination of regular clinical care and advanced technology ensures that even subtle changes in the mother's or baby's health are detected and addressed promptly.
              </p>
            </div>

            {/* Section 10 — Preparing for Labor Through Antenatal Visits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Labor Through Antenatal Visits
              </h2>

              <p className="text-gray-700">
                As the due date approaches, antenatal visits shift focus toward preparing the mother for labor and delivery. This includes discussing the expected due date, the baby's position, delivery preferences, pain management options, and what signs indicate the onset of labor. Mothers are also counselled on when to come to the hospital and what to expect during the admission process, helping reduce anxiety and ensuring they feel prepared and confident as they approach childbirth.
              </p>
            </div>

            {/* Section 11 — Why Choose Dr. Priyanka Gynaec for Antenatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Antenatal Care in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Expectant mothers across Moradabad trust Dr. Priyanka Gynaec for antenatal care because of a structured, attentive, and personalized approach to every pregnancy. Key reasons include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A well-defined antenatal care schedule covering every trimester in detail</li>
                <li>Access to advanced 3D/4D ultrasound and Doppler imaging for precise monitoring</li>
                <li>Early identification and management of risk factors to prevent complications</li>
                <li>Personalized nutrition, lifestyle, and birth preparation guidance</li>
                <li>A warm, reassuring approach that supports mothers emotionally throughout pregnancy</li>
                <li>Continuity of care from the first confirmation of pregnancy through delivery and postpartum follow-up</li>
              </ul>
            </div>

            {/* Section 12 — Postpartum Follow-Up After Antenatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postpartum Follow-Up After Antenatal Care
              </h2>

              <p className="text-gray-700">
                Antenatal care naturally extends into the postpartum period, where mothers are monitored for recovery, breastfeeding support, and management of any conditions that developed during pregnancy, such as gestational diabetes or hypertension. This continuity of care ensures that the health of the mother remains a priority even after delivery.
              </p>
            </div>

            {/* Section 13 — Speciality & Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Speciality &amp; Contact Information
              </h2>

              <p className="text-gray-700 mb-4">
                <strong>Speciality:</strong> Pregnancy &amp; Antenatal Care, High Risk Pregnancy Management, Normal &amp; Assisted Delivery, Gynaecology &amp; Advanced 3D Laparoscopy, Fertility &amp; IVF, Paediatrics
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

              <p className="text-gray-700 mt-6">
                If you are pregnant or planning a pregnancy and want structured, expert antenatal care, book a consultation with Dr. Priyanka Gynaec in Moradabad today for a safe and supported pregnancy journey.
              </p>
            </div>

            {/* Section 14 — FAQs */}
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