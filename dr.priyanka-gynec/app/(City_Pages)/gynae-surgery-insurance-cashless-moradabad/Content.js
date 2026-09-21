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

export default function GynaeSurgeryInsuranceCashless() {
  const faqs = [
    {
      q: "Does Dr. Priyanka Gynaec offer cashless insurance facility for gynae surgery?",
      a: "This isn't explicitly listed on the website; it's best to call or WhatsApp the clinic directly to confirm.",
    },
    {
      q: "What gynae surgeries are typically covered by health insurance?",
      a: "Hysterectomy, myomectomy, cystectomy, and other medically necessary procedures are commonly covered, subject to policy terms.",
    },
    {
      q: "What is a waiting period in health insurance?",
      a: "A specified time after buying a policy before certain conditions become eligible for coverage.",
    },
    {
      q: "Is cashless treatment completely free?",
      a: "Not necessarily; co-payments, sub-limits, or non-covered expenses may still apply.",
    },
    {
      q: "How can I contact the clinic to ask about costs?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "What should I do if my cashless claim is only partially approved?",
      a: "Discuss the remaining amount with the hospital's billing team and clarify payment options in advance.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details, though insurance network details aren't specified.",
    },
    {
      q: "Can I email the clinic with billing or documentation questions?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Should I confirm insurance details before or after my surgery is scheduled?",
      a: "Always confirm before scheduling, ideally through pre-authorisation for planned surgeries.",
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
                Gynae Surgery Insurance & Cashless Facility in Moradabad: A
                Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Facing gynaecological surgery is stressful enough without also
                worrying about how to manage the financial side of treatment.
                Understanding how health insurance and cashless facilities work
                for gynae surgery can significantly reduce that stress, allowing
                you to focus on recovery rather than paperwork and payments.
              </p>

              <p className="text-gray-700">
                This guide explains how cashless gynae surgery insurance
                generally works, what to check before your procedure, and how to
                plan your surgery in Moradabad — including details about Dr.
                Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Cashless Health Insurance for Surgery?
              </h2>

              <p className="mb-4 text-gray-700">
                Cashless health insurance allows a patient to undergo treatment
                at a network hospital without paying the full amount upfront.
                Instead, the insurance company settles the bill directly with the
                hospital, based on the policy&apos;s coverage terms.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The patient typically pays only for non-covered expenses,
                  deductibles, or amounts exceeding the policy limit
                </li>
                <li>
                  This arrangement removes the need to arrange a large lump sum
                  before surgery
                </li>
                <li>
                  It requires the treating hospital or clinic to be part of the
                  insurance company&apos;s approved network
                </li>
                <li>
                  The process usually involves pre-authorisation before a
                  planned (non-emergency) surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Cashless Claim Process Generally Works
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Confirm network hospital status</strong> –
                  check with your insurer whether the hospital or clinic where
                  you plan to have surgery is part of their network
                </li>
                <li>
                  <strong>Step 2: Submit pre-authorisation request</strong> –
                  for planned surgeries, this is typically done a few days in
                  advance, using your policy details and the doctor&apos;s
                  treatment plan
                </li>
                <li>
                  <strong>Step 3: Insurer reviews and approves</strong> – the
                  insurance company evaluates the request and issues an
                  approval, sometimes with conditions or partial approval
                </li>
                <li>
                  <strong>Step 4: Undergo the procedure</strong> – with cashless
                  approval in place, you generally don&apos;t need to pay for
                  the covered portion of the treatment at the time of discharge
                </li>
                <li>
                  <strong>Step 5: Final settlement</strong> – the hospital
                  submits final bills to the insurer after discharge, and any
                  discrepancies are settled between the hospital and insurer, or
                  with the patient for non-covered amounts
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Gynaecological Procedures Are Typically Covered
              </h2>

              <p className="mb-4 text-gray-700">
                Insurance coverage varies significantly between policies and
                providers, but many comprehensive health insurance plans
                generally cover:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysterectomy, when medically necessary
                </li>
                <li>
                  Laparoscopic myomectomy for fibroid removal
                </li>
                <li>
                  Laparoscopic or open ovarian cystectomy
                </li>
                <li>
                  Treatment for endometriosis requiring surgical intervention
                </li>
                <li>
                  Hysteroscopic procedures for abnormal bleeding or polyps
                </li>
                <li>
                  Certain pregnancy-related complications requiring surgical
                  intervention
                </li>
                <li>
                  Emergency gynaecological surgeries
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                It&apos;s important to note that coverage for procedures related
                to fertility treatment (like IVF), purely cosmetic procedures, or
                certain elective surgeries may be excluded or limited, depending
                on your specific policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Factors That Affect Your Coverage
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Waiting periods</strong> – many policies have a
                  waiting period for certain gynaecological conditions,
                  especially pre-existing ones
                </li>
                <li>
                  <strong>Pre-existing condition clauses</strong> – if your
                  condition was diagnosed before purchasing the policy, coverage
                  may be limited or excluded for a certain period
                </li>
                <li>
                  <strong>Sub-limits on specific procedures</strong> – some
                  policies cap the amount payable for certain types of surgery
                </li>
                <li>
                  <strong>Room rent limits</strong> – policies often specify a
                  maximum room category, and choosing a higher category can
                  affect the payable amount proportionally
                </li>
                <li>
                  <strong>Co-payment clauses</strong> – some policies require
                  the patient to pay a percentage of the bill even after
                  insurance coverage
                </li>
                <li>
                  <strong>Network hospital requirements</strong> – cashless
                  facility is generally only available at hospitals within your
                  insurer&apos;s network
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Your Gynae Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Is this hospital/clinic part of my insurance company&apos;s
                  cashless network?
                </li>
                <li>
                  Does my policy cover this specific procedure, and are there
                  any sub-limits?
                </li>
                <li>
                  Is there a waiting period that applies to my condition?
                </li>
                <li>
                  What is my applicable room rent limit, and how does it affect
                  my treatment options?
                </li>
                <li>
                  Will I need to pay any amount upfront, even with cashless
                  approval?
                </li>
                <li>
                  How long does the pre-authorisation process typically take for
                  a planned surgery?
                </li>
                <li>
                  What documents will I need to provide for the claim process?
                </li>
                <li>
                  What happens if my cashless claim is partially rejected — how
                  will the remaining amount be settled?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Steps to Prepare for a Smooth Insurance Process
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Review your policy document carefully</strong> –
                  understand your coverage, exclusions, and sub-limits well
                  before your surgery date
                </li>
                <li>
                  <strong>Contact your insurer directly</strong> – to confirm
                  coverage for your specific diagnosis and planned procedure
                </li>
                <li>
                  <strong>Ask the hospital&apos;s billing or insurance desk for
                  guidance</strong> – most hospitals have staff experienced in
                  handling cashless claims
                </li>
                <li>
                  <strong>Keep all your medical documents organised</strong> –
                  including your diagnosis reports, doctor&apos;s
                  recommendation, and previous treatment history
                </li>
                <li>
                  <strong>Apply for pre-authorisation well in advance</strong>{" "}
                  – for planned, non-emergency surgeries, this helps avoid
                  last-minute delays
                </li>
                <li>
                  <strong>Clarify payment expectations upfront</strong> – ask
                  the hospital what portion, if any, you will need to pay
                  directly
                </li>
                <li>
                  <strong>Keep your policy and ID documents accessible</strong>{" "}
                  – you&apos;ll need these at the time of admission
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What If Your Surgery Isn&apos;t Fully Covered?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Discuss the estimated total cost with your doctor and the
                  hospital&apos;s billing department in advance
                </li>
                <li>
                  Ask about instalment or payment plan options, if available
                </li>
                <li>
                  Confirm exactly which portion of the treatment is covered and
                  which isn&apos;t, to avoid surprises
                </li>
                <li>
                  Consider discussing your treatment options with your doctor,
                  since less invasive approaches (like laparoscopic surgery) may
                  sometimes have different cost implications than open surgery
                </li>
                <li>
                  Keep all original bills and reports for reimbursement claims if
                  cashless approval isn&apos;t available or is only partial
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Discussing Costs Openly With Your Doctor Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A transparent doctor will help you understand the estimated
                  cost of your recommended procedure in advance
                </li>
                <li>
                  Understanding your treatment plan clearly helps you
                  communicate accurately with your insurance provider
                </li>
                <li>
                  Some doctors&apos; clinics can provide the necessary
                  documentation and reports quickly, which speeds up the
                  insurance approval process
                </li>
                <li>
                  Open communication reduces financial stress and allows you to
                  focus on your health and recovery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: Gynaecological Surgical Care in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a
                well-recognised gynaecologist and laparoscopic surgeon in
                Moradabad, offering a wide range of gynaecological surgical
                procedures. Her clinic follows the guiding principle of
                &quot;Her Health First,&quot; and patients are encouraged to
                discuss cost, documentation, and insurance-related questions
                directly with the clinic before scheduling surgery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Relevant Surgical Services Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D laparoscopic gynaecological surgery – for a range of
                  conditions, often relevant to insurance coverage discussions
                </li>
                <li>
                  Laparoscopic myomectomy for fibroid removal
                </li>
                <li>
                  Laparoscopic cystectomy for ovarian cysts
                </li>
                <li>
                  Laparoscopic hysterectomy
                </li>
                <li>
                  Sacrocolpopexy for prolapse repair
                </li>
                <li>
                  Diagnostic hysteroscopy and hysteroscopic polypectomy
                </li>
                <li>
                  Endometriosis surgery
                </li>
                <li>
                  Pregnancy, antenatal, and postnatal care
                </li>
                <li>
                  Fertility evaluation and IVF treatment
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Used
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  High-definition 3D laparoscopic surgical systems for precise,
                  minimally invasive procedures
                </li>
                <li>
                  3D & 4D ultrasound machines for detailed pre-surgical
                  diagnosis and planning
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Trust This Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                According to the clinic&apos;s own patient communication, trust
                is built on:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Expertise with heart</strong> – gold medal academic
                  credentials and international fellowship training in laparoscopy
                  and gynaecological surgery
                </li>
                <li>
                  <strong>Continuity you can count on</strong> – the same team
                  supporting patients through diagnosis, treatment planning, and
                  recovery
                </li>
                <li>
                  <strong>Outcomes patients hope for</strong> – safe, effective
                  surgical outcomes with fertility preservation where appropriate
                </li>
                <li>
                  <strong>Trust earned daily</strong> – reputation built through
                  patient referrals rather than paid promotion
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Insurance for Gynae Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;All gynae surgeries are automatically covered by
                  health insurance&quot;</strong> – Coverage depends on your
                  specific policy terms, waiting periods, and exclusions
                </li>
                <li>
                  <strong>&quot;Cashless means completely free&quot;</strong>{" "}
                  – You may still need to pay for non-covered amounts,
                  co-payments, or charges exceeding sub-limits
                </li>
                <li>
                  <strong>&quot;Pre-existing conditions are never
                  covered&quot;</strong> – Many policies cover pre-existing
                  conditions after a specified waiting period
                </li>
                <li>
                  <strong>&quot;Any hospital can offer cashless
                  treatment&quot;</strong> – Cashless facility is only available
                  at hospitals within your specific insurer&apos;s network
                </li>
                <li>
                  <strong>&quot;The claim process is the same for every
                  insurer&quot;</strong> – Documentation requirements and
                  approval timelines can vary between insurance companies
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Plan Your Gynae Surgery with Insurance
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Get your diagnosis and treatment plan
                  confirmed by your gynaecologist.</strong>
                </li>
                <li>
                  <strong>Step 2: Review your health insurance policy</strong>{" "}
                  for coverage, waiting periods, and sub-limits related to your
                  condition.
                </li>
                <li>
                  <strong>Step 3: Confirm whether your chosen hospital or clinic
                  is within your insurer&apos;s cashless network.</strong>
                </li>
                <li>
                  <strong>Step 4: Submit a pre-authorisation request well in
                  advance</strong> of a planned, non-emergency surgery.
                </li>
                <li>
                  <strong>Step 5: Clarify any expected out-of-pocket costs</strong>{" "}
                  with the hospital&apos;s billing team before your procedure.
                </li>
                <li>
                  <strong>Step 6: Keep all documents organised</strong> for a
                  smoother approval and settlement process.
                </li>
                <li>
                  <strong>Step 7: Proceed with your surgery</strong>, having
                  clarity on the financial arrangement in advance.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Planning Locally in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Easier, faster communication with your treating doctor&apos;s
                  team regarding required documentation
                </li>
                <li>
                  No need to travel to a metro city, which can add significant
                  additional cost
                </li>
                <li>
                  A doctor who understands your case well, helping ensure
                  accurate and timely paperwork for insurance purposes
                </li>
                <li>
                  Continuity of care from diagnosis through surgery and
                  post-operative follow-up
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
                  <strong>Comprehensive surgical services listed</strong> –
                  Myomectomy, cystectomy, hysterectomy, and other procedures
                  relevant to insurance planning are clearly named on the site.
                </li>
                <li>
                  <strong>No explicit mention of cashless insurance or specific
                  insurer tie-ups</strong> – The website&apos;s current content
                  does not list specific insurance partnerships or a cashless
                  facility, so it&apos;s best to directly call or WhatsApp the
                  clinic to confirm this information before booking.
                </li>
                <li>
                  <strong>Technology and credentials clearly presented</strong>{" "}
                  – Details about 3D laparoscopic systems and academic
                  credentials support confidence in the quality of surgical care
                  being planned for.
                </li>
                <li>
                  <strong>Easy-to-access contact details</strong> – Phone,
                  WhatsApp, and email are clearly visible in the header and
                  footer for direct inquiry about costs and insurance.
                </li>
                <li>
                  <strong>Genuine patient testimonials</strong> – Real feedback
                  (such as from patient &quot;Rudri J&quot;) adds authentic
                  social proof about the overall patient experience.
                </li>
                <li>
                  <strong>Local SEO fundamentals present</strong> – A complete
                  clinic address with pin code is listed, useful for confirming
                  registration details with your insurer if needed.
                </li>
                <li>
                  <strong>Improvement opportunity</strong> – Adding a dedicated
                  page listing accepted insurance providers, cashless network
                  status, and general cost transparency information could help
                  the website rank better for this practical, commonly searched
                  topic and reduce patient uncertainty before booking surgery.
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
