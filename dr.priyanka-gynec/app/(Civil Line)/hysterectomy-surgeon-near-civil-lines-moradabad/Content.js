
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
  Scissors,
  Clock,
  AlertCircle,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function HysterectomySurgeon() {
  const faqs = [
    {
      q: "Is a hysterectomy always necessary for fibroids?",
      a: "No. Many women can be treated with medicines or uterus-preserving surgery such as myomectomy. A hysterectomy is considered when other options are not suitable.",
    },
    {
      q: "What is laparoscopic hysterectomy?",
      a: "It is the removal of the uterus through a few small abdominal cuts using a camera and fine instruments, often with less pain and faster recovery than open surgery.",
    },
    {
      q: "Will I go into menopause after a hysterectomy?",
      a: "Not if the ovaries are kept, although menopause may come slightly earlier in some women. If the ovaries are removed, menopause begins immediately.",
    },
    {
      q: "How long is recovery after a hysterectomy?",
      a: "Recovery varies depending on the surgical approach and your overall health. Laparoscopic recovery is generally quicker, but you should follow your doctor's advice about rest and activity.",
    },
    {
      q: "Can I get pregnant after a hysterectomy?",
      a: "No. Once the uterus is removed, pregnancy is no longer possible. Discuss your family plans and fertility goals with your doctor before surgery.",
    },
    {
      q: "Will a hysterectomy affect my sex life?",
      a: "Most women return to normal sexual activity once they have healed. Discuss any discomfort or concerns with your doctor during follow-up appointments.",
    },
    {
      q: "Do I need a second opinion before hysterectomy?",
      a: "You are always entitled to seek a second opinion, especially before a major operation. A responsible surgeon will support your informed decision.",
    },
    {
      q: "How do I book a consultation?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or email drpriyankagynaec@gmail.com to arrange a consultation.",
    },
  ];

  const hysterectomyTypes = [
    {
      title: "Total Hysterectomy",
      description:
        "Removal of the uterus and cervix. This is one of the commonly performed types of hysterectomy.",
    },
    {
      title: "Subtotal (Partial) Hysterectomy",
      description:
        "Removal of the uterus while the cervix is left in place.",
    },
    {
      title: "Hysterectomy with Removal of Tubes and Ovaries",
      description:
        "Removal of the uterus along with the fallopian tubes and ovaries when medically indicated.",
    },
  ];

  const surgicalApproaches = [
    {
      title: "Laparoscopic Hysterectomy",
      description:
        "The uterus is removed through a few small abdominal cuts using a camera and fine instruments. This minimally invasive approach is highlighted by the clinic.",
      icon: Activity,
    },
    {
      title: "Vaginal Hysterectomy",
      description:
        "The uterus is removed through the vagina without abdominal cuts. This approach may be suitable for selected patients.",
      icon: HeartPulse,
    },
    {
      title: "Abdominal (Open) Hysterectomy",
      description:
        "The uterus is removed through a larger abdominal incision, usually when the uterus is very large or other factors make keyhole surgery unsuitable.",
      icon: Scissors,
    },
  ];

  const reasons = [
    "Fibroids causing heavy bleeding, pain or pressure",
    "Heavy or prolonged periods that do not respond to medicines",
    "Adenomyosis, where the uterine lining grows into the muscle wall",
    "Endometriosis with severe pain that is not controlled by other treatments",
    "Uterine prolapse, where the uterus descends into the vagina",
    "Chronic pelvic pain caused by a uterine condition",
    "Abnormal cell changes or cancers of the uterus, cervix or ovaries requiring specialist evaluation",
    "Severe bleeding or infection in rare emergency situations",
  ];

  const alternatives = [
    "Medicines to reduce menstrual bleeding and pain",
    "Hormonal treatment, including a hormone-releasing intrauterine system",
    "Iron treatment to manage anaemia",
    "Uterus-preserving surgery, such as laparoscopic myomectomy for fibroids",
    "Hysteroscopic removal of uterine polyps",
    "Endometriosis treatment through excision surgery",
    "Pelvic floor exercises and other measures for mild prolapse",
  ];

  const benefits = [
    "Smaller incisions and minimal visible scarring",
    "Less pain after the operation in many cases",
    "Shorter hospital stay compared with open surgery",
    "Faster recovery and earlier return to routine activities",
    "Lower risk of wound infection and hernia",
    "Often less blood loss during surgery",
  ];

  const preparation = [
    "Complete recommended blood tests, ultrasound and general health checks.",
    "Share your current medicines, allergies and previous surgical history.",
    "Stop certain medicines only when specifically advised by your doctor.",
    "Follow fasting instructions before anaesthesia.",
    "Arrange help at home for the first few weeks after surgery.",
    "Pack comfortable clothes and sanitary pads for your hospital stay.",
    "Discuss and treat anaemia before surgery if required.",
  ];

  const recoveryTips = [
    "Walk gently each day and rest whenever you feel tired.",
    "Eat light, nutritious meals and drink plenty of fluids.",
    "Include fibre in your diet to help prevent constipation.",
    "Keep surgical wounds clean and dry as instructed.",
    "Avoid heavy lifting and strenuous exercise until your doctor allows it.",
    "Avoid sexual intercourse until your doctor confirms that healing is complete.",
    "Take prescribed medicines on time and attend follow-up appointments.",
  ];

  const questions = [
    "Why do I need a hysterectomy, and what are my alternatives?",
    "Which type of hysterectomy and surgical approach are recommended for me?",
    "Will my ovaries be removed, and why or why not?",
    "How will surgery affect my hormones and menopause timing?",
    "What are the possible risks and expected recovery time?",
    "How long will I need to stay in the hospital?",
    "What could happen if I delay surgery or choose not to have it?",
  ];

  const lifeAfterSurgery = [
    {
      title: "Periods",
      description: "Menstrual periods stop permanently after the uterus is removed.",
    },
    {
      title: "Pregnancy",
      description:
        "Pregnancy is no longer possible. Discuss your family plans before deciding on surgery.",
    },
    {
      title: "Ovaries and Hormones",
      description:
        "If the ovaries are retained, they usually continue producing hormones. If they are removed, menopause symptoms may begin and your doctor can discuss suitable management.",
    },
    {
      title: "Sexual Life",
      description:
        "Most women return to normal sexual activity once healing is complete. Discuss any concerns with your doctor.",
    },
    {
      title: "Emotional Wellbeing",
      description:
        "Some women feel relief from their symptoms, while others experience sadness or a sense of loss. Both reactions are valid, and emotional support can help.",
    },
    {
      title: "Pelvic Floor Health",
      description:
        "Gentle pelvic floor exercises may support recovery when recommended by your healthcare professional.",
    },
  ];

  const clinicHighlights = [
    "A doctor who listens and explains treatment options clearly",
    "High-definition 3D laparoscopic surgical facilities",
    "Both uterus-removing and uterus-preserving procedures",
    "Hysteroscopy and endometriosis surgery within the same practice",
    "Continuity of care before and after surgery",
    "Fertility, pregnancy and paediatric services under one roof",
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
                Women's Surgical Care
              </span>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Hysterectomy Surgeon Near Civil Lines, Moradabad: Informed,
                Minimally Invasive Care
              </h1>

              <p className="text-base leading-8 text-gray-600">
                Being advised to have a hysterectomy is a significant moment
                for any woman. It is natural to feel anxious about surgery,
                hormonal changes and whether the operation is truly necessary.
                These concerns deserve clear answers. The right surgeon
                explains your options, discusses alternatives and recommends
                surgery only when it is appropriate for your condition.
              </p>

              <p className="text-base leading-8 text-gray-600">
                If you are searching for a{" "}
                <strong className="text-[#74122E]">
                  hysterectomy surgeon near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers
                gynaecological care, including advanced 3D laparoscopic
                surgical facilities for suitable patients.
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
                Laparoscopic hysterectomy is listed as an advanced minimally
                invasive keyhole procedure. Related services include
                laparoscopic myomectomy, cystectomy, endometriosis surgery,
                sacrocolpopexy, diagnostic hysteroscopy and hysteroscopic
                polypectomy. The clinic also highlights high-definition 3D
                laparoscopic surgery as a core facility.
              </p>
            </section>

            {/* What is hysterectomy */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                What Is a Hysterectomy?
              </h2>

              <p className="leading-8 text-gray-600">
                A hysterectomy is a surgical procedure to remove the uterus.
                Depending on the medical condition, the cervix, fallopian tubes
                and ovaries may or may not also be removed. After a
                hysterectomy, menstrual periods stop permanently and a woman
                can no longer become pregnant.
              </p>

              <h3 className="text-xl font-bold text-[#74122E]">
                Types of Hysterectomy
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {hysterectomyTypes.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${
                      index === 2 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F4F6] text-[#8F1738]">
                      <CheckCircle2 size={21} />
                    </div>
                    <h4 className="mb-2 font-bold text-[#74122E]">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="rounded-xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-4 text-sm leading-7 text-gray-700">
                Your doctor will explain which type is appropriate for your
                condition and whether the cervix, fallopian tubes or ovaries
                need to be removed.
              </p>
            </section>

            {/* Approaches */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Approaches to Hysterectomy
              </h2>

              <p className="leading-8 text-gray-600">
                Hysterectomy can be performed through different surgical
                approaches. The right method depends on the condition, uterus
                size, previous surgeries and your overall health.
              </p>

              <div className="space-y-4">
                {surgicalApproaches.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F8F4F6] text-[#8F1738]">
                        <Icon size={23} />
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
                  );
                })}
              </div>
            </section>

            {/* Reasons */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                When Is a Hysterectomy Recommended?
              </h2>

              <p className="leading-8 text-gray-600">
                Hysterectomy may be considered when other treatments have not
                worked, are unsuitable or when a medical condition requires
                surgical treatment. Common reasons include:
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
                    <p className="text-sm leading-7 text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>

              <p className="rounded-xl bg-[#FDF8FA] p-5 leading-8 text-gray-700">
                Many of these conditions have alternative treatments.
                Therefore, a hysterectomy should never be rushed. A proper
                evaluation and discussion of available options are important
                before making a decision.
              </p>
            </section>

            {/* Alternatives */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Alternatives to Hysterectomy
              </h2>

              <p className="leading-8 text-gray-600">
                Before recommending hysterectomy, your doctor should discuss
                suitable alternatives. The choice depends on your age,
                symptoms, test results, general health and whether you wish to
                have children in the future.
              </p>

              <div className="space-y-3">
                {alternatives.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg bg-[#F8F4F6] p-4"
                  >
                    <ShieldCheck
                      size={20}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Do not hesitate to ask questions or seek a second opinion
                before deciding on a major operation.
              </p>
            </section>

            {/* Benefits */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Benefits of Laparoscopic Hysterectomy
              </h2>

              <p className="leading-8 text-gray-600">
                Compared with open surgery, a laparoscopic approach often
                offers several recovery-related advantages for suitable
                patients.
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

              <p className="text-sm leading-7 text-gray-500">
                Suitability and outcomes vary from patient to patient. Your
                surgeon will explain whether keyhole surgery is appropriate
                for your individual condition.
              </p>
            </section>

            {/* Questions */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8F1738] text-white">
                  <ClipboardList size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                  Questions to Ask Before Surgery
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Understanding the procedure can help you feel more confident
                about your treatment decision. Consider asking your surgeon:
              </p>

              <div className="space-y-3">
                {questions.map((question, index) => (
                  <div
                    key={question}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F4F6] text-sm font-bold text-[#8F1738]">
                      {index + 1}
                    </span>
                    <p className="leading-7 text-gray-700">{question}</p>
                  </div>
                ))}
              </div>

              <p className="font-medium text-[#74122E]">
                A good surgeon welcomes your questions and helps you make an
                informed decision.
              </p>
            </section>

            {/* Preparation */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Preparing for Surgery
              </h2>

              <p className="leading-8 text-gray-600">
                Your doctor will provide personalised instructions before
                surgery. Preparation commonly includes:
              </p>

              <div className="space-y-3">
                {preparation.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg bg-[#FAFAFA] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Operation */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                What Happens During the Operation?
              </h2>

              <p className="leading-8 text-gray-600">
                Laparoscopic hysterectomy is performed under general
                anaesthesia. The surgeon makes small abdominal cuts and
                introduces gas to create working space. A camera and fine
                surgical instruments are inserted to view and operate inside
                the abdomen.
              </p>

              <p className="leading-8 text-gray-600">
                The uterus is carefully separated from the surrounding
                structures and removed, usually through the vagina or in small
                pieces when appropriate. The surgical cuts are then closed.
                The duration of the operation varies depending on the
                patient's condition and surgical complexity.
              </p>
            </section>

            {/* Recovery */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Recovery After a Hysterectomy
              </h2>

              <p className="leading-8 text-gray-600">
                Recovery depends on the surgical approach and your overall
                health. After laparoscopic surgery, women may commonly
                experience:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-5">
                  <Clock className="mb-3 text-[#8F1738]" size={25} />
                  <h3 className="mb-2 font-bold text-[#74122E]">
                    Temporary Discomfort
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">
                    Mild pain or shoulder discomfort caused by the gas used
                    during surgery may occur for a day or two.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <Activity className="mb-3 text-[#8F1738]" size={25} />
                  <h3 className="mb-2 font-bold text-[#74122E]">
                    Early Movement
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">
                    Gentle walking is usually encouraged soon after surgery,
                    according to your medical team's instructions.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <HeartPulse className="mb-3 text-[#8F1738]" size={25} />
                  <h3 className="mb-2 font-bold text-[#74122E]">
                    Hospital Stay
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">
                    Hospital stay is often shorter than after open surgery,
                    depending on recovery and individual medical needs.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <ShieldCheck className="mb-3 text-[#8F1738]" size={25} />
                  <h3 className="mb-2 font-bold text-[#74122E]">
                    Light Spotting
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">
                    Light vaginal spotting may continue for some weeks after
                    the operation.
                  </p>
                </div>
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
                <div className="mb-2 flex items-center gap-2 text-red-700">
                  <AlertCircle size={21} />
                  <h3 className="font-bold">When to Contact Your Doctor</h3>
                </div>
                <p className="text-sm leading-7 text-red-800">
                  Contact your doctor promptly if you experience fever,
                  worsening pain, heavy bleeding, foul-smelling discharge,
                  wound redness, vomiting or difficulty passing urine. Seek
                  urgent medical attention for severe or rapidly worsening
                  symptoms.
                </p>
              </div>
            </section>

            {/* Risks */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Risks to Understand
              </h2>

              <p className="leading-8 text-gray-600">
                Hysterectomy is a commonly performed operation, but like all
                surgeries, it carries potential risks. These may include:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Bleeding during or after surgery",
                  "Infection",
                  "Injury to nearby organs such as the bladder or bowel",
                  "Reactions or complications related to anaesthesia",
                  "Blood clots",
                  "Conversion from keyhole surgery to open surgery when required for safety",
                ].map((risk) => (
                  <div
                    key={risk}
                    className="flex items-start gap-3 rounded-lg border border-gray-200 p-4"
                  >
                    <AlertCircle
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{risk}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Your surgeon should explain the possible risks, precautions
                and expected benefits based on your individual medical
                condition.
              </p>
            </section>

            {/* Life after surgery */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Life After Hysterectomy
              </h2>

              <p className="leading-8 text-gray-600">
                Understanding the changes that follow hysterectomy can help
                you prepare physically and emotionally for recovery.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {lifeAfterSurgery.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="mb-2 font-bold text-[#74122E]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Prolapse */}
            <section className="rounded-2xl border border-[#F0DCE3] bg-[#FDF8FA] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8F1738] text-white">
                  <Stethoscope size={23} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Prolapse and Pelvic Floor Concerns
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                If hysterectomy is being considered for uterine prolapse, the
                surgical plan may also include procedures to support the
                pelvic organs. The clinic lists sacrocolpopexy, a keyhole
                procedure used for uterine and vaginal vault prolapse.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Your doctor will evaluate the extent of prolapse and explain
                which treatment or support procedure may be suitable for you.
              </p>
            </section>

            {/* Why choose */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E] sm:text-3xl">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                Choosing a surgeon for a major gynaecological procedure
                involves more than the operation itself. Clear communication,
                appropriate treatment planning and follow-up care are
                important parts of the experience.
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
                  Personalised Gynaecological Care
                </span>

                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                  Consult a Hysterectomy Surgeon Near Civil Lines, Moradabad
                </h2>

                <p className="mb-6 leading-8 text-white/85">
                  If you have been advised to undergo a hysterectomy or are
                  exploring treatment options for a gynaecological condition,
                  arrange a consultation with Dr. Priyanka Pachauri. Discuss
                  your symptoms, reports, alternatives and the surgical
                  approach that may be suitable for you.
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
                  Gandhi Nagar, Moradabad, Uttar Pradesh 244001. The clinic is
                  accessible to women from Civil Lines and nearby areas.
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
                Take an Informed Step Towards Better Women's Health
              </h2>
              <p className="mx-auto mb-6 max-w-2xl leading-8 text-gray-600">
                Get clear guidance about hysterectomy, available alternatives
                and minimally invasive surgical options. Contact Dr. Priyanka
                Gynaec to arrange your consultation in Moradabad.
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
                  <HeartPulse size={24} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#74122E]">
                  Need Guidance About Hysterectomy?
                </h3>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Discuss your symptoms, treatment alternatives and surgical
                  options with Dr. Priyanka Pachauri.
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
