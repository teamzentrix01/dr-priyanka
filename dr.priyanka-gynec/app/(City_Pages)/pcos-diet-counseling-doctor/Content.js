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

export default function PcosDietCounseling() {
  const faqs = [
    {
      q: "Is PCOS diet counseling the same as seeing a general dietician?",
      a: "Not quite — it is guided by hormonal and metabolic test results and coordinated with overall PCOS medical management, rather than being a standalone nutrition service.",
    },
    {
      q: "Do I need blood tests before starting diet counseling?",
      a: "Yes, relevant hormonal and metabolic testing helps ensure the dietary approach targets your specific imbalance accurately.",
    },
    {
      q: "Will I be given a strict diet chart to follow exactly?",
      a: "Typically no — guidance is usually framed as flexible principles and food structures rather than a single rigid meal plan.",
    },
    {
      q: "How soon can I expect to see results from dietary changes?",
      a: "Metabolic improvements often show on follow-up blood tests before major visible changes occur, though timelines vary by individual.",
    },
    {
      q: "Can PCOS diet counseling help even if I don't need to lose weight?",
      a: "Yes, dietary changes support hormonal balance and symptom management independent of weight loss goals.",
    },
    {
      q: "Is this counseling suitable for vegetarian or regional Indian diets?",
      a: "Yes, recommendations are built around a patient's actual food preferences and regional eating patterns rather than an imported, generic meal plan.",
    },
    {
      q: "How often will I need follow-up sessions?",
      a: "This varies, but an early follow-up within a few weeks and periodic reviews every few months is a common approach.",
    },
    {
      q: "Can diet counseling help with PCOS-related fertility concerns?",
      a: "Yes, improved blood sugar stability through diet can support more regular ovulation alongside any fertility-focused treatment.",
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
                PCOS Diet Counseling Doctor in Moradabad: What a Nutrition
                Consultation Actually Involves
              </h1>

              <p className="mb-4 text-gray-700">
                Search &quot;PCOS diet&quot; and you will find hundreds of
                conflicting meal plans, restrictive food lists, and
                one-size-fits-all recommendations — most of which ignore the
                fact that PCOS affects every woman&apos;s body differently.
                Genuine PCOS diet counseling is not about handing over a
                printed diet chart; it is a structured, medical process that
                starts with understanding an individual&apos;s specific hormonal
                and metabolic profile before any food recommendation is made.
              </p>

              <p className="text-gray-700">
                This guide explains what proper PCOS diet counseling looks like,
                the principles behind it, and how it differs from generic diet
                advice found online.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Effective PCOS diet counseling is personalised to an
                  individual&apos;s hormonal profile, insulin sensitivity, and
                  lifestyle — not based on a single universal diet chart
                </li>
                <li>
                  The core nutritional goal in PCOS is stabilising blood sugar
                  and insulin response, which in turn supports hormonal balance
                </li>
                <li>
                  Diet counseling works best as part of a broader medical
                  evaluation, not as a standalone service disconnected from
                  hormonal testing
                </li>
                <li>
                  Sustainable, moderate dietary changes consistently outperform
                  restrictive or extreme diets for long-term PCOS symptom
                  management
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why PCOS Needs Specific Diet Counseling, Not Generic Advice
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Insulin sensitivity varies significantly between
                  individuals with PCOS.</strong> Two women with the same PCOS
                  diagnosis can have very different degrees of insulin
                  resistance, meaning their dietary needs are genuinely
                  different, not interchangeable.
                </li>
                <li>
                  <strong>Generic &quot;healthy eating&quot; advice often misses
                  the specific mechanism at play.</strong> General nutrition
                  advice focuses on overall health, while PCOS-specific
                  counseling targets blood sugar stability and hormonal balance
                  directly.
                </li>
                <li>
                  <strong>Cultural and regional food patterns need to be worked
                  into the plan.</strong> Diet counseling that ignores familiar
                  regional foods and eating patterns is far less likely to be
                  followed consistently, which is why a locally relevant
                  approach matters.
                </li>
                <li>
                  <strong>Co-existing conditions change dietary
                  priorities.</strong> A woman with PCOS and a thyroid disorder,
                  or PCOS alongside anaemia, needs a different nutritional
                  emphasis than a woman with PCOS alone.
                </li>
                <li>
                  <strong>Restrictive online diet plans often
                  backfire.</strong> Extremely low-calorie or highly restrictive
                  plans found online can worsen hormonal imbalance in PCOS
                  rather than help it, which proper counseling actively avoids.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During a PCOS Diet Counseling Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A review of current eating patterns.</strong> The
                  consultation begins by understanding what a typical day of
                  eating currently looks like, including meal timing, portion
                  patterns, and common food choices — not judging past habits,
                  but using them as a starting point.
                </li>
                <li>
                  <strong>Correlation with hormonal and metabolic test
                  results.</strong> Diet recommendations are built around actual
                  blood sugar, insulin, and hormonal findings rather than
                  assumptions, ensuring the plan targets the
                  individual&apos;s specific imbalance.
                </li>
                <li>
                  <strong>Identification of practical barriers.</strong> Work
                  schedules, family meal patterns, food preferences, and budget
                  considerations are discussed so that recommendations are
                  realistic and sustainable, not theoretical.
                </li>
                <li>
                  <strong>Education on the &quot;why,&quot; not just the
                  &quot;what.&quot;</strong> Understanding why certain food
                  patterns help — such as pairing carbohydrates with protein to
                  slow blood sugar spikes — helps patients make informed
                  choices independently, rather than rigidly following a chart
                  without understanding it.
                </li>
                <li>
                  <strong>A structured but flexible eating framework.</strong>{" "}
                  Rather than a fixed, unchangeable meal plan, guidance is
                  typically framed as principles and food-group structures that
                  can be adapted to daily variation in schedule and appetite.
                </li>
                <li>
                  <strong>Follow-up and adjustment.</strong> Diet counseling is
                  revisited at follow-up visits to adjust the approach based on
                  progress, test results, and any changes in symptoms or
                  lifestyle.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Core Nutritional Principles Used in PCOS Diet Counseling
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Prioritising low-glycemic-impact
                  carbohydrates.</strong> Choosing carbohydrate sources that
                  raise blood sugar more gradually helps reduce the insulin
                  spikes that drive PCOS-related weight gain and hormonal
                  imbalance.
                </li>
                <li>
                  <strong>Pairing carbohydrates with protein and healthy
                  fats.</strong> Combining food groups within a meal slows
                  digestion and blood sugar response compared to eating
                  carbohydrates alone.
                </li>
                <li>
                  <strong>Including adequate fibre at each meal.</strong>{" "}
                  Fibre-rich vegetables, whole grains, and legumes support both
                  blood sugar stability and digestive health, both relevant to
                  overall PCOS management.
                </li>
                <li>
                  <strong>Structuring regular meal timing.</strong> Consistent
                  meal spacing throughout the day helps avoid the blood sugar
                  swings that come from skipping meals and then overeating
                  later.
                </li>
                <li>
                  <strong>Moderating processed and high-sugar foods, without
                  total elimination.</strong> The goal is a sustainable
                  reduction in foods that spike blood sugar sharply, rather than
                  an all-or-nothing restrictive approach that is difficult to
                  maintain long-term.
                </li>
                <li>
                  <strong>Adequate protein intake throughout the day.</strong>{" "}
                  Sufficient protein supports satiety, blood sugar stability,
                  and muscle maintenance, particularly important alongside any
                  physical activity plan.
                </li>
                <li>
                  <strong>Attention to micronutrients relevant to PCOS.</strong>{" "}
                  Certain vitamins and minerals are commonly assessed and
                  addressed as part of a complete nutritional plan, based on
                  individual blood test findings.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common PCOS Diet Myths Addressed During Counseling
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;You must completely cut out all
                  carbohydrates.&quot;{" "}
                  <strong>Fact:</strong> The focus is on carbohydrate quality
                  and pairing, not elimination — completely removing
                  carbohydrates is neither necessary nor sustainable for most
                  women.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Any diet that worked for a
                  friend with PCOS will work the same way for me.&quot;{" "}
                  <strong>Fact:</strong> Individual hormonal and metabolic
                  profiles vary significantly, which is exactly why personalised
                  counseling outperforms borrowed diet plans.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Skipping meals helps with weight
                  loss in PCOS.&quot;{" "}
                  <strong>Fact:</strong> Skipping meals often worsens blood
                  sugar control and can increase overeating later, working
                  against PCOS management goals.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Only weight loss matters, not
                  what you actually eat.&quot;{" "}
                  <strong>Fact:</strong> Food quality and blood sugar impact
                  matter independently of calorie count, since insulin response
                  — not calories alone — drives many PCOS symptoms.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Supplements can replace proper
                  diet counseling.&quot;{" "}
                  <strong>Fact:</strong> While certain supplements may be
                  recommended based on test results, they support rather than
                  replace a structured dietary approach.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Once symptoms improve, diet
                  changes can be dropped entirely.&quot;{" "}
                  <strong>Fact:</strong> PCOS is a long-term hormonal condition,
                  and sustained dietary habits typically need to continue in
                  some form to maintain improvements.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Diet Counseling Fits Into Overall PCOS Management
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>It works alongside medical treatment, not instead of
                  it.</strong> For many women, dietary changes support and
                  enhance the effectiveness of any hormonal or metabolic
                  treatment being used, rather than serving as a standalone
                  solution.
                </li>
                <li>
                  <strong>It supports fertility efforts when trying to
                  conceive.</strong> Blood sugar stability achieved through diet
                  can support more regular ovulation, complementing any
                  fertility-focused treatment.
                </li>
                <li>
                  <strong>It is monitored through objective measures.</strong>{" "}
                  Rather than relying only on how someone feels, follow-up blood
                  tests help confirm whether dietary changes are producing the
                  intended metabolic improvements.
                </li>
                <li>
                  <strong>It adapts as life circumstances change.</strong>{" "}
                  Pregnancy planning, changes in activity level, or new health
                  findings all warrant a revisit and adjustment of the dietary
                  approach.
                </li>
                <li>
                  <strong>It is most effective when paired with broader
                  lifestyle counseling.</strong> Sleep, stress management, and
                  physical activity are typically addressed alongside diet,
                  since all of these factors interact with PCOS hormonal balance
                  together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect From a Realistic PCOS Diet Counseling Timeline
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Initial consultation and baseline testing.</strong>{" "}
                  The first visit typically involves a detailed history, current
                  eating pattern review, and relevant blood tests if not already
                  done recently.
                </li>
                <li>
                  <strong>Early follow-up within a few weeks.</strong> An early
                  check-in allows adjustments to be made based on how the
                  initial recommendations are working in daily life, before too
                  much time passes.
                </li>
                <li>
                  <strong>Ongoing periodic reviews.</strong> Regular follow-up,
                  often every few months, tracks both symptom changes and
                  objective test markers to confirm the plan remains effective.
                </li>
                <li>
                  <strong>Long-term, gradually evolving guidance.</strong> As
                  blood sugar control and hormonal balance improve, dietary
                  recommendations are often relaxed or adjusted, reflecting
                  genuine, sustained progress rather than a rigid permanent
                  restriction.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions Worth Bringing to Your First Diet Counseling Session
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What does my current blood sugar and insulin picture
                  actually look like?</strong> Understanding your own numbers,
                  rather than generic ranges, helps you engage meaningfully with
                  the recommendations you&apos;re given.
                </li>
                <li>
                  <strong>Which of my current eating habits are already working
                  in my favour?</strong> A good counseling session highlights
                  what to keep, not just what to change, which makes the plan
                  feel less like starting from zero.
                </li>
                <li>
                  <strong>How should my plan change around travel, festivals,
                  or family gatherings?</strong> Practical guidance for
                  real-life exceptions is more useful than a plan that only
                  works in ideal, controlled conditions.
                </li>
                <li>
                  <strong>What early signs should I watch for that suggest the
                  plan is working?</strong> Knowing what to look for — energy,
                  skin, cycle regularity — helps you recognise progress before
                  major weight change is visible.
                </li>
                <li>
                  <strong>How does this plan need to adjust if I&apos;m also
                  planning a pregnancy?</strong> Since dietary priorities can
                  shift with fertility goals, raising this early avoids having
                  to restart the process later.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing a Doctor-Led Diet Counseling Approach Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Recommendations are grounded in actual test
                  results.</strong> Unlike generic diet plans, doctor-led
                  counseling is built around a patient&apos;s real hormonal and
                  metabolic data.
                </li>
                <li>
                  <strong>Coordination with broader treatment.</strong> A
                  doctor overseeing both diet counseling and any medical
                  treatment ensures the two work together rather than being
                  managed by disconnected providers.
                </li>
                <li>
                  <strong>Safe guidance for co-existing conditions.</strong>{" "}
                  Where thyroid disorders, anaemia, or other conditions are
                  present, diet recommendations are adjusted accordingly,
                  something a generic diet plan cannot account for.
                </li>
                <li>
                  <strong>Accountability through follow-up.</strong> Scheduled
                  follow-up visits provide structure and motivation that
                  self-directed dieting often lacks.
                </li>
                <li>
                  <strong>A sustainable, realistic approach over quick
                  fixes.</strong> A doctor-led approach prioritises long-term
                  hormonal health over short-term, unsustainable weight loss
                  tactics.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist in
                Moradabad offering PCOS diet counseling as part of a
                comprehensive, medically guided approach to hormonal health.
                Nutritional guidance is built around each patient&apos;s
                specific test results and lifestyle, ensuring recommendations
                are both effective and realistic to follow.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your PCOS Diet Counseling Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                If you&apos;ve tried generic diet advice without lasting
                results, a personalised, medically guided PCOS diet counseling
                consultation can identify what your specific hormonal profile
                actually needs.
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