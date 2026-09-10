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

export default function LaparoscopicGynaecologicalSurgeonMoradabad() {
  const faqs = [
    {
      q: "What is laparoscopic gynaecological surgery?",
      a: "It is a minimally invasive surgical technique that uses small incisions and a camera to treat gynaecological conditions with less scarring and faster recovery.",
    },
    {
      q: "Who is a trusted laparoscopic gynaecological surgeon in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec clinic, Moradabad, is experienced across a wide range of laparoscopic procedures.",
    },
    {
      q: "How long is the recovery after laparoscopic surgery?",
      a: "Most patients recover within a few weeks, with hospital stays typically lasting 24-48 hours.",
    },
    {
      q: "Can fibroids be treated without removing the uterus?",
      a: "Yes, through laparoscopic myomectomy, fibroids can be removed while preserving the uterus.",
    },
    {
      q: "Is laparoscopic surgery safe for treating ovarian cysts?",
      a: "Yes, laparoscopic cystectomy safely removes cysts while protecting healthy ovarian tissue.",
    },
    {
      q: "Does laparoscopic surgery affect future fertility?",
      a: "Fertility-preserving techniques are specifically used to protect a woman's ability to conceive, when relevant to the procedure.",
    },
    {
      q: "What conditions can endometriosis surgery help with?",
      a: "It helps relieve pelvic pain, remove endometrial tissue, and improve fertility outcomes in many cases.",
    },
    {
      q: "Is laparoscopic hysterectomy less painful than open surgery?",
      a: "Yes, it typically involves less pain, smaller scars, and a much faster recovery than traditional open hysterectomy.",
    },
    {
      q: "How can I book a consultation for laparoscopic surgery?",
      a: "You can book an appointment by messaging or calling the WhatsApp number +91 8979670705.",
    },
    {
      q: "Is laparoscopic sterilisation permanent?",
      a: "Yes, it is a permanent birth control method performed as a minimally invasive day-care procedure.",
    },
    {
      q: "What happens during a diagnostic hysteroscopy?",
      a: "It involves a gentle evaluation of the uterine cavity to investigate abnormal bleeding or infertility.",
    },
    {
      q: "Is a follow-up appointment needed after laparoscopic surgery?",
      a: "Yes, a follow-up visit is scheduled to check healing and discuss any further treatment if required.",
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
                Laparoscopic Gynaecological Surgeon in Moradabad – Advanced Keyhole Care for Women's Health
              </h1>

              <p className="text-gray-700 mb-4">
                Gynaecological surgery has evolved significantly over the years, moving away from large incisions and long hospital stays toward minimally invasive techniques that offer faster recovery and far less discomfort. Laparoscopic surgery, often called keyhole surgery, has become the preferred approach for treating a wide range of gynaecological conditions, from fibroids and ovarian cysts to endometriosis and uterine prolapse. For women in Moradabad exploring their treatment options, finding an experienced laparoscopic gynaecological surgeon in Moradabad can make a significant difference not just in the surgical outcome, but in how quickly they return to their normal life afterward.
              </p>

              <p className="text-gray-700">
                This guide covers what laparoscopic gynaecological surgery involves, the conditions it treats, its benefits over traditional surgery, and why Dr. Priyanka Pachauri is a trusted name in this field in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Is Laparoscopic Gynaecological Surgery? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Laparoscopic Gynaecological Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery is a minimally invasive surgical technique that uses small incisions, a camera, and specialised instruments to perform procedures inside the abdomen and pelvis, avoiding the need for large open surgical cuts.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It typically involves small incisions, usually less than a centimetre each</li>
                <li>A thin camera called a laparoscope allows the surgeon to view internal organs on a screen</li>
                <li>Modern 3D laparoscopy provides even greater depth perception and surgical precision</li>
                <li>Recovery time is significantly shorter compared to traditional open surgery</li>
                <li>It is used for both diagnostic purposes and actual surgical treatment</li>
              </ul>
            </div>

            {/* Section 3 — Common Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Conditions Treated Through Laparoscopic Gynaecological Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Ovarian cysts:</strong> Removed through laparoscopic cystectomy while preserving healthy ovarian tissue</li>
                <li><strong>Uterine fibroids:</strong> Treated via laparoscopic myomectomy, preserving the uterus wherever possible</li>
                <li><strong>Severe cases requiring hysterectomy:</strong> Performed through laparoscopic hysterectomy with minimal scarring</li>
                <li><strong>Endometriosis:</strong> Excised precisely to relieve pelvic pain and improve fertility outcomes</li>
                <li><strong>Uterine or vaginal vault prolapse:</strong> Corrected through procedures like sacrocolpopexy</li>
                <li><strong>Permanent sterilisation:</strong> Performed as a same-day laparoscopic tubal ligation procedure</li>
                <li><strong>Diagnostic evaluation:</strong> Used to investigate unexplained pelvic pain or infertility</li>
              </ul>
            </div>

            {/* Section 4 — Why Laparoscopic Surgery Is Preferred */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Laparoscopic Surgery Is Preferred Over Traditional Open Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Smaller incisions mean significantly less scarring compared to open surgery</li>
                <li>Faster recovery time, often allowing patients to return home within 24-48 hours</li>
                <li>Reduced blood loss during the procedure compared to traditional methods</li>
                <li>Lower risk of infection, due to smaller wound size</li>
                <li>Less post-operative pain, reducing dependence on strong pain medication</li>
                <li>Quicker return to daily activities, including work and family responsibilities</li>
                <li>Better cosmetic outcome, with minimal visible scarring after healing</li>
              </ul>
            </div>

            {/* Section 5 — Understanding Specific Procedures */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Specific Laparoscopic Procedures
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Laparoscopic Cystectomy:</strong> Precise removal of ovarian cysts while protecting fertility</li>
                <li><strong>Laparoscopic Myomectomy:</strong> Uterus-preserving removal of fibroids for women who wish to conceive in the future</li>
                <li><strong>Laparoscopic Hysterectomy:</strong> Complete or partial removal of the uterus through minimally invasive technique</li>
                <li><strong>Sacrocolpopexy:</strong> Advanced keyhole repair for prolapse of the uterus or vaginal vault</li>
                <li><strong>Laparoscopic Sterilisation:</strong> A safe, permanent birth control method performed as a day-care procedure</li>
                <li><strong>Diagnostic Hysteroscopy:</strong> Gentle evaluation of the uterine cavity to investigate abnormal bleeding or infertility</li>
                <li><strong>Hysteroscopic Polypectomy:</strong> Precise removal of uterine polyps without any external cuts</li>
                <li><strong>Endometriosis Excision Surgery:</strong> Advanced removal of endometrial tissue to relieve pain and support fertility</li>
              </ul>
            </div>

            {/* Section 6 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Trusted Laparoscopic Gynaecological Surgeon in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec clinic in Gandhi Nagar, Moradabad, is recognised for her expertise across a wide range of laparoscopic gynaecological procedures, alongside her experience in high risk pregnancy management and fertility treatment. According to her clinic's website, her practice is guided by the philosophy &quot;Her Health First,&quot; ensuring every patient receives a treatment approach tailored to her individual needs.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Extensive experience in 3D laparoscopic surgery for a wide range of gynaecological conditions</li>
                <li>International fellowships and gold medal credentials reflecting advanced surgical training</li>
                <li>Advanced high-definition 3D laparoscopic equipment for greater surgical precision</li>
                <li>Expertise in fertility-preserving procedures, important for women planning future pregnancies</li>
                <li>A patient-first approach focused on minimising pain and recovery time after surgery</li>
                <li>An integrated care team that supports patients from consultation through post-surgical recovery</li>
                <li>Recognition for expert endometriosis care and complex laparoscopic procedures across the region</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If you are searching for a laparoscopic gynaecological surgeon in Moradabad who combines advanced surgical technology with genuinely compassionate care, Dr. Priyanka Pachauri is a dependable choice.
              </p>
            </div>

            {/* Section 7 — Signs You May Need to Consult a Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs You May Need to Consult a Laparoscopic Gynaecological Surgeon
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Persistent or severe pelvic pain that doesn't improve with medication</li>
                <li>Heavy or irregular menstrual bleeding</li>
                <li>Pain during intercourse that continues over time</li>
                <li>Difficulty conceiving despite trying for an extended period</li>
                <li>A diagnosed ovarian cyst or fibroid causing symptoms</li>
                <li>A feeling of heaviness or bulge in the pelvic area, indicating possible prolapse</li>
                <li>Abnormal findings on a routine ultrasound or pelvic examination</li>
                <li>A desire for permanent sterilisation through a minimally invasive procedure</li>
              </ul>
            </div>

            {/* Section 8 — What to Expect Before Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect Before Laparoscopic Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A detailed consultation and examination to confirm the diagnosis and surgical plan</li>
                <li>Pre-surgical tests, including blood work and imaging, to assess overall health</li>
                <li>A clear discussion about the procedure, risks, and expected recovery time</li>
                <li>Instructions on fasting and medication to follow before the surgery date</li>
                <li>An opportunity to ask questions and address any concerns about the procedure</li>
              </ul>
            </div>

            {/* Section 9 — What to Expect After Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect After Laparoscopic Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Most patients experience minimal scarring, with small marks that fade over time</li>
                <li>Hospital stay is typically short, often just 24-48 hours depending on the procedure</li>
                <li>Mild discomfort at the incision sites, managed with prescribed pain relief</li>
                <li>Gradual return to light activity within a week, and full activity within a few weeks</li>
                <li>A follow-up appointment to check healing and discuss any further treatment if needed</li>
                <li>For fertility-related procedures, guidance on the best time to try conceiving after recovery</li>
              </ul>
            </div>

            {/* Section 10 — How to Choose the Right Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Laparoscopic Gynaecological Surgeon
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Proven experience specifically in advanced laparoscopic and 3D surgical techniques</li>
                <li>Access to modern, high-definition laparoscopic equipment</li>
                <li>A clear track record of successful, fertility-preserving procedures where relevant</li>
                <li>Transparent communication about the surgery, risks, and realistic recovery expectations</li>
                <li>A supportive team for pre- and post-operative care</li>
                <li>Positive outcomes and reviews from previous surgical patients</li>
              </ul>
            </div>

            {/* Section 11 — Why Experienced Surgeon Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choosing an Experienced Surgeon Matters More Than the Technology Alone
              </h2>

              <p className="text-gray-700 mb-4">
                While advanced equipment like 3D laparoscopy and high-definition imaging plays an important role in modern gynaecological surgery, the skill and judgement of the surgeon operating that equipment ultimately determines the outcome far more than the technology itself. Two surgeons using identical equipment can produce very different results depending on their training, their experience with complex cases, and their ability to make quick, informed decisions if something unexpected arises during the procedure. This is particularly true for fertility-preserving surgeries like myomectomy, where the surgeon's precision directly affects a woman's future ability to conceive naturally. Choosing a surgeon with genuine, hands-on experience across a wide range of laparoscopic procedures, rather than one who has only performed a handful of simpler cases, gives patients meaningfully better odds of a smooth surgery and recovery.
              </p>

              <p className="text-gray-700">
                Beyond the operating room itself, the overall patient experience matters just as much for many women considering gynaecological surgery. Conditions like endometriosis, fibroids, or persistent pelvic pain often come with months or even years of discomfort and frustration before a diagnosis is confirmed, and by the time surgery is discussed, many patients are simply looking for relief and reassurance. A surgeon who takes the time to explain the condition clearly, walks through exactly what the procedure will involve, and sets realistic expectations about recovery helps reduce the anxiety that often surrounds any surgical decision. Equally, thorough post-operative support, including clear guidance on activity restrictions, warning signs to watch for, and a genuine willingness to answer follow-up questions, plays a major role in how smoothly a patient recovers both physically and emotionally after her procedure.
              </p>
            </div>

            {/* Section 12 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Address, Contact & WhatsApp
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

              <p className="text-gray-700 mt-6">
                For appointments, directions, or any surgery-related query, reach out directly on WhatsApp at +91 8979670705.
              </p>
            </div>

            {/* Section 13 — FAQs */}
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