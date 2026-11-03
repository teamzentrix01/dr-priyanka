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


export default function PCOSSpecialistBuddhiViharMoradabad() {
  const faqs = [
    {
      q: "Is PCOS the same for everyone?",
      a: "No. Symptoms and care vary from person to person.",
    },
    {
      q: "Which doctor should I see first?",
      a: "A gynaecologist is usually a good starting point.",
    },
    {
      q: "Do I need a care team?",
      a: "Some women do. Your doctor will advise who is needed.",
    },
    {
      q: "How often are follow-ups needed?",
      a: "It depends on your case. Your doctor will set the schedule.",
    },
    {
      q: "Can lifestyle changes help?",
      a: "They are often part of care. Ask your doctor for personal advice.",
    },
    {
      q: "How do I verify a doctor’s credentials?",
      a: "Check the relevant medical council’s records and ask about training.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially if you feel unsure about the advice.",
    },
    {
      q: "Where can I learn more about clinic planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
    },
    {
      q: "Can PCOS affect fertility?",
      a: "PCOS can affect ovulation, but many women conceive with proper assessment, treatment, and lifestyle support.",
    },
    {
      q: "Should I stop medicines once my periods become regular?",
      a: "No. Never start or stop medicines without your doctor’s advice.",
    },
    {
      q: "What should I bring to my first PCOS consultation?",
      a: "Bring earlier reports, a cycle diary, a list of medicines, and notes on symptoms such as acne, hair changes, weight changes, and mood.",
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
                PCOS Specialist Near Buddhi Vihar, Moradabad: Building a Long-Term Care Team
              </h1>


              <p className="text-gray-700 mb-4">
                PCOS is usually a long-term condition, so one visit rarely settles everything. Good care means a doctor you trust, regular follow-up, and support that fits your daily life.
              </p>


              <p className="text-gray-700 mb-4">
                This guide focuses on choosing a specialist and building a care routine that lasts. It is general information, not medical advice. It names no individual doctors, because I cannot verify or rank them, and only a qualified doctor can diagnose you and advise treatment.
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


            {/* Section 2 — Why PCOS Needs Ongoing Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. Why PCOS Needs Ongoing Care
              </h2>


              <p className="text-gray-700 mb-4">
                PCOS is a common hormonal condition.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Symptoms vary widely between women.</li>
                <li>They can change over time.</li>
                <li>Care often involves regular review, not a single fix.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Never self-diagnose from symptoms alone.
              </p>
            </div>


            {/* Section 3 — Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Signs That May Prompt a Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular, delayed, or missed periods</li>
                <li>Acne, oily skin, or excess hair growth</li>
                <li>Thinning scalp hair</li>
                <li>Weight changes</li>
                <li>Difficulty conceiving</li>
              </ul>


              <p className="text-gray-700 mt-4">
                These can have other causes, so a doctor’s assessment matters.
              </p>
            </div>


            {/* Section 4 — Start with Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. Start with a Gynaecologist
              </h2>


              <p className="text-gray-700 mb-4">
                A gynaecologist is usually the first point of contact.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>They take your history and examine you.</li>
                <li>They advise tests and scans.</li>
                <li>They may involve other specialists.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Bring earlier reports and a cycle diary.
              </p>
            </div>


            {/* Section 5 — Care Team */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. Who Can Be in Your Care Team
              </h2>


              <p className="text-gray-700 mb-4">
                Depending on your needs, a team may include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Gynaecologist:</strong> Leads periods, ovulation, and fertility concerns.</li>
                <li><strong>Endocrinologist:</strong> Involved when hormonal or metabolic issues need closer review.</li>
                <li><strong>Dietitian:</strong> Gives personal food guidance.</li>
                <li><strong>Dermatologist:</strong> Helps with skin and hair concerns.</li>
                <li><strong>Counsellor or Mental Health Professional:</strong> Supports emotional wellbeing.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask your doctor who is needed in your case.
              </p>
            </div>


            {/* Section 6 — Shortlist Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. How to Shortlist a Specialist
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your family doctor or earlier gynaecologist</li>
                <li>Friends and relatives with similar experience</li>
                <li>Hospital and clinic listings</li>
                <li>Official medical council directories</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Aim for two or three names to compare.
              </p>
            </div>


            {/* Section 7 — Verify Qualifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Verify Qualifications
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Experience with PCOS and related concerns</li>
                <li>Willingness to coordinate with other specialists</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Credentials can be verified through the council’s records.
              </p>
            </div>


            {/* Section 8 — Judge Communication */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Judge Communication
              </h2>


              <p className="text-gray-700 mb-4">
                Long-term care depends on trust.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Does the doctor listen without judgement?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>Does the doctor avoid pressure or fear-based advice?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                You should leave feeling heard.
              </p>
            </div>


            {/* Section 9 — Female or Male Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Female or Male Doctor
              </h2>


              <p className="text-gray-700 mb-4">
                This is a personal preference.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask when booking whether a female doctor is available.</li>
                <li>You can request a female staff member during examinations.</li>
              </ul>
            </div>


            {/* Section 10 — Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Questions to Ask the Specialist
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What is my diagnosis based on?</li>
                <li>Which tests do I need, and why?</li>
                <li>What are my options, with benefits and risks?</li>
                <li>Which lifestyle changes may help me?</li>
                <li>How often should I follow up?</li>
                <li>What changes should make me call sooner?</li>
                <li>How does this affect my pregnancy plans?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Write the answers down, or take someone along.
              </p>
            </div>


            {/* Section 11 — Track Progress */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Track Your Progress
              </h2>


              <p className="text-gray-700 mb-4">
                Records show what is working.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note period dates and flow.</li>
                <li>Record symptoms such as acne, hair changes, and mood.</li>
                <li>Log weight changes, if your doctor advises.</li>
                <li>Keep a list of medicines and any side effects.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                A notebook or phone app is enough.
              </p>
            </div>


            {/* Section 12 — Follow-Ups */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Plan Your Follow-Ups
              </h2>


              <p className="text-gray-700 mb-4">
                Ask your doctor for a schedule.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>When to repeat tests or scans</li>
                <li>When to review medicines</li>
                <li>What to bring to each visit</li>
                <li>Who to call between visits</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Keep reports in one folder, arranged by date.
              </p>
            </div>


            {/* Section 13 — Daily Habits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Daily Habits
              </h2>


              <p className="text-gray-700 mb-4">
                Doctors often discuss habits alongside treatment.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Balanced, regular meals</li>
                <li>Regular activity you enjoy</li>
                <li>A steady sleep routine</li>
                <li>Stress management</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask your doctor or a qualified dietitian for personal guidance rather than following online plans.
              </p>
            </div>


            {/* Section 14 — Medicines */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Medicines and Safety
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Take medicines exactly as prescribed.</li>
                <li>Never start or stop medicines without advice.</li>
                <li>Report side effects promptly.</li>
                <li>Avoid unverified supplements and remedies.</li>
              </ul>
            </div>


            {/* Section 15 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Emotional Wellbeing
              </h2>


              <p className="text-gray-700 mb-4">
                PCOS can affect mood and confidence.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Talk to someone you trust.</li>
                <li>Tell your doctor if you feel low or anxious.</li>
                <li>Avoid comparing yourself with social media posts.</li>
                <li>Seek support if worry affects daily life.</li>
              </ul>
            </div>


            {/* Section 16 — Pregnancy Planning */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Planning for Pregnancy
              </h2>


              <p className="text-gray-700 mb-4">
                If you hope to conceive, discuss it early.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask about timing and preparation.</li>
                <li>Ask which checks or changes are advised.</li>
                <li>Ask when to seek further help.</li>
              </ul>
            </div>


            {/* Section 17 — Second Opinion */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Consider a Second Opinion
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It is acceptable if you feel unsure.</li>
                <li>A good doctor will not be offended.</li>
                <li>Compare explanations, not only prescriptions.</li>
                <li>Carry the same reports to each visit.</li>
              </ul>
            </div>


            {/* Section 18 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. Understanding Costs
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation fee and follow-up charges</li>
                <li>Test and scan costs</li>
                <li>Medicine and supplement costs</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask for an itemised bill.
              </p>
            </div>


            {/* Section 19 — Clinic Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. What a Good Clinic Environment Looks Like
              </h2>


              <p className="text-gray-700 mb-4">
                Regular visits are easier in a comfortable setting.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Privacy:</strong> Consultation doors do not open onto the waiting area, and registration is discreet.</li>
                <li><strong>Hygiene:</strong> Washable, non-porous surfaces and tidy rooms.</li>
                <li><strong>Comfort:</strong> Supportive seating, soft lighting, and short waits.</li>
                <li><strong>Access:</strong> Step-free entry, wide doors, and accessible washrooms.</li>
                <li><strong>Sound:</strong> Rooms that keep conversations private.</li>
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


            {/* Section 20 — Red Flags */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                19. Red Flags
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Dismissing your concerns</li>
                <li>No follow-up plan</li>
                <li>Unclear costs</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </div>


            {/* Section 21 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Stopping treatment when symptoms improve</li>
                <li>Skipping follow-up visits</li>
                <li>Self-medicating from online advice</li>
                <li>Relying on crash diets</li>
                <li>Not tracking symptoms</li>
                <li>Ignoring emotional health</li>
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
                For PCOS and women’s health clinics, practical interior planning can support privacy, hygiene, accessibility, calm lighting, comfortable seating, and discreet registration. Clinical accuracy, qualified staff, equipment standards, and patient safety remain the responsibility of the clinic and medical team.
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