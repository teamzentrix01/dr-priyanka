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

export default function DoctorForBabyPositionCheckMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for a baby position check in Moradabad?",
      a: "A gynaecologist with antenatal expertise, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "When should baby position be checked?",
      a: "Mainly from 32 to 36 weeks onward. Ask at your regular antenatal visit.",
    },
    {
      q: "Can ultrasound confirm baby position?",
      a: "Yes, ultrasound shows the exact position clearly. WhatsApp: +91 89796 70705.",
    },
    {
      q: "Can a breech baby turn on its own?",
      a: "Yes, many turn before 36 weeks, but it becomes less likely later.",
    },
    {
      q: "Is normal delivery possible with a breech baby?",
      a: "Only in selected cases. Your doctor will advise the safest option.",
    },
    {
      q: "What is ECV?",
      a: "A procedure where a trained doctor gently turns the baby head down from outside the abdomen.",
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
                Doctor for Baby Position Check in Moradabad: What Every Expecting
                Mother Should Know
              </h1>

              <p className="mb-4 text-gray-700">
                As your due date nears, one question comes up again and again:
                &quot;Is my baby in the right position?&quot; If you are looking
                for a doctor for baby position check in Moradabad, this guide
                explains how position is assessed, why it matters and what your
                options are.
              </p>

              <p className="mb-4 text-gray-700">
                Most babies turn head down on their own before delivery. When
                they don&apos;t, timely detection gives you more choices and a
                safer plan.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does &quot;Baby Position&quot; Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                Baby position, or fetal presentation, describes which part of the
                baby lies closest to the birth canal.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Cephalic (head down):</strong> the ideal and most
                  common position for birth.
                </li>
                <li>
                  <strong>Breech:</strong> the buttocks or feet are down and the
                  head is up.
                </li>
                <li>
                  <strong>Transverse lie:</strong> the baby lies sideways across
                  the womb.
                </li>
                <li>
                  <strong>Oblique lie:</strong> the baby lies at an angle.
                </li>
                <li>
                  <strong>Posterior (back-to-back):</strong> head down but
                  facing the mother&apos;s front, which can lengthen labour.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Breech Position
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Frank breech:</strong> buttocks down, legs straight up
                  by the head.
                </li>
                <li>
                  <strong>Complete breech:</strong> buttocks down, legs folded,
                  with knees bent.
                </li>
                <li>
                  <strong>Footling breech:</strong> one or both feet point down.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Each type affects the delivery plan differently, so your
                doctor&apos;s assessment matters.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does Baby Position Matter?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It influences whether normal delivery is safe and suitable.
                </li>
                <li>
                  It affects how long and how difficult labour may be.
                </li>
                <li>
                  Breech or sideways positions can carry a higher risk of
                  complications in labour.
                </li>
                <li>
                  It helps your doctor decide between normal delivery, assisted
                  options or a caesarean.
                </li>
                <li>
                  Knowing early lets you plan the hospital, timing and support
                  in advance.
                </li>
                <li>It reduces last-minute anxiety and emergencies.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Does the Baby Settle Into Position?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Before 28 weeks:</strong> the baby moves freely, so
                  position changes are normal and no concern.
                </li>
                <li>
                  <strong>28 to 32 weeks:</strong> many babies begin turning
                  head down.
                </li>
                <li>
                  <strong>32 to 36 weeks:</strong> most babies settle into their
                  final position.
                </li>
                <li>
                  <strong>After 36 weeks:</strong> the baby has less room, so
                  turning becomes less likely.
                </li>
                <li>
                  <strong>Engagement:</strong> the head drops into the pelvis,
                  often a few weeks before delivery in first pregnancies.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Position checks are therefore most meaningful in the last weeks
                of pregnancy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is Baby Position Checked?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Abdominal Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your doctor gently feels your abdomen to identify the head,
                  back and limbs.
                </li>
                <li>It is quick, painless and done at routine visits.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Ultrasound Scan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirms the exact position with clear images.</li>
                <li>
                  Checks fluid level, placenta location and estimated baby
                  weight.
                </li>
                <li>
                  The 3D/4D ultrasound facility at Dr. Priyanka&apos;s clinic
                  provides detailed views of the baby.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Vaginal Examination (Near Labour)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Assesses cervix opening and how low the baby&apos;s head has
                  descended.
                </li>
                <li>Done only when medically needed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Fetal Heart Rate Monitoring
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sometimes used along with position checks to confirm the
                  baby&apos;s well-being.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs That May Suggest Your Baby&apos;s Position
              </h2>

              <p className="mb-4 text-gray-700">
                These are not diagnostic, but they can give clues.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kicks felt low in the abdomen may suggest a head-down baby.
                </li>
                <li>
                  Strong kicks high under the ribs can be feet, which suggests
                  head down as well.
                </li>
                <li>
                  Hiccups felt lower or higher may hint at position changes.
                </li>
                <li>
                  A hard round lump under the ribs can be the head if the baby
                  is breech.
                </li>
                <li>
                  A wide, unusually shaped belly can indicate a sideways lie.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Only an examination or scan can confirm position, so avoid
                guessing from symptoms alone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Might a Baby Not Turn Head Down?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  First pregnancy with firm abdominal muscles.
                </li>
                <li>Too much or too little amniotic fluid.</li>
                <li>Placenta covering the cervix (placenta praevia).</li>
                <li>Fibroids or an unusually shaped uterus.</li>
                <li>Twins or multiple pregnancy.</li>
                <li>Premature delivery.</li>
                <li>Short umbilical cord (rare).</li>
                <li>Previous breech baby.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Often, there is no clear cause, and it is not caused by anything
                you did.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Your Options if the Baby Is Breech or Sideways?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Wait and Watch
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many babies turn by themselves up to about 36 weeks.
                </li>
                <li>
                  Your doctor monitors with repeat checks or scans.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. External Cephalic Version (ECV)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A procedure where a trained obstetrician gently turns the baby
                  from outside the abdomen.
                </li>
                <li>
                  Usually attempted at around 36 to 37 weeks, in a hospital
                  setting with monitoring.
                </li>
                <li>
                  Not suitable for everyone, so eligibility depends on your
                  doctor&apos;s assessment.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Planned Caesarean Section
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Often recommended for persistent breech, transverse lie or
                  when other risk factors exist.
                </li>
                <li>
                  Scheduled at the safest time for you and your baby.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Vaginal Breech Delivery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Considered only in selected cases with an experienced team and
                  suitable facilities.
                </li>
                <li>
                  Requires careful discussion of benefits and risks.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor will guide you based on your health, the baby&apos;s
                size and the hospital facilities.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Do Exercises and Positions Help Turn the Baby?
              </h2>

              <p className="mb-4 text-gray-700">
                Some women try gentle positions, but evidence is limited, so
                discuss them first.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pelvic tilts on hands and knees:</strong> may ease
                  pressure and create space.
                </li>
                <li>
                  <strong>Walking and staying active:</strong> supports overall
                  comfort.
                </li>
                <li>
                  <strong>Sitting upright, leaning forward:</strong> encourages
                  good posture.
                </li>
                <li>
                  Avoid lying flat on your back for long periods in late
                  pregnancy.
                </li>
                <li>
                  Do not try forceful techniques or unverified home remedies.
                </li>
                <li>Never attempt to turn the baby yourself.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Always check with your doctor before trying any exercise,
                especially with high-risk conditions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Baby Position
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Sleeping on one side will turn the
                  baby. <strong>Fact:</strong> Sleep position has no proven
                  effect on where the baby lies. Choose whatever is comfortable,
                  and ask your doctor about side-lying in late pregnancy.
                </li>
                <li>
                  <strong>Myth:</strong> A high belly always means a breech
                  baby. <strong>Fact:</strong> Belly shape depends on your body
                  type and muscle tone, so only a scan or examination can
                  confirm position.
                </li>
                <li>
                  <strong>Myth:</strong> Breech babies are always unhealthy.{" "}
                  <strong>Fact:</strong> Most breech babies are healthy. The
                  position mainly affects how they are delivered.
                </li>
                <li>
                  <strong>Myth:</strong> Heavy exercise or lifting helps the
                  baby turn. <strong>Fact:</strong> Strenuous activity can be
                  unsafe and does not turn the baby.
                </li>
                <li>
                  <strong>Myth:</strong> If the baby is breech, a caesarean is
                  the only option. <strong>Fact:</strong> Options such as
                  waiting, ECV or a planned delivery can be discussed based on
                  your situation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Call Your Doctor?
              </h2>

              <p className="mb-4 text-gray-700">
                Get medical help promptly if you notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Reduced or absent baby movements.</li>
                <li>Leaking fluid or sudden gush of water.</li>
                <li>Vaginal bleeding.</li>
                <li>Regular tightening or labour pains before 37 weeks.</li>
                <li>Severe abdominal pain.</li>
                <li>
                  Severe headache, blurred vision or swelling of face and hands.
                </li>
                <li>Fever or foul-smelling discharge.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Do not wait for the next scheduled visit when these signs
                appear.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Baby Position and Delivery Planning
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Head down, no risk factors:</strong> normal delivery
                  is usually possible.
                </li>
                <li>
                  <strong>Breech near term:</strong> discuss ECV, caesarean or
                  other suitable options.
                </li>
                <li>
                  <strong>Transverse lie:</strong> typically requires planning
                  for caesarean if it doesn&apos;t correct.
                </li>
                <li>
                  <strong>Posterior position:</strong> normal delivery is often
                  still possible, though labour may take longer.
                </li>
                <li>
                  <strong>Twins:</strong> position of both babies affects the
                  delivery plan.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your birth plan can change, so flexibility and regular follow-up
                are important.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is known in Moradabad for antenatal care,
                high-risk pregnancy management and patient-first communication.
                Based on the clinic&apos;s listed services, you can expect:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Structured antenatal care:</strong> regular check-ups
                  and third-trimester monitoring.
                </li>
                <li>
                  <strong>3D and 4D ultrasound:</strong> detailed imaging to
                  assess baby position and growth.
                </li>
                <li>
                  <strong>Normal delivery focus:</strong> gentle care that
                  supports natural birth wherever safe.
                </li>
                <li>
                  <strong>High-risk pregnancy attention:</strong> careful
                  planning when position or other issues arise.
                </li>
                <li>
                  <strong>Continuity:</strong> the same team from antenatal
                  visits through delivery and follow-up.
                </li>
                <li>
                  <strong>Newborn care:</strong> paediatric consultations and
                  vaccinations at the same centre.
                </li>
                <li>
                  <strong>Clear explanations:</strong> simple answers that
                  reduce anxiety.
                </li>
                <li>
                  <strong>Easy access:</strong> central location in Gandhi
                  Nagar, Moradabad.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Baby Position Check
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Review of your pregnancy history, weeks of gestation and any
                  complications.
                </li>
                <li>Gentle abdominal examination.</li>
                <li>
                  Ultrasound to confirm position, fluid, placenta and baby&apos;s
                  growth.
                </li>
                <li>
                  Discussion of options if the baby is not head down.
                </li>
                <li>Delivery planning and advice on warning signs.</li>
                <li>A follow-up schedule for the coming weeks.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor During the Position Check
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Is my baby head down, and is the head engaged?
                </li>
                <li>
                  If not, is there still time for the baby to turn?
                </li>
                <li>
                  Am I suitable for ECV, and what are its risks?
                </li>
                <li>
                  What are the chances of normal delivery in my case?
                </li>
                <li>
                  When should I come to the hospital if labour starts early?
                </li>
                <li>
                  Which signs mean I should call you immediately?
                </li>
                <li>
                  Do I need any extra scans or tests before delivery?
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Writing these down before your visit helps you remember the
                answers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Family Can Support an Expecting Mother
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Accompany her to the position check and antenatal visits
                  whenever possible.
                </li>
                <li>
                  Keep her phone charged and hospital bag ready by the 36th
                  week.
                </li>
                <li>
                  Note the doctor&apos;s phone, WhatsApp and clinic address in a
                  shared place.
                </li>
                <li>
                  Arrange transport in advance so there is no last-minute rush.
                </li>
                <li>
                  Encourage rest, healthy meals and gentle walking as advised.
                </li>
                <li>
                  Stay calm and reassuring, because stress can make the last
                  weeks harder.
                </li>
                <li>
                  Learn the warning signs so that help is called quickly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Appointment
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
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
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
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
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
                      </a>
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
