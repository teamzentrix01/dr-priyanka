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

export default function HysteroscopyDayCareProcedure() {
  const faqs = [
    {
      q: "Which doctor performs hysteroscopy in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers both diagnostic and operative hysteroscopy.",
    },
    {
      q: "Is hysteroscopy a major surgery?",
      a: "No, it is a minimally invasive day care procedure with no external incisions.",
    },
    {
      q: "How long does the procedure take?",
      a: "Typically 15 to 45 minutes, depending on whether treatment is performed during the same session.",
    },
    {
      q: "Will I need to stay overnight in the hospital?",
      a: "Usually not; most patients go home the same day after a short recovery period.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "What conditions can hysteroscopy help diagnose or treat?",
      a: "Abnormal bleeding, uterine polyps, certain fibroids, and structural abnormalities affecting fertility.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with questions before my procedure?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Is recovery after hysteroscopy long?",
      a: "No, most patients resume light activities within a day or two after the procedure.",
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
                Hysteroscopy Day Care Procedure in Moradabad: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Hysteroscopy is one of the most valuable diagnostic and
                treatment tools in modern gynaecology, allowing doctors to
                directly view and treat conditions inside the uterus without
                major surgery. Performed as a quick day care procedure, it
                offers women an accurate diagnosis and, in many cases, immediate
                treatment, all with minimal downtime.
              </p>

              <p className="text-gray-700">
                This guide explains what hysteroscopy involves, when
                it&apos;s recommended, and how to find the right specialist for
                a hysteroscopy day care procedure in Moradabad — including
                details about Dr. Priyanka Pachauri, a well-known gynaecologist
                in the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Hysteroscopy?
              </h2>

              <p className="mb-4 text-gray-700">
                Hysteroscopy is a procedure in which a thin, lighted
                telescope-like instrument called a hysteroscope is passed
                through the vagina and cervix into the uterus, allowing the
                doctor to directly view the inside of the uterine cavity on a
                screen.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It can be performed for diagnostic purposes (to look and
                  identify a problem) or operative purposes (to treat a problem
                  at the same time)
                </li>
                <li>
                  It does not require any external incisions, since the
                  instrument is passed through the natural body opening
                </li>
                <li>
                  It is typically performed as a day care procedure, meaning the
                  patient usually goes home the same day
                </li>
                <li>
                  It provides much more detailed information about the uterine
                  cavity than ultrasound alone in many cases
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Hysteroscopy Is Recommended
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Investigating abnormal uterine bleeding – heavy, prolonged, or
                  irregular bleeding often needs a direct look inside the uterus
                  to identify the cause
                </li>
                <li>
                  Evaluating infertility or recurrent pregnancy loss – checking
                  for uterine abnormalities that might affect implantation or
                  pregnancy
                </li>
                <li>
                  Removing uterine polyps – small growths that can cause
                  abnormal bleeding
                </li>
                <li>
                  Removing certain fibroids (submucosal) – fibroids located just
                  beneath the uterine lining
                </li>
                <li>
                  Investigating suspected uterine septum or other structural
                  abnormalities
                </li>
                <li>
                  Removing retained products after miscarriage or delivery, in
                  certain cases
                </li>
                <li>
                  Evaluating the uterine cavity before fertility treatment, such
                  as before IVF
                </li>
                <li>
                  Removing or repositioning a misplaced IUD, if needed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostic vs Operative Hysteroscopy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Diagnostic hysteroscopy</strong> – performed purely to
                  look inside the uterus and identify any abnormality; often a
                  quicker, simpler procedure
                </li>
                <li>
                  <strong>Operative hysteroscopy</strong> – performed to both
                  diagnose and treat a condition in the same sitting, such as
                  removing a polyp or small fibroid immediately upon
                  identification
                </li>
                <li>
                  Many patients undergo what starts as a diagnostic procedure
                  that becomes operative if a treatable finding, like a polyp,
                  is identified during the same session
                </li>
                <li>
                  Your doctor will discuss beforehand what to expect based on
                  your specific symptoms and initial findings
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why It&apos;s Considered a Day Care Procedure
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The procedure itself is generally quick, often taking between
                  15 to 45 minutes depending on complexity
                </li>
                <li>
                  It typically doesn&apos;t require an overnight hospital stay
                  for most cases
                </li>
                <li>
                  Recovery time is generally short, allowing most patients to
                  resume light activities within a day or two
                </li>
                <li>
                  The absence of external incisions significantly reduces
                  recovery time compared to open surgery
                </li>
                <li>
                  Anaesthesia used is often lighter (local, regional, or brief
                  general anaesthesia), supporting same-day discharge
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect Before, During, and After the Procedure
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before the Procedure
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A pre-procedure consultation to review your symptoms, medical
                  history, and relevant test results
                </li>
                <li>
                  Basic pre-operative tests, such as blood tests, as advised by
                  your doctor
                </li>
                <li>
                  Instructions on fasting before the procedure, particularly if
                  anaesthesia will be used
                </li>
                <li>
                  A clear explanation of what the procedure will involve and
                  what findings might mean
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During the Procedure
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You will typically be positioned similarly to a routine
                  gynaecological examination
                </li>
                <li>
                  The hysteroscope is gently passed through the vagina and
                  cervix into the uterus
                </li>
                <li>
                  A clear fluid or gas is often used to gently expand the
                  uterine cavity for better visibility
                </li>
                <li>
                  The doctor examines the uterine lining and, if needed,
                  performs treatment (like polyp removal) during the same
                  session
                </li>
                <li>
                  The procedure is monitored closely for your comfort and safety
                  throughout
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After the Procedure
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You&apos;ll typically rest in a recovery area for a short
                  period before being discharged
                </li>
                <li>
                  Mild cramping or light spotting for a day or two is common and
                  usually resolves on its own
                </li>
                <li>
                  Most patients can resume normal light activities within a day,
                  with full recovery guidance provided by your doctor
                </li>
                <li>
                  A follow-up appointment is usually scheduled to discuss
                  findings, results of any tissue sent for testing, and next
                  steps
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Your Hysteroscopy Results
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Normal findings</strong> – no structural abnormality
                  identified; further evaluation of your symptoms may focus on
                  other causes
                </li>
                <li>
                  <strong>Polyps or small fibroids identified and removed</strong>{" "}
                  – often sent for pathology testing to confirm they are
                  non-cancerous
                </li>
                <li>
                  <strong>Structural abnormalities identified</strong> – such as
                  a uterine septum, which may require further treatment planning
                </li>
                <li>
                  <strong>Biopsy results, if taken</strong> – typically
                  available within a few days to a week
                </li>
                <li>
                  <strong>Clear explanation from your doctor</strong> – on what
                  the findings mean and any recommended next steps
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Doctor for Hysteroscopy Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Skilled, gentle technique significantly improves patient
                  comfort during the procedure
                </li>
                <li>
                  Experienced doctors can accurately distinguish between normal
                  variations and true abnormalities
                </li>
                <li>
                  The ability to perform operative treatment in the same sitting
                  saves patients from needing a second procedure
                </li>
                <li>
                  Proper handling of removed tissue for pathology ensures
                  accurate diagnosis
                </li>
                <li>
                  Clear communication about findings helps patients understand
                  their results without unnecessary worry
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Specialist for Hysteroscopy in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a
                well-recognised gynaecologist in Moradabad offering both
                diagnostic and operative hysteroscopy as part of comprehensive
                gynaecological care. Her clinic follows the guiding principle of
                &quot;Her Health First,&quot; ensuring every patient receives a
                comfortable, well-explained procedure experience.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Relevant Services Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diagnostic hysteroscopy – for evaluating abnormal bleeding,
                  infertility, or suspected uterine abnormalities
                </li>
                <li>
                  Hysteroscopic polypectomy – for removing uterine polyps in the
                  same sitting as diagnosis
                </li>
                <li>
                  3D laparoscopic gynaecological surgery – for more complex
                  cases requiring additional surgical approach
                </li>
                <li>
                  Laparoscopic myomectomy for fibroids not suitable for
                  hysteroscopic removal
                </li>
                <li>
                  Fertility evaluation and IVF treatment, often supported by
                  hysteroscopic evaluation of the uterine cavity
                </li>
                <li>
                  Pregnancy, antenatal, and postnatal care
                </li>
                <li>
                  Gynaecology and general women&apos;s health consultations
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Supporting Accurate Hysteroscopy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Modern hysteroscopic equipment for clear, detailed
                  visualisation of the uterine cavity
                </li>
                <li>
                  3D & 4D ultrasound machines for complementary pre-procedure
                  evaluation
                </li>
                <li>
                  An integrated care approach connecting hysteroscopy findings
                  with your overall gynaecological or fertility treatment plan
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Trust This Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                According to the clinic&apos;s own patient communication, trust
                is built on:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Expertise with heart</strong> – strong academic
                  credentials and specialised fellowship training in gynaecology
                  and minimally invasive procedures
                </li>
                <li>
                  <strong>Continuity of care</strong> – the same team following
                  your case from diagnosis through procedure and follow-up
                </li>
                <li>
                  <strong>Outcomes patients hope for</strong> – accurate
                  diagnosis, effective treatment, and quick, comfortable recovery
                </li>
                <li>
                  <strong>Trust earned daily</strong> – reputation built through
                  patient referrals rather than paid promotion
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Hysteroscopy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Hysteroscopy is a major surgery&quot;</strong>{" "}
                  – It is a minimally invasive day care procedure with no
                  external incisions
                </li>
                <li>
                  <strong>&quot;It&apos;s always very painful&quot;</strong> –
                  Discomfort is generally mild and manageable, especially with
                  appropriate anaesthesia or pain relief
                </li>
                <li>
                  <strong>&quot;It requires a long hospital stay&quot;</strong>{" "}
                  – Most patients go home the same day, with a short recovery
                  period
                </li>
                <li>
                  <strong>&quot;It&apos;s only for diagnosing
                  infertility&quot;</strong> – It&apos;s also used for treating
                  abnormal bleeding, removing polyps, and evaluating other
                  uterine conditions
                </li>
                <li>
                  <strong>&quot;Recovery takes weeks&quot;</strong> – Most
                  patients resume light activities within a day or two, though
                  your doctor will personalise recovery guidance
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: What to Expect With Your Hysteroscopy Journey
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Discuss your symptoms with your
                  gynaecologist</strong> to determine if hysteroscopy is the
                  right next step.
                </li>
                <li>
                  <strong>Step 2: Undergo pre-procedure evaluation</strong>,
                  including any recommended blood tests.
                </li>
                <li>
                  <strong>Step 3: Follow fasting or preparation
                  instructions</strong> provided by your doctor.
                </li>
                <li>
                  <strong>Step 4: Attend your day care appointment</strong>,
                  understanding the procedure itself is generally quick.
                </li>
                <li>
                  <strong>Step 5: Rest briefly in recovery</strong> before being
                  discharged, typically the same day.
                </li>
                <li>
                  <strong>Step 6: Follow post-procedure care
                  instructions</strong>, including managing any mild cramping or
                  spotting.
                </li>
                <li>
                  <strong>Step 7: Attend your follow-up appointment</strong> to
                  discuss findings and any further treatment needed.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Getting Your Hysteroscopy Locally in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Convenient day care scheduling without needing extended
                  hospital stays or long-distance travel
                </li>
                <li>
                  Continuity of care with the same doctor for diagnosis,
                  procedure, and follow-up
                </li>
                <li>
                  Lower overall cost compared to travelling to a metro city for
                  the same procedure
                </li>
                <li>
                  Access to modern hysteroscopic technology without leaving your
                  city
                </li>
                <li>
                  A comfortable, familiar environment for a sensitive
                  gynaecological procedure
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
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
                      <p className="font-semibold">
                        Phone / Call for Appointment
                      </p>
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                gynaecologistmoradabad.com
              </h2>

              <p className="mb-4 text-gray-700">
                Since a short analysis of the official website was requested,
                here is a quick and honest breakdown:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Directly relevant services explicitly listed</strong>{" "}
                  – Diagnostic hysteroscopy and hysteroscopic polypectomy are
                  both clearly named, directly matching this search topic.
                </li>
                <li>
                  <strong>Broader gynaecological and fertility context</strong>{" "}
                  – The listing of related services like laparoscopic myomectomy
                  and fertility/IVF treatment shows how hysteroscopy fits into
                  comprehensive care.
                </li>
                <li>
                  <strong>Technology transparency</strong> – Mentioning 3D/4D
                  ultrasound and advanced diagnostic capability builds
                  confidence in the clinic&apos;s overall procedural expertise.
                </li>
                <li>
                  <strong>Reassuring, patient-first messaging</strong> – The
                  tagline &quot;Her Health First&quot; supports a comfortable
                  tone for a procedure some patients may feel anxious about.
                </li>
                <li>
                  <strong>Easy-to-access contact details</strong> – Phone,
                  WhatsApp, and email are clearly visible in the header and
                  footer for quick appointment booking.
                </li>
                <li>
                  <strong>Genuine patient testimonials</strong> – Real feedback
                  (such as from patient &quot;Rudri J&quot;) adds authentic
                  social proof.
                </li>
                <li>
                  <strong>Local SEO fundamentals present</strong> – A complete
                  clinic address with pin code is listed, supporting visibility
                  for Moradabad-based searches.
                </li>
                <li>
                  <strong>Improvement opportunity</strong> – Adding a dedicated
                  blog post explaining what to expect during a hysteroscopy day
                  care procedure, including recovery timeline, could help the
                  website rank better for this specific procedural topic and
                  ease patient anxiety before booking.
                </li>
              </ul>
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