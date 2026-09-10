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

export default function AdvancedLaparoscopicGynaecologistMoradabad() {
  const faqs = [
    {
      q: "What does &quot;advanced&quot; laparoscopic gynaecology mean?",
      a: "It refers to surgery performed with 3D/4K technology and specialised training, allowing even complex cases to be handled through keyhole methods.",
    },
    {
      q: "How is advanced laparoscopy different from standard keyhole surgery?",
      a: "It uses higher-definition imaging, more precise instruments, and surgeons with additional fellowship-level training.",
    },
    {
      q: "Is advanced laparoscopic surgery safe for large fibroids?",
      a: "Yes, an experienced laparoscopic gynaecologist can often manage even large fibroids through keyhole surgery.",
    },
    {
      q: "How long does recovery take after advanced laparoscopic surgery?",
      a: "Most patients resume light daily activities within 5–7 days and are fully recovered in 1–2 weeks.",
    },
    {
      q: "Can I still conceive after laparoscopic fibroid or cyst removal?",
      a: "Yes, these procedures are designed to preserve the uterus and ovaries wherever medically possible.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use in Moradabad?",
      a: "3D/4K laparoscopic systems, 3D/4D ultrasound, time-lapse embryo imaging, and AI-based fertility analysis.",
    },
    {
      q: "Does Dr. Priyanka Pachauri treat endometriosis?",
      a: "Yes, through advanced 3D laparoscopic excision aimed at relieving pain and improving fertility outcomes.",
    },
    {
      q: "How do I book a consultation?",
      a: "You can call or message on WhatsApp at 8979670705 to schedule an appointment.",
    },
    {
      q: "Is hospital stay required after laparoscopic surgery?",
      a: "Most procedures require only a short stay, with discharge typically within 24 hours.",
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
                Advanced Laparoscopic Gynaecologist in Moradabad: Modern, Safe & Precise Women's Surgery
              </h1>

              <p className="text-gray-700 mb-4">
                Women's healthcare has changed dramatically over the last decade, and one of the biggest shifts has been the move towards advanced, minimally invasive treatment. If you are searching for an advanced laparoscopic gynaecologist in Moradabad, it usually means you or a loved one is dealing with something like a fibroid, an ovarian cyst, endometriosis, heavy bleeding, or difficulty conceiving — and you want a solution that is precise, safe, and does not involve a long, painful recovery. Advanced laparoscopic gynaecology uses high-definition 3D/4K cameras, fine surgical instruments, and years of specialised surgical training to treat complex gynaecological conditions through tiny incisions instead of large open cuts.
              </p>

              <p className="text-gray-700">
                This guide walks you through what &quot;advanced&quot; laparoscopic care actually means, which conditions it treats, what to expect, and how Dr. Priyanka Pachauri's clinic in Moradabad delivers this level of care locally.
              </p>
            </div>

            {/* Section 2 — What Makes Laparoscopic Gynaecology "Advanced"? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes Laparoscopic Gynaecology &quot;Advanced&quot;?
              </h2>

              <p className="text-gray-700 mb-4">
                Not all keyhole surgery is the same. The word &quot;advanced&quot; specifically points to a higher level of technology, training, and surgical capability. Here is what typically separates advanced laparoscopic care from basic or standard procedures:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Use of 3D and 4K high-definition cameras instead of older 2D systems, giving the surgeon true depth perception during surgery</li>
                <li>Ability to handle complex and high-risk cases — large fibroids, deep endometriosis, complicated cysts — laparoscopically instead of converting to open surgery</li>
                <li>Access to advanced imaging support, such as 3D/4D ultrasound, for precise pre-surgical planning</li>
                <li>Surgeons trained through international fellowships in minimally invasive gynaecological surgery</li>
                <li>Use of fertility-preserving surgical techniques, critical for women who wish to conceive after treatment</li>
                <li>Faster turnaround between diagnosis and treatment, avoiding unnecessary delays or repeated tests</li>
                <li>Lower complication and conversion rates (fewer cases needing to be switched to open surgery mid-procedure)</li>
              </ul>
            </div>

            {/* Section 3 — Why Advanced Laparoscopic Surgery Is Better */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Advanced Laparoscopic Surgery Is Better for Patients
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing an advanced laparoscopic approach over traditional open surgery brings real, measurable benefits for patients in Moradabad:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tiny incisions of just 5–10 mm instead of one large surgical cut</li>
                <li>Considerably less blood loss during the procedure</li>
                <li>Reduced risk of wound infection because the incision area is minimal</li>
                <li>Shorter hospital stay, with most patients discharged within 24 hours</li>
                <li>Faster return to daily routine — often within 5–7 days instead of several weeks</li>
                <li>Minimal scarring, which fades significantly over time</li>
                <li>Better preservation of the uterus and ovaries wherever medically possible</li>
                <li>Lower overall pain levels, reducing the need for strong painkillers after surgery</li>
              </ul>
            </div>

            {/* Section 4 — Conditions Managed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gynaecological Conditions Managed Through Advanced Laparoscopy
              </h2>

              <p className="text-gray-700 mb-4">
                An advanced laparoscopic gynaecologist is equipped to diagnose and surgically manage a wide range of conditions, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Ovarian Cysts (Laparoscopic Cystectomy):</strong> Careful removal of the cyst while protecting healthy ovarian tissue</li>
                <li><strong>Uterine Fibroids (Laparoscopic Myomectomy):</strong> Fibroid removal with the uterus left intact, ideal for women planning future pregnancy</li>
                <li><strong>Laparoscopic Hysterectomy:</strong> Complete or partial uterus removal through keyhole surgery for conditions like severe fibroids or abnormal bleeding</li>
                <li><strong>Endometriosis Excision:</strong> Precise removal of endometrial tissue outside the uterus to relieve chronic pelvic pain</li>
                <li><strong>Sacrocolpopexy:</strong> Advanced keyhole repair for uterine or vaginal vault prolapse</li>
                <li><strong>Laparoscopic Sterilisation:</strong> Safe, permanent, day-care contraception procedure</li>
                <li><strong>Diagnostic and Operative Hysteroscopy:</strong> Evaluation and treatment of uterine polyps, abnormal bleeding, and fertility-related concerns</li>
                <li><strong>PCOS-Related Infertility Management:</strong> Laparoscopic ovarian drilling combined with personalised fertility planning</li>
              </ul>
            </div>

            {/* Section 5 — The Patient Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Patient Journey: From Consultation to Recovery
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding the full treatment journey can reduce anxiety significantly. Here is what patients typically go through with an advanced laparoscopic gynaecologist:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Initial Consultation:</strong> Detailed history-taking, symptom review, and a physical examination</li>
                <li><strong>Diagnostic Workup:</strong> Ultrasound, blood tests, or hysteroscopy as needed to confirm the diagnosis</li>
                <li><strong>Treatment Discussion:</strong> Clear explanation of whether medication, a minor procedure, or laparoscopic surgery is the right path</li>
                <li><strong>Pre-Surgery Preparation:</strong> Fitness tests and clear instructions on fasting, medication, and what to expect on the day of surgery</li>
                <li><strong>The Procedure:</strong> Performed under general anaesthesia, typically lasting 30 minutes to a couple of hours depending on complexity</li>
                <li><strong>Recovery in Hospital:</strong> Most patients are up and walking within hours, with discharge often the same or next day</li>
                <li><strong>Follow-Up Care:</strong> Scheduled visits to monitor healing, review reports, and plan next steps, including fertility guidance if relevant</li>
              </ul>
            </div>

            {/* Section 6 — How Technology Improves Outcomes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Advanced Technology Improves Diagnosis and Outcomes
              </h2>

              <p className="text-gray-700 mb-4">
                Technology plays a central role in advanced laparoscopic gynaecology, both before and during surgery:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>3D/4D Ultrasound Imaging:</strong> Helps map fibroids, cysts, and uterine abnormalities in detail before surgery</li>
                <li><strong>High-Definition 3D Laparoscopic Systems:</strong> Give surgeons a magnified, life-like view for far greater surgical accuracy</li>
                <li><strong>Time-Lapse Embryo Monitoring:</strong> Supports fertility patients undergoing IVF by tracking embryo development continuously</li>
                <li><strong>AI-Assisted Semen and Fertility Analysis:</strong> Improves diagnostic accuracy for couples facing infertility</li>
                <li><strong>Digital Patient Records:</strong> Ensure your complete medical history is available at every visit, improving continuity of care</li>
              </ul>
            </div>

            {/* Section 7 — Choosing the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing the Right Advanced Laparoscopic Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                With more clinics now claiming to offer &quot;advanced&quot; laparoscopic care, it helps to know what to actually verify before choosing your doctor:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirm the doctor's fellowship training and specific experience in laparoscopic gynaecological surgery</li>
                <li>Check whether the clinic uses genuine 3D/4K laparoscopic equipment, not outdated 2D systems</li>
                <li>Look for transparent communication about diagnosis, treatment options, and costs before any surgery</li>
                <li>Read patient testimonials to understand real experiences, not just marketing claims</li>
                <li>Ask about the doctor's specific experience with your condition — fibroids, endometriosis, infertility, or prolapse</li>
                <li>Prefer a clinic offering complete care under one roof, from consultation through surgery to follow-up and fertility support</li>
                <li>Notice whether the doctor and staff make you feel heard and comfortable, not rushed through the process</li>
              </ul>
            </div>

            {/* Section 8 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Advanced Laparoscopic Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, through her clinic Dr. Priyanka Gynaec, is one of the recognised names offering advanced laparoscopic gynaecological care in Moradabad. Her website, gynaecologistmoradabad.com, reflects a strong, technology-driven approach to women's health:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Offers a full range of advanced laparoscopic procedures — cystectomy, myomectomy, hysterectomy, sacrocolpopexy, sterilisation, and endometriosis excision</li>
                <li>Equipped with High-Definition 3D laparoscopic surgery systems, 3D/4D ultrasound machines, GERI time-lapse imaging incubators, and AI-powered semen analysis</li>
                <li>Also provides antenatal, postnatal, normal delivery, high-risk pregnancy care, and paediatric consultations under the same roof</li>
                <li>Patient testimonials describe clear explanations, comfort from the first visit, and step-by-step guidance throughout treatment</li>
                <li>Actively publishes educational blog content covering PCOS and infertility, endometriosis recovery, and trimester-wise pregnancy guidance</li>
                <li>Positioned around the philosophy &quot;Her Health First,&quot; focusing on empathy alongside advanced surgical technology</li>
                <li>Conveniently located and accessible for patients across Moradabad and nearby areas</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This blend of advanced surgical technology, specialised laparoscopic training, and patient-first communication is exactly what defines genuinely advanced laparoscopic gynaecological care.
              </p>
            </div>

            {/* Section 9 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs You Should Not Ignore
              </h2>

              <p className="text-gray-700 mb-4">
                Many conditions that eventually require laparoscopic surgery begin with symptoms that are easy to dismiss. Do not delay a consultation if you notice:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Periods that are unusually heavy, prolonged, or irregular</li>
                <li>Persistent pelvic or lower abdominal pain, especially during periods or intercourse</li>
                <li>Difficulty conceiving after a year of regular, unprotected attempts</li>
                <li>A constant feeling of bloating, pressure, or a lump in the lower abdomen</li>
                <li>Unexplained fatigue or heaviness that worsens around your cycle</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Early evaluation with an advanced laparoscopic gynaecologist allows most conditions to be treated with a simpler, less invasive procedure than if diagnosis is delayed.
              </p>
            </div>

            {/* Section 10 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Laparoscopic Gynaecological Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Several misconceptions still stop women from opting for advanced laparoscopic treatment. It helps to separate fact from fear:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Myth:</strong> Laparoscopic surgery is only for minor problems. <strong>In reality,</strong> Advanced laparoscopic surgeons routinely manage large fibroids, deep endometriosis, and complex hysterectomies through keyhole methods.</li>
                <li><strong>Myth:</strong> Recovery is the same as open surgery. <strong>In reality,</strong> Recovery is considerably faster, with most patients back to light activity within a week instead of a month.</li>
                <li><strong>Myth:</strong> It always costs much more than open surgery. <strong>In reality,</strong> While the procedure cost may be slightly higher, shorter hospital stays and faster return to work often balance this out.</li>
                <li><strong>Myth:</strong> Laparoscopic surgery is not safe for older women or those with other health conditions. <strong>In reality,</strong> With proper pre-surgical evaluation, most patients, including those with mild comorbidities, can safely undergo laparoscopic procedures.</li>
                <li><strong>Myth:</strong> All laparoscopic surgeons offer the same quality of care. <strong>In reality,</strong> Skill, training, and equipment vary widely, which is exactly why choosing an &quot;advanced&quot; laparoscopic gynaecologist matters.</li>
              </ul>
            </div>

            {/* Section 11 — Post-Surgery Care Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Post-Surgery Care Tips for Faster Healing
              </h2>

              <p className="text-gray-700 mb-4">
                Good post-operative care plays a big role in how smoothly recovery goes after laparoscopic surgery. General guidance shared by experienced gynaecologists usually includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Follow the prescribed medication schedule strictly, including antibiotics and pain relief if advised</li>
                <li>Avoid heavy lifting or strenuous exercise for the first 2–3 weeks, even if you feel fine</li>
                <li>Keep the incision sites clean and dry as instructed to prevent infection</li>
                <li>Stay well hydrated and eat a fibre-rich diet to avoid constipation, which can strain healing tissue</li>
                <li>Attend every follow-up appointment, even if you feel completely recovered</li>
                <li>Report any unusual symptoms — fever, heavy bleeding, or increasing pain — to your gynaecologist immediately</li>
                <li>Ease back into physical activity gradually rather than resuming full workload all at once</li>
              </ul>
            </div>

            {/* Section 12 — How to Prepare for Your First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for Your First Visit
              </h2>

              <p className="text-gray-700 mb-4">
                A little preparation can make your first consultation far more productive:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note down your symptoms, including when they started and how they have changed over time</li>
                <li>Bring any previous test reports, ultrasound scans, or prescriptions related to your gynaecological health</li>
                <li>Track your menstrual cycle pattern for at least the last 2–3 months if possible</li>
                <li>Prepare a list of questions you want answered, including about surgery, recovery, and costs</li>
                <li>Be open and honest about your medical history, as it directly affects treatment planning</li>
                <li>If fertility is a concern, mention your family planning goals clearly during the consultation</li>
              </ul>
            </div>

            {/* Section 13 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact and Appointment Details
              </h2>

              <p className="text-gray-700 mb-4">
                For appointments, treatment queries, or to discuss your symptoms confidentially, reach out through any of the following:
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
                          href="mailto:drpriyanka@gynaecologistmoradabad.com"
                          className="hover:underline"
                        >
                          drpriyanka@gynaecologistmoradabad.com
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

                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: faq.a }} />
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