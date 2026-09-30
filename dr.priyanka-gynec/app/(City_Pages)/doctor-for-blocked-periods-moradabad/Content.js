import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function DoctorForBlockedPeriodsMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for blocked periods in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri treats missed periods, PCOS and other menstrual disorders in Moradabad.",
    },
    {
      q: "How many days late is a period considered a problem?",
      a: "If your period is more than 7–10 days late and a pregnancy test is negative, consult a doctor.",
    },
    {
      q: "What is the most common cause of missed periods?",
      a: "Pregnancy is the first cause to rule out. In young women, PCOS and thyroid problems are very common.",
    },
    {
      q: "Can stress block periods?",
      a: "Yes. Long-term stress can delay ovulation and stop periods for months.",
    },
    {
      q: "Can I take tablets to bring periods at home?",
      a: "It is not advised. Take them only after a doctor has ruled out pregnancy and found the cause.",
    },
    {
      q: "Are blocked periods a sign of infertility?",
      a: "Not always, but irregular ovulation can delay pregnancy. Most causes can be treated.",
    },
    {
      q: "Which tests are done for blocked periods?",
      a: "Usually a pregnancy test, thyroid and prolactin tests, hormone tests and a pelvic ultrasound.",
    },
    {
      q: "Can PCOS be cured?",
      a: "PCOS cannot be permanently cured, but it can be managed well with lifestyle changes and treatment.",
    },
    {
      q: "Will my periods return to normal?",
      a: "In most women, yes, once the underlying cause is identified and treated.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Doctor for Blocked Periods in Moradabad: Causes, Treatment &
                When to See a Gynaecologist
              </h1>

              <p className="mb-4 text-gray-700">
                Have your periods stopped, or are they coming later and later?
                Many women in Moradabad and nearby cities such as Rampur,
                Sambhal, Amroha and Bijnor face this problem. Some feel worried
                right away. Others ignore it for months, hoping it will fix
                itself.
              </p>

              <p className="mb-4 text-gray-700">
                Sometimes a missed period is harmless. A stressful month, travel
                or a short illness can delay it. But when periods stay blocked
                for months, or keep coming very late, the body is usually
                telling you something. The cause can be treated in most women,
                and the sooner it is found, the easier the treatment.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what blocked periods mean, why they happen,
                how a gynaecologist finds the cause, and what treatment is
                available. It also explains how to consult Dr. Priyanka
                Pachauri, a gynaecologist in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are &quot;Blocked Periods&quot;?
              </h2>

              <p className="mb-4 text-gray-700">
                &quot;Blocked periods&quot; is a common everyday phrase. In
                medical language, doctors use terms such as amenorrhea (no
                periods), oligomenorrhea (very infrequent periods) and delayed
                menses. When patients say their periods are &quot;blocked&quot;,
                they usually mean one of these:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods have not come for more than 35 days.
                </li>
                <li>
                  Periods have stopped for 3 months or longer.
                </li>
                <li>
                  Periods have never started, even at age 15–16.
                </li>
                <li>
                  Periods used to be regular and have suddenly stopped.
                </li>
                <li>
                  Bleeding is so light that it barely counts as a period.
                </li>
                <li>
                  Periods come only after taking medicines and stop again
                  afterwards.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Missed Periods
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Primary Amenorrhea
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods have not started by age 15, or by age 13 with no other
                  signs of puberty.
                </li>
                <li>
                  It may be linked to hormonal, genetic or structural conditions
                  of the uterus or vagina.
                </li>
                <li>It needs a proper gynaecological evaluation.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Secondary Amenorrhea
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods were normal earlier but have stopped for three months
                  or more.
                </li>
                <li>
                  This is the type most women in clinics ask about.
                </li>
                <li>
                  Pregnancy, PCOS, thyroid problems and stress are common
                  reasons.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Oligomenorrhea
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods come, but the gap is longer than 35 days.
                </li>
                <li>It is very common in women with PCOS.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Hypomenorrhea
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods come on time, but the flow is very light or lasts only
                  one to two days.
                </li>
                <li>
                  It can point to a thin uterine lining or scarring inside the
                  uterus.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Blocked Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Periods depend on a chain of signals between the brain, ovaries
                and uterus. If any link breaks, periods can stop. The most
                common causes are below.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It is the first thing to rule out in any woman of reproductive
                  age.
                </li>
                <li>
                  A simple urine pregnancy test is the first step.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. PCOS (Polycystic Ovary Syndrome)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS is one of the most common causes of irregular and missed
                  periods in young women.
                </li>
                <li>
                  Ovulation becomes irregular, so periods are delayed or
                  skipped.
                </li>
                <li>
                  Other signs include acne, excess facial or body hair, weight
                  gain and hair thinning.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Thyroid Disorders
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  An underactive or overactive thyroid can disturb the
                  menstrual cycle.
                </li>
                <li>
                  Tiredness, weight changes, hair fall and feeling too hot or
                  cold are common signs.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. High Prolactin Levels
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Prolactin is the hormone that helps milk production.
                </li>
                <li>
                  High levels can stop ovulation and block periods.
                </li>
                <li>
                  Some women notice milk-like discharge from the breasts even
                  when not pregnant.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Stress and Emotional Strain
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Long-term stress affects the brain centres that control
                  hormones.
                </li>
                <li>
                  Exams, work pressure, grief or family problems can all delay
                  periods.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Sudden Weight Loss or Weight Gain
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Crash diets, extreme exercise or eating disorders can stop
                  periods.
                </li>
                <li>
                  Being significantly overweight can also disturb ovulation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Premature Ovarian Insufficiency
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The ovaries slow down or stop working before age 40.
                </li>
                <li>
                  It can cause missed periods, hot flushes and difficulty
                  conceiving.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Uterine Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Scarring inside the uterus, called Asherman&apos;s syndrome,
                  may follow infection, repeated procedures or surgery.
                </li>
                <li>
                  The uterus may not respond properly, so bleeding does not
                  occur.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Medicines and Contraception
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Emergency pills used repeatedly, injectable contraceptives,
                  hormonal IUDs and some psychiatric medicines can delay or stop
                  periods.
                </li>
                <li>
                  Periods may take a few months to return after stopping birth
                  control pills.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Breastfeeding and Perimenopause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods may stay away for months during breastfeeding.
                </li>
                <li>
                  Women in their 40s may see irregular cycles as menopause
                  approaches.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Chronic Illness and Other Conditions
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diabetes, tuberculosis, severe anaemia and some pituitary
                  problems can affect periods.
                </li>
                <li>
                  Genital tuberculosis is an important cause in India, especially
                  when periods are scanty and pregnancy is not happening.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Often Come With Blocked Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Watch for these along with missed periods:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Weight gain, especially around the belly.
                </li>
                <li>Acne or oily skin.</li>
                <li>Extra hair on face, chest or abdomen.</li>
                <li>Hair thinning on the scalp.</li>
                <li>Dark patches on neck or underarms.</li>
                <li>
                  Breast tenderness or unexpected milk discharge.
                </li>
                <li>Hot flushes and night sweats.</li>
                <li>Headaches or changes in vision.</li>
                <li>Vaginal dryness.</li>
                <li>Pelvic pain or heaviness.</li>
                <li>Feeling constantly tired.</li>
                <li>Mood swings, anxiety or low mood.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Doctor for Blocked Periods?
              </h2>

              <p className="mb-4 text-gray-700">
                Please book a consultation if any of these apply to you:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You have missed three or more periods in a row.
                </li>
                <li>
                  Your period is more than 7–10 days late and the pregnancy test
                  is negative.
                </li>
                <li>
                  You are 15 or older and have never had a period.
                </li>
                <li>
                  Your cycles are always longer than 35 days.
                </li>
                <li>
                  You have severe pelvic pain with missed periods.
                </li>
                <li>
                  You are trying to conceive and periods are irregular.
                </li>
                <li>
                  You have acne, weight gain and hair growth together.
                </li>
                <li>
                  You have sudden severe headache or vision problems.
                </li>
                <li>You have lost a lot of weight quickly.</li>
                <li>You are in your 30s and hot flushes have started.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Doctors Diagnose the Cause of Blocked Periods
              </h2>

              <p className="mb-4 text-gray-700">
                A good diagnosis saves time and avoids unnecessary medicines.
                Here is how the evaluation usually goes.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed History
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your age, cycle pattern and last period date.
                </li>
                <li>
                  Weight changes, diet, exercise and stress levels.
                </li>
                <li>Medicines, contraception and past surgeries.</li>
                <li>
                  Family history of PCOS, thyroid problems or early menopause.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Physical Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Checking weight, blood pressure, hair growth and skin changes.
                </li>
                <li>Examining the thyroid and breasts if needed.</li>
                <li>Pelvic examination when appropriate.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Basic Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Urine pregnancy test to rule out pregnancy.
                </li>
                <li>Thyroid profile (TSH).</li>
                <li>Prolactin level.</li>
                <li>Blood sugar and haemoglobin.</li>
                <li>
                  Hormone tests such as FSH, LH, AMH and oestrogen, depending on
                  the case.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Imaging
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic ultrasound to check the uterus, lining and ovaries.
                </li>
                <li>
                  3D/4D ultrasound for a clearer view of the uterus and ovarian
                  follicles.
                </li>
                <li>
                  An MRI or other scan only if the doctor suspects a pituitary
                  or structural problem.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Advanced Procedures, If Needed
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diagnostic hysteroscopy to look inside the uterus for
                  scarring, polyps or adhesions.
                </li>
                <li>
                  Laparoscopy in selected cases to check for pelvic causes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Blocked Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends entirely on the cause. There is no single
                medicine that suits every woman, which is why self-medication
                can do harm.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Treatment for PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lifestyle changes: balanced diet, regular exercise and gradual
                  weight reduction.
                </li>
                <li>Medicines to regulate cycles.</li>
                <li>
                  Medicines to improve insulin resistance, if present.
                </li>
                <li>
                  Ovulation induction when pregnancy is planned.
                </li>
                <li>
                  Ongoing follow-up to protect the uterine lining and
                  long-term health.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Treatment for Thyroid Problems
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular thyroid medication with dose adjustment based on blood
                  tests.
                </li>
                <li>
                  Periods often return to normal once thyroid levels are stable.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Treatment for High Prolactin
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Specific medicines that bring prolactin down.
                </li>
                <li>
                  A scan of the pituitary gland if levels are very high.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Managing Stress-Related and Weight-Related Missed Periods
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Structured diet planning with adequate calories and protein.
                </li>
                <li>
                  Balanced exercise rather than extreme training.
                </li>
                <li>
                  Sleep routine, counselling and relaxation techniques.
                </li>
                <li>
                  Periods usually return once the body recovers.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Treatment for Uterine Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysteroscopic adhesion removal for scarring.
                </li>
                <li>
                  Polyp removal through hysteroscopy without cuts.
                </li>
                <li>
                  Hormonal support to help the uterine lining regrow.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Treatment for Premature Ovarian Insufficiency
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormone replacement to protect bones, heart and overall
                  health.
                </li>
                <li>
                  Fertility counselling and options such as IVF when pregnancy
                  is desired.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Treatment When Pregnancy Is the Goal
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovulation tracking and induction.</li>
                <li>Fertility evaluation for both partners.</li>
                <li>
                  Advanced options such as IUI or IVF when required.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Withdrawal Bleeding Medicines
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doctors sometimes prescribe short courses to bring a period,
                  but only after pregnancy and other causes are ruled out.
                </li>
                <li>
                  These medicines treat the symptom, not the underlying problem,
                  so the cause still needs attention.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Tips for Healthier Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Medical treatment works best when supported by daily habits.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Food habits
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat regular meals with whole grains, dal, vegetables, fruits
                  and curd.
                </li>
                <li>
                  Include iron-rich foods such as spinach, beetroot, jaggery and
                  dates.
                </li>
                <li>
                  Add healthy fats from nuts, seeds and ghee in moderation.
                </li>
                <li>
                  Reduce sugary drinks, refined flour and deep-fried snacks.
                </li>
                <li>Drink enough water through the day.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Daily habits
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Walk, do yoga or exercise for 30 minutes most days.
                </li>
                <li>Aim for 7–8 hours of sleep.</li>
                <li>
                  Try meditation or breathing exercises to reduce stress.
                </li>
                <li>Avoid crash diets and skipping meals.</li>
                <li>
                  Keep a simple period diary noting dates and flow.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Habits to avoid
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Taking emergency pills again and again.</li>
                <li>
                  Using &quot;period-bringing&quot; tablets bought from a
                  medical store without advice.
                </li>
                <li>
                  Trying unverified home remedies for weeks while the problem
                  continues.
                </li>
                <li>
                  Ignoring symptoms because &quot;it is just stress&quot;.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation with Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec: Fertility • Maternity • 3D Laparoscopy
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
                      <a
                        href="tel:+919079765578"
                        className="hover:underline"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </Link>

                  <Link
                    href="/services"
                    className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
