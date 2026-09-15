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

export default function CSectionRecoveryMoradabad() {
  const faqs = [
    {
      q: "How long does C-section recovery usually take?",
      a: "Full internal healing generally takes about six weeks or more, though initial recovery milestones happen earlier.",
    },
    {
      q: "Who offers C-section recovery care in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) provides structured postnatal care following cesarean delivery.",
    },
    {
      q: "What are warning signs I shouldn't ignore during recovery?",
      a: "Fever, increasing incision redness or discharge, heavy bleeding, and severe pain all require prompt medical attention.",
    },
    {
      q: "When can I resume normal activity after a C-section?",
      a: "Most doctors recommend waiting for a six-week check-up before resuming exercise, driving, or heavy activity.",
    },
    {
      q: "Is numbness around the scar normal?",
      a: "Yes, some numbness is common and can persist for months, though it is worth mentioning at follow-up visits.",
    },
    {
      q: "Does the clinic address postpartum emotional wellbeing?",
      a: "Yes, emotional wellbeing is addressed alongside physical recovery during postnatal visits.",
    },
    {
      q: "How do I book a postpartum check-up?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does the clinic offer paediatric care for newborns too?",
      a: "Yes, paediatric consultations are available alongside postnatal care for the mother.",
    },
    {
      q: "What should I bring to my postpartum follow-up visit?",
      a: "Any concerns or symptoms you have noticed, details of your delivery, and a list of questions about recovery or contraception.",
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
                C-Section Recovery Specialist in Moradabad: A Complete Guide to
                Healing After Cesarean Delivery
              </h1>

              <p className="mb-4 text-gray-700">
                Recovering from a cesarean delivery involves far more than just
                letting an incision heal — it is a full-body recovery process
                that includes physical healing, hormonal adjustment, emotional
                wellbeing, and the demands of caring for a newborn all at once.
                Many new mothers underestimate how much support they need during
                this period, or are not sure which symptoms are a normal part of
                healing versus a sign that something needs medical attention.
              </p>

              <p className="text-gray-700">
                In Moradabad, having access to a dedicated C-section recovery
                specialist can make an enormous difference in navigating this
                stage safely and comfortably. This article walks through what
                C-section recovery typically involves, week by week, along with
                warning signs to watch for, and why Dr. Priyanka Pachauri is a
                trusted choice for postpartum recovery care in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why C-Section Recovery Needs Dedicated Attention
              </h2>

              <p className="mb-4 text-gray-700">
                A cesarean is major abdominal surgery, and recovery involves
                healing across multiple layers of tissue while simultaneously
                adjusting to life with a newborn. Several factors make this
                period particularly important to manage carefully:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Physical healing takes longer than many new mothers expect,
                  often six weeks or more for full internal healing
                </li>
                <li>
                  Pain management needs change significantly during the first
                  few days versus the following weeks
                </li>
                <li>
                  Mobility is initially limited, which can affect a mother&apos;s
                  ability to care for her baby independently
                </li>
                <li>
                  Breastfeeding positioning often needs adjustment to avoid
                  pressure on the healing incision
                </li>
                <li>
                  Emotional adjustment can be more complex after a cesarean,
                  particularly if it was unplanned or came after a difficult
                  labor
                </li>
                <li>
                  Risk of complications, though relatively low, requires
                  awareness of specific warning signs during recovery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                C-Section Recovery Timeline: What to Expect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Days 1–3: Immediate Post-Surgery Period
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Hospital stay typically continues for a few days for
                      monitoring
                    </li>
                    <li>
                      Pain management through prescribed medication
                    </li>
                    <li>
                      Encouragement to begin gentle movement, such as short
                      walks, to reduce blood clot risk
                    </li>
                    <li>
                      Catheter removal and gradual return to normal bladder and
                      bowel function
                    </li>
                    <li>
                      Initial wound care instructions provided before discharge
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Week 1–2: Early Home Recovery
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Continued pain management, tapering off stronger
                      medication as healing progresses
                    </li>
                    <li>
                      Careful attention to incision care, watching for signs of
                      infection
                    </li>
                    <li>
                      Limited lifting, generally nothing heavier than the baby
                    </li>
                    <li>
                      Gradual increase in mobility, though rest remains essential
                    </li>
                    <li>
                      Support from family or a partner for household tasks and
                      baby care
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Week 2–6: Progressive Healing
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Incision generally continues to heal, with reducing pain
                      and sensitivity
                    </li>
                    <li>
                      Gradual return to light daily activities as comfort allows
                    </li>
                    <li>
                      Continued avoidance of heavy lifting or strenuous exercise
                      until cleared by a doctor
                    </li>
                    <li>
                      Postpartum bleeding (lochia) gradually decreases and
                      typically resolves
                    </li>
                    <li>
                      Emotional adjustment continues, with many mothers
                      experiencing a range of feelings during this period
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    6 Weeks and Beyond: Postpartum Check-Up
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A postpartum check-up is generally recommended around six
                      weeks to assess healing
                    </li>
                    <li>
                      Doctor&apos;s clearance typically required before resuming
                      exercise, driving, or sexual activity
                    </li>
                    <li>
                      Continued monitoring for any lingering scar-related
                      discomfort
                    </li>
                    <li>
                      Gradual return to pre-pregnancy activity levels, guided by
                      the doctor&apos;s assessment
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Physical Symptoms During Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Incision pain and tenderness, gradually decreasing over the
                  weeks following surgery
                </li>
                <li>
                  Numbness around the incision site, which can persist for
                  months and sometimes longer
                </li>
                <li>
                  Postpartum bleeding (lochia), which changes in color and
                  amount over several weeks
                </li>
                <li>
                  Swelling in the legs or feet, common in the initial days after
                  delivery
                </li>
                <li>
                  Fatigue, often compounded by disrupted sleep from newborn care
                </li>
                <li>
                  Constipation, sometimes related to pain medication or reduced
                  mobility
                </li>
                <li>
                  Breast engorgement or breastfeeding-related discomfort,
                  especially in the early days
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That Require Prompt Medical Attention
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever above 100.4°F (38°C)</li>
                <li>
                  Increasing redness, warmth, swelling, or discharge from the
                  incision
                </li>
                <li>
                  Severe or worsening abdominal pain that does not improve with
                  prescribed medication
                </li>
                <li>
                  Heavy vaginal bleeding, soaking through a pad in an hour or
                  less
                </li>
                <li>Foul-smelling vaginal discharge</li>
                <li>
                  Pain, redness, or swelling in the legs, which could indicate a
                  blood clot
                </li>
                <li>Difficulty breathing or chest pain</li>
                <li>
                  Persistent, severe headache, particularly with vision changes
                </li>
                <li>
                  Overwhelming sadness, hopelessness, or thoughts of harming
                  yourself, which may indicate postpartum depression requiring
                  immediate support
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Smoother C-Section Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow all wound care instructions carefully, including how to
                  clean and monitor the incision
                </li>
                <li>
                  Take pain medication as prescribed, rather than waiting until
                  pain becomes severe, especially in the first week
                </li>
                <li>
                  Support your abdomen when coughing, sneezing, or laughing,
                  using a pillow or your hand to reduce strain on the incision
                </li>
                <li>
                  Prioritize rest whenever possible, accepting help from family
                  members for household tasks and older children
                </li>
                <li>
                  Stay hydrated and eat a balanced, nutrient-rich diet to
                  support healing and, if breastfeeding, milk production
                </li>
                <li>
                  Avoid heavy lifting beyond your baby&apos;s weight until
                  cleared by your doctor
                </li>
                <li>
                  Ease into movement gradually, starting with short walks and
                  slowly increasing activity as comfort allows
                </li>
                <li>
                  Attend all follow-up appointments, even if you feel like
                  recovery is progressing smoothly
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing After a Cesarean
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mixed emotions are common, especially if the cesarean was
                  unplanned or followed a difficult labor
                </li>
                <li>
                  Baby blues, involving mood swings and tearfulness, typically
                  resolve within the first couple of weeks
                </li>
                <li>
                  Postpartum depression is a more serious and longer-lasting
                  condition that requires professional support and should not be
                  dismissed as &quot;normal&quot; new-mother stress
                </li>
                <li>
                  Talking openly with your doctor about emotional wellbeing
                  during postpartum visits is an important part of comprehensive
                  recovery care
                </li>
                <li>
                  Support from family, friends, or a support group can make a
                  meaningful difference during this adjustment period
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Specialist Matters for C-Section Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ability to distinguish normal healing from complications,
                  avoiding unnecessary worry while catching real issues early
                </li>
                <li>
                  Experience managing the specific physical demands of
                  post-cesarean recovery, distinct from vaginal delivery
                  recovery
                </li>
                <li>
                  Coordinated follow-up care, including scar assessment,
                  contraception counseling, and general postpartum health checks
                </li>
                <li>
                  Support for breastfeeding challenges related to incision
                  discomfort or positioning
                </li>
                <li>
                  Attention to emotional wellbeing alongside physical healing,
                  recognizing that postpartum recovery is about the whole person
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – C-Section Recovery Specialist in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) provides structured
                postpartum care for mothers recovering from cesarean delivery in
                Moradabad. According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her clinic&apos;s approach to recovery includes:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Key Features of Care
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Postnatal care as a core part of her practice, ensuring
                      continuity from delivery through the full recovery period
                    </li>
                    <li>
                      A &quot;Her Health First&quot; philosophy, meaning
                      recovery concerns — physical or emotional — are heard and
                      addressed without being dismissed
                    </li>
                    <li>
                      Access to diagnostic tools, such as ultrasound, if
                      complications like a uterine niche or delayed healing need
                      to be evaluated
                    </li>
                    <li>
                      Surgical expertise, including 3D laparoscopic techniques,
                      relevant if any scar-related complications require later
                      treatment
                    </li>
                    <li>
                      Paediatric consultations, offering added convenience for
                      mothers managing both their own recovery and their
                      newborn&apos;s early care
                    </li>
                    <li>
                      Continuity of care from pregnancy through delivery and
                      postpartum recovery, allowing the same doctor to track a
                      mother&apos;s full journey
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Why Patients Choose the Clinic
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Patient testimonials on the website consistently highlight
                      feeling supported and well-guided throughout their care
                    </li>
                    <li>
                      An important quality during a recovery period that can
                      otherwise feel overwhelming and confusing for new mothers
                    </li>
                    <li>
                      The clinic is located in Gandhi Nagar, Moradabad, making
                      it accessible for postpartum follow-up visits from across
                      the city
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Nutrition and Lifestyle Support During Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Prioritize protein-rich foods, which support tissue repair and
                  wound healing
                </li>
                <li>
                  Include iron-rich foods, especially important if blood loss
                  during delivery was significant
                </li>
                <li>
                  Stay well-hydrated, particularly important if breastfeeding
                </li>
                <li>
                  Eat fiber-rich foods to help prevent constipation, which is
                  common in the early postpartum period
                </li>
                <li>
                  Avoid rushing back into intense exercise, focusing instead on
                  gentle movement like short walks until cleared for more
                </li>
                <li>
                  Accept help with household responsibilities so energy can be
                  directed toward healing and newborn care
                </li>
                <li>
                  Sleep whenever possible, even in short stretches, since
                  fatigue can slow the overall recovery process
                </li>
                <li>
                  Avoid smoking and limit caffeine, both of which can interfere
                  with healing and, if breastfeeding, affect the baby
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Postpartum Follow-Up Visits
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Keep a symptom diary, noting any pain, bleeding changes, or
                  concerns between visits
                </li>
                <li>
                  Track your emotional wellbeing, including any persistent low
                  mood, anxiety, or difficulty bonding with your baby
                </li>
                <li>
                  Note breastfeeding challenges, including any pain or
                  difficulty related to positioning after surgery
                </li>
                <li>
                  Write down questions in advance, covering topics like
                  contraception, resuming exercise, or future pregnancy planning
                </li>
                <li>
                  Bring your discharge summary from the hospital, including
                  details of the delivery and any complications noted
                </li>
                <li>
                  Discuss your recovery timeline honestly, rather than
                  downplaying symptoms out of a desire to seem like you are
                  &quot;cop ing fine&quot;
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About C-Section Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;C-section recovery is basically the same as recovering from a minor procedure.&quot;</strong>{" "}
                  It is major abdominal surgery, and recovery typically takes
                  significantly longer than many new mothers expect.
                </li>
                <li>
                  <strong>&quot;You should push through pain and get back to normal activity quickly.&quot;</strong>{" "}
                  Gradual, guided recovery reduces the risk of complications and
                  supports better long-term healing.
                </li>
                <li>
                  <strong>&quot;Numbness around the scar means something is wrong.&quot;</strong>{" "}
                  Some numbness is common after cesarean surgery and can persist
                  for months, though it is still worth mentioning to your
                  doctor.
                </li>
                <li>
                  <strong>&quot;Emotional struggles after a C-section are just part of being a new mother.&quot;</strong>{" "}
                  Persistent sadness or anxiety may indicate postpartum
                  depression, which deserves proper evaluation and support, not
                  dismissal.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                To consult Dr. Priyanka Pachauri for C-section recovery care in
                Moradabad, reach out through any of the following:
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>
                        Dr. Priyanka Gynaec – Fertility • Maternity • 3D
                        Laparoscopy
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
                        href="mailto:drpriyanka@gynaecologistmoradabad.com"
                        className="break-all hover:underline"
                      >
                        drpriyanka@gynaecologistmoradabad.com
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