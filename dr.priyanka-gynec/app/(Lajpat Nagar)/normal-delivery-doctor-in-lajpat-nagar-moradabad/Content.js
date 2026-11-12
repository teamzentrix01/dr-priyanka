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

export default function NormalDeliveryDoctorLajpatNagar() {
  const faqs = [
    {
      q: "Can a doctor guarantee a normal delivery?",
      a: "No. The safest method depends on the mother&apos;s and baby&apos;s health.",
    },
    {
      q: "What does a birth companion do?",
      a: "Offers comfort, helps communicate her wishes and handles practical tasks.",
    },
    {
      q: "Can a companion stay in the labour room?",
      a: "It depends on hospital policy. Ask in advance.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "When should we go to hospital?",
      a: "Follow your doctor&apos;s instructions, and call the hospital when unsure.",
    },
    {
      q: "What should a companion avoid?",
      a: "Pressuring her, giving food or remedies without approval and arguing with staff.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, if you feel unsure about the advice.",
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
                Normal Delivery Doctor in Lajpat Nagar, Moradabad: A Guide for
                Birth Companions
              </h1>

              <p className="mb-4 text-gray-700">
                Labour is demanding for the mother, and a calm, informed
                companion can make a real difference. This guide is for partners
                and family members who want to help, and it also covers how to
                choose a doctor and hospital together. It is general
                information, not medical advice. It names no individual doctors
                or hospitals, because I cannot verify or rank them, and no one
                can guarantee a normal delivery, since the safest route depends
                on the mother&apos;s and baby&apos;s health. The medical team&apos;s
                instructions always come first.{" "}
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
                What a Birth Companion Does
              </h2>

              <p className="mb-4 text-gray-700">
                The role is support, not direction. Medical decisions belong to
                the mother and her doctor.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Offer comfort and reassurance</li>
                <li>Help the mother communicate her wishes</li>
                <li>
                  Handle practical tasks such as paperwork and calls
                </li>
                <li>Stay calm so she can stay calm</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choose the Doctor Together
              </h2>

              <p className="mb-4 text-gray-700">
                Include the mother in every step. Aim for two or three names to
                compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or earlier gynaecologist</li>
                <li>
                  Friends and relatives with good experiences
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
                <li>Years of experience in obstetrics</li>
                <li>The hospital where the doctor delivers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Respect Her Preferences
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask whether she prefers a female doctor.</li>
                <li>Ask who she wants present during labour.</li>
                <li>Support her choices without pressure.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ask About Companion Rules
              </h2>

              <p className="mb-4 text-gray-700">
                Policies differ between hospitals. Ask early, not on delivery
                day.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>How many companions are allowed?</li>
                <li>Can a companion stay in the labour room?</li>
                <li>What are the visiting hours?</li>
                <li>
                  Are there rules about children or extra visitors?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Attend Antenatal Visits
              </h2>

              <p className="mb-4 text-gray-700">
                Hear the doctor&apos;s advice firsthand. Step out when she or the
                doctor prefers privacy.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note down instructions and warning signs.</li>
                <li>Ask questions she may forget.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Learn the Basics
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding reduces fear. Use reliable sources, not social
                media rumours.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Labour has stages, and every labour differs in length.
                </li>
                <li>
                  Plans can change if the doctor sees a concern.
                </li>
                <li>
                  Ask the doctor or an antenatal class to explain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Know When to Go to Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor for clear instructions for her case. When in
                doubt, call the hospital.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular, strengthening contractions as advised</li>
                <li>Fluid leaking</li>
                <li>Bleeding</li>
                <li>Reduced baby movements</li>
                <li>
                  Severe pain, fever or anything that worries you
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Prepare Documents and Bag
              </h2>

              <p className="mb-4 text-gray-700">
                Check the hospital&apos;s own list.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reports, scans, ID and insurance papers in one folder
                </li>
                <li>Comfortable clothes and toiletries for her</li>
                <li>Baby clothes, wraps and nappies</li>
                <li>Phone, charger and important numbers</li>
                <li>Items your hospital allows</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Plan Transport
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Decide who drives and a backup.</li>
                <li>Know the fastest route, including at night.</li>
                <li>Keep fuel or a ride option ready.</li>
                <li>Save emergency numbers on several phones.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                During Early Labour
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Stay calm and keep your voice gentle.</li>
                <li>
                  Help her rest, drink and eat as the doctor advises.
                </li>
                <li>
                  Time contractions only if your doctor asked you to.
                </li>
                <li>Call the hospital when advised.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                In the Labour Room
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow staff instructions.</li>
                <li>Ask the team before touching equipment.</li>
                <li>
                  Stay near her head and shoulders, not in the staff&apos;s way.
                </li>
                <li>Keep phones silent and conversation low.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ways to Offer Comfort
              </h2>

              <p className="mb-4 text-gray-700">
                Ask what she wants, since needs change.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Words of encouragement</li>
                <li>
                  A cool cloth or a sip of water, if allowed
                </li>
                <li>
                  Help changing position, with staff guidance
                </li>
                <li>
                  Holding her hand or giving space, whichever she prefers
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Speaking Up for Her
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Help her ask questions to the team.</li>
                <li>
                  Repeat her wishes calmly if she is too tired.
                </li>
                <li>Ask for explanations in simple words.</li>
                <li>Never argue with staff in front of her.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Do not pressure her about pain relief or delivery method.
                </li>
                <li>
                  Do not give food, drink or remedies without staff approval.
                </li>
                <li>
                  Do not compare her with other women&apos;s experiences.
                </li>
                <li>
                  Do not take photos or videos without permission and hospital
                  rules.
                </li>
                <li>Do not panic loudly.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If the Plan Changes
              </h2>

              <p className="mb-4 text-gray-700">
                Plans sometimes change for safety. Remember that a safe delivery
                matters most.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask the doctor to explain in plain language.</li>
                <li>Stay calm and supportive.</li>
                <li>
                  Ask for time to understand, where the situation allows.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After the Birth
              </h2>

              <p className="mb-4 text-gray-700">
                Look after yourself too, with food and rest.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Support first feeding and rest.</li>
                <li>Learn warning signs from the team.</li>
                <li>Help with practical tasks and visitors.</li>
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
                  <strong>Privacy:</strong> Doors and screens protect her during
                  examinations.
                </li>
                <li>
                  <strong>Space:</strong> Room to move, with a seat for a
                  companion where allowed.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Lighting:</strong> Soft, adjustable light alongside
                  clinical lighting.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, non-slip floors,
                  wide doors and accessible washrooms.
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
                <li>Doctor and hospital charges</li>
                <li>Room and nursing charges</li>
                <li>Tests, medicines and newborn care</li>
                <li>Costs if the plan changes</li>
                <li>Insurance acceptance and claim process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed normal delivery or unrealistic promises</li>
                <li>Vague answers about emergencies</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>Poor privacy or hygiene</li>
                <li>
                  Learning companion rules only on delivery day
                </li>
                <li>
                  Leaving hospital planning until the last moment
                </li>
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
                        qualified healthcare professional for pregnancy and
                        delivery care.
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