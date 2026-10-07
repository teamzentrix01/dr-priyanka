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

export default function HeavyPeriodDoctorAppointmentMoradabad() {
  const faqs = [
    {
      q: "How do I book a heavy period doctor appointment?",
      a: "Call +91 90797 65578, WhatsApp +91 89796 70705, email, or use the website.",
    },
    {
      q: "When should I book an appointment?",
      a: "If heavy bleeding lasts 2–3 cycles or causes tiredness, pain or clots.",
    },
    {
      q: "Can I visit while I am bleeding?",
      a: "Yes. Call the clinic first so they can guide you.",
    },
    {
      q: "What should I bring?",
      a: "Old reports, medicine list, period dates and any scans.",
    },
    {
      q: "Will I need a pelvic examination?",
      a: "Only if the doctor feels it is necessary, with your consent.",
    },
    {
      q: "Which tests may be advised?",
      a: "Blood tests, thyroid tests and a pelvic ultrasound.",
    },
    {
      q: "Do heavy periods always need surgery?",
      a: "No. Many women improve with medicines or a hormonal IUD.",
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
                Heavy Period Doctor Appointment: How to Book, Prepare and What to Expect
              </h1>

              <p className="mb-4 text-gray-700">
                You have decided that your heavy periods are not something to
                &quot;just manage&quot; anymore. That is a big step. Now the
                practical questions begin: When should I book? What should I
                tell the doctor? What will happen during the visit? Will it be
                embarrassing?
              </p>

              <p className="text-gray-700">
                This guide answers all of this. It explains how to book a heavy
                period doctor appointment, how to prepare, what to expect and
                how to follow up. It also shows how to reach Dr. Priyanka Gynaec
                in Moradabad.
              </p>
            </div>

            {/* Section 2 — Should You Book */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Should You Book an Appointment? Quick Self-Check
              </h2>

              <p className="mb-4 text-gray-700">
                Book a consultation if any of these sound familiar:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You soak a pad or tampon every 1–2 hours</li>
                <li>Your periods last longer than 7 days</li>
                <li>You pass clots larger than a coin</li>
                <li>You use double protection to avoid leaks</li>
                <li>You wake at night to change pads</li>
                <li>You feel tired, dizzy, breathless or notice hair fall</li>
                <li>Your periods have suddenly become heavier</li>
                <li>You bleed between periods or after intercourse</li>
                <li>You have severe period pain</li>
                <li>You are trying to conceive and have heavy cycles</li>
                <li>Over-the-counter medicines are not helping</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Not Wait?
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding can cause anaemia</li>
                <li>Early diagnosis makes treatment simpler</li>
                <li>Conditions like fibroids and polyps are easier to manage when found early</li>
                <li>You regain energy, sleep and confidence sooner</li>
              </ul>
            </div>

            {/* Section 3 — Appointment or Emergency */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Appointment or Emergency? Know the Difference
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Book a Regular Appointment If:
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy periods have continued for two or more cycles</li>
                <li>Your flow is heavier than usual but you feel stable</li>
                <li>You have fatigue or pain but can function</li>
                <li>You want diagnosis, tests or a treatment plan</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Seek Emergency Care Immediately If:
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You soak more than one pad per hour for two hours or more</li>
                <li>You feel faint, confused or extremely weak</li>
                <li>You are pregnant and bleeding heavily</li>
                <li>You have severe one-sided abdominal pain with bleeding</li>
                <li>You have fever with foul-smelling discharge</li>
              </ul>

              <p className="text-gray-700">
                Do not wait for an appointment in these cases. Go to the nearest
                hospital.
              </p>
            </div>

            {/* Section 4 — How to Book */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book Your Heavy Period Doctor Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Booking should be simple. Here are the usual options.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Option 1: Phone Call
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Call the clinic during working hours</li>
                <li>Mention that your concern is heavy periods</li>
                <li>Ask for available dates and timings</li>
                <li>Confirm the address and what to bring</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Option 2: WhatsApp
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Send a short message with your name, age and concern</li>
                <li>Ask for the earliest available slot</li>
                <li>Share your preferred time</li>
                <li>Useful if you are shy or cannot talk freely</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Option 3: Email
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Write your name, phone number and a brief description of symptoms</li>
                <li>Mention previous reports, if any</li>
                <li>Wait for the clinic&apos;s confirmation</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Option 4: Website
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Use the &quot;Book Appointment&quot; or Contact page</li>
                <li>Fill in your details and concern</li>
                <li>Keep your phone available for confirmation</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Option 5: Walk-In
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Possible at some clinics, but waiting times may be longer</li>
                <li>Calling ahead is safer to avoid wasted travel</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Sample WhatsApp Message You Can Send
              </h3>

              <p className="mb-4 text-gray-700">
                Hello, I would like to book an appointment with Dr. Priyanka for
                heavy periods. My name is ___, age ___. My periods have been
                heavy for ___ months. Please share the available timings.
              </p>

              <p className="text-gray-700">
                Keep it short and clear. The clinic team can guide you from
                there.
              </p>
            </div>

            {/* Section 5 — Best Time */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Best Time to Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Many women ask whether they should visit during their period.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding right now: Tell the clinic. Some tests or examinations may be planned differently</li>
                <li>Not bleeding currently: You can still go. The doctor will rely on your history, tests and ultrasound</li>
                <li>Planning an ultrasound or hysteroscopy: The doctor may suggest a particular day of your cycle</li>
                <li>General advice: Do not delay the visit only because of your cycle. Call and ask</li>
              </ul>
            </div>

            {/* Section 6 — Preparation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Good preparation saves time and helps the doctor reach the right
                diagnosis faster.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Track Your Cycle
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the start and end dates of your last 3 periods</li>
                <li>Estimate how many pads or tampons you use per day</li>
                <li>Record clot sizes and any bleeding between periods</li>
                <li>Mention pain levels and any change from your usual pattern</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Write Down Your Health Details
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Current medicines and supplements</li>
                <li>Any allergies</li>
                <li>Previous surgeries or procedures</li>
                <li>Previous pregnancies, miscarriages or deliveries</li>
                <li>Family history of bleeding disorders, thyroid disease, fibroids or cancer</li>
                <li>Contraception you use, including IUDs</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Bring Your Documents
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous ultrasound reports</li>
                <li>Blood tests such as haemoglobin and thyroid</li>
                <li>Old prescriptions</li>
                <li>Pap smear reports, if available</li>
                <li>Photo ID and any appointment confirmation message</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Prepare Your Questions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What is causing my heavy bleeding?</li>
                <li>Which tests do I need?</li>
                <li>What are my treatment options?</li>
                <li>Will this affect my chances of pregnancy?</li>
                <li>How soon should I improve?</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Practical Tips for the Day
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wear comfortable, loose clothing</li>
                <li>Carry sanitary pads and a spare set of clothes</li>
                <li>Eat normally unless the clinic advises otherwise</li>
                <li>Arrive 10–15 minutes early</li>
                <li>Bring a family member or friend if it makes you feel comfortable</li>
              </ul>
            </div>

            {/* Section 7 — During Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During the Consultation?
              </h2>

              <p className="mb-4 text-gray-700">
                Many women feel nervous. Knowing the steps can help you relax.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Friendly Conversation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The doctor asks about your cycles, flow, clots and pain</li>
                <li>You can speak openly. Doctors discuss these topics every day</li>
                <li>Your information stays confidential</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Medical History
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Past illnesses, medicines and surgeries</li>
                <li>Pregnancy plans and contraception</li>
                <li>Family history</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Physical Examination
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>General check for pallor, weight and blood pressure</li>
                <li>Abdominal examination</li>
                <li>Pelvic examination only if needed, explained before it begins</li>
                <li>You can ask questions or request a pause at any time</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Tests and Scans
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests: Haemoglobin, ferritin, thyroid and clotting tests</li>
                <li>Pelvic ultrasound (3D/4D where available): Looks for fibroids, polyps, cysts and adenomyosis</li>
                <li>Hysteroscopy or biopsy: Only if the doctor feels it is necessary</li>
                <li>Pap smear: If it is due</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Explanation and Plan
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The likely cause in simple language</li>
                <li>Treatment options, from medicines to procedures</li>
                <li>Expected timeline for improvement</li>
                <li>Follow-up date</li>
              </ul>
            </div>

            {/* Section 8 — Treatment Paths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Treatment Paths You May Discuss
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor will suggest options based on your reports, age and
                family plans.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Medicines: Tranexamic acid, hormonal pills, progesterone therapy and pain relief</li>
                <li>Iron and vitamins: To correct anaemia and restore energy</li>
                <li>Hormonal IUD (LNG-IUS): Reduces bleeding significantly over time</li>
                <li>Hysteroscopic procedures: Polyp removal without cuts</li>
                <li>Laparoscopic surgery: Fibroid removal, cyst removal and endometriosis treatment through small incisions</li>
                <li>Hysterectomy: Considered only when other options fail and childbearing is complete</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Keyhole Surgery Benefits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Smaller scars</li>
                <li>Less pain</li>
                <li>Shorter hospital stay</li>
                <li>Faster recovery</li>
                <li>Lower infection risk</li>
              </ul>
            </div>

            {/* Section 9 — Fears */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Fears About Gynaecology Visits (And Reality)
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Fear:</strong> &quot;It will be embarrassing.&quot;
                  <br />
                  <strong>Reality:</strong> Gynaecologists treat these issues daily and aim to make you comfortable.
                </p>

                <p>
                  <strong>Fear:</strong> &quot;They will insist on an examination.&quot;
                  <br />
                  <strong>Reality:</strong> Examinations are done only when necessary, with your consent.
                </p>

                <p>
                  <strong>Fear:</strong> &quot;I will be told to have surgery.&quot;
                  <br />
                  <strong>Reality:</strong> Most women start with medicines or non-surgical options.
                </p>

                <p>
                  <strong>Fear:</strong> &quot;I should wait until my period ends.&quot;
                  <br />
                  <strong>Reality:</strong> Call the clinic. You can usually be guided on timing.
                </p>

                <p>
                  <strong>Fear:</strong> &quot;My problem is not serious enough.&quot;
                  <br />
                  <strong>Reality:</strong> If it disturbs your life, it deserves attention.
                </p>
              </div>
            </div>

            {/* Section 10 — Why Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Book with Dr. Priyanka Gynaec in Moradabad?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Patient-first philosophy: &quot;Her Health First&quot; shapes every consultation</li>
                <li>Experienced gynaecologist: Dr. Priyanka Pachauri focuses on menstrual disorders, high-risk pregnancies, fertility and laparoscopic surgery</li>
                <li>Advanced technology: High-definition 3D laparoscopy and 3D/4D ultrasound</li>
                <li>Complete care under one roof: Diagnosis, medicines, procedures and surgery</li>
                <li>Fertility-friendly planning: Treatment options consider your pregnancy goals</li>
                <li>Continuity of care: The team remembers your history and follows your progress</li>
                <li>Clear communication: Options, risks and benefits are explained simply</li>
                <li>Easy booking: Phone, WhatsApp and email</li>
                <li>Convenient location: A2, Near Old Roadways, Gandhi Nagar, Moradabad</li>
              </ul>
            </div>

            {/* Section 11 — After Appointment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Your Appointment: What Next?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Follow the Plan
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Take medicines exactly as prescribed</li>
                <li>Complete recommended tests on time</li>
                <li>Continue iron supplements for the advised duration</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Keep Tracking
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain your period diary</li>
                <li>Note changes in flow, pain or energy</li>
                <li>Share the diary at your next visit</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Know When to Call the Clinic
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding becomes much heavier</li>
                <li>Severe pain or dizziness appears</li>
                <li>You develop fever or foul-smelling discharge</li>
                <li>You experience side effects from medicines</li>
                <li>You have questions about your reports</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Keep Your Follow-Up
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow-up visits show how well treatment is working</li>
                <li>Plans can be adjusted if needed</li>
                <li>Skipping follow-up may delay recovery</li>
              </ul>
            </div>

            {/* Section 12 — Diet and Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Tips While You Wait for Your Appointment
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
                <li>Rest when your body needs it</li>
                <li>Stay hydrated</li>
                <li>Use a heat pack for cramps</li>
                <li>Avoid aspirin unless your doctor approves</li>
                <li>Do not start hormonal pills on your own</li>
              </ul>
            </div>

            {/* Section 13 — Special Situations */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Situations
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Are a Teenager
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bring a parent or guardian</li>
                <li>Mention whether heavy bleeding started with your first period</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Are Trying to Conceive
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tell the doctor early</li>
                <li>Treatment will be chosen to protect fertility</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Are Near Menopause
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mention hot flushes, irregular cycles or sleep changes</li>
                <li>The doctor may check the uterine lining carefully</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Are Travelling from Another City
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Call or WhatsApp first to confirm timing</li>
                <li>Bring all previous reports</li>
                <li>Ask whether tests can be done on the same day</li>
                <li>Ask about phone follow-up to reduce repeat trips</li>
              </ul>
            </div>

            {/* Section 14 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment Today
              </h2>

              <p className="mb-6 text-black">
                Do not let another cycle control your life. A short conversation
                can help you take the first step.
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
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynaec@gmail.com
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

            {/* Section 15 — FAQs */}
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
