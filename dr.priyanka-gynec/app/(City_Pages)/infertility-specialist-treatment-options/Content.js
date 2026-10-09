import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function InfertilitySpecialistTreatmentOptions() {
  const faqs = [
    {
      q: "What are the main treatment options for infertility?",
      a: "Lifestyle care, ovulation induction, surgery, IUI, IVF, ICSI and embryo freezing.",
    },
    {
      q: "Do I need IVF straight away?",
      a: "Not always. Treatment depends on your cause, age and test results.",
    },
    {
      q: "What is the difference between IUI and IVF?",
      a: "IUI places sperm in the uterus. IVF fertilises eggs in a laboratory.",
    },
    {
      q: "Can PCOS be treated so I can conceive?",
      a: "Yes. Lifestyle changes and ovulation induction help many women.",
    },
    {
      q: "When is laparoscopy or hysteroscopy needed?",
      a: "When cysts, fibroids, polyps, endometriosis or adhesions affect fertility.",
    },
    {
      q: "What is ICSI?",
      a: "A single sperm is injected into an egg, mainly for male infertility.",
    },
    {
      q: "Can male infertility be treated?",
      a: "Yes. Options range from lifestyle changes and medicines to ICSI.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Infertility Specialist Treatment Options: From Simple Steps to Advanced Care
              </h1>

              <p className="mb-4 text-gray-700">
                Hearing the word &quot;infertility&quot; can feel overwhelming,
                but it is not the end of your dream of parenthood. It is a
                medical condition, and in most cases it has a treatment path. The
                challenge is knowing which option suits you.
              </p>

              <p className="mb-4 text-gray-700">
                A good infertility specialist does not begin with the most
                advanced treatment. They first find the cause, then match the
                treatment to your diagnosis, your age and how long you have been
                trying. This guide walks you through every major option, from
                simple lifestyle steps to IVF, and explains who each one suits.
              </p>
            </div>

            {/* Section 2 — How a Specialist Chooses */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Specialist Chooses Your Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment is never one-size-fits-all. Your doctor will look at
                several things.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cause of infertility: ovulation, tubes, uterus, sperm or unexplained</li>
                <li>Your age: especially the woman&apos;s age and ovarian reserve</li>
                <li>Duration of trying: the longer the gap, the less time to wait</li>
                <li>Previous treatments: what has already been tried</li>
                <li>Test results of both partners</li>
                <li>General health: weight, thyroid, sugar and other conditions</li>
                <li>Your preferences: emotional readiness and budget</li>
              </ul>

              <p className="text-gray-700">
                The guiding principle: start with the simplest effective option,
                and move to advanced treatment when the evidence supports it.
              </p>
            </div>

            {/* Section 3 — Treatment Ladder */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Treatment Ladder at a Glance
              </h2>

              <p className="mb-4 text-gray-700">
                Think of treatment as a ladder. Many couples succeed on the
                first rungs.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Step 1: lifestyle changes and treating underlying conditions</li>
                <li>Step 2: ovulation induction with timed intercourse</li>
                <li>Step 3: minimally invasive surgery to correct structural problems</li>
                <li>Step 4: IUI (intrauterine insemination)</li>
                <li>Step 5: IVF or ICSI</li>
                <li>Step 6: frozen embryo transfer and fertility preservation when relevant</li>
              </ul>

              <p className="text-gray-700">
                Some couples skip steps. For example, blocked tubes or severe
                male factor may point directly to IVF.
              </p>
            </div>

            {/* Section 4 — Step 1 Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 1: Lifestyle Changes and Treating Underlying Conditions
              </h2>

              <p className="mb-4 text-gray-700">
                This is the foundation of every plan, and it can be powerful by
                itself.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle Measures
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reach and maintain a healthy weight</li>
                <li>Eat a balanced diet with vegetables, fruit, pulses, nuts and whole grains</li>
                <li>Exercise moderately and regularly</li>
                <li>Stop smoking and tobacco</li>
                <li>Limit alcohol and caffeine</li>
                <li>Sleep 7–8 hours nightly</li>
                <li>Reduce stress through yoga, walking or meditation</li>
                <li>Start folic acid before trying to conceive</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical Conditions That May Need Treatment First
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid disorders</li>
                <li>High prolactin</li>
                <li>Diabetes or insulin resistance</li>
                <li>Pelvic infections</li>
                <li>Nutritional deficiencies such as vitamin D or iron</li>
              </ul>

              <p className="mb-2 text-gray-700">Who benefits most:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Women with PCOS, obesity or thyroid problems, and men with lifestyle-related sperm problems.</li>
              </ul>

              <p className="text-gray-700">
                Why it matters: even a modest weight loss in overweight women
                with PCOS can restore regular ovulation in some cases.
              </p>
            </div>

            {/* Section 5 — Step 2 Ovulation Induction */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 2: Ovulation Induction
              </h2>

              <p className="mb-4 text-gray-700">
                Many women struggle to conceive because they do not ovulate
                regularly. This is common in PCOS.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What it is: medicines that help the ovaries mature and release an egg</li>
                <li>How it is given: oral tablets first, and injections when needed</li>
                <li>Monitoring: follicle-tracking ultrasounds to check the response and time intercourse</li>
                <li>Who it suits: women with irregular, infrequent or absent ovulation</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Advantages
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Simple and less invasive</li>
                <li>Lower cost than advanced treatments</li>
                <li>Often effective in PCOS</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Safety Points
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Needs proper monitoring to avoid multiple follicles</li>
                <li>Should always be guided by a doctor</li>
              </ul>
            </div>

            {/* Section 6 — Step 3 Surgery */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 3: Minimally Invasive Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                When the problem is structural, correcting it can restore natural
                fertility or improve the success of other treatments.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hysteroscopy
              </h3>

              <p className="mb-2 text-gray-700">
                What it is: a thin camera passed through the vagina and cervix
                to see inside the uterus
              </p>

              <p className="mb-2 text-gray-700">Used to treat:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uterine polyps</li>
                <li>A uterine septum</li>
                <li>Intrauterine adhesions</li>
                <li>Some fibroids inside the cavity</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Advantages: no cuts, quick recovery and often a day-care
                procedure
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopy (Keyhole Surgery)
              </h3>

              <p className="mb-2 text-gray-700">
                What it is: surgery through small incisions using a camera and
                fine instruments
              </p>

              <p className="mb-2 text-gray-700">Used to treat:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovarian cysts: laparoscopic cystectomy removes the cyst while preserving healthy ovarian tissue</li>
                <li>Fibroids: laparoscopic myomectomy removes fibroids while preserving the uterus</li>
                <li>Endometriosis: excision of disease and adhesions to relieve pain and improve fertility</li>
                <li>Tubal problems: adhesion removal and tubal assessment</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Advantages
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Small incisions</li>
                <li>Less pain</li>
                <li>Shorter hospital stay</li>
                <li>Faster return to normal life</li>
              </ul>

              <p className="mb-4 text-gray-700">
                3D laparoscopy: gives the surgeon enhanced depth perception for
                precise work.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                When Surgery Is Advised
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain or symptoms alongside infertility</li>
                <li>Abnormal findings on ultrasound or hysteroscopy</li>
                <li>Failed treatment cycles with a suspected structural cause</li>
              </ul>

              <p className="text-gray-700">
                Not everyone needs surgery. It is recommended only when there is
                a clear reason.
              </p>
            </div>

            {/* Section 7 — Step 4 IUI */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 4: IUI (Intrauterine Insemination)
              </h2>

              <p className="mb-4 text-gray-700">
                What it is: washed and concentrated sperm is placed directly into
                the uterus around ovulation
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How the Cycle Works
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovulation is stimulated or monitored</li>
                <li>The male partner provides a semen sample</li>
                <li>The sample is prepared in the laboratory</li>
                <li>A thin catheter places sperm in the uterus</li>
                <li>The procedure takes a few minutes and usually needs no anaesthesia</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Who It Suits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild male factor</li>
                <li>Unexplained infertility</li>
                <li>Cervical factor</li>
                <li>Some ovulation problems</li>
              </ul>

              <p className="mb-2 text-gray-700">Requirements:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>At least one open fallopian tube and adequate sperm quality</li>
              </ul>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Success rate: commonly about 10–20% per cycle, so several cycles may be advised</li>
                <li>Advantages: simple, less invasive and lower cost than IVF</li>
                <li>Limitations: not suitable for blocked tubes or severe male infertility</li>
              </ul>
            </div>

            {/* Section 8 — Step 5 IVF */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 5: IVF (In Vitro Fertilisation)
              </h2>

              <p className="mb-4 text-gray-700">
                IVF is a powerful option when other treatments are unlikely to
                work or have not worked.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How IVF Works
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovarian stimulation: injections help several eggs mature.</li>
                <li>Monitoring: regular scans and blood tests track progress.</li>
                <li>Egg collection: eggs are retrieved under sedation.</li>
                <li>Fertilisation: eggs and sperm are combined in the laboratory.</li>
                <li>Embryo culture: embryos grow for a few days under controlled conditions.</li>
                <li>Embryo transfer: the best embryo is placed in the uterus.</li>
                <li>Pregnancy test: done about two weeks later.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Who Is Advised IVF
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blocked or damaged fallopian tubes</li>
                <li>Severe male factor infertility</li>
                <li>Endometriosis not responding to other care</li>
                <li>Advanced maternal age</li>
                <li>Low ovarian reserve</li>
                <li>Failed IUI cycles</li>
                <li>Unexplained infertility that persists</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Modern Technology That Supports IVF
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Time-lapse embryo monitoring: embryos are observed continuously without being removed from the incubator, which can help select the healthiest embryo.</li>
                <li>Advanced sperm testing: assessment of DNA integrity gives a deeper picture of male fertility.</li>
                <li>Freeze-all strategies: embryos can be frozen and transferred in a later, better-prepared cycle.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                ICSI (Intracytoplasmic Sperm Injection)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What it is: a single sperm is injected directly into each egg</li>
                <li>Who it suits: severe male infertility, very low sperm count, poor motility or earlier fertilisation failure</li>
                <li>Advantage: helps fertilisation when natural fertilisation in the dish is unlikely</li>
              </ul>
            </div>

            {/* Section 9 — Step 6 FET */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 6: Frozen Embryo Transfer and Fertility Preservation
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Frozen Embryo Transfer (FET)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uses embryos stored from an earlier cycle</li>
                <li>Lets the uterus be prepared in a calm, natural or medicated cycle</li>
                <li>Often gives results comparable to fresh transfer</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Egg or Embryo Freezing
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Helps women who wish to delay pregnancy</li>
                <li>Useful before treatments that may affect fertility</li>
                <li>Works best when done at a younger age</li>
              </ul>
            </div>

            {/* Section 10 — Male Infertility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Male Infertility
              </h2>

              <p className="mb-4 text-gray-700">
                Male factors are common, and many are treatable.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Lifestyle correction: quitting tobacco, reducing alcohol, losing weight and avoiding excess heat</li>
                <li>Medical treatment: for infections or hormonal imbalance</li>
                <li>Antioxidants and supplements: only when advised by a doctor</li>
                <li>Varicocele treatment: surgery or other procedures in selected cases</li>
                <li>IUI: for mild abnormalities</li>
                <li>IVF with ICSI: for moderate to severe problems</li>
                <li>Surgical sperm retrieval: when no sperm are present in the ejaculate but production may still occur</li>
              </ul>

              <p className="text-gray-700">
                Important: both partners should be evaluated at the start. It
                saves valuable time.
              </p>
            </div>

            {/* Section 11 — Choosing Between Options */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing Between Options: A Simple Guide
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular periods, PCOS: lifestyle plus ovulation induction, then IUI if needed</li>
                <li>Blocked tubes: IVF, or tubal surgery in selected cases</li>
                <li>Fibroid or polyp affecting the cavity: hysteroscopy or laparoscopy first</li>
                <li>Endometriosis: surgery for pain and disease, then fertility treatment as advised</li>
                <li>Mild male factor: lifestyle correction and IUI</li>
                <li>Severe male factor: IVF with ICSI</li>
                <li>Unexplained infertility: IUI first, then IVF</li>
                <li>Age 38 or above: faster progression to IVF is often advised</li>
                <li>Low ovarian reserve: earlier, more intensive treatment</li>
              </ul>
            </div>

            {/* Section 12 — What Influences Success */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Influences Your Chances of Success
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Age of the woman: the strongest factor</li>
                <li>Ovarian reserve: quantity and quality of eggs</li>
                <li>Sperm quality and DNA health</li>
                <li>Cause and duration of infertility</li>
                <li>Uterine health</li>
                <li>Lifestyle and general health</li>
                <li>Choosing the right treatment at the right time</li>
                <li>Quality of the laboratory and the care team</li>
              </ul>

              <p className="text-gray-700">
                No ethical specialist can guarantee a pregnancy. Be cautious
                about any clinic that does.
              </p>
            </div>

            {/* Section 13 — Common Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Infertility Treatment
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: infertility is always the woman&apos;s fault. Fact: male factors are involved in roughly one-third of cases.</li>
                <li>Myth: IVF babies are not &quot;natural.&quot; Fact: IVF babies are healthy children, like any others.</li>
                <li>Myth: IVF is the only solution. Fact: many couples conceive with simpler treatments.</li>
                <li>Myth: stress alone causes infertility. Fact: stress can contribute, but it is rarely the only reason.</li>
                <li>Myth: you should wait years before seeing a doctor. Fact: early evaluation improves your options.</li>
              </ul>
            </div>

            {/* Section 14 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supporting Your Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Feeling anxious, sad or frustrated is normal.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk openly with your partner and treat the journey as shared.</li>
                <li>Avoid comparing your path with others.</li>
                <li>Take planned breaks between cycles if you need them.</li>
                <li>Consider counselling when stress feels heavy.</li>
                <li>Celebrate each small step forward.</li>
              </ul>
            </div>

            {/* Section 15 — Why Choose Dr Priyanka */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Couples Choose Dr. Priyanka Gynaec in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec brings fertility care, gynaecological
                surgery and maternity services together under the philosophy
                &quot;Her Health First&quot;.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF services: personalised plans for each couple</li>
                <li>GERI time-lapse imaging incubator: advanced embryo monitoring</li>
                <li>AI-powered semen analysis: includes DNA integrity testing</li>
                <li>3D laparoscopic surgery: cystectomy, myomectomy and endometriosis surgery</li>
                <li>Hysteroscopy services: diagnostic hysteroscopy and polyp removal</li>
                <li>3D/4D ultrasound: detailed imaging during treatment and pregnancy</li>
                <li>Complete journey: from the first test to antenatal care, normal delivery and newborn support</li>
                <li>Unhurried consultations: you are heard before any plan is made</li>
              </ul>
            </div>

            {/* Section 16 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Fertility Consultation Today
              </h2>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 17 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}