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

export default function DoctorForWomensStomachProblemsMoradabad() {
  const faqs = [
    {
      q: "Who is a trusted doctor for women's stomach problems in Moradabad?",
      a: "Dr. Priyanka Pachauri is an experienced gynaecologist in Moradabad known for evaluating hormonal and reproductive causes of stomach problems.",
    },
    {
      q: "Why do women get bloating before periods?",
      a: "Hormonal shifts in oestrogen and progesterone before periods commonly cause fluid retention and bloating.",
    },
    {
      q: "Can PCOS cause digestive problems?",
      a: "Yes, PCOS is linked to insulin resistance, which can cause bloating, weight changes, and digestive discomfort.",
    },
    {
      q: "Is IBS connected to the menstrual cycle?",
      a: "Yes, IBS symptoms often worsen around periods due to hormonal effects on gut motility.",
    },
    {
      q: "Can ovarian cysts feel like a stomach problem?",
      a: "Yes, cysts can cause pressure and bloating that may initially feel like a digestive issue.",
    },
    {
      q: "Should I see a gynaecologist or a gastroenterologist first?",
      a: "If symptoms are linked to your cycle or reproductive health, a gynaecologist is a good starting point for evaluation.",
    },
    {
      q: "Can stress cause stomach problems in women?",
      a: "Yes, stress affects gut function and can worsen bloating, indigestion, and bowel irregularities.",
    },
    {
      q: "Does the clinic treat PCOS-related digestive and weight issues?",
      a: "Yes, Dr. Priyanka Pachauri offers comprehensive PCOS management including digestive and metabolic symptom relief.",
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
                Doctor for Women&apos;s Stomach Problems in Moradabad – Complete
                Guide by Dr. Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                Women often experience stomach-related issues that are quite
                different in cause and pattern from typical digestive complaints,
                largely because hormones play such a central role in digestion,
                bloating, appetite, and bowel habits. Recurring stomach problems
                that don&apos;t fully resolve with usual home remedies often
                need a doctor who understands this hormonal connection. If you
                are searching for a doctor for women&apos;s stomach problems,
                this guide walks through the wide range of issues women commonly
                face and how Dr. Priyanka Pachauri approaches them with a
                whole-body, hormone-aware perspective.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women&apos;s Stomach Problems Are Often Different
              </h2>

              <p className="mb-4 text-gray-700">
                Unlike general digestive complaints, many stomach issues in
                women are closely tied to the menstrual cycle, hormonal
                fluctuations, and reproductive health, which is why a
                gynaecologist&apos;s perspective often uncovers what a purely
                digestive approach might miss.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal shifts across the menstrual cycle directly affect
                  digestion and bowel movement patterns.
                </li>
                <li>
                  Conditions like PCOS are strongly linked to bloating, weight
                  changes, and digestive discomfort.
                </li>
                <li>
                  Pregnancy hormones significantly slow digestion, leading to
                  bloating and constipation.
                </li>
                <li>
                  Perimenopause and menopause bring hormonal changes that can
                  alter appetite and gut sensitivity.
                </li>
                <li>
                  Pelvic and reproductive organ issues can mimic or worsen
                  digestive symptoms.
                </li>
                <li>
                  Stress and anxiety, often linked to hormonal cycles, can
                  directly impact gut function.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Types of Stomach Problems Women Experience
              </h2>

              <p className="mb-4 text-gray-700">
                Stomach problems in women can show up in many different ways,
                and recognizing the pattern helps guide the right kind of
                evaluation.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Bloating and gas:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cyclical bloating that worsens in the days before periods.
                </li>
                <li>
                  Persistent bloating unrelated to the menstrual cycle.
                </li>
                <li>
                  Bloating accompanied by visible abdominal swelling.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Digestive discomfort:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Indigestion or a heavy feeling after meals.
                </li>
                <li>
                  Acidity or a burning sensation in the upper stomach.
                </li>
                <li>Nausea unrelated to pregnancy.</li>
                <li>
                  Loss of appetite or, alternatively, increased hunger tied to
                  hormonal shifts.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Bowel-related issues:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Constipation, especially common before periods and during
                  pregnancy.
                </li>
                <li>
                  Diarrhoea or loose motions occurring around the start of
                  periods.
                </li>
                <li>
                  Alternating constipation and diarrhoea, often linked to
                  IBS-like patterns.
                </li>
                <li>Straining or incomplete bowel movements.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pain-related patterns:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cramping stomach pain tied to the menstrual cycle.
                </li>
                <li>
                  Sharp or dull pelvic discomfort that feels like it&apos;s
                  coming from the stomach.
                </li>
                <li>
                  Pain that worsens with bloating or gas buildup.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Stomach Problems in Women
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the underlying cause helps determine whether the
                issue needs gynaecological evaluation, dietary changes, or a
                combination of both.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS, which is closely linked to bloating, weight
                  fluctuations, and irregular digestion.
                </li>
                <li>
                  Premenstrual fluctuations in oestrogen and progesterone
                  affecting gut motility.
                </li>
                <li>
                  Thyroid imbalance, which can slow or speed up digestion.
                </li>
                <li>
                  Pregnancy-related hormonal changes affecting the digestive
                  system.
                </li>
                <li>
                  Perimenopause and menopause-related shifts in metabolism and
                  gut sensitivity.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Reproductive system causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovarian cysts causing pressure and bloating that feels
                  digestive in nature.
                </li>
                <li>
                  Uterine fibroids leading to abdominal fullness and
                  discomfort.
                </li>
                <li>
                  Endometriosis, which can cause bloating and bowel-related
                  symptoms alongside pelvic pain.
                </li>
                <li>
                  Pelvic Inflammatory Disease (PID) presenting with abdominal
                  discomfort.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Digestive and lifestyle causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irritable Bowel Syndrome (IBS), which is more common in women
                  and often worsens around periods.
                </li>
                <li>Food intolerances or sensitivities.</li>
                <li>
                  Poor dietary habits, including low fibre or fluid intake.
                </li>
                <li>
                  Sedentary lifestyle affecting bowel regularity.
                </li>
                <li>
                  Stress and anxiety directly impacting gut function.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Recurring Stomach Problems Should Not Be Ignored
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chronic bloating or discomfort can significantly affect daily
                  comfort and confidence.
                </li>
                <li>
                  Untreated hormonal imbalances behind digestive symptoms can
                  worsen over time.
                </li>
                <li>
                  Overlapping gynaecological and digestive symptoms can delay
                  accurate diagnosis if not properly evaluated.
                </li>
                <li>
                  Persistent digestive changes can sometimes mask underlying
                  reproductive conditions like fibroids or endometriosis.
                </li>
                <li>
                  Long-term untreated PCOS-related digestive issues can affect
                  metabolic and reproductive health together.
                </li>
                <li>
                  Early evaluation often leads to simpler, more effective, and
                  longer-lasting relief.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor for Women&apos;s Stomach Problems
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bloating or digestive discomfort occurs consistently every
                  month, especially around your cycle.
                </li>
                <li>
                  Stomach symptoms are accompanied by irregular or heavy
                  periods.
                </li>
                <li>
                  You experience unexplained weight gain along with bloating and
                  digestive changes.
                </li>
                <li>
                  Digestive symptoms don&apos;t improve with dietary changes or
                  over-the-counter remedies.
                </li>
                <li>
                  Stomach discomfort is accompanied by pelvic pain or pressure.
                </li>
                <li>
                  You notice changes in bowel habits that persist for more than
                  a few weeks.
                </li>
                <li>
                  Digestive symptoms appear alongside excessive fatigue, hair
                  thinning, or skin changes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Evaluates Women&apos;s Stomach
                Problems
              </h2>

              <p className="mb-4 text-gray-700">
                A combined gynaecological and digestive evaluation helps ensure
                no underlying cause is missed, especially when symptoms overlap.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed discussion of your digestive symptoms alongside your
                  menstrual and reproductive history.
                </li>
                <li>Physical and abdominal examination.</li>
                <li>
                  Pelvic examination when a reproductive cause is suspected.
                </li>
                <li>
                  Ultrasound (2D/3D/4D) to check for cysts, fibroids, or other
                  pelvic causes.
                </li>
                <li>
                  Hormonal blood tests, including thyroid and reproductive
                  hormone panels.
                </li>
                <li>
                  Blood sugar and insulin resistance testing when PCOS is
                  suspected.
                </li>
                <li>
                  Referral for further digestive investigation when a primary
                  gastrointestinal cause is more likely.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri – Trusted Doctor for Women&apos;s
                Stomach Problems in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a well-known gynaecologist in Moradabad,
                recognized for her comprehensive, whole-body approach to
                women&apos;s health, including the digestive and hormonal
                overlap many women experience.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials with international fellowship training.
                </li>
                <li>
                  Extensive experience connecting hormonal and reproductive
                  causes to digestive symptoms.
                </li>
                <li>
                  Access to advanced diagnostic tools, including 3D/4D
                  ultrasound imaging.
                </li>
                <li>
                  Strong expertise in managing PCOS-related bloating and
                  metabolic symptoms.
                </li>
                <li>
                  Known for thorough consultations that consider the full
                  picture, not just isolated symptoms.
                </li>
                <li>
                  Trusted by women across Moradabad for accurate, holistic
                  diagnosis.
                </li>
                <li>
                  Focus on long-term hormonal balance alongside symptom relief.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS management combining medication, diet, and lifestyle
                  guidance to reduce bloating and digestive symptoms.
                </li>
                <li>
                  Hormonal therapy to address cycle-related digestive
                  fluctuations.
                </li>
                <li>
                  Laparoscopic treatment for fibroids, cysts, or endometriosis
                  contributing to abdominal discomfort.
                </li>
                <li>
                  Thyroid evaluation and coordinated treatment for
                  digestion-related symptoms.
                </li>
                <li>
                  Nutritional and lifestyle counselling tailored to hormonal and
                  digestive health.
                </li>
                <li>
                  Coordinated referral for gastrointestinal specialist care when
                  needed.
                </li>
                <li>
                  Ongoing monitoring to track improvement across menstrual
                  cycles.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Stomach Problems?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A gynaecologist&apos;s perspective often uncovers hormonal
                  causes a general check-up might miss.
                </li>
                <li>
                  Comprehensive testing covering both reproductive and hormonal
                  factors.
                </li>
                <li>
                  Personalized treatment addressing root causes rather than just
                  symptom relief.
                </li>
                <li>
                  Coordination with other specialists when a purely digestive
                  issue is identified.
                </li>
                <li>
                  Comfortable, private environment for discussing symptoms that
                  overlap sensitive areas.
                </li>
                <li>
                  Continuity of care tracking your symptoms across multiple
                  cycles.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Women&apos;s Stomach Problems
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Bloating before periods is unrelated to
                  hormones. <strong>Fact:</strong> Premenstrual bloating is a
                  well-recognized hormonal response linked to oestrogen and
                  progesterone shifts.
                </li>
                <li>
                  <strong>Myth:</strong> Digestive issues in women are always
                  just diet-related. <strong>Fact:</strong> Hormonal conditions
                  like PCOS and thyroid imbalance are common underlying
                  contributors.
                </li>
                <li>
                  <strong>Myth:</strong> IBS and gynaecological issues are
                  completely unrelated. <strong>Fact:</strong> IBS symptoms
                  often worsen around the menstrual cycle due to hormonal
                  influence on gut motility.
                </li>
                <li>
                  <strong>Myth:</strong> Only pregnant women experience
                  hormone-related digestive changes. <strong>Fact:</strong>{" "}
                  Digestive changes occur throughout the reproductive years due
                  to normal cycle hormone shifts.
                </li>
                <li>
                  <strong>Myth:</strong> Persistent bloating is just something
                  to live with. <strong>Fact:</strong> Ongoing bloating often
                  has an identifiable and treatable cause.
                </li>
                <li>
                  <strong>Myth:</strong> Weight gain from PCOS is unrelated to
                  digestion. <strong>Fact:</strong> PCOS-related insulin
                  resistance directly affects digestion, appetite, and bloating.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Tips to Support Digestive and Hormonal Health
              </h2>

              <p className="mb-4 text-gray-700">
                While medical treatment addresses the root cause, these daily
                habits can support digestive and hormonal balance over time.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat smaller, more frequent meals to reduce bloating and
                  support digestion.
                </li>
                <li>
                  Include fibre-rich foods like fruits, vegetables, and whole
                  grains to support regular bowel movements.
                </li>
                <li>
                  Stay well-hydrated throughout the day to aid digestion.
                </li>
                <li>
                  Limit processed foods, excess salt, and carbonated drinks,
                  which can worsen bloating.
                </li>
                <li>
                  Exercise regularly to support both hormonal balance and gut
                  motility.
                </li>
                <li>
                  Manage stress through yoga, meditation, or relaxation
                  techniques.
                </li>
                <li>
                  Track your symptoms alongside your menstrual cycle to identify
                  hormonal patterns.
                </li>
                <li>
                  Avoid restrictive crash diets, which can disrupt both
                  digestion and hormone balance.
                </li>
                <li>
                  Get adequate sleep to support overall hormonal and digestive
                  regulation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A calm, private, and thorough consultation covering both
                  digestive and reproductive history.
                </li>
                <li>
                  Time to describe your specific symptoms, patterns, and
                  triggers.
                </li>
                <li>
                  Clear explanation connecting your digestive symptoms to
                  possible hormonal or reproductive causes.
                </li>
                <li>
                  Only necessary diagnostic tests recommended for an accurate
                  diagnosis.
                </li>
                <li>
                  A treatment plan addressing the root cause, whether hormonal,
                  structural, or lifestyle-related.
                </li>
                <li>
                  Guidance on diet and daily habits to support long-term
                  relief.
                </li>
                <li>
                  Ongoing follow-up to track improvement across cycles.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stomach Problems at Different Life Stages
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Teenagers:</strong> Digestive changes often accompany
                  early hormonal fluctuations as periods begin.
                </li>
                <li>
                  <strong>Reproductive age women:</strong> PCOS, endometriosis,
                  and cyclical bloating are common contributors.
                </li>
                <li>
                  <strong>Pregnant women:</strong> Slowed digestion and
                  constipation are common due to pregnancy hormones.
                </li>
                <li>
                  <strong>Postpartum women:</strong> Digestive patterns may take
                  time to normalize after childbirth.
                </li>
                <li>
                  <strong>Women approaching menopause:</strong> Metabolic and
                  digestive changes often accompany hormonal shifts in this
                  stage.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Appointment with Dr. Priyanka Pachauri, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If recurring stomach problems are affecting your daily comfort
                and you are searching for a reliable doctor for women&apos;s
                stomach problems, Dr. Priyanka Pachauri&apos;s clinic in
                Moradabad offers a thorough, hormone-aware evaluation and
                personalized treatment.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
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
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call for Appointment</p>
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
              <p className="text-gray-700">
                Stomach problems in women are often more closely connected to
                hormones and reproductive health than many realize, which is why
                a purely digestive approach doesn&apos;t always bring lasting
                relief. Consulting an experienced doctor for women&apos;s
                stomach problems like Dr. Priyanka Pachauri ensures your
                symptoms are evaluated from every angle — hormonal, reproductive,
                and digestive — leading to a treatment plan that addresses the
                real root cause.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
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