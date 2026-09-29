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

export default function BestDoctorForDeliveryMoradabad() {
  const faqs = [
    {
      q: "Who is the best doctor for delivery in Moradabad?",
      a: "Dr. Priyanka Pachauri is a highly trusted gynaecologist in Moradabad known for safe normal and C-section deliveries.",
    },
    {
      q: "Does Dr. Priyanka Pachauri support normal delivery?",
      a: "Yes, she prioritizes safe, natural delivery whenever medically appropriate for the mother and baby.",
    },
    {
      q: "Is normal delivery possible after a previous C-section?",
      a: "In many cases, yes, with proper evaluation; this is discussed individually based on your history.",
    },
    {
      q: "What happens if labour doesn't progress as planned?",
      a: "The medical team monitors closely and can switch to a C-section quickly if needed for safety.",
    },
    {
      q: "Are pain management options available during labour?",
      a: "Yes, various pain management options are discussed and offered based on your preference and suitability.",
    },
    {
      q: "When should I finalize my birth plan?",
      a: "Typically during the third trimester, in discussion with your doctor based on pregnancy progress.",
    },
    {
      q: "Is postnatal care included after delivery?",
      a: "Yes, postnatal check-ups, recovery monitoring, and breastfeeding support are provided.",
    },
    {
      q: "Does the clinic handle high-risk or emergency deliveries?",
      a: "Yes, Dr. Priyanka Pachauri is experienced in managing high-risk pregnancies and emergency delivery situations.",
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
                Best Doctor for Delivery in Moradabad – Complete Guide by Dr.
                Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                Choosing the right doctor for your delivery is one of the most
                important decisions of your pregnancy journey. The experience,
                approach, and expertise of your doctor directly influence not
                just the safety of the delivery but also your comfort and
                confidence during labour. If you are searching for the best
                doctor for delivery in Moradabad, this guide explains what to
                look for in a delivery specialist and why Dr. Priyanka Pachauri
                is a trusted choice for expecting mothers across the region.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Delivery Doctor Matters
              </h2>

              <p className="mb-4 text-gray-700">
                The birthing experience varies greatly depending on the
                expertise, approach, and preparedness of your doctor. A
                well-chosen specialist can make the difference between a
                stressful experience and a safe, empowering one.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reduces complications through timely decision-making during
                  labour.
                </li>
                <li>
                  Provides personalized birth planning based on your health and
                  pregnancy history.
                </li>
                <li>
                  Offers reassurance and clear communication during an
                  emotionally intense time.
                </li>
                <li>
                  Ensures readiness for both normal delivery and emergency
                  interventions if needed.
                </li>
                <li>
                  Supports continuity of care from pregnancy through postnatal
                  recovery.
                </li>
                <li>
                  Builds trust and comfort, which can positively influence the
                  birthing experience.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Look for in the Best Delivery Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Not every gynaecologist specializes equally in delivery care.
                Here are the key factors to evaluate when choosing a doctor for
                your delivery.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Strong track record in both normal and caesarean deliveries.
                </li>
                <li>
                  Availability of advanced monitoring equipment during labour.
                </li>
                <li>
                  Clear communication about your birth plan and preferences.
                </li>
                <li>
                  Experience handling high-risk deliveries and emergencies.
                </li>
                <li>
                  Access to a well-equipped hospital or maternity facility.
                </li>
                <li>
                  Positive patient testimonials and referrals from other
                  mothers.
                </li>
                <li>
                  A team-based approach with skilled nursing and paediatric
                  support.
                </li>
                <li>
                  Willingness to discuss pain management options during labour.
                </li>
                <li>
                  Focus on supporting natural delivery whenever medically safe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Delivery: Understanding Your Options
              </h2>

              <p className="mb-4 text-gray-700">
                Every pregnancy is different, and understanding delivery options
                helps you have informed conversations with your doctor.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal (Vaginal) Delivery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Generally involves a shorter hospital stay and faster recovery.
                </li>
                <li>
                  Lower risk of surgical complications compared to C-section.
                </li>
                <li>
                  Supports early skin-to-skin contact and breastfeeding
                  initiation.
                </li>
                <li>
                  Preferred approach when the pregnancy and baby&apos;s position
                  allow it safely.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Caesarean Section (C-Section):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recommended for specific medical reasons such as breech
                  position, foetal distress, or placenta previa.
                </li>
                <li>
                  Necessary in emergency situations to protect the health of
                  mother or baby.
                </li>
                <li>
                  Planned C-sections may be advised for certain high-risk
                  pregnancies.
                </li>
                <li>
                  Modern surgical techniques support quicker recovery than in
                  the past.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Assisted Delivery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  May involve forceps or vacuum assistance in specific
                  situations.
                </li>
                <li>
                  Used when additional support is needed during the final stage
                  of labour.
                </li>
                <li>
                  Performed under close medical supervision for safety.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Concerns Expecting Mothers Have About Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fear of labour pain and how it will be managed.
                </li>
                <li>
                  Uncertainty about whether normal delivery will be possible.
                </li>
                <li>Anxiety about complications during labour.</li>
                <li>
                  Concerns about hospital environment and support staff
                  availability.
                </li>
                <li>
                  Worry about decision-making speed during emergencies.
                </li>
                <li>
                  Questions about postnatal recovery and newborn care support.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A good delivery doctor addresses each of these concerns
                proactively, well before the due date arrives.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Prepares You for Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                A well-structured, personalized approach to delivery planning
                helps reduce anxiety and improve outcomes for both mother and
                baby.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed birth plan discussion during the third trimester.
                </li>
                <li>
                  Regular monitoring of baby&apos;s position, growth, and
                  amniotic fluid levels.
                </li>
                <li>
                  Clear explanation of when normal delivery is safe versus when
                  C-section may be needed.
                </li>
                <li>
                  Guidance on pain management options available during labour.
                </li>
                <li>
                  Preparedness for emergency interventions with advanced
                  monitoring equipment.
                </li>
                <li>
                  Coordination with paediatric care for immediate newborn
                  attention.
                </li>
                <li>
                  Postnatal check-ups to monitor recovery for both mother and
                  baby.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Best Doctor for Delivery in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is widely recognized as one of the best
                doctors for delivery in Moradabad, known for her calm, skilled,
                and safety-focused approach to childbirth.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials with international fellowship training.
                </li>
                <li>
                  Strong experience managing both normal and complex deliveries.
                </li>
                <li>
                  Access to advanced foetal monitoring and 3D/4D ultrasound
                  technology.
                </li>
                <li>
                  Known for prioritizing safe, natural delivery whenever
                  medically appropriate.
                </li>
                <li>
                  Fully prepared to handle emergency C-sections and high-risk
                  deliveries.
                </li>
                <li>
                  Compassionate communication style that keeps expecting mothers
                  informed and reassured.
                </li>
                <li>
                  Strong reputation built through positive outcomes and patient
                  referrals across Moradabad.
                </li>
                <li>
                  Continuity of care from the first antenatal visit through
                  delivery and beyond.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery and Maternity Services Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Normal Delivery with focus on natural, gentle birthing
                  support.
                </li>
                <li>Emergency and planned Caesarean Section care.</li>
                <li>High-risk pregnancy delivery management.</li>
                <li>
                  Antenatal Services with trimester-wise monitoring leading up
                  to delivery.
                </li>
                <li>
                  Pregnancy & Birthing Care with personalized birth plans.
                </li>
                <li>
                  Postnatal care and recovery monitoring for mother.
                </li>
                <li>
                  Paediatric care coordination for immediate newborn health
                  needs.
                </li>
                <li>Breastfeeding support and guidance after delivery.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Your Delivery?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Proven track record supporting safe deliveries across all risk
                  levels.
                </li>
                <li>
                  Advanced technology for accurate monitoring during labour.
                </li>
                <li>
                  A team-based approach ensuring readiness for any situation.
                </li>
                <li>
                  Personalized birth planning tailored to your health and
                  preferences.
                </li>
                <li>
                  Comfortable, supportive environment during one of life&apos;s
                  biggest moments.
                </li>
                <li>
                  Continuity of care extending into postnatal recovery and
                  newborn support.
                </li>
                <li>
                  Consistently positive feedback and testimonials from delivered
                  mothers.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Normal delivery is always more painful
                  than C-section. <strong>Fact:</strong> Pain management options
                  are available for both, and recovery is generally faster after
                  normal delivery.
                </li>
                <li>
                  <strong>Myth:</strong> Once you&apos;ve had one C-section, all
                  future deliveries must be C-section. <strong>Fact:</strong> In
                  many cases, normal delivery after a C-section (VBAC) is
                  possible with proper evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> Induced labour is always risky.{" "}
                  <strong>Fact:</strong> Induction is a safe, commonly used
                  method when medically indicated and properly monitored.
                </li>
                <li>
                  <strong>Myth:</strong> Older mothers can never have a normal
                  delivery. <strong>Fact:</strong> With proper monitoring, many
                  women over 35 have successful normal deliveries.
                </li>
                <li>
                  <strong>Myth:</strong> Epidurals harm the baby.{" "}
                  <strong>Fact:</strong> Epidurals are considered safe and are
                  widely used for pain management during labour.
                </li>
                <li>
                  <strong>Myth:</strong> The due date is exact and delivery must
                  happen on that day. <strong>Fact:</strong> The due date is an
                  estimate; delivery can safely occur within a range of a few
                  weeks around it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for a Smooth Delivery Experience
              </h2>

              <p className="mb-4 text-gray-700">
                Preparation in the weeks leading up to your due date can
                significantly ease the delivery process.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Attend all scheduled antenatal visits, especially in the final
                  trimester.
                </li>
                <li>
                  Discuss and finalize your birth plan preferences with your
                  doctor.
                </li>
                <li>
                  Pack your hospital bag in advance with essentials for mother
                  and baby.
                </li>
                <li>
                  Learn about labour signs so you know when to head to the
                  hospital.
                </li>
                <li>
                  Practice breathing and relaxation techniques recommended
                  during pregnancy classes.
                </li>
                <li>
                  Arrange transportation and support system for the day of
                  delivery.
                </li>
                <li>
                  Keep emergency contact numbers, including your doctor&apos;s
                  clinic, easily accessible.
                </li>
                <li>
                  Stay informed about pain management options so you can make
                  confident choices.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Labour and Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Continuous monitoring of your vitals and baby&apos;s heartbeat
                  during labour.
                </li>
                <li>
                  Clear communication from the medical team at every stage.
                </li>
                <li>
                  Pain management options offered based on your preference and
                  medical suitability.
                </li>
                <li>
                  Skilled decision-making if the situation shifts from normal
                  delivery to C-section.
                </li>
                <li>
                  Immediate newborn care and assessment right after birth.
                </li>
                <li>
                  Support for early skin-to-skin contact and breastfeeding
                  initiation.
                </li>
                <li>
                  Postnatal monitoring before discharge to ensure mother and
                  baby are stable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postnatal Care After Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Delivery care doesn&apos;t end once the baby arrives. Proper
                postnatal support ensures smooth recovery for the mother and
                healthy growth for the newborn.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Monitoring for postpartum bleeding and recovery progress.
                </li>
                <li>
                  Guidance on wound care after normal delivery or C-section.
                </li>
                <li>
                  Support and guidance for establishing breastfeeding.
                </li>
                <li>
                  Nutritional advice to support recovery and milk production.
                </li>
                <li>
                  Emotional wellbeing check-ins to screen for postpartum mood
                  changes.
                </li>
                <li>
                  Newborn health check-ups and vaccination scheduling.
                </li>
                <li>
                  Follow-up visits to monitor overall recovery over the
                  following weeks.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing Between a Clinic and a Hospital for Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Expecting mothers often wonder whether to deliver at a smaller
                clinic or a larger hospital setup. Understanding the difference
                helps in making an informed choice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A dedicated maternity clinic often provides more personalized,
                  continuous care with the same doctor throughout.
                </li>
                <li>
                  Larger hospitals may offer broader emergency infrastructure
                  but with less consistency in the treating doctor.
                </li>
                <li>
                  Look for a facility with round-the-clock availability of your
                  chosen doctor or a trusted backup team.
                </li>
                <li>
                  Check for on-site NICU or newborn care support in case of any
                  complications.
                </li>
                <li>
                  Ask about ambulance and referral arrangements in case advanced
                  emergency care is needed.
                </li>
                <li>
                  Prioritize a facility where your doctor personally oversees
                  your labour rather than handing over to an unfamiliar team.
                </li>
                <li>
                  Comfort, hygiene, and privacy of the labour room are equally
                  important factors to consider.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Delivery Doctor Before Due Date
              </h2>

              <p className="mb-4 text-gray-700">
                Being well-prepared with the right questions can help you feel
                more confident as your due date approaches.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What is your approach to pain management during labour?
                </li>
                <li>
                  Under what circumstances would you recommend a C-section?
                </li>
                <li>
                  Will you personally be available on my due date, or is there a
                  backup doctor?
                </li>
                <li>
                  What newborn care support is available immediately after birth?
                </li>
                <li>
                  How do you handle unexpected complications during labour?
                </li>
                <li>
                  What is the expected hospital stay duration after delivery?
                </li>
                <li>
                  What postnatal follow-up schedule do you recommend?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Appointment with Dr. Priyanka Pachauri, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you are looking for the best doctor for delivery in Moradabad,
                Dr. Priyanka Pachauri&apos;s clinic offers expert guidance,
                advanced monitoring, and compassionate support from your first
                antenatal visit through delivery and recovery.
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
                Choosing the best doctor for delivery in Moradabad is about more
                than credentials — it&apos;s about finding a specialist who
                prioritizes safety, communicates clearly, and supports your
                birth preferences whenever medically possible. Dr. Priyanka
                Pachauri&apos;s experience, advanced technology, and
                compassionate approach make her a trusted choice for mothers
                across Moradabad seeking a safe and supported delivery
                experience.
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
