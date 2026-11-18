
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Rampur?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Rampur and nearby areas travel there for pregnancy care.",
  },
  {
    q: 'What does "high-risk pregnancy" mean?',
    a: "It means the mother, baby or both have a higher chance of complications, so closer monitoring is advised. It does not mean a bad outcome is certain.",
  },
  {
    q: "Which conditions make a pregnancy high-risk?",
    a: "Examples include diabetes, high blood pressure, thyroid disease, previous miscarriage, twin pregnancy, advanced maternal age, pregnancy after IVF and placenta problems.",
  },
  {
    q: "How often will I need check-ups?",
    a: "Usually more often than in a low-risk pregnancy. Your doctor will set a schedule according to your needs.",
  },
  {
    q: "Can some checks be done closer to home?",
    a: "Some routine checks may be possible locally. Ask your doctor which ones, and carry the reports to the clinic.",
  },
  {
    q: "Can I still have a normal delivery?",
    a: "Sometimes. It depends on your condition, the baby's health and how the pregnancy progresses.",
  },
  {
    q: "Where will my delivery take place?",
    a: "Please confirm this with the clinic when you book, and discuss the plan during your antenatal visits.",
  },
  {
    q: "What should I do in an emergency?",
    a: "Go to the nearest emergency facility immediately. Do not delay care to travel to another city.",
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

export default function HighRiskPregnancyDoctorNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              High Risk Pregnancy Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad
            </h1>

            <p>
              Being told your pregnancy is &quot;high-risk&quot; can be
              frightening. The term means your pregnancy needs closer attention,
              not that something will go wrong. With the right doctor and a
              clear plan, many women with high-risk pregnancies deliver healthy
              babies.
            </p>

            <p>
              If you live in Rampur, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in Moradabad, not in
              Rampur, and women from Rampur and nearby areas travel there for
              pregnancy care. Its philosophy is <strong>&quot;Her Health First.&quot;</strong>{" "}
              You are listened to, informed and never rushed.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Makes a Pregnancy High-Risk?
              </h2>
              <p>
                A pregnancy is considered high-risk when the mother, the baby
                or both have a greater chance of complications. Common reasons
                include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Diabetes, or gestational diabetes that develops in pregnancy</li>
                <li>High blood pressure or pre-eclampsia</li>
                <li>Thyroid disorders</li>
                <li>Anaemia</li>
                <li>Previous miscarriage, stillbirth or preterm birth</li>
                <li>Previous caesarean or uterine surgery</li>
                <li>Twin or multiple pregnancy</li>
                <li>Pregnancy after IVF or long-standing infertility</li>
                <li>Pregnancy at an older maternal age</li>
                <li>Placenta problems, such as a low-lying placenta</li>
                <li>Slow baby growth or abnormal amniotic fluid levels</li>
              </ul>
              <p>
                Having one factor does not guarantee complications. It guides
                the level of care you need.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Early Care Matters
              </h2>
              <p>
                Seeing a doctor early lets the team identify risks from the
                beginning, choose medicines that are safe in pregnancy, plan
                tests at the right time and control conditions like blood
                pressure or sugar before they affect the baby. If you have a
                medical condition or past pregnancy problems, a preconception
                consultation is ideal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                High-Risk Pregnancy Care at Dr. Priyanka Gynaec
              </h2>
              <p>Care is tailored to your risk profile and includes:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Early registration and detailed history review</li>
                <li>More frequent visits when required</li>
                <li>Ultrasound on a Voluson E22 3D and 4D machine</li>
                <li>Growth scans and checks on amniotic fluid and the placenta</li>
                <li>
                  Blood and urine tests, including screening for gestational
                  diabetes, anaemia and thyroid problems
                </li>
                <li>Blood pressure and weight monitoring</li>
                <li>Nutrition and lifestyle counselling</li>
                <li>Review of medicines for pregnancy safety</li>
                <li>Delivery planning and preparation</li>
                <li>Postnatal follow-up and newborn guidance</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Common Conditions and How They Are Managed
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Gestational diabetes
                  </h3>
                  <p>
                    Managed with diet, activity, blood sugar monitoring and
                    sometimes medicines. Good control lowers the risk of an
                    oversized baby and delivery complications.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    High blood pressure and pre-eclampsia
                  </h3>
                  <p>
                    Regular blood pressure and urine checks help catch changes
                    early. Severe headache, blurred vision, sudden swelling or
                    upper abdominal pain need urgent attention.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Thyroid disease
                  </h3>
                  <p>
                    Thyroid levels are monitored through pregnancy, because
                    medicine needs often change.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    History of miscarriage
                  </h3>
                  <p>
                    Early scans, supportive care and careful follow-up can ease
                    anxiety and improve outcomes where a treatable cause is
                    found.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Twin pregnancy
                  </h3>
                  <p>
                    Usually needs more frequent scans, closer growth monitoring
                    and careful planning of delivery.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pregnancy after IVF
                  </h3>
                  <p>
                    Often monitored more closely. The clinic&apos;s fertility
                    and IVF services mean your history is already known if you
                    were treated there.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Low-lying placenta
                  </h3>
                  <p>
                    Ultrasound monitoring and activity advice help. A
                    caesarean may be recommended if the placenta still covers
                    the cervix near term.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Normal Delivery and High-Risk Pregnancy
              </h2>
              <p>
                Dr. Priyanka Pachauri prioritises normal delivery wherever it
                is safe for mother and baby. A high-risk pregnancy does not
                automatically rule it out. The timing and mode of delivery are
                decided individually, based on your health, the baby&apos;s
                condition and how the pregnancy progresses. If a caesarean is
                safer, the reasons are explained openly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Care When You Live in Rampur
              </h2>
              <p>
                Distance matters more when a pregnancy needs close monitoring.
                Plan early.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                Ask your doctor:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>How often will I need to come to the clinic?</li>
                <li>
                  Which scans and tests must be done at the clinic, and which
                  routine checks may be possible locally if you agree?
                </li>
                <li>
                  What readings should I record at home, such as blood pressure
                  or blood sugar?
                </li>
                <li>When should I contact you, and how?</li>
                <li>
                  Where will the delivery take place? Please confirm this with
                  the clinic.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Keep records ready:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Carry your antenatal card, scan reports and blood test results
                  to every visit
                </li>
                <li>Keep a log of any home readings your doctor asks for</li>
                <li>Photograph reports as a backup</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Plan travel:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Book appointments in advance and confirm timings</li>
                <li>Travel with a family member where possible</li>
                <li>Take breaks on long journeys and stay hydrated</li>
                <li>
                  Ask whether travel limits apply as your pregnancy advances
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Emergency Plan
              </h2>
              <p>
                This is the most important part of planning from Rampur.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Identify the nearest hospital:</strong> Find a
                  hospital with emergency and delivery facilities near your
                  home, and save its number.
                </li>
                <li>
                  <strong>Keep your antenatal file:</strong> Keep it within
                  reach at all times.
                </li>
                <li>
                  <strong>Tell family members:</strong> Explain the warning
                  signs and the plan.
                </li>
                <li>
                  <strong>Arrange transport:</strong> Plan in advance as your
                  due date nears, and keep transport on standby.
                </li>
                <li>
                  <strong>Know when to go locally:</strong> In an emergency, go
                  to the nearest emergency facility immediately. Do not delay
                  care to travel to another city.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs: Do Not Wait for Your Next Appointment
              </h2>
              <p>Seek urgent medical care if you have:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Vaginal bleeding</li>
                <li>Leaking fluid</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Reduced or absent baby movements</li>
                <li>
                  Severe headache, blurred vision or sudden swelling of the
                  face or hands
                </li>
                <li>High fever</li>
                <li>Regular painful contractions before your due date</li>
                <li>Breathlessness or chest pain</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Everyday Steps for a Safer Pregnancy
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Attend every scheduled visit and scan</li>
                <li>Take medicines and supplements exactly as prescribed</li>
                <li>
                  Eat balanced meals with adequate protein, vegetables, fruit
                  and fluids
                </li>
                <li>Follow doctor-approved activity and rest guidance</li>
                <li>Avoid smoking, alcohol, tobacco and self-medication</li>
                <li>Monitor baby movements as advised</li>
                <li>Sleep well and manage stress</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Wellbeing
              </h2>
              <p>
                Extra visits and tests can create stress, and feeling anxious
                is natural. Share your worries openly, since clear information
                often reduces fear. Lean on family support, and ask for help if
                sadness or anxiety becomes hard to manage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                After Delivery
              </h2>
              <p>
                Women with high-risk pregnancies may need extra follow-up for
                blood pressure, blood sugar or recovery. The clinic also offers
                newborn care, paediatric consultations and vaccinations, so
                mother and baby can continue with the same trusted team.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Expertise with heart:</strong> Training in laparoscopy,
                  fertility treatment and women&apos;s health, with a
                  compassionate approach.
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history.
                </li>
                <li>
                  <strong>Advanced imaging:</strong> Detailed assessment with a
                  Voluson E22 3D/4D ultrasound machine.
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Fertility,
                  pregnancy, delivery and paediatric services.
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice on the safest mode of
                  delivery.
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
                Contact Dr. Priyanka Gynaec for appointment details and
                pregnancy care information.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Call for appointment</p>
                    <a
                      href="tel:+919079765578"
                      className="hover:underline"
                    >
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
