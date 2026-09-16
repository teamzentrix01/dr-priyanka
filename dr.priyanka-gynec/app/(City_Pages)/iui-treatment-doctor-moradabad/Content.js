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

export default function IuiTreatment() {
  const faqs = [
    {
      q: "Is IUI painful?",
      a: "No, it is a quick procedure with only mild discomfort, similar to a routine gynaecological exam.",
    },
    {
      q: "How many IUI cycles are usually recommended before considering IVF?",
      a: "This varies by individual case, but specialists typically recommend a defined, limited number of attempts before reassessing the treatment approach.",
    },
    {
      q: "Is IUI cheaper than IVF?",
      a: "Yes, IUI is generally significantly less expensive and less complex than IVF.",
    },
    {
      q: "Can IUI be done with a completely natural cycle, without medication?",
      a: "Yes, in some cases IUI is performed with natural cycle monitoring alone, though medication is often used to improve timing and success.",
    },
    {
      q: "How soon can I take a pregnancy test after IUI?",
      a: "A pregnancy test is typically recommended about two weeks after the procedure for an accurate result.",
    },
    {
      q: "Is IUI suitable for all causes of infertility?",
      a: "No, it is best suited for specific causes like mild male factor infertility, ovulation disorders, or unexplained infertility, while other causes may require IVF.",
    },
    {
      q: "Does age affect IUI success the same way it affects natural conception?",
      a: "Yes, female age is one of the most significant factors influencing IUI success rates.",
    },
    {
      q: "What happens if several IUI cycles don't result in pregnancy?",
      a: "The treatment plan is typically reassessed, with IVF often recommended as the next step depending on the specific findings.",
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
                IUI Treatment Doctor in Moradabad: Who It&apos;s For, How It
                Works, and What to Expect
              </h1>

              <p className="mb-4 text-gray-700">
                For many couples facing difficulty conceiving, Intrauterine
                Insemination (IUI) is often the first assisted reproductive
                treatment recommended — and for good reason. It is simpler, less
                invasive, and significantly more affordable than IVF, while
                still offering meaningful improvement in conception chances for
                the right candidates.
              </p>

              <p className="text-gray-700">
                This guide explains what IUI treatment involves, who it is best
                suited for, how the procedure is performed, and the factors that
                influence its success.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  IUI places specially prepared sperm directly into the uterus
                  around the time of ovulation, improving the chances of
                  fertilisation without the more complex steps involved in IVF
                </li>
                <li>
                  It is typically recommended for mild male factor infertility,
                  unexplained infertility, ovulation disorders, or as a first
                  step before considering IVF
                </li>
                <li>
                  Success depends heavily on female age, the underlying cause of
                  infertility, and semen quality — a specialist evaluation helps
                  set realistic expectations before starting
                </li>
                <li>
                  Each IUI cycle is relatively quick, low-risk, and involves
                  minimal recovery time compared to more advanced fertility
                  procedures
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is IUI Treatment?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A simplified route to fertilisation.</strong> IUI
                  involves placing washed, concentrated sperm directly into the
                  uterus at the time of ovulation, significantly shortening the
                  distance sperm need to travel compared to natural conception,
                  and bypassing certain barriers that might otherwise reduce
                  fertilisation chances.
                </li>
                <li>
                  <strong>Sperm preparation is a key step.</strong> Before
                  insemination, the sperm sample undergoes a &quot;washing&quot;
                  process that removes seminal fluid and concentrates the
                  healthiest, most motile sperm, improving the quality of what
                  is placed into the uterus.
                </li>
                <li>
                  <strong>It works with the body&apos;s natural cycle.</strong>{" "}
                  Unlike IVF, which retrieves eggs for fertilisation outside the
                  body, IUI still relies on natural ovulation and fertilisation
                  occurring within the fallopian tube, simply improving the odds
                  of sperm reaching the egg.
                </li>
                <li>
                  <strong>It can be done with or without ovulation-stimulating
                  medication.</strong> Depending on the individual case, IUI may
                  be timed with a natural cycle or combined with medication to
                  encourage the development and release of one or more mature
                  eggs.
                </li>
                <li>
                  <strong>It is a quick, outpatient procedure.</strong> The
                  insemination itself takes only a few minutes and requires no
                  anaesthesia, with most women resuming normal activity
                  immediately afterward.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Good Candidate for IUI?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Couples with mild male factor infertility.</strong>{" "}
                  When semen analysis shows mildly reduced sperm count or
                  motility, the sperm-washing and concentration process used in
                  IUI can meaningfully improve the chances of fertilisation.
                </li>
                <li>
                  <strong>Couples with unexplained infertility.</strong> When no
                  clear cause is identified despite thorough evaluation of both
                  partners, IUI is often recommended as a reasonable first-line
                  treatment before considering more complex options.
                </li>
                <li>
                  <strong>Women with ovulation disorders.</strong> Conditions
                  like PCOS that affect regular ovulation can often be managed
                  with ovulation-inducing medication combined with IUI, timing
                  insemination precisely around egg release.
                </li>
                <li>
                  <strong>Couples using donor sperm.</strong> IUI is a common
                  and effective method for achieving pregnancy using donor sperm,
                  whether due to male infertility or other circumstances.
                </li>
                <li>
                  <strong>Women with mild endometriosis.</strong> In
                  early-stage endometriosis without significant anatomical
                  distortion, IUI can be a reasonable first treatment option
                  before considering IVF.
                </li>
                <li>
                  <strong>Couples seeking a less invasive starting point.</strong>{" "}
                  For couples who prefer to try a simpler, more affordable
                  treatment before considering IVF, IUI is often a sensible
                  starting point, provided the underlying fertility factors make
                  it a suitable option.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When IUI Is Generally Not the Best Option
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Significant male factor infertility.</strong> When
                  sperm count or motility is very low, or DNA fragmentation is
                  significantly abnormal, IVF with more advanced sperm selection
                  techniques generally offers better chances of success.
                </li>
                <li>
                  <strong>Blocked or significantly damaged fallopian
                  tubes.</strong> Since IUI relies on natural fertilisation
                  within the fallopian tube, this treatment is not suitable when
                  both tubes are blocked or severely damaged.
                </li>
                <li>
                  <strong>Advanced-stage endometriosis.</strong> More severe
                  endometriosis affecting the pelvic anatomy typically responds
                  better to IVF than to IUI.
                </li>
                <li>
                  <strong>Significantly reduced ovarian reserve.</strong> In
                  cases of substantially diminished egg quantity or quality,
                  particularly in older women, IVF is often a more
                  time-efficient and higher-success option than repeated IUI
                  cycles.
                </li>
                <li>
                  <strong>Multiple previous unsuccessful IUI cycles.</strong>{" "}
                  After several unsuccessful attempts, a specialist typically
                  recommends reassessing the treatment plan and considering IVF
                  rather than continuing IUI indefinitely.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The IUI Treatment Process, Step by Step
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Initial fertility evaluation.</strong> Both partners
                  undergo evaluation — including semen analysis, ovulation
                  assessment, and, where relevant, tests to confirm the
                  fallopian tubes are open — to confirm IUI is a suitable
                  treatment option.
                </li>
                <li>
                  <strong>Ovulation monitoring or stimulation.</strong>{" "}
                  Depending on the individual case, the cycle may be tracked
                  naturally through ultrasound monitoring, or ovulation-inducing
                  medication may be used to encourage follicle development.
                </li>
                <li>
                  <strong>Precise ovulation timing.</strong> Regular ultrasound
                  scans and, where relevant, blood tests track follicle growth
                  to identify the optimal timing for insemination, ensuring the
                  procedure is timed as close to ovulation as possible.
                </li>
                <li>
                  <strong>Sperm sample collection and preparation.</strong> On
                  the day of the procedure, a fresh (or previously frozen) sperm
                  sample is collected and processed through a washing procedure
                  to concentrate the healthiest sperm.
                </li>
                <li>
                  <strong>The insemination procedure.</strong> A thin, flexible
                  catheter is used to place the prepared sperm sample directly
                  into the uterus, a quick procedure typically completed within
                  a few minutes with minimal discomfort.
                </li>
                <li>
                  <strong>Post-procedure rest and normal activity.</strong> Most
                  women rest briefly at the clinic before resuming normal daily
                  activities the same day, with no significant recovery period
                  required.
                </li>
                <li>
                  <strong>Follow-up and pregnancy testing.</strong> A pregnancy
                  test is typically recommended about two weeks after the
                  procedure, with the doctor guiding next steps based on the
                  outcome.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Influence IUI Success
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Female age.</strong> Younger women generally have
                  higher IUI success rates per cycle, given the direct
                  relationship between age and both egg quantity and quality.
                </li>
                <li>
                  <strong>The specific underlying cause of infertility.</strong>{" "}
                  Success rates vary depending on whether the cause is
                  ovulation-related, mild male factor, or unexplained
                  infertility, which is why an accurate diagnosis before starting
                  treatment matters.
                </li>
                <li>
                  <strong>Semen quality after preparation.</strong> Higher sperm
                  count and motility after the washing process are associated
                  with improved chances of success.
                </li>
                <li>
                  <strong>Whether ovulation induction medication is used.</strong>{" "}
                  Combining IUI with ovulation-stimulating medication generally
                  improves success rates compared to IUI performed during a
                  purely natural cycle, particularly in women with ovulation
                  irregularities.
                </li>
                <li>
                  <strong>Number of treatment cycles attempted.</strong>{" "}
                  Cumulative success over multiple cycles is generally higher
                  than the success rate of any single cycle, which is why a
                  specialist often recommends a defined number of attempts before
                  reassessing the approach.
                </li>
                <li>
                  <strong>Overall reproductive health of both partners.</strong>{" "}
                  Factors like uterine health, tubal patency, and general health
                  conditions in either partner all play a role in the likelihood
                  of success.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect: A Realistic Cycle Timeline
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycle monitoring begins early in the menstrual cycle,
                  typically around day 2 or 3, if ovulation induction medication
                  is being used.
                </li>
                <li>
                  Follicle tracking continues over roughly 10 to 12 days, with
                  periodic ultrasound scans to monitor development.
                </li>
                <li>
                  A trigger injection may be used, in some cases, to precisely
                  time ovulation before the insemination procedure.
                </li>
                <li>
                  The insemination procedure is scheduled approximately 24 to 36
                  hours after ovulation is triggered or detected, depending on
                  the specific protocol used.
                </li>
                <li>
                  A pregnancy test follows approximately two weeks later,
                  marking the end of that treatment cycle and the point at which
                  next steps are discussed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About IUI Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;IUI and IVF are essentially the
                  same procedure.&quot;{" "}
                  <strong>Fact:</strong> IUI places prepared sperm into the
                  uterus while fertilisation still occurs naturally inside the
                  body; IVF fertilises eggs outside the body before transferring
                  an embryo.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;IUI always works within the first
                  cycle.&quot;{" "}
                  <strong>Fact:</strong> Success varies by individual case, and
                  many couples require more than one cycle — cumulative success
                  across a defined number of attempts is a more realistic
                  measure than any single cycle.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;IUI is painful.&quot;{" "}
                  <strong>Fact:</strong> The procedure is generally quick and
                  only mildly uncomfortable, similar to a routine gynaecological
                  examination, with no anaesthesia required.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;IUI is only for male
                  infertility.&quot;{" "}
                  <strong>Fact:</strong> It is also used for unexplained
                  infertility, ovulation disorders, and with donor sperm, among
                  other indications.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;There&apos;s no benefit to trying
                  IUI before IVF.&quot;{" "}
                  <strong>Fact:</strong> For suitable candidates, IUI offers a
                  reasonable chance of success at a fraction of the cost and
                  complexity of IVF, making it a sensible first step when
                  clinically appropriate.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Age doesn&apos;t matter much for
                  IUI success.&quot;{" "}
                  <strong>Fact:</strong> Female age is one of the most
                  significant factors affecting IUI success rates, similar to
                  its impact on natural conception.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Fertility Specialist Matters for IUI
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Accurate candidate selection.</strong> A specialist
                  determines whether IUI is genuinely the right treatment based
                  on both partners&apos; full evaluation, rather than proceeding
                  without confirming suitability.
                </li>
                <li>
                  <strong>Precise ovulation timing.</strong> Success depends
                  heavily on accurate cycle monitoring and timing, which
                  requires experienced interpretation of ultrasound and hormonal
                  findings.
                </li>
                <li>
                  <strong>Appropriate use of ovulation induction
                  medication.</strong> Correct medication choice and dosing,
                  tailored to the individual&apos;s ovulation pattern,
                  meaningfully affects both safety and success.
                </li>
                <li>
                  <strong>Clear guidance on when to move to IVF.</strong> A
                  specialist helps set a realistic number of IUI attempts before
                  recommending a change in treatment approach, avoiding
                  prolonged, low-yield repetition.
                </li>
                <li>
                  <strong>Coordinated care for both partners.</strong> Since IUI
                  success depends on both female and male fertility factors, a
                  specialist ensures both are properly evaluated and managed
                  together throughout treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri&apos;s fertility and IVF practice in
                Moradabad offers IUI treatment as part of a comprehensive
                fertility care pathway, supported by advanced diagnostic tools
                including 3D/4D ultrasound monitoring and AI-powered semen
                analysis. Every IUI treatment plan begins with a thorough
                evaluation of both partners to confirm suitability and set
                realistic expectations from the outset.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your IUI Treatment Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                If you&apos;re exploring fertility treatment options, a thorough
                evaluation can determine whether IUI is the right starting point
                for your specific situation.
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