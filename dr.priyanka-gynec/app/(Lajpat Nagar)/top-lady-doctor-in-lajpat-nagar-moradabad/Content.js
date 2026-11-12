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

export default function TopLadyDoctorLajpatNagar() {
  const faqs = [
    {
      q: "Is it normal to feel nervous at a doctor&apos;s visit?",
      a: "Yes. Many women do, and doctors are used to it.",
    },
    {
      q: "How can I raise a hard topic?",
      a: "Say it is hard to talk about, then describe what you feel in plain words or hand over a written note.",
    },
    {
      q: "Can I ask for a lady doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "Can I bring someone with me?",
      a: "Yes. You can also ask for time alone with the doctor.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "What if I do not understand the advice?",
      a: "Ask the doctor to explain again in simpler words.",
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
                Top Lady Doctor in Lajpat Nagar, Moradabad: How to Talk Openly
                and Ask Confident Questions
              </h1>

              <p className="mb-4 text-gray-700">
                Many women delay a doctor&apos;s visit because they feel shy,
                worried about judgement or unsure how to describe a problem. A
                good lady doctor has heard it all, and clear communication helps
                her help you. This guide shows how to prepare, how to raise
                sensitive topics and how to choose a doctor and clinic. It is
                general information, not medical advice. It names no individual
                doctors, because I cannot verify or rank them, and only a
                qualified doctor can diagnose you or advise treatment.{" "}
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
                Why Hesitation Is Common
              </h2>

              <p className="mb-4 text-gray-700">
                You are not alone. Doctors are trained to handle these
                conversations calmly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Personal topics can feel embarrassing.</li>
                <li>Some fear being judged.</li>
                <li>Others worry they are overreacting.</li>
                <li>Many are unsure which words to use.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Openness Helps
              </h2>

              <p className="mb-4 text-gray-700">
                Better information leads to better advice. Leaving details out
                can lead to guesswork.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The doctor understands your situation fully.</li>
                <li>
                  Tests and treatment can be chosen more accurately.
                </li>
                <li>Small problems are caught earlier.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choose Someone You Can Talk To
              </h2>

              <p className="mb-4 text-gray-700">
                Comfort is a valid reason to choose a doctor. Qualifications
                matter just as much as comfort.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask whether a lady doctor is available when booking.
                </li>
                <li>
                  Notice whether the doctor listens without interrupting.
                </li>
                <li>
                  Choose someone who explains in simple language.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Verify Qualifications
              </h2>

              <p className="mb-4 text-gray-700">
                Credentials can be verified through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised medical degree and any specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of practice</li>
                <li>Hospital affiliations for deliveries or surgery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Prepare in Writing
              </h2>

              <p className="mb-4 text-gray-700">
                Writing removes the pressure of remembering. You can hand the
                note over if speaking feels difficult.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>List your symptoms and when they began.</li>
                <li>Note cycle dates, if relevant.</li>
                <li>Write any word you find hard to say.</li>
                <li>Mark your top three questions.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Practise a Simple Opening
              </h2>

              <p className="mb-4 text-gray-700">
                Starting is the hardest part. Saying you feel nervous is
                perfectly acceptable.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>&quot;I have been having trouble with...&quot;</li>
                <li>&quot;I am worried about...&quot;</li>
                <li>&quot;I find this hard to talk about, but...&quot;</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Use Plain Words
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Describe what you feel, not what you think it is called.
                </li>
                <li>
                  Give numbers where you can, such as days or how often.
                </li>
                <li>Say how it affects your daily life.</li>
                <li>Use your own language if that is easier.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Raising Sensitive Topics
              </h2>

              <p className="mb-4 text-gray-700">
                You never need to apologise for asking.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Say that it is a private concern before you begin.
                </li>
                <li>
                  Be specific about when it happens and how often.
                </li>
                <li>Mention past experiences if they matter.</li>
                <li>Ask whether more detail would help.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If You Freeze
              </h2>

              <p className="mb-4 text-gray-700">
                It happens to many people.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Take a breath and pause.</li>
                <li>Hand over your written note.</li>
                <li>
                  Ask the doctor to guide you with questions.
                </li>
                <li>
                  Ask to come back to the topic later in the visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bringing a Companion
              </h2>

              <p className="mb-4 text-gray-700">
                You decide who stays in the room.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>You can bring a trusted person for support.</li>
                <li>You can ask to speak to the doctor alone.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ask Questions Without Fear
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What is the likely cause, in simple words?</li>
                <li>Which tests do I need, and why?</li>
                <li>
                  What are my options, including waiting and monitoring?
                </li>
                <li>What are the benefits and risks of each?</li>
                <li>When should I return for follow-up?</li>
                <li>
                  Which symptoms should make me call urgently?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If You Do Not Understand
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Say &quot;Could you explain that again in simpler words?&quot;
                </li>
                <li>Ask for a drawing or an example.</li>
                <li>Ask the doctor to write key points down.</li>
                <li>Repeat the plan back in your own words.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Right to Consent
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The doctor should explain what will be done and why.
                </li>
                <li>Permission should be asked before any examination.</li>
                <li>
                  You can ask for a female staff member to be present.
                </li>
                <li>You can ask to pause or stop.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If a Comment Feels Judgemental
              </h2>

              <p className="mb-4 text-gray-700">
                A respectful doctor will not shame you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You can calmly say, &quot;I would like to focus on my
                  health.&quot;
                </li>
                <li>You can ask to move on to the plan.</li>
                <li>You can choose another doctor for the future.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy and Dignity
              </h2>

              <p className="mb-4 text-gray-700">
                If privacy feels weak, consider another clinic.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Consultation doors should not open onto the waiting area.
                </li>
                <li>Examination areas should be screened.</li>
                <li>Registration should not be overheard.</li>
                <li>
                  Your information should be treated discreetly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Design can ease nerves. Planners such as{" "}
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
                  <strong>Privacy:</strong> Solid doors, screens and discreet
                  registration.
                </li>
                <li>
                  <strong>Atmosphere:</strong> Soft lighting, calm colours and a
                  welcoming reception.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, drinking water
                  and short waits.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
                <li>
                  <strong>Sound:</strong> Rooms that keep conversations private.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs and Second Opinions
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is acceptable if you feel unsure, and a good
                doctor will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask for an itemised bill covering consultation, tests and
                  follow-up.
                </li>
                <li>Check insurance acceptance, if relevant.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Urgent Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Do not let shyness delay care if you have any of the following.
                Seek immediate care.
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
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Dismissing or shaming you</li>
                <li>
                  Examining without explanation or permission
                </li>
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Delaying a visit out of embarrassment</li>
                <li>Leaving without understanding the plan</li>
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