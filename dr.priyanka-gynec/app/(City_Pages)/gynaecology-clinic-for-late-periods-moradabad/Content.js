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

export default function GynaecologyClinicLatePeriodsMoradabad() {
  const faqs = [
    {
      q: "Which gynaecology clinic can I visit for late periods in Moradabad?",
      a: "Dr. Priyanka Gynaec, led by Dr. Priyanka Pachauri, is a women's health and fertility centre in Moradabad.",
    },
    {
      q: "What services does the clinic offer for late periods?",
      a: "Menstrual disorder care, ultrasound, PCOS guidance, fertility and IVF, pregnancy care and hysteroscopy.",
    },
    {
      q: "Is it a hospital?",
      a: "It is a women's health and fertility centre. Confirm facility details with the clinic.",
    },
    {
      q: "Is ultrasound available?",
      a: "The clinic highlights 3D and 4D ultrasound. Confirm availability when booking.",
    },
    {
      q: "When should I visit?",
      a: "Visit if your period is over a week late with negative tests, or if you miss three periods.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578 or WhatsApp +91 89796 70705. You can also email drpriyankagynaec@gmail.com or visit the website.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Will I need surgery?",
      a: "Rarely. Most late periods are managed with lifestyle changes or medicines.",
    },
    {
      q: "Is my consultation private?",
      a: "Yes. Your details are treated with privacy and respect.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 order-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Gynaecology Clinic for Late Periods in Moradabad: What to Look For and What to Expect
              </h1>

              <p className="text-gray-700 mb-4">
                A late period is a symptom that can have many causes. That is why the clinic you choose matters. The right clinic can examine you, scan you, run only the tests you need and plan treatment in one place, without sending you around the city.
              </p>
            </div>

            {/* Section 2 — What Kind of Clinic Is This? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Kind of Clinic Is This?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dr. Priyanka Gynaec describes itself as a women&apos;s health and fertility centre in Moradabad</li>
                <li>It offers gynaecology, laparoscopy, fertility and IVF, pregnancy care and paediatric consultations</li>
                <li>It is led by Dr. Priyanka Pachauri, a gynaecologist</li>
                <li>It is a specialised women&apos;s clinic, not a general multi-speciality hospital</li>
                <li>For emergencies, go to the nearest hospital with a 24-hour emergency department</li>
              </ul>
            </div>

            {/* Section 3 — Why a Dedicated Gynaecology Clinic Helps With Late Periods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why a Dedicated Gynaecology Clinic Helps With Late Periods
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your cycle, hormones, ovaries and uterus are assessed by one specialist</li>
                <li>Pregnancy can be confirmed or ruled out early</li>
                <li>Ultrasound can often be done as part of the consultation process</li>
                <li>Tests are selected by your history, not ordered in bulk</li>
                <li>Fertility, pregnancy and menstrual care sit under one roof</li>
                <li>Records stay in one place, so follow-up is smoother</li>
                <li>A female doctor and a women-focused setting can feel more comfortable</li>
              </ul>
            </div>

            {/* Section 4 — Services Relevant to Late Periods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Services Relevant to Late Periods
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Menstrual Disorder Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Evaluation of late, missed and irregular periods</li>
                <li>Support for PCOS-related cycle problems</li>
                <li>Guidance on heavy, painful or very infrequent periods</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Pregnancy and Antenatal Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirmation and early care if pregnancy is the cause</li>
                <li>Structured prenatal screenings</li>
                <li>Supportive birthing care and normal delivery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fertility and IVF
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Personalised plans for women who are trying to conceive</li>
                <li>Ovulation-focused evaluation</li>
                <li>Advanced fertility tools when needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gynaecology and Laparoscopy
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Expert 3D laparoscopic care</li>
                <li>Keyhole procedures when a structural problem needs treatment</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hysteroscopic Services
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Diagnostic hysteroscopy for gentle examination of the uterine cavity</li>
                <li>Hysteroscopic polypectomy for removal of polyps without cuts</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Surgical Services (Only When Needed)
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic cystectomy for ovarian cysts while preserving fertility</li>
                <li>Laparoscopic myomectomy for fibroids while preserving the uterus</li>
                <li>Endometriosis surgery for pelvic pain relief</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Paediatric Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Newborn and child consultations, useful for families under one roof</li>
              </ul>
            </div>

            {/* Section 5 — Technology Highlighted by the Clinic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology Highlighted by the Clinic
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>High-definition 3D laparoscopic surgery system: precise, minimally invasive surgery</li>
                <li>3D and 4D ultrasound: detailed imaging of the uterus, ovaries and pregnancy</li>
                <li>Time-lapse imaging incubator: embryo monitoring for IVF</li>
                <li>AI-powered semen analysis and DNA integrity testing: fertility evaluation</li>
              </ul>

              <p className="text-gray-700">
                For late periods, a pelvic ultrasound is usually the most useful imaging test. The fertility technology matters mainly when you are trying to conceive.
              </p>
            </div>

            {/* Section 6 — What a Good Clinic Should Offer for Late Periods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What a Good Clinic Should Offer for Late Periods
              </h2>

              <p className="text-gray-700 mb-4">
                Use this as a checklist for any clinic.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Care Quality
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A qualified gynaecologist with relevant experience</li>
                <li>Pregnancy checked first</li>
                <li>A detailed cycle history, not a rushed glance</li>
                <li>Tests chosen for a reason and explained clearly</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Facilities
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pelvic ultrasound, ideally 3D or 4D</li>
                <li>Access to blood tests such as thyroid, prolactin and hormones</li>
                <li>Hysteroscopy and laparoscopy if truly needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Patient Experience
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Privacy during consultation and examination</li>
                <li>A calm, non-judgemental attitude</li>
                <li>Clear explanations in simple language</li>
                <li>Time to ask questions</li>
                <li>A lady doctor available for patients who prefer one</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Practical Support
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Easy appointment booking by phone or WhatsApp</li>
                <li>Clear follow-up plan</li>
                <li>Transparent discussion of cost</li>
                <li>Convenient location</li>
              </ul>
            </div>

            {/* Section 7 — Red Flags in Any Clinic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Red Flags in Any Clinic
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Promises of a guaranteed cure or a fixed date for your period</li>
                <li>Strong hormone tablets given without examination or tests</li>
                <li>No question about pregnancy</li>
                <li>Unnecessary tests, scans or procedures pushed on you</li>
                <li>Dismissing your concern as &quot;normal&quot; without a check</li>
                <li>No follow-up plan</li>
                <li>Pressure to decide quickly</li>
              </ul>
            </div>

            {/* Section 8 — How Care Typically Flows at a gynaecology Clinic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Care Typically Flows at a gynaecology Clinic
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Booking</strong>
                  <br />
                  By phone, WhatsApp, email or the website
                </li>
                <li>
                  <strong>Registration</strong>
                  <br />
                  Your details and the reason for your visit
                </li>
                <li>
                  <strong>Consultation</strong>
                  <br />
                  History of cycles, symptoms, lifestyle and medical background
                </li>
                <li>
                  <strong>Examination</strong>
                  <br />
                  A general check, and a gentle pelvic exam only if needed and with your consent
                </li>
                <li>
                  <strong>Pregnancy test</strong>
                  <br />
                  Urine or blood
                </li>
                <li>
                  <strong>Ultrasound</strong>
                  <br />
                  A pelvic scan, if advised
                </li>
                <li>
                  <strong>Blood tests</strong>
                  <br />
                  Thyroid, prolactin, sugar or hormones, only as needed
                </li>
                <li>
                  <strong>Diagnosis</strong>
                  <br />
                  The likely cause in simple words
                </li>
                <li>
                  <strong>Treatment plan</strong>
                  <br />
                  Lifestyle advice, medicines or procedures as appropriate
                </li>
                <li>
                  <strong>Follow-up</strong>
                  <br />
                  Review to check progress
                </li>
              </ol>
            </div>

            {/* Section 9 — Common Conditions Seen in Clinics for Late Periods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Conditions Seen in Clinics for Late Periods
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                PCOS
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Late or absent ovulation</li>
                <li>Acne, extra hair growth and weight gain</li>
                <li>Treatable with lifestyle change and doctor-guided care</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thyroid-Related Irregularity
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Underactive or overactive thyroid</li>
                <li>Often co-managed with a physician or endocrinologist</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                High Prolactin
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A hormone that can suppress ovulation</li>
                <li>May cause milk discharge without pregnancy</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Stress and Lifestyle Changes
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Poor sleep, weight changes, intense exercise or travel</li>
                <li>Often improve with guided changes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Perimenopause
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular cycles before menopause</li>
                <li>Often begins in the 40s</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Contraception and Postpartum Effects
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>After stopping hormonal methods</li>
                <li>After emergency pills or delivery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Structural Causes
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Polyps, cysts or scarring in some cases</li>
                <li>Diagnosed by ultrasound and sometimes hysteroscopy</li>
              </ul>
            </div>

            {/* Section 10 — Treatment Approaches (Doctor-Guided) */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Approaches (Doctor-Guided)
              </h2>

              <p className="text-gray-700 mb-4">
                All medicines and doses are decided by the doctor after examination.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Observation and reassurance: when the delay is a one-time event</li>
                <li>Lifestyle support: sleep, nutrition, exercise and stress management</li>
                <li>Weight guidance: gradual and balanced, never a crash diet</li>
                <li>PCOS care: lifestyle changes, medicines to regulate cycles and ovulation support if you want to conceive</li>
                <li>Thyroid correction: with a physician or endocrinologist</li>
                <li>Hormonal care: for high prolactin or other imbalances</li>
                <li>Perimenopause support: symptom relief and monitoring</li>
                <li>Fertility planning: ovulation tracking and personalised plans</li>
                <li>Minor procedures: such as hysteroscopy for a suspected structural cause</li>
              </ul>

              <p className="text-gray-700">
                No honest clinic promises a guaranteed result or a fixed date for your period.
              </p>
            </div>

            {/* Section 11 — Who Should Visit the Clinic? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Visit the Clinic?
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Women whose period is more than a week late with negative tests</li>
                <li>Those who have missed three periods in a row</li>
                <li>Women with cycles shorter than 21 or longer than 35 days</li>
                <li>Teenagers with no period by age 15</li>
                <li>Women with acne, excess hair growth or hair thinning</li>
                <li>Those trying to conceive with irregular cycles</li>
                <li>Women with hot flushes and irregular periods before age 45</li>
                <li>Those with pelvic pain, fever or foul discharge</li>
                <li>Anyone whose earlier treatment did not work</li>
              </ul>
            </div>

            {/* Section 12 — Emergency Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emergency Warning Signs
              </h2>

              <p className="text-gray-700 mb-4">
                A clinic visit is not the right step for emergencies. Go to the nearest hospital emergency department if you have:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe sudden abdominal pain with a missed period</li>
                <li>Fainting or dizziness</li>
                <li>Heavy bleeding soaking pads quickly</li>
                <li>Shoulder-tip pain with abdominal pain</li>
                <li>High fever with pelvic pain</li>
                <li>Repeated vomiting that prevents drinking fluids</li>
              </ul>
            </div>

            {/* Section 13 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for empathetic, safe-motherhood focused care. Her practice covers antenatal and postnatal care, high-risk pregnancies, laparoscopic gynaecological surgery and menstrual disorder treatment.
              </p>

              <p className="text-gray-700 mb-4">
                The clinic&apos;s &quot;Her Health First&quot; philosophy means:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>She listens first before advising tests or treatment</li>
                <li>Options are explained in simple language</li>
                <li>Treatment is personalised to your age, health and goals</li>
                <li>Surgery is advised only when truly needed</li>
                <li>Privacy and comfort are respected</li>
                <li>Follow-up continues after the first visit</li>
              </ul>

              <p className="text-gray-700">
                The website also highlights continuity of care, where an integrated team knows your history and remembers your concerns from visit to visit.
              </p>
            </div>

            {/* Section 14 — How to Prepare for Your Clinic Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for Your Clinic Visit
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Note the first day of your last three periods</li>
                <li>Record how long and how heavy they were</li>
                <li>Mention recent stress, illness, travel or weight change</li>
                <li>Note any pill, injection or emergency pill use</li>
                <li>Carry earlier scans, blood tests and prescriptions</li>
                <li>List medicines, supplements and allergies</li>
                <li>Note acne, hair growth, hair fall or milk discharge</li>
                <li>Write your questions in advance</li>
                <li>Wear comfortable clothing</li>
              </ul>
            </div>

            {/* Section 15 — Questions to Ask Any Clinic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Any Clinic
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Who will see me, and what are her qualifications?</li>
                <li>Can an ultrasound be done during my visit?</li>
                <li>Which tests do I need, and why?</li>
                <li>What are my treatment options?</li>
                <li>How long before I may see improvement?</li>
                <li>What is the approximate cost?</li>
                <li>What follow-up is included?</li>
              </ul>
            </div>

            {/* Section 16 — Why Self-Medication Is Not a Clinic Substitute */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Self-Medication Is Not a Clinic Substitute
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Hormone tablets without a diagnosis can worsen imbalance</li>
                <li>A hidden pregnancy could be affected</li>
                <li>Repeated emergency pills disturb cycles</li>
                <li>The real cause stays untreated</li>
                <li>Home remedies can be unsafe if you are pregnant</li>
              </ul>
            </div>

            {/* Section 17 — Book Your Visit Today */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Book Your Visit Today
              </h2>

              <div className="space-y-4 mb-6">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Call</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-black mt-1 shrink-0" />
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

                {/* Website */}
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-black mt-1 shrink-0" />
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

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad,
                      Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact">
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    <Phone className="inline mr-2" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 18 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
