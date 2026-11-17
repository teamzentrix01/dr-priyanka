
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Who is a laparoscopic gynae surgeon near Katghar, Moradabad?",
    a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers 3D laparoscopic gynaecological surgery for patients from Katghar and across Moradabad.",
  },
  {
    q: "What is the difference between laparoscopic and open surgery?",
    a: "Open surgery uses a larger abdominal incision. Laparoscopy uses a few small cuts and a camera, which usually means less pain, smaller scars and quicker recovery.",
  },
  {
    q: "Which conditions can be treated with laparoscopy?",
    a: "Ovarian cysts, fibroids, endometriosis, prolapse, heavy bleeding in selected cases, tubal problems and permanent sterilization, among others.",
  },
  {
    q: "Will a cyst or fibroid surgery affect my fertility?",
    a: "Fertility-preserving techniques are used wherever possible. The impact depends on the size, location and type of the problem, which your doctor will explain before surgery.",
  },
  {
    q: "Is laparoscopic hysterectomy safe?",
    a: "It is a commonly performed minimally invasive option when removal of the uterus is medically necessary. Your doctor will discuss the benefits, risks and alternatives for your case.",
  },
  {
    q: "How long is the hospital stay?",
    a: "Many laparoscopic procedures need a short stay, but it depends on the type of surgery and your recovery.",
  },
  {
    q: "When can I return to work?",
    a: "Often within a few days to a couple of weeks, depending on the procedure and your job. Your doctor will give personalised advice.",
  },
  {
    q: "Is hysteroscopy painful?",
    a: "Most women tolerate it well, and it is usually done with suitable anaesthesia or sedation as decided by your doctor.",
  },
  {
    q: "Is endometriosis curable by surgery?",
    a: "Surgery can remove visible disease and relieve pain, but endometriosis may return in some women, so follow-up and sometimes medical treatment are important.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on the clinic website.",
  },
];

