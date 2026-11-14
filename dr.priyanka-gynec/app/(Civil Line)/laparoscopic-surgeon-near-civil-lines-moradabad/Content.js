
import Link from "next/link";
import {
  Activity,
  Award,
  Baby,
  CheckCircle2,
  ClipboardList,
  Globe,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Camera,
  Clock,
  Scissors,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function LaparoscopicSurgeon() {
  const faqs = [
    {
      q: "What is laparoscopic surgery?",
      a: "It is a minimally invasive technique in which surgery is performed through a few small cuts using a camera and fine instruments.",
    },
    {
      q: "Is laparoscopic surgery painful?",
      a: "Most women have less pain than after open surgery. Mild discomfort is common and is managed with prescribed medicines.",
    },
    {
      q: "How long is the hospital stay?",
      a: "It depends on the procedure. Many keyhole surgeries need a short hospital stay, and some can be performed as day-care procedures.",
    },
    {
      q: "Can fibroids be removed without removing the uterus?",
      a: "Yes. Laparoscopic myomectomy removes fibroids while preserving the uterus, when medically suitable.",
    },
    {
      q: "Will ovarian cyst surgery affect my fertility?",
      a: "Laparoscopic cystectomy aims to remove the cyst while preserving healthy ovarian tissue. Discuss your future fertility plans with your doctor before surgery.",
    },
    {
      q: "Is surgery always needed for endometriosis?",
      a: "No. Some women manage endometriosis with medicines. Surgery may be considered for severe pain, cysts or fertility-related problems.",
    },
    {
      q: "When can I return to work after laparoscopic surgery?",
      a: "Recovery varies by procedure. Many women resume light activity within days to a couple of weeks, but you should follow your surgeon's advice.",
    },
    {
      q: "How do I book a consultation?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or email drpriyankagynaec@gmail.com.",
    },
  ];

  const procedures = [
    {
      title: "Ovarian Cystectomy",
      description:
        "Laparoscopic removal of ovarian cysts while aiming to preserve healthy ovarian tissue and support future fertility.",
      icon: HeartPulse,
    },
    {
      title: "Laparoscopic Myomectomy",
      description:
        "Removal of uterine fibroids while preserving the uterus when appropriate, particularly for women planning pregnancy.",
      icon: Activity,
    },
    {
      title: "Endometriosis Surgery",
      description:
        "Surgical treatment of endometriosis deposits to help manage pelvic pain and improve quality of life.",
      icon: Stethoscope,
    },
    {
      title: "Laparoscopic Hysterectomy",
      description:
        "Removal of the uterus through a minimally invasive approach when hysterectomy is medically recommended.",
      icon: Scissors,
    },
    {
      title: "Sacrocolpopexy",
      description:
        "A keyhole surgical procedure used to repair uterine or vaginal vault prolapse.",
      icon: ShieldCheck,
    },
    {
      title: "Laparoscopic Sterilisation",
      description:
        "A minimally invasive tubal ligation procedure for women who have decided on permanent contraception.",
      icon: CheckCircle2,
    },
  ];

  const benefits = [
    "Smaller incisions and less visible scarring",
    "Less pain after the operation in many cases",
    "Shorter hospital stay, sometimes day-care",
    "Faster recovery and earlier return to normal activities",
    "Lower risk of wound infection and hernia in suitable cases",
    "Less blood loss in many procedures",
    "Clear, magnified view of internal organs",
  ];

  const warningSigns = [
    "Heavy or prolonged periods that do not respond to medicines",
    "Severe period pain or chronic pelvic pain",
    "Known ovarian cysts or uterine fibroids",
    "A feeling of heaviness or something coming down in the vagina",
    "Pain during intercourse",
    "Difficulty conceiving with suspected endometriosis or blocked tubes",
    "Bleeding between periods or after menopause",
    "Urine leakage along with prolapse symptoms",
  ];

  const preparation = [
    "Complete pre-operative blood tests and medical assessment",
    "Tell your doctor about all medicines, allergies and previous surgeries",
    "Stop certain medicines only if your doctor advises you to do so",
    "Follow fasting instructions before anaesthesia",
    "Arrange for a family member to accompany you",
    "Pack comfortable clothes and essential items for your hospital stay",
  ];

  const recoveryTips = [
    "Walk gently and rest as advised by your surgeon",
    "Keep small surgical wounds clean and dry",
    "Eat light, nutritious meals and drink enough fluids",
    "Avoid heavy lifting until your doctor allows it",
    "Take prescribed medicines on time",
    "Attend all recommended follow-up appointments",
  ];

  const reasons = [
    "A doctor who listens and explains treatment options clearly",
    "High-definition 3D laparoscopic facilities",
    "A wide range of keyhole and hysteroscopic procedures",
    "Focus on uterus-preserving and fertility-conscious options",
    "Continuity of care before and after surgery",
    "Fertility, pregnancy and paediatric services under one roof",
    "A private and respectful environment for women's healthcare",
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
                Advanced Gynaecological Surgery
              </span>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Laparoscopic Surgeon Near Civil Lines, Moradabad: Advanced
                Keyhole Surgery for Women
              </h1>

              <p className="text-base leading-8 text-gray-600">
                The word surgery worries many people. Women often ask whether
                it will hurt, how long they will need to stay in hospital,
                whether there will be a large scar and when they can return to
                their families and work. Laparoscopic, or keyhole, surgery has
                changed many of these answers. If you are searching for a{" "}
                <strong className="text-gray-800">
                  laparoscopic surgeon near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers 3D
                laparoscopic care for a range of gynaecological conditions.
              </p>

              <div className="rounded-2xl border border-[#F0DCE3] bg-[#F8F4F6] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-white p-3 text-[#8F1738]">
                    <Camera size={25} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#74122E]">
                      Modern 3D Laparoscopic Care
                    </h2>
                    <p className="mt-2 leading-7 text-gray-600">
                      High-definition 3D visualisation helps provide depth
                      perception during keyhole procedures. Your surgeon will
                      assess whether this approach is suitable for your
                      individual condition.
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
                centre guided by the philosophy "Her Health First." Dr.
                Priyanka Pachauri is presented as a gynaecologist in Moradabad
                specialising in laparoscopic gynaecological surgery, antenatal
                and postnatal care, high-risk pregnancies and menstrual
                disorder treatment.
              </p>

              <p className="leading-8 text-gray-600">
                The website highlights high-definition 3D laparoscopic surgery
                as a key facility. Listed laparoscopic and related services
                include:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Gynaecology and laparoscopy",
                  "Laparoscopic cystectomy",
                  "Laparoscopic myomectomy",
                  "Laparoscopic hysterectomy",
                  "Sacrocolpopexy",
                  "Laparoscopic sterilisation",
                  "Endometriosis surgery",
                  "Diagnostic hysteroscopy",
                  "Hysteroscopic polypectomy",
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

              <p className="leading-8 text-gray-600">
                The site also mentions the clinic's focus on laparoscopy,
                fertility treatment and endometriosis care.
              </p>
            </section>

            {/* What is Laparoscopy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Is Laparoscopic Surgery?
              </h2>

              <p className="leading-8 text-gray-600">
                Laparoscopy, often called keyhole surgery, is a minimally
                invasive surgical technique. The surgeon makes a few small
                cuts, usually around half to one centimetre, in the abdomen. A
                thin tube with a camera is inserted, and the surgeon operates
                using fine instruments while viewing a magnified image on a
                screen.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 p-5">
                  <div className="mb-3 inline-flex rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                    <Camera size={24} />
                  </div>
                  <h3 className="font-bold text-[#74122E]">
                    Camera-Assisted Surgery
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    A small camera provides a magnified view of the operating
                    area, helping the surgeon work through small incisions.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 p-5">
                  <div className="mb-3 inline-flex rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-bold text-[#74122E]">
                    3D Visualisation
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    In 3D laparoscopy, the camera provides depth perception,
                    which can help the surgeon judge distances and work with
                    greater precision.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Benefits of Laparoscopic Surgery
              </h2>

              <p className="leading-8 text-gray-600">
                Compared with open surgery, laparoscopy often offers several
                potential benefits, depending on the procedure and the
                patient's health.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
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
                    Important to know:
                  </strong>{" "}
                  Not every patient or condition is suitable for keyhole
                  surgery. Your doctor will assess your medical history,
                  condition and test results before recommending the most
                  appropriate approach.
                </p>
              </div>
            </section>

            {/* Conditions */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Conditions Treated With Laparoscopy
              </h2>

              <p className="leading-8 text-gray-600">
                Laparoscopic surgery can be used to diagnose and treat several
                gynaecological conditions. The choice of procedure depends on
                the diagnosis, symptoms and treatment goals.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {procedures.map((procedure) => {
                  const Icon = procedure.icon;

                  return (
                    <div
                      key={procedure.title}
                      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="mb-4 inline-flex rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-[#74122E]">
                        {procedure.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {procedure.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-gray-100 p-5">
                <h3 className="text-lg font-bold text-[#74122E]">
                  Diagnostic Laparoscopy
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  Diagnostic laparoscopy may be used to investigate unexplained
                  pelvic pain, suspected endometriosis, adhesions or certain
                  causes of infertility when other investigations have not
                  provided enough information.
                </p>
              </div>
            </section>

            {/* Hysteroscopy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Hysteroscopy: Looking Inside the Uterus
              </h2>

              <p className="leading-8 text-gray-600">
                Hysteroscopy is different from laparoscopy. It uses a thin
                camera passed through the vagina and cervix to examine the
                uterine cavity. No abdominal cuts are required.
              </p>

              <div className="space-y-4">
                <div className="rounded-2xl bg-[#F8F4F6] p-5">
                  <h3 className="font-bold text-[#74122E]">
                    Diagnostic Hysteroscopy
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    It gently examines the uterine cavity to investigate
                    possible causes of abnormal bleeding or fertility
                    problems.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8F4F6] p-5">
                  <h3 className="font-bold text-[#74122E]">
                    Hysteroscopic Polypectomy
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    This procedure removes uterine polyps through the same
                    route, without abdominal incisions.
                  </p>
                </div>
              </div>

              <p className="leading-8 text-gray-600">
                These procedures may be used alongside laparoscopy when a
                woman needs a more complete evaluation of her gynaecological
                condition.
              </p>
            </section>

            {/* Symptoms */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Signs That You May Need a Surgical Opinion
              </h2>

              <p className="leading-8 text-gray-600">
                Persistent symptoms should be evaluated by a gynaecologist.
                They do not automatically mean that surgery is necessary, but
                a specialist assessment can help identify the cause.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {warningSigns.map((sign) => (
                  <div
                    key={sign}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-6 text-gray-700">{sign}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Many gynaecological conditions can be managed with medicines
                or observation. Surgery is considered only when it is
                appropriate and necessary for the patient's condition.
              </p>
            </section>

            {/* Surgical Decision */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                How a Surgical Decision Is Made
              </h2>

              <p className="leading-8 text-gray-600">
                A responsible surgeon does not recommend an operation
                lightly. The decision usually follows a careful evaluation
                and discussion of available treatment choices.
              </p>

              <div className="space-y-3">
                {[
                  "A detailed medical history and examination",
                  "Ultrasound and other investigations, when necessary",
                  "A discussion of non-surgical treatment options",
                  "An explanation of the proposed procedure, benefits, risks and alternatives",
                  "Time to ask questions and seek a second opinion if desired",
                  "Your informed consent before the procedure",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 rounded-xl border border-gray-100 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8F1738] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 leading-7 text-gray-700">{step}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                You should always feel comfortable asking why surgery is
                advised, what alternatives are available and what may happen
                if you decide to wait.
              </p>
            </section>

            {/* Preparation */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Preparing for Laparoscopic Surgery
              </h2>

              <p className="leading-8 text-gray-600">
                Your doctor will provide specific instructions based on your
                health and the planned procedure. Preparation usually
                includes:
              </p>

              <div className="rounded-2xl border border-gray-100 p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <ClipboardList className="text-[#8F1738]" size={25} />
                  <h3 className="text-lg font-bold text-[#74122E]">
                    Pre-Surgery Checklist
                  </h3>
                </div>

                <div className="space-y-3">
                  {preparation.map((item) => (
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
                Ask your surgeon about the type of anaesthesia, expected
                hospital stay, recovery time and what to expect after the
                operation.
              </p>
            </section>

            {/* Procedure */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Happens During the Procedure?
              </h2>

              <p className="leading-8 text-gray-600">
                Laparoscopic surgery is generally performed under general
                anaesthesia. The surgeon inflates the abdomen with gas to
                create working space, inserts the camera and instruments
                through small incisions, and performs the planned procedure
                while viewing the operating area on a screen.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Anaesthesia",
                    text: "You are given general anaesthesia before the operation.",
                  },
                  {
                    number: "02",
                    title: "Keyhole Access",
                    text: "Small incisions are made to insert the camera and instruments.",
                  },
                  {
                    number: "03",
                    title: "Surgical Treatment",
                    text: "The surgeon performs the planned procedure and closes the small cuts.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl bg-[#F8F4F6] p-5"
                  >
                    <span className="text-2xl font-bold text-[#8F1738]">
                      {item.number}
                    </span>
                    <h3 className="mt-3 font-bold text-[#74122E]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                The duration depends on the type of procedure and its
                complexity. Your surgeon can explain the expected timeline
                before surgery.
              </p>
            </section>

            {/* Recovery */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Recovery After Laparoscopic Surgery
              </h2>

              <p className="leading-8 text-gray-600">
                Recovery varies depending on the operation, the patient's
                health and whether any complications occur. Women commonly
                notice:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Mild abdominal pain or shoulder discomfort from the gas, usually settling in a day or two",
                  "Early walking, generally encouraged on the same or following day",
                  "A shorter hospital stay for many procedures",
                  "Earlier return to light activities compared with open surgery in suitable cases",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-100 p-4"
                  >
                    <div className="mb-2 text-[#8F1738]">
                      <Clock size={22} />
                    </div>
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#F8F4F6] p-5 sm:p-6">
                <h3 className="mb-4 text-lg font-bold text-[#74122E]">
                  Helpful Recovery Tips
                </h3>

                <div className="space-y-3">
                  {recoveryTips.map((tip) => (
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

              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <h3 className="font-bold text-red-800">
                  When Should You Contact Your Doctor?
                </h3>
                <p className="mt-2 leading-7 text-red-800">
                  Seek medical advice if you develop fever, severe or
                  worsening pain, heavy bleeding, wound redness or discharge,
                  persistent vomiting or difficulty passing urine after
                  surgery.
                </p>
              </div>
            </section>

            {/* Risks */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Risks to Understand
              </h2>

              <p className="leading-8 text-gray-600">
                Laparoscopy is generally considered safe when performed for
                appropriate patients by a trained surgical team. However,
                like every operation, it carries potential risks.
              </p>

              <div className="rounded-2xl border border-gray-100 p-5">
                <h3 className="font-bold text-[#74122E]">
                  Possible Surgical Risks
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Bleeding",
                    "Infection",
                    "Injury to nearby organs or blood vessels",
                    "Reactions related to anaesthesia",
                    "The need to convert to open surgery for safety in some cases",
                  ].map((risk) => (
                    <li
                      key={risk}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                    >
                      <ShieldCheck
                        size={19}
                        className="mt-0.5 shrink-0 text-[#8F1738]"
                      />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="leading-8 text-gray-600">
                Your surgeon should discuss the risks relevant to your
                condition and explain the steps taken to reduce them.
              </p>
            </section>

            {/* Fertility */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Fertility and Laparoscopy
              </h2>

              <p className="leading-8 text-gray-600">
                Many laparoscopic procedures are planned with the aim of
                protecting fertility wherever possible. Cystectomy may preserve
                healthy ovarian tissue, while myomectomy removes fibroids
                without removing the uterus when suitable.
              </p>

              <div className="rounded-2xl bg-[#F8F4F6] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <Baby className="mt-1 shrink-0 text-[#8F1738]" size={26} />
                  <div>
                    <h3 className="font-bold text-[#74122E]">
                      Planning for Future Pregnancy
                    </h3>
                    <p className="mt-2 leading-7 text-gray-600">
                      If you hope to conceive in the future, tell your doctor
                      before treatment. Your surgical plan can then take your
                      reproductive goals into account. The clinic also offers
                      fertility and IVF services, allowing surgical and
                      fertility care to be coordinated where appropriate.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                Choosing a surgeon is an important decision. Clear
                communication, appropriate treatment planning and follow-up
                support all contribute to a patient's experience.
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
                    <p className="text-sm leading-6 text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Location */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Location and Contact
              </h2>

              <p className="leading-8 text-gray-600">
                Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
                Nagar, Moradabad, Uttar Pradesh 244001. The clinic is
                accessible to women from Civil Lines and nearby areas.
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

                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-[#8F1738]" />
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-sm font-semibold text-gray-700 hover:text-[#8F1738]"
                    >
                      www.gynaecologistmoradabad.com
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
                  laparoscopic surgeon near Civil Lines, Moradabad
                </strong>
                , book a consultation to discuss your symptoms, diagnosis and
                whether keyhole surgery is appropriate for you.
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
                  Personalised Women's Healthcare
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Explore Your Laparoscopic Surgery Options
              </h2>

              <p className="mt-3 leading-7 text-white/85">
                Every woman's condition and treatment needs are different.
                Schedule a consultation with Dr. Priyanka Pachauri to discuss
                your symptoms, understand available options and make an
                informed decision about your care.
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
                Explore Related Gynaecology Services
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                Learn more about women's health, pregnancy care and
                gynaecological treatments.
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
                    <Stethoscope size={23} />
                  </div>
                  <h3 className="font-bold text-[#74122E]">
                    Surgical Consultation
                  </h3>
                </div>
                <p className="text-sm leading-7 text-gray-600">
                  Discuss your symptoms, test reports and treatment options
                  before making a surgical decision.
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
                    Informed Treatment Decisions
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Understand the benefits, risks and alternatives before
                  choosing a treatment plan.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
