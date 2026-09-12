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

export default function LadyDoctorMoradabad() {
  const faqs = [
    {
      q: "Who is a Lady Doctor in Moradabad for women's health?",
      a: "Dr. Priyanka Pachauri is a female gynaecologist providing women's healthcare consultation in Moradabad. Women can consult her for pregnancy, fertility, menstrual, PCOS, and other gynaecological concerns.",
    },
    {
      q: "When should I visit a lady doctor for irregular periods?",
      a: "If your periods remain irregular, unusually heavy, very painful, or change significantly from your usual pattern, a gynaecological consultation can help determine whether further evaluation is required.",
    },
    {
      q: "Can a lady doctor help with PCOS?",
      a: "Yes. PCOS-related menstrual, hormonal, and fertility concerns can be discussed with a gynaecologist. Treatment depends on the individual's symptoms, health history, and reproductive goals.",
    },
    {
      q: "Can I consult a female gynaecologist for pregnancy care?",
      a: "Yes. A female gynaecologist can provide antenatal consultation, pregnancy monitoring, and pregnancy-related guidance according to your individual healthcare needs.",
    },
    {
      q: "Can a gynaecologist help with infertility?",
      a: "Yes. A gynaecologist with fertility experience can evaluate infertility concerns and recommend appropriate investigations and treatment options.",
    },
    {
      q: "Is IVF treatment available through a gynaecologist?",
      a: "Fertility and IVF-related treatment can be discussed during consultation. The appropriate treatment pathway depends on the patient's evaluation and individual circumstances.",
    },
    {
      q: "Can fibroids be treated with laparoscopic surgery?",
      a: "Laparoscopic myomectomy may be an option for selected patients with fibroids. The suitability of surgery depends on the size, location, symptoms, medical history, and other clinical factors.",
    },
    {
      q: "Can ovarian cysts require surgery?",
      a: "Some ovarian cysts can be monitored, while others may require treatment or surgery. The decision depends on the cyst's characteristics, symptoms, and clinical assessment.",
    },
    {
      q: "What should I bring to my first gynaecology appointment?",
      a: "Bring previous reports, ultrasound scans, prescriptions, medication details, and relevant pregnancy or surgical records. Keeping track of your menstrual cycle can also be helpful.",
    },
    {
      q: "Where is Dr. Priyanka Pachauri's clinic in Moradabad?",
      a: "The clinic is located at A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "How can I book an appointment with a Lady Doctor in Moradabad?",
      a: "You can contact Dr. Priyanka Pachauri's clinic by phone or WhatsApp using the contact details provided on this page.",
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
                Lady Doctor in Moradabad – Female Gynaecologist for Women's Health, Pregnancy & Fertility
              </h1>

              <p className="text-gray-700 mb-4">
                Finding the right Lady Doctor in Moradabad can make it easier for women to discuss personal health concerns openly and receive appropriate medical guidance. Menstrual problems, pregnancy, infertility, PCOS, hormonal concerns, fibroids, ovarian cysts and other gynaecological conditions may require professional evaluation and individualized treatment.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri provides women's healthcare and gynaecological consultation in Moradabad. Women can seek consultation for pregnancy care, fertility and IVF-related concerns, menstrual disorders, PCOS, and selected gynaecological procedures including laparoscopic treatment.
              </p>
            </div>

            {/* Section 2 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Lady Doctor in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a gynaecologist and IVF specialist providing women's healthcare in Moradabad. Her areas of clinical care include pregnancy, fertility, IVF-related treatment, and gynaecological surgery.
              </p>

              <p className="text-gray-700 mb-4">
                Women looking for a female gynaecologist in Moradabad can consult Dr. Priyanka Pachauri for concerns involving reproductive health, menstrual problems, pregnancy, fertility, and selected gynaecological conditions.
              </p>

              <p className="text-gray-700">
                Her approach focuses on listening to the patient's concerns, understanding their medical history, evaluating the condition, and discussing appropriate treatment options.
              </p>
            </div>

            {/* Section 3 — Areas of Women's Healthcare */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Areas of Women's Healthcare
              </h2>

              <p className="text-gray-700 mb-4">
                Depending on individual medical requirements, consultation may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>General gynaecology</li>
                <li>Pregnancy and antenatal care</li>
                <li>Postnatal care</li>
                <li>High-risk pregnancy monitoring</li>
                <li>Fertility and infertility evaluation</li>
                <li>IVF-related treatment guidance</li>
                <li>PCOS and menstrual disorders</li>
                <li>Fibroid evaluation and treatment</li>
                <li>Ovarian cyst evaluation and treatment</li>
                <li>Endometriosis management</li>
                <li>Laparoscopic gynaecological procedures</li>
                <li>Hysteroscopy and selected hysteroscopic procedures</li>
              </ul>
            </div>

            {/* Section 4 — Women's Gynaecological Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Women's Gynaecological Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Women can experience different reproductive and gynaecological concerns at different stages of life. Some symptoms may be temporary, while persistent or severe symptoms may require medical evaluation.
              </p>

              <p className="text-gray-700 mb-4">
                A Lady Doctor in Moradabad can provide consultation for concerns such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Irregular periods</li>
                <li>Heavy menstrual bleeding</li>
                <li>Painful periods</li>
                <li>Hormonal problems</li>
                <li>PCOS</li>
                <li>Pelvic pain</li>
                <li>Unusual vaginal symptoms</li>
                <li>Difficulty conceiving</li>
                <li>Fibroids</li>
                <li>Ovarian cysts</li>
                <li>Endometriosis</li>
                <li>Menopause-related concerns</li>
              </ul>

              <p className="text-gray-700">
                The cause of a symptom cannot always be determined from symptoms alone. A doctor may recommend an examination, ultrasound, blood tests, or other investigations when clinically appropriate.
              </p>
            </div>

            {/* Section 5 — Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Care From a Lady Doctor in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnancy requires regular medical care from early pregnancy through delivery and the postnatal period. Many women prefer consulting a female gynaecologist because they feel more comfortable discussing personal pregnancy-related concerns.
              </p>

              <p className="text-gray-700 mb-4">
                Pregnancy consultation may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Pregnancy planning</li>
                <li>Early pregnancy consultation</li>
                <li>Routine antenatal checkups</li>
                <li>Monitoring maternal and fetal wellbeing</li>
                <li>Pregnancy-related symptoms</li>
                <li>High-risk pregnancy assessment</li>
                <li>Guidance regarding investigations and scans</li>
                <li>Delivery planning</li>
                <li>Postnatal follow-up</li>
              </ul>

              <p className="text-gray-700">
                Every pregnancy is different. The frequency of consultations and investigations depends on the mother's health, pregnancy history, and individual risk factors.
              </p>
            </div>

            {/* Section 6 — High-Risk Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Care
              </h2>

              <p className="text-gray-700">
                Some pregnancies require closer monitoring because of previous complications, maternal medical conditions, multiple pregnancy, or other identified risk factors. If your pregnancy has been classified as high-risk, an obstetrician can assess your individual circumstances and recommend an appropriate monitoring and treatment plan. The goal is to identify concerns at the right time and provide suitable medical care based on the patient's condition.
              </p>
            </div>

            {/* Section 7 — Fertility and IVF Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility and IVF Consultation in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Difficulty conceiving can be challenging for couples, and fertility concerns often require a detailed evaluation rather than a single test.
              </p>

              <p className="text-gray-700 mb-4">
                A fertility consultation may involve reviewing menstrual history, previous pregnancies, medical conditions, previous treatments, and other factors that may influence conception.
              </p>

              <p className="text-gray-700 mb-4">
                Women may seek fertility consultation for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Difficulty conceiving</li>
                <li>Irregular ovulation</li>
                <li>PCOS-related fertility concerns</li>
                <li>Previous pregnancy loss</li>
                <li>Endometriosis-related fertility concerns</li>
                <li>Age-related fertility concerns</li>
                <li>Reproductive health evaluation</li>
                <li>IVF-related treatment guidance</li>
              </ul>

              <p className="text-gray-700">
                Depending on the individual situation, the doctor may recommend investigations before discussing treatment options. Fertility treatment should always be personalized according to age, medical history, reproductive goals, investigation results, and other relevant factors.
              </p>
            </div>

            {/* Section 8 — PCOS and Menstrual Problems */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                PCOS and Menstrual Problems
              </h2>

              <p className="text-gray-700 mb-4">
                PCOS, or polycystic ovary syndrome, can affect periods and ovulation and may also be associated with fertility concerns and other hormonal symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                Women may consult a Lady Doctor in Moradabad for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Irregular menstrual cycles</li>
                <li>Missed periods</li>
                <li>Heavy periods</li>
                <li>Painful periods</li>
                <li>PCOS-related symptoms</li>
                <li>Hormonal concerns</li>
                <li>Fertility problems associated with irregular ovulation</li>
              </ul>

              <p className="text-gray-700">
                Not every irregular period is caused by PCOS. Different medical and lifestyle factors can contribute to menstrual changes, which is why appropriate evaluation is important.
              </p>
            </div>

            {/* Section 9 — Fibroid and Ovarian Cyst Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fibroid and Ovarian Cyst Treatment
              </h2>

              <p className="text-gray-700">
                Fibroids are common uterine growths that may or may not cause symptoms. When symptoms occur, women may experience heavy menstrual bleeding, pelvic pressure, discomfort, or reproductive concerns. Ovarian cysts can also have different causes and may require observation, follow-up, medication, or surgery depending on their characteristics and the patient's symptoms. A gynaecologist can assess the available clinical and imaging information and discuss whether monitoring or treatment is appropriate. For selected patients, surgical procedures such as laparoscopic myomectomy or laparoscopic cystectomy may be considered.
              </p>
            </div>

            {/* Section 10 — Endometriosis and Pelvic Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Endometriosis and Pelvic Pain
              </h2>

              <p className="text-gray-700">
                Endometriosis may cause painful periods, persistent pelvic pain, pain during intercourse, and fertility-related difficulties in some women. Persistent pelvic pain should be evaluated rather than automatically being considered a normal part of menstruation. A gynaecological consultation can help assess the symptoms and determine whether further examination or investigation is required. For selected patients, surgical treatment may be considered after appropriate evaluation.
              </p>
            </div>

            {/* Section 11 — Laparoscopic Gynaecological Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Gynaecological Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery is a minimally invasive surgical approach used for selected gynaecological conditions.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the patient's diagnosis, laparoscopic procedures may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Laparoscopic cystectomy</li>
                <li>Laparoscopic myomectomy</li>
                <li>Laparoscopic hysterectomy</li>
                <li>Endometriosis surgery</li>
                <li>Laparoscopic sterilization</li>
                <li>Selected procedures for pelvic organ prolapse</li>
              </ul>

              <p className="text-gray-700">
                The suitability of laparoscopic surgery depends on the patient's medical history, diagnosis, previous surgeries, imaging findings, and overall clinical assessment. Before any procedure, patients should receive information about the expected benefits, risks, alternatives, recovery, and follow-up requirements.
              </p>
            </div>

            {/* Section 12 — Hysteroscopy and Uterine Conditions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Hysteroscopy and Uterine Conditions
              </h2>

              <p className="text-gray-700">
                Hysteroscopy allows a doctor to examine the inside of the uterus using a specialized instrument. It may be recommended for selected patients depending on symptoms and investigation findings. Hysteroscopy may be considered when evaluating certain uterine conditions, including some endometrial polyps. Whether the procedure is appropriate depends on the individual patient's condition and clinical assessment.
              </p>
            </div>

            {/* Section 13 — When Should You See a Lady Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See a Lady Doctor?
              </h2>

              <p className="text-gray-700 mb-4">
                You should consider a gynaecological consultation if you have persistent, unusual, or troublesome symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                Common reasons to consult include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Periods that are consistently irregular</li>
                <li>Very heavy menstrual bleeding</li>
                <li>Severe menstrual pain</li>
                <li>Persistent pelvic pain</li>
                <li>Bleeding between periods</li>
                <li>Unusual vaginal symptoms</li>
                <li>Difficulty becoming pregnant</li>
                <li>Repeated pregnancy loss</li>
                <li>Suspected PCOS</li>
                <li>Known fibroids or ovarian cysts</li>
                <li>Suspected endometriosis</li>
                <li>Pregnancy-related concerns</li>
                <li>Menopause or perimenopause symptoms</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If symptoms are severe or sudden, seek appropriate medical attention promptly.
              </p>
            </div>

            {/* Section 14 — What Happens During Your First Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During Your First Consultation?
              </h2>

              <p className="text-gray-700 mb-4">
                A first appointment is generally focused on understanding your health concerns and deciding whether further evaluation is required.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Medical History
                  </h3>
                  <p className="text-gray-700">
                    The doctor may ask about your menstrual cycle, pregnancy history, symptoms, previous illnesses, surgeries, medicines, and previous treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Symptom Assessment
                  </h3>
                  <p className="text-gray-700">
                    You can explain when the symptoms started, how often they occur, and how they affect your daily life.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Examination
                  </h3>
                  <p className="text-gray-700">
                    A physical examination may be recommended when medically necessary. The doctor should explain the purpose of the examination before proceeding.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Investigations
                  </h3>
                  <p className="text-gray-700">
                    Depending on the concern, investigations such as ultrasound, blood tests, or other diagnostic procedures may be recommended.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Treatment Plan
                  </h3>
                  <p className="text-gray-700">
                    After reviewing the available information, the doctor can discuss possible treatment options and explain the next steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 15 — How to Prepare for Your Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for Your Appointment
              </h2>

              <p className="text-gray-700 mb-4">
                You can make your consultation more productive by bringing relevant medical information.
              </p>

              <p className="text-gray-700 mb-4">
                Before visiting a Lady Doctor in Moradabad, consider preparing:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Previous medical reports</li>
                <li>Ultrasound or scan reports</li>
                <li>Previous prescriptions</li>
                <li>Current medication details</li>
                <li>Menstrual cycle dates</li>
                <li>Previous pregnancy records</li>
                <li>Details of previous surgeries</li>
                <li>A list of questions you want to discuss</li>
              </ul>

              <p className="text-gray-700">
                Being open about your symptoms can help your doctor make a more informed assessment.
              </p>
            </div>

            {/* Section 16 — Why Choose a Female Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose a Female Gynaecologist in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing a female gynaecologist is a personal preference. For many women, comfort can make it easier to discuss sensitive concerns such as menstrual health, fertility, pregnancy, pelvic pain, or intimate symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                Important factors to consider when choosing a Female Gynaecologist in Moradabad include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Relevant medical qualifications</li>
                <li>Experience in women's healthcare</li>
                <li>Areas of specialization</li>
                <li>Pregnancy and fertility experience</li>
                <li>Surgical expertise where required</li>
                <li>Clear communication</li>
                <li>Appropriate diagnostic facilities</li>
                <li>Convenient location</li>
                <li>Availability of follow-up care</li>
              </ul>

              <p className="text-gray-700">
                The best choice depends on your individual healthcare needs.
              </p>
            </div>

            {/* Section 17 — Why Choose Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Pachauri?
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides gynaecological consultation and women's healthcare in Moradabad, including pregnancy care, fertility and IVF-related treatment, and selected laparoscopic procedures.
              </p>

              <p className="text-gray-700 mb-4">
                Women can discuss concerns related to:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Pregnancy</li>
                <li>Fertility</li>
                <li>PCOS</li>
                <li>Menstrual disorders</li>
                <li>Fibroids</li>
                <li>Ovarian cysts</li>
                <li>Endometriosis</li>
                <li>Gynaecological surgery</li>
                <li>General women's health</li>
              </ul>

              <p className="text-gray-700">
                The focus of consultation is to understand the patient's individual condition and discuss appropriate medical options.
              </p>
            </div>

            {/* Section 18 — Convenient Location */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Convenient Women's Healthcare in Gandhi Nagar, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Location can be particularly important for women who require regular pregnancy, fertility, or follow-up appointments.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri's clinic is located in Gandhi Nagar, Moradabad, making it accessible for women seeking gynaecological consultation in the city.
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