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

export default function TwinPregnancySpecialistMoradabad() {
  const faqs = [
    {
      q: "Why is a twin pregnancy considered high risk?",
      a: "It places extra demand on the mother's body and carries higher chances of preterm labour, preeclampsia, and growth differences between babies.",
    },
    {
      q: "Who is a trusted twin pregnancy specialist in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec clinic, Moradabad, is experienced in managing twin and multiple pregnancies.",
    },
    {
      q: "How often are ultrasounds needed during a twin pregnancy?",
      a: "Usually every 2-4 weeks, to track the growth of both babies individually.",
    },
    {
      q: "Can twins be delivered normally?",
      a: "Yes, if both babies are head-down and the mother's health is stable, normal delivery is possible.",
    },
    {
      q: "Do twins usually arrive earlier than the due date?",
      a: "Yes, twin pregnancies commonly deliver between 36 and 38 weeks, earlier than a typical single pregnancy.",
    },
    {
      q: "What is twin-to-twin transfusion syndrome?",
      a: "It is a condition where blood flow is uneven between twins sharing a placenta, requiring close monitoring.",
    },
    {
      q: "What warning signs should twin pregnancy mothers watch for?",
      a: "Severe headache, sudden swelling, bleeding, reduced baby movement, or early contractions need immediate attention.",
    },
    {
      q: "Is nutrition different for a twin pregnancy?",
      a: "Yes, twin pregnancies require higher calorie, protein, and iron intake to support two babies.",
    },
    {
      q: "How can I book an appointment for twin pregnancy care?",
      a: "You can book an appointment by messaging or calling the WhatsApp number +91 8979670705.",
    },
    {
      q: "Is NICU support needed for twin deliveries?",
      a: "Often yes, since twins are more likely to be born early or need extra newborn care.",
    },
    {
      q: "Can twin pregnancies be detected early through IVF?",
      a: "Yes, twin pregnancies conceived through IVF are usually identified in the first trimester through early ultrasound.",
    },
    {
      q: "Does every twin pregnancy require a C-section?",
      a: "No, the mode of delivery depends on both babies' positions and the mother's overall health condition.",
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
                Twin Pregnancy Specialist in Moradabad – Expert Care for Double the Joy
              </h1>

              <p className="text-gray-700 mb-4">
                Finding out you are expecting twins brings a unique mix of excitement and nervousness. While the idea of welcoming two babies at once is a special experience, twin pregnancies are automatically classified as high risk and require a level of monitoring that goes well beyond a routine single pregnancy. This makes choosing the right twin pregnancy specialist in Moradabad one of the most important decisions a family can make during this journey. With the right doctor, advanced monitoring tools, and a well-planned care schedule, most twin pregnancies today progress safely and end in healthy deliveries.
              </p>

              <p className="text-gray-700">
                This guide explains what makes twin pregnancies different, the risks involved, what specialised care actually looks like, and why Dr. Priyanka Pachauri is a trusted name for twin pregnancy management in Moradabad.
              </p>
            </div>

            {/* Section 2 — Why Twin Pregnancy Needs Specialised Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Twin Pregnancy Needs Specialised Care
              </h2>

              <p className="text-gray-700 mb-4">
                A twin pregnancy is automatically considered high risk because the mother's body is supporting two babies at once, which places additional demand on her cardiovascular system, nutrition needs, and overall physical capacity.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The uterus stretches more, increasing the chance of preterm labour</li>
                <li>The mother's body needs higher nutritional support to sustain two babies</li>
                <li>There is a greater chance of blood pressure complications, including preeclampsia</li>
                <li>Growth differences between the two babies need to be tracked closely</li>
                <li>Delivery planning is more complex, since both babies' positions must be considered</li>
                <li>More frequent ultrasounds and check-ups are required compared to a single pregnancy</li>
              </ul>
            </div>

            {/* Section 3 — Types of Twin Pregnancies */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Types of Twin Pregnancies and Why It Matters
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Dizygotic (fraternal) twins:</strong> Develop from two separate eggs, each with its own placenta</li>
                <li><strong>Monozygotic (identical) twins:</strong> Develop from a single egg that splits into two, sometimes sharing a placenta</li>
                <li>Shared placenta pregnancies carry a higher risk and need closer monitoring for conditions like twin-to-twin transfusion syndrome</li>
                <li>Knowing the twin type early helps the doctor customise the monitoring plan accordingly</li>
                <li>Ultrasound in the first trimester usually determines chorionicity (placenta sharing pattern), which guides the entire care approach</li>
              </ul>
            </div>

            {/* Section 4 — Common Risks */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Risks Associated With Twin Pregnancy
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Preterm birth – twins are more likely to arrive before 37 weeks</li>
                <li>Gestational diabetes – higher likelihood compared to single pregnancies</li>
                <li>Preeclampsia or high blood pressure</li>
                <li>Twin-to-twin transfusion syndrome – uneven blood flow between babies sharing a placenta</li>
                <li>Growth restriction in one or both babies</li>
                <li>Anemia, due to higher nutritional demand</li>
                <li>Placenta previa or other placental complications</li>
                <li>Increased likelihood of C-section delivery</li>
              </ul>
            </div>

            {/* Section 5 — What Specialised Care Involves */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Specialised Twin Pregnancy Care Actually Involves
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>More frequent ultrasounds, often every 2-4 weeks, to track both babies' growth individually</li>
                <li>Doppler studies to monitor blood flow, especially in shared-placenta pregnancies</li>
                <li>Regular blood pressure and blood sugar monitoring</li>
                <li>Nutritional counselling focused on higher calorie and iron requirements</li>
                <li>Cervical length monitoring to assess the risk of preterm labour</li>
                <li>Detailed delivery planning, considering both babies' positions and overall maternal health</li>
                <li>Close coordination with a paediatric team, in case of early or complicated delivery</li>
              </ul>
            </div>

            {/* Section 6 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Trusted Twin Pregnancy Specialist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec clinic in Gandhi Nagar, Moradabad, brings together expertise in high risk pregnancy management, laparoscopy, and fertility treatment, making her well-positioned to manage the added complexity of twin pregnancies. According to her clinic's website, her practice is guided by the philosophy &quot;Her Health First,&quot; ensuring every mother receives individualised attention throughout her pregnancy.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialised experience managing high risk pregnancies, including multiple pregnancies</li>
                <li>International fellowships and gold medal credentials reflecting advanced clinical training</li>
                <li>In-house Voluson 3D and 4D ultrasound machine, allowing detailed tracking of each twin's growth and development</li>
                <li>GERI time-lapse imaging incubator and AI-based fertility diagnostics, relevant for twin pregnancies conceived through IVF</li>
                <li>A gentle, evidence-based approach that considers normal delivery when it remains safe for twin pregnancies</li>
                <li>An integrated care team that follows the mother's complete history from the first visit through delivery</li>
                <li>On-site paediatric care, ensuring both newborns receive immediate attention after birth</li>
              </ul>

              <p className="text-gray-700 mt-4">
                For families searching for a twin pregnancy specialist in Moradabad who offers both advanced technology and attentive, personalised care, Dr. Priyanka Pachauri is a dependable choice.
              </p>
            </div>

            {/* Section 7 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs Twin Pregnancy Mothers Should Never Ignore
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe headache that doesn't improve with medication</li>
                <li>Blurred vision or seeing flashes of light</li>
                <li>Sudden swelling in the hands, feet, or face</li>
                <li>Vaginal bleeding or spotting at any stage of pregnancy</li>
                <li>Regular contractions before 37 weeks, indicating possible preterm labour</li>
                <li>A noticeable decrease in either baby's movements</li>
                <li>Severe abdominal pain or cramping</li>
                <li>High fever or chills</li>
                <li>Sudden, significant weight gain within a short period</li>
                <li>Reduced urine output or a burning sensation while urinating</li>
              </ul>
            </div>

            {/* Section 8 — Delivery Planning */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Delivery Planning for Twin Pregnancies
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>If both babies are in a head-down position and the mother's health is stable, normal delivery may be possible</li>
                <li>If one or both babies are in a breech or transverse position, a C-section is usually recommended</li>
                <li>Twin deliveries often happen slightly earlier than single pregnancies, so preterm delivery planning is important</li>
                <li>A well-equipped hospital keeps NICU support ready, since twins are more likely to need extra care after birth</li>
                <li>The final delivery approach is decided based on both babies' positions, growth, and the mother's overall condition</li>
              </ul>
            </div>

            {/* Section 9 — Nutrition and Lifestyle Guidance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Nutrition and Lifestyle Guidance for Twin Pregnancy
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Follow a higher calorie and protein-rich diet as advised by your doctor</li>
                <li>Increase iron and calcium intake to support two babies' development</li>
                <li>Stay well hydrated throughout the day</li>
                <li>Take rest breaks more frequently, especially in the third trimester</li>
                <li>Avoid strenuous activity; follow doctor-approved light movement only</li>
                <li>Attend every antenatal appointment, since twin pregnancies require closer tracking</li>
                <li>Avoid smoking, alcohol, and any unprescribed medication</li>
                <li>Watch for signs of preterm labour and report them immediately</li>
              </ul>
            </div>

            {/* Section 10 — How to Choose the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Twin Pregnancy Specialist
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Proven experience specifically managing twin and multiple pregnancies</li>
                <li>Access to advanced ultrasound equipment for tracking both babies individually</li>
                <li>Availability for more frequent monitoring visits</li>
                <li>A hospital tie-up with NICU facilities, given the higher likelihood of early delivery</li>
                <li>Clear communication about growth differences or complications between the twins</li>
                <li>Positive outcomes and reviews from previous twin pregnancy patients</li>
              </ul>
            </div>

            {/* Section 11 — Emotional and Practical Preparation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional and Practical Preparation for Twin Parents
              </h2>

              <p className="text-gray-700 mb-4">
                Expecting twins often brings a very different emotional experience compared to a single pregnancy, simply because the preparation involved feels doubled in almost every sense. Many parents find themselves managing heightened anxiety about premature birth, wondering whether their home and finances are ready for two babies at once, and trying to prepare for a delivery that may need to happen earlier than expected. A good twin pregnancy specialist recognises this emotional weight and takes the time to explain, clearly and honestly, what a realistic timeline might look like, rather than leaving parents to guess based on general pregnancy information that does not fully apply to a twin situation.
              </p>

              <p className="text-gray-700 mb-4">
                Understanding early on that twin pregnancies commonly deliver between 36 and 38 weeks, for example, can help families plan practically instead of feeling caught off guard later. Practical preparation matters just as much as emotional readiness. Families expecting twins often benefit from planning for extra help at home in the weeks following delivery, since caring for two newborns simultaneously is significantly more demanding than caring for one.
              </p>

              <p className="text-gray-700">
                It also helps to discuss feeding plans in advance, whether that involves breastfeeding both babies, combination feeding, or additional support from a lactation consultant, since twin mothers frequently need more guidance in this area. Choosing a specialist who addresses these practical realities alongside the purely medical aspects of the pregnancy allows parents to walk into delivery day feeling genuinely prepared, rather than only medically monitored. This combination of thorough clinical care and honest, practical guidance is ultimately what makes the twin pregnancy journey feel manageable rather than overwhelming.
              </p>
            </div>

            {/* Section 12 — Contact Information */}
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
                For appointments, directions, or any urgent twin pregnancy-related query, reach out directly on WhatsApp at +91 8979670705.
              </p>
            </div>

            {/* Section 13 — FAQs */}
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