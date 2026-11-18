
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Rampur?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Rampur and nearby areas travel there for pregnancy care.",
  },
  {
    q: "Does the clinic prioritise normal delivery?",
    a: "Yes. Normal delivery is prioritised whenever it is safe for mother and baby. A caesarean is advised only when medically necessary.",
  },
  {
    q: "Where will my C-section take place?",
    a: "Please confirm this with the clinic when you book, and discuss the delivery plan during your antenatal visits.",
  },
  {
    q: "Is a C-section safe?",
    a: "It is a commonly performed and generally safe surgery when done for a valid medical reason by an experienced team. Like any surgery, it carries some risks, which your doctor will explain.",
  },
  {
    q: "How long is the hospital stay after a C-section?",
    a: "Usually a few days, depending on your recovery. Your doctor will advise you.",
  },
  {
    q: "When can I travel back to Rampur after surgery?",
    a: "Ask your doctor before discharge. They will advise on timing and how to travel comfortably and safely.",
  },
  {
    q: "How long does recovery take?",
    a: "Many women feel considerably better within a few weeks, though full healing takes longer. Your doctor will give a personalised plan.",
  },
  {
    q: "Can I have a normal delivery after a C-section?",
    a: "Some women can, depending on the reason for the earlier caesarean, the type of incision and current health. This needs individual assessment.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on the clinic website.",
  },
];

