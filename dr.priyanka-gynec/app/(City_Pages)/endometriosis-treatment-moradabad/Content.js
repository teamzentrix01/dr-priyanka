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

export default function EndometriosisTreatmentMoradabad() {
  const faqs = [
    {
      q: "What is the most effective treatment for endometriosis?",
      a: "Advanced 3D laparoscopic excision surgery is considered the gold-standard treatment, offering complete removal of endometrial tissue and lasting pain relief.",
    },
    {
      q: "Can endometriosis be cured completely?",
      a: "There is no permanent cure, but excision surgery combined with proper follow-up care provides significant, long-lasting relief for most women.",
    },
    {
      q: "Does endometriosis always cause infertility?",
      a: "Not always, but it is a leading cause of infertility; many women still conceive naturally or with fertility treatment after proper care.",
    },
    {
      q: "How is endometriosis diagnosed for certain?",
      a: "Diagnostic laparoscopy is the definitive method, allowing direct visualization and, often, treatment during the same procedure.",
    },
    {
      q: "How long does recovery take after endometriosis surgery?",
      a: "Most women recover within 3–4 weeks, with significant pain relief noticeable within the first few weeks after surgery.",
    },
    {
      q: "Can I get pregnant after endometriosis surgery?",
      a: "Yes, many women experience improved fertility after excision surgery, and IVF support is available if needed.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use for endometriosis treatment?",
      a: "The clinic uses high-definition 3D laparoscopic excision technology along with advanced 3D/4D ultrasound for precise diagnosis and surgery.",
    },
    {
      q: "How can I book a consultation for endometriosis treatment in Moradabad?",
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
                Endometriosis Treatment in Moradabad: Complete Guide to Diagnosis, Care & Relief
              </h1>

              <p className="text-gray-700 mb-4">
                Endometriosis is one of the most under-diagnosed yet deeply painful Gynaecological conditions affecting women, often dismissed for years as &quot;normal period pain&quot; before a correct diagnosis is made. If you have been struggling with severe menstrual cramps, chronic pelvic pain, or difficulty conceiving, you are not alone — and effective endometriosis treatment in Moradabad is now available with the same advanced technology once found only in major cities. This guide explains what endometriosis is, how it&apos;s diagnosed, available treatment options, and how to find the right specialist.
              </p>
            </div>

            {/* Section 2 — What Is Endometriosis? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Endometriosis?
              </h2>

              <p className="text-gray-700 mb-4">
                Endometriosis is a condition in which tissue similar to the lining of the uterus (the endometrium) grows outside the uterus — most commonly on the ovaries, fallopian tubes, and the tissue lining the pelvis. Like the normal uterine lining, this displaced tissue thickens, breaks down, and bleeds with each menstrual cycle. However, unlike the uterine lining, it has no way to exit the body, leading to inflammation, scar tissue formation (adhesions), and often severe pain.
              </p>

              <p className="text-gray-700">
                Endometriosis affects an estimated 1 in 10 women of reproductive age worldwide, yet it takes an average of several years for many women to receive an accurate diagnosis, largely because its symptoms are often mistaken for regular menstrual discomfort.
              </p>
            </div>

            {/* Section 3 — Common Symptoms of Endometriosis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Symptoms of Endometriosis
              </h2>

              <p className="text-gray-700 mb-4">
                Symptoms vary widely from woman to woman, but the most common signs include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe menstrual cramps that worsen over time and are not relieved by regular pain medication</li>
                <li>Chronic pelvic pain, sometimes present even outside of menstruation</li>
                <li>Pain during or after intercourse</li>
                <li>Pain during bowel movements or urination, especially during periods</li>
                <li>Heavy menstrual bleeding or bleeding between periods</li>
                <li>Fatigue, bloating, nausea, particularly around menstruation</li>
                <li>Difficulty conceiving, as endometriosis is a leading cause of infertility</li>
              </ul>

              <p className="text-gray-700">
                If you experience persistent pelvic pain that disrupts your daily life, it&apos;s important to consult a Gynaecologist rather than dismissing it as normal period pain.
              </p>
            </div>

            {/* Section 4 — Why Early Diagnosis Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Early Diagnosis Matters
              </h2>

              <p className="text-gray-700 mb-4">
                Endometriosis is a progressive condition, meaning it can worsen over time if left untreated, potentially leading to more extensive scar tissue, organ involvement, and greater fertility challenges. Early diagnosis and treatment can help:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Manage pain more effectively before it becomes severe</li>
                <li>Preserve fertility by addressing the condition before extensive damage occurs</li>
                <li>Prevent complications such as ovarian cysts (endometriomas) or bowel and bladder involvement</li>
                <li>Improve overall quality of life significantly</li>
              </ul>
            </div>

            {/* Section 5 — How Is Endometriosis Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is Endometriosis Diagnosed?
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Detailed Medical History and Symptom Review</strong>
                  <br />
                  Your doctor will ask about your menstrual history, pain patterns, and any fertility concerns to identify signs pointing toward endometriosis.
                </li>
                <li>
                  <strong>Pelvic Examination</strong>
                  <br />
                  A physical examination may help detect abnormalities such as cysts or tender areas in the pelvis.
                </li>
                <li>
                  <strong>Ultrasound Imaging</strong>
                  <br />
                  A transvaginal ultrasound, especially using advanced 3D/4D imaging, can help identify endometriomas (endometriosis-related ovarian cysts) and other abnormalities.
                </li>
                <li>
                  <strong>Diagnostic Laparoscopy</strong>
                  <br />
                  The definitive way to diagnose endometriosis is through diagnostic laparoscopy, a minimally invasive procedure that allows the surgeon to directly visualize and, in many cases, treat the endometrial tissue during the same procedure.
                </li>
              </ol>
            </div>

            {/* Section 6 — Treatment Options for Endometriosis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Endometriosis
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment depends on the severity of symptoms, extent of the disease, and whether the patient wishes to conceive. Options include:
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pain Management</strong>
                  <br />
                  Medications, including anti-inflammatory drugs, may help manage mild symptoms, though they do not treat the underlying condition.
                </li>
                <li>
                  <strong>Hormonal Therapy</strong>
                  <br />
                  Hormonal treatments can help suppress the growth of endometrial tissue and reduce pain, particularly for women not currently trying to conceive.
                </li>
                <li>
                  <strong>Laparoscopic Excision Surgery</strong>
                  <br />
                  For moderate to severe endometriosis, advanced 3D laparoscopic excision surgery is considered the gold-standard treatment. This minimally invasive procedure allows the surgeon to precisely identify and completely remove endometrial tissue and adhesions, offering significant pain relief and improved fertility outcomes.
                </li>
                <li>
                  <strong>Fertility Treatment</strong>
                  <br />
                  For women whose fertility has been affected by endometriosis, treatment may be combined with fertility support such as IUI or IVF, especially in cases involving extensive scarring or blocked fallopian tubes.
                </li>
              </ol>
            </div>

            {/* Section 7 — Why Laparoscopic Excision Is the Preferred Surgical Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Laparoscopic Excision Is the Preferred Surgical Approach
              </h2>

              <p className="text-gray-700 mb-4">
                Compared to older surgical techniques, advanced 3D laparoscopic excision offers major advantages for endometriosis treatment:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Complete removal of endometrial tissue rather than surface-level ablation, reducing the chance of recurrence</li>
                <li>High-definition 3D visualization, allowing precise identification of even deeply infiltrating endometriosis</li>
                <li>Minimal incisions, resulting in less pain and faster recovery</li>
                <li>Better fertility preservation, since healthy surrounding tissue is carefully protected</li>
                <li>Shorter hospital stay, typically 1–2 days</li>
                <li>Significant, lasting pain relief for most patients</li>
              </ul>
            </div>

            {/* Section 8 — Step-by-Step: What to Expect During Laparoscopic Excision Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: What to Expect During Laparoscopic Excision Surgery
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pre-Surgical Evaluation</strong>
                  <br />
                  Detailed imaging and medical history review help the surgical team plan the procedure and anticipate the extent of disease.
                </li>
                <li>
                  <strong>Anesthesia</strong>
                  <br />
                  The procedure is performed under general anesthesia for complete comfort.
                </li>
                <li>
                  <strong>Diagnostic Visualization</strong>
                  <br />
                  A laparoscope is inserted through a small incision, providing a magnified, high-definition view of the pelvic organs to identify all areas of endometrial tissue and adhesions.
                </li>
                <li>
                  <strong>Excision of Endometrial Tissue</strong>
                  <br />
                  Using precise surgical instruments, the surgeon carefully excises the endometrial implants, cysts (endometriomas), and any scar tissue while preserving healthy reproductive organs.
                </li>
                <li>
                  <strong>Closure and Recovery</strong>
                  <br />
                  The small incisions are closed with dissolvable stitches, and most patients are discharged within 1–2 days.
                </li>
              </ol>
            </div>

            {/* Section 9 — Recovery After Endometriosis Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Endometriosis Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Hospital stay: 1–2 days</li>
                <li>Return to light activities: Within 1–2 weeks</li>
                <li>Full recovery: Typically within 3–4 weeks</li>
                <li>Pain relief: Most patients experience significant improvement in pain symptoms within weeks of surgery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Post-Operative Care Tips
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest adequately in the first week, with gentle walking as advised to support circulation</li>
                <li>Avoid heavy lifting and strenuous exercise for at least 3–4 weeks</li>
                <li>Keep incision sites clean and dry to prevent infection</li>
                <li>Take prescribed medications as directed</li>
                <li>Attend all follow-up visits to monitor healing and long-term symptom control</li>
                <li>Discuss fertility planning with your doctor if you wish to conceive after recovery</li>
              </ul>
            </div>

            {/* Section 10 — Endometriosis and Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Endometriosis and Fertility
              </h2>

              <p className="text-gray-700 mb-4">
                Endometriosis is one of the leading causes of infertility, affecting up to half of women struggling to conceive. It can impact fertility through inflammation, scar tissue formation, distorted pelvic anatomy, and reduced egg quality. However, many women successfully conceive after treatment — either naturally following excision surgery or with the support of fertility treatments like IUI or IVF, particularly when advanced reproductive technology is available at the same center providing surgical care.
              </p>
            </div>

            {/* Section 11 — How to Choose the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Specialist for Endometriosis Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Endometriosis can be complex to diagnose and treat, making the right specialist essential. Consider the following:
              </p>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Fellowship training and specialization in advanced Gynaecologic laparoscopy and endometriosis care</li>
                <li>Experience with complex, deeply infiltrating endometriosis cases</li>
                <li>Availability of 3D/4K laparoscopic imaging for complete, precise excision</li>
                <li>Integrated fertility support, especially important for women planning pregnancy</li>
                <li>Compassionate, patient-centered communication, since endometriosis often involves a long diagnostic journey</li>
                <li>Continuity of care from diagnosis through surgery, recovery, and fertility planning</li>
              </ol>
            </div>

            {/* Section 12 — Dr. Priyanka Gynaec: Trusted Endometriosis Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Trusted Endometriosis Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is recognized as a leading center for endometriosis treatment in Moradabad, combining advanced surgical technology with a compassionate, patient-first approach built around the philosophy of &quot;Her Health First.&quot;
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology Used
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>High-Definition 3D Laparoscopic Excision Surgery for complete, precise removal of endometrial tissue</li>
                <li>Volusun E22BT2024 3D &amp; 4D ultrasound machine for accurate diagnosis of endometriomas and pelvic abnormalities</li>
                <li>GERI time-lapse imaging incubator supporting fertility treatment for patients pursuing IVF after surgery</li>
                <li>AI-powered diagnostic tools for comprehensive reproductive health evaluation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Patients Trust This Clinic
              </h3>

              <p className="text-gray-700 mb-4">
                Patients consistently highlight gold-medal credentials, international fellowship training, and recognition as leaders in endometriosis care across India. Reported outcomes include pain-free living after years of suffering, successful pregnancies following treatment, and a care team that listens and remembers each patient&apos;s journey.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Specialities
              </h3>

              <p className="text-gray-700 mb-2">
                Dr. Priyanka Gynaec offers a comprehensive range of women&apos;s health and surgical services, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Endometriosis Surgery — Advanced 3D laparoscopic excision for pain relief and fertility preservation</li>
                <li>Gynaecology &amp; Laparoscopy — Expert 3D laparoscopic care for reproductive health</li>
                <li>Fertility &amp; IVF — Personalized fertility treatment plans, including for endometriosis-related infertility</li>
                <li>Laparoscopic Cystectomy — Fertility-preserving removal of endometriomas and other ovarian cysts</li>
                <li>Laparoscopic Myomectomy — Uterus-preserving fibroid removal</li>
                <li>Laparoscopic Hysterectomy — Minimally invasive uterus removal for severe cases</li>
                <li>Diagnostic Hysteroscopy &amp; Polypectomy — Precision evaluation and treatment of the uterine cavity</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized maternity care</li>
                <li>Antenatal Services — Structured prenatal screening and monitoring</li>
              </ul>
            </div>

            {/* Section 13 — Cost of Endometriosis Treatment in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of Endometriosis Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The cost of endometriosis treatment in Moradabad depends on the severity of the condition, whether surgery is required, and any additional fertility treatment needed. It remains significantly more affordable than in metro cities like Delhi or Mumbai, while offering the same standard of surgical precision. A personalized consultation with proper diagnostic evaluation is the best way to receive an accurate treatment plan and cost estimate.
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