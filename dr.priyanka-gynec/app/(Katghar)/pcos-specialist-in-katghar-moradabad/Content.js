
import Link from "next/link";
import { Phone, MapPin, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Who is a PCOS specialist near Katghar, Moradabad?",
    a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec provides PCOS evaluation, treatment and fertility care for patients from Katghar and across Moradabad.",
  },
  {
    q: "What are the first signs of PCOS?",
    a: "Irregular periods, acne, excess facial or body hair, weight gain and difficulty conceiving are common signs, though they vary between women.",
  },
  {
    q: "Can PCOS be cured?",
    a: "PCOS is a long-term condition, but symptoms can be managed very well with lifestyle changes, medication and regular follow-up.",
  },
  {
    q: "Can I get pregnant if I have PCOS?",
    a: "Yes, many women with PCOS conceive naturally or with treatment such as ovulation induction. Your doctor will guide you on the best approach.",
  },
  {
    q: "Does PCOS always cause weight gain?",
    a: "No. Many women with PCOS are of normal weight, though weight gain is common and can worsen symptoms.",
  },
  {
    q: "Is PCOS the same as PCOD?",
    a: "The terms are often used interchangeably in everyday conversation. Your doctor will explain the diagnosis and what it means for your treatment.",
  },
  {
    q: "What diet is best for PCOS?",
    a: "A balanced diet with vegetables, fruit, whole grains, pulses and adequate protein, with limited sugary and highly refined foods. Your doctor can personalise this.",
  },
  {
    q: "Will I need IVF for PCOS?",
    a: "Not always. Many women conceive with lifestyle changes and ovulation induction. IVF is considered when other treatments do not work or other factors are present.",
  },
  {
    q: "Does PCOS increase the risk of diabetes?",
    a: "It can, because of insulin resistance, so periodic blood sugar checks and a healthy lifestyle are important.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on the clinic website.",
  },
];

