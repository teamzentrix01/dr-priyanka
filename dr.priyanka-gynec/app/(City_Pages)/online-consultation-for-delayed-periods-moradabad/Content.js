import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function OnlineConsultationDelayedPeriodsMoradabad() {
  const faqs = [
    {
      q: "Can I consult a gynaecologist online for a delayed period?",
      a: "You can start by calling or messaging the clinic for guidance and to book the right appointment.",
    },
    {
      q: "How do I contact Dr. Priyanka?",
      a: "Call +91 90797 65578, WhatsApp +91 89796 70705, or email drpriyankagynec@gmail.com.",
    },
    {
      q: "Can a delayed period be diagnosed online?",
      a: "Not fully. Tests and an examination are usually needed for a reliable diagnosis.",
    },
    {
      q: "What should I share during the consultation?",
      a: "Share your cycle dates, pregnancy test result, symptoms, medicines and old reports.",
    },
    {
      q: "When should I do a pregnancy test?",
      a: "Test when your period is about a week late, and repeat after 3 to 5 days if negative.",
    },
    {
      q: "Is a delayed period always serious?",
      a: "No. Stress, weight changes and hormones are common causes, but repeated delays need checking.",
    },
    {
      q: "When is a delayed period an emergency?",
      a: "Severe one-sided pain, fainting or heavy bleeding needs immediate hospital care.",
    },
    {
      q: "Can I take tablets to bring on my period?",
      a: "Do not self-medicate. Take advice from a doctor first.",
    },
    {
      q: "Will I need an in-person visit?",
      a: "Often yes, for a scan, tests or examination, depending on your symptoms.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Online Consultation for Delayed Periods in Moradabad: What to Expect and How to Start
              </h1>

              <p className="mb-4 text-gray-700">
                A late period often arrives at an awkward moment. You may be
                busy, travelling, unsure whether to worry, or simply
                uncomfortable walking into a clinic with a question that feels
                small. Many women now prefer to reach out to a gynaecologist
                first by call or message, get initial guidance, and then decide
                whether an in-person visit is needed.
              </p>
            </div>

            {/* Section 2 — Why Women Look for Online Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Look for Online Consultation for Delayed Periods
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Privacy: You can discuss periods, pregnancy possibilities and intimacy from the comfort of home</li>
                <li>Speed: Early guidance means you do not spend days worrying and searching the internet</li>
                <li>Convenience: No travel or waiting-room time for a first round of questions</li>
                <li>Busy schedules: Working women and students can reach out between tasks</li>
                <li>Women outside the city: Those living in nearby towns can get initial direction before travelling</li>
                <li>Hesitation about a first visit: A message or call feels easier than walking in</li>
                <li>Better preparation: You arrive at the clinic knowing which reports and details to bring</li>
              </ul>
            </div>

            {/* Section 3 — Delayed Period */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as a Delayed Period?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A typical cycle lasts about 21 to 35 days</li>
                <li>A period is usually called late when it comes more than about 7 days after the expected date</li>
                <li>Three or more missed periods in a row need medical evaluation</li>
                <li>Teenagers in their first years of menstruation and women nearing menopause often have irregular cycles</li>
              </ul>
            </div>

            {/* Section 4 — Common Reasons */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Reasons Behind a Late Period
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the likely causes helps you describe your situation
                clearly:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy: The most common cause in women of reproductive age</li>
                <li>Stress: Emotional or physical strain that shifts ovulation</li>
                <li>PCOS: A hormonal condition causing irregular or delayed cycles</li>
                <li>Thyroid problems: Underactive or overactive thyroid disturbing hormones</li>
                <li>Weight changes: Sudden loss or gain, or crash dieting</li>
                <li>Heavy exercise: Intense training with low nutrition</li>
                <li>Contraceptive changes: Starting, stopping or switching pills, or using emergency pills</li>
                <li>Breastfeeding: Often delays the return of periods after delivery</li>
                <li>Perimenopause: Irregular cycles in the 40s</li>
                <li>High prolactin: A hormone imbalance that can suppress ovulation</li>
                <li>Uterine or ovarian conditions: Polyps, fibroids or cysts</li>
              </ul>
            </div>

            {/* Section 5 — What Online Consultation Can Help With */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What an Online or Remote Consultation Can Help With
              </h2>

              <p className="mb-4 text-gray-700">
                A first consultation by phone or message is useful for:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Understanding your pattern: Whether this is a one-time delay or a repeating issue</li>
                <li>Initial guidance: What to check at home and what to avoid</li>
                <li>Pregnancy test advice: When to test and when to repeat</li>
                <li>Deciding the next step: Whether you need tests, a scan or an in-person visit</li>
                <li>Reviewing existing reports: Blood tests or scans you already have</li>
                <li>Medicine questions: How current medicines or contraceptives may affect your cycle</li>
                <li>Fertility planning: Early advice if you are trying to conceive</li>
                <li>Reassurance: Clarity when the delay is minor and likely to settle on its own</li>
              </ul>
            </div>

            {/* Section 6 — Online Limits */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Cannot Be Done Online
              </h2>

              <p className="mb-4 text-gray-700">
                Honest limits matter in healthcare:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A physical or pelvic examination is not possible remotely</li>
                <li>Ultrasound must be done in person to look at the uterus and ovaries</li>
                <li>Blood tests need sample collection at a lab</li>
                <li>Procedures such as hysteroscopy or laparoscopy need a clinic or operating room</li>
                <li>Emergencies cannot be handled by message or phone</li>
                <li>A reliable diagnosis or prescription often depends on tests and an examination first</li>
              </ul>

              <p className="text-gray-700">
                Because of this, an online conversation works best as the first
                step and not as a replacement for a complete check-up when one
                is needed.
              </p>
            </div>

            {/* Section 7 — Information Ready */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Information to Keep Ready Before You Contact the Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                Preparation makes your consultation faster and more useful:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your age and whether you are married or sexually active</li>
                <li>Date of your last period and the usual length of your cycle</li>
                <li>How many days late you are now</li>
                <li>Pregnancy test result, with the date taken</li>
                <li>Symptoms: Pain, nausea, breast tenderness, spotting, discharge, acne, hair growth, hair fall or fatigue</li>
                <li>Recent changes: Weight, diet, exercise, travel, stress, illness or new medicines</li>
                <li>Contraception details: Pills, emergency pills, injections or devices</li>
                <li>Previous diagnoses: PCOS, thyroid problems, diabetes or cysts</li>
                <li>Old reports: Ultrasound, thyroid, hormone and blood test results</li>
                <li>Your questions, written down</li>
              </ul>
            </div>

            {/* Section 8 — Steps */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Reach Dr. Priyanka Gynaec
              </h2>

              <ol className="mb-4 list-decimal space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Take a pregnancy test</strong>
                  <br />
                  Take a home pregnancy test if your period is a week or more late.
                </li>

                <li>
                  <strong>Note your cycle details</strong>
                  <br />
                  Note your cycle dates and symptoms.
                </li>

                <li>
                  <strong>Contact the clinic</strong>
                  <br />
                  Contact the clinic by phone or WhatsApp and briefly describe your concern.
                </li>

                <li>
                  <strong>Ask about consultation details</strong>
                  <br />
                  Ask what format of consultation is available and what charges or timings apply.
                </li>

                <li>
                  <strong>Share reports if needed</strong>
                  <br />
                  Share reports if the team asks for them.
                </li>

                <li>
                  <strong>Book an in-person visit</strong>
                  <br />
                  Book an in-person visit if tests, a scan or an examination are advised.
                </li>

                <li>
                  <strong>Follow the care plan</strong>
                  <br />
                  Follow the care plan and return for follow-up as advised.
                </li>
              </ol>
            </div>

            {/* Section 9 — Emergency */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When You Should Not Wait for a Message Reply
              </h2>

              <p className="mb-4 text-gray-700">
                Go to the nearest hospital emergency department immediately if
                you have:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe one-sided lower abdominal pain with a missed period</li>
                <li>Fainting, dizziness or a very fast heartbeat</li>
                <li>Very heavy bleeding soaking through pads quickly</li>
                <li>High fever with pelvic pain and foul-smelling discharge</li>
                <li>A positive pregnancy test with severe pain or bleeding</li>
              </ul>

              <p className="text-gray-700">
                These can point to emergencies such as ectopic pregnancy,
                ruptured cyst or serious infection.
              </p>
            </div>

            {/* Section 10 — In-Person Visit */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When an In-Person Visit Is the Better Choice
              </h2>

              <p className="mb-4 text-gray-700">
                Plan a clinic visit if:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your period is delayed again and again</li>
                <li>You have missed three periods in a row</li>
                <li>Your cycles are consistently longer than 35 days</li>
                <li>You are trying to conceive and periods are irregular</li>
                <li>You have acne, excess hair or weight gain with delayed cycles</li>
                <li>You have pelvic pain, heavy bleeding or unusual discharge</li>
                <li>A pregnancy test is positive and you want to begin antenatal care</li>
                <li>You are under 15 and have not yet started periods</li>
              </ul>
            </div>

            {/* Section 11 — Tests */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests You May Be Advised After the First Conversation
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy test: Urine or blood</li>
                <li>Ultrasound scan: To examine the uterus and ovaries and look for PCOS features</li>
                <li>Thyroid profile: To check thyroid function</li>
                <li>Prolactin level: To rule out hormonal suppression of ovulation</li>
                <li>Blood sugar and other hormones: Based on your symptoms</li>
                <li>Hysteroscopy: Only when the uterine cavity needs direct inspection</li>
                <li>Laparoscopy: Only if pelvic conditions need further evaluation</li>
              </ul>
            </div>

            {/* Section 12 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Directions After Diagnosis
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain a stable, healthy weight</li>
                <li>Eat balanced meals with fibre, protein and iron</li>
                <li>Exercise moderately and regularly</li>
                <li>Reduce stress with sleep, walks and relaxation</li>
                <li>Avoid crash diets and extreme workouts</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hormonal treatment to regularise cycles when appropriate</li>
                <li>Thyroid treatment where needed</li>
                <li>Treatment for raised prolactin</li>
                <li>Ovulation induction for women with PCOS who want to conceive</li>
                <li>Review of medicines that may be disturbing your cycle</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Procedure-Based Care When Necessary
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diagnostic hysteroscopy to examine the uterine cavity</li>
                <li>Hysteroscopic polypectomy to remove polyps without cuts</li>
                <li>3D laparoscopic procedures for cysts or other pelvic conditions</li>
              </ul>
            </div>

            {/* Section 13 — Safety Tips */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safety Tips Before You Consult
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Do not self-medicate with tablets to bring on periods</li>
                <li>Avoid repeated emergency pills, which can upset your cycle</li>
                <li>Do not rely on social media advice or home remedies for diagnosis</li>
                <li>Do not stop prescribed medicines without medical advice</li>
                <li>Share accurate details, including contraception and sexual history, so guidance is safe</li>
                <li>Keep reports organised for your first in-person visit</li>
              </ul>
            </div>

            {/* Section 14 — About Clinic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri and Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility centre in
                Moradabad guided by the philosophy &quot;Her Health First.&quot;
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Services
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gynaecology and 3D laparoscopy</li>
                <li>Fertility and IVF</li>
                <li>Pregnancy and birthing care</li>
                <li>Antenatal services and normal delivery</li>
                <li>Diagnostic hysteroscopy and polypectomy</li>
                <li>Endometriosis surgery</li>
                <li>Paediatric care</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Technology
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery</li>
                <li>3D and 4D ultrasound</li>
                <li>Time-lapse imaging incubator</li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Women Feel Comfortable Here
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A woman specialist who listens first</li>
                <li>Clear explanations of tests and treatment options</li>
                <li>Continuity of care through follow-up visits</li>
                <li>Support at every life stage, from puberty to motherhood</li>
              </ul>
            </div>

            {/* Section 15 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact and Appointment Details
              </h2>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Clinic</p>
                    <p className="text-black">Dr. Priyanka Gynaec, Moradabad</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <div className="flex flex-wrap items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8979670705" className="hover:underline">
                        +91 89796 70705 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 16 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
