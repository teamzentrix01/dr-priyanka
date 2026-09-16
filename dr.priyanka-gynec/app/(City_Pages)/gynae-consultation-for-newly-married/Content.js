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

export default function GynaeConsultationNewlyMarried() {
  const faqs = [
    {
      q: "When should a newly married woman first see a gynaecologist?",
      a: "Ideally soon after marriage, even before actively planning a pregnancy, to establish a baseline for reproductive health.",
    },
    {
      q: "Who offers gynae consultations for newly married women in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers a comfortable, comprehensive first consultation.",
    },
    {
      q: "Is a pelvic examination always required at the first visit?",
      a: "Not necessarily — it depends on your specific concerns and comfort, and many first visits focus mainly on discussion.",
    },
    {
      q: "Does the consultation cover contraception options?",
      a: "Yes, contraception counselling is a standard part of the consultation if you're not planning to conceive immediately.",
    },
    {
      q: "Can I discuss preconception planning during this visit?",
      a: "Yes, preconception counselling, including vitamin guidance and health screening, is commonly covered.",
    },
    {
      q: "Is it normal to feel nervous about the first visit?",
      a: "Yes, it's a very common feeling, and a good doctor will make the pace and process comfortable for you.",
    },
    {
      q: "How do I book a consultation?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Can I bring my partner to the consultation?",
      a: "Yes, this is entirely a personal choice based on your comfort level.",
    },
    {
      q: "Does the clinic address sexual health concerns during this visit?",
      a: "Yes, sexual health topics are discussed openly and confidentially as part of the consultation.",
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
                Gynae Consultation for Newly Married Women: Why It Matters and
                What to Expect
              </h1>

              <p className="mb-4 text-gray-700">
                For many newly married women in India, visiting a gynaecologist
                for the first time can feel intimidating — a mix of
                unfamiliarity, cultural hesitation, and simply not knowing what
                such a consultation involves. Yet this early visit can be one of
                the most valuable steps a newly married woman takes for her
                long-term health, whether she&apos;s planning to start a family
                soon or wants to wait a few years.
              </p>

              <p className="text-gray-700">
                In Moradabad, more newlywed women are recognizing the value of
                a proactive gynaecological consultation rather than waiting
                until a problem arises. This article explains why this visit
                matters, what it typically covers, how to prepare, and why Dr.
                Priyanka Pachauri offers a comfortable, judgment-free space for
                this important first consultation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Gynae Consultation Matters After Marriage
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Establishes a baseline for your reproductive health, giving
                  you and your doctor a starting point for future care
                </li>
                <li>
                  Opens the door to open communication about sensitive topics,
                  which becomes easier once a comfortable relationship with a
                  doctor is established
                </li>
                <li>
                  Allows early discussion of family planning, whether
                  you&apos;re hoping to conceive soon or want reliable
                  contraception first
                </li>
                <li>
                  Addresses any pre-existing menstrual or gynaecological
                  concerns, which may have gone unaddressed before marriage
                </li>
                <li>
                  Provides an opportunity for general health screening,
                  including checks that are relevant regardless of pregnancy
                  plans
                </li>
                <li>
                  Helps ease any anxiety or misinformation around sex, fertility,
                  or reproductive health through accurate, professional guidance
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Gynae Consultation for Newly Married Women Typically
                Covers
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. General Health and Medical History
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Discussion of your overall health, medical history, and
                      any pre-existing conditions
                    </li>
                    <li>
                      Review of your menstrual cycle history, including
                      regularity, flow, and any associated symptoms
                    </li>
                    <li>
                      Family history relevant to reproductive health, such as
                      diabetes, thyroid conditions, or genetic conditions
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Contraception Counselling
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Discussion of contraceptive options if you&apos;re not
                      planning to conceive immediately
                    </li>
                    <li>
                      Guidance on choosing a method that suits your health
                      profile, lifestyle, and timeline for starting a family
                    </li>
                    <li>
                      Information on both short-term and long-acting reversible
                      options, as well as permanent solutions if relevant to
                      your plans
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Preconception Counselling (If Planning Pregnancy Soon)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Assessment of your overall readiness for pregnancy,
                      including relevant health checks
                    </li>
                    <li>
                      Guidance on prenatal vitamins, particularly folic acid,
                      which is important to start before conception
                    </li>
                    <li>
                      Discussion of lifestyle factors that support a healthy
                      pregnancy, such as diet, exercise, and avoiding certain
                      substances
                    </li>
                    <li>
                      Screening for conditions that could affect pregnancy, such
                      as thyroid dysfunction or anemia
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Sexual Health Discussion
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      A comfortable space to discuss any concerns about pain
                      during intercourse, low libido, or other sexual health
                      topics
                    </li>
                    <li>
                      Guidance on vaginal health and hygiene
                    </li>
                    <li>
                      Discussion of STI risk and appropriate testing, if
                      relevant
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    5. Vaccination Review
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Checking vaccination status for conditions like rubella,
                      which is particularly important to address before pregnancy
                    </li>
                    <li>
                      Discussion of HPV vaccination, if not already received,
                      which can be relevant for cervical health
                    </li>
                    <li>
                      General guidance on any other recommended vaccinations
                      based on individual health history
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    6. Addressing Common Concerns and Myths
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      A space to ask questions about topics that may feel
                      embarrassing to bring up elsewhere
                    </li>
                    <li>
                      Clarifying misinformation that may have been picked up
                      from family, friends, or online sources
                    </li>
                    <li>
                      Building confidence and knowledge about your own
                      reproductive health
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Concerns Newly Married Women Often Have
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain or discomfort during intercourse, which can have various
                  causes and is often very treatable
                </li>
                <li>
                  Uncertainty about when to start trying for a baby, especially
                  amid family or social pressure
                </li>
                <li>
                  Confusion about contraceptive options, particularly for women
                  who&apos;ve never used any form of birth control before
                </li>
                <li>
                  Questions about irregular periods, which may have been present
                  for years but never formally evaluated
                </li>
                <li>
                  Anxiety about fertility, sometimes based on family history or
                  general uncertainty about reproductive health
                </li>
                <li>
                  Concerns about weight, PCOD, or hormonal symptoms that may
                  affect future pregnancy plans
                </li>
                <li>
                  General nervousness about the first pelvic examination,
                  especially for women who&apos;ve never had one before
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Consultation Is Better Than Waiting
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Identifying and addressing issues early is often simpler than
                  managing them after they&apos;ve progressed
                </li>
                <li>
                  Establishing a relationship with a trusted doctor makes future
                  visits, including pregnancy care if needed, more comfortable
                  and efficient
                </li>
                <li>
                  Preconception health optimization takes time, so starting
                  conversations early allows for better preparation if pregnancy
                  is a near-term goal
                </li>
                <li>
                  Contraception decisions benefit from professional guidance
                  rather than relying on informal advice from family or friends
                </li>
                <li>
                  Early evaluation of any existing menstrual or hormonal
                  concerns allows more treatment options and better long-term
                  outcomes
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your First Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, one-on-one conversation with the doctor about your
                  health history and any concerns
                </li>
                <li>
                  The pace is generally set by your comfort level, with a good
                  doctor allowing time for questions rather than rushing through
                  a checklist
                </li>
                <li>
                  A physical or pelvic examination may be recommended, though
                  this is generally optional depending on your specific concerns
                  and comfort
                </li>
                <li>
                  Clear explanations of any recommendations, whether related to
                  contraception, preconception planning, or addressing a
                  specific symptom
                </li>
                <li>
                  An opportunity to ask anything, including questions that might
                  feel awkward to bring up with family members
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your First Gynae Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Being prepared can help make the appointment more efficient and
                less stressful:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Note your menstrual cycle history, including typical cycle
                  length and any irregularities
                </li>
                <li>
                  Think about your family planning timeline, even if
                  it&apos;s still uncertain, since this shapes the conversation
                </li>
                <li>
                  List any symptoms or concerns, even ones that feel minor or
                  embarrassing
                </li>
                <li>
                  Bring details of your vaccination history, if available
                </li>
                <li>
                  Note any relevant family medical history, such as diabetes,
                  thyroid conditions, or genetic conditions
                </li>
                <li>
                  Prepare questions in advance, since it&apos;s easy to forget
                  things once you&apos;re in the appointment
                </li>
                <li>
                  Consider whether you&apos;d like your partner present, which
                  is entirely a personal choice and depends on your comfort
                  level
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – A Comfortable First Gynae Consultation
                in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers a welcoming,
                judgment-free environment for newly married women seeking their
                first gynaecological consultation in Moradabad. According to her
                official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her practice is well-suited to support this important early
                visit, including:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A &quot;Her Health First&quot; philosophy, ensuring the
                  consultation begins with listening to your specific concerns
                  and goals, rather than following a rigid checklist
                </li>
                <li>
                  Comprehensive services covering the full spectrum of
                  reproductive health, including contraception counselling,
                  fertility evaluation, and general gynaecological care
                </li>
                <li>
                  Advanced diagnostic imaging, including a Voluson E22 3D/4D
                  ultrasound machine, useful for any evaluations that may be
                  recommended
                </li>
                <li>
                  Fertility and IVF services, relevant for couples who want
                  guidance on conception timelines or early preconception
                  planning
                </li>
                <li>
                  A private, respectful consultation environment, designed to
                  make sensitive conversations feel comfortable rather than
                  awkward
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently describe
                feeling comfortable, respected, and clearly informed throughout
                their consultations — exactly the kind of experience that makes
                a first gynaecological visit far less intimidating. The clinic
                is located in Gandhi Nagar, Moradabad, making it accessible to
                newly married women across the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Navigating Family Expectations and Personal Choices
              </h2>

              <p className="mb-4 text-gray-700">
                Many newly married women in Moradabad and similar cities face
                well-meaning but sometimes overwhelming input from family
                members about when to start a family, what symptoms are
                &quot;normal,&quot; or which health decisions to make. A
                gynaecologist consultation can offer an important, neutral space
                to sort through this:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A doctor&apos;s guidance is based on your individual health,
                  not general assumptions or family timelines
                </li>
                <li>
                  You can discuss family planning pressure openly with your
                  doctor, who can help you understand realistic timelines based
                  on your actual health status
                </li>
                <li>
                  Personal contraceptive choices remain confidential, giving you
                  space to make decisions based on your own readiness rather
                  than external expectations
                </li>
                <li>
                  A doctor can help address health-related misinformation that
                  sometimes circulates within families, replacing it with
                  accurate, evidence-based guidance
                </li>
                <li>
                  You&apos;re not obligated to share every detail of your
                  consultation with family members, and confidentiality is a
                  standard part of medical care
                </li>
                <li>
                  Feeling supported in your own decision-making around family
                  planning contributes significantly to overall wellbeing during
                  this life transition
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Making the Most of an Ongoing Relationship With Your
                Gynaecologist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Continuity matters — seeing the same doctor over time allows
                  for more personalized, informed care as your needs evolve
                </li>
                <li>
                  Future pregnancy care becomes more seamless when your doctor
                  already knows your health history and previous concerns
                </li>
                <li>
                  You&apos;re more likely to raise new symptoms early once
                  you&apos;re comfortable with a particular doctor, rather than
                  waiting until something feels urgent
                </li>
                <li>
                  Annual or periodic check-ups, even without specific
                  complaints, help catch potential issues early and keep your
                  reproductive health on track
                </li>
                <li>
                  Building this relationship early in marriage sets a strong
                  foundation for consistent, informed healthcare throughout the
                  years ahead
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Gynae Visits for Newly Married Women
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;You only need to see a
                  gynaecologist once you&apos;re trying to conceive.&quot;{" "}
                  <strong>Fact:</strong> An earlier consultation can help
                  address concerns and establish good reproductive health habits
                  well before pregnancy planning begins.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;A pelvic examination is always
                  required at the first visit.&quot;{" "}
                  <strong>Fact:</strong> Many first consultations focus
                  primarily on discussion and history-taking, with examinations
                  recommended only when relevant.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Contraception counselling is
                  unnecessary if you want children eventually.&quot;{" "}
                  <strong>Fact:</strong> Even short-term contraception guidance
                  can be valuable if you&apos;re not planning to conceive
                  immediately.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;It&apos;s inappropriate to
                  discuss sexual health concerns with a doctor.&quot;{" "}
                  <strong>Fact:</strong> These conversations are a normal,
                  expected part of gynaecological care and are handled
                  professionally and confidentially.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;First visits are only for women
                  with a specific problem.&quot;{" "}
                  <strong>Fact:</strong> A general wellness consultation,
                  without any specific complaint, is equally valuable and
                  common.
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
                        Gynaecologist & Women&apos;s Health Specialist (MBBS,
                        MS)
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