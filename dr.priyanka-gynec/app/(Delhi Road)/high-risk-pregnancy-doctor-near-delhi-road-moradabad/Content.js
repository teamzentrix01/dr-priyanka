
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


export default function HighRiskPregnancyDoctorDelhiRoadMoradabad() {
  const faqs = [
    {
      q: "Can I switch to a high risk specialist midway through pregnancy?",
      a: "Yes. Carry all your reports and scans so the new doctor has the full history.",
    },
    {
      q: "How often are scans needed in a high risk pregnancy?",
      a: "It depends on the condition. Some women need scans every few weeks, while others may need them more often.",
    },
    {
      q: "Is travel allowed in a high risk pregnancy?",
      a: "Usually it is best to avoid long journeys. Ask your doctor before planning any travel.",
    },
    {
      q: "Can I plan another pregnancy after a high risk one?",
      a: "Often yes, with pre-pregnancy counselling and good control of existing conditions.",
    },
    {
      q: "Does a high risk pregnancy affect breastfeeding?",
      a: "In most cases, no. Lactation support is available if you need it.",
    },
    {
      q: "Is it safe to continue my regular medicines?",
      a: "Never stop or change medicines on your own. Your doctor will adjust them safely for pregnancy.",
    },
    {
      q: "Does high risk pregnancy always mean a caesarean delivery?",
      a: "No. Many women deliver vaginally when conditions allow. The delivery method depends on the mother’s and baby’s health.",
    },
    {
      q: "What should I do in an emergency during pregnancy?",
      a: "Contact your doctor or go to the nearest hospital immediately for bleeding, severe pain, reduced baby movements, leaking fluid, severe headache, or breathlessness.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering high risk pregnancy care, antenatal monitoring, and pregnancy management.",
    },
    {
      q: "What facilities are available at Dr. Priyanka Pachauri’s clinic?",
      a: "The clinic provides consultation, ultrasound support, laboratory investigations, antenatal care, pregnancy monitoring, and coordination for advanced pregnancy care where required.",
    },
    {
      q: "How can I book a high risk pregnancy consultation near Delhi Road, Moradabad?",
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
                High Risk Pregnancy Doctor Near Delhi Road Moradabad: Specialised Care for You and Your Baby
              </h1>


              <p className="text-gray-700 mb-4">
                Hearing the words &quot;high risk pregnancy&quot; can be frightening. Many women immediately fear the worst. In reality, the term simply means that a pregnancy needs closer observation because of a health condition, a past experience, or another factor. With the right medical team, a large number of high risk pregnancies end in the safe birth of a healthy baby.
              </p>


              <p className="text-gray-700">
                If you are searching for a high risk pregnancy doctor near Delhi Road Moradabad, this guide explains what the term means, how care is planned, and how to choose a specialist you can rely on.
              </p>
            </div>


            {/* Section 2 — What Is a High Risk Pregnancy? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a High Risk Pregnancy?
              </h2>


              <p className="text-gray-700 mb-4">
                A high risk pregnancy is one in which the mother, the baby, or both face a greater chance of complications than in an average pregnancy. The risk may exist before pregnancy begins, or it may develop during pregnancy.
              </p>


              <p className="text-gray-700">
                Being labelled high risk does not mean something will go wrong. It means you need extra attention, more frequent check-ups, additional tests, and a facility prepared for emergencies.
              </p>
            </div>


            {/* Section 3 — Why Proximity Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Proximity Matters
              </h2>


              <p className="text-gray-700">
                Complicated pregnancies can change quickly. Sudden bleeding, a rise in blood pressure, or early labour may need immediate action. Delhi Road is well connected within Moradabad, and many hospitals, nursing homes, labs, blood banks, and pharmacies are located nearby. Being close to a prepared facility reduces travel time in emergencies and makes frequent follow-up visits easier for the family.
              </p>
            </div>


            {/* Section 4 — Common Risk Factors */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Risk Factors
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Related to the Mother’s Health
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Diabetes, either existing or developing during pregnancy</li>
                    <li>High blood pressure or pre-eclampsia</li>
                    <li>Thyroid disorders</li>
                    <li>Heart, kidney, or liver disease</li>
                    <li>Anaemia, especially severe</li>
                    <li>Asthma, epilepsy, or autoimmune conditions</li>
                    <li>Being underweight or overweight</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Related to Age
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Pregnancy in teenagers</li>
                    <li>Pregnancy after the age of thirty-five</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Related to Pregnancy History
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Previous miscarriages or stillbirth</li>
                    <li>Earlier preterm delivery</li>
                    <li>Previous caesarean or uterine surgery</li>
                    <li>Previous baby with growth problems or birth defects</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Related to the Current Pregnancy
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Twins or multiple babies</li>
                    <li>Low-lying placenta or other placental problems</li>
                    <li>Poor growth of the baby</li>
                    <li>Too little or too much amniotic fluid</li>
                    <li>Rh-negative blood group with sensitisation risk</li>
                    <li>Pregnancy conceived through fertility treatment</li>
                    <li>Infections during pregnancy</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Lifestyle Factors
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Smoking, alcohol, or substance use</li>
                    <li>Poor nutrition</li>
                    <li>Limited access to regular care</li>
                  </ul>
                </div>
              </div>


              <p className="text-gray-700 mt-4">
                Many women have more than one factor, and doctors assess each case individually.
              </p>
            </div>


            {/* Section 5 — What Makes Specialised Care Different? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes Specialised Care Different?
              </h2>


              <p className="text-gray-700 mb-4">
                Care for a high risk pregnancy is more detailed and often involves a team. Typically it includes:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>More frequent visits than the standard schedule</li>
                <li>Additional scans such as growth scans, Doppler studies, and fluid assessment</li>
                <li>Specialised blood tests for sugar, thyroid, clotting, and infection</li>
                <li>Fetal monitoring to check the baby’s heart rate and well-being</li>
                <li>Medication management adjusted for safety in pregnancy</li>
                <li>Coordination with other specialists such as physicians, endocrinologists, cardiologists, or neonatologists</li>
                <li>A delivery plan prepared well in advance, with backup arrangements</li>
              </ul>
            </div>


            {/* Section 6 — Conditions Managed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions Managed in High Risk Pregnancy
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gestational Diabetes
                  </h3>
                  <p className="text-gray-700">
                    High blood sugar during pregnancy needs diet control, monitoring, and sometimes medicines or insulin. Good control protects the baby from excess growth and delivery complications.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pre-eclampsia and Hypertension
                  </h3>
                  <p className="text-gray-700">
                    Raised blood pressure, often with protein in the urine, requires careful monitoring, medication, and timely delivery planning.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Twin Pregnancy
                  </h3>
                  <p className="text-gray-700">
                    Multiple pregnancies carry higher chances of early delivery and growth differences, so scans are more frequent.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Recurrent Miscarriage
                  </h3>
                  <p className="text-gray-700">
                    Women with repeated pregnancy losses may need tests for hormonal, genetic, clotting, or uterine causes, along with supportive treatment in the next pregnancy.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Preterm Labour Risk
                  </h3>
                  <p className="text-gray-700">
                    Rest, medication, and sometimes a cervical stitch may be advised, depending on the situation.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Placenta Problems
                  </h3>
                  <p className="text-gray-700">
                    Conditions where the placenta is low-lying or attached abnormally need planned delivery and a well-equipped team.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Growth Restriction
                  </h3>
                  <p className="text-gray-700">
                    When the baby is smaller than expected, detailed scans guide the timing and mode of delivery.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Anaemia
                  </h3>
                  <p className="text-gray-700">
                    Iron supplements, dietary changes, and sometimes injections or transfusion are used to protect mother and baby.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 7 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs Requiring Immediate Help
              </h2>


              <p className="text-gray-700 mb-4">
                Contact your doctor or reach the nearest hospital without delay if you notice:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Any vaginal bleeding</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Sudden swelling of the face, hands, or feet</li>
                <li>Severe headache, blurred vision, or flashes of light</li>
                <li>Reduced or absent baby movements</li>
                <li>Leaking of fluid</li>
                <li>Regular contractions before the due date</li>
                <li>Fever with chills</li>
                <li>Persistent vomiting with inability to keep fluids down</li>
                <li>Breathlessness or chest pain</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Do not wait for your next scheduled visit if something feels wrong.
              </p>
            </div>


            {/* Section 8 — How to Choose a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose a High Risk Pregnancy Doctor
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Specialised Training and Credentials
                  </h3>
                  <p className="text-gray-700">
                    Look for an obstetrician with postgraduate qualifications such as MD, MS, DGO, or DNB in Obstetrics and Gynaecology and, where available, additional training or experience in maternal-fetal medicine. A valid medical council registration is essential.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experience With Complicated Cases
                  </h3>
                  <p className="text-gray-700">
                    Ask how often the doctor manages conditions like gestational diabetes, pre-eclampsia, twin pregnancy, or previous caesarean. Experience builds judgement.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Strong Hospital Infrastructure
                  </h3>
                  <p className="text-gray-700">
                    The facility should offer advanced ultrasound with Doppler, a laboratory, a blood bank link, an operation theatre, intensive care support, and a newborn intensive care unit or tie-up with one.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Team-Based Approach
                  </h3>
                  <p className="text-gray-700">
                    Good care involves anaesthetists, physicians, and paediatricians working together. Ask how the team coordinates.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Clear Communication
                  </h3>
                  <p className="text-gray-700">
                    A trustworthy doctor explains risks honestly without causing panic. You should leave each visit understanding what is being monitored and why.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Emergency Readiness
                  </h3>
                  <p className="text-gray-700">
                    Confirm that the facility operates round the clock and find out who responds at night.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-700">
                    Request estimates for visits, scans, tests, hospital stay, and possible newborn intensive care so you can plan financially.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Reputation
                  </h3>
                  <p className="text-gray-700">
                    Speak with women who received high risk care there. Their experiences with attentiveness and outcomes are very informative.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 9 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Your Doctor
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What exactly makes my pregnancy high risk?</li>
                <li>How often will I need check-ups and scans?</li>
                <li>Which symptoms should make me call immediately?</li>
                <li>Are my current medicines safe?</li>
                <li>What delivery method is likely, and when?</li>
                <li>Does this facility have newborn intensive care?</li>
                <li>What are the expected total costs?</li>
              </ul>
            </div>


            {/* Section 10 — Your Role */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Your Role in a Safe Pregnancy
              </h2>


              <p className="text-gray-700 mb-4">
                Medical care works best with active participation from you and your family.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Attend every scheduled appointment, even when you feel well</li>
                <li>Take medicines and supplements exactly as prescribed</li>
                <li>Monitor blood pressure or blood sugar at home if advised</li>
                <li>Track baby movements daily in the later months</li>
                <li>Follow a diet plan made for your condition</li>
                <li>Rest adequately and avoid heavy physical work</li>
                <li>Avoid smoking, alcohol, and tobacco smoke</li>
                <li>Keep emergency numbers and hospital documents ready</li>
              </ul>
            </div>


            {/* Section 11 — Nutrition and Lifestyle */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Nutrition and Lifestyle Guidance
              </h2>


              <p className="text-gray-700 mb-4">
                Food choices can influence outcomes.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Eat smaller, frequent meals to keep blood sugar steady</li>
                <li>Choose whole grains, pulses, vegetables, fruits, and lean protein</li>
                <li>Limit sugary drinks, sweets, and excess salt as advised</li>
                <li>Include iron-rich foods and take supplements as prescribed</li>
                <li>Stay hydrated, unless your doctor restricts fluids</li>
                <li>Ask a dietician for a personalised plan if you have diabetes, anaemia, or high blood pressure</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Gentle walking or prenatal exercises may be helpful, but always get your doctor’s approval first.
              </p>
            </div>


            {/* Section 12 — Planning the Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Planning the Delivery
              </h2>


              <p className="text-gray-700 mb-4">
                For many women with risk factors, normal delivery is still possible. For others, a planned caesarean or early delivery may be safer. The decision depends on your condition, the baby’s health, and how the pregnancy progresses. Your doctor should discuss the plan well before the due date and prepare for changes if needed.
              </p>


              <p className="text-gray-700">
                Consider arranging a hospital with newborn intensive care, in case your baby needs extra support after birth. Share the plan with family members so everyone knows what to do when labour begins.
              </p>
            </div>


            {/* Section 13 — Emotional Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional Support Matters
              </h2>


              <p className="text-gray-700">
                Anxiety is natural when your pregnancy is labelled high risk. Constant worry, however, can affect sleep, appetite, and well-being. Talk openly with your doctor about fears. Lean on your partner and family, keep to a calm routine, and consider speaking with a counsellor if worries feel overwhelming. Emotional health is part of a healthy pregnancy.
              </p>
            </div>


            {/* Section 14 — Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Myths About High Risk Pregnancy
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “High risk means the baby will not survive.”
                  </h3>
                  <p className="text-gray-700">
                    Most women with proper care deliver healthy babies.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Complete bed rest is always necessary.”
                  </h3>
                  <p className="text-gray-700">
                    Rest recommendations differ, and prolonged bed rest is not suitable for everyone.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Home remedies can control blood pressure or sugar in pregnancy.”
                  </h3>
                  <p className="text-gray-700">
                    Self-treatment can be dangerous. Always follow medical advice.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “A high risk pregnancy must end in a caesarean.”
                  </h3>
                  <p className="text-gray-700">
                    Many women deliver vaginally when conditions allow.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Pregnancy after thirty-five is always unsafe.”
                  </h3>
                  <p className="text-gray-700">
                    The risks are higher, but with regular care many women have healthy outcomes.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 15 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — High Risk Pregnancy Doctor in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                For women in Moradabad seeking careful and structured pregnancy monitoring, Dr. Priyanka Pachauri (MS in Obstetrics &amp; Gynaecology, FMAS, Advanced Infertility Fellowship) offers high risk pregnancy care. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, reflects her patient-first philosophy, &quot;Her Health First&quot;.
              </p>


              <p className="text-gray-700 mb-4">
                Her clinic provides antenatal check-ups, ultrasound-based monitoring, laboratory investigations, management of gestational diabetes and hypertension, twin pregnancy care, and pregnancy follow-up. Care plans are tailored to each woman’s medical history and current pregnancy needs.
              </p>


              <p className="text-gray-700 mb-4">
                From early risk assessment to delivery planning and postnatal recovery, the focus is on timely monitoring, clear communication, and safe outcomes for both mother and baby.
              </p>
            </div>


            {/* Section 16 — Contact Information */}
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


            {/* Section 17 — FAQs */}
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
