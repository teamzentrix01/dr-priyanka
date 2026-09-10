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

export default function HighRiskPregnancyManagementDoctor() {
  const faqs = [
    {
      q: "What does high risk pregnancy management mean?",
      a: "It means closely monitoring the health of both mother and baby throughout the pregnancy, more than a routine case would need.",
    },
    {
      q: "How often should checkups happen in a high risk pregnancy?",
      a: "Usually every 2-3 weeks, or as advised by your doctor based on the specific risk factors.",
    },
    {
      q: "Is normal delivery possible in a high risk pregnancy?",
      a: "Yes, if blood pressure, sugar levels, and the baby's position remain stable, normal delivery is often possible.",
    },
    {
      q: "Who is a trusted doctor for high risk pregnancy management in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec clinic, Moradabad, is a well-known name for high risk pregnancy management.",
    },
    {
      q: "What should be monitored most closely in a high risk pregnancy?",
      a: "Blood pressure, sugar levels, weight gain, and the baby's movements need regular attention.",
    },
    {
      q: "Is an IVF pregnancy always high risk?",
      a: "Not always, but IVF pregnancies are typically monitored more closely as a precaution.",
    },
    {
      q: "Which warning signs should be reported immediately?",
      a: "Severe headache, sudden swelling, bleeding, reduced baby movement, or intense abdominal pain need urgent attention.",
    },
    {
      q: "Is bed rest always necessary in high risk pregnancy?",
      a: "No, it is case-specific — doctors advise it only when medically required.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can book an appointment by messaging or calling the WhatsApp number +91 8979670705.",
    },
    {
      q: "Is follow-up care needed after delivery?",
      a: "Yes, postnatal checkups are essential to track the recovery of both mother and baby.",
    },
    {
      q: "Can a high risk pregnancy be detected early?",
      a: "Yes, through initial screening tests and early ultrasounds, most risk factors can be identified in the first trimester itself.",
    },
    {
      q: "Does a high risk pregnancy always require a C-section?",
      a: "No, the mode of delivery depends on the specific condition and is usually decided closer to the delivery date.",
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
                High Risk Pregnancy Management Doctor – Expert Guidance for a Safe Mother and Baby
              </h1>

              <p className="text-gray-700 mb-4">
                When any health risk shows up during pregnancy, the very first question on every family's mind is — &quot;which high risk pregnancy management doctor can guide us correctly?&quot; A high risk pregnancy does not mean something is bound to go wrong; it simply means the mother's and baby's health need closer-than-usual monitoring throughout the journey. With the right doctor, timely tests, and a structured care plan, the vast majority of high risk pregnancies still result in a safe, healthy delivery.
              </p>

              <p className="text-gray-700">
                In this detailed guide, we explain what high risk pregnancy management really involves, what qualifies a doctor as an expert in this field, which tests and treatments are typically part of the process, and how a specialist like Dr. Priyanka Pachauri in Moradabad supports families through this journey.
              </p>
            </div>

            {/* Section 2 — What Is High Risk Pregnancy Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is High Risk Pregnancy Management?
              </h2>

              <p className="text-gray-700 mb-4">
                High risk pregnancy management is a structured medical approach where the doctor closely monitors the health of both mother and baby throughout the pregnancy, so that any complication can be caught early and treated on time.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The focus is on early detection and timely intervention</li>
                <li>It includes regular checkups, advanced tests, and specialist consultations</li>
                <li>A separate monitoring plan is created for each trimester</li>
                <li>The mode and timing of delivery are also planned well in advance</li>
                <li>The overall goal is a safe delivery and a healthy baby</li>
              </ul>
            </div>

            {/* Section 3 — When Do You Need a Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Do You Actually Need a High Risk Pregnancy Management Doctor?
              </h2>

              <p className="text-gray-700 mb-4">
                Not every pregnant woman needs specialist-level care, but the following situations usually call for a dedicated management plan:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Mother's age is under 18 or over 35 years</li>
                <li>History of high blood pressure or preeclampsia</li>
                <li>Diagnosed with diabetes or gestational diabetes</li>
                <li>Previous pregnancy involved miscarriage, preterm delivery, or a C-section</li>
                <li>Carrying twins or triplets (multiple pregnancy)</li>
                <li>Thyroid disorder or severe anemia</li>
                <li>Obesity or significantly low body weight</li>
                <li>Conceived through IVF or fertility treatment</li>
                <li>Low-lying placenta or uterine conditions such as fibroids</li>
              </ul>
            </div>

            {/* Section 4 — What Defines a Good Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Defines a Good High Risk Pregnancy Management Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing the right doctor is the single most important step in a high risk pregnancy. Here's what to look for in a true specialist:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Proven experience handling high risk cases</li>
                <li>Advanced ultrasound and diagnostic facilities available in-house</li>
                <li>Availability for urgent or emergency consultations</li>
                <li>Patiently listens to concerns and explains conditions clearly</li>
                <li>Hospital tie-up with NICU facilities for delivery</li>
                <li>A clear, trimester-wise monitoring plan</li>
                <li>Positive reviews and experiences shared by past patients</li>
              </ul>
            </div>

            {/* Section 5 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – A Trusted High Risk Pregnancy Management Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec clinic in Gandhi Nagar, Moradabad, is among the few doctors in the city with specialisation across high risk pregnancy management, laparoscopy, and fertility treatment. According to her clinic's website, her approach is built around &quot;Her Health First&quot; — keeping every mother's comfort and choices at the centre of care.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Deep expertise in antenatal and postnatal care, including high risk pregnancy monitoring</li>
                <li>International fellowships and gold medal credentials reflecting strong clinical training</li>
                <li>Clinic equipped with a Voluson 3D and 4D ultrasound machine, allowing clear detection of the baby's growth and any anomalies</li>
                <li>GERI time-lapse imaging incubator and AI-based fertility testing available, useful for patients undergoing IVF</li>
                <li>A gentle, safe birthing approach that prioritises normal delivery wherever possible</li>
                <li>An integrated care team tracking the patient's complete history from the first visit through delivery</li>
                <li>Paediatric care available at the same clinic, making the newborn's check-up convenient after delivery</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If you are looking for a high risk pregnancy management doctor who combines advanced technology with genuine, attentive care, Dr. Priyanka Pachauri is a reliable choice to consider.
              </p>
            </div>

            {/* Section 6 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs During High Risk Pregnancy You Should Never Ignore
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe headache that doesn't go away even after medication</li>
                <li>Blurred vision or seeing flashes of light</li>
                <li>Sudden swelling in the hands, feet, or face</li>
                <li>Vaginal bleeding or spotting at any stage of pregnancy</li>
                <li>A noticeable, sudden drop in the baby's movements</li>
                <li>Severe abdominal pain or cramping</li>
                <li>High fever or chills</li>
                <li>Difficulty breathing or chest pain</li>
                <li>Sudden weight gain of more than 1-2 kg within a week</li>
                <li>Burning sensation while urinating or reduced urine output</li>
              </ul>
            </div>

            {/* Section 7 — Tests and Treatments */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tests and Treatments Involved in High Risk Pregnancy Management
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular BP and blood sugar monitoring at every visit</li>
                <li>NT scan and anomaly scan to assess the baby's growth and structure</li>
                <li>Doppler ultrasound to check blood flow when risk levels are elevated</li>
                <li>Blood tests to screen for anemia, thyroid issues, and infections</li>
                <li>Amniocentesis or genetic testing, when medically indicated</li>
                <li>Customised diet and weight management plan</li>
                <li>Activity restriction or bed rest, only in specific cases</li>
                <li>Medication, prescribed under doctor supervision to manage BP or thyroid</li>
                <li>Delivery planning, deciding timing and mode of delivery in advance</li>
              </ul>
            </div>

            {/* Section 8 — Normal Delivery vs C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery vs C-Section in High Risk Pregnancy Management
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>If BP, sugar levels, and the baby's position are stable, normal delivery remains the priority</li>
                <li>If the placenta is low-lying, the baby is breech, or there is severe preeclampsia, a C-section is the safer route</li>
                <li>The final decision is often made during labour, based on the real-time condition of mother and baby</li>
                <li>A well-equipped clinic keeps both options ready with the right team and equipment</li>
              </ul>
            </div>

            {/* Section 9 — Lifestyle Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Tips That Make High Risk Pregnancy Management Easier
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Strictly follow the diet plan given by your doctor</li>
                <li>Avoid excess salt, sugar, and oily food</li>
                <li>Take light, doctor-approved walks or exercise</li>
                <li>Stay well hydrated throughout the day</li>
                <li>Get at least 7-8 hours of sleep</li>
                <li>Practice meditation or gentle yoga to reduce stress</li>
                <li>Completely avoid smoking and alcohol</li>
                <li>Never take any medication without consulting your gynaecologist</li>
                <li>Attend every scheduled appointment; never skip a follow-up</li>
              </ul>
            </div>

            {/* Section 10 — Points to Keep in Mind */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Points to Keep in Mind While Choosing a High Risk Pregnancy Management Doctor
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The doctor must have real clinical experience with high risk cases</li>
                <li>Clinic should have advanced ultrasound and lab facilities available</li>
                <li>Fast availability during emergencies is essential</li>
                <li>The doctor should take patient concerns seriously and explain things clearly</li>
                <li>The delivery hospital should have NICU-level facilities</li>
                <li>Communication style should be empathetic and transparent</li>
              </ul>
            </div>

            {/* Section 11 — The Emotional Side */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Emotional Side of a High Risk Pregnancy
              </h2>

              <p className="text-gray-700 mb-4">
                Beyond the medical tests and monitoring schedules, a high risk pregnancy also brings an emotional weight that is often overlooked. Being told that your pregnancy needs extra attention can trigger anxiety, sleepless nights, and constant worry about the baby's wellbeing, even when everything is actually progressing well. This emotional strain is completely normal, and it is one of the reasons why choosing a doctor who communicates with empathy matters just as much as choosing one with strong clinical credentials.
              </p>

              <p className="text-gray-700 mb-4">
                A good high risk pregnancy management doctor does not simply hand over a list of tests and send the patient home; they take the time to explain what each result means, why a particular precaution is being recommended, and what the realistic outlook actually looks like. This kind of clear, honest communication reduces unnecessary fear and helps the mother feel like an informed participant in her own care rather than a passive patient waiting for updates.
              </p>

              <p className="text-gray-700 mb-4">
                Family support also plays a significant role during this period. Partners, parents, and close family members should be encouraged to attend key appointments whenever possible, so that everyone understands the care plan and can help the mother follow dietary advice, activity restrictions, or medication schedules consistently at home.
              </p>

              <p className="text-gray-700">
                A high risk pregnancy is rarely managed by the doctor alone; it is a shared responsibility between the medical team and the support system surrounding the mother. Simple things, such as accompanying her to scans, helping track blood pressure readings at home, or simply being present during moments of anxiety, can make a measurable difference to how smoothly the pregnancy progresses.
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