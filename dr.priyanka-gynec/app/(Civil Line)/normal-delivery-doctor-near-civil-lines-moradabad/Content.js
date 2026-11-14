
import Link from "next/link";
import {
  Activity,
  Award,
  Baby,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  Heart,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Utensils,
  Waves,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function NormalDeliveryDoctor() {
  const faqs = [
    {
      q: "Is normal delivery safer than a caesarean?",
      a: "For healthy pregnancies, normal delivery usually means faster recovery and fewer surgical risks. However, a caesarean is safer in certain situations, and your doctor will advise accordingly.",
    },
    {
      q: "Can a first-time mother have a normal delivery?",
      a: "Yes. Many first-time mothers deliver normally, although labour may take longer than in subsequent pregnancies.",
    },
    {
      q: "Does the clinic support normal delivery?",
      a: "Yes. The clinic's website lists normal delivery care that prioritises natural vaginal delivery with gentle support when medically suitable.",
    },
    {
      q: "How can I increase my chances of a normal delivery?",
      a: "Attend regular antenatal visits, eat well, stay active with your doctor's approval, manage stress and discuss your birth plan early.",
    },
    {
      q: "Can I have a normal delivery after a caesarean?",
      a: "Some women can, depending on the reason for the earlier caesarean and their current health. Your doctor will assess your individual situation.",
    },
    {
      q: "How long does normal labour last?",
      a: "It varies widely. First labours are often longer than later ones, and your doctor will monitor labour progress throughout.",
    },
    {
      q: "When should I go to the clinic or hospital?",
      a: "Contact your doctor when contractions become regular and strong, your water breaks, you notice bleeding or baby movements reduce. Seek urgent medical help for concerning symptoms.",
    },
    {
      q: "Is care available after delivery?",
      a: "Yes. Postnatal checkups, paediatric consultations, newborn care and vaccinations are available.",
    },
  ];

  const antenatalCare = [
    "Monitor blood pressure, weight and haemoglobin",
    "Identify and treat anaemia",
    "Screen for and manage gestational diabetes",
    "Check baby's growth, heartbeat and position through appropriate assessments",
    "Assess the placenta and amniotic fluid",
    "Guide nutrition, physical activity and rest",
    "Identify pregnancy risk factors and plan suitable care",
    "Discuss birth preferences and delivery planning",
  ];

  const preparationTips = [
    {
      title: "Eat Well",
      description:
        "Include dal, vegetables, fruits, dairy and protein-rich foods in your meals. Take supplements only as prescribed by your doctor.",
      icon: Utensils,
    },
    {
      title: "Stay Active",
      description:
        "Daily walking and doctor-approved gentle exercises or prenatal yoga can help maintain stamina and flexibility.",
      icon: Activity,
    },
    {
      title: "Learn About Labour",
      description:
        "Understanding the stages of labour can reduce uncertainty. Ask your doctor what to expect during childbirth.",
      icon: ClipboardList,
    },
    {
      title: "Practise Breathing",
      description:
        "Slow, deep breathing and relaxation techniques may help you remain calm and focused during contractions.",
      icon: Waves,
    },
    {
      title: "Sleep and Rest",
      description:
        "Adequate sleep and rest help maintain your energy and support your overall wellbeing during pregnancy.",
      icon: Heart,
    },
    {
      title: "Build a Support System",
      description:
        "Involve your partner or a trusted family member who can provide encouragement and practical support during labour.",
      icon: Baby,
    },
  ];

  const labourStages = [
    {
      number: "01",
      title: "First Stage: Cervical Opening",
      description:
        "Contractions become regular and the cervix gradually opens. This is usually the longest stage, especially for first-time mothers.",
    },
    {
      number: "02",
      title: "Second Stage: Birth of the Baby",
      description:
        "Once the cervix is fully open, you push as the baby moves down through the birth canal and is born.",
    },
    {
      number: "03",
      title: "Third Stage: Delivery of the Placenta",
      description:
        "The placenta is delivered shortly after the baby. Your medical team monitors you during this stage.",
    },
    {
      number: "04",
      title: "Early Recovery",
      description:
        "You and your baby are monitored closely. Skin-to-skin contact and early breastfeeding are encouraged where possible.",
    },
  ];

  const labourSigns = [
    "Regular contractions that gradually become stronger and closer together",
    "A show, which is blood-stained mucus discharge",
    "Leaking or a sudden gush of water from the vagina",
    "Lower back pain with tightening",
    "Increasing pressure in the pelvis",
  ];

  const emergencySigns = [
    "Heavy vaginal bleeding",
    "Reduced or absent baby movements",
    "Severe or continuous abdominal pain",
    "Severe headache or blurred vision",
  ];

  const painRelief = [
    "Breathing techniques and relaxation",
    "Changing positions and walking during early labour, when suitable",
    "Warm compresses or supportive massage",
    "A calm and supportive birthing environment",
    "Medical pain relief options, where appropriate",
  ];

  const postnatalCare = [
    "Rest and sleep whenever possible",
    "Keep the stitch area clean and dry as advised",
    "Eat nutritious meals and drink enough fluids",
    "Walk gently and gradually increase movement",
    "Breastfeed frequently and seek help if you experience difficulties",
    "Attend recommended postnatal checkups",
    "Report fever, heavy bleeding, foul-smelling discharge or severe pain",
  ];

  const reasons = [
    "A doctor who listens and explains clearly",
    "Structured antenatal care from early pregnancy",
    "Emphasis on normal vaginal delivery when medically suitable",
    "Attention to high-risk pregnancies",
    "3D and 4D ultrasound facilities",
    "Paediatric and newborn care available",
    "Continuity of care throughout pregnancy and after birth",
    "A respectful and private environment",
  ];

  const doctorQuestions = [
    "Am I a good candidate for normal delivery?",
    "Which risk factors might affect my birth plan?",
    "What are the signs that I should come to the clinic?",
    "What pain relief options are available?",
    "When might a caesarean become necessary?",
    "How will my baby and I be monitored during labour?",
    "What care will I receive after delivery?",
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          <div className="order-1 min-w-0 space-y-10">
            {/* Introduction */}
            <section className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-[#F8F4F6] px-4 py-2 text-sm font-semibold text-[#8F1738]">
                Pregnancy and Birthing Care
              </span>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Normal Delivery Doctor Near Civil Lines, Moradabad: Gentle
                Support for a Natural Birth
              </h1>

              <p className="text-base leading-8 text-gray-600">
                For many women, the hope of a normal delivery begins long
                before labour. You may wonder whether it is possible for you,
                how to prepare, what the pain will feel like and who will
                support you. The right doctor makes a big difference. If you
                are searching for a{" "}
                <strong className="text-gray-800">
                  normal delivery doctor near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers antenatal
                care and birthing support that prioritise natural vaginal
                delivery wherever it is medically safe.
              </p>

              <div className="rounded-2xl border border-[#F0DCE3] bg-[#F8F4F6] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-white p-3 text-[#8F1738]">
                    <HeartPulse size={25} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#74122E]">
                      Supportive Pregnancy and Delivery Care
                    </h2>
                    <p className="mt-2 leading-7 text-gray-600">
                      Every pregnancy is different. Regular antenatal
                      monitoring and an individualised birth plan help your
                      doctor guide you towards the safest delivery approach
                      for you and your baby.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Website Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Website Overview: Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                The clinic's website describes a women's health and fertility
                centre built on the philosophy "Her Health First." Dr.
                Priyanka Pachauri is presented as a gynaecologist in Moradabad
                known for antenatal and postnatal care, high-risk pregnancies,
                laparoscopic surgery and menstrual disorder treatment.
              </p>

              <p className="leading-8 text-gray-600">
                The services list includes pregnancy and birthing care,
                antenatal services, normal delivery care described as
                "expert and gentle" with priority on natural vaginal delivery,
                and paediatric care. The clinic also lists 3D and 4D
                ultrasound among its facilities.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Pregnancy and birthing care",
                  "Antenatal services",
                  "Normal delivery care",
                  "High-risk pregnancy care",
                  "Postnatal care",
                  "Paediatric consultations",
                  "3D ultrasound",
                  "4D ultrasound",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#8F1738]"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* What is Normal Delivery */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Is Normal Delivery?
              </h2>

              <p className="leading-8 text-gray-600">
                A normal delivery, also called vaginal delivery, is when the
                baby is born through the birth canal without surgery. Labour
                may begin on its own or be started with medical help when
                needed. The body goes through contractions, cervical opening,
                pushing and birth.
              </p>

              <p className="leading-8 text-gray-600">
                Compared with a caesarean, normal delivery generally offers
                several potential benefits:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Faster recovery after birth",
                  "Shorter hospital stay in many cases",
                  "Avoidance of surgical wound-related complications",
                  "Easier early movement and breastfeeding for many mothers",
                  "No uterine surgical scar from a caesarean, which may reduce certain risks in future pregnancies",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-6 text-gray-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border-l-4 border-[#8F1738] bg-gray-50 p-5">
                <p className="leading-7 text-gray-700">
                  <strong className="text-[#74122E]">
                    Every birth is different:
                  </strong>{" "}
                  Normal delivery is not right for every woman. A caesarean
                  may sometimes be the safer choice. The priority is always
                  the health and safety of both mother and baby.
                </p>
              </div>
            </section>

            {/* Who Can Have Normal Delivery */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Who Can Have a Normal Delivery?
              </h2>

              <p className="leading-8 text-gray-600">
                Many women can have a vaginal birth, particularly when the
                pregnancy is progressing well and there are no medical
                concerns that make it unsafe.
              </p>

              <div className="rounded-2xl border border-gray-100 p-5 sm:p-6">
                <h3 className="mb-4 text-lg font-bold text-[#74122E]">
                  Factors That May Support Vaginal Birth
                </h3>

                <div className="space-y-3">
                  {[
                    "The pregnancy is healthy and has reached full term",
                    "The baby is positioned head-down",
                    "The baby's size and the mother's pelvis are suitable for vaginal birth",
                    "The placenta is positioned safely",
                    "There are no serious maternal or baby complications",
                  ].map((factor) => (
                    <div key={factor} className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#8F1738]"
                      />
                      <p className="text-sm leading-6 text-gray-700">
                        {factor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="leading-8 text-gray-600">
                Some women with a previous caesarean, diabetes or mild
                hypertension may also be considered for vaginal birth,
                depending on their individual circumstances. Your doctor will
                assess your medical history and pregnancy before advising you.
              </p>
            </section>

            {/* Caesarean */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                When a Caesarean May Be Safer
              </h2>

              <p className="leading-8 text-gray-600">
                A caesarean may be recommended when vaginal delivery could
                place the mother or baby at risk. Some situations that may
                require a caesarean include:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "A placenta that covers the cervix",
                  "A baby in breech or transverse position in certain cases",
                  "Signs of fetal distress during labour",
                  "Labour that does not progress despite careful management",
                  "A very large baby or a pelvis that may not allow safe vaginal birth",
                  "Certain medical conditions in the mother",
                  "Some types of multiple pregnancy",
                ].map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 p-4"
                  >
                    <ShieldCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-6 text-gray-700">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                This advice is based on medical safety, not convenience. A
                good doctor explains the reasons for recommending a
                caesarean, the available alternatives and what the decision
                means for you and your baby.
              </p>
            </section>

            {/* Antenatal Care */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                How Antenatal Care Prepares You for Normal Delivery
              </h2>

              <p className="leading-8 text-gray-600">
                Regular antenatal visits are the foundation of a safe birth.
                Throughout pregnancy, your doctor monitors your health and
                your baby's development, identifies possible concerns and
                helps you prepare for delivery.
              </p>

              <div className="rounded-2xl bg-[#F8F4F6] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <CalendarCheck className="text-[#8F1738]" size={25} />
                  <h3 className="text-lg font-bold text-[#74122E]">
                    Antenatal Care Includes
                  </h3>
                </div>

                <div className="space-y-3">
                  {antenatalCare.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#8F1738]"
                      />
                      <p className="text-sm leading-6 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="leading-8 text-gray-600">
                The clinic's structured antenatal services and 3D and 4D
                ultrasound facilities support ongoing pregnancy monitoring.
                Your doctor will recommend scans and tests according to your
                pregnancy needs.
              </p>
            </section>

            {/* Preparing Body and Mind */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Preparing Your Body and Mind
              </h2>

              <p className="leading-8 text-gray-600">
                Healthy daily habits can support your wellbeing during
                pregnancy and help you feel more prepared for labour. Always
                follow your doctor's advice, particularly if your pregnancy
                needs extra monitoring.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {preparationTips.map((tip) => {
                  const Icon = tip.icon;

                  return (
                    <div
                      key={tip.title}
                      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                    >
                      <div className="mb-3 inline-flex rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                        <Icon size={23} />
                      </div>
                      <h3 className="font-bold text-[#74122E]">
                        {tip.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {tip.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl border-l-4 border-[#8F1738] bg-gray-50 p-5">
                <p className="leading-7 text-gray-700">
                  <strong className="text-[#74122E]">Remember:</strong> Avoid
                  starting a new exercise routine, taking supplements or
                  making major dietary changes without discussing them with
                  your doctor.
                </p>
              </div>
            </section>

            {/* Stages of Labour */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                The Stages of Normal Labour
              </h2>

              <p className="leading-8 text-gray-600">
                Understanding the stages of labour can help you know what to
                expect. Your medical team will monitor your progress and
                provide support throughout the process.
              </p>

              <div className="space-y-4">
                {labourStages.map((stage) => (
                  <div
                    key={stage.number}
                    className="flex gap-4 rounded-2xl border border-gray-100 p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8F1738] font-bold text-white">
                      {stage.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#74122E]">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Signs of Labour */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Signs That Labour May Be Starting
              </h2>

              <p className="leading-8 text-gray-600">
                As your due date approaches, it helps to recognise the signs
                that labour may be beginning. These can include:
              </p>

              <div className="space-y-3">
                {labourSigns.map((sign) => (
                  <div
                    key={sign}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-6 text-gray-700">{sign}</p>
                  </div>
                ))}
              </div>

              <p className="leading-7 text-gray-600">
                Contact your doctor if you notice these signs, especially if
                your pregnancy is at or near term. If you are unsure whether
                labour has started, seek advice rather than waiting.
              </p>

              <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                <h3 className="font-bold text-red-800">
                  Warning Signs That Need Immediate Medical Attention
                </h3>
                <div className="mt-3 space-y-3">
                  {emergencySigns.map((sign) => (
                    <div key={sign} className="flex items-start gap-3">
                      <ShieldCheck
                        size={19}
                        className="mt-0.5 shrink-0 text-red-700"
                      />
                      <p className="text-sm leading-6 text-red-800">{sign}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm font-medium leading-6 text-red-800">
                  Do not wait for a routine appointment if you experience
                  these symptoms. Contact your maternity team or seek
                  emergency medical care immediately.
                </p>
              </div>
            </section>

            {/* Pain Relief */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Pain Relief and Comfort in Labour
              </h2>

              <p className="leading-8 text-gray-600">
                Labour can be intense, but several comfort measures and
                medical options may help you manage contractions. The
                appropriate choice depends on your health, labour progress
                and available facilities.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {painRelief.map((option) => (
                  <div
                    key={option}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 p-4"
                  >
                    <Heart
                      size={19}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-6 text-gray-700">
                      {option}
                    </p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Pain relief choices can be discussed in advance so that you
                understand what may be available and can make informed
                decisions with your doctor.
              </p>
            </section>

            {/* Postnatal Care */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Care After a Normal Delivery
              </h2>

              <p className="leading-8 text-gray-600">
                Recovery after vaginal delivery is usually quicker than after
                a caesarean, but your body still needs time, nutrition and
                appropriate care.
              </p>

              <div className="rounded-2xl border border-gray-100 p-5 sm:p-6">
                <h3 className="mb-4 text-lg font-bold text-[#74122E]">
                  Postnatal Care Tips
                </h3>

                <div className="space-y-3">
                  {postnatalCare.map((tip) => (
                    <div key={tip} className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#8F1738]"
                      />
                      <p className="text-sm leading-6 text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-5">
                <h3 className="font-bold text-[#74122E]">
                  Emotional Wellbeing After Birth
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  Emotional health matters as much as physical recovery. If
                  you feel persistently low, anxious, overwhelmed or unable
                  to cope after birth, speak to your doctor. Support is
                  available, and you do not have to manage these feelings
                  alone.
                </p>
              </div>
            </section>

            {/* Newborn Care */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Newborn Care Support
              </h2>

              <p className="leading-8 text-gray-600">
                The clinic also offers paediatric consultations, newborn care
                and vaccinations. This allows follow-up care for your baby in
                the same place where your pregnancy was managed, supporting
                continuity between maternal and newborn healthcare.
              </p>

              <div className="rounded-2xl bg-[#F8F4F6] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <Baby size={27} className="mt-1 shrink-0 text-[#8F1738]" />
                  <div>
                    <h3 className="font-bold text-[#74122E]">
                      Care for Mother and Baby
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      Postnatal checkups, newborn consultations and
                      vaccination guidance help families plan for care after
                      childbirth.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec for Delivery Care
              </h2>

              <p className="leading-8 text-gray-600">
                Choosing a delivery doctor is an important decision. Women
                often look for clear communication, regular pregnancy
                monitoring and a supportive environment where their concerns
                and birth preferences are respected.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 p-4 shadow-sm"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-6 text-gray-700">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Questions to Ask */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Questions to Ask Your Delivery Doctor
              </h2>

              <p className="leading-8 text-gray-600">
                Your antenatal appointments are a good opportunity to discuss
                your birth preferences and understand what may happen during
                labour.
              </p>

              <div className="rounded-2xl bg-[#F8F4F6] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <ClipboardList className="text-[#8F1738]" size={25} />
                  <h3 className="font-bold text-[#74122E]">
                    Keep These Questions Ready
                  </h3>
                </div>

                <div className="space-y-3">
                  {doctorQuestions.map((question, index) => (
                    <div key={question} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#8F1738]">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-gray-700">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
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
                accessible to women from Civil Lines and nearby localities.
              </p>

              <div className="rounded-2xl border border-[#F0DCE3] bg-[#F8F4F6] p-5 sm:p-6">
                <h3 className="text-xl font-bold text-[#74122E]">
                  Dr. Priyanka Pachauri
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Dr. Priyanka Gynaec
                </p>

                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-6 text-gray-700">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                      Pradesh – 244001
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#8F1738]" />
                    <a
                      href="tel:+919079765578"
                      className="text-sm font-semibold text-gray-700 hover:text-[#8F1738]"
                    >
                      +91 90797 65578
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#8F1738]" />
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-700 hover:text-[#8F1738]"
                    >
                      WhatsApp: +91 89796 70705
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-[#8F1738]" />
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="break-all text-sm font-semibold text-gray-700 hover:text-[#8F1738]"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+919079765578"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#8F1738] bg-white px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#8F1738] hover:text-white"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <p className="leading-8 text-gray-600">
                If you are looking for a{" "}
                <strong className="text-gray-800">
                  normal delivery doctor near Civil Lines, Moradabad
                </strong>
                , book a consultation early in your pregnancy and discuss your
                antenatal care and birth plan.
              </p>
            </section>

            {/* FAQs */}
            <section className="space-y-5">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#8F1738]">
                  Patient Guidance
                </span>
                <h2 className="mt-2 text-2xl font-bold text-[#74122E]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-gray-200 bg-white p-5 open:border-[#E8C6D1] open:bg-[#F8F4F6]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#74122E]">
                      <span>
                        {index + 1}. {faq.q}
                      </span>
                      <span className="text-xl text-[#8F1738] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 border-t border-gray-200 pt-4 text-sm leading-7 text-gray-600">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="rounded-2xl bg-[#74122E] p-6 text-white sm:p-8">
              <div className="flex items-center gap-3">
                <Award size={28} />
                <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                  Pregnancy and Delivery Care
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Plan Your Pregnancy and Birth With Confidence
              </h2>

              <p className="mt-3 leading-7 text-white/85">
                Every pregnancy is unique. Consult Dr. Priyanka Pachauri to
                discuss your health, understand your delivery options and
                prepare an individualised birth plan focused on the safety of
                you and your baby.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#74122E] transition hover:bg-gray-100"
                >
                  <Phone size={18} />
                  Call for Appointment
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </section>

            {/* Related Services */}
            <section className="rounded-2xl border border-gray-100 p-5 sm:p-6">
              <h2 className="text-xl font-bold text-[#74122E]">
                Explore Related Women's Healthcare Services
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                Explore pregnancy care, gynaecology treatments and other
                services available at the clinic.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="rounded-lg bg-[#F8F4F6] px-4 py-2 text-sm font-semibold text-[#8F1738] transition hover:bg-[#F0DCE3]"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#F8F4F6] px-4 py-2 text-sm font-semibold text-[#8F1738] transition hover:bg-[#F0DCE3]"
                >
                  Contact the Clinic
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar Enquiry Form */}
          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />

              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                    <Baby size={23} />
                  </div>
                  <h3 className="font-bold text-[#74122E]">
                    Pregnancy Consultation
                  </h3>
                </div>

                <p className="text-sm leading-7 text-gray-600">
                  Discuss your pregnancy progress, delivery preferences and
                  questions about labour with your doctor.
                </p>

                <a
                  href="tel:+919079765578"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#8F1738] px-5 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={17} />
                  +91 90797 65578
                </a>
              </div>

              <div className="rounded-2xl bg-[#F8F4F6] p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={24} className="text-[#8F1738]" />
                  <h3 className="font-bold text-[#74122E]">
                    Mother and Baby First
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Delivery decisions are based on individual medical needs,
                  with the safety and wellbeing of mother and baby as the
                  priority.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
