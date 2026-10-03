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

export default function TreatmentForDelayedPeriodsMoradabad() {
  const faqs = [
    {
      q: "Where can I get treatment for delayed periods in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a trusted lady gynaecologist in Moradabad.",
    },
    {
      q: "How are delayed periods treated?",
      a: "Treatment depends on the cause, such as PCOS, thyroid imbalance, stress or weight changes.",
    },
    {
      q: "Is it safe to take tablets to bring on a period?",
      a: "Not without medical advice. Self-medication can be risky.",
    },
    {
      q: "How long does treatment take?",
      a: "It varies. Stress-related delays may settle in months, while PCOS needs steady follow-up.",
    },
    {
      q: "Can PCOS be treated?",
      a: "Yes. Lifestyle changes and doctor-prescribed care help regulate cycles and support fertility.",
    },
    {
      q: "Do I need tests?",
      a: "Usually a pregnancy test and ultrasound. Blood tests are added only if needed.",
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
                Treatment for Delayed Periods in Moradabad: Options, Process and
                Recovery
              </h1>

              <p className="mb-4 text-gray-700">
                A delayed period is a symptom, not a disease. That is why the best
                treatment is never the same for every woman. For one person,
                better sleep and less stress may bring cycles back. For another,
                treating PCOS or a thyroid imbalance is the key. Taking a tablet
                to &quot;bring on&quot; the period without knowing the cause
                rarely solves the problem.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains how treatment is planned, the main options for
                each cause, what to expect during follow-up, and how to consult
                Dr. Priyanka Pachauri at Dr. Priyanka Gynaec in Moradabad.
              </p>

              
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Treatment Starts With Diagnosis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The same symptom can have very different causes.</li>
                <li>Wrong treatment can delay the real diagnosis.</li>
                <li>A hidden pregnancy changes every decision.</li>
                <li>Hormone tablets taken blindly can worsen imbalance.</li>
                <li>
                  Finding the cause often makes treatment simpler and shorter.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 1: Confirm or Rule Out Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A urine pregnancy test using first morning urine is the first
                  step.
                </li>
                <li>
                  A negative test too early can be misleading, so repeat after a
                  few days.
                </li>
                <li>A blood test is more sensitive.</li>
                <li>
                  An ultrasound confirms location and health of a pregnancy.
                </li>
                <li>
                  Severe one-sided pain with a missed period is an emergency.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 2: Find the Cause
              </h2>

              <p className="mb-4 text-gray-700">
                Your gynaecologist usually combines these:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A detailed history of cycles, stress, weight, medicines and
                  contraception.
                </li>
                <li>
                  A general check, and a gentle pelvic examination only when
                  needed and with consent.
                </li>
                <li>A pelvic ultrasound to see the uterus and ovaries.</li>
                <li>
                  Selected blood tests, such as thyroid, prolactin, blood sugar
                  and hormone levels.
                </li>
                <li>
                  Further tests only if the first results are unclear.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The clinic uses 3D and 4D ultrasound for detailed imaging, which
                supports accurate evaluation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options by Cause
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. When Pregnancy Is the Cause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirmation by blood test and ultrasound.</li>
                <li>Antenatal care, screenings and nutrition guidance.</li>
                <li>Early review if there is pain or bleeding.</li>
                <li>
                  The clinic offers pregnancy, antenatal and normal delivery care.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. When Stress or Lifestyle Is the Cause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular sleep and meal timings.</li>
                <li>
                  Stress management such as walking, yoga, breathing exercises or
                  counselling.
                </li>
                <li>Reducing excessive screen time at night.</li>
                <li>
                  Gentle, regular exercise instead of extreme routines.
                </li>
                <li>
                  Reassurance and cycle tracking, since many cycles return on
                  their own.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. When Weight Is the Cause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Balanced, nutritious meals instead of crash diets.</li>
                <li>Gradual weight gain or loss as advised.</li>
                <li>Protein, iron and healthy fat in the diet.</li>
                <li>Moderation in intense exercise.</li>
                <li>Support from a dietitian if needed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. When PCOS Is the Cause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lifestyle changes as the foundation: diet, exercise and weight
                  management.
                </li>
                <li>
                  Medicines prescribed by the doctor to regulate cycles.
                </li>
                <li>
                  Ovulation support if you are trying to conceive.
                </li>
                <li>
                  Management of acne or excess hair growth where needed.
                </li>
                <li>Regular follow-up to monitor progress.</li>
                <li>Early fertility planning if pregnancy is the goal.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. When Thyroid Imbalance Is the Cause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirmation through blood tests.</li>
                <li>
                  Thyroid medicines prescribed after evaluation, often with a
                  physician or endocrinologist.
                </li>
                <li>Regular blood test monitoring.</li>
                <li>
                  Cycles often settle once thyroid levels are balanced.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. When High Prolactin Is the Cause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests to confirm.</li>
                <li>Further evaluation to find the reason.</li>
                <li>
                  Medicines or other care as decided by the doctor.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. When Perimenopause Is the Cause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycle monitoring.</li>
                <li>Support for hot flushes, sleep changes and mood.</li>
                <li>Evaluation of heavy or prolonged bleeding.</li>
                <li>Bone and heart health guidance.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. When Breastfeeding or Recent Delivery Is the Cause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reassurance that delay is common.</li>
                <li>
                  Contraception counselling, since pregnancy is still possible.
                </li>
                <li>
                  Review if periods do not return in the expected time.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. When Contraception Is the Cause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Counselling on the method you use.</li>
                <li>
                  Time for cycles to settle after stopping hormonal methods.
                </li>
                <li>
                  Alternative methods if irregularity is troublesome.
                </li>
                <li>
                  Review if no period returns after about three months.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. When a Structural Problem Is the Cause
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ultrasound and, if needed, hysteroscopy.</li>
                <li>
                  Treatment of polyps, cysts or fibroids when they affect cycles.
                </li>
                <li>Keyhole surgery only when truly necessary.</li>
                <li>
                  Services include diagnostic hysteroscopy, polypectomy,
                  laparoscopic cystectomy and myomectomy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Self-Medication Is a Poor Treatment Plan
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>It treats the date, not the cause.</li>
                <li>It may harm an undiagnosed pregnancy.</li>
                <li>It can cause heavy bleeding or other side effects.</li>
                <li>It hides conditions like PCOS or thyroid imbalance.</li>
                <li>It may delay fertility planning.</li>
                <li>
                  Advice from friends, shops or social media may not suit your
                  body.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Realistic Expectations: How Long Does Treatment Take?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Stress or lifestyle causes:</strong> cycles may settle
                  within a few months.
                </li>
                <li>
                  <strong>PCOS:</strong> improvement is usually gradual, with
                  steady follow-up.
                </li>
                <li>
                  <strong>Thyroid causes:</strong> cycles often improve once
                  levels are balanced.
                </li>
                <li>
                  <strong>After stopping contraception:</strong> it may take a few
                  months.
                </li>
                <li>
                  <strong>Perimenopause:</strong> irregularity may continue and
                  is monitored over time.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Every woman is different. Your doctor will explain a timeline for
                your case, and no honest doctor promises a guaranteed result.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment When You Want to Conceive
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovulation tracking to understand your cycle.</li>
                <li>Treatment of PCOS or thyroid problems first.</li>
                <li>Ovulation support as advised by the doctor.</li>
                <li>Evaluation of the male partner when needed.</li>
                <li>
                  Escalation to advanced fertility care only if required.
                </li>
                <li>
                  The clinic offers fertility and IVF care with personalised
                  plans.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you are trying to conceive and cycles are irregular, do not
                wait a full year to seek advice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Healthy Habits That Support Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                These support medical care and do not replace it:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Keep a healthy body weight.</li>
                <li>Eat balanced meals with fibre, protein and iron.</li>
                <li>Limit sugary and highly processed food.</li>
                <li>Exercise regularly but avoid extremes.</li>
                <li>Sleep seven to eight hours at regular times.</li>
                <li>Reduce smoking and alcohol.</li>
                <li>Track every period in a diary or app.</li>
                <li>Take medicines exactly as advised.</li>
                <li>Attend all follow-up visits.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-Up: What to Expect After Starting Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A review after a few weeks or months, depending on the plan.
                </li>
                <li>Tracking of your period dates and symptoms.</li>
                <li>Repeat tests if needed, such as thyroid levels.</li>
                <li>
                  Adjustments to the plan if there is little change.
                </li>
                <li>Advice on when to come back sooner.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Return or Seek Urgent Care
              </h2>

              <p className="mb-4 text-gray-700">
                Contact the clinic if:
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding is very heavy after a long delay.</li>
                <li>Periods remain absent despite treatment.</li>
                <li>You develop new pain, fever or unusual discharge.</li>
                <li>You experience side effects from medicines.</li>
                <li>You become pregnant while on treatment.</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Go to the nearest hospital emergency department if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe sudden abdominal pain with a missed period.</li>
                <li>Fainting or dizziness.</li>
                <li>Heavy bleeding soaking pads quickly.</li>
                <li>High fever with pelvic pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, safe-motherhood focused care. Her practice covers
                antenatal and postnatal care, high-risk pregnancies, laparoscopic
                gynaecological surgery and menstrual disorder treatment.
              </p>

              <p className="mb-4 text-gray-700">
                The clinic follows a &quot;Her Health First&quot; approach:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>She listens first before advising tests or treatment.</li>
                <li>Options are explained in simple language.</li>
                <li>
                  Treatment is personalised to your age, health and goals.
                </li>
                <li>Surgery is advised only when truly needed.</li>
                <li>Privacy and comfort are respected.</li>
                <li>Follow-up continues after the first visit.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of your last three periods.</li>
                <li>Record how long and how heavy they were.</li>
                <li>
                  Mention recent stress, illness, travel or weight change.
                </li>
                <li>Note any pill, injection or emergency pill use.</li>
                <li>Carry earlier scans, blood tests and prescriptions.</li>
                <li>List medicines, supplements and allergies.</li>
                <li>
                  Note acne, hair growth, hair fall or milk discharge.
                </li>
                <li>Write your questions in advance.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What is the likely cause of my delayed periods?</li>
                <li>Which tests do I really need?</li>
                <li>What treatment do you recommend, and why?</li>
                <li>How long before I may see improvement?</li>
                <li>Will this affect my fertility?</li>
                <li>What side effects should I watch for?</li>
                <li>When should I come back for follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths About Treating Delayed Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> One tablet fixes every delayed period.{" "}
                  <strong>Fact:</strong> The right treatment depends on the cause.
                </li>
                <li>
                  <strong>Myth:</strong> Home remedies always work.{" "}
                  <strong>Fact:</strong> Some may help lifestyle, but they cannot
                  treat PCOS or thyroid problems.
                </li>
                <li>
                  <strong>Myth:</strong> Treatment means lifelong medicines.{" "}
                  <strong>Fact:</strong> Many women need only short-term or
                  lifestyle-based care.
                </li>
                <li>
                  <strong>Myth:</strong> PCOS means you cannot conceive.{" "}
                  <strong>Fact:</strong> PCOS is treatable, and many women conceive
                  with proper care.
                </li>
                <li>
                  <strong>Myth:</strong> Irregular periods are normal and need no
                  treatment. <strong>Fact:</strong> Persistent irregularity should
                  be evaluated.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing Where to Get Treatment in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Check qualifications and practical experience.</li>
                <li>Choose a doctor who listens and explains patiently.</li>
                <li>Prefer personalised plans over quick fixes.</li>
                <li>Look for ultrasound and diagnostic facilities.</li>
                <li>Make sure privacy and comfort are respected.</li>
                <li>Read patient experiences.</li>
                <li>Consider location and ease of booking.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                One patient shared on the clinic&apos;s website that they felt
                comfortable and understood from the first visit, with every step
                explained clearly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
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
                Frequently Asked Questions (FAQ)
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
