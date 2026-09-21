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

export default function HysteroscopyBeforeIVF() {
  const faqs = [
    {
      q: "What is hysteroscopy?",
      a: "It's a minimally invasive procedure that allows direct visualization of the inside of the uterus using a thin, lighted instrument.",
    },
    {
      q: "Why is hysteroscopy recommended before IVF?",
      a: "It helps detect and treat uterine cavity issues, like polyps or adhesions, that could affect embryo implantation.",
    },
    {
      q: "Who offers hysteroscopy before IVF in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers both hysteroscopy and IVF services as part of her fertility care.",
    },
    {
      q: "Is hysteroscopy painful?",
      a: "It's generally well-tolerated, performed under appropriate anesthesia depending on whether treatment is also being done.",
    },
    {
      q: "What can hysteroscopy detect before IVF?",
      a: "Polyps, submucosal fibroids, a uterine septum, adhesions, and signs suggestive of chronic endometritis.",
    },
    {
      q: "Does hysteroscopy delay the IVF process?",
      a: "It can often be scheduled efficiently within the overall IVF timeline, though some cases may need a short healing period first.",
    },
    {
      q: "How do I book a consultation?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Is hysteroscopy necessary if I haven't had a failed IVF cycle?",
      a: "Some specialists recommend it proactively even before a first cycle, though this depends on individual circumstances.",
    },
    {
      q: "Can findings be treated during the same hysteroscopy procedure?",
      a: "Yes, many conditions, such as polyps, can be treated in the same session as the diagnostic evaluation.",
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
                Hysteroscopy Before IVF: Why This Step Can Make a Real
                Difference in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                For couples preparing for IVF, every step in the preparation
                process matters — and one test that&apos;s increasingly
                recognized as valuable, yet often overlooked, is hysteroscopy.
                This simple, minimally invasive procedure allows a fertility
                specialist to directly examine the inside of the uterus before
                embryo transfer, catching subtle abnormalities that could
                otherwise reduce the chances of a successful pregnancy.
              </p>

              <p className="text-gray-700">
                In Moradabad, more fertility specialists are recommending
                hysteroscopy as a routine part of IVF preparation, recognizing
                that a healthy uterine cavity is just as important as a healthy
                embryo. This article explains what hysteroscopy involves, why
                it&apos;s recommended before IVF, what it can detect, and why
                Dr. Priyanka Pachauri&apos;s clinic is well-equipped to support
                this step of the fertility journey in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Hysteroscopy
              </h2>

              <p className="mb-4 text-gray-700">
                Hysteroscopy is a minimally invasive procedure that allows a
                doctor to directly visualize the inside of the uterus using a
                thin, lighted instrument called a hysteroscope.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The hysteroscope is inserted through the vagina and cervix,
                  meaning no external incisions are needed
                </li>
                <li>
                  It provides a direct, real-time view of the uterine cavity,
                  offering more detailed information than imaging alone in
                  certain cases
                </li>
                <li>
                  It can be diagnostic (just looking) or therapeutic (looking
                  and treating) during the same procedure
                </li>
                <li>
                  It&apos;s typically a quick procedure, often completed within
                  15 to 30 minutes depending on findings
                </li>
                <li>
                  Recovery is generally fast, with many women resuming normal
                  activities within a day or two
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Hysteroscopy Is Recommended Before IVF
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The uterine cavity is where the embryo will implant, so any
                  structural abnormality can directly affect implantation
                  success
                </li>
                <li>
                  Some uterine conditions don&apos;t show up clearly on standard
                  ultrasound, making direct visualization through hysteroscopy
                  valuable for a complete picture
                </li>
                <li>
                  Identifying and correcting issues before embryo transfer
                  avoids the emotional and financial cost of a failed cycle due
                  to a preventable, undetected factor
                </li>
                <li>
                  It&apos;s particularly recommended for women with a history of
                  failed IVF cycles, recurrent pregnancy loss, or abnormal
                  bleeding patterns
                </li>
                <li>
                  Even in women without obvious symptoms, some fertility
                  specialists recommend hysteroscopy as a precautionary step
                  before a first IVF cycle, particularly given how much is
                  invested — emotionally and financially — in each attempt
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Uterine Conditions Hysteroscopy Can Detect
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Uterine Polyps
              </h3>
              <p className="mb-4 text-gray-700">
                Small growths on the inner lining of the uterus that can
                interfere with embryo implantation. Often don&apos;t cause
                noticeable symptoms, making them easy to miss without direct
                visualization. Can typically be removed during the same
                hysteroscopy procedure.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Uterine Fibroids (Submucosal)
              </h3>
              <p className="mb-4 text-gray-700">
                Fibroids that grow into the uterine cavity, potentially
                distorting its shape and affecting implantation. Not all
                fibroids require treatment, but those affecting the cavity are
                often relevant to fertility outcomes.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Uterine Septum
              </h3>
              <p className="mb-4 text-gray-700">
                A congenital condition where a band of tissue partially divides
                the uterine cavity. Associated with higher rates of implantation
                failure and pregnancy loss if left uncorrected. Can often be
                corrected through a hysteroscopic procedure.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Intrauterine Adhesions (Asherman&apos;s Syndrome)
              </h3>
              <p className="mb-4 text-gray-700">
                Scar tissue within the uterine cavity, sometimes resulting from
                previous surgery or infection. Can significantly affect the
                uterine lining&apos;s ability to support implantation. Often
                treatable through hysteroscopic adhesion removal.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Chronic Endometritis
              </h3>
              <p className="mb-4 text-gray-700">
                A subtle, often symptom-free inflammation of the uterine lining.
                Increasingly recognized as a potential factor in repeated
                implantation failure. Hysteroscopy can help identify signs
                suggestive of this condition, sometimes alongside biopsy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Hysteroscopy Can Improve IVF Outcomes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Correcting structural abnormalities before embryo transfer
                  creates a more favorable environment for implantation
                </li>
                <li>
                  Identifying and removing polyps or fibroids can directly
                  improve the chances of a successful pregnancy
                </li>
                <li>
                  Detecting adhesions or a uterine septum allows for corrective
                  treatment that might otherwise have led to repeated failed
                  cycles
                </li>
                <li>
                  Providing reassurance when findings are normal, allowing
                  couples to proceed with embryo transfer with added confidence
                </li>
                <li>
                  Reducing the likelihood of unexplained IVF failure, since
                  uterine cavity issues are a recognized but sometimes
                  overlooked contributing factor
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Hysteroscopy Is Especially Recommended
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Before a first IVF cycle, as a precautionary evaluation,
                  particularly for women planning significant investment in the
                  process
                </li>
                <li>
                  After one or more failed IVF cycles, to rule out or address
                  uterine factors that may have contributed
                </li>
                <li>
                  In cases of recurrent pregnancy loss, since uterine
                  abnormalities can be a contributing factor
                </li>
                <li>
                  When abnormal uterine bleeding has been present, which may
                  indicate polyps, fibroids, or other conditions worth
                  evaluating
                </li>
                <li>
                  When earlier ultrasound findings suggest a possible uterine
                  cavity abnormality that needs further direct evaluation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During the Hysteroscopy Procedure
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The procedure is typically performed as a day-care procedure,
                  meaning no overnight hospital stay is usually required
                </li>
                <li>
                  Local, regional, or general anesthesia may be used, depending
                  on whether the procedure is purely diagnostic or involves
                  treatment
                </li>
                <li>
                  The hysteroscope is gently inserted through the cervix, and
                  the uterine cavity is examined using the camera and light at
                  its tip
                </li>
                <li>
                  If an abnormality like a polyp or adhesion is found, it can
                  often be treated during the same procedure using specialized
                  instruments
                </li>
                <li>
                  The entire procedure usually takes between 15 and 45 minutes,
                  depending on findings and whether treatment is needed
                  alongside diagnosis
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Hysteroscopy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most women can go home the same day, with recovery time
                  depending on the type of anesthesia used
                </li>
                <li>
                  Mild cramping or spotting for a day or two is common and
                  generally resolves quickly
                </li>
                <li>
                  Normal activities can usually resume within a day or two,
                  though your doctor will provide specific guidance based on
                  your procedure
                </li>
                <li>
                  A short waiting period is often recommended before proceeding
                  to embryo transfer, allowing the uterine lining to heal fully
                  if any treatment was performed
                </li>
                <li>
                  Follow-up consultation typically confirms healing and helps
                  plan the next steps in the IVF timeline
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Timing Matters When Scheduling Hysteroscopy Before IVF
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysteroscopy is generally recommended in the cycle before your
                  planned IVF stimulation, allowing time for any necessary
                  treatment and healing
                </li>
                <li>
                  If a corrective procedure is performed, such as polyp removal,
                  a brief recovery period is generally advised before proceeding
                  to embryo transfer
                </li>
                <li>
                  Coordinating the timing with your overall IVF protocol ensures
                  this step doesn&apos;t unnecessarily delay your treatment plan
                </li>
                <li>
                  Your fertility specialist will help determine the ideal timing
                  based on your specific IVF schedule and any findings from the
                  procedure
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Hysteroscopy and IVF Preparation in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers both
                hysteroscopy and comprehensive IVF services as part of her
                fertility care practice in Moradabad, allowing this important
                preparatory step to be seamlessly integrated into the overall
                fertility treatment plan.
              </p>

              <p className="mb-4 text-gray-700">
                According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her relevant services include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Diagnostic and Therapeutic Hysteroscopy</strong>,
                  explicitly listed among her specialized procedures, described
                  as a gentle endoscopic evaluation of the uterine cavity
                </li>
                <li>
                  <strong>Hysteroscopic Polypectomy</strong>, for the precision
                  removal of uterine polyps without any incisions
                </li>
                <li>
                  <strong>Fertility evaluation and IVF services</strong>,
                  supported by a GERI time-lapse embryo incubator and
                  AI-powered semen analysis with DNA integrity testing
                </li>
                <li>
                  <strong>A &quot;Her Health First&quot; approach</strong>,
                  ensuring findings and recommendations are explained clearly,
                  particularly important given the emotional investment involved
                  in IVF treatment
                </li>
                <li>
                  <strong>Integrated care coordination</strong>, allowing
                  hysteroscopy findings to be directly factored into IVF cycle
                  planning without the delay of coordinating with a separate
                  facility
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently highlight
                feeling well-guided and supported throughout their fertility
                treatment journey — an important quality when navigating an
                additional preparatory step like hysteroscopy before IVF. The
                clinic is located in Gandhi Nagar, Moradabad, making it
                accessible to couples from across the city and surrounding
                areas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Fertility Specialist About Hysteroscopy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Is hysteroscopy recommended for my specific situation before
                  starting IVF?
                </li>
                <li>
                  What type of anesthesia will be used, and what does recovery
                  typically look like?
                </li>
                <li>
                  If an abnormality is found, can it be treated during the same
                  procedure?
                </li>
                <li>
                  How will this affect the timing of my IVF cycle?
                </li>
                <li>
                  What are the chances that hysteroscopy findings could change
                  my treatment plan?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Considerations When Adding This Step to Your IVF
                Journey
              </h2>

              <p className="mb-4 text-gray-700">
                Learning that an additional procedure is recommended before IVF
                can feel discouraging, especially for couples eager to begin
                treatment. A few perspectives can help:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Think of it as an investment in your IVF success, rather than
                  an unnecessary delay, since it addresses factors that could
                  otherwise reduce your chances
                </li>
                <li>
                  A normal finding provides valuable reassurance, allowing you
                  to move forward with greater confidence
                </li>
                <li>
                  If a correctable issue is found, treating it now is generally
                  far less emotionally taxing than experiencing a failed cycle
                  later without knowing why
                </li>
                <li>
                  Ask your doctor to explain the reasoning clearly, so the
                  recommendation feels like an informed part of your plan rather
                  than an arbitrary extra step
                </li>
                <li>
                  Give yourself grace during this part of the process, since
                  every additional test or procedure can add emotional weight to
                  an already demanding journey
                </li>
                <li>
                  Lean on your support system, whether that&apos;s your partner,
                  family, or a counselor, as you navigate each step of IVF
                  preparation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Hysteroscopy Fits Into the Broader IVF Preparation Process
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Baseline hormonal and ovarian reserve testing typically
                  happens alongside or before hysteroscopy is considered
                </li>
                <li>
                  Semen analysis and male fertility evaluation often proceed in
                  parallel, ensuring both partners&apos; factors are assessed
                </li>
                <li>
                  Hysteroscopy specifically addresses the uterine environment,
                  complementing other tests that assess egg quality, sperm
                  health, and hormonal balance
                </li>
                <li>
                  Once hysteroscopy findings are reviewed and any treatment has
                  healed, the IVF stimulation protocol can typically proceed as
                  planned
                </li>
                <li>
                  Your fertility specialist will coordinate the full sequence of
                  tests and procedures, ensuring each step builds toward the
                  best possible outcome for your embryo transfer
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Hysteroscopy Before IVF
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;If my ultrasound was normal, hysteroscopy
                  isn&apos;t necessary.&quot;</strong> Some uterine cavity
                  abnormalities aren&apos;t always clearly visible on standard
                  ultrasound, which is why direct visualization can add valuable
                  information.
                </li>
                <li>
                  <strong>&quot;Hysteroscopy always delays the IVF process
                  significantly.&quot;</strong> In many cases, it can be
                  scheduled efficiently within the overall IVF timeline without
                  major delay.
                </li>
                <li>
                  <strong>&quot;It&apos;s only necessary after a failed IVF
                  cycle.&quot;</strong> Many fertility specialists recommend it
                  proactively, even before a first cycle, particularly given
                  what&apos;s at stake with each attempt.
                </li>
                <li>
                  <strong>&quot;Hysteroscopy is a major, invasive
                  surgery.&quot;</strong> It&apos;s a minimally invasive,
                  typically quick procedure with a relatively short recovery
                  period.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

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
                      <p className="font-semibold">Call</p>
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
                      <p className="font-semibold">Clinic Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
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
                Frequently Asked Questions (FAQ)
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
