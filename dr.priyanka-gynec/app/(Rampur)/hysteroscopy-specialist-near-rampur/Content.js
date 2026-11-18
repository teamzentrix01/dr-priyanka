
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Rampur?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Rampur and nearby areas travel there for consultations.",
  },
  {
    q: "What is hysteroscopy used for?",
    a: "It examines the uterine cavity and diagnoses or treats problems such as polyps, adhesions, a septum, causes of abnormal bleeding and some fertility concerns.",
  },
  {
    q: "Are there any cuts or stitches?",
    a: "No. Hysteroscopy is done through the vagina and cervix, with no abdominal incision.",
  },
  {
    q: "Is it painful?",
    a: "Many women feel mild to moderate cramping. Your doctor will choose suitable pain relief or sedation for you.",
  },
  {
    q: "Can I go home the same day?",
    a: "Many hysteroscopies are day-care procedures, but your doctor will advise you based on your situation.",
  },
  {
    q: "When in my cycle should it be done?",
    a: "Often soon after a period ends, when the lining is thin. Your doctor will advise the best day.",
  },
  {
    q: "Can hysteroscopy help me get pregnant?",
    a: "If a polyp, adhesion or septum affects the uterine cavity, treating it may improve the chance of conception in some women.",
  },
  {
    q: "Where will the procedure take place?",
    a: "Please confirm this directly with the clinic when you book.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on the clinic website.',
  },
];

