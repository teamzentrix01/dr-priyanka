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

export default function TreatLatePeriodsTreatment() {
  const faqs = [
    {
      q: "How do I treat late periods safely?",
      a: "First rule out pregnancy, then follow healthy routines, and see a doctor if the delay continues.",
    },
    {
      q: "Can home remedies bring on a period?",
      a: "Most lack strong evidence and some may be unsafe. Rule out pregnancy and consult a doctor first.",
    },
    {
      q: "Is it safe to take tablets to bring on a period?",
      a: "Not without medical advice. Self-medication can be risky.",
    },
    {
      q: "When should I see a doctor for a late period?",
      a: "See a doctor if the period is over a week late with negative pregnancy tests, or if you miss three periods.",
    },
    {
      q: "Can PCOS or thyroid problems be treated?",
      a: "Yes, both are manageable with doctor-guided care.",
    },
    {
      q: "How long does treatment take?",
      a: "It varies. Stress-related delays may settle within a few months, while PCOS needs steady follow-up.",
    },
    {
      q: "Is my consultation private?",
      a: "Yes, your details are treated with privacy and respect.",
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
                How to Treat Late Periods: A Safe, Step-by-Step Guide
              </h1>

              <p className="mb-4 text-gray-700">
                When your period is late, the first question is usually,
                &ldquo;What should I do right now?&rdquo; Many women reach for
                a home remedy or a tablet suggested by a friend. That can feel
                quicker, but it is not always safe, and it rarely fixes the real
                cause.
              </p>

              <p className="text-gray-700">
                The safest approach is to understand why the period is late and
                treat the cause. Dr. Priyanka Pachauri at Dr. Priyanka Gynaec
                in Moradabad provides personalised care for delayed, irregular
                and missed periods.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Golden Rule: Treat the Cause, Not the Date
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A late period is a symptom, not a disease</li>
                <li>
                  The cause may be pregnancy, stress, weight change, PCOS,
                  thyroid imbalance and more
                </li>
                <li>
                  Forcing a period does not correct the underlying problem
                </li>
                <li>The right treatment depends on the cause</li>
                <li>
                  Finding the cause first makes treatment safer and shorter
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 1: Check for Pregnancy First
              </h2>

              <p className="mb-4 text-gray-700">
                Before trying anything else, rule out pregnancy if you are
                sexually active.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Use a urine pregnancy test with first morning urine</li>
                <li>
                  If negative and the period is still absent, repeat after three
                  to five days
                </li>
                <li>A blood pregnancy test at a clinic is more sensitive</li>
                <li>
                  An ultrasound confirms the location and health of a pregnancy
                </li>
                <li>
                  Do not use any &ldquo;period-inducing&rdquo; remedy until
                  pregnancy is excluded
                </li>
                <li>
                  Seek emergency care for severe one-sided abdominal pain,
                  fainting or heavy bleeding with a missed period
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 2: Look at Recent Changes in Your Life
              </h2>

              <p className="mb-4 text-gray-700">
                Ask yourself honestly:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Have I been under unusual stress, exams or work pressure?
                </li>
                <li>Have I lost or gained weight quickly?</li>
                <li>
                  Have I started intense exercise or a crash diet?
                </li>
                <li>
                  Have I been sleeping poorly or working night shifts?
                </li>
                <li>
                  Have I travelled or been unwell recently?
                </li>
                <li>
                  Have I taken an emergency pill or changed my birth control?
                </li>
                <li>
                  Am I breastfeeding, or did I deliver recently?
                </li>
                <li>
                  Is there a miscarriage or abortion in the past two months?
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Many one-off delays settle once the trigger passes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 3: Safe Lifestyle Measures You Can Start Today
              </h2>

              <p className="mb-4 text-gray-700">
                These measures support hormone balance. They do not guarantee a
                period on a particular date.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Sleep and Routine
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sleep seven to eight hours at regular times</li>
                <li>Keep meal timings steady</li>
                <li>Limit late-night screen use</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Stress Management
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Take short daily walks</li>
                <li>Practise breathing exercises or gentle yoga</li>
                <li>Talk to someone you trust</li>
                <li>
                  Take breaks from constant work or study pressure
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Nutrition
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat balanced meals with vegetables, fruit, whole grains and
                  protein
                </li>
                <li>
                  Include iron-rich foods such as leafy greens, pulses and dates
                </li>
                <li>Avoid crash diets and skipping meals</li>
                <li>Limit sugary and highly processed food</li>
                <li>Drink enough water</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Exercise
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Choose moderate, regular activity</li>
                <li>
                  Avoid extreme workouts, especially with low food intake
                </li>
                <li>Rest if you feel exhausted</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Habits
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Reduce smoking and alcohol</li>
                <li>Cut down on excess caffeine</li>
                <li>Track each period in a diary or app</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What About Home Remedies?
              </h2>

              <p className="mb-4 text-gray-700">
                Many remedies are shared on social media. Here is an honest
                view.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most lack strong scientific evidence for reliably bringing on
                  a period
                </li>
                <li>
                  Some may be harmful in pregnancy, even if you do not know you
                  are pregnant
                </li>
                <li>
                  Large amounts of certain foods or herbs can upset the stomach
                  or cause bleeding
                </li>
                <li>
                  They can delay the diagnosis of PCOS, thyroid problems and
                  other conditions
                </li>
                <li>
                  Gentle measures such as warm drinks, rest and a balanced diet
                  are generally safe
                </li>
                <li>
                  If you try anything, rule out pregnancy first and tell your
                  doctor
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What You Should Not Do
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Do not take hormonal or period-inducing tablets without a
                  doctor&apos;s advice
                </li>
                <li>Do not copy a friend&apos;s prescription</li>
                <li>
                  Do not take repeated emergency pills to &ldquo;reset&rdquo;
                  your cycle
                </li>
                <li>Do not crash diet to fix your weight quickly</li>
                <li>Do not ignore repeated delays</li>
                <li>
                  Do not use unregulated products from unverified sellers
                </li>
                <li>Do not wait months if you have other symptoms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 4: Know When It Is Time to See a Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Consult a gynaecologist if:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The period is more than a week late and pregnancy tests are
                  negative
                </li>
                <li>You have missed three periods in a row</li>
                <li>
                  Your cycles are repeatedly shorter than 21 days or longer than
                  35 days
                </li>
                <li>You have never had a period by age 15</li>
                <li>
                  You are trying to conceive and cycles are irregular
                </li>
                <li>You have acne, excess hair growth or hair thinning</li>
                <li>You have milk discharge without pregnancy</li>
                <li>
                  You have hot flushes with irregular periods before age 45
                </li>
                <li>You have pelvic pain, fever or foul discharge</li>
                <li>
                  Bleeding is very heavy when the period finally comes
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 5: What a Doctor Does to Treat Late Periods
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                1. History
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Last three period dates, cycle length and flow</li>
                <li>Stress, weight, sleep, medicines and contraception</li>
                <li>Pregnancies, deliveries and miscarriages</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2. Examination
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A general check</li>
                <li>
                  A gentle abdominal or pelvic exam only when needed and with
                  your consent
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                3. Tests Chosen Only as Needed
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy test, urine or blood</li>
                <li>
                  Pelvic ultrasound, ideally 3D or 4D, to see the uterus and
                  ovaries
                </li>
                <li>Thyroid and prolactin tests</li>
                <li>Blood sugar and other hormone tests</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                4. Diagnosis
              </h3>

              <p className="mb-6 text-gray-700">
                The likely cause is explained in simple words.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                5. Treatment Plan
              </h3>

              <p className="text-gray-700">
                Treatment is matched to the cause and your personal health
                goals.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctor-Led Treatment Options by Cause
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy: confirmation and antenatal care</li>
                <li>
                  Stress or lifestyle: sleep, nutrition and stress support, with
                  cycle tracking
                </li>
                <li>
                  Weight-related concerns: balanced, gradual weight correction,
                  with dietitian support if needed
                </li>
                <li>
                  PCOS: lifestyle changes, doctor-prescribed medicines to
                  regulate cycles and ovulation support if you want to conceive
                </li>
                <li>
                  Thyroid imbalance: thyroid medicines after evaluation, with
                  regular blood tests
                </li>
                <li>
                  High prolactin: further evaluation and treatment as decided by
                  the doctor
                </li>
                <li>Perimenopause: symptom relief and monitoring</li>
                <li>Breastfeeding: reassurance and contraception advice</li>
                <li>
                  Contraception effects: counselling, time to settle, or a
                  change of method
                </li>
                <li>
                  Structural causes: minor procedures such as hysteroscopy when
                  needed
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                All medicines and doses are decided by the doctor after
                examination.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Long Does Treatment Take?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Stress or lifestyle-related delays often settle within a few
                  months
                </li>
                <li>PCOS improves gradually with steady follow-up</li>
                <li>
                  Thyroid-related delays often improve once hormone levels are
                  balanced
                </li>
                <li>
                  After stopping contraception, cycles may take a few months to
                  settle
                </li>
                <li>
                  Perimenopause-related irregularity may continue and is
                  monitored over time
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                No honest doctor promises a guaranteed result or a fixed date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If You Want to Conceive
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Track your cycle length and ovulation signs</li>
                <li>
                  Get irregular cycles checked early, without waiting a full
                  year
                </li>
                <li>Treat PCOS or thyroid problems first</li>
                <li>Ovulation support may be advised by your doctor</li>
                <li>Both partners may need evaluation</li>
                <li>
                  The clinic offers fertility and IVF care with personalised
                  plans
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-Up After Starting Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A review after a few weeks or months, depending on the plan
                </li>
                <li>Tracking your period dates and symptoms</li>
                <li>Repeat tests, such as thyroid levels, if needed</li>
                <li>Plan adjustments if there is little change</li>
                <li>Advice on when to come back sooner</li>
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
                <li>Heavy bleeding that soaks pads quickly</li>
                <li>Shoulder-tip pain with abdominal pain</li>
                <li>High fever with pelvic pain</li>
                <li>Repeated vomiting that prevents drinking fluids</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, safe-motherhood focused care. Her practice covers
                antenatal and postnatal care, high-risk pregnancies,
                laparoscopic gynaecological surgery and menstrual disorder
                treatment.
              </p>

              <p className="mb-4 text-gray-700">
                The clinic follows a{" "}
                <strong>&ldquo;Her Health First&rdquo;</strong> approach:
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  She listens first before advising tests or treatment
                </li>
                <li>Options are explained in simple language</li>
                <li>
                  Treatment is personalised to your age, health and goals
                </li>
                <li>Surgery is advised only when truly needed</li>
                <li>Privacy and comfort are respected</li>
                <li>Follow-up continues after the first visit</li>
              </ul>

              <p className="text-gray-700">
                The clinic uses 3D and 4D ultrasound for detailed imaging and
                also provides guidance on PCOS and infertility.
              </p>
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
                Myths About Treating Late Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> One tablet fixes every late period.{" "}
                  <strong>Fact:</strong> The right treatment depends on the
                  cause.
                </li>
                <li>
                  <strong>Myth:</strong> Home remedies always work.{" "}
                  <strong>Fact:</strong> Most lack strong evidence and some can
                  be unsafe.
                </li>
                <li>
                  <strong>Myth:</strong> Treatment means lifelong medicines.{" "}
                  <strong>Fact:</strong> Many women need only short-term or
                  lifestyle-based care.
                </li>
                <li>
                  <strong>Myth:</strong> PCOS means you cannot conceive.{" "}
                  <strong>Fact:</strong> It is treatable, and many women
                  conceive with proper care.
                </li>
                <li>
                  <strong>Myth:</strong> Irregular periods are normal and need
                  no treatment. <strong>Fact:</strong> Persistent irregularity
                  should be evaluated.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
              </h2>

              <p className="mb-4 text-gray-700">
                If your period is delayed, avoid self-medication and home
                remedies until pregnancy has been ruled out. Get a safe,
                personalised evaluation from Dr. Priyanka Pachauri in
                Moradabad.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist &amp; Women&apos;s Health Specialist
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
