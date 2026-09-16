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

export default function GynaeDoctorPregnancyScan() {
  const faqs = [
    {
      q: "How many ultrasounds are typically done during pregnancy?",
      a: "Most pregnancies involve several scans across trimesters, including dating, NT, anomaly, and growth scans, with additional scans if medically needed.",
    },
    {
      q: "Who offers pregnancy scans in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers comprehensive pregnancy scan services using advanced 3D/4D imaging.",
    },
    {
      q: "When is the first pregnancy scan usually done?",
      a: "Typically between weeks 6 and 9, to confirm viability and establish an accurate due date.",
    },
    {
      q: "What is the anomaly scan, and when is it done?",
      a: "It's a detailed structural evaluation of the baby, usually performed between weeks 18 and 22.",
    },
    {
      q: "Are pregnancy ultrasounds safe?",
      a: "Yes, standard prenatal ultrasound is considered safe when performed by trained professionals as medically indicated.",
    },
    {
      q: "What does a growth scan check for?",
      a: "It assesses the baby's growth trend, amniotic fluid levels, and placental position, usually in the third trimester.",
    },
    {
      q: "How do I book pregnancy scan appointments?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Do all pregnancies need the same number of scans?",
      a: "No, high-risk pregnancies or those with specific findings may require additional monitoring scans.",
    },
    {
      q: "Can I see the screen during my pregnancy scan?",
      a: "Many clinics allow parents to view the screen during at least part of the scan, offering a look at the developing baby.",
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
                Gynae Doctor for Pregnancy Scan: A Trimester-by-Trimester Guide
                to Prenatal Ultrasounds
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy ultrasounds are one of the most important tools in
                monitoring a baby&apos;s growth and wellbeing throughout the
                nine months of pregnancy. From confirming the pregnancy in the
                very first weeks to checking the baby&apos;s position just
                before delivery, each scan serves a specific purpose at a
                specific stage.
              </p>

              <p className="text-gray-700">
                For expecting mothers in Moradabad, understanding this schedule
                — and choosing a gynae doctor experienced in prenatal ultrasound
                — helps ensure nothing important is missed along the way. This
                article walks through the full schedule of pregnancy scans, what
                each one checks, and why Dr. Priyanka Pachauri is a trusted
                choice for pregnancy scan care in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Pregnancy Scans Matter Throughout Every Trimester
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Each trimester has different monitoring priorities, meaning no
                  single scan can cover everything needed throughout pregnancy
                </li>
                <li>
                  Early scans confirm viability and dating, while later scans
                  focus on structural development, growth, and positioning
                </li>
                <li>
                  Regular scanning allows early detection of potential concerns,
                  giving time to plan appropriate care if any issues arise
                </li>
                <li>
                  Scans provide reassurance for expecting parents, offering a
                  window into the baby&apos;s development at each stage
                </li>
                <li>
                  The quality of imaging equipment and the expertise of the
                  doctor interpreting results significantly affect how much
                  useful information each scan provides
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                First Trimester Scans (Weeks 6–13)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Dating/Viability Scan (Weeks 6–9)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Confirms the pregnancy is developing inside the uterus
                    </li>
                    <li>
                      Detects fetal heartbeat, usually visible from around 6 to
                      7 weeks
                    </li>
                    <li>
                      Establishes an accurate estimated due date based on early
                      measurements
                    </li>
                    <li>
                      Checks for multiple pregnancies, such as twins
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Nuchal Translucency (NT) Scan (Weeks 11–14)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Measures the fluid at the back of the baby&apos;s neck,
                      used as part of screening for certain chromosomal
                      conditions
                    </li>
                    <li>
                      Often combined with blood tests for a more comprehensive
                      first-trimester screening result
                    </li>
                    <li>
                      Confirms fetal measurements consistent with the expected
                      gestational age
                    </li>
                    <li>
                      Provides an early look at basic fetal anatomy, though a
                      more detailed structural scan comes later
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Second Trimester Scans (Weeks 14–27)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Anomaly Scan / Level II Ultrasound (Weeks 18–22)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      A detailed, structure-by-structure evaluation of the
                      baby&apos;s anatomy, including the brain, heart, spine,
                      and limbs
                    </li>
                    <li>
                      Checks placental position and amniotic fluid levels
                    </li>
                    <li>
                      One of the most comprehensive scans of the entire
                      pregnancy, typically taking 30–45 minutes
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Additional Second-Trimester Monitoring
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Growth checks to confirm the baby is developing
                      appropriately for gestational age
                    </li>
                    <li>
                      Cervical length assessment in certain cases, particularly
                      if there&apos;s a history of preterm labor
                    </li>
                    <li>
                      Follow-up scans if any findings from earlier scans need
                      closer monitoring
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Third Trimester Scans (Weeks 28–40)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Growth Scan (Weeks 28–32)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Assesses fetal growth trends, checking that the baby is
                      developing at an appropriate rate
                    </li>
                    <li>
                      Evaluates amniotic fluid levels, which can indicate
                      placental function
                    </li>
                    <li>
                      Checks placental position again, particularly important if
                      earlier scans noted a low-lying placenta
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Doppler Studies (As Needed, Typically From Week 28 Onward)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Assesses blood flow through the umbilical cord and, in
                      some cases, the baby&apos;s brain
                    </li>
                    <li>
                      Particularly useful in pregnancies with growth concerns or
                      other risk factors
                    </li>
                    <li>
                      Helps guide decisions about delivery timing in certain
                      high-risk situations
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Presentation and Pre-Delivery Scan (Weeks 36 Onward)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Confirms the baby&apos;s position, such as head-down or
                      breech, which is important for delivery planning
                    </li>
                    <li>
                      Provides a final assessment of amniotic fluid levels and
                      placental position before delivery
                    </li>
                    <li>
                      Helps guide decisions about mode of delivery if any
                      concerns are identified
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Circumstances That May Require Additional Scans
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Multiple pregnancies, such as twins or triplets, which
                  generally require more frequent monitoring
                </li>
                <li>
                  High-risk pregnancies, including those involving diabetes,
                  hypertension, or other maternal health conditions
                </li>
                <li>
                  Pregnancies conceived through fertility treatment, which are
                  often monitored more closely, particularly in early stages
                </li>
                <li>
                  A history of pregnancy complications, such as preterm labor or
                  growth restriction in a previous pregnancy
                </li>
                <li>
                  Any findings from earlier scans that require follow-up, such
                  as monitoring a specific structural observation over time
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a Pregnancy Ultrasound Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Duration varies by scan type, from a quick 10–15 minute dating
                  scan to a more detailed 30–45 minute anomaly scan
                </li>
                <li>
                  A moderately full bladder may be recommended for earlier
                  scans, though this typically isn&apos;t needed later in
                  pregnancy
                </li>
                <li>
                  Gel is applied to the abdomen, and a probe is used to capture
                  images of the baby
                </li>
                <li>
                  Many clinics allow parents to view the screen during at least
                  part of the scan, offering a meaningful first look at the baby
                </li>
                <li>
                  Results are usually discussed either immediately after the
                  scan or during a follow-up consultation with your doctor
                </li>
                <li>
                  Some scans require the baby to be in a specific position for
                  clear imaging, occasionally requiring the sonographer to ask
                  you to move or wait a few minutes
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Quality of Imaging Technology Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  High-resolution 3D/4D ultrasound machines provide significantly
                  more detailed imaging than older 2D-only equipment
                </li>
                <li>
                  AI-assisted imaging tools can support more precise
                  identification of subtle structural details
                </li>
                <li>
                  Better imaging allows earlier and more accurate detection of
                  potential concerns, giving more time for appropriate follow-up
                  care if needed
                </li>
                <li>
                  Clear imaging also enhances the parental experience, offering
                  more detailed and recognizable views of the developing baby
                </li>
                <li>
                  Not every facility offers the same level of imaging quality,
                  which is why the choice of clinic and equipment matters for
                  pregnancy scan care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose a Gynae Doctor for Pregnancy Scans, Not Just a
                Radiology Center
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A gynaecologist interprets scan findings within the full
                  context of your pregnancy history, rather than as an isolated
                  image
                </li>
                <li>
                  Findings can be immediately integrated into your ongoing
                  antenatal care plan, without needing to coordinate separately
                  with an outside facility
                </li>
                <li>
                  Continuity of care means the same doctor who performs or
                  reviews your scans is also managing your broader pregnancy
                  monitoring
                </li>
                <li>
                  A trusted relationship with your doctor can make discussing
                  scan results, including any concerns, more comfortable and
                  clear
                </li>
                <li>
                  Faster follow-up planning when a finding requires further
                  testing or specialist referral
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Gynae Doctor for Pregnancy Scans in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers comprehensive
                pregnancy scan services as part of her antenatal care practice
                in Moradabad. According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her clinic is equipped to support accurate, trimester-wise
                pregnancy monitoring, including:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A Voluson E22 BT2024 ultrasound machine, offering advanced 3D
                  and 4D imaging capabilities for detailed fetal evaluation at
                  every stage
                </li>
                <li>
                  AI-assisted imaging tools, supporting more precise assessment
                  throughout pregnancy
                </li>
                <li>
                  Structured antenatal care, integrating scan findings directly
                  into an overall pregnancy monitoring plan
                </li>
                <li>
                  High-risk pregnancy management, ensuring closer scan-based
                  monitoring when medically indicated
                </li>
                <li>
                  A &quot;Her Health First&quot; approach, meaning scan results
                  are explained clearly, with time given to answer questions and
                  address any concerns
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently highlight
                feeling well-informed and supported throughout their pregnancy
                journey, which is especially valuable when navigating the
                anticipation and occasional anxiety that comes with prenatal
                scans. The clinic is located in Gandhi Nagar, Moradabad, making
                it accessible to expecting mothers from across the city and
                surrounding areas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Pregnancy Scan Appointments
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Confirm your pregnancy dates with your doctor in advance,
                  since accurate dating matters for scheduling scans correctly
                </li>
                <li>
                  Follow specific preparation instructions, such as bladder
                  fullness, which can vary depending on the trimester and scan
                  type
                </li>
                <li>
                  Wear comfortable clothing that allows easy access to your
                  abdomen
                </li>
                <li>
                  Bring previous scan reports, so your doctor has a complete
                  picture of your pregnancy&apos;s progress
                </li>
                <li>
                  Prepare any questions in advance, especially if you have
                  specific concerns you&apos;d like addressed during the scan
                </li>
                <li>
                  Consider bringing your partner or a support person, since many
                  clinics welcome company during pregnancy scans
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor About Your Scan Schedule
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Based on my specific pregnancy, which scans are recommended
                  and when?
                </li>
                <li>
                  Will I need any additional scans beyond the standard schedule,
                  based on my health history?
                </li>
                <li>
                  What should I do to prepare for each type of scan?
                </li>
                <li>
                  How and when will I receive the results after each
                  appointment?
                </li>
                <li>
                  What happens if a scan identifies something that needs further
                  evaluation?
                </li>
                <li>
                  Can my partner or a support person join me during the scans?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Aspects of Pregnancy Scans
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many expecting parents feel a mix of excitement and anxiety
                  before each scan, which is a completely normal response
                </li>
                <li>
                  The anomaly scan in particular can feel more nerve-wracking,
                  given its detailed nature and the amount of information it
                  covers
                </li>
                <li>
                  A supportive, unhurried doctor can significantly ease this
                  anxiety, taking time to explain findings clearly rather than
                  rushing through results
                </li>
                <li>
                  It&apos;s okay to ask your doctor directly how you&apos;re
                  doing emotionally, not just what the scan shows medically
                </li>
                <li>
                  Bringing a partner or support person to appointments can
                  provide additional comfort during what can be an emotionally
                  significant experience
                </li>
                <li>
                  If you find yourself feeling persistently anxious between
                  scans, it&apos;s worth discussing this with your doctor, who
                  can offer reassurance or additional support as needed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Pregnancy Scans
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;One scan is enough to monitor
                  the whole pregnancy.&quot;{" "}
                  <strong>Fact:</strong> Different scans check different things
                  at different stages, so a full schedule of scans is important
                  for comprehensive monitoring.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Ultrasounds are unsafe if done
                  too frequently.&quot;{" "}
                  <strong>Fact:</strong> Standard prenatal ultrasound, when
                  medically indicated and performed by trained professionals, is
                  considered safe throughout pregnancy.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;A normal early scan means no
                  further scans are needed.&quot;{" "}
                  <strong>Fact:</strong> Later scans, such as the anomaly and
                  growth scans, check for different information than early
                  dating scans.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;3D/4D scans are just for photos,
                  not medical purposes.&quot;{" "}
                  <strong>Fact:</strong> While they do provide clearer images
                  for parents, this technology also improves diagnostic accuracy
                  for detecting structural details.
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
                        Gynaecologist & High-Risk Pregnancy Specialist (MBBS, MS)
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