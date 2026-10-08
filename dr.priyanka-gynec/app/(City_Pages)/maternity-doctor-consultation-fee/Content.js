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

export default function MaternityDoctorConsultationFee() {
  const faqs = [
    {
      q: "What is the average maternity doctor consultation fee in India?",
      a: "It commonly ranges from about ₹300 to ₹2,000, depending on the city, clinic and doctor.",
    },
    {
      q: "Is the first consultation more expensive than follow-ups?",
      a: "Often yes, since it involves a detailed history and examination.",
    },
    {
      q: "Does the consultation fee include ultrasound?",
      a: "Usually not. Scans and tests are typically charged separately.",
    },
    {
      q: "How many consultations will I need in pregnancy?",
      a: "Around 10 to 14 visits in a normal pregnancy, and more for high-risk cases.",
    },
    {
      q: "Is a higher consultation fee a sign of a better doctor?",
      a: "Not necessarily. Check qualifications, experience, communication and facilities.",
    },
    {
      q: "Are emergency visits charged extra?",
      a: "Some clinics charge more for urgent or after-hours visits. Ask in advance.",
    },
    {
      q: "Does health insurance cover antenatal consultations?",
      a: "Only some policies do. Check your maternity cover, waiting period and OPD limits.",
    },
    {
      q: "Can I get free antenatal check-ups?",
      a: "Government facilities offer free or low-cost care, including monthly PMSMA check-up days.",
    },
    {
      q: "Are online consultations cheaper?",
      a: "Often yes, but they are not suitable when you need an examination or scan.",
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
                Maternity Doctor Consultation Fee: What to Expect and How to Plan
              </h1>

              <p className="mb-4 text-gray-700">
                When you find out you are pregnant, your mind fills with
                questions. One of the most practical is: &quot;How much will my
                maternity doctor charge?&quot;
              </p>

              <p className="mb-4 text-gray-700">
                The maternity doctor consultation fee is the amount you pay for
                each visit with your gynaecologist or obstetrician. It may look
                small on its own, but pregnancy involves many visits, so
                understanding fees early helps you plan without stress.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What the consultation fee includes</li>
                <li>Typical fee ranges in India</li>
                <li>Factors that raise or lower fees</li>
                <li>Scan and test costs that come on top</li>
                <li>Package vs per-visit billing</li>
                <li>Ways to plan and save</li>
                <li>Questions to ask before you book</li>
              </ul>

              <p className="text-gray-700">
                Note: All amounts here are indicative and for general
                understanding. Actual fees differ by doctor, city and clinic.
                For exact charges, contact the clinic directly (details at the
                end).
              </p>
            </div>

            {/* Section 2 — What Is Fee */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Maternity Doctor Consultation Fee?
              </h2>

              <p className="mb-4 text-gray-700">
                It is the fee a doctor charges for your time, examination and
                advice during a visit. It usually does not include scans, lab
                tests or procedures, which are billed separately.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Consultation Generally Covers
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discussion of your symptoms and concerns</li>
                <li>Review of your medical history and previous reports</li>
                <li>Basic examination, such as weight and blood pressure</li>
                <li>Advice on diet, supplements and lifestyle</li>
                <li>Prescriptions for medicines and vitamins</li>
                <li>Planning of tests, scans and the next appointment</li>
              </ul>
            </div>

            {/* Section 3 — Typical Fees */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Typical Consultation Fees in India
              </h2>

              <p className="mb-4 text-gray-700">
                Fees vary widely across the country. Here is a general picture:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Government hospitals: very low cost or free for eligible patients</li>
                <li>Smaller-city private clinics: often around ₹300 to ₹1,000 per visit</li>
                <li>Mid-level private clinics: commonly around ₹500 to ₹1,000</li>
                <li>Senior specialists and corporate hospitals in metros: often ₹1,000 to ₹2,000 or more</li>
                <li>Online or tele-consultations: frequently lower than in-person visits, depending on the platform</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What to Understand
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A higher fee does not automatically mean better care.</li>
                <li>A lower fee does not automatically mean lower quality.</li>
                <li>Smaller cities like Moradabad generally cost less than metros.</li>
                <li>Always confirm the exact fee when you book.</li>
              </ul>
            </div>

            {/* Section 4 — Types of Consultations */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Maternity Consultations and Their Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Not all visits are priced the same. Here are the common
                categories:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. First Consultation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed history and examination</li>
                <li>Often slightly higher than follow-up visits</li>
                <li>Includes planning the entire pregnancy schedule</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Regular Antenatal Follow-Up
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Routine check of weight, blood pressure and baby&apos;s growth</li>
                <li>Usually the standard fee, or sometimes slightly lower</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Preconception Counselling
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>For women planning pregnancy</li>
                <li>Review of health, supplements and lifestyle</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. High-Risk Pregnancy Consultation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>For conditions like diabetes, high blood pressure or previous complications</li>
                <li>May involve longer visits and extra discussion</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Emergency or Urgent Visit
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>For sudden symptoms such as bleeding or reduced movements</li>
                <li>May carry extra charges, especially outside regular hours</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Postnatal Consultation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Check-up after delivery, usually at about 6 weeks</li>
                <li>Includes recovery review and family planning advice</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Online (Tele) Consultation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Convenient for follow-up questions and report reviews</li>
                <li>Not suitable when a physical examination or scan is needed</li>
              </ul>
            </div>

            {/* Section 5 — Factors */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Affect the Consultation Fee
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>1. Doctor&apos;s Experience and Qualifications: More experienced doctors and those with advanced training often charge more.</li>
                <li>2. City and Location: Metro clinics generally have higher fees. Tier-2 and tier-3 cities are usually more affordable.</li>
                <li>3. Type of Clinic or Hospital: Government, private clinic and corporate hospital each follow different pricing.</li>
                <li>4. Reputation and Demand: Highly sought-after doctors may charge more.</li>
                <li>5. Duration of the Visit: Detailed consultations for complex cases can cost more.</li>
                <li>6. Timing of the Visit: Visits outside regular hours or on holidays may carry extra charges.</li>
                <li>7. Services Included: Some clinics include a basic ultrasound or follow-up in the fee. Others bill each item separately.</li>
                <li>8. Type of Pregnancy: High-risk or multiple pregnancies may need more time and attention.</li>
              </ul>
            </div>

            {/* Section 6 — What Fee Does Not Include */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What the Consultation Fee Usually Does Not Include
              </h2>

              <p className="mb-4 text-gray-700">
                This is where many families get surprised. Ask about these
                separately:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ultrasound scans, including dating, anomaly and growth scans</li>
                <li>Blood and urine tests</li>
                <li>Special tests, such as glucose tolerance or screening tests</li>
                <li>Medicines and supplements</li>
                <li>Vaccinations, such as tetanus during pregnancy</li>
                <li>Procedures, such as a cervical stitch, if needed</li>
                <li>Hospital admission and delivery charges</li>
                <li>Newborn consultation and vaccinations</li>
              </ul>

              <p className="text-gray-700">
                Smart tip: Ask, &quot;What does the consultation fee cover, and
                what will be charged extra?&quot;
              </p>
            </div>

            {/* Section 7 — How Many Consultations */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Many Consultations Will You Need?
              </h2>

              <p className="mb-4 text-gray-700">
                A typical pregnancy involves many visits, so the total adds up.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Common Schedule Looks Like This
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Up to 28 weeks: about once a month</li>
                <li>28 to 36 weeks: about every 2 weeks</li>
                <li>36 weeks to delivery: about once a week</li>
                <li>After delivery: a check-up at around 6 weeks, plus any urgent visits</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Estimated Overall
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Around 10 to 14 visits during a normal pregnancy</li>
                <li>More visits for high-risk pregnancies</li>
              </ul>

              <p className="text-gray-700">
                Why this matters: Even a modest per-visit fee becomes a
                significant total. Planning early helps you budget calmly.
              </p>
            </div>

            {/* Section 7 — Per-Visit vs Package */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Per-Visit Billing vs Antenatal Package: Which Is Better?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Per-Visit Billing
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You pay each time you consult.</li>
                <li>Flexible if you are unsure where to deliver.</li>
                <li>Costs can add up unpredictably.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Antenatal or Delivery Package
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>One combined price covering several visits, and sometimes scans and delivery.</li>
                <li>Easier to budget.</li>
                <li>Check carefully what is included and what is not.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Questions to Ask About Packages
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>How many consultations are included?</li>
                <li>Are scans and tests included?</li>
                <li>Does it cover delivery and the hospital stay?</li>
                <li>What happens if I need extra visits or emergency care?</li>
                <li>What if I change my plan or move to another city?</li>
              </ul>
            </div>

            {/* Section 8 — Scans and Tests */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scans and Tests: The Costs Beyond Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Your total antenatal budget includes more than consultation
                fees.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Items During Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early ultrasound to confirm the pregnancy and due date</li>
                <li>Blood tests: hemoglobin, blood group and Rh factor, sugar, thyroid and infection screening</li>
                <li>Urine tests to check for infection and protein</li>
                <li>NT scan and screening tests, when advised</li>
                <li>Anomaly scan around 18 to 20 weeks</li>
                <li>Glucose tolerance test to screen for gestational diabetes</li>
                <li>Growth scans in the later months</li>
                <li>Doppler studies in selected cases</li>
              </ul>

              <p className="text-gray-700">
                Money-saving tip: Do only the tests your doctor advises, and ask
                which are essential and which are optional in your case.
              </p>
            </div>

            {/* Section 9 — Insurance */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Does Health Insurance Cover Consultation Fees?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maternity cover: Many standard policies do not cover routine antenatal consultations.</li>
                <li>Waiting periods: Maternity benefits often apply only after a waiting period.</li>
                <li>OPD benefits: Some plans include outpatient cover, but with limits.</li>
                <li>Corporate or group policies: These sometimes include antenatal benefits.</li>
                <li>Reimbursement: Keep all bills and prescriptions for claims.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Practical Steps
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Call your insurer and ask exactly what maternity benefits apply.</li>
                <li>Check limits for outpatient consultations.</li>
                <li>Keep itemized receipts from the clinic.</li>
              </ul>
            </div>

            {/* Section 10 — Government Schemes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Government Schemes That May Help
              </h2>

              <p className="mb-4 text-gray-700">
                Several public programs support pregnant women. Eligibility
                depends on income, state and facility.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Janani Suraksha Yojana (JSY): supports institutional delivery</li>
                <li>Pradhan Mantri Matru Vandana Yojana (PMMVY): maternity benefit for eligible women</li>
                <li>Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA): free antenatal check-ups on a fixed day each month at designated government facilities</li>
                <li>Ayushman Bharat (PM-JAY): may cover eligible families at empanelled hospitals</li>
              </ul>

              <p className="text-gray-700">
                Tip: Confirm details at your local health centre or hospital
                help desk.
              </p>
            </div>

            {/* Section 11 — Save Money */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Save Money Without Compromising Care
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Start early: Early care can prevent costly complications.</li>
                <li>Choose one doctor and stay with her: Continuity avoids repeated tests and confusion.</li>
                <li>Ask about packages: They can reduce overall costs.</li>
                <li>Keep your reports organized: This prevents repeated tests.</li>
                <li>Follow the schedule: Missed visits can lead to emergencies.</li>
                <li>Eat well and stay active as advised: Good health reduces risks.</li>
                <li>Compare fairly: Look at what is included, not just the headline fee.</li>
                <li>Use online consultations wisely: For simple follow-up queries when no examination is needed.</li>
              </ul>
            </div>

            {/* Section 12 — Cheapest Not Best */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Cheapest Fee Is Not Always the Best Choice
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Price Alone Can Mislead
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A low fee may exclude important services.</li>
                <li>Rushed visits may miss warning signs.</li>
                <li>Limited experience can affect decisions in complicated cases.</li>
                <li>Poor emergency access can be dangerous.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Matters More Than the Fee
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualifications and experience</li>
                <li>Honest, clear advice</li>
                <li>Availability in emergencies</li>
                <li>A safe, well-equipped setup</li>
                <li>Comfort and trust</li>
              </ul>
            </div>

            {/* Section 13 — Questions */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Booking Your Maternity Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Bring this list to your first call or visit:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What is your consultation fee for the first visit and for follow-ups?</li>
                <li>Is the follow-up fee different?</li>
                <li>What does the fee include?</li>
                <li>Are scans and tests charged separately?</li>
                <li>Do you offer an antenatal or delivery package?</li>
                <li>Are emergency or after-hours visits charged extra?</li>
                <li>Do you offer online consultations for follow-up?</li>
                <li>Is the fee the same for postnatal visits?</li>
                <li>Do you accept insurance or help with claim paperwork?</li>
                <li>Can I pay in installments for larger packages?</li>
              </ul>
            </div>

            {/* Section 14 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation: Dr. Priyanka Gynaec
              </h2>

              <p className="mb-6 text-black">
                Dr. Priyanka Pachauri: Best Gynaecologist in Moradabad
              </p>

              <p className="mb-6 text-black">
                Fertility • Maternity • 3D Laparoscopy
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
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

            {/* Section 15 — FAQs */}
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