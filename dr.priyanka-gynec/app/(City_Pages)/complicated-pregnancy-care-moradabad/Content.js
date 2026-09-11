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

export default function ComplicatedPregnancyCareMoradabad() {
  const faqs = [
    {
      q: "What is considered a complicated pregnancy?",
      a: "A complicated pregnancy is one involving a medical condition, such as high BP, diabetes, or placenta issues, that requires extra monitoring and care.",
    },
    {
      q: "Can a complicated pregnancy still result in a normal delivery?",
      a: "Yes, if the mother's condition stabilises and the baby's position is normal, normal delivery is often possible.",
    },
    {
      q: "How often should I visit the doctor during a complicated pregnancy?",
      a: "Usually every 2-3 weeks, or more frequently depending on the specific complication involved.",
    },
    {
      q: "Who provides complicated pregnancy care in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec clinic, Moradabad, is well known for managing complicated pregnancy cases.",
    },
    {
      q: "What are the early signs of a complicated pregnancy?",
      a: "Persistent headache, swelling, bleeding, reduced baby movement, or severe abdominal pain are early signs to watch for.",
    },
    {
      q: "Does gestational diabetes automatically make a pregnancy complicated?",
      a: "It is considered a complication, but with proper diet and monitoring, it is usually well managed.",
    },
    {
      q: "Is IVF pregnancy always considered complicated?",
      a: "Not always, but IVF pregnancies are typically monitored more closely as a precaution.",
    },
    {
      q: "What tests are commonly done in complicated pregnancy care?",
      a: "BP and sugar monitoring, growth scans, Doppler ultrasound, and blood tests are commonly used.",
    },
    {
      q: "How can I book an appointment for complicated pregnancy care?",
      a: "You can book an appointment by messaging or calling the WhatsApp number +91 8979670705.",
    },
    {
      q: "Is postnatal follow-up needed after a complicated pregnancy?",
      a: "Yes, postnatal checkups are important to monitor recovery for both mother and baby.",
    },
    {
      q: "Can complications be detected early in pregnancy?",
      a: "Yes, early screening tests and ultrasounds can identify most risk factors within the first trimester.",
    },
    {
      q: "Does a complicated pregnancy always require a C-section?",
      a: "No, the mode of delivery depends on the specific condition and is usually decided closer to the due date.",
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
                Complicated Pregnancy Care in Moradabad – Expert Support for a Safe Journey
              </h1>

              <p className="text-gray-700 mb-4">
                Every pregnancy comes with its own set of expectations, but for some mothers, the journey becomes far more complex than anticipated. Conditions like high blood pressure, gestational diabetes, placenta abnormalities, or a difficult obstetric history can turn a normal pregnancy into a &quot;complicated&quot; one that needs specialised attention. For families dealing with this reality in Moradabad, finding the right team for complicated pregnancy care in Moradabad becomes the single biggest priority. The good news is that complicated pregnancies, when managed correctly by an experienced gynaecologist with the right facilities, still result in healthy outcomes in the overwhelming majority of cases.
              </p>

              <p className="text-gray-700">
                This guide walks through what complicated pregnancy actually means, the common conditions involved, the monitoring and treatment process, and why Dr. Priyanka Pachauri is a trusted name for this kind of care in the city.
              </p>
            </div>

            {/* Section 2 — What Does Complicated Pregnancy Mean */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Does &quot;Complicated Pregnancy&quot; Actually Mean?
              </h2>

              <p className="text-gray-700 mb-4">
                A complicated pregnancy is one where a medical condition, either pre-existing or newly developed, requires extra monitoring and specialised management to protect the health of the mother and the baby. It is a broad term that covers a wide range of situations, from mild issues that resolve with lifestyle changes to serious conditions that require constant hospital-level supervision.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It can involve conditions present before conception, such as diabetes or thyroid disorders</li>
                <li>It can also develop suddenly during pregnancy, such as preeclampsia</li>
                <li>It often requires more frequent scans, blood tests, and specialist visits</li>
                <li>The severity can range from mild to severe, and the care plan is adjusted accordingly</li>
                <li>With correct management, most complicated pregnancies still result in a safe delivery</li>
              </ul>
            </div>

            {/* Section 3 — Common Conditions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Conditions That Lead to Complicated Pregnancy Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Preeclampsia or gestational hypertension – sudden rise in blood pressure during pregnancy</li>
                <li>Gestational diabetes – blood sugar issues that develop specifically during pregnancy</li>
                <li>Placenta previa or low-lying placenta – placenta covering part or all of the cervix</li>
                <li>Intrauterine growth restriction (IUGR) – baby growing slower than expected</li>
                <li>Multiple pregnancy – twins or triplets requiring closer monitoring</li>
                <li>Previous pregnancy loss or preterm delivery</li>
                <li>Rh incompatibility between mother and baby's blood type</li>
                <li>Severe anemia or nutritional deficiencies</li>
                <li>Uterine abnormalities, such as fibroids or a weak cervix</li>
                <li>Advanced maternal age – conceiving after 35 years</li>
              </ul>
            </div>

            {/* Section 4 — Why Specialised Care Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Specialised Care Matters for a Complicated Pregnancy
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Complications can develop quickly, so early detection through regular monitoring is critical</li>
                <li>A specialist can adjust the treatment plan in real time based on changing test results</li>
                <li>Access to advanced ultrasound and Doppler imaging helps track the baby's condition accurately</li>
                <li>A hospital with NICU support ensures the newborn gets immediate care if born early or with complications</li>
                <li>Coordinated care between the gynaecologist, physician, and paediatric team reduces the risk of missed complications</li>
                <li>Emotional reassurance from an experienced doctor helps the mother manage stress, which itself affects pregnancy outcomes</li>
              </ul>
            </div>

            {/* Section 5 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Trusted for Complicated Pregnancy Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec clinic in Gandhi Nagar, Moradabad, is recognised for her expertise in managing complicated pregnancies alongside laparoscopy and fertility treatment. According to her clinic's website, her practice is built around the philosophy &quot;Her Health First&quot; — placing the mother's safety, comfort, and choices at the centre of every decision made.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialised experience in antenatal and postnatal care for complicated and high risk pregnancies</li>
                <li>International fellowships and gold medal credentials reflecting strong clinical training</li>
                <li>In-house Voluson 3D and 4D ultrasound machine, allowing precise monitoring of the baby's growth and any structural concerns</li>
                <li>GERI time-lapse imaging incubator and AI-based fertility diagnostics, useful for patients who conceived through IVF</li>
                <li>A gentle, evidence-based approach that prioritises normal delivery wherever it remains medically safe</li>
                <li>An integrated care team that follows the patient's complete history from the very first visit through delivery</li>
                <li>On-site paediatric care, so the newborn's check-up can happen immediately after birth at the same facility</li>
              </ul>

              <p className="text-gray-700 mt-4">
                For families searching for complicated pregnancy care in Moradabad backed by both modern technology and genuine attentiveness, Dr. Priyanka Pachauri is a dependable choice.
              </p>
            </div>

            {/* Section 6 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs That Indicate a Pregnancy May Be Becoming Complicated
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe or persistent headache that doesn't improve with medication</li>
                <li>Blurred vision or seeing flashes of light</li>
                <li>Sudden swelling in the hands, feet, or face</li>
                <li>Vaginal bleeding or spotting at any stage of pregnancy</li>
                <li>A noticeable, sudden decrease in the baby's movements</li>
                <li>Severe abdominal pain or cramping</li>
                <li>High fever or chills</li>
                <li>Difficulty breathing or chest pain</li>
                <li>Sudden weight gain of more than 1-2 kg within a week</li>
                <li>Reduced urine output or a burning sensation while urinating</li>
              </ul>
            </div>

            {/* Section 7 — Tests and Monitoring */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tests and Monitoring Used in Complicated Pregnancy Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular blood pressure and blood sugar checks at every visit</li>
                <li>NT scan and anomaly scan to assess structural development of the baby</li>
                <li>Doppler ultrasound to evaluate blood flow between mother and baby</li>
                <li>Blood tests for anemia, thyroid function, and infection screening</li>
                <li>Amniocentesis or genetic testing, when clinically necessary</li>
                <li>Growth scans to track the baby's development over time</li>
                <li>Customised diet and weight management plan</li>
                <li>Medication management for blood pressure, thyroid, or blood sugar control</li>
                <li>Pre-planned delivery strategy, deciding timing and mode of delivery in advance</li>
              </ul>
            </div>

            {/* Section 8 — Normal Delivery vs C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery vs C-Section in Complicated Pregnancy Cases
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>If BP, sugar levels, and the baby's position remain stable, normal delivery is generally still possible</li>
                <li>If the placenta is low-lying, the baby is breech, or preeclampsia becomes severe, a C-section is the safer route</li>
                <li>The final decision is often made close to or during labour, based on the real-time condition of mother and baby</li>
                <li>A well-prepared clinic keeps both delivery pathways ready, along with the necessary surgical backup</li>
              </ul>
            </div>

            {/* Section 9 — Lifestyle Guidance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Guidance for Managing a Complicated Pregnancy
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Strictly follow the diet plan recommended by your gynaecologist</li>
                <li>Avoid excess salt, sugar, and oily or processed food</li>
                <li>Take light, doctor-approved walks unless advised otherwise</li>
                <li>Stay well hydrated throughout the day</li>
                <li>Prioritise 7-8 hours of sleep each night</li>
                <li>Practice meditation or gentle yoga to manage stress levels</li>
                <li>Avoid smoking and alcohol completely</li>
                <li>Never self-medicate; always consult your doctor first</li>
                <li>Attend every scheduled appointment without skipping, even if you feel fine</li>
              </ul>
            </div>

            {/* Section 10 — How to Choose the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Doctor for Complicated Pregnancy Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Proven experience specifically managing complicated and high risk pregnancy cases</li>
                <li>Access to advanced ultrasound and in-house diagnostic facilities</li>
                <li>Availability for urgent or emergency consultations at short notice</li>
                <li>Clear, patient communication about test results and treatment plans</li>
                <li>A hospital tie-up that includes NICU support for the newborn</li>
                <li>Consistent positive feedback and outcomes from previous patients</li>
              </ul>
            </div>

            {/* Section 11 — Understanding the Bigger Picture */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding the Bigger Picture Behind a Complicated Pregnancy
              </h2>

              <p className="text-gray-700 mb-4">
                It is important for families to understand that a complicated pregnancy diagnosis is rarely a single, fixed situation — it is a dynamic process that changes as the pregnancy progresses. Many conditions identified early, such as mild gestational diabetes or borderline blood pressure, respond very well to dietary changes, medication, and closer monitoring, often stabilising significantly by the later trimesters.
              </p>

              <p className="text-gray-700">
                This is precisely why regular follow-up visits matter so much; they allow the doctor to reassess risk at every stage rather than relying only on the initial diagnosis. A mother whose pregnancy was flagged as complicated in the first trimester may, with consistent care, go on to have a remarkably smooth third trimester and a safe delivery. Understanding this can significantly ease the anxiety that often comes with hearing the word &quot;complicated&quot; for the first time.
              </p>
            </div>

            {/* Section 12 — Contact Information */}
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
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
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

            {/* Section 13 — FAQs */}
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