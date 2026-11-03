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
  Globe,
  MessageCircle,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function PostnatalCareDoctorBuddhiViharMoradabad() {
  const faqs = [
    {
      q: "When is the postnatal checkup?",
      a: "Your doctor will advise. Many schedule one around the sixth week, but it depends on your case.",
    },
    {
      q: "Which doctor handles postnatal care?",
      a: "Usually your obstetrician or gynaecologist.",
    },
    {
      q: "Is mood change normal after birth?",
      a: "Some change is common, but tell your doctor if it lasts or worsens.",
    },
    {
      q: "When should I seek urgent help?",
      a: "For very heavy bleeding, fever, severe pain, or thoughts of harm, contact your doctor or hospital immediately.",
    },
    {
      q: "Can I bring my baby to the visit?",
      a: "Yes. Ask the clinic about feeding and changing space.",
    },
    {
      q: "How do I verify a doctor’s credentials?",
      a: "Look up the relevant medical council’s records and ask about training.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, if you feel unsure about the advice.",
    },
    {
      q: "Where can I learn more about clinic planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
    },
    {
      q: "How long does postpartum recovery take?",
      a: "Recovery varies for every woman. Your doctor will guide you based on your delivery, symptoms, and overall health.",
    },
    {
      q: "Can I get pregnant while breastfeeding?",
      a: "Yes. Fertility can return before periods resume, so discuss contraception with your doctor.",
    },
    {
      q: "What should I bring to my postnatal visit?",
      a: "Bring your delivery summary, baby’s records, medicine list, and notes on symptoms, bleeding, sleep, and mood.",
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
                Postnatal Care Doctor in Buddhi Vihar, Moradabad: A Guide to the First Six Weeks
              </h1>


              <p className="text-gray-700 mb-4">
                After birth, attention often shifts entirely to the baby, and the mother’s own recovery gets overlooked. Postnatal care exists to look after you: your body, your mood, and your questions.
              </p>


              <p className="text-gray-700 mb-4">
                This guide gives a general week-by-week overview, a checklist for choosing a doctor, and tips for preparing. It is general information, not medical advice. It names no individual doctors, because I cannot verify or rank them, and only your own doctor can advise you on your recovery.
              </p>


              <p className="text-gray-700">
                <a
                  href="https://www.spacebuild.co.in/"
                  className="text-blue-600 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the sections on clinic environment.
              </p>
            </div>


            {/* Section 2 — What Is Postnatal Care? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. What Is Postnatal Care?
              </h2>


              <p className="text-gray-700 mb-4">
                It is the medical and emotional care given to a mother after birth.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Checks on your physical recovery</li>
                <li>Support with feeding and rest</li>
                <li>Attention to mood and mental wellbeing</li>
                <li>Guidance on contraception and future health</li>
                <li>Linking you with newborn care</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Your doctor decides the schedule for your case.
              </p>
            </div>


            {/* Section 3 — Why It Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Why It Matters
              </h2>


              <p className="text-gray-700 mb-4">
                Many mothers feel pressure to &quot;bounce back&quot; quickly.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Recovery takes time and varies for every woman.</li>
                <li>Early checks can catch concerns before they grow.</li>
                <li>Support helps you cope with sleepless nights.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Do not skip your own visits because the baby is busy.
              </p>
            </div>


            {/* Section 4 — Week One */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. Week One
              </h2>


              <p className="text-gray-700 mb-4">
                The first week is usually the most intense.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest as much as possible, and accept help.</li>
                <li>Follow wound or stitch care advice if relevant.</li>
                <li>Expect bleeding that your doctor will explain.</li>
                <li>Ask for feeding help early.</li>
                <li>Keep your hospital discharge papers safe.</li>
              </ul>
            </div>


            {/* Section 5 — Weeks Two to Three */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. Weeks Two to Three
              </h2>


              <p className="text-gray-700 mb-4">
                Routines slowly begin.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Continue gentle movement as advised.</li>
                <li>Eat regular meals and drink enough fluids.</li>
                <li>Watch your energy, and nap when the baby sleeps.</li>
                <li>Report concerns instead of waiting.</li>
              </ul>
            </div>


            {/* Section 6 — Weeks Four to Six */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Weeks Four to Six
              </h2>


              <p className="text-gray-700 mb-4">
                Many doctors schedule a postnatal checkup around this period.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Discuss your recovery and any lingering discomfort.</li>
                <li>Ask about activity, exercise, and getting back to routine.</li>
                <li>Discuss contraception and spacing of pregnancies.</li>
                <li>Review your mood and sleep.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Your doctor will advise the exact timing for you.
              </p>
            </div>


            {/* Section 7 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Warning Signs
              </h2>


              <p className="text-gray-700 mb-4">
                Ask your doctor for your personal list. Commonly discussed signs include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Very heavy bleeding</li>
                <li>Fever</li>
                <li>Severe or worsening pain</li>
                <li>Redness, swelling, or discharge from a wound</li>
                <li>Foul-smelling discharge</li>
                <li>Calf pain or swelling, chest pain, or breathlessness</li>
                <li>Persistent low mood or thoughts of harm</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Contact your doctor or go to hospital promptly if these occur.
              </p>
            </div>


            {/* Section 8 — Mental Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Mental Health After Birth
              </h2>


              <p className="text-gray-700 mb-4">
                Feelings can change a lot.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tearfulness and mood swings can be common early on.</li>
                <li>If low mood, anxiety, or hopelessness lasts or worsens, speak to your doctor.</li>
                <li>Tell a family member how you feel.</li>
                <li>Support and treatment are available, and asking for help is a strength.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                If you feel unsafe or have thoughts of harming yourself or your baby, seek immediate help.
              </p>
            </div>


            {/* Section 9 — Feeding Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Feeding Support
              </h2>


              <p className="text-gray-700 mb-4">
                Many mothers need guidance.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask the team about positions and latching.</li>
                <li>Seek help early if feeding is painful.</li>
                <li>Ask who to call after discharge.</li>
                <li>Follow your doctor’s advice rather than unverified tips.</li>
              </ul>
            </div>


            {/* Section 10 — Newborn Basics */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Newborn Basics
              </h2>


              <p className="text-gray-700 mb-4">
                Know where to get answers.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Feeding and sleep patterns</li>
                <li>Cord and skin care</li>
                <li>Vaccination schedule</li>
                <li>Signs that need a doctor</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Your baby’s checkups are separate from yours. Keep both on schedule.
              </p>
            </div>


            {/* Section 11 — Rest and Help */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Rest and Help at Home
              </h2>


              <p className="text-gray-700 mb-4">
                Plan support before and after birth.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Who cooks and manages the household?</li>
                <li>Who helps with older children?</li>
                <li>Who can you call at night?</li>
                <li>Who takes you to appointments?</li>
              </ul>
            </div>


            {/* Section 12 — Food and Activity */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Food and Activity
              </h2>


              <p className="text-gray-700 mb-4">
                Advice must be personal.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask your doctor about food, fluids, and supplements.</li>
                <li>Ask when lifting, driving, and exercise are safe.</li>
                <li>Avoid crash diets and unverified remedies.</li>
                <li>Ask a qualified dietitian for a personal plan if needed.</li>
              </ul>
            </div>


            {/* Section 13 — Contraception */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Contraception and Planning
              </h2>


              <p className="text-gray-700 mb-4">
                This is a good time to ask questions.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask which options suit you while feeding.</li>
                <li>Ask about timing and spacing of the next pregnancy.</li>
                <li>Discuss decisions with your partner and doctor.</li>
              </ul>
            </div>


            {/* Section 14 — Shortlist Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. How to Shortlist a Doctor
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your obstetrician or family doctor</li>
                <li>Friends and relatives with good experiences</li>
                <li>Hospital and clinic listings</li>
                <li>Official medical council directories</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Aim for two or three names to compare.
              </p>
            </div>


            {/* Section 15 — Verify Qualifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Verify Qualifications
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of experience in obstetrics and gynaecology</li>
                <li>Hospital affiliations</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Credentials can be verified through the council’s records.
              </p>
            </div>


            {/* Section 16 — Judge Communication */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Judge Communication
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Does the doctor listen without judgement?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions about mood and feeding too?</li>
                <li>Does the doctor avoid pressure or fear-based advice?</li>
              </ul>
            </div>


            {/* Section 17 — Prepare for Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Prepare for the Postnatal Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note your symptoms, bleeding pattern, and sleep.</li>
                <li>Bring your delivery summary and baby’s records.</li>
                <li>List medicines and supplements.</li>
                <li>Write down your questions.</li>
                <li>Arrange someone to hold the baby during examination.</li>
              </ul>
            </div>


            {/* Section 18 — Clinic Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. What a Good Clinic Environment Looks Like
              </h2>


              <p className="text-gray-700 mb-4">
                New mothers need extra comfort.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Seating:</strong> Supportive chairs, comfortable after delivery.</li>
                <li><strong>Feeding Space:</strong> A private, clean corner for feeding and changing the baby.</li>
                <li><strong>Access:</strong> Step-free entry, wide doors for prams, and lift access.</li>
                <li><strong>Privacy:</strong> Consultation doors that do not open onto the waiting area.</li>
                <li><strong>Hygiene:</strong> Washable, non-porous surfaces and clean washrooms.</li>
                <li><strong>Calm:</strong> Soft lighting, good ventilation, and short waits.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Planners such as{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  className="text-blue-600 hover:underline"
                >
                  Space Build
                </a>{" "}
                focus on these elements when designing healthcare interiors. Clinical standards remain the responsibility of the medical team.
              </p>
            </div>


            {/* Section 19 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. Understanding Costs
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation fee for each visit</li>
                <li>Test and medicine costs</li>
                <li>Counselling or feeding support charges, if any</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask for an itemised bill.
              </p>
            </div>


            {/* Section 20 — Red Flags */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                19. Red Flags
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dismissing your concerns, including mood</li>
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Unclear costs</li>
                <li>Poor privacy or hygiene</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </div>


            {/* Section 21 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Skipping your own postnatal checkup</li>
                <li>Ignoring warning signs</li>
                <li>Hiding low mood</li>
                <li>Following unverified advice online</li>
                <li>Resuming heavy activity too soon</li>
                <li>Not arranging help at home</li>
              </ul>
            </div>


            {/* Section 22 — About Space Build */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Space Build
              </h2>


              <p className="text-gray-700 mb-4">
                <a
                  href="https://www.spacebuild.co.in/"
                  className="text-blue-600 hover:underline"
                >
                  Space Build
                </a>{" "}
                is a Moradabad-based interior design and construction firm offering interior designing, Vastu guidance, renovation, modular kitchens, project management consultation, and related services. Its team works on residential, commercial, and healthcare-oriented spaces with a focus on functionality, comfort, and thoughtful design.
              </p>


              <p className="text-gray-700 mb-4">
                For postnatal care clinics, practical interior planning can support privacy, hygiene, accessibility, calm lighting, comfortable seating, and private feeding or baby-changing spaces. Clinical accuracy, qualified staff, equipment standards, and patient safety remain the responsibility of the clinic and medical team.
              </p>


              <p className="text-gray-700 mb-4">
                Space Build is based in Moradabad, Uttar Pradesh, and can be contacted through its website for interior planning and design consultation.
              </p>
            </div>


            {/* Section 23 — FAQs */}
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