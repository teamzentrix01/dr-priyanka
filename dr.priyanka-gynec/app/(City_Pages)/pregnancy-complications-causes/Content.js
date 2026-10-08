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

export default function PregnancyComplicationsCauses() {
  const faqs = [
    {
      q: "What are the main causes of pregnancy complications?",
      a: "Health conditions, age, genetics, placenta and baby factors, infections, lifestyle and limited access to care.",
    },
    {
      q: "Are pregnancy complications my fault?",
      a: "Usually not. Many causes are beyond a woman's control.",
    },
    {
      q: "Does stress cause miscarriage?",
      a: "Everyday stress is not a usual cause. Most miscarriages result from chromosome problems.",
    },
    {
      q: "What causes gestational diabetes?",
      a: "Pregnancy hormones reduce insulin response, more often with obesity, PCOS or family history.",
    },
    {
      q: "What causes pre-eclampsia?",
      a: "It is linked to placenta development and blood supply, though the exact cause is not fully known.",
    },
    {
      q: "Can age cause complications?",
      a: "Yes. Pregnancy above 35 or below 18 carries a higher risk of certain complications.",
    },
    {
      q: "Can infections cause complications?",
      a: "Yes. Untreated urinary and genital infections can lead to preterm labor and other issues.",
    },
    {
      q: "Can complications be prevented?",
      a: "Many can be reduced or caught early with preconception care, healthy habits and regular check-ups.",
    },
    {
      q: "Does a previous complication mean it will happen again?",
      a: "Not always, but the risk can be higher, so closer monitoring is advised.",
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
                Pregnancy Complications Causes: Why They Happen and What You Can Do
              </h1>

              <p className="mb-4 text-gray-700">
                When a complication appears in pregnancy, the first question
                most women ask is: &quot;Why is this happening to me?&quot; Many
                also ask a harder one: &quot;Did I do something wrong?&quot;
              </p>

              <p className="mb-4 text-gray-700">
                The honest answer is that in most cases, you did nothing wrong.
                Pregnancy complications have many causes, and a large number are
                beyond a woman&apos;s control. Understanding these causes helps
                you let go of guilt, focus on what you can influence and seek
                the right care early.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The main groups of causes</li>
                <li>Maternal health conditions</li>
                <li>Age, lifestyle and nutrition</li>
                <li>Causes linked to the placenta, womb and baby</li>
                <li>Infections and genetic factors</li>
                <li>Causes behind specific complications</li>
                <li>What you can and cannot control</li>
                <li>How to lower your risk</li>
              </ul>

              <p className="text-gray-700">
                Important: This article is for education only. It cannot tell
                you why a specific problem occurred in your pregnancy. Only your
                doctor can assess that after examining you.
              </p>
            </div>

            {/* Section 2 — Why Complications Happen */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Do Pregnancy Complications Happen?
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy is a complex process. Your body must support a growing
                baby, a new organ (the placenta), major hormone changes and
                increased demands on the heart, kidneys and blood.
              </p>

              <p className="mb-4 text-gray-700">
                Complications arise when:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>An existing health condition is stressed by pregnancy</li>
                <li>A new condition develops because of pregnancy-related changes</li>
                <li>The placenta, womb or baby has a problem</li>
                <li>An infection or other illness occurs</li>
                <li>Genetic or chromosome issues are present</li>
                <li>Several factors combine</li>
              </ul>

              <p className="text-gray-700">
                Key point: Often there is no single cause. A mix of factors,
                many of them invisible, can play a role.
              </p>
            </div>

            {/* Section 3 — Not Your Fault */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                You Are Not to Blame: A Reassuring Note
              </h2>

              <p className="mb-4 text-gray-700">
                Many women carry guilt after a complication or loss. Please
                remember:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Most miscarriages are caused by chromosome problems in the embryo, not by anything the mother did.</li>
                <li>Normal activities, such as light exercise, work, travel within safe limits or a stressful day, do not usually cause serious complications.</li>
                <li>Many healthy women who do everything right still face complications.</li>
                <li>Seeking care and following your doctor&apos;s advice is what matters now.</li>
              </ul>
            </div>

            {/* Section 4 — Main Groups */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Main Groups of Causes
              </h2>

              <p className="mb-4 text-gray-700">
                Causes are usually grouped into these categories:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maternal health conditions (the mother&apos;s own health)</li>
                <li>Age and reproductive history</li>
                <li>Lifestyle and nutrition</li>
                <li>Placenta and womb factors</li>
                <li>Baby-related factors</li>
                <li>Infections</li>
                <li>Genetic and chromosome factors</li>
                <li>Pregnancy type (twins, assisted conception)</li>
                <li>Environmental and medical factors</li>
                <li>Access to timely care</li>
              </ul>
            </div>

            {/* Section 5 — Maternal Health */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                1. Maternal Health Conditions
              </h2>

              <p className="mb-4 text-gray-700">
                Health problems present before or during pregnancy are among the
                most common causes.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Diabetes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pre-existing diabetes can affect the baby&apos;s development and growth</li>
                <li>High blood sugar raises the risk of miscarriage, large babies, birth injury and newborn problems</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                High Blood Pressure (Chronic Hypertension)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reduces blood flow to the placenta</li>
                <li>Raises the risk of pre-eclampsia, poor baby growth, preterm birth and placental abruption</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Thyroid Disorders
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Underactive or overactive thyroid can affect the baby&apos;s development and increase miscarriage and preterm birth risk</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Anemia
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Low hemoglobin reduces oxygen supply</li>
                <li>Can cause fatigue, preterm birth, low birth weight and greater risk with bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kidney Disease
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Can worsen blood pressure and affect pregnancy outcomes</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Heart Disease
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy increases the heart&apos;s workload, which can strain a weak heart</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Autoimmune Conditions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Conditions such as lupus or antiphospholipid syndrome can affect the placenta and raise clotting and miscarriage risks</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                PCOS
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Associated with higher risk of gestational diabetes, high blood pressure and miscarriage</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Obesity or Underweight
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Obesity is linked to gestational diabetes, pre-eclampsia, C-section and other issues</li>
                <li>Being significantly underweight is linked to preterm birth and low birth weight</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Epilepsy and Other Chronic Conditions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>May need medicine adjustments and closer monitoring</li>
              </ul>
            </div>

            {/* Section 6 — Age and History */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                2. Age and Reproductive History
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Age Above 35
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Higher chance of chromosome problems, miscarriage, gestational diabetes, high blood pressure and C-section</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Very Young Age (Under 18)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Higher risk of preterm birth, anemia, pre-eclampsia and low birth weight, partly because the body is still developing and care access may be limited</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Previous Pregnancy Problems
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous miscarriage, stillbirth, preterm birth, pre-eclampsia or growth restriction raises the chance of recurrence in some cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Previous C-Section or Uterine Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Scar-related issues, such as scar weakness or placenta problems, may arise</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Short Gap Between Pregnancies
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Less time for the body to recover can raise the chance of preterm birth, anemia and low birth weight</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Multiple Previous Pregnancies
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Can be associated with certain placenta and bleeding risks</li>
              </ul>
            </div>

            {/* Section 7 — Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                3. Lifestyle and Nutrition Causes
              </h2>

              <p className="mb-4 text-gray-700">
                These are factors a woman can often influence, though not all
                are fully in her control.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Poor Nutrition
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Deficiency of iron, folic acid, calcium, vitamin D or protein can contribute to anemia, birth defects and poor growth</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lack of Folic Acid
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Low folic acid before and in early pregnancy is linked to neural tube defects in the baby</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Smoking and Tobacco
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reduces oxygen to the baby</li>
                <li>Linked to miscarriage, placental problems, preterm birth and low birth weight</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Alcohol and Substance Use
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Can harm the baby&apos;s development and raise the risk of miscarriage and birth defects</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Excess Caffeine
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Very high intake is linked to higher miscarriage and low birth weight risks</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Unsafe Medicines and Herbal Remedies
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Some medicines and unregulated remedies can harm the baby</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Heavy Physical Strain
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Extreme physical work or injury may contribute in some cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Passive Smoke Exposure
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Exposure to others&apos; smoke can also affect the baby</li>
              </ul>
            </div>

            {/* Section 8 — Placenta and Womb */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                4. Placenta and Womb-Related Causes
              </h2>

              <p className="mb-4 text-gray-700">
                The placenta is the baby&apos;s lifeline, so problems here can
                cause serious complications.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Placenta Previa
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The placenta attaches low, covering the cervix</li>
                <li>Can cause painless bleeding in later pregnancy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Placental Abruption
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The placenta separates from the womb wall early</li>
                <li>Linked to high blood pressure, trauma, smoking and previous abruption</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Poor Placental Function
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reduced blood flow can limit the baby&apos;s oxygen and nutrients, causing poor growth</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Abnormal Placental Attachment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The placenta grows too deeply into the womb wall, more likely after previous surgery or C-sections</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Abnormalities
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Shape differences, such as a septum, or large fibroids can contribute to miscarriage, preterm birth or abnormal baby position</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Weak Cervix (Cervical Insufficiency)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The cervix opens early without pain, which can lead to second-trimester loss or preterm birth</li>
              </ul>
            </div>

            {/* Section 9 — Baby-Related */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                5. Baby-Related Causes
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Chromosome Abnormalities
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A leading cause of early miscarriage</li>
                <li>Usually occur by chance, not due to anything the parents did</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Structural Birth Defects
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Problems with the baby&apos;s heart, brain, spine or other organs</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Multiple Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Twins and more raise the chance of preterm birth, growth differences, anemia and high blood pressure</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Abnormal Fluid Levels
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Too much or too little amniotic fluid can be linked to fetal, placental or maternal conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Rh Incompatibility
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>When an Rh-negative mother carries an Rh-positive baby, antibodies can form and affect later pregnancies if not managed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Abnormal Baby Position
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Breech or sideways position may lead to delivery complications</li>
              </ul>
            </div>

            {/* Section 10 — Infections */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                6. Infection-Related Causes
              </h2>

              <p className="mb-4 text-gray-700">
                Infections can affect the mother, the placenta and the baby.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Infection Types
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Urinary tract infections: can lead to kidney infection and preterm labor if untreated</li>
                <li>Vaginal and genital infections: can raise the risk of preterm birth and membrane rupture</li>
                <li>Viral infections: such as rubella, cytomegalovirus, hepatitis, HIV and others, which may affect the baby</li>
                <li>Parasitic infections: such as toxoplasmosis, linked to raw meat or cat litter exposure</li>
                <li>Malaria and other regional infections: can be serious in pregnancy</li>
                <li>Dental and gum infections: linked in some studies to preterm birth</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Prevention
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early screening and treatment</li>
                <li>Vaccinations as advised</li>
                <li>Good hygiene and safe food practices</li>
              </ul>
            </div>

            {/* Section 11 — Genetic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                7. Genetic and Family Factors
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Family history of diabetes, high blood pressure, twins or genetic conditions can raise risk</li>
                <li>Inherited conditions such as thalassemia, sickle cell disease or clotting disorders may need special care</li>
                <li>Genetic screening and counselling can help families who are at higher risk</li>
              </ul>
            </div>

            {/* Section 12 — Pregnancy Type */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                8. Pregnancy Type and Conception Method
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy after fertility treatment is sometimes linked to higher rates of multiple pregnancy, preterm birth and other complications, partly because of underlying fertility factors and multiples</li>
                <li>Twins and higher multiples need closer monitoring</li>
                <li>Closely spaced pregnancies may need extra support</li>
              </ul>
            </div>

            {/* Section 13 — Environmental */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                9. Environmental and Medical Factors
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Exposure to harmful chemicals such as certain pesticides, lead or industrial toxins</li>
                <li>Radiation exposure at high levels</li>
                <li>Air pollution has been linked to preterm birth and low birth weight</li>
                <li>Abdominal injury or trauma can lead to bleeding or placental problems</li>
                <li>Certain medicines taken before knowing about the pregnancy</li>
                <li>Extreme heat or dehydration in some situations</li>
              </ul>
            </div>

            {/* Section 14 — Access to Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                10. Access to Care and Social Factors
              </h2>

              <p className="mb-4 text-gray-700">
                These are often overlooked but very important.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Late or no antenatal care: missed chances to detect high blood pressure, anemia or diabetes</li>
                <li>Distance from a hospital: delays in emergencies</li>
                <li>Financial constraints: missed scans, medicines or visits</li>
                <li>Limited health awareness: ignoring warning signs</li>
                <li>Domestic stress or violence: linked to poorer pregnancy outcomes</li>
                <li>Unsafe work conditions</li>
              </ul>

              <p className="text-gray-700">
                Good news: This is where early, regular, trusted care makes the
                biggest difference.
              </p>
            </div>

            {/* Section 15 — Specific Complications */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes Behind Specific Complications
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Anemia in Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Iron, folic acid or vitamin B12 deficiency</li>
                <li>Heavy periods before pregnancy</li>
                <li>Closely spaced pregnancies</li>
                <li>Infections such as malaria</li>
                <li>Inherited blood conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Gestational Diabetes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy hormones make the body less responsive to insulin</li>
                <li>More likely with obesity, PCOS, age above 35, family history of diabetes or a previous large baby</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pre-Eclampsia
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Exact cause is not fully known; it is linked to how the placenta develops and its blood supply</li>
                <li>More likely with first pregnancy, chronic high blood pressure, diabetes, kidney disease, twins, age extremes or a previous pre-eclampsia</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Miscarriage
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Chromosome abnormalities in the embryo (most common)</li>
                <li>Uterine abnormalities or weak cervix</li>
                <li>Hormonal problems, such as thyroid disease or uncontrolled diabetes</li>
                <li>Infections</li>
                <li>Clotting or autoimmune disorders</li>
                <li>Lifestyle factors such as smoking or heavy alcohol use</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ectopic Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Damage or blockage in the fallopian tubes</li>
                <li>Previous pelvic infection, endometriosis or tubal surgery</li>
                <li>Previous ectopic pregnancy</li>
                <li>Sometimes no clear cause</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Preterm Labor and Birth
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infections of the urinary or genital tract</li>
                <li>Weak cervix</li>
                <li>Multiple pregnancy</li>
                <li>Placental problems</li>
                <li>High blood pressure or diabetes</li>
                <li>Previous preterm birth</li>
                <li>Smoking or substance use</li>
                <li>Sometimes no cause is found</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Premature Rupture of Membranes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection</li>
                <li>Overstretched womb (twins or excess fluid)</li>
                <li>Previous preterm rupture</li>
                <li>Smoking</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Fetal Growth Restriction
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Poor placental function</li>
                <li>Maternal high blood pressure, anemia, infections or malnutrition</li>
                <li>Smoking and substance use</li>
                <li>Genetic or structural problems in the baby</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Placenta Previa and Abruption
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous C-section or uterine surgery</li>
                <li>Multiple pregnancy and older maternal age</li>
                <li>High blood pressure, smoking and trauma (abruption)</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hyperemesis Gravidarum
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rapid hormone changes</li>
                <li>More likely with twins, a previous history or family history</li>
              </ul>
            </div>

            {/* Section 16 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation: Dr. Priyanka Gynaec
              </h2>

              <p className="mb-6 text-black">
                Dr. Priyanka Pachauri: Best Gynaecologist in Moradabad
              </p>

              <p className="mb-6 text-black">
                Fertility • Maternity • 3D Laparoscopy
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone</p>
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
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
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
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
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

            {/* Section 17 — FAQs */}
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