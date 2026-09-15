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

export default function SemenAnalysisTest() {
  const faqs = [
    {
      q: "Is semen analysis painful or invasive?",
      a: "No, it is a simple, non-invasive test involving a private sample collection with no discomfort involved.",
    },
    {
      q: "How long does it take to get semen analysis results?",
      a: "AI-powered analysis significantly speeds up processing, with results typically available faster than traditional manual methods.",
    },
    {
      q: "Do both partners need testing, or just the woman?",
      a: "Both partners should be evaluated, since male factors contribute to a significant share of fertility challenges.",
    },
    {
      q: "What if my first semen analysis result is abnormal?",
      a: "A repeat test is usually recommended first, since results can naturally vary between samples before further evaluation is pursued.",
    },
    {
      q: "Can lifestyle changes actually improve semen analysis results?",
      a: "Yes, factors like smoking, alcohol, heat exposure, and weight can affect sperm quality, and addressing these can lead to measurable improvement over time.",
    },
    {
      q: "Does a low sperm count mean I can't have biological children?",
      a: "Not necessarily — many men with reduced counts still conceive naturally or with treatments such as IUI or IVF, depending on the overall fertility picture.",
    },
    {
      q: "How is AI-powered semen analysis different from a standard test?",
      a: "It offers more consistent, detailed measurement by analysing a larger sample size and reducing variability compared to manual assessment.",
    },
    {
      q: "What is sperm DNA fragmentation testing, and do I need it?",
      a: "It is an advanced test evaluating the genetic integrity of sperm, sometimes recommended when standard parameters are normal but unexplained fertility difficulty persists.",
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
                Semen Analysis Test Doctor in Moradabad: What the Test Measures
                and Why It&apos;s the First Step
              </h1>

              <p className="mb-4 text-gray-700">
                When a couple is facing difficulty conceiving, attention often
                goes first to the female partner — but male factors contribute
                to roughly half of all fertility challenges. A semen analysis is
                one of the simplest, fastest, and most informative first tests
                in any fertility evaluation, and yet it is frequently delayed or
                skipped altogether, often out of hesitation or a lack of
                understanding about what it actually involves.
              </p>

              <p className="text-gray-700">
                This guide explains what a semen analysis measures, why
                AI-powered testing has improved its accuracy, how to prepare,
                and what happens after the results come in.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Male factors contribute to a significant proportion of
                  couples&apos; fertility difficulties, making semen analysis a
                  standard, essential first step alongside female fertility
                  evaluation
                </li>
                <li>
                  A semen analysis measures multiple parameters — count,
                  motility, morphology, and more — not just a single number
                </li>
                <li>
                  AI-powered semen analysis improves accuracy and consistency
                  compared to traditional manual assessment methods
                </li>
                <li>
                  Results should always be interpreted by a fertility
                  specialist, since a single abnormal parameter does not
                  automatically mean infertility
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Semen Analysis Matters in Fertility Evaluation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Male factors are involved in a large share of
                  fertility cases.</strong> Research consistently shows male
                  fertility factors contribute to a substantial proportion of
                  couples&apos; difficulty conceiving, either alone or combined
                  with female factors, making it essential to evaluate both
                  partners rather than only one.
                </li>
                <li>
                  <strong>It is quick, non-invasive, and highly
                  informative.</strong> Compared to many other fertility
                  investigations, a semen analysis is simple to perform and
                  provides a wealth of diagnostic information from a single
                  sample.
                </li>
                <li>
                  <strong>It helps direct the entire fertility treatment
                  plan.</strong> Whether a couple needs natural conception
                  guidance, medical treatment, or assisted reproductive
                  techniques like IUI or IVF often depends significantly on
                  semen analysis findings.
                </li>
                <li>
                  <strong>Early testing prevents delayed diagnosis.</strong>{" "}
                  Couples sometimes spend months or years focused solely on
                  female fertility factors when a male factor was present all
                  along — early, simultaneous testing of both partners avoids
                  this delay.
                </li>
                <li>
                  <strong>It can reveal broader health information too.</strong>{" "}
                  Semen quality can sometimes reflect underlying health issues
                  such as hormonal imbalance or lifestyle factors, giving useful
                  information beyond fertility alone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Semen Analysis Actually Measures
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Sperm count (concentration).</strong> This measures
                  the number of sperm present per millilitre of semen, one of
                  the most fundamental fertility parameters assessed.
                </li>
                <li>
                  <strong>Sperm motility.</strong> This evaluates the percentage
                  of sperm that are moving, and importantly, how effectively
                  they move, since sperm need strong, forward movement to reach
                  and fertilise an egg.
                </li>
                <li>
                  <strong>Sperm morphology.</strong> This assesses the shape and
                  structure of sperm, as abnormal shapes can affect the ability
                  to fertilise an egg even when count and motility are normal.
                </li>
                <li>
                  <strong>Semen volume.</strong> The total volume of the sample
                  is measured, as very low or very high volume can affect
                  overall sperm delivery and concentration.
                </li>
                <li>
                  <strong>Semen pH and liquefaction time.</strong> These reflect
                  the chemical environment of the semen, which can affect sperm
                  survival and function.
                </li>
                <li>
                  <strong>White blood cell presence.</strong> Elevated white
                  blood cells in semen can indicate an underlying infection or
                  inflammation that may be affecting fertility.
                </li>
                <li>
                  <strong>Sperm DNA fragmentation (when tested).</strong> This
                  advanced test evaluates the genetic integrity of sperm DNA,
                  which can affect fertilisation success and pregnancy outcomes
                  even when standard parameters appear normal.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How AI-Powered Semen Analysis Improves Accuracy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Reduces variability between assessments.</strong>{" "}
                  Traditional manual semen analysis can vary somewhat between
                  different technicians and even between repeat assessments by
                  the same person; AI-assisted analysis provides more consistent,
                  standardised measurements.
                </li>
                <li>
                  <strong>Analyses a larger sample size per test.</strong>{" "}
                  AI-powered systems can assess a greater number of sperm within
                  the sample compared to manual counting, improving the
                  statistical reliability of the results.
                </li>
                <li>
                  <strong>Detects subtle motility and morphology
                  patterns.</strong> Advanced imaging can pick up on movement
                  patterns and structural details that may be harder to
                  consistently identify through manual microscopic review alone.
                </li>
                <li>
                  <strong>Speeds up result turnaround.</strong> Automated
                  analysis allows for faster, more efficient processing of
                  results, meaning couples don&apos;t have to wait as long for
                  actionable information.
                </li>
                <li>
                  <strong>Supports more precise treatment planning.</strong>{" "}
                  More detailed, accurate data allows the fertility team to make
                  more informed recommendations about the appropriate next steps
                  in treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for a Semen Analysis Test
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Abstain from ejaculation for 2 to 5 days
                  beforehand.</strong> This standard preparation window helps
                  ensure an accurate, representative sample — both too short and
                  too long an abstinence period can affect results.
                </li>
                <li>
                  <strong>Avoid alcohol and excessive caffeine in the days
                  leading up to the test.</strong> These can temporarily affect
                  sperm quality and are best minimised before testing for the
                  most accurate baseline result.
                </li>
                <li>
                  <strong>Inform the doctor of any recent illness or
                  fever.</strong> A recent high fever can temporarily reduce
                  sperm quality for several weeks afterward, and testing during
                  or shortly after illness may not reflect a true baseline.
                </li>
                <li>
                  <strong>Mention any current medications or
                  supplements.</strong> Certain medications can affect semen
                  parameters, and disclosing this helps the doctor interpret
                  results accurately.
                </li>
                <li>
                  <strong>Follow the clinic&apos;s specific sample collection
                  instructions.</strong> Proper collection method and timely
                  delivery to the lab are important for result accuracy, and the
                  clinic team provides clear guidance for this.
                </li>
                <li>
                  <strong>Avoid testing during a period of unusual stress or
                  major lifestyle disruption if possible.</strong> While not
                  always avoidable, significant recent stress or disrupted
                  routine can sometimes temporarily affect results, worth
                  mentioning to the doctor if relevant.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding What Your Results Mean
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A single abnormal parameter does not mean
                  infertility.</strong> Semen analysis results exist on a
                  spectrum, and many men with one or two parameters outside the
                  typical reference range still conceive naturally or with minor
                  intervention.
                </li>
                <li>
                  <strong>Results can vary between samples.</strong> Because
                  sperm production is a continuous process affected by many
                  factors, semen analysis results can vary somewhat from one
                  test to another, which is why abnormal results are often
                  confirmed with a repeat test.
                </li>
                <li>
                  <strong>Context matters as much as numbers.</strong> A
                  fertility specialist interprets results alongside the
                  couple&apos;s full history, the female partner&apos;s
                  fertility evaluation, and any relevant lifestyle or medical
                  factors — not the semen analysis report in isolation.
                </li>
                <li>
                  <strong>Some findings point toward a specific, treatable
                  cause.</strong> Certain patterns in semen analysis results can
                  point toward hormonal imbalance, infection, or other
                  identifiable and often treatable causes.
                </li>
                <li>
                  <strong>Results guide, rather than dictate, the treatment
                  path.</strong> Even significantly abnormal results
                  don&apos;t rule out parenthood; they simply help determine
                  which fertility treatment approach is most likely to succeed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens After an Abnormal Semen Analysis Result
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A repeat test is often recommended first.</strong>{" "}
                  Given natural variability, a second sample a few weeks later
                  helps confirm whether an abnormal finding is consistent or was
                  an isolated result.
                </li>
                <li>
                  <strong>Further evaluation may be recommended.</strong> This
                  can include hormonal blood tests, a physical examination, or
                  additional specialised testing depending on the specific
                  abnormality found.
                </li>
                <li>
                  <strong>Lifestyle factors are reviewed.</strong> Smoking,
                  alcohol use, excessive heat exposure, certain medications, and
                  weight can all affect semen quality, and addressing these is
                  often a meaningful first step.
                </li>
                <li>
                  <strong>Treatment is tailored to the specific finding.</strong>{" "}
                  Depending on the cause identified, treatment can range from
                  lifestyle modification and medical management to assisted
                  reproductive techniques like IUI or IVF, sometimes combined
                  with advanced sperm selection techniques.
                </li>
                <li>
                  <strong>Couples are guided through options together.</strong>{" "}
                  Since fertility treatment involves both partners, findings
                  from the semen analysis are discussed as part of a combined
                  treatment plan rather than in isolation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Semen Analysis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;If a man has fathered a child
                  before, his fertility can&apos;t be a current issue.&quot;{" "}
                  <strong>Fact:</strong> Sperm quality can change over time due
                  to age, health conditions, or lifestyle factors, so past
                  fertility doesn&apos;t guarantee current fertility.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;A low sperm count always means
                  IVF is required.&quot;{" "}
                  <strong>Fact:</strong> Many cases of mildly reduced count or
                  motility can still achieve pregnancy through simpler
                  treatments or even naturally, depending on the overall
                  picture.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Semen analysis is embarrassing
                  and best avoided.&quot;{" "}
                  <strong>Fact:</strong> It is a routine, private, and
                  clinically essential part of fertility evaluation, handled
                  with full professionalism and confidentiality.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;One test result is the final
                  word on fertility.&quot;{" "}
                  <strong>Fact:</strong> Results can vary between samples, which
                  is why abnormal findings are typically confirmed with repeat
                  testing before conclusions are drawn.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Only significantly abnormal
                  results matter.&quot;{" "}
                  <strong>Fact:</strong> Even parameters within a borderline
                  range can be relevant when considered alongside the
                  couple&apos;s overall fertility picture.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Age doesn&apos;t affect male
                  fertility the way it affects female fertility.&quot;{" "}
                  <strong>Fact:</strong> While the effect is more gradual, sperm
                  quality does show some decline with advancing age and is a
                  relevant factor in fertility evaluation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Schedule a Semen Analysis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  After 12 months of trying to conceive without success, the
                  standard general guideline for couples where the female
                  partner is under 35
                </li>
                <li>
                  After 6 months of trying, if the female partner is 35 or
                  older, since evaluation is generally recommended sooner given
                  the added consideration of maternal age
                </li>
                <li>
                  Immediately, regardless of trying duration, if there is a
                  known risk factor such as a history of mumps after puberty,
                  undescended testicle, previous groin or pelvic surgery, or
                  significant exposure to heat or toxins through occupation
                </li>
                <li>
                  Before starting any fertility treatment, so that both
                  partners&apos; factors are understood from the outset rather
                  than discovered midway through a treatment plan
                </li>
                <li>
                  As part of a general health check, for men who simply want a
                  baseline understanding of their reproductive health, even
                  without an active plan to conceive immediately
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri&apos;s fertility and IVF practice in
                Moradabad is equipped with AI-powered semen analysis and DNA
                integrity testing as part of a comprehensive approach to couple
                fertility evaluation. Male and female fertility factors are
                assessed together from the outset, ensuring couples receive a
                complete, accurate picture before any treatment path is
                recommended.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Fertility Evaluation Today
              </h2>

              <p className="mb-4 text-gray-700">
                Whether you&apos;re just starting your fertility journey or have
                faced unexplained difficulty conceiving, a semen analysis is a
                quick, essential first step toward a clear diagnosis and the
                right treatment plan.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Fertility Specialist (MBBS, MS)
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