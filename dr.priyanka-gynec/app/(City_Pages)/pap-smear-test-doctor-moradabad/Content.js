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

export default function PapSmearTestMoradabad() {
  const faqs = [
    {
      q: "Which doctor performs Pap smear tests in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers Pap smear testing and cervical health screening.",
    },
    {
      q: "Is a Pap smear test painful?",
      a: "No, most women feel only mild pressure; it is not typically painful.",
    },
    {
      q: "At what age should I start Pap smear screening?",
      a: "Generally around age 21, or as personally advised by your gynaecologist.",
    },
    {
      q: "How often should I get a Pap smear?",
      a: "Typically every 3 years in the standard screening range, though your doctor may adjust this based on your history.",
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
      q: "Does an abnormal Pap smear mean I have cancer?",
      a: "No, it usually indicates changes that need monitoring or minor treatment, not a cancer diagnosis.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with questions before visiting?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Can the Pap smear be combined with other gynaecological checks?",
      a: "Yes, it is often done alongside a routine gynaecological consultation for overall convenience.",
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
                Pap Smear Test Doctor in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                A Pap smear is one of the simplest yet most powerful tests in women's preventive healthcare, capable of detecting cervical changes years before they turn into cancer. Despite its importance, many women in India delay or skip this test due to lack of awareness, hesitation, or simply not knowing where to go.
              </p>

              <p className="text-gray-700">
                This guide explains what a Pap smear test involves, who needs it, and how to find a reliable Pap smear test doctor in Moradabad — including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — What Is a Pap Smear Test */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a Pap Smear Test?
              </h2>

              <p className="text-gray-700 mb-4">
                A Pap smear (Papanicolaou test) is a simple screening procedure in which cells are gently collected from the cervix and examined under a microscope for any abnormal changes. It is primarily used to:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Detect early, precancerous changes in cervical cells before they progress to cancer</li>
                <li>Identify existing cervical cancer at an early, more treatable stage</li>
                <li>Sometimes detect infections or inflammation of the cervix</li>
                <li>Support overall reproductive health monitoring alongside other gynaecological checks</li>
              </ul>
            </div>

            {/* Section 3 — Why Pap Smear Screening Is Important */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Pap Smear Screening Is So Important
              </h2>

              <p className="text-gray-700 mb-4">
                Cervical cancer is one of the most preventable cancers in women, largely because regular screening can catch problems long before symptoms appear. Here's why the test matters so much:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Cervical cancer often shows no symptoms in its early, most treatable stages</li>
                <li>Regular screening can detect abnormal cells years before cancer develops</li>
                <li>Early detection dramatically improves treatment success and survival rates</li>
                <li>The test is quick, minimally uncomfortable, and takes only a few minutes</li>
                <li>It also helps identify HPV (Human Papillomavirus) infection, the leading cause of cervical cancer</li>
                <li>Screening reduces the need for more invasive, complex treatment later</li>
                <li>It empowers women to take a proactive role in their long-term health</li>
              </ul>
            </div>

            {/* Section 4 — Who Should Get a Pap Smear Test */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Get a Pap Smear Test?
              </h2>

              <p className="text-gray-700 mb-4">
                General screening guidelines (which your doctor may personalise based on your history) typically suggest:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Women should generally begin Pap smear screening around age 21, or as advised by their doctor</li>
                <li>Routine testing is usually recommended every 3 years for women in the typical screening age range</li>
                <li>Women aged 30 and above may be advised co-testing (Pap smear plus HPV test) at longer intervals, per doctor's guidance</li>
                <li>Women with a history of abnormal results may need more frequent testing</li>
                <li>Women with HIV or a weakened immune system may need more frequent screening</li>
                <li>Screening frequency and start/stop age should always be personalised through discussion with a gynaecologist</li>
              </ul>
            </div>

            {/* Section 5 — What to Expect During the Test */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a Pap Smear Test
              </h2>

              <p className="text-gray-700 mb-4">
                Many women avoid the test simply because they don't know what to expect. Here's a simple breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Before the test</strong> – avoid intercourse, douching, or vaginal medications for 24-48 hours as advised</li>
                <li><strong>During the test</strong> – you lie down comfortably, and the doctor uses a speculum to gently view the cervix</li>
                <li><strong>Sample collection</strong> – a small, soft brush or spatula is used to collect cells from the cervix, taking only a few seconds</li>
                <li><strong>Discomfort level</strong> – most women feel mild pressure, but the test is not typically painful</li>
                <li><strong>Duration</strong> – the entire procedure usually takes less than 5-10 minutes</li>
                <li><strong>After the test</strong> – you can resume normal activities immediately; very light spotting is possible</li>
                <li><strong>Getting results</strong> – results are usually available within a few days to a week, explained clearly by your doctor</li>
              </ul>
            </div>

            {/* Section 6 — Understanding Pap Smear Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Pap Smear Results
              </h2>

              <p className="text-gray-700 mb-4">
                A reliable doctor doesn't just hand over a report — she explains what it means and what happens next.
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Normal result</strong> – no abnormal cells detected; routine screening continues as scheduled</li>
                <li><strong>Unclear or mildly abnormal result</strong> – may require a repeat test or additional HPV testing</li>
                <li><strong>Abnormal result (precancerous changes)</strong> – may require further testing like colposcopy for closer examination</li>
                <li><strong>Confirmed abnormal cells</strong> – early treatment options are usually very effective at this stage</li>
                <li><strong>Important reassurance</strong> – an abnormal Pap smear does not automatically mean cancer; it usually means changes that need monitoring or minor treatment</li>
              </ul>
            </div>

            {/* Section 7 — Why Choosing the Right Doctor Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choosing the Right Doctor for This Test Matters
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A gentle, experienced doctor makes the procedure far more comfortable, encouraging women to continue regular screening</li>
                <li>Accurate sample collection technique reduces the chance of inconclusive results requiring repeat testing</li>
                <li>A doctor who explains results clearly reduces unnecessary anxiety about abnormal findings</li>
                <li>Proper follow-up care ensures abnormal results are managed promptly and appropriately</li>
                <li>An experienced gynaecologist can combine the Pap smear with a broader gynaecological health check in the same visit</li>
              </ul>
            </div>

            {/* Section 8 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for Pap Smear Testing in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad, offering comfortable, thorough preventive screening including Pap smear testing. Her clinic follows the guiding principle of "Her Health First," ensuring every patient feels informed and at ease throughout the process.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Cervical screening, including Pap smear testing</li>
                    <li>Diagnostic hysteroscopy for further evaluation when needed</li>
                    <li>Colposcopy referral and follow-up guidance for abnormal results</li>
                    <li>Pregnancy, antenatal, and postnatal care</li>
                    <li>3D laparoscopic gynaecological surgery for more complex gynaecological conditions</li>
                    <li>PCOS and hormonal imbalance evaluation</li>
                    <li>Endometriosis and chronic pelvic pain management</li>
                    <li>Fertility evaluation and IVF treatment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology and Approach Supporting Accurate Screening
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines available for complementary pelvic imaging if needed</li>
                    <li>High-definition 3D laparoscopic systems available for further evaluation in complex cases</li>
                    <li>A patient-first consultation approach that prioritises comfort during sensitive procedures</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised fellowship training in gynaecology</li>
                    <li><strong>Continuity of care</strong> – the same team tracking a patient's screening history and follow-up needs over time</li>
                    <li><strong>Outcomes patients hope for</strong> – early detection, timely intervention, and peace of mind</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 9 — Common Myths About Pap Smear Testing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Pap Smear Testing
              </h2>

              <p className="text-gray-700 mb-4">
                Many women avoid the test because of misinformation. Let's clear up a few common myths:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>"It's very painful"</strong> – Most women feel only mild pressure, not significant pain</li>
                <li><strong>"I don't need it if I feel healthy"</strong> – Cervical changes often show no symptoms until advanced stages</li>
                <li><strong>"Only married women need it"</strong> – Screening guidelines are based on age and risk factors, not marital status alone</li>
                <li><strong>"One normal test means I never need another"</strong> – Regular, periodic screening is still recommended based on your doctor's advice</li>
                <li><strong>"It diagnoses cancer directly"</strong> – It's a screening tool to detect abnormal cells early, not a cancer diagnosis by itself</li>
                <li><strong>"It's only for older women"</strong> – Screening typically starts in the early twenties, per doctor guidance</li>
              </ul>
            </div>

            {/* Section 10 — How to Choose the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Choose the Right Doctor for Pap Smear Testing
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Look for a qualified gynaecologist – MS/DGO qualification with experience in preventive screening.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Confirm lab and follow-up support – check if the clinic can guide you through further testing if results are abnormal.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Check for a comfortable, respectful environment – this matters greatly for a sensitive procedure.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Read patient reviews – look for mentions of a gentle approach and clear result explanation.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Check contact accessibility – phone and WhatsApp availability help for quick appointment booking.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Ask about screening frequency guidance – a good doctor personalises the schedule to your age and history.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Evaluate communication style – the doctor should explain the process and results without causing unnecessary worry.
                </p>
              </div>
            </div>

            {/* Section 11 — Benefits of Getting Screened Locally */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Getting Screened by a Local Specialist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Convenient, quick access for a test that should be done periodically, not just once</li>
                <li>Easier follow-up visits if further testing or monitoring is needed</li>
                <li>Lower overall cost compared to travelling to another city for routine screening</li>
                <li>A more comfortable, familiar environment for a sensitive procedure</li>
                <li>Continuity of care with the same doctor for future screenings and gynaecological health</li>
              </ul>
            </div>

            {/* Section 12 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for a reliable Pap smear test doctor in Moradabad, here are the verified contact details from the official website:
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
                Website Analysis: gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Patient-comfort-focused messaging</strong> – The homepage tagline "Her Health First" sets a reassuring tone, important for preventive screening procedures many women feel anxious about.</li>
                <li><strong>Broad preventive and gynaecological coverage</strong> – General gynaecology and diagnostic services are listed, indicating capability for routine screening alongside other care.</li>
                <li><strong>Technology transparency</strong> – Mentioning 3D/4D ultrasound and diagnostic tools builds overall confidence in the clinic's diagnostic capability.</li>
                <li><strong>Active blog with related health topics</strong> – Existing articles on reproductive health show ongoing patient education, though a dedicated Pap smear or cervical screening article is not currently listed.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for quick appointment booking.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated blog post explaining Pap smear and cervical cancer screening, along with a preventive health checklist, could help the website rank better for this important topic and educate more first-time patients.</li>
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