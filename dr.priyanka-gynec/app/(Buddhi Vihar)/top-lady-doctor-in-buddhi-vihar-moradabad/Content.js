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


export default function TopLadyDoctorBuddhiViharMoradabad() {
  const faqs = [
    {
      q: "How do I find a top lady doctor?",
      a: "Compare two or three doctors on qualifications, experience, communication, clinic quality, and costs.",
    },
    {
      q: "Which doctor should I see for period or pregnancy concerns?",
      a: "A gynaecologist is usually the right starting point.",
    },
    {
      q: "How do I verify a doctor’s credentials?",
      a: "Look up the relevant medical council’s records and ask about training.",
    },
    {
      q: "Can I request a lady doctor when booking?",
      a: "Yes. Ask whether one is available on your preferred day.",
    },
    {
      q: "What should I bring to the first visit?",
      a: "Past reports, a medicine list, ID, your notes, and your questions.",
    },
    {
      q: "How can I judge a clinic’s privacy?",
      a: "Check whether consultation rooms are screened and registration is discreet.",
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
      q: "Are online reviews reliable?",
      a: "Use reviews carefully. Look for detailed, repeated comments and verify claims through your own visit.",
    },
    {
      q: "Can a doctor guarantee a cure?",
      a: "No. Be cautious of guaranteed cures or unrealistic promises.",
    },
    {
      q: "When should I consider a second opinion?",
      a: "Consider one if you feel unsure, especially before surgery or a major treatment decision.",
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
                Top Lady Doctor in Buddhi Vihar, Moradabad: A Family Checklist for Choosing Wisely
              </h1>


              <p className="text-gray-700 mb-4">
                &quot;Top&quot; is a word used in many advertisements, but it rarely tells you what you need to know. For a family, the right lady doctor is the one who is qualified, easy to reach, comfortable to talk to, and affordable over many visits.
              </p>


              <p className="text-gray-700 mb-4">
                This guide gives you a checklist to compare doctors fairly. It is general information, not medical advice. It names no individual doctors, because I cannot verify or rank them, and only a qualified doctor can diagnose you or advise treatment.
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


            {/* Section 2 — Why Checklist Beats Top List */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. Why a Checklist Beats a “Top” List
              </h2>


              <p className="text-gray-700 mb-4">
                Rankings can be paid for or outdated.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A list cannot know your concern or your comfort level.</li>
                <li>A checklist lets you judge each doctor on the same points.</li>
                <li>It keeps the decision with you and your family.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Use any list only as a source of names, not as proof of quality.
              </p>
            </div>


            {/* Section 3 — Decide What You Need */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Decide What You Need First
              </h2>


              <p className="text-gray-700 mb-4">
                Match the doctor to the concern.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Gynaecologist:</strong> Periods, pregnancy, contraception, pelvic concerns, menopause.</li>
                <li><strong>General Physician:</strong> Fever, infections, and routine check-ups.</li>
                <li><strong>Dermatologist:</strong> Skin and hair concerns.</li>
                <li><strong>Paediatrician:</strong> Children’s health.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Tell the clinic your concern when booking, so you see the right doctor.
              </p>
            </div>


            {/* Section 4 — Whole Family */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. Think About the Whole Family
              </h2>


              <p className="text-gray-700 mb-4">
                A family doctor relationship can last years.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Will the doctor see teenagers and older women comfortably?</li>
                <li>Can records for several family members be kept organised?</li>
                <li>Is the clinic suitable for elders and children?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Continuity of care often matters more than a single visit.
              </p>
            </div>


            {/* Section 5 — Build Shortlist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. Build a Shortlist
              </h2>


              <p className="text-gray-700 mb-4">
                Use reliable sources.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your family doctor or earlier doctor</li>
                <li>Trusted friends and relatives</li>
                <li>Hospital and clinic listings</li>
                <li>Official medical council directories</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Aim for two or three names to compare.
              </p>
            </div>


            {/* Section 6 — Verify Qualifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Verify Qualifications
              </h2>


              <p className="text-gray-700 mb-4">
                Look for clear, checkable details.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Recognised medical degree and any specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of practice</li>
                <li>Hospital affiliations, in case surgery or delivery is needed</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Credentials can be verified through the council’s records.
              </p>
            </div>


            {/* Section 7 — Relevant Experience */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Check Relevant Experience
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>How often does the doctor see concerns like yours?</li>
                <li>What approach does she usually follow?</li>
                <li>When does she refer to another specialist?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Honest, specific answers are a good sign.
              </p>
            </div>


            {/* Section 8 — Judge Communication */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Judge Communication
              </h2>


              <p className="text-gray-700 mb-4">
                Notice how the doctor talks to you.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Does she listen to your full history?</li>
                <li>Does she explain in simple language?</li>
                <li>Does she welcome questions?</li>
                <li>Does she respect your choices?</li>
                <li>Does she avoid fear-based or pressured advice?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                You should leave feeling heard and informed.
              </p>
            </div>


            {/* Section 9 — Timings and Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Check Timings and Availability
              </h2>


              <p className="text-gray-700 mb-4">
                Practical details decide how often you actually go.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation days and hours</li>
                <li>Whether appointments are needed</li>
                <li>Typical waiting time</li>
                <li>Availability for urgent questions</li>
                <li>Who covers when the doctor is away</li>
              </ul>
            </div>


            {/* Section 10 — Location and Access */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Check Location and Access
              </h2>


              <p className="text-gray-700 mb-4">
                Convenience supports regular care.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Travel time from home, including at night</li>
                <li>Parking and nearby transport</li>
                <li>Step-free entry for elders</li>
                <li>Lift access if the clinic is on an upper floor</li>
              </ul>
            </div>


            {/* Section 11 — Booking Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Questions to Ask When Booking
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Is a lady doctor available on my preferred day?</li>
                <li>What is the consultation fee?</li>
                <li>Is a female staff member present during examinations?</li>
                <li>Can I bring a companion?</li>
                <li>Do I need to bring or avoid anything beforehand?</li>
                <li>How do I reach the clinic after hours?</li>
              </ul>
            </div>


            {/* Section 12 — Doctor Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Questions to Ask the Doctor
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What do you think is causing my symptoms?</li>
                <li>Which tests do I need, and why?</li>
                <li>What are my options, including monitoring?</li>
                <li>What are the benefits and risks of each?</li>
                <li>When should I return for follow-up?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Write the answers down, or take someone along.
              </p>
            </div>


            {/* Section 13 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Understand the Costs
              </h2>


              <p className="text-gray-700 mb-4">
                Ask early and clearly.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation fee and follow-up charges</li>
                <li>Test and scan costs</li>
                <li>Medicine and procedure costs</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask for an itemised bill.
              </p>
            </div>


            {/* Section 14 — Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Privacy and Dignity
              </h2>


              <p className="text-gray-700 mb-4">
                Privacy is essential in women’s health.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation doors should not open onto the waiting area.</li>
                <li>Examination areas should be screened.</li>
                <li>Registration should not be overheard.</li>
                <li>Staff should explain what they are doing and ask before examining.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                If privacy feels weak, consider another clinic.
              </p>
            </div>


            {/* Section 15 — Hygiene */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Hygiene and Cleanliness
              </h2>


              <p className="text-gray-700 mb-4">
                Look closely during your visit.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tidy rooms and clean washrooms</li>
                <li>Fresh linen and clean examination surfaces</li>
                <li>Visible hand-wash facilities</li>
                <li>Proper disposal arrangements</li>
              </ul>
            </div>


            {/* Section 16 — Clinic Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. What a Good Clinic Environment Looks Like
              </h2>


              <p className="text-gray-700 mb-4">
                Design shapes comfort and trust.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Layout:</strong> A clear flow from reception to waiting to consultation.</li>
                <li><strong>Surfaces:</strong> Washable, non-porous materials that are easy to keep clean.</li>
                <li><strong>Lighting:</strong> Soft, glare-free light in waiting areas and bright light for examination.</li>
                <li><strong>Sound:</strong> Rooms that keep conversations private.</li>
                <li><strong>Seating:</strong> Supportive chairs, with space for companions and elders.</li>
                <li><strong>Access:</strong> Wide doors, non-slip floors, and accessible washrooms.</li>
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


            {/* Section 17 — Family-Friendly Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Family-Friendly Features
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A safe, tidy corner for small children</li>
                <li>Seating suited to elderly companions</li>
                <li>Drinking water and clean washrooms nearby</li>
                <li>Short waiting times where possible</li>
              </ul>
            </div>


            {/* Section 18 — Reviews */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. Using Reviews Wisely
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Look for detailed comments, not only star ratings.</li>
                <li>Notice repeated praise or complaints.</li>
                <li>Be cautious of many similar reviews posted together.</li>
                <li>Verify claims through your own visit.</li>
              </ul>
            </div>


            {/* Section 19 — Second Opinion */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. Consider a Second Opinion
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It is sensible when you feel unsure, especially before surgery.</li>
                <li>A good doctor will not be offended.</li>
                <li>Compare explanations, not only prescriptions.</li>
                <li>Carry the same reports to each visit.</li>
              </ul>
            </div>


            {/* Section 20 — Red Flags */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                19. Red Flags
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Poor privacy during consultation or examination</li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs and no itemised bill</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </div>


            {/* Section 21 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Choosing only by advertisements or “top” labels</li>
                <li>Delaying a visit despite worsening symptoms</li>
                <li>Skipping follow-up</li>
                <li>Self-medicating from online advice</li>
                <li>Not asking about costs</li>
                <li>Staying with a doctor who makes you uncomfortable</li>
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
                For clinics serving women and families, practical interior planning can support privacy, hygiene, accessibility, calm lighting, comfortable seating, and a clear flow from reception to consultation. Clinical accuracy, qualified staff, equipment standards, and patient safety remain the responsibility of the clinic and medical team.
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