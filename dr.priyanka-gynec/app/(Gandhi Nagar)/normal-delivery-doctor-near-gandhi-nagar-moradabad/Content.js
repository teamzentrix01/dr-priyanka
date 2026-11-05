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


export default function NormalDeliveryDoctorGandhiNagarMoradabad() {
  const faqs = [
    {
      q: "Can a doctor guarantee a normal delivery?",
      a: "No. The safest method depends on your health and your baby’s.",
    },
    {
      q: "When should I visit the hospital?",
      a: "In the middle months of pregnancy, so you have time to compare.",
    },
    {
      q: "What should I ask about emergencies?",
      a: "Ask about round-the-clock cover, anaesthesia, blood support, and newborn care.",
    },
    {
      q: "Can I see the labour room?",
      a: "Ask when you call. Policies vary.",
    },
    {
      q: "How do I verify a doctor’s credentials?",
      a: "Look up the relevant medical council’s records and ask about training.",
    },
    {
      q: "Can I request a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
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
      q: "What should I ask about newborn care?",
      a: "Ask about the newborn care area, who checks the baby after birth, and how transfer is arranged if extra care is needed.",
    },
    {
      q: "Should I compare more than one hospital?",
      a: "Yes. Comparing two or three options helps you assess emergency readiness, comfort, costs, and communication.",
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
                Normal Delivery Doctor Near Gandhi Nagar, Moradabad: A Delivery Hospital Visit Checklist
              </h1>


              <p className="text-gray-700 mb-4">
                Choosing a doctor for a normal delivery is only half the decision. The hospital where you deliver matters just as much, since that is where labour, emergencies, and newborn care happen. A planned visit before your due date lets you see the place, ask questions, and feel less anxious.
              </p>


              <p className="text-gray-700 mb-4">
                This guide gives you a checklist. It is general information, not medical advice. It names no individual doctors or hospitals, because I cannot verify or rank them, and no one can guarantee a normal delivery, since the safest route depends on your health and your baby’s.
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


            {/* Section 2 — Why Visit Before Due Date */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. Why Visit Before the Due Date
              </h2>


              <p className="text-gray-700 mb-4">
                Seeing the hospital early has clear benefits.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>You know the route and entrance.</li>
                <li>You can ask questions calmly.</li>
                <li>You can compare more than one option.</li>
                <li>Surprises on the day are fewer.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Start visiting in the middle months, as your doctor advises.
              </p>
            </div>


            {/* Section 3 — Doctor’s Advice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Begin with Your Doctor’s Advice
              </h2>


              <p className="text-gray-700 mb-4">
                Ask your obstetrician where they deliver.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Which hospital do they usually use?</li>
                <li>Are they available there at short notice?</li>
                <li>Who covers if they are unavailable?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Your doctor and hospital should work well together.
              </p>
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


            {/* Section 6 — Plan Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Plan the Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Call ahead to ask whether tours or visits are allowed.</li>
                <li>Choose a time when staff can answer questions.</li>
                <li>Bring your partner or a family member.</li>
                <li>Carry a notebook or use your phone for notes.</li>
              </ul>
            </div>


            {/* Section 7 — Location and Access */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Location and Access
              </h2>


              <p className="text-gray-700 mb-4">
                Think about the journey as well as the building.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Travel time from home, including at night</li>
                <li>Parking and a clear emergency entrance</li>
                <li>Step-free entry and wide doors for stretchers</li>
                <li>Lift access to labour and postnatal floors</li>
              </ul>
            </div>


            {/* Section 8 — Reception */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Reception and Admission
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Is the reception clear and organised?</li>
                <li>How does admission work, including at night?</li>
                <li>Is privacy respected during registration?</li>
                <li>Are billing and deposit rules explained?</li>
              </ul>
            </div>


            {/* Section 9 — Labour Rooms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Labour Rooms
              </h2>


              <p className="text-gray-700 mb-4">
                Ask to see them, if permitted.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Is there room to move around the bed?</li>
                <li>Are doors and screens used to protect privacy?</li>
                <li>Can a companion stay with you, where allowed?</li>
                <li>Is lighting soft and adjustable, along with clinical lighting?</li>
                <li>Are surfaces clean and easy to wipe?</li>
              </ul>
            </div>


            {/* Section 10 — Emergency Readiness */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Emergency Readiness
              </h2>


              <p className="text-gray-700 mb-4">
                Ask clear, direct questions.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Is emergency obstetric cover available round the clock?</li>
                <li>Is an operation theatre ready for urgent surgery?</li>
                <li>Are anaesthesia and blood support available?</li>
                <li>How are emergencies handled when the doctor is away?</li>
              </ul>
            </div>


            {/* Section 11 — Newborn Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Newborn Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Is there a newborn care area or unit?</li>
                <li>What happens if a baby needs extra care?</li>
                <li>If transfer is needed, how is it arranged?</li>
                <li>Who checks the baby after birth?</li>
              </ul>
            </div>


            {/* Section 12 — Postnatal Rooms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Postnatal Rooms
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Are rooms clean, comfortable, and well ventilated?</li>
                <li>Is there a seat or bed for a companion?</li>
                <li>Is there a private corner for feeding?</li>
                <li>Are washrooms close and accessible?</li>
              </ul>
            </div>


            {/* Section 13 — Nursing Staff */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Nursing Staff
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Are nurses trained in obstetric care?</li>
                <li>Is help easy to call?</li>
                <li>How are feeding and newborn care supported?</li>
                <li>Are staff polite and clear in their explanations?</li>
              </ul>
            </div>


            {/* Section 14 — Pain Relief */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Pain Relief and Support
              </h2>


              <p className="text-gray-700 mb-4">
                Ask what is available and how decisions are made.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Non-medical comfort measures</li>
                <li>Medical options discussed with the doctor and anaesthetist</li>
                <li>Who is available at night</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Decide with information, not pressure.
              </p>
            </div>


            {/* Section 15 — Visitor Rules */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Visitor and Companion Rules
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>How many companions are allowed?</li>
                <li>What are the visiting hours?</li>
                <li>Are there rules for children visiting?</li>
                <li>Is there seating for family in waiting areas?</li>
              </ul>
            </div>


            {/* Section 16 — Feeding Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Feeding and Lactation Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Is guidance offered after birth?</li>
                <li>Who can you call after discharge?</li>
                <li>Is there a private space for feeding?</li>
              </ul>
            </div>


            {/* Section 17 — Hygiene */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Hygiene Checklist
              </h2>


              <p className="text-gray-700 mb-4">
                Look closely during your visit.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tidy corridors and wards</li>
                <li>Clean washrooms</li>
                <li>Visible hand-wash facilities</li>
                <li>Proper waste disposal arrangements</li>
              </ul>
            </div>


            {/* Section 18 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. Understanding Costs
              </h2>


              <p className="text-gray-700 mb-4">
                Ask early and clearly.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Doctor and hospital charges</li>
                <li>Room and nursing charges</li>
                <li>Tests, medicines, and newborn care</li>
                <li>Costs if the plan changes</li>
                <li>Insurance acceptance and claim process</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Request a written estimate where possible.
              </p>
            </div>


            {/* Section 19 — Hospital Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. What a Good Hospital Environment Looks Like
              </h2>


              <p className="text-gray-700 mb-4">
                The setting affects comfort and calm.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Privacy:</strong> Doors and screens protect you during examinations.</li>
                <li><strong>Space:</strong> Room to move, with a comfortable bed and a seat for a companion.</li>
                <li><strong>Hygiene:</strong> Washable, non-porous surfaces and tidy rooms.</li>
                <li><strong>Lighting:</strong> Soft, adjustable light alongside clinical lighting.</li>
                <li><strong>Access:</strong> Step-free entry, non-slip floors, wide doors, and accessible washrooms.</li>
                <li><strong>Calm:</strong> Quiet corridors and sound-softening finishes.</li>
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


            {/* Section 20 — Compare and Decide */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                19. Compare and Decide
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Write down your impressions right after each visit.</li>
                <li>Compare answers on emergencies, newborn care, and costs.</li>
                <li>Weigh comfort alongside safety readiness.</li>
                <li>A second opinion on your plan is acceptable if you feel unsure.</li>
              </ul>
            </div>


            {/* Section 21 — Red Flags */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Red Flags and Common Mistakes
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Guaranteed normal delivery or unrealistic promises</li>
                <li>Vague answers about emergencies</li>
                <li>Unclear costs and no written estimate</li>
                <li>Poor privacy or hygiene</li>
                <li>Pressure to choose a method without explanation</li>
                <li>Leaving hospital planning until the last moment</li>
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
                For delivery hospitals, practical interior planning can support privacy, hygiene, accessibility, calm lighting, comfortable labour and postnatal spaces, and clear movement from entrance to labour room. Clinical safety, staffing, equipment, and emergency protocols remain the responsibility of the hospital and medical team.
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