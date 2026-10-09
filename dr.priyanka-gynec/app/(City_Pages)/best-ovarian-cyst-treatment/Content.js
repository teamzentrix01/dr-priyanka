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


export default function BestOvarianCystTreatment() {
  const faqs = [
    {
      q: "What is the best treatment for an ovarian cyst?",
      a: "It depends on the cyst type, size and symptoms. Small cysts need monitoring, while persistent or large ones may need laparoscopic cystectomy.",
    },
    {
      q: "Can an ovarian cyst be treated without surgery?",
      a: "Yes. Small functional cysts often disappear on their own with monitoring, and medicines can manage symptoms or prevent new cysts.",
    },
    {
      q: "Is laparoscopic cystectomy safe?",
      a: "Yes, in experienced hands it is a safe, minimally invasive procedure with small incisions and quick recovery.",
    },
    {
      q: "Will ovarian cyst surgery affect my fertility?",
      a: "Fertility-preserving cystectomy removes only the cyst and protects the healthy ovary, so most women can still conceive.",
    },
    {
      q: "How long is the recovery after laparoscopic cyst removal?",
      a: "Most women resume light activity within a few days. Your doctor will advise on full recovery and follow-up.",
    },
    {
      q: "Can ovarian cysts come back?",
      a: "Yes, some can recur, especially with PCOS or endometriosis. Regular follow-up and treating the root cause reduce the risk.",
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
                Best Ovarian Cyst Treatment: Options, Surgery, Recovery &amp; How
                to Choose
              </h1>


              <p className="mb-4 text-gray-700">
                An ovarian cyst diagnosis raises a lot of questions. Do I need
                surgery? Will it affect my fertility? Is there one
                &quot;best&quot; treatment?
              </p>


              <p className="mb-4 text-gray-700">
                The honest answer is that the best ovarian cyst treatment is the
                one that matches your cyst type, size, symptoms, age and plans
                for pregnancy. Some cysts need only monitoring. Others need
                keyhole surgery. This guide explains every option so you can
                talk to your doctor with confidence.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is an Ovarian Cyst?
              </h2>


              <p className="mb-4 text-gray-700">
                An ovarian cyst is a fluid-filled sac on or inside an ovary.
                Most are harmless and form as part of the normal menstrual
                cycle.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common types:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Follicular and corpus luteum cysts (functional):</strong>{" "}
                  often resolve on their own
                </li>
                <li>
                  <strong>Dermoid cysts:</strong> contain tissue like hair or
                  fat and usually need surgery
                </li>
                <li>
                  <strong>Cystadenomas:</strong> can grow large and may need
                  removal
                </li>
                <li>
                  <strong>Endometriomas (&quot;chocolate cysts&quot;):</strong>{" "}
                  linked to endometriosis and often painful
                </li>
                <li>
                  <strong>PCOS-related follicles:</strong> managed through
                  hormonal and lifestyle treatment
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Should Not Be Ignored
              </h2>


              <p className="mb-4 text-gray-700">
                Many cysts cause no symptoms. When they do, you may notice:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic or lower abdominal pain, dull or sharp
                </li>
                <li>Bloating or heaviness in the abdomen</li>
                <li>Painful or irregular periods</li>
                <li>Pain during intercourse</li>
                <li>Frequent urination or pressure on the bladder</li>
                <li>Lower back pain</li>
                <li>Difficulty conceiving</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is an Ovarian Cyst Diagnosed?
              </h2>


              <p className="mb-4 text-gray-700">
                Correct diagnosis comes first, because treatment depends on it.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic examination to check for tenderness or swelling
                </li>
                <li>
                  Ultrasound scan (transvaginal or abdominal) to see size, shape
                  and type of cyst
                </li>
                <li>
                  Blood tests such as hormone levels, and tumour markers like
                  CA-125 when needed
                </li>
                <li>MRI or CT scan for complex or unclear cysts</li>
                <li>Pregnancy test to rule out ectopic pregnancy</li>
                <li>
                  Follow-up scans to track whether the cyst is growing or
                  shrinking
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Decides the &quot;Best&quot; Treatment for You?
              </h2>


              <p className="mb-4 text-gray-700">
                Your gynaecologist will usually consider:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Type of cyst:</strong> functional, dermoid,
                  endometrioma or complex
                </li>
                <li>
                  <strong>Size of the cyst:</strong> small cysts are usually
                  watched, larger ones often treated
                </li>
                <li>
                  <strong>Symptoms:</strong> pain, bleeding, pressure or none
                </li>
                <li>
                  <strong>Your age and menopausal status:</strong> cysts after
                  menopause need closer attention
                </li>
                <li>
                  <strong>Fertility plans:</strong> treatment should protect the
                  ovary if you want a baby
                </li>
                <li>
                  <strong>Appearance on ultrasound:</strong> simple versus
                  complex features
                </li>
                <li>
                  <strong>Other conditions:</strong> PCOS, endometriosis or
                  fibroids
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ovarian Cyst Treatment Options Explained
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Watchful Waiting (Monitoring)
              </h3>
              <p className="mb-2 text-gray-700">
                Best for small, simple, symptom-free cysts.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Repeat ultrasound after about 6–8 weeks
                </li>
                <li>
                  Many functional cysts disappear within 1–3 cycles
                </li>
                <li>
                  No medicine or surgery is needed if the cyst is shrinking
                </li>
                <li>
                  Lifestyle support such as a balanced diet and regular exercise
                  is encouraged
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Pain Relief and Symptom Management
              </h3>
              <p className="mb-2 text-gray-700">
                Used when the cyst causes discomfort.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Doctor-advised pain relievers</li>
                <li>Heat therapy on the lower abdomen</li>
                <li>Rest during painful episodes</li>
                <li>
                  Avoiding heavy lifting or strenuous twisting movements
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Hormonal Medication
              </h3>
              <p className="mb-2 text-gray-700">
                Sometimes advised to regulate cycles and prevent new functional
                cysts.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal contraceptive pills may reduce the chance of new
                  cysts forming
                </li>
                <li>They generally do not shrink an existing cyst</li>
                <li>They also help with irregular periods and PCOS</li>
                <li>
                  They are not suitable for everyone, so always take them under
                  medical supervision
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Laparoscopic Cystectomy (Keyhole Surgery)
              </h3>
              <p className="mb-2 text-gray-700">
                This is often considered the preferred surgical option when a
                cyst needs to be removed.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The surgeon makes a few tiny incisions
                </li>
                <li>
                  A camera guides the removal of the cyst only
                </li>
                <li>
                  The healthy ovary is preserved, protecting fertility
                </li>
                <li>
                  Pain is generally lower than with open surgery
                </li>
                <li>
                  Hospital stay is short, often day-care or 1–2 days
                </li>
                <li>
                  Return to routine activities is usually faster
                </li>
              </ul>
              <p className="mb-2 text-gray-700">
                <strong>Typically recommended for:</strong>
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cysts that persist beyond 2–3 cycles</li>
                <li>Large or growing cysts</li>
                <li>Dermoid cysts and endometriomas</li>
                <li>Cysts causing persistent pain</li>
                <li>Cysts affecting fertility</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Laparoscopic Oophorectomy (Removal of the Ovary)
              </h3>
              <p className="mb-2 text-gray-700">
                Reserved for specific situations.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severely damaged ovary</li>
                <li>Twisted ovary that cannot be saved</li>
                <li>Suspicion of a serious condition</li>
                <li>
                  Chosen only when ovary preservation is not possible
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Open Surgery (Laparotomy)
              </h3>
              <p className="mb-2 text-gray-700">Used less often today.</p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Very large cysts</li>
                <li>Suspected cancer</li>
                <li>Complicated cases where keyhole surgery is unsafe</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Treating the Underlying Condition
              </h3>
              <p className="mb-2 text-gray-700">
                Often the cyst is a symptom of a deeper issue.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>PCOS:</strong> lifestyle changes, cycle regulation and
                  ovulation support
                </li>
                <li>
                  <strong>Endometriosis:</strong> medical therapy or laparoscopic
                  excision of endometriosis
                </li>
                <li>
                  <strong>Fertility problems:</strong> coordinated care with a
                  fertility specialist
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Quick Comparison of Treatment Options
              </h2>


              <div className="mb-6 overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Treatment
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Best For
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Preserves Ovary?
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Recovery
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Watchful waiting
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Small simple cysts
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Yes</td>
                      <td className="border border-gray-300 px-4 py-2">None</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Hormonal pills
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Preventing new cysts
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Yes</td>
                      <td className="border border-gray-300 px-4 py-2">None</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Laparoscopic cystectomy
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Persistent, large, dermoid, endometrioma
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Yes</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Short
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Oophorectomy
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Damaged or twisted ovary
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        No (one ovary removed)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Short–moderate
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Open surgery
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Very large or suspicious cysts
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Depends
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Longer
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Many Doctors Prefer Laparoscopic Cystectomy
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fertility protection:</strong> only the cyst is
                  removed
                </li>
                <li>
                  <strong>Smaller scars:</strong> tiny keyhole incisions
                </li>
                <li>
                  <strong>Less pain and bleeding:</strong> compared with open
                  surgery
                </li>
                <li>
                  <strong>Faster recovery:</strong> many women resume light
                  activity within days
                </li>
                <li>
                  <strong>Magnified 3D vision:</strong> high-definition imaging
                  helps the surgeon separate cyst from healthy tissue carefully
                </li>
                <li>
                  <strong>Lower risk of adhesions:</strong> gentler handling of
                  tissue
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect Before, During and After Surgery
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before surgery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ultrasound, blood tests and a fitness check</li>
                <li>Fasting for several hours before the procedure</li>
                <li>
                  A discussion of anaesthesia, risks and your fertility goals
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During surgery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>General anaesthesia is given</li>
                <li>
                  Small incisions are made near the navel and lower abdomen
                </li>
                <li>
                  The cyst is separated and removed, and the ovary is preserved
                  wherever possible
                </li>
                <li>
                  The removed tissue may be sent for lab examination
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After surgery:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild shoulder or abdominal discomfort for a day or two
                </li>
                <li>Walking is encouraged early</li>
                <li>
                  Avoid heavy lifting for the period your surgeon advises
                </li>
                <li>
                  Follow-up visit to review the report and healing
                </li>
                <li>Normal periods usually resume as expected</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ovarian Cyst Treatment and Fertility
              </h2>


              <p className="mb-4 text-gray-700">
                Most women can conceive after cyst treatment, especially when
                the ovary is preserved.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fertility-sparing surgery protects healthy ovarian tissue
                </li>
                <li>
                  Endometriomas and large cysts can affect ovarian reserve, so
                  timing matters
                </li>
                <li>
                  Early consultation helps if you are planning pregnancy
                </li>
                <li>
                  Fertility and IVF support may be considered where needed
                </li>
                <li>
                  Cysts during pregnancy are usually monitored closely
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Seek Emergency Care
              </h2>


              <p className="mb-4 text-gray-700">
                Contact your doctor or go to a hospital immediately if you have:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe pelvic or abdominal pain</li>
                <li>Pain with fever, vomiting or fainting</li>
                <li>Rapid breathing or dizziness</li>
                <li>Heavy bleeding</li>
                <li>Quickly increasing abdominal swelling</li>
              </ul>


              <p className="mt-4 text-gray-700">
                These may point to cyst rupture or ovarian torsion, which need
                urgent treatment.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Doctor for Ovarian Cyst Treatment
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Look for an experienced gynaecologist trained in laparoscopic
                  surgery
                </li>
                <li>Ask whether the approach is fertility-preserving</li>
                <li>
                  Check whether advanced imaging and 3D laparoscopy are
                  available
                </li>
                <li>Choose a doctor who explains all options, not just surgery</li>
                <li>Make sure follow-up care is included</li>
                <li>Read genuine patient reviews and stories</li>
                <li>Prefer a clinic where you feel heard and comfortable</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad
              </h2>


              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec follows a &quot;Her Health First&quot;
                approach, combining expertise with compassionate care.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Precision 3D laparoscopic cystectomy designed to preserve
                  fertility
                </li>
                <li>High-definition 3D laparoscopic surgery facilities</li>
                <li>3D/4D ultrasound for detailed diagnosis</li>
                <li>
                  Expert care for endometriosis, PCOS and menstrual disorders
                </li>
                <li>Fertility and IVF support under the same roof</li>
                <li>
                  Continuity of care from first consultation through follow-up
                </li>
                <li>
                  Honest guidance on whether you need monitoring, medicine or
                  surgery
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                There is no single best ovarian cyst treatment for everyone.
                Small cysts often need only monitoring, hormonal medicines help
                prevent new cysts, and laparoscopic cystectomy offers a safe,
                fertility-preserving option when a cyst must be removed.
              </p>


              <p className="text-gray-700">
                The most important step is an accurate diagnosis by an
                experienced gynaecologist. If you have persistent pain, a cyst
                that is not shrinking, irregular periods or plans to conceive,
                book a consultation early.
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
