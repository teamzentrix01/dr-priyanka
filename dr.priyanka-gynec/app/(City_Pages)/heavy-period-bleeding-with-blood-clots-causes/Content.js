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

export default function HeavyPeriodBleedingWithBloodClots() {
  const faqs = [
    {
      q: "Which doctor treats heavy period bleeding with clots in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers diagnosis and treatment for heavy bleeding and blood clots.",
    },
    {
      q: "Are blood clots during periods always abnormal?",
      a: "No, small occasional clots are common; large or frequent clots combined with heavy flow need evaluation.",
    },
    {
      q: "What size of clot is considered concerning?",
      a: "Clots consistently larger than a large grape or coin size are generally considered worth evaluating.",
    },
    {
      q: "What are common causes of heavy bleeding with clots?",
      a: "Fibroids, polyps, hormonal imbalance, adenomyosis, and thyroid disorders are common causes.",
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
      q: "Can heavy bleeding with clots cause anaemia?",
      a: "Yes, prolonged heavy blood loss can lead to iron-deficiency anaemia if not addressed.",
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
      q: "Should heavy bleeding with clots during a known pregnancy be treated as urgent?",
      a: "Yes, this combination needs prompt medical evaluation to check for possible complications.",
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
                Heavy Period Bleeding with Blood Clots: Causes You Should Know
              </h1>

              <p className="mb-4 text-gray-700">
                Seeing blood clots during your period can be alarming,
                especially when combined with unusually heavy flow. While some
                clotting during menstruation is completely normal, larger or
                more frequent clots — particularly alongside heavy bleeding —
                can sometimes signal an underlying condition that needs medical
                attention.
              </p>

              <p className="text-gray-700">
                This guide explains what causes heavy period bleeding with blood
                clots, when it&apos;s a cause for concern, and how to find the
                right doctor in Moradabad, including details about Dr. Priyanka
                Pachauri.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Menstrual Blood Clots
              </h2>

              <p className="mb-4 text-gray-700">
                Menstrual blood clots form when the body&apos;s natural
                anticoagulants (substances that keep blood from clotting)
                can&apos;t keep up with a heavier flow. During normal periods,
                the body releases enzymes that prevent blood from clotting
                inside the uterus, but during heavier flow days, blood can pool
                and clot before these enzymes fully act.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Small clots, generally smaller than a coin, are common and
                  usually not a cause for concern
                </li>
                <li>
                  Clots often appear darker in colour, especially at the
                  beginning or end of a period, or overnight when blood pools
                  while lying down
                </li>
                <li>
                  Occasional clotting on your heaviest flow day is a normal part
                  of many women&apos;s cycles
                </li>
                <li>
                  The concern arises when clots become large, frequent, or are
                  accompanied by unusually heavy overall blood loss
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Blood Clots Become a Cause for Concern
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clots that are consistently larger than a 25-paisa or
                  one-rupee coin (roughly the size of a large grape or bigger)
                </li>
                <li>
                  Passing several large clots throughout your period, not just
                  occasionally
                </li>
                <li>
                  Needing to change a pad or tampon every hour or two for
                  several consecutive hours due to heavy flow
                </li>
                <li>
                  Periods lasting longer than 7-8 days combined with clotting
                </li>
                <li>
                  Feeling unusually fatigued, dizzy, or short of breath, which
                  may indicate blood-loss-related anaemia
                </li>
                <li>
                  Blood clots appearing alongside severe cramping or pelvic
                  pain that disrupts daily activities
                </li>
                <li>
                  A noticeable, sudden change from your usual menstrual pattern
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Heavy Bleeding with Blood Clots
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal Imbalance
              </h3>
              <p className="mb-4 text-gray-700">
                Irregular levels of oestrogen and progesterone can cause the
                uterine lining to build up excessively, leading to heavier
                bleeding with clots when it eventually sheds. Common during
                adolescence, perimenopause, and in conditions like PCOS.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Fibroids
              </h3>
              <p className="mb-4 text-gray-700">
                Non-cancerous growths in the muscular wall of the uterus that
                can significantly increase menstrual flow and clotting. Larger
                or multiple fibroids tend to cause heavier bleeding.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Polyps
              </h3>
              <p className="mb-4 text-gray-700">
                Small growths on the inner lining of the uterus that can cause
                heavier, prolonged bleeding along with clotting.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Adenomyosis
              </h3>
              <p className="mb-4 text-gray-700">
                A condition where the tissue that normally lines the uterus grows
                into the uterine muscle wall, often causing heavier, more
                painful periods with clotting.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Thyroid Disorders
              </h3>
              <p className="mb-4 text-gray-700">
                Both an underactive and overactive thyroid can disrupt the
                hormonal balance that regulates menstrual flow.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Bleeding or Clotting Disorders
              </h3>
              <p className="mb-4 text-gray-700">
                Certain underlying blood clotting conditions can affect how the
                body manages menstrual bleeding, sometimes leading to unusually
                heavy flow.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Intrauterine Device (IUD) Use
              </h3>
              <p className="mb-4 text-gray-700">
                Certain types of IUDs, particularly copper IUDs, can be
                associated with heavier bleeding and clotting, especially in the
                first few months after insertion.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Miscarriage
              </h3>
              <p className="mb-4 text-gray-700">
                Blood clots combined with heavy bleeding, particularly with
                cramping, during a known or suspected pregnancy may indicate a
                miscarriage and needs prompt medical evaluation.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Perimenopause
              </h3>
              <p className="mb-4 text-gray-700">
                As hormone levels fluctuate in the years leading up to
                menopause, periods can become heavier, longer, and more prone to
                clotting.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why You Shouldn&apos;t Ignore Heavy Bleeding with Clots
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Prolonged, heavy bleeding can lead to significant
                  iron-deficiency anaemia, causing fatigue, weakness, and
                  reduced quality of life
                </li>
                <li>
                  Underlying causes like fibroids or polyps often don&apos;t
                  resolve on their own and may worsen over time without
                  treatment
                </li>
                <li>
                  Heavy bleeding combined with pregnancy-related clotting
                  requires urgent evaluation to rule out miscarriage or other
                  complications
                </li>
                <li>
                  Persistent heavy bleeding can affect fertility in some
                  underlying conditions if left unaddressed
                </li>
                <li>
                  Early diagnosis often means simpler, less invasive treatment
                  options are available
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed menstrual history</strong> – understanding
                  your flow pattern, clot size and frequency, and cycle length
                  over recent months
                </li>
                <li>
                  <strong>Physical examination</strong> – to check for any
                  obvious signs contributing to heavy bleeding
                </li>
                <li>
                  <strong>Blood tests</strong> – to check for anaemia, thyroid
                  function, and hormonal levels, and sometimes clotting factor
                  evaluation
                </li>
                <li>
                  <strong>Ultrasound scan</strong> – to check for fibroids,
                  polyps, adenomyosis, or other structural causes
                </li>
                <li>
                  <strong>Hysteroscopy, if needed</strong> – a closer look
                  inside the uterus for a more detailed evaluation
                </li>
                <li>
                  <strong>Personalised treatment plan</strong> – which may
                  include medication, hormonal treatment, or a minor procedure
                  depending on the underlying cause
                </li>
                <li>
                  <strong>Follow-up monitoring</strong> – to track improvement
                  over subsequent cycles
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches Based on Underlying Cause
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hormonal treatment</strong> – to help regulate cycle
                  length and reduce excessive bleeding
                </li>
                <li>
                  <strong>Medication to reduce blood loss</strong> – prescribed
                  based on the specific cause and severity
                </li>
                <li>
                  <strong>Hysteroscopic polypectomy</strong> – a minimally
                  invasive procedure to remove uterine polyps
                </li>
                <li>
                  <strong>Laparoscopic myomectomy</strong> – a minimally
                  invasive procedure to remove fibroids while often preserving
                  the uterus
                </li>
                <li>
                  <strong>Thyroid management</strong> – addressing an underlying
                  thyroid disorder often improves menstrual regularity
                </li>
                <li>
                  <strong>Iron supplementation</strong> – to address anaemia
                  resulting from prolonged heavy blood loss
                </li>
                <li>
                  <strong>IUD reassessment</strong> – switching or adjusting the
                  device if it&apos;s contributing to heavy bleeding
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor will recommend the specific approach based on your
                diagnosis, age, and future pregnancy plans.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for Heavy Bleeding
                Concerns in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a
                well-recognised gynaecologist in Moradabad offering thorough
                evaluation and treatment for heavy menstrual bleeding and
                related concerns. Her clinic follows the guiding principle of
                &quot;Her Health First,&quot; ensuring every patient receives a
                complete diagnostic workup rather than a generic quick fix.
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
                  Diagnosis and treatment of heavy or abnormal uterine bleeding
                </li>
                <li>Diagnostic hysteroscopy for uterine cavity assessment</li>
                <li>Hysteroscopic polypectomy for uterine polyps</li>
                <li>Laparoscopic myomectomy for uterine fibroids</li>
                <li>PCOS and hormonal imbalance evaluation</li>
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
                  precise diagnosis and treatment
                </li>
                <li>
                  Lab-supported diagnostic testing for hormonal, thyroid, and
                  anaemia evaluation
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
                  patient&apos;s bleeding pattern and treatment progress over
                  time
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
                Common Myths About Period Blood Clots
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Any blood clot during periods is
                  dangerous&quot;</strong> – Small, occasional clots are a
                  normal part of many women&apos;s cycles
                </li>
                <li>
                  <strong>&quot;Blood clots always mean fibroids&quot;</strong>{" "}
                  – While fibroids are one common cause, several other
                  conditions can also cause clotting
                </li>
                <li>
                  <strong>&quot;Heavy bleeding with clots will resolve on its
                  own&quot;</strong> – Many underlying causes need proper
                  diagnosis and treatment to improve
                </li>
                <li>
                  <strong>&quot;Only older women get heavy periods with
                  clots&quot;</strong> – This can affect women of any
                  reproductive age, from adolescence through perimenopause
                </li>
                <li>
                  <strong>&quot;It&apos;s not urgent unless there&apos;s severe
                  pain&quot;</strong> – Heavy bleeding without pain can still
                  lead to significant anaemia and needs evaluation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Approach Heavy Bleeding with Clots
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Track your symptoms</strong> – note clot size,
                  frequency, flow intensity, and cycle length for a couple of
                  cycles.
                </li>
                <li>
                  <strong>Step 2: Watch for warning signs</strong> – such as
                  soaking through protection hourly, fatigue, or dizziness.
                </li>
                <li>
                  <strong>Step 3: Book a consultation with a
                  gynaecologist</strong> if clots are large, frequent, or
                  bleeding is unusually heavy.
                </li>
                <li>
                  <strong>Step 4: Share your tracked symptoms</strong> with your
                  doctor for a clearer diagnostic picture.
                </li>
                <li>
                  <strong>Step 5: Undergo recommended tests</strong> – such as
                  blood work or an ultrasound, to identify the underlying cause.
                </li>
                <li>
                  <strong>Step 6: Follow your personalised treatment plan</strong>,
                  whether medication, a minor procedure, or lifestyle
                  adjustment.
                </li>
                <li>
                  <strong>Step 7: Attend follow-up visits</strong> to confirm
                  the treatment is working and adjust if needed.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Faster appointment availability without long-distance travel,
                  important since heavy bleeding needs timely evaluation
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
                  Access to ultrasound, hysteroscopy, and lab testing facilities
                  for accurate diagnosis
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
                Website Analysis: gynaecologistmoradabad.com
              </h2>

              <p className="mb-4 text-gray-700">
                Since a short analysis of the official website was requested,
                here is a quick and honest breakdown:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Relevant services clearly listed</strong> –
                  Hysteroscopic polypectomy and laparoscopic myomectomy, both
                  directly relevant to heavy bleeding causes, are explicitly
                  named in the services list.
                </li>
                <li>
                  <strong>Broad hormonal and gynaecological coverage</strong> –
                  PCOS and general gynaecology services suggest the clinic can
                  investigate multiple possible causes of clotting and heavy
                  flow.
                </li>
                <li>
                  <strong>Technology transparency</strong> – Mentioning 3D/4D
                  ultrasound and diagnostic hysteroscopy builds confidence in
                  the clinic&apos;s diagnostic capability for this specific
                  concern.
                </li>
                <li>
                  <strong>Active blog with related health topics</strong> –
                  Existing articles on PCOS and hormonal health suggest ongoing
                  patient education, though a dedicated article on blood clots
                  during periods is not currently listed.
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
                  blog post explaining normal versus concerning blood clot
                  patterns during periods could help the website rank better for
                  this specific, commonly searched topic and guide more women
                  toward timely evaluation.
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