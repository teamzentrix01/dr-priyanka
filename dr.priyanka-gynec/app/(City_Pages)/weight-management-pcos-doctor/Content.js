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

export default function PcosWeightManagement() {
  const faqs = [
    {
      q: "Why is it so much harder to lose weight with PCOS?",
      a: "Insulin resistance and hormonal imbalance make the body store fat more easily and burn it more slowly, unlike typical calorie-based weight gain.",
    },
    {
      q: "How much weight loss is actually needed to see improvement?",
      a: "Often just 5–10% of body weight is enough to meaningfully improve ovulation and hormonal symptoms.",
    },
    {
      q: "Do I need medication to lose weight with PCOS?",
      a: "Not always — many women improve significantly with targeted lifestyle changes, though medical treatment is used when insulin resistance or hormonal imbalance is significant.",
    },
    {
      q: "Will normal diet plans work for PCOS weight loss?",
      a: "Generic diet plans often underperform because they don't account for insulin resistance; a PCOS-specific approach usually works better.",
    },
    {
      q: "Can thyroid problems be adding to my PCOS weight struggle?",
      a: "Yes, since thyroid disorders commonly co-occur with PCOS and independently affect weight, which is why thyroid testing is part of the evaluation.",
    },
    {
      q: "How soon can I expect to see results with a medically guided plan?",
      a: "Metabolic improvements often appear on blood tests before major weight change is visible, though timelines vary by individual.",
    },
    {
      q: "Is exercise really necessary, or is diet enough?",
      a: "Both play a role — specific types of exercise particularly improve insulin sensitivity, making it a meaningful part of PCOS management alongside diet.",
    },
    {
      q: "Can PCOS weight management improve my chances of getting pregnant?",
      a: "Yes, since even modest weight loss can restore more regular ovulation, directly supporting fertility efforts.",
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
                Weight Management PCOS Doctor in Moradabad: Why Standard Diets
                Often Don&apos;t Work
              </h1>

              <p className="mb-4 text-gray-700">
                Many women with PCOS share the same frustrating experience:
                strict dieting and regular exercise, yet the scale barely moves
                — or weight comes back quickly the moment routines relax. This
                is not a lack of discipline. PCOS-related weight gain has a
                distinct hormonal and metabolic basis that standard
                calorie-counting advice frequently fails to address.
              </p>

              <p className="text-gray-700">
                This guide explains why PCOS makes weight management genuinely
                harder, what a medically guided approach actually involves, and
                how a specialist doctor builds a plan that works with the
                condition rather than against it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS-related weight gain is driven largely by insulin
                  resistance, not simply calorie intake, which is why generic
                  diets often underperform
                </li>
                <li>
                  Weight gain and PCOS symptoms often reinforce each other in a
                  cycle — excess weight worsens hormonal imbalance, and
                  hormonal imbalance makes weight loss harder
                </li>
                <li>
                  Even a modest, medically guided weight reduction of 5–10% can
                  meaningfully improve ovulation, cycle regularity, and other
                  PCOS symptoms
                </li>
                <li>
                  Effective PCOS weight management typically combines medical
                  evaluation, targeted lifestyle strategy, and, where
                  appropriate, medical treatment — not diet alone
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why PCOS Makes Weight Loss Different
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Insulin resistance is the core driver in most
                  cases.</strong> A large proportion of women with PCOS have
                  some degree of insulin resistance, meaning the body needs to
                  produce more insulin to manage blood sugar — and high insulin
                  levels directly promote fat storage, particularly around the
                  abdomen.
                </li>
                <li>
                  <strong>Hormonal imbalance affects hunger and
                  metabolism.</strong> Elevated androgen levels and disrupted
                  hormonal signalling in PCOS can affect appetite regulation and
                  how efficiently the body burns energy, making standard
                  calorie-deficit approaches less predictable.
                </li>
                <li>
                  <strong>Weight tends to concentrate around the
                  abdomen.</strong> PCOS-related weight gain often follows a
                  specific pattern — central, abdominal weight gain — which is
                  itself linked to higher insulin resistance and metabolic risk.
                </li>
                <li>
                  <strong>The condition creates a self-reinforcing
                  cycle.</strong> Excess weight worsens insulin resistance,
                  which worsens hormonal imbalance, which in turn makes further
                  weight gain more likely and weight loss more difficult —
                  breaking this cycle requires addressing the hormonal root
                  cause, not just intake and output.
                </li>
                <li>
                  <strong>Generic diet plans don&apos;t account for the
                  metabolic difference.</strong> A diet plan built for someone
                  without insulin resistance often does not produce the same
                  results for a woman with PCOS, which is frequently mistaken
                  for &quot;not trying hard enough.&quot;
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Weight–PCOS Symptom Cycle Explained
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Excess weight worsens androgen levels.</strong> Higher
                  body fat, particularly abdominal fat, is associated with
                  increased androgen production, which can worsen acne, excess
                  hair growth, and cycle irregularity.
                </li>
                <li>
                  <strong>Worsening hormonal imbalance disrupts ovulation
                  further.</strong> As androgen levels rise, ovulation becomes
                  even less predictable, compounding fertility difficulties for
                  women trying to conceive.
                </li>
                <li>
                  <strong>Insulin resistance deepens over time if
                  unaddressed.</strong> Left unmanaged, the ongoing cycle of
                  weight gain and insulin resistance increases long-term risk of
                  prediabetes and type 2 diabetes.
                </li>
                <li>
                  <strong>Breaking the cycle at any point helps the whole
                  system.</strong> Improving insulin sensitivity through a
                  medically guided plan can improve weight, hormonal balance,
                  and cycle regularity together, since these factors are
                  interconnected rather than separate problems.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a PCOS-Focused Weight Management Evaluation Involves
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A detailed metabolic and hormonal history.</strong>{" "}
                  The doctor reviews weight history, diet and activity patterns,
                  menstrual cycle history, and any previous attempts at weight
                  management to understand what has and hasn&apos;t worked.
                </li>
                <li>
                  <strong>Blood tests for insulin resistance and related
                  markers.</strong> Fasting blood sugar and insulin levels,
                  along with a broader metabolic panel, help quantify the degree
                  of insulin resistance present.
                </li>
                <li>
                  <strong>Hormonal panel.</strong> Androgen and other
                  reproductive hormone levels are assessed to confirm the PCOS
                  diagnosis and understand its specific hormonal profile.
                </li>
                <li>
                  <strong>Thyroid function testing.</strong> Since thyroid
                  disorders can compound weight difficulties and often co-occur
                  with PCOS, thyroid function is checked as a standard part of
                  the evaluation.
                </li>
                <li>
                  <strong>Body composition assessment.</strong> Beyond the
                  number on the scale, understanding fat distribution and body
                  composition gives a more accurate picture of metabolic health
                  and progress over time.
                </li>
                <li>
                  <strong>A personalised plan based on findings.</strong>{" "}
                  Treatment is built around the specific hormonal and metabolic
                  picture identified, rather than applying the same generic
                  advice to every patient.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medical Approaches to PCOS Weight Management
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Improving insulin sensitivity.</strong> Where insulin
                  resistance is significant, medical management aimed at
                  improving insulin sensitivity is often a foundational part of
                  treatment, working alongside lifestyle changes rather than
                  replacing them.
                </li>
                <li>
                  <strong>Hormonal regulation.</strong> Managing androgen levels
                  and cycle regularity can indirectly support weight management
                  by reducing some of the hormonal drivers of weight gain.
                </li>
                <li>
                  <strong>Structured, PCOS-specific dietary guidance.</strong>{" "}
                  Rather than generic calorie restriction, dietary strategies
                  for PCOS typically focus on stabilising blood sugar through
                  balanced meal composition and timing.
                </li>
                <li>
                  <strong>Exercise strategy tailored to insulin
                  sensitivity.</strong> Certain types and patterns of physical
                  activity are particularly effective for improving insulin
                  sensitivity in PCOS, and a specialist can guide which approach
                  fits an individual&apos;s starting point.
                </li>
                <li>
                  <strong>Monitoring and adjustment over time.</strong> Because
                  PCOS is a long-term hormonal condition, weight management is
                  monitored and adjusted through follow-up visits rather than
                  treated as a one-time programme.
                </li>
                <li>
                  <strong>Addressing co-existing conditions.</strong> When
                  thyroid dysfunction or other contributing factors are
                  identified, these are treated in parallel, since they can
                  otherwise undermine weight management efforts on their own.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Even Modest Weight Loss Matters in PCOS
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A 5–10% reduction can restore ovulation in many
                  women.</strong> This modest, achievable target is often enough
                  to meaningfully improve cycle regularity and fertility
                  outcomes, without requiring dramatic transformation.
                </li>
                <li>
                  <strong>Improved insulin sensitivity follows even small
                  changes.</strong> Blood sugar and insulin markers frequently
                  improve well before significant weight loss is visible on the
                  scale, which is an important early sign of progress.
                </li>
                <li>
                  <strong>Symptom improvement often precedes major weight
                  change.</strong> Many women notice improvements in energy,
                  skin, and cycle regularity before substantial weight loss
                  occurs, since these improvements are linked to metabolic
                  changes happening beneath the surface.
                </li>
                <li>
                  <strong>Sustainable, gradual progress outperforms rapid
                  extreme measures.</strong> Crash diets or extreme restriction
                  tend to worsen hormonal imbalance in PCOS rather than help it,
                  making steady, medically guided progress the more effective
                  long-term strategy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Weight Management Mistakes Women with PCOS Make
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Following generic weight loss advice not designed for
                  insulin resistance.</strong> Standard &quot;eat less, move
                  more&quot; advice ignores the specific metabolic challenges of
                  PCOS and often leads to frustration and abandoned effort.
                </li>
                <li>
                  <strong>Relying on extreme calorie restriction.</strong> Very
                  low-calorie diets can increase stress hormones and worsen
                  insulin resistance, counterproductive to the actual goal.
                </li>
                <li>
                  <strong>Skipping medical evaluation and going straight to
                  lifestyle changes alone.</strong> Without understanding the
                  specific hormonal and metabolic picture, lifestyle changes
                  alone may not address the root driver of the weight gain.
                </li>
                <li>
                  <strong>Expecting rapid results and abandoning a plan too
                  early.</strong> Because PCOS-related weight loss often
                  progresses more slowly than for someone without the condition,
                  unrealistic timelines lead many women to give up on approaches
                  that would have worked with more time.
                </li>
                <li>
                  <strong>Ignoring thyroid and other co-existing
                  conditions.</strong> Focusing solely on PCOS while an
                  undiagnosed thyroid disorder continues to affect metabolism
                  can significantly limit progress.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Daily Habits That Support PCOS-Friendly Weight Management
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Eat protein and fibre with every meal.</strong>{" "}
                  Pairing carbohydrates with protein and fibre slows blood sugar
                  spikes, which directly reduces the insulin surges that drive
                  PCOS-related fat storage.
                </li>
                <li>
                  <strong>Prioritise strength training alongside
                  cardio.</strong> Building muscle mass improves how efficiently
                  the body uses insulin, making resistance exercise particularly
                  valuable for PCOS, not just cardio-based activity.
                </li>
                <li>
                  <strong>Keep meal timing consistent.</strong> Regular meal
                  timing helps stabilise blood sugar and insulin patterns
                  throughout the day, rather than large gaps followed by large
                  meals.
                </li>
                <li>
                  <strong>Prioritise 7–8 hours of consistent sleep.</strong>{" "}
                  Poor sleep directly worsens insulin resistance and
                  appetite-regulating hormones, undermining even a well-designed
                  diet and exercise plan.
                </li>
                <li>
                  <strong>Track non-scale progress markers.</strong> Energy
                  levels, skin clarity, cycle regularity, and clothing fit often
                  improve before the scale reflects major change, and are worth
                  tracking alongside weight itself.
                </li>
                <li>
                  <strong>Stay consistent rather than perfect.</strong>{" "}
                  Sustainable, moderate consistency over months tends to
                  outperform short bursts of extreme effort followed by
                  burnout, particularly given how PCOS affects the pace of
                  visible progress.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Specialist Doctor&apos;s Involvement Makes a Real
                Difference
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Accurate identification of the underlying
                  drivers.</strong> Rather than guessing, a specialist
                  identifies exactly which hormonal and metabolic factors are
                  contributing to weight difficulty in each individual case.
                </li>
                <li>
                  <strong>A plan built around actual test results.</strong>{" "}
                  Blood work and hormonal panels replace generic assumptions
                  with an evidence-based, individualised strategy.
                </li>
                <li>
                  <strong>Coordinated management of related conditions.</strong>{" "}
                  Thyroid function, insulin resistance, and hormonal balance are
                  addressed together rather than in isolated, uncoordinated
                  efforts.
                </li>
                <li>
                  <strong>Realistic goal-setting and monitoring.</strong> A
                  specialist sets achievable milestones and tracks progress
                  through follow-up testing, rather than relying on the scale
                  alone as the only measure of success.
                </li>
                <li>
                  <strong>Support that adapts as things change.</strong> As
                  weight, hormone levels, and symptoms shift over time, the
                  treatment plan is adjusted accordingly, rather than remaining
                  static.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist in
                Moradabad with dedicated experience managing PCOS and its
                associated weight and metabolic challenges as part of
                comprehensive women&apos;s hormonal health care. Evaluations
                focus on identifying the specific hormonal and metabolic drivers
                behind each patient&apos;s weight difficulty, building a
                realistic, medically guided plan rather than offering
                one-size-fits-all advice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book a PCOS Weight Management Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                If diet and exercise alone haven&apos;t produced results, a
                medically guided evaluation can identify exactly what&apos;s
                driving your PCOS-related weight difficulty and build a plan
                that actually works with your body&apos;s hormonal profile.
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