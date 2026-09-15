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

export default function CervicalCancerScreeningMoradabad() {
  const faqs = [
    {
      q: "Which doctor offers cervical cancer screening in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers Pap smear and cervical health screening services.",
    },
    {
      q: "What causes cervical cancer?",
      a: "Persistent infection with high-risk strains of HPV is the leading cause of cervical cancer.",
    },
    {
      q: "At what age should screening begin?",
      a: "Generally around age 21, or as personally advised by your gynaecologist.",
    },
    {
      q: "Does the HPV vaccine eliminate the need for screening?",
      a: "No, screening is still recommended even after vaccination, since the vaccine doesn't cover all HPV strains.",
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
      q: "Is an abnormal screening result the same as a cancer diagnosis?",
      a: "No, most abnormal results indicate changes that need monitoring or minor treatment, not confirmed cancer.",
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
      q: "How often should screening be repeated?",
      a: "Typically every 3 years for standard Pap smear screening, though your doctor may adjust this based on your risk profile.",
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
                Cervical Cancer Screening in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                Cervical cancer is one of the most preventable and treatable cancers affecting women today, yet it remains a significant health concern in India due to low screening awareness. The encouraging fact is that with regular screening, most cervical cancers can be caught early — or even prevented entirely.
              </p>

              <p className="text-gray-700">
                This guide covers everything women should know about cervical cancer screening in Moradabad, including risk factors, screening methods, prevention options, and details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — Why Cervical Cancer Screening Deserves Attention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Cervical Cancer Screening Deserves Attention
              </h2>

              <p className="text-gray-700 mb-4">
                Cervical cancer develops slowly, often over several years, as abnormal cell changes progress in stages. This slow progression is exactly why screening is so powerful:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Screening can detect abnormal cervical cells years before they become cancerous</li>
                <li>Most cases of cervical cancer are linked to persistent HPV (Human Papillomavirus) infection</li>
                <li>Early-stage cervical cancer has significantly higher treatment success rates</li>
                <li>Regular screening reduces the likelihood of advanced-stage diagnosis</li>
                <li>Screening is quick, widely available, and far less invasive than treating advanced cancer</li>
                <li>Awareness and screening together have dramatically reduced cervical cancer deaths in countries with strong screening programs</li>
              </ul>
            </div>

            {/* Section 3 — Understanding the Link Between HPV and Cervical Cancer */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding the Link Between HPV and Cervical Cancer
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>HPV (Human Papillomavirus) is a common virus, and most sexually active individuals will be exposed to some strain in their lifetime</li>
                <li>Most HPV infections clear on their own without causing any problems</li>
                <li>Persistent infection with certain high-risk HPV strains is the leading cause of cervical cancer</li>
                <li>HPV often causes no symptoms, which is why testing is important rather than waiting for signs</li>
                <li>HPV vaccination, ideally given before the start of sexual activity, significantly reduces future cervical cancer risk</li>
                <li>Even vaccinated women should continue routine screening, as the vaccine does not cover every HPV strain</li>
              </ul>
            </div>

            {/* Section 4 — Who Is at Higher Risk */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Is at Higher Risk of Cervical Cancer?
              </h2>

              <p className="text-gray-700 mb-4">
                While regular screening benefits all women in the recommended age range, certain factors increase risk:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent infection with high-risk HPV strains</li>
                <li>Multiple sexual partners or a partner with multiple partners, increasing HPV exposure</li>
                <li>Early onset of sexual activity</li>
                <li>Smoking, which weakens the immune system's ability to clear HPV infection</li>
                <li>Long-term use of oral contraceptives (a modest risk factor, best discussed with your doctor)</li>
                <li>Weakened immune system, including conditions like HIV</li>
                <li>Family history of cervical cancer</li>
                <li>Not undergoing regular screening as recommended</li>
              </ul>
            </div>

            {/* Section 5 — Screening Methods Used */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Screening Methods Used for Cervical Cancer
              </h2>

              <p className="text-gray-700 mb-4">
                A knowledgeable gynaecologist may recommend one or a combination of these tests based on your age and risk profile:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Pap smear (Papanicolaou test)</strong> – examines cervical cells under a microscope for abnormal changes</li>
                <li><strong>HPV DNA test</strong> – detects the presence of high-risk HPV strains directly</li>
                <li><strong>Co-testing (Pap smear + HPV test)</strong> – often recommended for women in certain age groups for more comprehensive screening</li>
                <li><strong>Colposcopy</strong> – a closer visual examination of the cervix using magnification, usually done if Pap or HPV results are abnormal</li>
                <li><strong>Cervical biopsy</strong> – a small tissue sample taken during colposcopy if a suspicious area is identified</li>
                <li><strong>Visual Inspection with Acetic acid (VIA)</strong> – a simpler screening method sometimes used in resource-limited settings</li>
              </ul>
            </div>

            {/* Section 6 — General Screening Guidelines */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                General Screening Guidelines
              </h2>

              <p className="text-gray-700 mb-4">
                These are general guidelines; your doctor will personalise recommendations based on your health history:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Screening typically begins around age 21, based on doctor's guidance</li>
                <li>Pap smear alone is generally recommended every 3 years for women in the typical screening range</li>
                <li>Co-testing (Pap smear plus HPV test) may be recommended at longer intervals for certain age groups</li>
                <li>Women with previous abnormal results may need more frequent monitoring</li>
                <li>Women with a weakened immune system may need more frequent screening</li>
                <li>Screening frequency, starting age, and stopping age should always be discussed individually with your gynaecologist</li>
              </ul>
            </div>

            {/* Section 7 — What Happens If Screening Detects an Abnormality */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens If Screening Detects an Abnormality?
              </h2>

              <p className="text-gray-700 mb-4">
                An abnormal result does not mean a cervical cancer diagnosis. Here's the typical next-step process:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Mild abnormalities</strong> – often monitored with a repeat test after a few months, as many resolve naturally</li>
                <li><strong>Moderate to high-grade changes</strong> – usually require a colposcopy for closer examination</li>
                <li><strong>Confirmed precancerous lesions</strong> – can often be treated with minor procedures that remove or destroy the abnormal cells</li>
                <li><strong>Early-stage cervical cancer</strong> – has strong treatment success rates when detected promptly</li>
                <li><strong>Clear communication from your doctor</strong> – a good gynaecologist will explain each step calmly, without causing unnecessary panic</li>
              </ul>
            </div>

            {/* Section 8 — Prevention Strategies Beyond Screening */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Prevention Strategies Beyond Screening
              </h2>

              <p className="text-gray-700 mb-4">
                Screening works best when combined with preventive steps:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Consider HPV vaccination, ideally discussed with your doctor at the appropriate age</li>
                <li>Practice safe sexual health measures to reduce HPV exposure risk</li>
                <li>Avoid smoking, which weakens the body's ability to clear HPV infection</li>
                <li>Attend regular gynaecological check-ups, even without symptoms</li>
                <li>Maintain a healthy immune system through balanced nutrition and lifestyle</li>
                <li>Don't skip follow-up appointments if a previous test showed mild abnormalities</li>
                <li>Educate other women in your family and community about the importance of screening</li>
              </ul>
            </div>

            {/* Section 9 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for Cervical Cancer Screening in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad offering comprehensive preventive screening, including cervical cancer detection services. Her clinic follows the guiding principle of "Her Health First," ensuring every patient receives thorough, compassionate care.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Cervical screening, including Pap smear testing</li>
                    <li>Diagnostic hysteroscopy for further uterine evaluation when needed</li>
                    <li>Colposcopy referral and structured follow-up for abnormal results</li>
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
                    <li>3D & 4D ultrasound machines available for complementary pelvic imaging when needed</li>
                    <li>High-definition 3D laparoscopic systems available for further evaluation in complex cases</li>
                    <li>A patient-first approach that prioritises clear communication about screening results</li>
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
                    <li><strong>Outcomes patients hope for</strong> – early detection, timely intervention, and lasting peace of mind</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 10 — Common Myths About Cervical Cancer Screening */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Cervical Cancer Screening
              </h2>

              <p className="text-gray-700 mb-4">
                Many women avoid screening because of misinformation. Let's clear up a few common myths:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>"Only women with symptoms need screening"</strong> – Early cervical changes usually cause no symptoms at all</li>
                <li><strong>"It's only relevant for older women"</strong> – Screening typically starts in the early twenties, per doctor guidance</li>
                <li><strong>"If I'm vaccinated, I don't need screening"</strong> – The vaccine reduces risk but doesn't cover every HPV strain, so screening remains important</li>
                <li><strong>"An abnormal test means cancer"</strong> – Most abnormal results reflect changes that need monitoring or minor treatment, not cancer</li>
                <li><strong>"Screening is very painful"</strong> – Pap smears typically involve only mild discomfort, not significant pain</li>
                <li><strong>"It's not necessary if I'm married and monogamous"</strong> – HPV exposure can occur regardless of relationship status, so guidelines still apply</li>
              </ul>
            </div>

            {/* Section 11 — How to Approach Your Screening Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Approach Your Cervical Cancer Screening Journey
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Talk to a gynaecologist about your personal risk factors and appropriate starting age.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Schedule a Pap smear or combined Pap-HPV test as recommended.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Discuss HPV vaccination if you haven't already, especially for younger patients or family members.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Attend all follow-up appointments if results are unclear or mildly abnormal.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Ask questions freely — understanding your results reduces unnecessary anxiety.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Maintain the recommended screening schedule going forward, even after a normal result.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Encourage other women in your family to prioritise regular screening too.
                </p>
              </div>
            </div>

            {/* Section 12 — Benefits of Screening with a Local Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Screening with a Local Specialist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Convenient, quick access for a test that should be repeated periodically, not just once</li>
                <li>Easier follow-up visits and colposcopy referrals if further evaluation is needed</li>
                <li>Lower overall cost compared to travelling to another city for routine screening</li>
                <li>A comfortable, familiar environment for a sensitive but important procedure</li>
                <li>Continuity of care with the same doctor for future screenings and overall gynaecological health</li>
              </ul>
            </div>

            {/* Section 13 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for reliable cervical cancer screening in Moradabad, here are the verified contact details from the official website:
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

                <p className="text-gray-700 mb-4">
                  It's recommended to call or message on WhatsApp in advance to schedule your screening at a convenient time.
                </p>

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
                <li><strong>Reassuring, patient-first messaging</strong> – The homepage tagline "Her Health First" sets a comforting tone, important for a screening process many women feel anxious about.</li>
                <li><strong>Broad preventive and gynaecological coverage</strong> – General gynaecology and diagnostic services listed indicate the clinic supports routine screening alongside broader gynaecological care.</li>
                <li><strong>Technology transparency</strong> – Mentioning 3D/4D ultrasound and diagnostic capability builds overall confidence in the clinic's ability to follow up on abnormal findings.</li>
                <li><strong>Active blog with related health topics</strong> – Existing articles on reproductive and hormonal health show ongoing patient education, though a dedicated cervical cancer screening article is not currently listed.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for quick appointment booking.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated blog post on cervical cancer screening and HPV vaccination, along with an awareness-focused FAQ section, could help the website rank better for this important preventive health topic and encourage more women to book timely screenings.</li>
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