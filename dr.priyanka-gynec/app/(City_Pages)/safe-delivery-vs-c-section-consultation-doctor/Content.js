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

export default function SafeDeliveryVsCSection() {
  const faqs = [
    {
      q: "Which doctor helps decide between normal delivery and C-section in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers personalised consultation for both delivery options.",
    },
    {
      q: "Is normal delivery always safer than C-section?",
      a: "Not necessarily; the safer option depends on individual pregnancy factors assessed by your doctor.",
    },
    {
      q: "Can I choose my delivery method?",
      a: "In many low-risk pregnancies, preferences can be discussed, but medical safety always guides the final decision.",
    },
    {
      q: "What is VBAC, and am I eligible?",
      a: "VBAC is a vaginal birth after a previous C-section; eligibility depends on individual factors your doctor will assess.",
    },
    {
      q: "How can I book a consultation?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Why might a C-section be recommended during labour?",
      a: "Reasons include fetal distress, abnormal baby position, or labour not progressing safely.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with questions before my consultation?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Does a C-section mean a mother didn't try hard enough during labour?",
      a: "No, a C-section is simply a medically appropriate delivery method when needed, not a reflection of effort or strength.",
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
                Safe Delivery vs C-Section Consultation Doctor: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                One of the biggest questions expecting mothers face as their due
                date approaches is whether they will have a normal (vaginal)
                delivery or a C-section (cesarean section). While every
                pregnancy is different, understanding both options — and having
                an honest, personalised consultation with your doctor — helps you
                feel prepared and confident, whichever path your delivery takes.
              </p>

              <p className="text-gray-700">
                This guide explains the differences between normal delivery and
                C-section, how doctors decide between them, and how to find the
                right safe delivery vs C-section consultation doctor in
                Moradabad, including details about Dr. Priyanka Pachauri.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Normal (Vaginal) Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Normal delivery is the natural process of childbirth through the
                vaginal canal, without surgical intervention.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Generally involves a shorter hospital stay and faster physical
                  recovery
                </li>
                <li>Allows for earlier mobility after delivery</li>
                <li>
                  Associated with a lower risk of certain surgical complications
                </li>
                <li>
                  Supports earlier skin-to-skin contact and breastfeeding
                  initiation in many cases
                </li>
                <li>
                  Involves labour, which can vary significantly in duration and
                  intensity from woman to woman
                </li>
                <li>
                  Requires ongoing monitoring throughout labour to ensure both
                  mother and baby remain safe
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding C-Section (Cesarean Delivery)
              </h2>

              <p className="mb-4 text-gray-700">
                A C-section is a surgical procedure in which the baby is
                delivered through incisions made in the mother&apos;s abdomen
                and uterus.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Can be planned in advance (elective) or performed urgently
                  during labour (emergency)
                </li>
                <li>
                  Generally involves a longer hospital stay and recovery period
                  compared to normal delivery
                </li>
                <li>
                  Involves surgical risks similar to other abdominal surgeries,
                  alongside pregnancy-specific considerations
                </li>
                <li>
                  May be medically necessary for the safety of the mother, baby,
                  or both, depending on the situation
                </li>
                <li>
                  Recovery includes wound care and gradual return to normal
                  activity over several weeks
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is a C-Section Medically Recommended?
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors generally recommend a C-section when it&apos;s the safer
                option for a specific pregnancy, based on factors such as:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fetal distress</strong> – signs that the baby
                  isn&apos;t tolerating labour well
                </li>
                <li>
                  <strong>Abnormal baby position</strong> – such as a breech
                  (bottom-first) position that cannot be safely delivered
                  vaginally
                </li>
                <li>
                  <strong>Placenta praevia</strong> – when the placenta covers
                  the cervix, blocking the baby&apos;s exit path
                </li>
                <li>
                  <strong>Failure to progress in labour</strong> – when labour
                  stalls significantly despite adequate time and effort
                </li>
                <li>
                  <strong>Multiple pregnancies</strong> – twins or more,
                  depending on their position and other factors
                </li>
                <li>
                  <strong>Certain maternal health conditions</strong> – such as
                  specific heart conditions or severe pre-eclampsia
                </li>
                <li>
                  <strong>Previous C-section</strong> – depending on the type
                  of uterine incision and other individual factors
                </li>
                <li>
                  <strong>Umbilical cord complications</strong> – such as cord
                  prolapse, which requires urgent delivery
                </li>
                <li>
                  Very large baby size relative to the mother&apos;s pelvis, in
                  certain cases
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is Normal Delivery Generally Preferred?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The pregnancy is progressing without significant complications
                </li>
                <li>
                  The baby is in a head-down position as labour approaches
                </li>
                <li>
                  The mother&apos;s pelvis and the baby&apos;s size are
                  compatible for vaginal delivery
                </li>
                <li>
                  Labour is progressing steadily, even if it takes time
                </li>
                <li>
                  There are no urgent signs of fetal distress or other
                  complications
                </li>
                <li>
                  The mother has no specific medical conditions that make vaginal
                  delivery unsafe
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can You Choose Between the Two Options?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  In many low-risk pregnancies, women can discuss their delivery
                  preferences with their doctor as part of the birth planning
                  process
                </li>
                <li>
                  However, the final decision should always prioritise safety
                  based on medical assessment, not preference alone
                </li>
                <li>
                  Some elective C-sections are performed based on maternal
                  request after a thorough discussion of risks and benefits with
                  the doctor
                </li>
                <li>
                  A good doctor supports informed choice while being honest about
                  when a particular option isn&apos;t medically advisable
                </li>
                <li>
                  Birth plans should remain flexible, since circumstances during
                  labour can sometimes change the safest path forward
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding VBAC (Vaginal Birth After Cesarean)
              </h2>

              <p className="mb-4 text-gray-700">
                VBAC refers to attempting a normal delivery after a previous
                C-section.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Success depends on factors like the type of previous uterine
                  incision, the reason for the earlier C-section, and current
                  pregnancy factors
                </li>
                <li>
                  VBAC carries a small risk of uterine rupture, which is why it
                  requires careful evaluation and monitoring
                </li>
                <li>
                  Not every woman with a previous C-section is a suitable
                  candidate for VBAC
                </li>
                <li>
                  A thorough discussion with your doctor helps determine whether
                  VBAC is a safe and reasonable option for your specific
                  situation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Normal Delivery and C-Section
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;C-section is always the safer choice&quot;</strong>{" "}
                  – Both options carry their own risks and benefits; the safer
                  choice depends on individual circumstances
                </li>
                <li>
                  <strong>&quot;Once a C-section, always a C-section&quot;</strong>{" "}
                  – Many women can safely attempt VBAC in a subsequent
                  pregnancy, depending on individual factors
                </li>
                <li>
                  <strong>&quot;Normal delivery is always more painful&quot;</strong>{" "}
                  – Pain management options exist for both types of delivery,
                  and pain experiences vary between individuals
                </li>
                <li>
                  <strong>&quot;A C-section means you failed at giving
                  birth&quot;</strong> – A C-section is simply a medically
                  appropriate delivery method when needed; it doesn&apos;t
                  reflect on a mother&apos;s strength or capability
                </li>
                <li>
                  <strong>&quot;You can always choose exactly how you&apos;ll
                  deliver&quot;</strong> – While preferences matter, medical
                  safety considerations ultimately guide the final decision,
                  especially if complications arise
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Consultation Should Cover
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A thorough review of your pregnancy history – including any
                  previous deliveries, surgeries, or complications
                </li>
                <li>
                  Current pregnancy assessment – baby&apos;s position, growth,
                  and any risk factors identified through scans and check-ups
                </li>
                <li>
                  Honest discussion of both options – explaining risks,
                  benefits, and recovery expectations for your specific situation
                </li>
                <li>
                  Your personal preferences and concerns – genuinely listened to
                  and factored into the discussion
                </li>
                <li>
                  A flexible birth plan – acknowledging that circumstances during
                  labour may require adjusting the original plan
                </li>
                <li>
                  Clear communication about warning signs – so you know what to
                  expect and when urgent decisions might be needed
                </li>
                <li>
                  Reassurance and support – helping you feel confident and
                  prepared, regardless of which delivery method is ultimately
                  needed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Doctor for This Consultation Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  An experienced doctor can accurately assess risk factors
                  specific to your pregnancy
                </li>
                <li>
                  Skilled, calm decision-making during labour is critical if
                  circumstances change unexpectedly
                </li>
                <li>
                  A doctor who explains things clearly helps reduce anxiety about
                  the unknowns of childbirth
                </li>
                <li>
                  Access to both vaginal delivery support and surgical capability
                  ensures you&apos;re prepared for either path
                </li>
                <li>
                  A doctor who respects your preferences while prioritising
                  safety builds genuine trust throughout your pregnancy journey
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: Guiding Delivery Decisions in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a
                well-recognised gynaecologist in Moradabad offering
                comprehensive pregnancy and delivery care, supporting both
                normal delivery and surgical delivery when medically necessary.
                Her clinic follows the guiding principle of &quot;Her Health
                First,&quot; ensuring every expecting mother receives honest,
                personalised guidance about her delivery options.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Relevant Services Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy & Birthing Care – supportive, customised birthing
                  experiences prioritising safety
                </li>
                <li>
                  Antenatal Services – structured prenatal screenings to identify
                  risk factors early
                </li>
                <li>
                  Normal Delivery – expert, gentle care that prioritises natural
                  delivery wherever safely possible
                </li>
                <li>High-risk pregnancy monitoring and management</li>
                <li>Postnatal care and recovery support</li>
                <li>
                  3D laparoscopic gynaecological surgery, relevant surgical skill
                  applicable to cesarean delivery
                </li>
                <li>Paediatric care for newborns after delivery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Supporting Informed Delivery Decisions
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D & 4D ultrasound machines (Voluson E22BT2024) for accurate
                  assessment of baby&apos;s position, size, and growth
                </li>
                <li>
                  Careful, ongoing antenatal monitoring to identify risk factors
                  that may influence delivery planning
                </li>
                <li>
                  An integrated care team following your pregnancy from early
                  screening through delivery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Trust This Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                According to the clinic&apos;s own patient communication, trust
                is built on:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Expertise with heart</strong> – strong academic
                  credentials and specialised training in obstetric care
                </li>
                <li>
                  <strong>Continuity of care</strong> – the same team supporting
                  you through pregnancy, labour, and delivery decisions
                </li>
                <li>
                  <strong>Outcomes patients hope for</strong> – safe deliveries,
                  healthy babies, and confidence in the chosen delivery path
                </li>
                <li>
                  <strong>Trust earned daily</strong> – reputation built through
                  mother-to-mother referrals rather than paid promotion
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Approach Your Delivery Consultation
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Discuss your delivery preferences early in
                  pregnancy</strong>, understanding they may need to remain
                  flexible.
                </li>
                <li>
                  <strong>Step 2: Attend all recommended antenatal check-ups and
                  scans</strong> to monitor for risk factors.
                </li>
                <li>
                  <strong>Step 3: Ask your doctor directly about your specific
                  risk profile</strong> as your due date approaches.
                </li>
                <li>
                  <strong>Step 4: Discuss VBAC eligibility</strong> if
                  you&apos;ve had a previous C-section.
                </li>
                <li>
                  <strong>Step 5: Prepare a flexible birth plan</strong>,
                  understanding that circumstances during labour may require
                  adjustments.
                </li>
                <li>
                  <strong>Step 6: Ask about pain management options</strong>{" "}
                  available for both normal delivery and C-section.
                </li>
                <li>
                  <strong>Step 7: Trust your doctor&apos;s guidance during
                  labour</strong>, since real-time assessment is critical for
                  safety.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Continuity of care with the same doctor from pregnancy through
                  delivery, supporting informed, personalised decision-making
                </li>
                <li>
                  Quick access to both vaginal delivery support and surgical
                  capability if needed
                </li>
                <li>
                  Easier, more frequent antenatal visits without long-distance
                  travel
                </li>
                <li>
                  Lower overall cost compared to metro-city hospitals
                </li>
                <li>
                  Family support nearby during labour, delivery, and recovery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
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
                      <p className="font-semibold">
                        Phone / Call for Appointment
                      </p>
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
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh, 244001
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
                gynaecologistmoradabad.com
              </h2>

              <p className="mb-4 text-gray-700">
                Since a short analysis of the official website was requested,
                here is a quick and honest breakdown:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Directly relevant services listed</strong> – Normal
                  Delivery and Pregnancy & Birthing Care are explicitly named,
                  showing clear focus on delivery-related consultation.
                </li>
                <li>
                  <strong>Surgical capability also evident</strong> – The
                  site&apos;s emphasis on 3D laparoscopic surgery reflects the
                  surgical skill relevant to cesarean delivery when medically
                  necessary.
                </li>
                <li>
                  <strong>Technology transparency</strong> – Mentioning the
                  specific 3D/4D ultrasound machine builds confidence in
                  accurate assessment of baby&apos;s position and growth, both
                  relevant to delivery planning.
                </li>
                <li>
                  <strong>Reassuring, patient-first messaging</strong> – The
                  tagline &quot;Her Health First&quot; fits well with a
                  consultation approach that respects both safety and personal
                  preference.
                </li>
                <li>
                  <strong>Active blog with pregnancy-related content</strong>{" "}
                  – The trimester-by-trimester birthing guide blog suggests
                  engagement with pregnancy topics, though a dedicated
                  normal-vs-C-section comparison article is not currently listed.
                </li>
                <li>
                  <strong>Easy-to-access contact details</strong> – Phone,
                  WhatsApp, and email are clearly visible in the header and
                  footer for quick appointment booking.
                </li>
                <li>
                  <strong>Genuine patient testimonials</strong> – Real feedback
                  (such as from patient &quot;Rudri J&quot;) adds authentic
                  social proof.
                </li>
                <li>
                  <strong>Local SEO fundamentals present</strong> – A complete
                  clinic address with pin code is listed, supporting visibility
                  for Moradabad-based searches.
                </li>
                <li>
                  <strong>Improvement opportunity</strong> – Adding a dedicated
                  blog post comparing normal delivery and C-section, along with
                  VBAC eligibility information, could help the website rank
                  better for this commonly searched decision-making topic.
                </li>
              </ul>
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