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

export default function MenstrualDisorderSpecialistMoradabad() {
  const faqs = [
    {
      q: "What is considered a menstrual disorder?",
      a: "Any pattern of unusually heavy, irregular, absent, or painful periods that falls outside a normal healthy cycle.",
    },
    {
      q: "What are the most common causes of irregular periods?",
      a: "Hormonal imbalance, PCOS, thyroid issues, fibroids, stress, and significant weight changes.",
    },
    {
      q: "Is heavy menstrual bleeding a serious concern?",
      a: "Yes, if untreated it can lead to significant anaemia and fatigue, so evaluation is recommended.",
    },
    {
      q: "Can menstrual disorders affect fertility?",
      a: "Yes, especially conditions like PCOS, endometriosis, and fibroids, which can make conception more difficult.",
    },
    {
      q: "How are menstrual disorders diagnosed?",
      a: "Through symptom history, physical examination, blood tests, and pelvic ultrasound.",
    },
    {
      q: "Is surgery always required for menstrual disorders?",
      a: "No, many cases are managed with hormonal or medical treatment; surgery is considered for structural causes.",
    },
    {
      q: "Does Dr. Priyanka Pachauri treat PCOS-related menstrual problems?",
      a: "Yes, including laparoscopic ovarian drilling and fertility-focused management plans in Moradabad.",
    },
    {
      q: "How soon should I see a doctor for irregular periods?",
      a: "If irregularity persists for more than 2–3 cycles, or symptoms are severe, prompt consultation is advised.",
    },
    {
      q: "How can I book a consultation?",
      a: "You can call or message on WhatsApp at 8979670705 to schedule an appointment.",
    },
    {
      q: "Where is the clinic located?",
      a: "At A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
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
                Menstrual Disorder Specialist in Moradabad: Expert Care for Irregular, Heavy or Painful Periods
              </h1>

              <p className="text-gray-700 mb-4">
                Menstrual problems are one of the most common yet most under-discussed health concerns among women. Many women silently adjust their entire lifestyle around irregular cycles, heavy bleeding, or severe period pain, assuming it is &quot;normal&quot; simply because it has always been that way. In reality, persistent menstrual disorders often signal an underlying hormonal, structural, or reproductive health issue that deserves proper medical attention. Consulting an experienced menstrual disorder specialist in Moradabad can help identify the root cause and provide effective, long-term relief rather than temporary fixes.
              </p>

              <p className="text-gray-700">
                This guide explains the common types of menstrual disorders, their causes, treatment options, and how to find the right specialist in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Counts as a Menstrual Disorder? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Counts as a Menstrual Disorder?
              </h2>

              <p className="text-gray-700 mb-4">
                A menstrual disorder refers to any pattern of bleeding, timing, or pain during periods that falls outside the typical healthy range. While every woman's cycle is slightly different, certain patterns clearly indicate a problem that needs medical evaluation:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Periods that are unusually heavy, requiring frequent pad or tampon changes every hour or two</li>
                <li>Cycles that are consistently shorter than 21 days or longer than 35 days</li>
                <li>Complete absence of periods for three or more consecutive months, known as amenorrhoea</li>
                <li>Bleeding or spotting between periods, unrelated to ovulation</li>
                <li>Severe pain during periods that disrupts daily activities, known as dysmenorrhoea</li>
                <li>Periods lasting significantly longer than the usual 5–7 days</li>
                <li>Sudden, unexplained changes in a previously regular cycle</li>
              </ul>
            </div>

            {/* Section 3 — Common Types of Menstrual Disorders */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Types of Menstrual Disorders
              </h2>

              <p className="text-gray-700 mb-4">
                A menstrual disorder specialist evaluates and treats a wide range of specific conditions, each with its own underlying cause and treatment approach:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Menorrhagia (Heavy Menstrual Bleeding):</strong> Excessive blood loss that can lead to fatigue, weakness, and anaemia if untreated</li>
                <li><strong>Oligomenorrhoea (Infrequent Periods):</strong> Cycles occurring less often than every 35 days, often linked to hormonal imbalance</li>
                <li><strong>Amenorrhoea (Absent Periods):</strong> Missing periods for several consecutive months, sometimes linked to PCOS, stress, or thyroid issues</li>
                <li><strong>Dysmenorrhoea (Painful Periods):</strong> Severe cramping pain, occasionally linked to underlying conditions like endometriosis or fibroids</li>
                <li><strong>Metrorrhagia (Irregular Bleeding):</strong> Bleeding or spotting between expected periods</li>
                <li><strong>Premenstrual Syndrome (PMS):</strong> Mood changes, bloating, and physical discomfort in the days leading up to a period</li>
                <li><strong>PCOS-Related Menstrual Irregularity:</strong> Highly irregular or skipped cycles caused by polycystic ovary syndrome</li>
              </ul>
            </div>

            {/* Section 4 — What Causes Menstrual Disorders? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Causes Menstrual Disorders?
              </h2>

              <p className="text-gray-700 mb-4">
                Menstrual irregularities can stem from a wide range of causes, which is exactly why proper diagnosis by a specialist matters so much:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Hormonal imbalances, particularly involving oestrogen, progesterone, or thyroid hormones</li>
                <li>Polycystic Ovary Syndrome (PCOS), one of the leading causes of irregular cycles in younger women</li>
                <li>Uterine fibroids or polyps, which often cause heavy or prolonged bleeding</li>
                <li>Endometriosis, frequently linked to severe menstrual pain</li>
                <li>Chronic stress, sudden weight changes, or excessive physical exercise</li>
                <li>Perimenopause, as hormone levels naturally shift in the years before menopause</li>
                <li>Certain medications, including some contraceptives and blood thinners</li>
                <li>Underlying conditions such as thyroid disorders or bleeding disorders</li>
              </ul>
            </div>

            {/* Section 5 — Why See a Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why You Should See a Specialist Rather Than Ignore the Symptoms
              </h2>

              <p className="text-gray-700 mb-4">
                Many women delay consulting a doctor, hoping the problem will resolve on its own. However, untreated menstrual disorders can lead to more serious complications over time:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Chronic heavy bleeding can lead to significant iron-deficiency anaemia, causing fatigue and weakness</li>
                <li>Untreated hormonal imbalances like PCOS can affect long-term fertility if left unmanaged</li>
                <li>Severe period pain linked to endometriosis can worsen and affect fertility if diagnosis is delayed</li>
                <li>Irregular cycles can make it much harder to track ovulation for couples trying to conceive</li>
                <li>Underlying fibroids or polyps causing bleeding can grow larger over time if untreated</li>
                <li>Persistent menstrual disorders can significantly affect quality of life, work productivity, and emotional wellbeing</li>
              </ul>
            </div>

            {/* Section 6 — How Diagnosis Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How a Menstrual Disorder Specialist Diagnoses the Problem
              </h2>

              <p className="text-gray-700 mb-4">
                A thorough, structured evaluation helps identify the exact cause of your symptoms rather than guessing at treatment. The typical diagnostic process includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A detailed discussion of your cycle history, symptoms, and any changes over recent months</li>
                <li>A physical and pelvic examination to check for visible abnormalities</li>
                <li>Blood tests to evaluate hormone levels, thyroid function, and check for anaemia</li>
                <li>Pelvic ultrasound to detect fibroids, cysts, polyps, or structural abnormalities</li>
                <li>Hysteroscopy, if needed, to directly examine the inside of the uterus</li>
                <li>A review of any medications, contraceptives, or supplements you are currently taking</li>
                <li>Discussion of lifestyle factors such as stress levels, diet, and exercise patterns</li>
              </ul>
            </div>

            {/* Section 7 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Menstrual Disorders
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment is always tailored to the underlying cause, your age, and whether you wish to conceive in the near future. Common approaches include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Hormonal Therapy:</strong> Birth control pills, hormonal IUDs, or other medications to regulate cycles and reduce heavy bleeding</li>
                <li><strong>Iron and Nutritional Supplementation:</strong> To correct anaemia caused by chronic heavy bleeding</li>
                <li><strong>Pain Management:</strong> Targeted medication for severe cramping, alongside investigation of any underlying cause</li>
                <li><strong>Laparoscopic Treatment:</strong> For structural causes like fibroids, polyps, or endometriosis requiring surgical correction</li>
                <li><strong>Hysteroscopic Polypectomy:</strong> Minimally invasive removal of polyps causing irregular bleeding</li>
                <li><strong>Lifestyle and Weight Management Guidance:</strong> Particularly important for PCOS-related menstrual irregularities</li>
                <li><strong>Laparoscopic Myomectomy:</strong> Fibroid removal while preserving the uterus, for women planning future pregnancy</li>
                <li><strong>Laparoscopic Hysterectomy:</strong> Considered for severe, treatment-resistant cases, typically in women who have completed their family</li>
              </ul>
            </div>

            {/* Section 8 — Lifestyle Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Tips to Support Menstrual Health
              </h2>

              <p className="text-gray-700 mb-4">
                Alongside medical treatment, certain lifestyle habits can meaningfully support more regular, comfortable cycles:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Maintain a balanced diet rich in iron, protein, and essential vitamins</li>
                <li>Aim for consistent, moderate physical activity rather than extreme or irregular exercise patterns</li>
                <li>Manage stress through relaxation techniques, adequate sleep, and regular routines</li>
                <li>Maintain a healthy body weight, as both being underweight and overweight can disrupt cycles</li>
                <li>Track your cycle regularly using a diary or app to notice patterns and changes early</li>
                <li>Avoid excessive caffeine and alcohol intake, which can affect hormonal balance</li>
                <li>Stay well hydrated and avoid crash dieting, which can significantly disrupt menstrual regularity</li>
              </ul>
            </div>

            {/* Section 9 — Choosing the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing the Right Menstrual Disorder Specialist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Selecting the right doctor for menstrual health concerns can make a real difference to both diagnosis accuracy and treatment comfort. Consider the following:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Look for a gynaecologist with specific experience in diagnosing and managing menstrual disorders, not just general check-ups</li>
                <li>Check whether the clinic offers on-site ultrasound and diagnostic facilities for faster evaluation</li>
                <li>Ask about the doctor's approach to both hormonal and surgical treatment options</li>
                <li>Prefer a specialist who listens carefully and takes your symptoms seriously, rather than dismissing them as &quot;normal&quot;</li>
                <li>Read patient testimonials to understand real experiences with diagnosis and treatment outcomes</li>
                <li>Choose a clinic that also supports fertility planning, since many menstrual disorders directly affect conception</li>
              </ul>
            </div>

            {/* Section 10 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Menstrual Disorder Specialist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, through her clinic Dr. Priyanka Gynaec, offers comprehensive evaluation and treatment for menstrual disorders in Moradabad. Her website, gynaecologistmoradabad.com, highlights several strengths relevant to menstrual health care:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Advanced 3D/4D ultrasound imaging to accurately detect fibroids, cysts, polyps, and other structural causes of irregular bleeding</li>
                <li>A full range of laparoscopic and hysteroscopic treatment options, including myomectomy, polypectomy, and hysterectomy for severe cases</li>
                <li>PCOS-focused care, including laparoscopic ovarian drilling and fertility-oriented management plans</li>
                <li>Educational blog content specifically addressing PCOS and infertility, helping patients understand their condition better</li>
                <li>Complete women's healthcare under one roof, including antenatal, postnatal, and general gynaecological services</li>
                <li>Genuine patient testimonials describing clear communication and comfort throughout diagnosis and treatment</li>
                <li>A patient-first philosophy, &quot;Her Health First,&quot; which supports thorough, unhurried evaluation of menstrual complaints</li>
                <li>Central, easily accessible location within Moradabad for regular follow-up and monitoring</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This combination of diagnostic technology, treatment range, and a patient-focused approach makes her clinic a strong option for women seeking clarity and relief from persistent menstrual disorders.
              </p>
            </div>

            {/* Section 11 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Menstrual Disorders
              </h2>

              <p className="text-gray-700 mb-4">
                Misconceptions often delay women from seeking timely care. Here is the truth behind a few common myths:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Myth:</strong> Irregular periods are always normal and nothing to worry about. <strong>In reality,</strong> While occasional variation is common, persistent irregularity usually points to an underlying cause worth investigating.</li>
                <li><strong>Myth:</strong> Heavy bleeding is just &quot;how some women are.&quot; <strong>In reality,</strong> Genuinely heavy bleeding is a medical condition, not a personal trait, and it is very treatable.</li>
                <li><strong>Myth:</strong> Severe period pain must simply be endured. <strong>In reality,</strong> Severe pain can indicate conditions like endometriosis or fibroids and deserves proper evaluation, not just painkillers.</li>
                <li><strong>Myth:</strong> Menstrual disorders only matter if you are trying to conceive. <strong>In reality,</strong> Untreated disorders can affect long-term health, energy levels, and quality of life regardless of fertility plans.</li>
                <li><strong>Myth:</strong> Hormonal treatment is the only option available. <strong>In reality,</strong> Depending on the cause, treatment may range from lifestyle changes to hormonal therapy to minimally invasive surgery.</li>
              </ul>
            </div>

            {/* Section 12 — When to Seek Immediate Attention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When to Seek Immediate Medical Attention
              </h2>

              <p className="text-gray-700 mb-4">
                While most menstrual disorders can be evaluated during a routine consultation, certain symptoms need prompt medical attention:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bleeding so heavy that you are soaking through a pad or tampon every hour for several hours</li>
                <li>Severe, sudden abdominal pain along with abnormal bleeding</li>
                <li>Signs of significant anaemia, such as extreme fatigue, dizziness, or breathlessness</li>
                <li>Bleeding after menopause, which always requires prompt evaluation</li>
                <li>Fever accompanying abnormal bleeding or pelvic pain</li>
              </ul>
            </div>

            {/* Section 13 — Supporting a Loved One */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting a Loved One With Menstrual Health Concerns
              </h2>

              <p className="text-gray-700 mb-4">
                Family support plays a meaningful role in encouraging women to seek timely care rather than silently managing symptoms. A few simple steps can help:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Encourage open conversation about period symptoms without treating it as an uncomfortable topic</li>
                <li>Support timely doctor visits instead of suggesting symptoms will &quot;just pass&quot;</li>
                <li>Help track cycle patterns if the affected person finds it difficult to notice changes themselves</li>
                <li>Offer practical support, such as accompanying them to appointments when needed</li>
                <li>Take reports of severe pain or heavy bleeding seriously rather than minimising them</li>
              </ul>
            </div>

            {/* Section 14 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts
              </h2>

              <p className="text-gray-700 mb-4">
                Menstrual disorders are common, but they are not something you simply have to live with. Whether your concern is heavy bleeding, irregular cycles, severe pain, or absent periods, a proper evaluation by an experienced menstrual disorder specialist can uncover the underlying cause and guide you towards effective, lasting treatment. Do not dismiss persistent symptoms as &quot;just how your body is&quot; — timely consultation often makes treatment simpler and outcomes better.
              </p>
            </div>

            {/* Section 15 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact and Appointment Details
              </h2>

              <p className="text-gray-700 mb-4">
                For appointments, treatment queries, or to discuss your symptoms confidentially, reach out through any of the following:
              </p>

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

            {/* Section 16 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQ)
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