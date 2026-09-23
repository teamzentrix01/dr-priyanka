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

export default function SubtotalHysterectomySurgeonInMoradabad() {
  const faqs = [
    {
      q: "What is a subtotal hysterectomy?",
      a: "It's a procedure that removes the uterus while leaving the cervix in place, unlike a total hysterectomy which removes both.",
    },
    {
      q: "Who is a good candidate for subtotal hysterectomy?",
      a: "Women with benign conditions, a healthy cervix, and no history of abnormal Pap smears are generally good candidates.",
    },
    {
      q: "Do I still need Pap smears after subtotal hysterectomy?",
      a: "Yes, since the cervix remains, routine Pap smear screening should continue as advised by your doctor.",
    },
    {
      q: "What is Laparoscopic Subtotal Hysterectomy (LSH)?",
      a: "It's a minimally invasive version of subtotal hysterectomy performed through small keyhole incisions, offering faster recovery.",
    },
    {
      q: "Is subtotal hysterectomy safer than total hysterectomy?",
      a: "It may involve slightly less dissection near the cervix, but both are generally safe when performed by an experienced surgeon.",
    },
    {
      q: "How long is the hospital stay for laparoscopic subtotal hysterectomy?",
      a: "Typically 1–2 days, similar to other laparoscopic hysterectomy procedures.",
    },
    {
      q: "How long does recovery take?",
      a: "Most women return to normal activity within 1–2 weeks, with full recovery by around 4–6 weeks.",
    },
    {
      q: "Can subtotal hysterectomy be done if I have abnormal Pap smears?",
      a: "Generally not recommended in that case — a total hysterectomy is usually advised when cervical health is uncertain.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist and laparoscopic surgeon (MS, FMAS) offering laparoscopic hysterectomy, including subtotal approaches discussed on a case-by-case basis.",
    },
    {
      q: "Does Dr. Priyanka Pachauri use laparoscopic technology for hysterectomy?",
      a: "Yes, her clinic uses high-definition 3D laparoscopic technology for precision-based hysterectomy procedures.",
    },
    {
      q: "Will periods stop after subtotal hysterectomy?",
      a: "Yes, periods stop permanently since the uterine lining responsible for menstruation is removed.",
    },
    {
      q: "How can I book a consultation for hysterectomy options in Moradabad?",
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
                Subtotal Hysterectomy Surgeon in Moradabad: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                When a hysterectomy is recommended for a gynaecological
                condition, many women are surprised to learn that there
                isn&apos;t just one type of procedure — the surgery can be
                tailored based on which parts of the reproductive organs are
                removed. A subtotal (or partial) hysterectomy is one such
                variation, where the uterus is removed while the cervix is left
                in place. For the right candidate, this approach offers specific
                benefits worth understanding before making a treatment decision.
                This guide explains what subtotal hysterectomy involves, who
                it&apos;s suitable for, how it compares to total hysterectomy,
                and how to find the right surgeon in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Subtotal Hysterectomy?
              </h2>

              <p className="mb-4 text-gray-700">
                A subtotal hysterectomy, also called a partial or supracervical
                hysterectomy, is a surgical procedure with these defining
                features:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Only the upper part of the uterus (the body) is removed.
                </li>
                <li>
                  The cervix is left intact, unlike a total hysterectomy where
                  the cervix is also removed.
                </li>
                <li>
                  Periods stop completely, since the uterine lining responsible
                  for menstruation is removed.
                </li>
                <li>
                  Pregnancy is no longer possible after the procedure.
                </li>
                <li>
                  The procedure can be performed through laparoscopic (keyhole),
                  open, or in select cases vaginal approaches.
                </li>
                <li>
                  Laparoscopic Subtotal Hysterectomy (LSH) is the modern,
                  minimally invasive version of this surgery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Subtotal vs. Total Hysterectomy: Key Differences
              </h2>

              <div className="mb-6 overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Aspect
                      </th>
                      <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Subtotal Hysterectomy
                      </th>
                      <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Total Hysterectomy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>Cervix</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Preserved
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Removed
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>Surgical complexity</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Generally simpler, shorter operating time
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Slightly more extensive dissection near the cervix
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>Pap smear follow-up</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Still required, since cervix remains
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Not required, as cervix is removed
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>Risk to nearby structures</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Slightly lower, due to less dissection near
                        bladder/ureters
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Marginally higher due to more extensive dissection
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>Cervical cancer risk</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Remains present, since cervix stays
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Eliminated, since cervix is removed
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        <strong>Suitability</strong>
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Best for benign conditions with a healthy cervix
                      </td>
                      <td className="border px-4 py-3 text-sm text-gray-700">
                        Suitable for most conditions, including those involving
                        the cervix
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Good Candidate for Subtotal Hysterectomy?
              </h2>

              <p className="mb-4 text-gray-700">
                A subtotal hysterectomy may be considered suitable when:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The condition being treated (such as fibroids or adenomyosis)
                  does not involve the cervix.
                </li>
                <li>
                  The woman has no history of abnormal cervical Pap smears.
                </li>
                <li>
                  There is no evidence of cervical or endometrial cancer or
                  precancerous changes.
                </li>
                <li>
                  The surgeon assesses that preserving the cervix is technically
                  appropriate for the individual case.
                </li>
                <li>
                  The woman is comfortable continuing routine Pap smear
                  screening after surgery, since the cervix remains.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Avoid Subtotal Hysterectomy?
              </h2>

              <p className="mb-4 text-gray-700">
                Subtotal hysterectomy is generally not recommended when:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  There is known or suspected cervical cancer or precancerous
                  cervical changes.
                </li>
                <li>
                  The woman has a history of persistent abnormal Pap smear
                  results.
                </li>
                <li>
                  There are conditions involving the cervix itself, such as
                  significant cervical fibroids.
                </li>
                <li>
                  Endometrial cancer is present, where total hysterectomy is
                  usually preferred for more definitive treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Some Women Prefer Subtotal Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Shorter operating time</strong>, since less extensive
                  dissection is required near the cervix.
                </li>
                <li>
                  <strong>Potentially lower risk to nearby structures</strong>{" "}
                  like the bladder and ureters.
                </li>
                <li>
                  <strong>Some women feel it offers a sense of preserved pelvic
                  anatomy</strong>.
                </li>
                <li>
                  <strong>Recovery is generally comparable to or slightly faster
                  than total hysterectomy</strong>, especially with the
                  laparoscopic approach.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Some Women Choose Total Hysterectomy Instead
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Eliminates the need for future Pap smears</strong>,
                  since the cervix is removed.
                </li>
                <li>
                  <strong>Removes any future risk of cervical cancer
                  developing</strong> in remaining cervical tissue.
                </li>
                <li>
                  <strong>Preferred when there is any uncertainty about cervical
                  health</strong>.
                </li>
                <li>
                  <strong>Often the standard recommendation</strong> when the
                  underlying condition involves or is close to the cervix.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Laparoscopic Subtotal Hysterectomy (LSH): The Modern Approach
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed through small keyhole incisions, typically 5–10mm.
                </li>
                <li>
                  Uses a high-definition camera and specialised instruments for
                  precise removal of the uterine body.
                </li>
                <li>
                  The cervix is carefully preserved while the rest of the uterus
                  is removed and extracted.
                </li>
                <li>
                  Offers significantly faster recovery compared to open subtotal
                  hysterectomy.
                </li>
                <li>
                  Minimal scarring, since no large abdominal incision is needed.
                </li>
                <li>
                  Shorter hospital stay, typically just 1–2 days.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Advantages of the Laparoscopic Approach
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Less post-operative pain</strong>, reducing dependence
                  on strong painkillers.
                </li>
                <li>
                  <strong>Faster return to daily activities</strong>, usually
                  within 1–2 weeks.
                </li>
                <li>
                  <strong>Lower risk of infection</strong>, due to smaller
                  surgical wounds.
                </li>
                <li>
                  <strong>Reduced intraoperative blood loss</strong> compared to
                  open surgery.
                </li>
                <li>
                  <strong>Better cosmetic outcome</strong>, with barely visible
                  scars.
                </li>
                <li>
                  <strong>High-definition 3D visualisation</strong> allows the
                  surgeon to work with precision around the cervix and
                  surrounding structures.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens Before Surgery?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed medical history and pelvic examination.
                </li>
                <li>
                  Pap smear to confirm the cervix is healthy and suitable for
                  preservation.
                </li>
                <li>
                  Pelvic ultrasound, and MRI in select complex cases.
                </li>
                <li>
                  Blood tests to check for anaemia and overall surgical fitness.
                </li>
                <li>
                  Anaesthesia fitness evaluation.
                </li>
                <li>
                  Detailed discussion comparing subtotal versus total
                  hysterectomy for your specific case.
                </li>
                <li>
                  Informed consent, with all risks, benefits, and alternatives
                  clearly explained.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Laparoscopic Subtotal Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>First 24–48 hours:</strong> Hospital stay, with pain
                  managed through medication.
                </li>
                <li>
                  <strong>First week:</strong> Rest at home, light walking
                  encouraged, avoiding heavy lifting.
                </li>
                <li>
                  <strong>1–2 weeks:</strong> Gradual return to light daily
                  activities and desk-based work.
                </li>
                <li>
                  <strong>2–3 weeks:</strong> Return to more physical activity,
                  based on the surgeon&apos;s assessment.
                </li>
                <li>
                  <strong>4–6 weeks:</strong> Full recovery, including clearance
                  for exercise and heavier activity.
                </li>
                <li>
                  <strong>Follow-up visits:</strong> Regular check-ins to
                  confirm healing is progressing normally.
                </li>
              </ul>

              <p className="mt-4 font-semibold text-gray-900">
                Warning signs that need prompt medical attention:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever or chills.</li>
                <li>Heavy vaginal bleeding.</li>
                <li>Severe or worsening pelvic pain.</li>
                <li>Unusual discharge or foul odour.</li>
                <li>Redness or discharge from incision sites.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Life After Subtotal Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods stop permanently, and pregnancy is no longer possible.
                </li>
                <li>
                  Regular Pap smear screening must continue, since the cervix is
                  still present.
                </li>
                <li>
                  If ovaries are preserved, natural hormone production continues
                  until natural menopause.
                </li>
                <li>
                  Sexual function is generally well preserved, and some women
                  report minimal change in sensation due to cervical
                  preservation.
                </li>
                <li>
                  Occasional light spotting from residual cervical tissue can
                  happen in a small number of cases and should be reported to
                  your doctor.
                </li>
                <li>
                  Regular gynaecological follow-up should continue as advised.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Subtotal Hysterectomy Surgeon
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Qualifications</strong> — MS/MD in Obstetrics &
                  Gynaecology with FMAS or equivalent advanced laparoscopic
                  training.
                </li>
                <li>
                  <strong>Specific experience with LSH</strong>, not just
                  general hysterectomy procedures.
                </li>
                <li>
                  <strong>Technology used</strong> — 3D laparoscopic systems
                  offer greater surgical precision.
                </li>
                <li>
                  <strong>Clear explanation of why subtotal versus total
                  hysterectomy</strong> is being recommended for your case.
                </li>
                <li>
                  <strong>Hospital facilities</strong> for proper post-operative
                  and emergency care.
                </li>
                <li>
                  <strong>Transparent communication</strong> about risks,
                  benefits, and what to expect afterward.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Patient Concerns Before Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Will I feel less like myself after
                  surgery?&quot;</strong> — Most women report no change in
                  identity or overall physical sensation, particularly with
                  cervix preservation.
                </li>
                <li>
                  <strong>&quot;Will my periods really stop completely?&quot;</strong>{" "}
                  — Yes, since the uterine lining responsible for bleeding is
                  removed entirely.
                </li>
                <li>
                  <strong>&quot;Is the procedure painful?&quot;</strong> — The
                  laparoscopic approach significantly reduces post-operative pain
                  compared to open surgery.
                </li>
                <li>
                  <strong>&quot;How soon can I return to work?&quot;</strong> —
                  Most women resume desk-based work within 1–2 weeks after
                  laparoscopic subtotal hysterectomy.
                </li>
                <li>
                  <strong>&quot;Can I still get cervical cancer later?&quot;</strong>{" "}
                  — The risk remains present since the cervix stays, which is
                  why continued Pap smear screening is essential.
                </li>
                <li>
                  <strong>&quot;What if the surgeon finds something unexpected
                  during surgery?&quot;</strong> — In rare cases, a subtotal
                  approach may be converted to total hysterectomy if the cervix
                  appears abnormal, which should be discussed beforehand.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks and Complications to Be Aware Of
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Bleeding during or after surgery</strong>, managed
                  promptly by the surgical team.
                </li>
                <li>
                  <strong>Infection</strong>, significantly reduced with the
                  laparoscopic technique.
                </li>
                <li>
                  <strong>Injury to nearby organs</strong>, rare with
                  experienced, high-definition laparoscopic visualisation.
                </li>
                <li>
                  <strong>Blood clots</strong>, minimised through early
                  mobilisation after surgery.
                </li>
                <li>
                  <strong>Occasional cyclical spotting from residual cervical
                  tissue</strong>, which should be reported if it occurs.
                </li>
                <li>
                  <strong>Anaesthesia-related risks</strong>, assessed and
                  managed through pre-operative fitness evaluation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Hysterectomy Surgeon in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women in Moradabad exploring hysterectomy options, including
                subtotal hysterectomy, Dr. Priyanka Pachauri (MS in Obstetrics &
                Gynaecology, FMAS, Advanced Infertility Fellowship) offers
                advanced, minimally invasive surgical care. Based on her
                official website, (
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
                  individualised, informed patient care.
                </li>
                <li>
                  High-definition 3D laparoscopic technology, well suited to
                  precision-dependent procedures like subtotal hysterectomy.
                </li>
                <li>
                  <strong>Total Laparoscopic Hysterectomy (TLH)</strong> listed
                  among her core laparoscopic services, with the choice between
                  subtotal and total approaches discussed individually based on
                  each patient&apos;s diagnosis, cervical health, and personal
                  preference.
                </li>
                <li>
                  3D/4D ultrasound imaging for accurate pre-operative assessment
                  of the uterus and cervix.
                </li>
                <li>
                  A comprehensive women&apos;s health practice, including
                  fertility and IVF treatment, antenatal care, and postnatal
                  support, under one roof.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Since the choice between subtotal and total hysterectomy depends
                heavily on individual factors — including cervical Pap smear
                history, the specific condition being treated, and personal
                preference — a detailed, one-on-one consultation is the best way
                to determine which approach is right for you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                If you are considering hysterectomy, including a subtotal
                (cervix-preserving) approach, you can reach the clinic through:
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
                Cost Considerations
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic subtotal hysterectomy costs vary</strong>{" "}
                  by hospital, surgeon, and case complexity.
                </li>
                <li>
                  It is often cost-effective overall, given the shorter hospital
                  stay and faster return to work compared to open surgery.
                </li>
                <li>
                  <strong>Insurance coverage varies by policy</strong> —
                  checking your specific terms in advance is recommended.
                </li>
                <li>
                  A detailed cost estimate, covering surgeon&apos;s fees,
                  hospital stay, anaesthesia, and pre-operative tests, should be
                  discussed with the clinic beforehand.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Subtotal hysterectomy removes the uterus while preserving the
                  cervix, unlike total hysterectomy.
                </li>
                <li>
                  It is generally suitable for benign conditions with a healthy
                  cervix and no abnormal Pap smear history.
                </li>
                <li>
                  Laparoscopic Subtotal Hysterectomy (LSH) offers minimal
                  scarring, less pain, and faster recovery than open surgery.
                </li>
                <li>
                  Women who undergo subtotal hysterectomy must continue routine
                  Pap smear screening.
                </li>
                <li>
                  The choice between subtotal and total hysterectomy should be
                  made through a detailed discussion with an experienced
                  gynaecological surgeon.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Subtotal hysterectomy offers a cervix-preserving option for
                women who need a hysterectomy for benign gynaecological
                conditions and have a healthy cervical history. With the
                laparoscopic approach, the procedure has become significantly
                less invasive, offering minimal scarring, less pain, and a much
                faster recovery than traditional open surgery. Whether subtotal
                or total hysterectomy is right for you depends on your specific
                diagnosis, cervical health, and personal preferences — making a
                detailed consultation with an experienced surgeon the essential
                first step toward the right treatment decision.
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
