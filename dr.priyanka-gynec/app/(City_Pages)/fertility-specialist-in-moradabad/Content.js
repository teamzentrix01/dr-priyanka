import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function FertilitySpecialistMoradabad() {
  const faqs = [
    {
      q: "When should I consult a fertility specialist instead of a general gynaecologist?",
      a: "When you have been trying to conceive for over a year, have irregular periods, PCOS, or a known fertility issue in either partner.",
    },
    {
      q: "Does a fertility specialist evaluate both partners?",
      a: "Yes, both partners are evaluated together since infertility can originate from either or both sides.",
    },
    {
      q: "Can PCOS related infertility be treated without IVF?",
      a: "Yes, many PCOS cases respond well to ovulation induction, medication, and lifestyle changes before IVF is even considered.",
    },
    {
      q: "Is male infertility evaluation included in a fertility consultation?",
      a: "Yes, semen analysis and treatment planning for male factor infertility are a core part of the evaluation.",
    },
    {
      q: "How soon can treatment start after the first consultation?",
      a: "Once diagnostic tests are completed, treatment can typically begin within the same or next menstrual cycle, depending on the plan.",
    },
    {
      q: "What if IUI does not work?",
      a: "The specialist reviews the response and may recommend adjusting the protocol or moving forward to IVF if appropriate.",
    },
    {
      q: "Does age affect which treatment is recommended?",
      a: "Yes, age influences ovarian reserve and egg quality, which the specialist factors into the treatment plan.",
    },
    {
      q: "How is Dr. Priyanka Pachauri connected to Ujala Cygnus BrightStar Hospital?",
      a: "Dr. Priyanka Pachauri is associated with Ujala Cygnus BrightStar Hospital in Moradabad, providing fertility and infertility care through the hospital's infrastructure.",
    },
    {
      q: "How can I book a consultation with the fertility specialist?",
      a: "You can call the hospital directly or message on WhatsApp at 8979670705 to schedule an appointment.",
    },
    {
      q: "Is fertility preservation like egg freezing discussed during consultation?",
      a: "Yes, options such as egg freezing are discussed for women who wish to preserve fertility for medical or personal reasons.",
    },
  ];


  return (
    <main className="bg-white">
      <Banner />


      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">


          {/* Main Content */}
          <div className="flex-1 order-1">


            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility Specialist in Moradabad: Who They Are and Why the Right Choice Matters
              </h1>


              <p className="text-gray-700 mb-4">
                When a couple struggles to conceive, the first instinct is often
                to search for a clinic or a treatment name. But the outcome of
                fertility treatment depends far less on the name of a procedure
                and far more on the judgement of the specialist guiding it.
                Choosing the right fertility specialist in Moradabad is often
                the single most important decision in the entire journey toward
                parenthood.
              </p>


              <p className="text-gray-700">
                This guide explains exactly what a fertility specialist does,
                how their role is different from a general gynaecologist, what
                qualifications and experience actually matter, and how to choose
                the right specialist for your situation.
              </p>
            </div>


            {/* Section 2 — Specialist vs General Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a Fertility Specialist and How Are They Different From a General Gynaecologist
              </h2>


              <p className="text-gray-700 mb-4">
                A general gynaecologist manages a wide range of women&apos;s
                health concerns including routine checkups, pregnancy care,
                delivery, and general gynaecological conditions. A fertility
                specialist, also called a reproductive medicine specialist,
                focuses specifically on diagnosing and treating the underlying
                causes of infertility in both men and women.
              </p>


              <p className="text-gray-700 mb-4">
                While many gynaecologists can guide basic fertility advice, a
                dedicated fertility specialist typically has additional training
                in reproductive endocrinology, hormonal disorders, assisted
                reproductive techniques such as IUI and IVF, and male
                infertility evaluation. This specialised focus allows them to
                interpret complex hormonal patterns, plan advanced treatment
                protocols, and manage cases that do not respond to first line
                treatment.
              </p>


              <p className="text-gray-700">
                For couples facing straightforward pregnancy planning, a
                gynaecologist is often sufficient. But for anyone who has been
                trying to conceive for over a year without success, or who has
                an existing condition like PCOS, endometriosis, or a known
                fertility issue in either partner, consulting a specialised
                fertility expert leads to faster, more accurate answers.
              </p>
            </div>


            {/* Section 3 — What Specialist Does */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                What Does a Fertility Specialist Actually Do
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Detailed Diagnostic Evaluation
                  </h3>
                  <p className="text-gray-700">
                    A fertility specialist begins by investigating the actual
                    cause of infertility rather than assuming a diagnosis. This
                    typically includes hormonal blood tests, ultrasound
                    evaluation of the ovaries and uterus, tubal patency testing,
                    and semen analysis for the male partner. Both partners are
                    evaluated together, since infertility can originate from
                    either side or a combination of factors.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Personalised Treatment Planning
                  </h3>
                  <p className="text-gray-700">
                    Once the cause is identified, the specialist designs a
                    treatment plan suited to the couple&apos;s specific situation
                    rather than following a generic protocol. This could range
                    from simple lifestyle and ovulation guidance to hormonal
                    treatment, IUI, or IVF, depending on what the evaluation
                    reveals.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Managing PCOS and Hormonal Disorders
                  </h3>
                  <p className="text-gray-700">
                    PCOS is one of the most common causes of ovulatory
                    infertility, and a fertility specialist manages it through
                    a combination of medication, ovulation induction, and
                    lifestyle guidance, adjusting the approach based on how the
                    body responds over time.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Male Infertility Evaluation
                  </h3>
                  <p className="text-gray-700">
                    A significant proportion of infertility cases involve male
                    factors such as low sperm count, poor motility, or abnormal
                    sperm shape. A good fertility specialist evaluates the male
                    partner thoroughly rather than focusing only on the woman,
                    and coordinates treatment such as ICSI when required.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Guiding Couples Through IUI and IVF
                  </h3>
                  <p className="text-gray-700">
                    When simpler treatments are not sufficient, a fertility
                    specialist recommends and oversees more advanced options
                    like Intrauterine Insemination or In Vitro Fertilisation,
                    adjusting protocols based on ovarian response, egg quality,
                    and previous treatment history.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Fertility Preservation Counselling
                  </h3>
                  <p className="text-gray-700">
                    For women who wish to delay pregnancy for medical or
                    personal reasons, a fertility specialist also advises on
                    options such as egg freezing, helping preserve fertility
                    potential for the future.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 4 — Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs You Should Consult a Fertility Specialist
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>
                  Trying to conceive for over a year without success, or over
                  six months if the woman is above thirty five
                </li>
                <li>
                  Irregular or absent periods suggesting an ovulation disorder
                </li>
                <li>
                  A known diagnosis of PCOS, endometriosis, or fibroids affecting fertility
                </li>
                <li>Recurrent miscarriages</li>
                <li>
                  A known low sperm count or previous male fertility issue
                </li>
                <li>
                  Failed attempts with basic ovulation tracking or timed intercourse
                </li>
                <li>
                  A prior fertility treatment that did not succeed and needs re evaluation
                </li>
              </ul>


              <p className="text-gray-700">
                Recognising these signs early and seeking specialist
                consultation sooner rather than later often improves the
                overall chances of successful treatment, since many fertility
                related conditions respond better when addressed without long
                delays.
              </p>
            </div>


            {/* Section 5 — Qualities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Qualities to Look for in a Fertility Specialist in Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Recognised qualifications and specific training in reproductive medicine
                </li>
                <li>
                  A track record of handling both simple and complex infertility cases
                </li>
                <li>
                  Willingness to explain the diagnosis and treatment options clearly, without medical jargon
                </li>
                <li>
                  Honest discussion of realistic success rates rather than exaggerated promises
                </li>
                <li>
                  Access to proper laboratory and hospital infrastructure for advanced treatment
                </li>
                <li>
                  A collaborative approach that involves both partners in the diagnostic process
                </li>
                <li>
                  Emotional sensitivity, given how stressful fertility treatment can be for couples
                </li>
              </ul>
            </div>


            {/* Section 6 — Hospital Advantage */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Hospital Backed Fertility Specialists Offer an Advantage
              </h2>


              <p className="text-gray-700 mb-4">
                A fertility specialist working within a full hospital setup,
                rather than an isolated consultation room, offers meaningful
                advantages for patients.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Same day access to hormonal blood testing and ultrasound scans</li>
                <li>
                  Coordination with an embryology laboratory for IUI and IVF procedures
                </li>
                <li>
                  Immediate access to an operation theatre if a minor procedure such as egg retrieval is needed
                </li>
                <li>
                  Anaesthesia and emergency support available within the same facility
                </li>
                <li>
                  Seamless continuity of care if the treatment leads to a confirmed pregnancy
                </li>
                <li>
                  Ability to manage complications quickly, without referring patients elsewhere
                </li>
              </ul>


              <p className="text-gray-700">
                This kind of integrated setup reduces delays at every stage,
                which matters significantly in fertility treatment where timing
                often affects outcomes.
              </p>
            </div>


            {/* Section 7 — Expertise */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Dedicated Word on Expertise Behind the Care
              </h2>


              <p className="text-gray-700">
                The value of consulting a fertility specialist ultimately comes
                down to clinical judgement, the ability to read hormonal
                patterns correctly, choose the right protocol, and adjust
                treatment based on how a patient responds. Dr. Priyanka
                Pachauri, associated with Ujala Cygnus BrightStar Hospital in
                Moradabad, brings this expertise to fertility evaluation and
                infertility treatment in the city. Being connected to a full
                scale hospital rather than a stand alone consultation setup
                means patients benefit from coordinated diagnostic testing,
                laboratory support, and treatment planning, all guided by close,
                personalised attention throughout the fertility journey.
              </p>
            </div>


            {/* Section 8 — Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Fertility Specialists
              </h2>


              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Myth: Infertility is almost always the woman&apos;s issue. In
                  reality, male factors contribute to a significant share of
                  cases and require equal evaluation.
                </li>
                <li>
                  Myth: IVF is the only real solution offered by a fertility
                  specialist. In reality, many cases are resolved with simpler
                  treatments like ovulation induction or IUI.
                </li>
                <li>
                  Myth: Fertility treatment guarantees pregnancy. In reality,
                  success depends on multiple individual factors, and a
                  responsible specialist always sets realistic expectations.
                </li>
                <li>
                  Myth: Younger couples do not need to consult a specialist even
                  after a year of trying. In reality, age alone does not rule
                  out an underlying issue that needs proper diagnosis.
                </li>
                <li>
                  Myth: A fertility specialist is only needed after multiple
                  failed attempts. In reality, early consultation often leads to
                  simpler, faster solutions.
                </li>
              </ul>
            </div>


            {/* Section 9 — First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your First Visit to a Fertility Specialist
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  A detailed conversation about medical history for both partners
                </li>
                <li>
                  Review of any previous fertility related tests or treatments
                </li>
                <li>
                  Basic hormonal blood tests and an ultrasound scan for the woman
                </li>
                <li>
                  A recommendation for semen analysis for the male partner
                </li>
                <li>
                  A clear explanation of possible causes based on initial findings
                </li>
                <li>
                  A personalised next step, whether further testing or a treatment plan
                </li>
              </ul>
            </div>


            {/* Section 10 — Closing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing the Right Fertility Specialist in Moradabad
              </h2>


              <p className="text-gray-700">
                The path to parenthood looks different for every couple, and the
                right fertility specialist plays a central role in making that
                path clearer, faster, and less stressful. From accurate
                diagnosis and personalised treatment planning to managing
                conditions like PCOS and coordinating advanced procedures such
                as IUI and IVF, an experienced specialist backed by proper
                hospital infrastructure offers the kind of coordinated,
                attentive care that fertility treatment truly demands. For
                couples in Moradabad, having access to this level of specialised
                expertise locally means fewer delays, more accurate answers, and
                a stronger sense of support throughout the journey.
              </p>
            </div>


            {/* Section 11 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Contact Details
              </h2>


              <p className="text-black mb-6">
                For appointments or queries related to fertility consultation
                in Moradabad, you can reach Dr. Priyanka Pachauri through the
                following details.
              </p>


              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>


                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Contact Us</p>


                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>


                      <span className="text-gray-400">|</span>


                      <a href="tel:8979670705" className="hover:underline">
                        +91 8979670705 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>


                <div className="flex items-start gap-3">
                  <Mail
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Email</p>


                    <a
                      href="mailto:drpriyanka@gynaecologistmoradabad.com"
                      className="hover:underline"
                    >
                      drpriyanka@gynaecologistmoradabad.com
                    </a>
                  </div>
                </div>
              </div>


              <div className="flex gap-4 flex-wrap">
                <Link href="/contact">
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    <Phone className="inline mr-2" size={18} />
                    Contact Us
                  </button>
                </Link>


                <Link href="/services">
                  <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>


            {/* Section 12 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>


              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>


                    <p className="text-gray-700">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}