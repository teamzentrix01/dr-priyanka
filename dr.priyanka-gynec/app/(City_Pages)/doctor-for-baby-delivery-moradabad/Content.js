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

export default function DoctorForBabyDeliveryMoradabad() {
  const faqs = [
    {
      q: "Who is a trusted doctor for baby delivery in Moradabad?",
      a: "Dr. Priyanka Pachauri is a highly experienced gynaecologist in Moradabad trusted for safe normal and C-section deliveries.",
    },
    {
      q: "How do I know when it's time to go to the hospital for delivery?",
      a: "Regular, intensifying contractions, water breaking, or reduced foetal movement are key signs to head to the hospital.",
    },
    {
      q: "What happens immediately after my baby is born?",
      a: "The baby is assessed for breathing and reflexes, then supported with skin-to-skin contact and early breastfeeding.",
    },
    {
      q: "Can I have a normal delivery if my due date has passed?",
      a: "Yes, in many cases; your doctor will monitor you closely and guide the safest timing and approach.",
    },
    {
      q: "Is pain relief available during labour?",
      a: "Yes, various pain management options are discussed and offered based on your preference and medical suitability.",
    },
    {
      q: "What should I pack in my hospital bag?",
      a: "Documents, comfortable clothing, toiletries, and newborn essentials like clothes and diapers are recommended.",
    },
    {
      q: "How soon after delivery can I go home?",
      a: "This depends on the type of delivery and recovery progress; your doctor will guide the appropriate discharge timing.",
    },
    {
      q: "Does the clinic handle emergency deliveries?",
      a: "Yes, Dr. Priyanka Pachauri and her team are prepared to manage both planned and emergency delivery situations.",
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
                Doctor for Baby Delivery in Moradabad – Complete Guide by Dr.
                Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                The day your baby arrives is one of the most significant moments
                of your life, and having the right doctor by your side can shape
                how safe, smooth, and reassuring that experience feels. Beyond
                just medical expertise, the right delivery doctor understands
                your needs as admission approaches, guides you through labour,
                and ensures your newborn receives immediate, expert care. If you
                are searching for a doctor for baby delivery in Moradabad, this
                guide walks you through the entire delivery journey and explains
                why Dr. Priyanka Pachauri is a trusted choice for expecting
                families.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Journey to Baby Delivery: What to Expect
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the stages leading up to and including delivery
                helps you feel more prepared and less anxious as your due date
                approaches.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Final antenatal visits in the last weeks to monitor
                  baby&apos;s position and growth.
                </li>
                <li>
                  Discussion of your birth plan and preferences with your
                  doctor.
                </li>
                <li>
                  Recognizing true labour signs versus false labour (Braxton
                  Hicks contractions).
                </li>
                <li>
                  Hospital admission once labour begins or as advised by your
                  doctor.
                </li>
                <li>
                  Active labour monitoring, including foetal heart rate and
                  contraction tracking.
                </li>
                <li>
                  The delivery itself, whether normal or via C-section, based on
                  medical need.
                </li>
                <li>
                  Immediate newborn care and assessment right after birth.
                </li>
                <li>
                  Postnatal monitoring before discharge.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recognizing When It&apos;s Time to Head to the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Knowing the signs of true labour helps you avoid unnecessary
                anxiety while ensuring you don&apos;t delay when it matters.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular, increasingly frequent, and intensifying contractions.
                </li>
                <li>
                  Water breaking (a gush or steady trickle of fluid).
                </li>
                <li>
                  Lower back pain combined with abdominal tightening.
                </li>
                <li>
                  Bloody show or mucus discharge as labour approaches.
                </li>
                <li>
                  Reduced foetal movement, which should always be reported
                  immediately.
                </li>
                <li>
                  Any bleeding, severe pain, or symptoms your doctor has
                  specifically advised you to watch for.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor will give you personalized guidance in the final
                weeks of pregnancy about exactly when to come in based on your
                specific pregnancy and history.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Baby Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Every delivery is unique, and your doctor will guide the safest
                option based on your health, the baby&apos;s position, and how
                labour progresses.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal (Vaginal) Delivery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The natural birthing process, generally preferred when
                  medically safe.
                </li>
                <li>
                  Typically involves a shorter hospital stay and quicker
                  recovery.
                </li>
                <li>
                  Supports immediate skin-to-skin contact and early
                  breastfeeding.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Caesarean Section (C-Section):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recommended for specific situations like breech position,
                  foetal distress, or placenta previa.
                </li>
                <li>
                  Performed as a planned procedure in some high-risk
                  pregnancies, or as an emergency measure during labour.
                </li>
                <li>
                  Modern surgical techniques allow for relatively quick
                  recovery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Assisted Vaginal Delivery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  May involve forceps or vacuum support during the final stage
                  of labour.
                </li>
                <li>
                  Used selectively and under close medical supervision when
                  additional assistance is needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Hospital Admission for Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Initial assessment of contractions, cervical dilation, and
                  baby&apos;s position.
                </li>
                <li>
                  Continuous or periodic monitoring of foetal heart rate.
                </li>
                <li>
                  Setting up necessary medical support based on your birth plan
                  and labour progress.
                </li>
                <li>
                  Pain management options discussed and offered as labour
                  advances.
                </li>
                <li>
                  Regular updates from your doctor and nursing team throughout
                  labour.
                </li>
                <li>
                  Preparedness to switch to a C-section quickly if the situation
                  requires it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Immediate Newborn Care After Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                The moments right after birth are critical, and a well-prepared
                delivery team ensures your baby receives prompt, expert
                attention.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Immediate assessment of the baby&apos;s breathing, heart rate,
                  and reflexes (APGAR scoring).
                </li>
                <li>
                  Clearing of airways and initial stimulation if needed.
                </li>
                <li>
                  Skin-to-skin contact with the mother to support bonding and
                  stabilize the baby.
                </li>
                <li>
                  Weighing, measuring, and basic newborn examination.
                </li>
                <li>
                  Support for early breastfeeding initiation within the first
                  hour when possible.
                </li>
                <li>
                  Coordination with paediatric care for any additional newborn
                  monitoring needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Manages the Delivery Process
              </h2>

              <p className="mb-4 text-gray-700">
                A calm, well-prepared, and personalized approach is central to
                how Dr. Priyanka Pachauri supports every delivery, whether
                straightforward or complex.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed birth plan discussion well before your due date.
                </li>
                <li>
                  Continuous foetal monitoring during labour to track
                  baby&apos;s wellbeing.
                </li>
                <li>
                  Clear communication at every stage so you know what&apos;s
                  happening and why.
                </li>
                <li>
                  Readiness to move quickly to a C-section if labour
                  complications arise.
                </li>
                <li>
                  Coordination with a skilled nursing and paediatric team for
                  newborn care.
                </li>
                <li>
                  Postnatal monitoring for both mother and baby before
                  discharge.
                </li>
                <li>
                  Ongoing follow-up support in the days and weeks after
                  delivery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri – Trusted Doctor for Baby Delivery
                in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced gynaecologist in
                Moradabad known for guiding families safely through both normal
                and complex baby deliveries.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials with international fellowship training.
                </li>
                <li>
                  Extensive hands-on experience managing normal deliveries,
                  C-sections, and high-risk births.
                </li>
                <li>
                  Access to advanced 3D/4D ultrasound and foetal monitoring
                  technology.
                </li>
                <li>
                  Strong focus on supporting natural delivery whenever
                  medically safe.
                </li>
                <li>
                  Prepared and equipped to handle delivery emergencies swiftly.
                </li>
                <li>
                  Known for calm, clear communication that reduces anxiety
                  during labour.
                </li>
                <li>
                  Continuity of care from pregnancy through delivery and
                  postnatal recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery and Maternity Services Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Normal Delivery with a focus on gentle, supported natural
                  birth.
                </li>
                <li>Planned and emergency Caesarean Section care.</li>
                <li>High-risk pregnancy delivery management.</li>
                <li>
                  Antenatal Services leading up to a well-prepared delivery.
                </li>
                <li>
                  Immediate newborn assessment and care coordination.
                </li>
                <li>Postnatal recovery monitoring for mother.</li>
                <li>Breastfeeding support and newborn care guidance.</li>
                <li>
                  Paediatric care coordination for ongoing infant health needs.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Your Baby&apos;s Delivery?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Proven experience across a wide range of delivery scenarios.
                </li>
                <li>
                  Advanced monitoring technology for accurate, real-time
                  tracking during labour.
                </li>
                <li>
                  A prepared team ready for both routine and emergency
                  situations.
                </li>
                <li>
                  Personalized attention rather than a rushed, generic approach.
                </li>
                <li>
                  Strong emphasis on newborn safety and immediate care quality.
                </li>
                <li>
                  Comfortable, supportive environment during labour and
                  delivery.
                </li>
                <li>
                  Continuity of care extending well into the postnatal period.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Baby Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> The due date is the exact day the baby
                  will arrive. <strong>Fact:</strong> The due date is an
                  estimate; delivery can safely occur within a range of weeks
                  around it.
                </li>
                <li>
                  <strong>Myth:</strong> Labour always starts with the water
                  breaking. <strong>Fact:</strong> Many women go into labour
                  with contractions first, and the water breaks later or during
                  labour.
                </li>
                <li>
                  <strong>Myth:</strong> A C-section means you missed out on
                  bonding with your baby. <strong>Fact:</strong> Skin-to-skin
                  contact and bonding are supported after C-sections too, just
                  as with normal delivery.
                </li>
                <li>
                  <strong>Myth:</strong> First deliveries always take much
                  longer than later ones. <strong>Fact:</strong> While this is
                  often true, labour duration varies significantly from woman to
                  woman.
                </li>
                <li>
                  <strong>Myth:</strong> Pain relief during labour is unsafe
                  for the baby. <strong>Fact:</strong> Pain management options
                  used during labour are considered safe when administered under
                  medical supervision.
                </li>
                <li>
                  <strong>Myth:</strong> Once you&apos;re admitted, delivery
                  happens quickly. <strong>Fact:</strong> Labour can take
                  several hours, and hospital staff continuously monitor
                  progress throughout.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing Your Hospital Bag and Birth Plan
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pack essential documents, including your pregnancy file and
                  identification.
                </li>
                <li>
                  Include comfortable clothing, toiletries, and nursing
                  essentials for yourself.
                </li>
                <li>
                  Pack newborn essentials like clothing, blankets, and diapers.
                </li>
                <li>
                  Finalize your birth plan preferences with your doctor in
                  advance.
                </li>
                <li>
                  Arrange transportation and a support person for the day of
                  delivery.
                </li>
                <li>
                  Save your doctor&apos;s clinic contact number and hospital
                  details for quick access.
                </li>
                <li>
                  Discuss pain management preferences ahead of time so
                  you&apos;re informed on the day.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Labour and Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Continuous monitoring of your vitals and your baby&apos;s
                  heartbeat.
                </li>
                <li>
                  Regular updates and clear communication from your doctor and
                  nursing team.
                </li>
                <li>
                  Pain management support based on your preference and medical
                  suitability.
                </li>
                <li>
                  Skilled, timely decision-making if the situation shifts from
                  normal delivery to C-section.
                </li>
                <li>
                  Immediate care and assessment for your baby right after birth.
                </li>
                <li>
                  Support for early bonding and breastfeeding initiation.
                </li>
                <li>
                  Monitoring of both mother and baby before discharge.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postnatal Care After Baby Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Monitoring for postpartum bleeding and physical recovery.
                </li>
                <li>
                  Wound care guidance after normal delivery or C-section.
                </li>
                <li>Support for establishing breastfeeding successfully.</li>
                <li>
                  Nutritional guidance to support recovery and milk production.
                </li>
                <li>Newborn health checks and vaccination scheduling.</li>
                <li>
                  Emotional wellbeing check-ins during the postpartum period.
                </li>
                <li>
                  Follow-up visits to monitor recovery over the following weeks.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Discuss With Your Delivery Doctor in Advance
              </h2>

              <p className="mb-4 text-gray-700">
                Having these conversations before your due date helps you feel
                more confident and informed on the actual day of delivery.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask about the typical duration of hospital stay for your
                  expected type of delivery.
                </li>
                <li>
                  Discuss what pain management options will be available and how
                  they are administered.
                </li>
                <li>
                  Clarify who will be present with you during labour and
                  delivery, including support persons.
                </li>
                <li>
                  Ask how quickly the team can respond if an emergency C-section
                  becomes necessary.
                </li>
                <li>
                  Discuss your preferences around skin-to-skin contact and early
                  breastfeeding.
                </li>
                <li>
                  Ask about the newborn care and paediatric support available
                  immediately after birth.
                </li>
                <li>
                  Clarify the recommended follow-up schedule after you return
                  home.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Appointment with Dr. Priyanka Pachauri, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you are preparing for your baby&apos;s delivery and are
                searching for a trusted doctor for baby delivery in Moradabad,
                Dr. Priyanka Pachauri&apos;s clinic offers expert care, advanced
                monitoring, and compassionate support from pregnancy through
                delivery and recovery.
              </p>

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
                        Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call for Appointment</p>
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
              <p className="text-gray-700">
                The right doctor for your baby&apos;s delivery brings together
                medical expertise, calm preparedness, and genuine care for both
                mother and newborn. From recognizing labour signs to the moments
                right after birth, having a trusted, experienced doctor for baby
                delivery in Moradabad like Dr. Priyanka Pachauri means you and
                your baby are supported safely at every step of this
                life-changing journey.
              </p>
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
