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

export default function FertilityPreservation() {
  const faqs = [
    {
      q: "At what age should I consider fertility preservation?",
      a: "There's no single ideal age, but earlier preservation generally yields more and higher-quality eggs — an individual fertility assessment gives the clearest guidance.",
    },
    {
      q: "Is fertility preservation only for women with cancer or medical conditions?",
      a: "No, many women choose it electively to delay childbearing for personal or career reasons.",
    },
    {
      q: "How long can frozen eggs be stored?",
      a: "Frozen eggs can typically remain viable in storage for an extended period, offering considerable flexibility in future planning.",
    },
    {
      q: "Does egg freezing guarantee a future pregnancy?",
      a: "No, it significantly improves future chances but does not guarantee pregnancy, as success also depends on factors at the time of use.",
    },
    {
      q: "Is the egg retrieval procedure painful?",
      a: "It is performed under sedation, and most women experience only mild discomfort during a short recovery period afterward.",
    },
    {
      q: "How soon can the process start after a cancer diagnosis requiring urgent treatment?",
      a: "The process can often be compressed into a short timeframe when medically necessary — prompt consultation is important in these situations.",
    },
    {
      q: "Can I freeze embryos instead of eggs?",
      a: "Yes, if using a partner's or donor sperm is part of the plan, embryo freezing is an alternative option worth discussing during consultation.",
    },
    {
      q: "What is the first step if I'm considering fertility preservation?",
      a: "A fertility assessment, including blood tests and ultrasound, is the starting point to understand your current ovarian reserve and personalised options.",
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
                Fertility Preservation Specialist in Moradabad: Egg Freezing,
                Timing & Who Should Consider It
              </h1>

              <p className="mb-4 text-gray-700">
                Fertility preservation gives women a medically supported way to
                protect their future reproductive options — whether that&apos;s
                due to a medical diagnosis requiring treatment that could affect
                fertility, or simply a personal decision to delay childbearing
                without leaving conception to chance later on.
              </p>

              <p className="text-gray-700">
                This guide explains what fertility preservation actually
                involves, who it&apos;s typically recommended for, how the
                process works, and what to consider before deciding whether
                it&apos;s right for you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fertility preservation, most commonly through egg or embryo
                  freezing, allows eggs to be retrieved and stored at a younger,
                  healthier reproductive age for potential use later
                </li>
                <li>
                  It is recommended both for medical reasons — such as before
                  cancer treatment or certain surgeries — and for personal
                  reasons, such as delaying pregnancy for career or life
                  circumstances
                </li>
                <li>
                  Egg quality and quantity decline with age, so earlier
                  fertility preservation generally yields better outcomes than
                  waiting
                </li>
                <li>
                  The process involves ovarian stimulation, egg retrieval, and
                  cryopreservation, typically completed within a single
                  menstrual cycle
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Fertility Preservation?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A way to &quot;pause&quot; reproductive ageing.</strong>{" "}
                  Fertility preservation retrieves and freezes eggs (or embryos,
                  if using a partner&apos;s or donor sperm) at a specific point
                  in time, effectively preserving their quality at that age for
                  future use, regardless of how many years pass before they are
                  used.
                </li>
                <li>
                  <strong>Two main preservation options exist.</strong> Egg
                  freezing (oocyte cryopreservation) preserves unfertilised
                  eggs, while embryo freezing preserves eggs that have already
                  been fertilised — the right choice depends on individual
                  circumstances and future plans.
                </li>
                <li>
                  <strong>Advanced freezing technology protects egg
                  quality.</strong> Modern vitrification (rapid freezing)
                  techniques used in fertility preservation minimise damage to
                  the egg during the freezing process, giving frozen eggs a
                  strong chance of surviving thawing intact.
                </li>
                <li>
                  <strong>It is a proactive, not reactive, decision.</strong>{" "}
                  Unlike fertility treatment sought after difficulty conceiving
                  has already occurred, fertility preservation is typically
                  pursued in advance, while reproductive health is still
                  optimal.
                </li>
                <li>
                  <strong>Storage duration is generally flexible.</strong>{" "}
                  Frozen eggs or embryos can typically remain viable in storage
                  for an extended period, giving women meaningful flexibility in
                  timing their future family planning.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Consider Fertility Preservation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Women facing cancer treatment.</strong> Chemotherapy
                  and radiation can significantly affect ovarian function and
                  egg quality; fertility preservation before treatment begins
                  protects future fertility options regardless of treatment
                  outcomes.
                </li>
                <li>
                  <strong>Women undergoing certain gynaecological
                  surgeries.</strong> Procedures involving the ovaries — such as
                  surgery for severe endometriosis or ovarian cysts — carry some
                  risk to ovarian tissue, making preservation worth discussing
                  beforehand in select cases.
                </li>
                <li>
                  <strong>Women with a family history of early menopause or
                  diminished ovarian reserve.</strong> A known family pattern of
                  earlier-than-average menopause is a reasonable basis for
                  considering preservation sooner rather than later.
                </li>
                <li>
                  <strong>Women delaying childbearing for personal or career
                  reasons.</strong> Many women choose to prioritise education,
                  career milestones, or simply have not yet found the right life
                  circumstances for parenthood, and want to preserve younger,
                  higher-quality eggs in the meantime.
                </li>
                <li>
                  <strong>Women without a current partner who still want
                  biological children in the future.</strong> Egg freezing
                  allows this decision to be made independently of relationship
                  timing.
                </li>
                <li>
                  <strong>Women diagnosed with conditions affecting ovarian
                  reserve.</strong> Conditions that are known to accelerate egg
                  loss make earlier preservation a meaningful protective step
                  once identified.
                </li>
                <li>
                  <strong>Transgender individuals and others planning
                  gender-affirming treatments.</strong> For those planning
                  hormone therapy or surgery that could affect fertility,
                  preservation beforehand keeps future biological parenthood as
                  an option.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Timing Matters for Fertility Preservation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Egg quantity declines steadily with age.</strong>{" "}
                  Women are born with a finite number of eggs, and this number
                  naturally decreases every year, with a more noticeable decline
                  typically beginning in the early-to-mid thirties.
                </li>
                <li>
                  <strong>Egg quality also declines with age, independent of
                  quantity.</strong> Even where egg numbers remain reasonable,
                  the genetic quality of eggs tends to decline progressively
                  with age, affecting future fertilisation and pregnancy success
                  rates.
                </li>
                <li>
                  <strong>Eggs frozen at a younger age generally offer better
                  future outcomes.</strong> Because both quantity and quality
                  are better preserved earlier, freezing eggs in one&apos;s
                  twenties or early thirties typically yields more,
                  higher-quality eggs than the same procedure performed later.
                </li>
                <li>
                  <strong>There is no single &quot;right age,&quot; but earlier
                  evaluation gives more options.</strong> Rather than waiting
                  for a specific age milestone, an evaluation of individual
                  ovarian reserve provides a much clearer, personalised picture
                  of timing than general age guidelines alone.
                </li>
                <li>
                  <strong>Medical circumstances sometimes make timing
                  urgent.</strong> For women facing imminent cancer treatment,
                  preservation timelines are often compressed into just a week
                  or two, making prompt specialist consultation essential once a
                  diagnosis requiring such treatment is made.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What the Fertility Preservation Process Involves
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Initial fertility assessment.</strong> This includes
                  blood tests to assess ovarian reserve (such as AMH levels) and
                  a pelvic ultrasound to evaluate the ovaries, giving a clear
                  picture of current fertility potential.
                </li>
                <li>
                  <strong>Ovarian stimulation.</strong> A course of hormonal
                  medication, typically over 10 to 14 days, stimulates the
                  ovaries to produce multiple mature eggs in a single cycle,
                  rather than the single egg normally released each month.
                </li>
                <li>
                  <strong>Monitoring during stimulation.</strong> Regular
                  ultrasound scans and blood tests during this period track
                  follicle development and allow the treatment team to time the
                  egg retrieval precisely.
                </li>
                <li>
                  <strong>Egg retrieval procedure.</strong> A minor, typically
                  day-care procedure performed under sedation retrieves the
                  mature eggs directly from the ovaries using ultrasound
                  guidance.
                </li>
                <li>
                  <strong>Immediate freezing (vitrification).</strong>{" "}
                  Retrieved eggs are assessed for maturity and immediately
                  frozen using rapid vitrification technology to preserve their
                  quality for future use.
                </li>
                <li>
                  <strong>Secure long-term storage.</strong> Frozen eggs are
                  stored under carefully controlled conditions until the woman
                  is ready to use them, whether that is years later or, in some
                  cases, not at all.
                </li>
                <li>
                  <strong>Future use when ready.</strong> When the decision is
                  made to use the preserved eggs, they are thawed and fertilised
                  as part of an IVF cycle, with the resulting embryo transferred
                  to the uterus.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect: A Realistic Timeline
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Initial consultation and testing.</strong> Typically
                  completed within the same week, covering fertility assessment,
                  blood tests, and ultrasound evaluation.
                </li>
                <li>
                  <strong>Stimulation and monitoring phase.</strong>{" "}
                  Approximately 10 to 14 days of hormonal stimulation with
                  regular monitoring visits.
                </li>
                <li>
                  <strong>Egg retrieval day.</strong> A single day procedure,
                  generally requiring only a short recovery period before
                  returning home the same day.
                </li>
                <li>
                  <strong>Recovery.</strong> Most women resume normal activities
                  within a day or two of the retrieval procedure, with some mild
                  discomfort being typical.
                </li>
                <li>
                  <strong>Total time from consultation to completed
                  freezing.</strong> The entire process is usually completed
                  within a single menstrual cycle, generally three to four weeks
                  from first consultation to the retrieval procedure.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Fertility Preservation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Egg freezing guarantees a future
                  pregnancy.&quot;{" "}
                  <strong>Fact:</strong> It significantly improves future
                  chances by preserving younger, higher-quality eggs, but does
                  not guarantee pregnancy, since success also depends on factors
                  present at the time the eggs are eventually used.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Only women with a medical
                  condition should consider this.&quot;{" "}
                  <strong>Fact:</strong> Elective fertility preservation for
                  personal or career reasons is an equally valid and
                  increasingly common reason to pursue the procedure.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;The procedure is the same as a
                  full IVF cycle.&quot;{" "}
                  <strong>Fact:</strong> Fertility preservation stops at the
                  egg-freezing stage; fertilisation and embryo transfer only
                  happen later, if and when the eggs are used.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;It&apos;s too late to consider
                  this in my mid-thirties.&quot;{" "}
                  <strong>Fact:</strong> While earlier preservation generally
                  yields better outcomes, many women in their mid-to-late
                  thirties still benefit meaningfully from the procedure — an
                  individual fertility assessment clarifies this.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Frozen eggs don&apos;t survive
                  the thawing process well.&quot;{" "}
                  <strong>Fact:</strong> Modern vitrification techniques have
                  significantly improved egg survival rates compared to older
                  freezing methods.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;This is a purely elective,
                  non-medical procedure.&quot;{" "}
                  <strong>Fact:</strong> For many women facing cancer treatment
                  or fertility-affecting surgery, this is a medically important
                  step recommended specifically to protect future fertility.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Discuss During a Fertility Preservation
                Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What does my current ovarian reserve actually look
                  like?</strong> Understanding your specific AMH levels and
                  ultrasound findings gives a realistic picture rather than
                  relying on age alone.
                </li>
                <li>
                  <strong>How many eggs would realistically need to be frozen
                  for a reasonable future chance?</strong> This varies by age and
                  individual fertility profile, and a specialist can give a
                  personalised estimate.
                </li>
                <li>
                  <strong>What is the expected timeline given my specific
                  medical situation?</strong> This is especially important for
                  women facing time-sensitive treatments like chemotherapy.
                </li>
                <li>
                  <strong>What happens to the eggs if I never end up using
                  them?</strong> Clarifying storage duration, costs, and future
                  options avoids uncertainty later.
                </li>
                <li>
                  <strong>Are there any additional risks specific to my health
                  history?</strong> A thorough personal and family history
                  discussion ensures the process is planned safely around
                  individual circumstances.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Fertility Preservation Differs From Regular IVF
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>The endpoint is different.</strong> Fertility
                  preservation stops once eggs (or embryos) are frozen and
                  stored; regular IVF continues through fertilisation and embryo
                  transfer within the same cycle.
                </li>
                <li>
                  <strong>The timing of decision-making is separated.</strong>{" "}
                  With preservation, the decision about if and when to attempt
                  pregnancy is deferred to a future date, whereas IVF is pursued
                  with the immediate intention of achieving pregnancy.
                </li>
                <li>
                  <strong>It can be planned around external timelines.</strong>{" "}
                  Preservation can be scheduled around a treatment deadline,
                  career milestone, or personal readiness, while IVF timing is
                  generally driven by the intention to conceive as soon as
                  reasonably possible.
                </li>
                <li>
                  <strong>Follow-up care differs accordingly.</strong> After
                  preservation, follow-up is minimal until the eggs are
                  eventually used; IVF involves closer follow-up through the
                  pregnancy confirmation stage.
                </li>
                <li>
                  <strong>Both rely on the same core reproductive
                  technology.</strong> Ovarian stimulation and egg retrieval are
                  common to both processes, meaning the initial steps often look
                  similar even though the ultimate purpose differs.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist and
                fertility specialist in Moradabad, offering fertility assessment
                and preservation guidance as part of a comprehensive fertility
                and IVF practice equipped with advanced reproductive technology,
                including time-lapse embryo monitoring and AI-based imaging.
                Every fertility preservation consultation begins with a clear,
                honest assessment of individual fertility potential before any
                procedure is recommended.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book a Fertility Preservation Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Whether you&apos;re facing a medical treatment that could affect
                your fertility or simply want to preserve your options for the
                future, a personalised fertility assessment is the first step
                toward an informed decision.
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