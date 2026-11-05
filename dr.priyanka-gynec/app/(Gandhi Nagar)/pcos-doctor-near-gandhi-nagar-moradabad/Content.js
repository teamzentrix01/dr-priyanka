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


export default function PCOSDoctorGandhiNagarMoradabad() {
  const faqs = [
    {
      q: "Can women with PCOS become pregnant?",
      a: "Many do, but it varies. Your doctor can advise on your situation.",
    },
    {
      q: "Should I see a doctor before trying?",
      a: "A preconception visit is often helpful.",
    },
    {
      q: "Why track cycles?",
      a: "It gives your doctor a clear picture of your pattern.",
    },
    {
      q: "Can lifestyle changes help?",
      a: "They are often part of care. Ask your doctor for personal advice.",
    },
    {
      q: "When should I seek more help?",
      a: "Ask your doctor for a personal timeline rather than waiting without guidance.",
    },
    {
      q: "How do I verify a doctor’s credentials?",
      a: "Check the relevant medical council’s records and ask about training.",
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
      q: "Can I self-diagnose PCOS from symptoms alone?",
      a: "No. A doctor diagnoses PCOS using your history, examination, and tests.",
    },
    {
      q: "Should my partner attend the consultation?",
      a: "Planning works best as a shared effort. Attend together when comfortable and ask whether partner checks are advised.",
    },
    {
      q: "Should I stop medicines before pregnancy?",
      a: "No. Do not start or stop medicines or supplements without medical advice.",
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
                PCOS Doctor Near Gandhi Nagar, Moradabad: Planning a Pregnancy with PCOS
              </h1>


              <p className="text-gray-700 mb-4">
                PCOS can make periods unpredictable, so many women worry about whether and when they can conceive. The good news is that planning with a doctor’s guidance helps you understand your own situation.
              </p>


              <p className="text-gray-700 mb-4">
                This guide covers how to prepare, what to ask, and how to choose a doctor. It is general information, not medical advice. It names no individual doctors, because I cannot verify or rank them, and only a qualified doctor can diagnose you and advise on fertility and treatment.
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


            {/* Section 2 — What Is PCOS? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. What Is PCOS?
              </h2>


              <p className="text-gray-700 mb-4">
                PCOS stands for polycystic ovary syndrome, a common hormonal condition.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It can affect periods, ovulation, and hormone levels.</li>
                <li>Symptoms vary widely between women.</li>
                <li>A doctor diagnoses it using history, examination, and tests.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Never self-diagnose from symptoms alone.
              </p>
            </div>


            {/* Section 3 — Why Plan Before Conceiving */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Why Plan Before Conceiving
              </h2>


              <p className="text-gray-700 mb-4">
                A preconception visit gives you clarity.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your doctor reviews your health and medicines.</li>
                <li>You learn what to expect with your cycles.</li>
                <li>You can address concerns before pregnancy begins.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Do not start or stop medicines or supplements without medical advice.
              </p>
            </div>


            {/* Section 4 — Choosing a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. Choosing a Doctor
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


            {/* Section 5 — Verify Qualifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. Verify Qualifications
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Experience with PCOS and fertility-related concerns</li>
                <li>Willingness to refer to other specialists when needed</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Credentials can be verified through the council’s records.
              </p>
            </div>


            {/* Section 6 — Judge Communication */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Judge Communication
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Does the doctor listen without judgement?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions and avoid pressure?</li>
                <li>Does the doctor involve your partner if you wish?</li>
              </ul>
            </div>


            {/* Section 7 — Female or Male Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Female or Male Doctor
              </h2>


              <p className="text-gray-700 mb-4">
                This is a personal preference.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask when booking whether a female doctor is available.</li>
                <li>You can request a female staff member during examinations.</li>
              </ul>
            </div>


            {/* Section 8 — Track Cycles */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Track Your Cycles
              </h2>


              <p className="text-gray-700 mb-4">
                Records help the doctor greatly.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note the first day of each period.</li>
                <li>Record cycle length and flow.</li>
                <li>Mark symptoms such as pain, acne, and mood changes.</li>
                <li>Note any tests or treatments already tried.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                A notebook or phone app is enough. Ask your doctor whether other tracking would help in your case.
              </p>
            </div>


            {/* Section 9 — Gather History */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Gather Your History
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Age and how long you have been trying, if at all</li>
                <li>Past cycle pattern and earlier reports</li>
                <li>Current medicines and supplements</li>
                <li>Past illnesses, surgeries, or pregnancies</li>
                <li>Relevant family health history</li>
              </ul>
            </div>


            {/* Section 10 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Questions to Ask the Doctor
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What does my PCOS mean for pregnancy planning?</li>
                <li>Which tests do I need before trying?</li>
                <li>Should my medicines or supplements change?</li>
                <li>Which lifestyle changes may help me?</li>
                <li>How long should we try before seeking more help?</li>
                <li>When should I return for follow-up?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Write the answers down, or take someone along.
              </p>
            </div>


            {/* Section 11 — Tests */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Tests You May Be Advised
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Blood tests</li>
                <li>Ultrasound scans</li>
                <li>Other checks, depending on your case</li>
                <li>Tests for your partner, if your doctor advises</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask what each test will show.
              </p>
            </div>


            {/* Section 12 — Partner */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Involving Your Partner
              </h2>


              <p className="text-gray-700 mb-4">
                Planning works best as a shared effort.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Share what the doctor explains.</li>
                <li>Attend visits together when comfortable.</li>
                <li>Discuss expectations and feelings openly.</li>
                <li>Ask whether any checks for your partner are advised.</li>
              </ul>
            </div>


            {/* Section 13 — Daily Habits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Daily Habits
              </h2>


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


            {/* Section 14 — When to Seek Help */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. When to Seek More Help
              </h2>


              <p className="text-gray-700 mb-4">
                Ask your doctor for a personal timeline.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>How long to try before further evaluation</li>
                <li>Which signs suggest earlier review</li>
                <li>When referral to a fertility specialist may help</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Do not wait out of worry or embarrassment.
              </p>
            </div>


            {/* Section 15 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Emotional Wellbeing
              </h2>


              <p className="text-gray-700 mb-4">
                Planning can be stressful.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Talk to someone you trust.</li>
                <li>Tell your doctor if you feel low or anxious.</li>
                <li>Avoid comparing your journey with others.</li>
                <li>Seek counselling if worry affects daily life.</li>
              </ul>
            </div>


            {/* Section 16 — Avoid Unverified Remedies */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Avoid Unverified Remedies
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Be cautious of guaranteed fertility claims.</li>
                <li>Avoid unprescribed supplements and herbal products.</li>
                <li>Check any plan with your doctor first.</li>
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
                <li>Carry the same reports to each visit.</li>
              </ul>
            </div>


            {/* Section 18 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. Understanding Costs
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation and follow-up fees</li>
                <li>Test and scan charges</li>
                <li>Medicine costs</li>
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
                <li>Guaranteed pregnancy or cure claims</li>
                <li>Pressure to buy packages or products</li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>Poor privacy or hygiene</li>
              </ul>
            </div>


            {/* Section 21 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Waiting years without a medical review</li>
                <li>Self-medicating from online advice</li>
                <li>Stopping treatment without asking the doctor</li>
                <li>Ignoring emotional health</li>
                <li>Skipping follow-up visits</li>
                <li>Not tracking cycles</li>
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
                For PCOS and fertility clinics, practical interior planning can support privacy, hygiene, accessibility, calm lighting, comfortable seating, and discreet registration. Clinical accuracy, qualified staff, equipment standards, and patient safety remain the responsibility of the clinic and medical team.
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