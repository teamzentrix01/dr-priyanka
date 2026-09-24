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

export default function HysterectomyAgeLimit() {
  const faqs = [
    {
      q: "Is there an official age limit for hysterectomy?",
      a: "No, there's no fixed age limit — the decision is based on medical necessity, overall health, and individual circumstances.",
    },
    {
      q: "Can a woman in her 20s or 30s have a hysterectomy?",
      a: "Yes, if medically necessary, though fertility-preserving alternatives are generally tried first at this age.",
    },
    {
      q: "Is hysterectomy safe for women in their 60s or 70s?",
      a: "Yes, it's generally safe for appropriately evaluated patients, with overall health being more important than age itself.",
    },
    {
      q: "What age is most common for hysterectomy?",
      a: "Hysterectomy is most commonly performed in women in their 40s and 50s, often for fibroids or heavy bleeding.",
    },
    {
      q: "Should ovaries be removed based on age?",
      a: "This is an individualised decision — younger women are usually advised to preserve ovaries where medically safe.",
    },
    {
      q: "Does age affect recovery time after hysterectomy?",
      a: "Recovery may be slightly slower in older patients, but laparoscopic surgery still offers faster recovery than open surgery at any age.",
    },
    {
      q: "Are there alternatives to hysterectomy for younger women?",
      a: "Yes, options like myomectomy, hormonal therapy, and hysteroscopic procedures are usually tried first for younger women.",
    },
    {
      q: "Does hysterectomy cause early menopause?",
      a: "Only if the ovaries are removed before natural menopause; if ovaries are preserved, natural hormone production continues.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist and laparoscopic surgeon (MS, FMAS) offering individualised hysterectomy advice across different age groups.",
    },
    {
      q: "Does Dr. Priyanka Pachauri offer fertility-preserving alternatives?",
      a: "Yes, her clinic offers laparoscopic myomectomy and other options for women who wish to avoid or delay hysterectomy.",
    },
    {
      q: "What factors matter more than age in the hysterectomy decision?",
      a: "The underlying condition, fertility goals, overall health, and response to alternative treatments matter more than age alone.",
    },
    {
      q: "How can I book a consultation for hysterectomy advice in Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic's official website to schedule a consultation with Dr. Priyanka Pachauri.",
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
                Hysterectomy Age Limit: Doctor Advice You Should Know
              </h1>

              <p className="mb-4 text-gray-700">
                One of the most common questions women ask before considering a
                hysterectomy is: &quot;Is there a right age for this
                surgery?&quot; It&apos;s a fair question — age plays an
                important role in deciding whether hysterectomy is the
                appropriate treatment, what type of procedure is recommended,
                and what happens to hormonal health afterward. However, age is
                only one part of a much bigger picture that includes the
                underlying condition, fertility plans, and overall health. This
                guide breaks down what doctors actually consider regarding age
                and hysterectomy, so you can have an informed conversation with
                your own gynaecologist.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is There an Official &quot;Age Limit&quot; for Hysterectomy?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  There is no strict upper or lower age limit set for
                  hysterectomy in modern gynaecological practice.
                </li>
                <li>
                  The decision is based primarily on medical necessity, not a
                  specific number on a calendar.
                </li>
                <li>
                  Younger women can undergo hysterectomy if medically necessary,
                  though it&apos;s approached cautiously due to fertility
                  implications.
                </li>
                <li>
                  Older women, even in their 60s or 70s, can safely undergo
                  hysterectomy if their overall health permits and surgery is
                  clinically indicated.
                </li>
                <li>
                  What truly matters is a combination of: the underlying
                  condition, fertility goals, overall health, and the risks
                  versus benefits of alternative treatments.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Age Still Matters in the Decision
              </h2>

              <p className="mb-4 text-gray-700">
                Even though there&apos;s no fixed age cutoff, age influences
                several important factors:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fertility considerations</strong> — younger women who
                  haven&apos;t completed their family will generally be guided
                  toward fertility-preserving alternatives first.
                </li>
                <li>
                  <strong>Hormonal impact</strong> — removing the ovaries in
                  younger women causes immediate menopause, which carries
                  different long-term implications than in women closer to
                  natural menopause.
                </li>
                <li>
                  <strong>Bone and cardiovascular health</strong> — early loss
                  of estrogen (if ovaries are removed) in younger women requires
                  closer monitoring and, often, hormone replacement therapy.
                </li>
                <li>
                  <strong>Surgical risk profile</strong> — overall health and
                  comorbidities, which tend to increase with age, are carefully
                  assessed before any major surgery.
                </li>
                <li>
                  <strong>Recovery capacity</strong> — general fitness and
                  healing capacity are evaluated individually rather than
                  assumed based on age alone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hysterectomy Considerations by Age Group
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Your 20s and 30s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysterectomy is generally avoided unless medically essential —
                  such as for cancer, life-threatening bleeding, or severe
                  conditions unresponsive to all other treatment.
                </li>
                <li>
                  Fertility-preserving alternatives — myomectomy, hormonal
                  therapy, hysteroscopic procedures — are almost always tried
                  first.
                </li>
                <li>
                  If surgery becomes unavoidable, ovary preservation is strongly
                  considered wherever medically safe, to avoid early menopause.
                </li>
                <li>
                  Decisions at this age typically involve detailed counselling
                  about the long-term implications of losing fertility.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Your 40s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  This is a common age range for hysterectomy, often for
                  fibroids, adenomyosis, or heavy bleeding unresponsive to other
                  treatments.
                </li>
                <li>
                  Many women at this stage have completed their family, making
                  hysterectomy a more straightforward option when medically
                  indicated.
                </li>
                <li>
                  Ovary preservation versus removal is carefully discussed,
                  since natural menopause is often just a few years away.
                </li>
                <li>
                  Laparoscopic approaches are typically well tolerated and offer
                  fast recovery at this age.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Your 50s and Around Menopause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysterectomy may be recommended for prolapse, abnormal
                  bleeding, or fibroids that haven&apos;t resolved with
                  menopause.
                </li>
                <li>
                  Since many women in this age group are naturally approaching
                  or past menopause, ovary removal has less hormonal impact.
                </li>
                <li>
                  Postmenopausal bleeding, if present, always warrants thorough
                  evaluation before deciding on treatment.
                </li>
                <li>
                  Recovery is generally similar to younger patients when
                  performed laparoscopically, assuming good overall health.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Your 60s, 70s, and Beyond
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysterectomy remains a safe option for appropriately selected
                  patients, particularly for prolapse or bleeding issues.
                </li>
                <li>
                  Overall health and fitness for surgery become more central to
                  the decision than age itself.
                </li>
                <li>
                  Pre-operative medical clearance, including cardiac and
                  anaesthesia assessment, is especially important.
                </li>
                <li>
                  Recovery may take slightly longer, but laparoscopic techniques
                  still generally outperform open surgery in this age group too.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Conditions That May Require Hysterectomy Regardless of Age
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uterine, cervical, or ovarian cancer, where hysterectomy is
                  often part of definitive treatment.
                </li>
                <li>
                  Severe, uncontrollable bleeding, particularly in emergency
                  situations.
                </li>
                <li>
                  Large or rapidly growing fibroids causing significant symptoms
                  unresponsive to other treatment.
                </li>
                <li>
                  Severe adenomyosis with debilitating pain and bleeding.
                </li>
                <li>
                  Advanced uterine prolapse, significantly affecting quality of
                  life.
                </li>
                <li>
                  Chronic pelvic pain from conditions like severe endometriosis,
                  when other treatments have failed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors Your Doctor Will Actually Consider
              </h2>

              <p className="mb-4 text-gray-700">
                Rather than age alone, your doctor will evaluate:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The specific diagnosis driving the need for treatment.
                </li>
                <li>
                  Whether less invasive alternatives have been tried or are
                  appropriate.
                </li>
                <li>
                  Your fertility plans, if applicable.
                </li>
                <li>
                  Your general health, including any chronic conditions
                  affecting surgical risk.
                </li>
                <li>
                  Whether ovaries should be preserved or removed, based on age
                  and individual risk factors.
                </li>
                <li>
                  Your personal preferences and quality-of-life priorities.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ovary Preservation: A Key Age-Related Decision
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  If ovaries are preserved, natural hormone production continues
                  until the woman reaches natural menopause.
                </li>
                <li>
                  If ovaries are removed before natural menopause, menopausal
                  symptoms begin immediately, often requiring hormone
                  replacement therapy discussion.
                </li>
                <li>
                  Younger women are generally advised to preserve ovaries
                  wherever medically safe, given the longer duration of hormonal
                  benefit.
                </li>
                <li>
                  Women closer to or past natural menopause may have less to
                  gain from ovary preservation, depending on individual risk
                  factors like family history of ovarian cancer.
                </li>
                <li>
                  This decision should always be made through individualised
                  discussion, not a generic age-based rule.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Laparoscopic Hysterectomy Suits Most Age Groups
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Minimal scarring</strong>, since incisions are only
                  5–10mm regardless of patient age.
                </li>
                <li>
                  <strong>Shorter hospital stay</strong>, typically 1–2 days.
                </li>
                <li>
                  <strong>Faster recovery</strong>, generally within 2–3 weeks.
                </li>
                <li>
                  <strong>Lower risk of infection</strong>, due to smaller
                  surgical wounds.
                </li>
                <li>
                  <strong>Well tolerated across a wide age range</strong>,
                  provided overall health supports surgery and anaesthesia.
                </li>
                <li>
                  <strong>Reduced blood loss during surgery</strong>, which is
                  particularly beneficial for older patients or those with
                  anaemia.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Discuss With Your Doctor Before Deciding
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Is hysterectomy truly necessary for my specific condition, or
                  are there alternatives worth trying first?
                </li>
                <li>
                  What are the implications of ovary removal versus preservation
                  for someone my age?
                </li>
                <li>
                  What type of hysterectomy approach — laparoscopic, vaginal, or
                  open — is most suitable for me?
                </li>
                <li>
                  What does recovery typically look like for someone my age and
                  health status?
                </li>
                <li>
                  Are there any additional pre-operative tests needed given my
                  age or medical history?
                </li>
                <li>
                  What long-term follow-up will I need after surgery?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Hysterectomy Doctor Advice in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women in Moradabad seeking personalised advice on
                hysterectomy, including age-related considerations, Dr. Priyanka
                Pachauri (MS in Obstetrics & Gynaecology, FMAS, Advanced
                Infertility Fellowship) offers individualised, evidence-based
                guidance. Based on her official website, (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), her practice includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Co-lead at Shree Advanced Urogynae Clinic and Consultant at
                  Ujala Cygnus BrightStar Hospital.
                </li>
                <li>
                  A &quot;Her Health First&quot; philosophy, emphasising
                  informed decision-making tailored to each patient&apos;s age,
                  health, and goals.
                </li>
                <li>
                  High-definition 3D laparoscopic technology, suitable for
                  hysterectomy across a wide range of patient ages.
                </li>
                <li>
                  <strong>Total Laparoscopic Hysterectomy (TLH)</strong> offered
                  as a minimally invasive option for patients across different
                  age groups and conditions.
                </li>
                <li>
                  <strong>Fertility-preserving alternatives</strong>, including
                  laparoscopic myomectomy, available for younger women who wish
                  to avoid or delay hysterectomy.
                </li>
                <li>
                  3D/4D ultrasound imaging for accurate pre-operative assessment
                  regardless of patient age.
                </li>
                <li>
                  A comprehensive practice, spanning fertility treatment,
                  pregnancy care, and gynaecological surgery, allowing
                  age-appropriate guidance within a single consultation.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Because the right approach to hysterectomy depends so heavily on
                individual factors rather than age alone, a detailed, personal
                consultation remains the most reliable way to get advice tailored
                to your specific situation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Patient Concerns About Age and Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Am I too young for a hysterectomy?&quot;</strong>{" "}
                  — Age alone doesn&apos;t rule it out if the condition is
                  severe and alternatives have failed, but fertility-preserving
                  options are always considered first.
                </li>
                <li>
                  <strong>&quot;Am I too old for surgery?&quot;</strong> —
                  Overall health, not age, is the primary factor; many women
                  safely undergo hysterectomy well into their 60s and 70s.
                </li>
                <li>
                  <strong>&quot;Will removing my ovaries age me faster?&quot;</strong>{" "}
                  — Only if done before natural menopause without hormone
                  replacement guidance; this is discussed individually.
                </li>
                <li>
                  <strong>&quot;Does recovery take longer as I get older?&quot;</strong>{" "}
                  — Recovery may be slightly slower, but laparoscopic surgery
                  still offers a significant advantage over open surgery at any
                  age.
                </li>
                <li>
                  <strong>&quot;Will my quality of life improve after surgery
                  regardless of age?&quot;</strong> — Most women, across age
                  groups, report significant relief from chronic symptoms after
                  appropriate surgery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  There is no fixed age limit for hysterectomy — the decision is
                  based on medical necessity, not age alone.
                </li>
                <li>
                  Younger women are guided toward fertility-preserving
                  alternatives wherever possible.
                </li>
                <li>
                  Ovary preservation versus removal is a key age-related
                  decision, discussed individually.
                </li>
                <li>
                  Laparoscopic hysterectomy is well tolerated across a wide age
                  range, offering faster recovery than open surgery.
                </li>
                <li>
                  Overall health, more than age itself, determines surgical
                  suitability.
                </li>
                <li>
                  A personalised consultation is essential, since age is only
                  one of several factors in the decision.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                There is no single &quot;right age&quot; for a hysterectomy — the
                decision depends on your specific diagnosis, fertility goals,
                overall health, and how well alternative treatments have worked
                or are expected to work for your condition. Whether you&apos;re
                in your 30s considering fertility-preserving options first, in
                your 40s or 50s weighing ovary preservation, or in your 60s and
                beyond evaluating overall surgical fitness, the most reliable
                guidance comes from a detailed, personalised discussion with an
                experienced gynaecologist. If you&apos;re wondering whether
                hysterectomy is the right choice for your age and situation, a
                proper consultation is the best next step toward getting advice
                tailored specifically to you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
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