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

export default function LaparoscopicMyomectomyMoradabad() {
  const faqs = [
    {
      q: "Is laparoscopic myomectomy safe?",
      a: "Yes, it is a well-established, safe procedure with lower blood loss, minimal scarring, and fewer complications than open surgery.",
    },
    {
      q: "Can I still get pregnant after a laparoscopic myomectomy?",
      a: "Yes, this procedure is specifically designed to preserve the uterus and improve fertility outcomes for women planning future pregnancy.",
    },
    {
      q: "How long is the hospital stay for laparoscopic myomectomy?",
      a: "Most patients stay just 1–2 days, compared to 5–7 days needed after traditional open myomectomy.",
    },
    {
      q: "How long does full recovery take?",
      a: "Most women recover fully within 3–4 weeks, much faster than the 6–8 weeks typical after open surgery.",
    },
    {
      q: "How soon can I try to conceive after surgery?",
      a: "Doctors generally advise waiting a few months to allow the uterus to heal fully before attempting pregnancy.",
    },
    {
      q: "Do fibroids grow back after myomectomy?",
      a: "New fibroids can occasionally develop over time, but the treated fibroids are completely removed during surgery.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use for fibroid surgery?",
      a: "The clinic uses high-definition 3D laparoscopic systems along with advanced 3D/4D ultrasound for precise fibroid mapping and surgery.",
    },
    {
      q: "How can I book a consultation for laparoscopic myomectomy in Moradabad?",
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
                Laparoscopic Myomectomy in Moradabad: Complete Guide to Fibroid Treatment
              </h1>

              <p className="text-gray-700 mb-4">
                Uterine fibroids are one of the most common Gynaecological conditions affecting women during their reproductive years, often causing heavy bleeding, pelvic pain, and fertility challenges. For women who wish to preserve their uterus and future fertility while still getting rid of troublesome fibroids, laparoscopic myomectomy in Moradabad offers a safe, minimally invasive solution. This guide covers everything you need to know — from understanding fibroids to what happens during surgery and how to choose the right specialist.
              </p>
            </div>

            {/* Section 2 — What Are Uterine Fibroids? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Are Uterine Fibroids?
              </h2>

              <p className="text-gray-700 mb-4">
                Uterine fibroids, also known as myomas, are non-cancerous growths that develop within or on the walls of the uterus. They can vary greatly in size, from as small as a pea to as large as a melon, and a woman may have a single fibroid or multiple fibroids at once. While many fibroids cause no symptoms and are discovered incidentally, others can lead to significant discomfort and health complications, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Heavy or prolonged menstrual bleeding</li>
                <li>Severe pelvic pain or pressure</li>
                <li>Frequent urination due to pressure on the bladder</li>
                <li>Lower back pain</li>
                <li>Pain during intercourse</li>
                <li>Difficulty conceiving or recurrent miscarriage, depending on fibroid location</li>
              </ul>
            </div>

            {/* Section 3 — Laparoscopic Myomectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Myomectomy
              </h2>

              <p className="text-gray-700 mb-4">
                A myomectomy is a surgical procedure to remove uterine fibroids while leaving the uterus intact — unlike a hysterectomy, which removes the entire uterus. Laparoscopic myomectomy performs this procedure through a few small incisions using a laparoscope, a thin instrument fitted with a high-definition camera, instead of one large abdominal cut.
              </p>

              <p className="text-gray-700">
                This minimally invasive approach allows the surgeon to precisely locate, isolate, and remove fibroids while carefully preserving the healthy uterine tissue and structure — making it the preferred option for women who wish to conceive in the future.
              </p>
            </div>

            {/* Section 4 — Why Choose Laparoscopic Myomectomy Over Open Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Laparoscopic Myomectomy Over Open Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Traditional open myomectomy requires a large abdominal incision, longer hospital stays, and weeks of recovery. Laparoscopic myomectomy in Moradabad offers significant advantages:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Smaller incisions, each less than a centimeter, resulting in minimal scarring</li>
                <li>Reduced blood loss during surgery due to precise, magnified visualization</li>
                <li>Shorter hospital stay, typically 1–2 days compared to 5–7 days for open surgery</li>
                <li>Faster recovery, with most women returning to light activity within 1–2 weeks</li>
                <li>Lower risk of infection and post-surgical adhesions, which is important for future fertility</li>
                <li>Better cosmetic outcome with barely visible scars</li>
              </ul>
            </div>

            {/* Section 5 — Who Needs Laparoscopic Myomectomy? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Needs Laparoscopic Myomectomy?
              </h2>

              <p className="text-gray-700 mb-4">
                Not every fibroid requires surgical removal. Your Gynaecologist may recommend laparoscopic myomectomy if you experience:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Heavy menstrual bleeding that affects daily life and is not controlled with medication</li>
                <li>Fibroids causing significant pelvic pain or pressure</li>
                <li>Fibroids that are impacting fertility or are suspected to be causing recurrent pregnancy loss</li>
                <li>Rapidly growing fibroids</li>
                <li>A strong preference to preserve the uterus for future childbearing</li>
              </ul>

              <p className="text-gray-700">
                A thorough evaluation with ultrasound imaging helps determine the size, number, and location of fibroids, which guides the decision on whether laparoscopic myomectomy is the right approach.
              </p>
            </div>

            {/* Section 6 — Types of Fibroids and Surgical Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Types of Fibroids and Surgical Approach
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Subserosal Fibroids</strong>
                  <br />
                  These grow on the outer wall of the uterus and are often well-suited for laparoscopic removal.
                </li>
                <li>
                  <strong>Intramural Fibroids</strong>
                  <br />
                  Located within the muscular wall of the uterus, these are among the most common fibroids treated with laparoscopic myomectomy.
                </li>
                <li>
                  <strong>Submucosal Fibroids</strong>
                  <br />
                  These grow just beneath the uterine lining and, depending on size and location, may be removed hysteroscopically rather than laparoscopically — your doctor will determine the best surgical route based on imaging findings.
                </li>
              </ol>
            </div>

            {/* Section 7 — Step-by-Step: What to Expect During Laparoscopic Myomectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: What to Expect During Laparoscopic Myomectomy
              </h2>

              <p className="text-gray-700 mb-4">
                Every procedure is tailored to the patient, but laparoscopic myomectomy generally follows these stages:
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pre-Surgical Evaluation</strong>
                  <br />
                  Your doctor will review your medical history, perform a pelvic examination, and use ultrasound or MRI imaging to precisely map the size, number, and location of your fibroids.
                </li>
                <li>
                  <strong>Anesthesia</strong>
                  <br />
                  The procedure is performed under general anesthesia, ensuring you remain completely comfortable and pain-free throughout surgery.
                </li>
                <li>
                  <strong>Creating Access Points</strong>
                  <br />
                  A few small incisions, typically under a centimeter each, are made in the abdomen. Carbon dioxide gas gently expands the abdominal cavity to create working space for the surgeon.
                </li>
                <li>
                  <strong>Fibroid Removal</strong>
                  <br />
                  Using the laparoscope for a magnified, high-definition view, the surgeon carefully separates each fibroid from the surrounding healthy uterine tissue and removes it, often using a technique called morcellation to extract larger fibroids through the small incisions.
                </li>
                <li>
                  <strong>Uterine Repair</strong>
                  <br />
                  The uterine wall is carefully repaired and sutured in layers to ensure proper healing and strength, which is especially important for women planning future pregnancy.
                </li>
                <li>
                  <strong>Closure and Recovery</strong>
                  <br />
                  The small abdominal incisions are closed with dissolvable stitches, and most patients are able to go home within 1–2 days.
                </li>
              </ol>
            </div>

            {/* Section 8 — Recovery After Laparoscopic Myomectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Laparoscopic Myomectomy
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Hospital stay: 1–2 days</li>
                <li>Return to light activities: Within 1–2 weeks</li>
                <li>Full recovery: Typically within 3–4 weeks</li>
                <li>Time before attempting pregnancy: Your doctor will usually advise waiting a few months to allow the uterus to heal completely before conceiving</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Post-Operative Care Tips
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest adequately during the first week, with gentle walking as advised to support healthy circulation</li>
                <li>Avoid heavy lifting and strenuous exercise for at least 4–6 weeks</li>
                <li>Keep the incision sites clean and dry to prevent infection</li>
                <li>Take prescribed medications as directed for pain management</li>
                <li>Attend all scheduled follow-up visits to monitor healing</li>
                <li>Watch for warning signs such as fever, heavy bleeding, or severe pain, and contact your doctor immediately if they occur</li>
              </ul>
            </div>

            {/* Section 9 — Laparoscopic Myomectomy vs Open Myomectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Myomectomy vs Open Myomectomy
              </h2>

              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-200 text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-2 text-left">
                        Factor
                      </th>
                      <th className="border border-gray-200 px-4 py-2 text-left">
                        Laparoscopic Myomectomy
                      </th>
                      <th className="border border-gray-200 px-4 py-2 text-left">
                        Open Myomectomy
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
                        Fertility Preservation
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Excellent, with reduced adhesion risk
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Good, but higher adhesion risk
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 10 — Laparoscopic Myomectomy and Future Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Myomectomy and Future Fertility
              </h2>

              <p className="text-gray-700 mb-4">
                One of the biggest reasons women choose laparoscopic myomectomy over hysterectomy is fertility preservation. By carefully removing fibroids while protecting healthy uterine tissue, this procedure allows many women to go on to conceive and carry a healthy pregnancy. The precision of laparoscopic technique also reduces the risk of post-surgical scar tissue (adhesions) that could otherwise interfere with future fertility.
              </p>
            </div>

            {/* Section 11 — How to Choose the Right Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Surgeon for Laparoscopic Myomectomy in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Since fibroid location and surgical technique directly affect both recovery and future fertility outcomes, choosing an experienced surgeon is essential. Consider the following:
              </p>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Fellowship training and specialization in advanced Gynaecologic laparoscopy</li>
                <li>Experience with complex or multiple fibroid cases</li>
                <li>Availability of 3D/4K laparoscopic imaging for greater surgical precision</li>
                <li>Track record of successful fertility outcomes after fibroid removal</li>
                <li>Clear communication about surgical risks, recovery timeline, and future pregnancy planning</li>
                <li>Continuity of care from diagnosis through post-operative recovery and beyond</li>
              </ol>
            </div>

            {/* Section 12 — Dr. Priyanka Gynaec: Trusted Laparoscopic Myomectomy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Trusted Laparoscopic Myomectomy Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is a leading center for laparoscopic myomectomy in Moradabad, offering advanced surgical precision combined with a compassionate, fertility-focused approach rooted in the philosophy of &quot;Her Health First.&quot;
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
                Patients consistently highlight gold-medal credentials, international fellowship training in laparoscopy, and a caring team that remembers their history at every follow-up visit. Reported outcomes include successful pregnancies after fibroid removal, minimally invasive surgery with fast recovery, and significant relief from long-standing symptoms like heavy bleeding and pelvic pain.
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
                <li>Laparoscopic Hysterectomy — Minimally invasive uterus removal with fast recovery</li>
                <li>Laparoscopic Cystectomy — Fertility-preserving ovarian cyst removal</li>
                <li>Endometriosis Surgery — Advanced excision for pain relief and fertility preservation</li>
                <li>Sacrocolpopexy — Keyhole repair for uterine and vaginal prolapse</li>
                <li>Diagnostic Hysteroscopy &amp; Polypectomy — Precision evaluation and treatment of the uterine cavity</li>
                <li>Fertility &amp; IVF — Personalized fertility treatment plans</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized maternity care</li>
                <li>Antenatal Services — Structured prenatal screening and monitoring</li>
              </ul>
            </div>

            {/* Section 13 — Cost of Laparoscopic Myomectomy in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of Laparoscopic Myomectomy in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The cost of laparoscopic myomectomy in Moradabad depends on the number and size of fibroids, complexity of the case, and hospital stay duration. It remains significantly more affordable than in metro cities like Delhi or Mumbai, while offering the same standard of surgical precision and fertility-focused care. A personalized consultation with proper ultrasound evaluation is the best way to receive an accurate cost estimate.
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