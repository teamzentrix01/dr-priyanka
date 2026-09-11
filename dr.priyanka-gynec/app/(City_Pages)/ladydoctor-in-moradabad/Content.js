import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function LadyDoctorInMoradabad() {
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
      q: "Is fertility and IVF treatment available with this lady doctor?",
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
      q: "How can I book an appointment with this lady doctor?",
      a: "You can call or WhatsApp the clinic directly using the contact details listed above.",
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
                Lady Doctor In Moradabad: Comfortable And Trusted Care For Women
              </h1>

              <p className="text-gray-700 mb-4">
                Many women prefer consulting a lady doctor for gynaecological, pregnancy, or fertility related concerns, and this preference is completely valid and common. Comfort, privacy, and the ability to speak openly about sensitive health topics often matter just as much as medical expertise. In Moradabad, women now have access to a dedicated lady doctor who combines advanced medical technology with a genuinely warm, understanding approach to every consultation, no matter how personal or difficult the concern may feel.
              </p>

              <p className="text-gray-700">
                This guide covers everything you need to know about finding the right lady doctor in Moradabad, including why this preference matters, what services are typically offered, and what to look for in a female specialist you can truly trust.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Many Women Prefer A Lady Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                The reasons behind this preference are personal, valid, and rooted in genuine comfort during sensitive health discussions that many women find easier with someone who truly understands.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Greater ease discussing intimate symptoms without feeling embarrassed</li>
                <li>A sense of shared understanding around pregnancy and reproductive health</li>
                <li>Increased comfort during physical examinations related to gynaecological care</li>
                <li>Cultural or personal values that make a female doctor feel more appropriate</li>
                <li>A perception of greater empathy during emotionally sensitive consultations</li>
                <li>Confidence that concerns will be taken seriously without being dismissed</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Services A Lady Doctor Typically Provides
              </h2>

              <p className="text-gray-700 mb-4">
                A dedicated lady doctor usually offers comprehensive women's health services covering every stage of reproductive life, from adolescence through menopause and beyond.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>General gynaecology consultations for menstrual and hormonal concerns</li>
                <li>Antenatal and postnatal pregnancy care from early pregnancy through delivery</li>
                <li>Fertility evaluation and IVF related treatment support</li>
                <li>Laparoscopic surgery for conditions like fibroids, cysts, and endometriosis</li>
                <li>Management of menstrual irregularities and hormonal imbalances</li>
                <li>Paediatric care including newborn checkups and vaccination services</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Comfort Matters As Much As Expertise
              </h2>

              <p className="text-gray-700 mb-4">
                While medical skill is essential, feeling genuinely comfortable during a consultation significantly affects the quality of care a woman receives.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients are more likely to share complete, accurate symptom details</li>
                <li>Open communication helps doctors make more accurate diagnoses</li>
                <li>Reduced anxiety leads to a calmer, more cooperative examination experience</li>
                <li>Trust built through comfort encourages consistent follow up visits</li>
                <li>Sensitive topics like fertility struggles are easier to discuss honestly</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Care From A Trusted Lady Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnancy is a deeply personal journey, and many women feel more at ease being guided through it by a female specialist.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular antenatal checkups to monitor maternal and fetal wellbeing</li>
                <li>Close monitoring for high risk pregnancies requiring extra attention</li>
                <li>Guidance on nutrition, lifestyle, and preparation for childbirth</li>
                <li>Support for natural, normal vaginal delivery whenever appropriate</li>
                <li>Postnatal care and recovery support after childbirth</li>
                <li>A reassuring presence during an emotionally significant life stage</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility Support From A Female Specialist
              </h2>

              <p className="text-gray-700 mb-4">
                Fertility struggles can be emotionally difficult, and many women find it easier to discuss these concerns openly with a female doctor.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Thorough evaluation to identify potential causes of infertility</li>
                <li>Personalized treatment plans based on individual health history</li>
                <li>Management of conditions like PCOS that commonly affect fertility</li>
                <li>Access to advanced IVF technology and monitoring systems</li>
                <li>Honest, realistic guidance about treatment options and expected outcomes</li>
                <li>Continued emotional support throughout the fertility treatment journey</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Surgery Performed By A Skilled Lady Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Many women feel more confident undergoing gynaecological surgery when it is performed by an experienced female surgeon.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic cystectomy for ovarian cyst removal while preserving fertility</li>
                <li>Laparoscopic myomectomy for uterus preserving fibroid treatment</li>
                <li>Laparoscopic hysterectomy using minimally invasive keyhole techniques</li>
                <li>Endometriosis excision surgery for chronic pelvic pain relief</li>
                <li>Diagnostic hysteroscopy and hysteroscopic polypectomy procedures</li>
                <li>Sacrocolpopexy for pelvic organ prolapse repair</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What To Expect During A Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding what a typical visit involves can help new patients feel more prepared and at ease.
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
                  Conducted respectfully and only when clinically necessary
                </li>
                <li>
                  <strong>Diagnostic Tests</strong>
                  <br />
                  Ultrasound or lab tests are recommended if appropriate
                </li>
                <li>
                  <strong>Clear Discussion</strong>
                  <br />
                  Findings are explained in simple, understandable language
                </li>
                <li>
                  <strong>Treatment Planning</strong>
                  <br />
                  A personalized plan is outlined based on your specific needs
                </li>
                <li>
                  <strong>Follow Up Scheduling</strong>
                  <br />
                  Next steps or future appointments are arranged as needed
                </li>
              </ol>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs You Should Consult A Lady Doctor
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
                <li>A general need for reproductive health guidance or screening</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What To Look For In A Trusted Lady Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing the right female specialist involves considering a few important factors beyond simple availability or proximity to home.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Relevant qualifications, fellowships, and specialized surgical training</li>
                <li>Experience across a broad range of gynaecological conditions</li>
                <li>Access to modern diagnostic and surgical technology</li>
                <li>A warm, respectful communication style during every consultation</li>
                <li>Consistent, long term continuity of care rather than one time visits</li>
                <li>Genuine patient trust reflected through consistent positive experiences</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Concerns Women Discuss With A Lady Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Certain concerns are often easier to bring up with a female doctor who understands these experiences firsthand and responds with genuine care.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular periods, unusual discharge, or unexplained pelvic discomfort</li>
                <li>Difficulty conceiving and questions about fertility treatment options</li>
                <li>Concerns during pregnancy about symptoms, screening, or delivery choices</li>
                <li>Questions about menstrual health during adolescence</li>
                <li>Support and guidance through perimenopause and menopause related changes</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Paediatric Care Alongside Women's Health
              </h2>

              <p className="text-gray-700 mb-4">
                Many lady doctors also extend their care to newborns, creating continuity from pregnancy through early childhood.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Newborn assessments shortly after birth</li>
                <li>Vaccination following recommended immunization schedules</li>
                <li>Growth and developmental milestone tracking</li>
                <li>Guidance for parents on common newborn concerns</li>
                <li>A consistent care relationship from pregnancy through infancy</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How To Prepare For Your First Visit
              </h2>

              <p className="text-gray-700 mb-4">
                A little preparation before your first consultation can make the appointment feel smoother and more productive.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bring any previous medical records, reports, or prescriptions you have</li>
                <li>Write down your symptoms, including when they started and how they feel</li>
                <li>Note your menstrual cycle history if relevant to your visit</li>
                <li>List any medications or supplements you are currently taking</li>
                <li>Prepare a list of questions or concerns you want to discuss openly</li>
                <li>Bring a family member along if that helps you feel more comfortable</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Building Long Term Trust With Your Lady Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Consistent care over time often leads to a stronger, more effective doctor patient relationship built on mutual respect and understanding.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A familiar doctor can identify subtle changes in your health more easily</li>
                <li>Trust built over multiple visits leads to more open, honest conversations</li>
                <li>Continuity reduces the need to repeat your medical history every visit</li>
                <li>Comfort grows naturally the more consistently you see the same doctor</li>
                <li>Long term patients often feel more supported through major life changes</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Pachauri As Your Lady Doctor In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a gynaecologist and IVF specialist in Moradabad who combines advanced 3D laparoscopic surgery, structured pregnancy care, and personalized fertility treatment with a warm, understanding approach that helps women feel genuinely comfortable discussing sensitive health concerns at every stage of their reproductive journey.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions To Ask A Lady Doctor During Your Visit
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
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Empathy Makes A Real Difference In Women's Healthcare
              </h2>

              <p className="text-gray-700 mb-4">
                Beyond clinical expertise, genuine empathy shapes the overall experience of consulting a lady doctor for personal health concerns.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sensitive topics become easier to discuss with a compassionate doctor</li>
                <li>Anxiety around procedures or diagnoses is reduced through clear reassurance</li>
                <li>Patients feel more comfortable following through with recommended care</li>
                <li>Emotional support during fertility struggles can be as important as treatment</li>
                <li>A caring approach often leads to more open, honest communication overall</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Mistakes To Avoid When Choosing A Lady Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                A few common mistakes can lead women to settle for a doctor who may not truly fit their needs.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Choosing a doctor based only on distance without checking qualifications</li>
                <li>Ignoring patient reviews or genuine feedback before booking a first visit</li>
                <li>Assuming every clinic offers the same range of women's health services</li>
                <li>Skipping questions about available technology for surgery or diagnosis</li>
                <li>Not asking about follow up care before committing to any treatment</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Location And Accessibility Support Consistent Care
              </h2>

              <p className="text-gray-700 mb-4">
                Practical factors like location and easy communication also play a role in maintaining consistent, reliable women's healthcare.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A conveniently located clinic makes regular checkups easier to maintain</li>
                <li>Accessible appointment scheduling reduces delays in urgent situations</li>
                <li>Clear communication channels like phone and WhatsApp simplify quick queries</li>
                <li>Proximity matters especially during frequent pregnancy or fertility visits</li>
                <li>Consistent access supports better long term monitoring and outcomes</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Finding A Lady Doctor In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing a lady doctor is a personal decision rooted in comfort, trust, and the desire to be truly heard during sensitive health conversations. Finding a specialist who combines genuine empathy with advanced medical technology makes it easier to navigate everything from routine checkups to complex fertility or surgical care with confidence and peace of mind, at every stage of a woman's health journey.
              </p>
            </div>

            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Contact &amp; Clinic Address
              </h2>

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