import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function DelayedPeriodAppointmentTreatment() {
  const faqs = [
    {
      q: "How do I book a doctor appointment for delayed periods in Moradabad?",
      a: "Call +91 90797 65578 or WhatsApp +91 89796 70705. You can also use the Book Appointment option on the website.",
    },
    {
      q: "Which doctor can I consult?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a trusted lady gynaecologist in Moradabad.",
    },
    {
      q: "What is the clinic's email and website?",
      a: "Email drpriyankagynaec@gmail.com or visit www.gynaecologistmoradabad.com.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "When should I book an appointment?",
      a: "Book if your period is over a week late with negative pregnancy tests, or if you miss three periods.",
    },
    {
      q: "What should I bring?",
      a: "Your last three period dates, earlier reports, prescriptions and a list of medicines.",
    },
    {
      q: "Will I need an internal examination?",
      a: "Not always. Any examination is gentle and done only with your consent.",
    },
    {
      q: "Is my consultation private?",
      a: "Yes, your details are treated with privacy and respect.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Doctor Appointment for Delayed Periods: How to Book
                and What to Expect
              </h1>

              <p className="mb-4 text-gray-700">
                You have decided to see a doctor about your delayed period. That
                is a good step. But many women hesitate at the next one: how to
                book, what to say, what will happen in the room and what to
                bring.
              </p>

              <p className="text-gray-700">
                This guide explains when to book, how to prepare, what happens
                during the consultation and how Dr. Priyanka Pachauri at Dr.
                Priyanka Gynaec in Moradabad can help.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Should You Book an Appointment Now?
              </h2>

              <p className="mb-4 text-gray-700">
                Book a consultation if:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your period is more than a week late and pregnancy tests are
                  negative
                </li>
                <li>You have missed three periods in a row</li>
                <li>
                  Your cycles are repeatedly shorter than 21 days or longer than
                  35 days
                </li>
                <li>You have never had a period by age 15</li>
                <li>You are trying to conceive and cycles are irregular</li>
                <li>You have acne, excess hair growth or hair thinning</li>
                <li>You have milk discharge without pregnancy</li>
                <li>
                  You have hot flushes with irregular periods before age 45
                </li>
                <li>You have pelvic pain, fever or foul discharge</li>
                <li>Previous treatment has not worked</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A positive pregnancy test is also a good reason to book, so that
                antenatal care can begin early.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When NOT to Wait for an Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Go to the nearest hospital emergency department if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe sudden abdominal pain with a missed period</li>
                <li>Fainting or dizziness</li>
                <li>Heavy bleeding soaking pads quickly</li>
                <li>Shoulder-tip pain with abdominal pain</li>
                <li>High fever with pelvic pain</li>
                <li>Repeated vomiting that prevents drinking fluids</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A missed period with one-sided pain can mean an ectopic
                pregnancy. This is an emergency, not a routine visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ways to Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Choose whichever feels easiest:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Phone call:</strong> Speak directly to the clinic for
                  appointment queries and quick questions.
                </li>
                <li>
                  <strong>WhatsApp:</strong> Send a short message with your
                  concern and preferred time.
                </li>
                <li>
                  <strong>Email:</strong> Useful for sharing reports or
                  non-urgent questions.
                </li>
                <li>
                  <strong>Website:</strong> Use the &ldquo;Book
                  Appointment&rdquo; option.
                </li>
                <li>
                  <strong>In person:</strong> Visit the clinic near Old Roadways,
                  Gandhi Nagar.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Say When You Call or Message
              </h2>

              <p className="mb-4 text-gray-700">
                A clear message helps the team guide you faster.
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your name and age</li>
                <li>
                  Your concern: delayed period or irregular periods
                </li>
                <li>How many days or weeks late you are</li>
                <li>
                  Whether you have taken a pregnancy test and the result
                </li>
                <li>
                  Any symptoms such as pain, bleeding, nausea or acne
                </li>
                <li>Whether you are trying to conceive</li>
                <li>Your preferred day and time</li>
                <li>Whether it feels urgent</li>
              </ul>

              <p className="text-gray-700">
                Sample WhatsApp message: &ldquo;Hello, I am [name], age [age].
                My period is [number] days late. The pregnancy test was
                [negative/not done]. I would like to book a consultation with
                Dr. Priyanka. Please share the available time.&rdquo;
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask While Booking
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What days and times is the doctor available?</li>
                <li>
                  Is an appointment required, or can I walk in?
                </li>
                <li>How long does the first consultation usually take?</li>
                <li>Can an ultrasound be done on the same visit?</li>
                <li>
                  Should I come with a full bladder or on a particular day of my
                  cycle?
                </li>
                <li>Are there any tests I should do before the visit?</li>
                <li>What is the consultation fee?</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Fees and timings are not listed on the website, so please
                confirm them directly with the clinic.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare Before Your Visit
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Gather Your Information
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>First day of your last three periods</li>
                <li>How long and how heavy each period was</li>
                <li>
                  Any recent stress, illness, travel or weight change
                </li>
                <li>
                  Any pill, injection, implant or emergency pill use
                </li>
                <li>Your pregnancy test result and date, if done</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Gather Your Documents
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Earlier ultrasound reports</li>
                <li>Blood tests, such as thyroid or hormone reports</li>
                <li>Previous prescriptions</li>
                <li>Records of past surgeries or pregnancies</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Gather Your Lists
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Current medicines and supplements</li>
                <li>Known allergies</li>
                <li>Your questions for the doctor</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Practical Tips
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Wear comfortable, easy-to-change clothing</li>
                <li>
                  Bring a family member or friend if it makes you comfortable
                </li>
                <li>Keep your phone charged for follow-up messages</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Registration.</strong> Share your details and the
                  reason for your visit.
                </li>
                <li>
                  <strong>Conversation.</strong> The doctor asks about your
                  cycles, symptoms, lifestyle and medical history.
                </li>
                <li>
                  <strong>Examination.</strong> A general check, and a gentle
                  abdominal or pelvic exam only when needed and with your
                  consent.
                </li>
                <li>
                  <strong>Pregnancy test.</strong> Urine or blood, if not
                  already done.
                </li>
                <li>
                  <strong>Ultrasound.</strong> A pelvic scan to see the uterus
                  and ovaries, if advised.
                </li>
                <li>
                  <strong>Blood tests.</strong> Selected only if your history
                  suggests a need.
                </li>
                <li>
                  <strong>Explanation.</strong> The likely cause in simple
                  words.
                </li>
                <li>
                  <strong>Plan.</strong> Treatment, lifestyle advice and
                  follow-up schedule.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                You can ask questions at every step and take time to decide.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Worries About the First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <strong>Will I need an internal examination?</strong> Not
                  always. Many cycle problems are assessed through history,
                  ultrasound and blood tests. Any examination is done gently and
                  with your consent.
                </li>
                <li>
                  <strong>Is it embarrassing?</strong> Doctors discuss periods
                  every day, and a lady gynaecologist can make the conversation
                  easier.
                </li>
                <li>
                  <strong>Will I be judged?</strong> A good doctor listens
                  without judgement, including questions about intimacy or
                  contraception.
                </li>
                <li>
                  <strong>What if I am not sure I want to continue?</strong> You
                  can ask for time, a second opinion or a written plan.
                </li>
                <li>
                  <strong>Is my information private?</strong> Your details are
                  treated with privacy and respect.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests You May Be Advised
              </h2>

              <p className="mb-4 text-gray-700">
                These are chosen based on your symptoms. You may not need all of
                them.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Urine or blood pregnancy test.</strong> Confirms or
                  rules out pregnancy.
                </li>
                <li>
                  <strong>Pelvic ultrasound.</strong> Checks the uterus, ovaries
                  and any cysts.
                </li>
                <li>
                  <strong>Thyroid tests.</strong> Screen for thyroid imbalance.
                </li>
                <li>
                  <strong>Prolactin test.</strong> Checks a hormone that can
                  suppress ovulation.
                </li>
                <li>
                  <strong>Blood sugar and insulin tests.</strong> Relevant in
                  PCOS.
                </li>
                <li>
                  <strong>Hormone tests such as FSH, LH and AMH.</strong>{" "}
                  Assess ovarian function.
                </li>
                <li>
                  <strong>Hysteroscopy.</strong> Only if the uterine cavity needs
                  a closer look.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The clinic uses 3D and 4D ultrasound for detailed imaging.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes the Doctor Will Consider
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pregnancy.</strong> Always the first thing to confirm
                  or exclude.
                </li>
                <li>
                  <strong>Stress and lifestyle.</strong> Sleep changes, travel,
                  exams or work pressure.
                </li>
                <li>
                  <strong>Weight changes.</strong> Rapid loss, gain or crash
                  dieting.
                </li>
                <li>
                  <strong>PCOS.</strong> A very common and treatable cause.
                </li>
                <li>
                  <strong>Thyroid disorders.</strong> Underactive or overactive
                  thyroid.
                </li>
                <li>
                  <strong>High prolactin.</strong> A hormone that can suppress
                  ovulation.
                </li>
                <li>
                  <strong>Perimenopause.</strong> Irregular cycles before
                  menopause.
                </li>
                <li>
                  <strong>Contraception effects.</strong> Emergency pills or
                  hormonal methods.
                </li>
                <li>
                  <strong>Breastfeeding.</strong> Often delays periods after
                  delivery.
                </li>
                <li>
                  <strong>Structural causes.</strong> Polyps, cysts or scarring
                  in some cases.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment After the Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                All medicines and doses are decided by the doctor after
                examination.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Observation and reassurance.</strong> For a one-time
                  delay.
                </li>
                <li>
                  <strong>Lifestyle support.</strong> Sleep, nutrition, exercise
                  and stress management.
                </li>
                <li>
                  <strong>Weight guidance.</strong> Gradual and balanced
                  correction.
                </li>
                <li>
                  <strong>PCOS care.</strong> Lifestyle changes, medicines to
                  regulate cycles and ovulation support.
                </li>
                <li>
                  <strong>Thyroid correction.</strong> Usually with a physician
                  or endocrinologist.
                </li>
                <li>
                  <strong>Hormonal care.</strong> For high prolactin or other
                  imbalances.
                </li>
                <li>
                  <strong>Perimenopause support.</strong> Symptom relief and
                  monitoring.
                </li>
                <li>
                  <strong>Fertility planning.</strong> Ovulation tracking and
                  personalised plans.
                </li>
                <li>
                  <strong>Minor procedures.</strong> Such as hysteroscopy when a
                  structural cause is suspected.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                No honest doctor promises a guaranteed result or a fixed date
                for your period.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-Up Appointments
              </h2>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A review after a few weeks or months, depending on your plan
                </li>
                <li>Tracking of your period dates and symptoms</li>
                <li>Repeat tests if needed, such as thyroid levels</li>
                <li>Adjustments to the plan if there is little change</li>
                <li>Advice on when to come back sooner</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Contact the clinic sooner if:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding is very heavy after a long delay</li>
                <li>You develop new pain, fever or unusual discharge</li>
                <li>You experience side effects from medicines</li>
                <li>You become pregnant while on treatment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If You Want to Conceive
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Mention this clearly when you book</li>
                <li>Bring a record of your cycle dates</li>
                <li>Both partners may need evaluation</li>
                <li>
                  Do not wait a full year if cycles are very irregular
                </li>
                <li>
                  The clinic offers fertility and IVF care with personalised
                  plans
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, safe-motherhood focused care. Her practice covers
                antenatal and postnatal care, high-risk pregnancies,
                laparoscopic gynaecological surgery and menstrual disorder
                treatment.
              </p>

              <p className="mb-4 text-gray-700">
                The clinic follows a{" "}
                <strong>&ldquo;Her Health First&rdquo;</strong> approach:
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  She listens first before advising tests or treatment
                </li>
                <li>Options are explained in simple language</li>
                <li>
                  Treatment is personalised to your age, health and goals
                </li>
                <li>Surgery is advised only when truly needed</li>
                <li>Privacy and comfort are respected</li>
                <li>Follow-up continues after the first visit</li>
              </ul>

              <p className="text-gray-700">
                The clinic also highlights continuity of care, with a team that
                knows your history and remembers your concerns from visit to
                visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Not Self-Medicate While You Wait?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormone tablets without a diagnosis can worsen imbalance
                </li>
                <li>A hidden pregnancy could be affected</li>
                <li>Repeated emergency pills disturb cycles</li>
                <li>The real cause stays untreated</li>
                <li>Home remedies can be unsafe if you are pregnant</li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you must wait a few days for your appointment, track your
                symptoms, rest well, eat balanced meals and take a pregnancy
                test.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Appointment Today
              </h2>

              <p className="mb-4 text-gray-700">
                Do not let uncertainty delay your care. Book a consultation with
                Dr. Priyanka Pachauri for delayed periods, irregular cycles,
                PCOS, thyroid-related concerns or fertility planning.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Lady Gynaecologist &amp; Women&apos;s Health Specialist
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+919079765578"
                        className="hover:underline"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
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

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
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

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
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

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </Link>

                  <Link
                    href="/services"
                    className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
