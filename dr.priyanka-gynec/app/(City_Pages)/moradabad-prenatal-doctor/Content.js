import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function MoradabadPrenatalDoctor() {
  const faqs = [
    {
      q: "When should I visit a prenatal doctor after a positive pregnancy test?",
      a: "Ideally within 6 to 8 weeks of your last period, or as soon as the test is positive.",
    },
    {
      q: "How many antenatal visits are needed during pregnancy?",
      a: "Usually monthly until 28 weeks, every two weeks until 36 weeks, then weekly.",
    },
    {
      q: "Is 3D/4D ultrasound safe?",
      a: "Yes, ultrasound is safe when performed by a qualified doctor for medical reasons.",
    },
    {
      q: "Which doctor is best for prenatal care in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a trusted choice for antenatal and high-risk care.",
    },
    {
      q: "Can I have a normal delivery in Moradabad?",
      a: "Yes, normal delivery is encouraged when it is safe for you and your baby.",
    },
    {
      q: "What is the anomaly scan and when is it done?",
      a: "It is a detailed scan at 18 to 20 weeks that checks your baby's organs and structure.",
    },
    {
      q: "What is a high-risk pregnancy?",
      a: "It is one with a higher chance of complications, such as diabetes, hypertension or twins.",
    },
    {
      q: "Do I need folic acid before pregnancy?",
      a: "Yes, it is best started before conception and continued through early pregnancy.",
    },
    {
      q: "Does the clinic provide newborn and paediatric care?",
      a: "Yes, paediatric consultations, vaccinations and newborn care are available.",
    },
  ];


  return (
    <main className="bg-white">
      <Banner />


      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Prenatal Doctor: Complete Guide to Safe Pregnancy
                Care with Dr. Priyanka Pachauri
              </h1>


              <p className="mb-4 text-gray-700">
                A positive pregnancy test brings joy, and many questions with it.
                Which tests do you need? How often should you visit the doctor?
                What should you eat? How do you know if something is wrong? The
                best way to answer these is to choose the right Moradabad
                prenatal doctor early in your pregnancy.
              </p>


              <p className="mb-4 text-gray-700">
                At Dr. Priyanka Gynaec, led by Dr. Priyanka Pachauri, expectant
                mothers receive structured, empathetic and technology-supported
                antenatal care. This guide explains what prenatal care involves,
                why it matters, and how to choose the right doctor in Moradabad.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Prenatal Doctor?
              </h2>


              <p className="mb-4 text-gray-700">
                A prenatal (antenatal) doctor is an obstetrician-gynaecologist
                who looks after a woman&apos;s health and her baby&apos;s
                development from conception until delivery.
              </p>


              <p className="text-gray-700">A prenatal doctor typically:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirms and dates your pregnancy</li>
                <li>Monitors your baby&apos;s growth and heartbeat</li>
                <li>
                  Orders and interprets blood tests and ultrasound scans
                </li>
                <li>
                  Screens for conditions such as gestational diabetes, high
                  blood pressure and anaemia
                </li>
                <li>
                  Advises on nutrition, supplements, exercise and vaccinations
                </li>
                <li>Identifies high-risk pregnancies early</li>
                <li>Prepares you for labour, delivery and newborn care</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Prenatal Care Is Important
              </h2>


              <p className="mb-4 text-gray-700">
                Regular antenatal check-ups are the single most effective way to
                reduce pregnancy complications. Many problems, such as
                preeclampsia, gestational diabetes or poor fetal growth, show
                few early symptoms but can be caught with routine screening.
              </p>


              <p className="mb-4 text-gray-700">
                Key benefits of regular prenatal care:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Early detection of complications before they become serious
                </li>
                <li>
                  Lower risk of premature birth and low birth weight
                </li>
                <li>
                  Better management of existing conditions like thyroid
                  disorders, diabetes or hypertension
                </li>
                <li>Timely vaccinations and supplements</li>
                <li>Reduced anxiety through regular guidance and reassurance</li>
                <li>A higher chance of a safe normal delivery</li>
                <li>Better postnatal recovery and breastfeeding support</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Meet Your Moradabad Prenatal Doctor: Dr. Priyanka Pachauri
              </h2>


              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                antenatal and postnatal care, high-risk pregnancy management,
                laparoscopic gynaecological surgery and fertility care. Her
                clinic&apos;s philosophy is &quot;Her Health First&quot;:
                listening to the patient first, then applying expertise and
                technology with patience and empathy.
              </p>


              <p className="mb-4 text-gray-700">
                What patients value about the practice:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear explanations at every step of pregnancy</li>
                <li>
                  A calm, comfortable and respectful consultation experience
                </li>
                <li>
                  Continuity of care from the first visit through follow-ups
                </li>
                <li>
                  Focus on safe motherhood and, wherever medically possible,
                  normal delivery
                </li>
                <li>
                  Referrals and recommendations from families who return for the
                  next pregnancy
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Complete Pregnancy Services at Dr. Priyanka Gynaec
              </h2>


              <p className="mb-4 text-gray-700">
                The clinic offers care for every stage of a woman&apos;s
                journey, from planning a baby to caring for the newborn.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Antenatal and maternity services:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Structured antenatal check-ups and screenings</li>
                <li>
                  Pregnancy and birthing care with personalised birth planning
                </li>
                <li>Normal (vaginal) delivery with gentle, supportive care</li>
                <li>High-risk pregnancy monitoring</li>
                <li>Postnatal care for mother and baby</li>
                <li>Paediatric consultations, vaccinations and newborn care</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Related women&apos;s health services:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF treatment for couples planning pregnancy</li>
                <li>3D laparoscopic gynaecological surgery</li>
                <li>Diagnostic hysteroscopy and polyp removal</li>
                <li>
                  Treatment for PCOS, fibroids, endometriosis and menstrual
                  disorders
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                This means you do not need to visit different clinics. Your
                pregnancy, delivery and baby&apos;s first check-ups can be
                managed with one trusted team.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Used for Safer Pregnancy Monitoring
              </h2>


              <p className="mb-4 text-gray-700">
                Modern equipment helps a doctor assess your baby&apos;s growth
                and spot concerns early.
              </p>


              <p className="mb-4 text-gray-700">
                Technology available at the clinic:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D and 4D ultrasound (Voluson E22 series) for detailed images
                  of the baby
                </li>
                <li>
                  High-definition 3D laparoscopy for surgical care when needed
                </li>
                <li>
                  Time-lapse embryo imaging and AI-based semen analysis for
                  fertility patients
                </li>
              </ul>


              <p className="text-gray-700">
                Advanced scans give clearer anatomical detail, so any abnormality
                can be identified and discussed in good time.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Trimester-by-Trimester Prenatal Care Guide
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester (Weeks 1 to 12)
              </h3>
              <p className="mb-4 text-gray-700">
                This is when your baby&apos;s organs begin to form, so early
                care matters most.
              </p>
              <p className="mb-2 font-medium text-gray-900">What to expect:</p>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  First consultation as soon as pregnancy is confirmed, ideally
                  by 6 to 8 weeks
                </li>
                <li>
                  Dating ultrasound to confirm the due date and heartbeat
                </li>
                <li>
                  Blood tests: haemoglobin, blood group and Rh factor, thyroid,
                  blood sugar, HIV, hepatitis B and urine tests
                </li>
                <li>Nuchal translucency (NT) scan between 11 and 13 weeks</li>
                <li>Double marker screening, when advised</li>
              </ul>
              <p className="mb-2 font-medium text-gray-900">Your to-do list:</p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Start folic acid as prescribed by your doctor</li>
                <li>Manage nausea with small, frequent meals</li>
                <li>
                  Avoid alcohol, smoking, tobacco and unprescribed medicines
                </li>
                <li>Report any bleeding or severe abdominal pain immediately</li>
              </ul>


              <h3 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
                Second Trimester (Weeks 13 to 27)
              </h3>
              <p className="mb-4 text-gray-700">
                Many women feel better during this phase, and you will begin to
                feel your baby move.
              </p>
              <p className="mb-2 font-medium text-gray-900">What to expect:</p>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Monthly check-ups</li>
                <li>
                  Anomaly (level II) scan at 18 to 20 weeks to examine the
                  baby&apos;s organs in detail
                </li>
                <li>Quadruple marker test, when advised</li>
                <li>
                  Glucose tolerance test between 24 and 28 weeks for gestational
                  diabetes
                </li>
                <li>Iron and calcium supplements</li>
                <li>Tetanus vaccination as per schedule</li>
              </ul>
              <p className="mb-2 font-medium text-gray-900">Your to-do list:</p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat a balanced diet rich in protein, greens, fruit and dairy
                </li>
                <li>Stay hydrated and walk daily, unless advised otherwise</li>
                <li>Sleep on your left side as the pregnancy advances</li>
                <li>
                  Begin gentle antenatal exercises or yoga with your
                  doctor&apos;s approval
                </li>
              </ul>


              <h3 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
                Third Trimester (Weeks 28 to 40)
              </h3>
              <p className="mb-4 text-gray-700">
                The focus now shifts to the baby&apos;s growth and your
                preparation for delivery.
              </p>
              <p className="mb-2 font-medium text-gray-900">What to expect:</p>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Check-ups every two weeks, then weekly near the due date
                </li>
                <li>
                  Growth scans to check the baby&apos;s weight, position and
                  amniotic fluid
                </li>
                <li>Blood pressure and weight monitoring</li>
                <li>
                  Discussion of the birth plan: normal delivery, assisted
                  delivery or caesarean when medically needed
                </li>
                <li>
                  Counselling on labour signs, pain relief options and
                  breastfeeding
                </li>
              </ul>
              <p className="mb-2 font-medium text-gray-900">Your to-do list:</p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Count your baby&apos;s kicks daily</li>
                <li>Pack your hospital bag in advance</li>
                <li>Learn the signs of labour</li>
                <li>Keep emergency contact numbers ready</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Antenatal Tests and Scans: A Quick Overview
              </h2>


              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 text-left text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Stage
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Test or Scan
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        6–9 weeks
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Dating scan
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Confirms pregnancy, heartbeat, due date
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        11–13+6 weeks
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        NT scan
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Screens for chromosomal risk
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        18–20 weeks
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Anomaly scan
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Checks baby&apos;s organs and structure
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        24–28 weeks
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Glucose tolerance test
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Detects gestational diabetes
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        28–36 weeks
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Growth scan
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Checks weight, position, fluid
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Throughout
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Blood and urine tests
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Detects anaemia, infection, thyroid issues
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>


              <p className="mt-4 text-gray-700">
                Your doctor will tailor this schedule to your individual health
                and risk profile.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                High-Risk Pregnancy Care in Moradabad
              </h2>


              <p className="mb-4 text-gray-700">
                Some pregnancies need closer monitoring, and with proper care
                most high-risk pregnancies can still end well.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Conditions that may make a pregnancy high-risk:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maternal age below 18 or above 35</li>
                <li>Twin or multiple pregnancy</li>
                <li>Gestational or pre-existing diabetes</li>
                <li>High blood pressure or preeclampsia</li>
                <li>Thyroid disorders</li>
                <li>Previous miscarriage, stillbirth or caesarean</li>
                <li>Pregnancy after IVF or fertility treatment</li>
                <li>Low-lying placenta</li>
                <li>Anaemia or Rh-negative blood group</li>
                <li>Heart, kidney or autoimmune disease</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How high-risk care is managed:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits and scans</li>
                <li>Individualised medication and diet plans</li>
                <li>
                  Close monitoring of the baby&apos;s growth and well-being
                </li>
                <li>
                  A clear delivery plan made well in advance
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Nutrition: What to Eat and What to Avoid
              </h2>


              <p className="mb-4 text-gray-700">
                Good nutrition supports your baby&apos;s development and keeps
                you strong.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to include:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Green leafy vegetables, which provide iron and folate
                </li>
                <li>
                  Pulses, lentils, eggs, paneer and curd for protein and calcium
                </li>
                <li>Seasonal fruits and nuts</li>
                <li>Whole grains such as roti, oats and brown rice</li>
                <li>
                  Plenty of water, coconut water and home-made buttermilk
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods and habits to avoid:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Raw or undercooked meat, eggs and unpasteurised dairy
                </li>
                <li>Excess caffeine</li>
                <li>Papaya (raw) and pineapple in large amounts</li>
                <li>Street food that may not be hygienic</li>
                <li>Alcohol, tobacco and self-medication</li>
                <li>Skipping meals</li>
              </ul>


              <p className="text-gray-700">
                Your doctor will recommend iron, calcium, folic acid and vitamin
                D supplements according to your blood reports.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: When to Call Your Doctor Immediately
              </h2>


              <p className="mb-4 text-gray-700">
                Do not wait for your next scheduled appointment if you notice
                any of the following:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal bleeding or leaking of fluid</li>
                <li>Severe or persistent abdominal pain</li>
                <li>
                  Severe headache, blurred vision or sudden swelling of face and
                  hands
                </li>
                <li>Reduced or absent fetal movement</li>
                <li>Fever, burning urination or persistent vomiting</li>
                <li>Regular contractions before 37 weeks</li>
                <li>Breathlessness or chest pain</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Delivery: Normal Delivery and Birth Planning
              </h2>


              <p className="mb-4 text-gray-700">
                Dr. Priyanka&apos;s approach prioritises natural, normal vaginal
                delivery when it is safe for both mother and baby. A caesarean
                is advised only when medically necessary.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Steps to prepare:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Attend all antenatal visits and scans</li>
                <li>Practise breathing and relaxation techniques</li>
                <li>Stay active with doctor-approved exercise</li>
                <li>Discuss pain relief options in advance</li>
                <li>Choose a birth companion and keep documents ready</li>
                <li>Understand the signs of true labour</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After delivery, you will receive:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Breastfeeding guidance</li>
                <li>Newborn care and vaccination schedule</li>
                <li>Postnatal check-ups and recovery advice</li>
                <li>Paediatric support under the same clinic</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Best Prenatal Doctor in Moradabad
              </h2>


              <p className="mb-4 text-gray-700">
                Use this checklist when comparing doctors:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Qualifications and experience in obstetrics and high-risk care
                </li>
                <li>Availability for emergencies and questions</li>
                <li>
                  Communication style: does the doctor explain things clearly
                  and listen?
                </li>
                <li>
                  Technology: access to 3D/4D ultrasound and modern diagnostics
                </li>
                <li>
                  Services under one roof: antenatal, delivery, paediatric and
                  postnatal care
                </li>
                <li>Patient reviews and word-of-mouth referrals</li>
                <li>Convenient location with good access in Moradabad</li>
                <li>A comfortable, respectful environment</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Choose Dr. Priyanka Gynaec
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Empathetic care that places the mother&apos;s comfort and
                  choices first
                </li>
                <li>
                  Complete journey support: fertility, pregnancy, delivery and
                  newborn care
                </li>
                <li>Advanced 3D/4D imaging for detailed monitoring</li>
                <li>Strong focus on safe, normal delivery</li>
                <li>
                  Expertise in high-risk pregnancies and gynaecological surgery
                </li>
                <li>
                  A trusted reputation built on mothers referring daughters and
                  friends
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Prenatal Consultation Today
              </h2>


              <p className="mb-4 text-gray-700">
                Do not delay your first antenatal visit. Early care gives you
                and your baby the best start.
              </p>


              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
                      <a
                        href="tel:+919079765578"
                        className="hover:underline"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
                      </a>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh, 244001
                      </p>
                    </div>
                  </div>
                </div>


                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </Link>


                  <Link
                    href="/services"
                    className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </section>


            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>


              <div className="space-y-5">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>


          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
