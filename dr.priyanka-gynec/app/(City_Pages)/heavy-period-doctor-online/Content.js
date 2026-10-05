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

export default function HeavyPeriodDoctorOnlineMoradabad() {
  const faqs = [
    {
      q: "Can I consult a heavy period doctor online?",
      a: "Yes, in many cases for guidance and report review. Confirm available options with the clinic.",
    },
    {
      q: "Does Dr. Priyanka offer video consultation?",
      a: "The website lists phone, WhatsApp and email. Please confirm video options by calling.",
    },
    {
      q: "Can online doctors diagnose heavy periods?",
      a: "They can guide you, but tests and examination are often needed for a diagnosis.",
    },
    {
      q: "Is it safe to buy period medicines online?",
      a: "Only use medicines prescribed by a qualified doctor after reviewing your history.",
    },
    {
      q: "When must I visit in person?",
      a: "For severe bleeding, pain, bleeding after menopause or if tests and procedures are needed.",
    },
    {
      q: "What should I share online?",
      a: "Cycle details, medicines, past reports and scans.",
    },
    {
      q: "Do heavy periods always need surgery?",
      a: "No. Many women improve with medicines or a hormonal IUD.",
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
                Heavy Period Doctor Online: What You Can Do From Home and When You Must Visit
              </h1>

              <p className="mb-4 text-gray-700">
                Busy schedules, travel time and embarrassment stop many women
                from visiting a clinic. So it is natural to search for a heavy
                period doctor online. Talking to a gynaecologist from home feels
                private, quick and convenient.
              </p>

              <p className="text-gray-700">
                Online guidance can genuinely help with heavy periods, but it
                has limits. Some problems need an examination, a scan or a blood
                test. This guide explains what an online consultation can do,
                what it cannot, how to prepare and how to reach Dr. Priyanka
                Gynaec in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Online Means */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does &quot;Online Doctor for Heavy Periods&quot; Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                Online care can take several forms.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Video consultation: A live video call with the doctor</li>
                <li>Phone consultation: A voice call to discuss symptoms and reports</li>
                <li>WhatsApp or chat guidance: Sharing reports and getting written advice</li>
                <li>Email review: Sending reports for an opinion</li>
                <li>Online second opinion: A doctor reviews your existing reports and treatment plan</li>
                <li>Appointment booking online: Booking an in-person visit through a website or messaging app</li>
              </ul>

              <p className="text-gray-700">
                Each clinic decides which formats it offers. Always ask which
                one is available.
              </p>
            </div>

            {/* Section 3 — Why Women Look Online */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Look for a Heavy Period Doctor Online
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Privacy: Many women feel shy discussing periods</li>
                <li>Convenience: No travel, waiting rooms or time off work</li>
                <li>Distance: Women living in other cities want expert advice</li>
                <li>Quick guidance: Early advice about whether the symptoms are urgent</li>
                <li>Second opinions: Review of a diagnosis or surgery advice</li>
                <li>Follow-up care: Checking treatment progress without repeated visits</li>
                <li>Comfort: Speaking from a familiar place</li>
              </ul>
            </div>

            {/* Section 4 — What Online Can Do */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Can an Online Consultation Do for Heavy Periods?
              </h2>

              <p className="mb-4 text-gray-700">
                Online consultations can be useful for the following.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Information and Guidance
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Understanding whether your symptoms count as heavy</li>
                <li>Learning possible causes in simple language</li>
                <li>Deciding how urgent your situation is</li>
                <li>Knowing which tests you should get done locally</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Review of Existing Reports
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests such as haemoglobin, ferritin and thyroid</li>
                <li>Previous ultrasound reports</li>
                <li>Old prescriptions and treatment history</li>
                <li>Pap smear reports</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Treatment Planning
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discussing treatment options at a general level</li>
                <li>Reviewing the response to current medicines</li>
                <li>Planning follow-up after treatment</li>
                <li>Preparing for an in-person visit</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ongoing Support
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow-up after medical treatment</li>
                <li>Advice on side effects</li>
                <li>Diet and lifestyle guidance</li>
                <li>Help with cycle tracking</li>
              </ul>
            </div>

            {/* Section 5 — What Online Cannot Do */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What an Online Consultation Cannot Do
              </h2>

              <p className="mb-4 text-gray-700">
                Honest clinics explain these limits clearly.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>No physical or pelvic examination</li>
                <li>No ultrasound or hysteroscopy</li>
                <li>No blood sampling or tissue biopsy</li>
                <li>No insertion of a hormonal IUD</li>
                <li>No surgery or procedures</li>
                <li>Limited ability to rule out serious causes without tests</li>
                <li>Not suitable for emergencies</li>
              </ul>

              <p className="text-gray-700">
                Heavy bleeding often needs an in-person assessment at some
                stage. Online care works best as a first step or a support tool,
                not a replacement for a full evaluation.
              </p>
            </div>

            {/* Section 6 — Medicines Online */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is It Safe to Get Medicines Online?
              </h2>

              <p className="mb-4 text-gray-700">
                Be careful here. Heavy period treatment should match your
                diagnosis.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Safer Practices
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Take only medicines prescribed by a qualified doctor who has reviewed your history</li>
                <li>Share all current medicines and allergies</li>
                <li>Mention any history of blood clots, migraines, liver disease or hormone-sensitive conditions</li>
                <li>Follow dosage and duration exactly</li>
                <li>Report side effects promptly</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Avoid
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Buying hormonal pills or tranexamic acid without a prescription</li>
                <li>Following advice from social media without a doctor&apos;s review</li>
                <li>Using leftover medicines from friends or family</li>
                <li>Delaying proper tests because medicines seem to help</li>
              </ul>
            </div>

            {/* Section 7 — Who Is Suitable */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is Suitable for an Online Consultation?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Often Suitable
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Women with mild to moderate heavy periods and stable health</li>
                <li>Women who already have recent reports and want interpretation</li>
                <li>Patients seeking a second opinion on an existing plan</li>
                <li>Women in follow-up after an in-person diagnosis</li>
                <li>Women who need guidance on preparing for a visit</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Better Seen in Person
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>First-time heavy bleeding with severe symptoms</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Bleeding after menopause</li>
                <li>Severe pain</li>
                <li>Signs of significant anaemia</li>
                <li>A lump or heaviness in the lower abdomen</li>
                <li>Trying to conceive with abnormal bleeding</li>
                <li>Any situation where tests or examination are needed</li>
              </ul>
            </div>

            {/* Section 8 — Emergency */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Warning Signs: Do Not Wait Online
              </h2>

              <p className="mb-4 text-gray-700">
                Go to the nearest hospital immediately if you have:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Soaking more than one pad per hour for two hours or more</li>
                <li>Fainting, severe weakness or confusion</li>
                <li>Heavy bleeding during pregnancy</li>
                <li>Severe one-sided abdominal pain with bleeding</li>
                <li>Fever with foul-smelling discharge</li>
                <li>Chest pain or severe breathlessness</li>
              </ul>

              <p className="text-gray-700">
                An online chat is not a substitute for emergency care.
              </p>
            </div>

            {/* Section 9 — Preparation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for an Online Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Good preparation makes the session more useful.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Track Your Cycle
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Dates of your last 3 periods</li>
                <li>Number of pads or tampons used per day</li>
                <li>Size and frequency of clots</li>
                <li>Bleeding between periods</li>
                <li>Pain levels and any changes in pattern</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Collect Your Health Details
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Current medicines and supplements</li>
                <li>Allergies</li>
                <li>Previous surgeries and pregnancies</li>
                <li>Contraception, including IUDs</li>
                <li>Family history of bleeding disorders, thyroid disease or fibroids</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Prepare Your Documents
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear photos or scans of ultrasound reports</li>
                <li>Blood tests, especially haemoglobin, ferritin and thyroid</li>
                <li>Old prescriptions</li>
                <li>Pap smear results</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Set Up Your Space
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Choose a quiet, private place</li>
                <li>Check your internet connection and phone battery</li>
                <li>Keep your reports within reach</li>
                <li>Use headphones if you want more privacy</li>
                <li>Keep a pen and paper for notes</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Prepare Your Questions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What could be causing my heavy bleeding?</li>
                <li>Which tests should I get done?</li>
                <li>Is it safe to try medicines now?</li>
                <li>When do I need an in-person visit?</li>
                <li>How will this affect my chances of pregnancy?</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Sample Message You Can Send on WhatsApp
              </h3>

              <p className="mb-4 text-gray-700">
                Hello, I would like to consult Dr. Priyanka about heavy periods.
                My name is ___, age ___. My periods have been heavy for ___
                months. Do you offer phone or video consultation? Please share
                the process and timings.
              </p>

              <p className="text-gray-700">
                Keep the message short. Avoid sharing sensitive photos until the
                clinic confirms a secure way to do so.
              </p>
            </div>

            {/* Section 10 — After Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens After an Online Consultation?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Advice on tests: Blood tests and pelvic ultrasound at a local lab or at the clinic</li>
                <li>Medicine plan: If suitable and safe after review</li>
                <li>Follow-up: A repeat discussion once reports are available</li>
                <li>In-person visit: If examination, hysteroscopy or a procedure is needed</li>
                <li>Written summary: Ask for notes for your records</li>
              </ul>
            </div>

            {/* Section 11 — Privacy */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy and Safety Tips for Online Medical Advice
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Use official clinic numbers and websites</li>
                <li>Avoid sending reports to unknown accounts</li>
                <li>Do not share bank details over chat</li>
                <li>Ask how your information will be stored</li>
                <li>Keep your own copies of reports</li>
                <li>Be careful with unverified apps and social media &quot;doctors&quot;</li>
                <li>Verify the doctor&apos;s name, qualifications and registration</li>
              </ul>
            </div>

            {/* Section 12 — Why Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Consider Dr. Priyanka Gynaec in Moradabad
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Patient-first philosophy: &quot;Her Health First&quot; guides every consultation</li>
                <li>Experienced gynaecologist: Dr. Priyanka Pachauri focuses on menstrual disorders, high-risk pregnancies, fertility and laparoscopic surgery</li>
                <li>Advanced technology: High-definition 3D laparoscopy and 3D/4D ultrasound for accurate diagnosis</li>
                <li>Complete care under one roof: Medicines, hysteroscopy, polypectomy, myomectomy, endometriosis surgery and hysterectomy</li>
                <li>Fertility-friendly planning: Options consider your pregnancy goals</li>
                <li>Continuity of care: The team remembers your history and monitors progress</li>
                <li>Clear communication: Options and risks are explained simply</li>
                <li>Multiple contact options: Phone, WhatsApp and email</li>
                <li>Central location: A2, Near Old Roadways, Gandhi Nagar, Moradabad</li>
              </ul>
            </div>

            {/* Section 13 — Treatment Options */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options You May Discuss
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tranexamic acid: Reduces bleeding during periods</li>
                <li>NSAID painkillers: Ease cramps and may reduce flow</li>
                <li>Hormonal pills or progesterone therapy: Regulate and lighten cycles</li>
                <li>Iron and vitamin supplements: Correct anaemia</li>
                <li>Hormonal IUD (LNG-IUS): Reduces bleeding significantly over time</li>
                <li>Hysteroscopic polypectomy: Removes polyps without cuts</li>
                <li>Laparoscopic myomectomy: Removes fibroids while keeping the uterus</li>
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
              </ul>
            </div>

            {/* Section 14 — Diet and Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Tips You Can Start Today
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
                <li>Pair iron foods with vitamin C</li>
                <li>Avoid tea or coffee right after meals</li>
                <li>Rest and stay hydrated</li>
                <li>Use a heat pack for cramps</li>
                <li>Keep a period diary</li>
                <li>Avoid aspirin unless your doctor approves</li>
                <li>Do not start hormonal pills on your own</li>
              </ul>
            </div>

            {/* Section 15 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Online Gynaecology Advice
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Myth:</strong> Online advice is enough for every heavy period problem.
                  <br />
                  <strong>Fact:</strong> Many cases need tests, scans or examination.
                </p>

                <p>
                  <strong>Myth:</strong> Online doctors can diagnose without reports.
                  <br />
                  <strong>Fact:</strong> Reports and history greatly improve accuracy.
                </p>

                <p>
                  <strong>Myth:</strong> Buying medicines online is always safe.
                  <br />
                  <strong>Fact:</strong> Only prescribed, appropriate medicines should be used.
                </p>

                <p>
                  <strong>Myth:</strong> In-person visits are unnecessary after online advice.
                  <br />
                  <strong>Fact:</strong> Persistent or severe bleeding needs physical evaluation.
                </p>
              </div>
            </div>

            {/* Section 16 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment Today
              </h2>

              <p className="mb-6 text-black">
                Start with a call or WhatsApp message. The clinic team can guide
                you on the best way to consult.
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
