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

export default function BestGynaecologistGandhiNagar() {
  const faqs = [
    {
      q: "How do I find the best gynaecologist for me?",
      a: "Compare two or three doctors on qualifications, experience, communication, clinic quality and costs.",
    },
    {
      q: "What is the benefit of a scoring worksheet?",
      a: "It keeps comparison fair and shows what matters most to you.",
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
      q: "Should I rely only on scores?",
      a: "No. Your comfort and the doctor&apos;s explanations matter too.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "Past reports, a medicine list and notes on your symptoms and cycle.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially before surgery or if you feel unsure.",
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
                Best Gynaecologist in Gandhi Nagar, Moradabad: A Decision
                Worksheet to Compare Doctors Fairly
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;Best&quot; is not a fixed title. It depends on what you
                need and how you weigh qualifications, comfort, location and
                cost. A simple scoring worksheet turns a confusing search into a
                clear comparison. This guide shows you how to build and use one.
                It is general information, not medical advice. It names no
                individual doctors, because I cannot verify or rank them, and
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
                Why Use a Worksheet?
              </h2>

              <p className="mb-4 text-gray-700">
                Gut feeling alone can mislead. Use it as a guide, not a rigid
                formula.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>It keeps comparison fair across doctors.</li>
                <li>It shows which factors matter most to you.</li>
                <li>It helps family members decide together.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step One: Define Your Need
              </h2>

              <p className="mb-4 text-gray-700">
                Write your main concern in one line. Your need decides how much
                weight each factor deserves.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Routine check-up</li>
                <li>Period or hormonal concern</li>
                <li>Pregnancy care</li>
                <li>Pelvic pain or other symptoms</li>
                <li>
                  Planning for contraception or conception
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step Two: Build a Shortlist
              </h2>

              <p className="mb-4 text-gray-700">
                Use reliable sources. Aim for two or three names, so the
                worksheet stays simple.
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
                Step Three: Choose Your Factors
              </h2>

              <p className="mb-4 text-gray-700">
                A good worksheet includes these. Add any factor that matters to
                you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualifications and registration</li>
                <li>Relevant experience</li>
                <li>Communication and listening</li>
                <li>Clinic privacy and hygiene</li>
                <li>Location and timings</li>
                <li>Costs and billing clarity</li>
                <li>
                  Availability of a female doctor, if preferred
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step Four: Set Weights
              </h2>

              <p className="mb-4 text-gray-700">
                Not all factors matter equally. Agree on weights before visiting
                anyone, to avoid bias.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Give each factor a weight, for example 1 to 3.</li>
                <li>
                  Give higher weight to what matters most to you.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step Five: Score Each Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                After each visit, rate every factor. Scores help, but notes
                explain them.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Use a simple scale, such as 1 to 5.</li>
                <li>Multiply by the weight.</li>
                <li>Add the totals.</li>
                <li>Note comments beside each score.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scoring Qualifications
              </h2>

              <p className="mb-4 text-gray-700">
                Check facts, not claims. Credentials can be verified through the
                council&apos;s records.
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
                Scoring Experience
              </h2>

              <p className="mb-4 text-gray-700">
                Relevance matters more than a long list of titles. Honest,
                specific answers deserve higher scores.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  How often does the doctor treat concerns like yours?
                </li>
                <li>What approach is usually followed?</li>
                <li>When does the doctor refer to another specialist?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scoring Communication
              </h2>

              <p className="mb-4 text-gray-700">
                How a doctor talks is as important as skill.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen to your full history?</li>
                <li>Are explanations in simple language?</li>
                <li>Are questions welcomed?</li>
                <li>Are your choices respected?</li>
                <li>Is advice free from fear or pressure?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scoring Comfort and Privacy
              </h2>

              <p className="mb-4 text-gray-700">
                Privacy is essential in a gynaecology clinic. If privacy feels
                weak, score it low.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Consultation doors should not open onto the waiting area.
                </li>
                <li>Examination areas should be screened.</li>
                <li>Registration should not be overheard.</li>
                <li>
                  Staff should explain what they are doing and ask before
                  examining.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scoring Hygiene
              </h2>

              <p className="mb-4 text-gray-700">
                Look closely during your visit.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Tidy rooms and clean washrooms</li>
                <li>Fresh linen and clean examination surfaces</li>
                <li>Visible hand-wash facilities</li>
                <li>Proper disposal arrangements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scoring Location and Timings
              </h2>

              <p className="mb-4 text-gray-700">
                Convenience supports regular care.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Travel time from home, including at night</li>
                <li>Parking and step-free access for elders</li>
                <li>Consultation days and hours</li>
                <li>Typical waiting time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scoring Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask early and clearly. Clarity deserves a higher score than a
                low fee alone.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation fee and follow-up charges</li>
                <li>Test and scan costs</li>
                <li>Procedure and medicine costs</li>
                <li>Insurance acceptance, if relevant</li>
                <li>Ask for an itemised bill.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Female or Male Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                This is a personal preference. Add it as a factor if it matters
                to you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask when booking whether a female doctor is available.
                </li>
                <li>
                  You can request a female staff member during examinations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Each Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Ask the same questions to everyone. Write the answers beside
                your scores.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What do you think is causing my symptoms?</li>
                <li>Which tests do I need, and why?</li>
                <li>
                  What are my options, including monitoring?
                </li>
                <li>What are the benefits and risks of each?</li>
                <li>When should I return for follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Design supports comfort and trust. Planners such as{" "}
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
                  <strong>Surfaces:</strong> Washable, non-porous materials that
                  are easy to keep clean.
                </li>
                <li>
                  <strong>Lighting:</strong> Soft, glare-free light in waiting
                  areas and bright light for examination.
                </li>
                <li>
                  <strong>Sound:</strong> Rooms that keep conversations private.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Reading the Results
              </h2>

              <p className="mb-4 text-gray-700">
                Use totals wisely.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A close score means other factors may decide.</li>
                <li>A big gap is useful, but check your notes.</li>
                <li>
                  If one factor is non-negotiable, such as privacy, treat a low
                  score there as a stop sign.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Trust Your Comfort Too
              </h2>

              <p className="mb-4 text-gray-700">
                Numbers do not capture everything.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Notice how you felt during the visit.</li>
                <li>Choose the doctor you can speak openly with.</li>
                <li>Consider a second visit if scores are close.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is sensible when you feel unsure, especially before surgery.
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
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>
                  Poor privacy during consultation or examination
                </li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>
                  Choosing only by advertisements or &quot;top&quot; lists
                </li>
                <li>
                  Delaying a visit despite worsening symptoms
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Gandhi
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
                      <p>Gandhi Nagar, Moradabad, Uttar Pradesh, India</p>
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