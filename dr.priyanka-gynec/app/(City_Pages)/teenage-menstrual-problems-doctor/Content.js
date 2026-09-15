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

export default function TeenageMenstrualProblems() {
  const faqs = [
    {
      q: "Is it normal for a teenager's periods to be irregular?",
      a: "Some irregularity is normal in the first one to two years after periods begin, but persistent irregularity beyond that should be evaluated.",
    },
    {
      q: "How heavy is 'too heavy' for a teenage period?",
      a: "Needing to change protection every one to two hours, or bleeding lasting more than seven days, is considered heavy and worth evaluating.",
    },
    {
      q: "Can severe period pain in teenagers mean something serious?",
      a: "It can sometimes indicate conditions like endometriosis, especially if pain is worsening or not relieved by standard measures, so evaluation is recommended.",
    },
    {
      q: "At what point is a missed period a concern in a teenager?",
      a: "No period for three months or more, outside of pregnancy, or no first period by age 15–16, both warrant evaluation.",
    },
    {
      q: "Is PCOS common in teenagers?",
      a: "Yes, PCOS is frequently diagnosed during adolescence, particularly when irregular cycles occur alongside acne or excess hair growth.",
    },
    {
      q: "Do all menstrual problems in teenagers need hormonal treatment?",
      a: "No. Treatment depends on the specific cause — some cases need only lifestyle guidance or monitoring, while others require hormonal management.",
    },
    {
      q: "Will my daughter need an internal examination?",
      a: "Usually not. Most evaluations use history, external assessment, blood tests, and non-invasive ultrasound.",
    },
    {
      q: "How is severe PMS different from normal mood changes before a period?",
      a: "Severe PMS significantly disrupts daily functioning, school, or relationships, whereas normal PMS involves milder, manageable symptoms.",
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
                Teenage Menstrual Problems Doctor in Moradabad: A Complete Guide
                by Problem Type
              </h1>

              <p className="mb-4 text-gray-700">
                Menstrual cycles in the teenage years are often unpredictable,
                and many parents and teenagers assume this unpredictability is
                simply &quot;normal for a young girl.&quot; Some irregularity is
                expected, especially in the first couple of years after periods
                begin — but persistent, severe, or unusual menstrual problems
                are not something to leave unaddressed.
              </p>

              <p className="text-gray-700">
                This guide breaks down the most common categories of teenage
                menstrual problems, their likely causes, and when a consultation
                with a specialist doctor becomes necessary.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Teenage menstrual problems generally fall into a few clear
                  categories: irregular cycles, heavy bleeding, painful periods,
                  absent periods, and severe PMS symptoms
                </li>
                <li>
                  Each category has its own set of likely causes, ranging from
                  the body&apos;s cycles still stabilising to hormonal disorders
                  like PCOS or thyroid conditions
                </li>
                <li>
                  A proper evaluation — history, examination, and where needed,
                  blood tests or ultrasound — is the only reliable way to
                  distinguish a temporary phase from a condition that needs
                  treatment
                </li>
                <li>
                  Nearly all teenage menstrual problems respond well to
                  appropriate medical management once correctly diagnosed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Teenage Menstrual Health Deserves Specific Attention
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>The reproductive system is still maturing.</strong>{" "}
                  For the first one to two years after a girl&apos;s first
                  period, cycles are commonly irregular as the hormonal system
                  establishes its regular rhythm — this is different from
                  irregularity that persists well beyond this window.
                </li>
                <li>
                  <strong>Menstrual problems can affect daily life
                  significantly.</strong> Heavy bleeding, severe cramps, or
                  unpredictable cycles can disrupt school attendance, sports
                  participation, sleep, and social confidence.
                </li>
                <li>
                  <strong>Some conditions are easier to manage the earlier
                  they&apos;re identified.</strong> Conditions like PCOS and
                  endometriosis are increasingly recognised in teenagers, and
                  early management generally leads to better long-term outcomes
                  than delayed diagnosis in adulthood.
                </li>
                <li>
                  <strong>Persistent menstrual problems are rarely &quot;just
                  stress.&quot;</strong> While stress can affect cycles,
                  recurring or severe menstrual symptoms usually have an
                  identifiable physical cause that deserves proper evaluation
                  rather than being dismissed.
                </li>
                <li>
                  <strong>Menstrual health is a marker of overall
                  health.</strong> Cycle irregularities can sometimes reflect
                  underlying nutritional, thyroid, or metabolic issues, making
                  menstrual evaluation useful for a teenager&apos;s broader
                  health picture as well.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 1: Irregular Menstrual Cycles
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it looks like.</strong> Cycles that vary
                  significantly in length, periods that come every few weeks or
                  skip months at a time, or a complete lack of a predictable
                  pattern well beyond the first couple of years after menarche.
                </li>
                <li>
                  <strong>Common causes.</strong> The most frequent causes
                  include the natural post-menarche stabilisation period,
                  polycystic ovary syndrome (PCOS), thyroid dysfunction,
                  significant weight changes, high stress levels, or intensive
                  physical training.
                </li>
                <li>
                  <strong>When to seek evaluation.</strong> If irregularity
                  persists more than two years after periods begin, or is
                  accompanied by other symptoms like acne, excess hair growth,
                  or weight change, a consultation is recommended.
                </li>
                <li>
                  <strong>General treatment approach.</strong> Depending on the
                  identified cause, management can include hormonal regulation,
                  thyroid treatment, or lifestyle-based approaches, always
                  guided by proper testing rather than guesswork.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 2: Heavy Menstrual Bleeding (Menorrhagia)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it looks like.</strong> Needing to change
                  sanitary protection every one to two hours, periods lasting
                  longer than seven days, passing large clots, or bleeding heavy
                  enough to cause fatigue or dizziness.
                </li>
                <li>
                  <strong>Common causes.</strong> Hormonal imbalance is the most
                  frequent cause in teenagers, though bleeding disorders,
                  thyroid conditions, and, less commonly, structural issues can
                  also contribute.
                </li>
                <li>
                  <strong>When to seek evaluation.</strong> Any pattern of heavy
                  bleeding that affects daily activities, causes visible
                  fatigue, or has been ongoing for more than a couple of cycles
                  should be assessed, particularly to rule out anaemia.
                </li>
                <li>
                  <strong>General treatment approach.</strong> Treatment may
                  include hormonal management to regulate flow, iron
                  supplementation if anaemia is present, and further testing if
                  a bleeding disorder is suspected.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 3: Painful Periods (Dysmenorrhea)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it looks like.</strong> Cramping pain that
                  interferes with school attendance, sleep, or daily function,
                  sometimes accompanied by nausea, back pain, or diarrhoea
                  during the first days of the period.
                </li>
                <li>
                  <strong>Common causes.</strong> Primary dysmenorrhea (cramping
                  without an underlying structural cause) is most common in
                  teenagers, but persistent or worsening pain can point toward
                  endometriosis or other pelvic conditions.
                </li>
                <li>
                  <strong>When to seek evaluation.</strong> If over-the-counter
                  pain relief and standard self-care measures are not providing
                  adequate relief, or if pain is progressively worsening cycle
                  to cycle, evaluation is warranted.
                </li>
                <li>
                  <strong>General treatment approach.</strong> Management ranges
                  from medical pain control and hormonal regulation to further
                  diagnostic evaluation, including ultrasound or laparoscopy,
                  when endometriosis is suspected.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 4: Absent or Very Delayed Periods (Amenorrhea)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it looks like.</strong> No period by age 15–16,
                  or a previously regular cycle that stops for three months or
                  more without pregnancy being the cause.
                </li>
                <li>
                  <strong>Common causes.</strong> Causes range from significant
                  weight changes or intensive athletic training to PCOS, thyroid
                  disorders, or structural reproductive conditions.
                </li>
                <li>
                  <strong>When to seek evaluation.</strong> Any absence of
                  periods beyond the expected timeframe should be evaluated, as
                  the underlying cause can range from easily correctable to one
                  requiring ongoing management.
                </li>
                <li>
                  <strong>General treatment approach.</strong> Treatment is
                  entirely dependent on the cause identified through hormonal
                  testing, ultrasound, and clinical history — there is no single
                  standard treatment for this category.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 5: Severe PMS and Mood-Related Symptoms
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it looks like.</strong> Marked mood changes,
                  irritability, bloating, breast tenderness, or fatigue in the
                  days before a period, severe enough to affect daily
                  functioning or relationships.
                </li>
                <li>
                  <strong>Common causes.</strong> Hormonal fluctuation is the
                  primary driver, though severity can be influenced by stress,
                  sleep patterns, and diet.
                </li>
                <li>
                  <strong>When to seek evaluation.</strong> If symptoms are
                  significantly disruptive to school, family life, or emotional
                  wellbeing on a recurring basis, an evaluation can help
                  identify management strategies.
                </li>
                <li>
                  <strong>General treatment approach.</strong> Approaches
                  include lifestyle adjustments, symptom-targeted treatment, and
                  in more severe or persistent cases, hormonal management under
                  medical supervision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Menstrual Health Evaluation for a Teenager Involves
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A detailed menstrual history.</strong> Cycle length,
                  flow pattern, pain levels, and associated symptoms are
                  reviewed, often over several recent cycles if tracked.
                </li>
                <li>
                  <strong>General health and lifestyle review.</strong> Diet,
                  weight changes, activity levels, stress, and sleep patterns
                  are all relevant to understanding menstrual irregularities.
                </li>
                <li>
                  <strong>A physical examination when appropriate.</strong> This
                  is conducted gently and only to the extent clinically
                  necessary, with clear explanation at every step.
                </li>
                <li>
                  <strong>Blood tests.</strong> These typically assess hormone
                  levels, thyroid function, and iron status where heavy bleeding
                  or fatigue is a concern.
                </li>
                <li>
                  <strong>Pelvic ultrasound.</strong> A non-invasive ultrasound
                  can assess the uterus and ovaries without requiring an
                  internal examination in adolescents.
                </li>
                <li>
                  <strong>A clear explanation of findings.</strong> Both the
                  teenager and her parents are walked through the results and
                  the reasoning behind any recommended treatment plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care vs. When It&apos;s Time to See a Doctor
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Manage at home if:
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Cramps are mild to moderate and respond to rest, heat, and
                      standard pain relief
                    </li>
                    <li>
                      Cycles are only mildly irregular within the first two
                      years after periods begin
                    </li>
                    <li>
                      PMS symptoms are noticeable but manageable
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    See a doctor if:
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Pain regularly disrupts school or daily activities
                    </li>
                    <li>
                      Bleeding requires very frequent changes of protection or
                      lasts beyond seven days
                    </li>
                    <li>
                      Periods are absent for three months or more outside of
                      pregnancy
                    </li>
                    <li>
                      Irregularity persists well beyond the first two years
                      after menarche
                    </li>
                    <li>
                      Any menstrual symptom is accompanied by unexplained weight
                      change, excess hair growth, or severe fatigue
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Seek prompt medical attention if:
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Bleeding is heavy enough to cause dizziness or fainting
                    </li>
                    <li>
                      Pain is sudden and severe rather than typical cramping —
                      these warrant urgent evaluation rather than a routine
                      appointment
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Tracking Habits That Help a Doctor Diagnose Faster
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Note the start and end date of each cycle.</strong>{" "}
                  Even a basic calendar or phone note showing when periods start
                  and stop makes it far easier to identify a genuine pattern of
                  irregularity.
                </li>
                <li>
                  <strong>Record pain severity, not just its presence.</strong>{" "}
                  Noting whether pain was mild, moderate, or severe enough to
                  miss school gives a doctor a much clearer picture than a
                  general description.
                </li>
                <li>
                  <strong>Track how many pads or products are used per day
                  during heavy flow days.</strong> This gives an objective
                  measure of bleeding heaviness that is more useful than a
                  general impression of &quot;a lot.&quot;
                </li>
                <li>
                  <strong>Note any accompanying symptoms.</strong> Mood changes,
                  acne, unusual hair growth, or weight changes recorded
                  alongside cycle data can point directly toward specific
                  underlying causes like PCOS or thyroid conditions.
                </li>
                <li>
                  <strong>Bring this record to the appointment.</strong> Even a
                  few months of basic tracking significantly speeds up accurate
                  diagnosis compared to relying on memory alone during the
                  consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing a Specialist Doctor Matters for Teenage Menstrual
                Problems
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Accurate differentiation between normal variation and
                  a genuine disorder.</strong> A specialist can distinguish
                  between the expected irregularity of early adolescence and a
                  pattern that indicates an underlying condition.
                </li>
                <li>
                  <strong>Access to the right diagnostic tools.</strong>{" "}
                  Hormonal panels, thyroid testing, iron studies, and
                  adolescent-appropriate ultrasound are used together to reach
                  an accurate diagnosis rather than relying on assumptions.
                </li>
                <li>
                  <strong>Age-appropriate, non-judgemental
                  communication.</strong> A doctor experienced with teenage
                  patients creates a comfortable environment where a young
                  patient feels able to describe her symptoms honestly.
                </li>
                <li>
                  <strong>A treatment plan built for a developing body.</strong>{" "}
                  Adolescent hormonal treatment approaches are adjusted
                  specifically for a still-developing reproductive system,
                  rather than applying adult protocols directly.
                </li>
                <li>
                  <strong>Long-term monitoring as the teenager grows.</strong>{" "}
                  Menstrual health often needs to be tracked over successive
                  visits, particularly for conditions like PCOS, making
                  continuity of care valuable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist in
                Moradabad with dedicated experience managing menstrual health
                concerns in teenagers, alongside her broader expertise in
                gynaecology, laparoscopy, and fertility care. Every consultation
                for a young patient is handled with sensitivity, clear
                communication, and a focus on identifying the real, underlying
                cause of menstrual symptoms rather than offering a
                one-size-fits-all response.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book a Consultation for Menstrual Health Concerns
              </h2>

              <p className="mb-4 text-gray-700">
                Persistent or severe menstrual problems in a teenager are not
                something to simply wait out. A proper evaluation identifies the
                cause and puts an effective treatment plan in place.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Adolescent Health Specialist (MBBS, MS)
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
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
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