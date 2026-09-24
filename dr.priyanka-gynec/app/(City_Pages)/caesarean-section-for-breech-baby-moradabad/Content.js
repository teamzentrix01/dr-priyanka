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

export default function CaesareanSectionForBreechBaby() {
  const faqs = [
    {
      q: "What does it mean if my baby is breech?",
      a: "It means the baby is positioned bottom-first or feet-first, rather than the typical head-down position.",
    },
    {
      q: "Who manages breech pregnancies in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers evaluation and delivery planning for breech presentation.",
    },
    {
      q: "Can a breech baby be turned before delivery?",
      a: "Yes, a procedure called ECV can sometimes be used to manually turn the baby, though success isn't guaranteed.",
    },
    {
      q: "Is caesarean delivery always necessary for breech babies?",
      a: "It's the most commonly recommended approach, though vaginal breech delivery may be considered in select, carefully evaluated cases.",
    },
    {
      q: "When is breech presentation usually confirmed?",
      a: "Typically during third-trimester antenatal visits, often around 36 weeks or later.",
    },
    {
      q: "Is ECV safe?",
      a: "It's performed in a hospital setting with monitoring, and while generally safe, it carries a small risk of complications.",
    },
    {
      q: "Does a breech baby mean something is wrong with my pregnancy?",
      a: "No, breech presentation usually occurs without a specific cause and doesn't indicate a problem with the baby.",
    },
    {
      q: "Can I still have a vaginal delivery in a future pregnancy after a breech caesarean?",
      a: "Many women are candidates for VBAC in future pregnancies, depending on individual factors evaluated by their doctor.",
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
                Caesarean Section for Breech Baby: What Expecting Mothers in
                Moradabad Should Know
              </h1>

              <p className="mb-4 text-gray-700">
                Discovering that your baby is in a breech position — meaning
                positioned feet or bottom first rather than head down — can feel
                unsettling, especially as your due date approaches. While a
                breech presentation does change the delivery conversation,
                it&apos;s more common than many expecting mothers realize, and
                there are well-established medical approaches to managing it
                safely. Understanding what breech presentation means, whether it
                can potentially be corrected, and when a caesarean section
                becomes the safer choice can help ease anxiety and support
                informed decision-making. This article explains everything
                expecting mothers in Moradabad should know about breech
                presentation and caesarean delivery, and how Dr. Priyanka
                Pachauri supports mothers through this specific pregnancy
                situation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does Breech Presentation Mean
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A breech presentation means the baby is positioned bottom-first
                  or feet-first in the uterus, rather than the typical head-down
                  position.
                </li>
                <li>
                  It&apos;s relatively common earlier in pregnancy, with many
                  babies naturally turning head-down as the due date approaches.
                </li>
                <li>
                  By around 36 weeks, most babies have settled into a head-down
                  position, which is why breech presentation becomes a more
                  significant consideration closer to term.
                </li>
                <li>
                  A small percentage of pregnancies remain breech at term,
                  requiring specific evaluation and delivery planning.
                </li>
                <li>
                  Breech presentation itself isn&apos;t caused by anything the
                  mother did, and in most cases, there&apos;s no identifiable
                  single cause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Breech Presentation
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Frank Breech
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The baby&apos;s bottom is positioned to deliver first, with
                  legs extended straight up toward the baby&apos;s head.
                </li>
                <li>
                  The most common type of breech presentation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Complete Breech
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The baby&apos;s bottom is positioned to deliver first, with
                  both hips and knees flexed, in a cross-legged type position.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Footling Breech
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  One or both of the baby&apos;s feet are positioned to deliver
                  first.
                </li>
                <li>
                  Generally considered to carry a higher risk profile compared
                  to other breech types.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors for Breech Presentation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Multiple pregnancies</strong> (twins or more), where
                  there&apos;s less room for each baby to move into the ideal
                  position.
                </li>
                <li>
                  <strong>Excess or insufficient amniotic fluid</strong>, which
                  can affect the baby&apos;s ability to turn.
                </li>
                <li>
                  <strong>Placenta previa</strong>, where the placenta&apos;s
                  position may limit the space available for the baby to turn.
                </li>
                <li>
                  <strong>Uterine abnormalities</strong>, such as a uterine
                  septum or fibroids, which can restrict the baby&apos;s
                  movement.
                </li>
                <li>
                  <strong>Preterm labor</strong>, since babies are more likely
                  to be breech earlier in pregnancy before naturally turning.
                </li>
                <li>
                  <strong>A previous breech pregnancy</strong>, which may
                  slightly increase the likelihood in subsequent pregnancies.
                </li>
                <li>
                  In many cases, no specific cause is identified, and breech
                  presentation simply occurs without any clear explanation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Breech Presentation Is Diagnosed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Abdominal examination</strong>, where your doctor can
                  often feel the baby&apos;s position by palpating the abdomen.
                </li>
                <li>
                  <strong>Ultrasound confirmation</strong>, which provides a
                  clear and accurate assessment of the baby&apos;s exact
                  position.
                </li>
                <li>
                  Typically identified during routine antenatal visits in the
                  third trimester, particularly as the due date approaches.
                </li>
                <li>
                  Confirmed closer to delivery, since babies can still turn on
                  their own up until relatively late in pregnancy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                External Cephalic Version (ECV): Attempting to Turn the Baby
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  ECV is a procedure where a doctor attempts to manually turn
                  the baby from breech to a head-down position by applying
                  gentle, guided pressure to the mother&apos;s abdomen.
                </li>
                <li>
                  Usually attempted around 36 to 37 weeks of pregnancy, when
                  there&apos;s still time for the baby to remain in the
                  corrected position before labor.
                </li>
                <li>
                  Performed in a hospital setting with fetal monitoring, given
                  the small risk of complications.
                </li>
                <li>
                  Success rates vary, and while ECV works for many women, it
                  isn&apos;t successful in every case.
                </li>
                <li>
                  Not suitable for every pregnancy, since certain factors, such
                  as placenta previa or specific fetal concerns, may make ECV
                  inappropriate.
                </li>
                <li>
                  If successful, it significantly increases the chance of a
                  vaginal delivery, avoiding the need for a caesarean
                  specifically due to breech positioning.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Vaginal Breech Delivery May Be Considered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  In select, carefully evaluated cases, vaginal breech delivery
                  may be considered under close medical supervision.
                </li>
                <li>
                  Generally requires specific criteria to be met, including
                  favorable baby position, adequate pelvic size, and estimated
                  baby weight within a certain range.
                </li>
                <li>
                  Requires a hospital and medical team experienced in managing
                  vaginal breech delivery, given the added complexity compared
                  to standard vaginal delivery.
                </li>
                <li>
                  Many hospitals and doctors recommend caesarean delivery as the
                  safer default for breech presentation, given the potential
                  complications associated with vaginal breech birth.
                </li>
                <li>
                  The decision is highly individualized, based on a thorough
                  discussion between the mother and her medical team.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Caesarean Delivery Is Often Recommended for Breech Babies
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Reduces the risk of complications</strong> associated
                  with vaginal breech delivery, such as difficulty delivering
                  the baby&apos;s head after the body has already been delivered.
                </li>
                <li>
                  <strong>Provides a more controlled, predictable delivery
                  process</strong> for a presentation that carries added
                  complexity.
                </li>
                <li>
                  <strong>Generally recommended</strong> when ECV is unsuccessful
                  or not attempted, and the baby remains breech close to the due
                  date.
                </li>
                <li>
                  <strong>Supported by extensive clinical experience and
                  guidelines</strong> favoring caesarean delivery for breech
                  presentation in most circumstances.
                </li>
                <li>
                  <strong>Allows for careful planning</strong>, since a breech
                  presentation identified in advance typically allows time to
                  schedule a planned caesarean rather than face an unexpected
                  emergency situation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect if a Caesarean Is Planned for Breech Presentation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The procedure itself is similar to a standard planned
                  caesarean delivery, typically performed under regional
                  anesthesia.
                </li>
                <li>
                  Timing is usually planned close to your due date, once
                  it&apos;s confirmed the baby has remained breech.
                </li>
                <li>
                  Your medical team will discuss the specific surgical plan based
                  on your individual pregnancy details.
                </li>
                <li>
                  Recovery expectations are generally similar to other planned
                  caesarean deliveries, with a hospital stay of a few days
                  followed by several weeks of at-home healing.
                </li>
                <li>
                  Future pregnancies can often still be discussed in terms of
                  delivery options, including potential VBAC candidacy,
                  depending on individual circumstances.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Considerations When Facing a Breech Diagnosis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It&apos;s completely normal to feel disappointed or anxious if
                  you were hoping for a vaginal delivery and learn your baby is
                  breech.
                </li>
                <li>
                  Breech presentation is not something you caused, and it
                  doesn&apos;t reflect anything about your pregnancy being
                  managed incorrectly.
                </li>
                <li>
                  Understanding your options, including ECV, can help you feel
                  more in control of the decision-making process.
                </li>
                <li>
                  Open communication with your doctor about your preferences and
                  concerns helps ensure you feel heard throughout the process.
                </li>
                <li>
                  A well-planned caesarean, when it&apos;s the safest option, can
                  still be a positive delivery experience with the right
                  preparation and support.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Breech Presentation and Caesarean
                Delivery Care in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) provides
                comprehensive antenatal monitoring and delivery care for breech
                presentations in Moradabad. According to her official website, (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), her relevant services include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Advanced diagnostic imaging</strong>, including a
                  Voluson E22 3D/4D ultrasound machine, supporting accurate
                  confirmation of fetal position throughout the third trimester.
                </li>
                <li>
                  <strong>High-risk pregnancy management</strong>, with
                  structured monitoring to identify and plan around presentations
                  like breech well before delivery.
                </li>
                <li>
                  A stated commitment to{" "}
                  <strong>encouraging natural, normal vaginal delivery</strong>{" "}
                  wherever safely possible, while being fully prepared to
                  perform caesarean delivery when medically indicated, such as
                  with breech presentation.
                </li>
                <li>
                  <strong>Antenatal and postnatal care</strong>, ensuring
                  continuity from pregnancy monitoring through delivery and
                  recovery.
                </li>
                <li>
                  A <strong>&quot;Her Health First&quot; approach</strong>,
                  meaning delivery planning is explained clearly, with time given
                  to discuss concerns and understand the reasoning behind
                  recommendations.
                </li>
                <li>
                  Patient testimonials on the website consistently reflect a
                  supportive, well-communicated care experience — particularly
                  valuable when navigating a pregnancy complication like breech
                  presentation that can bring added anxiety close to delivery.
                  The clinic is located in Gandhi Nagar, Moradabad, making it
                  accessible for antenatal monitoring and delivery planning from
                  across the city.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor About Breech Presentation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  At what point in my pregnancy will breech positioning be
                  confirmed and delivery planning discussed?
                </li>
                <li>
                  Am I a candidate for ECV, and what are the associated risks and
                  success rates in my case?
                </li>
                <li>
                  If my baby remains breech, when would a caesarean delivery
                  typically be scheduled?
                </li>
                <li>
                  What does the recovery process look like after a planned
                  caesarean for breech presentation?
                </li>
                <li>
                  How might this affect delivery planning for future pregnancies?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare if Your Baby Is Breech
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Attend all recommended antenatal appointments during the later
                  weeks of pregnancy, since these are when breech presentation
                  is most likely to be identified and monitored.
                </li>
                <li>
                  Discuss ECV eligibility early, so you have time to consider
                  this option if your baby remains breech as you approach 36
                  weeks.
                </li>
                <li>
                  Ask your doctor about specific exercises or positions
                  sometimes suggested to encourage the baby to turn,
                  understanding that evidence for their effectiveness varies.
                </li>
                <li>
                  Prepare questions in advance for your antenatal appointments,
                  so you can make the most of each discussion about your
                  baby&apos;s position and delivery planning.
                </li>
                <li>
                  If a caesarean is planned, prepare similarly to any planned
                  caesarean delivery, including packing a hospital bag,
                  arranging support at home, and understanding the recovery
                  process.
                </li>
                <li>
                  Allow yourself to process any disappointment, if a vaginal
                  delivery was your original plan, while also focusing on the
                  safest path forward for you and your baby.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Third Trimester Monitoring for Breech Presentation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular ultrasound checks confirm the baby&apos;s ongoing
                  position as your due date approaches.
                </li>
                <li>
                  Your doctor will track how consistently the baby remains
                  breech, since some babies continue to move and change position
                  until relatively late in pregnancy.
                </li>
                <li>
                  Delivery planning discussions typically intensify once breech
                  presentation appears to be persistent, usually from around 36
                  weeks onward.
                </li>
                <li>
                  You&apos;ll have the opportunity to discuss ECV, potential
                  vaginal breech delivery criteria, or planned caesarean timing
                  as part of this ongoing monitoring process.
                </li>
                <li>
                  Clear communication throughout this period helps ensure you
                  feel prepared and informed, regardless of which delivery path
                  is ultimately recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Breech Presentation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Breech presentation means something is wrong
                  with the baby.&quot;</strong> In most cases, breech
                  presentation occurs without any specific cause and
                  doesn&apos;t indicate a problem with the baby&apos;s health.
                </li>
                <li>
                  <strong>&quot;Nothing can be done if a baby is
                  breech.&quot;</strong> ECV offers a chance to turn the baby in
                  many cases, and even when unsuccessful, careful delivery
                  planning ensures a safe outcome.
                </li>
                <li>
                  <strong>&quot;Vaginal breech delivery is never an
                  option.&quot;</strong> In carefully selected cases with the
                  right medical team and conditions, it may be considered,
                  though caesarean is more commonly recommended.
                </li>
                <li>
                  <strong>&quot;A caesarean for breech presentation is always an
                  emergency.&quot;</strong> Most breech caesareans are planned
                  well in advance once the presentation is confirmed close to
                  term.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                To discuss breech presentation and delivery planning with Dr.
                Priyanka Pachauri in Moradabad, reach out through any of the
                following:
              </p>

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
