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

export default function BestGynaeSurgeonForFibroids() {
  const faqs = [
    {
      q: "Who is the best gynae surgeon for fibroids in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers expert laparoscopic myomectomy and fibroid treatment.",
    },
    {
      q: "Do all fibroids require surgery?",
      a: "No, many small, symptom-free fibroids only need monitoring rather than surgical removal.",
    },
    {
      q: "Does fibroid surgery always mean removing the uterus?",
      a: "No, laparoscopic myomectomy removes fibroids while preserving the uterus.",
    },
    {
      q: "What are the benefits of laparoscopic fibroid surgery?",
      a: "Less scarring, faster recovery, reduced blood loss, and a shorter hospital stay compared to open surgery.",
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
      q: "Can fibroids affect fertility?",
      a: "Some fibroids, especially those distorting the uterine cavity, can affect fertility; others cause no impact at all.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with my ultrasound report before visiting?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Do fibroids come back after surgery?",
      a: "New fibroids can sometimes develop over time, but many women experience long-term relief after proper treatment.",
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
                Best Gynae Surgeon for Fibroids in Moradabad: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Uterine fibroids are one of the most common gynaecological
                conditions, affecting a significant number of women at some
                point in their reproductive years. While many fibroids cause no
                symptoms and need no treatment, others can lead to heavy
                bleeding, pain, and fertility concerns that require the skill of
                an experienced surgeon.
              </p>

              <p className="text-gray-700">
                This guide explains what fibroids are, when surgery becomes
                necessary, and how to find the best gynae surgeon for fibroids
                in Moradabad — including details about Dr. Priyanka Pachauri, a
                well-known gynaecologist in the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Uterine Fibroids?
              </h2>

              <p className="mb-4 text-gray-700">
                Uterine fibroids are non-cancerous growths that develop in or
                around the uterus, made up of muscle and fibrous tissue. They
                vary widely in size, number, and location, which significantly
                affects the symptoms they cause and the treatment approach
                needed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Intramural fibroids</strong> – grow within the
                  muscular wall of the uterus, the most common type
                </li>
                <li>
                  <strong>Submucosal fibroids</strong> – grow just beneath the
                  inner lining of the uterus, often causing heavier bleeding
                </li>
                <li>
                  <strong>Subserosal fibroids</strong> – grow on the outer
                  surface of the uterus, sometimes pressing on nearby organs
                </li>
                <li>
                  <strong>Pedunculated fibroids</strong> – grow on a stalk,
                  either inside or outside the uterus
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Fibroids
              </h2>

              <p className="mb-4 text-gray-700">
                Many fibroids cause no noticeable symptoms, but larger or
                specifically located fibroids can lead to:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy or prolonged menstrual bleeding, sometimes with blood
                  clots
                </li>
                <li>Pelvic pain or pressure, especially with larger fibroids</li>
                <li>Frequent urination due to pressure on the bladder</li>
                <li>Constipation or bowel discomfort from pressure on the rectum</li>
                <li>Lower back pain</li>
                <li>Pain during intercourse</li>
                <li>Enlarged abdomen in cases of very large fibroids</li>
                <li>
                  Difficulty conceiving or recurrent pregnancy loss, depending
                  on fibroid location and size
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Does Fibroid Surgery Become Necessary?
              </h2>

              <p className="mb-4 text-gray-700">
                Not every fibroid needs surgical removal. A skilled surgeon
                carefully evaluates whether surgery is the right approach based
                on:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fibroid size, number, and specific location within the uterus
                </li>
                <li>
                  Severity of symptoms, particularly heavy bleeding causing
                  anaemia
                </li>
                <li>
                  Impact on fertility, especially for fibroids distorting the
                  uterine cavity
                </li>
                <li>
                  Rate of fibroid growth over time, tracked through repeat
                  ultrasounds
                </li>
                <li>
                  Whether conservative treatments (medication or monitoring)
                  have failed to control symptoms
                </li>
                <li>
                  The patient&apos;s future pregnancy plans, which influence
                  whether a fertility-preserving approach is prioritised
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Fibroids
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Conservative (Non-Surgical) Approaches
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Watchful waiting</strong> – for small, symptom-free
                  fibroids, monitored periodically through ultrasound
                </li>
                <li>
                  <strong>Medication</strong> – to help manage heavy bleeding or
                  reduce fibroid size before considering surgery
                </li>
                <li>
                  <strong>Hormonal treatments</strong> – to help control
                  symptoms in certain cases
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Surgical Options
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic myomectomy</strong> – a minimally
                  invasive procedure to remove fibroids while preserving the
                  uterus, often the preferred option for women wanting to retain
                  fertility
                </li>
                <li>
                  <strong>Hysteroscopic myomectomy</strong> – used specifically
                  for submucosal fibroids, removed through the vaginal route
                  without external incisions
                </li>
                <li>
                  <strong>Open (abdominal) myomectomy</strong> – considered for
                  very large or numerous fibroids where a laparoscopic approach
                  may not be suitable
                </li>
                <li>
                  <strong>Laparoscopic hysterectomy</strong> – removal of the
                  uterus, generally considered when childbearing is complete and
                  fibroids cause significant, unmanageable symptoms
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Laparoscopic Myomectomy Is Often the Preferred Choice
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Minimally invasive approach</strong> – performed
                  through small incisions, resulting in less scarring compared
                  to open surgery
                </li>
                <li>
                  <strong>Faster recovery time</strong> – most patients return
                  to normal activities more quickly than after open abdominal
                  surgery
                </li>
                <li>
                  <strong>Fertility preservation</strong> – the uterus is
                  retained, an important factor for women who wish to conceive
                  in the future
                </li>
                <li>
                  <strong>Reduced blood loss during surgery</strong> – compared
                  to traditional open procedures
                </li>
                <li>
                  <strong>Shorter hospital stay</strong> – many patients are
                  discharged within a day or two, depending on individual
                  recovery
                </li>
                <li>
                  <strong>Precision</strong> – high-definition laparoscopic
                  systems allow for accurate identification and removal of
                  fibroids while protecting healthy uterine tissue
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes a Surgeon the &quot;Best&quot; Choice for Fibroid
                Treatment?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Strong laparoscopic surgical training</strong> –
                  specific fellowship or advanced training in minimally invasive
                  gynaecological surgery
                </li>
                <li>
                  <strong>Experience handling a range of fibroid cases</strong>{" "}
                  – from small, single fibroids to complex, multiple fibroid
                  cases
                </li>
                <li>
                  <strong>A fertility-preserving mindset</strong> – prioritising
                  uterus-sparing techniques whenever medically appropriate
                </li>
                <li>
                  <strong>Access to modern surgical technology</strong> –
                  high-definition 3D laparoscopic systems improve precision and
                  outcomes
                </li>
                <li>
                  <strong>Clear communication about treatment options</strong>{" "}
                  – explaining all approaches, not just surgery, before
                  recommending a path forward
                </li>
                <li>
                  <strong>Strong track record and patient testimonials</strong>{" "}
                  – reflecting consistent, safe surgical outcomes
                </li>
                <li>
                  <strong>Honest assessment of surgical necessity</strong> –
                  recommending surgery only when genuinely needed, not as a
                  default response
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a Fibroid Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed symptom history</strong> – understanding
                  bleeding patterns, pain, and how symptoms affect your daily
                  life
                </li>
                <li>
                  <strong>Physical examination</strong> – to assess uterine size
                  and any obvious abnormalities
                </li>
                <li>
                  <strong>Ultrasound scan</strong> – to determine fibroid size,
                  number, and exact location
                </li>
                <li>
                  <strong>Additional imaging if needed</strong> – such as MRI
                  for complex or numerous fibroids, to plan surgery more
                  precisely
                </li>
                <li>
                  <strong>Discussion of all treatment options</strong> – from
                  monitoring to medication to surgery, based on your specific
                  case
                </li>
                <li>
                  <strong>Personalised surgical planning, if needed</strong> –
                  explaining the recommended approach, expected recovery, and
                  fertility implications
                </li>
                <li>
                  <strong>Pre-operative preparation guidance</strong> –
                  including any tests needed before surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Gynae Surgeon for Fibroids in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a
                well-recognised gynaecologist and laparoscopic surgeon in
                Moradabad, offering advanced, fertility-preserving fibroid
                treatment. Her clinic follows the guiding principle of
                &quot;Her Health First,&quot; ensuring every patient receives a
                thorough evaluation and honest guidance about her treatment
                options.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Relevant Services Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Laparoscopic myomectomy – for fertility-preserving fibroid
                  removal
                </li>
                <li>
                  3D laparoscopic gynaecological surgery – advanced minimally
                  invasive surgical capability
                </li>
                <li>
                  Diagnostic hysteroscopy for submucosal fibroid evaluation and
                  treatment
                </li>
                <li>
                  Laparoscopic hysterectomy, for cases where uterus removal is
                  the appropriate choice
                </li>
                <li>
                  Laparoscopic cystectomy for related ovarian conditions
                </li>
                <li>Gynaecology and general women&apos;s health consultations</li>
                <li>
                  Pregnancy, antenatal, and postnatal care for those planning to
                  conceive after fibroid treatment
                </li>
                <li>Fertility evaluation and IVF treatment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Supporting Precise Fibroid Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  High-definition 3D laparoscopic surgical systems for precise,
                  minimally invasive fibroid removal
                </li>
                <li>
                  3D & 4D ultrasound machines for detailed pre-surgical
                  evaluation and planning
                </li>
                <li>
                  An integrated care approach connecting diagnosis, surgery, and
                  post-operative follow-up
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
                  <strong>Expertise with heart</strong> – gold medal academic
                  credentials and international fellowship training in
                  laparoscopy and gynaecological surgery
                </li>
                <li>
                  <strong>Continuity you can count on</strong> – the same team
                  following your case from diagnosis through surgery and recovery
                </li>
                <li>
                  <strong>Outcomes patients hope for</strong> –
                  fertility-preserving surgery, symptom relief, and safe, smooth
                  recovery
                </li>
                <li>
                  <strong>Trust earned daily</strong> – reputation built through
                  patient referrals rather than paid promotion
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Fibroid Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;All fibroids need to be surgically
                  removed&quot;</strong> – Many small, symptom-free fibroids
                  only need monitoring, not surgery
                </li>
                <li>
                  <strong>&quot;Fibroid surgery always means losing the
                  uterus&quot;</strong> – Myomectomy specifically removes
                  fibroids while preserving the uterus
                </li>
                <li>
                  <strong>&quot;Laparoscopic surgery is less effective than open
                  surgery&quot;</strong> – Laparoscopic myomectomy is highly
                  effective for appropriately selected cases, with the added
                  benefit of faster recovery
                </li>
                <li>
                  <strong>&quot;Fibroids always come back after
                  surgery&quot;</strong> – While new fibroids can develop over
                  time, many women experience long-term symptom relief after
                  myomectomy
                </li>
                <li>
                  <strong>&quot;Fibroids always cause infertility&quot;</strong>{" "}
                  – Many fibroids don&apos;t affect fertility at all; only
                  certain sizes and locations pose a concern
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Choose the Right Fibroid Surgeon
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Get a proper diagnosis</strong> – confirm
                  fibroid size, number, and location through ultrasound.
                </li>
                <li>
                  <strong>Step 2: Discuss all treatment options</strong> – not
                  just surgery, to understand if monitoring or medication could
                  work first.
                </li>
                <li>
                  <strong>Step 3: Ask about the surgeon&apos;s laparoscopic
                  training and experience</strong> with fibroid cases
                  specifically.
                </li>
                <li>
                  <strong>Step 4: Confirm the technology and equipment
                  available</strong> – modern laparoscopic systems improve
                  precision and safety.
                </li>
                <li>
                  <strong>Step 5: Ask about fertility preservation</strong> –
                  especially important if you plan to conceive in the future.
                </li>
                <li>
                  <strong>Step 6: Read patient testimonials</strong> – look for
                  mentions of successful, minimally invasive outcomes.
                </li>
                <li>
                  <strong>Step 7: Discuss recovery expectations and follow-up
                  care</strong> before finalising your decision.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Choosing a Local Fibroid Surgeon in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Convenient access for consultation, surgery, and follow-up
                  visits without long-distance travel
                </li>
                <li>
                  Continuity of care with the same surgeon throughout diagnosis,
                  treatment, and recovery
                </li>
                <li>
                  Lower overall treatment cost compared to travelling to a metro
                  city for the same procedure
                </li>
                <li>
                  Access to modern laparoscopic technology without needing to
                  leave your city
                </li>
                <li>
                  A comfortable, familiar environment for a significant surgical
                  decision
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
                  <strong>Directly relevant service explicitly listed</strong>{" "}
                  – Laparoscopic myomectomy is clearly named as a service,
                  directly matching this search topic.
                </li>
                <li>
                  <strong>Strong laparoscopic surgical positioning</strong> –
                  The site&apos;s emphasis on 3D laparoscopy across multiple
                  procedures (myomectomy, cystectomy, hysterectomy) builds
                  confidence in the surgeon&apos;s minimally invasive surgical
                  expertise.
                </li>
                <li>
                  <strong>Fertility-preserving philosophy evident</strong> – The
                  overall service listing, combined with dedicated fertility and
                  IVF services, supports a fertility-conscious approach to
                  fibroid treatment.
                </li>
                <li>
                  <strong>Technology transparency</strong> – Mentioning the
                  specific 3D laparoscopic surgical system and 4D ultrasound
                  builds credibility for precise diagnosis and surgery.
                </li>
                <li>
                  <strong>Academic credentials highlighted</strong> – References
                  to gold medal academic background and international fellowship
                  training support surgical credibility.
                </li>
                <li>
                  <strong>Easy-to-access contact details</strong> – Phone,
                  WhatsApp, and email are clearly visible in the header and
                  footer.
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
                  blog post or before-and-after style patient outcome
                  information specifically about fibroid surgery could help the
                  website rank better for this topic and give patients more
                  confidence before booking.
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