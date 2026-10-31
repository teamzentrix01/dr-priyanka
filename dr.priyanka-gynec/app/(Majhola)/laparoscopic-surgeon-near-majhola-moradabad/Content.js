
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

export default function LaparoscopicSurgeonMajhola() {
  const faqs = [
    {
      q: "Is laparoscopic surgery suitable for everyone?",
      a: "No. Your doctor decides based on your condition and health.",
    },
    {
      q: "How do I verify a surgeon&apos;s qualifications?",
      a: "Check the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Is a second opinion necessary?",
      a: "Not mandatory, but sensible before any surgery.",
    },
    {
      q: "What should I bring to the first visit?",
      a: "Past scans, reports, a list of medicines and notes on your symptoms.",
    },
    {
      q: "Is recovery always quick?",
      a: "Not always. It depends on the procedure and your health.",
    },
    {
      q: "How do I judge a hospital?",
      a: "Look at cleanliness, staff behaviour, emergency arrangements and clear billing.",
    },
    {
      q: "Can I ask about costs upfront?",
      a: "Yes. Ask for a written estimate that lists what is included.",
    },
    {
      q: "Where can I learn more about healthcare interior planning?",
      a: "Visit spacebuild.co.in to learn about interior planning for clinics and hospitals.",
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
                Laparoscopic Surgeon Near Majhola, Moradabad: How to Find and
                Choose the Right Specialist
              </h1>

              <p className="mb-4 text-gray-700">
                Being told you may need surgery is stressful, and choosing the
                right surgeon adds to the worry. Laparoscopic, or keyhole,
                surgery is now common for many conditions, but not every case
                suits it. This guide explains the basics, how to judge a surgeon
                and hospital fairly, and how to prepare. It is general
                information, not medical advice, and it names no individual
                doctors because I cannot verify or rank them. Only a qualified
                doctor can diagnose you and recommend treatment.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in healthcare interior planning, and its insight appears
                in the section on what a good hospital environment looks like.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Laparoscopic Surgery?
              </h2>

              <p className="mb-4 text-gray-700">
                It is a minimally invasive technique. Your doctor decides
                whether it suits your condition.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The surgeon makes a few small cuts instead of one large one.
                </li>
                <li>
                  A thin camera and special instruments are inserted through
                  them.
                </li>
                <li>The surgeon works while watching a screen.</li>
                <li>
                  It is used for many abdominal and pelvic procedures.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Possible Benefits
              </h2>

              <p className="mb-4 text-gray-700">
                Compared with open surgery, it may offer some advantages in
                suitable cases. Benefits depend on your condition and general
                health, so ask what applies to you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Smaller cuts and less visible scarring</li>
                <li>Often a shorter hospital stay</li>
                <li>Often a quicker return to routine activity</li>
                <li>Generally less wound-related discomfort</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Limits and Risks
              </h2>

              <p className="mb-4 text-gray-700">
                Every surgery carries risk. A good surgeon explains risks
                honestly and in plain language.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Not every condition can be treated this way.</li>
                <li>
                  A surgeon may need to switch to open surgery if required.
                </li>
                <li>Anaesthesia and bleeding risks apply.</li>
                <li>Complications can occur even with skilled teams.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Specialist
              </h2>

              <p className="mb-4 text-gray-700">
                See a doctor if you have persistent symptoms such as the
                following. Seek urgent care for sudden severe pain, fever or
                vomiting. Do not wait for an appointment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ongoing abdominal or pelvic pain</li>
                <li>
                  A diagnosed condition where surgery has been mentioned
                </li>
                <li>Symptoms that keep returning</li>
                <li>Abnormal findings on a scan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Start with the Right Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Your first visit is often to a general physician or the relevant
                specialist. Never self-diagnose from the internet.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>They examine you and advise on tests.</li>
                <li>They refer you to a surgeon if surgery may help.</li>
                <li>Bring all earlier reports and scans.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Surgeons
              </h2>

              <p className="mb-4 text-gray-700">
                Gather names from reliable sources. Aim for two or three names
                to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or treating specialist</li>
                <li>Friends and relatives with similar experience</li>
                <li>Hospital listings</li>
                <li>Official medical council directories</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Check Qualifications
              </h2>

              <p className="mb-4 text-gray-700">
                Look for clear, verifiable details. Credentials can be verified
                through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised surgical degree and training</li>
                <li>Registration with the relevant medical council</li>
                <li>Specific training in laparoscopic techniques</li>
                <li>Hospital affiliations where surgery would be done</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Check Relevant Experience
              </h2>

              <p className="mb-4 text-gray-700">
                Experience with your type of procedure matters most. Honest,
                specific answers are a good sign.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>How often do they perform this procedure?</li>
                <li>What are typical outcomes and recovery times?</li>
                <li>How are complications handled?</li>
                <li>
                  Will the same surgeon operate, and who assists?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                How a surgeon talks is as important as skill. You should leave
                informed, not pressured.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Do they listen to your full history?</li>
                <li>Do they explain in simple language?</li>
                <li>Do they welcome questions?</li>
                <li>
                  Do they discuss alternatives, including not operating?
                </li>
                <li>Do they avoid rushing you?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Surgeon
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down, or take a family member along.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Why do I need surgery, and why this method?</li>
                <li>What other options exist?</li>
                <li>What are the risks in my case?</li>
                <li>
                  What would make you switch to open surgery?
                </li>
                <li>How long is the hospital stay and recovery?</li>
                <li>What follow-up will I need?</li>
                <li>What is the total estimated cost?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests You May Need
              </h2>

              <p className="mb-4 text-gray-700">
                Surgeons usually advise tests before an operation. Ask why each
                test is needed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests</li>
                <li>Scans or other imaging</li>
                <li>Heart and anaesthesia fitness checks</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is sensible before surgery. A good surgeon will
                not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Compare explanations, not only recommendations.
                </li>
                <li>Carry the same reports to each visit.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understand the Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask about costs early. Request a written estimate and ask what
                it includes.
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
                Choosing the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                The facility matters as much as the surgeon. Visit in person
                before deciding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clean, well-maintained wards and operation areas</li>
                <li>Trained nursing and anaesthesia support</li>
                <li>Emergency and backup arrangements</li>
                <li>Clear billing and discharge process</li>
                <li>Easy access for family members</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Hospital Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                The setting affects comfort and safety. Planners such as{" "}
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
                <li>
                  <strong>Order:</strong> Clear signs and organised reception.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Your surgeon will give specific instructions. Follow your own
                doctor&apos;s advice, not general lists.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow guidance on food, drink and medicines.</li>
                <li>Arrange a family member to stay with you.</li>
                <li>Plan time off work and household help.</li>
                <li>Pack comfortable clothes and documents.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consent
              </h2>

              <p className="mb-4 text-gray-700">
                Before surgery, you have a right to clear information. Never
                sign without understanding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Understand what will be done and why.</li>
                <li>Know the risks and expected recovery.</li>
                <li>Read consent forms carefully.</li>
                <li>Ask about anything unclear.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery and Follow-Up
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery differs from person to person. Follow your surgeon&apos;s
                instructions and attend all reviews.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow wound care and activity advice.</li>
                <li>Attend all follow-up visits.</li>
                <li>
                  Report fever, severe pain or unusual symptoms promptly.
                </li>
                <li>Rest and eat well as advised.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pressure to book surgery immediately</li>
                <li>No clear explanation of the diagnosis</li>
                <li>Dismissing questions or second opinions</li>
                <li>Guaranteed results or unrealistic promises</li>
                <li>Unclear costs and no written estimate</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Choosing only by advertisements</li>
                <li>Skipping tests or reports</li>
                <li>Not asking about alternatives</li>
                <li>Ignoring recovery planning</li>
                <li>
                  Delaying care despite worsening symptoms
                </li>
                <li>Relying on online advice instead of a doctor</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning Near Majhola,
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
                      <p>Near Majhola, Moradabad, Uttar Pradesh, India</p>
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