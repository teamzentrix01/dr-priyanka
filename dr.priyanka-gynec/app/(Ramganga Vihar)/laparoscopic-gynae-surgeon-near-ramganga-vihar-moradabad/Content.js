
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

export default function LaparoscopicGynaecologicalSurgeonRamgangaVihar() {
  const faqs = [
    {
      q: "Is laparoscopic surgery suitable for everyone?",
      a: "No. Your doctor decides based on your condition and health.",
    },
    {
      q: "Which doctor should I see first?",
      a: "Start with a gynaecologist, who can refer you to a surgeon if needed.",
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
                Laparoscopic Gynaecological Surgeon Near Ramganga Vihar,
                Moradabad: How to Find and Choose the Right Specialist
              </h1>

              <p className="mb-4 text-gray-700">
                Being advised surgery for a gynaecological condition is
                stressful, and choosing the surgeon adds to the worry.
                Laparoscopic, or keyhole, techniques are used for some
                gynaecological procedures, but not every case suits them. This
                guide explains the basics, how to judge a surgeon and hospital,
                and how to prepare. It is general information, not medical
                advice. It names no individual doctors, because I cannot verify
                or rank them, and only a qualified doctor can diagnose you and
                recommend treatment.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                section on hospital environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Laparoscopic Gynaecological Surgery?
              </h2>

              <p className="mb-4 text-gray-700">
                It is a minimally invasive approach. Your doctor decides whether
                it suits your condition.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The surgeon makes a few small cuts in the abdomen.
                </li>
                <li>
                  A thin camera and fine instruments are passed through them.
                </li>
                <li>The surgeon works while watching a screen.</li>
                <li>
                  It is used for selected pelvic and uterine conditions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Possible Benefits
              </h2>

              <p className="mb-4 text-gray-700">
                In suitable cases, it may offer some advantages over open
                surgery. Benefits depend on your condition and general health,
                so ask what applies to you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Smaller cuts and less visible scarring</li>
                <li>Often a shorter hospital stay</li>
                <li>
                  Often a quicker return to routine activity
                </li>
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
                  The surgeon may need to switch to open surgery if required.
                </li>
                <li>Anaesthesia and bleeding risks apply.</li>
                <li>
                  Complications can occur even with skilled teams.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is a Surgeon Needed?
              </h2>

              <p className="mb-4 text-gray-700">
                Only your gynaecologist can advise. Ask your doctor why surgery
                is recommended in your case.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Surgery is one option among several.</li>
                <li>
                  Some conditions are monitored or treated with medicines first.
                </li>
                <li>
                  Surgery may be advised when symptoms are significant or other
                  options are unsuitable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Start with Your Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                Your first step is usually a consultation. Never self-diagnose
                from the internet.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The doctor examines you and advises on tests.</li>
                <li>
                  They refer you to a surgical specialist if needed.
                </li>
                <li>Bring all earlier reports and scans.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Surgeons
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your gynaecologist or family doctor</li>
                <li>Friends and relatives with similar experience</li>
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
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Specific training in laparoscopic techniques</li>
                <li>Hospital where the surgery would take place</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Check Relevant Experience
              </h2>

              <p className="mb-4 text-gray-700">
                Honest, specific answers are a good sign.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  How often does the surgeon perform this procedure?
                </li>
                <li>
                  What are typical outcomes and recovery times?
                </li>
                <li>How are complications handled?</li>
                <li>Who assists, and who covers emergencies?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                You should leave informed, not pressured.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the surgeon listen to your full history?</li>
                <li>Does the surgeon explain in simple language?</li>
                <li>Does the surgeon welcome questions?</li>
                <li>
                  Does the surgeon discuss alternatives, including not
                  operating?
                </li>
                <li>Does the surgeon avoid rushing you?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Female or Male Surgeon
              </h2>

              <p className="mb-4 text-gray-700">
                This is a personal preference. Choose the person who helps you
                speak openly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask when booking whether a female surgeon is available.
                </li>
                <li>
                  Request a female staff member during examinations if you wish.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Surgeon
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down, or take someone along.
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
                <li>
                  <strong>Order:</strong> Clear signs and an organised
                  reception.
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
                Consent and Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                Understand what will be done, the risks and expected recovery
                before signing.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Read consent forms carefully and ask about anything unclear.
                </li>
                <li>Follow wound care and activity advice after surgery.</li>
                <li>Attend all follow-up visits.</li>
                <li>
                  Report fever, severe pain or unusual symptoms promptly.
                </li>
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
                Contact Space Build — Healthcare Interior Planning in Ramganga
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
                      <p>Ramganga Vihar, Moradabad, Uttar Pradesh, India</p>
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