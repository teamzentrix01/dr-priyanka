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

export default function GynaecologistClinicMoradabad() {
  const faqs = [
    {
      q: "What services does the clinic offer?",
      a: "It offers gynaecology, laparoscopy, fertility and IVF, pregnancy care, normal delivery and paediatric care.",
    },
    {
      q: "When should I see a gynaecologist?",
      a: "See one for period problems, pelvic pain, discharge, pregnancy, fertility concerns or routine screening.",
    },
    {
      q: "Do I need to be married to visit a gynaecologist?",
      a: "No. Women of any age or marital status can consult for health concerns.",
    },
    {
      q: "Is there a female doctor available?",
      a: "Yes. Dr. Priyanka Pachauri is a female gynaecologist known for compassionate care.",
    },
    {
      q: "Does the clinic handle high-risk pregnancies?",
      a: "Yes, the clinic provides care for high-risk pregnancies along with routine antenatal services.",
    },
    {
      q: "Does the clinic offer laparoscopic surgery?",
      a: "Yes, it offers 3D laparoscopic procedures such as cystectomy, myomectomy and hysterectomy.",
    },
    {
      q: "Is IVF treatment available?",
      a: "Yes, the clinic offers fertility evaluation and IVF treatment.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "Bring old reports, scans, prescriptions and a note of your symptoms and last period date.",
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
                Gynaecologist Clinic in Moradabad Near Me: Complete Women&apos;s Healthcare Under One Roof
              </h1>

              <p className="mb-4 text-gray-700">
                Searching for a gynaecologist clinic in Moradabad near me is
                rarely a casual task. It usually means something matters: a
                pregnancy, a long-standing period problem, pelvic pain, a
                fertility concern or a routine check-up you have delayed for too
                long.
              </p>

              <p className="mb-4 text-gray-700">
                Choosing the right clinic matters. A good gynaecology clinic is
                more than a doctor and a consultation room. It is a place where
                you feel heard, where diagnosis is accurate and where treatment
                fits your life.
              </p>

              <p className="text-gray-700">
                This guide explains what to look for in a gynaecologist clinic,
                the services available, and how Dr. Priyanka Gynaec supports
                women at every stage of life.
              </p>
            </div>

            {/* Section 2 — What Does Gynaecologist Treat */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does a Gynaecologist Treat?
              </h2>

              <p className="mb-4 text-gray-700">
                A gynaecologist is a doctor who specialises in the female
                reproductive system. Many women assume they should visit only
                when pregnant, but a gynaecologist helps at every age.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Teenage years: irregular or painful periods, hygiene guidance, hormonal concerns</li>
                <li>Young adulthood: contraception, PCOS, infections, pre-pregnancy counselling</li>
                <li>Pregnancy: antenatal care, scans, high-risk pregnancy management and delivery</li>
                <li>Fertility years: infertility evaluation, ovulation tracking, IVF</li>
                <li>Midlife: heavy bleeding, fibroids, hormonal changes</li>
                <li>Menopause and after: menopausal symptoms, prolapse, screening</li>
              </ul>
            </div>

            {/* Section 3 — When Should You Visit */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Visit a Gynaecologist?
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait for a serious problem. Book a visit if you notice
                any of the following.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular, missed, very heavy or very painful periods</li>
                <li>Abnormal vaginal discharge, itching or bad smell</li>
                <li>Pelvic or lower abdominal pain</li>
                <li>Pain during intercourse</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>A positive pregnancy test or a planned pregnancy</li>
                <li>Difficulty conceiving after 6 to 12 months of trying</li>
                <li>Symptoms of PCOS such as weight gain, acne or excess hair growth</li>
                <li>Lumps, fibroids or cysts found on a scan</li>
                <li>Urinary leakage or a feeling of heaviness (possible prolapse)</li>
                <li>Menopausal symptoms such as hot flushes and mood changes</li>
                <li>Routine screening such as a Pap smear</li>
              </ul>
            </div>

            {/* Section 4 — What Makes Good Clinic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes a Good Gynaecologist Clinic?
              </h2>

              <p className="mb-4 text-gray-700">
                When comparing options near you, look beyond distance.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Doctor and Care Quality
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A qualified, experienced female gynaecologist</li>
                <li>Time to listen and explain clearly</li>
                <li>Respect for your privacy and choices</li>
                <li>Honest advice about whether surgery or medicine is really needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Technology and Facilities
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Modern ultrasound, including 3D/4D imaging</li>
                <li>Minimally invasive (laparoscopic) surgery options</li>
                <li>Hygienic, comfortable consultation rooms</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Complete Services
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy, fertility, gynaecology and surgery in one place</li>
                <li>Continuity, so your history is known at every visit</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Patient Experience
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Easy appointment booking by phone or WhatsApp</li>
                <li>Convenient, accessible location</li>
                <li>Genuine patient reviews and testimonials</li>
                <li>Clear follow-up after treatment</li>
              </ul>
            </div>

            {/* Section 5 — About Clinic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec: Women&apos;s Health Clinic in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec runs on a simple philosophy: &quot;Her
                Health First.&quot; Your comfort, your choices and your story
                sit at the centre of care. The clinic listens first and then
                applies advanced expertise and technology with empathy and
                patience.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a respected gynaecologist in Moradabad,
                known for empathetic, safe-motherhood focused care. Her areas of
                work include pregnancy care, high-risk pregnancies, menstrual
                disorders and laparoscopic gynaecological surgery.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Women Choose This Clinic
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Patient-first, compassionate approach</li>
                <li>Expertise across gynaecology, fertility, pregnancy and laparoscopy</li>
                <li>Advanced technology for accurate diagnosis</li>
                <li>A team that remembers your history and concerns</li>
                <li>Care that continues from first visit through every follow-up</li>
                <li>Strong word of mouth, with families recommending the clinic to each other</li>
              </ul>
            </div>

            {/* Section 6 — Services */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services Available at the Clinic
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. General Gynaecology and Laparoscopy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Evaluation of menstrual problems, PCOS and pelvic pain</li>
                <li>Treatment of vaginal infections and abnormal discharge</li>
                <li>Expert 3D laparoscopic care for women&apos;s reproductive health</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Fertility and IVF
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Personalised fertility evaluation and treatment plans</li>
                <li>IVF support for couples</li>
                <li>Advanced tools such as time-lapse embryo imaging</li>
                <li>AI-assisted semen analysis and DNA integrity testing</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Pregnancy and Birthing Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Supportive, customised birthing experiences</li>
                <li>Care aimed at a safe journey to motherhood</li>
                <li>Attention to high-risk pregnancy needs</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Antenatal Services
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Structured prenatal check-ups throughout pregnancy</li>
                <li>Ultrasound scans and screening</li>
                <li>Nutrition and lifestyle guidance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Normal Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gentle care that prioritises natural, normal vaginal delivery</li>
                <li>Labour support and preparation guidance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Advanced Laparoscopic and Hysteroscopic Procedures
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Laparoscopic cystectomy: keyhole removal of ovarian cysts while preserving fertility</li>
                <li>Laparoscopic myomectomy: uterus-preserving surgery for fibroids</li>
                <li>Laparoscopic hysterectomy: minimally invasive surgery with faster recovery</li>
                <li>Sacrocolpopexy: keyhole repair of uterine and vaginal vault prolapse</li>
                <li>Laparoscopic sterilization: permanent day-care tubal ligation</li>
                <li>Diagnostic hysteroscopy: gentle evaluation of the uterine cavity</li>
                <li>Hysteroscopic polypectomy: removal of uterine polyps without cuts</li>
                <li>Endometriosis surgery: 3D laparoscopic excision and pelvic pain relief</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Paediatric Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Paediatric consultations</li>
                <li>Vaccinations</li>
                <li>Newborn care</li>
              </ul>
            </div>

            {/* Section 7 — Technology */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology That Supports Better Care
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery: more precision, smaller cuts and quicker recovery</li>
                <li>3D and 4D ultrasound: clear imaging for pregnancy and gynaecological assessment</li>
                <li>Time-lapse embryo incubator: closer monitoring of embryo development</li>
                <li>AI-powered semen analysis and DNA integrity testing: deeper fertility insights</li>
              </ul>

              <p className="text-gray-700">
                Technology is used with empathy. The goal is not to impress you
                but to give you accurate answers and safer treatment.
              </p>
            </div>

            {/* Section 8 — First Visit */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your First Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Many women feel nervous before their first appointment. A clear
                picture helps.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Warm welcome: You are greeted and your concern is noted privately.</li>
                <li>Conversation first: The doctor asks about symptoms, periods, medical history and goals.</li>
                <li>Examination if needed: Only the examinations relevant to your problem are done, with your consent.</li>
                <li>Tests and scans: Ultrasound, blood tests or swabs may be advised.</li>
                <li>Clear explanation: You hear the diagnosis and the options in simple words.</li>
                <li>Personalised plan: Treatment, timeline and follow-up are discussed.</li>
                <li>Questions welcome: You can ask anything without embarrassment.</li>
              </ul>
            </div>

            {/* Section 9 — Prepare */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Prepare for Your Appointment
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the date of your last period and your cycle length.</li>
                <li>Write down your symptoms and how long you have had them.</li>
                <li>Bring previous reports, scans and prescriptions.</li>
                <li>List the medicines or supplements you currently take.</li>
                <li>Prepare your questions in advance.</li>
                <li>Avoid vaginal creams or douching for a day or two before a swab or Pap test, unless told otherwise.</li>
                <li>Bring your partner if the visit is about fertility, pregnancy or contraception.</li>
              </ul>
            </div>

            {/* Section 10 — Common Concerns */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Women&apos;s Health Concerns Treated
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Menstrual Disorders
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular, heavy or painful periods</li>
                <li>Missed periods and hormonal imbalance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                PCOS
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weight, acne, hair growth and cycle concerns</li>
                <li>Ovulation support when planning pregnancy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Vaginal and Pelvic Infections
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Abnormal or white discharge</li>
                <li>Itching, burning and recurrent infections</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Fibroids, Cysts and Polyps
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diagnosis by scan</li>
                <li>Treatment from medical care to minimally invasive surgery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Endometriosis
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe cramps and chronic pelvic pain</li>
                <li>Precise diagnosis and surgical excision where needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnancy-Related Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early pregnancy confirmation and scans</li>
                <li>Antenatal care and delivery planning</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Fertility Concerns
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tests for both partners</li>
                <li>Treatment from ovulation support to IVF</li>
              </ul>
            </div>

            {/* Section 11 — Local Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Local Care Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Choosing a clinic close to home makes a real difference.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Easier and more frequent follow-ups</li>
                <li>Faster access in case of concern</li>
                <li>Less travel stress during pregnancy</li>
                <li>A doctor who understands local needs and families</li>
                <li>Continuity of care over many years</li>
              </ul>

              <p className="text-gray-700">
                The clinic is located at A2, near Old Roadways, Gandhi Nagar,
                Moradabad, which is easy to reach for families across the city.
              </p>
            </div>

            {/* Section 12 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-6 text-black">
                Your health deserves attention, not delay. Book your
                consultation in a private and supportive setting.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone / Appointments</p>
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
                    <p className="font-semibold">Clinic Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-black">@dr.priyanka.gynae</p>
                  </div>
                </div>
              </div>

              <p className="mb-4 font-semibold text-black">
                Call or WhatsApp today to book your appointment.
              </p>

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
