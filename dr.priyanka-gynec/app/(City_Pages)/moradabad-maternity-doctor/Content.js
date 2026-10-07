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
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function MoradabadMaternityDoctor() {
  const faqs = [
    {
      q: "What does a maternity doctor do?",
      a: "They care for you before, during and after pregnancy and delivery.",
    },
    {
      q: "Who is the best maternity doctor in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a trusted choice.",
    },
    {
      q: "When should I first visit a maternity doctor?",
      a: "As soon as the pregnancy test is positive, ideally by 6 to 8 weeks.",
    },
    {
      q: "Is normal delivery possible at the clinic?",
      a: "Yes, normal delivery is encouraged whenever it is safe.",
    },
    {
      q: "Do you handle high-risk pregnancies?",
      a: "Yes, with closer monitoring and personalised care plans.",
    },
    {
      q: "Is newborn and paediatric care available?",
      a: "Yes, including consultations, vaccinations and newborn care.",
    },
    {
      q: "Do you offer 3D/4D ultrasound?",
      a: "Yes, the clinic uses a Voluson E22 series machine.",
    },
    {
      q: "When should I pack my hospital bag?",
      a: "Between 34 and 36 weeks of pregnancy.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Maternity Doctor: Care for Every Step of Your Journey to Motherhood
              </h1>

              <p className="mb-4 text-gray-700">
                Maternity is much more than nine months of pregnancy. It begins
                when you start planning a baby, continues through delivery, and
                extends into the weeks and months when you and your newborn are
                finding your rhythm. A good maternity doctor stays with you
                through all of it.
              </p>

              <p className="text-gray-700">
                If you are looking for a maternity doctor in Moradabad,
                Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers complete
                maternity care: preconception planning, antenatal check-ups,
                safe delivery, postnatal recovery and newborn support, all in a
                caring, patient-first setting. This guide explains what
                maternity care includes and how to choose the right doctor for
                your family.
              </p>
            </div>

            {/* Section 2 — What Does Maternity Doctor Do */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does a Maternity Doctor Do?
              </h2>

              <p className="mb-4 text-gray-700">
                A maternity doctor, usually an obstetrician-gynaecologist,
                manages the health of the mother and baby from before conception
                until after birth.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Core Responsibilities
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirm pregnancy and calculate the due date</li>
                <li>Monitor your health and your baby&apos;s growth</li>
                <li>Screen for complications such as diabetes, anaemia and high blood pressure</li>
                <li>Order scans and blood tests at the right time</li>
                <li>Guide nutrition, exercise, supplements and vaccinations</li>
                <li>Plan and conduct a safe delivery</li>
                <li>Support recovery, breastfeeding and family planning after birth</li>
              </ul>
            </div>

            {/* Section 3 — Four Stages */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Four Stages of Maternity Care
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the full picture helps you plan better.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Stage 1: Preconception
              </h3>

              <p className="mb-2 text-gray-700">
                This is the preparation phase before pregnancy.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A general health and gynaecological check-up</li>
                <li>Starting folic acid before conception</li>
                <li>Controlling diabetes, thyroid disease or high blood pressure</li>
                <li>Reviewing medicines for pregnancy safety</li>
                <li>Treating PCOS, fibroids or infections</li>
                <li>Updating vaccinations</li>
                <li>Advice on weight, diet and lifestyle</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Stage 2: Pregnancy (Antenatal Care)
              </h3>

              <p className="mb-2 text-gray-700">
                This covers the nine months of pregnancy.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early confirmation and dating scan</li>
                <li>Regular check-ups and blood pressure monitoring</li>
                <li>Blood and urine tests</li>
                <li>NT, anomaly and growth scans</li>
                <li>Gestational diabetes screening</li>
                <li>Diet, activity and supplement guidance</li>
                <li>Preparing mentally and physically for birth</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Stage 3: Labour and Delivery
              </h3>

              <p className="mb-2 text-gray-700">
                This is the birth itself.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Birth planning discussions in the third trimester</li>
                <li>Monitoring of labour and baby&apos;s heartbeat</li>
                <li>Pain relief options</li>
                <li>Support for normal delivery wherever safe</li>
                <li>Caesarean section only when medically needed</li>
                <li>Immediate newborn care and bonding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Stage 4: Postnatal Care
              </h3>

              <p className="mb-2 text-gray-700">
                This is the recovery and newborn period.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Check-ups for the mother&apos;s recovery</li>
                <li>Wound and stitch care</li>
                <li>Breastfeeding guidance</li>
                <li>Blood pressure and sugar follow-up</li>
                <li>Emotional health screening</li>
                <li>Contraception and family planning advice</li>
                <li>Newborn examination and vaccinations</li>
              </ul>
            </div>

            {/* Section 4 — Meet Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Meet Your Maternity Doctor: Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                antenatal and postnatal care, high-risk pregnancy management,
                laparoscopic surgery and fertility care. The clinic&apos;s guiding
                principle is &quot;Her Health First.&quot;
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What This Means for You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You are listened to before any plan is made</li>
                <li>Your comfort and choices are respected</li>
                <li>Advanced technology is used with empathy and patience</li>
                <li>Care is designed around your life, not around a rigid template</li>
              </ul>
            </div>

            {/* Section 5 — Maternity Services */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Maternity Services at Dr. Priyanka Gynaec
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnancy-Related Services
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Preconception counselling</li>
                <li>Structured antenatal care and screenings</li>
                <li>Pregnancy and birthing care</li>
                <li>Normal delivery support</li>
                <li>High-risk pregnancy management</li>
                <li>Postnatal care</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Newborn and Child Services
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Paediatric consultations</li>
                <li>Newborn examination and care</li>
                <li>Vaccinations as per schedule</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Related Women&apos;s Health Services
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF treatment</li>
                <li>PCOS and menstrual disorder treatment</li>
                <li>3D laparoscopic surgery for cysts, fibroids and endometriosis</li>
                <li>Diagnostic hysteroscopy and polypectomy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why It Helps to Have Everything in One Place
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your medical history stays with one team</li>
                <li>No need to repeat your story at every clinic</li>
                <li>Smooth shift from pregnancy to newborn care</li>
                <li>Easier follow-up and communication</li>
              </ul>
            </div>

            {/* Section 6 — Technology */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology That Supports Safer Maternity Care
              </h2>

              <p className="mb-4 text-gray-700">
                Accurate monitoring allows early detection of problems.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Facilities Highlighted at the Clinic
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>3D and 4D ultrasound (Voluson E22 series) for detailed baby imaging</li>
                <li>Anomaly and growth scans at the recommended weeks</li>
                <li>Doppler assessment when blood flow needs checking</li>
                <li>Full laboratory investigations</li>
                <li>High-definition 3D laparoscopy for related gynaecological care</li>
              </ul>
            </div>

            {/* Section 7 — Normal Delivery */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery: Our Approach to Birth
              </h2>

              <p className="mb-4 text-gray-700">
                Normal vaginal delivery is often the healthiest choice when
                there is no medical reason to avoid it.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of Normal Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Quicker recovery and shorter hospital stay</li>
                <li>Lower risk of surgical complications</li>
                <li>Earlier bonding and breastfeeding</li>
                <li>Easier future pregnancies</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How We Help You Prepare
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antenatal counselling in the third trimester</li>
                <li>Breathing and relaxation techniques</li>
                <li>Safe, doctor-approved exercise and yoga</li>
                <li>Clear explanation of labour stages and pain relief options</li>
                <li>Continuous monitoring during labour</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                When a Caesarean May Be Recommended
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Risk to the mother or baby</li>
                <li>Low-lying placenta covering the cervix</li>
                <li>Baby in an unsuitable position</li>
                <li>Labour not progressing safely</li>
                <li>Certain high-risk medical conditions</li>
              </ul>
            </div>

            {/* Section 8 — High-Risk Pregnancy */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Maternity Care for High-Risk Pregnancies
              </h2>

              <p className="mb-4 text-gray-700">
                A high-risk label does not mean a bad outcome. It means you will
                be watched more carefully.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Conditions That May Call for Special Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Age under 18 or over 35</li>
                <li>Diabetes, thyroid disease or hypertension</li>
                <li>Twin or multiple pregnancy</li>
                <li>Previous miscarriage, preterm birth or caesarean</li>
                <li>Pregnancy after IVF</li>
                <li>Rh-negative blood group</li>
                <li>Low-lying placenta</li>
                <li>Heart, kidney or autoimmune conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How Care Is Adjusted
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits and scans</li>
                <li>Personalised medicines and diet plans</li>
                <li>Close monitoring of the baby&apos;s growth</li>
                <li>Early and clear delivery planning</li>
              </ul>
            </div>

            {/* Section 9 — Nutrition */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Maternity Nutrition and Lifestyle Guide
              </h2>

              <p className="mb-4 text-gray-700">
                Healthy habits support you and your baby.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to Include
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Green leafy vegetables and seasonal fruits</li>
                <li>Pulses, eggs, paneer and curd</li>
                <li>Whole grains and nuts</li>
                <li>Plenty of water and home-made buttermilk</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Habits to Avoid
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Smoking, tobacco and alcohol</li>
                <li>Self-medication</li>
                <li>Raw or undercooked meat and eggs</li>
                <li>Skipping meals</li>
                <li>Heavy lifting or strenuous exertion</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Healthy Routines
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Walk daily as advised</li>
                <li>Sleep on your left side in later pregnancy</li>
                <li>Take iron, calcium, folic acid and vitamin D as prescribed</li>
                <li>Manage stress with rest and light yoga</li>
              </ul>
            </div>

            {/* Section 10 — Hospital Bag */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Hospital Bag Checklist
              </h2>

              <p className="mb-4 text-gray-700">
                Pack by the 34th to 36th week so you are never caught
                unprepared.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>ID, pregnancy file and all reports</li>
                <li>Comfortable, loose clothing and a nursing gown</li>
                <li>Nursing bras and breast pads</li>
                <li>Sanitary pads for postpartum bleeding</li>
                <li>Toiletries and slippers</li>
                <li>Phone, charger and a snack</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Your Baby
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Soft cotton wraps and caps</li>
                <li>Clothes and mittens</li>
                <li>Diapers and wipes</li>
                <li>Baby blankets</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Your Family
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Emergency contact numbers</li>
                <li>Important documents and payment details</li>
              </ul>
            </div>

            {/* Section 11 — Labour Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs of Labour: When to Call Your Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Knowing these signs reduces panic.
              </p>

              <p className="mb-2 text-gray-700">
                Contact the clinic or go to the hospital if you notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular, painful contractions that become stronger and closer</li>
                <li>Water breaking, with a gush or steady leak of fluid</li>
                <li>Bloody show or mucus discharge with pain</li>
                <li>Reduced baby movements</li>
                <li>Heavy vaginal bleeding</li>
                <li>Severe headache with blurred vision</li>
                <li>Fits or fainting</li>
                <li>Contractions before 37 weeks</li>
              </ul>
            </div>

            {/* Section 12 — Postnatal Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postnatal Care: The Fourth Trimester
              </h2>

              <p className="mb-4 text-gray-700">
                The weeks after delivery are as important as pregnancy itself.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What to Expect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal bleeding that gradually reduces</li>
                <li>Tiredness and hormonal mood changes</li>
                <li>Breast fullness and feeding challenges</li>
                <li>Healing of stitches or surgical wounds</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Warning Signs After Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding or large clots</li>
                <li>Fever or foul-smelling discharge</li>
                <li>Severe pain or wound infection</li>
                <li>Persistent sadness, anxiety or hopelessness</li>
                <li>Severe headache or leg swelling and pain</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How We Support You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Scheduled postnatal check-ups</li>
                <li>Breastfeeding guidance</li>
                <li>Emotional wellbeing check-ins</li>
                <li>Contraception and spacing advice</li>
                <li>Baby&apos;s vaccinations and growth monitoring</li>
              </ul>
            </div>

            {/* Section 13 — How to Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose a Maternity Doctor in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Use this checklist when comparing options.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Look For
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A qualified, experienced obstetrician-gynaecologist</li>
                <li>Modern ultrasound and diagnostic facilities</li>
                <li>Patience and clear communication</li>
                <li>Experience with high-risk pregnancies</li>
                <li>Support for normal delivery wherever safe</li>
                <li>Newborn and paediatric care access</li>
                <li>Easy contact through phone and WhatsApp</li>
                <li>A comfortable, hygienic and respectful clinic</li>
                <li>Trusted recommendations from other mothers</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ask the Doctor
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>How do you manage emergencies?</li>
                <li>How do you decide between normal and caesarean delivery?</li>
                <li>How often will I need scans?</li>
                <li>Who will be available for questions between visits?</li>
              </ul>
            </div>

            {/* Section 14 — Why Families Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Choose Dr. Priyanka Gynaec
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Empathetic, unhurried consultations</li>
                <li>A reputation built on mothers recommending the clinic to daughters and friends</li>
                <li>Complete care from fertility to delivery to newborn health</li>
                <li>Modern 3D/4D imaging</li>
                <li>Experience with both routine and high-risk pregnancies</li>
                <li>Strong focus on safe, normal delivery</li>
                <li>Continuity from the first visit through postnatal follow-up</li>
              </ul>
            </div>

            {/* Section 15 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Maternity Consultation Today
              </h2>

              <p className="mb-6 text-black">
                The earlier you begin, the better. Reach out to plan your
                pregnancy, confirm it or ask any question.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Contact Dr. Priyanka Gynaec, Moradabad</p>
                    <p className="text-black">Doctor: Dr. Priyanka Pachauri</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone / Appointments</p>
                    <div className="flex flex-wrap items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8979670705" className="hover:underline">
                        +91 89796 70705 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-black">@dr.priyanka.gynae</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 16 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
