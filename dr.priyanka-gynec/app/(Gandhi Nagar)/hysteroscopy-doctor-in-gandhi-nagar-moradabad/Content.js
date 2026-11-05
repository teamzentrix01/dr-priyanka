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

export default function HysteroscopyDoctorGandhiNagar() {
  const faqs = [
    {
      q: "What is hysteroscopy used for?",
      a: "To look inside the uterus and, in some cases, treat certain findings.",
    },
    {
      q: "Will I need a companion?",
      a: "It is usually advised. Ask your facility.",
    },
    {
      q: "Is it always day-care?",
      a: "Often, but it depends on the type and your health.",
    },
    {
      q: "What should I do the night before?",
      a: "Follow your doctor&apos;s food, drink and medicine instructions exactly.",
    },
    {
      q: "When will I get results?",
      a: "Your doctor will tell you. Keep the follow-up appointment.",
    },
    {
      q: "When should I seek urgent help afterwards?",
      a: "For fever, heavy bleeding, severe pain or foul-smelling discharge, contact your doctor immediately.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, if you feel unsure about the advice.",
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
                Hysteroscopy Doctor in Gandhi Nagar, Moradabad: A Procedure Day
                Plan and Results Discussion Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Knowing how the day will unfold makes a procedure far less
                stressful. This guide walks through the day of a hysteroscopy,
                from the night before to the results conversation, and explains
                how to choose a doctor and facility. It is general information,
                not medical advice. It names no individual doctors or hospitals,
                because I cannot verify or rank them, and only your own doctor
                can tell you how your procedure will be done and what to do
                before and after.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                sections on facility environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Hysteroscopy?
              </h2>

              <p className="mb-4 text-gray-700">
                It is a procedure to look inside the uterus. Your doctor decides
                whether it suits your condition.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A thin, lighted instrument is passed through the vagina and
                  cervix.
                </li>
                <li>The doctor views the cavity on a screen.</li>
                <li>
                  It may be diagnostic, to look, or operative, to treat certain
                  findings.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Confirm the Plan First
              </h2>

              <p className="mb-4 text-gray-700">
                Ask and write down the following.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Why it is advised and which type is planned
                </li>
                <li>Date, time and place</li>
                <li>
                  What anaesthesia or pain relief will be used
                </li>
                <li>Whether it is day-care</li>
                <li>Tests needed beforehand</li>
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
                <li>Your gynaecologist or family doctor</li>
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
                <li>Training and experience in hysteroscopy</li>
                <li>The facility where it would be done</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                You should leave informed, not rushed. A second opinion is
                acceptable.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>
                  Does the doctor discuss alternatives and avoid pressure?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                One Week Before
              </h2>

              <p className="mb-4 text-gray-700">
                Arrange a companion and transport.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Complete tests your doctor advised.</li>
                <li>
                  Tell the team about all medicines, allergies and health
                  conditions.
                </li>
                <li>
                  Ask which medicines to continue or pause. Never decide
                  yourself.
                </li>
                <li>
                  Report any bleeding, fever or possible pregnancy to the
                  doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Night Before
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow food and drink instructions exactly.</li>
                <li>
                  Keep documents, ID and reports in one folder.
                </li>
                <li>Lay out loose, comfortable clothes.</li>
                <li>
                  Charge your phone and save the facility&apos;s number.
                </li>
                <li>Rest well.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Morning of the Procedure
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow instructions on medicines and fasting.</li>
                <li>Wash as advised and remove jewellery.</li>
                <li>Bring sanitary supplies for afterwards.</li>
                <li>Arrive at the time advised.</li>
                <li>Tell staff about any new symptoms.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Admission and Consent
              </h2>

              <p className="mb-4 text-gray-700">
                Never sign without understanding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Complete registration and billing formalities.
                </li>
                <li>Read the consent form carefully.</li>
                <li>Ask about anything unclear.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Before the Procedure
              </h2>

              <p className="mb-4 text-gray-700">
                Tell staff about any anxiety.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>You change into a gown, with privacy.</li>
                <li>
                  Staff check your details and vital signs.
                </li>
                <li>The team explains each step.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                During the Procedure
              </h2>

              <p className="mb-4 text-gray-700">
                Procedure time varies by case. Tell staff if you feel
                discomfort.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain relief or anaesthesia is given as planned.
                </li>
                <li>Staff monitor you throughout.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                In the Recovery Area
              </h2>

              <p className="mb-4 text-gray-700">
                You are observed until you are ready to go. Ask what is
                expected.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cramping or light bleeding can occur.
                </li>
                <li>
                  Staff explain when you may eat, drink and walk.
                </li>
                <li>You receive discharge instructions.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Before You Leave
              </h2>

              <p className="mb-4 text-gray-700">
                Write down the following.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Medicines, doses and timings</li>
                <li>Activity limits and rest advice</li>
                <li>
                  Warning signs and the number to call
                </li>
                <li>
                  Follow-up date and when results will be explained
                </li>
                <li>
                  Whether any samples or images are being reviewed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                At Home
              </h2>

              <p className="mb-4 text-gray-700">
                Rest for the remainder of the day. Report fever, heavy bleeding,
                severe pain or foul-smelling discharge promptly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow your instructions exactly.</li>
                <li>
                  Keep walkways clear and keep essentials within reach.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for the Results Conversation
              </h2>

              <p className="mb-4 text-gray-700">
                Plan to hear the plan, not only the findings.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bring the discharge summary and any reports.</li>
                <li>Write your questions in advance.</li>
                <li>Bring a companion for support.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions for the Results Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What did the procedure show, in plain words?
                </li>
                <li>
                  Was anything treated or removed during it?
                </li>
                <li>Are any further tests needed?</li>
                <li>
                  What are the options now, with benefits and risks?
                </li>
                <li>
                  How does this affect my cycles or pregnancy plans?
                </li>
                <li>When is my next follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Facility Looks Like
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
                  <strong>Privacy:</strong> Private changing space and screened
                  recovery bays.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating for companions,
                  soft lighting and good ventilation.
                </li>
                <li>
                  <strong>Order:</strong> Clear signs and discreet registration.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for a written estimate and keep every receipt.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Consultation, procedure, anaesthesia and facility charges
                </li>
                <li>Tests and medicines</li>
                <li>Follow-up visits</li>
                <li>Insurance coverage and claim process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pressure to book immediately</li>
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>No clear explanation of the procedure</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>Poor privacy or hygiene</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Skipping fasting or medicine instructions</li>
                <li>Going without a companion</li>
                <li>Leaving without written instructions</li>
                <li>Ignoring warning signs afterwards</li>
                <li>Missing the results visit</li>
                <li>Self-medicating from online advice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Gandhi
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
                        Healthcare interior planning and facility design support
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
                      <p>Gandhi Nagar, Moradabad, Uttar Pradesh, India</p>
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