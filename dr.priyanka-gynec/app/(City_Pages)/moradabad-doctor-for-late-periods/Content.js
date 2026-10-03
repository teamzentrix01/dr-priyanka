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

export default function MoradabadDoctorForLatePeriods() {
  const faqs = [
    {
      q: "Who is a good doctor for late periods in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a trusted lady gynaecologist in Moradabad.",
    },
    {
      q: "How late can a period be before seeing a doctor?",
      a: "See a doctor if it is over a week late with negative tests, or if you miss three periods.",
    },
    {
      q: "Can stress delay periods?",
      a: "Yes. Stress, poor sleep, travel and weight changes can delay periods.",
    },
    {
      q: "My period is late but the pregnancy test is negative. Why?",
      a: "Causes include early testing, stress, PCOS, thyroid problems or hormonal changes. Repeat the test and consult a doctor if it persists.",
    },
    {
      q: "Can PCOS cause late periods?",
      a: "Yes. PCOS is a very common cause and is treatable.",
    },
    {
      q: "Is it safe to take tablets to bring on a period?",
      a: "Not without medical advice. Self-medication can be risky.",
    },
    {
      q: "Is my consultation private?",
      a: "Yes. Your details are treated with privacy and respect.",
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
                Moradabad Doctor for Late Periods: Causes, Tests and When to
                Consult
              </h1>

              <p className="mb-4 text-gray-700">
                A late period can bring worry, hope or confusion, depending on
                your situation. Most women experience a delayed period at some
                point, and many causes are harmless and temporary. Sometimes,
                though, a late or missed period is the first sign of a condition
                that needs treatment, such as PCOS, a thyroid problem or a
                pregnancy complication.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what counts as a late period, the common
                causes, which tests help, and when to consult Dr. Priyanka
                Pachauri, a lady gynaecologist at Dr. Priyanka Gynaec in
                Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Late or Delayed Period?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A typical menstrual cycle is about 21 to 35 days.</li>
                <li>Cycles can vary by a few days from month to month.</li>
                <li>
                  A period is generally called late when it has not started by the
                  expected date.
                </li>
                <li>A missed period means no bleeding for a full cycle.</li>
                <li>
                  Amenorrhoea means periods have been absent for three months or
                  more, in a woman who previously had regular cycles, or for six
                  months if cycles were irregular.
                </li>
                <li>
                  Teenagers and women nearing menopause often have less
                  predictable cycles.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                First Step: Check for Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                If you are sexually active, pregnancy is the first possibility to
                rule out.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Use a home urine pregnancy test, ideally with the first morning
                  urine.
                </li>
                <li>Testing too early can give a false negative.</li>
                <li>
                  If negative and your period is still absent after a week, repeat
                  the test.
                </li>
                <li>
                  A blood test (beta-hCG) at a clinic is more sensitive.
                </li>
                <li>
                  An ultrasound confirms the location and health of a pregnancy.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Do not ignore a positive test with pain or bleeding. Severe
                one-sided pain with a missed period can indicate an ectopic
                pregnancy, which is an emergency.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Late Periods (Besides Pregnancy)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Stress and Lifestyle
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Emotional stress, exams, travel or major life changes.</li>
                <li>Poor sleep or night shifts.</li>
                <li>Sudden changes in routine.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Weight Changes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rapid weight loss or very low body weight.</li>
                <li>Excess weight gain.</li>
                <li>Crash diets or severe calorie restriction.</li>
                <li>Very intense exercise.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Polycystic Ovary Syndrome (PCOS)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A very common cause of irregular and delayed periods.
                </li>
                <li>
                  May come with acne, excess facial or body hair and weight gain.
                </li>
                <li>Can affect fertility if untreated.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Thyroid Disorders
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  An underactive or overactive thyroid can disturb cycles.
                </li>
                <li>May cause tiredness, weight changes and hair fall.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                High Prolactin Levels
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A hormone that can suppress ovulation.</li>
                <li>
                  May cause milk discharge from the breasts when not pregnant.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Perimenopause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycles become irregular in the years before menopause.
                </li>
                <li>Often begins in the 40s, sometimes earlier.</li>
                <li>May come with hot flushes and sleep changes.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Premature Ovarian Insufficiency
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovaries slow down before age 40.</li>
                <li>
                  Causes irregular or absent periods and may affect fertility.
                </li>
                <li>Needs medical evaluation.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Breastfeeding
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods may stay absent or irregular for months after delivery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Contraception
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Emergency contraceptive pills can shift the next period.</li>
                <li>
                  Starting or stopping hormonal pills, injections or implants can
                  change cycles.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Other Medical Causes
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Chronic illnesses and some medicines.</li>
                <li>Uterine problems such as scarring after procedures.</li>
                <li>Diabetes and insulin resistance.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Late Periods With Negative Pregnancy Test: What It Might Mean
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovulation was delayed in that cycle.</li>
                <li>Stress, illness or travel affected your hormones.</li>
                <li>
                  A hormonal condition such as PCOS or thyroid imbalance.
                </li>
                <li>Testing was done too early.</li>
                <li>Breastfeeding or recent contraception changes.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                If this keeps happening, it is worth a proper evaluation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Late Periods by Age
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teenage Girls
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycles often take two to three years to settle after the first
                  period.
                </li>
                <li>
                  No period by age 15, or three years after breast development
                  begins, should be checked.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                20s and 30s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS, stress, thyroid issues and pregnancy are the main causes.
                </li>
                <li>
                  Women trying to conceive should get irregular cycles checked
                  early.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Breastfeeding often delays the return of periods.</li>
                <li>
                  Absent periods well beyond expected time deserve review.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                40s
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Perimenopause becomes more likely.</li>
                <li>
                  Heavy or very irregular bleeding should still be evaluated.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Doctor for Late Periods?
              </h2>

              <p className="mb-4 text-gray-700">
                Consult a gynaecologist if:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your period is more than a week late and pregnancy tests are
                  negative.
                </li>
                <li>You have missed three periods in a row.</li>
                <li>You have never had a period by the expected age.</li>
                <li>
                  Your cycles are persistently shorter than 21 or longer than 35
                  days.
                </li>
                <li>
                  You are trying to conceive and cycles are irregular.
                </li>
                <li>
                  You have acne, excess hair growth or rapid weight changes.
                </li>
                <li>
                  You have milk discharge from the breasts without pregnancy.
                </li>
                <li>
                  Periods stopped suddenly after previously being regular.
                </li>
                <li>
                  You are under 45 and have hot flushes with irregular periods.
                </li>
                <li>
                  You have heavy bleeding when the period finally comes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Signs: Go to the Hospital Immediately
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe, sudden abdominal pain with a missed period.</li>
                <li>Fainting or dizziness.</li>
                <li>Heavy bleeding soaking pads quickly.</li>
                <li>Shoulder-tip pain with abdominal pain.</li>
                <li>High fever with pelvic pain.</li>
                <li>Severe vomiting that prevents drinking fluids.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Self-Medication Is Risky
              </h2>

              <p className="mb-4 text-gray-700">
                Many women are tempted to take tablets to &quot;bring on&quot; a
                period. Please avoid this without medical advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Taking hormonal tablets without knowing the cause can worsen
                  imbalance.
                </li>
                <li>A hidden pregnancy could be harmed.</li>
                <li>
                  Underlying PCOS or thyroid problems stay undiagnosed.
                </li>
                <li>
                  Some medicines cause heavy bleeding or other side effects.
                </li>
                <li>
                  Online or neighbourhood advice may not suit your body.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A short consultation is safer and often faster than trial and
                error.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, safe-motherhood focused care. Her practice covers
                antenatal and postnatal care, high-risk pregnancies, laparoscopic
                gynaecological surgery and menstrual disorder treatment.
              </p>

              <p className="mb-4 text-gray-700">
                The clinic follows a &quot;Her Health First&quot; philosophy:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>She listens first before advising tests or treatment.</li>
                <li>Options are explained in simple, clear language.</li>
                <li>
                  Treatment is personalised to your age, health and goals.
                </li>
                <li>Privacy and comfort are respected.</li>
                <li>Care continues through follow-up visits.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                The clinic also publishes guidance on PCOS and infertility, which
                is a common reason for delayed periods in younger women.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Late Periods Are Evaluated
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>History:</strong> cycle pattern, last period date,
                  pregnancies, weight changes, stress, medicines and
                  contraception.
                </li>
                <li>
                  <strong>Examination:</strong> general check, and a gentle
                  abdominal or pelvic examination only when needed and with
                  consent.
                </li>
                <li>
                  <strong>Pregnancy test:</strong> urine or blood.
                </li>
                <li>
                  <strong>Pelvic ultrasound:</strong> to look at the uterus and
                  ovaries.
                </li>
                <li>
                  <strong>Blood tests:</strong> thyroid, prolactin, sugar and
                  other hormones as advised.
                </li>
                <li>
                  <strong>Diagnosis:</strong> the likely cause explained in
                  simple words.
                </li>
                <li>
                  <strong>Treatment plan and follow-up.</strong>
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The clinic uses 3D and 4D ultrasound for detailed imaging, which
                supports accurate evaluation of the uterus and ovaries.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Depends on the Cause
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pregnancy:</strong> confirmation, antenatal care and a
                  safe plan.
                </li>
                <li>
                  <strong>PCOS:</strong> lifestyle changes, weight management and
                  medicines to regulate cycles or support ovulation.
                </li>
                <li>
                  <strong>Thyroid disorders:</strong> correction of thyroid
                  levels, usually with a physician or endocrinologist.
                </li>
                <li>
                  <strong>Stress and lifestyle causes:</strong> sleep, nutrition
                  and stress management support.
                </li>
                <li>
                  <strong>Weight-related causes:</strong> balanced nutrition and
                  gradual weight correction.
                </li>
                <li>
                  <strong>Perimenopause:</strong> symptom support and cycle
                  monitoring.
                </li>
                <li>
                  <strong>Fertility concerns:</strong> ovulation tracking and
                  personalised fertility plans.
                </li>
                <li>
                  <strong>Structural problems:</strong> minor procedures such as
                  hysteroscopy when needed.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Treatment is always matched to the diagnosis. Many women only need
                reassurance, simple lifestyle changes or short-term medicines.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Late Periods and Fertility
              </h2>

              <p className="mb-4 text-gray-700">
                If you are trying to conceive, irregular cycles deserve early
                attention.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delayed ovulation can make timing intercourse difficult.
                </li>
                <li>
                  PCOS is a treatable cause of difficulty conceiving.
                </li>
                <li>Early evaluation shortens the time to a plan.</li>
                <li>Couples may need both partners&apos; evaluation.</li>
                <li>
                  The clinic offers fertility and IVF care with personalised
                  plans.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Healthy Habits That Support Regular Periods
              </h2>

              <p className="mb-4 text-gray-700">
                These tips support cycle health but do not replace medical care:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain a healthy body weight.</li>
                <li>
                  Eat balanced meals with enough protein, iron and healthy fats.
                </li>
                <li>Avoid crash diets and extreme exercise.</li>
                <li>Sleep seven to eight hours at regular times.</li>
                <li>
                  Manage stress through walking, yoga, breathing or hobbies.
                </li>
                <li>Keep a period diary or use a tracking app.</li>
                <li>Limit smoking and alcohol.</li>
                <li>
                  Do regular check-ups for thyroid and blood sugar if advised.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of your last three periods.</li>
                <li>Write down how long and how heavy they were.</li>
                <li>
                  Mention any recent stress, illness, travel or weight change.
                </li>
                <li>
                  Note any pill, injection or emergency contraceptive use.
                </li>
                <li>Carry earlier scans, blood tests and prescriptions.</li>
                <li>List medicines, supplements and allergies.</li>
                <li>
                  Note any acne, hair growth, hair fall or milk discharge.
                </li>
                <li>Write your questions in advance.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths About Late Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> A late period always means pregnancy.{" "}
                  <strong>Fact:</strong> Stress, hormones and many other causes
                  are possible.
                </li>
                <li>
                  <strong>Myth:</strong> Skipping a period is harmless every time.{" "}
                  <strong>Fact:</strong> Repeated delays should be checked.
                </li>
                <li>
                  <strong>Myth:</strong> Period-delaying or period-inducing
                  tablets are safe to use freely. <strong>Fact:</strong> They
                  should be used only on medical advice.
                </li>
                <li>
                  <strong>Myth:</strong> PCOS means you can never conceive.{" "}
                  <strong>Fact:</strong> PCOS is treatable, and many women
                  conceive with proper care.
                </li>
                <li>
                  <strong>Myth:</strong> Irregular periods are normal for every
                  woman. <strong>Fact:</strong> Persistent irregularity needs
                  evaluation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Doctor in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Check qualifications and practical experience.</li>
                <li>Choose a doctor who listens and explains patiently.</li>
                <li>
                  Look for ultrasound and basic diagnostic facilities.
                </li>
                <li>
                  Prefer personalised advice over a one-size-fits-all pill.
                </li>
                <li>Make sure privacy and comfort are respected.</li>
                <li>Read patient experiences.</li>
                <li>Consider location and ease of booking.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                One patient shared on the clinic&apos;s website that they felt
                comfortable and understood from the first visit, with every step
                explained clearly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
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
                Frequently Asked Questions (FAQ)
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
