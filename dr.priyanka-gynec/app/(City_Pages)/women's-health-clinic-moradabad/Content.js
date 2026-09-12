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

export default function WomensHealthClinicMoradabad() {
  const faqs = [
    {
      q: "Where can I find a Women's Health Clinic in Moradabad?",
      a: "Dr. Priyanka Pachauri provides women's healthcare and gynaecological consultation in Moradabad. The clinic address is A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "What problems can a women's health clinic treat?",
      a: "Women's health consultations can cover menstrual disorders, PCOS, hormonal concerns, infertility, pregnancy-related care, fibroids, ovarian cysts, endometriosis, pelvic pain, and other gynaecological conditions.",
    },
    {
      q: "Can I consult for PCOS and irregular periods?",
      a: "Yes. PCOS, irregular periods, heavy periods, and other menstrual or hormonal concerns can be discussed during a gynaecological consultation.",
    },
    {
      q: "Can I visit for pregnancy care?",
      a: "Yes. Pregnancy and antenatal care can be discussed with the gynaecologist, including routine pregnancy monitoring and concerns that may require closer supervision.",
    },
    {
      q: "Is infertility consultation available?",
      a: "Yes. Women and couples experiencing difficulty conceiving can seek fertility evaluation and discuss appropriate next steps.",
    },
    {
      q: "Is laparoscopic gynaecological treatment available?",
      a: "Laparoscopic surgery may be considered for selected gynaecological conditions such as ovarian cysts, fibroids, and endometriosis, depending on individual assessment.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can call +91 90797 65578 or contact the clinic on WhatsApp at +91 8979670705 for appointment information.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic address is A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
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
                Women's Health Clinic in Moradabad for Complete Women's Healthcare
              </h1>

              <p className="text-gray-700 mb-4">
                Finding the right Women's Health Clinic in Moradabad is an important step for women seeking reliable care for menstrual problems, PCOS, pregnancy, infertility, hormonal concerns, and other gynaecological conditions. Women's health needs can change throughout life, which is why having access to experienced medical care and personalised guidance can make every stage easier to manage.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri provides gynaecology, maternity, fertility, and laparoscopic care in Moradabad. Women can seek consultation for routine health concerns as well as conditions that require detailed evaluation, treatment planning, and regular follow-up.
              </p>
            </div>

            {/* Section 2 — Complete Women's Healthcare */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Complete Women's Healthcare in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                A woman's healthcare requirements can vary depending on her age, lifestyle, reproductive goals, pregnancy status, and medical history. A dedicated Women's Health Clinic in Moradabad can provide guidance for both common and complex women's health concerns.
              </p>

              <p className="text-gray-700 mb-4">
                Women may consult a gynaecologist for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Irregular or missed periods</li>
                <li>Heavy menstrual bleeding</li>
                <li>Painful periods</li>
                <li>PCOS and hormonal problems</li>
                <li>Ovarian cysts</li>
                <li>Uterine fibroids</li>
                <li>Endometriosis</li>
                <li>Pelvic pain</li>
                <li>Infertility and difficulty conceiving</li>
                <li>Pregnancy and antenatal care</li>
                <li>High-risk pregnancy</li>
                <li>Menopause-related concerns</li>
                <li>Gynaecological infections</li>
                <li>Abnormal vaginal bleeding</li>
                <li>Conditions requiring laparoscopic surgery</li>
              </ul>

              <p className="text-gray-700">
                The first step is understanding the symptoms and medical history. Depending on the concern, the doctor may recommend an examination, ultrasound, blood tests, or other investigations before deciding on the appropriate treatment.
              </p>
            </div>

            {/* Section 3 — Gynaecologist at a Women's Health Clinic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gynaecologist at a Women's Health Clinic in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                A gynaecologist helps women manage reproductive and hormonal health concerns at different stages of life. Regular consultation can also help identify problems that may otherwise remain unnoticed.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is associated with Ujala Cygnus BrightStar Hospital in Moradabad and provides care related to gynaecology, maternity, infertility, and laparoscopic surgery.
              </p>

              <p className="text-gray-700">
                Women looking for a Women's Health Clinic in Moradabad can consult for concerns ranging from menstrual disorders and PCOS to pregnancy and fertility-related problems. A consultation generally begins with understanding the patient's symptoms, previous medical history, menstrual history, pregnancy history, and current concerns. This helps create a treatment approach suited to the individual patient.
              </p>
            </div>

            {/* Section 4 — Pregnancy and Antenatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy and Antenatal Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnancy is a major stage in a woman's life and requires regular medical monitoring. Antenatal care helps monitor the health of both mother and baby throughout pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                Pregnancy consultations may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Initial pregnancy evaluation</li>
                <li>Regular antenatal checkups</li>
                <li>Monitoring maternal health</li>
                <li>Ultrasound and recommended investigations</li>
                <li>Blood pressure monitoring</li>
                <li>Screening for gestational diabetes</li>
                <li>Monitoring fetal growth</li>
                <li>Guidance regarding nutrition and lifestyle</li>
                <li>Assessment of pregnancy-related symptoms</li>
                <li>Birth and delivery planning</li>
                <li>Postnatal follow-up</li>
              </ul>

              <p className="text-gray-700">
                Women with previous pregnancy complications, multiple pregnancy, advanced maternal age, or other medical concerns may need closer monitoring according to their individual condition. Choosing a convenient Women's Health Clinic in Moradabad can also make regular pregnancy consultations and follow-up easier for women and their families.
              </p>
            </div>

            {/* Section 5 — PCOS and Hormonal Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                PCOS and Hormonal Health
              </h2>

              <p className="text-gray-700 mb-4">
                Polycystic ovary syndrome, commonly known as PCOS, can affect periods, hormones, fertility, skin, weight, and overall wellbeing. Symptoms can vary from one woman to another.
              </p>

              <p className="text-gray-700 mb-4">
                Common concerns associated with PCOS may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Irregular periods</li>
                <li>Missed periods</li>
                <li>Difficulty conceiving</li>
                <li>Excess facial or body hair</li>
                <li>Acne</li>
                <li>Weight-related concerns</li>
                <li>Hormonal imbalance</li>
              </ul>

              <p className="text-gray-700">
                PCOS management depends on the patient's symptoms, medical history, reproductive goals, and overall health. A gynaecological consultation can help determine whether further evaluation, medication, lifestyle changes, or regular monitoring may be appropriate. Women experiencing persistent menstrual or hormonal changes can consult a Women's Health Clinic in Moradabad rather than ignoring symptoms for a long period.
              </p>
            </div>

            {/* Section 6 — Menstrual Problems and Heavy Periods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Menstrual Problems and Heavy Periods
              </h2>

              <p className="text-gray-700 mb-4">
                Changes in menstrual cycles are common, but persistent or severe symptoms should be evaluated by a qualified gynaecologist.
              </p>

              <p className="text-gray-700 mb-4">
                Women may seek medical advice for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Very heavy periods</li>
                <li>Long-lasting periods</li>
                <li>Irregular menstrual cycles</li>
                <li>Severe period pain</li>
                <li>Bleeding between periods</li>
                <li>Missed periods</li>
                <li>Period-related weakness or fatigue</li>
                <li>Sudden changes in the menstrual cycle</li>
              </ul>

              <p className="text-gray-700">
                Heavy or painful periods can have different underlying causes, including fibroids, hormonal changes, endometriosis, ovarian conditions, or other gynaecological problems. A proper evaluation can help identify the possible cause and determine an appropriate treatment plan.
              </p>
            </div>

            {/* Section 7 — Infertility and Fertility Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility and Fertility Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                Difficulty conceiving can be emotionally and physically challenging. Fertility problems can affect either partner, so a detailed evaluation may sometimes involve both individuals.
              </p>

              <p className="text-gray-700 mb-4">
                A fertility consultation may include discussion of:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Menstrual and ovulation history</li>
                <li>Previous pregnancies</li>
                <li>Previous medical or surgical history</li>
                <li>Duration of difficulty conceiving</li>
                <li>Relevant hormonal investigations</li>
                <li>Ovulation monitoring</li>
                <li>Other fertility-related investigations when required</li>
              </ul>

              <p className="text-gray-700">
                Patients searching for fertility or infertility care in Moradabad can discuss their concerns with a gynaecologist and understand which evaluation or treatment steps may be suitable for their situation. The appropriate fertility treatment depends on the underlying cause and the individual circumstances of the couple.
              </p>
            </div>

            {/* Section 8 — Laparoscopic Gynaecological Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Gynaecological Care
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery is a minimally invasive surgical approach that may be used for selected gynaecological conditions.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the patient's diagnosis, laparoscopic treatment may be considered for conditions such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Ovarian cysts</li>
                <li>Fibroids</li>
                <li>Endometriosis</li>
                <li>Other selected gynaecological conditions</li>
              </ul>

              <p className="text-gray-700">
                Compared with some traditional open surgical approaches, laparoscopic procedures generally involve smaller incisions. However, whether laparoscopic surgery is appropriate depends on the patient's condition, medical history, examination, investigations, and surgical assessment. Patients should discuss the expected benefits, risks, recovery period, and available alternatives with their doctor before undergoing any procedure.
              </p>
            </div>

            {/* Section 9 — Fibroids and Ovarian Cysts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fibroids and Ovarian Cysts
              </h2>

              <p className="text-gray-700 mb-4">
                Fibroids are non-cancerous growths that develop in or around the uterus. Some women may have no symptoms, while others may experience heavy periods, pelvic pressure, abdominal discomfort, or fertility-related concerns.
              </p>

              <p className="text-gray-700">
                Ovarian cysts are fluid-filled or other types of growths that can develop in or around the ovaries. Many cysts may resolve naturally, while some require monitoring or further treatment. A gynaecological evaluation can help determine the nature of the condition and whether observation, medication, further investigation, or surgery may be appropriate.
              </p>
            </div>

            {/* Section 10 — Endometriosis and Pelvic Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Endometriosis and Pelvic Pain
              </h2>

              <p className="text-gray-700">
                Endometriosis can cause symptoms such as painful periods, pelvic pain, pain during intercourse, and sometimes difficulty conceiving. Persistent pelvic pain should not automatically be considered a normal part of menstruation. A detailed medical history and appropriate evaluation can help identify possible causes. Women experiencing recurring or severe pelvic pain can seek consultation at a Women's Health Clinic in Moradabad for further assessment and treatment guidance.
              </p>
            </div>

            {/* Section 11 — High-Risk Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Care
              </h2>

              <p className="text-gray-700">
                Some pregnancies require closer monitoring because of maternal health conditions, previous pregnancy complications, multiple pregnancy, or other risk factors. High-risk pregnancy care may involve more frequent consultations, additional investigations, closer monitoring, and coordination with other medical specialists when required. The exact monitoring plan depends on the mother's health, pregnancy history, gestational age, and individual risk factors.
              </p>
            </div>

            {/* Section 12 — Women's Health Through Different Stages of Life */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Women's Health Through Different Stages of Life
              </h2>

              <p className="text-gray-700 mb-4">
                Women's healthcare does not end after pregnancy. Medical needs can change during adolescence, reproductive years, pregnancy, and menopause.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Adolescent and menstrual health:
                  </h3>
                  <p className="text-gray-700">
                    Irregular periods, painful menstruation, heavy bleeding, and other menstrual concerns.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Reproductive health:
                  </h3>
                  <p className="text-gray-700">
                    PCOS, hormonal concerns, fertility planning, and gynaecological conditions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pregnancy:
                  </h3>
                  <p className="text-gray-700">
                    Antenatal monitoring, pregnancy-related concerns, and postnatal care.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gynaecological health:
                  </h3>
                  <p className="text-gray-700">
                    Fibroids, ovarian cysts, endometriosis, pelvic pain, and menstrual disorders.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Menopause:
                  </h3>
                  <p className="text-gray-700">
                    Symptoms associated with hormonal changes and the menopausal transition.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                Having a consistent healthcare provider can make it easier to discuss sensitive concerns and maintain continuity of care.
              </p>
            </div>

            {/* Section 13 — When Should You Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Visit a Women's Health Clinic?
              </h2>

              <p className="text-gray-700 mb-4">
                You should consider a gynaecological consultation if you experience persistent or unusual symptoms such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Severe or recurring pelvic pain</li>
                <li>Very heavy menstrual bleeding</li>
                <li>Irregular or missed periods</li>
                <li>Bleeding between periods</li>
                <li>Pain during intercourse</li>
                <li>Difficulty becoming pregnant</li>
                <li>Symptoms associated with PCOS</li>
                <li>Unusual vaginal discharge</li>
                <li>Pregnancy-related concerns</li>
                <li>Menopause-related symptoms</li>
                <li>A known ovarian cyst or fibroid</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Not every symptom indicates a serious condition, but persistent changes are worth discussing with a healthcare professional.
              </p>
            </div>

            {/* Section 14 — What to Expect During Your Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <p className="text-gray-700">
                A first consultation generally begins with a discussion about your symptoms and medical history. Depending on your concern, the doctor may ask about your menstrual cycle, previous pregnancies, medications, previous surgeries, and other relevant medical information. If required, an examination, ultrasound, blood investigation, or other diagnostic test may be recommended. After evaluation, the doctor can explain the likely cause of your symptoms and discuss available treatment or monitoring options. The goal of a consultation is not only to treat symptoms but also to help the patient understand her condition and make informed decisions about her healthcare.
              </p>
            </div>

            {/* Section 15 — Why Choose a Women's Health Clinic in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose a Women's Health Clinic in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                For women living in Moradabad and nearby areas, local access to gynaecological care can make regular consultations and follow-up more convenient.
              </p>

              <p className="text-gray-700 mb-4">
                A good women's healthcare service should focus on:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Individualised medical evaluation</li>
                <li>Clear communication</li>
                <li>Appropriate diagnostic investigations</li>
                <li>Personalised treatment planning</li>
                <li>Pregnancy and reproductive healthcare</li>
                <li>Follow-up when required</li>
                <li>Privacy and comfort during consultation</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Women's health concerns can sometimes be difficult to discuss. A comfortable consultation environment can help patients communicate their symptoms openly and receive appropriate medical guidance.
              </p>
            </div>

            {/* Section 16 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Women's Health Clinic in Moradabad – Dr. Priyanka Pachauri
              </h2>

              <p className="text-gray-700">
                If you are searching for a Women's Health Clinic in Moradabad for gynaecological consultation, pregnancy care, PCOS, menstrual problems, infertility evaluation, or laparoscopic gynaecological care, Dr. Priyanka Pachauri provides women's healthcare services in Moradabad. Patients can discuss their symptoms, medical history, reproductive goals, pregnancy concerns, or other women's health issues during consultation.
              </p>
            </div>

            {/* Section 17 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact & Clinic Address
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

            {/* Section 18 — FAQs */}
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