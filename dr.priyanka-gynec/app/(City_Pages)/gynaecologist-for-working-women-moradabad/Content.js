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

export default function GynaecologistForWorkingWomen() {
  const faqs = [
    {
      q: "Can work-related stress really affect my menstrual cycle?",
      a: "Yes, chronic stress can disrupt hormonal signals that regulate ovulation and cycle regularity.",
    },
    {
      q: "Are evening or weekend appointments available for working women?",
      a: "Many practices offer flexible scheduling specifically to accommodate working professionals — it's worth asking directly when booking.",
    },
    {
      q: "Should I be concerned about frequent urinary tract infections from long work hours?",
      a: "Yes, recurrent infections related to infrequent breaks or dehydration should be evaluated and addressed with both treatment and practical prevention strategies.",
    },
    {
      q: "Is it too early to think about fertility if I'm not planning a family yet?",
      a: "No, understanding your fertility timeline early provides valuable information for future planning, regardless of your current timeline.",
    },
    {
      q: "Can PCOS be managed effectively with a demanding work schedule?",
      a: "Yes, with a realistic treatment plan that accounts for genuine time and lifestyle constraints, PCOS management is achievable alongside a busy career.",
    },
    {
      q: "How can I make the most of a limited-time gynaecologist appointment?",
      a: "Keeping a simple symptom or period tracker beforehand helps you communicate patterns efficiently during a time-limited consultation.",
    },
    {
      q: "Is fertility preservation a realistic option for career-focused women?",
      a: "Yes, it's an increasingly common and effective option for women choosing to delay childbearing for personal or professional reasons.",
    },
    {
      q: "What if I've been putting off my annual checkup due to work?",
      a: "It's worth booking it now rather than waiting — many conditions are far easier to manage when caught early through routine screening.",
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
                Gynaecologist for Working Women in Moradabad: Care That Fits a
                Busy Life
              </h1>

              <p className="mb-4 text-gray-700">
                For working women, gynaecological health often ends up at the
                bottom of a long to-do list. Between demanding work schedules,
                commutes, and the mental load of balancing career and personal
                life, a &quot;minor&quot; symptom gets pushed aside again and
                again — until it isn&apos;t minor anymore.
              </p>

              <p className="text-gray-700">
                This guide explains the health concerns particularly common
                among working women, why timely care matters, and what to look
                for in a gynaecologist who genuinely understands a busy
                professional life.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chronic work-related stress, irregular schedules, and
                  sedentary routines can directly affect menstrual regularity,
                  hormonal balance, and reproductive health
                </li>
                <li>
                  Many working women delay gynaecological care due to time
                  constraints, often allowing manageable issues to become more
                  complicated over time
                </li>
                <li>
                  Career-driven delays in family planning make fertility
                  awareness and timely evaluation particularly relevant for
                  working women
                </li>
                <li>
                  A gynaecologist who offers flexible scheduling, efficient
                  consultations, and clear communication removes a major barrier
                  to consistent care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Working Women Face Distinct Gynaecological Health Challenges
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Chronic stress affects hormonal balance directly.</strong>{" "}
                  Sustained work-related stress elevates cortisol levels, which
                  can disrupt the hormonal signals that regulate ovulation and
                  menstrual cycles, sometimes leading to irregular or missed
                  periods.
                </li>
                <li>
                  <strong>Long sedentary hours can affect pelvic and metabolic
                  health.</strong> Extended sitting, common in desk-based
                  professional roles, is linked to poorer circulation, weight
                  gain, and can compound symptoms in conditions like PCOS.
                </li>
                <li>
                  <strong>Irregular eating patterns disrupt metabolic and
                  hormonal stability.</strong> Skipped meals, inconsistent
                  timing, and reliance on convenient but less nutritious food
                  due to work demands can affect blood sugar stability and, over
                  time, hormonal balance.
                </li>
                <li>
                  <strong>Sleep disruption from demanding schedules affects
                  overall hormonal health.</strong> Irregular or insufficient
                  sleep, common with long hours or shift work, is linked to
                  worsened PMS symptoms, cycle irregularity, and increased
                  stress hormone levels.
                </li>
                <li>
                  <strong>Delayed family planning changes the fertility
                  conversation.</strong> Many working women prioritise career
                  milestones before starting a family, making fertility
                  awareness and timely evaluation more relevant at a stage when
                  it might otherwise be overlooked.
                </li>
                <li>
                  <strong>Limited time often means limited attention to
                  symptoms.</strong> Persistent but seemingly manageable
                  symptoms — mild pain, occasional spotting, fatigue — are
                  frequently deprioritised amid a packed schedule, sometimes
                  allowing an underlying condition to progress further before
                  evaluation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Gynaecological Concerns Among Working Women
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Stress-related menstrual irregularity.</strong> Cycles
                  that become unpredictable during periods of high work pressure
                  or major life changes are a frequently reported concern, often
                  resolving once stress and lifestyle factors are addressed
                  alongside any medical evaluation.
                </li>
                <li>
                  <strong>PCOS symptoms worsened by sedentary lifestyle.</strong>{" "}
                  For women with PCOS, long working hours with limited physical
                  activity can make symptom management more challenging,
                  requiring a treatment approach that accounts for these
                  realistic lifestyle constraints.
                </li>
                <li>
                  <strong>Urinary tract infections linked to limited
                  breaks.</strong> Infrequent bathroom breaks and inadequate
                  hydration during long work hours are a common, preventable
                  contributor to recurrent urinary tract infections in working
                  women.
                </li>
                <li>
                  <strong>Vaginal health issues related to prolonged
                  sitting.</strong> Extended periods of sitting, particularly in
                  warm or non-breathable clothing, can contribute to irritation
                  or minor infections that benefit from both treatment and
                  practical prevention guidance.
                </li>
                <li>
                  <strong>Delayed diagnosis of conditions like
                  endometriosis.</strong> Because period pain is often dismissed
                  as something to simply push through during a demanding
                  workday, conditions causing genuine pain can go undiagnosed
                  for longer among working women.
                </li>
                <li>
                  <strong>Fertility concerns tied to delayed family
                  planning.</strong> Many working women seek fertility
                  evaluation later than they might otherwise, making an
                  understanding of age-related fertility changes especially
                  relevant to this group.
                </li>
                <li>
                  <strong>Difficulty maintaining consistent preventive
                  care.</strong> Annual checkups and routine screenings are
                  frequently postponed due to work commitments, despite their
                  importance for early detection of various conditions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Timely Care Matters More Than It May Seem
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Delayed evaluation can allow manageable conditions to
                  progress.</strong> A hormonal imbalance or early-stage
                  condition that would respond well to prompt treatment can
                  become more complex to manage after prolonged delay.
                </li>
                <li>
                  <strong>Chronic stress-related symptoms compound over
                  time.</strong> The longer stress-related menstrual or hormonal
                  disruption goes unaddressed, the more layered and harder to
                  unpack the underlying pattern often becomes.
                </li>
                <li>
                  <strong>Fertility planning benefits significantly from early
                  awareness.</strong> Understanding your personal fertility
                  timeline while there is still time to act on that information,
                  whether through natural planning or fertility preservation, is
                  far more useful than learning this information later than
                  ideal.
                </li>
                <li>
                  <strong>Untreated infections can lead to more significant
                  complications.</strong> Recurrent urinary or vaginal
                  infections, if left unaddressed, can sometimes progress to
                  more serious conditions requiring more intensive treatment.
                </li>
                <li>
                  <strong>Preventive screenings catch issues before symptoms
                  even appear.</strong> Regular checkups, even when squeezed
                  into a busy schedule, provide protection against conditions
                  that often show no early warning signs.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Working Women Should Look for in a Gynaecologist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Flexible or extended appointment timing.</strong> A
                  gynaecologist offering evening or weekend appointment slots
                  removes one of the biggest practical barriers working women
                  face in accessing care.
                </li>
                <li>
                  <strong>Efficient, well-organised consultations.</strong> A
                  practice that respects your time, minimises unnecessary
                  waiting, and communicates clearly allows meaningful care
                  without requiring a full day off work.
                </li>
                <li>
                  <strong>A non-judgemental approach to lifestyle
                  realities.</strong> A good gynaecologist works with the
                  practical constraints of a demanding job — rather than
                  offering advice that assumes unlimited time and flexibility —
                  to build a realistic, sustainable treatment plan.
                </li>
                <li>
                  <strong>Comprehensive services under one roof.</strong> Being
                  able to address menstrual health, PCOS, fertility planning,
                  and preventive screening with the same trusted provider saves
                  significant time compared to navigating multiple separate
                  specialists.
                </li>
                <li>
                  <strong>Clear guidance on managing symptoms alongside a
                  demanding schedule.</strong> Practical advice that accounts
                  for real work constraints — rather than idealistic
                  recommendations that are difficult to follow — leads to better
                  long-term adherence and outcomes.
                </li>
                <li>
                  <strong>Access to fertility planning conversations without
                  pressure.</strong> Especially for women delaying family
                  planning for career reasons, a doctor who provides clear,
                  factual guidance without judgement supports better-informed
                  decisions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Practical Strategies for Managing Gynaecological Health at Work
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Schedule bathroom breaks deliberately.</strong>{" "}
                  Setting reminders to take regular breaks, particularly for
                  hydration and bathroom use, meaningfully reduces the risk of
                  urinary tract infections linked to prolonged holding.
                </li>
                <li>
                  <strong>Keep a simple period and symptom tracker.</strong> A
                  basic tracking habit, even just a phone note, makes it far
                  easier to identify patterns and provide useful information
                  during a time-limited consultation.
                </li>
                <li>
                  <strong>Prioritise consistent meal timing where
                  possible.</strong> Even small efforts toward regular eating
                  patterns can support better blood sugar and hormonal stability
                  amid a busy schedule.
                </li>
                <li>
                  <strong>Build in short movement breaks during long sitting
                  periods.</strong> Brief walks or stretching every couple of
                  hours can help offset some of the circulatory and metabolic
                  effects of prolonged desk work.
                </li>
                <li>
                  <strong>Address stress proactively, not just
                  reactively.</strong> Incorporating even brief stress-management
                  practices into a workday can meaningfully support hormonal
                  balance over time.
                </li>
                <li>
                  <strong>Book preventive checkups in advance, treating them as
                  non-negotiable.</strong> Scheduling annual checkups well ahead
                  of time, the same way you might schedule an important work
                  commitment, helps ensure they actually happen.
                </li>
                <li>
                  <strong>Don&apos;t wait for a &quot;quieter&quot; period at
                  work to address symptoms.</strong> Persistent symptoms rarely
                  resolve on their own, and waiting for an ideal time to seek
                  care often means an unnecessarily long delay.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fertility Planning Considerations for Career-Focused Women
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Understanding your personal fertility timeline early
                  is valuable.</strong> Age-related changes in egg quantity and
                  quality are relevant regardless of when you plan to start a
                  family, making early awareness genuinely useful.
                </li>
                <li>
                  <strong>Fertility preservation is a legitimate option worth
                  understanding.</strong> For women planning to delay
                  childbearing for career reasons, egg freezing offers a way to
                  preserve younger, higher-quality eggs while continuing to
                  focus on professional goals.
                </li>
                <li>
                  <strong>Regular menstrual health monitoring supports future
                  fertility awareness.</strong> Understanding your cycle patterns
                  now provides a useful baseline, whether or not you&apos;re
                  currently planning a pregnancy.
                </li>
                <li>
                  <strong>A fertility conversation doesn&apos;t require an
                  immediate decision.</strong> Simply understanding your options
                  and current fertility status allows for better-informed
                  planning later, without needing to commit to a specific
                  timeline immediately.
                </li>
                <li>
                  <strong>Balancing career and family planning is a legitimate,
                  common concern.</strong> A good gynaecologist approaches this
                  conversation practically and without judgement, supporting
                  whatever decision fits your individual circumstances.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Gynaecological Care for Working Women
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Irregular periods are just a
                  normal side effect of a stressful job.&quot;{" "}
                  <strong>Fact:</strong> While stress can affect cycles,
                  persistent irregularity still deserves evaluation rather than
                  being dismissed as an unavoidable part of a demanding career.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;There&apos;s no time to
                  prioritise preventive checkups with a busy schedule.&quot;{" "}
                  <strong>Fact:</strong> Many practices offer flexible timing
                  specifically to accommodate working women, making consistent
                  care more achievable than it might seem.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Fertility planning conversations
                  can wait until I&apos;m ready to actively try.&quot;{" "}
                  <strong>Fact:</strong> Understanding your fertility timeline
                  earlier gives you more options and better-informed decisions,
                  regardless of when you plan to conceive.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Minor symptoms aren&apos;t worth
                  taking time off work to address.&quot;{" "}
                  <strong>Fact:</strong> Persistent symptoms, even mild ones,
                  often indicate something worth evaluating before they
                  potentially become more significant.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;A gynaecologist won&apos;t
                  understand the constraints of a demanding job.&quot;{" "}
                  <strong>Fact:</strong> An experienced provider who regularly
                  sees working women builds practical, realistic treatment plans
                  that account for genuine time and lifestyle constraints.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist in
                Moradabad experienced in supporting working women through the
                specific health challenges that come with balancing demanding
                careers and personal wellbeing. Consultations are efficient,
                thorough, and free of judgement about lifestyle constraints,
                with practical, realistic guidance that fits into a genuinely
                busy life.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist (MBBS, MS)
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
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
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