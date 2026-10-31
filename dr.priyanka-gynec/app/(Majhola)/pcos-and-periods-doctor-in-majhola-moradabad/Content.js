
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

export default function PCOSAndPeriodsDoctorMajhola() {
  const faqs = [
    {
      q: "Is PCOS the same for everyone?",
      a: "No. Symptoms and management vary from person to person.",
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
      q: "Can lifestyle changes help?",
      a: "They are often part of care, but ask your doctor for personal advice.",
    },
    {
      q: "Do I need tests?",
      a: "Doctors often advise blood tests and scans, depending on your case.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially if you feel unsure about the advice.",
    },
    {
      q: "How do I judge a clinic?",
      a: "Look at cleanliness, privacy, staff behaviour and clarity of billing.",
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
                PCOS and Periods Doctor in Majhola, Moradabad: How to Find and
                Choose the Right Specialist
              </h1>

              <p className="mb-4 text-gray-700">
                Irregular periods, acne, weight changes or hair growth can leave
                you unsure whether something is wrong and whom to see. A good
                doctor listens, explains clearly and plans care around your
                life. This guide covers the basics, how to prepare for a visit
                and how to judge a doctor and clinic fairly. It is general
                information, not medical advice, and it names no individual
                doctors because I cannot verify or rank them. Only a qualified
                doctor can diagnose you. Space Build works in interior design,
                and its clinic-planning insight appears in the section on what a
                good clinic environment looks like.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is PCOS?
              </h2>

              <p className="mb-4 text-gray-700">
                PCOS stands for polycystic ovary syndrome, a common hormonal
                condition. Never self-diagnose from symptoms alone.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It can affect periods, ovulation and hormone levels.
                </li>
                <li>Symptoms vary widely from person to person.</li>
                <li>
                  It is diagnosed by a doctor using history, examination and
                  tests.
                </li>
                <li>Management is long-term and personalised.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Signs to Notice
              </h2>

              <p className="mb-4 text-gray-700">
                Some signs may prompt a medical visit. These signs can have
                other causes too, so a doctor&apos;s assessment matters.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular, delayed or missed periods</li>
                <li>Very heavy or prolonged bleeding</li>
                <li>Acne or oily skin</li>
                <li>Excess facial or body hair</li>
                <li>Thinning hair on the scalp</li>
                <li>Weight gain or difficulty losing weight</li>
                <li>Difficulty conceiving</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Consider a gynaecologist if any of the following applies. Seek
                urgent care for sudden severe pain or very heavy bleeding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your periods are consistently irregular</li>
                <li>Bleeding is unusually heavy or painful</li>
                <li>
                  Periods stop for several months without pregnancy
                </li>
                <li>
                  You are planning pregnancy and have cycle concerns
                </li>
                <li>Symptoms are affecting your daily life</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Treats PCOS and Period Problems?
              </h2>

              <p className="mb-4 text-gray-700">
                Gynaecologists commonly manage these concerns. Credentials can
                be verified through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some cases involve an endocrinologist or dietitian.
                </li>
                <li>
                  Check that the doctor holds recognised medical qualifications.
                </li>
                <li>
                  Ask about registration with the relevant medical council.
                </li>
                <li>Ask how often they see similar cases.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Track Your Cycle Before the Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Records help the doctor greatly. A simple notebook or phone app
                is enough.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of each period.</li>
                <li>
                  Record how long bleeding lasts and how heavy it is.
                </li>
                <li>Mark pain, mood changes and other symptoms.</li>
                <li>Note any weight changes.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Prepare Your History
              </h2>

              <p className="mb-4 text-gray-700">
                Bring clear information to help the doctor understand your
                situation.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Age when periods began</li>
                <li>Past cycle pattern</li>
                <li>Current and past medicines</li>
                <li>Family history of similar concerns</li>
                <li>Any earlier tests or scans</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Doctors
              </h2>

              <p className="mb-4 text-gray-700">
                Gather names from reliable sources. Aim for two or three names
                to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor</li>
                <li>Friends and relatives with similar experience</li>
                <li>Hospital or clinic listings</li>
                <li>Official medical council directories</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                Comfort in conversation matters, especially for personal topics.
                You should leave feeling heard and informed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Do they listen without judgement?</li>
                <li>Do they explain in simple language?</li>
                <li>Do they welcome questions?</li>
                <li>
                  Do they discuss lifestyle and medical options?
                </li>
                <li>
                  Do they avoid pressure or fear-based advice?
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
                <li>What do you think is causing my symptoms?</li>
                <li>Which tests do I need, and why?</li>
                <li>What are my treatment options?</li>
                <li>What lifestyle changes may help?</li>
                <li>How long before I may see improvement?</li>
                <li>How will this affect future pregnancy plans?</li>
                <li>When should I return for follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests You May Be Advised
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors may suggest tests to understand the cause. Ask what each
                test will show.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
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
                Care depends on your symptoms and goals. Do not start or stop
                medicines without your doctor&apos;s advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lifestyle guidance on food, activity and sleep
                </li>
                <li>
                  Medicines to regulate periods or manage symptoms, if advised
                </li>
                <li>Support for planning pregnancy, if desired</li>
                <li>Regular follow-up to review progress</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Daily Habits
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors often discuss habits alongside treatment. Ask your
                doctor or a qualified dietitian for personal guidance rather
                than following online plans.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Balanced, regular meals</li>
                <li>Regular physical activity you enjoy</li>
                <li>Good sleep routine</li>
                <li>Stress management</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Symptoms can affect mood and confidence. Support and reliable
                information can help.
              </p>

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
                A second opinion is sensible when you feel unsure. A good doctor
                will not be offended.
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
                Understand the Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask early. Request clarity on what each visit includes.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation and test charges</li>
                <li>Medicines and follow-up visits</li>
                <li>Scan and lab fees</li>
                <li>Insurance coverage, if relevant</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                The facility matters alongside the doctor. Visit in person
                before committing.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clean, well-maintained rooms</li>
                <li>Friendly, respectful staff</li>
                <li>Reasonable waiting times</li>
                <li>Clear billing</li>
                <li>
                  Easy access for elderly relatives or companions
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                The setting affects comfort and trust. Planners such as Space
                Build focus on these elements when designing healthcare
                interiors. Clinical standards remain the responsibility of the
                medical team.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Privacy:</strong> Consultation doors do not open onto
                  the waiting area.
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
                  <strong>Access:</strong> Step-free entry and accessible
                  washrooms.
                </li>
                <li>
                  <strong>Order:</strong> Clear signs and an organised
                  reception.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy products or packages</li>
                <li>No explanation of the diagnosis</li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Self-diagnosing from the internet</li>
                <li>Ignoring irregular periods for years</li>
                <li>Stopping medicines without advice</li>
                <li>Skipping follow-up visits</li>
                <li>
                  Relying on crash diets or unverified remedies
                </li>
                <li>Not tracking symptoms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your First Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bring your cycle notes and past reports.</li>
                <li>List your questions beforehand.</li>
                <li>Wear comfortable clothing.</li>
                <li>Take a trusted companion if you wish.</li>
                <li>Arrive a little early to complete forms.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Majhola,
                Moradabad
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
                      <p>Majhola, Moradabad, Uttar Pradesh, India</p>
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