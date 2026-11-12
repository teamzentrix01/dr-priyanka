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

export default function CSectionSurgeonLajpatNagar() {
  const faqs = [
    {
      q: "Who decides if I need a C-section?",
      a: "Your obstetrician, based on your health, your baby&apos;s condition and the progress of labour.",
    },
    {
      q: "What happens right after surgery?",
      a: "You are monitored in a recovery area, and staff check pain, bleeding and vital signs.",
    },
    {
      q: "When can I walk?",
      a: "Your team will advise. Gentle early movement is often encouraged when safe.",
    },
    {
      q: "Is feeding support available?",
      a: "Ask the team for help with positions and latching before discharge.",
    },
    {
      q: "How do I verify a surgeon&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "When should I seek urgent help?",
      a: "For fever, heavy bleeding, severe pain or wound changes, tell the team or your doctor immediately.",
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
                C-Section Surgeon Near Lajpat Nagar, Moradabad: What the First
                48 Hours in Hospital Usually Involve
              </h1>

              <p className="mb-4 text-gray-700">
                The first two days after a caesarean shape the rest of recovery.
                Knowing what to expect helps the mother and her family ask the
                right questions and feel less anxious. This guide gives a
                general overview and a checklist for choosing a surgeon and
                hospital. It is general information, not medical advice. It
                names no individual doctors or hospitals, because I cannot
                verify or rank them, and only your own surgeon and care team can
                tell you what applies to your case.{" "}
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
                Who Performs a C-Section?
              </h2>

              <p className="mb-4 text-gray-700">
                A team works together. Ask who will be in your team and who
                covers if your surgeon is unavailable.
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
                Choosing a Surgeon
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
                <li>The hospital where the surgeon operates</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is acceptable if time allows.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Does the surgeon explain the reason for surgery in plain
                  language?
                </li>
                <li>Does the surgeon welcome questions?</li>
                <li>Does the surgeon discuss recovery honestly?</li>
                <li>Does the surgeon avoid pressure?</li>
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
                  What anaesthesia is usual, and what will I feel?
                </li>
                <li>What pain relief will be given afterwards?</li>
                <li>
                  When can I first sit, walk and feed my baby?
                </li>
                <li>How long is the usual stay?</li>
                <li>What warning signs need urgent attention?</li>
                <li>What are the estimated costs?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Immediately After Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Your team will guide each step. Ask staff to explain what they
                are doing.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>You are observed in a recovery area first.</li>
                <li>
                  Staff check pain, bleeding and vital signs regularly.
                </li>
                <li>
                  Your baby is usually brought to you once you are stable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pain Relief
              </h2>

              <p className="mb-4 text-gray-700">
                Good pain control helps you move and feed your baby. Do not
                take extra medicines without asking.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask what is planned and for how long.</li>
                <li>Tell staff early if pain is not controlled.</li>
                <li>Take medicines exactly as prescribed.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Eating and Drinking
              </h2>

              <p className="mb-4 text-gray-700">
                Timing depends on your case. Report nausea or vomiting.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask when you may drink and eat.</li>
                <li>Follow the team&apos;s instructions exactly.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Early Movement
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors often encourage gentle movement when it is safe. Move at
                the pace your team advises.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask when you may first sit and walk.</li>
                <li>Ask staff for help getting out of bed.</li>
                <li>
                  Support your abdomen as your team shows you.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Catheter and Drips
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask what each tube or drip is for.</li>
                <li>Ask when they will be removed.</li>
                <li>Report discomfort at the sites.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Wound Care in Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Staff check the dressing regularly. Do not touch or adjust the
                dressing unless told.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask what a normal healing wound looks like.
                </li>
                <li>
                  Report any bleeding through the dressing, or new pain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Feeding Your Baby
              </h2>

              <p className="mb-4 text-gray-700">
                Support is available. Ask who to call after you go home.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask the team for comfortable positions that protect the wound.
                </li>
                <li>Ask for help with latching early.</li>
                <li>
                  Report painful or difficult feeding promptly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Newborn Care in Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Keep your baby&apos;s records safe.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask about checks the baby will have.</li>
                <li>Learn basic care from the nurses.</li>
                <li>
                  Ask about feeding, cord care and the vaccination schedule.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Role of the Companion
              </h2>

              <p className="mb-4 text-gray-700">
                Stay available for practical help. Respect rest and visiting
                rules.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Learn the warning signs and the team&apos;s instructions.
                </li>
                <li>Keep documents and medicine lists in order.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor for your personal list. Tell the team
                immediately if these occur.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever</li>
                <li>Very heavy bleeding</li>
                <li>Severe or worsening pain</li>
                <li>
                  Redness, swelling or discharge from the wound
                </li>
                <li>
                  Calf pain or swelling, chest pain or breathlessness
                </li>
                <li>Persistent low mood or distress</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Before Discharge
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for and write down the following.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A written discharge summary</li>
                <li>Medicines, doses and timings</li>
                <li>Wound care and activity instructions</li>
                <li>
                  Follow-up date and who to call with concerns
                </li>
                <li>Newborn care and feeding advice</li>
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
                  companion where allowed, soft lighting and good ventilation.
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
                <li>
                  <strong>Calm:</strong> Quiet corridors and sound-softening
                  finishes.
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
                <li>Surgeon, anaesthesia and hospital charges</li>
                <li>Room and nursing charges</li>
                <li>Tests, medicines and newborn care</li>
                <li>Costs if the plan changes</li>
                <li>Insurance acceptance and claim process</li>
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
                <li>Dismissing your questions or pain</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>Poor privacy or hygiene</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Not asking about pain relief plans</li>
                <li>
                  Staying in bed too long without asking about movement
                </li>
                <li>Ignoring warning signs</li>
                <li>
                  Leaving without written discharge instructions
                </li>
                <li>Arranging no help at home</li>
                <li>Skipping follow-up visits</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning Near Lajpat
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
                      <p>Near Lajpat Nagar, Moradabad, Uttar Pradesh, India</p>
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