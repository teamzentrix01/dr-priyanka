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
  AlertTriangle,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function EmergencyGynaeMoradabad() {
  const faqs = [
    {
      q: "Who should I contact for a gynaecological emergency in Moradabad?",
      a: "You can call or WhatsApp Dr. Priyanka Gynaec at +91 90797 65578, or go to the nearest hospital emergency department for life-threatening symptoms.",
    },
    {
      q: "What counts as a gynaecological emergency?",
      a: "Heavy bleeding, severe abdominal pain, pregnancy complications, and sudden fainting are examples that need urgent attention.",
    },
    {
      q: "Is heavy bleeding during pregnancy always serious?",
      a: "Any bleeding during pregnancy should be evaluated promptly by a doctor, regardless of the amount.",
    },
    {
      q: "What are signs of an ectopic pregnancy?",
      a: "Sharp one-sided abdominal pain, dizziness, and shoulder pain along with a missed period are warning signs.",
    },
    {
      q: "How can I reach the clinic quickly?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Does the clinic have 24/7 emergency availability?",
      a: "This is not explicitly stated on the website; for critical symptoms, contact the clinic directly or visit the nearest hospital emergency department.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with urgent questions?",
      a: "Phone or WhatsApp is faster for urgent concerns; email can be used at drpriyanka@gynaecologistmoradabad.com for non-urgent queries.",
    },
    {
      q: "Should I wait to see if my symptoms improve before calling a doctor?",
      a: "No, for severe or worsening symptoms, seek medical attention immediately rather than waiting.",
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
                Emergency Gynae Care in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                Gynaecological emergencies can happen suddenly and often cause fear and confusion about what to do next. Whether it's severe abdominal pain, heavy bleeding, or a pregnancy complication, knowing when a situation is truly urgent — and having quick access to a reliable doctor — can make a significant difference in outcomes.
              </p>

              <p className="text-gray-700">
                This guide explains common gynaecological emergencies, how to respond, and how to reach emergency gynae care in Moradabad, including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — What Counts as a Gynaecological Emergency */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Counts as a Gynaecological Emergency?
              </h2>

              <p className="text-gray-700 mb-4">
                Not every gynaecological symptom is an emergency, but certain signs require urgent medical attention rather than waiting for a routine appointment. Recognising these situations early is critical.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Symptoms That Need Immediate Medical Attention
              </h3>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Heavy vaginal bleeding that soaks through a pad within an hour, repeatedly</li>
                <li>Severe, sudden abdominal or pelvic pain that doesn't improve or worsens quickly</li>
                <li>Bleeding or severe pain during pregnancy, at any stage</li>
                <li>Signs of an ectopic pregnancy — sharp one-sided abdominal pain, dizziness, or shoulder pain along with a missed period</li>
                <li>Fainting, severe dizziness, or feeling like you might pass out</li>
                <li>High fever with abdominal pain or unusual vaginal discharge</li>
                <li>Sudden, severe pain associated with an ovarian cyst, which may indicate rupture or torsion</li>
                <li>Signs of infection after a recent gynaecological procedure or delivery, such as fever, foul-smelling discharge, or worsening pain</li>
                <li>Reduced or absent baby movements during pregnancy, especially in the third trimester</li>
                <li>Water breaking (rupture of membranes) before the expected delivery date</li>
                <li>Signs of pre-eclampsia during pregnancy — severe headache, vision changes, or sudden swelling along with high blood pressure</li>
              </ul>
            </div>

            {/* Section 3 — Common Gynaecological Emergencies Explained */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Gynaecological Emergencies Explained
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Heavy or Abnormal Bleeding
                  </h3>
                  <p className="text-gray-700">
                    Heavy bleeding, whether during periods, between cycles, or during pregnancy, can have several causes ranging from hormonal imbalance to more serious conditions. Prompt evaluation helps identify the cause and prevent complications like severe anaemia.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Severe Abdominal or Pelvic Pain
                  </h3>
                  <p className="text-gray-700">
                    Sudden, intense pain can result from conditions such as ovarian cyst rupture, ovarian torsion, pelvic infection, or ectopic pregnancy. Because some of these conditions can become life-threatening quickly, timely diagnosis is essential.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pregnancy-Related Emergencies
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Ectopic pregnancy</strong> – when a pregnancy develops outside the uterus, requiring urgent medical or surgical treatment</li>
                    <li><strong>Miscarriage symptoms</strong> – bleeding and cramping in early pregnancy that need prompt evaluation</li>
                    <li><strong>Placental complications</strong> – such as placental abruption, which can cause severe bleeding and pain</li>
                    <li><strong>Pre-eclampsia</strong> – a pregnancy complication involving high blood pressure that needs urgent monitoring</li>
                    <li><strong>Preterm labour</strong> – contractions or water breaking before the expected due date</li>
                    <li><strong>Reduced foetal movement</strong> – a warning sign that always warrants prompt medical evaluation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Post-Surgical or Post-Delivery Complications
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Fever, unusual discharge, or worsening pain after a gynaecological surgery or delivery may indicate infection and needs urgent evaluation</li>
                    <li>Excessive bleeding after delivery (postpartum haemorrhage) is a medical emergency requiring immediate attention</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 — Why Quick Access to Emergency Gynae Care Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Quick Access to Emergency Gynae Care Matters
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Some conditions, like ectopic pregnancy or ovarian torsion, can become life-threatening within hours if untreated</li>
                <li>Delayed treatment for heavy bleeding can lead to severe anaemia and further complications</li>
                <li>Pregnancy emergencies often require rapid decisions to protect both mother and baby</li>
                <li>Quick evaluation can distinguish between a manageable issue and one requiring surgery or hospitalisation</li>
                <li>Having a trusted doctor who already knows your medical history speeds up emergency decision-making</li>
                <li>Early intervention generally leads to better recovery outcomes across nearly all gynaecological emergencies</li>
              </ul>
            </div>

            {/* Section 5 — What Happens During an Emergency Gynae Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During an Emergency Gynae Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Immediate assessment of vital signs</strong> – blood pressure, pulse, and overall stability are checked first</li>
                <li><strong>Focused history taking</strong> – quickly understanding your symptoms, pregnancy status, and relevant medical history</li>
                <li><strong>Urgent examination</strong> – a pelvic examination to assess the source and severity of the problem</li>
                <li><strong>Emergency ultrasound scan</strong> – to check for issues like ectopic pregnancy, ovarian cysts, or pregnancy complications</li>
                <li><strong>Blood tests if needed</strong> – to check for anaemia, infection, or pregnancy hormone levels</li>
                <li><strong>Immediate treatment or stabilisation</strong> – medication, minor procedures, or preparation for surgery, depending on the diagnosis</li>
                <li><strong>Hospital admission if required</strong> – for conditions needing surgery, IV fluids, or closer monitoring</li>
                <li><strong>Clear communication with the patient and family</strong> – explaining the situation and next steps promptly and honestly</li>
              </ul>
            </div>

            {/* Section 6 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: Support for Gynaecological Concerns in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad, offering comprehensive gynaecological and pregnancy care. Her clinic follows the guiding principle of "Her Health First," and her practice covers a wide range of conditions that may require urgent evaluation and treatment.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Pregnancy, antenatal, and postnatal care, including monitoring for pregnancy complications</li>
                    <li>3D laparoscopic gynaecological surgery, relevant for conditions like ovarian cyst torsion or ectopic pregnancy management</li>
                    <li>Laparoscopic cystectomy for ovarian cysts</li>
                    <li>Diagnostic hysteroscopy for abnormal bleeding evaluation</li>
                    <li>Normal delivery and birthing care</li>
                    <li>Postnatal care and monitoring for post-delivery complications</li>
                    <li>Paediatric care for newborns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology Supporting Rapid, Accurate Diagnosis
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines for quick, detailed evaluation of pregnancy or pelvic complications</li>
                    <li>High-definition 3D laparoscopic surgical systems, useful for urgent surgical intervention when required</li>
                    <li>An integrated care approach that allows the clinical team to access a patient's medical history quickly during urgent situations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised fellowship training in gynaecology and laparoscopic surgery</li>
                    <li><strong>Continuity of care</strong> – the same team having access to a patient's full medical history, which is valuable during urgent situations</li>
                    <li><strong>Outcomes patients hope for</strong> – timely diagnosis, appropriate treatment, and safe recovery</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 — How to Respond If You Suspect a Gynaecological Emergency */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Respond If You Suspect a Gynaecological Emergency
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Stay calm and assess the severity of your symptoms – note when they started and how they're changing</li>
                <li>Call the clinic or an emergency number immediately – don't wait to see if symptoms improve on their own if they are severe</li>
                <li>Have someone accompany you – for safety and support, especially if you feel weak or unwell</li>
                <li>Bring your medical history and any current medications – this helps the doctor act quickly</li>
                <li>If pregnant, mention your pregnancy status immediately – this changes how symptoms are evaluated and prioritised</li>
                <li>Follow the doctor's instructions promptly – whether it's coming in immediately or heading to a hospital emergency department</li>
                <li>Do not self-medicate for severe pain or bleeding – seek professional evaluation first</li>
              </ul>
            </div>

            {/* Section 8 — Step-by-Step: What to Do in a Suspected Gynae Emergency */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: What to Do in a Suspected Gynae Emergency
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Recognise warning signs – such as heavy bleeding, severe pain, fainting, or pregnancy complications.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Call the clinic or nearest emergency service immediately rather than waiting.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Provide clear information about your symptoms, pregnancy status, and medical history over the phone.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Arrange safe transport to the clinic or hospital, ideally with someone accompanying you.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Undergo prompt examination and testing as guided by the doctor.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Follow the recommended treatment plan, whether it involves medication, observation, or urgent surgery.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Attend follow-up care to ensure full recovery after the emergency is resolved.
                </p>
              </div>
            </div>

            {/* Section 9 — Benefits of Having a Trusted Local Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Having a Trusted Local Gynaecologist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Faster response during sudden gynaecological or pregnancy emergencies</li>
                <li>A doctor who already understands your medical history, speeding up urgent decision-making</li>
                <li>No need to travel long distances during a time-sensitive situation</li>
                <li>Access to ultrasound and surgical facilities for prompt diagnosis and treatment</li>
                <li>Continuity of care from emergency treatment through full recovery and follow-up</li>
              </ul>
            </div>

            {/* Section 10 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For gynaecological concerns that need urgent attention in Moradabad, here are the verified contact details from the official website:
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Award size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p className="text-black">Dr. Priyanka Pachauri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p className="text-black">Dr. Priyanka Gynaec – Fertility • Maternity • 3D Laparoscopy</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Phone / Call for Urgent Guidance</p>
                      <a href="tel:9079765578" className="text-black hover:underline">
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="tel:8979670705" className="text-black hover:underline">
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:drpriyanka@gynaecologistmoradabad.com" className="text-black hover:underline">
                        drpriyanka@gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a href="https://www.gynaecologistmoradabad.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
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
            </div>

            {/* Section 11 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                 gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Relevant surgical and pregnancy services listed</strong> – Laparoscopic cystectomy, pregnancy care, and delivery services are directly relevant to several emergency scenarios described above.</li>
                <li><strong>Technology transparency</strong> – Mentioning 3D laparoscopy and 4D ultrasound builds confidence in the clinic's ability to diagnose and manage urgent conditions quickly.</li>
                <li><strong>Direct contact channels available</strong> – Phone and WhatsApp numbers are clearly listed in the header and footer, useful for reaching the clinic promptly.</li>
                <li><strong>No dedicated 24/7 emergency helpline explicitly stated</strong> – The website does not clearly mention round-the-clock emergency availability or a separate emergency contact number, so patients should call ahead or head to a hospital emergency department for critical, life-threatening symptoms.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof about the overall patient experience.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, which is helpful for patients needing to locate the clinic quickly.</li>
                <li><strong>Improvement opportunity</strong> – Clearly stating emergency availability hours, or providing guidance on when to go to a hospital instead of the clinic, could make the website more helpful and reassuring for patients searching specifically for emergency gynae care.</li>
              </ul>
            </div>

            {/* Section 12 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQ)
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