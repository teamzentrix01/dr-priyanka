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

export default function HowToStopProlongedPeriodsNaturally() {
  const faqs = [
    {
      q: "Which doctor treats prolonged periods in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers diagnosis and treatment for prolonged and heavy periods.",
    },
    {
      q: "Can natural remedies alone stop prolonged periods?",
      a: "They can offer supportive relief, but underlying causes like fibroids or hormonal imbalance often need medical evaluation.",
    },
    {
      q: "What is considered a prolonged period?",
      a: "Bleeding that consistently lasts longer than 7-8 days is generally considered prolonged.",
    },
    {
      q: "What tests help identify the cause?",
      a: "Blood tests, thyroid evaluation, and an ultrasound scan are commonly used to identify the underlying cause.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "When should I see a doctor instead of trying home remedies?",
      a: "If prolonged periods continue for more than one or two cycles, or are accompanied by heavy bleeding or fatigue.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with questions before visiting?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Can prolonged periods lead to other health issues if untreated?",
      a: "Yes, they can lead to iron-deficiency anaemia and may signal an underlying condition needing treatment.",
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
                How to Stop Prolonged Periods Naturally: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Periods lasting longer than usual — beyond the typical 7-day
                range — can be exhausting, disruptive, and sometimes worrying.
                While many women search for natural ways to manage prolonged
                periods, it&apos;s important to understand that persistent or
                recurring long periods often have an underlying medical cause
                that lifestyle changes alone cannot fully resolve.
              </p>

              <p className="text-gray-700">
                This guide explains supportive natural approaches, what actually
                causes prolonged periods, and when it&apos;s time to see a
                gynaecologist — including details about Dr. Priyanka Pachauri, a
                well-known gynaecologist in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as a &quot;Prolonged Period&quot;?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A typical period usually lasts between 3 to 7 days
                </li>
                <li>
                  Bleeding that consistently lasts longer than 7-8 days is
                  generally considered prolonged
                </li>
                <li>
                  Occasional variation is normal, but a pattern of consistently
                  long periods deserves medical attention
                </li>
                <li>
                  Prolonged periods combined with heavy flow (needing to change
                  a pad or tampon every hour or two) is a stronger signal that
                  something needs evaluation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Prolonged Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the underlying cause is essential, since
                &quot;natural&quot; tips work differently depending on
                what&apos;s driving the problem.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hormonal imbalance</strong> – irregular oestrogen and
                  progesterone levels can affect cycle length and bleeding
                  duration
                </li>
                <li>
                  <strong>Uterine fibroids</strong> – non-cancerous growths in
                  the uterus that often cause heavier, longer periods
                </li>
                <li>
                  <strong>Uterine polyps</strong> – small growths in the
                  uterine lining that can cause prolonged or irregular bleeding
                </li>
                <li>
                  <strong>PCOS (Polycystic Ovary Syndrome)</strong> – a common
                  hormonal condition that can cause irregular, sometimes
                  prolonged periods
                </li>
                <li>
                  <strong>Thyroid disorders</strong> – both an underactive and
                  overactive thyroid can affect menstrual patterns
                </li>
                <li>
                  <strong>Adenomyosis</strong> – a condition where uterine
                  lining tissue grows into the uterine muscle wall
                </li>
                <li>
                  <strong>Perimenopause</strong> – the transition period before
                  menopause, when cycles often become irregular
                </li>
                <li>
                  <strong>Bleeding disorders</strong> – certain blood clotting
                  conditions can lead to heavier, longer bleeding
                </li>
                <li>
                  <strong>Stress and significant weight changes</strong> – can
                  disrupt hormonal balance and affect cycle regularity
                </li>
                <li>
                  <strong>Certain medications</strong> – including some blood
                  thinners or hormonal contraceptives, depending on the
                  individual
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Lifestyle Approaches That May Help
              </h2>

              <p className="mb-4 text-gray-700">
                While these general lifestyle measures can support overall
                menstrual health, they should be seen as complementary support
                alongside proper medical evaluation, not a guaranteed standalone
                fix for prolonged bleeding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Maintain a balanced, iron-rich diet</strong> – include
                  foods like leafy greens, beans, and lean protein to help
                  prevent anaemia from prolonged blood loss
                </li>
                <li>
                  <strong>Stay well-hydrated</strong> – supports overall
                  circulation and general wellbeing during your cycle
                </li>
                <li>
                  <strong>Prioritise adequate rest</strong> – the body needs
                  proper recovery time during periods, especially prolonged ones
                </li>
                <li>
                  <strong>Manage stress levels</strong> – chronic stress can
                  disrupt hormonal balance; practices like deep breathing, yoga,
                  or meditation may offer support
                </li>
                <li>
                  <strong>Maintain a healthy, stable body weight</strong> – both
                  being significantly underweight or overweight can affect
                  hormonal regulation and cycle length
                </li>
                <li>
                  <strong>Limit excessive caffeine and alcohol</strong> – both
                  can affect hormonal balance and may worsen symptoms for some
                  women
                </li>
                <li>
                  <strong>Engage in regular, moderate exercise</strong> –
                  supports overall hormonal health, though very intense or
                  excessive exercise can sometimes worsen irregular cycles
                </li>
                <li>
                  <strong>Track your cycle</strong> – keeping a record of cycle
                  length, flow intensity, and symptoms helps you and your doctor
                  identify patterns
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods and Nutrients Often Associated with Menstrual Health
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Iron-rich foods</strong> – to help replace blood loss
                  and prevent fatigue or anaemia
                </li>
                <li>
                  <strong>Vitamin C-rich foods</strong> – supports iron
                  absorption when eaten alongside iron-rich meals
                </li>
                <li>
                  <strong>Foods rich in omega-3 fatty acids</strong> – such as
                  flaxseeds and walnuts, sometimes associated with hormonal
                  balance support
                </li>
                <li>
                  <strong>Adequate protein intake</strong> – supports overall
                  recovery and energy levels
                </li>
                <li>
                  <strong>Foods high in fibre</strong> – supports overall
                  hormonal metabolism and digestive health
                </li>
                <li>
                  <strong>Reducing highly processed and sugary foods</strong> –
                  may help support more stable hormonal balance over time
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                It&apos;s important to note that diet and lifestyle changes
                support general menstrual wellness but are not a substitute for
                identifying and treating an underlying medical cause of prolonged
                bleeding.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why &quot;Natural&quot; Approaches Alone Are Often Not Enough
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Conditions like fibroids, polyps, or adenomyosis are
                  structural issues that lifestyle changes cannot resolve on
                  their own
                </li>
                <li>
                  Hormonal imbalances often need proper diagnosis and, in some
                  cases, medical treatment to correct
                </li>
                <li>
                  Prolonged, unmanaged bleeding can lead to significant
                  iron-deficiency anaemia, causing fatigue, weakness, and other
                  health issues
                </li>
                <li>
                  Relying solely on home remedies can delay diagnosis of a
                  treatable underlying condition
                </li>
                <li>
                  What works for one woman&apos;s hormonal pattern may not work
                  for another&apos;s, since causes vary significantly
                </li>
                <li>
                  A doctor can identify the exact cause through proper
                  examination and testing, allowing for a targeted, effective
                  treatment plan
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When You Should See a Gynaecologist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your periods consistently last longer than 7-8 days
                </li>
                <li>
                  You are soaking through a pad or tampon every hour or two for
                  several consecutive hours
                </li>
                <li>
                  You experience large blood clots during your period
                </li>
                <li>
                  You feel unusually fatigued, dizzy, or short of breath, which
                  may indicate anaemia
                </li>
                <li>
                  Your periods are accompanied by severe pain that disrupts
                  daily activities
                </li>
                <li>
                  You notice bleeding between periods, not just during your
                  expected cycle
                </li>
                <li>
                  Your periods have suddenly become much longer or heavier than
                  your usual pattern
                </li>
                <li>
                  You are trying to conceive and prolonged periods are affecting
                  your ability to track ovulation accurately
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a Gynaecological Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed menstrual history</strong> – understanding
                  your cycle pattern, flow, and duration over recent months
                </li>
                <li>
                  <strong>Physical examination</strong> – to check for any
                  obvious signs contributing to prolonged bleeding
                </li>
                <li>
                  <strong>Blood tests</strong> – to check for anaemia, thyroid
                  function, and hormonal levels
                </li>
                <li>
                  <strong>Ultrasound scan</strong> – to check for fibroids,
                  polyps, or structural abnormalities in the uterus
                </li>
                <li>
                  <strong>Personalised treatment plan</strong> – which may
                  include lifestyle guidance, hormonal treatment, or, in some
                  cases, a minor procedure depending on the cause
                </li>
                <li>
                  <strong>Follow-up monitoring</strong> – to track how well the
                  treatment plan is working over subsequent cycles
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for Prolonged Period
                Concerns in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a
                well-recognised gynaecologist in Moradabad offering thorough
                evaluation and treatment for menstrual irregularities, including
                prolonged and heavy periods. Her clinic follows the guiding
                principle of &quot;Her Health First,&quot; ensuring every
                patient receives a complete, unhurried evaluation rather than a
                quick, generic fix.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Relevant Services Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gynaecology and general women&apos;s health consultations
                </li>
                <li>
                  Diagnosis and treatment of prolonged, heavy, or irregular
                  periods
                </li>
                <li>PCOS and hormonal imbalance evaluation</li>
                <li>Diagnostic hysteroscopy for uterine cavity assessment</li>
                <li>Hysteroscopic polypectomy for uterine polyps</li>
                <li>Laparoscopic myomectomy for uterine fibroids</li>
                <li>Endometriosis and chronic pelvic pain management</li>
                <li>Pregnancy, antenatal, and postnatal care</li>
                <li>Fertility evaluation and IVF treatment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Used for Accurate Diagnosis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D & 4D ultrasound machines for detailed evaluation of the
                  uterus and pelvic structures
                </li>
                <li>
                  High-definition 3D laparoscopic and hysteroscopic systems for
                  precise diagnosis and treatment of fibroids or polyps
                </li>
                <li>
                  Lab-supported diagnostic testing for hormonal and thyroid
                  evaluation
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
                  credentials and specialised fellowship training in gynaecology
                  and laparoscopic surgery
                </li>
                <li>
                  <strong>Continuity of care</strong> – the same team tracking a
                  patient&apos;s cycle history and treatment progress over time
                </li>
                <li>
                  <strong>Outcomes patients hope for</strong> – accurate
                  diagnosis, effective treatment, and relief from disruptive
                  symptoms
                </li>
                <li>
                  <strong>Trust earned daily</strong> – reputation built through
                  patient referrals rather than paid promotion
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Prolonged Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Long periods are just something every woman has
                  to live with&quot;</strong> – Persistent prolonged periods
                  usually have an identifiable, treatable cause
                </li>
                <li>
                  <strong>&quot;Natural remedies alone can always fix the
                  problem&quot;</strong> – Many underlying causes, like fibroids
                  or hormonal imbalance, need proper medical evaluation and
                  treatment
                </li>
                <li>
                  <strong>&quot;Heavy, long periods are always linked to
                  something serious&quot;</strong> – While evaluation is
                  important, many causes are manageable once properly diagnosed
                </li>
                <li>
                  <strong>&quot;You should just wait it out before seeing a
                  doctor&quot;</strong> – Delaying care can lead to anaemia and
                  allow underlying conditions to progress
                </li>
                <li>
                  <strong>&quot;Period problems only matter if you&apos;re
                  trying to conceive&quot;</strong> – Prolonged periods can
                  affect quality of life, energy levels, and long-term health
                  regardless of pregnancy plans
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Approach Prolonged Periods
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Track your cycle</strong> – note the duration,
                  flow intensity, and any accompanying symptoms for a few
                  cycles.
                </li>
                <li>
                  <strong>Step 2: Try supportive lifestyle measures</strong> –
                  such as a balanced, iron-rich diet, hydration, and stress
                  management.
                </li>
                <li>
                  <strong>Step 3: Monitor for warning signs</strong> – like
                  excessive bleeding, large clots, or fatigue.
                </li>
                <li>
                  <strong>Step 4: Book a consultation with a gynaecologist</strong>{" "}
                  if the pattern continues beyond one or two cycles.
                </li>
                <li>
                  <strong>Step 5: Share your tracked cycle information</strong>{" "}
                  with your doctor for a clearer picture.
                </li>
                <li>
                  <strong>Step 6: Undergo recommended tests</strong> – such as
                  blood work or an ultrasound, to identify the underlying cause.
                </li>
                <li>
                  <strong>Step 7: Follow your personalised treatment plan</strong>{" "}
                  and attend follow-up visits to monitor progress.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Faster appointment availability without long-distance travel
                </li>
                <li>
                  Easier follow-up visits to track improvement over multiple
                  cycles
                </li>
                <li>
                  Lower overall treatment cost compared to travelling to another
                  city
                </li>
                <li>
                  Access to ultrasound and lab testing facilities for accurate
                  diagnosis
                </li>
                <li>
                  A comfortable, familiar environment for discussing a sensitive
                  health concern
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
                  <strong>Relevant services clearly listed</strong> –
                  Hysteroscopic polypectomy and laparoscopic myomectomy, both
                  directly relevant to prolonged period causes, are explicitly
                  named in the services list.
                </li>
                <li>
                  <strong>Broad hormonal and gynaecological coverage</strong> –
                  PCOS and general gynaecology services suggest the clinic can
                  investigate multiple possible causes of prolonged bleeding.
                </li>
                <li>
                  <strong>Technology transparency</strong> – Mentioning 3D/4D
                  ultrasound and diagnostic hysteroscopy builds confidence in
                  the clinic&apos;s diagnostic capability for menstrual
                  concerns.
                </li>
                <li>
                  <strong>Active blog with related health topics</strong> –
                  Existing articles on PCOS and hormonal health suggest ongoing
                  patient education, though a dedicated article on prolonged
                  periods is not currently listed.
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
                  blog post explaining common causes of prolonged or heavy
                  periods, along with when to seek medical care, could help the
                  website rank better for this widely searched topic and guide
                  more women toward timely evaluation.
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