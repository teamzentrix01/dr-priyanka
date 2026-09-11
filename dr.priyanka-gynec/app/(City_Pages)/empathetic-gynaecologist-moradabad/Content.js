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

export default function EmpatheticGynaecologistMoradabad() {
  const faqs = [
    {
      q: "Who is an empathetic gynaecologist in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is known for her patient-first, compassionate approach to women's healthcare in Moradabad.",
    },
    {
      q: "What does &quot;Her Health First&quot; mean at the clinic?",
      a: "It means every consultation starts with listening to the patient's concerns before recommending any tests or treatment.",
    },
    {
      q: "Is the clinic comfortable for first-time gynaecological visits?",
      a: "Yes, the clinic focuses on clear communication and patient comfort, making it suitable for first-time consultations.",
    },
    {
      q: "Does the clinic support patients dealing with infertility emotionally?",
      a: "Yes, fertility care at the clinic includes guidance and support alongside medical treatment.",
    },
    {
      q: "Can I discuss sensitive menstrual or sexual health concerns openly?",
      a: "Yes, the clinic is designed to offer a judgment-free space for discussing any gynaecological concern.",
    },
    {
      q: "Does the clinic offer pregnancy and high-risk pregnancy care?",
      a: "Yes, antenatal, postnatal, and high-risk pregnancy care are all available with continuous support.",
    },
    {
      q: "How do I book an appointment with Dr. Priyanka Pachauri?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does the clinic use modern, minimally invasive treatment options?",
      a: "Yes, including 3D laparoscopic surgery and hysteroscopy for faster recovery and less discomfort.",
    },
    {
      q: "Is paediatric consultation also available at the clinic?",
      a: "Yes, paediatric consultations are available alongside gynaecological services.",
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
                Empathetic Gynaecologist in Moradabad: Why Compassionate Care Makes All the Difference
              </h1>

              <p className="text-gray-700 mb-4">
                Medical expertise alone doesn't make a great gynaecologist — empathy does the rest. For many women, a visit to the gynaecologist involves discussing deeply personal topics: menstrual health, sexual wellbeing, fertility struggles, pregnancy anxieties, or symptoms they've been too embarrassed to mention to anyone else. When a doctor responds with patience, warmth, and genuine understanding, patients feel safe enough to be fully honest — and that honesty is often the key to an accurate diagnosis. In Moradabad, women are increasingly looking not just for a qualified gynaecologist, but for one who listens without judgment and treats every patient with dignity.
              </p>

              <p className="text-gray-700">
                This article explores why empathy matters so much in gynaecological care, what it actually looks like in practice, and why Dr. Priyanka Pachauri has become known for exactly this kind of compassionate approach.
              </p>
            </div>

            {/* Section 2 — Why Empathy Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Empathy Matters So Much in Gynaecological Care
              </h2>

              <p className="text-gray-700">
                Gynaecological visits are unlike most other medical appointments. They often involve topics that carry social stigma, cultural hesitation, or personal embarrassment — irregular periods, sexual health concerns, infertility, pregnancy loss, or intimate pain. Many women arrive at a consultation feeling anxious, unsure of how their symptoms will be received, or worried about being rushed through without their concerns being fully heard.
              </p>

              <p className="text-gray-700 mt-4">
                An empathetic gynaecologist changes this dynamic entirely. Instead of a clinical, transactional interaction, the visit becomes a conversation where the patient feels genuinely cared for. This isn't just about &quot;being nice&quot; — it has real clinical value. Patients who feel comfortable are more likely to disclose symptoms accurately, ask questions they might otherwise hold back, and follow through with recommended treatment. Research in patient communication consistently shows that empathetic care improves treatment adherence and overall health outcomes, particularly in sensitive areas like reproductive health.
              </p>
            </div>

            {/* Section 3 — What Empathetic Care Looks Like */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Empathetic Gynaecological Care Actually Looks Like
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Active, Unhurried Listening
                  </h3>
                  <p className="text-gray-700">
                    An empathetic doctor doesn't interrupt or rush through a patient's description of symptoms. She takes the time to understand the full picture — how long symptoms have been present, how they're affecting daily life, and what specifically worries the patient — before jumping to conclusions or tests.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Judgment-Free Communication
                  </h3>
                  <p className="text-gray-700">
                    Whether a patient is unmarried and sexually active, struggling with infertility, dealing with an unplanned pregnancy, or simply nervous about a first-time pelvic exam, an empathetic gynaecologist creates a space free of judgment or assumptions, allowing patients to speak openly about their actual concerns.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Clear, Jargon-Free Explanations
                  </h3>
                  <p className="text-gray-700">
                    Compassionate doctors take time to explain diagnoses and treatment options in plain language, checking that the patient actually understands rather than simply handing over a prescription. This reduces anxiety and helps patients feel like active participants in their own care.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Respect for Privacy and Comfort
                  </h3>
                  <p className="text-gray-700">
                    Simple things — knocking before entering an exam room, offering a private space to change, explaining each step of a physical examination before performing it — make a significant difference in how safe and respected a patient feels during sensitive procedures.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Emotional Support During Difficult Diagnoses
                  </h3>
                  <p className="text-gray-700">
                    Conditions like infertility, pregnancy loss, or a cancer-related diagnosis are emotionally overwhelming. An empathetic gynaecologist acknowledges the emotional weight of these moments, rather than treating them purely as clinical events, and offers reassurance alongside medical guidance.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Patience With Repeated Questions or Anxiety
                  </h3>
                  <p className="text-gray-700">
                    Some patients need information repeated, or want to ask the same question in a few different ways before feeling reassured. A compassionate doctor doesn't show frustration with this — she recognizes that anxiety is a normal response to health concerns, especially in reproductive and gynaecological health.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Why Empathy Is Important in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Empathy Is Especially Important in a City Like Moradabad
              </h2>

              <p className="text-gray-700">
                In smaller cities and towns, cultural hesitation around discussing menstrual and reproductive health can be even more pronounced than in larger metros. Many women in Moradabad grow up being taught not to discuss period problems, sexual health, or fertility concerns openly, even within their own families. This makes the role of an empathetic doctor even more critical — she often becomes the first person a patient has ever spoken to honestly about a symptom she's been quietly managing for years. A gynaecologist who understands this local context, rather than dismissing hesitation as unnecessary shyness, can build the kind of trust that encourages women to seek care earlier rather than suffering in silence.
              </p>
            </div>

            {/* Section 5 — Common Situations Where Empathy Makes a Difference */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Situations Where Empathy Makes a Real Clinical Difference
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Discussing Irregular or Painful Periods
                  </h3>
                  <p className="text-gray-700">
                    Many women downplay period pain because they've been told it's &quot;normal to suffer.&quot; An empathetic doctor takes these complaints seriously rather than dismissing them, which often leads to catching conditions like endometriosis earlier.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Infertility Consultations
                  </h3>
                  <p className="text-gray-700">
                    Struggling to conceive can be emotionally exhausting, particularly amid social pressure and unsolicited advice from family members. A compassionate gynaecologist addresses both the medical and emotional dimensions of infertility, rather than focusing solely on test results.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    First-Time Pelvic Examinations
                  </h3>
                  <p className="text-gray-700">
                    For many young women, a first pelvic exam can be intimidating. A gentle, explanatory approach — walking through what will happen and why — significantly reduces anxiety and builds trust for future visits.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pregnancy Loss and High-Risk Pregnancy
                  </h3>
                  <p className="text-gray-700">
                    These are some of the most emotionally sensitive moments in gynaecological care. Genuine empathy, alongside sound medical guidance, helps patients feel supported rather than alone during an incredibly difficult time.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    PCOS and Body Image Concerns
                  </h3>
                  <p className="text-gray-700">
                    PCOS often comes with symptoms like weight gain, acne, and excess hair growth that can affect a patient's self-esteem. An empathetic doctor addresses these concerns with sensitivity, rather than focusing purely on lab values.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 — How to Recognize an Empathetic Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Recognize an Empathetic Gynaecologist Before Your First Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Read patient testimonials carefully — look for mentions of feeling &quot;heard,&quot; &quot;comfortable,&quot; or &quot;not judged,&quot; rather than just clinical outcomes</li>
                <li>Notice how staff communicate when you first call or message the clinic — a warm, patient tone from the front desk often reflects the clinic's overall culture</li>
                <li>Pay attention during your first consultation — does the doctor ask follow-up questions and seem genuinely interested in your concerns, or does the visit feel rushed?</li>
                <li>Check whether the clinic explains costs and procedures clearly upfront, which reflects respect for the patient's autonomy and comfort</li>
              </ul>
            </div>

            {/* Section 7 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Known for Compassionate, Patient-First Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) has built her practice in Moradabad around a philosophy she describes as &quot;Her Health First&quot; — a patient-centered approach where every consultation begins with genuinely listening to the patient's concerns before recommending tests or treatment. According to her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, this approach extends across the full range of services offered at her clinic, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li><strong>Menstrual disorder and PCOS management:</strong> Addressed with attention to both the physical and emotional impact on patients</li>
                <li><strong>3D laparoscopic surgery:</strong> For fibroids, cysts, and endometriosis, performed with minimally invasive techniques that reduce recovery time and discomfort</li>
                <li><strong>Diagnostic and therapeutic hysteroscopy:</strong> For uterine conditions, explained clearly to patients before any procedure</li>
                <li><strong>Fertility evaluation and IVF services:</strong> Including a GERI time-lapse embryo incubator, supported with guidance for patients navigating the emotional journey of fertility treatment</li>
                <li><strong>Antenatal, postnatal, and high-risk pregnancy care:</strong> With continuous support through every stage</li>
                <li><strong>Paediatric consultations:</strong> Offering continuity of care for growing families</li>
              </ul>

              <p className="text-gray-700">
                Patient testimonials shared on the website consistently highlight feeling comfortable, respected, and genuinely cared for during consultations — the hallmark of an empathetic gynaecologist. The clinic is located in Gandhi Nagar, Moradabad, making it accessible to patients from across the city who are looking for both clinical expertise and compassionate care.
              </p>
            </div>

            {/* Section 8 — Why Empathy Leads to Better Outcomes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choosing an Empathetic Doctor Leads to Better Health Outcomes
              </h2>

              <p className="text-gray-700">
                When patients trust that their doctor genuinely cares, they're far more likely to seek help early rather than waiting until a condition becomes severe. They're also more likely to be honest about symptoms they might otherwise minimize out of embarrassment, which allows for faster, more accurate diagnosis. Over time, this builds a long-term healthcare relationship where a woman feels comfortable returning for regular check-ups, discussing new concerns as they arise, and following through on treatment recommendations — all of which contribute significantly to better long-term reproductive and overall health.
              </p>
            </div>

            {/* Section 9 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Empathetic Care in Gynaecology
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li><strong>&quot;Empathy means longer wait times and less efficient care.&quot;</strong> In reality, taking time to properly understand a patient's concerns upfront often leads to more accurate diagnosis and fewer repeat visits caused by miscommunication.</li>
                <li><strong>&quot;A compassionate doctor is less clinically rigorous.&quot;</strong> Empathy and clinical expertise are not mutually exclusive — the best gynaecologists combine both.</li>
                <li><strong>&quot;Empathetic care is only important for emotionally difficult diagnoses.&quot;</strong> Even routine visits benefit from a doctor who listens carefully and communicates clearly.</li>
                <li><strong>&quot;You can't judge empathy without meeting the doctor in person.&quot;</strong> While a first visit is the best test, patient testimonials and how a clinic's staff communicate beforehand often provide strong early indicators.</li>
              </ul>
            </div>

            {/* Section 10 — Building a Long-Term Relationship */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Building a Long-Term Relationship With Your Gynaecologist
              </h2>

              <p className="text-gray-700">
                Empathy isn't just valuable for a single consultation — it lays the foundation for a long-term healthcare relationship. Women's health needs evolve significantly over the years, from adolescence through pregnancy and eventually menopause, and having one doctor who already understands a patient's history, personality, and communication preferences can make each future visit smoother and more effective. When a patient trusts that her concerns will be met with patience rather than dismissal, she's far more likely to schedule routine check-ups proactively instead of only showing up when a problem has already become serious. Over time, this kind of continuity of care often leads to earlier detection of issues, more personalized treatment plans, and a healthcare experience that feels far less intimidating with each visit.
              </p>
            </div>

            {/* Section 11 — Rushed vs Empathetic Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Difference Between a Rushed Visit and an Empathetic One
              </h2>

              <p className="text-gray-700">
                Consider two versions of the same consultation: In a rushed visit, a patient describes her symptoms briefly, the doctor orders a test, and the appointment ends within a few minutes — leaving the patient unsure whether her real concerns were fully understood. In an empathetic visit, the doctor asks follow-up questions, checks how the symptoms are affecting daily life, explains why a particular test is being recommended, and invites the patient to ask anything she's unsure about. The clinical outcome might look similar on paper, but the patient's experience — and her likelihood of returning for follow-up care or recommending the doctor to others — is dramatically different. This is precisely the kind of difference that distinguishes an empathetic gynaecologist from a purely transactional one.
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
                          href="mailto:drpriyanka@gynaecologistmoradabad.com"
                          className="hover:underline"
                        >
                          drpriyanka@gynaecologistmoradabad.com
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