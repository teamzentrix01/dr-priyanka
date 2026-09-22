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

export default function MoradabadGynaecologyDoctorReviews() {
  const faqs = [
    {
      q: "Why should I read reviews by category instead of overall ratings?",
      a: "Different reviews describe very different experiences (surgery, delivery, routine visits), so category-based reading gives more relevant insight.",
    },
    {
      q: "Which review category matters most for surgery decisions?",
      a: "Focus on pre-surgery communication, technique used, complication handling, and post-surgery follow-up experiences.",
    },
    {
      q: "Are delivery-related reviews different from general consultation reviews?",
      a: "Yes, delivery reviews often focus on emergency responsiveness and hospital experience, while consultation reviews focus on communication and wait times.",
    },
    {
      q: "How can I tell if reviews might be fake or incentivized?",
      a: "Watch for a cluster of near-identical reviews posted in a short period, or a complete absence of any critical feedback.",
    },
    {
      q: "Should I trust a clinic's own website testimonials?",
      a: "They can offer useful detail but are curated, so cross-checking with independent platforms gives a more balanced view.",
    },
    {
      q: "How many doctors should I shortlist before deciding?",
      a: "Comparing 2–3 doctors based on relevant, consistent reviews is usually enough before booking a personal consultation.",
    },
    {
      q: "Does gynaecologistmoradabad.com cover reviews across multiple service categories?",
      a: "Its testimonials reflect general communication and comfort themes; category-specific details are best confirmed directly with the clinic.",
    },
    {
      q: "How can I contact Dr. Priyanka Gynaec to ask category-specific questions?",
      a: "Call +91 90797 65578, WhatsApp +91 89796 70705, email drpriyankagynec@gmail.com, or visit gynaecologistmoradabad.com.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "What's the final step after reading reviews across categories?",
      a: "Book a personal consultation with your shortlisted doctor to confirm comfort, communication, and fit before proceeding with treatment.",
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
                Moradabad Gynaecology Doctor Reviews: A Smarter Way to Compare
                Your Options
              </h1>

              <p className="mb-4 text-gray-700">
                When comparing Moradabad gynaecology doctor reviews, most women
                end up scrolling through a mix of star ratings and short
                comments that don&apos;t always tell the full story. This guide
                takes a more structured approach — breaking reviews down by
                category (surgery, delivery, general consultation, cost, and
                staff behavior) so you can compare gynaecology doctors in
                Moradabad based on what actually matters for your specific need.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Category-Based Review Approach Works Better
              </h2>

              <p className="mb-4 text-gray-700">
                Most people read reviews in one long, mixed list — but different
                patients are reviewing very different experiences under the same
                doctor&apos;s profile. A woman reviewing her delivery experience
                is describing something very different from a woman reviewing a
                routine consultation. Breaking reviews into categories helps
                because:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It lets you focus on reviews relevant to your specific need,
                  rather than generic overall ratings.
                </li>
                <li>
                  It reveals patterns within a category more clearly (e.g.,
                  consistent praise for surgical care, but mixed feedback on
                  wait times).
                </li>
                <li>
                  It helps you set realistic expectations for the type of visit
                  you&apos;re planning.
                </li>
                <li>
                  It reduces the risk of judging a doctor unfairly based on a
                  review about an unrelated type of visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 1: Reviews About Surgical Experience
              </h2>

              <p className="mb-4 text-gray-700">
                If you need gynaecological surgery (fibroid removal, ovarian
                cyst removal, sterilization, hysterectomy), look specifically
                for review mentions of:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pre-surgery communication</strong> — did the doctor
                  clearly explain the procedure, risks, and recovery
                  expectations?
                </li>
                <li>
                  <strong>Surgical technique used</strong> — laparoscopic versus
                  open surgery experiences, and satisfaction with recovery time.
                </li>
                <li>
                  <strong>Post-surgery follow-up</strong> — whether patients
                  felt supported during recovery, not just during the procedure
                  itself.
                </li>
                <li>
                  <strong>Complication handling</strong>, if mentioned — how the
                  clinic responded if something didn&apos;t go as expected.
                </li>
                <li>
                  <strong>Scarring and recovery outcomes</strong> — particularly
                  relevant for laparoscopic surgery reviews.
                </li>
                <li>
                  <strong>Pain management</strong> — whether patients felt their
                  post-operative pain was addressed appropriately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 2: Reviews About Pregnancy and Delivery Care
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy-related reviews often carry the most emotional weight
                and detail. Look for mentions of:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Consistency of care</strong> — whether the same doctor
                  was available throughout the pregnancy and delivery.
                </li>
                <li>
                  <strong>Responsiveness during emergencies</strong> — how
                  quickly the doctor or clinic responded to urgent concerns.
                </li>
                <li>
                  <strong>Delivery experience</strong> — comfort, communication,
                  and support during labor and delivery.
                </li>
                <li>
                  <strong>Handling of complications</strong>, if any arose
                  during pregnancy or delivery.
                </li>
                <li>
                  <strong>Postnatal support</strong> — guidance provided after
                  delivery for both mother and baby.
                </li>
                <li>
                  <strong>Hospital or facility experience</strong>, since
                  delivery often involves a hospital rather than just the clinic
                  itself.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 3: Reviews About Routine Consultations
              </h2>

              <p className="mb-4 text-gray-700">
                For general gynaecological concerns — period problems,
                infections, routine check-ups — relevant review themes include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ease of booking appointments and typical waiting times.
                </li>
                <li>
                  Thoroughness of the consultation — did the doctor take enough
                  time to understand the concern?
                </li>
                <li>
                  Comfort discussing sensitive topics without feeling rushed or
                  judged.
                </li>
                <li>
                  Clarity of diagnosis and treatment explanation.
                </li>
                <li>
                  Follow-up availability if symptoms persist or questions arise
                  after the visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 4: Reviews About Fertility and IVF Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                For couples researching fertility-related reviews specifically,
                focus on:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clarity of the treatment plan and realistic expectations set
                  by the doctor.
                </li>
                <li>
                  Use of technology mentioned in reviews, such as embryo
                  monitoring or advanced imaging.
                </li>
                <li>
                  Emotional support provided during what can be a stressful
                  treatment journey.
                </li>
                <li>
                  Communication about success rates and next steps if a cycle
                  doesn&apos;t succeed.
                </li>
                <li>
                  Cost transparency specifically related to fertility treatment,
                  which often involves multiple stages.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 5: Reviews About Cost and Billing Transparency
              </h2>

              <p className="mb-4 text-gray-700">
                Financial transparency is a recurring theme worth checking
                across all types of reviews:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Whether costs were clearly explained upfront, before treatment
                  began.
                </li>
                <li>
                  Any mentions of unexpected charges during treatment or
                  surgery.
                </li>
                <li>
                  Value for money, as perceived by patients relative to the care
                  received.
                </li>
                <li>
                  Flexibility or payment support, especially for higher-cost
                  treatments like surgery or IVF.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Category 6: Reviews About Staff and Clinic Environment
              </h2>

              <p className="mb-4 text-gray-700">
                The doctor isn&apos;t the only factor shaping a patient&apos;s
                experience — supporting staff and the clinic environment matter
                too:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reception and administrative staff behavior, including
                  appointment scheduling and billing interactions.
                </li>
                <li>
                  Nursing and support staff care, especially relevant for
                  surgery or delivery experiences.
                </li>
                <li>
                  Clinic cleanliness and comfort, as mentioned by reviewers.
                </li>
                <li>
                  Overall organization, including how smoothly appointments and
                  procedures were managed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Cross-Check Reviews Across Multiple Sources
              </h2>

              <p className="mb-4 text-gray-700">
                Since no single review platform tells the complete story,
                cross-checking across sources gives a more balanced view:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Google Business reviews</strong> — typically the
                  largest pool of independent patient feedback.
                </li>
                <li>
                  <strong>The clinic&apos;s own website testimonials</strong>{" "}
                  — useful for service-specific detail, though naturally curated.
                </li>
                <li>
                  <strong>Health and doctor directory platforms</strong>, if
                  available for your city.
                </li>
                <li>
                  <strong>Word of mouth</strong> from friends, family, or local
                  community groups — often considered highly trustworthy.
                </li>
                <li>
                  <strong>Social media comments or posts</strong>, if the
                  clinic is active on platforms like Facebook or Instagram.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs When Reading Reviews
              </h2>

              <p className="mb-4 text-gray-700">
                Regardless of category, watch for these patterns that deserve
                extra caution:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Multiple reviews describing the same specific problem, rather
                  than isolated one-off complaints.
                </li>
                <li>
                  A sudden cluster of near-identical reviews posted in a short
                  time frame, which can sometimes indicate incentivized or fake
                  reviews rather than organic feedback.
                </li>
                <li>
                  Complete absence of any critical feedback, which can
                  occasionally suggest selective review management rather than a
                  flawless experience.
                </li>
                <li>
                  Reviews that focus only on the reception/front desk without
                  any mention of the doctor or actual treatment quality.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Making Your Final Decision
              </h2>

              <p className="mb-4 text-gray-700">
                After researching reviews across these categories, combine your
                findings with a personal consultation before making a final
                decision:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Shortlist 2–3 doctors based on strong, consistent reviews
                  relevant to your specific need.
                </li>
                <li>
                  Book an initial consultation with your top choice to assess
                  comfort and communication firsthand.
                </li>
                <li>
                  Ask direct questions based on any concerns or patterns you
                  noticed in reviews (for example, asking about wait times if
                  that was a recurring theme).
                </li>
                <li>
                  Trust your own experience during the visit as the final, most
                  important factor — reviews are a guide, not a guarantee.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Among the gynaecology doctors in Moradabad that come up in
                review-related searches, Dr. Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) is a locally practicing specialist. Here&apos;s a
                category-based look at what her website offers:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Surgical Services:</strong> The site lists Laparoscopic
                  Sterilization, Cystectomy, Myomectomy, Hysterectomy, and
                  Endometriosis Surgery, all performed using 3D laparoscopic
                  technology — relevant for anyone researching surgery-specific
                  reviews.
                </li>
                <li>
                  <strong>Pregnancy & Delivery:</strong> Antenatal and postnatal
                  care, along with high-risk pregnancy management, are listed as
                  core services.
                </li>
                <li>
                  <strong>Fertility & IVF:</strong> The clinic highlights
                  AI-based imaging and time-lapse embryo monitoring, relevant
                  for fertility-treatment-related research.
                </li>
                <li>
                  <strong>General Consultations:</strong> The website positions
                  the clinic as a full-service gynaecology practice suitable for
                  routine concerns as well.
                </li>
                <li>
                  <strong>Testimonials:</strong> The site includes a testimonials
                  section reflecting general themes of clear communication and a
                  comfortable consultation experience, though specific cost or
                  billing feedback isn&apos;t detailed there.
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
                What to Do When Reviews Are Limited or Hard to Find
              </h2>

              <p className="mb-4 text-gray-700">
                Not every gynaecology doctor in Moradabad has an extensive
                review history online, especially newer practices or clinics
                that haven&apos;t been heavily reviewed on platforms like
                Google. If you find yourself with limited reviews to work with,
                these alternative research steps can help:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Call the clinic directly and ask specific questions — a good
                  clinic will happily answer questions about experience,
                  technology, and approach even without a large review base.
                </li>
                <li>
                  Ask for patient references, especially for major procedures
                  like surgery — some clinics can connect you with previous
                  patients (with their consent) who are willing to share their
                  experience.
                </li>
                <li>
                  Check the doctor&apos;s qualifications and affiliations
                  independently — medical council registrations, hospital
                  affiliations, and any professional memberships can offer
                  reassurance beyond reviews alone.
                </li>
                <li>
                  Look at the clinic&apos;s website content quality — detailed,
                  accurate information about services, technology, and
                  procedures often reflects a clinic&apos;s overall
                  professionalism and transparency.
                </li>
                <li>
                  Ask your existing family doctor or local pharmacist for a
                  recommendation, since local healthcare professionals often
                  have informal knowledge of specialists in the area.
                </li>
                <li>
                  Rely more heavily on your first consultation as your primary
                  source of information when reviews are scarce — pay close
                  attention to communication style, clinic environment, and how
                  thoroughly your concerns are addressed.
                </li>
                <li>
                  Check if the clinic is relatively new — newer clinics or
                  doctors who recently moved to Moradabad may simply not have
                  built up an online review history yet, which doesn&apos;t
                  necessarily reflect care quality.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Should You Rely Only on Reviews, or Also Trust Recommendations?
              </h2>

              <p className="mb-4 text-gray-700">
                Personal recommendations from people you trust can sometimes be
                just as valuable as online reviews, if not more so:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recommendations from friends or family often come with more
                  context — they can explain not just whether they liked the
                  doctor, but why, and whether it fits your specific situation.
                </li>
                <li>
                  Community or neighborhood groups, especially in a city like
                  Moradabad, often have informal but reliable local knowledge
                  about doctors and clinics.
                </li>
                <li>
                  A recommendation combined with your own research (checking the
                  doctor&apos;s services, technology, and a shortlist of any
                  available reviews) gives the most balanced picture.
                </li>
                <li>
                  Be mindful that different people prioritize different things —
                  a friend who valued a quick, efficient visit may not weigh
                  communication style the same way you do, so always factor in
                  your own priorities when considering a recommendation.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Ultimately, whether you&apos;re relying on detailed online
                reviews, word-of-mouth recommendations, or a combination of
                both, the goal remains the same: gathering enough genuine
                insight to feel confident booking your first consultation.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-gray-700">
                Reading Moradabad gynaecology doctor reviews becomes far more
                useful when you organize them by category — surgery, pregnancy
                and delivery, routine consultations, fertility treatment, cost,
                and staff experience — rather than skimming a mixed list of star
                ratings. Combine this structured research with a personal
                consultation to make a confident, well-informed choice for your
                specific gynaecological care needs.
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
