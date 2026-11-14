
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

export default function CSectionSpecialist() {
  const faqs = [
    {
      q: "When is a C-section necessary?",
      a: "A C-section may be necessary when vaginal birth could be unsafe for the mother or baby, such as in cases of placenta praevia, fetal distress, labour not progressing or certain maternal health conditions.",
    },
    {
      q: "Is a C-section painful?",
      a: "Anaesthesia is given during surgery, so you should not feel pain during the procedure. Some soreness after surgery is normal and can be managed with prescribed medicines.",
    },
    {
      q: "How long is recovery after a C-section?",
      a: "Most women need around four to six weeks to recover, although recovery time varies. Follow your doctor's advice about rest, wound care and physical activity.",
    },
    {
      q: "Can I breastfeed after a C-section?",
      a: "Yes. Most women can begin breastfeeding soon after surgery, depending on their condition and the baby's health. Side-lying and football-hold positions may help reduce pressure on the incision.",
    },
    {
      q: "Can I choose a C-section without a medical reason?",
      a: "You should discuss your preferences openly with your doctor. A caesarean is major surgery and is generally recommended when there is a medical reason or when it is the safer delivery option.",
    },
    {
      q: "Can I have a normal delivery after a C-section?",
      a: "Some women may be suitable for a vaginal birth after a previous C-section. The decision depends on the reason for the earlier surgery, the type of uterine scar, the time between pregnancies and your overall health.",
    },
    {
      q: "Does the clinic provide C-section services?",
      a: "The clinic website lists pregnancy and birthing care but does not mention C-section as a separate service. Please contact the clinic directly to confirm availability and delivery arrangements.",
    },
    {
      q: "How do I book an appointment?",
      a: "You can call +91 90797 65578, send a WhatsApp message to +91 89796 70705 or email drpriyankagynaec@gmail.com to enquire about an appointment.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">

          {/* Main Content */}
          <div className="order-1 min-w-0 space-y-10">

            {/* Introduction */}
            <section>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                C-Section Specialist Near Civil Lines, Moradabad: Safe,
                Informed Caesarean Care
              </h1>

              <p className="mb-4 leading-8 text-gray-700">
                Hearing that you may need a caesarean can bring worry,
                especially if you were hoping for a normal birth. Questions
                come quickly: Is it safe? Why is it needed? How long is
                recovery? What will happen to my next pregnancy? An experienced
                doctor answers these questions honestly and helps you make a
                calm decision.
              </p>

              <p className="leading-8 text-gray-700">
                If you are looking for a{" "}
                <strong>
                  C-section specialist near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers antenatal
                and birthing care built on clear communication and safe
                motherhood.
              </p>
            </section>

            {/* Website Overview */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Website Overview: Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                The clinic's website presents a women's health and fertility
                centre guided by the philosophy "Her Health First." Dr.
                Priyanka Pachauri is described as a gynaecologist in Moradabad
                focused on antenatal and postnatal care, high-risk pregnancies,
                laparoscopic surgery and menstrual disorder treatment.
              </p>

              <p className="mb-4 leading-8 text-gray-700">
                Listed services include pregnancy and birthing care, antenatal
                services, normal delivery, paediatric care and 3D and 4D
                ultrasound. The site stresses listening first, continuity of
                care and safe motherhood.
              </p>

              <p className="leading-8 text-gray-700">
                The homepage does not list caesarean section as a separate
                service, so please confirm this with the clinic when booking.
              </p>
            </section>

            {/* What is C-section */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                What Is a C-Section?
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                A caesarean section, or C-section, is a surgical procedure in
                which the baby is delivered through an incision in the
                mother's abdomen and uterus. It is performed when vaginal
                birth could be unsafe for the mother, the baby or both. It may
                be planned in advance or decided during labour as an
                emergency.
              </p>

              <p className="leading-8 text-gray-700">
                A C-section is a major surgery. It is life-saving when needed,
                but it is not a shortcut and should be done for medical
                reasons.
              </p>
            </section>

            {/* Planned and Emergency */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Planned and Emergency C-Section
              </h2>

              <div className="space-y-4">
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Planned (Elective) C-Section
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Scheduled in advance, usually around 39 weeks, because a
                    medical reason makes vaginal birth unsafe.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Emergency C-Section
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Decided during labour when a problem arises, such as fetal
                    distress or labour that does not progress.
                  </p>
                </div>
              </div>

              <p className="mt-4 leading-8 text-gray-700">
                Good antenatal care helps identify risks early, so planned
                decisions can be made calmly rather than in a rush.
              </p>
            </section>

            {/* Common Reasons */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Common Reasons a C-Section May Be Advised
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                A doctor may recommend a caesarean when certain conditions
                make vaginal delivery risky for the mother or baby. Common
                reasons include:
              </p>

              <ul className="list-disc space-y-3 pl-6 leading-7 text-gray-700">
                <li>
                  <strong>Placenta praevia:</strong> The placenta covers the
                  cervix.
                </li>
                <li>
                  <strong>Breech or transverse position:</strong> The baby is
                  not head-down, in many cases.
                </li>
                <li>
                  <strong>Fetal distress:</strong> The baby's heart rate shows
                  signs of stress.
                </li>
                <li>
                  <strong>Labour not progressing:</strong> Contractions fail
                  to open the cervix despite careful management.
                </li>
                <li>
                  <strong>Previous caesareans:</strong> Depending on the scar
                  and circumstances.
                </li>
                <li>
                  <strong>Large baby or narrow pelvis:</strong> When vaginal
                  delivery may not be safe.
                </li>
                <li>
                  <strong>Multiple pregnancy:</strong> Twins or more, in some
                  situations.
                </li>
                <li>
                  <strong>Maternal conditions:</strong> Certain heart
                  conditions, severe pre-eclampsia or active infections that
                  make vaginal birth risky.
                </li>
                <li>
                  <strong>Cord problems:</strong> Such as cord prolapse.
                </li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                Your doctor will explain the specific reason in your case and
                discuss the safest delivery option for you and your baby.
              </p>
            </section>

            {/* Antenatal Care */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Why Antenatal Care Matters Before a C-Section
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Regular antenatal checkups help your doctor monitor your
                pregnancy and identify potential complications before
                delivery. These visits allow your doctor to:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Monitor blood pressure, weight and haemoglobin.</li>
                <li>Detect gestational diabetes and pre-eclampsia.</li>
                <li>Check the baby's growth, position and heartbeat.</li>
                <li>Assess the placenta and amniotic fluid.</li>
                <li>Identify high-risk factors early.</li>
                <li>Plan the timing and method of delivery.</li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                The clinic's structured antenatal services and 3D and 4D
                ultrasound facilities support this monitoring.
              </p>
            </section>

            {/* High Risk Pregnancy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                High-Risk Pregnancy and Delivery Planning
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Some pregnancies need extra care and closer medical
                supervision. High-risk factors include diabetes,
                hypertension, thyroid disease, twin pregnancy, previous
                pregnancy complications, low-lying placenta, poor baby growth
                and pregnancy after fertility treatment.
              </p>

              <p className="leading-8 text-gray-700">
                Dr. Priyanka's practice highlights high-risk pregnancy care,
                which means closer follow-up and timely decisions about the
                safest mode of delivery.
              </p>
            </section>

            {/* Before Surgery */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Before the Surgery: What to Expect
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                If a C-section is planned, your doctor will explain the
                procedure and help you understand what to expect. The
                discussion generally covers:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Why it is recommended and the alternatives available.</li>
                <li>
                  The type of anaesthesia, usually spinal or epidural so that
                  you remain awake.
                </li>
                <li>Pre-operative tests and fasting instructions.</li>
                <li>Risks and benefits in your case.</li>
                <li>How long you will stay in hospital.</li>
                <li>Who can be with you.</li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                You are welcome to ask any question. A good specialist never
                rushes this discussion.
              </p>
            </section>

            {/* Procedure */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                How the Procedure Works
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                A C-section is performed by a trained medical team in a
                hospital operating theatre. The general steps include:
              </p>

              <ol className="list-decimal space-y-3 pl-6 leading-7 text-gray-700">
                <li>
                  Anaesthesia is given, most often spinal, so you feel no pain
                  below the waist.
                </li>
                <li>
                  A small incision is made in the lower abdomen and uterus.
                </li>
                <li>The baby is delivered, usually within minutes.</li>
                <li>The cord is clamped and the placenta is removed.</li>
                <li>The incisions are carefully closed.</li>
              </ol>

              <p className="mt-4 leading-8 text-gray-700">
                The surgery typically lasts under an hour. In many cases,
                early skin-to-skin contact and breastfeeding can begin soon
                afterwards, depending on how you and your baby are doing.
              </p>
            </section>

            {/* Risks */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Risks to Understand
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                A C-section is generally safe when medically required and
                performed by a qualified team. However, like any surgery, it
                carries some risks, including:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Infection of the wound or uterus.</li>
                <li>Heavier bleeding.</li>
                <li>Reaction to anaesthesia.</li>
                <li>Blood clots.</li>
                <li>Injury to nearby organs, which is rare.</li>
                <li>Longer recovery than a normal delivery.</li>
                <li>Adhesions or scar-related issues in later pregnancies.</li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                Your doctor weighs these risks against the risks of attempting
                vaginal birth and recommends a C-section when it is the safer
                option.
              </p>
            </section>

            {/* Recovery */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Recovery After a C-Section
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Recovery usually takes several weeks. Following your doctor's
                instructions and taking care of yourself can support healing.
                These steps may help:
              </p>

              <ul className="list-disc space-y-3 pl-6 leading-7 text-gray-700">
                <li>
                  <strong>Rest:</strong> Sleep when the baby sleeps and accept
                  help from family.
                </li>
                <li>
                  <strong>Move gently:</strong> Short walks help circulation
                  and reduce clot risk.
                </li>
                <li>
                  <strong>Wound care:</strong> Keep the stitch area clean and
                  dry as advised.
                </li>
                <li>
                  <strong>Support the incision:</strong> Hold a pillow over
                  the wound when coughing or laughing.
                </li>
                <li>
                  <strong>Eat well:</strong> Include protein, fibre, fruit,
                  vegetables and fluids to support healing and prevent
                  constipation.
                </li>
                <li>
                  <strong>Breastfeeding comfort:</strong> Try side-lying or
                  football-hold positions to avoid pressure on the scar.
                </li>
                <li>
                  <strong>Avoid heavy lifting:</strong> Do not lift anything
                  heavier than your baby until your doctor allows it.
                </li>
                <li>
                  <strong>Attend follow-ups:</strong> Your doctor will check
                  your wound and recovery.
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-red-800">
                  When to Contact Your Doctor
                </h3>
                <p className="leading-7 text-gray-700">
                  Call your doctor if you develop fever, increasing pain,
                  redness or discharge from the wound, heavy bleeding,
                  foul-smelling discharge, leg swelling or breathlessness.
                  Seek urgent medical attention for severe or sudden symptoms.
                </p>
              </div>
            </section>

            {/* Emotional Wellbeing */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Emotional Wellbeing
              </h2>

              <p className="leading-8 text-gray-700">
                Some women feel disappointed or sad if they had hoped for a
                normal birth. These feelings are valid. A C-section is still a
                birth, and it often protects the health of mother and baby. If
                low mood, anxiety or tearfulness continues, talk to your doctor
                and family.
              </p>
            </section>

            {/* Future Pregnancies */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Future Pregnancies After a C-Section
              </h2>

              <p className="leading-8 text-gray-700">
                Many women can have a normal delivery after one caesarean,
                while others will need another. This depends on the reason for
                the first C-section, the type of scar, the time gap between
                pregnancies and your health. Discuss your plans with your
                doctor early in the next pregnancy.
              </p>
            </section>

            {/* Newborn Support */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Newborn and Postnatal Support
              </h2>

              <p className="leading-8 text-gray-700">
                The clinic offers postnatal follow-up and paediatric
                consultations, newborn care and vaccinations, helping mother
                and baby recover with continuity. Postnatal guidance can also
                help mothers understand feeding, recovery and newborn care
                after delivery.
              </p>
            </section>

            {/* Why Choose */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Choosing a gynaecologist for pregnancy and delivery care is an
                important decision. The clinic highlights the following
                aspects of its approach:
              </p>

              <ul className="list-disc space-y-3 pl-6 leading-7 text-gray-700">
                <li>A doctor who listens and explains clearly.</li>
                <li>Structured antenatal care from early pregnancy.</li>
                <li>Attention to high-risk pregnancies.</li>
                <li>3D and 4D ultrasound facilities.</li>
                <li>
                  Emphasis on safe motherhood, with normal delivery where
                  suitable and honest advice when a caesarean is safer.
                </li>
                <li>Paediatric and newborn care available.</li>
                <li>Continuity through every visit.</li>
              </ul>
            </section>

            {/* Location */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Location and Contact
              </h2>

              <p className="leading-8 text-gray-700">
                The clinic is at A2, near Old Roadways, Gandhi Nagar,
                Moradabad, Uttar Pradesh 244001, and is accessible to women
                from Civil Lines and nearby areas.
              </p>

              <p className="mt-4 leading-8 text-gray-700">
                Call +91 90797 65578, message on WhatsApp at +91 89796 70705,
                or email drpriyankagynaec@gmail.com. If you are looking for a
                C-section specialist near Civil Lines, Moradabad, book a
                consultation to discuss your birth plan and the safest option
                for you.
              </p>
            </section>

            {/* Appointment CTA */}
            <section className="rounded-2xl bg-[#F8F4EA] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Book a Consultation with Dr. Priyanka Pachauri
              </h2>

              <p className="mb-6 leading-8 text-gray-700">
                Every pregnancy is different. Discuss your concerns, delivery
                preferences and medical history with your doctor to understand
                the safest birth plan for you and your baby.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  WhatsApp
                </a>
              </div>
            </section>

            {/* Contact Card */}
            <section className="rounded-2xl bg-[#F8F4EA] p-6 sm:p-8">
              <h2 className="mb-6 text-2xl font-bold text-[#74122E]">
                Contact Dr. Priyanka Gynaec
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Award className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Doctor
                    </h3>
                    <p className="text-gray-700">
                      Dr. Priyanka Pachauri
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+919079765578"
                      className="text-gray-700 hover:text-[#8F1738]"
                    >
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#8F1738]"
                    >
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="break-all text-gray-700 hover:text-[#8F1738]"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                      Pradesh – 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Website</h3>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-gray-700 hover:text-[#8F1738]"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Contact Us
                </Link>

                <Link
                  href="/services"
                  className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  Our Services
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-[#74122E]">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                      {faq.q}
                    </h3>
                    <p className="leading-7 text-gray-700">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Enquiry Form */}
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
