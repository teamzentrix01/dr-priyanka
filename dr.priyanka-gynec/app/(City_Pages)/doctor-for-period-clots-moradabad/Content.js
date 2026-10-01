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

export default function DoctorForPeriodClotsMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for period clots in Moradabad?",
      a: "A gynaecologist experienced in menstrual disorders, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "Are clots during periods normal?",
      a: "Small clots, smaller than a coin, are often normal on heavy days.",
    },
    {
      q: "When should I worry about period clots?",
      a: "If clots are larger than a coin, frequent, or come with very heavy bleeding. WhatsApp: +91 89796 70705.",
    },
    {
      q: "What causes heavy periods with clots?",
      a: "Hormonal imbalance, fibroids, polyps, adenomyosis, endometriosis, PCOS or clotting disorders.",
    },
    {
      q: "Can heavy periods cause anaemia?",
      a: "Yes, ongoing heavy bleeding can lower iron and haemoglobin, so testing is important.",
    },
    {
      q: "What tests will I need?",
      a: "Blood tests and a pelvic ultrasound, and sometimes hysteroscopy or a biopsy. Email: drpriyankagynec@gmail.com.",
    },
    {
      q: "Can heavy periods be treated without surgery?",
      a: "Yes, many women improve with medicines, hormonal treatment or minor procedures.",
    },
    {
      q: "Can clots mean a miscarriage?",
      a: "They can, if you have a missed period or positive pregnancy test. Seek medical help promptly.",
    },
    {
      q: "Do period clots affect fertility?",
      a: "Clots alone don't, but conditions causing them, such as fibroids or PCOS, may. A check-up helps.",
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
                Doctor for Period Clots in Moradabad: Causes, Warning Signs and
                Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                Passing a few clots during your period is common. But large
                clots, very heavy bleeding or sudden changes can be alarming,
                and many women stay silent because they think &quot;this is just
                how my periods are.&quot; If you are searching for a doctor for
                period clots in Moradabad, this guide explains when clots are
                normal, when they are not, what causes them, and how they are
                treated.
              </p>

              <p className="mb-4 text-gray-700">
                Heavy or clotty periods are one of the most common reasons women
                visit a gynaecologist, and most causes can be treated well.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Period Clots?
              </h2>

              <p className="mb-4 text-gray-700">
                Period clots are jelly-like lumps of blood and tissue that come
                out with menstrual flow.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  They are made of blood, tissue from the uterine lining and
                  clotting proteins.
                </li>
                <li>
                  Your body releases natural anticoagulants so menstrual blood
                  usually flows freely.
                </li>
                <li>
                  When bleeding is heavy or fast, the anticoagulants
                  can&apos;t keep up, and clots form.
                </li>
                <li>
                  Colour ranges from bright red to dark red, maroon or brown.
                </li>
                <li>
                  Texture can be soft and jelly-like, or thicker and stringy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Are Period Clots Normal?
              </h2>

              <p className="mb-4 text-gray-700">
                Small clots are often normal, especially on the heaviest days.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Usually normal:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clots smaller than a coin (about 2.5 cm or less).
                </li>
                <li>
                  Clots only on the first 1 to 2 days of heavy flow.
                </li>
                <li>
                  Dark red or brownish clots at the start or end of a period.
                </li>
                <li>
                  Periods that last 3 to 7 days with a manageable flow.
                </li>
                <li>No severe pain, dizziness or tiredness.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Not usually normal:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clots larger than a coin or a plum-sized lump.
                </li>
                <li>
                  Passing clots again and again for several days.
                </li>
                <li>
                  Soaking a pad or tampon every 1 to 2 hours.
                </li>
                <li>Bleeding lasting longer than 7 days.</li>
                <li>Periods that suddenly became much heavier.</li>
                <li>Severe pain, weakness or breathlessness with the bleeding.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you are unsure where your periods fall, an examination clears
                the doubt.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as Heavy Menstrual Bleeding?
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors call it heavy menstrual bleeding when blood loss affects
                your health or daily life.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Soaking through a pad or tampon in 1 to 2 hours, for several
                  hours in a row.
                </li>
                <li>
                  Needing double protection (a pad plus a tampon, or two pads).
                </li>
                <li>Waking at night to change protection.</li>
                <li>Bleeding through clothes or bedsheets regularly.</li>
                <li>Periods lasting more than 7 days.</li>
                <li>Passing clots larger than a coin.</li>
                <li>
                  Avoiding work, exercise or social plans because of the flow.
                </li>
                <li>
                  Symptoms of anaemia, such as fatigue, dizziness or
                  breathlessness.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Heavy bleeding is not something to &quot;just tolerate,&quot;
                because it can slowly drain your iron and energy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Period Clots and Heavy Bleeding
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Hormonal Imbalance
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular ovulation leads to a thicker uterine lining that
                  sheds heavily.
                </li>
                <li>
                  Common in teenagers, women in their 40s and PCOS.
                </li>
                <li>Thyroid problems can also disturb periods.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Non-cancerous growths in the uterine wall.</li>
                <li>
                  Can cause heavy, long periods, clots, pelvic pressure and
                  frequent urination.
                </li>
                <li>Very common in women in their 30s and 40s.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Uterine Polyps
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Small growths on the inner lining of the uterus.</li>
                <li>
                  May cause heavy periods, spotting between periods and clots.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The uterine lining grows into the muscle wall of the uterus.
                </li>
                <li>
                  Causes heavy, painful periods and an enlarged, tender uterus.
                </li>
                <li>More common after childbirth and in the 30s to 40s.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tissue similar to the uterine lining grows outside the uterus.
                </li>
                <li>
                  Can cause heavy periods, severe pain and fertility problems.
                </li>
                <li>
                  The clinic lists advanced laparoscopic treatment for
                  endometriosis.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. PCOS (Polycystic Ovary Syndrome)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular ovulation may cause long gaps, followed by very
                  heavy bleeding with clots.
                </li>
                <li>
                  Often comes with acne, excess hair growth and weight gain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Bleeding or Clotting Disorders
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Conditions such as von Willebrand disease or low platelets.
                </li>
                <li>
                  Often show up as heavy periods since the very first period.
                </li>
                <li>May also cause easy bruising or nosebleeds.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Intrauterine Device (Copper IUD)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Can make periods heavier and crampier, especially in the first
                  months.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Miscarriage or Pregnancy-Related Bleeding
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy bleeding with large clots and cramps may be an early
                  pregnancy loss.
                </li>
                <li>
                  Ectopic pregnancy can also cause bleeding and pain, and needs
                  urgent care.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Other Causes
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Medications such as blood thinners.</li>
                <li>Pelvic infections.</li>
                <li>Thyroid disorders.</li>
                <li>Liver or kidney disease.</li>
                <li>
                  Perimenopause: hormonal fluctuations before menopause.
                </li>
                <li>
                  Rarely, endometrial hyperplasia or cancer, which is why
                  persistent abnormal bleeding should always be checked.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Do Clots Look Different?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Bright red clots:</strong> fresh, fast bleeding.
                </li>
                <li>
                  <strong>Dark red or maroon clots:</strong> blood that stayed a
                  little longer in the uterus.
                </li>
                <li>
                  <strong>Brown or black clots:</strong> older blood, often at
                  the start or end of the period.
                </li>
                <li>
                  <strong>Grey or pale tissue:</strong> could be tissue from a
                  miscarriage and should be reviewed by a doctor.
                </li>
                <li>
                  <strong>Jelly-like or stringy:</strong> usually blood and
                  lining tissue.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Colour alone does not diagnose a condition, but noting it helps
                your doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Often Come With Clots
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Lower belly cramps or pelvic pain.</li>
                <li>Back pain and leg aches.</li>
                <li>Bloating and heaviness in the pelvis.</li>
                <li>Fatigue and weakness.</li>
                <li>Dizziness or headaches.</li>
                <li>Pale skin and breathlessness.</li>
                <li>
                  Frequent urination or constipation (with large fibroids).
                </li>
                <li>Pain during intercourse.</li>
                <li>Bleeding between periods.</li>
                <li>Difficulty getting pregnant.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: See a Doctor Promptly
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Soaking a pad every hour for 2 or more hours.
                </li>
                <li>Clots larger than a golf ball.</li>
                <li>Bleeding for more than 7 days.</li>
                <li>Sudden, severe change in your periods.</li>
                <li>Bleeding between periods, after sex or after menopause.</li>
                <li>Dizziness, fainting, fast heartbeat or breathlessness.</li>
                <li>Severe pelvic pain with heavy bleeding.</li>
                <li>
                  Heavy bleeding with a missed period or positive pregnancy
                  test.
                </li>
                <li>Fever with foul-smelling discharge.</li>
                <li>
                  Periods that have been heavy since your first period, with
                  easy bruising.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Do not wait if you feel faint or weak, as this can be an
                emergency.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is the Cause Diagnosed?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>History:</strong> your cycle pattern, flow, clot size,
                  pain, medicines and family history.
                </li>
                <li>
                  <strong>Pregnancy test:</strong> to rule out
                  pregnancy-related bleeding.
                </li>
                <li>Physical and pelvic examination.</li>
                <li>
                  <strong>Blood tests:</strong> haemoglobin, ferritin (iron
                  stores), thyroid and clotting profile where needed.
                </li>
                <li>
                  <strong>Hormone tests:</strong> in selected women, such as
                  suspected PCOS.
                </li>
                <li>
                  <strong>Pelvic ultrasound (including 3D/4D):</strong> detects
                  fibroids, polyps, adenomyosis and ovarian cysts.
                </li>
                <li>
                  <strong>Diagnostic hysteroscopy:</strong> a thin camera
                  inspects the inside of the uterus, and can also treat small
                  problems at once.
                </li>
                <li>
                  <strong>Endometrial biopsy:</strong> samples the lining,
                  especially in women over 40 or with persistent abnormal
                  bleeding.
                </li>
                <li>
                  <strong>MRI or laparoscopy:</strong> in selected cases, such
                  as suspected adenomyosis or endometriosis.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Heavy Periods and Clots
              </h2>

              <p className="mb-4 text-gray-700">
                The plan depends on the cause, your age, your symptoms and
                whether you want to conceive.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Treating Anaemia
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Iron tablets or iron injections, as your doctor advises.</li>
                <li>Iron-rich food, vitamin C and follow-up blood tests.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Medicines to Reduce Bleeding
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Tranexamic acid:</strong> reduces blood loss during
                  periods.
                </li>
                <li>
                  <strong>NSAID painkillers:</strong> may reduce flow and
                  cramps, but only if suitable for you.
                </li>
                <li>Always take medicines only as prescribed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Hormonal Treatment
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Combined oral contraceptive pills:</strong> regulate
                  cycles and lighten flow.
                </li>
                <li>
                  <strong>Progestin tablets:</strong> help balance the uterine
                  lining.
                </li>
                <li>
                  <strong>Hormonal IUD (levonorgestrel):</strong> very effective
                  at reducing heavy bleeding.
                </li>
                <li>
                  Treatment of PCOS or thyroid problems at the root.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Minor Procedures
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hysteroscopic polypectomy:</strong> removal of uterine
                  polyps through a camera, without cuts.
                </li>
                <li>
                  Hysteroscopic removal of small fibroids in selected cases.
                </li>
                <li>
                  <strong>Dilatation and curettage (D&C):</strong> in specific
                  situations, mostly for diagnosis or urgent control.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Surgery for Fibroids and Related Conditions
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic myomectomy:</strong> keyhole removal of
                  fibroids while keeping the uterus.
                </li>
                <li>
                  <strong>Endometriosis surgery:</strong> laparoscopic excision
                  to relieve pain and bleeding.
                </li>
                <li>
                  <strong>Endometrial ablation:</strong> destroys the uterine
                  lining for women who have completed their families.
                </li>
                <li>
                  <strong>Hysterectomy:</strong> removal of the uterus, usually
                  a last resort when other treatments fail and the family is
                  complete.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Emergency Care
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fluids, medicines, blood transfusion and procedures for very
                  heavy bleeding.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor explains the benefits and risks so you can choose
                with confidence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care and Self-Help Tips
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Track your periods:</strong> note dates, flow, clot
                  size and pain in a diary or app.
                </li>
                <li>
                  <strong>Use a pad count:</strong> record how many pads you use
                  each day.
                </li>
                <li>
                  <strong>Eat iron-rich foods:</strong> palak, methi, beetroot,
                  dates, pomegranate, sprouts and dals.
                </li>
                <li>
                  <strong>Add vitamin C:</strong> lemon, amla, orange and guava
                  to help iron absorption.
                </li>
                <li>
                  <strong>Stay hydrated:</strong> water, coconut water and
                  buttermilk.
                </li>
                <li>
                  Rest during heavy days, and avoid strenuous exercise if you
                  feel weak.
                </li>
                <li>Use a heating pad for cramps.</li>
                <li>
                  Maintain a healthy weight, since excess weight can affect
                  hormones.
                </li>
                <li>
                  Manage stress through sleep, gentle movement and relaxation.
                </li>
                <li>
                  Avoid self-medicating with hormonal tablets or painkillers
                  from the pharmacy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guide for Heavy Periods
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to include:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Iron:</strong> leafy greens, beetroot, dates, raisins,
                  pomegranate, legumes and, if you eat them, eggs and lean meat.
                </li>
                <li>
                  <strong>Vitamin C:</strong> citrus fruits, amla, tomatoes and
                  guava.
                </li>
                <li>
                  <strong>Protein:</strong> dal, curd, paneer, milk and sprouts.
                </li>
                <li>
                  <strong>Folate and B12:</strong> greens, legumes, milk and
                  eggs.
                </li>
                <li>
                  <strong>Fibre:</strong> fruits, vegetables and whole grains.
                </li>
                <li>
                  <strong>Healthy fats:</strong> nuts and seeds.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to limit:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tea or coffee right after meals, since they reduce iron
                  absorption.
                </li>
                <li>Excess sugar, packaged snacks and fried food.</li>
                <li>Very salty foods that worsen bloating.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Period Clots and Fertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fibroids, polyps and endometriosis can affect fertility in
                  some women.
                </li>
                <li>
                  PCOS may cause irregular ovulation and heavy bleeding.
                </li>
                <li>
                  Clots alone do not mean infertility, but the cause behind them
                  may need attention.
                </li>
                <li>
                  Diagnostic hysteroscopy and ultrasound check the uterine
                  cavity.
                </li>
                <li>
                  Treatment before conception can improve the chance of
                  pregnancy.
                </li>
                <li>
                  The clinic also offers fertility and IVF services for women
                  who need extra support.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Period Clots in Different Life Stages
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teenagers
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Early periods are often irregular and can be heavy.
                </li>
                <li>
                  Very heavy bleeding since the first period should be checked
                  for clotting disorders and anaemia.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women in Their 20s and 30s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Common causes include PCOS, polyps, fibroids, IUD use and
                  postpartum changes.
                </li>
                <li>Pregnancy should always be ruled out.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women in Their 40s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Perimenopause brings hormonal swings and heavier or irregular
                  cycles.
                </li>
                <li>Fibroids and adenomyosis are more common.</li>
                <li>
                  Persistent changes deserve a proper check, including the
                  uterine lining.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Menopause
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Any bleeding after menopause is not normal and needs prompt
                  evaluation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Delivery or Miscarriage
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Postpartum bleeding (lochia) can contain small clots in the
                  first days and lasts up to about 6 weeks.
                </li>
                <li>
                  Heavy bleeding with large clots after delivery needs urgent
                  review.
                </li>
                <li>
                  After a miscarriage, bleeding and clots are expected, but very
                  heavy bleeding, fever or severe pain need immediate medical
                  care.
                </li>
                <li>
                  Your first period after delivery can be heavier and clotty,
                  but persistent heaviness should be checked.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths and Facts About Period Clots
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Clots always mean a serious disease.{" "}
                  <strong>Fact:</strong> Small clots are common, but large or
                  frequent clots need evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> Heavy periods are normal for some
                  women, so treatment isn&apos;t needed. <strong>Fact:</strong>{" "}
                  Heavy bleeding can cause anaemia and reduce quality of life.
                  It is treatable.
                </li>
                <li>
                  <strong>Myth:</strong> Clots mean a miscarriage.{" "}
                  <strong>Fact:</strong> Not necessarily. Clots occur in normal
                  periods too, but bleeding with a missed period should be
                  checked promptly.
                </li>
                <li>
                  <strong>Myth:</strong> Hysterectomy is the only cure for heavy
                  periods. <strong>Fact:</strong> Many effective medicines and
                  less invasive procedures exist.
                </li>
                <li>
                  <strong>Myth:</strong> Painkillers from the pharmacy are
                  enough. <strong>Fact:</strong> They may relieve pain, but they
                  do not treat the cause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is known in Moradabad for gynaecology,
                laparoscopic surgery, menstrual disorder treatment and
                patient-first communication. Based on the clinic&apos;s listed
                services, you can expect:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Menstrual disorder expertise:</strong> careful
                  evaluation of heavy, painful or irregular periods.
                </li>
                <li>
                  <strong>3D and 4D ultrasound:</strong> detailed imaging for
                  fibroids, polyps and adenomyosis.
                </li>
                <li>
                  <strong>Diagnostic hysteroscopy:</strong> direct, gentle
                  inspection of the uterine cavity.
                </li>
                <li>
                  <strong>Hysteroscopic polypectomy:</strong> removal of polyps
                  without cuts.
                </li>
                <li>
                  <strong>Laparoscopic myomectomy:</strong> uterus-preserving
                  keyhole fibroid surgery.
                </li>
                <li>
                  <strong>Endometriosis surgery:</strong> advanced 3D
                  laparoscopic treatment for pain and bleeding.
                </li>
                <li>
                  <strong>PCOS and fertility support:</strong> guidance for
                  women planning pregnancy.
                </li>
                <li>
                  <strong>Convenient location:</strong> Gandhi Nagar, Moradabad,
                  with call and WhatsApp booking.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful discussion of your periods, flow, clots
                  and pain.
                </li>
                <li>A pregnancy test, if relevant.</li>
                <li>A gentle examination, where needed.</li>
                <li>Blood tests such as haemoglobin, iron and thyroid.</li>
                <li>An ultrasound, and hysteroscopy if required.</li>
                <li>A clear explanation of the cause.</li>
                <li>
                  A personalised plan with medicines, procedures or surgery,
                  discussed openly.
                </li>
                <li>A follow-up schedule to track your improvement.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Appointment
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