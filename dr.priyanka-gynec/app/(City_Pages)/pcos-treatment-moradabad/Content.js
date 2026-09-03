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

export default function PcosTreatmentMoradabad() {
  const faqs = [
    {
      q: "Can PCOS be cured completely?",
      a: "There is no permanent cure, but PCOS can be effectively managed with lifestyle changes, medication, and personalized treatment for long-term symptom control.",
    },
    {
      q: "Can women with PCOS get pregnant naturally?",
      a: "Yes, many women with PCOS conceive naturally after lifestyle changes and cycle regulation, while others may need ovulation induction or fertility treatment.",
    },
    {
      q: "Is weight loss necessary to treat PCOS?",
      a: "Not always required, but even a modest weight reduction often significantly improves hormonal balance and ovulation in women who are overweight.",
    },
    {
      q: "How is PCOS different from having ovarian cysts?",
      a: "PCOS involves multiple small immature follicles along with hormonal imbalance, unlike a single functional ovarian cyst that may resolve on its own.",
    },
    {
      q: "What fertility treatments help women with PCOS?",
      a: "Options range from ovulation induction medication to IUI, and IVF for cases that don't respond to simpler treatments.",
    },
    {
      q: "Does PCOS increase long-term health risks?",
      a: "Yes, untreated PCOS can raise the risk of diabetes, high blood pressure, and cholesterol issues, making early management important.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use for PCOS-related fertility treatment?",
      a: "The clinic uses advanced 3D/4D ultrasound, AI-powered semen analysis, and time-lapse embryo monitoring for comprehensive PCOS fertility care.",
    },
    {
      q: "How can I book a consultation for PCOS treatment in Moradabad?",
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
                PCOS Treatment in Moradabad: Complete Guide to Diagnosis, Care & Fertility
              </h1>

              <p className="text-gray-700 mb-4">
                Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders affecting women of reproductive age, yet it remains widely misunderstood. From irregular periods and weight gain to acne and fertility struggles, PCOS can affect nearly every aspect of a woman&apos;s health. The good news is that effective PCOS treatment in Moradabad is now available, combining personalized hormonal management with advanced fertility care for women trying to conceive. This complete guide explains what PCOS is, how it&apos;s diagnosed, treatment options, and how to find the right specialist.
              </p>
            </div>

            {/* Section 2 — What Is PCOS? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is PCOS?
              </h2>

              <p className="text-gray-700 mb-4">
                Polycystic Ovary Syndrome is a hormonal disorder in which the ovaries produce excess androgens (male hormones), disrupting normal ovulation. This hormonal imbalance often leads to irregular or absent periods, the development of multiple small, immature follicles in the ovaries (which may appear as &quot;cysts&quot; on ultrasound), and a range of related symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                PCOS affects an estimated 1 in 5 women of reproductive age, making it one of the leading causes of infertility worldwide. Importantly, PCOS is a manageable condition — with the right treatment plan, most women can control symptoms effectively and go on to have healthy pregnancies.
              </p>
            </div>

            {/* Section 3 — Common Symptoms of PCOS */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Symptoms of PCOS
              </h2>

              <p className="text-gray-700 mb-4">
                Symptoms vary from woman to woman, but the most common signs include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular, infrequent, or absent menstrual periods</li>
                <li>Difficulty conceiving, due to irregular or absent ovulation</li>
                <li>Excess facial or body hair growth (hirsutism)</li>
                <li>Acne or oily skin</li>
                <li>Weight gain, particularly around the abdomen, or difficulty losing weight</li>
                <li>Thinning hair or hair loss on the scalp</li>
                <li>Darkened patches of skin, especially around the neck or underarms</li>
                <li>Ovarian cysts visible on ultrasound</li>
              </ul>

              <p className="text-gray-700">
                Because symptoms overlap with several other conditions, a proper medical evaluation is essential for accurate diagnosis.
              </p>
            </div>

            {/* Section 4 — Why Early Diagnosis and Treatment Matter */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Early Diagnosis and Treatment Matter
              </h2>

              <p className="text-gray-700 mb-4">
                If left unmanaged, PCOS can increase the long-term risk of type 2 diabetes, high blood pressure, high cholesterol, and endometrial changes due to prolonged irregular periods. Early diagnosis allows for:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Better symptom control, including regulation of menstrual cycles</li>
                <li>Reduced long-term health risks associated with untreated hormonal imbalance</li>
                <li>Improved chances of natural conception or successful fertility treatment</li>
                <li>Better management of weight, skin, and hair-related symptoms</li>
              </ul>
            </div>

            {/* Section 5 — How Is PCOS Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is PCOS Diagnosed?
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Detailed Medical History</strong>
                  <br />
                  Your doctor will review your menstrual cycle patterns, weight changes, skin and hair symptoms, and family history of PCOS or diabetes.
                </li>
                <li>
                  <strong>Physical Examination</strong>
                  <br />
                  A physical exam may check for signs such as excess hair growth, acne, or skin changes associated with hormonal imbalance.
                </li>
                <li>
                  <strong>Blood Tests</strong>
                  <br />
                  Hormone level testing helps assess androgen levels, insulin resistance, thyroid function, and other markers relevant to PCOS diagnosis.
                </li>
                <li>
                  <strong>Ultrasound Imaging</strong>
                  <br />
                  A transvaginal ultrasound, particularly using advanced 3D/4D imaging, helps visualize the ovaries and detect the presence of multiple small follicles characteristic of PCOS.
                </li>
              </ol>

              <p className="text-gray-700">
                Diagnosis is typically confirmed when a woman has at least two of three criteria: irregular ovulation, elevated androgen levels, and polycystic ovaries on ultrasound.
              </p>
            </div>

            {/* Section 6 — Treatment Options for PCOS */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for PCOS
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment is highly individualized based on symptoms, whether the patient is trying to conceive, and overall health goals.
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Lifestyle Modifications</strong>
                  <br />
                  For many women, weight management through balanced nutrition and regular physical activity significantly improves hormonal balance, restores regular ovulation, and reduces insulin resistance — even a modest weight reduction can make a meaningful difference.
                </li>
                <li>
                  <strong>Medications for Cycle Regulation</strong>
                  <br />
                  Hormonal treatments, including combined oral contraceptives, can help regulate menstrual cycles and reduce symptoms like acne and excess hair growth for women not currently trying to conceive.
                </li>
                <li>
                  <strong>Insulin-Sensitizing Medication</strong>
                  <br />
                  For women with insulin resistance, medications that improve insulin sensitivity can help regulate cycles and support ovulation.
                </li>
                <li>
                  <strong>Ovulation Induction</strong>
                  <br />
                  For women trying to conceive, medications that stimulate ovulation are often the first line of fertility treatment, closely monitored through ultrasound and hormone tracking.
                </li>
                <li>
                  <strong>Advanced Fertility Treatment</strong>
                  <br />
                  When ovulation induction alone is not successful, treatments such as IUI (Intrauterine Insemination) or IVF (In Vitro Fertilization) — supported by advanced technology like time-lapse embryo monitoring — offer excellent success rates for women with PCOS-related infertility.
                </li>
                <li>
                  <strong>Management of Related Symptoms</strong>
                  <br />
                  Dermatological and cosmetic treatments may be recommended alongside hormonal therapy to manage acne, excess hair growth, or hair thinning.
                </li>
              </ol>
            </div>

            {/* Section 7 — PCOS and Fertility: What You Need to Know */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                PCOS and Fertility: What You Need to Know
              </h2>

              <p className="text-gray-700 mb-4">
                PCOS is one of the most treatable causes of infertility. The core issue is usually irregular or absent ovulation, meaning eggs are not being released regularly for fertilization. With the right treatment approach — starting from lifestyle changes and ovulation induction, and progressing to IUI or IVF if needed — over 85% of women with PCOS-related infertility are able to achieve pregnancy.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                A Step-by-Step Approach to PCOS Fertility Treatment
              </h3>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Initial evaluation — Hormone testing, ultrasound, and partner&apos;s semen analysis to build a complete fertility picture</li>
                <li>Lifestyle optimization — Weight and diet management to naturally improve ovulation</li>
                <li>Ovulation induction — Medication to stimulate regular egg release, monitored through ultrasound</li>
                <li>IUI, if needed — A simple procedure placing prepared sperm directly into the uterus around the time of ovulation</li>
                <li>IVF, if required — For cases where ovulation induction and IUI do not succeed, IVF with advanced embryo monitoring offers a highly effective path to pregnancy</li>
              </ol>
            </div>

            {/* Section 8 — Long-Term Health Management with PCOS */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Long-Term Health Management with PCOS
              </h2>

              <p className="text-gray-700 mb-4">
                PCOS care doesn&apos;t end with pregnancy planning. Long-term management is important for overall health and includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular monitoring of blood sugar and cholesterol levels</li>
                <li>Ongoing weight and lifestyle management</li>
                <li>Periodic Gynaecological check-ups to monitor menstrual health</li>
                <li>Mental health support, since hormonal imbalance can also affect mood and emotional wellbeing</li>
              </ul>
            </div>

            {/* Section 9 — How to Choose the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Specialist for PCOS Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Since PCOS management often requires a combination of hormonal treatment, lifestyle guidance, and fertility support, choosing the right specialist matters. Consider the following:
              </p>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Experience in both Gynaecology and fertility medicine, since PCOS spans both areas</li>
                <li>Access to advanced diagnostic tools, including hormone testing and 3D/4D ultrasound</li>
                <li>A personalized, step-by-step treatment approach rather than a one-size-fits-all protocol</li>
                <li>Integrated fertility support, including IUI and IVF, available at the same center if needed</li>
                <li>Compassionate communication, since PCOS often affects self-esteem and emotional wellbeing alongside physical symptoms</li>
                <li>Continuity of care from diagnosis through long-term management and fertility planning</li>
              </ol>
            </div>

            {/* Section 10 — Dr. Priyanka Gynaec: Trusted PCOS Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Trusted PCOS Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is a leading center for PCOS treatment in Moradabad, offering personalized hormonal management combined with advanced fertility support, all rooted in the philosophy of &quot;Her Health First.&quot;
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology Used
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Volusun E22BT2024 3D &amp; 4D ultrasound machine for precise ovarian and follicular assessment</li>
                <li>AI-powered semen analysis and DNA integrity testing for complete fertility evaluation of both partners</li>
                <li>GERI time-lapse imaging incubator for advanced embryo monitoring during IVF treatment</li>
                <li>Comprehensive hormone testing to guide personalized treatment planning</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Patients Trust This Clinic
              </h3>

              <p className="text-gray-700 mb-4">
                Patients consistently highlight clear, step-by-step guidance through lifestyle changes, ovulation induction, and personalized fertility plans that have helped over 85% of women with PCOS achieve pregnancy. The care team is known for listening first and remembering each patient&apos;s history at every follow-up visit.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Specialities
              </h3>

              <p className="text-gray-700 mb-2">
                Dr. Priyanka Gynaec offers a comprehensive range of women&apos;s health and fertility services, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Fertility &amp; IVF — Personalized fertility treatment plans for PCOS-related infertility</li>
                <li>Gynaecology &amp; Laparoscopy — Expert 3D laparoscopic care for reproductive health</li>
                <li>Endometriosis Surgery — Advanced excision for related pelvic pain conditions</li>
                <li>Laparoscopic Cystectomy — Fertility-preserving ovarian cyst removal when needed</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized maternity care</li>
                <li>Antenatal Services — Structured prenatal screening and monitoring</li>
                <li>Normal Delivery — Gentle, expert-guided natural delivery support</li>
                <li>Diagnostic Hysteroscopy &amp; Polypectomy — Precision evaluation of the uterine cavity</li>
                <li>Paediatric Care — Newborn care, vaccinations, and pediatric consultations</li>
              </ul>
            </div>

            {/* Section 11 — Cost of PCOS Treatment in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of PCOS Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The cost of PCOS treatment in Moradabad depends on the treatment approach required — whether it involves lifestyle guidance, medication for cycle regulation, ovulation induction, or advanced fertility treatments like IUI or IVF. It remains significantly more affordable than in metro cities like Delhi or Mumbai, while offering the same standard of personalized, technology-supported care. A personalized consultation with hormone testing and ultrasound evaluation is the best way to receive an accurate treatment plan and cost estimate.
              </p>
            </div>

            {/* Section 12 — Contact & Clinic Address */}
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

            {/* Section 13 — FAQs */}
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