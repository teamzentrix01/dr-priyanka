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

export default function DoctorForPregnancyPainMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for pain in pregnancy in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri provides antenatal and high-risk pregnancy care in Moradabad.",
    },
    {
      q: "Is stomach pain normal in pregnancy?",
      a: "Mild stretching pain is common, but severe or constant pain needs urgent care.",
    },
    {
      q: "What is round ligament pain?",
      a: "A brief, sharp pain on the side of the lower belly, caused by stretching ligaments.",
    },
    {
      q: "Is back pain normal in pregnancy?",
      a: "Yes, it is very common, but severe pain with fever or bleeding needs a check.",
    },
    {
      q: "How do I tell Braxton Hicks from labour?",
      a: "Braxton Hicks are irregular and ease with rest. True labour is regular and gets stronger.",
    },
    {
      q: "Can I take painkillers for pregnancy pain?",
      a: "Only after asking your doctor, as some are unsafe in pregnancy.",
    },
    {
      q: "When is pain in pregnancy an emergency?",
      a: "With bleeding, leaking fluid, reduced baby movements, fever or severe, constant pain.",
    },
    {
      q: "Can a urine infection cause pain in pregnancy?",
      a: "Yes. It can cause lower belly or back pain and needs prompt treatment.",
    },
    {
      q: "Is leg pain in pregnancy serious?",
      a: "Cramps are common, but pain, redness and swelling in one calf need urgent care.",
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
                Doctor for Pregnancy Pain in Moradabad: Causes, Warning Signs &
                Safe Relief
              </h1>

              <p className="mb-4 text-gray-700">
                Aches and pains are a normal part of pregnancy for most women.
                The body is stretching, hormones are loosening joints, and the
                uterus is growing. So a little pulling in the belly or a sore
                back is usually nothing to fear.
              </p>

              <p className="mb-4 text-gray-700">
                But pain in pregnancy also carries a special rule: never assume,
                always ask. Some pain is harmless, while some points to problems
                that need quick treatment for you and your baby. Only an
                examination can tell the difference.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains common causes of pain in each trimester,
                warning signs, safe relief measures and how to consult Dr.
                Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is Pain in Pregnancy Normal?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild, short-lived pain that eases with rest is common.
                </li>
                <li>
                  Pain that is severe, constant or getting worse is not normal.
                </li>
                <li>
                  Pain with bleeding, fever, leaking fluid or reduced baby
                  movements needs urgent care.
                </li>
                <li>
                  If you are unsure, call your doctor, because a quick check is
                  always better than waiting.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Types of Pain in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lower abdominal pain (cramping, pulling or stitch-like).
                </li>
                <li>Back pain (lower back or upper back).</li>
                <li>Pelvic and hip pain.</li>
                <li>Rib and upper abdominal pain.</li>
                <li>Leg cramps and calf pain.</li>
                <li>Headache.</li>
                <li>Chest and heartburn pain.</li>
                <li>Breast tenderness.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pain in the First Trimester (Weeks 1–12)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common and Usually Harmless Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Implantation cramps:</strong> mild pulling as the
                  embryo settles in the uterus.
                </li>
                <li>
                  <strong>Uterus growing:</strong> stretching of ligaments
                  causes mild cramps.
                </li>
                <li>
                  <strong>Gas and constipation:</strong> hormones slow the
                  bowels, causing bloating and cramps.
                </li>
                <li>
                  <strong>Breast tenderness:</strong> hormonal, and it often
                  eases after the first trimester.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Causes That Need a Check
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Threatened miscarriage:</strong> cramps with bleeding.
                </li>
                <li>
                  <strong>Miscarriage:</strong> heavy bleeding with strong
                  cramps.
                </li>
                <li>
                  <strong>Ectopic pregnancy:</strong> one-sided pain, spotting,
                  dizziness or shoulder-tip pain, which is an emergency.
                </li>
                <li>
                  <strong>Urinary tract infection:</strong> burning while
                  passing urine, with lower abdominal pain.
                </li>
                <li>
                  <strong>Molar pregnancy (rare):</strong> pain with bleeding
                  and severe nausea.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pain in the Second Trimester (Weeks 13–27)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common and Usually Harmless Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Round ligament pain:</strong> sharp, brief pain on one
                  or both sides of the lower belly when you stand up or change
                  position.
                </li>
                <li>
                  <strong>Backache:</strong> the growing belly shifts your
                  posture and strains the back.
                </li>
                <li>
                  <strong>Leg cramps:</strong> often at night.
                </li>
                <li>
                  <strong>Braxton Hicks contractions:</strong> irregular,
                  painless tightening that starts later in this trimester.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Causes That Need a Check
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Urinary or kidney infection:</strong> back pain with
                  fever or burning urine.
                </li>
                <li>
                  <strong>Preterm labour:</strong> regular tightening with
                  backache or pelvic pressure.
                </li>
                <li>
                  <strong>Cervical weakness:</strong> pressure and spotting
                  without much pain.
                </li>
                <li>
                  <strong>Fibroid degeneration:</strong> pain in a woman known
                  to have fibroids.
                </li>
                <li>
                  <strong>Appendicitis or gallstones:</strong> less common, but
                  they can cause upper or right-sided pain.
                </li>
                <li>
                  <strong>Injury or fall.</strong>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pain in the Third Trimester (Weeks 28–40)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common and Usually Harmless Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pelvic girdle pain:</strong> aching in the pubic bone,
                  hips or lower back as joints loosen.
                </li>
                <li>
                  <strong>Braxton Hicks contractions:</strong> irregular, come
                  and go, and ease with rest or water.
                </li>
                <li>
                  <strong>Baby&apos;s kicks</strong> or head pressing on the
                  pelvis or ribs.
                </li>
                <li>
                  <strong>Heartburn and indigestion.</strong>
                </li>
                <li>
                  <strong>Swelling and leg pain.</strong>
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Causes That Need a Check
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Labour:</strong> regular, stronger contractions that
                  get closer together.
                </li>
                <li>
                  <strong>Placental abruption:</strong> constant, severe pain,
                  hard belly, with or without bleeding, an emergency.
                </li>
                <li>
                  <strong>Pre-eclampsia:</strong> pain in the upper right
                  abdomen or under the ribs, with headache, blurred vision or
                  swelling.
                </li>
                <li>
                  <strong>Uterine rupture (rare):</strong> sudden severe pain,
                  mainly in women with a previous C-section scar.
                </li>
                <li>
                  <strong>Urinary infection.</strong>
                </li>
                <li>
                  <strong>Deep vein thrombosis:</strong> pain, redness and
                  swelling in one calf, which needs urgent care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Braxton Hicks vs Real Labour
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-left text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Feature
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Braxton Hicks
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        True Labour
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        Pattern
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Irregular
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Regular, closer together
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        Intensity
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Stays mild
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Gets stronger
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        Effect of rest or water
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Often eases
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Does not ease
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        Location
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Front of belly
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Back and belly, in waves
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        Cervix
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        No change
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Opens gradually
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-gray-700">
                If you are before 37 weeks and having regular contractions,
                contact your doctor immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Back Pain in Pregnancy
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Very common, affecting many pregnant women.
                </li>
                <li>
                  Caused by the growing belly, loosened ligaments and posture
                  changes.
                </li>
                <li>
                  Often worse at the end of the day or after long standing.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ways to Ease It
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sit with proper back support and avoid slouching.
                </li>
                <li>
                  Sleep on your side with a pillow between your knees.
                </li>
                <li>
                  Wear comfortable, flat or low-heeled footwear.
                </li>
                <li>
                  Apply a warm (not hot) compress to the back.
                </li>
                <li>
                  Do gentle exercises or stretches approved by your doctor.
                </li>
                <li>
                  Consider a maternity support belt if advised.
                </li>
                <li>
                  Avoid lifting heavy weights and bend from the knees.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                See your doctor if the back pain is severe, rhythmic like
                contractions, or comes with fever, bleeding or burning urine.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pelvic and Hip Pain (Pelvic Girdle Pain)
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Feels like aching or sharp pain at the pubic bone, hips or
                  lower back.
                </li>
                <li>
                  Worse when walking, climbing stairs, turning in bed or
                  standing on one leg.
                </li>
                <li>
                  Caused by hormones that loosen the pelvic joints.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Helpful Steps
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Take shorter steps and avoid long walks.</li>
                <li>
                  Keep your knees together when getting in and out of bed or a
                  car.
                </li>
                <li>Sit down to dress.</li>
                <li>Avoid crossing legs.</li>
                <li>
                  Ask your doctor about a physiotherapist experienced in
                  pregnancy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Round Ligament Pain
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sharp, stabbing pain on the side of the lower belly.
                </li>
                <li>Usually lasts only a few seconds.</li>
                <li>
                  Triggered by sudden movement, coughing or getting up quickly.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Relief
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Move slowly when changing position.</li>
                <li>Bend forward slightly when sneezing or coughing.</li>
                <li>Rest and use a warm compress.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Tell your doctor if the pain is severe, constant or comes with
                fever, bleeding or vomiting.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Leg Cramps and Calf Pain
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Leg cramps at night are common in the second and third
                  trimesters.
                </li>
                <li>
                  Gentle stretching before bed, walking and staying hydrated can
                  help.
                </li>
                <li>
                  Your doctor may check calcium, magnesium and other levels.
                </li>
              </ul>

              <p className="text-gray-700">
                <strong>Urgent warning:</strong> pain, warmth, redness or
                swelling in one calf only could be a blood clot, so get help
                immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Go to the Hospital or Call Immediately
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe or constant abdominal pain.</li>
                <li>Pain with vaginal bleeding.</li>
                <li>Leaking fluid or a sudden gush of water.</li>
                <li>Reduced or absent baby movements.</li>
                <li>Regular contractions before 37 weeks.</li>
                <li>
                  Severe headache, blurred vision or sudden swelling of face and
                  hands.
                </li>
                <li>Pain under the right ribs with nausea.</li>
                <li>Fever, chills or burning urine.</li>
                <li>One-sided abdominal pain with dizziness or fainting.</li>
                <li>Pain, swelling or redness in one leg.</li>
                <li>Pain after a fall or blow to the belly.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                For heavy bleeding or intense pain, go to the nearest hospital
                emergency first, then inform your doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Cause of Pain Is Found
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: History
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Where the pain is, when it began and how it feels.
                </li>
                <li>
                  Whether it comes in waves or is constant.
                </li>
                <li>
                  Bleeding, discharge, fever, urinary symptoms and baby
                  movements.
                </li>
                <li>
                  Weeks of pregnancy and any past pregnancy problems.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pulse, blood pressure and temperature.</li>
                <li>Abdominal examination.</li>
                <li>
                  Speculum or internal examination only when safe.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Ultrasound
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Checks the baby&apos;s heartbeat, growth and position.
                </li>
                <li>
                  Looks at the placenta, fluid level and cervical length.
                </li>
                <li>
                  3D/4D imaging gives extra detail when needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Urine test for infection.</li>
                <li>
                  Blood tests, including haemoglobin and infection markers.
                </li>
                <li>
                  Blood pressure and protein checks for pre-eclampsia.
                </li>
                <li>
                  Doppler or fetal monitoring in later pregnancy when required.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment and Care
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends entirely on the cause.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Muscle, ligament and posture pain:</strong> rest, safe
                  exercises, support belts and physiotherapy.
                </li>
                <li>
                  <strong>Constipation and gas:</strong> more fibre, fluids and
                  gentle walking.
                </li>
                <li>
                  <strong>Urinary infection:</strong> antibiotics safe for
                  pregnancy.
                </li>
                <li>
                  <strong>Threatened miscarriage:</strong> rest, monitoring and
                  follow-up scans.
                </li>
                <li>
                  <strong>Ectopic pregnancy:</strong> emergency treatment.
                </li>
                <li>
                  <strong>Preterm labour:</strong> admission, monitoring and
                  medicines to protect the baby.
                </li>
                <li>
                  <strong>Placental problems:</strong> close monitoring and
                  planned delivery when needed.
                </li>
                <li>
                  <strong>Pre-eclampsia:</strong> blood pressure control and
                  monitoring, with delivery planned if required.
                </li>
                <li>
                  <strong>Labour:</strong> supportive care and pain relief
                  options.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Comfort Tips for Everyday Pregnancy Aches
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Rest when you feel tired, and change position often.
                </li>
                <li>Wear comfortable footwear and loose clothes.</li>
                <li>
                  Sleep on your left or right side with pillows for support.
                </li>
                <li>
                  Eat small, frequent meals and avoid overeating.
                </li>
                <li>Drink enough water.</li>
                <li>Walk gently and stretch as your doctor advises.</li>
                <li>Practise breathing and relaxation.</li>
                <li>
                  Avoid standing or sitting in one position for too long.
                </li>
                <li>
                  Ask family for help with heavy household tasks.
                </li>
                <li>Keep all antenatal check-ups.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Pain in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> All pain in pregnancy is normal.{" "}
                  <strong>Fact:</strong> Mild aches are common, but severe or
                  persistent pain needs a check.
                </li>
                <li>
                  <strong>Myth:</strong> Taking any painkiller is fine.{" "}
                  <strong>Fact:</strong> Some painkillers can harm the baby, so
                  always ask your doctor.
                </li>
                <li>
                  <strong>Myth:</strong> Pain means the baby is in trouble.{" "}
                  <strong>Fact:</strong> Many pains are harmless, but only an
                  examination can tell.
                </li>
                <li>
                  <strong>Myth:</strong> Lying flat all day prevents problems.{" "}
                  <strong>Fact:</strong> Gentle activity is usually good unless
                  your doctor advises rest.
                </li>
                <li>
                  <strong>Myth:</strong> Back pain means a boy or girl.{" "}
                  <strong>Fact:</strong> Back pain has nothing to do with the
                  baby&apos;s gender.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation about your pain.
                </li>
                <li>
                  A quick check of your vital signs and belly.
                </li>
                <li>An ultrasound and tests as needed.</li>
                <li>
                  A clear explanation of the cause and what to do.
                </li>
                <li>
                  A plan for follow-up and warning signs to watch for.
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
