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

export default function DrPachauriGynaecologistMoradabad() {
  const faqs = [
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "She is a gynaecologist in Moradabad specializing in laparoscopy, fertility treatment, and pregnancy care, practicing as Dr. Priyanka Gynaec.",
    },
    {
      q: "What is Dr. Pachauri's clinic philosophy?",
      a: "Her clinic follows a &quot;Her Health First&quot; approach, prioritizing patient comfort, choice, and clear communication.",
    },
    {
      q: "Does Dr. Pachauri perform laparoscopic surgery?",
      a: "Yes, she specializes in 3D laparoscopic procedures including cystectomy, myomectomy, and hysterectomy.",
    },
    {
      q: "Does the clinic offer IVF and fertility treatment?",
      a: "Yes, including advanced tools like a GERI time-lapse embryo incubator and AI-powered semen analysis.",
    },
    {
      q: "Can I consult Dr. Pachauri for a high-risk pregnancy?",
      a: "Yes, the clinic offers structured high-risk pregnancy monitoring and care.",
    },
    {
      q: "Does the clinic treat menstrual disorders and PCOS?",
      a: "Yes, menstrual disorder and PCOS management are core parts of the practice.",
    },
    {
      q: "How do I book an appointment with Dr. Pachauri?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is Dr. Pachauri's clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does the clinic offer paediatric consultations too?",
      a: "Yes, paediatric consultations, vaccinations, and newborn care are available.",
    },
    {
      q: "Where can I read more about women's health topics from Dr. Pachauri's clinic?",
      a: "The clinic publishes educational blogs on topics like PCOS, endometriosis, and pregnancy care on its official website.",
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
                Dr. Pachauri, Gynaecologist in Moradabad: A Complete Profile of Dr. Priyanka Pachauri's Practice
              </h1>

              <p className="text-gray-700 mb-4">
                When searching for a gynaecologist in Moradabad, one name comes up consistently — Dr. Priyanka Pachauri, widely known through her clinic, Dr. Priyanka Gynaec. Patients across Moradabad and surrounding areas turn to her for everything from routine gynaecological care to complex laparoscopic surgery, fertility treatment, and high-risk pregnancy management.
              </p>

              <p className="text-gray-700">
                This article offers a complete look at who Dr. Pachauri is, what she specializes in, the technology and philosophy behind her practice, and how to get in touch with her clinic for a consultation.
              </p>
            </div>

            {/* Section 2 — Who Is Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Is Dr. Priyanka Pachauri
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a gynaecologist based in Moradabad, practicing under the clinic name Dr. Priyanka Gynaec, located in Gandhi Nagar. According to her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, she is recognized for her expertise across laparoscopy, fertility treatment, and endometriosis care, and her practice is built around gold-medal academic credentials and international fellowship training. Her clinic describes itself as a &quot;leading women's health and fertility center in Moradabad,&quot; combining advanced medical technology with a strong emphasis on patient comfort and communication.
              </p>

              <p className="text-gray-700">
                The guiding philosophy of her practice is captured in the phrase &quot;Her Health First&quot; — a patient-centered approach where every consultation begins with listening carefully to the patient's story, choices, and concerns before recommending any test, treatment, or procedure. This philosophy runs through every service her clinic offers, from a first-time gynaecological visit to complex fertility treatment or high-risk pregnancy care.
              </p>
            </div>

            {/* Section 3 — Areas of Specialization */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Areas of Specialization
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gynaecology and Laparoscopy
                  </h3>
                  <p className="text-gray-700">
                    Dr. Pachauri specializes in 3D laparoscopic care for a wide range of women's reproductive health conditions. This includes minimally invasive keyhole procedures that reduce pain, scarring, and recovery time compared to traditional open surgery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Fertility and IVF
                  </h3>
                  <p className="text-gray-700">
                    Her clinic offers personalized fertility and IVF treatment, supported by advanced technology including a GERI time-lapse imaging incubator and AI-powered semen analysis with DNA integrity testing — tools designed to improve the accuracy and success rate of fertility treatments.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pregnancy and Birthing Care
                  </h3>
                  <p className="text-gray-700">
                    From antenatal screenings to delivery, Dr. Pachauri's clinic offers supportive, customized birthing experiences, with a stated focus on encouraging natural, normal vaginal delivery wherever safely possible while remaining fully equipped to manage complications.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    High-Risk Pregnancy Management
                  </h3>
                  <p className="text-gray-700">
                    For pregnancies involving additional medical complexity, the clinic provides structured monitoring and care designed to support the safest possible outcome for both mother and baby.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Menstrual Disorders and PCOS
                  </h3>
                  <p className="text-gray-700">
                    Diagnosis and treatment of irregular periods, heavy bleeding, painful periods, and PCOS form a core part of the clinic's gynaecological practice, with attention to both hormonal management and long-term reproductive health.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Endometriosis Surgery
                  </h3>
                  <p className="text-gray-700">
                    The clinic offers advanced 3D laparoscopic excision for endometriosis, aimed at relieving pelvic pain and addressing the underlying condition directly, rather than only managing symptoms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Paediatric Care
                  </h3>
                  <p className="text-gray-700">
                    Alongside gynaecological services, the clinic also offers paediatric consultations, vaccinations, and newborn care, giving families continuity of care in one place.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Specific Procedures Offered */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Specific Procedures Offered
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Pachauri's clinic lists a detailed range of specialized procedures, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Laparoscopic Cystectomy</strong> – precision 3D keyhole surgery to remove ovarian cysts while preserving fertility</li>
                <li><strong>Laparoscopic Myomectomy</strong> – uterus-preserving 3D laparoscopic surgery for uterine fibroids</li>
                <li><strong>Laparoscopic Hysterectomy</strong> – advanced minimally invasive keyhole hysterectomy with fast recovery</li>
                <li><strong>Sacrocolpopexy</strong> – advanced keyhole repair for uterine and vaginal vault prolapse</li>
                <li><strong>Laparoscopic Sterilization</strong> – safe, permanent keyhole tubal ligation as a day-care procedure</li>
                <li><strong>Diagnostic Hysteroscopy</strong> – gentle endoscopic evaluation of the uterine cavity</li>
                <li><strong>Hysteroscopic Polypectomy</strong> – precision removal of uterine polyps without any incisions</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This range reflects a practice equipped to handle both routine gynaecological needs and more complex surgical cases, largely through minimally invasive techniques.
              </p>
            </div>

            {/* Section 5 — The Technology Behind the Practice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Technology Behind Dr. Pachauri's Practice
              </h2>

              <p className="text-gray-700 mb-4">
                A significant part of what sets Dr. Pachauri's clinic apart is its investment in advanced medical technology, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>High-Definition 3D Laparoscopic Surgery</strong> for precise, minimally invasive procedures</li>
                <li><strong>Voluson E22 BT2024</strong> with 3D and 4D ultrasound imaging for detailed diagnostic evaluation</li>
                <li><strong>GERI time-lapse imaging incubator</strong> for continuous embryo monitoring during fertility treatment</li>
                <li><strong>AI-powered semen analysis and DNA integrity testing</strong> to support more accurate fertility diagnostics</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This combination of tools allows for earlier, more accurate diagnosis and treatment planning across gynaecology, fertility, and pregnancy care.
              </p>
            </div>

            {/* Section 6 — Why Patients Choose Dr. Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Dr. Pachauri
              </h2>

              <p className="text-gray-700 mb-4">
                Based on the values highlighted on her clinic's website, patients consistently point to a few key reasons for choosing her practice:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Expertise With Heart
                  </h3>
                  <p className="text-gray-700">
                    Her credentials — including gold medal academic recognition and international fellowship training — are paired with a consultation style focused on empathy and patience rather than a purely clinical, transactional approach.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Continuity of Care
                  </h3>
                  <p className="text-gray-700">
                    From the first visit through every follow-up, the clinic emphasizes an integrated care team that remembers each patient's history and concerns, aiming for seamless support across every stage of treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Outcomes That Matter
                  </h3>
                  <p className="text-gray-700">
                    The clinic highlights real outcomes as central to its reputation — successful pregnancies after prolonged difficulty conceiving, pain relief after endometriosis treatment, and minimally invasive surgeries designed to protect fertility wherever possible.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Trust Built Through Word of Mouth
                  </h3>
                  <p className="text-gray-700">
                    According to the clinic, its reputation has grown largely through patients recommending the practice to family and friends — mothers referring daughters, and friends referring friends — rather than relying solely on advertising.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 — What Patients Say */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Patients Say
              </h2>

              <p className="text-gray-700">
                Patient testimonials shared on the clinic's website consistently describe feeling comfortable and understood from the very first visit, with the doctor explaining conditions and treatment options clearly at every step. One patient shared discovering the clinic through social media and described feeling at ease and well-guided throughout her visits, with every step of the process explained clearly along the way. This kind of feedback reflects the clinic's stated focus on empathetic, patient-first communication throughout the treatment journey.
              </p>
            </div>

            {/* Section 8 — Educational Resources */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Educational Resources From Dr. Pachauri's Clinic
              </h2>

              <p className="text-gray-700">
                Beyond direct patient care, Dr. Pachauri's clinic also publishes educational blog content covering common women's health topics, including guidance on PCOS and infertility, an explanation of advanced laparoscopic surgery for endometriosis, and a trimester-by-trimester guide to pregnancy and birthing care. This kind of resource can be a helpful starting point for patients who want to understand a condition or treatment option before their consultation.
              </p>
            </div>

            {/* Section 9 — What to Expect During a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                Based on the clinic's stated approach, patients visiting Dr. Pachauri can generally expect:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A consultation that begins with the doctor listening to the patient's full history and concerns</li>
                <li>Clear, jargon-free explanations of any diagnosis or recommended treatment</li>
                <li>Access to modern diagnostic tools like 3D/4D ultrasound when needed</li>
                <li>A discussion of all available treatment options, including minimally invasive alternatives where applicable</li>
                <li>A respectful, judgment-free environment for discussing sensitive gynaecological or fertility concerns</li>
              </ul>
            </div>

            {/* Section 10 — Who Should Consider Consulting */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Consider Consulting Dr. Pachauri
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Pachauri's practice is suited to a wide range of patients, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Women experiencing menstrual irregularities, heavy bleeding, or painful periods</li>
                <li>Women diagnosed with or suspected of having PCOS, fibroids, or endometriosis</li>
                <li>Couples facing difficulty conceiving who are considering fertility evaluation or IVF</li>
                <li>Pregnant women seeking antenatal care, including those with high-risk pregnancies</li>
                <li>Women considering minimally invasive gynaecological surgery</li>
                <li>Families looking for continuity of care across gynaecology and paediatric services</li>
              </ul>
            </div>

            {/* Section 11 — The Patient Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Patient Journey at Dr. Pachauri's Clinic
              </h2>

              <p className="text-gray-700">
                Understanding what a typical visit looks like can help new patients feel more prepared and less anxious about their first consultation. Based on the approach described on the clinic's website, the patient journey generally follows a few consistent stages. It begins with an initial conversation where the doctor listens to the patient's history, symptoms, and concerns without rushing through the discussion. From there, any necessary diagnostic tests — such as blood work, ultrasound imaging, or specialized screenings — are recommended and explained in advance, so the patient understands exactly why each test is being done. Once results are available, the doctor walks through the findings in plain language and discusses the available treatment options, including their benefits and trade-offs, allowing the patient to make an informed decision about her own care. For ongoing conditions or treatments like fertility care and pregnancy monitoring, the clinic emphasizes continuity, meaning the same care team follows the patient's progress across multiple visits rather than starting from scratch each time.
              </p>
            </div>

            {/* Section 12 — Community Trust and Reputation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Community Trust and Reputation in Moradabad
              </h2>

              <p className="text-gray-700">
                Dr. Pachauri's clinic has grown its patient base in Moradabad largely through community trust rather than aggressive marketing. As the clinic itself notes, much of its reputation has been built through patients recommending the practice to their own family members and friends — a pattern that's especially meaningful in a city like Moradabad, where personal recommendations often carry more weight than online advertising. This kind of organic growth tends to reflect consistent, positive patient experiences over time, since word-of-mouth referrals generally only continue when patients feel genuinely satisfied with the care they received. For someone searching for a reliable gynaecologist in the city, this pattern of community-driven trust is often one of the strongest indicators of a dependable, long-standing practice.
              </p>
            </div>

            {/* Section 13 — A Team-Based Approach to Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Team-Based Approach to Care
              </h2>

              <p className="text-gray-700">
                While Dr. Pachauri is the lead physician, her clinic operates with an integrated care team designed to support patients at every stage — from the initial front-desk interaction and appointment scheduling to diagnostic imaging, nursing support, and follow-up coordination. This team-based structure is intended to ensure that a patient's history and concerns are consistently tracked and communicated across visits, rather than relying on the patient to re-explain their situation each time. For conditions that require ongoing management, such as PCOS, fertility treatment, or high-risk pregnancy monitoring, this kind of coordinated support can make a meaningful difference in how smoothly the overall treatment process unfolds.
              </p>
            </div>

            {/* Section 14 — Clinic Location and Accessibility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Clinic Location and Accessibility
              </h2>

              <p className="text-gray-700">
                Dr. Pachauri's clinic, Dr. Priyanka Gynaec, is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001. This central location makes it accessible for patients traveling from various parts of Moradabad as well as nearby towns.
              </p>
            </div>

            {/* Section 15 — Contact Information */}
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

            {/* Section 16 — FAQs */}
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