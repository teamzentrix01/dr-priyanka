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

export default function UTITreatmentWomenMoradabad() {
  const faqs = [
    {
      q: "Which doctor treats UTIs in women in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers diagnosis and treatment for urinary tract infections.",
    },
    {
      q: "What are the common symptoms of a UTI?",
      a: "Burning urination, frequent urge to urinate, cloudy urine, and pelvic discomfort are common signs.",
    },
    {
      q: "Can a UTI be treated without antibiotics?",
      a: "Most UTIs require antibiotics prescribed after proper diagnosis; self-treatment is not recommended.",
    },
    {
      q: "What tests are done to confirm a UTI?",
      a: "A urinalysis and urine culture test are typically done to confirm infection and guide treatment.",
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
      q: "Can UTIs occur during pregnancy?",
      a: "Yes, pregnancy increases UTI risk and requires prompt treatment to avoid complications.",
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
      q: "What causes recurrent UTIs in some women?",
      a: "Diabetes, hormonal changes, incomplete bladder emptying, and structural issues can all contribute.",
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
                UTI Treatment for Women in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                Urinary Tract Infections (UTIs) are among the most common health problems women face, with many experiencing at least one episode in their lifetime. Left untreated or poorly managed, a UTI can lead to repeated infections, kidney complications, and long-term discomfort.
              </p>

              <p className="text-gray-700">
                This guide explains what causes UTIs, how to recognise the symptoms, and how to find the right doctor for UTI treatment for women in Moradabad — including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — What Is a UTI */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a UTI and Why Are Women More Prone to It?
              </h2>

              <p className="text-gray-700 mb-4">
                A urinary tract infection occurs when bacteria enter the urinary system — the bladder, urethra, ureters, or kidneys — and multiply, causing inflammation and infection. Women are significantly more prone to UTIs than men because of the following anatomical and lifestyle reasons:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A shorter urethra allows bacteria to reach the bladder more easily</li>
                <li>Close proximity of the urethra to the anus increases the risk of bacterial transfer</li>
                <li>Sexual activity can introduce bacteria into the urinary tract</li>
                <li>Pregnancy causes hormonal and physical changes that increase UTI risk</li>
                <li>Menopause reduces natural protective bacteria, increasing susceptibility</li>
                <li>Use of certain contraceptives (like diaphragms) can raise infection risk</li>
                <li>Poor bathroom hygiene habits, such as wiping back to front</li>
                <li>Holding urine for long periods, allowing bacteria to multiply</li>
                <li>Diabetes and weakened immunity increase vulnerability to infections</li>
              </ul>
            </div>

            {/* Section 3 — Common Symptoms of a UTI */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Symptoms of a UTI in Women
              </h2>

              <p className="text-gray-700 mb-4">
                Recognising symptoms early helps in getting timely treatment and avoiding complications. Common signs include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A strong, persistent urge to urinate, even right after emptying the bladder</li>
                <li>A burning sensation while urinating</li>
                <li>Passing frequent, small amounts of urine</li>
                <li>Cloudy, dark, or strong-smelling urine</li>
                <li>Blood in the urine (visible or detected in tests)</li>
                <li>Pelvic pain or pressure, especially in the lower abdomen</li>
                <li>Pain or discomfort during intercourse</li>
                <li>Fatigue or a general feeling of being unwell</li>
                <li><strong>Warning signs of a more serious kidney infection</strong> – fever, chills, nausea, vomiting, or back/side pain, which need urgent medical attention</li>
              </ul>
            </div>

            {/* Section 4 — Why Timely Treatment Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Timely Treatment for UTIs Matters
              </h2>

              <p className="text-gray-700 mb-4">
                Many women try to "wait it out" or self-treat with home remedies, which can sometimes worsen the condition. Here's why prompt medical care is important:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Untreated UTIs can spread from the bladder to the kidneys, causing more serious infection</li>
                <li>Recurrent, poorly treated UTIs can lead to permanent kidney damage over time</li>
                <li>UTIs during pregnancy can increase the risk of preterm labour if untreated</li>
                <li>Incomplete antibiotic courses can lead to antibiotic-resistant bacteria</li>
                <li>Chronic, recurring UTIs affect quality of life, sleep, and daily comfort</li>
                <li>A proper diagnosis identifies whether it's a simple infection or a sign of an underlying condition like diabetes or structural issues</li>
              </ul>
            </div>

            {/* Section 5 — Causes of Recurrent UTIs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Causes and Risk Factors Behind Recurrent UTIs
              </h2>

              <p className="text-gray-700 mb-4">
                For women who experience UTIs repeatedly, a gynaecologist looks deeper into underlying causes, which may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Incomplete bladder emptying</strong> – due to pelvic floor weakness or structural issues</li>
                <li><strong>Diabetes</strong> – high blood sugar levels create a favourable environment for bacteria</li>
                <li><strong>Menopause-related hormonal changes</strong> – reducing natural protective vaginal flora</li>
                <li><strong>Sexual activity patterns</strong> – without proper post-intimacy hygiene practices</li>
                <li><strong>Kidney or bladder stones</strong> – which can harbour bacteria and cause repeated infections</li>
                <li><strong>Structural abnormalities in the urinary tract</strong> – sometimes present from birth</li>
                <li><strong>Weakened immune system</strong> – making the body less able to fight off infection</li>
                <li><strong>Catheter use</strong> – increasing the risk of introducing bacteria into the urinary tract</li>
              </ul>
            </div>

            {/* Section 6 — What to Expect During Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a UTI Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                A thorough consultation with an experienced gynaecologist for UTI treatment typically includes:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Detailed symptom history</strong> – understanding frequency, duration, and severity of symptoms</li>
                <li><strong>Urine test (urinalysis)</strong> – to confirm the presence of infection and identify the bacteria involved</li>
                <li><strong>Urine culture test</strong> – to determine the most effective antibiotic for treatment</li>
                <li><strong>Blood sugar check</strong> – especially important for women with recurrent infections</li>
                <li><strong>Pelvic examination if needed</strong> – to rule out other gynaecological causes of symptoms</li>
                <li><strong>Ultrasound scan for recurrent cases</strong> – to check for kidney or bladder stones or structural issues</li>
                <li><strong>Personalised antibiotic treatment</strong> – based on the specific bacteria identified</li>
                <li><strong>Hydration and hygiene guidance</strong> – practical steps to reduce recurrence</li>
                <li><strong>Follow-up testing</strong> – to confirm the infection has fully cleared</li>
              </ul>
            </div>

            {/* Section 7 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for UTI Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad, offering thorough evaluation and treatment for urinary and reproductive health concerns, including UTIs. Her clinic follows the guiding principle of "Her Health First," ensuring every patient receives careful, unhurried attention.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Diagnosis and treatment of urinary and vaginal infections</li>
                    <li>Evaluation of recurrent infections linked to hormonal or structural causes</li>
                    <li>Diabetes-related gynaecological complication management</li>
                    <li>Pregnancy, antenatal, and postnatal care (important for UTI monitoring during pregnancy)</li>
                    <li>3D laparoscopic gynaecological surgery for structural issues if required</li>
                    <li>Diagnostic hysteroscopy and pelvic evaluation when needed</li>
                    <li>PCOS and hormonal imbalance management</li>
                    <li>Paediatric consultations for younger patients</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology Used for Accurate Diagnosis
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines for detailed pelvic, bladder, and kidney-area imaging</li>
                    <li>High-definition 3D laparoscopic systems for further evaluation of structural causes if needed</li>
                    <li>Lab-supported diagnostic testing as part of comprehensive gynaecological care</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised fellowship training in gynaecology and related fields</li>
                    <li><strong>Continuity of care</strong> – the same team tracking a patient's history and recurring symptoms across visits</li>
                    <li><strong>Outcomes patients hope for</strong> – accurate diagnosis, effective treatment, and long-term relief from recurring infections</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 8 — Prevention Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Prevention Tips to Reduce UTI Risk
              </h2>

              <p className="text-gray-700 mb-4">
                Along with treatment, prevention plays a big role in avoiding repeat infections. General guidance includes:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Drink plenty of water throughout the day to flush out bacteria</li>
                <li>Urinate as soon as you feel the need; avoid holding it in for long periods</li>
                <li>Always wipe front to back after using the washroom</li>
                <li>Urinate shortly after sexual intercourse to help clear bacteria</li>
                <li>Avoid using scented feminine hygiene products that can irritate the urethra</li>
                <li>Wear breathable, cotton underwear instead of tight synthetic fabrics</li>
                <li>Keep blood sugar levels well controlled if diabetic</li>
                <li>Avoid unnecessary or prolonged use of spermicide-based contraceptives if prone to UTIs</li>
                <li>Complete the full course of prescribed antibiotics, even if symptoms improve early</li>
                <li>Consider cranberry-based products only after discussing with your doctor, as evidence varies</li>
              </ul>
            </div>

            {/* Section 9 — How to Choose the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Choose the Right Doctor for UTI Treatment
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Look for a qualified gynaecologist – MS/DGO qualification with experience handling urinary and reproductive health together.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Confirm lab testing facilities – accurate treatment depends on proper urine culture testing, not guesswork.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Check for recurrent UTI expertise – ask if the doctor investigates underlying causes for repeated infections.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Read patient reviews – look for mentions of accurate diagnosis and long-term relief.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Check contact accessibility – phone and WhatsApp availability help for quick follow-up questions.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Ask about pregnancy-related UTI care – important if you are currently pregnant or planning pregnancy.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Evaluate communication style – the doctor should explain the cause, treatment, and prevention clearly.
                </p>
              </div>
            </div>

            {/* Section 10 — Benefits of Consulting a Local Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Faster appointment availability without long-distance travel, important since UTIs need prompt treatment</li>
                <li>Easier follow-up visits and repeat urine tests to confirm the infection has cleared</li>
                <li>Lower overall treatment cost compared to travelling to another city</li>
                <li>Continuity of care if recurrent UTIs are linked to a broader issue like diabetes or hormonal imbalance</li>
                <li>Quick access to ultrasound and lab testing facilities when needed</li>
                <li>Comfortable, familiar environment for discussing a sensitive health concern</li>
              </ul>
            </div>

            {/* Section 11 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for reliable UTI treatment for women in Moradabad, here are the verified contact details from the official website:
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

            {/* Section 12 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Website Analysis: gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Reassuring, patient-first messaging</strong> – The homepage tagline "Her Health First" sets a comforting tone, which matters for women hesitant to discuss urinary symptoms.</li>
                <li><strong>Broad gynaecological coverage</strong> – General gynaecology and hormonal health services are listed, showing the clinic can evaluate infections alongside related causes like PCOS or diabetes.</li>
                <li><strong>Technology transparency</strong> – Mentioning 3D/4D ultrasound and diagnostic capability builds confidence for investigating recurrent infections.</li>
                <li><strong>Active blog with related health topics</strong> – Existing articles on hormonal and reproductive health suggest the clinic engages with broader women's health education, though a UTI-specific article is not currently listed.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for quick communication.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated blog post or service page specifically on UTI and urinary health could help the website rank better for this topic and give patients more targeted information before booking.</li>
              </ul>
            </div>

            {/* Section 13 — FAQs */}
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