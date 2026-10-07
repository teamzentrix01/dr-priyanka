import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BestDoctorForDelayedPeriods() {
  const faqs = [
    {
      q: "Who is the best doctor for delayed periods in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a lady gynaecologist in Moradabad who provides care for menstrual and hormonal concerns, including delayed periods.",
    },
    {
      q: "How do I choose a good doctor for delayed periods?",
      a: "Choose a doctor who listens to your history, checks for pregnancy first, explains the diagnosis clearly, recommends only necessary tests and gives a follow-up plan.",
    },
    {
      q: "Should I see a lady gynaecologist?",
      a: "Many women find a lady gynaecologist more comfortable for discussing periods, contraception and personal health concerns. It is a personal choice.",
    },
    {
      q: "What tests may be needed for delayed periods?",
      a: "A pregnancy test and pelvic ultrasound are commonly advised. Thyroid, prolactin, blood sugar and other hormone tests may be added if needed.",
    },
    {
      q: "Can delayed periods be treated?",
      a: "Yes. Treatment depends on the cause, such as pregnancy, PCOS, thyroid imbalance, stress, weight changes or other hormonal concerns.",
    },
    {
      q: "When should I see a doctor for a delayed period?",
      a: "See a doctor if the period is over a week late with negative pregnancy tests, if you miss three periods, or if you have pain, heavy bleeding or fertility concerns.",
    },
    {
      q: "Is my consultation private?",
      a: "Yes. Your details and health concerns should be handled with privacy, respect and a non-judgemental approach.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Best Doctor for Delayed Periods in Moradabad: How to Choose and
                Whom to Trust
              </h1>

              <p className="mb-4 text-gray-700">
                Searching for the &ldquo;best doctor&rdquo; can feel
                overwhelming. Every clinic says it is the best. For a problem
                like delayed periods, what matters is not a title but a doctor
                who finds the real cause, explains it clearly and treats you
                safely.
              </p>

              <p className="text-gray-700">
                This guide gives you a practical way to judge any doctor in
                Moradabad, explains what good care for delayed periods looks
                like, and introduces Dr. Priyanka Pachauri, a lady
                gynaecologist at Dr. Priyanka Gynaec.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What &ldquo;Best Doctor&rdquo; Should Mean for Delayed Periods
              </h2>

              <p className="mb-4 text-gray-700">
                &ldquo;Best&rdquo; is personal, and no ranking can promise it.
                A good doctor for delayed periods is one who:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Listens to your full story before ordering tests
                </li>
                <li>Rules out pregnancy first</li>
                <li>Looks for the cause, not just a quick fix</li>
                <li>Explains the diagnosis in simple language</li>
                <li>Chooses tests that are actually needed</li>
                <li>
                  Offers a personalised plan, not a one-size-fits-all tablet
                </li>
                <li>Respects your privacy and comfort</li>
                <li>
                  Is honest about timelines and never guarantees results
                </li>
                <li>Refers you to another specialist when needed</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Specialist Treats Delayed Periods?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A gynaecologist is the main specialist for period problems
                </li>
                <li>
                  An endocrinologist may help if thyroid, diabetes or other
                  hormone problems are involved
                </li>
                <li>
                  A fertility specialist helps when you are trying to conceive
                </li>
                <li>
                  A physician or dietitian may support weight-related causes
                </li>
                <li>
                  A lady gynaecologist is a comfortable first choice for many
                  women
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Many Women Prefer a Lady Gynaecologist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Greater comfort discussing periods, intimacy and contraception
                </li>
                <li>Less hesitation and embarrassment</li>
                <li>
                  Easier sharing of personal details such as sexual history
                </li>
                <li>A private and trusting environment</li>
                <li>
                  Understanding of how cycle changes affect daily life
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes a Good Doctor Will Look For
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pregnancy.</strong> Always the first thing to confirm
                  or exclude.
                </li>
                <li>
                  <strong>Stress and lifestyle.</strong> Sleep changes, travel,
                  exams or work pressure can delay ovulation.
                </li>
                <li>
                  <strong>Weight changes.</strong> Rapid loss, weight gain or
                  crash dieting can disrupt menstrual hormones.
                </li>
                <li>
                  <strong>PCOS.</strong> Polycystic Ovary Syndrome is a common
                  and treatable cause of delayed periods.
                </li>
                <li>
                  <strong>Thyroid disorders.</strong> Both underactive and
                  overactive thyroid conditions may affect cycles.
                </li>
                <li>
                  <strong>High prolactin.</strong> This hormone can suppress
                  ovulation when elevated.
                </li>
                <li>
                  <strong>Perimenopause.</strong> Irregular cycles may happen
                  in the years before menopause.
                </li>
                <li>
                  <strong>Contraception effects.</strong> Emergency pills and
                  hormonal contraception can alter cycle timing.
                </li>
                <li>
                  <strong>Breastfeeding.</strong> Periods may be delayed after
                  delivery while breastfeeding.
                </li>
                <li>
                  <strong>Structural causes.</strong> Polyps, cysts or fibroids
                  may affect periods in some cases.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Checklist: How to Judge Any Doctor in Moradabad
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                1. Qualifications and Experience
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Relevant medical qualifications in gynaecology</li>
                <li>
                  Practical experience in menstrual and hormonal problems
                </li>
                <li>
                  Willingness to share training and professional background
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2. Approach to Your Problem
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Asks detailed questions about your cycles</li>
                <li>Checks for pregnancy first</li>
                <li>
                  Does not push surgery or expensive tests without reason
                </li>
                <li>Explains why each test is needed</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                3. Diagnostic Facilities
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pelvic ultrasound, ideally 3D or 4D</li>
                <li>
                  Access to blood tests such as thyroid and hormone profiles
                </li>
                <li>
                  Hysteroscopy or laparoscopy if truly needed
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                4. Communication
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Explains in simple and clear words</li>
                <li>Answers questions patiently</li>
                <li>Does not rush you</li>
                <li>Gives written advice on follow-up</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                5. Patient Experience
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Respect for privacy</li>
                <li>Comfortable and non-judgemental attitude</li>
                <li>Positive feedback from patients</li>
                <li>Clear follow-up process</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                6. Practical Factors
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Easy to reach and book</li>
                <li>Phone and WhatsApp available for queries</li>
                <li>Reasonable and transparent cost discussion</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags: When to Think Twice
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Promises of a guaranteed cure or a fixed date for your period
                </li>
                <li>
                  Prescribes strong hormone tablets without examination or tests
                </li>
                <li>Does not ask about pregnancy</li>
                <li>Pushes unnecessary tests or procedures</li>
                <li>
                  Dismisses your worries as &ldquo;normal&rdquo; without a check
                </li>
                <li>Refuses to explain the diagnosis</li>
                <li>Pressures you to decide quickly</li>
                <li>Gives no follow-up plan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Meet Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, safe-motherhood focused care. Her practice covers
                antenatal and postnatal care, high-risk pregnancies,
                laparoscopic gynaecological surgery and menstrual disorder
                treatment.
              </p>

              <p className="mb-4 text-gray-700">
                The clinic&apos;s philosophy is{" "}
                <strong>&ldquo;Her Health First.&rdquo;</strong> In practice,
                that means:
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>She listens first, then advises tests or treatment</li>
                <li>Every option is explained in simple language</li>
                <li>
                  Treatment is personalised to your age, health and goals
                </li>
                <li>Surgery is advised only when it is truly needed</li>
                <li>Privacy and comfort come first</li>
                <li>Care continues through follow-up visits</li>
              </ul>

              <p className="text-gray-700">
                The clinic also highlights continuity of care, with a team that
                knows your history and remembers your concerns from visit to
                visit. You are welcome to ask for details of qualifications and
                experience when you call or visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Dr. Priyanka Gynaec Fits Women With Delayed Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Menstrual disorder treatment is part of the practice
                </li>
                <li>
                  Fertility and IVF care is available if delayed periods affect
                  plans to conceive
                </li>
                <li>
                  3D and 4D ultrasound support detailed imaging of the uterus
                  and ovaries
                </li>
                <li>
                  Pregnancy and antenatal care are offered if the cause is
                  pregnancy
                </li>
                <li>
                  Laparoscopic and hysteroscopic services are available for
                  structural causes
                </li>
                <li>
                  PCOS and infertility guidance is available through the
                  clinic&apos;s published health content
                </li>
                <li>
                  A lady gynaecologist provides a comfortable and private
                  setting
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Highlighted by the Clinic
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery system</li>
                <li>3D and 4D ultrasound for detailed imaging</li>
                <li>Time-lapse imaging incubator for embryo monitoring</li>
                <li>
                  AI-powered semen analysis and DNA integrity testing
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                For delayed periods, a pelvic ultrasound is usually the most
                useful imaging test. Advanced fertility tools are relevant only
                if you are trying to conceive.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Your First Visit May Look Like
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Registration.</strong> Your details and the reason for
                  your visit.
                </li>
                <li>
                  <strong>History.</strong> Last three period dates, cycle
                  length, flow, stress, weight, medicines and contraception.
                </li>
                <li>
                  <strong>Examination.</strong> A general check, and a gentle
                  pelvic exam only when needed and with your consent.
                </li>
                <li>
                  <strong>Pregnancy test.</strong> Urine or blood testing as
                  appropriate.
                </li>
                <li>
                  <strong>Ultrasound.</strong> A pelvic scan to examine the
                  uterus and ovaries.
                </li>
                <li>
                  <strong>Blood tests.</strong> Selected only if your history
                  suggests a need.
                </li>
                <li>
                  <strong>Diagnosis.</strong> The likely cause explained in
                  simple words.
                </li>
                <li>
                  <strong>Treatment plan and follow-up.</strong> The next steps
                  agreed with you.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches a Good Doctor May Offer
              </h2>

              <p className="mb-4 text-gray-700">
                All medicines and doses are decided by the doctor after
                examination.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Observation and reassurance for a one-time delay
                </li>
                <li>
                  Lifestyle support for sleep, nutrition, exercise and stress
                  management
                </li>
                <li>Gradual and balanced weight guidance</li>
                <li>
                  PCOS care with lifestyle changes, medicines to regulate cycles
                  and ovulation support
                </li>
                <li>
                  Thyroid correction, usually with a physician or endocrinologist
                </li>
                <li>
                  Hormonal care for high prolactin or other imbalances
                </li>
                <li>Perimenopause support with symptom relief and monitoring</li>
                <li>
                  Fertility planning with ovulation tracking and personalised
                  plans
                </li>
                <li>
                  Minor procedures such as hysteroscopy when a structural cause
                  is suspected
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs You Should Book a Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Period more than a week late with negative pregnancy tests
                </li>
                <li>Three missed periods in a row</li>
                <li>Cycles shorter than 21 or longer than 35 days</li>
                <li>No period by age 15</li>
                <li>Irregular cycles while trying to conceive</li>
                <li>Acne, excess hair growth or hair thinning</li>
                <li>Milk discharge without pregnancy</li>
                <li>
                  Hot flushes with irregular periods before age 45
                </li>
                <li>Pelvic pain, fever or foul discharge</li>
                <li>Very heavy bleeding after a long delay</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Go to the nearest hospital emergency department if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe sudden abdominal pain with a missed period</li>
                <li>Fainting or dizziness</li>
                <li>Heavy bleeding soaking pads quickly</li>
                <li>Shoulder-tip pain with abdominal pain</li>
                <li>High fever with pelvic pain</li>
                <li>Repeated vomiting that prevents drinking fluids</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Any Doctor Before Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What is the most likely cause of my delayed periods?</li>
                <li>Which tests do I need, and why?</li>
                <li>What are my treatment options?</li>
                <li>Are there side effects I should know about?</li>
                <li>How long before I may see improvement?</li>
                <li>Will this affect my fertility?</li>
                <li>When should I come back for follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of your last three periods</li>
                <li>Record how long and how heavy they were</li>
                <li>
                  Mention recent stress, illness, travel or weight change
                </li>
                <li>Note any pill, injection or emergency pill use</li>
                <li>Carry earlier scans, blood tests and prescriptions</li>
                <li>List medicines, supplements and allergies</li>
                <li>
                  Note acne, hair growth, hair fall or milk discharge
                </li>
                <li>Write your questions in advance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
              </h2>

              <p className="mb-4 text-gray-700">
                If your cycle has become unpredictable, get a safe and
                personalised evaluation for delayed periods, hormonal concerns,
                PCOS, thyroid-related symptoms or fertility planning.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Lady Gynaecologist &amp; Women&apos;s Health Specialist
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+919079765578"
                        className="hover:underline"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </Link>

                  <Link
                    href="/services"
                    className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
