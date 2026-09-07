import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function FemaleGynaecologistMoradabad() {
  const faqs = [
    {
      q: "Is Dr. Priyanka Pachauri a female gynaecologist in Moradabad?",
      a: "Yes, she is a female gynaecologist and IVF specialist practicing in Moradabad.",
    },
    {
      q: "Does she offer pregnancy and antenatal care?",
      a: "Yes, structured antenatal services and support for normal delivery are part of her offerings.",
    },
    {
      q: "Is fertility and IVF treatment available with this female specialist?",
      a: "Yes, personalized fertility and IVF treatments are offered using advanced diagnostic technology.",
    },
    {
      q: "Does she perform laparoscopic surgery for fibroids and cysts?",
      a: "Yes, laparoscopic myomectomy and cystectomy are listed among her core surgical services.",
    },
    {
      q: "Is paediatric care available alongside women's health services?",
      a: "Yes, newborn checkups and vaccination services are included in her practice.",
    },
    {
      q: "Does the clinic treat menstrual irregularities and hormonal concerns?",
      a: "Yes, general gynaecology consultations cover menstrual and hormonal health concerns.",
    },
    {
      q: "What technology is used during pregnancy monitoring?",
      a: "The clinic uses 3D and 4D ultrasound imaging for detailed pregnancy assessments.",
    },
    {
      q: "What qualifications does Dr. Priyanka Pachauri hold?",
      a: "She holds an MS in Obstetrics and Gynaecology, FMAS, and an advanced infertility fellowship.",
    },
    {
      q: "Where is her clinic located in Moradabad?",
      a: "The clinic is located in Gandhi Nagar, Moradabad, Uttar Pradesh.",
    },
    {
      q: "How can I book an appointment with this female gynaecologist?",
      a: "You can call or WhatsApp the clinic directly using the contact details listed above.",
    },
  ];

  const sections = [
    {
      title: "Why Many Women Choose A Female Gynaecologist",
      intro: "This choice is deeply personal and often rooted in genuine comfort during some of life's most sensitive health conversations that can otherwise feel difficult to navigate alone.",
      items: [
        "Greater ease discussing intimate symptoms without hesitation or embarrassment",
        "A shared sense of understanding around pregnancy and reproductive experiences",
        "Increased comfort during physical examinations related to gynaecological care",
        "Cultural or personal preferences that make a female doctor feel more appropriate",
        "A perceived sense of empathy during emotionally difficult consultations",
        "Confidence that sensitive concerns will be heard without judgment",
      ],
    },
    {
      title: "Comprehensive Services Offered By A Female Gynaecologist",
      intro: "A well rounded female gynaecologist typically provides a broad range of women's health services across every life stage, from adolescence through motherhood and beyond.",
      items: [
        "General gynaecology consultations for menstrual and hormonal health concerns",
        "Antenatal and postnatal pregnancy care from early pregnancy through delivery",
        "Fertility evaluation and IVF related treatment support",
        "Laparoscopic surgery for fibroids, ovarian cysts, and endometriosis",
        "Diagnostic hysteroscopy and hysteroscopic polypectomy procedures",
        "Paediatric care including newborn checkups and vaccination services",
      ],
    },
    {
      title: "Pregnancy Care From A Female Gynaecologist",
      intro: "Pregnancy is one of the most personal experiences in a woman's life, and many feel more supported being guided through it by a female specialist.",
      items: [
        "Regular antenatal checkups to monitor maternal and fetal wellbeing",
        "Close monitoring for high risk pregnancies requiring extra attention",
        "Guidance on nutrition, lifestyle, and preparation for childbirth",
        "Support for natural, normal vaginal delivery whenever medically appropriate",
        "Postnatal care and recovery support after childbirth",
        "A calm, reassuring presence throughout an emotionally significant journey",
      ],
    },
    {
      title: "Fertility Treatment From A Female Specialist",
      intro: "Fertility challenges can be emotionally overwhelming, and many women find it easier to open up about these struggles with a female doctor.",
      items: [
        "Thorough evaluation to identify potential causes of infertility",
        "Personalized treatment plans based on individual health history",
        "Management of conditions like PCOS that commonly affect fertility",
        "Access to advanced IVF technology and embryo monitoring systems",
        "Honest, realistic guidance about treatment options and expected outcomes",
        "Continued emotional support throughout the fertility treatment journey",
      ],
    },
    {
      title: "Laparoscopic Surgery Performed By An Experienced Female Surgeon",
      intro: "Many women feel more confident undergoing gynaecological surgery when it is performed by a skilled and experienced female surgeon.",
      items: [
        "Laparoscopic cystectomy for ovarian cyst removal while preserving fertility",
        "Laparoscopic myomectomy for uterus preserving fibroid treatment",
        "Laparoscopic hysterectomy using minimally invasive keyhole techniques",
        "Endometriosis excision surgery for chronic pelvic pain relief",
        "Sacrocolpopexy for pelvic organ prolapse repair",
        "Laparoscopic sterilization as a safe, permanent day care procedure",
      ],
    },
    {
      title: "Why Advanced Technology Matters In Female Gynaecological Care",
      intro: "Modern diagnostic and surgical technology significantly improves the safety, precision, and comfort of gynaecological treatment.",
      items: [
        "High definition 3D laparoscopic systems for greater surgical precision",
        "3D and 4D ultrasound imaging for detailed pregnancy assessments",
        "Time lapse embryo monitoring technology used during IVF procedures",
        "AI supported semen analysis and reproductive diagnostic testing",
        "Minimally invasive techniques that generally support faster recovery",
        "Better visualization that helps protect healthy tissue during surgery",
      ],
    },
    {
      title: "Signs You Should Consult A Female Gynaecologist",
      intro: "Certain symptoms and life stages call for a timely consultation rather than waiting for a routine annual visit.",
      items: [
        "Irregular, painful, or unusually heavy menstrual periods",
        "Persistent pelvic pain or discomfort during daily activities",
        "Difficulty conceiving after several months of trying",
        "Confirmed or suspected pregnancy requiring antenatal care",
        "Symptoms suggestive of fibroids, cysts, or endometriosis",
        "A general need for reproductive health guidance or screening",
      ],
    },
    {
      title: "What To Look For In A Trusted Female Gynaecologist",
      intro: "Choosing the right specialist involves considering a few important factors beyond simple convenience.",
      items: [
        "Relevant qualifications, fellowships, and specialized surgical training",
        "Broad experience across pregnancy, fertility, and gynaecological surgery",
        "Access to modern diagnostic and surgical technology",
        "A warm, respectful communication style during every consultation",
        "Consistent, long term continuity of care rather than one time visits",
        "Genuine patient trust reflected through consistent positive experiences",
      ],
    },
    {
      title: "Common Concerns Women Discuss With A Female Gynaecologist",
      intro: "Certain concerns are often easier to bring up with a doctor who understands these experiences firsthand.",
      items: [
        "Irregular periods, unusual discharge, or unexplained pelvic discomfort",
        "Difficulty conceiving and questions about fertility treatment options",
        "Concerns during pregnancy about symptoms, screening, or delivery choices",
        "Questions about menstrual health during adolescence",
        "Support and guidance through perimenopause and menopause related changes",
      ],
    },
    {
      title: "Paediatric Care Alongside Women's Health",
      intro: "Many female gynaecologists also extend their care to newborns, creating continuity from pregnancy through early childhood.",
      items: [
        "Newborn assessments shortly after birth",
        "Vaccination following recommended immunization schedules",
        "Growth and developmental milestone tracking",
        "Guidance for parents on common newborn concerns",
        "A consistent care relationship from pregnancy through infancy",
      ],
    },
    {
      title: "How To Prepare For Your First Visit",
      intro: "A little preparation before your first consultation can make the appointment feel smoother and more productive.",
      items: [
        "Bring any previous medical records, reports, or prescriptions you have",
        "Write down your symptoms, including when they started and how they feel",
        "Note your menstrual cycle history if relevant to your visit",
        "List any medications or supplements you are currently taking",
        "Prepare a list of questions or concerns you want to discuss openly",
        "Bring a family member along if that helps you feel more comfortable",
      ],
    },
    {
      title: "Why Empathy Matters As Much As Expertise",
      intro: "Technical skill alone does not define great care. Genuine empathy plays an equally important role in the overall patient experience.",
      items: [
        "Sensitive topics become easier to discuss with a compassionate doctor",
        "Anxiety around procedures or diagnoses is reduced through clear reassurance",
        "Patients feel more comfortable following through with recommended care",
        "Emotional support during fertility struggles can be as important as treatment",
        "A caring approach often leads to more open, honest communication overall",
      ],
    },
    {
      title: "Building Long Term Trust With Your Female Gynaecologist",
      intro: "Consistent care over time often leads to a stronger, more effective doctor patient relationship.",
      items: [
        "A familiar doctor can identify subtle changes in your health more easily",
        "Trust built over multiple visits leads to more open, honest conversations",
        "Continuity reduces the need to repeat your medical history every visit",
        "Comfort grows naturally the more consistently you see the same doctor",
        "Long term patients often feel more supported through major life changes",
      ],
    },
    {
      title: "Questions To Ask A Female Gynaecologist During Your Visit",
      intro: "Asking thoughtful questions during a consultation helps ensure you leave with complete clarity about your health and treatment options.",
      items: [
        "What could be causing my current symptoms or concerns",
        "What diagnostic tests are recommended and why are they necessary",
        "What treatment options are available and what do they each involve",
        "Are there any lifestyle changes that could help my condition",
        "What is the expected timeline for improvement or recovery",
        "When should I schedule a follow up visit after this consultation",
      ],
    },
    {
      title: "Common Mistakes To Avoid When Choosing A Female Gynaecologist",
      intro: "A few common mistakes can lead women to settle for a doctor who may not truly fit their needs.",
      items: [
        "Choosing a doctor based only on distance without checking qualifications",
        "Ignoring patient reviews or genuine feedback before booking a first visit",
        "Assuming every clinic offers the same range of women's health services",
        "Skipping questions about available technology for surgery or diagnosis",
        "Not asking about follow up care before committing to any treatment",
      ],
    },
    {
      title: "How Location And Accessibility Support Consistent Care",
      intro: "Practical factors like location and easy communication also play a role in maintaining consistent, reliable women's healthcare.",
      items: [
        "A conveniently located clinic makes regular checkups easier to maintain",
        "Accessible appointment scheduling reduces delays in urgent situations",
        "Clear communication channels like phone and WhatsApp simplify quick queries",
        "Proximity matters especially during frequent pregnancy or fertility visits",
        "Consistent access supports better long term monitoring and outcomes",
      ],
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="flex-1 order-1">
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Female Gynaecologist In Moradabad: Expert Care Built Around Women&apos;s Comfort
              </h1>

              <p className="text-gray-700 mb-4">
                Choosing a female gynaecologist is a natural preference for many women, especially when discussing personal reproductive health concerns, pregnancy, or fertility struggles. This preference often comes from a genuine desire for comfort, understanding, and open communication during consultations that can otherwise feel vulnerable. In Moradabad, women now have access to a highly qualified female gynaecologist who combines advanced surgical technology with a deeply patient centered approach to care, ensuring every concern is heard with genuine attention and respect.
              </p>

              <p className="text-gray-700">
                This guide covers everything you need to know about choosing a female gynaecologist in Moradabad, including the range of services typically offered, why this choice matters to many women, and what to look for in a specialist you can trust completely.
              </p>
            </div>

            {sections.slice(0, 7).map((section) => (
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

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What To Expect During Your First Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding what a typical visit involves can help new patients feel more prepared and at ease.
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li><strong>Medical History Review</strong><br />Your symptoms and health background are discussed</li>
                <li><strong>Physical Examination</strong><br />Conducted respectfully and only when clinically necessary</li>
                <li><strong>Diagnostic Tests</strong><br />Ultrasound or lab tests are recommended if appropriate</li>
                <li><strong>Clear Discussion</strong><br />Findings are explained in simple, understandable language</li>
                <li><strong>Treatment Planning</strong><br />A personalized plan is outlined based on your specific needs</li>
                <li><strong>Follow Up Scheduling</strong><br />Next steps or future appointments are arranged as needed</li>
              </ol>
            </div>

            {sections.slice(7, 12).map((section) => (
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

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Pachauri As Your Female Gynaecologist In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a gynaecologist and IVF specialist in Moradabad who combines advanced 3D laparoscopic surgery, structured pregnancy care, and personalized fertility treatment with a warm, understanding approach that helps women feel genuinely comfortable discussing sensitive health concerns at every stage of their reproductive journey.
              </p>
            </div>

            {sections.slice(12).map((section) => (
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

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Finding A Female Gynaecologist In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing a female gynaecologist is a personal decision rooted in comfort, trust, and the desire to be truly heard during sensitive health conversations. Finding a specialist who combines genuine empathy with advanced medical technology makes it easier to navigate everything from routine checkups to complex fertility or surgical care with confidence and peace of mind, at every stage of a woman&apos;s health journey.
              </p>
            </div>

            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">Contact &amp; Clinic Address</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Dr. Priyanka Pachauri</p>
                    <p className="text-black">A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001</p>
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
                      <a href="mailto:drpriyanka@gynaecologistmoradabad.com" className="hover:underline">
                        drpriyanka@gynaecologistmoradabad.com
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