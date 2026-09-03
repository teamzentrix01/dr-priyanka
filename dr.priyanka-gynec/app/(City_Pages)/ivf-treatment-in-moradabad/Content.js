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

export default function IvfTreatmentMoradabad() {
  const faqs = [
    {
      q: "What is the success rate of IVF treatment in Moradabad?",
      a: "Success rates vary by age and health condition but generally range between 40–60% for women under 35, improving further with advanced lab technology like time-lapse embryo monitoring.",
    },
    {
      q: "How many IVF cycles are usually needed to conceive?",
      a: "Many women conceive within 1–3 cycles, though this depends on egg quality, embryo health, and underlying fertility issues.",
    },
    {
      q: "Is IVF treatment painful?",
      a: "Most steps, including egg retrieval and embryo transfer, are minimally invasive and done under sedation or local anesthesia, causing little to no pain.",
    },
    {
      q: "What is the right age to start IVF treatment?",
      a: "Fertility specialists recommend evaluation earlier if trying to conceive naturally for over a year (or 6 months if above 35), since success rates are higher at a younger age.",
    },
    {
      q: "Does Dr. Priyanka Gynaec offer ICSI along with IVF?",
      a: "Yes, ICSI is offered for cases of male infertility, using AI-powered semen analysis to select the healthiest sperm for fertilization.",
    },
    {
      q: "What technology is used for embryo selection at the clinic?",
      a: "The GERI time-lapse imaging incubator is used to continuously monitor embryo development and select the best-quality embryo for transfer.",
    },
    {
      q: "Can laparoscopy improve IVF success in cases of endometriosis?",
      a: "Yes, treating endometriosis or fibroids through advanced 3D laparoscopic surgery before IVF can improve implantation chances significantly.",
    },
    {
      q: "How can I book a consultation for IVF treatment in Moradabad?",
      a: "You can call or WhatsApp the clinic directly to schedule a consultation and begin your personalized fertility assessment.",
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
                IVF Treatment in Moradabad: Complete Guide to Fertility Care with Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Starting a family is one of life&apos;s most personal journeys, and for couples struggling with infertility, the path can feel overwhelming. If you have been searching for IVF treatment in Moradabad, you are not alone — thousands of couples across Uttar Pradesh face fertility challenges every year, and modern reproductive medicine now offers real hope. This guide walks you through everything you need to know about IVF treatment in Moradabad, how the process works, what affects success rates, and why choosing the right fertility center matters more than anything else.
              </p>
            </div>

            {/* Section 2 — Understanding IVF */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding IVF: What It Really Means
              </h2>

              <p className="text-gray-700 mb-4">
                In Vitro Fertilization, commonly known as IVF, is a scientifically advanced fertility treatment where an egg is fertilized by sperm outside the body, in a controlled laboratory environment. Once fertilization is successful, the resulting embryo is carefully monitored and then transferred into the uterus to establish a pregnancy. IVF has helped millions of couples worldwide overcome infertility caused by blocked fallopian tubes, low sperm count, ovulation disorders, endometriosis, unexplained infertility, and age-related fertility decline.
              </p>

              <p className="text-gray-700">
                Unlike older methods, today&apos;s IVF treatment in Moradabad is supported by high-precision technology such as time-lapse embryo imaging, AI-based semen analysis, and 3D/4D ultrasound monitoring — tools that significantly improve the accuracy of diagnosis and the chances of a successful pregnancy.
              </p>
            </div>

            {/* Section 3 — Why Couples Are Choosing IVF in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Couples Are Choosing IVF Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Earlier, patients from Moradabad and nearby towns like Sambhal, Rampur, Amroha, and Bijnor had to travel to Delhi or Lucknow for advanced fertility treatment. That is no longer necessary. Moradabad now has access to internationally trained fertility specialists, modern IVF labs, and the same standard of embryology equipment found in metro cities — without the extra travel, stress, and cost.
              </p>

              <p className="text-gray-700 mb-2">
                Some key reasons couples now prefer local IVF treatment in Moradabad include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Shorter travel time for frequent monitoring visits, which IVF requires almost every alternate day during stimulation</li>
                <li>Personalized, continuous care from a doctor who knows the patient&apos;s full medical history</li>
                <li>Advanced lab technology available locally, matching metro-city standards</li>
                <li>Lower overall cost compared to IVF in Delhi, Mumbai, or Bangalore</li>
                <li>Comfort of being close to family during an emotionally sensitive treatment journey</li>
              </ul>
            </div>

            {/* Section 4 — The IVF Process, Step by Step */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The IVF Process, Step by Step
              </h2>

              <p className="text-gray-700 mb-4">
                Every IVF journey is unique, but the treatment generally follows these stages:
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Initial Consultation and Fertility Assessment</strong>
                  <br />
                  The first step involves a detailed consultation where the doctor reviews medical history, previous treatments, and lifestyle factors. Basic fertility tests such as AMH levels, semen analysis, and ultrasound scans help identify the underlying cause of infertility.
                </li>
                <li>
                  <strong>Ovarian Stimulation</strong>
                  <br />
                  Hormonal injections are given to stimulate the ovaries to produce multiple eggs instead of the single egg released in a natural cycle. This phase is closely monitored through blood tests and ultrasound scans.
                </li>
                <li>
                  <strong>Egg Retrieval</strong>
                  <br />
                  Once the eggs are mature, a minor, painless procedure is performed under sedation to retrieve them from the ovaries.
                </li>
                <li>
                  <strong>Fertilization in the Lab</strong>
                  <br />
                  The retrieved eggs are combined with sperm in the laboratory. In cases of male infertility, a technique called ICSI (Intracytoplasmic Sperm Injection) may be used, where a single healthy sperm is directly injected into the egg.
                </li>
                <li>
                  <strong>Embryo Culture and Monitoring</strong>
                  <br />
                  Fertilized eggs develop into embryos over the next few days. Advanced clinics use time-lapse imaging incubators (like the GERI system) to continuously monitor embryo development without disturbing them, allowing embryologists to select the healthiest embryo for transfer.
                </li>
                <li>
                  <strong>Embryo Transfer</strong>
                  <br />
                  The best-quality embryo is gently transferred into the uterus using a thin catheter. This is a quick, painless outpatient procedure.
                </li>
                <li>
                  <strong>Pregnancy Test and Follow-Up</strong>
                  <br />
                  About 10–14 days after the transfer, a blood test confirms pregnancy. If successful, the patient moves into regular antenatal care and monitoring.
                </li>
              </ol>
            </div>

            {/* Section 5 — Who Should Consider IVF Treatment? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Consider IVF Treatment?
              </h2>

              <p className="text-gray-700 mb-4">
                IVF is usually recommended for couples facing:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Blocked or damaged fallopian tubes</li>
                <li>Severe male factor infertility (low sperm count or motility)</li>
                <li>Ovulation disorders such as PCOS</li>
                <li>Endometriosis affecting fertility</li>
                <li>Unexplained infertility after 1–2 years of trying</li>
                <li>Advanced maternal age (35+) with declining egg reserve</li>
                <li>Failed IUI (Intrauterine Insemination) cycles</li>
                <li>Genetic conditions requiring embryo screening</li>
              </ul>

              <p className="text-gray-700">
                If you fall into any of these categories, consulting an experienced fertility specialist offering IVF treatment in Moradabad can help you understand the best path forward.
              </p>
            </div>

            {/* Section 6 — Factors That Affect IVF Success Rates */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Factors That Affect IVF Success Rates
              </h2>

              <p className="text-gray-700 mb-4">
                Many couples ask why IVF success is not guaranteed in every cycle. Success depends on multiple factors:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Age of the woman — Success rates are generally higher under age 35 and gradually decline afterward.</li>
                <li>Egg and sperm quality — Healthier gametes lead to better embryo quality.</li>
                <li>Uterine health — A receptive, healthy uterine lining improves implantation chances.</li>
                <li>Underlying medical conditions — Conditions like endometriosis or fibroids may need to be treated before or alongside IVF.</li>
                <li>Lab standards and embryologist expertise — Precision equipment and skilled embryologists directly influence embryo survival and selection.</li>
                <li>Lifestyle factors — Smoking, excessive weight, high stress, and poor diet can lower success rates.</li>
              </ul>

              <p className="text-gray-700">
                Choosing a center with modern lab infrastructure and an experienced medical team significantly improves the odds of a successful outcome.
              </p>
            </div>

            {/* Section 7 — What Makes a Good IVF Center in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes a Good IVF Center in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Not all fertility clinics offer the same standard of care. Before choosing where to begin your IVF treatment in Moradabad, consider these factors:
              </p>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Doctor&apos;s qualifications and experience — Look for gold-medal credentials, fellowships in reproductive medicine, and a strong track record in laparoscopy and fertility care.</li>
                <li>Laboratory technology — Time-lapse embryo incubators, AI-assisted semen analysis, and high-resolution ultrasound machines matter greatly.</li>
                <li>Transparency in cost and process — A trustworthy clinic explains the full treatment plan, expected costs, and realistic success rates upfront.</li>
                <li>Continuity of care — The same doctor and team should be available through consultation, stimulation, retrieval, transfer, and pregnancy follow-up.</li>
                <li>Emotional support — Fertility treatment is stressful; compassionate counselling and clear communication make a real difference.</li>
              </ol>
            </div>

            {/* Section 8 — Dr. Priyanka Gynaec: Advanced Fertility Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Advanced Fertility Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is recognized as a trusted name for IVF treatment in Moradabad, combining international-standard technology with a patient-first approach. The center is built around the philosophy of &quot;Her Health First,&quot; ensuring that every woman&apos;s comfort, choices, and story remain at the center of her fertility journey.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology Available
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>GERI time-lapse imaging incubator for continuous, non-invasive embryo monitoring</li>
                <li>AI-powered semen analysis and DNA integrity testing for precise male fertility evaluation</li>
                <li>Volusun E22BT2024 3D &amp; 4D ultrasound machine for detailed reproductive health assessment</li>
                <li>High-definition 3D laparoscopic surgery for treating conditions like endometriosis, fibroids, and tubal blocks that affect fertility</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Patients Trust This Center
              </h3>

              <p className="text-gray-700 mb-4">
                Patients consistently highlight three things: clear communication from the very first visit, a team that remembers their history at every follow-up, and outcomes that matter — successful pregnancies after years of trying, and minimally invasive treatments that protect long-term fertility.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Specialities
              </h3>

              <p className="text-gray-700 mb-2">
                Dr. Priyanka Gynaec offers a complete range of women&apos;s health and fertility services under one roof, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Fertility &amp; IVF — Personalized IVF, IUI, and ICSI treatment plans</li>
                <li>Gynaecology &amp; Laparoscopy — Expert 3D laparoscopic care for reproductive health</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized care through every trimester</li>
                <li>Antenatal Services — Structured prenatal screening and monitoring</li>
                <li>Normal Delivery — Gentle, expert-guided natural delivery support</li>
                <li>Laparoscopic Cystectomy &amp; Myomectomy — Fertility-preserving cyst and fibroid removal</li>
                <li>Laparoscopic Hysterectomy — Minimally invasive uterus removal with fast recovery</li>
                <li>Endometriosis Surgery — Advanced excision surgery for pain relief and fertility preservation</li>
                <li>Diagnostic Hysteroscopy &amp; Polypectomy — Precision evaluation and treatment of the uterine cavity</li>
                <li>Paediatric Care — Newborn care, vaccinations, and pediatric consultations</li>
              </ul>
            </div>

            {/* Section 9 — IVF Cost in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Cost in Moradabad: What to Expect
              </h2>

              <p className="text-gray-700 mb-4">
                One of the most common questions couples have is about cost. IVF treatment in Moradabad is generally far more affordable than in metro cities, while still using the same advanced technology. Costs can vary depending on the specific protocol used, medication requirements, whether ICSI is needed, and the number of cycles required. It&apos;s best to have a personalized consultation to get an accurate cost estimate based on individual diagnostic reports.
              </p>
            </div>

            {/* Section 10 — Preparing for Your IVF Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Your IVF Journey
              </h2>

              <p className="text-gray-700 mb-4">
                A few practical steps can help improve your chances before starting treatment:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Maintain a healthy, balanced diet rich in folic acid, protein, and antioxidants</li>
                <li>Avoid smoking, alcohol, and excessive caffeine</li>
                <li>Manage stress through light exercise, yoga, or counselling</li>
                <li>Keep all previous fertility test reports and treatment history organized for your doctor</li>
                <li>Ask questions openly — a good fertility specialist will always take time to explain your specific case</li>
              </ul>
            </div>

            {/* Section 11 — Contact & Clinic Address */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Contact &amp; Clinic Address
              </h2>

              <div className="space-y-4 mb-6">
                {/* Clinic Address */}
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Dr. Priyanka Gynaec</p>
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
                        9079765578
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8979670705" className="hover:underline">
                        8979670705 (WhatsApp)
                      </a>
                    </div>

                    <div className="mt-2">
                      <Mail size={18} className="inline mr-2 text-black" />
                      <a
                        href="mailto:contact@drpriyankaGynaec.com"
                        className="hover:underline"
                      >
                        contact@drpriyankaGynaec.com
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
            </div>

            {/* Section 12 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
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