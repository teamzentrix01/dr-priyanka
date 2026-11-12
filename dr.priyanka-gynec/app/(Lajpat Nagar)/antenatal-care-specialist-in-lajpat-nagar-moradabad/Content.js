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

export default function AntenatalCareSpecialistLajpatNagar() {
  const faqs = [
    {
      q: "Can I keep working during pregnancy?",
      a: "Ask your doctor. It depends on your health and the nature of your work.",
    },
    {
      q: "How often are checkups needed?",
      a: "It varies by case. Your doctor will set the schedule.",
    },
    {
      q: "How do I plan checkups around work?",
      a: "Book ahead, add dates to your calendar and choose convenient slots.",
    },
    {
      q: "When should I start maternity leave?",
      a: "Discuss with your doctor and check your workplace policy.",
    },
    {
      q: "Which symptoms need urgent help?",
      a: "Heavy bleeding, severe pain or reduced baby movements. Follow your doctor&apos;s list.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, if you feel unsure about the advice.",
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
                Antenatal Care Specialist in Lajpat Nagar, Moradabad: Balancing
                Work and Pregnancy Checkups
              </h1>

              <p className="mb-4 text-gray-700">
                Many women continue working through pregnancy, and fitting
                regular checkups around deadlines, travel and meetings takes
                planning. The right specialist, sensible scheduling and an
                understanding workplace make it manageable. This guide covers
                practical planning and how to choose a doctor and clinic. It is
                general information, not medical advice. It names no individual
                doctors, because I cannot verify or rank them, and only your own
                doctor can advise on your health, activity and leave. Space
                Build works in interior planning, and its insight appears in the
                sections on clinic environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Planning Matters for Working Women
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy and work both need attention. Your health and your
                baby&apos;s come first.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Checkups are regular and cannot be skipped.</li>
                <li>
                  Tiredness and symptoms may affect work hours.
                </li>
                <li>Early planning reduces last-minute stress.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Start with Your Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Ask what your pregnancy needs. Write the answers down.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>How often will checkups be needed?</li>
                <li>
                  Is it safe to continue your current type of work?
                </li>
                <li>
                  Are any activities, travel or hours to limit?
                </li>
                <li>
                  When should leave begin, in your doctor&apos;s view?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing a Specialist
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or earlier gynaecologist</li>
                <li>
                  Trusted friends and colleagues with good experiences
                </li>
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
                Check Timings and Location
              </h2>

              <p className="mb-4 text-gray-700">
                Convenience helps you attend consistently.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Consultation days and hours, including early or late slots
                </li>
                <li>Travel time from home and from work</li>
                <li>Typical waiting time</li>
                <li>
                  Whether appointments can be booked in advance
                </li>
                <li>Parking and step-free access</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen to your history and worries?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>
                  Does the doctor understand your work constraints?
                </li>
                <li>
                  Does the doctor avoid fear-based or pressured advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scheduling Checkups
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Book the next visit before leaving the clinic.
                </li>
                <li>
                  Add all dates to your work calendar early.
                </li>
                <li>Choose slots that avoid peak work hours.</li>
                <li>Set phone reminders a day before.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Telling Your Employer
              </h2>

              <p className="mb-4 text-gray-700">
                Decide when and how, in a way that suits you. Keep communication
                simple and factual.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Check your workplace&apos;s maternity policy.</li>
                <li>
                  Share the dates you will need for checkups.
                </li>
                <li>
                  Ask your doctor for a medical note if required.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Maternity Leave Planning
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Learn your entitlements and notice requirements.</li>
                <li>
                  Discuss the likely start date with your doctor.
                </li>
                <li>Plan handover of your tasks in advance.</li>
                <li>Keep copies of all correspondence.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Commute and Travel
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor about travel limits for your case.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Avoid long, tiring journeys where possible.</li>
                <li>
                  Carry water, snacks and your document folder.
                </li>
                <li>
                  Keep your doctor&apos;s and hospital&apos;s numbers saved.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Comfort at Work
              </h2>

              <p className="mb-4 text-gray-700">
                Small changes help. Ask for adjustments if you need them.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sit with good back support and take short breaks.
                </li>
                <li>Keep water and healthy snacks nearby.</li>
                <li>Avoid standing for long stretches.</li>
                <li>Stay close to a washroom.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Food and Rest
              </h2>

              <p className="mb-4 text-gray-700">
                Advice must be personal. Avoid unverified remedies and online
                diets.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask your doctor about food, supplements and activity.
                </li>
                <li>Eat regular meals even on busy days.</li>
                <li>Rest when your body asks for it.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Know the Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor for your personal list. Leave work and seek care
                immediately if these occur.
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
                Keep Records Organised
              </h2>

              <p className="mb-4 text-gray-700">
                Carry the folder to every visit.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>One folder, arranged by date</li>
                <li>Photo copies on your phone</li>
                <li>
                  A one-page summary of medicines and allergies
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Which tests and scans are planned, and when?
                </li>
                <li>Which symptoms need an urgent call?</li>
                <li>
                  How can I reach the clinic between visits?
                </li>
                <li>Where will delivery take place?</li>
                <li>What are the estimated costs?</li>
                <li>Who covers if you are unavailable?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Do not hesitate to ask for help at work and home.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Share worries with someone you trust.</li>
                <li>Tell your doctor if you feel anxious or low.</li>
                <li>
                  Ask about antenatal classes with convenient timings.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Antenatal Clinic Looks Like
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
                  <strong>Access:</strong> Step-free entry, wide doors and a
                  lift where needed.
                </li>
                <li>
                  <strong>Seating:</strong> Supportive chairs with armrests and
                  space for companions.
                </li>
                <li>
                  <strong>Privacy:</strong> Consultation doors that do not open
                  onto the waiting area.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous materials and
                  clean washrooms close by.
                </li>
                <li>
                  <strong>Atmosphere:</strong> Soft lighting, good ventilation
                  and short waits.
                </li>
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
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is acceptable if you feel unsure. A good doctor will not be
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
                <li>Dismissing your concerns</li>
                <li>Skipping checkups because of work</li>
                <li>Ignoring warning signs</li>
                <li>
                  Leaving delivery planning until the last moment
                </li>
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