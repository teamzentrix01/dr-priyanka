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

export default function LaparoscopicHysterectomyMoradabad() {
  const faqs = [
    {
      q: "Is laparoscopic hysterectomy safe?",
      a: "Yes, it is a well-established, safe procedure with lower risk of infection, less blood loss, and fewer complications than open surgery.",
    },
    {
      q: "How long is the hospital stay for laparoscopic hysterectomy?",
      a: "Most patients stay just 1–2 days, compared to 5–7 days needed after traditional open hysterectomy.",
    },
    {
      q: "How long does full recovery take?",
      a: "Most women recover fully within 3–4 weeks, much faster than the 6–8 weeks typical after open surgery.",
    },
    {
      q: "Will I go into menopause after a hysterectomy?",
      a: "If the ovaries are preserved during surgery, natural hormone production continues and menopause occurs at its natural time.",
    },
    {
      q: "Does laparoscopic hysterectomy leave visible scars?",
      a: "No, incisions are less than a centimeter and heal with minimal, barely noticeable scarring.",
    },
    {
      q: "Can the cervix be preserved during laparoscopic hysterectomy?",
      a: "Yes, in select cases a supracervical hysterectomy can be performed to preserve the cervix, based on the patient's condition and preference.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use for hysterectomy surgery?",
      a: "The clinic uses high-definition 3D laparoscopic systems along with advanced 3D/4D ultrasound for precise pre-surgical diagnosis and planning.",
    },
    {
      q: "How can I book a consultation for laparoscopic hysterectomy in Moradabad?",
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
                Laparoscopic Hysterectomy in Moradabad: A Complete Patient Guide
              </h1>

              <p className="text-gray-700 mb-4">
                For women dealing with severe fibroids, abnormal bleeding, adenomyosis, or other conditions that no longer respond to medical treatment, hysterectomy is often recommended as a definitive solution. But the idea of uterus removal surgery can feel intimidating, especially when picturing large incisions and weeks of recovery. Thankfully, that old picture no longer applies. Laparoscopic hysterectomy in Moradabad now offers women a minimally invasive, keyhole surgical option with less pain, minimal scarring, and a dramatically faster return to normal life. This guide explains everything you need to know before considering the procedure.
              </p>
            </div>

            {/* Section 2 — What Is a Laparoscopic Hysterectomy? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a Laparoscopic Hysterectomy?
              </h2>

              <p className="text-gray-700 mb-4">
                A laparoscopic hysterectomy is a minimally invasive surgical procedure to remove the uterus using small incisions instead of one large abdominal cut. A thin instrument called a laparoscope, fitted with a high-definition camera, is inserted through a tiny incision near the navel, giving the surgeon a magnified, clear view of the pelvic organs on a monitor. Specialized surgical instruments are then inserted through a few additional small incisions to carefully detach and remove the uterus.
              </p>

              <p className="text-gray-700">
                Compared to traditional open (abdominal) hysterectomy, the laparoscopic approach significantly reduces blood loss, post-operative pain, hospital stay, and recovery time — while achieving the same surgical outcome.
              </p>
            </div>

            {/* Section 3 — Why More Women Are Choosing Laparoscopic Hysterectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why More Women Are Choosing Laparoscopic Hysterectomy in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                In the past, women needing hysterectomy in Moradabad often had to travel to Delhi or Lucknow to access advanced laparoscopic techniques. That has changed, with fellowship-trained Gynaecologic surgeons now offering the same standard of minimally invasive care locally. Key reasons patients are choosing laparoscopic hysterectomy in Moradabad include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Advanced 3D and 4K laparoscopic systems, matching metro-city surgical precision</li>
                <li>Shorter hospital stay, typically just 1–2 days compared to 5–7 days for open surgery</li>
                <li>Faster recovery, with most women returning to light routine activities within 2 weeks</li>
                <li>Minimal scarring, since incisions are less than a centimeter each</li>
                <li>Lower risk of infection and complications due to reduced tissue trauma</li>
                <li>More affordable treatment compared to metro cities, without compromising surgical quality</li>
              </ul>
            </div>

            {/* Section 4 — When Is a Hysterectomy Recommended? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Is a Hysterectomy Recommended?
              </h2>

              <p className="text-gray-700 mb-4">
                A hysterectomy is generally recommended when other treatment options have not resolved the condition, or when the condition is severe. Common reasons include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Large or multiple uterine fibroids causing heavy bleeding or pain</li>
                <li>Adenomyosis, where the uterine lining grows into the muscular wall of the uterus</li>
                <li>Chronic pelvic pain unresponsive to other treatments</li>
                <li>Abnormal or heavy uterine bleeding not controlled by medication</li>
                <li>Uterine or cervical precancerous conditions, in some cases</li>
                <li>Severe endometriosis affecting the uterus</li>
                <li>Uterine prolapse, where the uterus descends into the vaginal canal</li>
              </ul>

              <p className="text-gray-700">
                Your Gynaecologist will only recommend hysterectomy after ruling out or exhausting less invasive treatment options, since it is a permanent, irreversible procedure.
              </p>
            </div>

            {/* Section 5 — Types of Laparoscopic Hysterectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Types of Laparoscopic Hysterectomy
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Total Laparoscopic Hysterectomy (TLH)</strong>
                  <br />
                  The entire uterus and cervix are removed laparoscopically, with the vaginal cuff closed from inside using minimally invasive techniques.
                </li>
                <li>
                  <strong>Laparoscopic-Assisted Vaginal Hysterectomy (LAVH)</strong>
                  <br />
                  The uterus is partially detached laparoscopically and then removed through the vaginal route, combining the benefits of both approaches.
                </li>
                <li>
                  <strong>Laparoscopic Supracervical Hysterectomy (LSH)</strong>
                  <br />
                  Only the upper part of the uterus is removed, while the cervix is preserved. This may be considered in select cases based on the patient&apos;s condition and preference.
                </li>
              </ol>

              <p className="text-gray-700">
                Your surgeon will recommend the most suitable type based on your diagnosis, anatomy, and overall health.
              </p>
            </div>

            {/* Section 6 — What to Expect: Step-by-Step Procedure */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect: Step-by-Step Procedure
              </h2>

              <p className="text-gray-700 mb-4">
                Every procedure is tailored to the patient, but laparoscopic hysterectomy generally follows these stages:
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pre-Surgical Evaluation</strong>
                  <br />
                  Before the procedure, your doctor will review your complete medical history, conduct a physical examination, and order tests such as ultrasound, blood work, and sometimes an MRI to plan the surgery precisely.
                </li>
                <li>
                  <strong>Anesthesia</strong>
                  <br />
                  The procedure is performed under general anesthesia, so you remain completely pain-free and unaware during surgery.
                </li>
                <li>
                  <strong>Small Incisions and Visualization</strong>
                  <br />
                  Three to four tiny incisions are made in the abdomen. Carbon dioxide gas gently expands the abdominal cavity, giving the surgeon clear working space, while the laparoscope transmits a magnified, high-definition image to guide the procedure.
                </li>
                <li>
                  <strong>Removal of the Uterus</strong>
                  <br />
                  The surgeon carefully detaches the uterus (and cervix, if a total hysterectomy is performed) from its surrounding structures and removes it, most often through the vaginal canal, avoiding the need for a large abdominal incision.
                </li>
                <li>
                  <strong>Closure</strong>
                  <br />
                  The small abdominal incisions are closed with dissolvable stitches or adhesive strips, leaving minimal visible scarring.
                </li>
                <li>
                  <strong>Hospital Stay and Discharge</strong>
                  <br />
                  Most patients stay in the hospital for just 1–2 days after surgery before being discharged home with clear post-operative instructions.
                </li>
              </ol>
            </div>

            {/* Section 7 — Recovery After Laparoscopic Hysterectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Laparoscopic Hysterectomy
              </h2>

              <p className="text-gray-700 mb-4">
                One of the biggest advantages of the laparoscopic approach is the significantly faster recovery:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Hospital stay: 1–2 days, compared to 5–7 days for open surgery</li>
                <li>Return to light activities: Within 1–2 weeks</li>
                <li>Full recovery: Typically within 3–4 weeks, compared to 6–8 weeks after open surgery</li>
                <li>Pain levels: Considerably lower, with reduced need for strong pain medication</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Post-Operative Care Tips
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest adequately in the first week, but take short, gentle walks as advised to support circulation</li>
                <li>Avoid heavy lifting or strenuous activity for at least 4 weeks</li>
                <li>Keep incision sites clean and dry to prevent infection</li>
                <li>Attend all scheduled follow-up visits</li>
                <li>Watch for warning signs such as fever, heavy bleeding, or severe pain, and contact your doctor immediately if they occur</li>
              </ul>
            </div>

            {/* Section 8 — Laparoscopic vs Open Hysterectomy: Quick Comparison */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic vs Open Hysterectomy: Quick Comparison
              </h2>

              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-200 text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-2 text-left">
                        Factor
                      </th>
                      <th className="border border-gray-200 px-4 py-2 text-left">
                        Laparoscopic Hysterectomy
                      </th>
                      <th className="border border-gray-200 px-4 py-2 text-left">
                        Open Hysterectomy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Incision Size
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        A few small cuts (under 1 cm)
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        One large abdominal incision
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Hospital Stay
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        1–2 days
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        5–7 days
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Recovery Time
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        3–4 weeks
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        6–8 weeks
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Scarring
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Minimal
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Significant
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Blood Loss
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Lower
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Higher
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Post-Op Pain
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Lower
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Higher
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 9 — Life After Hysterectomy: What to Know */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Life After Hysterectomy: What to Know
              </h2>

              <p className="text-gray-700 mb-4">
                A hysterectomy means the end of menstrual periods and the ability to carry a pregnancy. If the ovaries are preserved, hormonal balance and menopause timing generally remain natural. Most women report significant relief from the symptoms — such as heavy bleeding or chronic pain — that led to the surgery, along with a marked improvement in overall quality of life once recovery is complete.
              </p>
            </div>

            {/* Section 10 — How to Choose the Right Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Surgeon for Laparoscopic Hysterectomy in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Since hysterectomy is a major, permanent procedure, choosing the right surgeon matters greatly. Consider the following before making your decision:
              </p>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Fellowship training and specialization in advanced Gynaecologic laparoscopy</li>
                <li>Experience with complex cases, including large fibroids or extensive adhesions</li>
                <li>Availability of 3D/4K laparoscopic technology for greater surgical precision</li>
                <li>Hospital infrastructure, including ICU backup and strict sterilization protocols</li>
                <li>Clear, honest communication about the necessity of the procedure, risks, and alternatives</li>
                <li>Continuity of care from consultation through post-operative recovery</li>
              </ol>
            </div>

            {/* Section 11 — Dr. Priyanka Gynaec: Trusted Laparoscopic Hysterectomy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Trusted Laparoscopic Hysterectomy Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is a recognized center for laparoscopic hysterectomy in Moradabad, offering advanced surgical technology combined with a compassionate, patient-first approach rooted in the philosophy of &quot;Her Health First.&quot;
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology Used
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>High-Definition 3D Laparoscopic Surgery for precise, minimally invasive hysterectomy procedures</li>
                <li>Volusun E22BT2024 3D &amp; 4D ultrasound machine for accurate pre-surgical diagnosis and planning</li>
                <li>AI-assisted diagnostic tools for comprehensive reproductive health evaluation</li>
                <li>Integrated post-operative monitoring ensuring continuity of care through full recovery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Patients Trust This Clinic
              </h3>

              <p className="text-gray-700 mb-4">
                Patients consistently highlight gold-medal credentials, international fellowship training in laparoscopy, and a caring team that remembers their history at every follow-up visit. Outcomes shared by patients include fast, comfortable recovery, minimal scarring, and complete relief from long-standing symptoms.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Specialities
              </h3>

              <p className="text-gray-700 mb-2">
                Dr. Priyanka Gynaec offers a comprehensive range of women&apos;s health and surgical services, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic Hysterectomy — Advanced, minimally invasive uterus removal with fast recovery</li>
                <li>Gynaecology &amp; Laparoscopy — Expert 3D laparoscopic care for reproductive health</li>
                <li>Laparoscopic Myomectomy — Uterus-preserving fibroid removal</li>
                <li>Laparoscopic Cystectomy — Fertility-preserving ovarian cyst removal</li>
                <li>Endometriosis Surgery — Advanced excision for pain relief and fertility preservation</li>
                <li>Sacrocolpopexy — Keyhole repair for uterine and vaginal prolapse</li>
                <li>Diagnostic Hysteroscopy &amp; Polypectomy — Precision evaluation and treatment of the uterine cavity</li>
                <li>Fertility &amp; IVF — Personalized fertility treatment plans</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized maternity care</li>
                <li>Antenatal Services — Structured prenatal screening and monitoring</li>
              </ul>
            </div>

            {/* Section 12 — Cost of Laparoscopic Hysterectomy in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of Laparoscopic Hysterectomy in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The cost of laparoscopic hysterectomy in Moradabad depends on factors such as the complexity of the case, hospital stay duration, and any additional procedures required. It remains significantly more affordable compared to metro cities like Delhi or Mumbai, while offering the same standard of surgical precision and safety. A personalized consultation with proper diagnostic evaluation is the best way to receive an accurate cost estimate for your specific case.
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