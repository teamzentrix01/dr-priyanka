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

export default function CSectionSpecialistBuddhiVihar() {
  const faqs = [
    {
      q: "Who decides if I need a C-section?",
      a: "Your obstetrician, based on your health, your baby&apos;s condition and the progress of labour.",
    },
    {
      q: "How long is the hospital stay?",
      a: "It varies. Your doctor will explain what to expect in your case.",
    },
    {
      q: "How do I verify a specialist&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "When can I walk after surgery?",
      a: "Your team will advise. Gentle early movement is often encouraged when safe.",
    },
    {
      q: "How should I care for the wound?",
      a: "Follow your doctor&apos;s instructions exactly and avoid home remedies without asking.",
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
                C-Section Specialist Near Buddhi Vihar, Moradabad: Choosing Well
                and Planning for Recovery
              </h1>

              <p className="mb-4 text-gray-700">
                A caesarean is major abdominal surgery, and the weeks after it
                need as much planning as the operation. A good specialist and
                hospital guide you through the surgery, the hospital stay and
                the recovery at home. This guide explains how to choose a
                specialist and what aftercare usually involves. It is general
                information, not medical advice. It names no individual doctors,
                because I cannot verify or rank them, and only your own doctor
                can advise you on your surgery and recovery.{" "}
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
                When Might It Be Advised?
              </h2>

              <p className="mb-4 text-gray-700">
                Only your doctor can decide, based on your situation. Ask your
                doctor to explain the reason in plain language.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Certain pregnancy or health conditions</li>
                <li>The baby&apos;s position or wellbeing</li>
                <li>Labor not progressing as expected</li>
                <li>A previous surgical delivery, in some cases</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choose Early
              </h2>

              <p className="mb-4 text-gray-700">
                Decide on your doctor and hospital during pregnancy.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>You have time to compare options calmly.</li>
                <li>
                  You can plan for both normal and surgical delivery.
                </li>
                <li>
                  You can arrange recovery help in advance.
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
                <li>Years of experience in obstetrics and surgery</li>
                <li>The hospital where the doctor operates</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Does the doctor listen to your history and worries?
                </li>
                <li>Does the doctor explain in simple language?</li>
                <li>
                  Does the doctor discuss all options honestly?
                </li>
                <li>
                  Does the doctor avoid pressure or fear-based advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Specialist
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down, or take someone along.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Why is a C-section advised in my case, if it is?
                </li>
                <li>What type of anaesthesia is usual?</li>
                <li>How long is the hospital stay?</li>
                <li>
                  What does recovery involve, and who do I call with concerns?
                </li>
                <li>What does follow-up include?</li>
                <li>What are the total estimated costs?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Visit before your due date if possible.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Distance from home and night-time travel</li>
                <li>
                  Round-the-clock emergency and obstetric cover
                </li>
                <li>Anaesthesia, blood support and newborn care</li>
                <li>Trained nursing staff</li>
                <li>Clear billing and discharge process</li>
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
                Right After Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Your team will monitor you closely. Ask staff to explain each
                step.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>You are observed in a recovery area first.</li>
                <li>
                  Staff check your pain, bleeding and vital signs.
                </li>
                <li>
                  Your baby is usually brought to you when you are stable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pain Relief
              </h2>

              <p className="mb-4 text-gray-700">
                Pain control helps you move and feed your baby.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask what pain relief is planned and for how long.
                </li>
                <li>Take medicines exactly as prescribed.</li>
                <li>Tell staff if pain is not controlled.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Early Movement
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors often encourage gentle movement when it is safe. Follow
                your own doctor&apos;s advice on pace.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask when you may first sit and walk.</li>
                <li>Ask for help getting out of bed.</li>
                <li>
                  Support your abdomen as your team shows you.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Wound Care
              </h2>

              <p className="mb-4 text-gray-700">
                Your team will give specific instructions.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Keep the wound clean and dry as advised.</li>
                <li>
                  Do not apply creams or home remedies without asking.
                </li>
                <li>
                  Learn what a normal healing wound looks like.
                </li>
                <li>Know when to call the doctor.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs After Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor which symptoms need urgent attention. Contact
                your doctor or go to hospital promptly if these occur.
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
                <li>Foul-smelling discharge</li>
                <li>Persistent low mood or distress</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Feeding After a C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                Support helps many new mothers.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask the team about comfortable feeding positions that protect
                  the wound.
                </li>
                <li>Ask for help with latching early.</li>
                <li>
                  Seek advice if feeding is painful or difficult.
                </li>
                <li>Ask who to call after you go home.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery at Home
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery differs for every woman.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Rest, and accept help with housework and the baby.
                </li>
                <li>
                  Ask when lifting, driving and exercise are safe.
                </li>
                <li>
                  Eat regular meals and drink enough fluids, as advised.
                </li>
                <li>Attend all follow-up visits.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Tiredness and mood swings can be common.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Talk to someone you trust about how you feel.
                </li>
                <li>
                  Tell your doctor if low mood or anxiety lasts or worsens.
                </li>
                <li>
                  Share night duties with family when possible.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Hospital Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                The setting affects comfort during recovery. Planners such as{" "}
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
                  <strong>Calm:</strong> Quiet corridors and sound-softening
                  finishes.
                </li>
                <li>
                  <strong>Feeding Space:</strong> A comfortable, private corner
                  for feeding and rest.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs and a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for a written estimate covering surgeon, anaesthesia, room,
                nursing, medicines and newborn care. A second opinion is
                acceptable if time allows and you feel unsure. A good doctor
                will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask what happens to costs if the plan changes.
                </li>
                <li>
                  Check insurance acceptance and the claim process.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pressure to choose surgery without a clear reason
                </li>
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>Dismissing your questions</li>
                <li>Unclear costs and no written estimate</li>
                <li>Poor privacy or hygiene</li>
                <li>Ignoring warning signs after surgery</li>
                <li>Not arranging help at home</li>
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
                        healthcare professional for surgery and recovery advice.
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