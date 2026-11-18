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
    q: "What is laparoscopic surgery?",
    a: "It is keyhole surgery using a few small incisions and a camera, generally with less pain, smaller scars and quicker recovery than open surgery when suitable.",
  },
  {
    q: "Which conditions can be treated with laparoscopy?",
    a: "Ovarian cysts, fibroids, endometriosis, prolapse, heavy bleeding in selected cases, tubal problems and permanent sterilization, among others.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
  },
  {
    q: "Will cyst or fibroid surgery affect my fertility?",
    a: "Fertility-preserving techniques are used wherever possible. The effect depends on the size, location and type of the problem, which your doctor will explain before surgery.",
  },
  {
    q: "Where will my surgery take place?",
    a: "Please confirm this directly with the clinic when you book.",
  },
  {
    q: "How long will I need to stay?",
    a: "It depends on the procedure and your recovery. Ask your doctor for an estimate during your consultation.",
  },
  {
    q: "When can I travel back to Rampur after surgery?",
    a: "Ask your doctor before discharge. They will advise on timing and how to travel safely and comfortably.",
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

export default function LaparoscopicSurgeonNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Laparoscopic Surgeon near Rampur – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                Being advised to have surgery can bring worry about pain,
                scars, recovery and fertility. Keyhole (laparoscopic) surgery
                has made many gynaecological operations gentler, but finding
                the right surgeon and planning the trip can still feel
                daunting.
              </p>

              <p>
                If you live in Rampur, Dr. Priyanka Pachauri of{" "}
                <strong>Dr. Priyanka Gynaec</strong> in neighbouring Moradabad
                is an option to consider. The clinic is located in Moradabad,
                not in Rampur, and women from Rampur and nearby areas travel
                there for consultations. Its philosophy is{" "}
                <strong>&ldquo;Her Health First.&rdquo;</strong> Surgery is
                advised only when it is needed, explained clearly and planned
                around your life and future goals.
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is Laparoscopic Surgery?
              </h2>
              <p>
                Laparoscopy, also called keyhole or minimally invasive
                surgery, is done through a few small incisions, usually about
                half a centimetre to one centimetre long. A thin camera and
                fine instruments are passed through them. The camera sends a
                magnified image to a monitor, so the surgeon can see the pelvic
                organs in detail. The clinic uses high-definition 3D
                laparoscopy, which adds depth perception and clearer
                visualisation of delicate structures.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Benefits of Keyhole Surgery
              </h2>
              <p>When it suits your condition, laparoscopy generally offers:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Smaller incisions and minimal scarring</li>
                <li>Less pain after surgery</li>
                <li>Reduced blood loss</li>
                <li>Lower risk of wound infection</li>
                <li>A shorter hospital stay</li>
                <li>A faster return to daily activities</li>
              </ul>
              <p>
                Not every condition or patient is suited to it. Your surgeon
                will explain whether it is the right route for you.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Conditions Treated With Laparoscopy
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Ovarian cysts</li>
                <li>Uterine fibroids</li>
                <li>Endometriosis and chronic pelvic pain</li>
                <li>Uterine or vaginal vault prolapse</li>
                <li>Heavy or abnormal bleeding not responding to medicines</li>
                <li>Tubal problems and certain causes of infertility</li>
                <li>Need for permanent contraception</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Procedures Offered
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Laparoscopic cystectomy
                  </h3>
                  <p>
                    Removes ovarian cysts while preserving healthy ovarian
                    tissue and fertility.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Laparoscopic myomectomy
                  </h3>
                  <p>Removes fibroids while preserving the uterus.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Laparoscopic hysterectomy
                  </h3>
                  <p>
                    A minimally invasive option for removing the uterus when
                    it is medically necessary.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Endometriosis surgery
                  </h3>
                  <p>Excises endometriosis to relieve pelvic pain.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Sacrocolpopexy
                  </h3>
                  <p>Repairs uterine and vaginal vault prolapse.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Laparoscopic sterilization
                  </h3>
                  <p>
                    A safe, permanent, day-care family planning procedure.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Diagnostic hysteroscopy and hysteroscopic polypectomy
                  </h3>
                  <p>
                    Examine the uterine cavity and remove polyps without
                    external cuts.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Do You Really Need Surgery?
              </h2>
              <p>
                Many conditions are first managed with medicines, hormonal
                treatment or monitoring. Before recommending surgery, a good
                doctor should:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Explain the diagnosis and how it was confirmed</li>
                <li>
                  Describe non-surgical and uterus-preserving options
                </li>
                <li>Discuss benefits, risks and expected outcomes</li>
                <li>
                  Consider your age, health, family plans and wishes
                </li>
                <li>Give you time to decide, unless it is an emergency</li>
              </ul>
              <p>
                If you still wish to have children, fertility-preserving
                options such as myomectomy or cystectomy may be more suitable
                than removing an organ.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion From Rampur
              </h2>
              <p>
                Seeking a second opinion is reasonable, particularly before a
                major procedure. To make it useful:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Bring all ultrasound reports, and the scan images or discs
                  if you have them
                </li>
                <li>
                  Bring blood test results, previous prescriptions and
                  discharge summaries
                </li>
                <li>Bring the written surgical advice you were given</li>
                <li>Note what treatments you have already tried</li>
                <li>
                  Write down questions such as whether laparoscopy is
                  suitable, whether alternatives exist, and how the surgery
                  will affect fertility
                </li>
              </ul>
              <p>
                The doctor will review your records, examine you if needed and
                explain whether the advice fits your situation. Your concerns
                are discussed respectfully, and your medical details are kept
                confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Surgery When You Live in Rampur
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Questions to Ask the Clinic
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Where will the surgery take place? Please confirm this
                    directly with the clinic.
                  </li>
                  <li>
                    Which pre-operative tests can be done before the day of
                    surgery, or closer to home?
                  </li>
                  <li>How long should I expect to stay?</li>
                  <li>Who should accompany me?</li>
                  <li>
                    Will I need to stay in Moradabad for a few days afterwards?
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Prepare for the Day
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Complete the advised tests and share your full medical
                    history, allergies and medicines
                  </li>
                  <li>Discuss anaesthesia with the anaesthetist</li>
                  <li>Follow fasting instructions exactly</li>
                  <li>Arrange help at home for the first week or two</li>
                  <li>
                    Pack comfortable clothes, toiletries, identification and
                    your records
                  </li>
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
                  <li>Arrange a family member to accompany you</li>
                  <li>
                    Take regular breaks if the journey is long, and avoid
                    lifting luggage yourself
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>
              <p>
                Recovery varies with the procedure, but general advice
                includes:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Gentle walking soon after surgery, as advised, to support
                  circulation
                </li>
                <li>
                  Light, balanced meals with fluids and fibre to prevent
                  constipation
                </li>
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
              <p>Contact your doctor promptly if you notice:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Fever</li>
                <li>Heavy bleeding</li>
                <li>Worsening pain</li>
                <li>Redness, swelling or discharge from a wound</li>
                <li>Vomiting that does not settle</li>
                <li>Difficulty passing urine</li>
                <li>Calf pain or swelling</li>
                <li>Breathlessness or chest pain</li>
              </ul>
              <p>
                If you cannot reach the clinic quickly, or the situation is
                urgent, go to the nearest emergency facility. Do not delay
                care to travel to another city.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Surgery and Fertility
              </h2>
              <p>
                For many women, preserving fertility matters as much as
                treating the disease. The clinic uses fertility-preserving
                techniques wherever possible. It also offers fertility and
                IVF services, so surgical and fertility planning can be
                coordinated for couples who need both.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Hysteroscopy
              </h2>
              <p>
                Some problems are best seen from inside the uterus. Diagnostic
                hysteroscopy is a gentle endoscopic evaluation of the uterine
                cavity, useful for abnormal bleeding, repeated miscarriage or
                fertility concerns. Hysteroscopic polypectomy removes polyps
                without any external cuts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                When to See a Gynaecologist
              </h2>
              <p>Book a consultation if you have:</p>
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
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and endometriosis care,
                  with a compassionate approach
                </li>
                <li>
                  <strong>Honest guidance:</strong> Surgery advised only when
                  needed, with alternatives discussed first
                </li>
                <li>
                  <strong>Fertility-preserving techniques:</strong> Used
                  wherever possible
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
                    Call for appointment:{" "}
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
                    WhatsApp:{" "}
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
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="font-semibold underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
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