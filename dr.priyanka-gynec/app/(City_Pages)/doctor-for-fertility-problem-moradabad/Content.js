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

export default function DoctorForFertilityProblemMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for a fertility problem in Moradabad?",
      a: "A gynaecologist and fertility specialist. Dr. Priyanka Pachauri offers fertility and IVF care in Moradabad.",
    },
    {
      q: "After how long should we consult a doctor?",
      a: "After 12 months of trying if under 35, or 6 months if 35 or older.",
    },
    {
      q: "Should my husband also be tested?",
      a: "Yes. A semen analysis is a simple and important first test.",
    },
    {
      q: "Can PCOS be treated for pregnancy?",
      a: "Yes. Most women with PCOS conceive with lifestyle changes and treatment.",
    },
    {
      q: "Is IVF needed for everyone?",
      a: "No. Many couples conceive with medicines or IUI.",
    },
    {
      q: "What is the AMH test?",
      a: "A blood test that estimates a woman's egg reserve.",
    },
    {
      q: "Are fertility tests painful?",
      a: "Most are simple, such as blood tests, ultrasound and semen analysis.",
    },
    {
      q: "Does age affect fertility?",
      a: "Yes. It declines with age, especially after 35, so early evaluation helps.",
    },
    {
      q: "Can lifestyle changes improve fertility?",
      a: "Yes. Healthy weight, no tobacco or alcohol, good sleep and less stress all help.",
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
                Doctor for Fertility Problem in Moradabad: Causes, Tests &
                Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                Trying for a baby can be joyful at first. Then months pass,
                tests stay negative, and the joy is slowly replaced by worry,
                pressure from family and silent questions between partners.
              </p>

              <p className="mb-4 text-gray-700">
                If this sounds like your story, please remember one thing: a
                fertility problem is a medical condition, not a personal
                failure. It is common, it is not anyone&apos;s fault, and in
                many cases it is treatable. Many couples conceive after simple
                treatment, and others with the help of IUI or IVF.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what a fertility problem is, why it happens
                in women and men, how it is tested, and what treatment is
                available. It also shows how to consult Dr. Priyanka Pachauri in
                Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Fertility Problem?
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors call it infertility when a couple cannot conceive after:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  12 months of regular, unprotected intercourse if the woman is
                  under 35.
                </li>
                <li>
                  6 months if the woman is 35 or older.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                There are two main forms:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Primary infertility:</strong> the couple has never
                  conceived.
                </li>
                <li>
                  <strong>Secondary infertility:</strong> the couple has
                  conceived before but is now unable to.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Both need proper evaluation, and both are treatable in many
                cases.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is Affected? It Takes Two
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Roughly one-third of cases have a female cause.
                </li>
                <li>Roughly one-third have a male cause.</li>
                <li>
                  The rest involve both partners or remain unexplained after
                  tests.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This is why a good fertility evaluation always includes both
                partners, and why blaming one person is neither fair nor
                accurate.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fertility Problems in Women
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Ovulation Disorders
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The ovaries do not release an egg regularly.
                </li>
                <li>
                  Signs include irregular, delayed or absent periods.
                </li>
                <li>
                  Common causes are PCOS, thyroid problems and high prolactin.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. PCOS (Polycystic Ovary Syndrome)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  One of the most common and most treatable causes.
                </li>
                <li>
                  Irregular ovulation, acne, extra hair growth and weight gain
                  are typical.
                </li>
                <li>
                  Often responds well to lifestyle changes and
                  ovulation-inducing medicines.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Blocked or Damaged Fallopian Tubes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Infection, past surgery, tuberculosis or endometriosis can
                  block the tubes.
                </li>
                <li>The egg and sperm then cannot meet.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tissue like the uterine lining grows outside the uterus.
                </li>
                <li>
                  Causes severe period pain, pain during intercourse and reduced
                  fertility.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Uterine Problems
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fibroids, polyps, adhesions or a uterine septum.
                </li>
                <li>
                  These can interfere with implantation of the embryo.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Low Ovarian Reserve
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fewer eggs remain than expected for the woman&apos;s age.
                </li>
                <li>
                  Measured with the AMH blood test and an antral follicle count
                  on ultrasound.
                </li>
                <li>
                  More common after 35, but can occur earlier.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Thyroid and Hormonal Imbalance
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Underactive or overactive thyroid disturbs ovulation.
                </li>
                <li>High prolactin can stop periods altogether.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Age
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Egg quantity and quality decline gradually, faster after 35.
                </li>
                <li>Earlier evaluation gives more treatment options.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Lifestyle and Other Factors
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Being very underweight or overweight.</li>
                <li>Smoking, tobacco and heavy alcohol.</li>
                <li>Long-term stress and poor sleep.</li>
                <li>
                  Some medicines and medical conditions such as diabetes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fertility Problems in Men
              </h2>

              <p className="mb-4 text-gray-700">
                Male factors are often overlooked because many couples test only
                the woman first.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Low sperm count.</li>
                <li>Poor sperm movement (motility).</li>
                <li>Abnormal sperm shape.</li>
                <li>
                  No sperm in the semen, from blockage or a production problem.
                </li>
                <li>
                  Varicocele: enlarged veins around the testicle.
                </li>
                <li>Infections of the reproductive tract.</li>
                <li>Hormonal imbalance.</li>
                <li>
                  Sperm DNA damage: can be missed on a routine semen report.
                </li>
                <li>
                  Lifestyle factors: smoking, tobacco, alcohol, obesity and
                  prolonged heat exposure.
                </li>
                <li>Erectile or ejaculation difficulties.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A semen analysis is a simple, painless test and should be one of
                the first steps.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Unexplained Infertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  In some couples, all basic tests appear normal.
                </li>
                <li>
                  Subtle egg, sperm or embryo quality issues may still exist.
                </li>
                <li>
                  Treatments such as ovulation induction, IUI and IVF can still
                  help.
                </li>
                <li>
                  Advanced tools like time-lapse embryo monitoring and sperm DNA
                  testing may offer more insight.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs of a Fertility Problem
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular, very late or absent periods.
                </li>
                <li>Very painful or very heavy periods.</li>
                <li>Pain during intercourse.</li>
                <li>
                  History of pelvic infection, tuberculosis or abdominal
                  surgery.
                </li>
                <li>
                  Known fibroids, cysts or endometriosis.
                </li>
                <li>Two or more miscarriages.</li>
                <li>
                  Known low sperm count or past testicular problems.
                </li>
                <li>
                  Being 35 or older and planning a pregnancy.
                </li>
                <li>
                  Not conceiving after 12 months (or 6 months if 35+).
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Fertility Doctor?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You have been trying for the time period given above.
                </li>
                <li>
                  You already know of a condition that can affect fertility.
                </li>
                <li>Periods are irregular or absent.</li>
                <li>You have had repeated pregnancy loss.</li>
                <li>
                  You want to check your fertility before delaying pregnancy.
                </li>
                <li>
                  You have had a previous failed treatment and want a fresh
                  opinion.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Fertility Evaluation Works
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed Consultation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Age, duration of marriage and time spent trying.
                </li>
                <li>Menstrual history and cycle length.</li>
                <li>
                  Past pregnancies, miscarriages, surgeries and infections.
                </li>
                <li>Medical conditions, medicines and lifestyle habits.</li>
                <li>Frequency and timing of intercourse.</li>
                <li>Health history of the partner.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Tests for the Woman
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic ultrasound and follicle tracking to see egg growth and
                  release.
                </li>
                <li>
                  Hormone tests: thyroid, prolactin, FSH, LH and AMH.
                </li>
                <li>Blood sugar and basic health tests.</li>
                <li>
                  Tube assessment using a special X-ray or ultrasound-based
                  test.
                </li>
                <li>
                  Hysteroscopy to look inside the uterus when needed.
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
                  Semen analysis: count, movement and shape.
                </li>
                <li>
                  Advanced sperm tests, including DNA integrity when indicated.
                </li>
                <li>
                  Hormone tests and examination if results are abnormal.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Explanation and Planning
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A clear summary of the findings.</li>
                <li>
                  Treatment options and realistic expectations for your
                  situation.
                </li>
                <li>
                  A plan that fits your age, comfort and budget.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fertility Treatment Options
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment always depends on the cause. Many couples need only
                the first steps.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Lifestyle and Timing Guidance
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reaching a healthy weight.</li>
                <li>Stopping tobacco and alcohol.</li>
                <li>Understanding the fertile window.</li>
                <li>Better sleep and stress control.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Treating the Underlying Condition
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid medicines and control of prolactin.
                </li>
                <li>PCOS management.</li>
                <li>Antibiotics for infection.</li>
                <li>Medicines for endometriosis where suitable.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Ovulation Induction
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tablets or injections to help the ovaries release eggs.
                </li>
                <li>
                  Ultrasound monitoring to time intercourse or IUI.
                </li>
                <li>
                  Suitable for PCOS and irregular ovulation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Surgical Correction
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysteroscopy: removes polyps, adhesions or a septum.
                </li>
                <li>
                  Laparoscopy: treats endometriosis, cysts, fibroids and some
                  tubal problems.
                </li>
                <li>
                  Advantages: smaller cuts, less pain and quicker recovery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. IUI (Intrauterine Insemination)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Prepared sperm are placed in the uterus around ovulation.
                </li>
                <li>
                  Often used for mild male factor, unexplained infertility or
                  ovulation problems.
                </li>
                <li>
                  A short procedure that usually needs no anaesthesia.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. IVF (In Vitro Fertilisation)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eggs are collected, fertilised in the laboratory and grown as
                  embryos.
                </li>
                <li>
                  The best embryo is transferred to the uterus.
                </li>
                <li>
                  Suitable for blocked tubes, severe male factor, endometriosis,
                  low ovarian reserve and repeated IUI failure.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. ICSI
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A single healthy sperm is injected into an egg.
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
                  Open conversations and professional support make the journey
                  easier.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Tips While Trying to Conceive
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
                <li>Exercise moderately.</li>
                <li>Sleep 7–8 hours.</li>
                <li>Avoid smoking, tobacco and excess alcohol.</li>
                <li>
                  Manage stress through yoga, walks or meditation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For women
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Start folic acid before conception as advised.
                </li>
                <li>Track your cycle.</li>
                <li>Treat anaemia and vitamin deficiencies early.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For men
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Avoid tight underwear and prolonged heat exposure.
                </li>
                <li>Take medicines only under medical advice.</li>
                <li>
                  Limit long hours with a laptop placed directly on the lap.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Fertility Problems
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> It is always the woman&apos;s fault.{" "}
                  <strong>Fact:</strong> Male factors contribute in a large
                  share of cases.
                </li>
                <li>
                  <strong>Myth:</strong> IVF is the only solution.{" "}
                  <strong>Fact:</strong> Many couples conceive with medicines or
                  IUI.
                </li>
                <li>
                  <strong>Myth:</strong> PCOS means you cannot have a baby.{" "}
                  <strong>Fact:</strong> Most women with PCOS can conceive with
                  treatment.
                </li>
                <li>
                  <strong>Myth:</strong> Age does not matter.{" "}
                  <strong>Fact:</strong> Fertility declines with age, so earlier
                  evaluation helps.
                </li>
                <li>
                  <strong>Myth:</strong> Stress alone is the reason.{" "}
                  <strong>Fact:</strong> Stress can play a part, but a medical
                  cause usually needs checking.
                </li>
                <li>
                  <strong>Myth:</strong> Home remedies can fix everything.{" "}
                  <strong>Fact:</strong> Unverified remedies waste valuable
                  time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Fertility Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A relaxed, private conversation with no judgement.
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
                  Simple explanations and no pressure to begin advanced
                  treatment.
                </li>
                <li>A clear plan and a follow-up date.</li>
              </ul>

              <p className="mt-4 text-gray-700">Please bring:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous prescriptions, reports and scans.</li>
                <li>Any semen report already done.</li>
                <li>Dates of your last few periods.</li>
                <li>Details of earlier treatment or surgery.</li>
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
