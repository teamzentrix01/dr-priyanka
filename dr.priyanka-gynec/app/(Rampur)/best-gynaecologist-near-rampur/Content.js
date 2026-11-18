
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
    q: "How do I know which gynaecologist is right for me?",
    a: "Consider whether she listens, explains clearly, gives honest advice, has suitable facilities and makes you feel comfortable. Your specific need, such as pregnancy, fertility or surgery, also matters.",
  },
  {
    q: "Should I get a second opinion before surgery?",
    a: "It is reasonable to do so. Bring your reports and scans, and ask the doctor to explain the options, including non-surgical ones.",
  },
  {
    q: "Does the clinic offer IVF?",
    a: "Yes. The clinic offers fertility and IVF treatment with time-lapse embryo monitoring and AI-powered semen analysis with DNA integrity testing.",
  },
  {
    q: "Is normal delivery supported?",
    a: "Yes. Normal vaginal delivery is prioritised wherever it is safe, and a caesarean is advised only when medically necessary.",
  },
  {
    q: "Can unmarried women consult a gynaecologist?",
    a: "Yes. Women of any age or marital status can consult a gynaecologist for periods, hormonal concerns, infections or check-ups.",
  },
  {
    q: "Do I need an appointment before travelling?",
    a: "Yes, booking in advance is recommended. Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Previous prescriptions, blood tests, ultrasounds, surgical records, a list of medicines and your questions. If pregnant, bring your antenatal card.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on the clinic website.",
  },
];

