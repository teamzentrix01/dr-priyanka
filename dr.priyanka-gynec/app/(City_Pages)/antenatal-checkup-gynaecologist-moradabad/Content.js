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

export default function AntenatalCheckupMoradabad() {
  const faqs = [
    {
      q: "What is included in an antenatal checkup at Dr. Priyanka Gynaec Moradabad?",
      a: "Weight and blood pressure check, abdominal examination, fetal heart rate check, review of scans and tests, and guidance for the coming weeks.",
    },
    {
      q: "When should the first antenatal checkup be done?",
      a: "As soon as pregnancy is confirmed, ideally within the first 8-10 weeks.",
    },
    {
      q: "How often should antenatal checkups happen?",
      a: "Monthly until 28 weeks, every two weeks until 36 weeks, and weekly after that until delivery.",
    },
    {
      q: "Is 4D ultrasound available for antenatal checkups?",
      a: "Yes, the Voluson E22 machine provides detailed 3D and 4D ultrasound imaging during checkups.",
    },
    {
      q: "Are high-risk pregnancy checkups handled differently?",
      a: "Yes, high-risk cases get additional visits, closer monitoring and extra tests as needed.",
    },
    {
      q: "What tests are usually done during antenatal checkups?",
      a: "Blood tests, blood sugar screening, thyroid test, urine tests, and scans like anomaly and growth scans.",
    },
    {
      q: "How can I book an antenatal checkup appointment?",
      a: "You can book directly by calling or messaging on WhatsApp (8979670705).",
    },
    {
      q: "Where is the clinic located?",
      a: "It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "What should I carry for my antenatal checkup?",
      a: "Previous reports, scans, prescriptions and a list of any new symptoms or questions.",
    },
    {
      q: "Can I get a same-day checkup if something feels wrong?",
      a: "Yes, same-day or urgent checkup slots are available for concerning symptoms.",
    },
    {
      q: "Is postnatal checkup also available after delivery?",
      a: "Yes, postnatal checkups for the mother and newborn are available at the same center.",
    },
    {
      q: "Can I switch to this clinic mid-pregnancy for checkups?",
      a: "Yes, with your previous reports and scans, checkups can continue smoothly from where you left off.",
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
                Antenatal Checkup Gynaecologist Moradabad – Accurate Pregnancy Checkups by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                If you are searching for a reliable antenatal checkup gynaecologist in Moradabad, Dr. Priyanka Gynaec offers complete, accurate and caring pregnancy checkups from the very first visit through delivery. Every checkup is designed to track the baby's growth closely and keep the mother's health monitored at every stage.
              </p>

              <p className="text-gray-700">
                This detailed guide explains why Dr. Priyanka Gynaec is the right choice for antenatal checkups in Moradabad, what happens during each checkup, which tests and scans are included, and how to book an appointment.
              </p>
            </div>

            {/* Section 2 — Why Choose Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Your Antenatal Checkup in Moradabad?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gold medal credentials and international fellowship-qualified gynaec doctor</li>
                <li>Structured checkup schedule designed for every trimester</li>
                <li>Accurate fetal monitoring using advanced 3D/4D ultrasound</li>
                <li>Careful, unhurried checkups with time for questions and concerns</li>
                <li>Proven experience in identifying high-risk signs early</li>
                <li>Same doctor conducts every checkup, so no repeated explanations needed</li>
                <li>Female-friendly, comfortable and private consultation environment</li>
                <li>24x7 availability for urgent checkup needs</li>
                <li>Patients refer their own family and friends — a strong track record of trust</li>
              </ul>
            </div>

            {/* Section 3 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec – Antenatal Checkup Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a well-known gynaecologist in Moradabad, known for her &quot;Her Health First&quot; philosophy. Every antenatal checkup is treated as an opportunity to build trust with the patient, answer her questions honestly, and catch any concern before it becomes a complication.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialization in gynaecology and obstetrics</li>
                <li>Deep experience conducting routine and high-risk antenatal checkups</li>
                <li>Skilled at interpreting ultrasound and lab results accurately</li>
                <li>Calm, reassuring communication style, especially for first-time mothers</li>
                <li>Paediatric consultation also available at the same center for post-delivery checkups</li>
              </ul>
            </div>

            {/* Section 4 — What Happens During a Checkup */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During an Antenatal Checkup at Dr. Priyanka Gynaec Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Weight, blood pressure and general health check at every visit</li>
                <li>Discussion of any new symptoms or concerns since the last visit</li>
                <li>Abdominal examination to assess the baby's growth and position</li>
                <li>Fetal heart rate check using doppler</li>
                <li>Review of previous test results and scans</li>
                <li>Guidance on diet, supplements and lifestyle for the coming weeks</li>
                <li>Answering questions about labor, delivery and upcoming milestones</li>
              </ul>
            </div>

            {/* Section 5 — Trimester-Wise Checkup Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Trimester-Wise Checkup Details
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                First Trimester Checkups (Weeks 1-12)
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirmation of pregnancy and dating scan</li>
                <li>Baseline blood tests, blood group and infection screening</li>
                <li>Initial risk assessment for miscarriage or complications</li>
                <li>Early guidance on diet, folic acid and lifestyle changes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Second Trimester Checkups (Weeks 13-27)
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Detailed anomaly scan to check the baby's structural development</li>
                <li>Gestational diabetes screening (OGTT)</li>
                <li>Double marker or triple marker test for genetic screening</li>
                <li>Monitoring of weight gain and blood pressure trends</li>
                <li>Vaccination schedule guidance (such as TT injections)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Third Trimester Checkups (Weeks 28-40)
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>More frequent visits as delivery approaches</li>
                <li>Growth scan and doppler study to check baby's wellbeing</li>
                <li>Position check (head-down or breech) closer to delivery</li>
                <li>Discussion of birth plan and pain management preferences</li>
                <li>Monitoring for signs of pre-eclampsia or other late complications</li>
              </ul>
            </div>

            {/* Section 6 — Recommended Visit Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recommended Antenatal Checkup Schedule
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Weeks 4-28:</strong> One checkup every month</li>
                <li><strong>Weeks 28-36:</strong> One checkup every two weeks</li>
                <li><strong>Weeks 36 onwards:</strong> Weekly checkups until delivery</li>
                <li><strong>High-risk pregnancies:</strong> Additional visits as advised by the doctor</li>
                <li><strong>Missed or delayed checkups:</strong> Always rescheduled promptly rather than skipped</li>
              </ul>
            </div>

            {/* Section 7 — Tests and Scans Included */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tests and Scans Included in Antenatal Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Complete blood count (CBC) and blood grouping</li>
                <li>Blood sugar and gestational diabetes screening</li>
                <li>Thyroid function test</li>
                <li>Urine routine and infection screening</li>
                <li>TORCH panel when clinically indicated</li>
                <li>Double marker and triple marker tests</li>
                <li>Dating scan, anomaly scan and growth scan</li>
                <li>Doppler study in the third trimester</li>
              </ul>
            </div>

            {/* Section 8 — Technology Used */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology Used for Antenatal Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Voluson E22 BT2024:</strong> Advanced 3D and 4D ultrasound machine</li>
                <li><strong>Doppler monitoring equipment:</strong> For fetal wellbeing assessment</li>
                <li><strong>Digital fetal heart rate monitors:</strong> For accurate monitoring</li>
                <li><strong>Accurate lab coordination:</strong> For timely test results</li>
                <li><strong>Well-organized record-keeping:</strong> So every checkup builds on the last</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This level of equipment and organization is uncommon among Moradabad clinics, which is why patients trust their checkups here even in complex pregnancies.
              </p>
            </div>

            {/* Section 9 — Who Should Book a Checkup */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Book an Antenatal Checkup
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Anyone who has just found out they are pregnant</li>
                <li>Women already pregnant but without a regular checkup schedule</li>
                <li>Patients experiencing new or unusual pregnancy symptoms</li>
                <li>Women with gestational diabetes, hypertension or other high-risk conditions</li>
                <li>Anyone carrying a multiple pregnancy (twins)</li>
                <li>Patients seeking a second opinion on ongoing antenatal care</li>
                <li>Women approaching their due date who need frequent monitoring</li>
              </ul>
            </div>

            {/* Section 10 — Why Regular Checkups Matter */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Regular Antenatal Checkups Matter
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Early detection of complications like gestational diabetes and hypertension</li>
                <li>Continuous tracking of the baby's growth and development</li>
                <li>Timely correction of nutritional deficiencies</li>
                <li>Reduced risk of complications during labor and delivery</li>
                <li>Peace of mind for the mother through regular reassurance</li>
                <li>A documented health record that helps the doctor make better decisions</li>
              </ul>
            </div>

            {/* Section 11 — What Sets This Clinic Apart */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Antenatal Checkup Gynaecologist Moradabad vs Other Clinics
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Most clinics rely on basic ultrasound, while a 3D/4D Voluson E22 machine is used here</li>
                <li>Checkups are unhurried, with real time given to questions and concerns</li>
                <li>The same doctor reviews every scan and test personally</li>
                <li>Checkup records are well organized, so nothing is missed between visits</li>
                <li>Emergency checkup slots are available when something feels wrong between scheduled visits</li>
              </ul>
            </div>

            {/* Section 12 — Safety and Comfort */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Safety and Comfort During Antenatal Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sterilized examination rooms and modern equipment</li>
                <li>Proper infection-control protocols followed at every visit</li>
                <li>Female-friendly and private consultation environment</li>
                <li>Trained staff available to support patients through every checkup</li>
                <li>Clear explanations given for every test and scan result</li>
              </ul>
            </div>

            {/* Section 13 — Why Trust Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Trust Dr. Priyanka Gynaec for Antenatal Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Expertise with Heart:</strong> International fellowship and gold medal credentials</li>
                <li><strong>Continuity of Care:</strong> The same doctor reviews every checkup from start to delivery</li>
                <li><strong>Proven Outcomes:</strong> A strong track record of healthy pregnancies caught early for any risk</li>
                <li><strong>Earned Trust:</strong> Patients refer their own family members</li>
              </ul>
            </div>

            {/* Section 14 — Preparing for Your Checkup */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Your Antenatal Checkup – Practical Tips
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Carry all previous reports, scans and prescriptions to every visit</li>
                <li>Note down any new symptoms or questions before the appointment</li>
                <li>Wear comfortable clothing for the physical examination</li>
                <li>Stay hydrated and avoid fasting unless a specific test requires it</li>
                <li>Bring your partner or a family member for support if possible</li>
                <li>Keep a simple pregnancy diary to track symptoms between visits</li>
              </ul>
            </div>

            {/* Section 15 — Common Concerns Discussed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Concerns Discussed During Antenatal Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Normal versus concerning pregnancy symptoms</li>
                <li>Safe exercise and activity levels during pregnancy</li>
                <li>Diet plans suited to each trimester</li>
                <li>Weight gain expectations and monitoring</li>
                <li>Managing nausea, fatigue and other common discomforts</li>
                <li>Preparing mentally and physically for labor and delivery</li>
              </ul>
            </div>

            {/* Section 16 — Diet and Lifestyle Guidance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Lifestyle Guidance Given at Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Iron-rich foods to prevent anemia during pregnancy</li>
                <li>Adequate protein and calcium intake for the baby's development</li>
                <li>Hydration reminders, especially in warmer months</li>
                <li>Safe sleeping positions recommended as pregnancy progresses</li>
                <li>Guidance on which activities to reduce and which to continue</li>
                <li>Advice on managing common discomforts like heartburn and back pain</li>
              </ul>
            </div>

            {/* Section 17 — Emotional Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional Support During Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Space given to discuss anxiety or fear around pregnancy and delivery</li>
                <li>Reassurance provided based on actual scan and test findings, not guesswork</li>
                <li>Encouragement to ask questions without hesitation, even if they feel small</li>
                <li>Involvement of family members in checkups when the patient prefers it</li>
                <li>A calm, judgment-free environment throughout the pregnancy journey</li>
              </ul>
            </div>

            {/* Section 18 — Serving Moradabad and Nearby Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Serving Moradabad and Nearby Areas
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients travel from Moradabad city as well as nearby towns and villages for checkups here</li>
                <li>The location near Old Roadways makes it easy to reach</li>
                <li>Same-day checkup slots are available for urgent concerns</li>
                <li>Coordination support offered for patients travelling from a distance</li>
                <li>Reports can be shared digitally, making it easier to track progress between visits</li>
              </ul>
            </div>

            {/* Section 19 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts on Antenatal Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Choosing the right antenatal checkup gynaecologist means looking at consistency, technology and communication together</li>
                <li>Dr. Priyanka Gynaec Moradabad combines all three, with unhurried checkups and advanced ultrasound support</li>
                <li>Regular, well-documented checkups significantly reduce the risk of missed complications</li>
                <li>Starting checkups early and staying consistent gives both mother and baby the best possible start</li>
                <li>If you are pregnant, booking your next antenatal checkup on time is always the safer choice</li>
                <li>A well-managed checkup schedule is one of the simplest ways to protect both mother and baby throughout the pregnancy</li>
              </ul>
            </div>

            {/* Section 20 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Information &amp; Clinic Address
              </h2>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Address, Contact and WhatsApp
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
                Message directly on WhatsApp for appointment booking, checkup scheduling or any query. For emergencies or urgent concerns, calling is better than messaging.
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