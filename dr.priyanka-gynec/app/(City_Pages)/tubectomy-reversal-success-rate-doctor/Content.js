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

export default function TubectomyReversalSuccessRate() {
  const faqs = [
    {
      q: "What is the success rate of tubectomy reversal?",
      a: "Surgical reconnection succeeds in about 85–95% of cases, while pregnancy rates afterward range roughly from 40–85% depending on individual factors.",
    },
    {
      q: "Does age affect tubectomy reversal success?",
      a: "Yes, women under 35 generally have significantly higher pregnancy success rates than older women.",
    },
    {
      q: "How long after tubectomy reversal can I try to conceive?",
      a: "Doctors typically advise waiting about 6 weeks for full healing before actively trying to conceive.",
    },
    {
      q: "Is tubectomy reversal better than IVF?",
      a: "It depends on individual factors like age, remaining tube length, and fertility goals — your doctor can help you compare both options.",
    },
    {
      q: "What increases the risk of ectopic pregnancy after reversal?",
      a: "The reconnected tube can occasionally cause the embryo to implant outside the uterus, so early pregnancy monitoring is important.",
    },
    {
      q: "Which sterilization method has better reversal outcomes?",
      a: "Clip or ring-based sterilization generally reverses more successfully than cauterization-based methods, which remove more tube tissue.",
    },
    {
      q: "Is tubectomy reversal a major surgery?",
      a: "It is typically performed under general anaesthesia as microsurgery, requiring a short hospital stay and a few weeks of recovery.",
    },
    {
      q: "Can both fallopian tubes be reversed at the same time?",
      a: "Yes, in most cases, both tubes are evaluated and reconnected during the same surgical procedure if both are suitable candidates.",
    },
    {
      q: "What tests are done before recommending tubectomy reversal?",
      a: "Tests typically include pelvic ultrasound, ovarian reserve blood tests, and semen analysis for the partner.",
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
                Tubectomy Reversal Success Rate: Complete Doctor&apos;s Guide
              </h1>

              <p className="mb-4 text-gray-700">
                For women who underwent tubectomy (tubal ligation) as permanent
                contraception and now wish to conceive again, the most important
                question is usually: &quot;What is the actual success rate of
                tubectomy reversal?&quot; This detailed guide explains what
                tubectomy reversal involves, the real factors that determine
                success, and what to expect from consultation to pregnancy —
                with expert guidance from Dr. Priyanka Pachauri, a gynaecologist
                and fertility specialist in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Tubectomy (Tubal Ligation)?
              </h2>

              <p className="mb-4 text-gray-700">
                Tubectomy is a permanent sterilization procedure in which the
                fallopian tubes are cut, tied, clipped, or sealed to prevent
                eggs from meeting sperm.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Commonly performed as laparoscopic sterilization, a day-care
                  procedure
                </li>
                <li>
                  Considered a permanent method of contraception at the time of
                  the procedure
                </li>
                <li>
                  Prevents the egg released from the ovary from travelling
                  through the tube to meet sperm
                </li>
                <li>
                  Widely used and highly effective for preventing future
                  pregnancy
                </li>
                <li>
                  Some women later experience a change in circumstances and wish
                  to conceive again
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Tubectomy Reversal?
              </h2>

              <p className="mb-4 text-gray-700">
                Tubectomy reversal, also called tubal reanastomosis or tubal
                recanalization, is a surgical procedure that reconnects the
                separated or blocked segments of the fallopian tubes.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aims to restore the natural pathway for the egg and sperm to
                  meet
                </li>
                <li>
                  Involves carefully rejoining the healthy tube segments under
                  magnification
                </li>
                <li>
                  Usually performed as microsurgery, using very fine sutures and
                  precise technique
                </li>
                <li>
                  Can be done through open surgery (mini-laparotomy) or, in
                  select cases, laparoscopically
                </li>
                <li>
                  Success depends heavily on the original sterilization method
                  and remaining healthy tube length
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Do Women Consider Tubectomy Reversal?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Remarriage or a new partner with a desire for children
                </li>
                <li>
                  Loss of a child, prompting a wish to have another
                </li>
                <li>
                  Change in family circumstances or financial stability
                </li>
                <li>
                  A change of heart after completing sterilization at a younger
                  age
                </li>
                <li>
                  Improved health conditions that now make pregnancy medically
                  safer
                </li>
                <li>
                  Personal or emotional readiness to expand the family after
                  tubectomy
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tubectomy Reversal Success Rate: What the Numbers Really Mean
              </h2>

              <p className="mb-4 text-gray-700">
                Tubectomy reversal success is generally measured in two ways —
                surgical success (tubes reconnected and open) and pregnancy
                success (achieving conception afterward). These are not the same
                thing, and understanding the difference is important:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Surgical (anatomical) success rate:</strong> Often
                  85–95% in experienced hands, meaning the tubes are successfully
                  reconnected and confirmed open
                </li>
                <li>
                  <strong>Pregnancy success rate:</strong> Generally ranges from
                  40–85%, varying widely based on individual factors
                </li>
                <li>
                  Younger women with longer remaining healthy tube segments tend
                  to have higher pregnancy rates
                </li>
                <li>
                  Success rates decline notably after age 35–40 due to natural
                  fertility decline, independent of the surgery itself
                </li>
                <li>
                  Most successful pregnancies after reversal occur within the
                  first 1–2 years following surgery
                </li>
                <li>
                  Reversal success is highest when the original sterilization
                  used clips or rings, rather than cauterization (burning),
                  which damages more tube length
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Important: These are general ranges seen in clinical literature;
                your personal success rate depends on your specific anatomy,
                age, and health, which can only be properly assessed after
                examination and testing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Factors That Affect Tubectomy Reversal Success
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Age at the Time of Reversal
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Women under 35 generally have significantly higher success
                  rates
                </li>
                <li>
                  Fertility naturally declines with age, independent of tube
                  repair success
                </li>
                <li>
                  Age is one of the single most important predictors of pregnancy
                  outcome
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Original Sterilization Method
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clip or ring-based sterilization removes less tube length and
                  reverses more successfully
                </li>
                <li>
                  Cauterization (burning) methods destroy more tube tissue,
                  lowering reversal success
                </li>
                <li>
                  Your original surgical records help the surgeon estimate
                  expected outcomes
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Remaining Tube Length After Reversal
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Longer healthy tube segments after reconnection improve egg
                  transport
                </li>
                <li>
                  Very short remaining tube length can reduce the chances of
                  natural conception
                </li>
                <li>
                  This is assessed carefully during pre-surgical evaluation and
                  confirmed during surgery
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Overall Reproductive Health
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Healthy ovarian reserve improves the chances of conception
                  after reversal
                </li>
                <li>
                  Absence of other fertility issues, such as endometriosis or
                  uterine conditions, supports better outcomes
                </li>
                <li>
                  Partner&apos;s sperm health also plays an equally important
                  role in achieving pregnancy
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Surgeon&apos;s Skill and Technique
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Microsurgical precision in rejoining the tubes significantly
                  affects tube function afterward
                </li>
                <li>
                  Meticulous, layered suturing reduces scarring and supports
                  normal tube movement
                </li>
                <li>
                  Experience with tubal reversal specifically, not just general
                  gynaecological surgery, matters greatly
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pre-Surgery Evaluation for Tubectomy Reversal
              </h2>

              <p className="mb-4 text-gray-700">
                Before recommending reversal, a thorough evaluation is essential
                to set realistic expectations:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed history of the original sterilization method and any
                  complications
                </li>
                <li>
                  Pelvic ultrasound to assess the uterus, ovaries, and general
                  reproductive health
                </li>
                <li>
                  Assessment of ovarian reserve through hormonal blood tests,
                  especially in women above 30–35
                </li>
                <li>
                  Evaluation of remaining tube length through imaging or
                  diagnostic laparoscopy, when required
                </li>
                <li>
                  Semen analysis for the partner to rule out male-factor
                  infertility
                </li>
                <li>
                  Open discussion of age-related success rates and realistic
                  timelines for conception
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tubectomy Reversal vs IVF: Which Is Better?
              </h2>

              <p className="mb-4 text-gray-700">
                This is one of the most common questions doctors are asked, and
                the answer depends on individual circumstances:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tubectomy reversal may be more suitable for younger women with
                  good remaining tube length who want the possibility of
                  multiple future pregnancies
                </li>
                <li>
                  IVF may be recommended for women with very short remaining
                  tube segments, advanced age, or additional fertility factors
                </li>
                <li>
                  Reversal is typically a one-time surgical cost, while IVF may
                  involve repeated cycles depending on response
                </li>
                <li>
                  IVF bypasses the fallopian tubes entirely, which can be an
                  advantage when tube damage is extensive
                </li>
                <li>
                  A combined discussion with your gynaecologist helps weigh
                  success rates, cost, and personal preference before deciding
                </li>
                <li>
                  Some women pursue reversal first and consider IVF later if
                  natural conception does not occur within a reasonable time
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Tubectomy Reversal Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed under general anaesthesia in a hospital operating
                  room
                </li>
                <li>
                  A small abdominal incision (mini-laparotomy) or laparoscopic
                  approach is used, depending on the case
                </li>
                <li>
                  The blocked or tied tube segments are carefully identified
                </li>
                <li>
                  Damaged or scarred tissue is trimmed away
                </li>
                <li>
                  The healthy tube ends are rejoined using fine microsurgical
                  sutures under magnification
                </li>
                <li>
                  Dye testing may be performed during surgery to confirm the tube
                  is open and functioning
                </li>
                <li>
                  The incision is closed, and the patient is monitored in
                  recovery before discharge
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Tubectomy Reversal
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Day 1–3:</strong> Hospital stay for monitoring, pain
                  management, and initial recovery
                </li>
                <li>
                  <strong>Week 1:</strong> Mild soreness and fatigue; light rest
                  with short walks encouraged
                </li>
                <li>
                  <strong>Week 2–3:</strong> Gradual return to light daily
                  activities
                </li>
                <li>
                  <strong>Week 4–6:</strong> Return to normal routine and
                  non-strenuous work
                </li>
                <li>
                  <strong>6 Weeks Onward:</strong> Most doctors advise waiting
                  until this point before actively trying to conceive
                </li>
                <li>
                  Full internal healing typically completes within 6–8 weeks
                  after surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Improve Chances of Conception After Reversal
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Begin trying to conceive only after your doctor confirms full
                  healing
                </li>
                <li>
                  Track ovulation to time intercourse around your most fertile
                  days
                </li>
                <li>
                  Maintain a healthy weight, as both underweight and overweight
                  status can affect fertility
                </li>
                <li>
                  Eat a balanced, nutrient-rich diet and take prescribed
                  supplements like folic acid
                </li>
                <li>
                  Avoid smoking and limit alcohol and caffeine while trying to
                  conceive
                </li>
                <li>
                  Manage stress through rest, gentle exercise, and adequate
                  sleep
                </li>
                <li>
                  Attend follow-up appointments and imaging if advised to
                  confirm tube patency
                </li>
                <li>
                  If conception does not occur within 6–12 months, discuss
                  further fertility evaluation or treatment options with your
                  doctor
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Aspects of Choosing Tubectomy Reversal
              </h2>

              <p className="mb-4 text-gray-700">
                Deciding to pursue reversal is often as emotional as it is
                medical, and this deserves acknowledgment:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It is common to feel a mix of hope and anxiety when
                  considering reversal after years of assuming sterilization was
                  permanent
                </li>
                <li>
                  Partner support and shared understanding of realistic timelines
                  can ease stress during the process
                </li>
                <li>
                  Setting expectations around possible outcomes, including the
                  chance that reversal alone may not lead to pregnancy, helps
                  avoid added disappointment
                </li>
                <li>
                  Many women find comfort in having a clear, honest medical
                  roadmap rather than uncertainty
                </li>
                <li>
                  Support from a compassionate doctor throughout consultation,
                  surgery, and the trying-to-conceive period makes a meaningful
                  difference
                </li>
                <li>
                  Whatever the outcome, being informed and supported at every
                  stage helps patients feel more in control of their journey
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks and Considerations to Discuss With Your Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Risk of ectopic (tubal) pregnancy is slightly higher after
                  tubal reversal and requires early pregnancy monitoring
                </li>
                <li>
                  Possible bleeding, infection, or anaesthesia-related risks
                  common to any pelvic surgery
                </li>
                <li>
                  Chance that one or both tubes may not successfully reopen
                  despite surgery
                </li>
                <li>
                  Realistic discussion of age-related fertility decline alongside
                  surgical success rates
                </li>
                <li>
                  Importance of choosing a surgeon experienced specifically in
                  microsurgical tubal reversal
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Tubectomy Reversal
                Consultation in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced Obstetrician,
                Gynaecologist & IVF Specialist in Moradabad, offering thorough,
                honest guidance for women considering fertility restoration after
                sterilization.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  MS (O&G), FMAS, Advanced Infertility Fellowship
                </li>
                <li>
                  Co-leads Shree Advanced Urogynae Clinic, Moradabad
                </li>
                <li>
                  Consultant at Ujala Cygnus BrightStar Hospital
                </li>
                <li>
                  Comprehensive fertility evaluation, including ovarian reserve
                  testing and tube assessment
                </li>
                <li>
                  Skilled in laparoscopic gynaecological and fertility-focused
                  surgery
                </li>
                <li>
                  Provides honest, realistic guidance comparing reversal surgery
                  and IVF based on individual factors
                </li>
                <li>
                  Known for combining technical expertise with compassionate,
                  judgement-free counselling
                </li>
                <li>
                  Trusted by women across Moradabad and nearby Uttar Pradesh for
                  fertility and reproductive health care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri for Tubectomy Reversal Consultation
                in Moradabad
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