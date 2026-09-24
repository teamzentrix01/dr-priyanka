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

export default function DeliveryPackageCostInMoradabad() {
  const faqs = [
    {
      q: "What affects the cost of delivery in Moradabad?",
      a: "Type of delivery, room category, length of stay, doctor fees, and any complications all influence overall cost.",
    },
    {
      q: "Is cesarean delivery more expensive than normal delivery?",
      a: "Generally yes, due to surgical charges, anesthesiologist fees, and a typically longer hospital stay.",
    },
    {
      q: "Who can I consult for delivery care in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) provides comprehensive antenatal and delivery care for both normal and cesarean deliveries.",
    },
    {
      q: "What's typically included in a delivery package?",
      a: "Room charges, doctor fees, nursing care, medications, and routine newborn care are commonly included, though this varies by provider.",
    },
    {
      q: "Can delivery costs exceed the original package price?",
      a: "Yes, if complications arise, the hospital stay extends, or additional care like NICU support is needed.",
    },
    {
      q: "How can I get an accurate cost estimate?",
      a: "Contact the hospital or clinic directly and request a detailed, itemized breakdown of delivery package pricing.",
    },
    {
      q: "Does insurance affect out-of-pocket delivery costs?",
      a: "Yes, coverage varies by policy, so it's important to understand your specific maternity benefits and any sub-limits.",
    },
    {
      q: "Should I ask about costs early in pregnancy?",
      a: "Yes, starting this conversation early allows for better financial planning and reduces stress closer to your due date.",
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
                Delivery Package Cost in Moradabad: What Expecting Parents Should
                Know Before Budgeting
              </h1>

              <p className="mb-4 text-gray-700">
                Planning for a baby&apos;s arrival involves a lot of
                preparation, and understanding the likely cost of delivery is an
                important part of that process for most families. Delivery
                package pricing can vary significantly based on the type of
                delivery, the hospital or clinic chosen, room category, and any
                complications that arise. Rather than guessing or relying on
                outdated information, it helps to understand what actually goes
                into delivery costs and how to get an accurate, personalized
                estimate. This article explains the key factors that influence
                delivery package costs in Moradabad, what&apos;s typically
                included, and how to have an informed conversation with your
                chosen clinic, including Dr. Priyanka Pachauri&apos;s practice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Delivery Costs Vary So Much
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Type of delivery</strong> significantly affects cost,
                  with cesarean delivery generally costing more than normal
                  vaginal delivery due to the surgical nature of the procedure.
                </li>
                <li>
                  <strong>Room category</strong> — general ward, semi-private,
                  or private room — plays a major role in overall hospital
                  charges.
                </li>
                <li>
                  <strong>Length of hospital stay</strong> affects total cost,
                  with cesarean deliveries typically requiring a longer stay
                  than normal deliveries.
                </li>
                <li>
                  <strong>Doctor and specialist fees</strong> vary based on the
                  experience and expertise of the treating physician and any
                  additional specialists involved.
                </li>
                <li>
                  <strong>Complications during delivery</strong>, if they arise,
                  can add to the overall cost beyond a standard package price.
                </li>
                <li>
                  <strong>Newborn care requirements</strong>, particularly if
                  the baby needs additional monitoring or NICU care, can
                  significantly affect the final bill.
                </li>
                <li>
                  <strong>Diagnostic tests and monitoring</strong> throughout
                  the antenatal period, delivery, and postnatal stay all factor
                  into overall costs.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Typical Delivery Package May Include
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Room charges</strong> for the duration of the hospital
                  stay, based on the chosen room category.
                </li>
                <li>
                  <strong>Doctor and surgeon fees</strong>, covering the
                  delivering obstetrician&apos;s professional charges.
                </li>
                <li>
                  <strong>Anesthesiologist fees</strong>, particularly relevant
                  for cesarean deliveries or epidural pain relief during labor.
                </li>
                <li>
                  <strong>Operation theatre charges</strong>, applicable
                  specifically to cesarean deliveries.
                </li>
                <li>
                  <strong>Nursing and general care charges</strong> during the
                  hospital stay.
                </li>
                <li>
                  <strong>Standard medications and consumables</strong> used
                  during the delivery and hospital stay.
                </li>
                <li>
                  <strong>Routine newborn care</strong>, including standard
                  checks and vaccinations administered during the initial
                  hospital stay.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Exact inclusions vary between hospitals and clinics, which is
                why requesting a detailed, itemized package breakdown directly
                from your chosen provider is the most reliable way to understand
                what you&apos;re actually paying for.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Can Increase Costs Beyond a Standard Package
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Extended hospital stay</strong> due to maternal or
                  newborn complications.
                </li>
                <li>
                  <strong>NICU care for the newborn</strong>, if needed, which
                  is typically billed separately from the standard delivery
                  package.
                </li>
                <li>
                  <strong>Additional specialist consultations</strong>, such as
                  a pediatrician or anesthesiologist beyond what&apos;s included
                  in the base package.
                </li>
                <li>
                  <strong>Upgraded room categories</strong> chosen during the
                  stay, beyond what was originally planned.
                </li>
                <li>
                  <strong>Additional diagnostic tests or procedures</strong>{" "}
                  required due to unexpected findings during labor or delivery.
                </li>
                <li>
                  <strong>Conversion from planned normal delivery to an
                  emergency cesarean</strong>, which typically involves
                  additional charges beyond the original package pricing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery vs. Cesarean Delivery Cost Considerations
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Normal delivery</strong> generally involves lower
                  overall costs, given the shorter hospital stay and absence of
                  surgical charges.
                </li>
                <li>
                  <strong>Cesarean delivery</strong> typically costs more, due
                  to operation theatre charges, anesthesiologist fees, and a
                  longer required hospital stay.
                </li>
                <li>
                  <strong>Both delivery types can vary significantly</strong>{" "}
                  based on room category and any complications, so a general
                  cost comparison should always be confirmed with specific,
                  personalized estimates.
                </li>
                <li>
                  <strong>Insurance coverage</strong>, if applicable, can
                  significantly affect out-of-pocket costs for either delivery
                  type, depending on your specific policy terms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Get an Accurate Cost Estimate
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Contact your chosen hospital or clinic directly</strong>{" "}
                  and request a detailed breakdown of delivery package pricing
                  across different room categories.
                </li>
                <li>
                  <strong>Ask specifically what is and isn&apos;t included</strong>{" "}
                  in the quoted package price, to avoid unexpected charges later.
                </li>
                <li>
                  <strong>Clarify how pricing changes</strong> if a normal
                  delivery needs to convert to an emergency cesarean during
                  labor.
                </li>
                <li>
                  <strong>Ask about newborn care costs</strong>, particularly
                  what&apos;s included versus what would be billed separately if
                  additional care is needed.
                </li>
                <li>
                  <strong>Request information in writing</strong>, if possible,
                  so you have a clear reference for comparison and planning
                  purposes.
                </li>
                <li>
                  <strong>Revisit your cost estimate periodically</strong>{" "}
                  during pregnancy, since prices can be updated and your
                  specific care needs may evolve.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Budgeting Tips for Expecting Parents
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Start researching and budgeting early</strong> in your
                  pregnancy, rather than waiting until closer to your due date.
                </li>
                <li>
                  <strong>Factor in a reasonable buffer</strong> for potential
                  complications or an extended hospital stay, since costs can
                  exceed initial estimates in unexpected situations.
                </li>
                <li>
                  <strong>Understand your health insurance coverage
                  thoroughly</strong>, including any maternity-specific
                  benefits, waiting periods, and sub-limits.
                </li>
                <li>
                  <strong>Compare package inclusions</strong>, not just headline
                  prices, across different hospitals or clinics, since seemingly
                  similar prices can include very different services.
                </li>
                <li>
                  <strong>Set aside funds for postnatal and newborn care
                  costs</strong> beyond the immediate delivery, including
                  follow-up visits and initial paediatric care.
                </li>
                <li>
                  <strong>Ask about payment plans or financing options</strong>,
                  if available, particularly relevant for families managing costs
                  across a longer timeline.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Transparent Communication About Costs Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Reduces financial stress</strong> during an already
                  significant life event, allowing families to focus on
                  preparing for their baby rather than worrying about unexpected
                  bills.
                </li>
                <li>
                  <strong>Helps avoid unpleasant surprises at discharge</strong>,
                  when a clear understanding of package inclusions was
                  established beforehand.
                </li>
                <li>
                  <strong>Supports better overall planning</strong>, including
                  coordination with health insurance if applicable.
                </li>
                <li>
                  <strong>Builds trust between patients and their healthcare
                  provider</strong>, when costs are discussed openly and clearly
                  from the outset.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Delivery Care in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) provides
                comprehensive antenatal and delivery care in Moradabad,
                supporting both normal and cesarean deliveries based on
                individual medical needs. According to her official website, (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), her practice emphasizes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A &quot;Her Health First&quot; approach</strong>,
                  ensuring patients are clearly informed throughout their
                  pregnancy and delivery journey, which extends to transparent
                  communication about costs and what to expect.
                </li>
                <li>
                  <strong>High-risk pregnancy management</strong>, with
                  structured monitoring that helps identify potential
                  complications early, supporting more accurate planning and
                  expectations.
                </li>
                <li>
                  <strong>Antenatal and postnatal care</strong>, offering
                  continuity throughout the pregnancy and delivery process.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                For specific, up-to-date delivery package pricing, including
                room category options and what&apos;s included, it&apos;s best
                to contact the clinic directly, since costs can vary and change
                over time. The clinic is located in Gandhi Nagar, Moradabad, and
                its team can walk you through a personalized cost estimate based
                on your specific pregnancy and preferences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask About Delivery Package Costs
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What is the estimated cost for a normal delivery versus a
                  cesarean delivery at this clinic, across different room
                  categories?
                </li>
                <li>
                  What specifically is included in the quoted delivery package
                  price?
                </li>
                <li>
                  How is pricing handled if a planned normal delivery needs to
                  convert to an emergency cesarean?
                </li>
                <li>
                  Are newborn care costs included in the delivery package, or
                  billed separately?
                </li>
                <li>
                  Does the clinic offer cashless facility or assistance with
                  insurance claim documentation?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Government and Insurance-Supported Delivery Options
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Government hospitals and schemes</strong> often
                  provide significantly lower-cost or subsidized delivery care,
                  worth exploring for families managing tighter budgets.
                </li>
                <li>
                  <strong>Schemes like Ayushman Bharat</strong> may cover
                  certain delivery-related expenses for eligible beneficiaries,
                  subject to specific terms and empanelled facilities.
                </li>
                <li>
                  <strong>Private hospitals and clinics</strong> generally offer
                  more room category choices and potentially shorter wait times,
                  often at a higher cost than government facilities.
                </li>
                <li>
                  <strong>Health insurance with maternity coverage</strong> can
                  significantly offset costs at private facilities, provided the
                  policy terms, waiting periods, and network hospitals align with
                  your chosen provider.
                </li>
                <li>
                  <strong>Comparing both government and private options
                  honestly</strong>, based on your specific circumstances,
                  budget, and comfort preferences, helps you make the most
                  informed choice for your family.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Additional Costs New Parents Should Plan For
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Postnatal follow-up visits</strong> for both mother
                  and baby in the weeks following delivery.
                </li>
                <li>
                  <strong>Newborn vaccinations</strong>, some of which may be
                  included in the initial hospital stay while others are
                  scheduled for later visits.
                </li>
                <li>
                  <strong>Lactation support consultations</strong>, if needed,
                  which may be offered separately from the core delivery package.
                </li>
                <li>
                  <strong>Medications prescribed after discharge</strong>, for
                  both mother and baby, which are typically not included in the
                  original hospital package.
                </li>
                <li>
                  <strong>Transportation and incidental costs</strong> around
                  the delivery period, which are easy to overlook when focusing
                  primarily on the hospital bill itself.
                </li>
                <li>
                  <strong>Any specialist referrals</strong>, if recommended, for
                  either mother or baby based on findings during the delivery or
                  immediate postnatal period.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Delivery Package Costs
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;All hospitals charge roughly the same for
                  delivery.&quot;</strong> Costs can vary significantly based on
                  room category, hospital reputation, included services, and
                  location.
                </li>
                <li>
                  <strong>&quot;A quoted package price will always be the final
                  bill.&quot;</strong> Complications, extended stays, or
                  additional care needs can result in charges beyond the
                  original package estimate.
                </li>
                <li>
                  <strong>&quot;Cesarean delivery always costs a fixed,
                  predictable amount.&quot;</strong> Costs vary based on
                  complexity, room category, and any additional care required
                  for mother or baby.
                </li>
                <li>
                  <strong>&quot;You don&apos;t need to ask about costs in
                  advance if you have insurance.&quot;</strong> Even with
                  insurance, understanding sub-limits and out-of-pocket
                  expectations in advance helps avoid surprises.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Fertility Specialist (MBBS, MS)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
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
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
                      </p>
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
                Frequently Asked Questions (FAQ)
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