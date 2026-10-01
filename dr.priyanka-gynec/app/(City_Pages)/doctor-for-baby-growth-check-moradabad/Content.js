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

export default function DoctorForBabyGrowthCheckMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for baby growth check in Moradabad?",
      a: "A gynaecologist or obstetrician with advanced ultrasound facilities, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "When is a growth scan done in pregnancy?",
      a: "Commonly between 28 and 36 weeks, or earlier and more often in high-risk pregnancies.",
    },
    {
      q: "What is a normal baby weight at birth?",
      a: "Usually about 2.5 to 3.5 kg for a full-term baby. WhatsApp: +91 89796 70705.",
    },
    {
      q: "What does a low percentile mean?",
      a: "Below the 10th percentile means the baby is smaller than average, and your doctor will assess if it is a concern.",
    },
    {
      q: "What causes slow baby growth?",
      a: "Placental problems, high BP, anaemia, infections, smoking or baby-related conditions.",
    },
    {
      q: "Can slow growth be treated?",
      a: "The cause is treated, and monitoring, nutrition and timely delivery protect the baby. Email: drpriyankagynec@gmail.com.",
    },
    {
      q: "Is ultrasound safe for the baby?",
      a: "Yes, it is considered safe when done by a trained doctor for medical reasons.",
    },
    {
      q: "What should I do if baby movements reduce?",
      a: "Lie on your left side and count kicks. If still reduced, contact your doctor immediately.",
    },
    {
      q: "Does the clinic also check newborn growth?",
      a: "Yes, the clinic offers paediatric care, including newborn consultations and vaccinations.",
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
                Doctor for Baby Growth Check in Moradabad: Growth Scans, Baby
                Weight and Healthy Development
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;Is my baby growing well?&quot; is one of the most common
                questions parents ask, both during pregnancy and after birth.
                Every baby grows at their own pace, but regular checks make sure
                that growth stays on track and that any slowdown or excess is
                caught early. If you are looking for a doctor for baby growth
                check in Moradabad, this guide explains how growth is monitored
                in the womb, what scans and measurements mean, what can go
                wrong, and how growth is followed after birth.
              </p>

              <p className="mb-4 text-gray-700">
                Most babies grow normally. Monitoring simply gives you clarity
                and time to act if something needs attention.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Is Baby Growth Monitored?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It shows whether the baby is getting enough nutrition and
                  oxygen from the placenta.
                </li>
                <li>It helps detect slow growth or excess growth early.</li>
                <li>It guides decisions on delivery timing and method.</li>
                <li>
                  It helps track high-risk pregnancies such as those with high
                  BP, diabetes or anaemia.
                </li>
                <li>
                  It reduces the chance of stillbirth and newborn complications
                  through timely action.
                </li>
                <li>It gives parents reassurance and a clear plan.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is Baby Growth Checked During Pregnancy?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Fundal Height Measurement
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A simple tape measure from the top of your pubic bone to the
                  top of the uterus.
                </li>
                <li>
                  From about 24 weeks, the measurement in centimetres roughly
                  matches the weeks of pregnancy (within about 2 cm).
                </li>
                <li>Done at routine antenatal visits, and painless.</li>
                <li>
                  A mismatch does not confirm a problem, but it prompts a scan.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Dating Scan (Early Ultrasound)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The crown-rump length in the first trimester gives the most
                  accurate pregnancy dating.
                </li>
                <li>
                  Accurate dates are essential to judge later growth correctly.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Anomaly Scan (Around 18 to 22 Weeks)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed check of the baby&apos;s organs and structure.</li>
                <li>
                  Also measures early growth and checks fluid and placenta.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Growth Scan (Third Trimester)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Measures the baby&apos;s size and estimates weight.
                </li>
                <li>
                  Advised routinely in high-risk pregnancies and when a problem
                  is suspected.
                </li>
                <li>
                  Usually done between about 28 and 36 weeks, and repeated as
                  needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Doppler Scan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Studies blood flow in the umbilical cord and the baby&apos;s
                  vessels.
                </li>
                <li>
                  Shows how well the placenta is supporting the baby.
                </li>
                <li>
                  Used when growth is slow or there are risk factors.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. 3D/4D Ultrasound
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Provides detailed views of the baby where available.
                </li>
                <li>
                  Supports, but does not replace, medical growth assessment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Growth Percentiles
              </h2>

              <p className="mb-4 text-gray-700">
                Growth results are usually given as a percentile, which compares
                your baby with other babies of the same age.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>10th to 90th percentile:</strong> generally considered
                  normal.
                </li>
                <li>
                  <strong>Below the 10th percentile:</strong> baby is smaller
                  than expected, called small for gestational age (SGA).
                </li>
                <li>
                  <strong>Below the 3rd percentile, or with abnormal Doppler
                  results:</strong> more concerning, and may suggest true growth
                  restriction.
                </li>
                <li>
                  <strong>Above the 90th percentile:</strong> baby is larger
                  than expected, called large for gestational age (LGA).
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A small or large baby is not automatically unhealthy. Some babies
                are simply constitutionally small or big because of family build.
                The trend across several scans matters more than a single number.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Approximate Baby Weight by Week
              </h2>

              <p className="mb-4 text-gray-700">
                These are general averages, and normal ranges are wide.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>12 weeks:</strong> about 14 g (size of a plum).
                </li>
                <li>
                  <strong>16 weeks:</strong> about 100 g.
                </li>
                <li>
                  <strong>20 weeks:</strong> about 300 g.
                </li>
                <li>
                  <strong>24 weeks:</strong> about 600 g.
                </li>
                <li>
                  <strong>28 weeks:</strong> about 1 kg.
                </li>
                <li>
                  <strong>32 weeks:</strong> about 1.7 kg.
                </li>
                <li>
                  <strong>36 weeks:</strong> about 2.6 kg.
                </li>
                <li>
                  <strong>40 weeks:</strong> about 3 to 3.5 kg.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Average birth weight in India tends to be slightly lower than in
                some other countries, and a healthy full-term baby of around 2.5
                to 3.2 kg is common. Always rely on your doctor&apos;s
                interpretation for your baby.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Slow Baby Growth: Fetal Growth Restriction (FGR)
              </h2>

              <p className="mb-4 text-gray-700">
                Fetal growth restriction means the baby is not reaching its
                expected growth potential, often because of placental or
                maternal problems.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Placental insufficiency:</strong> reduced blood flow
                  from the placenta.
                </li>
                <li>Maternal high blood pressure or pre-eclampsia.</li>
                <li>Maternal anaemia or poor nutrition.</li>
                <li>Smoking, tobacco or alcohol use.</li>
                <li>Diabetes with blood vessel involvement.</li>
                <li>Infections during pregnancy.</li>
                <li>Twin or multiple pregnancy.</li>
                <li>Chromosomal or structural abnormalities in the baby.</li>
                <li>Low amniotic fluid.</li>
                <li>
                  Maternal chronic illnesses such as kidney or heart disease.
                </li>
                <li>Previous FGR or stillbirth.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible Signs
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fundal height smaller than expected.</li>
                <li>Slow weight gain in the mother.</li>
                <li>Reduced baby movements.</li>
                <li>Low amniotic fluid on scan.</li>
                <li>
                  Small measurements on ultrasound, especially abdominal
                  circumference.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible Risks
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Preterm delivery, planned to protect the baby.
                </li>
                <li>Low birth weight.</li>
                <li>Difficulty during labour.</li>
                <li>
                  Low blood sugar and temperature problems in the newborn.
                </li>
                <li>
                  Higher risk of stillbirth in severe, unmonitored cases.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Management
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Find and treat the cause, for example controlling BP or
                  treating anaemia.
                </li>
                <li>Regular growth scans and Dopplers.</li>
                <li>Non-stress tests and daily kick counts.</li>
                <li>Improved nutrition and rest.</li>
                <li>Stopping smoking, tobacco and alcohol.</li>
                <li>
                  Steroid injections for the baby&apos;s lung maturity if early
                  delivery is likely.
                </li>
                <li>
                  Carefully timed delivery when the risk of staying inside
                  outweighs the benefit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Large Baby Growth: Macrosomia
              </h2>

              <p className="mb-4 text-gray-700">
                A large baby is often described as one weighing more than about
                4 kg at birth.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gestational or pre-existing diabetes.</li>
                <li>Obesity or excess weight gain in pregnancy.</li>
                <li>Family history of large babies.</li>
                <li>Post-dates pregnancy (going beyond the due date).</li>
                <li>Male baby and previous large baby.</li>
                <li>Excess amniotic fluid.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible Risks
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Difficult or prolonged labour.</li>
                <li>
                  Shoulder dystocia (baby&apos;s shoulder stuck during birth).
                </li>
                <li>Higher chance of caesarean delivery.</li>
                <li>Low blood sugar in the newborn.</li>
                <li>Postpartum bleeding in the mother.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Management
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Screening and control of blood sugar.</li>
                <li>Healthy diet and safe activity.</li>
                <li>Regular growth scans.</li>
                <li>
                  A delivery plan discussed early, including timing and mode of
                  delivery.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Ultrasound weight estimates can be off by 10 to 15%, so your
                doctor also considers your pelvis, previous births and labour
                progress.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Amniotic Fluid and Growth
              </h2>

              <p className="mb-4 text-gray-700">
                Normal fluid cushions the baby and supports lung development.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Low fluid (oligohydramnios):</strong> may suggest
                  placental problems or slow growth, and needs monitoring.
                </li>
                <li>
                  <strong>Excess fluid (polyhydramnios):</strong> may relate to
                  diabetes or, rarely, baby conditions.
                </li>
                <li>
                  <strong>AFI (amniotic fluid index):</strong> commonly, values
                  of about 5 to 25 cm are considered within the normal range.
                </li>
                <li>
                  Hydration, rest and treatment of the cause may help in some
                  cases.
                </li>
                <li>Regular scans track fluid changes.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Contact Your Doctor Promptly
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Reduced or no baby movements.</li>
                <li>
                  Belly that stops growing or seems much smaller or larger than
                  expected.
                </li>
                <li>Very little weight gain or weight loss in the mother.</li>
                <li>Leaking fluid or a sudden gush of water.</li>
                <li>Vaginal bleeding.</li>
                <li>Severe headache, blurred vision or sudden swelling.</li>
                <li>Persistent abdominal pain.</li>
                <li>Fever or feeling very unwell.</li>
                <li>
                  Anxiety that something is wrong, which is reason enough to get
                  checked.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Never wait for the next visit if movements decrease.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kick Counts: A Simple Home Check
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Start around 28 weeks, or earlier if your doctor advises.
                </li>
                <li>
                  Choose a quiet time, ideally after a meal when the baby is
                  usually active.
                </li>
                <li>
                  Lie on your left side and count each distinct movement.
                </li>
                <li>
                  Note the time it takes to feel about 10 movements. Many
                  doctors use 2 hours as a guide.
                </li>
                <li>
                  Do it daily, so you learn your baby&apos;s normal pattern.
                </li>
                <li>
                  Call your doctor immediately if movements reduce, change or
                  stop.
                </li>
                <li>
                  Do not rely on a home Doppler for reassurance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Support Healthy Baby Growth in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Attend all antenatal visits and scans.</li>
                <li>
                  Eat a balanced diet: protein, iron, calcium, folate, healthy
                  fats and plenty of fruits and vegetables.
                </li>
                <li>
                  Take prescribed supplements such as iron, calcium and folic
                  acid regularly.
                </li>
                <li>Treat anaemia early.</li>
                <li>Control BP and blood sugar with medical advice.</li>
                <li>
                  Gain weight appropriately, neither too little nor too much.
                </li>
                <li>
                  Avoid tobacco, smoke exposure, alcohol and unprescribed
                  medicines.
                </li>
                <li>Stay hydrated and rest well.</li>
                <li>Sleep on your left side in late pregnancy.</li>
                <li>Manage stress with support and relaxation.</li>
                <li>Avoid infections through hygiene and safe food.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Tips for Baby&apos;s Growth
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to include:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Protein:</strong> dal, chana, rajma, paneer, milk,
                  curd, eggs, fish or chicken as you eat them.
                </li>
                <li>
                  <strong>Iron-rich foods:</strong> palak, methi, beetroot,
                  dates, pomegranate and sprouts.
                </li>
                <li>
                  <strong>Calcium sources:</strong> milk, curd, ragi, sesame and
                  almonds.
                </li>
                <li>
                  <strong>Healthy fats:</strong> nuts, seeds and a little ghee
                  or good oil.
                </li>
                <li>
                  <strong>Whole grains:</strong> roti, dalia, oats and millets.
                </li>
                <li>
                  <strong>Fresh fruits and vegetables:</strong> seasonal and
                  colourful.
                </li>
                <li>
                  <strong>Plenty of fluids:</strong> water, coconut water and
                  buttermilk.
                </li>
                <li>
                  <strong>Small, frequent meals:</strong> especially with nausea
                  or a small appetite.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Avoid or limit:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Raw or undercooked meat and eggs.</li>
                <li>Unpasteurised dairy.</li>
                <li>Excess caffeine, sugary drinks and junk food.</li>
                <li>Alcohol and tobacco, which must be avoided completely.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Growth Monitoring After Birth: Newborns and Infants
              </h2>

              <p className="mb-4 text-gray-700">
                Baby growth checks continue after delivery. The clinic&apos;s
                paediatric care supports newborn consultations and vaccinations.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Newborn Weight
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Babies can lose up to about 7 to 10% of their birth weight in
                  the first few days.
                </li>
                <li>
                  Most regain birth weight by about 10 to 14 days.
                </li>
                <li>
                  Weight, length and head circumference are recorded at birth
                  and at follow-up visits.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Typical Infant Growth Milestones
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Weight:</strong> often doubles by around 5 to 6 months
                  and triples by about 1 year.
                </li>
                <li>
                  <strong>Length:</strong> grows rapidly in the first year.
                </li>
                <li>
                  <strong>Head circumference:</strong> tracks brain growth.
                </li>
                <li>
                  <strong>Growth charts:</strong> WHO charts are commonly used
                  to plot progress.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Signs of Healthy Growth
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular feeding and good weight gain.</li>
                <li>Adequate wet nappies each day.</li>
                <li>Alert, active periods and normal sleep.</li>
                <li>
                  Meeting developmental milestones, such as smiling, holding the
                  head up and rolling.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Signs to Discuss With the Paediatrician
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Poor weight gain or weight loss.</li>
                <li>Feeding difficulty or refusal.</li>
                <li>Excessive sleepiness or very few wet nappies.</li>
                <li>Persistent vomiting or diarrhoea.</li>
                <li>Delayed milestones.</li>
                <li>Frequent infections.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Supporting Newborn Growth
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Exclusive breastfeeding for the first 6 months, unless advised
                  otherwise.
                </li>
                <li>Correct latch and feeding on demand.</li>
                <li>Timely vaccinations.</li>
                <li>
                  Introduce complementary foods at about 6 months, as your
                  paediatrician advises.
                </li>
                <li>Regular check-ups and growth tracking.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Baby Growth in High-Risk Pregnancies
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>High BP or pre-eclampsia:</strong> frequent growth
                  scans and Doppler studies.
                </li>
                <li>
                  <strong>Gestational diabetes:</strong> monitoring for large
                  baby and fluid changes.
                </li>
                <li>
                  <strong>Anaemia:</strong> attention to nutrition and baby
                  growth.
                </li>
                <li>
                  <strong>Twin pregnancy:</strong> growth of each baby is
                  tracked, with attention to differences between them.
                </li>
                <li>
                  <strong>Previous stillbirth or growth restriction:</strong>{" "}
                  earlier and more frequent monitoring.
                </li>
                <li>
                  <strong>IVF pregnancy:</strong> early scans and careful
                  follow-up.
                </li>
                <li>
                  <strong>Post-dates pregnancy:</strong> monitoring of fluid and
                  baby well-being.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Side of Growth Scans
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Anxiety before a scan is normal, especially after a previous
                  loss.
                </li>
                <li>
                  Ask your doctor to explain the measurements in simple words.
                </li>
                <li>
                  Avoid comparing your scan numbers with others, since every
                  baby is different.
                </li>
                <li>Bring a family member for support.</li>
                <li>Talk about your worries, because emotional health matters too.</li>
                <li>
                  Remember: a smaller or larger measurement does not
                  automatically mean a problem. Your doctor looks at the whole
                  picture.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths and Facts About Baby Growth
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Eating more means the baby will grow
                  bigger and healthier. <strong>Fact:</strong> Balanced nutrition
                  matters, and overeating mainly increases the mother&apos;s
                  weight and diabetes risk.
                </li>
                <li>
                  <strong>Myth:</strong> A small belly always means a small
                  baby. <strong>Fact:</strong> Belly size depends on your body
                  build, the baby&apos;s position and fluid. Only a scan can
                  assess growth.
                </li>
                <li>
                  <strong>Myth:</strong> Scans harm the baby. <strong>Fact:</strong>{" "}
                  Ultrasound is considered safe when performed by a trained
                  doctor for medical reasons.
                </li>
                <li>
                  <strong>Myth:</strong> A smaller baby will have an easier
                  delivery. <strong>Fact:</strong> Very small babies may have
                  other risks, and delivery depends on many factors.
                </li>
                <li>
                  <strong>Myth:</strong> Scan weight is always exact.{" "}
                  <strong>Fact:</strong> Estimated weight can differ from the
                  actual birth weight, so the trend and clinical picture matter.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Please also note that in India, sex determination before birth is
                illegal under the PCPNDT Act, and doctors cannot share it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Baby Growth Check
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A review of your pregnancy history, dates and any risk factors.
                </li>
                <li>Fundal height measurement and general examination.</li>
                <li>A growth ultrasound, with Doppler if required.</li>
                <li>Blood pressure, weight and urine checks.</li>
                <li>
                  A clear explanation of your baby&apos;s measurements and
                  percentile.
                </li>
                <li>Diet, supplement and activity advice.</li>
                <li>A follow-up schedule and delivery planning if needed.</li>
                <li>Time for all your questions.</li>
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
