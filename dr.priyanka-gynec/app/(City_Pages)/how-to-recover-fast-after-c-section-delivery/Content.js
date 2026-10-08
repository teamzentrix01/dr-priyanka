import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function DeliverySpecialistMoradabad() {
  const faqs = [
    {
      q: "How long does it take to recover fully after a C-section?",
      a: "Most women feel much better in 6 to 8 weeks, while full strength can take 3 to 6 months.",
    },
    {
      q: "When can I start walking after a C-section?",
      a: "Usually within 12 to 24 hours, with support, as advised by your doctor.",
    },
    {
      q: "What foods help the C-section wound heal faster?",
      a: "Protein, iron, vitamin C, fiber and plenty of fluids support healing.",
    },
    {
      q: "When can I lift heavy things after a C-section?",
      a: "Avoid lifting anything heavier than your baby for about 6 to 8 weeks.",
    },
    {
      q: "Can I breastfeed normally after a C-section?",
      a: "Yes. Use comfortable positions like the football hold or side-lying to protect the incision.",
    },
    {
      q: "When can I take a bath and clean the incision?",
      a: "You can usually shower gently once your doctor allows. Avoid soaking in a tub until cleared.",
    },
    {
      q: "When can I drive after a C-section?",
      a: "Usually after about 2 weeks, once you can brake without pain and your doctor approves.",
    },
    {
      q: "When can I exercise after a C-section?",
      a: "Gentle walking early on, and structured exercise only after your 6-week check-up and doctor approval.",
    },
    {
      q: "When should I worry about my C-section wound?",
      a: "Call your doctor for fever, pus, increasing redness, a foul smell or wound opening.",
    },
    {
      q: "How soon can I plan another pregnancy?",
      a: "Doctors generally advise waiting about 18 months so the uterus can heal well.",
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
                How to Recover Fast After C-Section Delivery: A Complete Guide
                for New Mothers
              </h1>

              <p className="mb-4 text-gray-700">
                Welcome to motherhood! A cesarean delivery (C-section) is a
                major abdominal surgery, and also the moment you meet your baby.
                While you cuddle and feed your newborn, your body is healing
                from surgery at the same time. That is why recovery after a
                C-section needs patience, planning and proper medical guidance.
              </p>

              <p className="mb-4 text-gray-700">
                The good news is that you can speed up healing with the right
                habits. This guide explains how to recover fast after a
                C-section, in simple steps you can follow at home.
              </p>

              <p className="mb-4 text-gray-700">
                <strong>What you will learn in this article:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What to expect in the hospital and in the first week
                </li>
                <li>Wound and scar care</li>
                <li>Pain relief, diet and hydration</li>
                <li>Safe movement and exercise</li>
                <li>Breastfeeding comfort</li>
                <li>Emotional health</li>
                <li>Warning signs that need urgent attention</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Long Does C-Section Recovery Take?
              </h2>

              <p className="mb-4 text-gray-700">
                Every woman heals at her own pace, but these are the general
                timelines:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hospital stay:</strong> usually 2 to 4 days, depending
                  on your health and the baby&apos;s condition
                </li>
                <li>
                  <strong>First 2 weeks:</strong> the most tender phase, with
                  pain, tiredness and limited movement
                </li>
                <li>
                  <strong>6 to 8 weeks:</strong> the incision and uterus heal
                  substantially, and most women return to normal routines
                </li>
                <li>
                  <strong>3 to 6 months:</strong> full strength, stamina and
                  core muscle recovery
                </li>
                <li>
                  <strong>Up to 12 months:</strong> the scar continues to fade
                  and soften
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Important:</strong> &quot;Fast recovery&quot; does not
                mean rushing. It means giving your body the right support so
                that it heals smoothly and without complications.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect in the First 24 to 48 Hours
              </h2>

              <p className="mb-4 text-gray-700">
                The first two days set the tone for your recovery. Here is what
                usually happens:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You will have an IV line for fluids and medicines.
                </li>
                <li>
                  A urinary catheter is typically removed within about 12 to 24
                  hours.
                </li>
                <li>
                  You may feel numbness, itching or nausea as anesthesia wears
                  off.
                </li>
                <li>
                  Your nurse will check your bleeding, blood pressure, wound and
                  pain level.
                </li>
                <li>
                  You will be encouraged to sit up and take your first steps
                  with support.
                </li>
                <li>
                  You may be allowed sips of water first, then light food, as
                  advised by your doctor.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Tip:</strong> Do not hesitate to ask the nurse for help
                when getting out of bed. Taking support is safer than struggling
                alone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                1. Start Gentle Movement Early (Under Medical Guidance)
              </h2>

              <p className="mb-4 text-gray-700">
                Many mothers are surprised to hear it, but moving early is one
                of the best things for recovery. Doctors usually encourage the
                first assisted walk within 12 to 24 hours after surgery.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of early walking:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reduces the risk of blood clots in the legs</li>
                <li>
                  Improves blood circulation and speeds up wound healing
                </li>
                <li>Helps your bowels start working sooner</li>
                <li>Reduces gas pain and bloating</li>
                <li>Prevents stiffness and boosts mood</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How to move safely:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Roll onto your side first, then push yourself up with your
                  arms to sit.
                </li>
                <li>
                  Keep a pillow pressed over your incision when you stand, cough
                  or laugh.
                </li>
                <li>
                  Begin with a few steps around the room, then increase
                  gradually.
                </li>
                <li>
                  Walk 5 to 10 minutes several times a day in the first week.
                </li>
                <li>
                  Stop and rest if you feel dizzy, breathless or feel strong
                  pain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                2. Manage Pain the Smart Way
              </h2>

              <p className="mb-4 text-gray-700">
                Pain control is not a luxury. When pain is under control, you
                can walk, feed your baby and rest better, and that makes you
                heal faster.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pain relief tips:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Take only the medicines prescribed by your gynaecologist, on
                  time and at the right dose.
                </li>
                <li>
                  Do not wait for pain to become severe before taking a dose.
                </li>
                <li>
                  Never take extra painkillers or home remedies without asking
                  your doctor, especially while breastfeeding.
                </li>
                <li>Use a pillow to support the abdomen during movement.</li>
                <li>Wear loose, soft clothing that does not rub on the wound.</li>
                <li>Change positions slowly to avoid sudden pulling pain.</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Gas pain is very common after surgery. These can help:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Short, frequent walks</li>
                <li>Warm (not hot) water sips</li>
                <li>Gentle position changes in bed</li>
                <li>
                  Avoiding gas-forming foods such as cabbage, carbonated drinks
                  and heavy fried food in the first days
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                3. Take Proper Care of the Incision (Wound Care)
              </h2>

              <p className="mb-4 text-gray-700">
                A clean, dry wound heals faster and avoids infection. Follow
                your doctor&apos;s specific dressing instructions first. In
                general:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Do&apos;s:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Keep the incision clean and dry.</li>
                <li>
                  Wash hands before touching the area or changing the dressing.
                </li>
                <li>Pat the wound dry gently after a bath. Do not rub.</li>
                <li>
                  Wear breathable cotton underwear with a high waist that does
                  not press on the scar.
                </li>
                <li>
                  Check the wound daily for redness, swelling or discharge.
                </li>
                <li>
                  Attend your stitch or wound review on the date given.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Don&apos;ts:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Do not scratch, pick or pull at the stitches or skin glue.
                </li>
                <li>
                  Do not apply creams, oils, turmeric or powders on the fresh
                  wound unless advised.
                </li>
                <li>
                  Do not soak in a bathtub, pool or tub until your doctor
                  permits.
                </li>
                <li>
                  Do not wear tight belts or waistbands over the incision.
                </li>
              </ul>

              <p className="text-gray-700">
                <strong>Abdominal binders:</strong> Some women find a belt
                comforting. Use one only if your doctor approves and wear it as
                directed, since improper use can cause discomfort or skin
                problems.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                4. Eat Well: The Best Diet for C-Section Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                Your body needs extra nutrition to repair tissue and to produce
                breast milk. Good food is real medicine at this stage.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods that support healing:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Protein:</strong> dal, eggs, paneer, curd, milk, fish,
                  chicken, soy and sprouts for tissue repair
                </li>
                <li>
                  <strong>Iron-rich foods:</strong> spinach, beetroot, jaggery,
                  dates, pomegranate and lean meat to rebuild blood lost during
                  surgery
                </li>
                <li>
                  <strong>Vitamin C:</strong> oranges, amla, guava, lemon and
                  tomatoes to improve iron absorption and wound healing
                </li>
                <li>
                  <strong>Fiber:</strong> oats, fruits, vegetables, whole grains
                  and salads to prevent constipation
                </li>
                <li>
                  <strong>Healthy fats:</strong> nuts, seeds, a little desi ghee
                  and olive oil
                </li>
                <li>
                  <strong>Calcium:</strong> milk, curd, paneer and ragi for bone
                  strength and milk production
                </li>
                <li>
                  <strong>Zinc:</strong> pumpkin seeds, whole grains and legumes
                  to support skin healing
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to limit:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Deep-fried and very spicy foods</li>
                <li>Packaged snacks and sugary drinks</li>
                <li>Excess tea and coffee</li>
                <li>Raw or unhygienic street food</li>
                <li>
                  Anything your baby seems sensitive to while you breastfeed
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Eating tips:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat small, frequent meals every 2 to 3 hours instead of three
                  heavy ones.
                </li>
                <li>
                  Start light (khichdi, soups, porridge) and build up to normal
                  meals.
                </li>
                <li>
                  Ask your doctor about continuing iron, calcium and vitamin
                  supplements.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                5. Drink Plenty of Fluids
              </h2>

              <p className="mb-4 text-gray-700">
                Hydration helps wound healing, prevents constipation and
                increases breast milk supply.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hydration checklist:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aim for roughly 8 to 10 glasses of fluids a day, or as your
                  doctor advises.
                </li>
                <li>
                  Include water, coconut water, buttermilk, soups, dal water and
                  fresh juices.
                </li>
                <li>
                  Keep a water bottle next to your bed and feeding spot.
                </li>
                <li>
                  Pale yellow urine is a good sign that you are well hydrated.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                6. Prevent and Treat Constipation
              </h2>

              <p className="mb-4 text-gray-700">
                Surgery, pain medicines and iron supplements can all make
                constipation worse, and straining hurts. Prevent it early:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Eat high-fiber foods daily.</li>
                <li>Drink enough water.</li>
                <li>Walk regularly.</li>
                <li>
                  Ask your doctor about a safe stool softener if needed.
                </li>
                <li>
                  Do not strain. Support your abdomen with a pillow if you must
                  push.
                </li>
                <li>Do not skip the urge to go.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                7. Rest Smartly and Sleep When the Baby Sleeps
              </h2>

              <p className="mb-4 text-gray-700">
                A newborn disrupts sleep, but rest is when your body does much
                of its repair work.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Practical rest tips:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Nap when the baby naps, even for 20 minutes.
                </li>
                <li>
                  Accept help from your husband, mother, mother-in-law or a
                  caregiver.
                </li>
                <li>
                  Share night duties where possible, for example expressed milk
                  feeds by someone else.
                </li>
                <li>Keep visitors limited in the first two weeks.</li>
                <li>
                  Set up a &quot;recovery station&quot; with water, snacks,
                  diapers, wipes and phone within reach.
                </li>
                <li>
                  Sleep with a pillow supporting your abdomen or between your
                  knees.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                8. Lifting, Driving and Daily Activities
              </h2>

              <p className="mb-4 text-gray-700">
                Overdoing it is the most common reason for slow healing. Here
                are general guidelines (your doctor&apos;s advice always comes
                first):
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Lifting:</strong> Avoid lifting anything heavier than
                  your baby for about 6 to 8 weeks. No heavy buckets, grocery
                  bags or older children.
                </li>
                <li>
                  <strong>Stairs:</strong> Use them slowly and sparingly in the
                  first couple of weeks.
                </li>
                <li>
                  <strong>Driving:</strong> Wait until you can press the brake
                  suddenly without pain and you are off strong painkillers,
                  usually around 2 weeks or more, subject to your doctor&apos;s
                  approval.
                </li>
                <li>
                  <strong>Household work:</strong> Skip heavy chores such as
                  sweeping, mopping, and carrying heavy utensils for several
                  weeks.
                </li>
                <li>
                  <strong>Sitting and standing:</strong> Avoid sitting or
                  standing for very long periods. Change positions often.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                9. Breastfeeding Comfort After a C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                Breastfeeding is possible and beneficial after a C-section. You
                only need positions that protect your incision.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Comfortable positions:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Football (clutch) hold:</strong> the baby is tucked
                  under your arm, away from the wound
                </li>
                <li>
                  <strong>Side-lying position:</strong> you lie on your side and
                  the baby faces you
                </li>
                <li>
                  <strong>Cradle hold with a pillow:</strong> a firm pillow acts
                  as a barrier between baby and incision
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Helpful tips:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Start breastfeeding as soon as you and the baby are stable.
                  Early feeding helps milk supply.
                </li>
                <li>Use extra pillows for arm and back support.</li>
                <li>
                  Ask the hospital lactation counselor or nurse for help with
                  latching.
                </li>
                <li>Stay hydrated and eat enough calories.</li>
                <li>
                  Check with your doctor before taking any medicine while
                  breastfeeding.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                10. Gentle Exercises for Faster Healing
              </h2>

              <p className="mb-4 text-gray-700">
                Exercise should be gradual and approved by your doctor. Do not
                begin core workouts until you are cleared.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In the first weeks (with doctor&apos;s approval):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Slow, deep abdominal breathing</li>
                <li>Short walks around the house</li>
                <li>Ankle pumps and gentle leg movements in bed</li>
                <li>Gentle pelvic tilts</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After about 6 to 8 weeks, once your doctor approves:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pelvic floor (Kegel) exercises</li>
                <li>
                  Low-impact walking, increasing distance each week
                </li>
                <li>
                  Light stretching or postnatal yoga under a trained instructor
                </li>
                <li>Gradual core strengthening</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Avoid for now:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Crunches, sit-ups and planks</li>
                <li>Heavy weight training</li>
                <li>High-impact workouts such as running or jumping</li>
                <li>
                  Any exercise that causes pain, pulling or bulging at the
                  incision
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                11. Scar Care and Healing
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your scar will gradually fade from red or pink to a pale line
                  over many months.
                </li>
                <li>
                  Keep the area clean and protected from direct sun.
                </li>
                <li>
                  Once fully healed and cleared by your doctor, gentle massage
                  with a moisturizer may soften the scar.
                </li>
                <li>
                  Silicone gel or sheets may help some women, if recommended.
                </li>
                <li>Do not apply harsh chemicals or unverified creams.</li>
                <li>
                  Report any scar that becomes thick, painful, or very itchy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                12. Take Care of Your Emotional Health
              </h2>

              <p className="mb-4 text-gray-700">
                Physical recovery is only half the story. Hormonal changes,
                exhaustion and lack of sleep can affect your mood.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Baby blues (common):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mood swings, crying spells and anxiety in the first 1 to 2
                  weeks
                </li>
                <li>They usually pass on their own with rest and support</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Postpartum depression (needs medical help):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Persistent sadness lasting more than two weeks
                </li>
                <li>Loss of interest in the baby or daily life</li>
                <li>Feeling hopeless, worthless or extremely anxious</li>
                <li>Trouble bonding with the baby</li>
                <li>Thoughts of harming yourself or the baby</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ways to support your mind:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk openly with family about how you feel.</li>
                <li>Don&apos;t compare your recovery or your body with others.</li>
                <li>Take short breaks outdoors if you feel up to it.</li>
                <li>
                  Seek professional help early. It is a medical condition, not a
                  weakness.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                13. Intimacy, Periods and Contraception
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most doctors advise waiting about 6 weeks, and until you are
                  examined and cleared, before resuming intercourse.
                </li>
                <li>
                  Bleeding (lochia) can last 4 to 6 weeks, getting lighter over
                  time.
                </li>
                <li>
                  Periods may return at different times, depending on whether
                  you are breastfeeding.
                </li>
                <li>
                  You can become pregnant even before your first period returns,
                  so discuss contraception at your postnatal check-up.
                </li>
                <li>
                  Doctors commonly recommend an interval of about 18 months or
                  more before the next pregnancy to let the uterine scar heal
                  properly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                      <p className="text-sm text-gray-700">
                        Fertility • Maternity • 3D Laparoscopy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone</p>
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
                Frequently Asked Questions (FAQ)
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