
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function HysterectomyDoctorKatgharMoradabad() {
  const faqs = [
    {
      q: "Who is a hysterectomy doctor near Katghar, Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers laparoscopic hysterectomy and other gynaecological surgery for patients from Katghar and across Moradabad.",
    },
    {
      q: "When is a hysterectomy necessary?",
      a: "It is advised when conditions such as fibroids, heavy bleeding, endometriosis, adenomyosis, prolapse or certain cancers cannot be managed effectively in other ways.",
    },
    {
      q: "Are there alternatives to hysterectomy?",
      a: "Often yes. Depending on the condition, options include medicines, hormonal treatment, myomectomy, hysteroscopic procedures and other uterus-preserving surgeries.",
    },
    {
      q: "What is the advantage of laparoscopic hysterectomy?",
      a: "When suitable, it typically offers smaller scars, less pain, less blood loss and quicker recovery than open surgery.",
    },
    {
      q: "How long is the hospital stay?",
      a: "It varies with the surgical route and your recovery. Many keyhole hysterectomies need a shorter stay than open surgery.",
    },
    {
      q: "How long does recovery take?",
      a: "Many women resume light daily activities within a couple of weeks after keyhole surgery, but full recovery takes longer. Your doctor will give individual guidance.",
    },
    {
      q: "Will I go into menopause after hysterectomy?",
      a: "If the ovaries are removed, menopause begins immediately. If the ovaries are preserved, they usually keep working, though menopause may come a little earlier for some women.",
    },
    {
      q: "Can I get pregnant after a hysterectomy?",
      a: "No. Once the uterus is removed, pregnancy is not possible, which is why fertility wishes must be discussed before surgery.",
    },
    {
      q: "Will a hysterectomy affect my sex life?",
      a: "Most women return to normal intimacy after healing, which is usually several weeks. Discuss any concerns openly with your doctor.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on www.gynaecologistmoradabad.com.",
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
                Hysterectomy Doctor in Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>

              <p className="text-gray-700 mb-4">
                A recommendation for hysterectomy is a major decision. Many women worry about pain, recovery, hormones, intimacy and what life will look like afterwards. Others have lived with heavy bleeding or pelvic pain for years and want clear answers about whether surgery is truly needed.
              </p>

              <p className="text-gray-700 mb-4">
                If you live in Katghar or nearby areas of Moradabad, Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers advanced minimally invasive hysterectomy using 3D laparoscopy, along with honest guidance about alternatives. The clinic follows the philosophy &quot;Her Health First.&quot; You are listened to, informed and never pushed into a decision.
              </p>
            </div>

            {/* Section 2 — What Is Hysterectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a Hysterectomy?
              </h2>

              <p className="text-gray-700 mb-4">
                A hysterectomy is a surgical procedure to remove the uterus (womb). After it, periods stop and pregnancy is no longer possible. Depending on the condition, the surgeon may also remove the cervix, fallopian tubes or ovaries.
              </p>

              <p className="text-gray-700 mb-4">
                Types include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>
                  <strong>Total hysterectomy:</strong> Removal of the uterus and cervix
                </li>
                <li>
                  <strong>Subtotal (supracervical) hysterectomy:</strong> Removal of the uterus while leaving the cervix
                </li>
                <li>
                  <strong>Hysterectomy with salpingo-oophorectomy:</strong> Removal of the uterus along with one or both tubes and ovaries when medically needed
                </li>
              </ul>

              <p className="text-gray-700">
                Your doctor will explain which type applies to you and why.
              </p>
            </div>

            {/* Section 3 — Why Hysterectomy Is Recommended */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Is a Hysterectomy Recommended?
              </h2>

              <p className="text-gray-700 mb-4">
                Hysterectomy is usually advised when other treatments have not worked or are not suitable. Common reasons include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Uterine fibroids causing heavy bleeding, pain or pressure</li>
                <li>Heavy or abnormal uterine bleeding not controlled by medicines</li>
                <li>Endometriosis or adenomyosis with severe, persistent pain</li>
                <li>Uterine or vaginal vault prolapse</li>
                <li>Chronic pelvic pain with a uterine cause</li>
                <li>Precancerous changes or cancers of the uterus, cervix or ovaries</li>
                <li>Complications after childbirth, in rare emergencies</li>
              </ul>

              <p className="text-gray-700 mt-4">
                For many of these conditions, other options exist, such as medication, hormonal treatment, myomectomy, hysteroscopic procedures or uterus-preserving surgery. A good doctor will discuss these first when appropriate.
              </p>
            </div>

            {/* Section 4 — Do You Really Need Hysterectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Do You Really Need a Hysterectomy?
              </h2>

              <p className="text-gray-700 mb-4">
                It is reasonable to ask this question and to seek a second opinion. Before recommending a hysterectomy, your doctor should:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Explain the exact diagnosis and how it was confirmed</li>
                <li>Describe non-surgical and uterus-preserving options</li>
                <li>Discuss benefits, risks and expected outcomes</li>
                <li>Consider your age, health, family plans and personal wishes</li>
                <li>Give you time to decide, unless it is an emergency</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If you still wish to have children, uterus-preserving treatments such as laparoscopic myomectomy or hysteroscopic polypectomy may be more suitable.
              </p>
            </div>

            {/* Section 5 — Laparoscopic Hysterectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic (Keyhole) Hysterectomy at Dr. Priyanka Gynaec
              </h2>

              <p className="text-gray-700 mb-4">
                The clinic offers advanced minimally invasive keyhole hysterectomy using high-definition 3D laparoscopy. Instead of one large abdominal incision, a few small cuts are made. A camera and fine instruments allow the surgeon to see the pelvis in magnified detail.
              </p>

              <p className="text-gray-700 mb-4">
                Benefits, when suitable for your case, include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Smaller scars</li>
                <li>Less pain after surgery</li>
                <li>Reduced blood loss</li>
                <li>Lower risk of wound infection</li>
                <li>Shorter hospital stay</li>
                <li>Faster recovery and return to daily activities</li>
                <li>Clear visualisation of the pelvis, which supports precise surgery</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Not every patient is suited to laparoscopy. Factors such as the size of the uterus, previous surgeries and overall health influence the decision, and your surgeon will recommend the safest route.
              </p>
            </div>

            {/* Section 6 — Other Routes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Other Routes of Hysterectomy
              </h2>

              <p className="text-gray-700 mb-4">
                Besides laparoscopic surgery, hysterectomy may be performed:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>
                  <strong>Vaginal hysterectomy:</strong> Through the vagina with no abdominal cuts, suitable in selected cases such as some prolapse patients
                </li>
                <li>
                  <strong>Abdominal (open) hysterectomy:</strong> Through a larger abdominal incision, usually when the uterus is very large or the condition is complex
                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                The best approach is the one that is safest and most effective for you, not simply the newest technique.
              </p>
            </div>

            {/* Section 7 — Preparing for Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Hysterectomy
              </h2>

              <p className="text-gray-700 mb-4">
                Preparation helps surgery and recovery go smoothly.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>
                  <strong>Pre-operative assessment:</strong> Examination, ultrasound and blood tests, plus any other investigations needed
                </li>
                <li>
                  <strong>Medical review:</strong> Management of blood pressure, diabetes, thyroid or anaemia before surgery
                </li>
                <li>
                  <strong>Medication check:</strong> Tell your doctor about all medicines, supplements and allergies, as some may need adjusting
                </li>
                <li>
                  <strong>Anaesthesia consultation:</strong> Discussion of the type of anaesthesia and fasting instructions
                </li>
                <li>
                  <strong>Practical planning:</strong> Arrange help at home for the first couple of weeks, and pack comfortable clothing and essentials for your stay
                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                Ask every question you have beforehand. No concern is too small.
              </p>
            </div>

            {/* Section 8 — Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Recovery
              </h2>

              <p className="text-gray-700 mb-4">
                Recovery depends on the surgical route, your general health and the extent of surgery. Typical guidance includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>
                  <strong>Early days:</strong> Rest, pain relief and gentle walking as advised
                </li>
                <li>
                  <strong>Vaginal spotting or discharge:</strong> Common for a few weeks
                </li>
                <li>
                  <strong>Diet:</strong> Light, balanced meals with fibre and plenty of fluids to avoid constipation
                </li>
                <li>
                  <strong>Activity:</strong> Avoid heavy lifting and strenuous exercise until your doctor approves
                </li>
                <li>
                  <strong>Intimacy:</strong> Usually delayed for several weeks, until your doctor confirms healing
                </li>
                <li>
                  <strong>Follow-up:</strong> Wound check, review of reports and guidance on returning to routine
                </li>
              </ul>

              <p className="text-gray-700 mb-4">
                Contact your doctor promptly if you have fever, heavy bleeding, severe or worsening pain, redness or discharge from wounds, difficulty passing urine, vomiting, or calf pain and swelling.
              </p>
            </div>

            {/* Section 9 — Hormones and Menopause */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Hormones and Menopause After Hysterectomy
              </h2>

              <p className="text-gray-700">
                If only the uterus is removed and the ovaries are left in place, the ovaries usually continue to produce hormones, though menopause may come slightly earlier for some women. If both ovaries are removed, menopause symptoms such as hot flushes, night sweats and mood changes can start soon after surgery. Your doctor will discuss whether the ovaries should be removed in your case and what support is available if menopausal symptoms appear.
              </p>
            </div>

            {/* Section 10 — Emotional and Sexual Wellbeing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional and Sexual Wellbeing
              </h2>

              <p className="text-gray-700">
                It is natural to feel a mix of relief, sadness or uncertainty after a hysterectomy. Some women feel relieved to be free of pain and heavy bleeding. Others grieve the loss of fertility, even if they had completed their family. Many women return to a satisfying intimate life once they have healed. Talk openly with your doctor about any concerns, as support and guidance are available.
              </p>
            </div>

            {/* Section 11 — Other Gynaecological Procedures */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Other Gynaecological Procedures Available
              </h2>

              <p className="text-gray-700 mb-4">
                If hysterectomy turns out not to be the right choice, the clinic also offers:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic myomectomy for fibroids, preserving the uterus</li>
                <li>Laparoscopic cystectomy for ovarian cysts</li>
                <li>Endometriosis surgery for pelvic pain relief</li>
                <li>Diagnostic hysteroscopy and hysteroscopic polypectomy</li>
                <li>Sacrocolpopexy for uterine and vaginal vault prolapse</li>
                <li>Laparoscopic sterilization for permanent contraception</li>
              </ul>
            </div>

            {/* Section 12 — Why Women Trust */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Honest advice, with surgery recommended only when truly needed</li>
                <li>Focus on uterus-preserving options wherever appropriate</li>
                <li>3D laparoscopic expertise for precise, minimally invasive surgery</li>
                <li>Continuity of care from consultation to follow-up</li>
                <li>Gynaecology, fertility, pregnancy and paediatric care in one place</li>
              </ul>
            </div>

            {/* Section 13 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Clinic Address and Appointments
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
                      <p className="font-semibold">
                        Dr. Priyanka Gynaec Clinic
                      </p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  {/* Phone and WhatsApp */}
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black flex-wrap">
                        <a
                          href="tel:+919079765578"
                          className="hover:underline"
                        >
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a
                          href="https://wa.me/918979670705"
                          className="hover:underline"
                        >
                          +91 89796 70705 (WhatsApp)
                        </a>
                      </div>

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynaec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynaec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
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

            {/* Section 14 — FAQs */}
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

                    <p className="text-gray-700">
                      {faq.a}
                    </p>
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
