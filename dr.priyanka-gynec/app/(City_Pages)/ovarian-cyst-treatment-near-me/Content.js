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


export default function OvarianCystTreatmentNearMe() {
  const faqs = [
    {
      q: "How do I find ovarian cyst treatment near me?",
      a: "Look for a gynaecologist with ultrasound and laparoscopy facilities, such as Dr. Priyanka Gynaec, Moradabad.",
    },
    {
      q: "Do all ovarian cysts need surgery?",
      a: "No. Many small functional cysts disappear by themselves.",
    },
    {
      q: "When should I go to the hospital urgently?",
      a: "For sudden severe pelvic pain, fainting, vomiting with pain or heavy bleeding.",
    },
    {
      q: "What is laparoscopic cystectomy?",
      a: "Keyhole surgery that removes the cyst while preserving healthy ovarian tissue.",
    },
    {
      q: "Will cyst surgery affect my fertility?",
      a: "Laparoscopic cystectomy aims to protect fertility, but discuss your ovarian reserve beforehand.",
    },
    {
      q: "How long is recovery after keyhole surgery?",
      a: "Many women go home within a day and resume light routine in about a week.",
    },
    {
      q: "Can I send my scan report before visiting?",
      a: "Yes. You can share reports on WhatsApp at +91 89796 70705.",
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
                Ovarian Cyst Treatment Near Me: How to Find the Right Doctor
                and What Care to Expect in Moradabad
              </h1>


              <p className="mb-4 text-gray-700">
                When you type &quot;ovarian cyst treatment near me&quot; into a
                search bar, you are usually worried about something. It may be a
                scan result, a sudden pain or a doctor&apos;s advice to
                &quot;get it checked.&quot; You want a specialist who is nearby,
                experienced and honest about whether surgery is really needed.
              </p>


              <p className="mb-4 text-gray-700">
                This guide explains why proximity matters, when to go urgently,
                which symptoms to watch, what treatment options exist, how to
                choose a nearby doctor and what care looks like at Dr. Priyanka
                Gynaec in Moradabad.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why &quot;Near Me&quot; Matters for Ovarian Cyst Care
              </h2>


              <p className="mb-4 text-gray-700">
                Cyst care often involves more than one visit.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Follow-up scans:</strong> many cysts are rechecked
                  after one to three menstrual cycles.
                </li>
                <li>
                  <strong>Emergencies:</strong> a twisted or burst cyst needs
                  fast access to a hospital.
                </li>
                <li>
                  <strong>Pre-surgery tests:</strong> blood tests and anaesthesia
                  checks need a visit or two.
                </li>
                <li>
                  <strong>Post-surgery review:</strong> a follow-up visit is
                  usually advised after surgery.
                </li>
                <li>
                  <strong>Lower stress:</strong> a short commute is easier when
                  you are in pain or recovering.
                </li>
                <li>
                  <strong>Family support:</strong> relatives can visit and help
                  more easily.
                </li>
                <li>
                  <strong>Continuity:</strong> the same team can follow your
                  health over time.
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                A nearby clinic is useful, but the doctor&apos;s experience and
                the clinic&apos;s facilities matter even more.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Ovarian Cysts Quickly
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  An ovarian cyst is a fluid-filled sac on or inside an ovary.
                </li>
                <li>
                  Most are harmless and many disappear without treatment.
                </li>
                <li>
                  <strong>Functional cysts</strong> are linked to the normal
                  cycle and often resolve within one to three cycles.
                </li>
                <li>
                  <strong>Pathological cysts</strong> need closer attention:
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>
                      <strong>Endometrioma (chocolate cyst):</strong> linked
                      with endometriosis and pelvic pain
                    </li>
                    <li>
                      <strong>Dermoid cyst:</strong> contains tissue such as
                      hair or fat and does not disappear on its own
                    </li>
                    <li>
                      <strong>Cystadenoma:</strong> can grow large and usually
                      needs removal
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>PCOS ovaries</strong> contain many small follicles,
                  which are different from true cysts.
                </li>
                <li>
                  <strong>Cancerous cysts</strong> are rare, especially in
                  younger women, but suspicious features always need evaluation.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Mean You Should See a Doctor Soon
              </h2>


              <p className="mb-4 text-gray-700">
                Many cysts cause no symptoms. See a gynaecologist if you notice:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dull or sharp pain in the lower abdomen or pelvis, often on
                  one side
                </li>
                <li>A feeling of heaviness, pressure or bloating</li>
                <li>Pain during intercourse</li>
                <li>Pain during bowel movements or urination</li>
                <li>Irregular, heavy or painful periods</li>
                <li>Frequent urge to pass urine</li>
                <li>Lower backache</li>
                <li>Feeling full after small meals</li>
                <li>Difficulty in conceiving</li>
                <li>A cyst found on a scan, even without symptoms</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Signs: Do Not Search, Go Now
              </h2>


              <p className="mb-4 text-gray-700">
                Go to the nearest hospital immediately if you have any of the
                following.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe abdominal or pelvic pain</li>
                <li>Pain with fever or vomiting</li>
                <li>Dizziness, fainting or weakness</li>
                <li>Rapid breathing or a racing heartbeat</li>
                <li>Heavy vaginal bleeding</li>
                <li>A swollen, very tender abdomen</li>
              </ul>


              <p className="mt-4 text-gray-700">
                These may signal cyst rupture or ovarian torsion (twisting of
                the ovary). Torsion is time-sensitive, because delayed treatment
                can risk the ovary.
              </p>


              <p className="mt-4 text-gray-700">
                If you are in severe pain, do not wait for an online appointment.
                Go to an emergency department.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Ovarian Cysts Are Diagnosed
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pelvic examination:</strong> may detect swelling or
                  tenderness
                </li>
                <li>
                  <strong>Ultrasound (transvaginal or abdominal):</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>The main test</li>
                    <li>Shows size, position and character of the cyst</li>
                    <li>3D/4D ultrasound: gives additional detail where needed</li>
                  </ul>
                </li>
                <li>
                  <strong>Pregnancy test:</strong> rules out ectopic pregnancy
                  and guides safe testing
                </li>
                <li>
                  <strong>Blood tests:</strong> hormones and, when indicated,
                  tumour markers such as CA-125 (interpreted carefully, since it
                  can rise in endometriosis too)
                </li>
                <li>
                  <strong>MRI or CT scan:</strong> in unclear or complex cases
                </li>
                <li>
                  <strong>Diagnostic laparoscopy:</strong> when imaging cannot
                  clearly decide the plan
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ovarian Cyst Treatment Options
              </h2>


              <p className="mb-4 text-gray-700">
                Treatment depends on the cyst type, size, symptoms, your age and
                your fertility plans.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Watchful Waiting
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Suitable for:</strong> small, simple, symptom-free
                  cysts
                </li>
                <li>
                  <strong>Plan:</strong> a repeat ultrasound after one to three
                  menstrual cycles
                </li>
                <li>
                  <strong>Why it works:</strong> most functional cysts resolve by
                  themselves
                </li>
                <li>
                  <strong>Advantage:</strong> no medicine or surgery
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Medicines
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pain relief:</strong> as advised by your doctor
                </li>
                <li>
                  <strong>Hormonal medicines:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>May help prevent new functional cysts</li>
                    <li>Usually do not shrink existing cysts</li>
                    <li>Not suitable if you are trying to conceive</li>
                  </ul>
                </li>
                <li>
                  <strong>Treatment of the underlying cause:</strong> such as
                  PCOS or endometriosis
                </li>
              </ul>
              <p className="mb-6 text-gray-700">
                <strong>Caution:</strong> do not self-medicate.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Laparoscopic Cystectomy (Keyhole Surgery)
              </h3>
              <p className="mb-2 text-gray-700">
                This is the preferred surgical option for most cysts that need
                removal.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it is:</strong> removal of the cyst through small
                  incisions using a camera and fine instruments
                </li>
                <li>
                  <strong>Fertility-preserving:</strong> the cyst is removed
                  while healthy ovarian tissue is protected
                </li>
                <li>
                  <strong>3D laparoscopy:</strong> gives the surgeon better
                  depth perception for precise work
                </li>
                <li>
                  <strong>Advised for:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Large cysts that persist</li>
                    <li>Cysts causing pain or pressure</li>
                    <li>Endometriomas and dermoid cysts</li>
                    <li>Cysts with a complex appearance</li>
                    <li>Cysts that keep returning</li>
                  </ul>
                </li>
                <li>
                  <strong>Advantages:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Small cuts and less pain</li>
                    <li>Short hospital stay, often one day</li>
                    <li>Faster recovery than open surgery</li>
                    <li>Less scarring and fewer adhesions</li>
                  </ul>
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Open Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reserved for very large cysts or when cancer is strongly
                  suspected
                </li>
                <li>Needs a larger incision and longer recovery</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Removal of the Ovary
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Only in special situations, such as a twisted ovary that has
                  lost its blood supply or a very suspicious cyst
                </li>
                <li>
                  The aim is always to preserve the ovary wherever it is safe.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cysts and Pregnancy
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cysts are common in early pregnancy, often corpus luteum
                  cysts.
                </li>
                <li>Most resolve by themselves in the second trimester.</li>
                <li>Regular scans track size and appearance.</li>
                <li>
                  Surgery is considered only for large, painful, twisted or
                  suspicious cysts, and is usually done in the second trimester
                  when required.
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Always tell your doctor if you are pregnant or trying to
                conceive.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cysts and Fertility
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Most simple cysts do not reduce fertility.</li>
                <li>
                  Endometriomas can affect ovarian reserve and egg quality.
                </li>
                <li>
                  Surgery should be planned to protect ovarian tissue.
                </li>
                <li>
                  A specialist can coordinate cyst treatment with ovulation
                  induction, IUI or IVF if needed.
                </li>
                <li>
                  Early advice helps young women who wish to conceive later.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Ovarian Cyst Doctor Near You
              </h2>


              <p className="mb-4 text-gray-700">Use this checklist when comparing clinics.</p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Qualifications and experience:</strong> confirm the
                  doctor&apos;s degrees and experience in laparoscopic surgery.
                </li>
                <li>
                  <strong>Surgical technology:</strong> look for 3D or
                  high-definition laparoscopy.
                </li>
                <li>
                  <strong>Imaging facilities:</strong> on-site ultrasound saves
                  time.
                </li>
                <li>
                  <strong>Ethical approach:</strong> the doctor should advise
                  surgery only when it is truly needed.
                </li>
                <li>
                  <strong>Fertility awareness:</strong> a doctor who discusses
                  preserving your ovaries and fertility
                </li>
                <li>
                  <strong>Clear communication:</strong> you should understand
                  your diagnosis in simple language.
                </li>
                <li>
                  <strong>Cost transparency:</strong> a written, itemised
                  estimate
                </li>
                <li>
                  <strong>Emergency access:</strong> a clinic that can guide you
                  quickly in an urgent situation
                </li>
                <li>
                  <strong>Continuity of care:</strong> a team that can follow
                  you for gynaecological, fertility and pregnancy care
                </li>
                <li>
                  <strong>Reachability:</strong> phone and WhatsApp responses
                </li>
                <li>
                  <strong>Patient trust:</strong> genuine reviews and word of
                  mouth
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What type of cyst do I have?</li>
                <li>Does it really need treatment, or can we watch it?</li>
                <li>What are my options, and which do you recommend?</li>
                <li>Will my ovary and fertility be protected?</li>
                <li>Is keyhole surgery suitable for me?</li>
                <li>
                  What is the total estimated cost and what is included?
                </li>
                <li>How long will I stay in the hospital?</li>
                <li>How long will recovery take?</li>
                <li>How often will I need follow-up scans?</li>
                <li>What should I do if the pain returns?</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Visit
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A calm conversation about your symptoms, cycles and health
                  history
                </li>
                <li>A physical examination</li>
                <li>An ultrasound, often on the same visit</li>
                <li>Review of any earlier scans and reports</li>
                <li>
                  A clear explanation of what the cyst is and what it means
                </li>
                <li>
                  An honest discussion of options, including observation
                </li>
                <li>A written plan with next steps and timelines</li>
                <li>Time for every question you have</li>
              </ul>


              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Bring with you:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>All previous scans and reports</li>
                <li>A list of current medicines</li>
                <li>Details of your menstrual cycle</li>
                <li>Information about previous surgeries or pregnancies</li>
                <li>A family member for support, if you wish</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Laparoscopic Cystectomy
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hospital stay:</strong> often one day, depending on
                  the case
                </li>
                <li>
                  <strong>Pain:</strong> mild to moderate, managed with
                  medicines
                </li>
                <li>
                  <strong>Shoulder-tip pain:</strong> common for a day or two
                </li>
                <li>
                  <strong>Walking:</strong> encouraged on the same or next day
                </li>
                <li>
                  <strong>Return to routine:</strong> often within about a week,
                  depending on your work
                </li>
                <li>
                  <strong>Avoid:</strong> heavy lifting and strenuous exercise
                  until your doctor allows
                </li>
                <li>
                  <strong>Wound care:</strong> keep incisions clean and dry
                </li>
                <li>
                  <strong>Follow-up:</strong> a review visit to discuss results
                  and next steps
                </li>
              </ul>


              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Call your doctor if you develop:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever or chills</li>
                <li>Increasing pain</li>
                <li>Heavy bleeding</li>
                <li>Redness or discharge at the incision</li>
                <li>Persistent vomiting</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Habits That Support Ovarian Health
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain a healthy weight.</li>
                <li>
                  Eat a balanced diet with vegetables, fruit, pulses and whole
                  grains.
                </li>
                <li>Exercise regularly.</li>
                <li>Manage stress and sleep well.</li>
                <li>Track your menstrual cycle.</li>
                <li>Avoid smoking and limit alcohol.</li>
                <li>Do not ignore persistent pelvic pain.</li>
                <li>Attend follow-up scans as advised.</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Ovarian Cyst Treatment
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> every cyst needs surgery.
                  <br />
                  <strong>Fact:</strong> many functional cysts resolve on their
                  own.
                </li>
                <li>
                  <strong>Myth:</strong> a cyst means cancer.
                  <br />
                  <strong>Fact:</strong> most cysts are benign.
                </li>
                <li>
                  <strong>Myth:</strong> surgery will damage my fertility.
                  <br />
                  <strong>Fact:</strong> laparoscopic cystectomy aims to preserve
                  healthy ovarian tissue.
                </li>
                <li>
                  <strong>Myth:</strong> home remedies can dissolve cysts.
                  <br />
                  <strong>Fact:</strong> unproven remedies can delay proper care.
                </li>
                <li>
                  <strong>Myth:</strong> painless cysts can be ignored.
                  <br />
                  <strong>Fact:</strong> follow-up is still needed, because some
                  cysts grow silently.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
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
