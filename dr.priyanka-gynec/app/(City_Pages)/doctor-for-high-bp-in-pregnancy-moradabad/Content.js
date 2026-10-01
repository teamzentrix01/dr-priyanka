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

export default function DoctorForHighBPInPregnancyMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for high BP in pregnancy in Moradabad?",
      a: "A gynaecologist experienced in high-risk antenatal care, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "What BP is considered high in pregnancy?",
      a: "A reading of 140/90 mmHg or above on two occasions is generally considered high.",
    },
    {
      q: "What is pre-eclampsia?",
      a: "High BP after 20 weeks with signs of organ effects, often protein in urine. It needs prompt care. WhatsApp: +91 89796 70705.",
    },
    {
      q: "What are the warning signs I should never ignore?",
      a: "Severe headache, blurred vision, sudden swelling, upper abdominal pain or reduced baby movements.",
    },
    {
      q: "Are BP medicines safe during pregnancy?",
      a: "Certain medicines are safe when prescribed by your doctor. Never start or stop them on your own.",
    },
    {
      q: "Can high BP be controlled with diet alone?",
      a: "Diet helps, but most women also need monitoring and sometimes medicines.",
    },
    {
      q: "Can I have a normal delivery with high BP?",
      a: "Often yes, if BP is controlled and there are no other complications. Your doctor will advise.",
    },
    {
      q: "Can BP rise after delivery?",
      a: "Yes, BP can stay high or rise in the first weeks after birth, so follow-up is important. Email: drpriyankagynec@gmail.com.",
    },
    {
      q: "Does high BP affect the baby?",
      a: "It can slow growth or cause early birth, but close monitoring greatly lowers these risks.",
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
                Doctor for High BP in Pregnancy in Moradabad: Symptoms, Risks,
                Treatment and Safe Delivery
              </h1>

              <p className="mb-4 text-gray-700">
                A sudden &quot;your BP is high&quot; during a routine antenatal
                visit can be alarming. Many women feel perfectly fine, yet the
                reading says otherwise. High blood pressure in pregnancy is
                common, serious if ignored, and very manageable with regular
                care. If you are looking for a doctor for high BP in pregnancy
                in Moradabad, this guide explains the types, symptoms, tests,
                treatment and delivery planning in simple language.
              </p>

              <p className="mb-4 text-gray-700">
                With early detection and close monitoring, most women with high
                BP have a safe pregnancy and a healthy baby.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is High Blood Pressure in Pregnancy?
              </h2>

              <p className="mb-4 text-gray-700">
                Blood pressure is the force of blood pushing against artery
                walls. In pregnancy, a reading of 140/90 mmHg or above on two
                occasions, at least four hours apart, is generally considered
                high.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Systolic (top number):</strong> pressure when the
                  heart beats.
                </li>
                <li>
                  <strong>Diastolic (bottom number):</strong> pressure when the
                  heart rests.
                </li>
                <li>
                  <strong>Normal range:</strong> usually below 120/80 mmHg.
                </li>
                <li>
                  <strong>Severe hypertension:</strong> 160/110 mmHg or higher,
                  which needs urgent care.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor may use slightly different limits depending on your
                history, so always follow their guidance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of High BP in Pregnancy
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Chronic Hypertension
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  High BP that existed before pregnancy or appears before 20
                  weeks.
                </li>
                <li>May continue after delivery.</li>
                <li>
                  Needs a medicine review before or early in pregnancy.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Gestational Hypertension
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  High BP that starts after 20 weeks in a woman who previously
                  had normal BP.
                </li>
                <li>No protein in the urine.</li>
                <li>
                  Usually settles within weeks after delivery, but needs close
                  monitoring.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Pre-eclampsia
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  High BP after 20 weeks along with signs of organ effects,
                  often protein in urine.
                </li>
                <li>
                  Can affect the kidneys, liver, brain and placenta.
                </li>
                <li>
                  A serious condition that needs prompt medical attention.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Chronic Hypertension with Superimposed Pre-eclampsia
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A woman who already has high BP develops pre-eclampsia on top
                  of it.
                </li>
                <li>Needs especially careful management.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Eclampsia
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pre-eclampsia leading to seizures (fits).
                </li>
                <li>
                  A medical emergency, which is largely preventable with timely
                  care.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. HELLP Syndrome
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A severe form involving breakdown of red cells, raised liver
                  enzymes and low platelets.
                </li>
                <li>Needs urgent hospital treatment.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is at Higher Risk?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>First pregnancy.</li>
                <li>Age below 18 or above 35.</li>
                <li>Previous pre-eclampsia or high BP in pregnancy.</li>
                <li>
                  Family history of pre-eclampsia or hypertension.
                </li>
                <li>
                  Chronic hypertension, diabetes or kidney disease.
                </li>
                <li>Obesity or high BMI.</li>
                <li>Twin or multiple pregnancy.</li>
                <li>Pregnancy through IVF.</li>
                <li>
                  Autoimmune conditions, such as lupus.
                </li>
                <li>A gap of more than 10 years between pregnancies.</li>
                <li>Thrombophilia or clotting problems.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Even women without any risk factor can develop high BP, so
                regular BP checks matter for everyone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms of High BP and Pre-eclampsia
              </h2>

              <p className="mb-4 text-gray-700">
                Many women have no symptoms, especially early on. That is why
                routine antenatal visits are so important.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible warning signs:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe or persistent headache.</li>
                <li>
                  Blurred vision, flashing lights or spots before the eyes.
                </li>
                <li>
                  Sudden swelling of the face, hands or feet.
                </li>
                <li>
                  Pain in the upper right abdomen or under the ribs.
                </li>
                <li>
                  Nausea or vomiting in the second half of pregnancy.
                </li>
                <li>Sudden weight gain in a few days.</li>
                <li>Shortness of breath.</li>
                <li>Reduced urine output.</li>
                <li>Reduced baby movements.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Seek emergency help immediately for:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Seizures or fits.</li>
                <li>Confusion or fainting.</li>
                <li>Severe chest pain or breathing difficulty.</li>
                <li>Heavy vaginal bleeding.</li>
                <li>Severe abdominal pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Is High BP Dangerous in Pregnancy?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible risks to the baby:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Slow growth (fetal growth restriction) because of reduced
                  placental blood flow.
                </li>
                <li>Low amniotic fluid.</li>
                <li>Preterm birth, often to protect mother and baby.</li>
                <li>
                  Placental abruption (early separation of the placenta).
                </li>
                <li>Stillbirth in severe, untreated cases.</li>
                <li>Low birth weight and newborn complications.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible risks to the mother:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pre-eclampsia and eclampsia (seizures).</li>
                <li>Stroke or bleeding in the brain.</li>
                <li>Kidney and liver problems.</li>
                <li>HELLP syndrome.</li>
                <li>Heavy bleeding around delivery.</li>
                <li>
                  Higher long-term risk of heart disease and hypertension.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Timely treatment reduces these risks significantly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is High BP Diagnosed and Monitored?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Blood pressure measurement:</strong> at every
                  antenatal visit, using a properly sized cuff and resting
                  posture.
                </li>
                <li>
                  <strong>Urine test:</strong> to look for protein, a key sign
                  of pre-eclampsia.
                </li>
                <li>
                  <strong>Blood tests:</strong> kidney function, liver enzymes,
                  platelet count and uric acid.
                </li>
                <li>
                  <strong>Weight and swelling checks:</strong> rapid changes are
                  noted.
                </li>
                <li>
                  <strong>Growth ultrasound:</strong> to check the baby&apos;s
                  size, fluid level and growth pattern.
                </li>
                <li>
                  <strong>Doppler scan:</strong> measures blood flow in the
                  placenta and baby&apos;s vessels.
                </li>
                <li>
                  <strong>3D/4D ultrasound:</strong> offers detailed views of
                  baby&apos;s development where available.
                </li>
                <li>
                  <strong>Non-stress test or fetal monitoring:</strong> checks
                  baby&apos;s heartbeat in selected cases.
                </li>
                <li>
                  <strong>Home BP monitoring:</strong> advised for many women,
                  with readings recorded in a diary.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment of High BP in Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the type, severity, your gestational age
                and the baby&apos;s condition.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Regular Monitoring
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits and scans.</li>
                <li>Early action when readings rise.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Safe Blood Pressure Medicines
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Certain medicines are considered safe in pregnancy and are
                  prescribed by your doctor.
                </li>
                <li>
                  Some BP medicines are not safe in pregnancy, so never continue
                  or change them on your own.
                </li>
                <li>Never stop prescribed medicine suddenly.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Low-Dose Aspirin (In Selected Women)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sometimes advised for women at high risk of pre-eclampsia.
                </li>
                <li>
                  Usually started early in the second trimester, only on your
                  doctor&apos;s advice.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Calcium and Other Supplements
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Prescribed where needed, particularly if dietary calcium is
                  low.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Hospital Care for Severe Cases
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Admission for close monitoring.</li>
                <li>
                  Injections to protect the baby&apos;s lungs if early delivery
                  may be needed.
                </li>
                <li>
                  Magnesium sulphate to prevent seizures in severe pre-eclampsia.
                </li>
                <li>
                  IV medicines to bring BP down safely.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Delivery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delivery is the definitive treatment for pre-eclampsia.
                </li>
                <li>
                  The timing is chosen to balance risks to mother and baby.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care Tips for Women with High BP
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Take medicines regularly as prescribed.</li>
                <li>
                  Check BP at home if advised, at the same time each day,
                  resting for 5 minutes first.
                </li>
                <li>
                  Keep a diary: note BP, weight, symptoms and baby movements.
                </li>
                <li>
                  Rest well: aim for 7 to 8 hours of sleep and short daytime
                  rests.
                </li>
                <li>Lie on your left side to improve blood flow.</li>
                <li>
                  Reduce stress: try breathing exercises and light prayer or
                  meditation.
                </li>
                <li>
                  Count baby kicks daily from the third trimester.
                </li>
                <li>
                  Avoid over-the-counter painkillers such as ibuprofen unless
                  your doctor allows.
                </li>
                <li>
                  Never skip antenatal visits, even if you feel fine.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for High BP in Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Food supports blood pressure control, but it does not replace
                medical treatment.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to include:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fresh fruits and vegetables:</strong> seasonal
                  produce, leafy greens and salads.
                </li>
                <li>
                  <strong>Protein:</strong> dal, sprouts, paneer, curd, eggs,
                  fish or chicken as advised.
                </li>
                <li>
                  <strong>Whole grains:</strong> roti, dalia, oats and millets.
                </li>
                <li>
                  <strong>Calcium sources:</strong> milk, curd, ragi and sesame.
                </li>
                <li>
                  <strong>Potassium-rich foods:</strong> banana, coconut water,
                  lauki and potatoes with skin, unless restricted.
                </li>
                <li>
                  <strong>Plenty of fluids:</strong> water and buttermilk,
                  unless your doctor limits fluid.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to limit:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Extra salt, pickles, papad and namkeen.</li>
                <li>Packaged chips, instant noodles and ready meals.</li>
                <li>Processed foods and heavy sauces.</li>
                <li>Excess tea, coffee and caffeinated drinks.</li>
                <li>Deep-fried and very oily food.</li>
                <li>Sugary drinks and sweets.</li>
              </ul>

              <p className="text-gray-700">
                <strong>Salt tip:</strong> do not eliminate salt completely
                unless advised. Just avoid adding extra salt and eating
                high-salt foods.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safe Physical Activity
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gentle walking for 20 to 30 minutes a day, if your doctor
                  approves.
                </li>
                <li>
                  Prenatal yoga or stretching with a trained instructor.
                </li>
                <li>
                  Rest immediately if you feel dizzy, breathless or have a
                  headache.
                </li>
                <li>Avoid heavy lifting and strenuous exercise.</li>
                <li>
                  Do not exercise if BP is very high, or if you have bleeding,
                  pain or fluid leakage.
                </li>
                <li>Always ask your doctor what is safe for you.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Baby Monitoring in High BP Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Regular growth scans:</strong> every few weeks in many
                  cases.
                </li>
                <li>
                  <strong>Fluid level checks:</strong> low fluid can signal
                  placental problems.
                </li>
                <li>
                  <strong>Doppler studies:</strong> assess how well blood flows
                  to the baby.
                </li>
                <li>
                  <strong>Daily kick counts:</strong> report any decrease in
                  movements at once.
                </li>
                <li>
                  <strong>Fetal heart monitoring:</strong> in selected or
                  hospitalised cases.
                </li>
                <li>
                  <strong>Steroid injections:</strong> for baby&apos;s lung
                  maturity if delivery before 34 to 37 weeks is expected.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Planning with High BP
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Timing:</strong> mild gestational hypertension may
                  allow delivery around 37 weeks, while severe pre-eclampsia may
                  need earlier delivery. Your doctor decides.
                </li>
                <li>
                  <strong>Normal delivery:</strong> often possible if BP is
                  controlled and there are no other complications.
                </li>
                <li>
                  <strong>Induction of labour:</strong> commonly used to start
                  labour safely at the right time.
                </li>
                <li>
                  <strong>Caesarean section:</strong> may be advised for severe
                  disease, fetal distress or other obstetric reasons.
                </li>
                <li>
                  <strong>During labour:</strong> BP, baby&apos;s heartbeat and
                  symptoms are watched closely.
                </li>
                <li>
                  <strong>Seizure prevention:</strong> magnesium sulphate is
                  used when indicated.
                </li>
                <li>
                  <strong>Well-equipped centre:</strong> delivering where blood,
                  ICU and newborn care are available adds safety.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Delivery: Postpartum Care
              </h2>

              <p className="mb-4 text-gray-700">
                High BP does not always end at delivery.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  BP can stay high or even rise in the first week after birth.
                </li>
                <li>
                  Postpartum pre-eclampsia can occur up to 6 weeks after
                  delivery.
                </li>
                <li>
                  Continue BP checks at home and at your follow-up visits.
                </li>
                <li>
                  <strong>Warning signs after birth:</strong> severe headache,
                  vision changes, breathlessness, swelling, chest pain or
                  seizures need emergency care.
                </li>
                <li>
                  Some medicines are safe during breastfeeding, so ask your
                  doctor.
                </li>
                <li>
                  Get regular check-ups for BP, sugar and cholesterol in the
                  following years.
                </li>
                <li>
                  Women with pre-eclampsia have a higher long-term risk of heart
                  disease, so healthy habits matter.
                </li>
                <li>
                  Plan the next pregnancy with a pre-conception check-up.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning a Pregnancy if You Already Have High BP
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Visit your gynaecologist before you conceive.</li>
                <li>
                  Review your BP medicines, since some are unsafe in pregnancy.
                </li>
                <li>
                  Aim for good BP control, a healthy weight and balanced
                  nutrition.
                </li>
                <li>Get kidney, sugar and thyroid checks.</li>
                <li>Start folic acid as advised.</li>
                <li>Ask about low-dose aspirin and calcium for prevention.</li>
                <li>Arrange early antenatal care once you are pregnant.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths and Facts About High BP in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> If I feel fine, my BP must be normal.{" "}
                  <strong>Fact:</strong> High BP often causes no symptoms, so
                  regular checks are essential.
                </li>
                <li>
                  <strong>Myth:</strong> BP medicines will harm my baby.{" "}
                  <strong>Fact:</strong> Certain medicines are safe and protect
                  both mother and baby. Untreated high BP is far riskier.
                </li>
                <li>
                  <strong>Myth:</strong> Eating no salt will cure pre-eclampsia.{" "}
                  <strong>Fact:</strong> Diet helps, but pre-eclampsia needs
                  medical monitoring and treatment.
                </li>
                <li>
                  <strong>Myth:</strong> Pre-eclampsia only affects first-time
                  mothers. <strong>Fact:</strong> It can occur in any pregnancy.
                </li>
                <li>
                  <strong>Myth:</strong> Once the baby is born, the danger is
                  over. <strong>Fact:</strong> BP problems can continue or
                  appear after delivery, so follow-up is vital.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is known in Moradabad for antenatal and
                postnatal care, high-risk pregnancy management and patient-first
                communication. Based on the clinic&apos;s listed services, you
                can expect:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>High-risk pregnancy expertise:</strong> careful
                  management of hypertension, diabetes and other conditions.
                </li>
                <li>
                  <strong>3D and 4D ultrasound:</strong> detailed monitoring of
                  baby&apos;s growth and well-being.
                </li>
                <li>
                  <strong>Structured antenatal care:</strong> regular check-ups
                  and BP monitoring through every trimester.
                </li>
                <li>
                  <strong>Personalised guidance:</strong> diet, activity and
                  medicine advice suited to you.
                </li>
                <li>
                  <strong>Normal delivery focus:</strong> gentle care that
                  supports natural birth wherever safe.
                </li>
                <li>
                  <strong>Continuity:</strong> the same team from pregnancy
                  through delivery and postnatal follow-up.
                </li>
                <li>
                  <strong>Newborn support:</strong> paediatric consultations and
                  vaccinations at the same centre.
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
                  A review of your medical history, previous pregnancies and
                  family history.
                </li>
                <li>
                  Accurate blood pressure measurement and urine testing.
                </li>
                <li>
                  Blood tests and an ultrasound to check the baby.
                </li>
                <li>
                  A clear diagnosis and explanation of your risk level.
                </li>
                <li>
                  A treatment and monitoring plan, with safe medicines if needed.
                </li>
                <li>
                  Guidance on home BP monitoring and warning signs.
                </li>
                <li>
                  Delivery planning discussed early, so there are no surprises.
                </li>
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
