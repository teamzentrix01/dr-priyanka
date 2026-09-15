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

export default function BreastfeedingSupportMoradabad() {
  const faqs = [
    {
      q: "Who can I see for breastfeeding support in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers postpartum care that includes breastfeeding support and guidance.",
    },
    {
      q: "Is nipple pain during breastfeeding normal?",
      a: "Some initial sensitivity is common, but persistent pain usually indicates a latch issue that should be corrected.",
    },
    {
      q: "How do I know if my baby is getting enough milk?",
      a: "Signs include steady weight gain, regular wet and dirty diapers, and satisfied behavior after feeds — your doctor can help assess this.",
    },
    {
      q: "What should I do if I think I have mastitis?",
      a: "Seek medical attention promptly, especially if you have fever, breast redness, or flu-like symptoms.",
    },
    {
      q: "Can breastfeeding problems be treated alongside postpartum recovery?",
      a: "Yes, breastfeeding concerns are commonly addressed as part of routine postnatal follow-up visits.",
    },
    {
      q: "Does the clinic offer paediatric care for the baby too?",
      a: "Yes, paediatric consultations are available alongside postpartum care for the mother.",
    },
    {
      q: "How do I book an appointment for breastfeeding support?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Is low milk supply always a permanent problem?",
      a: "No, many cases improve significantly with better feeding technique and frequency, under proper guidance.",
    },
    {
      q: "Can I get advice on medication safety while breastfeeding?",
      a: "Yes, the clinic can guide you on safe medication use during the breastfeeding period.",
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
                Breastfeeding Support Doctor in Moradabad: Help for Every Stage
                of the Breastfeeding Journey
              </h1>

              <p className="mb-4 text-gray-700">
                Breastfeeding is often described as a natural process, but for
                many new mothers, it does not come easily right away. Painful
                latching, low milk supply, engorgement, and confusion about
                proper positioning are common challenges that can leave a new
                mother feeling discouraged or worried she is doing something
                wrong. The good news is that most breastfeeding difficulties are
                manageable with the right guidance and support.
              </p>

              <p className="text-gray-700">
                In Moradabad, having access to a doctor experienced in
                breastfeeding support can make an enormous difference during
                this critical early period. This article covers common
                breastfeeding challenges, practical solutions, warning signs
                that need medical attention, and why Dr. Priyanka Pachauri&apos;s
                clinic is a trusted resource for breastfeeding support in
                Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Breastfeeding Support Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Breastfeeding is a learned skill for both mother and baby, not
                  something that always comes instinctively from the start
                </li>
                <li>
                  Early difficulties are extremely common, affecting a large
                  percentage of new mothers, especially with a first baby
                </li>
                <li>
                  Unresolved problems can lead to early breastfeeding
                  discontinuation, even when a mother wants to continue
                </li>
                <li>
                  Physical discomfort from poor latch or positioning can make
                  the experience painful enough to discourage continued
                  breastfeeding
                </li>
                <li>
                  Confidence matters — mothers who receive timely, accurate
                  support are more likely to continue breastfeeding successfully
                </li>
                <li>
                  Professional guidance helps distinguish normal adjustment
                  struggles from issues that need medical treatment
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Breastfeeding Challenges in the Early Weeks
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. Latch Difficulties
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Baby not opening their mouth wide enough to latch properly
                    </li>
                    <li>
                      Painful nipples during or after feeding, often a sign of
                      an improper latch
                    </li>
                    <li>
                      Baby seeming frustrated or unable to stay latched
                      consistently
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Sore or Cracked Nipples
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Often caused by an improper latch or positioning
                    </li>
                    <li>
                      Can make each feeding session painful and stressful
                    </li>
                    <li>
                      May lead to further complications, like infection, if not
                      addressed
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Engorgement
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Breasts becoming overly full, firm, and sometimes painful,
                      typically a few days after delivery
                    </li>
                    <li>
                      Can make it harder for the baby to latch properly due to
                      breast firmness
                    </li>
                    <li>
                      Usually improves with frequent feeding and proper
                      management
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Low Milk Supply Concerns
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A common worry among new mothers, though true low supply
                      is less frequent than perceived
                    </li>
                    <li>
                      Can be influenced by factors like infrequent feeding,
                      ineffective latch, stress, or certain medical conditions
                    </li>
                    <li>
                      Often improves significantly with adjustments to feeding
                      frequency and technique
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    5. Oversupply
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Producing more milk than the baby needs, which can lead to
                      forceful let-down and feeding difficulties
                    </li>
                    <li>
                      May cause the baby to choke, pull away, or feed in shorter
                      bursts than usual
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    6. Blocked Ducts and Mastitis
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Blocked ducts present as a tender, firm lump in the breast
                    </li>
                    <li>
                      Mastitis, an infection of breast tissue, includes symptoms
                      like fever, redness, and flu-like body aches
                    </li>
                    <li>
                      Requires prompt attention, as untreated mastitis can
                      worsen quickly
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    7. Nipple Confusion
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Can occur when a baby is introduced to bottles or
                      pacifiers before breastfeeding is well established
                    </li>
                    <li>
                      May make it more difficult for the baby to latch
                      effectively at the breast
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Practical Tips for a Smoother Breastfeeding Experience
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Feed frequently in the early days, generally every 2–3 hours,
                  to help establish supply and reduce engorgement
                </li>
                <li>
                  Focus on proper positioning, ensuring the baby&apos;s mouth
                  covers a large portion of the areola, not just the nipple
                </li>
                <li>
                  Try different feeding positions, such as cradle hold, football
                  hold, or side-lying, to find what is most comfortable
                </li>
                <li>
                  Watch for hunger cues early, like rooting or hand-to-mouth
                  movements, rather than waiting until the baby is crying
                </li>
                <li>
                  Allow the baby to fully empty one breast before switching,
                  which supports both supply and hindmilk intake
                </li>
                <li>
                  Use warm compresses before feeding to help with let-down, and
                  cool compresses afterward to ease engorgement
                </li>
                <li>
                  Stay hydrated and eat a balanced diet, both of which support
                  consistent milk production
                </li>
                <li>
                  Rest as much as possible, since fatigue and stress can affect
                  both mood and milk supply
                </li>
                <li>
                  Avoid unnecessary early introduction of bottles or pacifiers
                  until breastfeeding is well established, if exclusive
                  breastfeeding is the goal
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs You Should Seek Professional Support
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Persistent nipple pain that does not improve after adjusting
                  the latch
                </li>
                <li>Cracked, bleeding, or visibly damaged nipples</li>
                <li>
                  A firm, red, and painful area of the breast, especially with
                  fever or flu-like symptoms
                </li>
                <li>
                  Baby not gaining weight appropriately or showing signs of
                  insufficient feeding
                </li>
                <li>
                  Ongoing concern about milk supply despite frequent feeding
                </li>
                <li>
                  Baby consistently unable to latch despite repeated attempts
                </li>
                <li>
                  Feeling overwhelmed, anxious, or discouraged about
                  breastfeeding
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Breastfeeding Difficulties Need Medical Attention
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fever along with breast pain or redness, which could indicate
                  mastitis requiring treatment
                </li>
                <li>
                  A breast abscess, presenting as a painful, swollen lump that
                  may need drainage
                </li>
                <li>
                  Significant, unexplained weight loss in the baby, which
                  requires prompt evaluation
                </li>
                <li>
                  Cracked nipples showing signs of infection, such as increasing
                  redness, warmth, or discharge
                </li>
                <li>
                  Persistent low supply despite proper technique and frequent
                  feeding, which may need further evaluation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Doctor Can Help With Breastfeeding Challenges
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Assess latch and positioning to identify the specific cause of
                  pain or feeding difficulty
                </li>
                <li>
                  Evaluate for underlying medical issues, such as tongue-tie in
                  the baby or hormonal factors affecting milk supply
                </li>
                <li>
                  Diagnose and treat infections like mastitis promptly,
                  preventing complications
                </li>
                <li>
                  Offer guidance on safe medication use while breastfeeding
                </li>
                <li>
                  Provide reassurance and realistic expectations, helping reduce
                  anxiety around common early struggles
                </li>
                <li>
                  Coordinate with paediatric care to monitor the baby&apos;s
                  growth and feeding adequacy over time
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Breastfeeding Support in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers postpartum
                care that extends naturally into breastfeeding support for new
                mothers in Moradabad. According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her practice is well-positioned to support mothers through
                early breastfeeding challenges.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Key Features of Care
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Postnatal care as a core service, allowing breastfeeding
                      concerns to be addressed as part of routine postpartum
                      follow-up
                    </li>
                    <li>
                      A &quot;Her Health First&quot; approach, meaning
                      breastfeeding difficulties are treated with patience and
                      without judgment
                    </li>
                    <li>
                      Paediatric consultations available at the same clinic,
                      offering convenient, coordinated care for both mother and
                      baby
                    </li>
                    <li>
                      Guidance on safe medication use during breastfeeding,
                      relevant for mothers managing postpartum recovery
                    </li>
                    <li>
                      Continuity of care from pregnancy through delivery and
                      postpartum, allowing the same care team to support the
                      full breastfeeding journey
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Why Patients Choose the Clinic
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Patient testimonials consistently highlight feeling
                      genuinely supported and well-guided throughout their care
                    </li>
                    <li>
                      An important quality for new mothers navigating the steep
                      learning curve of early breastfeeding
                    </li>
                    <li>
                      The clinic is located in Gandhi Nagar, Moradabad, making
                      it accessible for postpartum follow-up visits and
                      breastfeeding support sessions
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Breastfeeding Support for Working Mothers
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Start expressing and storing milk a few weeks before returning
                  to work, allowing time to build a small supply
                </li>
                <li>
                  Learn safe milk storage guidelines, including how long
                  expressed milk can be kept at room temperature, in the
                  refrigerator, or frozen
                </li>
                <li>
                  Choose a well-fitting breast pump, since comfort and proper
                  fit significantly affect how effectively milk is expressed
                </li>
                <li>
                  Plan pumping breaks during the workday, ideally matching the
                  baby&apos;s usual feeding schedule as closely as possible
                </li>
                <li>
                  Communicate with your workplace about your needs for pumping
                  breaks and a private space, if applicable
                </li>
                <li>
                  Consider combination feeding, using both breastfeeding and
                  expressed milk or formula, if that better fits your
                  circumstances
                </li>
                <li>
                  Ask your doctor about maintaining supply if you are pumping
                  less frequently than your baby was previously feeding directly
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Building a Support System
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Involve your partner or family members in supporting practical
                  tasks, so you can focus on feeding and rest
                </li>
                <li>
                  Connect with other new mothers, whether through community
                  groups or informally, since shared experiences can be
                  reassuring
                </li>
                <li>
                  Do not hesitate to ask for help early, rather than waiting
                  until frustration or exhaustion builds up
                </li>
                <li>
                  Keep your doctor&apos;s contact information handy for quick
                  questions during the early weeks
                </li>
                <li>
                  Be patient with yourself and your baby, since breastfeeding is
                  a skill that improves with practice for both of you
                </li>
                <li>
                  Celebrate small progress, whether that is a more comfortable
                  latch, longer feeding sessions, or simply feeling more
                  confident day by day
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Breastfeeding
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;If breastfeeding hurts, that means it is working properly.&quot;</strong>{" "}
                  Persistent pain usually signals a latch or positioning issue
                  that needs correction, not something to push through.
                </li>
                <li>
                  <strong>&quot;Low milk supply is extremely common and hard to fix.&quot;</strong>{" "}
                  True low supply is less common than perceived, and many
                  perceived supply issues improve significantly with better
                  technique and more frequent feeding.
                </li>
                <li>
                  <strong>&quot;Formula supplementation should always be avoided if breastfeeding is the goal.&quot;</strong>{" "}
                  In certain medical situations, supplementation is appropriate
                  and can be done alongside continued efforts to support
                  breastfeeding, under medical guidance.
                </li>
                <li>
                  <strong>&quot;A fussy baby at the breast always means something is wrong with the milk.&quot;</strong>{" "}
                  Fussiness during feeding can have many causes, including
                  growth spurts, digestive adjustment, or overstimulation, not
                  necessarily a milk-related issue.
                </li>
                <li>
                  <strong>&quot;Breastfeeding difficulties always resolve on their own with time.&quot;</strong>{" "}
                  Some issues, like an untreated latch problem or infection,
                  need proper evaluation and will not necessarily improve
                  without intervention.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                To get breastfeeding support from Dr. Priyanka Pachauri in
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