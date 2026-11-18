
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
    q: "When is a hysterectomy necessary?",
    a: "It is advised when conditions such as fibroids, heavy bleeding, endometriosis, adenomyosis, prolapse or certain cancers cannot be managed effectively in other ways.",
  },
  {
    q: "Are there alternatives to hysterectomy?",
    a: "Often yes. Depending on the condition, options include medicines, hormonal treatment, myomectomy, hysteroscopic procedures and other uterus-preserving surgeries.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
  },
  {
    q: "What is the advantage of laparoscopic hysterectomy?",
    a: "When suitable, it typically offers smaller scars, less pain, less blood loss and quicker recovery than open surgery.",
  },
  {
    q: "Where will my surgery take place?",
    a: "Please confirm this directly with the clinic when you book.",
  },
  {
    q: "Will I go into menopause after hysterectomy?",
    a: "If the ovaries are removed, menopause begins immediately. If they are preserved, they usually keep working, though menopause may come a little earlier for some women.",
  },
  {
    q: "Can I get pregnant after a hysterectomy?",
    a: "No. Once the uterus is removed, pregnancy is not possible, so fertility wishes must be discussed before surgery.",
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

export default function HysterectomySurgeonNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Hysterectomy Surgeon near Rampur – Dr. Priyanka Pachauri, Moradabad
            </h1>

            <p>
              A recommendation for hysterectomy is a major decision. Many
              women worry about pain, recovery, hormones and intimacy, and
              about whether surgery is truly necessary. If you live in Rampur,
              there is also the question of where to go for advice.
            </p>

            <p>
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec in
              neighbouring <strong>Moradabad</strong> is an option to consider.
              The clinic is located in Moradabad, not in Rampur, and women from
              Rampur and nearby areas travel there for consultations. Its
              philosophy is <strong>&quot;Her Health First.&quot;</strong> You
              are listened to, informed and never pushed into a decision.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is a Hysterectomy?
              </h2>
              <p>
                A hysterectomy is surgery to remove the uterus. After it,
                periods stop and pregnancy is no longer possible. Depending on
                the condition, the surgeon may also remove the cervix,
                fallopian tubes or ovaries. Your doctor will explain which type
                applies to you and why.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Is It Recommended?
              </h2>
              <p>
                It is usually advised when other treatments have not worked or
                are not suitable. Common reasons include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Fibroids causing heavy bleeding, pain or pressure</li>
                <li>Heavy or abnormal bleeding not controlled by medicines</li>
                <li>Endometriosis or adenomyosis with severe, persistent pain</li>
                <li>Uterine or vaginal vault prolapse</li>
                <li>
                  Precancerous changes or cancers of the uterus, cervix or
                  ovaries
                </li>
              </ul>
              <p>
                For many of these, other options exist, and a good doctor
                discusses them first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Alternatives Worth Asking About
              </h2>
              <p>Depending on your condition, alternatives may include:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Medicines or hormonal treatment</strong> to control
                  bleeding or pain
                </li>
                <li>
                  <strong>Laparoscopic myomectomy</strong> to remove fibroids
                  while keeping the uterus
                </li>
                <li>
                  <strong>Hysteroscopic polypectomy</strong> to remove polyps
                  without cuts
                </li>
                <li>
                  <strong>Endometriosis surgery</strong> to relieve pelvic pain
                </li>
                <li>
                  <strong>Sacrocolpopexy</strong> to repair prolapse
                </li>
                <li>
                  <strong>Monitoring</strong> when symptoms are mild
                </li>
              </ul>
              <p>
                If you still wish to have children, uterus-preserving treatment
                is often more suitable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion From Rampur
              </h2>
              <p>
                Seeking a second opinion before a hysterectomy is reasonable.
                To make it useful:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Bring ultrasound reports, and scan images if you have them</li>
                <li>
                  Bring blood tests, previous prescriptions and the
                  surgeon&apos;s written advice
                </li>
                <li>Note what treatments you have already tried</li>
                <li>Write down your questions</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Questions to ask:
              </h3>
              <ol className="list-decimal space-y-2 pl-6">
                <li>What exactly is the diagnosis, and how was it confirmed?</li>
                <li>What happens if I wait or choose another treatment?</li>
                <li>Is keyhole surgery suitable for me?</li>
                <li>Will my ovaries be removed, and why or why not?</li>
                <li>How will surgery affect my hormones and intimate life?</li>
                <li>What is the recovery like?</li>
              </ol>
              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Laparoscopic Hysterectomy at Dr. Priyanka Gynaec
              </h2>
              <p>
                The clinic offers keyhole hysterectomy using high-definition
                3D laparoscopy. Instead of one large abdominal incision, a few
                small cuts are made, and a camera lets the surgeon see the
                pelvis in magnified detail.
              </p>
              <p>When it suits your case, benefits include:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Smaller scars</li>
                <li>Less pain after surgery</li>
                <li>Reduced blood loss</li>
                <li>Lower risk of wound infection</li>
                <li>Shorter hospital stay</li>
                <li>Faster recovery</li>
              </ul>
              <p>
                Not everyone is suited to laparoscopy. The size of the uterus,
                previous surgeries and overall health influence the decision.
                Hysterectomy can also be done vaginally or through an open
                abdominal incision, and your surgeon will recommend the safest
                route.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Surgery When You Live in Rampur
              </h2>

              <h3 className="text-lg font-semibold text-gray-900">
                Ask the clinic:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Where will the surgery take place? Please confirm this
                  directly with the clinic.
                </li>
                <li>
                  Which pre-operative tests can be done in advance, or closer
                  to home?
                </li>
                <li>How long should I expect to stay?</li>
                <li>
                  Will I need to stay in Moradabad for a few days afterwards?
                </li>
                <li>Who should accompany me?</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Prepare for the day:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Complete the advised tests and share your full medical
                  history, allergies and medicines
                </li>
                <li>
                  Treat blood pressure, diabetes, thyroid problems or anaemia
                  before surgery, as advised
                </li>
                <li>Discuss anaesthesia with the anaesthetist</li>
                <li>Follow fasting instructions exactly</li>
                <li>Arrange help at home for the first couple of weeks</li>
                <li>
                  Pack comfortable clothes, toiletries, identification and
                  your records
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Plan the journey home:
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
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>
              <p>
                Recovery depends on the surgical route and your general health.
                Typical guidance includes:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Early days:</strong> Rest, pain relief and gentle
                  walking as advised
                </li>
                <li>
                  <strong>Vaginal spotting or discharge:</strong> Common for a
                  few weeks
                </li>
                <li>
                  <strong>Diet:</strong> Light, balanced meals with fibre and
                  plenty of fluids to avoid constipation
                </li>
                <li>
                  <strong>Activity:</strong> Avoid heavy lifting and strenuous
                  exercise until your doctor approves
                </li>
                <li>
                  <strong>Intimacy:</strong> Usually delayed for several weeks,
                  until your doctor confirms healing
                </li>
                <li>
                  <strong>Follow-up:</strong> Wound check, review of reports
                  and guidance on returning to routine
                </li>
              </ul>
              <p>
                Ask before you leave which follow-up checks may be possible
                closer to home.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs After Surgery
              </h2>
              <p>Contact your doctor promptly if you have:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Fever</li>
                <li>Heavy bleeding</li>
                <li>Severe or worsening pain</li>
                <li>Redness, swelling or discharge from wounds</li>
                <li>Vomiting that does not settle</li>
                <li>Difficulty passing urine</li>
                <li>Calf pain or swelling</li>
                <li>Chest pain or breathlessness</li>
              </ul>
              <p>
                If you cannot reach the clinic quickly, or the situation is
                urgent, go to the nearest emergency facility. Do not delay care
                to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Hormones and Menopause
              </h2>
              <p>
                If only the uterus is removed and the ovaries are left, the
                ovaries usually keep producing hormones, though menopause may
                come slightly earlier for some women. If both ovaries are
                removed, menopause symptoms such as hot flushes, night sweats
                and mood changes can begin soon after surgery. Your doctor will
                discuss whether the ovaries should be removed in your case and
                what support is available.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional and Sexual Wellbeing
              </h2>
              <p>
                It is natural to feel relief, sadness or uncertainty after a
                hysterectomy. Some women are relieved to be free of pain and
                heavy bleeding. Others grieve the loss of fertility, even if
                their family is complete. Many women return to a satisfying
                intimate life once they have healed. Talk openly with your
                doctor about any concerns.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When to See a Gynaecologist
              </h2>
              <p>Book a consultation if you have:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Very heavy or prolonged periods</li>
                <li>Persistent pelvic pain or pressure</li>
                <li>A fibroid, cyst or polyp found on a scan</li>
                <li>A feeling of heaviness or bulging in the vagina</li>
                <li>Bleeding between periods or after menopause</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Honest guidance:</strong> Surgery advised only when
                  needed, with alternatives discussed first
                </li>
                <li>
                  <strong>Focus on uterus-preserving options</strong> wherever
                  appropriate
                </li>
                <li>
                  <strong>3D laparoscopic expertise</strong> for precise,
                  minimally invasive surgery
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
                Contact Dr. Priyanka Gynaec to discuss your symptoms,
                consultation or second-opinion appointment.
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
