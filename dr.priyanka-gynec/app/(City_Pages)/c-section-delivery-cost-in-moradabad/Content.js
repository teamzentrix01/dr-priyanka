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
      q: "What is the C-section delivery cost in Moradabad?",
      a: "It varies with your health, room type, stay and anaesthesia. Book a consultation for an accurate estimate.",
    },
    {
      q: "Is a planned C-section cheaper than an emergency one?",
      a: "Often easier to estimate, but costs depend on your case and any complications.",
    },
    {
      q: "What does a C-section estimate usually include?",
      a: "Surgeon, operation theatre, anaesthesia, nursing, room and routine medicines. Ask for it in writing.",
    },
    {
      q: "Are newborn costs included?",
      a: "Basic checks may be. Special care and vaccinations may be separate. Please confirm.",
    },
    {
      q: "How long is the hospital stay?",
      a: "Commonly around 3 to 4 days, depending on recovery.",
    },
    {
      q: "Can complications increase the cost?",
      a: "Yes. Extra days, infection treatment or special baby care can raise the bill.",
    },
    {
      q: "Does insurance cover a C-section?",
      a: "It depends on your maternity cover and waiting period. Check with your insurer.",
    },
    {
      q: "Is a C-section more expensive than a normal delivery?",
      a: "Generally yes, due to surgery, anaesthesia and a longer stay.",
    },
    {
      q: "Is emergency OT available at Dr. Priyanka Gynaec?",
      a: "Yes. OT standby is available 24/7.",
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
                C-Section Delivery Cost in Moradabad: What Affects the Price and
                How to Plan Your Budget
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;How much will my C-section cost?&quot; is a question
                almost every family asks, often while already worried about the
                surgery itself. It is a fair question. A caesarean is major
                surgery, and the bill can feel uncertain when you do not know
                what is included.
              </p>

              <p className="mb-4 text-gray-700">
                The honest answer is that there is no single price for a
                C-section delivery in Moradabad. The final amount depends on
                your medical needs, the facility, the type of room, the length
                of stay and whether any extra care is needed. This guide
                explains each factor, what a good estimate should include and
                how to plan without surprises. It also shows how Dr. Priyanka
                Pachauri at Dr. Priyanka Gynaec approaches honest, patient-first
                care when a caesarean is medically needed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Short Answer: Why There Is No Fixed Price
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Every pregnancy and every surgery is different</li>
                <li>
                  A planned C-section and an emergency C-section can cost
                  differently
                </li>
                <li>
                  Hospital, room type and stay length change the total
                </li>
                <li>
                  Anaesthesia, tests, medicines and newborn care are part of the
                  bill
                </li>
                <li>Complications or extra days in hospital add to the cost</li>
                <li>
                  Any quote given without examining you may not reflect your
                  final bill
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Always ask for an estimate that is specific to your case, in
                writing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What National Figures Tell Us (and What They Do Not)
              </h2>

              <p className="mb-4 text-gray-700">
                You may see online figures for C-section costs. Treat them only
                as rough reference points, not as Moradabad prices.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  One national hospital resource states that C-section costs in
                  India broadly range from about Rs 50,000 to Rs 2,00,000 or
                  more, depending on the city, facility and procedure details
                </li>
                <li>
                  Metro-city listings are higher. For example, one health portal
                  places Mumbai&apos;s range at roughly Rs 1,25,000 to Rs
                  2,50,000
                </li>
                <li>
                  Costs differ widely between government and private facilities,
                  and between metro and non-metro cities
                </li>
                <li>
                  Online ranges usually combine many hospitals and room
                  categories, so your actual bill may fall outside them
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                For an accurate figure for your own case, please contact the
                clinic directly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Factors That Affect C-Section Cost
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Surgeon and Consultation Fees
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Experience and qualifications of the obstetrician</li>
                <li>Number of antenatal visits before surgery</li>
                <li>Whether the surgeon personally performs the operation</li>
                <li>Follow-up visits after discharge</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Hospital and Operation Theatre Charges
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Use of the operation theatre</li>
                <li>Nursing and support staff</li>
                <li>Monitoring and surgical equipment</li>
                <li>Sterilisation and consumables</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Anaesthesia Charges
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Type of anaesthesia (spinal, epidural or general)</li>
                <li>Anaesthetist&apos;s professional fee</li>
                <li>Additional monitoring if needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Room Type and Length of Stay
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>General ward, semi-private or private room</li>
                <li>Number of nights in hospital</li>
                <li>Attendant bed and food facilities</li>
              </ul>

              <p className="mb-6 text-gray-700">
                Hospital stay after a C-section is commonly around 3 to 4 days,
                though yours may differ.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Tests and Investigations
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests and blood group</li>
                <li>Urine tests and infection screening</li>
                <li>Ultrasound scans</li>
                <li>Extra tests for high-risk conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Medicines and Consumables
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antibiotics and pain relief</li>
                <li>IV fluids and injections</li>
                <li>Suture material and dressings</li>
                <li>Supplements after surgery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Newborn Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Baby&apos;s first examination</li>
                <li>Paediatrician&apos;s visit</li>
                <li>Vaccinations</li>
                <li>Special observation or care if the baby needs it</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Complications and Extras
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Extra days in hospital</li>
                <li>Blood transfusion, if required</li>
                <li>Treatment of infection or bleeding</li>
                <li>Special care for a premature or unwell baby</li>
                <li>Additional procedures decided during surgery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planned vs Emergency C-Section: Cost Differences
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Planned (Scheduled) C-Section
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Costs are easier to estimate in advance</li>
                <li>You can compare options and ask for a written estimate</li>
                <li>
                  Tests and preparation are done calmly before admission
                </li>
                <li>You have time to arrange funds or insurance paperwork</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Emergency C-Section
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Decided quickly during pregnancy or labour</li>
                <li>There may be less time to compare costs</li>
                <li>
                  Extra monitoring or newborn care may be needed
                </li>
                <li>Costs can be higher if complications are involved</li>
              </ul>

              <p className="mt-4 text-gray-700">
                This is why discussing the possibility of a caesarean and its
                costs early in pregnancy is wise, even if you hope for a normal
                delivery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good C-Section Estimate Should Include
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for a written breakdown that covers:
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Surgeon&apos;s fee</li>
                <li>Operation theatre charges</li>
                <li>Anaesthesia and anaesthetist fees</li>
                <li>Nursing and ward charges</li>
                <li>Room charges for the expected stay</li>
                <li>Routine medicines used during the stay</li>
                <li>Basic investigations</li>
                <li>Standard newborn checks</li>
                <li>Discharge summary and follow-up guidance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ask Specifically About What May Be Excluded
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Extra nights in hospital</li>
                <li>Room upgrades</li>
                <li>Special investigations</li>
                <li>Blood products</li>
                <li>Intensive care for the baby</li>
                <li>Treatment of complications</li>
                <li>Take-home medicines</li>
                <li>Vaccinations and paediatric follow-up</li>
              </ul>

              <p className="mt-4 text-gray-700">
                If anything is unclear, ask the staff to write it down before you
                decide.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Cost Components at a Glance
              </h2>

              <div className="mb-6 overflow-x-auto">
                <table className="w-full border-collapse text-left text-gray-700">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-3 pr-4 font-semibold text-gray-900">
                        Component
                      </th>
                      <th className="py-3 pr-4 font-semibold text-gray-900">
                        Usually Covered in a Package?
                      </th>
                      <th className="py-3 font-semibold text-gray-900">
                        What to Confirm
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Surgeon&apos;s fee</td>
                      <td className="py-3 pr-4">Usually yes</td>
                      <td className="py-3">Is it fixed or variable?</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Operation theatre</td>
                      <td className="py-3 pr-4">Usually yes</td>
                      <td className="py-3">
                        Any extra charge for emergencies or night hours?
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Anaesthesia</td>
                      <td className="py-3 pr-4">Often yes</td>
                      <td className="py-3">
                        Is the anaesthetist&apos;s fee included?
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Room and stay</td>
                      <td className="py-3 pr-4">Based on room type</td>
                      <td className="py-3">How many nights are covered?</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Medicines</td>
                      <td className="py-3 pr-4">Partly</td>
                      <td className="py-3">Which are included?</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Tests</td>
                      <td className="py-3 pr-4">Partly</td>
                      <td className="py-3">Are antenatal tests separate?</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Newborn care</td>
                      <td className="py-3 pr-4">Basic checks</td>
                      <td className="py-3">What if the baby needs more care?</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">Complications</td>
                      <td className="py-3 pr-4">Usually not</td>
                      <td className="py-3">
                        What happens if extra care is needed?
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700">
                This is a general guide. Please ask the clinic to explain how it
                applies to your case.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How High-Risk Pregnancy Can Change the Cost
              </h2>

              <p className="mb-4 text-gray-700">
                Some conditions need extra monitoring and may add to the total.
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gestational or pre-existing diabetes</li>
                <li>High blood pressure or pre-eclampsia</li>
                <li>Thyroid disorders</li>
                <li>Pregnancy after IVF or fertility treatment</li>
                <li>Twin pregnancy</li>
                <li>Placenta previa or other scan findings</li>
                <li>Anaemia or low platelet count</li>
              </ul>

              <p className="mb-4 text-gray-700">These cases may involve:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits and scans</li>
                <li>Additional tests</li>
                <li>Closer monitoring in hospital</li>
                <li>A longer stay if recovery needs it</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Dr. Priyanka&apos;s experience in high-risk obstetrics and
                advanced infertility care helps in planning ahead, so the costs
                and risks are discussed early.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery vs C-Section: A General Cost View
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A C-section generally costs more, because it involves surgery,
                  anaesthesia and a longer hospital stay
                </li>
                <li>
                  Recovery after a caesarean usually takes longer than after a
                  normal delivery
                </li>
                <li>
                  A planned normal delivery can turn into an emergency C-section,
                  which changes the final bill
                </li>
                <li>
                  Cost should never be the main reason to choose or avoid surgery
                </li>
                <li>The safest option for you and your baby comes first</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Please note that a C-section should be done only when medically
                needed. Surgery without a clear reason brings extra risk and
                extra expense.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Insurance and Payment Planning
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Check whether your health policy covers maternity and
                  caesarean delivery
                </li>
                <li>
                  Look at the waiting period before maternity cover begins
                </li>
                <li>Check sub-limits for room rent and delivery</li>
                <li>
                  Ask whether the clinic or hospital accepts your insurer, and
                  whether cashless claims are possible
                </li>
                <li>
                  Keep all bills, discharge papers and reports for claims
                </li>
                <li>Ask about payment schedules or advance requirements</li>
                <li>Discuss newborn cover in your policy</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Only rely on the clinic&apos;s own confirmation about which
                insurers and payment methods it accepts.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Plan Your C-Section Budget
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Start early: Ask for an estimate in the first or second
                  trimester
                </li>
                <li>
                  Get it in writing: Request inclusions and exclusions
                </li>
                <li>Add a buffer: Keep extra funds for unexpected needs</li>
                <li>
                  Plan the room type: Decide between a ward and a private room
                  in advance
                </li>
                <li>
                  Include newborn costs: Vaccinations, paediatric visits and
                  supplies
                </li>
                <li>
                  Plan for recovery: Medicines, follow-up visits and help at
                  home
                </li>
                <li>Keep documents ready: ID, reports and insurance papers</li>
                <li>
                  Discuss the unexpected: Ask what happens if a planned normal
                  delivery becomes a caesarean
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Why is a C-section being advised for me?</li>
                <li>Is there any safe alternative in my case?</li>
                <li>What does the estimate include?</li>
                <li>What is excluded?</li>
                <li>How is anaesthesia charged?</li>
                <li>How many nights of stay are covered?</li>
                <li>Is newborn care included?</li>
                <li>What if I need extra days or special care?</li>
                <li>
                  Are there additional charges for night, holiday or emergency
                  surgery?
                </li>
                <li>Can I get the estimate in writing?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Billing Red Flags to Watch For
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A very low quote with no written list of inclusions
                </li>
                <li>Reluctance to explain charges</li>
                <li>
                  Pressure to decide quickly without medical reasons
                </li>
                <li>Surgery advised without a clear explanation</li>
                <li>Large extra charges that were never mentioned</li>
                <li>No receipts or itemised bill</li>
                <li>Refusal to share a discharge summary</li>
              </ul>

              <p className="mt-4 text-gray-700">
                You always have the right to ask questions and take time, unless
                there is a genuine emergency.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Cheapest Option Is Not Always the Best
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Low prices may leave out important services</li>
                <li>Hidden charges can raise your final bill</li>
                <li>A lack of emergency backup can be dangerous</li>
                <li>Rushed care may leave your questions unanswered</li>
                <li>
                  Value means safe surgery, clear communication and honest
                  billing
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Qualifications:</strong> MS (Obstetrics &amp;
                  Gynaecology), FMAS, Advanced Infertility Fellowship
                </li>
                <li>
                  <strong>Roles:</strong> Co-leads Shree Advanced Urogynae
                  Clinic and serves as a Consultant at Ujala Cygnus BrightStar
                  Hospital
                </li>
                <li>
                  <strong>Expertise:</strong> Normal delivery, high-risk
                  pregnancy care, antenatal and postnatal care, 3D laparoscopic
                  surgery and fertility treatment
                </li>
                <li>
                  <strong>Approach:</strong> Natural birth first when safe, and
                  timely surgery only when needed
                </li>
                <li>
                  <strong>Philosophy:</strong> &quot;Her Health First&quot;,
                  which means your comfort and safety guide every decision
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach to Caesarean Care and Costs
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  We explain clearly why a caesarean is advised
                </li>
                <li>
                  We discuss likely expenses early, not at the last minute
                </li>
                <li>
                  We tell you honestly if your case may need extra care
                </li>
                <li>
                  We never recommend surgery just to raise the bill
                </li>
                <li>Operation theatre is on standby 24/7 for emergencies</li>
                <li>
                  Continuous fetal monitoring and one-on-one nursing support in
                  labour
                </li>
                <li>Painless labour options for women aiming for normal delivery</li>
                <li>3D/4D ultrasound for detailed scans</li>
                <li>
                  Postnatal, breastfeeding and newborn guidance after delivery
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                For an accurate estimate, please book a consultation so Dr.
                Priyanka can assess your health first.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book a Consultation and Get a Clear Estimate
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