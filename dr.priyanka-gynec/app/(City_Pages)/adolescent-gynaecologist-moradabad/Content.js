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

export default function AdolescentGynaecology() {
  const faqs = [
    {
      q: "At what age should a girl first see a gynaecologist?",
      a: "There is no fixed age — a visit is appropriate whenever there is a specific concern, such as period problems, puberty concerns, or general reproductive health questions.",
    },
    {
      q: "Will my daughter need an internal examination?",
      a: "Not usually. Most adolescent evaluations are done through history, ultrasound, and blood tests rather than internal examination.",
    },
    {
      q: "Are irregular periods normal in the first few years after puberty?",
      a: "Some irregularity is common initially, but persistent or severe irregularity should still be evaluated.",
    },
    {
      q: "Can PCOS really be diagnosed in a teenager?",
      a: "Yes, PCOS is frequently identified during adolescence and managed with an age-appropriate approach.",
    },
    {
      q: "Is the consultation kept confidential from other family members if needed?",
      a: "Yes, adolescent consultations are handled with full medical confidentiality and sensitivity.",
    },
    {
      q: "What should we bring to the first appointment?",
      a: "A record of the menstrual cycle if available, along with any relevant past medical history or growth records.",
    },
    {
      q: "Can severe period pain be treated without surgery?",
      a: "In most cases, yes — many causes are managed through medical treatment; surgery is only considered when specifically indicated.",
    },
    {
      q: "How long does a typical adolescent gynaecology consultation take?",
      a: "It varies, but time is taken to allow full discussion — typically covering history, examination or tests, and a clear explanation of next steps.",
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
                Adolescent Gynaecologist in Moradabad: Specialised, Confidential
                Care for Teenage Girls
              </h1>

              <p className="mb-4 text-gray-700">
                The teenage years bring a wave of physical changes, and with
                them, questions and concerns that many families are unsure how
                to handle — irregular periods, painful cramps, unexplained
                weight changes, or worries about normal development. An
                adolescent gynaecologist is trained specifically to address
                these concerns with the sensitivity, privacy, and
                age-appropriate communication that a general physician visit
                often cannot offer.
              </p>

              <p className="text-gray-700">
                This guide explains what adolescent gynaecology covers, the most
                common reasons teenage girls are brought in for consultation,
                and what to expect from a visit in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Adolescent gynaecology addresses reproductive and hormonal
                  health specifically for girls from puberty through the teenage
                  years, distinct from adult gynaecological care
                </li>
                <li>
                  Irregular periods, painful periods, and puberty-related
                  concerns are the most common reasons for a first visit — most
                  have straightforward, treatable explanations
                </li>
                <li>
                  Consultations are conducted with complete confidentiality and
                  age-appropriate communication for both the teenager and her
                  parents
                </li>
                <li>
                  Early evaluation of menstrual or hormonal irregularities in
                  adolescence often prevents more complex reproductive health
                  issues later in life
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Adolescent Gynaecology, and Why Is It a Distinct
                Specialty
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>It focuses on a specific life stage.</strong>{" "}
                  Adolescent gynaecology covers the years from the first signs
                  of puberty through the later teenage years — a period where
                  the body is still establishing regular hormonal cycles, which
                  requires a different diagnostic approach than adult
                  gynaecology.
                </li>
                <li>
                  <strong>It requires age-appropriate communication.</strong> A
                  skilled adolescent gynaecologist knows how to explain
                  conditions and procedures in a way a teenager can understand
                  and feel comfortable with, while still keeping parents
                  appropriately informed.
                </li>
                <li>
                  <strong>Many &quot;normal&quot; teenage experiences are
                  actually irregular.</strong> Conditions such as very heavy
                  periods, severe cramps, or long gaps between cycles are often
                  dismissed as &quot;just part of growing up,&quot; when in fact
                  they frequently have an identifiable, treatable cause.
                </li>
                <li>
                  <strong>It bridges paediatric and adult gynaecological
                  care.</strong> An adolescent gynaecologist is trained to
                  recognise when a concern is a normal variation of development
                  versus when it needs the same rigorous evaluation used in
                  adult gynaecological practice.
                </li>
                <li>
                  <strong>Confidentiality is central to the approach.</strong>{" "}
                  Teenagers are often more forthcoming about symptoms when they
                  trust that their consultation is private and judgement-free,
                  which directly improves the accuracy of diagnosis.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Reasons Teenage Girls See an Adolescent Gynaecologist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Irregular menstrual cycles.</strong> Cycles that are
                  unpredictable in timing, unusually long, or frequently skipped
                  are one of the most common reasons for a visit, and can stem
                  from hormonal imbalance, PCOS, thyroid conditions, or simply
                  the body&apos;s cycles still stabilising.
                </li>
                <li>
                  <strong>Heavy or prolonged periods.</strong> Bleeding that
                  soaks through protection quickly, lasts longer than seven
                  days, or causes fatigue and low iron levels warrants
                  evaluation rather than being accepted as normal.
                </li>
                <li>
                  <strong>Painful periods (dysmenorrhea).</strong> Cramps severe
                  enough to interfere with school, sleep, or daily activity are
                  not something a teenager should simply be told to &quot;push
                  through&quot; — evaluation identifies whether an underlying
                  condition like endometriosis is contributing.
                </li>
                <li>
                  <strong>Delayed puberty or absent periods.</strong> Concerns
                  about breast development not starting, or periods not
                  beginning by the expected age, fall directly within adolescent
                  gynaecological evaluation.
                </li>
                <li>
                  <strong>PCOS-related symptoms.</strong> Irregular cycles
                  combined with acne, excess hair growth, or weight changes in a
                  teenager are frequently linked to polycystic ovary syndrome,
                  which benefits significantly from early diagnosis and
                  management.
                </li>
                <li>
                  <strong>Vaginal discharge or irritation.</strong> Unusual
                  discharge, itching, or discomfort — often related to
                  infections or hygiene factors — is a common and easily treated
                  adolescent concern.
                </li>
                <li>
                  <strong>Questions about reproductive health and
                  hygiene.</strong> Many visits are simply educational — helping
                  a teenager and her family understand normal menstrual health,
                  hygiene practices, and what changes to watch for.
                </li>
                <li>
                  <strong>Pelvic pain unrelated to periods.</strong> Persistent
                  pain that isn&apos;t tied to the menstrual cycle can have
                  several causes and deserves the same thorough evaluation as
                  period-related pain.
                </li>
                <li>
                  <strong>Concerns following an injury or accident.</strong> In
                  rare cases, evaluation is needed following an injury affecting
                  the pelvic area, requiring gentle, specialised assessment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During an Adolescent Gynaecology Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A private, comfortable conversation first.</strong>{" "}
                  The consultation typically begins with the doctor speaking
                  directly with the teenager, at an age-appropriate level,
                  before or alongside involving the parent, to build trust and
                  get an accurate history.
                </li>
                <li>
                  <strong>A detailed menstrual and health history.</strong>{" "}
                  Cycle length, flow, pain levels, and any associated symptoms
                  are reviewed carefully, often revealing patterns that point
                  toward a specific cause.
                </li>
                <li>
                  <strong>A physical examination only when clinically
                  necessary.</strong> Many adolescent concerns can be evaluated
                  through history and non-invasive methods; an internal
                  examination is only performed when genuinely required and is
                  explained fully in advance.
                </li>
                <li>
                  <strong>Ultrasound imaging where indicated.</strong> A pelvic
                  ultrasound, which does not require an internal examination in
                  adolescents, is often sufficient to assess the uterus and
                  ovaries.
                </li>
                <li>
                  <strong>Hormonal blood tests when relevant.</strong> Blood
                  tests may be recommended to check hormone levels, thyroid
                  function, or iron levels depending on the presenting symptoms.
                </li>
                <li>
                  <strong>A clear, jointly understood treatment plan.</strong>{" "}
                  Findings and next steps are explained to both the teenager and
                  her parents, ensuring everyone understands the diagnosis and
                  the reasoning behind the recommended treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Common Adolescent Conditions Are Managed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hormonal regulation for irregular cycles.</strong>{" "}
                  Once an underlying cause is identified, appropriate hormonal
                  or medical management is used to restore predictable,
                  manageable cycles.
                </li>
                <li>
                  <strong>Pain management for dysmenorrhea.</strong> Treatment
                  ranges from lifestyle and medical pain management to further
                  evaluation for endometriosis when period pain is unusually
                  severe or unresponsive to standard measures.
                </li>
                <li>
                  <strong>PCOS management tailored to adolescence.</strong>{" "}
                  Management typically combines lifestyle guidance, cycle
                  regulation, and monitoring, with an approach adjusted
                  specifically for a still-developing adolescent body rather
                  than applying adult PCOS protocols directly.
                </li>
                <li>
                  <strong>Monitoring and guided treatment for delayed
                  puberty.</strong> As with any puberty-related concern,
                  treatment depends entirely on the specific underlying cause
                  identified through evaluation.
                </li>
                <li>
                  <strong>Treatment of infections and discharge-related
                  concerns.</strong> Once the cause is confirmed through simple
                  testing, treatment is usually swift, along with practical
                  hygiene guidance to prevent recurrence.
                </li>
                <li>
                  <strong>Education-focused visits.</strong> For consultations
                  centred on general reproductive health questions, the visit
                  often concludes with clear educational guidance rather than
                  any medical treatment at all.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Adolescent Gynaecological Care Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>It establishes a health baseline early.</strong>{" "}
                  Understanding a teenager&apos;s normal cycle pattern and
                  reproductive health early makes it easier to recognise genuine
                  problems later in life.
                </li>
                <li>
                  <strong>It can prevent long-term complications.</strong>{" "}
                  Conditions like PCOS or endometriosis, when identified and
                  managed early, are far easier to control than when diagnosis
                  is delayed into adulthood.
                </li>
                <li>
                  <strong>It supports emotional wellbeing alongside physical
                  health.</strong> Understanding what is happening to their
                  body, in clear and non-judgemental terms, reduces anxiety for
                  many teenagers navigating these changes.
                </li>
                <li>
                  <strong>It builds long-term trust in medical care.</strong> A
                  positive, respectful first experience with a gynaecologist
                  during adolescence often makes a teenager more comfortable
                  seeking reproductive healthcare confidently throughout
                  adulthood.
                </li>
                <li>
                  <strong>It helps parents understand what is and isn&apos;t a
                  cause for concern.</strong> Many parents simply want
                  reassurance that their daughter&apos;s development is on track
                  — an adolescent gynaecologist provides that clarity directly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect as a Parent Bringing Your Daughter for a Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>You will be involved, but privacy will be
                  respected.</strong> The doctor typically balances parental
                  involvement with giving the teenager space to speak for
                  herself, especially as she gets older.
                </li>
                <li>
                  <strong>Questions are welcomed, not rushed.</strong> A good
                  adolescent gynaecology consultation allows time for both the
                  parent and teenager to ask questions without feeling hurried.
                </li>
                <li>
                  <strong>Nothing invasive happens without clear
                  explanation.</strong> Any examination or test is explained in
                  advance, in terms appropriate for the
                  teenager&apos;s age and understanding.
                </li>
                <li>
                  <strong>You will leave with a clear next step.</strong> Whether
                  that is reassurance, a treatment plan, or further testing, the
                  visit concludes with clarity rather than open-ended
                  uncertainty.
                </li>
                <li>
                  <strong>Follow-up is part of the plan, not an
                  afterthought.</strong> For many adolescent conditions, a
                  single visit is only the starting point — follow-up
                  appointments track progress and allow the treatment plan to be
                  adjusted as the teenager&apos;s body continues to develop.
                </li>
                <li>
                  <strong>You are encouraged to note down questions in
                  advance.</strong> Many parents find it helpful to write down
                  concerns before the visit, ensuring nothing important is
                  forgotten in the moment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Adolescent Gynaecology Differs from a General Physician
                Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Specialised diagnostic focus.</strong> A general
                  physician may recognise that a menstrual concern needs
                  attention, but an adolescent gynaecologist has the specific
                  training and diagnostic tools — including pelvic ultrasound
                  interpretation and hormonal panel analysis — to pinpoint the
                  exact cause.
                </li>
                <li>
                  <strong>Familiarity with adolescent-specific
                  conditions.</strong> Conditions like adolescent PCOS,
                  constitutional pubertal delay, and structural reproductive
                  tract variations are seen far more frequently in a specialised
                  practice, leading to faster, more accurate recognition.
                </li>
                <li>
                  <strong>A calibrated approach to examination.</strong> An
                  adolescent gynaecologist knows how to conduct any necessary
                  assessment in the least invasive way appropriate for a young
                  patient, unlike a general approach that may default to
                  adult-style examination protocols.
                </li>
                <li>
                  <strong>Long-term continuity of care.</strong> Building a
                  relationship with a specialist during adolescence often means
                  the same doctor can continue supporting reproductive health
                  through early adulthood, fertility planning, and beyond.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist in
                Moradabad with dedicated experience in adolescent health,
                alongside her broader specialisation in gynaecology,
                laparoscopy, and fertility care. Consultations for teenage girls
                are conducted with particular attention to comfort,
                confidentiality, and clear communication — for both the teenager
                and her family — ensuring concerns are addressed thoroughly
                without unnecessary anxiety.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Adolescent Gynaecology — And the Facts
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Teenagers don&apos;t need to see
                  a gynaecologist unless something is seriously wrong.&quot;{" "}
                  <strong>Fact:</strong> Many visits are simply for education,
                  reassurance, or minor, easily managed concerns — not only
                  serious problems.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Irregular periods in teenagers
                  always sort themselves out.&quot;{" "}
                  <strong>Fact:</strong> While cycles do take time to stabilise
                  after puberty, persistently irregular or absent periods still
                  deserve evaluation to rule out treatable causes.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;An internal examination is always
                  required.&quot;{" "}
                  <strong>Fact:</strong> Most adolescent evaluations rely on
                  history, non-invasive ultrasound, and blood tests; an internal
                  examination is only performed when specifically necessary.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Severe period pain is just
                  something girls have to endure.&quot;{" "}
                  <strong>Fact:</strong> Debilitating period pain often has an
                  identifiable, treatable cause and should never be dismissed as
                  unavoidable.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;PCOS can&apos;t be diagnosed or
                  managed in teenagers.&quot;{" "}
                  <strong>Fact:</strong> PCOS is commonly identified during
                  adolescence, and early, age-appropriate management leads to
                  better long-term outcomes.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Bringing up these topics will
                  embarrass my daughter.&quot;{" "}
                  <strong>Fact:</strong> A skilled adolescent gynaecologist
                  creates a comfortable, non-judgemental environment
                  specifically designed to ease this discomfort.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book a Confidential Consultation for Your Daughter
              </h2>

              <p className="mb-4 text-gray-700">
                Whether it&apos;s irregular periods, painful cramps, puberty
                concerns, or simply questions about reproductive health, a
                consultation with an experienced adolescent gynaecologist
                provides clarity, reassurance, and a clear path forward.
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