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

export default function TopGynaecologistMoradabadPregnancyCare() {
  const faqs = [
    {
      q: "Who is a top gynaecologist in Moradabad for pregnancy care?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a trusted choice for pregnancy care.",
    },
    {
      q: "When should I see a gynaecologist in pregnancy?",
      a: "As soon as your test is positive, ideally by 6 to 8 weeks.",
    },
    {
      q: "Does the clinic handle high-risk pregnancies?",
      a: "Yes, with closer monitoring and personalised care.",
    },
    {
      q: "Is normal delivery supported?",
      a: "Yes, normal delivery is encouraged whenever it is safe.",
    },
    {
      q: "Is 3D/4D ultrasound available?",
      a: "Yes, the clinic uses a Voluson E22 series machine.",
    },
    {
      q: "Is newborn care available at the same clinic?",
      a: "Yes, paediatric consultations, vaccinations and newborn care are offered.",
    },
    {
      q: "How do I choose the right gynaecologist?",
      a: "Check experience, communication, technology, reviews and your own comfort.",
    },
    {
      q: "Does the doctor also treat fertility problems?",
      a: "Yes, fertility and IVF care are available.",
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
                Top Gynaecologist in Moradabad for Pregnancy Care: How to Choose and Why Families Trust Dr. Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                Finding the right gynaecologist is one of the first and most
                important decisions of pregnancy. Your doctor will guide you
                through scans, tests, nutrition, delivery and recovery, so you
                want someone skilled, approachable and available when it
                matters.
              </p>

              <p className="text-gray-700">
                If you are searching for a top gynaecologist in Moradabad for
                pregnancy care, this guide will help you understand what
                &quot;top&quot; really means, what to look for, and what you can
                expect from Dr. Priyanka Pachauri at Dr. Priyanka Gynaec.
              </p>
            </div>

            {/* Section 2 — What Top Means */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does &quot;Top Gynaecologist&quot; Really Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                &quot;Top&quot; or &quot;best&quot; is not an official ranking.
                It describes a doctor who consistently delivers safe,
                compassionate and transparent care. Be cautious of any clinic
                that claims to be number one without evidence.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Truly Good Pregnancy Gynaecologist Offers
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Proper qualifications and hands-on experience in obstetrics</li>
                <li>Accurate diagnosis using reliable technology</li>
                <li>Clear, honest communication</li>
                <li>Respect for your choices and comfort</li>
                <li>Readiness to handle complications and emergencies</li>
                <li>Continuity of care from pregnancy to postnatal recovery</li>
                <li>A track record of satisfied families and word-of-mouth referrals</li>
              </ul>
            </div>

            {/* Section 3 — Why Choice Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Your Choice of Gynaecologist Matters
              </h2>

              <p className="mb-4 text-gray-700">
                The right doctor can make the difference between a stressful
                pregnancy and a confident one.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Good Gynaecologist Helps You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detect complications early, before they become serious</li>
                <li>Understand every test and scan</li>
                <li>Make informed choices about delivery</li>
                <li>Stay calm through unexpected situations</li>
                <li>Recover well after birth</li>
                <li>Plan future pregnancies safely</li>
              </ul>
            </div>

            {/* Section 4 — Key Qualities */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Qualities to Look for in a Pregnancy Gynaecologist
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Clinical Expertise
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Experience handling both routine and high-risk pregnancies</li>
                <li>Confidence with normal, assisted and caesarean deliveries</li>
                <li>Up-to-date knowledge of antenatal screening and treatment</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Communication and Empathy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Listens without rushing</li>
                <li>Explains results in simple language</li>
                <li>Welcomes your questions and concerns</li>
                <li>Treats you and your family with respect</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Technology and Facilities
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Modern ultrasound for detailed baby assessment</li>
                <li>Complete diagnostic support</li>
                <li>Hygienic, comfortable surroundings</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Availability and Accessibility
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Easy booking by phone or WhatsApp</li>
                <li>Clear process for urgent concerns</li>
                <li>Reasonable access between scheduled visits</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Approach to Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Encourages normal delivery when it is safe</li>
                <li>Recommends a caesarean only for genuine medical reasons</li>
                <li>Prepares you through antenatal counselling</li>
              </ul>
            </div>

            {/* Section 5 — About Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                antenatal and postnatal care, high-risk pregnancy management,
                laparoscopic gynaecological surgery and fertility care. Her
                clinic works on a clear principle: &quot;Her Health First.&quot;
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What This Means in Practice
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your story and choices are at the centre of every decision</li>
                <li>Consultations begin with listening, not rushing</li>
                <li>Advanced technology is used with patience and empathy</li>
                <li>Care is planned around your life, not a fixed template</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Reputation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Built on mothers recommending the clinic to daughters and friends</li>
                <li>Supported by patient testimonials and video stories shared by the clinic</li>
              </ul>
            </div>

            {/* Section 6 — Services */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Complete Pregnancy Care Services
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Preconception Counselling
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Health check before planning a baby</li>
                <li>Folic acid and vitamin guidance</li>
                <li>Control of thyroid, diabetes and blood pressure</li>
                <li>Support for PCOS and previous pregnancy loss</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Antenatal Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy confirmation and dating scan</li>
                <li>Regular check-ups throughout pregnancy</li>
                <li>Blood and urine investigations</li>
                <li>NT, anomaly and growth scans</li>
                <li>Gestational diabetes screening</li>
                <li>Nutrition, exercise and vaccination advice</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                High-Risk Pregnancy Management
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Closer monitoring and more frequent scans</li>
                <li>Care for diabetes, thyroid disease and hypertension</li>
                <li>Twin pregnancy care</li>
                <li>Support after miscarriage, preterm birth or caesarean</li>
                <li>Early and clear delivery planning</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnancy and Birthing Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Personalised birth planning</li>
                <li>Labour monitoring and pain relief discussion</li>
                <li>Emphasis on safe normal delivery</li>
                <li>Caesarean section only when medically needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Postnatal and Newborn Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Recovery and wound care</li>
                <li>Breastfeeding support</li>
                <li>Contraception and family planning advice</li>
                <li>Paediatric consultations, vaccinations and newborn care</li>
              </ul>
            </div>

            {/* Section 7 — Technology */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology That Supports Safer Pregnancy Care
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Highlighted at Dr. Priyanka Gynaec
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>3D and 4D ultrasound (Voluson E22 series) for detailed fetal imaging</li>
                <li>Anomaly and growth scans at recommended weeks</li>
                <li>Doppler studies when blood flow needs checking</li>
                <li>Complete laboratory investigations</li>
                <li>High-definition 3D laparoscopy for related gynaecological surgery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why This Matters
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clearer images support better assessment of your baby</li>
                <li>Early detection allows timely treatment</li>
                <li>Fewer visits to separate diagnostic centres</li>
              </ul>
            </div>

            {/* Section 8 — Pregnancy Journey */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Pregnancy Care Journey, Step by Step
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester (Weeks 1 to 12)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>First consultation and dating scan</li>
                <li>Booking blood and urine tests</li>
                <li>NT scan between 11 and 13 weeks 6 days</li>
                <li>Start of folic acid and supplements</li>
                <li>Advice on nausea, diet and lifestyle</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester (Weeks 13 to 27)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Monthly check-ups</li>
                <li>Anomaly scan at 18 to 20 weeks</li>
                <li>Glucose tolerance test at 24 to 28 weeks</li>
                <li>Iron and calcium supplements</li>
                <li>Vaccination as per schedule</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester (Weeks 28 to 40)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits</li>
                <li>Growth scans and position checks</li>
                <li>Birth planning and labour counselling</li>
                <li>Hospital bag preparation</li>
                <li>Weekly checks near the due date</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mother&apos;s recovery follow-up</li>
                <li>Newborn check-up and vaccinations</li>
                <li>Breastfeeding and emotional support</li>
                <li>Family planning advice</li>
              </ul>
            </div>

            {/* Section 9 — Conditions */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Conditions Managed With Care
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Conditions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe morning sickness</li>
                <li>Anaemia</li>
                <li>Gestational diabetes</li>
                <li>High blood pressure and preeclampsia</li>
                <li>Thyroid disorders</li>
                <li>Urinary and vaginal infections</li>
                <li>Low-lying placenta</li>
                <li>Poor fetal growth or low amniotic fluid</li>
                <li>Threatened miscarriage and recurrent pregnancy loss</li>
                <li>Preterm labour signs</li>
                <li>Twin and multiple pregnancy</li>
                <li>Rh-negative blood group</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Our Approach
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Accurate diagnosis first</li>
                <li>Pregnancy-safe treatment</li>
                <li>Close monitoring until delivery</li>
                <li>Clear explanations so you always know what is happening</li>
              </ul>
            </div>

            {/* Section 10 — Normal Delivery */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery: Our Birth Philosophy
              </h2>

              <p className="mb-4 text-gray-700">
                Normal vaginal delivery is often the healthiest choice when
                there is no medical reason to avoid it.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of Normal Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Faster recovery</li>
                <li>Shorter hospital stay</li>
                <li>Lower risk of surgical complications</li>
                <li>Early bonding and breastfeeding</li>
                <li>Easier future pregnancies</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How We Support You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antenatal counselling and preparation</li>
                <li>Breathing and relaxation techniques</li>
                <li>Safe, doctor-approved exercise</li>
                <li>Continuous monitoring during labour</li>
                <li>Timely decisions if complications arise</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Caesarean May Be Advised When
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The mother or baby is at risk</li>
                <li>The placenta covers the cervix</li>
                <li>The baby is in an unsuitable position</li>
                <li>Labour is not progressing safely</li>
              </ul>
            </div>

            {/* Section 11 — Compare Doctors */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Compare Gynaecologists Before You Decide
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Smart Steps
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Read patient feedback across several sources, such as the clinic website, social media and Google listings</li>
                <li>Ask relatives and friends who delivered locally</li>
                <li>Visit the clinic and observe the environment and staff behaviour</li>
                <li>Book a first consultation and judge how comfortable you feel</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Questions to Ask the Doctor
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>How do you handle high-risk pregnancies?</li>
                <li>How do you decide between normal and caesarean delivery?</li>
                <li>How often will I need scans?</li>
                <li>How can I reach you with urgent questions?</li>
                <li>What newborn care is available?</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Red Flags
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pressure to undergo unnecessary tests or procedures</li>
                <li>Refusal to explain a diagnosis</li>
                <li>Dismissing your concerns</li>
                <li>Guaranteed outcomes in medical care</li>
              </ul>
            </div>

            {/* Section 12 — Healthy Pregnancy Tips */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Healthy Pregnancy Tips From Your Gynaecologist
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Nutrition
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Eat small, balanced meals</li>
                <li>Include green vegetables, fruits, pulses, eggs, paneer and curd</li>
                <li>Drink plenty of water</li>
                <li>Take iron, calcium, folic acid and vitamin D as prescribed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Walk daily unless advised otherwise</li>
                <li>Sleep on your left side in later pregnancy</li>
                <li>Avoid smoking, tobacco, alcohol and self-medication</li>
                <li>Manage stress with rest and light yoga</li>
                <li>Count baby kicks every day</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Care Routine
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Never skip scheduled scans and tests</li>
                <li>Keep all reports in one folder</li>
                <li>Note symptoms and questions before each visit</li>
              </ul>
            </div>

            {/* Section 13 — Emergency */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Call Your Gynaecologist Immediately
              </h2>

              <p className="mb-4 text-gray-700">Seek urgent care if you notice:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy vaginal bleeding</li>
                <li>Sudden fluid leakage</li>
                <li>Severe abdominal pain</li>
                <li>Severe headache with blurred vision</li>
                <li>Sudden swelling of face or hands</li>
                <li>Fits or fainting</li>
                <li>Reduced or absent baby movements</li>
                <li>High fever with chills</li>
                <li>Regular contractions before 37 weeks</li>
              </ul>
            </div>

            {/* Section 14 — Why Families Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Choose Dr. Priyanka Gynaec
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Empathetic care that begins with listening</li>
                <li>Experience in routine and high-risk pregnancies</li>
                <li>Modern 3D/4D imaging</li>
                <li>Strong support for safe normal delivery</li>
                <li>Fertility, pregnancy, delivery and newborn care in one place</li>
                <li>Continuity from the first visit to postnatal follow-up</li>
                <li>A reputation built on trust and referrals from families</li>
              </ul>
            </div>

            {/* Section 15 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Pregnancy Consultation Today
              </h2>

              <p className="mb-6 text-black">
                Early care gives you and your baby the best start. Contact the
                clinic to book a visit, ask a question or plan your pregnancy.
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
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
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
