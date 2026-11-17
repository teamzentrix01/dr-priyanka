
import Link from "next/link";
import { Phone, MapPin, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Who is a hysteroscopy doctor near Katghar, Moradabad?",
    a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers diagnostic hysteroscopy and hysteroscopic polypectomy for patients from Katghar and across Moradabad.",
  },
  {
    q: "What is hysteroscopy used for?",
    a: "It is used to examine the uterine cavity and diagnose or treat problems such as polyps, adhesions, a septum, abnormal bleeding causes and some fertility-related concerns.",
  },
  {
    q: "Is hysteroscopy painful?",
    a: "Many women feel mild to moderate cramping. Your doctor will choose suitable pain relief or sedation, depending on the procedure.",
  },
  {
    q: "Are there any cuts or stitches?",
    a: "No. Hysteroscopy is done through the vagina and cervix, with no abdominal incision.",
  },
  {
    q: "How long does the procedure take?",
    a: "A diagnostic hysteroscopy is usually brief, while an operative procedure may take longer depending on what is treated.",
  },
  {
    q: "When can I go home?",
    a: "Most hysteroscopies are day-care procedures, and many women go home the same day once they have recovered from any sedation.",
  },
  {
    q: "Can hysteroscopy help me get pregnant?",
    a: "If a polyp, adhesion or septum is affecting the uterine cavity, treating it may improve the chances of conception in some women.",
  },
  {
    q: "Is bleeding normal after hysteroscopy?",
    a: "Light spotting for a few days is common. Heavy bleeding, fever or severe pain needs prompt medical attention.",
  },
  {
    q: "When can I resume normal activities and intercourse?",
    a: "Most women resume routine activities within a day or two. Your doctor will advise when intercourse is safe.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on the clinic website.",
  },
];

