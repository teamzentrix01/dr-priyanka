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

export default function QualityGynaecologicalCareMoradabad() {
  const faqs = [
    {
      q: "What does quality gynaecological care mean?",
      a: "It means accurate diagnosis, personalized treatment, patient safety, and clear communication throughout the care process.",
    },
    {
      q: "Where can I find quality gynaecological care in Moradabad?",
      a: "Dr. Priyanka Pachauri's clinic, Dr. Priyanka Gynaec, is a well-known provider of quality women's healthcare in Moradabad.",
    },
    {
      q: "Does the clinic use modern diagnostic technology?",
      a: "Yes, including 3D/4D ultrasound and AI-assisted imaging for accurate diagnosis.",
    },
    {
      q: "Are minimally invasive surgical options available?",
      a: "Yes, the clinic offers 3D laparoscopic and hysteroscopic procedures for faster recovery and less discomfort.",
    },
    {
      q: "Does the clinic provide fertility and IVF treatment?",
      a: "Yes, including advanced tools like a GERI time-lapse embryo incubator.",
    },
    {
      q: "Is high-risk pregnancy care available at the clinic?",
      a: "Yes, structured antenatal, postnatal, and high-risk pregnancy care are all offered.",
    },
    {
      q: "How do I book an appointment?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does the clinic treat PCOS and menstrual disorders?",
      a: "Yes, menstrual disorder and PCOS management are core services offered.",
    },
    {
      q: "Is paediatric care also available at the clinic?",
      a: "Yes, paediatric consultations are offered alongside gynaecological services.",
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
                Quality Gynaecological Care in Moradabad: What It Means and Where to Find It
              </h1>

              <p className="text-gray-700 mb-4">
                Not all gynaecological care is the same. Two clinics might offer similar services on paper, yet the actual quality of care — accuracy of diagnosis, safety of treatment, communication with patients, and long-term outcomes — can vary significantly. For women in Moradabad, understanding what &quot;quality gynaecological care&quot; really looks like can make the difference between a rushed, unsatisfying medical experience and one that genuinely improves health and wellbeing.
              </p>

              <p className="text-gray-700">
                This article breaks down the key markers of quality gynaecological care, the standards a good clinic should meet, and why Dr. Priyanka Pachauri's clinic has become a recognized name for quality women's healthcare in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Defines Quality Gynaecological Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Defines Quality Gynaecological Care
              </h2>

              <p className="text-gray-700 mb-4">
                Quality gynaecological care isn't just about having a medical degree and a clinic — it's about the combination of accurate diagnosis, evidence-based treatment, patient safety, and a genuinely supportive patient experience. A few core pillars define what quality actually looks like in practice:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Accurate and Timely Diagnosis
                  </h3>
                  <p className="text-gray-700">
                    Quality care starts with getting the diagnosis right — and getting it right quickly. This requires both clinical expertise and access to reliable diagnostic tools, since many gynaecological conditions, such as PCOS, endometriosis, or fibroids, can present with overlapping symptoms that require careful evaluation to distinguish.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Evidence-Based, Personalized Treatment
                  </h3>
                  <p className="text-gray-700">
                    Rather than applying a one-size-fits-all approach, quality care means tailoring treatment to each patient's specific condition, health history, and personal goals — whether that's preserving fertility, avoiding invasive surgery when possible, or managing a chronic condition long-term.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Safety and Minimally Invasive Options
                  </h3>
                  <p className="text-gray-700">
                    When surgery is necessary, quality care prioritizes patient safety and, where appropriate, minimally invasive techniques like laparoscopy and hysteroscopy, which generally involve smaller incisions, less pain, and faster recovery compared to traditional open surgery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Clear, Respectful Communication
                  </h3>
                  <p className="text-gray-700">
                    A hallmark of quality care is a doctor who explains conditions and treatment options in plain language, answers questions patiently, and ensures the patient feels informed and involved in decisions about her own body and health.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Continuity and Follow-Up
                  </h3>
                  <p className="text-gray-700">
                    Quality gynaecological care doesn't end after a single appointment. It includes appropriate follow-up, monitoring of treatment progress, and consistency across visits — especially important for conditions like PCOS, fertility treatment, or high-risk pregnancy that require ongoing management.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. A Comfortable, Respectful Environment
                  </h3>
                  <p className="text-gray-700">
                    From clinic hygiene to patient privacy during examinations, the physical and emotional environment of a clinic plays a significant role in the overall quality of the care experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 — Why Quality Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Quality Matters So Much in Gynaecological Care
              </h2>

              <p className="text-gray-700">
                Gynaecological conditions often involve sensitive symptoms that women may hesitate to discuss, even with a doctor. When care quality is lacking — rushed appointments, unclear explanations, or inconsistent follow-up — patients are more likely to leave with unresolved concerns or delay seeking care again in the future. On the other hand, high-quality care builds trust, encourages patients to seek help earlier, and ultimately leads to better long-term health outcomes. This is particularly important for conditions like PCOS, fibroids, and endometriosis, where early, accurate diagnosis often means simpler, less invasive treatment.
              </p>
            </div>

            {/* Section 4 — Key Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Key Services That Reflect Quality Gynaecological Care
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Menstrual Disorder and PCOS Management
                  </h3>
                  <p className="text-gray-700">
                    Quality care in this area involves thorough hormonal evaluation, not just symptom management, along with a long-term plan that considers the patient's overall reproductive health goals.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Laparoscopic and Minimally Invasive Surgery
                  </h3>
                  <p className="text-gray-700">
                    For conditions like fibroids, ovarian cysts, or endometriosis, quality surgical care means offering minimally invasive options wherever medically appropriate, which typically result in less pain, smaller scars, and quicker return to daily activities.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Fertility Evaluation and IVF
                  </h3>
                  <p className="text-gray-700">
                    High-quality fertility care combines accurate diagnostic testing, personalized treatment planning, and advanced technology to give patients the best possible chance of a successful outcome, along with honest, realistic guidance throughout the process.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Antenatal and High-Risk Pregnancy Care
                  </h3>
                  <p className="text-gray-700">
                    Quality pregnancy care includes structured, regular monitoring throughout every trimester, prompt identification of potential complications, and clear communication with the expectant mother at every step.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hysteroscopy for Uterine Conditions
                  </h3>
                  <p className="text-gray-700">
                    Diagnostic and therapeutic hysteroscopy allows for precise evaluation and treatment of uterine polyps or abnormal bleeding without the need for more invasive surgery — a reflection of a clinic's investment in advanced, patient-friendly technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 — How to Evaluate Quality */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Evaluate the Quality of a Gynaecology Clinic
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Check what diagnostic technology is available — clinics with 3D/4D ultrasound and modern imaging tools are generally better equipped for accurate diagnosis</li>
                <li>Ask about minimally invasive treatment options — a clinic that offers laparoscopic and hysteroscopic procedures reflects a commitment to safer, more comfortable care</li>
                <li>Read patient testimonials carefully — look for consistent mentions of feeling heard, informed, and respected, not just clinical outcomes</li>
                <li>Notice how your questions are handled during your first interaction, whether by phone, WhatsApp, or in person — this often reflects the overall culture of the clinic</li>
                <li>Consider the range of services offered — a clinic that can manage your care across different life stages avoids the need to switch doctors as your needs change</li>
              </ul>
            </div>

            {/* Section 6 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – A Benchmark for Quality Gynaecological Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) has built her practice in Moradabad around a clear commitment to quality care, guided by her clinic's stated philosophy of &quot;Her Health First.&quot; According to her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, this commitment is reflected across several dimensions of her practice:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li><strong>Advanced diagnostic technology:</strong> Including a Voluson E22 3D/4D ultrasound machine and AI-assisted imaging, for accurate and detailed evaluation</li>
                <li><strong>High-definition 3D laparoscopic surgery:</strong> For procedures including cystectomy, myomectomy, and hysterectomy, performed with a focus on preserving fertility and minimizing recovery time</li>
                <li><strong>Diagnostic and therapeutic hysteroscopy:</strong> For uterine conditions, offering incision-free evaluation and treatment</li>
                <li><strong>Fertility and IVF services:</strong> Supported by a GERI time-lapse embryo incubator and AI-powered semen analysis for more precise fertility diagnostics</li>
                <li><strong>Structured antenatal, postnatal, and high-risk pregnancy care:</strong> Designed to support safe outcomes throughout every stage of pregnancy</li>
                <li><strong>Paediatric consultations:</strong> Offering continuity of care for families beyond the mother's own health needs</li>
              </ul>

              <p className="text-gray-700">
                The clinic emphasizes that its reputation has grown through consistent, positive patient experiences shared by word of mouth, rather than relying solely on advertising — a pattern often associated with genuinely high-quality care. Patient testimonials featured on the website describe feeling comfortable and well-informed throughout their consultations, which aligns closely with the communication and continuity standards that define quality gynaecological care. The clinic is located in Gandhi Nagar, Moradabad, making it accessible to patients across the city and surrounding areas.
              </p>
            </div>

            {/* Section 7 — Role of Technology */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Role of Technology in Improving Care Quality
              </h2>

              <p className="text-gray-700">
                Modern diagnostic and surgical technology plays a significant role in raising the overall standard of gynaecological care. High-resolution 3D/4D ultrasound imaging allows for far more detailed evaluation of the uterus and ovaries than older imaging methods, helping doctors catch subtle abnormalities earlier. AI-assisted tools can support more precise fertility diagnostics, while minimally invasive laparoscopic and hysteroscopic techniques have transformed gynaecological surgery, replacing many procedures that once required large incisions and lengthy hospital stays. A clinic that invests in this kind of technology is generally better positioned to deliver consistently accurate, safer, and more comfortable care to its patients.
              </p>
            </div>

            {/* Section 8 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Quality Gynaecological Care
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li><strong>&quot;A more expensive clinic automatically means better quality care.&quot;</strong> Cost doesn't always correlate directly with quality — the technology used, doctor's expertise, and patient communication matter more.</li>
                <li><strong>&quot;Quality care always means longer appointment times.&quot;</strong> Efficient, well-organized clinics can provide thorough, high-quality consultations without unnecessary delays.</li>
                <li><strong>&quot;If a treatment works, the quality of care doesn't matter.&quot;</strong> How a diagnosis is reached and communicated matters just as much as the eventual outcome, especially for long-term conditions.</li>
                <li><strong>&quot;All gynaecology clinics offer the same level of surgical safety.&quot;</strong> Access to modern, minimally invasive surgical options can significantly affect safety and recovery time, and not every clinic offers the same capabilities.</li>
              </ul>
            </div>

            {/* Section 9 — How Quality Care Reduces Long-Term Health Risks */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Quality Care Reduces Long-Term Health Risks
              </h2>

              <p className="text-gray-700">
                One of the most significant but often overlooked benefits of quality gynaecological care is its impact on long-term health outcomes. Conditions like PCOS, if diagnosed and managed early, carry a much lower risk of complications such as insulin resistance or difficulty conceiving later on. Similarly, catching fibroids or endometriosis at an earlier stage often means treatment can be managed with medication or minimally invasive procedures, rather than more complex surgery down the line. Quality care also plays a preventive role — regular check-ups and open communication with a trusted doctor mean that subtle changes in symptoms are more likely to be caught and addressed before they develop into more serious conditions. In this sense, choosing a clinic that consistently delivers quality care isn't just about resolving an immediate concern; it's an investment in long-term reproductive and overall health.
              </p>
            </div>

            {/* Section 10 — Connection Between Quality Care and Patient Confidence */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Connection Between Quality Care and Patient Confidence
              </h2>

              <p className="text-gray-700">
                When patients experience consistently high-quality care, it tends to build confidence — not just in a specific doctor, but in the healthcare process as a whole. Patients who feel genuinely heard and well-informed are more likely to ask questions, report symptoms accurately, and follow through on recommended treatment plans, all of which directly improve outcomes. This is particularly relevant in gynaecological care, where hesitation or embarrassment can sometimes lead women to delay seeking help. A clinic that consistently prioritizes clear communication and patient comfort helps break this cycle, encouraging women to seek care proactively rather than waiting until a condition becomes more serious. Over time, this kind of trust often extends beyond the individual patient, as satisfied patients recommend the clinic to family members and friends, reinforcing the clinic's reputation for quality care within the community.
              </p>
            </div>

            {/* Section 11 — How to Prepare for a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for a Consultation to Get the Most Out of Quality Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Write down your symptoms, their duration, and how they affect your daily life</li>
                <li>Bring any previous test reports, prescriptions, or ultrasound results</li>
                <li>Prepare specific questions about your condition or treatment options</li>
                <li>Be honest and thorough about your symptoms, even ones that feel uncomfortable to mention</li>
                <li>Ask about follow-up plans so you understand what ongoing monitoring, if any, will be needed</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Being well-prepared allows the doctor to make the most of your consultation time and supports a more accurate, personalized treatment plan.
              </p>
            </div>

            {/* Section 12 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

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
                        Uttar Pradesh – 244001
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
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Social Media</p>
                      <div className="space-y-1">
                        <a
                          href="https://www.instagram.com/dr.priyanka.gynae/"
                          className="block hover:underline text-black"
                        >
                          Instagram: @dr.priyanka.gynae
                        </a>
                        <a
                          href="https://www.facebook.com/priyanka.pachauri.790080"
                          className="block hover:underline text-black"
                        >
                          Facebook: priyanka.pachauri.790080
                        </a>
                      </div>
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

            {/* Section 13 — FAQs */}
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