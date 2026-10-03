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

export default function DelayedPeriodSpecialistTreatment() {
  const faqs = [
    {
      q: "Who is a delayed period specialist in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a lady gynaecologist in Moradabad who provides care for menstrual and hormonal problems, including delayed periods.",
    },
    {
      q: "Is there a separate degree for period specialists?",
      a: "No. A gynaecologist experienced in menstrual and hormonal disorders treats delayed periods.",
    },
    {
      q: "When should I see a specialist?",
      a: "See a specialist if periods are repeatedly late, over a week late with negative pregnancy tests, or if you miss three periods.",
    },
    {
      q: "What conditions cause delayed periods?",
      a: "PCOS, thyroid problems, stress, weight changes, contraception effects, breastfeeding and perimenopause are common causes.",
    },
    {
      q: "What tests may be needed?",
      a: "Usually a pregnancy test and pelvic ultrasound. Thyroid, prolactin, blood sugar and other hormone tests are added only if needed.",
    },
    {
      q: "Can delayed periods be treated?",
      a: "Yes. Treatment depends on the cause and may include lifestyle support, medicines, thyroid care or fertility planning.",
    },
    {
      q: "Is my consultation private?",
      a: "Yes. Your details are treated with privacy and respect.",
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
                Delayed Period Specialist in Moradabad: Who Treats What and When
                to Go
              </h1>

              <p className="mb-4 text-gray-700">
                Most women do not need a specialist for a single late period.
                But when delays keep returning, or come with other symptoms, a
                specialist&apos;s focused attention can save months of
                guesswork.
              </p>

              <p className="text-gray-700">
                This guide explains what a delayed period specialist does, which
                conditions fall under her care, when a specialist is the right
                choice, and how to consult Dr. Priyanka Pachauri, a lady
                gynaecologist at Dr. Priyanka Gynaec in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Delayed Period Specialist?
              </h2>

              <p className="mb-4 text-gray-700">
                There is no separate medical degree called a{" "}
                <strong>&ldquo;delayed period specialist.&rdquo;</strong> In
                practice, this usually means:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A gynaecologist with experience in menstrual and hormonal
                  disorders
                </li>
                <li>
                  A doctor who regularly handles PCOS, irregular cycles,
                  amenorrhoea and perimenopause
                </li>
                <li>
                  Someone who can work with an endocrinologist when thyroid or
                  other hormone problems exist
                </li>
                <li>
                  A doctor who can connect period problems with fertility and
                  pregnancy care
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                When you search for a specialist, you are really looking for
                experience and a thorough approach.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is a Specialist the Right Choice?
              </h2>

              <p className="mb-4 text-gray-700">
                A family physician may be enough for a one-time delay. A
                gynaecologist is the better choice when:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods are late or missed repeatedly</li>
                <li>
                  Pregnancy tests are negative but periods stay absent
                </li>
                <li>You have missed three periods in a row</li>
                <li>
                  Cycles are consistently shorter than 21 days or longer than 35
                  days
                </li>
                <li>You have acne, excess hair growth or hair thinning</li>
                <li>You are trying to conceive with irregular cycles</li>
                <li>You have never had a period by age 15</li>
                <li>
                  You have hot flushes with irregular periods before age 45
                </li>
                <li>You have milk discharge without pregnancy</li>
                <li>Periods were regular and then stopped suddenly</li>
                <li>Previous treatment did not work</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Conditions a Delayed Period Specialist Handles
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Polycystic Ovary Syndrome (PCOS).</strong> Late or
                  absent ovulation, acne, extra hair growth and weight gain may
                  occur. It needs lifestyle changes and doctor-guided care.
                </li>
                <li>
                  <strong>Thyroid-related cycle problems.</strong> An
                  underactive or overactive thyroid can cause tiredness, hair
                  fall and weight changes. It is often co-managed with a
                  physician or endocrinologist.
                </li>
                <li>
                  <strong>High prolactin.</strong> This hormone can suppress
                  ovulation and may cause milk discharge without pregnancy.
                </li>
                <li>
                  <strong>Secondary amenorrhoea.</strong> Periods stop for three
                  months or more after being regular, so a careful search for
                  the cause is needed.
                </li>
                <li>
                  <strong>Primary amenorrhoea.</strong> No period by age 15
                  needs early evaluation.
                </li>
                <li>
                  <strong>Perimenopause.</strong> Irregular cycles before
                  menopause often begin in the 40s.
                </li>
                <li>
                  <strong>Premature ovarian insufficiency.</strong> Ovaries slow
                  down before age 40 and need medical evaluation and support.
                </li>
                <li>
                  <strong>Stress and lifestyle-related cycle changes.</strong>{" "}
                  Weight changes, intense exercise, night shifts and poor sleep
                  can affect cycles and often improve with guided changes.
                </li>
                <li>
                  <strong>Contraception-related irregularity.</strong> This may
                  occur after stopping hormonal methods, emergency pills or
                  implants.
                </li>
                <li>
                  <strong>Postpartum and breastfeeding-related delay.</strong>{" "}
                  The return of periods after delivery varies, and contraception
                  counselling may be needed.
                </li>
                <li>
                  <strong>Structural causes.</strong> Uterine scarring, polyps,
                  cysts or fibroids may be diagnosed by ultrasound and sometimes
                  hysteroscopy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes Specialist Care Different
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pattern recognition.</strong> Experience helps connect
                  small clues quickly.
                </li>
                <li>
                  <strong>Selective testing.</strong> Only tests that are truly
                  needed, saving time and cost.
                </li>
                <li>
                  <strong>Whole-picture view.</strong> Cycle, weight, skin,
                  stress, fertility goals and long-term health are considered.
                </li>
                <li>
                  <strong>Co-ordination.</strong> Referral to an endocrinologist
                  or dietitian when needed.
                </li>
                <li>
                  <strong>Continuity.</strong> Follow-up helps track whether
                  treatment is working.
                </li>
                <li>
                  <strong>Safety.</strong> Avoiding unnecessary hormone tablets.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Specialist Evaluates Delayed Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history.</strong> Last three periods, cycle
                  length, flow, pregnancies, medicines and contraception.
                </li>
                <li>
                  <strong>Lifestyle review.</strong> Stress, sleep, diet,
                  exercise and recent weight change.
                </li>
                <li>
                  <strong>Examination.</strong> A general check, and a gentle
                  pelvic exam only if needed and with your consent.
                </li>
                <li>
                  <strong>Pregnancy test.</strong> Urine or blood pregnancy
                  testing.
                </li>
                <li>
                  <strong>Pelvic ultrasound.</strong> To examine the uterus and
                  ovaries.
                </li>
                <li>
                  <strong>Blood tests.</strong> Thyroid, prolactin, blood sugar
                  and other hormones, only as needed.
                </li>
                <li>
                  <strong>Diagnosis and plan.</strong> The cause is explained
                  and the next steps are agreed with you.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The clinic uses 3D and 4D ultrasound, which supports detailed
                imaging of the uterus and ovaries.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches
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
                  <strong>Weight guidance.</strong> Gradual and balanced, never
                  a crash diet.
                </li>
                <li>
                  <strong>PCOS care.</strong> Lifestyle changes, medicines to
                  regulate cycles and ovulation support if you want to conceive.
                </li>
                <li>
                  <strong>Thyroid correction.</strong> Medicines after
                  evaluation, with regular blood tests.
                </li>
                <li>
                  <strong>Prolactin and hormone care.</strong> Further
                  evaluation and treatment as decided by the doctor.
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
                  <strong>Minor procedures.</strong> Such as hysteroscopy for a
                  suspected structural cause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delayed Periods in Different Life Stages
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Teenagers
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycles often take two to three years to settle</li>
                <li>Very long gaps or severe pain need a check</li>
                <li>PCOS and weight changes are common causes</li>
                <li>A calm and reassuring approach helps young patients</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Women in Their 20s and 30s
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS, thyroid issues, stress and pregnancy are the main causes
                </li>
                <li>Early evaluation helps if you plan a pregnancy</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                After Delivery
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Breastfeeding often delays periods</li>
                <li>
                  Review is needed if periods do not return as expected
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Women in Their 40s
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Perimenopause becomes more likely</li>
                <li>
                  Heavy or very irregular bleeding should still be evaluated
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delayed Periods and Fertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  If you want to conceive, a specialist&apos;s guidance matters
                  early
                </li>
                <li>
                  Irregular ovulation is a leading cause of difficulty
                  conceiving
                </li>
                <li>
                  PCOS is treatable, and many women conceive with proper care
                </li>
                <li>
                  Do not wait a full year if cycles are very irregular
                </li>
                <li>Both partners may need evaluation</li>
                <li>
                  The clinic offers fertility and IVF care with personalised
                  plans
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Self-Medication Is Risky
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormone tablets without a diagnosis can worsen imbalance
                </li>
                <li>A hidden pregnancy could be affected</li>
                <li>Repeated emergency pills disturb cycles</li>
                <li>The real cause stays untreated</li>
                <li>Some tablets cause heavy bleeding or side effects</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Warning Signs
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
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Meet Dr. Priyanka Pachauri
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
                <li>She listens first before advising tests or treatment</li>
                <li>Options are explained in simple language</li>
                <li>
                  Treatment is personalised to your age, health and goals
                </li>
                <li>Surgery is advised only when truly needed</li>
                <li>Privacy and comfort are respected</li>
                <li>Follow-up continues after the first visit</li>
              </ul>

              <p className="text-gray-700">
                The clinic also highlights expertise in laparoscopy, fertility
                treatment and endometriosis care, and provides guidance on PCOS
                and infertility.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services Relevant to Delayed Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Menstrual disorder treatment.</strong> Evaluation and
                  care for irregular and delayed cycles.
                </li>
                <li>
                  <strong>Fertility and IVF.</strong> Personalised plans for
                  women trying to conceive.
                </li>
                <li>
                  <strong>Pregnancy and antenatal care.</strong> If the cause is
                  pregnancy.
                </li>
                <li>
                  <strong>Diagnostic hysteroscopy and polypectomy.</strong>{" "}
                  Gentle examination and treatment inside the uterus.
                </li>
                <li>
                  <strong>Laparoscopic cystectomy and myomectomy.</strong>{" "}
                  Keyhole surgery for cysts and fibroids when needed.
                </li>
                <li>
                  <strong>Endometriosis surgery.</strong> For pelvic pain and
                  related conditions.
                </li>
                <li>
                  <strong>Paediatric care.</strong> Newborn and child
                  consultations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Highlighted by the Clinic
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery system</li>
                <li>3D and 4D ultrasound for detailed imaging</li>
                <li>Time-lapse imaging incubator for embryo monitoring</li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
              </ul>

              <p className="mt-4 text-gray-700">
                For delayed periods, a pelvic ultrasound is usually the most
                useful imaging test. The fertility tools matter only if you are
                trying to conceive.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose a Specialist in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Check qualifications and practical experience in menstrual
                  disorders
                </li>
                <li>Choose a doctor who listens and explains clearly</li>
                <li>Look for ultrasound and basic diagnostic facilities</li>
                <li>Prefer personalised plans over quick tablets</li>
                <li>Be wary of guaranteed cure promises</li>
                <li>Make sure privacy and comfort are respected</li>
                <li>Read patient experiences from more than one source</li>
                <li>Consider location and ease of booking</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of your last three periods</li>
                <li>Record how long and how heavy they were</li>
                <li>
                  Mention recent stress, illness, travel or weight change
                </li>
                <li>Note any pill, injection or emergency pill use</li>
                <li>Carry earlier scans, blood tests and prescriptions</li>
                <li>List medicines, supplements and allergies</li>
                <li>
                  Note acne, hair growth, hair fall or milk discharge
                </li>
                <li>Write your questions in advance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths About Delayed Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> A late period always means pregnancy.{" "}
                  <strong>Fact:</strong> Many other causes exist.
                </li>
                <li>
                  <strong>Myth:</strong> Irregular periods are normal for
                  everyone. <strong>Fact:</strong> Persistent irregularity
                  should be evaluated.
                </li>
                <li>
                  <strong>Myth:</strong> PCOS means you cannot become a mother.{" "}
                  <strong>Fact:</strong> It is treatable, and many women
                  conceive with proper care.
                </li>
                <li>
                  <strong>Myth:</strong> One tablet fixes every late period.{" "}
                  <strong>Fact:</strong> Treatment depends on the cause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
              </h2>

              <p className="mb-4 text-gray-700">
                If your periods are repeatedly delayed, irregular or absent,
                consult Dr. Priyanka Pachauri for a personalised evaluation and
                safe treatment plan.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Lady Gynaecologist &amp; Menstrual Health Specialist
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
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
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
