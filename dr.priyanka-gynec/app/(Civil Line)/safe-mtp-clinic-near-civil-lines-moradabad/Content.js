
import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Heart,
  Stethoscope,
  ClipboardList,
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Clock,
  Baby,
  Activity,
  HeartPulse,
  LockKeyhole,
  Info,
  Scale,
  FileText,
  MessageCircle,
} from "lucide-react";

import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function SafeMTPClinic() {
  const legalPoints = [
    {
      title: "Up to 20 weeks",
      description:
        "Termination may be permitted on the opinion of one registered medical practitioner when the legal conditions are met.",
    },
    {
      title: "20 to 24 weeks",
      description:
        "Termination may be permitted for specified categories of women, on the opinion of two registered medical practitioners.",
    },
    {
      title: "Beyond 24 weeks",
      description:
        "Termination is permitted in cases of substantial foetal abnormalities, as decided by a state-level Medical Board, subject to applicable law.",
    },
    {
      title: "Confidentiality",
      description:
        "A woman's identity and personal details are protected under the law and cannot be disclosed except to authorised persons as permitted by law.",
    },
  ];

  const facilityFeatures = [
    "A qualified, registered gynaecologist",
    "Appropriate examination and ultrasound assessment",
    "Clear information about available methods, risks and alternatives",
    "Confidential and non-judgemental counselling",
    "Hygienic facilities and suitable medical monitoring",
    "Follow-up care and contraception guidance",
    "A plan for managing possible emergencies",
  ];

  const preMTPChecks = [
    "Review of medical history, allergies, current medicines and previous surgeries",
    "Confirmation of pregnancy",
    "Ultrasound assessment to determine pregnancy duration and location",
    "Blood group, Rh factor and haemoglobin assessment when indicated",
    "Discussion of available options, possible risks and concerns",
    "Counselling and answers to the patient's questions",
    "Explanation of applicable legal requirements and consent",
  ];

  const recoveryTips = [
    "Rest on the day of the procedure and gradually return to normal activities.",
    "Use sanitary pads rather than tampons, as advised by your doctor.",
    "Avoid intercourse until your doctor confirms it is safe to resume.",
    "Eat nourishing meals and drink enough fluids.",
    "Take prescribed medicines exactly as directed.",
    "Attend the recommended follow-up appointment.",
  ];

  const emergencySigns = [
    "Soaking more than two pads per hour for two hours or longer",
    "Severe or worsening abdominal pain",
    "Fever or chills",
    "Foul-smelling vaginal discharge",
    "Fainting, dizziness or a racing heartbeat",
    "No bleeding after abortion medicines or signs that the pregnancy continues",
    "Persistent vomiting",
  ];

  const emotionalCare = [
    "Talk to someone you trust if you feel comfortable doing so.",
    "Give yourself time to rest and recover.",
    "Avoid judging yourself for your feelings or decisions.",
    "Speak with your doctor or a counsellor if anxiety, low mood or sleep problems continue.",
  ];

  const contraceptionOptions = [
    "Contraceptive pills",
    "Injections",
    "Intrauterine devices (IUDs)",
    "Sterilisation for women who have completed their families",
  ];

  const reasonsToChoose = [
    "A doctor who listens without judgement and explains medical information clearly",
    "Gynaecology, pregnancy and fertility care in one practice",
    "Ultrasound facilities for appropriate assessment",
    "Contraception and family-planning guidance",
    "A respectful setting for discussing sensitive concerns",
    "Continuity of care and follow-up guidance",
  ];

  const faqs = [
    {
      q: "Is MTP legal in India?",
      a: "Yes. The Medical Termination of Pregnancy Act, 1971, as amended in 2021, permits termination within specified gestational limits and conditions when performed by a registered medical practitioner at an approved facility.",
    },
    {
      q: "Up to how many weeks can MTP be done?",
      a: "Generally, termination up to 20 weeks may be permitted on the opinion of one registered medical practitioner. Between 20 and 24 weeks, it may be permitted for specified categories of women on the opinion of two registered medical practitioners. Beyond 24 weeks, the law provides for cases involving substantial foetal abnormalities as decided by a Medical Board. The applicable legal requirements should be confirmed with your doctor.",
    },
    {
      q: "Is it safe to take abortion pills without a doctor?",
      a: "No. Taking abortion medicines without medical assessment can be dangerous. An ultrasound and clinical evaluation may be needed to determine pregnancy duration and location and to rule out an ectopic pregnancy. Please consult a qualified doctor before taking any medicine.",
    },
    {
      q: "Will my information be kept private?",
      a: "The MTP law protects a woman's identity and personal details. Information may be disclosed only to authorised persons as permitted by law.",
    },
    {
      q: "How long does recovery take?",
      a: "Recovery varies from person to person. Many women return to routine activities within a few days, while bleeding may continue for up to around two weeks. Follow your doctor's instructions and attend the recommended follow-up.",
    },
    {
      q: "Will MTP affect my ability to get pregnant later?",
      a: "When performed safely by a trained medical practitioner at an approved facility, MTP generally does not reduce future fertility. Unsafe or incomplete procedures can cause complications that may affect reproductive health.",
    },
    {
      q: "Does the clinic offer MTP services?",
      a: "The clinic website does not list MTP as a separate service. Please contact the clinic directly to confirm whether consultation or the required services are available.",
    },
    {
      q: "How do I book a consultation?",
      a: "You can call +91 90797 65578, send a WhatsApp message to +91 89796 70705, or email drpriyankagynaec@gmail.com to enquire about an appointment.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          <article className="order-1 min-w-0 space-y-10">
            {/* Introduction */}
            <section className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F8F0F3] px-4 py-2 text-sm font-semibold text-[#8F1738]">
                <ShieldCheck size={16} />
                Confidential Women's Healthcare
              </div>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Safe MTP Clinic Near Civil Lines, Moradabad: Confidential,
                Medically Supervised Care
              </h1>

              <p className="text-base leading-8 text-gray-600">
                An unplanned or unsafe pregnancy can bring fear, stress and
                confusion. Women often worry about their health, their privacy
                and whether they are making the right decision. What matters
                most is receiving accurate information and safe, legal medical
                care without judgement.
              </p>

              <p className="text-base leading-8 text-gray-600">
                If you are searching for a{" "}
                <strong className="text-[#74122E]">
                  safe MTP clinic near Civil Lines, Moradabad
                </strong>
                , this guide explains how medical termination of pregnancy
                works in India and what to look for when seeking medical care.
                It also explains how to contact Dr. Priyanka Pachauri at Dr.
                Priyanka Gynaec to discuss your situation.
              </p>
            </section>

            {/* Website Overview */}
            <section className="rounded-3xl border border-[#F0DCE3] bg-[#FCF8FA] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Website Overview: Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                The clinic website describes a women's health and fertility
                centre guided by the philosophy{" "}
                <strong className="text-[#74122E]">"Her Health First."</strong>{" "}
                Dr. Priyanka Pachauri is presented as a gynaecologist in
                Moradabad providing antenatal and postnatal care, high-risk
                pregnancy management, laparoscopic surgery and menstrual
                disorder treatment.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The listed services include pregnancy and birthing care,
                fertility and IVF, 3D laparoscopy, hysteroscopy, sterilisation,
                paediatric care and 3D and 4D ultrasound. The website
                emphasises listening to patients and providing respectful
                care.
              </p>

              <div className="mt-5 flex gap-3 rounded-2xl border border-[#EBD4DD] bg-white p-4">
                <Info className="mt-1 shrink-0 text-[#8F1738]" size={22} />
                <p className="text-sm leading-7 text-gray-600">
                  <strong className="text-[#74122E]">Important:</strong> The
                  clinic homepage does not list MTP as a separate service.
                  Please call the clinic to confirm whether MTP consultation
                  or treatment is available.
                </p>
              </div>
            </section>

            {/* What is MTP */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Is MTP?
              </h2>

              <p className="leading-8 text-gray-600">
                MTP stands for Medical Termination of Pregnancy. It means
                ending a pregnancy using medicines or a medical procedure
                under appropriate medical supervision.
              </p>

              <p className="leading-8 text-gray-600">
                In India, MTP is regulated by the Medical Termination of
                Pregnancy Act, 1971, as amended in 2021. Termination is
                permitted when the applicable legal conditions are met and
                the procedure is carried out by a qualified registered
                medical practitioner at an approved facility.
              </p>
            </section>

            {/* Indian Law */}
            <section className="space-y-5">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <Scale className="text-[#8F1738]" size={26} />
                  <h2 className="text-2xl font-bold text-[#74122E]">
                    What the Law Says in India
                  </h2>
                </div>

                <p className="leading-8 text-gray-600">
                  The amended MTP Act provides different legal requirements
                  depending on the duration of pregnancy and the circumstances
                  involved.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {legalPoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-[#F0DCE3] bg-white p-5 shadow-sm"
                  >
                    <h3 className="mb-2 font-bold text-[#8F1738]">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#F8F4F6] p-5">
                <h3 className="mb-2 font-semibold text-[#74122E]">
                  Consent and medical supervision
                </h3>
                <p className="text-sm leading-7 text-gray-600">
                  The woman's consent is required. For a minor or a woman
                  covered by the relevant legal provisions concerning mental
                  illness, guardian consent may be required. MTP must be
                  performed by a registered medical practitioner at a
                  facility approved under the Act. The applicable legal
                  requirements should always be confirmed with your doctor.
                </p>
              </div>
            </section>

            {/* Safe Facility */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Choose a Safe, Approved Facility?
              </h2>

              <p className="leading-8 text-gray-600">
                Unsafe abortion can cause serious complications, including
                heavy bleeding, infection and injury to the uterus. In severe
                cases, it can become life-threatening. Choosing an appropriate
                medical facility helps protect your health.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {facilityFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-[#F0DCE3] bg-white p-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                      size={19}
                    />
                    <p className="text-sm leading-6 text-gray-700">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <p className="rounded-xl border-l-4 border-[#8F1738] bg-[#FCF8FA] p-4 text-sm leading-7 text-gray-600">
                Be cautious if a clinic promises guaranteed, instant or
                no-check procedures, or pressures you to make a decision
                quickly. You deserve clear information and time to understand
                your options.
              </p>
            </section>

            {/* No self medication */}
            <section className="rounded-3xl border border-red-200 bg-red-50/60 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle className="text-red-700" size={27} />
                <h2 className="text-2xl font-bold text-red-800">
                  Warning: Do Not Self-Medicate
                </h2>
              </div>

              <p className="leading-8 text-gray-700">
                Abortion medicines may be available through shops or online,
                but taking them without a medical examination can be
                dangerous. Without appropriate assessment, you may not know
                how many weeks pregnant you are or whether the pregnancy is
                located inside the uterus.
              </p>

              <p className="mt-4 leading-8 text-gray-700">
                An ectopic pregnancy occurs when a pregnancy develops outside
                the uterus. It can be life-threatening and cannot be treated
                with abortion medicines. Incomplete abortion, severe bleeding
                and infection are also possible complications.
              </p>

              <p className="mt-4 font-semibold text-red-800">
                Always consult a qualified medical practitioner before taking
                abortion medicines.
              </p>
            </section>

            {/* Before MTP */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <ClipboardList className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  What Is Checked Before MTP?
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Before recommending a method, your doctor will assess your
                health, pregnancy duration and individual circumstances. This
                helps determine the safest appropriate care.
              </p>

              <div className="space-y-3">
                {preMTPChecks.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-xl bg-[#FCF8FA] p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8F1738] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <p className="rounded-xl bg-[#F8F4F6] p-4 text-sm leading-7 text-gray-600">
                Counselling is meant to provide information and support, not
                pressure. Your consent and individual circumstances matter.
              </p>
            </section>

            {/* Methods */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Methods of MTP
              </h2>

              <p className="leading-8 text-gray-600">
                The appropriate method depends on pregnancy duration, your
                medical condition, clinical assessment and individual
                circumstances. Your doctor will explain the suitable options.
              </p>

              <div className="space-y-4">
                <div className="rounded-2xl border border-[#F0DCE3] p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <HeartPulse className="text-[#8F1738]" size={24} />
                    <h3 className="text-lg font-bold text-[#74122E]">
                      Medical (Medicine-Based) Method
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-gray-600">
                    This method may be used in early pregnancy when permitted
                    by applicable law and clinical guidelines. The doctor
                    prescribes the medicines and explains their use, expected
                    effects and possible complications. Bleeding and cramping
                    may occur. Follow-up assessment is important to confirm
                    that the pregnancy has ended completely.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#F0DCE3] p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <Stethoscope className="text-[#8F1738]" size={24} />
                    <h3 className="text-lg font-bold text-[#74122E]">
                      Surgical Method (Vacuum Aspiration)
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-gray-600">
                    Vacuum aspiration is a medical procedure in which the
                    contents of the uterus are removed using appropriate
                    equipment. It is commonly used in early pregnancy and is
                    performed with suitable pain relief or anaesthesia in an
                    approved medical setting.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#F0DCE3] p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <ShieldCheck className="text-[#8F1738]" size={24} />
                    <h3 className="text-lg font-bold text-[#74122E]">
                      Later-Stage Procedures
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-gray-600">
                    Terminations later in pregnancy require appropriate
                    hospital facilities and a specialist medical team. They
                    must follow the applicable legal requirements and
                    clinical protocols.
                  </p>
                </div>
              </div>
            </section>

            {/* Recovery */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Activity className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  What to Expect During Recovery
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Recovery differs from one woman to another. Some physical and
                emotional changes may occur after MTP.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Bleeding that may continue for up to around two weeks, often heavier initially and then gradually reducing",
                  "Cramping that can usually be managed with doctor-advised pain relief",
                  "Tiredness or mild nausea",
                  "Emotional changes or mixed feelings",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#FCF8FA] p-4"
                  >
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#8F1738]"
                      size={18}
                    />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-[#74122E]">
                Helpful Recovery Tips
              </h3>

              <div className="space-y-3">
                {recoveryTips.map((tip) => (
                  <div key={tip} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#8F1738]"
                      size={18}
                    />
                    <p className="text-sm leading-7 text-gray-600">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Warning Signs */}
            <section className="rounded-3xl border border-red-200 bg-red-50/60 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle className="text-red-700" size={27} />
                <h2 className="text-2xl font-bold text-red-800">
                  Warning Signs: Seek Help Immediately
                </h2>
              </div>

              <p className="mb-5 leading-7 text-gray-700">
                Contact your doctor immediately or visit the nearest hospital
                if you experience any of the following symptoms:
              </p>

              <div className="space-y-3">
                {emergencySigns.map((sign) => (
                  <div key={sign} className="flex items-start gap-3">
                    <AlertCircle
                      className="mt-1 shrink-0 text-red-700"
                      size={18}
                    />
                    <p className="text-sm leading-7 text-gray-700">{sign}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Emotional Wellbeing */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Heart className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Emotional Wellbeing
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Women may experience different emotions after MTP, including
                relief, sadness, guilt or a combination of feelings. Emotional
                responses vary, and you deserve care and respect whatever you
                decide.
              </p>

              <div className="space-y-3">
                {emotionalCare.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Heart className="mt-1 shrink-0 text-[#8F1738]" size={18} />
                    <p className="text-sm leading-7 text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#F8F4F6] p-5">
                <p className="font-semibold leading-7 text-[#74122E]">
                  You deserve compassionate, private and non-judgemental
                  support throughout your healthcare journey.
                </p>
              </div>
            </section>

            {/* Contraception */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Contraception After MTP
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Fertility can return quickly after an abortion, sometimes
                within two weeks. If you do not wish to become pregnant again
                immediately, discuss contraception with your doctor.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {contraceptionOptions.map((option) => (
                  <div
                    key={option}
                    className="flex items-center gap-3 rounded-xl border border-[#F0DCE3] p-4"
                  >
                    <CheckCircle2
                      className="shrink-0 text-[#8F1738]"
                      size={19}
                    />
                    <p className="text-sm font-medium text-gray-700">
                      {option}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-7 text-gray-600">
                The clinic lists laparoscopic sterilisation as a day-care
                service. Your doctor can explain whether any contraception
                option is suitable for your health and future plans.
              </p>
            </section>

            {/* Future Pregnancy */}
            <section className="rounded-3xl border border-[#F0DCE3] bg-[#FCF8FA] p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <Baby className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Will MTP Affect Future Pregnancies?
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                When performed safely by a trained medical practitioner at an
                approved facility, MTP generally does not reduce the chances
                of future pregnancy. However, unsafe or incomplete procedures
                can cause infection, scarring or other complications that may
                affect reproductive health.
              </p>

              <p className="mt-4 font-semibold leading-7 text-[#74122E]">
                Appropriate medical care, follow-up and treatment of
                complications help protect your reproductive health.
              </p>
            </section>

            {/* Ultrasound */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Activity className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  When to Consider an Ultrasound First
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                If you have missed a period and suspect pregnancy, your doctor
                may recommend an ultrasound as part of the assessment. It can
                help provide important information before discussing your
                options.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Confirm whether the pregnancy is inside the uterus",
                  "Estimate the duration of pregnancy",
                  "Help identify or rule out an ectopic pregnancy",
                  "Provide information to guide medical decisions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#FCF8FA] p-4"
                  >
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#8F1738]"
                      size={18}
                    />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#F0DCE3] bg-white p-5">
                <h3 className="mb-2 font-semibold text-[#74122E]">
                  Important information about ultrasound
                </h3>
                <p className="text-sm leading-7 text-gray-600">
                  The clinic lists 3D and 4D ultrasound facilities. Under
                  Indian law, disclosure of the sex of the foetus during a
                  scan is prohibited. Ultrasound should be used for legitimate
                  medical purposes.
                </p>
              </div>
            </section>

            {/* Why choose */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Look to Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                Discussing an unplanned pregnancy can feel difficult. A
                respectful consultation gives you the opportunity to explain
                your concerns, understand your health and receive appropriate
                medical guidance.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {reasonsToChoose.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-xl border border-[#F0DCE3] bg-white p-4"
                  >
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#8F1738]"
                      size={19}
                    />
                    <p className="text-sm leading-7 text-gray-700">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="overflow-hidden rounded-3xl bg-[#74122E] p-6 text-white sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <MapPin size={25} />
                <h2 className="text-2xl font-bold">
                  Location and Contact
                </h2>
              </div>

              <p className="leading-8 text-white/90">
                Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
                Nagar, Moradabad, Uttar Pradesh – 244001. The clinic is
                accessible to women from Civil Lines and nearby areas.
              </p>

              <p className="mt-3 leading-8 text-white/90">
                If you are looking for a safe MTP clinic near Civil Lines,
                Moradabad, contact the clinic to discuss your situation
                confidentially and confirm whether the required services are
                available.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:+919079765578"
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
                >
                  <Phone size={20} />
                  <div>
                    <p className="text-xs text-white/70">Call the clinic</p>
                    <p className="font-semibold">+91 90797 65578</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
                >
                  <MessageCircle size={20} />
                  <div>
                    <p className="text-xs text-white/70">WhatsApp</p>
                    <p className="font-semibold">+91 89796 70705</p>
                  </div>
                </a>

                <a
                  href="mailto:drpriyankagynaec@gmail.com"
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-4 transition hover:bg-white/20 sm:col-span-2"
                >
                  <Mail size={20} />
                  <div>
                    <p className="text-xs text-white/70">Email</p>
                    <p className="break-all font-semibold">
                      drpriyankagynaec@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#74122E] transition hover:bg-[#F8E9EE]"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp Us
                </a>
              </div>

              <p className="mt-5 text-xs leading-6 text-white/70">
                Please confirm MTP consultation and service availability
                directly with the clinic. Medical eligibility and treatment
                decisions require an individual clinical assessment.
              </p>
            </section>

            {/* FAQs */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Frequently Asked Questions (FAQs)
                </h2>
                <p className="mt-2 leading-7 text-gray-600">
                  Common questions about safe MTP, medical supervision and
                  confidential care.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-[#F0DCE3] bg-white p-5 shadow-sm"
                  >
                    <h3 className="flex items-start gap-3 font-bold leading-7 text-[#74122E]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F8F0F3] text-sm text-[#8F1738]">
                        {index + 1}
                      </span>
                      {faq.q}
                    </h3>

                    <p className="mt-3 pl-10 text-sm leading-7 text-gray-600">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Legal and medical note */}
            <section className="rounded-2xl border border-[#F0DCE3] bg-[#FCF8FA] p-5">
              <div className="flex items-start gap-3">
                <Info
                  className="mt-1 shrink-0 text-[#8F1738]"
                  size={21}
                />
                <div>
                  <h3 className="font-semibold text-[#74122E]">
                    Medical and Legal Information
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    This article is for general awareness and is not a
                    substitute for individual medical or legal advice. MTP
                    eligibility, consent requirements and available methods
                    depend on applicable law and clinical assessment. Please
                    consult a registered medical practitioner for guidance
                    about your circumstances.
                  </p>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="rounded-3xl border border-[#F0DCE3] bg-white p-6 text-center shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Need Confidential Gynaecological Guidance?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-8 text-gray-600">
                Your health, privacy and comfort matter. Contact Dr. Priyanka
                Gynaec to discuss your concerns, understand the available
                medical options and confirm the services offered by the
                clinic.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+919079765578"
                  className="rounded-full bg-[#8F1738] px-7 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Call for Consultation
                </a>

                <Link
                  href="/contact"
                  className="rounded-full border border-[#8F1738] px-7 py-3 font-semibold text-[#8F1738] transition hover:bg-[#F8F0F3]"
                >
                  Contact Us
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  View Services
                </Link>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />

              <div className="rounded-2xl border border-[#F0DCE3] bg-[#FCF8FA] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Award className="text-[#8F1738]" size={25} />
                  <h3 className="text-lg font-bold text-[#74122E]">
                    Dr. Priyanka Gynaec
                  </h3>
                </div>

                <p className="text-sm leading-7 text-gray-600">
                  Women's healthcare, pregnancy care, gynaecology and
                  fertility-related services in Moradabad.
                </p>

                <div className="mt-5 space-y-4 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                      size={18}
                    />
                    <span>
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                      Pradesh – 244001
                    </span>
                  </div>

                  <a
                    href="tel:+919079765578"
                    className="flex items-center gap-3 transition hover:text-[#8F1738]"
                  >
                    <Phone
                      className="shrink-0 text-[#8F1738]"
                      size={18}
                    />
                    +91 90797 65578
                  </a>

                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="flex items-start gap-3 break-all transition hover:text-[#8F1738]"
                  >
                    <Mail
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                      size={18}
                    />
                    drpriyankagynaec@gmail.com
                  </a>

                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition hover:text-[#8F1738]"
                  >
                    <Globe
                      className="shrink-0 text-[#8F1738]"
                      size={18}
                    />
                    Official Website
                  </a>
                </div>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#8F1738] px-5 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <MessageCircle size={18} />
                  WhatsApp Enquiry
                </a>

                <p className="mt-3 text-xs leading-5 text-gray-500">
                  Contact the clinic to confirm MTP service availability.
                </p>
              </div>

              <div className="rounded-2xl border border-[#F0DCE3] bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <LockKeyhole className="text-[#8F1738]" size={23} />
                  <h3 className="font-bold text-[#74122E]">
                    Your Privacy Matters
                  </h3>
                </div>
                <p className="text-sm leading-7 text-gray-600">
                  Sensitive health concerns deserve respectful discussion.
                  Ask the clinic about its consultation and privacy practices
                  when booking.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
