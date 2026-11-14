
import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  HeartPulse,
  ShieldCheck,
  Activity,
  ClipboardList,
  Stethoscope,
  Baby,
  CalendarCheck,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function HighRiskPregnancyDoctor() {
  const faqs = [
    {
      q: "What does high-risk pregnancy mean?",
      a: "It means the mother or baby has a higher chance of complications, so closer monitoring and care are needed. It does not mean something will certainly go wrong.",
    },
    {
      q: "Can I have a normal delivery in a high-risk pregnancy?",
      a: "Often yes, depending on your medical condition and how the pregnancy progresses. Your doctor will advise the safest method of delivery.",
    },
    {
      q: "Is pregnancy after 35 high-risk?",
      a: "Pregnancy after 35 can be considered higher risk, mainly because of a greater chance of conditions such as gestational diabetes and high blood pressure. Regular antenatal care helps monitor and manage these risks.",
    },
    {
      q: "How often will I need checkups?",
      a: "High-risk pregnancies generally need more frequent checkups than routine pregnancies. Some women may need visits every two to three weeks and weekly near the due date. Your doctor will set an individual schedule.",
    },
    {
      q: "Can gestational diabetes be controlled?",
      a: "Yes. Diet, suitable physical activity, blood sugar monitoring and medicines when needed can help control gestational diabetes.",
    },
    {
      q: "What are signs of pre-eclampsia?",
      a: "Warning signs can include severe headache, blurred vision, sudden swelling of the face or hands and upper abdominal pain, particularly with high blood pressure. Seek medical help immediately if these occur.",
    },
    {
      q: "Are twin pregnancies high-risk?",
      a: "Twin pregnancies need closer monitoring because certain complications are more likely. However, many twin pregnancies result in healthy babies with appropriate antenatal care.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or email drpriyankagynaec@gmail.com to enquire about an appointment.",
    },
  ];

  const riskFactors = [
    {
      title: "Maternal Age",
      description:
        "Pregnancy below 18 or above 35 years may need additional assessment and monitoring.",
    },
    {
      title: "Existing Medical Conditions",
      description:
        "Diabetes, high blood pressure, thyroid disease, heart disease, kidney disease, epilepsy, asthma and autoimmune conditions may affect pregnancy.",
    },
    {
      title: "Pregnancy-Related Conditions",
      description:
        "Gestational diabetes, pre-eclampsia, anaemia, low-lying placenta, abnormal amniotic fluid levels or poor baby growth can increase pregnancy risks.",
    },
    {
      title: "Multiple Pregnancy",
      description:
        "Pregnancy with twins or more babies usually requires additional scans and closer antenatal follow-up.",
    },
    {
      title: "Previous Pregnancy History",
      description:
        "Previous miscarriages, stillbirth, preterm birth, caesarean delivery or pre-eclampsia may influence the care plan.",
    },
    {
      title: "Fertility Treatment",
      description:
        "Pregnancy after IVF or other assisted reproductive methods may require specific monitoring based on individual circumstances.",
    },
    {
      title: "Lifestyle Factors",
      description:
        "Smoking, alcohol, substance use, severe underweight or obesity can affect maternal and fetal health.",
    },
    {
      title: "Infections",
      description:
        "Certain infections during pregnancy can affect the mother or baby and may need prompt diagnosis and treatment.",
    },
    {
      title: "Blood Group Issues",
      description:
        "An Rh-negative blood group in the mother may require specific testing and preventive care during pregnancy.",
    },
  ];

  const benefitsOfSpecialistCare = [
    "Recognises pregnancy risks early and acts promptly",
    "Recommends appropriate tests at the right time",
    "Coordinates care for conditions such as diabetes or thyroid disease",
    "Monitors the baby's growth and wellbeing with regular scans",
    "Plans the safest time and method of delivery",
    "Explains every step in a calm and clear way",
  ];

  const monitoringSteps = [
    {
      title: "More Frequent Visits",
      description:
        "You may be seen every two to three weeks during the early and middle parts of pregnancy, with weekly visits towards the end when required.",
    },
    {
      title: "Detailed Ultrasound",
      description:
        "Scans help track the baby's growth, amniotic fluid levels, placenta position and anatomy. The clinic offers 3D and 4D ultrasound facilities when clearer imaging is helpful.",
    },
    {
      title: "Blood Tests",
      description:
        "Haemoglobin, blood sugar, thyroid function and other blood tests may be recommended according to your health history and pregnancy stage.",
    },
    {
      title: "Blood Pressure and Urine Checks",
      description:
        "Regular monitoring can help identify high blood pressure and signs associated with pre-eclampsia.",
    },
    {
      title: "Glucose Tolerance Testing",
      description:
        "This test may be advised to screen for gestational diabetes during pregnancy.",
    },
    {
      title: "Fetal Movement Monitoring",
      description:
        "You may be asked to pay attention to your baby's daily movements and report any noticeable reduction.",
    },
    {
      title: "Medicine Review",
      description:
        "Your current medicines and supplements are reviewed to check their suitability during pregnancy.",
    },
  ];

  const conditionManagement = [
    {
      title: "Gestational Diabetes",
      description:
        "Management may include a suitable diet, physical activity, regular blood sugar monitoring and medicines when needed. Good glucose control helps reduce risks for both mother and baby.",
    },
    {
      title: "High Blood Pressure and Pre-eclampsia",
      description:
        "Regular blood pressure and urine checks are important. Medicines may be prescribed when advised, and timely delivery may be needed if the condition worsens.",
    },
    {
      title: "Thyroid Disorders",
      description:
        "Thyroid hormone levels are monitored and medicines adjusted when necessary because thyroid balance is important for the baby's development.",
    },
    {
      title: "Anaemia",
      description:
        "Treatment may include iron supplements, dietary changes and further evaluation when anaemia is severe.",
    },
    {
      title: "Twin Pregnancy",
      description:
        "More frequent scans and antenatal visits help monitor both babies and identify signs of possible preterm labour.",
    },
    {
      title: "Previous Miscarriage or Preterm Birth",
      description:
        "Your doctor may assess your previous pregnancy history and recommend preventive measures or closer follow-up where appropriate.",
    },
    {
      title: "Low-Lying Placenta",
      description:
        "Follow-up scans help assess the placenta position and support safe delivery planning.",
    },
    {
      title: "Rh-Negative Blood Group",
      description:
        "Specific injections may be advised at appropriate stages to reduce the risk of Rh-related complications in the current or future pregnancies.",
    },
  ];

  const nutritionTips = [
    "Take folic acid, iron and calcium as prescribed",
    "Eat balanced meals with dal, vegetables, fruit, dairy and protein",
    "Follow an individual diet plan if you have diabetes or high blood pressure",
    "Stay hydrated throughout the day",
    "Walk or exercise only as advised by your doctor",
    "Rest well and get enough sleep",
    "Avoid tobacco, alcohol and unprescribed medicines",
    "Take medicines for existing conditions exactly as directed",
    "Keep all follow-up appointments and scan dates",
  ];

  const warningSigns = [
    "Vaginal bleeding or leaking of fluid",
    "Severe abdominal pain or regular tightening before term",
    "Reduced or absent baby movements",
    "Severe headache, blurred vision or sudden swelling of the face and hands",
    "High fever or burning during urination",
    "Persistent vomiting",
    "Fainting, breathlessness or chest pain",
    "Very high blood sugar or blood pressure readings",
  ];

  const emotionalWellbeingTips = [
    "Ask your doctor to explain test results in plain language",
    "Write down your questions before each appointment",
    "Bring a family member to appointments if you feel more comfortable",
    "Share your worries with someone you trust",
    "Limit searching for alarming pregnancy stories online",
    "Tell your doctor if you feel persistently anxious or low",
  ];

  const reasonsToChoose = [
    "A doctor who listens patiently and explains clearly",
    "Focus on antenatal care and high-risk pregnancies",
    "Structured screenings through every trimester",
    "3D and 4D ultrasound facilities",
    "Support for normal delivery where medically suitable",
    "Paediatric and newborn care available",
    "Continuity, with a team that remembers your history",
    "A private, respectful setting",
  ];

  const firstVisitItems = [
    "All previous medical records, scans and prescriptions",
    "A list of current medicines and supplements",
    "Details of past pregnancies, miscarriages or deliveries",
    "Home blood pressure or blood sugar readings, if you take them",
    "Written questions and concerns",
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          <div className="order-1 min-w-0 space-y-10">
            {/* Introduction */}
            <section className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FCEEF2] px-4 py-2 text-sm font-semibold text-[#8F1738]">
                <HeartPulse size={17} />
                High-Risk Pregnancy Care in Moradabad
              </div>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                High Risk Pregnancy Doctor Near Civil Lines, Moradabad: Close
                Monitoring for a Safer Pregnancy
              </h1>

              <p className="leading-8 text-gray-600">
                Being told that your pregnancy is &quot;high-risk&quot; can
                feel frightening. Many women immediately fear the worst. In
                reality, the term means that you and your baby need closer
                attention than usual, so that any problem can be identified and
                managed early.
              </p>

              <p className="leading-8 text-gray-600">
                With appropriate care and monitoring, many women with
                high-risk pregnancies deliver healthy babies. If you are
                looking for a high risk pregnancy doctor near Civil Lines,
                Moradabad, Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers
                structured antenatal care with a strong focus on high-risk
                pregnancies.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#FCEEF2]"
                >
                  WhatsApp Us
                </a>
              </div>
            </section>

            {/* Website Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Website Overview: Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                The clinic&apos;s website describes a women&apos;s health and
                fertility centre guided by the philosophy &quot;Her Health
                First.&quot; Dr. Priyanka Pachauri is presented as a
                gynaecologist in Moradabad specialising in antenatal and
                postnatal care, high-risk pregnancies, laparoscopic surgery
                and menstrual disorder treatment.
              </p>

              <p className="leading-8 text-gray-600">
                The listed services include pregnancy and birthing care,
                antenatal services, normal delivery and paediatric care.
                Facilities include 3D and 4D ultrasound. One of the
                clinic&apos;s blog articles describes a trimester-by-trimester
                guide covering ultrasound scans, nutrition, high-risk
                screening and labour preparation. The site stresses listening
                first and continuity of care.
              </p>
            </section>

            {/* What Is High-Risk Pregnancy */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Is a High-Risk Pregnancy?
              </h2>

              <p className="leading-8 text-gray-600">
                A high-risk pregnancy is one in which the mother, the baby or
                both have a higher chance of complications. It does not mean
                that something will definitely go wrong. It means closer
                follow-up, more frequent tests and a carefully planned
                approach to delivery may be needed.
              </p>

              <p className="leading-8 text-gray-600">
                Risk can exist before pregnancy, appear during pregnancy or
                arise because of age or previous medical and pregnancy
                history. The care plan depends on your individual
                circumstances.
              </p>

              <div className="rounded-2xl border border-[#E8C5D0] bg-[#FCEEF2] p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={25}
                    className="mt-1 shrink-0 text-[#8F1738]"
                  />
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      High-Risk Does Not Mean Something Will Go Wrong
                    </h3>
                    <p className="leading-7 text-gray-700">
                      The purpose of closer monitoring is to identify possible
                      problems early, manage existing conditions and plan
                      appropriate care for both mother and baby.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Risk Factors */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Common Causes and Risk Factors
              </h2>

              <p className="leading-8 text-gray-600">
                Several medical, pregnancy-related and lifestyle factors can
                increase the need for closer antenatal monitoring.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {riskFactors.map((factor) => (
                  <article
                    key={factor.title}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-[#FCEEF2] p-3 text-[#8F1738]">
                      <Activity size={21} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      {factor.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {factor.description}
                    </p>
                  </article>
                ))}
              </div>

              <p className="rounded-xl bg-gray-50 p-5 leading-8 text-gray-700">
                Having one risk factor does not automatically mean that every
                pregnancy will have complications. Your doctor assesses your
                complete medical history, current health and pregnancy
                progress before deciding on the monitoring plan.
              </p>
            </section>

            {/* Why Specialist Care */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Specialist Care Matters
              </h2>

              <p className="leading-8 text-gray-600">
                High-risk pregnancies benefit from careful assessment and
                planned follow-up. A doctor managing your pregnancy may:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {benefitsOfSpecialistCare.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <ShieldCheck
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="leading-7 text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Early attention and regular follow-up can help reduce the
                likelihood of complications such as premature birth, poor
                fetal growth and emergency situations.
              </p>
            </section>

            {/* Monitoring */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                How a High-Risk Pregnancy Is Monitored
              </h2>

              <p className="leading-8 text-gray-600">
                Every pregnancy is different. Your doctor creates a monitoring
                schedule based on your medical history, test results, pregnancy
                stage and the health of your baby.
              </p>

              <div className="space-y-4">
                {monitoringSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-xl border border-gray-200 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8F1738] font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                        {step.title}
                      </h3>
                      <p className="leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Managing Conditions */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Managing Specific High-Risk Conditions
              </h2>

              <p className="leading-8 text-gray-600">
                Some conditions need specific treatment and monitoring during
                pregnancy. Your doctor may recommend an individual care plan
                based on your reports and overall health.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {conditionManagement.map((condition) => (
                  <article
                    key={condition.title}
                    className="rounded-xl border border-gray-200 p-5 shadow-sm"
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-[#FCEEF2] p-3 text-[#8F1738]">
                      <Stethoscope size={21} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      {condition.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {condition.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <p className="font-semibold leading-7 text-red-800">
                  Treatment is chosen by your doctor after reviewing your
                  reports and examining your condition. Do not start, stop or
                  change medicines on your own during pregnancy.
                </p>
              </div>
            </section>

            {/* Nutrition and Lifestyle */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Nutrition and Lifestyle Support
              </h2>

              <p className="leading-8 text-gray-600">
                Healthy daily habits can support maternal health during
                pregnancy. Your food, activity and supplement plan should
                reflect your medical needs, especially if you have diabetes,
                high blood pressure or another existing condition.
              </p>

              <div className="rounded-2xl bg-gray-50 p-6">
                <ul className="space-y-4">
                  {nutritionTips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <HeartPulse
                        size={19}
                        className="mt-1 shrink-0 text-[#8F1738]"
                      />
                      <span className="leading-7 text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Warning Signs */}
            <section className="space-y-5 rounded-2xl border border-red-200 bg-red-50 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-100 p-2 text-red-700">
                  <HeartPulse size={22} />
                </div>
                <h2 className="text-xl font-bold text-red-800">
                  Warning Signs: Seek Help Immediately
                </h2>
              </div>

              <p className="leading-7 text-gray-700">
                During a high-risk pregnancy, it is important to recognise
                warning signs and seek medical attention without delay if you
                notice:
              </p>

              <ul className="space-y-3">
                {warningSigns.map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                    <span className="leading-7">{sign}</span>
                  </li>
                ))}
              </ul>

              <p className="font-semibold leading-7 text-red-800">
                Do not wait for your next scheduled appointment if you
                experience these symptoms. Contact your doctor or go to the
                nearest hospital for urgent assessment.
              </p>
            </section>

            {/* Delivery Planning */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Planning the Delivery
              </h2>

              <p className="leading-8 text-gray-600">
                Delivery planning in a high-risk pregnancy is individual.
                Many women can still have a normal vaginal delivery with
                appropriate monitoring. In some cases, induction of labour or
                a caesarean may be safer for the mother or baby.
              </p>

              <p className="leading-8 text-gray-600">
                Your doctor discusses the timing, method of delivery, pain
                relief options and emergency arrangements in advance, so that
                decisions can be made with preparation rather than in a hurry.
              </p>

              <div className="rounded-2xl bg-[#FCEEF2] p-6">
                <div className="flex items-start gap-3">
                  <Baby
                    size={25}
                    className="mt-1 shrink-0 text-[#8F1738]"
                  />
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      Normal Delivery Where Medically Suitable
                    </h3>
                    <p className="leading-7 text-gray-700">
                      The clinic emphasises safe motherhood and supports
                      normal vaginal delivery where it is medically suitable.
                      The safest delivery method depends on your health,
                      pregnancy progress and your baby&apos;s condition.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Postnatal and Newborn Care */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Postnatal and Newborn Care
              </h2>

              <p className="leading-8 text-gray-600">
                Care continues after birth. Mothers who experienced conditions
                such as gestational diabetes or high blood pressure may need
                follow-up to check whether blood sugar and blood pressure
                return to normal.
              </p>

              <p className="leading-8 text-gray-600">
                Newborns may also need additional observation depending on the
                pregnancy and delivery. The clinic offers paediatric
                consultations, newborn care and vaccinations, helping mothers
                and babies receive follow-up care in one place.
              </p>
            </section>

            {/* Emotional Wellbeing */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Emotional Wellbeing During a High-Risk Pregnancy
              </h2>

              <p className="leading-8 text-gray-600">
                Anxiety is common when a pregnancy needs extra monitoring.
                Having clear information and support can help you feel more
                prepared during appointments and between visits.
              </p>

              <div className="space-y-3">
                {emotionalWellbeingTips.map((tip) => (
                  <div
                    key={tip}
                    className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
                  >
                    <HeartPulse
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="leading-7 text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                High-risk pregnancy care requires regular communication,
                careful monitoring and a clear plan for each stage. Dr.
                Priyanka Gynaec presents a women's healthcare practice with
                antenatal services and facilities for pregnancy care.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {reasonsToChoose.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
                  >
                    <Award
                      size={20}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="leading-7 text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* First Visit */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What to Bring to Your First Visit
              </h2>

              <p className="leading-8 text-gray-600">
                Bringing your previous reports and medical details helps the
                doctor understand your pregnancy history and plan the next
                steps.
              </p>

              <div className="rounded-2xl border border-gray-200 p-6">
                <ul className="space-y-4">
                  {firstVisitItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ClipboardList
                        size={19}
                        className="mt-1 shrink-0 text-[#8F1738]"
                      />
                      <span className="leading-7 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="space-y-5 rounded-2xl bg-[#F8F4F6] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Book a High-Risk Pregnancy Consultation
              </h2>

              <p className="leading-8 text-gray-700">
                If you have been advised to undergo high-risk pregnancy
                monitoring, or have an existing medical condition, book a
                consultation with Dr. Priyanka Pachauri to discuss your
                antenatal care plan.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={18} />
                  Call for Appointment
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  WhatsApp Now
                </a>
              </div>
            </section>

            {/* Location and Contact */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Location and Contact
              </h2>

              <p className="leading-8 text-gray-600">
                Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
                Nagar, Moradabad, Uttar Pradesh 244001. The clinic is
                accessible to women from Civil Lines and nearby areas.
              </p>

              <p className="leading-8 text-gray-600">
                Call +91 90797 65578, message on WhatsApp at +91 89796 70705,
                or email drpriyankagynaec@gmail.com. If you are looking for a
                high risk pregnancy doctor near Civil Lines, Moradabad, book a
                consultation as early as possible so that a monitoring plan
                can be discussed.
              </p>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-xl font-bold text-[#74122E]">
                  Dr. Priyanka Pachauri
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="leading-7 text-gray-600">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                      Pradesh – 244001
                    </p>
                  </div>

                  <a
                    href="tel:+919079765578"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#8F1738]"
                  >
                    <Phone size={19} className="text-[#8F1738]" />
                    +91 90797 65578
                  </a>

                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="flex items-center gap-3 break-all text-gray-600 hover:text-[#8F1738]"
                  >
                    <Mail size={19} className="shrink-0 text-[#8F1738]" />
                    drpriyankagynaec@gmail.com
                  </a>

                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 break-all text-gray-600 hover:text-[#8F1738]"
                  >
                    <Globe size={19} className="shrink-0 text-[#8F1738]" />
                    www.gynaecologistmoradabad.com
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+919079765578"
                    className="rounded-lg bg-[#8F1738] px-5 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                  >
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[#8F1738] px-5 py-3 font-semibold text-[#8F1738] transition hover:bg-[#FCEEF2]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      {faq.q}
                    </h3>
                    <p className="leading-7 text-gray-600">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="rounded-2xl bg-[#8F1738] p-7 text-center text-white sm:p-9">
              <h2 className="text-2xl font-bold">
                Give Your Pregnancy the Attention It Deserves
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/90">
                Closer monitoring and a personalised care plan can help you
                navigate a high-risk pregnancy with better preparation.
                Consult Dr. Priyanka Pachauri at Dr. Priyanka Gynaec near Civil
                Lines, Moradabad.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-gray-100"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-[#74122E]">
                  Need Pregnancy Care?
                </h3>

                <p className="mb-5 leading-7 text-gray-600">
                  Contact the clinic to enquire about antenatal consultations
                  and high-risk pregnancy monitoring.
                </p>

                <a
                  href="tel:+919079765578"
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#8F1738] px-5 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={18} />
                  +91 90797 65578
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-lg border border-[#8F1738] px-5 py-3 font-semibold text-[#8F1738] transition hover:bg-[#FCEEF2]"
                >
                  WhatsApp Appointment
                </a>
              </div>

              <div className="rounded-2xl bg-[#F8F4F6] p-6">
                <h3 className="mb-4 text-lg font-bold text-[#74122E]">
                  Quick Links
                </h3>

                <div className="space-y-3">
                  <Link
                    href="/services"
                    className="block text-gray-700 transition hover:text-[#8F1738]"
                  >
                    Our Services
                  </Link>

                  <Link
                    href="/contact"
                    className="block text-gray-700 transition hover:text-[#8F1738]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
