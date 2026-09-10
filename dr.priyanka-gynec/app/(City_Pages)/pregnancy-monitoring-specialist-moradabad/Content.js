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

export default function PregnancyMonitoringSpecialistMoradabad() {
  const faqs = [
    {
      q: "What does pregnancy monitoring include at Dr. Priyanka Gynaec Moradabad?",
      a: "Growth scans, doppler studies, fetal heart rate monitoring and structured tracking of the baby's development throughout pregnancy.",
    },
    {
      q: "Is 3D/4D ultrasound available for monitoring?",
      a: "Yes, the Voluson E22 machine provides detailed 3D and 4D ultrasound imaging at every stage.",
    },
    {
      q: "How often should pregnancy monitoring scans be done?",
      a: "Key scans are done around 6-12 weeks, 18-22 weeks and 28-32 weeks, with more frequent monitoring after 34 weeks.",
    },
    {
      q: "Is monitoring different for high-risk pregnancies?",
      a: "Yes, high-risk pregnancies receive closer, more frequent scans and doppler studies as needed.",
    },
    {
      q: "What does a doppler study check for?",
      a: "It assesses blood flow to the baby, helping identify issues like growth restriction early.",
    },
    {
      q: "Can monitoring detect if the baby isn't growing as expected?",
      a: "Yes, growth scans compared across visits can identify growth restriction or other concerns early.",
    },
    {
      q: "How can I book a pregnancy monitoring appointment?",
      a: "You can book directly by calling or messaging on WhatsApp (8979670705).",
    },
    {
      q: "Where is the clinic located?",
      a: "It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "Will the same doctor review every one of my scans?",
      a: "Yes, Dr. Priyanka personally reviews scans throughout the pregnancy for consistent context.",
    },
    {
      q: "What should I bring to my monitoring appointment?",
      a: "Previous scan reports, a list of current symptoms, and any questions about your baby's development.",
    },
    {
      q: "Is fetal heart rate monitoring available in later pregnancy?",
      a: "Yes, fetal heart rate monitoring is part of routine checks in the later weeks of pregnancy.",
    },
    {
      q: "Can I switch to this clinic for monitoring mid-pregnancy?",
      a: "Yes, with your previous scan reports, monitoring can continue smoothly from where you left off.",
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
                Pregnancy Monitoring Specialist Moradabad – Advanced Fetal Monitoring by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Pregnancy monitoring is the ongoing process of tracking the baby's growth, position, heartbeat and overall wellbeing, along with the mother's health, throughout every stage of pregnancy. It is what turns a general pregnancy checkup into a precise, evidence-based picture of how the baby is actually developing week by week. If you are searching for a reliable pregnancy monitoring specialist in Moradabad, Dr. Priyanka Gynaec offers exactly this — advanced ultrasound imaging, doppler studies, fetal heart rate tracking and structured scan schedules, all designed to catch potential concerns early and give both mother and baby the best possible outcome.
              </p>

              <p className="text-gray-700">
                Good monitoring isn't just about having a machine in the room — it's about knowing what to look for, interpreting results accurately, and connecting each scan to the bigger picture of the pregnancy. A missed or poorly interpreted scan can mean a complication goes unnoticed until it becomes harder to manage, while consistent, well-documented monitoring builds a clear timeline that helps the doctor make confident, timely decisions. This is especially important in high-risk pregnancies, where subtle changes in growth patterns or blood flow can be the earliest warning sign of a problem worth addressing right away.
              </p>

              <p className="text-gray-700">
                This article explains what pregnancy monitoring actually involves, which tools and scans are used at each stage, and how to book a monitoring visit in Moradabad.
              </p>
            </div>

            {/* Section 2 — Why Choose Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec as Your Pregnancy Monitoring Specialist in Moradabad?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gold medal credentials and international fellowship-qualified gynaec doctor</li>
                <li>Advanced 3D/4D ultrasound machine for detailed, accurate fetal imaging</li>
                <li>Structured monitoring schedule aligned with each trimester's needs</li>
                <li>Doppler studies and fetal heart rate monitoring for high-risk cases</li>
                <li>Same doctor reviews every scan personally, adding context from previous visits</li>
                <li>Female-friendly, comfortable and private consultation environment</li>
                <li>24x7 availability for urgent monitoring concerns</li>
                <li>Strong local reputation — patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 3 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec – Pregnancy Monitoring Specialist
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a well-known gynaecologist in Moradabad, guided by her &quot;Her Health First&quot; philosophy. Every scan is treated as more than a routine image — it's an opportunity to catch subtle changes early, explain findings clearly, and reassure or guide the mother based on real data rather than guesswork.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialization in gynaecology and obstetrics</li>
                <li>Deep experience interpreting ultrasound, doppler and growth monitoring results</li>
                <li>Skilled at identifying early signs of complications through careful monitoring</li>
                <li>Known for explaining scan findings in plain, understandable language</li>
                <li>Coordinated monitoring plans for high-risk pregnancies</li>
              </ul>
            </div>

            {/* Section 4 — What Pregnancy Monitoring Involves */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Pregnancy Monitoring Actually Involves
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tracking the baby's growth against expected milestones for each week</li>
                <li>Checking the baby's heartbeat, movement and general activity</li>
                <li>Assessing blood flow through doppler studies when needed</li>
                <li>Monitoring amniotic fluid levels and placenta position</li>
                <li>Watching for early signs of conditions like growth restriction or pre-eclampsia</li>
                <li>Documenting trends across visits, not just single snapshots</li>
              </ul>
            </div>

            {/* Section 5 — Monitoring by Trimester */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Monitoring by Trimester
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. First Trimester Monitoring
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dating scan to confirm gestational age and due date</li>
                <li>Early detection of the fetal heartbeat</li>
                <li>Screening for ectopic pregnancy or early complications</li>
                <li>Baseline measurements for future comparison</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Second Trimester Monitoring
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Detailed anomaly scan (18-22 weeks) checking structural development</li>
                <li>Assessment of the baby's organs, limbs and overall anatomy</li>
                <li>Placenta position and amniotic fluid check</li>
                <li>Double marker or triple marker test correlation for genetic screening</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Third Trimester Monitoring
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Growth scans to track the baby's weight and development trends</li>
                <li>Doppler studies to assess blood flow to the baby</li>
                <li>Position check (head-down or breech) as delivery approaches</li>
                <li>Non-stress tests or fetal heart rate monitoring in later weeks</li>
              </ul>
            </div>

            {/* Section 6 — Advanced Tools Used */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Advanced Tools Used for Pregnancy Monitoring
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Voluson E22 BT2024:</strong> Advanced 3D and 4D ultrasound machine</li>
                <li><strong>Doppler monitoring equipment:</strong> For detailed blood flow assessment</li>
                <li><strong>Digital fetal heart rate monitors:</strong> For accurate tracking</li>
                <li><strong>Growth chart comparison tools:</strong> To spot deviations from expected trends</li>
                <li><strong>Organized digital record-keeping:</strong> Connecting every scan across the pregnancy</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This level of equipment allows for far more detailed monitoring than a basic ultrasound alone, which is especially valuable in high-risk or closely watched pregnancies.
              </p>
            </div>

            {/* Section 7 — High-Risk Pregnancy Monitoring */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Monitoring
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Closer, more frequent scans for gestational diabetes or hypertension cases</li>
                <li>Specialized monitoring for multiple pregnancy (twins/triplets)</li>
                <li>Growth restriction screening through repeated growth scans</li>
                <li>Doppler studies to check placental blood flow in high-risk cases</li>
                <li>Coordinated monitoring plans involving specialist referrals when needed</li>
              </ul>
            </div>

            {/* Section 8 — Why Consistent Monitoring Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Consistent Monitoring Matters
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A single scan gives a snapshot, but trends across multiple scans reveal the real picture</li>
                <li>Early detection of growth restriction allows for timely intervention</li>
                <li>Blood flow issues identified through doppler can be managed before they become urgent</li>
                <li>Regular fetal heart rate checks provide reassurance and catch irregularities early</li>
                <li>Consistent documentation helps the doctor make faster, more confident decisions during labor</li>
              </ul>
            </div>

            {/* Section 9 — What to Expect During a Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a Monitoring Scan
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A brief discussion of how the pregnancy has been going since the last visit</li>
                <li>The ultrasound itself, with measurements taken and compared to expected ranges</li>
                <li>A clear explanation of findings, including what's normal and what's being watched</li>
                <li>Discussion of any next steps, whether reassurance or closer follow-up</li>
                <li>Time for questions about the scan results or upcoming monitoring plans</li>
              </ul>
            </div>

            {/* Section 10 — Recommended Monitoring Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recommended Monitoring Schedule
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Weeks 6-12:</strong> Dating scan to confirm the pregnancy and due date</li>
                <li><strong>Weeks 18-22:</strong> Detailed anomaly scan for structural development</li>
                <li><strong>Weeks 28-32:</strong> Growth scan to check the baby's development trend</li>
                <li><strong>Weeks 34 onwards:</strong> More frequent monitoring, including doppler studies if needed</li>
                <li><strong>High-Risk Cases:</strong> Additional scans and monitoring as advised by the doctor</li>
              </ul>
            </div>

            {/* Section 11 — vs Basic Ultrasound Clinics */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Monitoring Specialist Moradabad vs Basic Ultrasound Clinics
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Basic clinics often only offer standard 2D ultrasound with limited detail</li>
                <li>A 3D/4D Voluson E22 machine here provides significantly clearer imaging</li>
                <li>Scans are personally reviewed by the same doctor managing the pregnancy, not a rotating technician</li>
                <li>Doppler and growth-trend monitoring are available for closer tracking, not just single images</li>
                <li>Findings are explained in context of the full pregnancy history, not in isolation</li>
              </ul>
            </div>

            {/* Section 12 — Safety and Comfort */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Safety and Comfort During Pregnancy Monitoring Visits
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sterilized examination rooms and modern ultrasound equipment</li>
                <li>Proper infection-control protocols followed at every visit</li>
                <li>Female-friendly and private consultation environment</li>
                <li>Trained staff available to support patients through each scan</li>
                <li>Clear, patient explanations given for every finding</li>
              </ul>
            </div>

            {/* Section 13 — Why Trust Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Trust Dr. Priyanka Gynaec for Pregnancy Monitoring
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Expertise with Heart:</strong> International fellowship and gold medal credentials</li>
                <li><strong>Continuity of Care:</strong> The same doctor reviews every scan from start to delivery</li>
                <li><strong>Advanced Technology:</strong> 3D/4D ultrasound and doppler monitoring on-site</li>
                <li><strong>Earned Trust:</strong> Patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 14 — Preparing for Your Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Your Pregnancy Monitoring Appointment
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bring previous scan reports if this is a follow-up visit</li>
                <li>Note down any new symptoms or concerns since your last scan</li>
                <li>Wear comfortable clothing suitable for an ultrasound examination</li>
                <li>Stay hydrated, as some scans may require a full bladder depending on the stage</li>
                <li>Write down any questions about your baby's growth or development</li>
              </ul>
            </div>

            {/* Section 15 — Common Questions Addressed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Questions Addressed During Monitoring Visits
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Is my baby's growth on track for this stage of pregnancy?</li>
                <li>What does this specific measurement or finding actually mean?</li>
                <li>Is the placenta position or amniotic fluid level within a normal range?</li>
                <li>When will my next scan be scheduled, and what will it check?</li>
                <li>Should I be concerned about anything based on today's results?</li>
              </ul>
            </div>

            {/* Section 16 — Serving Moradabad and Nearby Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Serving Moradabad and Nearby Areas
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients travel from Moradabad city as well as nearby towns and villages for advanced pregnancy monitoring</li>
                <li>The location near Old Roadways makes it centrally accessible</li>
                <li>Same-day scan slots are available for urgent monitoring concerns</li>
                <li>Coordination support offered for patients travelling from a distance</li>
                <li>Scan reports can be shared digitally, making follow-up easier</li>
              </ul>
            </div>

            {/* Section 17 — Signs That Prompt Closer Monitoring */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs That Prompt Closer Pregnancy Monitoring
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Reduced or noticeably changed fetal movement patterns</li>
                <li>A previous pregnancy complicated by growth restriction or stillbirth</li>
                <li>Gestational diabetes or hypertension diagnosed during this pregnancy</li>
                <li>Carrying twins or a higher-order multiple pregnancy</li>
                <li>Advanced maternal age or a pre-existing medical condition</li>
                <li>Any abnormal finding on a routine scan that needs a follow-up look</li>
              </ul>
            </div>

            {/* Section 18 — How Monitoring Results Guide Decisions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Monitoring Results Guide Clinical Decisions
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consistent growth trends usually mean routine monitoring can continue as planned</li>
                <li>A flattening growth curve may prompt more frequent scans or additional tests</li>
                <li>Abnormal doppler findings can lead to closer monitoring or early delivery planning</li>
                <li>Reduced amniotic fluid levels are tracked closely and may need intervention</li>
                <li>Reassuring fetal heart rate patterns support continuing with the planned monitoring schedule</li>
              </ul>
            </div>

            {/* Section 19 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts on Choosing a Pregnancy Monitoring Specialist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Good monitoring is about more than having the right machine — it's about consistent, well-documented tracking over time</li>
                <li>Dr. Priyanka Gynaec Moradabad combines advanced 3D/4D ultrasound with doppler studies and personal scan review at every visit</li>
                <li>Following the recommended monitoring schedule gives the best chance of catching concerns early</li>
                <li>High-risk pregnancies especially benefit from closer, more frequent monitoring rather than standard-interval scans alone</li>
                <li>If you want clear, well-explained monitoring throughout your pregnancy, an early consultation is the right next step</li>
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
                Message directly on WhatsApp for scan booking, appointment scheduling or any query. For emergencies or urgent monitoring concerns, calling is better than messaging.
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