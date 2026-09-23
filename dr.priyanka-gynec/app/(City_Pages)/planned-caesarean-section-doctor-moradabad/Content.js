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

export default function PlannedCaesareanSectionDoctorMoradabad() {
  const faqs = [
    {
      q: "What's the difference between a planned and emergency C-section?",
      a: "A planned C-section is scheduled in advance, while an emergency C-section occurs unexpectedly, often during labor.",
    },
    {
      q: "How long does recovery take after a planned C-section?",
      a: "Most women feel significantly recovered by 4–6 weeks, though full internal healing can take a few months.",
    },
    {
      q: "Will I be awake during a planned C-section?",
      a: "Yes, most planned C-sections use spinal or epidural anaesthesia, allowing you to remain awake and aware during delivery.",
    },
    {
      q: "Can I have a vaginal birth after a previous C-section?",
      a: "This depends on your specific circumstances; your doctor can advise whether a VBAC may be a safe option for you.",
    },
    {
      q: "What should I pack for a planned C-section?",
      a: "Pack essentials for both yourself and your baby, along with any comfort items and documents your hospital requires.",
    },
    {
      q: "When can I resume normal activities after a C-section?",
      a: "Most women are cleared for more normal activity, including exercise, after their 6-week follow-up appointment.",
    },
    {
      q: "Does gynaecologistmoradabad.com offer C-section delivery services?",
      a: "The website lists antenatal, postnatal, and high-risk pregnancy management; confirm delivery and C-section specifics directly with the clinic.",
    },
    {
      q: "What warning signs after a C-section need immediate medical attention?",
      a: "Fever, worsening pain, wound discharge, heavy bleeding, or signs of a blood clot should prompt immediate contact with your doctor.",
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
                Planned Caesarean Section Doctor Moradabad: Complete Guide for
                Expecting Mothers
              </h1>

              <p className="mb-4 text-gray-700">
                Deciding on or being advised toward a planned caesarean section
                is a significant part of many pregnancy journeys. If you&apos;re
                searching for a planned caesarean section doctor in Moradabad,
                this guide explains what a planned C-section involves, when
                it&apos;s typically recommended, how to prepare, what recovery
                looks like, and how to choose the right obstetrician for your
                delivery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Planned (Elective) Caesarean Section?
              </h2>

              <p className="mb-4 text-gray-700">
                A planned caesarean section, also called an elective C-section,
                is a surgical delivery scheduled in advance — as opposed to an
                emergency C-section performed unexpectedly during labor.
              </p>

              <p className="mb-4 text-gray-700">Key facts about planned C-sections:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The date is scheduled ahead of time, usually based on your due
                  date and specific medical considerations.
                </li>
                <li>
                  It is performed under spinal or epidural anaesthesia in most
                  cases, allowing you to remain awake during delivery.
                </li>
                <li>
                  The procedure typically takes 30 to 60 minutes, though your
                  baby is usually delivered within the first several minutes.
                </li>
                <li>
                  Planning in advance allows for better preparation, both
                  medically and emotionally, compared to an unplanned emergency
                  procedure.
                </li>
                <li>
                  It remains a safe, well-established delivery method when
                  performed by an experienced obstetric team.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Reasons a Planned C-Section May Be Recommended
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor may recommend a planned C-section for several
                reasons, including:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Breech or abnormal baby position</strong> that
                  doesn&apos;t correct itself closer to the due date.
                </li>
                <li>
                  <strong>Placenta previa</strong>, where the placenta covers
                  part or all of the cervix.
                </li>
                <li>
                  <strong>Multiple pregnancies (twins or more)</strong>,
                  depending on their positions and other factors.
                </li>
                <li>
                  <strong>Previous C-section delivery</strong>, particularly if
                  a repeat C-section is considered safer than attempting a
                  vaginal birth after caesarean (VBAC).
                </li>
                <li>
                  <strong>Certain maternal health conditions</strong>, such as
                  specific heart conditions or high blood pressure disorders,
                  where labor may pose additional risk.
                </li>
                <li>
                  <strong>Large baby size (macrosomia)</strong> relative to the
                  mother&apos;s pelvis, based on scan assessments.
                </li>
                <li>
                  <strong>Active infections</strong>, such as certain sexually
                  transmitted infections, where vaginal delivery could pose
                  transmission risk to the baby.
                </li>
                <li>
                  <strong>Personal choice</strong>, in some cases, after a
                  thorough discussion with your doctor about the risks and
                  benefits compared to vaginal delivery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planned vs. Emergency C-Section: Key Differences
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the difference helps set the right expectations:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Planned C-sections</strong> are scheduled in advance,
                  allowing time for preparation, fasting instructions, and a
                  calmer overall environment.
                </li>
                <li>
                  <strong>Emergency C-sections</strong> occur unexpectedly,
                  often during labor, when a vaginal delivery becomes unsafe for
                  mother or baby.
                </li>
                <li>
                  <strong>Recovery expectations</strong> are generally similar
                  between the two, though emergency C-sections may sometimes
                  involve additional stress or complications depending on the
                  circumstances that led to the decision.
                </li>
                <li>
                  <strong>Planned C-sections</strong> allow more time for
                  questions and emotional preparation, which many women find
                  reassuring compared to the more urgent nature of an emergency
                  procedure.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for a Planned Caesarean Section
              </h2>

              <p className="mb-4 text-gray-700">
                Proper preparation can help the day go smoothly and support a
                better recovery:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Attend all recommended pre-surgery consultations and tests,
                  including blood work and anaesthesia assessment.
                </li>
                <li>
                  Follow fasting instructions carefully the night before and
                  morning of your scheduled surgery.
                </li>
                <li>
                  Arrange support at home for after your delivery, since
                  recovery involves both newborn care and your own healing.
                </li>
                <li>
                  Pack a hospital bag in advance, including items for both you
                  and your baby.
                </li>
                <li>
                  Discuss your birth preferences with your doctor, such as
                  immediate skin-to-skin contact, if medically appropriate.
                </li>
                <li>
                  Ask about pain management options available after the
                  procedure.
                </li>
                <li>
                  Confirm who can accompany you during the procedure and
                  immediately afterward, based on the hospital&apos;s policies.
                </li>
                <li>
                  Prepare mentally and emotionally, including discussing any
                  concerns or fears with your doctor beforehand.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens on the Day of Your Planned C-Section
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Arrival and admission</strong>, typically a few hours
                  before the scheduled procedure time.
                </li>
                <li>
                  <strong>Pre-surgery checks</strong>, including vital signs and
                  final confirmation of your readiness for surgery.
                </li>
                <li>
                  <strong>Anaesthesia administration</strong>, usually spinal or
                  epidural, allowing you to remain awake.
                </li>
                <li>
                  <strong>The surgical delivery itself</strong>, with your baby
                  typically delivered within the first several minutes.
                </li>
                <li>
                  <strong>Immediate newborn care</strong>, including initial
                  checks and, when appropriate, skin-to-skin contact.
                </li>
                <li>
                  <strong>Closing of the incision</strong>, which takes longer
                  than the delivery itself.
                </li>
                <li>
                  <strong>Recovery room monitoring</strong> before being moved
                  to a regular hospital room.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery Timeline After a Planned C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery generally follows this pattern, though individual
                experiences vary:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First 24 Hours
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Close monitoring of vital signs, bleeding, and pain levels.
                </li>
                <li>
                  Encouragement to start moving (with assistance) within the
                  first day to support circulation and healing.
                </li>
                <li>
                  Pain management through prescribed medication.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Days 2–4 (Hospital Stay)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most C-section patients stay in the hospital for 3–4 days,
                  depending on recovery progress.
                </li>
                <li>
                  Wound care guidance provided before discharge.
                </li>
                <li>
                  Breastfeeding support, if applicable, typically begins during
                  this period.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Week 1–2 (Initial Home Recovery)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Continued rest with limited physical activity, especially
                  avoiding heavy lifting beyond your baby.
                </li>
                <li>
                  Incision care following your doctor&apos;s instructions to
                  prevent infection.
                </li>
                <li>
                  Gradual increase in light movement, such as short walks around
                  the house.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Week 3–6 (Progressive Recovery)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many women begin to feel significantly more mobile and
                  comfortable during this period.
                </li>
                <li>
                  Follow-up appointment, typically around 6 weeks, to confirm
                  healing and clear you for more normal activity.
                </li>
                <li>
                  Driving and light exercise are usually discussed and cleared
                  during this follow-up visit.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Beyond 6 Weeks
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Full internal healing may continue for a few months, even
                  though most external recovery feels complete by this stage.
                </li>
                <li>
                  Return to more strenuous exercise is generally cleared after
                  the 6-week follow-up, based on individual recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs to Watch for During C-Section Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fever or chills.
                </li>
                <li>
                  Increasing (rather than improving) pain at the incision site.
                </li>
                <li>
                  Redness, swelling, or discharge from the incision suggesting
                  infection.
                </li>
                <li>
                  Heavy vaginal bleeding beyond what&apos;s expected.
                </li>
                <li>
                  Severe abdominal pain not relieved by prescribed medication.
                </li>
                <li>
                  Difficulty urinating or persistent nausea/vomiting.
                </li>
                <li>
                  Signs of a blood clot, such as swelling or pain in one leg.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Contact your doctor immediately if you notice any of these
                symptoms during your recovery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Considerations for Future Pregnancies After a C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                If you&apos;re planning future pregnancies, it&apos;s worth
                discussing with your doctor:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Whether a future vaginal birth after caesarean (VBAC) may be
                  an option, depending on your specific circumstances.
                </li>
                <li>
                  Recommended spacing between pregnancies to allow adequate
                  uterine healing.
                </li>
                <li>
                  Any specific risk factors from your current C-section that
                  might affect future pregnancy planning.
                </li>
                <li>
                  Long-term monitoring needs, particularly if you&apos;ve had
                  multiple C-sections.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Planned C-Section Doctor in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Since a C-section is a significant surgical delivery, choosing
                the right obstetrician matters:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Strong experience in both vaginal and caesarean
                  delivery</strong>, ensuring recommendations are based on your
                  specific case.
                </li>
                <li>
                  <strong>Clear communication about why a C-section is being
                  recommended</strong>, if applicable to your situation.
                </li>
                <li>
                  <strong>Access to a well-equipped hospital or surgical
                  facility</strong> for the delivery itself.
                </li>
                <li>
                  <strong>Availability and emergency backup</strong>, in case
                  your planned date needs to shift due to unexpected
                  developments.
                </li>
                <li>
                  <strong>Post-delivery support</strong>, including guidance on
                  recovery, breastfeeding, and newborn care coordination.
                </li>
                <li>
                  <strong>A comfortable, trusting relationship</strong>, since
                  you&apos;ll be relying on this doctor for a significant,
                  personal experience.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Planned C-Section Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Why is a C-section being recommended for my specific
                  pregnancy?
                </li>
                <li>
                  What type of anaesthesia will be used, and what are the
                  associated risks?
                </li>
                <li>
                  Who can accompany me during the procedure?
                </li>
                <li>
                  What is the expected hospital stay and recovery timeline?
                </li>
                <li>
                  What pain management options will be available afterward?
                </li>
                <li>
                  Will I be able to have skin-to-skin contact with my baby
                  immediately after delivery?
                </li>
                <li>
                  What warning signs during recovery should prompt me to contact
                  you?
                </li>
                <li>
                  What does this mean for future pregnancies and delivery
                  options?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For expecting mothers researching a planned caesarean section
                doctor in Moradabad, Dr. Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) is a relevant local specialist to consider. Here&apos;s an
                analysis of what her website offers:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  She is presented as a leading gynaecologist in Moradabad, with
                  antenatal and postnatal care and high-risk pregnancy
                  management explicitly listed as core services.
                </li>
                <li>
                  The clinic&apos;s use of advanced imaging and monitoring
                  technology supports thorough assessment throughout pregnancy,
                  which is relevant to determining whether a planned C-section
                  may be recommended.
                </li>
                <li>
                  Beyond pregnancy care, her broader experience in laparoscopic
                  and reconstructive gynaecological surgery suggests strong
                  overall surgical competence, relevant to confident, safe
                  C-section delivery.
                </li>
                <li>
                  Patient testimonials on the site generally reflect themes of
                  clear communication and a comfortable consultation experience
                  — both valuable qualities when planning something as
                  significant as a surgical delivery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details of Dr. Priyanka Gynaec, Moradabad
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Managing Emotional Expectations Around a Planned C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                For some women, a planned C-section may feel different from the
                birth experience they originally imagined, and it&apos;s
                completely normal to have mixed feelings about this:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Give yourself permission to process any disappointment, while
                  also recognizing that a safe delivery — however it happens —
                  is the primary goal.
                </li>
                <li>
                  Ask your doctor to explain the medical reasoning clearly,
                  which often helps women feel more at peace with the decision.
                </li>
                <li>
                  Focus on what you can still control, such as your birth
                  environment preferences, support people present, and
                  post-delivery bonding time.
                </li>
                <li>
                  Connect with other mothers who&apos;ve had C-sections, if
                  that feels supportive, to normalize the experience and gather
                  practical tips.
                </li>
                <li>
                  Remember that a planned C-section, done for good medical
                  reasons, is a safe and valid way to bring your baby into the
                  world.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A planned caesarean section can be a safe, well-prepared
                delivery experience when guided by an experienced obstetrician
                who communicates clearly about the reasons, process, and
                recovery involved. Whether recommended for medical reasons or
                chosen after careful discussion with your doctor, proper
                preparation — from pre-surgery instructions to arranging
                post-delivery support at home — helps ensure a smoother
                experience for both you and your baby.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
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
