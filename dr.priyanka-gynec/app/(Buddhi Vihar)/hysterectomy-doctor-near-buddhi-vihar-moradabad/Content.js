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

export default function HysterectomyDoctorBuddhiVihar() {
  const faqs = [
    {
      q: "Is a hysterectomy always necessary?",
      a: "No. Your doctor will explain whether it is the right option for your case.",
    },
    {
      q: "Are there alternatives?",
      a: "Sometimes. Ask your doctor what other options suit your condition.",
    },
    {
      q: "Should I get a second opinion?",
      a: "It is sensible before this surgery.",
    },
    {
      q: "How do I verify a surgeon&apos;s qualifications?",
      a: "Check the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Will periods stop afterwards?",
      a: "Yes, once the uterus is removed. Ask your doctor what else to expect.",
    },
    {
      q: "How long is recovery?",
      a: "It varies. Your surgeon will give guidance for your case.",
    },
    {
      q: "Can I ask about costs upfront?",
      a: "Yes. Ask for a written estimate that lists what is included.",
    },
    {
      q: "Where can I learn more about hospital planning?",
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
                Hysterectomy Doctor Near Buddhi Vihar, Moradabad: How to Decide
                and Choose the Right Specialist
              </h1>

              <p className="mb-4 text-gray-700">
                Being advised a hysterectomy is a big moment. It is a major
                decision with lasting effects, so it deserves clear information,
                time and often a second opinion. This guide explains the basics,
                the questions to ask and how to judge a specialist and hospital.
                It is general information, not medical advice. It names no
                individual doctors, because I cannot verify or rank them, and
                only a qualified doctor can diagnose you and recommend
                treatment. Space Build works in interior planning, and its
                insight appears in the section on hospital environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Hysterectomy?
              </h2>

              <p className="mb-4 text-gray-700">
                It is a surgery to remove the uterus. Your doctor decides which
                approach suits your condition.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sometimes the cervix, ovaries or tubes are removed too,
                  depending on the case.
                </li>
                <li>
                  After it, periods stop and pregnancy is no longer possible.
                </li>
                <li>
                  It may be done through the abdomen, the vagina or with keyhole
                  techniques.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Might It Be Advised?
              </h2>

              <p className="mb-4 text-gray-700">
                Only your doctor can say whether it applies to you. It is often
                one option among several, not always the first.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Certain uterine or pelvic conditions</li>
                <li>
                  Heavy bleeding that other treatments have not controlled
                </li>
                <li>
                  Some growths or other conditions affecting the uterus
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Hysterectomy
              </h2>

              <p className="mb-4 text-gray-700">
                Ask which type is proposed and why. Ask what each means for
                hormones and long-term health in your case.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Partial or Subtotal:</strong> The uterus is removed,
                  and the cervix is kept.
                </li>
                <li>
                  <strong>Total:</strong> The uterus and cervix are removed.
                </li>
                <li>
                  <strong>With Ovaries and Tubes Removed:</strong> Done only
                  when medically advised.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ask About Alternatives
              </h2>

              <p className="mb-4 text-gray-700">
                Before agreeing, ask whether other options exist. A good doctor
                explains why surgery is or is not the best choice for you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Medicines or monitoring</li>
                <li>Less invasive procedures, where suitable</li>
                <li>
                  Treating the cause without removing the uterus
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Take Your Time
              </h2>

              <p className="mb-4 text-gray-700">
                Unless it is an emergency, you can usually think it through.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask how urgent the decision is.</li>
                <li>
                  Discuss it with your partner or a trusted family member.
                </li>
                <li>
                  Write down your questions before each visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is sensible before this surgery. A good doctor will not be
                offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Compare explanations, not only recommendations.
                </li>
                <li>
                  Carry the same reports and scans to every visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Specialists
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your gynaecologist or family doctor</li>
                <li>
                  Friends and relatives with similar experience
                </li>
                <li>Hospital listings</li>
                <li>Official medical council directories</li>
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
                <li>Recognised medical degree and surgical training</li>
                <li>Registration with the relevant medical council</li>
                <li>
                  Experience with the type of hysterectomy proposed
                </li>
                <li>The hospital where surgery would take place</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                You should leave informed, not rushed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen to your full history?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>
                  Does the doctor welcome questions about your worries and
                  future plans?
                </li>
                <li>Does the doctor avoid pressure?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Female or Male Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                This is a personal preference.
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
                Questions to Ask the Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down, or take someone along.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Why is a hysterectomy advised in my case?</li>
                <li>What other options exist?</li>
                <li>Which type is proposed, and why?</li>
                <li>What are the risks and benefits?</li>
                <li>Will my ovaries be affected?</li>
                <li>What changes should I expect afterwards?</li>
                <li>
                  How long are the hospital stay and recovery?
                </li>
                <li>What is the total estimated cost?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Considerations
              </h2>

              <p className="mb-4 text-gray-700">
                It is normal to have mixed feelings.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Talk about fears and expectations with someone you trust.
                </li>
                <li>Ask your doctor about emotional support.</li>
                <li>Avoid unverified stories online.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pre-Surgery Tests
              </h2>

              <p className="mb-4 text-gray-700">
                Ask why each test is needed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests</li>
                <li>Scans or other imaging</li>
                <li>Anaesthesia fitness checks</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consent
              </h2>

              <p className="mb-4 text-gray-700">
                Never sign without understanding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Understand what will be done, what may be removed and why.
                </li>
                <li>Know the risks and expected recovery.</li>
                <li>Read consent forms carefully.</li>
                <li>Ask about anything unclear.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Your surgeon will give specific instructions.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow guidance on food, drink and medicines.</li>
                <li>Arrange a family member to stay with you.</li>
                <li>Plan leave from work and household help.</li>
                <li>
                  Keep reports, ID and insurance papers together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery differs from person to person.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow wound care and activity advice.</li>
                <li>Take medicines exactly as prescribed.</li>
                <li>
                  Ask when driving, lifting and exercise are safe.
                </li>
                <li>Rest, eat well and accept help.</li>
                <li>Attend all follow-up visits.</li>
                <li>
                  Report fever, severe pain, heavy bleeding or wound changes
                  promptly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Visit in person before deciding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clean, well-maintained wards and operation areas</li>
                <li>Trained nursing and anaesthesia support</li>
                <li>Emergency and backup arrangements</li>
                <li>Clear billing and discharge process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Hospital Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Planners such as Space Build focus on these elements when
                designing healthcare interiors. Clinical standards remain the
                responsibility of the medical team.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Privacy:</strong> Curtains or partitions and quiet
                  waiting areas.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors for
                  stretchers and accessible washrooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, soft lighting
                  and good ventilation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Request a written estimate and ask what it includes.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Surgeon, hospital and anaesthesia fees</li>
                <li>Room charges and consumables</li>
                <li>Tests, medicines and follow-up visits</li>
                <li>Insurance coverage and claim process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pressure to book surgery immediately</li>
                <li>No explanation of alternatives</li>
                <li>
                  Dismissing questions or a second opinion
                </li>
                <li>Guaranteed results or unrealistic promises</li>
                <li>Unclear costs and no written estimate</li>
                <li>Unverifiable qualifications</li>
                <li>
                  Relying on online advice instead of a doctor
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning Near Buddhi
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
                        Healthcare interior planning and hospital design support
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
                      <p>Near Buddhi Vihar, Moradabad, Uttar Pradesh, India</p>
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