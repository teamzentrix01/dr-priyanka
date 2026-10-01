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

export default function DoctorForAfterDeliveryBleedingMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for bleeding after delivery in Moradabad?",
      a: "A gynaecologist with postnatal expertise, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "How long does bleeding last after delivery?",
      a: "Usually about 4 to 6 weeks, getting lighter over time.",
    },
    {
      q: "What is heavy bleeding after delivery?",
      a: "Soaking a pad in an hour or passing large clots. Seek help immediately. WhatsApp: +91 89796 70705.",
    },
    {
      q: "Is bleeding normal after a C-section?",
      a: "Yes, lochia occurs after C-section too, though it may be lighter.",
    },
    {
      q: "What colour should postpartum bleeding be?",
      a: "Red at first, then pink or brown, and finally yellowish-white.",
    },
    {
      q: "Can bleeding stop and then start again?",
      a: "Mild increases with activity can be normal, but heavy or bright red bleeding needs a check.",
    },
    {
      q: "What are signs of infection after delivery?",
      a: "Fever, foul-smelling discharge and abdominal pain. Email: drpriyankagynec@gmail.com.",
    },
    {
      q: "Can I use a tampon after delivery?",
      a: "No, use pads until your doctor says otherwise, to reduce infection risk.",
    },
    {
      q: "Can anaemia make bleeding more dangerous?",
      a: "Yes, low haemoglobin makes blood loss harder to tolerate, so treat anaemia early.",
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
                Doctor for After Delivery Bleeding in Moradabad: What Is Normal,
                What Is Not and When to Get Help
              </h1>

              <p className="mb-4 text-gray-700">
                Every mother bleeds after childbirth. But how much is too much,
                and for how long is normal? Many new mothers quietly worry about
                this and don&apos;t know whom to ask. If you are looking for a
                doctor for after delivery bleeding in Moradabad, this guide
                explains normal postpartum bleeding, warning signs, causes,
                treatment and recovery in simple language.
              </p>

              <p className="mb-4 text-gray-700">
                Most bleeding after delivery is a healthy part of recovery. But
                heavy or unusual bleeding can become dangerous quickly, so
                knowing the signs can save lives.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Bleeding After Delivery?
              </h2>

              <p className="mb-4 text-gray-700">
                After the baby and placenta are delivered, the womb sheds the
                blood, tissue and lining that supported the pregnancy. This
                discharge is called lochia.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It happens after both normal delivery and C-section.
                </li>
                <li>
                  It looks like a heavy period at first, then gradually
                  lightens.
                </li>
                <li>
                  It usually lasts about 4 to 6 weeks, though this varies.
                </li>
                <li>
                  The womb slowly contracts and returns to its normal size
                  during this time.
                </li>
                <li>
                  Breastfeeding releases oxytocin, which helps the womb
                  contract.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stages of Normal Postpartum Bleeding (Lochia)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Lochia Rubra (Days 1 to 4)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bright or dark red.</li>
                <li>Heaviest flow, like a heavy period.</li>
                <li>
                  May contain small clots, up to the size of a plum or a coin.
                </li>
                <li>
                  May increase slightly when you stand up or breastfeed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Lochia Serosa (Days 4 to 10)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pink, brown or watery.</li>
                <li>Flow becomes lighter.</li>
                <li>Smaller amounts of blood and more white cells.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Lochia Alba (Day 10 to about 6 weeks)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Yellowish-white or cream.</li>
                <li>Very light discharge.</li>
                <li>May stop, then start again briefly with activity.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your bleeding pattern may differ slightly, so follow your
                doctor&apos;s guidance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Considered Normal?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Flow that gradually reduces day by day.</li>
                <li>A mild &quot;earthy&quot; or period-like smell.</li>
                <li>Small clots in the first few days.</li>
                <li>Slight increase after activity, then settling with rest.</li>
                <li>Cramps (&quot;afterpains&quot;), especially while breastfeeding.</li>
                <li>Light spotting for up to 6 weeks.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Postpartum Haemorrhage (PPH)?
              </h2>

              <p className="mb-4 text-gray-700">
                Postpartum haemorrhage is excessive bleeding after childbirth.
                It is a medical emergency.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Commonly defined as blood loss of 500 ml or more after vaginal
                  delivery.
                </li>
                <li>
                  Or 1000 ml or more after caesarean delivery.
                </li>
                <li>
                  Any bleeding that causes symptoms such as dizziness or a fast
                  heartbeat also counts.
                </li>
              </ul>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-gray-900">
                Two types:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Primary (early) PPH:</strong> within the first 24
                  hours after delivery.
                </li>
                <li>
                  <strong>Secondary (late) PPH:</strong> from 24 hours up to 12
                  weeks after delivery.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                PPH is one of the leading causes of maternal complications
                worldwide, but with prompt treatment most women recover fully.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes of Heavy Bleeding After Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors often remember the causes as the &quot;4 Ts.&quot;
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Tone: Womb Not Contracting (Uterine Atony)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>The most common cause.</li>
                <li>
                  The womb stays soft and relaxed instead of tightening.
                </li>
                <li>
                  More likely after a long labour, a large baby, twins or too
                  much amniotic fluid.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Trauma: Tears or Injury
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tears in the vagina, cervix or perineum.</li>
                <li>Episiotomy cuts that bleed.</li>
                <li>Rarely, rupture of the womb.</li>
                <li>
                  Bleeding into a hidden collection (haematoma).
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Tissue: Retained Placenta or Membranes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Part of the placenta or membranes remains inside.
                </li>
                <li>Prevents the womb from contracting fully.</li>
                <li>A common cause of late bleeding as well.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Thrombin: Clotting Problems
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood does not clot properly.</li>
                <li>
                  May be due to inherited disorders, low platelets or severe
                  complications.
                </li>
                <li>
                  Linked to conditions such as pre-eclampsia or placental
                  abruption.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Other Causes of Late Bleeding
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection of the womb (endometritis).</li>
                <li>Subinvolution: the womb heals slowly.</li>
                <li>Retained products found days or weeks later.</li>
                <li>Stitch breakdown after C-section or tear repair.</li>
                <li>Hormonal changes, or the first period returning.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is at Higher Risk?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous postpartum haemorrhage.</li>
                <li>Anaemia during pregnancy.</li>
                <li>Twin or multiple pregnancy.</li>
                <li>Large baby or excess amniotic fluid.</li>
                <li>Prolonged or very fast labour.</li>
                <li>Induced or augmented labour.</li>
                <li>Placenta praevia or abruption.</li>
                <li>Pre-eclampsia or high BP.</li>
                <li>Many previous births.</li>
                <li>Fibroids or uterine abnormalities.</li>
                <li>Obesity.</li>
                <li>Assisted delivery with forceps or vacuum.</li>
                <li>Caesarean delivery.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Even women without any risk factors can bleed heavily, which is
                why delivery in a well-equipped centre matters.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: See a Doctor Immediately
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait if you notice any of these.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Soaking a pad in an hour or less, for two hours in a row.
                </li>
                <li>
                  Passing large clots, bigger than a golf ball or a lemon.
                </li>
                <li>
                  Bright red bleeding that returns or increases after it had
                  lightened.
                </li>
                <li>Foul-smelling discharge.</li>
                <li>Fever or chills.</li>
                <li>Severe or worsening lower abdominal pain.</li>
                <li>Dizziness, fainting or blurred vision.</li>
                <li>Fast heartbeat or breathlessness.</li>
                <li>Pale, cold or clammy skin.</li>
                <li>Bleeding that continues beyond 6 to 8 weeks.</li>
                <li>
                  Swelling or severe pain in the perineum (possible haematoma).
                </li>
                <li>Wound bleeding or opening after C-section.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Heavy bleeding can come on suddenly, so treat these signs as
                emergencies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is the Cause Diagnosed?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Examination:</strong> checking the womb, vagina,
                  cervix and stitches.
                </li>
                <li>
                  <strong>Measuring blood loss:</strong> through pads, drapes or
                  weighing.
                </li>
                <li>
                  <strong>Vital signs:</strong> pulse, blood pressure and oxygen
                  levels.
                </li>
                <li>
                  <strong>Blood tests:</strong> haemoglobin, clotting profile
                  and platelet count.
                </li>
                <li>
                  <strong>Ultrasound:</strong> looks for retained tissue or
                  blood clots in the womb.
                </li>
                <li>
                  <strong>3D/4D or transvaginal ultrasound:</strong> offers
                  clearer images where available.
                </li>
                <li>
                  <strong>Infection tests:</strong> if fever or discharge
                  suggests infection.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment of Bleeding After Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause and how heavy the bleeding is.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Uterine Massage and Uterotonic Medicines
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gentle massage of the lower abdomen helps the womb tighten.
                </li>
                <li>
                  Medicines such as oxytocin, misoprostol or methylergometrine
                  make the womb contract.
                </li>
                <li>
                  Often given right after delivery to prevent bleeding.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Tranexamic Acid
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A medicine that helps blood clot.</li>
                <li>
                  Commonly used early in PPH, as decided by the doctor.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Repair of Tears
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Stitching of any tears or bleeding points.</li>
                <li>Drainage of haematomas where needed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Removal of Retained Tissue
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ultrasound-guided evacuation or a minor procedure to clear
                  leftover tissue.
                </li>
                <li>Done under anaesthesia in a hospital setting.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Antibiotics for Infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Prescribed if endometritis or wound infection is suspected.
                </li>
                <li>Complete the full course as advised.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. IV Fluids and Blood Transfusion
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Replace lost fluid and blood in significant bleeding.</li>
                <li>
                  Blood is transfused when haemoglobin drops dangerously or
                  bleeding is severe.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Balloon Tamponade
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A special balloon placed in the womb to press on bleeding
                  surfaces.
                </li>
                <li>Used when medicines fail to control bleeding.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Surgical Options
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Procedures to control bleeding, such as tying blood vessels or
                  compression sutures.
                </li>
                <li>
                  Hysterectomy is a last resort in life-threatening situations.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Prompt, well-coordinated care is what makes the difference.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventing Postpartum Haemorrhage
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Treat anaemia early in pregnancy with iron and folic acid.
                </li>
                <li>
                  Attend all antenatal visits and identify risk factors early.
                </li>
                <li>
                  Plan delivery at a well-equipped centre with blood
                  availability.
                </li>
                <li>
                  Use active management of the third stage of labour, including
                  a uterotonic injection after birth.
                </li>
                <li>
                  Have your blood group and cross-match ready if you are
                  high-risk.
                </li>
                <li>
                  Empty your bladder, because a full bladder can stop the womb
                  contracting.
                </li>
                <li>
                  Breastfeed soon after birth, which helps the womb contract.
                </li>
                <li>
                  Follow your doctor&apos;s advice on monitoring in the first
                  hours after delivery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care Tips During Postpartum Bleeding
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Use sanitary pads, not tampons or menstrual cups, until your
                  doctor allows.
                </li>
                <li>
                  Change pads every 3 to 4 hours or when soaked.
                </li>
                <li>Wash hands before and after changing pads.</li>
                <li>
                  Keep the genital area clean with gentle washing, front to
                  back.
                </li>
                <li>
                  Note the number of pads you use each day and the colour of the
                  blood.
                </li>
                <li>
                  Rest as much as possible, and sleep when the baby sleeps.
                </li>
                <li>
                  Avoid heavy lifting, strenuous work and long standing.
                </li>
                <li>
                  Avoid intercourse until your doctor confirms it is safe,
                  usually after the postnatal check-up.
                </li>
                <li>
                  Massage your lower belly gently if your doctor has taught you
                  how.
                </li>
                <li>
                  Breastfeed regularly, which supports womb contraction.
                </li>
                <li>
                  Do not use any home remedies on the vagina or wound without
                  medical advice.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Nutrition for Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                Blood loss drains iron and energy, so food plays an important
                role.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Iron-rich foods:</strong> palak, methi, beetroot,
                  dates, pomegranate, raisins, sprouts, dals and jaggery in
                  moderation.
                </li>
                <li>
                  <strong>Vitamin C:</strong> lemon, amla, orange and guava to
                  improve iron absorption.
                </li>
                <li>
                  <strong>Protein:</strong> dal, milk, curd, paneer, eggs,
                  chicken or fish, if you eat them.
                </li>
                <li>
                  <strong>Fibre:</strong> fruits, vegetables and whole grains to
                  prevent constipation and straining.
                </li>
                <li>
                  <strong>Healthy fats:</strong> nuts, seeds and a little ghee.
                </li>
                <li>
                  <strong>Plenty of fluids:</strong> water, buttermilk, soups
                  and coconut water.
                </li>
                <li>
                  <strong>Iron and calcium supplements:</strong> continue as
                  prescribed.
                </li>
                <li>
                  <strong>Small, frequent meals:</strong> easier to manage while
                  caring for a newborn.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor may check your haemoglobin at follow-up and adjust
                supplements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bleeding After Normal Delivery vs After C-Section
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>After normal delivery:</strong> lochia is usually
                  heavier at first and may last up to 6 weeks.
                </li>
                <li>
                  <strong>After C-section:</strong> lochia is often somewhat
                  lighter, but still occurs, because the womb sheds its lining
                  either way.
                </li>
                <li>
                  <strong>Wound bleeding:</strong> after a C-section, the wound
                  should stay dry, and any bleeding or discharge from it needs a
                  check.
                </li>
                <li>
                  <strong>Stitches:</strong> episiotomy or tear stitches can
                  bleed if they open or become infected.
                </li>
                <li>
                  <strong>Both need follow-up:</strong> neither type of delivery
                  removes the need for postnatal care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Will My Period Return?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Not breastfeeding:</strong> periods often return in
                  about 6 to 8 weeks, sometimes later.
                </li>
                <li>
                  <strong>Exclusive breastfeeding:</strong> periods may stay
                  away for many months.
                </li>
                <li>
                  First period can be heavy or irregular: this is common.
                </li>
                <li>
                  Do not confuse a returning period with lochia. If bleeding
                  turns sudden and heavy, get checked.
                </li>
                <li>
                  <strong>Contraception:</strong> you can become pregnant before
                  your first period, so discuss family planning at your
                  postnatal visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing After a Difficult Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A frightening bleed or emergency can leave lasting worry.
                </li>
                <li>It is normal to feel shaken, anxious or tearful.</li>
                <li>
                  Talk to your doctor about what happened, and ask any
                  questions.
                </li>
                <li>Share your feelings with your partner or family.</li>
                <li>Ask for help with the baby and household tasks.</li>
                <li>
                  Watch for signs of postpartum depression, such as persistent
                  sadness or hopelessness.
                </li>
                <li>Seek professional support early, because help works.</li>
                <li>
                  If you ever feel hopeless or think of harming yourself,
                  contact a healthcare professional or a trusted person
                  immediately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths and Facts About Bleeding After Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Heavy bleeding is always normal after
                  childbirth. <strong>Fact:</strong> Bleeding should reduce
                  steadily. Soaking pads quickly or passing large clots is not
                  normal.
                </li>
                <li>
                  <strong>Myth:</strong> Bleeding that stops early means the
                  womb is clean. <strong>Fact:</strong> Sudden stopping with
                  pain or fever may signal retained blood, so seek advice.
                </li>
                <li>
                  <strong>Myth:</strong> Only normal delivery causes heavy
                  bleeding. <strong>Fact:</strong> It can occur after both
                  normal and caesarean delivery.
                </li>
                <li>
                  <strong>Myth:</strong> Using tampons is fine once bleeding
                  lightens. <strong>Fact:</strong> Pads are recommended until
                  your doctor clears you, to lower infection risk.
                </li>
                <li>
                  <strong>Myth:</strong> Bleeding after 6 weeks is always my
                  period. <strong>Fact:</strong> It may be, but persistent or
                  heavy bleeding needs a check.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is known in Moradabad for antenatal and
                postnatal care, normal delivery support and patient-first
                communication. Based on the clinic&apos;s listed services, you
                can expect:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Postnatal care:</strong> follow-up visits that review
                  bleeding, stitches and recovery.
                </li>
                <li>
                  <strong>Normal delivery focus:</strong> gentle care that
                  supports natural birth wherever safe.
                </li>
                <li>
                  <strong>High-risk pregnancy expertise:</strong> planning ahead
                  for women at risk of heavy bleeding.
                </li>
                <li>
                  <strong>3D and 4D ultrasound:</strong> detailed imaging to
                  check the womb after delivery when needed.
                </li>
                <li>
                  <strong>Anaemia care:</strong> attention to haemoglobin, which
                  affects recovery.
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
                What to Expect at Your Postnatal Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A discussion of your bleeding pattern, pain, fever and energy
                  levels.
                </li>
                <li>
                  A gentle examination of the abdomen, womb and any stitches.
                </li>
                <li>
                  Blood tests, such as haemoglobin, if needed.
                </li>
                <li>
                  An ultrasound to check for retained tissue, if suspected.
                </li>
                <li>
                  Treatment or medicines tailored to the cause.
                </li>
                <li>
                  Guidance on diet, rest, hygiene and warning signs.
                </li>
                <li>
                  Advice on breastfeeding, contraception and resuming activity.
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
