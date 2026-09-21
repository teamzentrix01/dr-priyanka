
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

export default function LaparoscopicSurgeryEndometriosis() {
  const faqs = [
    {
      q: "Which doctor performs endometriosis diagnosis surgery in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers laparoscopic diagnosis and treatment for endometriosis.",
    },
    {
      q: "Why is laparoscopy needed to diagnose endometriosis?",
      a: "It is currently the gold standard, allowing direct visualisation and biopsy confirmation that imaging alone cannot always provide.",
    },
    {
      q: "Can endometriosis be treated during the same surgery as diagnosis?",
      a: "Yes, in many cases the surgeon can treat identified endometrial tissue or cysts during the same procedure.",
    },
    {
      q: "Does endometriosis surgery affect fertility?",
      a: "Skilled, fertility-preserving surgical technique aims to treat the disease while protecting reproductive function.",
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
      q: "Is endometriosis a permanently curable condition?",
      a: "It's generally considered chronic and may need ongoing management even after successful surgery.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with my symptoms before visiting?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Does endometriosis always cause infertility?",
      a: "No, while it's a common cause of infertility, many women with endometriosis conceive naturally or with treatment.",
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
                Laparoscopic Surgery for Endometriosis Diagnosis in Moradabad: A
                Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Endometriosis is a condition that affects a significant number
                of women during their reproductive years, yet it often goes
                undiagnosed for years due to its varied and sometimes subtle
                symptoms. Laparoscopic surgery remains the most definitive way
                to diagnose and, in the same sitting, often treat this
                condition.
              </p>

              <p className="text-gray-700">
                This guide explains what endometriosis is, why laparoscopy plays
                such a central diagnostic role, and how to find the right
                specialist for laparoscopic surgery for endometriosis diagnosis
                in Moradabad — including details about Dr. Priyanka Pachauri, a
                well-known gynaecologist in the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Endometriosis?
              </h2>

              <p className="mb-4 text-gray-700">
                Endometriosis is a condition where tissue similar to the lining
                of the uterus (the endometrium) grows outside the uterus, most
                commonly on the ovaries, fallopian tubes, and the tissue lining
                the pelvis. This displaced tissue continues to behave like the
                uterine lining, thickening and breaking down with each menstrual
                cycle, but without a way to leave the body, leading to
                inflammation, scarring, and often significant pain.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It can affect the ovaries, fallopian tubes, and pelvic lining,
                  and less commonly, other organs
                </li>
                <li>
                  It can lead to the formation of endometriomas (cysts on the
                  ovaries, sometimes called &quot;chocolate cysts&quot;)
                </li>
                <li>
                  It can cause scar tissue and adhesions that bind pelvic organs
                  together
                </li>
                <li>
                  Severity of symptoms doesn&apos;t always correlate directly
                  with the extent of the disease seen during surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Endometriosis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chronic pelvic pain, often worsening around and during
                  menstruation
                </li>
                <li>Pain during intercourse</li>
                <li>Heavy or irregular menstrual bleeding</li>
                <li>
                  Pain during bowel movements or urination, particularly during
                  periods
                </li>
                <li>Fatigue, especially during menstruation</li>
                <li>
                  Difficulty conceiving, as endometriosis is a common cause of
                  infertility
                </li>
                <li>
                  Digestive symptoms such as bloating, diarrhoea, or
                  constipation, particularly cyclical in nature
                </li>
                <li>
                  Lower back pain that may worsen with the menstrual cycle
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Laparoscopy Is Central to Endometriosis Diagnosis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It is currently considered the gold standard for definitive
                  diagnosis – imaging tests like ultrasound can suggest
                  endometriosis but cannot always confirm it with certainty
                </li>
                <li>
                  <strong>Direct visualisation</strong> – laparoscopy allows the
                  surgeon to directly see endometrial-like tissue, adhesions,
                  and cysts inside the pelvis
                </li>
                <li>
                  <strong>Biopsy confirmation</strong> – tissue samples can be
                  taken during the procedure and sent for pathological
                  confirmation
                </li>
                <li>
                  <strong>Staging the disease</strong> – laparoscopy allows the
                  surgeon to assess and classify the extent and severity of
                  endometriosis
                </li>
                <li>
                  <strong>Simultaneous treatment</strong> – in many cases, the
                  surgeon can treat what is found during the same procedure,
                  avoiding the need for a second surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Laparoscopic Surgery for Endometriosis Works
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Minimally invasive approach</strong> – performed
                  through a few small incisions in the abdomen, rather than a
                  large open incision
                </li>
                <li>
                  <strong>Camera-guided visualisation</strong> – a laparoscope
                  with a camera provides a magnified, detailed view of the
                  pelvic organs
                </li>
                <li>
                  <strong>Diagnostic assessment</strong> – the surgeon carefully
                  examines the ovaries, fallopian tubes, uterus, and surrounding
                  pelvic structures for signs of endometriosis
                </li>
                <li>
                  <strong>Excision or ablation of endometrial tissue</strong>{" "}
                  – abnormal tissue can often be removed or treated during the
                  same procedure
                </li>
                <li>
                  <strong>Adhesion removal</strong> – scar tissue binding organs
                  together can be carefully separated to relieve pain and
                  improve organ mobility
                </li>
                <li>
                  <strong>Cyst removal</strong> – endometriomas on the ovaries
                  can often be removed while preserving healthy ovarian tissue
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Laparoscopic Surgery for Endometriosis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Minimally invasive</strong> – smaller incisions mean
                  less scarring and generally faster recovery compared to open
                  surgery
                </li>
                <li>
                  <strong>Combined diagnosis and treatment</strong> – reduces
                  the need for multiple procedures in many cases
                </li>
                <li>
                  <strong>Fertility preservation</strong> – careful, skilled
                  excision techniques aim to treat the disease while protecting
                  ovarian and reproductive function
                </li>
                <li>
                  <strong>Symptom relief</strong> – many women experience
                  significant improvement in pain and other symptoms following
                  surgery
                </li>
                <li>
                  <strong>Accurate staging</strong> – helps guide further
                  treatment decisions, including fertility planning if relevant
                </li>
                <li>
                  <strong>Shorter hospital stay</strong> – many patients recover
                  well enough to be discharged within a day or two
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect Before, During, and After Surgery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A detailed consultation reviewing your symptoms, medical
                  history, and any previous imaging
                </li>
                <li>
                  Pre-operative tests, including blood work and imaging, to plan
                  the surgical approach
                </li>
                <li>
                  A clear discussion of what the surgery aims to achieve —
                  diagnosis, treatment, or both
                </li>
                <li>
                  Fasting instructions before the procedure, as it typically
                  requires general anaesthesia
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Small incisions are made in the abdomen for the laparoscope
                  and surgical instruments
                </li>
                <li>
                  The surgeon systematically examines the pelvic organs for
                  signs of endometriosis
                </li>
                <li>
                  Abnormal tissue, cysts, or adhesions are treated as found,
                  based on the pre-discussed surgical plan
                </li>
                <li>
                  Tissue samples may be taken for pathological confirmation
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Surgery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A short recovery period in the hospital, often with discharge
                  the same day or after one night
                </li>
                <li>
                  Mild discomfort, bloating, or shoulder pain (from gas used
                  during laparoscopy) is common initially and generally resolves
                  within a few days
                </li>
                <li>
                  Most patients can resume light activities within a week or
                  two, with full recovery guidance provided by your doctor
                </li>
                <li>
                  A follow-up appointment to discuss findings, pathology results,
                  and next steps for ongoing management
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Life After Diagnosis: Ongoing Management
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Endometriosis is generally considered a chronic condition that
                  may need long-term management even after surgery
                </li>
                <li>
                  Hormonal treatment may be recommended after surgery to help
                  manage symptoms and reduce recurrence
                </li>
                <li>
                  Regular follow-up helps monitor for symptom recurrence over
                  time
                </li>
                <li>
                  Fertility planning discussions are important for women wanting
                  to conceive, as timing and approach may be influenced by the
                  disease&apos;s extent
                </li>
                <li>
                  Lifestyle measures, alongside medical treatment, can support
                  overall symptom management for some women
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Surgeon for Endometriosis Diagnosis
                Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Endometriosis can be subtle and easily missed by less
                  experienced surgeons during laparoscopy
                </li>
                <li>
                  Skilled excision technique is important for both effective
                  treatment and fertility preservation
                </li>
                <li>
                  An experienced surgeon can accurately stage the disease,
                  guiding better long-term management decisions
                </li>
                <li>
                  Clear communication about findings and next steps helps
                  patients feel informed and supported
                </li>
                <li>
                  Access to advanced laparoscopic technology improves precision
                  and reduces complication risk
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Specialist for Endometriosis in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a
                well-recognised gynaecologist in Moradabad with specialised
                fellowship training in endometriosis and advanced laparoscopic
                surgery. Her clinic follows the guiding principle of &quot;Her
                Health First,&quot; ensuring every patient receives thorough
                evaluation and fertility-conscious treatment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Relevant Services Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Endometriosis surgery – diagnostic and operative laparoscopic
                  treatment
                </li>
                <li>
                  3D laparoscopic gynaecological surgery – advanced minimally
                  invasive surgical capability
                </li>
                <li>
                  Laparoscopic cystectomy for endometriomas and other ovarian
                  cysts
                </li>
                <li>
                  Diagnostic hysteroscopy for related uterine evaluation
                </li>
                <li>Chronic pelvic pain management</li>
                <li>
                  Fertility evaluation and IVF treatment for patients affected
                  by endometriosis-related infertility
                </li>
                <li>Pregnancy, antenatal, and postnatal care</li>
                <li>Gynaecology and general women&apos;s health consultations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Supporting Accurate Diagnosis and Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  High-definition 3D laparoscopic surgical systems for precise
                  identification and treatment of endometriosis
                </li>
                <li>
                  3D & 4D ultrasound machines for pre-surgical evaluation and
                  monitoring
                </li>
                <li>
                  GERI time-lapse imaging incubator and AI-based fertility
                  diagnostics for patients pursuing fertility treatment after
                  diagnosis
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
                  credentials and international fellowship training specifically
                  in endometriosis and laparoscopic care
                </li>
                <li>
                  <strong>Continuity you can count on</strong> – the same team
                  supporting patients from diagnosis through ongoing management
                </li>
                <li>
                  <strong>Outcomes patients hope for</strong> – pain relief,
                  accurate diagnosis, and fertility-preserving treatment
                  outcomes
                </li>
                <li>
                  <strong>Trust earned daily</strong> – reputation built through
                  patient referrals rather than paid promotion
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Endometriosis and Its Diagnosis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Painful periods are always normal&quot;</strong>{" "}
                  – Severe, disruptive period pain can be a sign of endometriosis
                  and deserves evaluation
                </li>
                <li>
                  <strong>&quot;An ultrasound can definitively rule out
                  endometriosis&quot;</strong> – While ultrasound can suggest
                  certain findings, laparoscopy remains the gold standard for
                  definitive diagnosis
                </li>
                <li>
                  <strong>&quot;Endometriosis surgery always cures the condition
                  permanently&quot;</strong> – It&apos;s generally considered a
                  chronic condition that may need ongoing management even after
                  successful surgery
                </li>
                <li>
                  <strong>&quot;Endometriosis always causes infertility&quot;</strong>{" "}
                  – While it&apos;s a common cause of infertility, many women
                  with endometriosis conceive naturally or with appropriate
                  treatment
                </li>
                <li>
                  <strong>&quot;Only women who want children need
                  treatment&quot;</strong> – Pain relief and quality of life
                  improvement are valid reasons for treatment, regardless of
                  fertility plans
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Approach Suspected Endometriosis
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Track your symptoms</strong> – note pain
                  patterns, timing relative to your cycle, and severity.
                </li>
                <li>
                  <strong>Step 2: Book a consultation with an experienced
                  gynaecologist</strong> to discuss your symptoms in detail.
                </li>
                <li>
                  <strong>Step 3: Undergo initial imaging</strong>, such as an
                  ultrasound, to look for suggestive findings.
                </li>
                <li>
                  <strong>Step 4: Discuss laparoscopic evaluation</strong> if
                  imaging is inconclusive but symptoms strongly suggest
                  endometriosis.
                </li>
                <li>
                  <strong>Step 5: Prepare for surgery if recommended</strong>,
                  understanding it may serve both diagnostic and treatment
                  purposes.
                </li>
                <li>
                  <strong>Step 6: Follow post-surgical recovery guidance</strong>{" "}
                  and attend your follow-up appointment.
                </li>
                <li>
                  <strong>Step 7: Discuss long-term management options</strong>,
                  including hormonal treatment or fertility planning, based on
                  your results.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Convenient access for consultation, surgery, and ongoing
                  follow-up without long-distance travel
                </li>
                <li>
                  Continuity of care with the same doctor throughout diagnosis
                  and long-term management
                </li>
                <li>
                  Lower overall treatment cost compared to travelling to a metro
                  city for specialised endometriosis care
                </li>
                <li>
                  Access to advanced laparoscopic technology and fertility
                  support under one roof
                </li>
                <li>
                  A comfortable, familiar environment for discussing a chronic
                  and often frustrating condition
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
                  <strong>Directly relevant service explicitly listed</strong>{" "}
                  – Endometriosis surgery is clearly named as a specific
                  service, directly matching this search topic.
                </li>
                <li>
                  <strong>Specialised fellowship training highlighted</strong>{" "}
                  – The site references international fellowship training
                  specifically in endometriosis care, adding strong credibility.
                </li>
                <li>
                  <strong>Broader fertility context provided</strong> – The
                  connection between endometriosis treatment and fertility/IVF
                  services shows a comprehensive approach relevant to many
                  patients&apos; concerns.
                </li>
                <li>
                  <strong>Technology transparency</strong> – Mentioning 3D
                  laparoscopic systems and advanced fertility diagnostics builds
                  confidence in the clinic&apos;s surgical and diagnostic
                  capability.
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
                  blog post explaining endometriosis symptoms, the laparoscopic
                  diagnosis process, and expected recovery could help the
                  website rank better for this important, often under-diagnosed
                  condition and encourage more women to seek timely evaluation.
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
