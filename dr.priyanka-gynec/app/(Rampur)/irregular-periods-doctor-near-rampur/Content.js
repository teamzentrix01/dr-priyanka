
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
    q: "When should I worry about irregular periods?",
    a: "If cycles are consistently irregular, absent for three months or more, or accompanied by acne, weight changes, heavy bleeding or difficulty conceiving, see a gynaecologist.",
  },
  {
    q: "Can stress delay my period?",
    a: "Yes. Stress, sudden weight changes and intense exercise can disturb hormones and delay periods, though other causes should be ruled out.",
  },
  {
    q: "Is PCOS a common cause of irregular periods?",
    a: "Yes. PCOS is one of the most common causes, due to irregular ovulation. It is treatable.",
  },
  {
    q: "Which tests are done for irregular periods?",
    a: "Commonly a pregnancy test when relevant, an ultrasound and blood tests such as haemoglobin, thyroid and hormone levels. Your doctor chooses tests based on your symptoms.",
  },
  {
    q: "Should I take hormonal pills on my own to regulate periods?",
    a: "It is best to consult a doctor first. Hormonal medicines need proper evaluation, and self-medication can hide the real cause.",
  },
  {
    q: "Can irregular periods affect pregnancy?",
    a: "They often mean irregular ovulation, which can make conceiving harder. Many women still conceive with the right treatment.",
  },
  {
    q: "Can follow-up checks be done in Rampur?",
    a: "Some routine tests may be possible locally. Ask your doctor which ones, and share the reports with the clinic.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on www.gynaecologistmoradabad.com.",
  },
];

export default function IrregularPeriodsDoctorNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Irregular Periods Doctor near Rampur – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              A period that arrives late, early or not at all can be worrying.
              Sometimes it is a passing change caused by stress or travel.
              Sometimes it is a sign of a condition that needs treatment, such
              as PCOS or a thyroid problem. A proper evaluation tells the two
              apart.
            </p>

            <p>
              If you live in Rampur, Dr. Priyanka Pachauri of Dr. Priyanka
              Gynaec in neighbouring Moradabad is an option to consider. The
              clinic is located in Moradabad, not in Rampur, and women from
              Rampur and nearby areas travel there for consultations. Its
              philosophy is <strong>&quot;Her Health First.&quot;</strong> You
              are listened to, informed and never judged.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Counts as Irregular?
              </h2>
              <p>
                Cycles vary between women, but you may have an irregular
                pattern if:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Cycles are shorter than 21 days or longer than 35 days</li>
                <li>The gap between periods changes a lot from month to month</li>
                <li>You miss periods for three months or more, and you are not pregnant</li>
                <li>Bleeding is very heavy, very light or lasts more than seven days</li>
                <li>You bleed between periods or after intercourse</li>
              </ul>
              <p>
                In the first couple of years after a girl&apos;s first period,
                and in the years before menopause, some variation is common.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Common Causes
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>PCOS:</strong> Irregular ovulation, often with acne,
                  excess hair and weight changes
                </li>
                <li>
                  <strong>Thyroid disorders:</strong> An underactive or
                  overactive thyroid can disturb cycles
                </li>
                <li>Raised prolactin or other hormonal imbalance</li>
                <li>Stress, sudden weight change or intense exercise</li>
                <li>Pregnancy, breastfeeding or miscarriage</li>
                <li>
                  Fibroids and polyps, especially with heavy or prolonged
                  bleeding
                </li>
                <li>Endometriosis or adenomyosis</li>
                <li>Perimenopause</li>
                <li>Certain medicines and contraceptives</li>
              </ul>
              <p>
                Finding the real cause is the key to the right treatment.
                Please avoid taking hormonal pills on your own to
                &quot;fix&quot; periods, since this can hide the problem.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Cycle Tracking: Your Most Useful Tool
              </h2>
              <p>
                A simple record can reveal patterns that one visit cannot. For
                two or three months, note:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The first day of each period</li>
                <li>The length of each cycle</li>
                <li>How many pads you use a day, and any clots</li>
                <li>Pain, mood changes or other symptoms</li>
                <li>Bleeding between periods</li>
                <li>Weight changes, acne or hair growth</li>
                <li>Any medicines you take</li>
              </ul>
              <p>
                You can use a notebook or a phone calendar. Bring the record
                to your appointment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When to See a Doctor
              </h2>
              <p>Book a consultation if:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  You have missed three periods in a row and a pregnancy test
                  is negative
                </li>
                <li>
                  Your cycles are consistently shorter than 21 days or longer
                  than 35 days
                </li>
                <li>You are trying to conceive and your periods are irregular</li>
                <li>
                  You have acne, excess hair or rapid weight gain along with
                  irregular cycles
                </li>
                <li>You have very heavy bleeding or severe pain</li>
                <li>
                  You bleed between periods, after intercourse or after
                  menopause
                </li>
                <li>
                  You are tired, pale or breathless, which can point to blood
                  loss
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How Irregular Periods Are Evaluated
              </h2>
              <p>
                Your visit begins with a conversation about your cycle,
                symptoms, health and family history. Depending on your
                situation, evaluation may include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>A pregnancy test, when relevant</li>
                <li>
                  A gentle examination, only if needed and explained first
                </li>
                <li>
                  Ultrasound of the uterus and ovaries, using a Voluson E22
                  3D/4D ultrasound machine for detailed imaging
                </li>
                <li>
                  Blood tests, such as haemoglobin, thyroid function, hormones
                  and blood sugar
                </li>
                <li>
                  Hysteroscopy, when a closer look inside the uterus is needed
                </li>
              </ul>
              <p>
                Each test is explained in advance, so there are no surprises.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Treatment Depends on the Cause
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>PCOS:</strong> Lifestyle changes, medicines, and
                  ovulation induction if you want to conceive
                </li>
                <li>
                  <strong>Thyroid disease:</strong> Thyroid treatment, with
                  periodic checks
                </li>
                <li>
                  <strong>Lifestyle-related causes:</strong> Guidance on
                  nutrition, weight, sleep and stress
                </li>
                <li>
                  <strong>Fibroids or polyps:</strong> Medicines, hysteroscopic
                  polypectomy or laparoscopic myomectomy when needed
                </li>
                <li>
                  <strong>Endometriosis:</strong> Medicines or 3D laparoscopic
                  surgery to relieve pain
                </li>
                <li>
                  <strong>Anaemia from heavy bleeding:</strong> Iron and other
                  treatment alongside the main treatment
                </li>
              </ul>
              <p>
                Surgery is recommended only when it is truly the best option,
                and alternatives are discussed first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Irregular Periods and Pregnancy Plans
              </h2>
              <p>
                If you are trying to conceive, irregular cycles often mean
                irregular ovulation. The clinic offers ovulation tracking,
                ovulation induction, IVF, time-lapse embryo monitoring, and
                AI-powered semen analysis with DNA integrity testing.
                Generally, seek help after 12 months of trying if you are
                under 35, and after 6 months if you are 35 or older. Seek help
                sooner if your periods are irregular.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Irregular Periods by Age
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Teenagers
                  </h3>
                  <p>
                    Irregular cycles are common at first. Severe pain, very
                    heavy bleeding or no periods by around age 15 deserve a
                    check. A parent may stay with her, or she may speak
                    privately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Twenties and Thirties
                  </h3>
                  <p>
                    PCOS, thyroid problems, stress and contraceptive effects
                    are frequent causes. Fertility planning often comes into
                    the picture.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Forties
                  </h3>
                  <p>
                    Perimenopause can make periods heavier, lighter or
                    unpredictable. Heavy bleeding and bleeding between
                    periods still need evaluation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    After Menopause
                  </h3>
                  <p>
                    Any bleeding should always be examined promptly.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Everyday Habits That Support Regular Cycles
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Eat balanced meals with vegetables, fruit, pulses, grains
                  and adequate protein
                </li>
                <li>Include iron-rich foods if your periods are heavy</li>
                <li>Stay active with walking, yoga or exercise you enjoy</li>
                <li>
                  Aim for a healthy weight through gradual change, not crash
                  diets
                </li>
                <li>Sleep well and manage stress</li>
                <li>Avoid smoking</li>
                <li>Avoid self-medication</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Follow-Up When You Live in Rampur
              </h2>

              <h3 className="text-lg font-semibold text-gray-900">
                Ask Your Doctor
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>How often will I need to come to the clinic?</li>
                <li>
                  Which blood tests can be repeated closer to home, if the
                  doctor agrees?
                </li>
                <li>
                  When should I repeat tests, and which results should I share?
                </li>
                <li>What changes should make me contact you sooner?</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Make Visits Easier
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Book in advance and confirm timings</li>
                <li>
                  Bring your cycle record, previous reports, ultrasounds and
                  a list of medicines
                </li>
                <li>
                  Ask whether tests and consultation can be planned on the
                  same day
                </li>
                <li>Travel with a family member where helpful</li>
              </ul>

              <p>
                For sudden severe pain, or very heavy bleeding with dizziness
                or fainting, go to the nearest emergency facility immediately.
                Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>A listening-first, judgement-free consultation</li>
                <li>Clear explanations in simple language</li>
                <li>Modern diagnostic imaging and 3D laparoscopy when needed</li>
                <li>
                  Honest advice, with surgery suggested only when necessary
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
              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
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

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <h3 className="mb-4 text-2xl font-bold">
                  Book Your Consultation for Irregular Periods
                </h3>
                <p className="mb-6">
                  Discuss your menstrual cycle, symptoms and treatment options
                  with Dr. Priyanka Pachauri.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0" />
                    <div>
                      <strong>Call for appointment:</strong>{" "}
                      <a
                        href="tel:+919079765578"
                        className="underline underline-offset-2"
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
                        className="underline underline-offset-2"
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
                        className="break-all underline underline-offset-2"
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
                        className="break-all underline underline-offset-2"
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
                  <h3 className="font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="mt-2 text-gray-700">{faq.a}</p>
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
