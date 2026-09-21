
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
      q: "Are reviews on a doctor's own website reliable?",
      a: "They can offer useful insight but are typically curated, so it's best to also check independent platforms like Google reviews.",
    },
    {
      q: "What should I focus on most in gynaecologist reviews?",
      a: "Focus on detailed, recent reviews mentioning communication style, treatment outcomes, and comfort level rather than just star ratings.",
    },
    {
      q: "How many reviews should I read before deciding?",
      a: "There's no fixed number, but reading a mix of positive and negative reviews across multiple platforms gives a more balanced picture.",
    },
    {
      q: "Are negative reviews always a red flag?",
      a: "Not necessarily — occasional negative feedback is normal, but repeated complaints about the same issue deserve more attention.",
    },
    {
      q: "Can reviews replace an in-person consultation?",
      a: "No, reviews are a helpful starting point, but your own consultation experience is the best way to judge fit and comfort.",
    },
    {
      q: "Does gynaecologistmoradabad.com have a testimonials section?",
      a: "Yes, the website includes patient testimonials reflecting communication style and consultation experience.",
    },
    {
      q: "Should I check reviews specific to the treatment I need?",
      a: "Yes, reviews mentioning your specific concern (pregnancy, surgery, fertility) are generally more useful than general comments.",
    },
    {
      q: "How can I contact Dr. Priyanka Gynaec to ask questions before booking?",
      a: "Call +91 90797 65578, WhatsApp +91 89796 70705, email drpriyankagynec@gmail.com, or visit gynaecologistmoradabad.com.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "What's the best way to 'verify' positive reviews before my visit?",
      a: "Ask the doctor direct questions during your consultation and observe communication style and clinic environment firsthand.",
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
                Gynaecologist Reviews Moradabad: How to Read Them the Right Way
                Before Choosing Your Doctor
              </h1>

              <p className="mb-4 text-gray-700">
                Before booking an appointment, many women search for
                &quot;gynaecologist reviews Moradabad&quot; to understand what
                other patients experienced — communication style, waiting times,
                treatment outcomes, and overall comfort. This guide explains
                what genuine patient reviews actually reveal, how to evaluate
                them critically, red flags to watch out for, and what to look
                for on a gynaecologist&apos;s website when reviews aren&apos;t
                easily found elsewhere online.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patient Reviews Matter When Choosing a Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                Gynaecological care is deeply personal, so reviews carry extra
                weight for this specialty. Reviews typically help you
                understand:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Communication style</strong> — whether the doctor
                  explains things clearly and patiently.
                </li>
                <li>
                  <strong>Comfort level</strong> — how at ease patients felt
                  discussing sensitive topics.
                </li>
                <li>
                  <strong>Waiting time and clinic efficiency</strong> — how
                  organized appointments and follow-ups are.
                </li>
                <li>
                  <strong>Treatment outcomes</strong> — real experiences with
                  surgeries, pregnancy care, or fertility treatment.
                </li>
                <li>
                  <strong>Staff behavior</strong> — how the support team treats
                  patients, not just the doctor.
                </li>
                <li>
                  <strong>Clinic hygiene and facilities</strong> — cleanliness
                  and comfort of the physical space.
                </li>
                <li>
                  <strong>Transparency around cost</strong> — whether patients
                  felt informed about charges in advance.
                </li>
                <li>
                  <strong>Emergency responsiveness</strong> — how the clinic
                  handled urgent situations, if mentioned.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Where to Look for Gynaecologist Reviews in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Reviews can be found across multiple platforms, and checking
                more than one source gives a more balanced picture:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Google Business reviews</strong> — often the most
                  commonly checked source, showing star ratings and written
                  feedback.
                </li>
                <li>
                  <strong>The doctor&apos;s official website</strong> — many
                  clinics feature a testimonials section with patient
                  experiences.
                </li>
                <li>
                  <strong>Health platforms and doctor directories</strong> —
                  some list ratings and reviews specific to gynaecologists in
                  your city.
                </li>
                <li>
                  <strong>Social media pages</strong> — clinic Facebook or
                  Instagram pages sometimes include patient comments or shared
                  experiences.
                </li>
                <li>
                  <strong>Word of mouth</strong> — recommendations from family,
                  friends, or community groups are often considered highly
                  reliable.
                </li>
                <li>
                  <strong>Local parenting or women&apos;s health forums</strong>
                  , where women sometimes share detailed personal experiences.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Evaluate Reviews Critically (Not Just Read Star Ratings)
              </h2>

              <p className="mb-4 text-gray-700">
                A high star rating alone doesn&apos;t tell the whole story.
                Here&apos;s how to read reviews more meaningfully:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Look for detailed reviews</strong>, not just short
                  one-line ratings — detailed feedback usually reflects genuine
                  experience.
                </li>
                <li>
                  <strong>Check for consistency across multiple reviews</strong>{" "}
                  — repeated mentions of the same strength (or concern) are more
                  telling than a single comment.
                </li>
                <li>
                  <strong>Notice the date range of reviews</strong> — recent
                  reviews reflect the clinic&apos;s current service quality
                  better than old ones.
                </li>
                <li>
                  <strong>Read both positive and negative reviews</strong> to
                  get a balanced view, rather than focusing only on the best or
                  worst comments.
                </li>
                <li>
                  <strong>Watch for context-specific feedback</strong> — reviews
                  mentioning pregnancy care, surgery, or fertility treatment are
                  more useful if you need that specific service.
                </li>
                <li>
                  <strong>Be cautious of overly generic reviews</strong> that
                  could apply to any clinic (&quot;good doctor, nice
                  staff&quot;) without specific detail.
                </li>
                <li>
                  <strong>Consider how the clinic responds to negative
                  reviews</strong>, if visible — professional, constructive
                  responses are a good sign.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags to Watch for in Reviews
              </h2>

              <p className="mb-4 text-gray-700">
                While researching, keep an eye out for genuine warning signs,
                such as:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Multiple independent complaints about the same
                  issue</strong> — for example, repeated mentions of poor
                  communication or rushed consultations.
                </li>
                <li>
                  <strong>Reports of unclear or unexpected billing</strong>,
                  especially around surgery costs.
                </li>
                <li>
                  <strong>Complaints about unhygienic clinic conditions</strong>
                  , mentioned by more than one reviewer.
                </li>
                <li>
                  <strong>Consistent mentions of long, unmanaged waiting
                  times</strong> without explanation.
                </li>
                <li>
                  <strong>Reviews suggesting a lack of follow-up care</strong>{" "}
                  after surgery or treatment.
                </li>
                <li>
                  <strong>A pattern of reviews that feel copy-pasted or
                  unnaturally similar</strong>, which can sometimes indicate
                  fake reviews rather than genuine ones.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Green Flags That Indicate a Trustworthy Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                On the positive side, look for reviews that consistently
                highlight:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clear, patient explanations of diagnosis and treatment options.
                </li>
                <li>
                  A comfortable, respectful environment for discussing sensitive
                  health topics.
                </li>
                <li>
                  Positive surgical outcomes, especially for laparoscopic
                  procedures.
                </li>
                <li>
                  Supportive care during pregnancy, including responsiveness
                  during emergencies.
                </li>
                <li>
                  Fair and transparent cost communication before procedures.
                </li>
                <li>
                  Genuine follow-up care after surgery or treatment, not just a
                  one-time consultation.
                </li>
                <li>
                  Long-term patient relationships, where reviewers mention
                  visiting the same doctor for years or across multiple
                  pregnancies.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Testimonials on a Doctor&apos;s Own Website Still Matter
              </h2>

              <p className="mb-4 text-gray-700">
                Some patients are skeptical of testimonials on a clinic&apos;s
                own website, assuming they may only show the best feedback. While
                it&apos;s true that clinics choose which testimonials to
                display, they can still be useful when read correctly:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  They often provide more specific, service-related detail than
                  short public review platforms.
                </li>
                <li>
                  They can give insight into the type of patients and conditions
                  the doctor commonly treats.
                </li>
                <li>
                  Comparing website testimonials with independent reviews
                  elsewhere (like Google) gives a fuller, cross-checked picture.
                </li>
                <li>
                  The tone and consistency of testimonials can still reflect
                  genuine patterns in patient experience, even if curated.
                </li>
                <li>
                  They&apos;re useful as a starting point, ideally combined with
                  a personal consultation to form your own impression.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Use Reviews Alongside Your Own Judgment
              </h2>

              <p className="mb-4 text-gray-700">
                Reviews are a helpful starting point, but shouldn&apos;t be the
                only factor in your decision. Combine review research with:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A first consultation visit to personally assess communication
                  style and comfort level.
                </li>
                <li>
                  Direct questions about the doctor&apos;s experience with your
                  specific concern.
                </li>
                <li>
                  Checking qualifications and specializations independently, not
                  just relying on reviews.
                </li>
                <li>
                  Observing the clinic environment yourself — hygiene, staff
                  behavior, and organization.
                </li>
                <li>
                  Trusting your own comfort level, since a doctor who works well
                  for one patient may not be the perfect fit for another.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you&apos;re specifically researching gynaecologist reviews in
                Moradabad, Dr. Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) is a local option that appears in relevant searches.
                Here&apos;s an honest look at what her website offers regarding
                patient feedback:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Her website, Dr. Priyanka Gynaec, includes a testimonials
                  section where patients share their experiences with
                  consultations and treatment.
                </li>
                <li>
                  Based on the site&apos;s content, testimonials generally
                  reflect themes of clear communication, a comfortable
                  consultation experience, and confidence in the clinic&apos;s
                  approach to care.
                </li>
                <li>
                  The clinic is positioned around advanced technology — 3D
                  laparoscopic surgery, AI-based imaging, and
                  fertility-preserving surgical techniques — which is often a
                  point patients reference positively in similar practices.
                </li>
                <li>
                  Services covered in patient feedback context typically relate
                  to pregnancy care, laparoscopic surgery (sterilization,
                  cystectomy, myomectomy, hysterectomy), hysteroscopy, and
                  fertility/IVF treatment.
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
                Questions You Can Ask to &quot;Verify&quot; Reviews During Your
                Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Can you tell me about your experience treating cases similar
                  to mine?
                </li>
                <li>
                  How do you typically handle questions or concerns between
                  appointments?
                </li>
                <li>
                  What does the follow-up process look like after surgery or
                  treatment?
                </li>
                <li>
                  How do you communicate cost estimates before starting
                  treatment?
                </li>
                <li>
                  Can previous patients (with their consent) be a reference for
                  major procedures like surgery?
                </li>
                <li>
                  How do you handle situations where a patient wants a second
                  opinion?
                </li>
                <li>
                  What would you say is the most common feedback you receive
                  from patients?
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Gynaecologist reviews in Moradabad can offer valuable insight,
                but the most reliable approach is to combine review research —
                from Google, the clinic&apos;s own website, and word of mouth —
                with your own first consultation experience. Look for consistent,
                detailed, and recent feedback rather than relying on star
                ratings alone, and don&apos;t hesitate to ask the doctor direct
                questions before committing to treatment. This balanced approach
                helps ensure you choose a gynaecologist you genuinely feel
                comfortable and confident with.
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
