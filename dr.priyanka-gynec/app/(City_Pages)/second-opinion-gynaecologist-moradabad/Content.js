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
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function SecondOpinionMoradabad() {
  const faqs = [
    {
      q: "Which doctor offers second opinion consultations in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers independent evaluation of gynaecological diagnoses and treatment plans.",
    },
    {
      q: "When should I consider getting a second opinion?",
      a: "Before major surgery, a serious diagnosis, or if you feel unclear about your current treatment plan.",
    },
    {
      q: "Do I need to bring my previous reports?",
      a: "Yes, bringing all previous scans, tests, and reports helps make the second opinion thorough and accurate.",
    },
    {
      q: "What if the two opinions disagree?",
      a: "This is common and simply means you have more information; a third opinion can help if needed.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Is a second opinion useful for fertility treatment plans too?",
      a: "Yes, reviewing an IVF or fertility treatment plan can help clarify options and expectations.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with my reports before visiting?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Will seeking a second opinion delay my treatment significantly?",
      a: "Not usually — most second opinions can be arranged quickly, especially for time-sensitive concerns.",
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
                Second Opinion Gynaecologist in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                Facing a serious gynaecological diagnosis or a recommendation for major surgery can feel overwhelming, especially when the decision affects fertility, long-term health, or requires irreversible treatment. In such moments, seeking a second opinion gynaecologist in Moradabad isn't a sign of distrust — it's a responsible step toward making a fully informed decision.
              </p>

              <p className="text-gray-700">
                This guide explains when a second opinion is worth seeking, what to expect from the process, and how Dr. Priyanka Pachauri supports patients looking for clarity and confidence in their treatment path.
              </p>
            </div>

            {/* Section 2 — What Is a Second Opinion and Why Does It Matter */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a Second Opinion and Why Does It Matter?
              </h2>

              <p className="text-gray-700 mb-4">
                A second opinion means consulting another qualified doctor to review your diagnosis, test results, or recommended treatment plan before proceeding. It matters because:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Medicine often involves judgment calls, and experienced doctors can sometimes interpret the same findings differently</li>
                <li>A second opinion can confirm that a proposed treatment is truly necessary and appropriate</li>
                <li>It can reveal alternative treatment options that weren't discussed in the first consultation</li>
                <li>For irreversible procedures like hysterectomy, extra confirmation provides valuable peace of mind</li>
                <li>It helps patients feel more confident and less anxious about moving forward with treatment</li>
                <li>In some cases, a second opinion can catch a misdiagnosis or suggest additional testing</li>
              </ul>
            </div>

            {/* Section 3 — When Should You Consider Seeking a Second Opinion */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Consider Seeking a Second Opinion?
              </h2>

              <p className="text-gray-700 mb-4">
                While not every situation requires a second opinion, certain circumstances make it especially worthwhile:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>You've been advised to undergo major surgery, such as a hysterectomy or myomectomy</li>
                <li>You've received a diagnosis of a serious condition like endometriosis, fibroids, or suspected cancer</li>
                <li>You're struggling with infertility and previous treatments haven't worked</li>
                <li>You feel your concerns weren't fully addressed or explained in your first consultation</li>
                <li>The recommended treatment feels rushed, unclear, or overly aggressive for your situation</li>
                <li>You want confirmation before committing to a costly or invasive procedure</li>
                <li>You're considering IVF or advanced fertility treatment and want to understand all available options</li>
                <li>Something about your diagnosis simply doesn't feel right, and you want reassurance</li>
              </ul>
            </div>

            {/* Section 4 — Common Situations Where Women Seek a Second Opinion */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Situations Where Women Seek a Second Opinion
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Recommended hysterectomy</strong> – checking if alternative, fertility-preserving treatments exist</li>
                <li><strong>Fibroid or cyst removal surgery</strong> – confirming whether surgery is truly necessary or if monitoring could work first</li>
                <li><strong>Unexplained infertility</strong> – exploring whether additional tests or a different treatment approach might help</li>
                <li><strong>Recurrent pregnancy loss</strong> – seeking a more detailed investigation into underlying causes</li>
                <li><strong>Abnormal Pap smear or biopsy results</strong> – understanding the full picture before proceeding with further treatment</li>
                <li><strong>Endometriosis management</strong> – comparing medical management versus surgical options</li>
                <li><strong>IVF treatment planning</strong> – reviewing protocols and success rate expectations before starting a cycle</li>
                <li><strong>PCOS treatment approach</strong> – exploring lifestyle, medical, or combined treatment strategies</li>
              </ul>
            </div>

            {/* Section 5 — Benefits of Getting a Second Opinion */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Getting a Second Opinion
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Greater confidence and peace of mind before major decisions</li>
                <li>Potential discovery of less invasive or more suitable treatment alternatives</li>
                <li>Clarification of confusing or conflicting medical information</li>
                <li>Reduced risk of unnecessary surgery or overtreatment</li>
                <li>Better understanding of your condition through a fresh, detailed explanation</li>
                <li>An opportunity to ask questions you may not have thought of during the first visit</li>
                <li>Validation that you're making the right choice, whether you proceed with the original plan or change course</li>
              </ul>
            </div>

            {/* Section 6 — What to Expect During a Second Opinion Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a Second Opinion Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Bring all previous reports and records</strong> – including test results, scans, biopsy reports, and the first doctor's notes</li>
                <li><strong>Detailed history review</strong> – the second doctor will want to understand your full medical background, not just the current issue</li>
                <li><strong>Independent evaluation</strong> – some tests may be repeated if results are outdated or unclear</li>
                <li><strong>Honest, unbiased assessment</strong> – a good second-opinion doctor evaluates your case on its own merits, not to simply agree or disagree with the first</li>
                <li><strong>Clear explanation of findings</strong> – in plain language, covering all viable treatment options</li>
                <li><strong>Discussion of pros and cons</strong> – for each treatment path, including risks, recovery time, and expected outcomes</li>
                <li><strong>Your final decision, informed and unhurried</strong> – the goal is clarity, not pressure toward any particular path</li>
              </ul>
            </div>

            {/* Section 7 — How to Prepare for a Second Opinion Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for a Second Opinion Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Collect and organise all previous medical reports, prescriptions, and scan images</li>
                <li>Write down your questions and concerns in advance so nothing gets missed</li>
                <li>Be ready to explain your symptoms and treatment history in detail</li>
                <li>Approach the visit with an open mind — the second opinion may confirm the original recommendation</li>
                <li>Ask for a clear explanation if there's any disagreement between the two opinions</li>
                <li>Don't hesitate to ask about success rates, risks, and alternative treatments</li>
              </ul>
            </div>

            {/* Section 8 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Choice for a Second Opinion in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad known for offering honest, detailed evaluations for patients seeking clarity on their diagnosis or treatment plan. Her clinic follows the guiding principle of "Her Health First," ensuring every patient receives an unbiased, thorough review of her case.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Independent evaluation of diagnosis and treatment recommendations</li>
                    <li>3D laparoscopic gynaecological surgery – for confirming or reconsidering surgical recommendations</li>
                    <li>Fertility evaluation and IVF treatment review</li>
                    <li>Pregnancy, antenatal, and postnatal care</li>
                    <li>Diagnostic hysteroscopy for further uterine evaluation when needed</li>
                    <li>Endometriosis and chronic pelvic pain management</li>
                    <li>PCOS and hormonal imbalance evaluation</li>
                    <li>Laparoscopic myomectomy, cystectomy, and hysterectomy for surgical case reviews</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology Supporting Thorough Second Opinions
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines for detailed, updated pelvic and reproductive imaging</li>
                    <li>High-definition 3D laparoscopic systems, useful for reassessing surgical necessity or approach</li>
                    <li>GERI time-lapse imaging and AI-based fertility diagnostics for reviewing fertility treatment plans</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic for a Second Opinion
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – gold medal academic credentials and international fellowship training across laparoscopy, fertility, and endometriosis care</li>
                    <li><strong>Continuity you can count on</strong> – a thorough, integrated review of your full medical history, not a rushed evaluation</li>
                    <li><strong>Outcomes patients hope for</strong> – clear answers, confidence in the chosen path, and fertility-preserving alternatives where possible</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 9 — Common Concerns About Seeking a Second Opinion */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Concerns About Seeking a Second Opinion
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>"Will my first doctor be offended?"</strong> – Most doctors understand and respect a patient's right to seek clarity on important health decisions</li>
                <li><strong>"Isn't it a waste of time and money?"</strong> – For major or irreversible decisions, the cost of a second opinion is often small compared to the value of confidence and clarity</li>
                <li><strong>"What if the two opinions disagree?"</strong> – This is common and simply means you now have more information to make a well-rounded decision, possibly with a third opinion if needed</li>
                <li><strong>"Do I need to tell the second doctor about the first opinion?"</strong> – Yes, sharing this helps the second doctor understand the full context, though they should still evaluate independently</li>
                <li><strong>"Is it only for serious diagnoses?"</strong> – While especially valuable for major decisions, a second opinion can be sought for any diagnosis that leaves you uncertain</li>
              </ul>
            </div>

            {/* Section 10 — How to Get a Second Opinion in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Get a Second Opinion in Moradabad
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Gather all your medical records, reports, and scan images from your first consultation.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Write down your specific concerns and questions about the diagnosis or treatment plan.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Book a consultation with an experienced, independent gynaecologist.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Share your full history honestly, including the first opinion you received.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Ask detailed questions about alternative treatments, risks, and expected outcomes.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Take time to reflect before making your final decision — you're not obligated to decide immediately.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Choose the treatment path that feels medically sound and right for your personal circumstances.
                </p>
              </div>
            </div>

            {/* Section 11 — Benefits of Getting a Second Opinion Locally */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Getting a Second Opinion Locally in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>No need to travel to another city for a thorough, professional evaluation</li>
                <li>Easier follow-up visits if further tests or discussions are needed</li>
                <li>Lower overall cost compared to seeking opinions in metro-city hospitals</li>
                <li>Access to modern diagnostic technology for an updated, accurate assessment</li>
                <li>A comfortable, familiar setting for discussing a difficult or confusing diagnosis</li>
              </ul>
            </div>

            {/* Section 12 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for a reliable second opinion gynaecologist in Moradabad, here are the verified contact details from the official website:
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Award size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p className="text-black">Dr. Priyanka Pachauri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p className="text-black">Dr. Priyanka Gynaec – Fertility • Maternity • 3D Laparoscopy</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Phone / Call for Appointment</p>
                      <a href="tel:9079765578" className="text-black hover:underline">
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="tel:8979670705" className="text-black hover:underline">
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:drpriyanka@gynaecologistmoradabad.com" className="text-black hover:underline">
                        drpriyanka@gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a href="https://www.gynaecologistmoradabad.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
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

            {/* Section 13 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Trust-centred messaging</strong> – The homepage tagline "Her Health First" reflects a patient-focused approach well-suited to second opinion seekers looking for honest, unbiased evaluation.</li>
                <li><strong>Comprehensive surgical and fertility services listed</strong> – Detailed listings for hysterectomy, myomectomy, cystectomy, and IVF suggest strong capability to review and reassess these specific case types.</li>
                <li><strong>Technology transparency</strong> – Mentioning 3D laparoscopy, 4D ultrasound, and AI-based fertility diagnostics builds confidence that a fresh evaluation would be technically thorough.</li>
                <li><strong>Academic credentials highlighted</strong> – References to gold medal academic background and fellowship training support credibility for complex case review.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for quick appointment booking.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated page or blog post specifically addressing second opinion consultations could help the website rank better for this topic and reassure patients that this service is actively welcomed.</li>
              </ul>
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