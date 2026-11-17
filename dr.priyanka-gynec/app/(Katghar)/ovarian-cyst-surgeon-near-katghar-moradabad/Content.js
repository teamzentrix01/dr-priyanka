
import Link from "next/link";
import { Phone, MapPin, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Who is an ovarian cyst surgeon near Katghar, Moradabad?",
    a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers laparoscopic cystectomy and complete ovarian cyst care for patients from Katghar and across Moradabad.",
  },
  {
    q: "Are ovarian cysts dangerous?",
    a: "Most are harmless and resolve on their own. A few need treatment, and your doctor will assess the type and size through examination and scans.",
  },
  {
    q: "Do all ovarian cysts need surgery?",
    a: "No. Many are monitored with repeat ultrasounds. Surgery is considered for large, persistent, painful or suspicious cysts, or when complications occur.",
  },
  {
    q: "What is laparoscopic cystectomy?",
    a: "It is keyhole surgery that removes the cyst through small incisions while preserving healthy ovarian tissue.",
  },
  {
    q: "Will cyst removal affect my fertility?",
    a: "The aim is to protect fertility, and many women conceive after surgery. The effect depends on the type of cyst, its size and your overall ovarian health.",
  },
  {
    q: "What is a chocolate cyst?",
    a: "It is an endometrioma, a cyst linked to endometriosis that contains old blood. It often causes pain and may affect fertility.",
  },
  {
    q: "Is PCOS the same as an ovarian cyst?",
    a: "No. PCOS involves multiple small follicles and hormonal imbalance, and it is usually treated with lifestyle changes and medication rather than cyst removal surgery.",
  },
  {
    q: "How long is recovery after laparoscopic cyst surgery?",
    a: "Many women return to light activity within a few days to a couple of weeks, depending on the procedure. Your doctor will give individual advice.",
  },
  {
    q: "What symptoms need urgent attention?",
    a: "Sudden severe pelvic pain, pain with fever or vomiting, or dizziness. These may signal torsion or rupture and need prompt medical care.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on the clinic website.",
  },
];

