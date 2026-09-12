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

export default function BestGynaecologistMoradabad() {
  const faqs = [
    {
      q: "Who is a good gynaecologist in Moradabad for women's health problems?",
      a: "The right gynaecologist depends on your specific health concern, required treatment and the doctor's relevant qualifications and experience. Dr. Priyanka Pachauri provides gynaecology, obstetric, infertility and minimally invasive surgical care in Moradabad.",
    },
    {
      q: "Does Dr. Priyanka Pachauri provide pregnancy care?",
      a: "Yes. Dr. Priyanka provides antenatal and obstetric consultation, including monitoring of routine and high-risk pregnancies according to the patient's clinical needs.",
    },
    {
      q: "Does she treat PCOS and irregular periods?",
      a: "Yes. Women experiencing irregular periods, PCOS-related symptoms, heavy bleeding or other menstrual concerns can consult Dr. Priyanka for evaluation and treatment planning.",
    },
    {
      q: "Does Dr. Priyanka provide infertility and IVF treatment?",
      a: "Yes. Fertility care includes fertility evaluation and treatment planning, with options such as ovulation induction, IUI, IVF and ICSI where clinically appropriate.",
    },
    {
      q: "Does she perform laparoscopic surgery?",
      a: "Dr. Priyanka has expertise in minimally invasive laparoscopic gynaecological procedures. Laparoscopic treatment may be considered for conditions such as fibroids, ovarian cysts and endometriosis depending on the individual case.",
    },
    {
      q: "Can I consult Dr. Priyanka for fibroids or ovarian cysts?",
      a: "Yes. Fibroids and ovarian cysts can be evaluated during a gynaecological consultation. Treatment may range from monitoring to medication or surgery depending on the diagnosis.",
    },
    {
      q: "When should I see a gynaecologist for period problems?",
      a: "You should consider consultation if your periods are persistently irregular, unusually heavy, very painful, absent, or associated with pelvic pain or other concerning symptoms.",
    },
    {
      q: "Where is Dr. Priyanka Pachauri's clinic in Moradabad?",
      a: "The listed clinic address is A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001. Patients should confirm appointment availability and location details before visiting.",
    },
    {
      q: "Can patients from Rampur, Amroha and Sambhal consult Dr. Priyanka?",
      a: "Yes. Patients from Moradabad and nearby districts can contact the clinic for consultation and treatment-related information.",
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
                Best Gynaecologist in Moradabad – Dr. Priyanka Pachauri
              </h1>

              <p className="text-gray-700 mb-4">
                Finding the best gynaecologist in Moradabad is an important decision when you need care for pregnancy, menstrual problems, infertility, PCOS, fibroids, ovarian cysts, endometriosis, or other women's health concerns. The right gynaecologist should provide accurate diagnosis, explain treatment options clearly, and recommend care according to your individual health needs.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri is a Consultant Obstetrician, Gynaecologist and Infertility Specialist in Moradabad, providing comprehensive women's healthcare including gynaecology, pregnancy care, infertility treatment and minimally invasive laparoscopic procedures.
              </p>
            </div>

            {/* Section 2 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides specialist care for women at different stages of life, from menstrual and hormonal concerns to pregnancy, fertility treatment and gynaecological surgery.
              </p>

              <p className="text-gray-700">
                Her approach begins with understanding the patient's symptoms, medical history and treatment goals. Depending on the condition, consultation may include clinical examination, ultrasound, laboratory investigations or other diagnostic tests before a treatment plan is recommended.
              </p>
            </div>

            {/* Section 3 — Qualifications & Professional Expertise */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Qualifications & Professional Expertise
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri's professional background includes:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>MBBS from Gajra Raja Medical College (GRMC), Gwalior</li>
                <li>MS in Obstetrics & Gynaecology from Sardar Patel Medical College (SPMC), Bikaner</li>
                <li>Fellowship in Minimal Access Surgery (FMAS)</li>
                <li>Fellowship in Laparoscopic Surgery</li>
                <li>Fellowship in Advanced Infertility</li>
                <li>Consultant, Gynaecology at Ujala Cygnus BrightStar Hospital, Moradabad</li>
                <li>Clinical association with Shree Advanced Urogynae Clinic</li>
              </ul>

              <p className="text-gray-700">
                Patients looking for a female gynaecologist in Moradabad can consult Dr. Priyanka for general gynaecological care, pregnancy-related concerns, fertility evaluation and selected minimally invasive procedures.
              </p>
            </div>

            {/* Section 4 — Women's Healthcare in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Women's Healthcare in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Women's health concerns can vary significantly from one patient to another. Period-related symptoms, hormonal changes, pelvic pain, fertility problems and pregnancy complications may require different investigations and treatment approaches.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides consultation for a range of women's health concerns, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Irregular or painful periods</li>
                <li>Heavy menstrual bleeding</li>
                <li>PCOS and hormonal concerns</li>
                <li>Fibroids</li>
                <li>Ovarian cysts</li>
                <li>Endometriosis</li>
                <li>Uterine polyps</li>
                <li>Pelvic pain</li>
                <li>Infertility</li>
                <li>Recurrent pregnancy loss</li>
                <li>Pregnancy-related concerns</li>
                <li>High-risk pregnancy</li>
                <li>Pelvic organ prolapse</li>
                <li>Gynaecological conditions requiring laparoscopic treatment</li>
              </ul>

              <p className="text-gray-700">
                The goal is to identify the underlying cause of symptoms and select treatment according to the patient's condition rather than following the same approach for every patient.
              </p>
            </div>

            {/* Section 5 — Pregnancy & Antenatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy & Antenatal Care
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnancy requires regular monitoring because the health needs of the mother and baby can change throughout the pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides pregnancy and antenatal care in Moradabad, including routine pregnancy consultations, monitoring and management of pregnancy-related concerns.
              </p>

              <p className="text-gray-700 mb-4">
                Antenatal care may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Initial pregnancy assessment</li>
                <li>Regular antenatal consultations</li>
                <li>Maternal health monitoring</li>
                <li>Fetal growth assessment</li>
                <li>Pregnancy screening</li>
                <li>Monitoring of blood pressure and blood sugar</li>
                <li>Birth planning</li>
                <li>Identification of pregnancy complications</li>
                <li>Postnatal guidance</li>
              </ul>

              <p className="text-gray-700">
                Women who are planning a pregnancy can also seek preconception counselling to discuss existing medical conditions, previous pregnancy history, medications and other factors that may affect pregnancy.
              </p>
            </div>

            {/* Section 6 — High-Risk Pregnancy Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Management
              </h2>

              <p className="text-gray-700 mb-4">
                Some pregnancies require closer monitoring because of maternal health conditions, previous pregnancy complications or problems that develop during pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides obstetric consultation for high-risk pregnancy conditions such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>High blood pressure during pregnancy</li>
                <li>Preeclampsia</li>
                <li>Gestational diabetes</li>
                <li>Fetal growth concerns</li>
                <li>Previous pregnancy complications</li>
                <li>Recurrent pregnancy loss</li>
                <li>Other pregnancy conditions requiring specialist supervision</li>
              </ul>

              <p className="text-gray-700">
                Early identification and regular monitoring can help doctors determine when additional investigations, specialist care or closer follow-up may be required.
              </p>
            </div>

            {/* Section 7 — Infertility & IVF Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility & IVF Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Difficulty conceiving can affect both partners and may have several possible causes. A proper fertility evaluation is therefore important before deciding on treatment.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides fertility consultation and treatment planning for couples experiencing difficulty conceiving.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the diagnosis, fertility treatment may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Fertility evaluation</li>
                <li>Ovulation assessment</li>
                <li>Ovulation induction</li>
                <li>IUI</li>
                <li>IVF</li>
                <li>ICSI</li>
                <li>Evaluation of female reproductive factors</li>
                <li>Evaluation of male fertility factors</li>
                <li>Fertility counselling</li>
                <li>Treatment planning after previous unsuccessful fertility treatment</li>
              </ul>

              <p className="text-gray-700">
                Fertility treatment is individualized according to factors such as age, medical history, ovarian reserve, ovulation, sperm parameters, previous treatment and other relevant investigations. Couples from Moradabad, Rampur, Amroha, Sambhal and nearby areas may consult for fertility evaluation and treatment planning.
              </p>
            </div>

            {/* Section 8 — PCOS & Menstrual Problems */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                PCOS & Menstrual Problems
              </h2>

              <p className="text-gray-700 mb-4">
                Irregular periods are one of the common reasons women consult a gynaecologist. Changes in menstrual cycles can have several causes, including PCOS, hormonal disorders, thyroid-related problems, stress, changes in weight and other medical conditions.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides consultation for concerns such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Irregular periods</li>
                <li>Delayed periods</li>
                <li>Heavy periods</li>
                <li>Painful periods</li>
                <li>Absent periods</li>
                <li>PCOS-related symptoms</li>
                <li>Hormonal concerns</li>
                <li>Abnormal uterine bleeding</li>
              </ul>

              <p className="text-gray-700">
                Treatment depends on the underlying cause, age, symptoms and reproductive goals of the patient.
              </p>
            </div>

            {/* Section 9 — Fibroid & Ovarian Cyst Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fibroid & Ovarian Cyst Treatment
              </h2>

              <p className="text-gray-700">
                Fibroids and ovarian cysts are common gynaecological conditions, but their management depends on their size, location, symptoms and other clinical factors. A patient with fibroids or ovarian cysts may require observation, medication, repeat imaging or surgery depending on the individual case. Dr. Priyanka provides evaluation and treatment planning for uterine fibroids, symptomatic fibroids, ovarian cysts, complex ovarian cysts, and pelvic pain associated with gynaecological conditions. When surgery is indicated, minimally invasive laparoscopic procedures may be considered where clinically appropriate.
              </p>
            </div>

            {/* Section 10 — Laparoscopic Gynaecological Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Gynaecological Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery uses small abdominal incisions instead of the larger incision generally associated with open surgery.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka has a focus on minimally invasive gynaecological procedures for selected conditions.
              </p>

              <p className="text-gray-700 mb-4">
                Laparoscopic procedures may be considered for conditions such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Uterine fibroids</li>
                <li>Ovarian cysts</li>
                <li>Endometriosis</li>
                <li>Selected cases requiring hysterectomy</li>
                <li>Other gynaecological conditions where minimally invasive surgery is appropriate</li>
              </ul>

              <p className="text-gray-700">
                The suitability of laparoscopic surgery depends on the patient's diagnosis, previous surgeries, medical history and overall clinical condition.
              </p>
            </div>

            {/* Section 11 — Endometriosis & Pelvic Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Endometriosis & Pelvic Pain
              </h2>

              <p className="text-gray-700">
                Endometriosis can cause painful periods, chronic pelvic pain, pain during intercourse and, in some women, difficulty conceiving. Because symptoms can overlap with other conditions, proper evaluation is important. Dr. Priyanka provides consultation for suspected or diagnosed endometriosis and related concerns, including severe period pain, chronic pelvic pain, endometriotic cysts, infertility associated with endometriosis, and pelvic adhesions. Where surgery is required, laparoscopic management may be considered based on the individual patient's condition.
              </p>
            </div>

            {/* Section 12 — Hysteroscopy & Uterine Polyps */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Hysteroscopy & Uterine Polyps
              </h2>

              <p className="text-gray-700">
                Hysteroscopy allows the inside of the uterus to be examined using a specialized camera. It may be used during the evaluation or treatment of conditions such as abnormal uterine bleeding, uterine polyps, some causes of infertility, and other abnormalities inside the uterine cavity. If a uterine polyp or other abnormality is identified, the appropriate treatment can be discussed based on the findings.
              </p>
            </div>

            {/* Section 13 — When Should You Visit a Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Visit a Gynaecologist?
              </h2>

              <p className="text-gray-700 mb-4">
                You do not always need to wait until a problem becomes severe before consulting a gynaecologist.
              </p>

              <p className="text-gray-700 mb-4">
                Consider scheduling a consultation if you experience:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Periods that are consistently irregular</li>
                <li>Very heavy menstrual bleeding</li>
                <li>Severe period pain</li>
                <li>Persistent pelvic pain</li>
                <li>Unusual vaginal bleeding</li>
                <li>Symptoms associated with PCOS</li>
                <li>Difficulty becoming pregnant</li>
                <li>Repeated pregnancy loss</li>
                <li>A known fibroid or ovarian cyst</li>
                <li>Symptoms of endometriosis</li>
                <li>Pregnancy-related concerns</li>
                <li>Menopause-related symptoms</li>
                <li>A need for routine women's health consultation</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Early consultation can help determine whether symptoms require investigation or treatment.
              </p>
            </div>

            {/* Section 14 — Why Choose a Female Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose a Female Gynaecologist in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Many women prefer consulting a female gynaecologist because they may feel more comfortable discussing personal symptoms, reproductive health, menstrual concerns, fertility problems and pregnancy-related issues.
              </p>

              <p className="text-gray-700 mb-4">
                However, choosing a gynaecologist should not be based only on gender. Important factors include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Medical qualifications</li>
                <li>Relevant clinical experience</li>
                <li>Area of specialization</li>
                <li>Diagnostic facilities</li>
                <li>Treatment options</li>
                <li>Hospital and clinical support</li>
                <li>Communication with patients</li>
                <li>Availability of appropriate follow-up care</li>
              </ul>

              <p className="text-gray-700">
                Dr. Priyanka combines female gynaecological care with obstetric, infertility and minimally invasive surgical expertise.
              </p>
            </div>

            {/* Section 15 — Advanced Diagnostic & Treatment Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Advanced Diagnostic & Treatment Support
              </h2>

              <p className="text-gray-700 mb-4">
                Depending on the clinical requirement and availability at the associated facility, women's healthcare may involve modern diagnostic and treatment technologies.
              </p>

              <p className="text-gray-700 mb-4">
                These may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>High-definition laparoscopic systems</li>
                <li>3D and 4D ultrasound</li>
                <li>Fertility laboratory support</li>
                <li>Time-lapse embryo monitoring</li>
                <li>Semen analysis</li>
                <li>Other investigations required for fertility and gynaecological diagnosis</li>
              </ul>

              <p className="text-gray-700">
                The technology used for a patient depends on the medical indication and treatment plan.
              </p>
            </div>

            {/* Section 16 — Care for Patients From Moradabad and Nearby Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Care for Patients From Moradabad and Nearby Areas
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides women's healthcare in Moradabad and also sees patients who travel from nearby districts for specialist consultation.
              </p>

              <p className="text-gray-700 mb-4">
                Patients may travel from areas including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Moradabad</li>
                <li>Rampur</li>
                <li>Amroha</li>
                <li>Sambhal</li>
                <li>Nearby towns and districts of Western Uttar Pradesh</li>
              </ul>

              <p className="text-gray-700">
                For patients traveling from outside Moradabad, previous medical records, ultrasound reports, laboratory reports and treatment history can be useful during the consultation.
              </p>
            </div>

            {/* Section 17 — Clinic Location */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Clinic Location
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

            {/* Section 18 — Book an Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Book an Appointment With Dr. Priyanka Pachauri
              </h2>

              <p className="text-gray-700">
                If you are searching for a gynaecologist in Moradabad for menstrual problems, pregnancy care, infertility, PCOS, fibroids, ovarian cysts, endometriosis or other women's health concerns, a consultation can help determine the appropriate next step. During the consultation, you can discuss your symptoms, previous treatment, medical history and concerns. Existing reports and prescriptions can be brought to the appointment so they can be reviewed as part of your medical history.
              </p>
            </div>

            {/* Section 19 — FAQs */}
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