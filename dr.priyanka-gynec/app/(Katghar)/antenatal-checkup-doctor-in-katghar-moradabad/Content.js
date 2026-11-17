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


export default function AntenatalCheckupDoctorKatgharMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for antenatal checkups in Katghar, Moradabad?",
      a: "You can consult Dr. Priyanka Pachauri of Dr. Priyanka Gynaec, who provides trimester-wise antenatal care, ultrasound, high-risk pregnancy monitoring, and delivery support.",
    },
    {
      q: "When should I have my first antenatal visit?",
      a: "As soon as your pregnancy test is positive, ideally within the first 6 to 8 weeks.",
    },
    {
      q: "How often are antenatal checkups needed?",
      a: "Schedules vary, but visits are usually monthly in early and mid-pregnancy, becoming more frequent in the last trimester. Your doctor will set a plan based on your health and any risk factors.",
    },
    {
      q: "Which scans are done during pregnancy?",
      a: "Commonly, a dating scan early on, a detailed anomaly scan in mid-pregnancy, and growth scans later. Your doctor decides the timing according to your needs.",
    },
    {
      q: "Does the clinic have 3D/4D ultrasound?",
      a: "Yes. The clinic uses a Voluson E22 3D and 4D ultrasound machine for detailed imaging.",
    },
    {
      q: "Can the clinic manage high-risk pregnancies?",
      a: "Yes. High-risk pregnancies are monitored with closer follow-up, appropriate tests, and timely medical decisions.",
    },
    {
      q: "Is normal delivery possible?",
      a: "Yes. Normal delivery is prioritised whenever it is safe for mother and baby. A caesarean is recommended only when medically necessary.",
    },
    {
      q: "What symptoms need urgent attention during pregnancy?",
      a: "Heavy bleeding, leaking fluid, severe abdominal pain, reduced baby movements, severe headache, blurred vision, high fever, or early contractions. Contact your doctor or reach emergency care immediately.",
    },
    {
      q: "Is postnatal and newborn care available?",
      a: "Yes. The clinic provides postnatal follow-up, newborn care, paediatric consultations, and vaccinations.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the “Book Appointment” option on the official website.",
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
                Antenatal Checkup Doctor in Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>


              <p className="text-gray-700 mb-4">
                A positive pregnancy test brings joy, and very soon after, a long list of questions. What should I eat? Which scans do I need? Is this cramp normal? Am I doing everything right for my baby? The answer to most of these starts with regular antenatal checkups under a doctor you trust.
              </p>


              <p className="text-gray-700 mb-4">
                If you live in Katghar or nearby areas of Moradabad, Dr. Priyanka Pachauri of Dr. Priyanka Gynaec provides structured antenatal care for every stage of pregnancy. The clinic’s philosophy is &quot;Her Health First&quot;: your comfort and choices come first, supported by modern technology and patient, unhurried care.
              </p>
            </div>


            {/* Section 2 — What Is Antenatal Care? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Antenatal Care?
              </h2>


              <p className="text-gray-700 mb-4">
                Antenatal care, also called prenatal care, is the medical care a woman receives from the time pregnancy is confirmed until delivery. It includes regular examinations, blood tests, ultrasound scans, vaccinations, nutritional advice, and emotional support.
              </p>


              <p className="text-gray-700 mb-4">Its purpose is simple:</p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep the mother healthy throughout pregnancy</li>
                <li>Monitor the baby’s growth and development</li>
                <li>Detect complications early, when they are easier to manage</li>
                <li>Prepare the mother for labour and delivery</li>
                <li>Support a safe, confident transition into motherhood</li>
              </ul>
            </div>


            {/* Section 3 — Why Regular Checkups Matter */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Regular Antenatal Checkups Matter
              </h2>


              <p className="text-gray-700 mb-4">
                Many pregnancy complications, such as gestational diabetes, high blood pressure, anaemia, and thyroid imbalance, can develop without obvious symptoms. A routine checkup is often the only way to catch them in time.
              </p>


              <p className="text-gray-700 mb-4">
                Regular visits also give you the chance to:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ask questions without waiting for a problem to appear</li>
                <li>Track your weight, blood pressure, and baby’s growth</li>
                <li>Adjust diet, supplements, and activity as pregnancy progresses</li>
                <li>Build a relationship with your doctor before labour begins</li>
              </ul>
            </div>


            {/* Section 4 — When Should You Start? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Start Antenatal Care?
              </h2>


              <p className="text-gray-700">
                Ideally, book your first visit as soon as you get a positive home pregnancy test, or within the first 6 to 8 weeks. Early registration lets the doctor confirm the pregnancy, estimate the due date, begin folic acid and other supplements, and identify any risk factors from the start.
              </p>


              <p className="text-gray-700 mt-4">
                If you have a medical condition such as diabetes, hypertension, thyroid disease, or a history of miscarriage, consulting a doctor before conception is even better.
              </p>
            </div>


            {/* Section 5 — Antenatal Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Antenatal Services at Dr. Priyanka Gynaec
              </h2>


              <p className="text-gray-700 mb-4">
                The clinic offers structured prenatal care and screenings throughout pregnancy, including:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pregnancy confirmation and early registration</li>
                <li>Trimester-wise consultations</li>
                <li>Ultrasound scans using a 3D and 4D ultrasound machine (Voluson E22)</li>
                <li>Routine blood and urine tests</li>
                <li>Screening for gestational diabetes, thyroid disorders, and anaemia</li>
                <li>Blood pressure and weight monitoring</li>
                <li>Nutrition and lifestyle counselling</li>
                <li>High-risk pregnancy monitoring</li>
                <li>Labour and delivery preparation</li>
                <li>Postnatal follow-up and newborn guidance</li>
              </ul>
            </div>


            {/* Section 6 — First Trimester */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                First Trimester (Weeks 1 to 12)
              </h2>


              <p className="text-gray-700 mb-4">
                The first trimester is a period of rapid development and, often, uncomfortable symptoms.
              </p>


              <p className="text-gray-700 mb-4">
                What usually happens at the visits:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirmation of pregnancy and a dating scan</li>
                <li>Detailed medical, menstrual, and family history</li>
                <li>Blood group, haemoglobin, thyroid, and sugar tests as advised</li>
                <li>Start of folic acid and other prescribed supplements</li>
                <li>Guidance on nausea, vomiting, tiredness, and food choices</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Tell your doctor immediately if you have heavy bleeding, severe abdominal pain, persistent vomiting that stops you keeping fluids down, or fever.
              </p>
            </div>


            {/* Section 7 — Second Trimester */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Second Trimester (Weeks 13 to 27)
              </h2>


              <p className="text-gray-700 mb-4">
                Many women feel better during this phase, and the baby’s growth becomes easier to see.
              </p>


              <p className="text-gray-700 mb-4">
                What usually happens:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Routine checks of weight, blood pressure, and fundal height</li>
                <li>Detailed anomaly scan, commonly done around the middle of pregnancy</li>
                <li>Screening for gestational diabetes, typically in the later part of this trimester</li>
                <li>Iron and calcium supplements as prescribed</li>
                <li>Advice on safe exercise, posture, and sleep</li>
              </ul>


              <p className="text-gray-700 mt-4">
                This is also a good time to ask about antenatal classes and breathing techniques.
              </p>
            </div>


            {/* Section 8 — Third Trimester */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Third Trimester (Weeks 28 to Delivery)
              </h2>


              <p className="text-gray-700 mb-4">
                As the due date approaches, visits become more frequent.
              </p>


              <p className="text-gray-700 mb-4">
                What usually happens:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Growth scans to check the baby’s size, position, and fluid levels</li>
                <li>Monitoring of blood pressure and swelling</li>
                <li>Counting baby movements and understanding what is normal</li>
                <li>Discussion of birth plans, including normal delivery or caesarean when medically needed</li>
                <li>Preparation for labour, hospital admission, and newborn care</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Seek urgent care for reduced baby movements, leaking fluid, bleeding, severe headache, blurred vision, or regular painful contractions before term.
              </p>
            </div>


            {/* Section 9 — Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery Support
              </h2>


              <p className="text-gray-700">
                Dr. Priyanka Pachauri’s approach prioritises normal vaginal delivery wherever it is safe for mother and baby. Antenatal visits help build the confidence and physical readiness for this. If a caesarean becomes necessary, the reasons are explained clearly so you can decide without confusion or pressure.
              </p>
            </div>


            {/* Section 10 — High-Risk Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Care
              </h2>


              <p className="text-gray-700 mb-4">
                Some pregnancies need closer follow-up. You may be considered high-risk if you have:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gestational or pre-existing diabetes</li>
                <li>High blood pressure or pre-eclampsia</li>
                <li>Thyroid disorders</li>
                <li>A history of miscarriage or stillbirth</li>
                <li>A previous caesarean section</li>
                <li>Twin or multiple pregnancy</li>
                <li>Pregnancy after IVF or long-term infertility</li>
                <li>Pregnancy at an older maternal age</li>
              </ul>


              <p className="text-gray-700 mt-4">
                High-risk does not mean something will go wrong. It means you will be watched more carefully, with more frequent visits and scans, so that any problem is handled promptly.
              </p>
            </div>


            {/* Section 11 — Nutrition */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Nutrition During Pregnancy
              </h2>


              <p className="text-gray-700 mb-4">
                Good nutrition supports your baby’s growth and protects your own health. General principles include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Eating a balanced diet with vegetables, fruit, pulses, grains, dairy, and adequate protein</li>
                <li>Taking iron, folic acid, and calcium as prescribed</li>
                <li>Staying well hydrated</li>
                <li>Avoiding raw or undercooked foods and unpasteurised dairy</li>
                <li>Limiting caffeine</li>
                <li>Avoiding smoking, alcohol, and tobacco in any form</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Your doctor will tailor advice to your weight, blood tests, and any conditions such as anaemia or diabetes. Please avoid self-medicating or starting herbal remedies without asking first.
              </p>
            </div>


            {/* Section 12 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional Wellbeing in Pregnancy
              </h2>


              <p className="text-gray-700">
                Hormonal changes, physical discomfort, and worry about the future can affect mood. Feeling anxious or tearful at times is common, but persistent sadness, panic, or loss of interest in daily life deserves attention. Talk to your doctor openly. Support is available, and asking for it is a sign of strength.
              </p>
            </div>


            {/* Section 13 — Postnatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postnatal and Newborn Care
              </h2>


              <p className="text-gray-700">
                Antenatal care leads naturally into postnatal care. After delivery, the clinic provides follow-up on recovery, breastfeeding guidance, and newborn care. Paediatric consultations and vaccinations are also available, so mother and baby can continue with the same trusted team.
              </p>
            </div>


            {/* Section 14 — What to Bring */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Bring to Your Antenatal Appointment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Previous medical records, scans, and test reports</li>
                <li>A list of current medicines and supplements</li>
                <li>The date of your last menstrual period</li>
                <li>Questions or symptoms you want to discuss</li>
                <li>A family member for support, if you wish</li>
              </ul>
            </div>


            {/* Section 15 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Clinic Address and Appointments
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


            {/* Section 16 — FAQs */}
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