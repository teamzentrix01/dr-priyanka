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

export default function OvarianCystRemovalLajpatNagar() {
  const faqs = [
    {
      q: "Does every ovarian cyst need removal?",
      a: "No. Many are only monitored.",
    },
    {
      q: "Should I get a second opinion?",
      a: "It is sensible before surgery.",
    },
    {
      q: "What should I ask before surgery?",
      a: "Why it is advised, the method, risks, recovery and costs.",
    },
    {
      q: "How do I verify a surgeon&apos;s credentials?",
      a: "Check the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Why keep a recovery diary?",
      a: "It helps you notice trends and gives your surgeon clear information.",
    },
    {
      q: "Are follow-up scans needed?",
      a: "Your surgeon will advise. Keep the dates.",
    },
    {
      q: "When should I seek urgent help?",
      a: "For fever, severe pain, heavy bleeding or wound changes, contact your doctor immediately.",
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
                Ovarian Cyst Removal Near Lajpat Nagar, Moradabad: A Recovery
                and Follow-Up Planner
              </h1>

              <p className="mb-4 text-gray-700">
                Many ovarian cysts never need removal, but when surgery is
                advised, knowing what comes after helps you plan calmly. This
                guide covers choosing a surgeon, preparing, recovering at home
                and tracking follow-up. It is general information, not medical
                advice. It names no individual doctors or hospitals, because I
                cannot verify or rank them, and only your own surgeon can tell
                you whether surgery is needed and what to expect.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                sections on hospital environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is Removal Always Needed?
              </h2>

              <p className="mb-4 text-gray-700">
                No. Many cysts are only monitored. Ask why removal is advised in
                your case and what happens if you wait.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Watchful monitoring with repeat scans</li>
                <li>
                  Medicines to manage symptoms, where suitable
                </li>
                <li>
                  Surgery for certain cysts, or when symptoms are significant
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Urgent Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait for an appointment if you have any of the following.
                Go to an emergency facility immediately.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden severe abdominal or pelvic pain</li>
                <li>Fainting or dizziness</li>
                <li>Fever or persistent vomiting</li>
                <li>Heavy bleeding</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing a Surgeon
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
                <li>Experience with the proposed procedure</li>
                <li>The hospital where surgery would take place</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions Before Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Why is removal advised, and which method?</li>
                <li>Will only the cyst be removed, or more?</li>
                <li>What are the risks in my case?</li>
                <li>
                  How might this affect future pregnancy plans?
                </li>
                <li>How long are the stay and recovery?</li>
                <li>What is the total estimated cost?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is sensible before any surgery. A good surgeon will not be
                offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Carry the same scans and reports to every visit.
                </li>
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
                <li>Complete tests and anaesthesia checks.</li>
                <li>Follow guidance on food, drink and medicines.</li>
                <li>Arrange leave from work and a companion.</li>
                <li>
                  Keep reports, ID and insurance papers together.
                </li>
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
                <li>Understand what will be done and why.</li>
                <li>Know the risks and expected recovery.</li>
                <li>Read consent forms carefully.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hospital Bag
              </h2>

              <p className="mb-4 text-gray-700">
                Check the hospital&apos;s own list too.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Documents folder and insurance papers</li>
                <li>Loose, comfortable clothing</li>
                <li>Toiletries and sanitary supplies</li>
                <li>Phone, charger and key numbers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Before You Leave Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for and write down the following.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A written discharge summary describing what was done
                </li>
                <li>Medicines, doses and timings</li>
                <li>Wound care and activity instructions</li>
                <li>
                  When and how the report on the removed tissue will be
                  explained
                </li>
                <li>Follow-up date and who to call</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Setting Up Home
              </h2>

              <p className="mb-4 text-gray-700">
                Keep essentials within easy reach.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Arrange a comfortable resting spot near a washroom.
                </li>
                <li>
                  Keep walkways clear, well lit and non-slip.
                </li>
                <li>Stock simple, easy meals.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery Diary
              </h2>

              <p className="mb-4 text-gray-700">
                Record facts, not guesses.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain level and location</li>
                <li>Medicines taken, with times</li>
                <li>
                  Wound appearance, as your surgeon advised
                </li>
                <li>
                  Eating, drinking and bowel or bladder habits
                </li>
                <li>Energy, sleep and activity</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your surgeon for your personal list. Contact your surgeon or
                go to hospital promptly if these occur.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever</li>
                <li>Severe or worsening pain</li>
                <li>Heavy bleeding</li>
                <li>
                  Redness, swelling or discharge from a wound
                </li>
                <li>Persistent vomiting</li>
                <li>
                  Calf pain or swelling, chest pain or breathlessness
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding the Report
              </h2>

              <p className="mb-4 text-gray-700">
                Do not interpret technical terms through internet searches.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bring the report to your surgeon for explanation.</li>
                <li>Ask what it means for follow-up.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-Up Scans and Visits
              </h2>

              <p className="mb-4 text-gray-700">
                Keep every report in one dated folder.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the follow-up date and set phone reminders.</li>
                <li>
                  Ask whether repeat scans are advised, and when.
                </li>
                <li>
                  Use the same centre if advised, for easier comparison.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk to someone you trust.</li>
                <li>
                  Tell your doctor if worry or low mood lasts.
                </li>
                <li>
                  Ask about fertility questions without embarrassment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Hospital Environment Looks Like
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
                Request a written estimate and keep all receipts.
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
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pressure to book surgery immediately</li>
                <li>No explanation of alternatives</li>
                <li>Guaranteed results or unrealistic promises</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>Poor privacy or hygiene</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Leaving hospital without written instructions</li>
                <li>Ignoring warning signs</li>
                <li>Skipping follow-up scans</li>
                <li>Resuming heavy activity too soon</li>
                <li>Self-medicating from online advice</li>
                <li>Losing the surgery and report records</li>
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
                        recommend or rank any doctor or hospital. Consult a
                        qualified healthcare professional for diagnosis and
                        treatment.
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
