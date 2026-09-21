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

export default function LargeUterineFibroidSurgeon() {
  const faqs = [
    {
      q: "What is considered a large uterine fibroid?",
      a: "Fibroids are generally considered large when they exceed several centimeters in diameter, significantly distorting uterine shape and size.",
    },
    {
      q: "Who treats large or complex fibroid cases in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers surgical evaluation and treatment for fibroid cases of varying complexity.",
    },
    {
      q: "Can large fibroids always be removed laparoscopically?",
      a: "Not always — depending on size, number, and location, some cases may require an open surgical approach.",
    },
    {
      q: "Does having a large fibroid mean I'll need a hysterectomy?",
      a: "Not necessarily — many large fibroids can still be treated with uterus-preserving myomectomy, depending on individual factors.",
    },
    {
      q: "Is blood loss a significant risk with large fibroid surgery?",
      a: "It can be higher than with smaller fibroids, which is why experienced surgical planning and care are important.",
    },
    {
      q: "Can I still have children after large fibroid removal?",
      a: "Many women conceive successfully afterward, particularly when a fertility-preserving surgical approach is used.",
    },
    {
      q: "How do I book a consultation for fibroid evaluation?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "How long is recovery after large fibroid surgery?",
      a: "It varies by surgical approach, ranging from one to two weeks for laparoscopic cases to several weeks for open surgery.",
    },
    {
      q: "What tests are used to evaluate large fibroids before surgery?",
      a: "Detailed pelvic ultrasound, sometimes MRI, and blood tests to check for anemia are commonly used.",
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
                Large Uterine Fibroid Surgeon in Moradabad: Navigating Complex
                Fibroid Cases
              </h1>

              <p className="mb-4 text-gray-700">
                Not all uterine fibroids are the same, and when a fibroid grows
                particularly large — or when a woman has multiple significant
                fibroids — treatment becomes considerably more complex than a
                standard fibroid case. Large fibroids can cause more severe
                symptoms, carry higher surgical risks, and often require more
                specialized surgical planning and experience to treat safely and
                effectively.
              </p>

              <p className="text-gray-700">
                In Moradabad, finding a surgeon specifically experienced in
                managing large and complex fibroid cases matters significantly,
                since the surgical approach, risk profile, and recovery
                expectations differ meaningfully from smaller, more
                straightforward fibroids. This article explains what makes large
                fibroid cases unique, the surgical considerations involved, and
                why Dr. Priyanka Pachauri is equipped to manage complex fibroid
                surgery in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as a Large Uterine Fibroid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fibroids are generally categorized by size, with larger
                  fibroids often defined as those exceeding several centimeters
                  in diameter, though classification varies based on clinical
                  context
                </li>
                <li>
                  Some fibroids can grow to the size of a grapefruit or larger,
                  significantly distorting the shape and size of the uterus
                </li>
                <li>
                  Multiple fibroids, even if individually moderate in size, can
                  collectively create a &quot;large fibroid uterus&quot; with
                  similar surgical complexity to a single very large fibroid
                </li>
                <li>
                  Rapid growth of a fibroid is sometimes considered significant
                  regardless of absolute size, and may warrant closer evaluation
                </li>
                <li>
                  Size alone doesn&apos;t always determine symptom severity,
                  though larger fibroids are more likely to cause significant
                  symptoms and complications
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Large Fibroids Present Unique Challenges
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Increased risk of significant blood loss during surgery, given
                  the larger blood supply that bigger fibroids typically develop
                </li>
                <li>
                  Greater technical complexity in removal, particularly when
                  fibroids are deeply embedded in the uterine wall or numerous
                  in number
                </li>
                <li>
                  Higher likelihood of requiring a more invasive surgical
                  approach, since very large fibroids aren&apos;t always
                  suitable for a purely laparoscopic technique
                </li>
                <li>
                  Distorted uterine anatomy can make surgical planning and
                  execution more challenging compared to smaller, more clearly
                  defined fibroids
                </li>
                <li>
                  Longer surgical time is often required, given the additional
                  care needed to remove larger fibroids safely and repair the
                  uterine wall properly
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms Associated With Large Fibroids
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Significant pelvic pain or pressure, often more pronounced
                  than with smaller fibroids
                </li>
                <li>
                  Heavy, prolonged menstrual bleeding, sometimes severe enough
                  to cause anemia
                </li>
                <li>
                  Visible abdominal distension, in some cases resembling the
                  appearance of pregnancy
                </li>
                <li>
                  Frequent urination or difficulty fully emptying the bladder,
                  due to pressure on surrounding structures
                </li>
                <li>
                  Constipation or bowel pressure symptoms, particularly with
                  fibroids pressing on the rectum
                </li>
                <li>
                  Back pain or leg discomfort, in some cases related to pressure
                  on nearby nerves or blood vessels
                </li>
                <li>
                  Difficulty conceiving or pregnancy complications, particularly
                  relevant for women planning to conceive
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostic Evaluation for Large Fibroids
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed pelvic ultrasound, often including 3D imaging, to
                  assess the size, number, and exact location of fibroids
                </li>
                <li>
                  MRI, frequently recommended for larger or more complex cases,
                  providing more detailed mapping to guide surgical planning
                </li>
                <li>
                  Blood tests, including a check for anemia, which is common
                  with large fibroids causing heavy bleeding
                </li>
                <li>
                  A thorough symptom and medical history review, helping
                  determine the urgency and best approach for treatment
                </li>
                <li>
                  Assessment of fertility goals, which significantly influences
                  whether a uterus-preserving approach is prioritized
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches for Large Fibroids
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pre-Surgical Medical Management
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal medications may be used in some cases to help shrink
                  fibroids before surgery, potentially making a less invasive
                  surgical approach possible
                </li>
                <li>
                  Treating anemia before surgery, through iron supplementation or
                  other measures, to reduce surgical risk
                </li>
                <li>
                  Careful pre-surgical planning, including detailed imaging
                  review, to anticipate challenges during the procedure
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Surgical Options
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic myomectomy</strong>, which may still be
                  possible for some large fibroids depending on their number,
                  location, and the surgeon&apos;s experience with complex
                  minimally invasive cases
                </li>
                <li>
                  <strong>Open (abdominal) myomectomy</strong>, often necessary
                  for very large or numerous fibroids that aren&apos;t suitable
                  for a laparoscopic approach, while still preserving the uterus
                </li>
                <li>
                  <strong>Hysterectomy</strong>, which may be recommended in
                  certain cases, particularly for women who&apos;ve completed
                  their families and have very extensive fibroid involvement
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The choice between approaches depends on individual factors,
                including fibroid characteristics, the patient&apos;s fertility
                goals, and overall health.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Large Fibroid Surgery Requires Specialized Surgical
                Experience
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Managing significant blood loss risk requires careful surgical
                  technique and, in some cases, preparation for blood transfusion
                  if needed
                </li>
                <li>
                  Navigating distorted uterine anatomy demands more advanced
                  surgical judgment compared to straightforward, smaller fibroid
                  cases
                </li>
                <li>
                  Deciding between minimally invasive and open surgical
                  approaches requires experience-based judgment about
                  what&apos;s safely achievable for each specific case
                </li>
                <li>
                  Properly repairing the uterine wall after removing large
                  fibroids is technically demanding and directly affects future
                  pregnancy safety if fertility preservation is a goal
                </li>
                <li>
                  Managing potential complications during surgery requires a
                  surgeon comfortable handling unexpected findings in complex
                  cases
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect From Surgery and Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgical duration is generally longer for large or multiple
                  fibroid cases compared to standard fibroid removal
                </li>
                <li>
                  Hospital stay may be longer, particularly if open surgery is
                  required rather than a laparoscopic approach
                </li>
                <li>
                  Recovery time varies significantly based on the surgical
                  approach used, ranging from one to two weeks for laparoscopic
                  cases to several weeks for open surgery
                </li>
                <li>
                  Closer post-operative monitoring is often recommended given
                  the increased complexity of these cases
                </li>
                <li>
                  Follow-up imaging may be used to confirm proper healing,
                  particularly important if future pregnancy is planned
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fertility Considerations With Large Fibroids
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Large fibroids can sometimes affect fertility, depending on
                  their size, number, and location relative to the uterine
                  cavity
                </li>
                <li>
                  Surgical removal can improve fertility outcomes in many cases,
                  though this depends on individual circumstances
                </li>
                <li>
                  A waiting period is generally recommended before attempting
                  conception after major fibroid surgery, allowing adequate
                  healing of the uterine wall
                </li>
                <li>
                  Future pregnancies may require closer monitoring, particularly
                  regarding delivery planning, after significant fibroid surgery
                </li>
                <li>
                  Discussing fertility goals openly with your surgeon before
                  treatment helps ensure the surgical approach aligns with your
                  family planning priorities
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Large and Complex Fibroid Surgery in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers surgical
                evaluation and treatment for fibroid cases of varying size and
                complexity in Moradabad.
              </p>

              <p className="mb-4 text-gray-700">
                According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her relevant surgical expertise includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic Myomectomy</strong>, described as a
                  uterus-preserving 3D laparoscopic surgery for uterine
                  fibroids, applicable to appropriately selected complex cases
                </li>
                <li>
                  <strong>High-Definition 3D Laparoscopic Surgery</strong>,
                  supporting precise technique even in more technically
                  demanding cases
                </li>
                <li>
                  <strong>Laparoscopic Hysterectomy</strong>, available as an
                  advanced, minimally invasive option when this approach is
                  medically appropriate for extensive fibroid involvement
                </li>
                <li>
                  <strong>Advanced diagnostic imaging</strong>, including a
                  Voluson E22 3D/4D ultrasound machine, supporting detailed
                  pre-surgical assessment and planning
                </li>
                <li>
                  <strong>A &quot;Her Health First&quot; approach</strong>,
                  ensuring that treatment decisions for complex fibroid cases
                  genuinely reflect the patient&apos;s fertility goals and
                  personal preferences, explained clearly before any surgical
                  decision is finalized
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently reflect feeling
                well-informed and supported throughout their treatment journey —
                particularly valuable for patients navigating the added
                complexity and decision-making involved in large fibroid cases.
                The clinic is located in Gandhi Nagar, Moradabad, making it
                accessible to patients across the city and surrounding areas
                seeking specialized fibroid care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Surgeon About Large Fibroid Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Based on the size and number of my fibroids, which surgical
                  approach do you recommend, and why?
                </li>
                <li>
                  What is the estimated risk of significant blood loss in my
                  specific case?
                </li>
                <li>
                  Is a laparoscopic approach possible, or is open surgery more
                  appropriate given my fibroid characteristics?
                </li>
                <li>
                  How will this surgery affect my ability to conceive in the
                  future, if that&apos;s a priority for me?
                </li>
                <li>
                  What does the expected recovery timeline look like for my
                  specific case?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Large Fibroid Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Given the added complexity of these cases, thorough preparation
                matters even more:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Complete all recommended pre-surgical imaging, including MRI
                  if advised, to give your surgeon the clearest possible picture
                  before the procedure
                </li>
                <li>
                  Address anemia beforehand if present, through iron
                  supplementation or other treatment as recommended by your
                  doctor
                </li>
                <li>
                  Discuss blood transfusion possibilities with your surgical
                  team, understanding this is a precaution for higher-risk cases
                  rather than an expected outcome
                </li>
                <li>
                  Ask detailed questions about the planned surgical approach,
                  including under what circumstances the plan might need to
                  change during surgery
                </li>
                <li>
                  Arrange for extended recovery support at home, since large
                  fibroid cases may involve a longer recovery period than
                  standard fibroid removal
                </li>
                <li>
                  Plan sufficient time off work, based on your surgeon&apos;s
                  guidance for your specific case
                </li>
                <li>
                  Bring a support person to your pre-surgical consultation,
                  since there&apos;s often a lot of information to absorb when
                  planning for a more complex procedure
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Living With Large Fibroids Before Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                For women awaiting surgery or still deciding on their treatment
                path, managing symptoms in the interim is often necessary:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Iron supplementation may be recommended if heavy bleeding has
                  led to anemia
                </li>
                <li>
                  Pain management strategies, as advised by your doctor, can
                  help manage discomfort while awaiting treatment
                </li>
                <li>
                  Menstrual tracking can help your doctor understand symptom
                  severity and any changes over time
                </li>
                <li>
                  Regular follow-up appointments allow monitoring of fibroid
                  growth and symptom progression
                </li>
                <li>
                  Open communication about worsening symptoms ensures your
                  treatment timeline can be adjusted if needed, rather than
                  waiting for a routine follow-up
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Large Fibroid Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Large fibroids always require a
                  hysterectomy.&quot;</strong> Many large fibroid cases can
                  still be treated with uterus-preserving myomectomy, depending
                  on individual factors.
                </li>
                <li>
                  <strong>&quot;Laparoscopic surgery is never possible for large
                  fibroids.&quot;</strong> Depending on the surgeon&apos;s
                  experience and specific case details, minimally invasive
                  approaches can sometimes still be used even for larger
                  fibroids.
                </li>
                <li>
                  <strong>&quot;Recovery is the same regardless of fibroid
                  size.&quot;</strong> Larger, more complex fibroid cases
                  generally involve longer surgical time and recovery compared
                  to smaller, straightforward cases.
                </li>
                <li>
                  <strong>&quot;Large fibroids always mean you can&apos;t have
                  children afterward.&quot;</strong> Many women successfully
                  conceive after large fibroid removal, particularly when
                  fertility-preserving techniques are used.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                To consult Dr. Priyanka Pachauri for large or complex fibroid
                evaluation in Moradabad, reach out through any of the following:
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
