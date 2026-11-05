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


export default function TopLadyDoctorGandhiNagarMoradabad() {
  const faqs = [
    {
      q: "Why stay with one lady doctor?",
      a: "She learns your history, which helps her notice changes and advise you better.",
    },
    {
      q: "How do I choose a lady doctor for the long term?",
      a: "Check qualifications, communication, clinic quality, timings, and costs, and meet her before committing.",
    },
    {
      q: "How do I verify a doctor’s credentials?",
      a: "Look up the relevant medical council’s records and ask about training.",
    },
    {
      q: "Should I keep my own records?",
      a: "Yes. A simple dated folder and a one-page summary help any doctor.",
    },
    {
      q: "How often should I have check-ups?",
      a: "Your doctor will advise based on your age and history.",
    },
    {
      q: "Can I still get a second opinion?",
      a: "Yes, especially before surgery or if you feel unsure.",
    },
    {
      q: "When should I change doctors?",
      a: "When you feel unheard or privacy, hygiene, or costs become a concern.",
    },
    {
      q: "Where can I learn more about clinic planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
    },
    {
      q: "Can a long-term doctor see me through different life stages?",
      a: "Yes. A gynaecologist can often support care through teenage years, adulthood, pregnancy, postnatal recovery, and menopause.",
    },
    {
      q: "What should I bring to every appointment?",
      a: "Bring your health folder, medicine list, allergy details, previous reports, and a list of questions.",
    },
    {
      q: "Can I disagree with my doctor?",
      a: "Yes. Ask for an explanation, request a second opinion if unsure, but never delay urgent care while deciding.",
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
                Top Lady Doctor in Gandhi Nagar, Moradabad: Building a Long-Term Relationship with Your Doctor
              </h1>


              <p className="text-gray-700 mb-4">
                The most useful doctor is often the one who knows your history. Seeing the same lady doctor over the years means you do not repeat your story each time, and she can notice changes early.
              </p>


              <p className="text-gray-700 mb-4">
                This guide explains how to build that relationship, keep records, and plan regular check-ups. It is general information, not medical advice. It names no individual doctors, because I cannot verify or rank them, and only a qualified doctor can diagnose you or advise treatment.
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


            {/* Section 2 — Why Continuity Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. Why Continuity Matters
              </h2>


              <p className="text-gray-700 mb-4">
                Staying with one doctor has real benefits.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>She learns your history and patterns.</li>
                <li>Small changes are easier to notice.</li>
                <li>You feel more comfortable asking questions.</li>
                <li>Records stay in one place.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Continuity does not mean you cannot seek a second opinion when needed.
              </p>
            </div>


            {/* Section 3 — Long Term in Mind */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Choose with the Long Term in Mind
              </h2>


              <p className="text-gray-700 mb-4">
                Think beyond the first visit.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Will she be available for different life stages?</li>
                <li>Is the clinic easy to reach for years to come?</li>
                <li>Are timings workable for your routine?</li>
                <li>Does she refer you to other specialists when needed?</li>
              </ul>
            </div>


            {/* Section 4 — Decide What You Need */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. Decide What You Need
              </h2>


              <p className="text-gray-700 mb-4">
                Match the doctor to your concern.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Gynaecologist:</strong> Periods, pregnancy, contraception, pelvic concerns, menopause.</li>
                <li><strong>General Physician:</strong> Everyday illness and general check-ups.</li>
                <li><strong>Other Specialists:</strong> Skin, hormones, or children’s health, usually by referral.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Tell the clinic your concern when booking.
              </p>
            </div>


            {/* Section 5 — Build Shortlist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. Build a Shortlist
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your family doctor or earlier doctor</li>
                <li>Trusted friends and relatives</li>
                <li>Hospital and clinic listings</li>
                <li>Official medical council directories</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Aim for two or three names to meet first.
              </p>
            </div>


            {/* Section 6 — Verify Qualifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Verify Qualifications
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Recognised medical degree and any specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of practice</li>
                <li>Hospital affiliations for deliveries or surgery</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Credentials can be verified through the council’s records.
              </p>
            </div>


            {/* Section 7 — Judge Communication */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Judge Communication Early
              </h2>


              <p className="text-gray-700 mb-4">
                Trust grows from good conversations.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Does she listen without judgement?</li>
                <li>Does she explain in simple language?</li>
                <li>Does she welcome questions?</li>
                <li>Does she respect your choices?</li>
                <li>Does she avoid fear-based or pressured advice?</li>
              </ul>
            </div>


            {/* Section 8 — Meet Before Commit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Meet Before You Commit
              </h2>


              <p className="text-gray-700 mb-4">
                A first visit is also an interview.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note how comfortable you feel.</li>
                <li>Ask how she handles follow-ups and urgent questions.</li>
                <li>Ask who covers when she is away.</li>
                <li>Decide after one or two visits, not instantly.</li>
              </ul>
            </div>


            {/* Section 9 — Questions at Start */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Questions to Ask at the Start
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What is your approach to routine check-ups?</li>
                <li>How do I reach the clinic between visits?</li>
                <li>How are reports and records handled?</li>
                <li>Do you see women of all ages?</li>
                <li>What happens in an emergency?</li>
              </ul>
            </div>


            {/* Section 10 — Health Records */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Keep Your Own Health Records
              </h2>


              <p className="text-gray-700 mb-4">
                Your records should not depend on one clinic.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>One folder, arranged by date</li>
                <li>A page listing medicines, allergies, and past conditions</li>
                <li>Photo copies stored on your phone</li>
                <li>A note of each visit’s key points</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Carry the folder to every appointment.
              </p>
            </div>


            {/* Section 11 — Health Summary */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Maintain a Health Summary
              </h2>


              <p className="text-gray-700 mb-4">
                A one-page summary helps any doctor quickly.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Date of birth and blood group, if known</li>
                <li>Past illnesses, surgeries, and pregnancies</li>
                <li>Current medicines and supplements</li>
                <li>Allergies</li>
                <li>Family health history that is relevant</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Update it after every visit.
              </p>
            </div>


            {/* Section 12 — Regular Check-Ups */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Plan Regular Check-Ups
              </h2>


              <p className="text-gray-700 mb-4">
                Your doctor will advise how often to visit.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask which screenings suit your age and history.</li>
                <li>Note due dates in your phone calendar.</li>
                <li>Do not wait for symptoms to book a visit.</li>
              </ul>
            </div>


            {/* Section 13 — Between Visits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Between Visits
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Track period dates and changes.</li>
                <li>Note new symptoms and when they began.</li>
                <li>Write questions as they come to mind.</li>
                <li>Call the clinic if something worries you.</li>
              </ul>
            </div>


            {/* Section 14 — Life Stages */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Life Stages and Your Doctor
              </h2>


              <p className="text-gray-700 mb-4">
                Needs change, and a long-term doctor can guide you.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Teenage years:</strong> Period and growth questions.</li>
                <li><strong>Adult years:</strong> Cycles, contraception, and pregnancy planning.</li>
                <li><strong>During and after pregnancy:</strong> Antenatal and postnatal care.</li>
                <li><strong>Later years:</strong> Menopause-related changes.</li>
              </ul>
            </div>


            {/* Section 15 — Family */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Involving Family
              </h2>


              <p className="text-gray-700 mb-4">
                Decide how much to share.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tell a trusted family member where your records are.</li>
                <li>Share the clinic’s contact details.</li>
                <li>Let them accompany you to key visits if you wish.</li>
              </ul>
            </div>


            {/* Section 16 — Disagreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Respectful Disagreement
              </h2>


              <p className="text-gray-700 mb-4">
                A good relationship allows questions.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask for explanations when you disagree.</li>
                <li>Request a second opinion when unsure.</li>
                <li>A good doctor will not be offended.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Never delay urgent care while deciding.
              </p>
            </div>


            {/* Section 17 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Understanding Costs
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation and follow-up fees</li>
                <li>Test and scan charges</li>
                <li>Medicine and procedure costs</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask for an itemised bill each time.
              </p>
            </div>


            {/* Section 18 — Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. Privacy and Dignity
              </h2>


              <p className="text-gray-700 mb-4">
                Privacy is essential in women’s healthcare.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation doors should not open onto the waiting area.</li>
                <li>Examination areas should be screened.</li>
                <li>Registration should not be overheard.</li>
                <li>Staff should explain what they are doing and ask before examining.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                If privacy weakens over time, speak up or consider another clinic.
              </p>
            </div>


            {/* Section 19 — Clinic Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. What a Good Clinic Environment Looks Like
              </h2>


              <p className="text-gray-700 mb-4">
                Design supports comfort and trust over many visits.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Layout:</strong> A clear flow from reception to waiting to consultation.</li>
                <li><strong>Surfaces:</strong> Washable, non-porous materials that are easy to keep clean.</li>
                <li><strong>Lighting:</strong> Soft, glare-free light in waiting areas and bright light for examination.</li>
                <li><strong>Sound:</strong> Rooms that keep conversations private.</li>
                <li><strong>Seating:</strong> Supportive chairs, with space for companions and elders.</li>
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


            {/* Section 20 — Change Doctors */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                19. When to Change Doctors
              </h2>


              <p className="text-gray-700 mb-4">
                It is acceptable to move on.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>You feel unheard or dismissed.</li>
                <li>Privacy or hygiene standards slip.</li>
                <li>Costs become unclear.</li>
                <li>Your needs change beyond her scope.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask for your records so the new doctor has the full picture.
              </p>
            </div>


            {/* Section 21 — Red Flags */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Red Flags and Common Mistakes
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>Choosing only by “top” labels or advertisements</li>
                <li>Skipping regular check-ups</li>
                <li>Keeping no records of your own</li>
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
                For women’s health clinics, practical interior planning can support privacy, hygiene, accessibility, calm lighting, comfortable seating, and a clear flow from reception to consultation. Clinical accuracy, qualified staff, equipment standards, and patient safety remain the responsibility of the clinic and medical team.
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