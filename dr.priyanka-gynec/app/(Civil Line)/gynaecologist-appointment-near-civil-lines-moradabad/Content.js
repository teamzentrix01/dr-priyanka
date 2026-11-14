
import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  CalendarCheck,
  Clock,
  Heart,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function GynaecologistAppointment() {
  const faqs = [
    {
      q: "How do I book an appointment with Dr. Priyanka Pachauri?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, email drpriyankagynaec@gmail.com, or use the appointment option on the website.",
    },
    {
      q: "Do I need to be married to see a gynaecologist?",
      a: "No. Women of any age or marital status can consult a gynaecologist for periods, infections, PCOS or any other concern.",
    },
    {
      q: "Will I need an internal examination at my first visit?",
      a: "Not always. The doctor decides after listening to your history, and any examination is done with your consent and privacy.",
    },
    {
      q: "Can I visit during my period?",
      a: "Yes, for most concerns. For certain tests, such as a Pap smear, the doctor may advise a different time.",
    },
    {
      q: "What should I bring to my appointment?",
      a: "Bring previous reports, scans, prescriptions, a list of medicines and the dates of your last periods.",
    },
    {
      q: "Can I bring my partner or a family member?",
      a: "Yes. You are welcome to bring someone for support during your consultation.",
    },
    {
      q: "How soon should I see a doctor if I think I am pregnant?",
      a: "Ideally, book a consultation within the first eight weeks of pregnancy, or earlier if you have pain, bleeding or a history of miscarriage.",
    },
    {
      q: "Does the clinic offer care for newborn babies?",
      a: "Yes. Paediatric consultations, newborn care and vaccinations are available.",
    },
  ];

  const appointmentReasons = [
    "Find the cause of symptoms early",
    "Get treatment before a problem grows",
    "Plan a pregnancy or confirm one",
    "Learn about contraception",
    "Receive preventive health advice",
    "Ask private questions in a safe space",
  ];

  const symptoms = [
    "Irregular, delayed, heavy or painful periods",
    "A missed period and possible pregnancy",
    "Pelvic or lower abdominal pain",
    "White discharge, itching, burning or an unpleasant smell",
    "Bleeding between periods or after intercourse",
    "Difficulty conceiving after a year of trying, or six months if over 35",
    "Acne, unwanted hair growth or weight gain with irregular periods",
    "A known ovarian cyst, fibroid or polyp",
    "A feeling of heaviness in the vagina or urine leakage",
    "Menopause symptoms such as hot flashes and sleep problems",
    "A need for contraception or family planning advice",
  ];

  const urgentSymptoms = [
    "Heavy bleeding soaking a pad every hour",
    "Sudden, severe pelvic or abdominal pain",
    "Bleeding, leaking of fluid or reduced baby movements during pregnancy",
    "Fever with pelvic pain or foul discharge",
    "Fainting or severe dizziness",
    "Heavy or persistent bleeding after menopause",
  ];

  const preparationTips = [
    "Note the dates of your last few periods",
    "Write down your symptoms, when they began and what makes them better or worse",
    "Carry previous medical records, prescriptions and ultrasound reports",
    "Make a list of the medicines and supplements you take",
    "Note any allergies and past surgeries",
    "Write your questions so nothing is forgotten",
    "Wear comfortable clothing",
    "Bring a family member or friend if you want support",
  ];

  const comfortTips = [
    "Remember that doctors discuss these topics every day, and nothing you say is too embarrassing",
    "Be honest about your symptoms, habits and medicines, as accurate information leads to better care",
    "Ask for explanations if anything is unclear",
    "Tell the doctor if you feel nervous, so the visit can be paced to suit you",
    "Ask for a female staff member to be present during an examination if you prefer",
  ];

  const services = [
    {
      title: "Periods and Hormonal Health",
      description:
        "Consultations for irregular, heavy or painful periods, PCOS and thyroid-related menstrual cycle changes.",
    },
    {
      title: "Pregnancy and Maternity Care",
      description:
        "Antenatal checkups, ultrasound, high-risk pregnancy monitoring, birth planning and postnatal care. Normal vaginal delivery is prioritised where medically suitable.",
    },
    {
      title: "Fertility and IVF",
      description:
        "Evaluation and personalised treatment guidance for couples experiencing difficulty conceiving.",
    },
    {
      title: "Laparoscopic Gynaecological Surgery",
      description:
        "Keyhole procedures for ovarian cysts, fibroids, endometriosis, prolapse and hysterectomy using high-definition 3D technology.",
    },
    {
      title: "Hysteroscopy",
      description:
        "Diagnostic hysteroscopy and removal of uterine polyps without external cuts.",
    },
    {
      title: "Sterilization",
      description:
        "Laparoscopic tubal ligation as a day-care procedure.",
    },
    {
      title: "Paediatric Care",
      description:
        "Child and newborn consultations, routine care and vaccinations.",
    },
  ];

  const consultationSteps = [
    {
      title: "Conversation",
      description:
        "The doctor listens to your concerns and takes a detailed history, including periods, pregnancies, medical conditions and family history.",
    },
    {
      title: "Examination",
      description:
        "If needed, the doctor examines you with your consent and in privacy. You can ask questions or pause at any time.",
    },
    {
      title: "Tests",
      description:
        "Blood tests, an ultrasound or other investigations are suggested only when necessary, with the reasons explained.",
    },
    {
      title: "Explanation",
      description:
        "The doctor discusses the likely cause of your concern and available treatment options in simple language.",
    },
    {
      title: "Care Plan",
      description:
        "You receive a clear plan for treatment, further investigations if required and a follow-up date.",
    },
  ];

  const appointmentTypes = [
    {
      title: "First-Time Visit for a Teenager",
      description:
        "A consultation may include a conversation about periods, hygiene and nutrition. A parent can be present if the teenager prefers.",
    },
    {
      title: "Premarital or Preconception Advice",
      description:
        "Guidance on health checks, supplements and planning a healthy pregnancy.",
    },
    {
      title: "Pregnancy Consultation",
      description:
        "Review of pregnancy history, recommended tests, ultrasound and nutrition advice.",
    },
    {
      title: "Fertility Consultation",
      description:
        "Evaluation of both partners and discussion of a personalised plan for conception.",
    },
    {
      title: "Surgical Consultation",
      description:
        "Discussion about whether surgery is needed, available options and alternatives, with time to ask questions or seek a second opinion.",
    },
    {
      title: "Menopause Consultation",
      description:
        "Review of menopause symptoms, related health risks and possible management options.",
    },
  ];

  const visitTiming = [
    {
      title: "Period Problems",
      description:
        "You can usually visit at any time, but note your cycle dates. Some tests are best performed on specific days, which the doctor can advise you about.",
    },
    {
      title: "Pregnancy",
      description:
        "Book a consultation as soon as a home pregnancy test is positive, ideally within the first eight weeks.",
    },
    {
      title: "Pap Smear or Cervical Screening",
      description:
        "Avoid scheduling during your period unless advised. You may also be asked to avoid intercourse or vaginal products for a day or two beforehand.",
    },
    {
      title: "Fertility Concerns",
      description:
        "Come together as a couple if possible, as both partners are part of the fertility evaluation.",
    },
    {
      title: "Heavy Bleeding",
      description:
        "Do not wait for a convenient appointment date if bleeding is severe. Seek urgent medical care.",
    },
  ];

  const afterVisit = [
    "Follow the prescribed treatment and do not stop medicines on your own",
    "Complete recommended tests and scans on time",
    "Keep your follow-up appointment",
    "Contact the clinic if your symptoms worsen or new ones appear",
    "Keep your medical reports together in a folder for future visits",
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
                <CalendarCheck size={17} />
                Gynaecologist Appointment in Moradabad
              </div>

              <h1 className="text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Gynaecologist Appointment Near Civil Lines, Moradabad: Simple
                Booking, Comfortable Care
              </h1>

              <p className="leading-8 text-gray-600">
                Many women put off seeing a gynaecologist. Some feel shy, some
                are unsure what will happen during the visit, and others simply
                wait for symptoms to settle. A little preparation and a clear
                idea of what to expect can make the visit much easier.
              </p>

              <p className="leading-8 text-gray-600">
                If you want to book a gynaecologist appointment near Civil
                Lines, Moradabad, Dr. Priyanka Pachauri at Dr. Priyanka Gynaec
                offers consultations for women at every stage of life, in a
                private and respectful setting.
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
                gynaecologist in Moradabad focused on antenatal and postnatal
                care, high-risk pregnancies, laparoscopic gynaecological
                surgery and menstrual disorder treatment.
              </p>

              <p className="leading-8 text-gray-600">
                The homepage lists pregnancy and birthing care, normal
                delivery, fertility and IVF, 3D laparoscopy, hysteroscopy,
                endometriosis surgery, sterilization and paediatric care. It
                also names 3D and 4D ultrasound among its facilities.
                Appointment options include a booking route, phone and
                WhatsApp contact, and an email address.
              </p>
            </section>

            {/* Why Book */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Book a Gynaecologist Appointment?
              </h2>

              <p className="leading-8 text-gray-600">
                A gynaecologist looks after the health of the female
                reproductive system and supports women through pregnancy,
                fertility, hormonal changes and menopause. A visit can help
                you:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {appointmentReasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <ShieldCheck
                      className="mt-1 shrink-0 text-[#8F1738]"
                      size={19}
                    />
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>

              <p className="rounded-xl border-l-4 border-[#8F1738] bg-[#FCEEF2] p-4 font-medium leading-7 text-[#74122E]">
                You do not need to wait until something is seriously wrong.
                Routine consultations can help you understand your health and
                address concerns early.
              </p>
            </section>

            {/* When to See */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                When Should You See a Gynaecologist?
              </h2>

              <p className="leading-8 text-gray-600">
                Consider booking a visit if you experience any of the
                following concerns:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {symptoms.map((symptom) => (
                  <div
                    key={symptom}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8F1738]" />
                    <p className="text-sm leading-7 text-gray-700">
                      {symptom}
                    </p>
                  </div>
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                Routine yearly checkups are also valuable, even when you feel
                well. Your doctor can advise you about preventive care and
                screening based on your age and health history.
              </p>
            </section>

            {/* Urgent Symptoms */}
            <section className="space-y-5 rounded-2xl border border-red-200 bg-red-50 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-100 p-2 text-red-700">
                  <Clock size={22} />
                </div>
                <h2 className="text-xl font-bold text-red-800">
                  Urgent Symptoms: Do Not Wait for an Appointment
                </h2>
              </div>

              <p className="leading-7 text-gray-700">
                Some symptoms need immediate medical attention. Seek urgent
                care at the nearest hospital if you have:
              </p>

              <ul className="space-y-3">
                {urgentSymptoms.map((symptom) => (
                  <li
                    key={symptom}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                    <span className="leading-7">{symptom}</span>
                  </li>
                ))}
              </ul>

              <p className="font-semibold leading-7 text-red-800">
                Do not delay emergency care while waiting for a routine clinic
                appointment.
              </p>
            </section>

            {/* Services */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Services You Can Consult For
              </h2>

              <p className="leading-8 text-gray-600">
                Dr. Priyanka Gynaec lists a range of women&apos;s healthcare
                services. Depending on your concern, you can seek consultation
                for:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <article
                    key={service.title}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-[#FCEEF2] p-3 text-[#8F1738]">
                      <Heart size={21} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </article>
                ))}
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-semibold text-[#8F1738] hover:underline"
              >
                Explore Our Services
                <span aria-hidden="true">→</span>
              </Link>
            </section>

            {/* Booking */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                How to Book Your Appointment
              </h2>

              <p className="leading-8 text-gray-600">
                You can book your gynaecologist appointment near Civil Lines,
                Moradabad, through any of these contact options:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:+919079765578"
                  className="flex items-center gap-4 rounded-xl border border-gray-200 p-5 transition hover:border-[#8F1738]"
                >
                  <div className="rounded-lg bg-[#FCEEF2] p-3 text-[#8F1738]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#74122E]">Phone</h3>
                    <p className="text-sm text-gray-600">
                      +91 90797 65578
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-gray-200 p-5 transition hover:border-[#8F1738]"
                >
                  <div className="rounded-lg bg-[#FCEEF2] p-3 text-[#8F1738]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#74122E]">WhatsApp</h3>
                    <p className="text-sm text-gray-600">
                      +91 89796 70705
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:drpriyankagynaec@gmail.com"
                  className="flex items-center gap-4 rounded-xl border border-gray-200 p-5 transition hover:border-[#8F1738]"
                >
                  <div className="rounded-lg bg-[#FCEEF2] p-3 text-[#8F1738]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#74122E]">Email</h3>
                    <p className="break-all text-sm text-gray-600">
                      drpriyankagynaec@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-gray-200 p-5 transition hover:border-[#8F1738]"
                >
                  <div className="rounded-lg bg-[#FCEEF2] p-3 text-[#8F1738]">
                    <Globe size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#74122E]">Website</h3>
                    <p className="text-sm text-gray-600">
                      Book an appointment online
                    </p>
                  </div>
                </a>
              </div>

              <p className="leading-8 text-gray-600">
                When you call or message, share your name, age, reason for your
                visit and preferred time. Mention if your concern is urgent,
                so the team can guide you.
              </p>
            </section>

            {/* Choosing Time */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Choosing the Right Time for the Visit
              </h2>

              <div className="space-y-4">
                {visitTiming.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-bold text-[#74122E]">
                      {item.title}
                    </h3>
                    <p className="leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Preparation */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                How to Prepare for Your Appointment
              </h2>

              <p className="leading-8 text-gray-600">
                A little preparation makes the consultation more useful. Before
                visiting, try to:
              </p>

              <div className="rounded-2xl bg-gray-50 p-6">
                <ul className="space-y-4">
                  {preparationTips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <ClipboardList
                        size={19}
                        className="mt-1 shrink-0 text-[#8F1738]"
                      />
                      <span className="leading-7 text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="leading-8 text-gray-600">
                If you are pregnant, bring your antenatal reports and any
                previous scans so the doctor can review your pregnancy history.
              </p>
            </section>

            {/* Consultation Process */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                What Happens During the Consultation?
              </h2>

              <p className="leading-8 text-gray-600">
                Knowing what to expect can make your first visit feel less
                stressful. A consultation may include the following steps:
              </p>

              <div className="space-y-4">
                {consultationSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-xl border border-gray-200 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8F1738] font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-[#74122E]">
                        {step.title}
                      </h3>
                      <p className="leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="rounded-xl bg-[#FCEEF2] p-5 leading-8 text-[#74122E]">
                Most visits involve talking and, if needed, a brief
                examination. An internal examination is not always necessary.
                Any examination should be explained and performed with your
                consent.
              </p>
            </section>

            {/* Comfort Tips */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Tips to Feel More Comfortable
              </h2>

              <p className="leading-8 text-gray-600">
                It is normal to feel nervous before a gynaecologist
                appointment, especially if it is your first visit. These
                simple steps may help:
              </p>

              <div className="space-y-3">
                {comfortTips.map((tip) => (
                  <div
                    key={tip}
                    className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
                  >
                    <Heart
                      size={19}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="leading-7 text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Different Appointment Needs */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Appointments for Different Needs
              </h2>

              <p className="leading-8 text-gray-600">
                Women may visit a gynaecologist for different reasons at
                different stages of life. The consultation is guided by your
                age, symptoms and health requirements.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {appointmentTypes.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-bold text-[#74122E]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* After Visit */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                After Your Visit
              </h2>

              <p className="leading-8 text-gray-600">
                Following your care plan and attending follow-up visits can
                help you manage your health. After the consultation:
              </p>

              <div className="rounded-2xl border border-gray-200 p-6">
                <ul className="space-y-4">
                  {afterVisit.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ShieldCheck
                        size={19}
                        className="mt-1 shrink-0 text-[#8F1738]"
                      />
                      <span className="leading-7 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Why Choose */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="leading-8 text-gray-600">
                Choosing a gynaecologist is a personal decision. Dr. Priyanka
                Gynaec presents a women&apos;s healthcare practice with
                services and facilities for different stages of life.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "A doctor who listens patiently and explains clearly",
                  "A wide range of women's health services in one place",
                  "Advanced facilities, including 3D and 4D ultrasound and 3D laparoscopy",
                  "Fertility, pregnancy and paediatric care in the same practice",
                  "Continuity, with a team that knows your history",
                  "A private, respectful environment",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
                  >
                    <Award
                      size={20}
                      className="mt-1 shrink-0 text-[#8F1738]"
                    />
                    <p className="leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <section className="space-y-5 rounded-2xl bg-[#F8F4F6] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Book Your Gynaecologist Appointment Today
              </h2>

              <p className="leading-8 text-gray-700">
                If you are looking for a gynaecologist appointment near Civil
                Lines, Moradabad, contact Dr. Priyanka Gynaec to ask about
                consultation availability. You can call, send a WhatsApp
                message or use the website appointment option.
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

            {/* Location */}
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#74122E]">
                Location and Contact
              </h2>

              <p className="leading-8 text-gray-600">
                Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
                Nagar, Moradabad, Uttar Pradesh 244001. The clinic is
                accessible to women from Civil Lines and nearby areas.
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
                Take the First Step Towards Better Women&apos;s Health
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/90">
                Book a consultation with Dr. Priyanka Pachauri at Dr. Priyanka
                Gynaec near Civil Lines, Moradabad. Get guidance for your
                concerns in a private and respectful setting.
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
                  Need an Appointment?
                </h3>
                <p className="mb-5 leading-7 text-gray-600">
                  Contact the clinic to enquire about your consultation and
                  preferred appointment time.
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
