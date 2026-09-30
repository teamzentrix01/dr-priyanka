import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function DoctorForPeriodDelayMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for a delayed period in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri treats period delay and menstrual disorders in Moradabad.",
    },
    {
      q: "How many days late is a period a concern?",
      a: "More than 7–10 days late with a negative pregnancy test needs a check-up.",
    },
    {
      q: "Can stress delay periods?",
      a: "Yes. Long-term stress can delay ovulation and periods.",
    },
    {
      q: "Why is my period late but the pregnancy test is negative?",
      a: "Common causes are stress, PCOS, thyroid problems, weight change and hormonal imbalance.",
    },
    {
      q: "Is it safe to take tablets to bring on periods?",
      a: "Only after a doctor rules out pregnancy and other causes.",
    },
    {
      q: "Can PCOS cause delayed periods?",
      a: "Yes. It is one of the most common causes in young women.",
    },
    {
      q: "Which tests are done for delayed periods?",
      a: "Usually a pregnancy test, thyroid and prolactin tests, hormone tests and a pelvic ultrasound.",
    },
    {
      q: "Will my periods become regular again?",
      a: "In most women, yes, once the cause is found and treated.",
    },
    {
      q: "Can a delayed period affect pregnancy chances?",
      a: "Irregular ovulation can, but most causes are treatable.",
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
                Doctor for Period Delay in Moradabad: Causes, Tests & When to
                Worry
              </h1>

              <p className="mb-4 text-gray-700">
                You wait, count the days again, check the calendar, and still no
                period. A delay can bring worry, especially when a pregnancy
                test is negative or when you are not sure what your body is
                doing.
              </p>

              <p className="mb-4 text-gray-700">
                The good news is that an occasional delay is common and often
                harmless. But repeated delays, or a delay that comes with other
                symptoms, deserve a proper check-up. Hormones, thyroid, stress,
                weight and conditions like PCOS are among the usual causes, and
                most of them are treatable.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what counts as a delay, why it happens, what
                to do at home, when to see a doctor, and how to consult Dr.
                Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Considered a Delayed Period?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A normal cycle lasts about 21–35 days, counted from the first
                  day of one period to the first day of the next.
                </li>
                <li>
                  A period is usually called delayed when it is more than 5–7
                  days later than expected.
                </li>
                <li>
                  Cycles longer than 35 days on a regular basis are called
                  infrequent or irregular.
                </li>
                <li>
                  Periods missing for 3 months or more are treated as a separate
                  problem that needs prompt evaluation.
                </li>
                <li>
                  A cycle can vary by a few days from month to month, which is
                  normal.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is a One-Time Delay Normal?
              </h2>

              <p className="mb-4 text-gray-700">
                Yes, in many cases. Common reasons for a single late period
                include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A stressful month.</li>
                <li>Travel or a change of routine.</li>
                <li>Recent illness or fever.</li>
                <li>Sudden weight change.</li>
                <li>Heavy exercise.</li>
                <li>Change in sleep pattern.</li>
                <li>Recent use of emergency contraceptive pills.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                If the next cycle returns to normal, there is usually nothing to
                worry about. But if delays repeat, it is time to look deeper.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Period Delay
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The first thing to check for any woman who is sexually active.
                </li>
                <li>
                  A home urine test is reliable from the first day of a missed
                  period.
                </li>
                <li>
                  If negative and the period still does not come, repeat after
                  3–5 days.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Stress and Emotional Strain
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Stress affects the brain signals that control ovulation.
                </li>
                <li>
                  Exams, work pressure, family tension or grief can all delay
                  periods.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. PCOS (Polycystic Ovary Syndrome)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  One of the most common causes of irregular and delayed periods
                  in young women.
                </li>
                <li>Ovulation happens late or not at all.</li>
                <li>
                  Other signs include acne, extra hair growth, weight gain and
                  hair thinning.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Thyroid Disorders
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  An underactive or overactive thyroid can alter the cycle.
                </li>
                <li>
                  Tiredness, weight changes and hair fall are common clues.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. High Prolactin
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The hormone linked to milk production.
                </li>
                <li>
                  High levels can stop ovulation and delay periods.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Weight Changes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Rapid weight loss, crash dieting or being underweight can stop
                  ovulation.
                </li>
                <li>
                  Significant weight gain can also disturb the cycle.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Intense Exercise
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Very heavy training, common in athletes, can suppress
                  hormones.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Hormonal Contraception and Medicines
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Emergency pills, injections, implants and birth control pills
                  can shift the cycle.
                </li>
                <li>
                  It may take a few months for periods to settle after stopping
                  them.
                </li>
                <li>
                  Some psychiatric and other medicines also affect periods.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Breastfeeding
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods may stay away or be irregular for months while
                  breastfeeding.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Perimenopause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  In the 40s, cycles become irregular as ovarian hormones
                  decline.
                </li>
                <li>
                  Hot flushes, sleep changes and mood swings may appear.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Chronic Health Conditions
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diabetes, celiac disease, kidney or liver conditions and
                  infections can play a role.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Uterine or Ovarian Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Scarring inside the uterus after infection or procedures.
                </li>
                <li>
                  Premature ovarian insufficiency, where the ovaries slow down
                  before age 40.
                </li>
                <li>
                  Structural problems, cysts or polyps, in some cases.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Other Symptoms That May Appear With a Delay
              </h2>

              <p className="mb-4 text-gray-700">
                Tell your doctor if you also notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Nausea, breast tenderness or fatigue (possible pregnancy).
                </li>
                <li>Acne or excess facial and body hair.</li>
                <li>Weight gain, especially around the belly.</li>
                <li>Hair fall or hair thinning.</li>
                <li>Cold or heat intolerance.</li>
                <li>Milk-like discharge from the breasts.</li>
                <li>Hot flushes or night sweats.</li>
                <li>Pelvic pain or heaviness.</li>
                <li>Headaches or vision changes.</li>
                <li>Mood swings and anxiety.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Do at Home When Your Period Is Late
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Take a urine pregnancy test if there is any chance of
                  pregnancy.
                </li>
                <li>
                  Repeat the test after a few days if negative and the period is
                  still absent.
                </li>
                <li>
                  Note the date of your last period and your usual cycle length.
                </li>
                <li>
                  Track your stress, sleep, diet and weight changes.
                </li>
                <li>Avoid crash diets and excessive exercise.</li>
                <li>Rest well and sleep enough.</li>
                <li>
                  Do not take tablets to bring on a period without medical
                  advice.
                </li>
                <li>Do not take repeated emergency pills.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Doctor for a Delayed Period?
              </h2>

              <p className="mb-4 text-gray-700">
                Book a consultation if:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your period is more than 7–10 days late and the pregnancy test
                  is negative.
                </li>
                <li>Delays are happening again and again.</li>
                <li>Your cycles are regularly longer than 35 days.</li>
                <li>You have missed 3 periods in a row.</li>
                <li>You have never had a period by age 15.</li>
                <li>You are trying to conceive.</li>
                <li>
                  You have acne, weight gain and hair growth together.
                </li>
                <li>You have pelvic pain with a delay.</li>
                <li>
                  You have milk-like discharge from the breasts.
                </li>
                <li>
                  You are in your 40s and cycles are becoming unpredictable.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Red Flags: Seek Urgent Care
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Severe one-sided abdominal pain with a positive pregnancy test
                  or missed period.
                </li>
                <li>
                  Heavy bleeding that soaks a pad within an hour.
                </li>
                <li>Dizziness, fainting or a racing heartbeat.</li>
                <li>Fever with pelvic pain.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                These can point to conditions like ectopic pregnancy or
                infection that need emergency care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri for Period Delay in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, patient-first care. The clinic treats menstrual
                disorders as part of a full range of women&apos;s health
                services.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Careful listening:</strong> every consultation starts
                  with understanding your story.
                </li>
                <li>
                  <strong>Advanced imaging:</strong> 3D and 4D ultrasound for a
                  detailed view of the uterus and ovaries.
                </li>
                <li>
                  <strong>Complete evaluation:</strong> menstrual health, PCOS,
                  thyroid-linked problems and fertility under one roof.
                </li>
                <li>
                  <strong>Fertility support:</strong> guidance ranges from
                  simple ovulation induction to IUI and IVF when required.
                </li>
                <li>
                  <strong>Minimally invasive options:</strong> hysteroscopy and
                  laparoscopy are available if a uterine cause is found.
                </li>
                <li>
                  <strong>Continuity of care:</strong> the team knows your
                  history through follow-up visits.
                </li>
                <li>
                  <strong>Location:</strong> A2, near Old Roadways, Gandhi
                  Nagar, Moradabad.
                </li>
                <li>
                  <strong>Easy booking:</strong> call, WhatsApp or email.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Cause of a Delayed Period Is Found
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed History
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycle pattern for the past year.</li>
                <li>Last period date, flow and pain.</li>
                <li>Stress, sleep, exercise, diet and weight changes.</li>
                <li>Medicines, contraception and past surgeries.</li>
                <li>
                  Family history of PCOS, thyroid problems or early menopause.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weight, height and blood pressure.</li>
                <li>
                  Signs of acne, hair growth or thyroid swelling.
                </li>
                <li>
                  Abdominal and, when appropriate, pelvic examination.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Urine pregnancy test.</li>
                <li>Thyroid profile (TSH).</li>
                <li>Prolactin level.</li>
                <li>Blood sugar and haemoglobin.</li>
                <li>
                  Hormone tests such as FSH, LH and AMH when needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Imaging
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic ultrasound to check the uterus lining and ovaries.
                </li>
                <li>
                  3D/4D ultrasound for extra detail when required.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Advanced Procedures, If Needed
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysteroscopy to look inside the uterus.
                </li>
                <li>Laparoscopy in selected cases.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment for Period Delay
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause, so there is no single medicine
                that suits everyone.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If the Cause Is Lifestyle-Related
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Balanced diet and steady, healthy weight.</li>
                <li>Moderate exercise.</li>
                <li>Regular sleep routine.</li>
                <li>Stress reduction through yoga, walks or counselling.</li>
                <li>
                  Periods often return to normal once the body recovers.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If the Cause Is PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weight management and physical activity.</li>
                <li>Medicines to regulate cycles.</li>
                <li>
                  Treatment for insulin resistance if present.
                </li>
                <li>Ovulation induction when planning pregnancy.</li>
                <li>
                  Regular follow-up to protect long-term health.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If the Cause Is Thyroid or Prolactin
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid medicines with dose adjustment.
                </li>
                <li>Prolactin-lowering medicines.</li>
                <li>
                  Cycles usually settle once hormone levels are corrected.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If the Cause Is Medicines or Contraception
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Review or change of the medicine under your doctor&apos;s
                  guidance.
                </li>
                <li>
                  Time and monitoring while the cycle returns.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If the Cause Is Uterine
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysteroscopic treatment for adhesions or polyps.
                </li>
                <li>
                  Hormonal support to help the lining regrow.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If the Cause Is Perimenopause or Ovarian Insufficiency
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Symptom management and counselling.</li>
                <li>Hormone therapy when appropriate.</li>
                <li>Fertility guidance when pregnancy is desired.</li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                About Medicines to &quot;Bring On&quot; a Period
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doctors sometimes prescribe short courses, but only after
                  ruling out pregnancy and other causes.
                </li>
                <li>
                  They treat the symptom and do not fix the underlying problem.
                </li>
                <li>
                  Taking them without advice can hide a condition and cause side
                  effects.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Tips for Regular Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat balanced meals with whole grains, dal, vegetables, fruit
                  and curd.
                </li>
                <li>
                  Include iron-rich foods such as spinach, beetroot, dates and
                  jaggery.
                </li>
                <li>
                  Add healthy fats from nuts, seeds and ghee in moderation.
                </li>
                <li>
                  Cut down on sugary drinks, refined flour and fried snacks.
                </li>
                <li>Exercise 30 minutes on most days.</li>
                <li>Aim for 7–8 hours of sleep.</li>
                <li>
                  Manage stress with breathing exercises or hobbies.
                </li>
                <li>Maintain a healthy weight.</li>
                <li>
                  Keep a period diary to notice patterns.
                </li>
                <li>Avoid smoking and limit alcohol.</li>
                <li>Do not skip meals or follow extreme diets.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Period Delay
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> A late period always means pregnancy.{" "}
                  <strong>Fact:</strong> Stress, hormones, thyroid problems and
                  PCOS are common causes too.
                </li>
                <li>
                  <strong>Myth:</strong> Papaya, jaggery or ajwain will surely
                  bring periods. <strong>Fact:</strong> They do not treat the
                  cause, and they may not work at all.
                </li>
                <li>
                  <strong>Myth:</strong> Irregular periods will fix themselves
                  after marriage. <strong>Fact:</strong> Marriage does not
                  correct hormonal problems.
                </li>
                <li>
                  <strong>Myth:</strong> Taking a period tablet is harmless.{" "}
                  <strong>Fact:</strong> Repeated use without advice can upset
                  the cycle and hide a problem.
                </li>
                <li>
                  <strong>Myth:</strong> PCOS means you can never have a baby.{" "}
                  <strong>Fact:</strong> Most women with PCOS can conceive with
                  treatment.
                </li>
                <li>
                  <strong>Myth:</strong> If the pregnancy test is negative,
                  everything is fine. <strong>Fact:</strong> A delayed period
                  still needs to be checked if it keeps happening.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delayed Periods and Fertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular periods usually reflect regular ovulation.
                </li>
                <li>
                  Repeated delays often mean ovulation is irregular.
                </li>
                <li>
                  Untreated PCOS, thyroid problems and high prolactin are among
                  the most treatable reasons for delayed conception.
                </li>
                <li>
                  Simple ovulation-inducing treatment helps many women conceive.
                </li>
                <li>
                  Women trying to conceive should not wait long before seeking
                  advice.
                </li>
                <li>
                  If pregnancy takes longer, IUI and IVF options are available
                  under the same care team.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation.
                </li>
                <li>
                  Questions about your cycle, lifestyle and health.
                </li>
                <li>
                  A basic examination and an ultrasound if suitable.
                </li>
                <li>A list of tests, if required.</li>
                <li>
                  A simple explanation of the likely cause.
                </li>
                <li>A clear plan and follow-up date.</li>
              </ul>

              <p className="mt-4 text-gray-700">Please bring:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous prescriptions, scans and reports.</li>
                <li>The dates of your last few periods.</li>
                <li>A list of your medicines.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation with Dr. Priyanka Pachauri
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
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
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
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
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
                      </a>
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
                Frequently Asked Questions (FAQs)
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
