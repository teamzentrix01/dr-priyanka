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
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function FemaleGynaecologistMoradabad() {
  const faqs = [
    {
      q: "Is Dr. Priyanka Pachauri a Female Gynaecologist in Moradabad?",
      a: "Yes. Dr. Priyanka Pachauri provides gynaecological and women's healthcare consultation in Moradabad.",
    },
    {
      q: "What conditions can I discuss with a female gynaecologist?",
      a: "You can discuss menstrual problems, PCOS, hormonal concerns, pregnancy, fertility issues, fibroids, ovarian cysts, endometriosis, pelvic pain, and other gynaecological concerns.",
    },
    {
      q: "Can I consult a female gynaecologist for pregnancy care?",
      a: "Yes. A gynaecologist can provide antenatal consultation and pregnancy-related guidance based on your individual healthcare requirements.",
    },
    {
      q: "Does a female gynaecologist provide infertility consultation?",
      a: "Yes. Fertility concerns can be discussed during consultation, and appropriate evaluation and treatment options can be considered according to the patient's circumstances.",
    },
    {
      q: "Can fibroids and ovarian cysts be treated with laparoscopic surgery?",
      a: "Laparoscopic procedures may be suitable for selected patients with fibroids or ovarian cysts. The appropriate treatment depends on the individual diagnosis and clinical assessment.",
    },
    {
      q: "What is laparoscopic gynaecological surgery?",
      a: "Laparoscopic surgery is a minimally invasive surgical approach that uses small incisions and specialized instruments for selected gynaecological procedures.",
    },
    {
      q: "Can I consult a gynaecologist for irregular periods?",
      a: "Yes. Persistent irregular periods should be evaluated because they can have different underlying causes, including hormonal and reproductive health conditions.",
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Previous medical reports, prescriptions, ultrasound reports, medication details, and menstrual history can be useful during your consultation.",
    },
    {
      q: "Where is Dr. Priyanka Pachauri's clinic located?",
      a: "The clinic is located at A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can contact the clinic by phone or WhatsApp using the contact details provided above.",
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
                Female Gynaecologist in Moradabad: Expert Care for Women's Health, Pregnancy & Fertility
              </h1>

              <p className="text-gray-700 mb-4">
                Choosing a Female Gynaecologist in Moradabad is a personal decision for many women. When discussing menstrual health, pregnancy, fertility, hormonal concerns, or other reproductive health conditions, feeling comfortable with your doctor can make it easier to communicate openly and ask important questions.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri provides women's healthcare and gynaecological consultation in Moradabad, with a focus on pregnancy care, fertility, IVF-related treatment, and gynaecological procedures. Her approach combines medical expertise, modern technology, and patient-focused communication to help women understand their condition and available treatment options.
              </p>
            </div>

            {/* Section 2 — Why Many Women Choose a Female Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Many Women Choose a Female Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                Women's health involves many sensitive and personal concerns. Some women feel more comfortable discussing intimate symptoms, reproductive problems, pregnancy-related concerns, or fertility challenges with a female doctor.
              </p>

              <p className="text-gray-700 mb-4">
                Choosing a Female Gynaecologist in Moradabad may provide additional comfort during conversations about:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Irregular or painful periods</li>
                <li>Heavy menstrual bleeding</li>
                <li>Vaginal or pelvic symptoms</li>
                <li>Pregnancy and childbirth</li>
                <li>Fertility and infertility</li>
                <li>PCOS and hormonal concerns</li>
                <li>Menopause-related changes</li>
                <li>Gynaecological examinations</li>
                <li>Surgical treatment</li>
                <li>Reproductive health planning</li>
              </ul>

              <p className="text-gray-700">
                Comfort and trust are important parts of the doctor-patient relationship. A consultation should provide a respectful environment where patients can explain their concerns without hesitation and understand their treatment options clearly.
              </p>
            </div>

            {/* Section 3 — Comprehensive Women's Healthcare */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Comprehensive Women's Healthcare in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                A gynaecologist can support women through different stages of life, from menstrual health and reproductive concerns to pregnancy, fertility treatment, and gynaecological surgery.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the patient's individual requirements, women's healthcare may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>General gynaecology consultation</li>
                <li>Menstrual disorder evaluation</li>
                <li>PCOS and hormonal health management</li>
                <li>Antenatal and postnatal care</li>
                <li>High-risk pregnancy monitoring</li>
                <li>Fertility evaluation</li>
                <li>IVF-related treatment support</li>
                <li>Laparoscopic gynaecological surgery</li>
                <li>Fibroid and ovarian cyst treatment</li>
                <li>Endometriosis management</li>
                <li>Hysteroscopy and selected hysteroscopic procedures</li>
                <li>Pelvic organ prolapse-related surgical care</li>
              </ul>

              <p className="text-gray-700">
                The exact treatment recommended depends on the patient's symptoms, medical history, examination, and investigation results.
              </p>
            </div>

            {/* Section 4 — Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Care From a Female Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnancy is an important stage of a woman's life and requires regular medical monitoring. Many women prefer having a female specialist throughout pregnancy because they may feel more comfortable discussing personal symptoms and pregnancy-related concerns.
              </p>

              <p className="text-gray-700 mb-4">
                Antenatal care may include regular consultations, monitoring of maternal and fetal wellbeing, appropriate investigations, pregnancy-related guidance, and preparation for childbirth.
              </p>

              <p className="text-gray-700 mb-4">
                Women may seek pregnancy consultation for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Pregnancy planning</li>
                <li>Early pregnancy</li>
                <li>Routine antenatal checkups</li>
                <li>Pregnancy-related symptoms</li>
                <li>High-risk pregnancy assessment</li>
                <li>Fetal growth monitoring</li>
                <li>Delivery planning</li>
                <li>Postnatal care</li>
              </ul>

              <p className="text-gray-700">
                Every pregnancy is different. Women with previous pregnancy complications or identified risk factors may require additional monitoring according to their individual medical condition.
              </p>
            </div>

            {/* Section 5 — High-Risk Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Care
              </h2>

              <p className="text-gray-700">
                Some pregnancies require closer medical observation because of maternal health conditions, previous pregnancy complications, multiple pregnancy, or other risk factors. If you have been advised that your pregnancy is high-risk, regular consultation and appropriate investigations can help your doctor monitor your health and pregnancy more closely. The treatment and monitoring plan should always be individualized according to the patient's medical condition.
              </p>
            </div>

            {/* Section 6 — Fertility and IVF Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility and IVF Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                Difficulty conceiving can be a stressful experience for couples. For many women, discussing fertility concerns with a female specialist can make conversations about reproductive health more comfortable.
              </p>

              <p className="text-gray-700 mb-4">
                A fertility consultation may begin with a detailed medical and reproductive history. Depending on the circumstances, the doctor may recommend appropriate investigations to understand possible factors affecting conception.
              </p>

              <p className="text-gray-700 mb-4">
                Fertility-related consultation may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Evaluation of infertility</li>
                <li>Ovulation-related concerns</li>
                <li>PCOS-related fertility problems</li>
                <li>Previous pregnancy loss</li>
                <li>Endometriosis-related fertility concerns</li>
                <li>Reproductive health assessment</li>
                <li>Fertility treatment planning</li>
                <li>IVF-related treatment guidance</li>
              </ul>

              <p className="text-gray-700">
                Treatment options vary according to the patient's age, medical history, reproductive health, investigation results, and fertility goals. Women searching for a Female Gynaecologist in Moradabad for fertility consultation can discuss their concerns openly and understand which evaluation or treatment approach may be appropriate for them.
              </p>
            </div>

            {/* Section 7 — Laparoscopic Gynaecological Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Gynaecological Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery is a minimally invasive approach used for selected gynaecological conditions. Women may require surgical consultation when conditions such as ovarian cysts, fibroids, endometriosis, or certain pelvic problems need further treatment.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the diagnosis, laparoscopic procedures may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Laparoscopic cystectomy</li>
                <li>Laparoscopic myomectomy</li>
                <li>Laparoscopic hysterectomy</li>
                <li>Endometriosis surgery</li>
                <li>Laparoscopic sterilization</li>
                <li>Selected pelvic organ prolapse procedures</li>
              </ul>

              <p className="text-gray-700">
                The suitability of laparoscopic surgery depends on the patient's condition and clinical assessment. A doctor may discuss the expected benefits, limitations, risks, recovery, and alternative treatment options before surgery.
              </p>
            </div>

            {/* Section 8 — Treatment for Fibroids and Ovarian Cysts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment for Fibroids and Ovarian Cysts
              </h2>

              <p className="text-gray-700">
                Fibroids are common growths that develop in or around the uterus. Some women have no symptoms, while others may experience heavy periods, pelvic discomfort, pressure, or fertility-related concerns. Ovarian cysts can also occur for different reasons. Some may require observation and follow-up, while others may require medical or surgical treatment. A proper evaluation helps determine the appropriate approach. If you have been diagnosed with a fibroid or ovarian cyst, or if you experience persistent pelvic symptoms, consultation with a gynaecologist can help you understand the condition and available treatment options.
              </p>
            </div>

            {/* Section 9 — Endometriosis and Pelvic Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Endometriosis and Pelvic Pain
              </h2>

              <p className="text-gray-700">
                Endometriosis can be associated with symptoms such as painful periods, chronic pelvic pain, discomfort during intercourse, and fertility difficulties. Persistent pelvic pain should not automatically be considered a normal part of menstruation. A gynaecological evaluation can help identify possible causes of pelvic pain and determine whether further investigation or treatment is required. For selected patients, surgical management may be considered after appropriate assessment.
              </p>
            </div>

            {/* Section 10 — PCOS and Menstrual Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                PCOS and Menstrual Health
              </h2>

              <p className="text-gray-700">
                Polycystic ovary syndrome, commonly known as PCOS, can affect menstrual cycles and ovulation. Some women may also experience acne, changes in body weight, excess hair growth, or fertility-related concerns. Menstrual problems can have many different causes. Irregular periods, heavy periods, prolonged bleeding, or severe menstrual pain may require medical evaluation. A Female Gynaecologist in Moradabad can assess your symptoms, medical history, and reproductive goals before recommending appropriate investigations or treatment. Treatment should be personalized because the symptoms and healthcare needs of every woman are different.
              </p>
            </div>

            {/* Section 11 — Hysteroscopy and Gynaecological Procedures */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Hysteroscopy and Gynaecological Procedures
              </h2>

              <p className="text-gray-700">
                Hysteroscopy is a procedure that allows the inside of the uterus to be examined using a specialized instrument. It may be used for selected uterine conditions and can also be used for certain treatments. Depending on the clinical situation, hysteroscopic procedures may be considered for conditions such as uterine polyps. Whether hysteroscopy is required depends on symptoms, examination findings, imaging results, and the doctor's assessment.
              </p>
            </div>

            {/* Section 12 — When Should You Consult */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Consult a Female Gynaecologist?
              </h2>

              <p className="text-gray-700 mb-4">
                You do not always need to wait for symptoms to become severe before seeking medical advice.
              </p>

              <p className="text-gray-700 mb-4">
                Consider consulting a gynaecologist if you experience:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Irregular periods</li>
                <li>Very heavy menstrual bleeding</li>
                <li>Severe period pain</li>
                <li>Persistent pelvic pain</li>
                <li>Unusual vaginal symptoms</li>
                <li>Difficulty conceiving</li>
                <li>Repeated pregnancy loss</li>
                <li>Symptoms associated with PCOS</li>
                <li>A diagnosed fibroid</li>
                <li>An ovarian cyst</li>
                <li>Suspected endometriosis</li>
                <li>Pregnancy-related concerns</li>
                <li>Menopause or perimenopause-related symptoms</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Timely evaluation can help identify the possible cause of persistent symptoms and allow appropriate treatment planning.
              </p>
            </div>

            {/* Section 13 — What to Expect During Your First Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your First Consultation
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Medical History
                  </h3>
                  <p className="text-gray-700">
                    The doctor may ask about your current symptoms, menstrual cycle, previous pregnancies, medical conditions, medications, and previous treatments.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Discussion of Symptoms
                  </h3>
                  <p className="text-gray-700">
                    You can explain when your symptoms started, how frequently they occur, and whether they affect your daily activities.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Examination When Required
                  </h3>
                  <p className="text-gray-700">
                    A physical examination may be recommended when clinically necessary. The doctor should explain the purpose of any examination before proceeding.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Diagnostic Tests
                  </h3>
                  <p className="text-gray-700">
                    Depending on your symptoms, the doctor may recommend investigations such as ultrasound, blood tests, or other diagnostic procedures.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Treatment Discussion
                  </h3>
                  <p className="text-gray-700">
                    Once the available information has been reviewed, the doctor can explain possible treatment options and answer your questions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Follow-Up
                  </h3>
                  <p className="text-gray-700">
                    Some conditions require monitoring or follow-up appointments. Your doctor can explain when you should return and what symptoms should be monitored.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 14 — How to Prepare for Your Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for Your Gynaecology Appointment
              </h2>

              <p className="text-gray-700 mb-4">
                Preparing a few details before your appointment can make the consultation more useful.
              </p>

              <p className="text-gray-700 mb-4">
                You can:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Bring previous medical reports</li>
                <li>Carry ultrasound or scan reports</li>
                <li>Bring previous prescriptions</li>
                <li>Note your menstrual cycle dates</li>
                <li>Write down your current symptoms</li>
                <li>Make a list of medicines you take</li>
                <li>Note any previous surgeries</li>
                <li>Prepare questions you want to ask</li>
              </ul>

              <p className="text-gray-700">
                Do not hesitate to discuss sensitive symptoms. Accurate information helps your doctor understand your situation more clearly.
              </p>
            </div>

            {/* Section 15 — Why Empathy Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Empathy Matters in Women's Healthcare
              </h2>

              <p className="text-gray-700 mb-4">
                Medical expertise is important, but communication and empathy also contribute to a positive healthcare experience.
              </p>

              <p className="text-gray-700 mb-4">
                Women may hesitate to discuss fertility problems, menstrual symptoms, sexual health concerns, pregnancy complications, or other personal issues.
              </p>

              <p className="text-gray-700 mb-4">
                A comfortable consultation environment can make it easier to communicate openly. A patient-focused approach can help women:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ask questions without unnecessary hesitation</li>
                <li>Understand their diagnosis</li>
                <li>Discuss treatment options</li>
                <li>Express concerns about procedures</li>
                <li>Understand follow-up requirements</li>
                <li>Participate more confidently in healthcare decisions</li>
              </ul>
            </div>

            {/* Section 16 — Why Choose Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Pachauri as Your Female Gynaecologist in Moradabad?
              </h2>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri provides gynaecological and women's healthcare services in Moradabad. Her areas of care include pregnancy, fertility, IVF-related treatment, and laparoscopic gynaecological procedures. Women looking for a Female Gynaecologist in Moradabad can consult her for concerns related to menstrual health, pregnancy, fertility, PCOS, fibroids, ovarian cysts, endometriosis, and other gynaecological conditions. Her approach focuses on understanding each patient's medical requirements and discussing suitable treatment options according to individual circumstances.
              </p>
            </div>

            {/* Section 17 — Building a Long-Term Relationship */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Building a Long-Term Doctor-Patient Relationship
              </h2>

              <p className="text-gray-700 mb-4">
                Women's healthcare is often not limited to a single appointment. Pregnancy requires regular monitoring, fertility treatment may involve multiple consultations, and chronic gynaecological conditions may require continued follow-up.
              </p>

              <p className="text-gray-700 mb-4">
                Developing a long-term relationship with a trusted gynaecologist can make it easier to discuss changes in symptoms and maintain continuity of care.
              </p>

              <p className="text-gray-700 mb-4">
                Regular follow-up can be particularly useful for women managing:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>PCOS</li>
                <li>Menstrual disorders</li>
                <li>Fertility concerns</li>
                <li>Pregnancy</li>
                <li>Menopause-related symptoms</li>
                <li>Fibroids</li>
                <li>Ovarian cysts</li>
                <li>Endometriosis</li>
              </ul>
            </div>

            {/* Section 18 — Questions to Ask Your Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Your Female Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                During your appointment, consider asking:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>What could be causing my symptoms?</li>
                <li>Do I need any diagnostic tests?</li>
                <li>What treatment options are available?</li>
                <li>Are there non-surgical treatment options?</li>
                <li>Would surgery be necessary in my case?</li>
                <li>How long might treatment take?</li>
                <li>What should I expect during recovery?</li>
                <li>When should I return for follow-up?</li>
                <li>Could my condition affect fertility or pregnancy?</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Asking questions helps you understand your diagnosis and participate in decisions about your healthcare.
              </p>
            </div>

            {/* Section 19 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact a Female Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                If you are searching for a Female Gynaecologist in Moradabad for pregnancy care, fertility consultation, menstrual problems, PCOS, IVF-related treatment, or gynaecological surgery, you can contact Dr. Priyanka Pachauri for consultation.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Pachauri</p>
                      <p className="text-black">
                        A2, Near Old Roadways, Gandhi Nagar,
                        Moradabad, Uttar Pradesh – 244001
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
            </div>

            {/* Section 20 — FAQs */}
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