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

export default function HeavyPeriodsSpecialistMoradabad() {
  const faqs = [
    {
      q: "Who is a heavy periods specialist?",
      a: "A gynaecologist experienced in diagnosing and treating menstrual disorders like menorrhagia.",
    },
    {
      q: "When should I see a specialist?",
      a: "If heavy bleeding lasts 2–3 cycles or causes tiredness, pain or clots.",
    },
    {
      q: "How do I find a specialist near me?",
      a: "Check credentials, services, patient reviews and Google Maps listings, then call to ask questions.",
    },
    {
      q: "What causes heavy periods?",
      a: "PCOS, thyroid issues, fibroids, polyps, adenomyosis, endometriosis and perimenopause.",
    },
    {
      q: "Do heavy periods need surgery?",
      a: "Not always. Many women improve with medicines or a hormonal IUD.",
    },
    {
      q: "Which tests are done?",
      a: "Blood tests, thyroid tests and ultrasound. Hysteroscopy may be added if needed.",
    },
    {
      q: "Will treatment affect fertility?",
      a: "Most treatments do not. Share your pregnancy plans with your doctor.",
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
                Heavy Periods Specialist Near Me: Find Expert Menorrhagia Care in Moradabad
              </h1>

              <p className="text-gray-700">
                When your periods become so heavy that you plan your days around
                them, a general check-up may not be enough. You need someone who
                understands menstrual disorders in depth. That is why so many
                women type &quot;heavy periods specialist near me&quot; into
                Google, hoping to find expert, local and trustworthy care.
              </p>
            </div>

            {/* Section 2 — Who Is Specialist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Heavy Periods Specialist?
              </h2>

              <p className="mb-4 text-gray-700">
                There is no separate degree called &quot;heavy periods
                specialist.&quot; In practice, the term usually refers to a
                gynaecologist with focused experience in menstrual disorders,
                also called abnormal uterine bleeding.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A True Specialist Typically Has:
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A postgraduate degree in obstetrics and gynaecology</li>
                <li>Regular experience treating menorrhagia, PCOS, fibroids, polyps and endometriosis</li>
                <li>Skills in diagnostic tools such as ultrasound and hysteroscopy</li>
                <li>Training in laparoscopic (keyhole) surgery for structural causes</li>
                <li>Familiarity with hormonal, medical and surgical treatments</li>
                <li>A habit of finding the cause, not just stopping the bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How a Specialist Differs from a General Doctor
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>General physician: Treats symptoms and anaemia, may prescribe basic medicines</li>
                <li>Gynaecologist: Diagnoses and treats the reproductive cause</li>
                <li>Laparoscopic gynaecologist: Also performs minimally invasive surgery when required</li>
                <li>Fertility specialist: Helps if heavy periods occur with difficulty conceiving</li>
              </ul>
            </div>

            {/* Section 3 — Understanding Heavy Periods */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Heavy Periods (Menorrhagia)
              </h2>

              <p className="mb-4 text-gray-700">
                Heavy menstrual bleeding is excessive blood loss that interferes
                with your physical, emotional or social life.
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
                <li>Fatigue, dizziness or breathlessness</li>
                <li>Avoiding work, travel or exercise because of bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How It Affects Your Life
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Missed workdays and reduced productivity</li>
                <li>Constant worry about leaks</li>
                <li>Disturbed sleep and low energy</li>
                <li>Strained relationships</li>
                <li>Anxiety, low mood and irritability</li>
              </ul>
            </div>

            {/* Section 4 — When to Visit */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Visit a Specialist?
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait for symptoms to become severe. See a specialist if
                you notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding for two or more consecutive cycles</li>
                <li>A sudden change from your usual flow</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Bleeding after menopause</li>
                <li>Signs of anaemia such as pallor, hair fall or palpitations</li>
                <li>Severe period pain</li>
                <li>Difficulty becoming pregnant</li>
                <li>Lower abdominal swelling, pressure or heaviness</li>
                <li>No relief from home remedies or over-the-counter medicines</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Emergency Warning Signs
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Soaking more than one pad per hour for two hours or more</li>
                <li>Feeling faint, confused or extremely weak</li>
                <li>Heavy bleeding during pregnancy</li>
                <li>Severe one-sided pelvic pain with bleeding</li>
                <li>Fever with foul-smelling discharge</li>
              </ul>

              <p className="text-gray-700">
                Go to the nearest hospital immediately if any of these occur.
              </p>
            </div>

            {/* Section 5 — Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Causes Heavy Periods? What a Specialist Looks For
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS and ovulation problems</li>
                <li>Thyroid disorders</li>
                <li>Perimenopause</li>
                <li>Adolescent hormonal immaturity</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Structural Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fibroids: Muscle growths that increase flow and cause pressure</li>
                <li>Polyps: Soft growths in the uterine lining</li>
                <li>Adenomyosis: Lining tissue growing into the uterine wall</li>
                <li>Endometriosis: Lining-like tissue outside the uterus</li>
                <li>Endometrial hyperplasia: Excessive thickening of the lining</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Other Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding or clotting disorders</li>
                <li>Copper IUD or blood-thinning medicines</li>
                <li>Pregnancy-related causes such as miscarriage</li>
                <li>Rarely, cervical or uterine cancer</li>
              </ul>
            </div>

            {/* Section 6 — Finding Specialist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Find a Genuine Heavy Periods Specialist Near You
              </h2>

              <p className="mb-4 text-gray-700">
                &quot;Near me&quot; results can include many clinics. Use these
                steps to separate real expertise from marketing.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Search Smartly
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Try &quot;gynaecologist for heavy periods&quot; plus your area name</li>
                <li>Check Google Maps for distance, photos and recent reviews</li>
                <li>Read the clinic website, especially service pages and blogs</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Verify Credentials
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Check degrees and registration with the medical council</li>
                <li>Look for additional training in laparoscopy or hysteroscopy</li>
                <li>Review About pages for experience and achievements</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Check Services
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the clinic treat menstrual disorders specifically?</li>
                <li>Are ultrasound, hysteroscopy and laparoscopy available?</li>
                <li>Can fertility and pregnancy care also be handled?</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Read Reviews Wisely
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Look for detailed stories, not just star ratings</li>
                <li>Notice comments about listening, clarity and follow-up</li>
                <li>Be careful with identical or over-the-top reviews</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Call and Ask Questions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>How soon can I get an appointment?</li>
                <li>Do you treat heavy menstrual bleeding regularly?</li>
                <li>What reports should I bring?</li>
                <li>Is WhatsApp follow-up available?</li>
              </ul>
            </div>

            {/* Section 7 — Red Flags */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags When Choosing a Specialist
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Calls heavy bleeding &quot;normal&quot; without any assessment</li>
                <li>Suggests hysterectomy immediately without exploring alternatives</li>
                <li>Does not explain the diagnosis or your options</li>
                <li>Pushes expensive packages you do not understand</li>
                <li>Ignores your plans for future pregnancy</li>
                <li>Gives no follow-up plan</li>
                <li>Rushes through the consultation</li>
              </ul>
            </div>

            {/* Section 8 — Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens at a Specialist Consultation?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before the Visit
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Note your last three period dates</li>
                <li>Estimate how many pads you use daily</li>
                <li>List medicines, supplements and past surgeries</li>
                <li>Bring old scans and blood reports</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During the Visit
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed conversation about your cycles, pain and lifestyle</li>
                <li>General and pelvic examination, if needed</li>
                <li>Explanation of likely causes in simple language</li>
                <li>Advice on tests</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After the Visit
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A personalised treatment plan</li>
                <li>Diet and iron guidance</li>
                <li>A follow-up date to review your progress</li>
              </ul>
            </div>

            {/* Section 9 — Tests */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests a Specialist May Recommend
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Complete blood count and ferritin: Detect anaemia and low iron stores</li>
                <li>Thyroid profile: Check for thyroid imbalance</li>
                <li>Hormone tests: Useful for suspected PCOS</li>
                <li>Clotting profile: If a bleeding disorder is suspected</li>
                <li>Pelvic ultrasound (3D/4D where available): Detects fibroids, polyps, cysts and adenomyosis</li>
                <li>Hysteroscopy: Direct camera view of the uterine cavity</li>
                <li>Endometrial biopsy: Tissue sample when needed</li>
                <li>Pap smear: If screening is due</li>
              </ul>

              <p className="text-gray-700">
                Only relevant tests should be advised, not a long list for
                everyone.
              </p>
            </div>

            {/* Section 10 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options from a Heavy Periods Specialist
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medicines
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tranexamic acid: Reduces bleeding during periods</li>
                <li>NSAID painkillers: Ease cramps and may reduce flow</li>
                <li>Hormonal pills or progesterone: Regulate and lighten cycles</li>
                <li>Iron and vitamin supplements: Correct anaemia</li>
                <li>Thyroid or PCOS medicines: Treat the underlying condition</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal IUD (LNG-IUS)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Releases a small hormone dose inside the uterus</li>
                <li>Reduces bleeding significantly over time</li>
                <li>Lasts several years and offers contraception</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Minimally Invasive Procedures
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diagnostic hysteroscopy: Examines the uterine cavity</li>
                <li>Hysteroscopic polypectomy: Removes polyps without cuts</li>
                <li>Endometrial ablation: For selected women who have completed their families</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic (Keyhole) Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myomectomy: Removes fibroids while keeping the uterus</li>
                <li>Cystectomy: Removes ovarian cysts while protecting fertility</li>
                <li>Endometriosis excision: Relieves pain and heavy bleeding</li>
                <li>Hysterectomy: A final option when other treatments fail and childbearing is complete</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Keyhole Surgery Is Often Preferred
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Small incisions and minimal scarring</li>
                <li>Less pain after surgery</li>
                <li>Shorter hospital stay</li>
                <li>Faster recovery</li>
                <li>Lower infection risk</li>
              </ul>
            </div>

            {/* Section 11 — Why Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Choose Dr. Priyanka Gynaec in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you are looking for a heavy periods specialist near you in
                Moradabad, here is what the clinic offers:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Patient-first philosophy: &quot;Her Health First&quot; guides every consultation</li>
                <li>Experienced gynaecologist: Dr. Priyanka Pachauri is known for menstrual disorder care, high-risk pregnancy management and laparoscopic surgery</li>
                <li>Advanced diagnostics: 3D/4D ultrasound and hysteroscopy for accurate diagnosis</li>
                <li>Modern surgical care: High-definition 3D laparoscopy for fibroids, cysts, endometriosis and hysterectomy</li>
                <li>Fertility-friendly approach: Treatment plans respect your pregnancy goals</li>
                <li>Complete care under one roof: Menstrual, fertility, pregnancy and surgical services</li>
                <li>Continuity of care: The team remembers your history and tracks your progress</li>
                <li>Clear communication: Options, risks and benefits are explained simply</li>
                <li>Easy booking: Phone and WhatsApp appointments</li>
                <li>Convenient location: A2, Near Old Roadways, Gandhi Nagar, Moradabad</li>
              </ul>
            </div>

            {/* Section 12 — Diet and Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Support
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
                <li>Pair iron-rich foods with vitamin C</li>
                <li>Avoid tea or coffee right after meals</li>
                <li>Walk or practise yoga regularly</li>
                <li>Sleep 7–8 hours and manage stress</li>
                <li>Maintain a healthy weight</li>
                <li>Keep a monthly period diary</li>
                <li>Take supplements only as prescribed</li>
                <li>Avoid aspirin unless your doctor approves</li>
              </ul>
            </div>

            {/* Section 13 — Fertility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Heavy Periods and Fertility
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS: Irregular ovulation is common, but treatable</li>
                <li>Fibroids and polyps: May affect implantation, and removal can help</li>
                <li>Endometriosis: Early expert care improves outcomes</li>
                <li>Adenomyosis: May reduce pregnancy chances in some women</li>
                <li>Anaemia: Correcting it prepares the body for pregnancy</li>
              </ul>

              <p className="text-gray-700">
                Because Dr. Priyanka Gynaec also offers fertility and IVF care,
                menstrual and conception goals can be addressed together.
              </p>
            </div>

            {/* Section 14 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Myth:</strong> Heavy periods are normal and must be tolerated.
                  <br />
                  <strong>Fact:</strong> Excessive bleeding is a treatable medical issue.
                </p>

                <p>
                  <strong>Myth:</strong> Only surgery can fix it.
                  <br />
                  <strong>Fact:</strong> Many women improve with medicines or a hormonal IUD.
                </p>

                <p>
                  <strong>Myth:</strong> It only affects older women.
                  <br />
                  <strong>Fact:</strong> Teenagers and young women are affected too.
                </p>

                <p>
                  <strong>Myth:</strong> It always means cancer.
                  <br />
                  <strong>Fact:</strong> Cancer is uncommon, but persistent abnormal bleeding should always be checked.
                </p>

                <p>
                  <strong>Myth:</strong> Tiredness is just stress.
                  <br />
                  <strong>Fact:</strong> It may be anaemia from blood loss.
                </p>
              </div>
            </div>

            {/* Section 15 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment Today
              </h2>

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

            {/* Section 16 — FAQs */}
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
