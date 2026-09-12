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
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function GestationalDiabetesMoradabad() {
  const faqs = [
    {
      q: "What is the best doctor for gestational diabetes in Moradabad?",
      a: "A gynaecologist or obstetrician experienced in pregnancy care can assess gestational diabetes and coordinate additional medical care when required. Dr. Priyanka Gynaec provides pregnancy and obstetric consultations in Moradabad.",
    },
    {
      q: "What is gestational diabetes?",
      a: "Gestational diabetes is diabetes that is first diagnosed during pregnancy. It occurs when blood glucose levels become elevated during pregnancy.",
    },
    {
      q: "When is gestational diabetes usually tested?",
      a: "Screening is commonly performed during the middle part of pregnancy, often between 24 and 28 weeks. Testing may be recommended earlier in women with certain risk factors.",
    },
    {
      q: "Does gestational diabetes require insulin?",
      a: "Not always. Some women can manage their blood glucose through nutrition and appropriate physical activity, while others may need medication or insulin based on their glucose levels.",
    },
    {
      q: "Can I have a normal delivery with gestational diabetes?",
      a: "Gestational diabetes does not automatically require a C-section. Vaginal delivery may be possible depending on blood glucose control, fetal growth, gestational age, and other medical factors.",
    },
    {
      q: "Can gestational diabetes affect the baby?",
      a: "Uncontrolled gestational diabetes can increase the risk of excessive fetal growth and other pregnancy or newborn complications. Appropriate monitoring and management can help reduce these risks.",
    },
    {
      q: "Does gestational diabetes go away after delivery?",
      a: "Blood glucose often returns toward normal after delivery, but women who have had gestational diabetes have an increased future risk of type 2 diabetes. Postpartum testing and long-term follow-up are therefore important.",
    },
    {
      q: "Can gestational diabetes happen again?",
      a: "Yes. A previous history of gestational diabetes increases the likelihood of developing it during a future pregnancy.",
    },
    {
      q: "What should I eat if I have gestational diabetes?",
      a: "Diet should be individualised. Your healthcare team can advise you about balanced meals, carbohydrate portions, meal timing, and suitable foods according to your pregnancy and glucose readings.",
    },
    {
      q: "Should I exercise if I have gestational diabetes?",
      a: "Appropriate physical activity may be recommended for many pregnant women, but it depends on individual health and pregnancy circumstances. Follow your doctor's advice.",
    },
    {
      q: "Is gestational diabetes the same as type 1 or type 2 diabetes?",
      a: "No. Gestational diabetes is diagnosed during pregnancy and is different from diabetes that was already present before pregnancy.",
    },
    {
      q: "Can I consult a doctor for gestational diabetes during the third trimester?",
      a: "Yes. If you have been diagnosed with gestational diabetes during the third trimester or require continued monitoring, consult your pregnancy care doctor for an appropriate management and delivery plan.",
    },
    {
      q: "Where can I consult a Gestational Diabetes Doctor In Moradabad?",
      a: "Dr. Priyanka Gynaec provides pregnancy and obstetric consultations at A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 order-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes Doctor In Moradabad
              </h1>

              <p className="text-gray-700 mb-4">
                Gestational diabetes is a form of diabetes that develops during pregnancy and causes blood glucose levels to become higher than normal. Finding a suitable Gestational Diabetes Doctor In Moradabad can help pregnant women understand their diagnosis, monitor blood sugar levels, manage pregnancy-related risks, and receive appropriate antenatal care.
              </p>

              <p className="text-gray-700 mb-4">
                Gestational diabetes does not mean that a pregnancy will necessarily have complications. However, it needs proper evaluation and regular monitoring because uncontrolled blood sugar can affect both the mother and baby.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Gynaec provides pregnancy and obstetric consultations in Moradabad, including assessment and management of pregnancy-related conditions such as gestational diabetes. The care plan is based on the mother's medical history, pregnancy stage, blood glucose readings, fetal growth, and other individual factors.
              </p>
            </div>

            {/* Section 2 — Gestational Diabetes Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes Treatment In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                If you have been diagnosed with gestational diabetes, treatment generally focuses on maintaining blood glucose within the range recommended by your healthcare team while supporting healthy pregnancy and fetal growth.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on your individual condition, management may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Blood glucose monitoring</li>
                <li>Dietary and nutrition guidance</li>
                <li>Appropriate physical activity</li>
                <li>Regular antenatal checkups</li>
                <li>Monitoring fetal growth</li>
                <li>Additional blood or urine investigations when required</li>
                <li>Medication or insulin when recommended</li>
                <li>Monitoring blood pressure and other pregnancy-related conditions</li>
                <li>Delivery planning based on maternal and fetal health</li>
                <li>Postpartum diabetes testing and follow-up</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Not every woman with gestational diabetes needs medication or insulin. Your doctor will determine the appropriate approach according to your blood sugar results and overall pregnancy.
              </p>
            </div>

            {/* Section 3 — What Is Gestational Diabetes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Gestational Diabetes?
              </h2>

              <p className="text-gray-700 mb-4">
                Gestational diabetes mellitus, commonly called GDM, is diabetes that is first diagnosed during pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                During pregnancy, hormonal changes can affect the way the body uses insulin. When the body cannot produce or use enough insulin to maintain normal blood glucose levels, blood sugar can increase.
              </p>

              <p className="text-gray-700">
                Gestational diabetes is different from diabetes that was present before pregnancy. Some women may not experience noticeable symptoms, which is one reason routine pregnancy screening is important.
              </p>
            </div>

            {/* Section 4 — Can Gestational Diabetes Be Managed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Can Gestational Diabetes Be Managed?
              </h2>

              <p className="text-gray-700 mb-4">
                Yes. Gestational diabetes can often be managed with appropriate medical care, blood glucose monitoring, nutrition guidance, physical activity when suitable, and medication when necessary.
              </p>

              <p className="text-gray-700">
                Management is individual. The goal is to reduce pregnancy-related risks while maintaining the health of both mother and baby.
              </p>
            </div>

            {/* Section 5 — Why Choose a Gestational Diabetes Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose a Gestational Diabetes Doctor In Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Gestational diabetes requires more than checking a single blood sugar reading. Pregnancy itself causes continuous changes in the mother's body, so blood glucose, maternal health, and fetal development may need to be monitored throughout pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                A pregnancy doctor can help you understand:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>What your glucose test results mean</li>
                <li>How often you should monitor blood sugar</li>
                <li>What dietary changes may be appropriate</li>
                <li>Whether medication is required</li>
                <li>What pregnancy warning signs to watch for</li>
                <li>Whether additional fetal monitoring is required</li>
                <li>How gestational diabetes may affect delivery planning</li>
                <li>What follow-up is required after delivery</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Regular communication with your pregnancy care doctor can make it easier to identify changes that require additional assessment.
              </p>
            </div>

            {/* Section 6 — When Is Gestational Diabetes Diagnosed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Is Gestational Diabetes Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                Gestational diabetes is commonly screened during the middle part of pregnancy, although the timing of testing can vary depending on medical history and risk factors.
              </p>

              <p className="text-gray-700 mb-4">
                Your doctor may recommend glucose testing based on:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Stage of pregnancy</li>
                <li>Previous gestational diabetes</li>
                <li>Family history of diabetes</li>
                <li>Pre-pregnancy health</li>
                <li>Previous pregnancy history</li>
                <li>Other medical risk factors</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If an initial screening result is abnormal, additional testing may be recommended to determine whether gestational diabetes is present.
              </p>
            </div>

            {/* Section 7 — Who Has Higher Risk */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Has a Higher Risk of Gestational Diabetes?
              </h2>

              <p className="text-gray-700 mb-4">
                Gestational diabetes can occur in women without obvious risk factors. However, certain factors can increase the likelihood of developing it.
              </p>

              <p className="text-gray-700 mb-4">
                These may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Previous gestational diabetes</li>
                <li>Family history of diabetes</li>
                <li>Overweight or obesity</li>
                <li>Polycystic ovary syndrome (PCOS)</li>
                <li>Previous baby with high birth weight</li>
                <li>Previous pregnancy complications</li>
                <li>Certain maternal medical conditions</li>
                <li>Increasing maternal age</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Having a risk factor does not mean that you will definitely develop gestational diabetes.
              </p>
            </div>

            {/* Section 8 — Symptoms of Gestational Diabetes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Symptoms of Gestational Diabetes
              </h2>

              <p className="text-gray-700 mb-4">
                Many women with gestational diabetes do not have clear symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                When symptoms occur, they may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Increased thirst</li>
                <li>Frequent urination</li>
                <li>Fatigue</li>
                <li>Blurred vision</li>
                <li>Recurrent infections</li>
              </ul>

              <p className="text-gray-700 mt-4">
                These symptoms can also occur for other reasons during pregnancy, so symptoms alone cannot diagnose gestational diabetes. The appropriate glucose testing recommended during pregnancy is important for diagnosis.
              </p>
            </div>

            {/* Section 9 — How Is Gestational Diabetes Managed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is Gestational Diabetes Managed?
              </h2>

              <p className="text-gray-700 mb-4">
                The management plan depends on your glucose readings, pregnancy stage, health history, and fetal growth.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Blood Sugar Monitoring
                  </h3>
                  <p className="text-gray-700">
                    Your doctor may recommend checking blood glucose at specific times, such as before or after meals. Keeping a record of your readings can help your healthcare team understand your glucose pattern and decide whether your current management plan needs adjustment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Nutrition Guidance
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Nutrition is an important part of gestational diabetes management. Your healthcare team may advise you about:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Balanced meals</li>
                    <li>Appropriate carbohydrate portions</li>
                    <li>Protein and fibre</li>
                    <li>Meal timing</li>
                    <li>Healthy snacks</li>
                    <li>Limiting foods and drinks that can cause unnecessary blood glucose spikes</li>
                  </ul>
                  <p className="text-gray-700">
                    There is no single diet that is appropriate for every pregnant woman with gestational diabetes. Nutrition advice should be individualised according to your health and pregnancy.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Physical Activity
                  </h3>
                  <p className="text-gray-700">
                    For many pregnant women, appropriate physical activity can form part of gestational diabetes management. Walking or other pregnancy-appropriate activity may be recommended depending on your medical condition. If you have pregnancy complications or have been advised to restrict activity, follow your doctor's instructions instead.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Medication or Insulin
                  </h3>
                  <p className="text-gray-700">
                    If blood glucose cannot be adequately controlled through lifestyle measures, your doctor may recommend medication or insulin. The decision depends on your blood glucose pattern and individual pregnancy. Do not start, stop, or change diabetes medication during pregnancy without medical advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 — How GDM Can Affect Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Gestational Diabetes Can Affect Pregnancy
              </h2>

              <p className="text-gray-700 mb-4">
                Uncontrolled gestational diabetes can increase the risk of certain pregnancy complications.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the severity and level of glucose control, these may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Excessive fetal growth</li>
                <li>Higher birth weight</li>
                <li>Pregnancy-related high blood pressure</li>
                <li>Preeclampsia</li>
                <li>Preterm birth</li>
                <li>Newborn low blood sugar after delivery</li>
                <li>Increased likelihood of Caesarean delivery in some situations</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Good monitoring and appropriate management can help reduce the risks associated with high blood glucose during pregnancy.
              </p>
            </div>

            {/* Section 11 — GDM and Baby's Growth */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes and Baby's Growth
              </h2>

              <p className="text-gray-700 mb-4">
                Blood glucose levels can influence fetal growth. When maternal blood glucose remains elevated, the baby may grow larger than expected. Your doctor may therefore monitor fetal growth during pregnancy when clinically appropriate.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the pregnancy, monitoring may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Routine antenatal assessment</li>
                <li>Ultrasound</li>
                <li>Fetal growth assessment</li>
                <li>Doppler studies when indicated</li>
                <li>Fetal heart rate monitoring when required</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The exact monitoring schedule depends on your pregnancy and medical condition.
              </p>
            </div>

            {/* Section 12 — GDM During Third Trimester */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes During the Third Trimester
              </h2>

              <p className="text-gray-700 mb-4">
                The third trimester is an important period for women with gestational diabetes because pregnancy is approaching delivery.
              </p>

              <p className="text-gray-700 mb-4">
                Your doctor may review:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Blood glucose records</li>
                <li>Blood pressure</li>
                <li>Maternal symptoms</li>
                <li>Fetal growth</li>
                <li>Fetal position</li>
                <li>Other pregnancy complications</li>
                <li>Delivery planning</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Additional monitoring may be recommended if blood glucose is difficult to control or other risk factors are present.
              </p>
            </div>

            {/* Section 13 — GDM and Delivery Planning */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes and Delivery Planning
              </h2>

              <p className="text-gray-700 mb-4">
                Having gestational diabetes does not automatically mean that you will need a Caesarean delivery.
              </p>

              <p className="text-gray-700 mb-4">
                The mode and timing of delivery depend on factors such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Blood glucose control</li>
                <li>Baby's growth</li>
                <li>Gestational age</li>
                <li>Maternal health</li>
                <li>Fetal wellbeing</li>
                <li>Blood pressure and other pregnancy complications</li>
                <li>Previous delivery history</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Some women with well-controlled gestational diabetes may be able to have a vaginal delivery, while others may require a Caesarean section for medical reasons. Your delivery plan should be discussed with your doctor as pregnancy progresses.
              </p>
            </div>

            {/* Section 14 — GDM After Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes After Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                Gestational diabetes usually improves after pregnancy because the hormonal changes responsible for insulin resistance decrease after delivery.
              </p>

              <p className="text-gray-700 mb-4">
                However, having gestational diabetes increases the mother's future risk of developing type 2 diabetes. For this reason, postpartum follow-up is important.
              </p>

              <p className="text-gray-700 mb-4">
                Your doctor may advise:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Postpartum glucose testing</li>
                <li>Diabetes screening at recommended intervals</li>
                <li>Healthy nutrition</li>
                <li>Appropriate physical activity</li>
                <li>Weight management where appropriate</li>
                <li>Future pregnancy planning</li>
                <li>Ongoing primary care or diabetes follow-up when required</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A history of gestational diabetes should also be mentioned during future pregnancies.
              </p>
            </div>

            {/* Section 15 — GDM in Future Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes In a Future Pregnancy
              </h2>

              <p className="text-gray-700 mb-4">
                Women who have had gestational diabetes previously have a higher risk of developing it again during a future pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                If you previously experienced gestational diabetes, tell your doctor when planning another pregnancy or during your next pregnancy. Earlier assessment or closer monitoring may be recommended depending on your medical history.
              </p>
            </div>

            {/* Section 16 — GDM With Previous C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes With Previous C-Section
              </h2>

              <p className="text-gray-700 mb-4">
                If you have both gestational diabetes and a history of Caesarean delivery, your doctor may review your previous pregnancy and delivery records along with your current pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                Important considerations may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Reason for the previous C-section</li>
                <li>Previous operative history</li>
                <li>Current glucose control</li>
                <li>Current fetal growth</li>
                <li>Maternal health</li>
                <li>Current pregnancy complications</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The appropriate delivery plan is made according to the individual pregnancy.
              </p>
            </div>

            {/* Section 17 — GDM With PCOS */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes With PCOS
              </h2>

              <p className="text-gray-700 mb-4">
                Women with PCOS may have an increased risk of developing gestational diabetes during pregnancy.
              </p>

              <p className="text-gray-700">
                If you have PCOS and are pregnant, tell your pregnancy care doctor about your previous diagnosis, medications, and pregnancy history. Your doctor can determine whether additional glucose screening or monitoring is appropriate.
              </p>
            </div>

            {/* Section 18 — Warning Signs During Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs During Pregnancy
              </h2>

              <p className="text-gray-700 mb-4">
                Gestational diabetes itself may not cause obvious symptoms, so regular monitoring is important.
              </p>

              <p className="text-gray-700 mb-4">
                However, pregnant women should seek medical advice promptly if they experience concerning symptoms such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Severe abdominal pain</li>
                <li>Vaginal bleeding</li>
                <li>Severe headache</li>
                <li>Changes in vision</li>
                <li>Sudden or significant swelling</li>
                <li>Difficulty breathing</li>
                <li>Persistent vomiting</li>
                <li>Reduced fetal movement</li>
                <li>Feeling faint or seriously unwell</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Reduced fetal movement, heavy bleeding, severe pain, or other emergency symptoms require urgent medical assessment.
              </p>
            </div>

            {/* Section 19 — How to Prepare for Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for a Gestational Diabetes Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                Before visiting a Gestational Diabetes Doctor In Moradabad, keep your pregnancy records organised.
              </p>

              <p className="text-gray-700 mb-4">
                Bring:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Glucose test reports</li>
                <li>Blood sugar monitoring records</li>
                <li>Previous ultrasound reports</li>
                <li>Antenatal records</li>
                <li>Previous pregnancy records</li>
                <li>Current medicines and supplements</li>
                <li>Medical history</li>
                <li>Details of previous diabetes or gestational diabetes</li>
                <li>Questions about diet, medication, delivery, or monitoring</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A complete medical history can help your doctor develop a more appropriate care plan.
              </p>
            </div>

            {/* Section 20 — Questions to Ask Your Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Your Gestational Diabetes Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                During your consultation, you can ask:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>What do my glucose test results indicate?</li>
                <li>How frequently should I check my blood sugar?</li>
                <li>What should I eat during pregnancy?</li>
                <li>Do I need a dietician?</li>
                <li>Do I need medication or insulin?</li>
                <li>How often will my baby's growth be monitored?</li>
                <li>Does gestational diabetes affect my delivery options?</li>
                <li>What symptoms require urgent medical attention?</li>
                <li>When should my blood sugar be tested after delivery?</li>
                <li>What is my risk of gestational diabetes in a future pregnancy?</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Understanding your treatment plan can help you follow your doctor's recommendations more confidently.
              </p>
            </div>

            {/* Section 21 — GDM Pregnancy Care In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes Pregnancy Care In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Gestational diabetes care is closely connected with regular antenatal care.
              </p>

              <p className="text-gray-700 mb-4">
                A complete pregnancy care plan may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Routine pregnancy checkups</li>
                <li>Blood glucose monitoring</li>
                <li>Blood pressure monitoring</li>
                <li>Maternal health assessment</li>
                <li>Fetal growth monitoring</li>
                <li>Recommended laboratory investigations</li>
                <li>Ultrasound when clinically indicated</li>
                <li>Nutrition and lifestyle guidance</li>
                <li>Management of pregnancy complications</li>
                <li>Delivery planning</li>
                <li>Postnatal follow-up</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The frequency of appointments depends on your pregnancy and whether additional monitoring is required.
              </p>
            </div>

            {/* Section 22 — Choosing the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing the Right Gestational Diabetes Doctor In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                When selecting a doctor for gestational diabetes pregnancy care, consider:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experience in Pregnancy Care
                  </h3>
                  <p className="text-gray-700">
                    Choose a doctor who regularly provides obstetric and antenatal care and can assess pregnancy-related medical conditions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Individualised Management
                  </h3>
                  <p className="text-gray-700">
                    Gestational diabetes does not affect every woman in the same way. Your care plan should be based on your blood glucose readings and pregnancy.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Clear Communication
                  </h3>
                  <p className="text-gray-700">
                    Your doctor should explain your test results, treatment options, monitoring requirements, and warning signs clearly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Appropriate Monitoring
                  </h3>
                  <p className="text-gray-700">
                    Ask how maternal health and fetal growth will be monitored throughout pregnancy.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Referral When Required
                  </h3>
                  <p className="text-gray-700">
                    Some patients may require care from an endocrinologist, physician, dietician, or other specialist. Appropriate coordination or referral is an important part of medical care when needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 23 — Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gestational Diabetes Doctor In Moradabad – Dr. Priyanka
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec provides pregnancy and obstetric consultations in Gandhi Nagar, Moradabad.
              </p>

              <p className="text-gray-700 mb-4">
                If you have recently been diagnosed with gestational diabetes or have been advised to undergo additional glucose testing during pregnancy, a consultation can help you understand your results and determine the appropriate next steps.
              </p>

              <p className="text-gray-700 mb-4">
                The focus of pregnancy care is not simply on blood sugar numbers. Maternal health, fetal growth, pregnancy stage, medical history, and other pregnancy-related factors also need to be considered.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Clinic Location and Contact Details
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, Near Old Roadways, Gandhi Nagar,
                        Moradabad, Uttar Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:9079765578" className="hover:underline">
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a href="tel:8979670705" className="hover:underline">
                          +91 8979670705 (WhatsApp)
                        </a>
                      </div>

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Link href="/contact">
                    <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                      <Phone className="inline mr-2" size={18} />
                      Contact Us
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                      Explore Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 24 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}