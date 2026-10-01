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

export default function DoctorForHormonalProblemsMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for hormonal problems in women in Moradabad?",
      a: "A gynaecologist experienced in menstrual and fertility disorders, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "What are the common signs of hormonal imbalance?",
      a: "Irregular periods, weight gain, acne, hair fall, mood swings and tiredness.",
    },
    {
      q: "Can hormonal imbalance be cured?",
      a: "Many conditions can be well controlled or corrected with the right treatment. WhatsApp: +91 89796 70705.",
    },
    {
      q: "Does PCOS affect pregnancy?",
      a: "It can delay ovulation, but most women conceive with lifestyle changes and treatment.",
    },
    {
      q: "Which tests are done for hormonal problems?",
      a: "Blood tests such as TSH, prolactin, FSH, LH and AMH, along with a pelvic ultrasound.",
    },
    {
      q: "Can thyroid problems cause irregular periods?",
      a: "Yes, both low and high thyroid levels can disturb your cycle. Email: drpriyankagynec@gmail.com.",
    },
    {
      q: "Can diet and exercise balance hormones?",
      a: "They help greatly, especially in PCOS, but many women also need medical treatment.",
    },
    {
      q: "Are hormonal pills safe?",
      a: "They are safe for suitable women when prescribed and monitored by a doctor. Never self-medicate.",
    },
    {
      q: "When should I see a doctor for missed periods?",
      a: "If you miss periods for 3 months or more, or have symptoms such as excess hair or milky discharge.",
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
                Doctor for Hormonal Problems in Women in Moradabad: Symptoms,
                Causes and Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                Irregular periods, sudden weight gain, acne, hair fall, mood
                swings, poor sleep, hot flushes, trouble conceiving. Many women
                deal with these one by one, without realising they may share a
                single root cause: hormonal imbalance. If you are looking for a
                doctor for hormonal problems in women in Moradabad, this guide
                explains the common conditions, symptoms, tests and treatments
                in simple language.
              </p>

              <p className="mb-4 text-gray-700">
                Hormonal problems are common at every stage of a woman&apos;s
                life, and most are very treatable once properly diagnosed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Hormones and Why Do They Matter?
              </h2>

              <p className="mb-4 text-gray-700">
                Hormones are chemical messengers made by glands such as the
                ovaries, thyroid, pituitary and adrenals. They travel through
                the blood and control many body functions.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Menstrual cycle and ovulation.</li>
                <li>Fertility and pregnancy.</li>
                <li>Metabolism and body weight.</li>
                <li>Mood, sleep and energy.</li>
                <li>Skin, hair and bone health.</li>
                <li>Heart and blood sugar control.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                When even one hormone is too high or too low, it can disturb
                several systems at the same time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Hormones in a Woman&apos;s Body
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Oestrogen:</strong> regulates periods, builds the
                  uterine lining and protects bones and heart.
                </li>
                <li>
                  <strong>Progesterone:</strong> prepares the uterus for
                  pregnancy and balances oestrogen.
                </li>
                <li>
                  <strong>FSH and LH:</strong> pituitary hormones that trigger
                  egg growth and ovulation.
                </li>
                <li>
                  <strong>Testosterone (in small amounts):</strong> affects
                  libido, muscle and, when high, acne and facial hair.
                </li>
                <li>
                  <strong>Prolactin:</strong> controls milk production, but high
                  levels can stop ovulation.
                </li>
                <li>
                  <strong>Thyroid hormones (T3, T4, TSH):</strong> control
                  metabolism and influence periods.
                </li>
                <li>
                  <strong>Insulin:</strong> manages blood sugar and affects
                  ovarian function.
                </li>
                <li>
                  <strong>Cortisol:</strong> the stress hormone, which can
                  disturb the whole cycle.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Signs of Hormonal Imbalance in Women
              </h2>

              <p className="mb-4 text-gray-700">
                Symptoms depend on which hormone is affected, and they often
                overlap.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Menstrual signs:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular, missed or very frequent periods.</li>
                <li>Very heavy or very light periods.</li>
                <li>Painful periods or severe PMS.</li>
                <li>Bleeding between periods.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Body signs:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Unexplained weight gain or difficulty losing weight.</li>
                <li>Extreme tiredness.</li>
                <li>Hair fall or thinning.</li>
                <li>Acne, especially on the jawline.</li>
                <li>Excess facial or body hair.</li>
                <li>Dry skin, or oily skin and dark patches on the neck.</li>
                <li>Feeling too hot or too cold.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Emotional and other signs:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Mood swings, irritability, anxiety or low mood.</li>
                <li>Poor sleep or night sweats.</li>
                <li>Reduced sex drive or vaginal dryness.</li>
                <li>Trouble concentrating (&quot;brain fog&quot;).</li>
                <li>Headaches and bloating.</li>
                <li>Difficulty getting pregnant.</li>
                <li>
                  Milky nipple discharge when not pregnant or breastfeeding.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Having one symptom does not confirm a hormonal disorder, but a
                pattern is a reason to get tested.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Hormonal Problems in Women
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. PCOS (Polycystic Ovary Syndrome)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  One of the most common hormonal disorders in women of
                  reproductive age.
                </li>
                <li>
                  Features: irregular periods, high male hormones (acne, hair
                  growth), and small follicles on the ovaries.
                </li>
                <li>
                  Often linked with insulin resistance, weight gain and higher
                  diabetes risk.
                </li>
                <li>
                  A leading cause of difficulty conceiving, but very treatable.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Thyroid Disorders
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hypothyroidism (low thyroid):</strong> tiredness,
                  weight gain, constipation, dry skin, heavy or irregular
                  periods.
                </li>
                <li>
                  <strong>Hyperthyroidism (high thyroid):</strong> weight loss,
                  palpitations, anxiety, light or missed periods.
                </li>
                <li>
                  Common in women and can affect fertility and pregnancy.
                </li>
                <li>Diagnosed by a simple blood test (TSH).</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Hyperprolactinaemia
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Raised prolactin levels.</li>
                <li>
                  Causes irregular or absent periods, milky nipple discharge and
                  infertility.
                </li>
                <li>
                  May be due to medicines, stress, thyroid problems or a small
                  pituitary growth.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Premature Ovarian Insufficiency (POI)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovaries stop working normally before age 40.
                </li>
                <li>
                  Causes missed periods, hot flushes and difficulty conceiving.
                </li>
                <li>
                  Needs early diagnosis and treatment for bone and heart
                  protection.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Perimenopause and Menopause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Natural decline of oestrogen, usually in the 40s and 50s.
                </li>
                <li>
                  Causes irregular periods, hot flushes, night sweats, mood
                  changes and vaginal dryness.
                </li>
                <li>
                  Long-term effects include bone loss and heart risk.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Hypothalamic Amenorrhoea
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods stop due to stress, low body weight, excessive
                  exercise or poor nutrition.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Adrenal Disorders
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Overactive or underactive adrenals can disturb periods, weight
                  and blood pressure.
                </li>
                <li>Less common, but important to identify.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Insulin Resistance and Diabetes
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>High insulin disturbs ovarian hormones.</li>
                <li>Closely tied with PCOS and weight gain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Genetics and family history of PCOS, thyroid problems or early
                  menopause.
                </li>
                <li>
                  Age and life stage: puberty, pregnancy, postpartum,
                  perimenopause and menopause.
                </li>
                <li>
                  Weight changes: both obesity and very low body weight.
                </li>
                <li>Chronic stress and poor sleep.</li>
                <li>
                  Unhealthy diet, high in sugar and processed food.
                </li>
                <li>Sedentary lifestyle.</li>
                <li>
                  Medicines such as steroids or some psychiatric drugs.
                </li>
                <li>Recent pregnancy, abortion or breastfeeding.</li>
                <li>
                  Autoimmune conditions, for example Hashimoto&apos;s
                  thyroiditis.
                </li>
                <li>Pituitary or ovarian growths (uncommon).</li>
                <li>Iodine or vitamin D deficiency.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hormonal Imbalance at Different Life Stages
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teenage Years
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular periods are common in the first 2 years after
                  menarche.
                </li>
                <li>
                  Persistent irregularity, severe acne, excess hair or absent
                  periods need a check.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                20s and 30s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS, thyroid disorders and stress-related irregularity are
                  most common.
                </li>
                <li>Fertility concerns often bring women to the doctor.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During and After Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid changes, gestational diabetes and postpartum hormonal
                  shifts.
                </li>
                <li>
                  Postpartum thyroiditis and mood changes can appear months
                  after delivery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                40s (Perimenopause)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycles become irregular, heavier or lighter.
                </li>
                <li>
                  Sleep problems, mood swings and hot flushes may begin.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Menopause
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Vaginal dryness, urinary symptoms, bone loss and heart risk.
                </li>
                <li>
                  Regular check-ups and lifestyle care become important.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: See a Doctor Soon
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  No periods for 3 months or more (and not pregnant).
                </li>
                <li>Periods very heavy or lasting over 7 days.</li>
                <li>Bleeding between periods or after sex.</li>
                <li>Sudden, unexplained weight change.</li>
                <li>
                  Rapid growth of facial or body hair, or deepening voice.
                </li>
                <li>Milky nipple discharge when not pregnant.</li>
                <li>Hot flushes before age 40.</li>
                <li>
                  Trying to conceive for a year without success (6 months if you
                  are over 35).
                </li>
                <li>
                  Severe mood changes, hopelessness or thoughts of self-harm.
                </li>
                <li>
                  Symptoms that interfere with work, relationships or daily
                  life.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Early evaluation avoids long-term complications such as
                infertility, diabetes, bone loss and heart disease.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Are Hormonal Problems Diagnosed?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history:</strong> cycle pattern, weight
                  changes, symptoms, family history and medicines.
                </li>
                <li>
                  <strong>Physical examination:</strong> weight, BMI, blood
                  pressure, skin, hair and thyroid.
                </li>
                <li>
                  <strong>Blood tests,</strong> depending on your symptoms:
                </li>
                <ul className="list-circle space-y-2 pl-8 text-gray-700">
                  <li>TSH, T3, T4 (thyroid).</li>
                  <li>FSH, LH, oestradiol and progesterone.</li>
                  <li>Prolactin.</li>
                  <li>Testosterone and DHEAS.</li>
                  <li>AMH (ovarian reserve).</li>
                  <li>Fasting sugar, HbA1c and insulin.</li>
                  <li>Vitamin D and B12.</li>
                  <li>Lipid profile.</li>
                </ul>
                <li>
                  <strong>Pelvic ultrasound (including 3D/4D):</strong> checks
                  the ovaries, follicles and uterine lining.
                </li>
                <li>
                  <strong>Pregnancy test:</strong> to rule out pregnancy in
                  missed periods.
                </li>
                <li>
                  <strong>Additional tests:</strong> in selected cases, such as
                  MRI of the pituitary.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Timing matters. Some hormone tests need to be done on specific
                days of the cycle, so ask your doctor before booking.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment of Hormonal Problems
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment is personalised. It depends on the diagnosis, your
                age, symptoms and whether you want to conceive.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Lifestyle and Diet Changes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Often the first and most important step, especially in PCOS
                  and insulin resistance.
                </li>
                <li>
                  Even a modest weight loss of about 5 to 10% can restore
                  ovulation in many women with PCOS.
                </li>
                <li>Regular exercise, sleep and stress control.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Medicines for Specific Conditions
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid tablets for hypothyroidism, taken as prescribed and
                  monitored with blood tests.
                </li>
                <li>Anti-thyroid treatment for overactive thyroid.</li>
                <li>
                  Metformin or similar medicines in selected women with insulin
                  resistance.
                </li>
                <li>
                  Cabergoline or related drugs for high prolactin.
                </li>
                <li>
                  Progesterone tablets to regularise periods and protect the
                  uterine lining.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Hormonal Therapy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Combined oral contraceptive pills to regulate cycles, reduce
                  acne and control heavy bleeding, when suitable.
                </li>
                <li>
                  Anti-androgen medicines for excess hair and acne, prescribed
                  with proper contraception.
                </li>
                <li>
                  Menopausal hormone therapy (MHT/HRT): for selected women with
                  troublesome menopausal symptoms, after weighing benefits and
                  risks.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Fertility Treatment
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovulation induction with medicines when PCOS or other causes
                  prevent regular ovulation.
                </li>
                <li>
                  IUI or IVF when needed, based on evaluation.
                </li>
                <li>
                  The clinic offers fertility and IVF services with time-lapse
                  embryo monitoring.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Surgical or Procedural Options
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Laparoscopy for conditions such as endometriosis or ovarian
                  cysts.
                </li>
                <li>
                  Hysteroscopy to check or treat uterine problems affecting
                  periods.
                </li>
                <li>
                  Surgery is used only when medicines and lifestyle measures are
                  not enough, or when a structural problem exists.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Emotional and Mental Health Support
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Counselling for anxiety, low mood and body-image concerns.
                </li>
                <li>Family support and stress management techniques.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Never start hormonal tablets or thyroid medicines on your own.
                Wrong or unsupervised use can worsen the imbalance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guide for Hormonal Balance
              </h2>

              <p className="mb-4 text-gray-700">
                Food does not replace treatment, but it strongly supports it.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to include:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Whole grains:</strong> roti, dalia, oats, millets such
                  as jowar, bajra and ragi.
                </li>
                <li>
                  <strong>Protein:</strong> dal, chana, rajma, sprouts, paneer,
                  curd, eggs, fish or chicken if non-vegetarian.
                </li>
                <li>
                  <strong>Vegetables:</strong> leafy greens, lauki, tori,
                  cucumber, carrots and salads.
                </li>
                <li>
                  <strong>Healthy fats:</strong> nuts, seeds (flax, sesame), a
                  little ghee and good oils.
                </li>
                <li>
                  <strong>Fruits:</strong> guava, apple, papaya, berries and
                  citrus fruits.
                </li>
                <li>
                  <strong>Iron and vitamin C:</strong> to prevent anaemia,
                  especially with heavy periods.
                </li>
                <li>
                  <strong>Calcium and vitamin D sources:</strong> milk, curd,
                  ragi and sunlight exposure.
                </li>
                <li>
                  <strong>Water and herbal or plain fluids:</strong> for
                  hydration.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to limit:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sugary drinks, mithai, cold drinks and packaged juices.</li>
                <li>Refined flour (maida), bakery items and white bread.</li>
                <li>Deep-fried snacks and packaged chips.</li>
                <li>Excess tea and coffee.</li>
                <li>Processed and ready-to-eat foods.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Healthy habits:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Eat at regular times, and don&apos;t skip meals.</li>
                <li>Keep portions balanced, and eat slowly.</li>
                <li>Avoid crash diets and fad detox plans.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Exercise and Lifestyle Tips
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Walk briskly for 30 minutes on most days.</li>
                <li>
                  Add strength training or resistance exercises 2 to 3 times a
                  week if you are able.
                </li>
                <li>
                  Practise yoga or stretching, which can help stress and cycle
                  regularity.
                </li>
                <li>
                  Sleep 7 to 8 hours, and keep a consistent sleep schedule.
                </li>
                <li>
                  Reduce stress through breathing exercises, prayer, meditation
                  or hobbies.
                </li>
                <li>Limit screen time before bed.</li>
                <li>Avoid smoking and alcohol.</li>
                <li>Get sunlight for vitamin D, in safe amounts.</li>
                <li>
                  Avoid extreme exercise or very low calorie diets, which can
                  stop periods.
                </li>
                <li>
                  Keep a period diary to track symptoms and share it with your
                  doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hormonal Problems and Fertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS is a leading cause of ovulation problems, but most women
                  can conceive with treatment.
                </li>
                <li>
                  Thyroid disorders can delay conception and increase miscarriage
                  risk if untreated.
                </li>
                <li>
                  High prolactin can stop ovulation but responds well to
                  medicines.
                </li>
                <li>
                  Low ovarian reserve may need early fertility counselling.
                </li>
                <li>
                  Pre-pregnancy check-ups help optimise hormones before
                  conceiving.
                </li>
                <li>
                  Timely IVF or IUI can help when other treatments are not
                  enough.
                </li>
                <li>Do not wait too long, because age also affects fertility.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hormonal Problems During Pregnancy and After Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid function should be checked in early pregnancy, since
                  it affects baby&apos;s brain development.
                </li>
                <li>
                  Gestational diabetes is a hormonal-metabolic problem that
                  needs monitoring.
                </li>
                <li>
                  Postpartum thyroiditis can cause fatigue, palpitations or low
                  mood after delivery.
                </li>
                <li>
                  Postpartum depression is linked with hormonal shifts and needs
                  support.
                </li>
                <li>
                  Breastfeeding hormones can delay the return of periods.
                </li>
                <li>
                  Report persistent symptoms at your postnatal visits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Menopause and Hormonal Health
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hot flushes and night sweats can be eased with lifestyle
                  changes and, where suitable, hormone therapy.
                </li>
                <li>
                  Vaginal dryness responds to local oestrogen and lubricants.
                </li>
                <li>
                  Bone health: calcium, vitamin D, weight-bearing exercise and,
                  if needed, bone-protecting medicines.
                </li>
                <li>
                  Heart health: control BP, sugar and cholesterol.
                </li>
                <li>Mood and sleep: counselling and healthy routines help.</li>
                <li>
                  Regular screening: breast and cervical checks as advised.
                </li>
                <li>
                  Any bleeding after menopause needs prompt evaluation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful discussion of your periods, symptoms,
                  weight and lifestyle.
                </li>
                <li>
                  A review of your medical, family and pregnancy history.
                </li>
                <li>Basic examination, only as needed.</li>
                <li>Blood tests and a pelvic ultrasound.</li>
                <li>A clear explanation of your diagnosis.</li>
                <li>
                  A personalised plan covering diet, lifestyle, medicines or
                  procedures.
                </li>
                <li>Fertility guidance if you plan a pregnancy.</li>
                <li>A follow-up schedule to monitor your progress.</li>
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
