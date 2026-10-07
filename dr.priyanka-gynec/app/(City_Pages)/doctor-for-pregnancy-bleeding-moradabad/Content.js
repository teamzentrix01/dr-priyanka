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

export default function DoctorForPregnancyBleedingMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for bleeding during pregnancy in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri provides antenatal and high-risk pregnancy care in Moradabad.",
    },
    {
      q: "Is spotting in early pregnancy normal?",
      a: "It is common, but every episode should be checked by a doctor.",
    },
    {
      q: "What is implantation bleeding?",
      a: "Light spotting when the embryo attaches to the uterus, about 6–12 days after conception.",
    },
    {
      q: "When is bleeding an emergency?",
      a: "Heavy bleeding, clots, severe pain, dizziness or reduced baby movements need immediate hospital care.",
    },
    {
      q: "Does bleeding always mean miscarriage?",
      a: "No. Many women who bleed continue a healthy pregnancy.",
    },
    {
      q: "Which scan is done for pregnancy bleeding?",
      a: "An ultrasound checks the heartbeat, placenta position and any hematoma.",
    },
    {
      q: "Can I work or travel if I am spotting?",
      a: "Avoid strain and long travel until your doctor examines you.",
    },
    {
      q: "Is bleeding after intercourse in pregnancy dangerous?",
      a: "Often it is from the sensitive cervix, but you should still get it checked.",
    },
    {
      q: "Do I need an anti-D injection?",
      a: "If your blood group is Rh-negative, your doctor will usually advise it after bleeding.",
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
                Doctor for Pregnancy Bleeding in Moradabad: Causes, Warning
                Signs & When to Get Help
              </h1>

              <p className="mb-4 text-gray-700">
                Seeing blood during pregnancy is frightening. Almost every
                expectant mother feels her heart drop at the first sight of red
                or brown spotting. The first thing to know is that bleeding in
                pregnancy is common, and many women who bleed go on to have
                healthy babies.
              </p>

              <p className="mb-4 text-gray-700">
                The second thing to know is that bleeding should never be
                ignored. Sometimes it is harmless. Sometimes it signals a
                problem that needs urgent treatment for the safety of both
                mother and baby. Only a proper examination and ultrasound can
                tell the difference.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains why bleeding happens in each stage of
                pregnancy, which signs are emergencies, how a gynaecologist finds
                the cause, and how you can consult Dr. Priyanka Pachauri in
                Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is Bleeding During Pregnancy Normal?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Light spotting in the first trimester affects a significant
                  number of pregnant women.
                </li>
                <li>
                  Most women with light spotting and no pain continue their
                  pregnancy normally.
                </li>
                <li>
                  Heavy bleeding, bleeding with severe pain, or bleeding with
                  dizziness is never something to wait on.
                </li>
                <li>
                  Even light bleeding should be checked, because the cause
                  cannot be judged by colour or amount alone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Bleeding You May Notice
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Spotting
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A few drops of blood on underwear or tissue.
                </li>
                <li>Usually pink, red or brown.</li>
                <li>No pad is needed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Light bleeding
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blood that covers a panty liner but does not soak it.
                </li>
                <li>May stop and start over a day or two.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Heavy bleeding
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blood that soaks a pad within an hour.
                </li>
                <li>May contain clots or tissue.</li>
                <li>This is an emergency.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Brown discharge
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Old blood that has taken time to leave the body.
                </li>
                <li>
                  Still needs to be checked, because it can occur with different
                  conditions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes of Bleeding in the First Trimester (Weeks 1–12)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Implantation Bleeding
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Light spotting when the fertilised egg attaches to the
                  uterine wall.
                </li>
                <li>Happens around 6–12 days after conception.</li>
                <li>Usually lasts a few hours to two days.</li>
                <li>Often mistaken for a light period.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Hormonal Changes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Spotting may occur around the dates when your period would
                  have been due.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Cervical Changes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The cervix gets extra blood supply in pregnancy and bleeds
                  easily.
                </li>
                <li>
                  Spotting can follow intercourse, a pelvic examination or a Pap
                  test.
                </li>
                <li>This is usually harmless.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Threatened Miscarriage
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bleeding with or without cramps while the cervix remains
                  closed.
                </li>
                <li>
                  The pregnancy continues in many of these cases.
                </li>
                <li>Needs a scan and close follow-up.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Miscarriage
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bleeding that becomes heavy, with cramps and passing of clots
                  or tissue.
                </li>
                <li>Lower abdominal or back pain.</li>
                <li>
                  Loss of pregnancy symptoms in some women.
                </li>
                <li>Needs prompt medical evaluation and care.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Ectopic Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The embryo grows outside the uterus, most often in a
                  fallopian tube.
                </li>
                <li>
                  Signs include one-sided lower abdominal pain, spotting,
                  shoulder-tip pain and dizziness.
                </li>
                <li>
                  This is a medical emergency. It can cause internal bleeding if
                  it ruptures.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Molar Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A rare condition in which abnormal tissue grows in the uterus
                  instead of a normal pregnancy.
                </li>
                <li>
                  Signs include dark brown bleeding, severe nausea and a uterus
                  larger than expected.
                </li>
                <li>Needs specialist treatment and follow-up.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Subchorionic Hematoma
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A collection of blood between the uterine wall and the
                  membranes around the baby.
                </li>
                <li>Found on ultrasound.</li>
                <li>
                  Many small hematomas settle on their own with rest and
                  monitoring.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Infection or Growth on the Cervix
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Vaginal or cervical infections and cervical polyps can cause
                  spotting.
                </li>
                <li>Usually treatable once identified.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes of Bleeding in the Second and Third Trimester
              </h2>

              <p className="mb-4 text-gray-700">
                Bleeding after 12 weeks needs even more careful attention.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Placenta Previa
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The placenta lies low and covers or is near the cervix.
                </li>
                <li>
                  The typical sign is painless, bright red bleeding.
                </li>
                <li>
                  It needs close monitoring and planned delivery, often by
                  caesarean section.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Placental Abruption
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The placenta separates from the uterine wall before delivery.
                </li>
                <li>
                  Signs include abdominal pain, a hard tender uterus and reduced
                  baby movements.
                </li>
                <li>
                  Bleeding may be heavy or hidden inside.
                </li>
                <li>This is an emergency.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Preterm Labour
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bleeding with regular tightening, backache or pelvic pressure
                  before 37 weeks.
                </li>
                <li>May come with water leakage.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. &quot;Show&quot; Near Term
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mucus mixed with blood a few days before labour starts.
                </li>
                <li>
                  Normal at term, but if it occurs early, tell your doctor.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Cervical Insufficiency
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The cervix opens early without pain.
                </li>
                <li>
                  May cause spotting and pressure in the pelvis.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Vasa Previa (Rare)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fetal blood vessels lie across the cervix.
                </li>
                <li>
                  Bleeding, especially after the membranes rupture, is an
                  emergency for the baby.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Uterine Rupture (Rare)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mostly a risk in women with previous caesarean or uterine
                  surgery.
                </li>
                <li>
                  Sudden severe pain and bleeding need emergency care.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Trauma
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A fall or blow to the abdomen can cause bleeding.
                </li>
                <li>
                  Always get checked, even if the bleeding is light.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flag Signs: Go to Emergency Immediately
              </h2>

              <p className="mb-4 text-gray-700">
                If you have any of these, do not wait for an appointment. Go to
                the nearest hospital emergency and call your doctor on the way.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy bleeding that soaks a pad in an hour.
                </li>
                <li>Passing clots or tissue.</li>
                <li>Severe abdominal, pelvic or shoulder pain.</li>
                <li>Dizziness, fainting or a racing heartbeat.</li>
                <li>Bleeding with fever or chills.</li>
                <li>Reduced or absent baby movements.</li>
                <li>Bleeding after a fall or accident.</li>
                <li>Sudden gush of fluid with bleeding.</li>
                <li>
                  Bleeding in the second or third trimester with a hard, painful
                  abdomen.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Call Your Doctor the Same Day
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Any spotting or bleeding, even if light.
                </li>
                <li>
                  Brown discharge that continues for more than a day.
                </li>
                <li>Mild cramps with spotting.</li>
                <li>Bleeding after intercourse.</li>
                <li>Low back pain along with spotting.</li>
                <li>
                  Unexpected watery or blood-tinged discharge.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri for Pregnancy Bleeding in
                Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad with a
                focus on safe motherhood, antenatal care and high-risk
                pregnancies. The clinic combines warm, patient-first attention
                with advanced technology.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Careful listening:</strong> She takes time to
                  understand your history and worries before advising tests.
                </li>
                <li>
                  <strong>Advanced ultrasound:</strong> The clinic has a 3D and
                  4D ultrasound machine for detailed pregnancy scans.
                </li>
                <li>
                  <strong>High-risk pregnancy experience:</strong> Bleeding
                  often needs closer monitoring, and this is part of her regular
                  practice.
                </li>
                <li>
                  <strong>Complete pregnancy care:</strong> Antenatal services,
                  birthing care and normal delivery support are available at the
                  same centre.
                </li>
                <li>
                  <strong>Continuity:</strong> The team follows your case from
                  the first visit to delivery and beyond.
                </li>
                <li>
                  <strong>Central location:</strong> A2, near Old Roadways,
                  Gandhi Nagar, Moradabad, reachable from across the city and
                  nearby towns.
                </li>
                <li>
                  <strong>Easy contact:</strong> Call, WhatsApp or email for
                  quick guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Doctor Finds the Cause of Bleeding
              </h2>

              <p className="mb-4 text-gray-700">
                Finding the reason matters more than guessing. Here is what a
                proper evaluation usually includes.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: History
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Weeks of pregnancy and date of last period.
                </li>
                <li>
                  When the bleeding began, its colour and quantity.
                </li>
                <li>
                  Presence of pain, cramps, dizziness or fever.
                </li>
                <li>
                  Previous miscarriages, caesarean sections or surgeries.
                </li>
                <li>
                  Any injury, intercourse or straining before the bleeding.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pulse and blood pressure check.</li>
                <li>Abdominal examination.</li>
                <li>
                  Speculum examination to see the source of bleeding, when
                  appropriate.
                </li>
                <li>
                  Internal examination only when it is safe, as it is avoided if
                  placenta previa is suspected.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Ultrasound
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Confirms whether the pregnancy is in the uterus.
                </li>
                <li>Checks the baby&apos;s heartbeat and growth.</li>
                <li>
                  Looks for a hematoma, placental position and cervical length.
                </li>
                <li>
                  3D/4D imaging can give extra detail where needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Blood Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Haemoglobin to check blood loss.</li>
                <li>Blood group and Rh factor.</li>
                <li>
                  Beta-hCG in early pregnancy when the location or progress of
                  the pregnancy is uncertain.
                </li>
                <li>Other tests based on the situation.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Monitoring
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Repeat scans if needed.</li>
                <li>
                  Fetal heart and movement checks in later pregnancy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment for Bleeding in Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends entirely on the cause, the stage of pregnancy
                and how stable you are.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Threatened Miscarriage
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Rest as advised and avoid heavy lifting or strenuous activity.
                </li>
                <li>
                  Doctor may prescribe medicines to support the pregnancy in
                  suitable cases.
                </li>
                <li>
                  Follow-up scan to confirm the baby&apos;s heartbeat and
                  growth.
                </li>
                <li>
                  Clear advice on which symptoms need urgent return.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Miscarriage
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The doctor explains the options: waiting, medicines or a minor
                  procedure.
                </li>
                <li>
                  The right option depends on your health, bleeding and scan
                  findings.
                </li>
                <li>
                  Emotional support and counselling are just as important as
                  physical care.
                </li>
                <li>
                  Follow-up ensures the uterus is clear and recovery is smooth.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Ectopic Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Emergency management, by medication or surgery, depending on
                  the case.
                </li>
                <li>
                  Keyhole (laparoscopic) surgery is often used for stable
                  patients to protect the tube where possible.
                </li>
                <li>Close follow-up of hCG levels.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Subchorionic Hematoma
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular monitoring with ultrasound.</li>
                <li>Rest and avoiding strain.</li>
                <li>Most small hematomas settle with time.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Placenta Previa
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular scans and strict avoidance of intercourse and heavy
                  activity.
                </li>
                <li>Hospital admission if bleeding occurs.</li>
                <li>
                  Planned delivery timing, usually by caesarean section.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Placental Abruption
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Emergency admission and monitoring of mother and baby.
                </li>
                <li>
                  Blood transfusion or urgent delivery may be needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Cervical or Vaginal Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Treating infections with suitable medicines.
                </li>
                <li>
                  Removal of cervical polyps when required.
                </li>
                <li>Advice to avoid intercourse for some time.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Rh-Negative Mothers
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  An anti-D injection is often advised after bleeding to prevent
                  complications in future pregnancies.
                </li>
                <li>Your doctor will decide the right timing.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What You Can Do at Home While Arranging Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lie down and stay calm while you contact your doctor.
                </li>
                <li>
                  Note the time the bleeding began and how many pads you use.
                </li>
                <li>Do not use tampons or vaginal medicines.</li>
                <li>Avoid intercourse until your doctor allows it.</li>
                <li>
                  Keep previous reports and scan pictures ready.
                </li>
                <li>Arrange someone to accompany you to the clinic.</li>
                <li>
                  Do not take any painkiller or hormonal tablet without medical
                  advice.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Safer Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Register for antenatal care early, ideally in the first
                  trimester.
                </li>
                <li>
                  Take folic acid and other supplements as prescribed.
                </li>
                <li>Attend all scheduled scans and check-ups.</li>
                <li>
                  Eat a balanced diet with iron, protein and calcium.
                </li>
                <li>
                  Avoid smoking, alcohol and tobacco in any form.
                </li>
                <li>
                  Manage blood pressure and diabetes with your doctor.
                </li>
                <li>
                  Avoid heavy lifting and long, bumpy journeys when advised.
                </li>
                <li>
                  Keep track of baby movements in the later months.
                </li>
                <li>Report any new symptoms early rather than late.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Bleeding in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Any bleeding means you are losing the
                  baby. <strong>Fact:</strong> Many women with early bleeding go
                  on to deliver healthy babies.
                </li>
                <li>
                  <strong>Myth:</strong> Light spotting does not need a
                  check-up. <strong>Fact:</strong> Every episode should be
                  checked, because the cause cannot be judged at home.
                </li>
                <li>
                  <strong>Myth:</strong> Papaya, pineapple or heavy work causes
                  miscarriage. <strong>Fact:</strong> Most miscarriages happen
                  because of chromosomal problems in the baby, not because of
                  anything the mother did.
                </li>
                <li>
                  <strong>Myth:</strong> Bed rest always prevents miscarriage.
                  <strong>Fact:</strong> Rest helps some women feel comfortable,
                  but it does not fix every cause.
                </li>
                <li>
                  <strong>Myth:</strong> Bleeding after 20 weeks is just a
                  &quot;show&quot;. <strong>Fact:</strong> Bleeding in late
                  pregnancy can signal a serious condition and needs urgent
                  assessment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Care After Bleeding or Loss
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fear, guilt and sadness are natural reactions.
                </li>
                <li>You are not to blame for a miscarriage.</li>
                <li>Talk openly with your partner and doctor.</li>
                <li>
                  Give yourself time to heal physically and emotionally.
                </li>
                <li>
                  Ask for counselling if the feelings last long.
                </li>
                <li>
                  Most women can go on to have successful pregnancies later, and
                  your doctor can guide you on when to try again.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation with Dr. Priyanka Pachauri
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
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
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
