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

export default function HighRiskPregnancySpecialistMoradabad() {
  const faqs = [
    {
      q: "What conditions are managed by the high risk pregnancy specialist in Moradabad?",
      a: "Gestational diabetes, hypertension, multiple pregnancy, previous C-section history and growth restriction concerns are all managed here.",
    },
    {
      q: "Does a high-risk diagnosis mean something will definitely go wrong?",
      a: "No, it means closer monitoring is needed — many high-risk pregnancies result in healthy, safe deliveries with proper care.",
    },
    {
      q: "How often will I need checkups for a high-risk pregnancy?",
      a: "More frequently than a routine pregnancy, with the exact schedule depending on the specific risk factor.",
    },
    {
      q: "Is 3D/4D ultrasound and doppler monitoring available for high-risk cases?",
      a: "Yes, the Voluson E22 machine along with doppler studies is used for closer fetal monitoring.",
    },
    {
      q: "Can twin pregnancies be safely managed here?",
      a: "Yes, multiple pregnancies receive specialized, more frequent monitoring throughout.",
    },
    {
      q: "What if I had a C-section in a previous pregnancy?",
      a: "Your history is carefully evaluated to determine the safest delivery option this time.",
    },
    {
      q: "How can I book a high-risk pregnancy consultation?",
      a: "You can book directly by calling or messaging on WhatsApp (8979670705).",
    },
    {
      q: "Where is the clinic located?",
      a: "It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "What warning signs should I never ignore in a high-risk pregnancy?",
      a: "Severe headache with vision changes, reduced fetal movement, bleeding or severe abdominal pain need immediate attention.",
    },
    {
      q: "Can I get a second opinion if another doctor called my pregnancy high risk?",
      a: "Yes, second opinions are welcomed for high-risk pregnancy management.",
    },
    {
      q: "What should I bring to my high-risk pregnancy consultation?",
      a: "Previous medical records, current medicines, and notes on any symptoms you've noticed.",
    },
    {
      q: "Is emergency delivery support available for high-risk pregnancies?",
      a: "Yes, the clinic is equipped and available 24x7 for emergency delivery needs.",
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
                High Risk Pregnancy Specialist Moradabad – Expert Care for Complicated Pregnancies by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Being told your pregnancy is &quot;high risk&quot; can feel frightening, especially when the term itself sounds so serious and the details of what it actually means aren't always explained clearly. In reality, a high-risk pregnancy simply means that the mother, the baby, or both need closer monitoring and more careful management than a routine pregnancy — it does not automatically mean something will go wrong. Many high-risk pregnancies, when managed properly by an experienced doctor, result in perfectly healthy deliveries. What matters most is having a high risk pregnancy specialist in Moradabad who understands the specific condition involved, monitors it consistently, and makes timely decisions rather than waiting until a problem becomes urgent.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Gynaec in Moradabad has built extensive experience managing exactly these kinds of pregnancies — from gestational diabetes and hypertension to twin pregnancies, previous C-sections, and other complications that require a more careful, hands-on approach. Rather than treating a high-risk diagnosis as a reason for alarm, the focus here is on structured, proactive care that catches issues early and gives both mother and baby the best possible chance at a safe outcome.
              </p>

              <p className="text-gray-700">
                This article explains what makes a pregnancy high-risk, how these pregnancies are managed differently, and how to get expert support in Moradabad.
              </p>
            </div>

            {/* Section 2 — Why Choose Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec as Your High Risk Pregnancy Specialist in Moradabad?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gold medal credentials and international fellowship-qualified gynaec doctor</li>
                <li>Proven, hands-on experience managing gestational diabetes, hypertension and multiple pregnancy</li>
                <li>Advanced 3D/4D ultrasound and doppler monitoring for closer fetal tracking</li>
                <li>Structured, more frequent checkup schedules tailored to each specific risk</li>
                <li>Same doctor personally manages care throughout the pregnancy and delivery</li>
                <li>Female-friendly, comfortable and private consultation environment</li>
                <li>24x7 availability for emergencies, which matter more in high-risk cases</li>
                <li>Strong local reputation — patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 3 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec – High Risk Pregnancy Specialist
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a well-known gynaecologist in Moradabad, guided by her &quot;Her Health First&quot; philosophy. High-risk pregnancies are treated with extra attention and a clear management plan, so patients always know what's being monitored, why, and what the next steps are.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialization in gynaecology and obstetrics</li>
                <li>Deep experience managing complicated and high-risk pregnancies</li>
                <li>Skilled at identifying early warning signs before they escalate</li>
                <li>Known for clear, honest communication, especially important in high-risk cases</li>
                <li>Coordinated care with specialist referrals when additional expertise is needed</li>
              </ul>
            </div>

            {/* Section 4 — What Makes a Pregnancy High Risk */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes a Pregnancy &quot;High Risk&quot;
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pre-existing conditions like diabetes, hypertension or thyroid disorders</li>
                <li>Conditions that develop during pregnancy, such as gestational diabetes or pre-eclampsia</li>
                <li>Carrying twins or a higher-order multiple pregnancy</li>
                <li>A previous C-section or complicated delivery history</li>
                <li>Advanced maternal age (typically 35 and above)</li>
                <li>A history of miscarriage, stillbirth or pregnancy loss</li>
                <li>Placental issues such as placenta previa or growth restriction concerns</li>
              </ul>
            </div>

            {/* Section 5 — Common Conditions Managed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Conditions Managed
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Gestational Diabetes
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Blood sugar screening through OGTT during the second trimester</li>
                <li>Dietary and lifestyle guidance tailored to blood sugar control</li>
                <li>Regular monitoring of the baby's growth alongside sugar levels</li>
                <li>Medication management when diet and lifestyle changes aren't enough</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Hypertension and Pre-eclampsia
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular blood pressure monitoring at every visit</li>
                <li>Urine tests to check for protein, an early sign of pre-eclampsia</li>
                <li>Closer monitoring as pregnancy progresses toward the third trimester</li>
                <li>Timely intervention if symptoms of pre-eclampsia develop</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Multiple Pregnancy (Twins/Triplets)
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>More frequent growth scans to track each baby individually</li>
                <li>Closer monitoring for risks like preterm labor</li>
                <li>Specialized delivery planning based on the babies' positions</li>
                <li>Nutritional guidance suited to a multiple pregnancy</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Previous C-Section or Complicated Delivery History
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Careful evaluation of whether a normal delivery is safe this time</li>
                <li>Monitoring for signs related to the previous complication</li>
                <li>Detailed delivery planning based on full medical history</li>
                <li>Clear discussion of risks and options well before the due date</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Growth Restriction or Placental Concerns
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Repeated growth scans to track the baby's development trend</li>
                <li>Doppler studies to assess blood flow to the baby</li>
                <li>Closer monitoring of amniotic fluid levels</li>
                <li>Timely decision-making about delivery timing if concerns increase</li>
              </ul>
            </div>

            {/* Section 6 — How Monitoring Differs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How High-Risk Pregnancy Monitoring Differs
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Visit Frequency:</strong> More frequent checkups compared to a routine pregnancy</li>
                <li><strong>Scan Frequency:</strong> Additional growth scans and doppler studies as needed</li>
                <li><strong>Testing:</strong> More detailed blood tests and screening specific to the risk factor</li>
                <li><strong>Delivery Planning:</strong> Earlier and more detailed discussion of delivery options</li>
                <li><strong>Emergency Readiness:</strong> Closer attention to warning signs that need immediate action</li>
              </ul>
            </div>

            {/* Section 7 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs in High-Risk Pregnancies That Need Immediate Attention
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe headache accompanied by vision changes</li>
                <li>Sudden swelling in the hands, face or feet</li>
                <li>Significantly reduced fetal movement</li>
                <li>Vaginal bleeding at any stage</li>
                <li>Severe abdominal pain or persistent contractions before term</li>
                <li>Signs of very high or very low blood sugar</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If any of these occur, contacting the clinic immediately is essential, rather than waiting for a scheduled visit.
              </p>
            </div>

            {/* Section 8 — Technology Supporting High-Risk Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology Supporting High-Risk Pregnancy Management
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Voluson E22 BT2024:</strong> Advanced 3D and 4D ultrasound machine</li>
                <li><strong>Doppler monitoring:</strong> For detailed blood flow assessment</li>
                <li><strong>Digital fetal heart rate monitoring:</strong> For closer tracking</li>
                <li><strong>Accurate lab coordination:</strong> For timely test results</li>
                <li><strong>Well-equipped labor room:</strong> Ready for both normal and emergency delivery</li>
              </ul>
            </div>

            {/* Section 9 — Why Experience Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why High-Risk Pregnancy Management Requires an Experienced Doctor
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Subtle changes in test results or scans can be easy to miss without experience</li>
                <li>Timely decisions often make the difference between a manageable situation and an emergency</li>
                <li>Coordinating multiple aspects of care — diet, medication, monitoring — requires a clear plan</li>
                <li>Reassurance based on real clinical judgment reduces unnecessary anxiety for the mother</li>
                <li>A doctor familiar with the full history can act faster when something changes</li>
              </ul>
            </div>

            {/* Section 10 — Who Should Seek Specialized Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Seek High-Risk Pregnancy Specialist Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Anyone diagnosed with gestational diabetes or hypertension during pregnancy</li>
                <li>Women carrying twins or a multiple pregnancy</li>
                <li>Anyone with a pre-existing condition like diabetes or thyroid disorder</li>
                <li>Women with a history of miscarriage, stillbirth or complicated delivery</li>
                <li>Patients advanced in maternal age planning or already pregnant</li>
                <li>Anyone told by another doctor that their pregnancy is &quot;high risk&quot; and wanting a second opinion</li>
              </ul>
            </div>

            {/* Section 11 — Delivery Planning */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Delivery Planning for High-Risk Pregnancies
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Earlier discussion of delivery options based on the specific risk factor</li>
                <li>Careful evaluation of whether normal delivery remains safe</li>
                <li>Preparedness for emergency C-section if complications arise during labor</li>
                <li>Coordination with paediatric support for the newborn if needed</li>
                <li>Clear communication with the family about the delivery plan in advance</li>
              </ul>
            </div>

            {/* Section 12 — Why Trust Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Trust Dr. Priyanka Gynaec for High-Risk Pregnancy Care
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Expertise with Heart:</strong> International fellowship and gold medal credentials</li>
                <li><strong>Proven Experience:</strong> A strong track record managing complicated pregnancies safely</li>
                <li><strong>Continuity of Care:</strong> The same doctor personally manages care through delivery</li>
                <li><strong>Earned Trust:</strong> Patients refer their own family and friends</li>
              </ul>
            </div>

            {/* Section 13 — Preparing for Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for a High-Risk Pregnancy Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bring all previous medical records, especially related to the specific risk factor</li>
                <li>Note down any symptoms you've noticed, even if they seem minor</li>
                <li>List current medicines, including any for pre-existing conditions</li>
                <li>Write down questions about what to expect going forward</li>
                <li>Bring a family member along, especially if delivery planning will be discussed</li>
              </ul>
            </div>

            {/* Section 14 — Serving Moradabad and Nearby Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Serving Moradabad and Nearby Areas
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients travel from Moradabad city as well as nearby towns and villages for high-risk pregnancy care</li>
                <li>The location near Old Roadways makes it accessible for frequent monitoring visits</li>
                <li>Same-day consultation slots available for urgent high-risk concerns</li>
                <li>Coordination support offered for patients travelling from a distance</li>
                <li>Reports and scans can be shared digitally for easier follow-up</li>
              </ul>
            </div>

            {/* Section 15 — Emotional Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional Support for Mothers Facing a High-Risk Pregnancy
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Space to ask questions honestly, even ones that feel silly or overly worried</li>
                <li>Clear explanations that reduce fear rooted in not understanding what's happening</li>
                <li>Encouragement to involve a partner or family member in appointments for support</li>
                <li>Reassurance grounded in actual monitoring results, not vague optimism</li>
                <li>Acknowledgment that anxiety during a high-risk pregnancy is completely understandable</li>
              </ul>
            </div>

            {/* Section 16 — Lifestyle Adjustments */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Lifestyle Adjustments Support High-Risk Pregnancy Management
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Following a tailored diet plan for conditions like gestational diabetes</li>
                <li>Monitoring blood pressure or blood sugar at home when advised</li>
                <li>Getting adequate rest, especially in pregnancies with multiples or previous complications</li>
                <li>Avoiding activities specifically flagged as risky for the individual condition</li>
                <li>Attending every scheduled checkup, even during weeks that feel uneventful</li>
              </ul>
            </div>

            {/* Section 17 — Common Misconceptions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Misconceptions About High-Risk Pregnancies
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Misconception:</strong> A high-risk label means a C-section is automatically required — this isn't always true and depends on the specific condition</li>
                <li><strong>Misconception:</strong> High-risk pregnancies always end in complications — with proper management, most result in healthy deliveries</li>
                <li><strong>Misconception:</strong> Once managed, monitoring can become less frequent — consistent monitoring often needs to continue throughout</li>
                <li><strong>Misconception:</strong> High-risk pregnancies mean the baby will have health problems — many babies born from well-managed high-risk pregnancies are perfectly healthy</li>
              </ul>
            </div>

            {/* Section 18 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing a High-Risk Pregnancy Specialist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A high-risk diagnosis calls for more attentive care, not panic — the right specialist makes that difference clear</li>
                <li>Dr. Priyanka Gynaec Moradabad combines proven experience with advanced monitoring technology for exactly these cases</li>
                <li>Early, consistent management significantly improves outcomes for both mother and baby</li>
                <li>Clear communication throughout the pregnancy reduces unnecessary stress and builds real confidence</li>
                <li>If you have been told your pregnancy is high risk, an experienced specialist's guidance can make the journey feel far more manageable</li>
              </ul>
            </div>

            {/* Section 19 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Address, Contact and WhatsApp
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
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh – 244001
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
                          href="mailto:drpriyanka@gynaecologistmoradabad.com"
                          className="hover:underline"
                        >
                          drpriyanka@gynaecologistmoradabad.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
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

              <p className="text-gray-700 mt-6">
                Message directly on WhatsApp for appointment booking or any urgent concern. For emergencies, calling is always better than messaging.
              </p>
            </div>

            {/* Section 20 — FAQs */}
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