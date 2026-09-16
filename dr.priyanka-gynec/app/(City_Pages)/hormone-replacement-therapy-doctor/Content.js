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

export default function HormoneReplacementTherapy() {
  const faqs = [
    {
      q: "Is HRT safe for most women going through menopause?",
      a: "For many women, especially those starting closer to the onset of menopause, HRT has a favourable safety profile — an individual evaluation confirms suitability.",
    },
    {
      q: "What's the difference between estrogen-only and combined HRT?",
      a: "Estrogen-only is generally used after a hysterectomy, while combined therapy includes progesterone to protect the uterine lining in women who still have a uterus.",
    },
    {
      q: "Are bioidentical hormones better than standard HRT?",
      a: "Regulated, pharmaceutical-grade bioidentical hormones are a legitimate HRT option; unregulated compounded versions may lack the same safety and quality assurances.",
    },
    {
      q: "How long do I need to stay on HRT?",
      a: "There's no fixed duration — it's individually determined and reviewed regularly based on symptoms and health status.",
    },
    {
      q: "Can I use HRT if I only have vaginal dryness, not hot flashes?",
      a: "Yes, local vaginal estrogen therapy specifically targets these symptoms with a different risk profile than systemic treatment.",
    },
    {
      q: "Does HRT increase cancer risk for everyone?",
      a: "Risk varies based on individual factors like HRT type, dose, duration, and personal or family health history — this is assessed individually, not as a blanket risk for all women.",
    },
    {
      q: "What monitoring is needed while on HRT?",
      a: "Regular follow-up visits are standard, allowing the doctor to reassess effectiveness, tolerability, and continued appropriateness over time.",
    },
    {
      q: "How do I know if HRT is the right choice for me?",
      a: "A detailed consultation covering your symptoms, health history, and personal preferences is the best way to determine if HRT fits your individual situation.",
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
                Hormone Replacement Therapy Doctor in Moradabad: Types,
                Benefits, and Safety Explained
              </h1>

              <p className="mb-4 text-gray-700">
                Hormone Replacement Therapy (HRT) remains one of the most
                effective treatments available for menopausal symptoms, yet it
                is also one of the most misunderstood. Decades-old research
                findings, often taken out of context, continue to shape public
                perception, leaving many women uncertain or hesitant about a
                treatment that could genuinely improve their quality of life.
              </p>

              <p className="text-gray-700">
                This guide focuses specifically on HRT — what it actually
                involves, the different types and delivery methods available,
                who is a good candidate, and how safety is assessed on an
                individual basis.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  HRT replaces the hormones — primarily estrogen, often combined
                  with progesterone — that decline during menopause, addressing
                  symptoms at their hormonal source
                </li>
                <li>
                  Modern HRT comes in multiple types and delivery methods,
                  allowing treatment to be tailored to individual symptoms,
                  health history, and personal preference
                </li>
                <li>
                  HRT safety is highly individualised; risk and benefit depend
                  on factors like age, time since menopause began, dose, and
                  personal health history
                </li>
                <li>
                  Regular monitoring and periodic review are a standard part of
                  HRT, allowing treatment to be adjusted as needed over time
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What HRT Actually Does
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>It replaces declining hormone levels directly.</strong>{" "}
                  As estrogen (and often progesterone) production declines
                  during the menopausal transition, HRT supplements these
                  hormones, addressing the root cause of many menopausal
                  symptoms.
                </li>
                <li>
                  <strong>It is one of the most effective treatments for hot
                  flashes and night sweats.</strong> For women experiencing
                  moderate to severe vasomotor symptoms, HRT is widely
                  recognised as among the most effective available treatments.
                </li>
                <li>
                  <strong>It supports vaginal and urinary tissue health.</strong>{" "}
                  Estrogen therapy, whether systemic or localised, can
                  significantly improve vaginal dryness, discomfort, and related
                  urinary symptoms linked to declining estrogen levels.
                </li>
                <li>
                  <strong>It plays a protective role in bone health.</strong>{" "}
                  Estrogen helps maintain bone density, and HRT can meaningfully
                  reduce the accelerated bone loss that occurs after menopause.
                </li>
                <li>
                  <strong>It can improve sleep and mood indirectly.</strong> By
                  reducing night sweats and hot flashes, many women find their
                  sleep and overall mood improve as a secondary benefit of
                  symptom relief.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Hormone Replacement Therapy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Estrogen-only therapy.</strong> This is generally used
                  for women who have had a hysterectomy, since estrogen alone,
                  without accompanying progesterone, can affect the uterine
                  lining in women who still have a uterus.
                </li>
                <li>
                  <strong>Combined estrogen-progesterone therapy.</strong> For
                  women who still have a uterus, progesterone is included
                  alongside estrogen specifically to protect the uterine lining
                  from the effects of estrogen alone.
                </li>
                <li>
                  <strong>Continuous vs. cyclical regimens.</strong> Combined
                  therapy can be taken continuously, without a break, or
                  cyclically, mimicking a more natural hormone pattern with a
                  scheduled withdrawal bleed.
                </li>
                <li>
                  <strong>Systemic vs. local (vaginal) estrogen.</strong>{" "}
                  Systemic therapy treats body-wide symptoms like hot flashes,
                  while local vaginal estrogen specifically targets vaginal and
                  urinary symptoms with minimal absorption into the rest of the
                  body.
                </li>
                <li>
                  <strong>Bioidentical hormone therapy.</strong> This refers to
                  hormone formulations that are chemically identical to the
                  hormones naturally produced by the body, available through
                  regulated pharmaceutical preparations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Methods: Choosing How HRT Is Taken
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Oral tablets.</strong> A common and convenient method,
                  though the way hormones are processed through the digestive
                  system and liver differs somewhat from other delivery routes.
                </li>
                <li>
                  <strong>Transdermal patches.</strong> These deliver hormones
                  directly through the skin into the bloodstream, bypassing
                  initial liver processing, and are often preferred for certain
                  health profiles.
                </li>
                <li>
                  <strong>Gels and sprays.</strong> Applied to the skin, these
                  offer another transdermal option with flexible, adjustable
                  dosing.
                </li>
                <li>
                  <strong>Vaginal creams, tablets, or rings.</strong> These
                  deliver estrogen directly to vaginal tissue for women whose
                  primary concern is vaginal dryness or related symptoms, with
                  minimal systemic absorption.
                </li>
                <li>
                  <strong>The right method depends on individual factors.</strong>{" "}
                  Symptom type, personal health history, convenience
                  preferences, and how a woman&apos;s body responds all factor
                  into which delivery method is recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is Generally a Good Candidate for HRT
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Women with moderate to severe menopausal
                  symptoms.</strong> Those experiencing significant hot flashes,
                  night sweats, or sleep disruption that affects quality of life
                  are often good candidates for symptom-focused HRT.
                </li>
                <li>
                  <strong>Women within 10 years of menopause onset, or under age
                  60.</strong> Current understanding generally supports HRT
                  being safest and most beneficial when started closer to the
                  onset of menopause.
                </li>
                <li>
                  <strong>Women with early or premature menopause.</strong> For
                  women who experience menopause significantly earlier than
                  average, HRT is often specifically recommended to protect
                  long-term bone and cardiovascular health.
                </li>
                <li>
                  <strong>Women primarily bothered by vaginal or urinary
                  symptoms.</strong> These women may be excellent candidates for
                  local vaginal estrogen therapy, which carries a different risk
                  profile than systemic treatment.
                </li>
                <li>
                  <strong>Women without specific contraindications.</strong> A
                  personal or strong family history of certain hormone-sensitive
                  cancers, blood clots, or specific cardiovascular conditions may
                  affect candidacy, which is why individual evaluation is
                  essential.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding HRT Safety: Moving Past Outdated Fears
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Public perception is still shaped by older research
                  taken out of context.</strong> A well-known large study from
                  the early 2000s significantly shaped public fear around HRT,
                  but subsequent analysis has clarified that many of its
                  findings applied specifically to older women starting HRT many
                  years after menopause.
                </li>
                <li>
                  <strong>Modern understanding emphasises individualised risk
                  assessment.</strong> Rather than a blanket rule, current
                  medical guidance evaluates each woman&apos;s specific age,
                  time since menopause, personal and family health history, and
                  symptom severity.
                </li>
                <li>
                  <strong>The &quot;timing hypothesis&quot; is central to
                  current safety understanding.</strong> Starting HRT closer to
                  the onset of menopause is generally associated with a more
                  favourable safety profile compared to starting many years
                  after menopause begins.
                </li>
                <li>
                  <strong>Lower doses and different delivery methods can alter
                  the risk profile.</strong> Transdermal estrogen, for instance,
                  is associated with a different risk profile for certain
                  conditions compared to oral estrogen.
                </li>
                <li>
                  <strong>Ongoing monitoring is a core part of safe HRT
                  use.</strong> Regular follow-up allows the doctor to reassess
                  whether continuing treatment remains appropriate as time
                  passes and health circumstances evolve.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a HRT Consultation and Monitoring Process Involves
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A comprehensive personal and family health
                  history.</strong> This includes any history of blood clots,
                  hormone-sensitive cancers, cardiovascular disease, or liver
                  conditions, all relevant to safe HRT candidacy.
                </li>
                <li>
                  <strong>Discussion of specific symptoms and their
                  impact.</strong> Understanding which symptoms are most
                  disruptive helps guide the choice of therapy type and delivery
                  method.
                </li>
                <li>
                  <strong>Baseline health assessment.</strong> This may include
                  blood pressure check, relevant screening tests, and, where
                  appropriate, a discussion of mammography and other routine
                  women&apos;s health screenings.
                </li>
                <li>
                  <strong>A shared decision-making conversation.</strong> The
                  doctor presents the specific benefits and risks relevant to
                  that individual woman&apos;s profile, allowing an informed,
                  collaborative decision.
                </li>
                <li>
                  <strong>A trial period with follow-up review.</strong> HRT is
                  often started with a plan to review effectiveness and
                  tolerability at a follow-up visit, allowing adjustments to
                  dose or delivery method as needed.
                </li>
                <li>
                  <strong>Ongoing periodic reassessment.</strong> Regular
                  follow-up visits continue for as long as a woman remains on
                  HRT, ensuring the treatment remains appropriate and beneficial
                  over time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Long Is HRT Typically Continued?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>There is no fixed universal duration.</strong> The
                  appropriate length of treatment depends on individual
                  symptoms, goals, and ongoing risk-benefit assessment rather
                  than a single standard timeline for all women.
                </li>
                <li>
                  <strong>Many women use HRT for symptom relief during the most
                  disruptive years of transition.</strong> For some, this may
                  mean a few years; for others, particularly with early
                  menopause, longer-term use may be appropriate.
                </li>
                <li>
                  <strong>Duration is reviewed regularly, not decided once and
                  left unchanged.</strong> As health status and personal
                  circumstances evolve, the appropriateness of continuing
                  treatment is revisited at follow-up visits.
                </li>
                <li>
                  <strong>Stopping HRT is also a personalised decision.</strong>{" "}
                  Whether to taper gradually or stop at a specific point is
                  discussed individually, based on symptom pattern and personal
                  preference.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Hormone Replacement Therapy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;HRT is dangerous for all
                  women.&quot;{" "}
                  <strong>Fact:</strong> Safety depends heavily on individual
                  factors like age, timing, and health history — many women are
                  excellent candidates with a favourable risk-benefit profile.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Bioidentical hormones from
                  compounding pharmacies are safer than regulated HRT.&quot;{" "}
                  <strong>Fact:</strong> Regulated, pharmaceutical-grade
                  bioidentical hormone products have established safety and
                  quality standards that unregulated compounded preparations may
                  not consistently meet.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Once you start HRT, you have to
                  stay on it forever.&quot;{" "}
                  <strong>Fact:</strong> Duration is individualised and
                  regularly reviewed, with many women using it for a defined
                  period during their most symptomatic years.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;All types of HRT carry the same
                  risk profile.&quot;{" "}
                  <strong>Fact:</strong> Different types, doses, and delivery
                  methods carry meaningfully different risk profiles, which is
                  why treatment is tailored rather than standardised.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Local vaginal estrogen carries
                  the same risks as systemic HRT.&quot;{" "}
                  <strong>Fact:</strong> Local vaginal estrogen has minimal
                  systemic absorption and a different, generally more favourable
                  risk profile for many women.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Natural remedies are always a
                  safer alternative to HRT.&quot;{" "}
                  <strong>Fact:</strong> Non-hormonal and natural approaches can
                  help some women, but their effectiveness and safety should
                  also be discussed with a doctor rather than assumed to be
                  automatically safer.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Specialist&apos;s Guidance Is Essential for HRT
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Individualised risk assessment requires clinical
                  expertise.</strong> Weighing personal and family history
                  against current evidence is a nuanced process best guided by a
                  specialist familiar with current HRT research.
                </li>
                <li>
                  <strong>Access to the full range of formulations and delivery
                  methods.</strong> A specialist can match the right type and
                  method to an individual&apos;s specific symptoms and health
                  profile.
                </li>
                <li>
                  <strong>Safe initiation and monitoring.</strong> Starting HRT
                  with appropriate baseline assessment and follow-up ensures
                  both effectiveness and safety are properly tracked over time.
                </li>
                <li>
                  <strong>Coordinated care alongside other health needs.</strong>{" "}
                  HRT decisions are made in the context of a woman&apos;s
                  overall health picture, including bone health, cardiovascular
                  risk, and other relevant conditions.
                </li>
                <li>
                  <strong>Ongoing, responsive adjustment.</strong> As symptoms,
                  health status, or personal preferences change, a specialist
                  relationship allows treatment to be adjusted appropriately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist in
                Moradabad offering personalised hormone replacement therapy
                consultations, guiding women through an individualised,
                evidence-based assessment of whether HRT is appropriate for
                their specific symptoms and health profile.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your HRT Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                If menopausal symptoms are affecting your quality of life, a
                personalised consultation can clarify whether hormone replacement
                therapy is the right option for you.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Hormone Therapy Specialist (MBBS, MS)
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