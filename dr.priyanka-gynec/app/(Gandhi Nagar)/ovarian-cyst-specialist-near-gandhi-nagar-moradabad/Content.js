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


export default function OvarianCystSpecialistGandhiNagarMoradabad() {
  const faqs = [
    {
      q: "Are all ovarian cysts serious?",
      a: "No. Many are harmless, but a doctor must review your scan to say.",
    },
    {
      q: "Should I read my report online?",
      a: "Avoid drawing conclusions from searches. Ask your doctor to explain it.",
    },
    {
      q: "Why bring older scans?",
      a: "Comparison shows whether a cyst has changed.",
    },
    {
      q: "Does every cyst need surgery?",
      a: "No. Many are only monitored.",
    },
    {
      q: "What symptoms need urgent care?",
      a: "Sudden severe pain, fainting, fever, or vomiting need immediate attention.",
    },
    {
      q: "How do I verify a doctor’s credentials?",
      a: "Check the relevant medical council’s records and ask about training.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially before surgery or if you feel unsure.",
    },
    {
      q: "Where can I learn more about clinic planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
    },
    {
      q: "Can I self-diagnose an ovarian cyst from a scan report?",
      a: "No. Scan reports use technical language, and only a qualified doctor who knows your history can interpret them correctly.",
    },
    {
      q: "What should I bring to the consultation?",
      a: "Bring the latest report and images, earlier scans, a medicine list, period dates, and symptom notes.",
    },
    {
      q: "When should I repeat a scan?",
      a: "Only when your doctor advises it. Note the date, set a reminder, and keep every report in one dated folder.",
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
                Ovarian Cyst Specialist Near Gandhi Nagar, Moradabad: Preparing to Discuss Your Scan Report
              </h1>


              <p className="text-gray-700 mb-4">
                Many ovarian cysts are found on a scan done for another reason, and the report often contains unfamiliar words. Arriving at the doctor prepared helps you leave with clear answers instead of lingering worry.
              </p>


              <p className="text-gray-700 mb-4">
                This guide explains how to approach your report, what to ask, and how to choose a specialist. It is general information, not medical advice. It names no individual doctors, because I cannot verify or rank them, and only a qualified doctor can interpret your scan and recommend treatment.
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


            {/* Section 2 — What Is an Ovarian Cyst? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. What Is an Ovarian Cyst?
              </h2>


              <p className="text-gray-700 mb-4">
                It is a fluid-filled sac on or inside an ovary.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Cysts vary in size, type, and cause.</li>
                <li>Many are found by chance.</li>
                <li>Some relate to the normal monthly cycle.</li>
                <li>Others need closer follow-up.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Never self-diagnose from a report.
              </p>
            </div>


            {/* Section 3 — Urgent Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Urgent Signs
              </h2>


              <p className="text-gray-700 mb-4">
                Do not wait for an appointment if you have:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sudden severe abdominal or pelvic pain</li>
                <li>Fainting or dizziness</li>
                <li>Fever or persistent vomiting</li>
                <li>Heavy bleeding</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Go to an emergency facility immediately.
              </p>
            </div>


            {/* Section 4 — Why Reports Feel Confusing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. Why Reports Feel Confusing
              </h2>


              <p className="text-gray-700 mb-4">
                Scan reports use technical language.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Terms describe size, appearance, and position.</li>
                <li>Wording can sound alarming without being serious.</li>
                <li>Only a doctor who knows your history can interpret it.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Avoid searching individual words online and drawing conclusions.
              </p>
            </div>


            {/* Section 5 — Gather Everything */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. Gather Everything First
              </h2>


              <p className="text-gray-700 mb-4">
                Bring the full picture.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The latest report and any images</li>
                <li>Earlier scans for comparison</li>
                <li>A list of medicines and past conditions</li>
                <li>Your period dates and symptom notes</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Comparison with older scans is often very useful to the doctor.
              </p>
            </div>


            {/* Section 6 — Symptom Diary */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Keep a Symptom Diary
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Record period dates and flow.</li>
                <li>Note pain, its timing, and severity.</li>
                <li>Mark bloating, urinary changes, and tiredness.</li>
                <li>Note any link with your cycle.</li>
              </ul>
            </div>


            {/* Section 7 — Which Doctor to See */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Which Doctor to See
              </h2>


              <p className="text-gray-700 mb-4">
                A gynaecologist is usually the right starting point.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>They examine you and review the scan.</li>
                <li>They may refer you to a surgeon or another specialist if needed.</li>
              </ul>
            </div>


            {/* Section 8 — Questions About Report */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Questions to Ask About the Report
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What type of cyst is this, and how large is it?</li>
                <li>Does it need treatment now, or can it be monitored?</li>
                <li>Is anything in the report a concern, in plain words?</li>
                <li>Are more tests needed?</li>
                <li>When should the scan be repeated, and why?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Write the answers down, or take a companion.
              </p>
            </div>


            {/* Section 9 — Questions About Plan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Questions About the Plan
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What are my options, with benefits and risks?</li>
                <li>Which symptoms should make me call urgently?</li>
                <li>How could this affect future pregnancy plans?</li>
                <li>When is my next follow-up?</li>
                <li>What is the estimated cost?</li>
              </ul>
            </div>


            {/* Section 10 — Repeat Scans */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Tracking Repeat Scans
              </h2>


              <p className="text-gray-700 mb-4">
                Monitoring depends on dates.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note the date the doctor advises for the next scan.</li>
                <li>Set a phone reminder.</li>
                <li>Use the same scan centre if advised, so comparison is easier.</li>
                <li>Keep every report in one dated folder.</li>
              </ul>
            </div>


            {/* Section 11 — Not Every Cyst Needs Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Not Every Cyst Needs Surgery
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Watchful Monitoring:</strong> Repeat scans over time.</li>
                <li><strong>Medicines:</strong> To manage symptoms, where suitable.</li>
                <li><strong>Surgery:</strong> Considered for certain cysts or significant symptoms.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask why a particular option is advised for you.
              </p>
            </div>


            {/* Section 12 — Second Opinion */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Consider a Second Opinion
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It is sensible before any surgery.</li>
                <li>A good doctor will not be offended.</li>
                <li>Carry the same scans and reports to every visit.</li>
                <li>Never delay urgent care while seeking another opinion.</li>
              </ul>
            </div>


            {/* Section 13 — Shortlist Specialists */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. How to Shortlist Specialists
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


            {/* Section 14 — Verify Qualifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Verify Qualifications
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Experience with similar cases</li>
                <li>The hospital where surgery would take place, if needed</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Credentials can be verified through the council’s records.
              </p>
            </div>


            {/* Section 15 — Judge Communication */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Judge Communication
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Does the doctor explain your scan in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>Does the doctor discuss alternatives and avoid pressure?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                You should leave informed, not rushed.
              </p>
            </div>


            {/* Section 16 — Female or Male Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Female or Male Doctor
              </h2>


              <p className="text-gray-700 mb-4">
                This is a personal preference.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask when booking whether a female doctor is available.</li>
                <li>You can request a female staff member during examinations.</li>
              </ul>
            </div>


            {/* Section 17 — Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Privacy and Dignity
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation doors should not open onto the waiting area.</li>
                <li>Examination areas should be screened.</li>
                <li>Registration should not be overheard.</li>
                <li>Staff should explain what they are doing and ask before examining.</li>
              </ul>
            </div>


            {/* Section 18 — Clinic Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. What a Good Clinic Environment Looks Like
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Layout:</strong> A clear flow from reception to waiting to consultation.</li>
                <li><strong>Surfaces:</strong> Washable, non-porous materials that are easy to keep clean.</li>
                <li><strong>Lighting:</strong> Soft, glare-free light in waiting areas.</li>
                <li><strong>Sound:</strong> Rooms that keep conversations private.</li>
                <li><strong>Access:</strong> Step-free entry, wide doors, and accessible washrooms.</li>
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
                <li>Consultation fee</li>
                <li>Scan and test charges</li>
                <li>Procedure, hospital, and medicine costs if needed</li>
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
                <li>Pressure to book surgery immediately</li>
                <li>No clear explanation of your scan</li>
                <li>Dismissing questions or a second opinion</li>
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Unclear costs and unverifiable qualifications</li>
              </ul>
            </div>


            {/* Section 21 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Interpreting reports through online searches</li>
                <li>Ignoring severe or sudden pain</li>
                <li>Skipping repeat scans</li>
                <li>Self-medicating from online advice</li>
                <li>Not bringing earlier scans</li>
                <li>Missing follow-up visits</li>
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
                For gynaecology and ovarian cyst clinics, practical interior planning can support privacy, hygiene, accessibility, calm lighting, and a clear flow from reception to consultation. Clinical accuracy, qualified staff, equipment standards, and patient safety remain the responsibility of the clinic and medical team.
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