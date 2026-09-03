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

export default function PaediatricVaccinationMoradabad() {
  const faqs = [
    {
      q: "Which vaccines are given immediately after birth?",
      a: "Certain initial vaccines are administered right after birth as part of the newborn schedule.",
    },
    {
      q: "How often should my newborn come in for growth and milestone checkups?",
      a: "Regular visits are scheduled through infancy to track healthy growth and development.",
    },
    {
      q: "How is vaccine safety and cold chain storage maintained at the clinic?",
      a: "Vaccines are stored under strict, monitored temperature conditions following WHO compliant standards.",
    },
    {
      q: "What should I do if my baby develops a fever after vaccination?",
      a: "Mild fever is common, and simple home care usually helps, with guidance available from the clinic.",
    },
    {
      q: "What advice is given for newborn breastfeeding and digestive colic?",
      a: "Personalized feeding guidance is provided to help manage common newborn digestive concerns.",
    },
    {
      q: "When should I seek immediate pediatric attention for my child?",
      a: "High fever, persistent symptoms, or unusual reactions should prompt a timely consultation.",
    },
    {
      q: "Does Dr. Priyanka Gynaec's clinic offer paediatric vaccination services?",
      a: "Yes, the clinic offers comprehensive paediatric care including vaccination among core services.",
    },
    {
      q: "How can I book a vaccination appointment for my child?",
      a: "You can call or message the clinic directly through the contact details listed on the website.",
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
                Paediatric Vaccination Treatment In Moradabad, Safe Immunization Care For Your Child
              </h1>

              <p className="text-gray-700 mb-4">
                Vaccination is one of the most important steps a parent can take to protect a child&apos;s health from the earliest days of life. Timely immunization helps guard against serious infections during a stage when a child&apos;s immune system is still developing. For families in Moradabad looking for reliable paediatric vaccination treatment, having access to properly stored vaccines, an experienced medical team, and a comfortable clinic environment makes a meaningful difference in how safely and smoothly the vaccination journey goes.
              </p>

              <p className="text-gray-700">
                This guide covers everything you need to know about paediatric vaccination treatment in Moradabad, including why timely immunization matters, what a proper vaccination visit involves, and what parents can expect at each stage of their child&apos;s care.
              </p>
            </div>

            {/* Section 2 — Why Timely Vaccination Matters For Children */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Timely Vaccination Matters For Children
              </h2>

              <p className="text-gray-700 mb-4">
                A child&apos;s immune system takes time to fully develop, which makes early protection against preventable diseases especially important.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Vaccines help the body build defenses before exposure to serious infections</li>
                <li>Timely immunization reduces the risk of complications from childhood illnesses</li>
                <li>Vaccination schedules are designed around a child&apos;s developing immune response</li>
                <li>Consistent immunization also helps protect the wider community around your child</li>
                <li>Delayed vaccination can leave infants vulnerable during critical early months</li>
                <li>Regular vaccination visits allow doctors to track your child&apos;s overall health too</li>
              </ul>
            </div>

            {/* Section 3 — What Paediatric Vaccination Treatment Includes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Paediatric Vaccination Treatment Includes
              </h2>

              <p className="text-gray-700 mb-4">
                A proper paediatric vaccination visit involves far more than just the injection itself. It is part of a broader approach to newborn and child wellness.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A review of your child&apos;s vaccination history and upcoming due dates</li>
                <li>IAP recommended immunization schedules followed for age appropriate protection</li>
                <li>Cold chain storage practices to keep vaccines safe and effective</li>
                <li>A brief health check before vaccination to confirm the child is fit for the dose</li>
                <li>Guidance on what to expect after vaccination, including mild common reactions</li>
                <li>Growth and developmental tracking alongside routine immunization visits</li>
                <li>A calm, child friendly environment designed to reduce fear and discomfort</li>
              </ul>
            </div>

            {/* Section 4 — Understanding The IAP Recommended Vaccination Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding The IAP Recommended Vaccination Approach
              </h2>

              <p className="text-gray-700 mb-4">
                The Indian Academy of Pediatrics publishes recommended immunization schedules that guide when children should receive specific vaccines.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Schedules are based on age milestones from birth through adolescence</li>
                <li>They are reviewed and updated regularly based on medical research</li>
                <li>Following a recommended schedule helps ensure timely, complete protection</li>
                <li>Doctors adjust timing slightly based on each child&apos;s individual health needs</li>
                <li>Parents are guided on which vaccines are due at each visit</li>
                <li>Record keeping helps track completed doses and upcoming appointments</li>
              </ul>
            </div>

            {/* Section 5 — Why Cold Chain Storage Is Critical For Vaccine Safety */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Cold Chain Storage Is Critical For Vaccine Safety
              </h2>

              <p className="text-gray-700 mb-4">
                Vaccines are sensitive to temperature, and improper storage can reduce their effectiveness significantly.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Vaccines must be stored within a strict, monitored temperature range</li>
                <li>Cold chain storage protects the vaccine from the manufacturing site to the injection</li>
                <li>Any break in the cold chain can compromise how well a vaccine works</li>
                <li>Reliable clinics follow WHO compliant storage standards for every vaccine</li>
                <li>Proper storage practices reduce the risk of reduced protection or wasted doses</li>
                <li>Parents can ask their clinic directly about their cold chain storage practices</li>
              </ul>
            </div>

            {/* Section 6 — Common Concerns Parents Have About Vaccination */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Concerns Parents Have About Vaccination
              </h2>

              <p className="text-gray-700 mb-4">
                It is completely natural for parents to have questions and concerns about their child&apos;s vaccination visits.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Whether their child will experience pain or discomfort during the injection</li>
                <li>Whether mild fever or fussiness after vaccination is normal</li>
                <li>Whether it is safe to vaccinate a child who has a minor cold or cough</li>
                <li>How to manage a child&apos;s anxiety about injections</li>
                <li>Whether missed or delayed doses can still be safely completed later</li>
                <li>What signs after vaccination would require medical attention</li>
              </ul>

              <p className="text-gray-700">
                Discussing these concerns openly with your pediatrician helps you feel confident and prepared before each visit.
              </p>
            </div>

            {/* Section 7 — How A Paediatric Vaccination Visit Usually Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How A Paediatric Vaccination Visit Usually Works
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding the general flow of a vaccination appointment can help parents and children feel more at ease.
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Check In:</strong> Your child&apos;s vaccination record and due dates are reviewed
                </li>
                <li>
                  <strong>Health Assessment:</strong> A brief check confirms your child is fit for vaccination
                </li>
                <li>
                  <strong>Guidance:</strong> The doctor explains which vaccines are being given and why
                </li>
                <li>
                  <strong>Administration:</strong> The vaccine is given following proper safety protocols
                </li>
                <li>
                  <strong>Observation:</strong> A short observation period follows to monitor for reactions
                </li>
                <li>
                  <strong>Aftercare Advice:</strong> Parents receive guidance on caring for their child afterward
                </li>
                <li>
                  <strong>Next Visit Planning:</strong> The following due date is scheduled before you leave
                </li>
              </ol>
            </div>

            {/* Section 8 — Newborn Care Alongside Vaccination */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Newborn Care Alongside Vaccination
              </h2>

              <p className="text-gray-700 mb-4">
                Vaccination is often just one part of a broader newborn and infant care journey that begins right after birth.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Newborn physical assessment and jaundice evaluation soon after delivery</li>
                <li>Feeding guidance to support healthy growth in the earliest weeks</li>
                <li>Monitoring for common newborn concerns like digestive colic</li>
                <li>Growth and milestone tracking during routine wellness visits</li>
                <li>Early identification of any developmental concerns that need attention</li>
                <li>A consistent care team that understands your child&apos;s health history</li>
              </ul>
            </div>

            {/* Section 9 — Managing Common Childhood Illnesses */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Managing Common Childhood Illnesses
              </h2>

              <p className="text-gray-700 mb-4">
                Beyond vaccination, ongoing pediatric care often involves managing everyday childhood health concerns as they arise.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Respiratory concerns such as cough, cold, and mild breathing difficulty</li>
                <li>Gastrointestinal issues including stomach upset and feeding related concerns</li>
                <li>Skin conditions such as rashes, allergies, and minor irritations</li>
                <li>Fever management and guidance on when home care is appropriate</li>
                <li>Recognizing symptoms that require prompt medical evaluation</li>
                <li>Ongoing support for children with recurring minor illnesses</li>
              </ul>
            </div>

            {/* Section 10 — When To Consult A Pediatrician */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When To Consult A Pediatrician
              </h2>

              <p className="text-gray-700 mb-4">
                Certain situations call for a timely pediatric consultation rather than waiting for the next scheduled visit.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your newborn is due for a routine wellness checkup or feeding guidance</li>
                <li>Your child is due for an upcoming vaccination or missed a scheduled dose</li>
                <li>Your child develops a high fever, persistent cough, rash, or vomiting</li>
                <li>You notice concerns about your child&apos;s physical growth or milestones</li>
                <li>Your child shows unusual behavior or prolonged discomfort after vaccination</li>
                <li>You simply want reassurance about your child&apos;s overall development</li>
              </ul>
            </div>

            {/* Section 11 — Why Choose Dr. Priyanka Gynaec For Paediatric Vaccination In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec For Paediatric Vaccination In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing a trusted pediatric care provider matters just as much as following the right vaccination schedule. Dr. Priyanka Gynaec is an experienced obstetrician, gynaecologist, and IVF specialist who co-leads Shree Advanced Urogynae Clinic and serves as a consultant at Ujala Cygnus BrightStar Hospital in Moradabad, offering paediatric care that combines newborn assessments, IAP recommended vaccination schedules, and strict cold chain immunization practices within a warm, child friendly clinic environment.
              </p>
            </div>

            {/* Section 12 — Supporting Your Child's Development Beyond The Vaccine Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting Your Child&apos;s Development Beyond The Vaccine Schedule
              </h2>

              <p className="text-gray-700 mb-4">
                A complete approach to pediatric care looks beyond vaccination alone to support your child&apos;s overall wellbeing.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular growth tracking to monitor healthy physical development</li>
                <li>Milestone assessments to identify any early developmental concerns</li>
                <li>Nutritional guidance appropriate for each stage of childhood</li>
                <li>Open communication with parents about behavioral or feeding questions</li>
                <li>A consistent care relationship that builds trust as your child grows</li>
                <li>Coordinated care between newborn checkups and later childhood visits</li>
              </ul>
            </div>

            {/* Section 13 — Preparing Your Child For A Vaccination Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing Your Child For A Vaccination Visit
              </h2>

              <p className="text-gray-700 mb-4">
                A little preparation can make the entire vaccination experience smoother and less stressful for both children and parents.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Carry your child&apos;s existing vaccination card or record to every visit</li>
                <li>Dress your child in comfortable clothing that allows easy access to the arm or thigh</li>
                <li>Feed your infant shortly before the visit if that is part of your usual routine</li>
                <li>Bring a favorite toy or comfort item to help ease any anxiety</li>
                <li>Mention any recent illness or allergy to the doctor before vaccination</li>
                <li>Plan for some quiet time at home after the visit for your child to rest</li>
                <li>Keep a list of questions ready so nothing is missed during the consultation</li>
              </ul>
            </div>

            {/* Section 14 — What To Expect After Vaccination */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What To Expect After Vaccination
              </h2>

              <p className="text-gray-700 mb-4">
                Most children handle vaccination well, and understanding common after effects helps parents respond calmly and confidently.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Mild soreness or redness at the injection site is common and temporary</li>
                <li>Slight fussiness or reduced appetite for a short period is not unusual</li>
                <li>A low grade fever may occur and typically resolves within a day or two</li>
                <li>Comfort measures like extra cuddling and rest often help children settle</li>
                <li>Most reactions are mild and resolve on their own without concern</li>
                <li>Any unusual or prolonged symptoms should always be discussed with your doctor</li>
              </ul>
            </div>

            {/* Section 15 — Building A Long Term Relationship With Your Child's Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Building A Long Term Relationship With Your Child&apos;s Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Consistent pediatric care goes beyond individual vaccination visits and grows into an ongoing relationship that benefits your child for years.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A doctor who knows your child&apos;s history can spot changes more easily</li>
                <li>Continuity of care makes it easier to track growth patterns over time</li>
                <li>Familiarity helps reduce anxiety for children at every subsequent visit</li>
                <li>Parents feel more comfortable asking questions with a trusted provider</li>
                <li>A long term relationship supports smoother transitions between childhood stages</li>
                <li>Consistent record keeping ensures no vaccination or checkup is ever missed</li>
              </ul>
            </div>

            {/* Section 16 — Questions To Ask During Your Child's Vaccination Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions To Ask During Your Child&apos;s Vaccination Visit
              </h2>

              <p className="text-gray-700 mb-4">
                Asking the right questions helps parents feel informed and confident about their child&apos;s immunization plan.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Which vaccines are being given today and what do they protect against</li>
                <li>What mild reactions are normal and what would require a follow up call</li>
                <li>When is the next vaccination due and what should we prepare for it</li>
                <li>Are there any precautions we should take at home after this visit</li>
                <li>How is the vaccine stored to ensure it remains safe and effective</li>
                <li>What should we do if we miss an upcoming scheduled dose</li>
              </ul>

              <p className="text-gray-700">
                Having these answers ready helps parents feel more confident managing their child&apos;s ongoing immunization journey.
              </p>
            </div>

            {/* Section 17 — Final Thoughts On Paediatric Vaccination Treatment In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts On Paediatric Vaccination Treatment In Moradabad
              </h2>

              <p className="text-gray-700">
                Vaccination remains one of the safest and most effective ways to protect a child&apos;s health during their most vulnerable early years. Choosing a clinic that follows IAP recommended schedules, maintains strict cold chain storage, and creates a calm, reassuring environment for both children and parents makes the entire immunization journey easier to navigate with confidence.
              </p>
            </div>

            {/* Section 18 — Contact Details */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Contact Details
              </h2>

              <p className="text-gray-700 mb-6">
                For appointments or queries related to paediatric vaccination treatment in Moradabad, you can reach Dr. Priyanka Gynaec through the following details.
              </p>

              <div className="space-y-4 mb-6">
                {/* Clinic Address */}
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad,
                      Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:9079765578" className="hover:underline text-black">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="hover:underline text-black">
                      +91 8979670705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyanka@gynaecologistmoradabad.com"
                      className="hover:underline text-black"
                    >
                      drpriyanka@gynaecologistmoradabad.com
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

            {/* Section 19 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
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