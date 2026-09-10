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

export default function LaparoscopicSurgerySpecialistMoradabad() {
  const faqs = [
    {
      q: "What conditions does a laparoscopic surgery specialist treat?",
      a: "Fibroids, ovarian cysts, endometriosis, prolapse, and unexplained infertility are commonly treated through laparoscopic surgery.",
    },
    {
      q: "Who is a trusted laparoscopic surgery specialist in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec clinic, Moradabad, has extensive experience across laparoscopic gynaecological procedures.",
    },
    {
      q: "How long does recovery take after laparoscopic surgery?",
      a: "Most patients return to normal activity within 2-4 weeks, much faster than open surgery.",
    },
    {
      q: "Is laparoscopic surgery safe for treating fibroids?",
      a: "Yes, laparoscopic myomectomy safely removes fibroids while preserving the uterus for future pregnancies.",
    },
    {
      q: "Does laparoscopic surgery leave visible scars?",
      a: "Scarring is minimal, since incisions are only a few millimetres in size and fade significantly over time.",
    },
    {
      q: "Can laparoscopic surgery help with infertility?",
      a: "Yes, diagnostic laparoscopy can identify causes of infertility such as endometriosis or blocked tubes.",
    },
    {
      q: "Is hospital stay required after laparoscopic surgery?",
      a: "Yes, but it is typically short, often just 24-48 hours depending on the procedure.",
    },
    {
      q: "Is laparoscopic surgery painful compared to open surgery?",
      a: "No, it generally involves significantly less pain than traditional open surgery.",
    },
    {
      q: "How can I book a consultation for laparoscopic surgery?",
      a: "You can book an appointment by messaging or calling the WhatsApp number +91 8979670705.",
    },
    {
      q: "Can laparoscopic surgery treat ovarian cysts?",
      a: "Yes, laparoscopic cystectomy removes cysts while preserving healthy ovarian tissue.",
    },
    {
      q: "What is diagnostic laparoscopy used for?",
      a: "It is used to investigate unexplained pelvic pain or infertility when other tests don't provide a clear answer.",
    },
    {
      q: "Is a follow-up visit required after laparoscopic surgery?",
      a: "Yes, a follow-up appointment is scheduled to confirm proper healing and discuss any further care needed.",
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
                Laparoscopic Surgery Specialist in Moradabad – Modern Solutions for Women's Health
              </h1>

              <p className="text-gray-700 mb-4">
                For decades, surgery meant large incisions, painful recovery, and weeks away from normal life. Today, laparoscopic surgery has changed that entire experience, allowing many gynaecological conditions to be treated through tiny incisions with far less pain and a much quicker return to daily routine. As more women in Moradabad learn about this option, the demand for an experienced laparoscopic surgery specialist in Moradabad has grown significantly. Choosing the right specialist matters just as much as the technology itself, since surgical skill, judgement, and post-operative care all directly influence how smoothly a patient recovers.
              </p>

              <p className="text-gray-700">
                This guide walks through how laparoscopic surgery works, which conditions it addresses, what patients should expect at each stage, and why Dr. Priyanka Pachauri has become a trusted specialist for this kind of care in the city.
              </p>
            </div>

            {/* Section 2 — What Exactly Is Laparoscopic Surgery? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Exactly Is Laparoscopic Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery is a minimally invasive technique where surgeons operate through a few small incisions instead of one large cut, using a thin camera and specialised instruments to see and work inside the body.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The surgeon views the internal organs on a high-definition monitor in real time</li>
                <li>Only a few tiny incisions, usually under a centimetre, are needed for most procedures</li>
                <li>3D laparoscopic systems now offer improved depth perception for greater surgical accuracy</li>
                <li>The technique is used for both investigating unclear symptoms and treating confirmed conditions</li>
                <li>Recovery is generally faster and far less painful compared to traditional open surgery</li>
              </ul>
            </div>

            {/* Section 3 — Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions a Laparoscopic Surgery Specialist Commonly Treats
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Uterine fibroids causing heavy bleeding, pain, or fertility difficulties</li>
                <li>Ovarian cysts, especially those that are large, persistent, or symptomatic</li>
                <li>Endometriosis, a condition causing chronic pelvic pain and sometimes infertility</li>
                <li>Uterine or vaginal prolapse, where pelvic organs shift out of their normal position</li>
                <li>Conditions requiring a hysterectomy, performed through minimally invasive technique when possible</li>
                <li>Unexplained infertility, investigated through diagnostic laparoscopy</li>
                <li>Requests for permanent sterilisation, performed as a quick, safe procedure</li>
                <li>Abnormal uterine bleeding, often evaluated further through hysteroscopy alongside laparoscopy</li>
              </ul>
            </div>

            {/* Section 4 — Advantages Over Open Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Advantages of Choosing Laparoscopic Surgery Over Open Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Minimal scarring, since incisions are only a few millimetres in size</li>
                <li>Shorter hospital stay, often allowing discharge within 24-48 hours</li>
                <li>Significantly less post-operative pain, reducing the need for strong pain medication</li>
                <li>Lower risk of wound infection, due to smaller incision size</li>
                <li>Reduced blood loss during the procedure itself</li>
                <li>Faster return to work and daily activities, often within a couple of weeks</li>
                <li>Better preservation of surrounding tissue, which matters greatly for fertility-related surgeries</li>
              </ul>
            </div>

            {/* Section 5 — Key Procedures Performed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Key Procedures Performed by a Laparoscopic Surgery Specialist
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Myomectomy:</strong> Removing fibroids while preserving the uterus for future pregnancies</li>
                <li><strong>Cystectomy:</strong> Removing ovarian cysts while protecting healthy ovarian function</li>
                <li><strong>Hysterectomy:</strong> Complete or partial uterus removal through a minimally invasive approach</li>
                <li><strong>Sacrocolpopexy:</strong> Repairing prolapse of the uterus or vaginal vault with lasting support</li>
                <li><strong>Tubal ligation:</strong> A permanent, same-day sterilisation procedure</li>
                <li><strong>Diagnostic laparoscopy:</strong> Exploring the pelvic region to investigate pain or infertility</li>
                <li><strong>Hysteroscopic polypectomy:</strong> Removing uterine polyps without any external incisions</li>
                <li><strong>Endometriosis excision:</strong> Carefully removing abnormal tissue to relieve pain and support conception</li>
              </ul>
            </div>

            {/* Section 6 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – A Leading Laparoscopic Surgery Specialist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec clinic in Gandhi Nagar, Moradabad, has developed extensive expertise across the full spectrum of laparoscopic gynaecological procedures, alongside her work in high risk pregnancy management and fertility care. Her clinic operates on the philosophy &quot;Her Health First,&quot; according to information published on the practice's official website, ensuring every surgical decision is made with the patient's long-term wellbeing in mind.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Deep experience performing 3D laparoscopic procedures across a wide range of gynaecological conditions</li>
                <li>International fellowships and gold medal credentials reflecting rigorous surgical training</li>
                <li>Access to advanced high-definition laparoscopic equipment, enabling greater precision during surgery</li>
                <li>A strong focus on fertility-preserving techniques, particularly important for younger patients</li>
                <li>A calm, communicative approach that helps patients feel informed and prepared before surgery</li>
                <li>A dedicated care team supporting patients from initial consultation through complete recovery</li>
                <li>Recognition for handling complex cases, including advanced endometriosis and large fibroids</li>
              </ul>
            </div>

            {/* Section 7 — Signs You May Need a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs That May Indicate You Need a Laparoscopic Surgery Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Chronic or severe pelvic pain that persists despite medication</li>
                <li>Heavy, prolonged, or irregular menstrual periods</li>
                <li>Ongoing pain during intercourse</li>
                <li>Difficulty conceiving after trying for a significant period of time</li>
                <li>A cyst or fibroid identified during a routine scan that is causing symptoms</li>
                <li>A sensation of pelvic heaviness or visible bulge, suggesting possible prolapse</li>
                <li>Repeated abnormal findings on ultrasound despite treatment attempts</li>
                <li>Interest in a permanent, minimally invasive method of contraception</li>
              </ul>
            </div>

            {/* Section 8 — Pre-Surgery Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During the Pre-Surgery Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A thorough physical examination and review of symptoms</li>
                <li>Relevant imaging and blood tests to confirm the diagnosis and plan the approach</li>
                <li>A detailed explanation of the recommended procedure and its purpose</li>
                <li>A discussion of potential risks, benefits, and alternatives to surgery</li>
                <li>Clear instructions regarding fasting, medication adjustments, and preparation before the surgery date</li>
                <li>An opportunity to ask questions so the patient feels fully informed before consenting</li>
              </ul>
            </div>

            {/* Section 9 — Recovery Timeline */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery Timeline After Laparoscopic Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Most patients are discharged within 24-48 hours, depending on the specific procedure performed</li>
                <li>Mild soreness around the incision sites is common and managed with prescribed medication</li>
                <li>Light activity can usually resume within about a week, gradually increasing over time</li>
                <li>Full recovery and return to normal activity typically occurs within 2-4 weeks</li>
                <li>A follow-up visit is scheduled to confirm proper healing and discuss any next steps</li>
                <li>For fertility-related procedures, the specialist provides guidance on the ideal timing to try conceiving afterward</li>
              </ul>
            </div>

            {/* Section 10 — Choosing the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing the Right Laparoscopic Surgery Specialist
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirmed experience with the specific procedure you require, not just general surgical background</li>
                <li>Availability of modern 3D or high-definition laparoscopic technology</li>
                <li>A track record of fertility-preserving outcomes, where relevant to your case</li>
                <li>Transparent, honest communication about risks and realistic recovery timelines</li>
                <li>Strong post-operative support and easy access for follow-up questions</li>
                <li>Consistently positive feedback from previous surgical patients</li>
              </ul>
            </div>

            {/* Section 11 — What Determines Successful Outcome */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Really Determines a Successful Laparoscopic Surgery Outcome
              </h2>

              <p className="text-gray-700 mb-4">
                It is easy to assume that advanced equipment alone guarantees a good surgical outcome, but in reality, the specialist's hands-on experience and clinical judgement play a far bigger role than the machine being used. Complex cases, such as large fibroids located near critical structures or extensive endometriosis affecting multiple pelvic organs, require a surgeon who can adapt their technique in real time based on what they encounter during the procedure, rather than following a fixed, generic approach. This level of skill typically comes only from years of consistent, varied surgical experience, which is why patients are encouraged to ask specifically about a surgeon's history with cases similar to their own, rather than assuming that access to modern technology alone is sufficient.
              </p>

              <p className="text-gray-700">
                Equally important is the quality of communication surrounding the surgery itself. Many women arrive at the decision to undergo laparoscopic surgery after months of unexplained pain, fertility struggles, or repeated inconclusive test results, often carrying significant anxiety about what the procedure will actually involve. A specialist who takes the time to walk through the diagnosis in plain language, explains exactly what will happen during surgery, and sets honest expectations about recovery helps transform a stressful decision into a manageable one. This same quality of communication matters just as much after surgery, when clear guidance on activity restrictions, warning signs to monitor, and easy access to follow-up support all contribute meaningfully to a smooth, confident recovery.
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