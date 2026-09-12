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

export default function GynaecologistInMoradabad() {
  const faqs = [
    {
      q: "Who is a gynaecologist in Moradabad for women's health concerns?",
      a: "Dr. Priyanka Pachauri is a Consultant Obstetrician, Gynaecologist and Infertility Specialist in Moradabad. She provides consultation for menstrual problems, pregnancy, infertility, PCOS, fibroids, ovarian cysts, endometriosis and other women's health concerns.",
    },
    {
      q: "What conditions does Dr. Priyanka Pachauri treat?",
      a: "Her areas of care include menstrual disorders, PCOS, fibroids, ovarian cysts, endometriosis, infertility, pregnancy-related concerns and selected gynaecological conditions requiring laparoscopic treatment.",
    },
    {
      q: "Does Dr. Priyanka provide pregnancy and antenatal care?",
      a: "Yes. Antenatal and obstetric care is provided for pregnancy monitoring and management according to the individual patient's requirements.",
    },
    {
      q: "Does she provide infertility and IVF treatment?",
      a: "Dr. Priyanka provides fertility consultation and treatment planning, including options such as ovulation induction, IUI, IVF and ICSI where clinically appropriate.",
    },
    {
      q: "Does Dr. Priyanka perform laparoscopic surgery?",
      a: "Her surgical expertise includes minimally invasive laparoscopic gynaecological procedures. The suitability of laparoscopic surgery depends on the patient's diagnosis and individual clinical circumstances.",
    },
    {
      q: "Can I consult her for PCOS and irregular periods?",
      a: "Yes. Women with irregular periods, PCOS-related concerns and other menstrual problems can consult Dr. Priyanka for evaluation and treatment planning.",
    },
    {
      q: "Can fibroids and ovarian cysts be treated laparoscopically?",
      a: "Selected fibroids and ovarian cysts may be treated using laparoscopic procedures. Whether laparoscopic surgery is appropriate depends on the size, location, symptoms and other characteristics of the condition.",
    },
    {
      q: "Where is Dr. Priyanka Pachauri located in Moradabad?",
      a: "The clinic address is A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "Can patients from Rampur, Amroha and Sambhal consult Dr. Priyanka?",
      a: "Yes. Patients from Moradabad and nearby districts can contact the clinic regarding consultation and treatment availability.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can contact the clinic using the listed phone or WhatsApp number to confirm appointment availability and consultation timings.",
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
                Gynaecologist in Moradabad – Dr. Priyanka Pachauri
              </h1>

              <p className="text-gray-700 mb-4">
                Finding the right gynaecologist in Moradabad is important for women dealing with menstrual problems, PCOS, pregnancy, infertility, pelvic pain, fibroids, ovarian cysts or other reproductive health concerns. Good gynaecological care starts with understanding the patient's symptoms and medical history and then selecting appropriate investigations and treatment.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri is a Consultant Obstetrician, Gynaecologist and Infertility Specialist in Moradabad. Her areas of care include general gynaecology, pregnancy and antenatal care, infertility and fertility treatment, and minimally invasive laparoscopic gynaecological procedures.
              </p>
            </div>

            {/* Section 2 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides women's healthcare across different stages of reproductive life. Her clinical areas include menstrual health, pregnancy care, fertility concerns and gynaecological conditions that may require medical or surgical treatment.
              </p>

              <p className="text-gray-700">
                A consultation generally begins with a discussion of symptoms, previous medical history, menstrual or pregnancy history and any existing reports. Depending on the concern, clinical examination, ultrasound, blood tests or other investigations may be recommended. Treatment is then planned according to the patient's diagnosis, symptoms, age, reproductive goals and overall health.
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
                Her combination of obstetric, gynaecological, fertility and minimally invasive surgical training allows patients to discuss different women's health concerns with a specialist who can evaluate the condition and guide them toward appropriate treatment.
              </p>
            </div>

            {/* Section 4 — Gynaecology Services in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gynaecology Services in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Gynaecological problems can range from simple menstrual irregularities to conditions requiring long-term management or surgery.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides consultation and treatment planning for concerns including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Irregular periods</li>
                <li>Heavy menstrual bleeding</li>
                <li>Painful periods</li>
                <li>PCOS and hormonal concerns</li>
                <li>Fibroids</li>
                <li>Ovarian cysts</li>
                <li>Endometriosis</li>
                <li>Uterine polyps</li>
                <li>Pelvic pain</li>
                <li>Infertility</li>
                <li>Recurrent pregnancy loss</li>
                <li>Pelvic organ prolapse</li>
                <li>Abnormal uterine bleeding</li>
                <li>Other reproductive health concerns</li>
              </ul>

              <p className="text-gray-700">
                The appropriate treatment depends on the underlying cause rather than only the symptoms.
              </p>
            </div>

            {/* Section 5 — Pregnancy & Antenatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy & Antenatal Care
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnancy requires regular medical supervision to monitor the health of both mother and baby.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides pregnancy and antenatal care in Moradabad, including routine pregnancy consultations and monitoring according to the stage and requirements of each pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                Antenatal care may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Pregnancy confirmation and initial assessment</li>
                <li>Regular antenatal check-ups</li>
                <li>Maternal health monitoring</li>
                <li>Fetal growth and wellbeing assessment</li>
                <li>Pregnancy screening</li>
                <li>Blood pressure and blood sugar monitoring</li>
                <li>Guidance regarding nutrition and lifestyle</li>
                <li>Birth planning</li>
                <li>Identification of pregnancy-related complications</li>
                <li>Postnatal follow-up</li>
              </ul>

              <p className="text-gray-700">
                Women planning pregnancy can also seek preconception consultation to discuss medical history, previous pregnancy outcomes, medications and factors that may affect pregnancy.
              </p>
            </div>

            {/* Section 6 — High-Risk Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Care
              </h2>

              <p className="text-gray-700 mb-4">
                Some pregnancies require more frequent monitoring because of maternal health conditions, previous pregnancy complications or problems that develop during pregnancy.
              </p>

              <p className="text-gray-700 mb-4">
                Specialist obstetric care may be required for conditions such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>High blood pressure during pregnancy</li>
                <li>Preeclampsia</li>
                <li>Gestational diabetes</li>
                <li>Fetal growth restriction</li>
                <li>Previous pregnancy complications</li>
                <li>Recurrent pregnancy loss</li>
                <li>Other pregnancy conditions requiring closer supervision</li>
              </ul>

              <p className="text-gray-700">
                The purpose of high-risk pregnancy care is to identify potential complications early and determine appropriate monitoring, investigations and treatment.
              </p>
            </div>

            {/* Section 7 — Infertility Treatment & IVF */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility Treatment & IVF in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Infertility can have female, male or combined factors. For this reason, fertility evaluation should consider both partners when clinically appropriate.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides fertility consultation and treatment planning for couples experiencing difficulty conceiving.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the diagnosis, treatment may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Fertility evaluation</li>
                <li>Ovulation assessment</li>
                <li>Ovulation induction</li>
                <li>IUI</li>
                <li>IVF</li>
                <li>ICSI</li>
                <li>Evaluation of female reproductive factors</li>
                <li>Assessment of male fertility factors</li>
                <li>Fertility counselling</li>
                <li>Treatment planning after previous unsuccessful attempts</li>
              </ul>

              <p className="text-gray-700">
                The appropriate fertility treatment depends on factors such as age, ovarian reserve, ovulation, sperm parameters, medical history, previous treatment and other investigation results. Patients from Moradabad and nearby districts can consult for fertility evaluation and discuss which treatment options may be appropriate for their situation.
              </p>
            </div>

            {/* Section 8 — PCOS & Hormonal Problems */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                PCOS & Hormonal Problems
              </h2>

              <p className="text-gray-700">
                Polycystic ovary syndrome (PCOS) can affect menstrual cycles, ovulation and fertility. Some women may also experience acne, increased hair growth or changes in weight. Women may consult a gynaecologist for irregular periods, delayed periods, absent periods, PCOS-related fertility problems, hormonal concerns, difficulty with ovulation, and abnormal menstrual patterns. Management depends on the patient's symptoms, reproductive plans and underlying health factors.
              </p>
            </div>

            {/* Section 9 — Heavy, Painful & Irregular Periods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Heavy, Painful & Irregular Periods
              </h2>

              <p className="text-gray-700 mb-4">
                Changes in menstrual bleeding should not always be ignored, especially when they are persistent or significantly affect daily life.
              </p>

              <p className="text-gray-700 mb-4">
                A gynaecological evaluation may be appropriate for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Very heavy periods</li>
                <li>Periods lasting longer than usual</li>
                <li>Severe menstrual pain</li>
                <li>Irregular menstrual cycles</li>
                <li>Bleeding between periods</li>
                <li>Bleeding after intercourse</li>
                <li>Periods that have stopped unexpectedly</li>
              </ul>

              <p className="text-gray-700">
                Possible causes can include hormonal changes, PCOS, fibroids, polyps, endometriosis and other gynaecological conditions. Investigations are selected according to the patient's symptoms and medical history.
              </p>
            </div>

            {/* Section 10 — Fibroid Treatment in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fibroid Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Uterine fibroids are non-cancerous growths that can occur in or around the uterus. Some women have no symptoms, while others may experience heavy periods, pelvic pressure, pain or fertility problems.
              </p>

              <p className="text-gray-700 mb-4">
                Treatment depends on factors such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Number and size of fibroids</li>
                <li>Location of fibroids</li>
                <li>Symptoms</li>
                <li>Age</li>
                <li>Fertility plans</li>
                <li>Previous treatment</li>
                <li>Overall health</li>
              </ul>

              <p className="text-gray-700">
                Depending on the clinical situation, treatment may involve monitoring, medication or surgery. For selected patients requiring surgery, laparoscopic myomectomy may be considered as a minimally invasive approach to removing fibroids while retaining the uterus.
              </p>
            </div>

            {/* Section 11 — Ovarian Cyst Evaluation & Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ovarian Cyst Evaluation & Treatment
              </h2>

              <p className="text-gray-700 mb-4">
                Ovarian cysts are commonly identified during ultrasound examinations. Many cysts are benign and may resolve without treatment, while some require monitoring or further evaluation.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides consultation for women with:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Simple ovarian cysts</li>
                <li>Complex ovarian cysts</li>
                <li>Recurrent cysts</li>
                <li>Cyst-related pelvic pain</li>
                <li>Cysts associated with fertility concerns</li>
              </ul>

              <p className="text-gray-700">
                The need for treatment depends on the ultrasound findings, symptoms, cyst characteristics and other clinical factors. When surgery is required and laparoscopic treatment is appropriate, laparoscopic cystectomy may be considered.
              </p>
            </div>

            {/* Section 12 — Endometriosis & Pelvic Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Endometriosis & Pelvic Pain
              </h2>

              <p className="text-gray-700 mb-4">
                Endometriosis can cause significant menstrual and pelvic symptoms and may also be associated with infertility.
              </p>

              <p className="text-gray-700 mb-4">
                Common symptoms include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Severe period pain</li>
                <li>Chronic pelvic pain</li>
                <li>Pain during intercourse</li>
                <li>Pain associated with bowel movements or urination during periods</li>
                <li>Difficulty conceiving</li>
                <li>Endometriotic ovarian cysts</li>
              </ul>

              <p className="text-gray-700">
                Proper evaluation is important because pelvic pain can have several possible causes. Where surgery is indicated, laparoscopic treatment may be considered depending on the extent of disease and the patient's individual circumstances.
              </p>
            </div>

            {/* Section 13 — Laparoscopic Gynaecological Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Gynaecological Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery is a minimally invasive surgical approach that uses small incisions and a camera to visualize the operating area.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka's surgical expertise includes minimally invasive gynaecological procedures for selected patients.
              </p>

              <p className="text-gray-700 mb-4">
                Procedures may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Laparoscopic myomectomy</li>
                <li>Laparoscopic ovarian cystectomy</li>
                <li>Laparoscopic surgery for endometriosis</li>
                <li>Laparoscopic hysterectomy</li>
                <li>Other appropriate minimally invasive gynaecological procedures</li>
              </ul>

              <p className="text-gray-700">
                Potential benefits of minimally invasive surgery can include smaller incisions and recovery that may be faster than conventional open surgery in appropriately selected cases. However, the expected outcome depends on the procedure and individual patient factors.
              </p>
            </div>

            {/* Section 14 — Hysteroscopy & Uterine Polyps */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Hysteroscopy & Uterine Polyps
              </h2>

              <p className="text-gray-700">
                Hysteroscopy allows a doctor to examine the inside of the uterus using a small camera. It can be useful when evaluating certain causes of abnormal uterine bleeding, uterine polyps, some fertility problems, and abnormalities of the uterine cavity. When a polyp or other abnormality is identified, hysteroscopic treatment may be recommended when clinically appropriate.
              </p>
            </div>

            {/* Section 15 — When Should You Visit a Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Visit a Gynaecologist?
              </h2>

              <p className="text-gray-700 mb-4">
                You should consider consulting a gynaecologist if you experience persistent or unusual reproductive health symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                Common reasons for consultation include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Irregular or missed periods</li>
                <li>Very heavy periods</li>
                <li>Severe period pain</li>
                <li>Persistent pelvic pain</li>
                <li>Abnormal vaginal bleeding</li>
                <li>PCOS symptoms</li>
                <li>Difficulty conceiving</li>
                <li>Repeated pregnancy loss</li>
                <li>Fibroids or ovarian cysts</li>
                <li>Suspected endometriosis</li>
                <li>Pregnancy-related concerns</li>
                <li>Menopause-related concerns</li>
                <li>Routine reproductive health consultation</li>
              </ul>

              <p className="text-gray-700 mt-4">
                You do not necessarily need to wait until symptoms become severe before seeking medical advice.
              </p>
            </div>

            {/* Section 16 — What Happens During a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During a Gynaecology Consultation?
              </h2>

              <p className="text-gray-700 mb-4">
                Your first consultation is focused on understanding your health concern and determining whether further evaluation is needed.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Medical History
                  </h3>
                  <p className="text-gray-700">
                    The doctor discusses your symptoms, menstrual history, previous pregnancies, medical conditions, surgeries and medications where relevant.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Clinical Evaluation
                  </h3>
                  <p className="text-gray-700">
                    A physical examination may be recommended depending on the symptoms and reason for consultation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Diagnostic Investigations
                  </h3>
                  <p className="text-gray-700">
                    Depending on the situation, investigations may include ultrasound, blood tests or other appropriate diagnostic procedures.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Explanation of Findings
                  </h3>
                  <p className="text-gray-700">
                    The findings are discussed with you, including possible causes and available treatment options.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Personalized Treatment Plan
                  </h3>
                  <p className="text-gray-700">
                    Treatment is recommended according to your diagnosis, symptoms, reproductive goals and overall health.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Follow-Up
                  </h3>
                  <p className="text-gray-700">
                    Follow-up may be recommended to monitor treatment response, review investigations or plan further care.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 17 — Why Choose Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Pachauri?
              </h2>

              <p className="text-gray-700 mb-4">
                When selecting a gynaecologist in Moradabad, it is important to consider qualifications, relevant experience, areas of specialization and the type of treatment you may require.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri offers:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Specialist obstetric and gynaecological care</li>
                <li>Infertility and fertility treatment expertise</li>
                <li>Minimal access and laparoscopic surgical expertise</li>
                <li>Pregnancy and antenatal care</li>
                <li>Evaluation of menstrual and hormonal problems</li>
                <li>Management of fibroids and ovarian cysts</li>
                <li>Endometriosis evaluation and surgical management</li>
                <li>Individualized treatment planning</li>
                <li>Consultation for patients from Moradabad and nearby districts</li>
              </ul>

              <p className="text-gray-700">
                Her approach is centered on understanding the patient's condition before recommending an appropriate treatment pathway.
              </p>
            </div>

            {/* Section 18 — Choosing a Female Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing a Female Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Many women prefer consulting a female gynaecologist for personal and reproductive health concerns because they may feel more comfortable discussing sensitive symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                When choosing a female gynaecologist in Moradabad, consider:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Medical qualifications</li>
                <li>Relevant clinical training</li>
                <li>Experience in your specific condition</li>
                <li>Pregnancy and fertility expertise if required</li>
                <li>Surgical expertise when surgery may be necessary</li>
                <li>Availability of appropriate diagnostic support</li>
                <li>Clear communication</li>
                <li>Follow-up and continuity of care</li>
              </ul>

              <p className="text-gray-700">
                The most suitable doctor is one whose expertise matches your specific medical needs.
              </p>
            </div>

            {/* Section 19 — Patients From Moradabad & Nearby Districts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Patients From Moradabad & Nearby Districts
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka's practice is based in Moradabad, making specialist women's healthcare accessible to patients from the city and surrounding areas.
              </p>

              <p className="text-gray-700 mb-4">
                Patients may travel from:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Moradabad</li>
                <li>Rampur</li>
                <li>Amroha</li>
                <li>Sambhal</li>
                <li>Nearby towns and districts</li>
              </ul>

              <p className="text-gray-700">
                Patients coming from outside Moradabad can bring previous ultrasound reports, laboratory investigations, prescriptions and treatment records to help provide a complete medical history.
              </p>
            </div>

            {/* Section 20 — Clinic Location & Contact */}
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

            {/* Section 21 — Book an Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Book an Appointment With Dr. Priyanka Pachauri
              </h2>

              <p className="text-gray-700">
                If you are searching for a gynaecologist in Moradabad for menstrual problems, PCOS, pregnancy care, infertility, IVF, fibroids, ovarian cysts, endometriosis or other women's health concerns, you can contact Dr. Priyanka Pachauri for a consultation. Bring any previous medical records, reports, ultrasound scans and prescriptions that may be relevant to your condition.
              </p>
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