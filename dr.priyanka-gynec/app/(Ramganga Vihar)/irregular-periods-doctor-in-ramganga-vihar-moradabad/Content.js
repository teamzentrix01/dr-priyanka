
import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function IrregularPeriodsDoctorRamgangaVihar() {
  const faqs = [
    {
      q: "Are irregular periods always serious?",
      a: "No, but persistent changes should be checked by a doctor.",
    },
    {
      q: "Which doctor should I see first?",
      a: "A gynaecologist is usually a good starting point.",
    },
    {
      q: "Should I track my periods?",
      a: "Yes. Cycle notes help the doctor understand your pattern.",
    },
    {
      q: "Will I need tests?",
      a: "Often, but it depends on your case. Ask what each test is for.",
    },
    {
      q: "Can lifestyle changes help?",
      a: "They are often part of care. Ask your doctor for personal advice.",
    },
    {
      q: "Can I ask for a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially if you feel unsure about the advice.",
    },
    {
      q: "Where can I learn more about clinic planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
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
                Irregular Periods Doctor in Ramganga Vihar, Moradabad: How to
                Find and Choose the Right Doctor
              </h1>

              <p className="mb-4 text-gray-700">
                Periods that come early, late, heavily or not at all can be
                worrying. Many women wait months before seeking help, unsure
                whether it is serious. A good doctor listens, finds the likely
                cause and explains the options clearly. This guide covers when
                to see a doctor, how to prepare and how to judge a doctor and
                clinic. It is general information, not medical advice. It names
                no individual doctors, because I cannot verify or rank them, and
                only a qualified doctor can diagnose you or advise treatment.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                sections on clinic environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as Irregular Periods?
              </h2>

              <p className="mb-4 text-gray-700">
                Cycles vary, but some patterns deserve attention. Your doctor
                decides what is normal for you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycles that change a lot from month to month
                </li>
                <li>Periods that are often late or missed</li>
                <li>
                  Bleeding that is unusually heavy or prolonged
                </li>
                <li>Bleeding between periods</li>
                <li>Very painful periods</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Possible Causes
              </h2>

              <p className="mb-4 text-gray-700">
                Many factors can affect cycles. Only a doctor can identify
                yours. Never self-diagnose from symptoms alone.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Hormonal changes</li>
                <li>Stress, sleep or lifestyle changes</li>
                <li>Weight changes</li>
                <li>Thyroid or other health conditions</li>
                <li>Pregnancy</li>
                <li>Some medicines</li>
                <li>Conditions affecting the uterus or ovaries</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Consider a visit if any of the following applies. Seek urgent
                care for sudden severe pain or very heavy bleeding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your periods are consistently irregular</li>
                <li>
                  Periods stop for several months without pregnancy
                </li>
                <li>
                  Bleeding is very heavy or lasts unusually long
                </li>
                <li>
                  You have bleeding after intimacy or between periods
                </li>
                <li>Pain affects your daily life</li>
                <li>
                  You are planning pregnancy and have cycle concerns
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Doctor to See
              </h2>

              <p className="mb-4 text-gray-700">
                A gynaecologist is usually the right starting point.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Some cases involve an endocrinologist or dietitian.</li>
                <li>
                  Your family doctor can guide you if you are unsure.
                </li>
                <li>
                  Check that the doctor holds recognised medical qualifications.
                </li>
                <li>
                  Ask about registration with the relevant medical council.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Track Your Cycle First
              </h2>

              <p className="mb-4 text-gray-700">
                Records help the doctor greatly. A notebook or phone app is
                enough.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of each period.</li>
                <li>Record how many days bleeding lasts.</li>
                <li>
                  Note how heavy the flow is and any clots.
                </li>
                <li>Mark pain, mood changes and other symptoms.</li>
                <li>Note weight changes and major stress.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Prepare Your History
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Age when periods began</li>
                <li>Past cycle pattern</li>
                <li>Current and past medicines</li>
                <li>Family history of similar concerns</li>
                <li>Earlier tests or scans</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Doctors
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or earlier gynaecologist</li>
                <li>Trusted friends and relatives</li>
                <li>Hospital and clinic listings</li>
                <li>Official medical council directories</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Verify Qualifications
              </h2>

              <p className="mb-4 text-gray-700">
                Look for clear, checkable details. Credentials can be verified
                through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of experience in gynaecology</li>
                <li>Experience with concerns like yours</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                Comfort matters for personal topics. You should leave feeling
                heard and informed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen without judgement?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>
                  Does the doctor avoid pressure or fear-based advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Female or Male Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                This is a personal preference. Choose the doctor who helps you
                speak openly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask when booking whether a female doctor is available.
                </li>
                <li>
                  Request a female staff member during examinations if you wish.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down, or take someone along.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What may be causing my irregular periods?</li>
                <li>Which tests do I need, and why?</li>
                <li>
                  What are my options, including monitoring?
                </li>
                <li>
                  How can lifestyle changes help in my case?
                </li>
                <li>How long before I may see improvement?</li>
                <li>
                  How will this affect future pregnancy plans?
                </li>
                <li>When should I return for follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests You May Be Advised
              </h2>

              <p className="mb-4 text-gray-700">
                Ask what each test will show.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy test, where relevant</li>
                <li>Blood tests for hormones and other markers</li>
                <li>Ultrasound scans</li>
                <li>Other checks, depending on your case</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Management Is Personal
              </h2>

              <p className="mb-4 text-gray-700">
                Care depends on the cause and your goals. Do not start or stop
                medicines without your doctor&apos;s advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lifestyle guidance on food, activity, sleep and stress
                </li>
                <li>
                  Medicines to regulate cycles or manage symptoms, if advised
                </li>
                <li>Treatment of any underlying condition</li>
                <li>Regular follow-up to review progress</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Daily Habits
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors often discuss habits alongside treatment. Ask your
                doctor or a qualified dietitian for personal guidance rather
                than following online plans.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Balanced, regular meals</li>
                <li>Regular activity you enjoy</li>
                <li>A steady sleep routine</li>
                <li>Stress management</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk to someone you trust.</li>
                <li>Tell your doctor if you feel low or anxious.</li>
                <li>
                  Avoid comparing yourself with social media posts.
                </li>
                <li>Seek support if worry affects daily life.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                A good doctor will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Compare explanations, not only prescriptions.
                </li>
                <li>Carry the same reports to each visit.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for an itemised bill.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation fee</li>
                <li>Test and scan charges</li>
                <li>Medicine and follow-up costs</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                Visit in person before committing.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clean, well-maintained rooms</li>
                <li>Respectful, trained staff</li>
                <li>Reasonable waiting times</li>
                <li>Clear billing</li>
                <li>Easy access for companions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Planners such as{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                focus on these elements when designing healthcare interiors.
                Clinical standards remain the responsibility of the medical
                team.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Privacy:</strong> Consultation doors do not open onto
                  the waiting area, and registration is discreet.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, soft lighting
                  and good ventilation.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Dismissing your concerns</li>
                <li>Ignoring irregular periods for years</li>
                <li>Stopping medicines without advice</li>
                <li>Skipping follow-up visits</li>
                <li>Self-medicating from online advice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Ramganga
                Vihar, Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Interior Partner</p>
                      <p>Space Build</p>
                      <p className="text-sm text-gray-600">
                        Healthcare interior planning and clinic design support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Important Note</p>
                      <p className="text-sm text-gray-600">
                        This page provides general information only. It does not
                        recommend or rank any doctor. Consult a qualified
                        healthcare professional for diagnosis and treatment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+919927611780"
                        className="hover:underline"
                      >
                        +91 99276 11780
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+918077973797"
                        className="hover:underline"
                      >
                        +91 80779 73797
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:spacebuild.india@gmail.com"
                        className="break-all hover:underline"
                      >
                        spacebuild.india@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p>Ramganga Vihar, Moradabad, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.spacebuild.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.spacebuild.co.in
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