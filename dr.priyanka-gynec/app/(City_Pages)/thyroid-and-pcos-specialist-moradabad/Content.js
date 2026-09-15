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

export default function ThyroidAndPcosTreatment() {
  const faqs = [
    {
      q: "Can I have both PCOS and a thyroid disorder at the same time?",
      a: "Yes, the two conditions commonly occur together, which is why combined screening is recommended.",
    },
    {
      q: "How is PCOS different from a thyroid disorder if the symptoms look similar?",
      a: "Blood tests and ultrasound findings distinguish the two, since PCOS relates to androgen and ovarian hormone levels while thyroid disorders relate to thyroid hormone levels.",
    },
    {
      q: "Can PCOS and thyroid problems both affect my ability to get pregnant?",
      a: "Yes, both can affect fertility, and treating both together gives the best chance of successful conception.",
    },
    {
      q: "Is PCOS curable, or only manageable?",
      a: "PCOS is a long-term hormonal condition that is managed effectively with treatment and lifestyle changes rather than cured outright.",
    },
    {
      q: "Will I need to take thyroid medication for life?",
      a: "Many cases of hypothyroidism require long-term hormone replacement, monitored periodically through blood tests.",
    },
    {
      q: "Can weight loss alone fix PCOS symptoms?",
      a: "Weight management significantly helps in many cases, but a complete treatment plan often includes medical management alongside lifestyle changes.",
    },
    {
      q: "What blood tests are needed to check for both conditions?",
      a: "Thyroid function tests and hormonal panels assessing androgens and other reproductive hormones are the standard first-line tests.",
    },
    {
      q: "How soon should I get tested if I suspect a hormonal imbalance?",
      a: "Testing is recommended as soon as persistent symptoms like irregular periods, unexplained weight change, or fatigue are noticed, rather than waiting for symptoms to worsen.",
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
                Thyroid and PCOS Specialist in Moradabad: Understanding the
                Connection and Treatment Options
              </h1>

              <p className="mb-4 text-gray-700">
                Thyroid disorders and Polycystic Ovary Syndrome (PCOS) are two
                of the most common hormonal conditions affecting women today,
                and they frequently overlap — a woman with one condition has a
                meaningfully higher chance of also having the other. Both can
                cause irregular periods, weight changes, fatigue, and fertility
                difficulties, which means symptoms are often misattributed to
                the wrong condition, or dismissed entirely as &quot;normal
                hormonal ups and downs.&quot;
              </p>

              <p className="text-gray-700">
                This guide explains how thyroid disorders and PCOS are
                connected, how each is diagnosed, and what an integrated
                treatment approach looks like.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid disorders and PCOS share several overlapping
                  symptoms, including irregular periods, weight changes, and
                  fatigue, which makes accurate testing essential rather than
                  assuming one or the other
                </li>
                <li>
                  Women with PCOS have a notably higher likelihood of also
                  having a thyroid disorder, particularly hypothyroidism, making
                  combined screening important
                </li>
                <li>
                  Diagnosis relies on a combination of clinical history, blood
                  tests, and pelvic ultrasound — not on symptoms alone
                </li>
                <li>
                  Both conditions are highly manageable with the right
                  combination of medical treatment, monitoring, and lifestyle
                  support
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding PCOS
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it is.</strong> Polycystic Ovary Syndrome is a
                  hormonal condition in which the ovaries produce
                  higher-than-typical levels of androgens (male hormones), often
                  affecting ovulation and leading to irregular or absent periods.
                </li>
                <li>
                  <strong>Common symptoms.</strong> Irregular or missed periods,
                  acne, excess facial or body hair growth, thinning scalp hair,
                  weight gain (particularly around the abdomen), and difficulty
                  losing weight are all frequently reported.
                </li>
                <li>
                  <strong>Impact on fertility.</strong> Because PCOS commonly
                  disrupts regular ovulation, it is one of the leading causes of
                  difficulty conceiving, though it is very manageable with the
                  right treatment approach.
                </li>
                <li>
                  <strong>Long-term health considerations.</strong> Beyond
                  reproductive symptoms, PCOS is linked to a higher long-term
                  risk of insulin resistance, type 2 diabetes, and
                  cardiovascular concerns, making it important to manage as a
                  whole-health condition, not just a menstrual one.
                </li>
                <li>
                  <strong>Diagnosis is based on a combination of findings.</strong>{" "}
                  No single test confirms PCOS; diagnosis typically requires
                  assessing symptoms, hormone blood levels, and ultrasound
                  findings of the ovaries together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Thyroid Disorders in Women
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>The thyroid&apos;s role in reproductive health.</strong>{" "}
                  The thyroid gland regulates metabolism and plays a direct role
                  in menstrual regularity, ovulation, and even the ability to
                  sustain a healthy pregnancy.
                </li>
                <li>
                  <strong>Hypothyroidism (underactive thyroid).</strong> This is
                  the more common thyroid disorder in women and can cause
                  fatigue, weight gain, irregular or heavy periods, hair
                  thinning, and, in more significant cases, difficulty
                  conceiving.
                </li>
                <li>
                  <strong>Hyperthyroidism (overactive thyroid).</strong> Less
                  common but still significant, this can cause unexplained
                  weight loss, rapid heartbeat, anxiety-like symptoms, and
                  lighter or irregular periods.
                </li>
                <li>
                  <strong>Why thyroid problems are often missed.</strong>{" "}
                  Symptoms like fatigue, weight change, and mood shifts are
                  frequently attributed to stress, lifestyle, or &quot;just
                  being busy,&quot; delaying diagnosis of an underlying thyroid
                  condition.
                </li>
                <li>
                  <strong>Simple diagnosis, significant impact.</strong> A
                  thyroid disorder is identified through a straightforward blood
                  test, yet its impact on periods, fertility, and overall
                  wellbeing can be substantial if left unmanaged.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Overlap Between Thyroid Disorders and PCOS
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Shared symptoms create diagnostic confusion.</strong>{" "}
                  Irregular periods, weight gain, fatigue, and hair thinning
                  appear in both conditions, meaning a woman could easily be
                  treated for one while the other goes unrecognised.
                </li>
                <li>
                  <strong>Higher co-occurrence than chance would predict.</strong>{" "}
                  Research has consistently shown that women with PCOS have a
                  significantly increased likelihood of also having an
                  underactive thyroid, and vice versa, which is why many
                  specialists screen for both simultaneously.
                </li>
                <li>
                  <strong>One condition can worsen the other&apos;s
                  symptoms.</strong> An underactive thyroid can worsen insulin
                  resistance and weight gain already associated with PCOS,
                  compounding the overall hormonal imbalance.
                </li>
                <li>
                  <strong>Both affect fertility through different
                  mechanisms.</strong> PCOS primarily disrupts ovulation, while
                  thyroid dysfunction affects the broader hormonal environment
                  needed to sustain a healthy cycle and pregnancy — together,
                  they can compound fertility challenges if both go unaddressed.
                </li>
                <li>
                  <strong>Combined screening leads to more accurate
                  treatment.</strong> Because of this overlap, a thorough
                  evaluation for one condition should generally include
                  screening for the other, rather than treating symptoms in
                  isolation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Combined Evaluation Works
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed symptom and cycle history.</strong> The
                  doctor reviews menstrual pattern, weight changes, skin and
                  hair changes, energy levels, and any fertility concerns to
                  build an initial clinical picture.
                </li>
                <li>
                  <strong>Thyroid function blood tests.</strong> These measure
                  hormone levels that indicate whether the thyroid is
                  underactive, overactive, or functioning normally.
                </li>
                <li>
                  <strong>Hormonal blood tests for PCOS.</strong> These assess
                  androgen levels and other reproductive hormones relevant to a
                  PCOS diagnosis.
                </li>
                <li>
                  <strong>Pelvic ultrasound.</strong> This evaluates the ovaries
                  for the characteristic appearance associated with PCOS and
                  helps rule out other structural causes of irregular cycles.
                </li>
                <li>
                  <strong>Blood sugar and insulin assessment.</strong> Given the
                  strong link between PCOS and insulin resistance, blood
                  sugar-related testing is often included as part of a complete
                  evaluation.
                </li>
                <li>
                  <strong>A combined diagnostic picture, not isolated
                  results.</strong> All findings are considered together, since
                  a diagnosis of one condition does not rule out the other —
                  both are actively screened for as part of the same evaluation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches for PCOS
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Lifestyle-based management.</strong> Structured
                  dietary changes and regular physical activity are
                  foundational, particularly because even modest weight
                  reduction can meaningfully improve ovulation and hormonal
                  balance in PCOS.
                </li>
                <li>
                  <strong>Menstrual cycle regulation.</strong> Hormonal
                  treatment is commonly used to regulate cycles, reduce
                  androgen-related symptoms like acne and excess hair growth,
                  and protect the uterine lining over the long term.
                </li>
                <li>
                  <strong>Fertility-focused treatment when trying to
                  conceive.</strong> For women with PCOS trying to become
                  pregnant, ovulation induction and monitoring are used to
                  support conception, tailored to individual response.
                </li>
                <li>
                  <strong>Management of insulin resistance.</strong> Where
                  relevant, this may be addressed alongside lifestyle changes to
                  reduce long-term metabolic risk.
                </li>
                <li>
                  <strong>Ongoing monitoring.</strong> Because PCOS is a
                  long-term hormonal condition, periodic follow-up helps track
                  symptoms, adjust treatment, and monitor associated health
                  risks over time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches for Thyroid Disorders
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hormone replacement for hypothyroidism.</strong> An
                  underactive thyroid is typically managed with daily thyroid
                  hormone replacement, adjusted based on regular blood test
                  monitoring until levels stabilise.
                </li>
                <li>
                  <strong>Medical management for hyperthyroidism.</strong> An
                  overactive thyroid is managed with medication to normalise
                  hormone levels, with the specific approach depending on the
                  underlying cause and severity.
                </li>
                <li>
                  <strong>Regular monitoring during treatment.</strong> Thyroid
                  levels are periodically rechecked to ensure the treatment dose
                  remains appropriate, particularly important during any future
                  pregnancy planning.
                </li>
                <li>
                  <strong>Close monitoring during pregnancy planning.</strong>{" "}
                  Because thyroid function directly affects fertility and
                  pregnancy outcomes, thyroid levels are carefully optimised
                  before and during pregnancy for women with a known thyroid
                  disorder.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why an Integrated Approach Matters When Both Conditions Are
                Present
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Treating only one condition often leaves symptoms
                  unresolved.</strong> A woman treated only for PCOS while an
                  underlying thyroid disorder goes unmanaged may see limited
                  improvement in weight, energy, or cycle regularity.
                </li>
                <li>
                  <strong>Medication interactions and timing matter.</strong>{" "}
                  Coordinated management ensures that treatments for both
                  conditions work together effectively rather than being managed
                  in isolation by different, uncoordinated providers.
                </li>
                <li>
                  <strong>Fertility planning requires both conditions to be
                  addressed.</strong> For women trying to conceive, both thyroid
                  function and ovulatory health from PCOS management need to be
                  optimised together for the best chance of a healthy pregnancy.
                </li>
                <li>
                  <strong>Long-term health monitoring is more efficient when
                  combined.</strong> Since both conditions require ongoing
                  follow-up, a single coordinated care plan reduces the burden
                  of multiple separate consultations and testing schedules.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs You Should Get Screened for Both Conditions
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular, heavy, or absent periods, especially when
                accompanied by weight changes</li>
                <li>Unexplained fatigue that persists despite adequate rest and
                sleep</li>
                <li>Difficulty losing weight despite consistent diet and exercise
                efforts</li>
                <li>Excess facial or body hair growth, or acne, particularly if
                it developed or worsened gradually</li>
                <li>Hair thinning or hair fall beyond what feels typical</li>
                <li>Difficulty conceiving after several months of trying,
                especially alongside any of the above symptoms</li>
                <li>A family history of thyroid disorders or PCOS, which
                increases personal risk and is a reasonable basis for proactive
                screening even without strong symptoms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Both Thyroid and PCOS Management
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Prioritise consistent sleep timing.</strong> Irregular
                  sleep patterns can worsen insulin resistance and hormonal
                  imbalance associated with both conditions.
                </li>
                <li>
                  <strong>Focus on balanced, lower-glycemic meals.</strong>{" "}
                  Diets that avoid sharp blood sugar spikes support insulin
                  sensitivity, which benefits PCOS management in particular.
                </li>
                <li>
                  <strong>Include regular moderate physical activity.</strong>{" "}
                  Consistent movement, rather than occasional intense exercise,
                  tends to support hormonal balance more reliably over time.
                </li>
                <li>
                  <strong>Avoid crash diets or extreme calorie
                  restriction.</strong> These can place additional stress on the
                  thyroid and disrupt hormonal regulation rather than improving
                  it.
                </li>
                <li>
                  <strong>Manage stress proactively.</strong> Chronic stress
                  affects both thyroid function and ovarian hormone balance,
                  making stress management a genuinely relevant part of
                  treatment, not just a general wellness tip.
                </li>
                <li>
                  <strong>Stay consistent with follow-up testing.</strong> Since
                  both conditions are managed rather than cured, regular
                  monitoring ensures the treatment plan continues to match the
                  body&apos;s current hormonal status.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist in
                Moradabad experienced in managing PCOS and thyroid-related
                hormonal concerns as part of comprehensive women&apos;s health
                and fertility care. Evaluations are thorough and combined where
                indicated, ensuring that overlapping conditions like PCOS and
                thyroid disorders are not missed or treated in isolation, with
                coordinated referral for broader endocrine management when
                required.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book a Consultation for Combined Hormonal Evaluation
              </h2>

              <p className="mb-4 text-gray-700">
                If you&apos;re dealing with irregular periods, unexplained
                weight changes, fatigue, or fertility concerns, an accurate
                evaluation for both PCOS and thyroid function provides clarity
                and a treatment plan that addresses the full picture.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Hormonal Health Specialist (MBBS, MS)
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