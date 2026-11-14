
import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  HeartPulse,
  ShieldCheck,
  Activity,
  ClipboardList,
  Stethoscope,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function HeavyPeriodsDoctor() {
  const faqs = [
    {
      q: "How do I know if my periods are too heavy?",
      a: "If you soak a pad or tampon every one to two hours, pass large clots, bleed for more than seven days or feel weak and dizzy, your periods may be heavy and need medical evaluation.",
    },
    {
      q: "Can heavy periods cause anaemia?",
      a: "Yes. Repeated blood loss can reduce iron and haemoglobin levels, leading to tiredness, hair fall, pale skin, headaches and breathlessness.",
    },
    {
      q: "Are fibroids the only cause of heavy bleeding?",
      a: "No. Hormonal imbalance, PCOS, thyroid disorders, polyps, adenomyosis, endometriosis, a copper IUD and some medicines can also cause heavy menstrual bleeding.",
    },
    {
      q: "Which tests are done for heavy periods?",
      a: "Common tests include blood tests for haemoglobin, iron and thyroid levels, a pregnancy test and a pelvic ultrasound. Hysteroscopy may be advised in selected cases.",
    },
    {
      q: "Can heavy periods be treated without surgery?",
      a: "Many women improve with medicines, hormonal treatment and iron support. Surgery is considered when other treatments are unsuitable or do not provide adequate relief.",
    },
    {
      q: "Can polyps and fibroids be treated without removing the uterus?",
      a: "Often, yes. Hysteroscopic polypectomy and laparoscopic myomectomy can preserve the uterus when these procedures are suitable for the patient's condition.",
    },
    {
      q: "Are heavy periods normal in the teenage years?",
      a: "Irregular or heavy flow can occur during the early years after periods begin, but very heavy bleeding, fatigue or fainting should be checked by a doctor.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or email drpriyankagynaec@gmail.com to enquire about an appointment.",
    },
  ];

  const heavyPeriodSigns = [
    "You soak a pad, tampon or menstrual cup every one to two hours",
    "You need to change your protection during the night",
    "You pass blood clots larger than a coin",
    "Bleeding lasts longer than seven days",
    "You use double protection to prevent leaks",
    "You feel tired, dizzy or breathless during or after periods",
    "You cancel plans or miss work because of bleeding",
  ];

  const causes = [
    {
      title: "Hormonal Imbalance",
      description:
        "When oestrogen and progesterone are out of balance, the uterine lining can become thicker and bleed heavily. This can occur in teenagers, women with PCOS and those approaching menopause.",
    },
    {
      title: "Uterine Fibroids",
      description:
        "These are non-cancerous growths in the uterus and are a common cause of heavy, prolonged and sometimes painful periods.",
    },
    {
      title: "Uterine Polyps",
      description:
        "Small growths on the uterine lining can cause heavy menstrual flow or bleeding between periods.",
    },
    {
      title: "Adenomyosis and Endometriosis",
      description:
        "These conditions can contribute to heavy bleeding and severe menstrual cramps.",
    },
    {
      title: "Thyroid Problems",
      description:
        "An underactive or overactive thyroid can affect hormones and change menstrual flow.",
    },
    {
      title: "Bleeding Disorders",
      description:
        "Some women have blood-clotting problems that can cause heavy bleeding from their very first periods.",
    },
    {
      title: "Copper IUD and Medicines",
      description:
        "A copper intrauterine device and certain blood-thinning or hormonal medicines may increase menstrual bleeding.",
    },
    {
      title: "Other Causes",
      description:
        "Pelvic infection, ovulation problems and, rarely, growths of the uterus or cervix may contribute to abnormal bleeding. These possibilities need appropriate evaluation, particularly after age forty.",
    },
  ];

  const effects = [
    {
      title: "Anaemia",
      description:
        "Repeated blood loss can lower iron and haemoglobin levels. Symptoms may include fatigue, pale skin, hair fall, headaches, palpitations and poor concentration.",
    },
    {
      title: "Reduced Quality of Life",
      description:
        "Worry about leaks, pain and fatigue can affect confidence, studies, work, travel and personal relationships.",
    },
    {
      title: "Hidden Health Conditions",
      description:
        "Fibroids and polyps may develop without obvious symptoms. Identifying them early can help guide appropriate treatment.",
    },
    {
      title: "Fertility Concerns",
      description:
        "Some underlying causes, including PCOS and uterine abnormalities, may also affect conception.",
    },
  ];

  const warningSigns = [
    "Bleeding that soaks through protection every hour for several hours",
    "Fainting, severe dizziness or a racing heartbeat",
    "Periods lasting over seven days repeatedly",
    "Sudden heavy bleeding after months of missed or light periods",
    "Bleeding between periods or after intercourse",
    "Any bleeding after menopause",
    "Severe pelvic pain along with heavy flow",
    "Persistent weakness, breathlessness or pale skin",
  ];

  const diagnosticTests = [
    {
      title: "Physical and Pelvic Examination",
      description:
        "An examination may be recommended to assess your general health and investigate possible causes of abnormal bleeding.",
    },
    {
      title: "Blood Tests",
      description:
        "Tests may check haemoglobin, iron levels, thyroid function and selected hormone levels depending on your symptoms.",
    },
    {
      title: "Pregnancy Test",
      description:
        "A pregnancy test may be advised to rule out pregnancy-related causes of bleeding.",
    },
    {
      title: "Pelvic Ultrasound",
      description:
        "Ultrasound can help identify fibroids, polyps, ovarian cysts or a thickened uterine lining. The clinic lists 3D and 4D ultrasound facilities.",
    },
    {
      title: "Hysteroscopy",
      description:
        "In selected cases, hysteroscopy allows the doctor to look directly inside the uterus. The clinic lists diagnostic hysteroscopy among its services.",
    },
  ];

  const treatments = [
    {
      title: "Medicines to Reduce Bleeding",
      description:
        "Certain non-hormonal medicines taken during the period can help reduce menstrual blood loss. The choice depends on your medical history and suitability.",
    },
    {
      title: "Hormonal Treatment",
      description:
        "Hormonal tablets or a hormone-releasing intrauterine system may help thin the uterine lining and make periods lighter and more regular.",
    },
    {
      title: "Iron and Nutritional Support",
      description:
        "Iron supplements and a nutritious diet may be recommended to treat iron deficiency and support recovery from anaemia.",
    },
    {
      title: "Treating the Underlying Cause",
      description:
        "Managing PCOS, correcting thyroid levels and treating infections where present can help bring menstrual bleeding under control.",
    },
    {
      title: "Hysteroscopic Treatment",
      description:
        "Polyps and selected fibroids inside the uterine cavity may be removed through hysteroscopy without abdominal cuts.",
    },
    {
      title: "Keyhole Surgery",
      description:
        "Laparoscopic myomectomy may remove fibroids while preserving the uterus. Laparoscopic hysterectomy may be considered when other options are unsuitable and future pregnancy is not planned.",
    },
  ];

  const lifestyleTips = [
    "Eat iron-rich foods such as spinach, lentils, chickpeas, jaggery, dates, beetroot and pomegranate",
    "Combine iron-rich foods with vitamin C sources such as lemon, amla and oranges to support iron absorption",
    "Drink plenty of water throughout the day",
    "Avoid skipping meals or following crash diets",
    "Exercise moderately and maintain a regular sleep routine",
    "Manage stress with yoga, walking or breathing exercises",
    "Track your menstrual cycle and bleeding pattern",
    "Avoid aspirin and random painkillers without medical advice, as some medicines can increase bleeding",
  ];

  const ageGroups = [
    {
      title: "Teenagers",
      description:
        "Heavy flow can occur during the first few years after periods begin. However, very heavy bleeding, fatigue or fainting needs medical assessment.",
    },
    {
      title: "Young Women",
      description:
        "PCOS, thyroid problems and bleeding disorders are among the possible causes of heavy menstrual bleeding in young women.",
    },
    {
      title: "Women in Their Thirties and Forties",
      description:
        "Fibroids, polyps, adenomyosis and hormonal changes become more common and may contribute to heavier periods.",
    },
    {
      title: "Near Menopause",
      description:
        "Cycles can become heavy and irregular during the transition to menopause. Persistent heavy bleeding should be evaluated rather than assumed to be a normal menopause change.",
    },
  ];

  const firstVisitItems = [
    "Dates of your last few periods",
    "A note of how many pads you use each day",
    "Previous medical reports and ultrasound scans",
    "A list of your medicines and supplements",
    "Your questions and concerns, written down",
  ];

  const reasonsToChoose = [
    "A doctor who listens patiently and explains clearly",
    "Medical, hysteroscopic and keyhole surgical options in one practice",
    "Uterus-preserving treatment where possible",
    "3D and 4D ultrasound and hysteroscopy facilities",
    "Fertility and pregnancy services under one roof",
    "Continuity of care through follow-up visits",
    "A private, respectful setting for sensitive concerns",
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          <div className="order-1 min-w-0 space-y-10">
            {/* Introduction */}
            <section className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FCEEF2] px-4 py-2 text-sm font-semibold text-[#8F1738]">
                <HeartPulse size={17} />
                Menstrual Health Care in Moradabad
              </div>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Heavy Periods Doctor Near Civil Lines, Moradabad: Relief from
                Heavy Menstrual Bleeding
              </h1>

              <p className="leading-8 text-gray-600">
                Many women quietly manage heavy periods for years. They carry
                spare clothes, avoid travel on certain days, miss work or
                college and feel exhausted for weeks afterwards. Because
                periods are rarely discussed openly, heavy bleeding often goes
                untreated far too long.
              </p>

              <p className="leading-8 text-gray-600">
                Heavy menstrual bleeding is common, has several possible
                causes and can often be treated. If you are looking for a
                heavy periods doctor near Civil Lines, Moradabad, Dr. Priyanka
                Pachauri at Dr. Priyanka Gynaec offers evaluation and
                treatment for menstrual disorders in a private, respectful
                setting.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#FCEEF2]"
                >
                  WhatsApp Us
                </a>
              </div>
            </section>

            {/* Website Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Website Overview: Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                The clinic&apos;s website describes a women&apos;s health and
                fertility centre guided by the philosophy &quot;Her Health
                First.&quot; Dr. Priyanka Pachauri is presented as a
                gynaecologist in Moradabad focused on menstrual disorder
                treatment, antenatal and postnatal care, high-risk pregnancies
                and laparoscopic surgery.
              </p>

              <p className="leading-8 text-gray-600">
                Relevant services include diagnostic hysteroscopy,
                hysteroscopic polypectomy, laparoscopic myomectomy, laparoscopic
                hysterectomy and endometriosis surgery. The clinic also lists
                3D and 4D ultrasound facilities. Its emphasis on listening
                first and continuity of care is relevant for heavy bleeding
                that may need investigation and follow-up.
              </p>
            </section>

            {/* What Are Heavy Periods */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Are Heavy Periods?
              </h2>

              <p className="leading-8 text-gray-600">
                Doctors call heavy menstrual bleeding menorrhagia. It refers
                to menstrual bleeding that is so heavy or prolonged that it
                interferes with your daily activities and quality of life.
                Traditionally, blood loss above 80 ml per period is considered
                heavy, although most women find the everyday signs easier to
                recognise than measuring the amount.
              </p>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-bold text-[#74122E]">
                  You May Have Heavy Periods If:
                </h3>

                <ul className="space-y-3">
                  {heavyPeriodSigns.map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8F1738]" />
                      <span className="leading-7 text-gray-700">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Causes */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Common Causes of Heavy Periods
              </h2>

              <p className="leading-8 text-gray-600">
                Heavy bleeding is a symptom rather than a diagnosis. Finding
                the underlying cause is an important step towards choosing
                effective treatment.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {causes.map((cause) => (
                  <article
                    key={cause.title}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-[#FCEEF2] p-3 text-[#8F1738]">
                      <Activity size={21} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      {cause.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {cause.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Why Not Ignore */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Heavy Periods Should Not Be Ignored
              </h2>

              <p className="leading-8 text-gray-600">
                Repeated heavy bleeding can affect your physical health,
                emotional well-being and daily routine. Getting the cause
                checked can help prevent ongoing problems.
              </p>

              <div className="space-y-4">
                {effects.map((effect) => (
                  <div
                    key={effect.title}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      {effect.title}
                    </h3>
                    <p className="leading-7 text-gray-600">
                      {effect.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Warning Signs */}
            <section className="space-y-5 rounded-2xl border border-red-200 bg-red-50 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-100 p-2 text-red-700">
                  <HeartPulse size={22} />
                </div>
                <h2 className="text-xl font-bold text-red-800">
                  Warning Signs: See a Doctor Quickly
                </h2>
              </div>

              <p className="leading-7 text-gray-700">
                Do not ignore repeated or severe bleeding. Consult a specialist
                promptly if you experience:
              </p>

              <ul className="space-y-3">
                {warningSigns.map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                    <span className="leading-7">{sign}</span>
                  </li>
                ))}
              </ul>

              <p className="font-semibold leading-7 text-red-800">
                If you are soaking through protection every hour for several
                hours, fainting or experiencing severe dizziness, seek urgent
                medical care rather than waiting for a routine appointment.
              </p>
            </section>

            {/* Diagnosis */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                How Heavy Periods Are Diagnosed
              </h2>

              <p className="leading-8 text-gray-600">
                A good consultation begins with listening. Your doctor may ask
                about cycle length, pad use, blood clots, pain, pregnancies,
                medicines, family history and how bleeding affects your
                routine. Keeping a period diary for two or three months can
                provide useful information.
              </p>

              <h3 className="text-lg font-bold text-[#74122E]">
                Tests That May Be Recommended
              </h3>

              <div className="space-y-4">
                {diagnosticTests.map((test, index) => (
                  <div
                    key={test.title}
                    className="flex gap-4 rounded-xl border border-gray-200 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FCEEF2] font-bold text-[#8F1738]">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold text-[#74122E]">
                        {test.title}
                      </h3>
                      <p className="leading-7 text-gray-600">
                        {test.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="rounded-xl bg-[#FCEEF2] p-5 leading-8 text-[#74122E]">
                A responsible specialist recommends only the tests you need
                and explains why each investigation is being suggested.
              </p>
            </section>

            {/* Treatment */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Treatment Options for Heavy Periods
              </h2>

              <p className="leading-8 text-gray-600">
                Treatment depends on the cause of bleeding, your age, the
                severity of symptoms and whether you plan future pregnancies.
                Your doctor may discuss one or more of the following options:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {treatments.map((treatment) => (
                  <article
                    key={treatment.title}
                    className="rounded-xl border border-gray-200 p-5 shadow-sm"
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-[#FCEEF2] p-3 text-[#8F1738]">
                      <Stethoscope size={21} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      {treatment.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {treatment.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="rounded-2xl border border-[#E8C5D0] bg-[#FCEEF2] p-6">
                <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                  Is Surgery Always Necessary?
                </h3>
                <p className="leading-8 text-gray-700">
                  No. Many women can be managed with medicines, hormonal
                  treatment and iron support. Surgery is considered when other
                  treatments fail, are unsuitable or when the underlying
                  condition requires a procedure. Your doctor should explain
                  the available alternatives so you can make an informed
                  decision.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-semibold text-[#8F1738] hover:underline"
              >
                Explore Our Gynaecology Services
                <span aria-hidden="true">→</span>
              </Link>
            </section>

            {/* Diet and Lifestyle */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Diet and Lifestyle Tips
              </h2>

              <p className="leading-8 text-gray-600">
                Healthy habits do not replace medical treatment, but they can
                support recovery and general well-being, especially when
                menstrual blood loss has affected your iron levels.
              </p>

              <div className="rounded-2xl bg-gray-50 p-6">
                <ul className="space-y-4">
                  {lifestyleTips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <HeartPulse
                        size={19}
                        className="mt-1 shrink-0 text-[#8F1738]"
                      />
                      <span className="leading-7 text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Different Ages */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Heavy Periods at Different Ages
              </h2>

              <p className="leading-8 text-gray-600">
                The possible causes of heavy menstrual bleeding can vary with
                age and stage of life. A proper evaluation helps identify what
                may be contributing to your symptoms.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ageGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      {group.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {group.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* First Visit */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What to Bring to Your First Visit
              </h2>

              <p className="leading-8 text-gray-600">
                Preparing a few details before your appointment can help the
                doctor understand your menstrual history and symptoms.
              </p>

              <div className="rounded-2xl border border-gray-200 p-6">
                <ul className="space-y-4">
                  {firstVisitItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ClipboardList
                        size={19}
                        className="mt-1 shrink-0 text-[#8F1738]"
                      />
                      <span className="leading-7 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="leading-8 text-gray-600">
                Your consultation can help you understand the probable cause,
                the treatment plan and what improvement may reasonably be
                expected. The exact plan depends on your diagnosis and response
                to treatment.
              </p>
            </section>

            {/* Why Choose */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                Heavy menstrual bleeding can be a sensitive concern. Choosing
                a doctor who listens, explains the available options and
                supports follow-up care can make the treatment journey easier.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {reasonsToChoose.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
                  >
                    <Award
                      size={20}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="leading-7 text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <section className="space-y-5 rounded-2xl bg-[#F8F4F6] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Get Help for Heavy Menstrual Bleeding
              </h2>

              <p className="leading-8 text-gray-700">
                If heavy periods are affecting your daily routine, do not
                ignore the symptoms. Book a consultation with Dr. Priyanka
                Pachauri at Dr. Priyanka Gynaec to discuss your concerns and
                understand the available treatment options.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={18} />
                  Call for Appointment
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  WhatsApp Now
                </a>
              </div>
            </section>

            {/* Location and Contact */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Location and Contact
              </h2>

              <p className="leading-8 text-gray-600">
                Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
                Nagar, Moradabad, Uttar Pradesh 244001. The clinic is
                accessible to women from Civil Lines and nearby areas.
              </p>

              <p className="leading-8 text-gray-600">
                Call +91 90797 65578, message on WhatsApp at +91 89796 70705,
                or email drpriyankagynaec@gmail.com. If you are looking for a
                heavy periods doctor near Civil Lines, Moradabad, book a
                consultation and take the first step towards understanding
                your menstrual health.
              </p>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-xl font-bold text-[#74122E]">
                  Dr. Priyanka Pachauri
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="leading-7 text-gray-600">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                      Pradesh – 244001
                    </p>
                  </div>

                  <a
                    href="tel:+919079765578"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#8F1738]"
                  >
                    <Phone size={19} className="text-[#8F1738]" />
                    +91 90797 65578
                  </a>

                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="flex items-center gap-3 break-all text-gray-600 hover:text-[#8F1738]"
                  >
                    <Mail size={19} className="shrink-0 text-[#8F1738]" />
                    drpriyankagynaec@gmail.com
                  </a>

                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 break-all text-gray-600 hover:text-[#8F1738]"
                  >
                    <Globe size={19} className="shrink-0 text-[#8F1738]" />
                    www.gynaecologistmoradabad.com
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+919079765578"
                    className="rounded-lg bg-[#8F1738] px-5 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[#8F1738] px-5 py-3 font-semibold text-[#8F1738] transition hover:bg-[#FCEEF2]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      {faq.q}
                    </h3>
                    <p className="leading-7 text-gray-600">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="rounded-2xl bg-[#8F1738] p-7 text-center text-white sm:p-9">
              <h2 className="text-2xl font-bold">
                Take Control of Your Menstrual Health
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/90">
                Heavy periods should not control your routine or affect your
                quality of life. Consult Dr. Priyanka Pachauri at Dr. Priyanka
                Gynaec near Civil Lines, Moradabad, for evaluation and
                personalised guidance.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-gray-100"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-[#74122E]">
                  Need Help with Heavy Periods?
                </h3>

                <p className="mb-5 leading-7 text-gray-600">
                  Contact the clinic to enquire about a consultation for heavy
                  menstrual bleeding and related concerns.
                </p>

                <a
                  href="tel:+919079765578"
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#8F1738] px-5 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={18} />
                  +91 90797 65578
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-lg border border-[#8F1738] px-5 py-3 font-semibold text-[#8F1738] transition hover:bg-[#FCEEF2]"
                >
                  WhatsApp Appointment
                </a>
              </div>

              <div className="rounded-2xl bg-[#F8F4F6] p-6">
                <h3 className="mb-4 text-lg font-bold text-[#74122E]">
                  Quick Links
                </h3>

                <div className="space-y-3">
                  <Link
                    href="/services"
                    className="block text-gray-700 transition hover:text-[#8F1738]"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-gray-700 transition hover:text-[#8F1738]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
