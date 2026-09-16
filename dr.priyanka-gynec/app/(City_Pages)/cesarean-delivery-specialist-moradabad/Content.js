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

export default function CesareanDeliverySpecialist() {
  const faqs = [
    {
      q: "What is a cesarean delivery?",
      a: "It's a surgical procedure where the baby is delivered through incisions in the abdomen and uterus, rather than vaginal birth.",
    },
    {
      q: "Who offers cesarean delivery care in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) provides both planned and emergency cesarean delivery care.",
    },
    {
      q: "Is a cesarean delivery always planned in advance?",
      a: "No, it can be planned based on known factors or become necessary as an emergency procedure during labor.",
    },
    {
      q: "What type of anesthesia is used during a cesarean?",
      a: "Usually spinal or epidural anesthesia, allowing the mother to remain awake, though general anesthesia is used in certain emergencies.",
    },
    {
      q: "How long does recovery from a cesarean typically take?",
      a: "Full recovery generally takes about six weeks, though initial healing milestones happen earlier.",
    },
    {
      q: "Can I have a vaginal delivery after a previous cesarean?",
      a: "Many women are candidates for VBAC, depending on individual medical factors evaluated by their doctor.",
    },
    {
      q: "How do I book an antenatal consultation for delivery planning?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does the clinic encourage vaginal delivery when possible?",
      a: "Yes, the clinic states a commitment to encouraging normal vaginal delivery wherever it can be safely achieved.",
    },
    {
      q: "What imaging technology is used during pregnancy monitoring?",
      a: "The clinic uses a Voluson E22 3D/4D ultrasound machine for detailed monitoring throughout pregnancy.",
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
                Cesarean Delivery Specialist in Moradabad: What Every Expecting
                Mother Should Know
              </h1>

              <p className="mb-4 text-gray-700">
                A cesarean delivery, commonly known as a C-section, is one of
                the most performed major surgeries in obstetric care today.
                Whether it&apos;s planned in advance due to a known medical
                reason or becomes necessary unexpectedly during labor,
                understanding how the procedure works, why it might be
                recommended, and what to expect can significantly ease a
                mother&apos;s anxiety around the process.
              </p>

              <p className="text-gray-700">
                In Moradabad, choosing an experienced cesarean delivery
                specialist matters greatly, since the safety of both mother and
                baby depends on skilled surgical judgment and careful
                perioperative care. This article explains when a cesarean is
                recommended, what the procedure involves, recovery expectations,
                and why Dr. Priyanka Pachauri is a trusted choice for cesarean
                delivery in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Cesarean Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                A cesarean delivery is a surgical procedure in which a baby is
                delivered through incisions made in the mother&apos;s abdomen
                and uterus, rather than through vaginal birth. Key facts
                include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It can be planned in advance based on known medical factors,
                  or performed as an emergency procedure during labor
                </li>
                <li>
                  It&apos;s a major abdominal surgery, typically performed under
                  regional anesthesia, allowing the mother to remain awake
                  during delivery
                </li>
                <li>
                  The procedure itself usually takes around 45 minutes to an
                  hour, though the baby is often delivered within the first
                  several minutes
                </li>
                <li>
                  It&apos;s a well-established, generally safe procedure when
                  performed by an experienced surgical team, though like any
                  major surgery, it carries some risks
                </li>
                <li>
                  Recovery typically takes longer than vaginal delivery, given
                  the nature of the surgery involved
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Reasons for a Planned Cesarean Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Placenta previa, where the placenta covers or is very close to
                  the cervix, making vaginal delivery unsafe
                </li>
                <li>
                  Breech presentation, where the baby is positioned feet or
                  bottom first rather than head down, and attempts to turn the
                  baby haven&apos;t been successful
                </li>
                <li>
                  Multiple pregnancies, such as twins or triplets, in certain
                  positions or circumstances
                </li>
                <li>
                  Previous cesarean delivery, when a repeat cesarean is deemed
                  the safer option based on individual factors
                </li>
                <li>
                  Certain maternal health conditions, such as specific heart
                  conditions or high blood pressure disorders, where labor could
                  pose additional risk
                </li>
                <li>
                  Large baby size or a narrow maternal pelvis, making vaginal
                  delivery potentially unsafe
                </li>
                <li>
                  Active genital herpes infection, which can pose transmission
                  risk to the baby during vaginal delivery
                </li>
                <li>
                  Certain fetal conditions, where a controlled surgical delivery
                  is considered safer for the baby
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Reasons for an Emergency Cesarean Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fetal distress during labor, indicated by concerning changes
                  in the baby&apos;s heart rate
                </li>
                <li>
                  Labor that isn&apos;t progressing, despite adequate time and
                  appropriate interventions
                </li>
                <li>
                  Umbilical cord prolapse, a rare but serious complication
                  requiring immediate delivery
                </li>
                <li>
                  Placental abruption, where the placenta separates from the
                  uterine wall before delivery
                </li>
                <li>
                  Failed induction of labor, when labor doesn&apos;t
                  successfully begin or progress despite medical efforts
                </li>
                <li>
                  Sudden changes in maternal health, such as a significant rise
                  in blood pressure during labor
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During a Cesarean Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Anesthesia is administered, typically spinal or epidural
                  anesthesia, allowing the mother to be awake and alert during
                  delivery
                </li>
                <li>
                  A surgical incision is made in the lower abdomen, usually
                  horizontal, just above the pubic bone
                </li>
                <li>
                  A second incision is made in the uterus, through which the
                  baby is delivered
                </li>
                <li>
                  The baby is typically delivered within the first several
                  minutes of the procedure beginning
                </li>
                <li>
                  The placenta is then removed, and the uterine and abdominal
                  incisions are carefully closed in layers
                </li>
                <li>
                  Skin-to-skin contact and immediate newborn care are often
                  possible shortly after delivery, depending on hospital
                  protocol and the baby&apos;s condition
                </li>
                <li>
                  The entire procedure, including closing incisions, generally
                  takes about 45 minutes to an hour
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Anesthesia Used
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Spinal anesthesia</strong>, a single injection that
                  numbs the lower body, commonly used for planned cesarean
                  deliveries
                </li>
                <li>
                  <strong>Epidural anesthesia</strong>, often already in place
                  if labor was attempted before the decision for cesarean
                  delivery was made
                </li>
                <li>
                  <strong>General anesthesia</strong>, used in certain emergency
                  situations where speed is essential or regional anesthesia
                  isn&apos;t suitable
                </li>
                <li>
                  The choice of anesthesia depends on the urgency of the
                  situation and the mother&apos;s individual health factors,
                  decided in consultation with the anesthesiology and obstetric
                  team
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks and Considerations of Cesarean Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Like any major surgery, it carries some risk of infection,
                  bleeding, or blood clots, though these are actively monitored
                  and managed
                </li>
                <li>
                  Recovery generally takes longer than vaginal delivery,
                  involving a hospital stay of a few days followed by weeks of
                  at-home healing
                </li>
                <li>
                  Future pregnancies may involve additional considerations, such
                  as evaluating candidacy for VBAC (vaginal birth after
                  cesarean) versus a repeat cesarean
                </li>
                <li>
                  Scar-related issues can occasionally develop over time, though
                  these are generally manageable with proper evaluation and care
                  if they arise
                </li>
                <li>
                  Discussing risks and benefits clearly with your doctor helps
                  ensure informed decision-making, whether the cesarean is
                  planned or becomes necessary during labor
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Cesarean Delivery When Medically Indicated
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Provides a controlled, predictable delivery process in
                  situations where vaginal delivery carries higher risk
                </li>
                <li>
                  Can be scheduled in advance, allowing for careful preparation
                  when a planned cesarean is recommended
                </li>
                <li>
                  Reduces certain risks associated with prolonged or complicated
                  labor, in cases where those risks are significant
                </li>
                <li>
                  Allows for prompt intervention in emergency situations,
                  potentially preventing more serious complications for mother or
                  baby
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing an Experienced Cesarean Delivery Specialist Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgical skill and experience directly affect safety and
                  outcomes, particularly in more complex cases
                </li>
                <li>
                  Quick, confident decision-making is essential in emergency
                  situations, where timing can significantly affect outcomes
                </li>
                <li>
                  An experienced surgeon can better anticipate and manage
                  unexpected complications during the procedure
                </li>
                <li>
                  Clear communication before, during, and after surgery helps
                  reduce anxiety and ensures the mother understands what to
                  expect
                </li>
                <li>
                  Coordinated postoperative care, including pain management and
                  monitoring, supports a smoother recovery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Cesarean Delivery Specialist in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) provides
                comprehensive delivery care in Moradabad, including both planned
                and emergency cesarean deliveries when medically necessary.
                According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her approach to delivery care includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A stated focus on encouraging natural, normal vaginal delivery
                  wherever safely possible, while remaining fully equipped and
                  experienced to perform cesarean delivery when medically
                  indicated
                </li>
                <li>
                  High-risk pregnancy management, with structured monitoring
                  throughout pregnancy to identify factors that may influence
                  delivery planning
                </li>
                <li>
                  Advanced diagnostic imaging, including a Voluson E22 3D/4D
                  ultrasound machine, supporting accurate assessment of fetal
                  position, placental location, and other delivery-relevant
                  factors
                </li>
                <li>
                  Antenatal and postnatal care, ensuring continuity from
                  pregnancy monitoring through delivery and recovery
                </li>
                <li>
                  A &quot;Her Health First&quot; approach, meaning delivery
                  decisions are explained clearly, with the mother&apos;s
                  understanding and, where possible, preferences taken into
                  account alongside medical safety
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently reflect a
                supportive, well-communicated care experience — an important
                quality for a procedure that can be both planned in advance or,
                at times, an unexpected turn during labor. The clinic is located
                in Gandhi Nagar, Moradabad, making it accessible for antenatal
                care and delivery planning from across the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor About Cesarean Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Is a cesarean delivery recommended for my specific pregnancy,
                  and what&apos;s the medical reason behind it?
                </li>
                <li>
                  What type of anesthesia is typically used, and are there
                  specific considerations for my case?
                </li>
                <li>
                  What does the recovery process generally look like after
                  cesarean delivery?
                </li>
                <li>
                  How will this affect delivery planning for any future
                  pregnancies?
                </li>
                <li>
                  What can I expect immediately after delivery, including
                  skin-to-skin contact and newborn care?
                </li>
                <li>
                  What are the specific risks in my individual case, given my
                  health history?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for a Planned Cesarean Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                If a cesarean has been scheduled in advance, some preparation
                can help the process feel more manageable:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow pre-operative fasting instructions provided by your
                  medical team, typically avoiding food and drink for a
                  specified period beforehand
                </li>
                <li>
                  Pack a hospital bag in advance, including items for both
                  yourself and the baby, well before your scheduled date
                </li>
                <li>
                  Arrange support at home for the recovery period, since
                  you&apos;ll need help with household tasks and possibly older
                  children during the initial weeks
                </li>
                <li>
                  Discuss your birth plan preferences, including skin-to-skin
                  contact and immediate newborn care, with your doctor
                  beforehand
                </li>
                <li>
                  Ask about hospital policies, such as visitor guidelines and
                  expected length of stay, so you know what to expect
                </li>
                <li>
                  Prepare questions about pain management for after the surgery,
                  so you feel informed about your recovery options
                </li>
                <li>
                  Arrange transportation home, since you won&apos;t be able to
                  drive for a period following surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect Immediately After Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the immediate postoperative period can help ease
                anxiety:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You&apos;ll be moved to a recovery area for monitoring
                  shortly after the surgery is completed
                </li>
                <li>
                  Pain management will be provided, transitioning from immediate
                  post-surgical medication to oral pain relief over the
                  following days
                </li>
                <li>
                  You&apos;ll be encouraged to begin gentle movement within the
                  first day, which supports circulation and reduces the risk of
                  complications
                </li>
                <li>
                  A catheter is typically used for a short period and removed
                  once you&apos;re able to move around more freely
                </li>
                <li>
                  Breastfeeding support is generally offered soon after
                  delivery, with staff available to help with positioning that
                  accommodates your healing incision
                </li>
                <li>
                  Your hospital stay will typically last a few days, allowing
                  the medical team to monitor both your recovery and your
                  baby&apos;s health before discharge
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Cesarean Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;A cesarean means something went
                  wrong.&quot;{" "}
                  <strong>Fact:</strong> Many cesareans are planned in advance
                  for specific medical reasons and reflect careful, proactive
                  care rather than a failure of the birth process.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;You&apos;re always asleep during
                  a cesarean.&quot;{" "}
                  <strong>Fact:</strong> Most cesareans are performed under
                  regional anesthesia, allowing the mother to remain awake and
                  alert during delivery.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Recovery is always significantly
                  harder than vaginal delivery.&quot;{" "}
                  <strong>Fact:</strong> While recovery generally takes longer,
                  many women recover well with proper care and support.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Once you have one cesarean, all
                  future deliveries must also be cesarean.&quot;{" "}
                  <strong>Fact:</strong> Many women are candidates for VBAC
                  (vaginal birth after cesarean) in future pregnancies,
                  depending on individual factors.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Cesarean delivery is always an
                  emergency procedure.&quot;{" "}
                  <strong>Fact:</strong> Many cesareans are planned well in
                  advance based on known medical factors identified during
                  pregnancy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                To discuss delivery planning with Dr. Priyanka Pachauri in
                Moradabad, reach out through any of the following:
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & High-Risk Pregnancy Specialist (MBBS, MS)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone</p>
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