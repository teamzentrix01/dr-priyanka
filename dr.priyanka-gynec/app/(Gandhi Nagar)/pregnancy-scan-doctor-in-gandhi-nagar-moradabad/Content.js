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


export default function PregnancyScanDoctorGandhiNagarMoradabad() {
  const faqs = [
    {
      q: "How many scans will I need?",
      a: "Your obstetrician decides based on your health and pregnancy.",
    },
    {
      q: "Do I need a full bladder?",
      a: "It depends on the scan type and timing. Ask when booking.",
    },
    {
      q: "Can I know the baby’s sex?",
      a: "No. Sex determination is prohibited by law in India.",
    },
    {
      q: "Who explains my report?",
      a: "Your obstetrician should review it with you.",
    },
    {
      q: "How should I keep scan records?",
      a: "Use one dated folder and keep photo copies on your phone.",
    },
    {
      q: "Can family come inside the scan room?",
      a: "Policies vary, so ask the centre when booking.",
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
                Pregnancy Scan Doctor Near Gandhi Nagar, Moradabad: A Stage-Wise Guide to Scans and Record Keeping
              </h1>


              <p className="text-gray-700 mb-4">
                Pregnancy scans happen at different points for different reasons. Knowing the general pattern helps you ask better questions and prepare properly each time.
              </p>


              <p className="text-gray-700 mb-4">
                This guide gives a broad overview, tips for keeping records, and a checklist for choosing a scan centre. It is general information, not medical advice. It names no individual doctors or centres, because I cannot verify or rank them, and only your obstetrician decides which scans you need and when.
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


            {/* Section 2 — Scans Advised by Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. Scans Are Advised by Your Doctor
              </h2>


              <p className="text-gray-700 mb-4">
                Never book scans on your own.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask which scan is needed and why.</li>
                <li>Ask when it should be done.</li>
                <li>Bring the prescription to the centre.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Schedules differ for every pregnancy.
              </p>
            </div>


            {/* Section 3 — Early Pregnancy Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Early Pregnancy Scan
              </h2>


              <p className="text-gray-700 mb-4">
                Often advised in the early weeks.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It may confirm the pregnancy and its position.</li>
                <li>It may help estimate the stage of pregnancy.</li>
                <li>Some early scans use an internal probe, only if your doctor advises.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask whether you need a full bladder.
              </p>
            </div>


            {/* Section 4 — First Trimester Screening */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. First Trimester Screening Scan
              </h2>


              <p className="text-gray-700 mb-4">
                Some doctors advise a scan in the later part of the first trimester.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It looks at the baby’s early development.</li>
                <li>It may be combined with blood tests.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Your doctor explains what it can and cannot show.
              </p>
            </div>


            {/* Section 5 — Anatomy Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. Detailed Anatomy Scan
              </h2>


              <p className="text-gray-700 mb-4">
                Usually advised in the middle of pregnancy.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It examines the baby’s development closely.</li>
                <li>It takes longer than a routine scan.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask in advance how long to expect and whether to bring a companion.
              </p>
            </div>


            {/* Section 6 — Growth Scans */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Growth and Wellbeing Scans
              </h2>


              <p className="text-gray-700 mb-4">
                Advised later when needed.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>They check the baby’s size and growth.</li>
                <li>They may check fluid and the placenta.</li>
                <li>Doppler scans are used only in specific situations.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Your doctor decides the number and timing.
              </p>
            </div>


            {/* Section 7 — Legal Points */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Legal Points to Know
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


            {/* Section 8 — Choosing Centre */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Choosing a Scan Centre
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your obstetrician’s guidance</li>
                <li>Registration and certificates on display</li>
                <li>Qualified, named doctors</li>
                <li>Clean, private rooms</li>
                <li>Clear charges and report timelines</li>
              </ul>
            </div>


            {/* Section 9 — Who Performs and Reports */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Who Performs and Reports
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A radiologist or sonologist with relevant training</li>
                <li>An obstetrician trained in ultrasound</li>
                <li>A technician working under supervision</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask who will sign the report. It should carry a qualified doctor’s signature.
              </p>
            </div>


            {/* Section 10 — Questions for Centre */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Questions to Ask the Centre
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Is my doctor’s advised scan done here?</li>
                <li>How should I prepare?</li>
                <li>What are the charges, and what do they include?</li>
                <li>How long is the wait?</li>
                <li>Can family come inside?</li>
                <li>When and how is the report given?</li>
              </ul>
            </div>


            {/* Section 11 — Preparing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Preparing for Each Scan
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep the prescription and earlier reports ready.</li>
                <li>Follow preparation instructions exactly.</li>
                <li>Wear loose, easy-to-change clothing.</li>
                <li>Plan transport and a companion.</li>
                <li>Note questions for your doctor.</li>
              </ul>
            </div>


            {/* Section 12 — On the Day */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. On the Day
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Arrive a little early.</li>
                <li>Carry ID, prescription, and previous scans.</li>
                <li>Share only the details required.</li>
                <li>Tell staff if you feel uncomfortable.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Scans are usually painless.
              </p>
            </div>


            {/* Section 13 — Collecting Report */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Collecting the Report
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Check name, age, and dates.</li>
                <li>Confirm a qualified doctor has signed.</li>
                <li>Ask whether images are included.</li>
                <li>Photograph the report for your phone.</li>
              </ul>
            </div>


            {/* Section 14 — Organise Records */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Keep Scan Records Organised
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>One folder, arranged by date</li>
                <li>A label on each report with date and scan type</li>
                <li>Photo copies on your phone</li>
                <li>Carry the folder to every antenatal visit</li>
              </ul>
            </div>


            {/* Section 15 — After Each Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. After Each Scan
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Take the report to your obstetrician promptly.</li>
                <li>Do not interpret technical terms through internet searches.</li>
                <li>Ask what any unusual wording means for you.</li>
                <li>Ask whether further tests or scans are needed.</li>
              </ul>
            </div>


            {/* Section 16 — Unexpected Findings */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. If Something Unexpected Appears
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask your doctor to explain in plain language.</li>
                <li>Ask what the next step is and how soon.</li>
                <li>Consider a second opinion if you feel unsure.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Never delay follow-up out of fear.
              </p>
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
                <li>Speak to your doctor about anxiety.</li>
              </ul>
            </div>


            {/* Section 18 — Scan Centre Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. What a Good Scan Centre Looks Like
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Waiting Area:</strong> Supportive seating, soft lighting, and short waits.</li>
                <li><strong>Scan Room:</strong> Dimmable lighting, a comfortable couch, and a private changing corner.</li>
                <li><strong>Privacy:</strong> Solid doors, curtains, and discreet registration.</li>
                <li><strong>Hygiene:</strong> Washable, non-porous surfaces and fresh couch covers.</li>
                <li><strong>Access:</strong> Step-free entry, wide doors, lift access, and accessible washrooms.</li>
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


            {/* Section 19 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. Understanding Costs
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
                <li>Losing earlier reports</li>
                <li>Skipping follow-up with your obstetrician</li>
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