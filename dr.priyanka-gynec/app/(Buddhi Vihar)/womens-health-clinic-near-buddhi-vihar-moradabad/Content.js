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


export default function WomensHealthClinicBuddhiViharMoradabad() {
  const faqs = [
    {
      q: "What does a women’s health clinic do?",
      a: "It provides gynaecological care, period and hormonal guidance, pregnancy-related care, and preventive advice.",
    },
    {
      q: "How do I check a doctor’s credentials?",
      a: "Look up the relevant medical council’s records and ask about training.",
    },
    {
      q: "Can I ask for a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "Past reports, a medicine list, and notes on your symptoms and cycle.",
    },
    {
      q: "How can I judge a clinic’s privacy?",
      a: "Check whether consultation rooms are screened and registration is discreet.",
    },
    {
      q: "Should I ask about costs?",
      a: "Yes. Ask for clarity on consultation, tests, and follow-up charges.",
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
      q: "When should I seek urgent care?",
      a: "Seek urgent care for sudden severe pain or very heavy bleeding.",
    },
    {
      q: "Can I bring a companion to my appointment?",
      a: "Yes. Many clinics allow a companion, but you can ask about their policy when booking.",
    },
    {
      q: "Do I need an examination at every visit?",
      a: "No. Not every visit includes an examination. The doctor should explain the reason and take your permission first.",
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
                Women’s Health Clinic Near Buddhi Vihar, Moradabad: Services, First Visit and a Clinic Checklist
              </h1>


              <p className="text-gray-700 mb-4">
                A good women’s health clinic makes it easier to ask questions, attend regular check-ups, and return when something changes. Choosing one is partly about the doctors and partly about how the whole place feels and functions.
              </p>


              <p className="text-gray-700 mb-4">
                This guide covers the services to look for, what a first visit usually involves, and a checklist for judging a clinic. It is general information, not medical advice. It names no individual doctors or clinics, because I cannot verify or rank them, and only a qualified doctor can diagnose you or advise treatment.
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


            {/* Section 2 — What a Women's Health Clinic Is */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                1. What a Women’s Health Clinic Is
              </h2>


              <p className="text-gray-700 mb-4">
                It is a clinic focused on concerns specific to women.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gynaecological consultations and check-ups</li>
                <li>Period and hormonal concerns</li>
                <li>Pregnancy-related care</li>
                <li>Family planning advice</li>
                <li>Preventive care and screening</li>
                <li>Referrals to other specialists when needed</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Services differ between clinics, so ask what is available on site.
              </p>
            </div>


            {/* Section 3 — Service Categories */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                2. Service Categories to Look For
              </h2>


              <p className="text-gray-700 mb-4">
                Think in groups, then match them to your needs.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Routine Care:</strong> Check-ups, advice, and preventive screening.</li>
                <li><strong>Cycle and Hormone Care:</strong> Irregular, heavy, or painful periods, and related concerns.</li>
                <li><strong>Pregnancy Care:</strong> Antenatal visits, scans through tie-ups, postnatal follow-up.</li>
                <li><strong>Family Planning:</strong> Contraception counselling and fertility guidance.</li>
                <li><strong>Life-Stage Care:</strong> Support around menopause and later years.</li>
                <li><strong>Referral Links:</strong> Labs, imaging, and surgical specialists.</li>
              </ul>
            </div>


            {/* Section 4 — When to Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3. When to Visit
              </h2>


              <p className="text-gray-700 mb-4">
                Consider a visit if you notice:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular, very heavy, or painful periods</li>
                <li>Pelvic pain or unusual discharge</li>
                <li>Planning or confirming a pregnancy</li>
                <li>Questions about contraception</li>
                <li>Menopause-related changes</li>
                <li>Routine check-ups advised by your doctor</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Seek urgent care for sudden severe pain or very heavy bleeding.
              </p>
            </div>


            {/* Section 5 — Build a Shortlist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                4. How to Build a Shortlist
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your family doctor or earlier gynaecologist</li>
                <li>Trusted friends and relatives</li>
                <li>Hospital and clinic listings</li>
                <li>Official medical council directories for doctor details</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Aim for two or three clinics to compare.
              </p>
            </div>


            {/* Section 6 — Check Doctors */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                5. Check the Doctors
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of experience in gynaecology</li>
                <li>Experience with concerns like yours</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Credentials can be verified through the council’s records.
              </p>
            </div>


            {/* Section 7 — Support Team */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                6. Check the Support Team
              </h2>


              <p className="text-gray-700 mb-4">
                A clinic is more than one doctor.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Trained nurses or assistants</li>
                <li>Clear front-desk support</li>
                <li>Availability of a female doctor or staff member, if you prefer</li>
                <li>Links for tests, scans, and specialist referrals</li>
              </ul>
            </div>


            {/* Section 8 — First Visit Before You Go */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                7. Your First Visit: Before You Go
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Write down your symptoms and when they began.</li>
                <li>Note your cycle dates.</li>
                <li>List current medicines and past conditions.</li>
                <li>Gather earlier reports and scans.</li>
                <li>Prepare your questions.</li>
                <li>Decide whether to bring a companion.</li>
              </ul>
            </div>


            {/* Section 9 — First Visit Arrival */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                8. Your First Visit: Arrival
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Arrive a little early for forms.</li>
                <li>Carry ID, reports, and any insurance details.</li>
                <li>Share only the details needed at the counter.</li>
                <li>Ask for privacy if registration feels crowded.</li>
              </ul>
            </div>


            {/* Section 10 — Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                9. Your First Visit: The Consultation
              </h2>


              <p className="text-gray-700 mb-4">
                The doctor usually begins with conversation.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>You explain your concerns and history.</li>
                <li>The doctor asks about cycles, health, and lifestyle.</li>
                <li>Be honest, even about sensitive topics.</li>
                <li>Ask for clarification if anything is unclear.</li>
              </ul>
            </div>


            {/* Section 11 — Examination */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                10. If an Examination Is Needed
              </h2>


              <p className="text-gray-700 mb-4">
                Not every visit includes one.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The doctor should explain what will be done and why.</li>
                <li>Your permission should be asked first.</li>
                <li>You can ask for a female staff member to be present.</li>
                <li>You can ask to pause or stop.</li>
              </ul>
            </div>


            {/* Section 12 — After Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                11. After the Consultation
              </h2>


              <p className="text-gray-700 mb-4">
                Make sure you understand the plan in simple words.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirm medicines, tests, and follow-up dates.</li>
                <li>Ask who to call if symptoms change.</li>
                <li>Ask for key points in writing if needed.</li>
              </ul>
            </div>


            {/* Section 13 — Judge Communication */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                12. Judge Communication
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Do they listen without judgement?</li>
                <li>Do they explain in simple language?</li>
                <li>Do they welcome questions?</li>
                <li>Do they respect your choices?</li>
                <li>Do they avoid pressure?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                You should leave feeling heard and informed.
              </p>
            </div>


            {/* Section 14 — Questions to Ask Clinic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                13. Questions to Ask the Clinic
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What services are offered on site?</li>
                <li>Can I choose a female doctor?</li>
                <li>What is the usual waiting time?</li>
                <li>What are the consultation and test charges?</li>
                <li>How do I reach the clinic with concerns after a visit?</li>
                <li>What happens in an emergency?</li>
              </ul>
            </div>


            {/* Section 15 — Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                14. Privacy and Dignity
              </h2>


              <p className="text-gray-700 mb-4">
                Privacy is essential in a women’s clinic.
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


            {/* Section 16 — Hygiene Checklist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                15. Hygiene Checklist
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tidy rooms and clean washrooms</li>
                <li>Fresh linen and clean examination surfaces</li>
                <li>Visible hand-wash facilities</li>
                <li>Proper disposal arrangements</li>
              </ul>
            </div>


            {/* Section 17 — Clinic Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                16. Clinic Environment Checklist
              </h2>


              <p className="text-gray-700 mb-4">
                Design supports comfort and trust.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Layout:</strong> A clear flow from reception to waiting to consultation.</li>
                <li><strong>Surfaces:</strong> Washable, non-porous materials that are easy to keep clean.</li>
                <li><strong>Lighting:</strong> Soft, glare-free light in waiting areas and bright light for examination.</li>
                <li><strong>Sound:</strong> Rooms that keep conversations private.</li>
                <li><strong>Seating:</strong> Supportive chairs, with space for companions and elders.</li>
                <li><strong>Access:</strong> Step-free entry, wide doors, non-slip floors, and accessible washrooms.</li>
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


            {/* Section 18 — Family-Friendly Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                17. Family-Friendly Features
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A safe, tidy corner for small children</li>
                <li>Seating suited to elderly companions</li>
                <li>Drinking water and clean washrooms nearby</li>
                <li>A private corner for feeding and changing a baby</li>
              </ul>
            </div>


            {/* Section 19 — Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                18. Understanding Costs
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultation fee and follow-up charges</li>
                <li>Test and scan costs</li>
                <li>Procedure and medicine costs</li>
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
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Poor privacy during consultation or examination</li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </div>


            {/* Section 21 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                20. Common Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Choosing only by advertisements</li>
                <li>Delaying a visit despite worsening symptoms</li>
                <li>Skipping follow-up</li>
                <li>Self-medicating from online advice</li>
                <li>Not asking about costs</li>
                <li>Staying with a clinic where you feel uncomfortable</li>
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
                For women’s health clinics, practical interior planning can support privacy, hygiene, accessibility, calm lighting, comfortable seating, and family-friendly spaces. Clinical accuracy, qualified staff, equipment standards, and patient safety remain the responsibility of the clinic and medical team.
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