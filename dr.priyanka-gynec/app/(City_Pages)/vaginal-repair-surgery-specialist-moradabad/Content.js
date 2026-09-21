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

export default function VaginalRepairSurgerySpecialist() {
  const faqs = [
    {
      q: "What is vaginal repair surgery used for?",
      a: "It is used to correct pelvic organ prolapse, including bladder, uterus, or rectum bulging into the vaginal canal, restoring normal support and comfort.",
    },
    {
      q: "What is sacrocolpopexy?",
      a: "It is an advanced laparoscopic keyhole procedure that uses supportive mesh to anchor the vaginal vault, treating vaginal vault or uterine prolapse.",
    },
    {
      q: "Is vaginal repair surgery painful?",
      a: "Most laparoscopic procedures involve only mild, manageable discomfort that is well controlled with pain medication during recovery.",
    },
    {
      q: "How long is the recovery after vaginal repair surgery?",
      a: "Most women resume light activity within 1–2 weeks and achieve full recovery within 6–8 weeks, depending on the procedure.",
    },
    {
      q: "Will I need a hospital stay for vaginal repair surgery?",
      a: "Laparoscopic procedures like sacrocolpopexy usually require only a 24–48 hour hospital stay.",
    },
    {
      q: "Can prolapse come back after surgery?",
      a: "Recurrence is possible, especially with continued straining or heavy lifting, but pelvic floor exercises and follow-up care significantly reduce this risk.",
    },
    {
      q: "Can I have children after vaginal repair surgery?",
      a: "Future pregnancy plans should be discussed before surgery, as certain repairs are best performed after childbearing is complete.",
    },
    {
      q: "Is mesh used in all vaginal repair procedures?",
      a: "Not always — mesh is typically used in sacrocolpopexy, while other repairs use the body's own tissue for support.",
    },
    {
      q: "When can I resume exercise after vaginal repair surgery?",
      a: "Light activity resumes within a few weeks, but strenuous exercise is generally avoided until at least 6–8 weeks, based on your doctor's advice.",
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
                Vaginal Repair Surgery Specialist in Moradabad: Complete Patient
                Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Pelvic organ prolapse and vaginal wall weakness are far more
                common than most women realise, yet many suffer silently due to
                embarrassment or lack of awareness about treatment options. If
                you are searching for an experienced vaginal repair surgery
                specialist in Moradabad, this comprehensive guide explains the
                causes, symptoms, and modern surgical solutions available — with
                expert insight from Dr. Priyanka Pachauri, a leading laparoscopic
                gynaecologist and urogynaecology specialist in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Vaginal Repair Surgery?
              </h2>

              <p className="mb-4 text-gray-700">
                Vaginal repair surgery is a set of surgical procedures designed
                to correct weakened or prolapsed pelvic structures, restoring
                normal vaginal support and function.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Treats prolapse of the uterus, vaginal walls, bladder, or
                  rectum into the vaginal canal
                </li>
                <li>
                  Repairs weakened pelvic floor muscles and connective tissue
                </li>
                <li>
                  Restores normal anatomical support to the vagina and
                  surrounding organs
                </li>
                <li>
                  Can be performed vaginally, laparoscopically, or through a
                  combined approach
                </li>
                <li>
                  Aims to relieve physical discomfort and restore quality of
                  life
                </li>
                <li>
                  Often combined with procedures like sacrocolpopexy for
                  long-term structural support
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Causes Vaginal Wall Weakness and Prolapse?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Vaginal childbirth, especially multiple deliveries or
                  prolonged labour
                </li>
                <li>
                  Natural weakening of pelvic floor muscles with age
                </li>
                <li>
                  Menopause-related decline in oestrogen, which affects tissue
                  elasticity
                </li>
                <li>
                  Chronic constipation and repeated straining
                </li>
                <li>
                  Long-term heavy lifting or physically strenuous work
                </li>
                <li>
                  Chronic coughing, such as from smoking or respiratory
                  conditions
                </li>
                <li>
                  Obesity, which places extra pressure on pelvic structures
                </li>
                <li>
                  Previous pelvic surgery, including hysterectomy
                </li>
                <li>
                  Genetic predisposition to weaker connective tissue
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms That May Indicate You Need Vaginal Repair
                Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A feeling of heaviness, pressure, or fullness in the vaginal
                  area
                </li>
                <li>
                  A visible or palpable bulge at or near the vaginal opening
                </li>
                <li>
                  Discomfort or pain during intercourse
                </li>
                <li>
                  Difficulty emptying the bladder completely, or a weak urine
                  stream
                </li>
                <li>
                  Urinary leakage, especially with coughing, sneezing, or
                  exercise
                </li>
                <li>
                  Frequent urinary tract infections
                </li>
                <li>
                  Difficulty with bowel movements or a sensation of incomplete
                  emptying
                </li>
                <li>
                  Lower back or pelvic ache that worsens by the end of the day
                </li>
                <li>
                  Symptoms that improve when lying down and worsen with standing
                  or activity
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you are experiencing several of these symptoms, it is
                important to consult a gynaecologist for a detailed pelvic
                examination rather than assuming the discomfort is a normal part
                of ageing or childbirth recovery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Vaginal Prolapse
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Cystocele:</strong> Bladder bulges into the front
                  vaginal wall
                </li>
                <li>
                  <strong>Rectocele:</strong> Rectum bulges into the back
                  vaginal wall
                </li>
                <li>
                  <strong>Uterine prolapse:</strong> Uterus descends into or
                  through the vaginal canal
                </li>
                <li>
                  <strong>Vaginal vault prolapse:</strong> Occurs after
                  hysterectomy, when the top of the vagina loses support and
                  sags downward
                </li>
                <li>
                  <strong>Enterocele:</strong> Small intestine bulges into the
                  upper vaginal wall
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Each type may occur alone or in combination, and the surgical
                approach is tailored based on which structures are affected.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostic Evaluation Before Vaginal Repair Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                A thorough evaluation helps determine the exact type and
                severity of prolapse:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed pelvic examination to assess the degree and location
                  of prolapse
                </li>
                <li>
                  Assessment of pelvic floor muscle strength
                </li>
                <li>
                  Bladder function tests if urinary symptoms are present
                </li>
                <li>
                  Pelvic ultrasound to evaluate the uterus, bladder, and
                  surrounding structures
                </li>
                <li>
                  Discussion of symptom severity, lifestyle impact, and future
                  pregnancy plans
                </li>
                <li>
                  Review of medical history, including previous deliveries or
                  pelvic surgeries
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Surgical Options for Vaginal Repair
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Sacrocolpopexy (Laparoscopic Approach)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Advanced keyhole procedure to repair uterine and vaginal vault
                  prolapse
                </li>
                <li>
                  Uses a supportive mesh to anchor the vaginal vault to a stable
                  ligament near the spine
                </li>
                <li>
                  Provides strong, long-lasting structural support
                </li>
                <li>
                  Minimally invasive with smaller incisions and faster recovery
                  than open surgery
                </li>
                <li>
                  Particularly effective for vault prolapse after hysterectomy
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Anterior and Posterior Vaginal Wall Repair
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Corrects cystocele (front wall) or rectocele (back wall)
                  prolapse
                </li>
                <li>
                  Performed through the vaginal route without external incisions
                </li>
                <li>
                  Strengthens and tightens weakened vaginal tissue and
                  supporting structures
                </li>
                <li>
                  Often combined with other repair procedures for comprehensive
                  correction
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Laparoscopic Hysterectomy with Prolapse Repair
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Considered when uterine prolapse is significant and fertility
                  preservation is not required
                </li>
                <li>
                  Combines uterus removal with pelvic floor reconstruction in
                  the same procedure
                </li>
                <li>
                  Minimally invasive keyhole technique with faster healing than
                  open surgery
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Pelvic Floor Reconstruction
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Comprehensive repair addressing multiple weakened areas
                  simultaneously
                </li>
                <li>
                  Restores overall pelvic support and anatomical alignment
                </li>
                <li>
                  Tailored to each patient&apos;s specific combination of
                  prolapse types
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Laparoscopic Vaginal Repair Surgery?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Smaller incisions and minimal visible scarring compared to
                  open surgery
                </li>
                <li>
                  Reduced blood loss with precision vessel-sealing instruments
                </li>
                <li>
                  Shorter hospital stay, often just 24–48 hours
                </li>
                <li>
                  Lower risk of infection than traditional open procedures
                </li>
                <li>
                  Faster return to daily activities and work
                </li>
                <li>
                  High-definition 3D visualisation allows greater surgical
                  precision
                </li>
                <li>
                  Long-term durability, especially with mesh-supported
                  procedures like sacrocolpopexy
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Vaginal Repair Surgery Recovery Time
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Day 1–2:</strong> Hospital discharge in most
                  laparoscopic cases
                </li>
                <li>
                  <strong>Week 1:</strong> Mild soreness and fatigue; gentle
                  rest and light walking recommended
                </li>
                <li>
                  <strong>Week 2:</strong> Noticeable improvement in comfort;
                  light daily activities resume
                </li>
                <li>
                  <strong>Week 4:</strong> Return to non-strenuous work and
                  most normal routines
                </li>
                <li>
                  <strong>Week 6:</strong> Avoid heavy lifting and strenuous
                  exercise until cleared by your doctor
                </li>
                <li>
                  <strong>Week 6–8:</strong> Full internal healing in most cases
                </li>
                <li>
                  <strong>3 Months:</strong> Doctors often advise waiting before
                  resuming high-impact exercise or heavy physical activity
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Recovery timelines can vary depending on the type and extent of
                prolapse repair performed, and Dr. Priyanka Pachauri tailors the
                recovery plan to each patient&apos;s specific procedure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Smooth Recovery After Vaginal Repair Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Avoid heavy lifting and strenuous activity for at least 6
                  weeks
                </li>
                <li>
                  Practice pelvic floor exercises (Kegels) as advised by your
                  doctor to strengthen support muscles
                </li>
                <li>
                  Avoid constipation by eating a fibre-rich diet and staying
                  well-hydrated
                </li>
                <li>
                  Avoid sexual intercourse until your doctor confirms complete
                  healing
                </li>
                <li>
                  Wear comfortable, loose-fitting clothing during recovery
                </li>
                <li>
                  Attend all follow-up appointments to monitor healing progress
                </li>
                <li>
                  Watch for warning signs like fever, heavy bleeding, or unusual
                  discharge, and contact your doctor immediately
                </li>
                <li>
                  Maintain a healthy weight to reduce long-term pressure on
                  pelvic structures
                </li>
                <li>
                  Avoid prolonged standing or straining in the early recovery
                  weeks
                </li>
                <li>
                  Get adequate rest and arrange support at home during the
                  initial healing period
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Living With Prolapse Before Surgery: Why Early Consultation
                Helps
              </h2>

              <p className="mb-4 text-gray-700">
                Many women delay seeking help for months or even years due to
                embarrassment, but early evaluation offers real advantages:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild prolapse can sometimes be managed with pelvic floor
                  physiotherapy before surgery becomes necessary
                </li>
                <li>
                  Early diagnosis allows for less complex, less invasive
                  treatment options
                </li>
                <li>
                  Untreated prolapse can gradually worsen, increasing
                  pressure-related symptoms over time
                </li>
                <li>
                  Addressing bladder or bowel symptoms early prevents recurrent
                  infections or skin irritation
                </li>
                <li>
                  A timely consultation helps rule out other conditions that may
                  mimic prolapse symptoms
                </li>
                <li>
                  Speaking openly with a gynaecologist removes unnecessary
                  anxiety and clarifies the real treatment options available
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                There is no need to feel embarrassed discussing these symptoms —
                pelvic organ prolapse is a common medical condition, not a
                personal failing, and effective treatment is readily available.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventing Recurrence After Vaginal Repair Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Continue regular pelvic floor exercises even after full
                  recovery
                </li>
                <li>
                  Manage chronic cough or constipation promptly to reduce
                  straining
                </li>
                <li>
                  Maintain a healthy body weight long-term
                </li>
                <li>
                  Avoid heavy lifting habits that place repeated strain on
                  pelvic structures
                </li>
                <li>
                  Attend periodic follow-up check-ups, especially after
                  menopause
                </li>
                <li>
                  Discuss hormone-related vaginal tissue changes with your
                  doctor if you are postmenopausal
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks and Precautions to Discuss With Your Surgeon
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Possible bleeding or infection at the surgical site
                </li>
                <li>
                  Rare risk of mesh-related complications with sacrocolpopexy,
                  discussed thoroughly beforehand
                </li>
                <li>
                  Temporary bladder or bowel function changes during early
                  recovery
                </li>
                <li>
                  Anaesthesia-related risks, reviewed during pre-surgical
                  evaluation
                </li>
                <li>
                  Possible need for combined procedures if multiple types of
                  prolapse are present
                </li>
                <li>
                  Importance of choosing an experienced urogynaecology
                  specialist to minimise complications and ensure durable results
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing and Vaginal Repair Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic organ prolapse can affect confidence, intimacy, and
                  daily comfort, but these effects are treatable, not permanent
                </li>
                <li>
                  Many women feel relief simply from understanding what is
                  happening in their body
                </li>
                <li>
                  Open, judgement-free conversations with your surgeon make the
                  diagnosis and treatment journey far less stressful
                </li>
                <li>
                  Support from family or a partner during recovery can make a
                  meaningful difference
                </li>
                <li>
                  Most women report significant improvement in comfort,
                  confidence, and quality of life after successful repair
                  surgery
                </li>
                <li>
                  It is completely normal to have questions or concerns — a good
                  specialist welcomes them at every step
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri as Your Vaginal Repair Surgery
                Specialist in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced Obstetrician,
                Gynaecologist & IVF Specialist in Moradabad, recognised for her
                expertise in advanced laparoscopic pelvic floor and prolapse
                repair surgery.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  MS (O&G), FMAS, Advanced Infertility Fellowship
                </li>
                <li>
                  Co-leads Shree Advanced Urogynae Clinic, Moradabad,
                  specialising in urogynaecological conditions
                </li>
                <li>
                  Consultant at Ujala Cygnus BrightStar Hospital
                </li>
                <li>
                  Skilled in advanced keyhole sacrocolpopexy for uterine and
                  vaginal vault prolapse repair
                </li>
                <li>
                  Uses high-definition 3D laparoscopic technology for precise,
                  minimally invasive surgery
                </li>
                <li>
                  Provides thorough pre- and post-operative counselling so
                  patients understand every step
                </li>
                <li>
                  Known for a compassionate, judgement-free approach to
                  sensitive pelvic health concerns
                </li>
                <li>
                  Trusted by women across Moradabad and nearby Uttar Pradesh for
                  safe, effective prolapse and vaginal repair care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri for Vaginal Repair Surgery
                Consultation in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you are experiencing symptoms of vaginal prolapse or pelvic
                floor weakness, book a confidential consultation for accurate
                diagnosis and a personalised treatment plan.
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