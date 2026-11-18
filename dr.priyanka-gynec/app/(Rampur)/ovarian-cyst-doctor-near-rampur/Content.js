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
    a: "The aim is to protect fertility, and many women conceive after surgery. The effect depends on the cyst type, its size and your overall ovarian health.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
  },
  {
    q: "Is PCOS the same as an ovarian cyst?",
    a: "No. PCOS involves multiple small follicles and hormonal imbalance, and it is usually treated with lifestyle changes and medication rather than cyst removal.",
  },
  {
    q: "Where will my surgery take place?",
    a: "Please confirm this directly with the clinic when you book.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on www.gynaecologistmoradabad.com.',
  },
];

export default function OvarianCystDoctorNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Ovarian Cyst Doctor near Rampur – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                An ovarian cyst found on an ultrasound can cause immediate
                worry. Is it dangerous? Will it go away? Will it affect my
                chances of having a baby? The reassuring news is that most
                ovarian cysts are harmless, and many settle on their own. When
                treatment is needed, modern keyhole surgery can remove a cyst
                while protecting the ovary.
              </p>

              <p>
                If you live in Rampur, <strong>Dr. Priyanka Pachauri</strong> of
                Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong>{" "}
                is an option to consider. The clinic is located in Moradabad,
                not in Rampur, and women from Rampur and nearby areas travel
                there for consultations. Its philosophy is{" "}
                <strong>&ldquo;Her Health First.&rdquo;</strong> You are
                listened to, informed and never rushed into surgery.
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is an Ovarian Cyst?
              </h2>
              <p>
                An ovarian cyst is a fluid-filled sac on or inside an ovary.
                Cysts are common in women of reproductive age, and many cause
                no symptoms. Common types include:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Functional cysts:</strong> Linked to the normal
                  cycle, and usually gone within a few cycles
                </li>
                <li>
                  <strong>Endometriomas (&ldquo;chocolate cysts&rdquo;):</strong>{" "}
                  Linked to endometriosis, often causing pain and fertility
                  problems
                </li>
                <li>
                  <strong>Dermoid cysts:</strong> Contain tissues such as hair
                  or fat, usually non-cancerous
                </li>
                <li>
                  <strong>Cystadenomas:</strong> Fluid- or mucus-filled cysts
                  that can grow large
                </li>
              </ul>

              <p>
                The type decides the treatment, so a proper assessment
                matters.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Symptoms</h2>
              <p>
                Many cysts are silent. When symptoms appear, they may include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Dull or sharp pain in the lower abdomen or pelvis</li>
                <li>Bloating or fullness</li>
                <li>Pressure on the bladder or bowel</li>
                <li>Irregular or painful periods</li>
                <li>Pain during intercourse</li>
                <li>Difficulty conceiving</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                When Is It an Emergency?
              </h2>
              <p>
                Seek urgent care if you have sudden, severe pelvic or
                abdominal pain, pain with fever or vomiting, faintness or
                rapid breathing. These can signal a cyst that has twisted or
                burst. If this happens, go to the nearest emergency facility
                immediately. Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Watch, Medicines or Surgery?
              </h2>
              <p>
                Many functional cysts resolve without treatment, so doctors
                often advise a repeat ultrasound after a few weeks. Surgery
                is usually considered when a cyst:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Is large or growing</li>
                <li>Persists beyond several cycles</li>
                <li>Causes ongoing pain or pressure</li>
                <li>Looks suspicious on imaging</li>
                <li>Is an endometrioma affecting pain or fertility</li>
                <li>Causes complications such as torsion or rupture</li>
              </ul>
              <p>
                Hormonal medicines may help in certain situations, such as
                pain control or preventing new functional cysts, though they
                do not shrink every type of cyst. Your doctor will explain
                which approach suits your cyst.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                How Cysts Are Assessed
              </h2>
              <p>Assessment may include:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>A discussion of your symptoms, periods and history</li>
                <li>A pelvic examination</li>
                <li>
                  Ultrasound to assess size, type and appearance. The clinic
                  uses a Voluson E22 3D/4D ultrasound machine for detailed
                  imaging
                </li>
                <li>Blood tests, including tumour markers in selected cases</li>
                <li>Further imaging such as MRI for complex cysts</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Laparoscopic Cystectomy at Dr. Priyanka Gynaec
              </h2>
              <p>
                Laparoscopic cystectomy is precision 3D keyhole surgery that
                removes the cyst while preserving healthy ovarian tissue. A
                few small incisions are made, and a high-definition camera
                and fine instruments separate the cyst from the ovary
                carefully.
              </p>

              <p>When suitable, benefits include:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Preservation of healthy ovarian tissue and fertility
                  wherever possible
                </li>
                <li>Smaller scars</li>
                <li>Less pain after surgery</li>
                <li>Reduced blood loss</li>
                <li>A shorter hospital stay</li>
                <li>Faster return to daily activities</li>
              </ul>
              <p>
                Protecting ovarian reserve matters greatly for younger women
                and those planning pregnancy, so the technique is chosen with
                that in mind.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion From Rampur
              </h2>
              <p>
                If you have already been advised surgery, a second opinion is
                reasonable. To make it useful:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Bring all ultrasound reports, and images if you have them</li>
                <li>
                  Bring blood tests, previous prescriptions and the written
                  surgical advice
                </li>
                <li>
                  Note the date of each scan so changes in size can be
                  compared
                </li>
                <li>Write down your questions</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Questions to Ask
              </h3>
              <ol className="list-decimal space-y-2 pl-6">
                <li>What type of cyst is it?</li>
                <li>Is it likely to resolve by itself?</li>
                <li>What are the risks of waiting?</li>
                <li>Is keyhole surgery suitable?</li>
                <li>How will surgery protect my fertility?</li>
                <li>What is the recovery like?</li>
              </ol>

              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Ovarian Cysts and Fertility
              </h2>
              <p>
                Most ovarian cysts do not harm fertility. Some, particularly
                endometriomas, can affect ovarian reserve or the pelvic
                environment. Surgery on the ovary also needs careful
                technique to protect egg-bearing tissue. If you are trying to
                conceive, tell your doctor before any treatment decision is
                made. The clinic offers fertility and IVF services, so
                surgical and fertility planning can be coordinated for
                couples who need both.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Cysts and PCOS
              </h2>
              <p>
                Women with PCOS often have many small follicles on their
                ovaries, commonly called &ldquo;cysts,&rdquo; although they
                are not true cysts in the usual sense. PCOS is managed through
                lifestyle changes, medication and ovulation induction when
                pregnancy is desired, not usually by cyst removal. A proper
                diagnosis ensures the right treatment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Endometriosis and Chocolate Cysts
              </h2>
              <p>
                Endometriomas are linked to endometriosis, which can cause
                severe period pain, chronic pelvic pain and difficulty
                conceiving. Advanced 3D laparoscopic excision allows accurate
                diagnosis and removal of endometriosis tissue, helping relieve
                pain. The clinic offers dedicated endometriosis surgery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Surgery When You Live in Rampur
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ask the Clinic
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Where will the surgery take place? Please confirm this
                    directly with the clinic.
                  </li>
                  <li>
                    Which pre-operative tests can be done in advance, or
                    closer to home?
                  </li>
                  <li>
                    How long should I expect to stay, and will I need to stay
                    in Moradabad afterwards?
                  </li>
                  <li>Who should accompany me?</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Prepare for the Day
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Complete the scans and tests advised</li>
                  <li>Share your medical history, allergies and medicines</li>
                  <li>Discuss anaesthesia and follow fasting instructions</li>
                  <li>Tell your doctor about your fertility plans</li>
                  <li>Arrange help at home for the first few days</li>
                  <li>Pack comfortable clothes, identification and your records</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Plan the Journey Home
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Ask when it is safe to travel and how to travel comfortably
                  </li>
                  <li>Arrange for a family member to accompany you</li>
                  <li>
                    Avoid lifting luggage yourself, and take breaks on long
                    journeys
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>
              <p>Recovery varies, but general advice includes:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Gentle walking soon after surgery, as advised</li>
                <li>Light, balanced meals with plenty of fluids</li>
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
              <p>
                Ask before you leave which follow-up checks may be possible
                closer to home.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs After Surgery
              </h2>
              <p>
                Contact your doctor promptly if you have fever, heavy
                bleeding, worsening pain, wound redness or discharge, vomiting
                that does not settle, or difficulty passing urine. If you
                cannot reach the clinic quickly, go to the nearest emergency
                facility.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Can Cysts Come Back?
              </h2>
              <p>
                Some women develop new cysts later, especially with
                endometriosis or ongoing hormonal imbalance. Regular
                follow-up scans and your doctor&apos;s advice on medicines or
                lifestyle help detect and manage recurrence early.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Honest guidance:</strong> Surgery advised only when
                  needed, with alternatives discussed first
                </li>
                <li>
                  <strong>Fertility-preserving 3D laparoscopic techniques</strong>
                </li>
                <li>
                  <strong>Detailed imaging</strong> with 3D/4D ultrasound
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Gynaecology,
                  fertility, pregnancy and paediatric services
                </li>
              </ul>
            </section>

            <section className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Clinic Address and Appointments
              </h2>

              <p className="mb-4">
                Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
                Nagar, Moradabad, Uttar Pradesh – 244001.
              </p>

              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="font-semibold underline"
                    >
                      +91 90797 65578
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      +91 89796 70705
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="font-semibold underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
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
            </section>

            <section className="space-y-5 pt-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
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