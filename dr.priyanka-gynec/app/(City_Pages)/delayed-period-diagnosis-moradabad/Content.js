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

export default function DelayedPeriodDiagnosisMoradabad() {
  const faqs = [
    {
      q: "Who provides accurate delayed period diagnosis in Moradabad?",
      a: "Dr. Priyanka Pachauri offers a structured, thorough diagnostic evaluation for delayed periods in Moradabad.",
    },
    {
      q: "What is the first test done for a delayed period?",
      a: "A pregnancy test is always the first step, as pregnancy is the most common cause of a missed period.",
    },
    {
      q: "What hormonal tests are commonly used for delayed period diagnosis?",
      a: "Thyroid function tests, prolactin, LH, FSH, and androgen levels are commonly checked.",
    },
    {
      q: "Is ultrasound necessary for diagnosing delayed periods?",
      a: "Yes, ultrasound helps evaluate the uterus and ovaries and is often combined with blood tests.",
    },
    {
      q: "How many months of delay should prompt testing?",
      a: "Generally, a delay persisting beyond 2–3 cycles or a complete absence for 3 months warrants evaluation.",
    },
    {
      q: "Can all causes of delayed periods be diagnosed with one visit?",
      a: "Initial evaluation often starts in one visit, but test results typically require a short follow-up to review findings.",
    },
    {
      q: "Is PCOS confirmed only through ultrasound?",
      a: "No, PCOS diagnosis combines clinical symptoms, hormonal blood tests, and ultrasound findings together.",
    },
    {
      q: "Will I get a clear explanation of my test results?",
      a: "Yes, Dr. Priyanka Pachauri explains all results and findings in clear, easy-to-understand terms.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Delayed Period Diagnosis in Moradabad: A Step-by-Step Guide by Dr. Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                When your period is late, the most important question is not just
                &quot;why,&quot; but &quot;how do we find out for sure?&quot; A proper delayed period
                diagnosis involves a structured process of tests and evaluations
                that rule out or confirm specific causes, rather than guesswork
                or assumptions.
              </p>

              <p className="text-gray-700">
                This guide walks you through exactly what a thorough diagnostic
                process for delayed periods looks like, what each test reveals,
                and how Dr. Priyanka Pachauri in Moradabad approaches this
                evaluation step by step.
              </p>
            </div>

            {/* Section 2 — Why a Proper Diagnosis Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Proper Diagnosis Matters More Than Guessing
              </h2>

              <p className="mb-4 text-gray-700">
                Many women try to self-diagnose the reason for a late period
                based on online searches or advice from friends, which often
                leads to confusion or unnecessary worry. A proper diagnostic
                process removes the guesswork.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirms or rules out pregnancy first, which is the most common and important first step</li>
                <li>Identifies the exact hormonal or structural cause rather than relying on assumptions</li>
                <li>Prevents unnecessary use of hormonal medication without knowing the real cause</li>
                <li>Helps distinguish between a one-time delay and a pattern needing long-term management</li>
                <li>Provides a clear basis for the most effective and targeted treatment</li>
                <li>Reduces anxiety by replacing uncertainty with concrete answers</li>
              </ul>
            </div>

            {/* Section 3 — Step 1 */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 1: Ruling Out Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Before any other diagnostic step, pregnancy must always be ruled
                out, as it is the single most common reason for a missed or
                delayed period.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A urine pregnancy test is typically the first and simplest step</li>
                <li>A blood test (beta-hCG) may be used for more sensitive or early detection</li>
                <li>If positive, further evaluation shifts toward confirming a healthy pregnancy via ultrasound</li>
                <li>If negative and the period remains delayed, the diagnostic process moves to the next stage</li>
              </ul>
            </div>

            {/* Section 4 — Step 2 */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 2: Detailed Medical and Menstrual History
              </h2>

              <p className="mb-4 text-gray-700">
                A thorough history-taking process helps your doctor narrow down
                likely causes before any tests are even run.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tracking your typical cycle length and any recent changes</li>
                <li>Noting the duration of the current delay and any similar past episodes</li>
                <li>Reviewing recent lifestyle factors such as stress, travel, weight changes, or diet shifts</li>
                <li>Checking for symptoms like acne, excess hair growth, or weight gain (possible PCOS indicators)</li>
                <li>Asking about fatigue, cold intolerance, or hair thinning (possible thyroid indicators)</li>
                <li>Reviewing any current medications, including hormonal contraceptives</li>
                <li>Discussing family history of PCOS, thyroid conditions, or early menopause</li>
              </ul>
            </div>

            {/* Section 5 — Step 3 */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 3: Physical and Pelvic Examination
              </h2>

              <p className="mb-4 text-gray-700">
                A physical examination helps assess general health indicators and
                any visible or palpable signs relevant to the delay.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>General physical examination, including weight and signs of hormonal imbalance</li>
                <li>Pelvic examination to check for any abnormalities in the uterus or ovaries</li>
                <li>Assessment for signs associated with PCOS, such as excess hair growth or skin changes</li>
                <li>Checking for any tenderness, swelling, or abnormal findings requiring further imaging</li>
              </ul>
            </div>

            {/* Section 6 — Step 4 */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 4: Ultrasound Evaluation
              </h2>

              <p className="mb-4 text-gray-700">
                Ultrasound imaging is one of the most important diagnostic tools
                for understanding what is happening internally.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Transvaginal or abdominal ultrasound to visualize the uterus and ovaries</li>
                <li>Checking for the presence of multiple small cysts, a common PCOS indicator</li>
                <li>Assessing the thickness of the uterine lining (endometrium)</li>
                <li>Ruling out structural causes like fibroids or polyps</li>
                <li>Evaluating ovarian size and follicle pattern</li>
                <li>Using 3D/4D imaging for more detailed visualization when needed</li>
              </ul>
            </div>

            {/* Section 7 — Step 5 */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 5: Hormonal Blood Tests
              </h2>

              <p className="mb-4 text-gray-700">
                Hormonal testing is often the most revealing part of a delayed
                period diagnosis, as it identifies the specific imbalance driving
                the irregularity.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid function tests (TSH, T3, T4) to check for hypothyroidism or hyperthyroidism</li>
                <li>Prolactin levels, as elevated prolactin can suppress ovulation and delay periods</li>
                <li>LH and FSH levels to assess ovarian function and detect hormonal imbalances like PCOS</li>
                <li>Testosterone and other androgen levels, often elevated in PCOS</li>
                <li>AMH (Anti-Müllerian Hormone) to assess ovarian reserve in certain cases</li>
                <li>Fasting insulin and blood sugar levels to assess insulin resistance, often linked to PCOS</li>
              </ul>
            </div>

            {/* Section 8 — Step 6 */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 6: Additional Testing When Needed
              </h2>

              <p className="mb-4 text-gray-700">
                In certain cases, further specialized testing may be required to
                reach a complete diagnosis.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diagnostic hysteroscopy if a uterine cause is strongly suspected</li>
                <li>MRI in complex cases involving structural abnormalities</li>
                <li>Karyotyping or genetic testing in rare cases of suspected chromosomal causes</li>
                <li>Referral to an endocrinologist if a complex hormonal condition is identified</li>
              </ul>
            </div>

            {/* Section 9 — Results */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Interpreting the Results: What Different Findings Mean
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal pregnancy test, normal hormones, recent stress or lifestyle change: Likely a temporary stress- or lifestyle-related delay</li>
                <li>Elevated androgens with multiple small ovarian cysts on ultrasound: Suggestive of PCOS</li>
                <li>Abnormal TSH levels: Points toward thyroid dysfunction as the underlying cause</li>
                <li>Elevated prolactin levels: May indicate a prolactin-related cause requiring further evaluation</li>
                <li>Thin or very thick uterine lining: May require further investigation depending on the clinical picture</li>
                <li>All tests normal with ongoing irregularity: May require extended monitoring or referral for specialized evaluation</li>
              </ul>
            </div>

            {/* Section 10 — Process Importance */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why This Step-by-Step Process Matters
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Avoids jumping to conclusions based on a single symptom or assumption</li>
                <li>Ensures treatment is targeted to the actual cause, not just the symptom of a late period</li>
                <li>Identifies conditions like PCOS or thyroid imbalance early, when they are easier to manage</li>
                <li>Provides a clear baseline for tracking improvement with treatment over time</li>
                <li>Reduces the anxiety of uncertainty by replacing it with clear, evidence-based answers</li>
              </ul>
            </div>

            {/* Section 11 — Doctor Approach */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Approaches Delayed Period Diagnosis
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri follows a structured, evidence-based
                diagnostic process in Moradabad, ensuring no step is skipped and
                no cause is overlooked.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Begins with a detailed history and pregnancy test, never skipping the basics</li>
                <li>Uses advanced 3D/4D ultrasound imaging for a clear internal picture</li>
                <li>Orders targeted hormonal tests based on your specific symptoms and history, avoiding unnecessary testing</li>
                <li>Explains each result in clear, understandable terms rather than medical jargon</li>
                <li>Builds a personalized treatment plan directly based on your diagnostic findings</li>
                <li>Schedules appropriate follow-up testing to track progress and confirm improvement</li>
              </ul>
            </div>

            {/* Section 12 — Better Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Accurate Diagnosis Leads to Better Treatment
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS-related delays respond well to targeted hormonal and lifestyle management once confirmed</li>
                <li>Thyroid-related delays often resolve once thyroid levels are corrected with appropriate treatment</li>
                <li>Stress-related delays may simply need monitoring and lifestyle support rather than medication</li>
                <li>Structural causes like fibroids or polyps may need a different treatment pathway altogether</li>
                <li>Skipping proper diagnosis often leads to repeated, ineffective treatment attempts</li>
              </ul>
            </div>

            {/* Section 13 — About Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced gynaecologist in
                Moradabad, recognized for her thorough, methodical approach to
                diagnosing menstrual irregularities.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gold medal credentials with international fellowship training</li>
                <li>Access to advanced diagnostic tools, including 3D/4D ultrasound and comprehensive hormonal testing</li>
                <li>Strong clinical experience distinguishing between PCOS, thyroid, and other causes of delayed periods</li>
                <li>Known for ordering only the tests that are truly necessary, avoiding unnecessary expense</li>
                <li>Clear, patient-friendly explanation of every test result and its implications</li>
                <li>Trusted by women across Moradabad for accurate, reliable diagnostic evaluation</li>
              </ul>
            </div>

            {/* Section 14 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Delayed Period Diagnosis
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Myth:</strong> A single ultrasound is enough to diagnose the cause of delayed periods.
                  <br />
                  <strong>Fact:</strong> Ultrasound is usually combined with hormonal blood tests for a complete diagnosis.
                </p>

                <p>
                  <strong>Myth:</strong> You should wait many months before getting tested.
                  <br />
                  <strong>Fact:</strong> Persistent delays beyond 2–3 cycles generally warrant evaluation.
                </p>

                <p>
                  <strong>Myth:</strong> All hormone tests need to be done on a specific day regardless of symptoms.
                  <br />
                  <strong>Fact:</strong> Timing of certain tests may be adjusted based on your cycle pattern and your doctor&apos;s clinical judgment.
                </p>

                <p>
                  <strong>Myth:</strong> If the pregnancy test is negative, no further testing is needed.
                  <br />
                  <strong>Fact:</strong> A negative pregnancy test is just the first step; further evaluation is often necessary to find the real cause.
                </p>

                <p>
                  <strong>Myth:</strong> PCOS can be diagnosed from ultrasound alone.
                  <br />
                  <strong>Fact:</strong> PCOS diagnosis typically requires a combination of clinical symptoms, blood tests, and ultrasound findings.
                </p>

                <p>
                  <strong>Myth:</strong> Diagnostic testing is expensive and unnecessary for a &quot;simple&quot; delay.
                  <br />
                  <strong>Fact:</strong> A doctor selects targeted, relevant tests based on your specific history to avoid unnecessary cost.
                </p>
              </div>
            </div>

            {/* Section 15 — Preparation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Diagnostic Consultation
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Track your cycle length and any symptoms for a few months before your visit, if possible</li>
                <li>Note any recent lifestyle changes, stress, or weight fluctuations</li>
                <li>List any current medications or supplements you are taking</li>
                <li>Be ready to discuss family history of PCOS, thyroid issues, or irregular cycles</li>
                <li>Come prepared with any previous test reports, if available</li>
                <li>Write down any questions or concerns you want to discuss during the consultation</li>
              </ul>
            </div>

            {/* Section 16 — Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A calm, private, and unhurried consultation environment</li>
                <li>A detailed discussion covering your history, symptoms, and concerns</li>
                <li>A clear explanation of which tests are recommended and why</li>
                <li>Honest, jargon-free interpretation of your results once available</li>
                <li>A personalized treatment plan based directly on your diagnostic findings</li>
                <li>A follow-up schedule to monitor your progress over time</li>
              </ul>
            </div>

            {/* Section 17 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Booking a Diagnostic Consultation
              </h2>

              <p className="mb-6 text-black">
                A delayed period deserves more than guesswork. It deserves a
                clear, step-by-step diagnostic process that identifies the real
                cause, whether it&apos;s pregnancy, PCOS, thyroid imbalance, stress,
                or something else entirely.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Clinic</p>
                    <p className="text-black">Dr. Priyanka Gynaec</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <div className="flex flex-wrap items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8979670705" className="hover:underline">
                        +91 89796 70705 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 18 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
