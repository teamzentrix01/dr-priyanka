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

export default function UterinePolypRemovalMoradabad() {
  const faqs = [
    {
      q: "Is uterine polyp removal a painful procedure?",
      a: "No, hysteroscopic polypectomy is minimally invasive and performed under sedation or anesthesia, causing little to no pain.",
    },
    {
      q: "Does polyp removal require any cuts or stitches?",
      a: "No, the procedure is done entirely through the vaginal canal, with no external incisions or scarring.",
    },
    {
      q: "How long does the polyp removal procedure take?",
      a: "It typically takes 20–30 minutes and is usually a same-day, day-care procedure.",
    },
    {
      q: "Are uterine polyps cancerous?",
      a: "Most uterine polyps are benign, but removed tissue is always sent for lab analysis to confirm and rule out any abnormal changes.",
    },
    {
      q: "Can uterine polyps cause infertility?",
      a: "Yes, polyps can interfere with implantation, and removal often improves the chances of natural conception or fertility treatment success.",
    },
    {
      q: "Can uterine polyps come back after removal?",
      a: "Yes, new polyps can occasionally develop, especially with ongoing hormonal risk factors, so regular follow-up is recommended.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use for polyp removal?",
      a: "The clinic uses diagnostic and operative hysteroscopy along with advanced 3D/4D ultrasound for precise, scarless polyp treatment.",
    },
    {
      q: "How can I book a consultation for uterine polyp removal in Moradabad?",
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
                Uterine Polyp Removal in Moradabad: Complete Guide to Diagnosis & Treatment
              </h1>

              <p className="text-gray-700 mb-4">
                Abnormal uterine bleeding, spotting between periods, or unexplained difficulty conceiving can sometimes be traced back to a small but significant cause — uterine polyps. Though often overlooked, these growths can affect both comfort and fertility if left untreated. If you have been advised to consider uterine polyp removal in Moradabad, this complete guide explains what polyps are, how they&apos;re diagnosed, what the removal procedure involves, and how to choose the right specialist for safe, effective care.
              </p>
            </div>

            {/* Section 2 — What Are Uterine Polyps? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Are Uterine Polyps?
              </h2>

              <p className="text-gray-700 mb-4">
                Uterine polyps, also called endometrial polyps, are small, usually non-cancerous growths that develop from the lining of the uterus (the endometrium) and project into the uterine cavity. They can range in size from a few millimeters to several centimeters, and a woman may have a single polyp or multiple polyps at the same time. While most uterine polyps are benign, some — particularly in postmenopausal women — can occasionally show precancerous or cancerous changes, making proper evaluation important.
              </p>
            </div>

            {/* Section 3 — Causes of Uterine Polyps */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Causes of Uterine Polyps
              </h2>

              <p className="text-gray-700 mb-4">
                The exact cause of uterine polyps isn&apos;t fully understood, but they are believed to be linked to hormonal factors, particularly excess estrogen, which stimulates the growth of the uterine lining. Polyps are more common in women who are:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Approaching or past menopause</li>
                <li>Overweight or obese</li>
                <li>Taking hormone therapy, including tamoxifen</li>
                <li>Dealing with high blood pressure</li>
                <li>Experiencing hormonal imbalances such as those seen in PCOS</li>
              </ul>
            </div>

            {/* Section 4 — Common Symptoms of Uterine Polyps */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Symptoms of Uterine Polyps
              </h2>

              <p className="text-gray-700 mb-4">
                Many uterine polyps cause no symptoms at all and are discovered incidentally during a routine ultrasound. However, when symptoms do occur, they commonly include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular menstrual bleeding, including spotting between periods</li>
                <li>Heavy menstrual periods</li>
                <li>Bleeding after menopause, which always warrants prompt evaluation</li>
                <li>Bleeding after intercourse</li>
                <li>Difficulty conceiving or recurrent miscarriage, particularly with polyps located near the fallopian tube openings or affecting the uterine cavity shape</li>
              </ul>

              <p className="text-gray-700">
                If you experience any postmenopausal bleeding, it&apos;s important to see a Gynaecologist promptly, as this symptom always requires evaluation to rule out more serious causes.
              </p>
            </div>

            {/* Section 5 — How Are Uterine Polyps Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Are Uterine Polyps Diagnosed?
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Detailed Medical History</strong>
                  <br />
                  Your doctor will review your bleeding pattern, menstrual history, and any fertility concerns.
                </li>
                <li>
                  <strong>Transvaginal Ultrasound</strong>
                  <br />
                  An ultrasound, particularly with advanced 3D/4D imaging, can often detect thickening of the uterine lining or a visible polyp within the uterine cavity.
                </li>
                <li>
                  <strong>Saline Infusion Sonography</strong>
                  <br />
                  In this specialized ultrasound technique, sterile saline is gently introduced into the uterine cavity to better outline the shape and size of polyps, providing clearer detail than a standard ultrasound.
                </li>
                <li>
                  <strong>Diagnostic Hysteroscopy</strong>
                  <br />
                  The most definitive way to diagnose uterine polyps is through hysteroscopy, a minimally invasive procedure where a thin, camera-equipped instrument is passed through the vaginal canal and cervix to directly visualize the inside of the uterus.
                </li>
              </ol>
            </div>

            {/* Section 6 — Treatment: Hysteroscopic Polypectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment: Hysteroscopic Polypectomy
              </h2>

              <p className="text-gray-700 mb-4">
                The standard, most effective treatment for symptomatic uterine polyps is hysteroscopic polypectomy — a precise, minimally invasive procedure performed entirely through the vaginal canal, without any external incisions or cuts on the abdomen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Hysteroscopic Removal Is the Preferred Approach
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>No external incisions or scarring, since the procedure is performed entirely through the natural vaginal opening</li>
                <li>Direct visualization, allowing the surgeon to precisely locate and remove the polyp while preserving healthy uterine lining</li>
                <li>Quick, day-care procedure, often completed within 20–30 minutes</li>
                <li>Fast recovery, with most women returning to normal activities within a day or two</li>
                <li>High accuracy, reducing the chance of missing smaller or multiple polyps compared to blind procedures</li>
              </ul>
            </div>

            {/* Section 7 — What to Expect During Hysteroscopic Polypectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Hysteroscopic Polypectomy
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pre-Procedure Evaluation</strong>
                  <br />
                  Ultrasound or saline infusion sonography helps confirm the presence, size, and location of the polyp before the procedure.
                </li>
                <li>
                  <strong>Anesthesia</strong>
                  <br />
                  The procedure is typically performed under light sedation or general anesthesia, depending on individual circumstances, ensuring comfort throughout.
                </li>
                <li>
                  <strong>Hysteroscope Insertion</strong>
                  <br />
                  A thin hysteroscope, fitted with a camera, is gently passed through the vaginal canal and cervix into the uterine cavity — no incisions are needed on the abdomen.
                </li>
                <li>
                  <strong>Polyp Removal</strong>
                  <br />
                  Using specialized micro-instruments passed through the hysteroscope, the surgeon precisely removes the polyp while directly visualizing the uterine cavity on a monitor, ensuring complete removal.
                </li>
                <li>
                  <strong>Tissue Analysis</strong>
                  <br />
                  The removed tissue is typically sent for laboratory analysis to confirm it is benign and rule out any abnormal cell changes.
                </li>
                <li>
                  <strong>Recovery and Discharge</strong>
                  <br />
                  As a day-care procedure, most patients go home the same day, often within a few hours of the procedure.
                </li>
              </ol>
            </div>

            {/* Section 8 — Recovery After Uterine Polyp Removal */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Uterine Polyp Removal
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Procedure duration: Typically 20–30 minutes</li>
                <li>Hospital stay: Same-day discharge in most cases</li>
                <li>Return to normal activities: Within 1–2 days</li>
                <li>Full recovery: Usually within a week</li>
                <li>Mild spotting or cramping may occur for a few days following the procedure, which is normal</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Post-Procedure Care Tips
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest for the remainder of the day following the procedure</li>
                <li>Avoid strenuous exercise and heavy lifting for a few days as advised</li>
                <li>Avoid intercourse and tampon use for the period recommended by your doctor</li>
                <li>Attend the follow-up visit to review the pathology report and confirm healing</li>
                <li>Contact your doctor if you experience heavy bleeding, fever, or severe pain</li>
              </ul>
            </div>

            {/* Section 9 — Uterine Polyps and Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Uterine Polyps and Fertility
              </h2>

              <p className="text-gray-700 mb-4">
                Uterine polyps can interfere with fertility by disrupting the normal shape of the uterine cavity, affecting embryo implantation, or blocking the fallopian tube openings. For women experiencing unexplained infertility or recurrent pregnancy loss, hysteroscopic evaluation and polyp removal is often recommended as part of the fertility work-up, since studies show that removing polyps can meaningfully improve conception rates, including in women pursuing IUI or IVF.
              </p>
            </div>

            {/* Section 10 — Can Uterine Polyps Come Back? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Can Uterine Polyps Come Back?
              </h2>

              <p className="text-gray-700 mb-4">
                Yes, new polyps can occasionally develop over time, particularly in women with ongoing hormonal imbalances or risk factors such as obesity or hormone therapy use. Regular follow-up and, when appropriate, management of underlying hormonal factors can help reduce the likelihood of recurrence.
              </p>
            </div>

            {/* Section 11 — How to Choose the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Specialist for Uterine Polyp Removal in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Since precision and fertility outcomes depend heavily on surgical skill and technology, choosing an experienced specialist matters. Consider the following:
              </p>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Experience with hysteroscopic procedures, since precision matters for complete, safe polyp removal</li>
                <li>Access to advanced ultrasound imaging, including saline infusion sonography for accurate pre-procedure planning</li>
                <li>A day-care, minimally invasive approach, avoiding unnecessary hospital stays or larger surgical procedures</li>
                <li>Integrated fertility support, especially important for women experiencing infertility linked to polyps</li>
                <li>Clear communication about the procedure, pathology results, and recurrence risk</li>
                <li>Continuity of care from diagnosis through recovery and follow-up</li>
              </ol>
            </div>

            {/* Section 12 — Dr. Priyanka Gynaec: Trusted Uterine Polyp Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Trusted Uterine Polyp Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is a leading center for uterine polyp removal in Moradabad, offering precise, minimally invasive hysteroscopic care rooted in the philosophy of &quot;Her Health First.&quot;
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology Used
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Diagnostic and operative hysteroscopy for precise, scarless polyp removal</li>
                <li>Volusun E22BT2024 3D &amp; 4D ultrasound machine for accurate pre-procedure evaluation</li>
                <li>AI-assisted diagnostic tools for comprehensive reproductive health assessment</li>
                <li>GERI time-lapse imaging incubator supporting fertility treatment for patients pursuing IVF after polyp removal</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Patients Trust This Clinic
              </h3>

              <p className="text-gray-700 mb-4">
                Patients consistently highlight gold-medal credentials, international fellowship training, and a caring team that remembers their history at every follow-up visit. Reported outcomes include quick, painless, scarless polyp removal, accurate pathology follow-up, and improved fertility outcomes after treatment.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Specialities
              </h3>

              <p className="text-gray-700 mb-2">
                Dr. Priyanka Gynaec offers a comprehensive range of women&apos;s health and surgical services, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Hysteroscopic Polypectomy — Precision hysteroscopic removal of uterine polyps without cuts</li>
                <li>Diagnostic Hysteroscopy — Gentle endoscopic evaluation of the uterine cavity</li>
                <li>Gynaecology &amp; Laparoscopy — Expert 3D laparoscopic care for reproductive health</li>
                <li>Fertility &amp; IVF — Personalized fertility treatment plans, including polyp-related infertility</li>
                <li>Laparoscopic Myomectomy — Uterus-preserving fibroid removal</li>
                <li>Laparoscopic Cystectomy — Fertility-preserving ovarian cyst removal</li>
                <li>Endometriosis Surgery — Advanced excision for pain relief and fertility preservation</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized maternity care</li>
                <li>Antenatal Services — Structured prenatal screening and monitoring</li>
              </ul>
            </div>

            {/* Section 13 — Cost of Uterine Polyp Removal in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of Uterine Polyp Removal in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The cost of uterine polyp removal in Moradabad depends on the size and number of polyps, the technique used, and whether the procedure is combined with other evaluations. As a day-care hysteroscopic procedure, it remains significantly more affordable than open surgery, while offering the same standard of precision available in metro-city hospitals. A personalized consultation with proper ultrasound evaluation is the best way to receive an accurate cost estimate.
              </p>
            </div>

            {/* Section 14 — Contact & Clinic Address */}
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

            {/* Section 15 — FAQs */}
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