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

export default function DoctorForLowerBackPainWomenMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for lower back pain in women?",
      a: "A gynaecologist if the pain links to periods or pelvic symptoms. Dr. Priyanka Pachauri consults in Moradabad.",
    },
    {
      q: "Can a womb problem cause back pain?",
      a: "Yes. Endometriosis, fibroids, cysts and infections can all cause lower back pain.",
    },
    {
      q: "Why does my back hurt during periods?",
      a: "Uterine cramps can spread to the lower back. Severe pain needs a check-up.",
    },
    {
      q: "When is back pain an emergency?",
      a: "With fever, heavy bleeding, sudden severe pain, leg weakness or pain in pregnancy with bleeding.",
    },
    {
      q: "Can PCOS cause lower back pain?",
      a: "It can cause pelvic discomfort, especially with irregular or heavy periods.",
    },
    {
      q: "Is back pain in pregnancy normal?",
      a: "Mild pain is common, but severe pain or bleeding needs urgent care.",
    },
    {
      q: "Which test finds the cause?",
      a: "Usually a pelvic ultrasound, with blood, urine or spine tests as needed.",
    },
    {
      q: "Does menopause cause back pain?",
      a: "Bone loss after menopause can, so calcium, vitamin D and a bone check help.",
    },
    {
      q: "Can back pain be treated without surgery?",
      a: "Yes, in most cases, through medicines, exercise and lifestyle changes.",
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
                Doctor for Lower Back Pain in Women: Causes, Warning Signs &
                Treatment in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Almost every woman has had a backache at some point. Carrying
                children, sitting for long hours, doing household work and
                lifting heavy things all take a toll. So women often shrug off
                lower back pain, take a painkiller and carry on.
              </p>

              <p className="mb-4 text-gray-700">
                But when back pain keeps returning, gets worse around periods,
                or comes with pelvic pain, heavy bleeding or discharge, the
                cause may not be the spine at all. The uterus, ovaries and
                pelvic organs share nerves with the lower back, so a problem
                there can be felt as backache.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains the gynaecological and other causes of lower
                back pain in women, the warning signs, how the cause is found,
                and the treatment available. It also shows how to consult Dr.
                Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Can a Womb Problem Cause Back Pain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The uterus, ovaries and lower spine are supplied by nearby
                  nerves.
                </li>
                <li>
                  Pain from pelvic organs is often &quot;referred&quot; to the
                  lower back.
                </li>
                <li>
                  Swelling, growths or infection can press on back structures.
                </li>
                <li>
                  Hormonal changes can loosen ligaments and strain the spine.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                That is why the same back pain can have very different causes,
                and why a proper examination matters.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Gynaecological Causes of Lower Back Pain
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Painful Periods (Dysmenorrhea)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cramping in the lower belly often spreads to the lower back
                  and thighs.
                </li>
                <li>
                  Starts just before or with the period and settles in 2–3 days.
                </li>
                <li>
                  Severe or worsening pain needs a check for deeper causes.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tissue similar to the uterine lining grows outside the uterus.
                </li>
                <li>
                  Causes deep pelvic pain, back pain, painful intercourse and
                  difficulty conceiving.
                </li>
                <li>
                  Pain often worsens around periods.
                </li>
                <li>
                  Can be treated with medicines or 3D laparoscopic excision.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The uterine lining grows into the uterine wall.
                </li>
                <li>
                  Causes heavy, painful periods, a tender uterus and lower back
                  ache.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Non-cancerous growths in the uterus.
                </li>
                <li>
                  Large fibroids press on nearby structures.
                </li>
                <li>
                  Cause heavy bleeding, pelvic pressure, frequent urination and
                  back pain.
                </li>
                <li>
                  May be treated with monitoring, medicines or laparoscopic
                  myomectomy.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fluid-filled sacs on the ovary.
                </li>
                <li>
                  May cause one-sided lower abdominal and back pain.
                </li>
                <li>
                  A twisted or ruptured cyst causes sudden severe pain and is an
                  emergency.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Infection of the uterus, tubes and surrounding tissues.
                </li>
                <li>
                  Causes lower abdominal and back pain, fever and foul-smelling
                  discharge.
                </li>
                <li>
                  Needs prompt treatment to protect fertility.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Uterine or Vaginal Prolapse
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Weak pelvic muscles let the uterus slip down.
                </li>
                <li>
                  Causes a dragging feeling, heaviness and backache that
                  worsens by evening.
                </li>
                <li>
                  More common after several deliveries or after menopause.
                </li>
                <li>
                  Treated with exercises, support devices or surgery such as
                  sacrocolpopexy.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular periods can lead to heavy, painful bleeding after
                  long gaps.
                </li>
                <li>
                  May cause pelvic discomfort and back pain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Retroverted Uterus
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A tilted uterus, which is a normal variation for many women.
                </li>
                <li>
                  Sometimes linked with backache during periods or intercourse.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Pregnancy-Related Back Pain
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Common as the belly grows and hormones loosen the joints.
                </li>
                <li>
                  Sudden severe pain with bleeding needs urgent care.
                </li>
                <li>
                  Ectopic pregnancy can cause one-sided pain and back or
                  shoulder pain, and is an emergency.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Menopause and Bone Loss
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Falling oestrogen weakens bones.
                </li>
                <li>
                  Osteoporosis can cause chronic backache or even spinal
                  fractures.
                </li>
                <li>
                  Early evaluation and treatment protect bone health.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Gynaecological Cancers (Less Common)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Persistent back or pelvic pain with unusual bleeding, weight
                  loss or swelling should always be checked.
                </li>
                <li>
                  Early detection improves outcomes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Non-Gynaecological Causes of Lower Back Pain
              </h2>

              <p className="mb-4 text-gray-700">
                Not every backache comes from the pelvis. Common other causes
                include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Muscle strain and poor posture: long sitting, bending or
                  lifting.
                </li>
                <li>
                  Slipped disc or sciatica: pain that travels down the leg.
                </li>
                <li>Obesity: extra weight strains the spine.</li>
                <li>
                  Vitamin D and calcium deficiency: very common in Indian women.
                </li>
                <li>Anaemia and general weakness.</li>
                <li>
                  Urinary infection: back pain with burning urine and fever.
                </li>
                <li>
                  Kidney stones: severe pain on one side that spreads to the
                  groin.
                </li>
                <li>Arthritis and spondylosis.</li>
                <li>Stress and lack of exercise.</li>
                <li>Unsuitable mattress or footwear.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A gynaecologist can rule out pelvic causes and guide you to the
                right specialist if the cause lies elsewhere.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is It a Gynaecological Back Pain? Clues to Look For
              </h2>

              <p className="mb-4 text-gray-700">
                Your back pain may be linked to the pelvis if it comes with:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain that changes with your menstrual cycle.
                </li>
                <li>Heavy, painful or irregular periods.</li>
                <li>Lower abdominal pain or pressure.</li>
                <li>Pain during intercourse.</li>
                <li>Unusual vaginal discharge.</li>
                <li>Difficulty in conceiving.</li>
                <li>
                  A feeling of heaviness or something coming down.
                </li>
                <li>Frequent urination or constipation.</li>
                <li>Bloating or swelling in the lower belly.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                If your pain is mainly triggered by movement, bending or a
                particular posture, a spine or muscle cause is more likely.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flag Signs: Get Help Quickly
              </h2>

              <p className="mb-4 text-gray-700">
                Seek urgent care if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe back or pelvic pain.</li>
                <li>Back pain with fever, chills or foul discharge.</li>
                <li>Heavy vaginal bleeding.</li>
                <li>
                  Back pain during pregnancy with bleeding or leaking fluid.
                </li>
                <li>
                  Fainting, dizziness or a racing heartbeat.
                </li>
                <li>
                  Numbness, weakness in the legs, or trouble controlling urine
                  or stools.
                </li>
                <li>Severe pain after a fall.</li>
                <li>
                  Back pain with unexplained weight loss.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Gynaecologist?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Back pain lasts more than 2–3 weeks.</li>
                <li>It gets worse around your periods.</li>
                <li>
                  It comes with heavy bleeding, discharge or pelvic pain.
                </li>
                <li>
                  It does not improve with rest or simple painkillers.
                </li>
                <li>You are trying to conceive.</li>
                <li>You are pregnant and pain is severe or unusual.</li>
                <li>
                  You are near or past menopause and pain is new.
                </li>
                <li>
                  You have a family history of endometriosis, fibroids or
                  gynaecological cancers.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Cause of Back Pain Is Found
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed History
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  When the pain began and where exactly it is felt.
                </li>
                <li>
                  Link with periods, pregnancy, intercourse or activity.
                </li>
                <li>
                  Bleeding, discharge, fever and urinary symptoms.
                </li>
                <li>Past surgeries, deliveries and family history.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Posture and back movement.</li>
                <li>Abdominal examination for tenderness or lumps.</li>
                <li>Pelvic examination when appropriate.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Basic Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Haemoglobin for anaemia.</li>
                <li>Vitamin D and calcium levels.</li>
                <li>Urine test for infection.</li>
                <li>
                  Thyroid and hormone tests if periods are irregular.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Imaging
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic ultrasound, including 3D/4D where needed, to check the
                  uterus and ovaries.
                </li>
                <li>
                  X-ray or MRI of the spine if a spine cause is suspected.
                </li>
                <li>
                  Bone density test in women near or past menopause.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Advanced Procedures, If Needed
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diagnostic laparoscopy to look at the pelvis directly and
                  treat at the same time.
                </li>
                <li>Hysteroscopy for the uterine cavity.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause, so no single remedy suits
                everyone.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Gynaecological Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Period pain:</strong> pain relief medicines and
                  hormonal treatment.
                </li>
                <li>
                  <strong>Endometriosis and adenomyosis:</strong> hormonal
                  therapy or laparoscopic excision.
                </li>
                <li>
                  <strong>Fibroids:</strong> monitoring, medicines or
                  laparoscopic myomectomy.
                </li>
                <li>
                  <strong>Ovarian cysts:</strong> monitoring or laparoscopic
                  cystectomy.
                </li>
                <li>
                  <strong>PID:</strong> full course of antibiotics and follow-up.
                </li>
                <li>
                  <strong>Prolapse:</strong> pelvic floor exercises, support
                  devices or surgical repair.
                </li>
                <li>
                  <strong>PCOS:</strong> lifestyle changes and cycle regulation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Menopause and Bone Health
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Calcium, vitamin D and weight-bearing exercise.
                </li>
                <li>
                  Hormone or bone-protecting treatment where advised.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Muscle and Spine Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Physiotherapy and posture correction.</li>
                <li>
                  Referral to an orthopaedic specialist if needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of Keyhole Surgery, When Surgery Is Required
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Smaller cuts and less pain.</li>
                <li>Shorter hospital stay.</li>
                <li>Faster return to daily life.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Home Tips for Everyday Backache
              </h2>

              <p className="mb-4 text-gray-700">
                These help ordinary muscular backache and do not replace medical
                care for persistent pain.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Apply a hot water bag to the lower back.
                </li>
                <li>Walk gently and keep moving.</li>
                <li>
                  Sit with proper back support and avoid slouching.
                </li>
                <li>
                  Avoid lifting heavy weights, and bend from the knees.
                </li>
                <li>Do gentle stretches or yoga as advised.</li>
                <li>Sleep on a firm, supportive mattress.</li>
                <li>Wear comfortable footwear.</li>
                <li>Maintain a healthy weight.</li>
                <li>
                  Eat calcium-rich foods such as milk, curd, paneer and green
                  vegetables.
                </li>
                <li>Get some sunlight for vitamin D.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Back Pain in Women
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Back pain is normal after marriage or
                  childbirth. <strong>Fact:</strong> Persistent pain deserves
                  proper evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> It is only weakness or a calcium
                  problem. <strong>Fact:</strong> Pelvic conditions like
                  endometriosis and fibroids can be behind it.
                </li>
                <li>
                  <strong>Myth:</strong> Painkillers are the solution.{" "}
                  <strong>Fact:</strong> They hide the pain and delay finding
                  the cause.
                </li>
                <li>
                  <strong>Myth:</strong> A gynaecologist is only for pregnancy.{" "}
                  <strong>Fact:</strong> Gynaecologists treat pelvic and
                  reproductive causes of pain too.
                </li>
                <li>
                  <strong>Myth:</strong> Surgery is always needed.{" "}
                  <strong>Fact:</strong> Many causes are treated with medicines
                  and lifestyle changes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation about your pain.
                </li>
                <li>
                  Questions about your periods, health and lifestyle.
                </li>
                <li>
                  A basic examination and, if needed, an ultrasound.
                </li>
                <li>
                  A simple explanation of the likely cause.
                </li>
                <li>Tests, if required, and a clear treatment plan.</li>
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
