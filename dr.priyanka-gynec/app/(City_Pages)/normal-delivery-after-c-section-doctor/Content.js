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

export default function CSectionUnderInsuranceInMoradabad() {
  const faqs = [
    {
      q: "Does health insurance typically cover C-section delivery?",
      a: "Yes, if your policy includes maternity coverage, though specific terms and waiting periods vary by insurer.",
    },
    {
      q: "What is a waiting period in maternity insurance?",
      a: "It's the time you must hold the policy before maternity-related claims, including C-section delivery, become eligible.",
    },
    {
      q: "What's the difference between cashless and reimbursement claims?",
      a: "Cashless means the insurer settles directly with the hospital, while reimbursement means you pay first and claim the amount back later.",
    },
    {
      q: "Who can I consult for delivery care in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) provides comprehensive antenatal and delivery care, including planned cesareans.",
    },
    {
      q: "What documents are typically needed for a C-section insurance claim?",
      a: "Hospital bills, discharge summary, medical records, and policy documents are commonly required.",
    },
    {
      q: "Should I confirm insurance details before my delivery date?",
      a: "Yes, confirming coverage, network hospitals, and the pre-authorization process in advance is strongly recommended.",
    },
    {
      q: "Does cashless facility mean zero out-of-pocket cost?",
      a: "Not always — sub-limits or costs exceeding your policy's coverage may still apply.",
    },
    {
      q: "How can I confirm if this clinic is empanelled with my insurance provider?",
      a: "It's best to contact the clinic directly for the most current information on insurance empanelment and cashless facility.",
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
                C-Section Under Insurance in Moradabad: What Expecting Parents
                Should Know
              </h1>

              <p className="mb-4 text-gray-700">
                Planning for a cesarean delivery involves more than just medical
                preparation — for many families, understanding how health
                insurance coverage works for the procedure is an equally
                important part of getting ready. Navigating maternity
                insurance, cashless facilities, and claim documentation can feel
                confusing, especially amid the many other things expecting
                parents are already managing. This article breaks down how
                C-section coverage typically works under Indian health insurance
                policies, what to check before your delivery date, and how to
                have an informed conversation with both your insurer and your
                hospital in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Maternity Coverage in Health Insurance
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Maternity benefits</strong>, including C-section
                  coverage, are usually a specific add-on or built-in feature,
                  not automatically included in every basic health insurance
                  policy.
                </li>
                <li>
                  <strong>Most policies with maternity coverage</strong> have a
                  waiting period, often ranging from nine months to several
                  years from the policy start date, before maternity claims
                  become eligible.
                </li>
                <li>
                  <strong>Coverage typically includes both normal delivery and
                  cesarean delivery</strong>, though cesarean coverage limits
                  are sometimes higher given the higher cost of surgical
                  delivery.
                </li>
                <li>
                  <strong>Corporate or employer-provided health
                  insurance</strong> often includes maternity benefits with
                  shorter or no waiting periods, which can be more accessible
                  for many families.
                </li>
                <li>
                  <strong>Government health schemes</strong>, such as Ayushman
                  Bharat, may also provide maternity-related coverage for
                  eligible beneficiaries, subject to their specific terms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What C-Section Insurance Coverage Typically Includes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hospital room charges</strong>, up to the limits
                  specified in your policy.
                </li>
                <li>
                  <strong>Surgeon and anesthetist fees</strong> associated with
                  the cesarean procedure.
                </li>
                <li>
                  <strong>Operation theatre charges</strong>.
                </li>
                <li>
                  <strong>Pre- and post-hospitalization expenses</strong>, often
                  covered for a specific number of days before and after the
                  procedure, subject to policy terms.
                </li>
                <li>
                  <strong>Newborn baby coverage</strong>, in some policies, for
                  a specified period immediately following birth.
                </li>
                <li>
                  <strong>Medication and consumables</strong> used during the
                  hospital stay, as per policy terms.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Exact inclusions vary significantly between insurance providers
                and specific policy plans, so reviewing your policy document or
                speaking directly with your insurer is essential for accurate,
                personalized information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cashless vs. Reimbursement Claims
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Cashless Claims
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Available when the hospital is empanelled</strong>{" "}
                  with your insurance provider&apos;s network, allowing the
                  insurer to settle the bill directly with the hospital.
                </li>
                <li>
                  <strong>Requires pre-authorization</strong>, typically
                  submitted before a planned cesarean or promptly in the case of
                  an emergency delivery.
                </li>
                <li>
                  <strong>Reduces the need for large out-of-pocket payment</strong>{" "}
                  at the time of hospitalization, though co-payments or amounts
                  exceeding policy limits may still apply.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Reimbursement Claims
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Used when the hospital isn&apos;t part of your
                  insurer&apos;s cashless network</strong>, or when cashless
                  approval isn&apos;t obtained in time.
                </li>
                <li>
                  <strong>Requires the patient or family to pay the hospital
                  bill upfront</strong>, then submit documentation to the
                  insurer for reimbursement.
                </li>
                <li>
                  <strong>Involves submitting detailed bills, discharge
                  summaries, and other required documents</strong> after the
                  hospital stay is complete.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Documents Typically Required for a C-Section Insurance Claim
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Original hospital bills and payment receipts</strong>.
                </li>
                <li>
                  <strong>Discharge summary</strong>, detailing the procedure
                  performed and reason for cesarean delivery.
                </li>
                <li>
                  <strong>Doctor&apos;s prescription and medical records</strong>{" "}
                  related to the pregnancy and delivery.
                </li>
                <li>
                  <strong>Pre-authorization approval letter</strong>, if a
                  cashless claim was used.
                </li>
                <li>
                  <strong>Policy documents and previous premium payment
                  records</strong>.
                </li>
                <li>
                  <strong>Identity and address proof</strong>, as required by
                  the specific insurer.
                </li>
                <li>
                  <strong>Newborn&apos;s birth certificate</strong>, if claiming
                  coverage related to the newborn.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Requirements can vary by insurer, so it&apos;s worth requesting
                a checklist directly from your insurance provider or TPA (Third
                Party Administrator) well before your expected delivery date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Steps to Take Before Your Delivery Date
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Review your policy&apos;s maternity coverage
                  details</strong>, including waiting periods, sub-limits, and
                  what&apos;s specifically included for cesarean delivery.
                </li>
                <li>
                  <strong>Confirm whether your chosen hospital is in your
                  insurer&apos;s cashless network</strong>, and if not,
                  understand the reimbursement process in advance.
                </li>
                <li>
                  <strong>Contact your insurer or TPA</strong> to understand the
                  pre-authorization process for a planned cesarean delivery.
                </li>
                <li>
                  <strong>Keep all relevant documents organized in
                  advance</strong>, including your policy details, ID proof, and
                  previous medical records related to the pregnancy.
                </li>
                <li>
                  <strong>Ask the hospital&apos;s billing or insurance
                  desk</strong> about their specific process for coordinating
                  with insurance providers.
                </li>
                <li>
                  <strong>Clarify what portion, if any, you may need to pay
                  out of pocket</strong>, even with insurance coverage, due to
                  sub-limits or specific exclusions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Challenges With C-Section Insurance Claims
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Waiting period requirements</strong> that haven&apos;t
                  yet been fulfilled, particularly for newer policies.
                </li>
                <li>
                  <strong>Sub-limits on specific expense categories</strong>,
                  such as room rent, which can result in a portion of the bill
                  not being covered.
                </li>
                <li>
                  <strong>Confusion about what counts as pre- and
                  post-hospitalization expenses</strong> eligible for coverage.
                </li>
                <li>
                  <strong>Delays in claim processing</strong>, particularly for
                  reimbursement claims requiring extensive documentation.
                </li>
                <li>
                  <strong>Discrepancies between what a policy document states
                  and what&apos;s actually reimbursed</strong>, making it
                  important to clarify details directly with the insurer
                  beforehand.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Planning Ahead Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Understanding your coverage well before
                  delivery</strong> reduces stress and financial uncertainty
                  during an already significant life event.
                </li>
                <li>
                  <strong>Pre-authorization for planned cesareans</strong>{" "}
                  generally goes more smoothly when initiated with adequate
                  advance notice.
                </li>
                <li>
                  <strong>Knowing your out-of-pocket expectations in
                  advance</strong> allows for better financial planning around
                  the delivery.
                </li>
                <li>
                  <strong>Clear communication between your hospital&apos;s
                  insurance desk and your insurer</strong> can help prevent
                  last-minute complications with claim approval.
                </li>
                <li>
                  <strong>Having organized documentation ready</strong> speeds
                  up both cashless authorization and reimbursement processes if
                  needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Discussing Insurance and Billing With Your Hospital
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Ask directly whether the hospital coordinates with
                  insurance providers</strong> for cashless facility, and which
                  insurers or TPAs they typically work with.
                </li>
                <li>
                  <strong>Request an estimated cost breakdown for a planned
                  cesarean delivery</strong>, which can help you cross-check
                  against your policy&apos;s coverage limits.
                </li>
                <li>
                  <strong>Clarify the hospital&apos;s process for handling
                  pre-authorization requests</strong>, including expected
                  timelines.
                </li>
                <li>
                  <strong>Ask about any charges that are typically not covered
                  by standard insurance policies</strong>, so you&apos;re
                  prepared for potential out-of-pocket costs.
                </li>
                <li>
                  <strong>Confirm these details well in advance of your due
                  date</strong>, rather than waiting until admission, to avoid
                  unnecessary stress during delivery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Delivery Care in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) provides
                comprehensive antenatal and delivery care in Moradabad,
                including planned and emergency cesarean deliveries when
                medically indicated. According to her official website, (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), her practice emphasizes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A &quot;Her Health First&quot; approach</strong>,
                  ensuring patients are clearly informed throughout their
                  pregnancy and delivery journey.
                </li>
                <li>
                  <strong>High-risk pregnancy management</strong>, with
                  structured monitoring that supports advance planning for
                  delivery, which can also help with timely insurance
                  pre-authorization when a cesarean is anticipated.
                </li>
                <li>
                  <strong>Antenatal and postnatal care</strong>, offering
                  continuity throughout the pregnancy and delivery process.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                For specific, up-to-date details on insurance empanelment,
                cashless facility availability, and billing processes,
                it&apos;s best to contact the clinic directly, since these
                arrangements can vary and change over time. The clinic is
                located in Gandhi Nagar, Moradabad, and its team can guide you
                on the practical steps to take regarding insurance coordination
                for your delivery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Your Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Does this hospital offer cashless facility with my specific
                  insurance provider?
                </li>
                <li>
                  What is the estimated cost of a planned cesarean delivery
                  here, and how does that align with my policy&apos;s coverage?
                </li>
                <li>
                  What documents will I need to provide for either cashless
                  approval or reimbursement?
                </li>
                <li>
                  How far in advance should I begin the pre-authorization
                  process for a planned cesarean?
                </li>
                <li>
                  Who can I contact at the hospital if I have questions about
                  billing or insurance coordination?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About C-Section Insurance Coverage
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;All health insurance policies automatically
                  cover C-section delivery.&quot;</strong> Maternity coverage,
                  including cesarean delivery, is often a specific benefit that
                  needs to be included in your policy, sometimes with a waiting
                  period.
                </li>
                <li>
                  <strong>&quot;Cashless facility means there are no
                  out-of-pocket costs at all.&quot;</strong> Sub-limits,
                  co-payments, or expenses exceeding policy limits can still
                  result in some out-of-pocket costs even with cashless facility.
                </li>
                <li>
                  <strong>&quot;You can start the insurance claim process only
                  after delivery.&quot;</strong> For planned cesareans, starting
                  the pre-authorization process in advance generally leads to a
                  smoother experience.
                </li>
                <li>
                  <strong>&quot;Every hospital works with every insurance
                  provider.&quot;</strong> Cashless facility depends on whether
                  a specific hospital is empanelled with your particular
                  insurer&apos;s network.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
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
