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

export default function PostnatalCareDoctorMoradabad() {
  const faqs = [
    {
      q: "What does postnatal care include at Dr. Priyanka Gynaec Moradabad?",
      a: "Mother's physical recovery monitoring, breastfeeding support, newborn checkups, family planning guidance and emotional wellbeing support.",
    },
    {
      q: "When should the first postnatal visit be done?",
      a: "Within the first week after delivery, followed by checkups at 2-3 weeks and 6 weeks.",
    },
    {
      q: "Can this doctor help with breastfeeding difficulties?",
      a: "Yes, practical guidance is given for latch, positioning, milk supply and other common feeding challenges.",
    },
    {
      q: "Is postnatal depression discussed during checkups?",
      a: "Yes, emotional wellbeing is actively screened and discussed, with referral support if needed.",
    },
    {
      q: "Can I visit for postnatal care even if I delivered elsewhere?",
      a: "Yes, local postnatal follow-up is available even if delivery happened at another hospital.",
    },
    {
      q: "Are newborn checkups and vaccinations available here too?",
      a: "Yes, newborn checkups and vaccination guidance are provided at the same center.",
    },
    {
      q: "How can I book a postnatal care appointment?",
      a: "You can book directly by calling or messaging on WhatsApp (8979670705).",
    },
    {
      q: "Where is the clinic located?",
      a: "It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "What postpartum symptoms should I never ignore?",
      a: "Heavy bleeding, high fever, severe pain, infection signs or persistent sadness need immediate attention.",
    },
    {
      q: "Is family planning guidance provided after delivery?",
      a: "Yes, contraception options and pregnancy spacing guidance are discussed at postnatal visits.",
    },
    {
      q: "What should I carry for my postnatal visit?",
      a: "Delivery discharge summary, any medicines being taken, and notes on symptoms or feeding concerns.",
    },
    {
      q: "Can I get urgent postnatal support outside scheduled visits?",
      a: "Yes, urgent concerns can be addressed via WhatsApp or call, with same-day slots when needed.",
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
                Postnatal Care Doctor Moradabad – Complete Post-Delivery Support by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Pregnancy care doesn't end at delivery — the weeks after birth are just as important for both mother and baby. If you are looking for an experienced postnatal care doctor in Moradabad, Dr. Priyanka Gynaec provides complete post-delivery support, from the mother's physical recovery to the newborn's early checkups, all under one roof.
              </p>

              <p className="text-gray-700">
                This article explains why Dr. Priyanka Gynaec is a trusted choice for postnatal care in Moradabad, what postnatal care actually includes, and how to reach the clinic for support.
              </p>
            </div>

            {/* Section 2 — Why Choose Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec as Your Postnatal Care Doctor in Moradabad?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gold medal credentials and international fellowship-qualified gynaec doctor</li>
                <li>Structured postnatal checkup schedule for the first weeks after delivery</li>
                <li>Support for both the mother's recovery and the newborn's early care</li>
                <li>Practical breastfeeding guidance from an experienced doctor</li>
                <li>Careful monitoring for postpartum complications</li>
                <li>Same doctor available who managed the pregnancy and delivery</li>
                <li>Female-friendly, comfortable and private consultation environment</li>
                <li>24x7 availability for urgent postnatal concerns</li>
                <li>Strong local reputation — patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 3 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec – Postnatal Care Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a well-known gynaecologist in Moradabad, guided by her &quot;Her Health First&quot; philosophy. Postnatal care is treated as an essential continuation of the pregnancy journey, not an afterthought — every new mother is supported through recovery, feeding challenges and emotional adjustment.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialization in gynaecology and obstetrics</li>
                <li>Experience across antenatal, delivery and postnatal stages</li>
                <li>Skilled at identifying postpartum complications early</li>
                <li>Known for patient, reassuring communication with new mothers</li>
                <li>Paediatric consultation available at the same center for the newborn</li>
              </ul>
            </div>

            {/* Section 4 — What Postnatal Care Includes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Postnatal Care Includes at Dr. Priyanka Gynaec Moradabad
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Mother's Physical Recovery
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Monitoring healing after normal delivery or C-section</li>
                <li>Checking for signs of infection or delayed recovery</li>
                <li>Guidance on pain management and wound care</li>
                <li>Advice on safe return to daily activities and light exercise</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Postpartum Complication Monitoring
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Watching for excessive bleeding or postpartum hemorrhage signs</li>
                <li>Blood pressure monitoring, especially after high-risk pregnancies</li>
                <li>Screening for postpartum infections</li>
                <li>Early identification of postpartum depression or anxiety signs</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Breastfeeding Support
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Guidance on proper latch and feeding positions</li>
                <li>Help with common issues like low milk supply or engorgement</li>
                <li>Advice on feeding schedules for newborns</li>
                <li>Support for mothers facing breastfeeding challenges</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Newborn Checkups
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Initial physical examination after birth</li>
                <li>Weight and growth monitoring in the first weeks</li>
                <li>Vaccination schedule guidance and administration</li>
                <li>Screening for common newborn concerns</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Family Planning Guidance
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Discussion of contraception options after delivery</li>
                <li>Guidance on timing for future pregnancies if desired</li>
                <li>Addressing any concerns about resuming intimacy</li>
                <li>Support for spacing between pregnancies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Emotional and Mental Health Support
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Space to discuss the emotional adjustment to motherhood</li>
                <li>Screening for baby blues versus postpartum depression</li>
                <li>Encouragement to involve family support where needed</li>
                <li>Referral guidance if specialized mental health support is required</li>
              </ul>
            </div>

            {/* Section 5 — Recommended Checkup Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recommended Postnatal Checkup Schedule
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>First Week:</strong> Initial checkup to monitor early recovery and any complications</li>
                <li><strong>2-3 Weeks:</strong> Follow-up on healing, breastfeeding progress and baby's weight gain</li>
                <li><strong>6 Weeks:</strong> Comprehensive postnatal checkup covering physical recovery, contraception and overall wellbeing</li>
                <li><strong>As Needed:</strong> Additional visits for any concerns that arise between scheduled checkups</li>
              </ul>
            </div>

            {/* Section 6 — Why Postnatal Care Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Postnatal Care Matters
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Early detection of complications that can otherwise go unnoticed</li>
                <li>Continued support for breastfeeding success</li>
                <li>Monitoring the mother's mental health during a vulnerable period</li>
                <li>Ensuring the newborn's growth and development stay on track</li>
                <li>Guidance for family planning decisions after delivery</li>
                <li>Reassurance and confidence-building for first-time mothers</li>
              </ul>
            </div>

            {/* Section 7 — Who Should Book a Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Book a Postnatal Visit
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>New mothers within the first week after delivery</li>
                <li>Mothers experiencing breastfeeding difficulties</li>
                <li>Anyone noticing unusual bleeding, pain or signs of infection</li>
                <li>Mothers feeling persistent sadness, anxiety or overwhelm after delivery</li>
                <li>Families wanting guidance on newborn vaccination schedules</li>
                <li>Mothers who delivered elsewhere but want local postnatal follow-up</li>
              </ul>
            </div>

            {/* Section 8 — Technology and Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology and Facilities Supporting Postnatal Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Voluson E22 BT2024:</strong> Advanced ultrasound for any post-delivery imaging needs</li>
                <li><strong>Well-equipped consultation rooms:</strong> For both mother and newborn checkups</li>
                <li><strong>Accurate lab coordination:</strong> For postpartum blood tests when needed</li>
                <li><strong>Organized record-keeping:</strong> Connecting antenatal, delivery and postnatal visits</li>
                <li><strong>Paediatric support:</strong> Available within the same facility</li>
              </ul>
            </div>

            {/* Section 9 — What's the Difference */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postnatal Care Doctor Moradabad vs Other Options
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Many mothers are left without structured postnatal follow-up after discharge — this clinic ensures a clear checkup schedule</li>
                <li>The same doctor who managed the pregnancy and delivery continues postnatal care</li>
                <li>Both mother and newborn checkups happen at the same center</li>
                <li>Breastfeeding support goes beyond generic advice, addressing specific challenges</li>
                <li>Emotional wellbeing is actively discussed, not overlooked</li>
              </ul>
            </div>

            {/* Section 10 — Safety and Comfort Standards */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Safety and Comfort Standards
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sterilized examination rooms and modern equipment</li>
                <li>Proper infection-control protocols followed at every visit</li>
                <li>Female-friendly and private consultation environment</li>
                <li>Trained staff available to support mothers through recovery</li>
                <li>Clear explanations given for every finding and recommendation</li>
              </ul>
            </div>

            {/* Section 11 — Why Trust Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Trust Dr. Priyanka Gynaec for Postnatal Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Expertise with Heart:</strong> International fellowship and gold medal credentials</li>
                <li><strong>Continuity of Care:</strong> The same doctor from pregnancy through postnatal recovery</li>
                <li><strong>Proven Outcomes:</strong> A strong track record of healthy recoveries and successful breastfeeding support</li>
                <li><strong>Earned Trust:</strong> Patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 12 — What to Expect at Your First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect at Your First Postnatal Visit
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Physical examination to check healing progress</li>
                <li>Discussion of any pain, bleeding or unusual symptoms</li>
                <li>Review of the newborn's weight, feeding and general wellbeing</li>
                <li>Guidance on breastfeeding technique and common challenges</li>
                <li>Time to discuss emotional adjustment and available support</li>
                <li>Planning for the next follow-up visit</li>
              </ul>
            </div>

            {/* Section 13 — Common Concerns Discussed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Concerns Discussed During Postnatal Visits
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Managing fatigue and disrupted sleep in the early weeks</li>
                <li>Normal versus concerning postpartum bleeding patterns</li>
                <li>Nutrition needs for a breastfeeding mother</li>
                <li>Safe timeline for resuming exercise and daily activities</li>
                <li>Managing stress and adjusting expectations as a new parent</li>
                <li>When to seek help for feeding or growth concerns with the baby</li>
              </ul>
            </div>

            {/* Section 14 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postpartum Warning Signs That Need Immediate Attention
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Heavy bleeding that soaks through pads quickly</li>
                <li>High fever or chills after delivery</li>
                <li>Severe abdominal pain or a foul-smelling discharge</li>
                <li>Signs of infection at a C-section incision site</li>
                <li>Persistent sadness, hopelessness or thoughts of self-harm</li>
                <li>Difficulty breathing or chest pain</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If any of these signs appear, contacting the clinic immediately is essential rather than waiting for the next scheduled visit.
              </p>
            </div>

            {/* Section 15 — Serving Moradabad and Nearby Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Serving Moradabad and Nearby Areas
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients travel from Moradabad city as well as nearby towns and villages for postnatal care</li>
                <li>The location near Old Roadways makes it easy to reach even with a newborn</li>
                <li>Same-day consultation slots are available for urgent postnatal concerns</li>
                <li>Coordination support offered for patients travelling from a distance</li>
                <li>Reports and guidance can be shared digitally for easier follow-up</li>
              </ul>
            </div>

            {/* Section 16 — Practical Recovery Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Practical Recovery Tips for New Mothers
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest whenever the baby sleeps, rather than trying to catch up on other tasks</li>
                <li>Stay well hydrated and eat nutrient-dense meals to support healing and milk production</li>
                <li>Accept help from family members for household tasks during the first few weeks</li>
                <li>Keep the incision or delivery area clean and dry as advised by the doctor</li>
                <li>Avoid heavy lifting or strenuous activity until cleared at the postnatal checkup</li>
                <li>Track feeding times and diaper changes to monitor the baby's wellbeing</li>
              </ul>
            </div>

            {/* Section 17 — Supporting the Whole Family */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting the Whole Family
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Partners and family members are welcomed into postnatal discussions when helpful</li>
                <li>Guidance is given on how family members can best support the new mother</li>
                <li>Sibling adjustment concerns are addressed when there are older children at home</li>
                <li>Practical tips are shared for managing sleep schedules as a household</li>
                <li>Emotional support extends beyond the mother to the wider family adjusting to a newborn</li>
              </ul>
            </div>

            {/* Section 18 — Long-Term Follow-Up */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Long-Term Follow-Up
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Continued monitoring beyond the standard 6-week checkup for mothers who need it</li>
                <li>Guidance on returning to work and balancing breastfeeding schedules</li>
                <li>Support for weaning decisions when the time comes</li>
                <li>Ongoing availability for questions as the baby grows into infancy</li>
                <li>A consistent point of contact for future pregnancy planning when the family is ready</li>
              </ul>
            </div>

            {/* Section 19 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts on Choosing a Postnatal Care Doctor in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Postnatal care is just as important as antenatal care, yet it's often overlooked</li>
                <li>Dr. Priyanka Gynaec Moradabad treats the weeks after delivery as an essential part of the pregnancy journey</li>
                <li>Structured checkups, breastfeeding support and emotional care work together for a smoother recovery</li>
                <li>New mothers deserve a doctor who checks in proactively, not just when something goes wrong</li>
                <li>If you have recently delivered, scheduling your postnatal checkup on time is a simple but important step</li>
                <li>A trusted postnatal care doctor helps the entire family settle into this new chapter with confidence</li>
                <li>Choosing continuity of care from pregnancy through postnatal recovery often makes the biggest difference in how supported a new mother feels</li>
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
                Message directly on WhatsApp for appointment booking, breastfeeding questions or any concern. For emergencies or urgent postnatal issues, calling is better than messaging.
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