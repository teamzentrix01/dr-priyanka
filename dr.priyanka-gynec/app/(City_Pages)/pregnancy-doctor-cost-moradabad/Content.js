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

export default function PregnancyDoctorCostMoradabad() {
  const faqs = [
    {
      q: "How much does a pregnancy doctor cost in Moradabad?",
      a: "It varies by your needs, so contact the clinic for current fees.",
    },
    {
      q: "What affects pregnancy care costs?",
      a: "Health risks, scans, tests, delivery type and any complications.",
    },
    {
      q: "Is normal delivery cheaper than caesarean?",
      a: "Generally yes, due to shorter stay and no surgery.",
    },
    {
      q: "Are scans included in the consultation fee?",
      a: "Usually charged separately, so confirm with the clinic.",
    },
    {
      q: "Can I get a cost estimate before delivery?",
      a: "Yes, ask the clinic for an estimate after your first consultation.",
    },
    {
      q: "Does health insurance cover maternity?",
      a: "Some policies do, often after a waiting period. Check your policy.",
    },
    {
      q: "Are high-risk pregnancies more expensive?",
      a: "They often need extra scans and visits, which can increase costs.",
    },
    {
      q: "Is newborn care charged separately?",
      a: "It can be, so ask for a clear breakdown.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Doctor Cost in Moradabad: What You Pay For and How to Plan Your Budget
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy brings joy, and a fair share of financial planning.
                Most expecting parents ask the same question early on: how much
                will pregnancy care cost? The honest answer is that it varies
                from one woman to another, because every pregnancy is different.
              </p>

              <p className="text-gray-700">
                This guide explains what makes up the pregnancy doctor cost in
                Moradabad, what factors change the total, and how to plan your
                budget. We have intentionally not quoted fixed prices, because
                fees depend on your individual needs and can change over time.
                For exact charges, contact Dr. Priyanka Gynaec directly.
              </p>
            </div>

            {/* Section 2 — Why No Single Cost */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why There Is No Single &quot;Pregnancy Cost&quot;
              </h2>

              <p className="mb-4 text-gray-700">
                Two women can visit the same clinic and have very different
                bills. This is normal and expected.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Costs Differ Between Patients
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Some pregnancies are low-risk and need only routine care</li>
                <li>Others need extra scans, tests or specialist monitoring</li>
                <li>Delivery type and any complications change the total</li>
                <li>Pre-existing conditions such as diabetes or thyroid disease add more follow-up</li>
                <li>Some women need hospital admission, others do not</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What This Means for You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Be wary of anyone who promises one exact price before assessing you</li>
                <li>Ask for an estimate after your first consultation</li>
                <li>Request a clear breakdown of what is included</li>
              </ul>
            </div>

            {/* Section 3 — What Pregnancy Care Includes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does Pregnancy Care Include?
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy costs are made up of several parts. Knowing them helps
                you ask the right questions.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Doctor Consultation Fees
              </h3>

              <p className="mb-2 text-gray-700">Includes:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>First antenatal visit</li>
                <li>Routine follow-up visits</li>
                <li>Extra visits if complications arise</li>
                <li>Emergency consultations when needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Blood and Urine Tests
              </h3>

              <p className="mb-2 text-gray-700">Typical tests:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Haemoglobin and blood group with Rh factor</li>
                <li>Blood sugar and glucose tolerance test</li>
                <li>Thyroid profile</li>
                <li>Screening for infections such as HIV and hepatitis B</li>
                <li>Urine routine and culture tests</li>
                <li>Additional tests for high-risk conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Ultrasound Scans
              </h3>

              <p className="mb-2 text-gray-700">Common scans:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Dating scan in early pregnancy</li>
                <li>NT scan at 11 to 13 weeks 6 days</li>
                <li>Anomaly scan at 18 to 20 weeks</li>
                <li>Growth scans in the third trimester</li>
                <li>Doppler scans when blood flow needs to be checked</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Medicines and Supplements
              </h3>

              <p className="mb-2 text-gray-700">Usually include:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Folic acid</li>
                <li>Iron and calcium</li>
                <li>Vitamin D and other vitamins</li>
                <li>Medicines for specific conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Delivery Charges
              </h3>

              <p className="mb-2 text-gray-700">Depend on:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal or caesarean delivery</li>
                <li>Length of hospital stay</li>
                <li>Anaesthesia and pain relief</li>
                <li>Any complications during labour</li>
                <li>Newborn care requirements</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Postnatal and Newborn Care
              </h3>

              <p className="mb-2 text-gray-700">Includes:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mother&apos;s recovery check-ups</li>
                <li>Newborn examination</li>
                <li>Paediatric consultations</li>
                <li>Vaccinations as per schedule</li>
              </ul>
            </div>

            {/* Section 4 — Key Factors */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Factors That Affect Your Pregnancy Cost
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Your Health Profile
              </h3>

              <p className="mb-2 text-gray-700">May increase costs if you have:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diabetes, thyroid disease or high blood pressure</li>
                <li>A history of miscarriage or preterm birth</li>
                <li>Previous caesarean section</li>
                <li>Twin or multiple pregnancy</li>
                <li>Pregnancy after IVF</li>
                <li>Anaemia or Rh-negative blood group</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                The Type of Delivery
              </h3>

              <p className="mb-2 text-gray-700">Normal delivery:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Usually involves a shorter hospital stay</li>
                <li>Generally has a lower overall cost</li>
                <li>Recovery is often faster</li>
              </ul>

              <p className="mb-2 text-gray-700">Caesarean delivery:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Involves surgery and anaesthesia</li>
                <li>Usually needs a longer hospital stay</li>
                <li>Overall costs are typically higher</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Important: A caesarean should be chosen only when medically
                needed, never for cost or convenience alone.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Complications
              </h3>

              <p className="mb-2 text-gray-700">May add costs through:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Additional scans and tests</li>
                <li>Medicines or injections</li>
                <li>Hospital admission</li>
                <li>Neonatal care for the baby</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Technology and Diagnostics
              </h3>

              <p className="mb-2 text-gray-700">Higher-end diagnostics can mean:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>More detailed scans, such as 3D/4D imaging</li>
                <li>Doppler studies</li>
                <li>Specialised screening tests</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Better imaging helps detect problems early, which can prevent
                costlier emergencies later.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Location and Facilities
              </h3>

              <p className="mb-2 text-gray-700">Costs can vary with:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clinic infrastructure and equipment</li>
                <li>Hospital room category</li>
                <li>Whether newborn and paediatric care is available on-site</li>
              </ul>
            </div>

            {/* Section 5 — Costs at Each Stage */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs at Each Stage of Pregnancy
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before Pregnancy
              </h3>

              <p className="mb-2 text-gray-700">You may need:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A preconception consultation</li>
                <li>Basic blood tests</li>
                <li>Treatment for PCOS, thyroid or other conditions</li>
                <li>Folic acid and vitamins</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester
              </h3>

              <p className="mb-2 text-gray-700">Expect:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Initial consultation and dating scan</li>
                <li>Booking blood and urine tests</li>
                <li>NT scan and screening tests</li>
                <li>Supplements and medicines</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester
              </h3>

              <p className="mb-2 text-gray-700">Expect:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Monthly check-ups</li>
                <li>Anomaly scan</li>
                <li>Glucose tolerance test</li>
                <li>Iron and calcium supplements</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester
              </h3>

              <p className="mb-2 text-gray-700">Expect:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits</li>
                <li>Growth scans</li>
                <li>Birth planning</li>
                <li>Preparation for delivery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Delivery and Postnatal Period
              </h3>

              <p className="mb-2 text-gray-700">Expect:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Delivery charges</li>
                <li>Newborn care and vaccinations</li>
                <li>Postnatal check-ups</li>
              </ul>
            </div>

            {/* Section 6 — Budget Planning */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Plan Your Pregnancy Budget
              </h2>

              <p className="mb-4 text-gray-700">
                A little planning reduces stress later.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Practical Budgeting Steps
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask the clinic for an estimate after your first visit</li>
                <li>Request a written breakdown of consultations, scans, tests and delivery</li>
                <li>Plan for the unexpected by keeping a small reserve</li>
                <li>Check what your health insurance covers</li>
                <li>Book all scans and tests at the recommended weeks, since missed tests can lead to urgent, costlier care</li>
                <li>Keep a folder with bills and reports</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Questions to Ask the Clinic
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Which visits and tests are included in routine care?</li>
                <li>Which services are charged separately?</li>
                <li>What is the estimated cost for normal delivery?</li>
                <li>What additional costs arise if a caesarean is needed?</li>
                <li>Are newborn care and vaccinations charged separately?</li>
                <li>What happens in an emergency?</li>
              </ul>
            </div>

            {/* Section 7 — Insurance */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Insurance and Maternity Coverage
              </h2>

              <p className="mb-4 text-gray-700">
                Insurance can reduce your out-of-pocket costs, but terms differ
                widely.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Points to Check in Your Policy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Whether maternity benefits are included</li>
                <li>Waiting period before maternity cover begins</li>
                <li>Limits for normal and caesarean delivery</li>
                <li>Whether pre- and post-natal expenses are covered</li>
                <li>Newborn cover from day one</li>
                <li>Whether cashless treatment is available</li>
                <li>Exclusions for pre-existing conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Helpful Tips
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Review maternity cover well before conception, as many policies have waiting periods</li>
                <li>Keep policy documents handy when you visit the clinic</li>
                <li>Ask the clinic&apos;s staff whether they can help with paperwork</li>
                <li>Government schemes may also provide maternity benefits, so ask about eligibility</li>
              </ul>
            </div>

            {/* Section 8 — Managing Costs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ways to Manage Costs Without Compromising Care
              </h2>

              <p className="mb-4 text-gray-700">
                Saving money should never mean cutting corners on safety.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Smart Ways to Reduce Expenses
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Start antenatal care early, since early detection prevents expensive complications</li>
                <li>Attend every scheduled visit</li>
                <li>Eat a balanced diet to reduce risk of anaemia and diabetes</li>
                <li>Take supplements regularly as prescribed</li>
                <li>Avoid self-medication and unnecessary tests</li>
                <li>Compare options by asking for itemised estimates</li>
                <li>Choose a clinic that provides several services in one place</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Not to Compromise On
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Recommended scans and blood tests</li>
                <li>Regular check-ups</li>
                <li>Qualified doctors and proper hygiene</li>
                <li>Emergency preparedness</li>
              </ul>
            </div>

            {/* Section 9 — Value */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Value Matters More Than the Lowest Price
              </h2>

              <p className="mb-4 text-gray-700">
                The cheapest option is not always the best, and the most
                expensive is not automatically the safest.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Think About Value
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Is the doctor experienced and approachable?</li>
                <li>Are scans and tests accurate and well explained?</li>
                <li>Can you reach the clinic for urgent questions?</li>
                <li>Is delivery care safe and supportive?</li>
                <li>Are newborn and postnatal services available?</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hidden Costs of Poor-Quality Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Missed diagnoses</li>
                <li>Repeat tests at other centres</li>
                <li>Emergency admissions</li>
                <li>Avoidable complications</li>
              </ul>
            </div>

            {/* Section 10 — What Clinic Offers */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Dr. Priyanka Gynaec Offers
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                antenatal and postnatal care, high-risk pregnancy management,
                laparoscopic surgery and fertility care. The clinic&apos;s
                philosophy is &quot;Her Health First.&quot;
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Services Under One Roof
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Preconception counselling</li>
                <li>Antenatal check-ups and screenings</li>
                <li>Pregnancy and birthing care</li>
                <li>Normal delivery support</li>
                <li>High-risk pregnancy management</li>
                <li>Postnatal care</li>
                <li>Fertility and IVF treatment</li>
                <li>Paediatric consultations, vaccinations and newborn care</li>
                <li>3D laparoscopic gynaecological surgery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Technology
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>3D and 4D ultrasound (Voluson E22 series)</li>
                <li>Anomaly, growth and Doppler scans</li>
                <li>Full diagnostic investigations</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why This Helps with Cost Planning
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Many services are available at one clinic, so you avoid scattered bills</li>
                <li>A single team understands your history</li>
                <li>Planned, continuous care can prevent last-minute emergencies</li>
              </ul>
            </div>

            {/* Section 11 — Warning Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Never Delay Care to Save Money
              </h2>

              <p className="mb-4 text-gray-700">
                Some symptoms need immediate attention, regardless of cost
                concerns.
              </p>

              <p className="mb-2 text-gray-700">Seek care at once if you notice:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy vaginal bleeding</li>
                <li>Sudden fluid leakage</li>
                <li>Severe abdominal pain</li>
                <li>Severe headache with blurred vision</li>
                <li>Sudden swelling of face or hands</li>
                <li>Reduced or absent baby movements</li>
                <li>High fever with chills</li>
                <li>Regular contractions before 37 weeks</li>
              </ul>

              <p className="text-gray-700">
                Delaying treatment can turn a manageable problem into an
                emergency that costs far more, financially and emotionally.
              </p>
            </div>

            {/* Section 12 — Accurate Estimate */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Get an Accurate Cost Estimate
              </h2>

              <p className="mb-4 text-gray-700">
                The best way to know your cost is to speak with the clinic
                directly.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Steps to Follow
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Call or WhatsApp the clinic</li>
                <li>Share your stage of pregnancy and any medical conditions</li>
                <li>Ask about consultation, scan and test charges</li>
                <li>Ask for a delivery estimate based on your situation</li>
                <li>Request details on what is included and what is extra</li>
                <li>Book your first visit to receive a personalised plan</li>
              </ul>
            </div>

            {/* Section 13 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-6 text-black">
                For current fees, packages and appointments, reach out directly.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Doctor</p>
                    <p className="text-black">Dr. Priyanka Pachauri</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone / Appointments</p>
                    <div className="flex flex-wrap items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8979670705" className="hover:underline">
                        +91 89796 70705 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-black">@dr.priyanka.gynae</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 14 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
