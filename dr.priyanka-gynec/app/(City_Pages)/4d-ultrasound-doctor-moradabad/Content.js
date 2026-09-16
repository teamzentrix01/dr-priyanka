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

export default function Ultrasound4D() {
  const faqs = [
    {
      q: "What is the best week of pregnancy for a 4D ultrasound?",
      a: "Generally weeks 26 to 30, when facial development and available space offer the clearest imaging results.",
    },
    {
      q: "Is 4D ultrasound safe for the baby?",
      a: "Yes, it uses the same well-established, safe ultrasound technology as standard scans.",
    },
    {
      q: "Can I book a 4D scan too early or too late in pregnancy?",
      a: "Yes, image quality is time-sensitive — too early can appear less detailed, and too late can be limited by reduced space for movement.",
    },
    {
      q: "Will I always get a clear view of my baby's face?",
      a: "Not always guaranteed — factors like fetal position and fluid levels can affect clarity, though timing and technique improve the likelihood significantly.",
    },
    {
      q: "Does a 4D scan replace my anomaly scan?",
      a: "No, it complements standard diagnostic scanning rather than replacing it.",
    },
    {
      q: "How long does a 4D ultrasound session usually take?",
      a: "Sessions are generally longer than routine scans, allowing time to capture clear movement and facial detail.",
    },
    {
      q: "Can I get photos or video from the session?",
      a: "Many clinics provide printed images or digital footage as a keepsake, depending on the specific offering.",
    },
    {
      q: "Does eating before the scan really make a difference?",
      a: "A light meal beforehand can sometimes encourage baby movement, which may improve the chances of capturing varied footage.",
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
                4D Ultrasound Doctor in Moradabad: How It Works and When to
                Book It
              </h1>

              <p className="mb-4 text-gray-700">
                Among all the imaging technology used during pregnancy, 4D
                ultrasound is the one most parents look forward to. Unlike
                standard diagnostic scans, a 4D ultrasound shows the baby moving
                in real time — stretching, yawning, sometimes even appearing to
                smile — offering a genuinely emotional glimpse of the baby
                before birth.
              </p>

              <p className="text-gray-700">
                This guide explains exactly how 4D ultrasound technology works,
                when in pregnancy it&apos;s best scheduled, what parents can
                realistically expect to see, and how it fits alongside standard
                prenatal scans.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  4D ultrasound adds real-time movement to 3D imaging, allowing
                  parents to watch the baby&apos;s live expressions and
                  movements during the scan
                </li>
                <li>
                  There is a specific optimal window in pregnancy — generally
                  between weeks 26 and 30 — when 4D imaging tends to produce the
                  clearest, most detailed results
                </li>
                <li>
                  Image clarity depends on several factors beyond timing,
                  including fetal position, amniotic fluid levels, and maternal
                  body factors, meaning results can vary between sessions
                </li>
                <li>
                  4D ultrasound is a safe, non-invasive addition to pregnancy
                  care, but it complements rather than replaces standard
                  diagnostic scans
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes 4D Ultrasound Different
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>3D ultrasound captures a still, three-dimensional
                  image.</strong> This provides detailed surface visualisation
                  of the baby&apos;s facial features and body compared to flat,
                  two-dimensional imaging.
                </li>
                <li>
                  <strong>4D ultrasound adds the element of time.</strong> By
                  capturing a continuous stream of 3D images, 4D technology
                  displays the baby moving in real time — a genuinely live view
                  rather than a static picture.
                </li>
                <li>
                  <strong>Parents can witness natural movements as they
                  happen.</strong> Yawning, stretching, thumb-sucking, and
                  facial expressions can sometimes be observed directly during a
                  4D session, offering a uniquely engaging prenatal experience.
                </li>
                <li>
                  <strong>The underlying sound wave technology is the same as
                  standard ultrasound.</strong> 4D imaging uses the same safe,
                  well-established ultrasound technology as routine 2D scans,
                  simply processing the data differently to create a moving,
                  three-dimensional view.
                </li>
                <li>
                  <strong>It serves both an emotional and, at times, diagnostic
                  purpose.</strong> While often associated with the emotional
                  experience of seeing the baby clearly, 4D imaging can also
                  assist in visualising certain facial or surface features
                  relevant to a thorough anatomical assessment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Timing Matters So Much for 4D Ultrasound
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>The ideal window is generally weeks 26 to 30.</strong>{" "}
                  During this period, the baby typically has enough facial fat
                  development for clearer, more defined features, while still
                  having enough surrounding amniotic fluid and room to move for
                  a good view.
                </li>
                <li>
                  <strong>Too early in pregnancy, facial detail is less
                  developed.</strong> Before this window, the baby&apos;s face
                  has less fat under the skin, which can make 4D images appear
                  less detailed or more skeletal in appearance.
                </li>
                <li>
                  <strong>Too late in pregnancy, space becomes limited.</strong>{" "}
                  As the due date approaches, the baby has less room to move
                  within the uterus, and the head often engages lower in the
                  pelvis, both of which can make clear facial imaging more
                  difficult.
                </li>
                <li>
                  <strong>Every pregnancy is slightly different.</strong> While
                  weeks 26 to 30 is a generally reliable window, an individual
                  assessment can help confirm the ideal timing based on how a
                  specific pregnancy is progressing.
                </li>
                <li>
                  <strong>Booking too close to a due date risks a less
                  satisfying experience.</strong> Parents specifically hoping for
                  clear facial images are generally advised not to wait until
                  the final weeks of pregnancy to schedule their 4D session.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Affect 4D Image Quality
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fetal position at the time of the scan.</strong> A
                  baby facing away from the probe, or with hands or the
                  umbilical cord positioned near the face, can limit visibility
                  regardless of gestational timing.
                </li>
                <li>
                  <strong>Amniotic fluid levels.</strong> Adequate fluid around
                  the baby is necessary for clear image transmission; reduced
                  fluid levels can affect image clarity.
                </li>
                <li>
                  <strong>Maternal body factors.</strong> Certain physical
                  factors can affect how clearly ultrasound waves travel to and
                  from the baby, influencing overall image quality.
                </li>
                <li>
                  <strong>Placental position.</strong> A placenta positioned at
                  the front of the uterus can sometimes partially obscure the
                  view, depending on the baby&apos;s position relative to it.
                </li>
                <li>
                  <strong>The baby&apos;s activity level during the scan.</strong>{" "}
                  An active, moving baby can sometimes make it easier to capture
                  varied expressions and movements, while a baby in deep sleep
                  may be more still throughout the session.
                </li>
                <li>
                  <strong>Equipment quality and operator experience.</strong>{" "}
                  High-resolution 4D equipment combined with a skilled
                  sonographer&apos;s ability to adjust probe position and timing
                  meaningfully affects the final result.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a 4D Ultrasound Session
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Sessions are typically longer than standard diagnostic
                  scans.</strong> Because capturing clear facial and movement
                  footage can take patience, a 4D session is usually scheduled
                  with more time than a routine scan.
                </li>
                <li>
                  <strong>A light meal beforehand can help.</strong> Since an
                  active baby often produces better 4D footage, eating something
                  light shortly before the appointment can sometimes encourage
                  movement during the session.
                </li>
                <li>
                  <strong>The process is identical in comfort to a standard
                  ultrasound.</strong> A gel is applied to the abdomen, and the
                  probe is moved gently across the skin — there is no discomfort
                  or invasive element involved.
                </li>
                <li>
                  <strong>Real-time viewing is part of the experience.</strong>{" "}
                  Parents typically watch the images on a screen throughout the
                  session, often with the sonographer pointing out specific
                  features or movements as they appear.
                </li>
                <li>
                  <strong>Recorded images or video may be provided
                  afterward.</strong> Depending on the clinic&apos;s offerings,
                  parents can often take home printed images or digital footage
                  as a keepsake of the session.
                </li>
                <li>
                  <strong>Results are explained clearly during the visit.</strong>{" "}
                  Any relevant observations from the session are discussed
                  directly, alongside the emotional experience of the imaging
                  itself.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is 4D Ultrasound Purely for Keepsake Purposes?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>It offers a genuine emotional experience for many
                  families.</strong> For most parents, the primary appeal of 4D
                  ultrasound is simply the joy of seeing their baby&apos;s face
                  and movements clearly before birth.
                </li>
                <li>
                  <strong>It can also add value to structural assessment.</strong>{" "}
                  In select cases, the detailed surface visualisation offered by
                  4D imaging can assist in assessing certain facial features as
                  part of a broader anatomical evaluation.
                </li>
                <li>
                  <strong>It does not replace standard 2D diagnostic
                  scanning.</strong> The anomaly scan and other structural
                  assessments continue to rely primarily on standard 2D
                  ultrasound; 4D imaging is a complementary technology, not a
                  substitute.
                </li>
                <li>
                  <strong>It is best scheduled alongside, not instead of,
                  routine prenatal scans.</strong> A 4D session is typically an
                  addition to the standard pregnancy scan schedule, timed for
                  its own optimal window rather than replacing a medically
                  necessary scan.
                </li>
                <li>
                  <strong>Both the emotional and clinical value are
                  genuine.</strong> There is no need to see 4D ultrasound as
                  either purely diagnostic or purely a novelty — for most
                  families, it offers a meaningful combination of both.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About 4D Ultrasound
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;4D ultrasound is riskier than
                  standard ultrasound.&quot;{" "}
                  <strong>Fact:</strong> It uses the same safe, well-established
                  ultrasound technology, simply processed differently to add
                  movement and three-dimensional detail.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;You can book a 4D scan at any
                  point and get the same quality result.&quot;{" "}
                  <strong>Fact:</strong> Image quality is genuinely
                  time-sensitive, with weeks 26 to 30 generally offering the
                  clearest results for most pregnancies.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;4D scans always produce perfectly
                  clear images.&quot;{" "}
                  <strong>Fact:</strong> Factors like fetal position and
                  amniotic fluid levels can affect clarity, and occasionally a
                  follow-up session is needed for a clearer view.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;4D ultrasound replaces the need
                  for the anomaly scan.&quot;{" "}
                  <strong>Fact:</strong> It complements, rather than replaces,
                  standard diagnostic imaging used for structural assessment.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Longer sessions always mean
                  better results.&quot;{" "}
                  <strong>Fact:</strong> While adequate time helps, the
                  baby&apos;s position and activity level during the specific
                  session matter more than session length alone.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;There&apos;s no benefit beyond
                  the photos and video.&quot;{" "}
                  <strong>Fact:</strong> The detailed surface visualisation can,
                  in select cases, also support certain aspects of clinical
                  assessment, alongside its emotional value.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Making the Most of Your 4D Ultrasound Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Consider bringing a partner or family member.</strong>{" "}
                  Many parents find the experience more meaningful when shared
                  with someone close, and most clinics welcome a support person
                  in the room.
                </li>
                <li>
                  <strong>Wear comfortable clothing that allows easy abdominal
                  access.</strong> A two-piece outfit or something that lifts
                  easily makes the session smoother and more comfortable
                  throughout.
                </li>
                <li>
                  <strong>Stay relaxed rather than anxious about getting the
                  &quot;perfect&quot; shot.</strong> A calmer state can
                  sometimes make the session more enjoyable, even if the
                  baby&apos;s position means certain angles aren&apos;t
                  available on that particular day.
                </li>
                <li>
                  <strong>Ask questions during the session.</strong>{" "}
                  Sonographers are usually happy to point out specific features
                  or explain what&apos;s being viewed in real time, so
                  don&apos;t hesitate to ask.
                </li>
                <li>
                  <strong>Keep expectations realistic about image
                  variability.</strong> Every baby and every scan session is
                  different, and even with ideal timing, some sessions naturally
                  capture clearer detail than others.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing an Experienced 4D Ultrasound Provider Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Skilled probe handling significantly affects image
                  quality.</strong> Capturing clear facial and movement footage
                  requires practiced technique, not just having the right
                  equipment.
                </li>
                <li>
                  <strong>Advanced equipment produces meaningfully better
                  results.</strong> High-resolution 4D ultrasound systems
                  capture finer detail than older or lower-specification
                  machines.
                </li>
                <li>
                  <strong>Guidance on ideal timing avoids disappointment.</strong>{" "}
                  An experienced provider helps schedule the session within the
                  window most likely to produce the clear images parents are
                  hoping for.
                </li>
                <li>
                  <strong>A calm, unhurried session experience.</strong> Allowing
                  adequate time and a comfortable setting supports both better
                  imaging results and a more enjoyable experience for the
                  family.
                </li>
                <li>
                  <strong>Integration with your broader prenatal care.</strong>{" "}
                  Having 4D imaging performed as part of a coordinated pregnancy
                  care plan ensures any relevant observations are considered
                  within your full pregnancy context.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri&apos;s practice in Moradabad offers
                advanced 4D ultrasound imaging as part of a comprehensive
                pregnancy care experience, using high-resolution equipment to
                capture clear, detailed views of the baby. Sessions are
                thoughtfully scheduled within the optimal timing window and
                conducted with the patience needed to make the experience both
                meaningful and clinically valuable for expecting families.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your 4D Ultrasound Session
              </h2>

              <p className="mb-4 text-gray-700">
                Experience a clear, real-time glimpse of your baby with a
                professionally timed and expertly performed 4D ultrasound
                session.
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