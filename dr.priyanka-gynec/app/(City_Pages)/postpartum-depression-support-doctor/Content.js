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

export default function PostpartumDepressionSupportDoctor() {
  const faqs = [
    {
      q: "How is postpartum depression different from baby blues?",
      a: "Baby blues are mild and resolve within about two weeks, while postpartum depression is more intense, persistent and can interfere with daily functioning.",
    },
    {
      q: "When should I see a doctor about how I'm feeling after delivery?",
      a: "If low mood, anxiety or disconnection last beyond two weeks, or feel overwhelming at any point, it's time to reach out.",
    },
    {
      q: "Is postpartum depression screened during regular postnatal checkups?",
      a: "Yes, emotional wellbeing is screened as a standard part of postnatal visits here.",
    },
    {
      q: "Can postpartum depression be treated successfully?",
      a: "Yes, with proper screening, support and treatment when needed, most mothers recover fully.",
    },
    {
      q: "What if I have thoughts of harming myself or my baby?",
      a: "This needs immediate attention — please contact the clinic right away or seek emergency help without delay.",
    },
    {
      q: "Will I be judged for how I'm feeling?",
      a: "No, conversations are kept private, honest and completely judgment-free.",
    },
    {
      q: "How can I book an appointment for postpartum emotional support?",
      a: "You can book directly by calling or messaging on WhatsApp (8979670705).",
    },
    {
      q: "Where is the clinic located?",
      a: "It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "Can family members be involved in the support process?",
      a: "Yes, involving supportive family members is encouraged when the mother is comfortable with it.",
    },
    {
      q: "Is a referral to a mental health professional always needed?",
      a: "Not always — some mothers need reassurance and monitoring, while others benefit from specialized referral, based on individual screening.",
    },
    {
      q: "Can I get support here even if my delivery was at another hospital?",
      a: "Yes, postpartum emotional support is available regardless of where delivery took place.",
    },
    {
      q: "What should I do if I'm unsure whether what I'm feeling is 'normal'?",
      a: "Come in for a conversation — a proper screening can give clarity either way, without any pressure.",
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
                Postpartum Depression Support Doctor – Compassionate Care for New Mothers by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Becoming a mother brings enormous change, and for many women, the emotional adjustment afterward is just as significant as the physical recovery. Feeling persistently sad, anxious, disconnected or overwhelmed after delivery is more common than most people realize, and it is not something a new mother should have to manage alone or feel ashamed of. If you are searching for a postpartum depression support doctor, Dr. Priyanka Gynaec in Moradabad offers a compassionate, judgment-free space to talk about what you're feeling, get properly screened, and receive guidance on the right next steps — whether that means simple reassurance, ongoing monitoring, or a referral to specialized mental health support.
              </p>

              <p className="text-gray-700">
                Postpartum depression (PPD) is a recognized medical condition, not a personal failing or a sign of weakness. It can affect any new mother, regardless of how much she wanted or planned for the pregnancy, how supportive her family is, or how &quot;easy&quot; the delivery was. Left unaddressed, it can affect bonding with the baby, the mother's own health, and family life more broadly — but with the right support, most women recover fully. Dr. Priyanka Gynaec treats this conversation as a core part of postnatal care, not an optional add-on, because emotional wellbeing after delivery deserves the same attention as physical healing.
              </p>

              <p className="text-gray-700">
                This article explains what postpartum depression looks like, how it differs from ordinary &quot;baby blues,&quot; what kind of support is available, and how to reach out for help in Moradabad.
              </p>
            </div>

            {/* Section 2 — Why Choose Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec as Your Postpartum Depression Support Doctor?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gold medal credentials and international fellowship-qualified gynaec doctor</li>
                <li>Postpartum emotional wellbeing screened as a standard part of every postnatal visit</li>
                <li>A calm, non-judgmental space to talk openly about difficult feelings</li>
                <li>Clear guidance on when symptoms need closer monitoring or specialist referral</li>
                <li>Same doctor who managed pregnancy and delivery continues emotional support</li>
                <li>Female-friendly, comfortable and private consultation environment</li>
                <li>24x7 availability for urgent emotional or mental health concerns</li>
                <li>Strong local reputation — patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 3 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec – Supporting Mothers Through Postpartum Depression
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a well-known gynaecologist in Moradabad, guided by her &quot;Her Health First&quot; philosophy. She believes emotional wellbeing is inseparable from physical recovery after delivery, and every postnatal visit includes space to ask how a mother is really doing — not just how her body is healing.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialization in gynaecology and obstetrics</li>
                <li>Experience screening for postpartum depression and anxiety during routine checkups</li>
                <li>Skilled at distinguishing normal adjustment from symptoms needing further support</li>
                <li>Known for patient, compassionate communication with new mothers</li>
                <li>Coordinated referral support when specialized mental health care is needed</li>
              </ul>
            </div>

            {/* Section 4 — Understanding Postpartum Depression */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Postpartum Depression – What It Actually Is
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A mood disorder that can begin during pregnancy or within the first year after delivery</li>
                <li>Caused by a combination of hormonal shifts, sleep deprivation, physical recovery and life adjustment</li>
                <li>Different from &quot;baby blues,&quot; which are milder and usually resolve within two weeks</li>
                <li>A medical condition that responds well to appropriate support and treatment</li>
                <li>Not caused by anything the mother did wrong, and not a reflection of her love for her baby</li>
              </ul>
            </div>

            {/* Section 5 — Baby Blues vs Postpartum Depression */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Baby Blues vs Postpartum Depression – Key Differences
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Baby Blues:</strong> Mild mood swings, tearfulness and irritability, usually starting a few days after delivery and resolving within about two weeks</li>
                <li><strong>Postpartum Depression:</strong> More intense and persistent sadness, anxiety or numbness lasting beyond two weeks</li>
                <li><strong>Baby Blues:</strong> Generally does not interfere significantly with daily functioning or caring for the baby</li>
                <li><strong>Postpartum Depression:</strong> Can interfere with sleep, appetite, bonding with the baby, and daily responsibilities</li>
                <li><strong>Baby Blues:</strong> Usually improves on its own with rest and support</li>
                <li><strong>Postpartum Depression:</strong> Typically needs proper screening, guidance and sometimes professional treatment</li>
              </ul>
            </div>

            {/* Section 6 — Common Signs of Postpartum Depression */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Signs of Postpartum Depression
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Persistent sadness, hopelessness or emptiness most of the day</li>
                <li>Loss of interest in activities that used to feel enjoyable</li>
                <li>Difficulty bonding with the baby or feeling disconnected</li>
                <li>Excessive worry, guilt or feelings of being an inadequate mother</li>
                <li>Changes in appetite or sleep beyond what's expected with a newborn</li>
                <li>Difficulty concentrating or making decisions</li>
                <li>Withdrawing from family, friends or support systems</li>
                <li>Overwhelming fatigue that doesn't improve with rest</li>
              </ul>
            </div>

            {/* Section 7 — When Symptoms Need Immediate Attention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Symptoms Need Immediate Attention
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Thoughts of harming yourself or your baby</li>
                <li>Feeling unable to care for yourself or your baby at all</li>
                <li>Severe anxiety or panic that doesn't settle</li>
                <li>Hearing or seeing things that others don't (a sign of a more serious condition called postpartum psychosis)</li>
                <li>A sense of complete hopelessness about the future</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If any of these more serious signs are present, reaching out for help immediately — through this clinic, a mental health professional, or an emergency service — is essential rather than waiting for a scheduled appointment.
              </p>
            </div>

            {/* Section 8 — What Support Looks Like */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Postpartum Depression Support Looks Like at Dr. Priyanka Gynaec Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Open, unhurried conversations about how the mother is feeling emotionally</li>
                <li>Standardized screening questions used during postnatal checkups</li>
                <li>Honest discussion about what's medically normal versus what needs attention</li>
                <li>Practical guidance on rest, support systems and manageable routines</li>
                <li>Referral coordination with mental health professionals when specialized care is needed</li>
                <li>Ongoing follow-up rather than a single conversation and no further check-in</li>
              </ul>
            </div>

            {/* Section 9 — Risk Factors */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Risk Factors That May Increase the Chance of Postpartum Depression
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A personal or family history of depression or anxiety</li>
                <li>A difficult, traumatic or complicated delivery experience</li>
                <li>Limited support from a partner, family or community</li>
                <li>Significant life stress occurring around the time of delivery</li>
                <li>A history of depression during pregnancy itself</li>
                <li>Difficulty breastfeeding or unexpected challenges with the newborn</li>
              </ul>
            </div>

            {/* Section 10 — Who Should Seek Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Seek Postpartum Depression Support
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Any new mother experiencing persistent low mood beyond two weeks after delivery</li>
                <li>Mothers who feel disconnected from or resentful toward their baby</li>
                <li>Anyone experiencing overwhelming anxiety, guilt or intrusive worry</li>
                <li>Partners or family members who notice concerning changes in a new mother</li>
                <li>Mothers who previously experienced depression or anxiety and want proactive support</li>
                <li>Anyone unsure whether what they're feeling is &quot;normal&quot; and wants reassurance either way</li>
              </ul>
            </div>

            {/* Section 11 — How Screening Is Done */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Screening Is Done During Postnatal Visits
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Simple, direct questions about mood, sleep, appetite and bonding</li>
                <li>A private, judgment-free setting to answer honestly</li>
                <li>Screening repeated at multiple postnatal visits, not just once</li>
                <li>Attention given to both verbal answers and general demeanor</li>
                <li>Clear next steps discussed based on the screening outcome</li>
              </ul>
            </div>

            {/* Section 12 — Support Options Beyond the Clinic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Support Options Available Beyond the Clinic
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Referral to qualified mental health professionals for therapy or counselling</li>
                <li>Guidance on involving family members in a practical support plan</li>
                <li>Information on local and national support resources when appropriate</li>
                <li>Encouragement to build a realistic, sustainable support network</li>
                <li>Follow-up scheduled to check progress after initial support begins</li>
              </ul>
            </div>

            {/* Section 13 — Why Trust Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Trust Dr. Priyanka Gynaec for Postpartum Depression Support
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Expertise with Heart:</strong> International fellowship and gold medal credentials</li>
                <li><strong>Continuity of Care:</strong> The same doctor who managed delivery continues emotional support</li>
                <li><strong>Non-Judgmental Approach:</strong> A safe space to speak honestly without fear of dismissal</li>
                <li><strong>Earned Trust:</strong> Patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 14 — Supporting a Loved One */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting a Loved One Through Postpartum Depression
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Listen without judgment rather than offering quick fixes</li>
                <li>Encourage her to attend postnatal checkups, including emotional wellbeing screening</li>
                <li>Offer practical help with household tasks, meals or childcare</li>
                <li>Avoid comparing her experience to other mothers' pregnancies or recoveries</li>
                <li>Take any mention of self-harm or harming the baby seriously and seek help immediately</li>
              </ul>
            </div>

            {/* Section 15 — Serving Moradabad and Nearby Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Serving Moradabad and Nearby Areas
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients travel from Moradabad city as well as nearby towns and villages for postpartum emotional support</li>
                <li>The location near Old Roadways makes it manageable to visit even with a newborn</li>
                <li>Same-day consultation slots are available for urgent emotional concerns</li>
                <li>Coordination support offered for patients travelling from a distance</li>
                <li>Conversations are kept private and confidential at every visit</li>
              </ul>
            </div>

            {/* Section 16 — Self-Care Practices */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Self-Care Practices That Support Emotional Recovery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Setting small, realistic goals each day instead of expecting to &quot;bounce back&quot; quickly</li>
                <li>Accepting help with household tasks so energy can go toward rest and bonding</li>
                <li>Stepping outside for a short walk when possible, even briefly</li>
                <li>Staying connected with at least one trusted friend or family member regularly</li>
                <li>Being gentle with self-expectations during a period of major hormonal and life change</li>
              </ul>
            </div>

            {/* Section 17 — Frequently Overlooked Aspects */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Frequently Overlooked Aspects of Postpartum Emotional Health
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Postpartum anxiety can occur alongside or separately from depression, and deserves equal attention</li>
                <li>Fathers and partners can also experience postpartum depression, though it's less commonly discussed</li>
                <li>Symptoms don't always start immediately — they can emerge weeks or months after delivery</li>
                <li>A mother can love her baby deeply and still struggle with postpartum depression at the same time</li>
                <li>Seeking help early tends to lead to a smoother, shorter recovery than waiting</li>
              </ul>
            </div>

            {/* Section 18 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts on Finding a Postpartum Depression Support Doctor
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Emotional wellbeing after delivery deserves the same seriousness as physical recovery</li>
                <li>Dr. Priyanka Gynaec Moradabad treats this conversation as a routine, expected part of postnatal care</li>
                <li>Recognizing the difference between baby blues and postpartum depression helps mothers know when to seek support</li>
                <li>No question or feeling is too small to bring up during a postnatal visit</li>
                <li>If something doesn't feel right emotionally after delivery, reaching out early is always the right call</li>
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
                Message directly on WhatsApp for appointment booking or to talk about a concern privately. For urgent emotional distress, calling is better than messaging.
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