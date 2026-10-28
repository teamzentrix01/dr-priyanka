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


export default function TopLadyDoctorDelhiRoadMoradabad() {
  const faqs = [
    {
      q: "Who is the right person to visit for period problems?",
      a: "A gynaecologist is the right specialist. She can find the cause and suggest suitable treatment.",
    },
    {
      q: "Can unmarried girls visit a lady doctor?",
      a: "Yes. Gynaecological care is for every woman, and consultations are handled with privacy and respect.",
    },
    {
      q: "How many scans are needed during pregnancy?",
      a: "This varies with each pregnancy. Most women have several scans, and the doctor decides based on your health and the baby’s progress.",
    },
    {
      q: "Is it necessary to fast before a visit?",
      a: "Only for certain blood tests or scans. The clinic will tell you when you book.",
    },
    {
      q: "What should I do in a pregnancy emergency?",
      a: "Contact your doctor or go to the nearest hospital immediately if you have heavy bleeding, severe pain, leaking fluid, high fever, or reduced baby movement.",
    },
    {
      q: "Can I take a family member to my appointment?",
      a: "Yes, in most cases. For examinations, privacy is usually maintained.",
    },
    {
      q: "What conditions can a lady gynaecologist treat?",
      a: "She can treat period problems, PCOS, infertility, infections, pregnancy-related concerns, urinary issues, menopause symptoms, and provide contraception and screening guidance.",
    },
    {
      q: "What qualifications should a trusted lady doctor have?",
      a: "Look for an MBBS along with MD, MS, DGO, or DNB in Obstetrics and Gynaecology, plus a valid medical council registration.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based lady gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering women’s health, pregnancy, fertility, and gynaecological care.",
    },
    {
      q: "What facilities are available at Dr. Priyanka Pachauri’s clinic?",
      a: "The clinic provides consultation, ultrasound support, laboratory investigations, antenatal care, pregnancy monitoring, and guidance for gynaecological treatment where required.",
    },
    {
      q: "How can I book an appointment near Delhi Road, Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic’s official website to schedule a consultation with Dr. Priyanka Pachauri.",
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
                Top Lady Doctor in Delhi Road Moradabad: How to Find Trusted Care for Women
              </h1>


              <p className="text-gray-700 mb-4">
                For many women in India, visiting a doctor about reproductive or hormonal health still comes with hesitation. A lady doctor often makes that first conversation easier. If you live near Delhi Road, Moradabad, and want to find the top lady doctor in Delhi Road Moradabad, this guide will help you understand what makes a doctor truly reliable, what conditions she can treat, and how to get the most from every appointment.
              </p>
            </div>


            {/* Section 2 — Why Many Women Prefer a Lady Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Many Women Prefer a Lady Doctor
              </h2>


              <p className="text-gray-700 mb-4">
                Health concerns related to periods, pregnancy, intimacy, or menopause are deeply personal. Many women feel more at ease describing symptoms to another woman. This comfort leads to more honest answers, more complete information, and often a more accurate diagnosis.
              </p>


              <p className="text-gray-700 mb-4">
                A female doctor is also often preferred by:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Young girls visiting for the first time</li>
                <li>Women from conservative families who feel shy about male doctors</li>
                <li>Patients with a history of discomfort during examinations</li>
                <li>Women who want a doctor who understands everyday realities such as household duties, work-life balance, and family pressure</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Gender alone does not make a doctor great, though. Skill, ethics, and patience matter just as much.
              </p>
            </div>


            {/* Section 3 — Why Delhi Road Is Convenient */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Delhi Road Is a Convenient Location
              </h2>


              <p className="text-gray-700 mb-4">
                Delhi Road is a major route in Moradabad, well connected to the railway station, the city centre, and surrounding towns. Patients from nearby villages and districts also travel here for specialist care. Because clinics, labs, scan centres, and medical stores are concentrated in this area, women can complete consultation, tests, and medicine purchase in a single trip.
              </p>


              <p className="text-gray-700">
                This convenience is especially useful during pregnancy, when regular visits and sudden emergencies are common.
              </p>
            </div>


            {/* Section 4 — Health Problems a Lady Doctor Can Help With */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Health Problems a Lady Doctor Can Help With
              </h2>


              <p className="text-gray-700 mb-4">
                A lady doctor in this context usually means a gynaecologist or obstetrician. She is trained to look after the female reproductive system and to guide women through pregnancy and childbirth.
              </p>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Period-Related Problems
                  </h3>
                  <p className="text-gray-700">
                    Irregular cycles, missed periods, heavy flow, clots, and severe cramps are among the most common reasons women seek help. Causes can include hormonal changes, thyroid issues, fibroids, or polyps.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    PCOS and PCOD
                  </h3>
                  <p className="text-gray-700">
                    These conditions cause irregular periods, acne, hair fall, unwanted hair growth, and weight gain. Treatment is often a combination of diet, exercise, medicines, and follow-up.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pregnancy Care
                  </h3>
                  <p className="text-gray-700">
                    Regular antenatal check-ups, scans, blood tests, nutrition advice, and delivery planning are all part of her role.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Infertility
                  </h3>
                  <p className="text-gray-700">
                    If conception has not happened after a year of trying, or six months for women above thirty-five, a doctor can begin evaluation and guide you on the next steps.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    White Discharge and Infections
                  </h3>
                  <p className="text-gray-700">
                    Persistent discharge, itching, burning, or odour may point to an infection that needs proper treatment.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Urinary and Pelvic Issues
                  </h3>
                  <p className="text-gray-700">
                    Frequent urination, leakage, and pelvic heaviness are common but treatable.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Contraception and Family Planning
                  </h3>
                  <p className="text-gray-700">
                    She can explain the safest options for your age, health, and plans.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Menopause
                  </h3>
                  <p className="text-gray-700">
                    Hot flashes, poor sleep, mood swings, and bone weakness can be managed with medical advice and lifestyle changes.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Breast and Cervical Screening
                  </h3>
                  <p className="text-gray-700">
                    Early detection matters, and a gynaecologist can advise on timely screening.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 5 — What Defines a Top Lady Doctor? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Defines a Top Lady Doctor?
              </h2>


              <p className="text-gray-700 mb-4">
                The word &quot;top&quot; is not about advertising. It is about trust built through consistent care. Here are the qualities worth looking for.
              </p>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Proper Medical Credentials
                  </h3>
                  <p className="text-gray-700">
                    She should hold an MBBS along with a postgraduate qualification such as MD, MS, DGO, or DNB in Obstetrics and Gynaecology. Her registration number should be valid and verifiable.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Real Clinical Experience
                  </h3>
                  <p className="text-gray-700">
                    Years of practice bring pattern recognition. A doctor who has handled thousands of deliveries, complicated pregnancies, and hormonal cases is better prepared for the unexpected.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Patient-First Attitude
                  </h3>
                  <p className="text-gray-700">
                    A good doctor listens fully, explains in simple language, and never makes you feel foolish for asking questions. She respects your privacy and your choices.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ethical Practice
                  </h3>
                  <p className="text-gray-700">
                    She recommends only the tests and procedures that are truly needed. If a caesarean or surgery is advised, she explains the reason clearly and gives you time to consider.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Modern Facilities
                  </h3>
                  <p className="text-gray-700">
                    Check for ultrasound, laboratory support, a sterile labour room, an operation theatre, and emergency backup. Neonatal facilities are valuable for deliveries.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Availability
                  </h3>
                  <p className="text-gray-700">
                    Pregnancy and emergencies do not follow clinic hours. Find out how to reach the doctor or her team in urgent situations.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Good Reputation
                  </h3>
                  <p className="text-gray-700">
                    Genuine patient experiences, both online and from people you know, give a realistic picture. Look for repeated mentions of kindness, accuracy, and clear guidance.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 6 — Questions to Ask Before You Decide */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Before You Decide
              </h2>


              <p className="text-gray-700 mb-4">
                It is perfectly acceptable to ask a few questions during your first visit or when calling the clinic:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What are your qualifications and areas of special interest?</li>
                <li>Do you handle both normal and high-risk pregnancies?</li>
                <li>Which tests and scans are available at this facility?</li>
                <li>What is the consultation fee, and what do follow-ups cost?</li>
                <li>What happens if there is an emergency at night?</li>
                <li>Do you offer both medical and surgical options where relevant?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                A confident, honest doctor will answer these without hesitation.
              </p>
            </div>


            {/* Section 7 — Early Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Early Warning Signs You Should Not Ignore
              </h2>


              <p className="text-gray-700 mb-4">
                Please book an appointment promptly if you notice any of the following:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bleeding between periods or after intercourse</li>
                <li>Periods that stop for several months without pregnancy</li>
                <li>Intense lower abdominal or pelvic pain</li>
                <li>Heavy bleeding that soaks through pads quickly</li>
                <li>Fever, foul-smelling discharge, or burning urination</li>
                <li>Reduced baby movement during pregnancy</li>
                <li>A new lump in the breast</li>
                <li>Bleeding after menopause</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Waiting often turns a small problem into a bigger one.
              </p>
            </div>


            {/* Section 8 — How to Prepare for Your Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for Your Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Note your menstrual history:</strong> Write down the first day of your last period, usual cycle length, and any changes.</li>
                <li><strong>Make a symptom list:</strong> Include when symptoms began, how often they occur, and what makes them better or worse.</li>
                <li><strong>Bring old documents:</strong> Previous prescriptions, scan reports, and blood test results save time and prevent repeat testing.</li>
                <li><strong>Mention all medicines:</strong> Include vitamins, herbal products, and home remedies, as some can affect treatment.</li>
                <li><strong>Wear comfortable clothing:</strong> It makes any examination easier.</li>
                <li><strong>Do not feel embarrassed:</strong> Doctors discuss these topics every day, and honesty leads to better care.</li>
              </ul>
            </div>


            {/* Section 9 — Pregnancy Care Step by Step */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Pregnancy Care Step by Step
              </h2>


              <p className="text-gray-700 mb-4">
                Early and regular care is one of the best gifts you can give yourself and your baby.
              </p>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    First Trimester
                  </h3>
                  <p className="text-gray-700">
                    The doctor confirms the pregnancy, checks your general health, and prescribes folic acid and other supplements. Early scans confirm the baby’s position and heartbeat.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Second Trimester
                  </h3>
                  <p className="text-gray-700">
                    A detailed anomaly scan checks the baby’s development. Blood pressure, weight, and haemoglobin are monitored, and screening for gestational diabetes is usually done.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Third Trimester
                  </h3>
                  <p className="text-gray-700">
                    Visits become more frequent. The doctor watches the baby’s growth, position, and your overall condition, then discusses delivery options and warning signs of labour.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    After Delivery
                  </h3>
                  <p className="text-gray-700">
                    Postnatal check-ups look after your recovery, breastfeeding, emotional wellbeing, and family planning.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 10 — Daily Habits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Simple Daily Habits for Better Women’s Health
              </h2>


              <p className="text-gray-700 mb-4">
                Medical care works best when supported by healthy routines.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Include iron-rich foods such as spinach, lentils, jaggery, and dates</li>
                <li>Drink enough water throughout the day</li>
                <li>Do regular exercise, yoga, or brisk walking</li>
                <li>Take calcium and vitamin D as advised, especially after thirty</li>
                <li>Maintain menstrual hygiene with clean, regularly changed products</li>
                <li>Keep stress in check with sleep, hobbies, and time for yourself</li>
                <li>Get routine health check-ups once a year</li>
              </ul>
            </div>


            {/* Section 11 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Visiting a Lady Doctor
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Myth: Only married women need a gynaecologist.
                  </h3>
                  <p className="text-gray-700">
                    Fact: Women of all ages can visit for periods, hormonal issues, hygiene concerns, and preventive screening.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Myth: Irregular periods will fix themselves.
                  </h3>
                  <p className="text-gray-700">
                    Fact: Sometimes they do, but repeated irregularity deserves a proper check.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Myth: A caesarean is always safer.
                  </h3>
                  <p className="text-gray-700">
                    Fact: Normal delivery is preferred when there are no complications. The right method depends on your and your baby’s condition.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Myth: Discussing intimate problems is shameful.
                  </h3>
                  <p className="text-gray-700">
                    Fact: Silence delays treatment. Open conversation protects your health.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Myth: Medicines for PCOS must be taken forever.
                  </h3>
                  <p className="text-gray-700">
                    Fact: Treatment depends on the individual. Many women improve significantly with lifestyle changes and guided care.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 12 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Trusted Lady Doctor in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                For women in Moradabad seeking a compassionate and experienced lady doctor, Dr. Priyanka Pachauri (MS in Obstetrics &amp; Gynaecology, FMAS, Advanced Infertility Fellowship) offers comprehensive women’s healthcare. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, reflects her patient-first philosophy, &quot;Her Health First&quot;.
              </p>


              <p className="text-gray-700 mb-4">
                Her clinic provides care for menstrual disorders, PCOS, fertility concerns, infections, pregnancy, menopause, adolescent health, and preventive screening. With ultrasound support, laboratory investigations, and personalised treatment planning, women can receive organised care close to Delhi Road, Moradabad.
              </p>


              <p className="text-gray-700 mb-4">
                Whether you need a routine consultation, pregnancy guidance, or treatment for a specific concern, Dr. Priyanka Pachauri focuses on privacy, clear communication, and respectful, judgment-free care.
              </p>
            </div>


            {/* Section 13 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
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


            {/* Section 14 — FAQs */}
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