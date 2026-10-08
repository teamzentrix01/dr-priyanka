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

export default function PregnancyComplicationsSymptoms() {
  const faqs = [
    {
      q: "What are the main warning signs of pregnancy complications?",
      a: "Bleeding, severe pain, fluid leakage, reduced baby movements, severe headache and sudden swelling.",
    },
    {
      q: "Is bleeding in pregnancy always dangerous?",
      a: "Not always, but any bleeding should be checked by a doctor promptly.",
    },
    {
      q: "When should I worry about abdominal pain?",
      a: "When it is severe, constant, one-sided or comes with bleeding, fever or dizziness.",
    },
    {
      q: "What does a severe headache in pregnancy mean?",
      a: "It may signal pre-eclampsia, especially with blurred vision or swelling. Call your doctor the same day.",
    },
    {
      q: "What if my baby moves less than usual?",
      a: "Contact your doctor immediately. Do not wait until the next day.",
    },
    {
      q: "How do I know if my water has broken?",
      a: "A sudden gush or steady trickle of fluid. Go to the hospital promptly.",
    },
    {
      q: "Can complications occur without symptoms?",
      a: "Yes. High blood pressure and gestational diabetes can be silent, so check-ups are essential.",
    },
    {
      q: "Is swelling during pregnancy normal?",
      a: "Mild ankle swelling is common. Sudden swelling of the face or hands is a warning sign.",
    },
    {
      q: "When should I go to the hospital immediately?",
      a: "For heavy bleeding, severe pain, seizures, chest pain, fainting or no baby movement.",
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
                Pregnancy Complications Symptoms: What Is Normal, What Is a Warning and When to Call Your Doctor
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy changes your body in many ways. Nausea, tiredness,
                backache and mood swings are common, and usually harmless. But
                some symptoms can signal a pregnancy complication that needs
                prompt attention.
              </p>

              <p className="mb-4 text-gray-700">
                The hard part is telling the difference. Many women worry too
                much about normal changes, while others ignore a real warning
                sign because &quot;it is probably nothing.&quot;
              </p>

              <p className="mb-4 text-gray-700">
                This guide helps you understand symptoms clearly, so you can
                relax when it is normal and act quickly when it is not.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal pregnancy symptoms vs warning signs</li>
                <li>A simple urgency guide</li>
                <li>Symptom-by-symptom explanations</li>
                <li>Symptoms by trimester</li>
                <li>Postnatal warning signs</li>
                <li>How to track symptoms</li>
                <li>What to tell your doctor</li>
              </ul>

              <p className="text-gray-700">
                Important: This article is for education only. It cannot
                diagnose you. If you are worried about any symptom, contact your
                doctor. In an emergency, go to the nearest hospital.
              </p>
            </div>

            {/* Section 2 — Why Knowing Symptoms Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Knowing Symptoms Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Early recognition can protect you and your baby.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of Knowing the Signs
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You can seek help before a problem becomes serious</li>
                <li>You avoid unnecessary panic over normal changes</li>
                <li>You can describe symptoms clearly to your doctor</li>
                <li>Complications such as pre-eclampsia, infection or preterm labor can be managed better when caught early</li>
                <li>Your family also learns when to act</li>
              </ul>

              <p className="text-gray-700">
                Remember: Some complications, like high blood pressure and
                gestational diabetes, can cause no symptoms at all. That is why
                regular check-ups matter even when you feel well.
              </p>
            </div>

            {/* Section 3 — Urgency Guide */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Simple Urgency Guide
              </h2>

              <p className="mb-4 text-gray-700">
                Use this quick guide to decide how fast to act.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Call Emergency Help or Go to Hospital Immediately
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy vaginal bleeding</li>
                <li>Severe, constant abdominal pain</li>
                <li>Sudden severe headache with blurred vision</li>
                <li>Fainting or collapse</li>
                <li>Chest pain or severe breathlessness</li>
                <li>Seizure or fits</li>
                <li>No baby movement after the usual pattern has stopped</li>
                <li>Water breaking, especially with green or foul-smelling fluid</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Call Your Doctor the Same Day
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Any bleeding or spotting</li>
                <li>Fluid leakage</li>
                <li>Reduced baby movements</li>
                <li>Regular contractions before 37 weeks</li>
                <li>Fever or burning urination</li>
                <li>Persistent vomiting</li>
                <li>Sudden swelling of the face and hands</li>
                <li>Pain or swelling in one leg</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Mention at Your Next Visit
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild nausea and tiredness</li>
                <li>Occasional backache</li>
                <li>Mild heartburn or constipation</li>
                <li>Mild ankle swelling in the evening</li>
                <li>Mood changes</li>
                <li>Questions about diet, sleep or exercise</li>
              </ul>
            </div>

            {/* Section 4 — Normal Symptoms */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Pregnancy Symptoms (Usually Not a Cause for Alarm)
              </h2>

              <p className="mb-4 text-gray-700">
                These are common and generally harmless, though you can still
                mention them to your doctor.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Nausea and mild vomiting, especially in the first trimester</li>
                <li>Tiredness and sleepiness</li>
                <li>Breast tenderness</li>
                <li>Frequent urination</li>
                <li>Mild cramping or stretching sensations</li>
                <li>Heartburn and bloating</li>
                <li>Constipation</li>
                <li>Mild backache</li>
                <li>Mild swelling of feet in the evening</li>
                <li>Braxton Hicks (practice) contractions that are irregular and painless or mildly uncomfortable</li>
                <li>Mood swings and emotional sensitivity</li>
                <li>Increased thin, milky vaginal discharge</li>
                <li>Leg cramps at night</li>
              </ul>

              <p className="text-gray-700">
                Key idea: Normal symptoms are usually mild, come and go, and
                improve with rest or simple changes. Warning symptoms tend to be
                severe, persistent, sudden or paired with other signs.
              </p>
            </div>

            {/* Section 5 — Warning Symptoms */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Symptoms, One by One
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Vaginal Bleeding
              </h3>

              <p className="mb-2 text-gray-700">What it may look like:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Spotting, light bleeding or heavy bleeding</li>
                <li>Pink, red or brown discharge</li>
                <li>Passing clots or tissue</li>
              </ul>

              <p className="mb-2 text-gray-700">
                What it can indicate (only a doctor can tell):
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early pregnancy: miscarriage, ectopic pregnancy, or harmless implantation or cervical causes</li>
                <li>Later pregnancy: placenta previa, placental abruption, preterm labor or infection</li>
              </ul>

              <p className="mb-2 text-gray-700">Act:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Any bleeding in pregnancy should be checked</li>
                <li>Heavy bleeding, pain, dizziness or fainting needs emergency care</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Severe or Persistent Abdominal Pain
              </h3>

              <p className="mb-2 text-gray-700">What it may feel like:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sharp, constant or worsening pain</li>
                <li>One-sided lower abdominal pain</li>
                <li>Pain with bleeding, fever or dizziness</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ectopic pregnancy in early weeks</li>
                <li>Miscarriage</li>
                <li>Placental abruption</li>
                <li>Urinary or other infections</li>
                <li>Preterm labor</li>
                <li>Other abdominal problems</li>
              </ul>

              <p className="mb-2 text-gray-700">Normal vs warning:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild stretching or round ligament pain that eases with rest is common.</li>
                <li>Severe, constant or one-sided pain is a warning.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Severe Headache
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Persistent or severe headache that does not ease with rest</li>
                <li>Blurred vision, flashing lights or spots</li>
                <li>Pain in the upper right abdomen</li>
                <li>Sudden swelling</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pre-eclampsia (high blood pressure with organ stress)</li>
                <li>Other conditions needing evaluation</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Act: Call your doctor the same day, or go to the hospital if
                severe.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Sudden Swelling
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Swelling of the face, around the eyes or hands</li>
                <li>Rapid weight gain over a few days</li>
                <li>Swelling that does not reduce with rest</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pre-eclampsia</li>
                <li>Other medical conditions</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Normal: Mild ankle swelling in the evening, especially in late
                pregnancy.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Reduced or Absent Baby Movements
              </h3>

              <p className="mb-2 text-gray-700">What to notice:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your baby&apos;s usual pattern of movement becoming weaker or less frequent</li>
                <li>No movement for several hours when the baby is usually active</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Baby may be tired, but it can also signal distress or reduced fluid or placental function</li>
              </ul>

              <p className="mb-2 text-gray-700">Act:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Do not wait. Contact your doctor immediately.</li>
                <li>Do not rely on home devices or apps for reassurance.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Leaking or Gushing Fluid
              </h3>

              <p className="mb-2 text-gray-700">What it may look like:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A sudden gush of watery fluid or a steady trickle</li>
                <li>Wet underwear that is not urine</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rupture of the membranes (water breaking)</li>
              </ul>

              <p className="mb-2 text-gray-700">Act:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Go to the hospital promptly, especially before 37 weeks</li>
                <li>Note the time, color and smell of the fluid</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Regular Contractions Before 37 Weeks
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tightening that comes at regular intervals and becomes stronger</li>
                <li>Lower backache that comes and goes</li>
                <li>Pelvic pressure</li>
                <li>Increase in vaginal discharge, sometimes with blood</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Preterm labor</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Act: Call your doctor immediately.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Fever, Chills or Burning Urination
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>High temperature</li>
                <li>Burning or pain when urinating</li>
                <li>Frequent urge with little urine</li>
                <li>Back or flank pain</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Urinary tract or kidney infection</li>
                <li>Other infections</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Why it matters: Infections can trigger preterm labor if
                untreated.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Persistent Vomiting
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Unable to keep food or fluids down</li>
                <li>Weight loss and dehydration</li>
                <li>Dizziness, weakness or very dark urine</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe pregnancy sickness (hyperemesis gravidarum)</li>
                <li>Other causes needing evaluation</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Excessive Thirst, Frequent Urination and Tiredness
              </h3>

              <p className="mb-2 text-gray-700">Possible features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Strong thirst and very frequent urination</li>
                <li>Unusual tiredness</li>
                <li>Blurred vision</li>
              </ul>

              <p className="mb-4 text-gray-700">
                What it can indicate: Gestational diabetes (though often no
                symptoms are present, so screening is essential).
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Pale Skin, Weakness and Breathlessness
              </h3>

              <p className="mb-2 text-gray-700">Possible features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Looking pale, feeling very weak</li>
                <li>Dizziness and fast heartbeat</li>
                <li>Breathlessness on mild effort</li>
              </ul>

              <p className="mb-4 text-gray-700">
                What it can indicate: Anemia. Why it matters: Anemia affects
                both you and your baby and is common and treatable.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Pain, Redness or Swelling in One Leg
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>One leg more swollen, tender, red or warm than the other</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A blood clot in a leg vein</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Act: Seek urgent medical care, especially if you also have chest
                pain or breathlessness.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                13. Chest Pain or Difficulty Breathing
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden chest pain</li>
                <li>Severe shortness of breath</li>
                <li>Coughing blood or a very fast heartbeat</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heart, lung or clot-related problems</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Act: Go to the hospital immediately.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                14. Unusual Vaginal Discharge
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Foul smell</li>
                <li>Green, yellow or grey discharge</li>
                <li>Itching or burning</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection that needs treatment</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Normal: Thin, milky, mild-smelling discharge is common.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                15. Severe Dizziness or Fainting
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Repeated dizziness or fainting</li>
                <li>Palpitations or chest discomfort</li>
              </ul>

              <p className="mb-4 text-gray-700">
                What it can indicate: Low blood pressure, anemia, dehydration,
                bleeding or heart problems.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                16. Seizures or Confusion
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fits, loss of awareness or sudden confusion</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe pre-eclampsia (eclampsia) or other serious conditions</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Act: Emergency. Call for help and go to the hospital
                immediately.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                17. Persistent Sadness, Anxiety or Thoughts of Harm
              </h3>

              <p className="mb-2 text-gray-700">Warning features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Low mood lasting more than two weeks</li>
                <li>Loss of interest in daily life</li>
                <li>Overwhelming worry</li>
                <li>Thoughts of harming yourself or the baby</li>
              </ul>

              <p className="mb-2 text-gray-700">What it can indicate:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Depression or anxiety during or after pregnancy</li>
              </ul>

              <p className="text-gray-700">
                Act: Speak to your doctor or a trusted person soon. This is a
                medical condition, not a weakness.
              </p>
            </div>

            {/* Section 6 — Symptoms by Trimester */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms by Trimester
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester (Weeks 1 to 12)
              </h3>

              <p className="mb-2 text-gray-700">Usually normal:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Nausea, tiredness, breast tenderness, frequent urination</li>
              </ul>

              <p className="mb-2 text-gray-700">Warning signs:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding or passing tissue</li>
                <li>Severe or one-sided abdominal pain</li>
                <li>Shoulder-tip pain, dizziness or fainting</li>
                <li>Vomiting that prevents eating or drinking</li>
                <li>Fever or burning urination</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester (Weeks 13 to 27)
              </h3>

              <p className="mb-2 text-gray-700">Usually normal:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>More energy, mild backache, first baby movements, mild heartburn</li>
              </ul>

              <p className="mb-2 text-gray-700">Warning signs:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding or fluid leakage</li>
                <li>Regular tightening or lower abdominal pain</li>
                <li>Severe headache or sudden swelling</li>
                <li>Reduced baby movements once established</li>
                <li>Persistent excessive thirst or fatigue</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester (Weeks 28 to Delivery)
              </h3>

              <p className="mb-2 text-gray-700">Usually normal:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tiredness, mild swelling, pelvic pressure, Braxton Hicks contractions</li>
              </ul>

              <p className="mb-2 text-gray-700">Warning signs:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular painful contractions before 37 weeks</li>
                <li>Water breaking</li>
                <li>Heavy bleeding</li>
                <li>Reduced baby movements</li>
                <li>Severe headache with vision changes or upper abdominal pain</li>
                <li>Sudden swelling of the face and hands</li>
              </ul>
            </div>

            {/* Section 7 — Postnatal */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postnatal Warning Symptoms
              </h2>

              <p className="mb-4 text-gray-700">
                Complications can appear after delivery too. Contact your doctor
                if you notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding, soaking a pad in an hour or passing large clots</li>
                <li>Foul-smelling vaginal discharge</li>
                <li>Fever</li>
                <li>Redness, swelling or pus at a stitch or surgical wound</li>
                <li>Severe or worsening abdominal pain</li>
                <li>Pain, swelling or redness in one leg</li>
                <li>Chest pain or breathlessness</li>
                <li>Hard, red, painful areas in the breast with fever</li>
                <li>Severe headache or blurred vision</li>
                <li>Persistent sadness, anxiety or thoughts of self-harm</li>
              </ul>

              <p className="text-gray-700">
                Postnatal check-ups at about 6 weeks, and earlier if needed,
                help detect problems. See the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/paediatrics"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paediatric Care
                </a>{" "}
                page for newborn support.
              </p>
            </div>

            {/* Section 8 — Contact */}
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

            {/* Section 9 — FAQs */}
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