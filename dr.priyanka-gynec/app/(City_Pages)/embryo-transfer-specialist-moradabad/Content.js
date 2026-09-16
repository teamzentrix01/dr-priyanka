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

export default function EmbryoTransfer() {
  const faqs = [
    {
      q: "Is embryo transfer painful?",
      a: "No, it is generally a quick, minimally uncomfortable procedure similar to a routine gynaecological exam.",
    },
    {
      q: "Is frozen embryo transfer less effective than fresh transfer?",
      a: "No, with modern freezing technology, frozen transfer success rates are comparable to fresh transfer in many cases.",
    },
    {
      q: "How long does the embryo transfer procedure take?",
      a: "The full appointment, including preparation, typically takes 15 to 30 minutes, with the transfer itself taking only moments.",
    },
    {
      q: "Do I need bed rest after embryo transfer?",
      a: "No, extended bed rest has not been shown to improve success; gentle normal activity is generally recommended instead.",
    },
    {
      q: "How soon can I take a pregnancy test after transfer?",
      a: "A blood test is typically recommended 10 to 14 days after transfer for an accurate result.",
    },
    {
      q: "Is blastocyst transfer always better than day-3 transfer?",
      a: "Not always — the right choice depends on the number and quality of embryos available in each individual case.",
    },
    {
      q: "How many embryos are usually transferred at once?",
      a: "This depends on individual factors, but single embryo transfer is often recommended when a high-quality embryo is available, to reduce multiple pregnancy risk.",
    },
    {
      q: "What happens if the embryo transfer doesn't result in pregnancy?",
      a: "The fertility team reviews the cycle details and discusses next steps, which may include a subsequent frozen embryo transfer if additional embryos are available.",
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
                Embryo Transfer Specialist in Moradabad: The Final, Critical
                Step of IVF
              </h1>

              <p className="mb-4 text-gray-700">
                After weeks of ovarian stimulation, egg retrieval, and
                fertilisation, embryo transfer is the culminating step of an IVF
                cycle — the moment an embryo is placed into the uterus with the
                hope of implantation and pregnancy. While it may seem like a
                simple final step, the precision, timing, and technology behind
                embryo transfer significantly influence the overall success of
                an IVF cycle.
              </p>

              <p className="text-gray-700">
                This guide explains what embryo transfer involves, the choices
                patients make along the way, and what actually improves the
                odds of success.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Embryo transfer is a quick, generally painless procedure, but
                  the preparation and decision-making leading up to it are what
                  most influence its success
                </li>
                <li>
                  Choices such as fresh versus frozen transfer, and day-3 versus
                  blastocyst-stage transfer, are individually tailored based on
                  each patient&apos;s specific situation
                </li>
                <li>
                  Advanced technology like time-lapse embryo imaging helps
                  embryologists select the embryo with the highest implantation
                  potential
                </li>
                <li>
                  Post-transfer care matters less for strict activity
                  restriction and more for stress management, medication
                  adherence, and timely follow-up
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Embryo Transfer?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>The step where the embryo meets the uterus.</strong>{" "}
                  Embryo transfer is the procedure in which one or more embryos,
                  created through IVF, are placed directly into the uterine
                  cavity using a thin, flexible catheter, aiming for
                  implantation and pregnancy.
                </li>
                <li>
                  <strong>It is typically quick and doesn&apos;t require
                  anaesthesia.</strong> The procedure itself usually takes only
                  a few minutes and is generally described as similar to a
                  routine gynaecological examination, performed under ultrasound
                  guidance for precision.
                </li>
                <li>
                  <strong>It follows a carefully planned sequence.</strong>{" "}
                  Embryo transfer occurs only after egg retrieval,
                  fertilisation, and a period of embryo development and
                  assessment in the laboratory, ensuring the embryo chosen has
                  the best possible implantation potential.
                </li>
                <li>
                  <strong>Multiple embryo stages can be transferred.</strong>{" "}
                  Depending on the clinical situation, embryos may be
                  transferred on day 3 (cleavage stage) or day 5 (blastocyst
                  stage) of development, each with its own considerations.
                </li>
                <li>
                  <strong>It can be performed fresh or after freezing.</strong>{" "}
                  A fresh transfer occurs within the same cycle as egg
                  retrieval, while a frozen embryo transfer (FET) uses embryos
                  that were previously frozen and are thawed for transfer in a
                  later cycle.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fresh vs. Frozen Embryo Transfer: Key Considerations
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fresh transfer follows the same cycle as egg
                  retrieval.</strong> This avoids the wait associated with a
                  separate frozen cycle but requires the uterine lining to be
                  appropriately prepared in the same timeframe as ovarian
                  stimulation.
                </li>
                <li>
                  <strong>Frozen transfer allows the uterine environment to be
                  optimised separately.</strong> Because stimulation medication
                  can sometimes affect the uterine lining, transferring in a
                  later, unstimulated or minimally stimulated cycle can, in
                  select cases, offer a more favourable implantation
                  environment.
                </li>
                <li>
                  <strong>Frozen transfer also allows time for additional
                  embryo testing, if needed.</strong> When genetic testing of
                  embryos is part of the treatment plan, freezing is required to
                  allow time for test results before selecting the embryo for
                  transfer.
                </li>
                <li>
                  <strong>The choice depends on individual clinical
                  factors.</strong> Hormone levels, uterine lining thickness,
                  risk of ovarian hyperstimulation, and the number of embryos
                  available all factor into whether a fresh or frozen approach
                  is recommended for a specific patient.
                </li>
                <li>
                  <strong>Both approaches have strong success
                  potential.</strong> Advances in freezing technology
                  (vitrification) mean frozen embryo transfer success rates are
                  now comparable to, and in some cases better than, fresh
                  transfer, depending on individual circumstances.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Day-3 vs. Day-5 (Blastocyst) Transfer
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Day-3 transfer occurs at the cleavage stage.</strong>{" "}
                  At this point, the embryo has typically divided into around
                  six to eight cells, and transfer at this stage may be
                  recommended when fewer embryos are available for extended
                  observation.
                </li>
                <li>
                  <strong>Day-5 (blastocyst) transfer allows more time for
                  natural selection in the lab.</strong> By day five, embryos
                  have developed further, and this additional time allows
                  embryologists to identify those with the strongest
                  developmental potential, often improving the likelihood of
                  selecting a viable embryo.
                </li>
                <li>
                  <strong>Blastocyst transfer is generally associated with
                  higher implantation rates per embryo transferred.</strong>{" "}
                  Because weaker embryos are more likely to stop developing
                  before reaching this stage, embryos that do reach blastocyst
                  stage tend to have a higher individual likelihood of
                  successful implantation.
                </li>
                <li>
                  <strong>The right choice depends on the number and quality of
                  available embryos.</strong> When only a few embryos are
                  available, an embryologist may recommend an earlier transfer
                  rather than risk losing viable embryos during extended
                  culture.
                </li>
                <li>
                  <strong>Both approaches are guided by embryologist
                  assessment.</strong> The decision is made collaboratively
                  between the fertility specialist and embryology team based on
                  each patient&apos;s specific embryo development pattern.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Role of Time-Lapse Imaging in Embryo Selection
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Continuous monitoring without disturbing the
                  embryo.</strong> Time-lapse imaging technology captures images
                  of developing embryos at frequent intervals inside the
                  incubator, allowing embryologists to observe development
                  patterns without removing embryos for manual inspection.
                </li>
                <li>
                  <strong>More detailed insight into developmental
                  timing.</strong> Subtle differences in how and when embryos
                  divide can be important indicators of viability, and
                  time-lapse systems capture this level of detail that periodic
                  manual checks might miss.
                </li>
                <li>
                  <strong>Supports more confident embryo selection.</strong>{" "}
                  When multiple embryos are available, this detailed
                  developmental data helps the embryology team identify the
                  embryo (or embryos) with the strongest implantation potential.
                </li>
                <li>
                  <strong>Reduces environmental disruption to developing
                  embryos.</strong> Because embryos remain undisturbed in a
                  stable incubator environment throughout monitoring, this
                  technology supports optimal development conditions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During the Embryo Transfer Procedure
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pre-procedure preparation.</strong> Patients are
                  typically asked to arrive with a moderately full bladder,
                  which helps with ultrasound visualisation and correct catheter
                  placement during the procedure.
                </li>
                <li>
                  <strong>Confirmation of the embryo before transfer.</strong>{" "}
                  The embryology team confirms the specific embryo (or embryos)
                  selected for transfer immediately before the procedure, with
                  the patient informed of the details.
                </li>
                <li>
                  <strong>Ultrasound-guided catheter placement.</strong> Using
                  abdominal ultrasound for guidance, the doctor gently passes a
                  thin catheter through the cervix to place the embryo at the
                  optimal location within the uterine cavity.
                </li>
                <li>
                  <strong>The transfer itself is quick.</strong> The actual
                  placement of the embryo takes only moments, with the entire
                  procedure, including preparation, typically completed within
                  15 to 30 minutes.
                </li>
                <li>
                  <strong>Brief rest before discharge.</strong> Most clinics
                  recommend a short rest period immediately afterward, though
                  extended bed rest has not been shown to meaningfully improve
                  outcomes.
                </li>
                <li>
                  <strong>Return to most normal activities the same day.</strong>{" "}
                  Beyond avoiding strenuous exercise for a short period as
                  advised by the doctor, most patients can resume normal daily
                  activities shortly after the procedure.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Influence Embryo Transfer Success
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Embryo quality.</strong> The developmental grade and
                  genetic health of the embryo being transferred is one of the
                  most significant factors in implantation success.
                </li>
                <li>
                  <strong>Uterine lining thickness and receptivity.</strong> An
                  adequately thickened, well-prepared uterine lining is
                  essential for successful implantation, and this is carefully
                  monitored before transfer is scheduled.
                </li>
                <li>
                  <strong>Female age at the time of egg retrieval.</strong>{" "}
                  Since embryo quality is closely linked to the age of the eggs
                  used, this remains a significant factor even when a frozen
                  embryo transfer occurs at a later age.
                </li>
                <li>
                  <strong>Timing precision.</strong> Transferring the embryo at
                  the correct point in the uterine lining&apos;s receptive
                  window meaningfully affects implantation chances.
                </li>
                <li>
                  <strong>Underlying uterine or hormonal conditions.</strong>{" "}
                  Conditions such as fibroids, polyps, or hormonal imbalances
                  affecting the uterine environment are typically addressed
                  before transfer to optimise conditions for implantation.
                </li>
                <li>
                  <strong>Laboratory conditions and technology.</strong> The
                  quality of embryology laboratory conditions, including
                  incubation technology and handling protocols, plays a
                  meaningful role in maintaining embryo viability up to the
                  point of transfer.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Post-Transfer Care: What Actually Helps
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Continue prescribed medication precisely as
                  directed.</strong> Hormonal support after transfer is
                  important for maintaining the uterine environment, and
                  consistent adherence matters more than any activity
                  restriction.
                </li>
                <li>
                  <strong>Avoid strenuous exercise, but extended bed rest
                  isn&apos;t necessary.</strong> Current evidence does not
                  support that extended bed rest improves implantation rates;
                  gentle normal activity is generally appropriate unless
                  specifically advised otherwise.
                </li>
                <li>
                  <strong>Manage stress where possible.</strong> While stress
                  alone is unlikely to prevent implantation, reducing
                  unnecessary anxiety supports overall wellbeing during this
                  waiting period.
                </li>
                <li>
                  <strong>Avoid alcohol and smoking.</strong> These are avoided
                  both for general health during a potential early pregnancy and
                  because they can affect implantation and early embryo
                  development.
                </li>
                <li>
                  <strong>Attend the follow-up pregnancy test as
                  scheduled.</strong> A blood test approximately 10 to 14 days
                  after transfer provides a clear, accurate result, and testing
                  too early with home kits can lead to inaccurate or confusing
                  results.
                </li>
                <li>
                  <strong>Reach out with concerns rather than waiting.</strong>{" "}
                  Any unusual symptoms during the waiting period should be
                  discussed with the clinic promptly rather than left
                  unaddressed until the follow-up appointment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Embryo Transfer
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Bed rest after transfer
                  significantly improves success.&quot;{" "}
                  <strong>Fact:</strong> Research does not support extended bed
                  rest as improving implantation rates; normal, gentle activity
                  is generally fine.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Frozen embryo transfer has lower
                  success than fresh transfer.&quot;{" "}
                  <strong>Fact:</strong> With modern vitrification technology,
                  frozen transfer success rates are now comparable to, and
                  sometimes better than, fresh transfer.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;More embryos transferred means a
                  higher chance of success.&quot;{" "}
                  <strong>Fact:</strong> Transferring multiple embryos increases
                  the risk of multiple pregnancy without proportionally
                  improving overall success, which is why single embryo
                  transfer is often recommended when a high-quality embryo is
                  available.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;A blastocyst-stage embryo is
                  always better than a day-3 embryo.&quot;{" "}
                  <strong>Fact:</strong> The right stage depends on the number
                  and quality of available embryos in each specific case, not a
                  universal rule.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;You&apos;ll know immediately if
                  the transfer worked.&quot;{" "}
                  <strong>Fact:</strong> A reliable result requires waiting for
                  the scheduled blood test, since early symptoms are not a
                  reliable indicator either way.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;The transfer procedure itself is
                  painful.&quot;{" "}
                  <strong>Fact:</strong> Most patients describe it as similar to
                  a routine gynaecological exam, with minimal discomfort.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri&apos;s fertility and IVF practice in
                Moradabad combines precise, ultrasound-guided embryo transfer
                technique with advanced laboratory technology, including
                time-lapse embryo imaging, to support informed embryo selection
                and optimal transfer timing. Every step, from embryo development
                monitoring to the transfer procedure itself, is approached with
                the goal of giving each patient&apos;s cycle the strongest
                possible chance of success.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Embryo Transfer Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Whether you&apos;re starting your first IVF cycle or planning a
                frozen embryo transfer, a personalised consultation ensures your
                embryo transfer is planned with the timing and precision it
                requires.
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