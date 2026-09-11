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
  MessageCircle,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function GynaecologistSafeDeliveryMoradabad() {
  const faqs = [
    {
      q: "Who is a good gynaecologist for safe delivery in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec is a trusted choice for pregnancy, birthing, and delivery care.",
    },
    {
      q: "Does the clinic support normal delivery?",
      a: "Yes, the clinic prioritises natural, vaginal delivery whenever medically safe.",
    },
    {
      q: "Can high-risk pregnancies be managed here?",
      a: "Yes, structured antenatal screenings help manage and monitor high-risk pregnancies.",
    },
    {
      q: "What technology is used for pregnancy monitoring?",
      a: "3D & 4D ultrasound machines are used for detailed and accurate baby monitoring.",
    },
    {
      q: "How can I book a delivery consultation?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Is postnatal and newborn care available?",
      a: "Yes, postnatal support and paediatric consultations are offered after delivery.",
    },
    {
      q: "Is gynaecologistmoradabad.com a genuine, informative website?",
      a: "Yes, it clearly lists pregnancy services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic for pregnancy queries?",
      a: "Yes, you can email drpriyankagynec@gmail.com for detailed questions.",
    },
    {
      q: "Is surgical backup available if normal delivery isn't possible?",
      a: "Yes, the clinic has 3D laparoscopic and surgical facilities as backup support.",
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
                Gynaecologist for Safe Delivery in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                Pregnancy is one of the most delicate journeys of a woman's life, and choosing the right gynaecologist for safe delivery in Moradabad can make the difference between a stressful experience and a calm, confident one. Safe delivery is not only about the final moment of birth — it depends on the quality of care given from the first trimester right through to postnatal recovery.
              </p>

              <p className="text-gray-700">
                This guide explains what &quot;safe delivery&quot; really means, what to look for in a delivery specialist, and why Dr. Priyanka Pachauri of Moradabad is a trusted name for expecting mothers.
              </p>
            </div>

            {/* Section 2 — What Does Safe Delivery Mean */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Does &quot;Safe Delivery&quot; Actually Mean?
              </h2>

              <p className="text-gray-700 mb-4">
                Safe delivery is a complete process, not a single event. A reliable gynaecologist ensures safety at every stage:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Accurate pregnancy dating and risk assessment right from the first visit</li>
                <li>Regular monitoring of the mother's blood pressure, sugar levels, and weight gain</li>
                <li>Timely ultrasound scans to track the baby's growth and position</li>
                <li>Screening for complications such as gestational diabetes, anaemia, or hypertension</li>
                <li>A clear birth plan discussed well in advance with the mother</li>
                <li>Round-the-clock availability of the doctor or her team near the due date</li>
                <li>A well-equipped labour room and backup surgical facility in case of emergency</li>
                <li>Skilled handling of both normal and complicated deliveries without panic</li>
                <li>Careful newborn assessment immediately after birth</li>
                <li>Proper postnatal care and guidance for mother and baby after discharge</li>
              </ul>
            </div>

            {/* Section 3 — Why the Right Doctor Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why the Right Delivery Doctor Matters So Much
              </h2>

              <p className="text-gray-700 mb-4">
                Many expecting families underestimate how much the choice of doctor affects the outcome of delivery. Here's why this decision deserves careful thought:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Delivery complications can develop suddenly, even in a previously low-risk pregnancy.</li>
                <li>An inexperienced or unavailable doctor can delay critical decisions during labour.</li>
                <li>The right doctor reduces unnecessary C-sections by supporting natural labour whenever medically safe.</li>
                <li>Continuous care by the same doctor throughout pregnancy builds trust and reduces anxiety.</li>
                <li>A calm, communicative doctor helps the mother stay mentally prepared for labour.</li>
                <li>Good newborn care immediately after birth prevents early complications in the baby.</li>
                <li>Postnatal follow-up ensures the mother recovers fully, both physically and emotionally.</li>
              </ul>
            </div>

            {/* Section 4 — Qualities to Look for */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Qualities to Look for in a Gynaecologist for Safe Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                Before choosing your delivery doctor in Moradabad, check for these essential qualities:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Strong obstetric qualification:</strong> MS/DGO in Obstetrics & Gynaecology with proven delivery experience.</li>
                <li><strong>Experience with both normal and high-risk deliveries:</strong> Not every pregnancy stays low-risk till the end.</li>
                <li><strong>Access to modern ultrasound technology:</strong> 3D/4D scanning helps detect issues early and accurately.</li>
                <li><strong>A well-equipped hospital or clinic setup:</strong> Ready for emergency interventions if labour gets complicated.</li>
                <li><strong>Clear communication style:</strong> Explaining reports, risks, and options without medical jargon or fear.</li>
                <li><strong>Focus on natural, minimally interventional delivery:</strong> Preferring normal delivery over surgery when safely possible.</li>
                <li><strong>24/7 reachability near the due date:</strong> Availability through phone or WhatsApp for urgent queries.</li>
                <li><strong>Positive delivery outcomes and patient testimonials:</strong> Real stories from other mothers are strong proof of reliability.</li>
                <li><strong>Supportive, empathetic behaviour:</strong> Making the mother feel heard, not rushed, during every visit.</li>
              </ul>
            </div>

            {/* Section 5 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Choice for Safe Delivery in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is widely recognised in Moradabad for pregnancy, birthing, and complete maternity care. Her clinic follows the philosophy of &quot;Her Health First&quot;, focusing on comfort, safety, and individualised care for every expecting mother.
              </p>
            </div>

            {/* Section 6 — Pregnancy & Delivery Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy & Delivery Services Offered
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Pregnancy & Birthing Care:</strong> Supportive, customised birthing experiences for a safe journey to motherhood</li>
                <li><strong>Antenatal Services:</strong> Structured prenatal care and screenings throughout pregnancy</li>
                <li><strong>Normal Delivery:</strong> Expert and gentle care that prioritises natural, vaginal delivery wherever safely possible</li>
                <li><strong>High-risk pregnancy monitoring:</strong> Close tracking of conditions that need extra medical attention</li>
                <li><strong>Postnatal care:</strong> Guidance and support for mother and newborn after delivery</li>
                <li><strong>Paediatric care:</strong> Compassionate newborn consultations, vaccinations, and infant check-ups</li>
                <li><strong>Gynaecological surgery backup:</strong> Access to 3D laparoscopic facilities if a surgical delivery or intervention is required</li>
              </ul>
            </div>

            {/* Section 7 — Technology Supporting Safer Deliveries */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology Supporting Safer Deliveries
              </h2>

              <p className="text-gray-700 mb-4">
                Safe delivery depends heavily on accurate monitoring technology. The clinic highlights the use of:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>3D & 4D ultrasound machines (Voluson E22BT2024):</strong> For detailed monitoring of the baby's growth and position</li>
                <li><strong>High-definition 3D laparoscopic surgical systems:</strong> Available as backup for surgical needs</li>
                <li><strong>An integrated care team:</strong> That tracks the mother's history from the first visit through delivery and beyond</li>
              </ul>
            </div>

            {/* Section 8 — Why Expecting Mothers Trust This Clinic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Expecting Mothers Trust This Clinic
              </h2>

              <p className="text-gray-700 mb-4">
                Based on the clinic's own patient communication, trust is built through:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Expertise with heart:</strong> Credentials and fellowship training that reflect deep obstetric and surgical skill</li>
                <li><strong>Continuity of care:</strong> The same team following the mother's journey from the first antenatal visit to delivery and postnatal check-ups</li>
                <li><strong>Outcomes families hope for:</strong> Safe deliveries, healthy babies, and smooth recoveries</li>
                <li><strong>Trust earned daily:</strong> Reputation built through mother-to-mother referrals rather than paid promotion</li>
              </ul>
            </div>

            {/* Section 9 — The Safe Delivery Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Safe Delivery Journey: Step by Step
              </h2>

              <p className="text-gray-700 mb-4">
                Here is what a typical, well-managed pregnancy and delivery journey looks like with a reliable gynaecologist:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Step 1: First Trimester Consultation:</strong> Confirming pregnancy, dating the pregnancy, and starting basic screening tests.</li>
                <li><strong>Step 2: Regular Antenatal Visits:</strong> Monitoring blood pressure, weight, sugar levels, and baby's growth every few weeks.</li>
                <li><strong>Step 3: Ultrasound Scans:</strong> Tracking the baby's development and detecting any risk factors early using 3D/4D imaging.</li>
                <li><strong>Step 4: Risk Assessment:</strong> Identifying if the pregnancy is low-risk or needs extra high-risk monitoring.</li>
                <li><strong>Step 5: Birth Plan Discussion:</strong> Deciding delivery preferences (normal vs surgical) based on medical safety.</li>
                <li><strong>Step 6: Labour and Delivery:</strong> Hands-on, experienced management of labour with readiness for emergencies.</li>
                <li><strong>Step 7: Immediate Newborn Care:</strong> Checking the baby's health right after birth.</li>
                <li><strong>Step 8: Postnatal Follow-up:</strong> Guiding recovery, breastfeeding, and the baby's early vaccination schedule.</li>
              </ul>
            </div>

            {/* Section 10 — Common Pregnancy Concerns */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Pregnancy Concerns That Need Expert Delivery Care
              </h2>

              <p className="text-gray-700 mb-4">
                A dependable delivery specialist should be prepared to manage:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>First-time pregnancy anxiety and preparation</li>
                <li>Gestational diabetes and blood pressure monitoring</li>
                <li>Low-lying placenta or other placental concerns</li>
                <li>Breech or abnormal baby position near due date</li>
                <li>Previous C-section pregnancies considering normal delivery (VBAC evaluation)</li>
                <li>Twin or multiple pregnancies</li>
                <li>Delayed or prolonged labour management</li>
                <li>Postpartum recovery and lactation support</li>
                <li>Newborn jaundice or early infant health checks</li>
              </ul>
            </div>

            {/* Section 11 — Benefits of Choosing a Local Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing a Local Delivery Specialist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Delivering close to home, with a doctor based in your own city, brings real practical advantages:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Faster access to the doctor during sudden labour or emergencies</li>
                <li>No travel stress in the final weeks of pregnancy, when rest matters most</li>
                <li>Easier, more frequent antenatal visits without long-distance travel</li>
                <li>Lower overall cost of maternity care compared to metro-city hospitals</li>
                <li>Family support nearby during delivery and recovery</li>
                <li>Continuity with the same doctor and medical records from first visit to delivery</li>
              </ul>
            </div>

            {/* Section 12 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                gynaecologistmoradabad.com – Quick Website Analysis
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Clear pregnancy-focused messaging:</strong> The homepage tagline &quot;Her Health First&quot; and imagery of mothers and babies immediately signals that maternity care is central to the practice.</li>
                <li><strong>Dedicated pregnancy service pages:</strong> Separate pages exist for Pregnancy & Birthing Care, Antenatal Services, and Normal Delivery, making it easy for expecting mothers to find relevant information.</li>
                <li><strong>Technology transparency:</strong> The site clearly mentions the 3D/4D ultrasound machine model used, which builds confidence for pregnancy monitoring.</li>
                <li><strong>Active, relevant blog content:</strong> A recent blog titled &quot;Your Trimester-by-Trimester Birthing Guide&quot; directly supports mothers researching safe delivery, which is also good for SEO.</li>
                <li><strong>Easy-to-find contact options:</strong> Phone, WhatsApp, and email are visible in both the header and footer for quick access.</li>
                <li><strong>Genuine patient testimonials:</strong> Real feedback (such as the review from patient &quot;Rudri J&quot;) adds credibility and social proof.</li>
                <li><strong>Local SEO fundamentals covered:</strong> Full address with pin code is listed in the footer, supporting local search visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity:</strong> Adding a dedicated FAQ page, a Google Maps embed, and more delivery-specific patient reviews could further strengthen trust and search ranking for delivery-related keywords.</li>
              </ul>
            </div>

            {/* Section 13 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
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
                    <Globe size={20} className="text-black mt-1 shrink-0" />
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

                  <div className="flex items-start gap-3">
                    <MessageCircle size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Social Media</p>
                      <div className="space-y-1">
                        <a
                          href="https://www.instagram.com/dr.priyanka.gynae/"
                          className="block hover:underline text-black"
                        >
                        
                        </a>
                      </div>
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

                <p className="text-gray-700 mt-4 text-sm">
                  It's best to call or WhatsApp in advance, especially near the due date, to confirm the doctor's availability and avoid last-minute delays.
                </p>
              </div>
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