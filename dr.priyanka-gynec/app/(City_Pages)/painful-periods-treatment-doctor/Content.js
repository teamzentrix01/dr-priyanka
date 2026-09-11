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

export default function PainfulPeriodsTreatmentDoctor() {
  const faqs = [
    {
      q: "What causes painful periods?",
      a: "Painful periods can be caused by natural prostaglandin-driven cramping, or by conditions like endometriosis, adenomyosis, fibroids, or pelvic infections.",
    },
    {
      q: "What is the difference between primary and secondary dysmenorrhea?",
      a: "Primary dysmenorrhea is natural cramping without disease; secondary dysmenorrhea is caused by an underlying condition like endometriosis or fibroids.",
    },
    {
      q: "When should I see a doctor for period pain?",
      a: "See a doctor if pain disrupts daily life, worsens over time, doesn't respond to painkillers, or starts before/continues after your period.",
    },
    {
      q: "Can endometriosis cause severe period pain?",
      a: "Yes, endometriosis is one of the most common causes of severe, worsening period pain and often requires laparoscopic treatment for relief.",
    },
    {
      q: "How are painful periods diagnosed?",
      a: "Diagnosis typically involves a pelvic exam, ultrasound, and in suspected endometriosis cases, diagnostic laparoscopy for confirmation and treatment.",
    },
    {
      q: "Can painful periods be treated without surgery?",
      a: "Yes, many cases are managed with anti-inflammatory medication, hormonal therapy, or lifestyle changes without needing surgery.",
    },
    {
      q: "What is laparoscopic excision for endometriosis?",
      a: "It's a minimally invasive keyhole procedure that precisely removes endometriotic tissue, offering significant, often long-lasting pain relief.",
    },
    {
      q: "Is laparoscopic treatment for painful periods safe?",
      a: "Yes, laparoscopic procedures are generally safe, with less pain, minimal scarring, and faster recovery than traditional open surgery.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering diagnosis and treatment for painful periods, endometriosis, and laparoscopic surgery.",
    },
    {
      q: "Does Dr. Priyanka Pachauri treat endometriosis-related pain?",
      a: "Yes, her clinic offers laparoscopic excision of endometriosis using 3D laparoscopic technology for precise diagnosis and treatment.",
    },
    {
      q: "Can painful periods affect fertility?",
      a: "Yes, underlying causes like endometriosis and fibroids can affect fertility, making early diagnosis and treatment important.",
    },
    {
      q: "How can I book a consultation for painful periods treatment?",
      a: "You can call, message on WhatsApp, email, or visit the clinic's official website to schedule a consultation with Dr. Priyanka Pachauri.",
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
                Painful Periods Treatment Doctor: Causes, Symptoms & Effective Treatment Options
              </h1>

              <p className="text-gray-700 mb-4">
                Mild cramping during periods is common and often considered a normal part of menstruation. But when period pain becomes severe enough to keep you home from work or school, disrupts your sleep, or doesn't respond to over-the-counter painkillers, it is no longer something to simply endure — it is a medical condition called dysmenorrhea that deserves proper evaluation and treatment. Many women live with debilitating period pain for years, assuming it is just &quot;how their body is,&quot; when in reality an underlying, treatable condition may be responsible.
              </p>

              <p className="text-gray-700">
                If you are searching for a painful periods treatment doctor, this guide explains the different types of period pain, their causes, when to seek medical help, and the full range of treatment options available today — from simple lifestyle changes to advanced minimally invasive surgery.
              </p>
            </div>

            {/* Section 2 — Understanding Painful Periods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Painful Periods (Dysmenorrhea)
              </h2>

              <p className="text-gray-700 mb-4">
                Dysmenorrhea, the medical term for painful periods, is generally divided into two categories:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Primary Dysmenorrhea
                  </h3>
                  <p className="text-gray-700">
                    This is menstrual pain that occurs without any underlying pelvic disease. It is caused by natural uterine contractions triggered by prostaglandins — hormone-like substances that help the uterus shed its lining. Primary dysmenorrhea typically begins within a year or two of a girl's first period, usually starts just before or at the onset of bleeding, and gradually eases within a few days.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Secondary Dysmenorrhea
                  </h3>
                  <p className="text-gray-700">
                    This type of period pain is caused by an underlying reproductive health condition, such as endometriosis, fibroids, or adenomyosis. Unlike primary dysmenorrhea, secondary dysmenorrhea often starts later in life, tends to worsen over time, may begin before the period starts and last well beyond its end, and frequently does not respond well to standard painkillers.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                Distinguishing between the two is important because primary dysmenorrhea can often be managed with simple measures, while secondary dysmenorrhea usually requires identifying and treating the underlying cause for lasting relief.
              </p>
            </div>

            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Painful Periods
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Prostaglandin-Related Cramping (Primary Dysmenorrhea)
                  </h3>
                  <p className="text-gray-700">
                    Elevated levels of prostaglandins cause stronger uterine contractions, leading to the classic cramping pain most women experience to some degree during their periods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Endometriosis
                  </h3>
                  <p className="text-gray-700">
                    One of the most common causes of severe, worsening period pain, endometriosis occurs when tissue similar to the uterine lining grows outside the uterus, causing inflammation, scarring, and significant pelvic pain — often extending beyond the days of bleeding.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Adenomyosis
                  </h3>
                  <p className="text-gray-700">
                    This condition, where the uterine lining grows into the muscular wall of the uterus, causes the uterus to become enlarged and tender, often resulting in severe cramping alongside heavy bleeding.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Uterine Fibroids
                  </h3>
                  <p className="text-gray-700">
                    Depending on their size and location, fibroids can cause significant pelvic pressure and pain, particularly during menstruation when the uterus contracts.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Pelvic Inflammatory Disease (PID)
                  </h3>
                  <p className="text-gray-700">
                    Infections of the reproductive organs can cause chronic pelvic pain that often intensifies around the menstrual period.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Uterine Polyps
                  </h3>
                  <p className="text-gray-700">
                    Growths in the uterine lining can contribute to cramping alongside irregular or heavy bleeding.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Use of an IUD
                  </h3>
                  <p className="text-gray-700">
                    Certain intrauterine devices, particularly copper IUDs, can increase menstrual cramping as a side effect, especially in the first few months after insertion.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    8. Cervical Stenosis
                  </h3>
                  <p className="text-gray-700">
                    A narrowing of the cervical opening can, in some women, restrict menstrual flow and increase pressure and pain during periods.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — When to See a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See a Doctor for Painful Periods?
              </h2>

              <p className="text-gray-700 mb-4">
                You should consult a gynaecologist if you experience:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Period pain severe enough to interfere with work, school, or daily activities</li>
                <li>Pain that doesn't improve with over-the-counter painkillers</li>
                <li>Pain that has gradually worsened over time</li>
                <li>Pain that begins before your period starts or continues well after it ends</li>
                <li>Pelvic pain during intercourse, bowel movements, or urination around your period</li>
                <li>Heavy bleeding accompanying the pain</li>
                <li>New or unusual pain patterns that are different from your typical cramps</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Persistent or worsening period pain is one of the clearest signals that an underlying condition like endometriosis or adenomyosis may be present, and earlier diagnosis generally leads to more effective treatment and better long-term outcomes, including for fertility.
              </p>
            </div>

            {/* Section 5 — How Are Painful Periods Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Are Painful Periods Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                A proper evaluation for painful periods typically includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Detailed history:</strong> Pain pattern, timing, severity, and associated symptoms</li>
                <li><strong>Pelvic examination:</strong> To check for tenderness, uterine enlargement, or abnormal masses</li>
                <li><strong>Ultrasound (transvaginal or abdominal):</strong> To detect fibroids, adenomyosis, or ovarian cysts related to endometriosis</li>
                <li><strong>Blood tests:</strong> To rule out infection or anaemia from associated heavy bleeding</li>
                <li><strong>Diagnostic laparoscopy:</strong> The gold-standard method for confirming and treating endometriosis, allowing direct visualisation and, where needed, immediate treatment of affected tissue</li>
                <li><strong>Hysteroscopy:</strong> To examine the uterine cavity if polyps or other structural abnormalities are suspected</li>
              </ul>
            </div>

            {/* Section 6 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Painful Periods
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment depends on the underlying cause, severity of pain, and whether the woman is planning a pregnancy.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Lifestyle and Home-Based Measures
                  </h3>
                  <p className="text-gray-700 mb-3">
                    For milder, primary dysmenorrhea, several approaches can help reduce discomfort:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Heat therapy:</strong> A heating pad or hot water bottle on the lower abdomen can relax uterine muscles and ease cramping</li>
                    <li><strong>Regular light exercise:</strong> Physical activity can help reduce the severity of menstrual cramps for many women</li>
                    <li><strong>Adequate hydration and a balanced diet:</strong> Can help reduce bloating and overall discomfort</li>
                    <li><strong>Stress management:</strong> Since stress can heighten the perception of pain</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Medical Management
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When lifestyle measures aren't enough, several medical treatment options are effective:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>NSAIDs (anti-inflammatory painkillers):</strong> Reduce prostaglandin production and are often effective for primary dysmenorrhea when taken early in the cycle</li>
                    <li><strong>Hormonal contraceptives:</strong> Birth control pills, patches, or hormonal IUDs can significantly reduce period pain by thinning the uterine lining and reducing prostaglandin levels</li>
                    <li><strong>Tranexamic acid:</strong> If heavy bleeding accompanies the pain, this medication can reduce blood loss</li>
                    <li><strong>Targeted hormonal therapy:</strong> For endometriosis-related pain, specific hormonal treatments can help suppress the growth of endometrial tissue outside the uterus</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Minimally Invasive Surgical Options
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When painful periods are caused by an underlying structural condition, or medical management alone doesn't provide sufficient relief, laparoscopic treatment is often the most effective long-term solution:
                  </p>
                  <ul className="text-gray-700 space-y-3 list-disc pl-5">
                    <li><strong>Laparoscopic Excision of Endometriosis:</strong> Using high-definition 3D laparoscopic visualisation, the surgeon precisely removes endometriotic tissue and any associated scar tissue, offering significant, often long-lasting pain relief while preserving fertility.</li>
                    <li><strong>Laparoscopic Myomectomy:</strong> For fibroids causing painful, heavy periods, this keyhole procedure removes the fibroids while preserving the uterus — important for women who wish to conceive in the future.</li>
                    <li><strong>Hysteroscopic Polypectomy:</strong> A no-incision procedure to remove uterine polyps contributing to cramping and abnormal bleeding.</li>
                    <li><strong>Laparoscopic Hysterectomy:</strong> In severe, treatment-resistant cases of adenomyosis or fibroids where childbearing is complete, a total laparoscopic hysterectomy offers a definitive, minimally invasive solution.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 — Why Minimally Invasive Treatment Is Preferred */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Minimally Invasive Treatment Is Preferred
              </h2>

              <p className="text-gray-700 mb-4">
                For period pain caused by conditions like endometriosis or fibroids, laparoscopic surgery offers clear advantages over traditional open surgery:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Minimal scarring from incisions of just 5–10mm</li>
                <li>Significantly less post-operative pain, reducing dependence on strong painkillers</li>
                <li>Shorter hospital stay, often day-care or a 24–48 hour admission</li>
                <li>Faster recovery, with most women resuming normal activity within 5 to 7 days</li>
                <li>Better fertility preservation, thanks to precise, high-definition surgical visualisation</li>
                <li>Lower risk of infection and internal adhesions compared to open procedures</li>
              </ul>
            </div>

            {/* Section 8 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Painful Periods Treatment Doctor in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For women in Moradabad dealing with severe or worsening period pain, Dr. Priyanka Pachauri (MS in Obstetrics & Gynaecology, FMAS, Advanced Infertility Fellowship) offers a comprehensive, technology-backed approach to diagnosis and treatment. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, reflects a &quot;Her Health First&quot; philosophy — listening carefully to each patient's pain history before recommending investigations or treatment.
              </p>

              <p className="text-gray-700 mb-4">
                Her clinic offers a dedicated laparoscopic and gynaecological surgery practice, using high-definition 3D laparoscopic technology to diagnose and treat the most common causes of painful periods. This includes laparoscopic excision of endometriosis and ovarian endometriomas — often the underlying cause of severe, worsening period pain — as well as laparoscopic myomectomy for fibroids and hysteroscopic polypectomy for uterine polyps contributing to cramping. The clinic's blog features a detailed article on advanced laparoscopic surgery for endometriosis, explaining how 3D 4K keyhole surgery enables precise diagnosis, complete tissue excision, and a rapid 24-hour recovery — directly relevant for women whose period pain has been linked to this condition.
              </p>

              <p className="text-gray-700 mb-4">
                Diagnostic tools available at the clinic, including a 3D/4D ultrasound machine, allow for early identification of fibroids, adenomyosis, and ovarian cysts that may be contributing to pain, helping guide the right treatment path — whether that is medical management, hormonal therapy, or surgery — before pain becomes chronic or significantly affects quality of life.
              </p>
            </div>

            {/* Section 9 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
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
                          href="mailto:drpriyanka@gynaecologistmoradabad.com"
                          className="hover:underline"
                        >
                          drpriyanka@gynaecologistmoradabad.com
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
                          Instagram: @dr.priyanka.gynae
                        </a>
                        <a
                          href="https://www.facebook.com/priyanka.pachauri.790080"
                          className="block hover:underline text-black"
                        >
                          Facebook: priyanka.pachauri.790080
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
            </div>

            {/* Section 10 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQs)
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