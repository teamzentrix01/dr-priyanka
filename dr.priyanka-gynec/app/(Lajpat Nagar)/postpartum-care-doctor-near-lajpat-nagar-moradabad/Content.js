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

export default function PostpartumCareDoctorLajpatNagar() {
  const faqs = [
    {
      q: "When should I book a postpartum checkup?",
      a: "Ask your doctor or midwife when they would like to see you. Many mothers have a review in the first weeks after birth, but timing depends on your delivery and recovery.",
    },
    {
      q: "When can I return to exercise?",
      a: "Your doctor or physiotherapist will advise based on your delivery, recovery and any complications. Start gently and stop if pain, bleeding or dizziness occurs.",
    },
    {
      q: "Is back pain after delivery normal?",
      a: "It can be common, but persistent, severe or worsening pain should be discussed with a doctor.",
    },
    {
      q: "What pelvic floor symptoms should I mention?",
      a: "Leaking urine, heaviness or bulging, pain, difficulty controlling wind, or trouble passing urine or stool should be discussed with your doctor.",
    },
    {
      q: "When should I seek urgent help after birth?",
      a: "Seek urgent help for heavy bleeding, fever, severe or worsening pain, chest pain, breathlessness, fainting, severe headache or thoughts of harming yourself.",
    },
    {
      q: "Can I ask for a female doctor?",
      a: "Yes. Ask when booking whether a female doctor is available.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
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
                Postpartum Care Doctor Near Lajpat Nagar, Moradabad: Body
                Recovery and Gentle Return to Activity
              </h1>

              <p className="mb-4 text-gray-700">
                The weeks after birth are a time of healing, learning and
                adjustment. Recovery is different for every mother, and there is
                no need to rush back to how things were before. This guide
                explains what to discuss at a postpartum checkup, how to return
                to activity gently and when to seek help. It is general
                information, not medical advice. It names no individual doctors,
                because I cannot verify or rank them, and only your own doctor
                or midwife can advise what is safe for you.{" "}
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
                What Postpartum Care Covers
              </h2>

              <p className="mb-4 text-gray-700">
                Postpartum care looks after the mother as well as the baby.
                Ask what follow-up is planned for you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Healing after vaginal birth or caesarean</li>
                <li>Bleeding, pain and breast changes</li>
                <li>Feeding support and baby care questions</li>
                <li>Mood, sleep and energy</li>
                <li>Pelvic floor and bladder or bowel symptoms</li>
                <li>Contraception and future pregnancy planning</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Early Recovery Is Individual
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery depends on the type of birth, any complications, sleep,
                support at home and your general health. Do not compare your
                recovery with anyone else&apos;s.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Rest when you can, and accept practical help.</li>
                <li>Keep meals simple and drink according to your doctor&apos;s advice.</li>
                <li>Ask for help with baby care, housework and older children.</li>
                <li>Attend follow-up visits even if you feel mostly well.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Discuss at the Checkup
              </h2>

              <p className="mb-4 text-gray-700">
                Write your questions down before the visit.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Is my bleeding and healing normal for me?</li>
                <li>Which pain relief is safe for me, especially if feeding?</li>
                <li>When can I bathe, drive, lift or return to work?</li>
                <li>When can I resume intimacy and contraception?</li>
                <li>Which exercises are safe for me now?</li>
                <li>Who should I contact if symptoms change?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pelvic Floor Questions
              </h2>

              <p className="mb-4 text-gray-700">
                The pelvic floor supports the bladder, bowel and uterus. It can
                be affected by pregnancy and birth, and help is available.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Leaking urine when coughing, sneezing or laughing</li>
                <li>Feeling of heaviness or bulging in the vagina</li>
                <li>Pain or discomfort during daily activities</li>
                <li>Difficulty controlling wind, urine or stool</li>
                <li>Trouble passing urine or stool</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Ask your doctor whether pelvic floor physiotherapy or a
                specialist referral would help in your case.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Returning to Activity Safely
              </h2>

              <p className="mb-4 text-gray-700">
                There is no single correct date to resume exercise. Follow your
                own clinician&apos;s advice, especially after a caesarean, assisted
                birth or complications.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Begin with gentle walking only if your doctor says it is safe.</li>
                <li>Avoid heavy lifting until your doctor advises otherwise.</li>
                <li>Stop and seek advice if you have pain, bleeding, dizziness or leakage.</li>
                <li>Build up gradually rather than returning to your previous routine at once.</li>
                <li>Ask about a postnatal physiotherapy assessment if you are unsure.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Back, Core and Posture
              </h2>

              <p className="mb-4 text-gray-700">
                Back discomfort can be common while caring for a newborn, but it
                should not be ignored if it is severe or persistent.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask for help with lifting, carrying and feeding positions.</li>
                <li>Change positions often and avoid staying in one posture for too long.</li>
                <li>Discuss persistent back, pelvic or abdominal pain with your doctor.</li>
                <li>Do not begin strenuous core exercises without individual advice.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mood and Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Feeling tearful, tired or overwhelmed can happen after birth. If
                low mood, anxiety or distress persists or affects daily life,
                tell your doctor.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Tell someone you trust how you are feeling.</li>
                <li>Ask your partner or family for practical support.</li>
                <li>Ask about counselling, support groups or further assessment.</li>
                <li>Seek immediate help if you feel unsafe or have thoughts of harming yourself.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs After Birth
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor for your personal list. Contact your doctor or
                seek urgent care if you notice any of the following.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding or large clots</li>
                <li>Fever or feeling unwell</li>
                <li>Severe or worsening abdominal or wound pain</li>
                <li>Redness, swelling, discharge or opening of a wound</li>
                <li>Chest pain, breathlessness or fainting</li>
                <li>Severe headache, vision changes or new swelling</li>
                <li>Persistent low mood, panic or thoughts of self-harm</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing a Postpartum Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your obstetrician, family doctor or midwife</li>
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
                <li>Experience in postpartum and women&apos;s health</li>
                <li>Hospital affiliation, if needed</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                You should leave feeling heard and clear about the next steps.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen without judgement?</li>
                <li>Does the doctor explain things in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>Does the doctor avoid pressure or fear-based advice?</li>
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
                  <strong>Comfort:</strong> Supportive seating, soft lighting and
                  good ventilation.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors,
                  non-slip floors and accessible washrooms.
                </li>
                <li>
                  <strong>Feeding Space:</strong> A comfortable, private corner
                  for feeding and rest.
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
                <li>Ask whether physiotherapy or specialist referral costs extra.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ignoring heavy bleeding, fever or severe pain</li>
                <li>Returning to intense exercise too soon</li>
                <li>Ignoring pelvic floor symptoms</li>
                <li>Hiding low mood or anxiety</li>
                <li>Skipping follow-up visits</li>
                <li>Self-medicating from online advice</li>
                <li>
                  Staying with a doctor who dismisses your concerns
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
                        healthcare professional for postpartum care and
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