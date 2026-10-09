import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function OvarianCystTreatmentCost() {
  const faqs = [
    {
      q: "How much does ovarian cyst treatment cost in India?",
      a: "It ranges from the price of a scan for observation to a surgical bill running into tens of thousands of rupees.",
    },
    {
      q: "What is the cost of laparoscopic ovarian cyst surgery?",
      a: "Many hospitals quote roughly ₹50,000 to ₹1 lakh or more, depending on city and complexity.",
    },
    {
      q: "Do all ovarian cysts need surgery?",
      a: "No. Many small functional cysts disappear without treatment.",
    },
    {
      q: "Is laparoscopic surgery costlier than open surgery?",
      a: "The fee may be higher, but the shorter stay and faster recovery can offset it.",
    },
    {
      q: "Does insurance cover ovarian cyst surgery?",
      a: "Many policies cover medically necessary surgery. Check your policy terms.",
    },
    {
      q: "What can add to the final bill?",
      a: "Pre-operative tests, histopathology, room upgrades and extra hospital days.",
    },
    {
      q: "How can I get an accurate estimate?",
      a: "Share your scan reports and ask for a written, itemised estimate after consultation.",
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
                Ovarian Cyst Treatment Cost: Tests, Medicines, Surgery and Ways
                to Plan
              </h1>


              <p className="mb-4 text-gray-700">
                When a scan shows an ovarian cyst, two questions follow quickly:
                &quot;Is it serious?&quot; and &quot;How much will treatment
                cost?&quot; The second question matters because the answer
                ranges from almost nothing, when a cyst is simply watched, to a
                significant surgical bill when removal is needed.
              </p>


              <p className="mb-4 text-gray-700">
                This guide explains what you may spend at each stage, what
                changes the total, what is usually included and how to plan,
                along with how a transparent consultation works at Dr. Priyanka
                Gynaec in Moradabad.
              </p>


              
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Costs Vary So Much
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Many cysts need no treatment.</strong> Small
                  functional cysts often disappear by themselves, so cost may be
                  limited to a scan and a follow-up.
                </li>
                <li>
                  <strong>Different cysts need different care.</strong> A
                  dermoid cyst or chocolate cyst usually needs surgery, while a
                  functional cyst often does not.
                </li>
                <li>
                  <strong>Surgery type matters.</strong> Laparoscopic, open and
                  robotic approaches are priced differently.
                </li>
                <li>
                  <strong>Hospital and city differ.</strong> Metro hospitals
                  usually charge more than smaller cities.
                </li>
                <li>
                  <strong>Room type and stay vary.</strong> A day-care stay
                  costs less than several nights.
                </li>
                <li>
                  <strong>Complexity changes the bill.</strong> Large, bilateral
                  or recurrent cysts take longer to treat.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stage 1: Consultation and Diagnosis Costs
              </h2>


              <p className="mb-4 text-gray-700">
                Every plan starts with a check-up and an ultrasound.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What is usually involved:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation with a gynaecologist</li>
                <li>Pelvic examination</li>
                <li>Transvaginal or abdominal ultrasound</li>
                <li>Pregnancy test when relevant</li>
                <li>
                  Blood tests such as hormones, CA-125 or other markers, if
                  advised
                </li>
                <li>MRI or CT scan in complex or unclear cases</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Cost points to expect:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Consultation fee:</strong> commonly a few hundred to a
                  couple of thousand rupees, depending on the doctor and city
                </li>
                <li>
                  <strong>Ultrasound:</strong> usually a modest, separate charge
                </li>
                <li>
                  <strong>Blood tests:</strong> a small to moderate amount,
                  depending on how many are needed
                </li>
                <li>
                  <strong>MRI or CT:</strong> noticeably higher, and only needed
                  in selected cases
                </li>
              </ul>


              <p className="text-gray-700">
                <strong>Tip:</strong> carry earlier scans and reports. It
                prevents repeat testing and saves money.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stage 2: Observation and Follow-Up
              </h2>


              <p className="mb-4 text-gray-700">
                When a cyst is small and simple, the doctor may simply watch it.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it involves:</strong> a repeat ultrasound after
                  one to three menstrual cycles
                </li>
                <li>
                  <strong>Who it suits:</strong> small, symptom-free functional
                  cysts
                </li>
                <li>
                  <strong>Cost level:</strong> the lowest option, usually the
                  price of one or two follow-up scans and consultations
                </li>
                <li>
                  <strong>Why it works:</strong> most functional cysts resolve
                  on their own
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stage 3: Medicines
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pain relief:</strong> inexpensive, taken only as
                  advised
                </li>
                <li>
                  <strong>Hormonal medicines:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>May help prevent new functional cysts</li>
                    <li>Do not shrink most existing cysts</li>
                    <li>Not suitable if you are trying to conceive</li>
                  </ul>
                </li>
                <li>
                  <strong>Treatment of underlying conditions:</strong> such as
                  PCOS or endometriosis, which may continue for months
                </li>
              </ul>


              <p className="mb-4 text-gray-700">
                <strong>Cost level:</strong> low to moderate, but it can add up
                if long-term treatment is needed.
              </p>


              <p className="text-gray-700">
                <strong>Important:</strong> do not self-medicate. The right
                medicine depends on the cyst type and your plans for pregnancy.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stage 4: Surgery Costs
              </h2>


              <p className="mb-4 text-gray-700">
                When a cyst is large, persistent, painful, complex or likely to
                be a pathological type, surgery is advised.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Cystectomy (Keyhole Surgery)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it is:</strong> removal of the cyst through small
                  incisions, preserving healthy ovarian tissue
                </li>
                <li>
                  <strong>Indicative range:</strong> many Indian hospitals quote
                  roughly ₹50,000 to ₹1 lakh or more, with wide variation by
                  city, hospital and complexity
                </li>
                <li>
                  <strong>What the price usually covers:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Surgeon&apos;s fee</li>
                    <li>Operation theatre and equipment charges</li>
                    <li>Anaesthesia</li>
                    <li>Hospital stay, often one day</li>
                    <li>Basic medicines and consumables</li>
                  </ul>
                </li>
                <li>
                  <strong>Often extra:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Pre-surgery tests</li>
                    <li>
                      Histopathology (laboratory examination of the removed
                      cyst)
                    </li>
                    <li>Room upgrade</li>
                    <li>Follow-up visits</li>
                  </ul>
                </li>
                <li>
                  <strong>Why it may cost more than open surgery:</strong>{" "}
                  advanced instruments and technology
                </li>
                <li>
                  <strong>Why it may cost less overall:</strong> shorter stay,
                  faster recovery and quicker return to work
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Open Surgery (Laparotomy)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>When used:</strong> very large cysts or when cancer is
                  suspected
                </li>
                <li>
                  <strong>Cost drivers:</strong> a longer hospital stay and
                  recovery
                </li>
                <li>
                  <strong>Typical note:</strong> the surgery fee may be lower,
                  but the total cost can rise with a longer stay
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Robotic-Assisted Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Where available:</strong> only in some larger hospitals
                </li>
                <li>
                  <strong>Cost level:</strong> usually the highest of the three
                  approaches
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Removal of the Ovary (Oophorectomy)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>When needed:</strong> only in special situations, such
                  as a twisted ovary or a very suspicious cyst
                </li>
                <li>
                  <strong>Cost:</strong> depends on the procedure and hospital
                  stay
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cost by Type of Cyst
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Functional cyst:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Usually observation</li>
                    <li>Lowest cost</li>
                  </ul>
                </li>
                <li>
                  <strong>Endometrioma (chocolate cyst):</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Often needs laparoscopic surgery</li>
                    <li>
                      May involve additional steps to treat endometriosis
                    </li>
                    <li>
                      Possible follow-up hormonal treatment or fertility planning
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Dermoid cyst:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Needs surgical removal</li>
                    <li>
                      Cost similar to a standard laparoscopic cystectomy
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Cystadenoma:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Surgical removal, with cost depending on size</li>
                  </ul>
                </li>
                <li>
                  <strong>PCOS ovaries:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>
                      Usually medical and lifestyle management rather than
                      surgery
                    </li>
                    <li>
                      Cost is mainly consultations, tests and medicines over time
                    </li>
                  </ul>
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Usually Included in a Surgery Estimate?
              </h2>


              <p className="mb-4 text-gray-700">
                Ask your clinic to list these clearly.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Surgeon&apos;s fee</li>
                <li>Anaesthesia fee</li>
                <li>Operation theatre and laparoscopic equipment charges</li>
                <li>Hospital stay and nursing care</li>
                <li>Routine medicines and consumables</li>
                <li>Basic investigations during admission</li>
                <li>Discharge medicines</li>
                <li>Post-surgery review visit</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What May Be Charged Separately?
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pre-operative blood tests, ECG or chest X-ray</li>
                <li>MRI or CT scan</li>
                <li>Histopathology report of the removed cyst</li>
                <li>Upgraded room or extra days in hospital</li>
                <li>Special instruments or tissue-sealing devices, if used</li>
                <li>Blood transfusion, rarely needed</li>
                <li>Treatment of any complication</li>
                <li>Follow-up scans and consultations</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Always ask: &quot;Is this estimate all-inclusive? What could
                make the final bill higher?&quot;
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Change the Total Cost
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Type of cyst and complexity</li>
                <li>Size and number of cysts</li>
                <li>One or both ovaries involved</li>
                <li>Surgical approach: laparoscopic, open or robotic</li>
                <li>Surgeon&apos;s experience and clinic technology</li>
                <li>Hospital category and city</li>
                <li>Room type: general, semi-private or private</li>
                <li>Length of stay</li>
                <li>
                  Associated conditions: such as endometriosis or fibroids
                  treated in the same sitting
                </li>
                <li>
                  Your general health: other conditions may need extra tests or
                  monitoring
                </li>
                <li>Insurance or cashless arrangement</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Does Health Insurance Cover Ovarian Cyst Treatment?
              </h2>


              <p className="mb-4 text-gray-700">
                Many health insurance policies cover medically necessary cyst
                removal surgery, but terms vary.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Check these points in your policy:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Waiting period for the procedure</li>
                <li>Room rent limits</li>
                <li>Sub-limits or co-payments</li>
                <li>Exclusions</li>
                <li>Pre- and post-hospitalisation cover</li>
                <li>Day-care procedure coverage</li>
              </ul>


              <p className="mb-4 text-gray-700">
                Ask the clinic what documents the insurer will need, such as
                scan reports and the doctor&apos;s recommendation.
              </p>


              <p className="mb-4 text-gray-700">
                Confirm in advance whether cashless treatment is possible at the
                hospital where the surgery will be done.
              </p>


              <p className="text-gray-700">
                Policies often treat surgery done for diagnosis and treatment
                differently from cosmetic procedures, so read the wording
                carefully.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is a Cheaper Surgery Always Better?
              </h2>


              <p className="mb-4 text-gray-700">
                Not necessarily. Look beyond the headline price.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask what is included. A low quote may exclude tests, medicines
                  or follow-up.
                </li>
                <li>
                  Check the surgeon&apos;s experience with laparoscopic cyst
                  surgery.
                </li>
                <li>
                  Look at the goal. Preserving healthy ovarian tissue matters,
                  especially if you plan a pregnancy.
                </li>
                <li>
                  Consider recovery time. Faster recovery means less time off
                  work.
                </li>
                <li>
                  Beware of pressure. Avoid clinics that push surgery without a
                  clear reason.
                </li>
                <li>Take a second opinion if you are unsure.</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Smart Ways to Manage the Cost
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Book a consultation early. Small problems are cheaper to
                  manage than emergencies.
                </li>
                <li>Carry all earlier reports to avoid repeat tests.</li>
                <li>
                  Ask whether observation is suitable before deciding on
                  surgery.
                </li>
                <li>Request a written, itemised estimate.</li>
                <li>
                  Ask about day-care or short-stay options, where medically
                  appropriate.
                </li>
                <li>Check insurance coverage before admission.</li>
                <li>Ask whether follow-up visits are included.</li>
                <li>Maintain a healthy lifestyle to reduce recurrence.</li>
                <li>
                  Do not delay treatment if the doctor advises surgery, since an
                  emergency such as a twisted or ruptured cyst can be costlier
                  and riskier.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hidden Costs of Delay
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Emergency treatment if a cyst twists or bursts, which may need
                  urgent surgery
                </li>
                <li>
                  Greater damage to ovarian tissue, especially with
                  endometriomas
                </li>
                <li>Longer hospital stay if complications occur</li>
                <li>
                  Added fertility concerns if the cyst is affecting ovarian
                  health
                </li>
                <li>More anxiety and lost workdays while waiting</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ovarian Cysts and Fertility: Cost Planning
              </h2>


              <p className="mb-4 text-gray-700">
                If you plan to conceive, tell your doctor early.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgery should preserve as much healthy ovarian tissue as
                  possible.
                </li>
                <li>
                  Some women may also need fertility planning after surgery, such
                  as ovulation induction, IUI or IVF, which adds a separate cost.
                </li>
                <li>
                  Ask for a combined plan so the surgery and fertility steps are
                  well coordinated.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Ask Before Agreeing to Treatment
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What type of cyst do I have, and does it really need
                  treatment?
                </li>
                <li>Can it be watched first?</li>
                <li>
                  What are the surgical options, and which do you recommend?
                </li>
                <li>Will my ovary and fertility be protected?</li>
                <li>
                  What is the total estimated cost, and what is included?
                </li>
                <li>
                  Are tests, histopathology and follow-up visits included?
                </li>
                <li>How long will I stay in the hospital?</li>
                <li>How long will recovery take?</li>
                <li>What happens if there is a complication?</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad
              </h2>


              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec offers women&apos;s health and fertility care
                under the philosophy &quot;Her Health First&quot;.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic cystectomy:</strong> precision 3D keyhole
                  surgery to remove ovarian cysts while preserving fertility
                </li>
                <li>
                  <strong>3D laparoscopic expertise:</strong> also used for
                  endometriosis surgery, myomectomy and hysterectomy
                </li>
                <li>
                  <strong>3D/4D ultrasound:</strong> detailed imaging for
                  accurate diagnosis
                </li>
                <li>
                  <strong>Fertility and IVF services:</strong> for women who
                  need fertility planning alongside cyst treatment
                </li>
                <li>
                  <strong>Complete journey support:</strong> from diagnosis and
                  surgery to pregnancy care and normal delivery
                </li>
                <li>
                  <strong>Unhurried consultations:</strong> your questions,
                  including cost, are welcome from the first visit
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Get a Personalised Cost Estimate
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Share your ultrasound and other reports on WhatsApp before
                  your visit.
                </li>
                <li>
                  Mention your symptoms, age and any plans for pregnancy.
                </li>
                <li>
                  Ask for the estimate in writing after the doctor confirms your
                  plan.
                </li>
                <li>
                  Confirm what is included and what might be charged separately.
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Please contact the clinic directly for current consultation fees
                and treatment pricing.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
              </h2>


              <p className="mb-4 text-gray-700">
                Do not let worry about cost delay a diagnosis. Start with a scan
                review and an honest conversation.
              </p>


              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                      <p className="text-sm text-gray-700">
                        Fertility • Maternity • 3D Laparoscopy
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
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
                      </a>
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