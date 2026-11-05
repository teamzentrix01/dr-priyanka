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

export default function CSectionSpecialistGandhiNagar() {
  const faqs = [
    {
      q: "Who decides if I need a C-section?",
      a: "Your obstetrician, based on your health, your baby&apos;s condition and the progress of labour.",
    },
    {
      q: "When should I start preparing for a planned C-section?",
      a: "As soon as the plan is discussed. Your doctor will give the timeline.",
    },
    {
      q: "What should I ask about costs?",
      a: "Ask for a written estimate and what happens if the plan changes.",
    },
    {
      q: "How do I verify a specialist&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "How can the home be prepared for recovery?",
      a: "Keep essentials within easy reach, clear walkways and arrange help.",
    },
    {
      q: "When should I seek urgent help after surgery?",
      a: "For fever, heavy bleeding, severe pain or wound changes, contact your doctor immediately.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, if time allows and you feel unsure.",
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
                C-Section Specialist Near Gandhi Nagar, Moradabad: A Preparation
                Timeline and Family Checklist
              </h1>

              <p className="mb-4 text-gray-700">
                A caesarean is major surgery, and when it is planned in advance,
                preparation can make the experience calmer. Knowing what to do
                and when helps the mother and her family feel in control. This
                guide gives a general timeline and checklist. It is general
                information, not medical advice. It names no individual doctors
                or hospitals, because I cannot verify or rank them, and only
                your own doctor decides whether a C-section is needed and how to
                prepare.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                sections on hospital and home environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Performs a C-Section?
              </h2>

              <p className="mb-4 text-gray-700">
                A team works together. Ask who will be in your team and who
                covers if your doctor is unavailable.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  An obstetrician or gynaecologist performs the surgery.
                </li>
                <li>
                  An anaesthetist manages pain relief and monitoring.
                </li>
                <li>Nurses and assistants support the operation.</li>
                <li>A newborn care team may attend the baby.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planned and Unplanned C-Sections
              </h2>

              <p className="mb-4 text-gray-700">
                Only your doctor decides. Even if you plan a normal delivery, it
                helps to know the basics of preparation.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Planned:</strong> Advised in advance because of a
                  medical reason.
                </li>
                <li>
                  <strong>Unplanned:</strong> Decided during labour if
                  circumstances change.
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
                <li>Your family doctor or earlier gynaecologist</li>
                <li>Friends and relatives with good experiences</li>
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
                <li>Experience in obstetrics and surgery</li>
                <li>The hospital where the doctor operates</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Does the doctor explain the reason in plain language?
                </li>
                <li>Does the doctor discuss options honestly?</li>
                <li>Does the doctor welcome questions?</li>
                <li>
                  Does the doctor avoid pressure or fear-based advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Several Weeks Before: Understand the Plan
              </h2>

              <p className="mb-4 text-gray-700">
                Consider a second opinion if you feel unsure and time allows.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask why a C-section is advised and when it is planned.
                </li>
                <li>Ask what anaesthesia is usual.</li>
                <li>Ask about hospital stay and recovery.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Several Weeks Before: Tests and Checks
              </h2>

              <p className="mb-4 text-gray-700">
                Ask when results will be reviewed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Complete the blood tests and scans your doctor advises.
                </li>
                <li>
                  Attend the pre-anaesthesia check, if requested.
                </li>
                <li>Report any new symptoms promptly.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Several Weeks Before: Paperwork and Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Gather ID and insurance papers into one folder.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Request a written estimate covering surgeon, anaesthesia,
                  room, nursing and newborn care.
                </li>
                <li>
                  Ask what happens to costs if the plan changes.
                </li>
                <li>
                  Check insurance coverage, pre-authorisation and the claim
                  process.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Visit the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Note privacy, hygiene and access.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Check emergency and newborn care arrangements.</li>
                <li>
                  Look at the recovery area and postnatal rooms.
                </li>
                <li>Ask about companion and visitor rules.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Week Before: Arrange Help
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Decide who stays with you at the hospital.</li>
                <li>Plan who helps at home for the first weeks.</li>
                <li>Arrange care for older children or elders.</li>
                <li>
                  Save emergency numbers on several phones.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Week Before: Hospital Bag
              </h2>

              <p className="mb-4 text-gray-700">
                Check the hospital&apos;s own list as well.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Documents folder, ID and insurance papers</li>
                <li>Loose, comfortable clothing and nightwear</li>
                <li>Toiletries and sanitary supplies</li>
                <li>Baby clothes, wraps and nappies</li>
                <li>
                  Phone, charger and snacks allowed by the hospital
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Instructions Before Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor will give specific instructions. Do not rely on
                general lists over your own doctor&apos;s advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow guidance on food, drink and medicines exactly.
                </li>
                <li>Confirm the admission time and place.</li>
                <li>
                  Tell staff about any new fever, cold or symptoms.
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
                Prepare the Home for Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                Small changes help a lot.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Keep essentials within easy reach, at waist height.
                </li>
                <li>
                  Arrange a comfortable resting spot near a washroom.
                </li>
                <li>
                  Keep walkways clear, well lit and non-slip.
                </li>
                <li>
                  Prepare a baby-care corner so the mother does not need to bend
                  or carry far.
                </li>
                <li>Stock simple, easy meals.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Who will assist, and who covers if you are unavailable?
                </li>
                <li>What pain relief will be used afterwards?</li>
                <li>
                  When can I first walk and feed my baby?
                </li>
                <li>What warning signs need urgent attention?</li>
                <li>
                  How does follow-up work, and who do I call with concerns?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Surgery: What to Expect
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your team for specifics. Report fever, heavy bleeding,
                severe pain or wound changes promptly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Monitoring in a recovery area</li>
                <li>
                  Pain relief and gentle early movement when safe
                </li>
                <li>Feeding support</li>
                <li>Wound care instructions</li>
                <li>Discharge advice and follow-up date</li>
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
                  <strong>Privacy:</strong> Screens and curtains protect you in
                  shared areas.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive beds, a seat for a
                  companion, soft lighting and good ventilation.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  clean washrooms.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, non-slip floors,
                  wide doors and lift access.
                </li>
                <li>
                  <strong>Feeding Space:</strong> A comfortable, private corner
                  for feeding and rest.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Preparation
              </h2>

              <p className="mb-4 text-gray-700">
                Learn what to expect, so surprises feel smaller.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Talk about fears with your doctor or someone you trust.
                </li>
                <li>
                  Share night duties with family after birth.
                </li>
                <li>Tell your doctor if low mood or anxiety lasts.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pressure to choose surgery without a clear reason
                </li>
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>
                  Dismissing your questions or a second opinion
                </li>
                <li>Unclear costs and no written estimate</li>
                <li>Poor privacy or hygiene</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Leaving paperwork and insurance checks to the last day
                </li>
                <li>Not arranging help at home</li>
                <li>Packing the bag too late</li>
                <li>Ignoring warning signs after surgery</li>
                <li>Self-medicating from online advice</li>
                <li>Skipping follow-up visits</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning Near Gandhi
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
                        qualified healthcare professional for surgery and
                        recovery advice.
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
                      <p>Near Gandhi Nagar, Moradabad, Uttar Pradesh, India</p>
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