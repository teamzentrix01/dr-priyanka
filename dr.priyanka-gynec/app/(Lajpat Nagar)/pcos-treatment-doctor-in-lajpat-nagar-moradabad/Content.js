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

export default function PCOSTreatmentDoctorLajpatNagar() {
  const faqs = [
    {
      q: "Is PCOS the same for everyone?",
      a: "No. Symptoms and care vary from person to person.",
    },
    {
      q: "Should I mention acne and hair concerns?",
      a: "Yes. They can be part of PCOS and deserve attention.",
    },
    {
      q: "Do I need a dermatologist or dietitian?",
      a: "Your doctor will advise who may help in your case.",
    },
    {
      q: "Can I use over-the-counter products on my own?",
      a: "Ask your doctor first, especially for hair and skin treatments.",
    },
    {
      q: "Can I ask for a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Check the relevant medical council&apos;s records and ask about training.",
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
                PCOS Treatment Doctor in Lajpat Nagar, Moradabad: Talking About
                Skin, Hair and Weight Concerns
              </h1>

              <p className="mb-4 text-gray-700">
                For many women, the hardest part of PCOS is not the periods. It
                is acne that will not clear, hair changes and weight that feels
                out of control, all of which affect confidence. These concerns
                are real and deserve medical attention, not shame. This guide
                explains how to raise them and choose a doctor. It is general
                information, not medical advice. It names no individual doctors,
                because I cannot verify or rank them, and only a qualified
                doctor can diagnose you and advise treatment.{" "}
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
                What Is PCOS?
              </h2>

              <p className="mb-4 text-gray-700">
                PCOS stands for polycystic ovary syndrome, a common hormonal
                condition. Never self-diagnose from symptoms alone.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It can affect periods, ovulation and hormone levels.
                </li>
                <li>Symptoms vary widely between women.</li>
                <li>
                  A doctor diagnoses it using history, examination and tests.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Skin, Hair and Weight Matter
              </h2>

              <p className="mb-4 text-gray-700">
                These concerns are not vanity. Say them out loud at your visit.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>They can affect confidence and mood.</li>
                <li>
                  They may signal hormonal changes your doctor should know
                  about.
                </li>
                <li>
                  Treating them early often feels more manageable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Acne and Oily Skin
              </h2>

              <p className="mb-4 text-gray-700">
                Do not start prescription-type products without a doctor&apos;s
                guidance.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note when acne flares and how long it lasts.</li>
                <li>
                  Avoid squeezing or using harsh products without advice.
                </li>
                <li>
                  Ask whether a dermatologist should be involved.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Excess Hair Growth
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor before choosing any treatment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Mention where hair is growing and since when.</li>
                <li>
                  Ask which options exist and how long they take to work.
                </li>
                <li>
                  Be cautious of products promising quick, permanent results.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scalp Hair Thinning
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Note when you first noticed it and how fast it is changing.
                </li>
                <li>
                  Mention recent illness, stress, diet changes or medicines.
                </li>
                <li>
                  Ask whether blood tests or a skin and hair specialist are
                  advised.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Weight Concerns
              </h2>

              <p className="mb-4 text-gray-700">
                Advice must be personal. Ask what realistic, steady goals look
                like for you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Share your concern honestly without self-blame.
                </li>
                <li>
                  Ask your doctor or a qualified dietitian for a personal plan.
                </li>
                <li>
                  Avoid crash diets, fasting fads and unverified supplements.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Self-Image and Mood
              </h2>

              <p className="mb-4 text-gray-700">
                It is normal to feel low or frustrated. If you feel unsafe, seek
                immediate help.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk to someone you trust.</li>
                <li>
                  Tell your doctor if low mood or anxiety affects daily life.
                </li>
                <li>Support and counselling are available.</li>
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
                <li>Very heavy bleeding</li>
                <li>Fainting or dizziness</li>
                <li>Heavy bleeding in possible pregnancy</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Possible Care Team
              </h2>

              <p className="mb-4 text-gray-700">
                Depending on your needs, ask your doctor who is needed in your
                case.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Gynaecologist:</strong> Periods, ovulation and
                  fertility.
                </li>
                <li>
                  <strong>Endocrinologist:</strong> Hormonal or metabolic
                  concerns, usually by referral.
                </li>
                <li>
                  <strong>Dermatologist:</strong> Skin and hair concerns.
                </li>
                <li>
                  <strong>Dietitian:</strong> Personal food guidance.
                </li>
                <li>
                  <strong>Counsellor:</strong> Emotional support.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing a Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or earlier gynaecologist</li>
                <li>
                  Friends and relatives with similar experience
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
                <li>Experience with PCOS</li>
                <li>
                  Willingness to coordinate with other specialists
                </li>
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
                <li>Does the doctor listen without judgement?</li>
                <li>
                  Does the doctor take skin, hair and weight concerns
                  seriously?
                </li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor avoid blame and pressure?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Female or Male Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                This is a personal preference.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask when booking whether a female doctor is available.
                </li>
                <li>
                  You can request a female staff member during examinations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Keep a Concerns Diary
              </h2>

              <p className="mb-4 text-gray-700">
                Bring it to each visit.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Record period dates and symptoms.</li>
                <li>
                  Take dated photos of skin or hair changes if you are
                  comfortable.
                </li>
                <li>Note products or medicines used.</li>
                <li>Write your questions.</li>
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
                <li>Which of my symptoms are likely linked to PCOS?</li>
                <li>Which tests do I need, and why?</li>
                <li>
                  What are my options for skin, hair and weight concerns?
                </li>
                <li>Do I need other specialists?</li>
                <li>How long before I may see changes?</li>
                <li>When should I return for follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicines and Remedies
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Take medicines exactly as prescribed.</li>
                <li>Never start or stop medicines without advice.</li>
                <li>Report side effects promptly.</li>
                <li>
                  Avoid unverified creams, supplements and herbal products.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Daily Habits
              </h2>

              <p className="mb-4 text-gray-700">
                Personal guidance from your doctor or dietitian matters more
                than online plans.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Balanced, regular meals</li>
                <li>Regular activity you enjoy</li>
                <li>A steady sleep routine</li>
                <li>Stress management</li>
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
                  tidy rooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, soft lighting
                  and short waits.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
                <li>
                  <strong>Sound:</strong> Rooms that keep conversations private.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Costs and Second Opinions
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
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed cures or quick fixes</li>
                <li>
                  Pressure to buy packages, creams or supplements
                </li>
                <li>Dismissing your concerns about appearance</li>
                <li>Crash diets and unverified remedies</li>
                <li>Stopping treatment when symptoms improve</li>
                <li>Skipping follow-up visits</li>
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