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

export default function AbnormalUterineBleedingSpecialist() {
  const faqs = [
    {
      q: "What is abnormal uterine bleeding?",
      a: "It refers to any bleeding pattern outside the normal range — including heavy, prolonged, irregular, or postmenopausal bleeding.",
    },
    {
      q: "What are the common causes of abnormal uterine bleeding?",
      a: "Common causes include fibroids, polyps, adenomyosis, hormonal imbalance, ovulatory dysfunction, and occasionally bleeding disorders.",
    },
    {
      q: "When should I see a specialist for abnormal bleeding?",
      a: "See a specialist if bleeding lasts over 7 days, occurs between periods, follows intercourse, or happens after menopause.",
    },
    {
      q: "Is bleeding after menopause serious?",
      a: "Any bleeding after menopause should be evaluated promptly, as it can occasionally indicate a more serious underlying condition.",
    },
    {
      q: "How is abnormal uterine bleeding diagnosed?",
      a: "Diagnosis typically involves a pelvic exam, ultrasound, blood tests, and sometimes hysteroscopy or an endometrial biopsy.",
    },
    {
      q: "Can abnormal uterine bleeding be treated without surgery?",
      a: "Yes, many cases are managed with hormonal therapy, a hormonal IUD, or other medication without needing surgical treatment.",
    },
    {
      q: "What is hysteroscopic polypectomy?",
      a: "It's a no-incision procedure to remove uterine polyps causing irregular or heavy bleeding, performed through the vagina and cervix.",
    },
    {
      q: "Are laparoscopic treatments for abnormal bleeding safe?",
      a: "Yes, laparoscopic and hysteroscopic procedures are generally safe, offering less pain, minimal scarring, and faster recovery than open surgery.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering diagnosis and treatment for abnormal uterine bleeding and related conditions.",
    },
    {
      q: "What diagnostic tools does Dr. Priyanka Pachauri's clinic offer?",
      a: "Her clinic offers 3D/4D ultrasound imaging and diagnostic hysteroscopy to accurately identify the cause of abnormal uterine bleeding.",
    },
    {
      q: "Can abnormal uterine bleeding affect fertility?",
      a: "Yes, underlying causes like fibroids, polyps, or ovulatory dysfunction can affect fertility, making accurate diagnosis important.",
    },
    {
      q: "How can I book a consultation for abnormal uterine bleeding in Moradabad?",
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
                Abnormal Uterine Bleeding Specialist: Causes, Diagnosis & Treatment Explained
              </h1>

              <p className="text-gray-700 mb-4">
                Abnormal uterine bleeding (AUB) is one of the most common gynaecological complaints, affecting women across every stage of reproductive life — from teenagers just starting their periods to women approaching menopause. It refers to any bleeding pattern that falls outside the normal range in terms of timing, duration, or amount, and can be a source of significant physical discomfort, anxiety, and disruption to daily life. Because abnormal uterine bleeding can stem from a wide range of causes — some minor, others requiring focused treatment — consulting a qualified abnormal uterine bleeding specialist is essential for an accurate diagnosis and the right treatment plan.
              </p>

              <p className="text-gray-700">
                This guide covers what qualifies as abnormal uterine bleeding, its most common causes, how it is diagnosed, and the treatment options available today.
              </p>
            </div>

            {/* Section 2 — What Is Abnormal Uterine Bleeding? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Abnormal Uterine Bleeding?
              </h2>

              <p className="text-gray-700 mb-4">
                A normal menstrual cycle typically lasts between 21 and 35 days, with bleeding lasting 3 to 7 days and a fairly predictable amount of flow. Abnormal uterine bleeding refers to any deviation from this pattern, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Heavy menstrual bleeding:</strong> Excessive flow or periods lasting longer than 7 days</li>
                <li><strong>Bleeding between periods (intermenstrual bleeding):</strong> Spotting or bleeding at unexpected times in the cycle</li>
                <li><strong>Bleeding after intercourse:</strong> Which should always be evaluated</li>
                <li><strong>Very frequent periods:</strong> Cycles shorter than 21 days</li>
                <li><strong>Very infrequent periods:</strong> Cycles longer than 35 days, or missed periods altogether</li>
                <li><strong>Postmenopausal bleeding:</strong> Any bleeding after menopause has been established, which always warrants prompt evaluation</li>
                <li><strong>Prolonged bleeding:</strong> Periods that continue well beyond the normal 7-day range</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Doctors use the internationally recognised PALM-COEIN classification system to categorise the underlying causes of abnormal uterine bleeding into structural causes (Polyp, Adenomyosis, Leiomyoma/fibroids, Malignancy) and non-structural causes (Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not otherwise classified) — a framework that helps guide systematic diagnosis and treatment.
              </p>
            </div>

            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Abnormal Uterine Bleeding
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Uterine Fibroids (Leiomyoma)
                  </h3>
                  <p className="text-gray-700">
                    Non-cancerous growths in the muscular wall of the uterus are among the most common structural causes of heavy or prolonged bleeding, particularly when they distort the uterine cavity.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Endometrial Polyps
                  </h3>
                  <p className="text-gray-700">
                    Small, usually benign growths on the uterine lining frequently cause spotting between periods or unexpectedly heavy bleeding.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Adenomyosis
                  </h3>
                  <p className="text-gray-700">
                    When uterine lining tissue grows into the muscular wall of the uterus, it often causes heavy, prolonged, and painful bleeding, along with an enlarged, tender uterus.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Ovulatory Dysfunction
                  </h3>
                  <p className="text-gray-700">
                    Irregular or absent ovulation — commonly caused by PCOS, thyroid disorders, or significant stress — disrupts the normal hormonal signalling that regulates bleeding, leading to unpredictable cycles and abnormal flow.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Hormonal Imbalance
                  </h3>
                  <p className="text-gray-700">
                    Fluctuations in estrogen and progesterone, whether due to PCOS, thyroid dysfunction, or perimenopause, are among the most frequent causes of abnormal bleeding patterns.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Bleeding or Clotting Disorders
                  </h3>
                  <p className="text-gray-700">
                    Underlying blood clotting abnormalities can present as unusually heavy or prolonged bleeding, particularly if present since a woman's very first period.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Endometrial Hyperplasia
                  </h3>
                  <p className="text-gray-700">
                    A thickening of the uterine lining, often related to prolonged unopposed estrogen exposure, can cause heavy or irregular bleeding and, in some cases, requires close monitoring.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    8. Use of Hormonal Contraception or IUDs
                  </h3>
                  <p className="text-gray-700">
                    Certain hormonal contraceptives and copper IUDs can cause irregular spotting or changes in bleeding pattern, especially in the initial months of use.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    9. Infections
                  </h3>
                  <p className="text-gray-700">
                    Pelvic infections, including sexually transmitted infections, can cause abnormal bleeding, often alongside pelvic pain or unusual discharge.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    10. Malignancy
                  </h3>
                  <p className="text-gray-700">
                    Though far less common, endometrial or cervical cancer can present as abnormal uterine bleeding, particularly in women over 45 or after menopause — which is precisely why any postmenopausal bleeding needs prompt evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — When to Consult a Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Consult a Specialist?
              </h2>

              <p className="text-gray-700 mb-4">
                You should seek evaluation from an abnormal uterine bleeding specialist if you experience:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Periods lasting longer than 7 days or requiring very frequent pad/tampon changes</li>
                <li>Bleeding or spotting between your regular periods</li>
                <li>Bleeding after intercourse</li>
                <li>Cycles shorter than 21 days or longer than 35 days</li>
                <li>Any bleeding after menopause has been established</li>
                <li>Bleeding heavy enough to cause fatigue, dizziness, or other signs of anaemia</li>
                <li>Bleeding accompanied by pelvic pain or unusual discharge</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Because the underlying causes range from easily treatable hormonal imbalances to conditions that require closer monitoring, timely evaluation is important for both symptom relief and long-term reproductive health.
              </p>
            </div>

            {/* Section 5 — How Is Abnormal Uterine Bleeding Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is Abnormal Uterine Bleeding Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                A comprehensive evaluation by a specialist typically includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Detailed menstrual and medical history:</strong> Cycle pattern, duration, associated symptoms, and medication use</li>
                <li><strong>Pelvic examination:</strong> To assess the uterus, cervix, and ovaries</li>
                <li><strong>Pelvic ultrasound (transvaginal or abdominal):</strong> The primary imaging tool to detect fibroids, polyps, adenomyosis, or ovarian cysts</li>
                <li><strong>Blood tests:</strong> To check for anaemia, thyroid function, and clotting profile</li>
                <li><strong>Diagnostic hysteroscopy:</strong> Direct visualisation of the uterine cavity, particularly useful for detecting polyps or submucosal fibroids that may not be fully clear on ultrasound alone</li>
                <li><strong>Endometrial biopsy:</strong> Recommended for women over 45, those with risk factors for endometrial cancer, or anyone with postmenopausal bleeding, to rule out abnormal cell changes</li>
                <li><strong>Pap smear:</strong> To screen for cervical causes of abnormal bleeding</li>
              </ul>
            </div>

            {/* Section 6 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Abnormal Uterine Bleeding
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment is guided by the specific underlying cause identified, along with the patient's age, severity of symptoms, and fertility goals.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Medical (Non-Surgical) Management
                  </h3>
                  <p className="text-gray-700 mb-3">
                    For many causes of abnormal uterine bleeding, particularly those linked to ovulatory dysfunction or hormonal imbalance, treatment can begin with:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Hormonal therapy:</strong> Combined oral contraceptives or progesterone therapy to regulate and reduce bleeding</li>
                    <li><strong>Hormonal IUD (levonorgestrel-releasing):</strong> Significantly reduces bleeding over time and is often highly effective for heavy or irregular bleeding</li>
                    <li><strong>Tranexamic acid:</strong> Reduces blood loss during heavy bleeding episodes</li>
                    <li><strong>Anti-inflammatory medication:</strong> Helps reduce both bleeding volume and associated pain</li>
                    <li><strong>Thyroid or metabolic treatment:</strong> Correcting an underlying thyroid disorder or insulin resistance can normalise bleeding patterns</li>
                    <li><strong>Iron supplementation:</strong> To correct or prevent anaemia resulting from prolonged or heavy bleeding</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Minimally Invasive and Surgical Options
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When a structural cause is identified, or medical management alone does not provide adequate relief, procedures such as the following are often recommended:
                  </p>
                  <ul className="text-gray-700 space-y-3 list-disc pl-5">
                    <li><strong>Diagnostic and Operative Hysteroscopy:</strong> Allows direct examination of the uterine cavity and, where needed, immediate treatment of the underlying cause.</li>
                    <li><strong>Hysteroscopic Polypectomy:</strong> A no-incision procedure to remove uterine polyps responsible for irregular or heavy bleeding.</li>
                    <li><strong>Laparoscopic Myomectomy:</strong> Keyhole removal of fibroids while preserving the uterus, an important option for women planning future pregnancies.</li>
                    <li><strong>Endometrial Ablation:</strong> Reduces or removes the uterine lining to significantly reduce bleeding, generally recommended for women who have completed childbearing.</li>
                    <li><strong>Laparoscopic Hysterectomy:</strong> Reserved for severe, treatment-resistant bleeding where childbearing is complete, offering a minimally invasive alternative to traditional open hysterectomy with a much shorter recovery period.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 — Why Minimally Invasive Treatment Is Preferred */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Minimally Invasive Treatment Is the Preferred Approach
              </h2>

              <p className="text-gray-700 mb-4">
                Where surgery becomes necessary, laparoscopic and hysteroscopic techniques offer clear advantages compared to traditional open surgery:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Minimal scarring from incisions of only 5–10mm</li>
                <li>Significantly less post-operative pain, reducing dependence on strong painkillers</li>
                <li>Shorter hospital stay, often as a day-care procedure or a 24–48 hour admission</li>
                <li>Faster recovery, with most patients resuming normal activity within 5 to 7 days</li>
                <li>Better preservation of fertility, thanks to precise, high-definition surgical visualisation</li>
                <li>Lower risk of infection and internal adhesions compared to open surgical approaches</li>
              </ul>
            </div>

            {/* Section 8 — Lifestyle Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Tips to Support Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Track your bleeding pattern — note timing, duration, and flow to help your specialist identify the likely underlying cause</li>
                <li>Eat iron-rich foods such as leafy greens, legumes, and lean meats to help offset blood loss</li>
                <li>Maintain a healthy weight, since both underweight and overweight status can affect hormone-related bleeding</li>
                <li>Avoid self-medicating with unregulated supplements or unverified home remedies for abnormal bleeding</li>
                <li>Attend follow-up appointments as advised, especially while on hormonal treatment, to monitor progress</li>
                <li>Never ignore postmenopausal bleeding, no matter how minor it seems — always get it evaluated promptly</li>
              </ul>
            </div>

            {/* Section 9 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Abnormal Uterine Bleeding Specialist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For women in Moradabad experiencing abnormal uterine bleeding, Dr. Priyanka Pachauri (MS in Obstetrics & Gynaecology, FMAS, Advanced Infertility Fellowship) offers a structured, technology-backed approach to diagnosis and treatment. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, outlines her practice philosophy as &quot;Her Health First&quot; — combining patient-first communication with advanced diagnostic and surgical technology.
              </p>

              <p className="text-gray-700 mb-4">
                Her clinic's meta description explicitly lists menstrual disorder treatment among her core areas of practice, alongside laparoscopic gynaecological surgery, antenatal and postnatal care, and high-risk pregnancy management. For evaluating abnormal uterine bleeding, the clinic is equipped with a 3D/4D ultrasound machine to assess the uterus, ovaries, and endometrial lining, along with diagnostic hysteroscopy to directly examine the uterine cavity — a key step in identifying polyps or submucosal fibroids contributing to irregular bleeding.
              </p>

              <p className="text-gray-700 mb-4">
                Where a structural cause is identified, treatment options available at the clinic include hysteroscopic polypectomy for uterine polyps, laparoscopic myomectomy for fibroids using high-definition 3D laparoscopic technology, and, where medically necessary, Total Laparoscopic Hysterectomy (TLH) for severe, treatment-resistant bleeding. This combination of accurate diagnostic imaging and a full spectrum of minimally invasive treatment options allows patients to be evaluated and treated for abnormal uterine bleeding without needing to be referred between multiple specialists.
              </p>
            </div>

            {/* Section 10 — Contact Information */}
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

            {/* Section 11 — FAQs */}
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