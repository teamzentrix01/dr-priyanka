
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

export default function BestGynaecologistLajpatNagar() {
  const faqs = [
    {
      q: "What is the trial visit approach?",
      a: "Treat the first visit as a test, observe and rate it, then decide whether to stay.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Can I ask for a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "What should I rate after the visit?",
      a: "Comfort, clarity, privacy, cleanliness and costs.",
    },
    {
      q: "When should I switch doctors?",
      a: "When you feel unheard or privacy, clarity or costs are a concern.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially before surgery or if you feel unsure.",
    },
    {
      q: "What should I bring to the first visit?",
      a: "Past reports, a medicine list and notes on your symptoms and cycle.",
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
                Best Gynaecologist in Lajpat Nagar, Moradabad: Use the Trial
                Visit Approach
              </h1>

              <p className="mb-4 text-gray-700">
                Reviews and recommendations can only tell you so much. The
                clearest evidence comes from your own first visit. Treating that
                visit as a trial, with a few things to observe and a simple way
                to rate them, helps you decide calmly whether to stay or compare
                another doctor. This guide is general information, not medical
                advice. It names no individual doctors, because I cannot verify
                or rank them, and only a qualified doctor can diagnose you or
                advise treatment.{" "}
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
                What Is a Trial Visit?
              </h2>

              <p className="mb-4 text-gray-700">
                It is a first consultation with a decision in mind. Going once
                does not commit you to anything.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You attend with a clear concern or routine check-up.
                </li>
                <li>You observe how the doctor and clinic work.</li>
                <li>You decide afterwards, not during the visit.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Before You Book
              </h2>

              <p className="mb-4 text-gray-700">
                Do a little homework. Aim for one or two doctors to try.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask your family doctor or trusted friends for names.</li>
                <li>Check hospital and clinic listings.</li>
                <li>
                  Use official medical council directories for doctor details.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Verify Qualifications First
              </h2>

              <p className="mb-4 text-gray-700">
                Check facts before the visit. Credentials can be verified
                through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of practice in gynaecology</li>
                <li>Hospital affiliations for deliveries or surgery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ask When Booking
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Is a female doctor available, if you prefer one?
                </li>
                <li>What is the consultation fee?</li>
                <li>How long is the usual wait?</li>
                <li>Do I need to bring or avoid anything?</li>
                <li>
                  Is a female staff member present during examinations?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Prepare Your Notes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your concern and when it began</li>
                <li>Cycle dates, if relevant</li>
                <li>Current medicines and past conditions</li>
                <li>Earlier reports and scans</li>
                <li>
                  Three questions you most want answered
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Observe the Arrival
              </h2>

              <p className="mb-4 text-gray-700">
                The first impression tells you something.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Is the clinic easy to find and access?</li>
                <li>Is reception polite and organised?</li>
                <li>Is registration discreet?</li>
                <li>Is the waiting area clean and calm?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Observe the Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                This is the heart of the trial.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen to your full history?</li>
                <li>Do they explain in simple language?</li>
                <li>Do they welcome questions?</li>
                <li>Do they avoid fear or pressure?</li>
                <li>Do they respect your choices?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Observe Consent and Dignity
              </h2>

              <p className="mb-4 text-gray-700">
                If any of these feel weak, note it clearly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Is permission asked before any examination?</li>
                <li>
                  Does the doctor explain what will be done and why?
                </li>
                <li>
                  Can you ask for a female staff member or a pause?
                </li>
                <li>Is privacy protected during examination?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Observe the Plan
              </h2>

              <p className="mb-4 text-gray-700">
                Before leaving, check whether you understand it. If the plan is
                unclear, that is information too.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What the doctor thinks is happening, in simple words
                </li>
                <li>Medicines, doses and timings</li>
                <li>Tests needed and why</li>
                <li>Warning signs and who to call</li>
                <li>Follow-up date</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Observe Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Clarity matters more than a low fee.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Was the fee as stated when you booked?</li>
                <li>Did you receive an itemised bill?</li>
                <li>
                  Were test and follow-up costs explained?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Rate Your Visit Afterwards
              </h2>

              <p className="mb-4 text-gray-700">
                Do it the same day, while fresh. Numbers help, but your overall
                feeling counts too.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Rate comfort, clarity, privacy, cleanliness and costs from 1
                  to 5.
                </li>
                <li>Add one line of notes beside each.</li>
                <li>Note how you felt walking out.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Decide: Stay, Compare or Switch
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Stay:</strong> Mostly high ratings and you felt heard.
                </li>
                <li>
                  <strong>Compare:</strong> Mixed ratings or doubts, so try one
                  more doctor.
                </li>
                <li>
                  <strong>Switch:</strong> Low privacy, dismissed concerns or
                  unclear costs.
                </li>
                <li>There is no need to explain a decision to anyone.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When a Second Opinion Helps
              </h2>

              <p className="mb-4 text-gray-700">
                It is sensible before surgery or major treatment. A good doctor
                will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Carry the same reports to each visit.</li>
                <li>Never delay urgent care while deciding.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions Worth Asking in the Trial
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What do you think is causing my symptoms?</li>
                <li>Which tests do I need, and why?</li>
                <li>
                  What are my options, including monitoring?
                </li>
                <li>When should I return for follow-up?</li>
                <li>
                  How can I reach the clinic with concerns?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Urgent Signs Come First
              </h2>

              <p className="mb-4 text-gray-700">
                Do not treat a trial visit as a reason to wait if you have any
                of the following. Seek immediate care.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden severe pain</li>
                <li>Very heavy bleeding</li>
                <li>Fainting or dizziness</li>
                <li>Heavy bleeding in possible pregnancy</li>
                <li>Fever with pelvic pain</li>
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
                  <strong>Layout:</strong> A clear flow from reception to
                  waiting to consultation.
                </li>
                <li>
                  <strong>Privacy:</strong> Consultation doors do not open onto
                  the waiting area, and examination areas are screened.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces, clean
                  washrooms and fresh linen.
                </li>
                <li>
                  <strong>Lighting and Sound:</strong> Soft light in waiting
                  areas and rooms that keep conversations private.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Using Reviews Wisely
              </h2>

              <p className="mb-4 text-gray-700">
                Let your own trial visit be the deciding evidence.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Look for detailed comments, not only star ratings.
                </li>
                <li>Notice repeated praise or complaints.</li>
                <li>
                  Be cautious of many similar reviews posted together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Keep Records from Day One
              </h2>

              <p className="mb-4 text-gray-700">
                Records make switching doctors easier too.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>One folder, arranged by date</li>
                <li>Photo copies on your phone</li>
                <li>
                  A short note of each visit&apos;s key points
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>
                  Examination without explanation or permission
                </li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs and unverifiable qualifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Choosing only by advertisements or &quot;best&quot; labels
                </li>
                <li>Deciding during the visit under pressure</li>
                <li>
                  Staying with a doctor who makes you uncomfortable
                </li>
                <li>Skipping notes and records</li>
                <li>Delaying care despite worsening symptoms</li>
                <li>Self-medicating from online advice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Lajpat
                Nagar, Moradabad
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
                      <p>Lajpat Nagar, Moradabad, Uttar Pradesh, India</p>
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
