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

export default function HysterectomyForHeavyBleeding() {
  const faqs = [
    {
      q: "When is hysterectomy considered for heavy bleeding?",
      a: "Generally when heavy bleeding significantly affects quality of life and hasn't responded to less invasive treatments, and future fertility isn't a priority.",
    },
    {
      q: "Who offers hysterectomy for heavy bleeding in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers laparoscopic hysterectomy as part of her surgical services.",
    },
    {
      q: "Are there alternatives to hysterectomy for heavy bleeding?",
      a: "Yes, including hormonal medications, endometrial ablation, myomectomy, and hysteroscopic treatment of polyps, depending on the cause.",
    },
    {
      q: "Is laparoscopic hysterectomy a major surgery?",
      a: "It's minimally invasive, with smaller incisions and generally faster recovery compared to traditional open surgery.",
    },
    {
      q: "Does hysterectomy always cause immediate menopause?",
      a: "No, if the ovaries are preserved, natural hormone production typically continues.",
    },
    {
      q: "How long is recovery after laparoscopic hysterectomy?",
      a: "Most women resume light activities within two to four weeks, with full recovery generally taking about six weeks.",
    },
    {
      q: "Is hysterectomy a reversible procedure?",
      a: "No, it's permanent, meaning future pregnancy is no longer possible afterward.",
    },
    {
      q: "What causes heavy menstrual bleeding?",
      a: "Common causes include fibroids, adenomyosis, polyps, and hormonal imbalance, though sometimes no specific cause is identified.",
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
                Hysterectomy for Heavy Bleeding: When It&apos;s Considered and
                What to Expect
              </h1>

              <p className="mb-4 text-gray-700">
                For women dealing with persistent, disruptive heavy menstrual
                bleeding — medically known as menorrhagia — that hasn&apos;t
                responded to other treatments, hysterectomy can offer definitive
                relief. While it&apos;s a significant decision that shouldn&apos;t
                be made lightly, it remains one of the most effective, permanent
                solutions for chronic heavy bleeding that&apos;s affecting a
                woman&apos;s quality of life. Understanding when hysterectomy is
                genuinely necessary, what alternatives exist, and what the
                procedure and recovery actually involve can help women approach
                this decision with clarity and confidence. This article explains
                the role of hysterectomy in treating heavy bleeding, the
                decision-making process, and why Dr. Priyanka Pachauri offers
                experienced, minimally invasive surgical care for this condition
                in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Heavy Menstrual Bleeding (Menorrhagia)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Defined as menstrual bleeding that&apos;s significantly
                  heavier or longer-lasting than typical, often requiring
                  frequent pad or tampon changes, including through the night.
                </li>
                <li>
                  Can lead to iron-deficiency anemia if it continues over an
                  extended period without treatment.
                </li>
                <li>
                  Significantly affects quality of life, often limiting daily
                  activities, work, and social engagements during menstruation.
                </li>
                <li>
                  Has many possible underlying causes, including fibroids,
                  adenomyosis, polyps, hormonal imbalance, or, in some cases, no
                  clearly identifiable cause.
                </li>
                <li>
                  Not something that should simply be tolerated, despite how
                  normalized heavy periods sometimes become for women who&apos;ve
                  dealt with them for years.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Hysterectomy Becomes a Consideration
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  When heavy bleeding significantly impacts daily life and
                  hasn&apos;t responded to medical management or less invasive
                  surgical options.
                </li>
                <li>
                  When a woman has completed her family and isn&apos;t seeking
                  to preserve fertility, making a more definitive surgical
                  solution a reasonable option.
                </li>
                <li>
                  When underlying conditions like large fibroids or adenomyosis
                  are directly responsible for the heavy bleeding and
                  aren&apos;t well-suited to more conservative treatment.
                </li>
                <li>
                  When less invasive treatments have already been tried without
                  adequate relief, such as hormonal medications, endometrial
                  ablation, or myomectomy.
                </li>
                <li>
                  When a woman, after thorough counseling, decides that a
                  permanent solution aligns best with her personal priorities
                  and quality of life goals.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Alternatives to Consider Before Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hormonal medications</strong>, including birth control
                  pills or hormonal IUDs, which can significantly reduce
                  bleeding for many women.
                </li>
                <li>
                  <strong>Tranexamic acid or other non-hormonal
                  medications</strong>, used specifically during periods to
                  reduce blood loss.
                </li>
                <li>
                  <strong>Endometrial ablation</strong>, a procedure that
                  removes or destroys the uterine lining to reduce bleeding,
                  though it&apos;s not suitable for women who still want to
                  conceive.
                </li>
                <li>
                  <strong>Myomectomy</strong>, if fibroids are the specific
                  cause and uterus preservation is a priority.
                </li>
                <li>
                  <strong>Hysteroscopic treatment of polyps</strong>, if polyps
                  are identified as a contributing factor to heavy bleeding.
                </li>
                <li>
                  <strong>A thorough discussion with your doctor</strong> about
                  each option&apos;s suitability for your specific situation,
                  symptoms, and future family planning goals.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Hysterectomy Procedures
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Laparoscopic Hysterectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed using minimally invasive keyhole surgery with small
                  abdominal incisions.
                </li>
                <li>
                  Generally associated with faster recovery, less pain, and
                  reduced scarring compared to traditional open surgery.
                </li>
                <li>
                  Increasingly the preferred approach for suitable candidates,
                  given its advantages over open surgery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Vaginal Hysterectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed entirely through the vagina, without external
                  abdominal incisions.
                </li>
                <li>
                  Often suitable for certain cases, particularly when
                  there&apos;s no need to address other pelvic conditions
                  simultaneously.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Abdominal (Open) Hysterectomy
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Involves a larger abdominal incision, generally reserved for
                  more complex cases, very large fibroids, or situations not
                  suitable for minimally invasive approaches.
                </li>
                <li>
                  Involves a longer recovery period compared to laparoscopic or
                  vaginal techniques.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Hysterectomy by Extent
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Total hysterectomy</strong> removes the entire uterus,
                  including the cervix.
                </li>
                <li>
                  <strong>Subtotal (partial) hysterectomy</strong> removes the
                  uterus while leaving the cervix in place.
                </li>
                <li>
                  <strong>Hysterectomy with or without removal of the ovaries
                  and fallopian tubes</strong>, which is a separate decision
                  made based on individual factors, including age and other
                  health considerations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Laparoscopic Hysterectomy Specifically
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Smaller incisions</strong> compared to open surgery,
                  generally leading to less post-operative pain.
                </li>
                <li>
                  <strong>Faster recovery time</strong>, allowing many women to
                  return to normal activities sooner.
                </li>
                <li>
                  <strong>Reduced blood loss</strong> during the procedure
                  compared to open surgery.
                </li>
                <li>
                  <strong>Lower risk of infection</strong>, associated with
                  smaller incisions and less tissue disruption.
                </li>
                <li>
                  <strong>Shorter hospital stay</strong>, often requiring just a
                  day or two compared to longer stays with open surgery.
                </li>
                <li>
                  <strong>Minimal visible scarring</strong>, an important
                  consideration for many women.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recovery time depends on the surgical approach used, with
                  laparoscopic and vaginal techniques generally allowing faster
                  recovery than open surgery.
                </li>
                <li>
                  Mild to moderate discomfort in the days following surgery is
                  common and managed with appropriate pain relief.
                </li>
                <li>
                  Most women resume light activities within two to four weeks
                  after laparoscopic hysterectomy, with full recovery generally
                  taking around six weeks.
                </li>
                <li>
                  Menstrual periods stop permanently after hysterectomy, since
                  the uterus, where menstrual bleeding originates, has been
                  removed.
                </li>
                <li>
                  If the ovaries are preserved, natural hormone production
                  generally continues, meaning menopause isn&apos;t immediately
                  triggered by the surgery itself.
                </li>
                <li>
                  Follow-up appointments help confirm proper healing and address
                  any questions about post-surgical changes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Important Considerations Before Choosing Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It&apos;s a permanent, irreversible decision, meaning future
                  pregnancy is no longer possible after the uterus is removed.
                </li>
                <li>
                  Emotional considerations matter, and it&apos;s normal to have
                  complex feelings about this decision, even when it&apos;s
                  medically the right choice.
                </li>
                <li>
                  If ovaries are removed along with the uterus, this can trigger
                  surgical menopause, which comes with its own set of symptoms
                  and considerations to discuss with your doctor.
                </li>
                <li>
                  Recovery, while generally quicker with minimally invasive
                  techniques, still requires adequate rest and follow-up care.
                </li>
                <li>
                  A thorough, honest conversation with your doctor about all
                  available options helps ensure hysterectomy is genuinely the
                  right choice for your specific situation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing an Experienced Surgeon Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgical skill directly affects safety and recovery outcomes,
                  particularly for more complex cases involving large fibroids
                  or extensive adenomyosis.
                </li>
                <li>
                  An experienced surgeon can better determine which surgical
                  approach — laparoscopic, vaginal, or abdominal — is most
                  appropriate for your specific case.
                </li>
                <li>
                  Careful surgical technique reduces the risk of complications,
                  including bleeding, infection, or injury to surrounding
                  structures.
                </li>
                <li>
                  Clear counseling about all available options, not just
                  hysterectomy, ensures patients make a fully informed decision.
                </li>
                <li>
                  Coordinated post-operative care supports a smoother recovery
                  and addresses any questions or concerns that arise afterward.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Hysterectomy for Heavy Bleeding in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers surgical
                treatment for heavy menstrual bleeding, including hysterectomy
                when medically appropriate, as part of her comprehensive
                gynaecological practice in Moradabad. According to her official
                website, (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), her relevant services include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic Hysterectomy</strong>, explicitly listed
                  among her specialized procedures, described as an advanced
                  minimally invasive keyhole procedure with fast recovery.
                </li>
                <li>
                  <strong>Laparoscopic Myomectomy</strong>, offered as a
                  uterus-preserving alternative for women whose heavy bleeding
                  is caused by fibroids and who want to retain fertility.
                </li>
                <li>
                  <strong>Diagnostic and Therapeutic Hysteroscopy</strong>,
                  useful for evaluating and treating heavy bleeding caused by
                  uterine polyps.
                </li>
                <li>
                  <strong>High-Definition 3D Laparoscopic Surgery</strong>,
                  supporting precise, minimally invasive technique across a
                  range of gynaecological procedures.
                </li>
                <li>
                  <strong>A &quot;Her Health First&quot; approach</strong>,
                  ensuring all treatment options — not just hysterectomy — are
                  discussed clearly, so patients can make a fully informed
                  decision about their care.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently reflect feeling
                well-informed and supported throughout their treatment journey —
                particularly important when weighing a decision as significant
                as hysterectomy for heavy bleeding. The clinic is located in
                Gandhi Nagar, Moradabad, making it accessible to women from
                across the city and surrounding areas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor Before Considering Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What is the specific cause of my heavy bleeding, and have all
                  appropriate less invasive treatments been considered?
                </li>
                <li>
                  Am I a candidate for laparoscopic hysterectomy, or would
                  another surgical approach be more suitable?
                </li>
                <li>
                  What are the implications of keeping versus removing my
                  ovaries during this procedure?
                </li>
                <li>
                  What does the recovery process typically involve, and when
                  can I resume normal activities?
                </li>
                <li>
                  How will this decision affect my hormonal health and any
                  related symptoms going forward?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Hysterectomy Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Discuss your full symptom history and previously tried
                  treatments with your doctor, ensuring hysterectomy is
                  genuinely the right next step.
                </li>
                <li>
                  Ask detailed questions about the specific surgical approach
                  recommended for your case, and why.
                </li>
                <li>
                  Follow pre-operative fasting and medication instructions
                  provided by your surgical team.
                </li>
                <li>
                  Arrange for someone to accompany you home and support you
                  during the initial recovery period.
                </li>
                <li>
                  Plan adequate time off work, based on your surgeon&apos;s
                  guidance for your specific surgical approach.
                </li>
                <li>
                  Prepare questions about hormonal changes, particularly if
                  ovary removal is part of the planned procedure.
                </li>
                <li>
                  Consider discussing your decision with a trusted family member
                  or counselor, given the emotional significance of this choice.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Aspects of Choosing Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It&apos;s completely normal to have mixed feelings about this
                  decision, even when it&apos;s clearly the right medical choice
                  for relieving your symptoms.
                </li>
                <li>
                  Many women feel significant relief once heavy bleeding is
                  finally resolved, having often endured years of disruptive
                  symptoms beforehand.
                </li>
                <li>
                  Some women experience complex feelings about the permanence of
                  the decision, particularly regarding fertility, even if they
                  weren&apos;t planning future pregnancies.
                </li>
                <li>
                  Open communication with your doctor about these feelings is a
                  normal and valued part of the decision-making process, not
                  something to feel embarrassed about.
                </li>
                <li>
                  Support from family, friends, or a counselor can be valuable
                  both before and after the procedure.
                </li>
                <li>
                  Give yourself permission to feel however you feel about this
                  significant life decision, without judgment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Hysterectomy for Heavy Bleeding
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Hysterectomy is always the first treatment
                  option for heavy bleeding.&quot;</strong> It&apos;s generally
                  considered after less invasive options have been tried or
                  aren&apos;t suitable, not as a first-line treatment.
                </li>
                <li>
                  <strong>&quot;Hysterectomy always triggers immediate
                  menopause.&quot;</strong> If the ovaries are preserved,
                  natural hormone production typically continues, and menopause
                  isn&apos;t immediately triggered by the surgery itself.
                </li>
                <li>
                  <strong>&quot;Recovery from hysterectomy always takes many
                  weeks in the hospital.&quot;</strong> With laparoscopic
                  techniques, many women recover much faster, often going home
                  within a day or two.
                </li>
                <li>
                  <strong>&quot;Hysterectomy is a major surgery that should
                  always be avoided if possible.&quot;</strong> While it&apos;s
                  a significant, permanent decision, for the right candidates,
                  it can offer meaningful and lasting relief from debilitating
                  symptoms.
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