export default function BestGynaecologistNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Best Gynaecologist near Rampur – How to Choose
            </h1>

            <p>
              Searching for &quot;the best gynaecologist&quot; can bring up
              long lists, star ratings and bold claims. The truth is that no
              single doctor is best for every woman. The right gynaecologist is
              the one who suits your health needs, explains clearly and earns
              your trust.
            </p>

            <p>
              This guide helps women in Rampur decide. It also introduces Dr.
              Priyanka Pachauri of Dr. Priyanka Gynaec in neighbouring
              Moradabad, an option for women who want specialised care. The
              clinic is located in Moradabad, not in Rampur. Its philosophy is
              &quot;Her Health First.&quot;
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Start With Your Need, Not the Title
            </h2>

            <p>
              Different concerns call for different strengths. Ask yourself
              what you are looking for.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Routine check-up or minor concern:</strong> A nearby,
                approachable doctor is often enough
              </li>
              <li>
                <strong>Pregnancy care:</strong> Someone who offers regular
                antenatal visits, scans and delivery planning
              </li>
              <li>
                <strong>Trying to conceive:</strong> A doctor with fertility
                and IVF experience
              </li>
              <li>
                <strong>Cysts, fibroids, endometriosis or prolapse:</strong> A
                surgeon trained in laparoscopy
              </li>
              <li>
                <strong>High-risk pregnancy:</strong> A doctor comfortable
                with closer monitoring
              </li>
              <li>
                <strong>Second opinion:</strong> Someone who will review your
                reports without pressure
              </li>
            </ul>

            <p>
              Once your need is clear, comparing doctors becomes much easier.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              A Practical Checklist for Choosing
            </h2>

            <p>Use these questions during your first consultation.</p>

            <ol className="list-decimal space-y-3 pl-6">
              <li>
                <strong>Does she listen?</strong> You should be able to
                describe your concerns fully without being cut off.
              </li>
              <li>
                <strong>Are explanations clear?</strong> You should understand
                the diagnosis, tests and options.
              </li>
              <li>
                <strong>Is the advice honest?</strong> Tests, surgery and
                caesarean should be recommended only when truly needed.
              </li>
              <li>
                <strong>Are alternatives discussed?</strong> Good doctors
                explain non-surgical options first when appropriate.
              </li>
              <li>
                <strong>Is the clinic equipped?</strong> Modern imaging and
                surgical facilities improve accuracy and safety.
              </li>
              <li>
                <strong>Is care continuous?</strong> A team that remembers
                your history saves time and stress.
              </li>
              <li>
                <strong>Do you feel comfortable?</strong> Trust matters as
                much as qualifications.
              </li>
              <li>
                <strong>Is it practical?</strong> Consider travel, follow-ups
                and family support.
              </li>
            </ol>

            <p>
              If most answers are yes, you have probably found a good match.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Common Myths About Choosing a Gynaecologist
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: The most expensive doctor is the best.
                </h3>
                <p>
                  <strong>Fact:</strong> Cost does not guarantee quality. Clear
                  communication, honest advice and good outcomes matter more.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: The busiest clinic is the best clinic.
                </h3>
                <p>
                  <strong>Fact:</strong> A crowd may show popularity, but it
                  can also mean short consultations. Make sure you get enough
                  time.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: A new technique is always better.
                </h3>
                <p>
                  <strong>Fact:</strong> The best approach is the one that is
                  safest and most effective for you, not simply the newest.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: You must be married or pregnant to see a gynaecologist.
                </h3>
                <p>
                  <strong>Fact:</strong> Women of any age or marital status can
                  consult for periods, hormones, infections and check-ups.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: Surgery is the only answer for cysts and fibroids.
                </h3>
                <p>
                  <strong>Fact:</strong> Many conditions are first managed with
                  medicines or monitoring. Surgery is considered when it is
                  the best option.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: A caesarean is always safer.
                </h3>
                <p>
                  <strong>Fact:</strong> Normal delivery is preferred when it
                  is safe. A caesarean is advised only when medically
                  necessary.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Should You Travel for Care?
            </h2>

            <p>
              For many routine needs, a doctor close to home is the practical
              choice. Travelling to a larger centre can make sense when you
              want:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Advanced fertility or IVF care</li>
              <li>Close monitoring for a high-risk pregnancy</li>
              <li>Minimally invasive 3D laparoscopic surgery</li>
              <li>A second opinion before a major procedure</li>
              <li>Gynaecology, pregnancy and paediatric care at one place</li>
            </ul>

            <p>
              Weigh the benefit against the effort of repeated visits, and ask
              the doctor early how often you will need to come.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              About Dr. Priyanka Gynaec
            </h2>

            <p>
              Dr. Priyanka Gynaec is a women&apos;s health and fertility centre
              offering gynaecology, laparoscopy, IVF and pregnancy care. It
              uses 3D laparoscopy, 3D and 4D ultrasound, time-lapse embryo
              imaging and AI-powered semen analysis. The clinic&apos;s approach
              is to listen first and then apply advanced expertise with
              patience and genuine care.
            </p>

            <p>
              <strong>Address:</strong> A2, near Old Roadways, Gandhi Nagar,
              Moradabad, Uttar Pradesh – 244001
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Services at the Clinic
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Gynaecology and PCOS
                </h3>
                <p>
                  Periods problems, infections, pelvic pain, contraception,
                  menopause symptoms and PCOS. PCOS is highly treatable, and
                  lifestyle changes, medicines and ovulation induction help
                  many women regulate cycles or conceive.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Pregnancy and Antenatal Care
                </h3>
                <p>
                  Trimester-wise check-ups, ultrasound on a Voluson E22 3D/4D
                  machine, blood tests, screening for gestational diabetes and
                  thyroid problems, nutrition guidance and labour preparation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Normal Delivery and High-Risk Care
                </h3>
                <p>
                  Normal vaginal delivery is prioritised wherever it is safe.
                  Women with diabetes, high blood pressure, thyroid disease,
                  earlier miscarriages, twins or pregnancy after IVF receive
                  closer monitoring.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Fertility and IVF
                </h3>
                <p>
                  Evaluation of both partners, ovulation tracking and
                  induction, IVF, time-lapse embryo monitoring, and
                  AI-powered semen analysis with DNA integrity testing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  3D Laparoscopic Surgery
                </h3>
                <p>
                  Keyhole surgery generally means smaller scars, less pain and
                  quicker recovery. Procedures include laparoscopic cystectomy,
                  myomectomy, hysterectomy, endometriosis surgery,
                  sacrocolpopexy and sterilization.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Hysteroscopy
                </h3>
                <p>
                  Diagnostic hysteroscopy gently examines the uterine cavity,
                  and hysteroscopic polypectomy removes polyps without cuts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Postnatal and Paediatric Care
                </h3>
                <p>
                  Recovery support, breastfeeding guidance, contraception
                  counselling, paediatric consultations, vaccinations and
                  newborn care.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              How to Prepare for a First Consultation
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Book in advance by phone or WhatsApp, and confirm current
                timings
              </li>
              <li>
                Bring previous prescriptions, blood tests, ultrasounds and
                surgical records
              </li>
              <li>Note the date of your last period, symptoms and questions</li>
              <li>List your medicines and supplements</li>
              <li>Consider bringing a family member or friend</li>
              <li>If pregnant, carry your antenatal card</li>
            </ul>

            <p>
              A first visit is a conversation first. Examination is done only
              when it is needed, and it is explained beforehand. Your concerns
              are discussed respectfully, and your medical details are kept
              confidential.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Questions Worth Asking Any Gynaecologist
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>What do you think is causing my symptoms?</li>
              <li>Which tests do I need, and why?</li>
              <li>What are my options, including non-surgical ones?</li>
              <li>What are the benefits and risks of each?</li>
              <li>How will this affect my fertility?</li>
              <li>What recovery should I expect?</li>
              <li>
                When should I return, and which warning signs need urgent
                attention?
              </li>
            </ul>

            <p>A good doctor welcomes these questions.</p>

            <h2 className="text-2xl font-bold text-gray-900">
              When to See a Gynaecologist
            </h2>

            <p>Book a visit if you notice:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Missed, irregular, painful or very heavy periods</li>
              <li>Unusual discharge, itching or odour</li>
              <li>Pelvic pain or pain during intercourse</li>
              <li>
                Bleeding between periods, after intercourse or after menopause
              </li>
              <li>Difficulty conceiving after 6 to 12 months of trying</li>
              <li>A cyst, fibroid or polyp found on a scan</li>
              <li>A positive pregnancy test</li>
              <li>Menopausal symptoms</li>
            </ul>

            <p>
              For emergencies, such as very heavy bleeding, sudden severe pain,
              bleeding in pregnancy or reduced baby movements, go to the
              nearest emergency facility immediately rather than travelling a
              long distance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Why Women Trust Dr. Priyanka Gynaec
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Expertise with heart:</strong> Training in laparoscopy,
                fertility treatment and endometriosis care, with a
                compassionate approach
              </li>
              <li>
                <strong>Continuity you can count on:</strong> An integrated
                team that knows your history
              </li>
              <li>
                <strong>Complete care in one place:</strong> Gynaecology,
                fertility, pregnancy and paediatric services
              </li>
              <li>
                <strong>Honest guidance:</strong> Advice based on what you
                truly need
              </li>
              <li>
                <strong>Trust earned over time:</strong> A reputation built on
                families recommending the clinic to one another
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              Clinic Address and Appointments
            </h2>

            <p>
              Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
              Nagar, Moradabad, Uttar Pradesh – 244001.
            </p>

            <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h3 className="mb-4 text-2xl font-bold">
                Book Your Appointment
              </h3>

              <p className="mb-6">
                For gynaecology, fertility, pregnancy and other women&apos;s
                health consultations, contact Dr. Priyanka Gynaec.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
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
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="break-all hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
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
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
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

            <section className="pt-4">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      Q{index + 1}. {faq.q}
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
