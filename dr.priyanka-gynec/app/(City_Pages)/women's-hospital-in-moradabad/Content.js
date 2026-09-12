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

export default function WomensHospitalMoradabad() {
  const faqs = [
    {
      q: "Which is a good Women's Hospital in Moradabad?",
      a: "The right women's healthcare provider depends on your specific medical requirement. Patients should consider the doctor's experience, treatment areas, hospital association, accessibility, and the type of care they need.",
    },
    {
      q: "What services can I get from a women's healthcare specialist?",
      a: "Women's healthcare may include pregnancy and antenatal care, menstrual disorder treatment, PCOS management, infertility consultation, treatment for fibroids and ovarian cysts, endometriosis management, and selected gynaecological procedures.",
    },
    {
      q: "Can I consult a gynaecologist for irregular periods?",
      a: "Yes. Persistent irregular periods can have several possible causes, including hormonal conditions, PCOS, thyroid-related issues, stress, changes in weight, and other medical conditions. A gynaecological consultation can help determine whether further evaluation is required.",
    },
    {
      q: "When should I consult a doctor for heavy periods?",
      a: "If your periods are unusually heavy, prolonged, interfere with daily activities, or are associated with weakness, dizziness, severe pain, or other concerning symptoms, medical evaluation is advisable.",
    },
    {
      q: "Can a gynaecologist help with infertility?",
      a: "Yes. A gynaecologist with fertility experience can evaluate reproductive health and recommend appropriate investigations or fertility treatment depending on the individual circumstances.",
    },
    {
      q: "Is laparoscopic surgery suitable for every patient?",
      a: "No. Laparoscopic surgery is not suitable for every condition or every patient. The appropriate surgical approach depends on the diagnosis, medical history, previous surgeries, and clinical assessment.",
    },
    {
      q: "Can PCOS affect pregnancy?",
      a: "PCOS can affect ovulation and may make conception more difficult for some women. However, the effect varies from person to person. Proper evaluation and fertility guidance can help women understand their options.",
    },
    {
      q: "Can I consult a female gynaecologist in Moradabad for pregnancy care?",
      a: "Yes. Women can consult a female gynaecologist for pregnancy planning, antenatal care, pregnancy-related concerns, and other women's health conditions.",
    },
    {
      q: "What should I bring to my first gynaecology appointment?",
      a: "If available, bring previous prescriptions, blood test reports, ultrasound or scan reports, previous pregnancy records, and a list of current medications. Information about your menstrual cycle can also be helpful.",
    },
    {
      q: "How can I book an appointment with Dr. Priyanka Pachauri?",
      a: "You can contact the clinic using the phone number or WhatsApp details provided above to enquire about an appointment and consultation availability.",
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
                Women's Hospital in Moradabad: Complete Care for Pregnancy, Women's Health & Gynaecological Treatment
              </h1>

              <p className="text-gray-700 mb-4">
                Finding the right Women's Hospital in Moradabad is an important decision for women looking for trusted care during pregnancy, fertility treatment, menstrual problems, hormonal conditions, and gynaecological procedures. Women's health needs can change at different stages of life, which is why having access to experienced gynaecological care, proper diagnosis, pregnancy guidance, and surgical treatment can make the healthcare journey more comfortable and informed.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri provides gynaecology and women's healthcare services for women in Moradabad and nearby areas. Her clinical areas include women's health, pregnancy care, infertility, and laparoscopic gynaecological procedures.
              </p>
            </div>

            {/* Section 2 — Why Choose a Women's Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose a Women's Hospital in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Women's healthcare is not limited to pregnancy and childbirth. Women may experience different health concerns throughout their lives, including menstrual disorders, PCOS, hormonal changes, infertility, fibroids, ovarian cysts, endometriosis, pelvic pain, and conditions requiring gynaecological surgery.
              </p>

              <p className="text-gray-700 mb-4">
                A dedicated Women's Hospital in Moradabad or hospital-based women's healthcare service can provide a structured approach to diagnosis, treatment planning, follow-up, and specialist care.
              </p>

              <p className="text-gray-700 mb-4">
                For many patients, the most important factors when choosing a women's healthcare provider include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Experienced gynaecological consultation</li>
                <li>Pregnancy and antenatal care</li>
                <li>Infertility and fertility guidance</li>
                <li>Diagnosis and treatment of menstrual problems</li>
                <li>PCOS and hormonal disorder management</li>
                <li>Evaluation of fibroids and ovarian cysts</li>
                <li>Laparoscopic gynaecological procedures</li>
                <li>Treatment planning based on individual medical needs</li>
                <li>Clear communication about investigations and treatment options</li>
                <li>Convenient access to women's healthcare in Moradabad</li>
              </ul>

              <p className="text-gray-700">
                The right treatment depends on the individual's symptoms, medical history, examination, and investigation results. A consultation allows the doctor to understand the condition before recommending an appropriate treatment approach.
              </p>
            </div>

            {/* Section 3 — Women's Health Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Women's Health Services in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Women's health covers several areas, from routine gynaecological concerns to pregnancy and surgical treatment. At Dr. Priyanka Pachauri's practice, women can seek consultation for a range of common and complex gynaecological concerns.
              </p>
            </div>

            {/* Section 4 — Pregnancy and Antenatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy and Antenatal Care
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnancy requires regular monitoring from the early stages through delivery. Antenatal care helps assess the health of the mother and developing baby while allowing potential concerns to be identified and managed at the appropriate time.
              </p>

              <p className="text-gray-700 mb-4">
                Women planning a pregnancy or who have recently confirmed pregnancy can consult a gynaecologist for guidance regarding:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Early pregnancy care</li>
                <li>Routine antenatal check-ups</li>
                <li>Pregnancy-related symptoms</li>
                <li>Nutrition and lifestyle guidance</li>
                <li>Pregnancy investigations and scans</li>
                <li>High-risk pregnancy assessment</li>
                <li>Fetal growth monitoring</li>
                <li>Preparation for delivery</li>
                <li>Postnatal follow-up</li>
              </ul>

              <p className="text-gray-700">
                Every pregnancy is different. Women with previous pregnancy complications, medical conditions, recurrent pregnancy loss, or other risk factors may require closer monitoring based on their individual situation.
              </p>
            </div>

            {/* Section 5 — High-Risk Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Care
              </h2>

              <p className="text-gray-700">
                Some pregnancies require additional medical attention because of maternal health conditions, previous pregnancy complications, multiple pregnancy, age-related factors, or other identified risks. High-risk pregnancy care focuses on identifying potential concerns early and developing an appropriate monitoring and treatment plan. Women who have been advised that their pregnancy is high-risk should discuss their condition with an experienced obstetrician and follow the recommended schedule of consultations, investigations, and monitoring. The aim is not to create unnecessary anxiety but to ensure that appropriate medical attention is available when required.
              </p>
            </div>

            {/* Section 6 — Gynaecological Treatment for Women */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gynaecological Treatment for Women
              </h2>

              <p className="text-gray-700 mb-4">
                A Women's Hospital in Moradabad should also address health concerns that occur outside pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                Women may seek consultation for symptoms such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Irregular periods</li>
                <li>Heavy menstrual bleeding</li>
                <li>Painful periods</li>
                <li>Missed periods</li>
                <li>Pelvic pain</li>
                <li>Vaginal discharge</li>
                <li>Hormonal problems</li>
                <li>PCOS-related symptoms</li>
                <li>Fibroids</li>
                <li>Ovarian cysts</li>
                <li>Endometriosis</li>
                <li>Uterine polyps</li>
                <li>Menopausal symptoms</li>
              </ul>

              <p className="text-gray-700">
                Persistent or unusual symptoms should not simply be ignored. A gynaecological consultation can help identify the possible cause and determine whether further examination, blood tests, ultrasound, or another investigation is required.
              </p>
            </div>

            {/* Section 7 — PCOS and Menstrual Disorder Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                PCOS and Menstrual Disorder Treatment in Moradabad
              </h2>

              <p className="text-gray-700">
                Polycystic ovary syndrome, commonly known as PCOS, can affect menstrual cycles, ovulation, weight, skin, hair growth, and fertility. However, symptoms and severity can vary significantly from one woman to another. Similarly, irregular periods, heavy periods, or prolonged menstrual bleeding can have several possible causes. Treatment should therefore be based on the individual's symptoms, age, reproductive goals, medical history, and diagnostic findings. Women experiencing persistent menstrual irregularities can consult a female gynaecologist in Moradabad for evaluation and personalized treatment guidance.
              </p>
            </div>

            {/* Section 8 — Infertility and Fertility Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility and Fertility Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                Difficulty conceiving can be emotionally and physically challenging. Infertility may involve female factors, male factors, combined factors, or sometimes unexplained causes.
              </p>

              <p className="text-gray-700 mb-4">
                A fertility consultation generally begins with understanding the couple's medical history and reproductive history. Depending on the situation, the doctor may recommend appropriate investigations before deciding on further treatment.
              </p>

              <p className="text-gray-700 mb-4">
                Fertility-related consultation may be considered for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Difficulty conceiving naturally</li>
                <li>Irregular ovulation</li>
                <li>PCOS-related fertility concerns</li>
                <li>Previous pregnancy loss</li>
                <li>Tubal-related concerns</li>
                <li>Endometriosis-related fertility issues</li>
                <li>Age-related fertility concerns</li>
                <li>Recurrent infertility evaluation</li>
              </ul>

              <p className="text-gray-700">
                Patients may also be guided regarding advanced fertility treatment when clinically appropriate.
              </p>
            </div>

            {/* Section 9 — Laparoscopic Gynaecological Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Gynaecological Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopy is a minimally invasive surgical approach that may be used for selected gynaecological conditions.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the diagnosis, laparoscopic procedures may be considered for conditions such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Ovarian cysts</li>
                <li>Fibroids</li>
                <li>Endometriosis</li>
                <li>Certain pelvic conditions</li>
                <li>Selected uterine conditions</li>
                <li>Other gynaecological problems requiring surgery</li>
              </ul>

              <p className="text-gray-700">
                Procedures such as laparoscopic cystectomy or laparoscopic myomectomy may be considered when appropriate after medical evaluation. The suitability of laparoscopic surgery depends on factors such as the patient's condition, previous surgeries, medical history, size and location of the problem, and overall clinical assessment.
              </p>
            </div>

            {/* Section 10 — Treatment for Fibroids, Ovarian Cysts and Endometriosis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment for Fibroids, Ovarian Cysts and Endometriosis
              </h2>

              <p className="text-gray-700">
                Fibroids are non-cancerous growths that can develop in or around the uterus. Some women may have no symptoms, while others may experience heavy periods, pelvic pressure, pain, or fertility-related concerns. Ovarian cysts are also common and can have different causes. Some cysts may resolve on their own, while others require monitoring or treatment depending on their size, appearance, symptoms, and other clinical factors. Endometriosis is another condition that can cause pelvic pain, painful periods, and fertility difficulties. A proper diagnosis is important because treatment varies from patient to patient. Depending on the condition, management may include observation, medication, follow-up investigations, or surgical treatment.
              </p>
            </div>

            {/* Section 11 — Why Choose Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Women's Healthcare in Moradabad?
              </h2>

              <p className="text-gray-700">
                Choosing a gynaecologist is a personal decision, particularly when the treatment involves pregnancy, fertility, menstrual health, or surgery. Dr. Priyanka Pachauri is a gynaecology consultant associated with Ujala Cygnus BrightStar Hospital in Moradabad. Her professional profile includes experience in gynaecology and additional training in areas including minimally invasive surgery and infertility. Patients looking for a gynaecologist in Moradabad can discuss their symptoms, diagnosis, pregnancy concerns, fertility goals, or surgical requirements during consultation. The focus should always be on understanding the patient's condition and selecting treatment according to individual medical needs rather than using the same approach for every patient.
              </p>
            </div>

            {/* Section 12 — When Should You Visit a Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Visit a Gynaecologist?
              </h2>

              <p className="text-gray-700 mb-4">
                Many women delay consultation because they assume symptoms such as irregular periods or pelvic discomfort are normal. While some symptoms may have simple causes, persistent or severe symptoms should be evaluated.
              </p>

              <p className="text-gray-700 mb-4">
                Consider consulting a gynaecologist if you experience:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Very heavy menstrual bleeding</li>
                <li>Periods that remain irregular for several months</li>
                <li>Severe menstrual pain</li>
                <li>Persistent pelvic pain</li>
                <li>Bleeding between periods</li>
                <li>Bleeding after intercourse</li>
                <li>Unusual vaginal discharge</li>
                <li>Difficulty becoming pregnant</li>
                <li>Repeated pregnancy loss</li>
                <li>Symptoms associated with PCOS</li>
                <li>A diagnosed ovarian cyst or fibroid</li>
                <li>Persistent symptoms during menopause</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Early evaluation can help identify the possible cause and provide appropriate treatment guidance.
              </p>
            </div>

            {/* Section 13 — What to Expect During Your Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Women's Health Consultation
              </h2>

              <p className="text-gray-700">
                Your first appointment does not necessarily mean that you will need a procedure or surgery. During consultation, the doctor may discuss your symptoms, menstrual history, previous pregnancies, medical history, medications, previous surgeries, and reproductive goals. Depending on the concern, the doctor may recommend an examination, blood tests, ultrasound, or other investigations. After reviewing the available information, the doctor can explain the likely diagnosis and discuss suitable treatment options. For pregnancy and fertility patients, keeping previous medical reports, scan reports, prescriptions, and relevant test results can make the consultation more useful.
              </p>
            </div>

            {/* Section 14 — Women's Hospital for Personalized Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Women's Hospital in Moradabad for Personalized Care
              </h2>

              <p className="text-gray-700">
                Women's healthcare should be based on the individual rather than a one-size-fits-all treatment plan. A woman visiting a Women's Hospital in Moradabad may have a completely different concern from another patient. One woman may require pregnancy care, while another may need treatment for PCOS, heavy periods, fibroids, infertility, or an ovarian cyst. That is why proper consultation and diagnosis are important before deciding on treatment. For women in Moradabad and nearby areas, having access to experienced gynaecological consultation can make it easier to seek timely medical advice for both routine and complex women's health concerns.
              </p>
            </div>

            {/* Section 15 — Book a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Book a Consultation with Dr. Priyanka Pachauri
              </h2>

              <p className="text-gray-700 mb-4">
                If you are looking for a Women's Hospital in Moradabad, female gynaecologist, pregnancy care specialist, fertility consultation, or gynaecological treatment, you can contact Dr. Priyanka Pachauri for an appointment.
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

            {/* Section 16 — FAQs */}
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