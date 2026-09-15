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

export default function DoubleMarkerTestMoradabad() {
  const faqs = [
    {
      q: "Which doctor coordinates double marker testing in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers first-trimester screening, including double marker test coordination.",
    },
    {
      q: "When should the double marker test be done?",
      a: "Typically between weeks 9 and 13 of pregnancy, ideally alongside the NT scan.",
    },
    {
      q: "Is the double marker test a diagnostic test?",
      a: "No, it is a screening test that estimates risk, not a definitive diagnosis.",
    },
    {
      q: "What two markers does the test measure?",
      a: "Free beta-hCG and PAPP-A levels in the mother's blood.",
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
      q: "Does the double marker test carry any risk to the pregnancy?",
      a: "No, it is a simple blood draw with no risk to mother or baby.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with questions before my test?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "What happens if my result shows increased risk?",
      a: "Your doctor will discuss further testing options like NIPT, CVS, or amniocentesis, based on your specific situation.",
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
                Double Marker Test Doctor in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                The double marker test is a key blood test performed during early pregnancy, giving expecting parents important information about their baby's chromosomal health well before the second trimester. Often done alongside the NT scan, it plays a central role in first-trimester screening.
              </p>

              <p className="text-gray-700">
                This guide explains what the double marker test involves, how to interpret results, and how to find a reliable double marker test doctor in Moradabad — including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — What Is the Double Marker Test */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is the Double Marker Test?
              </h2>

              <p className="text-gray-700 mb-4">
                The double marker test is a maternal blood test that measures the levels of two specific substances in the mother's blood:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Free beta-hCG (human chorionic gonadotropin)</strong> – a hormone produced during pregnancy</li>
                <li><strong>PAPP-A (Pregnancy-Associated Plasma Protein-A)</strong> – a protein produced by the placenta</li>
              </ul>

              <p className="text-gray-700 mt-4">
                These two markers, when combined with the mother's age and the NT scan measurement, help estimate the risk of certain chromosomal conditions in the developing baby. It is important to understand that this is a screening test, not a diagnostic one — it calculates probability, not certainty.
              </p>
            </div>

            {/* Section 3 — Why the Double Marker Test Is Recommended */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why the Double Marker Test Is Recommended
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>It helps assess the likelihood of chromosomal conditions such as Down syndrome (Trisomy 21), Edwards syndrome (Trisomy 18), and Patau syndrome (Trisomy 13)</li>
                <li>Combined with the NT scan, it significantly improves the accuracy of first-trimester risk assessment compared to either test alone</li>
                <li>It allows parents the option to consider further diagnostic testing early in pregnancy, if the combined risk is found to be higher than average</li>
                <li>It is a simple blood draw, involving no risk to the mother or baby</li>
                <li>It provides valuable information and reassurance for the majority of pregnancies that fall within the normal risk range</li>
                <li>Early screening supports better-informed decision-making and pregnancy planning</li>
              </ul>
            </div>

            {/* Section 4 — When Is the Double Marker Test Done */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Is the Double Marker Test Done?
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The test is typically performed during the first trimester, generally between weeks 9 and 13 of pregnancy</li>
                <li>It is most accurate when combined with the NT scan performed around the same time window (weeks 11-14)</li>
                <li>Accurate pregnancy dating is essential, as results are calculated based on gestational age</li>
                <li>Your doctor will confirm the exact ideal timing based on your specific pregnancy dating</li>
              </ul>
            </div>

            {/* Section 5 — How the Double Marker Test Is Performed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How the Double Marker Test Is Performed
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Simple blood draw</strong> – a small sample of the mother's blood is collected, similar to any routine blood test</li>
                <li><strong>No special preparation usually required</strong> – though your doctor may provide specific instructions based on your situation</li>
                <li><strong>Laboratory analysis</strong> – the sample is analysed for beta-hCG and PAPP-A levels</li>
                <li><strong>Combined risk calculation</strong> – results are combined with maternal age, gestational age, and NT scan measurement to generate a combined risk score</li>
                <li><strong>Turnaround time</strong> – results are typically available within a few days</li>
                <li><strong>Result discussion</strong> – your doctor explains what the combined risk score means and whether further testing is recommended</li>
              </ul>
            </div>

            {/* Section 6 — Understanding Double Marker Test Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Double Marker Test Results
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Low-risk result</strong> – suggests a lower likelihood of the screened chromosomal conditions; routine prenatal care continues as planned</li>
                <li><strong>Increased-risk result</strong> – indicates that further testing may provide more clarity; it does not confirm a diagnosis</li>
                <li><strong>Combined screening accuracy</strong> – using the double marker test alongside the NT scan offers a more reliable risk estimate than either test alone</li>
                <li><strong>Options after an increased-risk result</strong> – may include non-invasive prenatal testing (NIPT), chorionic villus sampling (CVS), or amniocentesis, depending on individual circumstances and doctor's advice</li>
                <li><strong>Important reassurance</strong> – many pregnancies flagged as increased-risk are later confirmed to be healthy after further testing</li>
              </ul>
            </div>

            {/* Section 7 — Double Marker Test vs Other Screening Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Double Marker Test vs Other Pregnancy Screening Options
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Double marker test</strong> – a first-trimester blood test measuring two specific markers, usually combined with the NT scan</li>
                <li><strong>Triple marker or quadruple marker test</strong> – performed later, in the second trimester, measuring different markers for similar screening purposes</li>
                <li><strong>NIPT (Non-Invasive Prenatal Testing)</strong> – a more advanced blood test analysing foetal DNA fragments in maternal blood, offering higher accuracy but at a higher cost</li>
                <li><strong>CVS and amniocentesis</strong> – diagnostic (not screening) tests that provide definitive answers but carry a small procedural risk, typically considered after an increased-risk screening result</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A knowledgeable doctor helps you understand which combination of tests suits your specific pregnancy, budget, and personal preferences.
              </p>
            </div>

            {/* Section 8 — Why Choosing the Right Doctor Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choosing the Right Doctor for This Test Matters
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Accurate interpretation of combined risk scores requires medical expertise, not just raw lab numbers</li>
                <li>A good doctor times the test correctly alongside your NT scan for the most reliable combined result</li>
                <li>Clear, compassionate communication about results reduces unnecessary anxiety for expecting parents</li>
                <li>An experienced gynaecologist can guide you calmly through next steps if further testing is recommended</li>
                <li>Proper documentation and follow-up ensure your results are integrated into your overall antenatal care plan</li>
              </ul>
            </div>

            {/* Section 9 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for Double Marker Testing in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad offering comprehensive first-trimester screening, including the double marker test, as part of complete antenatal care. Her clinic follows the guiding principle of "Her Health First," ensuring every expecting parent receives clear, supportive guidance through pregnancy screening decisions.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Pregnancy, antenatal, and postnatal care</li>
                    <li>First-trimester screening, including double marker test coordination and NT scan</li>
                    <li>3D & 4D ultrasound imaging for combined risk assessment</li>
                    <li>High-risk pregnancy monitoring and management</li>
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Fertility evaluation and IVF treatment for those planning pregnancy</li>
                    <li>Paediatric consultations for newborn care after delivery</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology and Approach Supporting Accurate Screening
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines (Voluson E22BT2024) for precise NT measurement alongside blood marker results</li>
                    <li>A coordinated antenatal care approach that combines blood test results with ultrasound findings for accurate risk calculation</li>
                    <li>Clear, patient-friendly explanation of combined screening results and next steps</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised training in obstetric care and prenatal screening</li>
                    <li><strong>Continuity of care</strong> – the same team following your pregnancy journey from first-trimester screening through delivery</li>
                    <li><strong>Outcomes patients hope for</strong> – accurate screening, clear communication, and confidence throughout pregnancy</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 10 — Common Myths About the Double Marker Test */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About the Double Marker Test
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>"The test diagnoses chromosomal conditions directly"</strong> – It is a screening test that calculates risk, not a definitive diagnosis</li>
                <li><strong>"An increased-risk result always means something is wrong"</strong> – Many babies with increased-risk results are confirmed healthy after further testing</li>
                <li><strong>"The blood test alone is enough without the NT scan"</strong> – Combining both significantly improves accuracy compared to either test alone</li>
                <li><strong>"It's an optional test with no real value"</strong> – It provides meaningful early information that helps guide further decisions if needed</li>
                <li><strong>"The test carries a risk to the pregnancy"</strong> – It is a simple blood draw with no risk to the mother or baby, unlike diagnostic procedures like amniocentesis</li>
                <li><strong>"Every pregnancy needs the same screening plan"</strong> – Doctors personalise the recommended combination of tests based on individual risk factors</li>
              </ul>
            </div>

            {/* Section 11 — How to Prepare for Your Double Marker Test */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Prepare for Your Double Marker Test
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Confirm your exact pregnancy dating with your doctor, since accurate timing affects result reliability.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Schedule the blood test within the recommended window (typically weeks 9-13).
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Coordinate timing with your NT scan appointment for the most accurate combined risk assessment.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Follow any specific instructions provided by your doctor before the blood draw.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Wait for your results calmly, understanding the turnaround time is usually a few days.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Discuss your combined risk score with your doctor, understanding what it does and doesn't mean.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Follow through on any recommended further testing, if advised, without unnecessary delay.
                </p>
              </div>
            </div>

            {/* Section 12 — Benefits of Getting Your Test Locally */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Getting Your Double Marker Test Locally in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Convenient access during a specific, time-sensitive window in early pregnancy</li>
                <li>Coordinated scheduling with your NT scan for accurate combined screening</li>
                <li>No need to travel to another city for reliable first-trimester screening</li>
                <li>Continuity of care with the same doctor for your entire pregnancy journey</li>
                <li>Lower overall cost compared to travelling for specialised testing elsewhere</li>
              </ul>
            </div>

            {/* Section 13 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for a reliable double marker test doctor in Moradabad, here are the verified contact details from the official website:
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

            {/* Section 14 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                 gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Pregnancy-focused service pages</strong> – Dedicated sections for Pregnancy & Birthing Care and Antenatal Services show a clear focus on comprehensive first-trimester screening.</li>
                <li><strong>Relevant technology mentioned</strong> – The site's 3D & 4D ultrasound machine supports the NT scan component of combined first-trimester screening, complementing blood test results.</li>
                <li><strong>Reassuring, patient-first messaging</strong> – The tagline "Her Health First" fits well with the emotional significance many parents feel during early pregnancy screening decisions.</li>
                <li><strong>Active blog with pregnancy-related content</strong> – The trimester-by-trimester birthing guide blog suggests ongoing patient education, though a specific double marker test article is not currently listed.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for quick appointment booking.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated blog post explaining the double marker test, its timing, and how it works alongside the NT scan could help the website rank better for this specific first-trimester screening topic and better educate first-time parents.</li>
              </ul>
            </div>

            {/* Section 15 — FAQs */}
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