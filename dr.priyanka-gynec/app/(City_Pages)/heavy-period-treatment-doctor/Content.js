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

export default function HeavyPeriodTreatmentDoctorMoradabad() {
  const faqs = [
    {
      q: "What is the first treatment for heavy periods?",
      a: "Usually medicines such as tranexamic acid, hormonal therapy and iron supplements.",
    },
    {
      q: "Can heavy periods be treated without surgery?",
      a: "Yes. Most women improve with medicines or a hormonal IUD.",
    },
    {
      q: "How long does treatment take to work?",
      a: "Many women see improvement within 2–3 cycles.",
    },
    {
      q: "When is surgery needed?",
      a: "When fibroids, polyps or endometriosis cause symptoms, or medicines fail.",
    },
    {
      q: "What is keyhole surgery?",
      a: "Surgery through small cuts using a camera, with less pain and quicker recovery.",
    },
    {
      q: "Will treatment affect my chances of pregnancy?",
      a: "Most treatments do not. Share your family plans with your doctor.",
    },
    {
      q: "Can heavy periods cause anaemia?",
      a: "Yes. Ongoing blood loss lowers iron and haemoglobin.",
    },
    {
      q: "Does Dr. Priyanka treat heavy periods in Moradabad?",
      a: "Yes. She offers diagnosis, medical care and advanced laparoscopic procedures.",
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
                Heavy Period Treatment Doctor: From Medicines to Keyhole Surgery in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                If heavy periods are controlling your calendar, your energy and
                your confidence, you want more than advice. You want effective
                treatment. Finding the right heavy period treatment doctor means
                finding someone who explains your options clearly, starts with
                the gentlest effective approach and has the skills to go further
                if needed.
              </p>

              <p className="text-gray-700">
                This guide walks you through the full treatment journey, from a
                first consultation to medicines, hormonal options, procedures
                and advanced laparoscopic surgery. It also explains recovery and
                follow-up, and how Dr. Priyanka Gynaec in Moradabad approaches
                care.
              </p>
            </div>

            {/* Section 2 — What Does Doctor Do */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does a Heavy Period Treatment Doctor Do?
              </h2>

              <p className="mb-4 text-gray-700">
                A good doctor does not just stop the bleeding for one cycle. The
                aim is lasting relief.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Identifies the cause of your heavy bleeding</li>
                <li>Treats anaemia and protects your overall health</li>
                <li>Chooses treatment according to your age, symptoms and pregnancy plans</li>
                <li>Starts with the least invasive effective option</li>
                <li>Explains benefits, risks and alternatives honestly</li>
                <li>Monitors results and adjusts the plan when needed</li>
                <li>Offers surgery only when it is truly the best option</li>
              </ul>
            </div>

            {/* Section 3 — Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Do You Need Treatment? Signs of Heavy Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Heavy menstrual bleeding (menorrhagia) is excessive blood loss
                that disrupts your normal life.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Signs
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods lasting longer than 7 days</li>
                <li>Changing a pad or tampon every 1–2 hours</li>
                <li>Using double protection</li>
                <li>Passing clots larger than a coin</li>
                <li>Waking at night to change protection</li>
                <li>Fatigue, dizziness, hair fall or breathlessness</li>
                <li>Avoiding work, travel or exercise during periods</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Early Treatment Matters
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Prevents iron-deficiency anaemia</li>
                <li>Detects fibroids, polyps and thyroid issues early</li>
                <li>Keeps treatment simple and less invasive</li>
                <li>Improves sleep, mood and productivity</li>
                <li>Protects fertility and long-term health</li>
              </ul>
            </div>

            {/* Section 4 — Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 1: Diagnosis Before Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                Effective treatment starts with an accurate diagnosis.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Information Your Doctor Will Collect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycle length, duration and number of pads used</li>
                <li>Pain, clots and bleeding between periods</li>
                <li>Medicines, past surgeries and family history</li>
                <li>Your plans for pregnancy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Tests
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood count and ferritin: Detect anaemia and low iron stores</li>
                <li>Thyroid profile: Rules out thyroid imbalance</li>
                <li>Hormone tests: Useful if PCOS is suspected</li>
                <li>Clotting profile: If a bleeding disorder is possible</li>
                <li>Pelvic ultrasound (3D/4D where available): Finds fibroids, polyps, cysts and adenomyosis</li>
                <li>Hysteroscopy: Camera examination inside the uterus</li>
                <li>Endometrial biopsy: Tissue sampling when the lining needs assessment</li>
              </ul>
            </div>

            {/* Section 5 — Medical Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 2: Medical Treatment (First Choice for Many Women)
              </h2>

              <p className="mb-4 text-gray-700">
                Most women begin with medicines. They are effective,
                non-surgical and often fertility-friendly.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tranexamic Acid
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Taken only during heavy bleeding days</li>
                <li>Reduces blood loss by helping clots form</li>
                <li>Does not affect hormones</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                NSAID Painkillers
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ease cramps and period pain</li>
                <li>May reduce flow modestly</li>
                <li>Should be taken with food and only as advised</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal Pills and Progesterone Therapy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regulate irregular cycles</li>
                <li>Thin the uterine lining</li>
                <li>Help control sudden or prolonged bleeding</li>
                <li>Chosen according to your health and pregnancy plans</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Iron and Vitamin Supplements
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Correct anaemia and restore energy</li>
                <li>Taken for several weeks to months</li>
                <li>Levels are rechecked to confirm recovery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Treating the Root Condition
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid medication for thyroid imbalance</li>
                <li>PCOS management with lifestyle changes and medicines</li>
                <li>Review of medicines that may increase bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What to Expect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Many women notice improvement within 2–3 cycles</li>
                <li>Your doctor may adjust doses or change medicines</li>
                <li>Regular follow-up ensures safety and good results</li>
              </ul>
            </div>

            {/* Section 6 — Hormonal IUD */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 3: Hormonal IUD (LNG-IUS)
              </h2>

              <p className="mb-4 text-gray-700">
                A hormonal intrauterine system is one of the most effective
                non-surgical treatments.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How It Works
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A small T-shaped device is placed inside the uterus</li>
                <li>It releases a low dose of hormone locally</li>
                <li>It thins the lining and reduces bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Can greatly reduce monthly blood loss</li>
                <li>Works for several years</li>
                <li>Doubles as reliable contraception</li>
                <li>Fertility returns after removal</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Things to Know
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular spotting is common in the first few months</li>
                <li>Some women have very light or no periods</li>
                <li>Placement is a short procedure done by a gynaecologist</li>
              </ul>
            </div>

            {/* Section 7 — Minimally Invasive Procedures */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 4: Minimally Invasive Procedures
              </h2>

              <p className="mb-4 text-gray-700">
                When imaging or symptoms point to a structural cause, a simple
                procedure may be the answer.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Diagnostic Hysteroscopy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A thin camera is passed through the cervix</li>
                <li>Allows direct view of the uterine cavity</li>
                <li>Helps detect polyps, fibroids and lining abnormalities</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hysteroscopic Polypectomy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Removes uterine polyps through the cervix</li>
                <li>No cuts on the abdomen</li>
                <li>Short recovery, often day-care</li>
                <li>Can reduce abnormal bleeding and improve fertility chances</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Endometrial Ablation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reduces the uterine lining in selected women</li>
                <li>Suitable only for those who have completed their families</li>
                <li>Requires prior evaluation to rule out serious lining conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Dilation and Curettage (D&amp;C)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sometimes used for diagnosis or short-term bleeding control</li>
                <li>Not a long-term solution on its own</li>
              </ul>
            </div>

            {/* Section 8 — Laparoscopic Surgery */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 5: Laparoscopic (Keyhole) Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Some conditions need surgery for lasting relief. Keyhole surgery
                offers precision with minimal trauma.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Myomectomy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Removes fibroids while preserving the uterus</li>
                <li>Ideal for women who want to keep fertility options</li>
                <li>Reduces heavy bleeding and pressure symptoms</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Cystectomy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Removes ovarian cysts</li>
                <li>Protects healthy ovarian tissue and fertility</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Endometriosis Excision
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Removes endometriosis tissue</li>
                <li>Relieves pelvic pain and bleeding</li>
                <li>Requires an experienced laparoscopic surgeon</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Hysterectomy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Removes the uterus through small incisions</li>
                <li>Considered when other treatments have failed or are unsuitable</li>
                <li>Suitable only after childbearing is complete</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Advantages of Keyhole Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Small incisions and minimal scarring</li>
                <li>Less pain after surgery</li>
                <li>Shorter hospital stay</li>
                <li>Faster return to daily activities</li>
                <li>Lower risk of wound infection</li>
                <li>High-definition 3D vision for precise surgery</li>
              </ul>
            </div>

            {/* Section 9 — Choosing Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                The best option depends on your situation.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Factors Your Doctor Will Consider
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The exact cause of your bleeding</li>
                <li>Your age and general health</li>
                <li>Severity of symptoms and anaemia</li>
                <li>Whether you want to become pregnant</li>
                <li>Your response to earlier treatment</li>
                <li>Your personal preferences</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Quick Guide
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hormonal imbalance or PCOS: Medicines, lifestyle changes and hormonal therapy</li>
                <li>Heavy flow without a visible cause: Tranexamic acid or hormonal IUD</li>
                <li>Polyps: Hysteroscopic polypectomy</li>
                <li>Fibroids: Medicines, myomectomy or other procedures depending on size and location</li>
                <li>Adenomyosis or endometriosis: Hormonal treatment or laparoscopic surgery</li>
                <li>Completed family and failed treatment: Ablation or hysterectomy may be discussed</li>
              </ul>
            </div>

            {/* Section 10 — Recovery */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery and Aftercare
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Medical Treatment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Track your cycle and flow</li>
                <li>Take medicines exactly as prescribed</li>
                <li>Attend follow-up visits</li>
                <li>Report severe side effects promptly</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Minor Procedures (Hysteroscopy, Polypectomy)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild cramps and spotting for a few days</li>
                <li>Usually return to normal activity within 1–2 days</li>
                <li>Avoid intercourse and tampons until your doctor says it is safe</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Laparoscopic Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Short hospital stay, often 1–2 days depending on the procedure</li>
                <li>Gentle walking encourages recovery</li>
                <li>Avoid heavy lifting and strenuous exercise for the period advised</li>
                <li>Return to desk work usually within 1–2 weeks, depending on the surgery</li>
                <li>Follow-up visit to review healing and results</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Call Your Doctor If You Notice
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding or large clots after treatment</li>
                <li>Fever or chills</li>
                <li>Severe or worsening pain</li>
                <li>Foul-smelling discharge</li>
                <li>Redness or discharge from incision sites</li>
              </ul>
            </div>

            {/* Section 11 — Why Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                If you are looking for a heavy period treatment doctor, here is
                what women value:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Patient-first philosophy: &quot;Her Health First&quot; guides every decision</li>
                <li>Experienced gynaecologist: Dr. Priyanka Pachauri is known for menstrual disorder care, high-risk pregnancy management and laparoscopic surgery</li>
                <li>Advanced technology: High-definition 3D laparoscopy and 3D/4D ultrasound</li>
                <li>Complete treatment range: Medicines, hysteroscopy, polypectomy, myomectomy, cystectomy, endometriosis surgery and hysterectomy</li>
                <li>Fertility-friendly options: Plans are made with your pregnancy goals in mind</li>
                <li>Continuity of care: The same team follows your history and progress</li>
                <li>Clear communication: Benefits, risks and alternatives are explained in simple language</li>
                <li>Easy access: Phone and WhatsApp appointment booking</li>
                <li>Central location: A2, Near Old Roadways, Gandhi Nagar, Moradabad</li>
              </ul>
            </div>

            {/* Section 12 — Diet and Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Support During Treatment
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Iron-Rich Foods
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Spinach, methi and other leafy greens</li>
                <li>Lentils, chickpeas and rajma</li>
                <li>Dates, raisins and jaggery</li>
                <li>Beetroot, pomegranate and amla</li>
                <li>Eggs, fish or lean meat if non-vegetarian</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Helpful Habits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pair iron with vitamin C for better absorption</li>
                <li>Avoid tea or coffee right after meals</li>
                <li>Walk or practise gentle yoga</li>
                <li>Sleep 7–8 hours and manage stress</li>
                <li>Maintain a healthy weight</li>
                <li>Keep a monthly period diary</li>
                <li>Avoid aspirin unless advised by your doctor</li>
                <li>Never self-medicate with hormonal pills</li>
              </ul>
            </div>

            {/* Section 13 — Fertility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment and Fertility
              </h2>

              <p className="mb-4 text-gray-700">
                Many women worry that treatment may affect pregnancy. In most
                cases, options exist to protect fertility.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tranexamic acid and many medicines: Used while keeping fertility intact</li>
                <li>Hormonal IUD: Fertility returns after removal</li>
                <li>Polypectomy: May improve chances of conception</li>
                <li>Myomectomy: Preserves the uterus</li>
                <li>Hysterectomy and ablation: Only for women who have completed their families</li>
              </ul>

              <p className="text-gray-700">
                Dr. Priyanka Gynaec also provides fertility and IVF care, so
                menstrual and conception goals can be handled together.
              </p>
            </div>

            {/* Section 14 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Heavy Period Treatment
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Myth:</strong> Hysterectomy is the only permanent cure.
                  <br />
                  <strong>Fact:</strong> Many women are treated without removing the uterus.
                </p>

                <p>
                  <strong>Myth:</strong> Hormonal treatment is unsafe.
                  <br />
                  <strong>Fact:</strong> When prescribed correctly, it is widely used and well studied.
                </p>

                <p>
                  <strong>Myth:</strong> Heavy periods will settle on their own.
                  <br />
                  <strong>Fact:</strong> Some do, but persistent cases need evaluation.
                </p>

                <p>
                  <strong>Myth:</strong> Surgery means a long recovery.
                  <br />
                  <strong>Fact:</strong> Keyhole surgery often allows quick recovery.
                </p>

                <p>
                  <strong>Myth:</strong> Tiredness is just stress.
                  <br />
                  <strong>Fact:</strong> It may be anaemia from blood loss.
                </p>
              </div>
            </div>

            {/* Section 15 — Emergency */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Go to the nearest hospital immediately if you have:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Soaking more than one pad per hour for 2 hours or more</li>
                <li>Fainting, severe weakness or confusion</li>
                <li>Heavy bleeding during pregnancy</li>
                <li>Severe one-sided abdominal pain with bleeding</li>
                <li>Fever with foul-smelling discharge</li>
              </ul>
            </div>

            {/* Section 16 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment Today
              </h2>

              <p className="mb-6 text-black">
                You do not need to live with heavy periods. A consultation can
                give you a clear diagnosis and a treatment plan that fits your
                life.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Contact Dr. Priyanka Gynaec</p>
                    <p className="text-black">Doctor: Dr. Priyanka Pachauri</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone (Appointments)</p>
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

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
                    </p>
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

            {/* Section 17 — FAQs */}
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
