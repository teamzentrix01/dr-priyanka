
import Link from "next/link";
import {
  Activity,
  Apple,
  Award,
  Baby,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock,
  Dumbbell,
  Heart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Utensils,
  Venus,
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PCOSDoctor() {
  const symptoms = [
    "Irregular, delayed or missed periods",
    "Very few periods in a year",
    "Heavy bleeding when periods do come",
    "Acne, oily skin or dandruff",
    "Excess hair on the face, chest or abdomen",
    "Thinning hair on the scalp",
    "Weight gain, especially around the waist, or difficulty losing weight",
    "Darkening of skin in the neck, underarms or groin",
    "Difficulty conceiving",
    "Mood changes, anxiety or low mood",
    "Tiredness and poor sleep",
  ];

  const causes = [
    "Insulin resistance, which can raise insulin and androgen levels",
    "Hormonal imbalance affecting ovulation",
    "Family history of PCOS",
    "Genetic factors",
    "Lifestyle factors such as inactivity and poor diet, which can worsen symptoms",
  ];

  const investigations = [
    {
      title: "Pelvic ultrasound",
      description:
        "Examines the ovaries and uterine lining and helps assess their appearance.",
    },
    {
      title: "Hormone tests",
      description:
        "Assess androgen levels and other reproductive hormones when required.",
    },
    {
      title: "Thyroid and prolactin tests",
      description:
        "Help rule out other causes of irregular or absent periods.",
    },
    {
      title: "Blood sugar and insulin tests",
      description:
        "Check for insulin resistance and assess diabetes risk.",
    },
    {
      title: "Lipid profile",
      description:
        "Checks cholesterol levels and helps assess metabolic health.",
    },
  ];

  const complications = [
    "Difficulty conceiving",
    "Type 2 diabetes and insulin resistance",
    "High blood pressure and cholesterol",
    "Thickening of the uterine lining due to infrequent periods",
    "Sleep apnoea",
    "Anxiety and depression",
    "Pregnancy complications such as gestational diabetes",
  ];

  const treatments = [
    {
      icon: Apple,
      title: "Lifestyle changes",
      description:
        "Balanced nutrition, regular physical activity and good sleep are important first steps. They can improve periods, weight and insulin sensitivity. Even modest weight loss in women who are overweight may help.",
    },
    {
      icon: Venus,
      title: "Hormonal treatment",
      description:
        "For women who are not trying to conceive, hormonal medicines may help regulate periods, protect the uterine lining and reduce acne or excess hair growth.",
    },
    {
      icon: Activity,
      title: "Insulin-sensitising medicines",
      description:
        "These may be prescribed when insulin resistance or prediabetes is present, depending on individual evaluation.",
    },
    {
      icon: ShieldCheck,
      title: "Anti-androgen treatment",
      description:
        "Medicines may be considered for troublesome acne or excess hair growth under medical supervision and with appropriate contraception, as advised.",
    },
    {
      icon: Baby,
      title: "Ovulation induction",
      description:
        "For women who wish to conceive, medicines can help the ovaries release eggs. Treatment may include ultrasound monitoring to assess the response.",
    },
    {
      icon: Heart,
      title: "Advanced fertility care",
      description:
        "If simpler treatments do not work, further fertility options such as IVF may be discussed according to the couple's needs.",
    },
    {
      icon: Stethoscope,
      title: "Surgical options",
      description:
        "Surgery is rarely needed for PCOS itself, but may be considered in selected cases when other treatments have not worked.",
    },
    {
      icon: Heart,
      title: "Emotional support",
      description:
        "Counselling and stress-management strategies can help women cope with the emotional effects of PCOS.",
    },
  ];

  const dietTips = [
    "Choose whole grains, millets, oats, pulses, vegetables and fruit.",
    "Include protein with each meal, such as dal, paneer, eggs, fish or lean meat.",
    "Add healthy fats such as nuts, seeds and olive or mustard oil in moderation.",
    "Limit sugary drinks, sweets, refined flour and deep-fried food.",
    "Eat regular meals and avoid long gaps or crash diets.",
    "Drink plenty of water throughout the day.",
    "Keep portion sizes balanced.",
    "Consider a personalised nutrition plan, as individual needs differ.",
  ];

  const lifestyleTips = [
    "Aim for about 150 minutes of moderate activity each week, such as brisk walking, cycling or swimming.",
    "Add strength exercises two or three times a week.",
    "Practise yoga or breathing exercises to help manage stress.",
    "Aim for seven to eight hours of sleep.",
    "Avoid smoking and limit alcohol.",
    "Keep a diary or app to track your periods.",
    "Choose small, sustainable changes rather than extreme routines.",
  ];

  const whenToVisit = [
    "Periods that are irregular, absent or very heavy",
    "Acne, unwanted hair growth or hair loss that is bothering you",
    "Rapid weight gain or difficulty losing weight",
    "Difficulty conceiving",
    "Darkened patches of skin",
    "A family history of PCOS or diabetes",
    "Mood changes or low confidence related to your symptoms",
  ];

  const reasons = [
    "A doctor who listens and explains your condition clearly",
    "Care for periods, hormones, fertility and pregnancy in one practice",
    "3D and 4D ultrasound facilities",
    "Fertility and IVF services when needed",
    "Continuity of care across visits",
    "A private and respectful setting for sensitive concerns",
  ];

  const faqs = [
    {
      q: "What is PCOS?",
      a: "PCOS is a hormonal condition that can cause irregular periods, acne, excess hair growth, weight changes and difficulty conceiving. It can also be associated with insulin resistance.",
    },
    {
      q: "Is PCOS the same as PCOD?",
      a: "The terms are often used interchangeably in everyday conversation. Your doctor will explain your diagnosis based on your symptoms, examination and test results.",
    },
    {
      q: "Can PCOS be cured?",
      a: "PCOS is generally a long-term condition, but its symptoms and associated health risks can be managed effectively with lifestyle changes and appropriate treatment.",
    },
    {
      q: "Can I get pregnant with PCOS?",
      a: "Many women with PCOS conceive with the right guidance. Treatment may include lifestyle changes, ovulation tracking, ovulation induction medicines and further fertility care when needed.",
    },
    {
      q: "Which tests are done for PCOS?",
      a: "Depending on your symptoms, tests may include pelvic ultrasound, hormone tests, thyroid and prolactin tests, blood sugar assessment and a lipid profile.",
    },
    {
      q: "Does weight loss help in PCOS?",
      a: "For women who are overweight, even modest weight loss may improve periods, insulin sensitivity and some hormonal symptoms. A sustainable, personalised approach is preferable.",
    },
    {
      q: "Do I need medicines for PCOS?",
      a: "Treatment depends on your symptoms, health risks and pregnancy goals. Some women benefit mainly from lifestyle changes, while others may need medicines. Do not start or stop medication without medical advice.",
    },
    {
      q: "How do I book a consultation?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705 or email drpriyankagynaec@gmail.com to enquire about an appointment.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          <article className="order-1 min-w-0 space-y-10">
            <section>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F8F4F6] px-4 py-2 text-sm font-semibold text-[#8F1738]">
                <Heart size={16} />
                Hormonal Health & PCOS Care
              </span>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                PCOS Doctor Near Civil Lines, Moradabad: Personalised Care for
                Hormonal Health
              </h1>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Irregular periods, stubborn acne, unwanted hair growth, weight
                gain and trouble conceiving can feel unrelated, yet they often
                share one cause: polycystic ovary syndrome, or PCOS. Many women
                live with these symptoms for years before getting a diagnosis.
                The condition is common and manageable, and early care makes a
                real difference. If you are looking for a{" "}
                <strong className="text-gray-800">
                  PCOS doctor near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers evaluation
                and treatment for PCOS at every life stage.
              </p>
            </section>

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
                focused on menstrual disorder treatment, antenatal and
                postnatal care, high-risk pregnancies and laparoscopic surgery.
                Fertility and IVF are listed as personalised treatments.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The homepage features a blog article on PCOS and infertility,
                described as a step-by-step guide to conceiving that covers
                lifestyle changes, ovulation induction and personalised
                fertility plans. The clinic also lists 3D and 4D ultrasound
                among its facilities.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Women's Health", "Fertility Care", "Laparoscopic Surgery", "3D & 4D Ultrasound"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#EAD0D9] bg-white px-4 py-2 text-sm font-medium text-[#74122E]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Is PCOS?
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                PCOS is a hormonal condition in which the ovaries may not
                release eggs regularly, and the body may produce higher levels
                of male hormones, called androgens. Insulin resistance is also
                common. The name refers to the many small follicles that can
                appear on the ovaries on ultrasound, though these are not true
                harmful cysts, and not every woman with PCOS has them.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                PCOS is sometimes called PCOD in everyday use. Doctors use
                specific criteria to diagnose it, so symptoms and tests
                together matter.
              </p>
            </section>

            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Common Symptoms of PCOS
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                Symptoms vary widely. Some women have only one or two, while
                others experience several symptoms together.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {symptoms.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#8F1738]" size={19} />
                    <span className="text-sm leading-6 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Causes PCOS?
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                The exact cause of PCOS is not fully understood. It is believed
                to involve a combination of hormonal, genetic and metabolic
                factors. Contributing factors include:
              </p>
              <ul className="mt-5 space-y-3">
                {causes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 size={19} className="mt-1 shrink-0 text-[#8F1738]" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border-l-4 border-[#8F1738] bg-[#F8F4F6] p-5">
                <p className="font-semibold leading-7 text-[#74122E]">
                  PCOS is not caused by anything a woman did wrong. It is a
                  medical condition that deserves understanding and appropriate
                  care.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#74122E]">
                How PCOS Is Diagnosed
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Diagnosis is based on your medical history, examination and
                investigations. Your doctor may look for irregular or absent
                ovulation, signs of high androgen levels such as acne or excess
                hair growth, and polycystic-appearing ovaries on ultrasound.
              </p>

              <div className="mt-6 space-y-4">
                {investigations.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-[#F0DCE3] p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F4F6] font-bold text-[#8F1738]">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#74122E]">{item.title}</h3>
                      <p className="mt-1 leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                Other conditions can mimic PCOS, so the right evaluation
                matters. Not every woman needs every test; your doctor will
                select investigations according to your symptoms.
              </p>
            </section>

            <section className="rounded-3xl bg-[#F8F4F6] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why PCOS Should Not Be Ignored
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                PCOS is more than a cosmetic or period problem. Without
                appropriate care, it can be linked with several reproductive
                and long-term health concerns.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {complications.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4">
                    <ShieldCheck size={19} className="mt-1 shrink-0 text-[#8F1738]" />
                    <span className="text-sm leading-6 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 leading-8 text-gray-600">
                Early management can reduce these risks, support reproductive
                health and improve quality of life.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#74122E]">
                Treatment Options for PCOS
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                There is no one-size-fits-all treatment. The plan depends on
                your symptoms, age, health risks and whether you want to
                conceive.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {treatments.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#F0DCE3] p-5 transition-shadow hover:shadow-md"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F4F6] text-[#8F1738]">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-[#74122E]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-[#EAD0D9] bg-[#F8F4F6] p-5">
                <p className="font-semibold leading-7 text-[#74122E]">
                  Please do not start or stop PCOS medicines on your own.
                  Treatment should be selected and monitored by a qualified
                  doctor.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <Utensils size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Diet Tips for PCOS
                </h2>
              </div>
              <p className="mt-4 leading-8 text-gray-600">
                A balanced eating pattern can support blood sugar control,
                energy levels and overall hormonal health. Helpful habits
                include:
              </p>
              <ul className="mt-5 space-y-3">
                {dietTips.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 size={19} className="mt-1 shrink-0 text-[#8F1738]" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F4F6] p-3 text-[#8F1738]">
                  <Dumbbell size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#74122E]">
                  Exercise and Lifestyle
                </h2>
              </div>
              <p className="mt-4 leading-8 text-gray-600">
                Regular movement, sleep and stress management can support
                metabolic health. Practical lifestyle steps include:
              </p>
              <div className="mt-5 space-y-3">
                {lifestyleTips.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4">
                    <Activity size={19} className="mt-1 shrink-0 text-[#8F1738]" />
                    <span className="leading-7 text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                PCOS and Fertility
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                PCOS is among the common causes of difficulty conceiving,
                mainly because ovulation can be irregular. The good news is
                that many women with PCOS can conceive with the right support.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Lifestyle improvement and metabolic health support",
                  "Tracking ovulation and menstrual cycles",
                  "Ovulation induction medicines when appropriate",
                  "Further fertility treatment, including IVF, if needed",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4">
                    <CheckCircle2 size={19} className="mt-1 shrink-0 text-[#8F1738]" />
                    <span className="text-sm leading-6 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 leading-8 text-gray-600">
                Your partner's evaluation, including semen analysis, is also
                part of the fertility assessment. If you have been trying for
                a year, or six months if you are over 35, or your periods are
                very irregular, consult a fertility-friendly gynaecologist
                early.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#74122E]">
                PCOS and Pregnancy
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Women with PCOS may have a higher chance of gestational
                diabetes, high blood pressure and preterm birth. Regular
                antenatal care, blood sugar checks and ultrasound monitoring
                help identify and manage potential risks. The clinic offers
                structured antenatal services for pregnancy care.
              </p>
            </section>

            <section className="rounded-3xl bg-[#F8F4F6] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                PCOS in Teenagers
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                PCOS can begin in the teenage years. Periods naturally take
                time to settle after they first begin, so diagnosis in
                adolescents needs particular care. If a teenager has
                persistently irregular periods, severe acne or excess hair
                growth, a medical evaluation can help identify the cause and
                guide appropriate care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#74122E]">
                When to See a Doctor
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Consider booking a consultation if you experience any of the
                following:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {whenToVisit.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-[#F0DCE3] p-4">
                    <CalendarDays size={19} className="mt-1 shrink-0 text-[#8F1738]" />
                    <span className="text-sm leading-6 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Managing PCOS often involves more than one consultation. It
                requires understanding your symptoms, health goals and
                long-term needs. The clinic highlights the following aspects
                of its care:
              </p>
              <div className="mt-5 space-y-3">
                {reasons.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-[#F8F4F6] p-4">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#8F1738]" />
                    <span className="leading-7 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[#F0DCE3] bg-[#F8F4F6] p-6 sm:p-8">
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

            <section className="overflow-hidden rounded-3xl bg-[#74122E] p-7 text-white sm:p-9">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <Heart size={16} />
                Your Health Matters
              </span>
              <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                Get Personalised PCOS Care in Moradabad
              </h2>
              <p className="mt-4 leading-8 text-white/85">
                If you are looking for a PCOS doctor near Civil Lines,
                Moradabad, consult Dr. Priyanka Pachauri for an evaluation and
                a treatment plan based on your symptoms, health and pregnancy
                goals.
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

            <section className="rounded-3xl border border-[#F0DCE3] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Location and Contact
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                The clinic is located at A2, near Old Roadways, Gandhi Nagar,
                Moradabad, Uttar Pradesh 244001, and is accessible to women
                from Civil Lines and nearby areas.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+919079765578"
                  className="flex items-center gap-4 rounded-xl bg-[#F8F4F6] p-4 transition hover:bg-[#F2E8EC]"
                >
                  <Phone className="shrink-0 text-[#8F1738]" size={21} />
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
                  <Phone className="shrink-0 text-[#8F1738]" size={21} />
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
                  <Mail className="shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="break-all font-semibold text-[#74122E]">
                      drpriyankagynaec@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl bg-[#F8F4F6] p-4">
                  <MapPin className="mt-1 shrink-0 text-[#8F1738]" size={21} />
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
                  <Globe className="shrink-0 text-[#8F1738]" size={21} />
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

          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />

              <div className="rounded-2xl border border-[#F0DCE3] bg-[#F8F4F6] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white p-3 text-[#8F1738]">
                    <Stethoscope size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-[#74122E]">
                    Need PCOS Guidance?
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Discuss your menstrual, hormonal or fertility concerns with
                  a gynaecologist and understand the next steps for your care.
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
                  Helpful Information
                </h3>
                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <Clock size={17} className="text-[#8F1738]" />
                    Personalised consultation
                  </div>
                  <div className="flex items-center gap-3">
                    <ClipboardList size={17} className="text-[#8F1738]" />
                    Diagnosis and treatment planning
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart size={17} className="text-[#8F1738]" />
                    Hormonal and fertility care
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
