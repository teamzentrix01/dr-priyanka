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

export default function InfertilitySpecialistCostIndia() {
  const faqs = [
    {
      q: "How much does an infertility specialist consultation cost in India?",
      a: "It varies by doctor and city, so confirm the current fee with the clinic.",
    },
    {
      q: "What is the cost of IUI in India?",
      a: "Commonly about ₹5,000 to ₹35,000 per cycle, depending on the clinic and medicines.",
    },
    {
      q: "What is the cost of IVF in India?",
      a: "Often between ₹80,000 and ₹2.5 lakh per cycle, with medicines sometimes extra.",
    },
    {
      q: "Is IVF always necessary?",
      a: "No. Many couples conceive with medicines, surgery or IUI.",
    },
    {
      q: "Are medicines included in the price?",
      a: "Not always. Ask whether they are part of the package.",
    },
    {
      q: "Does insurance cover fertility treatment?",
      a: "Coverage is limited. Check your policy for inclusions and exclusions.",
    },
    {
      q: "How can I reduce treatment costs?",
      a: "Start early, test both partners and ask for an itemised estimate.",
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
                Infertility Specialist Cost in India: A Complete Guide to IUI, IVF and Treatment Expenses
              </h1>

              <p className="mb-4 text-gray-700">
                Cost is one of the first worries couples have when they decide
                to see a fertility doctor. Online figures range from a few
                thousand rupees to several lakhs, which makes planning
                confusing. The truth is that fertility treatment is not one
                price. It depends on your diagnosis, the treatment chosen, the
                medicines needed and the number of attempts.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what you may spend in India, what is usually
                included, what can add to the bill and how to plan wisely. It
                also explains how a transparent consultation works at Dr.
                Priyanka Gynaec in Moradabad.
              </p>
            </div>

            {/* Section 2 — Why Costs Vary */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Fertility Treatment Costs Vary So Much
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Different causes need different treatments. A woman with irregular ovulation may need only tablets, while a couple with blocked tubes may need IVF.</li>
                <li>Different cities have different price levels. Metro clinics are often costlier than smaller cities.</li>
                <li>Different clinics offer different technology. Advanced labs and equipment can raise costs.</li>
                <li>Different medicines are used. Injection doses vary widely by age and ovarian response.</li>
                <li>Different packages include different things. Some include scans and medicines, while others charge separately.</li>
                <li>Response to treatment is individual. Extra monitoring or an additional cycle changes the total.</li>
              </ul>
            </div>

            {/* Section 3 — Step 1 Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 1: The Consultation and Basic Tests
              </h2>

              <p className="mb-4 text-gray-700">
                Every fertility journey begins with an evaluation of both
                partners.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Is Usually Included
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Doctor consultation and history</li>
                <li>Pelvic examination</li>
                <li>Transvaginal ultrasound</li>
                <li>Blood tests such as AMH, thyroid, prolactin and other hormones</li>
                <li>Semen analysis for the male partner</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Typical Cost Points
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation fee: commonly a few hundred to a couple of thousand rupees, depending on the doctor and city</li>
                <li>Basic ultrasound: a modest, separate charge in many clinics</li>
                <li>Hormone blood panel: usually one of the larger early costs</li>
                <li>Semen analysis: a relatively small charge, though advanced DNA testing costs more</li>
              </ul>

              <p className="text-gray-700">
                Tip: bring old reports so that tests are not repeated
                unnecessarily.
              </p>
            </div>

            {/* Section 4 — Step 2 Further Tests */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 2: Further Diagnostic Procedures
              </h2>

              <p className="mb-4 text-gray-700">
                Some couples need one or more additional tests.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>HSG or sonosalpingography: checks whether the fallopian tubes are open</li>
                <li>Diagnostic hysteroscopy: looks inside the uterine cavity</li>
                <li>Diagnostic laparoscopy: examines the pelvis when endometriosis or tubal disease is suspected</li>
                <li>Advanced sperm DNA integrity testing: assesses sperm quality beyond routine analysis</li>
                <li>Genetic or immunological tests: only when specifically indicated</li>
              </ul>

              <p className="text-gray-700">
                Not every couple needs every test. A good specialist orders tests
                based on your story, which also protects your budget.
              </p>
            </div>

            {/* Section 5 — Step 3 Treatment Costs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 3: Treatment Cost by Type
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Lifestyle Care and Medicines
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Who it suits: women with PCOS, thyroid issues or mild ovulation problems</li>
                <li>What it includes: diet and lifestyle guidance, folic acid, thyroid or prolactin medicines</li>
                <li>Cost level: generally the lowest of all options</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Ovulation Induction With Timed Intercourse
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Who it suits: women with irregular or absent ovulation</li>
                <li>What it includes: tablets or injections, plus follicle scans to time intercourse</li>
                <li>Cost drivers: tablets cost far less than injections; the number of scans required adds to the bill</li>
                <li>Cost level: low to moderate</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. IUI (Intrauterine Insemination)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Who it suits: mild male factor, unexplained infertility and some ovulation problems, with at least one open tube</li>
                <li>What it includes: ovulation medicines, scans, sperm preparation and the insemination itself</li>
                <li>Indicative range: commonly quoted from around ₹5,000 to ₹35,000 per cycle across India</li>
                <li>Cost drivers: natural cycle vs medicine-stimulated cycle, tablets vs injections, number of scans, one or two inseminations in a cycle</li>
                <li>Success reality: about 10–20% per cycle, so many couples plan for up to three cycles.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Minimally Invasive Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hysteroscopic procedures: remove polyps, septum or adhesions without cuts</li>
                <li>Laparoscopic cystectomy: removes ovarian cysts while preserving fertility</li>
                <li>Laparoscopic myomectomy: removes fibroids while preserving the uterus</li>
                <li>Endometriosis excision: relieves pain and improves the pelvic environment</li>
                <li>Cost drivers: type and complexity of the procedure, anaesthesia, hospital stay and equipment</li>
                <li>Benefit: small incisions, less pain and faster recovery. Treating a structural problem can sometimes avoid the need for IVF.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. IVF (In Vitro Fertilisation)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Who it suits: blocked tubes, severe male factor, endometriosis, advanced age or failed IUI</li>
                <li>Indicative range: commonly quoted from about ₹80,000 to ₹2.5 lakh per cycle in India, often excluding some items</li>
                <li>What a cycle generally involves: ovarian stimulation injections, regular scans and blood tests, egg collection under sedation, laboratory fertilisation and embryo culture, embryo transfer</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. ICSI (Intracytoplasmic Sperm Injection)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What it is: a single sperm is injected into each egg</li>
                <li>Who it suits: severe male infertility or earlier fertilisation failure</li>
                <li>Cost impact: usually an additional charge on top of the IVF cycle</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Frozen Embryo Transfer (FET)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What it is: transfer of previously frozen embryos</li>
                <li>Indicative range: often quoted from about ₹50,000 to ₹90,000 per cycle</li>
                <li>Other costs: embryo freezing and storage charges, which may be yearly</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Fertility Preservation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Egg or embryo freezing: for those delaying pregnancy or facing medical treatment</li>
                <li>Cost drivers: stimulation cycle, egg collection, freezing and annual storage</li>
              </ul>
            </div>

            {/* Section 6 — Medicine Costs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicine Costs: The Part Many Couples Forget
              </h2>

              <p className="mb-4 text-gray-700">
                Medicines can be a major portion of the total, especially in
                IVF.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Oral ovulation tablets: low cost</li>
                <li>Gonadotropin injections: cost varies widely depending on dose and duration</li>
                <li>Trigger injection: a single, fixed-timing injection</li>
                <li>Progesterone support: continues after transfer</li>
                <li>Supplements: such as folic acid, vitamin D and antioxidants</li>
              </ul>

              <p className="mb-4 text-gray-700">Ask your doctor:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Which medicines are included in the package, and which are not?</li>
                <li>Are there lower-cost, equally effective alternatives?</li>
                <li>Will the dose change based on my response?</li>
              </ul>
            </div>

            {/* Section 7 — Hidden Costs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hidden and Additional Costs to Plan For
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Extra follicle monitoring scans</li>
                <li>Repeat blood tests</li>
                <li>Anaesthesia fees for egg collection</li>
                <li>Embryo freezing and yearly storage</li>
                <li>Additional laboratory techniques, if needed</li>
                <li>Travel, accommodation and time off work</li>
                <li>Counselling sessions</li>
                <li>Another cycle if the first one is unsuccessful</li>
                <li>Antenatal care and delivery after conception</li>
              </ul>

              <p className="text-gray-700">
                Always ask for an itemised estimate that clearly shows what is
                covered and what is extra.
              </p>
            </div>

            {/* Section 8 — IUI vs IVF */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                IUI vs IVF: A Cost and Value Comparison
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                IUI
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Lower cost per cycle</li>
                <li>Less invasive</li>
                <li>Lower success rate per cycle</li>
                <li>May need several cycles</li>
                <li>Suitable only when tubes are open and sperm parameters are adequate</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                IVF
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Higher cost per cycle</li>
                <li>More intensive process</li>
                <li>Higher success rate per cycle, especially in younger women</li>
                <li>Works even with blocked tubes or severe male factor</li>
                <li>Allows embryo selection and freezing</li>
              </ul>
            </div>

            {/* Section 9 — Factors Affecting Cost */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Affect Your Total Cost
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your age: older women may need more medicines and more cycles.</li>
                <li>Ovarian reserve: a lower reserve may need higher doses.</li>
                <li>Cause of infertility: simple vs complex diagnoses</li>
                <li>Male factor severity: may need ICSI or advanced testing</li>
                <li>Number of cycles needed: very individual</li>
                <li>Clinic technology: advanced laboratories carry higher operating costs.</li>
                <li>City and location: metros typically charge more.</li>
                <li>Package vs pay-per-step: choose what suits your situation.</li>
                <li>Need for surgery before IVF: sometimes recommended</li>
              </ul>
            </div>

            {/* Section 10 — Insurance */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Does Health Insurance Cover Fertility Treatment?
              </h2>

              <p className="mb-4 text-gray-700">
                Coverage in India is limited and varies by policy.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Some plans cover diagnostic tests or surgical procedures related to infertility, while many exclude assisted reproduction.</li>
                <li>Read the policy wording on waiting periods, sub-limits and exclusions.</li>
                <li>Ask the clinic&apos;s billing team for documents that insurers commonly need.</li>
                <li>Check whether your employer offers any fertility benefit.</li>
              </ul>
            </div>

            {/* Section 11 — Smart Ways */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Smart Ways to Manage Fertility Treatment Costs
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Start early. Younger age often means fewer cycles.</li>
                <li>Get both partners tested at the beginning.</li>
                <li>Ask for a written, itemised estimate.</li>
                <li>Begin with the simplest effective treatment, as advised by your doctor.</li>
                <li>Bring previous reports to avoid repeat tests.</li>
                <li>Compare packages carefully, including what is excluded.</li>
                <li>Ask about generic or alternative medicines where appropriate.</li>
                <li>Improve lifestyle factors that cost little but help outcomes.</li>
                <li>Plan for more than one cycle emotionally and financially.</li>
                <li>Avoid guaranteed-success claims, which are a warning sign.</li>
              </ul>
            </div>

            {/* Section 12 — Warning Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs of a Clinic to Avoid
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Promises of guaranteed pregnancy</li>
                <li>Pressure to start IVF immediately without a proper evaluation</li>
                <li>Unclear or constantly changing quotes</li>
                <li>No written estimate</li>
                <li>Reluctance to discuss success rates honestly</li>
                <li>Ignoring male-factor testing</li>
              </ul>
            </div>

            {/* Section 13 — Why Choose Dr Priyanka */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Couples Choose Dr. Priyanka Gynaec in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec follows the philosophy of &quot;Her Health
                First&quot;, combining expertise with clear communication.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF care: personalised plans for each couple</li>
                <li>GERI time-lapse imaging incubator: advanced embryo monitoring</li>
                <li>AI-powered semen analysis: includes DNA integrity testing</li>
                <li>3D laparoscopic surgery: treats cysts, fibroids, endometriosis and tubal factors</li>
                <li>Hysteroscopy services: diagnostic hysteroscopy and polyp removal</li>
                <li>3D/4D ultrasound: detailed imaging for fertility monitoring and pregnancy</li>
                <li>One team from conception to delivery: fertility care, antenatal services, normal delivery support and newborn care</li>
                <li>Unhurried consultations: your questions, including cost, are welcome from the first visit</li>
              </ul>
            </div>

            {/* Section 14 — How to Get Estimate */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Get a Personalised Cost Estimate
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Share your previous reports on WhatsApp before your visit.</li>
                <li>Bring both partners for the first consultation.</li>
                <li>Ask the team to explain the plan, the likely number of visits and the expected expenses.</li>
                <li>Request the estimate in writing.</li>
                <li>Please contact the clinic directly for current consultation fees and treatment pricing.</li>
              </ul>
            </div>

            {/* Section 15 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation Today
              </h2>

              <p className="mb-6 text-black">
                Cost should never stop you from asking questions. Start with an
                honest conversation and a clear plan.
              </p>

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

            {/* Section 16 — FAQs */}
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