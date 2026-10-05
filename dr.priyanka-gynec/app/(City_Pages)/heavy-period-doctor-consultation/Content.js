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

export default function HeavyPeriodDoctorConsultationMoradabad() {
  const faqs = [
    {
      q: "What happens in a heavy period consultation?",
      a: "The doctor asks about your cycles and health, examines if needed, and advises tests and treatment.",
    },
    {
      q: "When should I book a consultation?",
      a: "If heavy bleeding lasts 2–3 cycles or causes tiredness, pain or clots.",
    },
    {
      q: "Will I need a pelvic examination?",
      a: "Only if the doctor feels it is necessary, and with your consent.",
    },
    {
      q: "What should I bring?",
      a: "Old reports, medicine list, period dates and any scans.",
    },
    {
      q: "Which tests may be advised?",
      a: "Blood tests, thyroid tests and a pelvic ultrasound. Hysteroscopy is added if needed.",
    },
    {
      q: "Will I be advised surgery on the first visit?",
      a: "Not usually. Most women start with medicines or non-surgical options.",
    },
    {
      q: "Can I consult during my period?",
      a: "Yes. Call the clinic first so they can guide you.",
    },
    {
      q: "Will treatment affect my chances of pregnancy?",
      a: "Most treatments do not. Share your plans with your doctor.",
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
                Heavy Period Doctor Consultation: What Is Asked, Examined and Decided
              </h1>

              <p className="mb-4 text-gray-700">
                You have noticed that your periods are heavier than they should
                be. You may have waited for months, hoping it would settle. Now
                you are ready for a heavy period doctor consultation, but you
                may be wondering what actually happens inside the consulting
                room.
              </p>

              <p className="text-gray-700">
                This guide takes you through the consultation step by step: the
                questions the doctor will ask, what the examination involves,
                which tests may follow, how decisions are made together and what
                you should leave with. It also shows how to reach Dr. Priyanka
                Gynaec in Moradabad.
              </p>
            </div>

            {/* Section 2 — Why Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Consultation Is the Right First Step
              </h2>

              <p className="mb-4 text-gray-700">
                Heavy bleeding is a symptom with many possible causes. A
                consultation helps in several ways.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirms whether your bleeding is truly heavy</li>
                <li>Identifies the likely cause</li>
                <li>Checks whether you are anaemic</li>
                <li>Rules out serious but uncommon conditions</li>
                <li>Separates problems that need treatment from those that need only monitoring</li>
                <li>Gives you a plan that fits your age, health and family goals</li>
                <li>Answers questions that internet searches cannot</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Signs It Is Time to Book
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods lasting longer than 7 days</li>
                <li>Changing a pad or tampon every 1–2 hours</li>
                <li>Passing clots larger than a coin</li>
                <li>Using double protection</li>
                <li>Waking at night to change protection</li>
                <li>Tiredness, dizziness, hair fall or breathlessness</li>
                <li>A sudden change in your usual flow</li>
                <li>Bleeding between periods or after intercourse</li>
              </ul>
            </div>

            {/* Section 3 — Consultation Structure */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Structure of a Good Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                A well-run consultation usually follows a clear sequence.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Welcome and comfort: Setting a relaxed tone</li>
                <li>Your story: Letting you explain in your own words</li>
                <li>Focused questions: Gathering detail on your cycles and health</li>
                <li>Examination: Only what is needed, with your consent</li>
                <li>Investigations: Tests that fit your situation</li>
                <li>Explanation: The likely cause and what it means</li>
                <li>Options: Choices explained with benefits and risks</li>
                <li>Shared decision: The plan you agree on</li>
                <li>Follow-up: A clear next step and timeline</li>
              </ul>
            </div>

            {/* Section 4 — Your Story */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Part 1: Your Story, in Your Words
              </h2>

              <p className="mb-4 text-gray-700">
                Good doctors begin by listening. You may be asked something
                like, &quot;What brought you here today?&quot;
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Helpful Things to Mention
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>How long the heavy bleeding has been going on</li>
                <li>Whether it started suddenly or gradually</li>
                <li>How it affects work, sleep, travel and daily life</li>
                <li>What you have already tried</li>
                <li>What worries you most</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Do Not Hold Back
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Embarrassment is common, but doctors discuss periods every day</li>
                <li>Small details can change the diagnosis</li>
                <li>Honest information leads to safer treatment</li>
              </ul>
            </div>

            {/* Section 5 — Questions */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Part 2: The Questions the Doctor Will Ask
              </h2>

              <p className="mb-4 text-gray-700">
                Expect structured questions. Knowing them in advance helps you
                prepare.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                About Your Periods
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>First day of your last period</li>
                <li>How regular your cycles are</li>
                <li>How many days you bleed</li>
                <li>How many pads or tampons you use per day</li>
                <li>Whether you pass clots, and how large</li>
                <li>Whether you leak onto clothes or bedding</li>
                <li>Whether you wake at night to change protection</li>
                <li>Any bleeding between periods or after intercourse</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                About Pain and Other Symptoms
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Period pain and its severity</li>
                <li>Pain during intercourse</li>
                <li>Pelvic pressure, bloating or a feeling of heaviness</li>
                <li>Frequent urination or constipation</li>
                <li>Fatigue, dizziness or breathlessness</li>
                <li>Hair fall, weight changes or skin changes</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                About Your Medical History
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid problems, diabetes or high blood pressure</li>
                <li>Previous surgeries or procedures</li>
                <li>Bleeding tendencies such as frequent nosebleeds or easy bruising</li>
                <li>Family history of heavy periods, bleeding disorders, fibroids or cancers</li>
                <li>Current medicines, supplements and allergies</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                About Your Reproductive Plans
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous pregnancies, miscarriages or deliveries</li>
                <li>Whether you want to become pregnant now or in the future</li>
                <li>Contraception you use, including IUDs</li>
                <li>Date of your last Pap smear</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why These Questions Matter
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>They point toward hormonal, structural or clotting causes</li>
                <li>They help select the safest treatments</li>
                <li>They decide which tests are needed</li>
                <li>They protect your fertility plans</li>
              </ul>
            </div>

            {/* Section 6 — Examination */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Part 3: The Examination
              </h2>

              <p className="mb-4 text-gray-700">
                Not every woman needs a full pelvic examination at the first
                visit. The doctor decides based on your history.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                General Check
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood pressure and pulse</li>
                <li>Signs of anaemia such as pale skin or nails</li>
                <li>Weight and general condition</li>
                <li>Thyroid check, if relevant</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Abdominal Examination
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Looks for tenderness or a lump in the lower abdomen</li>
                <li>Helps detect an enlarged uterus or large fibroids</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pelvic Examination, If Needed
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Explained before it begins</li>
                <li>Done with privacy and a female attendant if you prefer</li>
                <li>Can be paused or stopped if you feel uncomfortable</li>
                <li>Helps check the cervix, uterus size and tenderness</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Your Rights During Examination
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You can ask for an explanation at every step</li>
                <li>You can request a chaperone</li>
                <li>You can say stop at any time</li>
                <li>Your privacy is respected</li>
              </ul>
            </div>

            {/* Section 7 — Tests */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Part 4: Tests the Doctor May Suggest
              </h2>

              <p className="mb-4 text-gray-700">
                Tests are chosen to answer specific questions. A good doctor
                does not order everything for everyone.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Blood Tests
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Complete blood count: Checks haemoglobin and detects anaemia</li>
                <li>Serum ferritin: Shows iron stores</li>
                <li>Thyroid profile: Rules out thyroid imbalance</li>
                <li>Hormone tests: Useful if PCOS or other hormonal causes are suspected</li>
                <li>Clotting profile: If a bleeding disorder is possible</li>
                <li>Pregnancy test: To rule out pregnancy-related bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Imaging
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pelvic ultrasound (3D/4D where available): Looks for fibroids, polyps, cysts, adenomyosis and lining thickness</li>
                <li>MRI: Only in selected complex cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Procedures
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hysteroscopy: A thin camera looks inside the uterus</li>
                <li>Endometrial biopsy: A small tissue sample to check the lining</li>
                <li>Pap smear: If cervical screening is due</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ask These Questions About Each Test
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Why is this test needed?</li>
                <li>What will it tell us?</li>
                <li>Is it needed today or can it wait?</li>
                <li>How should I prepare?</li>
                <li>When will the results be ready?</li>
              </ul>
            </div>

            {/* Section 8 — Explanation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Part 5: How the Doctor Explains the Cause
              </h2>

              <p className="mb-4 text-gray-700">
                After history, examination and reports, the doctor connects the
                dots.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Explanations You May Hear
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hormonal imbalance: PCOS, thyroid disease or perimenopause</li>
                <li>Fibroids: Muscle growths in the uterine wall</li>
                <li>Polyps: Soft growths in the uterine lining</li>
                <li>Adenomyosis: Lining tissue growing into the uterine muscle</li>
                <li>Endometriosis: Lining-like tissue outside the uterus</li>
                <li>Bleeding disorder: A tendency to bleed more than normal</li>
                <li>Medicine-related: Blood thinners or certain hormonal drugs</li>
                <li>No clear structural cause: Sometimes called dysfunctional bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What a Good Explanation Sounds Like
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Simple language without confusing jargon</li>
                <li>A clear link between your symptoms and the cause</li>
                <li>Honest discussion of uncertainty when tests are pending</li>
                <li>Time for your questions</li>
              </ul>
            </div>

            {/* Section 9 — Treatment Options */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Part 6: Treatment Options Discussed in the Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment should match your cause, age and goals. The doctor
                usually starts with the gentlest effective option.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medicines
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tranexamic acid: Reduces bleeding during periods</li>
                <li>NSAID painkillers: Ease cramps and may reduce flow</li>
                <li>Hormonal pills or progesterone therapy: Regulate and lighten cycles</li>
                <li>Iron and vitamin supplements: Correct anaemia</li>
                <li>Thyroid or PCOS treatment: For the underlying condition</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal IUD (LNG-IUS)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Releases a small hormone dose inside the uterus</li>
                <li>Reduces bleeding significantly over time</li>
                <li>Lasts several years and provides contraception</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Minimally Invasive Procedures
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diagnostic hysteroscopy</li>
                <li>Hysteroscopic polypectomy to remove polyps without cuts</li>
                <li>Endometrial ablation for selected women who have completed their families</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic (Keyhole) Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myomectomy: Removes fibroids while keeping the uterus</li>
                <li>Cystectomy: Removes ovarian cysts and protects fertility</li>
                <li>Endometriosis excision: Relieves pain and bleeding</li>
                <li>Hysterectomy: Considered only when other options fail and childbearing is complete</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of Keyhole Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Small incisions and minimal scarring</li>
                <li>Less pain after surgery</li>
                <li>Shorter hospital stay</li>
                <li>Faster recovery</li>
                <li>Lower infection risk</li>
              </ul>
            </div>

            {/* Section 10 — Shared Decision */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Part 7: Making the Decision Together
              </h2>

              <p className="mb-4 text-gray-700">
                Modern consultations are about shared decisions, not orders.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Shared Decision-Making Looks Like
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The doctor explains all reasonable options</li>
                <li>You describe your priorities, such as fertility, recovery time or avoiding surgery</li>
                <li>Risks and benefits are discussed honestly</li>
                <li>You can ask for time to think</li>
                <li>You can ask for a second opinion</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Questions to Ask Before You Agree to a Plan
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What do you think is causing my bleeding?</li>
                <li>What are all my options, including non-surgical ones?</li>
                <li>What are the benefits and risks of each?</li>
                <li>How soon will I notice improvement?</li>
                <li>How will this affect my chances of pregnancy?</li>
                <li>What happens if this does not work?</li>
                <li>What follow-up will I need?</li>
              </ul>
            </div>

            {/* Section 11 — What You Leave With */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Part 8: What You Should Leave With
              </h2>

              <p className="mb-4 text-gray-700">
                By the end of the consultation, you should have:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A clear understanding of the probable cause</li>
                <li>A list of tests, if any, and when to do them</li>
                <li>A written prescription or treatment plan</li>
                <li>Instructions on how to take medicines and what side effects to expect</li>
                <li>Diet and lifestyle advice</li>
                <li>Warning signs that need urgent attention</li>
                <li>A follow-up date</li>
                <li>Contact details for questions</li>
              </ul>
            </div>

            {/* Section 12 — After Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Part 9: After the Consultation
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Follow the Plan
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Take medicines exactly as prescribed</li>
                <li>Complete tests on time</li>
                <li>Continue iron supplements for the advised duration</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Keep Tracking
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain a period diary</li>
                <li>Note flow, pain, tiredness and side effects</li>
                <li>Bring the diary to your next visit</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Call the Clinic If
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding becomes much heavier</li>
                <li>You feel faint or severely weak</li>
                <li>You develop fever or foul-smelling discharge</li>
                <li>You have worrying side effects</li>
                <li>You do not understand your reports or instructions</li>
              </ul>
            </div>

            {/* Section 13 — Preparation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Consultation
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before the Visit
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the start and end dates of your last 3 periods</li>
                <li>Estimate how many pads you use each day</li>
                <li>Write down the size of clots and any bleeding between periods</li>
                <li>List your medicines, supplements and allergies</li>
                <li>Gather old ultrasound, blood and Pap smear reports</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                On the Day
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wear comfortable, loose clothing</li>
                <li>Carry sanitary pads and a spare set of clothes</li>
                <li>Arrive 10–15 minutes early</li>
                <li>Bring a family member or friend if you wish</li>
                <li>Bring your questions on paper</li>
              </ul>
            </div>

            {/* Section 14 — Fears */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Fears About Consultations
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Fear:</strong> &quot;It will be embarrassing.&quot;
                  <br />
                  <strong>Reality:</strong> Gynaecologists discuss these concerns daily and aim to make you comfortable.
                </p>

                <p>
                  <strong>Fear:</strong> &quot;I will be forced to have an internal examination.&quot;
                  <br />
                  <strong>Reality:</strong> Examinations are done only when necessary, with your consent.
                </p>

                <p>
                  <strong>Fear:</strong> &quot;They will recommend surgery immediately.&quot;
                  <br />
                  <strong>Reality:</strong> Most women begin with medicines or non-surgical options.
                </p>

                <p>
                  <strong>Fear:</strong> &quot;My problem is too minor.&quot;
                  <br />
                  <strong>Reality:</strong> If it disturbs your life, it deserves attention.
                </p>

                <p>
                  <strong>Fear:</strong> &quot;I should wait until my period ends.&quot;
                  <br />
                  <strong>Reality:</strong> Call the clinic. You can usually be guided on timing.
                </p>
              </div>
            </div>

            {/* Section 15 — Why Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Choose Dr. Priyanka Gynaec in Moradabad
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Patient-first philosophy: &quot;Her Health First&quot; means listening before acting</li>
                <li>Experienced gynaecologist: Dr. Priyanka Pachauri focuses on menstrual disorders, high-risk pregnancies, fertility and laparoscopic surgery</li>
                <li>Advanced diagnostics: 3D/4D ultrasound and hysteroscopy for accurate diagnosis</li>
                <li>Modern surgical care: High-definition 3D laparoscopy for fibroids, cysts, endometriosis and hysterectomy</li>
                <li>Fertility-friendly planning: Treatment options respect your pregnancy goals</li>
                <li>Complete care under one roof: Menstrual, fertility, pregnancy and surgical services</li>
                <li>Continuity of care: The team remembers your history and follows your progress</li>
                <li>Clear communication: Options, risks and benefits are explained simply</li>
                <li>Easy contact: Phone, WhatsApp and email</li>
              </ul>
            </div>

            {/* Section 16 — Diet and Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Tips Before Your Visit
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
                Healthy Habits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pair iron foods with vitamin C</li>
                <li>Avoid tea or coffee right after meals</li>
                <li>Rest and stay hydrated</li>
                <li>Use a heat pack for cramps</li>
                <li>Avoid aspirin unless your doctor approves</li>
                <li>Do not start hormonal pills on your own</li>
              </ul>
            </div>

            {/* Section 17 — Emergency */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Warning Signs: Do Not Wait for a Consultation
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

            {/* Section 18 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation Today
              </h2>

              <p className="mb-6 text-black">
                You do not need to plan your life around your period. One
                conversation can start the change.
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

            {/* Section 19 — FAQs */}
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
