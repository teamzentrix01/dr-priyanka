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


export default function AntenatalCareDoctorNearRampur() {
  const faqs = [
    {
      q: "Is Dr. Priyanka Gynaec located in Rampur?",
      a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Rampur and nearby areas travel there for antenatal care.",
    },
    {
      q: "When should I have my first antenatal visit?",
      a: "As soon as your pregnancy test is positive, ideally within the first 6 to 8 weeks.",
    },
    {
      q: "How often are antenatal checkups needed?",
      a: "Usually monthly in early and mid-pregnancy, becoming more frequent in the last trimester. Your doctor will set a schedule based on your health and risk factors.",
    },
    {
      q: "Can some checks be done closer to home?",
      a: "Some routine checks and tests may be possible locally. Ask your doctor which ones, and carry the reports to the clinic.",
    },
    {
      q: "Does the clinic have 3D/4D ultrasound?",
      a: "Yes. The clinic uses a Voluson E22 3D and 4D ultrasound machine. Fetal sex determination is prohibited by law in India and is not performed.",
    },
    {
      q: "Can the clinic manage high-risk pregnancies?",
      a: "Yes. High-risk pregnancies are monitored with closer follow-up, appropriate tests, and timely decisions.",
    },
    {
      q: "Is normal delivery possible?",
      a: "Yes. Normal delivery is prioritised whenever it is safe for mother and baby. A caesarean is advised only when medically necessary.",
    },
    {
      q: "Is it safe to travel during pregnancy?",
      a: "It depends on your stage and health. Ask your doctor, carry your antenatal card, take breaks, and know the warning signs that need urgent care.",
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Previous prescriptions, blood tests, ultrasounds, a list of medicines, and your questions. If it is a follow-up, bring your antenatal card.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the “Book Appointment” option on the official website.",
    },
    {
      q: "What should I do in an emergency during pregnancy?",
      a: "Go to the nearest emergency facility immediately for vaginal bleeding, leaking fluid, severe pain, reduced baby movements, severe headache, high fever, or breathlessness. Do not delay care to travel to another city.",
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
                Antenatal Care Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad
              </h1>


              <p className="text-gray-700 mb-4">
                Choosing the doctor who will guide you through pregnancy is one of the most important decisions of this period. You want someone who listens, explains, and notices problems early. If you are searching for an antenatal care doctor near Rampur, Dr. Priyanka Pachauri of Dr. Priyanka Gynaec in neighbouring Moradabad is an option to consider.
              </p>


              <p className="text-gray-700 mb-4">
                To be clear, the clinic is located in Moradabad, not in Rampur. Women from Rampur and nearby areas travel there for pregnancy care, so this page also explains how to plan visits sensibly. The clinic’s philosophy is &quot;Her Health First.&quot; You are listened to, informed, and never rushed.
              </p>
            </div>


            {/* Section 2 — What Is Antenatal Care? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Antenatal Care?
              </h2>


              <p className="text-gray-700 mb-4">
                Antenatal care, also called prenatal care, is the medical care a woman receives from the time pregnancy is confirmed until delivery. It includes examinations, blood tests, ultrasound scans, nutrition advice, and emotional support. Its goals are to:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep the mother healthy</li>
                <li>Monitor the baby’s growth and development</li>
                <li>Detect complications early</li>
                <li>Prepare for labour and delivery</li>
                <li>Support a safe start to motherhood</li>
              </ul>
            </div>


            {/* Section 3 — Why Regular Checkups Matter */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Regular Checkups Matter
              </h2>


              <p className="text-gray-700">
                Conditions such as gestational diabetes, high blood pressure, anaemia, and thyroid imbalance can develop without obvious symptoms. Regular visits are often the only way to catch them in time. They also give you the chance to ask questions, adjust your diet and supplements, and build a relationship with your doctor before labour begins.
              </p>
            </div>


            {/* Section 4 — When Should You Start? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Start?
              </h2>


              <p className="text-gray-700">
                Book your first visit as soon as your pregnancy test is positive, ideally within the first 6 to 8 weeks. Early registration allows the doctor to confirm the pregnancy, estimate the due date, begin folic acid and other supplements, and identify any risk factors. If you have diabetes, hypertension, thyroid disease, or a history of miscarriage, a consultation before conception is even better.
              </p>
            </div>


            {/* Section 5 — Antenatal Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Antenatal Services at Dr. Priyanka Gynaec
              </h2>


              <p className="text-gray-700 mb-4">
                The clinic offers structured prenatal care and screenings throughout pregnancy:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pregnancy confirmation and early registration</li>
                <li>Trimester-wise consultations</li>
                <li>Ultrasound on a Voluson E22 3D and 4D machine</li>
                <li>Routine blood and urine tests</li>
                <li>Screening for gestational diabetes, thyroid problems, and anaemia</li>
                <li>Blood pressure and weight monitoring</li>
                <li>Nutrition and lifestyle counselling</li>
                <li>High-risk pregnancy monitoring</li>
                <li>Labour and delivery preparation</li>
                <li>Postnatal follow-up, newborn care, and vaccinations</li>
              </ul>
            </div>


            {/* Section 6 — Trimester by Trimester */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Your Pregnancy, Trimester by Trimester
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    First Trimester (Weeks 1 to 12)
                  </h3>
                  <p className="text-gray-700">
                    Visits focus on confirming the pregnancy and starting healthy habits. Expect a dating scan, medical history, basic blood tests, supplements, and advice on nausea and tiredness. Tell your doctor immediately about heavy bleeding, severe abdominal pain, or persistent vomiting.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Second Trimester (Weeks 13 to 27)
                  </h3>
                  <p className="text-gray-700">
                    Many women feel better during this phase. Visits usually include routine checks, a detailed anomaly scan around the middle of pregnancy, screening for gestational diabetes, and guidance on safe exercise and sleep.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Third Trimester (Weeks 28 to Delivery)
                  </h3>
                  <p className="text-gray-700">
                    Visits become more frequent. Growth scans check the baby’s size, position, and fluid, and your doctor monitors blood pressure and swelling. You will also discuss baby movement counting, birth planning, and newborn care.
                  </p>
                </div>
              </div>


              <p className="text-gray-700 mt-4">
                Your doctor will set a schedule based on your health and any risk factors.
              </p>
            </div>


            {/* Section 7 — Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery and Safe Motherhood
              </h2>


              <p className="text-gray-700">
                Dr. Priyanka Pachauri prioritises normal vaginal delivery wherever it is safe for mother and baby. Antenatal visits help build physical and emotional readiness. If a caesarean becomes necessary, the reasons are explained clearly so you feel included in the decision.
              </p>
            </div>


            {/* Section 8 — High-Risk Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy Care
              </h2>


              <p className="text-gray-700 mb-4">
                A pregnancy may be considered high-risk if you have:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Diabetes, high blood pressure, or thyroid disease</li>
                <li>A history of miscarriage, stillbirth, or preterm birth</li>
                <li>A previous caesarean</li>
                <li>Twin or multiple pregnancy</li>
                <li>Pregnancy after IVF or long-standing infertility</li>
                <li>Pregnancy at an older maternal age</li>
              </ul>


              <p className="text-gray-700 mt-4">
                High-risk does not mean something will go wrong. It means closer follow-up, more scans, and timely decisions. With careful monitoring, many women with high-risk pregnancies deliver healthy babies.
              </p>
            </div>


            {/* Section 9 — Planning Visits from Rampur */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Planning Antenatal Visits When You Live in Rampur
              </h2>


              <p className="text-gray-700 mb-4">
                Regular visits matter, so a little planning helps you stay consistent.
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Ask These Questions at Your First Visit
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Which visits and scans must be done at the clinic?</li>
                    <li>Which routine checks, such as blood pressure, weight, or certain blood tests, can be done closer to home if the doctor agrees?</li>
                    <li>How often will I need to come, and does this change in the last trimester?</li>
                    <li>What should I do if I have a concern between visits?</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Keep Everything Together
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Carry your antenatal card, all scan reports, and blood test results to every visit</li>
                    <li>Take photos of reports on your phone as a backup</li>
                    <li>Keep a note of your doctor’s instructions and next appointment date</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Plan the Journey
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Book appointments in advance and confirm timings with the clinic</li>
                    <li>Leave early to avoid rushing</li>
                    <li>Travel with a family member where possible</li>
                    <li>Carry water and light snacks, and take breaks on long journeys</li>
                    <li>Ask your doctor whether any travel limits apply as your pregnancy advances</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 10 — Nutrition */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Nutrition and Daily Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Eat balanced meals with vegetables, fruit, pulses, grains, dairy, and adequate protein</li>
                <li>Take iron, folic acid, and calcium exactly as prescribed</li>
                <li>Drink plenty of fluids</li>
                <li>Avoid smoking, alcohol, and tobacco, and avoid self-medication</li>
                <li>Ask your doctor before starting any herbal remedy or new exercise</li>
                <li>Rest well and manage stress</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Your doctor will tailor advice to your weight, blood tests, and any conditions.
              </p>
            </div>


            {/* Section 11 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs: Do Not Wait for Your Next Appointment
              </h2>


              <p className="text-gray-700 mb-4">
                Seek urgent medical care if you have:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Vaginal bleeding</li>
                <li>Leaking fluid</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Reduced or absent baby movements</li>
                <li>Severe headache, blurred vision, or sudden swelling of the face or hands</li>
                <li>High fever</li>
                <li>Regular painful contractions before your due date</li>
                <li>Breathlessness or chest pain</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Because you live outside Moradabad, identify the nearest hospital with emergency and delivery facilities to your home, and keep its location and a contact number handy. In an emergency, go to the nearest emergency facility immediately. Do not delay care to travel to another city.
              </p>
            </div>


            {/* Section 12 — Preparing for Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Delivery from Rampur
              </h2>


              <p className="text-gray-700 mb-4">
                As your due date nears, talk to your doctor about:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>When to leave home once labour begins or fluid leaks</li>
                <li>Where you plan to deliver and how you will reach it</li>
                <li>Who will accompany you</li>
                <li>What to pack in your hospital bag, including your antenatal file, identification, comfortable clothes, sanitary pads, and baby clothes</li>
                <li>Arranging transport in advance</li>
              </ul>


              <p className="text-gray-700 mt-4">
                A clear plan reduces stress for you and your family.
              </p>
            </div>


            {/* Section 13 — Postnatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postnatal and Newborn Care
              </h2>


              <p className="text-gray-700">
                Care continues after delivery. The clinic supports recovery, breastfeeding, contraception counselling, and emotional wellbeing. Paediatric consultations, vaccinations, and newborn care are available, so mother and baby can continue with the same trusted team.
              </p>
            </div>


            {/* Section 14 — Why Women Trust */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Expertise with heart:</strong> Training in laparoscopy, fertility treatment, and women’s health, with a compassionate approach</li>
                <li><strong>Continuity you can count on:</strong> An integrated team that knows your history</li>
                <li><strong>Advanced imaging:</strong> Detailed assessment with a Voluson E22 3D/4D ultrasound machine</li>
                <li><strong>Complete care in one place:</strong> Fertility, pregnancy, delivery, and paediatric services</li>
                <li><strong>Honest guidance:</strong> Advice based on what you truly need</li>
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


                  <div className="flex items-start gap-3">
                    <MessageCircle size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Social Media</p>
                      <div className="space-y-1">
                        <a
                          href="https://www.instagram.com/dr.priyanka.gynae/"
                          className="block hover:underline text-black"
                        >
                          Instagram: @dr.priyanka.gynae
                        </a>
                        <a
                          href="https://www.facebook.com/priyanka.pachauri.790080"
                          className="block hover:underline text-black"
                        >
                          Facebook: priyanka.pachauri.790080
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