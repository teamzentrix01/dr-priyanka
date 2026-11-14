
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
  Clock,
  AlertCircle,
  MessageCircle,
  CheckCircle2,
  Microscope,
  Baby,
  CalendarCheck,
  Scissors,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function HysteroscopySpecialist() {
  const faqs = [
    {
      q: "What is hysteroscopy?",
      a: "It is a procedure in which a thin camera is passed through the vagina and cervix to look inside the uterus, without abdominal cuts.",
    },
    {
      q: "Is hysteroscopy painful?",
      a: "Most women feel mild cramps or pressure during or after the procedure. Anaesthesia or sedation may be used depending on the procedure and individual circumstances.",
    },
    {
      q: "How long does hysteroscopy take?",
      a: "Diagnostic hysteroscopy is often short. Operative procedures may take longer depending on the condition being treated.",
    },
    {
      q: "Can polyps be removed during hysteroscopy?",
      a: "Yes. Hysteroscopic polypectomy allows the doctor to remove uterine polyps through the hysteroscope without abdominal cuts.",
    },
    {
      q: "When is the best time to do hysteroscopy?",
      a: "It is often scheduled after your period ends, when the uterine lining is thinner. Your doctor will recommend the most appropriate date.",
    },
    {
      q: "Can hysteroscopy help with infertility?",
      a: "It can help identify and treat uterine conditions such as polyps, adhesions or a septum, which may affect conception in some women.",
    },
    {
      q: "How soon can I return to my routine after hysteroscopy?",
      a: "Many women resume normal activities within a day or two, but recovery depends on the procedure and whether anaesthesia was used. Follow your doctor's instructions.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or email drpriyankagynaec@gmail.com.",
    },
  ];

  const hysteroscopyTypes = [
    {
      title: "Diagnostic Hysteroscopy",
      description:
        "Used to investigate symptoms and examine the uterine cavity. It is often a quick procedure and may require little or no anaesthesia, depending on the case.",
      icon: Microscope,
    },
    {
      title: "Operative Hysteroscopy",
      description:
        "Used to treat problems found inside the uterus, such as polyps, selected small fibroids or scar tissue, with fine instruments passed through the hysteroscope.",
      icon: Scissors,
    },
  ];

  const reasons = [
    "Heavy or prolonged menstrual periods",
    "Bleeding between periods",
    "Bleeding after menopause",
    "Suspected uterine polyps or submucosal fibroids",
    "Repeated miscarriages",
    "Difficulty conceiving or evaluation before fertility treatment such as IVF",
    "An abnormal ultrasound finding involving the uterine cavity",
    "Suspected scar tissue, sometimes following previous surgery or infection",
    "A suspected uterine septum or another structural abnormality",
    "A displaced or retained intrauterine device",
    "Retained tissue after a miscarriage or delivery",
  ];

  const conditions = [
    {
      title: "Uterine Polyps",
      description:
        "Soft growths on the uterine lining that may cause irregular or heavy bleeding and can sometimes affect fertility. They can be removed through hysteroscopic polypectomy.",
    },
    {
      title: "Submucosal Fibroids",
      description:
        "Fibroids that project into the uterine cavity may cause heavy bleeding and affect conception. Some can be removed hysteroscopically, depending on their size and position.",
    },
    {
      title: "Intrauterine Adhesions",
      description:
        "Scar tissue inside the uterus that may cause lighter periods or fertility problems. Hysteroscopy can help identify and, in suitable cases, treat these adhesions.",
    },
    {
      title: "Uterine Septum",
      description:
        "A band of tissue that partially or completely divides the uterine cavity. It may be associated with miscarriage in some women and requires individual assessment.",
    },
    {
      title: "Thickened or Abnormal Uterine Lining",
      description:
        "Hysteroscopy allows direct examination and targeted tissue sampling when further investigation of the uterine lining is needed.",
    },
  ];

  const benefits = [
    "No abdominal incisions are required",
    "Direct visual examination of the uterine cavity",
    "Accurate targeted biopsy when needed",
    "Certain problems can be treated during the same procedure",
    "Short procedure time in many cases",
    "Often performed as a day-care procedure with quick recovery",
    "Can improve the accuracy of fertility evaluation",
  ];

  const preparation = [
    "The procedure may be scheduled after your period has finished, often during the first half of the cycle when the uterine lining is thinner.",
    "Pregnancy should be ruled out before the procedure.",
    "Inform your doctor about all medicines, allergies, previous surgeries and bleeding disorders.",
    "Follow fasting instructions if sedation or anaesthesia is planned.",
    "Bring previous ultrasound reports and relevant medical records.",
    "Arrange for someone to accompany you, especially if sedation or anaesthesia will be used.",
    "Wear comfortable clothes and bring sanitary pads.",
  ];

  const procedureSteps = [
    "You lie in a comfortable position, and your privacy is respected throughout the procedure.",
    "Anaesthesia or sedation is provided if required.",
    "The hysteroscope is gently passed through the vagina and cervix into the uterus.",
    "A clear fluid or gas is used to gently expand the uterine cavity so the doctor can see clearly.",
    "The doctor examines the cavity and may take a biopsy or treat a problem if needed.",
    "The hysteroscope is removed, and you rest while the medical team monitors your recovery.",
  ];

  const recoverySymptoms = [
    {
      title: "Mild Cramps",
      description:
        "Period-like cramps may occur and are often manageable with pain relief recommended by your doctor.",
    },
    {
      title: "Light Bleeding or Spotting",
      description:
        "A small amount of vaginal bleeding or spotting may continue for a few days.",
    },
    {
      title: "Temporary Discharge",
      description:
        "Watery or blood-tinged vaginal discharge may occur for a short time.",
    },
    {
      title: "Mild Fatigue",
      description:
        "You may feel tired after the procedure, particularly if sedation or anaesthesia was used.",
    },
  ];

  const recoveryTips = [
    "Rest for the remainder of the day after the procedure.",
    "Use sanitary pads instead of tampons until your doctor advises otherwise.",
    "Avoid sexual intercourse until your doctor confirms it is safe to resume.",
    "Follow instructions about returning to work and regular activities.",
    "Attend your follow-up visit to discuss the findings and any laboratory reports.",
  ];

  const warningSigns = [
    "Heavy or increasing vaginal bleeding",
    "Fever or chills",
    "Severe or worsening abdominal or pelvic pain",
    "Foul-smelling vaginal discharge",
    "Dizziness or feeling faint",
  ];

  const fertilityPoints = [
    "Identifying uterine polyps that may affect implantation",
    "Detecting intrauterine adhesions that may interfere with the uterine cavity",
    "Evaluating a uterine septum or other structural abnormalities",
    "Supporting assessment before selected fertility treatments, including IVF",
  ];

  const clinicHighlights = [
    "A doctor who listens and explains treatment options clearly",
    "Both diagnostic and operative hysteroscopy services",
    "Laparoscopy and hysteroscopy available within the same practice",
    "3D and 4D ultrasound facilities",
    "Fertility and IVF services under one roof",
    "Continuity of care before and after the procedure",
    "A private and respectful clinical setting",
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          {/* Main Article */}
          <div className="order-1 min-w-0 space-y-10">
            {/* Introduction */}
            <section className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F8F4F6] px-4 py-2 text-sm font-semibold text-[#8F1738]">
                <HeartPulse size={17} />
                Women's Diagnostic and Surgical Care
              </span>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Hysteroscopy Specialist Near Civil Lines, Moradabad: Gentle
                Look Inside the Uterus
              </h1>

              <p className="text-base leading-8 text-gray-600">
                Heavy periods, bleeding between periods, repeated miscarriages
                or difficulty conceiving can have several causes. Some
                conditions develop inside the uterus and may not be clearly
                visible on a routine ultrasound. Hysteroscopy allows a doctor
                to examine the uterine cavity directly, identify possible
                problems and, in many cases, treat them during the same
                procedure.
              </p>

              <p className="text-base leading-8 text-gray-600">
                If you are looking for a{" "}
                <strong className="text-[#74122E]">
                  hysteroscopy specialist near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers
                diagnostic and operative hysteroscopy for suitable patients.
              </p>
            </section>

            {/* Website Overview */}
            <section className="rounded-2xl border border-[#F0DCE3] bg-[#FDF8FA] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8F1738] text-white">
                  <Award size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Website Overview: Dr. Priyanka Gynaec
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Dr. Priyanka Gynaec is presented as a women's health and
                fertility centre guided by the philosophy{" "}
                <strong className="text-[#74122E]">"Her Health First."</strong>{" "}
                Dr. Priyanka Pachauri focuses on laparoscopic gynaecological
                surgery, antenatal and postnatal care, high-risk pregnancies
                and menstrual disorder treatment.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The clinic lists two hysteroscopy services: diagnostic
                hysteroscopy for examining the uterine cavity and
                hysteroscopic polypectomy for precision removal of uterine
                polyps without abdominal cuts. Other listed facilities include
                laparoscopic surgery, fertility and IVF services, and 3D and
                4D ultrasound.
              </p>
            </section>

            {/* What is hysteroscopy */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                What Is Hysteroscopy?
              </h2>

              <p className="leading-8 text-gray-600">
                Hysteroscopy is a procedure in which a thin, lighted tube with
                a camera, called a hysteroscope, is passed through the vagina
                and cervix into the uterus. The camera sends images to a
                screen, allowing the doctor to examine the uterine lining and
                the openings of the fallopian tubes.
              </p>

              <div className="flex flex-col gap-5 rounded-2xl border border-[#F0DCE3] bg-[#FDF8FA] p-5 sm:flex-row sm:items-center sm:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#8F1738] text-white">
                  <Microscope size={27} />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-[#74122E]">
                    A Direct View Inside the Uterus
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">
                    Unlike abdominal surgery, hysteroscopy does not require
                    abdominal cuts. The instrument enters through the natural
                    vaginal and cervical passage.
                  </p>
                </div>
              </div>
            </section>

            {/* Types */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Types of Hysteroscopy
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                {hysteroscopyTypes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F4F6] text-[#8F1738]">
                        <Icon size={24} />
                      </div>
                      <h3 className="mb-3 text-lg font-bold text-[#74122E]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="rounded-xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-4 text-sm leading-7 text-gray-700">
                Sometimes diagnostic and operative hysteroscopy can be
                performed during the same visit, depending on the findings
                and the treatment required.
              </p>
            </section>

            {/* Why is it done */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Why Is Hysteroscopy Done?
              </h2>

              <p className="leading-8 text-gray-600">
                Your gynaecologist may recommend hysteroscopy when symptoms or
                test results suggest a problem inside the uterine cavity.
                Common reasons include:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#FAFAFA] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conditions */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Conditions Hysteroscopy Can Find or Treat
              </h2>

              <p className="leading-8 text-gray-600">
                Hysteroscopy gives the doctor a direct view of the uterine
                cavity and can help diagnose or treat several conditions.
              </p>

              <div className="space-y-4">
                {conditions.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F8F4F6] font-bold text-[#8F1738]">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Benefits of Hysteroscopy
              </h2>

              <p className="leading-8 text-gray-600">
                Hysteroscopy offers both diagnostic and treatment advantages
                for suitable uterine conditions. Its potential benefits
                include:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl border border-[#F0DCE3] bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Preparation */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8F1738] text-white">
                  <ClipboardList size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                  How to Prepare for Hysteroscopy
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Your doctor will provide personalised instructions based on
                the type of hysteroscopy and your health. Common preparation
                advice includes:
              </p>

              <div className="space-y-3">
                {preparation.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Do not hesitate to ask about the type of anaesthesia, expected
                procedure time, preparation and aftercare instructions.
              </p>
            </section>

            {/* Procedure */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                What Happens During the Procedure?
              </h2>

              <p className="leading-8 text-gray-600">
                The procedure is performed by passing the hysteroscope through
                the natural vaginal and cervical passage. The steps commonly
                include:
              </p>

              <div className="space-y-4">
                {procedureSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-xl border border-gray-200 p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8F1738] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-gray-700">{step}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-[#FDF8FA] p-5">
                <h3 className="mb-2 font-bold text-[#74122E]">
                  What Might You Feel?
                </h3>
                <p className="text-sm leading-7 text-gray-600">
                  You may experience mild cramps or pressure, similar to
                  period pain. This usually settles quickly, although the
                  experience varies depending on the procedure and pain
                  management used.
                </p>
              </div>
            </section>

            {/* Polypectomy */}
            <section className="rounded-2xl border border-[#F0DCE3] bg-[#FDF8FA] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8F1738] text-white">
                  <Scissors size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Hysteroscopic Polypectomy
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Uterine polyps are common growths on the uterine lining and
                may cause abnormal bleeding. During hysteroscopic
                polypectomy, the doctor views the polyp directly and removes
                it through the hysteroscope. No abdominal cuts are needed.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The clinic describes this as precision hysteroscopic removal
                without cuts. The removed tissue may be sent to a laboratory
                for examination, which is a routine part of evaluating
                certain tissue samples.
              </p>
            </section>

            {/* Recovery */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Recovery After Hysteroscopy
              </h2>

              <p className="leading-8 text-gray-600">
                Recovery is usually quick, although it depends on whether the
                procedure was diagnostic or operative and whether anaesthesia
                was used. After hysteroscopy, you may notice:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {recoverySymptoms.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F4F6] text-[#8F1738]">
                      <Activity size={21} />
                    </div>
                    <h3 className="mb-2 font-bold text-[#74122E]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#74122E]">
                Helpful Recovery Tips
              </h3>

              <div className="space-y-3">
                {recoveryTips.map((tip) => (
                  <div
                    key={tip}
                    className="flex items-start gap-3 rounded-lg bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <div className="mb-3 flex items-center gap-2 text-red-700">
                  <AlertCircle size={21} />
                  <h3 className="font-bold">When to Contact Your Doctor</h3>
                </div>
                <p className="mb-3 text-sm leading-7 text-red-800">
                  Contact your doctor promptly if you experience any of the
                  following:
                </p>
                <ul className="space-y-2">
                  {warningSigns.map((sign) => (
                    <li
                      key={sign}
                      className="flex items-start gap-2 text-sm leading-6 text-red-800"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Risks */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Risks to Understand
              </h2>

              <p className="leading-8 text-gray-600">
                Hysteroscopy is generally considered a safe procedure, but
                like any medical procedure, it carries some risks. These may
                include:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Mild bleeding or spotting",
                  "Infection",
                  "Discomfort related to the fluid used to expand the uterine cavity",
                  "Reaction to anaesthesia or sedation",
                  "Rare injury to the uterus or cervix",
                ].map((risk) => (
                  <div
                    key={risk}
                    className="flex items-start gap-3 rounded-lg border border-gray-200 p-4"
                  >
                    <ShieldCheck
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{risk}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Your doctor will explain the potential risks and precautions
                before the procedure and take steps to reduce complications.
              </p>
            </section>

            {/* Fertility */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8F1738] text-white">
                  <Baby size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                  Hysteroscopy and Fertility
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Hysteroscopy may form part of a fertility evaluation because
                certain conditions inside the uterus can affect implantation
                and pregnancy. Identifying and treating polyps, adhesions or
                a uterine septum may improve the chances of conception in
                some women, depending on the underlying condition.
              </p>

              <div className="space-y-3">
                {fertilityPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-lg bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                The clinic's fertility and IVF services allow uterine
                evaluation to be coordinated with other investigations and
                treatment planning.
              </p>
            </section>

            {/* Hysteroscopy and laparoscopy */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Hysteroscopy Together With Laparoscopy
              </h2>

              <p className="leading-8 text-gray-600">
                Sometimes a complete gynaecological evaluation requires both
                procedures. Hysteroscopy examines the inside of the uterus,
                while laparoscopy allows the surgeon to view the outer surface
                of the uterus, fallopian tubes and ovaries.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-5">
                  <Microscope size={25} className="mb-3 text-[#8F1738]" />
                  <h3 className="mb-2 font-bold text-[#74122E]">
                    Hysteroscopy
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">
                    Examines the uterine cavity and helps identify conditions
                    affecting the uterine lining or internal structure.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <Activity size={25} className="mb-3 text-[#8F1738]" />
                  <h3 className="mb-2 font-bold text-[#74122E]">
                    Laparoscopy
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">
                    Examines the pelvic organs from outside the uterus and
                    may help evaluate conditions involving the tubes, ovaries
                    and pelvis.
                  </p>
                </div>
              </div>

              <p className="leading-8 text-gray-600">
                Combining the procedures may help evaluate infertility,
                pelvic pain or abnormal bleeding in selected cases. The
                clinic offers both procedures and highlights high-definition
                3D laparoscopic facilities.
              </p>
            </section>

            {/* When to see doctor */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                When to See a Doctor
              </h2>

              <p className="leading-8 text-gray-600">
                Consider booking a gynaecological consultation if you
                experience:
              </p>

              <div className="space-y-3">
                {[
                  "Periods that are heavy, prolonged or irregular",
                  "Spotting between periods or bleeding after intercourse",
                  "Any bleeding after menopause",
                  "Repeated pregnancy loss",
                  "Difficulty conceiving after a year of trying, or after six months if you are over 35",
                  "An ultrasound report showing a thickened uterine lining, polyp or fibroid",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 bg-[#FAFAFA] p-4"
                  >
                    <CalendarCheck
                      size={20}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Early evaluation can help identify treatable causes and guide
                appropriate care. Any bleeding after menopause should be
                assessed by a healthcare professional.
              </p>
            </section>

            {/* Why choose */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                Choosing a specialist for hysteroscopy involves clear
                communication, appropriate diagnosis and follow-up care.
                Dr. Priyanka Gynaec highlights the following services and
                facilities:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {clinicHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="space-y-6">
              <div className="rounded-2xl bg-[#74122E] p-6 text-white sm:p-8">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                  <HeartPulse size={17} />
                  Women's Diagnostic Care
                </span>

                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                  Consult a Hysteroscopy Specialist Near Civil Lines,
                  Moradabad
                </h2>

                <p className="mb-6 leading-8 text-white/85">
                  If you have abnormal bleeding, repeated miscarriages or
                  difficulty conceiving, consult Dr. Priyanka Pachauri to
                  discuss whether diagnostic or operative hysteroscopy is
                  appropriate for you.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+919079765578"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#74122E] transition hover:bg-gray-100"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-5 text-2xl font-bold text-[#74122E]">
                  Location and Contact
                </h2>

                <p className="mb-6 leading-8 text-gray-600">
                  Dr. Priyanka Gynaec is located at A2, near Old Roadways,
                  Gandhi Nagar, Moradabad, Uttar Pradesh 244001. The clinic
                  is accessible to women from Civil Lines and nearby areas.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0 text-[#8F1738]" size={20} />
                    <div>
                      <p className="font-semibold text-[#74122E]">Doctor</p>
                      <p className="text-gray-600">
                        Dr. Priyanka Pachauri
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0 text-[#8F1738]" size={20} />
                    <div>
                      <p className="font-semibold text-[#74122E]">Phone</p>
                      <a
                        href="tel:+919079765578"
                        className="text-gray-600 transition hover:text-[#8F1738]"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle
                      className="mt-1 shrink-0 text-[#8F1738]"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-[#74122E]">WhatsApp</p>
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 transition hover:text-[#8F1738]"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0 text-[#8F1738]" size={20} />
                    <div>
                      <p className="font-semibold text-[#74122E]">Email</p>
                      <a
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all text-gray-600 transition hover:text-[#8F1738]"
                      >
                        drpriyankagynaec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-1 shrink-0 text-[#8F1738]"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-[#74122E]">Address</p>
                      <p className="leading-7 text-gray-600">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0 text-[#8F1738]" size={20} />
                    <div>
                      <p className="font-semibold text-[#74122E]">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-gray-600 transition hover:text-[#8F1738]"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-[#8F1738] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#74122E]"
                  >
                    Book Consultation
                  </Link>

                  <Link
                    href="/services"
                    className="rounded-lg border border-[#8F1738] px-5 py-3 text-sm font-semibold text-[#8F1738] transition hover:bg-[#F8F4F6]"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="space-y-6">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#8F1738]">
                  Common Questions
                </span>
                <h2 className="mt-2 text-2xl font-bold text-[#74122E] sm:text-3xl">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="mb-3 flex items-start gap-3 font-bold text-[#74122E]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F8F4F6] text-sm text-[#8F1738]">
                        {index + 1}
                      </span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="pl-10 text-sm leading-7 text-gray-600">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="rounded-2xl border border-[#F0DCE3] bg-[#FDF8FA] p-6 text-center sm:p-8">
              <h2 className="mb-3 text-2xl font-bold text-[#74122E]">
                Take the Next Step Towards Better Women's Health
              </h2>

              <p className="mx-auto mb-6 max-w-2xl leading-8 text-gray-600">
                Get guidance about diagnostic hysteroscopy, polyp removal and
                uterine evaluation. Contact Dr. Priyanka Gynaec to arrange a
                consultation in Moradabad.
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#F8F4F6]"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar Enquiry Form */}
          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />

              <div className="rounded-2xl border border-[#F0DCE3] bg-[#FDF8FA] p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8F1738] text-white">
                  <Microscope size={24} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#74122E]">
                  Need Guidance About Hysteroscopy?
                </h3>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Discuss abnormal bleeding, uterine polyps, fertility
                  evaluation and available hysteroscopy options with
                  Dr. Priyanka Pachauri.
                </p>

                <a
                  href="tel:+919079765578"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8F1738] px-5 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={17} />
                  +91 90797 65578
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-[#8F1738] px-5 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  <MessageCircle size={17} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
