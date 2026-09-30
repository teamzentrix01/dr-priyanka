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

export default function DoctorForCSectionDeliveryMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for C-section delivery in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri provides antenatal and delivery care in Moradabad.",
    },
    {
      q: "When is a C-section needed?",
      a: "For reasons such as breech baby, placenta previa, fetal distress or stalled labour.",
    },
    {
      q: "Is a C-section painful?",
      a: "You feel no pain during surgery. Pain afterwards is managed with medicines.",
    },
    {
      q: "How long is the recovery?",
      a: "About 2–4 days in hospital and 6 weeks for full recovery.",
    },
    {
      q: "Can I breastfeed after a C-section?",
      a: "Yes, in most cases, starting soon after delivery.",
    },
    {
      q: "Can I have a normal delivery after a C-section?",
      a: "Some women can try VBAC, depending on their situation.",
    },
    {
      q: "When can I drive or lift weights?",
      a: "Only after your doctor allows it, usually after several weeks.",
    },
    {
      q: "Is a C-section safe for the baby?",
      a: "Yes, when done for a medical reason with proper care.",
    },
    {
      q: "How many C-sections can a woman have?",
      a: "It depends on individual health and the scar. Your doctor will advise.",
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
                Doctor for C-Section Delivery in Moradabad: When It Is Needed,
                What to Expect & Recovery
              </h1>

              <p className="mb-4 text-gray-700">
                For most mothers, the dream is a smooth normal delivery. But
                sometimes the safest way to bring a baby into the world is a
                caesarean section (C-section). It may be planned weeks ahead or
                decided suddenly in labour. Either way, it is a major surgery,
                and it helps to understand it well and to choose a doctor you
                trust.
              </p>

              <p className="mb-4 text-gray-700">
                Many women feel worried or guilty when they hear the word
                &quot;C-section.&quot; Please remember: a C-section is not a
                failure. When it is medically needed, it protects the mother,
                the baby, or both.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains when a C-section is advised, how it is done,
                recovery, and how to consult Dr. Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a C-Section?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A surgery in which the baby is delivered through a cut in the
                  lower abdomen and uterus.
                </li>
                <li>
                  Done under spinal or epidural anaesthesia in most cases, so
                  the mother stays awake.
                </li>
                <li>Usually takes about 30–60 minutes.</li>
                <li>
                  The baby is often born within the first 10 minutes.
                </li>
                <li>
                  The mother can usually see and hold the baby soon after.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of C-Section
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Planned (Elective) C-Section
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Decided in advance for a medical reason.
                </li>
                <li>
                  Scheduled at a suitable time, usually after 39 weeks unless
                  there is a reason to deliver earlier.
                </li>
                <li>
                  Gives time to prepare, fast properly and arrange family
                  support.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Emergency C-Section
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Decided during labour or when a sudden problem appears.
                </li>
                <li>
                  Done quickly to protect the mother or baby.
                </li>
                <li>
                  Examples include fetal distress, heavy bleeding or labour that
                  is not progressing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is a C-Section Advised?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Reasons Related to the Baby
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fetal distress:</strong> the baby&apos;s heartbeat
                  shows stress during labour.
                </li>
                <li>
                  <strong>Breech or transverse position:</strong> the baby is
                  not head-down.
                </li>
                <li>
                  <strong>Very large baby</strong> in relation to the
                  mother&apos;s pelvis.
                </li>
                <li>
                  <strong>Twins or multiple babies,</strong> in some positions.
                </li>
                <li>
                  <strong>Cord prolapse:</strong> the umbilical cord slips
                  ahead of the baby.
                </li>
                <li>
                  <strong>Certain birth conditions</strong> found on scans.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Reasons Related to the Mother
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Previous C-section or uterine surgery,</strong> in
                  selected cases.
                </li>
                <li>
                  <strong>Placenta previa:</strong> the placenta covers the
                  cervix.
                </li>
                <li>
                  <strong>Placental abruption:</strong> the placenta separates
                  early.
                </li>
                <li>
                  <strong>Severe pre-eclampsia</strong> or uncontrolled high
                  blood pressure.
                </li>
                <li>
                  <strong>Certain infections,</strong> such as active genital
                  herpes or high viral load HIV.
                </li>
                <li>
                  <strong>Heart or other serious medical conditions.</strong>
                </li>
                <li>
                  <strong>Small or abnormally shaped pelvis.</strong>
                </li>
                <li>
                  <strong>Large fibroids</strong> blocking the birth canal.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Reasons During Labour
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Labour that has stopped progressing</strong> despite
                  good contractions.
                </li>
                <li>
                  <strong>Cervix not dilating</strong> as expected.
                </li>
                <li>
                  <strong>Baby&apos;s head not descending.</strong>
                </li>
                <li>
                  <strong>Failed induction of labour.</strong>
                </li>
                <li>
                  <strong>Signs of exhaustion or danger</strong> for mother or
                  baby.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is C-Section Safe?
              </h2>

              <p className="mb-4 text-gray-700">
                Modern C-sections are very safe when done by an experienced team
                in a well-equipped setting.
              </p>

              <p className="mb-4 text-gray-700">
                Like every surgery, it carries some risks, so it should be done
                when there is a medical reason. Most women recover well and care
                for their babies comfortably.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible risks (uncommon)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection of the wound or uterus.</li>
                <li>Bleeding.</li>
                <li>Blood clots in the legs.</li>
                <li>Injury to nearby organs (rare).</li>
                <li>Reaction to anaesthesia.</li>
                <li>
                  Breathing difficulty in the newborn, mainly when done before
                  term.
                </li>
                <li>Scar-related issues in future pregnancies.</li>
              </ul>

              <p className="text-gray-700">
                Good planning and follow-up reduce these risks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery vs C-Section: A Balanced View
              </h2>

              <div className="mb-6 overflow-x-auto">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="p-3 font-semibold text-gray-900"></th>
                      <th className="p-3 font-semibold text-gray-900">
                        Normal Delivery
                      </th>
                      <th className="p-3 font-semibold text-gray-900">
                        C-Section
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="p-3 font-medium">Recovery</td>
                      <td className="p-3">Usually faster</td>
                      <td className="p-3">Usually slower</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Hospital stay</td>
                      <td className="p-3">Shorter</td>
                      <td className="p-3">Longer</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Surgery</td>
                      <td className="p-3">No</td>
                      <td className="p-3">Yes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Future pregnancies</td>
                      <td className="p-3">Usually straightforward</td>
                      <td className="p-3">Scar needs monitoring</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Best when</td>
                      <td className="p-3">
                        Mother and baby are stable
                      </td>
                      <td className="p-3">
                        There is a medical reason
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700">
                Normal delivery is generally preferred when it is safe. A
                C-section is the right choice when risks to mother or baby are
                higher. The best method is the one that is safest for you and
                your baby, decided together with your doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Should You Ask for a C-Section Without a Medical Reason?
              </h2>

              <p className="mb-4 text-gray-700">
                Some women ask for a caesarean because of fear of labour pain, a
                preferred date or family advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fear of pain is understandable, and options like pain relief
                  in labour can help.
                </li>
                <li>
                  Choosing a date is not a medical reason and may not be the
                  safest option.
                </li>
                <li>
                  Elective C-section still carries surgical risks.
                </li>
                <li>
                  A frank conversation with your doctor helps you make an
                  informed decision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for a Planned C-Section
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In the Weeks Before
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Attend all antenatal check-ups and scans.
                </li>
                <li>
                  Manage anaemia, blood pressure and sugar.
                </li>
                <li>
                  Ask your doctor about the timing and procedure.
                </li>
                <li>
                  Pack your hospital bag early: documents, clothes, sanitary
                  pads, baby clothes and nappies.
                </li>
                <li>Arrange help at home for after delivery.</li>
                <li>
                  Discuss anaesthesia and pain relief options.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Just Before Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow the fasting instructions given by your doctor.
                </li>
                <li>Bathe and keep the belly clean.</li>
                <li>
                  Remove jewellery, nail polish and contact lenses.
                </li>
                <li>Bring your reports and antenatal file.</li>
                <li>Ask any last questions.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During a C-Section
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Anaesthesia:</strong> usually a spinal injection, so
                  you feel no pain but stay awake.
                </li>
                <li>
                  <strong>Cleaning and draping:</strong> the belly is cleaned
                  and covered.
                </li>
                <li>
                  <strong>The incision:</strong> a small horizontal cut is made
                  low on the abdomen.
                </li>
                <li>
                  <strong>Delivery:</strong> the baby is gently lifted out, and
                  the cord is clamped.
                </li>
                <li>
                  <strong>First moments:</strong> your baby is dried, checked
                  and often placed on your chest if both are stable.
                </li>
                <li>
                  <strong>Placenta and closing:</strong> the placenta is removed
                  and the layers are stitched.
                </li>
                <li>
                  <strong>Recovery room:</strong> you are monitored for a few
                  hours.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your partner may be allowed to stay with you, depending on
                hospital policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After a C-Section
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Hospital (Usually 2–4 Days)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain relief is given through medicines.
                </li>
                <li>
                  The catheter and drip are removed within a day or so.
                </li>
                <li>
                  You are helped to sit up and walk on the first day.
                </li>
                <li>
                  Breastfeeding usually starts soon after delivery.
                </li>
                <li>
                  Wound and bleeding are checked regularly.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                At Home (First 6 Weeks)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Rest well and accept help with baby care and chores.
                </li>
                <li>Walk gently to help circulation and healing.</li>
                <li>
                  Support your belly with a pillow when coughing, laughing or
                  getting up.
                </li>
                <li>Keep the wound clean and dry as advised.</li>
                <li>Take medicines as prescribed.</li>
                <li>
                  Eat a balanced diet with protein, fibre, fruits and plenty of
                  fluids.
                </li>
                <li>
                  Avoid lifting anything heavier than your baby in the early
                  weeks.
                </li>
                <li>
                  Avoid driving until your doctor allows it.
                </li>
                <li>Attend your follow-up visit.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Breastfeeding Tips
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Try side-lying or football-hold positions to keep pressure off
                  the wound.
                </li>
                <li>
                  Ask the nurse or doctor for help if feeding is difficult.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs After a C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                Contact your doctor promptly if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever.</li>
                <li>
                  Redness, swelling or pus at the wound.
                </li>
                <li>Wound opening or leaking fluid.</li>
                <li>
                  Heavy bleeding, or soaking a pad in an hour.
                </li>
                <li>Foul-smelling discharge.</li>
                <li>Severe or increasing pain.</li>
                <li>
                  Pain, swelling or redness in one leg.
                </li>
                <li>Breathlessness or chest pain.</li>
                <li>Burning while passing urine.</li>
                <li>
                  Low mood that does not lift or thoughts of harming yourself or
                  the baby.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can You Have a Normal Delivery After a C-Section?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some women can try a VBAC (vaginal birth after caesarean).
                </li>
                <li>
                  It depends on why the first C-section was done, the type of
                  scar, the gap between pregnancies and your health.
                </li>
                <li>
                  It is best planned and monitored with an experienced doctor.
                </li>
                <li>
                  Not everyone is a suitable candidate, and repeat C-section is
                  a safe choice when advised.
                </li>
                <li>Discuss this early in pregnancy.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri for C-Section Delivery in
                Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic care and a focus on safe motherhood, including
                high-risk pregnancies.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Honest guidance:</strong> advice is based on medical
                  need, not pressure.
                </li>
                <li>
                  <strong>Careful antenatal monitoring:</strong> 3D and 4D
                  ultrasound help find problems that may affect delivery.
                </li>
                <li>
                  <strong>Supportive of normal delivery when safe:</strong> and
                  prepared for a C-section when necessary.
                </li>
                <li>
                  <strong>Experience with high-risk pregnancies:</strong> closer
                  planning for complex cases.
                </li>
                <li>
                  <strong>Kind, unhurried consultations:</strong> you can
                  discuss fears and preferences openly.
                </li>
                <li>
                  <strong>Continuity of care:</strong> the same team knows your
                  history from early pregnancy.
                </li>
                <li>
                  <strong>Newborn support:</strong> the clinic also offers
                  paediatric consultations and vaccinations.
                </li>
                <li>
                  <strong>Location:</strong> A2, near Old Roadways, Gandhi
                  Nagar, Moradabad.
                </li>
                <li>
                  <strong>Easy booking:</strong> call, WhatsApp or email.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About C-Section
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> A C-section means you did not try hard
                  enough. <strong>Fact:</strong> It is a medical decision made
                  to keep you and your baby safe.
                </li>
                <li>
                  <strong>Myth:</strong> You cannot breastfeed after a
                  C-section. <strong>Fact:</strong> Most mothers breastfeed
                  successfully.
                </li>
                <li>
                  <strong>Myth:</strong> Every second baby must be a C-section
                  if the first was. <strong>Fact:</strong> Some women can try
                  VBAC if they are suitable.
                </li>
                <li>
                  <strong>Myth:</strong> You cannot have more than two
                  C-sections. <strong>Fact:</strong> The number depends on your
                  health and the uterine scar.
                </li>
                <li>
                  <strong>Myth:</strong> Back pain always follows spinal
                  anaesthesia. <strong>Fact:</strong> Backache after pregnancy
                  is common but is usually linked to posture and carrying the
                  baby.
                </li>
                <li>
                  <strong>Myth:</strong> C-section babies are less healthy.{" "}
                  <strong>Fact:</strong> Babies born by C-section do well with
                  good care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation about your pregnancy and
                  concerns.
                </li>
                <li>
                  A review of your reports, scans and previous deliveries.
                </li>
                <li>
                  A clear explanation of whether normal delivery or C-section is
                  safer for you.
                </li>
                <li>
                  A plan for timing, preparation and follow-up.
                </li>
                <li>Time to ask any question, big or small.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation with Dr. Priyanka Pachauri
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
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
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