export default function HysteroscopySpecialistNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Hysteroscopy Specialist near Rampur – Dr. Priyanka Pachauri, Moradabad
            </h1>

            <p>
              Some uterine problems cannot be fully understood from the
              outside. An ultrasound may suggest a polyp or an irregular
              lining, but the clearest answer comes from looking directly
              inside the uterus. Hysteroscopy allows this, often without a
              single cut on the abdomen.
            </p>

            <p>
              If you live in Rampur, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in Moradabad, not in
              Rampur, and women from Rampur and nearby areas travel there for
              consultations. Its philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong> Procedures are
              explained clearly, performed gently and recommended only when
              they add value to your care.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is Hysteroscopy?
              </h2>
              <p>
                Hysteroscopy is an endoscopic procedure. A thin, lighted
                telescope called a hysteroscope is passed through the vagina
                and cervix into the uterus, and a camera shows the cavity on a
                monitor. No abdominal incision is needed.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Diagnostic hysteroscopy:</strong> A gentle evaluation
                  of the uterine cavity to find the cause of a problem
                </li>
                <li>
                  <strong>Operative hysteroscopy:</strong> Treatment during the
                  same procedure, such as removing a polyp
                </li>
              </ul>
              <p>
                The clinic offers diagnostic hysteroscopy and hysteroscopic
                polypectomy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Might You Need It?
              </h2>
              <p>Your doctor may recommend hysteroscopy if you have:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Heavy, prolonged or irregular periods</li>
                <li>Bleeding between periods</li>
                <li>Bleeding after menopause</li>
                <li>Difficulty conceiving</li>
                <li>Repeated miscarriages</li>
                <li>
                  An abnormal ultrasound finding, such as a thickened lining
                  or suspected polyp
                </li>
                <li>Suspected scar tissue inside the uterus</li>
                <li>A suspected uterine septum</li>
              </ul>
              <p>
                Seeing the problem directly is more reliable than relying on
                indirect clues.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Can It Find or Treat?
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Uterine polyps:</strong> Soft growths from the lining
                  that may cause bleeding or affect fertility
                </li>
                <li>
                  <strong>Submucosal fibroids:</strong> Fibroids projecting
                  into the cavity
                </li>
                <li>
                  <strong>Intrauterine adhesions:</strong> Bands of scar tissue
                </li>
                <li>
                  <strong>Uterine septum:</strong> A band of tissue dividing
                  part of the cavity
                </li>
                <li>
                  <strong>Retained tissue:</strong> After a miscarriage or
                  delivery
                </li>
                <li>
                  <strong>Abnormal lining:</strong> Areas that may need a
                  biopsy
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Hysteroscopic Polypectomy
              </h2>
              <p>
                Polyps are common and often harmless, but they can cause
                irregular bleeding and may interfere with conception.
                Hysteroscopic polypectomy removes them under direct vision,
                with no external cuts. Because the polyp is seen and removed in
                one sitting, diagnosis and treatment can often be combined.
                Removed tissue may be sent for examination, as your doctor
                advises.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Hysteroscopy for Infertility and Miscarriage
              </h2>
              <p>
                The uterine cavity is one of the factors checked when
                conception is difficult or miscarriages repeat. Polyps,
                fibroids inside the cavity, adhesions or a septum can reduce
                the chance of implantation or raise miscarriage risk.
                Correcting them can sometimes improve outcomes. The clinic
                offers fertility and IVF services, so findings can be built
                straight into your fertility plan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why It Suits Women Travelling From Rampur
              </h2>
              <p>
                Many hysteroscopies are day-care procedures, which means you
                often go home the same day, once you have recovered from any
                sedation. Your doctor will tell you whether this applies to
                your procedure. This makes planning simpler, but a few details
                still need checking in advance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Your Visit
              </h2>

              <h3 className="text-lg font-semibold text-gray-900">
                Book first. Call or message the clinic, share your concern and
                ask:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Where will the procedure take place? Please confirm this
                  directly with the clinic.
                </li>
                <li>
                  On which day of my cycle should it be done? It is often
                  scheduled soon after a period ends, when the view is clearer.
                </li>
                <li>Do I need to fast, or take or avoid any medicines?</li>
                <li>
                  Will I receive sedation or anaesthesia, and who should
                  accompany me?
                </li>
                <li>
                  Can a consultation and the procedure be planned close
                  together to avoid an extra trip?
                </li>
              </ul>

              <p>
                <strong>Confirm you are not pregnant.</strong> Tell the doctor
                if there is any chance you could be.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                Bring your records:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Ultrasound reports and images</li>
                <li>Blood tests and previous prescriptions</li>
                <li>Earlier procedure reports</li>
                <li>
                  A list of your medicines, including blood thinners, and
                  allergies
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Plan the journey:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Travel with a family member, particularly if sedation is
                  planned
                </li>
                <li>Wear comfortable clothes</li>
                <li>
                  Carry sanitary pads, since light spotting is common
                  afterwards
                </li>
                <li>Ask when you may travel home, and how</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Happens During the Procedure?
              </h2>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  You are positioned comfortably, and pain relief, local
                  anaesthesia or sedation is chosen according to your needs
                  and the procedure planned.
                </li>
                <li>
                  A speculum is placed, and the hysteroscope is gently passed
                  through the cervix.
                </li>
                <li>
                  A clear fluid expands the cavity so the doctor can see it
                  well.
                </li>
                <li>
                  The cavity is examined, and any polyp or other problem is
                  treated if the procedure is operative.
                </li>
                <li>A biopsy is taken if needed.</li>
              </ol>
              <p>
                A diagnostic procedure is often short, while an operative one
                may take longer, depending on what is treated.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Is It Safe?
              </h2>
              <p>
                Hysteroscopy is commonly performed and generally safe when
                done by an experienced doctor. There are small risks, which
                your doctor will explain. They may include temporary cramping,
                light bleeding, infection or, very rarely, injury to the
                uterus. Your doctor will review your health and decide whether
                the procedure suits you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>
              <p>
                Most women recover quickly. You may notice mild cramping,
                light spotting or watery discharge for a few days, and
                tiredness if sedation was used.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Rest for the remainder of the day, then return to routine
                  activities as you feel comfortable
                </li>
                <li>Use prescribed pain relief</li>
                <li>
                  Avoid intercourse, tampons and swimming until your doctor
                  says it is safe
                </li>
                <li>
                  Attend follow-up, or share reports as advised, to discuss
                  findings and next steps
                </li>
              </ul>
              <p>
                <strong>Contact your doctor if you have</strong> heavy
                bleeding, severe or worsening pain, fever, foul-smelling
                discharge or fainting. If you cannot reach the clinic quickly,
                go to the nearest emergency facility. Do not delay care to
                travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Hysteroscopy or Laparoscopy?
              </h2>
              <p>
                Hysteroscopy examines the inside of the uterus through the
                cervix, with no abdominal incision. Laparoscopy examines the
                outside of the uterus, tubes, ovaries and pelvis through small
                abdominal incisions. Some women need both. The clinic offers
                3D laparoscopy as well, including cystectomy, myomectomy and
                endometriosis surgery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion
              </h2>
              <p>
                If you have been advised hysteroscopy or surgery elsewhere, a
                second opinion is reasonable. Bring your scans, blood tests
                and the written advice you received, and the doctor will review
                them and explain your options. Your concerns are discussed
                respectfully, and your medical details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Gentle endoscopic care</strong> with no external cuts
                </li>
                <li>
                  <strong>Honest guidance:</strong> Procedures advised only
                  when they add value
                </li>
                <li>
                  <strong>Integration with fertility, pregnancy and
                  laparoscopic services</strong>
                </li>
                <li>
                  <strong>Detailed imaging</strong> with a Voluson E22 3D/4D
                  ultrasound machine
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Clinic Address and Appointments
              </h2>
              <p>
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>
            </section>

            <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Book Your Appointment
              </h2>
              <p className="mb-6">
                Contact Dr. Priyanka Gynaec for hysteroscopy consultation and
                appointment details.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Call for appointment</p>
                    <a href="tel:+919079765578" className="hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
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

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="break-all hover:underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
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

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#8F1738] hover:text-white"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <section className="space-y-5 pt-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="font-semibold text-gray-900">
                      Q{index + 1}. {faq.q}
                    </h3>
                    <p className="mt-2 text-gray-700">{faq.a}</p>
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
