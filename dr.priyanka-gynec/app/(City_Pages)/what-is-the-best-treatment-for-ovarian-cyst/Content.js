import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function WhatIsBestTreatmentForOvarianCyst() {
  const faqs = [
    {
      q: "What is the best treatment for ovarian cyst?",
      a: "It depends on the cyst type, size and symptoms. Small cysts need monitoring, while persistent or large ones may need laparoscopic surgery.",
    },
    {
      q: "Can an ovarian cyst go away without treatment?",
      a: "Yes. Many functional cysts disappear within 1–3 cycles, confirmed by a repeat scan.",
    },
    {
      q: "When should I choose surgery for an ovarian cyst?",
      a: "When the cyst is large, growing, painful, complex, persistent, or a dermoid or endometrioma.",
    },
    {
      q: "Is laparoscopic cyst removal safe for fertility?",
      a: "Yes. Fertility-preserving cystectomy removes only the cyst and protects the healthy ovary.",
    },
    {
      q: "Do birth control pills cure ovarian cysts?",
      a: "They mainly help prevent new functional cysts and regulate periods. They usually do not shrink existing ones.",
    },
    {
      q: "Is an ovarian cyst dangerous?",
      a: "Most are harmless. Sudden severe pain, fever or fainting needs emergency care.",
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
                What Is the Best Treatment for Ovarian Cyst? A Simple Decision
                Guide
              </h1>


            


              <p className="mb-4 text-gray-700">
                There is no single best treatment for every ovarian cyst. The
                right option depends on what type of cyst you have, how big it
                is, whether it causes symptoms, your age, and whether you want
                to conceive.
              </p>


              <p className="mb-4 text-gray-700">In simple terms:</p>


              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Small, simple, painless cyst:</strong> monitoring with
                  a repeat scan
                </li>
                <li>
                  <strong>Cyst with pain or irregular periods:</strong> medicines
                  and symptom care
                </li>
                <li>
                  <strong>Large, persistent, dermoid or endometrioma cyst:</strong>{" "}
                  laparoscopic (keyhole) cystectomy
                </li>
                <li>
                  <strong>Twisted or ruptured cyst:</strong> urgent surgical care
                </li>
              </ul>


              <p className="text-gray-700">
                The rest of this guide helps you work out which group you fall
                into.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                First, Understand Your Cyst
              </h2>


              <p className="mb-4 text-gray-700">
                Treatment starts with knowing what you are dealing with.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Functional cysts (follicular, corpus luteum):</strong>{" "}
                  linked to the normal cycle and often disappear by themselves
                </li>
                <li>
                  <strong>Dermoid cysts:</strong> contain tissue such as hair or
                  fat and rarely vanish without surgery
                </li>
                <li>
                  <strong>Cystadenomas:</strong> fluid or mucus-filled and may
                  grow large
                </li>
                <li>
                  <strong>Endometriomas:</strong> &quot;chocolate cysts&quot;
                  caused by endometriosis, usually painful
                </li>
                <li>
                  <strong>PCOS follicles:</strong> many small follicles, treated
                  through hormone and lifestyle care rather than surgery
                </li>
                <li>
                  <strong>Complex cysts:</strong> cysts with solid areas or
                  unusual features that need closer evaluation
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Doctors Decide the Best Treatment
              </h2>


              <p className="mb-4 text-gray-700">
                Your gynaecologist usually looks at these factors together:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Ultrasound findings:</strong> size, shape, fluid or
                  solid content
                </li>
                <li>
                  <strong>Symptoms:</strong> pain, bloating, heavy bleeding,
                  pressure
                </li>
                <li>
                  <strong>Age:</strong> menstruating, pregnant or
                  post-menopausal
                </li>
                <li>
                  <strong>Fertility plans:</strong> protecting the ovary if you
                  want to conceive
                </li>
                <li>
                  <strong>Growth over time:</strong> a stable cyst is treated
                  differently from a growing one
                </li>
                <li>
                  <strong>Blood tests:</strong> hormone levels and tumour
                  markers when needed
                </li>
                <li>
                  <strong>Other conditions:</strong> PCOS, endometriosis,
                  fibroids
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Best Treatment by Situation
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If Your Cyst Is Small and Causes No Symptoms
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular monitoring is usually the best approach</li>
                <li>Repeat ultrasound in about 6–8 weeks</li>
                <li>Many functional cysts shrink within 1–3 cycles</li>
                <li>Maintain a balanced diet, exercise and good sleep</li>
                <li>No medicine is needed if the cyst is shrinking</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Have Pain or Bloating
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Doctor-advised pain relief during flare-ups</li>
                <li>Warm compress on the lower abdomen</li>
                <li>Rest and avoiding heavy lifting</li>
                <li>A scan to check whether the cyst is growing</li>
                <li>Early review if the pain worsens</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Have Irregular Periods or PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycle regulation through hormonal treatment where suitable
                </li>
                <li>Weight management and regular activity</li>
                <li>Blood sugar and hormone checks</li>
                <li>Ovulation support if you are trying to conceive</li>
                <li>Long-term follow-up, since PCOS is ongoing</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Have a Dermoid Cyst
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgery is usually advised, because dermoids rarely resolve on
                  their own
                </li>
                <li>
                  Laparoscopic cystectomy removes the cyst and preserves the
                  ovary
                </li>
                <li>
                  Treatment also prevents the risk of ovarian twisting as the
                  cyst grows
                </li>
                <li>The removed cyst may be sent for lab examination</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Have an Endometrioma (&quot;Chocolate Cyst&quot;)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Medical therapy may help control pain in some cases
                </li>
                <li>
                  Surgery is considered for large cysts, severe pain or fertility
                  concerns
                </li>
                <li>
                  Laparoscopic excision treats both the cyst and nearby
                  endometriosis
                </li>
                <li>
                  Timing is important, as repeated surgery can affect ovarian
                  reserve
                </li>
                <li>Fertility planning should be discussed early</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Are Trying to Conceive
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Choose a fertility-preserving approach</li>
                <li>Discuss ovarian reserve (AMH) and scan findings</li>
                <li>
                  Treat the underlying cause, such as PCOS or endometriosis
                </li>
                <li>
                  Consider combined care with a fertility specialist
                </li>
                <li>
                  Avoid delaying consultation while waiting for the cyst to
                  &quot;go away&quot;
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Are Pregnant
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most cysts in pregnancy are harmless and monitored with scans
                </li>
                <li>
                  Many shrink on their own, especially in the first trimester
                </li>
                <li>
                  Surgery is rarely needed and reserved for complications
                </li>
                <li>Report sudden or severe pain immediately</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Are Post-Menopausal
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Cysts after menopause need closer evaluation</li>
                <li>Blood tests and detailed imaging are often advised</li>
                <li>
                  Regular follow-up is important even if the cyst looks simple
                </li>
                <li>
                  Surgery may be recommended more readily than in younger women
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Main Treatment Options Explained
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Watchful Waiting
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Suitable for small, simple cysts</li>
                <li>Involves repeat ultrasound at set intervals</li>
                <li>Avoids unnecessary medicines or surgery</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Medicines
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain relievers for symptom control</li>
                <li>
                  Hormonal pills to regulate cycles and reduce the chance of new
                  functional cysts
                </li>
                <li>These usually do not dissolve an existing cyst</li>
                <li>They must be taken under medical supervision</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Laparoscopic Cystectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Keyhole surgery through small incisions</li>
                <li>Only the cyst is removed, and the ovary is preserved</li>
                <li>Less pain and shorter hospital stay than open surgery</li>
                <li>Faster return to routine activities</li>
                <li>
                  Often the preferred surgical option for persistent, large,
                  dermoid or endometrioma cysts
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Oophorectomy (Removal of the Ovary)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Used only when the ovary is badly damaged, twisted beyond
                  saving, or a serious condition is suspected
                </li>
                <li>Not the first choice for women who wish to conceive</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Open Surgery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Reserved for very large cysts or suspected cancer</li>
                <li>Involves a larger incision and longer recovery</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is Surgery Really Needed?
              </h2>


              <p className="mb-4 text-gray-700">
                Surgery is usually considered when:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The cyst persists for more than 2–3 menstrual cycles</li>
                <li>It is large or keeps growing</li>
                <li>It has a complex appearance on ultrasound</li>
                <li>It causes ongoing pain or pressure</li>
                <li>It is a dermoid cyst or endometrioma</li>
                <li>It affects fertility</li>
                <li>It has twisted or ruptured</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Ovarian Cyst Treatment
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Every cyst needs surgery.
                  <br />
                  <strong>Fact:</strong> Many functional cysts resolve on their
                  own.
                </li>
                <li>
                  <strong>Myth:</strong> Herbal products can dissolve cysts.
                  <br />
                  <strong>Fact:</strong> There is no proven
                  &quot;cyst-dissolving&quot; remedy, so avoid self-treatment.
                </li>
                <li>
                  <strong>Myth:</strong> Surgery always affects fertility.
                  <br />
                  <strong>Fact:</strong> Fertility-sparing cystectomy protects
                  the healthy ovary.
                </li>
                <li>
                  <strong>Myth:</strong> Pain means the cyst is cancerous.
                  <br />
                  <strong>Fact:</strong> Most cysts are benign, but persistent
                  symptoms still need evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> Birth control pills shrink existing
                  cysts.
                  <br />
                  <strong>Fact:</strong> They mainly help prevent new ones.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Do Not Wait
              </h2>


              <p className="mb-4 text-gray-700">
                Seek urgent medical help for:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe pelvic or abdominal pain</li>
                <li>Pain with fever, vomiting or fainting</li>
                <li>Dizziness or rapid breathing</li>
                <li>Heavy vaginal bleeding</li>
                <li>Rapidly increasing abdominal swelling</li>
              </ul>


              <p className="mt-4 text-gray-700">
                These can indicate cyst rupture or ovarian torsion.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Gynaecologist
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What type of cyst do I have, and what size is it?
                </li>
                <li>Can it be monitored, or do I need treatment?</li>
                <li>Will the treatment protect my fertility?</li>
                <li>
                  If surgery is needed, is a laparoscopic approach suitable for
                  me?
                </li>
                <li>
                  What are the risks, recovery time and follow-up plan?
                </li>
                <li>
                  Could the cyst come back, and how can I reduce that risk?
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Treatment
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After medical treatment or monitoring:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Keep your follow-up scans</li>
                <li>Track your periods and symptoms</li>
                <li>Maintain a healthy diet and activity level</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After laparoscopic cystectomy:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild discomfort for a day or two is common</li>
                <li>Early walking is encouraged</li>
                <li>Avoid heavy lifting as advised by your surgeon</li>
                <li>Attend your review visit to discuss the lab report</li>
                <li>Most women return to normal routine within a short period</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad?
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Precision 3D laparoscopic cystectomy that aims to preserve
                  fertility
                </li>
                <li>High-definition 3D laparoscopic surgery facilities</li>
                <li>3D/4D ultrasound for detailed diagnosis</li>
                <li>
                  Expertise in endometriosis, PCOS and menstrual disorders
                </li>
                <li>Fertility and IVF support in the same centre</li>
                <li>
                  Honest advice on whether you need monitoring, medicine or
                  surgery
                </li>
                <li>Continuity of care from consultation to follow-up</li>
              </ul>


              <p className="mt-4 text-gray-700">
                The best treatment for an ovarian cyst is the one chosen after a
                proper scan and an honest discussion about your cyst type,
                symptoms and future plans. Small cysts often need only
                monitoring, medicines help with symptoms and cycle control, and
                laparoscopic cystectomy gives a safe, ovary-preserving option
                when removal is necessary.
              </p>


              <p className="text-gray-700">
                If your cyst is painful, growing, not shrinking, or you are
                planning pregnancy, do not wait. Early advice leads to simpler
                treatment.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation
              </h2>


              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                      <p className="text-sm text-gray-700">
                        Fertility • Maternity • 3D Laparoscopy
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
