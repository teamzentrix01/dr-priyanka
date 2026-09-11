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

export default function DayCareLaparoscopicGynaeSurgeryMoradabad() {
  const faqs = [
    {
      q: "What is day care laparoscopic gynae surgery?",
      a: "A procedure where the patient is operated on and discharged the same day or within 24 hours, without an extended hospital stay.",
    },
    {
      q: "Which gynae surgeries can be done as day care procedures?",
      a: "Sterilisation, hysteroscopy, polypectomy, ovarian drilling, and select cystectomy cases are common examples.",
    },
    {
      q: "Is day care laparoscopic surgery safe?",
      a: "Yes, when performed by an experienced surgeon with proper pre-surgery evaluation and discharge protocols.",
    },
    {
      q: "How long does the actual procedure take?",
      a: "Most day care laparoscopic procedures take between 20 minutes to about an hour.",
    },
    {
      q: "Can laparoscopic hysterectomy be done as day care surgery?",
      a: "It usually requires a short overnight stay for safe monitoring, depending on the individual case.",
    },
    {
      q: "What happens if a complication occurs after going home?",
      a: "Patients are given clear emergency contact details and are advised to report symptoms like fever or heavy bleeding immediately.",
    },
    {
      q: "Does Dr. Priyanka Pachauri offer day care laparoscopic surgery in Moradabad?",
      a: "Yes, several of her laparoscopic and hysteroscopic procedures are well suited to day care management.",
    },
    {
      q: "Is day care surgery more affordable than inpatient surgery?",
      a: "Yes, it typically reduces cost by avoiding extended hospital bed and nursing charges.",
    },
    {
      q: "How can I book a consultation?",
      a: "You can call or message on WhatsApp at 8979670705 to schedule your appointment.",
    },
    {
      q: "Where is the clinic located?",
      a: "At A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
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
                Day Care Laparoscopic Gynae Surgery in Moradabad: Faster Treatment Without a Long Hospital Stay
              </h1>

              <p className="text-gray-700 mb-4">
                For most working women and homemakers alike, the idea of being admitted to a hospital for several days can feel like a huge disruption — to family responsibilities, to work, and to daily life in general. This is exactly why day care laparoscopic gynae surgery has become such a welcome option in modern gynaecology. With advanced 3D laparoscopic techniques, many gynaecological procedures that once required a week-long hospital stay can now be completed with the patient walking out the same day or the next morning.
              </p>

              <p className="text-gray-700">
                This guide explains what day care laparoscopic surgery really means, which procedures qualify, how safe it is, and how to access this facility with a trusted specialist in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Is Day Care Laparoscopic Gynae Surgery? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Day Care Laparoscopic Gynae Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                Day care surgery refers to a procedure where the patient is admitted, operated upon, monitored for a short recovery period, and discharged — all within the same day or within 24 hours, without needing an extended hospital stay.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Performed through small keyhole incisions using advanced 3D/4K laparoscopic technology</li>
                <li>Typically completed under general or regional anaesthesia within a defined, short surgical window</li>
                <li>Includes a brief observation period after surgery to confirm the patient is stable and pain is well managed</li>
                <li>Designed around minimal tissue trauma, so the body needs less time to stabilise before discharge</li>
                <li>Involves clear, written home-care instructions given before the patient leaves the hospital</li>
                <li>Followed by a scheduled review visit within the first week to check healing progress</li>
              </ul>
            </div>

            {/* Section 3 — Why Day Care Surgery Has Become Popular */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Day Care Surgery Has Become So Popular
              </h2>

              <p className="text-gray-700 mb-4">
                Day care laparoscopic gynae surgery is not simply about convenience — it reflects genuine advances in surgical safety and precision. Patients and doctors both prefer it for solid, practical reasons:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Minimises disruption to work, childcare, and household responsibilities</li>
                <li>Reduces the emotional stress of an extended hospital stay, especially for anxious patients</li>
                <li>Lowers the risk of hospital-acquired infections since the stay is so short</li>
                <li>Reduces overall treatment cost by cutting down on extended bed charges and nursing care days</li>
                <li>Allows patients to recover in the comfort and familiarity of their own home</li>
                <li>Reflects the surgeon's confidence in achieving a clean, precise, low-trauma procedure</li>
                <li>Frees up hospital resources for patients who genuinely need longer inpatient monitoring</li>
              </ul>
            </div>

            {/* Section 4 — Procedures Commonly Performed as Day Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gynaecological Procedures Commonly Performed as Day Care Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Not every gynaecological surgery is suitable for same-day discharge, but many common procedures are excellent candidates when performed laparoscopically by an experienced surgeon:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Laparoscopic Sterilisation (Tubal Ligation):</strong> A classic, well-established day care procedure for permanent contraception</li>
                <li><strong>Diagnostic Hysteroscopy:</strong> Internal evaluation of the uterus, usually completed within an hour with same-day discharge</li>
                <li><strong>Hysteroscopic Polypectomy:</strong> Removal of uterine polyps, typically requiring no overnight stay</li>
                <li><strong>Laparoscopic Cystectomy (for smaller, uncomplicated cysts):</strong> Ovarian cyst removal often managed comfortably as day care</li>
                <li><strong>Laparoscopic Ovarian Drilling:</strong> A fertility-focused procedure for PCOS-related infertility, usually done as day care</li>
                <li><strong>Minor Diagnostic Laparoscopy:</strong> Used to investigate unexplained pelvic pain or infertility with quick recovery</li>
                <li><strong>Select Laparoscopic Myomectomy Cases:</strong> Smaller fibroid removals may sometimes qualify for day care discharge, depending on complexity</li>
              </ul>

              <p className="text-gray-700 mt-4">
                More complex procedures like laparoscopic hysterectomy or extensive endometriosis excision may still require a short overnight stay for safe monitoring, depending on the individual case.
              </p>
            </div>

            {/* Section 5 — How Day Care Differs From Inpatient Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Day Care Surgery Differs From Traditional Inpatient Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Comparing the two approaches makes it clear why day care laparoscopic surgery is such a significant improvement for suitable cases:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Hospital stay of a few hours to 24 hours, compared to 3–5 days for traditional inpatient surgery</li>
                <li>Smaller incisions and less tissue trauma, allowing faster physical stabilisation</li>
                <li>Considerably lower total treatment cost due to reduced bed and nursing charges</li>
                <li>Reduced exposure to hospital environments, lowering infection risk</li>
                <li>Quicker return to home comforts, which often supports better emotional recovery</li>
                <li>Still includes the same level of surgical precision and safety monitoring as inpatient procedures</li>
              </ul>
            </div>

            {/* Section 6 — Is Day Care Surgery Safe? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Is Day Care Laparoscopic Surgery Safe?
              </h2>

              <p className="text-gray-700 mb-4">
                Safety is naturally the biggest question patients have before opting for a shorter hospital stay. When performed by an experienced laparoscopic surgeon with proper protocols, day care surgery is considered very safe:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients undergo thorough pre-surgery evaluation to confirm they are medically fit for same-day discharge</li>
                <li>Anaesthesia type and dosage are carefully selected to allow faster, safer recovery</li>
                <li>Strict discharge criteria are followed — stable vitals, controlled pain, and ability to walk and pass urine normally</li>
                <li>Clear emergency contact information is provided in case of any concern after reaching home</li>
                <li>A follow-up visit within the first week ensures any early complications are caught quickly</li>
                <li>Only appropriately selected cases are offered day care surgery; complex or high-risk cases are always planned for a longer, closely monitored stay</li>
              </ul>
            </div>

            {/* Section 7 — What to Expect on the Day of Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect on the Day of Your Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Knowing the typical day care surgery timeline helps reduce anxiety and allows better planning at home:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Morning Admission:</strong> Arrival at the hospital, final checks, and pre-surgery preparation</li>
                <li><strong>The Procedure:</strong> Performed under anaesthesia, usually lasting 20 minutes to about an hour depending on complexity</li>
                <li><strong>Recovery Room Monitoring:</strong> A short period of observation as anaesthesia wears off</li>
                <li><strong>Light Refreshment and Mobility Check:</strong> Patients are encouraged to sit up, drink fluids, and walk a little</li>
                <li><strong>Discharge Briefing:</strong> Clear instructions on medication, wound care, activity restrictions, and warning signs</li>
                <li><strong>Return Home:</strong> Most patients are discharged by evening or the next morning, accompanied by a family member</li>
                <li><strong>Follow-Up Visit:</strong> Scheduled within about a week to confirm smooth healing</li>
              </ul>
            </div>

            {/* Section 8 — Preparing for a Smooth Experience */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for a Smooth Day Care Surgery Experience
              </h2>

              <p className="text-gray-700 mb-4">
                A little preparation in advance makes the entire day care surgery process far easier for both the patient and the family:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Arrange for a family member or friend to accompany you and drive you home afterwards</li>
                <li>Follow fasting instructions carefully before anaesthesia, exactly as advised by your doctor</li>
                <li>Wear comfortable, loose clothing on the day of the procedure</li>
                <li>Arrange help at home for the first day or two, especially for household chores and childcare</li>
                <li>Keep all prescribed medicines and contact numbers easily accessible once you reach home</li>
                <li>Plan to rest fully on the day of surgery, even if you feel well enough to be active</li>
              </ul>
            </div>

            {/* Section 9 — Choosing the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing the Right Doctor for Day Care Laparoscopic Surgery in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Not every clinic is equally equipped to safely offer day care laparoscopic surgery. Before choosing, it helps to check the following:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirm the surgeon's specific experience with laparoscopic day care procedures</li>
                <li>Check whether the facility has proper recovery and monitoring infrastructure for same-day discharge</li>
                <li>Ask about the clear discharge criteria and emergency contact protocol used by the clinic</li>
                <li>Look for transparent guidance on which specific procedures are suitable for day care in your case</li>
                <li>Read patient experiences to understand how smoothly the process typically goes</li>
                <li>Prefer a clinic offering complete continuity of care, from pre-surgery consultation through post-discharge follow-up</li>
              </ul>
            </div>

            {/* Section 10 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Trusted Day Care Laparoscopic Surgery in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, through her clinic Dr. Priyanka Gynaec, offers advanced laparoscopic gynaecological care in Moradabad, including procedures well suited to day care management. Her website, gynaecologistmoradabad.com, reflects the following strengths relevant to day care surgical planning:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A wide range of laparoscopic procedures — cystectomy, sterilisation, hysteroscopy, polypectomy, and more — many of which are excellent day care candidates</li>
                <li>High-Definition 3D laparoscopic surgery systems that support quicker, more precise procedures with reduced tissue trauma</li>
                <li>Advanced 3D/4D ultrasound imaging for accurate pre-surgery planning and case selection</li>
                <li>A complete care structure spanning consultation, surgery, and follow-up under one roof, ideal for smooth day care coordination</li>
                <li>Genuine patient testimonials describing comfort, clarity, and step-by-step guidance throughout the treatment process</li>
                <li>Educational blog content that helps patients understand recovery timelines and what to expect after laparoscopic procedures</li>
                <li>A patient-first philosophy, &quot;Her Health First,&quot; which naturally supports safe, well-communicated day care surgical planning</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This blend of laparoscopic expertise, modern equipment, and structured patient communication is exactly what makes day care laparoscopic surgery both safe and comfortable.
              </p>
            </div>

            {/* Section 11 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Day Care Laparoscopic Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                A few misconceptions still make patients hesitant about choosing day care surgery. Here is the reality behind them:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Myth:</strong> Day care surgery is rushed and less thorough than inpatient surgery. <strong>In reality,</strong> The surgical technique and safety standards are identical; only the recovery monitoring duration differs.</li>
                <li><strong>Myth:</strong> Same-day discharge means higher risk of complications. <strong>In reality,</strong> Discharge only happens once strict, medically defined safety criteria are met.</li>
                <li><strong>Myth:</strong> Day care surgery is only for very minor procedures. <strong>In reality,</strong> Many moderately complex laparoscopic and hysteroscopic procedures now qualify, thanks to advanced technology.</li>
                <li><strong>Myth:</strong> There is no follow-up support after going home. <strong>In reality,</strong> A structured follow-up visit and emergency contact protocol are always part of proper day care surgical care.</li>
                <li><strong>Myth:</strong> It is not suitable for older patients. <strong>In reality,</strong> Suitability depends on overall health and the specific procedure, not age alone.</li>
              </ul>
            </div>

            {/* Section 12 — Warning Signs to Watch For */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs to Watch for After Going Home
              </h2>

              <p className="text-gray-700 mb-4">
                Even after a smooth day care procedure, it is important to know which symptoms need prompt medical attention:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Fever or chills within the first few days after surgery</li>
                <li>Heavy bleeding that soaks through pads faster than expected</li>
                <li>Severe or worsening abdominal pain not relieved by prescribed medication</li>
                <li>Redness, swelling, or discharge from the small incision sites</li>
                <li>Difficulty passing urine or persistent nausea and vomiting</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Contacting your surgeon promptly for any of these signs ensures small issues are addressed before they become bigger problems.
              </p>
            </div>

            {/* Section 13 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact and Appointment Details
              </h2>

              <p className="text-gray-700 mb-4">
                For appointments, treatment queries, or to check if your condition qualifies for day care surgery, reach out through any of the following:
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec Clinic</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:9079765578" className="hover:underline">
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a href="tel:8979670705" className="hover:underline">
                          +91 8979670705 (WhatsApp)
                        </a>
                      </div>

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        https://www.gynaecologistmoradabad.com/
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Link href="/contact">
                    <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                      <Phone className="inline mr-2" size={18} />
                      Contact Us
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                      Explore Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 14 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQ)
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