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

export default function MenopauseManagement() {
  const faqs = [
    {
      q: "At what age does menopause typically occur?",
      a: "It commonly occurs in the late forties to early fifties, though the exact timing varies between individuals.",
    },
    {
      q: "How is menopause officially diagnosed?",
      a: "It is confirmed after 12 consecutive months without a menstrual period, often supported by symptom history.",
    },
    {
      q: "Is hormone replacement therapy safe?",
      a: "For many women it is safe and effective, but suitability depends on individual health history, which a specialist evaluation helps determine.",
    },
    {
      q: "Can menopause symptoms be managed without hormone therapy?",
      a: "Yes, non-hormonal medical options and lifestyle strategies can effectively manage many symptoms for women who prefer or need to avoid HRT.",
    },
    {
      q: "Why does bone health need special attention during menopause?",
      a: "Declining estrogen accelerates bone density loss, increasing osteoporosis risk, making proactive bone health management important.",
    },
    {
      q: "Is vaginal dryness a normal part of menopause?",
      a: "Yes, it is a common symptom caused by declining estrogen, and effective, comfortable treatment options are available.",
    },
    {
      q: "How long do menopausal symptoms typically last?",
      a: "This varies significantly between individuals; some women experience symptoms for a few years, while others notice effects for longer, which a specialist can help manage throughout.",
    },
    {
      q: "Should I see a doctor even if my symptoms feel manageable?",
      a: "Yes, since menopause also involves long-term health considerations like bone and cardiovascular health that benefit from proactive monitoring, regardless of symptom severity.",
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
                Menopause Management Doctor in Moradabad: Understanding and
                Managing This Life Stage
              </h1>

              <p className="mb-4 text-gray-700">
                Menopause is a natural biological transition, not a medical
                problem to be endured in silence. Yet many women navigate years
                of disruptive symptoms — hot flashes, mood changes, sleep
                disturbances, irregular periods — without seeking guidance,
                often assuming these changes simply have to be tolerated.
              </p>

              <p className="text-gray-700">
                This guide explains what happens during perimenopause and
                menopause, the symptoms to expect, and the treatment approaches
                available today.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Menopause is a gradual transition, not a single event —
                  perimenopause can begin years before periods stop completely,
                  often with its own distinct set of symptoms
                </li>
                <li>
                  Beyond symptom relief, menopause management addresses
                  important long-term health considerations, including bone
                  density and cardiovascular health
                </li>
                <li>
                  Treatment options range from hormone replacement therapy to
                  non-hormonal medical management and lifestyle strategies,
                  tailored to individual health history and symptom severity
                </li>
                <li>
                  A proper evaluation helps distinguish typical menopausal
                  changes from other conditions that can sometimes cause similar
                  symptoms
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding the Menopause Transition
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Perimenopause is the transitional phase leading up to
                  menopause.</strong> This stage, which can last several years,
                  is marked by fluctuating hormone levels and often the first
                  noticeable symptoms, even while periods are still occurring.
                </li>
                <li>
                  <strong>Menopause itself is defined by a specific
                  milestone.</strong> Menopause is officially confirmed after 12
                  consecutive months without a menstrual period, typically
                  occurring around the late forties to early fifties, though
                  timing varies between individuals.
                </li>
                <li>
                  <strong>Postmenopause refers to the years following this
                  milestone.</strong> During this stage, many symptoms may ease
                  over time, though certain long-term health considerations,
                  such as bone density, continue to need attention.
                </li>
                <li>
                  <strong>The transition is driven by declining ovarian hormone
                  production.</strong> As the ovaries gradually produce less
                  estrogen and progesterone, this hormonal shift underlies the
                  wide range of physical and emotional changes experienced
                  during this time.
                </li>
                <li>
                  <strong>Every woman&apos;s experience differs
                  significantly.</strong> Some women experience mild, manageable
                  symptoms, while others face more disruptive changes — there is
                  no single &quot;typical&quot; menopause experience, which is
                  exactly why personalised evaluation matters.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms During Perimenopause and Menopause
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Irregular periods.</strong> Cycles often become
                  unpredictable in timing and flow during perimenopause, before
                  stopping altogether at menopause.
                </li>
                <li>
                  <strong>Hot flashes and night sweats.</strong> Sudden
                  sensations of heat, often accompanied by sweating and a rapid
                  heartbeat, are among the most well-known and disruptive
                  menopausal symptoms.
                </li>
                <li>
                  <strong>Sleep disturbances.</strong> Difficulty falling or
                  staying asleep, sometimes linked directly to night sweats, is
                  a common and often underestimated symptom affecting overall
                  quality of life.
                </li>
                <li>
                  <strong>Mood changes.</strong> Irritability, anxiety, and low
                  mood can occur due to hormonal fluctuation, and are sometimes
                  compounded by poor sleep and other physical symptoms.
                </li>
                <li>
                  <strong>Vaginal dryness and discomfort.</strong> Declining
                  estrogen levels can lead to vaginal dryness, irritation, and
                  discomfort during intercourse, a symptom many women hesitate
                  to raise but which is very treatable.
                </li>
                <li>
                  <strong>Changes in libido.</strong> Shifts in sexual desire
                  are common during this transition and can stem from hormonal,
                  physical, and emotional factors together.
                </li>
                <li>
                  <strong>Weight changes and slower metabolism.</strong> Many
                  women notice changes in weight distribution and a slower
                  metabolism during this life stage, often independent of
                  changes in diet or activity.
                </li>
                <li>
                  <strong>Skin and hair changes.</strong> Reduced estrogen can
                  affect skin elasticity and hair thickness, changes that are a
                  normal part of this transition.
                </li>
                <li>
                  <strong>Joint aches and fatigue.</strong> Generalised joint
                  discomfort and fatigue are reported by many women during
                  perimenopause and menopause, sometimes overlooked as unrelated
                  to hormonal changes.
                </li>
                <li>
                  <strong>Difficulty concentrating or &quot;brain
                  fog&quot;.</strong> Some women notice temporary changes in
                  memory or concentration during this transition, which can be
                  genuinely disruptive to daily functioning.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Menopause Care Goes Beyond Symptom Relief
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Bone density declines more rapidly after
                  menopause.</strong> Estrogen plays a protective role in
                  maintaining bone density, and its decline accelerates bone
                  loss, increasing the risk of osteoporosis over time.
                </li>
                <li>
                  <strong>Cardiovascular risk factors change during this
                  transition.</strong> Estrogen has a protective effect on
                  cardiovascular health, and this changes as hormone levels
                  decline, making cardiovascular health monitoring more relevant
                  during and after menopause.
                </li>
                <li>
                  <strong>Urinary and pelvic floor changes can develop.</strong>{" "}
                  Declining estrogen can affect the tissues of the urinary tract
                  and pelvic floor, sometimes contributing to symptoms like
                  urinary urgency or mild incontinence.
                </li>
                <li>
                  <strong>Metabolic changes can affect long-term health.</strong>{" "}
                  Shifts in weight distribution and metabolism during menopause
                  are linked to changes in insulin sensitivity and metabolic
                  risk, worth addressing proactively.
                </li>
                <li>
                  <strong>Mental health deserves equal attention.</strong> The
                  emotional impact of this transition, compounded by physical
                  symptoms, is a legitimate part of menopause care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Menopause Is Evaluated
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A detailed symptom and menstrual history.</strong> The
                  doctor reviews cycle changes, symptom patterns, and their
                  impact on daily life to understand the stage and severity of
                  the transition.
                </li>
                <li>
                  <strong>Assessment of overall health history.</strong> Personal
                  and family history of conditions such as osteoporosis,
                  cardiovascular disease, or hormone-sensitive conditions helps
                  guide safe, individualised treatment planning.
                </li>
                <li>
                  <strong>Hormonal blood tests when relevant.</strong> While
                  menopause is often diagnosed based on symptoms and menstrual
                  history alone, blood tests can sometimes help clarify the
                  stage of transition or rule out other causes of symptoms.
                </li>
                <li>
                  <strong>Bone density assessment when indicated.</strong>{" "}
                  Depending on age, risk factors, and personal history, bone
                  density testing may be recommended to establish a baseline and
                  guide preventive care.
                </li>
                <li>
                  <strong>Ruling out other conditions with overlapping
                  symptoms.</strong> Thyroid disorders and other conditions can
                  sometimes mimic menopausal symptoms, making it important to
                  confirm the underlying cause before starting treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches for Menopause Symptoms
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hormone Replacement Therapy (HRT).</strong> For many
                  women, HRT is an effective option for managing hot flashes,
                  night sweats, and other symptoms, with the specific type,
                  dose, and duration tailored carefully to individual health
                  history and risk factors.
                </li>
                <li>
                  <strong>Non-hormonal medical options.</strong> For women who
                  cannot or prefer not to use hormone therapy, various
                  non-hormonal medications can help manage specific symptoms
                  such as hot flashes or mood changes.
                </li>
                <li>
                  <strong>Local treatment for vaginal symptoms.</strong>{" "}
                  Vaginal dryness and discomfort can often be managed
                  effectively with localised treatment options, separate from
                  systemic hormone therapy.
                </li>
                <li>
                  <strong>Bone health management.</strong> This may include
                  calcium and vitamin D optimisation, weight-bearing exercise
                  guidance, and, when indicated, specific medical treatment to
                  support bone density.
                </li>
                <li>
                  <strong>Lifestyle-based symptom management.</strong>
                  Structured approaches to diet, exercise, sleep hygiene, and
                  stress management can meaningfully reduce the severity of
                  several menopausal symptoms.
                </li>
                <li>
                  <strong>Ongoing monitoring and adjustment.</strong> Menopause
                  management is not a one-time decision; treatment is
                  periodically reviewed and adjusted as symptoms, health status,
                  and personal preferences evolve over time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Strategies That Support Menopause Management
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Regular weight-bearing and strength exercise.</strong>{" "}
                  This supports bone density, cardiovascular health, and mood,
                  making it one of the most broadly beneficial strategies during
                  this transition.
                </li>
                <li>
                  <strong>A calcium- and vitamin D-conscious diet.</strong>{" "}
                  Adequate intake of these nutrients supports bone health during
                  a period of naturally accelerated bone density decline.
                </li>
                <li>
                  <strong>Consistent sleep habits.</strong> Addressing sleep
                  disruption directly, alongside managing night sweats, can
                  improve overall symptom tolerance and quality of life.
                </li>
                <li>
                  <strong>Limiting known hot flash triggers.</strong> Caffeine,
                  alcohol, spicy food, and warm environments are common triggers
                  for some women, and identifying personal patterns can help
                  reduce frequency.
                </li>
                <li>
                  <strong>Stress management techniques.</strong> Since stress
                  can worsen several menopausal symptoms, incorporating
                  relaxation practices can provide meaningful additional relief
                  alongside medical treatment.
                </li>
                <li>
                  <strong>Regular health screenings.</strong> Continuing routine
                  screenings for blood pressure, cholesterol, and bone density
                  supports early identification of any changes needing attention
                  during this life stage.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Menopause
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Menopause symptoms just have to
                  be endured.&quot;{" "}
                  <strong>Fact:</strong> A wide range of effective treatment
                  options exist, and no woman needs to simply tolerate
                  disruptive symptoms without support.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Hormone replacement therapy is
                  unsafe for everyone.&quot;{" "}
                  <strong>Fact:</strong> HRT safety and suitability depend on
                  individual health history; for many women, it is a safe and
                  effective option when properly evaluated and monitored.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Menopause happens suddenly,
                  overnight.&quot;{" "}
                  <strong>Fact:</strong> It is typically a gradual transition
                  spanning several years, beginning with perimenopause well
                  before periods stop completely.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Vaginal dryness isn&apos;t
                  something a doctor needs to know about.&quot;{" "}
                  <strong>Fact:</strong> This is a common, legitimate, and very
                  treatable menopausal symptom that deserves the same attention
                  as any other.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Weight gain during menopause is
                  inevitable and untreatable.&quot;{" "}
                  <strong>Fact:</strong> While metabolic changes do occur,
                  structured lifestyle strategies and, where appropriate,
                  medical guidance can meaningfully help manage this.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Once menopause is confirmed,
                  there&apos;s nothing more to monitor.&quot;{" "}
                  <strong>Fact:</strong> Postmenopausal health, including bone
                  density and cardiovascular risk, continues to need active
                  attention for years afterward.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Specialist Consultation Makes a Genuine Difference
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Personalised treatment based on your specific health
                  profile.</strong> Menopause management is not one-size-fits-all;
                  the right approach depends on symptom severity, personal and
                  family health history, and individual preferences.
                </li>
                <li>
                  <strong>Accurate distinction from other conditions.</strong>{" "}
                  A specialist can confirm whether symptoms are genuinely
                  related to menopause or stem from another condition requiring
                  different treatment.
                </li>
                <li>
                  <strong>Safe, informed guidance on hormone therapy.</strong>{" "}
                  Deciding whether HRT is appropriate requires a careful,
                  individualised risk-benefit discussion that a specialist is
                  best positioned to provide.
                </li>
                <li>
                  <strong>Comprehensive, whole-health care.</strong> A
                  specialist addresses not just symptom relief but the broader
                  health considerations — bone, heart, mental health — relevant
                  to this life stage.
                </li>
                <li>
                  <strong>Ongoing support through a multi-year transition.</strong>{" "}
                  Since menopause is a gradual process, having a consistent
                  specialist relationship allows treatment to be adjusted
                  appropriately as the transition progresses.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist in
                Moradabad offering comprehensive menopause management, from
                symptom relief to long-term bone and cardiovascular health
                guidance. Every consultation begins with a thorough,
                individualised evaluation, ensuring treatment recommendations
                are tailored specifically to each woman&apos;s health history
                and personal preferences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book a Menopause Management Consultation
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Women&apos;s Health Specialist (MBBS, MS)
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