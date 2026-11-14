
import Link from "next/link";
import {
  Activity,
  Baby,
  Heart,
  ShieldCheck,
  Stethoscope,
  CalendarDays,
  CheckCircle2,
  Clock,
  Utensils,
  Moon,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  ClipboardList,
  AlertCircle,
  Droplets,
  HeartHandshake,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PostnatalCareDoctor() {
  const postnatalServices = [
    "Checking your physical recovery",
    "Monitoring bleeding, wounds and blood pressure",
    "Supporting breastfeeding",
    "Screening for emotional health problems",
    "Advice on nutrition, rest and exercise",
    "Guidance on contraception and family planning",
    "Treating complications early",
  ];

  const checkupBenefits = [
    "Detect infection, anaemia or excess bleeding",
    "Check healing of stitches or a caesarean wound",
    "Monitor blood pressure and blood sugar, especially after pregnancy complications",
    "Identify breastfeeding difficulties",
    "Notice signs of postpartum depression or anxiety",
    "Check how the uterus is returning to its normal size",
    "Plan safe spacing between pregnancies",
  ];

  const visitSchedule = [
    {
      time: "Within the first week",
      description:
        "A check for bleeding, wound healing, pain and feeding, particularly after a caesarean or complicated birth.",
    },
    {
      time: "Around two weeks",
      description:
        "A review of physical recovery, breastfeeding and any concerns that have developed after delivery.",
    },
    {
      time: "At six weeks",
      description:
        "A fuller checkup, which may include examination, blood pressure, emotional health and contraception advice.",
    },
  ];

  const physicalChanges = [
    {
      title: "Vaginal bleeding (lochia)",
      description:
        "Bleeding continues for several weeks, gradually reducing and changing colour from red to pink to pale. It should not be very heavy or foul-smelling.",
    },
    {
      title: "Afterpains",
      description:
        "Cramping occurs as the uterus contracts and may feel stronger during breastfeeding.",
    },
    {
      title: "Perineal soreness",
      description:
        "After a normal delivery, stitches or tears can feel sore for a while as the area heals.",
    },
    {
      title: "Caesarean wound pain",
      description:
        "After a C-section, tenderness and itching around the wound are common during recovery.",
    },
    {
      title: "Breast changes",
      description:
        "Milk comes in after a few days, which can cause breast fullness and tenderness.",
    },
    {
      title: "Hair fall",
      description:
        "Hair fall is common a few months after delivery and is usually temporary.",
    },
    {
      title: "Tiredness",
      description:
        "Night feeds, interrupted sleep and a new routine can make the early weeks exhausting.",
    },
    {
      title: "Urinary and bowel changes",
      description:
        "Constipation, mild urine leakage or discomfort can occur and often improve with time.",
    },
  ];

  const warningSigns = [
    "Heavy bleeding soaking a pad within an hour, or passing large clots",
    "Fever or chills",
    "Foul-smelling vaginal discharge",
    "Increasing pain, redness, swelling or discharge from a wound or stitches",
    "Severe headache or blurred vision",
    "Chest pain, breathlessness or leg swelling and pain",
    "Painful, red, hard breasts with fever",
    "Burning urination or inability to pass urine",
    "Persistent sadness, hopelessness or thoughts of harming yourself or your baby",
  ];

  const woundCare = [
    "Keep the area clean and dry as advised by your doctor.",
    "Change sanitary pads frequently.",
    "Wash gently with water after using the toilet.",
    "Avoid tight clothes over a caesarean wound.",
    "Support your abdomen with a pillow when coughing.",
    "Avoid heavy lifting until your doctor allows it.",
    "Take prescribed medicines for pain and infection exactly as directed.",
  ];

  const breastfeedingTips = [
    "Feed early and often, and ensure your baby has a good latch.",
    "Try different feeding positions, such as side-lying after a caesarean.",
    "Drink plenty of fluids and eat nutritious meals.",
    "Rest as much as you can between feeds.",
    "Ask for help early if feeding hurts or your baby is not settling.",
  ];

  const nutritionTips = [
    "Eat regular, balanced meals with dal, vegetables, fruit, milk products and protein.",
    "Include iron-rich foods such as spinach, jaggery, dates and beetroot.",
    "Drink plenty of water throughout the day.",
    "Add fibre-rich foods to help prevent constipation.",
    "Continue iron and calcium supplements if prescribed.",
    "Avoid crash diets, as your body needs energy for healing and milk production.",
  ];

  const emotionalSymptoms = [
    "Constantly low or anxious",
    "Unable to sleep even when the baby sleeps",
    "Detached from your baby",
    "Overwhelmed or unable to cope",
    "Troubled by frightening thoughts",
  ];

  const exerciseTips = [
    "Begin with gentle walking when you feel ready.",
    "Ask your doctor before starting formal exercise, especially after a caesarean.",
    "Pelvic floor exercises can help with urine leakage and provide support.",
    "Increase activity gradually.",
    "Rest if you feel pain or excessive bleeding.",
  ];

  const reasons = [
    "A doctor who listens patiently and explains clearly",
    "Care from pregnancy through postnatal recovery",
    "Continuity, with a team that knows your medical history",
    "Paediatric and newborn care available",
    "A private, respectful setting for sensitive questions",
    "Attention to emotional as well as physical health",
  ];

  const faqs = [
    {
      q: "What is postnatal care?",
      a: "Postnatal care is the medical and emotional care given to a mother after childbirth. It supports physical recovery, breastfeeding, emotional health and overall wellbeing.",
    },
    {
      q: "When should I have my first postnatal checkup?",
      a: "A check within the first week is particularly important after a caesarean or complicated delivery. A fuller checkup is commonly scheduled around six weeks. Your doctor will advise a personalised schedule.",
    },
    {
      q: "How long does bleeding last after delivery?",
      a: "Bleeding, called lochia, commonly continues for several weeks and gradually becomes lighter. Seek medical help if it becomes very heavy, contains large clots or has a foul smell.",
    },
    {
      q: "Is hair fall after delivery normal?",
      a: "Yes. Hair fall is common a few months after birth due to hormonal changes and usually settles on its own over time.",
    },
    {
      q: "How do I know if I have postpartum depression?",
      a: "Persistent sadness, anxiety, hopelessness or difficulty coping that lasts beyond the initial two weeks needs medical attention. Postpartum depression is treatable, and support is available.",
    },
    {
      q: "When can I start exercising after delivery?",
      a: "Gentle walking can often begin early when you feel ready. Ask your doctor before starting formal exercise, especially after a caesarean or complicated delivery.",
    },
    {
      q: "Can I get pregnant while breastfeeding?",
      a: "Yes. Breastfeeding is not a completely reliable method of contraception. Discuss safe contraception options and pregnancy spacing with your doctor.",
    },
    {
      q: "Does the clinic provide newborn care?",
      a: "The clinic lists paediatric consultations, newborn care and vaccinations among its services. Contact the clinic to enquire about the care your baby needs.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          <article className="order-1 min-w-0 space-y-10">
            {/* Introduction */}
            <section>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F8F4F6] px-4 py-2 text-sm font-semibold text-[#8F1738]">
                <Heart size={16} />
                Postpartum Mother & Baby Care
              </span>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Postnatal Care Doctor Near Civil Lines, Moradabad: Support for
                Mother and Baby After Birth
              </h1>

              <p className="mt-5 text-base leading-8 text-gray-600">
                The birth of a baby brings joy, but it also brings tiredness,
                physical changes and many new questions. Most attention goes
                to the baby, and mothers often neglect their own recovery.
                Postnatal care, also called postpartum care, looks after your
                health in the weeks and months after delivery. If you are
                looking for a{" "}
                <strong className="text-gray-800">
                  postnatal care doctor near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers postnatal
                follow-up along with paediatric and newborn support.
              </p>
            </section>

            {/* Website overview */}
            <section className="rounded-3xl border border-[#F0DCE3] bg-[#F8F4F6] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-[#8F1738] shadow-sm">
                  <Award size={25} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Website Overview: Dr. Priyanka Gynaec
                </h2>
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                The clinic's website describes a women's health and fertility
                centre guided by the philosophy "Her Health First." Dr.
                Priyanka Pachauri is presented as a gynaecologist in Moradabad
                known for antenatal and postnatal care, high-risk pregnancies,
                laparoscopic surgery and menstrual disorder treatment.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The listed services include pregnancy and birthing care,
                normal delivery and paediatric care, which covers consultations,
                vaccinations and newborn care. The site stresses listening
                first, continuity of care and a team that knows your history
                across visits.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Postnatal Care",
                  "Pregnancy Care",
                  "Newborn Support",
                  "Paediatric Services",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#EAD0D9] bg-white px-4 py-2 text-sm font-medium text-[#74122E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {/* Definition */}
            <section>
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Is Postnatal Care?
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Postnatal care covers the medical and emotional support given
                to a mother after childbirth, usually for the first six weeks
                and often beyond. It helps monitor recovery, identify
                complications early and support the mother as she adjusts to
                caring for her newborn.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {postnatalServices.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <span className="text-sm leading-6 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                Good postnatal care helps mothers heal fully and enjoy the
                early months with their babies.
              </p>
            </section>

            {/* Importance */}
            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Postnatal Checkups Are Important
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Many serious problems after delivery can be treated more
                effectively when found early. Regular checkups help your doctor
                monitor healing and identify concerns before they become more
                serious.
              </p>

              <div className="mt-6 space-y-3">
                {checkupBenefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <ShieldCheck
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <span className="leading-7 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 font-medium leading-7 text-[#74122E]">
                Skipping follow-up visits can allow small problems to grow.
                Keep your postnatal appointments even when you feel well.
              </p>
            </section>

            {/* Schedule */}
            <section>
              <h2 className="text-2xl font-bold text-[#74122E]">
                When to Schedule Postnatal Visits
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Your doctor will advise a personalised schedule based on your
                delivery, recovery and health needs. A common pattern is:
              </p>

              <div className="mt-6 space-y-4">
                {visitSchedule.map((item, index) => (
                  <div
                    key={item.time}
                    className="flex gap-4 rounded-2xl border border-[#F0DCE3] p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F8F4F6] text-[#8F1738]">
                      <CalendarDays size={21} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#8F1738]">
                        Visit {index + 1}
                      </span>
                      <h3 className="mt-1 font-bold text-[#74122E]">
                        {item.time}
                      </h3>
                      <p className="mt-2 leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                Call your doctor earlier if you notice any warning signs or
                feel that something is not right.
              </p>
            </section>

            {/* Physical recovery */}
            <section className="rounded-3xl bg-[#F8F4F6] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What to Expect Physically After Delivery
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Your body goes through several changes after childbirth.
                Understanding what is commonly expected can help you recognise
                when you may need medical advice.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {physicalChanges.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#F0DCE3] bg-white p-5"
                  >
                    <h3 className="font-bold text-[#74122E]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Warning signs */}
            <section className="rounded-3xl border border-red-200 bg-red-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-red-600">
                  <AlertCircle size={25} />
                </div>
                <h2 className="text-2xl font-bold text-red-800">
                  Warning Signs: Contact a Doctor Immediately
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-700">
                Some symptoms after childbirth need urgent medical assessment.
                Seek medical help without delay if you experience:
              </p>

              <div className="mt-6 space-y-3">
                {warningSigns.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4">
                    <AlertCircle
                      size={19}
                      className="mt-1 shrink-0 text-red-600"
                    />
                    <span className="leading-7 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 font-semibold leading-7 text-red-800">
                If you have thoughts of harming yourself or your baby, seek
                emergency medical help immediately and stay with a trusted
                person.
              </p>
            </section>

            {/* Wound care */}
            <section>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Caring for Your Stitches or C-Section Wound
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                Proper wound care helps support healing and reduces the chance
                of infection. Follow your doctor's instructions and keep these
                general precautions in mind:
              </p>

              <div className="mt-5 space-y-3">
                {woundCare.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <span className="leading-7 text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Breastfeeding */}
            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <Baby size={25} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Breastfeeding Support
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                Breast milk offers excellent nutrition for babies, but many
                mothers face early difficulties. Common concerns include sore
                nipples, engorgement, worries about low milk supply and poor
                latch. Helpful steps include:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {breastfeedingTips.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <Heart
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <span className="text-sm leading-7 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                Your doctor can guide you and suggest additional breastfeeding
                support when needed. Do not hesitate to ask for help if feeding
                is painful or your baby is not feeding well.
              </p>
            </section>

            {/* Nutrition */}
            <section>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <Utensils size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Nutrition for New Mothers
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                Good nutrition supports healing, energy levels and milk
                production. A balanced diet with enough fluids and nutrients
                can help you recover after childbirth.
              </p>

              <div className="mt-5 space-y-3">
                {nutritionTips.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[#F0DCE3] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <span className="leading-7 text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Emotional health */}
            <section className="rounded-3xl bg-[#F8F4F6] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-[#8F1738]">
                  <HeartHandshake size={25} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Emotional Health After Birth
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                Many mothers feel tearful or moody in the first two weeks,
                often called "baby blues." If sadness, anxiety, irritability or
                hopelessness lasts longer, or interferes with daily life or
                bonding, it may be postpartum depression. This is common and
                treatable, and it is not a weakness.
              </p>

              <h3 className="mt-6 font-bold text-[#74122E]">
                Talk to your doctor if you feel:
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {emotionalSymptoms.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4"
                  >
                    <Heart
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <span className="text-sm leading-6 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                Support from family, rest and professional help make a real
                difference. If you feel unsafe or have thoughts of harming
                yourself or your baby, seek emergency help immediately.
              </p>
            </section>

            {/* Exercise */}
            <section>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <Activity size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Exercise and Getting Back to Routine
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                Returning to daily activities should be gradual. Your recovery
                depends on your delivery, general health and whether you
                experienced any complications.
              </p>

              <div className="mt-5 space-y-3">
                {exerciseTips.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <span className="leading-7 text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-5">
                <p className="font-semibold leading-7 text-[#74122E]">
                  Healing takes time, and every woman recovers at her own pace.
                  Avoid comparing your recovery with someone else's.
                </p>
              </div>
            </section>

            {/* Family planning */}
            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Contraception and Family Planning
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                You can become pregnant again even before your periods return.
                Your doctor will discuss safe contraception options that are
                compatible with breastfeeding and advise on suitable spacing
                between pregnancies.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The clinic also lists sterilization as a service for women who
                have completed their families. Discuss the available options,
                benefits and considerations with your doctor before making a
                decision.
              </p>
            </section>

            {/* Newborn care */}
            <section>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <Baby size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Newborn Care Under One Roof
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                Postnatal care includes your baby too. The clinic's paediatric
                services cover newborn care, consultations and vaccinations,
                helping you keep track of feeding, weight gain, jaundice and
                immunisation schedules in a familiar place.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Newborn consultations",
                  "Feeding and weight-gain guidance",
                  "Jaundice-related assessment",
                  "Vaccination schedule guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <Baby
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <span className="text-sm leading-6 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why choose */}
            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Postnatal recovery involves physical healing, emotional
                adjustment and newborn care. Having a familiar healthcare team
                can make it easier to discuss concerns and receive guidance
                throughout this period.
              </p>

              <div className="mt-5 space-y-3">
                {reasons.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <span className="leading-7 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section className="rounded-3xl bg-[#F8F4F6] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="mt-6 space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-[#F0DCE3] bg-white p-5"
                  >
                    <h3 className="font-bold leading-7 text-[#74122E]">
                      {index + 1}. {faq.q}
                    </h3>
                    <p className="mt-2 leading-7 text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="overflow-hidden rounded-3xl bg-[#74122E] p-7 text-white sm:p-9">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <Heart size={16} />
                Care for Every New Beginning
              </span>

              <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                Give Yourself the Care You Give Your Baby
              </h2>

              <p className="mt-4 leading-8 text-white/85">
                If you are looking for a postnatal care doctor near Civil
                Lines, Moradabad, book a visit with Dr. Priyanka Pachauri and
                get guidance for your recovery, emotional wellbeing and your
                baby's early care.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#74122E] transition hover:bg-[#F8F4F6]"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  <Heart size={18} />
                  WhatsApp Us
                </a>
              </div>
            </section>

            {/* Contact */}
            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Location and Contact
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                The clinic is at A2, near Old Roadways, Gandhi Nagar,
                Moradabad, Uttar Pradesh 244001, and is accessible to women
                from Civil Lines and nearby areas. Call, message or email to
                enquire about an appointment.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+919079765578"
                  className="flex items-center gap-4 rounded-xl bg-[#F8F4F6] p-4 transition hover:bg-[#F2E8EC]"
                >
                  <Phone size={21} className="shrink-0 text-[#8F1738]" />
                  <div>
                    <p className="text-sm text-gray-500">Call</p>
                    <p className="font-semibold text-[#74122E]">
                      +91 90797 65578
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-[#F8F4F6] p-4 transition hover:bg-[#F2E8EC]"
                >
                  <Phone size={21} className="shrink-0 text-[#8F1738]" />
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-semibold text-[#74122E]">
                      +91 89796 70705
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:drpriyankagynaec@gmail.com"
                  className="flex items-center gap-4 rounded-xl bg-[#F8F4F6] p-4 transition hover:bg-[#F2E8EC]"
                >
                  <Mail size={21} className="shrink-0 text-[#8F1738]" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="break-all font-semibold text-[#74122E]">
                      drpriyankagynaec@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl bg-[#F8F4F6] p-4">
                  <MapPin
                    size={21}
                    className="mt-1 shrink-0 text-[#8F1738]"
                  />
                  <div>
                    <p className="text-sm text-gray-500">Clinic Address</p>
                    <p className="font-semibold leading-7 text-[#74122E]">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                      Pradesh – 244001
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-[#F8F4F6] p-4 transition hover:bg-[#F2E8EC]"
                >
                  <Globe size={21} className="shrink-0 text-[#8F1738]" />
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="break-all font-semibold text-[#74122E]">
                      www.gynaecologistmoradabad.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book an Appointment
                </Link>

                <Link
                  href="/services"
                  className="rounded-xl border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#F8F4F6]"
                >
                  Explore Services
                </Link>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />

              <div className="rounded-2xl border border-[#F0DCE3] bg-[#F8F4F6] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white p-3 text-[#8F1738]">
                    <Baby size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-[#74122E]">
                    Mother & Baby Care
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Get guidance for post-delivery recovery, breastfeeding,
                  emotional health and newborn care.
                </p>

                <a
                  href="tel:+919079765578"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#8F1738] px-5 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={17} />
                  +91 90797 65578
                </a>
              </div>

              <div className="rounded-2xl border border-[#F0DCE3] p-6">
                <h3 className="font-bold text-[#74122E]">
                  Postnatal Care Includes
                </h3>

                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <Heart size={17} className="text-[#8F1738]" />
                    Mother's recovery
                  </div>
                  <div className="flex items-center gap-3">
                    <Baby size={17} className="text-[#8F1738]" />
                    Newborn support
                  </div>
                  <div className="flex items-center gap-3">
                    <ClipboardList size={17} className="text-[#8F1738]" />
                    Follow-up checkups
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={17} className="text-[#8F1738]" />
                    Recovery guidance
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
