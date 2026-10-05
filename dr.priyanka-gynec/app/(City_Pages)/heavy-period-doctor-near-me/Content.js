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

export default function HeavyPeriodDoctorMoradabad() {
  const faqs = [
    {
      q: "How do I know if my period is too heavy?",
      a: "If you soak a pad every 1–2 hours, pass large clots, or bleed for more than 7 days, it is considered heavy.",
    },
    {
      q: "When should I see a heavy period doctor near me?",
      a: "See a doctor if heavy bleeding lasts more than 2–3 cycles or causes tiredness, pain or dizziness.",
    },
    {
      q: "Can heavy periods cause anaemia?",
      a: "Yes. Ongoing blood loss can lower iron levels and cause weakness, hair fall and breathlessness.",
    },
    {
      q: "What causes heavy periods?",
      a: "Common causes include PCOS, thyroid problems, fibroids, polyps, adenomyosis, endometriosis and perimenopause.",
    },
    {
      q: "Do heavy periods always need surgery?",
      a: "No. Most women improve with medicines or hormonal treatment. Surgery is only for selected cases.",
    },
    {
      q: "Does Dr. Priyanka treat heavy periods in Moradabad?",
      a: "Yes. Dr. Priyanka Pachauri treats menstrual disorders and offers advanced laparoscopic and hysteroscopic procedures.",
    },
    {
      q: "Can fibroids or polyps be removed without removing the uterus?",
      a: "Yes. Myomectomy and hysteroscopic polypectomy remove them while preserving the uterus.",
    },
    {
      q: "Will treatment affect my chances of pregnancy?",
      a: "Not necessarily. Many treatments are fertility-friendly. Share your plans with your doctor.",
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
                Heavy Period Doctor Near Me: Expert Care for Heavy Menstrual Bleeding in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Are you changing your pad every hour, passing large clots, or
                cancelling plans because of your period? If so, you are probably
                searching for a heavy period doctor near you. Heavy menstrual
                bleeding is one of the most common reasons women visit a
                gynaecologist, yet many wait for months or years before getting
                help.
              </p>

              <p className="text-gray-700">
                You do not have to &quot;just live with it.&quot; Heavy periods have
                clear causes and effective treatments. At Dr. Priyanka Gynaec in
                Moradabad, women get a careful diagnosis and a personalised
                treatment plan, from simple medicines to advanced 3D laparoscopic
                surgery when needed.
              </p>
            </div>

            {/* Section 2 — What Is Menorrhagia */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Heavy Period (Menorrhagia)?
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors call heavy menstrual bleeding menorrhagia. A normal
                period usually means 30–40 ml of blood loss over 3–7 days.
                Menorrhagia means losing about 80 ml or more, or bleeding for
                more than 7 days.
              </p>

              <p className="mb-4 text-gray-700">
                Few women measure blood loss, so these practical signs are more
                useful:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Soaking through a pad or tampon every 1–2 hours for several hours in a row</li>
                <li>Needing to wear two pads at once for protection</li>
                <li>Waking at night to change sanitary products</li>
                <li>Passing blood clots larger than a 2–3 cm coin</li>
                <li>Periods lasting longer than 7 days</li>
                <li>Bleeding that interferes with work, school, exercise or social life</li>
                <li>Feeling tired, dizzy, breathless or weak during or after periods</li>
                <li>Constant lower abdominal pain or heavy cramping</li>
              </ul>

              <p className="text-gray-700">
                If two or more of these sound familiar, book a consultation with
                a gynaecologist.
              </p>
            </div>

            {/* Section 3 — Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Do Heavy Periods Happen? Common Causes
              </h2>

              <p className="mb-4 text-gray-700">
                Heavy bleeding is a symptom, not a disease. Finding the cause is
                the key to the right treatment. Common causes include:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS (Polycystic Ovary Syndrome): Irregular ovulation can cause the uterine lining to build up and then shed heavily</li>
                <li>Thyroid disorders: Both underactive and overactive thyroid can disturb periods</li>
                <li>Perimenopause: Hormone swings in the late 30s and 40s often cause heavy or unpredictable bleeding</li>
                <li>Adolescence: Cycles are often irregular in the first few years after periods start</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Structural Causes in the Uterus
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uterine fibroids: Non-cancerous growths in the uterine wall that increase bleeding and cause pressure or pain</li>
                <li>Uterine polyps: Small growths in the uterine lining that cause heavy or in-between bleeding</li>
                <li>Adenomyosis: The uterine lining grows into the muscle wall, causing heavy, painful periods</li>
                <li>Endometriosis: Tissue similar to the uterine lining grows outside the uterus, often causing severe pain and heavy bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Other Medical Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding disorders: Conditions such as von Willebrand disease can cause heavy periods from the very first cycle</li>
                <li>Endometrial hyperplasia: Thickening of the uterine lining that needs proper evaluation</li>
                <li>Intrauterine devices (copper IUD): These can increase menstrual flow in some women</li>
                <li>Medicines: Blood thinners and some hormonal medicines can affect bleeding</li>
                <li>Pregnancy-related causes: Miscarriage or ectopic pregnancy can cause heavy bleeding and need urgent care</li>
                <li>Rarely, cancers of the uterus or cervix, which is why persistent abnormal bleeding should never be ignored</li>
              </ul>
            </div>

            {/* Section 4 — When to See Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs You Should See a Heavy Period Doctor Near You
              </h2>

              <p className="mb-4 text-gray-700">
                Mild variations in flow are normal. Please see a gynaecologist
                soon if you notice any of the following:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding that continues for more than 2–3 cycles</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Bleeding after menopause</li>
                <li>Severe pain that stops you from doing daily activities</li>
                <li>Symptoms of anaemia, such as pale skin, hair fall, fatigue, rapid heartbeat or shortness of breath</li>
                <li>A sudden change in your usual menstrual pattern</li>
                <li>Heavy bleeding with fever, foul-smelling discharge or a missed period</li>
                <li>Difficulty getting pregnant along with heavy periods</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Go to Emergency Care Immediately If:
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You soak more than one pad per hour for 2 or more hours</li>
                <li>You feel faint, dizzy or may collapse</li>
                <li>You have heavy bleeding while pregnant</li>
                <li>You have severe one-sided abdominal pain with bleeding</li>
              </ul>
            </div>

            {/* Section 5 — Why Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Heavy Period Treatment in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                When you search for a heavy period doctor near you, you want more
                than a prescription. You want someone who listens, explains and
                finds the real cause. Here is what patients can expect at
                Dr. Priyanka Gynaec:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Patient-first care: The clinic&apos;s philosophy is &quot;Her Health First,&quot; with unhurried consultations where your concerns come first</li>
                <li>Experienced gynaecologist: Dr. Priyanka Pachauri is known in Moradabad for menstrual disorder treatment, high-risk pregnancy care and advanced laparoscopic surgery</li>
                <li>Advanced technology: High-definition 3D laparoscopy and 3D/4D ultrasound for precise diagnosis</li>
                <li>Complete range of treatment: Medical management, hysteroscopy, polyp removal, fibroid surgery, endometriosis surgery and hysterectomy, all under one roof</li>
                <li>Fertility-friendly approach: Treatments that protect your uterus and future pregnancy wherever possible</li>
                <li>Continuity of care: The same team follows your history from the first visit through every follow-up</li>
                <li>Minimally invasive options: Keyhole surgery means smaller cuts, less pain and faster recovery</li>
                <li>Easy access: Located in Gandhi Nagar, Moradabad, with phone and WhatsApp booking</li>
              </ul>
            </div>

            {/* Section 6 — Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is Heavy Menstrual Bleeding Diagnosed?
              </h2>

              <p className="mb-4 text-gray-700">
                A correct diagnosis prevents unnecessary treatment. Here is what
                typically happens at your consultation:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed History
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your cycle length, flow, clots and duration of bleeding</li>
                <li>Pain, medicines, family history and any previous surgeries</li>
                <li>Your plans for pregnancy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Physical and Pelvic Examination
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>General checkup for signs of anaemia</li>
                <li>Abdominal and pelvic examination as appropriate</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Tests Your Doctor May Advise
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests: Haemoglobin, iron levels (ferritin), thyroid profile and clotting tests</li>
                <li>Pregnancy test: To rule out pregnancy-related causes</li>
                <li>Pelvic ultrasound (including 3D/4D): To detect fibroids, polyps, adenomyosis and ovarian cysts</li>
                <li>Hysteroscopy: A thin camera is passed through the cervix to look inside the uterus directly</li>
                <li>Endometrial biopsy: A small tissue sample, if needed, to check the uterine lining</li>
                <li>Pap smear: If cervical screening is due</li>
              </ul>

              <p className="text-gray-700">
                Your doctor will advise only the tests that are relevant to your
                situation.
              </p>
            </div>

            {/* Section 7 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Heavy Period Treatment Options
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause, your age, your symptoms and
                whether you plan to have children. Most women improve with
                simpler options first.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Medicines (First-Line Treatment)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tranexamic acid: Reduces bleeding when taken during periods</li>
                <li>Anti-inflammatory painkillers: Help with pain and can reduce flow</li>
                <li>Hormonal pills or progesterone therapy: Regulate cycles and thin the uterine lining</li>
                <li>Iron and vitamin supplements: Treat or prevent anaemia</li>
                <li>Thyroid or PCOS treatment: When an underlying condition is found</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Hormonal Intrauterine System (LNG-IUS)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A small device placed in the uterus that releases hormone gradually</li>
                <li>Can greatly reduce monthly bleeding for several years</li>
                <li>Also provides contraception</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Minimally Invasive Procedures
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diagnostic hysteroscopy: Gentle evaluation of the uterine cavity</li>
                <li>Hysteroscopic polypectomy: Removal of polyps without any cuts</li>
                <li>Dilation and curettage (D&amp;C): Sometimes used for diagnosis or short-term control</li>
                <li>Endometrial ablation: For selected women who have completed their families</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Advanced Laparoscopic Surgery (When Needed)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Laparoscopic myomectomy: Removes fibroids while preserving the uterus</li>
                <li>Laparoscopic cystectomy: Removes ovarian cysts while protecting fertility</li>
                <li>Endometriosis surgery: Excision of endometriosis for lasting pain relief</li>
                <li>Laparoscopic hysterectomy: Keyhole removal of the uterus, considered when other treatments have not worked or are not suitable</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of Keyhole (Laparoscopic) Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Small incisions and less scarring</li>
                <li>Reduced pain after surgery</li>
                <li>Shorter hospital stay</li>
                <li>Faster return to normal activities</li>
                <li>Lower risk of wound infection</li>
              </ul>

              <p className="text-gray-700">
                Your doctor will explain the benefits, risks and alternatives of
                every option before you decide.
              </p>
            </div>

            {/* Section 8 — Anaemia */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Heavy Periods and Anaemia: Don&apos;t Ignore the Fatigue
              </h2>

              <p className="mb-4 text-gray-700">
                Many women assume tiredness is part of a busy life. In reality,
                long-term heavy bleeding is one of the most common causes of
                iron-deficiency anaemia among Indian women.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Warning Signs of Anaemia
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Constant tiredness and low energy</li>
                <li>Pale skin, lips or nails</li>
                <li>Hair fall and brittle nails</li>
                <li>Dizziness and headaches</li>
                <li>Rapid heartbeat or breathlessness on mild effort</li>
                <li>Poor concentration</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Iron-Rich Foods That Can Help
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Spinach, fenugreek (methi) and other leafy greens</li>
                <li>Lentils, chickpeas and kidney beans (rajma)</li>
                <li>Jaggery, dates and raisins</li>
                <li>Pomegranate, beetroot and amla</li>
                <li>Eggs, fish and lean meat, if non-vegetarian</li>
              </ul>

              <p className="text-gray-700">
                Tip: Pair iron-rich foods with vitamin C (lemon, oranges, amla)
                to improve absorption, and avoid tea or coffee right after
                meals. Supplements should be taken only as advised by your
                doctor.
              </p>
            </div>

            {/* Section 9 — Home Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care Tips While You Wait for Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                These simple steps may help you cope, but they do not replace a
                medical check-up:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Track your cycle with an app or diary, noting dates, pads used and clots</li>
                <li>Use a heat pack for cramps</li>
                <li>Stay hydrated and eat balanced, iron-rich meals</li>
                <li>Rest when your body asks for it</li>
                <li>Avoid aspirin unless your doctor approves, as it may increase bleeding</li>
                <li>Keep a spare set of products and clothing with you during heavy days</li>
                <li>Carry a record of your symptoms to your appointment, as it speeds up diagnosis</li>
              </ul>
            </div>

            {/* Section 10 — Life Stages */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Heavy Periods in Different Life Stages
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teenagers
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular and heavy periods are common in the first 2–3 years</li>
                <li>Persistent heavy bleeding from the first period should be checked for bleeding disorders</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women in Their 20s and 30s
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS, thyroid issues, fibroids and polyps are common causes</li>
                <li>Women planning pregnancy need fertility-preserving treatment</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women in Their 40s
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Perimenopausal hormone changes are a frequent cause</li>
                <li>Evaluation of the uterine lining becomes especially important</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Childbirth
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding after the post-delivery period should be evaluated promptly</li>
              </ul>
            </div>

            {/* Section 11 — Choosing Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Heavy Period Doctor Near You
              </h2>

              <p className="mb-4 text-gray-700">
                Before booking, consider the following:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualifications and experience: Look for a qualified gynaecologist with proven experience in menstrual disorders</li>
                <li>Diagnostic facilities: Access to advanced ultrasound and hysteroscopy matters</li>
                <li>Treatment range: Both medical and surgical options should be offered</li>
                <li>Communication style: Choose someone who explains clearly and respects your choices</li>
                <li>Patient reviews: Genuine testimonials show real experience</li>
                <li>Convenience: A nearby clinic makes follow-ups easier</li>
                <li>Transparency: Your doctor should discuss all options and not push surgery unnecessarily</li>
              </ul>
            </div>

            {/* Section 12 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment Today
              </h2>

              <p className="mb-6 text-black">
                You deserve relief from heavy, painful and exhausting periods.
                Whether you need a quick consultation or a complete evaluation,
                Dr. Priyanka and her team are here to help.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Doctor</p>
                    <p className="text-black">
                      Dr. Priyanka Pachauri, Gynaecologist and Laparoscopic Surgeon
                    </p>
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

            {/* Section 13 — FAQs */}
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
