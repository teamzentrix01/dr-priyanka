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

export default function BestAntenatalCareHospitalMoradabad() {
  const faqs = [
    {
      q: "What makes this the best antenatal care hospital in Moradabad?",
      a: "Advanced ultrasound, a fully equipped labor room, experienced high-risk pregnancy management and continuous doctor involvement together set it apart.",
    },
    {
      q: "Is 3D/4D ultrasound available at this hospital?",
      a: "Yes, the Voluson E22 machine provides detailed 3D and 4D ultrasound imaging on-site.",
    },
    {
      q: "Can this hospital handle emergency deliveries?",
      a: "Yes, the hospital has a fully equipped labor room and operation theatre for both normal and emergency C-section deliveries.",
    },
    {
      q: "Is high-risk pregnancy care available here?",
      a: "Yes, conditions like gestational diabetes, hypertension and multiple pregnancy are managed with close monitoring.",
    },
    {
      q: "How often should I visit for antenatal checkups?",
      a: "Monthly until 28 weeks, every two weeks until 36 weeks, and weekly after that until delivery.",
    },
    {
      q: "Is postnatal and newborn care available at the same hospital?",
      a: "Yes, postnatal care for the mother and newborn checkups are both available here.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can book directly by calling or messaging on WhatsApp (8979670705).",
    },
    {
      q: "Where is the hospital located?",
      a: "It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "Will the same doctor be present throughout my pregnancy and delivery?",
      a: "Yes, Dr. Priyanka personally oversees care from the first visit through delivery.",
    },
    {
      q: "What should I carry for my first hospital visit?",
      a: "Previous reports, pregnancy test results, your last menstrual period date, and a list of current medicines.",
    },
    {
      q: "Does the hospital accept patients from nearby towns and villages?",
      a: "Yes, patients travel from across Moradabad and nearby areas, with coordination support available.",
    },
    {
      q: "Can I get a second opinion here before choosing a delivery hospital?",
      a: "Yes, you can consult for a second opinion before finalizing your delivery hospital.",
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
                Best Antenatal Care Hospital Moradabad – Complete Pregnancy Care by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                When choosing the best antenatal care hospital in Moradabad, families look for more than just a building with a doctor's name on it — they look for equipment, safety, experience and genuine care. Dr. Priyanka Gynaec brings all of these together, offering complete antenatal, delivery and postnatal care under one roof in Moradabad.
              </p>

              <p className="text-gray-700">
                This article explains what actually makes a hospital &quot;the best&quot; for antenatal care, how Dr. Priyanka Gynaec meets that standard, and how to reach the hospital for an appointment.
              </p>
            </div>

            {/* Section 2 — What Makes a Hospital the "Best" */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes a Hospital the &quot;Best&quot; for Antenatal Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Advanced ultrasound and monitoring equipment for accurate tracking</li>
                <li>A fully equipped labor room ready for both normal and emergency delivery</li>
                <li>Doctors experienced in handling high-risk pregnancies, not just routine cases</li>
                <li>Clean, sterilized facilities with strict infection-control standards</li>
                <li>Consistent doctor continuity from the first visit through delivery</li>
                <li>24x7 emergency availability, not just fixed clinic hours</li>
                <li>Genuine patient trust reflected in referrals and repeat visits</li>
                <li>Support for postnatal and newborn care at the same facility</li>
              </ul>
            </div>

            {/* Section 3 — Why Dr. Priyanka Gynaec Is the Best Choice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Dr. Priyanka Gynaec Is the Best Antenatal Care Hospital Choice in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gold medal credentials and international fellowship-qualified gynaec doctor</li>
                <li>Advanced 3D/4D ultrasound for detailed and accurate fetal monitoring</li>
                <li>Fully equipped labor room prepared for normal delivery and emergency C-section</li>
                <li>Proven experience managing high-risk pregnancies safely</li>
                <li>Same doctor and team present through the entire pregnancy journey</li>
                <li>Female-friendly, comfortable and private hospital environment</li>
                <li>24x7 availability for emergencies and urgent deliveries</li>
                <li>Strong local reputation built on real patient outcomes, not just marketing</li>
              </ul>
            </div>

            {/* Section 4 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec – Leading Antenatal Care Hospital in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri leads this Moradabad-based hospital with a clear philosophy — &quot;Her Health First&quot;. Every part of the hospital, from consultation rooms to the labor room, is designed around patient comfort and safety, backed by modern medical technology.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialization in gynaecology and obstetrics</li>
                <li>Extensive experience across antenatal, delivery and postnatal care</li>
                <li>Skilled handling of complications such as gestational diabetes and hypertension</li>
                <li>Reputation for clear, honest communication with patients and families</li>
                <li>Paediatric consultation available within the same hospital</li>
              </ul>
            </div>

            {/* Section 5 — Antenatal Services Offered */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Antenatal Services Offered at This Best Antenatal Care Hospital Moradabad
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. First Trimester Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pregnancy confirmation and early dating scan</li>
                <li>Baseline blood tests and infection screening</li>
                <li>Early nutrition and lifestyle guidance</li>
                <li>Assessment of early risk factors</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Second Trimester Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Detailed anomaly scan for structural development</li>
                <li>Gestational diabetes screening</li>
                <li>Regular blood pressure and weight monitoring</li>
                <li>Vaccination schedule guidance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Third Trimester Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Frequent visits as delivery approaches</li>
                <li>Growth scan and doppler study</li>
                <li>Position check and delivery preparation</li>
                <li>Timely identification of late-pregnancy risks</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. High-Risk Pregnancy Management
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Careful monitoring of gestational diabetes and hypertension</li>
                <li>Specialized care for multiple pregnancy (twins)</li>
                <li>Safe handling of previous C-section or complicated pregnancy history</li>
                <li>Coordinated specialist referrals when required</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Delivery Services
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Encouragement of normal, vaginal delivery whenever medically safe</li>
                <li>Painless labor options discussed in advance</li>
                <li>Emergency C-section capability within the same hospital</li>
                <li>Continuous monitoring throughout labor</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Postnatal and Newborn Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Monitoring the mother's recovery after delivery</li>
                <li>Breastfeeding guidance and support</li>
                <li>Newborn's initial checkup and vaccination</li>
                <li>Timely management of postpartum concerns</li>
              </ul>
            </div>

            {/* Section 6 — Hospital Infrastructure and Technology */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Hospital Infrastructure and Technology
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Voluson E22 BT2024:</strong> Advanced 3D and 4D ultrasound machine</li>
                <li><strong>Fully equipped labor room:</strong> With continuous fetal monitoring</li>
                <li><strong>Doppler monitoring equipment:</strong> For fetal wellbeing assessment</li>
                <li><strong>Sterile operation theatre:</strong> For emergency and planned procedures</li>
                <li><strong>Well-organized lab coordination:</strong> For fast, accurate test results</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This combination of infrastructure is what separates a genuinely well-equipped antenatal hospital from a clinic offering only basic checkups.
              </p>
            </div>

            {/* Section 7 — Safety and Hygiene Standards */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Safety and Hygiene Standards
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sterilized labor room and operation theatre</li>
                <li>Strict infection-control protocols followed throughout the hospital</li>
                <li>Female-friendly and private patient rooms</li>
                <li>Trained nursing and support staff available around the clock</li>
                <li>Every procedure clearly explained to patients before it begins</li>
              </ul>
            </div>

            {/* Section 8 — How This Hospital Compares */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How This Hospital Compares to Other Options in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Many clinics offer only basic ultrasound, while a 3D/4D Voluson E22 machine is available here</li>
                <li>Not every clinic has a fully equipped labor room ready for emergency C-section — this hospital does</li>
                <li>The doctor personally oversees care from consultation through delivery, unlike facilities with rotating staff</li>
                <li>High-risk pregnancy management is a core strength here, not an occasional referral-out case</li>
                <li>Postnatal and paediatric care continue at the same hospital, avoiding fragmented care</li>
              </ul>
            </div>

            {/* Section 9 — Who Should Choose This Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Choose This Hospital for Antenatal Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Women planning pregnancy who want a trusted hospital from the very start</li>
                <li>Patients already pregnant and looking for a hospital equipped for delivery too</li>
                <li>Anyone managing gestational diabetes, hypertension or other high-risk conditions</li>
                <li>Women expecting twins or a multiple pregnancy</li>
                <li>Patients with a history of complications in a previous pregnancy</li>
                <li>Families who want antenatal, delivery and postnatal care all in one place</li>
                <li>Anyone seeking a second opinion before choosing a delivery hospital</li>
              </ul>
            </div>

            {/* Section 10 — What to Expect During Visits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Antenatal Visits at This Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Weight, blood pressure and general health check at every visit</li>
                <li>Discussion of new symptoms or concerns</li>
                <li>Abdominal examination and fetal heart rate check</li>
                <li>Review of previous test results and scans</li>
                <li>Guidance on diet, supplements and preparation for upcoming weeks</li>
                <li>Dedicated time for questions about labor and delivery</li>
              </ul>
            </div>

            {/* Section 11 — Recommended Visit Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recommended Antenatal Visit Schedule
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Weeks 4-28:</strong> One checkup every month</li>
                <li><strong>Weeks 28-36:</strong> One checkup every two weeks</li>
                <li><strong>Weeks 36 onwards:</strong> Weekly checkups until delivery</li>
                <li><strong>High-risk pregnancies:</strong> Additional visits as advised by the doctor</li>
              </ul>
            </div>

            {/* Section 12 — Why This Is Considered the Best */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why This Is Considered the Best Antenatal Care Hospital Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Expertise with Heart:</strong> International fellowship and gold medal credentials</li>
                <li><strong>Continuity of Care:</strong> The same doctor from the first visit through delivery and beyond</li>
                <li><strong>Proven Outcomes:</strong> A strong track record of safe deliveries and healthy pregnancies</li>
                <li><strong>Complete Infrastructure:</strong> Advanced ultrasound, labor room and postnatal support in one place</li>
                <li><strong>Earned Trust:</strong> Patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 13 — Questions Worth Asking */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing the Right Hospital – Questions Worth Asking
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Does the hospital have advanced ultrasound and monitoring equipment on-site?</li>
                <li>Is a fully equipped labor room available for both normal and emergency delivery?</li>
                <li>Will the same doctor be present throughout the pregnancy and at delivery?</li>
                <li>How are emergencies handled outside regular clinic hours?</li>
                <li>Is postnatal and newborn care available at the same facility?</li>
                <li>What do actual patients say about their experience here?</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Dr. Priyanka Gynaec answers each of these questions clearly, which is why it stands out among antenatal care hospitals in Moradabad.
              </p>
            </div>

            {/* Section 14 — Preparing for Your First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Your First Visit to This Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Carry any previous pregnancy test results or reports</li>
                <li>Note your last menstrual period date</li>
                <li>List current medicines, supplements and allergies</li>
                <li>Write down any questions or concerns beforehand</li>
                <li>Wear comfortable clothing for the examination</li>
                <li>Bring a family member along for support if you'd like</li>
              </ul>
            </div>

            {/* Section 15 — Serving Moradabad and Nearby Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Serving Moradabad and Nearby Areas
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients travel from across Moradabad city as well as nearby towns and villages</li>
                <li>The hospital's location near Old Roadways, Gandhi Nagar makes it centrally accessible</li>
                <li>Same-day consultation slots available for urgent pregnancy concerns</li>
                <li>Coordination support offered for patients travelling from a distance</li>
                <li>Reports and prescriptions can be shared digitally for easier follow-up</li>
              </ul>
            </div>

            {/* Section 16 — Beyond the Basics */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Beyond the Basics
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A truly good hospital tracks trends across visits, not just single checkup snapshots</li>
                <li>Every scan and test result is filed and reviewed against the patient's full history</li>
                <li>Staff are trained to notice subtle warning signs early, not just obvious complications</li>
                <li>Communication between the doctor and nursing team stays consistent for every patient</li>
                <li>Hospital protocols are reviewed regularly to match current medical best practices</li>
              </ul>
            </div>

            {/* Section 17 — Common Reasons Families Choose This Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Reasons Families Choose This as the Best Antenatal Care Hospital Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>They want one hospital for the entire journey — antenatal, delivery and postnatal</li>
                <li>They value having an experienced doctor personally involved, not rotating staff</li>
                <li>They prioritize safety features like a fully equipped labor room and OT</li>
                <li>They appreciate clear, honest communication over rushed appointments</li>
                <li>They trust recommendations from family and friends who delivered here before</li>
                <li>They want access to advanced technology without travelling outside Moradabad</li>
              </ul>
            </div>

            {/* Section 18 — Frequently Overlooked Factors */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Frequently Overlooked Factors When Choosing an Antenatal Care Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Whether the hospital handles both normal delivery and emergency C-section on-site</li>
                <li>How quickly the hospital can respond if labor starts earlier than expected</li>
                <li>Whether lab results and scans are reviewed by the same doctor treating you</li>
                <li>If the hospital supports postnatal recovery, not just the delivery itself</li>
                <li>Whether newborn care and vaccination are available without referring elsewhere</li>
              </ul>
            </div>

            {/* Section 19 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The &quot;best&quot; hospital isn't about size alone — it's about equipment, experience and continuity working together</li>
                <li>Dr. Priyanka Gynaec Moradabad combines advanced technology with a fully equipped labor room and consistent doctor care</li>
                <li>Choosing a hospital early in pregnancy allows time to build trust before delivery day arrives</li>
                <li>A hospital that handles both routine and high-risk cases well offers real peace of mind</li>
                <li>If you are evaluating antenatal care hospitals in Moradabad, an early visit here is worth considering</li>
              </ul>
            </div>

            {/* Section 20 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Address, Contact and WhatsApp
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
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh – 244001
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
                          href="mailto:drpriyanka@gynaecologistmoradabad.com"
                          className="hover:underline"
                        >
                          drpriyanka@gynaecologistmoradabad.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        https://www.gynaecologistmoradabad.com/
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

              <p className="text-gray-700 mt-6">
                Message directly on WhatsApp for appointment booking, directions or any query. For emergencies or urgent deliveries, calling is better than messaging.
              </p>
            </div>

            {/* Section 21 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQs)
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