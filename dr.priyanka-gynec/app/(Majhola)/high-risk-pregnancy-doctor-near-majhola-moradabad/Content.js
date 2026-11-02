
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

export default function HighRiskPregnancyDoctorMajhola() {
  const faqs = [
    {
      q: "Does high risk mean something will go wrong?",
      a: "No. It means closer monitoring and early action are advised.",
    },
    {
      q: "Who decides if my pregnancy is high risk?",
      a: "Your doctor, after reviewing your history, examination and tests.",
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
      a: "Ask about emergency cover, anaesthesia, blood support and newborn care.",
    },
    {
      q: "What symptoms need urgent help?",
      a: "Follow your doctor&apos;s list. Heavy bleeding, severe pain and reduced baby movements need immediate attention.",
    },
    {
      q: "Should I plan my delivery hospital early?",
      a: "Yes. Early planning helps in emergencies.",
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
                High Risk Pregnancy Doctor Near Majhola, Moradabad: How to Find
                and Choose the Right Care
              </h1>

              <p className="mb-4 text-gray-700">
                Being told your pregnancy is &quot;high risk&quot; can be
                frightening. The label does not mean something will go wrong. It
                means you and your baby need closer monitoring and a team that
                is ready to act early. This guide explains what high risk care
                usually involves, how to judge a doctor and a hospital, and how
                to prepare. It is general information, not medical advice. It
                names no individual doctors, because I cannot verify or rank
                them, and only a qualified doctor can assess your pregnancy. If
                you have warning signs, contact your doctor or go to an
                emergency facility immediately.{" "}
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
                What Does &quot;High Risk&quot; Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                It means extra attention is advised. Many high risk pregnancies
                end with healthy mothers and babies when care is timely.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your doctor sees a higher chance of complications.</li>
                <li>
                  Checkups, tests and scans may be more frequent.
                </li>
                <li>
                  Delivery planning is usually discussed earlier.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Pregnancy May Be Called High Risk
              </h2>

              <p className="mb-4 text-gray-700">
                Only your doctor can say why, based on your case. Ask your
                doctor to explain your specific reason in plain language.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Existing health conditions in the mother</li>
                <li>Conditions that develop during pregnancy</li>
                <li>Pregnancy with more than one baby</li>
                <li>
                  Concerns about the baby&apos;s growth or wellbeing
                </li>
                <li>
                  Age or previous pregnancy history in some cases
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Provides High Risk Care?
              </h2>

              <p className="mb-4 text-gray-700">
                A team approach is common. Ask who will be in your team and how
                they coordinate.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Obstetrician or Gynaecologist:</strong> Leads your
                  care.
                </li>
                <li>
                  <strong>Maternal-Fetal or Senior Specialist:</strong> Involved
                  in complex cases.
                </li>
                <li>
                  <strong>Physician or Other Specialists:</strong> Manage
                  related health conditions.
                </li>
                <li>
                  <strong>Anaesthetist:</strong> Plans pain relief and surgical
                  safety.
                </li>
                <li>
                  <strong>Neonatologist or Paediatrician:</strong> Prepares for
                  newborn care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Do Not Delay Care
              </h2>

              <p className="mb-4 text-gray-700">
                Early and regular care matters.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Book a visit as soon as you know you are pregnant.
                </li>
                <li>Keep every scheduled checkup and test.</li>
                <li>
                  Tell your doctor about all medicines and conditions.
                </li>
                <li>
                  Never stop or start medicines without medical advice.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Know the Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask your doctor which symptoms need urgent attention. Keep
                emergency numbers and a transport plan ready.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding</li>
                <li>Severe or constant pain</li>
                <li>Reduced baby movements</li>
                <li>Leaking fluid</li>
                <li>
                  Severe headache with vision changes or swelling
                </li>
                <li>Fever</li>
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
                <li>Your family doctor or current gynaecologist</li>
                <li>Friends and relatives with similar experiences</li>
                <li>Hospital listings</li>
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
                <li>Experience with high risk cases</li>
                <li>The hospital where the doctor delivers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                You will rely on your doctor through a stressful period. You
                should leave informed, not overwhelmed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor listen to your full history?</li>
                <li>Does the doctor explain in simple language?</li>
                <li>Does the doctor welcome questions?</li>
                <li>
                  Does the doctor discuss risks honestly without causing
                  needless fear?
                </li>
                <li>Does the doctor avoid pressure?</li>
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
                <li>Why is my pregnancy considered high risk?</li>
                <li>
                  How often will I need checkups, tests and scans?
                </li>
                <li>
                  What symptoms should make me call immediately?
                </li>
                <li>
                  How can I reach you or the clinic between visits?
                </li>
                <li>
                  Where will delivery take place, and why?
                </li>
                <li>What are the likely delivery options?</li>
                <li>What are the estimated costs?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is acceptable and often reassuring. A good
                doctor will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Compare explanations, not only recommendations.
                </li>
                <li>Carry the same reports to each visit.</li>
                <li>
                  Never delay urgent care while seeking another opinion.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                The hospital is as important as the doctor. Visit before your
                due date if possible.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Distance from home and travel time at night</li>
                <li>
                  Round-the-clock emergency and obstetric cover
                </li>
                <li>Availability of anaesthesia and blood support</li>
                <li>
                  A newborn care unit or clear transfer arrangements
                </li>
                <li>Trained nursing and support staff</li>
                <li>Clear billing and discharge process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ask About Facilities
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clean, well-maintained operation and labour areas
                </li>
                <li>Monitoring equipment and recovery space</li>
                <li>Newborn care arrangements</li>
                <li>Comfortable postnatal rooms</li>
                <li>Lift access and wide doors for stretchers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy and Dignity
              </h2>

              <p className="mb-4 text-gray-700">
                Staff should explain what they are doing and ask before
                examining. If privacy feels weak, consider another facility.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
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
                The environment affects comfort, safety and confidence.
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
                  <strong>Visibility:</strong> Layouts that let staff observe
                  patients easily.
                </li>
                <li>
                  <strong>Calm:</strong> Quiet corridors and clear signs.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests and Monitoring
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor may advise closer follow-up. Ask what each test is
                for and when results will be ready.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular blood pressure and weight checks</li>
                <li>Blood and urine tests</li>
                <li>Scans at suitable stages</li>
                <li>Other monitoring, depending on your case</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Daily Life and Habits
              </h2>

              <p className="mb-4 text-gray-700">
                Advice must be personal. Avoid unverified remedies and online
                advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask your doctor about food, activity and rest.</li>
                <li>Take medicines exactly as prescribed.</li>
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
                Pregnancy-related worry is common, and support can help.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Share worries with family or friends you trust.
                </li>
                <li>Tell your doctor if you feel anxious or low.</li>
                <li>Ask about counselling or support groups.</li>
                <li>Limit alarming content on social media.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Ahead
              </h2>

              <p className="mb-4 text-gray-700">
                Preparation reduces stress during a high risk pregnancy.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Keep reports, scans and ID documents together.</li>
                <li>Arrange transport and a backup option.</li>
                <li>Plan household help and time off work.</li>
                <li>Pack hospital essentials early.</li>
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
                <li>Consultation, test and scan charges</li>
                <li>Hospital, room and nursing charges</li>
                <li>Delivery and newborn care costs</li>
                <li>Costs if the plan changes</li>
                <li>Insurance acceptance and claim process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed outcomes or unrealistic promises</li>
                <li>
                  Dismissing your concerns or a second opinion
                </li>
                <li>Unclear costs and no written estimate</li>
                <li>Poor privacy or hygiene</li>
                <li>Unverifiable qualifications</li>
                <li>
                  Missing checkups or ignoring warning signs
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Majhola,
                Moradabad
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
                        healthcare professional for pregnancy care and urgent
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
                      <p>Near Majhola, Moradabad, Uttar Pradesh, India</p>
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