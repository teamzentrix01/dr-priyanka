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

export default function LaparoscopicTubalRecanalization() {
  const faqs = [
    {
      q: "Can I get information about tubal recanalization in Moradabad?",
      a: "Dr. Priyanka Pachauri offers advanced laparoscopic surgery and fertility expertise; it's best to call directly to confirm specific procedure availability.",
    },
    {
      q: "What is tubal recanalization?",
      a: "It's a surgical procedure that reconnects the fallopian tubes after sterilisation to potentially restore natural fertility.",
    },
    {
      q: "Is tubal recanalization always successful?",
      a: "No, success depends on factors like remaining tube length, age, and the original sterilisation method.",
    },
    {
      q: "Is IVF a better option than tubal reversal?",
      a: "It depends on individual circumstances; a proper evaluation helps determine the best fit for your case.",
    },
    {
      q: "How can I book a consultation?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Does tubal reversal increase the risk of ectopic pregnancy?",
      a: "Yes, there is a slightly increased risk, which is why early pregnancy monitoring is important after reversal.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details, though tubal recanalization isn't explicitly named as a listed service.",
    },
    {
      q: "Can I email the clinic with questions before visiting?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "What tests are needed before deciding on recanalization or IVF?",
      a: "Hormonal blood tests, imaging of the uterus and tubes, and a partner semen analysis are typically recommended.",
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
                Laparoscopic Tubal Recanalization in Moradabad: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Life circumstances change, and some women who underwent tubal
                ligation (permanent sterilisation) later decide they want to
                conceive again — whether due to remarriage, the loss of a child,
                or a change in family plans. Laparoscopic tubal recanalization
                offers a way to potentially restore fertility after
                sterilisation.
              </p>

              <p className="text-gray-700">
                This guide explains what the procedure involves, who is a good
                candidate, what to expect, and how to find the right specialist
                for laparoscopic tubal recanalization in Moradabad — including
                details about Dr. Priyanka Pachauri, a well-known gynaecologist
                in the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Tubal Recanalization?
              </h2>

              <p className="mb-4 text-gray-700">
                Tubal recanalization, also known as tubal ligation reversal, is
                a surgical procedure that reconnects the fallopian tubes after
                they were previously cut, tied, clipped, or blocked during a
                sterilisation procedure. The goal is to restore the natural
                pathway for the egg to travel from the ovary to the uterus,
                allowing for the possibility of natural conception.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It is performed using laparoscopic (minimally invasive) or, in
                  some cases, microsurgical techniques
                </li>
                <li>
                  Success depends heavily on how the original sterilisation was
                  performed and how much healthy fallopian tube remains
                </li>
                <li>
                  It is a more complex procedure than the original sterilisation
                  surgery
                </li>
                <li>
                  It does not guarantee pregnancy, but can restore the physical
                  possibility of natural conception for many women
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Good Candidate for Tubal Recanalization?
              </h2>

              <p className="mb-4 text-gray-700">
                Not every woman who has undergone tubal ligation is
                automatically a suitable candidate for reversal. A thorough
                evaluation helps determine candidacy based on:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Type of original sterilisation procedure</strong> –
                  some methods (like clips or rings) are generally easier to
                  reverse than others (like extensive tubal removal or
                  cauterisation)
                </li>
                <li>
                  <strong>Length of remaining healthy fallopian tube</strong> –
                  enough healthy tube on both sides improves the chances of
                  successful reconnection
                </li>
                <li>
                  <strong>Age</strong> – younger women generally have higher
                  success rates, as overall fertility naturally declines with age
                </li>
                <li>
                  <strong>Ovarian reserve</strong> – egg quantity and quality,
                  often assessed through hormonal blood tests
                </li>
                <li>
                  <strong>Partner&apos;s fertility status</strong> – a semen
                  analysis for the male partner is typically recommended before
                  proceeding
                </li>
                <li>
                  <strong>Overall health</strong> – general health and any other
                  reproductive health conditions can affect suitability and
                  surgical planning
                </li>
                <li>
                  <strong>Absence of other fertility-limiting conditions</strong>{" "}
                  – such as significant endometriosis or uterine abnormalities
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Laparoscopic Tubal Recanalization Works
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Diagnostic evaluation first</strong> – imaging and
                  sometimes diagnostic laparoscopy to assess the condition and
                  length of the remaining fallopian tubes
                </li>
                <li>
                  <strong>Surgical reconnection</strong> – the healthy segments
                  of the fallopian tube are carefully reconnected using fine
                  sutures under magnification
                </li>
                <li>
                  <strong>Laparoscopic approach</strong> – performed through
                  small incisions using a camera and specialised instruments,
                  offering benefits like reduced scarring and generally quicker
                  recovery compared to open surgery
                </li>
                <li>
                  <strong>Duration</strong> – the procedure can take a few hours,
                  depending on complexity
                </li>
                <li>
                  <strong>Hospital stay</strong> – often a short admission, with
                  many patients going home within a day or two, depending on
                  individual recovery
                </li>
                <li>
                  <strong>Recovery period</strong> – most women can resume light
                  activities within a couple of weeks, with full recovery taking
                  somewhat longer
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Success Rates and What Influences Them
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Success rates vary significantly based on individual factors,
                  particularly the original sterilisation method and remaining
                  tube length
                </li>
                <li>
                  Women with more remaining healthy fallopian tube generally
                  have better outcomes
                </li>
                <li>
                  Younger women, particularly those under their mid-30s, tend to
                  have relatively better success rates
                </li>
                <li>
                  Even after successful tube reconnection, there is a possibility
                  of ectopic pregnancy (a pregnancy developing outside the
                  uterus), so close monitoring in early pregnancy is important
                </li>
                <li>
                  Your doctor can give you a more personalised expectation after
                  reviewing your specific case, imaging results, and overall
                  fertility profile
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tubal Recanalization vs IVF: Which Option Might Suit You?
              </h2>

              <p className="mb-4 text-gray-700">
                For women wanting to conceive after tubal ligation, there are
                generally two main paths, each with its own considerations:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Tubal recanalization</strong> – restores the natural
                  reproductive pathway, potentially allowing for multiple future
                  pregnancies without repeated procedures, but success depends
                  on tube condition and is a more invasive surgical option
                  upfront
                </li>
                <li>
                  <strong>IVF (In Vitro Fertilisation)</strong> – bypasses the
                  fallopian tubes entirely by fertilising the egg outside the
                  body and transferring the embryo directly into the uterus,
                  often considered when tubes are too damaged for reversal or
                  when a faster path to pregnancy is preferred
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The right choice depends on factors like age, remaining tube
                condition, cost considerations, and personal preference
                regarding surgery versus assisted reproduction. A thorough
                consultation helps compare both options based on your specific
                circumstances.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history review</strong> – understanding your
                  original sterilisation procedure, timing, and any relevant
                  medical history
                </li>
                <li>
                  <strong>Fertility assessment</strong> – hormonal blood tests
                  to evaluate ovarian reserve
                </li>
                <li>
                  <strong>Imaging evaluation</strong> – to assess the condition
                  of your uterus and remaining fallopian tube segments
                </li>
                <li>
                  <strong>Partner evaluation</strong> – a semen analysis is
                  typically recommended as part of the overall fertility
                  assessment
                </li>
                <li>
                  <strong>Personalised recommendation</strong> – comparing tubal
                  recanalization and IVF based on your specific findings
                </li>
                <li>
                  <strong>Clear discussion of success rates and risks</strong>{" "}
                  – so you can make a fully informed decision
                </li>
                <li>
                  <strong>Surgical planning, if recanalization is chosen</strong>{" "}
                  – including pre-operative preparation and recovery expectations
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: Expertise in Laparoscopy and Fertility
                Care in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a
                well-recognised gynaecologist in Moradabad with strong expertise
                in both advanced laparoscopic surgery and fertility treatment.
                Her clinic follows the guiding principle of &quot;Her Health
                First,&quot; ensuring every patient receives a thorough, honest
                evaluation of her options before deciding on a treatment path.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Relevant Services and Expertise
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D laparoscopic gynaecological surgery – advanced laparoscopic
                  surgical skill relevant to complex tubal procedures
                </li>
                <li>
                  Fertility evaluation and personalised IVF treatment – for
                  patients where IVF may be the more suitable path
                </li>
                <li>
                  Laparoscopic sterilisation experience, providing direct
                  familiarity with tubal anatomy and prior sterilisation
                  techniques
                </li>
                <li>
                  Laparoscopic cystectomy and myomectomy, demonstrating broader
                  advanced laparoscopic surgical capability
                </li>
                <li>
                  Pregnancy, antenatal, and postnatal care for continued support
                  after conception
                </li>
                <li>
                  Diagnostic hysteroscopy for uterine evaluation as part of
                  fertility assessment
                </li>
                <li>PCOS and hormonal imbalance evaluation</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Supporting Fertility Decision-Making
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  High-definition 3D laparoscopic surgical systems for precise,
                  minimally invasive procedures
                </li>
                <li>
                  3D & 4D ultrasound machines for detailed pelvic and
                  reproductive imaging
                </li>
                <li>
                  GERI time-lapse imaging incubator and AI-powered fertility
                  diagnostics, supporting IVF planning as an alternative or
                  complementary path
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
                  and fertility care
                </li>
                <li>
                  <strong>Continuity you can count on</strong> – a thorough,
                  integrated approach to reviewing your full fertility history
                  and options
                </li>
                <li>
                  <strong>Outcomes patients hope for</strong> – successful
                  pregnancies after years of difficulty, supported by
                  fertility-preserving surgical approaches wherever possible
                </li>
                <li>
                  <strong>Trust earned daily</strong> – reputation built through
                  patient referrals rather than paid promotion
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Tubal Recanalization
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Tubal ligation reversal is always
                  successful&quot;</strong> – Success depends heavily on
                  individual factors like remaining tube length and age
                </li>
                <li>
                  <strong>&quot;It&apos;s a simple, quick procedure&quot;</strong>{" "}
                  – It is a more complex surgery than the original sterilisation
                  and requires skilled microsurgical or laparoscopic technique
                </li>
                <li>
                  <strong>&quot;IVF is always a better option than
                  reversal&quot;</strong> – Each has its own advantages
                  depending on individual circumstances; a proper evaluation
                  helps determine the better fit
                </li>
                <li>
                  <strong>&quot;Age doesn&apos;t affect the outcome&quot;</strong>{" "}
                  – Age significantly influences overall fertility potential,
                  independent of the surgical success of the reversal itself
                </li>
                <li>
                  <strong>&quot;Once reversed, there&apos;s no risk of
                  complications&quot;</strong> – There remains a slightly
                  increased risk of ectopic pregnancy after reversal, requiring
                  careful early pregnancy monitoring
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Approach Your Decision
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Book a consultation</strong> with an
                  experienced gynaecologist to discuss your original
                  sterilisation procedure and current fertility goals.
                </li>
                <li>
                  <strong>Step 2: Undergo recommended fertility
                  assessments</strong>, including hormonal tests and imaging.
                </li>
                <li>
                  <strong>Step 3: Arrange a semen analysis</strong> for your
                  partner as part of the overall evaluation.
                </li>
                <li>
                  <strong>Step 4: Discuss both tubal recanalization and IVF
                  options</strong> in detail, including expected success rates
                  for your specific case.
                </li>
                <li>
                  <strong>Step 5: Consider practical factors</strong> – cost,
                  recovery time, and how many future pregnancies you may want.
                </li>
                <li>
                  <strong>Step 6: Make an informed decision</strong> based on
                  your doctor&apos;s personalised recommendation.
                </li>
                <li>
                  <strong>Step 7: Follow through with pre-procedure preparation
                  and post-procedure follow-up care</strong>, whichever path you
                  choose.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Convenient access for consultation, testing, and follow-up
                  without long-distance travel
                </li>
                <li>
                  Continuity of care with the same doctor throughout your
                  fertility journey
                </li>
                <li>
                  Lower overall cost compared to travelling to a metro city for
                  specialised fertility consultations
                </li>
                <li>
                  Access to both advanced laparoscopic surgical expertise and
                  fertility treatment options under one roof
                </li>
                <li>
                  A trusted, familiar environment for discussing sensitive and
                  significant reproductive decisions
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For anyone exploring options after tubal ligation in Moradabad,
                here are the verified contact details from the official website:
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

              <p className="mt-4 text-gray-700">
                It&apos;s recommended to call or message on WhatsApp to discuss
                your specific case and confirm whether tubal recanalization or
                IVF consultation is available and suitable for your situation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Website Analysis: gynaecologistmoradabad.com
              </h2>

              <p className="mb-4 text-gray-700">
                Since a short analysis of the official website was requested,
                here is a quick and honest breakdown:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Strong related expertise clearly listed</strong> – 3D
                  laparoscopic surgery, laparoscopic sterilisation, and
                  comprehensive fertility/IVF services are all explicitly
                  listed, showing relevant surgical and fertility expertise.
                </li>
                <li>
                  <strong>No explicit mention of tubal recanalization as a named
                  service</strong> – The website&apos;s current service list
                  does not specifically name &quot;tubal recanalization&quot; or
                  &quot;tubal reversal,&quot; so it is best to directly call or
                  WhatsApp the clinic to confirm availability and the
                  doctor&apos;s specific experience with this procedure before
                  booking.
                </li>
                <li>
                  <strong>Technology transparency</strong> – Mentioning 3D
                  laparoscopy, 4D ultrasound, and advanced fertility diagnostics
                  (GERI incubator, AI semen analysis) builds confidence in the
                  clinic&apos;s overall advanced surgical and fertility
                  capability.
                </li>
                <li>
                  <strong>Academic credentials highlighted</strong> – References
                  to gold medal academic background and international fellowship
                  training in laparoscopy support credibility for complex
                  surgical procedures.
                </li>
                <li>
                  <strong>Easy-to-access contact details</strong> – Phone,
                  WhatsApp, and email are clearly visible in the header and
                  footer for direct inquiry.
                </li>
                <li>
                  <strong>Genuine patient testimonials</strong> – Real feedback
                  (such as from patient &quot;Rudri J&quot;) adds authentic
                  social proof about the overall patient experience.
                </li>
                <li>
                  <strong>Local SEO fundamentals present</strong> – A complete
                  clinic address with pin code is listed, supporting visibility
                  for Moradabad-based searches.
                </li>
                <li>
                  <strong>Improvement opportunity</strong> – Explicitly listing
                  tubal recanalization as a named service, along with expected
                  success rate information, could help the website rank better
                  for this specific fertility-related search and give patients
                  clearer expectations before reaching out.
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
