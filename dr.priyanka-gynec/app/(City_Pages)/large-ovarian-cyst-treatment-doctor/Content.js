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

export default function LargeOvarianCystTreatmentDoctor() {
  const faqs = [
    {
      q: 'What size ovarian cyst is considered "large"?',
      a: "There's no single universal cutoff; your surgeon evaluates the specific size, growth, and characteristics of your cyst through imaging.",
    },
    {
      q: "Can large ovarian cysts always be removed laparoscopically?",
      a: "Not always — very large or complex cysts sometimes require open surgery for safe, complete removal.",
    },
    {
      q: "Are large ovarian cysts more likely to be cancerous?",
      a: "Larger and more complex-looking cysts generally warrant more thorough evaluation, though most ovarian cysts remain benign.",
    },
    {
      q: "What is the biggest risk of leaving a large cyst untreated?",
      a: "The main risks are ovarian torsion and rupture, both of which can cause severe pain and require emergency surgery.",
    },
    {
      q: "Will I lose my ovary if I have a large cyst removed?",
      a: "Surgeons generally aim to preserve the ovary when possible, but removal may be necessary if the tissue is significantly damaged.",
    },
    {
      q: "How long is recovery after large ovarian cyst surgery?",
      a: "Recovery is typically 3–4 weeks for laparoscopic removal, or 4–6 weeks if open surgery is required.",
    },
    {
      q: "Does gynaecologistmoradabad.com treat large ovarian cysts?",
      a: "The site lists laparoscopic cystectomy as a core service; confirm directly whether your specific large cyst is suitable for this approach.",
    },
    {
      q: "What reports should I bring to my large ovarian cyst consultation?",
      a: "Bring your ultrasound/CT/MRI reports, any tumor marker blood test results, and a record of your symptoms.",
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
                Large Ovarian Cyst Treatment Doctor: Complete Guide to Diagnosis
                and Surgery
              </h1>

              <p className="mb-4 text-gray-700">
                A diagnosis of a large ovarian cyst often raises more questions
                and concerns than a smaller, simple cyst — particularly around
                surgical approach, risks, and recovery. If you&apos;re searching
                for a large ovarian cyst treatment doctor, this guide explains
                what qualifies as a &quot;large&quot; cyst, why size changes the
                treatment approach, surgical options available, and how to
                choose the right specialist for your care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Considered a Large Ovarian Cyst?
              </h2>

              <p className="mb-4 text-gray-700">
                Ovarian cysts vary widely in size, and while there&apos;s no
                single universal cutoff, cysts are generally categorized based
                on size ranges that influence risk and treatment decisions:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Small cysts</strong> — often just monitored, as many
                  resolve naturally within a few menstrual cycles.
                </li>
                <li>
                  <strong>Medium cysts</strong> — may require closer monitoring
                  or treatment depending on symptoms and type.
                </li>
                <li>
                  <strong>Large cysts</strong> — generally refers to cysts that
                  have grown significantly larger, often to a size where they
                  become more likely to cause symptoms, complications, or
                  require surgical removal rather than watchful waiting.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your gynaecologist will assess the exact size, growth pattern,
                and characteristics of your specific cyst through ultrasound and
                other imaging to determine the right category and treatment
                approach for your case.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Cyst Size Significantly Changes the Treatment Approach
              </h2>

              <p className="mb-4 text-gray-700">
                As ovarian cysts grow larger, several important factors come
                into play:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Increased risk of ovarian torsion</strong> — larger
                  cysts add weight and can cause the ovary to twist on itself,
                  cutting off blood supply and requiring emergency surgery.
                </li>
                <li>
                  <strong>Higher risk of rupture</strong> — a large cyst
                  rupturing can cause sudden severe pain and internal bleeding,
                  sometimes requiring urgent intervention.
                </li>
                <li>
                  <strong>Greater likelihood of pressure symptoms</strong> —
                  larger cysts are more likely to press on the bladder, bowel,
                  or other pelvic structures, causing noticeable discomfort.
                </li>
                <li>
                  <strong>More careful evaluation for malignancy</strong> —
                  while most ovarian cysts are benign, larger and more
                  complex-looking cysts warrant more thorough assessment to rule
                  out cancer.
                </li>
                <li>
                  <strong>Surgical technique considerations</strong> — very
                  large cysts may not always be safely removable through
                  laparoscopic (keyhole) surgery alone, sometimes requiring open
                  surgery for safe, complete removal.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of a Large Ovarian Cyst
              </h2>

              <p className="mb-4 text-gray-700">
                While some ovarian cysts cause no symptoms even at a larger
                size, common signs include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Persistent or worsening pelvic pain or pressure, often more
                  noticeable than with smaller cysts.
                </li>
                <li>
                  Visible abdominal swelling or bloating, sometimes significant
                  enough to be noticeable to the patient or others.
                </li>
                <li>
                  Feeling full quickly after eating small amounts, due to
                  pressure on the stomach or bowel.
                </li>
                <li>
                  Frequent urination or difficulty fully emptying the bladder,
                  from pressure on the bladder.
                </li>
                <li>
                  Pain during intercourse.
                </li>
                <li>
                  Irregular menstrual cycles, in some cases.
                </li>
                <li>
                  Sudden, severe abdominal pain — a possible sign of torsion or
                  rupture, requiring emergency medical attention.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Large Ovarian Cysts Are Diagnosed
              </h2>

              <p className="mb-4 text-gray-700">
                Given the higher stakes involved with larger cysts, diagnosis
                typically involves a more thorough evaluation:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pelvic ultrasound (transvaginal and/or
                  abdominal)</strong> — the primary tool to measure size,
                  structure, and characteristics of the cyst.
                </li>
                <li>
                  <strong>CT scan or MRI</strong> — often recommended for larger
                  or more complex cysts to get a more detailed anatomical
                  picture before surgery.
                </li>
                <li>
                  <strong>Blood tests (tumor markers)</strong> — such as CA-125,
                  particularly important for larger cysts to help assess the
                  likelihood of malignancy.
                </li>
                <li>
                  <strong>Physical examination</strong>, to assess size,
                  mobility, and any tenderness.
                </li>
                <li>
                  <strong>Review of symptoms and medical history</strong>,
                  including any family history of ovarian or related cancers.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Large Ovarian Cysts
              </h2>

              <p className="mb-4 text-gray-700">
                Unlike smaller functional cysts that often resolve on their own,
                large cysts typically require active treatment:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Cystectomy (When Suitable)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many large cysts can still be removed laparoscopically,
                  depending on their size, location, and characteristics.
                </li>
                <li>
                  Surgeons may use specialized techniques to safely drain or
                  manage the cyst during removal through small incisions.
                </li>
                <li>
                  Offers the usual laparoscopic benefits — less pain, shorter
                  hospital stay, and faster recovery — when appropriate for the
                  specific case.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Open Surgery (Laparotomy)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recommended when a cyst is too large or complex for safe
                  laparoscopic removal.
                </li>
                <li>
                  Provides the surgeon direct visualization and control, which
                  can be important for very large or potentially
                  malignant-looking cysts.
                </li>
                <li>
                  Involves a longer recovery period compared to laparoscopic
                  surgery, but remains an important, safe option for appropriate
                  cases.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Oophorectomy (Ovary Removal)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sometimes necessary if the cyst has significantly damaged the
                  ovary, or if malignancy is suspected and requires more
                  extensive surgical management.
                </li>
                <li>
                  The decision to remove the entire ovary versus just the cyst
                  depends on the specific findings during surgery and
                  pre-surgical assessment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Surgeons Decide Between Laparoscopic and Open Surgery for
                Large Cysts
              </h2>

              <p className="mb-4 text-gray-700">
                This decision typically depends on several factors your surgeon
                will evaluate:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Exact cyst size and how much it has grown on repeat imaging.
                </li>
                <li>
                  Cyst characteristics on ultrasound/MRI — simple, fluid-filled
                  cysts are generally more favorable for laparoscopic removal
                  than complex, solid, or mixed cysts.
                </li>
                <li>
                  Suspicion of malignancy, which often favors an open surgical
                  approach for thorough exploration.
                </li>
                <li>
                  Patient&apos;s overall health and anaesthesia risk factors.
                </li>
                <li>
                  Surgeon&apos;s experience and comfort level with complex
                  laparoscopic cases.
                </li>
                <li>
                  Availability of appropriate surgical technology and support
                  staff.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect: The Large Ovarian Cyst Treatment Journey
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Initial Consultation</strong> — Review of
                  symptoms, imaging, and medical history.
                </li>
                <li>
                  <strong>Step 2: Detailed Imaging</strong> — Ultrasound, and
                  often CT/MRI, to fully assess cyst size and characteristics.
                </li>
                <li>
                  <strong>Step 3: Blood Tests</strong> — Tumor markers and
                  other relevant tests to assess risk.
                </li>
                <li>
                  <strong>Step 4: Surgical Planning</strong> — Decision between
                  laparoscopic and open surgery based on the full evaluation.
                </li>
                <li>
                  <strong>Step 5: Pre-Surgery Preparation</strong> — Fitness
                  assessment, anaesthesia consultation, and instructions.
                </li>
                <li>
                  <strong>Step 6: Surgery Day</strong> — Performed under general
                  anaesthesia; duration varies based on cyst size and
                  complexity.
                </li>
                <li>
                  <strong>Step 7: Pathology Report</strong> — Removed tissue
                  examined to confirm benign versus other findings.
                </li>
                <li>
                  <strong>Step 8: Recovery and Follow-Up</strong> — Monitoring
                  healing and reviewing pathology results with your surgeon.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Large Ovarian Cyst Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery expectations vary significantly depending on whether
                laparoscopic or open surgery was performed:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic removal:</strong> Hospital stay of about
                  1–2 days, light activity within 1–2 weeks, and full recovery
                  generally within 3–4 weeks.
                </li>
                <li>
                  <strong>Open surgery:</strong> Hospital stay of about 3–5
                  days, with full recovery typically taking 4–6 weeks due to the
                  larger incision.
                </li>
                <li>
                  <strong>Pain management:</strong> Mild to moderate discomfort
                  is normal in the initial days, managed with prescribed
                  medication.
                </li>
                <li>
                  <strong>Follow-up visits:</strong> Typically scheduled within
                  the first 1–2 weeks and again around 6 weeks to confirm
                  healing and review pathology results.
                </li>
                <li>
                  <strong>Activity restrictions:</strong> Heavy lifting and
                  strenuous exercise are generally avoided until specifically
                  cleared by your surgeon.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Large Ovarian Cyst Treatment Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Given the added complexity and higher stakes with large cysts,
                choosing the right surgeon matters significantly:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Experience with both laparoscopic and open surgical
                  techniques, ensuring the recommendation is based on your case,
                  not the surgeon&apos;s limitations.
                </li>
                <li>
                  Access to advanced imaging (ultrasound, CT/MRI) for thorough
                  pre-surgical evaluation.
                </li>
                <li>
                  Tumor marker testing capability, especially important for
                  larger, more complex cysts.
                </li>
                <li>
                  Clear, honest communication about surgical risks, technique
                  choice, and realistic recovery expectations.
                </li>
                <li>
                  Coordination with pathology services to properly evaluate
                  removed tissue.
                </li>
                <li>
                  Emergency readiness, in case torsion or rupture requires
                  urgent surgical intervention.
                </li>
                <li>
                  Transparent discussion of costs, since larger or more complex
                  surgeries often involve a wider cost range.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Large Ovarian Cyst Surgeon
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Based on my imaging, what is the exact size and
                  characteristics of my cyst?
                </li>
                <li>
                  Do you recommend laparoscopic or open surgery for my specific
                  case, and why?
                </li>
                <li>
                  What is my individual risk of malignancy based on the imaging
                  and blood tests?
                </li>
                <li>
                  What is the expected hospital stay and full recovery timeline?
                </li>
                <li>
                  Will you be able to preserve my ovary, or is removal likely
                  necessary?
                </li>
                <li>
                  What happens if the surgery reveals something unexpected once
                  you begin?
                </li>
                <li>
                  What is the total estimated cost for my specific case?
                </li>
                <li>
                  When will I receive the pathology results, and what are the
                  next steps depending on the outcome?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For those searching for a large ovarian cyst treatment doctor,
                Dr. Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) is a relevant specialist based in Moradabad. Here&apos;s an
                analysis of what her website offers for this specific concern:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Her clinic, Dr. Priyanka Gynaec, lists &quot;Laparoscopic
                  Cystectomy&quot; as a core service, described as
                  &quot;Precision 3D keyhole surgery to remove ovarian cysts
                  while preserving fertility.&quot;
                </li>
                <li>
                  The clinic&apos;s use of 3D laparoscopic technology, AI-based
                  imaging, and advanced ultrasound supports the detailed
                  evaluation needed before deciding on the right surgical
                  approach for a large cyst.
                </li>
                <li>
                  The website&apos;s overall focus is on minimally invasive,
                  laparoscopic techniques, though — as with most experienced
                  laparoscopic surgeons — cases requiring open surgery for very
                  large or complex cysts would need to be discussed and
                  confirmed directly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details of Dr. Priyanka Gynaec, Moradabad
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
              <p className="text-gray-700">
                A large ovarian cyst treatment doctor should offer thorough
                diagnostic evaluation, honest discussion about laparoscopic
                versus open surgical options, and a clear plan tailored to your
                specific cyst&apos;s size and characteristics. Given the higher
                stakes involved with larger cysts — including torsion, rupture,
                and the need to rule out malignancy — choosing an experienced
                surgeon and getting a detailed, personalized assessment is
                essential before proceeding with treatment.
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