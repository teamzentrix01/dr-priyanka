
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

export default function DiagnosticLaparoscopyInfertility() {
  const faqs = [
    {
      q: "Which doctor performs diagnostic laparoscopy for infertility in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers diagnostic laparoscopy and comprehensive fertility evaluation.",
    },
    {
      q: "When is diagnostic laparoscopy recommended for infertility?",
      a: "It's often recommended for unexplained infertility, suspected endometriosis, or suspected tubal blockage.",
    },
    {
      q: "Can treatment be done during the same procedure as diagnosis?",
      a: "Yes, findings like mild endometriosis or adhesions can often be treated during the same session.",
    },
    {
      q: "Is diagnostic laparoscopy the first test done for infertility?",
      a: "No, it's usually considered after simpler tests like blood work and ultrasound, unless earlier evaluation is warranted.",
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
      q: "What happens if tubal blockage is confirmed?",
      a: "IVF is often recommended, as it bypasses the fallopian tubes entirely.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with my previous test results before visiting?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Does a normal laparoscopy result mean the fertility workup was unnecessary?",
      a: "No, a normal finding still provides valuable information to help guide your next fertility treatment steps.",
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
                Diagnostic Laparoscopy for Infertility in Moradabad: A Complete
                Guide
              </h1>

              <p className="mb-4 text-gray-700">
                For couples facing difficulty conceiving, finding the exact
                cause of infertility can feel like searching for answers in the
                dark. While many fertility tests can be done through blood work
                and ultrasound, some underlying causes — like blocked fallopian
                tubes, endometriosis, or pelvic adhesions — can only be
                confirmed through a direct look inside the pelvis. Diagnostic
                laparoscopy plays a valuable role in filling this gap.
              </p>

              <p className="text-gray-700">
                This guide explains what diagnostic laparoscopy for infertility
                involves, when it&apos;s recommended, and how to find the right
                specialist in Moradabad — including details about Dr. Priyanka
                Pachauri, a well-known gynaecologist in the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Diagnostic Laparoscopy for Infertility?
              </h2>

              <p className="mb-4 text-gray-700">
                Diagnostic laparoscopy is a minimally invasive surgical
                procedure in which a thin, lighted camera (laparoscope) is
                inserted through a small incision near the navel, allowing the
                doctor to directly view the uterus, fallopian tubes, ovaries,
                and surrounding pelvic structures.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It provides a direct, magnified view that many imaging tests
                  cannot fully replicate
                </li>
                <li>
                  It can identify structural or physical causes of infertility
                  that blood tests and standard ultrasounds might miss
                </li>
                <li>
                  It is often combined with a dye test (chromopertubation) to
                  check whether the fallopian tubes are open
                </li>
                <li>
                  In many cases, the doctor can treat certain findings, like
                  mild endometriosis or adhesions, during the same procedure
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is Diagnostic Laparoscopy Recommended for Infertility?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Unexplained infertility</strong> – when standard tests
                  (hormonal evaluation, semen analysis, basic ultrasound)
                  don&apos;t reveal a clear cause
                </li>
                <li>
                  <strong>Suspected endometriosis</strong> – particularly when
                  symptoms like painful periods or pelvic pain accompany
                  difficulty conceiving
                </li>
                <li>
                  <strong>Suspected tubal blockage</strong> – especially if
                  earlier tests like an HSG (hysterosalpingogram) show unclear
                  or concerning results
                </li>
                <li>
                  <strong>History of pelvic infection or previous surgery</strong>{" "}
                  – which can lead to adhesions affecting fertility
                </li>
                <li>
                  <strong>Recurrent pregnancy loss</strong> – to check for
                  underlying pelvic factors that might contribute
                </li>
                <li>
                  <strong>Before proceeding with more advanced fertility
                  treatment</strong> – some doctors recommend laparoscopy to
                  rule out treatable causes before moving directly to IVF,
                  depending on the individual case
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Diagnostic Laparoscopy Can Reveal
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Tubal blockages or damage</strong> – which may prevent
                  the egg and sperm from meeting naturally
                </li>
                <li>
                  <strong>Endometriosis</strong> – including its location and
                  severity, which can significantly affect fertility
                </li>
                <li>
                  <strong>Pelvic adhesions</strong> – scar tissue that can
                  distort normal pelvic anatomy and interfere with conception
                </li>
                <li>
                  <strong>Ovarian cysts</strong> – including endometriomas,
                  which may affect ovarian function
                </li>
                <li>
                  <strong>Uterine fibroids</strong> – particularly those
                  affecting the outer surface of the uterus
                </li>
                <li>
                  <strong>Congenital abnormalities</strong> – structural
                  variations in the reproductive organs present from birth
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Procedure Is Performed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>General anaesthesia</strong> – the procedure is
                  typically performed under general anaesthesia for patient
                  comfort
                </li>
                <li>
                  <strong>Small incisions</strong> – usually one near the navel
                  and sometimes one or two additional small incisions for
                  surgical instruments
                </li>
                <li>
                  <strong>Gas insufflation</strong> – the abdomen is gently
                  inflated with gas to create space for clear visualisation
                </li>
                <li>
                  <strong>Camera-guided examination</strong> – the surgeon
                  systematically examines the pelvic organs
                </li>
                <li>
                  <strong>Dye test (chromopertubation)</strong> – a coloured dye
                  is passed through the uterus and fallopian tubes to check for
                  blockages, visible through the laparoscope
                </li>
                <li>
                  <strong>Treatment if needed</strong> – findings like mild
                  endometriosis, adhesions, or small cysts can often be treated
                  during the same procedure
                </li>
                <li>
                  <strong>Duration</strong> – typically takes 30 minutes to a
                  couple of hours, depending on findings and any treatment
                  performed
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
                  A thorough fertility workup, including hormonal blood tests and
                  semen analysis for the male partner
                </li>
                <li>
                  Pre-operative tests as advised by your doctor
                </li>
                <li>
                  A clear discussion of what the procedure aims to investigate
                  based on your specific fertility history
                </li>
                <li>
                  Fasting instructions before the procedure due to general
                  anaesthesia
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During the Procedure
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You will be under general anaesthesia throughout the procedure
                </li>
                <li>
                  The surgeon carefully examines the uterus, tubes, ovaries, and
                  pelvic cavity
                </li>
                <li>
                  Any treatable findings are addressed as clinically appropriate
                  during the same session
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After the Procedure
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A short recovery period in the hospital, with most patients
                  discharged the same day or after one night
                </li>
                <li>
                  Mild abdominal discomfort, bloating, or shoulder pain (from
                  the gas used) is common initially and typically resolves
                  within a few days
                </li>
                <li>
                  Most patients resume light activities within a week, with full
                  recovery guidance from your doctor
                </li>
                <li>
                  A follow-up appointment to discuss findings and plan next steps
                  for your fertility journey
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostic Laparoscopy vs Other Fertility Tests
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hormonal blood tests</strong> – assess ovarian reserve
                  and hormonal balance but cannot show physical pelvic
                  abnormalities
                </li>
                <li>
                  <strong>Transvaginal ultrasound</strong> – useful for
                  assessing ovarian follicles and basic uterine structure, but
                  limited in detecting tubal blockages or mild endometriosis
                </li>
                <li>
                  <strong>HSG (Hysterosalpingogram)</strong> – an X-ray based
                  test that checks tubal patency but doesn&apos;t provide direct
                  visualisation of the pelvic organs
                </li>
                <li>
                  <strong>Diagnostic laparoscopy</strong> – offers the most
                  direct, detailed assessment of pelvic anatomy and can treat
                  certain findings simultaneously
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor will typically recommend a stepwise approach,
                starting with less invasive tests before considering
                laparoscopy, unless your specific history suggests it should be
                considered earlier.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens After Diagnosis?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>If a treatable cause is found and addressed</strong>{" "}
                  – such as adhesions or mild endometriosis, natural conception
                  may become more likely following recovery
                </li>
                <li>
                  <strong>If tubal blockage is confirmed</strong> – IVF may be
                  recommended, as it bypasses the fallopian tubes entirely
                </li>
                <li>
                  <strong>If no significant abnormality is found</strong> – this
                  can still be valuable information, helping guide the next
                  steps in your fertility treatment plan, such as proceeding
                  with IUI or IVF
                </li>
                <li>
                  <strong>Personalised fertility planning</strong> – your doctor
                  will discuss the most appropriate next steps based on your
                  specific findings and overall fertility profile
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Specialist Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Accurate identification of subtle findings, like early
                  endometriosis, requires surgical experience and attention to
                  detail
                </li>
                <li>
                  Skilled treatment of identified issues during the same
                  procedure can save patients from needing additional surgery
                </li>
                <li>
                  A fertility-focused approach ensures findings are interpreted
                  specifically in the context of your conception goals
                </li>
                <li>
                  Clear communication about findings and realistic next steps
                  helps you make informed decisions about your fertility journey
                </li>
                <li>
                  Access to both surgical and fertility treatment (like IVF)
                  under one roof allows for smoother, more coordinated care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Specialist for Infertility
                Laparoscopy in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a
                well-recognised gynaecologist in Moradabad with specialised
                fellowship training in laparoscopy and fertility care. Her
                clinic follows the guiding principle of &quot;Her Health
                First,&quot; ensuring every patient receives a thorough,
                fertility-focused evaluation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Relevant Services Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D laparoscopic gynaecological surgery – advanced minimally
                  invasive diagnostic and treatment capability
                </li>
                <li>
                  Fertility evaluation and personalised IVF treatment – for a
                  complete fertility care pathway
                </li>
                <li>
                  Endometriosis surgery, often relevant to infertility
                  investigation
                </li>
                <li>
                  Laparoscopic cystectomy for ovarian cysts affecting fertility
                </li>
                <li>
                  Diagnostic hysteroscopy for complementary uterine cavity
                  evaluation
                </li>
                <li>
                  Laparoscopic myomectomy for fibroids affecting fertility
                </li>
                <li>
                  Pregnancy, antenatal, and postnatal care for continued support
                  after conception
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Supporting Comprehensive Fertility Evaluation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  High-definition 3D laparoscopic surgical systems for precise
                  diagnostic and operative capability
                </li>
                <li>
                  3D & 4D ultrasound machines for detailed pelvic and
                  reproductive imaging
                </li>
                <li>
                  GERI time-lapse imaging incubator and AI-powered semen
                  analysis and DNA integrity testing, supporting a complete
                  fertility workup for both partners
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
                  <strong>Expertise with heart</strong> – gold medal academic
                  credentials and international fellowship training in laparoscopy
                  and fertility care
                </li>
                <li>
                  <strong>Continuity you can count on</strong> – an integrated
                  team supporting patients through diagnosis, treatment, and
                  ongoing fertility planning
                </li>
                <li>
                  <strong>Outcomes patients hope for</strong> – successful
                  pregnancies after years of difficulty, guided by accurate
                  diagnosis and personalised treatment
                </li>
                <li>
                  <strong>Trust earned daily</strong> – reputation built through
                  patient referrals rather than paid promotion
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Diagnostic Laparoscopy for Infertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Laparoscopy is always the first test for
                  infertility&quot;</strong> – It&apos;s usually considered
                  after simpler tests, unless your history suggests earlier
                  evaluation is warranted
                </li>
                <li>
                  <strong>&quot;It&apos;s a major, high-risk surgery&quot;</strong>{" "}
                  – It is a minimally invasive procedure with generally quick
                  recovery for most patients
                </li>
                <li>
                  <strong>&quot;If nothing is found, the workup was
                  pointless&quot;</strong> – A normal finding is still valuable
                  information that helps guide your fertility treatment plan
                </li>
                <li>
                  <strong>&quot;Laparoscopy guarantees pregnancy
                  afterward&quot;</strong> – It helps identify and sometimes
                  treat contributing factors, but doesn&apos;t guarantee
                  conception on its own
                </li>
                <li>
                  <strong>&quot;Only women need to be tested for
                  infertility&quot;</strong> – A complete fertility evaluation
                  always includes assessment of both partners
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Approach Your Infertility Investigation
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Complete initial fertility tests</strong> –
                  hormonal blood work and semen analysis for the male partner.
                </li>
                <li>
                  <strong>Step 2: Discuss results with your fertility
                  specialist</strong> to determine if further investigation is
                  needed.
                </li>
                <li>
                  <strong>Step 3: Consider diagnostic laparoscopy</strong> if
                  unexplained infertility, suspected endometriosis, or tubal
                  concerns are identified.
                </li>
                <li>
                  <strong>Step 4: Prepare for the procedure</strong>, following
                  your doctor&apos;s pre-operative instructions.
                </li>
                <li>
                  <strong>Step 5: Undergo the procedure</strong>, understanding
                  treatment may be performed during the same session if
                  appropriate.
                </li>
                <li>
                  <strong>Step 6: Follow post-procedure recovery guidance</strong>{" "}
                  and attend your follow-up appointment.
                </li>
                <li>
                  <strong>Step 7: Discuss your personalised fertility treatment
                  plan</strong> based on the findings, whether natural
                  conception support, IUI, or IVF.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Convenient access for consultation, testing, surgery, and
                  follow-up without long-distance travel
                </li>
                <li>
                  Continuity of care with the same doctor throughout your entire
                  fertility journey
                </li>
                <li>
                  Lower overall treatment cost compared to travelling to a metro
                  city for specialised fertility care
                </li>
                <li>
                  Access to both advanced laparoscopic surgery and comprehensive
                  fertility treatment under one roof
                </li>
                <li>
                  A comfortable, familiar environment for navigating a sensitive
                  and often emotional journey
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
                  <strong>Strong combined fertility and laparoscopy
                  positioning</strong> – The site clearly lists both 3D
                  laparoscopic surgery and comprehensive fertility/IVF services,
                  directly relevant to this topic.
                </li>
                <li>
                  <strong>Advanced fertility diagnostics highlighted</strong> –
                  Mentions of the GERI time-lapse incubator and AI-based semen
                  analysis show a thorough approach to fertility evaluation for
                  both partners.
                </li>
                <li>
                  <strong>Specialised fellowship training noted</strong> –
                  References to international fellowship training in laparoscopy
                  and fertility add credibility for complex infertility
                  investigation.
                </li>
                <li>
                  <strong>Related services clearly listed</strong> –
                  Endometriosis surgery, cystectomy, and myomectomy are all
                  named, showing relevant surgical capability for common
                  infertility-related findings.
                </li>
                <li>
                  <strong>Easy-to-access contact details</strong> – Phone,
                  WhatsApp, and email are clearly visible in the header and
                  footer for direct inquiry.
                </li>
                <li>
                  <strong>Genuine patient testimonials</strong> – Real feedback
                  (such as from patient &quot;Rudri J&quot;) adds authentic
                  social proof about overall patient experience.
                </li>
                <li>
                  <strong>Local SEO fundamentals present</strong> – A complete
                  clinic address with pin code is listed, supporting visibility
                  for Moradabad-based searches.
                </li>
                <li>
                  <strong>Improvement opportunity</strong> – Adding a dedicated
                  blog post specifically explaining diagnostic laparoscopy&apos;s
                  role in infertility investigation, including a comparison with
                  other fertility tests, could help the website rank better for
                  this specific, often-searched topic.
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
