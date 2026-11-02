
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


export default function NormalDeliveryRamgangaViharMoradabad() {
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
      q: "How do I know when labour has started?",
      a: "Your doctor will explain the signs for your case. Call the hospital when unsure.",
    },
    {
      q: "Are antenatal classes useful?",
      a: "Many women find them helpful for confidence and understanding.",
    },
    {
      q: "Should I make a birth plan?",
      a: "Yes, as a conversation starter. Stay flexible if circumstances change.",
    },
    {
      q: "What should I pack?",
      a: "Documents, comfortable clothes, toiletries, and baby essentials. Check your hospital’s list.",
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
      q: "What should I do if I notice reduced baby movements?",
      a: "Contact your doctor or hospital promptly, especially if movements are noticeably less than usual.",
    },
    {
      q: "Can my birth plan change during labour?",
      a: "Yes. The medical team may change the plan if there is a concern for your safety or your baby’s safety.",
    },
    {
      q: "When should I pack my hospital bag?",
      a: "Pack by around the later weeks of pregnancy, so you are ready if labour begins early.",
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
                Normal Delivery Near Ramganga Vihar, Moradabad: Preparing for Labour, Birth and Recovery
              </h1>


              <p className="text-gray-700 mb-4">
                Many expectant mothers hope for a normal delivery. The safest route always depends on your health and your baby’s, and plans can change during labour. Good preparation still helps you feel calmer and more confident.
              </p>


              <p className="text-gray-700 mb-4">
                This guide covers labour stages, birth planning, packing, and choosing a comfortable facility. It is general information, not medical advice. It names no individual doctors, because I cannot verify or rank them, and only your own doctor can advise you on your pregnancy and delivery.
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


            {/* Section 2 — What Is a Normal Delivery? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. What Is a Normal Delivery?
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A normal delivery is a birth through the birth canal.</li>
                <li>Labour may begin naturally or be started by the doctor if needed.</li>
                <li>The team monitors you and your baby throughout.</li>
                <li>Plans can change if the doctor sees a concern.</li>
                <li>No one can guarantee a normal delivery in advance.</li>
              </ul>
            </div>


            {/* Section 3 — Start Preparing Early */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Start Preparing Early
              </h2>


              <p className="text-gray-700 mb-4">
                Preparation works best over weeks, not days.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Attend all antenatal checkups and scans.</li>
                <li>Ask your doctor whether a normal delivery suits your case.</li>
                <li>Choose your delivery hospital early.</li>
                <li>Learn from reliable sources, not social media rumours.</li>
              </ul>
            </div>


            {/* Section 4 — Stages of Labour */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. Understanding the Stages of Labour
              </h2>


              <p className="text-gray-700 mb-4">
                Your doctor or midwife will explain these in detail.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Early Labour:</strong> Contractions begin and the body prepares. This stage can be long.</li>
                <li><strong>Active Labour:</strong> Contractions become stronger and closer together.</li>
                <li><strong>Delivery of the Baby:</strong> The baby is born with the team’s guidance.</li>
                <li><strong>After Birth:</strong> The placenta is delivered, and mother and baby are checked.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Every labour is different in length and pattern.
              </p>
            </div>


            {/* Section 5 — When to Go to Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. When to Go to the Hospital
              </h2>


              <p className="text-gray-700 mb-4">
                Ask your doctor for clear instructions, since they depend on your case. Commonly discussed reasons to call or go include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular, strengthening contractions as advised by your doctor</li>
                <li>Fluid leaking from the vagina</li>
                <li>Bleeding</li>
                <li>Reduced baby movements</li>
                <li>Severe pain, fever, or anything that worries you</li>
              </ul>


              <p className="text-gray-700 mt-4">
                When in doubt, call the hospital rather than wait.
              </p>
            </div>


            {/* Section 6 — Antenatal Classes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Antenatal Classes
              </h2>


              <p className="text-gray-700 mb-4">
                Classes can build confidence.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>They explain labour, breathing, and positions.</li>
                <li>They introduce feeding and newborn care basics.</li>
                <li>They let partners and family learn together.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask your hospital or doctor whether classes are offered.
              </p>
            </div>


            {/* Section 7 — Birth Plan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Writing a Birth Plan
              </h2>


              <p className="text-gray-700 mb-4">
                A birth plan is a conversation, not a contract.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Who you want with you</li>
                <li>Pain relief options you wish to learn about</li>
                <li>Preferences for movement and positions, where safe</li>
                <li>Newborn care and feeding preferences</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Share it with your doctor early, and stay flexible if circumstances change.
              </p>
            </div>


            {/* Section 8 — Pain Relief */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Pain Relief Options
              </h2>


              <p className="text-gray-700 mb-4">
                Ask your doctor what is available and suitable.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Non-medical comfort measures such as breathing and movement</li>
                <li>Medical options, discussed with the doctor and anaesthetist</li>
                <li>Benefits, limits, and risks of each</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Decide with information, not pressure.
              </p>
            </div>


            {/* Section 9 — Staying Active */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Staying Active and Healthy
              </h2>


              <p className="text-gray-700 mb-4">
                Advice must be personal.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask your doctor about safe activity and food.</li>
                <li>Rest well and keep a steady routine.</li>
                <li>Take medicines and supplements only as prescribed.</li>
                <li>Avoid unverified remedies.</li>
              </ul>
            </div>


            {/* Section 10 — Emotional Preparation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Emotional Preparation
              </h2>


              <p className="text-gray-700 mb-4">
                Feeling nervous is common.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Talk about your fears with your doctor or someone you trust.</li>
                <li>Learn what to expect, so surprises feel smaller.</li>
                <li>Practise relaxation techniques you find calming.</li>
                <li>Ask for counselling if worry becomes overwhelming.</li>
              </ul>
            </div>


            {/* Section 11 — Choosing Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. Choosing the Delivery Hospital
              </h2>


              <p className="text-gray-700 mb-4">
                The facility matters as much as the doctor.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Distance from home and travel time at night</li>
                <li>Round-the-clock emergency and obstetric cover</li>
                <li>Anaesthesia and blood support availability</li>
                <li>Newborn care arrangements</li>
                <li>Trained nursing and support staff</li>
                <li>Clear billing and discharge process</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Visit before your due date if possible.
              </p>
            </div>


            {/* Section 12 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. Questions to Ask the Doctor
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What is your approach to supporting normal delivery when it is safe?</li>
                <li>Which factors might change the plan?</li>
                <li>Who will attend my delivery, and who covers if you are unavailable?</li>
                <li>What pain relief is available?</li>
                <li>What emergency arrangements exist?</li>
                <li>What is the usual hospital stay?</li>
                <li>What are the estimated total costs?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Write the answers down, or take someone along.
              </p>
            </div>


            {/* Section 13 — Labour Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. What a Good Labour Environment Looks Like
              </h2>


              <p className="text-gray-700 mb-4">
                The setting affects comfort and calm.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Privacy:</strong> Doors and screens protect you during examinations.</li>
                <li><strong>Space:</strong> Room to move, with a comfortable bed and a seat for a companion where allowed.</li>
                <li><strong>Hygiene:</strong> Washable, non-porous surfaces and tidy rooms.</li>
                <li><strong>Lighting:</strong> Soft, adjustable light along with clinical lighting when needed.</li>
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


            {/* Section 14 — Hospital Bag */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Hospital Bag Checklist
              </h2>


              <p className="text-gray-700 mb-4">
                Pack by around the later weeks of pregnancy.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Reports, scans, ID, and insurance documents</li>
                <li>Comfortable clothes and nightwear</li>
                <li>Toiletries and sanitary supplies</li>
                <li>Baby clothes, wraps, and nappies</li>
                <li>Phone, charger, and important numbers</li>
                <li>Snacks or items your hospital allows</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Check with your hospital for its own list.
              </p>
            </div>


            {/* Section 15 — Practical Planning */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Practical Planning
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Arrange transport and a backup option.</li>
                <li>Keep emergency numbers handy.</li>
                <li>Plan who will care for other children or elders.</li>
                <li>Arrange household help for after delivery.</li>
              </ul>
            </div>


            {/* Section 16 — After Birth */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. After the Birth
              </h2>


              <p className="text-gray-700 mb-4">
                Recovery begins immediately.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest and accept help at home.</li>
                <li>Follow your doctor’s advice on wound care and activity.</li>
                <li>Ask for feeding support early.</li>
                <li>Attend postnatal checkups.</li>
                <li>Report fever, heavy bleeding, severe pain, or low mood that persists.</li>
              </ul>
            </div>


            {/* Section 17 — Newborn Basics */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Newborn Basics
              </h2>


              <p className="text-gray-700 mb-4">
                Ask the hospital team before discharge.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Feeding guidance</li>
                <li>Newborn checks and vaccination schedule</li>
                <li>Sleep and safety advice</li>
                <li>Warning signs that need a doctor</li>
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


            {/* Section 19 — Second Opinion */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. Consider a Second Opinion
              </h2>


              <p className="text-gray-700 mb-4">
                It is acceptable if you feel unsure about advice.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
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
                <li>Leaving hospital planning until the last moment</li>
              </ul>
            </div>


            {/* Section 21 — Mistakes to Avoid */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Skipping antenatal checkups</li>
                <li>Ignoring warning signs</li>
                <li>Following unverified advice online</li>
                <li>Not asking about emergencies and anaesthesia</li>
                <li>Packing and planning too late</li>
                <li>Not planning for postnatal recovery</li>
              </ul>
            </div>


            {/* Section 22 — Space Build */}
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
                For delivery and postnatal spaces, practical interior planning can support privacy, hygiene, accessibility, calm lighting, and comfortable movement. Clinical safety, staffing, equipment, and emergency protocols remain the responsibility of the hospital and medical team.
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