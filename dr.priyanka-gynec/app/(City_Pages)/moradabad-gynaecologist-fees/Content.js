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

export default function MoradabadGynaecologistFees() {
  const faqs = [
    {
      q: "Are government hospital gynaecologist fees always cheaper than private clinics?",
      a: "Generally yes, though private clinics often offer shorter wait times and more personalized, technology-supported care.",
    },
    {
      q: "Why do private gynaecologist fees vary so much between clinics?",
      a: "Differences often reflect the doctor's experience, technology used, and how much personalized time is included in each visit.",
    },
    {
      q: "Should I compare fees before or after checking reviews?",
      a: "Ideally both together — a fee only makes sense in context of the care quality and experience patients report.",
    },
    {
      q: "Are pregnancy care fees usually charged per visit or as a package?",
      a: "Many clinics offer bundled pregnancy care packages covering multiple visits, rather than charging separately each time.",
    },
    {
      q: "Is it worth paying more for a gynaecologist with advanced technology?",
      a: "For complex cases, surgery, or fertility treatment, advanced technology can meaningfully improve accuracy and outcomes.",
    },
    {
      q: "How can I avoid unexpected charges when comparing fees?",
      a: "Ask clinics directly what's included in their quoted fee and get any surgery-related costs itemized separately.",
    },
    {
      q: "Does gynaecologistmoradabad.com publish specific fee amounts?",
      a: "No, specific fees aren't listed; contacting the clinic directly is the best way to get a current quote.",
    },
    {
      q: "How can I contact Dr. Priyanka Gynaec to compare fees?",
      a: "Call +91 90797 65578, WhatsApp +91 89796 70705, email drpriyankagynec@gmail.com, or visit gynaecologistmoradabad.com.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "What's the smartest first step when comparing gynaecologist fees?",
      a: "List your specific need, call a few clinics directly, and compare both the fee and what's included before deciding.",
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
                Moradabad Gynaecologist Fees: A Comparison Guide Before You Book
              </h1>

              <p className="mb-4 text-gray-700">
                Trying to compare Moradabad gynaecologist fees before choosing a
                doctor can feel confusing, since pricing isn&apos;t standardized
                across clinics. This guide takes a comparison-focused approach —
                looking at how fees typically differ between clinic types,
                experience levels, and treatment categories — so you can
                evaluate your options more confidently rather than just picking
                based on a single number.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Comparing Fees the Right Way Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Simply asking &quot;how much does a gynaecologist cost in
                Moradabad&quot; can be misleading, because:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A single number rarely reflects the full picture —
                  consultation, tests, and treatment are usually priced
                  separately.
                </li>
                <li>
                  Comparing across clinic types (government, private individual
                  practice, larger private hospital) involves very different fee
                  structures and included services.
                </li>
                <li>
                  The cheapest option isn&apos;t always the best value if it
                  means less time with the doctor, fewer diagnostic facilities
                  on-site, or less experience with your specific concern.
                </li>
                <li>
                  Fee comparison should be paired with service comparison — what
                  you&apos;re actually getting for that fee matters as much as
                  the number itself.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Comparing Fee Structures: Government vs. Private Gynaecology
                Care
              </h2>

              <p className="mb-4 text-gray-700">
                Broadly, gynaecological care in a city like Moradabad falls into
                a few categories, each with a different general cost structure:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Government Hospitals and Clinics
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Generally involve lower or subsidized consultation costs.
                </li>
                <li>
                  Often have higher patient volumes, which can mean longer
                  waiting times and shorter individual consultation time.
                </li>
                <li>
                  May have limited availability of advanced technology like 3D
                  laparoscopic systems, depending on the facility.
                </li>
                <li>
                  Can be a reasonable option for routine, non-urgent concerns
                  where cost is the primary constraint.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Private Individual Practices
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fees are generally higher than government facilities but often
                  include more personalized attention and shorter waiting times.
                </li>
                <li>
                  Technology and facilities vary widely — some private practices
                  invest heavily in advanced equipment, while others operate
                  more simply.
                </li>
                <li>
                  Continuity of care with the same doctor across visits is often
                  more consistent than in high-volume government settings.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Private Hospitals and Multi-Specialty Clinics
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Typically have the highest fee range, reflecting broader
                  infrastructure, specialist teams, and advanced technology.
                </li>
                <li>
                  Often provide comprehensive, on-site diagnostic and surgical
                  facilities, reducing the need for external referrals.
                </li>
                <li>
                  Can be a strong option for complex cases, high-risk
                  pregnancies, or advanced fertility treatment requiring
                  integrated care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Comparing Fees by Treatment Category
              </h2>

              <p className="mb-4 text-gray-700">
                Rather than asking about &quot;gynaecologist fees&quot; as one
                number, it helps to compare costs by treatment type, since each
                involves very different pricing considerations:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Routine Consultation Fees
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Generally the most affordable and predictable category.
                </li>
                <li>
                  Usually covers a physical examination and discussion of
                  symptoms or concerns.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnancy Care Package Fees
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Often bundled across multiple visits, rather than charged
                  individually each time.
                </li>
                <li>
                  Pricing typically reflects the number of scans, tests, and
                  monitoring visits included in the package.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Diagnostic and Test-Inclusive Consultation Fees
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Higher than a basic consultation, since ultrasound or blood
                  tests are included in the same visit.
                </li>
                <li>
                  Worth comparing whether tests are bundled or billed separately
                  across different clinics.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Surgical Procedure Fees
              </h3>
              <p className="mb-2 text-gray-700">
                The widest cost range, influenced by:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Laparoscopic vs. open surgical technique
                </li>
                <li>
                  Hospital stay duration
                </li>
                <li>
                  Anaesthesia and operation theatre charges
                </li>
                <li>
                  Pre- and post-surgical care included in the package
                </li>
              </ul>
              <p className="text-gray-700">
                Always requires a separate, itemized quote distinct from the
                consultation fee.
              </p>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Fertility and IVF Treatment Fees
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Usually priced per treatment cycle, rather than as a single
                  flat fee.
                </li>
                <li>
                  Costs can vary based on medication protocols, monitoring
                  technology used, and number of cycles required.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Justify Fee Differences Between Doctors
              </h2>

              <p className="mb-4 text-gray-700">
                When comparing two gynaecologists with different fee levels,
                consider whether the higher fee reflects genuine added value,
                such as:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Specialized training in laparoscopic surgery, high-risk
                  obstetrics, or fertility treatment.
                </li>
                <li>
                  Advanced technology like 3D/4D imaging, AI-assisted
                  diagnostics, or time-lapse embryo monitoring.
                </li>
                <li>
                  More personalized consultation time, rather than a
                  high-volume, quick-visit model.
                </li>
                <li>
                  On-site diagnostic and surgical facilities, reducing the need
                  for multiple clinic visits.
                </li>
                <li>
                  Stronger continuity of care, with the same doctor managing
                  your case across visits.
                </li>
                <li>
                  Better post-treatment follow-up support, included as part of
                  the overall care approach.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Compare Fees Without Compromising on Care Quality
              </h2>

              <p className="mb-4 text-gray-700">
                A practical approach to comparing gynaecologist fees in
                Moradabad:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  List your specific needs first — routine care, pregnancy,
                  surgery, or fertility treatment — since fee comparison should
                  be treatment-specific.
                </li>
                <li>
                  Call 2–3 clinics directly and ask for their current fee for
                  your specific type of visit.
                </li>
                <li>
                  Ask what&apos;s included in each quoted fee — consultation
                  only, or tests and follow-ups as well.
                </li>
                <li>
                  Compare technology and facilities alongside the fee, not just
                  the number itself.
                </li>
                <li>
                  Factor in convenience and location, since travel time and ease
                  of follow-up visits also carry real value.
                </li>
                <li>
                  Read reviews alongside fee comparison, to understand whether
                  patients felt the cost matched the care received.
                </li>
                <li>
                  Avoid choosing purely on the lowest price, especially for
                  surgery or high-risk pregnancy care, where experience and
                  technology matter significantly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask When Comparing Fees Across Clinics
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What is your consultation fee for [routine visit / pregnancy
                  care / surgery consultation]?
                </li>
                <li>
                  What&apos;s included in this fee, and what would be charged
                  separately?
                </li>
                <li>
                  How does your fee structure compare for follow-up visits
                  versus the first consultation?
                </li>
                <li>
                  If I need surgery, when would I receive an itemized cost
                  estimate?
                </li>
                <li>
                  Do you offer package pricing for pregnancy care or
                  multi-visit treatment?
                </li>
                <li>
                  Are there any additional facility or technology charges I
                  should know about?
                </li>
                <li>
                  What payment methods and options do you offer?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Value Beyond the Fee: What Else to Weigh In Your Decision
              </h2>

              <p className="mb-4 text-gray-700">
                While comparing fees is important, remember that the lowest fee
                doesn&apos;t always mean the best overall value. Also weigh:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doctor&apos;s relevant experience with your specific concern.
                </li>
                <li>
                  Technology available, especially for surgery or fertility
                  treatment.
                </li>
                <li>
                  Communication style and comfort level during your
                  consultation.
                </li>
                <li>
                  Continuity of care, particularly important for pregnancy and
                  ongoing conditions.
                </li>
                <li>
                  Overall patient experience, as reflected in reviews and
                  testimonials.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For those comparing Moradabad gynaecologist fees, Dr. Priyanka
                Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) represents a private practice option worth including in your
                comparison. Here&apos;s an analysis of what her website offers
                in this context:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  She is positioned as a leading gynaecologist in Moradabad,
                  operating a private clinic, Dr. Priyanka Gynaec.
                </li>
                <li>
                  The clinic is equipped with advanced technology — 3D
                  laparoscopic surgery, AI-based imaging, and time-lapse embryo
                  monitoring — factors that often justify a different fee
                  structure compared to more basic setups.
                </li>
                <li>
                  Services span multiple categories relevant to fee comparison:
                  routine gynaecological care, antenatal/postnatal pregnancy
                  care, laparoscopic surgery (sterilization, cystectomy,
                  myomectomy, hysterectomy), diagnostic hysteroscopy, and
                  fertility/IVF treatment.
                </li>
                <li>
                  Specific fee amounts are not published on the website, which
                  is common for private clinics, since pricing often depends on
                  the type of visit and individual case details.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details of Dr. Priyanka Gynaec, Moradabad
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
                How Insurance and Payment Options Affect Your Effective Cost
              </h2>

              <p className="mb-4 text-gray-700">
                Beyond the quoted fee itself, how you pay and whether insurance
                applies can significantly change your actual out-of-pocket cost.
                Keep these points in mind:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most routine consultations are not covered by insurance, since
                  they&apos;re typically classified as outpatient visits rather
                  than hospitalization.
                </li>
                <li>
                  Surgical procedures may be partially or fully covered,
                  depending on your specific health insurance policy and whether
                  the procedure is medically necessary versus elective.
                </li>
                <li>
                  Elective procedures — such as certain fertility treatments or
                  sterilization reversal — are often excluded from standard
                  insurance coverage, so it&apos;s worth checking your policy
                  terms in advance.
                </li>
                <li>
                  Cashless hospitalization facilities, if available through your
                  insurer and the hospital, can reduce the immediate financial
                  burden during surgery.
                </li>
                <li>
                  Always ask the clinic whether they coordinate directly with
                  insurance providers, or whether you&apos;ll need to pay
                  upfront and file for reimbursement separately.
                </li>
                <li>
                  Payment plans or staged billing are sometimes available for
                  higher-cost treatments like IVF or major surgery — worth
                  asking about directly if cost is a concern.
                </li>
                <li>
                  UPI, card, and digital payment options are increasingly
                  standard at most private clinics, making it easier to track
                  and manage your healthcare spending.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Billing Mistakes to Avoid
              </h2>

              <p className="mb-4 text-gray-700">
                A little preparation can help you avoid common, avoidable cost
                surprises:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Not asking for an itemized bill in advance — always request a
                  breakdown before committing to surgery or a multi-visit
                  treatment plan.
                </li>
                <li>
                  Assuming all follow-up visits are free — some clinics include
                  a limited number of free follow-ups, while others charge for
                  every visit; always confirm this upfront.
                </li>
                <li>
                  Skipping the insurance conversation — even if you&apos;re
                  unsure whether your policy covers a procedure, ask the clinic
                  and your insurer before treatment begins, not after.
                </li>
                <li>
                  Not clarifying test costs separately — diagnostic tests like
                  ultrasound or blood work are often billed apart from the
                  consultation, so confirm this in advance to avoid surprise.
                </li>
                <li>
                  Forgetting to ask about medication costs — prescribed
                  medications are usually purchased separately from a pharmacy
                  and aren&apos;t included in clinic fees.
                </li>
                <li>
                  Not comparing the &quot;package&quot; fee against actual
                  services used — for bundled packages (like pregnancy care),
                  confirm exactly how many visits and tests are included so you
                  know the real value.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Simple Checklist Before Your First Visit
              </h2>

              <p className="mb-4 text-gray-700">
                To make sure you&apos;re not caught off guard by fees, run
                through this quick checklist before booking:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Have I confirmed the consultation fee for my specific visit
                  type?
                </li>
                <li>
                  Do I know whether tests or scans are included or billed
                  separately?
                </li>
                <li>
                  Have I checked whether my insurance applies to this type of
                  visit or treatment?
                </li>
                <li>
                  Do I understand the clinic&apos;s follow-up visit policy?
                </li>
                <li>
                  Have I asked about payment methods and any available payment
                  flexibility?
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Comparing Moradabad gynaecologist fees works best when you look
                beyond a single number — considering clinic type, treatment
                category, technology, and overall value alongside the actual
                cost. Rather than choosing based purely on the lowest quoted
                fee, take the time to call a few clinics directly, ask
                what&apos;s included, and weigh the fee against the experience,
                technology, and continuity of care each option offers.
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