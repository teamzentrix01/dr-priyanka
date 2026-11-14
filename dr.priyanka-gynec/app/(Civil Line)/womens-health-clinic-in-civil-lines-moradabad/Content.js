
import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  Heart,
  ShieldCheck,
  Stethoscope,
  Baby,
  Activity,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  AlertCircle,
  HeartPulse,
  Scan,
  Microscope,
  UserRound,
  MessageCircle,
  Sparkles,
  Flower2,
  Syringe,
  Clock,
  Ribbon,
} from "lucide-react";

import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function WomensHealthClinic() {
  const websiteServices = [
    "Pregnancy and birthing care, including normal delivery support",
    "Antenatal services and high-risk pregnancy monitoring",
    "Fertility evaluation and IVF",
    "Gynaecology and 3D laparoscopic surgery",
    "Laparoscopic cystectomy, myomectomy and hysterectomy",
    "Endometriosis surgery and sacrocolpopexy",
    "Diagnostic hysteroscopy and hysteroscopic polypectomy",
    "Laparoscopic sterilisation",
    "Paediatric care, including newborn care and vaccinations",
    "3D and 4D ultrasound and high-definition 3D laparoscopy",
  ];

  const clinicServices = [
    {
      icon: Baby,
      title: "Pregnancy and Antenatal Care",
      description:
        "Pregnancy confirmation, regular antenatal checkups, screening tests, ultrasound, high-risk pregnancy monitoring and delivery preparation.",
    },
    {
      icon: HeartPulse,
      title: "High-Risk Pregnancy Care",
      description:
        "Closer monitoring for women with diabetes, hypertension, thyroid disorders, twin pregnancies or previous pregnancy complications.",
    },
    {
      icon: CalendarDays,
      title: "Period and Hormonal Health",
      description:
        "Evaluation and treatment of irregular periods, heavy bleeding, painful periods, PCOS and hormonal imbalance.",
    },
    {
      icon: Heart,
      title: "Fertility and IVF",
      description:
        "Individualised fertility evaluation and treatment, including ovulation support and advanced fertility services when appropriate.",
    },
    {
      icon: Microscope,
      title: "3D Laparoscopic Surgery",
      description:
        "Minimally invasive procedures for ovarian cysts, fibroids, endometriosis, uterine prolapse and other gynaecological conditions.",
    },
    {
      icon: Scan,
      title: "Hysteroscopy",
      description:
        "Examination of the uterine cavity and treatment of selected problems such as uterine polyps using hysteroscopic techniques.",
    },
    {
      icon: ShieldCheck,
      title: "Sterilisation",
      description:
        "Laparoscopic tubal ligation is listed as a day-care procedure for women who have completed their families.",
    },
    {
      icon: Baby,
      title: "Paediatric and Newborn Care",
      description:
        "Paediatric consultations, newborn care and childhood vaccinations.",
    },
  ];

  const lifeStages = [
    {
      title: "Teenage Years",
      icon: UserRound,
      description:
        "Guidance about first periods, menstrual cramps, hygiene and nutrition. Persistent heavy bleeding, severe pain or missed periods should be evaluated.",
      points: [
        "Understanding menstrual cycles",
        "Managing cramps and period discomfort",
        "Advice on hygiene and nutrition",
      ],
    },
    {
      title: "Young Adult Years",
      icon: Heart,
      description:
        "Support for menstrual irregularities, PCOS, acne, unwanted hair growth, infections, contraception and pregnancy planning.",
      points: [
        "PCOS and hormonal health",
        "Contraception and family planning",
        "Reproductive and sexual health concerns",
      ],
    },
    {
      title: "Pregnancy",
      icon: Baby,
      description:
        "Structured antenatal visits, ultrasound, screening tests, high-risk pregnancy care and birth preparation.",
      points: [
        "Pregnancy checkups and monitoring",
        "Ultrasound and screening",
        "Delivery planning and counselling",
      ],
    },
    {
      title: "After Delivery",
      icon: HeartPulse,
      description:
        "Postnatal recovery, breastfeeding support, family planning and newborn care through the clinic's paediatric services.",
      points: [
        "Mother's physical recovery",
        "Breastfeeding guidance",
        "Newborn health and vaccinations",
      ],
    },
    {
      title: "Midlife",
      icon: Activity,
      description:
        "Evaluation of heavy periods, fibroids, polyps and perimenopause symptoms, along with preventive health advice.",
      points: [
        "Heavy or irregular bleeding",
        "Fibroids and uterine polyps",
        "Perimenopause-related changes",
      ],
    },
    {
      title: "After Menopause",
      icon: Flower2,
      description:
        "Care for hot flashes, sleep problems and other menopausal symptoms, along with bone and heart health guidance.",
      points: [
        "Managing hot flashes and sleep changes",
        "Bone and cardiovascular health advice",
        "Evaluation of postmenopausal bleeding",
      ],
    },
  ];

  const periodProblems = [
    "Irregular, delayed or missed periods",
    "Heavy or prolonged menstrual bleeding",
    "Painful periods",
    "PCOS-related acne, hair growth and weight changes",
    "Thyroid-related menstrual changes",
  ];

  const pregnancyServices = [
    "Early pregnancy confirmation and dating",
    "Regular antenatal checkups and screening",
    "3D and 4D ultrasound facilities",
    "Monitoring of anaemia and gestational diabetes",
    "High-risk pregnancy care for diabetes, hypertension, twins or previous complications",
    "Birth preparation and counselling",
    "Support for normal delivery where medically suitable",
    "Postnatal checkups and newborn care",
  ];

  const fertilityEvaluation = [
    "Detailed medical and reproductive history",
    "Hormone tests when indicated",
    "Ultrasound assessment",
    "Semen analysis for the male partner",
    "Evaluation of ovulation and other possible causes",
    "Individualised treatment planning",
  ];

  const surgicalProcedures = [
    {
      title: "Laparoscopic Cystectomy",
      description:
        "Removal of selected ovarian cysts, with attention to preserving healthy ovarian tissue and fertility wherever possible.",
    },
    {
      title: "Laparoscopic Myomectomy",
      description:
        "Removal of uterine fibroids while preserving the uterus when clinically suitable.",
    },
    {
      title: "Laparoscopic Hysterectomy",
      description:
        "Removal of the uterus when it is medically necessary and other appropriate options have been considered.",
    },
    {
      title: "Endometriosis Surgery",
      description:
        "Surgical management of endometriosis when indicated after individual assessment.",
    },
    {
      title: "Sacrocolpopexy",
      description:
        "A surgical option used in selected cases of pelvic organ prolapse to provide support to the pelvic structures.",
    },
    {
      title: "Diagnostic Hysteroscopy and Polypectomy",
      description:
        "Examination of the inside of the uterus and removal of selected polyps using hysteroscopic techniques without external abdominal cuts.",
    },
    {
      title: "Laparoscopic Sterilisation",
      description:
        "A permanent contraception procedure listed by the clinic as a day-care service.",
    },
  ];

  const commonConditions = [
    "Irregular, heavy or painful periods",
    "PCOS and hormonal imbalance",
    "Difficulty in conceiving",
    "Ovarian cysts",
    "Uterine fibroids and polyps",
    "Endometriosis and chronic pelvic pain",
    "White discharge, itching and vaginal infections",
    "Urine leakage and uterine prolapse",
    "Menopause symptoms",
    "Contraception and family planning",
  ];

  const preventiveBenefits = [
    "Detect health problems early, when they may be easier to manage",
    "Screen for conditions such as anaemia, thyroid disease and diabetes",
    "Receive guidance on nutrition, exercise and mental wellbeing",
    "Discuss contraception and future pregnancy planning",
    "Get a safe place to ask personal health questions",
  ];

  const healthyHabits = [
    "Eat balanced meals with vegetables, fruits, protein, whole grains and iron-rich foods.",
    "Stay active with walking, yoga or another form of exercise you enjoy.",
    "Aim for seven to eight hours of sleep.",
    "Track your periods using a diary or mobile app.",
    "Maintain intimate hygiene with mild, gentle products and avoid vaginal douching.",
    "Avoid self-medicating with hormonal pills or antibiotics.",
    "Manage stress and make time for rest.",
    "Do not ignore unusual bleeding, pain or discharge.",
  ];

  const firstVisitSteps = [
    {
      title: "Discuss your concerns",
      description:
        "The doctor listens to your symptoms, menstrual history, previous pregnancies, medical conditions and other concerns.",
    },
    {
      title: "Examination, if needed",
      description:
        "A physical or pelvic examination is recommended only when medically necessary and with your consent and privacy.",
    },
    {
      title: "Necessary investigations",
      description:
        "The doctor may suggest blood tests, ultrasound or other investigations and explain why each test is needed.",
    },
    {
      title: "Treatment discussion",
      description:
        "The likely cause, suitable treatment options, benefits and possible risks are discussed with you.",
    },
    {
      title: "Follow-up planning",
      description:
        "A follow-up schedule is planned according to your condition and treatment needs.",
    },
  ];

  const reasonsToChoose = [
    "A doctor who listens patiently and explains medical information clearly",
    "A wide range of women's healthcare services under one roof",
    "Advanced facilities, including 3D and 4D ultrasound and 3D laparoscopy",
    "Uterus-preserving and fertility-conscious options where possible",
    "Pregnancy, fertility and paediatric care in the same practice",
    "Continuity of care with a team that understands your medical history",
    "A private and respectful setting for sensitive concerns",
  ];

  const faqs = [
    {
      q: "What services does a women's health clinic provide?",
      a: "A women's health clinic may provide menstrual and hormonal care, pregnancy and delivery care, fertility evaluation, infection and pelvic pain treatment, gynaecological surgery, contraception, family planning and menopause care.",
    },
    {
      q: "What does Dr. Priyanka Gynaec offer?",
      a: "The clinic lists pregnancy and birthing care, high-risk pregnancy care, fertility and IVF, 3D laparoscopy, hysteroscopy, endometriosis surgery, sterilisation and paediatric care.",
    },
    {
      q: "At what age should a girl first visit a gynaecologist?",
      a: "A first consultation may be helpful around 13 to 15 years of age, or earlier if a girl experiences very painful or heavy periods, missed periods or other concerning symptoms. The timing depends on individual needs.",
    },
    {
      q: "How often should I have a gynaecological checkup?",
      a: "Many women benefit from regular preventive checkups, often annually. Your doctor can recommend a schedule based on your age, medical history, symptoms and screening needs.",
    },
    {
      q: "Is an internal examination always necessary?",
      a: "No. The doctor first reviews your history and symptoms. An internal examination is suggested only when clinically needed and is performed with your informed consent and privacy.",
    },
    {
      q: "Does the clinic provide fertility treatment?",
      a: "Yes. Fertility evaluation and IVF-related services are listed among the clinic's services. The suitable treatment depends on the cause of infertility and individual assessment.",
    },
    {
      q: "Does the clinic offer care for newborn babies?",
      a: "Yes. The clinic lists paediatric consultations, newborn care and vaccinations.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, send a WhatsApp message to +91 89796 70705 or email drpriyankagynaec@gmail.com to enquire about an appointment.",
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
                <Heart size={16} />
                Complete Women's Healthcare
              </div>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Women's Health Clinic in Civil Lines, Moradabad: Complete Care
                Through Every Stage of Life
              </h1>

              <p className="text-base leading-8 text-gray-600">
                A woman's health needs change across her lifetime. A teenager
                may need guidance about periods, a young woman may seek advice
                on PCOS or contraception, an expectant mother needs safe
                antenatal care, and women in midlife may look for answers
                about heavy bleeding or menopause.
              </p>

              <p className="text-base leading-8 text-gray-600">
                Having one trusted clinic that understands your medical
                history can make healthcare simpler and more comfortable. If
                you are looking for a{" "}
                <strong className="text-[#74122E]">
                  women's health clinic in Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers a range
                of gynaecological, obstetric and fertility services.
              </p>
            </section>

            {/* Website Overview */}
            <section className="rounded-3xl border border-[#F0DCE3] bg-[#FCF8FA] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Award className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Website Overview: Dr. Priyanka Gynaec
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                The clinic website describes a women's health and fertility
                centre guided by the philosophy{" "}
                <strong className="text-[#74122E]">"Her Health First."</strong>{" "}
                Dr. Priyanka Pachauri is presented as a gynaecologist in
                Moradabad focused on antenatal and postnatal care, high-risk
                pregnancy management, laparoscopic gynaecological surgery and
                menstrual disorder treatment.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The homepage highlights the following services and facilities:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {websiteServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 rounded-xl bg-white p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{service}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                The site also stresses listening first, continuity of care and
                a patient-centred approach.
              </p>
            </section>

            {/* What Clinic Does */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Stethoscope className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  What Does a Women's Health Clinic Do?
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                A women's health clinic looks after reproductive and related
                health concerns at different ages. Its work may include
                preventive checkups, diagnosis, treatment and guidance for
                pregnancy and family planning.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Routine gynaecological checkups",
                  "Period problems and hormonal disorders",
                  "Pregnancy care from confirmation to delivery",
                  "Fertility evaluation and treatment",
                  "Treatment of infections and pelvic pain",
                  "Management of fibroids, cysts, polyps and endometriosis",
                  "Contraception and family planning",
                  "Menopause care",
                  "Screening and preventive health advice",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[#F0DCE3] p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <p className="rounded-xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-4 text-sm leading-7 text-gray-600">
                A clinic offering a range of services can make follow-up
                easier and help your doctor understand your overall health
                history.
              </p>
            </section>

            {/* Life Stages */}
            <section className="space-y-5">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <Flower2 className="text-[#8F1738]" size={26} />
                  <h2 className="text-2xl font-bold text-[#74122E]">
                    Services for Every Stage of Life
                  </h2>
                </div>

                <p className="leading-8 text-gray-600">
                  Women's health needs evolve with age, hormones, pregnancy
                  and lifestyle. Regular guidance can help women make informed
                  decisions at every stage.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {lifeStages.map((stage) => {
                  const Icon = stage.icon;

                  return (
                    <div
                      key={stage.title}
                      className="rounded-2xl border border-[#F0DCE3] bg-white p-5 shadow-sm"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F0F3]">
                          <Icon size={23} className="text-[#8F1738]" />
                        </div>
                        <h3 className="font-bold text-[#74122E]">
                          {stage.title}
                        </h3>
                      </div>

                      <p className="text-sm leading-7 text-gray-600">
                        {stage.description}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {stage.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-[#8F1738]"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Period and Hormonal Health */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <CalendarDays className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Period and Hormonal Health
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Menstrual problems are among the common reasons women visit a
                gynaecologist. Changes in periods may be related to hormonal
                imbalance, PCOS, thyroid conditions or structural problems
                involving the uterus.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {periodProblems.map((problem) => (
                  <div
                    key={problem}
                    className="flex items-start gap-3 rounded-xl bg-[#FCF8FA] p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{problem}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#F0DCE3] p-5">
                <h3 className="mb-2 font-bold text-[#74122E]">
                  How Are Period Problems Evaluated?
                </h3>
                <p className="text-sm leading-7 text-gray-600">
                  Evaluation usually involves a medical history, examination
                  when needed, blood tests and ultrasound. Treatment depends
                  on the cause and may include lifestyle guidance, medicines,
                  hormonal therapy or procedures such as hysteroscopy or
                  minimally invasive surgery for selected structural
                  conditions.
                </p>
              </div>
            </section>

            {/* Pregnancy Care */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Baby className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Pregnancy and Childbirth Care
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Safe motherhood is one of the clinic's core areas. Antenatal
                care helps monitor the mother's health and the baby's
                development, while identifying conditions that may need
                additional attention.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {pregnancyServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 rounded-xl border border-[#F0DCE3] p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{service}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Normal vaginal delivery may be prioritised when medically
                suitable. The safest delivery method depends on the health of
                the mother and baby and the clinical situation.
              </p>
            </section>

            {/* Fertility */}
            <section className="rounded-3xl border border-[#F0DCE3] bg-[#FCF8FA] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <HeartPulse className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Fertility and IVF
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Difficulty in conceiving can be emotionally challenging for
                couples. The clinic lists fertility and IVF among its
                personalised services and describes advanced tools such as a
                time-lapse embryo imaging incubator and AI-powered semen
                analysis.
              </p>

              <h3 className="mt-5 font-bold text-[#74122E]">
                What Does Fertility Evaluation Include?
              </h3>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {fertilityEvaluation.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                Treatment is tailored to the cause and may range from
                lifestyle changes and ovulation support to advanced fertility
                care when needed.
              </p>

              <div className="mt-5 rounded-2xl border border-[#EBD4DD] bg-white p-5">
                <h3 className="font-bold text-[#74122E]">
                  When Should You Seek Fertility Advice?
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Consider an evaluation after one year of trying to conceive,
                  or after six months if the woman is over 35. Seek advice
                  earlier if periods are irregular or you have a known
                  reproductive health condition.
                </p>
              </div>
            </section>

            {/* Surgery */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Microscope className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Gynaecological Surgery and Minimally Invasive Care
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Some gynaecological conditions need surgery. Minimally
                invasive techniques use smaller incisions or access through
                the natural opening of the cervix, depending on the
                procedure. The clinic lists the following surgical services:
              </p>

              <div className="space-y-4">
                {surgicalProcedures.map((procedure, index) => (
                  <div
                    key={procedure.title}
                    className="flex gap-4 rounded-2xl border border-[#F0DCE3] bg-white p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F0F3] font-bold text-[#8F1738]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#74122E]">
                        {procedure.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {procedure.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#F8F4F6] p-5">
                <p className="text-sm leading-7 text-gray-600">
                  Surgery is recommended only when medically necessary. Your
                  doctor should explain alternatives, risks and expected
                  benefits so that you can make an informed decision.
                </p>
              </div>
            </section>

            {/* Common Conditions */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Stethoscope className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Common Conditions Treated
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                A women's health clinic can help assess and manage a variety
                of reproductive and gynaecological conditions.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {commonConditions.map((condition) => (
                  <div
                    key={condition}
                    className="flex items-start gap-3 rounded-xl bg-[#FCF8FA] p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">
                      {condition}
                    </p>
                  </div>
                ))}
              </div>

              <p className="rounded-xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-4 text-sm leading-7 text-gray-600">
                No concern is too small or too embarrassing to discuss.
                Seeking advice early can help identify problems and guide
                appropriate treatment.
              </p>
            </section>

            {/* Preventive Care */}
            <section className="rounded-3xl border border-[#F0DCE3] bg-[#FCF8FA] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Preventive Care: Why Regular Checkups Matter
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Many women visit a doctor only when something goes wrong.
                Regular preventive checkups can help monitor health and
                identify certain problems before symptoms become severe.
              </p>

              <div className="mt-5 space-y-3">
                {preventiveBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                Ask your doctor which screening tests are appropriate for
                your age, medical history and individual risk factors.
              </p>
            </section>

            {/* Healthy Habits */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Activity className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Healthy Habits for Everyday Wellbeing
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Everyday habits support general wellbeing and can help women
                take a more active role in their health.
              </p>

              <div className="space-y-3">
                {healthyHabits.map((habit, index) => (
                  <div
                    key={habit}
                    className="flex items-start gap-4 rounded-xl bg-[#FCF8FA] p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8F1738] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-gray-700">{habit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* First Visit */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <ClipboardList className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  What to Expect at Your First Visit
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Bring previous reports, scans and a list of current medicines.
                Note the dates of your last periods and write down your
                questions. This can help make the consultation more useful.
              </p>

              <div className="space-y-4">
                {firstVisitSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-[#F0DCE3] bg-white p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F0F3] font-bold text-[#8F1738]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#74122E]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="rounded-xl bg-[#F8F4F6] p-4 text-sm leading-7 text-gray-600">
                You are welcome to bring a family member or friend for
                support. Your comfort, consent and privacy should be respected
                throughout the consultation.
              </p>
            </section>

            {/* Why Choose */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Award className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Why Women Choose Dr. Priyanka Gynaec
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Choosing a healthcare provider is a personal decision. Women
                may look for a clinic that offers clear explanations,
                continuity and access to different services as their needs
                change.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {reasonsToChoose.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-xl border border-[#F0DCE3] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Location and Contact */}
            <section className="overflow-hidden rounded-3xl bg-[#74122E] p-6 text-white sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <MapPin size={25} />
                <h2 className="text-2xl font-bold">Location and Contact</h2>
              </div>

              <p className="leading-8 text-white/90">
                Dr. Priyanka Gynaec is located at A2, near Old Roadways,
                Gandhi Nagar, Moradabad, Uttar Pradesh – 244001. The clinic
                is accessible to women from Civil Lines and nearby areas.
              </p>

              <p className="mt-3 leading-8 text-white/90">
                If you are looking for a women's health clinic in Civil Lines,
                Moradabad, contact the clinic to enquire about an appointment
                and discuss your healthcare needs.
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
            </section>

            {/* FAQs */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Frequently Asked Questions (FAQs)
                </h2>
                <p className="mt-2 leading-7 text-gray-600">
                  Common questions about women's healthcare services and
                  consultations in Moradabad.
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

            {/* Final CTA */}
            <section className="rounded-3xl border border-[#F0DCE3] bg-white p-6 text-center shadow-sm sm:p-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F0F3]">
                <Sparkles className="text-[#8F1738]" size={24} />
              </div>

              <h2 className="text-2xl font-bold text-[#74122E]">
                Give Your Health the Attention It Deserves
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-8 text-gray-600">
                From menstrual and hormonal concerns to pregnancy, fertility
                and menopause, the right medical guidance can help you make
                informed decisions at every stage of life. Contact Dr.
                Priyanka Gynaec to enquire about a consultation.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+919079765578"
                  className="rounded-full bg-[#8F1738] px-7 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book an Appointment
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
              </div>

              <div className="rounded-2xl border border-[#F0DCE3] bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <ShieldCheck className="text-[#8F1738]" size={23} />
                  <h3 className="font-bold text-[#74122E]">
                    Care at Every Stage
                  </h3>
                </div>

                <p className="text-sm leading-7 text-gray-600">
                  From menstrual health and pregnancy to fertility and
                  menopause, regular medical guidance can support your
                  changing healthcare needs.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
