
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

export default function CSectionDoctorRamgangaVihar() {
  const faqs = [
    {
      q: "Who decides if I need a C-section?",
      a: "Your obstetrician, based on your health, your baby&apos;s condition and the progress of labour.",
    },
    {
      q: "Can a C-section be planned in advance?",
      a: "Yes, in some cases. Your doctor will explain the reasons and timing.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, if time allows and you feel unsure.",
    },
    {
      q: "What should I ask about the hospital?",
      a: "Ask about emergency care, anaesthesia, blood support and newborn care.",
    },
    {
      q: "How long is recovery?",
      a: "It varies. Your doctor will give guidance for your case.",
    },
    {
      q: "When should I seek urgent help after surgery?",
      a: "For fever, heavy bleeding, severe pain or wound changes, contact your doctor immediately.",
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
                C-Section Doctor in Ramganga Vihar, Moradabad: How to Choose the
                Right Doctor and Hospital
              </h1>

              <p className="mb-4 text-gray-700">
                A caesarean delivery, or C-section, is a major surgery that
                helps deliver a baby safely when it is the best option. Some are
                planned in advance, while others are decided during labour.
                Either way, the doctor and hospital you choose matter a great
                deal. This guide explains the basics, how to judge a doctor and
                facility, and how to prepare. It is general information, not
                medical advice. It names no individual doctors, because I cannot
                verify or rank them, and only a qualified doctor can advise you
                on your pregnancy and delivery.{" "}
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
                What Is a C-Section?
              </h2>

              <p className="mb-4 text-gray-700">
                A caesarean is a surgical delivery. The right method is the one
                that is safest for you and your baby.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The baby is delivered through a cut in the abdomen and uterus.
                </li>
                <li>
                  It is performed in an operation theatre by a trained team.
                </li>
                <li>
                  It may be planned or become necessary during labour.
                </li>
                <li>
                  Recovery needs more time than most routine procedures.
                </li>
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
                <li>Previous surgical delivery in some cases</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Performs a C-Section?
              </h2>

              <p className="mb-4 text-gray-700">
                A team works together. Ask who will be in your team and who
                covers emergencies.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  An obstetrician or gynaecologist performs the surgery.
                </li>
                <li>
                  An anaesthetist manages pain relief and monitoring.
                </li>
                <li>Nurses and assistants support the operation.</li>
                <li>
                  A paediatrician or newborn care team may attend the baby.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choose Early
              </h2>

              <p className="mb-4 text-gray-700">
                Decide on your doctor and hospital during pregnancy. No one can
                predict every outcome, so prepare for either route.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Early antenatal visits build trust and history.</li>
                <li>You have time to compare options calmly.</li>
                <li>
                  You can plan for both normal and surgical delivery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Doctors
              </h2>

              <p className="mb-4 text-gray-700">
                Gather names from reliable sources. Aim for two or three names
                to compare.
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
                Look for clear, checkable details. Credentials can be verified
                through the council&apos;s records.
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

              <p className="mb-4 text-gray-700">
                You will rely on the doctor at a vulnerable time. You should
                feel respected and informed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Does the doctor listen to your history and worries?
                </li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>
                  Does the doctor discuss both options honestly?
                </li>
                <li>
                  Does the doctor avoid pressure or fear-based advice?
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
                <li>
                  Why is a C-section advised in my case, if it is?
                </li>
                <li>
                  What are the benefits and risks compared with other options?
                </li>
                <li>What type of anaesthesia is usual?</li>
                <li>
                  Who will assist, and who covers if you are unavailable?
                </li>
                <li>How long is the hospital stay?</li>
                <li>What does recovery usually involve?</li>
                <li>What are the total estimated costs?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is sensible when surgery is advised and you
                feel unsure. A good doctor will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Compare explanations, not only recommendations.
                </li>
                <li>Carry the same reports to each visit.</li>
                <li>
                  Do not delay urgent care while seeking another opinion.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                The hospital matters as much as the doctor. Visit before your
                due date if possible.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Distance from your home and travel time</li>
                <li>Emergency and newborn care arrangements</li>
                <li>Availability of anaesthesia and blood support</li>
                <li>Trained nursing and support staff</li>
                <li>Clear billing and discharge process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ask About Facilities
              </h2>

              <p className="mb-4 text-gray-700">
                Check what the hospital offers before making a decision.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A clean, well-maintained operation theatre area
                </li>
                <li>Recovery space with monitoring</li>
                <li>Comfortable postnatal rooms</li>
                <li>Newborn care area and support</li>
                <li>Lift access and wide doors for stretchers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy and Dignity
              </h2>

              <p className="mb-4 text-gray-700">
                Privacy matters before, during and after surgery. If privacy
                feels weak, consider another hospital.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Staff should explain what they are doing and ask before
                  examining.
                </li>
                <li>
                  Screens and curtains should protect you in shared areas.
                </li>
                <li>
                  Registration and discussions should not be overheard.
                </li>
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
                  <strong>Comfort:</strong> Supportive beds and chairs, soft
                  lighting and good ventilation.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, non-slip floors and
                  accessible washrooms.
                </li>
                <li>
                  <strong>Calm:</strong> Quiet corridors and rooms that reduce
                  noise.
                </li>
                <li>
                  <strong>Order:</strong> Clear signs and an organised
                  reception.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for a Planned C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor will give specific instructions. Follow your own
                doctor&apos;s advice, not general lists.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow guidance on food, drink and medicines before surgery.
                </li>
                <li>Complete tests and checks on time.</li>
                <li>Arrange a family member to stay with you.</li>
                <li>
                  Pack comfortable clothes, documents and baby essentials.
                </li>
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
                Recovery After Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery differs from person to person. Follow your doctor&apos;s
                instructions and attend every follow-up visit.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow wound care and activity advice.</li>
                <li>Take medicines exactly as prescribed.</li>
                <li>
                  Ask your doctor when lifting, driving and exercise are safe.
                </li>
                <li>Rest, eat well and accept help at home.</li>
                <li>Attend all follow-up visits.</li>
                <li>
                  Report fever, heavy bleeding, severe pain or wound changes
                  promptly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                A surgical birth can bring mixed feelings. Support and open
                communication can help.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Talk to your doctor or someone you trust about how you feel.
                </li>
                <li>Ask for support with feeding and newborn care.</li>
                <li>Seek help if low mood or anxiety continues.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask early and clearly. Request a written estimate where
                possible.
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
                <li>Dismissing your questions or a second opinion</li>
                <li>Unclear costs and no written estimate</li>
                <li>Poor privacy or hygiene</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Leaving hospital planning until the last moment
                </li>
                <li>Skipping antenatal checkups</li>
                <li>
                  Not asking about anaesthesia and emergencies
                </li>
                <li>Ignoring recovery planning</li>
                <li>Self-medicating from online advice</li>
                <li>Not asking about costs</li>
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
                        healthcare professional for pregnancy and delivery
                        advice.
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