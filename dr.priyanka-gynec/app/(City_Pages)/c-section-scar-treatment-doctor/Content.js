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

export default function CSectionScarTreatment() {
  const faqs = [
    {
      q: "Who should I see for C-section scar problems?",
      a: "A gynaecologist, since many scar complications are directly related to the uterine and pelvic anatomy involved in the cesarean.",
    },
    {
      q: "Does Dr. Priyanka Pachauri treat C-section scar issues?",
      a: "Yes, she evaluates and treats a range of scar-related concerns, including painful scars, uterine niche, and scar endometriosis.",
    },
    {
      q: "What is a uterine niche?",
      a: "It is a defect in the uterine wall at the site of a previous cesarean, which can cause abnormal bleeding or fertility issues.",
    },
    {
      q: "Can C-section scar pain years later be treated?",
      a: "Yes, persistent scar pain can often be evaluated and managed rather than accepted as permanent.",
    },
    {
      q: "What is scar endometriosis?",
      a: "A rare condition where endometrial-like tissue grows within the C-section scar, causing a painful, cycle-related lump.",
    },
    {
      q: "Does the clinic offer surgical treatment for scar complications?",
      a: "Yes, including 3D laparoscopic surgery and hysteroscopic procedures for complex scar-related issues.",
    },
    {
      q: "How do I book an appointment?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Can a uterine niche affect future pregnancies?",
      a: "Yes, in some cases it can affect fertility or increase certain pregnancy-related risks, which is why evaluation matters.",
    },
    {
      q: "Does the clinic use imaging to diagnose scar problems?",
      a: "Yes, including a Voluson E22 3D/4D ultrasound machine for accurate diagnosis.",
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
                C-Section Scar Treatment Doctor: Understanding and Managing
                Post-Cesarean Scar Problems
              </h1>

              <p className="mb-4 text-gray-700">
                A cesarean delivery leaves behind more than just a memory of
                childbirth — it leaves a scar that, for some women, becomes a
                source of ongoing discomfort, cosmetic concern, or even a
                medical complication years later. While most C-section scars
                heal without major issues, a noticeable number of women
                experience problems ranging from persistent pain and itching to
                more serious conditions like scar endometriosis or a uterine
                niche (isthmocele).
              </p>

              <p className="text-gray-700">
                Finding the right doctor to properly diagnose and treat these
                issues is essential, since C-section scar problems fall
                specifically within a gynaecologist&apos;s area of expertise.
                This article explains the common types of C-section scar
                problems, when they need medical attention, the treatment
                options available, and why Dr. Priyanka Pachauri is a trusted
                choice for C-section scar treatment in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why C-Section Scars Sometimes Cause Long-Term Problems
              </h2>

              <p className="mb-4 text-gray-700">
                A cesarean incision involves cutting through multiple layers of
                tissue, including skin, fat, muscle, and the uterine wall
                itself. Because of this layered healing process, several things
                can go differently than expected:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Individual healing response varies significantly, with some
                  women naturally prone to excessive scar tissue formation
                </li>
                <li>
                  Infection during initial recovery can lead to poorer scar
                  quality and increased risk of complications
                </li>
                <li>
                  Multiple cesareans increase the cumulative risk of
                  scar-related issues, including a uterine niche
                </li>
                <li>
                  Underlying conditions like diabetes can slow healing and
                  increase the risk of scar complications
                </li>
                <li>
                  Improper wound care in the early recovery period can
                  contribute to poor scar formation over time
                </li>
                <li>
                  Genetic predisposition plays a role in whether a person
                  develops keloid or hypertrophic scarring
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Types of C-Section Scar Problems
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. Painful or Sensitive Scars
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Persistent pain, tenderness, or a burning sensation at the
                      scar site, sometimes months or years after delivery
                    </li>
                    <li>Can be caused by nerve entrapment within the scar tissue</li>
                    <li>
                      May worsen with certain movements, tight clothing, or
                      pressure on the area
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Keloid or Hypertrophic Scarring
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Raised, thickened scar tissue that extends beyond the
                      original incision line (keloid) or remains within the
                      incision but appears raised and firm (hypertrophic)
                    </li>
                    <li>Can cause itching, tenderness, or cosmetic concern</li>
                    <li>
                      More common in individuals with a personal or family
                      history of keloid formation
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Scar Endometriosis
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A rare but recognized condition where endometrial-like
                      tissue implants within the C-section scar
                    </li>
                    <li>
                      Typically presents as a painful lump near the scar that
                      becomes more tender around the menstrual cycle
                    </li>
                    <li>
                      Requires proper diagnosis, often through ultrasound or
                      biopsy, and generally needs surgical removal
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Uterine Niche (Isthmocele)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A defect or indentation in the uterine wall at the site of
                      the previous cesarean incision
                    </li>
                    <li>
                      Can cause symptoms like prolonged spotting after periods,
                      pelvic pain, or, in some cases, difficulty conceiving
                    </li>
                    <li>
                      More likely to develop after multiple cesareans or when
                      scar healing was suboptimal
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    5. Adhesions
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Internal scar tissue that can form between organs
                      following surgery
                    </li>
                    <li>
                      May contribute to chronic pelvic pain or, in some cases,
                      fertility difficulties
                    </li>
                    <li>
                      Often only diagnosed through imaging or, in more complex
                      cases, diagnostic laparoscopy
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    6. Scar Infection or Delayed Healing
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Redness, swelling, discharge, or fever in the days or
                      weeks following surgery
                    </li>
                    <li>
                      Requires prompt medical attention, as untreated infection
                      can worsen scar outcomes long-term
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Should Prompt a Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Persistent pain, burning, or itching at the scar site months
                  or years after delivery
                </li>
                <li>A visibly raised, thickened, or rapidly growing scar</li>
                <li>
                  A tender lump near the scar, especially one that changes with
                  the menstrual cycle
                </li>
                <li>
                  Prolonged spotting after periods, particularly if it started
                  after a cesarean delivery
                </li>
                <li>Pelvic pain that seems connected to the scar area</li>
                <li>Difficulty conceiving following a previous cesarean delivery</li>
                <li>
                  Signs of infection, including redness, warmth, swelling, or
                  discharge from the scar
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How C-Section Scar Problems Are Diagnosed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Physical examination of the scar to assess its appearance,
                  texture, and tenderness
                </li>
                <li>
                  Pelvic ultrasound, which can help identify a uterine niche,
                  adhesions, or scar endometriosis
                </li>
                <li>
                  MRI, occasionally used for more detailed evaluation of complex
                  scar-related conditions
                </li>
                <li>
                  Biopsy, in cases where scar endometriosis or another tissue
                  abnormality is suspected
                </li>
                <li>
                  Diagnostic hysteroscopy or laparoscopy, used in more complex
                  cases to directly visualize internal scar-related issues
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for C-Section Scar Problems
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends entirely on the specific type and severity of
                the scar issue:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For Painful or Sensitive Scars
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Topical creams or gels to soften scar tissue and reduce
                      discomfort
                    </li>
                    <li>
                      Silicone sheets or gels, commonly used to improve scar
                      appearance and reduce symptoms over time
                    </li>
                    <li>
                      Steroid injections for particularly raised or symptomatic
                      scars
                    </li>
                    <li>
                      Physical therapy techniques, such as scar massage, to help
                      reduce tissue tightness
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For Keloid or Hypertrophic Scars
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Steroid injections to flatten and soften raised scar
                      tissue
                    </li>
                    <li>Laser therapy to improve scar texture and appearance</li>
                    <li>
                      Surgical revision in more severe cases, though this
                      carries some risk of recurrence
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For Scar Endometriosis
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Surgical excision of the affected tissue, typically the
                      definitive treatment
                    </li>
                    <li>
                      Hormonal therapy in some cases to help manage symptoms
                      alongside surgical planning
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For Uterine Niche (Isthmocele)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Hysteroscopic repair for smaller niches causing symptoms
                      like abnormal bleeding
                    </li>
                    <li>
                      Laparoscopic repair for larger or more complex niches,
                      particularly when fertility is a concern
                    </li>
                    <li>
                      Close monitoring in cases where symptoms are mild and
                      surgery is not immediately necessary
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For Adhesions
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Laparoscopic adhesiolysis, a minimally invasive procedure
                      to carefully remove or separate adhesions
                    </li>
                    <li>
                      Pain management strategies alongside surgical planning when
                      adhesions are contributing to chronic pain
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Gynaecologist Is the Right Specialist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Direct familiarity with cesarean anatomy, since gynaecologists
                  perform and manage cesarean deliveries themselves
                </li>
                <li>
                  Ability to distinguish between simple cosmetic scarring and
                  deeper gynaecological complications like scar endometriosis or
                  a uterine niche
                </li>
                <li>
                  Access to relevant diagnostic tools, including pelvic
                  ultrasound and hysteroscopy
                </li>
                <li>
                  Surgical expertise in laparoscopic and hysteroscopic
                  techniques, often required for more complex scar-related
                  repairs
                </li>
                <li>
                  Ability to consider fertility implications when planning
                  treatment, particularly important for women hoping to conceive
                  again
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – C-Section Scar Treatment Doctor in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers comprehensive
                evaluation and treatment for C-section scar-related concerns in
                Moradabad. According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her clinic is equipped to manage both straightforward and more
                complex scar-related issues.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Key Features of Care
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      3D laparoscopic surgery, useful for adhesiolysis and
                      complex uterine niche repair with minimally invasive
                      techniques
                    </li>
                    <li>
                      Diagnostic and therapeutic hysteroscopy, suited for
                      evaluating and treating certain uterine niche and abnormal
                      bleeding cases
                    </li>
                    <li>
                      Advanced imaging with a Voluson E22 3D/4D ultrasound
                      machine, supporting accurate diagnosis of scar-related
                      complications
                    </li>
                    <li>
                      A &quot;Her Health First&quot; approach, ensuring symptoms
                      are taken seriously and explained clearly
                    </li>
                    <li>
                      Continuity of care, since the same team that manages
                      cesarean deliveries is also positioned to evaluate and
                      treat scar complications that arise later
                    </li>
                    <li>
                      Fertility-focused evaluation, important for women whose
                      scar-related issues may be affecting their ability to
                      conceive
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Why Patients Choose the Clinic
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Patient testimonials reflect a consistent focus on
                      thorough evaluation and clear communication
                    </li>
                    <li>
                      Both essential when dealing with a scar-related issue that
                      may otherwise be dismissed or overlooked
                    </li>
                    <li>
                      The clinic is located in Gandhi Nagar, Moradabad, making
                      it accessible for follow-up care after a previous cesarean
                      delivered at various hospitals across the city
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Caring for Your C-Section Scar in the Early Weeks
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Keep the incision clean and dry, following your doctor&apos;s
                  specific wound care instructions
                </li>
                <li>
                  Watch closely for early signs of infection, such as
                  increasing redness, warmth, swelling, or discharge, and
                  report these promptly
                </li>
                <li>
                  Avoid strenuous activity or heavy lifting during the initial
                  recovery period, as recommended by your doctor
                </li>
                <li>
                  Wear loose, breathable clothing to avoid unnecessary friction
                  or pressure on the healing incision
                </li>
                <li>
                  Begin gentle scar massage only once fully healed and cleared
                  by your doctor
                </li>
                <li>
                  Attend all scheduled postnatal follow-up visits, since early
                  detection of healing issues is much easier to manage
                </li>
                <li>
                  Ask your doctor about silicone-based scar treatments if
                  you are concerned about your scar&apos;s healing trajectory
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Long-Term Scar Monitoring Tips
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Note any changes in size, color, or texture of the scar over
                  the months and years following delivery
                </li>
                <li>
                  Track your menstrual cycle alongside any scar-related pain,
                  since cyclical pain can be an important diagnostic clue for
                  conditions like scar endometriosis
                </li>
                <li>
                  Mention scar concerns during routine gynaecological
                  check-ups, even if they seem minor
                </li>
                <li>
                  Keep a record of your cesarean details, including the type of
                  incision, if known
                </li>
                <li>
                  Do not dismiss new symptoms as &quot;just scar tissue&quot;
                  without a proper evaluation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Treatment Rather Than Wait
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  If scar pain or discomfort has persisted for more than a few
                  months after delivery
                </li>
                <li>
                  If you notice a new lump, swelling, or change in the
                  scar&apos;s appearance
                </li>
                <li>
                  If you experience prolonged spotting after periods that did
                  not occur before your cesarean
                </li>
                <li>
                  If you are planning another pregnancy and have concerns about
                  a previous cesarean scar
                </li>
                <li>
                  If a scar issue is affecting your confidence, comfort, or
                  daily activities
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About C-Section Scar Problems
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Scar pain years after delivery is just something you have to live with.&quot;</strong>{" "}
                  Persistent pain can often be evaluated and treated rather than
                  accepted as permanent.
                </li>
                <li>
                  <strong>&quot;A lump near the scar is always just scar tissue.&quot;</strong>{" "}
                  Some lumps, particularly those that change with the menstrual
                  cycle, may indicate scar endometriosis and should be
                  evaluated.
                </li>
                <li>
                  <strong>&quot;Only cosmetic dermatologists treat C-section scars.&quot;</strong>{" "}
                  Many scar-related complications are gynaecological in nature
                  and require a gynaecologist&apos;s evaluation.
                </li>
                <li>
                  <strong>&quot;A uterine niche is not a real medical concern.&quot;</strong>{" "}
                  A niche can cause abnormal bleeding and, in some cases,
                  fertility difficulties, making it a legitimate condition worth
                  evaluating.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                To consult Dr. Priyanka Pachauri for C-section scar treatment in
                Moradabad, reach out through any of the following:
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