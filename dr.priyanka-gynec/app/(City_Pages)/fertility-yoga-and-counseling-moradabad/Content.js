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

export default function FertilityYogaAndCounseling() {
  const faqs = [
    {
      q: "Can fertility yoga help with conception?",
      a: "It may support stress reduction and overall wellbeing, but it should complement, not replace, medical fertility evaluation and treatment.",
    },
    {
      q: "Who offers fertility support and counseling in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers fertility care that considers both medical and emotional support.",
    },
    {
      q: "Is counseling necessary during fertility treatment?",
      a: "It can be very helpful for managing the emotional toll of the process, even if not medically required.",
    },
    {
      q: "Does stress cause infertility?",
      a: "Stress can affect hormonal balance, but most fertility challenges have specific medical causes requiring proper diagnosis.",
    },
    {
      q: "What fertility services does the clinic offer?",
      a: "Fertility evaluation, IVF services, and advanced diagnostic tools like a GERI time-lapse embryo incubator.",
    },
    {
      q: "Can I do yoga during an IVF cycle?",
      a: "Certain poses should be modified or avoided depending on the treatment stage, so guidance from a qualified instructor is recommended.",
    },
    {
      q: "How do I book a fertility consultation?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Is it normal to feel emotionally overwhelmed during fertility treatment?",
      a: "Yes, it's a common experience, and seeking support for it is a healthy, proactive step.",
    },
    {
      q: "Does the clinic support couples emotionally, not just medically?",
      a: "Yes, the clinic's approach emphasizes listening to and supporting patients throughout their fertility journey.",
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
                Fertility Yoga and Counseling in Moradabad: Supporting the Mind
                and Body on the Path to Parenthood
              </h1>

              <p className="mb-4 text-gray-700">
                Trying to conceive can be an emotionally demanding journey, and
                for many couples, the stress of infertility becomes as
                challenging as the physical process itself. While medical
                treatment addresses the biological side of fertility, a growing
                number of couples in Moradabad are also turning to fertility
                yoga and counseling to support their emotional wellbeing and
                overall readiness for conception.
              </p>

              <p className="text-gray-700">
                These complementary approaches don&apos;t replace medical care,
                but they can play a meaningful role alongside it. This article
                explores how fertility yoga and counseling support the fertility
                journey, what they typically involve, and how Dr. Priyanka
                Pachauri&apos;s clinic approaches fertility care with both
                medical expertise and emotional support in mind.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Mind-Body Connection Matters in Fertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chronic stress affects hormone regulation, including hormones
                  directly involved in ovulation and the menstrual cycle
                </li>
                <li>
                  The fertility journey itself often creates significant stress,
                  particularly with repeated attempts, disappointing results, or
                  pressure from family and social expectations
                </li>
                <li>
                  Anxiety and stress can affect sleep, appetite, and overall
                  physical health, all of which play a role in reproductive
                  wellbeing
                </li>
                <li>
                  A calmer, more supported emotional state doesn&apos;t
                  guarantee conception, but it can improve a couple&apos;s
                  overall experience and resilience throughout the process
                </li>
                <li>
                  Addressing emotional wellbeing alongside medical treatment
                  offers a more complete approach to fertility care, rather than
                  focusing solely on physical factors
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Fertility Yoga
              </h2>

              <p className="mb-4 text-gray-700">
                Fertility yoga refers to a gentle, targeted style of yoga
                practice designed to support reproductive health and reduce
                stress. Key aspects include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gentle, low-impact poses focused on improving blood flow to
                  the pelvic region and reducing tension in the lower back and
                  hips
                </li>
                <li>
                  Breathing exercises (pranayama), which help activate the
                  body&apos;s relaxation response and reduce stress hormone
                  levels
                </li>
                <li>
                  Meditation and mindfulness components, supporting emotional
                  regulation during a often uncertain and emotionally taxing
                  process
                </li>
                <li>
                  A focus on gentle movement rather than intense exercise, since
                  overly strenuous activity isn&apos;t generally recommended
                  during fertility treatment or early pregnancy attempts
                </li>
                <li>
                  Practices that can be adapted throughout the fertility
                  journey, including during ovulation tracking, IVF cycles, or
                  early pregnancy, depending on individual guidance
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Potential Benefits of Fertility Yoga
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Stress reduction, which can support overall wellbeing during a
                  demanding fertility journey
                </li>
                <li>
                  Improved circulation to the pelvic area, which some
                  practitioners believe may support reproductive health, though
                  this should be seen as a complementary rather than primary
                  treatment
                </li>
                <li>
                  Better sleep quality, often disrupted by the anxiety
                  associated with fertility struggles
                </li>
                <li>
                  A sense of active participation in the fertility process,
                  which many individuals find emotionally valuable alongside
                  medical treatment
                </li>
                <li>
                  Community and connection, particularly when practiced in group
                  settings with others going through similar experiences
                </li>
                <li>
                  General physical health benefits, including improved
                  flexibility and reduced muscle tension, which support overall
                  wellbeing
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Important Considerations About Fertility Yoga
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It should complement, not replace, medical fertility
                  evaluation and treatment, especially when an underlying
                  medical cause needs to be addressed
                </li>
                <li>
                  Certain poses should be avoided or modified during specific
                  phases of fertility treatment, such as after embryo transfer
                  during IVF, so guidance from a qualified instructor familiar
                  with fertility contexts matters
                </li>
                <li>
                  Results and experiences vary significantly between
                  individuals, and it&apos;s important to maintain realistic
                  expectations about what yoga can and cannot influence
                </li>
                <li>
                  It works best as part of a broader wellness approach,
                  including proper nutrition, sleep, and stress management,
                  alongside medical care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Fertility Counseling Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Infertility can bring significant emotional weight, including
                  grief, frustration, and, for many couples, a sense of
                  isolation
                </li>
                <li>
                  Counseling provides a safe space to process these emotions
                  without judgment, separate from medical appointments focused
                  on physical treatment
                </li>
                <li>
                  It can help couples navigate difficult decisions, such as
                  when to try a new treatment approach, take a break from
                  treatment, or consider alternative paths to parenthood
                </li>
                <li>
                  Fertility struggles can strain relationships, and counseling
                  can support couples in communicating openly and supporting
                  each other through the process
                </li>
                <li>
                  Professional support helps normalize difficult emotions,
                  reducing the sense of shame or isolation that many people
                  experience during infertility
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Emotional Challenges During the Fertility Journey
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Grief and disappointment after unsuccessful treatment cycles
                </li>
                <li>
                  Anxiety about the future, including uncertainty about timelines
                  and outcomes
                </li>
                <li>
                  Social pressure and unsolicited advice from family and
                  friends, which can add to emotional strain
                </li>
                <li>
                  Feelings of isolation, particularly if friends or family
                  members haven&apos;t experienced similar struggles
                </li>
                <li>
                  Relationship strain, as partners may process the experience
                  differently from one another
                </li>
                <li>
                  Loss of a sense of control, given how much of the fertility
                  process depends on factors outside a person&apos;s direct
                  influence
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Counseling and Medical Fertility Care Work Together
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A collaborative approach allows emotional support to be
                  integrated alongside medical treatment planning, rather than
                  treated as entirely separate
                </li>
                <li>
                  Doctors and counselors can coordinate guidance, ensuring
                  lifestyle recommendations align with the specific stage of
                  medical treatment a couple is undergoing
                </li>
                <li>
                  Emotional check-ins during medical visits can help identify
                  when additional counseling support might be beneficial
                </li>
                <li>
                  A supportive medical team creates space for patients to
                  express concerns about the emotional toll of treatment, not
                  just the physical process
                </li>
                <li>
                  This combined approach tends to support better overall
                  treatment adherence, since couples who feel emotionally
                  supported are often better able to stay engaged with their
                  treatment plan
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Practical Tips for Managing Fertility-Related Stress
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Practice gentle, consistent movement, such as fertility-friendly
                  yoga or walking, rather than high-intensity exercise
                </li>
                <li>
                  Prioritize sleep and rest, recognizing their role in overall
                  hormonal balance and emotional resilience
                </li>
                <li>
                  Set boundaries with family or friends who offer unsolicited
                  advice or ask intrusive questions about your fertility journey
                </li>
                <li>
                  Consider joining a support group, either in person or online,
                  to connect with others facing similar experiences
                </li>
                <li>
                  Communicate openly with your partner about how each of you is
                  coping, rather than assuming shared understanding
                </li>
                <li>
                  Take breaks from treatment when needed, in consultation with
                  your doctor, if the emotional toll becomes overwhelming
                </li>
                <li>
                  Seek professional counseling support if feelings of anxiety,
                  sadness, or hopelessness begin to significantly affect daily
                  life
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Holistic Fertility Support in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers fertility
                care in Moradabad that considers both the medical and emotional
                dimensions of the journey to parenthood. According to her
                official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her approach reflects this holistic perspective through:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fertility evaluation and IVF services, including advanced
                  tools like a GERI time-lapse embryo incubator for precise
                  embryo monitoring
                </li>
                <li>
                  A &quot;Her Health First&quot; philosophy, ensuring patients
                  are genuinely heard and supported, not just medically treated,
                  throughout their fertility journey
                </li>
                <li>
                  Guidance and emotional support integrated into the fertility
                  treatment process, recognizing that the emotional experience
                  is as important as the medical one
                </li>
                <li>
                  AI-powered semen analysis and DNA integrity testing,
                  supporting more precise diagnostics for couples navigating
                  fertility challenges together
                </li>
                <li>
                  A patient-first consultation style, where questions and
                  concerns — medical or emotional — are addressed with patience
                  rather than being rushed through
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently reflect feeling
                genuinely supported and guided throughout their fertility care —
                an important quality for couples navigating the emotional
                complexity of trying to conceive. The clinic is located in
                Gandhi Nagar, Moradabad, making it accessible to couples across
                the city and surrounding areas seeking comprehensive fertility
                support.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Sample Fertility Yoga Practices to Discuss With Your Instructor
              </h2>

              <p className="mb-4 text-gray-700">
                While a qualified instructor should guide the specifics based on
                your individual situation, common elements often included in
                fertility-focused yoga practice are:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gentle hip-opening poses, aimed at releasing tension in the
                  pelvic area
                </li>
                <li>
                  Restorative poses using props like bolsters or blankets,
                  supporting relaxation without strain
                </li>
                <li>
                  Slow, diaphragmatic breathing exercises, helping activate the
                  body&apos;s natural relaxation response
                </li>
                <li>
                  Guided meditation or visualization, often incorporated to
                  support emotional calm during the practice
                </li>
                <li>
                  Avoidance of inverted or intense core-engaging poses during
                  certain phases, such as after ovulation or embryo transfer,
                  based on specific guidance
                </li>
                <li>
                  A focus on consistency over intensity, with shorter, regular
                  sessions often more beneficial than infrequent, longer ones
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Always check with your doctor or fertility specialist before
                starting or continuing yoga during active fertility treatment,
                since recommendations can vary based on your specific protocol
                and health status.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Building a Support Network During Your Fertility Journey
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Identify a few trusted people you can talk to openly about
                  your experience, whether that&apos;s a partner, close friend,
                  or family member
                </li>
                <li>
                  Consider connecting with fertility support communities, either
                  locally or online, where shared experiences can reduce
                  feelings of isolation
                </li>
                <li>
                  Communicate your needs clearly to those around you, including
                  what kind of support is actually helpful versus what feels
                  intrusive
                </li>
                <li>
                  Allow yourself to decline social situations that feel
                  emotionally difficult during particularly challenging phases
                  of treatment
                </li>
                <li>
                  Recognize that your partner may cope differently, and make
                  space for both of your experiences rather than expecting
                  identical emotional responses
                </li>
                <li>
                  Revisit your support needs periodically, since what helps
                  during the early stages of trying to conceive may differ from
                  what&apos;s needed during a longer or more complex treatment
                  journey
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Fertility Yoga and Counseling
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Yoga alone can resolve
                  infertility caused by a medical condition.&quot;{" "}
                  <strong>Fact:</strong> Yoga can support overall wellbeing but
                  isn&apos;t a substitute for medical evaluation and treatment
                  when an underlying condition is present.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Counseling is only necessary if
                  you&apos;re struggling severely.&quot;{" "}
                  <strong>Fact:</strong> Many couples benefit from counseling
                  support even with moderate stress, not just in crisis
                  situations.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Stress alone causes
                  infertility.&quot;{" "}
                  <strong>Fact:</strong> While stress can affect hormonal
                  balance, most fertility challenges have specific medical
                  causes that require proper diagnosis and treatment.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;You should be able to manage the
                  emotional side of infertility on your own.&quot;{" "}
                  <strong>Fact:</strong> Seeking support is a sign of proactive
                  self-care, not an inability to cope.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Fertility yoga is the same as
                  regular yoga.&quot;{" "}
                  <strong>Fact:</strong> Fertility-focused practice involves
                  specific modifications and considerations relevant to the
                  fertility treatment process.
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