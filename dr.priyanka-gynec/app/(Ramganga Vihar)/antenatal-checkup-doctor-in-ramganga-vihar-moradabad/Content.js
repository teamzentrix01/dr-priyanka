
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

export default function AntenatalCheckupDoctorRamgangaVihar() {
  const faqs = [
    {
      q: "When should I start antenatal checkups?",
      a: "As soon as you know or suspect you are pregnant. Your doctor will set the schedule.",
    },
    {
      q: "Which doctor should I see?",
      a: "An obstetrician or gynaecologist usually leads pregnancy care.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Can I request a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "What should I bring to each visit?",
      a: "Reports, a medicine list and your questions.",
    },
    {
      q: "What symptoms need urgent care?",
      a: "Heavy bleeding, severe pain or reduced baby movements. Follow your doctor&apos;s specific advice.",
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
                Antenatal Checkup Doctor in Ramganga Vihar, Moradabad: How to
                Find and Choose the Right Doctor
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy brings many questions, and regular checkups are a big
                part of staying informed. Choosing a doctor you trust makes
                these visits easier. This guide explains what antenatal care
                involves, how to judge a doctor and clinic, and how to prepare.
                It is general information, not medical advice. It names no
                individual doctors, because I cannot verify or rank them, and
                only a qualified doctor can advise you on your pregnancy.{" "}
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
                What Is Antenatal Care?
              </h2>

              <p className="mb-4 text-gray-700">
                Antenatal care is the medical care given during pregnancy. The
                schedule and tests depend on your health and your doctor&apos;s
                advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular checkups to monitor you and the baby</li>
                <li>Tests and scans as advised by the doctor</li>
                <li>Guidance on food, activity and rest</li>
                <li>Discussion of delivery options and planning</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Regular Checkups Matter
              </h2>

              <p className="mb-4 text-gray-700">
                Checkups help doctors notice concerns early. Never skip visits
                without telling your doctor.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>They track your health through pregnancy.</li>
                <li>They allow questions to be answered.</li>
                <li>They help plan delivery and support.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Start
              </h2>

              <p className="mb-4 text-gray-700">
                Contact a doctor as soon as you know or suspect you are pregnant.
                Seek urgent care for heavy bleeding, severe pain, reduced baby
                movements or other warning signs your doctor has explained.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Early guidance is valuable.</li>
                <li>Your doctor will advise the first visit timing.</li>
                <li>Report any concerning symptoms promptly.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Provides Antenatal Care?
              </h2>

              <p className="mb-4 text-gray-700">
                Several professionals may be involved in your pregnancy care.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Obstetrician or Gynaecologist:</strong> Leads
                  pregnancy and delivery care.
                </li>
                <li>
                  <strong>Midwives and Nurses:</strong> Support checkups and
                  guidance.
                </li>
                <li>
                  <strong>Sonographer or Radiologist:</strong> Performs scans.
                </li>
                <li>
                  <strong>Dietitian:</strong> Offers food guidance, if needed.
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
                <li>
                  Trusted friends and relatives who had good experiences
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
                Look for clear, checkable details. Credentials can be verified
                through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of experience in obstetrics</li>
                <li>Hospital where delivery would take place</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Think About the Delivery Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Ask early where delivery would happen. Visit the hospital in
                advance if possible.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Is the hospital close enough for emergencies?</li>
                <li>
                  Does it have emergency and newborn care arrangements?
                </li>
                <li>
                  Is the doctor available there on short notice?
                </li>
                <li>Are costs and billing clearly explained?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                A pregnancy involves many visits, so rapport matters. You should
                leave feeling informed and calm.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Does the doctor listen to your history and worries?
                </li>
                <li>Does she or he explain in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>Does the doctor respect your choices?</li>
                <li>
                  Does the doctor avoid fear-based or pressured advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Female or Male Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                This is a personal preference. Choose the doctor who helps you
                speak openly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask when booking if you prefer a female doctor.</li>
                <li>
                  Request a female staff member during examinations if you wish.
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
                <li>How often will I need checkups?</li>
                <li>
                  Which tests and scans will I need, and when?
                </li>
                <li>
                  What symptoms should make me call immediately?
                </li>
                <li>
                  How can I reach you or the clinic between visits?
                </li>
                <li>Where will delivery take place?</li>
                <li>
                  What are the usual costs for the whole pregnancy?
                </li>
                <li>Who covers if you are unavailable?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests and Scans
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors advise tests based on your situation. Ask what each test
                is for and when results will be ready.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood and urine tests</li>
                <li>Ultrasound scans at suitable stages</li>
                <li>Other checks, if your doctor advises</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Food, Activity and Rest
              </h2>

              <p className="mb-4 text-gray-700">
                Daily habits matter, but advice must be personal. Avoid starting
                medicines or remedies without medical advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask your doctor about food, supplements and activity.
                </li>
                <li>Rest well and keep a regular routine.</li>
                <li>
                  Ask a qualified dietitian for personal food plans.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy can bring mixed feelings. Support and reliable
                information can help.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk to family or friends you trust.</li>
                <li>Tell your doctor if you feel anxious or low.</li>
                <li>Avoid unverified advice from social media.</li>
                <li>
                  Ask about antenatal classes for information and support.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is acceptable if you feel unsure. A good doctor
                will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Compare explanations, not only prescriptions.
                </li>
                <li>Carry the same reports to each visit.</li>
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
                <li>Consultation fee per visit</li>
                <li>Test and scan charges</li>
                <li>Delivery and hospital costs</li>
                <li>Medicine and follow-up charges</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy and Dignity
              </h2>

              <p className="mb-4 text-gray-700">
                Privacy matters in every antenatal visit. If privacy feels weak,
                consider another clinic.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Consultation doors should not open onto the waiting area.
                </li>
                <li>Examination areas should be screened.</li>
                <li>Registration should not be overheard.</li>
                <li>
                  Staff should explain what they are doing and ask before
                  examining.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnant visitors need extra comfort. Planners such as{" "}
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
                  <strong>Seating:</strong> Supportive chairs with armrests and
                  a comfortable height.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and a
                  lift where needed.
                </li>
                <li>
                  <strong>Flooring:</strong> Non-slip surfaces.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous materials and
                  clean washrooms close by.
                </li>
                <li>
                  <strong>Atmosphere:</strong> Soft lighting, good ventilation
                  and short waiting times.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Each Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note symptoms and questions beforehand.</li>
                <li>Bring earlier reports and scans.</li>
                <li>Carry a list of medicines and supplements.</li>
                <li>Wear comfortable clothing.</li>
                <li>Take a family member if you wish.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs</li>
                <li>Poor privacy or hygiene</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Delaying the first visit</li>
                <li>Skipping scans or follow-ups</li>
                <li>Self-medicating from online advice</li>
                <li>Ignoring warning signs</li>
                <li>Not planning the delivery hospital</li>
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
                        healthcare professional for pregnancy advice and urgent
                        concerns.
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