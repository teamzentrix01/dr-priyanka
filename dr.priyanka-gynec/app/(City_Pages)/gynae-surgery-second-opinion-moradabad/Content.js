
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

export default function GynaeSurgerySecondOpinion() {
  const faqs = [
    {
      q: "Where can I get a gynae surgery second opinion in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers independent evaluation of surgical recommendations.",
    },
    {
      q: "Why is a second opinion especially important before surgery?",
      a: "Because surgery is often irreversible and can permanently affect fertility, making extra confirmation valuable.",
    },
    {
      q: "What surgeries commonly warrant a second opinion?",
      a: "Hysterectomy, myomectomy, oophorectomy, and endometriosis surgery are common examples.",
    },
    {
      q: "What should I bring to a surgical second opinion?",
      a: "All previous scans, test results, and notes from your first surgical recommendation.",
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
      q: "Can a second opinion reveal less invasive surgical options?",
      a: "Yes, a second surgeon may identify a less extensive or laparoscopic alternative to the originally proposed surgery.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email my reports before the consultation?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Will seeking a second opinion delay urgent surgery?",
      a: "For genuine emergencies, timely treatment remains the priority; for non-emergency cases, a short delay for informed decision-making is generally safe.",
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
                Gynae Surgery Second Opinion in Moradabad: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Being told you need gynaecological surgery can be one of the
                most stressful moments in a woman&apos;s healthcare journey,
                especially when the recommendation involves removing an organ or
                undergoing a procedure that can&apos;t be undone. A gynae
                surgery second opinion in Moradabad gives you the chance to
                pause, verify, and explore alternatives before committing to the
                operating table.
              </p>

              <p className="text-gray-700">
                This guide explains why a pre-surgery second opinion matters
                specifically, what questions to ask, and how Dr. Priyanka
                Pachauri supports patients seeking clarity before major
                gynaecological surgery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Second Opinion Before Surgery Is Especially Important
              </h2>

              <p className="mb-4 text-gray-700">
                Surgery is different from most other medical treatments —
                it&apos;s often irreversible, carries inherent risks, and can
                permanently affect fertility or hormonal balance. This makes a
                pre-surgical second opinion particularly valuable:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgical decisions cannot usually be reversed once performed
                </li>
                <li>
                  Some surgeries, especially hysterectomy, permanently end the
                  possibility of pregnancy
                </li>
                <li>
                  Studies and clinical experience consistently show that a
                  meaningful percentage of recommended gynaecological surgeries
                  have viable non-surgical alternatives
                </li>
                <li>
                  A second surgeon may identify a less invasive surgical approach
                  for the same condition
                </li>
                <li>
                  Confirmation from an independent specialist provides genuine
                  peace of mind before a major decision
                </li>
                <li>
                  It gives you time to fully understand the risks, benefits, and
                  recovery expectations involved
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Gynae Surgeries Where a Second Opinion Is Worth Seeking
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hysterectomy</strong> – removal of the uterus, a major
                  and irreversible decision that ends fertility
                </li>
                <li>
                  <strong>Myomectomy</strong> – fibroid removal surgery, where
                  the extent and approach (laparoscopic vs open) can vary
                  between surgeons
                </li>
                <li>
                  <strong>Oophorectomy</strong> – removal of one or both
                  ovaries, which has significant hormonal implications
                </li>
                <li>
                  <strong>Endometriosis surgery</strong> – where the extent of
                  excision and surgical approach can differ significantly based
                  on surgeon experience
                </li>
                <li>
                  <strong>Ovarian cystectomy</strong> – removal of ovarian
                  cysts, where fertility-preserving technique matters
                </li>
                <li>
                  <strong>Prolapse repair surgery</strong> – where different
                  surgical approaches offer varying recovery times and outcomes
                </li>
                <li>
                  Any surgery recommended without a clear, detailed explanation
                  of why less invasive options were ruled out
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That a Second Opinion May Be Worthwhile
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgery was recommended very quickly, without a thorough
                  diagnostic workup
                </li>
                <li>
                  You weren&apos;t given a clear explanation of why medication
                  or monitoring wasn&apos;t tried first
                </li>
                <li>
                  The doctor seemed rushed or didn&apos;t answer your questions
                  in detail
                </li>
                <li>
                  You feel pressured to decide immediately, without time to
                  think it over
                </li>
                <li>
                  The recommended surgery seems more extensive than what you
                  understood your condition to be
                </li>
                <li>
                  You have future pregnancy plans, but the recommended surgery
                  could affect your fertility
                </li>
                <li>
                  You simply want confirmation before undergoing something as
                  significant as surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Thorough Surgical Second Opinion Should Cover
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Re-confirmation of the diagnosis</strong> – reviewing
                  your scans, tests, and symptoms independently
                </li>
                <li>
                  <strong>Discussion of non-surgical alternatives</strong> –
                  medication, hormonal treatment, or monitoring, if medically
                  appropriate
                </li>
                <li>
                  <strong>Comparison of surgical approaches</strong> – such as
                  laparoscopic versus open surgery, and their respective
                  recovery times
                </li>
                <li>
                  <strong>Fertility impact assessment</strong> – especially
                  important if you may want to conceive in the future
                </li>
                <li>
                  <strong>Honest risk-benefit discussion</strong> – covering
                  potential complications and realistic expected outcomes
                </li>
                <li>
                  <strong>Clarification of urgency</strong> – understanding
                  whether the surgery is truly time-sensitive or can be
                  scheduled with more consideration
                </li>
                <li>
                  A clear, jargon-free explanation of everything, so you can
                  make a confident, informed decision
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Specific Questions to Ask During a Surgical Second Opinion
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What exactly is my diagnosis, and what tests confirm it?
                </li>
                <li>
                  Are there non-surgical treatment options that could be tried
                  first?
                </li>
                <li>
                  If surgery is necessary, what is the least invasive approach
                  available for my condition?
                </li>
                <li>
                  What are the realistic risks and potential complications of
                  this specific surgery?
                </li>
                <li>
                  How will this surgery affect my fertility or hormonal balance?
                </li>
                <li>
                  What is the expected recovery time, and how will it affect my
                  daily life and work?
                </li>
                <li>
                  What happens if I choose to wait or monitor the condition
                  instead of proceeding immediately?
                </li>
                <li>
                  What is your personal experience and success rate with this
                  specific type of surgery?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Surgical Alternatives Your Second Opinion May
                Reveal
              </h2>

              <p className="mb-4 text-gray-700">
                For fibroids – laparoscopic myomectomy may be a
                fertility-preserving alternative to hysterectomy, depending on
                fibroid location and size
              </p>

              <p className="mb-4 text-gray-700">
                For heavy bleeding – hormonal treatment or a hysteroscopic
                procedure may sometimes be tried before considering hysterectomy
              </p>

              <p className="mb-4 text-gray-700">
                For ovarian cysts – laparoscopic cystectomy can often remove the
                cyst while preserving the ovary, rather than removing the entire
                ovary
              </p>

              <p className="mb-4 text-gray-700">
                For endometriosis – laparoscopic excision by an experienced
                surgeon may offer symptom relief without more extensive surgery
              </p>

              <p className="mb-4 text-gray-700">
                For uterine prolapse – less invasive repair techniques may be
                available depending on the severity and your specific anatomy
              </p>

              <p className="text-gray-700">
                A qualified second-opinion doctor will explain which of these
                alternatives, if any, apply to your specific situation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Bring to Your Surgical Second Opinion Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  All previous ultrasound, MRI, or other imaging reports
                </li>
                <li>Blood test results and any relevant lab reports</li>
                <li>
                  Notes from your first consultation, including the specific
                  surgery recommended and the reasoning given
                </li>
                <li>
                  A list of your symptoms, their duration, and how they affect
                  your daily life
                </li>
                <li>
                  Your specific questions and concerns written down in advance
                </li>
                <li>
                  Information about your future pregnancy plans, if relevant to
                  the decision
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: Honest Surgical Second Opinions in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a
                well-recognised gynaecologist and advanced laparoscopic surgeon
                in Moradabad, known for offering thorough, unbiased evaluations
                for patients facing a surgical decision. Her clinic follows the
                guiding principle of &quot;Her Health First,&quot; with a strong
                emphasis on fertility-preserving, minimally invasive
                alternatives wherever medically appropriate.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Relevant Surgical Expertise and Services
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D laparoscopic gynaecological surgery – advanced minimally
                  invasive surgical capability across multiple procedure types
                </li>
                <li>
                  Laparoscopic myomectomy – a fertility-preserving alternative
                  to hysterectomy for fibroid cases
                </li>
                <li>
                  Laparoscopic cystectomy – ovary-preserving treatment for
                  ovarian cysts
                </li>
                <li>
                  Laparoscopic hysterectomy – when genuinely necessary,
                  performed with a minimally invasive approach for faster
                  recovery
                </li>
                <li>
                  Sacrocolpopexy – for uterine and vaginal vault prolapse repair
                </li>
                <li>
                  Diagnostic hysteroscopy and hysteroscopic polypectomy for less
                  invasive uterine evaluation and treatment
                </li>
                <li>
                  Endometriosis surgery with a focus on symptom relief and
                  fertility preservation
                </li>
                <li>Fertility evaluation and IVF treatment review</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Supporting a Thorough Second Opinion
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D & 4D ultrasound machines for detailed, updated imaging of
                  your condition
                </li>
                <li>
                  High-definition 3D laparoscopic surgical systems, useful for
                  reassessing whether a minimally invasive approach is suitable
                </li>
                <li>
                  An integrated evaluation process that reviews your full case
                  history before recommending any path forward
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Trust This Clinic for a Surgical Second Opinion
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
                  <strong>Continuity you can count on</strong> – a thorough,
                  unhurried review of your full surgical case, not a rushed
                  evaluation
                </li>
                <li>
                  <strong>Outcomes patients hope for</strong> –
                  fertility-preserving alternatives where possible, and
                  confidence in whichever path you choose
                </li>
                <li>
                  <strong>Trust earned daily</strong> – reputation built through
                  patient referrals rather than paid promotion
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Concerns About Seeking a Surgical Second Opinion
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Will this delay my treatment too much?&quot;</strong>{" "}
                  – Most second opinions can be arranged quickly, and for
                  non-emergency surgeries, a short delay for informed
                  decision-making is generally safe and worthwhile
                </li>
                <li>
                  <strong>&quot;My first doctor might feel offended&quot;</strong>{" "}
                  – Responsible doctors understand and respect a patient&apos;s
                  right to seek clarity before major surgery
                </li>
                <li>
                  <strong>&quot;What if I need a third opinion because the two
                  disagree?&quot;</strong> – This simply means you have more
                  information to work with, and a third opinion can help resolve
                  genuine disagreement
                </li>
                <li>
                  <strong>&quot;Isn&apos;t every fibroid or cyst surgery
                  basically the same?&quot;</strong> – Surgical approach,
                  extent, and fertility impact can vary significantly based on
                  the surgeon&apos;s assessment and technique
                </li>
                <li>
                  <strong>&quot;Will insurance or cost be an issue for a second
                  opinion?&quot;</strong> – This is worth checking directly with
                  the clinic, but the value of confidence before major surgery
                  is often well worth the modest additional cost
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Get a Gynae Surgery Second Opinion in
                Moradabad
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Gather all your reports, scans, and the
                  details of your first surgical recommendation.</strong>
                </li>
                <li>
                  <strong>Step 2: Write down specific questions about your
                  diagnosis, alternatives, and the proposed surgery.</strong>
                </li>
                <li>
                  <strong>Step 3: Book a consultation with an experienced,
                  independent gynaecological surgeon.</strong>
                </li>
                <li>
                  <strong>Step 4: Share your full history honestly, including
                  the surgery recommended in your first opinion.</strong>
                </li>
                <li>
                  <strong>Step 5: Ask detailed questions about non-surgical
                  alternatives and less invasive surgical options.</strong>
                </li>
                <li>
                  <strong>Step 6: Take time to reflect on both opinions before
                  making your final decision</strong>, unless the situation is
                  truly urgent.
                </li>
                <li>
                  <strong>Step 7: Choose the treatment path that feels medically
                  sound, fertility-conscious, and right for your
                  circumstances.</strong>
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Getting a Surgical Second Opinion Locally in
                Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  No need to travel to another city for a thorough, professional
                  surgical evaluation
                </li>
                <li>
                  Access to updated imaging and testing without long delays
                </li>
                <li>
                  Lower overall cost compared to seeking opinions in metro-city
                  hospitals
                </li>
                <li>
                  A comfortable, familiar setting for discussing a difficult and
                  significant surgical decision
                </li>
                <li>
                  Continuity of care if you choose to proceed with treatment at
                  the same clinic
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
                  <strong>Strong relevant surgical listings</strong> –
                  Laparoscopic myomectomy, cystectomy, hysterectomy, and
                  sacrocolpopexy are all explicitly named, directly matching
                  common second-opinion surgery scenarios.
                </li>
                <li>
                  <strong>Fertility-preserving positioning evident</strong> –
                  The combination of laparoscopic surgery services alongside
                  fertility and IVF care suggests an overall philosophy geared
                  toward preserving reproductive options where possible.
                </li>
                <li>
                  <strong>Technology transparency</strong> – Mentioning 3D
                  laparoscopic systems and 4D ultrasound builds confidence that
                  a fresh surgical evaluation would be technically thorough.
                </li>
                <li>
                  <strong>Academic credentials highlighted</strong> – References
                  to gold medal academic background and fellowship training
                  support credibility for reviewing complex surgical cases.
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
                  page specifically addressing pre-surgery second opinions,
                  including a list of questions patients should ask, could help
                  the website rank better for this topic and directly reassure
                  patients considering major surgery.
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
