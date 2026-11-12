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

export default function FemaleGynaecologistLajpatNagar() {
  const faqs = [
    {
      q: "What is perimenopause?",
      a: "The transition years before periods stop, when cycles and symptoms begin to change.",
    },
    {
      q: "Is bleeding after menopause normal?",
      a: "No. Any bleeding after menopause needs prompt medical review.",
    },
    {
      q: "Can I ask for a female gynaecologist?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "Do I still need check-ups after menopause?",
      a: "Yes. Ask your doctor which screening suits you.",
    },
    {
      q: "Can symptoms be managed?",
      a: "Often, yes. Your doctor will discuss options for your case.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially if you feel unsure about the advice.",
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
                Female Gynaecologist Near Lajpat Nagar, Moradabad: Care During
                Perimenopause and Menopause
              </h1>

              <p className="mb-4 text-gray-700">
                Midlife brings changes that many women are not told about in
                advance. Cycles shift, sleep suffers, moods swing and new
                questions about health appear. A female gynaecologist can be a
                comfortable guide through this stage. This guide explains what
                to expect, when to seek help and how to choose a doctor and
                clinic. It is general information, not medical advice. It names
                no individual doctors, because I cannot verify or rank them, and
                only a qualified doctor can diagnose you or advise treatment.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                sections on clinic environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding the Stages
              </h2>

              <p className="mb-4 text-gray-700">
                Terms are often confused. The timing and experience differ for
                every woman.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Perimenopause:</strong> The years of transition, when
                  cycles and symptoms begin to change.
                </li>
                <li>
                  <strong>Menopause:</strong> Reached when periods have stopped
                  for a full year.
                </li>
                <li>
                  <strong>Postmenopause:</strong> The years afterwards.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Changes
              </h2>

              <p className="mb-4 text-gray-700">
                Not everyone has all of these. A doctor can tell you which are
                likely related and which need checking.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycles that become shorter, longer or unpredictable
                </li>
                <li>Changes in flow</li>
                <li>Hot flushes and night sweats</li>
                <li>Sleep trouble</li>
                <li>Mood changes or irritability</li>
                <li>Vaginal dryness or discomfort</li>
                <li>Changes in energy or concentration</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Female Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Many women prefer one for intimate topics. Ask when booking
                whether a female doctor is available.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Easier to discuss dryness, discomfort and intimacy.
                </li>
                <li>Greater comfort during examinations.</li>
                <li>
                  Qualifications and listening matter as much as gender.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs That Need Prompt Attention
              </h2>

              <p className="mb-4 text-gray-700">
                See a doctor soon if you notice any of the following. Bleeding
                after menopause should never be ignored.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Any bleeding after periods have stopped for a year
                </li>
                <li>Very heavy or prolonged bleeding</li>
                <li>Bleeding between periods or after intimacy</li>
                <li>Persistent pelvic pain</li>
                <li>Unusual discharge</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Urgent Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Seek urgent care for the following. Do not wait for an
                appointment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden severe pain</li>
                <li>
                  Bleeding that soaks protection every hour
                </li>
                <li>Fainting or dizziness</li>
                <li>Chest pain or breathlessness</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Keep a Symptom Diary
              </h2>

              <p className="mb-4 text-gray-700">
                Two or three months of notes helps your doctor greatly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Record period dates and changes in flow.</li>
                <li>Note hot flushes, sleep and mood.</li>
                <li>Mark anything unusual.</li>
                <li>Note how symptoms affect daily life.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Routine Check-Ups and Screening
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor which checks suit your age and history. Do not
                skip screening because you feel well.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pelvic and breast examinations, as advised</li>
                <li>Screening tests recommended for your age</li>
                <li>
                  Checks of general health, such as blood pressure and bone
                  health, as advised
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Managing Symptoms in General
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor decides what suits you. Never start or stop hormonal
                or other medicines without medical advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lifestyle guidance on food, activity and sleep
                </li>
                <li>
                  Medicines or other options for troublesome symptoms, where
                  suitable
                </li>
                <li>Support for mood and wellbeing</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bone and Heart Health
              </h2>

              <p className="mb-4 text-gray-700">
                Midlife is a good time to ask.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask whether any checks are advised for you.</li>
                <li>
                  Ask about activity and food that support general health.
                </li>
                <li>Discuss family history openly.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Mood changes are common, but persistent low mood needs
                attention. If you feel unsafe, seek immediate help.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk to someone you trust.</li>
                <li>
                  Tell your doctor if worry or sadness affects daily life.
                </li>
                <li>Support and treatment are available.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Intimacy and Comfort
              </h2>

              <p className="mb-4 text-gray-700">
                Dryness and discomfort are common and treatable.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>You can raise this without embarrassment.</li>
                <li>
                  Ask your doctor about safe options for your case.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Doctors
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
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
                <li>Years of experience in gynaecology</li>
                <li>Experience with midlife concerns</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                You should leave feeling heard.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does she listen without judgement?</li>
                <li>Does she take your symptoms seriously?</li>
                <li>Does she explain in simple language?</li>
                <li>
                  Does she avoid pressure or fear-based advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Which symptoms are likely related to this stage?</li>
                <li>Which tests or screening do I need?</li>
                <li>
                  What are my options, with benefits and risks?
                </li>
                <li>Which lifestyle changes may help me?</li>
                <li>
                  Which symptoms should make me call urgently?
                </li>
                <li>When should I return for follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consent and Dignity
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The doctor should explain what will be done and why.
                </li>
                <li>Permission should be asked before any examination.</li>
                <li>
                  You can ask for a female staff member to be present.
                </li>
                <li>You can ask to pause or stop.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
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
                  <strong>Privacy:</strong> Consultation doors do not open onto
                  the waiting area, and registration is discreet.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  clean washrooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, soft lighting
                  and good ventilation.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors,
                  non-slip floors and accessible washrooms.
                </li>
                <li>
                  <strong>Sound:</strong> Rooms that keep conversations private.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs and Second Opinions
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is acceptable if you feel unsure, and a good
                doctor will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask for an itemised bill covering consultation, tests and
                  follow-up.
                </li>
                <li>Check insurance acceptance, if relevant.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Dismissing symptoms as &quot;just age&quot;</li>
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or supplements</li>
                <li>
                  Examination without explanation or permission
                </li>
                <li>Unclear costs and unverifiable qualifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ignoring bleeding after menopause</li>
                <li>Skipping screening because you feel well</li>
                <li>
                  Starting hormonal products without medical advice
                </li>
                <li>Hiding low mood</li>
                <li>
                  Relying on online advice instead of a doctor
                </li>
                <li>Delaying a visit out of embarrassment</li>
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