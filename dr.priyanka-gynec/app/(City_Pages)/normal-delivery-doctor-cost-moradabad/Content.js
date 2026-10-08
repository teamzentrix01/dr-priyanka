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


export default function NormalDeliveryCostMoradabad() {
  const faqs = [
    {
      q: "What is the normal delivery cost in Moradabad?",
      a: "It varies with your health, room type, pain relief and stay. Book a consultation for an accurate estimate.",
    },
    {
      q: "Is normal delivery cheaper than a caesarean?",
      a: "Usually yes, as it needs no major surgery and often a shorter stay.",
    },
    {
      q: "Does painless delivery cost extra?",
      a: "Yes, epidural analgesia and anaesthetist fees are usually charged separately. Ask for the exact amount.",
    },
    {
      q: "What does a normal delivery package include?",
      a: "Typically labour room, doctor's fee, nursing, monitoring and a standard stay. Ask for a written list.",
    },
    {
      q: "Can complications increase the cost?",
      a: "Yes. Instrumental delivery, extra stay or emergency caesarean can raise the final bill.",
    },
    {
      q: "Does insurance cover normal delivery?",
      a: "It depends on your policy's maternity cover and waiting period. Check with your insurer.",
    },
    {
      q: "Should I choose the cheapest doctor?",
      a: "Not necessarily. Choose safe care, clear communication and honest billing.",
    },
    {
      q: "Are antenatal visits included in the delivery cost?",
      a: "Not always. Ask whether visits, scans and tests are separate.",
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
                Normal Delivery Doctor Cost in Moradabad: What Affects the Price
                and What to Expect
              </h1>


              <p className="mb-4 text-gray-700">
                &quot;How much will my delivery cost?&quot; is one of the first
                questions every expecting family asks, and it is a fair one.
                Pregnancy involves many expenses, and nobody wants surprise
                bills at the most emotional moment of their lives.
              </p>


              <p className="mb-4 text-gray-700">
                The honest answer is that the cost of a normal delivery in
                Moradabad is not a single fixed number. It depends on your
                health, the type of care you choose, how long you stay and
                whether any complications arise. This guide breaks down what
                influences the cost, what a good package should include and the
                questions to ask before you decide. It also explains how Dr.
                Priyanka Pachauri at Dr. Priyanka Gynaec approaches transparent,
                patient-first maternity care.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why There Is No Single Price for Normal Delivery
              </h2>


              <p className="mb-4 text-gray-700">
                Two women having a normal delivery can pay very different
                amounts. Here is why:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Each pregnancy has different medical needs
                </li>
                <li>
                  Some labours are short and simple, others need more support
                </li>
                <li>Pain relief choices change the final bill</li>
                <li>The length of hospital stay varies</li>
                <li>The type of room you choose affects cost</li>
                <li>Unexpected complications may require extra procedures</li>
                <li>Baby&apos;s health after birth may need additional care</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Any doctor who quotes a rigid price without examining you should
                be asked what that price covers.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Factors That Affect Normal Delivery Cost
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Doctor and Consultation Fees
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Experience and qualifications of the obstetrician</li>
                <li>Number of antenatal visits</li>
                <li>Whether the doctor personally conducts the delivery</li>
                <li>Follow-up consultations after birth</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Hospital or Clinic Charges
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Labour room and delivery suite usage</li>
                <li>Nursing and support staff</li>
                <li>Monitoring equipment</li>
                <li>Operation theatre standby readiness</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Room Type and Stay
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>General ward, semi-private or private room</li>
                <li>Number of nights in hospital</li>
                <li>Attendant and food facilities</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Pain Relief Choice
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal labour with no analgesia</li>
                <li>Epidural or walking epidural labour analgesia</li>
                <li>Anaesthetist fees</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Investigations and Scans
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Routine blood and urine tests</li>
                <li>Ultrasound scans, including 3D/4D anomaly scans</li>
                <li>Gestational diabetes screening</li>
                <li>Additional tests for high-risk pregnancies</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Medicines and Consumables
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Supplements during pregnancy</li>
                <li>Labour medicines and injections</li>
                <li>Suture material and dressings</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Newborn Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Baby&apos;s first examination</li>
                <li>Vaccinations</li>
                <li>Paediatrician visits</li>
                <li>Special care if the baby needs observation</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Complications and Extras
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Episiotomy and perineal repair</li>
                <li>Instrumental delivery (vacuum or forceps)</li>
                <li>Blood transfusion, if required</li>
                <li>Conversion to caesarean in an emergency</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Should a Good Normal Delivery Package Include?
              </h2>


              <p className="mb-4 text-gray-700">
                Always ask for a written list of inclusions and exclusions. A
                clear package normally covers:
              </p>


              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Labour room charges</li>
                <li>Doctor&apos;s delivery fee</li>
                <li>Nursing care during labour</li>
                <li>Fetal monitoring</li>
                <li>Routine medicines used during delivery</li>
                <li>Standard stay after delivery</li>
                <li>Newborn basic checks</li>
                <li>Discharge summary and guidance</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Often Not Included (Ask About These)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Epidural or analgesia fees</li>
                <li>Extra nights of stay</li>
                <li>Special investigations</li>
                <li>Baby intensive care</li>
                <li>Emergency caesarean or other surgery</li>
                <li>Blood products</li>
                <li>Private room upgrades</li>
              </ul>


              <p className="mt-4 text-gray-700">
                If the answers are vague, request them in writing before you
                sign anything.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery vs Caesarean: Cost and Recovery Compared
              </h2>


              <p className="mb-4 text-gray-700">
                Families often ask which option costs less. In general:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Normal delivery usually has a lower overall cost because it
                  needs no major surgery
                </li>
                <li>
                  Caesarean delivery involves operation theatre use, anaesthesia
                  and a longer stay, so the bill is usually higher
                </li>
                <li>
                  Recovery time after normal delivery is typically shorter
                </li>
                <li>
                  Hospital stay is often shorter after a normal delivery
                </li>
                <li>
                  Return to daily activities is generally quicker after a vaginal
                  birth
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                The choice should never be made on cost alone. Safety comes
                first, and your doctor will advise what suits you and your baby
                best.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Painless Delivery Cost: Is It Worth It?
              </h2>


              <p className="mb-4 text-gray-700">
                Many mothers wonder whether epidural pain relief adds too much
                to the bill. It does add some cost, but it can change the whole
                experience.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Benefit:</strong> Significantly lower labour pain while
                  you stay awake and aware
                </li>
                <li>
                  <strong>Walking epidural:</strong> Uses lower doses so some
                  movement may be possible
                </li>
                <li>
                  <strong>Comfort:</strong> Helps you rest and conserve energy in
                  long labours
                </li>
                <li>
                  <strong>Fear reduction:</strong> Can make women more confident
                  about choosing natural birth
                </li>
                <li>
                  <strong>Assessment needed:</strong> Given only after your
                  doctor and anaesthetist confirm it is suitable
                </li>
                <li>
                  <strong>Cost clarity:</strong> Ask for the analgesia charge
                  separately when you request an estimate
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Discuss this during antenatal visits so there are no rushed
                decisions in labour.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Antenatal Care: The Cost Before Delivery
              </h2>


              <p className="mb-4 text-gray-700">
                Delivery cost is only one part of the pregnancy budget. Plan for
                the months before as well.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation visits: Regular check-ups throughout pregnancy</li>
                <li>Blood and urine tests: Done at different stages</li>
                <li>
                  Ultrasound scans: Dating scan, anomaly scan and growth scans
                </li>
                <li>Supplements: Folic acid, iron, calcium and vitamins</li>
                <li>Vaccinations: As advised by your doctor</li>
                <li>
                  Special tests: For diabetes, thyroid or blood pressure issues
                </li>
                <li>
                  Childbirth education: Preparation for labour and breastfeeding
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Good antenatal care can reduce costly complications later
                because problems are detected early.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How High-Risk Pregnancy Can Change the Cost
              </h2>


              <p className="mb-4 text-gray-700">
                Pregnancies with extra risks may need more monitoring and care.
              </p>


              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gestational diabetes</li>
                <li>High blood pressure or pre-eclampsia</li>
                <li>Thyroid disorders</li>
                <li>Pregnancy after IVF or fertility treatment</li>
                <li>Twin pregnancy</li>
                <li>Previous caesarean</li>
              </ul>


              <p className="mb-4 text-gray-700">These cases may involve:</p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits and scans</li>
                <li>Additional tests</li>
                <li>Longer hospital stay</li>
                <li>Closer fetal monitoring</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Dr. Priyanka has experience in high-risk obstetrics and advanced
                infertility care, which helps in planning ahead so that costs
                and risks are discussed early.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Plan Your Delivery Budget
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask for an estimate early: Do it in the first or second
                  trimester
                </li>
                <li>
                  Request inclusions and exclusions in writing
                </li>
                <li>
                  Ask about payment options: Instalments, advance payments or
                  insurance acceptance, if available
                </li>
                <li>
                  Check your health insurance: Look at maternity cover, waiting
                  periods and limits
                </li>
                <li>Keep a buffer: Set aside extra funds for unexpected needs</li>
                <li>
                  Plan the room type: Decide between ward and private room in
                  advance
                </li>
                <li>Keep reports together: This avoids repeat tests</li>
                <li>
                  Discuss pain relief now: So the cost of epidural is not a
                  surprise
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Choosing a Delivery Doctor
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What does the normal delivery package include?</li>
                <li>What is not included?</li>
                <li>How is epidural analgesia charged?</li>
                <li>What happens if a caesarean becomes necessary?</li>
                <li>Are newborn care and vaccinations included?</li>
                <li>How many days of stay are covered?</li>
                <li>Is the operation theatre ready 24/7?</li>
                <li>Who will conduct my delivery?</li>
                <li>
                  Are there any extra charges for night or holiday deliveries?
                </li>
                <li>Can I get the estimate in writing?</li>
              </ul>


              <p className="mt-4 text-gray-700">
                A trustworthy doctor will answer these openly.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Cheapest Is Not Always Best
              </h2>


              <p className="mb-4 text-gray-700">
                Cost matters, but choosing only by price can be risky.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Low-cost packages may exclude essentials</li>
                <li>Hidden charges can raise the final bill</li>
                <li>Poor monitoring can miss warning signs</li>
                <li>Lack of emergency backup can be dangerous</li>
                <li>Rushed care may leave your questions unanswered</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Look for value: safe care, clear communication and honest
                billing.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What You Get at Dr. Priyanka Gynaec
              </h2>


              <p className="mb-4 text-gray-700">
                Our care is designed around safety, comfort and transparency.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Qualified MS (O&amp;G), FMAS obstetrician with advanced
                  fellowship training
                </li>
                <li>
                  Continuous electronic fetal monitoring during labour
                </li>
                <li>One-on-one nursing support in active labour</li>
                <li>
                  Painless epidural options, including walking epidural
                  assistance
                </li>
                <li>24/7 operation theatre standby</li>
                <li>Support for movement and natural positions during labour</li>
                <li>
                  Golden hour skin-to-skin contact and early breastfeeding help
                </li>
                <li>3D/4D ultrasound for detailed fetal scans</li>
                <li>Care for both low-risk and high-risk pregnancies</li>
                <li>
                  Antenatal, delivery, postnatal and paediatric support
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How We Handle Cost Questions
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>We explain the plan before you decide</li>
                <li>We discuss likely expenses in your first consultations</li>
                <li>
                  We tell you honestly if your case may need extra care
                </li>
                <li>We never recommend a procedure just to raise the bill</li>
              </ul>


              <p className="mt-4 text-gray-700">
                For an accurate estimate of your own case, please book a
                consultation so Dr. Priyanka can assess your health first.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book a Consultation and Get a Clear Estimate
              </h2>


              <p className="mb-4 text-gray-700">
                Do not wait until the last month to ask about costs. An early
                visit lets you plan your care and your budget with confidence.
              </p>


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