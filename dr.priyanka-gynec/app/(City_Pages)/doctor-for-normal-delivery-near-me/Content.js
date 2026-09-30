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

export default function DoctorForNormalDeliveryMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for normal delivery in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri provides antenatal and normal delivery care in Moradabad.",
    },
    {
      q: "Who can have a normal delivery?",
      a: "Most healthy women with a single head-down baby and a low-risk pregnancy.",
    },
    {
      q: "Is normal delivery painful?",
      a: "Labour is intense, but pain relief options and support make it manageable.",
    },
    {
      q: "How long does labour last?",
      a: "Often several hours, and usually longer in a first pregnancy.",
    },
    {
      q: "When should I go to the hospital?",
      a: "When contractions are regular, water breaks, bleeding occurs or movements reduce.",
    },
    {
      q: "What is an episiotomy?",
      a: "A small cut made to ease the baby's birth in selected cases, stitched under local anaesthesia.",
    },
    {
      q: "How long is recovery after normal delivery?",
      a: "Most women feel much better within a week, with full recovery in about 6 weeks.",
    },
    {
      q: "Can I exercise during pregnancy to help normal delivery?",
      a: "Yes, gentle walking, yoga and pelvic exercises are helpful with your doctor's approval.",
    },
    {
      q: "Can I have a normal delivery after a C-section?",
      a: "Some women can try VBAC, depending on their situation and your doctor's advice.",
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
                Doctor for Normal Delivery Near Me: Preparation, Labour &
                Recovery in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Most expecting mothers hope for a normal delivery. It usually
                means a faster recovery, an earlier return to daily life, an
                easier start to breastfeeding and no surgical wound. But hope
                alone is not enough. A good outcome depends on early planning,
                regular check-ups and a doctor you trust.
              </p>

              <p className="mb-4 text-gray-700">
                Many women also carry fears: How much will it hurt? What if
                something goes wrong? Will I be able to manage? The best answer
                to these worries is information and a supportive doctor who
                listens.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what a normal delivery is, who is suitable,
                how to prepare, what happens in labour, and how to consult Dr.
                Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Normal (Vaginal) Delivery?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The baby is born through the birth canal without surgery.
                </li>
                <li>
                  Labour begins naturally or is started by the doctor if
                  medically needed.
                </li>
                <li>
                  Contractions open the cervix and push the baby down.
                </li>
                <li>
                  The mother usually goes home within a day or two if all is
                  well.
                </li>
                <li>
                  It is the most natural way of giving birth, and often the
                  safest when there is no medical reason against it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of a Normal Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Faster recovery compared with major surgery.
                </li>
                <li>Shorter hospital stay.</li>
                <li>
                  Quick start to breastfeeding in most cases.
                </li>
                <li>No abdominal surgical scar.</li>
                <li>
                  Lower risk of wound infection and blood clots.
                </li>
                <li>
                  Easier movement and baby care in the first days.
                </li>
                <li>
                  Helpful for the baby: squeezing through the birth canal helps
                  clear fluid from the lungs.
                </li>
                <li>
                  Usually a simpler path for future pregnancies.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A normal delivery is not always possible, and that is nothing to
                feel guilty about. The safest way is the best way for you and
                your baby.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is Suitable for a Normal Delivery?
              </h2>

              <p className="mb-4 text-gray-700">
                Most healthy women with a normal pregnancy can aim for a normal
                delivery. Doctors usually look for:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A single baby lying head down.
                </li>
                <li>
                  A pregnancy that is at or near term.
                </li>
                <li>
                  A placenta that is not covering the cervix.
                </li>
                <li>
                  A pelvis that seems adequate for the baby&apos;s size.
                </li>
                <li>
                  A healthy baby with a normal heartbeat pattern.
                </li>
                <li>
                  No condition that makes labour risky, such as severe high
                  blood pressure that cannot be controlled.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor will keep reassessing this through pregnancy and
                labour, because things can change.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When a Normal Delivery May Not Be Advised
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Placenta previa,</strong> where the placenta covers
                  the cervix.
                </li>
                <li>
                  <strong>Baby in a breech or sideways position,</strong> in
                  most cases.
                </li>
                <li>
                  <strong>Very large baby</strong> with a small pelvis.
                </li>
                <li>
                  <strong>Certain infections</strong> such as active genital
                  herpes.
                </li>
                <li>
                  <strong>Severe pre-eclampsia</strong> or other serious
                  maternal illness.
                </li>
                <li>
                  <strong>Signs of distress in the baby</strong> during labour.
                </li>
                <li>
                  <strong>Labour that is not progressing</strong> safely.
                </li>
                <li>
                  <strong>Some previous uterine surgeries.</strong>
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                In these situations, a caesarean section may be the safer
                option. This is a medical decision, not a failure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for a Normal Delivery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Start Antenatal Care Early
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Register in the first trimester.</li>
                <li>Attend every scheduled check-up and scan.</li>
                <li>Follow advice on vitamins, iron and calcium.</li>
                <li>
                  Treat anaemia, high blood pressure and diabetes early.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Eat Well
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Balanced meals with protein, dal, vegetables, fruit and dairy.
                </li>
                <li>
                  Iron-rich foods such as spinach, beetroot, dates and jaggery.
                </li>
                <li>Plenty of water through the day.</li>
                <li>
                  Avoid excess weight gain, as it can complicate labour.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Stay Active
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Walk 20–30 minutes daily, unless advised otherwise.
                </li>
                <li>
                  Do gentle prenatal yoga or stretches with your doctor&apos;s
                  approval.
                </li>
                <li>
                  Practise squats and pelvic floor exercises as advised.
                </li>
                <li>Avoid heavy lifting and risky activity.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Learn About Labour
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Attend antenatal classes if available.</li>
                <li>Learn breathing and relaxation techniques.</li>
                <li>Ask your doctor about pain relief options.</li>
                <li>
                  Bring your partner or a family member along to visits.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Prepare Mentally
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Talk about your fears rather than hiding them.
                </li>
                <li>Trust that your body is built for this.</li>
                <li>Avoid frightening stories from others.</li>
                <li>Remember that flexibility matters, since plans may change.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Pack Your Hospital Bag Early (by 36 weeks)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  ID proofs, antenatal file, scan reports and blood reports.
                </li>
                <li>
                  Comfortable clothes and a front-open nightwear for feeding.
                </li>
                <li>Sanitary pads, towels and toiletries.</li>
                <li>Baby clothes, blankets and nappies.</li>
                <li>Phone, charger and emergency contact numbers.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs That Labour Is Starting
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular contractions that get stronger, longer and closer
                  together.
                </li>
                <li>Backache that comes in waves.</li>
                <li>
                  <strong>Show:</strong> blood-tinged mucus from the vagina.
                </li>
                <li>
                  <strong>Water breaking:</strong> a gush or steady leak of
                  fluid.
                </li>
                <li>Pressure low in the pelvis.</li>
                <li>Loose motions or nausea in some women.</li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                When to go to the clinic or hospital
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Contractions every 5 minutes for an hour or as your doctor has
                  advised.
                </li>
                <li>Water has broken, even without pain.</li>
                <li>Bleeding is more than a show.</li>
                <li>Baby&apos;s movements reduce.</li>
                <li>
                  You feel unsure or anxious, so it is always fine to call.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stages of a Normal Delivery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Stage: Cervix Opens
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The longest stage, especially in a first pregnancy.
                </li>
                <li>
                  Contractions gradually open the cervix to about 10 cm.
                </li>
                <li>
                  Early labour can last many hours, and you may stay at home for
                  part of it.
                </li>
                <li>
                  Active labour is more intense and needs monitoring.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Stage: Pushing and Birth
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Begins when the cervix is fully open.
                </li>
                <li>
                  You push with contractions, guided by your doctor or midwife.
                </li>
                <li>
                  The baby&apos;s head is born, followed by the body.
                </li>
                <li>
                  Usually lasts from a few minutes to a couple of hours.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Stage: Delivery of the Placenta
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Usually within 5–30 minutes after the baby.
                </li>
                <li>
                  Mild contractions help the placenta separate.
                </li>
                <li>
                  A medicine may be given to reduce bleeding.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Fourth Stage: Early Recovery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You and the baby are watched closely for the first hours.
                </li>
                <li>
                  Bleeding, pulse and blood pressure are checked.
                </li>
                <li>
                  Skin-to-skin contact and early breastfeeding are encouraged.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pain Relief in Labour
              </h2>

              <p className="mb-4 text-gray-700">
                You do not have to suffer without help. Options include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Breathing and relaxation techniques.
                </li>
                <li>
                  Changing positions, walking or using a birthing ball.
                </li>
                <li>Warm compresses and massage.</li>
                <li>
                  Support from a partner or family member.
                </li>
                <li>
                  Epidural analgesia, where available, for continuous pain
                  relief.
                </li>
                <li>Other medicines as advised by your doctor.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Ask your doctor early in pregnancy which options are available at
                your place of delivery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Episiotomy and Tears
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sometimes a small cut (episiotomy) is made to ease the
                  baby&apos;s birth in selected cases.
                </li>
                <li>
                  Small natural tears can also happen.
                </li>
                <li>
                  Any stitches are done under local anaesthesia.
                </li>
                <li>
                  They usually heal within 2–3 weeks with good hygiene.
                </li>
                <li>
                  Warm water washes, clean pads and rest help healing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After a Normal Delivery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Hospital
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rest, fluids and light food soon after delivery.</li>
                <li>Help with breastfeeding and holding the baby.</li>
                <li>
                  Bleeding, blood pressure and stitches are checked.
                </li>
                <li>
                  Most mothers go home in 1–2 days if well.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                At Home
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rest whenever the baby sleeps.</li>
                <li>
                  Eat balanced meals with protein, fibre and plenty of fluids.
                </li>
                <li>Keep the stitches clean and dry.</li>
                <li>Change pads often.</li>
                <li>Walk gently to boost circulation.</li>
                <li>
                  Do pelvic floor exercises once your doctor approves.
                </li>
                <li>
                  Avoid heavy lifting in the early weeks.
                </li>
                <li>
                  Attend the follow-up visit, usually around 6 weeks.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Emotional Health
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Feeling tearful or overwhelmed in the first week is common.
                </li>
                <li>
                  Share your feelings with family and your doctor.
                </li>
                <li>
                  Seek help if low mood lasts more than two weeks or you feel
                  unable to cope.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs After Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Contact your doctor promptly if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy bleeding, soaking a pad in an hour, or passing large
                  clots.
                </li>
                <li>Fever or chills.</li>
                <li>Foul-smelling discharge.</li>
                <li>
                  Severe pain, or stitches that open or look infected.
                </li>
                <li>
                  Pain, swelling or redness in one leg.
                </li>
                <li>Breathlessness or chest pain.</li>
                <li>Severe headache or blurred vision.</li>
                <li>Difficulty passing urine.</li>
                <li>
                  Persistent low mood or thoughts of self-harm.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Normal Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> A normal delivery is always extremely
                  painful. <strong>Fact:</strong> Labour is intense, but many
                  pain relief options and supportive care can make it
                  manageable.
                </li>
                <li>
                  <strong>Myth:</strong> A C-section is always safer.{" "}
                  <strong>Fact:</strong> A C-section is safe when needed, but
                  normal delivery is often the better choice when there is no
                  medical reason against it.
                </li>
                <li>
                  <strong>Myth:</strong> You cannot have a normal delivery if
                  your baby is large. <strong>Fact:</strong> Size alone is not
                  the deciding factor. Your doctor assesses the whole picture.
                </li>
                <li>
                  <strong>Myth:</strong> A normal delivery damages the vagina
                  permanently. <strong>Fact:</strong> The body is designed to
                  stretch and recovers well, especially with pelvic floor
                  exercises.
                </li>
                <li>
                  <strong>Myth:</strong> Eating ghee or special foods guarantees
                  a normal delivery. <strong>Fact:</strong> A balanced diet
                  helps, but no single food decides the mode of delivery.
                </li>
                <li>
                  <strong>Myth:</strong> Once you have had a C-section, you can
                  never have a normal delivery. <strong>Fact:</strong> Some
                  women can try VBAC, depending on their situation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation about your pregnancy and
                  worries.
                </li>
                <li>
                  A review of your reports and scans.
                </li>
                <li>
                  A discussion about whether a normal delivery looks suitable.
                </li>
                <li>
                  Advice on diet, exercise and preparation.
                </li>
                <li>
                  A schedule for check-ups and a plan for labour.
                </li>
                <li>Time to ask any question.</li>
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
