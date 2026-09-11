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

export default function GestationalDiabetesPregnancyDoctorMoradabad() {
  const faqs = [
    {
      q: "What is gestational diabetes?",
      a: "It is a type of diabetes that develops during pregnancy due to hormonal changes affecting insulin function, usually resolving after delivery.",
    },
    {
      q: "When is gestational diabetes usually diagnosed?",
      a: "It is typically screened for between 24 and 28 weeks of pregnancy through a glucose test.",
    },
    {
      q: "Who is a trusted doctor for gestational diabetes in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec clinic, Moradabad, is experienced in managing gestational diabetes pregnancies.",
    },
    {
      q: "Can gestational diabetes affect the baby?",
      a: "Yes, unmanaged gestational diabetes can lead to a larger baby and other complications, but proper management reduces these risks.",
    },
    {
      q: "Is normal delivery possible with gestational diabetes?",
      a: "Yes, if blood sugar is well controlled and the baby's growth is normal, vaginal delivery is often still possible.",
    },
    {
      q: "Does gestational diabetes go away after delivery?",
      a: "In most cases, yes, though blood sugar is usually rechecked a few weeks after delivery to confirm.",
    },
    {
      q: "What symptoms of gestational diabetes should I watch for?",
      a: "Excessive thirst, frequent urination, unusual fatigue, and blurred vision are common symptoms to report.",
    },
    {
      q: "Is diet the only treatment for gestational diabetes?",
      a: "Not always; some women manage it through diet alone, while others may need medication or insulin as advised by their doctor.",
    },
    {
      q: "How can I book an appointment for gestational diabetes management?",
      a: "You can book an appointment by messaging or calling the WhatsApp number +91 8979670705.",
    },
    {
      q: "Does gestational diabetes always lead to a C-section?",
      a: "No, the mode of delivery depends on blood sugar control and the baby's growth, decided closer to the due date.",
    },
    {
      q: "Can gestational diabetes happen again in future pregnancies?",
      a: "Yes, women who have had it once have a higher chance of developing it again in future pregnancies.",
    },
    {
      q: "Is monitoring needed after delivery for gestational diabetes?",
      a: "Yes, the mother's blood sugar is usually rechecked postpartum to ensure it has returned to a normal level.",
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
                Gestational Diabetes Pregnancy Doctor – Expert Guidance for a Healthy Pregnancy
              </h1>

              <p className="text-gray-700 mb-4">
                Hearing the words &quot;gestational diabetes&quot; during a routine pregnancy checkup can feel overwhelming, especially for first-time mothers who were not expecting any complications. The good news is that gestational diabetes is one of the most common and most manageable pregnancy conditions, and with the right gestational diabetes pregnancy doctor, most women go on to have completely normal, healthy deliveries. The key lies in early diagnosis, consistent monitoring, and following a structured management plan under expert supervision.
              </p>

              <p className="text-gray-700">
                This guide explains what gestational diabetes actually is, why it develops, how it is diagnosed and managed, and why choosing an experienced specialist like Dr. Priyanka Pachauri in Moradabad makes such a meaningful difference to the outcome.
              </p>
            </div>

            {/* Section 2 — What Is Gestational Diabetes? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Gestational Diabetes?
              </h2>

              <p className="text-gray-700 mb-4">
                Gestational diabetes is a type of diabetes that develops specifically during pregnancy in women who did not have diabetes before conceiving. It happens because pregnancy hormones can make it harder for the body to use insulin effectively, leading to higher blood sugar levels.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>It usually develops in the second or third trimester</li>
                <li>It is different from pre-existing (Type 1 or Type 2) diabetes, which exists before pregnancy</li>
                <li>In most cases, it resolves after delivery, though it does increase future diabetes risk</li>
                <li>It is diagnosed through a specific glucose tolerance test done during pregnancy</li>
                <li>With proper management, most women deliver healthy babies without major complications</li>
              </ul>
            </div>

            {/* Section 3 — Who Is More Likely to Develop It? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Is More Likely to Develop Gestational Diabetes?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Women with a family history of diabetes</li>
                <li>Women who are overweight or gained excess weight before pregnancy</li>
                <li>Women who have had gestational diabetes in a previous pregnancy</li>
                <li>Women with PCOS (Polycystic Ovary Syndrome)</li>
                <li>Women conceiving after the age of 35</li>
                <li>Women who have previously delivered a large baby (over 4 kg)</li>
                <li>Women from certain ethnic backgrounds with a higher genetic predisposition</li>
              </ul>
            </div>

            {/* Section 4 — Why Specialist's Attention Is Needed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Gestational Diabetes Needs a Specialist's Attention
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Unmanaged blood sugar can lead to the baby growing larger than average, complicating delivery</li>
                <li>It increases the risk of preterm birth and preeclampsia</li>
                <li>It can affect the baby's blood sugar levels immediately after birth</li>
                <li>Poorly controlled gestational diabetes raises the chance of needing a C-section</li>
                <li>A specialist doctor helps balance blood sugar control with the baby's continued healthy growth</li>
                <li>Regular monitoring ensures any change in condition is caught and managed early</li>
              </ul>
            </div>

            {/* Section 5 — How Gestational Diabetes Is Diagnosed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Gestational Diabetes Is Diagnosed
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A glucose challenge test is typically done between 24 and 28 weeks of pregnancy</li>
                <li>If initial results are high, a glucose tolerance test confirms the diagnosis with more detailed readings</li>
                <li>Some women with higher risk factors may be tested earlier in pregnancy</li>
                <li>Regular home blood sugar monitoring is often started once diagnosed</li>
                <li>Ongoing lab tests help track how well the condition is being managed over time</li>
              </ul>
            </div>

            {/* Section 6 — What the Doctor Actually Does */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What a Gestational Diabetes Pregnancy Doctor Actually Does
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Creates a personalised management plan based on the mother's specific readings and health history</li>
                <li>Coordinates with a dietician for a customised meal plan when needed</li>
                <li>Monitors the baby's growth closely through regular ultrasounds</li>
                <li>Adjusts treatment as needed, including medication or insulin if diet alone isn't sufficient</li>
                <li>Plans delivery timing and mode based on blood sugar control and baby's growth</li>
                <li>Provides postpartum guidance, since blood sugar needs to be rechecked after delivery</li>
                <li>Educates the mother on warning signs that need immediate medical attention</li>
              </ul>
            </div>

            {/* Section 7 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Trusted Gestational Diabetes Pregnancy Doctor in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec clinic in Gandhi Nagar, Moradabad, brings together expertise in antenatal care, high risk pregnancy management, and fertility treatment, making her well-suited to manage conditions like gestational diabetes with a comprehensive approach. According to her clinic's website, her practice follows the philosophy &quot;Her Health First,&quot; ensuring every mother receives individualised, attentive care.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialised experience managing high risk and complicated pregnancies, including gestational diabetes cases</li>
                <li>International fellowships and gold medal credentials reflecting strong clinical expertise</li>
                <li>In-house Voluson 3D and 4D ultrasound machine, allowing accurate monitoring of the baby's growth patterns</li>
                <li>A structured, evidence-based approach to managing blood sugar levels throughout pregnancy</li>
                <li>An integrated care team that tracks the mother's complete history from diagnosis through delivery</li>
                <li>A gentle approach that prioritises normal delivery whenever blood sugar and growth remain well controlled</li>
                <li>On-site paediatric care, ensuring the newborn's blood sugar and health are checked immediately after birth</li>
              </ul>
            </div>

            {/* Section 8 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs Related to Gestational Diabetes That Need Attention
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Excessive thirst or a constantly dry mouth</li>
                <li>Frequent urination beyond the usual pregnancy pattern</li>
                <li>Unusual fatigue or tiredness that doesn't improve with rest</li>
                <li>Blurred vision</li>
                <li>Recurrent infections, such as urinary tract infections</li>
                <li>Sudden, unexplained weight changes</li>
                <li>Reduced baby movement, which should always be reported immediately</li>
                <li>Signs of high blood pressure, such as headaches or swelling, since gestational diabetes increases preeclampsia risk</li>
              </ul>
            </div>

            {/* Section 9 — Managing Through Diet and Lifestyle */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Managing Gestational Diabetes Through Diet and Lifestyle
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Follow the personalised meal plan provided by your doctor or dietician rather than a generic diet found online</li>
                <li>Eat smaller, more frequent meals to help maintain steadier blood sugar levels throughout the day</li>
                <li>Include a balance of complex carbohydrates, protein, and fibre, as guided by your care team</li>
                <li>Engage in doctor-approved light physical activity, such as walking, unless advised otherwise</li>
                <li>Monitor blood sugar levels as instructed, keeping a consistent record to share at appointments</li>
                <li>Stay well hydrated and prioritise adequate sleep</li>
                <li>Avoid making significant dietary changes without first consulting your doctor</li>
                <li>Attend every scheduled appointment, since gestational diabetes requires closer monitoring than a standard pregnancy</li>
              </ul>
            </div>

            {/* Section 10 — Delivery Planning */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Delivery Planning for Gestational Diabetes
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>If blood sugar remains well controlled and the baby's growth is normal, vaginal delivery is often still possible</li>
                <li>If the baby is significantly larger than average, a C-section may be recommended to reduce delivery complications</li>
                <li>Delivery timing is sometimes planned slightly earlier if blood sugar control becomes difficult later in pregnancy</li>
                <li>The baby's blood sugar is checked shortly after birth, since newborns of mothers with gestational diabetes can experience temporary low blood sugar</li>
                <li>The mother's blood sugar is usually rechecked a few weeks after delivery to confirm it has returned to normal</li>
              </ul>
            </div>

            {/* Section 11 — How to Choose the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Doctor for Gestational Diabetes Management
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Proven experience managing gestational diabetes alongside general high risk pregnancy care</li>
                <li>Access to in-house ultrasound and lab facilities for consistent monitoring</li>
                <li>Willingness to coordinate with a dietician or diabetes specialist when needed</li>
                <li>Clear, judgement-free communication about diet, weight, and blood sugar readings</li>
                <li>A hospital tie-up with NICU support, in case the newborn needs monitoring after birth</li>
                <li>Positive outcomes and reviews from previous patients managed for gestational diabetes</li>
              </ul>
            </div>

            {/* Section 12 — Understanding the Diagnosis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding That a Gestational Diabetes Diagnosis Is Manageable, Not Alarming
              </h2>

              <p className="text-gray-700 mb-4">
                One of the most important things a mother can hear after a gestational diabetes diagnosis is that this condition, while requiring genuine attention, is highly manageable and does not define the outcome of her pregnancy. Many women feel an initial wave of guilt or worry, wondering if something they did caused this condition, but gestational diabetes is primarily driven by pregnancy hormones affecting insulin function, not by personal failure or poor choices. A good doctor addresses this emotional response directly, reassuring the mother early on that with consistent monitoring and a reasonable management plan, the vast majority of women with gestational diabetes deliver healthy babies without lasting complications for either themselves or their child.
              </p>

              <p className="text-gray-700 mb-4">
                The relationship between the mother and her care team also plays a significant role in how smoothly this condition is managed. Since gestational diabetes requires more frequent monitoring, more detailed conversations about diet, and sometimes daily blood sugar tracking, a doctor who takes time to explain the reasoning behind each recommendation tends to see far better compliance and outcomes than one who simply hands over a list of restrictions.
              </p>

              <p className="text-gray-700">
                Families are also encouraged to stay involved throughout this process, whether that means helping plan balanced meals at home, encouraging light daily activity, or simply providing emotional support during a phase that can feel demanding. With the right combination of medical guidance, consistent monitoring, and a supportive environment at home, gestational diabetes becomes just one more manageable chapter in an otherwise healthy pregnancy journey, rather than a source of ongoing worry.
              </p>
            </div>

            {/* Section 13 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Address, Contact & WhatsApp
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
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
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
                For appointments, directions, or any urgent pregnancy-related query, reach out directly on WhatsApp at +91 8979670705.
              </p>
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