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

export default function OvarianCystTreatmentMoradabad() {
  const faqs = [
    {
      q: "Do all ovarian cysts need treatment?",
      a: "No, most functional cysts resolve on their own within a few menstrual cycles and only require monitoring.",
    },
    {
      q: "When should an ovarian cyst be surgically removed?",
      a: "Surgery is generally recommended for large, persistent, or complex cysts, or those causing significant pain.",
    },
    {
      q: "Will removing an ovarian cyst affect my fertility?",
      a: "Generally no — laparoscopic cystectomy is designed to preserve healthy ovarian tissue, keeping fertility impact minimal.",
    },
    {
      q: "What is a chocolate cyst?",
      a: "A chocolate cyst, or endometrioma, is an ovarian cyst caused by endometriosis, filled with old, dark blood, and typically needs medical evaluation.",
    },
    {
      q: "Can an ovarian cyst be a medical emergency?",
      a: "Yes, if a cyst ruptures or causes ovarian torsion, it can cause sudden severe pain requiring immediate surgical attention.",
    },
    {
      q: "How is an ovarian cyst diagnosed?",
      a: "It is primarily diagnosed through a transvaginal ultrasound, sometimes supported by blood tests or MRI for complex cases.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use for ovarian cyst evaluation?",
      a: "The clinic uses advanced 3D/4D ultrasound imaging along with high-definition 3D laparoscopic surgery for precise diagnosis and treatment.",
    },
    {
      q: "How can I book a consultation for ovarian cyst treatment in Moradabad?",
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
                Ovarian Cyst Treatment in Moradabad: Complete Guide to Diagnosis, Care & Recovery
              </h1>

              <p className="text-gray-700 mb-4">
                An ovarian cyst diagnosis can feel worrying, especially when the word &quot;cyst&quot; comes with uncertainty about what it means for your health and fertility. The truth is, most ovarian cysts are harmless and resolve on their own — but some do need medical attention. Understanding your options for ovarian cyst treatment in Moradabad can help you make informed decisions with confidence. This complete guide covers what ovarian cysts are, how they&apos;re diagnosed, when treatment is needed, and how to find the right specialist near you.
              </p>
            </div>

            {/* Section 2 — What Is an Ovarian Cyst? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is an Ovarian Cyst?
              </h2>

              <p className="text-gray-700 mb-4">
                An ovarian cyst is a fluid-filled sac that forms on or inside an ovary. Cysts are extremely common — most women develop at least one ovarian cyst at some point during their reproductive years, often without ever knowing it, since many cysts cause no symptoms and disappear naturally within a few menstrual cycles.
              </p>
            </div>

            {/* Section 3 — Types of Ovarian Cysts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Types of Ovarian Cysts
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Functional Cysts</strong>
                  <br />
                  The most common type, functional cysts form as a normal part of the menstrual cycle. These include follicular cysts (when a follicle doesn&apos;t release an egg) and corpus luteum cysts (when the follicle sac doesn&apos;t dissolve after releasing an egg). Most resolve on their own within one to three menstrual cycles.
                </li>
                <li>
                  <strong>Endometriomas</strong>
                  <br />
                  Also known as &quot;chocolate cysts,&quot; these develop when endometriosis tissue grows on the ovary, filling with old, dark blood. These typically require medical evaluation and often surgical treatment.
                </li>
                <li>
                  <strong>Dermoid Cysts</strong>
                  <br />
                  Present from birth, these cysts can contain tissue such as hair, skin, or fat. They rarely resolve on their own and are usually monitored or surgically removed depending on size.
                </li>
                <li>
                  <strong>Cystadenomas</strong>
                  <br />
                  These develop from ovarian surface tissue and can grow quite large, sometimes requiring surgical removal.
                </li>
                <li>
                  <strong>Polycystic Ovaries</strong>
                  <br />
                  Associated with Polycystic Ovary Syndrome (PCOS), this involves multiple small, immature follicles along with hormonal imbalance, rather than a single large cyst.
                </li>
              </ol>
            </div>

            {/* Section 4 — Common Symptoms of Ovarian Cysts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Symptoms of Ovarian Cysts
              </h2>

              <p className="text-gray-700 mb-4">
                Many small cysts cause no symptoms at all and are found incidentally during a routine ultrasound. However, larger or complicated cysts may cause:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dull or sharp pelvic pain, often on one side</li>
                <li>A feeling of pressure, bloating, or fullness in the lower abdomen</li>
                <li>Pain during intercourse</li>
                <li>Irregular menstrual cycles</li>
                <li>Frequent urination due to pressure on the bladder</li>
                <li>Sudden, severe pain — which may signal a ruptured cyst or ovarian torsion (twisting), requiring emergency care</li>
              </ul>

              <p className="text-gray-700">
                Important: Sudden, severe pelvic pain accompanied by fever, vomiting, or dizziness needs immediate medical attention, as it may indicate a medical emergency.
              </p>
            </div>

            {/* Section 5 — How Are Ovarian Cysts Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Are Ovarian Cysts Diagnosed?
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pelvic Examination</strong>
                  <br />
                  A physical exam can sometimes detect swelling or tenderness suggestive of a cyst.
                </li>
                <li>
                  <strong>Ultrasound Imaging</strong>
                  <br />
                  A transvaginal ultrasound, especially with advanced 3D/4D imaging, is the primary tool for identifying a cyst&apos;s size, structure, and characteristics.
                </li>
                <li>
                  <strong>Blood Tests</strong>
                  <br />
                  In certain cases, blood tests such as CA-125 may be used to assess the nature of a cyst, particularly in postmenopausal women or when imaging findings are unclear.
                </li>
                <li>
                  <strong>MRI, When Needed</strong>
                  <br />
                  For complex or unclear cysts, MRI imaging can provide additional detail to guide the treatment plan.
                </li>
              </ol>
            </div>

            {/* Section 6 — Treatment Options for Ovarian Cysts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Ovarian Cysts
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment depends on the cyst&apos;s size, type, symptoms, and the patient&apos;s age and fertility goals.
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Watchful Waiting</strong>
                  <br />
                  Most functional cysts require no treatment and simply need to be monitored with a follow-up ultrasound after a few menstrual cycles to confirm they have resolved on their own.
                </li>
                <li>
                  <strong>Hormonal Treatment</strong>
                  <br />
                  Birth control pills may be prescribed to help prevent the formation of new functional cysts, although they do not shrink existing ones.
                </li>
                <li>
                  <strong>Pain Management</strong>
                  <br />
                  For cysts causing mild discomfort, pain relief medication may be recommended while the cyst is monitored.
                </li>
                <li>
                  <strong>Laparoscopic Cystectomy</strong>
                  <br />
                  When a cyst is large, persistent, or symptomatic, minimally invasive laparoscopic cystectomy allows precise removal of the cyst while carefully preserving healthy ovarian tissue — the preferred surgical approach for most cases requiring treatment.
                </li>
                <li>
                  <strong>Emergency Surgery</strong>
                  <br />
                  In cases of cyst rupture or ovarian torsion, immediate surgery may be required to relieve pain and, when possible, save the affected ovary.
                </li>
              </ol>
            </div>

            {/* Section 7 — When Is Surgery Recommended? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Is Surgery Recommended for an Ovarian Cyst?
              </h2>

              <p className="text-gray-700 mb-4">
                Your Gynaecologist may recommend surgical removal if:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The cyst is larger than 5–6 cm and unlikely to resolve on its own</li>
                <li>The cyst persists across multiple menstrual cycles</li>
                <li>Imaging suggests a complex structure, such as a dermoid cyst or endometrioma</li>
                <li>The cyst is causing significant, ongoing pain</li>
                <li>There are signs suggestive of torsion or rupture risk</li>
                <li>Ultrasound findings raise any concern requiring further surgical evaluation</li>
              </ul>
            </div>

            {/* Section 8 — What to Expect During Laparoscopic Cyst Removal */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Laparoscopic Cyst Removal
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pre-Surgical Evaluation</strong>
                  <br />
                  Ultrasound imaging helps assess the cyst&apos;s size, location, and characteristics before planning surgery.
                </li>
                <li>
                  <strong>Anesthesia</strong>
                  <br />
                  The procedure is performed under general anesthesia for complete comfort.
                </li>
                <li>
                  <strong>Minimally Invasive Access</strong>
                  <br />
                  A few small incisions, each under a centimeter, allow the laparoscope and surgical instruments to access the ovary with minimal trauma to surrounding tissue.
                </li>
                <li>
                  <strong>Cyst Removal</strong>
                  <br />
                  The surgeon carefully separates the cyst wall from healthy ovarian tissue and removes it, aiming to preserve as much normal ovarian function as possible.
                </li>
                <li>
                  <strong>Recovery</strong>
                  <br />
                  Most patients go home the same day or within 24 hours, with full recovery typically within one to two weeks.
                </li>
              </ol>
            </div>

            {/* Section 9 — Ovarian Cysts and Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ovarian Cysts and Fertility
              </h2>

              <p className="text-gray-700 mb-4">
                Most ovarian cysts do not affect fertility, and functional cysts in particular usually resolve without any lasting impact. However, certain cysts — particularly endometriomas — can affect ovarian reserve and function if left untreated or if surgery isn&apos;t performed carefully. Choosing a minimally invasive, fertility-focused surgical approach when treatment is needed helps protect long-term reproductive health, which is especially important for women planning pregnancy or considering IVF in the future.
              </p>
            </div>

            {/* Section 10 — How to Choose the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Specialist for Ovarian Cyst Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Since cyst type and treatment approach directly affect recovery and future fertility, choosing an experienced specialist is essential. Consider the following:
              </p>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Experience with the full range of cyst types, from simple functional cysts to complex endometriomas and dermoid cysts</li>
                <li>Access to advanced 3D/4D ultrasound for accurate characterization of the cyst before deciding on treatment</li>
                <li>A conservative, evidence-based approach — not every cyst needs surgery, and a good specialist will explain when watchful waiting is appropriate</li>
                <li>Skilled, fertility-focused surgical technique when surgery is required</li>
                <li>Availability for urgent care, since cyst complications can occasionally require prompt attention</li>
                <li>Clear communication and continuity of care from diagnosis through follow-up</li>
              </ol>
            </div>

            {/* Section 11 — Dr. Priyanka Gynaec: Trusted Ovarian Cyst Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Trusted Ovarian Cyst Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is a leading center for ovarian cyst treatment in Moradabad, offering a complete, personalized approach — from careful monitoring to advanced minimally invasive surgery — rooted in the philosophy of &quot;Her Health First.&quot;
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology Used
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Volusun E22BT2024 3D &amp; 4D ultrasound machine for precise, detailed cyst evaluation</li>
                <li>High-Definition 3D Laparoscopic Surgery for fertility-preserving cyst removal when needed</li>
                <li>AI-assisted diagnostic tools for comprehensive reproductive health assessment</li>
                <li>GERI time-lapse imaging incubator supporting fertility treatment for patients considering IVF</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Patients Trust This Clinic
              </h3>

              <p className="text-gray-700 mb-4">
                Patients consistently highlight gold-medal credentials, international fellowship training, and a caring team that remembers their history at every follow-up visit. Reported outcomes include accurate, personalized guidance on whether surgery is truly needed, minimally invasive treatment with fast recovery, and preserved fertility after cyst removal.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Specialities
              </h3>

              <p className="text-gray-700 mb-2">
                Dr. Priyanka Gynaec offers a comprehensive range of women&apos;s health and surgical services, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic Cystectomy — Fertility-preserving ovarian cyst removal</li>
                <li>Gynaecology &amp; Laparoscopy — Expert 3D laparoscopic care for reproductive health</li>
                <li>Endometriosis Surgery — Advanced excision for endometrioma-related cysts and pelvic pain</li>
                <li>Laparoscopic Myomectomy — Uterus-preserving fibroid removal</li>
                <li>Laparoscopic Hysterectomy — Minimally invasive uterus removal when needed</li>
                <li>Diagnostic Hysteroscopy &amp; Polypectomy — Precision evaluation and treatment of the uterine cavity</li>
                <li>Fertility &amp; IVF — Personalized fertility treatment plans</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized maternity care</li>
                <li>Antenatal Services — Structured prenatal screening and monitoring</li>
              </ul>
            </div>

            {/* Section 12 — Cost of Ovarian Cyst Treatment in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of Ovarian Cyst Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The cost of ovarian cyst treatment in Moradabad depends on the treatment approach — whether it involves simple monitoring, medication, or laparoscopic surgery — along with the size and complexity of the cyst. It remains significantly more affordable than in metro cities like Delhi or Mumbai, while offering the same standard of precise diagnostic and surgical care. A personalized consultation with ultrasound evaluation is the best way to receive an accurate treatment plan and cost estimate.
              </p>
            </div>

            {/* Section 13 — Contact & Clinic Address */}
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

            {/* Section 14 — FAQs */}
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