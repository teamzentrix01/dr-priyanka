
import Link from "next/link";
import {
  Activity,
  Award,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Globe,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function IrregularPeriodsDoctor() {
  const faqs = [
    {
      q: "What is considered an irregular period?",
      a: "Cycles shorter than 21 days or longer than 35 days, widely varying cycles, skipped periods, or unusually heavy or light bleeding may be considered irregular.",
    },
    {
      q: "What are the most common causes?",
      a: "PCOS, thyroid disorders, stress, weight changes, high prolactin, contraceptive changes and perimenopause are common causes of irregular periods.",
    },
    {
      q: "When should I see a doctor?",
      a: "Consult a doctor if you miss periods for three months, bleed very heavily, experience severe pain, or notice a sudden change in your cycle after years of regular periods.",
    },
    {
      q: "Can stress delay periods?",
      a: "Yes. Ongoing stress and poor sleep can disturb ovulation and delay or sometimes skip periods.",
    },
    {
      q: "Which tests are done for irregular periods?",
      a: "Depending on your symptoms, tests may include a pregnancy test, thyroid and prolactin tests, blood sugar, reproductive hormone tests and pelvic ultrasound. Additional tests are recommended only when needed.",
    },
    {
      q: "Can irregular periods affect fertility?",
      a: "They can, especially when associated with PCOS or ovulation problems. Many women are able to conceive after identifying and treating the underlying cause.",
    },
    {
      q: "Can irregular periods be treated without surgery?",
      a: "Yes. Most cases are managed with lifestyle changes and medicines. Procedures are considered only for specific structural problems when necessary.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or email drpriyankagynaec@gmail.com to book a consultation.",
    },
  ];

  const contactDetails = [
    {
      icon: Phone,
      label: "Call",
      value: "+91 90797 65578",
      href: "tel:+919079765578",
    },
    {
      icon: Mail,
      label: "Email",
      value: "drpriyankagynaec@gmail.com",
      href: "mailto:drpriyankagynaec@gmail.com",
    },
    {
      icon: MapPin,
      label: "Clinic Address",
      value:
        "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001",
      href: null,
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.gynaecologistmoradabad.com",
      href: "https://www.gynaecologistmoradabad.com/",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          {/* Main Article */}
          <div className="order-1 min-w-0 space-y-10">
            {/* Introduction */}
            <section className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F8F4F6] px-4 py-2 text-sm font-semibold text-[#8F1738]">
                <HeartPulse size={17} />
                Women's Health & Menstrual Care
              </div>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Irregular Periods Doctor Near Civil Lines, Moradabad: Finding
                the Cause, Restoring the Cycle
              </h1>

              <p className="text-base leading-8 text-gray-600">
                Periods that arrive late, come twice a month or disappear for
                months can be stressful and confusing. Many women are told to
                "wait and see" or to try home remedies, and months pass without
                answers. Your cycle is a sign of your overall health, and a
                change in its pattern deserves attention. If you are looking
                for an{" "}
                <strong className="text-gray-800">
                  irregular periods doctor near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers
                evaluation and treatment for menstrual disorders in a
                respectful, private setting.
              </p>
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
                focused on menstrual disorder treatment, antenatal and
                postnatal care, high-risk pregnancies and laparoscopic
                surgery. The services list includes fertility and IVF,
                hysteroscopy, laparoscopic surgery and paediatric care. The
                clinic also lists 3D and 4D ultrasound. The site stresses
                listening first and continuity of care, which suits menstrual
                problems that often need follow-up.
              </p>
            </section>

            {/* What Counts */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Counts as an Irregular Period?
              </h2>

              <p className="leading-8 text-gray-600">
                A typical cycle runs 21 to 35 days from the first day of one
                period to the first day of the next, with bleeding lasting
                about three to seven days. Your periods may be irregular if:
              </p>

              <ul className="space-y-3">
                {[
                  "The gap between periods varies a lot from month to month",
                  "Cycles are shorter than 21 days or longer than 35 days",
                  "You skip periods or have none for three months or more",
                  "Bleeding is much heavier or lighter than usual",
                  "Periods last longer than seven days",
                  "You bleed between periods or after intercourse",
                  "Your periods suddenly change after years of being regular",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-600">
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="leading-8 text-gray-600">
                Cycles may be irregular in the first few years after periods
                begin, after childbirth, during breastfeeding and near
                menopause. Outside these phases, persistent irregularity
                should be evaluated.
              </p>
            </section>

            {/* Common Causes */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Common Causes of Irregular Periods
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "PCOS",
                    description:
                      "One of the most frequent causes in young women. It can bring delayed periods, acne, excess hair growth and weight gain.",
                  },
                  {
                    title: "Thyroid Disorders",
                    description:
                      "An underactive or overactive thyroid can alter cycle length and menstrual flow.",
                  },
                  {
                    title: "Stress and Poor Sleep",
                    description:
                      "Emotional strain, exam or job pressure and disturbed sleep can delay ovulation.",
                  },
                  {
                    title: "Weight Changes",
                    description:
                      "Rapid weight loss or gain, crash dieting and excessive exercise can upset hormones.",
                  },
                  {
                    title: "High Prolactin",
                    description:
                      "Excess prolactin can stop ovulation and cause missed periods.",
                  },
                  {
                    title: "Uterine and Ovarian Conditions",
                    description:
                      "Fibroids, polyps, endometriosis and ovarian cysts can cause unpredictable or heavy bleeding.",
                  },
                  {
                    title: "Contraceptive Changes",
                    description:
                      "Starting, stopping or changing hormonal contraception can alter cycles for a few months.",
                  },
                  {
                    title: "Perimenopause",
                    description:
                      "Women in their late thirties and forties may notice changing menstrual cycles.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-5 transition hover:border-[#E8C7D1]"
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

              <p className="rounded-xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-4 leading-7 text-gray-700">
                <strong>Other causes:</strong> Diabetes, insulin resistance,
                anaemia, pelvic infection and certain medicines. Pregnancy is
                always the first thing to rule out if a period is late.
              </p>
            </section>

            {/* Warning Symptoms */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Symptoms That Deserve Prompt Attention
              </h2>

              <p className="leading-8 text-gray-600">
                See a doctor soon if you have any of the following symptoms:
              </p>

              <div className="rounded-2xl border border-red-100 bg-red-50/50 p-5">
                <ul className="space-y-3">
                  {[
                    "No period for three months when you are not pregnant",
                    "Bleeding that soaks a pad every one to two hours",
                    "Severe pelvic pain",
                    "Bleeding between periods or after intercourse",
                    "Any bleeding after menopause",
                    "Facial hair growth, severe acne or scalp hair thinning",
                    "Unexplained tiredness, dizziness or breathlessness",
                    "Difficulty in conceiving after a year of trying",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <ShieldCheck
                        size={19}
                        className="mt-1 shrink-0 text-[#8F1738]"
                      />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Evaluation */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                How Irregular Periods Are Evaluated
              </h2>

              <p className="leading-8 text-gray-600">
                A good consultation starts with listening. Your doctor will
                ask about your cycle pattern, last period date, flow, pain,
                weight changes, stress, medicines and family history. Keeping
                a period diary for two or three months before the visit is
                very helpful.
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: "Physical Examination",
                    description:
                      "Weight, blood pressure and signs of hormonal imbalance may be assessed.",
                  },
                  {
                    title: "Pregnancy Test",
                    description: "Used to rule out pregnancy.",
                  },
                  {
                    title: "Blood Tests",
                    description:
                      "Thyroid, prolactin, blood sugar, haemoglobin and reproductive hormones may be checked.",
                  },
                  {
                    title: "Pelvic Ultrasound",
                    description:
                      "Helps examine the uterus and ovaries; the clinic lists 3D and 4D ultrasound facilities.",
                  },
                  {
                    title: "Hysteroscopy",
                    description:
                      "In selected cases, a hysteroscopy may be used to look inside the uterus. The clinic lists diagnostic hysteroscopy.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-xl border border-gray-100 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F4F6] font-bold text-[#8F1738]">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                You will not necessarily need every test. A responsible doctor
                orders only what is needed and explains why.
              </p>
            </section>

            {/* Treatment Options */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Treatment Options
              </h2>

              <p className="leading-8 text-gray-600">
                Treatment depends on the cause, your age and whether you plan
                pregnancy. The goal is not only to bring on a period but to
                restore hormonal balance and protect long-term health.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Lifestyle Changes",
                    description:
                      "Balanced meals, regular activity, better sleep and healthy weight are often the foundation, especially in PCOS.",
                  },
                  {
                    title: "Hormonal Treatment",
                    description:
                      "Where suitable, medicines can regulate the cycle, reduce heavy bleeding and protect the uterine lining.",
                  },
                  {
                    title: "Thyroid and Metabolic Care",
                    description:
                      "Correcting thyroid levels or managing insulin resistance often restores normal cycles.",
                  },
                  {
                    title: "Ovulation Support",
                    description:
                      "For women trying to conceive, medicines may be used with careful monitoring. The clinic lists fertility and IVF services if more advanced care is needed.",
                  },
                  {
                    title: "Treating Heavy Bleeding",
                    description:
                      "Medicines can reduce menstrual flow, and iron supplements may help correct anaemia.",
                  },
                  {
                    title: "Procedures When Needed",
                    description:
                      "Polyps can be removed hysteroscopically, and fibroids or cysts may be treated with keyhole surgery in selected cases. Surgery is considered only when truly needed.",
                  },
                  {
                    title: "Stress Support",
                    description:
                      "Relaxation, counselling and routine changes can support hormonal health.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#FAFAFA] p-5"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8E9EE] text-[#8F1738]">
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

              <p className="rounded-xl bg-[#F8F4F6] p-4 text-sm leading-7 text-gray-700">
                <strong>Important:</strong> Please do not take hormonal pills
                or emergency contraception repeatedly without medical advice.
              </p>
            </section>

            {/* Daily Habits */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Daily Habits That Support a Regular Cycle
              </h2>

              <p className="leading-8 text-gray-600">
                Healthy daily habits can support hormonal health and
                complement medical treatment. Helpful steps include:
              </p>

              <div className="rounded-2xl border border-gray-100 p-5">
                <ul className="space-y-3">
                  {[
                    "Eat regular meals with vegetables, fruit, protein, whole grains and healthy fats",
                    "Cut back on sugary drinks, processed food and excess caffeine",
                    "Walk, practise yoga or exercise moderately most days",
                    "Sleep seven to eight hours",
                    "Maintain a healthy weight without extreme dieting",
                    "Make time for rest, hobbies and people you trust",
                    "Track your periods in a diary or mobile app",
                    "Include iron-rich foods such as spinach, lentils, jaggery and dates if you bleed heavily",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-600">
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-[#8F1738]"
                      />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Different Ages */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Irregular Periods at Different Ages
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Teenagers",
                    description:
                      "Cycles often take two to three years to settle. Very heavy bleeding, severe pain or long gaps should be checked.",
                  },
                  {
                    title: "Young Women",
                    description:
                      "PCOS, thyroid problems and stress are common causes, and fertility planning may be a concern.",
                  },
                  {
                    title: "After Childbirth",
                    description:
                      "Cycles may take time to return, especially during breastfeeding.",
                  },
                  {
                    title: "Forties",
                    description:
                      "Perimenopause can bring shorter, longer or heavier cycles.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-100 p-5"
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

              <div className="rounded-xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-5">
                <h3 className="font-bold text-[#74122E]">
                  After Menopause
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  Any bleeding after menopause needs prompt medical
                  evaluation.
                </p>
              </div>
            </section>

            {/* Fertility */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Irregular Periods and Fertility
              </h2>

              <p className="leading-8 text-gray-600">
                Irregular periods often mean irregular ovulation, which can
                make conception harder. The good news is that many causes are
                treatable. If you are planning a pregnancy, note your cycle
                dates, avoid delay in seeking advice and consider evaluation
                if you have been trying for a year, or six months if you are
                over 35.
              </p>

              <div className="rounded-2xl bg-[#F8F4F6] p-5">
                <div className="flex gap-3">
                  <HeartPulse
                    size={24}
                    className="mt-1 shrink-0 text-[#8F1738]"
                  />
                  <p className="leading-7 text-gray-700">
                    Identifying the underlying cause of irregular ovulation
                    can help your doctor recommend an appropriate fertility
                    plan based on your health and pregnancy goals.
                  </p>
                </div>
              </div>
            </section>

            {/* First Visit */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What to Bring to Your First Visit
              </h2>

              <p className="leading-8 text-gray-600">
                A little preparation can help your doctor understand your
                menstrual history and recommend suitable tests.
              </p>

              <div className="rounded-2xl border border-gray-100 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <ClipboardList
                    size={24}
                    className="text-[#8F1738]"
                  />
                  <h3 className="font-bold text-[#74122E]">
                    Your Consultation Checklist
                  </h3>
                </div>

                <ul className="space-y-3">
                  {[
                    "Dates of your last few periods",
                    "A list of your current medicines and supplements",
                    "Previous reports and scans",
                    "Notes on symptoms such as pain, flow, acne or weight change",
                    "Your questions, written down",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-600">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-[#8F1738]"
                      />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="leading-8 text-gray-600">
                You will leave with a clear understanding of the likely cause,
                the tests needed and a realistic plan.
              </p>
            </section>

            {/* Why Choose */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                Menstrual concerns can affect physical comfort, emotional
                wellbeing and everyday life. A supportive consultation and
                appropriate follow-up can help women understand their
                condition and available treatment options.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "A doctor who listens patiently and explains clearly",
                  "Care for periods, hormones, fertility, pregnancy and surgery in one practice",
                  "3D and 4D ultrasound and hysteroscopy facilities",
                  "Honest advice about what is and is not needed",
                  "Continuity of care through follow-up visits",
                  "A private, respectful setting",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="leading-7 text-gray-700">{item}</p>
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
                The clinic is at A2, near Old Roadways, Gandhi Nagar,
                Moradabad, Uttar Pradesh 244001, and is accessible to women
                from Civil Lines and nearby areas. Call{" "}
                <strong className="text-gray-800">
                  +91 90797 65578
                </strong>
                , message on WhatsApp at{" "}
                <strong className="text-gray-800">
                  +91 89796 70705
                </strong>
                , or email{" "}
                <strong className="text-gray-800">
                  drpriyankagynaec@gmail.com
                </strong>
                . If you are looking for an{" "}
                <strong className="text-gray-800">
                  irregular periods doctor near Civil Lines, Moradabad
                </strong>
                , book a consultation and start finding answers.
              </p>

              <div className="rounded-2xl bg-[#F8F4F6] p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#8F1738]">
                    <Award size={25} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#74122E]">
                      Dr. Priyanka Pachauri
                    </h3>
                    <p className="text-sm text-gray-600">
                      Dr. Priyanka Gynaec, Moradabad
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {contactDetails.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div key={index} className="flex gap-3">
                        <Icon
                          size={19}
                          className="mt-1 shrink-0 text-[#8F1738]"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="break-words text-sm leading-7 text-gray-600 transition hover:text-[#8F1738]"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm leading-7 text-gray-600">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#8F1738] bg-white px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#F8E9EE]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Frequently Asked Questions (FAQs)
                </h2>
                <p className="mt-2 leading-7 text-gray-600">
                  Common questions about irregular periods, their causes and
                  available treatment options.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 p-5 transition hover:border-[#D9A8B8]"
                  >
                    <h3 className="flex gap-3 font-bold leading-7 text-[#74122E]">
                      <span className="text-[#8F1738]">
                        {index + 1}.
                      </span>
                      {faq.q}
                    </h3>
                    <p className="mt-3 pl-6 leading-7 text-gray-600">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="rounded-2xl bg-[#74122E] p-7 text-center text-white sm:p-9">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                <Stethoscope size={28} />
              </div>

              <h2 className="text-2xl font-bold">
                Get Help for Irregular Periods
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/85">
                Do not ignore persistent changes in your menstrual cycle.
                Schedule a consultation with Dr. Priyanka Pachauri to discuss
                your symptoms and understand the next steps.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#74122E] transition hover:bg-gray-100"
                >
                  <Phone size={18} />
                  Call for Appointment
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm text-white/80">
                <Link
                  href="/services"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Contact Clinic
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />

              <div className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8E9EE] text-[#8F1738]">
                  <CalendarDays size={22} />
                </div>

                <h3 className="text-lg font-bold text-[#74122E]">
                  Book Your Consultation
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Discuss your menstrual symptoms and get guidance about
                  suitable evaluation and treatment options.
                </p>

                <a
                  href="tel:+919079765578"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#8F1738] px-5 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={17} />
                  +91 90797 65578
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-[#8F1738] bg-white px-5 py-3 font-semibold text-[#8F1738] transition hover:bg-[#F8E9EE]"
                >
                  Message on WhatsApp
                </a>
              </div>

              <div className="rounded-2xl border border-gray-100 p-6">
                <h3 className="mb-4 text-lg font-bold text-[#74122E]">
                  Related Services
                </h3>

                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "Menstrual Disorder Treatment",
                    "PCOS Treatment",
                    "Fertility and IVF Services",
                    "Diagnostic Hysteroscopy",
                    "Laparoscopic Gynaecological Surgery",
                    "3D and 4D Ultrasound",
                  ].map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#8F1738]"
                      />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#8F1738] transition hover:text-[#74122E]"
                >
                  View All Services
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
