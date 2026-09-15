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

export default function UrinaryIncontinenceTreatment() {
  const faqs = [
    {
      q: "What is urinary incontinence?",
      a: "It is the involuntary leakage of urine, ranging from occasional minor leaks to more frequent, disruptive episodes.",
    },
    {
      q: "What are the main types of urinary incontinence?",
      a: "Stress incontinence, urge incontinence, mixed incontinence, overflow incontinence, and functional incontinence.",
    },
    {
      q: "Who treats urinary incontinence in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) evaluates and treats urinary incontinence as part of her gynaecological practice.",
    },
    {
      q: "Can urinary incontinence be treated without surgery?",
      a: "Yes, many cases improve significantly with pelvic floor exercises, bladder training, and lifestyle changes.",
    },
    {
      q: "Is postpartum urine leakage common?",
      a: "Yes, it is common after childbirth and is often treatable with proper evaluation and early intervention.",
    },
    {
      q: "When is surgery considered for incontinence?",
      a: "Usually after conservative treatments have not provided sufficient relief, or when symptoms significantly affect quality of life.",
    },
    {
      q: "How do I book a consultation?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does drinking less water help with incontinence?",
      a: "Not necessarily — reducing fluids too much can irritate the bladder and worsen symptoms rather than help.",
    },
    {
      q: "Is it normal to feel embarrassed discussing this with a doctor?",
      a: "It is a common feeling, but urinary incontinence is a medically recognized, treatable condition that doctors address professionally.",
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
                Urinary Incontinence Treatment for Women: Causes, Types, and
                Effective Solutions
              </h1>

              <p className="mb-4 text-gray-700">
                Urinary incontinence — the involuntary leakage of urine —
                affects a significant number of women at some point in their
                lives, yet it remains one of the most under-discussed health
                issues due to embarrassment and misconceptions about it being an
                unavoidable part of aging or childbirth. The truth is that most
                cases of urinary incontinence in women are treatable, often
                without surgery, once properly diagnosed.
              </p>

              <p className="text-gray-700">
                This article breaks down the different types of urinary
                incontinence, their causes, the range of treatment options
                available today, and why Dr. Priyanka Pachauri in Moradabad is a
                trusted resource for women seeking real solutions to this common
                but often silently endured problem.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Urinary Incontinence?
              </h2>

              <p className="mb-4 text-gray-700">
                Urinary incontinence refers to the unintentional loss of bladder
                control, ranging from occasional minor leaks to a complete
                inability to control urination. Important facts to understand
                include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It is not a normal, unavoidable part of aging, even though it
                  becomes more common with age
                </li>
                <li>
                  It affects women across all age groups, though certain life
                  stages — particularly postpartum and menopause — carry higher
                  risk
                </li>
                <li>
                  Severity varies widely, from occasional small leaks to more
                  frequent, disruptive episodes
                </li>
                <li>
                  Most cases fall into a few well-defined categories, each with
                  different underlying causes and treatment approaches
                </li>
                <li>
                  Effective treatment exists for nearly all types, ranging from
                  simple lifestyle changes to more advanced medical or surgical
                  options
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Urinary Incontinence in Women
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. Stress Incontinence
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Leakage triggered by physical pressure on the bladder,
                      such as coughing, sneezing, laughing, or exercising
                    </li>
                    <li>
                      Caused by weakened pelvic floor muscles or a weakened
                      urethral sphincter
                    </li>
                    <li>
                      One of the most common types, especially after childbirth
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Urge Incontinence (Overactive Bladder)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A sudden, intense urge to urinate followed by involuntary
                      leakage
                    </li>
                    <li>
                      Often involves frequent urination, including waking up
                      multiple times at night to urinate
                    </li>
                    <li>
                      Related to bladder muscle overactivity rather than
                      physical pressure
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Mixed Incontinence
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A combination of both stress and urge incontinence symptoms
                    </li>
                    <li>
                      Requires careful evaluation to determine which component
                      is more dominant, guiding treatment choices
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Overflow Incontinence
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Occurs when the bladder does not empty completely, leading
                      to frequent or constant dribbling
                    </li>
                    <li>
                      Less common in women than in men, but can occur due to
                      nerve damage or bladder obstruction
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    5. Functional Incontinence
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Leakage related to physical or cognitive limitations that
                      make reaching the bathroom in time difficult
                    </li>
                    <li>
                      Not caused by a bladder or pelvic floor problem itself,
                      but by external factors affecting mobility or awareness
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Urinary Incontinence in Women
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy and vaginal childbirth, which place significant
                  strain on pelvic floor muscles and nerves
                </li>
                <li>
                  Menopause, due to declining estrogen levels affecting bladder
                  and urethral tissue
                </li>
                <li>
                  Obesity, which increases pressure on the bladder and pelvic
                  floor
                </li>
                <li>
                  Chronic coughing, such as from smoking or a respiratory
                  condition
                </li>
                <li>
                  Urinary tract infections, which can cause temporary urgency
                  and leakage
                </li>
                <li>
                  Certain medications, including some diuretics, which can
                  increase urine production and urgency
                </li>
                <li>
                  Neurological conditions, which can affect bladder nerve
                  signals in some cases
                </li>
                <li>
                  Previous pelvic surgery, which can occasionally affect bladder
                  support structures
                </li>
                <li>
                  High caffeine or fluid intake, which can contribute to
                  urgency and frequency
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Should Prompt an Evaluation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Leaking urine during coughing, sneezing, laughing, or exercise
                </li>
                <li>
                  A sudden, strong urge to urinate that is difficult to control
                </li>
                <li>
                  Frequent urination, including multiple times during the night
                </li>
                <li>Leakage that occurs without any clear trigger</li>
                <li>A feeling of incomplete bladder emptying</li>
                <li>
                  Urinary symptoms that are affecting daily activities, social
                  confidence, or sleep quality
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Urinary Incontinence Is Diagnosed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed symptom history, including frequency, triggers, and
                  severity of leakage episodes
                </li>
                <li>
                  A bladder diary, tracking fluid intake, urination frequency,
                  and leakage episodes over several days
                </li>
                <li>
                  Physical and pelvic examination, to assess pelvic floor
                  strength and any signs of prolapse
                </li>
                <li>
                  Urine tests, to rule out infection as a contributing or
                  underlying cause
                </li>
                <li>
                  Urodynamic testing, in some cases, to assess bladder function
                  and pressure in more detail
                </li>
                <li>
                  Pelvic ultrasound, useful for evaluating pelvic organ support
                  structures when relevant
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Non-Surgical Treatment Options
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Lifestyle and Behavioral Changes
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Bladder training, gradually increasing the time between
                      bathroom visits to improve bladder control
                    </li>
                    <li>
                      Fluid management, adjusting the timing and amount of fluid
                      intake, particularly reducing caffeine and alcohol
                    </li>
                    <li>
                      Weight management, since reducing excess weight can
                      significantly ease pressure on the bladder and pelvic floor
                    </li>
                    <li>
                      Managing chronic cough or constipation, both of which
                      place repeated strain on pelvic support structures
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pelvic Floor Muscle Training
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Kegel exercises, performed correctly and consistently, to
                      strengthen the muscles supporting bladder control
                    </li>
                    <li>
                      Biofeedback therapy, which helps women learn to properly
                      engage and coordinate pelvic floor muscles
                    </li>
                    <li>
                      Supervised pelvic floor physical therapy, often more
                      effective than self-guided exercises alone
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Medical Treatment
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Medications for overactive bladder, which can help reduce
                      urgency and frequency in urge incontinence
                    </li>
                    <li>
                      Vaginal estrogen therapy, sometimes used in postmenopausal
                      women to improve tissue health and reduce symptoms
                    </li>
                    <li>
                      Pessary devices, which can provide mechanical support to
                      reduce stress incontinence symptoms in some cases
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Surgical Treatment Options
              </h2>

              <p className="mb-4 text-gray-700">
                For cases that do not respond adequately to conservative
                treatment, surgical options may be considered:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sling procedures, which provide support to the urethra and are
                  commonly used for stress incontinence
                </li>
                <li>
                  Bladder neck suspension surgery, aimed at repositioning and
                  supporting the bladder neck
                </li>
                <li>
                  Minimally invasive laparoscopic approaches, often preferred
                  where appropriate for shorter recovery and reduced surgical
                  risk
                </li>
                <li>
                  Surgical repair of associated pelvic organ prolapse, when
                  prolapse is contributing to incontinence symptoms
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Surgical treatment is typically considered after conservative
                options have been tried, or in cases where the severity and
                impact on quality of life warrant a more definitive solution.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Timely Treatment Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Untreated incontinence can affect mental health, contributing
                  to anxiety, social withdrawal, and reduced quality of life
                </li>
                <li>
                  Symptoms often worsen gradually if left untreated, particularly
                  stress incontinence related to pelvic floor weakness
                </li>
                <li>
                  Early treatment tends to be simpler, often resolving with
                  lifestyle changes and pelvic floor exercises rather than
                  requiring more advanced intervention
                </li>
                <li>
                  Ongoing leakage can increase the risk of skin irritation and
                  urinary tract infections, adding further discomfort over time
                </li>
                <li>
                  Many women delay seeking help for years out of embarrassment,
                  missing out on effective, relatively simple treatment options
                  that could improve their daily life significantly
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Urinary Incontinence Treatment in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) provides evaluation
                and treatment for urinary incontinence as part of her
                comprehensive women&apos;s health practice in Moradabad.
                According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her clinic offers services relevant to incontinence care.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Key Features of Care
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A &quot;Her Health First&quot; approach, ensuring urinary
                      symptoms are discussed openly and taken seriously, rather
                      than dismissed as a normal part of childbirth or aging
                    </li>
                    <li>
                      3D laparoscopic surgical expertise, applicable to
                      minimally invasive surgical treatment when conservative
                      options are not sufficient
                    </li>
                    <li>
                      Postnatal care, providing a natural opportunity to
                      identify and address postpartum incontinence early
                    </li>
                    <li>
                      Advanced diagnostic imaging, including a Voluson E22 3D/4D
                      ultrasound machine, useful for evaluating pelvic organ
                      support and related structures
                    </li>
                    <li>
                      Continuity of care, allowing ongoing monitoring and
                      adjustment of treatment as symptoms improve or change over
                      time
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Why Patients Choose the Clinic
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Patient testimonials consistently emphasize feeling
                      comfortable discussing sensitive symptoms and receiving
                      clear, judgment-free guidance
                    </li>
                    <li>
                      An especially important quality for women hesitant to
                      bring up urinary leakage
                    </li>
                    <li>
                      The clinic is located in Gandhi Nagar, Moradabad, making
                      it accessible to women across the city seeking evaluation
                      and treatment
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Daily Habits That Can Help Manage Symptoms
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Maintain a consistent bathroom schedule, avoiding both
                  excessive delay and unnecessary &quot;just in case&quot; trips
                </li>
                <li>
                  Limit bladder irritants, such as caffeine, alcohol, and
                  heavily carbonated drinks, which can increase urgency
                </li>
                <li>
                  Practice pelvic floor exercises daily, ideally as part of a
                  consistent routine rather than only when symptoms flare up
                </li>
                <li>
                  Maintain a healthy weight, since even modest weight loss can
                  meaningfully reduce pressure on the bladder
                </li>
                <li>
                  Treat constipation promptly, since straining during bowel
                  movements places additional strain on pelvic floor muscles
                </li>
                <li>
                  Avoid heavy lifting with poor technique, which can place
                  sudden pressure on the pelvic floor
                </li>
                <li>
                  Use the correct posture when using the bathroom, allowing the
                  pelvic floor muscles to relax fully during urination
                </li>
                <li>
                  Track your symptoms, noting patterns around specific triggers,
                  foods, or times of day
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your First Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A detailed conversation about your symptoms, including how
                  often leakage occurs and what typically triggers it
                </li>
                <li>
                  Questions about childbirth history, menopause status, and any
                  relevant medical conditions
                </li>
                <li>
                  A physical examination, assessing pelvic floor strength and
                  checking for any signs of prolapse
                </li>
                <li>
                  Discussion of a bladder diary, which you may be asked to keep
                  for a few days before or after your visit
                </li>
                <li>
                  A personalized treatment plan, starting with the least
                  invasive options appropriate for your specific type and
                  severity of incontinence
                </li>
                <li>
                  An opportunity to ask questions openly, since a good
                  specialist will address the topic professionally and without
                  judgment
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Urinary Incontinence
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Leaking urine after having children is completely normal and can't be fixed.&quot;</strong>{" "}
                  Many cases of postpartum stress incontinence improve
                  significantly with proper evaluation and treatment.
                </li>
                <li>
                  <strong>&quot;Only older women experience incontinence.&quot;</strong>{" "}
                  It can occur at any age, particularly after childbirth, and
                  should not be dismissed based on age alone.
                </li>
                <li>
                  <strong>&quot;Surgery is the only real solution.&quot;</strong>{" "}
                  Most cases respond well to conservative treatments like pelvic
                  floor exercises and lifestyle changes before surgery is even
                  considered.
                </li>
                <li>
                  <strong>&quot;Drinking less water will solve the problem.&quot;</strong>{" "}
                  Reducing fluids excessively can actually concentrate urine and
                  irritate the bladder, worsening urgency symptoms rather than
                  helping.
                </li>
                <li>
                  <strong>&quot;It is too embarrassing to bring up with a doctor.&quot;</strong>{" "}
                  Urinary incontinence is an extremely common and medically
                  recognized condition — a good doctor will address it
                  professionally and without judgment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                To consult Dr. Priyanka Pachauri for urinary incontinence
                treatment in Moradabad, reach out through any of the following:
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>
                        Dr. Priyanka Gynaec – Fertility • Maternity • 3D
                        Laparoscopy
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
                        href="mailto:drpriyanka@gynaecologistmoradabad.com"
                        className="break-all hover:underline"
                      >
                        drpriyanka@gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
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