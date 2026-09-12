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
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PaediatricVaccinationMoradabad() {
  const faqs = [
    {
      q: "What is paediatric vaccination treatment in Moradabad?",
      a: "Paediatric vaccination treatment in Moradabad refers to vaccination-related care and immunization guidance provided for babies, children, and adolescents, including vaccination record review, scheduled vaccines, missed-dose guidance, and post-vaccination advice.",
    },
    {
      q: "When should children receive vaccinations?",
      a: "Vaccinations are recommended at different stages from the newborn period through childhood and adolescence. The exact schedule should be confirmed according to the child's age, vaccination history, and applicable immunization recommendations.",
    },
    {
      q: "What should I bring to a vaccination appointment?",
      a: "Bring your child's vaccination card or previous immunization records. You should also inform the doctor about recent illness, allergies, regular medicines, medical conditions, and previous vaccine reactions.",
    },
    {
      q: "What are common reactions after vaccination?",
      a: "Some children may experience mild soreness, redness or swelling at the injection site, temporary irritability, tiredness, or mild fever. Parents should follow the healthcare professional's advice about post-vaccination care.",
    },
    {
      q: "What should I do if my child misses a vaccine?",
      a: "Contact a healthcare professional and bring the child's available vaccination records. The doctor can review previous doses and advise whether a catch-up vaccination plan is required.",
    },
    {
      q: "Can a child receive vaccination when they have a cold?",
      a: "Whether vaccination should proceed depends on the child's health and the particular situation. Discuss the child's current symptoms with the doctor before vaccination.",
    },
    {
      q: "Why is proper vaccine storage important?",
      a: "Vaccines can be sensitive to temperature and should be stored and handled according to their specified requirements. Proper storage is an important part of maintaining vaccine quality.",
    },
    {
      q: "Can I discuss a previous vaccine reaction with the doctor?",
      a: "Yes. Parents should inform the doctor about any concerning previous reaction or known allergy before another vaccine is administered.",
    },
    {
      q: "Does vaccination continue after infancy?",
      a: "Yes. Depending on the applicable immunization schedule, children may require additional vaccines or doses during later childhood and adolescence.",
    },
    {
      q: "How can I book paediatric vaccination treatment in Moradabad?",
      a: "You can contact Dr. Priyanka Gynaec using the clinic's phone or WhatsApp details to discuss your child's vaccination requirements and schedule a consultation.",
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
                Paediatric Vaccination Treatment In Moradabad
              </h1>

              <p className="text-gray-700 mb-4">
                Vaccination is an important part of preventive healthcare for babies, children, and adolescents. Timely immunization helps provide protection against several vaccine-preventable infections and supports a child's health during different stages of growth.
              </p>

              <p className="text-gray-700">
                For parents searching for paediatric vaccination treatment in Moradabad, having access to appropriate vaccination guidance can make it easier to understand which vaccines are due, how to maintain vaccination records, and what to expect before and after each vaccination visit.
              </p>
            </div>

            {/* Section 2 — Why Is Vaccination Important */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Is Vaccination Important For Children?
              </h2>

              <p className="text-gray-700 mb-4">
                Children receive vaccines at different ages because their immunization needs change as they grow. Following an appropriate vaccination schedule helps ensure that children receive recommended protection at the relevant stages of childhood.
              </p>

              <p className="text-gray-700 mb-4">
                Vaccination can:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Help protect children from vaccine-preventable infections</li>
                <li>Reduce the risk of certain serious childhood diseases</li>
                <li>Provide age-appropriate protection during infancy and childhood</li>
                <li>Support preventive healthcare throughout childhood</li>
                <li>Help reduce the spread of some preventable infections</li>
                <li>Provide an opportunity to review the child's vaccination history regularly</li>
              </ul>

              <p className="text-gray-700">
                Parents should follow the vaccination advice provided by their healthcare professional and maintain an updated immunization record.
              </p>
            </div>

            {/* Section 3 — What Does Vaccination Treatment Include */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Does Paediatric Vaccination Treatment In Moradabad Include?
              </h2>

              <p className="text-gray-700 mb-4">
                A vaccination visit involves more than simply administering a vaccine. Appropriate care includes reviewing the child's medical and vaccination history and providing parents with information about the vaccination process.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the child's individual situation, a vaccination consultation may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Review of previous vaccination records</li>
                <li>Identification of upcoming or missed vaccine doses</li>
                <li>Discussion of the child's current health</li>
                <li>Review of previous vaccine reactions or allergies</li>
                <li>Information about the recommended vaccine</li>
                <li>Guidance regarding possible common reactions</li>
                <li>Advice about the next vaccination appointment</li>
                <li>Maintenance of an updated vaccination record</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The exact vaccination plan depends on the child's age, previous doses, health history, and applicable immunization recommendations.
              </p>
            </div>

            {/* Section 4 — Understanding Vaccination Schedules */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Childhood Vaccination Schedules
              </h2>

              <p className="text-gray-700 mb-4">
                Vaccination schedules provide guidance about the vaccines and doses recommended at different stages of childhood.
              </p>

              <p className="text-gray-700 mb-4">
                A child's vaccination requirements may change during:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>The newborn period</li>
                <li>Early infancy</li>
                <li>Later infancy</li>
                <li>Toddler years</li>
                <li>Preschool years</li>
                <li>School-age years</li>
                <li>Adolescence</li>
              </ul>

              <p className="text-gray-700">
                Parents should bring the child's vaccination card or available immunization records to every appointment. If the vaccination history is incomplete, the doctor can review the available information and advise on the appropriate next steps.
              </p>
            </div>

            {/* Section 5 — Vaccination From Birth To Adolescence */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Vaccination From Birth To Adolescence
              </h2>

              <p className="text-gray-700">
                Immunization is not limited to the first few months of life. Children may require additional vaccines or doses as they progress through infancy, childhood, and adolescence. Regular vaccination visits help parents stay aware of upcoming immunizations and provide an opportunity to discuss questions about the child's health. For families looking for paediatric vaccination treatment in Moradabad, reviewing the vaccination record regularly can help reduce the possibility of missed or delayed doses.
              </p>
            </div>

            {/* Section 6 — What Happens During A Vaccination Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During A Paediatric Vaccination Visit?
              </h2>

              <p className="text-gray-700 mb-4">
                A typical vaccination appointment may involve several steps.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Vaccination Record Review
                  </h3>
                  <p className="text-gray-700">
                    The child's vaccination card or previous medical records are checked to determine which vaccines and doses have already been received.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Health Assessment
                  </h3>
                  <p className="text-gray-700">
                    The doctor may ask about recent illness, current medicines, allergies, medical conditions, and previous vaccine reactions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Vaccine Discussion
                  </h3>
                  <p className="text-gray-700">
                    Parents can ask which vaccine is being given, what it is intended to protect against, possible common reactions, and when the next dose may be due.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Vaccine Administration
                  </h3>
                  <p className="text-gray-700">
                    The vaccine is administered using appropriate clinical and hygiene practices.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Post-Vaccination Guidance
                  </h3>
                  <p className="text-gray-700">
                    Parents receive information about expected reactions and what to do if they notice symptoms that concern them.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Next Appointment
                  </h3>
                  <p className="text-gray-700">
                    The next vaccination date can be recorded to help parents maintain the child's immunization schedule.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 — Common Reactions After Vaccination */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Reactions After Vaccination
              </h2>

              <p className="text-gray-700 mb-4">
                Some children may experience temporary reactions following vaccination. These reactions can vary depending on the vaccine and the individual child.
              </p>

              <p className="text-gray-700 mb-4">
                Common reactions may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Mild soreness at the injection site</li>
                <li>Temporary redness or swelling</li>
                <li>Mild fever</li>
                <li>Temporary irritability</li>
                <li>Tiredness</li>
                <li>Temporary changes in appetite</li>
              </ul>

              <p className="text-gray-700">
                Parents should follow the advice provided by their healthcare professional. If your child develops a severe, unusual, or concerning reaction after vaccination, seek appropriate medical attention promptly.
              </p>
            </div>

            {/* Section 8 — What If Your Child Misses A Vaccination */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What If Your Child Misses A Vaccination?
              </h2>

              <p className="text-gray-700">
                Vaccination appointments can sometimes be missed because of illness, travel, school schedules, or other family circumstances. If your child has missed a vaccination, do not rely on guesswork about the next dose. Bring the available vaccination records to a doctor so the child's previous doses can be reviewed. Depending on the child's age and vaccination history, the doctor may recommend an appropriate catch-up vaccination plan.
              </p>
            </div>

            {/* Section 9 — Importance Of Keeping A Vaccination Record */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Importance Of Keeping A Vaccination Record
              </h2>

              <p className="text-gray-700 mb-4">
                A vaccination card provides an important record of your child's immunization history.
              </p>

              <p className="text-gray-700 mb-4">
                Parents should:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Keep the vaccination record safely</li>
                <li>Bring it to every vaccination appointment</li>
                <li>Record newly administered vaccines</li>
                <li>Note upcoming vaccination dates</li>
                <li>Keep previous vaccination documents</li>
                <li>Inform the doctor if any information is missing</li>
              </ul>

              <p className="text-gray-700 mt-4">
                An accurate vaccination history helps healthcare professionals make appropriate recommendations.
              </p>
            </div>

            {/* Section 10 — Vaccine Storage And Handling */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Vaccine Storage And Handling
              </h2>

              <p className="text-gray-700">
                Vaccines are temperature-sensitive medical products and need to be stored and handled according to their specified requirements. Appropriate vaccine storage is an important part of a vaccination service. Parents who have questions about vaccine storage or handling can discuss their concerns with the clinic before vaccination. The exact storage requirements can vary between vaccines, so appropriate handling procedures should be followed for each product.
              </p>
            </div>

            {/* Section 11 — How To Prepare Your Child For Vaccination */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How To Prepare Your Child For Vaccination
              </h2>

              <p className="text-gray-700 mb-4">
                Parents can take a few simple steps to make a vaccination appointment more comfortable.
              </p>

              <p className="text-gray-700 mb-4">
                Before visiting the clinic:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Carry your child's vaccination card</li>
                <li>Inform the doctor about recent illness</li>
                <li>Mention known allergies</li>
                <li>Tell the doctor about previous vaccine reactions</li>
                <li>Inform the doctor about regular medicines</li>
                <li>Prepare questions about upcoming vaccines</li>
                <li>Bring a familiar toy or comfort item for a younger child</li>
              </ul>

              <p className="text-gray-700">
                Parents should avoid creating unnecessary fear around injections. A calm and reassuring approach can help children feel more comfortable.
              </p>
            </div>

            {/* Section 12 — Helping Your Child Feel Comfortable */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Helping Your Child Feel Comfortable During Vaccination
              </h2>

              <p className="text-gray-700 mb-4">
                Some children become anxious when they know they are going to receive an injection. Parents can help by remaining calm and reassuring the child.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the child's age, parents can:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Explain the visit using simple language</li>
                <li>Avoid frightening descriptions</li>
                <li>Distract the child with conversation or a toy</li>
                <li>Offer comfort before and after vaccination</li>
                <li>Praise the child for cooperating</li>
                <li>Follow the doctor's aftercare instructions</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Creating a positive experience can make future vaccination visits easier for the child.
              </p>
            </div>

            {/* Section 13 — Vaccination For School-Going Children */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Vaccination For School-Going Children
              </h2>

              <p className="text-gray-700">
                Vaccination needs can continue during school-age years and adolescence. Busy school schedules and family routines can sometimes result in missed appointments. Parents should periodically review their child's vaccination record and discuss age-appropriate immunization requirements with their healthcare provider. A vaccination visit can also be an opportunity to discuss general concerns related to growth, nutrition, development, and overall child health.
              </p>
            </div>

            {/* Section 14 — When Should Parents Consult A Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should Parents Consult A Doctor Before Vaccination?
              </h2>

              <p className="text-gray-700 mb-4">
                A consultation may be appropriate when:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Your child is currently unwell</li>
                <li>Your child has a significant medical condition</li>
                <li>Your child takes regular medication</li>
                <li>Your child has experienced a concerning reaction to a previous vaccine</li>
                <li>Your child has a history of significant allergies</li>
                <li>You are unsure about previous vaccination doses</li>
                <li>Your child has missed multiple vaccinations</li>
                <li>You have questions about the next recommended vaccine</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The doctor can assess the child's individual circumstances and provide appropriate guidance.
              </p>
            </div>

            {/* Section 15 — Vaccination And Preventive Child Healthcare */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Vaccination And Preventive Child Healthcare
              </h2>

              <p className="text-gray-700 mb-4">
                Vaccination is an important part of preventive healthcare, but it is not the only aspect of maintaining a child's wellbeing.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the child's age, routine healthcare may also involve discussions about:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Physical growth</li>
                <li>Nutrition</li>
                <li>Feeding</li>
                <li>Sleep</li>
                <li>Developmental milestones</li>
                <li>General health</li>
                <li>Age-appropriate preventive care</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Regular healthcare visits can help parents discuss concerns and understand the care appropriate for their child's stage of development.
              </p>
            </div>

            {/* Section 16 — Vaccination Treatment At Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Paediatric Vaccination Treatment In Moradabad At Dr. Priyanka Gynaec
              </h2>

              <p className="text-gray-700 mb-4">
                For parents searching for paediatric vaccination treatment in Moradabad, Dr. Priyanka Gynaec provides vaccination-related consultations and guidance for children and their parents.
              </p>

              <p className="text-gray-700 mb-4">
                The consultation can include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Reviewing the child's immunization history</li>
                <li>Discussing upcoming vaccination requirements</li>
                <li>Reviewing missed vaccination doses</li>
                <li>Discussing previous vaccine reactions</li>
                <li>Addressing parent concerns</li>
                <li>Providing post-vaccination guidance</li>
                <li>Planning future vaccination visits</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The vaccination plan should always be based on the child's individual medical history and applicable immunization recommendations.
              </p>
            </div>

            {/* Section 17 — Why Timely Vaccination Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Timely Vaccination Matters
              </h2>

              <p className="text-gray-700">
                Keeping vaccinations up to date helps children receive recommended immunization at the appropriate stages of development. Parents should avoid delaying scheduled vaccinations without discussing the situation with a healthcare professional. If a vaccination has been missed, professional guidance can help determine the next appropriate step. Keeping a vaccination calendar or setting reminders can also help parents remember upcoming appointments.
              </p>
            </div>

            {/* Section 18 — Questions Parents Should Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions Parents Should Ask About Vaccination
              </h2>

              <p className="text-gray-700 mb-4">
                Parents should feel comfortable discussing their concerns before their child's vaccination.
              </p>

              <p className="text-gray-700 mb-4">
                Useful questions include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Which vaccine is due today?</li>
                <li>What does the vaccine protect against?</li>
                <li>Are there any common reactions I should expect?</li>
                <li>When is the next dose due?</li>
                <li>What should I do if a dose is missed?</li>
                <li>Does my child's current health affect today's vaccination?</li>
                <li>Should I mention a previous vaccine reaction?</li>
                <li>How should I care for my child after vaccination?</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Clear communication can help parents understand their child's immunization plan.
              </p>
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

            {/* Section 20 — Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Gynaec
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
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        Address: A2, Near Old Roadways, Gandhi Nagar,
                        Moradabad, Uttar Pradesh – 244001
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
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
                        </a>
                      </div>

                      <div className="mt-2">
                        <Globe size={18} className="inline mr-2 text-black" />
                        <a
                          href="https://www.gynaecologistmoradabad.com/"
                          className="hover:underline"
                        >
                          www.gynaecologistmoradabad.com
                        </a>
                      </div>
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