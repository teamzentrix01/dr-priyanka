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

export default function PostnatalCheckupGynaecologistMoradabad() {
  const faqs = [
    {
      q: "What is checked during a postnatal checkup at Dr. Priyanka Gynaec Moradabad?",
      a: "Healing at the delivery site, uterine recovery, blood pressure, breastfeeding progress and emotional wellbeing are all assessed.",
    },
    {
      q: "When should the first postnatal checkup be done?",
      a: "Within the first week after delivery, followed by checkups at 2-3 weeks and 6 weeks.",
    },
    {
      q: "Why is the 6-week checkup considered so important?",
      a: "It's the main checkpoint for confirming physical recovery, discussing contraception, and screening for postpartum depression.",
    },
    {
      q: "Can I get a postnatal checkup here if I delivered at another hospital?",
      a: "Yes, a thorough local postnatal checkup is available even if delivery happened elsewhere.",
    },
    {
      q: "Is breastfeeding support included in the postnatal checkup?",
      a: "Yes, feeding progress and any difficulties are discussed and addressed at every visit.",
    },
    {
      q: "Is a pelvic examination done during the postnatal checkup?",
      a: "Yes, a pelvic examination is typically included, especially at the 6-week checkup when needed.",
    },
    {
      q: "How can I book a postnatal checkup appointment?",
      a: "You can book directly by calling or messaging on WhatsApp (8979670705).",
    },
    {
      q: "Where is the clinic located?",
      a: "It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "Is postpartum depression screening part of the checkup?",
      a: "Yes, mood and emotional wellbeing are screened at postnatal checkups, particularly at the 6-week visit.",
    },
    {
      q: "Can the baby be checked at the same visit?",
      a: "Yes, combined mother-and-baby checkups are available at the same center.",
    },
    {
      q: "What should I bring to my postnatal checkup?",
      a: "Your delivery discharge summary, current medicines list, and notes on any symptoms or concerns.",
    },
    {
      q: "What if I notice a warning sign before my scheduled checkup?",
      a: "Contact the clinic immediately via call or WhatsApp rather than waiting for the next scheduled visit.",
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
                Postnatal Checkup Gynaecologist Moradabad – Thorough Post-Delivery Checkups by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                A proper postnatal checkup is not just a formality — it's a structured examination that catches complications early, tracks recovery, and gives new mothers real answers instead of guesswork. If you are searching for a reliable postnatal checkup gynaecologist in Moradabad, Dr. Priyanka Gynaec offers exactly that kind of thorough, unhurried checkup at every stage after delivery.
              </p>

              <p className="text-gray-700">
                This article explains what a postnatal checkup should actually include, how the checkup schedule works, and how to book your next visit.
              </p>
            </div>

            {/* Section 2 — Why Choose Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Your Postnatal Checkup in Moradabad?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gold medal credentials and international fellowship-qualified gynaec doctor</li>
                <li>Structured checkup protocol covering every stage of postpartum recovery</li>
                <li>Detailed physical examination, not just a quick conversation</li>
                <li>Careful screening for complications that are easy to miss</li>
                <li>Same doctor who managed the pregnancy and delivery conducts the checkup</li>
                <li>Female-friendly, comfortable and private consultation environment</li>
                <li>24x7 availability for urgent postnatal concerns</li>
                <li>Strong local reputation — patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 3 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec – Postnatal Checkup Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a well-known gynaecologist in Moradabad, guided by her &quot;Her Health First&quot; philosophy. Every postnatal checkup is treated as a genuine opportunity to catch problems early, not a routine box to tick — because many postpartum complications develop quietly and are only found through a proper examination.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialization in gynaecology and obstetrics</li>
                <li>Deep experience conducting postnatal checkups after both normal delivery and C-section</li>
                <li>Skilled at identifying subtle signs of complications early</li>
                <li>Known for patient, detailed communication with new mothers</li>
                <li>Paediatric consultation available for the newborn at the same visit</li>
              </ul>
            </div>

            {/* Section 4 — What Happens During a Checkup */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During a Postnatal Checkup at Dr. Priyanka Gynaec Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Blood pressure and general health check</li>
                <li>Examination of the delivery site — perineal healing or C-section incision</li>
                <li>Check for signs of infection, excessive bleeding or delayed healing</li>
                <li>Abdominal examination to assess uterine recovery</li>
                <li>Discussion of pain levels, bowel and bladder function</li>
                <li>Review of breastfeeding progress and any feeding difficulties</li>
                <li>Screening questions for mood, sleep and emotional wellbeing</li>
                <li>Time reserved for the mother's questions and concerns</li>
              </ul>
            </div>

            {/* Section 5 — Checkup Schedule Explained */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Checkup Schedule Explained
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. First Week Checkup
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Early assessment of healing and any immediate complications</li>
                <li>Checking for excessive bleeding or signs of infection</li>
                <li>Initial breastfeeding support and guidance</li>
                <li>Addressing any pain or discomfort from delivery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Two to Three Week Checkup
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Follow-up on wound or incision healing</li>
                <li>Assessment of breastfeeding progress and baby's weight gain</li>
                <li>Discussion of fatigue, sleep and early emotional adjustment</li>
                <li>Addressing any new concerns that have come up since the last visit</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Six Week Comprehensive Checkup
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Full physical examination including pelvic exam if needed</li>
                <li>Assessment of uterine and overall physical recovery</li>
                <li>Discussion of contraception and family planning options</li>
                <li>Clearance for resuming exercise and daily activities</li>
                <li>Mental health screening for postpartum depression or anxiety</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Additional Visits as Needed
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Extra checkups for mothers with a more complicated delivery</li>
                <li>Follow-up for specific concerns like slow-healing wounds</li>
                <li>Ongoing breastfeeding support for mothers facing challenges</li>
                <li>Extended monitoring for high-risk pregnancy cases</li>
              </ul>
            </div>

            {/* Section 6 — What the Gynaecologist Looks For */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What a Postnatal Checkup Gynaecologist Looks For
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Signs of postpartum hemorrhage or abnormal bleeding patterns</li>
                <li>Infection at the incision site or within the uterus</li>
                <li>Blood pressure irregularities, especially after a high-risk pregnancy</li>
                <li>Delayed uterine involution (the uterus not shrinking back as expected)</li>
                <li>Breastfeeding difficulties affecting the baby's growth</li>
                <li>Emotional signs of postpartum depression or anxiety</li>
                <li>General nutritional and physical recovery progress</li>
              </ul>
            </div>

            {/* Section 7 — Why the 6-Week Visit Matters Most */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why the 6-Week Checkup Matters Most
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It marks the point where most physical healing should be complete</li>
                <li>It's the checkpoint for clearing safe return to exercise and normal activity</li>
                <li>It's when contraception and future family planning are properly discussed</li>
                <li>It's an important opportunity to screen for postpartum depression</li>
                <li>It confirms whether any lingering symptoms need further investigation</li>
              </ul>
            </div>

            {/* Section 8 — Technology and Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology and Facilities Supporting Postnatal Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Voluson E22 BT2024:</strong> Advanced ultrasound available for any post-delivery imaging needs</li>
                <li><strong>Well-equipped examination rooms:</strong> Designed for thorough physical checkups</li>
                <li><strong>Accurate lab coordination:</strong> For postpartum blood tests when required</li>
                <li><strong>Organized record-keeping:</strong> Connecting antenatal, delivery and postnatal visits</li>
                <li><strong>Paediatric support:</strong> Available for combined mother-and-baby checkup visits</li>
              </ul>
            </div>

            {/* Section 9 — Who Should Book a Checkup */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Book a Postnatal Checkup
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Every mother should have at least the first-week, 2-3 week and 6-week checkups</li>
                <li>Mothers experiencing unusual pain, bleeding or discharge</li>
                <li>Anyone with breastfeeding difficulties affecting the baby's feeding</li>
                <li>Mothers feeling persistent low mood, anxiety or overwhelm</li>
                <li>Women who delivered elsewhere but want a thorough local follow-up</li>
                <li>Mothers recovering from a C-section who need incision monitoring</li>
              </ul>
            </div>

            {/* Section 10 — vs a Rushed Follow-Up */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postnatal Checkup Gynaecologist Moradabad vs a Rushed Follow-Up
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A proper checkup includes a physical examination, not just a quick chat</li>
                <li>Time is given to discuss breastfeeding, mood and physical symptoms together</li>
                <li>The same doctor who managed delivery reviews the recovery, with full context</li>
                <li>Findings are explained clearly rather than dismissed as &quot;normal&quot; without checking</li>
                <li>Follow-up plans are made for anything that needs closer monitoring</li>
              </ul>
            </div>

            {/* Section 11 — Safety and Comfort Standards */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Safety and Comfort Standards
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sterilized examination rooms and modern equipment</li>
                <li>Proper infection-control protocols followed at every visit</li>
                <li>Female-friendly and private consultation environment</li>
                <li>Trained staff available to support mothers through each checkup</li>
                <li>Clear explanations given for every finding and next step</li>
              </ul>
            </div>

            {/* Section 12 — Why Trust Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Trust Dr. Priyanka Gynaec for Postnatal Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Expertise with Heart:</strong> International fellowship and gold medal credentials</li>
                <li><strong>Continuity of Care:</strong> The same doctor who managed delivery conducts the checkup</li>
                <li><strong>Thoroughness:</strong> A genuine physical examination at every visit, not a quick conversation</li>
                <li><strong>Earned Trust:</strong> Patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 13 — Preparing for Your Checkup */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Your Postnatal Checkup
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note any symptoms, pain or concerns since your last visit</li>
                <li>Bring your delivery discharge summary if this is your first visit here</li>
                <li>List any medicines or supplements you are currently taking</li>
                <li>Write down questions about recovery, breastfeeding or contraception</li>
                <li>Wear comfortable clothing suitable for a physical examination</li>
                <li>Bring the baby along if a combined checkup is planned</li>
              </ul>
            </div>

            {/* Section 14 — Common Questions Addressed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Questions Addressed During Postnatal Checkups
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Is my bleeding pattern still within the normal range?</li>
                <li>When can I safely resume exercise or intimacy?</li>
                <li>What contraception option suits me best right now?</li>
                <li>Why does breastfeeding still feel difficult at this stage?</li>
                <li>Is my mood and energy level within a normal range for this stage?</li>
                <li>When should I schedule my next follow-up visit?</li>
              </ul>
            </div>

            {/* Section 15 — Serving Moradabad and Nearby Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Serving Moradabad and Nearby Areas
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients travel from Moradabad city as well as nearby towns and villages for postnatal checkups</li>
                <li>The location near Old Roadways makes it manageable to visit even with a newborn</li>
                <li>Same-day checkup slots are available for urgent postnatal concerns</li>
                <li>Coordination support offered for patients travelling from a distance</li>
                <li>Reports and guidance can be shared digitally for easier follow-up</li>
              </ul>
            </div>

            {/* Section 16 — Normal Delivery vs C-Section Checkups */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Differences Between Checkup After Normal Delivery and C-Section
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Normal Delivery:</strong> Focus on perineal healing, hemorrhoid or tear recovery, and pelvic floor recovery</li>
                <li><strong>C-Section:</strong> Focus on incision healing, signs of infection, and monitoring for internal recovery</li>
                <li><strong>Pain Management:</strong> Different pain patterns are expected and monitored based on delivery type</li>
                <li><strong>Activity Clearance:</strong> Timeline for resuming activity is often longer after a C-section</li>
                <li><strong>Scar Assessment:</strong> C-section checkups include a specific check of the incision site at each visit</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Both delivery types receive equally thorough attention during postnatal checkups.
              </p>
            </div>

            {/* Section 17 — What Sets a Thorough Checkup Apart */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Sets a Thorough Checkup Apart
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A real physical examination happens every time, not just a verbal check-in</li>
                <li>Findings are documented and compared against the previous visit's notes</li>
                <li>Both the mother's recovery and the baby's wellbeing are considered together</li>
                <li>Time is set aside specifically for questions, rather than rushing to the next patient</li>
                <li>Any abnormal finding leads to a clear next step, not a vague &quot;keep monitoring it&quot;</li>
              </ul>
            </div>

            {/* Section 18 — Guidance Given at Each Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Guidance Given at Each Visit
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Nutrition tips to support ongoing recovery and breastfeeding</li>
                <li>Realistic expectations for weight and body changes after delivery</li>
                <li>Sleep and rest strategies suited to a newborn's unpredictable schedule</li>
                <li>Signs that indicate it's time to call the clinic before the next scheduled visit</li>
                <li>Encouragement to involve a partner or family member in recovery support</li>
              </ul>
            </div>

            {/* Section 19 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts on Choosing a Postnatal Checkup Gynaecologist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A thorough postnatal checkup catches problems that a quick phone consultation would miss</li>
                <li>Dr. Priyanka Gynaec Moradabad structures each checkup around a real physical examination and honest conversation</li>
                <li>Sticking to the first-week, 2-3 week and 6-week checkup schedule gives the best chance of catching issues early</li>
                <li>Continuity with the same doctor who managed delivery adds valuable context to every checkup</li>
                <li>If your postnatal checkup is due, booking it on time is one of the simplest ways to protect your recovery</li>
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
                Message directly on WhatsApp for appointment booking or any postnatal concern. For emergencies or urgent postnatal issues, calling is better than messaging.
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