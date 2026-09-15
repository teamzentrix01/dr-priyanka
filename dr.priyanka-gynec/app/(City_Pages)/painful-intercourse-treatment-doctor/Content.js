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

export default function PainfulIntercourseTreatment() {
  const faqs = [
    {
      q: "Is painful intercourse a serious medical condition?",
      a: "It can range from a minor, easily treated cause to a sign of a more significant underlying condition — a clinical evaluation is the only way to know which.",
    },
    {
      q: "Can painful intercourse be fully cured?",
      a: "Yes, in most cases. Once the underlying cause is identified, targeted treatment resolves or significantly improves the symptom.",
    },
    {
      q: "Is a pelvic examination for this problem embarrassing or uncomfortable?",
      a: "It is a routine, gentle clinical examination performed with full privacy and professionalism, just like any other gynaecological check-up.",
    },
    {
      q: "Does painful intercourse always mean I have endometriosis?",
      a: "No. Endometriosis is one possible cause among several, including infections, dryness, and pelvic floor conditions — evaluation determines the actual cause.",
    },
    {
      q: "Will I need surgery for this problem?",
      a: "Not necessarily. Many cases are managed with medication, topical treatment, or pelvic floor therapy; surgery is only recommended when clinically indicated.",
    },
    {
      q: "How soon can treatment start after consultation?",
      a: "Once the cause is identified through examination and any required tests, an appropriate treatment plan is usually started at the same visit or shortly after.",
    },
    {
      q: "Can younger, unmarried women also consult for this problem?",
      a: "Yes. Painful intercourse can affect women at any age or life stage, and consultations are handled with complete confidentiality regardless of age or marital status.",
    },
    {
      q: "Should I see a gynaecologist or a general physician first?",
      a: "A gynaecologist is best placed to evaluate this specific symptom directly, as it falls within reproductive and pelvic health.",
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
                Painful Intercourse Treatment Doctor: Causes, When to Seek Help,
                and Treatment Options
              </h1>

              <p className="mb-4 text-gray-700">
                Pain during intercourse — medically known as dyspareunia — is
                one of the most under-reported gynaecological complaints. Many
                women assume it is something to simply tolerate, adjust to, or
                stay silent about out of embarrassment. It is none of these
                things. Painful intercourse is a recognised medical condition
                with identifiable causes and, in almost every case, an effective
                treatment path.
              </p>

              <p className="text-gray-700">
                This guide explains what causes painful intercourse, what a
                proper clinical evaluation involves, and how a qualified
                gynaecologist approaches treatment — so you know exactly what to
                expect before your first consultation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Painful intercourse (dyspareunia) has multiple possible
                  causes, ranging from hormonal changes and infections to pelvic
                  floor conditions and underlying gynaecological disorders such
                  as endometriosis
                </li>
                <li>
                  It is a genuine medical symptom, not something that should be
                  dismissed as normal or &quot;just in your head&quot;
                </li>
                <li>
                  A proper diagnosis requires a clinical pelvic examination and,
                  where needed, imaging or laboratory tests — self-diagnosis or
                  guesswork based on online information is not a substitute
                </li>
                <li>
                  Most causes of dyspareunia respond well to treatment once
                  correctly identified, whether through medical management,
                  pelvic floor therapy, or in some cases minimally invasive
                  laparoscopic surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Painful Intercourse Should Never Be Ignored
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>It is common, but common does not mean normal.</strong>{" "}
                  Many women experience dyspareunia at some point in their lives,
                  yet a large proportion never seek medical help — often out of
                  embarrassment or the assumption that nothing can be done. In
                  reality, an underlying, treatable cause is present in the vast
                  majority of cases.
                </li>
                <li>
                  <strong>It can be an early signal of a larger gynaecological condition.</strong>{" "}
                  Conditions such as endometriosis, fibroids, ovarian cysts, or
                  pelvic inflammatory disease often present first as pain during
                  intercourse, long before other symptoms become obvious.
                </li>
                <li>
                  <strong>Delaying evaluation can allow an underlying condition to progress.</strong>{" "}
                  Conditions like endometriosis can worsen scarring and affect
                  fertility over time if left undiagnosed, making early clinical
                  evaluation important rather than optional.
                </li>
                <li>
                  <strong>It affects far more than physical comfort.</strong>{" "}
                  Ongoing pain during intimacy can strain relationships, reduce
                  confidence, and contribute to anxiety around intimacy — all of
                  which improve once the underlying medical cause is properly
                  treated.
                </li>
                <li>
                  <strong>A specialist consultation is confidential and judgement-free.</strong>{" "}
                  A qualified gynaecologist evaluates this symptom the same way
                  any other medical complaint is assessed — clinically,
                  privately, and without stigma.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Painful Intercourse
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Vaginal dryness.</strong> Often linked to hormonal
                  changes around menopause, breastfeeding, or certain
                  medications, reduced natural lubrication is one of the most
                  frequent and most easily treatable causes of discomfort during
                  intercourse.
                </li>
                <li>
                  <strong>Infections.</strong> Vaginal or urinary tract
                  infections, sexually transmitted infections, and yeast
                  infections can all cause inflammation and pain that
                  specifically worsens with intercourse.
                </li>
                <li>
                  <strong>Vaginismus.</strong> An involuntary tightening of the
                  vaginal muscles, often linked to anxiety, past discomfort, or
                  pelvic floor tension, which makes penetration painful or
                  difficult.
                </li>
                <li>
                  <strong>Endometriosis.</strong> Tissue similar to the uterine
                  lining growing outside the uterus is a well-documented cause
                  of deep pelvic pain during intercourse, alongside symptoms
                  like severe period cramps and chronic pelvic pain.
                </li>
                <li>
                  <strong>Uterine fibroids or ovarian cysts.</strong> Growths in
                  or around the uterus and ovaries can cause pressure and pain
                  that is triggered or worsened during intercourse.
                </li>
                <li>
                  <strong>Pelvic inflammatory disease (PID).</strong> An
                  infection of the reproductive organs that can cause chronic
                  pelvic pain, including pain during intercourse, if left
                  untreated.
                </li>
                <li>
                  <strong>Scar tissue from childbirth or surgery.</strong>{" "}
                  Episiotomy scars, C-section adhesions, or scarring from
                  previous pelvic surgery can create localised pain during
                  intercourse.
                </li>
                <li>
                  <strong>Pelvic floor muscle dysfunction.</strong> Overly tight
                  or poorly coordinated pelvic floor muscles — sometimes linked
                  to stress, past trauma, or posture-related tension — are a
                  frequently overlooked cause.
                </li>
                <li>
                  <strong>Skin conditions of the vulva.</strong> Certain
                  dermatological conditions affecting the vulvar skin can cause
                  pain, irritation, or sensitivity that intercourse aggravates.
                </li>
                <li>
                  <strong>Psychological and relational factors.</strong>{" "}
                  Anxiety, past negative experiences, or relationship stress can
                  contribute to or worsen physical symptoms, and are addressed
                  as part of a complete evaluation rather than dismissed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During a Clinical Evaluation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A detailed medical history.</strong> The doctor asks
                  about when the pain occurs, its location, severity, and any
                  associated symptoms such as irregular bleeding, discharge, or
                  menstrual pain — this alone often narrows down the likely
                  cause significantly.
                </li>
                <li>
                  <strong>A pelvic examination.</strong> A gentle clinical
                  examination allows the doctor to check for signs of infection,
                  scarring, muscle tightness, or structural abnormalities.
                </li>
                <li>
                  <strong>Ultrasound imaging where indicated.</strong> A pelvic
                  ultrasound can identify fibroids, ovarian cysts, or other
                  structural causes that are not visible on examination alone.
                </li>
                <li>
                  <strong>Laboratory tests when relevant.</strong> Tests for
                  infection or hormonal levels may be recommended depending on
                  the findings from the history and examination.
                </li>
                <li>
                  <strong>Diagnostic hysteroscopy or laparoscopy in select cases.</strong>{" "}
                  When endometriosis or another internal condition is suspected
                  but not clearly visible on ultrasound, a minimally invasive
                  diagnostic procedure may be recommended to confirm the
                  diagnosis accurately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Painful Intercourse
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment is always guided by the underlying cause identified
                during evaluation — there is no single universal treatment,
                which is exactly why a proper diagnosis matters before starting
                anything.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Topical and hormonal management for vaginal dryness.</strong>{" "}
                  When reduced lubrication is the cause, doctor-guided topical
                  treatments or hormonal management can restore comfort,
                  particularly around menopause or postpartum.
                </li>
                <li>
                  <strong>Targeted treatment for infections.</strong> Once an
                  infection is identified through testing, appropriate medical
                  treatment resolves both the infection and the associated pain.
                </li>
                <li>
                  <strong>Pelvic floor physiotherapy.</strong> For vaginismus or
                  pelvic floor muscle tightness, guided pelvic floor therapy and
                  relaxation techniques are highly effective in restoring
                  comfortable function over time.
                </li>
                <li>
                  <strong>Medical management of endometriosis.</strong>{" "}
                  Depending on severity, hormonal therapy may be used to manage
                  symptoms and slow progression of endometrial tissue growth.
                </li>
                <li>
                  <strong>Laparoscopic excision surgery.</strong> For confirmed
                  endometriosis, fibroids, or ovarian cysts causing persistent
                  pain, advanced 3D/4K laparoscopic surgery allows precise
                  removal of the underlying growths through small keyhole
                  incisions, with minimal scarring and a fast recovery.
                </li>
                <li>
                  <strong>Scar tissue release procedures.</strong> Where painful
                  scar tissue from childbirth or previous surgery is identified
                  as the cause, targeted treatment or minor procedures can
                  relieve the resulting tension and pain.
                </li>
                <li>
                  <strong>Counselling and combined care.</strong> Where
                  psychological or relational factors are contributing,
                  counselling alongside physical treatment gives the most
                  complete and lasting improvement.
                </li>
                <li>
                  <strong>Lifestyle and self-care guidance.</strong> Doctors
                  often provide practical guidance alongside medical treatment —
                  including communication strategies, timing, and gentle
                  preparation techniques — to support recovery and comfort
                  during the treatment period.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Consultation Leads to Better Outcomes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Faster relief.</strong> The earlier the underlying
                  cause is identified, the sooner appropriate treatment can
                  begin, rather than months or years of unexplained discomfort.
                </li>
                <li>
                  <strong>Prevention of complications.</strong> Conditions like
                  untreated infections or progressing endometriosis can lead to
                  more serious complications, including impact on fertility, if
                  evaluation is delayed.
                </li>
                <li>
                  <strong>More treatment options remain available.</strong>{" "}
                  Early-stage conditions are often manageable with simpler, less
                  invasive treatments compared to advanced-stage disease.
                </li>
                <li>
                  <strong>Reduced anxiety around intimacy.</strong>{" "}
                  Understanding the medical cause — and knowing it is treatable
                  — often relieves much of the psychological stress that has
                  built up around the symptom itself.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes a Gynaecologist Consultation Different from
                Self-Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Accurate diagnosis instead of guesswork.</strong>{" "}
                  Online searches often lead to conflicting or generic advice; a
                  clinical evaluation identifies the actual cause specific to
                  you.
                </li>
                <li>
                  <strong>Access to proper investigations.</strong> Ultrasound,
                  laboratory testing, and diagnostic procedures are simply not
                  available through self-assessment.
                </li>
                <li>
                  <strong>Personalised treatment planning.</strong> Every case
                  of painful intercourse has a different underlying cause and a
                  different appropriate treatment — there is no single remedy
                  that works for everyone.
                </li>
                <li>
                  <strong>Ongoing monitoring.</strong> A doctor tracks your
                  response to treatment and adjusts the approach as needed,
                  something self-treatment cannot offer.
                </li>
                <li>
                  <strong>A safe, confidential space to discuss a sensitive symptom.</strong>{" "}
                  A specialist consultation removes the discomfort of discussing
                  this topic informally and ensures it is handled with full
                  clinical privacy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist and
                laparoscopic surgeon based in Moradabad, known for combining
                advanced clinical expertise — including 3D/4K laparoscopy,
                diagnostic hysteroscopy, and comprehensive women&apos;s health
                evaluation — with an empathetic, judgement-free approach to
                sensitive concerns like painful intercourse. Consultations are
                private, thorough, and focused entirely on identifying the real
                cause of your symptoms before recommending any treatment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Painful Intercourse — And the Facts
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;It&apos;s normal for intercourse
                  to hurt sometimes.&quot;{" "}
                  <strong>Fact:</strong> Occasional mild discomfort can happen,
                  but recurring or persistent pain is not normal and always
                  warrants evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;This only happens to older women
                  after menopause.&quot;{" "}
                  <strong>Fact:</strong> Dyspareunia affects women across all
                  age groups, including younger and unmarried women, due to
                  causes like infections, vaginismus, or pelvic floor tension.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;If it&apos;s not visible on an
                  ultrasound, there&apos;s nothing wrong.&quot;{" "}
                  <strong>Fact:</strong> Many causes, such as vaginismus or
                  pelvic floor dysfunction, are functional rather than
                  structural and require a hands-on clinical examination, not
                  imaging alone.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Nothing can really be done about
                  it — you just have to live with it.&quot;{" "}
                  <strong>Fact:</strong> The overwhelming majority of cases
                  improve significantly or resolve completely once the correct
                  cause is identified and treated.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;It&apos;s purely psychological if
                  no infection is found.&quot;{" "}
                  <strong>Fact:</strong> Ruling out infection is only one part
                  of the evaluation; structural, hormonal, and muscular causes
                  are equally common and are assessed separately.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Talking to a doctor about this is
                  too embarrassing.&quot;{" "}
                  <strong>Fact:</strong> Gynaecologists evaluate this symptom
                  regularly as part of routine practice, and consultations are
                  handled with complete privacy and professionalism.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Self-Care Steps While Awaiting Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Avoid self-medicating based on online advice.</strong>{" "}
                  Over-the-counter creams or remedies chosen without a diagnosis
                  can mask symptoms or delay identification of the actual cause.
                </li>
                <li>
                  <strong>Track your symptoms.</strong> Note when the pain
                  occurs, its intensity, and any other symptoms such as
                  discharge, bleeding, or menstrual changes — this information
                  speeds up diagnosis significantly.
                </li>
                <li>
                  <strong>Avoid activities that worsen irritation.</strong>{" "}
                  Harsh soaps, scented products, or tight synthetic clothing can
                  aggravate certain causes of vulvar and vaginal discomfort.
                </li>
                <li>
                  <strong>Communicate openly with your partner.</strong>{" "}
                  Reducing pressure around intimacy while awaiting evaluation
                  helps reduce anxiety-related muscle tension, which itself can
                  worsen pain.
                </li>
                <li>
                  <strong>Do not delay booking a consultation.</strong> Early
                  evaluation consistently leads to faster relief and simpler
                  treatment, regardless of the underlying cause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book a Confidential Consultation
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Laparoscopic Surgeon & Gynaecologist (MBBS, MS)
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