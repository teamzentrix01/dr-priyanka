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


export default function FemaleGynaecologistKatgharMoradabad() {
  const faqs = [
    {
      q: "Is there a female gynaecologist near Katghar, Moradabad?",
      a: "Yes. Dr. Priyanka Pachauri of Dr. Priyanka Gynaec, at Gandhi Nagar, Moradabad, is a female gynaecologist serving women from Katghar and other areas of the city.",
    },
    {
      q: "What conditions does a female gynaecologist treat?",
      a: "A gynaecologist treats menstrual problems, PCOS, infections, fibroids, cysts, endometriosis, fertility concerns, menopause symptoms, and pregnancy-related care.",
    },
    {
      q: "Can I consult for pregnancy care at this clinic?",
      a: "Yes. The clinic provides antenatal services, normal delivery support, high-risk pregnancy management, and postnatal care.",
    },
    {
      q: "Is IVF available?",
      a: "Yes. The clinic offers fertility and IVF treatment with time-lapse embryo monitoring and AI-powered semen analysis with DNA integrity testing.",
    },
    {
      q: "What is keyhole (laparoscopic) surgery?",
      a: "It is a minimally invasive method using small incisions and a camera. It generally means less pain, smaller scars, and quicker recovery when it is suitable for your condition.",
    },
    {
      q: "Do I need an appointment?",
      a: "Booking in advance is recommended so that you have enough consultation time. Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "When should a young woman first see a gynaecologist?",
      a: "Whenever she has concerns such as very painful, irregular, or heavy periods, or any symptom she is worried about. No marriage or minimum age is required for a consultation.",
    },
    {
      q: "How long should I try before seeking fertility help?",
      a: "Generally 12 months if you are under 35, and about 6 months if you are 35 or older. Seek help sooner if you have irregular periods or known gynaecological conditions.",
    },
    {
      q: "Will my consultation be private?",
      a: "Yes. Your concerns are discussed respectfully and your medical details are kept confidential.",
    },
    {
      q: "What is the clinic’s address?",
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
                Female Gynaecologist near Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>


              <p className="text-gray-700 mb-4">
                When a health concern feels personal, the first step is often the hardest. You may be dealing with painful periods, an unexpected pregnancy test result, months of trying to conceive, or a symptom you have kept to yourself. In that moment, a female gynaecologist who is easy to reach and easy to talk to makes a real difference.
              </p>


              <p className="text-gray-700 mb-4">
                If you live in Katghar or nearby parts of Moradabad, Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers women’s healthcare built around one idea: &quot;Her Health First.&quot; Your comfort, your choices, and your story guide every decision.
              </p>
            </div>


            {/* Section 2 — Why Search Nearby */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Search for a Female Gynaecologist Near You?
              </h2>


              <p className="text-gray-700 mb-4">
                Convenience matters in women’s health. Pregnancy needs regular visits, fertility treatment needs frequent monitoring, and many gynaecological problems need follow-up. A clinic that is reachable from your area means you are more likely to attend every appointment on time.
              </p>


              <p className="text-gray-700 mb-4">
                Many women also look specifically for a female doctor because they feel:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>More comfortable during physical examinations</li>
                <li>More open when discussing periods, intimacy, and contraception</li>
                <li>Better understood during pregnancy and childbirth</li>
                <li>Supported by a doctor who respects privacy and cultural sensitivities</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Neither preference is wrong. What matters is that you feel safe enough to share your symptoms honestly.
              </p>
            </div>


            {/* Section 3 — About Clinic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec
              </h2>


              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is a women’s health and fertility centre in Moradabad, offering gynaecology, laparoscopy, IVF, and pregnancy care. The clinic combines technology with a gentle, unhurried approach. It uses 3D laparoscopy, 3D and 4D ultrasound, time-lapse embryo imaging, and AI-powered semen analysis, but the focus stays on you, not the equipment.
              </p>


              <p className="text-gray-700">
                Patients are guided from the first consultation through every follow-up by a team that knows their history, so they never have to repeat their story at each visit.
              </p>
            </div>


            {/* Section 4 — Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Services for Every Stage of a Woman’s Life
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    General Gynaecology
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Routine and problem-based consultations cover:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Irregular, missed, painful, or heavy periods</li>
                    <li>Vaginal infections, discharge, and itching</li>
                    <li>Pelvic pain</li>
                    <li>Contraception advice</li>
                    <li>Menopause symptoms</li>
                    <li>Preventive check-ups and screening</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    PCOS and Hormonal Problems
                  </h3>
                  <p className="text-gray-700">
                    Polycystic ovary syndrome can cause irregular cycles, acne, weight gain, excess hair growth, and trouble conceiving. It is common and treatable. Treatment may include lifestyle changes, medication, and ovulation induction, tailored to whether your goal is regular cycles or pregnancy.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Pregnancy and Antenatal Care
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Good antenatal care protects both mother and baby. Services include:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Early pregnancy confirmation and registration</li>
                    <li>Scheduled check-ups in every trimester</li>
                    <li>Ultrasound scans and screening tests</li>
                    <li>Nutrition and lifestyle guidance</li>
                    <li>Monitoring for gestational diabetes, high blood pressure, and thyroid problems</li>
                    <li>Preparation for labour and delivery</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    A Voluson E22 3D/4D ultrasound machine provides detailed imaging, helping detect concerns early.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Normal Delivery
                  </h3>
                  <p className="text-gray-700">
                    The clinic prioritises normal vaginal delivery wherever it is safe for mother and baby. Labour is monitored carefully, and if a caesarean becomes necessary, the reasons are explained openly.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    High-Risk Pregnancy Care
                  </h3>
                  <p className="text-gray-700">
                    Pregnancies involving diabetes, hypertension, previous miscarriages, twins, advanced maternal age, or conception after fertility treatment need closer attention. Frequent monitoring and timely decisions help many women reach a healthy delivery.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Fertility and IVF
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Struggling to conceive can feel isolating. The clinic offers:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Fertility evaluation for both partners</li>
                    <li>Ovulation induction</li>
                    <li>IVF with advanced laboratory support</li>
                    <li>Time-lapse embryo monitoring</li>
                    <li>AI-powered semen analysis and DNA integrity testing</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Treatment plans depend on your age, medical history, and test results, and they are explained step by step so you always know what comes next.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    3D Laparoscopic Surgery and Hysteroscopy
                  </h3>
                  <p className="text-gray-700 mb-3">
                    If surgery is recommended, keyhole techniques often make it gentler. Tiny incisions and a high-definition 3D view allow precise work with less pain, smaller scars, and a faster return to routine life.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Procedures available include:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Laparoscopic cystectomy:</strong> Removes ovarian cysts while protecting fertility.</li>
                    <li><strong>Laparoscopic myomectomy:</strong> Removes fibroids while preserving the uterus.</li>
                    <li><strong>Laparoscopic hysterectomy:</strong> A minimally invasive option when removing the uterus is medically needed.</li>
                    <li><strong>Endometriosis surgery:</strong> Excises endometriosis to relieve pelvic pain.</li>
                    <li><strong>Sacrocolpopexy:</strong> Repairs uterine and vaginal vault prolapse.</li>
                    <li><strong>Laparoscopic sterilization:</strong> A safe, permanent, day-care family planning procedure.</li>
                    <li><strong>Diagnostic hysteroscopy:</strong> A gentle look inside the uterine cavity.</li>
                    <li><strong>Hysteroscopic polypectomy:</strong> Removes uterine polyps without external cuts.</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Not every condition needs surgery. Many are managed with medication or lifestyle changes first, and you will be told plainly which category yours falls into.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Paediatric and Newborn Care
                  </h3>
                  <p className="text-gray-700">
                    Care does not stop at delivery. The clinic offers paediatric consultations, vaccinations, and newborn care, so your baby’s early health is supported alongside your own recovery.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 5 — How to Choose */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Female Gynaecologist
              </h2>


              <p className="text-gray-700 mb-4">
                Before booking, consider these questions:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Does she listen?</strong> A good doctor lets you finish speaking.</li>
                <li><strong>Are options explained?</strong> You should understand why a test or treatment is suggested.</li>
                <li><strong>Is the clinic equipped?</strong> Modern imaging and surgical facilities improve accuracy and safety.</li>
                <li><strong>Is care continuous?</strong> A doctor who remembers your history saves you time and stress.</li>
                <li><strong>Is advice honest?</strong> Surgery and caesarean should be recommended only when medically justified.</li>
                <li><strong>Is it accessible?</strong> A clinic you can reach comfortably is a clinic you will actually visit.</li>
              </ul>
            </div>


            {/* Section 6 — Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Symptoms That Should Not Be Ignored
              </h2>


              <p className="text-gray-700 mb-4">
                See a gynaecologist soon if you notice:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Periods that suddenly change in pattern, pain, or flow</li>
                <li>Bleeding between periods, after intercourse, or after menopause</li>
                <li>Persistent pelvic or lower abdominal pain</li>
                <li>Unusual discharge with odour, itching, or burning</li>
                <li>Pain during intercourse</li>
                <li>Difficulty conceiving after 6 to 12 months of trying</li>
                <li>A lump in the breast or abdomen</li>
                <li>Severe pain with nausea or fever during pregnancy</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Early evaluation usually means simpler treatment and better outcomes.
              </p>
            </div>


            {/* Section 7 — Preparing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Your Appointment
              </h2>


              <p className="text-gray-700 mb-4">
                A little preparation makes the visit smoother:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note the date of your last period and your usual cycle length</li>
                <li>List your symptoms and when they began</li>
                <li>Bring earlier reports, ultrasounds, and prescriptions</li>
                <li>Write down your questions beforehand</li>
                <li>Mention any medicines or supplements you take</li>
              </ul>


              <p className="text-gray-700 mt-4">
                You can come alone or with a family member, whichever feels more comfortable.
              </p>
            </div>


            {/* Section 8 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Clinic Address and Contact
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


            {/* Section 9 — FAQs */}
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