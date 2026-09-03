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

export default function HysteroscopyTreatmentMoradabad() {
  const faqs = [
    {
      q: "Is hysteroscopy a painful procedure?",
      a: "No, it is minimally invasive and performed under local anesthesia, sedation, or general anesthesia, causing little to no pain.",
    },
    {
      q: "Does hysteroscopy require any cuts or stitches?",
      a: "No, the procedure is done entirely through the vaginal canal, with no external incisions or scarring.",
    },
    {
      q: "How long does a hysteroscopy procedure take?",
      a: "Diagnostic hysteroscopy takes about 10–20 minutes, while operative hysteroscopy typically takes 20–40 minutes.",
    },
    {
      q: "Can hysteroscopy help with infertility?",
      a: "Yes, it identifies and treats uterine cavity issues like polyps, fibroids, or adhesions that may be affecting fertility.",
    },
    {
      q: "Is hospital admission required for hysteroscopy?",
      a: "No, it is usually performed as a same-day, day-care procedure with quick discharge.",
    },
    {
      q: "What is the difference between diagnostic and operative hysteroscopy?",
      a: "Diagnostic hysteroscopy is for examination only, while operative hysteroscopy allows treatment of identified issues during the same procedure.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use for hysteroscopy?",
      a: "The clinic uses advanced diagnostic and operative hysteroscopy along with 3D/4D ultrasound for precise evaluation and treatment.",
    },
    {
      q: "How can I book a consultation for hysteroscopy treatment in Moradabad?",
      a: "You can call or WhatsApp the clinic directly using the contact details above to schedule a consultation and evaluation.",
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
                Hysteroscopy Treatment in Moradabad: Complete Guide to Diagnosis &amp; Care
              </h1>

              <p className="text-gray-700 mb-4">
                Unexplained bleeding, recurrent miscarriage, or unexplained infertility can be some of the most frustrating experiences for a woman, especially when routine tests fail to reveal a clear cause. In many such cases, the answer lies inside the uterine cavity itself — something only direct visualization can reveal. Hysteroscopy treatment in Moradabad now gives women access to this precise, minimally invasive diagnostic and treatment option, without needing to travel to a metro city. This complete guide explains what hysteroscopy is, when it&apos;s needed, what the procedure involves, and how to choose the right specialist.
              </p>
            </div>

            {/* Section 2 — What Is Hysteroscopy? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Hysteroscopy?
              </h2>

              <p className="text-gray-700 mb-4">
                Hysteroscopy is a minimally invasive procedure that allows a Gynaecologist to directly examine the inside of the uterus using a hysteroscope — a thin, lighted instrument fitted with a camera. Unlike other imaging methods such as ultrasound, hysteroscopy provides a real-time, direct view of the uterine cavity, allowing the doctor to both diagnose and, in many cases, treat abnormalities during the very same procedure.
              </p>

              <p className="text-gray-700">
                The procedure is performed entirely through the vaginal canal and cervix, meaning no external incisions or cuts are needed — a major advantage over traditional surgical approaches.
              </p>
            </div>

            {/* Section 3 — Types of Hysteroscopy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Types of Hysteroscopy
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1. Diagnostic Hysteroscopy
                  </h3>
                  <p className="text-gray-700">
                    Used purely to examine and evaluate the uterine cavity, identifying the cause of symptoms such as abnormal bleeding, recurrent miscarriage, or infertility.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2. Operative Hysteroscopy
                  </h3>
                  <p className="text-gray-700">
                    Performed when a problem is identified that can be treated during the same procedure, such as removing polyps, fibroids within the uterine cavity, or scar tissue.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — When Is Hysteroscopy Recommended? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Is Hysteroscopy Recommended?
              </h2>

              <p className="text-gray-700 mb-4">
                Your Gynaecologist may recommend hysteroscopy for a range of reasons, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Abnormal uterine bleeding, including heavy periods, bleeding between periods, or postmenopausal bleeding</li>
                <li>Recurrent miscarriage, to check for structural causes within the uterus</li>
                <li>Unexplained infertility, to evaluate the uterine cavity when other fertility tests are inconclusive</li>
                <li>Suspected uterine polyps or submucosal fibroids</li>
                <li>Evaluation before fertility treatment, such as IUI or IVF, to ensure the uterine cavity is healthy</li>
                <li>Suspected uterine septum or other congenital abnormalities</li>
                <li>Removal of retained products after incomplete miscarriage, in select cases</li>
                <li>Evaluation of scar tissue (Asherman&apos;s syndrome) following previous uterine surgery</li>
              </ul>
            </div>

            {/* Section 5 — What Conditions Can Hysteroscopy Detect or Treat? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Conditions Can Hysteroscopy Detect or Treat?
              </h2>

              <ul className="text-gray-700 space-y-3 mb-4 list-disc pl-5">
                <li><strong>Uterine polyps</strong> — Small growths from the uterine lining that can cause bleeding or affect fertility</li>
                <li><strong>Submucosal fibroids</strong> — Fibroids growing within the uterine cavity, often linked to heavy bleeding</li>
                <li><strong>Uterine septum</strong> — A congenital condition where a band of tissue divides the uterine cavity, which can affect pregnancy</li>
                <li><strong>Intrauterine adhesions (Asherman&apos;s syndrome)</strong> — Scar tissue that can develop after previous surgery or infection</li>
                <li><strong>Endometrial abnormalities</strong> — Thickened or irregular uterine lining that may need biopsy evaluation</li>
              </ul>
            </div>

            {/* Section 6 — Why Hysteroscopy Is the Preferred Diagnostic Tool */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Hysteroscopy Is the Preferred Diagnostic Tool
              </h2>

              <p className="text-gray-700 mb-4">
                Compared to other diagnostic methods, hysteroscopy offers unique advantages:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Direct visualization of the uterine cavity, offering far more detail than ultrasound alone</li>
                <li>Same-visit treatment, since many issues identified can be treated during the same procedure</li>
                <li>No external incisions, since the entire procedure is performed through the natural vaginal opening</li>
                <li>High diagnostic accuracy, reducing the chance of missing small abnormalities</li>
                <li>Quick, day-care procedure, often completed within 20–40 minutes</li>
                <li>Fast recovery, with most women returning to normal activities within a day or two</li>
              </ul>
            </div>

            {/* Section 7 — Step-by-Step: What to Expect During Hysteroscopy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: What to Expect During Hysteroscopy
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pre-Procedure Evaluation</strong>
                  <br />
                  Your doctor will review your symptoms and medical history, and may perform an ultrasound beforehand to guide the procedure plan.
                </li>
                <li>
                  <strong>Anesthesia</strong>
                  <br />
                  Depending on whether the procedure is diagnostic or operative, hysteroscopy may be performed under local anesthesia, sedation, or general anesthesia for complete comfort.
                </li>
                <li>
                  <strong>Hysteroscope Insertion</strong>
                  <br />
                  A thin hysteroscope is gently passed through the vaginal canal and cervix into the uterine cavity, with no incisions required on the abdomen.
                </li>
                <li>
                  <strong>Examination and Treatment</strong>
                  <br />
                  The uterine cavity is examined in real time on a monitor. If a problem such as a polyp or fibroid is identified, specialized micro-instruments passed through the hysteroscope can often treat it during the same visit.
                </li>
                <li>
                  <strong>Tissue Sampling, If Needed</strong>
                  <br />
                  In some cases, a small tissue sample (biopsy) may be taken for laboratory analysis to check for abnormal cell changes.
                </li>
                <li>
                  <strong>Recovery and Discharge</strong>
                  <br />
                  As a day-care procedure, most patients are able to go home the same day, often within a few hours.
                </li>
              </ol>
            </div>

            {/* Section 8 — Recovery After Hysteroscopy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Hysteroscopy
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Procedure duration:</strong> Typically 20–40 minutes</li>
                <li><strong>Hospital stay:</strong> Same-day discharge in most cases</li>
                <li><strong>Return to normal activities:</strong> Within 1–2 days</li>
                <li><strong>Full recovery:</strong> Usually within a week</li>
                <li>Mild cramping or light spotting may occur for a few days, which is normal</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">
                Post-Procedure Care Tips
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest for the remainder of the day following the procedure</li>
                <li>Avoid strenuous exercise and heavy lifting for a few days as advised</li>
                <li>Avoid intercourse and tampon use for the period recommended by your doctor</li>
                <li>Attend the follow-up visit to review results and discuss next steps</li>
                <li>Contact your doctor if you experience heavy bleeding, fever, or severe pain</li>
              </ul>
            </div>

            {/* Section 9 — Hysteroscopy and Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Hysteroscopy and Fertility
              </h2>

              <p className="text-gray-700 mb-4">
                Hysteroscopy plays a significant role in fertility evaluation and treatment. A healthy, normally shaped uterine cavity is essential for successful embryo implantation, and hysteroscopy allows doctors to identify and correct structural issues — such as polyps, fibroids, adhesions, or a uterine septum — that could otherwise interfere with conception or increase the risk of miscarriage. For women preparing for IUI or IVF, a hysteroscopic evaluation is often recommended beforehand to give the best possible chance of a successful pregnancy.
              </p>
            </div>

            {/* Section 10 — Diagnostic vs Operative Hysteroscopy: Quick Comparison */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diagnostic vs Operative Hysteroscopy: Quick Comparison
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">
                        Factor
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">
                        Diagnostic Hysteroscopy
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">
                        Operative Hysteroscopy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Purpose
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Examination and evaluation only
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Examination plus treatment
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Anesthesia
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Local anesthesia or mild sedation
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Sedation or general anesthesia
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Duration
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        10–20 minutes
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        20–40 minutes
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Hospital Stay
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Same-day discharge
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Same-day discharge
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Common Use
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Investigating bleeding or infertility cause
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Removing polyps, fibroids, or adhesions
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 11 — How to Choose the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Specialist for Hysteroscopy in Moradabad
              </h2>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Experience with both diagnostic and operative hysteroscopy, since many procedures combine evaluation and treatment</li>
                <li>Access to advanced imaging, including 3D/4D ultrasound for accurate pre-procedure planning</li>
                <li>A day-care, minimally invasive approach, avoiding unnecessary hospital stays</li>
                <li>Integrated fertility support, especially important for women undergoing infertility evaluation</li>
                <li>Clear communication about findings, treatment options, and next steps</li>
                <li>Continuity of care from diagnosis through recovery and, when relevant, fertility treatment planning</li>
              </ol>
            </div>

            {/* Section 12 — Dr. Priyanka Gynaec: Trusted Hysteroscopy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Trusted Hysteroscopy Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is a leading center for hysteroscopy treatment in Moradabad, offering precise, minimally invasive diagnostic and operative care rooted in the philosophy of &quot;Her Health First.&quot;
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology Used
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Diagnostic and operative hysteroscopy for gentle, precise evaluation and treatment of the uterine cavity</li>
                <li>Volusun E22BT2024 3D &amp; 4D ultrasound machine for accurate pre-procedure assessment</li>
                <li>AI-assisted diagnostic tools for comprehensive reproductive health evaluation</li>
                <li>GERI time-lapse imaging incubator supporting fertility treatment for patients pursuing IVF after hysteroscopic correction</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Patients Trust This Clinic
              </h3>

              <p className="text-gray-700 mb-4">
                Patients consistently highlight gold-medal credentials, international fellowship training, and a caring team that remembers their history at every follow-up visit. Reported outcomes include accurate diagnosis of previously unexplained bleeding or infertility, same-visit treatment of polyps and fibroids, and improved pregnancy outcomes after hysteroscopic correction.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Specialities
              </h3>

              <p className="text-gray-700 mb-2">
                Dr. Priyanka Gynaec offers a comprehensive range of women&apos;s health and surgical services, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Diagnostic Hysteroscopy — Gentle endoscopic evaluation of the uterine cavity</li>
                <li>Hysteroscopic Polypectomy — Precision hysteroscopic removal of uterine polyps without cuts</li>
                <li>Gynaecology &amp; Laparoscopy — Expert 3D laparoscopic care for reproductive health</li>
                <li>Fertility &amp; IVF — Personalized fertility treatment plans, including uterine cavity evaluation</li>
                <li>Laparoscopic Myomectomy — Uterus-preserving fibroid removal</li>
                <li>Laparoscopic Cystectomy — Fertility-preserving ovarian cyst removal</li>
                <li>Endometriosis Surgery — Advanced excision for pain relief and fertility preservation</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized maternity care</li>
                <li>Antenatal Services — Structured prenatal screening and monitoring</li>
              </ul>
            </div>

            {/* Section 13 — Cost of Hysteroscopy in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of Hysteroscopy in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The cost of hysteroscopy treatment in Moradabad depends on whether it is diagnostic or operative, the complexity of any findings treated, and whether it is combined with other evaluations such as fertility work-up. As a day-care procedure, it remains significantly more affordable than open surgery, while offering the same standard of precision available in metro-city hospitals. A personalized consultation is the best way to receive an accurate cost estimate based on your specific situation.
              </p>
            </div>

            {/* Section 14 — Conclusion */}
            <div className="mb-12">
              <p className="text-gray-700 mb-4">
                When bleeding, miscarriage, or infertility don&apos;t have a clear explanation, the answer often lies within the uterine cavity itself — and hysteroscopy offers the clearest, most direct way to find it. With advanced hysteroscopic technology and experienced specialists now available locally, hysteroscopy treatment in Moradabad gives women fast, precise, same-visit diagnosis and treatment without the need to travel far from home. If you are dealing with unexplained bleeding, recurrent miscarriage, or infertility, consult an experienced specialist to get the clarity and care you need.
              </p>
            </div>

            {/* Section 15 — Contact & Clinic Address */}
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

            {/* Section 16 — FAQs */}
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