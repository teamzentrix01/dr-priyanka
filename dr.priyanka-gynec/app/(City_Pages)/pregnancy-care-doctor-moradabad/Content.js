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

export default function PregnancyCareDoctorMoradabad() {
  const faqs = [
    {
      q: "What does complete pregnancy care include at Dr. Priyanka Gynaec Moradabad?",
      a: "Everything from pre-pregnancy guidance and antenatal checkups to delivery support and postnatal follow-up, all under one doctor's care.",
    },
    {
      q: "When should I first consult a pregnancy care doctor?",
      a: "Ideally before conceiving, or as soon as pregnancy is confirmed, within the first 8-10 weeks.",
    },
    {
      q: "Is high-risk pregnancy care available here?",
      a: "Yes, gestational diabetes, hypertension and multiple pregnancies are managed with careful, coordinated monitoring.",
    },
    {
      q: "Will the same doctor be present at my delivery?",
      a: "Yes, Dr. Priyanka personally manages care from the first visit through delivery.",
    },
    {
      q: "Is 3D/4D ultrasound available for pregnancy monitoring?",
      a: "Yes, the Voluson E22 machine provides detailed 3D and 4D ultrasound imaging throughout pregnancy.",
    },
    {
      q: "How often should I visit for pregnancy checkups?",
      a: "Monthly until 28 weeks, every two weeks until 36 weeks, and weekly after that until delivery.",
    },
    {
      q: "How can I book a pregnancy care consultation?",
      a: "You can book directly by calling or messaging on WhatsApp (8979670705).",
    },
    {
      q: "Where is the clinic located?",
      a: "It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "Is postnatal and newborn care also available here?",
      a: "Yes, postnatal care for the mother and newborn checkups are both available at the same center.",
    },
    {
      q: "Can I switch to this doctor mid-pregnancy?",
      a: "Yes, with your previous reports and scans, care can continue smoothly from where you left off.",
    },
    {
      q: "What should I carry for my first pregnancy care visit?",
      a: "Previous reports, your last menstrual period date, and a list of current medicines or supplements.",
    },
    {
      q: "Can I get a second opinion on my current pregnancy care plan?",
      a: "Yes, second opinions are welcomed for any aspect of ongoing pregnancy care.",
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
                Pregnancy Care Doctor Moradabad – Your Partner Through Every Stage by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Choosing a pregnancy care doctor is one of the most important decisions a woman makes during this stage of life, because this is the person who will guide her through nine months of physical, emotional and medical change, and who will ultimately be present at one of the most significant moments of her life — delivery. It's not just about finding someone with the right qualifications on paper, though that matters. It's about finding a doctor who listens carefully, explains things clearly, notices problems early, and makes both the mother and her family feel genuinely supported at every step. In Moradabad, Dr. Priyanka Gynaec has built a reputation around exactly this kind of complete, attentive pregnancy care, combining strong medical expertise with a personal, patient-first approach that many women say made all the difference in how they experienced their pregnancy.
              </p>

              <p className="text-gray-700">
                Pregnancy care isn't a single service — it's a continuous relationship that spans confirmation of pregnancy, regular checkups, monitoring, delivery planning, the birth itself, and recovery afterward. A good pregnancy care doctor treats all of these as connected parts of one journey rather than isolated appointments, which is exactly the approach Dr. Priyanka Gynaec brings to every patient in Moradabad.
              </p>

              <p className="text-gray-700">
                This article explains what complete pregnancy care actually looks like, what services are available, and how to reach out for a consultation.
              </p>
            </div>

            {/* Section 2 — Why Choose Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec as Your Pregnancy Care Doctor in Moradabad?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gold medal credentials and international fellowship-qualified gynaec doctor</li>
                <li>Complete pregnancy care spanning confirmation, antenatal visits, delivery and postnatal recovery</li>
                <li>Advanced 3D/4D ultrasound for accurate monitoring at every stage</li>
                <li>Proven experience managing both routine and high-risk pregnancies</li>
                <li>Same doctor and team present through the entire journey</li>
                <li>Female-friendly, comfortable and private consultation environment</li>
                <li>24x7 availability for emergencies and urgent delivery needs</li>
                <li>Strong local reputation — patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 3 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec – A Complete Pregnancy Care Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a well-known gynaecologist in Moradabad, guided by her &quot;Her Health First&quot; philosophy. Every patient is treated as an individual with her own concerns, medical history and preferences, rather than being moved through a generic checklist of appointments.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialization in gynaecology and obstetrics</li>
                <li>Experience across every stage of pregnancy, from early confirmation to delivery</li>
                <li>Skilled management of complications like gestational diabetes and hypertension</li>
                <li>Known for clear, honest communication with patients and families</li>
                <li>Paediatric consultation available at the same center for the newborn</li>
              </ul>
            </div>

            {/* Section 4 — What Complete Pregnancy Care Involves */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Complete Pregnancy Care Actually Involves
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirming pregnancy and establishing an accurate due date</li>
                <li>Regular checkups tracking the mother's health and the baby's development</li>
                <li>Advanced monitoring through ultrasound, doppler and fetal heart rate checks</li>
                <li>Managing any complications that arise, from mild to high-risk</li>
                <li>Guidance and support through labor and delivery</li>
                <li>Postnatal follow-up for both mother and newborn</li>
              </ul>
            </div>

            {/* Section 5 — Services Offered Across the Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Services Offered Across the Journey
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Pre-Pregnancy Consultation
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Guidance for women planning pregnancy before conception</li>
                <li>Assessment of existing health conditions that may affect pregnancy</li>
                <li>Advice on lifestyle, nutrition and supplements before conceiving</li>
                <li>Discussion of family history and any genetic considerations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. First Trimester Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pregnancy confirmation and early dating scan</li>
                <li>Baseline blood tests and infection screening</li>
                <li>Early nutrition and lifestyle guidance</li>
                <li>Assessment of early risk factors</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Second Trimester Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Detailed anomaly scan for structural development</li>
                <li>Gestational diabetes screening</li>
                <li>Regular blood pressure and weight monitoring</li>
                <li>Vaccination schedule guidance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Third Trimester Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Frequent visits as delivery approaches</li>
                <li>Growth scan and doppler study</li>
                <li>Delivery planning and birth preparation</li>
                <li>Timely identification of late-pregnancy risks</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. High-Risk Pregnancy Management
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Careful monitoring of gestational diabetes and hypertension</li>
                <li>Specialized care for multiple pregnancy (twins)</li>
                <li>Safe management of previous C-section or complicated pregnancy history</li>
                <li>Coordinated specialist referrals when required</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Delivery Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Support for normal, vaginal delivery whenever medically safe</li>
                <li>Painless labor options discussed in advance</li>
                <li>Emergency C-section capability when needed</li>
                <li>Continuous monitoring throughout labor</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Postnatal Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Monitoring the mother's recovery after delivery</li>
                <li>Breastfeeding guidance and support</li>
                <li>Newborn's initial checkup and vaccination</li>
                <li>Ongoing follow-up for both mother and baby</li>
              </ul>
            </div>

            {/* Section 6 — Technology and Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology and Facilities Supporting Complete Pregnancy Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Voluson E22 BT2024:</strong> Advanced 3D and 4D ultrasound machine</li>
                <li><strong>Doppler monitoring equipment:</strong> For fetal wellbeing</li>
                <li><strong>Digital fetal heart rate monitoring:</strong> For accurate tracking</li>
                <li><strong>Fully equipped labor room:</strong> For normal and emergency delivery</li>
                <li><strong>Organized record-keeping:</strong> Connecting every stage of the pregnancy journey</li>
              </ul>
            </div>

            {/* Section 7 — What Makes a Doctor the Right Choice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes a Pregnancy Care Doctor the Right Choice
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Consistency:</strong> The same doctor present from the first visit through delivery</li>
                <li><strong>Communication:</strong> Clear explanations rather than rushed, generic advice</li>
                <li><strong>Technology:</strong> Modern ultrasound and monitoring equipment available on-site</li>
                <li><strong>Experience:</strong> A proven track record with both routine and high-risk pregnancies</li>
                <li><strong>Availability:</strong> Genuine accessibility for questions and emergencies, not just scheduled visits</li>
                <li><strong>Trust:</strong> Real patient referrals and word-of-mouth reputation, not just marketing claims</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Dr. Priyanka Gynaec meets each of these standards for patients across Moradabad.
              </p>
            </div>

            {/* Section 8 — Who Should Book a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Book a Pregnancy Care Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Women planning pregnancy who want guidance before conceiving</li>
                <li>Women who have just confirmed pregnancy and need a first consultation</li>
                <li>Patients already pregnant looking for a doctor to manage the rest of their pregnancy</li>
                <li>Anyone managing gestational diabetes, hypertension or other high-risk conditions</li>
                <li>Women expecting twins or a multiple pregnancy</li>
                <li>Patients with a history of complications in a previous pregnancy</li>
                <li>Anyone seeking a second opinion on their current pregnancy care plan</li>
              </ul>
            </div>

            {/* Section 9 — Recommended Visit Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recommended Pregnancy Care Visit Schedule
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Weeks 4-28:</strong> One checkup every month</li>
                <li><strong>Weeks 28-36:</strong> One checkup every two weeks</li>
                <li><strong>Weeks 36 onwards:</strong> Weekly checkups until delivery</li>
                <li><strong>High-Risk Pregnancies:</strong> Additional visits and monitoring as advised</li>
              </ul>
            </div>

            {/* Section 10 — What Sets This Practice Apart */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Sets This Practice Apart
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Care spans the entire journey — pre-pregnancy through postnatal — rather than fragmented visits</li>
                <li>The same doctor personally manages every stage, adding valuable continuity</li>
                <li>Advanced ultrasound and monitoring technology available on-site</li>
                <li>High-risk pregnancy management is a core strength, not an occasional referral case</li>
                <li>Postnatal and newborn care continue at the same center after delivery</li>
              </ul>
            </div>

            {/* Section 11 — Safety and Comfort Standards */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Safety and Comfort Standards Throughout Pregnancy Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sterilized examination rooms and modern equipment</li>
                <li>Proper infection-control protocols followed at every stage</li>
                <li>Female-friendly and private consultation environment</li>
                <li>Trained staff available around the clock for emergencies</li>
                <li>Clear explanations given for every test, scan and recommendation</li>
              </ul>
            </div>

            {/* Section 12 — Why Trust Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Trust Dr. Priyanka Gynaec as Your Pregnancy Care Doctor
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Expertise with Heart:</strong> International fellowship and gold medal credentials</li>
                <li><strong>Continuity of Care:</strong> The same doctor from the first visit through delivery and beyond</li>
                <li><strong>Proven Outcomes:</strong> A strong track record of safe, well-managed pregnancies</li>
                <li><strong>Earned Trust:</strong> Patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 13 — Preparing for Your First Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Your First Pregnancy Care Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bring any previous medical records or test results you already have</li>
                <li>Note your last menstrual period date</li>
                <li>List current medicines, supplements and any allergies</li>
                <li>Write down questions or concerns beforehand</li>
                <li>Wear comfortable clothing for the examination</li>
                <li>Bring a family member along if you'd like support</li>
              </ul>
            </div>

            {/* Section 14 — Common Questions Discussed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Questions Discussed at Pregnancy Care Consultations
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What can I expect at each stage of my pregnancy?</li>
                <li>How should my diet and lifestyle change as pregnancy progresses?</li>
                <li>What tests and scans will I need, and when?</li>
                <li>How will complications, if any arise, be managed?</li>
                <li>What are my options for delivery, and how is a birth plan created?</li>
              </ul>
            </div>

            {/* Section 15 — Serving Moradabad and Nearby Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Serving Moradabad and Nearby Areas
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients travel from Moradabad city as well as nearby towns and villages for pregnancy care</li>
                <li>The clinic's location near Old Roadways, Gandhi Nagar makes it centrally accessible</li>
                <li>Same-day consultation slots available for urgent pregnancy concerns</li>
                <li>Coordination support offered for patients travelling from a distance</li>
                <li>Reports and prescriptions can be shared digitally for easier follow-up</li>
              </ul>
            </div>

            {/* Section 16 — How to Evaluate a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Evaluate a Pregnancy Care Doctor Before Choosing One
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask how many years of experience the doctor has in managing pregnancies</li>
                <li>Check what technology and equipment are available on-site</li>
                <li>Find out whether the same doctor handles delivery or if it's passed to someone else</li>
                <li>Ask how emergencies are handled outside regular clinic hours</li>
                <li>Look for genuine patient reviews and referrals rather than just online ratings</li>
                <li>Consider how comfortable you feel asking questions during the first consultation</li>
              </ul>
            </div>

            {/* Section 17 — Building Trust */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Building Trust With Your Pregnancy Care Doctor
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Share your full medical history honestly, even details that feel minor</li>
                <li>Ask questions whenever something is unclear, rather than assuming it's fine</li>
                <li>Bring a partner or family member to appointments if that helps you feel supported</li>
                <li>Keep track of symptoms or concerns between visits so nothing gets forgotten</li>
                <li>Follow the recommended checkup schedule even during weeks when you feel completely well</li>
              </ul>
            </div>

            {/* Section 18 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing a Pregnancy Care Doctor in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pregnancy care works best as one continuous relationship, not a series of disconnected visits</li>
                <li>Dr. Priyanka Gynaec Moradabad offers that continuity, from pre-pregnancy guidance through postnatal recovery</li>
                <li>Advanced monitoring technology combined with genuine, unhurried communication makes a real difference</li>
                <li>Choosing the right doctor early in your pregnancy sets the tone for the months ahead</li>
                <li>If you are pregnant or planning pregnancy, an early consultation is always a good first step</li>
              </ul>
            </div>

            {/* Section 19 — Contact Information */}
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
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
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
                Message directly on WhatsApp for appointment booking, directions or any query. For emergencies or urgent concerns, calling is better than messaging.
              </p>
            </div>

            {/* Section 20 — FAQs */}
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