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

export default function LaparoscopicSurgeryForPcosInMoradabad() {
  const faqs = [
    {
      q: "What is laparoscopic ovarian drilling?",
      a: "It's a minimally invasive surgery that makes small punctures in the ovarian surface to help restore natural ovulation in women with PCOS.",
    },
    {
      q: "Is surgery the first treatment for PCOS?",
      a: "No, lifestyle changes and oral medication are usually tried first; surgery is considered only if these approaches don't work.",
    },
    {
      q: "Who is a good candidate for ovarian drilling?",
      a: "Women with confirmed PCOS-related anovulation who haven't conceived despite trying oral ovulation medication are typical candidates.",
    },
    {
      q: "How does ovarian drilling help with PCOS?",
      a: "It lowers androgen and LH levels in the ovary, helping restore the hormonal balance needed for regular ovulation.",
    },
    {
      q: "Is laparoscopic ovarian drilling a permanent solution?",
      a: "Effects can last months to years, but results vary, and benefits may diminish over time in some women.",
    },
    {
      q: "How long is the recovery after ovarian drilling?",
      a: "Most women return to normal activity within 1–2 weeks after this minimally invasive procedure.",
    },
    {
      q: "Does ovarian drilling guarantee pregnancy?",
      a: "No, it improves the chances of ovulation and natural conception but doesn't guarantee pregnancy for every patient.",
    },
    {
      q: "What are the risks of laparoscopic ovarian drilling?",
      a: "Risks include general surgical risks, theoretical reduced ovarian reserve, and variable effectiveness between individuals.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, laparoscopic surgeon, and IVF specialist (MS, FMAS) offering PCOS and fertility treatment.",
    },
    {
      q: "Does Dr. Priyanka Pachauri treat PCOS-related infertility?",
      a: "Yes, her clinic offers lifestyle guidance, ovulation induction, laparoscopic treatment, and IVF for PCOS-related fertility concerns.",
    },
    {
      q: "What tests are needed before considering ovarian drilling?",
      a: "Hormonal blood tests, pelvic ultrasound, and documentation of prior fertility treatment attempts are typically required.",
    },
    {
      q: "How can I book a consultation for PCOS treatment in Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic's official website to schedule a consultation with Dr. Priyanka Pachauri.",
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
                Laparoscopic Surgery for PCOS in Moradabad: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Polycystic Ovary Syndrome (PCOS) is one of the most common
                hormonal disorders affecting women of reproductive age, often
                causing irregular periods, weight gain, acne, excess hair
                growth, and difficulty conceiving. While most women with PCOS
                are managed successfully through lifestyle changes and
                medication, a smaller group of women — particularly those
                struggling with infertility despite standard treatment — may
                benefit from a minimally invasive surgical option called
                laparoscopic ovarian drilling. This guide explains what
                laparoscopic surgery for PCOS involves, who it&apos;s suitable
                for, how it compares to other treatments, and how to find the
                right surgeon in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding PCOS Before Considering Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS is a hormonal disorder affecting ovulation, often linked
                  to elevated androgen (male hormone) levels and insulin
                  resistance.
                </li>
                <li>
                  Common symptoms include irregular or absent periods, acne,
                  weight gain, and excess hair growth.
                </li>
                <li>
                  Many women with PCOS also experience difficulty conceiving,
                  due to irregular or absent ovulation.
                </li>
                <li>
                  PCOS is generally managed first with lifestyle changes and
                  medication, not surgery.
                </li>
                <li>
                  Surgery is considered only in specific circumstances,
                  typically when fertility treatment with medication alone
                  hasn&apos;t been successful.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Laparoscopic Ovarian Drilling?
              </h2>

              <p className="mb-4 text-gray-700">
                Laparoscopic ovarian drilling (LOD) is a minimally invasive
                surgical procedure specifically used to help restore ovulation
                in certain women with PCOS.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed through small keyhole incisions, typically 3–4 tiny
                  cuts in the abdomen.
                </li>
                <li>
                  The surgeon uses a specialised instrument to make small
                  punctures in the ovarian surface.
                </li>
                <li>
                  This process helps reduce androgen-producing tissue within the
                  ovary.
                </li>
                <li>
                  The goal is to restore natural ovulation, improving the
                  chances of conception.
                </li>
                <li>
                  It is generally performed as a day-care or short-stay
                  procedure, with quick recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Does Ovarian Drilling Help With PCOS?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Lowers androgen levels</strong> produced by the
                  ovary, which helps normalise the hormonal environment needed
                  for ovulation.
                </li>
                <li>
                  <strong>Reduces LH (luteinizing hormone) levels</strong>,
                  which are often elevated in PCOS and interfere with normal
                  ovulation.
                </li>
                <li>
                  <strong>Restores regular ovulation</strong> in many women,
                  improving natural conception chances.
                </li>
                <li>
                  <strong>Effects can last for several months to years</strong>,
                  though results vary between individuals.
                </li>
                <li>
                  <strong>Unlike medication</strong>, it offers a one-time
                  procedure rather than ongoing daily treatment, at least for
                  the period it remains effective.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Good Candidate for Laparoscopic Ovarian Drilling?
              </h2>

              <p className="mb-4 text-gray-700">
                This procedure is generally considered for women who:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Have confirmed PCOS with anovulation (absence of regular
                  ovulation).
                </li>
                <li>
                  Have not conceived despite trying with first-line fertility
                  medication, such as clomiphene citrate or letrozole.
                </li>
                <li>
                  Are resistant to ovulation-inducing medication, meaning the
                  medication alone hasn&apos;t successfully triggered ovulation.
                </li>
                <li>
                  Wish to avoid or reduce reliance on injectable fertility
                  medications, which carry a higher risk of multiple
                  pregnancies.
                </li>
                <li>
                  Have no other major cause of infertility identified, aside
                  from PCOS-related anovulation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Consider Alternatives Instead?
              </h2>

              <p className="mb-4 text-gray-700">
                Laparoscopic ovarian drilling may not be the first choice when:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lifestyle changes and first-line medication haven&apos;t yet
                  been fully tried.
                </li>
                <li>
                  The woman has other significant fertility factors, such as
                  tubal blockage or male factor infertility, that need separate
                  treatment.
                </li>
                <li>
                  IVF or other assisted reproduction may be more appropriate
                  depending on the overall fertility evaluation.
                </li>
                <li>
                  The woman prefers non-surgical options and hasn&apos;t
                  exhausted medical management yet.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Laparoscopic Ovarian Drilling
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Minimally invasive</strong>, with small incisions and
                  fast recovery compared to open surgery.
                </li>
                <li>
                  <strong>Reduces the risk of multiple pregnancy</strong>, a
                  common concern with injectable fertility medications.
                </li>
                <li>
                  <strong>Can reduce or eliminate the need for ongoing
                  fertility medication</strong> in some women.
                </li>
                <li>
                  <strong>May improve response to future fertility
                  medication</strong> if ovulation induction is still needed
                  afterward.
                </li>
                <li>
                  <strong>Relatively quick procedure</strong>, typically
                  completed within 30–45 minutes.
                </li>
                <li>
                  <strong>Day-care or short-stay surgery</strong>, minimising
                  disruption to daily life.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens Before the Procedure?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed fertility history and PCOS diagnosis confirmation
                  through hormonal blood tests and ultrasound.
                </li>
                <li>
                  Documentation of prior treatment attempts, including
                  medication used and response.
                </li>
                <li>
                  Partner&apos;s fertility evaluation, including semen analysis,
                  to rule out other contributing factors.
                </li>
                <li>
                  Pelvic ultrasound to assess ovarian size and characteristics.
                </li>
                <li>
                  Blood tests to check overall fitness for surgery and
                  anaesthesia.
                </li>
                <li>
                  Detailed discussion of expected outcomes, risks, and
                  alternatives before proceeding.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During the Procedure?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed under general anaesthesia, typically as a day-care
                  or short-stay procedure.
                </li>
                <li>
                  Small keyhole incisions are made in the abdomen for the
                  laparoscope and instruments.
                </li>
                <li>
                  The surgeon uses high-definition visualisation to precisely
                  target the ovarian surface.
                </li>
                <li>
                  Controlled punctures are made using electrocautery or laser,
                  in a carefully limited number to avoid excessive tissue
                  damage.
                </li>
                <li>
                  The procedure typically takes 30–45 minutes.
                </li>
                <li>
                  Patients are usually discharged the same day or after a short
                  overnight stay.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Laparoscopic Ovarian Drilling
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>First 24–48 hours:</strong> Mild discomfort managed
                  with pain medication; most patients go home the same day or
                  next day.
                </li>
                <li>
                  <strong>First week:</strong> Rest at home with light walking
                  encouraged; avoid heavy lifting.
                </li>
                <li>
                  <strong>1–2 weeks:</strong> Most women return to normal daily
                  activities and desk-based work.
                </li>
                <li>
                  <strong>Menstrual cycle changes:</strong> Some women notice a
                  more regular cycle within a few weeks to a couple of months.
                </li>
                <li>
                  <strong>Follow-up appointments:</strong> Regular check-ins to
                  monitor ovulation and cycle regularity after the procedure.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks and Considerations
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>General surgical risks</strong> — bleeding,
                  infection, or anaesthesia-related complications, though
                  generally low with an experienced surgeon.
                </li>
                <li>
                  <strong>Reduced ovarian reserve</strong> — a theoretical risk
                  if too much ovarian tissue is affected, which is why
                  controlled, limited puncturing is important.
                </li>
                <li>
                  <strong>Adhesion formation</strong> — as with any pelvic
                  surgery, though laparoscopic technique reduces this risk
                  compared to open surgery.
                </li>
                <li>
                  <strong>Variable and time-limited effectiveness</strong> —
                  benefits may not be permanent and can diminish over time in
                  some women.
                </li>
                <li>
                  <strong>Not effective for all PCOS-related infertility</strong>{" "}
                  — success depends on individual factors and the presence of
                  other fertility issues.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Laparoscopic Ovarian Drilling vs. Other PCOS Fertility
                Treatments
              </h2>

              <div className="mb-6 overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Treatment
                      </th>
                      <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Approach
                      </th>
                      <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Best Suited For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>Lifestyle changes</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Weight management, diet, exercise
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        First-line approach for most women with PCOS
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>Oral ovulation medication</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Clomiphene citrate or letrozole
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Women not yet tried on medication
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>Laparoscopic ovarian drilling</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Minimally invasive surgery
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Women resistant to oral medication
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>Injectable fertility medication</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Hormonal injections
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Women needing more targeted ovulation induction
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>IVF</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Assisted reproduction
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Women with additional fertility factors or after other
                        treatments fail
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Beyond Fertility: Other Laparoscopic Procedures Relevant to PCOS
                Patients
              </h2>

              <p className="mb-4 text-gray-700">
                Women with PCOS sometimes also require laparoscopic treatment
                for related or coexisting conditions:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic ovarian cystectomy</strong> — for
                  persistent or complex ovarian cysts sometimes seen alongside
                  PCOS.
                </li>
                <li>
                  <strong>Diagnostic laparoscopy</strong> — to evaluate the
                  pelvis fully when infertility has multiple potential
                  contributing factors.
                </li>
                <li>
                  <strong>Hysteroscopy</strong> — to examine the uterine cavity
                  if abnormal bleeding patterns are also present.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — PCOS and Laparoscopic Surgery Specialist
                in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women in Moradabad living with PCOS and considering
                laparoscopic treatment options, Dr. Priyanka Pachauri (MS in
                Obstetrics & Gynaecology, FMAS, Advanced Infertility Fellowship)
                offers a structured, technology-driven approach to diagnosis and
                treatment. Based on her official website, (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), her practice includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Co-lead at Shree Advanced Urogynae Clinic and Consultant at
                  Ujala Cygnus BrightStar Hospital.
                </li>
                <li>
                  A &quot;Her Health First&quot; philosophy focused on
                  individualised, evidence-based treatment planning.
                </li>
                <li>
                  <strong>High-definition 3D laparoscopic technology</strong>,
                  supporting precision in procedures like ovarian drilling and
                  cystectomy.
                </li>
                <li>
                  A dedicated blog article on PCOS and infertility, explaining
                  how lifestyle changes, ovulation induction, and personalised
                  fertility plans help the majority of women with PCOS achieve
                  pregnancy.
                </li>
                <li>
                  <strong>AI-assisted semen analysis</strong> available for
                  partner fertility evaluation, supporting a comprehensive
                  approach to couple fertility assessment.
                </li>
                <li>
                  <strong>3D/4D ultrasound and GERI time-lapse embryo
                  imaging</strong>, reflecting investment in advanced fertility
                  and reproductive technology.
                </li>
                <li>
                  A comprehensive fertility and IVF practice, allowing PCOS
                  patients to explore the full range of treatment options — from
                  lifestyle guidance to medication, laparoscopic surgery, or IVF
                  — within a single, consistent practice.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Because PCOS treatment is highly individualised, and
                laparoscopic ovarian drilling is generally considered only after
                other approaches have been tried, a detailed fertility
                consultation is the best way to understand which treatment path
                is right for your specific situation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Support Alongside PCOS Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Maintain a healthy, stable weight</strong> through
                  balanced nutrition, since even modest weight loss can improve
                  ovulation in many women with PCOS.
                </li>
                <li>
                  <strong>Engage in regular, moderate exercise</strong> to
                  support insulin sensitivity and hormonal balance.
                </li>
                <li>
                  <strong>Manage stress</strong> through adequate sleep and
                  relaxation techniques.
                </li>
                <li>
                  <strong>Follow a balanced, low-glycaemic diet</strong>, which
                  can help manage insulin resistance associated with PCOS.
                </li>
                <li>
                  <strong>Track your cycle</strong> to help your doctor assess
                  treatment response over time.
                </li>
                <li>
                  <strong>Attend regular follow-ups</strong>, especially after
                  any procedure, to monitor ovulation and overall progress.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Laparoscopic ovarian drilling is a minimally invasive option
                  for select women with PCOS who haven&apos;t responded to
                  first-line fertility medication.
                </li>
                <li>
                  It works by reducing androgen-producing ovarian tissue,
                  helping restore natural ovulation.
                </li>
                <li>
                  Not a first-line treatment — lifestyle changes and oral
                  medication are generally tried first.
                </li>
                <li>
                  Recovery is quick, typically within 1–2 weeks for normal
                  activity.
                </li>
                <li>
                  Effectiveness varies between individuals and may not be
                  permanent.
                </li>
                <li>
                  A personalised fertility evaluation is essential to determine
                  whether this procedure is right for you.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Laparoscopic surgery for PCOS, particularly ovarian drilling,
                offers a valuable minimally invasive option for women who
                haven&apos;t achieved ovulation or pregnancy through lifestyle
                changes and standard fertility medication alone. While it
                isn&apos;t the right choice for everyone and is generally
                considered only after other treatments have been tried, it can
                meaningfully improve the chances of natural conception for the
                right candidates, while reducing reliance on more intensive
                fertility interventions. If you have PCOS and are exploring your
                fertility treatment options, a detailed consultation with an
                experienced gynaecologist is the best way to understand which
                path — lifestyle changes, medication, laparoscopic surgery, or
                further assisted reproduction — is most suitable for you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
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
