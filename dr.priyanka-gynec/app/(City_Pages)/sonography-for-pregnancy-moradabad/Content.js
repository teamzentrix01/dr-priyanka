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

export default function PregnancySonography() {
  const faqs = [
    {
      q: "How many ultrasound scans are typically needed during a healthy pregnancy?",
      a: "A standard schedule usually includes a first-trimester dating and NT scan, a second-trimester anomaly scan, and one or more third-trimester growth scans, with additional scans if clinically indicated.",
    },
    {
      q: "Is the NT scan really time-sensitive?",
      a: "Yes, it must be performed within a specific early first-trimester window to be diagnostically accurate.",
    },
    {
      q: "What does the anomaly scan actually check for?",
      a: "It examines the baby's brain, heart, spine, limbs, and internal organs in detail for structural development.",
    },
    {
      q: "Are 3D/4D scans safe for the baby?",
      a: "Yes, when performed as part of standard, medically indicated prenatal care at recommended intervals.",
    },
    {
      q: "Can I find out my baby's gender during sonography?",
      a: "Ultrasound can sometimes reveal fetal anatomy details during standard scans; however, sex determination and disclosure practices are strictly governed by law in India.",
    },
    {
      q: "Do I need a full bladder for every pregnancy scan?",
      a: "Only for certain early scans; later in pregnancy this is generally not required.",
    },
    {
      q: "What if the anomaly scan finds something unexpected?",
      a: "The doctor discusses findings clearly and outlines any recommended further testing or specialist referral as the next step.",
    },
    {
      q: "How is a Doppler ultrasound different from a regular pregnancy scan?",
      a: "It specifically assesses blood flow through the umbilical cord and certain fetal blood vessels, rather than general anatomy or growth.",
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
                Sonography for Pregnancy in Moradabad: A Trimester-by-Trimester
                Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy ultrasound, or sonography, is one of the most
                reassuring and clinically important parts of prenatal care. It
                confirms the pregnancy is developing as expected, tracks the
                baby&apos;s growth, and screens for conditions that, when caught
                early, can be managed far more effectively.
              </p>

              <p className="text-gray-700">
                This guide walks through pregnancy sonography trimester by
                trimester, so you know exactly what to expect at every stage.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy sonography is not a single scan but a series of
                  scans, each timed to check for specific developmental
                  milestones and risks at that stage
                </li>
                <li>
                  The first-trimester dating scan and the second-trimester
                  anomaly scan are considered two of the most clinically
                  important scans of the entire pregnancy
                </li>
                <li>
                  Advanced 3D/4D ultrasound technology adds detailed visual
                  clarity but works alongside, not instead of, standard 2D
                  diagnostic scanning
                </li>
                <li>
                  Missing or delaying key scans can mean missing the ideal
                  window for certain screenings, some of which cannot be
                  performed as accurately later in pregnancy
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Pregnancy Sonography Matters at Every Stage
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>It confirms the pregnancy is developing correctly from
                  the very start.</strong> An early scan confirms the pregnancy
                  is located inside the uterus, detects a heartbeat, and
                  identifies whether it is a single or multiple pregnancy — all
                  foundational information for the rest of prenatal care.
                </li>
                <li>
                  <strong>It provides accurate dating for the entire
                  pregnancy.</strong> Ultrasound in the first trimester gives
                  the most accurate estimate of gestational age and expected due
                  date, more reliable than dating based on menstrual history
                  alone.
                </li>
                <li>
                  <strong>It screens for chromosomal and structural risk at
                  specific windows.</strong> Certain screenings, such as nuchal
                  translucency measurement, can only be performed accurately
                  within a narrow time window, making scan timing clinically
                  important.
                </li>
                <li>
                  <strong>It tracks the baby&apos;s growth and wellbeing
                  throughout pregnancy.</strong> Later scans monitor whether
                  growth is progressing appropriately and check amniotic fluid
                  levels, placental position, and blood flow.
                </li>
                <li>
                  <strong>It supports timely decision-making.</strong> Findings
                  from sonography guide decisions throughout pregnancy, from
                  further diagnostic testing to delivery planning.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                First Trimester Sonography (Approximately Weeks 6–13)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Early dating and viability scan (around weeks
                  6–9).</strong> This confirms the pregnancy is intrauterine,
                  detects the fetal heartbeat, and establishes an accurate
                  estimated due date based on measurements at this stage.
                </li>
                <li>
                  <strong>Detection of multiple pregnancy.</strong> This early
                  scan also identifies whether more than one baby is present,
                  which is important for tailoring the rest of the
                  pregnancy&apos;s monitoring plan.
                </li>
                <li>
                  <strong>Nuchal Translucency (NT) scan (around weeks
                  11–13).</strong> This scan measures fluid at the back of the
                  baby&apos;s neck, a key marker used alongside blood tests to
                  assess the likelihood of certain chromosomal conditions.
                </li>
                <li>
                  <strong>Assessment of early fetal anatomy.</strong> Even at
                  this early stage, some basic structural features can be
                  assessed, providing an initial check before the more detailed
                  anomaly scan later in pregnancy.
                </li>
                <li>
                  <strong>Why timing is critical here.</strong> The NT scan
                  specifically must be performed within a defined window;
                  performed too early or too late, its measurements lose
                  diagnostic accuracy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Second Trimester Sonography (Approximately Weeks 14–27)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>The anomaly scan (around weeks 18–22).</strong> Often
                  considered the most detailed and clinically significant scan of
                  the pregnancy, this thoroughly examines the baby&apos;s brain,
                  heart, spine, limbs, and internal organs for structural
                  development.
                </li>
                <li>
                  <strong>Placental location assessment.</strong> This scan
                  identifies where the placenta has implanted, which is
                  important for monitoring conditions such as a low-lying
                  placenta that may need to be reassessed later in pregnancy.
                </li>
                <li>
                  <strong>Amniotic fluid volume check.</strong> Adequate
                  amniotic fluid is an important indicator of fetal wellbeing,
                  and levels are assessed as a standard part of this scan.
                </li>
                <li>
                  <strong>Growth assessment continues.</strong> Measurements
                  taken during this scan help confirm the baby is growing in
                  line with the expected pattern for gestational age.
                </li>
                <li>
                  <strong>3D/4D imaging is often incorporated here.</strong>{" "}
                  Advanced imaging technology can provide detailed, high-clarity
                  visualisation of facial features and movement, adding both
                  diagnostic value and a memorable, reassuring experience for
                  expecting parents.
                </li>
                <li>
                  <strong>Why this scan should never be skipped or
                  delayed.</strong> Many structural findings are most clearly
                  and accurately assessed within this specific window; delaying
                  this scan significantly reduces the ability to identify
                  certain conditions early.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Third Trimester Sonography (Approximately Weeks 28 Onward)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Growth scans (typically around weeks 28–32, and again
                  closer to term).</strong> These track whether the baby
                  continues to grow appropriately, an important check especially
                  if any growth concerns were noted earlier in pregnancy.
                </li>
                <li>
                  <strong>Placental position reconfirmation.</strong> If a
                  low-lying placenta was noted earlier, this is reassessed, as
                  the placenta&apos;s relative position often shifts as the
                  uterus grows.
                </li>
                <li>
                  <strong>Amniotic fluid level monitoring.</strong> Both low and
                  excessive fluid levels can indicate conditions that benefit
                  from closer monitoring, making this an ongoing check
                  throughout the later stages of pregnancy.
                </li>
                <li>
                  <strong>Doppler studies when indicated.</strong> These
                  specialised scans assess blood flow through the umbilical cord
                  and specific fetal blood vessels, particularly useful when
                  growth concerns or certain risk factors are present.
                </li>
                <li>
                  <strong>Fetal position assessment closer to delivery.</strong>{" "}
                  Later scans help confirm the baby&apos;s position, which is
                  relevant information for delivery planning as the due date
                  approaches.
                </li>
                <li>
                  <strong>Additional scans as clinically indicated.</strong>{" "}
                  Depending on individual pregnancy risk factors, additional
                  monitoring scans may be recommended beyond the standard
                  schedule.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding 3D/4D Ultrasound Technology
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>3D ultrasound creates a three-dimensional still
                  image.</strong> This provides more detailed surface
                  visualisation of the baby&apos;s features compared to
                  traditional 2D imaging.
                </li>
                <li>
                  <strong>4D ultrasound adds movement in real time.</strong>{" "}
                  This allows parents and doctors to see the baby&apos;s
                  movements, such as stretching or yawning, as they happen
                  during the scan.
                </li>
                <li>
                  <strong>It complements, rather than replaces, standard
                  diagnostic scanning.</strong> 2D ultrasound remains the
                  primary tool for structural and diagnostic assessment; 3D/4D
                  imaging adds additional visual detail and clarity,
                  particularly valued during the anomaly scan.
                </li>
                <li>
                  <strong>It can support bonding during pregnancy.</strong> Many
                  parents find seeing detailed, lifelike images of their baby to
                  be a meaningful and reassuring part of the pregnancy
                  experience.
                </li>
                <li>
                  <strong>Image quality can be affected by certain
                  factors.</strong> Fetal position, amniotic fluid levels, and
                  maternal body factors can all affect how clearly 3D/4D images
                  can be captured at any given scan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a Pregnancy Ultrasound Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Minimal preparation is usually needed.</strong>{" "}
                  Depending on the stage of pregnancy and type of scan, a full
                  or partially full bladder may be requested for the earliest
                  scans to improve visualisation.
                </li>
                <li>
                  <strong>The scan itself is painless and non-invasive.</strong>{" "}
                  A gel is applied to the abdomen (or, in very early pregnancy,
                  a transvaginal probe may be used) to obtain clear images using
                  sound waves, with no discomfort involved.
                </li>
                <li>
                  <strong>Duration varies by scan type.</strong> A quick dating
                  scan may take only a few minutes, while a detailed anomaly
                  scan involves a more thorough, and therefore longer,
                  examination of fetal anatomy.
                </li>
                <li>
                  <strong>Results are typically discussed the same day.</strong>{" "}
                  The doctor reviews key findings during or shortly after the
                  scan, with a detailed report provided for the medical record.
                </li>
                <li>
                  <strong>Partners are often welcome to be present.</strong>{" "}
                  Many clinics encourage partners to attend scans, particularly
                  the anomaly scan, as a shared and meaningful part of the
                  pregnancy journey.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Pregnancy Sonography
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;One or two scans throughout
                  pregnancy are enough.&quot;{" "}
                  <strong>Fact:</strong> Each recommended scan checks for
                  specific, time-sensitive developmental milestones that cannot
                  be reliably assessed at a different stage.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;3D/4D scans are purely for
                  photos, not medical value.&quot;{" "}
                  <strong>Fact:</strong> While they do provide detailed images
                  for parents, 3D/4D technology also supports more precise
                  visualisation of certain structural features during diagnostic
                  assessment.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Ultrasound scans are unsafe with
                  frequent use during pregnancy.&quot;{" "}
                  <strong>Fact:</strong> Medically indicated ultrasound scans,
                  performed at recommended intervals, are considered a safe and
                  standard part of prenatal care.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;If the dating scan says
                  everything looks fine, later scans aren&apos;t
                  necessary.&quot;{" "}
                  <strong>Fact:</strong> Each trimester scan checks for
                  different aspects of development; an early normal scan does
                  not replace the need for later structural and growth
                  assessments.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Doppler studies are only needed
                  in high-risk pregnancies.&quot;{" "}
                  <strong>Fact:</strong> While more commonly used when risk
                  factors are present, they can be a valuable tool whenever
                  blood flow assessment is clinically relevant.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;The anomaly scan can be done
                  anytime in the second trimester.&quot;{" "}
                  <strong>Fact:</strong> This scan has a specific optimal
                  window, and performing it outside this window can reduce the
                  accuracy of certain structural assessments.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing an Experienced Sonography Provider Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Accuracy depends significantly on operator
                  expertise.</strong> Detailed structural assessment,
                  particularly during the anomaly scan, requires skilled
                  interpretation, not just capturing an image.
                </li>
                <li>
                  <strong>Access to advanced imaging technology.</strong>{" "}
                  High-resolution 3D/4D ultrasound equipment provides clearer
                  diagnostic detail than older or lower-resolution systems.
                </li>
                <li>
                  <strong>Continuity of care with your obstetric team.</strong>{" "}
                  Having sonography performed by, or closely coordinated with,
                  your regular pregnancy care provider ensures findings are
                  interpreted directly within the context of your full pregnancy
                  history.
                </li>
                <li>
                  <strong>Timely scheduling within critical windows.</strong>{" "}
                  An experienced clinic proactively schedules scans within the
                  specific windows where each screening is most accurate.
                </li>
                <li>
                  <strong>Clear communication of findings.</strong> Results are
                  explained in a way that is genuinely understandable, with next
                  steps clearly outlined whenever further monitoring or testing
                  is recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri&apos;s practice in Moradabad offers
                comprehensive pregnancy sonography using advanced 3D/4D
                ultrasound technology, integrated directly with ongoing
                obstetric care. Every scan is scheduled within its clinically
                optimal window and interpreted in the context of each
                patient&apos;s individual pregnancy, ensuring nothing is left to
                routine guesswork.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Pregnancy Sonography Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Whether you&apos;re due for your dating scan, anomaly scan, or a
                growth check, timely, accurate sonography is an essential part
                of confident, well-monitored prenatal care.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Obstetric Care Specialist (MBBS, MS)
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
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
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