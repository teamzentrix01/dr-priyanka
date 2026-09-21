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

export default function HysteroscopyUterineSeptum() {
  const faqs = [
    {
      q: "What is a uterine septum?",
      a: "It's a congenital condition where a band of tissue partially or completely divides the uterine cavity.",
    },
    {
      q: "Who treats uterine septum in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers diagnostic and therapeutic hysteroscopy for septum correction.",
    },
    {
      q: "Does a uterine septum always cause miscarriage?",
      a: "Not always, but it's associated with a higher risk of first-trimester miscarriage and other pregnancy complications.",
    },
    {
      q: "How is a uterine septum treated?",
      a: "Through hysteroscopic septoplasty, a minimally invasive procedure to divide and correct the septum.",
    },
    {
      q: "Is septoplasty a major surgery?",
      a: "No, it's performed using a hysteroscope with no external incisions, and recovery is generally quick.",
    },
    {
      q: "How soon can I try to conceive after septoplasty?",
      a: "Typically after a short healing period, often a cycle or two, as advised by your doctor.",
    },
    {
      q: "How do I book a consultation for evaluation?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Can a uterine septum be diagnosed without surgery?",
      a: "Yes, imaging methods like 3D ultrasound, HSG, or MRI can often identify it, with hysteroscopy confirming the diagnosis.",
    },
    {
      q: "Does correcting a uterine septum improve IVF success?",
      a: "Yes, correcting the uterine cavity generally creates a more favorable environment for embryo implantation.",
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
                Hysteroscopy for Uterine Septum in Moradabad: Understanding and
                Treating a Common Congenital Condition
              </h1>

              <p className="mb-4 text-gray-700">
                A uterine septum is one of the most common congenital uterine
                abnormalities, yet many women live for years without knowing
                they have one — often discovering it only after experiencing
                recurrent miscarriages or difficulty conceiving. The good news
                is that this condition is highly treatable through a relatively
                straightforward, minimally invasive procedure called
                hysteroscopic septoplasty.
              </p>

              <p className="text-gray-700">
                In Moradabad, understanding this condition and finding a
                specialist experienced in its surgical correction can make a
                significant difference for women trying to build their families.
                This article explains what a uterine septum is, how it affects
                fertility and pregnancy, the treatment process, and why Dr.
                Priyanka Pachauri is a trusted specialist for hysteroscopic
                septum correction in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Uterine Septum
              </h2>

              <p className="mb-4 text-gray-700">
                A uterine septum is a congenital condition present from birth,
                where a band of fibrous or muscular tissue partially or
                completely divides the uterine cavity into two sections.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It develops during fetal development, when the two structures
                  that normally fuse to form the uterus don&apos;t merge
                  completely
                </li>
                <li>
                  It&apos;s one of the most common congenital uterine anomalies,
                  affecting a notable percentage of women, though many remain
                  undiagnosed
                </li>
                <li>
                  The septum itself has poor blood supply, which is part of why
                  it can interfere with embryo implantation and pregnancy
                  support
                </li>
                <li>
                  Severity varies significantly, ranging from a small partial
                  septum to one that divides the cavity almost completely
                </li>
                <li>
                  It&apos;s often discovered incidentally during fertility
                  evaluation or after experiencing pregnancy complications,
                  rather than through routine screening
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Uterine Septum Affects Fertility and Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reduced implantation success, since the septum&apos;s poor
                  blood supply doesn&apos;t support embryo attachment as well as
                  normal uterine tissue
                </li>
                <li>
                  Higher risk of first-trimester miscarriage, one of the most
                  commonly reported complications associated with an untreated
                  septum
                </li>
                <li>
                  Increased risk of preterm labor, since the septum can affect
                  how much the uterus can properly expand and support the
                  growing pregnancy
                </li>
                <li>
                  Abnormal fetal positioning, such as breech presentation, which
                  can occur more frequently due to the altered uterine shape
                </li>
                <li>
                  Recurrent pregnancy loss, particularly relevant for women who
                  have experienced multiple unexplained miscarriages
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                It&apos;s important to note that many women with a uterine
                septum do conceive and carry pregnancies successfully, but the
                risk of complications is notably higher compared to a normal
                uterine cavity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms and Signs That May Suggest a Uterine Septum
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recurrent first-trimester miscarriages, one of the most common
                  reasons this condition is eventually diagnosed
                </li>
                <li>
                  Difficulty conceiving, sometimes linked to reduced implantation
                  success
                </li>
                <li>
                  A history of preterm labor or abnormal fetal positioning in a
                  previous pregnancy
                </li>
                <li>
                  In many cases, no symptoms at all, with the condition being
                  discovered incidentally during fertility evaluation or imaging
                  for another reason
                </li>
                <li>
                  Rarely, painful periods or unusual bleeding patterns, though
                  these aren&apos;t the most typical presentation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Uterine Septum Is Diagnosed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pelvic ultrasound</strong>, particularly 3D ultrasound,
                  which can often identify the characteristic appearance of a
                  septate uterus
                </li>
                <li>
                  <strong>Hysterosalpingography (HSG)</strong>, an X-ray
                  procedure using contrast dye to outline the uterine cavity
                </li>
                <li>
                  <strong>MRI</strong>, sometimes used for more detailed
                  evaluation, particularly to distinguish a septate uterus from
                  other similar congenital conditions
                </li>
                <li>
                  <strong>Diagnostic hysteroscopy</strong>, offering direct
                  visualization of the uterine cavity and considered one of the
                  most accurate diagnostic methods
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A combination of imaging and hysteroscopy is often used to
                confirm the diagnosis and plan the appropriate surgical approach.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Hysteroscopic Septoplasty
              </h2>

              <p className="mb-4 text-gray-700">
                Hysteroscopic septoplasty is the standard surgical procedure
                used to correct a uterine septum.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It&apos;s performed using a hysteroscope, inserted through the
                  vagina and cervix, meaning no external incisions are required
                </li>
                <li>
                  The septum is carefully divided or resected, using specialized
                  surgical instruments passed through the hysteroscope
                </li>
                <li>
                  The uterus is not cut into or opened externally, distinguishing
                  this from older, more invasive surgical approaches used in the
                  past
                </li>
                <li>
                  It&apos;s typically performed as a day-care procedure, often
                  completed within 30 to 60 minutes depending on septum size and
                  complexity
                </li>
                <li>
                  Recovery is generally quick, with most women resuming normal
                  activities within a few days
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Hysteroscopic Correction
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Significantly improves pregnancy outcomes for women with a
                  history of recurrent miscarriage linked to a uterine septum
                </li>
                <li>
                  Minimally invasive approach means less pain, faster recovery,
                  and no visible external scarring compared to older surgical
                  techniques
                </li>
                <li>
                  Restores a more normal uterine cavity shape, supporting better
                  embryo implantation and pregnancy development
                </li>
                <li>
                  Can often be performed as an outpatient procedure, minimizing
                  disruption to daily life
                </li>
                <li>
                  High success rate, with many women going on to have successful
                  pregnancies following correction
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During and After the Procedure
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed under general or regional anesthesia, depending on
                  the specific case and hospital protocol
                </li>
                <li>
                  The procedure typically takes 30 to 60 minutes, though this
                  varies based on the size and complexity of the septum
                </li>
                <li>
                  Mild cramping or light spotting in the days following the
                  procedure is common and generally resolves quickly
                </li>
                <li>
                  A short recovery period is generally advised before attempting
                  conception or, if relevant, proceeding with IVF
                </li>
                <li>
                  A follow-up hysteroscopy or ultrasound is often recommended to
                  confirm the uterine cavity has healed properly and the
                  correction was successful
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is Septum Correction Recommended
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A history of recurrent miscarriage, particularly when other
                  causes have been ruled out
                </li>
                <li>
                  Difficulty conceiving, especially when combined with imaging
                  findings suggestive of a septum
                </li>
                <li>
                  Before starting IVF treatment, as a proactive step to optimize
                  the uterine environment for embryo transfer
                </li>
                <li>
                  A history of preterm labor or abnormal fetal positioning
                  linked to a suspected uterine anomaly
                </li>
                <li>
                  Incidental diagnosis in women planning pregnancy, even without
                  a prior history of complications, particularly if the septum
                  is significant in size
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery and Fertility Timeline After Septoplasty
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most women can resume normal daily activities within a few
                  days following the procedure
                </li>
                <li>
                  A waiting period, often a cycle or two, is generally
                  recommended before actively trying to conceive or beginning an
                  IVF cycle, allowing the uterine lining to heal fully
                </li>
                <li>
                  Follow-up evaluation confirms healing and helps determine the
                  right timing to proceed with conception attempts
                </li>
                <li>
                  Many women go on to conceive naturally after successful septum
                  correction, particularly if no other fertility factors are
                  present
                </li>
                <li>
                  For women pursuing IVF, the corrected uterine cavity generally
                  provides a more favorable environment for embryo transfer
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Hysteroscopic Septum Correction in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers diagnostic
                and therapeutic hysteroscopy as part of her comprehensive
                gynaecological and fertility practice in Moradabad.
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
                  as a gentle endoscopic evaluation and treatment of the uterine
                  cavity
                </li>
                <li>
                  <strong>Fertility evaluation and IVF services</strong>,
                  allowing septum correction to be coordinated as part of a
                  broader fertility treatment plan when relevant
                </li>
                <li>
                  <strong>Advanced diagnostic imaging</strong>, including a
                  Voluson E22 3D/4D ultrasound machine, useful for initial
                  identification of a suspected uterine septum
                </li>
                <li>
                  <strong>A &quot;Her Health First&quot; approach</strong>,
                  ensuring the emotional weight of recurrent pregnancy loss or
                  fertility difficulty is met with patience and clear
                  communication, not just clinical treatment
                </li>
                <li>
                  <strong>Coordinated care for recurrent pregnancy loss
                  evaluation</strong>, integrating septum correction alongside
                  other relevant fertility assessments
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently reflect feeling
                supported and well-informed throughout their treatment journey —
                particularly meaningful for women navigating the emotional
                experience of recurrent miscarriage before receiving a diagnosis
                and corrective treatment. The clinic is located in Gandhi Nagar,
                Moradabad, making it accessible to women from across the city
                and surrounding areas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor About Uterine Septum Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  How is a uterine septum diagnosed, and what tests will confirm
                  it in my case?
                </li>
                <li>
                  What size or type of septum do I have, and does it require
                  treatment?
                </li>
                <li>
                  What does the septoplasty procedure and recovery process
                  involve?
                </li>
                <li>
                  How soon after the procedure can I try to conceive or start
                  IVF?
                </li>
                <li>
                  What are the expected improvements in pregnancy outcomes after
                  correction, based on my specific situation?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Coping With the Emotional Impact of Recurrent Miscarriage
              </h2>

              <p className="mb-4 text-gray-700">
                For many women, a uterine septum diagnosis comes after the
                painful experience of recurrent pregnancy loss. A few points
                worth keeping in mind:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recurrent miscarriage is not your fault, and a structural
                  cause like a septum, once identified, is often correctable
                </li>
                <li>
                  Finally having an explanation can bring both relief and grief,
                  and both reactions are completely valid
                </li>
                <li>
                  Treatment offers real hope, since correction of a uterine
                  septum is associated with significantly improved pregnancy
                  outcomes for many women
                </li>
                <li>
                  It&apos;s okay to take time to process the diagnosis before
                  moving forward with treatment and future conception attempts
                </li>
                <li>
                  Support from a partner, family, or a counselor can be valuable
                  during this emotionally difficult period
                </li>
                <li>
                  Connecting with other women who&apos;ve experienced similar
                  diagnoses can help reduce feelings of isolation, whether
                  through support groups or informal conversations
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Hysteroscopic Septoplasty
              </h2>

              <p className="mb-4 text-gray-700">
                A little preparation can help the process go smoothly:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Discuss your full reproductive and pregnancy history with your
                  doctor, including details of any previous losses
                </li>
                <li>
                  Ask about the specific anesthesia plan for your procedure and
                  what to expect on the day
                </li>
                <li>
                  Arrange for someone to accompany you home, since you
                  won&apos;t be able to drive after anesthesia
                </li>
                <li>
                  Plan for a short rest period at home afterward, even though
                  recovery is generally quick
                </li>
                <li>
                  Prepare questions about your fertility timeline, including
                  when you can safely try to conceive or begin IVF after the
                  procedure
                </li>
                <li>
                  Bring any previous imaging or test results relevant to your
                  diagnosis to your pre-procedure consultation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Uterine Septum
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;A uterine septum always causes
                  infertility.&quot;</strong> Many women with a septum conceive
                  without difficulty, though the risk of miscarriage and certain
                  complications is higher without correction.
                </li>
                <li>
                  <strong>&quot;Septum correction requires major open
                  surgery.&quot;</strong> Modern hysteroscopic septoplasty is
                  minimally invasive, performed without external incisions.
                </li>
                <li>
                  <strong>&quot;If I&apos;ve had a healthy pregnancy before, I
                  don&apos;t need to worry about a septum.&quot;</strong> Some
                  women with a septum have varied pregnancy outcomes, so a
                  previous successful pregnancy doesn&apos;t rule out the
                  condition or its relevance to future risk.
                </li>
                <li>
                  <strong>&quot;Recovery from septoplasty takes several
                  weeks.&quot;</strong> Most women recover within just a few
                  days, given the minimally invasive nature of the procedure.
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