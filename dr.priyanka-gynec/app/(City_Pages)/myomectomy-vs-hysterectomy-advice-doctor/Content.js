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

export default function MyomectomyVsHysterectomy() {
  const faqs = [
    {
      q: "What is the main difference between myomectomy and hysterectomy?",
      a: "Myomectomy removes only fibroids and preserves the uterus, while hysterectomy removes the entire uterus permanently.",
    },
    {
      q: "Can I get pregnant after a laparoscopic myomectomy?",
      a: "Yes, most women can conceive naturally after healing, usually advised to wait around 3 months post-surgery.",
    },
    {
      q: "Can fibroids grow back after being removed surgically?",
      a: "New fibroids can occasionally develop later, but hysterectomy fully eliminates this possibility since the uterus is removed.",
    },
    {
      q: "How does laparoscopic myomectomy differ from hysterectomy in recovery?",
      a: "Myomectomy typically has a slightly shorter recovery (2–4 weeks) than laparoscopic hysterectomy (4–6 weeks).",
    },
    {
      q: "Is hysterectomy always the last resort for fibroids?",
      a: "Not always — it is recommended when family is complete, fibroids are extensive, or myomectomy is not medically suitable.",
    },
    {
      q: "Does hysterectomy cause early menopause?",
      a: "No, if the ovaries are preserved during hysterectomy, natural hormone production and menopause timing are not affected.",
    },
    {
      q: "Which surgery has less blood loss — myomectomy or hysterectomy?",
      a: "Both use advanced vessel-sealing instruments for minimal blood loss; the amount depends on fibroid size and surgical complexity, not the procedure type alone.",
    },
    {
      q: "How do I know which surgery is right for me?",
      a: "Your gynaecologist evaluates fibroid size, symptoms, age, and fertility plans through ultrasound and consultation to recommend the best option.",
    },
    {
      q: "What is the hospital stay for these surgeries?",
      a: "Laparoscopic myomectomy usually needs 24–48 hours, while laparoscopic hysterectomy typically needs 2–4 days.",
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
                Myomectomy vs Hysterectomy: Doctor&apos;s Advice on Choosing the
                Right Fibroid Surgery
              </h1>

              <p className="mb-4 text-gray-700">
                If you have been diagnosed with uterine fibroids, your doctor
                may recommend one of two surgical options — myomectomy or
                hysterectomy. Both procedures treat fibroids effectively, but
                they are completely different in what they remove, who they suit,
                and how they affect your future fertility.
              </p>

              <p className="text-gray-700">
                This detailed guide explains the real difference between
                myomectomy and hysterectomy, backed by expert doctor advice from
                Dr. Priyanka Pachauri, a leading laparoscopic gynaecologist and
                fibroid specialist in Moradabad, so you can make an informed
                decision with confidence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Myomectomy?
              </h2>

              <p className="mb-4 text-gray-700">
                A myomectomy is a surgery that removes only the fibroids while
                keeping the uterus intact.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes fibroids from the uterine wall, cavity, or outer
                  surface
                </li>
                <li>
                  Uterus is fully preserved for future pregnancy
                </li>
                <li>
                  Performed laparoscopically (keyhole), hysteroscopically, or
                  through open surgery depending on fibroid size and location
                </li>
                <li>
                  Involves multi-layer uterine wall suturing to restore normal
                  uterine structure
                </li>
                <li>
                  Ideal for women who want to conceive in the future
                </li>
                <li>
                  Menstrual periods continue normally after healing
                </li>
                <li>
                  Shorter recovery compared to open hysterectomy
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Hysterectomy?
              </h2>

              <p className="mb-4 text-gray-700">
                A hysterectomy is a surgery that removes the uterus completely,
                sometimes along with the cervix, ovaries, or fallopian tubes.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Permanently ends menstruation and the ability to conceive
                </li>
                <li>
                  Recommended for women who have completed their family or do
                  not wish for future pregnancy
                </li>
                <li>
                  Can be performed laparoscopically, vaginally, or through open
                  abdominal surgery
                </li>
                <li>
                  Laparoscopic hysterectomy offers minimally invasive keyhole
                  removal with faster healing
                </li>
                <li>
                  Provides a permanent solution when fibroids are extensive,
                  recurrent, or severely symptomatic
                </li>
                <li>
                  Eliminates the possibility of fibroid regrowth in the uterus
                  since the uterus itself is removed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myomectomy vs Hysterectomy: Key Differences at a Glance
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                        Aspect
                      </th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                        Myomectomy
                      </th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                        Hysterectomy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        What is removed
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Only fibroids
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Entire uterus
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Fertility
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Preserved
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Ends permanently
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Menstruation
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Continues
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Stops completely
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Recurrence risk
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        New fibroids can occasionally form
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Impossible (uterus removed)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Recovery time (laparoscopic)
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        2–4 weeks
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        4–6 weeks
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Hospital stay
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        24–48 hours
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        2–4 days
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Best suited for
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Women planning pregnancy
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Women who completed childbearing
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        Permanence
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Fertility-conserving
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Permanent, one-time solution
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctor&apos;s Advice: How Dr. Priyanka Pachauri Helps You Decide
              </h2>

              <p className="mb-4 text-gray-700">
                Choosing between myomectomy and hysterectomy is a deeply
                personal decision, and Dr. Priyanka Pachauri guides every
                patient through a structured evaluation before recommending
                either option.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed history-taking to understand fertility plans and
                  family goals
                </li>
                <li>
                  3D/4D ultrasound imaging to precisely map fibroid size,
                  number, and location
                </li>
                <li>
                  Assessment of symptom severity — bleeding, pain, pressure, and
                  impact on daily life
                </li>
                <li>
                  Evaluation of age, general health, and future pregnancy
                  intentions
                </li>
                <li>
                  Discussion of both surgical options with clear pros, cons, and
                  recovery expectations
                </li>
                <li>
                  Personalised recommendation rather than a one-size-fits-all
                  approach
                </li>
                <li>
                  Use of advanced 3D laparoscopic technology for whichever
                  procedure is chosen, ensuring minimal blood loss and faster
                  healing
                </li>
                <li>
                  Continuous follow-up care from pre-surgery counselling through
                  complete recovery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is Myomectomy the Right Choice?
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors generally recommend myomectomy when:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You are still planning to have children
                </li>
                <li>
                  Fibroids are limited in number and size and are surgically
                  accessible
                </li>
                <li>
                  You wish to retain your uterus for personal or emotional
                  reasons
                </li>
                <li>
                  Symptoms like heavy bleeding or pain are linked directly to
                  specific fibroids
                </li>
                <li>
                  Fertility has been affected by fibroids and removal may
                  improve conception chances
                </li>
                <li>
                  You are younger and want to preserve reproductive function
                  long-term
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is Hysterectomy the Better Option?
              </h2>

              <p className="mb-4 text-gray-700">
                A hysterectomy may be advised instead when:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You have completed your family and do not want future
                  pregnancies
                </li>
                <li>
                  Fibroids are very large, numerous, or have recurred multiple
                  times after previous myomectomy
                </li>
                <li>
                  Fibroids are combined with other conditions like adenomyosis
                  or abnormal bleeding not responding to treatment
                </li>
                <li>
                  You want a permanent, one-time solution without risk of
                  fibroid regrowth
                </li>
                <li>
                  Severe symptoms are significantly affecting quality of life
                  and other treatments have failed
                </li>
                <li>
                  Your doctor determines that uterus preservation is not
                  medically safe or practical
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery Time: Myomectomy vs Hysterectomy
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Myomectomy Recovery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Day 1–2:</strong> Hospital discharge in most cases
                </li>
                <li>
                  <strong>Week 1:</strong> Mild soreness; light home activity
                  resumes
                </li>
                <li>
                  <strong>Week 2–3:</strong> Return to light work
                </li>
                <li>
                  <strong>Week 4–6:</strong> Full recovery and return to normal
                  routine
                </li>
                <li>
                  <strong>3 Months:</strong> Doctors generally recommend waiting
                  before attempting pregnancy
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Hysterectomy Recovery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Day 2–4:</strong> Hospital discharge in most cases
                </li>
                <li>
                  <strong>Week 1–2:</strong> Gradual return to light activity
                </li>
                <li>
                  <strong>Week 3–4:</strong> Return to light work
                </li>
                <li>
                  <strong>Week 4–6:</strong> Full internal healing and return to
                  normal routine
                </li>
                <li>
                  <strong>No pregnancy planning required post-recovery</strong>{" "}
                  since fertility is not preserved
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Choosing Laparoscopic (Minimally Invasive) Surgery —
                For Either Option
              </h2>

              <p className="mb-4 text-gray-700">
                Whether myomectomy or hysterectomy is recommended, the
                laparoscopic (keyhole) approach offers clear advantages over
                traditional open surgery:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Smaller incisions with minimal visible scarring
                </li>
                <li>
                  Reduced blood loss using advanced vessel-sealing instruments
                </li>
                <li>
                  Shorter hospital stay compared to open surgery
                </li>
                <li>
                  Lower risk of infection
                </li>
                <li>
                  Less post-operative pain
                </li>
                <li>
                  Faster return to daily activities and work
                </li>
                <li>
                  Better cosmetic outcome
                </li>
                <li>
                  High-definition 3D visualisation for greater surgical
                  precision
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Life After Surgery: What to Expect Long-Term
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the long-term picture helps patients set realistic
                expectations after either procedure:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>After Myomectomy:</strong> Periods usually return to
                  normal or lighter flow; future pregnancies are typically
                  monitored closely and often delivered via planned caesarean if
                  fibroids were large or deep
                </li>
                <li>
                  <strong>After Hysterectomy:</strong> Menstruation stops
                  permanently; symptoms like heavy bleeding, cramping, and
                  pressure caused by fibroids resolve completely
                </li>
                <li>
                  Both procedures generally lead to a significant improvement in
                  quality of life and energy levels once anaemia from heavy
                  bleeding is corrected
                </li>
                <li>
                  Regular follow-up ultrasounds are advised after myomectomy to
                  monitor for new fibroid growth
                </li>
                <li>
                  Sexual health and intimacy typically return to normal after
                  full healing in both procedures
                </li>
                <li>
                  Long-term pelvic floor health can be supported with light
                  exercise and guidance from your doctor
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Myomectomy and Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Myomectomy always leads to fibroid
                  recurrence. <strong>Reality:</strong> Recurrence is possible
                  but not guaranteed, and many women never develop new fibroids
                  after surgery.
                </li>
                <li>
                  <strong>Myth:</strong> Hysterectomy causes early menopause.{" "}
                  <strong>Reality:</strong> If ovaries are preserved, hormone
                  production continues and menopause is not triggered early.
                </li>
                <li>
                  <strong>Myth:</strong> Myomectomy is always safer than
                  hysterectomy. <strong>Reality:</strong> Safety depends on
                  fibroid characteristics and patient health, not the procedure
                  name alone.
                </li>
                <li>
                  <strong>Myth:</strong> You cannot live a normal life after
                  hysterectomy. <strong>Reality:</strong> Most women return to a
                  completely normal, active lifestyle after recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional and Lifestyle Factors to Consider
              </h2>

              <p className="mb-4 text-gray-700">
                Beyond the medical facts, your personal feelings and life
                circumstances matter just as much in this decision:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your age and where you are in your family-planning journey
                </li>
                <li>
                  How you feel about permanently losing the ability to conceive
                </li>
                <li>
                  Cultural or personal significance attached to keeping the
                  uterus
                </li>
                <li>
                  Your partner&apos;s views and shared future family plans
                </li>
                <li>
                  Impact of ongoing heavy bleeding or pain on your mental health
                  and daily life
                </li>
                <li>
                  Your comfort level with the small chance of needing a second
                  surgery after myomectomy
                </li>
                <li>
                  Long-term relief and peace of mind that a permanent solution
                  like hysterectomy can offer
                </li>
                <li>
                  Support system available to you during recovery, regardless of
                  which surgery you choose
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Dr. Priyanka Pachauri encourages patients to voice these
                concerns openly during consultation, since the &quot;right&quot;
                choice is not only medical — it is deeply personal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor Before Choosing Between Myomectomy
                and Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Based on my fibroid size and location, which surgery gives me
                  the best outcome?
                </li>
                <li>
                  What are my realistic chances of a successful pregnancy after
                  myomectomy?
                </li>
                <li>
                  How many fibroids do I have, and could new ones develop later?
                </li>
                <li>
                  What surgical technique will be used — laparoscopic,
                  hysteroscopic, or open?
                </li>
                <li>
                  What is the expected hospital stay and full recovery time in
                  my specific case?
                </li>
                <li>
                  Will my ovaries be preserved if hysterectomy is recommended?
                </li>
                <li>
                  What are the risks specific to my age and health profile?
                </li>
                <li>
                  What lifestyle changes should I make before and after surgery?
                </li>
                <li>
                  How soon can I resume work, exercise, and daily activities?
                </li>
                <li>
                  What follow-up care and monitoring will I need after the
                  procedure?
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Asking these questions during your consultation helps you leave
                with complete clarity and confidence in your treatment plan.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks and Precautions to Discuss With Your Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Possible bleeding or infection at the surgical site
                </li>
                <li>
                  Rare risk of conversion from laparoscopic to open surgery in
                  complex cases
                </li>
                <li>
                  Temporary bloating or gas-related discomfort after laparoscopic
                  surgery
                </li>
                <li>
                  Anaesthesia-related risks, discussed during pre-surgery
                  evaluation
                </li>
                <li>
                  Emotional and psychological impact of fertility loss after
                  hysterectomy — pre-surgery counselling helps address this
                </li>
                <li>
                  Importance of following post-operative instructions strictly
                  for faster, complication-free healing
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Myomectomy or Hysterectomy
                in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced Obstetrician,
                Gynaecologist & IVF Specialist in Moradabad, trusted for her
                combination of surgical precision and compassionate patient
                counselling.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  MS (O&G), FMAS, Advanced Infertility Fellowship
                </li>
                <li>
                  Co-leads Shree Advanced Urogynae Clinic, Moradabad
                </li>
                <li>
                  Consultant at Ujala Cygnus BrightStar Hospital
                </li>
                <li>
                  Specialist in both laparoscopic myomectomy and laparoscopic
                  hysterectomy
                </li>
                <li>
                  Skilled in multi-layer uterine suturing for safe future
                  pregnancy after myomectomy
                </li>
                <li>
                  Uses high-definition 3D laparoscopic technology and AI-based
                  imaging for precise diagnosis and surgical planning
                </li>
                <li>
                  Known for taking time to explain every option clearly before
                  recommending surgery
                </li>
                <li>
                  Trusted by women across Moradabad and nearby Uttar Pradesh
                  regions for empathetic, safe-motherhood-focused care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri for Expert Advice on Myomectomy vs
                Hysterectomy
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Fertility Specialist (MBBS, MS)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+919079765578"
                        className="hover:underline"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.gynaecologistmoradabad.com
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
