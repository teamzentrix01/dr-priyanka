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

export default function DeliverySpecialistMoradabad() {
  const faqs = [
    {
      q: "What is the average C-section delivery cost in India?",
      a: "It varies widely, from a few thousand rupees in government hospitals to ₹30,000 to ₹2,00,000 or more in private hospitals.",
    },
    {
      q: "Is a C-section more expensive than a normal delivery?",
      a: "Yes, usually, because of surgery, anesthesia, OT use and a longer hospital stay.",
    },
    {
      q: "What is included in a C-section package?",
      a: "Typically the surgeon's fee, anesthesia, OT, room charges, nursing and basic newborn care.",
    },
    {
      q: "What extra charges can come up?",
      a: "NICU care, extra hospital days, blood transfusion, additional tests and medicines.",
    },
    {
      q: "Does health insurance cover C-section delivery?",
      a: "Only if your policy has maternity cover. Check the waiting period and sub-limits.",
    },
    {
      q: "How long is the hospital stay after a C-section?",
      a: "Usually 3 to 4 days, depending on your recovery.",
    },
    {
      q: "Can I get a fixed package price in advance?",
      a: "Yes. Ask for a written, itemized estimate showing what is included and excluded.",
    },
    {
      q: "Are emergency C-sections more costly than planned ones?",
      a: "Often yes, due to urgent arrangements and sometimes a longer stay.",
    },
    {
      q: "How can I plan my delivery budget?",
      a: "Get an estimate early, check insurance, and keep a reserve of 15 to 20 percent extra.",
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
                C-Section Delivery Charges: Complete Cost Guide for Expecting
                Parents
              </h1>

              <p className="mb-4 text-gray-700">
                Preparing for a baby is exciting, and it is also a financial
                decision. One of the first questions couples ask is:
                &quot;How much will my delivery cost?&quot; If a cesarean
                section (C-section) is planned or possible, the cost question
                becomes more important, because it is a surgery.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains C-section delivery charges clearly and
                honestly: what you pay for, why bills differ, what hidden costs
                to watch for, and how to plan ahead without stress.
              </p>

              <p className="mb-4 text-gray-700">
                <strong>In this article:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Average C-section cost in India</li>
                <li>What the bill includes</li>
                <li>Factors that change the price</li>
                <li>Hidden and extra charges</li>
                <li>Normal delivery vs C-section cost</li>
                <li>Insurance and payment tips</li>
                <li>How to get an accurate estimate</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a C-Section?
              </h2>

              <p className="mb-4 text-gray-700">
                A C-section is a surgical delivery in which the baby is born
                through an incision in the mother&apos;s abdomen and uterus. It
                is a major surgery, so the bill covers much more than the
                doctor&apos;s fee.
              </p>

              <p className="mb-4 text-gray-700">
                C-sections can be:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Planned (elective or scheduled):</strong> decided in
                  advance for medical reasons
                </li>
                <li>
                  <strong>Emergency:</strong> decided during labor if the mother
                  or baby faces a risk
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Emergency surgeries can cost somewhat more, because of urgent
                arrangements, additional staff and sometimes a longer stay.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Average C-Section Delivery Charges in India
              </h2>

              <p className="mb-4 text-gray-700">
                Costs vary widely across the country. Here is a general picture:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Government hospitals:</strong> very low cost, often a
                  few thousand rupees or even free under public schemes
                </li>
                <li>
                  <strong>Small private clinics and nursing homes in tier-2 and
                  tier-3 cities:</strong> commonly in the range of ₹30,000 to
                  ₹80,000 for a standard package
                </li>
                <li>
                  <strong>Mid-level private hospitals:</strong> commonly
                  ₹60,000 to ₹1,00,000
                </li>
                <li>
                  <strong>Large corporate and metro hospitals:</strong> can
                  range from ₹90,000 to ₹2,00,000 or more
                </li>
                <li>
                  <strong>Complicated or high-risk cases:</strong> can go well
                  above these ranges
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Remember:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>These are estimates, not fixed prices.</li>
                <li>
                  Cities like Moradabad generally cost less than metros such as
                  Delhi, Mumbai or Gurgaon.
                </li>
                <li>
                  Always ask for a written, itemized estimate before admission.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does the C-Section Bill Usually Include?
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the bill helps you compare packages fairly. A
                typical C-section package may cover:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgeon&apos;s (gynaecologist&apos;s) fee for performing the
                  operation
                </li>
                <li>
                  Anesthesia charges, including the anesthetist&apos;s fee
                </li>
                <li>Operation theatre (OT) charges</li>
                <li>
                  Room or bed charges for the hospital stay (usually 3 to 4
                  days)
                </li>
                <li>Nursing and monitoring charges</li>
                <li>
                  Basic medicines and consumables, such as sutures, gloves and
                  IV fluids
                </li>
                <li>
                  Newborn care at birth, including the initial paediatric check
                </li>
                <li>Routine in-hospital tests</li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Why it matters:</strong> Two hospitals may quote
                different prices because one package includes items that the
                other charges separately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Factors That Affect C-Section Delivery Charges
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Type of Hospital
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Government hospital: lowest cost</li>
                <li>Private nursing home: moderate cost</li>
                <li>Corporate or multi-specialty hospital: higher cost</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. City and Location
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Metro cities generally charge more</li>
                <li>Smaller cities usually offer lower prices</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Room Category
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>General ward: most economical</li>
                <li>Semi-private room: moderate</li>
                <li>
                  Private or deluxe room: higher cost, since you pay per day
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Doctor&apos;s Experience and Expertise
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Highly experienced surgeons may charge higher fees
                </li>
                <li>
                  Experience can also mean fewer complications and smoother
                  recovery
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Planned vs Emergency Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Planned procedures are easier to budget for</li>
                <li>
                  Emergency cases may involve extra staff, testing and time
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Length of Hospital Stay
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A typical stay is 3 to 4 days</li>
                <li>Any extension for complications adds to the bill</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Mother&apos;s Health Condition
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Conditions such as high blood pressure, gestational diabetes,
                  anemia, obesity or thyroid disorders can need extra monitoring
                  and tests
                </li>
                <li>
                  A previous C-section or other uterine surgery can increase
                  complexity
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Baby&apos;s Condition
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A premature or underweight newborn may need NICU (newborn
                  intensive care) support
                </li>
                <li>
                  NICU care can significantly increase the total cost
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Multiple Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Twins or triplets usually require more specialized care and
                  sometimes a longer stay
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Type of Anesthesia
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Spinal or epidural anesthesia is most common for C-sections
                </li>
                <li>
                  General anesthesia is rarely used and can add to the cost
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hidden and Extra Charges to Watch For
              </h2>

              <p className="mb-4 text-gray-700">
                Many families get surprised by items not included in the first
                quote. Ask about these before you decide:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pre-delivery consultations and antenatal checkups
                </li>
                <li>Ultrasound scans and blood tests during pregnancy</li>
                <li>Pre-operative tests and fitness checks</li>
                <li>Extra days in the hospital beyond the package limit</li>
                <li>Blood transfusion charges, if needed</li>
                <li>NICU or special baby care</li>
                <li>Medicines and injections not covered by the package</li>
                <li>Private nurse or attendant charges</li>
                <li>Visitor or attendant meals</li>
                <li>Newborn vaccinations, such as the first doses</li>
                <li>Post-delivery follow-up visits and wound care</li>
                <li>Taxes or administrative fees where applicable</li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Smart tip:</strong> Ask directly, &quot;What is
                included, and what could be charged extra?&quot; and get the
                answer in writing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery vs C-Section Cost: A Quick Comparison
              </h2>

              <div className="mb-6 overflow-x-auto">
                <table className="w-full border-collapse text-left text-gray-700">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-3 pr-4 font-semibold text-gray-900">
                        Factor
                      </th>
                      <th className="py-3 pr-4 font-semibold text-gray-900">
                        Normal Delivery
                      </th>
                      <th className="py-3 font-semibold text-gray-900">
                        C-Section
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Hospital stay</td>
                      <td className="py-3 pr-4">Usually 1 to 2 days</td>
                      <td className="py-3">Usually 3 to 4 days</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Surgery involved</td>
                      <td className="py-3 pr-4">No</td>
                      <td className="py-3">Yes</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Anesthesia</td>
                      <td className="py-3 pr-4">Often minimal or none</td>
                      <td className="py-3">Required</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Typical cost</td>
                      <td className="py-3 pr-4">Lower</td>
                      <td className="py-3">Higher</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Recovery time</td>
                      <td className="py-3 pr-4">Shorter</td>
                      <td className="py-3">Longer (6 to 8 weeks)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4 text-gray-700">
                <strong>Key points:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A C-section generally costs more than a normal delivery because
                  of surgery, anesthesia, the OT and the longer stay.
                </li>
                <li>
                  It also involves a longer recovery, which can mean extra
                  expenses for help at home, medicines and follow-up care.
                </li>
                <li>
                  Cost should never be the only reason to pick one method over
                  another. Your safety and your baby&apos;s safety come first.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is a C-Section Medically Necessary?
              </h2>

              <p className="mb-4 text-gray-700">
                A C-section is recommended when it is safer for the mother, the
                baby or both. Common reasons include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Baby in breech (feet-first) or transverse position
                </li>
                <li>Placenta previa (placenta covering the cervix)</li>
                <li>Labor that is not progressing</li>
                <li>Fetal distress or abnormal heart rate patterns</li>
                <li>
                  Very large baby (macrosomia) that cannot pass safely
                </li>
                <li>Previous C-section where a repeat is advised</li>
                <li>Multiple pregnancy with complications</li>
                <li>Severe high blood pressure or pre-eclampsia</li>
                <li>
                  Certain infections that could pass to the baby
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Whenever possible, a good gynaecologist will explain why a
                C-section is advised and will support a safe normal delivery if
                that is an option. At Dr. Priyanka Gynaec, the focus is on safe
                motherhood, with expert and gentle care that prioritizes natural
                and normal vaginal delivery where it is medically suitable. You
                can read more on the{" "}
                <Link
                  href="/services/normal-delivery"
                  className="text-blue-600 hover:underline"
                >
                  Normal Delivery
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/pregnancy-birthing"
                  className="text-blue-600 hover:underline"
                >
                  Pregnancy & Birthing Care
                </Link>{" "}
                pages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Does Health Insurance Cover C-Section Charges?
              </h2>

              <p className="mb-4 text-gray-700">
                Many families do not realize that insurance for delivery has its
                own rules. Here is what to check:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Maternity cover:</strong> Not every health policy
                  includes maternity benefits. Check your policy document.
                </li>
                <li>
                  <strong>Waiting period:</strong> Maternity cover often comes
                  with a waiting period, which can range from several months to
                  a few years. Check it well before you plan a pregnancy.
                </li>
                <li>
                  <strong>Sub-limits:</strong> Policies often cap maternity
                  claims at a fixed amount, for example a set limit for normal
                  delivery and a higher limit for a C-section.
                </li>
                <li>
                  <strong>Cashless vs reimbursement:</strong> Cashless treatment
                  works only at network hospitals. Otherwise you pay first and
                  claim later.
                </li>
                <li>
                  <strong>Pre- and post-natal expenses:</strong> Some policies
                  cover these for a limited period. Others do not.
                </li>
                <li>
                  <strong>Newborn cover:</strong> Check whether the baby is
                  covered from day one and for how many days.
                </li>
                <li>
                  <strong>Corporate or group policies:</strong> Employer plans
                  sometimes include maternity benefits, so ask your HR team.
                </li>
              </ul>

              <p className="mb-4 text-gray-700">
                <strong>Practical steps:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Call your insurer to confirm eligibility and limits.</li>
                <li>Ask the hospital if they are on your insurer&apos;s network.</li>
                <li>Keep all bills, discharge summaries and reports for claims.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Government Schemes and Financial Support
              </h2>

              <p className="mb-4 text-gray-700">
                Several public schemes help with delivery costs for eligible
                families. Some options to explore:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Janani Suraksha Yojana (JSY):</strong> cash assistance
                  for institutional delivery
                </li>
                <li>
                  <strong>Pradhan Mantri Matru Vandana Yojana (PMMVY):</strong>{" "}
                  maternity benefit support for eligible women
                </li>
                <li>
                  <strong>State-level health schemes:</strong> vary by state,
                  including Uttar Pradesh
                </li>
                <li>
                  <strong>Ayushman Bharat (PM-JAY):</strong> may cover eligible
                  families at empanelled hospitals
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Plan and Budget for Your C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                Good planning takes the stress out of the final weeks.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before delivery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Choose your gynaecologist and hospital early, ideally in the
                  first trimester.
                </li>
                <li>
                  Ask for a written package estimate, with inclusions and
                  exclusions.
                </li>
                <li>Check your insurance and government scheme eligibility.</li>
                <li>
                  Create a small emergency fund of about 15 to 20 percent above
                  the estimate.
                </li>
                <li>Keep your antenatal records and test reports organized.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During pregnancy:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Attend all antenatal visits so complications are caught early.
                </li>
                <li>
                  Manage conditions like blood pressure, sugar and anemia, since
                  controlled health can reduce risks and extra costs.
                </li>
                <li>
                  Follow nutrition and exercise guidance from your doctor. See
                  the{" "}
                  <Link
                    href="/services/antenatal-services"
                    className="text-blue-600 hover:underline"
                  >
                    Antenatal Services
                  </Link>{" "}
                  page for structured prenatal care.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Near delivery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pack a hospital bag in advance.</li>
                <li>Keep ID, insurance cards and payment methods ready.</li>
                <li>Know the hospital&apos;s emergency contact number.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After delivery:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Budget for follow-up visits, medicines and newborn
                  vaccinations.
                </li>
                <li>
                  Plan for help at home, since recovery takes weeks.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Doctor Matters More Than the Lowest Price
              </h2>

              <p className="mb-4 text-gray-700">
                The cheapest option is not always the best value. A C-section is
                surgery, and quality of care affects your health for years.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What to look for:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>An experienced, qualified gynaecologist</li>
                <li>
                  Honest advice on whether a C-section is really needed
                </li>
                <li>Clear and transparent pricing</li>
                <li>Well-equipped operating theatre and newborn support</li>
                <li>Compassionate, patient-centred care</li>
                <li>Good follow-up and postnatal support</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec in Moradabad follows a &quot;Her Health
                First&quot; philosophy. That means listening first, explaining
                options clearly, and supporting each woman through antenatal
                care, delivery and postnatal recovery. The clinic also offers
                paediatric care for your newborn, so mother and baby can be
                looked after together. Visit the{" "}
                <Link
                  href="/services/paediatrics"
                  className="text-blue-600 hover:underline"
                >
                  Paediatric Care
                </Link>{" "}
                page to learn more.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                      <p className="text-sm text-gray-700">
                        Fertility • Maternity • 3D Laparoscopy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone</p>
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