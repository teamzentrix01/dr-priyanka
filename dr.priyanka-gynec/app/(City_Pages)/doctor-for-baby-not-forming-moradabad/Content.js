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

export default function DoctorForBabyNotFormingMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see if I am not conceiving in Moradabad?",
      a: "A gynaecologist and fertility specialist. Dr. Priyanka Pachauri offers fertility and IVF care in Moradabad.",
    },
    {
      q: "After how long should we consult a doctor?",
      a: "After 12 months of trying if under 35, or 6 months if 35 or older.",
    },
    {
      q: "Should my husband also be tested?",
      a: "Yes. A simple semen analysis is an important part of the evaluation.",
    },
    {
      q: "Can irregular periods cause delay in pregnancy?",
      a: "Yes. They often mean irregular ovulation, which is treatable.",
    },
    {
      q: "Can PCOS be treated for pregnancy?",
      a: "Yes. Most women with PCOS can conceive with lifestyle changes and treatment.",
    },
    {
      q: "Is IVF needed for every couple?",
      a: "No. Many conceive with medicines or IUI. IVF is advised only when required.",
    },
    {
      q: "Are fertility tests painful?",
      a: "Most are simple, such as blood tests, ultrasound and semen analysis.",
    },
    {
      q: "Does age affect the chance of pregnancy?",
      a: "Yes. Fertility declines with age, especially after 35, so early evaluation helps.",
    },
    {
      q: "What if my scan shows an empty sac?",
      a: "It may be too early or a non-developing pregnancy. Repeat the scan and consult your doctor.",
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
                Doctor for Baby Not Forming in Moradabad: Causes, Tests &
                Fertility Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                Waiting for a baby can be one of the hardest phases in a
                couple&apos;s life. Every month brings hope, and every negative
                test brings a little more worry. Then come the questions from
                relatives, the advice from neighbours, and the quiet fear that
                something may be wrong.
              </p>

              <p className="mb-4 text-gray-700">
                Please know this first: you are not alone, and it is not your
                fault. Difficulty in conceiving affects a large number of
                couples in India, and in most cases a clear cause can be found.
                Many couples go on to have a baby with the right guidance,
                sometimes with simple treatment and sometimes with advanced
                options like IUI or IVF.
              </p>

              <p className="mb-4 text-gray-700">
                When people say &quot;baby is not forming&quot;, they usually
                mean the pregnancy is not happening. This guide explains why it
                may be delayed, when to see a fertility doctor, how the
                evaluation works, and how you can consult Dr. Priyanka Pachauri
                in Moradabad. A short section also covers the situation where a
                pregnancy test is positive but the scan does not show a baby.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does &quot;Baby Not Forming&quot; Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                This everyday phrase can describe several situations:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The couple has been trying but pregnancy is not happening.
                </li>
                <li>
                  Periods are irregular or absent, so conception is not
                  occurring.
                </li>
                <li>
                  The pregnancy test is always negative despite regular
                  intercourse.
                </li>
                <li>
                  Pregnancy happened but ended in early miscarriage more than
                  once.
                </li>
                <li>
                  The pregnancy test is positive, but the scan shows an empty
                  sac or no baby (covered later in this article).
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                In medical terms, infertility means not being able to conceive
                after:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  12 months of regular unprotected intercourse in women under 35.
                </li>
                <li>6 months in women aged 35 and above.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Does Pregnancy Normally Happen?
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the steps makes it easier to see where a problem
                may lie.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Ovulation:</strong> an ovary releases a mature egg
                  each month.
                </li>
                <li>
                  <strong>Sperm journey:</strong> healthy sperm swim through the
                  cervix and uterus.
                </li>
                <li>
                  <strong>Fertilisation:</strong> the sperm meets the egg in the
                  fallopian tube.
                </li>
                <li>
                  <strong>Embryo growth:</strong> the fertilised egg divides and
                  travels to the uterus.
                </li>
                <li>
                  <strong>Implantation:</strong> the embryo attaches to the
                  healthy uterine lining.
                </li>
                <li>
                  <strong>Early pregnancy:</strong> the placenta and baby begin
                  to develop.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If any one of these steps does not work, conception can be
                delayed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is Responsible? It Takes Two
              </h2>

              <p className="mb-4 text-gray-700">
                A common myth is that the problem always lies with the woman. In
                reality:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  About one-third of cases have a female cause.
                </li>
                <li>About one-third have a male cause.</li>
                <li>
                  The rest involve both partners or remain unexplained after
                  tests.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                That is why a good fertility evaluation always includes both
                partners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes in Women
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Ovulation Problems
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular or absent ovulation is a leading cause.
                </li>
                <li>
                  It is often linked to PCOS, thyroid disorders or high
                  prolactin.
                </li>
                <li>
                  Signs include irregular, delayed or missed periods.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. PCOS (Polycystic Ovary Syndrome)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  One of the most common and most treatable causes.
                </li>
                <li>Ovulation becomes irregular.</li>
                <li>
                  Other signs include acne, extra hair growth and weight gain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Blocked Fallopian Tubes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Infection, past surgery, endometriosis or tuberculosis can
                  block the tubes.
                </li>
                <li>The egg and sperm then cannot meet.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tissue similar to the uterine lining grows outside the uterus.
                </li>
                <li>
                  It may cause painful periods, pelvic pain and difficulty
                  conceiving.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Uterine Problems
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fibroids, polyps or scarring inside the uterus.
                </li>
                <li>
                  A uterine septum or other structural difference.
                </li>
                <li>These can stop the embryo from implanting.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Age and Egg Reserve
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Egg quantity and quality decline with age, especially after
                  35.
                </li>
                <li>
                  A low ovarian reserve can make conception harder.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Thyroid and Other Hormonal Disorders
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Both underactive and overactive thyroid can affect fertility.
                </li>
                <li>High prolactin can stop ovulation.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Lifestyle Factors
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Being significantly underweight or overweight.
                </li>
                <li>Smoking, tobacco and heavy alcohol.</li>
                <li>Chronic stress and poor sleep.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes in Men
              </h2>

              <p className="mb-4 text-gray-700">
                Male factors are often missed because many couples only test the
                woman first.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Low sperm count.</li>
                <li>Poor sperm movement (motility).</li>
                <li>Abnormal sperm shape.</li>
                <li>
                  No sperm in the semen, from blockage or other causes.
                </li>
                <li>
                  Varicocele, enlarged veins around the testicle.
                </li>
                <li>Infections of the reproductive tract.</li>
                <li>Hormonal problems.</li>
                <li>
                  Lifestyle factors such as smoking, alcohol, tobacco, obesity
                  and long hours of heat exposure.
                </li>
                <li>
                  Sperm DNA damage, which a standard semen report can miss.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A semen analysis is simple, painless and gives very useful
                information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Unexplained Infertility
              </h2>

              <p className="mb-4 text-gray-700">
                In some couples, all basic tests are normal. This can be
                frustrating, but it does not mean there is no hope.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Subtle egg or sperm quality problems may exist.
                </li>
                <li>
                  Treatments such as ovulation induction, IUI and IVF can still
                  help.
                </li>
                <li>
                  Time-lapse embryo monitoring and advanced sperm testing can
                  give more clues where available.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Fertility Doctor?
              </h2>

              <p className="mb-4 text-gray-700">
                Book a consultation if any of these apply to you:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You have been trying for 12 months and are under 35.
                </li>
                <li>
                  You have been trying for 6 months and are 35 or older.
                </li>
                <li>
                  Your periods are irregular, very late or absent.
                </li>
                <li>You have severe period pain or pelvic pain.</li>
                <li>You have had two or more miscarriages.</li>
                <li>
                  You have a history of fibroids, endometriosis or pelvic
                  infection.
                </li>
                <li>
                  You have had surgery on the ovaries, tubes or testicles.
                </li>
                <li>
                  Your partner has known low sperm count or a past infection.
                </li>
                <li>
                  You are over 35 and want to plan a pregnancy soon.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Fertility Evaluation Works
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed Consultation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Age, duration of marriage and how long you have been trying.
                </li>
                <li>Menstrual history and cycle length.</li>
                <li>
                  Past pregnancies, miscarriages, surgeries or infections.
                </li>
                <li>Medical conditions, medicines and lifestyle habits.</li>
                <li>
                  Frequency of intercourse and any difficulties.
                </li>
                <li>Questions about your partner&apos;s health.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Tests for the Woman
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic ultrasound to check the uterus and ovaries.
                </li>
                <li>
                  Follicle tracking to see whether an egg is growing and
                  releasing.
                </li>
                <li>
                  Hormone tests: thyroid, prolactin, FSH, LH and AMH.
                </li>
                <li>Blood sugar and other basic tests.</li>
                <li>
                  Tube assessment through a special X-ray or ultrasound-based
                  test.
                </li>
                <li>
                  Hysteroscopy if the uterine cavity needs a closer look.
                </li>
                <li>
                  Laparoscopy in selected cases with pelvic pain or suspected
                  endometriosis.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Tests for the Man
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Semen analysis for count, movement and shape.
                </li>
                <li>
                  Advanced sperm tests including DNA integrity where indicated.
                </li>
                <li>
                  Hormone tests and examination if the report is abnormal.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Explanation and Planning
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A clear summary of what was found.
                </li>
                <li>
                  Treatment options, expected timelines and success rates for
                  your situation.
                </li>
                <li>
                  A step-by-step plan that fits your age, budget and comfort.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fertility Treatment Options
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment always depends on the cause. Many couples need only
                the first or second step.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Lifestyle and Timing Guidance
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Healthy weight, balanced diet and regular activity.
                </li>
                <li>Stopping tobacco and alcohol.</li>
                <li>Understanding the fertile window.</li>
                <li>Reducing stress and improving sleep.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Treating the Underlying Condition
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid medicines and correction of high prolactin.
                </li>
                <li>
                  PCOS management with lifestyle changes and medicines.
                </li>
                <li>Treatment of infections.</li>
                <li>
                  Medicines for endometriosis where appropriate.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Ovulation Induction
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tablets or injections to help the ovaries release eggs
                  regularly.
                </li>
                <li>Follicle monitoring by ultrasound.</li>
                <li>
                  Suitable for women with PCOS or irregular ovulation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Surgical Correction
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysteroscopy to remove polyps, adhesions or a septum.
                </li>
                <li>
                  Laparoscopy for endometriosis, ovarian cysts, fibroids or
                  tubal problems.
                </li>
                <li>
                  Keyhole surgery usually means smaller cuts and faster
                  recovery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. IUI (Intrauterine Insemination)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Washed, prepared sperm are placed inside the uterus around
                  ovulation.
                </li>
                <li>
                  Often used for mild male factor, unexplained infertility or
                  ovulation problems.
                </li>
                <li>
                  A simple, short procedure without anaesthesia.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. IVF (In Vitro Fertilisation)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eggs are collected, fertilised in the lab and grown as
                  embryos.
                </li>
                <li>
                  The best embryo is transferred to the uterus.
                </li>
                <li>
                  Suitable for blocked tubes, severe male factor, endometriosis,
                  low egg reserve and repeated IUI failure.
                </li>
                <li>
                  Time-lapse monitoring helps observe embryo development.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. ICSI
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A single healthy sperm is injected directly into an egg.
                </li>
                <li>Used mainly for severe male infertility.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Counselling and Emotional Support
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fertility treatment can be tiring for both partners.
                </li>
                <li>
                  Open discussions and professional support help you cope.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Tips While Trying to Conceive
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For both partners
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat balanced meals with fruits, vegetables, whole grains, dal
                  and protein.
                </li>
                <li>Maintain a healthy weight.</li>
                <li>Exercise moderately, without extremes.</li>
                <li>Sleep 7–8 hours regularly.</li>
                <li>Avoid smoking, tobacco and excess alcohol.</li>
                <li>Manage stress with yoga, walks or meditation.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For women
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Start folic acid before conception, as advised by your doctor.
                </li>
                <li>Track your cycle and note dates.</li>
                <li>Treat anaemia and vitamin deficiencies early.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For men
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Avoid tight underwear and long exposure to heat.
                </li>
                <li>
                  Limit mobile phone or laptop use directly on the lap.
                </li>
                <li>Take medicines only under medical advice.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Not Conceiving
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> It is always the woman&apos;s problem.{" "}
                  <strong>Fact:</strong> Male factors contribute in a large
                  share of cases.
                </li>
                <li>
                  <strong>Myth:</strong> IVF is the only solution.{" "}
                  <strong>Fact:</strong> Many couples conceive with simple
                  treatment or IUI.
                </li>
                <li>
                  <strong>Myth:</strong> Having a baby after 35 is impossible.{" "}
                  <strong>Fact:</strong> It is possible, but earlier evaluation
                  is important.
                </li>
                <li>
                  <strong>Myth:</strong> PCOS means you cannot conceive.{" "}
                  <strong>Fact:</strong> With treatment, most women with PCOS
                  can become pregnant.
                </li>
                <li>
                  <strong>Myth:</strong> Stress alone is the reason.{" "}
                  <strong>Fact:</strong> Stress can play a part, but a medical
                  cause usually needs to be checked.
                </li>
                <li>
                  <strong>Myth:</strong> Home remedies or herbal powders can fix
                  everything. <strong>Fact:</strong> Unverified remedies waste
                  precious time and may cause harm.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What If the Pregnancy Test Is Positive but No Baby Is Seen on
                Scan?
              </h2>

              <p className="mb-4 text-gray-700">
                Some women get a positive test, but the ultrasound shows only an
                empty sac or no visible baby. This can be very upsetting, so
                here is what it may mean.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Very early pregnancy:</strong> the scan was done too
                  soon and needs to be repeated after a week or so.
                </li>
                <li>
                  <strong>Blighted ovum (anembryonic pregnancy):</strong> a sac
                  forms but the embryo does not develop.
                </li>
                <li>
                  <strong>Early pregnancy loss:</strong> the pregnancy stopped
                  growing.
                </li>
                <li>
                  <strong>Ectopic pregnancy:</strong> the pregnancy is outside
                  the uterus, which needs urgent care.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">What to do:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Do not panic, and do not rely on a single scan.
                </li>
                <li>
                  Get a repeat ultrasound and blood hCG test as advised.
                </li>
                <li>
                  Seek urgent help if you have severe pain or heavy bleeding.
                </li>
                <li>
                  Ask your doctor about testing before the next pregnancy,
                  especially if losses repeat.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Most women who face an early loss go on to have healthy
                pregnancies later.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Fertility Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A relaxed conversation in a private setting.
                </li>
                <li>
                  Questions about your cycle, health and lifestyle.
                </li>
                <li>
                  A basic examination and a suitable ultrasound.
                </li>
                <li>
                  A list of tests for you and your partner.
                </li>
                <li>
                  Simple explanations, with no pressure to start advanced
                  treatment.
                </li>
                <li>
                  A plan with clear next steps and a follow-up date.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">Please bring:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous prescriptions, reports and scans.</li>
                <li>Semen report if already done.</li>
                <li>Dates of your last few periods.</li>
                <li>Details of past treatment or surgery.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Fertility Consultation with Dr. Priyanka Pachauri
              </h2>

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
