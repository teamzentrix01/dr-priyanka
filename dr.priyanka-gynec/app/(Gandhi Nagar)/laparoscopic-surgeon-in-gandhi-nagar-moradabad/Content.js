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


export default function LaparoscopicSurgeonGandhiNagarMoradabad() {
  const faqs = [
    {
      q: "Is laparoscopic surgery suitable for everyone?",
      a: "No. Your doctor decides based on your condition and health.",
    },
    {
      q: "Why keep a recovery diary?",
      a: "It helps you notice trends and gives your surgeon clear information.",
    },
    {
      q: "What should I record?",
      a: "Pain, medicines, wound checks your surgeon advised, eating, energy, and questions.",
    },
    {
      q: "When should I call the surgeon?",
      a: "For fever, severe pain, heavy bleeding, or wound changes. Ask for your personal list.",
    },
    {
      q: "How do I verify a surgeon’s qualifications?",
      a: "Check the relevant medical council’s records and ask about training.",
    },
    {
      q: "Is a second opinion necessary?",
      a: "Not mandatory, but sensible before surgery.",
    },
    {
      q: "Should I attend follow-up if I feel well?",
      a: "Yes, unless your surgeon says otherwise.",
    },
    {
      q: "Where can I learn more about hospital planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
    },
    {
      q: "Can a laparoscopic procedure change to open surgery?",
      a: "Sometimes. Your surgeon may switch to open surgery if it is safer for your situation.",
    },
    {
      q: "What should I ask before leaving the hospital?",
      a: "Ask for a discharge summary, medicine schedule, wound-care instructions, activity limits, diet advice, follow-up date, and emergency contact details.",
    },
    {
      q: "How should I organise my recovery records?",
      a: "Keep one folder arranged by date, with reports, bills, insurance papers, and photo copies on your phone.",
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
                Laparoscopic Surgeon in Gandhi Nagar, Moradabad: A Home Recovery Diary and Follow-Up Planner
              </h1>


              <p className="text-gray-700 mb-4">
                Choosing a surgeon is only the start. Recovery at home is where many questions arise, and a simple diary helps you notice changes and give your surgeon clear information.
              </p>


              <p className="text-gray-700 mb-4">
                This guide covers how to choose a surgeon and how to track recovery. It is general information, not medical advice. It names no individual doctors or hospitals, because I cannot verify or rank them, and only your own surgeon can tell you what is normal for your procedure and when to seek help.
              </p>


              <p className="text-gray-700">
                <a
                  href="https://www.spacebuild.co.in/"
                  className="text-blue-600 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the sections on hospital and home environment.
              </p>
            </div>


            {/* Section 2 — What Is Laparoscopic Surgery? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. What Is Laparoscopic Surgery?
              </h2>


              <p className="text-gray-700 mb-4">
                It is a minimally invasive technique, often called keyhole surgery.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A few small cuts are made instead of one large one.</li>
                <li>A thin camera and fine instruments are passed through them.</li>
                <li>The surgeon works while watching a screen.</li>
                <li>It is used for selected abdominal and pelvic conditions.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Your doctor decides whether it suits your condition.
              </p>
            </div>


            {/* Section 3 — Benefits and Limits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Possible Benefits and Limits
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Smaller cuts and often less visible scarring</li>
                <li>Often a shorter stay and quicker return to routine</li>
                <li>Not every condition can be treated this way</li>
                <li>The surgeon may need to switch to open surgery if required</li>
                <li>Anaesthesia, bleeding, and other surgical risks still apply</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask what applies to your case.
              </p>
            </div>


            {/* Section 4 — Choosing Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. Choosing a Surgeon
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your family doctor or treating specialist</li>
                <li>Friends and relatives with similar experience</li>
                <li>Hospital listings</li>
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
                <li>Recognised surgical degree and training</li>
                <li>Registration with the relevant medical council</li>
                <li>Specific training in laparoscopic techniques</li>
                <li>Experience with your type of procedure</li>
                <li>The hospital where surgery would take place</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Credentials can be verified through the council’s records.
              </p>
            </div>


            {/* Section 6 — Questions Before Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Questions to Ask Before Surgery
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Why do I need surgery, and why this method?</li>
                <li>What other options exist?</li>
                <li>What are the risks in my case?</li>
                <li>What would make you switch to open surgery?</li>
                <li>How long are the stay and recovery?</li>
                <li>What does follow-up include?</li>
                <li>What is the total estimated cost?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                A second opinion is sensible before surgery, and a good surgeon will not be offended.
              </p>
            </div>


            {/* Section 7 — Recovery Diary */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Why Keep a Recovery Diary
              </h2>


              <p className="text-gray-700 mb-4">
                Notes help in many ways.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>You notice trends, not just single bad moments.</li>
                <li>Your surgeon gets clear, factual information.</li>
                <li>You feel more in control during recovery.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Record facts. Do not try to diagnose yourself.
              </p>
            </div>


            {/* Section 8 — Before Leaving Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Before You Leave the Hospital
              </h2>


              <p className="text-gray-700 mb-4">
                Ask for these and write them down.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A written discharge summary</li>
                <li>Medicines, doses, and timings</li>
                <li>Wound care instructions</li>
                <li>Activity limits and when they change</li>
                <li>Diet and fluid advice</li>
                <li>The follow-up date</li>
                <li>Who to call, and at what hours</li>
              </ul>
            </div>


            {/* Section 9 — Set Up Diary */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Set Up Your Diary
              </h2>


              <p className="text-gray-700 mb-4">
                A notebook or phone note is enough.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>One page per day</li>
                <li>Date and time of each entry</li>
                <li>The same headings daily, so it stays quick</li>
              </ul>
            </div>


            {/* Section 10 — Daily Records */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. What to Record Daily
              </h2>


              <p className="text-gray-700 mb-4">
                Ask your surgeon which items matter for you.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pain level and where it is felt</li>
                <li>Medicines taken, with times</li>
                <li>Wound appearance, as your surgeon advised you to check</li>
                <li>Eating, drinking, and bowel or bladder habits</li>
                <li>Energy, sleep, and mood</li>
                <li>Activity done, such as short walks</li>
                <li>Questions that came to mind</li>
              </ul>
            </div>


            {/* Section 11 — Wound Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Wound Care Notes
              </h2>


              <p className="text-gray-700 mb-4">
                Follow the instructions exactly.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep the area clean and dry as advised.</li>
                <li>Do not apply creams or home remedies without asking.</li>
                <li>Note any change you were told to watch for.</li>
              </ul>
            </div>


            {/* Section 12 — Medicine Log */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Medicine Log
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tick off each dose.</li>
                <li>Note side effects.</li>
                <li>Never stop or change a medicine without asking your surgeon.</li>
              </ul>
            </div>


            {/* Section 13 — Activity and Rest */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Activity and Rest
              </h2>


              <p className="text-gray-700 mb-4">
                Recovery differs from person to person.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Take short walks if your surgeon advises.</li>
                <li>Rest when tired.</li>
                <li>Ask when driving, lifting, and exercise are safe.</li>
                <li>Accept help with housework.</li>
              </ul>
            </div>


            {/* Section 14 — When to Call */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Know When to Call
              </h2>


              <p className="text-gray-700 mb-4">
                Ask your surgeon to list these for your case. Commonly discussed reasons include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Fever</li>
                <li>Severe or worsening pain</li>
                <li>Heavy bleeding</li>
                <li>Redness, swelling, or discharge from a wound</li>
                <li>Persistent vomiting</li>
                <li>Calf pain or swelling, chest pain, or breathlessness</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Contact your surgeon or go to hospital promptly if these occur.
              </p>
            </div>


            {/* Section 15 — Follow-Up Planner */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Follow-Up Planner
              </h2>


              <p className="text-gray-700 mb-4">
                Do not skip follow-up when you feel better.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note the follow-up date and set a phone reminder.</li>
                <li>Bring the diary, discharge summary, and medicine list.</li>
                <li>Write your questions in order of importance.</li>
                <li>Ask what the surgeon will review and when results will arrive.</li>
              </ul>
            </div>


            {/* Section 16 — Organise Records */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Organise Your Records
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>One folder, arranged by date</li>
                <li>Photo copies on your phone</li>
                <li>Reports, bills, and insurance papers together</li>
              </ul>
            </div>


            {/* Section 17 — Home Setup */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Home Setup for Recovery
              </h2>


              <p className="text-gray-700 mb-4">
                Keep essentials within easy reach.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Arrange a comfortable resting spot near a washroom.</li>
                <li>Keep walkways clear, well lit, and non-slip.</li>
                <li>Stock simple, easy meals.</li>
              </ul>
            </div>


            {/* Section 18 — Hospital Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. What a Good Hospital Environment Looks Like
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Hygiene:</strong> Washable, non-porous surfaces and tidy rooms.</li>
                <li><strong>Privacy:</strong> Curtains or partitions and quiet waiting areas.</li>
                <li><strong>Access:</strong> Step-free entry, wide doors for stretchers, and accessible washrooms.</li>
                <li><strong>Comfort:</strong> Supportive seating, soft lighting, and good ventilation.</li>
                <li><strong>Order:</strong> Clear signs, and a clear discharge and billing process.</li>
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
                <li>Surgeon, hospital, and anaesthesia fees</li>
                <li>Room charges and consumables</li>
                <li>Tests, medicines, and follow-up visits</li>
                <li>Insurance coverage and claim process</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Request a written estimate and keep all receipts.
              </p>
            </div>


            {/* Section 20 — Red Flags */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                19. Red Flags
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pressure to book surgery immediately</li>
                <li>Guaranteed results or unrealistic promises</li>
                <li>Dismissing questions or second opinions</li>
                <li>No clear discharge or follow-up plan</li>
                <li>Unclear costs and unverifiable qualifications</li>
              </ul>
            </div>


            {/* Section 21 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Leaving the hospital without written instructions</li>
                <li>Ignoring warning signs</li>
                <li>Stopping medicines without advice</li>
                <li>Skipping follow-up visits</li>
                <li>Resuming heavy activity too soon</li>
                <li>Relying on online advice instead of the surgeon</li>
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
                For hospitals and recovery spaces, practical interior planning can support hygiene, privacy, accessibility, calm lighting, clear signage, and safe movement. Clinical accuracy, qualified staff, equipment standards, and patient safety remain the responsibility of the hospital and medical team.
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