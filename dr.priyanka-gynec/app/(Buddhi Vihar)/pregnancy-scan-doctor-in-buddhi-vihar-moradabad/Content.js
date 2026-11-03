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


export default function PregnancyScanDoctorBuddhiViharMoradabad() {
  const faqs = [
    {
      q: "Who decides which scan I need?",
      a: "Your obstetrician, based on your health and stage of pregnancy.",
    },
    {
      q: "Do I need a full bladder?",
      a: "It depends on the scan type. Ask when booking.",
    },
    {
      q: "Can I know the baby’s sex?",
      a: "No. Sex determination is prohibited by law in India.",
    },
    {
      q: "Can family come inside the scan room?",
      a: "Policies vary, so ask the centre when booking.",
    },
    {
      q: "Who explains my report?",
      a: "Your obstetrician should review it with you.",
    },
    {
      q: "What if the report shows something unexpected?",
      a: "Contact your doctor promptly and ask for clear next steps.",
    },
    {
      q: "How do I judge a scan centre?",
      a: "Check registration, qualified staff, privacy, hygiene, and clear charges.",
    },
    {
      q: "Where can I learn more about clinic planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
    },
    {
      q: "Is a pregnancy scan painful?",
      a: "Usually not. Tell the staff if you feel uncomfortable during the scan.",
    },
    {
      q: "Can I book a pregnancy scan without my doctor’s advice?",
      a: "No. Scan timing and type should be guided by your obstetrician.",
    },
    {
      q: "What should I check before leaving with the report?",
      a: "Check your name, age, and dates; confirm the report is signed by a qualified doctor; and ask whether images are included.",
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
                Pregnancy Scan Doctor in Buddhi Vihar, Moradabad: What Scan Day Looks Like and What Comes After
              </h1>


              <p className="text-gray-700 mb-4">
                A pregnancy scan is an emotional appointment, but it is also a medical test with a clear before and after. Knowing how the day unfolds, and what to do once you hold the report, keeps the experience calm.
              </p>


              <p className="text-gray-700 mb-4">
                This guide covers scan day step by step and how to judge a scan centre. It is general information, not medical advice. It names no individual doctors or centres, because I cannot verify or rank them, and only a qualified doctor can interpret your scan.
              </p>


              <p className="text-gray-700">
                <a
                  href="https://www.spacebuild.co.in/"
                  className="text-blue-600 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the sections on scan centre environment.
              </p>
            </div>


            {/* Section 2 — Start with Obstetrician */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. Start with Your Obstetrician
              </h2>


              <p className="text-gray-700 mb-4">
                Scans are advised by your doctor, not chosen on your own.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask which scan is needed and why.</li>
                <li>Ask when it should be done.</li>
                <li>Ask whether your doctor prefers a particular type of centre.</li>
                <li>Bring the prescription to the scan centre.</li>
              </ul>
            </div>


            {/* Section 3 — Who Performs Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Who Performs the Scan?
              </h2>


              <p className="text-gray-700 mb-4">
                Ask when booking.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A radiologist or sonologist with relevant training</li>
                <li>An obstetrician trained in ultrasound</li>
                <li>A trained technician working under supervision</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask who will report the scan, since the report should carry a qualified doctor’s signature.
              </p>
            </div>


            {/* Section 4 — Legal Points */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. Legal Points to Know
              </h2>


              <p className="text-gray-700 mb-4">
                Indian law restricts the use of scan information.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sex determination is prohibited and punishable.</li>
                <li>Registered centres display the required notices.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Be cautious of any centre that ignores these rules.
              </p>
            </div>


            {/* Section 5 — Choose Scan Centre */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. How to Choose a Scan Centre
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your obstetrician’s guidance</li>
                <li>Registration and certificates on display</li>
                <li>Qualified, named doctors</li>
                <li>Clean, private rooms</li>
                <li>Clear charges and report timelines</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Visit or call before booking.
              </p>
            </div>


            {/* Section 6 — Booking Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Questions to Ask When Booking
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Is the scan my doctor advised done here?</li>
                <li>Do I need to prepare, such as a full bladder?</li>
                <li>What are the charges, and what do they include?</li>
                <li>How long is the usual wait?</li>
                <li>Can a family member come inside?</li>
                <li>When and how is the report given?</li>
              </ul>
            </div>


            {/* Section 7 — Day Before */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. The Day Before
              </h2>


              <p className="text-gray-700 mb-4">
                Small steps reduce stress.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep the prescription and earlier reports ready.</li>
                <li>Follow any preparation instructions exactly.</li>
                <li>Choose loose, easy-to-change clothing.</li>
                <li>Plan transport and a companion.</li>
                <li>Note any questions for your doctor.</li>
              </ul>
            </div>


            {/* Section 8 — Arrival */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Arrival and Registration
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Arrive a little early.</li>
                <li>Carry ID, prescription, and previous scans.</li>
                <li>Share only the details required.</li>
                <li>Ask for privacy if registration feels crowded.</li>
              </ul>
            </div>


            {/* Section 9 — Waiting Area */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Waiting Area
              </h2>


              <p className="text-gray-700 mb-4">
                Waits can be long, so comfort matters.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Supportive seating with armrests</li>
                <li>Drinking water and nearby washrooms</li>
                <li>Space for companions and elders</li>
                <li>A token or display system to manage queues</li>
              </ul>
            </div>


            {/* Section 10 — Inside Scan Room */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Inside the Scan Room
              </h2>


              <p className="text-gray-700 mb-4">
                The team will guide you.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>You lie on a couch, and gel is applied to your abdomen.</li>
                <li>The doctor moves a probe and watches a screen.</li>
                <li>Some early scans may use an internal probe, only if your doctor advises.</li>
                <li>Tell staff if you feel uncomfortable.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Scans are usually painless.
              </p>
            </div>


            {/* Section 11 — Bringing Family */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Bringing Family
              </h2>


              <p className="text-gray-700 mb-4">
                Policies vary, so ask in advance.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Some centres allow one companion inside.</li>
                <li>Others ask family to wait outside.</li>
                <li>Ask whether children may attend.</li>
                <li>Respect privacy rules for other patients.</li>
              </ul>
            </div>


            {/* Section 12 — Questions During Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Asking Questions During the Scan
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask the sonologist to explain what is being checked.</li>
                <li>Understand that detailed interpretation belongs to your obstetrician.</li>
                <li>Avoid pressing for information the law does not allow.</li>
              </ul>
            </div>


            {/* Section 13 — Collecting Report */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Collecting the Report
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Check that your name, age, and dates are correct.</li>
                <li>Confirm a qualified doctor has signed it.</li>
                <li>Ask whether images are included.</li>
                <li>Keep a photo copy on your phone.</li>
              </ul>
            </div>


            {/* Section 14 — Follow-Up */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. After the Scan: Follow-Up
              </h2>


              <p className="text-gray-700 mb-4">
                The report is a starting point for your doctor.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Take it to your obstetrician promptly.</li>
                <li>Do not interpret technical terms through internet searches.</li>
                <li>Ask what any unusual wording means for you.</li>
                <li>Ask whether further tests or scans are needed.</li>
              </ul>
            </div>


            {/* Section 15 — Unexpected Findings */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. If Something Unexpected Appears
              </h2>


              <p className="text-gray-700 mb-4">
                Stay calm and ask clear questions.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask your doctor to explain in plain language.</li>
                <li>Ask what the next step is and how soon.</li>
                <li>Consider a second opinion if you feel unsure.</li>
                <li>Ask for emotional support if needed.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Never delay follow-up out of fear.
              </p>
            </div>


            {/* Section 16 — Second Opinion */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Consider a Second Opinion
              </h2>


              <p className="text-gray-700 mb-4">
                It is acceptable if you feel unsure about a finding.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask your obstetrician first, since they know your history.</li>
                <li>Carry earlier reports and images to any new visit.</li>
              </ul>
            </div>


            {/* Section 17 — Emotional Side */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Emotional Side of Scans
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bring someone you trust.</li>
                <li>Tell staff if you feel nervous.</li>
                <li>Limit alarming online reading.</li>
                <li>Speak to your doctor about any anxiety.</li>
              </ul>
            </div>


            {/* Section 18 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. Understanding Costs
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Charges for each type of scan</li>
                <li>Fees for extra copies or images</li>
                <li>Charges for repeat scans</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask for an itemised receipt.
              </p>
            </div>


            {/* Section 19 — Scan Centre Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. What a Good Scan Centre Looks Like
              </h2>


              <p className="text-gray-700 mb-4">
                Design supports comfort and calm.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Waiting Area:</strong> Supportive seating, soft lighting, and short waits.</li>
                <li><strong>Scan Room:</strong> Dimmable lighting, a comfortable couch, and a private changing corner.</li>
                <li><strong>Privacy:</strong> Solid doors, curtains, and discreet registration.</li>
                <li><strong>Hygiene:</strong> Washable, non-porous surfaces and fresh couch covers.</li>
                <li><strong>Access:</strong> Step-free entry, wide doors, lift access, and accessible washrooms.</li>
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
                focus on these elements when designing healthcare interiors. Clinical and legal standards remain the responsibility of the medical team and the centre.
              </p>
            </div>


            {/* Section 20 — Red Flags */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                19. Red Flags
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Willingness to disclose the baby’s sex</li>
                <li>Missing registration or certificates</li>
                <li>Reports without a qualified doctor’s signature</li>
                <li>Pressure to buy packages or extra scans</li>
                <li>Poor privacy or hygiene</li>
                <li>Unclear charges</li>
              </ul>
            </div>


            {/* Section 21 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Booking scans without your doctor’s advice</li>
                <li>Interpreting reports through online searches</li>
                <li>Ignoring preparation instructions</li>
                <li>Choosing only by the lowest price</li>
                <li>Skipping follow-up with your obstetrician</li>
                <li>Not asking about charges beforehand</li>
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
                For pregnancy scan centres, practical interior planning can support privacy, hygiene, accessibility, calm lighting, comfortable waiting areas, and discreet registration. Clinical accuracy, qualified staff, equipment standards, and legal compliance remain the responsibility of the scan centre and medical team.
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