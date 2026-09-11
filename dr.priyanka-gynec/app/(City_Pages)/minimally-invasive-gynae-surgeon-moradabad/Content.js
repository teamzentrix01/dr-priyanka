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

export default function MinimallyInvasiveGynaeSurgeonMoradabad() {
  const faqs = [
    {
      q: "What does minimally invasive gynae surgery mean?",
      a: "It refers to surgical techniques like laparoscopy and hysteroscopy that treat gynaecological conditions through small or no incisions.",
    },
    {
      q: "Who is a trusted minimally invasive gynae surgeon in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec clinic, Moradabad, has extensive experience in minimally invasive gynaecological procedures.",
    },
    {
      q: "How is hysteroscopy different from laparoscopy?",
      a: "Hysteroscopy is performed through the vagina with no external incisions, while laparoscopy uses small abdominal incisions.",
    },
    {
      q: "Can fibroids be removed without a major operation?",
      a: "Yes, laparoscopic myomectomy removes fibroids through small incisions while preserving the uterus.",
    },
    {
      q: "Is minimally invasive surgery suitable for everyone?",
      a: "Most patients are good candidates, though very large or complex cases are evaluated individually.",
    },
    {
      q: "How long is the hospital stay for minimally invasive surgery?",
      a: "Many procedures are same-day or require just an overnight stay, depending on complexity.",
    },
    {
      q: "Does minimally invasive surgery affect fertility?",
      a: "Fertility-preserving techniques are specifically chosen to protect a woman's future ability to conceive when relevant.",
    },
    {
      q: "Is recovery really faster than traditional surgery?",
      a: "Yes, most patients return to normal activity within one to three weeks, much sooner than after open surgery.",
    },
    {
      q: "How can I book a consultation for minimally invasive surgery?",
      a: "You can book an appointment by messaging or calling the WhatsApp number +91 8979670705.",
    },
    {
      q: "Can ovarian cysts be treated minimally invasively?",
      a: "Yes, laparoscopic cystectomy removes cysts while preserving healthy ovarian tissue.",
    },
    {
      q: "Is minimally invasive surgery used for diagnosing infertility?",
      a: "Yes, diagnostic laparoscopy and hysteroscopy are commonly used to investigate unexplained infertility.",
    },
    {
      q: "Is a follow-up appointment necessary after minimally invasive surgery?",
      a: "Yes, a follow-up visit confirms proper healing and addresses any remaining concerns after the procedure.",
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
                Minimally Invasive Gynae Surgeon in Moradabad – Less Pain, Faster Healing
              </h1>

              <p className="text-gray-700 mb-4">
                For many women, the word &quot;surgery&quot; brings up fear of long hospital stays, visible scars, and weeks of painful recovery. Minimally invasive gynaecology has changed that story completely, offering treatment for conditions like fibroids, ovarian cysts, and abnormal bleeding through techniques that involve little more than a few tiny incisions or, in some cases, no incisions at all. For women in Moradabad exploring their treatment options, understanding what a minimally invasive gynae surgeon in Moradabad can actually offer helps replace fear with informed confidence.
              </p>

              <p className="text-gray-700">
                This guide covers what minimally invasive gynaecology really means, the different techniques involved, how to know if you're a good candidate, and why Dr. Priyanka Pachauri has earned trust in this area of care in the city.
              </p>
            </div>

            {/* Section 2 — What Does "Minimally Invasive" Mean? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Does &quot;Minimally Invasive&quot; Actually Mean in Gynaecology?
              </h2>

              <p className="text-gray-700 mb-4">
                Minimally invasive gynaecology refers to a group of surgical techniques designed to treat conditions of the uterus, ovaries, and pelvic organs while avoiding the large incisions traditionally associated with open surgery.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It includes techniques such as laparoscopy, hysteroscopy, and in some cases robotic-assisted surgery</li>
                <li>Procedures are performed through very small incisions or, for hysteroscopic procedures, through natural body openings with no incisions at all</li>
                <li>A camera and specialised instruments allow the surgeon to see and operate with high precision</li>
                <li>These techniques generally involve less pain, less scarring, and faster recovery than traditional surgery</li>
                <li>Many procedures can be performed as day-care surgery, without an overnight hospital stay</li>
              </ul>
            </div>

            {/* Section 3 — Different Types of Techniques */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Different Types of Minimally Invasive Techniques Used in Gynaecology
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Laparoscopy:</strong> Performed through small abdominal incisions, used for fibroids, cysts, endometriosis, and hysterectomy</li>
                <li><strong>Hysteroscopy:</strong> Performed through the vagina and cervix with no external incisions, used to evaluate or treat conditions inside the uterus</li>
                <li><strong>3D and 4D-guided laparoscopic surgery:</strong> Offering enhanced visualisation and precision compared to standard laparoscopy</li>
                <li><strong>Single-incision laparoscopic surgery:</strong> Reducing the number of incisions even further for select procedures</li>
                <li><strong>Vaginal approach procedures:</strong> Used for certain types of hysterectomy or prolapse repair without abdominal incisions at all</li>
              </ul>
            </div>

            {/* Section 4 — Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions Commonly Treated Through Minimally Invasive Gynae Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Uterine fibroids causing heavy bleeding, pressure, or fertility concerns</li>
                <li>Ovarian cysts that are large, persistent, or causing pain</li>
                <li>Endometriosis, treated through precise excision of abnormal tissue</li>
                <li>Abnormal uterine bleeding, evaluated and treated through hysteroscopy</li>
                <li>Uterine polyps, removed without any external incision</li>
                <li>Uterine or vaginal prolapse, corrected through minimally invasive repair techniques</li>
                <li>Conditions requiring hysterectomy, performed through laparoscopic or vaginal approach where suitable</li>
                <li>Unexplained infertility, investigated through diagnostic laparoscopy or hysteroscopy</li>
              </ul>
            </div>

            {/* Section 5 — Why Women Are Choosing This */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why More Women Are Choosing Minimally Invasive Gynae Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Significantly less post-operative pain compared to traditional open surgery</li>
                <li>Minimal or no visible scarring, an important consideration for many patients</li>
                <li>Shorter hospital stay, with many procedures completed as day-care surgery</li>
                <li>Faster return to work and family responsibilities, often within one to two weeks</li>
                <li>Lower risk of wound infection, due to smaller or absent incisions</li>
                <li>Better preservation of healthy tissue, particularly relevant for fertility-focused procedures</li>
                <li>Reduced blood loss during the procedure compared to open surgical techniques</li>
              </ul>
            </div>

            {/* Section 6 — Am I a Good Candidate? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Am I a Good Candidate for Minimally Invasive Gynae Surgery?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Most women with fibroids, cysts, or endometriosis are suitable candidates, depending on size and location</li>
                <li>Women wanting to preserve fertility often benefit most from minimally invasive, tissue-sparing techniques</li>
                <li>Very large fibroids or complex cases involving extensive scar tissue may sometimes require a combined or open approach, decided case-by-case</li>
                <li>A proper pre-surgical evaluation, including imaging, helps determine the most suitable technique for each patient</li>
                <li>Overall health, previous surgical history, and specific symptoms all factor into the final surgical plan</li>
              </ul>
            </div>

            {/* Section 7 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – A Trusted Minimally Invasive Gynae Surgeon in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec clinic in Gandhi Nagar, Moradabad, has built a strong reputation for minimally invasive gynaecological care, alongside her expertise in high risk pregnancy management and fertility treatment. According to her clinic's website, her approach is guided by the philosophy &quot;Her Health First,&quot; ensuring every surgical decision prioritises the patient's comfort, safety, and long-term health.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Extensive experience across laparoscopic and hysteroscopic procedures for a wide range of gynaecological conditions</li>
                <li>International fellowships and gold medal credentials reflecting advanced surgical training</li>
                <li>Access to high-definition 3D laparoscopic equipment, enabling precise, minimally invasive treatment</li>
                <li>A strong emphasis on fertility-preserving techniques, particularly valuable for younger patients</li>
                <li>A calm, transparent communication style that helps patients feel informed before and after surgery</li>
                <li>A dedicated care team supporting patients from consultation through complete recovery</li>
                <li>Recognition for managing complex cases, including advanced endometriosis and larger fibroids, through minimally invasive methods</li>
              </ul>
            </div>

            {/* Section 8 — Signs You May Need a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs That May Indicate You Need a Minimally Invasive Surgery Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Persistent or worsening pelvic pain that hasn't responded to medication</li>
                <li>Heavy or irregular periods affecting daily life</li>
                <li>Pain during intercourse that continues over time</li>
                <li>A cyst, fibroid, or polyp identified during a routine scan</li>
                <li>Difficulty conceiving despite trying for a meaningful period of time</li>
                <li>A feeling of pressure or bulge in the pelvic area, possibly indicating prolapse</li>
                <li>Repeated abnormal bleeding without a clear diagnosis</li>
                <li>Interest in a low-scarring, fertility-preserving surgical option</li>
              </ul>
            </div>

            {/* Section 9 — What Happens Before Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens Before Minimally Invasive Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A thorough consultation and physical examination to confirm the diagnosis</li>
                <li>Imaging tests, such as ultrasound, to plan the most suitable surgical approach</li>
                <li>A clear explanation of the recommended technique and expected outcome</li>
                <li>Guidance on pre-surgery preparation, including fasting and any medication adjustments</li>
                <li>An opportunity to discuss questions or concerns before finalising consent</li>
              </ul>
            </div>

            {/* Section 10 — Recovery After Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Minimally Invasive Gynae Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Many procedures allow same-day or next-day discharge, depending on complexity</li>
                <li>Mild discomfort at incision sites, if any, is generally well managed with prescribed medication</li>
                <li>Light activity can often resume within a few days to a week</li>
                <li>Full recovery typically occurs within one to three weeks, much faster than open surgery</li>
                <li>A follow-up visit confirms healing progress and addresses any remaining concerns</li>
                <li>For fertility-related procedures, specific guidance is given on the ideal timing to try conceiving</li>
              </ul>
            </div>

            {/* Section 11 — How to Choose the Right Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Minimally Invasive Gynae Surgeon
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirmed hands-on experience with the specific technique relevant to your condition</li>
                <li>Access to modern imaging and 3D laparoscopic technology</li>
                <li>A track record of successful, fertility-preserving outcomes where applicable</li>
                <li>Honest, clear communication about the procedure, risks, and realistic recovery timeline</li>
                <li>Strong post-operative support with easy access for follow-up questions</li>
                <li>Consistently positive outcomes and feedback from previous patients</li>
              </ul>
            </div>

            {/* Section 12 — Making an Informed Decision */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Making an Informed Decision Rather Than a Fearful One
              </h2>

              <p className="text-gray-700 mb-4">
                One of the most valuable things a minimally invasive gynae surgeon can offer a patient is not just surgical skill, but the ability to replace fear with clarity. Many women delay seeking treatment for conditions like fibroids or persistent pelvic pain simply because they associate the word &quot;surgery&quot; with the traditional experience of large incisions, painful recovery, and weeks away from normal life. Once patients understand that most of these conditions can now be treated through techniques involving little more than a few small incisions, and sometimes none at all, the decision to proceed with treatment often becomes far less intimidating. A good surgeon takes the time to walk through exactly which technique applies to their specific case, why it is the recommended approach, and what recovery will genuinely look like, rather than allowing outdated assumptions about gynaecological surgery to drive unnecessary anxiety or delay.
              </p>

              <p className="text-gray-700">
                It is also worth recognising that minimally invasive does not mean simple or one-size-fits-all; the right technique still depends heavily on the size, location, and complexity of the condition being treated. This is precisely why a proper pre-surgical evaluation matters so much, since it allows the surgeon to match the most appropriate minimally invasive approach to the individual patient, rather than applying a generic method to every case. Patients who take the time to ask detailed questions during their consultation, understand exactly why a particular technique is being recommended, and clarify what recovery will involve for their specific procedure tend to feel far more prepared and confident heading into surgery. This combination of surgical precision and genuine, patient-centred communication is ultimately what defines a truly excellent minimally invasive gynae surgeon.
              </p>
            </div>

            {/* Section 13 — Contact Information */}
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

              <p className="text-gray-700 mt-6">
                For appointments, directions, or any surgery-related query, reach out directly on WhatsApp at +91 8979670705.
              </p>
            </div>

            {/* Section 14 — FAQs */}
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