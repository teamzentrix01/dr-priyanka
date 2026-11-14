
import Link from "next/link";
import {
  Baby,
  Heart,
  ShieldCheck,
  Stethoscope,
  CalendarDays,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  ClipboardList,
  AlertCircle,
  Activity,
  Scan,
  FileText,
  HeartPulse,
  Info,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PregnancyScanDoctor() {
  const scanBenefits = [
    "Confirm that the pregnancy is inside the uterus",
    "Check the baby's heartbeat",
    "Estimate the due date accurately",
    "Detect twins or multiple pregnancy",
    "Monitor growth and the amount of amniotic fluid",
    "Examine the baby's organs and structure",
    "Check the position of the placenta",
    "Assess the baby's position before delivery",
    "Identify risks early, so care can be planned",
  ];

  const trimesterScans = [
    {
      title: "First Trimester (Weeks 1 to 12)",
      color: "bg-[#F8F4F6]",
      scans: [
        {
          name: "Early or Dating Scan",
          description:
            "Confirms the pregnancy, checks the heartbeat and estimates gestational age. It may be done through the vagina in early weeks.",
        },
        {
          name: "Nuchal Translucency Scan",
          description:
            "Usually performed between weeks 11 and 14 as part of screening for certain chromosomal conditions, along with blood tests, when advised.",
        },
      ],
    },
    {
      title: "Second Trimester (Weeks 13 to 27)",
      color: "bg-white",
      scans: [
        {
          name: "Anomaly Scan (Level II Scan)",
          description:
            "Usually performed between weeks 18 and 22. It carefully checks the baby's brain, heart, spine, limbs, kidneys and other organs, along with the placenta and fluid.",
        },
        {
          name: "Cervical Length Check",
          description:
            "May be advised in selected women who have risk factors for preterm labour.",
        },
      ],
    },
    {
      title: "Third Trimester (Weeks 28 to Delivery)",
      color: "bg-[#F8F4F6]",
      scans: [
        {
          name: "Growth Scan",
          description:
            "Measures the baby's size and estimates weight to assess growth.",
        },
        {
          name: "Doppler Scan",
          description:
            "Checks blood flow in the umbilical cord and the baby's blood vessels, usually when there is a concern about growth or high-risk factors.",
        },
        {
          name: "Position and Fluid Check",
          description:
            "Assesses the baby's position and amniotic fluid near term to help plan delivery.",
        },
      ],
    },
  ];

  const scanPreparation = [
    "Wear comfortable, two-piece clothing for easy access to your abdomen.",
    "Follow your doctor's instructions about a full or empty bladder. Early scans often need a full bladder, while later scans usually do not.",
    "Bring previous scan reports, prescriptions and medical records.",
    "Write down your questions before the appointment.",
    "Bring your partner or a family member, if you wish.",
    "Do not fast unless your doctor tells you to.",
  ];

  const scanSteps = [
    "You lie comfortably, and gel is applied to the lower abdomen.",
    "The probe is moved gently to capture images.",
    "The doctor measures the baby and examines the structures.",
    "You may see the heartbeat and movements on the screen.",
    "The doctor explains the findings and discusses next steps.",
  ];

  const reportDetails = [
    {
      title: "Gestational age",
      description: "The baby's age in weeks and days.",
    },
    {
      title: "Estimated due date",
      description: "The expected date of delivery based on pregnancy measurements and dating.",
    },
    {
      title: "Fetal heart rate and movements",
      description: "Information about the baby's heartbeat and observed movements.",
    },
    {
      title: "Biometry",
      description:
        "Measurements such as head, abdomen and thigh bone, used to estimate the baby's size.",
    },
    {
      title: "Amniotic fluid level",
      description: "The amount of fluid surrounding the baby.",
    },
    {
      title: "Placenta position and appearance",
      description: "The location and appearance of the placenta.",
    },
    {
      title: "Estimated fetal weight",
      description:
        "An estimate of the baby's weight, which can vary from the actual birth weight.",
    },
  ];

  const followUpReasons = [
    "A baby measuring smaller or larger than expected",
    "Low or high amniotic fluid",
    "A low-lying placenta",
    "A suspected structural concern",
    "Abnormal blood flow on Doppler",
  ];

  const highRiskFactors = [
    "Diabetes",
    "High blood pressure",
    "Twin or multiple pregnancy",
    "Previous pregnancy complications",
    "A baby with slow growth",
  ];

  const warningSigns = [
    "Vaginal bleeding or leaking of fluid",
    "Severe abdominal pain or regular tightening before term",
    "Reduced or absent baby movements",
    "Severe headache, blurred vision or sudden swelling of the face and hands",
    "High fever or burning urination",
    "Persistent vomiting",
  ];

  const antenatalChecks = [
    "Blood pressure and weight monitoring",
    "Haemoglobin and blood sugar checks",
    "Urine tests when advised",
    "Nutrition and supplement guidance",
    "Safe exercise and activity advice",
    "Birth preparation and delivery planning",
  ];

  const reasons = [
    "A doctor who listens and explains scan findings in simple language",
    "3D and 4D ultrasound facilities",
    "Antenatal care and scans coordinated in the same practice",
    "Attention to high-risk pregnancies",
    "Support for normal delivery where medically suitable",
    "Paediatric and newborn care available",
    "Continuity, with a team that knows your history",
    "A private, respectful environment",
  ];

  const faqs = [
    {
      q: "When should I have my first pregnancy scan?",
      a: "An early scan is commonly performed around six to eight weeks to confirm the pregnancy and check the heartbeat. Your doctor will advise the exact timing based on your dates, symptoms and medical history.",
    },
    {
      q: "How many scans are needed in pregnancy?",
      a: "The number varies. Many women have an early scan, a detailed anomaly scan and one or more growth scans. High-risk pregnancies may need additional monitoring.",
    },
    {
      q: "Is ultrasound safe for my baby?",
      a: "Ultrasound uses sound waves, not radiation, and is considered safe when performed for medical reasons by a trained professional. Unnecessary repeated scans should be avoided.",
    },
    {
      q: "What is the anomaly scan?",
      a: "It is a detailed scan, usually performed between 18 and 22 weeks, that checks the baby's organs and structure, the placenta and amniotic fluid.",
    },
    {
      q: "What is the difference between 2D, 3D and 4D scans?",
      a: "2D shows flat, cross-sectional images, 3D creates a three-dimensional image and 4D shows 3D images with real-time movement. Routine medical checks mainly rely on 2D ultrasound.",
    },
    {
      q: "Can the baby's gender be told during the scan?",
      a: "No. Determining or disclosing the baby's sex is illegal in India under the PCPNDT Act.",
    },
    {
      q: "Do I need a full bladder for the scan?",
      a: "Early scans often need a full bladder, while later scans usually do not. Follow your doctor's instructions before your appointment.",
    },
    {
      q: "How do I book a scan?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705 or email drpriyankagynaec@gmail.com to enquire about an appointment.",
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
                <Scan size={16} />
                Pregnancy Ultrasound & Antenatal Care
              </span>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Pregnancy Scan Doctor Near Civil Lines, Moradabad: Clear
                Imaging and Caring Guidance
              </h1>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Few moments in pregnancy feel as special as seeing your baby
                on screen for the first time. A pregnancy scan, also called an
                obstetric ultrasound, does more than offer a glimpse. It
                confirms the pregnancy, tracks growth, checks development and
                helps your doctor catch problems early. If you are looking for
                a{" "}
                <strong className="text-gray-800">
                  pregnancy scan doctor near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers antenatal
                care along with 3D and 4D ultrasound facilities.
              </p>
            </section>

            {/* Website Overview */}
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
                focused on antenatal and postnatal care, high-risk pregnancies,
                laparoscopic surgery and menstrual disorder treatment.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The site lists structured antenatal services, pregnancy and
                birthing care, normal delivery and paediatric care. It also
                names 3D and 4D ultrasound among its advanced facilities. A
                blog on its homepage offers a trimester-by-trimester guide
                covering ultrasound scans, nutrition, high-risk screening and
                labour preparation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Antenatal Care",
                  "Pregnancy Scans",
                  "3D & 4D Ultrasound",
                  "High-Risk Pregnancy",
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

            {/* What is pregnancy scan */}
            <section>
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Is a Pregnancy Scan?
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                A pregnancy scan uses high-frequency sound waves to create
                images of the baby, the placenta and the uterus. It involves no
                radiation. A gel is applied to your abdomen, and a probe is
                moved over it. Early in pregnancy, a scan may be done through
                the vagina for a clearer view.
              </p>
            </section>

            {/* Why scans matter */}
            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Pregnancy Scans Matter
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Ultrasound scans provide important information about your
                baby's development and help your doctor plan appropriate
                pregnancy care. Scans help your doctor to:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {scanBenefits.map((item) => (
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
            </section>

            {/* Trimester scans */}
            <section>
              <h2 className="text-2xl font-bold text-[#74122E]">
                Common Scans in Each Trimester
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Different scans may be recommended at different stages of
                pregnancy. The timing and type of scan depend on your health,
                pregnancy history and your doctor's assessment.
              </p>

              <div className="mt-6 space-y-5">
                {trimesterScans.map((trimester, index) => (
                  <div
                    key={trimester.title}
                    className={`rounded-3xl border border-[#F0DCE3] p-6 sm:p-7 ${trimester.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F1738] shadow-sm">
                        <CalendarDays size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-[#74122E]">
                        {trimester.title}
                      </h3>
                    </div>

                    <div className="mt-5 space-y-4">
                      {trimester.scans.map((scan) => (
                        <div
                          key={scan.name}
                          className="rounded-2xl border border-[#F0DCE3] bg-white p-5"
                        >
                          <h4 className="font-bold text-[#74122E]">
                            {scan.name}
                          </h4>
                          <p className="mt-2 leading-7 text-gray-600">
                            {scan.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-5">
                <p className="font-semibold leading-7 text-[#74122E]">
                  Not every woman needs every scan. Your doctor personalises
                  the schedule according to your pregnancy and medical needs.
                </p>
              </div>
            </section>

            {/* 3D and 4D */}
            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <Scan size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  3D and 4D Ultrasound
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                A standard 2D scan provides flat, cross-sectional images. 3D
                ultrasound builds a three-dimensional picture of the baby's
                surface, and 4D adds real-time movement. The clinic lists 3D
                and 4D ultrasound among its facilities.
              </p>

              <h3 className="mt-6 font-bold text-[#74122E]">
                These scans can be helpful for:
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Getting a clearer look at certain structures, such as the face and limbs, when your doctor feels it is useful.",
                  "Giving parents a more vivid view of their baby.",
                  "Supporting detailed evaluation along with standard scans.",
                ].map((item) => (
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

              <p className="mt-5 leading-8 text-gray-600">
                3D and 4D imaging does not replace routine 2D scans and the
                detailed anomaly scan. Your doctor will explain when it adds
                value.
              </p>
            </section>

            {/* Safety */}
            <section className="rounded-3xl bg-[#F8F4F6] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-[#8F1738]">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Is Ultrasound Safe?
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                Ultrasound does not use radiation and has been used in
                pregnancy for decades. It is considered safe when performed
                for medical reasons by a trained professional. Scans should
                be done only when there is a medical purpose, not repeated
                unnecessarily for entertainment.
              </p>
            </section>

            {/* PCPNDT */}
            <section className="rounded-3xl border border-red-200 bg-red-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-red-600">
                  <ShieldCheck size={25} />
                </div>
                <h2 className="text-2xl font-bold text-red-800">
                  Important: Gender Determination Is Illegal in India
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-700">
                Under the Pre-Conception and Pre-Natal Diagnostic Techniques
                (PCPNDT) Act, it is illegal to determine or reveal the sex of
                the baby during a scan. Responsible clinics do not disclose
                it.
              </p>

              <p className="mt-4 font-semibold leading-7 text-red-800">
                Every baby is precious, and your doctor's focus is on your
                baby's health.
              </p>
            </section>

            {/* Preparation */}
            <section>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <ClipboardList size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Preparing for Your Scan
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                A little preparation can make your scan appointment smoother.
                Before visiting, keep these points in mind:
              </p>

              <div className="mt-5 space-y-3">
                {scanPreparation.map((item) => (
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

            {/* What happens */}
            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Happens During the Scan?
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Most abdominal pregnancy scans are straightforward and
                non-invasive. The process generally involves these steps:
              </p>

              <div className="mt-6 space-y-4">
                {scanSteps.map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F4F6] font-bold text-[#8F1738]">
                      {index + 1}
                    </div>
                    <p className="pt-1 leading-7 text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4">
                <Clock
                  size={20}
                  className="mt-1 shrink-0 text-[#8F1738]"
                />
                <p className="leading-7 text-gray-600">
                  A scan usually takes about 15 to 30 minutes, and an anomaly
                  scan may take longer.
                </p>
              </div>
            </section>

            {/* Report */}
            <section>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Understanding Your Scan Report
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                Your pregnancy scan report contains measurements and
                observations about your baby and pregnancy. It may include:
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {reportDetails.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#F0DCE3] bg-white p-5"
                  >
                    <h3 className="font-bold text-[#74122E]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                A small difference from the expected size is not always a
                problem. Your doctor interprets the results in the context of
                your pregnancy, medical history and other findings.
              </p>
            </section>

            {/* Follow-up */}
            <section className="rounded-3xl bg-[#F8F4F6] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                When a Scan May Need Follow-Up
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Sometimes a scan finds something that needs a closer look or
                repeat monitoring. Examples include:
              </p>

              <div className="mt-5 space-y-3">
                {followUpReasons.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4"
                  >
                    <Info
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <span className="leading-7 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                Findings can sometimes change on repeat scans, and many
                concerns settle without harm. Your doctor will explain the
                plan calmly and clearly.
              </p>
            </section>

            {/* High-risk */}
            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Scans in High-Risk Pregnancy
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Some pregnancies need closer monitoring. Women with certain
                health conditions or previous pregnancy complications may
                need more frequent scans to assess the baby's growth and
                wellbeing.
              </p>

              <h3 className="mt-6 font-bold text-[#74122E]">
                Factors that may require closer monitoring include:
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {highRiskFactors.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <HeartPulse
                      size={19}
                      className="shrink-0 text-[#8F1738]"
                    />
                    <span className="text-sm leading-6 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                Dr. Priyanka's practice highlights high-risk pregnancy care,
                so monitoring and delivery planning are personalised. Closer
                follow-up helps decisions about the safest timing and mode of
                delivery.
              </p>
            </section>

            {/* Warning signs */}
            <section className="rounded-3xl border border-red-200 bg-red-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 text-red-600">
                  <AlertCircle size={25} />
                </div>
                <h2 className="text-2xl font-bold text-red-800">
                  Warning Signs: Do Not Wait for Your Next Scan
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-700">
                Contact your doctor immediately if you notice any of the
                following symptoms:
              </p>

              <div className="mt-5 space-y-3">
                {warningSigns.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4"
                  >
                    <AlertCircle
                      size={19}
                      className="mt-1 shrink-0 text-red-600"
                    />
                    <span className="leading-7 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 font-semibold leading-7 text-red-800">
                Reduced or absent baby movements, bleeding, leaking fluid or
                severe symptoms need prompt medical assessment. Do not wait
                for your next scheduled scan.
              </p>
            </section>

            {/* Antenatal care */}
            <section>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <Stethoscope size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Antenatal Care Beyond Scans
                </h2>
              </div>

              <p className="mt-4 leading-8 text-gray-600">
                A scan is only one part of pregnancy care. Regular visits also
                include checking your health and your baby's progress, with
                guidance on nutrition, supplements, exercise and birth
                preparation.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {antenatalChecks.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
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
                The clinic's structured antenatal services cover each
                trimester, with support for normal delivery where medically
                suitable, and paediatric and newborn care afterwards.
              </p>
            </section>

            {/* Why choose */}
            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Pregnancy scans are most useful when their findings are
                understood as part of your overall antenatal care. The clinic
                highlights the following aspects of its services:
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
                Caring Pregnancy Guidance
              </span>

              <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                Plan Your Pregnancy Scans with Expert Guidance
              </h2>

              <p className="mt-4 leading-8 text-white/85">
                If you are looking for a pregnancy scan doctor near Civil
                Lines, Moradabad, book an appointment with Dr. Priyanka
                Pachauri and plan your scans with guidance that considers your
                pregnancy and medical needs.
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
                from Civil Lines and nearby areas. Contact the clinic to
                enquire about pregnancy scans and antenatal appointments.
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
                    Pregnancy Scan Guidance
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Discuss your scan schedule, ultrasound reports and antenatal
                  care needs with your gynaecologist.
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
                  Pregnancy Care Includes
                </h3>

                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <Scan size={17} className="text-[#8F1738]" />
                    Pregnancy ultrasound
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity size={17} className="text-[#8F1738]" />
                    Growth monitoring
                  </div>
                  <div className="flex items-center gap-3">
                    <HeartPulse size={17} className="text-[#8F1738]" />
                    High-risk pregnancy care
                  </div>
                  <div className="flex items-center gap-3">
                    <ClipboardList size={17} className="text-[#8F1738]" />
                    Antenatal follow-up
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
