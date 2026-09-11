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

export default function IrregularPeriodsDoctorMoradabad() {
  const faqs = [
    {
      q: "Who is the best doctor for irregular periods in Moradabad?",
      a: "Dr. Priyanka Pachauri is a leading gynaecologist in Moradabad specialising in menstrual disorders, PCOS, and hormonal imbalance treatment.",
    },
    {
      q: "What causes irregular periods the most?",
      a: "The most common causes are PCOS, thyroid disorders, stress, sudden weight changes, and perimenopause.",
    },
    {
      q: "When should I see a gynaecologist for irregular periods?",
      a: "See a doctor if your cycle is irregular for 3+ months, periods stop for 90+ days, or bleeding is unusually heavy or painful.",
    },
    {
      q: "Can irregular periods affect fertility?",
      a: "Yes, irregular ovulation can make it harder to conceive, which is why early evaluation is recommended if you're trying for a baby.",
    },
    {
      q: "Does Dr. Priyanka Pachauri treat PCOS-related irregular periods?",
      a: "Yes, her clinic offers PCOS management through lifestyle guidance, hormonal therapy, and fertility support when needed.",
    },
    {
      q: "What tests are done to diagnose irregular periods?",
      a: "Typically a hormonal blood panel, pelvic examination, and a 3D/4D ultrasound to check the uterus and ovaries.",
    },
    {
      q: "Is surgery always needed for irregular periods?",
      a: "No, most cases are managed with lifestyle changes or medication; surgery is only considered for fibroids, polyps, or structural issues.",
    },
    {
      q: "How can I book an appointment with Dr. Priyanka Pachauri in Moradabad?",
      a: "You can call +91 90797 65578 or message on WhatsApp at +91 89796 70705, or visit the clinic in Gandhi Nagar, Moradabad.",
    },
    {
      q: "Where is Dr. Priyanka Pachauri's clinic located?",
      a: "The clinic is at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Can irregular periods return to normal without medication?",
      a: "Mild cases linked to stress or weight can improve with lifestyle changes, but a doctor's evaluation is advised to rule out underlying conditions.",
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
                Irregular Periods Doctor in Moradabad: Complete Guide to Diagnosis, Causes & Treatment
              </h1>

              <p className="text-gray-700 mb-4">
                Irregular periods are one of the most common reasons women across Moradabad visit a gynaecologist. Whether your cycles are too short, too long, unpredictable, unusually heavy, or missing altogether for months, this kind of menstrual irregularity is your body's way of signalling that something in your reproductive or hormonal system needs attention. Left unaddressed, irregular periods can affect fertility, energy levels, skin and hair health, and long-term uterine health.
              </p>

              <p className="text-gray-700">
                If you have been searching for a reliable irregular periods doctor in Moradabad, this guide walks you through what irregular periods actually mean, why they happen, when they become a medical concern, and how a specialist gynaecologist like Dr. Priyanka Pachauri approaches diagnosis and treatment at her Moradabad clinic.
              </p>
            </div>

            {/* Section 2 — What Counts as an Irregular Period? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Counts as an Irregular Period?
              </h2>

              <p className="text-gray-700 mb-4">
                A &quot;normal&quot; menstrual cycle is often assumed to be exactly 28 days, but in reality, anything between 21 and 35 days is considered typical for adult women, with periods lasting 2 to 7 days. Your cycle may be classified as irregular if you notice any of the following patterns over a few consecutive months:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Cycles shorter than 21 days or longer than 35 days</li>
                <li>Periods that stop altogether for three months or more (secondary amenorrhea)</li>
                <li>Unpredictable gaps — sometimes 25 days, sometimes 45 days, with no consistent pattern</li>
                <li>Bleeding that is unusually heavy, requiring a pad or tampon change every hour</li>
                <li>Very light or scanty bleeding that barely lasts a day</li>
                <li>Spotting between periods</li>
                <li>Periods accompanied by severe pain that disrupts daily activities</li>
                <li>Sudden changes in a previously regular cycle</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A single off cycle caused by stress or travel is usually not a concern. But a repeated pattern over two or three months is a strong reason to consult a gynaecologist rather than wait it out.
              </p>
            </div>

            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Do Periods Become Irregular? Common Causes
              </h2>

              <p className="text-gray-700 mb-4">
                Menstrual irregularity is rarely random — it almost always has an underlying cause. Some of the most frequent reasons women in Moradabad and across India experience irregular cycles include:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Polycystic Ovary Syndrome (PCOS)
                  </h3>
                  <p className="text-gray-700">
                    PCOS is the single most common cause of irregular periods in reproductive-age women. It disrupts ovulation due to a hormonal imbalance involving elevated androgens and insulin resistance, often accompanied by weight gain, acne, and excess facial or body hair.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Thyroid Disorders
                  </h3>
                  <p className="text-gray-700">
                    Both an underactive thyroid (hypothyroidism) and an overactive thyroid (hyperthyroidism) directly influence the hormones that regulate the menstrual cycle, leading to missed, delayed, or unusually heavy periods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Stress and Lifestyle Factors
                  </h3>
                  <p className="text-gray-700">
                    Chronic stress, sudden weight loss or gain, excessive exercise, irregular sleep patterns, and poor nutrition can all suppress the hypothalamic signals that control ovulation, throwing the cycle off track.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Uterine Fibroids and Polyps
                  </h3>
                  <p className="text-gray-700">
                    Non-cancerous growths in or around the uterus can cause heavy, prolonged, or irregular bleeding, and sometimes pain or pressure symptoms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Perimenopause
                  </h3>
                  <p className="text-gray-700">
                    For women approaching their 40s, irregular cycles are often a natural sign that the body is transitioning toward menopause, as hormone production becomes less consistent.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Endometriosis and Adenomyosis
                  </h3>
                  <p className="text-gray-700">
                    These conditions, where uterine-lining-like tissue grows outside its normal location or within the uterine muscle, often cause painful, heavy, and irregular bleeding.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Contraceptive Use
                  </h3>
                  <p className="text-gray-700">
                    Starting, stopping, or switching hormonal birth control methods commonly causes a temporary period of irregular bleeding while the body adjusts.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    8. Postpartum and Breastfeeding Changes
                  </h3>
                  <p className="text-gray-700">
                    After childbirth, cycles can remain irregular for several months, especially while breastfeeding, due to elevated prolactin levels.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    9. Undiagnosed Bleeding Disorders or Medication Side Effects
                  </h3>
                  <p className="text-gray-700">
                    Certain blood-thinning medications, undiagnosed clotting disorders, or other systemic medications can also alter menstrual patterns.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                Because so many different conditions can present as &quot;irregular periods,&quot; self-diagnosis is unreliable. A proper clinical evaluation is the only way to identify the real cause and choose the right treatment.
              </p>
            </div>

            {/* Section 4 — When to See a Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See a Gynaecologist for Irregular Periods?
              </h2>

              <p className="text-gray-700 mb-4">
                You should book a consultation with a gynaecologist in Moradabad if you experience any of the following:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your cycle has been irregular for three or more consecutive months</li>
                <li>You've missed periods for 90 days or more and are not pregnant</li>
                <li>Bleeding is heavy enough to soak through protection within an hour</li>
                <li>You experience bleeding between periods or after intercourse</li>
                <li>Periods are accompanied by severe pelvic pain, fatigue, or dizziness</li>
                <li>You are trying to conceive and have irregular ovulation</li>
                <li>You notice new symptoms like excess facial hair, acne, or rapid weight changes alongside irregular cycles</li>
                <li>Periods stop suddenly before the expected age of menopause</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Early evaluation matters — many underlying causes of irregular periods, such as PCOS or thyroid dysfunction, are far easier to manage when identified early, and delaying diagnosis can affect fertility down the line.
              </p>
            </div>

            {/* Section 5 — How Dr. Priyanka Pachauri Diagnoses */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Dr. Priyanka Pachauri Diagnoses Irregular Periods in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                At her Moradabad clinic, Dr. Priyanka Pachauri follows a structured, evidence-based approach to identify the exact cause behind a patient's irregular cycles before recommending treatment:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Medical History
                  </h3>
                  <p className="text-gray-700">
                    Understanding cycle patterns, family history, lifestyle, stress levels, weight changes, and any existing medical conditions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Physical and Pelvic Examination
                  </h3>
                  <p className="text-gray-700">
                    A basic gynaecological examination to check for visible abnormalities or tenderness.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Hormonal Blood Tests
                  </h3>
                  <p className="text-gray-700">
                    Checking levels of thyroid hormones, prolactin, androgens, FSH, LH, and other markers that influence the cycle.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Ultrasound (3D/4D Imaging)
                  </h3>
                  <p className="text-gray-700">
                    Using advanced ultrasound technology to examine the uterus and ovaries for cysts, fibroids, polyps, or signs of PCOS.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Additional Testing When Needed
                  </h3>
                  <p className="text-gray-700">
                    Depending on findings, further evaluation such as a hysteroscopy may be recommended to look inside the uterine cavity for polyps or structural issues.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                This systematic diagnostic process ensures treatment is targeted to the actual cause rather than simply masking the symptoms.
              </p>
            </div>

            {/* Section 6 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Irregular Periods
              </h2>

              <p className="text-gray-700 mb-4">
                Once the underlying cause is identified, treatment is tailored to the individual. Common approaches include:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Lifestyle and Dietary Modifications
                  </h3>
                  <p className="text-gray-700">
                    For irregularities linked to stress, weight, or PCOS, the first line of treatment often involves structured lifestyle changes — balanced nutrition, regular physical activity, weight management, and stress-reduction techniques — which can restore ovulation naturally in many cases.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hormonal Therapy
                  </h3>
                  <p className="text-gray-700">
                    Hormonal medications, including combined oral contraceptives or progesterone therapy, are frequently used to regulate cycle length, reduce heavy bleeding, and manage PCOS-related symptoms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Thyroid Management
                  </h3>
                  <p className="text-gray-700">
                    If a thyroid disorder is the root cause, correcting hormone levels with appropriate medication typically restores a regular cycle over a few months.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Treating Structural Causes
                  </h3>
                  <p className="text-gray-700">
                    Where fibroids, polyps, or endometriosis are responsible for irregular or heavy bleeding, minimally invasive treatment may be required. Dr. Priyanka Pachauri specialises in advanced 3D laparoscopic surgery, which allows conditions like fibroids (myomectomy), ovarian cysts (cystectomy), and endometriosis to be treated with smaller incisions, less pain, and faster recovery compared to open surgery. Hysteroscopic procedures are also used for polyps and other cavity-related issues.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Fertility-Focused Care
                  </h3>
                  <p className="text-gray-700">
                    For women whose irregular periods are affecting their ability to conceive, ovulation induction and personalised fertility plans — supported by the clinic's IVF and fertility services — can help restore regular ovulation and improve chances of pregnancy.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ongoing Monitoring
                  </h3>
                  <p className="text-gray-700">
                    Because menstrual irregularity often needs a few months of intervention to normalise, continuity of care — follow-up visits and cycle tracking — plays an important role in confirming that treatment is working.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 — Why Choose Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Irregular Periods Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a well-regarded gynaecologist in Moradabad known for combining clinical expertise with a patient-first, empathetic approach to care. A few reasons patients across the region choose her clinic for menstrual disorders and related concerns:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Advanced diagnostic technology, including 3D/4D ultrasound imaging, for accurate assessment of hormonal and structural causes of irregular periods.</li>
                <li>Specialisation in laparoscopic gynaecological surgery, offering minimally invasive, fertility-preserving treatment for fibroids, cysts, and endometriosis when surgery is needed.</li>
                <li>Integrated fertility and IVF services, useful for women whose irregular cycles are linked to difficulty conceiving.</li>
                <li>A continuity-of-care model, where the same team follows a patient from the first consultation through every follow-up.</li>
                <li>A calm, listening-first consultation style, so patients feel comfortable discussing sensitive symptoms without hesitation.</li>
                <li>The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, making it accessible for patients across the city and surrounding areas.</li>
              </ul>
            </div>

            {/* Section 8 — Tips for Healthy Menstrual Cycle */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips to Support a Healthy Menstrual Cycle
              </h2>

              <p className="text-gray-700 mb-4">
                While medical treatment addresses the root cause, these habits can support overall menstrual health alongside your doctor's advice:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Maintain a consistent sleep schedule of 7–8 hours</li>
                <li>Eat a balanced diet with adequate iron, protein, and fibre</li>
                <li>Manage stress through activities like yoga, walking, or meditation</li>
                <li>Avoid extreme or crash dieting</li>
                <li>Exercise moderately and consistently, avoiding overtraining</li>
                <li>Track your cycle using a period-tracking app or a simple calendar</li>
                <li>Attend regular gynaecological check-ups, even when cycles feel normal</li>
              </ul>
            </div>

            {/* Section 9 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts
              </h2>

              <p className="text-gray-700 mb-4">
                Irregular periods are common, but they are not something to ignore. They can be an early signal of conditions like PCOS, thyroid imbalance, fibroids, or other hormonal issues that are far more manageable when caught early. If your cycles have been unpredictable, unusually heavy, painful, or absent for a few months, a proper clinical evaluation is the safest next step.
              </p>

              <p className="text-gray-700">
                For women in Moradabad looking for an experienced, technology-equipped, and compassionate gynaecologist, Dr. Priyanka Pachauri offers comprehensive diagnosis and treatment for irregular periods — from lifestyle-based management to advanced laparoscopic and fertility care — all under one roof.
              </p>
            </div>

            {/* Section 10 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Gynaecologist in Moradabad
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
                    <Shield size={20} className="text-black mt-1 shrink-0" />
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