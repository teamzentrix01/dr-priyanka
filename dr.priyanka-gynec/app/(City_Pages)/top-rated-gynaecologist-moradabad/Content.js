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

export default function TopRatedGynaecologistMoradabad() {
  const faqs = [
    {
      q: "Who is considered a top rated gynaecologist in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec is widely recognised as a top rated choice for women's health.",
    },
    {
      q: "What services make this clinic stand out?",
      a: "Gynaecology, laparoscopy, IVF/fertility treatment, pregnancy care, and paediatric consultations, all under one roof.",
    },
    {
      q: "Does the clinic use advanced technology?",
      a: "Yes, including 3D laparoscopy, 4D ultrasound, and AI-based fertility diagnostics.",
    },
    {
      q: "Can high-risk pregnancies be managed here?",
      a: "Yes, structured antenatal screenings support high-risk pregnancy monitoring.",
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
      q: "Does the clinic offer fertility and IVF treatment?",
      a: "Yes, personalised fertility and IVF treatments are offered with advanced lab support.",
    },
    {
      q: "Is gynaecologistmoradabad.com a genuine, well-built website?",
      a: "Yes, it clearly lists services, technology used, patient testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic for queries?",
      a: "Yes, you can email drpriyankagynec@gmail.com.",
    },
    {
      q: "Does the clinic treat PCOS and infertility issues?",
      a: "Yes, the clinic's services and blog content confirm PCOS evaluation and fertility support.",
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
                Top Rated Gynaecologist in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                When women search for a top rated gynaecologist in Moradabad, they are usually not just looking for a nearby clinic — they want a doctor who is experienced, trusted by other patients, equipped with modern technology, and easy to reach when it matters most. Ratings and reputation are earned over years, through consistent good outcomes and genuine patient care.
              </p>

              <p className="text-gray-700">
                This guide explains what actually makes a gynaecologist &quot;top rated,&quot; what to check before booking an appointment, and why Dr. Priyanka Pachauri has become one of the most recommended names for women's health in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Does Top Rated Mean */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Does &quot;Top Rated&quot; Really Mean for a Gynaecologist?
              </h2>

              <p className="text-gray-700 mb-4">
                A high rating is not just a number on Google — it reflects real patient experience across multiple visits and treatments. A genuinely top rated gynaecologist usually stands out because of:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Consistently positive patient feedback across pregnancy, surgery, and general consultations</li>
                <li>Strong academic qualifications and specialised fellowship training</li>
                <li>A track record of successful deliveries, surgeries, and fertility treatments</li>
                <li>Use of modern diagnostic and surgical technology</li>
                <li>Clear, honest communication about diagnosis, risks, and treatment costs</li>
                <li>High patient retention, meaning women return for future pregnancies or refer their friends and family</li>
                <li>Easy accessibility through phone, WhatsApp, or online booking</li>
                <li>A calm, respectful environment where patients feel heard, not rushed</li>
                <li>Minimal complications and safe outcomes across procedures</li>
              </ul>
            </div>

            {/* Section 3 — Why It's Worth Choosing Top Rated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why It's Worth Choosing a Top Rated Doctor Instead of &quot;Any&quot; Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Some patients assume every gynaecologist offers similar care, but the difference in outcomes can be significant. Here's why choosing a genuinely top rated doctor matters:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Complex conditions like endometriosis or fibroids need an experienced surgical hand, not guesswork.</li>
                <li>Fertility treatments like IVF have far better success rates with specialists who track and adjust protocols carefully.</li>
                <li>High-risk pregnancies require quick, confident decision-making — something only experience can build.</li>
                <li>A trusted doctor reduces anxiety, which itself improves outcomes during labour and recovery.</li>
                <li>Reliable doctors are transparent about costs, avoiding unnecessary tests or procedures.</li>
                <li>A top rated doctor's clinic is more likely to have proper emergency backup and modern equipment.</li>
                <li>Good ratings usually reflect not just the doctor, but a well-trained supporting staff and system.</li>
              </ul>
            </div>

            {/* Section 4 — How to Identify a Top Rated Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Identify a Genuinely Top Rated Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Before trusting online ratings blindly, use this checklist to verify real reliability:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Check formal qualifications:</strong> MBBS with MS/DGO in Obstetrics & Gynaecology, plus any fellowship certifications in laparoscopy or fertility.</li>
                <li><strong>Look at range of services:</strong> A top doctor typically covers gynaecology, pregnancy care, fertility treatment, and minor surgeries under one roof.</li>
                <li><strong>Review available technology:</strong> 3D/4D ultrasound and 3D laparoscopic systems indicate investment in patient safety and accuracy.</li>
                <li><strong>Read real patient testimonials:</strong> Detailed, specific reviews are more trustworthy than generic five-star ratings.</li>
                <li><strong>Check the clinic's blog or educational content:</strong> Doctors who regularly publish patient-focused health information usually stay updated and engaged.</li>
                <li><strong>Confirm easy contact options:</strong> Availability via phone and WhatsApp shows the practice values quick communication.</li>
                <li><strong>Verify the physical address:</strong> A clear, verifiable clinic location builds more trust than a vague online-only presence.</li>
                <li><strong>Ask about emergency availability:</strong> A truly reliable doctor or her team should be reachable during pregnancy emergencies.</li>
              </ul>
            </div>

            {/* Section 5 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Top Rated Choice in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is widely regarded as one of the top rated gynaecologists practising in Moradabad. Her clinic's guiding philosophy, &quot;Her Health First,&quot; places patient comfort, informed choice, and individual care at the centre of every consultation.
              </p>
            </div>

            {/* Section 6 — Comprehensive Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Comprehensive Services Offered
              </h2>

              <p className="text-gray-700 mb-4">
                Her practice covers a wide range of women's health needs under a single roof:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Gynaecology and general women's health consultations</li>
                <li>3D laparoscopic gynaecological surgery</li>
                <li>Fertility evaluation and personalised IVF treatment</li>
                <li>Pregnancy, antenatal, and postnatal (birthing) care</li>
                <li>Normal delivery with a focus on minimal medical intervention</li>
                <li>Laparoscopic cystectomy for ovarian cysts while preserving fertility</li>
                <li>Laparoscopic myomectomy for uterine fibroids</li>
                <li>Laparoscopic hysterectomy with faster, minimally invasive recovery</li>
                <li>Sacrocolpopexy for uterine and vaginal vault prolapse</li>
                <li>Laparoscopic sterilisation as a day-care procedure</li>
                <li>Diagnostic hysteroscopy and hysteroscopic polypectomy</li>
                <li>Endometriosis surgery and chronic pelvic pain management</li>
                <li>Paediatric consultations, vaccinations, and newborn care</li>
              </ul>
            </div>

            {/* Section 7 — Technology That Supports Top Ratings */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology That Supports Top Ratings
              </h2>

              <p className="text-gray-700 mb-4">
                Advanced technology plays a major role in building trust and better outcomes. The clinic highlights:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>High-definition 3D laparoscopic surgical systems:</strong> For precision and faster recovery</li>
                <li><strong>3D & 4D ultrasound machines (Voluson E22BT2024):</strong> For detailed pregnancy and pelvic imaging</li>
                <li><strong>GERI time-lapse imaging incubator:</strong> Used in advanced IVF embryo monitoring</li>
                <li><strong>AI-powered semen analysis and DNA integrity testing:</strong> For complete fertility evaluation</li>
              </ul>
            </div>

            {/* Section 8 — Four Pillars of Reputation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Four Pillars Behind the Clinic's Reputation
              </h2>

              <p className="text-gray-700 mb-4">
                According to the clinic's own patient communication, its strong reputation is built on:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Expertise with heart:</strong> Gold medal academic credentials and international fellowship training across laparoscopy, fertility, and endometriosis care.</li>
                <li><strong>Continuity you can count on:</strong> An integrated team that remembers each patient's history and concerns across every visit.</li>
                <li><strong>Outcomes patients hope for:</strong> Successful pregnancies after years of difficulty, pain-free life after endometriosis treatment, and fertility-preserving surgery.</li>
                <li><strong>Trust earned daily:</strong> Reputation built through mothers referring daughters and friends referring friends, rather than paid advertising alone.</li>
              </ul>
            </div>

            {/* Section 9 — Conditions Commonly Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions Commonly Treated by Top Rated Gynaecologists
              </h2>

              <p className="text-gray-700 mb-4">
                A genuinely top rated gynaecologist in Moradabad should be equipped to manage the full spectrum of women's health issues, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Irregular periods and menstrual disorders</li>
                <li>PCOS and related infertility challenges</li>
                <li>Difficulty conceiving, requiring fertility workup or IVF</li>
                <li>High-risk pregnancy monitoring, including gestational diabetes or hypertension</li>
                <li>Normal delivery planning and safe labour management</li>
                <li>Ovarian cysts and uterine fibroids</li>
                <li>Endometriosis and chronic pelvic pain</li>
                <li>Uterine or vaginal prolapse in older women</li>
                <li>Family planning and permanent sterilisation procedures</li>
                <li>Abnormal uterine bleeding and uterine polyps</li>
                <li>Postnatal recovery, breastfeeding support, and newborn care</li>
              </ul>
            </div>

            {/* Section 10 — Step-by-Step Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Choose Your Top Rated Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                Follow this simple process before finalising your doctor in Moradabad:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Step 1: Shortlist based on qualifications:</strong> Confirm MS/DGO degree and any additional fellowship training.</li>
                <li><strong>Step 2: Match services to your needs:</strong> Check whether the doctor treats your specific concern, whether it's fertility, pregnancy, or surgery.</li>
                <li><strong>Step 3: Evaluate technology and infrastructure:</strong> Better equipment usually means more accurate diagnosis and safer procedures.</li>
                <li><strong>Step 4: Read detailed patient reviews:</strong> Look for specific experiences, not just star ratings.</li>
                <li><strong>Step 5: Check accessibility:</strong> Confirm phone, WhatsApp, and email contact options are active and responsive.</li>
                <li><strong>Step 6: Visit for a first consultation:</strong> Notice how clearly the doctor explains your condition and options.</li>
                <li><strong>Step 7: Ask about costs and transparency:</strong> A top rated doctor will always explain expected costs honestly.</li>
                <li><strong>Step 8: Trust your comfort level:</strong> If you don't feel heard, it's okay to seek a second opinion elsewhere.</li>
              </ul>
            </div>

            {/* Section 11 — Benefits of Choosing a Local Top Rated Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing a Top Rated Local Doctor in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing a top rated gynaecologist within your own city offers real, practical advantages:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Faster access during pregnancy emergencies or sudden complications</li>
                <li>Easier, more frequent follow-up visits without long-distance travel</li>
                <li>Lower overall treatment cost compared to metro-city hospitals</li>
                <li>Continuity of care with the same doctor and consistent medical records</li>
                <li>Comfort of family support nearby during recovery after surgery or delivery</li>
                <li>Familiarity with local health patterns and community-specific health needs</li>
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
                <li><strong>Clear, trust-focused positioning:</strong> The homepage message &quot;Her Health First&quot; immediately builds emotional trust, which supports a top rated reputation.</li>
                <li><strong>Comprehensive services listing:</strong> All 13 services, from laparoscopy to paediatric care, are listed individually, helping both patients and search engines understand the full scope of expertise.</li>
                <li><strong>Strong technology proof points:</strong> Mentions of 3D laparoscopy, 4D ultrasound, GERI time-lapse incubator, and AI semen analysis add credibility that supports a &quot;top rated&quot; claim.</li>
                <li><strong>Active, updated blog section:</strong> Recent articles on PCOS, endometriosis, and trimester-wise pregnancy care show ongoing engagement, which is valuable for both patients and SEO.</li>
                <li><strong>Easy-to-find contact details:</strong> Phone, WhatsApp, and email are clearly visible in both header and footer sections.</li>
                <li><strong>Genuine patient testimonials:</strong> Real feedback, such as the review from patient &quot;Rudri J,&quot; adds authentic social proof.</li>
                <li><strong>Local SEO basics covered:</strong> A complete clinic address with pin code appears in the footer, which supports visibility in local Moradabad searches.</li>
                <li><strong>Improvement opportunity:</strong> Adding a dedicated ratings/reviews page, more detailed doctor credentials, and a Google Maps embed could further strengthen the &quot;top rated&quot; positioning and local search ranking.</li>
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
                  It is always advisable to call or WhatsApp before visiting, to confirm appointment timing and avoid unnecessary waiting.
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