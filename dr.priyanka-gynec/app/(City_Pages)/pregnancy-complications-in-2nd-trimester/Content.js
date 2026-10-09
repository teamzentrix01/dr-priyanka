import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PregnancyComplications2ndTrimester() {
  const faqs = [
    {
      q: "What is the second trimester of pregnancy?",
      a: "It runs from week 13 to week 27 of pregnancy.",
    },
    {
      q: "What are the most common complications in the 2nd trimester?",
      a: "Gestational diabetes, preeclampsia, short cervix, preterm labour, anaemia, infections and placenta problems.",
    },
    {
      q: "Is bleeding in the second trimester normal?",
      a: "No. Any bleeding needs prompt medical evaluation.",
    },
    {
      q: "When is the anomaly scan done?",
      a: "Usually between 18 and 20 weeks.",
    },
    {
      q: "When is gestational diabetes tested?",
      a: "Commonly between 24 and 28 weeks, or earlier in high-risk women.",
    },
    {
      q: "What is a short cervix?",
      a: "A cervix that is shorter than expected and may open early. It can be treated with progesterone or a stitch.",
    },
    {
      q: "Which symptoms need urgent attention?",
      a: "Bleeding, fluid leakage, severe pain, regular contractions, severe headache, blurred vision and reduced movements.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Complications in the 2nd Trimester: Warning Signs, Tests, Treatment & Expert Care
              </h1>

              <p className="mb-4 text-gray-700">
                The second trimester, from week 13 to week 27, is often called
                the &quot;golden period&quot; of pregnancy. Morning sickness
                usually eases, energy returns and you begin to feel your baby
                move. But this stage is not free of risk. Several serious
                complications can begin or show up now, often without obvious
                symptoms.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains the most common second-trimester
                complications, the warning signs, the tests that detect them
                early, and how specialist antenatal care in Moradabad can
                protect you and your baby.
              </p>
            </div>

            {/* Section 2 — Why Second Trimester Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Second Trimester Matters
              </h2>

              <p className="mb-4 text-gray-700">
                This is a critical window for monitoring.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The baby&apos;s organs are fully formed and now grow rapidly.</li>
                <li>The placenta is fully functioning and can show early stress.</li>
                <li>The uterus expands quickly, and the cervix is under increasing pressure.</li>
                <li>Key screening tests such as the anomaly scan and glucose test are done now.</li>
                <li>Problems found early can often be treated before they turn serious.</li>
              </ul>
            </div>

            {/* Section 3 — Normal vs Not Normal */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Normal vs. Not Normal?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Usually Normal in the Second Trimester
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild stretching or pulling pain on the sides of the lower belly (round ligament pain)</li>
                <li>Slight increase in clear or white discharge</li>
                <li>Mild swelling of feet in the evening</li>
                <li>Backache and leg cramps</li>
                <li>Gentle fluttering movements from 18–20 weeks</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Not Normal and Needs Medical Attention
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding or spotting of any amount</li>
                <li>Watery leakage from the vagina</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Regular tightening before 37 weeks</li>
                <li>Severe headache or blurred vision</li>
                <li>Sudden facial or hand swelling</li>
                <li>Painful urination with fever</li>
                <li>Reduced or absent baby movements after they have been established</li>
              </ul>
            </div>

            {/* Section 4 — Common Complications */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Second-Trimester Complications
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Second-Trimester Miscarriage (Late Miscarriage)
              </h3>

              <p className="mb-2 text-gray-700">
                A pregnancy loss between 13 and 24 weeks is less common than
                first-trimester loss but can be emotionally and physically
                difficult.
              </p>

              <p className="mb-2 text-gray-700">Possible causes:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weak cervix (cervical insufficiency)</li>
                <li>Uterine abnormalities such as septum or fibroids</li>
                <li>Infections</li>
                <li>Chromosomal or structural problems in the baby</li>
                <li>Uncontrolled diabetes, thyroid or blood pressure problems</li>
                <li>Blood clotting disorders</li>
              </ul>

              <p className="mb-2 text-gray-700">Warning signs:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal bleeding or watery discharge</li>
                <li>Pelvic pressure or a feeling of &quot;something coming down&quot;</li>
                <li>Painless dilation of the cervix</li>
                <li>Cramping or back pain</li>
              </ul>

              <p className="mb-4 text-gray-700">
                What to do: contact your doctor immediately. Do not wait for the
                pain to increase.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Cervical Insufficiency and Short Cervix
              </h3>

              <p className="mb-2 text-gray-700">
                The cervix should stay firm and closed until near term. In
                cervical insufficiency it opens too early, usually without pain.
              </p>

              <p className="mb-2 text-gray-700">Risk factors:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A previous second-trimester loss</li>
                <li>Previous cervical surgery or trauma</li>
                <li>Uterine anomalies</li>
                <li>Twin pregnancy</li>
              </ul>

              <p className="mb-2 text-gray-700">Detection:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cervical length scan at 18–24 weeks</li>
                <li>History of repeated painless late losses</li>
              </ul>

              <p className="mb-2 text-gray-700">Treatment options:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal progesterone</li>
                <li>Cervical stitch (cerclage), when indicated</li>
                <li>Activity modification and close follow-up</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Why it matters: a timely stitch or progesterone can make a big
                difference in carrying the pregnancy to term.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Preterm Labour and Preterm Birth
              </h3>

              <p className="mb-2 text-gray-700">
                Labour starting before 37 weeks may begin in the late second
                trimester.
              </p>

              <p className="mb-2 text-gray-700">Signs:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular tightening every 10 minutes or less</li>
                <li>Menstrual-like cramps</li>
                <li>Low backache that comes and goes</li>
                <li>Increased pelvic pressure</li>
                <li>Fluid leakage or bloody show</li>
              </ul>

              <p className="mb-4 text-gray-700">Management:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hospital observation</li>
                <li>Medicines to slow contractions</li>
                <li>Steroid injections to mature the baby&apos;s lungs</li>
                <li>Treating infection if present</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Gestational Diabetes Mellitus (GDM)
              </h3>

              <p className="mb-2 text-gray-700">
                High blood sugar often develops around 24–28 weeks, when
                pregnancy hormones increase insulin resistance.
              </p>

              <p className="mb-2 text-gray-700">
                Symptoms: many women have none. Some notice excessive thirst,
                frequent urination, fatigue or repeated infections.
              </p>

              <p className="mb-2 text-gray-700">
                Screening: oral glucose tolerance test (OGTT), commonly between
                24 and 28 weeks. Women at high risk may be tested earlier.
              </p>

              <p className="mb-2 text-gray-700">Risks if untreated:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Very large baby</li>
                <li>Difficult delivery</li>
                <li>Low sugar in the newborn</li>
                <li>Excess amniotic fluid</li>
                <li>Higher chance of type 2 diabetes later</li>
              </ul>

              <p className="mb-4 text-gray-700">Management:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Balanced diet with controlled carbohydrates</li>
                <li>Daily walking after meals</li>
                <li>Home blood sugar monitoring</li>
                <li>Insulin or medicines if required</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Preeclampsia and Gestational Hypertension
              </h3>

              <p className="mb-2 text-gray-700">
                Preeclampsia can begin from 20 weeks onwards. It involves high
                blood pressure and may affect the kidneys, liver and placenta.
              </p>

              <p className="mb-2 text-gray-700">Warning signs:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Persistent headache</li>
                <li>Blurred vision or flashing lights</li>
                <li>Sudden swelling of face and hands</li>
                <li>Pain in the upper right abdomen</li>
                <li>Rapid weight gain</li>
                <li>Reduced urine output</li>
              </ul>

              <p className="mb-2 text-gray-700">Higher risk if:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>First pregnancy</li>
                <li>Twin pregnancy</li>
                <li>Previous preeclampsia</li>
                <li>Chronic hypertension, diabetes or kidney disease</li>
                <li>Obesity</li>
              </ul>

              <p className="mb-4 text-gray-700">Monitoring and treatment:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood pressure check at every visit</li>
                <li>Urine protein test</li>
                <li>Blood tests for liver and kidney function</li>
                <li>Growth and Doppler scans</li>
                <li>BP medicines safe in pregnancy</li>
                <li>Carefully timed delivery when needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Placenta Previa and Low-Lying Placenta
              </h3>

              <p className="mb-2 text-gray-700">
                Placenta previa: the placenta partly or fully covers the cervix.
              </p>

              <p className="mb-2 text-gray-700">
                Low-lying placenta: the placenta sits near, but does not cover,
                the cervix. Many cases correct themselves as the uterus grows.
              </p>

              <p className="mb-2 text-gray-700">Key sign:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Painless, bright red bleeding</li>
              </ul>

              <p className="mb-4 text-gray-700">Management:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Repeat ultrasounds</li>
                <li>Avoiding intercourse and heavy lifting</li>
                <li>Hospital care if bleeding occurs</li>
                <li>Planned caesarean delivery in persistent previa</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Placental Abruption
              </h3>

              <p className="mb-2 text-gray-700">
                This is early separation of the placenta from the uterine wall.
                It is less common in the second trimester but serious.
              </p>

              <p className="mb-2 text-gray-700">Symptoms:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden abdominal pain</li>
                <li>A hard, tender uterus</li>
                <li>Vaginal bleeding, though sometimes hidden</li>
                <li>Reduced baby movements</li>
              </ul>

              <p className="mb-2 text-gray-700">Risk factors:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>High blood pressure, trauma or fall, smoking, and previous abruption</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Action: this is an emergency. Go to a hospital immediately.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Intrauterine Growth Restriction (IUGR)
              </h3>

              <p className="mb-2 text-gray-700">
                IUGR means the baby is smaller than expected for the gestational
                age.
              </p>

              <p className="mb-2 text-gray-700">Common causes:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Placental insufficiency</li>
                <li>Maternal hypertension or anaemia</li>
                <li>Infections</li>
                <li>Poor nutrition</li>
                <li>Genetic or structural problems in the baby</li>
              </ul>

              <p className="mb-2 text-gray-700">Detection:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fundal height measurement</li>
                <li>Growth scans</li>
                <li>Doppler blood-flow studies</li>
              </ul>

              <p className="mb-4 text-gray-700">Management:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Treating the cause, improving nutrition, rest, close monitoring and timely delivery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Amniotic Fluid Problems
              </h3>

              <p className="mb-2 text-gray-700">
                Oligohydramnios (too little fluid):
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>May indicate placental problems, fluid leakage or fetal kidney issues</li>
                <li>Needs scans, hydration and monitoring</li>
              </ul>

              <p className="mb-2 text-gray-700">
                Polyhydramnios (too much fluid):
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Linked with gestational diabetes and some fetal conditions</li>
                <li>May cause rapid belly growth, breathlessness and discomfort</li>
              </ul>

              <p className="mb-2 text-gray-700">
                PPROM (premature rupture of membranes):
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Leakage of fluid before 37 weeks</li>
                <li>Needs urgent hospital care and infection prevention</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Anaemia in Pregnancy
              </h3>

              <p className="mb-2 text-gray-700">
                Blood volume rises sharply in the second trimester, which can
                make existing anaemia worse.
              </p>

              <p className="mb-2 text-gray-700">
                Symptoms: tiredness, dizziness, pale skin, palpitations,
                breathlessness
              </p>

              <p className="mb-2 text-gray-700">Risks:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Preterm birth, low birth weight, heavy bleeding at delivery</li>
              </ul>

              <p className="mb-4 text-gray-700">Management:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Iron-rich foods such as leafy greens, jaggery, dates, pulses and beetroot</li>
                <li>Vitamin C to improve absorption</li>
                <li>Iron and folic acid tablets</li>
                <li>Iron injection or transfusion in severe cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Urinary Tract Infection (UTI) and Vaginal Infections
              </h3>

              <p className="mb-2 text-gray-700">
                Symptoms: burning urination, frequent urge, lower belly pain,
                fever, unusual discharge or itching
              </p>

              <p className="mb-4 text-gray-700">
                Why act early: untreated UTI can reach the kidneys and trigger
                preterm labour
              </p>

              <p className="mb-4 text-gray-700">
                Treatment: urine culture and antibiotics that are safe in
                pregnancy
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Intrahepatic Cholestasis of Pregnancy (ICP)
              </h3>

              <p className="mb-2 text-gray-700">
                A liver condition that usually appears later in pregnancy but
                can begin in the late second trimester.
              </p>

              <p className="mb-2 text-gray-700">
                Typical symptom: intense itching, especially on palms and soles,
                often worse at night, without a rash
              </p>

              <p className="mb-4 text-gray-700">
                Diagnosis: bile acid and liver function blood tests
              </p>

              <p className="mb-4 text-gray-700">
                Management: medication, regular monitoring, and sometimes
                earlier delivery
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                13. Fetal Anomalies Detected on Scan
              </h3>

              <p className="mb-2 text-gray-700">
                The 18–20 week anomaly scan checks the baby&apos;s brain,
                heart, spine, kidneys, limbs and face.
              </p>

              <p className="mb-2 text-gray-700">If an issue is detected:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Further detailed scans</li>
                <li>Fetal echocardiography when needed</li>
                <li>Genetic counselling and testing options</li>
                <li>A shared, unhurried discussion about the next steps</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Important: many findings are minor or treatable, and clear
                explanation reduces anxiety.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                14. Rh Incompatibility
              </h3>

              <p className="mb-2 text-gray-700">
                It occurs when an Rh-negative mother carries an Rh-positive
                baby.
              </p>

              <p className="mb-4 text-gray-700">
                An anti-D injection is usually given around 28 weeks, and again
                after any bleeding or delivery. This protects the current baby
                and future pregnancies.
              </p>
            </div>

            {/* Section 5 — Tests and Scans */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests and Scans in the Second Trimester
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Anomaly (Level II) scan at 18–20 weeks: detailed check of the baby&apos;s structure</li>
                <li>Cervical length scan: identifies short cervix and preterm risk</li>
                <li>Glucose tolerance test (24–28 weeks): detects gestational diabetes</li>
                <li>Haemoglobin and iron studies: detect anaemia</li>
                <li>Blood pressure and urine protein: screen for preeclampsia</li>
                <li>Quadruple marker test: optional screening for chromosomal conditions</li>
                <li>Doppler studies: assess blood flow when growth or BP is a concern</li>
                <li>Urine culture: detects silent infection</li>
                <li>Thyroid profile: checks hormone balance</li>
                <li>3D/4D ultrasound: gives clearer visualisation of the baby&apos;s development</li>
              </ul>
            </div>

            {/* Section 6 — Needs Extra Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Needs Extra Care
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Women with a previous late miscarriage or preterm birth</li>
                <li>Women with a history of cervical surgery</li>
                <li>Twin or multiple pregnancy</li>
                <li>Women with diabetes, hypertension, thyroid, kidney or heart conditions</li>
                <li>Women who conceived through IVF or fertility treatment</li>
                <li>Age below 18 or above 35</li>
                <li>Women with fibroids or uterine abnormalities</li>
                <li>Women with obesity or severe anaemia</li>
                <li>Rh-negative mothers</li>
              </ul>
            </div>

            {/* Section 7 — Emergency Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Signs: Go to the Hospital Immediately
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding or passing clots</li>
                <li>Continuous fluid leakage</li>
                <li>Severe abdominal or back pain</li>
                <li>Regular painful contractions</li>
                <li>Fits, fainting or confusion</li>
                <li>Severe headache with vision changes</li>
                <li>Sudden absence of baby movements</li>
                <li>High fever with chills</li>
                <li>Pain or swelling in one leg with breathlessness</li>
              </ul>

              <p className="text-gray-700">
                Never ignore these signs or try home remedies first.
              </p>
            </div>

            {/* Section 8 — Why Choose Dr Priyanka */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec offers structured antenatal care built
                around your comfort and safety.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Structured antenatal services: timely scans, screening and follow-up through every trimester</li>
                <li>Advanced imaging: 3D/4D ultrasound for detailed monitoring of your baby</li>
                <li>High-risk pregnancy attention: personalised plans and closer monitoring when needed</li>
                <li>Surgical support: 3D laparoscopic expertise if a gynaecological condition needs treatment</li>
                <li>Normal delivery focus: gentle support that prioritises natural birth where it is safe</li>
                <li>Continuity of care: one team that knows your history from the first visit onwards</li>
                <li>Newborn care access: paediatric consultations and vaccinations</li>
                <li>Patient-first philosophy: your questions and choices come first</li>
              </ul>
            </div>

            {/* Section 9 — Tips */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Practical Tips for a Safe Second Trimester
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Attend every antenatal visit and keep all reports together.</li>
                <li>Take iron, calcium and folic acid exactly as prescribed.</li>
                <li>Eat small, frequent, balanced meals with protein, fruit and vegetables.</li>
                <li>Limit sugary drinks and refined carbohydrates.</li>
                <li>Drink 2.5–3 litres of water daily unless advised otherwise.</li>
                <li>Walk daily and do light prenatal yoga if your doctor approves.</li>
                <li>Sleep on your left side when possible.</li>
                <li>Avoid heavy lifting, long travel without breaks and tobacco or alcohol.</li>
                <li>Never take medicines or herbal products without medical advice.</li>
                <li>Start counting baby movements once you feel regular kicks.</li>
                <li>Report any unusual symptom early, without waiting for the next appointment.</li>
              </ul>
            </div>

            {/* Section 10 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Antenatal Consultation Today
              </h2>

              <p className="mb-6 text-black">
                A single timely check-up can prevent a serious complication.
                Contact Dr. Priyanka Gynaec for expert second-trimester care.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 11 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}