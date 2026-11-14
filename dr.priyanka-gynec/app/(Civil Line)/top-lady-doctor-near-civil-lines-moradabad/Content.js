
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
  Clock,
  ClipboardList,
  AlertCircle,
  HeartPulse,
  Scan,
  Microscope,
  UserRound,
  MessageCircle,
  FileText,
  Sparkles,
} from "lucide-react";

import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function TopLadyDoctor() {
  const services = [
    {
      icon: Baby,
      title: "Pregnancy and Antenatal Care",
      description:
        "Structured pregnancy checkups, ultrasound and screening tests through each trimester, along with guidance on nutrition, exercise and labour preparation. Normal vaginal delivery is supported where medically suitable.",
    },
    {
      icon: HeartPulse,
      title: "High-Risk Pregnancy Care",
      description:
        "Closer monitoring and individualised care for women with diabetes, thyroid disorders, high blood pressure, twin pregnancy or previous pregnancy complications.",
    },
    {
      icon: CalendarDays,
      title: "Period Problems and Hormonal Health",
      description:
        "Evaluation and treatment for irregular periods, heavy bleeding, painful periods, PCOS and hormonal imbalance.",
    },
    {
      icon: Heart,
      title: "Fertility and IVF",
      description:
        "Personalised fertility evaluation and treatment for couples trying to conceive. The clinic website mentions technologies such as time-lapse embryo monitoring and AI-powered semen analysis.",
    },
    {
      icon: Stethoscope,
      title: "3D Laparoscopic Surgery",
      description:
        "Minimally invasive procedures for ovarian cysts, fibroids, endometriosis, prolapse and hysterectomy, where clinically appropriate.",
    },
    {
      icon: Scan,
      title: "Hysteroscopy",
      description:
        "A diagnostic examination of the uterine cavity that can also help identify and treat problems such as uterine polyps without external cuts.",
    },
    {
      icon: ShieldCheck,
      title: "Sterilisation",
      description:
        "Laparoscopic tubal ligation is listed as a day-care service for women who have completed their families.",
    },
    {
      icon: Baby,
      title: "Paediatric Care",
      description:
        "Consultations for children, newborn care and vaccinations to support the health of young children.",
    },
  ];

  const healthProblems = [
    "Irregular, delayed, heavy or painful periods",
    "PCOS, acne and unwanted hair growth",
    "Pregnancy confirmation and antenatal checkups",
    "Difficulty in conceiving",
    "White discharge, itching, burning or infections",
    "Pelvic pain",
    "Ovarian cysts, fibroids and uterine polyps",
    "Endometriosis",
    "Urine leakage or uterine prolapse",
    "Contraception and family planning",
    "Menopause symptoms such as hot flashes, mood changes and sleep problems",
  ];

  const warningSigns = [
    "Soaking through sanitary pads every one to two hours",
    "Bleeding between periods, after intercourse or after menopause",
    "Severe period pain that interferes with daily activities",
    "Missed periods for three months without pregnancy",
    "Foul-smelling or unusual vaginal discharge",
    "Persistent pelvic or lower abdominal pain",
    "A lump or swelling in the lower abdomen",
    "Difficulty conceiving after a year of trying",
    "Reduced baby movements or bleeding during pregnancy",
  ];

  const healthyHabits = [
    "Eat a balanced diet with vegetables, fruits, protein, whole grains and iron-rich foods.",
    "Stay active with walking, yoga or another form of exercise you enjoy.",
    "Aim for seven to eight hours of sleep.",
    "Track your periods using a diary or mobile app.",
    "Maintain intimate hygiene without harsh soaps or vaginal douching.",
    "Get recommended health checkups, including assessments for anaemia and thyroid problems.",
    "Avoid self-medicating with hormonal pills or antibiotics.",
    "Talk to someone you trust when you feel stressed.",
  ];

  const firstVisitSteps = [
    {
      title: "Listen to your concerns",
      description:
        "The doctor discusses your symptoms, medical history, menstrual cycle and health concerns.",
    },
    {
      title: "Examination, if needed",
      description:
        "A physical or pelvic examination is suggested only when medically necessary and with your consent.",
    },
    {
      title: "Recommended investigations",
      description:
        "The doctor may recommend blood tests, ultrasound or other investigations and explain why they are needed.",
    },
    {
      title: "Diagnosis and treatment discussion",
      description:
        "Possible causes, available treatment options, benefits and risks are discussed with you.",
    },
    {
      title: "Follow-up planning",
      description:
        "A suitable follow-up plan is created according to your condition and treatment response.",
    },
  ];

  const laparoscopyBenefits = [
    "Smaller surgical incisions and scars",
    "Often less post-operative pain",
    "Potentially shorter hospital stay",
    "Often faster return to routine activities",
  ];

  const reasonsToChoose = [
    "Patient-centred consultations with attention to individual concerns",
    "A team that can maintain continuity of care across visits",
    "Minimally invasive surgery wherever medically suitable",
    "Support for safe motherhood and gentle birthing",
    "Gynaecological care at different stages of a woman's life",
    "A respectful environment for discussing sensitive health problems",
  ];

  const faqs = [
    {
      q: "Why should I consult a lady doctor?",
      a: "Many women feel more comfortable discussing sensitive health issues and undergoing examinations with a female doctor. This can help them speak more openly about symptoms and concerns. The most important factors are the doctor's qualifications, experience, ethics and approach.",
    },
    {
      q: "When should I see a gynaecologist?",
      a: "Consult a gynaecologist for painful, heavy or irregular periods, pregnancy care, pelvic pain, abnormal discharge, difficulty conceiving or menopause symptoms. Routine preventive checkups are also useful.",
    },
    {
      q: "Does Dr. Priyanka Gynaec provide pregnancy care?",
      a: "Yes. The clinic lists antenatal checkups, ultrasound, high-risk pregnancy monitoring, support for normal delivery where medically suitable and postnatal care.",
    },
    {
      q: "Is an examination always necessary at the first visit?",
      a: "No. The doctor first listens to your concerns and reviews your medical history. An examination or tests are recommended only when needed. You can ask questions and discuss your comfort at every stage.",
    },
    {
      q: "What treatment is available for PCOS?",
      a: "PCOS management may include lifestyle changes, medicines and ovulation support for women who wish to conceive. The treatment plan depends on symptoms, test results and reproductive goals.",
    },
    {
      q: "Is laparoscopic surgery painful?",
      a: "Laparoscopic surgery generally involves smaller incisions and may cause less post-operative pain than open surgery. However, recovery and discomfort vary depending on the procedure and individual health.",
    },
    {
      q: "Can the clinic help with fertility problems?",
      a: "The clinic lists fertility evaluation and treatment, including IVF-related services. A consultation can help identify possible causes and discuss suitable next steps.",
    },
    {
      q: "How can I book an appointment?",
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
                Compassionate Women's Healthcare
              </div>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Top Lady Doctor Near Civil Lines, Moradabad: Care You Can Talk
                to Openly
              </h1>

              <p className="text-base leading-8 text-gray-600">
                Many women hesitate to discuss intimate health problems. Some
                feel shy, some worry about being judged, and many postpone
                visiting a doctor until the problem becomes serious. A caring
                lady doctor can make that first conversation easier.
              </p>

              <p className="text-base leading-8 text-gray-600">
                If you are looking for a{" "}
                <strong className="text-[#74122E]">
                  top lady doctor near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers
                women's healthcare in a respectful and supportive setting.
              </p>
            </section>

            {/* Why Lady Doctor */}
            <section className="rounded-3xl border border-[#F0DCE3] bg-[#FCF8FA] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <UserRound className="text-[#8F1738]" size={27} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Why Many Women Prefer a Lady Doctor
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Gynaecological care involves sensitive topics such as periods,
                pregnancy, sexual health, infections and menopause. Many women
                feel more comfortable discussing these concerns with a female
                doctor.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Comfort in discussing personal or embarrassing symptoms",
                  "Cultural or family preferences",
                  "Greater ease during physical and pelvic examinations",
                  "A feeling of being understood",
                  "More openness about concerns rarely discussed at home",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4">
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 rounded-xl border-l-4 border-[#8F1738] bg-white p-4 text-sm leading-7 text-gray-600">
                What matters most is the doctor's skill, ethics and approach.
                A good doctor listens, explains your options and respects
                your decisions.
              </p>
            </section>

            {/* About Doctor */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                About Dr. Priyanka Pachauri
              </h2>

              <p className="leading-8 text-gray-600">
                According to the clinic's website, Dr. Priyanka Pachauri is a
                gynaecologist in Moradabad known for antenatal and postnatal
                care, high-risk pregnancy management, laparoscopic
                gynaecological surgery and treatment of menstrual disorders.
              </p>

              <p className="leading-8 text-gray-600">
                The practice follows the philosophy{" "}
                <strong className="text-[#74122E]">"Her Health First,"</strong>{" "}
                which focuses on listening to patients, respecting their
                choices and combining compassionate care with modern medical
                technology.
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

            {/* Services */}
            <section className="space-y-5">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <Stethoscope className="text-[#8F1738]" size={26} />
                  <h2 className="text-2xl font-bold text-[#74122E]">
                    Services Available at Dr. Priyanka Gynaec
                  </h2>
                </div>

                <p className="leading-8 text-gray-600">
                  The clinic lists a range of women's healthcare services,
                  from routine gynaecological consultations to pregnancy,
                  fertility and surgical care.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="rounded-2xl border border-[#F0DCE3] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F0F3]">
                        <Icon size={23} className="text-[#8F1738]" />
                      </div>

                      <h3 className="mb-2 font-bold text-[#74122E]">
                        {service.title}
                      </h3>

                      <p className="text-sm leading-7 text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Health Problems */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Health Problems a Lady Doctor Can Help With
              </h2>

              <p className="leading-8 text-gray-600">
                A gynaecologist can help evaluate a wide range of menstrual,
                hormonal, reproductive and pregnancy-related concerns.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {healthProblems.map((problem) => (
                  <div
                    key={problem}
                    className="flex items-start gap-3 rounded-xl bg-[#FCF8FA] p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">
                      {problem}
                    </p>
                  </div>
                ))}
              </div>

              <p className="rounded-xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-4 text-sm leading-7 text-gray-600">
                No concern is too small to discuss. Early medical advice can
                help identify problems and prevent some conditions from
                becoming more complicated.
              </p>
            </section>

            {/* Warning Signs */}
            <section className="rounded-3xl border border-red-200 bg-red-50/60 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle className="text-red-700" size={27} />
                <h2 className="text-2xl font-bold text-red-800">
                  Signs You Should Not Delay a Visit
                </h2>
              </div>

              <p className="mb-5 leading-7 text-gray-700">
                Consult a gynaecologist if you notice any of the following
                symptoms. Some pregnancy-related symptoms require urgent
                medical assessment.
              </p>

              <div className="space-y-3">
                {warningSigns.map((sign) => (
                  <div key={sign} className="flex items-start gap-3">
                    <AlertCircle
                      size={18}
                      className="mt-1 shrink-0 text-red-700"
                    />
                    <p className="text-sm leading-7 text-gray-700">{sign}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm font-semibold leading-7 text-red-800">
                Heavy bleeding, severe pain, fainting or bleeding during
                pregnancy should not be ignored. Seek urgent medical care
                when symptoms are severe.
              </p>
            </section>

            {/* Pregnancy Care */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Baby className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Pregnancy Care With a Lady Doctor
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Pregnancy brings physical and emotional changes. Regular
                antenatal visits allow your doctor to monitor your health and
                your baby's development throughout pregnancy.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Monitoring the baby's growth and development",
                  "Checking blood pressure, weight and haemoglobin",
                  "Screening for conditions such as gestational diabetes",
                  "Guidance on nutrition and physical activity",
                  "Advice about travel and medicines during pregnancy",
                  "Discussion of labour preparation and birth options",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-[#F0DCE3] p-4">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                The clinic lists 3D and 4D ultrasound technology, which may
                provide clearer imaging when medically indicated. After
                delivery, postnatal visits and paediatric support can help
                mother and baby during the recovery and early development
                period.
              </p>
            </section>

            {/* Fertility */}
            <section className="rounded-3xl border border-[#F0DCE3] bg-[#FCF8FA] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <HeartPulse className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Fertility Support With Sensitivity
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Difficulty in conceiving can be emotionally challenging for
                couples. A fertility evaluation usually begins with a
                detailed medical history, followed by investigations based
                on individual needs.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Medical history and reproductive health assessment",
                  "Hormone tests when indicated",
                  "Ultrasound examination",
                  "Semen analysis for the partner",
                  "Lifestyle guidance and ovulation support",
                  "Advanced fertility treatment when needed",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                Treatment is tailored to the likely cause and the couple's
                goals. A supportive doctor helps explain each step and avoid
                unnecessary procedures.
              </p>
            </section>

            {/* Laparoscopy */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Microscope className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Laparoscopy: A Gentler Surgical Option
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Some gynaecological conditions require surgery. Laparoscopy
                is a minimally invasive approach that uses small incisions
                and a camera to perform an operation inside the abdomen.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {laparoscopyBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-xl border border-[#F0DCE3] p-4">
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

              <p className="leading-8 text-gray-600">
                Your doctor will explain whether surgery is necessary, which
                method is suitable and the possible risks and alternatives
                before you decide. Not every condition requires an operation;
                many can be managed with medicines or regular monitoring.
              </p>
            </section>

            {/* Healthy Habits */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <Activity className="text-[#8F1738]" size={26} />
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Healthy Habits Between Visits
                </h2>
              </div>

              <p className="leading-8 text-gray-600">
                Daily habits can support general and reproductive health.
                Small, consistent changes are often more sustainable than
                sudden restrictions.
              </p>

              <div className="space-y-3">
                {healthyHabits.map((habit, index) => (
                  <div key={habit} className="flex items-start gap-4 rounded-xl bg-[#FCF8FA] p-4">
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
                A little preparation can make your first consultation more
                useful. Carry previous medical reports, scans and a list of
                current medicines. Note your last menstrual period dates and
                write down the questions you want to ask.
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

              <div className="rounded-2xl bg-[#F8F4F6] p-5">
                <p className="text-sm leading-7 text-gray-600">
                  You may bring a family member or friend for support.
                  Examinations should be explained beforehand and performed
                  with your consent and privacy.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="overflow-hidden rounded-3xl bg-[#74122E] p-6 text-white sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <MapPin size={25} />
                <h2 className="text-2xl font-bold">Location and Contact</h2>
              </div>

              <p className="leading-8 text-white/90">
                Dr. Priyanka Gynaec is located at A2, near Old Roadways,
                Gandhi Nagar, Moradabad, Uttar Pradesh – 244001. The clinic
                is accessible to women from Civil Lines and surrounding
                areas.
              </p>

              <p className="mt-3 leading-8 text-white/90">
                If you want to consult a top lady doctor near Civil Lines,
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
                  Common questions about consulting a lady doctor and
                  women's healthcare services in Moradabad.
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
                Take the First Step Towards Better Women's Health
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-8 text-gray-600">
                Whether you need help with periods, pregnancy, fertility or
                another gynaecological concern, a conversation with a
                qualified doctor can help you understand your options.
                Contact Dr. Priyanka Gynaec to enquire about an appointment.
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
                    Your Comfort Matters
                  </h3>
                </div>

                <p className="text-sm leading-7 text-gray-600">
                  You can discuss sensitive health concerns, ask questions
                  and understand your treatment options in a respectful
                  consultation.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