export default function LaparoscopicGynaeSurgeonKatgharMoradabad() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Laparoscopic Gynae Surgeon in Katghar Moradabad – Dr. Priyanka
              Pachauri
            </h1>

            <p>
              Hearing the word &quot;surgery&quot; is rarely easy. Many women
              put off treatment for ovarian cysts, fibroids, endometriosis or
              heavy bleeding because they fear a large cut, a long hospital
              stay and a slow recovery. Modern keyhole surgery has changed this
              for many conditions.
            </p>

            <p>
              If you live in Katghar or nearby areas of Moradabad,{" "}
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec
              offers advanced 3D laparoscopic gynaecological surgery. The clinic
              follows the philosophy <strong>&quot;Her Health First,&quot;</strong>{" "}
              which means that surgery is advised only when it is needed,
              explained clearly, and planned around your life and your future
              goals, including fertility.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              What Is Laparoscopic Surgery?
            </h2>

            <p>
              Laparoscopy, also called keyhole or minimally invasive surgery,
              is performed through a few small incisions, usually about half a
              centimetre to one centimetre long. A thin camera (laparoscope)
              and fine instruments are passed through these openings. The
              camera sends a magnified image to a monitor, allowing the surgeon
              to see the pelvic organs in detail.
            </p>

            <p>
              At Dr. Priyanka Gynaec, the surgeon uses{" "}
              <strong>high-definition 3D laparoscopy</strong>, which gives depth
              perception and clearer visualisation of delicate structures.
              This supports precise work, which is especially valuable in
              fertility-preserving surgery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Benefits of Laparoscopic Gynaecological Surgery
            </h2>

            <p>When it is suitable for your condition, laparoscopy generally offers:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Smaller incisions and minimal scarring</li>
              <li>Less post-operative pain</li>
              <li>Reduced blood loss</li>
              <li>Lower risk of wound infection</li>
              <li>Shorter hospital stay</li>
              <li>Faster return to routine activities</li>
              <li>
                Better visualisation of the pelvis for diagnosis and treatment
              </li>
            </ul>

            <p>
              Not every patient or condition is suited to keyhole surgery. Your
              doctor will explain whether it is the best route for you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Conditions Treated With Laparoscopy
            </h2>

            <p>Laparoscopic gynae surgery can help with:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Ovarian cysts</li>
              <li>Uterine fibroids</li>
              <li>Endometriosis and chronic pelvic pain</li>
              <li>Adenomyosis-related problems, in selected cases</li>
              <li>Uterine or vaginal vault prolapse</li>
              <li>Heavy or abnormal bleeding not responding to medicines</li>
              <li>Tubal problems and certain causes of infertility</li>
              <li>Need for permanent contraception</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              Procedures Offered at Dr. Priyanka Gynaec
            </h2>

            <h3 className="text-xl font-semibold text-gray-900">
              Laparoscopic Cystectomy
            </h3>

            <p>
              Removes ovarian cysts using precise 3D keyhole surgery while
              preserving healthy ovarian tissue and fertility wherever
              possible. This matters greatly for younger women and those hoping
              to conceive.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Laparoscopic Myomectomy
            </h3>

            <p>
              Removes uterine fibroids while preserving the uterus. It is
              often considered for women who have symptoms such as heavy
              periods, pressure or pain, and who wish to keep the uterus or
              maintain fertility.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Laparoscopic Hysterectomy
            </h3>

            <p>
              A minimally invasive way to remove the uterus when it is
              medically necessary. Compared with open surgery, it generally
              means smaller incisions and faster recovery.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Endometriosis Surgery
            </h3>

            <p>
              Endometriosis can cause severe period pain, pelvic pain, pain
              during intercourse and difficulty conceiving. Advanced 3D
              laparoscopic excision allows accurate diagnosis and removal of
              endometriosis tissue, which can bring relief from chronic pelvic
              pain and may improve fertility outcomes in some women.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Sacrocolpopexy
            </h3>

            <p>
              A keyhole repair for uterine and vaginal vault prolapse, where
              pelvic organs descend from their normal position. It restores
              support and can improve comfort and daily function.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Laparoscopic Sterilization
            </h3>

            <p>
              A safe, permanent family planning procedure, usually performed
              as a day-care surgery. It is suitable for women who are sure they
              do not want more children.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Hysteroscopy: Looking Inside the Uterus
            </h2>

            <p>
              Some uterine problems are best assessed from the inside.
              Hysteroscopy uses a thin camera passed through the cervix, with
              no external cuts.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Diagnostic hysteroscopy:</strong> A gentle evaluation
                of the uterine cavity for unexplained bleeding, repeated
                miscarriage or infertility concerns.
              </li>
              <li>
                <strong>Hysteroscopic polypectomy:</strong> Removal of uterine
                polyps without incisions.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              Fertility-Friendly Surgery
            </h2>

            <p>
              For many women, preserving fertility is as important as treating
              the disease. Laparoscopic cystectomy, myomectomy, endometriosis
              excision and hysteroscopic procedures are designed to treat the
              problem while protecting reproductive organs wherever possible.
              The clinic also offers fertility and IVF services, so surgical
              and fertility planning can be coordinated for couples who need
              both.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              How to Know If You May Need Surgery
            </h2>

            <p>Consult a gynaecologist if you have:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Persistent pelvic or lower abdominal pain</li>
              <li>Severe period pain that disrupts daily life</li>
              <li>Very heavy or prolonged periods</li>
              <li>A cyst or fibroid found on an ultrasound</li>
              <li>Pain during intercourse</li>
              <li>A feeling of heaviness or bulging in the vagina</li>
              <li>Difficulty conceiving despite treatment</li>
              <li>Abnormal bleeding between periods or after menopause</li>
            </ul>

            <p>
              Many conditions are first managed with medicines or lifestyle
              changes. Surgery is recommended when it is the most appropriate
              and effective option.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Your Surgical Journey Step by Step
            </h2>

            <div className="space-y-4">
              <p>
                <strong>1. Consultation:</strong> Your symptoms, history and
                previous reports are reviewed, and an examination and
                ultrasound are done if required.
              </p>
              <p>
                <strong>2. Diagnosis and planning:</strong> Additional tests
                may be advised. Treatment options, benefits, risks and
                alternatives are discussed openly.
              </p>
              <p>
                <strong>3. Pre-operative preparation:</strong> Blood tests,
                anaesthesia evaluation and instructions on fasting and
                medicines.
              </p>
              <p>
                <strong>4. Surgery:</strong> Performed under anaesthesia with
                careful monitoring.
              </p>
              <p>
                <strong>5. Recovery and discharge:</strong> Many keyhole
                procedures need only a short stay, though this depends on the
                surgery performed.
              </p>
              <p>
                <strong>6. Follow-up:</strong> Wound check, review of reports
                and guidance on activity, diet and future care.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Recovery After Laparoscopic Surgery
            </h2>

            <p>
              Recovery varies with the procedure, but general advice includes:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Walking gently soon after surgery, as advised, to support
                circulation
              </li>
              <li>Eating light, balanced meals and drinking plenty of fluids</li>
              <li>Taking prescribed pain relief and medicines on time</li>
              <li>Keeping the small wounds clean and dry</li>
              <li>
                Avoiding heavy lifting and strenuous exercise until your doctor
                allows
              </li>
              <li>Attending follow-up visits</li>
            </ul>

            <p>
              Contact your doctor if you have fever, increasing pain, heavy
              bleeding, wound redness or discharge, vomiting, or difficulty
              passing urine.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Why Choose Dr. Priyanka Gynaec for Laparoscopic Surgery?
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Expert 3D laparoscopic care for women&apos;s reproductive
                health
              </li>
              <li>Honest guidance, with surgery advised only when needed</li>
              <li>Fertility-preserving techniques wherever possible</li>
              <li>Continuity of care from consultation to follow-up</li>
              <li>
                Gynaecology, fertility, pregnancy and paediatric care in one
                place
              </li>
              <li>A patient-first, listening-focused approach</li>
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
                <p className="flex flex-wrap items-center gap-2">
                  <Phone size={18} />
                  <strong>Call for appointment:</strong>
                  <a href="tel:+919079765578" className="underline">
                    +91 90797 65578
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-2">
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

                <p className="flex flex-wrap items-center gap-2">
                  <Mail size={18} />
                  <strong>Email:</strong>
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-2">
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
