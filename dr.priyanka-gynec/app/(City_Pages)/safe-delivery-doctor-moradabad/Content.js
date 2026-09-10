import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function SafeDeliveryDoctorMoradabad() {
  const faqs = [
    {
      q: "What does a safe delivery doctor actually do?",
      a: "They monitor pregnancy closely, plan the delivery approach, manage labour, and handle any emergencies to ensure a safe outcome.",
    },
    {
      q: "Who is a trusted safe delivery doctor in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec clinic, Moradabad, is a well-known name for safe delivery care.",
    },
    {
      q: "Is normal delivery always possible?",
      a: "Not always, but a good doctor prioritises normal delivery whenever it remains safe for mother and baby.",
    },
    {
      q: "When should I go to the hospital during labour?",
      a: "When contractions become regular and painful, or if your water breaks, you should head to the hospital immediately.",
    },
    {
      q: "What facilities should a safe delivery hospital have?",
      a: "A dedicated labour room, anaesthesia backup, blood transfusion facility, and NICU support are essential.",
    },
    {
      q: "Can a C-section become necessary even after a smooth pregnancy?",
      a: "Yes, labour can be unpredictable, and a C-section may be needed based on real-time conditions during delivery.",
    },
    {
      q: "What warning signs should I report immediately near my due date?",
      a: "Severe headache, sudden swelling, bleeding, reduced baby movement, or early contractions need immediate attention.",
    },
    {
      q: "Is postnatal follow-up included after delivery?",
      a: "Yes, a follow-up visit is usually scheduled within the first week after discharge to check recovery.",
    },
    {
      q: "How can I book an appointment with a safe delivery doctor?",
      a: "You can book an appointment by messaging or calling the WhatsApp number +91 8979670705.",
    },
    {
      q: "Does the doctor support breastfeeding after delivery?",
      a: "Yes, breastfeeding guidance typically begins within the first hour after birth, when possible.",
    },
    {
      q: "Can I discuss my birth plan in advance?",
      a: "Yes, discussing your preferences and concerns with your doctor before the due date is strongly recommended.",
    },
    {
      q: "Is newborn care available immediately after delivery?",
      a: "Yes, a good delivery hospital ensures the baby is checked and cared for immediately after birth, often with paediatric support on-site.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 order-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Safe Delivery Doctor in Moradabad – Gentle, Expert Care for Your Big Day
              </h1>

              <p className="text-gray-700 mb-4">
                Delivery day is the moment every expecting family waits for, and it is also the moment where the right medical guidance matters more than at any other point in the pregnancy. Choosing a safe delivery doctor in Moradabad is not just about finding someone qualified — it is about finding a doctor who can balance clinical expertise with genuine calmness, someone who can guide a mother confidently through labour while being fully prepared for any unexpected turn. Many families underestimate how much this choice affects both the physical safety and the emotional experience of childbirth.
              </p>

              <p className="text-gray-700">
                This guide covers everything worth knowing about safe delivery care, what a good delivery doctor actually does, the difference between normal delivery and C-section, and why Dr. Priyanka Pachauri is a trusted name for safe delivery in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Does Safe Delivery Mean */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Does &quot;Safe Delivery&quot; Actually Mean?
              </h2>

              <p className="text-gray-700 mb-4">
                Safe delivery refers to a childbirth process that is carefully planned, closely monitored, and managed by a skilled medical team to protect the health of both mother and baby, whether the delivery happens normally or through a C-section.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It involves continuous monitoring of the mother and baby during labour</li>
                <li>It requires a trained doctor and support team present at the time of birth</li>
                <li>It includes access to emergency backup, such as blood transfusion or surgical support, if needed</li>
                <li>It focuses on minimising complications while respecting the mother's preferences wherever possible</li>
                <li>The ultimate goal is a healthy mother and a healthy baby, regardless of the delivery method</li>
              </ul>
            </div>

            {/* Section 3 — Why Choosing the Right Doctor Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choosing the Right Delivery Doctor Matters So Much
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A skilled doctor can recognise early warning signs during labour and act quickly</li>
                <li>The right doctor helps you understand your delivery options well before the due date</li>
                <li>Continuous care from the same doctor means they already know your complete pregnancy history</li>
                <li>A good delivery doctor prioritises normal delivery whenever it remains safe, reducing unnecessary surgical intervention</li>
                <li>Access to emergency facilities through the doctor's hospital tie-up ensures readiness for complications</li>
                <li>Emotional support from a trusted doctor helps reduce fear and anxiety during labour</li>
              </ul>
            </div>

            {/* Section 4 — What a Safe Delivery Doctor Does */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What a Safe Delivery Doctor Actually Does
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Monitors the pregnancy closely in the weeks leading up to delivery</li>
                <li>Plans the mode of delivery based on the mother's health and the baby's position</li>
                <li>Tracks labour progress using foetal heart rate monitoring and regular examinations</li>
                <li>Manages pain relief options, including guidance on epidurals or natural pain management</li>
                <li>Handles emergencies such as foetal distress or prolonged labour promptly</li>
                <li>Performs or supervises C-sections when medically necessary</li>
                <li>Provides immediate postnatal care for both mother and newborn</li>
                <li>Guides recovery and breastfeeding support after delivery</li>
              </ul>
            </div>

            {/* Section 5 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – A Trusted Safe Delivery Doctor in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec clinic in Gandhi Nagar, Moradabad, has built a strong reputation for guiding safe deliveries alongside her expertise in high risk pregnancy management, laparoscopy, and fertility treatment. According to her clinic's website, her guiding philosophy, &quot;Her Health First,&quot; reflects a deep commitment to placing the mother's comfort and safety above everything else during childbirth.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialised experience in antenatal care through to delivery, including high risk and complicated pregnancy cases</li>
                <li>International fellowships and gold medal credentials reflecting advanced clinical training</li>
                <li>In-house Voluson 3D and 4D ultrasound machine, allowing accurate assessment of the baby's position and growth before delivery</li>
                <li>A gentle, patient-first approach that prioritises normal delivery wherever medically safe</li>
                <li>An integrated care team that follows the mother's complete history from the first visit through delivery and recovery</li>
                <li>On-site paediatric care, ensuring the newborn receives immediate attention right after birth</li>
                <li>A calm, supportive environment designed to reduce stress during labour and delivery</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If you are looking for a safe delivery doctor in Moradabad who combines modern medical technology with a genuinely caring approach, Dr. Priyanka Pachauri is a dependable choice to consider.
              </p>
            </div>

            {/* Section 6 — Normal Delivery vs C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery vs C-Section – What a Safe Delivery Doctor Considers
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>If the mother's BP, sugar levels, and the baby's position are stable, normal delivery is generally the preferred and safer option</li>
                <li>If the placenta is low-lying, the baby is in a breech position, or there is severe preeclampsia, a C-section becomes the safer route</li>
                <li>Labour progress, foetal heart rate, and the mother's overall condition are constantly reassessed during delivery</li>
                <li>The final decision is often made in real time, based on how labour actually progresses</li>
                <li>A well-prepared doctor and hospital keep both delivery pathways ready with trained staff and equipment</li>
              </ul>
            </div>

            {/* Section 7 — Warning Signs Near Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs That Should Never Be Ignored Near Delivery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe headache that does not improve with medication</li>
                <li>Blurred vision or seeing flashes of light</li>
                <li>Sudden swelling in the hands, feet, or face</li>
                <li>Vaginal bleeding or unusual discharge close to the due date</li>
                <li>A noticeable decrease in the baby's movements</li>
                <li>Regular, painful contractions before the expected due date</li>
                <li>Water breaking before labour begins</li>
                <li>High fever or chills</li>
                <li>Sudden, severe abdominal pain</li>
                <li>Reduced urine output or a burning sensation while urinating</li>
              </ul>
            </div>

            {/* Section 8 — Preparing for Safe Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for a Safe Delivery – What Expecting Mothers Should Know
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Attend all antenatal appointments regularly, especially in the final trimester</li>
                <li>Discuss your birth plan and preferences with your doctor well in advance</li>
                <li>Pack your hospital bag at least a few weeks before the due date</li>
                <li>Learn about pain management options available at your chosen hospital</li>
                <li>Understand the signs of labour so you know when to head to the hospital</li>
                <li>Keep emergency contact numbers and hospital details easily accessible</li>
                <li>Arrange transport in advance to avoid delays when labour begins</li>
                <li>Involve your partner or a family member in birth planning discussions</li>
              </ul>
            </div>

            {/* Section 9 — Facilities to Confirm */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities to Confirm With Your Delivery Doctor and Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Availability of a dedicated labour room with continuous foetal monitoring</li>
                <li>Anaesthesia and surgical backup for emergency C-sections</li>
                <li>Blood transfusion facility in case of complications during delivery</li>
                <li>NICU-level newborn care, especially important for early or complicated deliveries</li>
                <li>24-hour doctor and nursing availability, not limited to OPD hours</li>
                <li>Clear communication about expected costs for delivery and any additional procedures</li>
              </ul>
            </div>

            {/* Section 10 — What Happens After Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens Immediately After Delivery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The baby is checked for breathing, heart rate, and overall health immediately after birth</li>
                <li>The mother is monitored closely for bleeding and recovery in the hours following delivery</li>
                <li>Breastfeeding support typically begins within the first hour, when possible</li>
                <li>The newborn undergoes basic screening and vaccination as per schedule</li>
                <li>The mother receives guidance on postnatal recovery, including diet and rest</li>
                <li>A follow-up visit is usually scheduled within the first week after discharge</li>
              </ul>
            </div>

            {/* Section 11 — Why Mother's Comfort Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why the Mother's Comfort Matters as Much as the Medical Outcome
              </h2>

              <p className="text-gray-700 mb-4">
                While the primary goal of any delivery is a safe outcome for mother and baby, the emotional experience of childbirth also has a lasting impact that deserves equal attention. A mother who feels heard, respected, and genuinely supported by her doctor throughout labour tends to experience less fear and often copes better with pain and unexpected changes in her birth plan. Small things make a real difference here — a doctor who explains what is happening at each stage of labour, who checks in on how the mother is feeling rather than only reviewing monitors, and who involves the family in decisions wherever medically appropriate, creates an environment where the mother feels like an active participant rather than a passive patient during one of the most significant moments of her life.
              </p>

              <p className="text-gray-700">
                It also helps for families to understand that a safe delivery is rarely about following one rigid plan from start to finish. Labour can be unpredictable, and even a pregnancy that progressed smoothly for nine months can require a sudden change in approach on the day itself. A truly experienced delivery doctor prepares mothers for this possibility in advance, explaining calmly why a shift from a planned normal delivery to an emergency C-section, for example, might become necessary, rather than presenting it as a last-minute shock. This kind of honest, ongoing communication throughout pregnancy builds the trust needed for a mother to feel safe handing over difficult decisions to her doctor in the moment they matter most, which is ultimately what a truly safe delivery experience is built on.
              </p>
            </div>

            {/* Section 12 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Address, Contact & WhatsApp
              </h2>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec Clinic</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:9079765578" className="hover:underline">
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a href="tel:8979670705" className="hover:underline">
                          +91 8979670705 (WhatsApp)
                        </a>
                      </div>

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyanka@gynaecologistmoradabad.com"
                          className="hover:underline"
                        >
                          drpriyanka@gynaecologistmoradabad.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        https://www.gynaecologistmoradabad.com/
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Link href="/contact">
                    <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                      <Phone className="inline mr-2" size={18} />
                      Contact Us
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                      Explore Services
                    </button>
                  </Link>
                </div>
              </div>

              <p className="text-gray-700 mt-6">
                For appointments, directions, or any urgent delivery-related query, reach out directly on WhatsApp at +91 8979670705.
              </p>
            </div>

            {/* Section 13 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}