export default function PCOSSpecialistKatgharMoradabad() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="section-width mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <article className="lg:col-span-2 space-y-8 text-gray-700 leading-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                PCOS Specialist in Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>

              <p className="mb-4">
                Irregular periods, stubborn weight gain, acne, unwanted facial
                hair and difficulty conceiving can leave many women feeling
                confused and alone. Often these symptoms point to one common
                hormonal condition: <strong>polycystic ovary syndrome (PCOS)</strong>.
                It affects women of many ages, yet it is also one of the most
                treatable causes of difficulty in conceiving.
              </p>

              <p>
                If you live in Katghar or nearby areas of Moradabad,{" "}
                <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec
                offers personalised PCOS care, from diagnosis and lifestyle
                guidance to ovulation induction and fertility treatment. The
                clinic follows the philosophy{" "}
                <strong>&quot;Her Health First,&quot;</strong> so your symptoms,
                your goals and your story guide the plan.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What Is PCOS?
              </h2>
              <p className="mb-4">
                PCOS is a hormonal condition in which the ovaries may not
                release eggs regularly, and levels of certain hormones,
                especially androgens (often called &quot;male hormones,&quot;
                though all women have small amounts), may be higher than usual.
                Insulin resistance is also common and plays a major role.
              </p>
              <p>
                The word &quot;polycystic&quot; can be misleading. The ovaries
                may show many small follicles on ultrasound, but these are not
                harmful cysts in the usual sense. Some women with PCOS do not
                have polycystic-looking ovaries at all, and some women with such
                ovaries do not have PCOS.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Common Symptoms of PCOS
              </h2>
              <p className="mb-4">
                Symptoms vary from woman to woman and may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Irregular, infrequent or absent periods</li>
                <li>Very heavy or prolonged periods in some women</li>
                <li>Difficulty conceiving</li>
                <li>Acne and oily skin</li>
                <li>Excess hair growth on the face, chest or abdomen</li>
                <li>Thinning hair on the scalp</li>
                <li>Weight gain, especially around the abdomen</li>
                <li>Dark, velvety patches of skin on the neck or underarms</li>
                <li>Mood changes, tiredness and low confidence</li>
              </ul>
              <p className="mt-4">
                Having one symptom does not automatically mean PCOS. A proper
                evaluation is needed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How Is PCOS Diagnosed?
              </h2>
              <p className="mb-4">
                There is no single test for PCOS. Diagnosis is usually based on
                a combination of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your menstrual history and symptoms</li>
                <li>
                  Physical examination, including signs of excess androgen
                </li>
                <li>
                  Blood tests for hormones, thyroid function, blood sugar and
                  other markers as advised
                </li>
                <li>
                  Ultrasound of the ovaries and uterus. The clinic uses a
                  Voluson E22 3D/4D ultrasound machine for detailed imaging
                </li>
              </ul>
              <p className="mt-4">
                Other conditions, such as thyroid problems or raised prolactin,
                can mimic PCOS, so they are checked before a diagnosis is made.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why PCOS Needs Attention
              </h2>
              <p className="mb-4">
                PCOS is not only about periods or pregnancy. If left unmanaged,
                it may be linked with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Difficulty conceiving</li>
                <li>Insulin resistance and a higher risk of type 2 diabetes</li>
                <li>Raised cholesterol and blood pressure</li>
                <li>
                  Thickening of the uterine lining due to infrequent periods
                </li>
                <li>Pregnancy complications such as gestational diabetes</li>
                <li>Emotional strain, anxiety and low mood</li>
              </ul>
              <p className="mt-4">
                With regular follow-up and the right plan, these risks can be
                reduced.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                PCOS Treatment at Dr. Priyanka Gynaec
              </h2>
              <p>
                There is no single cure for PCOS, but symptoms can be managed
                very effectively. Treatment depends on whether your main
                concern is irregular periods, skin and hair changes, weight, or
                getting pregnant.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lifestyle Changes
              </h3>
              <p className="mb-4">
                For many women, lifestyle is the foundation of treatment.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Balanced diet:</strong> Whole grains, vegetables,
                  fruit, pulses and adequate protein, with fewer sugary drinks
                  and highly refined foods.
                </li>
                <li>
                  <strong>Regular physical activity:</strong> Brisk walking,
                  yoga, strength training or other exercise you enjoy and can
                  sustain.
                </li>
                <li>
                  <strong>Gradual weight management:</strong> Even modest
                  weight loss may help restore regular ovulation in women who
                  are overweight.
                </li>
                <li>
                  <strong>Good sleep and stress management:</strong> Both
                  affect hormones.
                </li>
                <li>
                  <strong>Avoiding smoking:</strong> It worsens hormonal and
                  metabolic health.
                </li>
              </ul>
              <p className="mt-4">
                Please avoid crash diets or unproven supplements. Your doctor
                can guide you on a realistic, sustainable plan.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Medication
              </h3>
              <p className="mb-4">
                Depending on your needs, your doctor may suggest:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Hormonal treatment to regulate periods and protect the
                  uterine lining
                </li>
                <li>
                  Medicines that improve insulin sensitivity, where appropriate
                </li>
                <li>Treatment for acne or excess hair growth</li>
                <li>
                  Medicines to induce ovulation if you are trying to conceive
                </li>
              </ul>
              <p className="mt-4">
                Never start or stop hormonal medicines on your own. They need
                proper evaluation and monitoring.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ovulation Induction for Pregnancy
              </h3>
              <p>
                If you are trying to conceive, ovulation induction uses
                medicines to help the ovaries release eggs. Your doctor
                monitors response with ultrasound and adjusts the plan to lower
                risks and improve success. Many women with PCOS conceive with
                lifestyle changes and ovulation induction alone, and the
                clinic&apos;s fertility services support those who need further
                help.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Advanced Fertility Treatment
              </h3>
              <p>
                When simpler measures do not work, further options may be
                considered, including IVF. The clinic offers fertility and IVF
                care with advanced technology, such as time-lapse embryo
                monitoring and AI-powered semen analysis with DNA integrity
                testing for male partners. Treatment is tailored to your age,
                test results and history.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                PCOS and Pregnancy
              </h2>
              <p>
                Many women with PCOS have healthy pregnancies. Some may face a
                higher chance of gestational diabetes, high blood pressure or
                miscarriage, so regular antenatal care is important. Dr.
                Priyanka Pachauri provides structured antenatal services and
                high-risk pregnancy monitoring, so care can continue under one
                roof from conception to delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                PCOS Is Not Only About Fertility
              </h2>
              <p>
                Not every woman with PCOS wants a baby right now. If your
                concern is acne, hair growth, weight or irregular periods,
                treatment is still valuable. Managing PCOS early also protects
                long-term health, including heart health and diabetes risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                PCOS in Teenagers
              </h2>
              <p>
                Irregular periods are common in the first couple of years after
                a girl&apos;s first period, so a doctor will assess carefully
                before labelling it as PCOS. Persistent irregular cycles,
                significant acne, excess hair or rapid weight gain in teenagers
                should be evaluated. Gentle guidance on diet, activity and
                emotional support often forms the first step of treatment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Emotional Wellbeing and PCOS
              </h2>
              <p>
                Living with visible symptoms and fertility worries can affect
                confidence and mood. It is common to feel frustrated or
                anxious. Talking openly with your doctor, family or a trusted
                friend helps. If low mood or anxiety becomes persistent, please
                seek support, as emotional health is part of good PCOS care.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                When Should You See a PCOS Specialist?
              </h2>
              <p className="mb-4">
                Book a consultation if you have:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Periods that come less than every 35 days, more than a few
                  months apart or not at all
                </li>
                <li>Difficulty conceiving after 6 to 12 months of trying</li>
                <li>Persistent acne, excess hair growth or hair thinning</li>
                <li>Rapid or unexplained weight gain</li>
                <li>
                  A diagnosis of PCOS and uncertainty about the next steps
                </li>
                <li>Very heavy or prolonged bleeding</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>A patient-first, listening-focused approach</li>
                <li>Personalised plans, never one-size-fits-all</li>
                <li>
                  Complete support from PCOS diagnosis to fertility treatment,
                  pregnancy and delivery
                </li>
                <li>Advanced imaging and laboratory technology</li>
                <li>Honest guidance on what is needed and what is not</li>
              </ul>
            </div>

            {/* Clinic Address */}
            <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Clinic Address and Appointments
              </h2>
              <p className="mb-5">
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                , reachable for patients from Katghar and other parts of the
                city.
              </p>

              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <Phone size={20} />
                  <strong>Call for appointment:</strong>
                  <a href="tel:+919079765578" className="hover:underline">
                    +91 90797 65578
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={20} />
                  <strong>WhatsApp:</strong>
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +91 89796 70705
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={20} />
                  <strong>Email:</strong>
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="hover:underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Globe size={20} />
                  <strong>Website:</strong>
                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#8F1738] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#74122E] transition"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-[#8F1738] text-[#8F1738] px-6 py-3 rounded-lg font-semibold hover:bg-[#8F1738] hover:text-white transition"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-xl p-5"
                  >
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Q{index + 1}. {faq.q}
                    </h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <LandingEnquiryForm />

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Dr. Priyanka Gynaec
                </h3>
                <p className="flex items-start gap-3 mb-4">
                  <MapPin size={20} className="mt-1 shrink-0" />
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </p>
                <p className="flex items-center gap-3 mb-4">
                  <Phone size={20} className="shrink-0" />
                  <a href="tel:+919079765578" className="hover:underline">
                    +91 90797 65578
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={20} className="shrink-0" />
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="break-all hover:underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
