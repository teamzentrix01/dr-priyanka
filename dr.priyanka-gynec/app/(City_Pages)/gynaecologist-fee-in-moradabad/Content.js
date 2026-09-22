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

export default function GynaecologistFeeInMoradabad() {
  const faqs = [
    {
      q: "What is the average gynaecologist consultation fee?",
      a: "It varies by clinic, doctor experience, and visit type; contacting the clinic directly gives the most accurate figure.",
    },
    {
      q: "Is the fee different for a first visit versus a follow-up?",
      a: "Yes, first consultations are often priced differently from shorter follow-up visits, though this varies by clinic.",
    },
    {
      q: "Are ultrasound and tests included in the consultation fee?",
      a: "Not usually — most clinics charge diagnostic tests separately unless specifically bundled into a package.",
    },
    {
      q: "Do pregnancy consultations cost more than routine visits?",
      a: "Pregnancy care is often structured as a package covering multiple visits, which can differ from a single routine consultation fee.",
    },
    {
      q: "Why don't many clinic websites list exact fees?",
      a: "Fees often vary by visit type and can change over time, so clinics typically prefer confirming current pricing directly with patients.",
    },
    {
      q: "Does a higher fee always mean better care?",
      a: "Not necessarily — it's more important to consider what's included, the doctor's relevant expertise, and clinic transparency.",
    },
    {
      q: "Does gynaecologistmoradabad.com list consultation fees?",
      a: "No, specific fee amounts aren't published on the website; it's best to contact the clinic directly for current pricing.",
    },
    {
      q: "How can I contact Dr. Priyanka Gynaec to ask about fees?",
      a: "Call +91 90797 65578, WhatsApp +91 89796 70705, email drpriyankagynec@gmail.com, or visit gynaecologistmoradabad.com.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "What should I ask before booking to avoid surprise charges?",
      a: "Ask about the consultation fee, whether tests are included, and any additional charges specific to your concern.",
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
                Gynaecologist Fee in Moradabad: What Determines the Cost of Your
                Consultation
              </h1>

              <p className="mb-4 text-gray-700">
                Before booking an appointment, many women naturally want to know
                the gynaecologist fee in Moradabad so they can plan their visit
                and budget accordingly. This guide explains what typically
                influences consultation charges, what&apos;s usually included in
                a gynaecologist&apos;s fee, how fees differ across types of
                visits, and how to get an accurate, personalized cost estimate.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Gynaecologist Fees Vary So Much
              </h2>

              <p className="mb-4 text-gray-700">
                Unlike fixed-price products, medical consultation fees can
                differ significantly between doctors and clinics because of
                several genuine factors:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Doctor&apos;s experience and qualifications</strong>{" "}
                  — more experienced specialists, especially those with
                  additional training in laparoscopic surgery or fertility
                  treatment, may have different fee structures.
                </li>
                <li>
                  <strong>Clinic infrastructure and technology</strong> —
                  clinics with advanced equipment like 3D/4D ultrasound or
                  laparoscopic systems often reflect this in their overall
                  pricing.
                </li>
                <li>
                  <strong>Type of consultation</strong> — a first-time
                  consultation is usually priced differently from a quick
                  follow-up visit.
                </li>
                <li>
                  <strong>Nature of the visit</strong> — a routine check-up
                  typically costs less than a consultation involving diagnostic
                  tests or a detailed treatment discussion.
                </li>
                <li>
                  <strong>City and locality</strong> — fees in Moradabad may
                  differ from those in larger metro cities, generally reflecting
                  local cost of living and clinic overheads.
                </li>
                <li>
                  <strong>Time spent with the doctor</strong> — clinics offering
                  longer, more detailed consultations may structure fees
                  differently than quick, high-volume visit models.
                </li>
                <li>
                  <strong>Additional services bundled in</strong> — some clinics
                  include a basic ultrasound or specific tests within the
                  consultation fee, while others charge separately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Gynaecologist Visits and How Fees Typically Differ
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the type of visit you need can help you anticipate
                how fees might be structured:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. First Consultation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Usually the most detailed visit, involving a full medical
                  history review and physical examination.
                </li>
                <li>
                  May be priced higher than follow-up visits due to the time and
                  assessment involved.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Follow-Up Visits
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Typically shorter and more focused, often reviewing test
                  results or monitoring an ongoing concern.
                </li>
                <li>
                  Frequently priced lower than the first consultation, though
                  this varies by clinic.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Pregnancy (Antenatal) Consultations
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Often structured as a package covering multiple visits across
                  the pregnancy journey.
                </li>
                <li>
                  May include scans and monitoring bundled into a broader
                  antenatal care plan, rather than charged individually each
                  time.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Consultation With Diagnostic Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  If ultrasound, blood tests, or other diagnostics are done
                  during the same visit, fees are usually higher than a
                  consultation-only visit.
                </li>
                <li>
                  Some clinics bundle basic tests into the visit cost, while
                  others charge them separately — always worth clarifying.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Surgical or Procedure-Related Consultations
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pre-surgery consultations often involve detailed planning and
                  test review, which can affect how the fee is structured
                  compared to routine visits.
                </li>
                <li>
                  These are usually followed by a separate, itemized quote for
                  the surgery itself.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Gynaecologist Fee Typically Covers
              </h2>

              <p className="mb-4 text-gray-700">
                While this varies by clinic, a standard consultation fee
                generally includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Time spent with the doctor during the appointment.
                </li>
                <li>
                  Physical examination, as clinically appropriate for your
                  concern.
                </li>
                <li>
                  Discussion of symptoms, history, and initial assessment.
                </li>
                <li>
                  Basic guidance or prescription, if applicable.
                </li>
                <li>
                  Recommendation for further tests, if needed (usually charged
                  separately).
                </li>
              </ul>

              <p className="mb-4 mt-4 text-gray-700">
                It typically <strong>does not</strong> include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diagnostic tests like ultrasound or blood work, unless
                  specifically bundled.
                </li>
                <li>
                  Surgical procedures, which are quoted separately based on the
                  specific treatment plan.
                </li>
                <li>
                  Medications, which are usually purchased separately from a
                  pharmacy.
                </li>
                <li>
                  Hospital admission or procedure charges, for anything beyond a
                  standard consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Online Fee Numbers Can Be Unreliable
              </h2>

              <p className="mb-4 text-gray-700">
                It&apos;s common to see generic fee ranges mentioned online for
                &quot;gynaecologist consultation in India&quot; or similar
                searches, but these figures should be treated cautiously
                because:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fees change over time due to inflation, technology upgrades,
                  or clinic policy updates.
                </li>
                <li>
                  Every clinic sets its own pricing structure, so a number seen
                  for one doctor doesn&apos;t necessarily apply to another.
                </li>
                <li>
                  Online listings are sometimes outdated or not verified directly
                  with the clinic.
                </li>
                <li>
                  The type of visit matters — a number quoted for a &quot;basic
                  consultation&quot; may not reflect what you actually need
                  (e.g., a detailed pregnancy check-up).
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The only fully reliable way to know the current fee is to
                contact the clinic directly before your visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Get an Accurate Gynaecologist Fee Quote
              </h2>

              <p className="mb-4 text-gray-700">
                Follow these steps to avoid surprises and plan your visit
                properly:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Call or message the clinic directly (phone or WhatsApp) to ask
                  about the current consultation fee.
                </li>
                <li>
                  Specify the type of visit you need — first consultation,
                  follow-up, pregnancy check-up, or a specific concern.
                </li>
                <li>
                  Ask if any tests are included in the fee or charged separately.
                </li>
                <li>
                  Clarify follow-up visit charges, especially if you expect to
                  need multiple visits for an ongoing concern.
                </li>
                <li>
                  For surgery-related visits, ask whether the consultation fee
                  is separate from the surgical cost estimate.
                </li>
                <li>
                  Confirm payment methods accepted at the clinic (cash, card,
                  UPI, etc.).
                </li>
                <li>
                  Ask about package pricing, especially for pregnancy care,
                  which is often bundled rather than charged per visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is a Higher Gynaecologist Fee Always Better?
              </h2>

              <p className="mb-4 text-gray-700">
                Not necessarily — but it&apos;s also not something to judge
                purely on being &quot;cheap&quot; or &quot;expensive.&quot;
                Instead, consider:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What&apos;s included in the fee</strong> — a slightly
                  higher fee that includes more thorough evaluation or bundled
                  tests may offer better overall value.
                </li>
                <li>
                  <strong>The doctor&apos;s specific expertise</strong> relevant
                  to your concern — specialized experience (like laparoscopic
                  surgery or fertility treatment) can justify a different fee
                  structure.
                </li>
                <li>
                  <strong>Technology and facilities available</strong>, which
                  often reflect in overall clinic pricing.
                </li>
                <li>
                  <strong>Your comfort and trust in the doctor</strong>, since a
                  good long-term relationship often matters more than a small
                  fee difference.
                </li>
                <li>
                  <strong>Transparency of the clinic</strong> about charges —
                  clear, upfront pricing is often more valuable than a lower but
                  unclear fee structure.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Budgeting for Ongoing Gynaecological Care
              </h2>

              <p className="mb-4 text-gray-700">
                Since gynaecological care often isn&apos;t a one-time visit, it
                helps to plan for:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Routine annual check-ups, which involve a basic consultation
                  fee.
                </li>
                <li>
                  Follow-up visits for any ongoing condition being monitored.
                </li>
                <li>
                  Pregnancy care packages, which involve multiple visits over
                  several months.
                </li>
                <li>
                  Occasional diagnostic tests, budgeted separately from
                  consultation fees.
                </li>
                <li>
                  Potential procedure or surgery costs, if a condition requires
                  treatment beyond consultation.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Planning with this broader view, rather than focusing only on a
                single visit&apos;s fee, gives a more realistic picture of your
                overall gynaecological healthcare budget.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For those researching gynaecologist fee in Moradabad, Dr.
                Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) is a relevant local specialist to consider. Here&apos;s an
                honest analysis of what her website offers regarding fees:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  She is presented as a leading gynaecologist in Moradabad,
                  offering services across pregnancy care, laparoscopic surgery,
                  and fertility/IVF treatment.
                </li>
                <li>
                  Her clinic, Dr. Priyanka Gynaec, is equipped with advanced
                  technology, including 3D laparoscopic surgery and AI-based
                  imaging — factors that can influence overall clinic pricing
                  structure.
                </li>
                <li>
                  The website does not publish a specific consultation fee
                  amount, which is common practice for many clinics, since fees
                  can vary by visit type and are best confirmed directly.
                </li>
                <li>
                  The site does list a broad range of services — from routine
                  gynaecological care to complex laparoscopic surgery and
                  fertility treatment — meaning fee structures likely vary
                  significantly depending on what you need.
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
                Questions to Ask About Fees Before Your Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What is the consultation fee for a first-time visit?
                </li>
                <li>
                  Is the fee different for follow-up visits compared to the
                  first consultation?
                </li>
                <li>
                  Are any tests or scans included in the consultation fee, or
                  charged separately?
                </li>
                <li>
                  If I need a pregnancy care package, how is that priced
                  compared to individual visits?
                </li>
                <li>
                  What is the process for getting a surgery cost estimate after
                  a consultation?
                </li>
                <li>
                  What payment methods do you accept?
                </li>
                <li>
                  Are there any additional charges I should know about in
                  advance?
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Gynaecologist fee in Moradabad isn&apos;t a single fixed number —
                it depends on the type of visit, the doctor&apos;s expertise,
                the clinic&apos;s technology, and what&apos;s included in the
                consultation. Rather than relying on generic online estimates,
                the most reliable approach is to contact the clinic directly,
                specify exactly what kind of visit or concern you have, and
                request a clear, upfront fee quote before booking your
                appointment.
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
