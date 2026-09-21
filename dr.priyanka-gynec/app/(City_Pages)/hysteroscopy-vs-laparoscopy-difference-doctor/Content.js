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

export default function HysteroscopyVsLaparoscopy() {
  const faqs = [
    {
      q: "What is the main difference between hysteroscopy and laparoscopy?",
      a: "Hysteroscopy examines the inside of the uterus through the vagina and cervix, while laparoscopy examines the pelvic organs through small abdominal incisions.",
    },
    {
      q: "Who offers both hysteroscopy and laparoscopy in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers expertise in both procedures as part of her surgical practice.",
    },
    {
      q: "Which procedure is used for ovarian cysts?",
      a: "Laparoscopy, since ovarian cysts are located outside the uterine cavity.",
    },
    {
      q: "Which procedure is used for uterine polyps?",
      a: "Hysteroscopy, since polyps are located within the uterine cavity.",
    },
    {
      q: "Does hysteroscopy leave scars?",
      a: "No, since it's performed through the vagina and cervix without any external incisions.",
    },
    {
      q: "Can both procedures be done at the same time?",
      a: "Yes, in many cases, particularly during fertility evaluations that require assessing both the uterine cavity and pelvic structures.",
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
      q: "Which procedure has a faster recovery?",
      a: "Hysteroscopy generally has a faster recovery, often just a day or two, compared to laparoscopy.",
    },
    {
      q: "Is laparoscopy used for endometriosis treatment?",
      a: "Yes, laparoscopy is the standard approach for diagnosing and treating endometriosis.",
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
                Hysteroscopy vs Laparoscopy: Understanding the Key Differences
              </h1>

              <p className="mb-4 text-gray-700">
                When a gynaecological condition requires surgical evaluation or
                treatment, patients often hear two similar-sounding terms —
                hysteroscopy and laparoscopy — and understandably wonder what
                actually separates them. While both are minimally invasive
                procedures used in modern gynaecology, they access completely
                different parts of the body, serve different diagnostic and
                treatment purposes, and involve different recovery experiences.
              </p>

              <p className="text-gray-700">
                Understanding this distinction can help you feel more informed
                and less anxious if either procedure is recommended to you. This
                article breaks down exactly how hysteroscopy and laparoscopy
                differ, when each is used, and why Dr. Priyanka Pachauri offers
                expertise in both procedures for patients in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Core Difference: What Each Procedure Actually Examines
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hysteroscopy</strong> examines the inside of the
                  uterus, using a thin instrument passed through the vagina and
                  cervix, with no external incisions required
                </li>
                <li>
                  <strong>Laparoscopy</strong> examines the outside of the
                  uterus and the broader pelvic and abdominal cavity, including
                  the ovaries, fallopian tubes, and surrounding structures,
                  using small incisions in the abdomen
                </li>
                <li>
                  This fundamental difference in access point is what determines
                  which conditions each procedure is best suited to diagnose and
                  treat
                </li>
                <li>
                  Some complex cases may require both procedures, either during
                  the same surgical session or as separate evaluations,
                  depending on the suspected condition
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Hysteroscopy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A thin, lighted instrument called a hysteroscope is inserted
                  through the vagina and cervix to directly visualize the inside
                  of the uterine cavity
                </li>
                <li>
                  No external incisions are made, since the entire procedure is
                  accessed through the body&apos;s natural openings
                </li>
                <li>
                  It can be purely diagnostic, simply examining the uterine
                  cavity, or therapeutic, treating a condition during the same
                  procedure
                </li>
                <li>
                  Common findings and treatments include uterine polyps,
                  submucosal fibroids, adhesions, and a uterine septum
                </li>
                <li>
                  Recovery is generally very quick, often within a day or two,
                  given the minimally invasive, incision-free nature of the
                  procedure
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Laparoscopy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A laparoscope, a thin instrument with a camera, is inserted
                  through one or more small incisions in the abdomen, typically
                  near the belly button
                </li>
                <li>
                  It allows the surgeon to view and operate on organs outside
                  the uterus, including the ovaries, fallopian tubes, and
                  surrounding pelvic structures
                </li>
                <li>
                  Used for both diagnosis and treatment, ranging from evaluating
                  unexplained pelvic pain to performing complex surgeries like
                  fibroid removal or hysterectomy
                </li>
                <li>
                  Requires small abdominal incisions, distinguishing it from the
                  incision-free approach used in hysteroscopy
                </li>
                <li>
                  Recovery typically takes somewhat longer than hysteroscopy,
                  though still significantly faster than traditional open surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Differences at a Glance
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                        Aspect
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                        Hysteroscopy
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                        Laparoscopy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                        Access Point
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Through the vagina and cervix, no incisions
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Through small abdominal incisions
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                        What It Examines
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        The inside of the uterine cavity only
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        The uterus&apos;s outer surface, ovaries, fallopian
                        tubes, and surrounding pelvic organs
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                        Common Conditions
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Uterine polyps, submucosal fibroids, adhesions, uterine
                        septum, abnormal uterine bleeding
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Ovarian cysts, endometriosis, ectopic pregnancy,
                        fibroids, unexplained pelvic pain, tubal blockages
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                        Anesthesia
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Local, regional, or sometimes general, depending on
                        complexity
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Typically general anesthesia
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                        Recovery Time
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Generally very fast, often just a day or two
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Typically a few days to a couple of weeks, depending on
                        complexity
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                        Incisions and Scarring
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        No external incisions or visible scarring
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Small incisions, usually leaving minimal, barely visible
                        scarring
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Hysteroscopy Is the Right Choice
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Investigating abnormal uterine bleeding, particularly when a
                  uterine cavity abnormality is suspected
                </li>
                <li>
                  Evaluating recurrent pregnancy loss or implantation failure,
                  where uterine cavity factors may play a role
                </li>
                <li>
                  Removing uterine polyps or submucosal fibroids that are
                  located within the uterine cavity
                </li>
                <li>
                  Correcting a uterine septum, a congenital condition affecting
                  the shape of the uterine cavity
                </li>
                <li>
                  Investigating and treating intrauterine adhesions, sometimes
                  related to previous surgery or infection
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Laparoscopy Is the Right Choice
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Investigating unexplained pelvic pain, which may originate
                  from the ovaries, fallopian tubes, or surrounding structures
                </li>
                <li>
                  Diagnosing and treating endometriosis, since this condition
                  affects tissue outside the uterine cavity
                </li>
                <li>
                  Removing ovarian cysts, using minimally invasive techniques
                  that preserve healthy ovarian tissue
                </li>
                <li>
                  Performing tubal procedures, such as evaluating for blockages
                  or performing sterilization
                </li>
                <li>
                  Removing fibroids affecting the outer uterine wall, or
                  performing a laparoscopic hysterectomy when indicated
                </li>
                <li>
                  Evaluating and treating certain fertility-related pelvic
                  conditions, particularly when the fallopian tubes or ovaries
                  are a concern
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can Hysteroscopy and Laparoscopy Be Performed Together
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yes, in many cases both procedures are performed during the
                  same surgical session, particularly when a comprehensive
                  evaluation of both the uterine cavity and pelvic structures is
                  needed
                </li>
                <li>
                  This combined approach can be more efficient, avoiding the
                  need for two separate procedures and recovery periods
                </li>
                <li>
                  It&apos;s especially common in fertility evaluations, where
                  both uterine cavity and pelvic/tubal factors need to be
                  assessed
                </li>
                <li>
                  Your surgeon will determine whether a combined approach is
                  appropriate based on your specific symptoms and suspected
                  condition
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery Comparison: What to Expect
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Hysteroscopy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild cramping or light spotting for a day or two is common
                </li>
                <li>
                  Most women resume normal activities within a day or two
                </li>
                <li>
                  Minimal to no downtime required for straightforward diagnostic
                  procedures
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Laparoscopy
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some abdominal soreness and possible shoulder pain from the
                  gas used during the procedure
                </li>
                <li>
                  Small bandages over the incision sites, with stitches that
                  typically dissolve or are removed at follow-up
                </li>
                <li>
                  Most women resume light activities within a few days, with
                  full recovery generally taking one to two weeks depending on
                  the complexity of the procedure performed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing a Surgeon Skilled in Both Procedures Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some conditions require evaluation of both the uterine cavity
                  and pelvic structures, making a surgeon comfortable with both
                  procedures valuable
                </li>
                <li>
                  A single, experienced surgical team can provide more
                  coordinated, efficient care rather than requiring referrals to
                  different specialists
                </li>
                <li>
                  Surgical skill in both techniques generally reflects broader
                  minimally invasive gynaecological expertise, which can benefit
                  even more complex cases
                </li>
                <li>
                  Continuity of care — from diagnosis through treatment and
                  follow-up — is easier to manage with one skilled surgeon
                  overseeing both aspects of care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Expertise in Both Hysteroscopy and
                Laparoscopy in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers both
                hysteroscopic and laparoscopic procedures as part of her
                comprehensive gynaecological surgical practice in Moradabad.
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
                , her services include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Diagnostic and Therapeutic Hysteroscopy</strong>, for
                  gentle endoscopic evaluation and treatment of the uterine
                  cavity
                </li>
                <li>
                  <strong>Hysteroscopic Polypectomy</strong>, for precision
                  removal of uterine polyps without incisions
                </li>
                <li>
                  <strong>Laparoscopic Cystectomy</strong>, using precision 3D
                  keyhole surgery to remove ovarian cysts while preserving
                  fertility
                </li>
                <li>
                  <strong>Laparoscopic Myomectomy</strong>, a uterus-preserving
                  3D laparoscopic procedure for uterine fibroids
                </li>
                <li>
                  <strong>Laparoscopic Hysterectomy</strong>, an advanced
                  minimally invasive keyhole procedure with fast recovery
                </li>
                <li>
                  <strong>Sacrocolpopexy</strong>, an advanced keyhole repair
                  for uterine and vaginal vault prolapse
                </li>
                <li>
                  <strong>Laparoscopic Sterilization</strong>, a safe, permanent
                  keyhole tubal ligation performed as a day-care procedure
                </li>
                <li>
                  <strong>High-Definition 3D Laparoscopic Surgery</strong>,
                  supporting precise, minimally invasive treatment across a
                  range of conditions
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This dual expertise allows Dr. Pachauri to offer coordinated,
                comprehensive care when a patient&apos;s condition requires
                evaluation of both the uterine cavity and broader pelvic
                structures. Her clinic&apos;s &quot;Her Health First&quot;
                philosophy ensures that whichever procedure is recommended,
                it&apos;s clearly explained, with time given to address questions
                and concerns. The clinic is located in Gandhi Nagar, Moradabad,
                making it accessible to patients across the city and surrounding
                areas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor When a Procedure Is Recommended
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Based on my symptoms, would hysteroscopy, laparoscopy, or both
                  be most appropriate?
                </li>
                <li>
                  What specific condition are we trying to diagnose or treat?
                </li>
                <li>
                  What type of anesthesia will be used, and what does recovery
                  typically involve?
                </li>
                <li>
                  How soon can I expect results or a treatment plan following
                  the procedure?
                </li>
                <li>
                  Are there any risks specific to my individual case that I
                  should be aware of?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Hysteroscopy and Laparoscopy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;They&apos;re the same procedure with different
                  names.&quot;</strong> They access completely different parts
                  of the body and are used for different purposes, despite both
                  being minimally invasive.
                </li>
                <li>
                  <strong>&quot;Laparoscopy always requires a long hospital
                  stay.&quot;</strong> Many laparoscopic procedures are
                  performed as day-care surgeries or require only a short
                  hospital stay.
                </li>
                <li>
                  <strong>&quot;Hysteroscopy is always purely
                  diagnostic.&quot;</strong> It can be both diagnostic and
                  therapeutic, often treating a condition during the same
                  procedure it&apos;s diagnosed in.
                </li>
                <li>
                  <strong>&quot;Both procedures always require general
                  anesthesia.&quot;</strong> Hysteroscopy can sometimes be
                  performed under local or regional anesthesia, depending on
                  complexity.
                </li>
                <li>
                  <strong>&quot;You&apos;ll always need both procedures for any
                  gynaecological surgery.&quot;</strong> Many conditions only
                  require one or the other, based on where the suspected issue
                  is located.
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