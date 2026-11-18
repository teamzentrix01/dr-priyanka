
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
    q: "How often should I have a gynaecological check-up?",
    a: "Many women benefit from a routine check-up about once a year, though your doctor will advise a schedule based on your age and health. Visit sooner if you have symptoms.",
  },
  {
    q: "Do I need a check-up if I feel completely well?",
    a: "Yes. Preventive visits can detect problems early, before symptoms appear, and give you a chance to ask questions.",
  },
  {
    q: "Is a gynaecological examination always needed?",
    a: "No. It is done only when it is necessary, and it is explained to you first. Many concerns can be assessed through discussion, ultrasound and tests.",
  },
  {
    q: "At what age should a girl first see a gynaecologist?",
    a: "There is no fixed age. A visit is advised when she has concerns such as very painful, heavy or irregular periods, or if periods have not started by around 15.",
  },
  {
    q: "Can unmarried women consult a gynaecologist?",
    a: "Yes. Women of any age or marital status can consult for periods, hormonal concerns, infections or preventive care.",
  },
  {
    q: "When should I see a doctor before getting pregnant?",
    a: "Ideally a few months before conception, to review your health, medicines and supplements.",
  },
  {
    q: "Does the clinic offer IVF and pregnancy care?",
    a: "Yes. It offers fertility and IVF treatment, antenatal care, normal delivery support, high-risk pregnancy management and postnatal care.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Previous prescriptions, blood tests, ultrasounds, surgical records, your period record, a list of medicines and your questions. If pregnant, bring your antenatal card.",
  },
  {
    q: "How do I book an appointment?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on the clinic website.',
  },
];

