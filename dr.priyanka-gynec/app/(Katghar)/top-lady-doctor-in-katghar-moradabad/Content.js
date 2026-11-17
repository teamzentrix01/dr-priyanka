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
  MessageCircle,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function TopLadyDoctorKatgharMoradabad() {
  const faqs = [
    {
      q: "Who is a top lady doctor in Katghar, Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec is a trusted lady gynaecologist serving women from Katghar and across Moradabad, with services in pregnancy care, fertility and IVF, and 3D laparoscopy.",
    },
    {
      q: "Is there a lady doctor for pregnancy care in Moradabad?",
      a: "Yes. Dr. Priyanka Pachauri provides complete antenatal care, normal delivery support, high-risk pregnancy management, and postnatal care.",
    },
    {
      q: "Which lady doctor should I see for PCOS?",
      a: "A gynaecologist is the right specialist for PCOS. Dr. Priyanka Pachauri offers evaluation and personalised treatment, including ovulation induction for women trying to conceive.",
    },
    {
      q: "Can I get IVF treatment at this clinic?",
      a: "Yes. The clinic offers fertility and IVF care with time-lapse embryo monitoring and AI-powered semen analysis with DNA integrity testing.",
    },
    {
      q: "What is the benefit of laparoscopic surgery?",
      a: "Keyhole surgery typically means smaller cuts, less pain, less blood loss, and a faster return to daily activities than open surgery, when it is suitable for your condition.",
    },
    {
      q: "Is normal delivery possible with a gynaecologist here?",
      a: "Yes. Normal vaginal delivery is prioritised wherever it is safe, and a caesarean is advised only when medically necessary.",
    },
    {
      q: "How early should I see a doctor for irregular periods?",
      a: "If your cycles are consistently irregular, very painful, or very heavy for two to three months, it is a good idea to consult a gynaecologist rather than wait.",
    },
    {
      q: "Do I need to be married to visit a gynaecologist?",
      a: "No. Women of any age or marital status can consult a gynaecologist for menstrual problems, hormonal concerns, infections, or preventive check-ups.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the “Book Appointment” option on the official website.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
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
                Top Lady Doctor in Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>


              <p className="text-gray-700 mb-4">
                Many women hesitate to talk about periods, pregnancy, intimate health, or fertility. Some delay a check-up for months because they feel embarrassed, or because they have not found a doctor they can speak to freely. A caring lady doctor can change that experience completely. If you are in Katghar or nearby areas of Moradabad, Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers a trusted place to discuss your health openly.
              </p>


              <p className="text-gray-700 mb-4">
                Her clinic runs on the promise &quot;Her Health First.&quot; That means listening before prescribing, explaining before treating, and respecting your choices at every step.
              </p>
            </div>


            {/* Section 2 — Why Many Women Prefer */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Many Women Prefer a Lady Doctor
              </h2>


              <p className="text-gray-700 mb-4">
                A female gynaecologist is not a necessity for everyone, but many patients feel more at ease with one. Common reasons include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Greater comfort during examinations and sensitive questions</li>
                <li>Easier conversations about periods, sexual health, and contraception</li>
                <li>Support from someone who understands the physical and emotional side of pregnancy</li>
                <li>Family comfort, especially for first-time visits or young patients</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Comfort matters because a patient who feels safe shares symptoms honestly, and honest information leads to a more accurate diagnosis.
              </p>
            </div>


            {/* Section 3 — What Makes a Lady Doctor Top */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes a Lady Doctor &quot;Top&quot;?
              </h2>


              <p className="text-gray-700 mb-4">
                Before choosing any doctor, it helps to know what to look for:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Qualification and training:</strong> Strong credentials and experience in your specific concern.</li>
                <li><strong>Clear communication:</strong> Explanations in simple language, without rushing you.</li>
                <li><strong>Modern technology:</strong> Accurate diagnosis and safer, less invasive treatment.</li>
                <li><strong>Complete services:</strong> Pregnancy, fertility, and surgery in one place, so you avoid repeated referrals.</li>
                <li><strong>Honest advice:</strong> Surgery or caesarean only when medically needed.</li>
                <li><strong>Follow-up support:</strong> A team that remembers your history.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Dr. Priyanka Gynaec is built around these points, with expertise in laparoscopy, fertility treatment, and pregnancy care.
              </p>
            </div>


            {/* Section 4 — Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Care With a Lady Doctor
              </h2>


              <p className="text-gray-700 mb-4">
                Pregnancy brings joy along with many questions. What should I eat? Which scans are important? Is this pain normal? A lady doctor who is easy to reach makes these months far less stressful.
              </p>


              <p className="text-gray-700 mb-4">
                Antenatal services at the clinic include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular trimester-wise check-ups</li>
                <li>Ultrasound scans and screening tests</li>
                <li>Diet and lifestyle guidance</li>
                <li>Monitoring for high blood pressure, diabetes, and thyroid issues</li>
                <li>Labour and delivery preparation</li>
              </ul>


              <p className="text-gray-700 mb-4">
                The clinic uses a Voluson E22 3D/4D ultrasound machine, which gives a detailed view of the baby’s growth and helps identify concerns early.
              </p>


              <p className="text-gray-700">
                Normal delivery is encouraged wherever it is safe for mother and baby. If a caesarean becomes necessary, the reasons are explained clearly so you can decide with confidence.
              </p>
            </div>


            {/* Section 5 — High-Risk Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Support
              </h2>


              <p className="text-gray-700 mb-4">
                Some pregnancies need extra attention, for example when there is:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A history of miscarriage</li>
                <li>Diabetes, thyroid disease, or high blood pressure</li>
                <li>Pregnancy after IVF or long-standing infertility</li>
                <li>Twin pregnancy</li>
                <li>Pregnancy at a later age</li>
              </ul>


              <p className="text-gray-700 mt-4">
                With closer monitoring and timely decisions, many women with high-risk pregnancies deliver healthy babies. Early registration and regular follow-ups make the biggest difference.
              </p>
            </div>


            {/* Section 6 — Period Problems */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Period Problems and PCOS Treatment
              </h2>


              <p className="text-gray-700 mb-4">
                Irregular, painful, or very heavy periods are among the most common reasons women visit a gynaecologist. Many are told &quot;it is normal&quot; and endure years of discomfort. Possible causes include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>PCOS/PCOD:</strong> Irregular cycles, weight gain, acne, excess hair growth, and difficulty conceiving</li>
                <li>Thyroid imbalance</li>
                <li>Fibroids and polyps</li>
                <li>Endometriosis</li>
                <li>Hormonal changes</li>
              </ul>


              <p className="text-gray-700 mt-4">
                PCOS is one of the most common causes of difficulty conceiving, yet it is highly treatable. Lifestyle changes, medication, ovulation induction, and personalised fertility plans help many women achieve pregnancy. A proper examination, ultrasound, and blood tests point to the right treatment.
              </p>
            </div>


            {/* Section 7 — Fertility and IVF */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility and IVF Care
              </h2>


              <p className="text-gray-700 mb-4">
                Trying to conceive can be emotionally heavy, and couples often feel judged. At Dr. Priyanka Gynaec, fertility care is personal and respectful. Treatment depends on your age, history, and test results, not on a fixed package.
              </p>


              <p className="text-gray-700 mb-4">
                Services include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Fertility evaluation for both partners</li>
                <li>Ovulation tracking and induction</li>
                <li>IVF treatment with advanced laboratory support</li>
                <li>Time-lapse embryo monitoring</li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
              </ul>


              <p className="text-gray-700 mt-4">
                For many couples, success comes after years of trying, and the right guidance and a calm approach help them keep going.
              </p>
            </div>


            {/* Section 8 — 3D Laparoscopic Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                3D Laparoscopic Surgery Without Fear
              </h2>


              <p className="text-gray-700 mb-4">
                The word &quot;surgery&quot; worries many women. Keyhole surgery makes it far gentler. Through tiny incisions and a high-definition 3D view, the surgeon can operate precisely with less pain, minimal scarring, and quicker recovery.
              </p>


              <p className="text-gray-700 mb-4">
                Procedures offered include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic cystectomy for ovarian cysts, protecting fertility</li>
                <li>Laparoscopic myomectomy for fibroids, preserving the uterus</li>
                <li>Laparoscopic hysterectomy when removal of the uterus is medically necessary</li>
                <li>Endometriosis surgery for pelvic pain relief</li>
                <li>Sacrocolpopexy for uterine and vaginal vault prolapse</li>
                <li>Laparoscopic sterilization, a safe day-care procedure for permanent family planning</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Hysteroscopy services are also available. Diagnostic hysteroscopy examines the uterine cavity gently, and hysteroscopic polypectomy removes polyps without cuts.
              </p>
            </div>


            {/* Section 9 — Mother and Baby */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Care for Mother and Baby Together
              </h2>


              <p className="text-gray-700">
                After delivery, new mothers need guidance on recovery, breastfeeding, and newborn care. The clinic also provides paediatric consultations, vaccinations, and newborn care, so your baby’s early health is supported in the same trusted place.
              </p>
            </div>


            {/* Section 10 — Signs to Consult */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs That You Should Consult a Lady Doctor
              </h2>


              <p className="text-gray-700 mb-4">
                Book a visit if you experience:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Missed, irregular, painful, or very heavy periods</li>
                <li>Persistent pelvic or lower abdominal pain</li>
                <li>Abnormal vaginal discharge, itching, or burning</li>
                <li>Pain during intercourse</li>
                <li>Bleeding between periods or after menopause</li>
                <li>Trouble conceiving after 6 to 12 months of trying</li>
                <li>A positive pregnancy test</li>
                <li>Breast lumps or unusual changes</li>
                <li>Menopausal symptoms such as hot flushes, sleep trouble, or mood swings</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Regular preventive check-ups, including Pap smear screening when advised, help catch problems before they become serious.
              </p>
            </div>


            {/* Section 11 — First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect at Your First Visit
              </h2>


              <p className="text-gray-700 mb-4">
                A first consultation is a conversation first. You can expect:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A discussion of your symptoms, cycle history, and medical background</li>
                <li>A gentle examination only if it is necessary</li>
                <li>Ultrasound or tests if required</li>
                <li>A clear explanation of findings and treatment options</li>
                <li>Time to ask questions without pressure</li>
              </ul>


              <p className="text-gray-700 mt-4">
                You are encouraged to bring previous reports, prescriptions, and ultrasound records, so your history is complete.
              </p>
            </div>


            {/* Section 12 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Location and Contact
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
                      <p className="font-semibold">Dr. Priyanka Gynaec Clinic</p>
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
                          +91 89796 70705 (WhatsApp)
                        </a>
                      </div>


                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynaec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynaec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        https://www.gynaecologistmoradabad.com/
                      </a>
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


            {/* Section 13 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQs)
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