export default function CSectionSpecialistNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              C-Section Specialist near Rampur – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              Hearing that you may need a caesarean can bring worry, relief or
              both. Some women plan for it early in pregnancy. Others learn
              about it late in labour. Either way, you need a doctor who
              explains the reasons clearly and puts the safety of you and your
              baby first.
            </p>

            <p>
              If you live in Rampur, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in Moradabad, not in
              Rampur, and women from Rampur and nearby areas travel there for
              pregnancy care. The clinic prioritises normal delivery wherever
              it is safe. When a caesarean is the safer choice, it is advised
              honestly and planned carefully. Its philosophy is
              <strong> &quot;Her Health First.&quot;</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              What Is a C-Section?
            </h2>

            <p>
              A caesarean section, or C-section, is a surgical procedure in
              which the baby is born through an incision in the mother&apos;s
              abdomen and uterus. It is done when vaginal birth could pose
              risks to the mother, the baby or both. It may be planned in
              advance or decided during labour.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Planned and Emergency C-Sections
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Planned (Elective)
                </h3>
                <p>
                  Scheduled before labour begins because of a known medical
                  reason, such as a baby in an unfavourable position or a
                  low-lying placenta.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Emergency</h3>
                <p>
                  Decided during labour or late pregnancy when a sudden concern
                  arises, such as fetal distress or labour that is not
                  progressing.
                </p>
              </div>
            </div>

            <p>
              Both are safe when performed by an experienced team, and both
              need clear communication with the mother and family.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              When Is a C-Section Medically Advised?
            </h2>

            <p>Your doctor may recommend one if:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>The baby shows signs of distress</li>
              <li>
                Labour does not progress despite adequate time and support
              </li>
              <li>The baby is in a breech or transverse position</li>
              <li>The placenta covers the cervix</li>
              <li>
                There is a serious maternal condition, such as severe
                pre-eclampsia
              </li>
              <li>A multiple pregnancy has complicating factors</li>
              <li>
                Previous uterine surgery or caesareans raise specific risks
              </li>
            </ul>

            <p>
              Not every case in these groups needs surgery. Your doctor weighs
              your situation and explains the plan in simple terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Antenatal Care Before a C-Section
            </h2>

            <p>
              Good preparation makes surgery safer. Antenatal care at the
              clinic includes:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Early registration and trimester-wise check-ups</li>
              <li>Ultrasound on a Voluson E22 3D and 4D machine</li>
              <li>
                Blood tests and screening for anaemia, gestational diabetes and
                thyroid problems
              </li>
              <li>
                Review of the placenta&apos;s position and the baby&apos;s
                growth and presentation
              </li>
              <li>Blood pressure and weight monitoring</li>
              <li>Nutrition and lifestyle guidance</li>
              <li>Counselling on anaesthesia, surgery and hospital stay</li>
            </ul>

            <p>
              Regular monitoring helps decisions to be made calmly instead of
              in a rush.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Planning a C-Section When You Live in Rampur
            </h2>

            <p>
              Distance adds a layer of planning. Raise these points early,
              ideally by the third trimester.
            </p>

            <h3 className="text-lg font-semibold text-gray-900">
              Ask Your Doctor
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Where will the surgery take place, and what facilities are
                there? Please confirm this with the clinic.
              </li>
              <li>
                If a planned caesarean is advised, what date or week is
                suggested, and what tests come before it?
              </li>
              <li>If labour starts earlier than planned, where should I go?</li>
              <li>How many days should I expect to stay after surgery?</li>
              <li>
                Which warning signs after discharge need urgent care?
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">
              Plan the Logistics
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Decide who will accompany you and who will care for other
                children
              </li>
              <li>Arrange accommodation for family members if needed</li>
              <li>
                Keep transport arranged or on standby as your due date nears
              </li>
              <li>
                Identify the nearest hospital with emergency and delivery
                facilities to your home, in case labour begins suddenly
              </li>
              <li>Keep your antenatal card and reports with you at all times</li>
            </ul>

            <p>
              In an emergency, go to the nearest emergency facility immediately.
              Do not delay care to travel to another city.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Preparing for a Planned C-Section
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Complete the pre-operative check-up and blood tests</li>
              <li>Discuss anaesthesia options with the anaesthetist</li>
              <li>Follow fasting instructions exactly</li>
              <li>
                Share your full medical history, allergies and current medicines
              </li>
              <li>Pack your hospital bag in advance</li>
              <li>Arrange help at home for the first few weeks</li>
              <li>Write down your questions beforehand</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              Hospital Bag Checklist
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Antenatal card, reports and identification</li>
              <li>Loose, comfortable clothes and sanitary pads</li>
              <li>Toiletries and a towel</li>
              <li>Baby clothes, wraps and diapers</li>
              <li>Phone, charger and important contact numbers</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              What Happens During the Surgery?
            </h2>

            <p>Protocols vary between hospitals, but in general:</p>

            <ol className="list-decimal space-y-3 pl-6">
              <li>
                <strong>Anaesthesia:</strong> Most women receive regional
                anaesthesia, which numbs the lower body while you stay awake.
                General anaesthesia is used in some situations.
              </li>
              <li>
                <strong>Incision:</strong> A careful incision is made in the
                lower abdomen and uterus.
              </li>
              <li>
                <strong>Birth:</strong> The baby is delivered, usually within
                minutes.
              </li>
              <li>
                <strong>Closure:</strong> The placenta is removed and the
                layers are stitched.
              </li>
              <li>
                <strong>Early contact:</strong> When both are stable, you can
                often hold your baby early and begin breastfeeding with
                support.
              </li>
            </ol>

            <p>The whole procedure usually takes about 30 to 60 minutes.</p>

            <h2 className="text-2xl font-bold text-gray-900">
              Recovery After a C-Section
            </h2>

            <p>
              Recovery takes longer than after a normal delivery, so rest and
              patience matter.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Hospital stay:</strong> Usually a few days, with pain
                relief and monitoring
              </li>
              <li>
                <strong>Wound care:</strong> Keep the area clean and dry, and
                follow your doctor&apos;s instructions
              </li>
              <li>
                <strong>Movement:</strong> Gentle walking helps circulation,
                with support for the incision
              </li>
              <li>
                <strong>Lifting:</strong> Avoid heavy lifting until your doctor
                says it is safe
              </li>
              <li>
                <strong>Diet:</strong> Balanced meals, plenty of fluids and
                fibre to prevent constipation
              </li>
              <li>
                <strong>Rest:</strong> Sleep when your baby sleeps and accept
                help from family
              </li>
              <li>
                <strong>Breastfeeding:</strong> Try comfortable positions that
                avoid pressure on the wound
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              Going Home to Rampur After Surgery
            </h2>

            <p>Ask your doctor before you leave:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                When is it safe to travel home, and how should I travel? Many
                women are advised to sit with proper support and avoid bumpy or
                very long journeys without breaks.
              </li>
              <li>
                When is my first follow-up, and can any checks be done locally?
              </li>
              <li>Which symptoms need urgent care?</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">
              Contact a Doctor Promptly If You Notice
            </h3>

            <p>
              Fever, increasing pain, redness or discharge from the wound,
              heavy bleeding, foul-smelling discharge, leg swelling or pain, or
              breathlessness. If you cannot reach the clinic quickly, go to the
              nearest hospital.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Emotional Wellbeing After a Caesarean
            </h2>

            <p>
              Some women feel disappointed if the birth did not go as they
              imagined. Others feel anxious about recovery. These feelings are
              common and valid. Talk to your doctor, your partner or a trusted
              family member. If low mood or anxiety lasts beyond the first
              couple of weeks, or stops you coping, ask for professional
              support.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Future Pregnancies After a C-Section
            </h2>

            <p>
              Depending on the reason for the first surgery, the type of
              uterine incision and your health, you may be able to attempt a
              vaginal birth next time, or you may be advised to plan another
              caesarean. Doctors also usually recommend a gap between
              pregnancies so the uterus can heal well. Discuss this early,
              ideally before conceiving again.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              High-Risk Pregnancy and Delivery Planning
            </h2>

            <p>
              Women with diabetes, high blood pressure, thyroid disease, twin
              pregnancy, previous uterine surgery or pregnancy after IVF may
              need a detailed birth plan. Dr. Priyanka Pachauri assesses each
              case individually, monitors closely and chooses the safest mode
              and timing of delivery for mother and baby.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Newborn and Postnatal Care
            </h2>

            <p>
              The clinic supports recovery, breastfeeding, contraception
              counselling and emotional wellbeing. Paediatric consultations,
              vaccinations and newborn care are also available, so mother and
              baby can continue with the same trusted team.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Why Women Trust Dr. Priyanka Gynaec
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Expertise with heart:</strong> Training in laparoscopy,
                fertility treatment and women&apos;s health, with a
                compassionate approach
              </li>
              <li>
                <strong>Continuity you can count on:</strong> An integrated
                team that knows your history
              </li>
              <li>
                <strong>Advanced imaging:</strong> Detailed assessment with a
                Voluson E22 3D/4D ultrasound machine
              </li>
              <li>
                <strong>Honest guidance:</strong> Caesarean advised only when
                medically necessary
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              Clinic Address and Appointments
            </h2>

            <p>
              Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
              Nagar, Moradabad, Uttar Pradesh – 244001.
            </p>

            <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h3 className="mb-4 text-2xl font-bold">
                Book Your Pregnancy Consultation
              </h3>

              <p className="mb-6">
                Contact Dr. Priyanka Gynaec for antenatal consultations and
                delivery planning.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <a href="tel:+919079765578" className="hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
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

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
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

                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
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

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/services"
                  className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#8F1738] hover:text-white"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <section className="pt-4">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      Q{index + 1}. {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="lg:sticky lg:top-24">
            <LandingEnquiryForm />
          </aside>
        </div>
      </section>
    </main>
  );
}
