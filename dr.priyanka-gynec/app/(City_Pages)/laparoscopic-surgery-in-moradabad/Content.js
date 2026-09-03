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

export default function LaparoscopicSurgeryMoradabad() {
  const faqs = [
    {
      q: "Is laparoscopic surgery safe?",
      a: "Yes, it is a well-established, safe procedure performed under general anesthesia with lower risk of infection and complications compared to open surgery.",
    },
    {
      q: "How long does recovery take after laparoscopic surgery?",
      a: "Most patients recover within 1–2 weeks, much faster than the 4–6 weeks typically needed after open surgery.",
    },
    {
      q: "Will laparoscopic surgery leave visible scars?",
      a: "No, incisions are less than a centimeter and heal with minimal, barely visible scarring.",
    },
    {
      q: "Can laparoscopic surgery preserve fertility?",
      a: "Yes, procedures like laparoscopic myomectomy and cystectomy are specifically designed to preserve healthy reproductive tissue and fertility.",
    },
    {
      q: "How is laparoscopic surgery for endometriosis different?",
      a: "It uses high-definition 3D visualization to precisely remove endometrial tissue, offering better pain relief and faster recovery than open surgery.",
    },
    {
      q: "Is hospital admission required for laparoscopic surgery?",
      a: "Most procedures require only a short 1–2 day hospital stay, and some, like sterilization, can be done as day-care procedures.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use for laparoscopic surgery?",
      a: "The clinic uses high-definition 3D laparoscopic systems along with advanced 3D/4D ultrasound for precise diagnosis and surgery.",
    },
    {
      q: "How can I book a consultation for laparoscopic surgery in Moradabad?",
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
                Laparoscopic Surgery in Moradabad: A Complete Guide to Safe, Minimally Invasive Care
              </h1>

              <p className="text-gray-700 mb-4">
                For years, women dealing with Gynaecological conditions like fibroids, ovarian cysts, or endometriosis had only one option — open surgery, with large incisions, longer hospital stays, and painful recovery. Today, that has changed completely. Laparoscopic surgery in Moradabad now gives women access to the same minimally invasive, keyhole surgical techniques available in major metro hospitals, without the need to travel far from home. This guide explains what laparoscopic surgery is, when it is needed, what to expect during the procedure, and how to choose the right surgeon for your care.
              </p>
            </div>

            {/* Section 2 — What Is Laparoscopic Surgery? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Laparoscopic Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery, often called &quot;keyhole surgery,&quot; is a modern surgical technique performed through a few small incisions instead of one large cut. A thin tube fitted with a high-resolution camera, called a laparoscope, is inserted through a tiny incision near the navel. This camera projects a magnified, high-definition view of the internal organs onto a screen, allowing the surgeon to operate with precision using specialized instruments inserted through additional small incisions.
              </p>

              <p className="text-gray-700">
                Because the incisions are so small, laparoscopic surgery typically results in less pain, minimal scarring, shorter hospital stays, and a much faster return to normal life compared to traditional open surgery.
              </p>
            </div>

            {/* Section 3 — Why Laparoscopic Surgery in Moradabad Is Gaining Popularity */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Laparoscopic Surgery in Moradabad Is Gaining Popularity
              </h2>

              <p className="text-gray-700 mb-4">
                Patients from Moradabad and nearby areas such as Rampur, Sambhal, Amroha, and Bijnor once had to travel to Delhi or Lucknow for advanced laparoscopic procedures. With experienced, fellowship-trained Gynaecologic surgeons now practicing locally, that is no longer necessary. Choosing laparoscopic surgery in Moradabad offers several advantages:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Advanced 3D and 4K laparoscopic technology, matching metro-city surgical standards</li>
                <li>Shorter hospital stays, often allowing same-day or next-day discharge</li>
                <li>Faster recovery, letting patients return to daily routines within days instead of weeks</li>
                <li>Reduced risk of infection and complications due to smaller incisions</li>
                <li>Fertility preservation, especially important for younger women undergoing treatment for fibroids or cysts</li>
                <li>Lower overall treatment cost compared to metro-city hospitals, without compromising quality</li>
              </ul>
            </div>

            {/* Section 4 — Common Gynaecological Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Gynaecological Conditions Treated with Laparoscopic Surgery
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Ovarian Cysts (Laparoscopic Cystectomy)</strong>
                  <br />
                  Ovarian cysts are fluid-filled sacs that can cause pain, bloating, or irregular periods. Laparoscopic cystectomy removes the cyst precisely while preserving healthy ovarian tissue, which is especially important for women planning future pregnancies.
                </li>
                <li>
                  <strong>Uterine Fibroids (Laparoscopic Myomectomy)</strong>
                  <br />
                  Fibroids are non-cancerous growths in the uterus that can cause heavy bleeding, pelvic pain, or fertility issues. Laparoscopic myomectomy removes fibroids while preserving the uterus, making it a preferred option for women who wish to conceive later.
                </li>
                <li>
                  <strong>Endometriosis</strong>
                  <br />
                  Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus, often causing severe pain and infertility. Advanced 3D laparoscopic excision surgery allows complete, precise removal of endometrial tissue with faster recovery and significant pain relief.
                </li>
                <li>
                  <strong>Uterus Removal (Laparoscopic Hysterectomy)</strong>
                  <br />
                  For conditions like severe fibroids, adenomyosis, or abnormal bleeding that do not respond to other treatments, laparoscopic hysterectomy offers a minimally invasive alternative to traditional open surgery, with a much shorter recovery period.
                </li>
                <li>
                  <strong>Prolapse Repair (Sacrocolpopexy)</strong>
                  <br />
                  Uterine or vaginal vault prolapse, common after childbirth or menopause, can be corrected through keyhole sacrocolpopexy, restoring normal anatomy with minimal scarring.
                </li>
                <li>
                  <strong>Tubal Sterilization</strong>
                  <br />
                  Laparoscopic sterilization is a safe, permanent contraception method performed as a quick day-care procedure with minimal downtime.
                </li>
                <li>
                  <strong>Diagnostic Laparoscopy</strong>
                  <br />
                  When the exact cause of pelvic pain or infertility is unclear, diagnostic laparoscopy allows the surgeon to directly visualize the reproductive organs and identify issues like adhesions, blocked tubes, or early-stage endometriosis.
                </li>
              </ol>
            </div>

            {/* Section 5 — What Happens During Laparoscopic Surgery: Step by Step */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During Laparoscopic Surgery: Step by Step
              </h2>

              <p className="text-gray-700 mb-4">
                Every procedure is tailored to the patient, but laparoscopic surgery generally follows these stages:
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pre-Surgical Evaluation</strong>
                  <br />
                  Before surgery, the doctor reviews medical history, performs a physical examination, and orders relevant tests such as ultrasound, blood work, or MRI to plan the procedure accurately.
                </li>
                <li>
                  <strong>Anesthesia</strong>
                  <br />
                  Laparoscopic surgery is performed under general anesthesia, ensuring the patient feels no pain or discomfort during the procedure.
                </li>
                <li>
                  <strong>Creating Access Points</strong>
                  <br />
                  Two to four small incisions, each less than a centimeter, are made in the abdomen. Carbon dioxide gas is used to gently inflate the abdominal cavity, creating space for the surgeon to work safely.
                </li>
                <li>
                  <strong>Visualization and Surgery</strong>
                  <br />
                  The laparoscope transmits a magnified, high-definition image to a monitor, guiding the surgeon as specialized instruments perform the required procedure — whether it&apos;s removing a cyst, fibroid, or repairing prolapse.
                </li>
                <li>
                  <strong>Closure and Recovery</strong>
                  <br />
                  Once the procedure is complete, the small incisions are closed with dissolvable stitches or adhesive strips. Most patients are moved to a recovery room and can often go home within 24 hours.
                </li>
                <li>
                  <strong>Post-Operative Care</strong>
                  <br />
                  Recovery is generally quick, with most patients resuming light activities within a few days and complete recovery within one to two weeks, depending on the procedure performed.
                </li>
              </ol>
            </div>

            {/* Section 6 — Benefits of Laparoscopic Surgery Over Open Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing Laparoscopic Surgery Over Open Surgery
              </h2>

              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-200 text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-2 text-left">
                        Factor
                      </th>
                      <th className="border border-gray-200 px-4 py-2 text-left">
                        Laparoscopic Surgery
                      </th>
                      <th className="border border-gray-200 px-4 py-2 text-left">
                        Open Surgery
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
                        One large incision
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
                        1–2 weeks
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        4–6 weeks
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
                        Pain Level
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Low
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
                        Better tissue preservation
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Higher risk of adhesions
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 7 — How to Choose the Right Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Surgeon for Laparoscopic Surgery in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Not every clinic offers the same level of surgical precision. Before choosing where to undergo laparoscopic surgery in Moradabad, consider the following:
              </p>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Surgeon&apos;s training and fellowship credentials in advanced Gynaecologic laparoscopy</li>
                <li>Technology available — 3D and 4K laparoscopic systems provide far greater precision than standard 2D systems</li>
                <li>Hospital infrastructure — ICU backup, sterilization standards, and post-operative care facilities</li>
                <li>Track record with complex cases such as severe endometriosis or large fibroids</li>
                <li>Transparent communication about the procedure, risks, recovery timeline, and cost</li>
                <li>Continuity of care from pre-surgical consultation through post-operative follow-up</li>
              </ol>
            </div>

            {/* Section 8 — Dr. Priyanka Gynaec: Advanced Laparoscopic Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Advanced Laparoscopic Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is a trusted center for laparoscopic surgery in Moradabad, known for combining international-standard surgical technology with a compassionate, patient-first approach built around the philosophy of &quot;Her Health First.&quot;
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Surgical Technology
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>High-Definition 3D Laparoscopic Surgery for precise, minimally invasive procedures</li>
                <li>Volusun E22BT2024 3D &amp; 4D ultrasound machine for accurate pre-surgical diagnosis</li>
                <li>GERI time-lapse imaging incubator supporting fertility preservation alongside surgical treatment</li>
                <li>AI-powered diagnostic tools for comprehensive reproductive health assessment</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Patients Choose This Clinic
              </h3>

              <p className="text-gray-700 mb-4">
                Patients consistently mention gold-medal credentials and international fellowship training, a care team that remembers their history at every visit, and outcomes that matter most — pain-free living after endometriosis surgery, fertility-preserving fibroid and cyst removal, and smooth, fast recoveries after keyhole procedures.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Specialities
              </h3>

              <p className="text-gray-700 mb-2">
                Dr. Priyanka Gynaec provides a complete range of women&apos;s health and surgical services, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gynaecology &amp; Laparoscopy — Expert 3D laparoscopic care for reproductive health</li>
                <li>Laparoscopic Cystectomy — Fertility-preserving ovarian cyst removal</li>
                <li>Laparoscopic Myomectomy — Uterus-preserving fibroid removal</li>
                <li>Laparoscopic Hysterectomy — Minimally invasive uterus removal with fast recovery</li>
                <li>Endometriosis Surgery — Advanced excision for pain relief and fertility preservation</li>
                <li>Sacrocolpopexy — Keyhole repair for uterine and vaginal prolapse</li>
                <li>Laparoscopic Sterilization — Safe, permanent day-care contraception procedure</li>
                <li>Diagnostic Hysteroscopy &amp; Polypectomy — Precision evaluation and treatment of the uterine cavity</li>
                <li>Fertility &amp; IVF — Personalized fertility treatment plans</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized maternity care</li>
              </ul>
            </div>

            {/* Section 9 — Recovery Tips After Laparoscopic Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery Tips After Laparoscopic Surgery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest adequately for the first 48–72 hours, but begin gentle walking as advised by your doctor to prevent blood clots</li>
                <li>Avoid heavy lifting or strenuous exercise for at least 2 weeks</li>
                <li>Keep the incision sites clean and dry to prevent infection</li>
                <li>Follow the prescribed pain management and medication schedule</li>
                <li>Attend all follow-up appointments to monitor healing</li>
                <li>Watch for warning signs such as fever, excessive bleeding, or severe pain, and contact your doctor immediately if they occur</li>
              </ul>
            </div>

            {/* Section 10 — Cost of Laparoscopic Surgery in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of Laparoscopic Surgery in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The cost of laparoscopic surgery in Moradabad depends on the specific procedure, complexity of the case, hospital stay duration, and technology used. Generally, it is significantly more affordable than in metro cities like Delhi or Mumbai, while still offering the same standard of precision and safety. A personalized consultation with detailed diagnostic reports is the best way to get an accurate cost estimate.
              </p>
            </div>

            {/* Section 11 — Contact & Clinic Address */}
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

            {/* Section 12 — FAQs */}
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