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

export default function GynaeHealthCheckup() {
  const faqs = [
    {
      q: "How often should I get a gynae health checkup?",
      a: "Annually is a reasonable general guideline for most women, though your doctor may recommend a different frequency based on your individual history.",
    },
    {
      q: "Does a gynae checkup always include a pelvic exam?",
      a: "Typically yes, as it is a core part of a comprehensive clinical evaluation, though the specific components can vary based on individual needs.",
    },
    {
      q: "Is a pelvic exam painful?",
      a: "It is generally quick and only mildly uncomfortable, performed with care to minimise any discomfort.",
    },
    {
      q: "Do I need a checkup even if I feel completely fine?",
      a: "Yes, many gynaecological conditions have no early symptoms, which is exactly why preventive checkups matter.",
    },
    {
      q: "What is included in cervical cancer screening?",
      a: "This typically involves a Pap smear, which checks for abnormal cervical cell changes at recommended intervals based on age and history.",
    },
    {
      q: "Can unmarried women get a gynae checkup?",
      a: "Yes, gynaecological health checkups are relevant and available to women at any age or relationship status.",
    },
    {
      q: "What should I bring to my checkup appointment?",
      a: "Any relevant previous reports, a general sense of your menstrual history, and a list of any current symptoms or concerns you'd like to discuss.",
    },
    {
      q: "Will I get my results the same day?",
      a: "Many findings can be discussed the same day, though certain tests may require some processing time before results are available.",
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
                Gynae Health Checkup Package in Moradabad: What It Includes and
                Why It Matters
              </h1>

              <p className="mb-4 text-gray-700">
                Most women visit a gynaecologist only when something feels wrong
                — a symptom, a delayed period, or a concern that&apos;s hard to
                ignore. A regular gynaecological health checkup flips that
                approach: it catches issues early, often before symptoms even
                appear, and gives women a clear, ongoing picture of their
                reproductive and overall health.
              </p>

              <p className="text-gray-700">
                This guide explains what a comprehensive gynae health checkup
                typically involves, who should prioritise one, and how often it
                should be done at different life stages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A gynae health checkup is a preventive, not just
                  problem-focused, visit — many conditions detected through
                  routine screening have no early symptoms at all
                </li>
                <li>
                  A comprehensive checkup typically combines a clinical history
                  review, physical and pelvic examination, relevant screening
                  tests, and an ultrasound where indicated
                </li>
                <li>
                  Recommended screening components and frequency vary by age,
                  reproductive stage, and personal or family health history
                </li>
                <li>
                  Regular checkups build a health record over time, making it
                  easier to spot meaningful changes early
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Regular Gynae Checkups Matter, Even Without Symptoms
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Many gynaecological conditions develop
                  silently.</strong> Conditions such as early-stage cervical
                  changes, ovarian cysts, or fibroids often produce no
                  noticeable symptoms in their earlier stages, making routine
                  screening the only reliable way to catch them early.
                </li>
                <li>
                  <strong>Cervical cancer is highly preventable with regular
                  screening.</strong> Pap smear testing, done at recommended
                  intervals, can identify precancerous changes long before they
                  progress, making it one of the most effective cancer
                  prevention tools available to women.
                </li>
                <li>
                  <strong>Breast health screening benefits from
                  consistency.</strong> Regular clinical breast examination,
                  combined with self-awareness of any changes, supports early
                  detection of anything requiring further evaluation.
                </li>
                <li>
                  <strong>Hormonal and reproductive health issues are easier to
                  manage when caught early.</strong> Conditions like PCOS,
                  thyroid imbalance, or early menopausal changes are generally
                  easier to manage effectively when identified proactively.
                </li>
                <li>
                  <strong>A checkup builds a personal health baseline.</strong>{" "}
                  Having a documented history of past examinations and test
                  results makes it much easier for a doctor to identify
                  meaningful changes at future visits.
                </li>
                <li>
                  <strong>It provides a comfortable space to raise
                  concerns.</strong> Many women save up questions about
                  irregular symptoms, sexual health, or general concerns for a
                  dedicated visit — a routine checkup gives that opportunity
                  naturally.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Comprehensive Gynae Health Checkup Typically Includes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A detailed medical and menstrual history.</strong> This
                  covers cycle regularity, any current symptoms, sexual and
                  reproductive history, family history of relevant conditions,
                  and general lifestyle factors relevant to gynaecological
                  health.
                </li>
                <li>
                  <strong>A general physical examination.</strong> This includes
                  basic vital checks such as blood pressure and weight, which
                  are relevant to overall reproductive and hormonal health.
                </li>
                <li>
                  <strong>A pelvic examination.</strong> A clinical pelvic exam
                  allows the doctor to assess the reproductive organs directly
                  and identify any physical abnormalities warranting further
                  evaluation.
                </li>
                <li>
                  <strong>A Pap smear (cervical screening).</strong> Recommended
                  at specific intervals based on age and risk factors, this test
                  screens for precancerous or abnormal cervical cell changes.
                </li>
                <li>
                  <strong>A clinical breast examination.</strong> This is
                  typically included as part of a comprehensive checkup,
                  supporting early detection of any changes worth further
                  evaluation.
                </li>
                <li>
                  <strong>A pelvic ultrasound where indicated.</strong> This can
                  assess the uterus and ovaries for structural abnormalities
                  such as fibroids or cysts, particularly useful when symptoms
                  or history suggest it may be relevant.
                </li>
                <li>
                  <strong>Relevant blood tests based on individual profile.</strong>{" "}
                  Depending on age, symptoms, and personal history, this may
                  include hormonal panels, thyroid function, blood sugar, or
                  general health markers.
                </li>
                <li>
                  <strong>Bone health assessment for relevant age groups.</strong>{" "}
                  For women approaching or past menopause, bone density
                  considerations may be discussed or assessed as part of a
                  comprehensive evaluation.
                </li>
                <li>
                  <strong>A clear discussion of findings and next steps.</strong>{" "}
                  Every checkup concludes with the doctor explaining results,
                  addressing any concerns raised, and outlining any recommended
                  follow-up or further testing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Checkup Priorities Change Across Life Stages
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Adolescence and early reproductive years.</strong>{" "}
                  Checkups at this stage often focus on menstrual health,
                  general reproductive health education, and addressing any
                  specific concerns like irregular cycles or period pain.
                </li>
                <li>
                  <strong>Reproductive years (twenties to thirties).</strong>{" "}
                  Regular Pap smear screening, general reproductive health
                  monitoring, and fertility-related discussions, where relevant,
                  tend to be the focus during this stage.
                </li>
                <li>
                  <strong>Pregnancy planning and postpartum stages.</strong>{" "}
                  Checkups during this period often include preconception
                  counselling or postpartum recovery assessment, alongside
                  standard gynaecological screening.
                </li>
                <li>
                  <strong>Perimenopause and menopause (typically forties
                  onward).</strong> Checkups increasingly incorporate
                  discussions around menopausal symptoms, bone health, and
                  cardiovascular risk factors alongside standard reproductive
                  screening.
                </li>
                <li>
                  <strong>Postmenopausal years.</strong> Continued monitoring
                  remains important even after menopause, with particular
                  attention to bone health, cardiovascular risk, and any new
                  symptoms that warrant evaluation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Often Should You Get a Gynae Checkup?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Annually, as a general guideline for most women.</strong>{" "}
                  An annual checkup is a reasonable baseline for most women
                  without specific risk factors or ongoing concerns.
                </li>
                <li>
                  <strong>More frequently if actively managing a condition.</strong>{" "}
                  Women being treated for conditions like PCOS, endometriosis,
                  or fibroids may need more frequent follow-up visits as part of
                  ongoing management.
                </li>
                <li>
                  <strong>Pap smear frequency follows specific screening
                  guidelines.</strong> These intervals are typically longer than
                  annual, but the appropriate frequency depends on age and prior
                  results, which your doctor will guide directly.
                </li>
                <li>
                  <strong>Promptly, regardless of timing, if new symptoms
                  appear.</strong> Irregular bleeding, pain, unusual discharge,
                  or any other new symptom warrants a visit rather than waiting
                  for the next scheduled checkup.
                </li>
                <li>
                  <strong>As recommended following any abnormal result.</strong>{" "}
                  If a previous checkup identified something requiring follow-up,
                  the doctor will advise a specific timeline rather than waiting
                  a full year.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A private, judgement-free environment.</strong>{" "}
                  Gynaecological checkups are handled with full professionalism
                  and discretion, and any concern — however minor it may feel —
                  is worth raising.
                </li>
                <li>
                  <strong>Time to ask questions.</strong> A good checkup allows
                  space for discussing any symptoms, concerns, or general
                  questions about reproductive health, not just the standard
                  examination itself.
                </li>
                <li>
                  <strong>Clear explanation of every step.</strong> Any
                  examination or test performed is explained beforehand, so
                  there are no surprises during the visit.
                </li>
                <li>
                  <strong>A straightforward, efficient process.</strong> While
                  thorough, a routine checkup is generally completed within a
                  single visit unless further testing or specialist referral is
                  specifically needed.
                </li>
                <li>
                  <strong>Results and next steps communicated clearly.</strong>{" "}
                  Whether reassurance or a specific next step is needed, the
                  visit concludes with clarity about what was found and what, if
                  anything, comes next.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Gynae Checkups
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;I only need to see a
                  gynaecologist if something is wrong.&quot;{" "}
                  <strong>Fact:</strong> Preventive checkups catch many
                  conditions before symptoms even appear, which is exactly their
                  value.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Pelvic exams are always
                  uncomfortable and best avoided.&quot;{" "}
                  <strong>Fact:</strong> While not always the most pleasant part
                  of a checkup, they are quick, routine, and performed with care
                  to minimise any discomfort.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Once I&apos;ve had children, I
                  don&apos;t need regular gynae checkups anymore.&quot;{" "}
                  <strong>Fact:</strong> Ongoing screening remains relevant
                  throughout a woman&apos;s life, including after childbearing
                  years and beyond menopause.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Unmarried or younger women
                  don&apos;t need gynae checkups.&quot;{" "}
                  <strong>Fact:</strong> Menstrual health, general reproductive
                  wellbeing, and specific concerns can benefit from evaluation
                  at any age or life stage.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;A normal checkup last year means
                  I can skip this year&apos;s.&quot;{" "}
                  <strong>Fact:</strong> Regular, consistent screening — not a
                  single past result — is what provides ongoing protection and
                  early detection.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;All gynae checkups are the same,
                  regardless of provider.&quot;{" "}
                  <strong>Fact:</strong> The thoroughness, technology used, and
                  quality of communication can vary significantly between
                  providers, which is worth considering when choosing where to
                  go.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Provider for Your Checkup Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Thoroughness beyond a rushed, routine visit.</strong>{" "}
                  A comprehensive checkup takes the time needed to review
                  history, perform relevant examinations, and discuss findings
                  properly, rather than moving through a checklist quickly.
                </li>
                <li>
                  <strong>Access to appropriate diagnostic technology.</strong>{" "}
                  Having ultrasound and other relevant diagnostic tools available
                  directly supports a more complete evaluation in a single
                  visit.
                </li>
                <li>
                  <strong>Continuity of care over time.</strong> Seeing the same
                  provider consistently allows for meaningful comparison of
                  results and health patterns across visits.
                </li>
                <li>
                  <strong>Comfortable, respectful communication.</strong> A
                  provider who creates a comfortable environment makes it more
                  likely that women will raise concerns honestly and attend
                  checkups consistently over time.
                </li>
                <li>
                  <strong>Personalised guidance based on your specific life
                  stage.</strong> Recommendations should reflect your individual
                  age, health history, and reproductive stage, not a generic,
                  one-size-fits-all checklist.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist in
                Moradabad offering comprehensive gynaecological health checkups
                tailored to each woman&apos;s age, life stage, and personal
                health history. Every checkup includes a thorough clinical
                evaluation, relevant screening, and a clear, unhurried
                discussion of results and next steps.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Gynae Health Checkup
              </h2>

              <p className="mb-4 text-gray-700">
                For exact details on the specific checkup components and pricing
                available, please contact the clinic directly — our team will
                guide you to the right checkup for your age, life stage, and
                health needs.
              </p>

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