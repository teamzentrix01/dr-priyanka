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


export default function PostnatalCareDoctorGandhiNagarMoradabad() {
  const faqs = [
    {
      q: "How should I set up my home for recovery?",
      a: "Create one resting spot near a washroom, with feeding and baby-care corners within reach.",
    },
    {
      q: "Who should help at home?",
      a: "Share meals, housework, and baby care among family so the mother can rest.",
    },
    {
      q: "When is the postnatal checkup?",
      a: "Your doctor will advise. Keep the appointment even if you feel well.",
    },
    {
      q: "When should I seek urgent help?",
      a: "For very heavy bleeding, fever, severe pain, or thoughts of harm, contact your doctor or hospital immediately.",
    },
    {
      q: "Is mood change normal after birth?",
      a: "Some is common, but tell your doctor if it lasts or worsens.",
    },
    {
      q: "How do I verify a doctor’s credentials?",
      a: "Look up the relevant medical council’s records and ask about training.",
    },
    {
      q: "Can I bring my baby to the visit?",
      a: "Yes. Ask the clinic about feeding and changing space.",
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
                Postnatal Care Doctor Near Gandhi Nagar, Moradabad: Setting Up Your Home and Daily Routine for Recovery
              </h1>


              <p className="text-gray-700 mb-4">
                After birth, the home becomes the main place of recovery. A thoughtful setup and a gentle routine can make the early weeks easier for the mother and the whole family.
              </p>


              <p className="text-gray-700 mb-4">
                This guide covers home arrangement, daily rhythm, and how to choose a postnatal doctor. It is general information, not medical advice. It names no individual doctors, because I cannot verify or rank them, and only your own doctor can advise you on your recovery.
              </p>


              <p className="text-gray-700">
                <a
                  href="https://www.spacebuild.co.in/"
                  className="text-blue-600 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the sections on home and clinic environment.
              </p>
            </div>


            {/* Section 2 — Why Home Setup Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. Why the Home Setup Matters
              </h2>


              <p className="text-gray-700 mb-4">
                Small changes reduce strain.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Less bending, lifting, and walking back and forth</li>
                <li>Easier access to the baby, food, and washroom</li>
                <li>A calmer space for rest and feeding</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Plan before delivery, since energy is low afterwards.
              </p>
            </div>


            {/* Section 3 — Recovery Spot */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Choose a Recovery Spot
              </h2>


              <p className="text-gray-700 mb-4">
                Pick one main resting area.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Close to a washroom</li>
                <li>Well ventilated, with soft, adjustable lighting</li>
                <li>Quiet, but not isolated from family</li>
                <li>Easy to reach without stairs, if possible</li>
              </ul>
            </div>


            {/* Section 4 — Feeding Corner */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. Set Up a Feeding Corner
              </h2>


              <p className="text-gray-700 mb-4">
                Comfort helps feeding go smoother.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A supportive chair or bed with back support</li>
                <li>Cushions or pillows for positioning</li>
                <li>A side table for water, snacks, and a phone</li>
                <li>A dim lamp for night feeds</li>
                <li>A small bin and cloths within reach</li>
              </ul>
            </div>


            {/* Section 5 — Baby-Care Corner */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. Set Up a Baby-Care Corner
              </h2>


              <p className="text-gray-700 mb-4">
                Keep everything within arm’s reach.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Changing mat, nappies, and wipes at waist height</li>
                <li>Spare clothes and wraps in an open basket</li>
                <li>A safe, flat surface for changing</li>
                <li>A hygiene station nearby with soap or sanitiser</li>
              </ul>
            </div>


            {/* Section 6 — Safe Walkways */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Keep Walkways Safe
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Clear floors of clutter, cables, and loose mats.</li>
                <li>Light the path to the washroom at night.</li>
                <li>Keep floors dry and non-slip.</li>
                <li>Keep frequently used items at waist height.</li>
              </ul>
            </div>


            {/* Section 7 — Daily Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. A Gentle Daily Routine
              </h2>


              <p className="text-gray-700 mb-4">
                Flexibility matters more than a strict schedule.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sleep when the baby sleeps, whenever possible.</li>
                <li>Eat regular meals and drink water.</li>
                <li>Take short, easy movement as your doctor advises.</li>
                <li>Keep a small window for fresh air and daylight.</li>
                <li>Accept visitors only when you feel ready.</li>
              </ul>
            </div>


            {/* Section 8 — Night Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Night Routine Tips
              </h2>


              <p className="text-gray-700 mb-4">
                Nights are the hardest part.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep night supplies ready before bedtime.</li>
                <li>Share night duties with a partner or family member where possible.</li>
                <li>Keep lights low and conversation calm.</li>
                <li>Keep your phone and doctor’s number within reach.</li>
              </ul>
            </div>


            {/* Section 9 — Food and Fluids */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Food and Fluids
              </h2>


              <p className="text-gray-700 mb-4">
                Advice must be personal.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask your doctor about food, fluids, and supplements.</li>
                <li>Keep easy, nourishing snacks nearby.</li>
                <li>Ask family to help with cooking.</li>
                <li>Avoid unverified remedies and crash diets.</li>
              </ul>
            </div>


            {/* Section 10 — Family Tasks */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Dividing Family Tasks
              </h2>


              <p className="text-gray-700 mb-4">
                Practical help matters most.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>One person handles meals and shopping.</li>
                <li>One person handles housework.</li>
                <li>One person supports baby care so the mother can rest.</li>
                <li>Agree who answers calls and manages visitors.</li>
              </ul>
            </div>


            {/* Section 11 — Visitors */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Managing Visitors
              </h2>


              <p className="text-gray-700 mb-4">
                Set simple rules about timing and hand-washing.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep visits short.</li>
                <li>Ask unwell visitors to wait.</li>
                <li>It is fine to say no.</li>
              </ul>
            </div>


            {/* Section 12 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Warning Signs After Delivery
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


            {/* Section 13 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Emotional Wellbeing
              </h2>


              <p className="text-gray-700 mb-4">
                Feelings can change after birth.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tiredness and mood swings can be common early on.</li>
                <li>Talk to someone you trust.</li>
                <li>Tell your doctor if low mood or anxiety lasts or worsens.</li>
                <li>Support and treatment are available.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                If you feel unsafe or have thoughts of harming yourself or your baby, seek immediate help.
              </p>
            </div>


            {/* Section 14 — Feeding Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Feeding Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask the hospital team about positions and latching before discharge.</li>
                <li>Seek help early if feeding is painful or difficult.</li>
                <li>Ask who to call after you go home.</li>
              </ul>
            </div>


            {/* Section 15 — Choosing Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Choosing a Postnatal Doctor
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


            {/* Section 16 — Verify Qualifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Verify Qualifications
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of experience in obstetrics and gynaecology</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Credentials can be verified through the council’s records.
              </p>
            </div>


            {/* Section 17 — Judge Communication */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Judge Communication
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Does the doctor listen without judgement?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions about mood and feeding too?</li>
                <li>Does the doctor avoid pressure or fear-based advice?</li>
              </ul>
            </div>


            {/* Section 18 — Prepare for Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. Preparing for the Postnatal Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note symptoms, bleeding pattern, and sleep.</li>
                <li>Bring your delivery summary and baby’s records.</li>
                <li>List medicines and supplements.</li>
                <li>Write down your questions.</li>
                <li>Arrange someone to hold the baby during examination.</li>
              </ul>
            </div>


            {/* Section 19 — Clinic Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. What a Good Clinic Environment Looks Like
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


            {/* Section 20 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                19. Understanding Costs
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation fee for each visit</li>
                <li>Test and medicine costs</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask for an itemised bill.
              </p>
            </div>


            {/* Section 21 — Red Flags */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Red Flags
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dismissing your concerns, including mood</li>
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>Poor privacy or hygiene</li>
              </ul>
            </div>


            {/* Section 22 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                21. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Skipping your own postnatal checkup</li>
                <li>Ignoring warning signs</li>
                <li>Hiding low mood</li>
                <li>Resuming heavy activity too soon</li>
                <li>Not arranging help at home</li>
                <li>Following unverified advice online</li>
              </ul>
            </div>


            {/* Section 23 — About Space Build */}
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
                For postnatal recovery homes and clinics, practical interior planning can support safe walkways, comfortable resting and feeding spaces, accessible baby-care corners, good lighting, and privacy. Clinical accuracy, qualified staff, equipment standards, and patient safety remain the responsibility of the clinic and medical team.
              </p>


              <p className="text-gray-700 mb-4">
                Space Build is based in Moradabad, Uttar Pradesh, and can be contacted through its website for interior planning and design consultation.
              </p>
            </div>


            {/* Section 24 — FAQs */}
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