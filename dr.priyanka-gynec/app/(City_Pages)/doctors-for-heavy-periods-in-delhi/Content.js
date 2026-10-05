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

export default function DoctorsForHeavyPeriodsDelhi() {
  const faqs = [
    {
      q: "Which doctor should I see for heavy periods in Delhi?",
      a: "A qualified gynaecologist experienced in menstrual disorders and modern diagnostics.",
    },
    {
      q: "When should I consult a doctor?",
      a: "If heavy bleeding lasts 2–3 cycles or causes weakness, pain or clots.",
    },
    {
      q: "Is Dr. Priyanka's clinic in Delhi?",
      a: "No. It is in Moradabad, Uttar Pradesh, roughly a few hours from Delhi.",
    },
    {
      q: "Can I get a second opinion from Moradabad?",
      a: "Yes. Many women travel for a second opinion or laparoscopic care.",
    },
    {
      q: "Do heavy periods always need surgery?",
      a: "No. Many women improve with medicines or a hormonal IUD.",
    },
    {
      q: "What tests are done for heavy periods?",
      a: "Blood tests, thyroid tests and ultrasound. Hysteroscopy is added if needed.",
    },
    {
      q: "Can heavy periods cause anaemia?",
      a: "Yes. Ongoing blood loss lowers iron and haemoglobin.",
    },
    {
      q: "Will treatment affect pregnancy chances?",
      a: "Most treatments do not. Share your family plans with your doctor.",
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
                Doctors for Heavy Periods in Delhi: How to Choose the Right Specialist
              </h1>

              <p className="text-gray-700">
                Delhi has hundreds of gynaecologists, from large corporate
                hospitals to small neighbourhood clinics. That is good news, but
                it also makes choosing difficult. If you are searching for
                doctors for heavy periods in Delhi, you probably want three
                things: a clear diagnosis, safe treatment and a doctor who
                listens.
              </p>
            </div>

            {/* Section 2 — What Are Heavy Periods */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Heavy Periods (Menorrhagia)?
              </h2>

              <p className="mb-4 text-gray-700">
                Heavy periods, medically called menorrhagia, mean excessive
                menstrual bleeding that disrupts everyday life.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Signs
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods lasting longer than 7 days</li>
                <li>Soaking a pad or tampon every 1–2 hours</li>
                <li>Using double protection to prevent leaks</li>
                <li>Passing clots larger than a coin</li>
                <li>Waking at night to change pads</li>
                <li>Constant tiredness, dizziness or breathlessness</li>
                <li>Skipping work, travel or exercise because of bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why You Should Not Ignore It
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It can lead to iron-deficiency anaemia</li>
                <li>It may signal fibroids, polyps, PCOS or thyroid disease</li>
                <li>It affects sleep, mood, productivity and relationships</li>
                <li>Early treatment is simpler and more effective</li>
              </ul>
            </div>

            {/* Section 3 — Delhi Challenges */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Delhi Women Often Struggle to Find the Right Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Life in a metro city has its own challenges.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Long commutes: Reaching a clinic across Delhi can take hours</li>
                <li>Crowded OPDs: Busy hospitals may offer very short consultation time</li>
                <li>Too many options: Online ratings and advertisements make comparison confusing</li>
                <li>High costs: Large hospitals may recommend many tests and packages</li>
                <li>Conflicting advice: One doctor suggests medicines, another suggests surgery</li>
                <li>Work pressure: Many women delay care because of jobs and family duties</li>
              </ul>

              <p className="text-gray-700">
                These pressures are why many women also seek a second opinion,
                sometimes outside the city.
              </p>
            </div>

            {/* Section 4 — How to Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose a Doctor for Heavy Periods in Delhi
              </h2>

              <p className="mb-4 text-gray-700">
                Whichever clinic you pick, use this practical checklist.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Check Qualifications
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised degree in obstetrics and gynaecology (MD/MS/DNB)</li>
                <li>Registration with the medical council</li>
                <li>Extra training in laparoscopy or hysteroscopy, if surgery may be needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Look for Real Experience
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regularly treats menstrual disorders</li>
                <li>Comfortable managing PCOS, fibroids, polyps, adenomyosis and endometriosis</li>
                <li>Offers both medical and surgical solutions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Prefer a Diagnosis-First Approach
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Takes a detailed history</li>
                <li>Orders relevant blood tests and scans</li>
                <li>Explains your reports in simple language</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Ask About Technology
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>3D/4D ultrasound for detailed imaging</li>
                <li>Hysteroscopy to see inside the uterus</li>
                <li>High-definition laparoscopy for keyhole surgery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Value Ethical Practice
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Starts with the least invasive effective option</li>
                <li>Does not push hysterectomy when alternatives exist</li>
                <li>Respects your pregnancy plans</li>
                <li>Gives written advice and follow-up instructions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Read Reviews Carefully
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Look for consistent comments on listening and clarity</li>
                <li>Be cautious of exaggerated or repetitive reviews</li>
                <li>Ask friends or family for personal recommendations</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Consider Convenience
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Distance, parking and travel time</li>
                <li>Appointment availability</li>
                <li>Follow-up options through phone or WhatsApp</li>
              </ul>
            </div>

            {/* Section 5 — Red Flags */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags to Watch Out For
              </h2>

              <p className="mb-4 text-gray-700">
                Think twice if a doctor:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Skips the examination or history</li>
                <li>Says heavy bleeding is &quot;normal&quot; without any tests</li>
                <li>Suggests surgery immediately without discussing alternatives</li>
                <li>Cannot explain the cause or the plan clearly</li>
                <li>Pushes expensive packages you do not understand</li>
                <li>Ignores your future pregnancy plans</li>
                <li>Offers no follow-up</li>
              </ul>
            </div>

            {/* Section 6 — Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Heavy Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Any good doctor in Delhi or elsewhere should investigate these
                possibilities.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS (very common in young women)</li>
                <li>Thyroid disorders</li>
                <li>Perimenopause</li>
                <li>Teenage hormonal immaturity</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Structural Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uterine fibroids</li>
                <li>Endometrial polyps</li>
                <li>Adenomyosis</li>
                <li>Endometriosis</li>
                <li>Endometrial hyperplasia</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Other Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding or clotting disorders</li>
                <li>Copper IUD or certain medicines</li>
                <li>Pregnancy-related causes such as miscarriage</li>
                <li>Rarely, uterine or cervical cancer</li>
              </ul>
            </div>

            {/* Section 7 — Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Heavy Periods Are Diagnosed
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>History and examination: Cycle pattern, pad count, clots, pain and family history</li>
                <li>Blood tests: Haemoglobin, ferritin, thyroid and clotting profile</li>
                <li>Hormone tests: When PCOS or another hormonal issue is suspected</li>
                <li>Pelvic ultrasound (3D/4D where available): Detects fibroids, polyps, cysts and adenomyosis</li>
                <li>Hysteroscopy: Direct camera view inside the uterus</li>
                <li>Endometrial biopsy: Tissue sample when the lining needs evaluation</li>
                <li>Pap smear: If cervical screening is due</li>
              </ul>
            </div>

            {/* Section 8 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options You Should Expect
              </h2>

              <p className="mb-4 text-gray-700">
                A good specialist offers a full &quot;treatment ladder.&quot;
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medicines
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tranexamic acid to reduce bleeding</li>
                <li>Anti-inflammatory painkillers for cramps and flow</li>
                <li>Hormonal pills or progesterone therapy</li>
                <li>Iron and vitamin supplements</li>
                <li>Treatment for thyroid problems or PCOS</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal IUD (LNG-IUS)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Releases a small hormone dose inside the uterus</li>
                <li>Reduces bleeding significantly over time</li>
                <li>Lasts several years and also provides contraception</li>
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
                <li>Myomectomy to remove fibroids while keeping the uterus</li>
                <li>Cystectomy to remove ovarian cysts</li>
                <li>Endometriosis excision for pain and bleeding</li>
                <li>Hysterectomy when other treatments fail and childbearing is complete</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of Keyhole Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Small incisions and minimal scarring</li>
                <li>Less pain after surgery</li>
                <li>Shorter hospital stay</li>
                <li>Faster return to normal work</li>
                <li>Lower infection risk</li>
              </ul>
            </div>

            {/* Section 9 — Second Opinion */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Consider a Second Opinion Outside Delhi
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is a normal and wise step, especially before
                surgery.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You have been advised hysterectomy and want to explore alternatives</li>
                <li>Medicines have not worked for several months</li>
                <li>Your fibroids, cysts or endometriosis need keyhole surgery</li>
                <li>You feel rushed in large hospital OPDs</li>
                <li>You want a doctor who spends time explaining your options</li>
                <li>You are planning pregnancy and need uterus-preserving advice</li>
                <li>You prefer a calmer, more personal clinic experience</li>
              </ul>
            </div>

            {/* Section 10 — Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec, Moradabad: A Trusted Option Near Delhi-NCR
              </h2>

              <p className="mb-4 text-gray-700">
                Clarity first: Dr. Priyanka Gynaec is located in Moradabad,
                Uttar Pradesh, not in Delhi. Moradabad is roughly 160–170 km
                from Delhi, typically a few hours by road or train. Many women
                from Delhi-NCR, Ghaziabad, Noida, Hapur, Meerut and nearby towns
                travel for focused gynaecological care. Please confirm travel and
                timings before planning your visit.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Women Consider This Clinic
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Patient-first philosophy: &quot;Her Health First&quot; guides every consultation</li>
                <li>Experienced gynaecologist: Dr. Priyanka Pachauri is known for menstrual disorder treatment, high-risk pregnancy care and laparoscopic surgery</li>
                <li>Advanced technology: High-definition 3D laparoscopy and 3D/4D ultrasound</li>
                <li>Full range of treatments: Medicines, hysteroscopy, polypectomy, myomectomy, cystectomy, endometriosis surgery and hysterectomy</li>
                <li>Fertility-friendly thinking: Treatment plans consider your pregnancy goals</li>
                <li>Continuity of care: The team remembers your history and monitors progress</li>
                <li>Unhurried consultations: Time to ask questions and understand options</li>
                <li>Easy contact: Phone and WhatsApp for initial guidance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tips for Travelling Patients
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Call or WhatsApp first to confirm appointment timing</li>
                <li>Carry all previous reports, scans and prescriptions</li>
                <li>Bring a family member for support if surgery may be discussed</li>
                <li>Plan a buffer day if procedures or tests are advised</li>
                <li>Ask about follow-up through phone or WhatsApp to avoid repeated trips</li>
              </ul>
            </div>

            {/* Section 11 — Preparation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Appointment (Anywhere)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before You Go
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Note your last 3 period dates</li>
                <li>Estimate pads used per day</li>
                <li>List medicines, supplements and past surgeries</li>
                <li>Collect earlier ultrasound and blood reports</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Questions to Ask
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What is the most likely cause of my heavy bleeding?</li>
                <li>Which tests do I really need?</li>
                <li>What are my non-surgical options?</li>
                <li>How soon will I improve?</li>
                <li>How will treatment affect pregnancy?</li>
                <li>What is the plan if this does not work?</li>
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
                Healthy Habits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pair iron with vitamin C for better absorption</li>
                <li>Avoid tea or coffee right after meals</li>
                <li>Walk or practise yoga regularly</li>
                <li>Sleep well and manage stress</li>
                <li>Maintain a healthy weight</li>
                <li>Track your cycle monthly</li>
                <li>Take supplements only as prescribed</li>
              </ul>
            </div>

            {/* Section 13 — Emergency */}
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

            {/* Section 14 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths About Heavy Periods
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Myth:</strong> Heavy periods are normal for some women.
                  <br />
                  <strong>Fact:</strong> Very heavy bleeding deserves medical attention.
                </p>

                <p>
                  <strong>Myth:</strong> Surgery is the only cure.
                  <br />
                  <strong>Fact:</strong> Many women improve with medicines or a hormonal IUD.
                </p>

                <p>
                  <strong>Myth:</strong> Only older women are affected.
                  <br />
                  <strong>Fact:</strong> Teenagers and young women can have heavy periods too.
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
                Book Your Consultation
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
