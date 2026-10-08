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
      q: "What does the C-section doctor cost include?",
      a: "It can include consultations, the surgeon's fee, anesthesia, newborn checks and follow-ups.",
    },
    {
      q: "How much does a gynaecologist charge for a C-section in India?",
      a: "It varies widely by city and hospital. Private packages commonly range from about ₹30,000 to ₹2,00,000 or more.",
    },
    {
      q: "Is the doctor's fee included in the C-section package?",
      a: "Often yes, but not always. Ask for a written, itemized estimate.",
    },
    {
      q: "Does a higher fee mean a better doctor?",
      a: "Not necessarily. Check credentials, experience, facilities and communication too.",
    },
    {
      q: "Are emergency C-sections more expensive?",
      a: "They can be, due to urgent arrangements and sometimes a longer stay.",
    },
    {
      q: "Are follow-up visits included in the cost?",
      a: "Some packages include them. Others charge separately, so confirm in advance.",
    },
    {
      q: "Does insurance cover the doctor's fee for a C-section?",
      a: "Only if your policy includes maternity cover. Check waiting periods and limits.",
    },
    {
      q: "Can I pay the C-section cost in installments?",
      a: "Some clinics offer phased payment. Ask the clinic directly.",
    },
    {
      q: "How can I reduce unexpected charges?",
      a: "Get a written estimate, ask what is excluded and keep a 15 to 20 percent buffer.",
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
                C-Section Doctor Cost: What You Pay the Doctor and Why It Varies
              </h1>

              <p className="mb-4 text-gray-700">
                When parents plan a delivery, they usually ask two cost
                questions: &quot;What is the total hospital bill?&quot; and
                &quot;What does the doctor charge?&quot; The second question is
                the focus of this guide.
              </p>

              <p className="mb-4 text-gray-700">
                The C-section doctor cost is the fee paid to the gynaecologist
                and surgical team for planning, performing and following up your
                cesarean delivery. It is only one part of the total bill, but it
                is an important part, because it reflects the skill, time and
                responsibility behind your care.
              </p>

              <p className="mb-4 text-gray-700">
                <strong>In this article:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What &quot;doctor cost&quot; really means</li>
                <li>Consultation fees vs surgeon&apos;s fees</li>
                <li>Factors that raise or lower the fee</li>
                <li>Indicative cost ranges in India</li>
                <li>Why the cheapest option is not always the best</li>
                <li>How to compare doctors fairly</li>
                <li>Questions to ask before you book</li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Note:</strong> All ranges here are indicative and for
                general understanding. Real fees differ by city, hospital and
                doctor. For exact charges, contact the clinic directly (details
                at the end).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does &quot;C-Section Doctor Cost&quot; Actually Include?
              </h2>

              <p className="mb-4 text-gray-700">
                People often assume one fee covers everything. In reality,
                doctor-related costs come in stages.
              </p>

              <p className="mb-4 text-gray-700">
                <strong>Doctor-related costs usually include:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Consultation fees for antenatal check-ups during pregnancy
                </li>
                <li>Surgeon&apos;s fee for performing the C-section</li>
                <li>
                  Assistant surgeon&apos;s fee, for the doctor who assists in
                  surgery
                </li>
                <li>
                  Anesthetist&apos;s fee for administering and monitoring
                  anesthesia
                </li>
                <li>
                  Paediatrician&apos;s fee for examining the newborn at birth
                </li>
                <li>
                  Post-operative visit charges during the hospital stay
                </li>
                <li>Follow-up consultation charges after discharge</li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Key point:</strong> In many hospitals and clinics, these
                are bundled into one package price. In others, each doctor&apos;s
                fee is billed separately. Always ask which method applies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consultation Fee vs Surgeon&apos;s Fee: Know the Difference
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Consultation Fee
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Paid at each antenatal visit</li>
                <li>
                  Covers examination, advice, prescriptions and review of
                  reports
                </li>
                <li>
                  Often a modest amount compared with surgery charges
                </li>
                <li>
                  Varies by doctor&apos;s experience and clinic location
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Surgeon&apos;s Fee
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Paid for the operation itself</li>
                <li>
                  Covers surgical skill, pre-operative planning and
                  responsibility for your care
                </li>
                <li>Often included in the delivery package</li>
                <li>Can differ widely between doctors and hospitals</li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Smart tip:</strong> Ask if the doctor&apos;s antenatal
                consultation fees are included in the delivery package or
                charged separately. This can make a real difference in your
                total budget.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Indicative C-Section Cost Ranges in India
              </h2>

              <p className="mb-4 text-gray-700">
                Doctor fees are generally part of the overall C-section price.
                Here is how total packages (which include the doctor&apos;s fee)
                commonly look:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Government hospitals:</strong> very low or free for
                  eligible patients
                </li>
                <li>
                  <strong>Small private clinics and nursing homes in smaller
                  cities:</strong> commonly around ₹30,000 to ₹80,000
                </li>
                <li>
                  <strong>Mid-level private hospitals:</strong> commonly around
                  ₹60,000 to ₹1,00,000
                </li>
                <li>
                  <strong>Large corporate hospitals in metro cities:</strong>
                  may reach ₹90,000 to ₹2,00,000 or more
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>What to understand:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The surgeon&apos;s share depends on the doctor&apos;s
                  experience and the hospital&apos;s billing structure.
                </li>
                <li>
                  Smaller cities like Moradabad generally cost less than major
                  metros.
                </li>
                <li>
                  Complicated or high-risk cases can exceed standard ranges.
                </li>
                <li>
                  Always request a written, itemized estimate before admission.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Affect the Doctor&apos;s Cost for a C-Section
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Doctor&apos;s Experience and Reputation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A highly experienced surgeon may charge more.
                </li>
                <li>
                  Experience often brings better judgment and smoother handling
                  of surprises.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Qualifications and Specialization
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doctors with advanced training or fellowships may have higher
                  fees.
                </li>
                <li>
                  Expertise in high-risk pregnancy adds value in complex cases.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Location of the Clinic or Hospital
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Metro cities generally have higher fees.</li>
                <li>Tier-2 and tier-3 cities are usually more affordable.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Hospital Category
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Government, private nursing home and corporate hospitals all
                  follow different fee structures.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Planned vs Emergency Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A planned C-section is easier to schedule and budget.
                </li>
                <li>
                  An emergency C-section, especially at night or on holidays,
                  may carry extra charges.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Complexity of the Case
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Previous C-sections, fibroids, placenta problems, twins or
                  maternal health conditions can make surgery more demanding.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Continuity of Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doctors who follow you from early pregnancy through delivery
                  and postnatal care may structure fees around complete care.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Package Inclusions
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A comprehensive package may include multiple consultations,
                  newborn checks and follow-ups, while a basic one may not.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Room Category and Facilities
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Better rooms and facilities can push the overall package
                  higher, even when the surgeon&apos;s fee is similar.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Team Size
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cases needing additional specialists, such as a paediatrician
                  or a second surgeon, can increase professional fees.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hidden Costs Linked to Doctor Services
              </h2>

              <p className="mb-4 text-gray-700">
                Some doctor-related charges are not obvious at first. Ask about
                these:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pre-operative consultations and extra visits before surgery
                </li>
                <li>Emergency call-out charges, if applicable</li>
                <li>Charges for second opinions or specialist referrals</li>
                <li>Extended stay visits, if you stay longer than planned</li>
                <li>
                  Paediatrician visits beyond the first newborn check
                </li>
                <li>Post-discharge follow-ups and wound reviews</li>
                <li>Lactation counselling, if charged separately</li>
                <li>
                  Report and certificate charges, such as discharge summaries or
                  insurance paperwork
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Cheapest Doctor Is Not Always the Best Choice
              </h2>

              <p className="mb-4 text-gray-700">
                It is natural to want to save money. But a C-section is major
                surgery, and quality matters.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why price alone can mislead:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A very low quote may exclude important items that appear later
                  in the bill.
                </li>
                <li>
                  Limited experience can increase the risk of complications.
                </li>
                <li>Poor follow-up can delay problem detection.</li>
                <li>Inadequate emergency facilities can be dangerous.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why value matters more:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A skilled, honest doctor may prevent costly complications.
                </li>
                <li>Good antenatal care can reduce the chance of emergencies.</li>
                <li>Clear communication reduces confusion and surprise charges.</li>
                <li>Compassionate care improves your emotional experience.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Does a Higher Fee Mean Better Care?
              </h2>

              <p className="mb-4 text-gray-700">
                Not automatically. Fees reflect many things, including location,
                branding and infrastructure. Here is how to judge real value:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Check credentials, not just the price tag.</li>
                <li>
                  Read patient feedback about communication and outcomes.
                </li>
                <li>
                  Observe the clinic: cleanliness, staff behavior and
                  organization.
                </li>
                <li>
                  Ask about emergency readiness: anesthetist, blood availability
                  and newborn support.
                </li>
                <li>
                  Notice honesty: a trustworthy doctor tells you when a
                  C-section is not necessary.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is the C-Section Really Necessary? Why Honest Advice Affects
                Cost
              </h2>

              <p className="mb-4 text-gray-700">
                Unnecessary surgery increases both cost and risk. A good
                gynaecologist recommends a C-section only for medical reasons.
              </p>

              <p className="mb-4 text-gray-700">
                <strong>Common reasons for a C-section:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Breech or transverse position of the baby</li>
                <li>Placenta previa</li>
                <li>Labor that is not progressing</li>
                <li>Fetal distress</li>
                <li>Very large baby</li>
                <li>
                  Previous C-section or uterine surgery in certain cases
                </li>
                <li>Multiple pregnancy with complications</li>
                <li>Severe high blood pressure or pre-eclampsia</li>
              </ul>

              <p className="mb-4 text-gray-700">
                <strong>Signs of a trustworthy doctor:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Explains the exact reason for surgery</li>
                <li>Discusses alternatives where safe</li>
                <li>Supports a normal delivery when medically suitable</li>
                <li>Respects your questions and your choices</li>
              </ul>

              <p className="mt-4 text-gray-700">
                You can read about natural birth support on the{" "}
                <Link
                  href="/services/normal-delivery"
                  className="text-blue-600 hover:underline"
                >
                  Normal Delivery
                </Link>{" "}
                page.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Insurance and Payment: How They Affect Your Doctor Costs
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Maternity cover:</strong> Check whether your policy
                  includes delivery benefits.
                </li>
                <li>
                  <strong>Waiting periods:</strong> Many policies require a
                  waiting period before maternity claims.
                </li>
                <li>
                  <strong>Sub-limits:</strong> Insurers often cap the amount
                  payable for a C-section.
                </li>
                <li>
                  <strong>Network hospitals:</strong> Cashless treatment applies
                  only at network facilities.
                </li>
                <li>
                  <strong>Documentation:</strong> Keep itemized bills,
                  prescriptions and discharge summaries.
                </li>
                <li>
                  <strong>Government schemes:</strong> Programs such as Janani
                  Suraksha Yojana, PMMVY and Ayushman Bharat may help eligible
                  families. Verify eligibility locally.
                </li>
              </ul>

              <p className="mb-4 text-gray-700">
                <strong>Payment tips:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask whether the clinic offers installment or phased payment.
                </li>
                <li>Clarify when each payment is due.</li>
                <li>Keep receipts for every payment.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Compare C-Section Doctors and Packages Fairly
              </h2>

              <p className="mb-4 text-gray-700">
                Use a simple comparison approach:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Collect written estimates
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Get itemized quotes from two or three doctors or hospitals.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Compare what is included
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgeon&apos;s fee, anesthesia, OT, room, newborn care and
                  follow-ups
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Note the exclusions
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  NICU, blood transfusion, extra days and special medicines
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Evaluate quality
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Experience, patient feedback, facilities and communication
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Check accessibility
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Is the doctor reachable in emergencies?</li>
                <li>Is the clinic convenient for frequent visits?</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 6: Decide with comfort and trust
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Choose the doctor you feel safe with, not just the lowest
                  bidder.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Booking Your C-Section Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Bring this list to your consultation:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What is your consultation fee, and is it included in the
                  delivery package?
                </li>
                <li>What is the total estimated cost for a C-section?</li>
                <li>
                  Is the surgeon&apos;s fee included in the package?
                </li>
                <li>
                  Who is the anesthetist and the paediatrician, and are their
                  fees included?
                </li>
                <li>
                  What happens to the cost if the plan changes from normal
                  delivery to an emergency C-section?
                </li>
                <li>How many hospital days does the package cover?</li>
                <li>What extra charges might arise?</li>
                <li>Are follow-up visits after delivery included?</li>
                <li>Do you accept my health insurance?</li>
                <li>Can I pay in installments?</li>
                <li>Will you be available at the time of delivery?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Budget Planning Tips for Your C-Section
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Start early:</strong> Choose your gynaecologist in the
                  first trimester.
                </li>
                <li>
                  <strong>Request a written estimate:</strong> Keep it safely
                  with your records.
                </li>
                <li>
                  <strong>Build a buffer:</strong> Set aside about 15 to 20
                  percent extra for unexpected needs.
                </li>
                <li>
                  <strong>Check insurance early:</strong> Confirm waiting
                  periods well before delivery.
                </li>
                <li>
                  <strong>Stay healthy during pregnancy:</strong> Controlled
                  blood pressure, sugar and anemia can lower the risk of
                  complications and costs.
                </li>
                <li>
                  <strong>Attend antenatal visits regularly:</strong> Early
                  detection avoids emergencies. See the{" "}
                  <Link
                    href="/services/antenatal-services"
                    className="text-blue-600 hover:underline"
                  >
                    Antenatal Services
                  </Link>{" "}
                  page for structured prenatal care.
                </li>
                <li>
                  <strong>Plan for recovery costs:</strong> Medicines,
                  follow-ups and help at home all add up.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postnatal and Newborn Costs to Remember
              </h2>

              <p className="mb-4 text-gray-700">
                Doctor-related costs do not stop at discharge.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow-up visits, usually at 1 to 2 weeks and at around 6
                  weeks
                </li>
                <li>Medicines and supplements prescribed after surgery</li>
                <li>Newborn check-ups and vaccinations</li>
                <li>Breastfeeding support if needed</li>
                <li>Treatment for any postpartum concerns</li>
              </ul>

              <p className="mt-4 text-gray-700">
                The clinic also offers newborn care, so both mother and baby can
                be looked after together. Learn more on the{" "}
                <Link
                  href="/services/paediatrics"
                  className="text-blue-600 hover:underline"
                >
                  Paediatric Care
                </Link>{" "}
                page.
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