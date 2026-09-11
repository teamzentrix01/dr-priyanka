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

export default function HeavyPeriodsTreatmentGynaecologist() {
  const faqs = [
    {
      q: "What is considered a heavy period?",
      a: "Needing to change protection every 1–2 hours, bleeding over 7 days, large clots, or bleeding that disrupts daily life all count as heavy periods (menorrhagia).",
    },
    {
      q: "What causes heavy periods?",
      a: "Common causes include uterine fibroids, adenomyosis, endometrial polyps, hormonal imbalances like PCOS or thyroid issues, and occasionally bleeding disorders.",
    },
    {
      q: "When should I see a gynaecologist for heavy bleeding?",
      a: "See a gynaecologist if bleeding disrupts your routine, causes anaemia symptoms, includes large clots, or if you bleed after menopause.",
    },
    {
      q: "Can heavy periods be treated without surgery?",
      a: "Yes, many cases are managed with medication, hormonal therapy, or a hormonal IUD, without needing any surgical procedure.",
    },
    {
      q: "What is a hysteroscopic polypectomy?",
      a: "It's a no-incision procedure to remove uterine polyps through the vagina and cervix using a hysteroscope, often resolving polyp-related heavy bleeding.",
    },
    {
      q: "Does a laparoscopic myomectomy remove the uterus?",
      a: "No, a laparoscopic myomectomy removes only the fibroids while preserving the uterus, making it suitable for women who wish to conceive later.",
    },
    {
      q: "When is a hysterectomy needed for heavy periods?",
      a: "A hysterectomy is generally considered only when other treatments fail, bleeding is severe, and the woman has completed her family.",
    },
    {
      q: "Are minimally invasive treatments for heavy periods safe?",
      a: "Yes, laparoscopic and hysteroscopic procedures are generally safe, with less pain, minimal scarring, and faster recovery than open surgery.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering diagnosis and treatment for heavy periods, laparoscopic surgery, and fertility care.",
    },
    {
      q: "What diagnostic tests does Dr. Priyanka Pachauri's clinic offer for heavy periods?",
      a: "Her clinic offers 3D/4D ultrasound, diagnostic hysteroscopy, and blood tests to accurately identify the cause of heavy menstrual bleeding.",
    },
    {
      q: "How can I book a consultation for heavy periods treatment?",
      a: "You can call, message on WhatsApp, email, or visit the clinic's official website to schedule a consultation.",
    },
    {
      q: "Can heavy periods affect fertility?",
      a: "Underlying causes like fibroids, polyps, or PCOS can affect fertility, which is why proper diagnosis and treatment are important, especially for women planning pregnancy.",
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
                Heavy Periods Treatment Gynaecologist: A Complete Guide to Diagnosis, Causes & Treatment Options
              </h1>

              <p className="text-gray-700 mb-4">
                Heavy periods — medically known as menorrhagia — are one of the most common reasons women visit a gynaecologist. While some variation in menstrual flow is completely normal, bleeding that soaks through a pad or tampon every hour for several hours, lasts longer than seven days, includes large blood clots, or interferes with daily life is not something to simply endure. Left unaddressed, heavy periods can lead to iron-deficiency anaemia, chronic fatigue, and in some cases point to an underlying gynaecological condition that needs proper treatment.
              </p>

              <p className="text-gray-700">
                This guide explains what causes heavy periods, when to see a gynaecologist, what treatment options exist — from medication to advanced laparoscopic surgery — and how to choose the right specialist for your care.
              </p>
            </div>

            {/* Section 2 — What Counts as "Heavy" Periods? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Counts as &quot;Heavy&quot; Periods?
              </h2>

              <p className="text-gray-700 mb-4">
                Menstrual flow varies from woman to woman, but doctors generally consider periods abnormally heavy when one or more of the following occur:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Needing to change a pad or tampon every one to two hours for several consecutive hours</li>
                <li>Bleeding that lasts longer than 7 days</li>
                <li>Passing blood clots larger than a coin</li>
                <li>Needing to use double sanitary protection to control the flow</li>
                <li>Bleeding that soaks through clothing or bedsheets</li>
                <li>Symptoms of anaemia such as tiredness, shortness of breath, dizziness, or pale skin</li>
                <li>Periods that force you to restrict normal daily, social, or work activities</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If any of these apply to you regularly, it is worth consulting a gynaecologist rather than assuming it is &quot;just how your body is.&quot;
              </p>
            </div>

            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Heavy Periods
              </h2>

              <p className="text-gray-700 mb-4">
                Heavy menstrual bleeding can stem from a wide range of causes, and identifying the correct one is the first step toward effective treatment:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Uterine Fibroids
                  </h3>
                  <p className="text-gray-700">
                    Fibroids are non-cancerous growths within the muscular wall of the uterus. Depending on their size and location, they can significantly increase menstrual blood loss and cause pelvic pressure or pain.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Adenomyosis
                  </h3>
                  <p className="text-gray-700">
                    This occurs when the tissue that normally lines the uterus grows into the muscular wall of the uterus itself, often causing heavy, painful periods and an enlarged, tender uterus.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Endometrial Polyps
                  </h3>
                  <p className="text-gray-700">
                    Small, usually benign growths on the inner lining of the uterus can cause irregular or heavy bleeding, particularly between periods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Hormonal Imbalances
                  </h3>
                  <p className="text-gray-700">
                    Conditions such as Polycystic Ovary Syndrome (PCOS) or thyroid dysfunction can disrupt the normal hormonal cycle, leading to irregular ovulation and unusually heavy or prolonged bleeding.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Adenomyosis and Endometriosis
                  </h3>
                  <p className="text-gray-700">
                    Endometriosis, where uterine-like tissue grows outside the uterus, can also contribute to heavier bleeding alongside significant pelvic pain.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Bleeding Disorders
                  </h3>
                  <p className="text-gray-700">
                    Less commonly, an underlying blood clotting disorder can be responsible for unusually heavy menstrual flow, especially if heavy bleeding has been present since the first period.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Intrauterine Devices (IUDs)
                  </h3>
                  <p className="text-gray-700">
                    Certain types of copper IUDs are known to increase menstrual flow as a side effect.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    8. Perimenopause
                  </h3>
                  <p className="text-gray-700">
                    As women approach menopause, hormone fluctuations can cause irregular cycles with occasional very heavy bleeding episodes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    9. Rarely, Uterine or Cervical Cancer
                  </h3>
                  <p className="text-gray-700">
                    While far less common, especially in younger women, abnormal or heavy bleeding — particularly after menopause — should always be evaluated to rule out malignancy.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — When to See a Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See a Gynaecologist?
              </h2>

              <p className="text-gray-700 mb-4">
                You should schedule a consultation with a gynaecologist if you experience:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Periods that regularly last longer than 7 days</li>
                <li>Bleeding heavy enough to disrupt your daily routine, work, or sleep</li>
                <li>Passing large clots or needing to change protection every hour</li>
                <li>Signs of anaemia — fatigue, breathlessness, dizziness, or paleness</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Any bleeding after menopause</li>
                <li>Pelvic pain along with heavy bleeding</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Early evaluation not only brings relief from disruptive symptoms but can also catch treatable underlying conditions before they progress.
              </p>
            </div>

            {/* Section 5 — How Is the Cause Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is the Cause of Heavy Periods Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                A thorough evaluation typically includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Detailed menstrual and medical history:</strong> Cycle length, flow pattern, pain, and associated symptoms</li>
                <li><strong>Pelvic examination:</strong> To check the size, shape, and tenderness of the uterus and ovaries</li>
                <li><strong>Ultrasound (transvaginal or abdominal):</strong> To detect fibroids, polyps, adenomyosis, or ovarian cysts</li>
                <li><strong>Blood tests:</strong> To check for anaemia, thyroid function, and clotting profile</li>
                <li><strong>Hysteroscopy:</strong> A minimally invasive procedure to directly visualise the inside of the uterine cavity, particularly useful for detecting polyps or submucosal fibroids</li>
                <li><strong>Endometrial biopsy:</strong> In select cases, to rule out abnormal cell changes, especially in women closer to or past menopause</li>
              </ul>
            </div>

            {/* Section 6 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Heavy Periods
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment is tailored to the underlying cause, the woman's age, severity of symptoms, and whether she wishes to preserve fertility.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Medical (Non-Surgical) Management
                  </h3>
                  <p className="text-gray-700 mb-3">
                    For many women, heavy periods can be effectively managed without surgery:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Tranexamic acid:</strong> Reduces blood loss during periods, taken only on heavy bleeding days</li>
                    <li><strong>Hormonal treatment:</strong> Combined oral contraceptive pills or progesterone-based therapy to regulate and lighten periods</li>
                    <li><strong>Hormonal IUD (levonorgestrel-releasing):</strong> Significantly reduces menstrual flow over time and can remain effective for several years</li>
                    <li><strong>Iron supplementation:</strong> To correct or prevent anaemia caused by ongoing blood loss</li>
                    <li><strong>Anti-inflammatory medication:</strong> Can reduce both pain and blood flow during periods</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Minimally Invasive & Surgical Options
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When medical management is insufficient, or a structural cause like fibroids or polyps is identified, minimally invasive procedures often provide long-term relief:
                  </p>
                  <ul className="text-gray-700 space-y-3 list-disc pl-5">
                    <li><strong>Hysteroscopic Polypectomy:</strong> Uterine polyps causing heavy or irregular bleeding can be removed through the vagina and cervix using a hysteroscope, with no external incision at all.</li>
                    <li><strong>Laparoscopic Myomectomy:</strong> For fibroids causing heavy bleeding, this keyhole procedure removes the fibroids while preserving the uterus — an important option for women who wish to have children in the future.</li>
                    <li><strong>Endometrial Ablation:</strong> A procedure that reduces or destroys the uterine lining to significantly lighten periods, generally recommended for women who have completed their family.</li>
                    <li><strong>Laparoscopic Hysterectomy:</strong> In cases where heavy bleeding is severe, recurrent, and unresponsive to other treatments — and childbearing is complete — a total laparoscopic hysterectomy offers a definitive, minimally invasive solution with a far shorter recovery than traditional open hysterectomy.</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-6">
                The right treatment path depends entirely on an accurate diagnosis, which is why a proper gynaecological evaluation is the essential first step rather than self-medicating or ignoring the symptoms.
              </p>
            </div>

            {/* Section 7 — Why Choose Minimally Invasive Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Minimally Invasive (Laparoscopic/Hysteroscopic) Treatment?
              </h2>

              <p className="text-gray-700 mb-4">
                When surgery is required to treat the underlying cause of heavy periods, minimally invasive techniques offer clear advantages over traditional open surgery:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Smaller incisions mean minimal scarring and less post-operative pain</li>
                <li>Shorter hospital stay, often as a day-care procedure or with just a 24–48 hour admission</li>
                <li>Faster recovery, with most women resuming normal activity within 5 to 7 days</li>
                <li>Better fertility preservation, since healthy uterine and ovarian tissue is disturbed as little as possible</li>
                <li>Reduced risk of infection and internal scarring (adhesions) compared to open procedures</li>
              </ul>
            </div>

            {/* Section 8 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist for Heavy Periods Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For women in Moradabad experiencing heavy or abnormal periods, Dr. Priyanka Pachauri (MS in Obstetrics & Gynaecology, FMAS, Advanced Infertility Fellowship) offers a structured, technology-backed approach to diagnosis and treatment. She co-leads Shree Advanced Urogynae Clinic and consults at Ujala Cygnus BrightStar Hospital, and her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, outlines a practice built around what she describes as a &quot;Her Health First&quot; philosophy — prioritising patient comfort, informed decision-making, and individualised treatment plans.
              </p>

              <p className="text-gray-700 mb-4">
                Her clinic is equipped for a complete diagnostic and treatment pathway for heavy menstrual bleeding, including 3D/4D ultrasound imaging to assess the uterus and ovaries, diagnostic hysteroscopy to examine the uterine cavity directly, and hysteroscopic polypectomy for polyp removal without any incision. Where a structural cause such as fibroids is responsible for heavy bleeding, she performs laparoscopic myomectomy using high-definition 3D laparoscopic technology, which allows fibroids to be removed with precision while preserving the uterus and fertility potential. In cases where a hysterectomy becomes medically necessary, her practice offers Total Laparoscopic Hysterectomy (TLH), a minimally invasive alternative to open surgery with significantly faster recovery.
              </p>

              <p className="text-gray-700 mb-4">
                Beyond the surgical and diagnostic side, the clinic's broader women's health services — including menstrual disorder treatment, fertility and IVF care, antenatal services, and normal delivery support — mean that heavy periods can be evaluated within the context of a woman's overall reproductive health rather than as an isolated symptom. The site's blog section also features educational articles on related topics such as PCOS and infertility and endometriosis treatment, reflecting an emphasis on helping patients understand their condition, not just treat it.
              </p>
            </div>

            {/* Section 9 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                If you are experiencing heavy or irregular periods and would like a proper evaluation, you can reach Dr. Priyanka Pachauri's clinic through any of the following:
              </p>

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