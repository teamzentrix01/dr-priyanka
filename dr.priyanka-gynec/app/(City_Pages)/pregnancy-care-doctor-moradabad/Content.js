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
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PregnancyCareMoradabad() {
  const faqs = [
    {
      q: "Who is a pregnancy care doctor?",
      a: "A pregnancy care doctor, usually an obstetrician or gynaecologist providing obstetric care, monitors the health of the mother and pregnancy and provides guidance from early pregnancy through delivery and the postnatal period.",
    },
    {
      q: "When should I visit a pregnancy care doctor after a positive pregnancy test?",
      a: "It is generally appropriate to contact your doctor after confirming pregnancy so that the timing of the first assessment and recommended care can be planned according to your individual circumstances.",
    },
    {
      q: "How often should I have pregnancy checkups?",
      a: "The frequency of antenatal visits varies according to gestational age and individual health. Some pregnancies require more frequent appointments, particularly when additional monitoring is needed.",
    },
    {
      q: "Can I consult Dr. Priyanka during the middle of my pregnancy?",
      a: "Yes. You can bring your previous reports, scans, and medical history so the doctor can review your pregnancy and determine the appropriate next steps.",
    },
    {
      q: "Is high-risk pregnancy care available in Moradabad?",
      a: "High-risk pregnancies may require closer monitoring and, in some situations, specialist referral or coordinated care. The appropriate plan depends on the specific condition and pregnancy.",
    },
    {
      q: "Can I discuss my previous C-section during pregnancy consultation?",
      a: "Yes. Previous Caesarean delivery is an important part of pregnancy history and can be discussed during antenatal consultation to help determine appropriate delivery planning.",
    },
    {
      q: "Are ultrasound scans part of pregnancy care?",
      a: "Ultrasound may be recommended at different stages of pregnancy depending on gestational age and clinical requirements. Your doctor can advise which scans are appropriate for you.",
    },
    {
      q: "What should I do if I experience bleeding or severe pain during pregnancy?",
      a: "Bleeding, severe abdominal pain, fainting, difficulty breathing, or other serious symptoms require prompt medical assessment. If symptoms are severe, seek emergency medical care immediately.",
    },
    {
      q: "Can I get pregnancy care if I am planning to conceive?",
      a: "Yes. Pre-pregnancy consultation can help review your medical history, medications, existing health conditions, lifestyle, and other factors that may be relevant before conception.",
    },
    {
      q: "Where is Dr. Priyanka Gynaec located?",
      a: "Dr. Priyanka Gynaec is located at A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
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
                Pregnancy Care Doctor In Moradabad
              </h1>

              <p className="text-gray-700 mb-4">
                Pregnancy is an important stage of a woman's life that requires regular medical care, timely checkups, appropriate investigations, and personalised guidance. Choosing the right Pregnancy Care Doctor In Moradabad can help you understand the changes happening during pregnancy, monitor maternal and fetal health, identify potential concerns early, and prepare for delivery and recovery.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec provides pregnancy and antenatal care in Moradabad for women at different stages of pregnancy. Care may include pregnancy confirmation, routine antenatal checkups, screening and diagnostic tests, management of pregnancy-related conditions, delivery planning, and postnatal follow-up.
              </p>

              <p className="text-gray-700">
                Every pregnancy is different. The frequency of appointments, investigations, treatment, and delivery planning depends on the mother's health, pregnancy history, gestational age, and individual medical needs.
              </p>
            </div>

            {/* Section 2 — Why Choose a Pregnancy Care Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose a Pregnancy Care Doctor In Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Regular pregnancy care helps monitor both mother and baby throughout pregnancy. A pregnancy care consultation may help with:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Early pregnancy assessment and confirmation</li>
                <li>Routine antenatal checkups</li>
                <li>Monitoring blood pressure, weight, and other maternal health parameters</li>
                <li>Assessment of fetal growth and wellbeing</li>
                <li>Recommended blood tests and pregnancy screening</li>
                <li>Ultrasound and other investigations when medically indicated</li>
                <li>Management of common pregnancy-related concerns</li>
                <li>Identification and monitoring of high-risk pregnancy factors</li>
                <li>Birth and delivery planning</li>
                <li>Postnatal care after delivery</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The goal is to provide appropriate care at every stage while helping the mother understand her pregnancy and make informed decisions with her doctor.
              </p>
            </div>

            {/* Section 3 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides gynaecology and obstetric care in Moradabad, including pregnancy-related consultations and antenatal care.
              </p>

              <p className="text-gray-700 mb-4">
                Her approach focuses on understanding each patient's medical history, current concerns, pregnancy stage, and individual requirements before recommending investigations or treatment.
              </p>

              <p className="text-gray-700">
                Pregnancy care may involve coordination with other medical specialists when a pregnancy requires additional evaluation or management.
              </p>
            </div>

            {/* Section 4 — What Does Pregnancy Care Include */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Does Pregnancy Care Include?
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnancy care is not limited to one appointment. It generally involves ongoing monitoring from early pregnancy through delivery and the postnatal period.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the pregnancy, care may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Pregnancy confirmation and early assessment</li>
                <li>Calculation of gestational age and expected delivery date</li>
                <li>Maternal health monitoring</li>
                <li>Fetal growth and wellbeing assessment</li>
                <li>Recommended antenatal investigations</li>
                <li>Ultrasound examinations when indicated</li>
                <li>Screening for pregnancy-related conditions</li>
                <li>Nutrition and lifestyle guidance</li>
                <li>Preparation for labour and delivery</li>
                <li>Postnatal follow-up</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The exact care plan is individualised according to the mother's health and pregnancy requirements.
              </p>
            </div>

            {/* Section 5 — First Trimester Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Care During the First Trimester
              </h2>

              <p className="text-gray-700 mb-4">
                The first trimester covers the early weeks of pregnancy and is an important time for establishing appropriate antenatal care.
              </p>

              <p className="text-gray-700 mb-4">
                During an early pregnancy consultation, your doctor may assess:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Pregnancy confirmation</li>
                <li>Gestational age</li>
                <li>Previous pregnancy and medical history</li>
                <li>Current medications and supplements</li>
                <li>Existing medical conditions</li>
                <li>Early pregnancy symptoms</li>
                <li>Risk factors that may require closer monitoring</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Your doctor may also recommend blood tests, urine tests, ultrasound, or other investigations depending on your individual situation.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">
                Common First-Trimester Concerns
              </h3>
              <p className="text-gray-700 mb-2">
                Women may experience:
              </p>
              <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                <li>Nausea or vomiting</li>
                <li>Fatigue</li>
                <li>Breast tenderness</li>
                <li>Abdominal discomfort</li>
                <li>Changes in appetite</li>
                <li>Vaginal spotting or bleeding</li>
              </ul>
              <p className="text-gray-700">
                Heavy bleeding, severe abdominal pain, fainting, or other concerning symptoms require prompt medical assessment.
              </p>
            </div>

            {/* Section 6 — Second Trimester Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Care During the Second Trimester
              </h2>

              <p className="text-gray-700 mb-4">
                The second trimester is generally a period of continued fetal growth and maternal changes.
              </p>

              <p className="text-gray-700 mb-4">
                Antenatal visits may include monitoring of:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Blood pressure</li>
                <li>Maternal weight</li>
                <li>Pregnancy symptoms</li>
                <li>Fetal growth</li>
                <li>Maternal wellbeing</li>
                <li>Relevant laboratory results</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Depending on gestational age and clinical requirements, your doctor may recommend ultrasound examinations and screening tests.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">
                Important Second-Trimester Care
              </h3>
              <p className="text-gray-700 mb-2">
                Pregnancy care may include guidance regarding:
              </p>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li>Nutrition</li>
                <li>Physical activity appropriate for pregnancy</li>
                <li>Supplements</li>
                <li>Vaccination recommendations</li>
                <li>Gestational diabetes screening</li>
                <li>Anemia screening</li>
                <li>Fetal development and pregnancy milestones</li>
              </ul>
            </div>

            {/* Section 7 — Third Trimester Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Care During the Third Trimester
              </h2>

              <p className="text-gray-700 mb-4">
                As delivery approaches, antenatal visits usually become more frequent.
              </p>

              <p className="text-gray-700 mb-4">
                Third-trimester care may focus on:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Maternal blood pressure and health</li>
                <li>Fetal growth</li>
                <li>Fetal position</li>
                <li>Symptoms and pregnancy complications</li>
                <li>Recommended ultrasound or Doppler assessment when indicated</li>
                <li>Birth planning</li>
                <li>Preparation for labour</li>
                <li>Planning for the postnatal period</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Your doctor will advise how frequently you should attend appointments based on your pregnancy.
              </p>
            </div>

            {/* Section 8 — High-Risk Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Care In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Some pregnancies require closer monitoring because of maternal health conditions, previous pregnancy complications, or factors affecting the pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                High-risk pregnancy may be associated with conditions such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Gestational diabetes</li>
                <li>High blood pressure during pregnancy</li>
                <li>Previous Caesarean section</li>
                <li>Previous pregnancy complications</li>
                <li>Multiple pregnancy such as twins</li>
                <li>Certain maternal medical conditions</li>
                <li>Certain pregnancy-related complications</li>
              </ul>

              <p className="text-gray-700 mt-4">
                High-risk pregnancy does not mean that complications will definitely occur. It means that the pregnancy may require additional monitoring, investigations, or specialist care.
              </p>

              <p className="text-gray-700">
                When required, appropriate referrals and coordination with other specialists can form part of the pregnancy care plan.
              </p>
            </div>

            {/* Section 9 — Care After Previous C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Care After a Previous C-Section
              </h2>

              <p className="text-gray-700 mb-4">
                Women who have had a previous Caesarean section may have questions about their current pregnancy and delivery options.
              </p>

              <p className="text-gray-700 mb-4">
                During consultation, the doctor may review:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Previous pregnancy records</li>
                <li>Reason for the previous C-section</li>
                <li>Previous operative details when available</li>
                <li>Current pregnancy health</li>
                <li>Placental location</li>
                <li>Maternal and fetal condition</li>
                <li>Individual factors affecting delivery planning</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The appropriate mode of delivery should be decided based on the individual pregnancy and medical circumstances.
              </p>
            </div>

            {/* Section 10 — Twin or Multiple Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Twin or Multiple Pregnancy Care
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnancy with twins or more babies generally requires closer monitoring than a singleton pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                Care may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>More frequent antenatal assessment</li>
                <li>Monitoring fetal growth</li>
                <li>Assessment of maternal health</li>
                <li>Appropriate ultrasound examinations</li>
                <li>Monitoring for pregnancy-related complications</li>
                <li>Delivery planning according to the pregnancy</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The recommended monitoring schedule depends on the type of multiple pregnancy and individual clinical findings.
              </p>
            </div>

            {/* Section 11 — Pregnancy-Related Conditions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy-Related Conditions That May Need Monitoring
              </h2>

              <p className="text-gray-700 mb-4">
                During pregnancy, your doctor may assess or manage conditions such as:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gestational Diabetes
                  </h3>
                  <p className="text-gray-700">
                    Gestational diabetes is diabetes first diagnosed during pregnancy. Appropriate screening and follow-up can help manage blood glucose levels and reduce pregnancy-related risks.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    High Blood Pressure During Pregnancy
                  </h3>
                  <p className="text-gray-700">
                    Blood pressure is routinely monitored during antenatal visits. Persistent high blood pressure or symptoms such as severe headache, visual disturbances, sudden swelling, or upper abdominal pain require medical assessment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Anemia During Pregnancy
                  </h3>
                  <p className="text-gray-700">
                    Anemia is common during pregnancy and may be evaluated through blood tests. Treatment depends on the cause and severity.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pregnancy-Related Bleeding
                  </h3>
                  <p className="text-gray-700">
                    Bleeding during pregnancy can have different causes depending on the stage of pregnancy. Any significant or unexplained bleeding should be assessed by a healthcare professional.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 12 — Ultrasound and Pregnancy Monitoring */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ultrasound and Pregnancy Monitoring
              </h2>

              <p className="text-gray-700 mb-4">
                Ultrasound examinations can provide information about pregnancy development, fetal growth, anatomy, placenta, and other findings depending on the stage of pregnancy and type of scan.
              </p>

              <p className="text-gray-700 mb-4">
                Your doctor may recommend different ultrasound examinations when clinically appropriate.
              </p>

              <p className="text-gray-700 mb-4">
                Additional monitoring such as Doppler assessment or fetal heart rate monitoring may also be recommended in selected pregnancies.
              </p>

              <p className="text-gray-700">
                Not every woman requires the same scans or the same frequency of monitoring. Investigations should be based on gestational age and individual medical requirements.
              </p>
            </div>

            {/* Section 13 — Antenatal Care and Guidance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Antenatal Care and Pregnancy Guidance
              </h2>

              <p className="text-gray-700 mb-4">
                Antenatal care is also an opportunity to discuss everyday pregnancy concerns.
              </p>

              <p className="text-gray-700 mb-4">
                Your consultation may include guidance about:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balanced nutrition</li>
                <li>Appropriate physical activity</li>
                <li>Medicines and supplements</li>
                <li>Sleep and rest</li>
                <li>Travel during pregnancy</li>
                <li>Work and daily activities</li>
                <li>Warning signs requiring medical attention</li>
                <li>Preparing for delivery</li>
                <li>Breastfeeding preparation</li>
                <li>Postnatal recovery</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Do not start or stop medicines or supplements during pregnancy without discussing them with your doctor.
              </p>
            </div>

            {/* Section 14 — Preparing for Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                Delivery planning is an important part of pregnancy care.
              </p>

              <p className="text-gray-700 mb-4">
                During the later stages of pregnancy, discussions may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Expected delivery timing</li>
                <li>Baby's position</li>
                <li>Maternal and fetal health</li>
                <li>Previous delivery history</li>
                <li>Vaginal delivery considerations</li>
                <li>Caesarean delivery when medically indicated</li>
                <li>When to contact the hospital or doctor</li>
                <li>What to carry for admission</li>
                <li>Post-delivery care</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The final delivery plan may change if the mother's or baby's condition changes.
              </p>
            </div>

            {/* Section 15 — Normal and Caesarean Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery and Caesarean Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                A vaginal delivery may be appropriate for many women, depending on their individual pregnancy and medical circumstances.
              </p>

              <p className="text-gray-700">
                A Caesarean section may be recommended when vaginal delivery would be unsafe or when there is a medical indication. The decision should be based on the health and safety of the mother and baby rather than on a fixed delivery plan.
              </p>
            </div>

            {/* Section 16 — Postnatal Care After Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postnatal Care After Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnancy care continues after the baby is born.
              </p>

              <p className="text-gray-700 mb-4">
                Postnatal follow-up may address:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Recovery after vaginal delivery or C-section</li>
                <li>Bleeding after delivery</li>
                <li>Pain and wound care</li>
                <li>Breastfeeding concerns</li>
                <li>Maternal nutrition</li>
                <li>Blood pressure or other medical conditions</li>
                <li>Emotional wellbeing</li>
                <li>Contraception and family planning</li>
                <li>Follow-up after pregnancy complications</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If you experience severe bleeding, difficulty breathing, chest pain, severe headache, seizures, high fever, severe abdominal pain, or thoughts of harming yourself or your baby, seek urgent medical care.
              </p>
            </div>

            {/* Section 17 — When to Consult a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Consult a Pregnancy Care Doctor?
              </h2>

              <p className="text-gray-700 mb-4">
                You can consider a pregnancy consultation if:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>You are planning to become pregnant</li>
                <li>Your pregnancy test is positive</li>
                <li>You have missed your period and suspect pregnancy</li>
                <li>You have concerns during early pregnancy</li>
                <li>You need routine antenatal care</li>
                <li>You have a previous pregnancy complication</li>
                <li>You have had a previous C-section</li>
                <li>You have been diagnosed with gestational diabetes or high blood pressure</li>
                <li>You are expecting twins or multiple babies</li>
                <li>You want a second opinion about your pregnancy care</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Early consultation can help establish an appropriate pregnancy care plan.
              </p>
            </div>

            {/* Section 18 — What to Bring to Your Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Bring to Your Pregnancy Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                For your first appointment, consider bringing:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Previous medical records</li>
                <li>Previous pregnancy or delivery records</li>
                <li>Ultrasound reports</li>
                <li>Blood test reports</li>
                <li>Your last menstrual period date, if known</li>
                <li>Current medicine and supplement details</li>
                <li>Information about allergies</li>
                <li>Details of previous surgeries</li>
                <li>Any questions or symptoms you want to discuss</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Keeping your pregnancy reports organised can also make follow-up consultations easier.
              </p>
            </div>

            {/* Section 19 — Questions to Ask Your Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions You Can Ask Your Pregnancy Care Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                It is completely appropriate to ask questions during antenatal appointments.
              </p>

              <p className="text-gray-700 mb-4">
                You may want to discuss:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Is my pregnancy progressing normally?</li>
                <li>Which tests or scans are recommended at this stage?</li>
                <li>What symptoms should I watch for?</li>
                <li>How frequently should I attend appointments?</li>
                <li>What foods or activities should I avoid?</li>
                <li>Do I need additional monitoring?</li>
                <li>What are my delivery options?</li>
                <li>When should I contact the doctor urgently?</li>
                <li>What should I expect after delivery?</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Understanding your care plan can help you participate more confidently in decisions about your pregnancy.
              </p>
            </div>

            {/* Section 20 — Clinic Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Care Doctor In Moradabad – Dr. Priyanka Gynaec
              </h2>

              <p className="text-gray-700 mb-4">
                If you are looking for a Pregnancy Care Doctor In Moradabad, Dr. Priyanka Gynaec provides pregnancy and antenatal consultations based on the individual needs of the mother and pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                The focus is on appropriate monitoring, clear communication, early identification of concerns, and planning care according to medical requirements.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Clinic Location
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, Near Old Roadways, Gandhi Nagar,
                        Moradabad, Uttar Pradesh – 244001
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
                </div>

                <p className="text-gray-700 mb-4">
                  For urgent or emergency pregnancy symptoms, seek immediate medical attention rather than waiting for a routine appointment or WhatsApp response.
                </p>

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

            {/* Section 21 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
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