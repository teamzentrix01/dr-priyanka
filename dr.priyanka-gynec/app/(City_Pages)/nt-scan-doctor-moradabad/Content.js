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
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function NTScanMoradabad() {
  const faqs = [
    {
      q: "Which doctor performs NT scans in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers NT scans using 3D/4D ultrasound technology.",
    },
    {
      q: "When should the NT scan be done?",
      a: "Typically between weeks 11 and 14 of pregnancy, for accurate results.",
    },
    {
      q: "Is the NT scan a diagnostic test?",
      a: "No, it is a screening test that estimates risk, not a definitive diagnosis.",
    },
    {
      q: "What does an increased-risk result mean?",
      a: "It suggests further testing may be helpful; it does not confirm a condition on its own.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Is the NT scan painful or risky?",
      a: "No, it is a standard, non-invasive ultrasound procedure with no known risk to mother or baby.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with questions before my scan?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Does a normal NT scan guarantee a completely healthy baby?",
      a: "It significantly reduces certain risks, but no single screening test can rule out every possible condition.",
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
                NT Scan Doctor in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                The NT scan, or Nuchal Translucency scan, is one of the most important early pregnancy screenings, offering expecting parents valuable insight into their baby's health well before the halfway point of pregnancy. Despite its importance, many first-time parents are unfamiliar with what the test involves or when exactly to schedule it.
              </p>

              <p className="text-gray-700">
                This guide explains everything about the NT scan and how to find a reliable NT scan doctor in Moradabad — including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — What Is an NT Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is an NT Scan?
              </h2>

              <p className="text-gray-700 mb-4">
                The Nuchal Translucency (NT) scan is a specialised ultrasound performed during early pregnancy that measures the thickness of the clear space at the back of the developing baby's neck. This measurement, combined with maternal age and sometimes blood test results, helps assess the likelihood of certain chromosomal conditions.
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>It is a screening test, not a diagnostic test — meaning it estimates risk rather than confirming a condition definitively</li>
                <li>The measurement is taken using a detailed ultrasound of the baby in early pregnancy</li>
                <li>Results are usually combined with maternal blood markers for a more accurate risk assessment, known as combined first-trimester screening</li>
                <li>The scan also provides an early opportunity to check the baby's basic anatomy and confirm the pregnancy is progressing normally</li>
              </ul>
            </div>

            {/* Section 3 — Why the NT Scan Is Important */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why the NT Scan Is Important
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>It helps assess the risk of chromosomal conditions such as Down syndrome (Trisomy 21), Edwards syndrome (Trisomy 18), and Patau syndrome (Trisomy 13)</li>
                <li>Early screening allows parents time to discuss further testing options if the risk is found to be higher than average</li>
                <li>It can help detect certain major structural abnormalities in the baby at an early stage</li>
                <li>It offers reassurance for the majority of pregnancies where results fall within the normal range</li>
                <li>It supports informed decision-making about additional diagnostic tests, if needed, well ahead of the second trimester</li>
                <li>Confirms accurate dating of the pregnancy, which is useful for planning future prenatal care</li>
              </ul>
            </div>

            {/* Section 4 — When Should the NT Scan Be Done */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should the NT Scan Be Done?
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The NT scan is typically performed during a specific window in the first trimester of pregnancy, generally between weeks 11 and 14</li>
                <li>Timing is important because the neck-fold measurement is only accurate within this window</li>
                <li>Your doctor will confirm the exact appointment timing based on your pregnancy dating from your first ultrasound</li>
                <li>Scheduling it too early or too late can affect the accuracy and usefulness of the results</li>
              </ul>
            </div>

            {/* Section 5 — What Happens During an NT Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During an NT Scan
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Preparation</strong> – you may be asked to have a partially full bladder to help improve image clarity</li>
                <li><strong>The ultrasound procedure</strong> – performed either through the abdomen or, in some cases, transvaginally for clearer early images</li>
                <li><strong>Measurement of the nuchal fold</strong> – the sonographer or doctor carefully measures the fluid space at the back of the baby's neck</li>
                <li><strong>Additional checks</strong> – the scan may also assess the baby's basic anatomy, heart rate, and overall development</li>
                <li><strong>Combined blood test, if applicable</strong> – a blood sample may be taken around the same time to check specific pregnancy hormone and protein levels</li>
                <li><strong>Duration</strong> – the scan typically takes 20-30 minutes, depending on the baby's position and clarity of images</li>
                <li><strong>Discussing results</strong> – your doctor will explain the combined risk assessment and next steps, if any</li>
              </ul>
            </div>

            {/* Section 6 — Understanding NT Scan Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding NT Scan Results
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Low-risk result</strong> – indicates a lower likelihood of the screened chromosomal conditions; routine prenatal care continues</li>
                <li><strong>Increased-risk result</strong> – does not confirm a diagnosis, but suggests further testing may be recommended for more certainty</li>
                <li><strong>Further testing options</strong> – may include non-invasive prenatal testing (NIPT), chorionic villus sampling (CVS), or amniocentesis, depending on individual circumstances</li>
                <li><strong>Important reassurance</strong> – an increased-risk result is not a diagnosis; many babies with an increased-risk NT result are found to be perfectly healthy after further testing</li>
                <li><strong>Personalised counselling</strong> – a good doctor explains the numbers clearly and supports informed decision-making at every step</li>
              </ul>
            </div>

            {/* Section 7 — Why Choosing the Right Doctor Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choosing the Right Doctor for This Scan Matters
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Accurate measurement requires skill and experience, since even small measurement errors can affect risk calculations</li>
                <li>A good doctor uses updated, high-resolution ultrasound equipment for clearer, more reliable images</li>
                <li>Clear communication about results reduces unnecessary anxiety, especially for first-time parents</li>
                <li>An experienced doctor can properly interpret combined screening results alongside maternal age and blood markers</li>
                <li>Prompt, well-explained guidance on further testing (if needed) helps parents make timely, informed decisions</li>
              </ul>
            </div>

            {/* Section 8 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for NT Scans in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad offering detailed prenatal screening, including NT scans, as part of comprehensive antenatal care. Her clinic follows the guiding principle of "Her Health First," ensuring every expecting parent receives clear, compassionate guidance throughout pregnancy screening.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Pregnancy, antenatal, and postnatal care</li>
                    <li>Detailed first-trimester and anomaly scans, including NT scans</li>
                    <li>Normal delivery and birthing care</li>
                    <li>High-risk pregnancy monitoring and management</li>
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Fertility evaluation and IVF treatment for those planning pregnancy</li>
                    <li>Paediatric consultations for newborn care after delivery</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology Used for Accurate NT Scanning
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines (Voluson E22BT2024) for high-resolution, detailed imaging during early pregnancy</li>
                    <li>Careful, experienced measurement technique to ensure accurate nuchal fold assessment</li>
                    <li>An integrated antenatal care approach that connects the NT scan results with your ongoing pregnancy monitoring</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised training in obstetric ultrasound and pregnancy care</li>
                    <li><strong>Continuity of care</strong> – the same team following your pregnancy journey from the NT scan through delivery</li>
                    <li><strong>Outcomes patients hope for</strong> – accurate screening, clear communication, and reassurance throughout pregnancy</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 9 — Common Myths About the NT Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About the NT Scan
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>"The NT scan diagnoses Down syndrome directly"</strong> – It is a screening test that estimates risk, not a definitive diagnosis</li>
                <li><strong>"An increased-risk result means something is definitely wrong"</strong> – Most babies with an increased-risk result are found healthy after further testing</li>
                <li><strong>"The scan is only about detecting problems"</strong> – It also confirms healthy development, accurate dating, and basic anatomy in most pregnancies</li>
                <li><strong>"Every pregnancy needs invasive testing after the NT scan"</strong> – Further testing is only recommended when the combined risk assessment suggests it's worthwhile</li>
                <li><strong>"The scan can be done at any time during pregnancy"</strong> – It must be done within a specific early window (typically weeks 11-14) for accurate results</li>
                <li><strong>"A normal NT scan guarantees a completely healthy baby"</strong> – It significantly reduces certain risks but does not rule out every possible condition</li>
              </ul>
            </div>

            {/* Section 10 — How to Prepare for Your NT Scan Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Prepare for Your NT Scan Appointment
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Confirm your exact pregnancy dating with your doctor, since scan timing depends on accurate week calculation.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Schedule your NT scan appointment within the recommended window (typically weeks 11-14).
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Follow any preparation instructions, such as having a partially full bladder if advised.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Bring your partner or a support person if you'd like company during the scan.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Ask questions during the scan about what you're seeing and what it means.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Discuss your results calmly with your doctor, understanding that risk assessment is not a diagnosis.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Follow through on any recommended further testing, if advised, without unnecessary delay.
                </p>
              </div>
            </div>

            {/* Section 11 — Benefits of Getting Your NT Scan Locally */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Getting Your NT Scan Locally in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Convenient access during a specific, time-sensitive window in early pregnancy</li>
                <li>No need to travel to another city for accurate, high-resolution prenatal screening</li>
                <li>Continuity of care with the same doctor for your entire pregnancy journey</li>
                <li>Lower overall cost compared to travelling for specialised scans elsewhere</li>
                <li>A comfortable, familiar environment during an emotionally significant appointment</li>
              </ul>
            </div>

            {/* Section 12 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for a reliable NT scan doctor in Moradabad, here are the verified contact details from the official website:
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
                      <p className="font-semibold">Phone / Call for Appointment</p>
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

            {/* Section 13 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                 gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Relevant technology clearly listed</strong> – The site specifically mentions its 3D & 4D ultrasound machine, which is directly relevant to accurate NT scan imaging.</li>
                <li><strong>Pregnancy-focused service pages</strong> – Dedicated sections for Pregnancy & Birthing Care and Antenatal Services show a clear focus on comprehensive prenatal screening.</li>
                <li><strong>Reassuring, patient-first messaging</strong> – The tagline "Her Health First" fits well with the emotional significance many parents feel during early pregnancy screening.</li>
                <li><strong>Active blog with pregnancy-related content</strong> – The trimester-by-trimester birthing guide blog suggests the clinic engages with early pregnancy topics, though a scan-specific article is not currently listed.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for quick appointment booking.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated blog post explaining the NT scan process, timing, and result interpretation could help the website rank better for this specific, time-sensitive pregnancy screening topic.</li>
              </ul>
            </div>

            {/* Section 14 — FAQs */}
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