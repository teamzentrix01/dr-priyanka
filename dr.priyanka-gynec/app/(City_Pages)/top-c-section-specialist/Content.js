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
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function TopCSectionSpecialist() {
  const faqs = [
    {
      q: "Who is a C-section specialist?",
      a: "An obstetrician-gynaecologist trained to manage pregnancy, labor and cesarean surgery.",
    },
    {
      q: "How do I know if a C-section doctor is good?",
      a: "Check qualifications, experience, honest advice, facilities and how clearly she communicates.",
    },
    {
      q: "Does a top specialist always recommend a C-section?",
      a: "No. A good doctor recommends it only when it is medically needed.",
    },
    {
      q: "What qualifications should a C-section specialist have?",
      a: "A recognized MS, MD or DNB in obstetrics and gynaecology, with valid medical registration.",
    },
    {
      q: "Is a bigger hospital always better for a C-section?",
      a: "Not necessarily. Surgeon skill, team and emergency readiness matter most.",
    },
    {
      q: "Can I choose a lady doctor for my C-section?",
      a: "Yes. Many women prefer one for comfort, as long as she is qualified and experienced.",
    },
    {
      q: "What should I ask at my first consultation?",
      a: "Ask why surgery is needed, the risks, the team, the anesthesia, the cost and emergency plans.",
    },
    {
      q: "How long does recovery take after a C-section?",
      a: "Usually 6 to 8 weeks, with full strength returning over a few months.",
    },
    {
      q: "When should I get a second opinion?",
      a: "If you feel unsure, pressured or unconvinced about the reason for surgery.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Top C-Section Specialist: How to Find the Right Doctor for a Safe Delivery
              </h1>

              <p className="mb-4 text-gray-700">
                When you learn that you may need a cesarean delivery, one
                question quickly rises above the rest: &quot;Who is the best
                doctor to trust with this surgery?&quot;
              </p>

              <p className="mb-4 text-gray-700">
                Searching for a top C-section specialist is a sensible step. A
                C-section is major abdominal surgery, and the skill, judgment
                and care of your doctor affect your safety, your baby&apos;s
                safety and your recovery.
              </p>

              <p className="mb-4 text-gray-700">
                But &quot;top&quot; does not mean the loudest advertisement or
                the biggest hospital. A truly top specialist is defined by
                qualifications, experience, honesty, preparation and compassion.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What &quot;top specialist&quot; really means</li>
                <li>Qualities of an excellent C-section doctor</li>
                <li>How to verify credentials and experience</li>
                <li>Red flags to avoid</li>
                <li>Questions to ask at your first visit</li>
                <li>What a quality surgical team looks like</li>
                <li>How to prepare for surgery and recovery</li>
              </ul>
            </div>

            {/* Section 2 — What Top Means */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does &quot;Top C-Section Specialist&quot; Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                A C-section specialist is an obstetrician-gynaecologist trained
                to manage pregnancy, labor and surgical delivery. The word
                &quot;top&quot; should reflect how safely and thoughtfully she
                or he cares for patients, not how popular the clinic looks
                online.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Top Specialist Is Usually
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Well qualified in obstetrics and gynaecology</li>
                <li>Experienced in both normal and surgical deliveries</li>
                <li>Skilled in handling emergencies and complications</li>
                <li>Honest about when surgery is truly needed</li>
                <li>Clear and kind in communication</li>
                <li>Backed by a reliable team and facility</li>
                <li>Available for follow-up and urgent concerns</li>
              </ul>
            </div>

            {/* Section 3 — Why It Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Specialist Matters So Much
              </h2>

              <p className="mb-4 text-gray-700">
                A C-section is common and generally safe when performed by
                skilled professionals. Still, it carries real risks, including
                bleeding, infection, anesthesia reactions and slower recovery.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Skilled Specialist Can Help By
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Planning carefully before surgery</li>
                <li>Reducing the risk of complications through good technique</li>
                <li>Responding quickly if something unexpected happens</li>
                <li>Ensuring clean, sterile conditions</li>
                <li>Supporting smoother recovery with clear aftercare advice</li>
                <li>Protecting your future pregnancies through careful uterine closure</li>
              </ul>
            </div>

            {/* Section 4 — Qualities */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Qualities of an Excellent C-Section Specialist
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Strong Medical Qualifications
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A recognized MBBS and postgraduate degree in obstetrics and gynaecology (MS, MD or DNB)</li>
                <li>Additional training or fellowships, which show a commitment to learning</li>
                <li>Valid medical council registration</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Real-World Surgical Experience
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular experience performing C-sections</li>
                <li>Comfort with planned and emergency surgeries</li>
                <li>Experience with complex cases, such as repeat C-sections, placenta problems and high-risk pregnancies</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Honest and Ethical Advice
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Recommends a C-section only when medically needed</li>
                <li>Supports a safe normal delivery when appropriate</li>
                <li>Explains reasons clearly without pressure</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Excellent Communication
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uses simple language</li>
                <li>Welcomes your questions</li>
                <li>Explains risks and benefits openly</li>
                <li>Involves you and your family in decisions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Calm Decision-Making in Emergencies
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Acts quickly and confidently when labor takes an unexpected turn</li>
                <li>Coordinates smoothly with the anesthetist, nurses and paediatrician</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Compassion and Respect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Treats you with dignity</li>
                <li>Respects your privacy and preferences</li>
                <li>Offers emotional support, not just medical care</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Continuity of Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Follows your pregnancy from the early weeks to delivery</li>
                <li>Knows your history and concerns</li>
                <li>Stays involved in your postnatal recovery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Willingness to Keep Learning
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uses up-to-date safe practices</li>
                <li>Stays current with modern technology and guidelines</li>
              </ul>
            </div>

            {/* Section 5 — When Needed */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Do You Need a C-Section Specialist?
              </h2>

              <p className="mb-4 text-gray-700">
                Your gynaecologist will recommend a C-section when it is safer
                for you, your baby or both.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Medical Reasons
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Breech (feet-first) or sideways position</li>
                <li>Placenta previa, where the placenta covers the cervix</li>
                <li>Labor that is not progressing</li>
                <li>Signs of fetal distress, such as abnormal heart rate</li>
                <li>A very large baby</li>
                <li>Previous C-section or uterine surgery in certain cases</li>
                <li>Twins or higher multiples with complications</li>
                <li>Severe high blood pressure or pre-eclampsia</li>
                <li>Certain infections that may pass to the baby</li>
                <li>Umbilical cord problems</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Good Specialist Will
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Explain exactly why surgery is advised</li>
                <li>Discuss alternatives where safe</li>
                <li>Never rush you into surgery without a medical reason</li>
              </ul>

              <p className="text-gray-700">
                For information on natural birth support, see the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/normal-delivery"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Normal Delivery
                </a>{" "}
                page.
              </p>
            </div>

            {/* Section 6 — Verify Credentials */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Verify a Specialist&apos;s Credentials
              </h2>

              <p className="mb-4 text-gray-700">
                Do not rely on advertising alone. Take these practical steps:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Check the qualification: Look for degrees in obstetrics and gynaecology on the clinic&apos;s official materials.</li>
                <li>Confirm registration: Doctors should hold a valid state or national medical council registration.</li>
                <li>Review experience: Ask how many years she has practiced and how many deliveries she handles.</li>
                <li>Look for recognized training: Fellowships and specialized courses signal extra expertise.</li>
                <li>Visit the official website and profiles: Check that the information is consistent and professional.</li>
                <li>Ask for clarity: A confident doctor is happy to answer questions about her background.</li>
              </ul>
            </div>

            {/* Section 7 — Red Flags */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags: Signs You Should Look Elsewhere
              </h2>

              <p className="mb-4 text-gray-700">
                Be cautious if a doctor or clinic:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pushes for a C-section without explaining a medical reason</li>
                <li>Refuses to answer questions or gets defensive</li>
                <li>Gives vague or evasive answers about costs</li>
                <li>Has no clear emergency plan, anesthetist or blood availability</li>
                <li>Makes guarantees of perfect outcomes, since no honest doctor can promise this</li>
                <li>Has an unhygienic or poorly managed facility</li>
                <li>Is unreachable during pregnancy and difficult to contact in emergencies</li>
                <li>Pressures you to decide immediately</li>
                <li>Shows disrespect towards your concerns or preferences</li>
              </ul>

              <p className="text-gray-700">
                Trust your instincts: If something feels wrong, seek a second
                opinion.
              </p>
            </div>

            {/* Section 8 — Quality Facility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Quality C-Section Facility Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                A great specialist works within a safe system. Look for:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A clean, well-maintained operation theatre</li>
                <li>A qualified anesthetist available for surgery</li>
                <li>Blood availability or arrangements for emergencies</li>
                <li>Newborn care support and a trained paediatric team</li>
                <li>Trained, attentive nursing staff</li>
                <li>Clear infection control practices</li>
                <li>Emergency backup, such as generator support and critical-care access</li>
                <li>Proper postnatal rooms that allow rest and bonding</li>
                <li>Transparent billing with clear explanations</li>
              </ul>
            </div>

            {/* Section 9 — Questions */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask a C-Section Specialist at Your First Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Bring this checklist to your consultation:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What are your qualifications and experience in performing C-sections?</li>
                <li>Is a C-section definitely needed in my case, and why?</li>
                <li>Could I safely try a normal delivery?</li>
                <li>What are the risks and benefits for me and my baby?</li>
                <li>Who will be in the operating theatre with me?</li>
                <li>What type of anesthesia will be used?</li>
                <li>Can my husband or a family member be present?</li>
                <li>What emergency arrangements do you have?</li>
                <li>How long will I stay in hospital?</li>
                <li>What does recovery look like?</li>
                <li>What is the total estimated cost and what does it include?</li>
                <li>Will you personally be available at the time of delivery?</li>
                <li>How can I reach you with urgent concerns?</li>
              </ul>
            </div>

            {/* Section 10 — Planned vs Emergency */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planned vs Emergency C-Section: Why Experience Counts
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Planned C-Section
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Scheduled in advance after proper evaluation</li>
                <li>Allows time to prepare physically and emotionally</li>
                <li>Easier to arrange the right team and facilities</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Emergency C-Section
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Decided when a sudden risk appears during labor</li>
                <li>Requires fast, coordinated action</li>
                <li>A specialist who already knows your history can make decisions more confidently</li>
              </ul>

              <p className="text-gray-700">
                This is why continuity matters. When the same doctor follows
                your pregnancy, she understands your health, your risk factors
                and your wishes, and can respond more smoothly if plans change.
              </p>
            </div>

            {/* Section 11 — Recovery */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After a C-Section: What a Good Specialist Prepares You For
              </h2>

              <p className="mb-4 text-gray-700">
                A top specialist gives you a clear recovery plan, not just a
                surgery date.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hospital stay: usually about 3 to 4 days</li>
                <li>Walking: gentle, assisted walking within the first day, as advised</li>
                <li>Pain management: prescribed medicines keep you comfortable</li>
                <li>Wound care: keep it clean and dry, and attend the review visit</li>
                <li>Diet: protein, iron, fiber, fruits and plenty of fluids</li>
                <li>Rest: sleep when the baby sleeps and accept help</li>
                <li>Lifting: avoid heavy weights for around 6 to 8 weeks</li>
                <li>Follow-ups: a check-up at about 6 weeks, and earlier if needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Contact Your Doctor Immediately If You Notice
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever</li>
                <li>Heavy bleeding or foul-smelling discharge</li>
                <li>Redness, swelling or pus at the wound</li>
                <li>Severe or worsening pain</li>
                <li>Pain or swelling in one leg</li>
                <li>Breathlessness or chest pain</li>
                <li>Persistent sadness or severe anxiety</li>
              </ul>
            </div>

            {/* Section 12 — Emotional Support */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Support: The Mark of a Truly Caring Specialist
              </h2>

              <p className="mb-4 text-gray-700">
                Physical safety comes first, but emotional care shapes how you
                remember your birth.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Caring Specialist Will
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Listen to your fears without judgment</li>
                <li>Explain every step in simple words</li>
                <li>Respect your choices wherever medically safe</li>
                <li>Encourage family support</li>
                <li>Watch for signs of baby blues or postpartum depression</li>
                <li>Remind you that needing a C-section is not a failure</li>
              </ul>
            </div>

            {/* Section 13 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About C-Section Specialists
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: &quot;The most expensive doctor is always the best.&quot; Fact: Price does not guarantee quality. Check experience, honesty and facilities.</li>
                <li>Myth: &quot;A bigger hospital always means safer surgery.&quot; Fact: What matters is the surgeon&apos;s skill, the team and emergency readiness.</li>
                <li>Myth: &quot;A good doctor always suggests a C-section.&quot; Fact: A good doctor suggests it only when medically needed.</li>
                <li>Myth: &quot;A good doctor will always avoid a C-section.&quot; Fact: The right decision is based on safety, not on a fixed preference.</li>
                <li>Myth: &quot;Once a C-section, always a C-section.&quot; Fact: Some women can attempt a normal delivery after a previous C-section, depending on their situation.</li>
              </ul>
            </div>

            {/* Section 14 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation: Dr. Priyanka Gynaec
              </h2>

              <p className="mb-6 text-black">
                Dr. Priyanka Pachauri: Best Gynaecologist in Moradabad
              </p>

              <p className="mb-6 text-black">
                Fertility • Maternity • 3D Laparoscopy
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 15 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}