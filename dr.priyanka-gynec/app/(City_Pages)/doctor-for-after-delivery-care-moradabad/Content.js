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

export default function DoctorForAfterDeliveryCareMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for after delivery care in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri provides postnatal care in Moradabad.",
    },
    {
      q: "When should I have my postnatal check-up?",
      a: "Usually within the first week after discharge and again at about 6 weeks.",
    },
    {
      q: "How long does bleeding last after delivery?",
      a: "Usually 4–6 weeks, gradually reducing and changing colour.",
    },
    {
      q: "When is bleeding a problem?",
      a: "If you soak a pad in an hour, pass large clots or notice a foul smell.",
    },
    {
      q: "How do I care for C-section stitches?",
      a: "Keep the wound clean and dry, support the belly and avoid heavy lifting.",
    },
    {
      q: "Is it normal to feel sad after delivery?",
      a: "Mild baby blues are common. Sadness beyond two weeks needs medical help.",
    },
    {
      q: "Can I get pregnant while breastfeeding?",
      a: "Yes. Discuss contraception with your doctor.",
    },
    {
      q: "When can I resume intimacy?",
      a: "Usually after about 6 weeks, when you feel ready and your doctor confirms healing.",
    },
    {
      q: "What foods help recovery?",
      a: "Balanced meals with protein, iron, calcium, fibre and plenty of fluids.",
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
                Doctor for After Delivery Care in Moradabad: Recovery, Feeding &
                Check-Ups for New Mothers
              </h1>

              <p className="mb-4 text-gray-700">
                The baby is born, the family is celebrating, and every visitor
                asks about the little one. In all this joy, the new mother often
                gets forgotten. She may be sore, exhausted, sleepless and
                worried, yet she is told to &quot;just rest&quot; and manage.
              </p>

              <p className="mb-4 text-gray-700">
                Please remember: the weeks after delivery are as important as
                the months before it. Your body has been through a major event,
                whether a normal delivery or a C-section. Proper postnatal care
                helps you heal, protects you from complications, supports
                breastfeeding and looks after your emotional health.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what to expect in the first weeks after
                delivery, how to care for yourself, which warning signs matter
                and how to consult Dr. Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Postnatal (After Delivery) Care?
              </h2>

              <p className="mb-4 text-gray-700">
                Postnatal care covers the time from delivery up to about 6
                weeks, and often longer. It includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Checking your recovery from a normal delivery or C-section.
                </li>
                <li>Monitoring bleeding, stitches and wounds.</li>
                <li>Guiding you on nutrition, rest and gentle activity.</li>
                <li>Supporting breastfeeding.</li>
                <li>
                  Screening for infection, anaemia and high blood pressure.
                </li>
                <li>Looking after your emotional health.</li>
                <li>Advising on contraception and future pregnancy.</li>
                <li>Linking you with newborn check-ups and vaccinations.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Postnatal Care Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some complications appear after you go home, such as
                  infection, heavy bleeding or high blood pressure.
                </li>
                <li>
                  Anaemia is common after childbirth and slows recovery.
                </li>
                <li>
                  Breastfeeding problems are easier to solve early.
                </li>
                <li>Emotional changes need attention and kindness.</li>
                <li>Pelvic floor health affects comfort for years.</li>
                <li>
                  Planning the next pregnancy protects your body and your baby.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After a Normal Delivery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Is Normal
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Vaginal bleeding (lochia):</strong> heavy and red at
                  first, gradually turning pink, brown and then yellowish-white
                  over 4–6 weeks.
                </li>
                <li>
                  <strong>Afterpains:</strong> cramping as the uterus shrinks,
                  especially during breastfeeding.
                </li>
                <li>
                  <strong>Soreness or stitches:</strong> if you had a tear or
                  episiotomy, it usually heals in 2–3 weeks.
                </li>
                <li>
                  <strong>Swollen breasts:</strong> milk usually comes in on
                  days 2–5.
                </li>
                <li>
                  <strong>Night sweats and hair fall:</strong> hormonal, and
                  they settle with time.
                </li>
                <li>
                  <strong>Constipation and haemorrhoids:</strong> common in the
                  first weeks.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How to Care for Yourself
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Keep the perineal area clean and dry, washing with clean water
                  after passing urine or stools.
                </li>
                <li>Change pads frequently.</li>
                <li>Sit on a soft cushion if stitches are sore.</li>
                <li>
                  Use warm water sitz baths if your doctor advises.
                </li>
                <li>Walk gently to boost circulation.</li>
                <li>Eat fibre-rich food and drink plenty of fluids.</li>
                <li>
                  Take prescribed iron, calcium and painkillers as directed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After a C-Section
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Is Normal
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Wound soreness that eases over the first weeks.
                </li>
                <li>
                  Bleeding and afterpains similar to normal delivery.
                </li>
                <li>Numbness or itching near the scar.</li>
                <li>
                  Tiredness, which is greater than after a normal delivery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How to Care for Yourself
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Keep the wound clean and dry, as advised by your doctor.
                </li>
                <li>
                  Support your belly with a pillow when coughing, laughing or
                  getting up.
                </li>
                <li>
                  Avoid lifting anything heavier than your baby for the first
                  weeks.
                </li>
                <li>Do not drive until your doctor allows.</li>
                <li>Walk short distances several times a day.</li>
                <li>Take your medicines on time.</li>
                <li>
                  Watch the wound for redness, swelling, pus or opening.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bleeding After Delivery: What Is Normal and What Is Not
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding that gradually reduces day by day.</li>
                <li>Small clots, no larger than a plum.</li>
                <li>Colour changing from red to brown and then pale.</li>
                <li>Mild odour, like a period.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Not normal (call your doctor)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Soaking a pad in one hour.</li>
                <li>Passing large clots.</li>
                <li>
                  Bleeding that suddenly increases after it had reduced.
                </li>
                <li>Foul-smelling discharge.</li>
                <li>
                  Bleeding along with fever or severe lower abdominal pain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Get Help Immediately
              </h2>

              <p className="mb-4 text-gray-700">
                Go to the hospital or call your doctor at once if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy bleeding, or soaking a pad within an hour.
                </li>
                <li>Fever above 38°C (100.4°F) or chills.</li>
                <li>Foul-smelling vaginal discharge.</li>
                <li>Severe abdominal pain.</li>
                <li>Wound redness, swelling, pus or opening.</li>
                <li>Pain, swelling or redness in one leg.</li>
                <li>Chest pain or breathlessness.</li>
                <li>
                  Severe headache, blurred vision or swelling of face and hands.
                </li>
                <li>Fits or fainting.</li>
                <li>
                  Painful, red, hard area in the breast with fever.
                </li>
                <li>
                  Difficulty passing urine, or burning urine.
                </li>
                <li>
                  Thoughts of harming yourself or your baby.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Some of these can point to serious conditions such as infection,
                blood clots or postpartum high blood pressure, which are
                treatable when caught early.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Nutrition for the New Mother
              </h2>

              <p className="mb-4 text-gray-700">
                Good food helps you heal and supports breastfeeding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat regular, balanced meals with dal, vegetables, fruit, curd,
                  milk and whole grains.
                </li>
                <li>
                  Include protein such as dal, paneer, eggs (if you eat them),
                  sprouts and nuts.
                </li>
                <li>
                  Add iron-rich foods: spinach, beetroot, dates, jaggery and
                  pomegranate.
                </li>
                <li>
                  Take calcium-rich foods: milk, curd, paneer and ragi.
                </li>
                <li>
                  Drink plenty of water and other fluids, especially while
                  breastfeeding.
                </li>
                <li>Eat fibre to prevent constipation.</li>
                <li>
                  Have healthy fats such as ghee, nuts and seeds in moderation.
                </li>
                <li>Take prescribed supplements of iron, calcium and vitamins.</li>
                <li>
                  Avoid crash diets, as they slow recovery and can reduce milk
                  supply.
                </li>
                <li>Limit caffeine, and avoid tobacco and alcohol.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Traditional foods are usually fine when balanced, but check with
                your doctor if you are unsure, especially with diabetes, high
                blood pressure or a C-section.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Breastfeeding Support
              </h2>

              <p className="mb-4 text-gray-700">
                Breast milk is the best food for a newborn, but it can take
                practice.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Helpful Tips
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Start early, ideally within the first hour after birth if you
                  and your baby are well.
                </li>
                <li>
                  Feed on demand, about 8–12 times in 24 hours.
                </li>
                <li>
                  Ensure a good latch: the baby&apos;s mouth should cover most
                  of the areola.
                </li>
                <li>
                  Try different positions, such as side-lying or football hold
                  after a C-section.
                </li>
                <li>Keep yourself hydrated and rested.</li>
                <li>
                  Wash your hands before feeding and keep the nipples clean.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Problems
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Sore or cracked nipples:</strong> usually caused by a
                  shallow latch, so ask for help.
                </li>
                <li>
                  <strong>Engorgement:</strong> warm compress before feeding and
                  gentle expression.
                </li>
                <li>
                  <strong>Blocked duct or mastitis:</strong> a red, painful,
                  hard area with fever needs prompt medical care.
                </li>
                <li>
                  <strong>Feeling of low milk:</strong> a hungry, unsettled baby
                  is common early on, so ask for advice before giving other
                  feeds.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor and paediatric team can guide you if feeding is
                difficult.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Health After Delivery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Baby Blues
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Affects many new mothers in the first 1–2 weeks.
                </li>
                <li>
                  Tearfulness, mood swings, anxiety and feeling overwhelmed.
                </li>
                <li>Usually settles by itself with rest and support.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Postpartum Depression
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lasts more than two weeks or is more intense.
                </li>
                <li>
                  Signs include persistent sadness, loss of interest, guilt,
                  irritability, difficulty bonding with the baby, changes in
                  sleep and appetite, or feeling hopeless.
                </li>
                <li>It is a medical condition, not weakness.</li>
                <li>
                  It is treatable with counselling, support and sometimes
                  medicines.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Helps
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Talk openly to your husband, family or doctor.
                </li>
                <li>Accept help with the baby and household tasks.</li>
                <li>Sleep when the baby sleeps.</li>
                <li>Take short walks in daylight.</li>
                <li>Do not compare your journey with others.</li>
                <li>
                  Seek help urgently if you have thoughts of harming yourself or
                  your baby.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pelvic Floor and Body Recovery
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pelvic floor exercises (Kegels):</strong> tighten the
                  muscles you use to stop urine, hold for a few seconds, then
                  release.
                </li>
                <li>
                  Start gently once your doctor says it is safe.
                </li>
                <li>
                  Helps prevent leaking of urine and supports the pelvic organs.
                </li>
                <li>
                  <strong>Diastasis recti</strong> (separation of belly muscles)
                  is common and often improves with time.
                </li>
                <li>
                  Avoid crunches and heavy lifting until cleared by your doctor.
                </li>
                <li>
                  Return to exercise gradually, beginning with walking.
                </li>
              </ul>

              <p className="text-gray-700">
                Tell your doctor if you have leaking urine, a feeling of
                heaviness in the vagina, or pain that does not improve.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contraception and Planning the Next Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Breastfeeding is not a reliable contraceptive on its own.
                </li>
                <li>
                  You can become pregnant again before your first period
                  returns.
                </li>
                <li>
                  Options may include condoms, hormonal methods suitable for
                  breastfeeding, copper IUD or permanent methods.
                </li>
                <li>
                  A gap of at least 18–24 months between pregnancies is
                  generally advised for the mother&apos;s recovery.
                </li>
                <li>Discuss your choice at your postnatal visit.</li>
                <li>
                  Permanent options such as laparoscopic sterilization are
                  available for women who have completed their family.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Resuming Married Life
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most doctors suggest waiting until about 6 weeks and until
                  bleeding has settled and you feel ready.
                </li>
                <li>
                  After stitches or a C-section, wait until your doctor confirms
                  healing.
                </li>
                <li>
                  Vaginal dryness is common while breastfeeding, and a
                  water-based lubricant can help.
                </li>
                <li>
                  Talk openly with your partner about tiredness and comfort.
                </li>
                <li>
                  Use contraception unless you are planning another pregnancy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Postnatal Check-Up Schedule
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Within the first week after discharge:</strong> wound,
                  bleeding, blood pressure, feeding and general health.
                </li>
                <li>
                  <strong>Around 6 weeks:</strong> full postnatal examination,
                  including uterus size, stitches or scar, blood pressure,
                  weight and mood.
                </li>
                <li>
                  <strong>Blood tests:</strong> haemoglobin and others if you
                  had anaemia, diabetes or high blood pressure.
                </li>
                <li>
                  Family planning advice and long-term health planning.
                </li>
                <li>
                  Extra visits if you had a complicated pregnancy, C-section or
                  infection.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your baby also needs check-ups: weighing, feeding review,
                jaundice check and vaccinations as scheduled by the paediatrician.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri for After Delivery Care in
                Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, patient-first care and a focus on safe motherhood,
                covering both antenatal and postnatal care.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Continuity of care:</strong> the team that looked
                  after your pregnancy follows you after delivery.
                </li>
                <li>
                  <strong>Kind, unhurried consultations:</strong> you can share
                  worries about your body, feeding and mood.
                </li>
                <li>
                  <strong>Full check-up:</strong> wound or stitches, bleeding,
                  blood pressure and anaemia.
                </li>
                <li>
                  <strong>Advanced ultrasound:</strong> 3D/4D imaging is
                  available if a scan is needed.
                </li>
                <li>
                  <strong>Family planning guidance:</strong> including
                  reversible and permanent options.
                </li>
                <li>
                  <strong>Newborn support:</strong> the clinic offers paediatric
                  consultations and vaccinations.
                </li>
                <li>
                  <strong>Support for high-risk mothers:</strong> closer
                  follow-up if you had diabetes, high blood pressure or
                  complications.
                </li>
                <li>
                  <strong>Location:</strong> A2, near Old Roadways, Gandhi
                  Nagar, Moradabad.
                </li>
                <li>
                  <strong>Easy booking:</strong> call, WhatsApp or email.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About After Delivery Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> New mothers should stay in bed for
                  weeks. <strong>Fact:</strong> Rest is important, but gentle
                  walking helps healing and prevents clots.
                </li>
                <li>
                  <strong>Myth:</strong> Eating very little helps you lose
                  weight and heal. <strong>Fact:</strong> Good nutrition speeds
                  recovery and supports milk.
                </li>
                <li>
                  <strong>Myth:</strong> You cannot get pregnant while
                  breastfeeding. <strong>Fact:</strong> You can, so plan
                  contraception.
                </li>
                <li>
                  <strong>Myth:</strong> Feeling sad after delivery is just
                  weakness. <strong>Fact:</strong> Postpartum mood problems are
                  common and treatable.
                </li>
                <li>
                  <strong>Myth:</strong> A bath or hair wash after delivery is
                  harmful. <strong>Fact:</strong> Regular hygiene is safe and
                  helps prevent infection.
                </li>
                <li>
                  <strong>Myth:</strong> If you feel fine, you can skip the
                  6-week check-up. <strong>Fact:</strong> Some problems do not
                  cause symptoms early, so the check-up matters.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Postnatal Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation about how you are feeling.
                </li>
                <li>
                  Questions about bleeding, pain, feeding, sleep and mood.
                </li>
                <li>
                  Examination of your blood pressure, wound or stitches and
                  belly.
                </li>
                <li>Tests or scans if needed.</li>
                <li>
                  Advice on food, exercise, contraception and future planning.
                </li>
                <li>Time to ask any question, big or small.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Postnatal Check-Up with Dr. Priyanka Pachauri
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
