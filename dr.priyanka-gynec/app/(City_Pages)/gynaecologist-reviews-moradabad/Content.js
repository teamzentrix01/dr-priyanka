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

export default function GynaecologistReviewsMoradabad() {
  const faqs = [
    {
      q: "What's the first step before reading gynaecologist reviews?",
      a: "Define your specific need and priorities first, so you can filter reviews for relevance instead of reading everything equally.",
    },
    {
      q: "How many review sources should I check?",
      a: "Checking at least two or three sources — such as Google and the clinic's website — gives a more balanced picture.",
    },
    {
      q: "How do I know if reviews are genuine?",
      a: "Look for specific details, a natural spread of posting dates, and consistency across multiple independent reviews.",
    },
    {
      q: "Should I trust a clinic's own website testimonials?",
      a: "They're useful as one data point but are curated, so cross-check with independent platforms for a fuller view.",
    },
    {
      q: "What's the final step before deciding on a gynaecologist?",
      a: "Verify key details through a direct call or message, then confirm your impression with an in-person consultation.",
    },
    {
      q: "Why should I write a review after my own visit?",
      a: "It helps other women make informed decisions and contributes to a more accurate community picture of local care.",
    },
    {
      q: "Does gynaecologistmoradabad.com provide enough information to apply this framework?",
      a: "Yes, its listed services and testimonials give a starting point; cross-checking independent reviews adds further confidence.",
    },
    {
      q: "What makes a review genuinely useful for future patients?",
      a: "Specific details about the reason for the visit, communication style, and honest, balanced feedback make a review most useful.",
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
                Gynaecologist Reviews Moradabad: A Step-by-Step Framework to
                Decide With Confidence
              </h1>

              <p className="mb-4 text-gray-700">
                Scrolling through gynaecologist reviews in Moradabad can quickly
                turn into an overwhelming task — dozens of star ratings, a
                handful of detailed comments, and no clear way to turn all of it
                into an actual decision. This guide offers a practical,
                step-by-step framework to help you move from scattered reviews
                to a confident shortlist, and also covers something most guides
                skip: how to write a useful review yourself after your own
                visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Structured Framework Beats Random Scrolling
              </h2>

              <p className="mb-4 text-gray-700">
                Most people read reviews the same way — scrolling until
                something stands out, then stopping. This approach has real
                limitations:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Recency bias</strong> — the most recent reviews often
                  get the most attention, even if older reviews reveal more
                  consistent patterns.
                </li>
                <li>
                  <strong>Emotional weighting</strong> — a single dramatic
                  negative review can outweigh dozens of quietly positive ones
                  in your mind.
                </li>
                <li>
                  <strong>No clear stopping point</strong> — without a
                  framework, it&apos;s easy to keep scrolling indefinitely
                  without reaching a decision.
                </li>
                <li>
                  <strong>Missed relevance</strong> — reviews about an
                  unrelated concern (like billing) can unfairly influence your
                  view of the doctor&apos;s actual medical care.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A structured approach helps you extract genuine signal from the
                noise, rather than being swayed by whichever review you happened
                to read last.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 1: Define What You&apos;re Actually Looking For
              </h2>

              <p className="mb-4 text-gray-700">
                Before reading a single review, get specific about your own
                need:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What is your primary concern?</strong> (routine
                  check-up, pregnancy, surgery, fertility treatment)
                </li>
                <li>
                  <strong>What matters most to you personally?</strong>
                  (communication style, technology used, wait times, cost
                  transparency)
                </li>
                <li>
                  <strong>Do you have any specific requirements?</strong> (a
                  female doctor, laparoscopic experience, high-risk pregnancy
                  expertise)
                </li>
                <li>
                  <strong>What&apos;s your timeline?</strong> (urgent need vs.
                  planning ahead for a future concern)
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Having this clarity means you can filter reviews for relevance
                instead of reading everything with equal weight.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 2: Gather Reviews From Multiple Sources
              </h2>

              <p className="mb-4 text-gray-700">
                Collect a reasonable sample before analyzing anything:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Google Business reviews</strong>, typically the
                  largest and most accessible source.
                </li>
                <li>
                  <strong>The clinic&apos;s own website</strong>, if it includes
                  a testimonials section.
                </li>
                <li>
                  <strong>Any local health directories or platforms</strong>{" "}
                  covering Moradabad specifically.
                </li>
                <li>
                  <strong>Word-of-mouth recommendations</strong>, treated as a
                  valid source alongside written reviews.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Aim to gather at least a handful of reviews from more than one
                source, rather than relying entirely on a single platform.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 3: Filter for Relevance to Your Specific Need
              </h2>

              <p className="mb-4 text-gray-700">
                Once you have a pool of reviews, filter them based on what you
                defined in Step 1:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  If your concern is <strong>surgery</strong>, prioritize
                  reviews mentioning surgical experience, technique, and
                  recovery.
                </li>
                <li>
                  If your concern is <strong>pregnancy</strong>, prioritize
                  reviews mentioning antenatal care, delivery, and emergency
                  responsiveness.
                </li>
                <li>
                  If your concern is <strong>fertility treatment</strong>,
                  prioritize reviews mentioning IVF-specific communication and
                  outcomes.
                </li>
                <li>
                  Set aside reviews that are too generic to be useful
                  (&quot;good doctor,&quot; &quot;nice clinic&quot;) unless you
                  have nothing more specific to go on.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 4: Check for Authenticity and Consistency
              </h2>

              <p className="mb-4 text-gray-700">
                Before trusting a batch of reviews, apply a quick authenticity
                check:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Look for specific details</strong> — genuine reviews
                  often mention particular experiences, not just generic praise.
                </li>
                <li>
                  <strong>Check the spread of dates</strong> — reviews posted
                  naturally over time feel more organic than a cluster posted
                  within days of each other.
                </li>
                <li>
                  <strong>Compare tone and language variation</strong> — highly
                  similar phrasing across multiple reviews can be a sign of less
                  organic feedback.
                </li>
                <li>
                  <strong>Weigh consistency over outliers</strong> — one
                  unusually negative or positive review matters less than a
                  pattern seen across several reviews.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 5: Score What Matters Most to You
              </h2>

              <p className="mb-4 text-gray-700">
                Rather than trying to reach an overall &quot;good or bad&quot;
                verdict, score the doctor or clinic specifically on your
                personal priorities:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Communication and comfort</strong> — rated based on
                  how reviewers describe the consultation experience.
                </li>
                <li>
                  <strong>Relevant expertise</strong> — rated based on how many
                  reviews specifically match your concern (surgery, pregnancy,
                  fertility).
                </li>
                <li>
                  <strong>Technology and facilities</strong> — rated based on
                  mentions of equipment, imaging, or surgical approach.
                </li>
                <li>
                  <strong>Cost transparency</strong> — rated based on whether
                  reviewers mention clear, upfront pricing.
                </li>
                <li>
                  <strong>Follow-up and support</strong> — rated based on
                  post-treatment or post-visit experiences described.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This simple scoring approach — even informally, in your head or
                on paper — gives you a clearer basis for comparison than an
                overall star rating alone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 6: Shortlist and Verify Through Direct Contact
              </h2>

              <p className="mb-4 text-gray-700">
                Once you&apos;ve identified 1–2 strong options based on your
                review analysis:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Call or message the clinic directly to confirm details
                  mentioned in reviews (technology, doctor availability,
                  services).
                </li>
                <li>
                  Ask about anything unclear from the reviews, such as specific
                  cost ranges or appointment availability.
                </li>
                <li>
                  Book an initial consultation as the final, most reliable step
                  in your decision-making process.
                </li>
                <li>
                  Trust your own in-person experience to confirm or adjust your
                  impression from the reviews.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Writing a Useful Review of Your Own After Your Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Once you&apos;ve had your own consultation or treatment,
                contributing a thoughtful review helps other women go through
                this same process more easily. A genuinely useful review
                typically includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The <strong>specific reason for your visit</strong> (routine
                  check-up, pregnancy care, surgery, fertility treatment), so
                  future readers can judge relevance.
                </li>
                <li>
                  What stood out about <strong>communication and comfort</strong>{" "}
                  during your consultation.
                </li>
                <li>
                  Specific details about <strong>technology or approach</strong>,
                  if relevant to your treatment.
                </li>
                <li>
                  Honest feedback on <strong>wait times, cost clarity, and
                  follow-up care</strong>, even if it&apos;s a minor point.
                </li>
                <li>
                  A <strong>balanced tone</strong> — mentioning both strengths
                  and any areas that could improve gives future readers a more
                  trustworthy, realistic picture.
                </li>
                <li>
                  <strong>Avoiding overly generic phrases</strong> — specific
                  detail is what makes a review genuinely useful to someone else
                  in your situation.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Contributing your own detailed review not only helps other women
                in Moradabad make informed decisions, but also creates a more
                accurate, community-driven picture of local gynaecological care
                over time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Putting the Framework Into Practice: A Quick Recap
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Define your specific need before reading any reviews.
                </li>
                <li>
                  Gather reviews from multiple sources, not just one platform.
                </li>
                <li>
                  Filter for relevance to your particular concern.
                </li>
                <li>
                  Check for authenticity and consistency across reviews.
                </li>
                <li>
                  Score based on what matters most to you personally, not a
                  generic overall rating.
                </li>
                <li>
                  Verify through direct contact and a consultation before making
                  your final decision.
                </li>
                <li>
                  Write your own review afterward to contribute to the
                  community&apos;s collective knowledge.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Applying this framework to Dr. Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), here&apos;s a structured look at what&apos;s available for
                your own review analysis:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Relevant service match:</strong> The website lists
                  pregnancy care, laparoscopic surgery (sterilization,
                  cystectomy, myomectomy, hysterectomy), diagnostic
                  hysteroscopy, endometriosis surgery, and fertility/IVF
                  treatment — so reviews related to any of these concerns would
                  be directly relevant.
                </li>
                <li>
                  <strong>Technology signals:</strong> The clinic highlights 3D
                  laparoscopic surgery, AI-based imaging, and time-lapse embryo
                  monitoring, which reviewers interested in advanced care would
                  likely comment on.
                </li>
                <li>
                  <strong>Testimonials available:</strong> The website&apos;s
                  own testimonials section generally reflects themes of clear
                  communication and a comfortable consultation experience —
                  useful as one data point, though it should be cross-checked
                  with independent platforms like Google for a fuller picture.
                </li>
                <li>
                  <strong>Direct verification:</strong> Contact details are
                  readily available for calling or messaging to confirm any
                  specific details mentioned in reviews before booking.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details of Dr. Priyanka Gynaec, Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Fertility Specialist (MBBS, MS)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
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
                      <p className="font-semibold">Clinic Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Biases That Quietly Distort How We Read Reviews
              </h2>

              <p className="mb-4 text-gray-700">
                Even with a structured framework, it helps to be aware of a few
                natural mental shortcuts that can skew your judgment while
                reading reviews:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Negativity bias</strong> — a single strongly negative
                  review often feels more memorable and influential than several
                  quietly positive ones, even if the positive reviews are more
                  representative overall.
                </li>
                <li>
                  <strong>Confirmation bias</strong> — if you already lean
                  toward choosing a particular doctor, you may unconsciously
                  give more weight to reviews that confirm that choice and
                  dismiss ones that don&apos;t.
                </li>
                <li>
                  <strong>Recency bias</strong> — the most recently posted
                  reviews tend to feel more relevant, even when older reviews
                  reflect a longer, more reliable track record.
                </li>
                <li>
                  <strong>Halo effect</strong> — a clinic with a polished
                  website or modern-looking branding can unconsciously make
                  reviews feel more credible than they might for a less
                  polished-looking practice, regardless of actual care quality.
                </li>
                <li>
                  <strong>Small sample overconfidence</strong> — reading just
                  two or three reviews can create a false sense of certainty,
                  when a larger, more varied sample would give a more reliable
                  picture.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Simply being aware of these tendencies while reading reviews can
                help you apply the structured framework more objectively, rather
                than letting one dramatic comment or a polished first impression
                outweigh the broader pattern.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Simple One-Page Decision Worksheet
              </h2>

              <p className="mb-4 text-gray-700">
                If you&apos;d like a quick way to apply this entire framework
                practically, try jotting down answers to these prompts before
                making your final decision:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>My specific need is:</strong> _______ (routine care /
                  pregnancy / surgery / fertility treatment)
                </li>
                <li>
                  <strong>My top 2–3 priorities are:</strong> _______ (e.g.,
                  communication, technology, cost transparency)
                </li>
                <li>
                  <strong>Sources I checked:</strong> _______ (Google, clinic
                  website, word of mouth, others)
                </li>
                <li>
                  <strong>Recurring positive themes I noticed:</strong> _______
                </li>
                <li>
                  <strong>Recurring concerns I noticed, if any:</strong> _______
                </li>
                <li>
                  <strong>Questions I still need to ask directly:</strong>{" "}
                  _______
                </li>
                <li>
                  <strong>My shortlist (1–2 options):</strong> _______
                </li>
                <li>
                  <strong>Next step:</strong> _______ (call, WhatsApp, or book a
                  consultation)
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Filling this out — even informally on paper or in your
                phone&apos;s notes app — turns a vague sense of &quot;I read
                some reviews&quot; into an actual, organized basis for your
                decision. It also gives you a ready reference to bring up
                specific questions during your consultation call, rather than
                relying on memory alone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why This Approach Works Better Over Time
              </h2>

              <p className="mb-4 text-gray-700">
                Beyond helping with a single decision, building this habit of
                structured review reading has longer-term benefits:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You become faster and more confident at evaluating any
                  healthcare provider, not just gynaecologists.
                </li>
                <li>
                  You&apos;re less likely to be swayed by a single dramatic
                  review, whether positive or negative.
                </li>
                <li>
                  You build a repeatable process you can use again for future
                  healthcare decisions, including for family members.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Reading gynaecologist reviews in Moradabad becomes far more
                useful when you follow a structured framework instead of
                scrolling randomly — define your need, gather from multiple
                sources, filter for relevance, check authenticity, score what
                matters to you, and verify through direct contact before making
                your final decision. And once you&apos;ve had your own
                experience, writing a detailed, honest review helps the next
                woman going through the same research process.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
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