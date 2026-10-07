
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

export default function DelayedPeriodsTreatment() {
  const faqs = [
    {
      q: "How many days late can a period be before it is a concern?",
      a: "More than 7 days late, or repeated delays, deserves a medical check.",
    },
    {
      q: "What is the most common cause of a delayed period?",
      a: "Pregnancy is the most common cause, followed by stress and hormonal conditions such as PCOS.",
    },
    {
      q: "Can stress delay my period?",
      a: "Yes, stress can delay ovulation and therefore make your period come later than expected.",
    },
    {
      q: "Why is my period late but my pregnancy test is negative?",
      a: "It may be too early to test, or stress, PCOS, thyroid issues, illness, weight changes or medicine changes may be responsible.",
    },
    {
      q: "Can PCOS cause delayed periods?",
      a: "Yes, PCOS is a leading cause of irregular, delayed or missed periods.",
    },
    {
      q: "Do emergency contraceptive pills delay periods?",
      a: "Yes, they can make the next period arrive earlier or later than expected.",
    },
    {
      q: "When should I see a gynaecologist?",
      a: "See a gynaecologist if delays keep recurring, you miss three periods, have pain or heavy bleeding, or are trying to conceive.",
    },
    {
      q: "Can delayed periods affect fertility?",
      a: "They can, because frequent delays may signal irregular ovulation, which is often treatable.",
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
                Causes of Delayed Periods: When to Worry and Who to Consult in
                Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                A late period creates instant worry. Your mind may jump to
                pregnancy, illness or something serious. In reality, a delayed
                period is one of the most common menstrual concerns, and most
                causes are manageable once you know what is behind them.
              </p>

              
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as a Delayed Period?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A typical menstrual cycle is around 21 to 35 days, counted
                  from the first day of one period to the first day of the next
                </li>
                <li>
                  A cycle can vary by a few days from month to month, and that
                  is usually normal
                </li>
                <li>
                  A period is generally considered late when it arrives more
                  than about 7 days after the expected date
                </li>
                <li>
                  Missing three or more periods in a row is called amenorrhea
                  and needs medical evaluation
                </li>
                <li>
                  Cycles are often irregular in the first years after menarche
                  and in the years before menopause
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Most Common Causes of Delayed Periods
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Pregnancy.</strong> Pregnancy is the most common
                  reason for a missed period in women of reproductive age. Other
                  early signs may include nausea, breast tenderness, fatigue and
                  frequent urination. Take a home pregnancy test if your period
                  is a week late. If it is positive, book an antenatal
                  consultation early.
                </li>

                <li>
                  <strong>Stress and emotional strain.</strong> Physical or
                  emotional stress can disturb the brain signals that control
                  ovulation. Exams, job pressure, family problems, grief, travel
                  and illness can delay ovulation, so the period follows later.
                </li>

                <li>
                  <strong>PCOS.</strong> Polycystic Ovary Syndrome is one of the
                  leading hormonal causes of irregular and delayed periods.
                  Signs may include cycles longer than 35 days, missed periods,
                  acne, oily skin, excess facial or body hair, weight gain and
                  difficulty conceiving.
                </li>

                <li>
                  <strong>Thyroid disorders.</strong> An underactive or
                  overactive thyroid can disrupt menstrual hormones. Weight
                  changes, hair fall, tiredness and feeling unusually cold or
                  hot may also occur. A blood test can check thyroid function.
                </li>

                <li>
                  <strong>Sudden weight changes.</strong> Rapid weight loss,
                  very low body fat, obesity, extreme dieting and skipped meals
                  can affect ovulation and delay periods.
                </li>

                <li>
                  <strong>Excessive exercise.</strong> Intense training without
                  adequate nutrition can lower hormone levels. Athletes and women
                  who suddenly begin heavy workout routines may notice delayed
                  periods.
                </li>

                <li>
                  <strong>Hormonal contraceptives and emergency pills.</strong>{" "}
                  Starting, stopping or changing birth control pills can shift
                  the cycle. Emergency contraceptive pills can also make the
                  next period early or late.
                </li>

                <li>
                  <strong>Breastfeeding.</strong> Breastfeeding can delay the
                  return of periods after delivery. Periods may remain absent
                  for months and the first cycles can be irregular. Ovulation
                  can still occur before the first period.
                </li>

                <li>
                  <strong>Perimenopause.</strong> Women in their 40s may notice
                  periods becoming spaced out and unpredictable. Hot flushes,
                  sleep trouble and mood changes may also occur.
                </li>

                <li>
                  <strong>High prolactin levels.</strong> Raised prolactin can
                  suppress ovulation and lead to missed periods. Some women may
                  have milk discharge from the breasts when they are not
                  pregnant.
                </li>

                <li>
                  <strong>Chronic illness and medicines.</strong> Conditions
                  such as diabetes and coeliac disease can affect menstrual
                  cycles. Some antidepressants, antipsychotics and steroids may
                  also delay periods. Do not stop prescribed medicines without
                  consulting your doctor.
                </li>

                <li>
                  <strong>Structural or uterine problems.</strong> Uterine
                  polyps, fibroids, scarring inside the uterus or ovarian cysts
                  can alter periods. Some may cause heavy or painful bleeding
                  along with delayed periods.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delayed Period vs Missed Period vs Irregular Period
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Delayed period.</strong> It arrives later than
                  expected, often by days or a couple of weeks.
                </li>
                <li>
                  <strong>Missed period.</strong> It does not arrive in that
                  cycle at all.
                </li>
                <li>
                  <strong>Irregular periods.</strong> Cycle length varies widely
                  from month to month.
                </li>
                <li>
                  <strong>Amenorrhea.</strong> There are no periods for three
                  months or more, apart from pregnancy.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                All four patterns deserve attention if they keep happening.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delayed Periods With a Negative Pregnancy Test: What Next?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Retest after 3 to 5 days, because testing too early can give a
                  false negative result
                </li>
                <li>
                  Review recent stress, travel, illness, weight change or
                  medicine changes
                </li>
                <li>
                  Note symptoms such as acne, excess hair growth, hair fall or
                  fatigue
                </li>
                <li>
                  See a gynaecologist if your period is still absent after a
                  couple of weeks
                </li>
                <li>
                  Repeated delays need a proper check-up even when you otherwise
                  feel healthy
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Book a consultation if you notice any of the following:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  No period for more than 7 to 10 days with a positive pregnancy
                  test
                </li>
                <li>Periods delayed again and again</li>
                <li>No period for three months without pregnancy</li>
                <li>Cycles consistently longer than 35 days</li>
                <li>
                  Delayed periods along with acne, excess hair growth or weight
                  gain
                </li>
                <li>Delayed periods while trying to conceive</li>
                <li>
                  Pain, heavy bleeding or unusual discharge with a late period
                </li>
                <li>Periods that have not started by the age of 15</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Seek Urgent Care If
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You have severe one-sided lower abdominal pain with a missed
                  period, which may indicate an ectopic pregnancy
                </li>
                <li>You feel dizzy or faint along with pain or bleeding</li>
                <li>You have very heavy bleeding that soaks through pads quickly</li>
                <li>You have fever with pelvic pain and foul-smelling discharge</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Go to the nearest hospital emergency department without delay if
                you experience these symptoms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Cause Is Diagnosed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history.</strong> The doctor reviews cycle
                  dates, previous patterns, weight changes, medicines, stress
                  and sexual history.
                </li>
                <li>
                  <strong>Pregnancy test.</strong> A urine or blood pregnancy
                  test may be performed.
                </li>
                <li>
                  <strong>Physical examination.</strong> This may include a
                  gentle abdominal assessment where needed.
                </li>
                <li>
                  <strong>Ultrasound.</strong> Pelvic ultrasound can examine the
                  uterus and ovaries, including features that may be seen in
                  PCOS.
                </li>
                <li>
                  <strong>Blood tests.</strong> Thyroid, prolactin, blood sugar
                  and other hormone tests may be advised.
                </li>
                <li>
                  <strong>Advanced tests.</strong> Hysteroscopy or laparoscopy
                  may be recommended only when findings require further
                  evaluation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Matched to the Cause
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Lifestyle Support
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain a healthy and stable weight</li>
                <li>
                  Eat balanced meals with enough protein, fibre and iron
                </li>
                <li>Exercise moderately and regularly</li>
                <li>
                  Manage stress through sleep, walks, yoga or relaxation
                </li>
                <li>Avoid crash diets and extreme workout routines</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Medical Treatment
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal therapy to regularise cycles when appropriate
                </li>
                <li>Thyroid medication where needed</li>
                <li>Treatment for high prolactin levels</li>
                <li>
                  Ovulation induction for women with PCOS who wish to conceive
                </li>
                <li>
                  Review of current medicines that may be affecting the menstrual
                  cycle
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Procedures When Necessary
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diagnostic hysteroscopy to inspect the uterine cavity
                </li>
                <li>
                  Hysteroscopic polypectomy to remove polyps without cuts
                </li>
                <li>
                  Laparoscopic treatment for cysts or other pelvic conditions
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delayed Periods and Fertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular ovulation is essential for conception, so frequent
                  delays may signal ovulation problems
                </li>
                <li>
                  Women trying to conceive for 12 months, or 6 months if they
                  are over 35, should seek a fertility evaluation
                </li>
                <li>
                  PCOS, thyroid concerns and high prolactin are treatable causes
                  of difficulty conceiving
                </li>
                <li>
                  Dr. Priyanka Gynaec offers personalised fertility and IVF care
                  for women who need extra support
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri and Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                centre in Moradabad that follows the philosophy{" "}
                <strong>&ldquo;Her Health First.&rdquo;</strong>
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Services
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gynaecology and 3D laparoscopy</li>
                <li>Fertility and IVF</li>
                <li>Pregnancy and birthing care</li>
                <li>Antenatal services and normal delivery</li>
                <li>Hysteroscopy and polypectomy</li>
                <li>Endometriosis surgery</li>
                <li>Paediatric care</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Technology
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery</li>
                <li>3D and 4D ultrasound</li>
                <li>Time-lapse imaging incubator</li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Why Women Choose the Centre
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A woman specialist who listens before advising</li>
                <li>Clear explanations of every test and treatment</li>
                <li>Continuity of care through follow-ups</li>
                <li>
                  Support at every life stage, from puberty to motherhood
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Keep Your Cycle Healthy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Track your periods in a diary or app</li>
                <li>Sleep 7 to 8 hours and keep a steady routine</li>
                <li>Avoid skipping meals or extreme dieting</li>
                <li>Stay hydrated</li>
                <li>Exercise regularly without overtraining</li>
                <li>Do not use emergency contraceptive pills repeatedly</li>
                <li>Get a yearly women&apos;s health check-up</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book a Consultation for Delayed Periods in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                A delayed period is your body&apos;s way of signalling that
                something has changed. The cause may be as simple as stress or
                as significant as PCOS, a thyroid disorder or pregnancy. Do not
                ignore repeated delays or guess with home remedies and random
                tablets.
              </p>

              <p className="mb-4 text-gray-700">
                If your cycle has become unpredictable, take the first step and
                book a consultation with Dr. Priyanka Pachauri in Moradabad.
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
