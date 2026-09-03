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

export default function FibroidTreatmentMoradabad() {
  const faqs = [
    {
      q: "Do all fibroids need to be treated?",
      a: "No, small fibroids without symptoms often just need regular monitoring rather than active treatment.",
    },
    {
      q: "Can fibroids be treated without surgery?",
      a: "Yes, medication can manage symptoms like heavy bleeding and pain for some women, though surgery may be needed for larger or symptomatic fibroids.",
    },
    {
      q: "Will fibroid surgery affect my fertility?",
      a: "Laparoscopic myomectomy is specifically designed to preserve the uterus and improve fertility outcomes for women planning pregnancy.",
    },
    {
      q: "How long is the recovery after fibroid surgery?",
      a: "Laparoscopic fibroid surgery typically allows full recovery within 3–4 weeks, much faster than open surgery.",
    },
    {
      q: "Can fibroids come back after treatment?",
      a: "New fibroids can occasionally develop over time, but the treated fibroids are completely removed during surgery.",
    },
    {
      q: "What is the difference between myomectomy and hysterectomy for fibroids?",
      a: "Myomectomy removes only the fibroids and preserves the uterus, while hysterectomy removes the entire uterus as a permanent solution.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use for fibroid treatment?",
      a: "The clinic uses high-definition 3D laparoscopic systems along with advanced 3D/4D ultrasound for precise fibroid mapping and surgery.",
    },
    {
      q: "How can I book a consultation for fibroid treatment in Moradabad?",
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
                Fibroid Treatment in Moradabad: Complete Guide to Diagnosis, Care & Recovery
              </h1>

              <p className="text-gray-700 mb-4">
                Uterine fibroids are among the most common Gynaecological conditions, affecting a large percentage of women at some point during their reproductive years. While many fibroids cause no symptoms at all, others can lead to heavy bleeding, pelvic pain, and fertility challenges that significantly impact daily life. If you have been diagnosed with fibroids or are experiencing symptoms that concern you, effective fibroid treatment in Moradabad is now available, combining accurate diagnosis with a full range of treatment options — from medication to advanced minimally invasive surgery. This guide covers everything you need to know.
              </p>
            </div>

            {/* Section 2 — What Are Uterine Fibroids? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Are Uterine Fibroids?
              </h2>

              <p className="text-gray-700 mb-4">
                Uterine fibroids, also called myomas or leiomyomas, are non-cancerous growths that develop in or on the wall of the uterus. They can range in size from tiny, seed-like growths to large masses that can distort the shape of the uterus. A woman may have a single fibroid or multiple fibroids of varying sizes at the same time. Fibroids are classified based on their location:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Subserosal fibroids — Grow on the outer wall of the uterus</li>
                <li>Intramural fibroids — Develop within the muscular wall of the uterus, the most common type</li>
                <li>Submucosal fibroids — Grow just beneath the uterine lining, often causing the heaviest bleeding</li>
              </ul>
            </div>

            {/* Section 3 — Common Symptoms of Fibroids */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Symptoms of Fibroids
              </h2>

              <p className="text-gray-700 mb-4">
                While some fibroids remain silent and are discovered only during a routine ultrasound, others cause noticeable symptoms, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Heavy or prolonged menstrual bleeding</li>
                <li>Pelvic pain or pressure, especially with larger fibroids</li>
                <li>Frequent urination, due to pressure on the bladder</li>
                <li>Constipation or bloating, from pressure on the bowel</li>
                <li>Lower back pain</li>
                <li>Pain during intercourse</li>
                <li>Difficulty conceiving or recurrent miscarriage, particularly with submucosal fibroids</li>
              </ul>
            </div>

            {/* Section 4 — Causes of Fibroids */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Causes of Fibroids
              </h2>

              <p className="text-gray-700 mb-4">
                The exact cause of fibroids is not fully understood, but several factors are known to influence their development, including hormonal levels (particularly estrogen and progesterone), genetic factors, and family history. Fibroids typically grow during the reproductive years and often shrink after menopause as hormone levels decline.
              </p>
            </div>

            {/* Section 5 — How Are Fibroids Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Are Fibroids Diagnosed?
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Detailed Medical History</strong>
                  <br />
                  Your doctor will review your menstrual patterns, pain symptoms, and any fertility concerns.
                </li>
                <li>
                  <strong>Pelvic Examination</strong>
                  <br />
                  A physical exam can sometimes detect an enlarged or irregularly shaped uterus suggestive of fibroids.
                </li>
                <li>
                  <strong>Ultrasound Imaging</strong>
                  <br />
                  A transvaginal ultrasound, particularly with advanced 3D/4D imaging, provides a detailed view of the size, number, and exact location of fibroids.
                </li>
                <li>
                  <strong>MRI, When Needed</strong>
                  <br />
                  For complex cases or when planning surgery, MRI imaging can provide additional detail to guide treatment planning.
                </li>
              </ol>
            </div>

            {/* Section 6 — Treatment Options for Fibroids */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Fibroids
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment depends on fibroid size, location, symptoms, and whether the patient wishes to preserve fertility.
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Watchful Waiting</strong>
                  <br />
                  Small, asymptomatic fibroids often don&apos;t require treatment and can simply be monitored with regular check-ups.
                </li>
                <li>
                  <strong>Medication</strong>
                  <br />
                  Hormonal medications can help manage heavy bleeding and pain, and may be used to temporarily shrink fibroids before surgery in some cases.
                </li>
                <li>
                  <strong>Laparoscopic Myomectomy</strong>
                  <br />
                  For women who wish to preserve their uterus and fertility, minimally invasive laparoscopic myomectomy removes fibroids through a few small incisions while carefully protecting healthy uterine tissue, allowing for a faster recovery than open surgery.
                </li>
                <li>
                  <strong>Hysteroscopic Myomectomy</strong>
                  <br />
                  For submucosal fibroids growing within the uterine cavity, a hysteroscopic approach can remove them without any external incisions, using instruments passed through the vaginal canal.
                </li>
                <li>
                  <strong>Laparoscopic Hysterectomy</strong>
                  <br />
                  In cases of severe, multiple, or recurrent fibroids where fertility preservation is not a concern, a minimally invasive laparoscopic hysterectomy offers a definitive solution with a much faster recovery than traditional open surgery.
                </li>
              </ol>
            </div>

            {/* Section 7 — Choosing Between Myomectomy and Hysterectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing Between Myomectomy and Hysterectomy
              </h2>

              <p className="text-gray-700 mb-4">
                This decision depends largely on whether future fertility is a priority:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Myomectomy removes only the fibroids and preserves the uterus, making it the preferred choice for women who want to conceive in the future.</li>
                <li>Hysterectomy removes the entire uterus and is considered a permanent, definitive solution, generally recommended for women who have completed their families or have very severe, recurrent fibroids.</li>
              </ul>

              <p className="text-gray-700">
                Your Gynaecologist will discuss both options in detail, along with your personal fertility goals, to help you make the right choice.
              </p>
            </div>

            {/* Section 8 — Step-by-Step: What to Expect During Laparoscopic Fibroid Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: What to Expect During Laparoscopic Fibroid Surgery
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pre-Surgical Evaluation</strong>
                  <br />
                  Detailed ultrasound or MRI imaging maps the exact size, number, and location of fibroids to plan the surgery precisely.
                </li>
                <li>
                  <strong>Anesthesia</strong>
                  <br />
                  The procedure is performed under general anesthesia, ensuring complete comfort throughout.
                </li>
                <li>
                  <strong>Small Incisions and Visualization</strong>
                  <br />
                  A few small incisions are made, and a laparoscope provides a magnified, high-definition view to guide the surgeon.
                </li>
                <li>
                  <strong>Fibroid Removal</strong>
                  <br />
                  The surgeon carefully separates and removes each fibroid, using techniques such as morcellation to extract larger fibroids through the small incisions, while carefully repairing the uterine wall.
                </li>
                <li>
                  <strong>Closure and Recovery</strong>
                  <br />
                  Incisions are closed with dissolvable stitches, and most patients are discharged within 1–2 days.
                </li>
              </ol>
            </div>

            {/* Section 9 — Recovery After Fibroid Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Fibroid Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Hospital stay: 1–2 days for laparoscopic procedures</li>
                <li>Return to light activities: Within 1–2 weeks</li>
                <li>Full recovery: Typically within 3–4 weeks</li>
                <li>Symptom relief: Most women notice significant improvement in bleeding and pain within one full menstrual cycle after surgery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Post-Operative Care Tips
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest adequately in the first week, with gentle walking as advised to support circulation</li>
                <li>Avoid heavy lifting and strenuous exercise for at least 4–6 weeks</li>
                <li>Keep incision sites clean and dry to prevent infection</li>
                <li>Take prescribed medications as directed for pain management</li>
                <li>Attend all follow-up visits to monitor healing</li>
                <li>Discuss the right timing for future pregnancy planning with your doctor after myomectomy</li>
              </ul>
            </div>

            {/* Section 10 — Fibroids and Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fibroids and Fertility
              </h2>

              <p className="text-gray-700 mb-4">
                Fibroids, particularly those growing within the uterine cavity, can interfere with implantation and increase the risk of miscarriage. However, most fibroids do not affect fertility, and many women with fibroids conceive naturally without any treatment at all. When fibroids are identified as a likely cause of infertility or recurrent pregnancy loss, laparoscopic or hysteroscopic myomectomy can significantly improve the chances of a successful pregnancy.
              </p>
            </div>

            {/* Section 11 — How to Choose the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Specialist for Fibroid Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Since fibroid location and treatment approach directly affect recovery and future fertility, choosing an experienced specialist is essential. Consider the following:
              </p>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Fellowship training and specialization in advanced Gynaecologic laparoscopy</li>
                <li>Experience with complex or multiple fibroid cases</li>
                <li>Availability of 3D/4K laparoscopic and hysteroscopic technology for precise treatment</li>
                <li>A personalized approach, offering both myomectomy and hysterectomy options based on your goals</li>
                <li>Clear communication about surgical risks, recovery timeline, and fertility implications</li>
                <li>Continuity of care from diagnosis through recovery and future pregnancy planning</li>
              </ol>
            </div>

            {/* Section 12 — Dr. Priyanka Gynaec: Trusted Fibroid Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Trusted Fibroid Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is a leading center for fibroid treatment in Moradabad, offering the complete range of treatment options — from medication to advanced minimally invasive surgery — rooted in the philosophy of &quot;Her Health First.&quot;
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology Used
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>High-Definition 3D Laparoscopic Surgery for precise fibroid removal and uterine repair</li>
                <li>Volusun E22BT2024 3D &amp; 4D ultrasound machine for accurate pre-surgical fibroid mapping</li>
                <li>AI-assisted diagnostic tools for comprehensive reproductive health evaluation</li>
                <li>GERI time-lapse imaging incubator supporting fertility treatment for patients planning IVF after fibroid removal</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Patients Trust This Clinic
              </h3>

              <p className="text-gray-700 mb-4">
                Patients consistently highlight gold-medal credentials, international fellowship training in laparoscopy, and a caring team that remembers their history at every follow-up visit. Reported outcomes include successful pregnancies after fibroid removal, minimally invasive surgery with fast recovery, and lasting relief from heavy bleeding and pelvic pain.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Specialities
              </h3>

              <p className="text-gray-700 mb-2">
                Dr. Priyanka Gynaec offers a comprehensive range of women&apos;s health and surgical services, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic Myomectomy — Uterus-preserving fibroid removal with fertility focus</li>
                <li>Gynaecology &amp; Laparoscopy — Expert 3D laparoscopic care for reproductive health</li>
                <li>Laparoscopic Hysterectomy — Minimally invasive uterus removal for severe fibroid cases</li>
                <li>Laparoscopic Cystectomy — Fertility-preserving ovarian cyst removal</li>
                <li>Endometriosis Surgery — Advanced excision for pain relief and fertility preservation</li>
                <li>Diagnostic Hysteroscopy &amp; Polypectomy — Precision evaluation and treatment of the uterine cavity</li>
                <li>Fertility &amp; IVF — Personalized fertility treatment plans</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized maternity care</li>
                <li>Antenatal Services — Structured prenatal screening and monitoring</li>
              </ul>
            </div>

            {/* Section 13 — Cost of Fibroid Treatment in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of Fibroid Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The cost of fibroid treatment in Moradabad depends on the number and size of fibroids, the treatment approach chosen — whether medication, myomectomy, or hysterectomy — and hospital stay duration. It remains significantly more affordable than in metro cities like Delhi or Mumbai, while offering the same standard of surgical precision. A personalized consultation with proper ultrasound evaluation is the best way to receive an accurate treatment plan and cost estimate.
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