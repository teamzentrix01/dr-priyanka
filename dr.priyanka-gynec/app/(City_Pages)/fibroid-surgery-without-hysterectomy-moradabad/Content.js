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

export default function FibroidSurgeryWithoutHysterectomy() {
  const faqs = [
    {
      q: "Can fibroids be treated without a hysterectomy?",
      a: "Yes, myomectomy is a uterus-preserving surgical option specifically designed to remove fibroids while keeping the uterus intact.",
    },
    {
      q: "Who offers myomectomy in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers laparoscopic myomectomy as part of her surgical services.",
    },
    {
      q: "Is laparoscopic myomectomy a major surgery?",
      a: "It's minimally invasive, with smaller incisions and generally faster recovery compared to traditional open surgery.",
    },
    {
      q: "Can I get pregnant after myomectomy?",
      a: "Yes, many women conceive successfully after myomectomy, and it's often chosen specifically for fertility preservation.",
    },
    {
      q: "How long is the recovery after laparoscopic myomectomy?",
      a: "Most women resume light activities within one to two weeks, with full recovery generally taking a few weeks.",
    },
    {
      q: "Can fibroids come back after myomectomy?",
      a: "New fibroids can occasionally develop over time, though this doesn't affect the success of the original surgery.",
    },
    {
      q: "How do I book a consultation for fibroid treatment?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Do all fibroids need surgery?",
      a: "No, small, symptom-free fibroids often just need monitoring rather than surgical removal.",
    },
    {
      q: "What's the difference between myomectomy and hysterectomy?",
      a: "Myomectomy removes only the fibroids and preserves the uterus, while hysterectomy removes the uterus entirely.",
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
                Fibroid Surgery Without Hysterectomy: Understanding Myomectomy
                as a Uterus-Preserving Option
              </h1>

              <p className="mb-4 text-gray-700">
                A diagnosis of uterine fibroids often brings an immediate worry
                for many women: does this mean I&apos;ll need a hysterectomy?
                The good news is that for a large number of women, the answer is
                no. Myomectomy — the surgical removal of fibroids while
                preserving the uterus — offers an effective treatment option for
                women who want relief from fibroid symptoms without losing their
                uterus, whether for fertility reasons or personal preference.
              </p>

              <p className="text-gray-700">
                In Moradabad, understanding this option and finding a surgeon
                skilled in uterus-preserving techniques can make a significant
                difference in how confidently a woman approaches fibroid
                treatment. This article explains what myomectomy involves,
                who&apos;s a good candidate, what to expect from the procedure
                and recovery, and why Dr. Priyanka Pachauri is a trusted choice
                for fibroid surgery without hysterectomy in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Uterine Fibroids
              </h2>

              <p className="mb-4 text-gray-700">
                Uterine fibroids are non-cancerous growths that develop in or
                around the uterus.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Extremely common, affecting a significant percentage of women
                  at some point during their reproductive years
                </li>
                <li>
                  Size and number vary widely, from small, symptom-free fibroids
                  to larger ones causing significant discomfort
                </li>
                <li>
                  Location matters for symptoms and treatment planning, whether
                  fibroids are within the uterine cavity, within the muscular
                  wall, or on the outer surface of the uterus
                </li>
                <li>
                  Not all fibroids require treatment, particularly small ones
                  that aren&apos;t causing symptoms
                </li>
                <li>
                  Growth can be influenced by hormonal factors, which is why
                  fibroids often shrink after menopause
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Fibroids
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy or prolonged menstrual bleeding</li>
                <li>
                  Pelvic pain or pressure, particularly with larger fibroids
                </li>
                <li>Frequent urination, if a fibroid presses on the bladder</li>
                <li>Constipation or bowel pressure, in some cases</li>
                <li>Pain during intercourse</li>
                <li>
                  A visibly enlarged or distended abdomen, with larger fibroids
                </li>
                <li>
                  Difficulty conceiving or complications during pregnancy, in
                  certain cases
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Myomectomy
              </h2>

              <p className="mb-4 text-gray-700">
                Myomectomy is a surgical procedure specifically designed to
                remove fibroids while leaving the uterus intact.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It&apos;s the standard uterus-preserving alternative to
                  hysterectomy for women with symptomatic fibroids
                </li>
                <li>
                  Can be performed using several different surgical approaches,
                  depending on the size, number, and location of the fibroids
                </li>
                <li>
                  Preserves fertility potential, making it the preferred option
                  for women who want to conceive in the future
                </li>
                <li>
                  Symptom relief is generally significant, addressing heavy
                  bleeding, pain, and pressure symptoms caused by the fibroids
                </li>
                <li>
                  New fibroids can occasionally develop later, since myomectomy
                  removes existing fibroids but doesn&apos;t necessarily prevent
                  new ones from forming over time
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Good Candidate for Myomectomy Instead of Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Women who want to preserve their fertility, whether currently
                  trying to conceive or planning to in the future
                </li>
                <li>
                  Women who want to keep their uterus for personal reasons, even
                  without immediate fertility plans
                </li>
                <li>
                  Women whose fibroids are causing significant symptoms but who
                  aren&apos;t good candidates for hysterectomy or prefer to
                  avoid it
                </li>
                <li>
                  Women with a manageable number and size of fibroids, suitable
                  for surgical removal without requiring removal of the uterus
                  itself
                </li>
                <li>
                  Women who understand that fibroids can occasionally recur and
                  are comfortable with the possibility of future monitoring or
                  treatment if needed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Myomectomy Procedures
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Laparoscopic Myomectomy
              </h3>
              <p className="mb-4 text-gray-700">
                Performed using minimally invasive keyhole surgery with small
                abdominal incisions. Generally associated with faster recovery,
                less pain, and reduced scarring compared to open surgery.
                Well-suited for fibroids of appropriate size and number, based
                on surgical assessment.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Hysteroscopic Myomectomy
              </h3>
              <p className="mb-4 text-gray-700">
                Used specifically for submucosal fibroids that grow into the
                uterine cavity. Performed through the vagina and cervix, with no
                external incisions required. Particularly relevant for fibroids
                affecting fertility or causing abnormal bleeding.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Open (Abdominal) Myomectomy
              </h3>
              <p className="mb-4 text-gray-700">
                Involves a larger abdominal incision, generally reserved for
                very large fibroids or complex cases not suitable for minimally
                invasive approaches. Involves a longer recovery period compared
                to laparoscopic or hysteroscopic techniques. Still preserves the
                uterus, despite requiring a more invasive surgical approach.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Laparoscopic Myomectomy Specifically
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Smaller incisions compared to traditional open surgery,
                  generally leading to less post-operative pain
                </li>
                <li>
                  Faster recovery time, allowing many women to return to normal
                  activities sooner
                </li>
                <li>
                  Reduced blood loss during the procedure compared to open
                  surgery
                </li>
                <li>
                  Lower risk of infection, associated with smaller incisions and
                  less tissue disruption
                </li>
                <li>
                  Minimal visible scarring, an important consideration for many
                  women
                </li>
                <li>
                  Shorter hospital stay, often requiring only a day or two
                  compared to longer stays associated with open surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Laparoscopic Myomectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Performed under general anesthesia</li>
                <li>
                  Small incisions are made in the abdomen, through which the
                  laparoscope and specialized surgical instruments are inserted
                </li>
                <li>
                  Fibroids are carefully identified, separated from surrounding
                  tissue, and removed
                </li>
                <li>
                  The uterine wall is then carefully repaired and sutured,
                  restoring its structural integrity
                </li>
                <li>
                  The procedure&apos;s duration varies depending on the size,
                  number, and location of the fibroids, generally ranging from
                  one to a few hours
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Myomectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recovery time depends on the surgical approach used, with
                  laparoscopic and hysteroscopic techniques generally allowing
                  faster recovery than open surgery
                </li>
                <li>
                  Mild to moderate discomfort in the days following surgery is
                  common and managed with appropriate pain relief
                </li>
                <li>
                  Most women resume light activities within one to two weeks
                  after laparoscopic myomectomy, with full recovery generally
                  taking a few weeks
                </li>
                <li>
                  A waiting period is generally recommended before attempting
                  conception, allowing the uterine wall to heal fully and reduce
                  the risk of complications in a future pregnancy
                </li>
                <li>
                  Follow-up appointments help confirm proper healing and discuss
                  any future fertility or family planning considerations
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myomectomy vs. Hysterectomy: Key Considerations
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fertility preservation</strong> — myomectomy keeps the
                  uterus intact, while hysterectomy permanently removes it
                </li>
                <li>
                  <strong>Symptom relief</strong> — both procedures effectively
                  address fibroid-related symptoms, though hysterectomy
                  eliminates the possibility of future fibroid recurrence
                  entirely
                </li>
                <li>
                  <strong>Recovery</strong> — recovery times can be comparable
                  depending on the specific surgical approach used for each
                  procedure
                </li>
                <li>
                  <strong>Future considerations</strong> — myomectomy allows for
                  future pregnancy, while hysterectomy is a permanent,
                  irreversible decision
                </li>
                <li>
                  <strong>Personal and emotional factors</strong> — some women
                  have strong personal preferences about preserving their uterus,
                  independent of fertility plans, which is a valid consideration
                  in this decision
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing an Experienced Myomectomy Surgeon Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fibroid removal requires careful surgical technique to
                  properly repair the uterine wall and minimize the risk of
                  future complications
                </li>
                <li>
                  Experienced surgeons can better assess which fibroids are
                  suitable for a minimally invasive approach, versus those that
                  may require open surgery
                </li>
                <li>
                  Skilled uterine repair reduces the risk of complications in
                  future pregnancies, an important consideration for women
                  planning to conceive
                </li>
                <li>
                  Experience with complex cases, such as multiple or
                  particularly large fibroids, contributes to better surgical
                  outcomes
                </li>
                <li>
                  Clear communication about realistic expectations, including
                  the possibility of fibroid recurrence, helps patients make
                  fully informed decisions
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Fibroid Surgery Without Hysterectomy in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers
                uterus-preserving fibroid treatment as part of her surgical
                practice in Moradabad.
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
                , her relevant services include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic Myomectomy</strong>, explicitly listed
                  among her specialized procedures, described as a
                  uterus-preserving 3D laparoscopic surgery for uterine fibroids
                </li>
                <li>
                  <strong>High-Definition 3D Laparoscopic Surgery</strong>,
                  supporting precise, minimally invasive technique for fibroid
                  removal and uterine repair
                </li>
                <li>
                  <strong>Fertility and IVF services</strong>, relevant for
                  women planning pregnancy after fibroid removal
                </li>
                <li>
                  <strong>A &quot;Her Health First&quot; approach</strong>,
                  ensuring treatment decisions genuinely reflect the
                  patient&apos;s priorities, whether that&apos;s fertility
                  preservation, symptom relief, or personal preference
                </li>
                <li>
                  <strong>Advanced diagnostic imaging</strong>, including a
                  Voluson E22 3D/4D ultrasound machine, supporting accurate
                  assessment of fibroid size, number, and location before
                  surgical planning
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently describe
                feeling well-informed and supported throughout their treatment —
                particularly important when weighing a decision as significant
                as fibroid surgery and its impact on future fertility. The
                clinic is located in Gandhi Nagar, Moradabad, making it
                accessible to women from across the city and surrounding areas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor About Myomectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Am I a good candidate for laparoscopic myomectomy, or would
                  another surgical approach be more suitable?
                </li>
                <li>
                  How many fibroids do I have, and what are their size and
                  location?
                </li>
                <li>
                  What does the recovery process typically involve, and when can
                  I resume normal activities?
                </li>
                <li>
                  How soon after surgery can I try to conceive, if that&apos;s
                  my goal?
                </li>
                <li>
                  What&apos;s the likelihood of fibroids recurring after
                  myomectomy?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Myomectomy Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Preparation can help the process feel more manageable and support
                a smoother recovery:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Discuss your full fibroid history with your doctor, including
                  symptoms, previous imaging, and any prior treatments tried
                </li>
                <li>
                  Ask specifically which surgical approach is recommended for
                  your case, and why, based on your fibroid size, number, and
                  location
                </li>
                <li>
                  Follow pre-operative fasting and medication instructions
                  provided by your surgical team
                </li>
                <li>
                  Arrange support at home for the initial recovery period,
                  particularly important if you have other responsibilities like
                  young children
                </li>
                <li>
                  Plan time off work based on the expected recovery timeline for
                  your specific surgical approach
                </li>
                <li>
                  Prepare questions about future fertility timing, if conceiving
                  afterward is part of your plan
                </li>
                <li>
                  Ask about any activity restrictions during recovery, including
                  guidance on lifting, exercise, and returning to normal routines
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Aspects of Choosing Myomectomy Over Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many women feel relief at having an option to preserve their
                  uterus, particularly if fertility or personal identity
                  considerations are important to them
                </li>
                <li>
                  It&apos;s normal to feel some anxiety about the possibility of
                  fibroid recurrence, even when choosing myomectomy for its
                  benefits
                </li>
                <li>
                  Having a clear, honest conversation with your doctor about
                  realistic expectations can help ease this uncertainty
                </li>
                <li>
                  The decision between myomectomy and hysterectomy is deeply
                  personal, and there&apos;s no universally &quot;right&quot;
                  choice — what matters is what aligns with your own priorities
                  and circumstances
                </li>
                <li>
                  Feeling supported in this decision-making process, rather than
                  pressured toward one option, contributes significantly to
                  overall satisfaction with your treatment path
                </li>
                <li>
                  Give yourself permission to ask as many questions as you need
                  before feeling confident in your chosen path forward
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Fibroid Surgery Without Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Fibroids always mean you&apos;ll eventually need
                  a hysterectomy.&quot;</strong> Many women successfully treat
                  fibroids with myomectomy, preserving their uterus entirely.
                </li>
                <li>
                  <strong>&quot;Myomectomy always requires major open
                  surgery.&quot;</strong> Laparoscopic and hysteroscopic
                  myomectomy are widely available minimally invasive options for
                  many cases.
                </li>
                <li>
                  <strong>&quot;You can&apos;t get pregnant after
                  myomectomy.&quot;</strong> Many women conceive successfully
                  after myomectomy, and the procedure is specifically chosen by
                  many women planning future pregnancies.
                </li>
                <li>
                  <strong>&quot;Fibroids removed once will never come
                  back.&quot;</strong> New fibroids can occasionally develop
                  over time, though this doesn&apos;t mean the original surgery
                  wasn&apos;t successful or worthwhile.
                </li>
                <li>
                  <strong>&quot;All fibroids need to be surgically
                  removed.&quot;</strong> Small, symptom-free fibroids often
                  don&apos;t require treatment and can simply be monitored.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
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