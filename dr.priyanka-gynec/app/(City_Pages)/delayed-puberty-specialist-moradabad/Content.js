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

export default function DelayedPubertyTreatment() {
  const faqs = [
    {
      q: "At what age should delayed puberty be evaluated in a girl?",
      a: "Evaluation is generally recommended if there is no breast development by age 13 or no periods by age 15–16.",
    },
    {
      q: "Is delayed puberty always a serious medical problem?",
      a: "No. The most common cause is a harmless family pattern of later development, but evaluation is needed to confirm this.",
    },
    {
      q: "What tests are usually done to find the cause?",
      a: "A physical exam, hormonal blood tests, a bone age X-ray, and a pelvic ultrasound are the standard first-line evaluations.",
    },
    {
      q: "Can delayed puberty be treated successfully?",
      a: "Yes. Once the specific cause is identified, most cases respond well to appropriate monitoring or treatment.",
    },
    {
      q: "Will my daughter need to see a paediatric endocrinologist as well?",
      a: "In some cases, yes — care is coordinated between gynaecology and paediatric endocrinology depending on the specific cause identified.",
    },
    {
      q: "Does delayed puberty affect future fertility?",
      a: "This depends entirely on the underlying cause, which is exactly why an accurate diagnosis is important early on.",
    },
    {
      q: "Is the evaluation uncomfortable or invasive for a teenager?",
      a: "The process is gentle and age-appropriate, using blood tests, imaging, and a sensitive physical examination conducted with full privacy.",
    },
    {
      q: "Can lifestyle or diet really delay puberty?",
      a: "Yes, low body weight, poor nutrition, or intensive physical training can genuinely delay puberty and are addressed as part of the evaluation.",
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
                Delayed Puberty Specialist in Moradabad: Signs, Causes & When to
                Seek Evaluation
              </h1>

              <p className="mb-4 text-gray-700">
                Every child&apos;s body develops on its own timeline, but when
                the physical signs of puberty do not appear within the expected
                age range, it is a signal worth taking seriously — not something
                to &quot;wait out&quot; indefinitely. Delayed puberty in girls
                is a recognised medical condition with identifiable underlying
                causes, and in almost every case, an accurate diagnosis followed
                by the right treatment plan restores normal development.
              </p>

              <p className="text-gray-700">
                This guide explains what counts as delayed puberty, what causes
                it, how a specialist evaluates it, and when parents in Moradabad
                should book a consultation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delayed puberty is generally considered when there are no
                  signs of breast development by age 13, or no menstrual periods
                  by age 15–16, in girls
                </li>
                <li>
                  Causes range from simple constitutional delay (a family
                  pattern of &quot;late bloomers&quot;) to hormonal,
                  nutritional, genetic, or structural reproductive conditions
                </li>
                <li>
                  A combined evaluation — clinical history, physical
                  examination, hormonal blood tests, and pelvic ultrasound — is
                  needed to identify the exact cause
                </li>
                <li>
                  Most cases of delayed puberty are treatable once correctly
                  diagnosed, and early evaluation gives the widest range of
                  treatment options
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as Delayed Puberty in Girls
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>No breast development by age 13.</strong> Breast
                  budding (thelarche) is usually the first visible sign of
                  puberty; its absence by this age is the most common trigger
                  for evaluation.
                </li>
                <li>
                  <strong>No menstrual period by age 15–16, or within 3 years
                  of breast development starting.</strong> This is referred to
                  as primary amenorrhea and is evaluated as a form of delayed
                  or incomplete puberty.
                </li>
                <li>
                  <strong>Puberty that starts but does not progress
                  normally.</strong> Some girls show early signs like breast
                  budding but then see no further development — height growth,
                  pubic hair, or menstruation — for an extended period, which
                  also warrants evaluation.
                </li>
                <li>
                  <strong>Height and growth concerns alongside delayed physical
                  changes.</strong> A noticeably slower growth pattern compared
                  to peers, combined with absent puberty signs, often points
                  toward a hormonal or genetic cause that needs specific
                  testing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Timely Evaluation Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Most causes are treatable, but treatment works best
                  when started early.</strong> Several hormonal causes of
                  delayed puberty respond very well to timely medical
                  management, and delaying evaluation can mean a longer or more
                  complicated treatment course later.
                </li>
                <li>
                  <strong>It can affect bone health and final adult
                  height.</strong> Puberty hormones play a direct role in bone
                  density and the timing of the final growth spurt — prolonged
                  delay without evaluation can affect both.
                </li>
                <li>
                  <strong>It often carries a real emotional impact.</strong>{" "}
                  Adolescent girls are acutely aware of how their physical
                  development compares with peers, and unexplained delay can
                  affect self-confidence and social wellbeing, which improves
                  once a clear explanation and care plan are in place.
                </li>
                <li>
                  <strong>It can be the first sign of an underlying
                  condition.</strong> Chronic illness, nutritional deficiency,
                  thyroid disorders, or genetic conditions sometimes present
                  first as delayed puberty, making early evaluation important
                  for the child&apos;s overall health, not only for
                  reproductive development.
                </li>
                <li>
                  <strong>Family reassurance replaces prolonged
                  uncertainty.</strong> For many families, a proper evaluation
                  either confirms a simple, harmless constitutional delay or
                  identifies a clear, manageable cause — either way, replacing
                  anxiety with a concrete plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Delayed Puberty
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Constitutional delay of growth and puberty.</strong>{" "}
                  The most common cause overall — a family pattern where puberty
                  naturally starts later than average, often seen in a parent or
                  sibling with a similar history, and typically resolves on its
                  own with monitoring.
                </li>
                <li>
                  <strong>Nutritional deficiencies or low body weight.</strong>{" "}
                  Inadequate nutrition, very low body fat, or conditions like
                  anaemia can delay the hormonal signals that trigger puberty.
                </li>
                <li>
                  <strong>Thyroid disorders.</strong> An underactive thyroid
                  gland can slow overall growth and delay pubertal development,
                  and is identified through simple blood testing.
                </li>
                <li>
                  <strong>Hypothalamic or pituitary conditions.</strong> The
                  brain structures that trigger puberty hormones can sometimes
                  underfunction, requiring specific hormonal testing and,
                  occasionally, imaging to evaluate.
                </li>
                <li>
                  <strong>Ovarian conditions.</strong> Underdeveloped or
                  non-functioning ovaries, including certain genetic conditions
                  such as Turner syndrome, are an important cause that a pelvic
                  ultrasound and genetic testing can help identify.
                </li>
                <li>
                  <strong>Chronic illness.</strong> Long-standing conditions
                  affecting the kidneys, digestive system, or overall health can
                  suppress the body&apos;s normal pubertal timeline until the
                  underlying condition is managed.
                </li>
                <li>
                  <strong>Excessive physical training or extreme low body
                  fat.</strong> Intensive competitive sports training combined
                  with low body fat percentage is a recognised, reversible cause
                  of delayed puberty in some adolescent girls.
                </li>
                <li>
                  <strong>Genetic and chromosomal conditions.</strong> Certain
                  inherited conditions directly affect the reproductive organs
                  or hormone-producing glands and require specialised genetic
                  and hormonal evaluation to confirm.
                </li>
                <li>
                  <strong>Structural reproductive tract conditions.</strong>{" "}
                  Rarely, a structural issue with the uterus or vaginal canal
                  can be present from birth and only becomes apparent when
                  periods do not begin as expected, which a pelvic ultrasound
                  can identify.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During a Specialist Evaluation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A detailed growth and family history.</strong> The
                  doctor reviews the child&apos;s growth chart over time, family
                  puberty history, general health, nutrition, and activity
                  levels — this alone often points toward the likely category of
                  cause.
                </li>
                <li>
                  <strong>A physical examination.</strong> This includes
                  assessing height, weight, and the stage of physical
                  development (breast, pubic hair) using standard paediatric
                  growth and development scales.
                </li>
                <li>
                  <strong>Hormonal blood tests.</strong> Tests typically assess
                  reproductive hormones, thyroid function, and other relevant
                  markers to identify whether the cause is hormonal in nature.
                </li>
                <li>
                  <strong>Bone age X-ray.</strong> A simple X-ray of the hand
                  and wrist helps estimate skeletal maturity compared to
                  chronological age, an important clue in distinguishing
                  constitutional delay from other causes.
                </li>
                <li>
                  <strong>Pelvic ultrasound.</strong> This evaluates the size
                  and development of the uterus and ovaries, helping identify
                  structural or ovarian causes.
                </li>
                <li>
                  <strong>Genetic testing where indicated.</strong> If a
                  chromosomal condition is suspected based on other findings,
                  targeted genetic testing confirms or rules this out.
                </li>
                <li>
                  <strong>Coordinated referral when needed.</strong> Where the
                  underlying cause involves broader paediatric endocrine or
                  genetic factors, evaluation is coordinated with paediatric
                  endocrinology alongside ongoing gynaecological care, ensuring
                  the adolescent receives complete, correctly specialised
                  management.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches for Delayed Puberty
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment always follows the specific cause identified through
                evaluation — there is no single standard treatment for every
                case.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Monitoring for constitutional delay.</strong> When
                  evaluation confirms a simple constitutional pattern, regular
                  monitoring of growth and development is usually sufficient,
                  with puberty progressing naturally over time.
                </li>
                <li>
                  <strong>Nutritional correction.</strong> Where low body
                  weight, nutritional deficiency, or anaemia is identified as a
                  contributing factor, dietary correction and monitoring often
                  allow puberty to resume naturally.
                </li>
                <li>
                  <strong>Thyroid hormone management.</strong> When an
                  underactive thyroid is the cause, appropriate medical
                  management typically allows normal pubertal progression to
                  follow.
                </li>
                <li>
                  <strong>Hormonal induction therapy.</strong> In cases where
                  the body is not producing adequate reproductive hormones on
                  its own, doctor-supervised hormone therapy can be used to
                  initiate and support puberty under close monitoring.
                </li>
                <li>
                  <strong>Management of underlying chronic illness.</strong>{" "}
                  Where a chronic medical condition is identified as the cause,
                  treating that condition is the priority, often allowing
                  puberty to progress once the underlying issue is controlled.
                </li>
                <li>
                  <strong>Genetic condition management.</strong> For confirmed
                  genetic or chromosomal causes, a coordinated, long-term care
                  plan involving hormonal therapy and monitoring is developed
                  specifically for the condition identified.
                </li>
                <li>
                  <strong>Activity and body-fat guidance.</strong> For cases
                  linked to intensive training or very low body fat, guided
                  adjustment of training load and nutrition, monitored over
                  time, often allows normal development to resume.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes a Specialist Consultation Different from &quot;Waiting
                It Out&quot;
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A clear diagnosis instead of ongoing
                  uncertainty.</strong> Many families delay consultation hoping
                  the issue will resolve on its own; a proper evaluation quickly
                  clarifies whether that is likely or whether active treatment is
                  needed.
                </li>
                <li>
                  <strong>Access to the right combination of tests.</strong>{" "}
                  Growth charting, bone age assessment, hormonal panels, and
                  pelvic ultrasound together give a complete picture that casual
                  observation cannot provide.
                </li>
                <li>
                  <strong>Age-appropriate, sensitive communication.</strong> A
                  specialist experienced in adolescent health communicates
                  directly and comfortably with both the teenager and parents,
                  in a way that respects the sensitivity of the topic.
                </li>
                <li>
                  <strong>A personalised treatment timeline.</strong> Every
                  underlying cause has a different expected treatment course; a
                  specialist sets realistic expectations rather than leaving
                  families guessing.
                </li>
                <li>
                  <strong>Long-term monitoring.</strong> Whether the cause is
                  constitutional or requires active treatment, ongoing
                  monitoring ensures development continues appropriately and any
                  adjustments to the care plan are made promptly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist based in
                Moradabad, offering evaluation and coordinated management of
                adolescent health concerns including delayed puberty, alongside
                her broader expertise in gynaecology, laparoscopy, fertility,
                and paediatric care. Consultations are conducted with the
                sensitivity and privacy that adolescent health concerns require,
                with clear explanations for both parents and their daughters at
                every step.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Delayed Puberty — And the Facts
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;It will just happen eventually,
                  no need to see a doctor.&quot;{" "}
                  <strong>Fact:</strong> While some cases resolve on their own,
                  only an evaluation can confirm whether this is truly the case,
                  rather than a treatable condition being left unaddressed.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Delayed puberty only matters for
                  reproductive health.&quot;{" "}
                  <strong>Fact:</strong> It can also relate to bone health,
                  final adult height, and sometimes broader health conditions
                  like thyroid or chronic illness, making it worth evaluating
                  for overall wellbeing too.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;If height is normal, puberty
                  delay isn&apos;t a concern.&quot;{" "}
                  <strong>Fact:</strong> Height and pubertal development are
                  related but distinct — a girl can have normal height for her
                  age while still showing no signs of puberty, and this still
                  needs evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Hormone therapy is always
                  required for delayed puberty.&quot;{" "}
                  <strong>Fact:</strong> Many cases, especially constitutional
                  delay, need only monitoring, not hormonal treatment.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;This is too sensitive a topic to
                  discuss with a doctor.&quot;{" "}
                  <strong>Fact:</strong> Specialists experienced in adolescent
                  health handle these consultations regularly and communicate
                  with both teenagers and parents in a comfortable, respectful
                  way.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;A single blood test can rule
                  everything in or out.&quot;{" "}
                  <strong>Fact:</strong> A combination of growth history,
                  physical examination, bone age assessment, hormonal testing,
                  and often ultrasound is needed for an accurate diagnosis — no
                  single test tells the whole story.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supporting Your Daughter Through the Evaluation Process
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Keep a simple growth record if you have one.</strong>{" "}
                  Old height measurements, growth charts from school, or
                  paediatrician visit notes can be genuinely useful during the
                  consultation.
                </li>
                <li>
                  <strong>Encourage open conversation at home.</strong>{" "}
                  Adolescents often feel more comfortable discussing physical
                  changes when a parent brings up the topic calmly rather than
                  waiting for the child to raise it first.
                </li>
                <li>
                  <strong>Avoid comparing progress to friends or siblings out
                  loud.</strong> Every child&apos;s timeline differs, and
                  repeated comparisons can add unnecessary anxiety on top of an
                  already sensitive topic.
                </li>
                <li>
                  <strong>Maintain balanced nutrition and reasonable activity
                  levels while awaiting the appointment.</strong> This does not
                  replace medical evaluation but supports overall health
                  regardless of the underlying cause.
                </li>
                <li>
                  <strong>Bring both parents or a trusted family member if
                  possible.</strong> Shared understanding of the diagnosis and
                  treatment plan helps ensure consistent support for the child
                  going forward.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book a Consultation for Your Daughter&apos;s Health
              </h2>

              <p className="mb-4 text-gray-700">
                If your daughter&apos;s development seems delayed compared to
                expected milestones, a timely evaluation offers either
                reassurance or a clear path to treatment — both are valuable,
                and neither should be delayed.
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