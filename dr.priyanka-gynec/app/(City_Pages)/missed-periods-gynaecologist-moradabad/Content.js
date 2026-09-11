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

export default function MissedPeriodsGynaecologistMoradabad() {
  const faqs = [
    {
      q: "What is considered a missed period?",
      a: "A missed period generally means periods have stopped for three or more consecutive months in a woman who previously had regular cycles.",
    },
    {
      q: "What is the first thing to check if I miss a period?",
      a: "Always take a pregnancy test first, since pregnancy is the most common cause of a missed period in women of reproductive age.",
    },
    {
      q: "Can PCOS cause missed periods?",
      a: "Yes, PCOS is one of the most common causes of missed or infrequent periods due to disrupted ovulation from hormonal imbalance.",
    },
    {
      q: "Can stress cause a missed period?",
      a: "Yes, significant physical or emotional stress can disrupt hormonal signals and temporarily stop ovulation and periods.",
    },
    {
      q: "When should I see a gynaecologist for missed periods?",
      a: "See a gynaecologist if you've missed 3+ periods, pregnancy is ruled out, or missed periods come with other symptoms like weight changes.",
    },
    {
      q: "How are missed periods diagnosed?",
      a: "Diagnosis typically involves a pregnancy test, hormonal blood tests, and a pelvic ultrasound to identify the underlying cause.",
    },
    {
      q: "Can missed periods be treated without medication?",
      a: "Yes, cases linked to stress, weight, or excessive exercise often improve with lifestyle changes alone, though some cases need medical treatment.",
    },
    {
      q: "Do missed periods affect fertility?",
      a: "Yes, since missed periods usually mean irregular or absent ovulation, which can directly affect the ability to conceive.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering diagnosis and treatment for missed periods, menstrual disorders, and fertility care.",
    },
    {
      q: "What diagnostic tools does Dr. Priyanka Pachauri's clinic use for missed periods?",
      a: "Her clinic uses 3D/4D ultrasound imaging and hormonal evaluation to identify the underlying cause of missed or irregular periods.",
    },
    {
      q: "How can I book a consultation for missed periods in Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic's official website to schedule a consultation with Dr. Priyanka Pachauri.",
    },
    {
      q: "Is it normal to occasionally miss a period?",
      a: "An occasional late or missed period can happen due to minor stress or lifestyle changes, but repeated missed periods should always be evaluated.",
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
                Missed Periods Gynaecologist in Moradabad: Causes, Diagnosis & Treatment Explained
              </h1>

              <p className="text-gray-700 mb-4">
                A missed period is one of the most common reasons women schedule an urgent visit with a gynaecologist — and understandably so, since it can bring up questions ranging from pregnancy to more concerning underlying health issues. While an occasional late or skipped period can happen to almost anyone and isn't always a cause for alarm, periods that are missed repeatedly, or absent for several months, deserve proper medical evaluation.
              </p>

              <p className="text-gray-700">
                If you are in Moradabad and searching for a trusted missed periods gynaecologist, this guide explains what counts as a missed period, the range of possible causes, when to seek help, how the condition is diagnosed, and what treatment options are available.
              </p>
            </div>

            {/* Section 2 — What Counts as a Missed Period? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Counts as a Missed Period?
              </h2>

              <p className="text-gray-700 mb-4">
                Doctors generally describe missed periods using the medical term amenorrhea, which falls into two categories:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Primary Amenorrhea
                  </h3>
                  <p className="text-gray-700">
                    This refers to a girl who has not started menstruating by age 15–16, despite otherwise normal development. It typically requires evaluation to check for underlying developmental, hormonal, or structural causes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Secondary Amenorrhea
                  </h3>
                  <p className="text-gray-700">
                    This is far more common and refers to periods stopping for three or more consecutive months in a woman who previously had regular cycles, or for six or more months in a woman with a history of irregular cycles. Secondary amenorrhea is the type most women encounter and can result from a wide range of causes — some temporary and easily corrected, others requiring more focused treatment.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                A single missed or late period, especially if you're sexually active, should always first prompt a pregnancy test, since pregnancy is the most common cause of a missed period in women of reproductive age. If pregnancy is ruled out and periods remain absent, further evaluation is needed.
              </p>
            </div>

            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Missed Periods
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Pregnancy
                  </h3>
                  <p className="text-gray-700">
                    The most frequent cause of a missed period in sexually active women of reproductive age — always the first thing to rule out with a home pregnancy test or blood test.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Polycystic Ovary Syndrome (PCOS)
                  </h3>
                  <p className="text-gray-700">
                    One of the leading causes of missed or infrequent periods, PCOS disrupts normal ovulation due to a hormonal imbalance, often accompanied by acne, weight gain, or excess hair growth.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Stress
                  </h3>
                  <p className="text-gray-700">
                    Significant emotional or physical stress can disrupt the brain's hormonal signals to the ovaries, temporarily stopping ovulation and, in turn, periods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Excessive Exercise or Low Body Weight
                  </h3>
                  <p className="text-gray-700">
                    Intense physical training or a very low body fat percentage can suppress the reproductive hormones needed for regular ovulation, a pattern often seen in competitive athletes or women with disordered eating.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Significant Weight Changes
                  </h3>
                  <p className="text-gray-700">
                    Both rapid weight loss and substantial weight gain can disrupt hormone production enough to stop periods temporarily.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Thyroid Disorders
                  </h3>
                  <p className="text-gray-700">
                    An underactive or overactive thyroid gland can interfere with the hormones that regulate the menstrual cycle, sometimes stopping periods altogether.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. High Prolactin Levels
                  </h3>
                  <p className="text-gray-700">
                    Elevated prolactin, sometimes linked to a small, usually benign pituitary gland growth or certain medications, can suppress ovulation and stop periods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    8. Premature Ovarian Insufficiency
                  </h3>
                  <p className="text-gray-700">
                    In some women, the ovaries stop functioning normally before age 40, leading to missed periods along with symptoms similar to menopause.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    9. Perimenopause and Menopause
                  </h3>
                  <p className="text-gray-700">
                    As women approach their late 40s or early 50s, declining ovarian function naturally leads to increasingly infrequent and eventually absent periods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    10. Certain Medications
                  </h3>
                  <p className="text-gray-700">
                    Hormonal contraceptives, certain psychiatric medications, and some other drug classes can cause periods to stop as a side effect.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    11. Uterine Scarring (Asherman's Syndrome)
                  </h3>
                  <p className="text-gray-700">
                    In rare cases, scar tissue within the uterus — sometimes following a previous surgical procedure — can prevent the normal buildup and shedding of the uterine lining.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — When to See a Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See a Gynaecologist?
              </h2>

              <p className="text-gray-700 mb-4">
                You should schedule a consultation if:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>You have missed three or more consecutive periods and pregnancy has been ruled out</li>
                <li>Your periods have become increasingly irregular before stopping</li>
                <li>You have never had a period by age 15–16</li>
                <li>Missed periods are accompanied by symptoms like excess hair growth, acne, or significant weight changes</li>
                <li>You're experiencing hot flashes or other menopause-like symptoms before age 40</li>
                <li>You're trying to conceive and have irregular or absent ovulation</li>
                <li>Missed periods follow a significant illness, extreme stress, or major weight change</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Timely evaluation helps identify treatable causes early — particularly important for women who are also trying to conceive, since many causes of missed periods also affect fertility.
              </p>
            </div>

            {/* Section 5 — How Are Missed Periods Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Are Missed Periods Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                A thorough evaluation for missed periods generally includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Pregnancy test:</strong> The essential first step for any woman of reproductive age</li>
                <li><strong>Detailed medical and menstrual history:</strong> Including weight changes, stress levels, exercise habits, and medication use</li>
                <li><strong>Physical examination:</strong> Checking for signs like excess hair growth, acne, or thyroid enlargement</li>
                <li><strong>Hormonal blood tests:</strong> Including thyroid hormones (TSH), prolactin, LH, FSH, and androgen levels</li>
                <li><strong>Pelvic ultrasound:</strong> To assess the ovaries and uterus, checking for PCOS-related changes or structural abnormalities</li>
                <li><strong>Additional tests:</strong> Depending on initial findings, further specialised testing may be recommended to identify the exact underlying cause</li>
              </ul>
            </div>

            {/* Section 6 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Missed Periods
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment depends entirely on the specific cause identified during evaluation, as well as the woman's age and whether she is planning a pregnancy.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Lifestyle-Based Treatment
                  </h3>
                  <p className="text-gray-700 mb-3">
                    For missed periods linked to stress, weight, or excessive exercise, treatment often starts with:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Achieving a healthy, stable body weight through balanced nutrition, rather than extreme dieting or restriction</li>
                    <li>Moderating exercise intensity if over-training is contributing to the issue</li>
                    <li>Managing stress through adequate sleep, relaxation techniques, and reduced chronic stress</li>
                    <li>Allowing time for the body to recover its natural cycle once the underlying lifestyle factor is addressed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Medical Management
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When a hormonal or medical cause is identified, treatment options include:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Hormonal therapy:</strong> Birth control pills or progesterone therapy to help restart regular cycles</li>
                    <li><strong>Metformin:</strong> Commonly used for PCOS-related missed periods to improve insulin sensitivity and support ovulation</li>
                    <li><strong>Thyroid medication:</strong> To correct hypothyroidism or hyperthyroidism responsible for missed periods</li>
                    <li><strong>Medication to lower prolactin levels:</strong> When elevated prolactin is identified as the cause</li>
                    <li><strong>Ovulation-inducing medication:</strong> For women trying to conceive who are not ovulating regularly</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    When a Structural Cause Is Involved
                  </h3>
                  <p className="text-gray-700 mb-3">
                    In less common cases where missed periods result from uterine scarring or a structural issue, a minimally invasive procedure such as diagnostic or operative hysteroscopy may be recommended to examine and, where possible, correct the uterine cavity — performed without any external incision.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 — Why Early Evaluation Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Early Evaluation of Missed Periods Matters
              </h2>

              <p className="text-gray-700">
                Missed periods are not just an inconvenience — depending on the underlying cause, prolonged absence of periods can affect bone health (due to low estrogen), increase the risk of endometrial changes from unopposed hormone exposure in some conditions, and, importantly, signal an underlying issue that may also be affecting fertility. Identifying the cause early allows for more effective, targeted treatment and helps prevent longer-term complications.
              </p>
            </div>

            {/* Section 8 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Missed Periods Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For women in Moradabad experiencing missed or absent periods, Dr. Priyanka Pachauri (MS in Obstetrics & Gynaecology, FMAS, Advanced Infertility Fellowship) offers a structured, technology-supported approach to diagnosis and treatment. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, describes her approach through a &quot;Her Health First&quot; philosophy — understanding each patient's history and symptoms before recommending tests or treatment.
              </p>

              <p className="text-gray-700 mb-4">
                Her clinic's meta description lists menstrual disorder treatment among her core areas of practice, alongside fertility and IVF care, antenatal and postnatal services, and high-risk pregnancy management — making it a suitable option for women whose missed periods may also be connected to fertility concerns. Diagnostic capabilities at the clinic include a 3D/4D ultrasound machine to assess the ovaries and uterus, which is particularly useful in evaluating PCOS-related changes, a common cause of missed periods. The clinic's blog also features a detailed article on PCOS and infertility, explaining how lifestyle changes, ovulation induction, and personalised fertility plans help the majority of women with PCOS-related cycle irregularities go on to conceive.
              </p>

              <p className="text-gray-700 mb-4">
                For women whose missed periods are connected to a structural cause, the clinic also offers diagnostic hysteroscopy to directly examine the uterine cavity, alongside the full range of laparoscopic gynaecological procedures for related conditions such as ovarian cysts. This integrated approach — connecting hormonal diagnosis with fertility care and, when needed, procedural treatment — allows women to be evaluated and treated comprehensively rather than being referred between multiple specialists for different parts of their care.
              </p>
            </div>

            {/* Section 9 — Contact Information */}
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
                          href="mailto:drpriyanka@gynaecologistmoradabad.com"
                          className="hover:underline"
                        >
                          drpriyanka@gynaecologistmoradabad.com
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

            {/* Section 10 — FAQs */}
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