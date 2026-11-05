
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

export default function AntenatalCareDoctorGandhiNagar() {
  const faqs = [
    {
      q: "How can a partner help during antenatal care?",
      a: "Attend visits when welcome, take notes, share chores and learn the warning signs.",
    },
    {
      q: "Should family come to every checkup?",
      a: "Only if the mother is comfortable. Step out when privacy is preferred.",
    },
    {
      q: "When should we choose the delivery hospital?",
      a: "Early in pregnancy, so you can visit and compare.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Can she request a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "What documents should we keep?",
      a: "Reports, scans, prescriptions, ID and insurance papers in one dated folder.",
    },
    {
      q: "What symptoms need urgent help?",
      a: "Heavy bleeding, severe pain or reduced baby movements. Follow your doctor&apos;s list.",
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
                Antenatal Care Doctor in Gandhi Nagar, Moradabad: How Partners
                and Families Can Support Pregnancy
              </h1>

              <p className="mb-4 text-gray-700">
                Antenatal care is not only the mother&apos;s journey. Partners
                and family members can make checkups easier, the home calmer and
                delivery planning smoother. This guide explains how loved ones
                can help and how to choose a doctor and clinic together. It is
                general information, not medical advice. It names no individual
                doctors, because I cannot verify or rank them, and your own
                doctor decides your schedule, tests and treatment. Space Build
                works in interior planning, and its insight appears in the
                sections on clinic environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Family Support Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Support affects comfort and confidence. The mother&apos;s wishes
                and comfort should lead every decision.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy can bring tiredness, worry and mood changes.
                </li>
                <li>Practical help lets the mother rest.</li>
                <li>Shared understanding means better decisions.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Learn the Basics Together
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding helps you help.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask the doctor to explain the plan to both of you.
                </li>
                <li>Learn which symptoms need urgent attention.</li>
                <li>
                  Use reliable sources, not social media rumours.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing a Doctor Together
              </h2>

              <p className="mb-4 text-gray-700">
                Include the mother in every step. Aim for two or three names to
                compare.
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
                Credentials can be verified through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of experience in obstetrics</li>
                <li>The hospital where delivery would take place</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Respect Her Preferences
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask whether she prefers a female doctor.</li>
                <li>
                  Let her decide who is present during examinations.
                </li>
                <li>Do not pressure her about choices.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Attending Checkups
              </h2>

              <p className="mb-4 text-gray-700">
                Coming along helps in many ways. Step out when she or the doctor
                prefers privacy.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You can hear the doctor&apos;s advice firsthand.
                </li>
                <li>You can note down instructions.</li>
                <li>You can ask questions she may forget.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Taking Notes at Visits
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Record medicines, tests and follow-up dates.
                </li>
                <li>
                  Note the warning signs the doctor lists.
                </li>
                <li>Keep notes in a shared phone folder.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Managing Reports and Papers
              </h2>

              <p className="mb-4 text-gray-700">
                Carry the folder to every visit and to hospital.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>One folder, arranged by date</li>
                <li>Photo copies stored on both phones</li>
                <li>
                  A one-page summary of medicines and allergies
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions the Family Can Ask
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>How often are checkups needed?</li>
                <li>Which tests and scans are planned?</li>
                <li>Which symptoms need an urgent call?</li>
                <li>
                  How can we reach the clinic between visits?
                </li>
                <li>Where will delivery take place?</li>
                <li>What are the estimated costs?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Know the Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor for the personal list. Seek immediate care if
                these occur.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding</li>
                <li>Severe or constant pain</li>
                <li>Reduced baby movements</li>
                <li>Leaking fluid</li>
                <li>
                  Severe headache with vision changes or swelling
                </li>
                <li>Fever</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Creating a Calm Home
              </h2>

              <p className="mb-4 text-gray-700">
                Small changes help.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Keep walkways clear and non-slip.</li>
                <li>Arrange a comfortable resting spot.</li>
                <li>Keep essentials within easy reach.</li>
                <li>
                  Reduce stress and arguments where possible.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Sharing Household Tasks
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Take over heavy lifting and strenuous chores.</li>
                <li>Share cooking and cleaning.</li>
                <li>Plan help for older children.</li>
                <li>Let her rest without guilt.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Food and Activity
              </h2>

              <p className="mb-4 text-gray-700">
                Avoid unverified remedies and online diets.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask the doctor about food, supplements and safe activity.
                </li>
                <li>Support healthy habits without nagging.</li>
                <li>
                  Ask a qualified dietitian for a personal plan if needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Support
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Listen without rushing to fix.</li>
                <li>
                  Encourage her to share worries with the doctor.
                </li>
                <li>
                  Watch for persistent low mood or anxiety.
                </li>
                <li>
                  Learn together through antenatal classes, if available.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Not to Do
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Do not dismiss her symptoms.</li>
                <li>
                  Do not pressure her to follow advice from relatives over the
                  doctor&apos;s.
                </li>
                <li>
                  Do not self-medicate or give remedies without medical advice.
                </li>
                <li>Do not skip checkups to save time.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning for Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Choose the delivery hospital early and visit it.</li>
                <li>Plan transport and a backup option.</li>
                <li>Pack the hospital bag together.</li>
                <li>
                  Save emergency numbers on several phones.
                </li>
                <li>Arrange help at home for after delivery.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Request a written estimate where possible.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation fee per visit</li>
                <li>Test and scan charges</li>
                <li>Delivery and hospital costs</li>
                <li>Insurance coverage and claim process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Antenatal Clinic Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Design supports pregnant visitors and companions. Planners such
                as Space Build focus on these elements when designing healthcare
                interiors. Clinical standards remain the responsibility of the
                medical team.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Seating:</strong> Supportive chairs for her, with
                  space for companions.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and a
                  lift where needed.
                </li>
                <li>
                  <strong>Flooring:</strong> Non-slip surfaces.
                </li>
                <li>
                  <strong>Privacy:</strong> Consultation doors that do not open
                  onto the waiting area.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous materials and
                  clean washrooms.
                </li>
                <li>
                  <strong>Atmosphere:</strong> Soft lighting, good ventilation
                  and short waits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is acceptable if she feels unsure. A good doctor will not be
                offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Never delay urgent care while seeking another opinion.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Dismissing her concerns</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>
                  Skipping checkups or ignoring warning signs
                </li>
                <li>
                  Leaving delivery planning until the last moment
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
                        healthcare professional for pregnancy advice and urgent
                        concerns.
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