export default function FemaleGynaecologistNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Female Gynaecologist near Rampur – Preventive Women&apos;s Health
              Care
            </h1>

            <p>
              Most women visit a gynaecologist only when something goes wrong.
              Yet many gynaecological conditions, from infections and fibroids
              to PCOS and cervical changes, are easiest to treat when found
              early. Preventive care means seeing a doctor while you still feel
              well, so small concerns do not grow into big ones.
            </p>

            <p>
              If you are looking for a female gynaecologist near Rampur,{" "}
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec in
              neighbouring <strong>Moradabad</strong> is an option to consider.
              The clinic is located in Moradabad, not in Rampur, and women from
              Rampur and nearby areas travel there for consultations. Its
              philosophy is <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              What Is Preventive Gynaecological Care?
            </h2>

            <p>Preventive care includes:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Routine check-ups, even without symptoms</li>
              <li>Screening tests when advised by your doctor</li>
              <li>Guidance on periods, contraception and sexual health</li>
              <li>Advice on nutrition, activity and weight</li>
              <li>Planning before pregnancy</li>
              <li>Early attention to changes in your body</li>
            </ul>

            <p>
              The right schedule depends on your age, health and history, so
              your doctor will personalise it.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Why Women Skip Check-Ups
            </h2>

            <p>
              Common reasons include embarrassment, fear of examinations, lack
              of time and the belief that &quot;no symptoms means no problem.&quot;
              Some conditions, such as early cervical changes, fibroids or
              PCOS, may cause few obvious symptoms at first. A regular visit
              gives you a chance to ask questions and get reassurance, or catch
              a problem early.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              A Simple Check-Up Guide by Age
            </h2>

            <p>
              This is a general guide only. Your doctor will advise what suits
              you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Teenage Years
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Visit if periods are very painful, very heavy, absent by around
                age 15 or persistently irregular
              </li>
              <li>Ask about acne, weight changes and hormonal concerns</li>
              <li>Learn about hygiene, healthy habits and what is normal</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">Twenties</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Discuss contraception, cycle tracking and sexual health</li>
              <li>Ask whether screening is appropriate for you, such as a Pap smear</li>
              <li>Get advice on PCOS symptoms, thyroid health and anaemia</li>
              <li>Consider a preconception visit if you plan a pregnancy</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">Thirties</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Continue routine check-ups and screening as advised</li>
              <li>
                Seek an early fertility evaluation if pregnancy has not
                happened within 12 months of trying, or within 6 months from
                age 35
              </li>
              <li>
                Review heavy or painful periods, which can signal fibroids,
                polyps or endometriosis
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">Forties</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Keep up regular gynaecological check-ups and screening</li>
              <li>Discuss heavy bleeding, perimenopausal changes and pelvic pain</li>
              <li>Ask about bone health, heart health and general wellbeing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">
              After Menopause
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Report any bleeding promptly, since it should always be examined</li>
              <li>Ask about vaginal dryness, urine leakage or pelvic heaviness</li>
              <li>Continue screening as your doctor advises</li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              What Happens at a Preventive Visit?
            </h2>

            <p>
              A preventive visit is a conversation first. You can expect:
            </p>

            <ol className="list-decimal space-y-2 pl-6">
              <li>
                A discussion of your cycle, symptoms, past pregnancies,
                medicines and family history
              </li>
              <li>
                A gentle examination only if it is needed, explained beforehand
              </li>
              <li>
                Tests or an ultrasound only when they add useful information
              </li>
              <li>Advice on lifestyle, contraception or pregnancy planning</li>
              <li>A clear plan for when to return</li>
            </ol>

            <p>
              You can ask for a pause or decline any step. Your concerns are
              discussed respectfully, and your medical details are kept
              confidential.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Your Cycle as a Health Signal
            </h2>

            <p>
              Your period can tell you a lot about your health. Keep a simple
              record of:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>The first day of each period</li>
              <li>Length of the cycle</li>
              <li>How heavy the flow is and whether you pass clots</li>
              <li>Pain, mood changes or other symptoms</li>
              <li>Any bleeding between periods</li>
            </ul>

            <p>
              Bring this record to your visit. It helps your doctor spot
              patterns that a single appointment may not reveal.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Warning Signs Worth a Visit
            </h2>

            <p>
              Do not wait for your next routine check-up if you notice:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Cycles shorter than 21 days or longer than 35 days</li>
              <li>Missed periods for three months or more</li>
              <li>Very heavy bleeding or large clots</li>
              <li>Severe period pain that disrupts daily life</li>
              <li>
                Bleeding between periods, after intercourse or after menopause
              </li>
              <li>Persistent pelvic pain or pain during intercourse</li>
              <li>Unusual discharge, itching, burning or odour</li>
              <li>A lump in the breast or abdomen</li>
              <li>Difficulty conceiving</li>
            </ul>

            <p>
              For sudden severe pain, very heavy bleeding with dizziness, or
              bleeding during pregnancy, go to the nearest emergency facility
              immediately.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Everyday Habits That Support Women&apos;s Health
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Balanced diet:</strong> Vegetables, fruit, pulses,
                grains, dairy and adequate protein, with iron-rich foods if
                your periods are heavy
              </li>
              <li>
                <strong>Regular activity:</strong> Walking, yoga or exercise
                you enjoy and can keep up
              </li>
              <li>
                <strong>Healthy weight:</strong> Even modest changes can help
                regulate cycles in women with PCOS
              </li>
              <li>
                <strong>Good sleep and stress care:</strong> Both affect
                hormones
              </li>
              <li>
                <strong>No smoking or tobacco:</strong> They harm reproductive
                and overall health
              </li>
              <li>
                <strong>Safe practices:</strong> Use protection against
                infections and discuss contraception openly
              </li>
              <li>
                <strong>Avoid self-medication:</strong> Do not start hormonal
                pills or herbal remedies without advice
              </li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Planning a Pregnancy
            </h2>

            <p>
              A preconception consultation helps the pregnancy start on a
              healthier footing. Your doctor may discuss:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Folic acid and other supplements</li>
              <li>Control of diabetes, thyroid disease or high blood pressure</li>
              <li>Review of current medicines</li>
              <li>Vaccination and infection checks, as advised</li>
              <li>Healthy weight and lifestyle</li>
            </ul>

            <p>
              If pregnancy is confirmed, early registration within the first 6
              to 8 weeks allows the doctor to begin antenatal care, including
              ultrasound, screening and nutrition guidance.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Services at Dr. Priyanka Gynaec
            </h2>

            <p>The clinic offers care for every stage:</p>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Gynaecology and PCOS:</strong> Periods problems,
                infections, pelvic pain, contraception and menopause symptoms
              </li>
              <li>
                <strong>Pregnancy care:</strong> Antenatal visits, ultrasound
                on a Voluson E22 3D/4D machine, normal delivery support and
                high-risk pregnancy monitoring
              </li>
              <li>
                <strong>Fertility and IVF:</strong> Evaluation of both
                partners, ovulation induction, IVF, time-lapse embryo
                monitoring, and AI-powered semen analysis with DNA integrity
                testing
              </li>
              <li>
                <strong>3D laparoscopic surgery:</strong> Cystectomy,
                myomectomy, hysterectomy, endometriosis surgery,
                sacrocolpopexy and sterilization
              </li>
              <li>
                <strong>Hysteroscopy:</strong> Diagnostic hysteroscopy and
                hysteroscopic polypectomy
              </li>
              <li>
                <strong>Paediatric care:</strong> Consultations, vaccinations
                and newborn care
              </li>
            </ul>

            <p>
              Surgery is recommended only when it is truly the best option,
              and alternatives are always discussed first.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Planning Your Visit from Rampur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Book in advance by phone or WhatsApp, and confirm current timings</li>
              <li>Bring previous prescriptions, blood tests, ultrasounds and surgical records</li>
              <li>Carry your period record and a list of questions</li>
              <li>List your medicines and supplements</li>
              <li>Allow extra time for travel and possible waiting</li>
              <li>
                Ask which follow-up checks can be done closer to home, and share
                the reports with the clinic
              </li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Why Women Trust Dr. Priyanka Gynaec
            </h2>

            <ul className="list-disc space-y-3 pl-6">
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
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Clinic Address and Appointments
            </h2>

            <p>
              Dr. Priyanka Gynaec is located at{" "}
              <strong>
                A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh –
                244001
              </strong>
              .
            </p>

            <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-5 text-2xl font-bold">
                Book Your Appointment
              </h2>

              <p className="mb-5">
                For preventive women&apos;s healthcare, gynaecological
                consultations or pregnancy-related guidance, contact Dr.
                Priyanka Gynaec.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="underline hover:text-[#8F1738]"
                    >
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#8F1738]"
                    >
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <div>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="break-all underline hover:text-[#8F1738]"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
                  <div>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all underline hover:text-[#8F1738]"
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
                  View Services
                </Link>
              </div>
            </div>

            <section className="pt-4">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-4">
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
