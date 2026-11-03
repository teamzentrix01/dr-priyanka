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


export default function NormalDeliveryDoctorBuddhiViharMoradabad() {
  const faqs = [
    {
      q: "Can a doctor guarantee a normal delivery?",
      a: "No. The safest method depends on your health and your baby’s.",
    },
    {
      q: "When should I choose a hospital?",
      a: "Early in pregnancy, so you can visit and compare.",
    },
    {
      q: "How long does recovery take?",
      a: "It varies. Your doctor will give guidance for your case.",
    },
    {
      q: "When should I seek urgent help after delivery?",
      a: "For very heavy bleeding, fever, severe pain, or wound changes, contact your doctor or hospital promptly.",
    },
    {
      q: "Is feeding support available?",
      a: "Ask the hospital team before discharge about guidance and who to call afterwards.",
    },
    {
      q: "When is the postnatal checkup?",
      a: "Your doctor will tell you. Keep the appointment even if you feel well.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, if you feel unsure about the advice.",
    },
    {
      q: "Where can I learn more about hospital planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
    },
    {
      q: "Can my birth plan change during labour?",
      a: "Yes. The medical team may change the plan if there is a concern for your safety or your baby’s safety.",
    },
    {
      q: "What should I arrange before delivery?",
      a: "Plan transport, emergency contacts, household help, care for older children, and support for postnatal recovery.",
    },
    {
      q: "Should I attend postnatal checkups if I feel well?",
      a: "Yes. Some issues, such as anaemia or mood changes, may not be obvious early and need professional assessment.",
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
                Normal Delivery Doctor in Buddhi Vihar, Moradabad: Choosing Well and Planning for Recovery
              </h1>


              <p className="text-gray-700 mb-4">
                Most guides stop at the birth, yet the weeks after delivery matter just as much. A good doctor and hospital support you through labour and also through recovery, feeding, and newborn care. This guide explains how to choose a doctor and what the postnatal period usually involves.
              </p>


              <p className="text-gray-700 mb-4">
                It is general information, not medical advice. It names no individual doctors, because I cannot verify or rank them, and only your own doctor can advise you on your pregnancy, delivery, and recovery.
              </p>


              <p className="text-gray-700">
                <a
                  href="https://www.spacebuild.co.in/"
                  className="text-blue-600 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the sections on hospital environment.
              </p>
            </div>


            {/* Section 2 — What a Normal Delivery Doctor Does */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. What a Normal Delivery Doctor Does
              </h2>


              <p className="text-gray-700 mb-4">
                Delivery care is led by an obstetrician or gynaecologist.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Monitors you and your baby through pregnancy and labour</li>
                <li>Guides decisions during delivery</li>
                <li>Supports recovery and postnatal checkups</li>
                <li>Refers to other specialists when needed</li>
              </ul>


              <p className="text-gray-700 mt-4">
                No doctor can guarantee a normal delivery, since the safest route depends on your health and your baby’s.
              </p>
            </div>


            {/* Section 3 — Choose Early */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Choose Early
              </h2>


              <p className="text-gray-700 mb-4">
                Decide on your doctor and hospital during pregnancy.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Early visits build trust and history.</li>
                <li>You have time to compare options calmly.</li>
                <li>You can plan for postnatal care too.</li>
              </ul>
            </div>


            {/* Section 4 — Shortlist Doctors */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. How to Shortlist Doctors
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your family doctor or earlier gynaecologist</li>
                <li>Friends and relatives with good experiences</li>
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
                <li>Years of experience in obstetrics</li>
                <li>The hospital where the doctor delivers</li>
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
                <li>Does the doctor listen to your history and worries?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>Does the doctor avoid pressure or fear-based advice?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                You should feel respected and informed.
              </p>
            </div>


            {/* Section 7 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Questions to Ask the Doctor
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What is your approach to supporting normal delivery when it is safe?</li>
                <li>Who will attend my delivery, and who covers if you are unavailable?</li>
                <li>What emergency arrangements exist?</li>
                <li>What does postnatal follow-up include?</li>
                <li>How long is the usual hospital stay?</li>
                <li>What are the estimated total costs?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Write the answers down, or take someone along.
              </p>
            </div>


            {/* Section 8 — Choosing Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Choosing the Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Distance from home and night-time travel</li>
                <li>Round-the-clock emergency and obstetric cover</li>
                <li>Anaesthesia, blood support, and newborn care</li>
                <li>Trained nursing staff</li>
                <li>Clear billing and discharge process</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Visit before your due date if possible.
              </p>
            </div>


            {/* Section 9 — First Hours */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. The First Hours After Birth
              </h2>


              <p className="text-gray-700 mb-4">
                Your team will guide this period.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>You and your baby are checked.</li>
                <li>Skin-to-skin contact and first feeding are usually encouraged, when safe.</li>
                <li>You rest and are monitored.</li>
                <li>Staff explain what is normal and what to report.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask questions freely. No question is too small.
              </p>
            </div>


            {/* Section 10 — Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Recovery After a Normal Delivery
              </h2>


              <p className="text-gray-700 mb-4">
                Recovery differs for every woman.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest as much as possible, and accept help at home.</li>
                <li>Follow your doctor’s advice on wound care if there are stitches.</li>
                <li>Keep the area clean as instructed.</li>
                <li>Ask about safe activity, and increase it gradually.</li>
                <li>Eat regular meals and drink enough fluids, as advised.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Do not follow unverified home remedies without asking your doctor.
              </p>
            </div>


            {/* Section 11 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Warning Signs After Delivery
              </h2>


              <p className="text-gray-700 mb-4">
                Ask your doctor which symptoms need urgent attention. Commonly discussed signs include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Very heavy bleeding</li>
                <li>Fever</li>
                <li>Severe or worsening pain</li>
                <li>Foul-smelling discharge</li>
                <li>Swelling, redness, or discharge from a wound</li>
                <li>Chest pain or breathlessness</li>
                <li>Persistent low mood or distress</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Contact your doctor or go to hospital promptly if these occur.
              </p>
            </div>


            {/* Section 12 — Feeding Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Feeding Support
              </h2>


              <p className="text-gray-700 mb-4">
                Support helps many new mothers.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask the hospital team to guide your first feeds.</li>
                <li>Ask about positions and latching.</li>
                <li>Seek help early if feeding is painful or difficult.</li>
                <li>Ask who to call for advice after going home.</li>
              </ul>
            </div>


            {/* Section 13 — Newborn Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Newborn Care Basics
              </h2>


              <p className="text-gray-700 mb-4">
                Ask the team before discharge.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Feeding guidance and how to tell your baby is feeding well</li>
                <li>Cord and skin care</li>
                <li>Safe sleep advice</li>
                <li>Newborn checks and the vaccination schedule</li>
                <li>Signs that need a doctor</li>
              </ul>
            </div>


            {/* Section 14 — Postnatal Checkups */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Postnatal Checkups
              </h2>


              <p className="text-gray-700 mb-4">
                Your own health needs follow-up too.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Attend the checkup your doctor advises.</li>
                <li>Discuss recovery, mood, and any concerns.</li>
                <li>Ask about contraception and spacing of pregnancies.</li>
                <li>Keep your baby’s checkups on schedule.</li>
              </ul>
            </div>


            {/* Section 15 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Emotional Wellbeing
              </h2>


              <p className="text-gray-700 mb-4">
                Feelings can change after birth.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tiredness and mood swings can be common.</li>
                <li>Talk to someone you trust.</li>
                <li>Tell your doctor if low mood or anxiety lasts or worsens.</li>
                <li>Ask family to share night duties when possible.</li>
              </ul>
            </div>


            {/* Section 16 — Help at Home */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Planning Help at Home
              </h2>


              <p className="text-gray-700 mb-4">
                Arrange support before delivery.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Who will cook and manage the household?</li>
                <li>Who will help with older children?</li>
                <li>Who will take you to checkups?</li>
                <li>Who can you call at night?</li>
              </ul>
            </div>


            {/* Section 17 — Hospital Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. What a Good Hospital Environment Looks Like
              </h2>


              <p className="text-gray-700 mb-4">
                The setting affects comfort during labour and recovery.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Privacy:</strong> Doors and screens protect you during examinations.</li>
                <li><strong>Comfort:</strong> Supportive beds, a seat for a companion where allowed, soft lighting, and good ventilation.</li>
                <li><strong>Hygiene:</strong> Washable, non-porous surfaces and clean washrooms.</li>
                <li><strong>Access:</strong> Step-free entry, non-slip floors, wide doors, and lift access.</li>
                <li><strong>Calm:</strong> Quiet corridors and sound-softening finishes.</li>
                <li><strong>Feeding Space:</strong> A comfortable, private corner for feeding and rest.</li>
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


            {/* Section 18 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. Understanding Costs
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Doctor and hospital charges</li>
                <li>Room and nursing charges</li>
                <li>Tests, medicines, and newborn care</li>
                <li>Postnatal checkup charges</li>
                <li>Costs if the plan changes</li>
                <li>Insurance acceptance and claim process</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Request a written estimate where possible.
              </p>
            </div>


            {/* Section 19 — Second Opinion */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. Consider a Second Opinion
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It is acceptable if you feel unsure.</li>
                <li>A good doctor will not be offended.</li>
                <li>Carry the same reports to each visit.</li>
              </ul>
            </div>


            {/* Section 20 — Red Flags */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                19. Red Flags
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Guaranteed normal delivery or unrealistic promises</li>
                <li>Pressure to choose a method without explanation</li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs and no written estimate</li>
                <li>Poor privacy or hygiene</li>
                <li>No postnatal follow-up plan</li>
              </ul>
            </div>


            {/* Section 21 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Skipping antenatal or postnatal checkups</li>
                <li>Ignoring warning signs</li>
                <li>Following unverified advice online</li>
                <li>Planning only for the birth, not the recovery</li>
                <li>Not arranging help at home</li>
                <li>Not asking about costs</li>
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
                For delivery and postnatal spaces, practical interior planning can support privacy, hygiene, accessibility, calm lighting, comfortable beds, and private feeding areas. Clinical safety, staffing, equipment, and emergency protocols remain the responsibility of the hospital and medical team.
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