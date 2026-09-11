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

export default function SafeMotherhoodSpecialistMoradabad() {
  const faqs = [
    {
      q: "What does a safe motherhood specialist actually do?",
      a: "They provide complete care from pre-pregnancy planning through delivery and postnatal recovery, focusing on preventing complications.",
    },
    {
      q: "Who is a trusted safe motherhood specialist in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec clinic, Moradabad, is a well-known name for safe motherhood care.",
    },
    {
      q: "How often should antenatal checkups happen?",
      a: "Typically once a month in early pregnancy, increasing to every 2 weeks and then weekly closer to delivery.",
    },
    {
      q: "Does safe motherhood care apply only to high risk pregnancies?",
      a: "No, it applies to every pregnancy, though monitoring is more frequent in high risk cases.",
    },
    {
      q: "What tests are part of safe motherhood care?",
      a: "Blood pressure monitoring, blood sugar checks, ultrasounds, and screening for anemia or infections are commonly included.",
    },
    {
      q: "Can normal delivery happen under safe motherhood guidance?",
      a: "Yes, normal delivery is always prioritised when it remains safe for both mother and baby.",
    },
    {
      q: "What warning signs should be reported immediately?",
      a: "Severe headache, sudden swelling, bleeding, reduced baby movement, or intense abdominal pain need urgent attention.",
    },
    {
      q: "Is postnatal care included in safe motherhood services?",
      a: "Yes, monitoring the mother's recovery and supporting breastfeeding are key parts of safe motherhood care.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can book an appointment by messaging or calling the WhatsApp number +91 8979670705.",
    },
    {
      q: "Does safe motherhood care include newborn checkups?",
      a: "Yes, many clinics coordinate paediatric care so the newborn is checked immediately after birth.",
    },
    {
      q: "Can complications be prevented through safe motherhood practices?",
      a: "Many complications can be detected and managed early through consistent monitoring, reducing overall risk.",
    },
    {
      q: "Is pre-pregnancy counselling part of safe motherhood care?",
      a: "Yes, pre-conception health checks help identify and address risks before pregnancy even begins.",
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
                Safe Motherhood Specialist in Moradabad – Trusted Care at Every Stage of Pregnancy
              </h1>

              <p className="text-gray-700 mb-4">
                Safe motherhood is not just a medical goal — it is a promise that every mother deserves to reach delivery with confidence, proper guidance, and genuine care at every step of the way. The idea of &quot;Safe Motherhood&quot; has grown into a well-recognised approach in maternal healthcare, focused on reducing complications, catching risks early, and supporting the mother emotionally and physically throughout pregnancy, delivery, and recovery. For families in Moradabad searching for a safe motherhood specialist in Moradabad, the right choice can make the difference between a stressful pregnancy and a smooth, well-supported one.
              </p>

              <p className="text-gray-700">
                This guide explains what safe motherhood care actually involves, why it matters, what to expect from a good specialist, and why Dr. Priyanka Pachauri is regarded as a trusted name in this field in the city.
              </p>
            </div>

            {/* Section 2 — What Does Safe Motherhood Mean */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Does &quot;Safe Motherhood&quot; Actually Mean?
              </h2>

              <p className="text-gray-700 mb-4">
                Safe motherhood is a comprehensive approach to maternal healthcare that focuses on preventing complications, detecting risks early, and ensuring both the mother and baby remain healthy from conception through the postnatal period.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It covers care before pregnancy, during pregnancy, at delivery, and after birth</li>
                <li>The focus is on prevention and early detection, not just treatment after a problem occurs</li>
                <li>It includes proper nutrition guidance, regular screening, and emotional support</li>
                <li>It aims to reduce maternal and infant complications through consistent, structured care</li>
                <li>A safe motherhood specialist treats the mother as a whole person, not just a pregnancy case</li>
              </ul>
            </div>

            {/* Section 3 — Why Safe Motherhood Care Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Safe Motherhood Care Matters for Every Pregnancy
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Many complications, such as high blood pressure or gestational diabetes, can be detected early with regular checkups</li>
                <li>Structured antenatal visits allow the doctor to track the baby's growth consistently over time</li>
                <li>Safe motherhood practices reduce the chances of emergency situations during delivery</li>
                <li>Proper guidance on nutrition and lifestyle improves outcomes for both mother and baby</li>
                <li>Emotional support during pregnancy helps reduce stress and anxiety, which can otherwise affect pregnancy health</li>
                <li>Postnatal follow-up ensures the mother's recovery is properly monitored, not just the baby's health</li>
              </ul>
            </div>

            {/* Section 4 — What a Specialist Provides */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What a Safe Motherhood Specialist Actually Provides
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pre-pregnancy counselling for couples planning to conceive, including health optimisation</li>
                <li>Regular antenatal checkups covering weight, blood pressure, and foetal heart rate</li>
                <li>Screening tests for anemia, thyroid function, diabetes, and infections</li>
                <li>Ultrasound monitoring at key stages to track the baby's growth and development</li>
                <li>Nutritional guidance tailored to each trimester's specific needs</li>
                <li>Birth planning, discussing delivery options well in advance</li>
                <li>Postnatal care, including recovery monitoring and breastfeeding support</li>
                <li>Newborn care coordination, often alongside a paediatric specialist</li>
              </ul>
            </div>

            {/* Section 5 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – A Trusted Safe Motherhood Specialist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec clinic in Gandhi Nagar, Moradabad, has built her practice around the philosophy &quot;Her Health First&quot; — a principle that aligns closely with the core values of safe motherhood care. According to her clinic's website, this philosophy places the mother's comfort, choices, and long-term wellbeing at the centre of every consultation.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialised experience in antenatal and postnatal care, including high risk and complicated pregnancy management</li>
                <li>International fellowships and gold medal credentials reflecting strong clinical expertise</li>
                <li>In-house Voluson 3D and 4D ultrasound machine, enabling detailed and accurate monitoring of the baby's development</li>
                <li>GERI time-lapse imaging incubator and AI-based fertility diagnostics available for couples undergoing IVF</li>
                <li>A gentle, patient-first approach that prioritises normal delivery wherever medically appropriate</li>
                <li>An integrated care team that maintains continuity from the first consultation through delivery and beyond</li>
                <li>On-site paediatric care, allowing newborn check-ups to happen conveniently at the same facility</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If you are searching for a safe motherhood specialist in Moradabad who blends advanced technology with a genuinely mother-centred approach, Dr. Priyanka Pachauri is a dependable choice.
              </p>
            </div>

            {/* Section 6 — Key Pillars of Safe Motherhood */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Key Pillars of Safe Motherhood Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pre-conception health check – identifying and addressing risks before pregnancy begins</li>
                <li>Consistent antenatal visits – tracking maternal and foetal health throughout pregnancy</li>
                <li>Skilled birth attendance – ensuring a trained specialist is present at delivery</li>
                <li>Emergency preparedness – access to blood banks, NICU, and surgical backup if needed</li>
                <li>Postnatal care – monitoring the mother's recovery and supporting breastfeeding</li>
                <li>Family planning guidance – helping couples plan future pregnancies safely</li>
              </ul>
            </div>

            {/* Section 7 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs Every Expecting Mother Should Know
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe headache that does not improve with medication</li>
                <li>Blurred vision or seeing flashes of light</li>
                <li>Sudden swelling in the hands, feet, or face</li>
                <li>Vaginal bleeding or spotting at any stage of pregnancy</li>
                <li>A noticeable, sudden decrease in the baby's movements</li>
                <li>Severe abdominal pain or cramping</li>
                <li>High fever or chills</li>
                <li>Difficulty breathing or chest pain</li>
                <li>Sudden weight gain of more than 1-2 kg within a week</li>
                <li>Reduced urine output or burning sensation while urinating</li>
              </ul>
            </div>

            {/* Section 8 — Common Tests */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Tests Recommended Under Safe Motherhood Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular blood pressure and blood sugar monitoring</li>
                <li>NT scan and anomaly scan to assess the baby's structural development</li>
                <li>Doppler ultrasound for evaluating blood flow when required</li>
                <li>Blood tests for anemia, thyroid function, and infection screening</li>
                <li>Urine tests to monitor for infections or protein levels</li>
                <li>Growth scans to track the baby's development through each trimester</li>
                <li>Vaccination schedule, including tetanus and other recommended vaccines</li>
                <li>Delivery planning, discussing timing and mode of delivery in advance</li>
              </ul>
            </div>

            {/* Section 9 — Normal Delivery vs C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery vs C-Section Under Safe Motherhood Guidance
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A safe motherhood approach always prioritises normal delivery when it is medically safe for both mother and baby</li>
                <li>If complications such as a low-lying placenta, breech position, or severe preeclampsia arise, a C-section becomes the safer route</li>
                <li>The final decision is typically made close to or during labour, based on real-time assessment</li>
                <li>A well-prepared clinic keeps both delivery pathways ready with trained staff on standby</li>
              </ul>
            </div>

            {/* Section 10 — Lifestyle Guidance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Guidance to Support a Safe Pregnancy
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Follow the nutrition plan recommended by your doctor for each trimester</li>
                <li>Avoid excess salt, sugar, and heavily processed food</li>
                <li>Take light, doctor-approved walks or prenatal exercises</li>
                <li>Stay well hydrated throughout the day</li>
                <li>Prioritise 7-8 hours of sleep every night</li>
                <li>Practice relaxation techniques such as meditation or gentle yoga</li>
                <li>Avoid smoking, alcohol, and any unprescribed medication</li>
                <li>Attend every antenatal appointment, even when feeling completely well</li>
                <li>Keep a record of the baby's movements daily during the third trimester</li>
              </ul>
            </div>

            {/* Section 11 — How to Choose the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Safe Motherhood Specialist
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Proven experience managing both normal and high risk pregnancies</li>
                <li>Access to advanced ultrasound and in-house diagnostic facilities</li>
                <li>A clear, structured antenatal visit schedule</li>
                <li>Willingness to explain test results and care plans in simple language</li>
                <li>Hospital tie-up with NICU and emergency backup facilities</li>
                <li>Positive feedback and consistent outcomes from previous patients</li>
              </ul>
            </div>

            {/* Section 12 — Why Continuity of Care Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Continuity of Care Makes Such a Difference
              </h2>

              <p className="text-gray-700 mb-4">
                One aspect of safe motherhood that often gets overlooked is the value of seeing the same specialist consistently throughout the pregnancy, rather than different doctors at every visit. When one doctor tracks a mother's complete history — from her very first consultation through every scan, blood test, and follow-up — subtle changes in her condition are far easier to notice early. A slight rise in blood pressure, a small drop in the baby's growth curve, or a change in mood and energy levels are all details that a familiar doctor is more likely to catch and act on quickly, compared to a new doctor reviewing the file for the first time.
              </p>

              <p className="text-gray-700 mb-4">
                This continuity also builds a level of trust that genuinely helps mothers feel comfortable asking questions, sharing concerns honestly, and following medical advice more consistently, since the relationship starts to feel less clinical and more personal over time.
              </p>

              <p className="text-gray-700 mb-4">
                Safe motherhood care also extends well beyond the delivery room itself. The weeks immediately after childbirth are just as critical as the nine months before it, yet they often receive far less attention from families focused entirely on the birth itself. A good safe motherhood specialist ensures that postnatal recovery, breastfeeding support, and the mother's emotional wellbeing are given the same seriousness as prenatal care.
              </p>

              <p className="text-gray-700">
                Recognising early signs of postpartum complications, adjusting recovery plans as needed, and simply checking in on how the mother is coping mentally are all part of a truly complete approach to safe motherhood. When families choose a specialist who treats the entire journey — from planning a pregnancy to recovering from one — as a single continuous process rather than a series of separate appointments, the outcomes tend to be noticeably better for both mother and baby.
              </p>
            </div>

            {/* Section 13 — Contact Information */}
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