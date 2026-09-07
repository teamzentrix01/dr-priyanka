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


export default function GynaecologistInMoradabad() {
  const faqs = [
    {
      q: "What services does Dr. Priyanka Pachauri offer in Moradabad?",
      a: "Her practice covers gynaecology, laparoscopy, fertility and IVF, pregnancy care, and paediatric services.",
    },
    {
      q: "Does the clinic offer laparoscopic surgery for fibroids and cysts?",
      a: "Yes, laparoscopic myomectomy and cystectomy are listed among her core surgical services.",
    },
    {
      q: "Is fertility and IVF treatment available at this clinic?",
      a: "Yes, personalized fertility and IVF treatments are offered, supported by advanced diagnostic technology.",
    },
    {
      q: "Does the clinic provide antenatal and pregnancy care?",
      a: "Yes, structured antenatal services and support for normal delivery are part of her core offerings.",
    },
    {
      q: "Is paediatric care available for newborns at this clinic?",
      a: "Yes, paediatric consultations, vaccinations, and newborn care are included in her services.",
    },
    {
      q: "What technology is used for pregnancy monitoring at the clinic?",
      a: "The clinic uses 3D and 4D ultrasound imaging for detailed pregnancy assessments.",
    },
    {
      q: "Does the clinic treat endometriosis and chronic pelvic pain?",
      a: "Yes, advanced laparoscopic excision for endometriosis is listed among her specialities.",
    },
    {
      q: "What qualifications does Dr. Priyanka Pachauri hold?",
      a: "She holds an MS in Obstetrics and Gynaecology, FMAS, and an advanced infertility fellowship.",
    },
    {
      q: "Where is Dr. Priyanka Pachauri's clinic located?",
      a: "The clinic is located in Gandhi Nagar, Moradabad, Uttar Pradesh.",
    },
    {
      q: "How can I book an appointment with Dr. Priyanka Pachauri?",
      a: "You can call or message the clinic directly through the contact details listed on the website.",
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
                Gynaecologist In Moradabad: Complete Women's Health Care Under One Roof
              </h1>


              <p className="text-gray-700 mb-4">
                Finding the right Gynaecologist is one of the most important healthcare decisions a woman can make, whether the need is routine wellness care, pregnancy support, fertility treatment, or a more complex gynaecological procedure. Women in Moradabad now have access to comprehensive, technology driven women's health care that combines advanced laparoscopic techniques, structured pregnancy care, and compassionate fertility support under a single, trusted practice designed around genuine patient comfort and long term wellbeing.
              </p>


              <p className="text-gray-700">
                This guide covers everything you need to know about choosing a Gynaecologist in Moradabad, including the range of services typically offered, what to look for in a women's health specialist, and how modern gynaecological care has evolved to prioritize both safety and comfort.
              </p>
            </div>


            {/* Section 2 — Why Choosing The Right Gynaecologist Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choosing The Right Gynaecologist Matters
              </h2>


              <p className="text-gray-700 mb-4">
                A Gynaecologist is often a woman's primary healthcare partner across many stages of life, which makes the right fit especially important for long term trust and comfort.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Reproductive health needs change significantly from adolescence through menopause</li>
                <li>Pregnancy care requires close monitoring and a trusted, consistent relationship</li>
                <li>Fertility challenges often need specialized diagnostic and treatment expertise</li>
                <li>gynaecological surgeries benefit greatly from experience and advanced technology</li>
                <li>Sensitive health concerns are easier to discuss with a doctor who listens carefully</li>
                <li>Continuity of care allows a doctor to understand your full medical history</li>
              </ul>
            </div>


            {/* Section 3 — Core Areas Of gynaecological Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Core Areas Of gynaecological Care
              </h2>


              <p className="text-gray-700 mb-4">
                A complete gynaecology practice typically covers a wide range of women's health needs, going far beyond routine checkups.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>General gynaecology consultations for menstrual and reproductive health concerns</li>
                <li>Antenatal and postnatal care throughout pregnancy and after childbirth</li>
                <li>Fertility evaluation and treatment support, including IVF related services</li>
                <li>Laparoscopic and minimally invasive gynaecological surgery</li>
                <li>Management of conditions like fibroids, cysts, and endometriosis</li>
                <li>Paediatric care for newborns, including vaccination and early wellness visits</li>
              </ul>
            </div>


            {/* Section 4 — Pregnancy And Antenatal Care Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy And Antenatal Care Services
              </h2>


              <p className="text-gray-700 mb-4">
                Structured pregnancy care is one of the most essential services a Gynaecologist provides, supporting both mother and baby at every stage.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular antenatal checkups and screening throughout the pregnancy</li>
                <li>High risk pregnancy monitoring for conditions that require closer attention</li>
                <li>Ultrasound based fetal growth and wellbeing assessments</li>
                <li>Guidance on nutrition, lifestyle, and preparation for childbirth</li>
                <li>Support for natural, normal vaginal delivery whenever medically appropriate</li>
                <li>Postnatal follow up care for both mother and newborn after delivery</li>
              </ul>
            </div>


            {/* Section 5 — Fertility And IVF Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility And IVF Support
              </h2>


              <p className="text-gray-700 mb-4">
                For couples facing difficulty conceiving, a Gynaecologist with fertility expertise can offer a structured, supportive path forward.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Detailed fertility evaluation for both partners where needed</li>
                <li>Diagnosis and management of conditions like PCOS related infertility</li>
                <li>Ovulation induction and personalized fertility treatment planning</li>
                <li>Advanced technology such as time lapse embryo monitoring during IVF</li>
                <li>AI supported semen analysis and reproductive diagnostic testing</li>
                <li>Emotional support throughout what can be a challenging journey</li>
              </ul>
            </div>


            {/* Section 6 — Advanced Laparoscopic gynaecological Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Advanced Laparoscopic gynaecological Surgery
              </h2>


              <p className="text-gray-700 mb-4">
                Many gynaecological conditions that once required open surgery can now be treated using minimally invasive laparoscopic techniques.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic cystectomy for ovarian cyst removal while preserving fertility</li>
                <li>Laparoscopic myomectomy for uterus preserving fibroid treatment</li>
                <li>Laparoscopic hysterectomy using minimally invasive keyhole techniques</li>
                <li>Diagnostic hysteroscopy for evaluating the uterine cavity</li>
                <li>Hysteroscopic polypectomy for precise removal of uterine polyps</li>
                <li>Endometriosis excision surgery to help relieve chronic pelvic pain</li>
              </ul>
            </div>


            {/* Section 7 — Why Advanced Technology Matters In gynaecological Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Advanced Technology Matters In gynaecological Care
              </h2>


              <p className="text-gray-700 mb-4">
                Modern diagnostic and surgical technology has significantly improved the safety, precision, and recovery experience of gynaecological treatment.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>High definition 3D laparoscopic systems offer clearer surgical visualization</li>
                <li>3D and 4D ultrasound imaging supports more detailed pregnancy monitoring</li>
                <li>Time lapse embryo incubation technology supports advanced IVF procedures</li>
                <li>AI powered diagnostic tools assist with more accurate fertility assessments</li>
                <li>Smaller incisions and precise techniques generally support faster recovery</li>
                <li>Better visualization helps protect healthy tissue during delicate procedures</li>
              </ul>
            </div>


            {/* Section 8 — Signs You Should Consult A Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs You Should Consult A Gynaecologist
              </h2>


              <p className="text-gray-700 mb-4">
                Certain symptoms and life stages call for a timely consultation rather than waiting for a routine annual visit.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular, painful, or unusually heavy menstrual periods</li>
                <li>Persistent pelvic pain or discomfort during daily activities</li>
                <li>Difficulty conceiving after several months of trying</li>
                <li>Confirmed or suspected pregnancy requiring antenatal care</li>
                <li>Symptoms suggestive of fibroids, cysts, or endometriosis</li>
                <li>A need for routine screening or general reproductive health guidance</li>
              </ul>
            </div>


            {/* Section 9 — What To Expect During Your First Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What To Expect During Your First Consultation
              </h2>


              <p className="text-gray-700 mb-4">
                Understanding what a first visit typically involves can help new patients feel more comfortable and prepared.
              </p>


              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Medical History Review</strong>
                  <br />
                  Your symptoms and health background are discussed
                </li>
                <li>
                  <strong>Physical Examination</strong>
                  <br />
                  A relevant clinical examination is conducted if needed
                </li>
                <li>
                  <strong>Diagnostic Tests</strong>
                  <br />
                  Ultrasound or lab tests are recommended when appropriate
                </li>
                <li>
                  <strong>Discussion</strong>
                  <br />
                  Findings are explained clearly in simple, understandable language
                </li>
                <li>
                  <strong>Treatment Planning</strong>
                  <br />
                  A personalized care plan is outlined based on your needs
                </li>
                <li>
                  <strong>Follow Up Scheduling</strong>
                  <br />
                  Next steps or future appointments are arranged
                </li>
              </ol>
            </div>


            {/* Section 10 — Common gynaecological Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common gynaecological Conditions Treated
              </h2>


              <p className="text-gray-700 mb-4">
                Gynaecologists commonly manage a wide range of reproductive health conditions that affect women at different life stages.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Polycystic ovary syndrome and related hormonal imbalances</li>
                <li>Uterine fibroids causing pain or heavy menstrual bleeding</li>
                <li>Ovarian cysts identified through symptoms or routine imaging</li>
                <li>Endometriosis causing chronic pelvic pain and fertility concerns</li>
                <li>Uterine and vaginal prolapse affecting pelvic support structures</li>
                <li>Menstrual irregularities requiring evaluation and management</li>
              </ul>
            </div>


            {/* Section 11 — Paediatric Care Alongside Women's Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Paediatric Care Alongside Women's Health
              </h2>


              <p className="text-gray-700 mb-4">
                Many women's health practices also extend care to newborns and young children, creating continuity from pregnancy through early childhood.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Newborn assessments shortly after birth</li>
                <li>Routine vaccination following recommended immunization schedules</li>
                <li>Growth and developmental milestone tracking</li>
                <li>Guidance on feeding and common newborn concerns</li>
                <li>A consistent care relationship from pregnancy through infancy</li>
              </ul>
            </div>


            {/* Section 12 — What To Look For In A Trusted Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What To Look For In A Trusted Gynaecologist
              </h2>


              <p className="text-gray-700 mb-4">
                Choosing the right specialist involves more than proximity, and a few key factors can guide a confident decision.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Relevant qualifications, fellowships, and specialized training</li>
                <li>Experience across a broad range of gynaecological conditions and procedures</li>
                <li>Access to modern diagnostic and surgical technology</li>
                <li>Clear, compassionate communication throughout every consultation</li>
                <li>Consistent, long term continuity of care rather than one time visits</li>
                <li>Positive patient experiences reflected in genuine feedback and outcomes</li>
              </ul>
            </div>


            {/* Section 13 — Why Choose Dr. Priyanka Pachauri As Your Gynaecologist In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Pachauri As Your Gynaecologist In Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a Gynaecologist and IVF specialist in Moradabad known for combining advanced 3D laparoscopic surgery, structured pregnancy care, and personalized fertility treatment with a genuinely patient first approach, offering complete women's health support from antenatal care through complex gynaecological procedures and paediatric wellness visits.
              </p>
            </div>


            {/* Section 14 — The Emotional Side Of Women's Healthcare */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Emotional Side Of Women's Healthcare
              </h2>


              <p className="text-gray-700 mb-4">
                Beyond clinical treatment, gynaecological care often involves sensitive, deeply personal conversations that deserve genuine empathy.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Feeling heard and understood during difficult fertility conversations</li>
                <li>Receiving clear explanations without medical jargon or confusion</li>
                <li>Having concerns taken seriously rather than dismissed as minor</li>
                <li>Building trust over time through consistent, attentive care</li>
                <li>Feeling supported emotionally during pregnancy, surgery, or diagnosis</li>
              </ul>
            </div>


            {/* Section 15 — Questions To Ask A Gynaecologist During Your Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions To Ask A Gynaecologist During Your Visit
              </h2>


              <p className="text-gray-700 mb-4">
                Asking thoughtful questions during a consultation helps ensure you leave with complete clarity about your health and treatment options.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What could be causing my current symptoms or concerns</li>
                <li>What diagnostic tests are recommended and why are they necessary</li>
                <li>What treatment options are available and what do they each involve</li>
                <li>Are there any lifestyle changes that could help my condition</li>
                <li>What is the expected timeline for improvement or recovery</li>
                <li>When should I schedule a follow up visit after this consultation</li>
                <li>What warning signs should prompt me to seek care sooner</li>
              </ul>
            </div>


            {/* Section 16 — How Continuity Of Care Improves Long Term Outcomes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Continuity Of Care Improves Long Term Outcomes
              </h2>


              <p className="text-gray-700 mb-4">
                Staying with the same Gynaecologist over time often leads to better, more personalized care as your history becomes well understood.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A consistent doctor can identify subtle changes in your health more easily</li>
                <li>Treatment plans can be adjusted based on a deeper understanding of your history</li>
                <li>Trust built over multiple visits leads to more open, honest conversations</li>
                <li>Continuity reduces the need to repeat your medical history at every visit</li>
                <li>Long term patients often report feeling more comfortable and supported</li>
              </ul>
            </div>


            {/* Section 17 — Preparing For Your First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing For Your First Visit
              </h2>


              <p className="text-gray-700 mb-4">
                A little preparation before your first consultation can make the appointment more productive and less stressful.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bring any previous medical records, reports, or prescriptions you have</li>
                <li>Write down your symptoms, including when they started and how they feel</li>
                <li>Note down your menstrual cycle history if relevant to your visit</li>
                <li>List any medications or supplements you are currently taking</li>
                <li>Prepare a list of questions or concerns you want to discuss</li>
                <li>Bring a family member or partner along if that helps you feel comfortable</li>
              </ul>
            </div>


            {/* Section 18 — Understanding Second Opinions In gynaecological Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Second Opinions In gynaecological Care
              </h2>


              <p className="text-gray-700 mb-4">
                Seeking a second opinion is a normal and reasonable step, especially before major surgery or a significant fertility treatment decision.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A second opinion can confirm a diagnosis or suggest alternative approaches</li>
                <li>It helps patients feel more confident before committing to a treatment plan</li>
                <li>Reputable specialists generally welcome and respect a patient's desire for clarity</li>
                <li>Bringing prior test results speeds up the second opinion consultation</li>
                <li>It is a normal part of making informed healthcare decisions, not a sign of distrust</li>
              </ul>
            </div>


            {/* Section 19 — Supporting Overall Wellness Beyond Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting Overall Wellness Beyond Treatment
              </h2>


              <p className="text-gray-700 mb-4">
                Good gynaecological care often extends beyond treating a specific condition to supporting a woman's overall long term wellbeing.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Guidance on nutrition and lifestyle habits that support reproductive health</li>
                <li>Encouragement toward regular screenings even without active symptoms</li>
                <li>Mental and emotional support during challenging health journeys</li>
                <li>Education about the body's natural changes across different life stages</li>
                <li>A collaborative relationship where the patient feels genuinely involved in decisions</li>
              </ul>
            </div>


            {/* Section 20 — Final Thoughts On Finding A Gynaecologist In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts On Finding A Gynaecologist In Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                Women's health needs are deeply personal and often evolve significantly across different life stages, from adolescence through pregnancy and beyond. Choosing a Gynaecologist who combines genuine empathy with advanced medical technology makes it easier to navigate everything from routine checkups to complex fertility or surgical care with confidence and peace of mind.
              </p>
            </div>


            {/* Section 21 — Contact & Clinic Address */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Contact &amp; Clinic Address
              </h2>


              <div className="space-y-4 mb-6">
                {/* Clinic Address */}
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Dr. Priyanka Pachauri</p>
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
                        href="mailto:drpriyanka@Gynaecologistmoradabad.com"
                        className="hover:underline"
                      >
                        drpriyanka@Gynaecologistmoradabad.com
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


            {/* Section 22 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
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