export default function OvarianCystSurgeonKatgharMoradabad() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="section-width mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <article className="lg:col-span-2 space-y-8 text-gray-700 leading-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Ovarian Cyst Surgeon near Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>

              <p className="mb-4">
                Finding out that you have an ovarian cyst on an ultrasound can
                be worrying. Questions come quickly. Is it dangerous? Will it
                go away? Do I need surgery? Will it affect my chances of having
                a baby? The good news is that most ovarian cysts are harmless
                and many settle on their own. When treatment is needed, modern
                keyhole surgery can remove the cyst while protecting your ovary
                and your fertility.
              </p>

              <p>
                If you live in Katghar or nearby areas of Moradabad,{" "}
                <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec
                offers precise <strong>3D laparoscopic cystectomy</strong> and
                clear guidance on every treatment option. The clinic follows
                the philosophy <strong>&quot;Her Health First.&quot;</strong>{" "}
                You are listened to and informed, and you are never rushed into
                surgery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What Is an Ovarian Cyst?
              </h2>
              <p>
                An ovarian cyst is a fluid-filled sac that develops on or
                inside an ovary. Cysts are common in women of reproductive age,
                and many cause no symptoms. They can range from a few
                millimetres to several centimetres in size.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Common Types of Ovarian Cysts
              </h2>

              <div className="space-y-4">
                <p>
                  <strong>Functional cysts:</strong> These form as part of the
                  normal menstrual cycle, such as follicular cysts and corpus
                  luteum cysts. They usually disappear within a few cycles
                  without treatment.
                </p>
                <p>
                  <strong>Endometriomas (&quot;chocolate cysts&quot;):</strong>{" "}
                  Linked to endometriosis, these contain old blood and often
                  cause pain and fertility problems.
                </p>
                <p>
                  <strong>Dermoid cysts (mature teratomas):</strong> These
                  contain tissues such as hair or fat. They are usually
                  non-cancerous but may need removal.
                </p>
                <p>
                  <strong>Cystadenomas:</strong> Fluid- or mucus-filled cysts
                  that can grow large.
                </p>
                <p>
                  <strong>Polycystic ovaries:</strong> Associated with PCOS,
                  where multiple small follicles are seen. These are not the
                  same as a single large cyst and are managed differently.
                </p>
              </div>

              <p className="mt-4">
                Your doctor will identify the type through examination and
                imaging, since the type decides the treatment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Symptoms of Ovarian Cysts
              </h2>
              <p className="mb-4">
                Many cysts are silent. When symptoms appear, they may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dull or sharp pain in the lower abdomen or pelvis</li>
                <li>Bloating or a feeling of fullness</li>
                <li>Pressure on the bladder or bowel</li>
                <li>Irregular or painful periods</li>
                <li>Pain during intercourse</li>
                <li>Pain in the lower back or thighs</li>
                <li>Difficulty conceiving</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                When Is It an Emergency?
              </h2>
              <p className="mb-4">
                Seek urgent medical care if you have:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sudden, severe pelvic or abdominal pain</li>
                <li>Pain with fever, vomiting or faintness</li>
                <li>Rapid breathing or signs of shock</li>
              </ul>
              <p className="mt-4">
                These can signal a cyst that has twisted (torsion) or burst,
                which needs prompt treatment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How Are Ovarian Cysts Diagnosed?
              </h2>
              <p className="mb-4">Diagnosis may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A discussion of symptoms, periods and medical history
                </li>
                <li>A pelvic examination</li>
                <li>
                  Ultrasound to assess size, type and appearance. The clinic
                  uses a Voluson E22 3D/4D ultrasound machine for detailed
                  imaging
                </li>
                <li>Blood tests, including tumour markers in selected cases</li>
                <li>Further imaging such as MRI or CT for complex cysts</li>
              </ul>
              <p className="mt-4">
                Repeat ultrasounds after a few weeks help show whether a cyst
                is shrinking, staying the same or growing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Do All Ovarian Cysts Need Surgery?
              </h2>
              <p className="mb-4">
                No. Many functional cysts resolve on their own, so doctors
                often advise observation with a follow-up scan. Surgery is
                usually considered when a cyst:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Is large or growing</li>
                <li>Persists beyond several menstrual cycles</li>
                <li>Causes ongoing pain or pressure</li>
                <li>Looks suspicious on imaging</li>
                <li>Is an endometrioma affecting pain or fertility</li>
                <li>Causes complications such as torsion or rupture</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Treatment Options
              </h2>
              <div className="space-y-4">
                <p>
                  <strong>Watchful waiting:</strong> Regular scans for small,
                  symptom-free cysts likely to resolve.
                </p>
                <p>
                  <strong>Medication:</strong> Hormonal medicines may help in
                  certain cases, such as managing pain or preventing new
                  functional cysts, though they do not shrink all types of
                  cysts.
                </p>
                <p>
                  <strong>Laparoscopic cystectomy:</strong> Keyhole removal of
                  the cyst while preserving healthy ovarian tissue.
                </p>
                <p>
                  <strong>Oophorectomy:</strong> Removal of the ovary, reserved
                  for situations where the ovary cannot be saved or when it is
                  medically necessary.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Laparoscopic Cystectomy at Dr. Priyanka Gynaec
              </h2>
              <p className="mb-4">
                Laparoscopic cystectomy is precision 3D keyhole surgery to
                remove ovarian cysts while preserving fertility. A few small
                incisions are made, and a high-definition camera and fine
                instruments are used to separate the cyst from the ovary
                carefully.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Benefits, When Suitable, Include:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Preservation of healthy ovarian tissue and fertility wherever
                  possible
                </li>
                <li>Smaller scars</li>
                <li>Less post-operative pain</li>
                <li>Reduced blood loss</li>
                <li>Shorter hospital stay</li>
                <li>Faster return to daily activities</li>
                <li>
                  Clear 3D visualisation, which supports gentle handling of
                  delicate ovarian tissue
                </li>
              </ul>
              <p className="mt-4">
                Protecting ovarian reserve matters greatly for younger women
                and those planning pregnancy, so the technique is chosen with
                that in mind.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ovarian Cysts and Fertility
              </h2>
              <p>
                Most ovarian cysts do not harm fertility. Some, particularly
                endometriomas, can affect ovarian reserve or the pelvic
                environment. Surgery on the ovary also needs careful technique
                to protect egg-bearing tissue. If you are trying to conceive,
                tell your doctor before any treatment decision is made. The
                clinic also offers fertility and IVF services, so surgical and
                fertility planning can be coordinated for couples who need
                both.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ovarian Cysts and PCOS
              </h2>
              <p>
                Women with PCOS often have multiple small follicles on their
                ovaries, commonly called &quot;cysts,&quot; although they are
                not true cysts in the usual sense. PCOS is managed through
                lifestyle changes, medication and ovulation induction when
                pregnancy is desired, not usually through cyst removal surgery.
                A proper diagnosis ensures you receive the right treatment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Endometriosis and Chocolate Cysts
              </h2>
              <p>
                Endometriomas are strongly linked to endometriosis, a condition
                that can cause severe period pain, chronic pelvic pain and
                difficulty conceiving. Advanced 3D laparoscopic excision allows
                accurate diagnosis and removal of endometriosis tissue, helping
                relieve pain. The clinic also offers dedicated endometriosis
                surgery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Preparing for Surgery
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Complete the tests and scans advised by your doctor</li>
                <li>Share your medical history, allergies and current medicines</li>
                <li>Discuss anaesthesia and fasting instructions</li>
                <li>
                  Ask about your fertility plans and how surgery will protect
                  them
                </li>
                <li>Arrange help at home for the first few days</li>
                <li>Write down your questions beforehand</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Recovery After Laparoscopic Cystectomy
              </h2>
              <p className="mb-4">
                Recovery differs between patients, but general advice includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gentle walking soon after surgery, as advised</li>
                <li>Light, balanced meals and plenty of fluids</li>
                <li>Taking medicines on time</li>
                <li>Keeping the small wounds clean and dry</li>
                <li>
                  Avoiding heavy lifting and strenuous exercise until your
                  doctor allows
                </li>
                <li>
                  Attending follow-up visits, where reports and next steps are
                  discussed
                </li>
              </ul>
              <p className="mt-4">
                Contact your doctor if you have fever, heavy bleeding,
                worsening pain, wound redness or discharge, vomiting, or
                difficulty passing urine.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Can Cysts Come Back?
              </h2>
              <p>
                Some women develop new cysts in the future, especially with
                endometriosis or ongoing hormonal imbalance. Regular follow-up
                scans and your doctor&apos;s advice on medicines or lifestyle
                help detect and manage recurrence early.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Honest advice, with surgery recommended only when needed</li>
                <li>Fertility-preserving 3D laparoscopic techniques</li>
                <li>Detailed imaging with 3D/4D ultrasound</li>
                <li>
                  Gynaecology, endometriosis care, fertility, pregnancy and
                  paediatric support in one place
                </li>
                <li>Continuity of care from diagnosis to follow-up</li>
              </ul>
            </div>

            {/* Clinic Address */}
            <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">
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
                  <Phone size={20} />
                  <strong>Call for appointment:</strong>
                  <a href="tel:+919079765578" className="hover:underline">
                    +91 90797 65578
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Phone size={20} />
                  <strong>WhatsApp:</strong>
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +91 89796 70705
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Mail size={20} />
                  <strong>Email:</strong>
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="hover:underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Globe size={20} />
                  <strong>Website:</strong>
                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#8F1738] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#74122E] transition"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-[#8F1738] text-[#8F1738] px-6 py-3 rounded-lg font-semibold hover:bg-[#8F1738] hover:text-white transition"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-xl p-5"
                  >
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Q{index + 1}. {faq.q}
                    </h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <LandingEnquiryForm />

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Dr. Priyanka Gynaec
                </h3>

                <p className="flex items-start gap-3 mb-4">
                  <MapPin size={20} className="mt-1 shrink-0" />
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </p>

                <p className="flex items-center gap-3 mb-4">
                  <Phone size={20} className="shrink-0" />
                  <a href="tel:+919079765578" className="hover:underline">
                    +91 90797 65578
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Mail size={20} className="shrink-0" />
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="break-all hover:underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
