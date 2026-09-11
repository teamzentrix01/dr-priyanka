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
  Globe,
  MessageCircle,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function MenstrualProblemsGynaecologistMoradabad() {
  const faqs = [
    {
      q: "What are common menstrual problems women face?",
      a: "Common issues include heavy bleeding, irregular cycles, absent periods, painful periods, spotting between cycles, and severe PMS symptoms.",
    },
    {
      q: "What causes irregular periods?",
      a: "Irregular periods are often caused by PCOS, thyroid disorders, stress, sudden weight changes, or approaching perimenopause.",
    },
    {
      q: "When should I see a gynaecologist for period problems?",
      a: "See a gynaecologist if your cycle is shorter than 21 or longer than 35 days, periods stop for 3+ months, or symptoms disrupt daily life.",
    },
    {
      q: "Can PCOS cause menstrual problems?",
      a: "Yes, PCOS is one of the leading causes of irregular or absent periods due to disrupted ovulation and hormonal imbalance.",
    },
    {
      q: "Is painful periods (dysmenorrhea) always normal?",
      a: "Mild cramping is common, but severe pain disrupting daily activities may signal conditions like endometriosis or fibroids and should be evaluated.",
    },
    {
      q: "How are menstrual disorders diagnosed?",
      a: "Diagnosis typically involves a pelvic exam, ultrasound, hormonal blood tests, and sometimes hysteroscopy to examine the uterine cavity.",
    },
    {
      q: "Can menstrual problems be treated without surgery?",
      a: "Yes, many cases are managed with hormonal therapy, lifestyle changes, or a hormonal IUD, without needing surgical treatment.",
    },
    {
      q: "What is hysteroscopic polypectomy?",
      a: "It's a no-incision procedure to remove uterine polyps through the vagina and cervix, often used to treat irregular or heavy bleeding.",
    },
    {
      q: "Are laparoscopic treatments for menstrual problems safe?",
      a: "Yes, laparoscopic and hysteroscopic procedures are generally safe, offering less pain, minimal scarring, and faster recovery than open surgery.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering diagnosis and treatment for menstrual disorders, laparoscopic surgery, and fertility care.",
    },
    {
      q: "Can menstrual problems affect fertility?",
      a: "Yes, conditions like PCOS, fibroids, and endometriosis that cause menstrual irregularities can also affect fertility, making early diagnosis important.",
    },
    {
      q: "How can I book a consultation for menstrual problems in Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic's official website to schedule a consultation with Dr. Priyanka Pachauri.",
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
                Menstrual Problems Gynaecologist in Moradabad: Causes, Symptoms & Treatment Options Explained
              </h1>

              <p className="text-gray-700 mb-4">
                A normal menstrual cycle is often taken as a sign of good reproductive health, which is exactly why any disruption — periods that come too often, too rarely, too heavily, too painfully, or not at all — deserves proper medical attention rather than being brushed aside. Menstrual problems are among the most common reasons women across all age groups consult a gynaecologist, yet many women continue to silently manage disruptive symptoms for years before seeking help.
              </p>

              <p className="text-gray-700">
                If you are in Moradabad and searching for a trusted menstrual problems gynaecologist, this guide covers the different types of menstrual disorders, their underlying causes, when to seek treatment, the available treatment options, and how to choose the right specialist for lasting relief.
              </p>
            </div>

            {/* Section 2 — What Counts as a "Menstrual Problem"? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Counts as a &quot;Menstrual Problem&quot;?
              </h2>

              <p className="text-gray-700 mb-4">
                Menstrual problems is a broad term covering any deviation from a woman's normal, healthy cycle. A typical cycle lasts between 21 and 35 days, with bleeding lasting 3 to 7 days. When your cycle consistently falls outside this range, or is accompanied by severe symptoms, it is generally classified as a menstrual disorder. The main categories include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Heavy menstrual bleeding (Menorrhagia):</strong> Prolonged or excessive bleeding during periods</li>
                <li><strong>Irregular periods (Oligomenorrhea):</strong> Infrequent or unpredictable cycles</li>
                <li><strong>Absent periods (Amenorrhea):</strong> No periods for three or more consecutive months</li>
                <li><strong>Painful periods (Dysmenorrhea):</strong> Cramping severe enough to interfere with daily activities</li>
                <li><strong>Intermenstrual bleeding:</strong> Spotting or bleeding between periods</li>
                <li><strong>Premenstrual Syndrome (PMS) and PMDD:</strong> Physical and emotional symptoms before periods that disrupt daily functioning</li>
              </ul>
            </div>

            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Menstrual Disorders
              </h2>

              <p className="text-gray-700 mb-4">
                Menstrual irregularities can stem from a wide variety of causes, ranging from hormonal fluctuations to structural conditions within the reproductive organs:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Polycystic Ovary Syndrome (PCOS)
                  </h3>
                  <p className="text-gray-700">
                    One of the most common causes of irregular or absent periods, PCOS is a hormonal disorder that affects ovulation, often accompanied by weight gain, acne, and excess hair growth.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Thyroid Disorders
                  </h3>
                  <p className="text-gray-700">
                    Both an underactive and overactive thyroid gland can disrupt the hormones that regulate the menstrual cycle, leading to irregular, heavy, or absent periods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Uterine Fibroids
                  </h3>
                  <p className="text-gray-700">
                    Non-cancerous growths in the uterine wall frequently cause heavy or prolonged bleeding, along with pelvic pressure and pain.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Endometriosis and Adenomyosis
                  </h3>
                  <p className="text-gray-700">
                    These conditions, where uterine-lining-like tissue grows outside the uterus or within its muscular wall, are major causes of severe menstrual pain and heavy bleeding.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Endometrial Polyps
                  </h3>
                  <p className="text-gray-700">
                    Small growths in the uterine lining can cause irregular spotting or heavier-than-normal periods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Stress and Lifestyle Factors
                  </h3>
                  <p className="text-gray-700">
                    High stress levels, sudden weight changes, excessive exercise, and poor sleep can all temporarily disrupt the hormonal balance needed for a regular cycle.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Perimenopause
                  </h3>
                  <p className="text-gray-700">
                    As women approach menopause, natural hormonal shifts often cause cycles to become irregular before periods stop altogether.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    8. Pelvic Inflammatory Disease (PID)
                  </h3>
                  <p className="text-gray-700">
                    Infections of the reproductive organs can cause irregular bleeding, pain, and, if untreated, longer-term fertility complications.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    9. Bleeding Disorders
                  </h3>
                  <p className="text-gray-700">
                    In some cases, an underlying clotting disorder is responsible for unusually heavy or prolonged bleeding, especially if present since a woman's very first period.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — When to Consult a Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Consult a Gynaecologist?
              </h2>

              <p className="text-gray-700 mb-4">
                It's time to book a consultation if you experience:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Periods that come less than 21 days or more than 35 days apart</li>
                <li>No period for three months or longer (and you are not pregnant)</li>
                <li>Bleeding that lasts longer than 7 days or is heavy enough to disrupt daily life</li>
                <li>Menstrual pain severe enough to affect work, school, or sleep</li>
                <li>Bleeding or spotting between periods or after intercourse</li>
                <li>Any bleeding after menopause</li>
                <li>Signs of anaemia such as fatigue, dizziness, or breathlessness</li>
                <li>Difficulty conceiving alongside irregular cycles</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Early evaluation not only relieves disruptive symptoms but can uncover treatable conditions such as PCOS, thyroid dysfunction, or fibroids before they progress further or affect fertility.
              </p>
            </div>

            {/* Section 5 — How Are Menstrual Problems Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Are Menstrual Problems Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                A thorough gynaecological evaluation typically involves:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Detailed menstrual and medical history:</strong> Cycle length, flow, pain patterns, and associated symptoms</li>
                <li><strong>Pelvic examination:</strong> To assess the uterus, ovaries, and general reproductive health</li>
                <li><strong>Ultrasound (transvaginal or abdominal):</strong> To detect fibroids, cysts, polyps, or signs of PCOS or adenomyosis</li>
                <li><strong>Hormonal blood tests:</strong> To check thyroid function, prolactin, and reproductive hormone levels</li>
                <li><strong>Blood count tests:</strong> To check for anaemia caused by heavy or prolonged bleeding</li>
                <li><strong>Diagnostic hysteroscopy:</strong> Direct visualisation of the uterine cavity, useful for detecting polyps or structural abnormalities</li>
                <li><strong>Endometrial biopsy:</strong> In select cases, particularly for women near or past menopause, to rule out abnormal cell changes</li>
              </ul>
            </div>

            {/* Section 6 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Menstrual Problems
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment depends entirely on the underlying cause, the woman's age, symptom severity, and whether she is planning a pregnancy.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Lifestyle and Medical Management
                  </h3>
                  <p className="text-gray-700 mb-3">
                    For many women, especially those with PCOS-related or stress-related irregularities, treatment starts with non-surgical approaches:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Hormonal therapy:</strong> Birth control pills or progesterone therapy to regulate cycles and reduce heavy bleeding</li>
                    <li><strong>Hormonal IUD:</strong> A long-term option that significantly lightens periods over time</li>
                    <li><strong>Metformin and lifestyle modification:</strong> Often used alongside hormonal treatment for women with PCOS</li>
                    <li><strong>Tranexamic acid:</strong> Reduces blood loss on heavy bleeding days</li>
                    <li><strong>Anti-inflammatory medication:</strong> For pain relief and to reduce excessive flow</li>
                    <li><strong>Thyroid medication:</strong> To correct hormone imbalances contributing to irregular cycles</li>
                    <li><strong>Iron supplementation:</strong> To treat or prevent anaemia from prolonged heavy bleeding</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Minimally Invasive and Surgical Options
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When a structural cause is identified, or medical management alone is not sufficient, procedures such as the following are often recommended:
                  </p>
                  <ul className="text-gray-700 space-y-3 list-disc pl-5">
                    <li><strong>Diagnostic and Operative Hysteroscopy:</strong> Allows direct examination and treatment of the uterine cavity, particularly for removing polyps contributing to irregular bleeding.</li>
                    <li><strong>Hysteroscopic Polypectomy:</strong> A no-incision procedure to remove uterine polyps through the vagina and cervix.</li>
                    <li><strong>Laparoscopic Myomectomy:</strong> Keyhole removal of fibroids while preserving the uterus, ideal for women planning future pregnancies.</li>
                    <li><strong>Laparoscopic Excision of Endometriosis:</strong> Precise removal of endometriotic tissue to relieve pain and heavy bleeding while protecting fertility.</li>
                    <li><strong>Endometrial Ablation:</strong> Reduces or removes the uterine lining to substantially lighten periods, generally for women who have completed childbearing.</li>
                    <li><strong>Laparoscopic Hysterectomy:</strong> Reserved for severe, treatment-resistant cases where childbearing is complete, offering a minimally invasive alternative to open surgery.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 — Benefits of Minimally Invasive Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing Minimally Invasive Treatment
              </h2>

              <p className="text-gray-700 mb-4">
                Where surgery is needed, laparoscopic and hysteroscopic techniques offer clear advantages over traditional open surgery:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tiny incisions result in minimal to no visible scarring</li>
                <li>Significantly less post-operative pain, reducing dependence on strong painkillers</li>
                <li>Shorter hospital stay, often as a day-care procedure or 24–48 hour admission</li>
                <li>Faster recovery, with most women resuming normal activity within 5 to 7 days</li>
                <li>Better preservation of fertility and healthy tissue, using high-definition 3D visualisation for precision</li>
                <li>Lower risk of infection and internal adhesions compared to open procedures</li>
              </ul>
            </div>

            {/* Section 8 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Menstrual Problems Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For women in Moradabad dealing with irregular, painful, heavy, or absent periods, Dr. Priyanka Pachauri (MS in Obstetrics & Gynaecology, FMAS, Advanced Infertility Fellowship) offers a comprehensive, technology-supported approach to diagnosing and treating menstrual disorders. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, describes her practice philosophy as &quot;Her Health First&quot; — built around listening to patients first, then applying advanced medical expertise and technology to their specific situation.
              </p>

              <p className="text-gray-700 mb-4">
                Her clinic's meta description explicitly lists menstrual disorder treatment among her core areas of practice, alongside antenatal and postnatal care, high-risk pregnancy management, and laparoscopic gynaecological surgery. For diagnosis, the clinic uses a 3D/4D ultrasound machine to assess the uterus and ovaries and offers diagnostic hysteroscopy to directly examine the uterine cavity — both essential tools for pinpointing the cause of abnormal or heavy periods. Where a structural issue is found, treatment options available at the clinic include hysteroscopic polypectomy for uterine polyps, laparoscopic myomectomy for fibroids using high-definition 3D laparoscopic technology, laparoscopic excision for endometriosis-related pain and bleeding, and, when medically necessary, Total Laparoscopic Hysterectomy (TLH).
              </p>

              <p className="text-gray-700 mb-4">
                The clinic's blog also features an in-depth article on PCOS and infertility, walking through how lifestyle changes, ovulation induction, and personalised fertility plans can help women with PCOS-related menstrual irregularities conceive — reflecting a practice that treats menstrual problems not just as an isolated symptom, but within the wider context of a woman's reproductive and fertility goals. This integrated approach, spanning diagnosis, medical management, and advanced laparoscopic and hysteroscopic surgery under one clinic, is particularly valuable for women who may need more than one type of treatment as their condition is investigated and managed.
              </p>
            </div>

            {/* Section 9 — Lifestyle Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Tips That Support Menstrual Health
              </h2>

              <p className="text-gray-700 mb-4">
                Alongside proper medical treatment, a few daily habits can support overall menstrual health:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Maintain a healthy, balanced weight — both being underweight and overweight can disrupt hormonal balance</li>
                <li>Manage stress through regular sleep, exercise, or relaxation techniques, since chronic stress can delay or disrupt cycles</li>
                <li>Eat iron-rich foods such as leafy greens, legumes, and lean meats to offset blood loss from heavier periods</li>
                <li>Track your cycle with an app or diary so you can give your gynaecologist accurate information</li>
                <li>Avoid self-medicating with unverified supplements or home remedies for persistent menstrual problems</li>
                <li>Attend follow-up visits as advised, especially while on hormonal treatment, to monitor progress</li>
              </ul>
            </div>

            {/* Section 10 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
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
                      <p className="font-semibold">Dr. Priyanka Gynaec Clinic</p>
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
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        https://www.gynaecologistmoradabad.com/
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Social Media</p>
                      <div className="space-y-1">
                        <a
                          href="https://www.instagram.com/dr.priyanka.gynae/"
                          className="block hover:underline text-black"
                        >
                          Instagram: @dr.priyanka.gynae
                        </a>
                        <a
                          href="https://www.facebook.com/priyanka.pachauri.790080"
                          className="block hover:underline text-black"
                        >
                          Facebook: priyanka.pachauri.790080
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
            </div>

            {/* Section 11 — FAQs */}
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