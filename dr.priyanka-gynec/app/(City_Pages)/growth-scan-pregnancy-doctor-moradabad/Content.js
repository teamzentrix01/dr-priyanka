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

export default function GrowthScanMoradabad() {
  const faqs = [
    {
      q: "Which doctor performs growth scans in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers growth scans using 3D/4D ultrasound technology.",
    },
    {
      q: "When is a growth scan usually done?",
      a: "Typically in the third trimester, often around 28-32 weeks and again closer to 36-38 weeks.",
    },
    {
      q: "What does a growth scan measure?",
      a: "It measures the baby's estimated weight, head and abdomen size, amniotic fluid, and sometimes blood flow.",
    },
    {
      q: "Is a growth scan the same as the anomaly scan?",
      a: "No, the anomaly scan checks structural development earlier in pregnancy, while the growth scan focuses on size and wellbeing later on.",
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
      q: "Is a growth scan painful or risky?",
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
      q: "What happens if my baby measures small or large for gestational age?",
      a: "Your doctor will discuss closer monitoring, additional tests, or follow-up scans based on your specific situation.",
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
                Growth Scan Pregnancy Doctor in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                As pregnancy progresses, monitoring how well the baby is growing becomes just as important as earlier screening tests. A growth scan gives expecting parents and their doctor a clear picture of the baby's development, helping catch potential concerns early enough to act on them.
              </p>

              <p className="text-gray-700">
                This guide explains what a growth scan involves, when it's needed, and how to find a reliable growth scan pregnancy doctor in Moradabad — including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — What Is a Growth Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a Growth Scan?
              </h2>

              <p className="text-gray-700 mb-4">
                A growth scan (also called a fetal growth ultrasound) is a detailed ultrasound performed later in pregnancy, typically in the third trimester, to assess how well the baby is growing and developing. Unlike the earlier anomaly scan, which focuses on structural development, the growth scan focuses specifically on:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The baby's estimated weight and overall size</li>
                <li>The measurement of the head, abdomen, and thigh bone to calculate growth percentiles</li>
                <li>The amount of amniotic fluid surrounding the baby</li>
                <li>Blood flow patterns through the umbilical cord and placenta (Doppler studies, if needed)</li>
                <li>The baby's position in the womb as delivery approaches</li>
              </ul>
            </div>

            {/* Section 3 — Why Growth Scans Are Important */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Growth Scans Are Important
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>They help identify if a baby is growing too slowly (restricted growth) or unusually large for its gestational age</li>
                <li>They allow early detection of conditions like placental insufficiency, which can affect the baby's nutrient supply</li>
                <li>They help monitor amniotic fluid levels, which can indicate underlying issues if too high or too low</li>
                <li>They support timely decision-making about delivery timing in cases of growth concerns</li>
                <li>They provide reassurance for the majority of pregnancies progressing normally</li>
                <li>They help track twin or multiple pregnancies, where growth patterns need closer monitoring</li>
              </ul>
            </div>

            {/* Section 4 — When Are Growth Scans Typically Recommended */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Are Growth Scans Typically Recommended?
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Routine growth scans are often scheduled around 28-32 weeks and again closer to 36-38 weeks, depending on your doctor's protocol</li>
                <li>More frequent growth scans may be recommended for high-risk pregnancies, including those involving gestational diabetes, hypertension, or a history of growth concerns</li>
                <li>Twin or multiple pregnancies typically require more frequent growth monitoring</li>
                <li>If a routine check-up (like fundal height measurement) suggests a possible growth concern, an additional scan may be scheduled promptly</li>
                <li>Your doctor will personalise the growth scan schedule based on your specific pregnancy history and risk factors</li>
              </ul>
            </div>

            {/* Section 5 — What Happens During a Growth Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During a Growth Scan
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Abdominal ultrasound</strong> – performed externally over the mother's abdomen, generally painless and non-invasive</li>
                <li><strong>Detailed measurements</strong> – the sonographer or doctor measures the baby's head circumference, abdominal circumference, and femur (thigh bone) length</li>
                <li><strong>Estimated fetal weight calculation</strong> – these measurements are combined to estimate the baby's current weight</li>
                <li><strong>Amniotic fluid assessment</strong> – checking whether fluid levels are within a healthy range</li>
                <li><strong>Doppler studies, if needed</strong> – assessing blood flow through the umbilical cord and sometimes the baby's brain, particularly if growth restriction is suspected</li>
                <li><strong>Position check</strong> – confirming whether the baby is head-down or in another position as delivery approaches</li>
                <li><strong>Duration</strong> – typically takes 15-30 minutes, depending on the baby's position and the details being assessed</li>
              </ul>
            </div>

            {/* Section 6 — Understanding Growth Scan Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Growth Scan Results
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Normal growth pattern</strong> – the baby's measurements fall within expected percentile ranges for gestational age; routine care continues</li>
                <li><strong>Growth restriction (small for gestational age)</strong> – may require closer monitoring, additional scans, or further tests to identify the cause</li>
                <li><strong>Large for gestational age</strong> – may require additional monitoring, especially in pregnancies with gestational diabetes</li>
                <li><strong>Amniotic fluid concerns</strong> – too much (polyhydramnios) or too little (oligohydramnios) fluid may need further evaluation</li>
                <li><strong>Doppler flow concerns</strong> – abnormal blood flow patterns may influence decisions about monitoring frequency or delivery timing</li>
                <li><strong>Personalised follow-up plan</strong> – your doctor will explain what the results mean for your specific pregnancy and outline any next steps</li>
              </ul>
            </div>

            {/* Section 7 — Why Choosing the Right Doctor Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choosing the Right Doctor for Growth Scans Matters
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Accurate measurement technique is essential, since small errors can affect growth percentile calculations</li>
                <li>A good doctor uses high-resolution ultrasound equipment for clearer, more reliable images</li>
                <li>Experienced interpretation helps distinguish between a genuinely small baby and a normal variation in growth pattern</li>
                <li>Clear communication about results reduces unnecessary anxiety for expecting parents</li>
                <li>Prompt, appropriate follow-up care ensures growth concerns are managed proactively, not overlooked</li>
              </ul>
            </div>

            {/* Section 8 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for Growth Scans in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad offering detailed pregnancy monitoring, including growth scans, as part of comprehensive antenatal care. Her clinic follows the guiding principle of "Her Health First," ensuring every expecting parent receives thorough, reassuring guidance throughout pregnancy.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Pregnancy, antenatal, and postnatal care</li>
                    <li>Detailed growth scans and fetal wellbeing monitoring</li>
                    <li>High-risk pregnancy monitoring and management</li>
                    <li>Normal delivery and birthing care</li>
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Fertility evaluation and IVF treatment for those planning pregnancy</li>
                    <li>Paediatric consultations for newborn care after delivery</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology Used for Accurate Growth Monitoring
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines (Voluson E22BT2024) for high-resolution, detailed fetal measurement</li>
                    <li>Doppler ultrasound capability for assessing blood flow when growth concerns are identified</li>
                    <li>An integrated antenatal care approach that connects growth scan results with your overall pregnancy monitoring plan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised training in obstetric ultrasound and pregnancy care</li>
                    <li><strong>Continuity of care</strong> – the same team following your pregnancy journey from early screening through delivery</li>
                    <li><strong>Outcomes patients hope for</strong> – accurate monitoring, timely intervention if needed, and a safe, healthy delivery</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 9 — Common Concerns Growth Scans Can Help Address */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Concerns Growth Scans Can Help Address
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Suspected small or large baby size based on physical examination findings</li>
                <li>Pregnancies affected by gestational diabetes, where baby size needs closer monitoring</li>
                <li>Pregnancies affected by high blood pressure, which can affect placental function and baby growth</li>
                <li>Twin or multiple pregnancies, where individual growth patterns need to be tracked separately</li>
                <li>A previous pregnancy history involving growth restriction or other complications</li>
                <li>Reduced fetal movements reported by the mother, prompting a closer growth and wellbeing check</li>
              </ul>
            </div>

            {/* Section 10 — Common Myths About Growth Scans */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Growth Scans
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>"A growth scan is the same as the anomaly scan"</strong> – The anomaly scan focuses on structural development earlier in pregnancy, while the growth scan focuses on size and wellbeing later in pregnancy</li>
                <li><strong>"If my baby measures slightly small, something is definitely wrong"</strong> – Many babies measuring slightly small are simply following their own healthy growth pattern; your doctor will assess the full picture</li>
                <li><strong>"Growth scans are only for high-risk pregnancies"</strong> – Many doctors recommend routine growth scans in the third trimester even for low-risk pregnancies</li>
                <li><strong>"The scan can predict the exact birth weight"</strong> – It provides a close estimate, but actual birth weight can vary somewhat from the ultrasound estimate</li>
                <li><strong>"One growth scan is enough for the whole pregnancy"</strong> – Depending on risk factors, more than one growth scan may be recommended as pregnancy progresses</li>
              </ul>
            </div>

            {/* Section 11 — How to Prepare for Your Growth Scan */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Prepare for Your Growth Scan
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Confirm your growth scan schedule with your doctor, based on your specific pregnancy timeline and risk factors.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Attend the scan at the recommended gestational age, typically in the third trimester.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Wear comfortable clothing that allows easy access to your abdomen for the scan.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Ask questions during the scan about the measurements being taken and what they mean.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Discuss your results calmly with your doctor, understanding growth patterns can vary naturally.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Follow any recommended follow-up plan, including additional scans if advised.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Report any noticeable changes in fetal movement between scans to your doctor promptly.
                </p>
              </div>
            </div>

            {/* Section 12 — Benefits of Getting Your Growth Scan Locally */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Getting Your Growth Scan Locally in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Convenient access during the later, often more physically tiring stages of pregnancy</li>
                <li>No need for long-distance travel for detailed, high-resolution scans</li>
                <li>Continuity of care with the same doctor who understands your full pregnancy history</li>
                <li>Lower overall cost compared to travelling for specialised scans elsewhere</li>
                <li>Faster follow-up scheduling if growth concerns need closer monitoring</li>
              </ul>
            </div>

            {/* Section 13 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for a reliable growth scan pregnancy doctor in Moradabad, here are the verified contact details from the official website:
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
                Website Analysis: gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Relevant technology clearly listed</strong> – The site specifically mentions its 3D & 4D ultrasound machine, directly relevant to detailed growth and wellbeing scans in later pregnancy.</li>
                <li><strong>Pregnancy-focused service pages</strong> – Dedicated sections for Pregnancy & Birthing Care and Antenatal Services show a clear focus on comprehensive monitoring throughout pregnancy.</li>
                <li><strong>Reassuring, patient-first messaging</strong> – The tagline "Her Health First" fits well with the reassurance many parents seek during later pregnancy monitoring.</li>
                <li><strong>Active blog with pregnancy-related content</strong> – The trimester-by-trimester birthing guide blog suggests engagement with pregnancy stages, though a growth-scan-specific article is not currently listed.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for quick appointment booking.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated blog post explaining growth scans, their timing, and result interpretation could help the website rank better for this specific third-trimester pregnancy monitoring topic.</li>
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