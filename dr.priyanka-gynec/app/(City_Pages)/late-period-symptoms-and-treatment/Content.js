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

export default function LatePeriodSymptomsTreatment() {
  const faqs = [
    {
      q: "What are the common symptoms of a late period?",
      a: "Bloating, cramps, breast tenderness, nausea, acne, tiredness and mood changes may occur, depending on the cause.",
    },
    {
      q: "Why is my period late but the pregnancy test negative?",
      a: "Early testing, stress, PCOS, thyroid problems or hormonal changes may be responsible. Repeat the test and consult a doctor if the delay continues.",
    },
    {
      q: "How is a late period treated?",
      a: "Treatment depends on the cause, such as PCOS, thyroid imbalance, stress, weight changes or pregnancy.",
    },
    {
      q: "Is it safe to take tablets to bring on a period?",
      a: "Not without medical advice. Self-medication can be risky.",
    },
    {
      q: "When should I see a doctor?",
      a: "See a doctor if the period is over a week late with negative pregnancy tests, or if you miss three periods.",
    },
    {
      q: "Can PCOS or thyroid problems be treated?",
      a: "Yes, both are manageable with doctor-guided care.",
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
                Late Period Symptoms and Treatment: What Your Body Is Telling
                You
              </h1>

              <p className="mb-4 text-gray-700">
                A late period rarely arrives alone. Your body often gives clues:
                breast tenderness, nausea, acne, tiredness or cramps without
                bleeding. These clues can help point toward the cause, whether
                it is pregnancy, stress, PCOS, a thyroid imbalance or something
                else.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri at Dr. Priyanka Gynaec in Moradabad
                provides personalised evaluation and treatment for delayed,
                irregular and missed periods.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Late Period?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A typical adult cycle lasts about 21 to 35 days</li>
                <li>A few days of variation is normal</li>
                <li>
                  A period is late when it has not started by the expected date
                </li>
                <li>A missed period means no bleeding for a full cycle</li>
                <li>
                  Amenorrhoea means no periods for three months or more
                </li>
                <li>
                  Teenagers and women near menopause often have less predictable
                  cycles
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms That Can Come With a Late Period
              </h2>

              <p className="mb-4 text-gray-700">
                Symptoms alone cannot confirm the cause, but patterns can help
                your doctor identify it.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Pregnancy-Related Symptoms
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Breast tenderness or swelling</li>
                <li>Nausea, with or without vomiting</li>
                <li>Unusual tiredness</li>
                <li>Frequent urination</li>
                <li>Food aversions or cravings</li>
                <li>Mild cramping or light spotting</li>
                <li>A positive pregnancy test</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Premenstrual-Type Symptoms Without Bleeding
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bloating and a heavy lower belly</li>
                <li>Cramping that comes and goes</li>
                <li>Mood swings and irritability</li>
                <li>Headaches</li>
                <li>Breast soreness</li>
                <li>Food cravings</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                PCOS-Related Symptoms
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods that come every few months</li>
                <li>Acne, especially along the jawline</li>
                <li>Excess facial or body hair</li>
                <li>Thinning scalp hair</li>
                <li>Weight gain, especially around the waist</li>
                <li>Darkened skin patches on the neck or underarms</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Thyroid-Related Symptoms
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tiredness and sluggishness</li>
                <li>
                  Weight gain or weight loss without a clear reason
                </li>
                <li>Hair fall and dry skin</li>
                <li>Feeling too cold or too hot</li>
                <li>Constipation or loose stools</li>
                <li>Palpitations or anxiety in an overactive thyroid</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                High Prolactin Symptoms
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Milk discharge from the breasts when not pregnant or
                  breastfeeding
                </li>
                <li>Headaches</li>
                <li>Reduced desire for intimacy</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Perimenopause Symptoms
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hot flushes and night sweats</li>
                <li>Sleep changes</li>
                <li>Mood changes</li>
                <li>Vaginal dryness</li>
                <li>Cycles that grow longer or skip months</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Stress and Lifestyle-Related Symptoms
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Poor sleep</li>
                <li>Anxiety or low mood</li>
                <li>Recent weight loss or intense exercise</li>
                <li>
                  Travel, illness or major life change before the delay
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Late Period With Negative Pregnancy Test
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You may feel pregnant but the test is negative because of
                  early testing, hormones or stress
                </li>
                <li>
                  Repeat the test after three to five days using first morning
                  urine
                </li>
                <li>A blood test is more sensitive</li>
                <li>
                  If periods remain absent, check for PCOS, thyroid problems and
                  other causes
                </li>
                <li>
                  Do not ignore persistent symptoms because the test was
                  negative
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Need Quicker Attention
              </h2>

              <p className="mb-4 text-gray-700">
                Book a consultation soon if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A period more than a week late with negative tests</li>
                <li>Three missed periods in a row</li>
                <li>Pelvic pain or cramping that keeps worsening</li>
                <li>Foul-smelling discharge or fever</li>
                <li>Milk discharge without pregnancy</li>
                <li>Sudden and unexplained weight changes</li>
                <li>Hot flushes before age 45</li>
                <li>Persistent acne and excess hair growth</li>
                <li>
                  Extreme tiredness that does not improve with rest
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Symptoms: Go to the Hospital Immediately
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe sudden abdominal pain with a missed period</li>
                <li>Fainting or dizziness</li>
                <li>Heavy bleeding soaking pads quickly</li>
                <li>Shoulder-tip pain with abdominal pain</li>
                <li>High fever with pelvic pain</li>
                <li>Repeated vomiting that prevents drinking fluids</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A missed period with one-sided pain can indicate an ectopic
                pregnancy. This is an emergency.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes Behind Late Period Symptoms
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pregnancy.</strong> Always the first thing to confirm
                  or exclude.
                </li>
                <li>
                  <strong>Stress.</strong> Affects the hormones that control
                  ovulation.
                </li>
                <li>
                  <strong>Weight changes.</strong> Rapid loss, gain or crash
                  dieting can affect cycles.
                </li>
                <li>
                  <strong>PCOS.</strong> A very common and treatable cause.
                </li>
                <li>
                  <strong>Thyroid disorders.</strong> Underactive or overactive
                  thyroid function can affect periods.
                </li>
                <li>
                  <strong>High prolactin.</strong> A hormone that can suppress
                  ovulation.
                </li>
                <li>
                  <strong>Perimenopause.</strong> Irregular cycles before
                  menopause.
                </li>
                <li>
                  <strong>Contraception effects.</strong> Emergency pills or
                  hormonal methods may change cycle timing.
                </li>
                <li>
                  <strong>Breastfeeding.</strong> Often delays periods after
                  delivery.
                </li>
                <li>
                  <strong>Structural causes.</strong> Scarring, polyps or cysts
                  in some cases.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Late Periods Are Evaluated
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>History.</strong> Last three periods, cycle length,
                  flow, stress, weight, medicines and contraception.
                </li>
                <li>
                  <strong>Symptom review.</strong> Acne, hair changes,
                  tiredness, discharge and pain.
                </li>
                <li>
                  <strong>Examination.</strong> A general check, and a gentle
                  pelvic exam only if needed and with your consent.
                </li>
                <li>
                  <strong>Pregnancy test.</strong> Urine or blood testing.
                </li>
                <li>
                  <strong>Pelvic ultrasound.</strong> To examine the uterus and
                  ovaries.
                </li>
                <li>
                  <strong>Blood tests.</strong> Thyroid, prolactin, blood sugar
                  and other hormones, only as needed.
                </li>
                <li>
                  <strong>Diagnosis and plan.</strong> The cause is explained
                  and the next steps are agreed.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The clinic uses 3D and 4D ultrasound for detailed imaging.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Late Period Treatment: The Overall Approach
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A late period is a symptom, not a disease</li>
                <li>Treatment depends on the cause</li>
                <li>Pregnancy is ruled out first</li>
                <li>Lifestyle measures support almost every treatment plan</li>
                <li>
                  Medicines are prescribed by the doctor after examination
                </li>
                <li>Follow-up checks whether the plan is working</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment by Cause
              </h2>

              <p className="mb-4 text-gray-700">
                All medicines and doses are decided by the doctor after
                examination.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Pregnancy
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirmation by blood test and ultrasound</li>
                <li>Antenatal care, screenings and nutrition guidance</li>
                <li>
                  The clinic offers pregnancy, antenatal and normal delivery
                  care
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Stress and Lifestyle
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular sleep and meal timings</li>
                <li>
                  Stress management such as walking, yoga or breathing exercises
                </li>
                <li>Reduced late-night screen time</li>
                <li>
                  Cycle tracking, since many cycles return on their own
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Weight-Related Causes
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Balanced meals instead of crash diets</li>
                <li>Gradual weight gain or loss</li>
                <li>Moderation in intense exercise</li>
                <li>Dietitian support if needed</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                PCOS
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Lifestyle changes as the foundation</li>
                <li>Doctor-prescribed medicines to regulate cycles</li>
                <li>Ovulation support if you want to conceive</li>
                <li>
                  Management of acne or hair growth where needed
                </li>
                <li>Regular follow-up</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Thyroid Imbalance
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirmation through blood tests</li>
                <li>
                  Thyroid medicines after evaluation, often with a physician or
                  endocrinologist
                </li>
                <li>Regular blood test monitoring</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                High Prolactin
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirmation by blood test</li>
                <li>
                  Further evaluation and treatment as decided by the doctor
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Perimenopause
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycle monitoring</li>
                <li>Support for hot flushes, sleep and mood</li>
                <li>Evaluation of heavy or prolonged bleeding</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Breastfeeding or Recent Delivery
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reassurance that delay is common</li>
                <li>
                  Contraception counselling, since pregnancy is still possible
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Contraception Effects
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Counselling on your method</li>
                <li>
                  Time for cycles to settle after stopping hormonal methods
                </li>
                <li>
                  Review if no period returns after about three months
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Structural Causes
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ultrasound and, if needed, hysteroscopy</li>
                <li>
                  Treatment of polyps, cysts or fibroids when they affect cycles
                </li>
                <li>Keyhole surgery only when truly necessary</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safe Home Care While You Wait
              </h2>

              <p className="mb-4 text-gray-700">
                These steps support hormone balance but do not guarantee a
                period on a set date.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sleep seven to eight hours at regular times</li>
                <li>
                  Eat balanced meals with vegetables, fruit, whole grains and
                  protein
                </li>
                <li>
                  Include iron-rich foods such as leafy greens and pulses
                </li>
                <li>Drink enough water</li>
                <li>Take short daily walks</li>
                <li>Practise breathing exercises or gentle yoga</li>
                <li>Limit smoking, alcohol and excess caffeine</li>
                <li>Track each period in a diary or app</li>
                <li>Take a pregnancy test before trying any remedy</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Not to Do
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
                <li>
                  Do not rely on unverified home remedies, especially before
                  ruling out pregnancy
                </li>
                <li>Do not ignore repeated delays or worsening symptoms</li>
              </ul>
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
                  Thyroid-related delays often improve once levels are balanced
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
                Late Periods and Fertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular ovulation is a leading cause of difficulty
                  conceiving
                </li>
                <li>
                  PCOS is treatable, and many women conceive with proper care
                </li>
                <li>
                  Do not wait a full year if cycles are very irregular
                </li>
                <li>Both partners may need evaluation</li>
                <li>
                  The clinic offers fertility and IVF care with personalised
                  plans
                </li>
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
                The clinic also provides guidance on PCOS and infertility.
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
                  List all symptoms, such as nausea, acne, hair fall or
                  discharge
                </li>
                <li>
                  Mention recent stress, illness, travel or weight change
                </li>
                <li>Note any pill, injection or emergency pill use</li>
                <li>Carry earlier scans, blood tests and prescriptions</li>
                <li>List medicines, supplements and allergies</li>
                <li>Write your questions in advance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths About Late Period Symptoms
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Feeling pregnant means you are
                  pregnant. <strong>Fact:</strong> Hormones and stress can cause
                  similar symptoms.
                </li>
                <li>
                  <strong>Myth:</strong> A negative test settles everything.{" "}
                  <strong>Fact:</strong> Early tests can be falsely negative, and
                  other causes exist.
                </li>
                <li>
                  <strong>Myth:</strong> Skipping a period is harmless every
                  time. <strong>Fact:</strong> Repeated delays should be checked.
                </li>
                <li>
                  <strong>Myth:</strong> One tablet fixes every late period.{" "}
                  <strong>Fact:</strong> The right treatment depends on the
                  cause.
                </li>
                <li>
                  <strong>Myth:</strong> PCOS means you cannot become a mother.{" "}
                  <strong>Fact:</strong> It is treatable, and many women
                  conceive with proper care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
              </h2>

              <p className="mb-4 text-gray-700">
                If your period is late or your cycle has become unpredictable,
                get a safe and personalised evaluation instead of relying on
                home remedies or self-medication.
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
