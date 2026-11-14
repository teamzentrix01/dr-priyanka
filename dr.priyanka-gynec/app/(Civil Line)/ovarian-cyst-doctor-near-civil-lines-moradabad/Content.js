
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Award,
  CheckCircle2,
  ClipboardList,
  Clock,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  Baby,
  Scissors,
  Microscope,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function OvarianCystDoctor() {
  const faqs = [
    {
      q: "Are ovarian cysts dangerous?",
      a: "Most ovarian cysts are harmless and go away on their own. Some need treatment, so a doctor should assess your symptoms and ultrasound findings.",
    },
    {
      q: "Do ovarian cysts always need surgery?",
      a: "No. Small, simple cysts are often monitored with repeat ultrasound. Surgery may be considered for large, persistent, painful or suspicious cysts.",
    },
    {
      q: "Can ovarian cysts affect pregnancy?",
      a: "Many ovarian cysts do not affect fertility. Some, such as endometriomas, may affect reproductive health. Discuss your pregnancy plans with your doctor.",
    },
    {
      q: "What is laparoscopic cystectomy?",
      a: "It is a keyhole procedure to remove an ovarian cyst while preserving healthy ovarian tissue wherever possible. It often offers less pain and faster recovery than open surgery.",
    },
    {
      q: "Can an ovarian cyst come back after treatment?",
      a: "Yes, some cysts can recur after treatment. Follow-up appointments and scans help monitor your recovery and identify recurrence.",
    },
    {
      q: "How is a cyst different from PCOS?",
      a: "PCOS involves hormonal imbalance and multiple small ovarian follicles. An ovarian cyst is generally a larger fluid-filled sac. They are different conditions and are managed differently.",
    },
    {
      q: "When is an ovarian cyst an emergency?",
      a: "Sudden severe pelvic or abdominal pain, especially with vomiting, fever, dizziness or fainting, needs urgent medical attention. These symptoms may indicate cyst rupture or ovarian torsion.",
    },
    {
      q: "How do I book a consultation?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or email drpriyankagynaec@gmail.com.",
    },
  ];

  const cystTypes = [
    {
      title: "Functional Cysts",
      description:
        "The most common type, linked to the menstrual cycle. Follicular cysts and corpus luteum cysts are examples. They usually disappear within a few menstrual cycles.",
    },
    {
      title: "Endometriomas",
      description:
        "Often called chocolate cysts, these develop due to endometriosis, where tissue similar to the uterine lining grows on the ovary.",
    },
    {
      title: "Dermoid Cysts",
      description:
        "These cysts may contain tissue such as hair or fat. They are usually benign but may need removal depending on their size and features.",
    },
    {
      title: "Cystadenomas",
      description:
        "Fluid-filled or mucus-filled ovarian cysts that can sometimes grow large and require monitoring or treatment.",
    },
    {
      title: "Polycystic Ovaries",
      description:
        "Multiple small follicles may be seen in PCOS. These are different from true ovarian cysts and are managed as part of hormonal care.",
    },
  ];

  const symptoms = [
    "Pelvic or lower abdominal pain, often on one side",
    "Bloating or a feeling of fullness",
    "Pain during intercourse",
    "Painful or irregular periods",
    "Frequent urination or difficulty emptying the bladder",
    "Heaviness in the lower abdomen",
    "Difficulty conceiving, particularly with endometriomas",
  ];

  const emergencySigns = [
    "Sudden, severe abdominal or pelvic pain",
    "Pain accompanied by fever or vomiting",
    "Dizziness, fainting or rapid breathing",
    "Sudden weakness or pallor that may indicate internal bleeding",
  ];

  const causes = [
    "Normal ovulation-related changes",
    "Hormonal imbalance, including PCOS",
    "Endometriosis",
    "Pelvic infection",
    "Pregnancy",
    "A history of ovarian cysts",
    "Certain fertility medicines",
  ];

  const investigations = [
    {
      title: "Pelvic Ultrasound",
      description:
        "Shows the cyst's size, position and appearance, and helps distinguish fluid-filled cysts from solid or complex features. The clinic lists 3D and 4D ultrasound facilities.",
      icon: ScanLine,
    },
    {
      title: "Blood Tests",
      description:
        "Hormone tests and tumour markers may be recommended in selected cases, particularly in older women or when ultrasound shows complex features.",
      icon: Activity,
    },
    {
      title: "Pregnancy Test",
      description:
        "May be advised to rule out pregnancy-related causes of pelvic pain or other symptoms.",
      icon: Baby,
    },
    {
      title: "MRI or CT Scan",
      description:
        "In selected cases, additional imaging may be recommended to understand the cyst in greater detail.",
      icon: Microscope,
    },
  ];

  const treatmentOptions = [
    {
      title: "Watchful Waiting",
      description:
        "Small, simple cysts often disappear within one to three menstrual cycles. Your doctor may recommend a repeat ultrasound to monitor changes.",
      icon: Clock,
    },
    {
      title: "Medicines",
      description:
        "Pain relief may help manage symptoms. Hormonal medicines may be used in selected cases to manage endometriosis or PCOS, as advised by your doctor.",
      icon: HeartPulse,
    },
    {
      title: "Surgery",
      description:
        "Surgery may be considered when a cyst is large, persistent, painful, growing, suspicious on imaging, affecting fertility or associated with torsion or rupture.",
      icon: Scissors,
    },
  ];

  const surgerySteps = [
    "A few small cuts are made in the abdomen",
    "A camera and fine surgical instruments are inserted",
    "The cyst is carefully separated from the ovary",
    "The cyst is removed while preserving healthy ovarian tissue wherever possible",
  ];

  const surgeryBenefits = [
    "Smaller incisions and minimal scarring",
    "Less pain after the operation in many cases",
    "Shorter hospital stay",
    "Faster recovery and return to routine activities",
    "Lower risk of wound infection and hernia in suitable cases",
    "A magnified view that helps the surgeon work carefully around healthy tissue",
  ];

  const preparation = [
    "Complete recommended blood tests, ultrasound and general health checks",
    "Inform your doctor about medicines, allergies and previous surgeries",
    "Follow fasting instructions before anaesthesia",
    "Arrange for a family member to accompany you",
    "Pack comfortable clothes and essential items for the hospital",
  ];

  const recoveryTips = [
    "Walk gently and rest as needed",
    "Eat light, nutritious meals and drink enough fluids",
    "Keep surgical wounds clean and dry as instructed",
    "Avoid heavy lifting until your doctor allows it",
    "Take prescribed medicines on time",
    "Attend follow-up appointments and scans",
  ];

  const risks = [
    "Bleeding",
    "Infection",
    "Injury to nearby organs or blood vessels",
    "Reactions related to anaesthesia",
    "The need to convert to open surgery in some cases",
    "Recurrence of some types of ovarian cysts",
  ];

  const reasons = [
    "A doctor who listens and explains treatment options clearly",
    "Precision 3D laparoscopic surgery aimed at preserving fertility",
    "3D and 4D ultrasound facilities",
    "Care for related conditions, including endometriosis, PCOS and fibroids",
    "Fertility and IVF services in the same practice",
    "Continuity of care before and after surgery",
    "A private and respectful setting for women's healthcare",
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
                Ovarian Health and Fertility Care
              </span>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Ovarian Cyst Doctor Near Civil Lines, Moradabad: Careful
                Diagnosis and Fertility-Conscious Treatment
              </h1>

              <p className="text-base leading-8 text-gray-600">
                Hearing the words "ovarian cyst" on an ultrasound report can
                be alarming. Many women immediately worry about cancer,
                surgery or whether they will be able to have children. The
                good news is that most ovarian cysts are harmless and many
                disappear on their own. What matters is understanding which
                type you have and when treatment is needed. If you are looking
                for an{" "}
                <strong className="text-gray-800">
                  ovarian cyst doctor near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers
                evaluation and advanced keyhole treatment.
              </p>

              <div className="rounded-2xl border border-[#F0DCE3] bg-[#F8F4F6] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-white p-3 text-[#8F1738]">
                    <HeartPulse size={25} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#74122E]">
                      Fertility-Conscious Ovarian Care
                    </h2>
                    <p className="mt-2 leading-7 text-gray-600">
                      Understanding the cyst type, its appearance and your
                      future pregnancy plans helps guide treatment. Many
                      ovarian cysts do not need surgery, and when an operation
                      is necessary, preserving healthy ovarian tissue may be
                      an important consideration.
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
                focused on laparoscopic gynaecological surgery, antenatal and
                postnatal care, high-risk pregnancies and menstrual disorder
                treatment.
              </p>

              <p className="leading-8 text-gray-600">
                Laparoscopic cystectomy is listed as precision 3D keyhole
                surgery to remove ovarian cysts while preserving fertility.
                Related services include endometriosis surgery, laparoscopic
                myomectomy, hysterectomy, hysteroscopy and fertility and IVF
                care. The clinic also lists 3D and 4D ultrasound and
                high-definition 3D laparoscopic surgery among its facilities.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Laparoscopic cystectomy",
                  "Endometriosis surgery",
                  "Laparoscopic myomectomy",
                  "Laparoscopic hysterectomy",
                  "Hysteroscopy",
                  "Fertility and IVF care",
                  "3D and 4D ultrasound",
                  "High-definition 3D laparoscopy",
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

            {/* What is an Ovarian Cyst */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Is an Ovarian Cyst?
              </h2>

              <p className="leading-8 text-gray-600">
                An ovarian cyst is a fluid-filled sac that forms on or inside
                an ovary. The ovaries release an egg each month, and cysts
                often form as part of this normal cycle. Cysts can be tiny or
                large, single or multiple, and can occur at different ages.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 p-5">
                  <div className="mb-3 inline-flex rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-bold text-[#74122E]">
                    Common and Often Harmless
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Many ovarian cysts are related to the menstrual cycle and
                    disappear without treatment.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 p-5">
                  <div className="mb-3 inline-flex rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                    <ScanLine size={24} />
                  </div>
                  <h3 className="font-bold text-[#74122E]">
                    Ultrasound Evaluation
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    An ultrasound helps your doctor understand the cyst's
                    size, location and appearance.
                  </p>
                </div>
              </div>
            </section>

            {/* Types */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Types of Ovarian Cysts
              </h2>

              <p className="leading-8 text-gray-600">
                Ovarian cysts are not all the same. Their appearance, cause and
                treatment approach can differ. Identifying the type helps
                your doctor decide whether monitoring or treatment is needed.
              </p>

              <div className="space-y-4">
                {cystTypes.map((cyst, index) => (
                  <div
                    key={cyst.title}
                    className="rounded-2xl border border-gray-100 p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F4F6] font-bold text-[#8F1738]">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-[#74122E]">
                          {cyst.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-gray-600">
                          {cyst.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Symptoms */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Symptoms of Ovarian Cysts
              </h2>

              <p className="leading-8 text-gray-600">
                Many ovarian cysts cause no symptoms and are discovered by
                chance during an ultrasound. When symptoms occur, they may
                include:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {symptoms.map((symptom) => (
                  <div
                    key={symptom}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-6 text-gray-700">
                      {symptom}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Emergency Signs */}
            <section className="space-y-5">
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-700">
                  <AlertTriangle size={17} />
                  Urgent Medical Attention
                </span>
                <h2 className="mt-2 text-2xl font-bold text-[#74122E]">
                  Warning Signs: Seek Urgent Help
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Some ovarian cyst complications need immediate medical
                attention. Go to the nearest hospital without delay if you
                experience:
              </p>

              <div className="rounded-2xl border border-red-100 bg-red-50 p-5 sm:p-6">
                <div className="space-y-3">
                  {emergencySigns.map((sign) => (
                    <div key={sign} className="flex items-start gap-3">
                      <AlertTriangle
                        size={19}
                        className="mt-0.5 shrink-0 text-red-700"
                      />
                      <p className="text-sm leading-6 text-red-900">{sign}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 border-t border-red-200 pt-4 text-sm font-medium leading-7 text-red-900">
                  These symptoms can indicate cyst rupture or ovarian torsion,
                  where the ovary twists on its supporting structures. Both
                  conditions need urgent assessment and treatment.
                </p>
              </div>
            </section>

            {/* Causes */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Causes Ovarian Cysts?
              </h2>

              <p className="leading-8 text-gray-600">
                Ovarian cysts can develop for several reasons. Some are linked
                to normal ovulation, while others may be associated with
                hormonal conditions or other gynaecological problems.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {causes.map((cause) => (
                  <div
                    key={cause}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-6 text-gray-700">{cause}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Diagnosis */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                How Ovarian Cysts Are Diagnosed
              </h2>

              <p className="leading-8 text-gray-600">
                Diagnosis usually begins with a conversation about your
                symptoms, menstrual history and medical background, followed
                by a pelvic examination when appropriate. Your doctor may
                recommend one or more investigations.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {investigations.map((test) => {
                  const Icon = test.icon;

                  return (
                    <div
                      key={test.title}
                      className="rounded-2xl border border-gray-100 p-5 shadow-sm"
                    >
                      <div className="mb-3 inline-flex rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-bold text-[#74122E]">
                        {test.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {test.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl border-l-4 border-[#8F1738] bg-gray-50 p-5">
                <p className="leading-7 text-gray-700">
                  <strong className="text-[#74122E]">
                    Follow-up ultrasound:
                  </strong>{" "}
                  Your doctor may recommend another scan after a few weeks or
                  menstrual cycles to check whether the cyst is shrinking,
                  resolving or changing.
                </p>
              </div>
            </section>

            {/* Treatment */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Do All Ovarian Cysts Need Treatment?
              </h2>

              <p className="leading-8 text-gray-600">
                No. Management depends on the type and size of the cyst, your
                symptoms, your age and whether you plan to become pregnant.
                Your doctor will consider these factors before recommending a
                treatment approach.
              </p>

              <div className="grid gap-4">
                {treatmentOptions.map((option) => {
                  const Icon = option.icon;

                  return (
                    <div
                      key={option.title}
                      className="flex gap-4 rounded-2xl border border-gray-100 p-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F8F4F6] text-[#8F1738]">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#74122E]">
                          {option.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-gray-600">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Laparoscopic Cystectomy */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Laparoscopic Cystectomy
              </h2>

              <p className="leading-8 text-gray-600">
                Laparoscopic cystectomy is a keyhole procedure used to remove
                an ovarian cyst while preserving healthy ovarian tissue
                wherever possible. It may be considered when surgery is
                appropriate for the type of cyst and the patient's condition.
              </p>

              <div className="rounded-2xl bg-[#F8F4F6] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Scissors size={25} className="text-[#8F1738]" />
                  <h3 className="text-lg font-bold text-[#74122E]">
                    How the Procedure Is Performed
                  </h3>
                </div>

                <div className="space-y-3">
                  {surgerySteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#8F1738]">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="leading-8 text-gray-600">
                The clinic describes this procedure as precision 3D keyhole
                surgery that aims to preserve fertility. Preserving healthy
                ovarian tissue is an important consideration for women who
                may want to become pregnant in the future.
              </p>
            </section>

            {/* Benefits */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Benefits of Keyhole Surgery for Ovarian Cysts
              </h2>

              <p className="leading-8 text-gray-600">
                Compared with open surgery, laparoscopy often offers several
                potential benefits, depending on the cyst's size and nature
                and the patient's overall health.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {surgeryBenefits.map((benefit) => (
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

              <p className="leading-8 text-gray-600">
                Not every cyst is suitable for keyhole surgery. Your surgeon
                will assess the scan findings, medical history and other
                relevant factors before advising you on the safest approach.
              </p>
            </section>

            {/* Fertility */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Ovarian Cysts and Fertility
              </h2>

              <p className="leading-8 text-gray-600">
                Many ovarian cysts do not affect fertility. However,
                endometriomas and repeated ovarian surgery can reduce ovarian
                reserve in some women. This is why the decision to operate
                needs careful thought, especially if you are planning a
                pregnancy.
              </p>

              <div className="rounded-2xl border border-[#F0DCE3] bg-[#F8F4F6] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <Baby size={27} className="mt-1 shrink-0 text-[#8F1738]" />
                  <div>
                    <h3 className="font-bold text-[#74122E]">
                      Discuss Your Pregnancy Plans
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      Tell your doctor if you hope to conceive in the future.
                      Your treatment plan can take your reproductive goals
                      into account. The clinic's fertility and IVF services
                      allow surgical and fertility decisions to be
                      coordinated where appropriate.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PCOS */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Ovarian Cysts and PCOS
              </h2>

              <p className="leading-8 text-gray-600">
                Women with PCOS often have multiple small follicles on the
                ovaries. These are not the same as ovarian cysts that may need
                surgical removal. PCOS is a hormonal and metabolic condition
                managed through lifestyle changes, medicines and, when
                needed, ovulation support.
              </p>

              <div className="rounded-2xl border border-gray-100 p-5">
                <h3 className="font-bold text-[#74122E]">
                  When to Ask About PCOS Evaluation
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  If you have irregular periods, acne or excess hair growth
                  along with ovarian ultrasound findings, ask your doctor
                  whether a PCOS assessment is appropriate.
                </p>
              </div>
            </section>

            {/* Preparation */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Preparing for Cyst Surgery
              </h2>

              <p className="leading-8 text-gray-600">
                If surgery is recommended, your doctor will provide
                personalised instructions based on your health and planned
                procedure. Preparation commonly includes:
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
                Ask about the type of surgery, expected hospital stay,
                anaesthesia, possible risks and recovery timeline before the
                operation.
              </p>
            </section>

            {/* Recovery */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Recovery After Laparoscopic Cystectomy
              </h2>

              <p className="leading-8 text-gray-600">
                Recovery varies depending on the procedure, the cyst and your
                overall health. Women commonly notice mild pain or shoulder
                discomfort from the gas for a day or two, early walking, a
                shorter hospital stay than open surgery and light vaginal
                spotting for a short time.
              </p>

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
                  Contact your doctor if you develop fever, worsening pain,
                  heavy bleeding, wound redness or discharge, or difficulty
                  passing urine after surgery. Seek urgent medical attention
                  for severe or sudden symptoms.
                </p>
              </div>
            </section>

            {/* Risks */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Risks to Understand
              </h2>

              <p className="leading-8 text-gray-600">
                Laparoscopic cystectomy is generally considered safe when
                appropriate, but like all surgery it carries potential risks.
                These may include:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {risks.map((risk) => (
                  <div
                    key={risk}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 p-4"
                  >
                    <ShieldCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-6 text-gray-700">{risk}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Your surgeon should explain the risks relevant to your
                condition, the possibility of recurrence and the steps taken
                to protect your health and ovarian function.
              </p>
            </section>

            {/* Why Choose */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                Choosing an ovarian cyst specialist involves understanding
                your diagnosis, treatment choices and future fertility goals.
                Women often value clear explanations, careful planning and
                follow-up support throughout their treatment.
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
                If you are looking for an{" "}
                <strong className="text-gray-800">
                  ovarian cyst doctor near Civil Lines, Moradabad
                </strong>
                , book a consultation to understand your scan results,
                discuss your fertility plans and explore suitable treatment
                options.
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
                  Women's Health and Fertility Care
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Understand Your Ovarian Cyst Treatment Options
              </h2>

              <p className="mt-3 leading-7 text-white/85">
                Every ovarian cyst is different. Consult Dr. Priyanka Pachauri
                to discuss your ultrasound findings, symptoms and future
                pregnancy plans. Understand whether monitoring, medicines or
                keyhole surgery may be suitable for you.
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
                Explore other women's health treatments and fertility
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
                    <Stethoscope size={23} />
                  </div>
                  <h3 className="font-bold text-[#74122E]">
                    Ovarian Cyst Consultation
                  </h3>
                </div>

                <p className="text-sm leading-7 text-gray-600">
                  Discuss your ultrasound report, symptoms and treatment
                  choices with your gynaecologist.
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
                    Fertility-Conscious Care
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Treatment planning considers your diagnosis, ovarian health
                  and future pregnancy goals wherever possible.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
