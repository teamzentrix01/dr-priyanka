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

export default function PeriodIrregularityTreatmentMoradabad() {
  const faqs = [
    {
      q: "What is considered an irregular period?",
      a: "A cycle shorter than 21 days, longer than 35 days, or one that varies by more than 7–9 days each month is considered irregular.",
    },
    {
      q: "What is the most common cause of irregular periods?",
      a: "PCOS is the most common cause, followed by thyroid dysfunction and chronic stress.",
    },
    {
      q: "Who should I consult for irregular periods in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is an experienced gynaecologist in Moradabad specializing in menstrual irregularities.",
    },
    {
      q: "Can irregular periods be treated without medication?",
      a: "Mild cases can often improve with lifestyle changes, but persistent irregularity usually needs medical evaluation and treatment.",
    },
    {
      q: "Is thyroid testing necessary for irregular periods?",
      a: "Yes, thyroid imbalance is a common and easily treatable cause of irregular cycles.",
    },
    {
      q: "Can irregular periods affect fertility?",
      a: "Yes, since irregular cycles often mean irregular ovulation, which can make conceiving more difficult if untreated.",
    },
    {
      q: "How long does it take to regularize periods with treatment?",
      a: "It varies by cause, but many women see improvement within 2–3 months of starting appropriate treatment.",
    },
    {
      q: "How do I book an appointment with Dr. Priyanka Pachauri?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or visit the clinic website to book.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "What tests are usually done to find the cause of irregular periods?",
      a: "Hormonal blood tests, pelvic ultrasound, and sometimes hysteroscopy are used to identify the underlying cause.",
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
                Period Irregularity Treatment in Moradabad: Causes, Diagnosis, and the Right Doctor to Consult
              </h1>

              <p className="text-gray-700 mb-4">
                Irregular periods are one of the most common gynaecological concerns women face today, yet they're often ignored or dismissed as &quot;normal stress&quot; until the problem becomes harder to manage. In Moradabad, many women go months without seeking help for an irregular menstrual cycle, either because they don't realize it needs medical attention or because they aren't sure which doctor to trust. Left unchecked, irregular periods can be more than an inconvenience — they can be an early warning sign of hormonal imbalance, PCOS, thyroid dysfunction, or fertility complications.
              </p>

              <p className="text-gray-700">
                This article explains what causes period irregularity, when it needs treatment, the diagnostic and treatment options available today, and how to find the right specialist in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Counts as an Irregular Period */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Counts as an Irregular Period
              </h2>

              <p className="text-gray-700 mb-4">
                A typical menstrual cycle ranges from 21 to 35 days, with bleeding usually lasting 3 to 7 days. A period is generally considered irregular when:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The gap between cycles varies by more than 7–9 days each month</li>
                <li>Periods stop for three months or longer (without pregnancy)</li>
                <li>Bleeding is unusually light, heavy, or prolonged</li>
                <li>Periods occur more than once in a single month</li>
                <li>There's frequent spotting between cycles</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Occasional irregularity — say, once or twice a year due to travel, illness, or stress — usually isn't a concern. But when it becomes a repeating pattern, it's a signal that something in the body's hormonal system needs attention.
              </p>
            </div>

            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Period Irregularity
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. PCOS (Polycystic Ovary Syndrome)
                  </h3>
                  <p className="text-gray-700">
                    PCOS is the single most common cause of irregular periods in young women today. It disrupts ovulation, which in turn affects cycle regularity. Along with irregular periods, PCOS often presents with weight gain, acne, excess facial or body hair, and difficulty conceiving.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Thyroid Dysfunction
                  </h3>
                  <p className="text-gray-700">
                    Both an underactive (hypothyroid) and overactive (hyperthyroid) thyroid gland can throw off the menstrual cycle. Thyroid hormones directly influence the hormones responsible for ovulation, so even a mild imbalance can cause noticeable cycle irregularity.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Stress and Mental Health
                  </h3>
                  <p className="text-gray-700">
                    Chronic stress affects the hypothalamus, the part of the brain that regulates reproductive hormones. High stress levels — from work, relationships, academic pressure, or major life changes — can delay or completely skip a period.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Sudden Weight Changes
                  </h3>
                  <p className="text-gray-700">
                    Rapid weight loss or weight gain, extreme dieting, or excessive exercise can disrupt hormone production enough to cause missed or irregular periods. Both being significantly underweight and being overweight can affect cycle regularity.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Perimenopause
                  </h3>
                  <p className="text-gray-700">
                    For women in their late 30s or 40s, irregular periods can be an early sign of perimenopause, the transitional phase before menopause, when hormone levels naturally start to fluctuate.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Uterine Fibroids and Polyps
                  </h3>
                  <p className="text-gray-700">
                    Non-cancerous growths in or around the uterus can cause irregular bleeding patterns, spotting between periods, or unusually heavy flow.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Medication and Contraceptive Use
                  </h3>
                  <p className="text-gray-700">
                    Starting or stopping birth control, certain hormonal medications, or specific long-term prescriptions can temporarily or persistently affect cycle regularity.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    8. Undiagnosed Medical Conditions
                  </h3>
                  <p className="text-gray-700">
                    In some cases, irregular periods can be linked to conditions like diabetes, chronic liver or kidney disease, or eating disorders, which affect the body's overall hormonal balance.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Symptoms That Should Prompt a Doctor's Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Symptoms That Should Prompt a Doctor's Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>No period for 90 days or more (excluding pregnancy)</li>
                <li>Periods suddenly becoming much heavier or lighter than usual</li>
                <li>Severe pain along with irregular cycles</li>
                <li>Irregular periods accompanied by excessive hair growth, acne, or weight gain</li>
                <li>Spotting or bleeding between periods</li>
                <li>Irregular cycles along with difficulty conceiving</li>
                <li>Fatigue, hair thinning, or unexplained weight changes alongside irregular periods (possible thyroid signs)</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If any of these apply to you consistently, it's best to consult a gynaecologist rather than waiting it out.
              </p>
            </div>

            {/* Section 5 — How Period Irregularity Is Diagnosed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Period Irregularity Is Diagnosed
              </h2>

              <p className="text-gray-700 mb-4">
                An accurate diagnosis is the first step toward effective treatment. Common diagnostic methods include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Detailed menstrual history:</strong> Tracking cycle length, flow, and associated symptoms over several months</li>
                <li><strong>Hormonal blood tests:</strong> Checking thyroid function, prolactin, LH, FSH, and androgen levels</li>
                <li><strong>Pelvic ultrasound (2D/3D):</strong> To examine the ovaries and uterus and check for cysts, fibroids, or structural issues</li>
                <li><strong>Blood sugar and insulin resistance testing:</strong> Often relevant in PCOS cases</li>
                <li><strong>Hysteroscopy:</strong> Used when structural causes like polyps are suspected</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A proper diagnostic workup helps the doctor understand exactly why the cycle is irregular, rather than treating the symptom without addressing the root cause.
              </p>
            </div>

            {/* Section 6 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Irregular Periods
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment is tailored to the underlying cause and can include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Lifestyle modification:</strong> Balanced nutrition, regular physical activity, adequate sleep, and stress reduction, which can significantly improve mild to moderate irregularity</li>
                <li><strong>Hormonal therapy:</strong> Birth control pills or other hormonal medications to regulate the cycle and manage PCOS symptoms</li>
                <li><strong>Thyroid management:</strong> Medication to correct thyroid hormone levels, which often restores cycle regularity within a few months</li>
                <li><strong>Weight management support:</strong> Guided nutrition and fitness plans when weight is a contributing factor</li>
                <li><strong>Surgical intervention:</strong> For fibroids or polyps that are causing irregular bleeding, typically performed using minimally invasive laparoscopic or hysteroscopic techniques</li>
                <li><strong>Fertility-focused treatment:</strong> For women trying to conceive, ovulation induction and monitoring may be recommended alongside cycle regulation</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Most cases of period irregularity respond well to a combination of lifestyle changes and targeted medical treatment, especially when addressed early rather than after years of delay.
              </p>
            </div>

            {/* Section 7 — Why Timely Treatment Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Timely Treatment for Irregular Periods Matters
              </h2>

              <p className="text-gray-700">
                Ignoring irregular periods for an extended period can lead to complications beyond just an unpredictable cycle. Untreated PCOS, for instance, is linked to long-term risks including insulin resistance, difficulty conceiving, and increased risk of endometrial issues over time. Similarly, undiagnosed thyroid problems can affect metabolism, heart health, and pregnancy outcomes. Getting evaluated early means the underlying cause can often be managed with simpler, less invasive treatment — rather than requiring more complex intervention later.
              </p>
            </div>

            {/* Section 8 — Choosing the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing the Right Doctor for Period Irregularity in Moradabad
              </h2>

              <p className="text-gray-700">
                Because irregular periods can stem from so many different causes — hormonal, structural, lifestyle-related, or a combination — the right doctor needs to combine strong diagnostic skills with genuine patience to listen through a woman's full history before recommending treatment. In Moradabad, access to a specialist who offers both advanced diagnostic tools and a comfortable, judgment-free consultation experience makes a real difference in how quickly and effectively the problem gets resolved.
              </p>
            </div>

            {/* Section 9 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Irregular Periods and Hormonal Health Specialist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is a well-established gynaecologist in Moradabad known for treating menstrual irregularities, PCOS, thyroid-related cycle issues, fibroids, and fertility concerns. According to her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, her clinic offers a comprehensive range of services relevant to period irregularity treatment, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li><strong>3D/4D ultrasound and AI-assisted imaging:</strong> For accurate diagnosis of ovarian and uterine conditions</li>
                <li><strong>Hormonal assessment and PCOS management:</strong> Tailored to each patient's specific hormone profile</li>
                <li><strong>Diagnostic and therapeutic hysteroscopy:</strong> For uterine polyps or structural causes of irregular bleeding</li>
                <li><strong>3D laparoscopic surgery:</strong> For fibroids or cysts contributing to cycle irregularity, using minimally invasive techniques with faster recovery</li>
                <li><strong>Fertility evaluation and IVF services:</strong> Including a GERI time-lapse embryo incubator, for patients whose irregular cycles are affecting conception</li>
                <li><strong>Antenatal, postnatal, and high-risk pregnancy care</strong></li>
              </ul>

              <p className="text-gray-700 mb-4">
                The clinic follows a &quot;Her Health First&quot; approach, where every consultation begins with listening carefully to the patient's history and concerns before recommending any diagnostic tests or treatment path. This is particularly important for irregular period cases, where the cause is rarely obvious without a thorough conversation and examination. Patient testimonials on the website reflect a consistently supportive and respectful consultation experience. The clinic is located in Gandhi Nagar, Moradabad, and is easily accessible from most parts of the city.
              </p>
            </div>

            {/* Section 10 — Lifestyle Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Tips to Support Cycle Regularity
              </h2>

              <p className="text-gray-700 mb-4">
                Alongside medical treatment, these habits can support a more regular menstrual cycle over time:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Maintain a consistent sleep schedule of 7–8 hours</li>
                <li>Eat a balanced diet with adequate protein, iron, and healthy fats</li>
                <li>Exercise moderately and consistently, avoiding extremes in either direction</li>
                <li>Manage stress through relaxation techniques, yoga, or mindfulness</li>
                <li>Maintain a healthy, stable body weight rather than frequent extreme dieting</li>
                <li>Limit excessive caffeine and processed food intake</li>
                <li>Track your cycle using an app or diary to identify patterns early</li>
              </ul>

              <p className="text-gray-700 mt-4">
                These habits support treatment but shouldn't be relied on as a substitute for medical evaluation when irregularity persists.
              </p>
            </div>

            {/* Section 11 — Myths About Irregular Periods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Myths About Irregular Periods
              </h2>

              <p className="text-gray-700 mb-4">
                A lot of confusion around irregular periods comes from misinformation. Clearing up a few common myths can help women make better decisions about when to seek care:
              </p>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li><strong>&quot;Irregular periods are always caused by stress and will fix themselves.&quot;</strong> Stress is a real factor, but if irregularity continues for several months, it's important to rule out PCOS, thyroid issues, or other underlying causes rather than assuming it will resolve on its own.</li>
                <li><strong>&quot;Birth control pills are the only solution for irregular periods.&quot;</strong> Hormonal pills can regulate cycles, but they don't address the root cause. In many cases, treating the underlying condition — such as thyroid imbalance or PCOS — is a better long-term approach.</li>
                <li><strong>&quot;Irregular periods aren't a big deal if you're not trying to conceive.&quot;</strong> Even if pregnancy isn't a current goal, irregular cycles can indicate a hormonal imbalance that affects overall health, bone density, and long-term fertility.</li>
                <li><strong>&quot;Only overweight women get PCOS-related irregular periods.&quot;</strong> PCOS can occur in women of any body type, so a normal weight doesn't rule it out as a cause.</li>
                <li><strong>&quot;Once your periods are irregular, they'll always stay that way.&quot;</strong> With the right diagnosis and treatment, most women see significant improvement in cycle regularity within a few months.</li>
              </ul>
            </div>

            {/* Section 12 — When to See a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When to See a Doctor Without Delay
              </h2>

              <p className="text-gray-700">
                If your periods have been irregular for more than three consecutive cycles, if you've missed periods for 90 days or longer without being pregnant, or if irregularity is accompanied by pain, excessive hair growth, or difficulty conceiving, it's time to book a consultation rather than wait and see. Early evaluation almost always leads to simpler, more effective treatment.
              </p>
            </div>

            {/* Section 13 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Information – Book Your Appointment
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
                        Uttar Pradesh – 244001
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
                        www.gynaecologistmoradabad.com
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

            {/* Section 14 — FAQs */}
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