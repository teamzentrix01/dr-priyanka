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

export default function InfertilitySpecialistNearMe() {
  const faqs = [
    {
      q: "How do I find a good infertility specialist near me?",
      a: "Check qualifications, facilities, ethical practice, patient reviews and clear communication.",
    },
    {
      q: "When should I visit an infertility specialist?",
      a: "After 12 months of trying, or 6 months if you are 35 or older.",
    },
    {
      q: "Should my husband also be tested?",
      a: "Yes. Male factors cause about one-third of infertility cases.",
    },
    {
      q: "Is infertility treatable?",
      a: "Yes. Many couples conceive with lifestyle changes, medicines, surgery, IUI or IVF.",
    },
    {
      q: "Do I need IVF straight away?",
      a: "Not always. The right treatment depends on your age, tests and cause.",
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Previous reports, scans, prescriptions and your partner if possible.",
    },
    {
      q: "Can the same clinic manage my pregnancy later?",
      a: "Yes. Dr. Priyanka Gynaec provides antenatal care and normal delivery support.",
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
                Infertility Specialist Near Me: How to Find the Right Fertility Doctor in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                When you type &quot;infertility specialist near me&quot; into a
                search bar, you are usually carrying a lot more than a simple
                question. You may be tired of waiting, worried about reports or
                unsure whom to trust. You want a doctor who is nearby,
                experienced and honest.
              </p>

              <p className="mb-4 text-gray-700">
                This guide helps you decide when to go, what to look for in a
                clinic, which tests and treatments to expect and why choosing a
                nearby specialist can make your journey easier. It also explains
                what fertility care looks like at Dr. Priyanka Gynaec in
                Moradabad.
              </p>
            </div>

            {/* Section 2 — Why Near Me Makes Sense */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Searching "Near Me" Makes Sense for Fertility Care
              </h2>

              <p className="mb-4 text-gray-700">
                Fertility treatment is not a single visit. It often involves
                repeated scans, blood tests, injections and procedures timed to
                your cycle. Distance matters.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Frequent visits: follicle monitoring may need several scans within two weeks.</li>
                <li>Time-sensitive procedures: ovulation triggers, IUI and embryo transfers happen on specific days.</li>
                <li>Lower stress: a short commute is easier on your body and your work schedule.</li>
                <li>Faster support: you can reach your doctor quickly if something feels wrong.</li>
                <li>Easier for both partners: a nearby clinic makes it simpler for your husband to attend tests and procedures.</li>
                <li>Lower cumulative cost: less travel and fewer days off work add up over a treatment cycle.</li>
                <li>Continuity: the same team can follow you from fertility treatment to pregnancy.</li>
              </ul>

              <p className="text-gray-700">
                A nearby clinic is helpful, but the doctor&apos;s expertise and
                the clinic&apos;s facilities matter even more.
              </p>
            </div>

            {/* Section 3 — When to See a Specialist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See an Infertility Specialist?
              </h2>

              <p className="mb-4 text-gray-700">Consult a specialist if:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You are under 35 and have not conceived after 12 months of regular, unprotected intercourse</li>
                <li>You are 35 or older and have not conceived after 6 months</li>
                <li>You are over 40 and want to start trying (consult right away)</li>
                <li>Your periods are irregular, very infrequent or absent</li>
                <li>You have severe period pain or pelvic pain</li>
                <li>You have PCOS, endometriosis, fibroids or thyroid disease</li>
                <li>You have had pelvic infection, tuberculosis or abdominal surgery</li>
                <li>You have had two or more miscarriages</li>
                <li>Your partner has had a low sperm count or any previous testing concern</li>
                <li>You plan to preserve fertility before medical treatment</li>
              </ul>

              <p className="text-gray-700">
                Do not delay because of age. In women, egg quality and quantity
                decline over time, so earlier evaluation gives more options.
              </p>
            </div>

            {/* Section 4 — What a Specialist Does */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What an Infertility Specialist Actually Does
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Takes a detailed history of both partners</li>
                <li>Chooses relevant tests instead of ordering everything at once</li>
                <li>Finds the cause or combination of causes</li>
                <li>Treats the underlying condition first, such as thyroid, PCOS or infection</li>
                <li>Recommends the simplest effective treatment before escalating</li>
                <li>Performs minimally invasive surgery when a structural problem exists</li>
                <li>Offers IUI and IVF when appropriate</li>
                <li>Supports you emotionally and explains each step honestly</li>
              </ul>
            </div>

            {/* Section 5 — Common Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Infertility
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Women
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovulation disorders: PCOS, thyroid problems, high prolactin, low ovarian reserve</li>
                <li>Blocked fallopian tubes: after infection, surgery or endometriosis</li>
                <li>Endometriosis: causes pain and may affect egg quality and tubes</li>
                <li>Fibroids and polyps: can distort the uterine cavity</li>
                <li>Uterine septum or adhesions: reduce implantation chances</li>
                <li>Age: the most important single factor</li>
                <li>Lifestyle: obesity, low body weight, smoking, alcohol and chronic stress</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Men
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Low sperm count or poor movement</li>
                <li>Abnormal sperm shape</li>
                <li>No sperm in the semen (azoospermia)</li>
                <li>Varicocele: enlarged scrotal veins</li>
                <li>Sperm DNA damage</li>
                <li>Hormonal imbalance or infections</li>
                <li>Lifestyle: smoking, alcohol, heat exposure, obesity</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Unexplained Infertility
              </h3>

              <p className="mb-2 text-gray-700">
                Around 10–15% of couples have normal test results and still
                cannot conceive.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It is common and does not mean you cannot have a baby.</li>
                <li>IUI or IVF often helps in these cases.</li>
              </ul>
            </div>

            {/* Section 6 — Tests */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests Commonly Advised
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Female Partner
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Transvaginal ultrasound for uterus, ovaries and follicle count</li>
                <li>AMH test for ovarian reserve</li>
                <li>FSH, LH, prolactin and thyroid tests</li>
                <li>HSG or sonosalpingography for tubal patency</li>
                <li>Hysteroscopy to view the uterine cavity</li>
                <li>Diagnostic laparoscopy when pelvic disease is suspected</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Male Partner
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Semen analysis</li>
                <li>Advanced sperm testing including DNA integrity</li>
                <li>Hormone tests if required</li>
                <li>Scrotal ultrasound if a varicocele is suspected</li>
              </ul>

              <p className="text-gray-700">
                A good specialist chooses tests based on your story, not a fixed
                package.
              </p>
            </div>

            {/* Section 7 — Treatment Options */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options at a Glance
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle and Natural Support
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Healthy weight and balanced diet</li>
                <li>Regular exercise and good sleep</li>
                <li>Folic acid supplementation</li>
                <li>Stopping tobacco and alcohol</li>
                <li>Ovulation tracking and timed intercourse</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ovulation Induction
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tablets or injections that stimulate egg release</li>
                <li>Common in PCOS and irregular cycles</li>
                <li>Monitored by ultrasound for safety</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Minimally Invasive Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hysteroscopy and polypectomy: remove polyps, septum or adhesions without cuts</li>
                <li>Laparoscopic cystectomy: removes ovarian cysts while preserving fertility</li>
                <li>Laparoscopic myomectomy: removes fibroids while preserving the uterus</li>
                <li>Endometriosis excision: relieves pain and improves the pelvic environment</li>
                <li>Benefits: small incisions, less pain and faster recovery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                IUI (Intrauterine Insemination)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Prepared sperm is placed directly into the uterus</li>
                <li>Suitable for mild male factor, unexplained infertility and some ovulation problems</li>
                <li>Needs at least one healthy fallopian tube</li>
                <li>A short procedure that needs no anaesthesia</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                IVF and ICSI
              </h3>

              <p className="mb-2 text-gray-700">
                Eggs are collected and fertilised in the laboratory, and the
                embryo is placed in the uterus.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>ICSI injects a single sperm into an egg, helping in severe male infertility.</li>
                <li>It is recommended for blocked tubes, severe male factor, endometriosis, advanced age or failed IUI.</li>
                <li>Time-lapse embryo monitoring helps in observing embryos without disturbing them.</li>
                <li>Frozen embryo transfer adds flexibility.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Fertility Preservation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Egg or embryo freezing for those who want to delay pregnancy</li>
                <li>Useful before cancer treatment or other medical therapy</li>
              </ul>
            </div>

            {/* Section 8 — How to Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Infertility Specialist Near You
              </h2>

              <p className="mb-4 text-gray-700">
                Use this checklist while comparing clinics.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualification and experience: check the doctor&apos;s degrees and fertility experience.</li>
                <li>Ethical practice: the doctor should recommend only what you need and avoid pushing IVF too early.</li>
                <li>Complete facilities: look for ultrasound, laboratory, semen analysis, hysteroscopy and laparoscopy in one place.</li>
                <li>Modern technology: time-lapse embryo monitoring and advanced sperm testing indicate a modern lab.</li>
                <li>Both partners welcomed: the clinic should evaluate the man as seriously as the woman.</li>
                <li>Transparent communication: you should receive a clear plan and honest discussion about chances.</li>
                <li>Cost clarity: ask for an itemised estimate before starting.</li>
                <li>Realistic promises: be careful with clinics that guarantee success.</li>
                <li>Patient comfort: privacy, respect and unhurried consultations matter.</li>
                <li>Continuity of care: a team that can also manage your pregnancy is a big advantage.</li>
                <li>Accessibility: easy location, reachable by phone and WhatsApp.</li>
              </ul>
            </div>

            {/* Section 9 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before You Choose a Clinic
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What is the cause of my difficulty, and what are my options?</li>
                <li>Which treatment do you recommend first, and why?</li>
                <li>How many cycles might I need?</li>
                <li>What are the risks and side effects?</li>
                <li>What will the total cost be, including medicines and scans?</li>
                <li>How will you monitor my cycle, and how often will I visit?</li>
                <li>Who will I meet on each visit?</li>
                <li>What happens if the first attempt does not work?</li>
                <li>Do you also provide antenatal and delivery care?</li>
              </ul>
            </div>

            {/* Section 10 — Why Choose Dr Priyanka */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Couples Choose Dr. Priyanka Gynaec in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec follows the philosophy of &quot;Her Health
                First&quot;, combining expertise with listening and empathy.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF services: personalised plans for each couple</li>
                <li>GERI time-lapse imaging incubator: advanced embryo monitoring</li>
                <li>AI-powered semen analysis: includes DNA integrity testing for a deeper male fertility assessment</li>
                <li>3D laparoscopic surgery: treats cysts, fibroids, endometriosis and tubal factors</li>
                <li>Hysteroscopy services: diagnostic hysteroscopy and polyp removal</li>
                <li>3D/4D ultrasound: detailed imaging for both fertility monitoring and pregnancy</li>
                <li>One team from conception to delivery: fertility care, antenatal services, normal delivery support and newborn care</li>
                <li>Paediatric support: consultations and vaccinations for your baby</li>
                <li>Patient-first approach: unhurried consultations and respect for your choices</li>
              </ul>
            </div>

            {/* Section 11 — Location */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Location and Access
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Address: A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001</li>
                <li>A convenient location close to the Old Roadways area</li>
                <li>Easy to reach for couples from Moradabad and nearby towns such as Rampur, Amroha, Sambhal, Bijnor and Bareilly</li>
                <li>Quick contact by phone, WhatsApp and email before you visit</li>
              </ul>
            </div>

            {/* Section 12 — What to Carry */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Carry to Your First Visit
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>All previous fertility reports, scans and prescriptions</li>
                <li>HSG, hormone and semen analysis reports if available</li>
                <li>A list of current medicines</li>
                <li>Details of your menstrual cycle, such as dates and length</li>
                <li>Records of previous surgeries or pregnancies</li>
                <li>Your partner, if possible, since both evaluations help save time</li>
                <li>A list of your questions</li>
              </ul>
            </div>

            {/* Section 13 — First Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at the First Consultation
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A calm, unhurried discussion of your story and goals</li>
                <li>Questions about your cycle, health, lifestyle and previous treatments</li>
                <li>An ultrasound to assess the uterus and ovaries</li>
                <li>Basic blood tests and a semen analysis for your partner</li>
                <li>A clear, step-by-step plan with realistic timelines</li>
                <li>An honest conversation about cost and likely outcomes</li>
                <li>Time for every question you have</li>
              </ul>
            </div>

            {/* Section 14 — Simple Habits */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Habits That Support Fertility
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain a healthy weight.</li>
                <li>Eat fresh vegetables, fruit, pulses, nuts and whole grains.</li>
                <li>Start folic acid at least three months before conceiving.</li>
                <li>Exercise moderately and regularly.</li>
                <li>Quit smoking and limit alcohol and caffeine.</li>
                <li>Manage stress with yoga, walking or meditation.</li>
                <li>Sleep 7–8 hours every night.</li>
                <li>Track ovulation and time intercourse in the fertile window.</li>
                <li>Get thyroid, sugar and vitamin D levels checked.</li>
                <li>Avoid unproven remedies and self-medication.</li>
                <li>Encourage your partner to test early.</li>
              </ul>
            </div>

            {/* Section 15 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Caring for Your Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Feelings of sadness, anxiety or frustration are normal.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Share the journey openly with your partner.</li>
                <li>Limit comparisons with other people&apos;s timelines.</li>
                <li>Take breaks between treatment cycles when needed.</li>
                <li>Ask for counselling or support if stress feels heavy.</li>
                <li>Celebrate each small step forward.</li>
              </ul>
            </div>

            {/* Section 16 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Fertility Consultation Today
              </h2>

              <p className="mb-6 text-black">
                Every month matters, especially as age advances. Reach out and
                get clear answers from a team that listens.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
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