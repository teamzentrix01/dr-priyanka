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

export default function DoctorForPregnancySwellingMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for swelling in pregnancy in Moradabad?",
      a: "A gynaecologist experienced in high-risk antenatal care, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "Is swelling normal during pregnancy?",
      a: "Mild swelling of both feet is common, especially in the third trimester.",
    },
    {
      q: "When is swelling dangerous?",
      a: "Sudden swelling of the face or hands, or swelling with headache or blurred vision. WhatsApp: +91 89796 70705.",
    },
    {
      q: "Can swelling be a sign of pre-eclampsia?",
      a: "Yes, sudden swelling with high BP may signal it. Get your BP and urine checked promptly.",
    },
    {
      q: "How can I reduce swollen feet at home?",
      a: "Elevate your legs, rest on your left side, walk gently, drink water and limit salt.",
    },
    {
      q: "Should I stop drinking water if I have swelling?",
      a: "No, staying hydrated helps your body release excess fluid.",
    },
    {
      q: "Can I take water tablets for swelling?",
      a: "No, never take diuretics in pregnancy without your doctor's prescription. Email: drpriyankagynaec@gmail.com.",
    },
    {
      q: "What if only one leg is swollen?",
      a: "This can indicate a blood clot. Seek medical help immediately.",
    },
    {
      q: "Will swelling go away after delivery?",
      a: "Usually yes, within days to weeks. New severe swelling after birth needs urgent review.",
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
                Doctor for Pregnancy Swelling in Moradabad: Causes, Warning
                Signs and Relief Tips
              </h1>

              <p className="mb-4 text-gray-700">
                Tight shoes, puffy fingers and a ring that no longer fits are
                common complaints in pregnancy. Most swelling is harmless and
                comes from normal body changes. But sometimes swelling is a
                warning sign of a serious condition such as pre-eclampsia. If
                you are looking for a doctor for pregnancy swelling in Moradabad,
                this guide explains what is normal, what is not, and how to find
                relief safely.
              </p>

              <p className="mb-4 text-gray-700">
                Knowing the difference can protect both you and your baby.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Swelling in Pregnancy?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Swelling, also called oedema, happens when extra fluid
                  collects in body tissues.
                </li>
                <li>
                  It most often appears in the feet, ankles and legs.
                </li>
                <li>
                  It can also affect the hands, fingers and face.
                </li>
                <li>
                  It is usually worse at the end of the day and improves after
                  rest.
                </li>
                <li>
                  It becomes more common in the second half of pregnancy,
                  especially after 28 weeks.
                </li>
                <li>
                  It is very common, affecting a large share of pregnant women.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does Swelling Happen in Pregnancy?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>More body fluid:</strong> your body holds extra water,
                  and blood volume rises by up to 50%.
                </li>
                <li>
                  <strong>Pressure from the growing uterus:</strong> it presses
                  on veins in the pelvis and legs and slows blood return.
                </li>
                <li>
                  <strong>Hormonal changes:</strong> progesterone relaxes vessel
                  walls and encourages fluid retention.
                </li>
                <li>
                  <strong>Standing or sitting for long hours:</strong> gravity
                  pulls fluid down to your feet.
                </li>
                <li>
                  <strong>Hot weather:</strong> heat widens blood vessels, and
                  swelling worsens in summer.
                </li>
                <li>
                  <strong>Too much salt:</strong> salty foods encourage water
                  retention.
                </li>
                <li>
                  <strong>Low protein or anaemia:</strong> these can add to
                  fluid build-up.
                </li>
                <li>
                  <strong>Lack of movement:</strong> long periods of inactivity
                  slow circulation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Swelling vs Dangerous Swelling
              </h2>

              <p className="mb-4 text-gray-700">
                This is the most important point to understand.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Usually normal swelling:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild swelling of both feet and ankles.</li>
                <li>Worse in the evening or after standing.</li>
                <li>Better after rest and leg elevation.</li>
                <li>No headache, vision problems or pain.</li>
                <li>Normal blood pressure at check-ups.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Swelling that needs urgent attention:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sudden swelling of the face, around the eyes, or hands.
                </li>
                <li>Swelling that does not go down after rest.</li>
                <li>
                  Swelling in one leg only, with pain, redness or warmth.
                </li>
                <li>Swelling with a severe headache.</li>
                <li>Swelling with blurred vision or flashing lights.</li>
                <li>Swelling with upper abdominal pain.</li>
                <li>
                  Sudden weight gain of more than 1 to 2 kg in a week.
                </li>
                <li>Swelling with breathlessness or chest pain.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you see the second list, contact your doctor immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Swelling and Pre-eclampsia: Why It Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Pre-eclampsia is a pregnancy condition with high blood pressure
                and effects on organs such as the kidneys and liver. It usually
                appears after 20 weeks.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Swelling is a common sign, especially sudden puffiness of the
                  face and hands.
                </li>
                <li>
                  Swelling alone does not prove pre-eclampsia, and many healthy
                  pregnancies have swelling.
                </li>
                <li>BP and urine tests are the way to check.</li>
                <li>
                  Other signs include severe headache, vision changes, upper
                  abdominal pain and reduced urine.
                </li>
                <li>
                  Early treatment prevents serious complications such as
                  seizures (eclampsia).
                </li>
                <li>
                  Regular antenatal visits with BP checks are the best
                  protection.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Other Medical Causes of Swelling in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Deep vein thrombosis (DVT):</strong> a blood clot in a
                  leg vein, causing one-sided swelling, pain and warmth. This is
                  an emergency.
                </li>
                <li>
                  <strong>Anaemia or low protein levels:</strong> may contribute
                  to fluid retention.
                </li>
                <li>
                  <strong>Kidney problems:</strong> can cause swelling of the
                  face and legs.
                </li>
                <li>
                  <strong>Heart conditions:</strong> may lead to breathlessness
                  with swelling.
                </li>
                <li>
                  <strong>Thyroid problems:</strong> can cause puffiness in some
                  cases.
                </li>
                <li>
                  <strong>Gestational diabetes:</strong> may occur alongside
                  swelling and needs monitoring.
                </li>
                <li>
                  <strong>Varicose veins:</strong> cause swelling, heaviness and
                  visible veins in the legs.
                </li>
                <li>
                  <strong>Twin pregnancy:</strong> more pressure on veins leads
                  to greater swelling.
                </li>
                <li>
                  <strong>Carpal tunnel syndrome:</strong> swelling in the wrist
                  causes tingling and numbness in the hands.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Swelling and What They May Suggest
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Swollen Feet and Ankles
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>The most common form.</li>
                <li>
                  Usually harmless when both sides are equal and improve with
                  rest.
                </li>
                <li>Should be checked if sudden, severe or painful.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Swollen Hands and Fingers
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rings may feel tight.</li>
                <li>
                  Can be normal, but sudden swelling needs a BP check.
                </li>
                <li>
                  May cause tingling if carpal tunnel syndrome develops.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Swollen Face
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Puffiness around the eyes or cheeks.</li>
                <li>
                  Sudden facial swelling can be a warning sign of pre-eclampsia.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Swelling in One Leg
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>May indicate a blood clot.</li>
                <li>Needs immediate medical evaluation.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Swelling of the Vulva or Varicose Veins
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Caused by pressure and increased blood flow.</li>
                <li>
                  Support garments and rest can help, and severe cases need
                  checking.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is Swelling Evaluated?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Blood pressure measurement:</strong> at every
                  antenatal visit.
                </li>
                <li>
                  <strong>Urine test:</strong> checks for protein, a sign of
                  pre-eclampsia.
                </li>
                <li>
                  <strong>Weight monitoring:</strong> to spot rapid gain from
                  fluid.
                </li>
                <li>
                  <strong>Physical examination:</strong> checking the pattern
                  and severity of swelling.
                </li>
                <li>
                  <strong>Blood tests:</strong> haemoglobin, kidney function,
                  liver enzymes and platelets when needed.
                </li>
                <li>
                  <strong>Leg examination or Doppler scan:</strong> if a clot is
                  suspected.
                </li>
                <li>
                  <strong>Ultrasound:</strong> checks baby growth and amniotic
                  fluid.
                </li>
                <li>
                  <strong>3D/4D ultrasound and Doppler:</strong> detailed
                  monitoring where required.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment and Management
              </h2>

              <p className="mb-4 text-gray-700">
                The approach depends on the cause.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Normal, Mild Swelling
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Elevate your legs above heart level for 20 to 30 minutes
                  several times a day.
                </li>
                <li>Rest on your left side to improve blood flow.</li>
                <li>Avoid standing or sitting for long periods.</li>
                <li>Take short walks to keep circulation moving.</li>
                <li>Wear comfortable footwear with good support.</li>
                <li>
                  Use compression stockings if advised, especially for varicose
                  veins.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Swelling Linked to a Medical Problem
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pre-eclampsia:</strong> BP medicines, close
                  monitoring, magnesium sulphate for severe cases, and timely
                  delivery.
                </li>
                <li>
                  <strong>Anaemia:</strong> iron and folic acid, or iron
                  injections.
                </li>
                <li>
                  <strong>Blood clot:</strong> urgent treatment with blood
                  thinners.
                </li>
                <li>
                  <strong>Kidney or heart problems:</strong> specialist care
                  alongside obstetric management.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Never take diuretic (water) tablets on your own, because they
                can be unsafe in pregnancy unless prescribed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care Tips for Swelling
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Drink plenty of water:</strong> it may seem odd, but
                  staying hydrated helps your body release excess fluid.
                </li>
                <li>
                  <strong>Reduce salt:</strong> avoid pickles, papad, chips,
                  namkeen and processed foods.
                </li>
                <li>
                  Do not cut salt completely unless your doctor advises.
                </li>
                <li>
                  <strong>Eat potassium-rich foods:</strong> such as banana,
                  coconut water and lauki, unless restricted.
                </li>
                <li>
                  <strong>Add protein:</strong> dal, curd, paneer, eggs and
                  sprouts.
                </li>
                <li>
                  Avoid tight clothing on wrists, ankles and waist.
                </li>
                <li>
                  <strong>Cool down:</strong> soak feet in cool water for a few
                  minutes, or use a cool compress.
                </li>
                <li>
                  <strong>Massage gently:</strong> from the ankles upwards,
                  unless a clot is suspected.
                </li>
                <li>
                  Sleep with a pillow under your legs or raise the foot of the
                  bed slightly.
                </li>
                <li>
                  Remove rings early before swelling becomes severe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Exercises to Reduce Swelling
              </h2>

              <p className="mb-4 text-gray-700">
                Check with your doctor before starting any routine.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Ankle circles:</strong> rotate each foot 10 times in
                  each direction.
                </li>
                <li>
                  <strong>Foot pumps:</strong> point and flex your toes while
                  seated.
                </li>
                <li>
                  <strong>Gentle walking:</strong> 15 to 30 minutes daily, if
                  your doctor approves.
                </li>
                <li>
                  <strong>Prenatal yoga:</strong> with a trained instructor and
                  safe poses.
                </li>
                <li>
                  <strong>Swimming or water exercise:</strong> water pressure
                  helps drain fluid and eases the body.
                </li>
                <li>Avoid crossing your legs for long periods.</li>
                <li>Take movement breaks every hour if you sit for work.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods and Habits to Support Healthy Fluid Balance
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Helpful foods:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fresh fruits and vegetables.</li>
                <li>
                  Cucumber, watermelon and lauki, which have high water content.
                </li>
                <li>Coconut water and buttermilk.</li>
                <li>Protein-rich meals.</li>
                <li>
                  Leafy greens, in balance with your doctor&apos;s advice.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Limit:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Extra salt and salty snacks.</li>
                <li>Packaged and processed foods.</li>
                <li>Excess tea and coffee.</li>
                <li>Very sugary drinks.</li>
                <li>Heavy, oily meals that cause bloating.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Call Your Doctor Immediately
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden swelling of the face, eyes or hands.</li>
                <li>Severe or persistent headache.</li>
                <li>Blurred vision, flashing lights or spots.</li>
                <li>
                  Pain in the upper right abdomen or under the ribs.
                </li>
                <li>
                  Swelling in one leg with pain, redness or warmth.
                </li>
                <li>Breathlessness or chest pain.</li>
                <li>
                  Sudden weight gain of several kilograms in days.
                </li>
                <li>Reduced urine output.</li>
                <li>Reduced baby movements.</li>
                <li>Fits, confusion or fainting.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Do not wait for your next scheduled visit if any of these
                appear.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Swelling in Different Trimesters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>First trimester:</strong> mild swelling is uncommon,
                  and sudden swelling needs review.
                </li>
                <li>
                  <strong>Second trimester:</strong> swelling of feet may begin,
                  especially in hot weather.
                </li>
                <li>
                  <strong>Third trimester:</strong> swelling is most common, and
                  monitoring for pre-eclampsia becomes vital.
                </li>
                <li>
                  <strong>Before delivery:</strong> swelling can peak but should
                  not be sudden or severe.
                </li>
                <li>
                  <strong>After delivery:</strong> swelling usually settles
                  within days to weeks as extra fluid leaves the body.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Swelling After Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Extra fluid gradually leaves through urine and sweating in the
                  first week or two.
                </li>
                <li>
                  Swelling may continue for a short time, especially after a
                  caesarean or IV fluids.
                </li>
                <li>
                  Postpartum pre-eclampsia can occur up to 6 weeks after
                  delivery, so new swelling with headache needs urgent care.
                </li>
                <li>
                  One-sided leg swelling after birth may signal a clot and needs
                  immediate attention.
                </li>
                <li>
                  Rest, leg elevation and light walking help recovery.
                </li>
                <li>
                  Attend your postnatal check-up to review BP and swelling.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths and Facts About Swelling in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Drinking less water reduces swelling.{" "}
                  <strong>Fact:</strong> Staying hydrated actually helps your
                  body remove excess fluid.
                </li>
                <li>
                  <strong>Myth:</strong> All swelling in pregnancy is normal.{" "}
                  <strong>Fact:</strong> Sudden or severe swelling can signal
                  pre-eclampsia or a clot and needs prompt review.
                </li>
                <li>
                  <strong>Myth:</strong> Swollen feet mean a girl or a boy.{" "}
                  <strong>Fact:</strong> Swelling has nothing to do with the
                  baby&apos;s sex.
                </li>
                <li>
                  <strong>Myth:</strong> You should completely stop eating salt.{" "}
                  <strong>Fact:</strong> Avoid excess salt, but do not eliminate
                  it unless your doctor tells you to.
                </li>
                <li>
                  <strong>Myth:</strong> Swelling disappears immediately after
                  delivery. <strong>Fact:</strong> It often takes days to weeks
                  to settle.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri in Moradabad
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
                  evaluation of swelling linked to BP, anaemia or diabetes.
                </li>
                <li>
                  <strong>Regular BP and urine monitoring:</strong> part of
                  structured antenatal care.
                </li>
                <li>
                  <strong>3D and 4D ultrasound:</strong> detailed checking of
                  baby growth and well-being.
                </li>
                <li>
                  <strong>Personalised guidance:</strong> diet, activity and
                  lifestyle advice suited to your body.
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
                  A discussion of where the swelling appears and how long it has
                  lasted.
                </li>
                <li>Accurate BP measurement and urine testing.</li>
                <li>Weight and physical examination.</li>
                <li>Blood tests or scans, if needed.</li>
                <li>
                  A clear explanation of whether the swelling is normal or needs
                  treatment.
                </li>
                <li>
                  Personalised advice on diet, rest and exercise.
                </li>
                <li>Guidance on warning signs and a follow-up plan.</li>
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
