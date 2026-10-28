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


export default function AntenatalCareDoctor() {
  const faqs = [
    {
      q: "How many antenatal visits are needed?",
      a: "Most women attend around ten to twelve visits, though high-risk pregnancies may need more frequent monitoring.",
    },
    {
      q: "When should I start antenatal care?",
      a: "Ideally, antenatal care should begin as soon as pregnancy is confirmed, or even before conception. If you are already pregnant, book your first visit within the first eight to twelve weeks.",
    },
    {
      q: "Can I travel during pregnancy?",
      a: "Short and comfortable trips are usually fine during the second trimester. However, always check with your doctor before planning long journeys.",
    },
    {
      q: "Is it safe to take iron and calcium tablets together?",
      a: "They are usually taken at different times of the day for better absorption. Follow the schedule advised by your doctor.",
    },
    {
      q: "When should I go to the hospital for delivery?",
      a: "Go to the hospital when you have regular contractions that become stronger and closer together, when your water breaks, when bleeding occurs, or when baby movements reduce.",
    },
    {
      q: "Can I continue working while pregnant?",
      a: "Many women continue working during pregnancy with suitable adjustments. Your doctor can advise based on your job type, health condition, and pregnancy progress.",
    },
    {
      q: "What is a high-risk pregnancy?",
      a: "A high-risk pregnancy needs closer monitoring due to factors such as diabetes, hypertension, thyroid disorders, twins, previous complications, anaemia, or placenta-related problems.",
    },
    {
      q: "Which tests are important during pregnancy?",
      a: "Important tests may include blood group and Rh factor, haemoglobin, blood sugar, thyroid screening, urine tests, NT scan, anomaly scan, growth scans, and glucose screening for gestational diabetes.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering antenatal care, pregnancy monitoring, and high-risk pregnancy management.",
    },
    {
      q: "What facilities are available for antenatal care at Dr. Priyanka Pachauri’s clinic?",
      a: "The clinic provides pregnancy check-ups, ultrasound imaging, laboratory support, nutrition guidance, pregnancy monitoring, and guidance for safe delivery and postnatal recovery.",
    },
    {
      q: "How can I book an antenatal consultation in Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic’s official website to schedule an antenatal consultation with Dr. Priyanka Pachauri.",
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
                Antenatal Care Doctor on Delhi Road Moradabad: Supporting You Through Every Stage of Pregnancy
              </h1>


              <p className="text-gray-700 mb-4">
                A positive pregnancy test brings joy, and often a long list of questions too. What should I eat? Which tests are needed? How do I know everything is going well? Regular medical supervision answers these questions and protects both mother and baby. If you are looking for an antenatal care doctor on Delhi Road Moradabad, this guide explains what antenatal care involves, how the visits are planned, and how to choose a doctor you can trust.
              </p>


              <p className="text-gray-700">
                This guide covers the purpose of antenatal care, the recommended visit schedule, important tests, nutrition, warning signs, high-risk pregnancy care, and tips for choosing the right doctor.
              </p>
            </div>


            {/* Section 2 — What Is Antenatal Care? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Antenatal Care?
              </h2>


              <p className="text-gray-700 mb-4">
                Antenatal care, also called prenatal care or ANC, is the medical support a woman receives from the time pregnancy is confirmed until delivery. It includes check-ups, scans, blood tests, vaccinations, nutrition guidance, and counselling on labour and newborn care.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep the mother healthy throughout pregnancy</li>
                <li>Monitor the baby’s growth and development</li>
                <li>Detect problems early, when they are easier to manage</li>
                <li>Prepare the family for a safe delivery</li>
                <li>Support recovery and breastfeeding after birth</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Research and clinical experience consistently show that women who attend regular antenatal visits face fewer avoidable complications.
              </p>
            </div>


            {/* Section 3 — Who Provides Antenatal Care? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Provides Antenatal Care?
              </h2>


              <p className="text-gray-700">
                The main provider is usually an obstetrician-gynaecologist, a doctor with postgraduate training in pregnancy and childbirth. Depending on the facility, you may also meet nurses, midwives, sonologists, dieticians, and paediatricians who support different parts of your care.
              </p>
            </div>


            {/* Section 4 — Why Delhi Road Is a Practical Choice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Delhi Road Is a Practical Choice
              </h2>


              <p className="text-gray-700">
                Pregnancy involves frequent travel for visits, scans, and lab work, and sometimes urgent trips. Delhi Road is well connected within Moradabad, and many clinics, nursing homes, diagnostic labs, and pharmacies are located nearby. This reduces travel stress and makes it easier for family members to accompany you. Quick access to a hospital also gives peace of mind in the later months.
              </p>
            </div>


            {/* Section 5 — When Should You Start Antenatal Care? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Start Antenatal Care?
              </h2>


              <p className="text-gray-700 mb-4">
                Ideally, antenatal care should begin as soon as you know you are pregnant, or even before conception. A pre-pregnancy consultation allows the doctor to check your weight, blood pressure, thyroid function, blood sugar, and vaccination status. The doctor can also start folic acid early, which helps lower the risk of certain birth defects.
              </p>


              <p className="text-gray-700">
                If you have already conceived, do not delay. Book your first visit within the first eight to twelve weeks.
              </p>
            </div>


            {/* Section 6 — Antenatal Visit Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Antenatal Visit Schedule: What to Expect
              </h2>


              <p className="text-gray-700 mb-4">
                The exact schedule depends on your health and the progress of the pregnancy, but a common pattern includes the following stages.
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    First Trimester: Weeks 1 to 12
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Confirmation of pregnancy and estimation of the due date</li>
                    <li>Detailed medical, surgical, and family history</li>
                    <li>Blood group and Rh factor, haemoglobin, blood sugar, thyroid, and infection screening</li>
                    <li>Early ultrasound to confirm the heartbeat and location of the pregnancy</li>
                    <li>Folic acid, iron, and calcium supplements as advised</li>
                    <li>Guidance on nausea, vomiting, diet, and safe medicines</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Second Trimester: Weeks 13 to 27
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Monthly check-ups with weight and blood pressure monitoring</li>
                    <li>Detailed anomaly scan around weeks 18 to 20</li>
                    <li>Glucose screening for gestational diabetes, usually between weeks 24 and 28</li>
                    <li>Tetanus and other recommended vaccinations</li>
                    <li>Advice on exercise, sleep, and body changes</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Third Trimester: Weeks 28 to Delivery
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>More frequent visits, often every two weeks and later weekly</li>
                    <li>Growth scans and checks on the baby’s position</li>
                    <li>Monitoring for high blood pressure and swelling</li>
                    <li>Discussion of delivery options and birth preferences</li>
                    <li>Preparation of a hospital bag and emergency plan</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 7 — Important Tests and Scans */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Important Tests and Scans in Pregnancy
              </h2>


              <p className="text-gray-700 mb-4">
                Your doctor may recommend the following tests and scans, depending on your health and pregnancy progress:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dating and viability scan in early pregnancy</li>
                <li>NT scan between weeks 11 and 14 for early screening</li>
                <li>Double or quadruple marker tests when advised</li>
                <li>Anomaly scan to examine the baby’s organs and structure</li>
                <li>Growth scan to assess weight and amniotic fluid</li>
                <li>Complete blood count, blood sugar, and urine tests repeated at intervals</li>
                <li>Doppler studies in selected cases, such as high-risk pregnancies</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask your doctor why each test is advised and when the results will be ready. Understanding the purpose of each test reduces anxiety.
              </p>
            </div>


            {/* Section 8 — Nutrition During Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Nutrition During Pregnancy
              </h2>


              <p className="text-gray-700 mb-4">
                Good food supports your energy and your baby’s development. General guidance includes:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Eat small, frequent meals to manage nausea and acidity</li>
                <li>Include dal, pulses, eggs, paneer, milk, curd, and lean protein</li>
                <li>Add green leafy vegetables, seasonal fruits, nuts, and whole grains</li>
                <li>Choose iron-rich foods such as spinach, beetroot, dates, and jaggery</li>
                <li>Drink plenty of water and other clean fluids</li>
                <li>Limit tea and coffee, and avoid alcohol and tobacco completely</li>
                <li>Avoid raw or undercooked meat, unpasteurised dairy, and unwashed produce</li>
                <li>Follow your doctor’s advice on supplements instead of self-prescribing</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Every pregnancy is different, so ask for a diet plan suited to your weight, health conditions, and food preferences.
              </p>
            </div>


            {/* Section 9 — Staying Active and Comfortable */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Staying Active and Comfortable
              </h2>


              <p className="text-gray-700">
                Unless your doctor advises otherwise, gentle activity is beneficial. Walking, prenatal yoga, and simple stretching can ease back pain, improve sleep, and support healthy weight gain. Avoid heavy lifting, strenuous exercise, and anything that causes pain, dizziness, or breathlessness. Sleep on your side in later months, and rest whenever you need to.
              </p>
            </div>


            {/* Section 10 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs That Need Immediate Attention
              </h2>


              <p className="text-gray-700 mb-4">
                Contact your doctor or go to the nearest hospital without delay if you notice:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Vaginal bleeding of any amount</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Leaking of fluid</li>
                <li>Severe headache, blurred vision, or sudden swelling of the face and hands</li>
                <li>High fever or painful urination</li>
                <li>Reduced or absent baby movements</li>
                <li>Regular, painful contractions before the due date</li>
                <li>Persistent vomiting that prevents you from eating or drinking</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Never wait until the next scheduled appointment if something feels wrong.
              </p>
            </div>


            {/* Section 11 — High-Risk Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding High-Risk Pregnancy
              </h2>


              <p className="text-gray-700 mb-4">
                Some pregnancies need closer monitoring. Common factors include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Age below eighteen or above thirty-five</li>
                <li>Diabetes, thyroid disorders, hypertension, or heart disease</li>
                <li>Twin or multiple pregnancy</li>
                <li>Previous miscarriage, preterm birth, or caesarean section</li>
                <li>Anaemia, low or high body weight</li>
                <li>Problems with the placenta or baby’s growth</li>
              </ul>


              <p className="text-gray-700 mt-4">
                A high-risk label does not mean something will go wrong. It simply means extra care, more frequent visits, and a facility equipped for emergencies.
              </p>
            </div>


            {/* Section 12 — How to Choose an Antenatal Care Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose an Antenatal Care Doctor
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Qualifications and Registration
                  </h3>
                  <p className="text-gray-700">
                    Look for an MBBS with MD, MS, DGO, or DNB in Obstetrics and Gynaecology, along with a valid medical council registration.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experience With Deliveries
                  </h3>
                  <p className="text-gray-700">
                    Ask how many deliveries and complicated cases the doctor handles. Experience with both normal and caesarean births is valuable.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Facilities for Mother and Baby
                  </h3>
                  <p className="text-gray-700">
                    Check for an in-house or nearby ultrasound unit, laboratory, labour room, operation theatre, blood bank access, and newborn care arrangements.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Communication
                  </h3>
                  <p className="text-gray-700">
                    A good doctor explains clearly, answers questions patiently, and involves you in decisions. You should feel comfortable calling or messaging the clinic with concerns.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Transparency in Cost
                  </h3>
                  <p className="text-gray-700">
                    Ask for details of consultation fees, scan charges, delivery packages, and what is and is not included. Clear information prevents unpleasant surprises.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Emergency Readiness
                  </h3>
                  <p className="text-gray-700">
                    Find out who attends in an emergency, particularly at night, and which hospital you would be taken to if needed.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Reputation
                  </h3>
                  <p className="text-gray-700">
                    Speak with women who have delivered under the doctor’s care. Their honest experiences often reveal more than advertisements.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 13 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask at Your First Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Do you recommend normal delivery when possible?</li>
                <li>How often will I need to visit?</li>
                <li>Which tests are essential and which are optional?</li>
                <li>What medicines and supplements are safe for me?</li>
                <li>Whom do I call in an emergency?</li>
                <li>What delivery options and pain relief methods are available?</li>
              </ul>
            </div>


            {/* Section 14 — Preparing for Your Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Your Appointment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Carry your previous medical records and any old scan reports</li>
                <li>Note the first day of your last menstrual period</li>
                <li>List all medicines, vitamins, and herbal products you take</li>
                <li>Write down your questions and symptoms</li>
                <li>Bring your partner or a family member if you wish</li>
                <li>Wear comfortable clothing</li>
              </ul>
            </div>


            {/* Section 15 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional Wellbeing During Pregnancy
              </h2>


              <p className="text-gray-700">
                Pregnancy changes mood as well as body. Anxiety, irritability, and sudden tears are common, driven by hormones and the weight of new responsibility. Talk openly with your doctor if worries feel overwhelming or constant. Rest, supportive conversation, light activity, and sharing responsibilities at home all help. Emotional care is part of antenatal care, and asking for help is a sign of strength.
              </p>
            </div>


            {/* Section 16 — Myths About Pregnancy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Myths About Pregnancy Care
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Eating for two means doubling your food.”
                  </h3>
                  <p className="text-gray-700">
                    You need extra nutrition, but only a modest increase in calories.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Scans harm the baby.”
                  </h3>
                  <p className="text-gray-700">
                    Ultrasound used for medical reasons is considered safe.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Normal delivery is possible only if you avoid check-ups.”
                  </h3>
                  <p className="text-gray-700">
                    In truth, regular care helps identify the safest delivery route.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Heavy rest is best in all pregnancies.”
                  </h3>
                  <p className="text-gray-700">
                    Most women benefit from gentle activity unless advised otherwise.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Medicines should be avoided completely.”
                  </h3>
                  <p className="text-gray-700">
                    Some medicines are essential. Always follow your doctor’s guidance rather than stopping or starting anything yourself.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 17 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Antenatal Care Doctor in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                For women in Moradabad seeking structured pregnancy care, Dr. Priyanka Pachauri (MS in Obstetrics &amp; Gynaecology, FMAS, Advanced Infertility Fellowship) offers comprehensive antenatal services. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, reflects her patient-first approach, &quot;Her Health First&quot;, combining clear communication with advanced diagnostic and clinical support.
              </p>


              <p className="text-gray-700 mb-4">
                Her clinic provides antenatal and postnatal care, pregnancy monitoring, ultrasound support, laboratory investigations, nutrition guidance, and management of high-risk pregnancies. Regular check-ups help track the mother’s health, monitor the baby’s growth, identify concerns early, and prepare families for a safe delivery.
              </p>


              <p className="text-gray-700 mb-4">
                From early pregnancy confirmation to third-trimester monitoring and delivery planning, the clinic focuses on personalised care for every stage of pregnancy. This allows expectant mothers to receive consistent guidance and timely medical support without unnecessary delays or confusion.
              </p>
            </div>


            {/* Section 18 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Antenatal Consultation
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
                          +91 8979670705 (WhatsApp)
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


            {/* Section 19 — FAQs */}
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