export default function HysteroscopyDoctorKatgharMoradabad() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Hysteroscopy Doctor in Katghar Moradabad – Dr. Priyanka Pachauri
            </h1>

            <p>
              Some uterine problems cannot be fully understood from outside. An
              ultrasound may suggest a polyp or an irregular lining, but the
              clearest answer comes from looking directly inside the uterus.
              This is what hysteroscopy allows, and it can often be done
              without a single cut on the abdomen.
            </p>

            <p>
              If you live in Katghar or nearby areas of Moradabad,{" "}
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec
              offers <strong>diagnostic hysteroscopy</strong> and{" "}
              <strong>hysteroscopic polypectomy</strong>. The clinic follows the
              philosophy <strong>&quot;Her Health First,&quot;</strong> which
              means procedures are explained clearly, performed gently and
              recommended only when they add value to your care.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              What Is Hysteroscopy?
            </h2>

            <p>
              Hysteroscopy is an endoscopic procedure in which a thin, lighted
              telescope called a hysteroscope is passed through the vagina and
              cervix into the uterus. A camera sends a magnified view of the
              uterine cavity to a monitor. No abdominal incision is needed.
            </p>

            <p>There are two broad types:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Diagnostic hysteroscopy:</strong> A gentle evaluation
                of the uterine cavity to find the cause of a problem.
              </li>
              <li>
                <strong>Operative (therapeutic) hysteroscopy:</strong> Treatment
                performed during the same procedure, such as removing a polyp.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              Why Might You Need a Hysteroscopy?
            </h2>

            <p>Your doctor may recommend it if you have:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Heavy, prolonged or irregular periods</li>
              <li>Bleeding between periods</li>
              <li>Postmenopausal bleeding</li>
              <li>Difficulty conceiving</li>
              <li>Repeated miscarriages</li>
              <li>Repeated IVF failure, in selected cases</li>
              <li>
                An abnormal finding on ultrasound, such as a thickened lining,
                suspected polyp or fibroid
              </li>
              <li>Suspected scarring (adhesions) inside the uterus</li>
              <li>A suspected uterine septum or other structural difference</li>
              <li>A misplaced intrauterine contraceptive device</li>
            </ul>

            <p>
              Hysteroscopy helps because it lets the doctor see the problem
              directly, rather than relying on indirect clues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Conditions Found or Treated During Hysteroscopy
            </h2>

            <div className="space-y-4">
              <p>
                <strong>Uterine polyps:</strong> Soft growths from the lining
                that may cause bleeding or affect fertility.
              </p>
              <p>
                <strong>Submucosal fibroids:</strong> Fibroids that project
                into the uterine cavity.
              </p>
              <p>
                <strong>Intrauterine adhesions:</strong> Bands of scar tissue
                that can lighten periods or affect fertility.
              </p>
              <p>
                <strong>Uterine septum:</strong> A band of tissue dividing part
                of the cavity, which can be linked with miscarriage in some
                women.
              </p>
              <p>
                <strong>Retained products:</strong> Tissue remaining after a
                miscarriage or delivery.
              </p>
              <p>
                <strong>Abnormal lining:</strong> Areas that may need a biopsy
                to understand the cause of bleeding.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Diagnostic Hysteroscopy at Dr. Priyanka Gynaec
            </h2>

            <p>
              Diagnostic hysteroscopy at the clinic is a gentle endoscopic
              evaluation of the uterine cavity. It can often help answer
              questions that ultrasound alone cannot, such as whether a
              thickened area is a polyp or why a woman has not been able to
              conceive.
            </p>

            <p>
              During the procedure, the doctor can look at the cavity&apos;s
              shape, the lining, and the openings of the fallopian tubes. If
              needed, a small sample of tissue can be taken for further
              testing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Hysteroscopic Polypectomy
            </h2>

            <p>
              Uterine polyps are common and often harmless, but they can cause
              irregular bleeding and may interfere with conception.{" "}
              <strong>Hysteroscopic polypectomy</strong> removes polyps
              precisely, under direct vision, without any external cuts.
            </p>

            <p>
              Because the polyp is seen and removed in the same sitting,
              diagnosis and treatment can often be combined, saving time and
              avoiding repeated procedures. Removed tissue may be sent for
              examination as advised by your doctor.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Hysteroscopy for Infertility
            </h2>

            <p>
              When a couple has difficulty conceiving, the uterine cavity is
              one of the factors checked. Polyps, fibroids inside the cavity,
              adhesions or a septum may reduce the chance of implantation or
              increase miscarriage risk. Correcting these problems can
              sometimes improve outcomes.
            </p>

            <p>
              The clinic also offers fertility and IVF services, so findings
              from hysteroscopy can be integrated directly into your fertility
              plan, whether you are trying naturally or planning treatment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Hysteroscopy for Abnormal Bleeding
            </h2>

            <p>
              Persistent irregular or heavy bleeding should be examined, not
              simply managed with medicines. Hysteroscopy allows the doctor to
              identify causes such as polyps, fibroids or an abnormal lining,
              and to take a biopsy if necessary. It is especially important
              for bleeding after menopause.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Is Hysteroscopy Safe?
            </h2>

            <p>
              Hysteroscopy is a commonly performed and generally safe procedure
              when done by an experienced doctor. As with any procedure, there
              are small risks, which your doctor will explain. These may
              include temporary cramping, light bleeding, infection, or very
              rarely injury to the uterus. Your doctor will review your health
              and decide whether the procedure is suitable for you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Preparing for Hysteroscopy
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Timing:</strong> It is often scheduled soon after your
                period ends, when the lining is thin and the view is clearer.
                Your doctor will advise the best day.
              </li>
              <li>
                <strong>Pregnancy check:</strong> Make sure you are not pregnant
                before the procedure.
              </li>
              <li>
                <strong>Medicines:</strong> Tell your doctor about all
                medicines, especially blood thinners, and about any allergies.
              </li>
              <li>
                <strong>Fasting:</strong> Follow instructions if anaesthesia or
                sedation is planned.
              </li>
              <li>
                <strong>Reports:</strong> Bring previous ultrasounds, test
                results and records.
              </li>
              <li>
                <strong>Support:</strong> Consider bringing a family member
                with you.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              What Happens During the Procedure?
            </h2>

            <ol className="list-decimal space-y-2 pl-6">
              <li>
                You are positioned comfortably, and suitable pain relief,
                local anaesthesia or sedation is chosen according to your needs
                and the procedure planned.
              </li>
              <li>
                A speculum is placed, and the hysteroscope is gently passed
                through the cervix.
              </li>
              <li>
                A clear fluid is used to expand the cavity so the doctor can
                see it well.
              </li>
              <li>
                The cavity is examined, and any polyp or other problem is
                treated if the procedure is therapeutic.
              </li>
              <li>A biopsy is taken if needed.</li>
            </ol>

            <p>
              A diagnostic procedure is often short, while an operative one
              takes longer depending on what is being treated.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Recovery After Hysteroscopy
            </h2>

            <p>Most women recover quickly. You may notice:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Mild cramping, similar to period pain</li>
              <li>Light spotting or watery discharge for a few days</li>
              <li>Mild tiredness if sedation was used</li>
            </ul>

            <p>General advice:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Rest for the rest of the day and resume routine activities when
                you feel comfortable.
              </li>
              <li>Use prescribed pain relief.</li>
              <li>
                Avoid intercourse, tampons and swimming until your doctor says
                it is safe.
              </li>
              <li>Attend follow-up for reports and the next steps.</li>
            </ul>

            <p>
              Contact your doctor if you have heavy bleeding, severe or
              worsening pain, fever, foul-smelling discharge or fainting.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Hysteroscopy vs. Laparoscopy
            </h2>

            <p>
              The two procedures are often confused. Hysteroscopy examines the
              inside of the uterus through the cervix, with no abdominal
              incision. Laparoscopy examines the outside of the uterus, tubes,
              ovaries and pelvic cavity through small abdominal incisions.
              Some women need both, and your doctor will explain which is right
              for your situation. The clinic offers 3D laparoscopy as well,
              including cystectomy, myomectomy and endometriosis surgery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Why Women Trust Dr. Priyanka Gynaec
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gentle endoscopic evaluation and treatment with no external
                cuts
              </li>
              <li>
                Honest advice, with procedures recommended only when needed
              </li>
              <li>
                Integration with fertility, pregnancy and laparoscopic
                services
              </li>
              <li>Detailed imaging with 3D/4D ultrasound</li>
              <li>Continuity of care from diagnosis to follow-up</li>
            </ul>

            <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Clinic Address and Appointments
              </h2>

              <p className="mb-5">
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                , reachable for patients from Katghar and other parts of the
                city.
              </p>

              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <Phone size={18} />
                  <strong>Call for appointment:</strong>
                  <a href="tel:+919079765578" className="underline">
                    +91 90797 65578
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Phone size={18} />
                  <strong>WhatsApp:</strong>
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    +91 89796 70705
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Mail size={18} />
                  <strong>Email:</strong>
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Globe size={18} />
                  <strong>Website:</strong>
                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <section className="pt-4">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="lg:sticky lg:top-24">
            <LandingEnquiryForm />
          </aside>
        </div>
      </section>
    </main>
  );
}
