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

export default function HighRiskPregnancyHospitalMoradabad() {
  const faqs = [
    {
      q: "What makes a hospital suitable for high risk pregnancy care?",
      a: "A dedicated specialist, advanced ultrasound facilities, NICU support, and 24/7 emergency readiness make a hospital suitable for high risk pregnancy care.",
    },
    {
      q: "Is Dr. Priyanka Gynaec clinic equipped for high risk pregnancy cases?",
      a: "Yes, the clinic offers advanced ultrasound, experienced antenatal monitoring, and an integrated care team for high risk pregnancies.",
    },
    {
      q: "How often should I visit the hospital during a high risk pregnancy?",
      a: "Usually every 2-3 weeks, or more frequently as advised based on your specific risk factors.",
    },
    {
      q: "Is normal delivery possible at a high risk pregnancy hospital?",
      a: "Yes, if the mother's BP, sugar levels, and the baby's position are stable, normal delivery is often possible.",
    },
    {
      q: "What emergency facilities should a good hospital have?",
      a: "24/7 labour room access, blood transfusion facility, anaesthesia backup, and NICU support are essential emergency facilities.",
    },
    {
      q: "Does the hospital handle IVF pregnancies as well?",
      a: "Yes, IVF pregnancies are monitored closely and supported with advanced fertility and ultrasound technology.",
    },
    {
      q: "Which symptoms mean I should go to the hospital immediately?",
      a: "Severe headache, sudden swelling, bleeding, reduced baby movement, or intense abdominal pain need immediate hospital attention.",
    },
    {
      q: "Is NICU support available for high risk deliveries?",
      a: "A good high risk pregnancy hospital ensures NICU-level newborn care is available or tied up with a nearby facility.",
    },
    {
      q: "How can I book an appointment at the hospital?",
      a: "You can book an appointment by messaging or calling the WhatsApp number +91 8979670705.",
    },
    {
      q: "Is postnatal follow-up available after delivery?",
      a: "Yes, postnatal checkups for both mother and baby are an important part of high risk pregnancy care.",
    },
    {
      q: "Can high risk pregnancy complications be detected early?",
      a: "Yes, early screening tests and ultrasounds can identify most risk factors within the first trimester.",
    },
    {
      q: "Does every high risk pregnancy end in a C-section?",
      a: "No, the mode of delivery depends on the individual case and is usually decided closer to the due date.",
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
                High Risk Pregnancy Hospital in Moradabad – Complete Care for a Safe Delivery
              </h1>

              <p className="text-gray-700 mb-4">
                Choosing the right hospital during a high risk pregnancy is one of the most important decisions a family will ever make. It is not just about finding a place with a doctor's clinic and a delivery room — it is about finding a facility with the right equipment, an experienced clinical team, round-the-clock emergency readiness, and a genuinely compassionate approach toward the mother's physical and emotional wellbeing. For families in Moradabad, this decision often becomes even more stressful because of the assumption that advanced, big-city-level care is not available locally. In reality, Moradabad today has hospitals and clinics equipped with the same technology and expertise found in metro cities, and understanding what to look for in a high risk pregnancy hospital in Moradabad can make this decision far easier.
              </p>

              <p className="text-gray-700">
                This guide covers everything from what defines a high risk pregnancy, the facilities a good hospital must offer, warning signs to watch for, and why Dr. Priyanka Gynaec clinic is considered a trusted option in the city.
              </p>
            </div>

            {/* Section 2 — What Makes a Pregnancy High Risk */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes a Pregnancy &quot;High Risk&quot;?
              </h2>

              <p className="text-gray-700 mb-4">
                A pregnancy is labelled high risk when the mother or baby needs closer-than-usual medical attention to prevent or manage complications. This label is not a prediction of a bad outcome — it is simply a signal that extra monitoring and specialist-level care are required.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pre-existing conditions such as diabetes, hypertension, or thyroid disorders</li>
                <li>Advanced maternal age (under 18 or over 35 years)</li>
                <li>History of miscarriage, preterm birth, or a previous C-section</li>
                <li>Carrying twins or triplets</li>
                <li>Placenta-related complications, such as a low-lying placenta</li>
                <li>Conceiving through IVF or fertility treatment</li>
                <li>Obesity or being significantly underweight</li>
                <li>Uterine conditions such as fibroids</li>
              </ul>
            </div>

            {/* Section 3 — Why the Right Hospital Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why the Right Hospital Matters So Much in a High Risk Pregnancy
              </h2>

              <p className="text-gray-700 mb-4">
                The quality of the hospital can directly influence how safely a high risk pregnancy is managed, especially during emergencies where every minute counts:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Immediate access to emergency obstetric care if complications suddenly arise</li>
                <li>On-site NICU facilities to support the baby if early or complicated delivery occurs</li>
                <li>Availability of advanced ultrasound and diagnostic equipment for continuous monitoring</li>
                <li>A team trained specifically to handle high risk deliveries, not just routine ones</li>
                <li>Blood bank access and anaesthesia support for both normal delivery and C-section</li>
                <li>A calm, supportive environment that reduces stress for the mother during a sensitive time</li>
              </ul>
            </div>

            {/* Section 4 — What to Look for in a Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Look for in a High Risk Pregnancy Hospital in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Before finalising a hospital, families should evaluate a few key factors carefully:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Does the hospital have a dedicated high risk pregnancy specialist on staff?</li>
                <li>Is 3D/4D ultrasound and Doppler imaging available in-house?</li>
                <li>Does the facility offer 24/7 emergency and labour room access?</li>
                <li>Is there a NICU or paediatric care unit for newborn support?</li>
                <li>Are lab tests and blood work processed on-site or nearby?</li>
                <li>Does the hospital maintain clear communication with patients about test results and care plans?</li>
                <li>Are past patient reviews and outcomes consistently positive?</li>
              </ul>
            </div>

            {/* Section 5 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec – A Trusted High Risk Pregnancy Hospital in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec clinic, founded by Dr. Priyanka Pachauri and located in Gandhi Nagar, Moradabad, is recognised locally as a comprehensive facility for high risk pregnancy care, laparoscopy, and fertility treatment. According to her clinic's website, the guiding philosophy of the practice is &quot;Her Health First&quot; — placing the mother's comfort, choices, and safety at the centre of every decision.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialised expertise in antenatal and postnatal care, including complex, high risk pregnancy cases</li>
                <li>International fellowships and gold medal credentials reflecting advanced clinical training</li>
                <li>In-house Voluson 3D and 4D ultrasound machine for detailed monitoring of the baby's growth and any anomalies</li>
                <li>GERI time-lapse imaging incubator and AI-based fertility diagnostics available for IVF patients</li>
                <li>A gentle, evidence-based approach that prioritises normal delivery wherever medically safe</li>
                <li>An integrated care team that tracks each patient's complete medical history from the very first visit through delivery</li>
                <li>On-site paediatric care, allowing the newborn's check-up to happen at the same facility right after birth</li>
              </ul>

              <p className="text-gray-700 mt-4">
                For families searching for a high risk pregnancy hospital in Moradabad that combines modern equipment with a genuinely attentive care team, Dr. Priyanka Gynaec clinic is a strong option to consider.
              </p>
            </div>

            {/* Section 6 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs That Require Immediate Hospital Attention
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe headache that does not improve with medication</li>
                <li>Blurred vision or seeing flashes of light</li>
                <li>Sudden swelling in the hands, feet, or face</li>
                <li>Vaginal bleeding or spotting at any stage of pregnancy</li>
                <li>A sudden, noticeable decrease in the baby's movements</li>
                <li>Intense abdominal pain or cramping</li>
                <li>High fever or chills</li>
                <li>Difficulty breathing or chest pain</li>
                <li>Sudden weight gain of more than 1-2 kg in a week</li>
                <li>Reduced urine output or burning sensation while urinating</li>
              </ul>
            </div>

            {/* Section 7 — Tests and Monitoring */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tests and Monitoring Typically Available at a High Risk Pregnancy Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular blood pressure and blood sugar monitoring</li>
                <li>NT scan and anomaly scan for structural assessment of the baby</li>
                <li>Doppler ultrasound to evaluate blood flow in high risk cases</li>
                <li>Blood tests for anemia, thyroid function, and infection screening</li>
                <li>Amniocentesis or genetic testing, when clinically indicated</li>
                <li>Customised nutrition and weight management guidance</li>
                <li>Bed rest or activity modification, only when specifically required</li>
                <li>Medication management for blood pressure or thyroid conditions</li>
                <li>Pre-planned delivery strategy, deciding timing and mode well in advance</li>
              </ul>
            </div>

            {/* Section 8 — Normal Delivery vs C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery vs C-Section: What a Good Hospital Offers
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>If blood pressure, sugar levels, and the baby's position remain stable, normal delivery is generally preferred</li>
                <li>If the placenta is low-lying, the baby is breech, or preeclampsia is severe, a C-section becomes the safer route</li>
                <li>A well-equipped hospital keeps both delivery options ready with trained staff and equipment on standby</li>
                <li>The final decision is frequently made during labour itself, based on real-time monitoring</li>
              </ul>
            </div>

            {/* Section 9 — Facilities to Confirm Before Admission */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities to Confirm Before Admission
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Availability of a dedicated labour room with continuous foetal monitoring</li>
                <li>Anaesthesia and surgical backup for emergency C-sections</li>
                <li>Blood transfusion facility in case of complications</li>
                <li>NICU-level newborn care, especially for early or complicated deliveries</li>
                <li>24-hour doctor and nursing availability, not just during OPD hours</li>
                <li>Clear billing and transparent communication about procedures and costs</li>
              </ul>
            </div>

            {/* Section 10 — The Emotional and Practical Side */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Emotional and Practical Side of Choosing a Hospital
              </h2>

              <p className="text-gray-700 mb-4">
                Selecting a hospital for a high risk pregnancy is rarely a purely clinical decision — it is deeply emotional as well. Families often carry a quiet fear that something could go wrong at any stage, and this anxiety tends to intensify when the pregnancy has already been flagged as high risk. A hospital that only focuses on tests and procedures, without addressing this emotional dimension, can leave patients feeling more anxious rather than reassured.
              </p>

              <p className="text-gray-700">
                What truly makes a difference is a care team that takes the time to explain each test result in simple terms, answers repeated questions with patience, and keeps the family updated at every stage rather than leaving them guessing between appointments. This kind of transparent communication builds trust, and trust is often what helps a mother stay calm during a demanding pregnancy.
              </p>
            </div>

            {/* Section 11 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Address, Contact & WhatsApp
              </h2>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec Clinic</p>
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
                          href="mailto:drpriyanka@gynaecologistmoradabad.com"
                          className="hover:underline"
                        >
                          drpriyanka@gynaecologistmoradabad.com
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
                For appointments, directions, or any urgent pregnancy-related query, reach out directly on WhatsApp at +91 8979670705.
              </p>
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