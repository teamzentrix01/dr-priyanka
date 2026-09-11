import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function WomensHospitalMoradabad() {
  const faqs = [
    {
      q: "Does Dr. Priyanka Pachauri work at a hospital in Moradabad?",
      a: "Yes, she serves as a consultant at Ujala Cygnus BrightStar Hospital in Moradabad.",
    },
    {
      q: "Does the hospital offer maternity and delivery services?",
      a: "Yes, structured antenatal services and support for normal delivery are part of the offerings.",
    },
    {
      q: "Is fertility and IVF treatment available at the hospital?",
      a: "Yes, personalized fertility and IVF treatments are supported with advanced diagnostic technology.",
    },
    {
      q: "Does the hospital perform laparoscopic surgery for fibroids and cysts?",
      a: "Yes, laparoscopic myomectomy and cystectomy are listed among the core surgical services.",
    },
    {
      q: "Is paediatric care available alongside maternity services?",
      a: "Yes, newborn checkups and vaccination services are included as part of the care offered.",
    },
    {
      q: "What technology is used for pregnancy monitoring?",
      a: "The facility uses 3D and 4D ultrasound imaging for detailed pregnancy assessments.",
    },
    {
      q: "Does the hospital treat endometriosis and chronic pelvic pain?",
      a: "Yes, advanced laparoscopic excision for endometriosis is listed among the specialities offered.",
    },
    {
      q: "What qualifications does Dr. Priyanka Pachauri hold?",
      a: "She holds an MS in Obstetrics and Gynaecology, FMAS, and an advanced infertility fellowship.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "The clinic is located in Gandhi Nagar, Moradabad, Uttar Pradesh.",
    },
    {
      q: "How can I book an appointment for women's hospital care?",
      a: "You can call or WhatsApp the clinic directly using the contact details listed above.",
    },
  ];


  const sections = [
    {
      title: "Why A Dedicated Women's Hospital Matters",
      intro: "Choosing a hospital that specializes in women's health offers advantages that general healthcare facilities often cannot match, especially during time sensitive or high risk situations.",
      items: [
        "Specialized medical teams focused entirely on women's reproductive health",
        "Equipment and technology specifically suited to gynaecological and obstetric care",
        "Coordinated care between gynaecology, fertility, and paediatric departments",
        "Emergency readiness for pregnancy related and surgical complications",
        "A more comfortable, understanding environment for sensitive health concerns",
        "Consistent continuity of care from pregnancy through postnatal recovery",
      ],
    },
    {
      title: "Core Services Offered By A Women's Hospital",
      intro: "A well equipped women's hospital typically provides a wide range of services covering every stage of a woman's reproductive health journey, from adolescence through pregnancy and beyond.",
      items: [
        "General gynaecology consultations for menstrual and hormonal concerns",
        "Antenatal and postnatal pregnancy care with structured monitoring",
        "Labor and delivery services supporting normal vaginal delivery",
        "Fertility evaluation and IVF related treatment support",
        "Advanced laparoscopic and minimally invasive gynaecological surgery",
        "Paediatric care including newborn checkups and vaccination services",
      ],
    },
    // ... (baaki sections same structure mein)
  ];


  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="flex-1 order-1">
            {/* Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Women&apos;s Hospital In Moradabad: Complete Care From Pregnancy To Surgery
              </h1>

              <p className="text-gray-700 mb-4">
                Choosing the right women&apos;s hospital is one of the most important healthcare decisions a family can make, especially during pregnancy, fertility treatment, or a major gynaecological procedure. A dedicated women&apos;s hospital brings together specialized doctors, advanced diagnostic technology, and a supportive environment designed specifically around women&apos;s health needs. In Moradabad, women now have access to comprehensive hospital based care that spans everything from routine gynaecology to advanced laparoscopic surgery and fertility treatment, all coordinated under experienced medical guidance.
              </p>

              <p className="text-gray-700">
                This guide covers everything you need to know about choosing a women&apos;s hospital in Moradabad, including the range of services typically offered, why hospital based care matters, and what to look for when making this important decision.
              </p>
            </div>

            {/* Sections 0-7 */}
            {sections.slice(0, 8).map((section) => (
              <div key={section.title} className="mb-12">
                <h2 className="text-3xl font-serif mb-4 text-gray-900">{section.title}</h2>
                <p className="text-gray-700 mb-4">{section.intro}</p>
                <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* What To Expect During A Hospital Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What To Expect During A Hospital Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding the general flow of a hospital visit can help patients and families feel more prepared.
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li><strong>Registration</strong><br />Your details and medical history are recorded at intake</li>
                <li><strong>Consultation</strong><br />Symptoms and concerns are discussed with the specialist</li>
                <li><strong>Diagnostic Tests</strong><br />Ultrasound or lab tests are conducted as needed</li>
                <li><strong>Discussion</strong><br />Findings are explained clearly in simple, understandable language</li>
                <li><strong>Treatment Planning</strong><br />A personalized care plan is outlined based on your needs</li>
                <li><strong>Follow Up Scheduling</strong><br />Future appointments or procedures are arranged</li>
              </ol>
            </div>

            {/* Sections 8-10 */}
            {sections.slice(8, 11).map((section) => (
              <div key={section.title} className="mb-12">
                <h2 className="text-3xl font-serif mb-4 text-gray-900">{section.title}</h2>
                <p className="text-gray-700 mb-4">{section.intro}</p>
                <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Why Choose Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Pachauri For Women&apos;s Hospital Care In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri co-leads Shree Advanced Urogynae Clinic and serves as a consultant at Ujala Cygnus BrightStar Hospital in Moradabad, combining advanced 3D laparoscopic surgery, structured pregnancy care, and personalized fertility treatment with a genuinely patient first approach that supports women through every stage of their reproductive health journey.
              </p>
            </div>

            {/* Remaining sections */}
            {sections.slice(11).map((section) => (
              <div key={section.title} className="mb-12">
                <h2 className="text-3xl font-serif mb-4 text-gray-900">{section.title}</h2>
                <p className="text-gray-700 mb-4">{section.intro}</p>
                <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Section */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">Contact &amp; Clinic Address</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Dr. Priyanka Pachauri</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Contact Us</p>
                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">+91 90797 65578</a>
                      <span className="text-gray-400">|</span>
                      <a href="tel:8979670705" className="hover:underline">+91 8979670705 (WhatsApp)</a>
                    </div>
                    <div className="mt-2">
                      <Mail size={18} className="inline mr-2 text-black" />
                      <a href="mailto:drpriyankagynec@gmail.com" className="hover:underline">
                        drpriyankagynec@gmail.com
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

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

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