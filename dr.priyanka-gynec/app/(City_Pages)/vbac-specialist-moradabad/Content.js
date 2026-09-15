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

export default function VBACMoradabad() {
  const faqs = [
    {
      q: "What is VBAC?",
      a: "VBAC stands for Vaginal Birth After Cesarean, a vaginal delivery attempted after a previous cesarean section.",
    },
    {
      q: "Who offers VBAC care in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers structured, closely monitored VBAC and high-risk pregnancy care.",
    },
    {
      q: "Is VBAC safe?",
      a: "For well-selected candidates with proper monitoring, VBAC can be a safe option, though it carries a small risk of complications.",
    },
    {
      q: "Am I automatically eligible for VBAC after a c-section?",
      a: "Not automatically — eligibility depends on factors like incision type, reason for the earlier cesarean, and current pregnancy health.",
    },
    {
      q: "What happens if VBAC labor doesn't progress?",
      a: "An emergency cesarean is performed if labor doesn't progress safely, which is why immediate surgical backup is essential.",
    },
    {
      q: "Does the clinic support natural delivery where possible?",
      a: "Yes, the clinic states a commitment to encouraging normal vaginal delivery wherever it can be safely achieved.",
    },
    {
      q: "How do I book a consultation to discuss VBAC?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does the clinic offer high-risk pregnancy monitoring?",
      a: "Yes, structured high-risk pregnancy care is part of the clinic's services.",
    },
    {
      q: "What imaging technology does the clinic use during pregnancy?",
      a: "The clinic uses a Voluson E22 3D/4D ultrasound machine for detailed monitoring throughout pregnancy.",
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
                VBAC Specialist in Moradabad: A Complete Guide to Vaginal Birth
                After Cesarean
              </h1>

              <p className="mb-4 text-gray-700">
                For many women who have had a previous cesarean delivery, the
                idea of a vaginal birth in a future pregnancy — known as VBAC,
                or Vaginal Birth After Cesarean — can feel both hopeful and
                uncertain. With the right specialist, careful monitoring, and
                appropriate candidacy, VBAC can be a safe and successful option
                for many women.
              </p>

              <p className="text-gray-700">
                In Moradabad, finding a gynaecologist experienced in evaluating
                and managing VBAC deliveries is essential, since this decision
                requires careful medical judgment throughout pregnancy and
                labor. This article explains what VBAC involves, who is a good
                candidate, the risks and benefits, and why Dr. Priyanka
                Pachauri is a trusted choice for VBAC care in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is VBAC?
              </h2>

              <p className="mb-4 text-gray-700">
                VBAC stands for Vaginal Birth After Cesarean — a vaginal
                delivery attempted in a pregnancy following one or more previous
                cesarean sections.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Not automatically ruled out just because a woman has had a
                  previous c-section
                </li>
                <li>
                  Success rates are generally favorable for well-selected
                  candidates, particularly when the reason for the earlier
                  cesarean is unlikely to recur
                </li>
                <li>
                  Requires careful evaluation of the previous cesarean details,
                  including the type of uterine incision used
                </li>
                <li>
                  Involves closer monitoring during labor compared to a standard
                  vaginal delivery
                </li>
                <li>
                  Decision-making is individualized based on each woman&apos;s
                  medical history
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Some Women Consider VBAC
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Faster physical recovery compared to major abdominal surgery
                </li>
                <li>
                  Shorter hospital stay in most successful VBAC deliveries
                </li>
                <li>
                  Avoiding risks associated with multiple cesareans, such as
                  increased surgical complications with each repeat c-section
                </li>
                <li>
                  A desire for a vaginal birth experience for personal reasons
                </li>
                <li>
                  Lower risk of certain complications in future pregnancies,
                  since repeated cesareans can increase risks like placenta
                  accreta
                </li>
                <li>
                  Reduced anesthesia and surgical risk associated with major
                  surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Good Candidate for VBAC?
              </h2>

              <p className="mb-4 text-gray-700">
                Not every woman with a previous cesarean is automatically a
                suitable candidate. Doctors typically evaluate several factors:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Type of uterine incision:</strong> A low transverse
                  incision is generally more favorable than other incision types
                </li>
                <li>
                  <strong>Number of previous cesareans:</strong> One previous
                  low-transverse cesarean is often more favorable than multiple
                  prior surgeries
                </li>
                <li>
                  <strong>Reason for the previous cesarean:</strong> If the
                  original reason (such as fetal distress) is unlikely to recur,
                  VBAC may be more suitable
                </li>
                <li>
                  <strong>Current pregnancy health:</strong> The baby&apos;s
                  position, size, and overall pregnancy progress all play a role
                </li>
                <li>
                  <strong>Access to emergency cesarean:</strong> VBAC is
                  generally recommended only in facilities prepared to perform
                  an emergency c-section quickly if needed
                </li>
                <li>
                  <strong>Time gap between pregnancies:</strong> A longer
                  interval since the last cesarean is often considered more
                  favorable
                </li>
                <li>
                  <strong>Overall maternal health:</strong> Absence of
                  conditions that would independently indicate a repeat cesarean
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits and Risks of VBAC
              </h2>

              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Potential Benefits
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-gray-700">
                  <li>Shorter recovery time and hospital stay</li>
                  <li>Lower risk of infection compared to major surgery</li>
                  <li>Reduced blood loss in most successful cases</li>
                  <li>
                    Avoids the cumulative surgical risks of multiple cesareans
                    over time
                  </li>
                  <li>
                    Supports a faster return to normal daily activities and
                    newborn care
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Potential Risks
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-gray-700">
                  <li>
                    A small risk of uterine rupture along the previous cesarean
                    scar, which is why careful candidate selection and monitoring
                    are essential
                  </li>
                  <li>
                    Possibility that labor may not progress successfully,
                    requiring an emergency cesarean
                  </li>
                  <li>
                    Requires access to immediate surgical capability throughout
                    labor
                  </li>
                  <li>
                    Emotional considerations if labor does not proceed as
                    planned and a repeat cesarean becomes necessary
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During a VBAC Labor?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Continuous fetal monitoring:</strong> Typically used
                  throughout labor to watch for any signs of distress
                </li>
                <li>
                  <strong>Labor progression:</strong> May be allowed to progress
                  naturally, though some cases may involve careful use of
                  labor-inducing methods under close supervision
                </li>
                <li>
                  <strong>Pain management:</strong> Options are generally
                  similar to those available in a standard vaginal delivery
                </li>
                <li>
                  <strong>Emergency preparedness:</strong> The medical team
                  remains prepared for an emergency cesarean at any point during
                  labor
                </li>
                <li>
                  <strong>Close observation:</strong> Delivery is closely
                  observed given the higher level of monitoring VBAC requires
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Specialist Matters
              </h2>

              <p className="mb-4 text-gray-700">
                VBAC is not a decision to make lightly, and the expertise of the
                treating doctor significantly affects both safety and the
                likelihood of a successful vaginal delivery. A good VBAC
                specialist should offer:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Careful, individualized evaluation of candidacy based on full
                  medical history
                </li>
                <li>
                  Access to continuous fetal monitoring equipment throughout
                  labor
                </li>
                <li>
                  Availability of immediate surgical backup, ensuring an
                  emergency cesarean can be performed quickly if required
                </li>
                <li>
                  Clear, honest communication about risks, benefits, and
                  realistic expectations
                </li>
                <li>
                  Experience managing both successful VBAC deliveries and, when
                  necessary, safely transitioning to a repeat cesarean
                </li>
                <li>
                  A supportive, non-judgmental approach, regardless of how labor
                  ultimately progresses
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – VBAC and High-Risk Pregnancy Specialist
                in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers structured
                pregnancy and delivery care in Moradabad, with a stated focus on
                supporting natural, vaginal delivery wherever it can be safely
                achieved. According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her practice is built to support exactly the kind of careful,
                individualized care that VBAC requires.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Key Features of Care
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A stated commitment to encouraging normal vaginal delivery
                      wherever safely possible, while remaining fully equipped to
                      manage complications
                    </li>
                    <li>
                      High-risk pregnancy management, with structured monitoring
                      throughout pregnancy
                    </li>
                    <li>
                      Advanced diagnostic imaging, including a Voluson E22 3D/4D
                      ultrasound machine, useful for assessing placental position
                      and fetal wellbeing
                    </li>
                    <li>
                      Antenatal and postnatal care, ensuring continuity from
                      early pregnancy through delivery and recovery
                    </li>
                    <li>
                      A &quot;Her Health First&quot; approach, meaning treatment
                      decisions are made collaboratively with the patient
                    </li>
                    <li>
                      Surgical capability for cesarean delivery, ensuring that
                      if VBAC is not progressing safely, a well-prepared
                      transition to surgery is available
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Why Patients Choose the Clinic
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Patient testimonials reflect a consistent emphasis on
                      clear communication and support throughout the pregnancy
                      journey
                    </li>
                    <li>
                      Qualities that are especially important for women
                      navigating the decision-making process around VBAC
                    </li>
                    <li>
                      The clinic is located in Gandhi Nagar, Moradabad, and is
                      accessible to patients from across the city and
                      surrounding areas
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor About VBAC
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Am I a good candidate for VBAC based on my previous cesarean
                  and current pregnancy?
                </li>
                <li>
                  What type of incision was used in my previous cesarean, and
                  how does that affect my candidacy?
                </li>
                <li>
                  What monitoring will be used during labor, and how quickly can
                  an emergency cesarean be performed if needed?
                </li>
                <li>
                  What are the specific risks and benefits in my individual
                  case?
                </li>
                <li>
                  How will my birth plan be adjusted if labor does not progress
                  as expected?
                </li>
                <li>
                  What support will be available for me and my partner
                  throughout the process?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About VBAC
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Once a cesarean, always a cesarean.&quot;</strong>{" "}
                  This outdated view has changed significantly — many women with
                  a previous cesarean are good candidates for a safe VBAC.
                </li>
                <li>
                  <strong>&quot;VBAC is always riskier than a repeat cesarean.&quot;</strong>{" "}
                  Risk levels depend heavily on individual factors; for
                  well-selected candidates, VBAC can be a safe option with
                  appropriate monitoring.
                </li>
                <li>
                  <strong>&quot;VBAC guarantees a vaginal delivery.&quot;</strong>{" "}
                  Even with careful candidacy evaluation, labor may not progress
                  as planned, and a repeat cesarean may still become necessary.
                </li>
                <li>
                  <strong>&quot;Any hospital or clinic can safely support a VBAC delivery.&quot;</strong>{" "}
                  VBAC requires access to continuous monitoring and immediate
                  surgical backup, which not every facility is equipped to
                  provide.
                </li>
                <li>
                  <strong>&quot;The decision is purely medical, with no room for personal preference.&quot;</strong>{" "}
                  A good VBAC specialist considers both medical safety and the
                  mother&apos;s personal birth preferences in the
                  decision-making process.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for a VBAC Pregnancy and Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gather records from your previous cesarean, including
                  operative notes describing the type of incision used
                </li>
                <li>
                  Discuss your birth preferences early with your doctor, ideally
                  starting in the first or second trimester
                </li>
                <li>
                  Ask about the hospital&apos;s VBAC protocols, including
                  monitoring practices and how quickly an emergency cesarean can
                  be arranged if needed
                </li>
                <li>
                  Stay informed about warning signs to watch for during
                  pregnancy and labor, as advised by your doctor
                </li>
                <li>
                  Consider attending childbirth education sessions focused on
                  VBAC, if available
                </li>
                <li>
                  Prepare a flexible birth plan, acknowledging that
                  circumstances during labor may require a shift to cesarean
                  delivery
                </li>
                <li>
                  Build a support system, including your partner or family, who
                  understand and support your birth preferences while remaining
                  open to medical guidance
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                VBAC vs. Elective Repeat Cesarean: Key Differences
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border-b px-4 py-3 text-left font-semibold text-gray-900">
                        Factor
                      </th>
                      <th className="border-b px-4 py-3 text-left font-semibold text-gray-900">
                        VBAC
                      </th>
                      <th className="border-b px-4 py-3 text-left font-semibold text-gray-900">
                        Elective Repeat Cesarean
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-gray-700">
                        Recovery time
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Typically shorter
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Longer recovery from surgery
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">
                        Hospital stay
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Often shorter
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Typically longer
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">
                        Predictability
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Less predictable timing
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Can be scheduled in advance
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">
                        Long-term surgical risk
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Helps avoid cumulative risks
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Each additional cesarean carries higher risks
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">
                        Monitoring requirements
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        More intensive labor monitoring
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Standard surgical monitoring
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">
                        Personal preference
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Supports vaginal birth experience
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Offers predictability of planned surgery
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-gray-700">
                Ultimately, the right choice depends on individual medical
                history, personal preference, and a thorough discussion with a
                trusted specialist who can guide the decision based on your
                specific circumstances.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                To discuss VBAC options with Dr. Priyanka Pachauri in Moradabad,
                reach out through any of the following:
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