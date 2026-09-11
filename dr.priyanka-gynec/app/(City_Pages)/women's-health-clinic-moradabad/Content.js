import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function WomensHealthClinicMoradabad() {
  const faqs = [
    {
      q: "Does this facility offer hospital level maternity and delivery care in Moradabad?",
      a: "Yes, both normal delivery and emergency caesarean support are available under one roof with a fully equipped labour room and operation theatre.",
    },
    {
      q: "Is laparoscopic surgery available for gynaecological conditions like fibroids and cysts?",
      a: "Yes, laparoscopic surgery for fibroids, ovarian cysts, endometriosis, and related conditions is offered with modern 3D laparoscopic equipment.",
    },
    {
      q: "Do you provide fertility and IVF treatment?",
      a: "Yes, fertility evaluation and IVF support are available, including hormonal assessment and ovulation monitoring for both partners.",
    },
    {
      q: "What happens if a normal delivery turns into an emergency?",
      a: "Because the facility has an operation theatre and specialist team on standby, the case can be shifted to emergency caesarean immediately without delay or referral elsewhere.",
    },
    {
      q: "Is emergency care available at night or on holidays?",
      a: "Yes, emergency gynaecological and maternity support is available round the clock, including nights and holidays.",
    },
    {
      q: "Does the hospital handle high risk pregnancies?",
      a: "Yes, high risk pregnancies involving twins, advanced maternal age, or existing medical conditions are managed with closer monitoring and specialist coordination.",
    },
    {
      q: "Can I consult for PCOS or irregular periods here?",
      a: "Yes, PCOS, irregular periods, and other hormonal or menstrual concerns are diagnosed and treated with a structured plan.",
    },
    {
      q: "How is Dr. Priyanka Pachauri connected to Ujala Cygnus BrightStar Hospital?",
      a: "Dr. Priyanka Pachauri is associated with Ujala Cygnus BrightStar Hospital in Moradabad, providing gynaecology, maternity, and laparoscopic surgical care through the hospital's infrastructure.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can call the hospital directly or message on WhatsApp at 8979670705 to schedule a consultation.",
    },
    {
      q: "Are consultations private and confidential?",
      a: "Yes, all consultations are conducted with full privacy in a comfortable, judgement free environment.",
    },
  ];


  const sections = [
    {
      title: "Why Hospital Level Care Matters More Than A Simple Clinic Visit",
      intro: "A basic clinic can manage routine checkups, but real situations in women's health are rarely predictable. Hospital level care matters because it offers:",
      items: [
        "Immediate access to an operation theatre if a normal delivery turns into an emergency caesarean",
        "On site laboratory and imaging support instead of referrals to outside labs",
        "A specialist team, including anaesthesiologists and paediatricians, available within the same building",
        "NICU and newborn care support right after delivery",
        "No delay or transfer to another facility during a critical moment",
      ],
      outro: "For women in Moradabad, having this kind of coordinated setup locally removes the fear and delay that often comes with being referred out of the city during an emergency.",
    },
    {
      title: "Maternity And Antenatal Care",
      intro: "Hospital level maternity care supports mothers and babies through each stage of pregnancy.",
      items: [
        "Structured monthly antenatal visits throughout pregnancy",
        "Regular ultrasound monitoring to track baby's growth and health",
        "Blood investigations and gestational diabetes screening",
        "Blood pressure and pre eclampsia monitoring",
        "Close supervision for high risk pregnancies, including twins or advanced maternal age",
        "A clear, personalised birth plan prepared in advance",
      ],
    },
    {
      title: "Safe Delivery Services",
      intro: "A hospital setup allows delivery care to be planned while remaining prepared for unexpected situations.",
      items: [
        "Fully equipped labour room ready for normal delivery",
        "Operation theatre on standby for emergency caesarean",
        "Anaesthesia support available at all times",
        "Paediatric team ready to receive and examine the newborn immediately",
        "Priority given to normal delivery whenever it is medically safe",
      ],
    },
    {
      title: "Fertility And IVF Support",
      intro: "Hospital based fertility support helps bring assessment, monitoring, and treatment planning together.",
      items: [
        "Detailed fertility evaluation for both partners",
        "Hormonal assessment and ovulation tracking",
        "Access to advanced fertility treatment including IVF",
        "Laboratory and monitoring support within the same facility",
        "Reduced delays between diagnosis and treatment steps",
      ],
    },
    {
      title: "Laparoscopic And Gynaecological Surgery",
      intro: "Minimally invasive surgical care can be supported by trained teams, an equipped operation theatre, and on site recovery monitoring.",
      items: [
        "Keyhole surgery for ovarian cysts, fibroids, and endometriosis",
        "Smaller incisions compared to traditional open surgery",
        "Less post operative pain and faster recovery",
        "Trained surgical staff and properly equipped operation theatre",
        "Post operative monitoring facilities available on site",
      ],
    },
    {
      title: "Coordinated Departments Working Together",
      intro: "Care becomes more efficient when the relevant teams work together within one hospital environment.",
      items: [
        "Gynaecologist, anaesthesiologist, paediatrician, and radiologist working under one roof",
        "Instant sharing of test results and scan reports between departments",
        "Faster decision making during delivery or high risk situations",
        "Reduced need for external referrals",
      ],
    },
    {
      title: "Emergency Preparedness Around The Clock",
      intro: "Emergency readiness is especially important in maternity and surgical care, where a situation may change quickly.",
      items: [
        "Round the clock availability of medical staff",
        "Operation theatre ready at short notice",
        "Immediate response system for sudden bleeding or labour complications",
        "No requirement to travel elsewhere during a crisis",
      ],
    },
    {
      title: "Menstrual Health, PCOS And Hormonal Disorders",
      intro: "Menstrual and hormonal concerns need accurate evaluation rather than short term symptom relief alone.",
      items: [
        "Diagnosis of irregular or heavy periods through ultrasound and hormonal testing",
        "Structured PCOS treatment combining medication and lifestyle guidance",
        "Management of thyroid related menstrual irregularities",
        "Long term monitoring instead of only symptom relief",
      ],
    },
    {
      title: "Menopause And Long Term Wellness",
      intro: "Women's healthcare also includes support for changing needs later in life.",
      items: [
        "Guidance for hot flashes, mood changes, and hormonal shifts",
        "Bone density monitoring to reduce osteoporosis risk",
        "Ongoing support through the menopausal transition",
      ],
    },
    {
      title: "What A Hospital Level Women's Health Facility Should Offer",
      intro: "A trusted hospital level women's health facility should provide more than consultations alone.",
      items: [
        "Qualified specialists with recognised experience in obstetrics, gynaecology, and laparoscopic surgery",
        "Full hospital infrastructure including operation theatre, labour room, and emergency support",
        "Advanced diagnostic equipment such as updated ultrasound and imaging systems",
        "Coordinated departments working together instead of isolated consultations",
        "Round the clock emergency availability for pregnancy and gynaecological complications",
        "Transparent communication about diagnosis, treatment options, and costs",
        "Continuity of care from the first consultation through delivery and beyond",
        "Comfortable and private environment for sensitive discussions",
      ],
    },
    {
      title: "Why Local Access To Hospital Level Care Matters In Moradabad",
      intro: "Local access helps women and families receive timely care while staying close to their support network.",
      items: [
        "Fewer long distance trips for routine checkups and scans",
        "Family members can be present quickly during delivery or emergencies",
        "Continuity with the same medical team across multiple visits",
        "Faster response time during pregnancy complications",
        "Greater comfort discussing sensitive health concerns locally",
      ],
    },
    {
      title: "Symptoms Women Should Never Ignore",
      intro: "Many women delay seeking medical help because they assume mild discomfort will pass on its own. Recognising warning signs early can make a significant difference in how quickly and effectively a condition is treated.",
      items: [
        "Sudden or severe pelvic pain that does not go away with rest",
        "Heavy bleeding that soaks through a pad or tampon within an hour",
        "Periods that stop suddenly or become extremely irregular without explanation",
        "Unusual vaginal discharge accompanied by odour, itching, or burning",
        "Pain during intercourse that is new or worsening",
        "Spotting or bleeding after menopause",
        "Persistent bloating, especially when combined with a change in appetite or bowel habits",
        "Lumps or changes noticed during a breast self examination",
        "Severe nausea, dizziness, or fainting during early pregnancy",
        "Reduced or absent fetal movement during later stages of pregnancy",
        "Fever or chills following any gynaecological procedure or delivery",
      ],
      outro: "None of these symptoms should be dismissed as something that will simply resolve with time. Early evaluation may allow for simpler, less invasive treatment, while delayed diagnosis can sometimes mean a more complicated recovery later.",
    },
    {
      title: "Building Long Term Trust With Your Healthcare Provider",
      intro: "Women's health is not only about treating problems as they appear. It is also about building a relationship with a healthcare provider who understands a woman's medical history over time.",
      items: [
        "Faster diagnosis because the doctor already knows the patient's medical background",
        "Better tracking of recurring conditions such as PCOS, fibroids, or thyroid imbalance",
        "More personalised guidance during pregnancy based on previous pregnancy history",
        "Greater comfort discussing sensitive topics with a familiar and trusted doctor",
        "Consistent follow up that reduces the chances of a condition being missed",
      ],
      outro: "Choosing a facility that supports this kind of long term relationship, rather than treating each visit as an isolated event, can support better health outcomes across a woman's lifetime.",
    },
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
                Women&apos;s Health Clinic In Moradabad: Hospital Level Care For Every Stage Of A Woman&apos;s Life
              </h1>

              <p className="text-gray-700 mb-4">
                Women&apos;s health needs are rarely limited to a single visit or a single problem. A young girl needs guidance during her first period. A newly married woman may need fertility support. An expecting mother needs continuous monitoring through nine months and a safe delivery. A woman in her forties may need surgery for fibroids or a hysterectomy. All of these situations demand something more than a small consultation room. They demand hospital level infrastructure, a coordinated medical team, and the ability to respond immediately if something goes wrong. This is exactly the kind of care women in Moradabad are now actively searching for.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Core Pillars Of Hospital Level Women&apos;s Health Care
              </h2>

              <p className="text-gray-700">
                Hospital level care connects maternity services, fertility support, gynaecological surgery, diagnostic services, and emergency preparedness within a coordinated environment.
              </p>
            </div>

            {/* Sections 0-8 */}
            {sections.slice(0, 9).map((section) => (
              <div key={section.title} className="mb-12">
                <h2 className="text-3xl font-serif mb-4 text-gray-900">{section.title}</h2>
                <p className="text-gray-700 mb-4">{section.intro}</p>
                <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {section.outro && <p className="text-gray-700">{section.outro}</p>}
              </div>
            ))}

            {/* Expertise Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Dedicated Word On Expertise Behind The Care
              </h2>

              <p className="text-gray-700 mb-4">
                Behind every hospital level facility is a team of specialists whose training and clinical judgement determine patient outcomes. Dr. Priyanka Pachauri, associated with Ujala Cygnus BrightStar Hospital in Moradabad, brings specialist expertise to gynaecology, maternity, and laparoscopic surgical care in the city.
              </p>

              <p className="text-gray-700">
                Being connected to a full scale hospital setup means patients are not limited to a standalone clinic experience. They gain access to hospital infrastructure including operation theatres, emergency support, and coordinated specialist care, all built around the same principle of putting the mother and her health first at every stage of her journey.
              </p>
            </div>

            {/* Sections 9-10 */}
            {sections.slice(9, 11).map((section) => (
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

            {/* First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What To Expect During Your First Visit
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Registration along with your medical, menstrual, and family history</li>
                <li>An open consultation to discuss your symptoms or concerns without being rushed</li>
                <li>Examination or ultrasound scan if required, conducted with full privacy</li>
                <li>A clear diagnosis and treatment plan explained in simple terms</li>
                <li>Guidance on any further tests, medication, or follow up appointments needed</li>
              </ul>
            </div>

            {/* Section 11 */}
            {sections.slice(11).map((section) => (
              <div key={section.title} className="mb-12">
                <h2 className="text-3xl font-serif mb-4 text-gray-900">{section.title}</h2>
                <p className="text-gray-700 mb-4">{section.intro}</p>
                <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {section.outro && <p className="text-gray-700">{section.outro}</p>}
              </div>
            ))}

            {/* Closing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Women&apos;s Health Care In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing where to receive gynaecological, maternity, or fertility care is one of the most important health decisions a woman will make, often repeated across many stages of her life. Hospital level care helps ensure that whatever the situation, whether routine or urgent, the right specialists, equipment, and emergency support are available under one roof.
              </p>

              <p className="text-gray-700">
                For women in Moradabad, this can mean safer pregnancies, better surgical outcomes, and the confidence that comes from knowing help is close by.
              </p>
            </div>

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