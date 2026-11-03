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

export default function LaparoscopicSurgeonBuddhiVihar() {
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
      q: "How long is the hospital stay?",
      a: "It depends on the procedure. Your surgeon will explain.",
    },
    {
      q: "Is recovery always quick?",
      a: "Not always. It depends on the procedure and your health.",
    },
    {
      q: "When should I seek urgent help after surgery?",
      a: "For fever, severe pain, heavy bleeding or wound changes, contact your doctor immediately.",
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
                Laparoscopic Surgeon in Buddhi Vihar, Moradabad: Choosing Well
                and Planning Your Preparation and Recovery
              </h1>

              <p className="mb-4 text-gray-700">
                Choosing a surgeon is only part of the journey. Preparing well
                before surgery and knowing what recovery looks like can make the
                whole experience calmer. This guide explains how to choose a
                laparoscopic surgeon and how to plan each stage, from the days
                before surgery to follow-up. It is general information, not
                medical advice. It names no individual doctors, because I cannot
                verify or rank them, and only a qualified doctor can diagnose
                you and recommend treatment. Space Build works in interior
                planning, and its insight appears in the section on hospital
                environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Laparoscopic Surgery?
              </h2>

              <p className="mb-4 text-gray-700">
                It is a minimally invasive technique, often called keyhole
                surgery. Your doctor decides whether it suits your condition.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The surgeon makes a few small cuts instead of one large one.
                </li>
                <li>
                  A thin camera and fine instruments are passed through them.
                </li>
                <li>The surgeon works while watching a screen.</li>
                <li>
                  It is used for selected abdominal and pelvic conditions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Possible Benefits and Limits
              </h2>

              <p className="mb-4 text-gray-700">
                In suitable cases it may offer advantages, but it is not right
                for everyone. Ask what applies to your case.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Smaller cuts and less visible scarring</li>
                <li>
                  Often a shorter hospital stay and quicker return to routine
                </li>
                <li>Not every condition can be treated this way</li>
                <li>
                  The surgeon may need to switch to open surgery if required
                </li>
                <li>
                  Anaesthesia, bleeding and other surgical risks still apply
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Start with the Right Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Your first visit is usually to your treating doctor. Never
                self-diagnose from the internet.
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
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or treating specialist</li>
                <li>
                  Friends and relatives with similar experience
                </li>
                <li>Hospital listings</li>
                <li>Official medical council directories</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Verify Qualifications and Experience
              </h2>

              <p className="mb-4 text-gray-700">
                Credentials can be verified through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised surgical degree and training</li>
                <li>Registration with the relevant medical council</li>
                <li>Specific training in laparoscopic techniques</li>
                <li>Experience with your type of procedure</li>
                <li>The hospital where surgery would take place</li>
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
                <li>
                  Does the surgeon discuss alternatives, including not
                  operating?
                </li>
                <li>
                  Does the surgeon welcome questions and avoid rushing you?
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
                <li>
                  How long is the hospital stay and recovery?
                </li>
                <li>What follow-up will I need?</li>
                <li>What is the total estimated cost?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is sensible before surgery. A good surgeon will not be
                offended.
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
                Pre-Surgery Tests
              </h2>

              <p className="mb-4 text-gray-700">
                Surgeons usually advise checks before an operation. Ask why each
                test is needed and when results will be ready.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests</li>
                <li>Scans or other imaging</li>
                <li>Heart and anaesthesia fitness checks</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicines and Health Conditions
              </h2>

              <p className="mb-4 text-gray-700">
                Tell the team everything.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>List all medicines, supplements and allergies.</li>
                <li>
                  Mention existing conditions such as blood pressure or
                  diabetes.
                </li>
                <li>
                  Ask which medicines to continue or pause. Never decide this
                  yourself.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Week Before Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Your surgeon will give specific instructions.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow guidance on food, drink and medicines.</li>
                <li>Complete all tests on time.</li>
                <li>Arrange leave from work and household help.</li>
                <li>Ask a family member to stay with you.</li>
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
                <li>Ask about anything unclear.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Packing for the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Check your hospital for its own list.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Reports, scans, ID and insurance documents</li>
                <li>Comfortable, loose clothing</li>
                <li>Toiletries and personal items</li>
                <li>Phone, charger and important numbers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                On the Day of Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Arrive at the time advised.</li>
                <li>
                  Follow fasting and medicine instructions exactly.
                </li>
                <li>Remove jewellery and valuables as asked.</li>
                <li>
                  Tell staff about any new symptoms such as fever or cold.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Surgery: Hospital Stay
              </h2>

              <p className="mb-4 text-gray-700">
                Some procedures are day-care, while others need a longer stay.
                Your surgeon will explain.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>You are monitored in a recovery area first.</li>
                <li>
                  Staff check pain, vital signs and wounds.
                </li>
                <li>Ask when you may drink, eat and walk.</li>
                <li>Report pain or discomfort early.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery at Home
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery differs from person to person. Report fever, severe
                pain, heavy bleeding, wound redness or discharge, or vomiting
                promptly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow wound care and activity advice.</li>
                <li>Take medicines exactly as prescribed.</li>
                <li>Rest, eat well and accept help.</li>
                <li>
                  Ask when driving, lifting and exercise are safe.
                </li>
                <li>Attend all follow-up visits.</li>
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
                <li>Easy access for family members</li>
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
                <li>
                  <strong>Order:</strong> Clear signs and an organised
                  reception.
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
                <li>Guaranteed results or unrealistic promises</li>
                <li>
                  Dismissing questions or second opinions
                </li>
                <li>Unclear costs and no written estimate</li>
                <li>Unverifiable qualifications</li>
                <li>
                  Skipping tests, follow-up or recovery planning
                </li>
                <li>
                  Relying on online advice instead of a doctor
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Buddhi
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
                      <p>Buddhi Vihar, Moradabad, Uttar Pradesh, India</p>
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