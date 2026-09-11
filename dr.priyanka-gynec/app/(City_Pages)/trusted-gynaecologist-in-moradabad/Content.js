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

export default function TrustedGynaecologistMoradabad() {
  const faqs = [
    {
      q: "Who is a trusted gynaecologist in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is a well-established, patient-focused gynaecologist in Moradabad.",
    },
    {
      q: "What conditions does Dr. Priyanka Pachauri treat?",
      a: "She treats menstrual disorders, PCOS, fibroids, endometriosis, infertility, and manages pregnancy care.",
    },
    {
      q: "Does the clinic offer laparoscopic surgery?",
      a: "Yes, the clinic offers 3D laparoscopic surgery for fibroids, cysts, endometriosis, and hysterectomy.",
    },
    {
      q: "Is fertility treatment available at the clinic?",
      a: "Yes, the clinic offers fertility evaluation and IVF services, including advanced embryo monitoring technology.",
    },
    {
      q: "Does the clinic provide pregnancy care?",
      a: "Yes, antenatal, postnatal, and high-risk pregnancy care are all available.",
    },
    {
      q: "How do I book an appointment with Dr. Priyanka Pachauri?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does the clinic use modern diagnostic technology?",
      a: "Yes, it offers 3D/4D ultrasound, AI-assisted imaging, and hysteroscopy for accurate diagnosis.",
    },
    {
      q: "Is the clinic suitable for first-time gynaecological consultations?",
      a: "Yes, the clinic follows a patient-first approach suitable for both first-time visits and ongoing care.",
    },
    {
      q: "Can I contact the clinic for a paediatric consultation too?",
      a: "Yes, paediatric consultations are also available at the clinic.",
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
                Trusted Gynaecologist in Moradabad: A Complete Guide to Choosing the Right Women's Health Specialist
              </h1>

              <p className="text-gray-700 mb-4">
                Finding a trusted gynaecologist is one of the most important healthcare decisions a woman can make. Whether it's a routine check-up, a menstrual health concern, pregnancy care, or a more complex condition like PCOS or fibroids, the right doctor can make the entire experience feel safe, comfortable, and reassuring. In Moradabad, many women struggle to find a gynaecologist they truly trust — someone who combines medical expertise with genuine empathy and takes the time to listen.
              </p>

              <p className="text-gray-700">
                This article explains what makes a gynaecologist trustworthy, the range of conditions a good women's health specialist should be able to treat, and why Dr. Priyanka Pachauri has become a go-to name for women's healthcare in Moradabad.
              </p>
            </div>

            {/* Section 2 — Why Trust Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Trust Matters So Much in Gynaecological Care
              </h2>

              <p className="text-gray-700">
                Gynaecological health is deeply personal, and many women feel hesitant discussing symptoms related to their periods, sexual health, fertility, or pregnancy — even with a doctor. A trusted gynaecologist creates an environment where patients feel comfortable being open and honest, without fear of judgment. This trust directly affects health outcomes: women who feel heard are more likely to disclose symptoms early, follow through with treatment plans, and return for necessary follow-ups. On the other hand, a rushed or dismissive consultation can lead to delayed diagnosis and worsening health conditions over time.
              </p>
            </div>

            {/* Section 3 — What Makes a Gynaecologist Trustworthy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes a Gynaecologist Truly Trustworthy
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Strong Medical Qualifications and Experience
                  </h3>
                  <p className="text-gray-700">
                    A trustworthy gynaecologist should have solid medical training, relevant specialization, and years of hands-on clinical experience across a range of conditions — not just routine check-ups, but complex cases involving surgery, high-risk pregnancy, and infertility.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Access to Modern Diagnostic and Treatment Technology
                  </h3>
                  <p className="text-gray-700">
                    Conditions like PCOS, fibroids, and endometriosis require accurate diagnosis using tools such as 3D/4D ultrasound, hormonal testing, and minimally invasive procedures like laparoscopy and hysteroscopy. A clinic equipped with modern technology can diagnose faster and treat more precisely, often with shorter recovery times.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Patient-Centered Communication
                  </h3>
                  <p className="text-gray-700">
                    A good gynaecologist explains conditions and treatment options in a way patients can actually understand, rather than using confusing medical jargon. They also take time to answer questions and address concerns rather than rushing through appointments.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. A Comprehensive Range of Services
                  </h3>
                  <p className="text-gray-700">
                    Women's healthcare needs change across different life stages — from adolescence to pregnancy to menopause. A trusted gynaecologist should be equipped to handle menstrual disorders, contraception counseling, pregnancy care, fertility treatment, and gynaecological surgery, so patients don't need to switch doctors as their needs evolve.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Positive Patient Experiences
                  </h3>
                  <p className="text-gray-700">
                    Word of mouth and patient testimonials often reveal a lot about a doctor's bedside manner, consultation style, and how supportive the overall clinic experience is — factors that are just as important as clinical expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Common Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Conditions a Trusted Gynaecologist Should Treat
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Menstrual Disorders
                  </h3>
                  <p className="text-gray-700">
                    This includes irregular periods, heavy bleeding, painful periods, and PCOS — some of the most frequent reasons women seek gynaecological care. A skilled gynaecologist diagnoses the root cause rather than only managing symptoms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    PCOS and Hormonal Imbalances
                  </h3>
                  <p className="text-gray-700">
                    PCOS affects a significant percentage of women of reproductive age and requires long-term, personalized management involving lifestyle guidance, medication, and regular monitoring.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Uterine Fibroids and Ovarian Cysts
                  </h3>
                  <p className="text-gray-700">
                    These non-cancerous growths can cause pain, irregular bleeding, or fertility issues. Treatment ranges from monitoring to minimally invasive laparoscopic removal, depending on size and symptoms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Endometriosis
                  </h3>
                  <p className="text-gray-700">
                    A condition where uterine-like tissue grows outside the uterus, often causing severe pain and, in some cases, fertility complications. It requires careful diagnosis and, frequently, surgical intervention.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pregnancy and Prenatal Care
                  </h3>
                  <p className="text-gray-700">
                    From routine antenatal check-ups to managing high-risk pregnancies, a trusted gynaecologist provides continuous, attentive care throughout the pregnancy journey, helping ensure the best outcomes for both mother and baby.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Infertility and Fertility Treatment
                  </h3>
                  <p className="text-gray-700">
                    For couples struggling to conceive, a gynaecologist with fertility expertise can offer evaluation, ovulation induction, and advanced treatments including IVF when needed.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Menopause Management
                  </h3>
                  <p className="text-gray-700">
                    As women approach menopause, hormonal changes can bring a range of symptoms. A trusted gynaecologist helps manage these changes safely and comfortably.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gynaecological Surgery
                  </h3>
                  <p className="text-gray-700">
                    For conditions requiring surgical intervention — hysterectomy, fibroid removal, or cyst removal — modern laparoscopic techniques allow for smaller incisions, less pain, and significantly faster recovery compared to traditional open surgery.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Before Choosing a Gynaecologist
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>What is your experience treating my specific condition?</li>
                <li>What diagnostic technology does your clinic use?</li>
                <li>Do you offer minimally invasive treatment options where possible?</li>
                <li>How do you handle emergencies or urgent concerns outside regular hours?</li>
                <li>Can I speak to you directly about my symptoms, or will I mostly interact with clinic staff?</li>
                <li>What do other patients say about their experience with your clinic?</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Asking these questions upfront can help you gauge whether a doctor's approach and expertise align with your needs before committing to ongoing care.
              </p>
            </div>

            {/* Section 6 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Dr. Priyanka Pachauri Is a Trusted Choice in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) has built a strong reputation in Moradabad as a reliable, experienced, and patient-focused gynaecologist. According to her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, her clinic is built around a &quot;Her Health First&quot; philosophy, meaning every consultation begins with carefully listening to the patient before recommending any test or treatment. The website highlights a comprehensive range of services, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li><strong>3D laparoscopic surgery:</strong> For fibroids, ovarian cysts, endometriosis, and hysterectomy, using minimally invasive techniques with faster recovery</li>
                <li><strong>Diagnostic and therapeutic hysteroscopy:</strong> For uterine polyps and abnormal bleeding</li>
                <li><strong>3D/4D ultrasound with AI-assisted imaging:</strong> For accurate, detailed diagnosis</li>
                <li><strong>PCOS and hormonal health management:</strong> Tailored to individual patients</li>
                <li><strong>Fertility evaluation and IVF services:</strong> Including a GERI time-lapse embryo incubator for advanced embryo monitoring</li>
                <li><strong>Antenatal, postnatal, and high-risk pregnancy care</strong></li>
                <li><strong>Paediatric consultations:</strong> Offering added convenience for young families</li>
              </ul>

              <p className="text-gray-700">
                Patient testimonials featured on the website consistently describe a respectful, supportive, and unhurried consultation experience — exactly the qualities that define a trusted gynaecologist. The clinic is located in Gandhi Nagar, Moradabad, making it easily accessible for patients across the city and nearby areas.
              </p>
            </div>

            {/* Section 7 — What Sets a Trusted Clinic Apart */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Sets a Truly Trusted Clinic Apart
              </h2>

              <p className="text-gray-700">
                Beyond medical expertise, a genuinely trustworthy gynaecology clinic pays attention to details that make patients feel respected and comfortable — clear communication about costs and procedures, privacy during consultations, a clean and well-maintained facility, and staff who treat every patient with courtesy regardless of their background or the nature of their concern. These factors, combined with clinical competence, are what turn a good doctor into a truly trusted one that patients recommend to friends and family.
              </p>
            </div>

            {/* Section 8 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Choosing a Gynaecologist
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li><strong>&quot;Any gynaecologist can handle any condition equally well.&quot;</strong> While all gynaecologists have core training, doctors often develop deeper expertise in specific areas like fertility, high-risk pregnancy, or minimally invasive surgery — it's worth checking a doctor's specific experience for your condition.</li>
                <li><strong>&quot;A busy clinic means the doctor won't have time for me.&quot;</strong> A busy practice often reflects strong patient trust, but a good clinic will still ensure each patient gets adequate consultation time.</li>
                <li><strong>&quot;You should only see a gynaecologist when something is wrong.&quot;</strong> Regular check-ups, even without symptoms, help catch potential issues early and support long-term reproductive health.</li>
                <li><strong>&quot;Male gynaecologists are more skilled than female ones, or vice versa.&quot;</strong> A doctor's gender has no bearing on their clinical skill — what matters is training, experience, and how well they communicate.</li>
                <li><strong>&quot;Online reviews tell you everything you need to know.&quot;</strong> Reviews are helpful, but a direct consultation is the best way to judge whether a doctor's approach genuinely fits your needs.</li>
              </ul>
            </div>

            {/* Section 9 — Role Across Life Stages */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Role of a Gynaecologist Across Different Life Stages
              </h2>

              <p className="text-gray-700">
                A trusted gynaecologist isn't just someone you visit during pregnancy or when something goes wrong — ideally, she's a healthcare partner across many stages of a woman's life. In the teenage years, a gynaecologist helps address concerns about the onset of menstruation, irregular cycles, or early signs of PCOS. In the reproductive years, the focus often shifts to contraception counseling, fertility planning, and pregnancy care. Later, as women approach perimenopause and menopause, a gynaecologist helps manage hormonal shifts, bone health, and related symptoms. Having one trusted specialist who understands a patient's full medical history across these stages, rather than switching doctors repeatedly, often leads to more consistent and personalized care.
              </p>
            </div>

            {/* Section 10 — Technology's Role */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Technology Has Improved Gynaecological Care
              </h2>

              <p className="text-gray-700">
                Advancements in diagnostic and surgical technology have significantly changed what patients can expect from a gynaecology visit. High-resolution 3D/4D ultrasounds now allow for far more detailed imaging of the uterus and ovaries than older 2D scans. AI-assisted imaging tools can help identify subtle abnormalities that might otherwise be missed. On the treatment side, minimally invasive laparoscopic and hysteroscopic procedures have largely replaced traditional open surgery for many conditions, meaning smaller incisions, less post-operative pain, and a much faster return to normal activity. A clinic that invests in this kind of technology is generally better positioned to diagnose accurately and treat effectively, which is an important factor when evaluating how trustworthy a gynaecology practice truly is.
              </p>
            </div>

            {/* Section 11 — How to Prepare for First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for Your First Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Note down your menstrual cycle history, including any irregularities or pain patterns</li>
                <li>List any current medications or supplements you're taking</li>
                <li>Write down your symptoms and questions in advance so you don't forget anything during the consultation</li>
                <li>Bring any previous test reports or ultrasound results, if available</li>
                <li>Be honest and specific about your symptoms, even if they feel uncomfortable to discuss — this helps the doctor diagnose accurately</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Being well-prepared for your first visit helps the doctor understand your situation faster and leads to a more productive, focused consultation.
              </p>
            </div>

            {/* Section 12 — Why Timely Care Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Timely Gynaecological Care Matters
              </h2>

              <p className="text-gray-700">
                Delaying gynaecological care out of hesitation or a busy schedule can allow manageable conditions to become more complicated over time. Whether it's an untreated hormonal imbalance, a growing fibroid, or an unaddressed fertility concern, early consultation with a trusted specialist almost always leads to simpler, less invasive treatment and better long-term outcomes. Choosing a gynaecologist you trust makes it far more likely you'll seek care proactively rather than waiting until a problem becomes urgent.
              </p>
            </div>

            {/* Section 13 — Contact Information */}
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