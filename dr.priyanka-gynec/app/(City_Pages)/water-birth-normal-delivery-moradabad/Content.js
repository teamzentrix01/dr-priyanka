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

export default function WaterBirthAndNormalDelivery() {
  const faqs = [
    {
      q: "What is water birth?",
      a: "It involves laboring, and sometimes delivering, in a pool of warm water as a natural approach to pain relief during labor.",
    },
    {
      q: "Is water birth available in Moradabad?",
      a: "It remains a specialized service offered at only a limited number of facilities in India, so it's best to confirm directly with any clinic about availability.",
    },
    {
      q: "Who can I consult about natural delivery options in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) supports natural delivery wherever safely possible as part of her pregnancy care philosophy.",
    },
    {
      q: "Who is eligible for water birth?",
      a: "Generally, women with a low-risk, uncomplicated pregnancy, at least 37 weeks along, with a single baby in a head-down position.",
    },
    {
      q: "What are the benefits of water birth?",
      a: "Reported benefits include natural pain relief, a sense of comfort and weightlessness, and potentially shorter labor duration for some women.",
    },
    {
      q: "Is water birth safe?",
      a: "When performed at a properly equipped facility for appropriately selected candidates, it's considered a safe option, though a backup plan is always necessary.",
    },
    {
      q: "What other natural pain relief options are available during labor?",
      a: "Options include movement, breathing techniques, continuous labor support, and non-pharmacological comfort measures like massage or warm compresses.",
    },
    {
      q: "Does the clinic support normal, natural delivery in general?",
      a: "Yes, the clinic states a commitment to encouraging normal vaginal delivery wherever it can be safely achieved.",
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
                Water Birth and Normal Delivery: Understanding Your Natural
                Birth Options in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                For many expecting mothers, the idea of a gentler, more natural
                approach to labor — including options like water birth — is an
                appealing part of planning for delivery. While water birth
                remains a relatively specialized offering in India, available at
                only a limited number of centers, understanding what it involves
                can help you have an informed conversation with your doctor about
                the natural delivery options that matter most to you. This
                article explains what water birth is, how it compares to other
                natural delivery approaches, what to consider before choosing
                it, and how Dr. Priyanka Pachauri supports mothers pursuing a
                normal, natural delivery experience in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Water Birth
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Water birth</strong> involves laboring, and sometimes
                  delivering, in a pool of warm water, typically maintained at a
                  controlled temperature throughout the process.
                </li>
                <li>
                  <strong>Some women choose to labor in water and then get out
                  of the pool</strong> for the actual delivery, while others
                  remain in the water for the birth itself.
                </li>
                <li>
                  <strong>The warm water is thought to help with relaxation and
                  pain management</strong>, potentially reducing the need for
                  other pain relief methods.
                </li>
                <li>
                  <strong>It&apos;s considered a form of natural,
                  non-pharmacological pain relief</strong>, appealing to women
                  who want to minimize medical intervention during labor.
                </li>
                <li>
                  <strong>It remains a relatively specialized service in
                  India</strong>, available at a limited number of dedicated
                  birthing centers, primarily in larger metro cities.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Reported Benefits of Water Birth
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Natural pain relief</strong>, with warm water
                  potentially helping to ease the intensity of contractions.
                </li>
                <li>
                  <strong>A sense of weightlessness and comfort</strong>, which
                  some women find calming during labor.
                </li>
                <li>
                  <strong>Reduced adrenaline and increased comfort</strong>,
                  which some proponents suggest may support the natural release
                  of labor-supporting hormones.
                </li>
                <li>
                  <strong>A feeling of privacy and calm</strong>, which some
                  women associate with the birthing pool environment.
                </li>
                <li>
                  <strong>Some studies suggest a potentially shorter labor
                  duration</strong> for women who labor in water, though
                  individual experiences vary considerably.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Might Be a Candidate for Water Birth
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Women with a low-risk, uncomplicated
                  pregnancy</strong>, generally considered essential for water
                  birth eligibility.
                </li>
                <li>
                  <strong>Pregnancies that have reached at least 37
                  weeks</strong>, ensuring the baby is considered full-term.
                </li>
                <li>
                  <strong>A single baby in the head-down position</strong>,
                  since water birth generally isn&apos;t recommended for twin
                  pregnancies or babies in other positions.
                </li>
                <li>
                  <strong>Women who are medically and physically fit</strong>,
                  without conditions that would make water birth inadvisable.
                </li>
                <li>
                  <strong>Access to a facility specifically equipped and trained
                  for water birth</strong>, which is essential for safety, given
                  the specific protocols involved.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Important Considerations Before Choosing Water Birth
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>It&apos;s not suitable for every pregnancy</strong>,
                  particularly those involving complications, multiple babies, or
                  non-head-down positioning.
                </li>
                <li>
                  <strong>Facilities offering water birth need specific training
                  and equipment</strong>, since not every hospital or birthing
                  center is set up to safely support this option.
                </li>
                <li>
                  <strong>A backup plan for standard delivery or emergency
                  intervention is always necessary</strong>, since circumstances
                  during labor can change.
                </li>
                <li>
                  <strong>Discussing this option thoroughly with your
                  doctor</strong> ensures you understand both the potential
                  benefits and any specific risks relevant to your situation.
                </li>
                <li>
                  <strong>Availability varies significantly by location</strong>,
                  meaning it&apos;s important to confirm directly with any
                  facility whether this option is actually offered before
                  planning around it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Other Natural Delivery Approaches Worth Considering
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Movement and position changes during labor</strong>,
                  such as walking, using a birthing ball, or changing positions
                  to help manage discomfort and support labor progress.
                </li>
                <li>
                  <strong>Breathing techniques and relaxation methods</strong>,
                  which can be practiced in advance through antenatal classes.
                </li>
                <li>
                  <strong>A calm, low-intervention labor environment</strong>,
                  with dimmed lighting and minimal unnecessary interruptions,
                  where medically appropriate.
                </li>
                <li>
                  <strong>Continuous labor support</strong>, whether from a
                  partner, family member, or doula, which many women find
                  helpful during the labor process.
                </li>
                <li>
                  <strong>Non-pharmacological pain relief methods</strong>, such
                  as warm compresses, massage, or hydrotherapy in a shower or
                  tub, even without a dedicated birthing pool.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Discussing Your Birth Preferences Early Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Not every hospital or clinic offers every natural
                  birth option</strong>, so understanding what&apos;s available
                  helps set realistic expectations.
                </li>
                <li>
                  <strong>Your doctor can help you understand which options are
                  medically appropriate</strong> for your specific pregnancy.
                </li>
                <li>
                  <strong>Early conversations allow time to explore
                  alternatives</strong> if a specific option, like water birth,
                  isn&apos;t available at your chosen facility.
                </li>
                <li>
                  <strong>A shared understanding between you and your medical
                  team</strong> about your preferences supports a more
                  collaborative approach to your delivery.
                </li>
                <li>
                  <strong>Flexibility remains important</strong>, since safety
                  considerations may require adjusting your birth plan as labor
                  unfolds.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Supporting Natural Delivery in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers pregnancy and
                delivery care in Moradabad with a stated focus on natural
                delivery. According to her official website, (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), her approach includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A stated commitment to encouraging natural, normal
                  vaginal delivery wherever safely possible</strong>, reflecting
                  a broader philosophy of supporting a less interventionist
                  approach to birth when medically appropriate.
                </li>
                <li>
                  <strong>A &quot;Her Health First&quot; philosophy</strong>,
                  ensuring your birth preferences are genuinely discussed and
                  considered alongside medical safety.
                </li>
                <li>
                  <strong>Antenatal and postnatal care</strong>, providing
                  continuity of support throughout your pregnancy journey.
                </li>
                <li>
                  <strong>High-risk pregnancy management</strong>, ensuring that
                  even when complications arise, care remains structured and
                  attentive.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Water birth specifically is a specialized service that varies
                significantly by facility, so if this is an option you&apos;re
                interested in, it&apos;s best to discuss it directly with the
                clinic to understand what natural delivery and pain management
                options are currently available. Patient testimonials on the
                website consistently reflect a supportive, well-communicated
                care experience, which matters greatly when discussing your
                birth preferences. The clinic is located in Gandhi Nagar,
                Moradabad, making it accessible for antenatal care and delivery
                planning from across the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Water Birth Typically Works, Where It&apos;s Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>The mother usually enters the birthing pool once labor
                  is well established</strong>, often around 6–7 centimeters of
                  cervical dilation, since entering too early can sometimes slow
                  labor progress.
                </li>
                <li>
                  <strong>Water temperature is carefully controlled and
                  monitored</strong> throughout labor and delivery, generally
                  kept within a specific safe range.
                </li>
                <li>
                  <strong>Continuous monitoring of both mother and baby
                  continues</strong> even while in the water, using methods
                  compatible with the birthing pool setting.
                </li>
                <li>
                  <strong>The mother can choose to remain in the water for
                  delivery or step out</strong>, depending on her preference and
                  how labor progresses.
                </li>
                <li>
                  <strong>Trained staff remain present throughout</strong>,
                  ready to assist or transition to a different setting if any
                  concerns arise during the process.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for a Conversation About Natural Birth Preferences
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Research what&apos;s realistically available</strong>{" "}
                  at hospitals and birthing centers in and around Moradabad
                  before finalizing your birth plan expectations.
                </li>
                <li>
                  <strong>List your specific priorities</strong>, whether
                  that&apos;s minimizing pain medication, having continuous
                  labor support, or exploring water-based comfort measures.
                </li>
                <li>
                  <strong>Discuss any hesitations or concerns about natural
                  birth approaches openly with your doctor</strong>, so you can
                  make a fully informed decision.
                </li>
                <li>
                  <strong>Ask about antenatal classes or childbirth education
                  resources</strong> that may help you prepare for a more
                  natural labor experience, regardless of the specific methods
                  available.
                </li>
                <li>
                  <strong>Keep an open mind about flexibility</strong>,
                  understanding that your final birth experience will always
                  prioritize the safety of you and your baby above specific
                  preferences.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Building Confidence for Your Birth Experience
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Educate yourself about the labor process</strong>,
                  since understanding what to expect can reduce anxiety
                  regardless of which specific pain management approach you
                  choose.
                </li>
                <li>
                  <strong>Practice relaxation and breathing techniques</strong>{" "}
                  in the weeks leading up to your due date, which can be useful
                  whether or not water-based methods are available to you.
                </li>
                <li>
                  <strong>Involve your support person in your preparation</strong>,
                  so they understand how to help you through labor.
                </li>
                <li>
                  <strong>Trust your medical team&apos;s guidance</strong>,
                  especially if circumstances require adjusting your original
                  birth plan.
                </li>
                <li>
                  <strong>Focus on your overall goal of a safe, supported
                  delivery</strong>, recognizing that the path to that goal may
                  look different from your initial expectations, and that&apos;s
                  completely okay.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask About Natural Delivery Options
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What natural pain relief and labor support options are
                  available at this facility?
                </li>
                <li>
                  Is water birth offered here, and if not, are there other
                  water-based comfort measures available during labor, such as a
                  shower or tub?
                </li>
                <li>
                  What criteria would need to be met for me to be considered a
                  good candidate for a more natural, low-intervention delivery
                  approach?
                </li>
                <li>
                  How does the facility handle a shift in plans if complications
                  arise during labor?
                </li>
                <li>
                  Can I create a written birth plan that reflects my preferences,
                  and how will that be incorporated into my care?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Water Birth and Natural Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Water birth is widely available at any hospital
                  that offers maternity services.&quot;</strong> It remains a
                  specialized offering, available at only a limited number of
                  facilities, primarily in larger cities.
                </li>
                <li>
                  <strong>&quot;Choosing a natural delivery approach means you
                  can&apos;t change your mind if needed.&quot;</strong>{" "}
                  Flexibility remains essential, and your medical team will
                  always prioritize safety, adjusting the plan if circumstances
                  require it.
                </li>
                <li>
                  <strong>&quot;Natural pain relief methods, like water
                  immersion, are only about comfort and have no other
                  benefits.&quot;</strong> Some studies suggest potential
                  benefits like reduced need for medication and shorter labor
                  duration, though individual experiences vary.
                </li>
                <li>
                  <strong>&quot;Every pregnancy is eligible for water
                  birth.&quot;</strong> Specific medical criteria, including a
                  low-risk, uncomplicated pregnancy and appropriate baby
                  positioning, generally apply.
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