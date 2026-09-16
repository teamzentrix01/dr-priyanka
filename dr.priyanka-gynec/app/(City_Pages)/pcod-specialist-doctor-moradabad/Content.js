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

export default function PCODSpecialistDoctor() {
  const faqs = [
    {
      q: "What is PCOD?",
      a: "It's a condition where the ovaries produce multiple immature eggs that can turn into small cysts, often linked to hormonal imbalance.",
    },
    {
      q: "Is PCOD the same as PCOS?",
      a: "No, they're related but distinct — PCOD is generally considered less metabolically severe than PCOS.",
    },
    {
      q: "Who treats PCOD in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers diagnosis and treatment for PCOD as part of her practice.",
    },
    {
      q: "Can PCOD be cured completely?",
      a: "It's typically managed rather than fully cured, through lifestyle changes and, when needed, medical treatment.",
    },
    {
      q: "Does PCOD affect fertility?",
      a: "It can make ovulation irregular, but many women with PCOD conceive naturally or with medical support.",
    },
    {
      q: "What tests are used to diagnose PCOD?",
      a: "Hormonal blood tests, pelvic ultrasound, and sometimes blood sugar or thyroid testing.",
    },
    {
      q: "How do I book a consultation for PCOD?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Can diet and lifestyle changes really help manage PCOD?",
      a: "Yes, balanced nutrition and regular physical activity can significantly improve PCOD symptoms.",
    },
    {
      q: "Does PCOD only affect women who are overweight?",
      a: "No, it can occur in women of any body type, not just those who are overweight.",
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
                PCOD Specialist Doctor in Moradabad: A Complete Guide to
                Diagnosis and Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                PCOD, or Polycystic Ovarian Disease, is one of the most commonly
                diagnosed hormonal conditions among women in India today, yet
                confusion about what it actually means — and how it differs from
                the closely related PCOS — leaves many women unsure about their
                diagnosis and treatment options. In Moradabad, a growing number
                of young women are being diagnosed with PCOD, often after years
                of irregular periods, weight changes, or difficulty conceiving
                that went unexplained.
              </p>

              <p className="text-gray-700">
                This article provides a detailed, practical guide to
                understanding PCOD, its symptoms, causes, diagnosis, and
                treatment options, along with why Dr. Priyanka Pachauri is a
                trusted specialist for PCOD care in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is PCOD
              </h2>

              <p className="mb-4 text-gray-700">
                PCOD stands for Polycystic Ovarian Disease, a condition in which
                the ovaries produce numerous immature or partially mature eggs,
                which eventually turn into cysts. Key facts include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOD involves the ovaries releasing multiple immature eggs,
                  which can accumulate and form small cysts over time
                </li>
                <li>
                  It&apos;s associated with hormonal imbalance, though generally
                  considered less severe than PCOS in terms of metabolic impact
                </li>
                <li>
                  It&apos;s highly common, affecting a significant proportion of
                  women of reproductive age
                </li>
                <li>
                  Most women with PCOD can still ovulate, though often
                  irregularly
                </li>
                <li>
                  It&apos;s generally manageable through lifestyle changes and,
                  when needed, medical treatment
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                PCOD vs. PCOS: What&apos;s the Difference
              </h2>

              <p className="mb-4 text-gray-700">
                The terms PCOD and PCOS are often used interchangeably in
                everyday conversation, but they refer to somewhat different
                conditions:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>PCOD (Polycystic Ovarian Disease)</strong> is
                  generally considered a condition where the ovaries produce
                  immature eggs that become cysts, but it&apos;s typically less
                  severe and more manageable through lifestyle changes
                </li>
                <li>
                  <strong>PCOS (Polycystic Ovary Syndrome)</strong> is a broader
                  metabolic and hormonal disorder involving significant hormonal
                  imbalance, often with a stronger link to insulin resistance and
                  a higher risk of long-term complications
                </li>
                <li>
                  PCOD is more common overall, while PCOS tends to be a more
                  complex, metabolically significant condition
                </li>
                <li>
                  Women with PCOD generally retain a higher chance of natural
                  conception, compared to more severe PCOS cases, though this
                  varies by individual
                </li>
                <li>
                  Both conditions can cause similar symptoms, such as irregular
                  periods, weight gain, and acne, which is why proper diagnosis
                  by a doctor is essential to determine which condition — and
                  what treatment approach — applies to you
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of PCOD
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular or missed periods, one of the most common and
                  noticeable symptoms
                </li>
                <li>
                  Weight gain, particularly around the abdomen, that can be
                  difficult to manage
                </li>
                <li>
                  Acne and oily skin, often related to hormonal fluctuations
                </li>
                <li>
                  Excess facial or body hair growth (hirsutism), caused by
                  elevated androgen levels
                </li>
                <li>
                  Hair thinning or hair loss on the scalp, in some cases
                </li>
                <li>
                  Difficulty conceiving, due to irregular or absent ovulation
                </li>
                <li>
                  Mood changes, including increased anxiety or low mood, which
                  some women experience alongside the physical symptoms
                </li>
                <li>
                  Fatigue, which can be linked to hormonal imbalance and
                  disrupted sleep patterns
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors for PCOD
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Genetic predisposition, since PCOD often runs in families
                </li>
                <li>
                  Hormonal imbalance, particularly elevated androgen (male
                  hormone) levels
                </li>
                <li>
                  Lifestyle factors, including diet, physical activity levels,
                  and stress
                </li>
                <li>
                  Obesity or rapid weight gain, which can worsen hormonal
                  imbalance and symptom severity
                </li>
                <li>
                  Insulin resistance, which can contribute to and worsen
                  hormonal disruption in many cases
                </li>
                <li>
                  Environmental and dietary factors, including highly processed
                  diets and sedentary lifestyles, which are increasingly
                  recognized as contributing factors in younger populations
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How PCOD Is Diagnosed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed menstrual and symptom history, including cycle
                  patterns, weight changes, and skin or hair symptoms
                </li>
                <li>
                  Physical examination, assessing for signs like excess hair
                  growth or acne
                </li>
                <li>
                  Hormonal blood tests, checking levels of androgens, LH, FSH,
                  and other relevant hormones
                </li>
                <li>
                  Pelvic ultrasound, to check for the characteristic appearance
                  of multiple small cysts on the ovaries
                </li>
                <li>
                  Blood sugar and insulin testing, sometimes recommended to
                  assess for related metabolic factors
                </li>
                <li>
                  Thyroid function tests, since thyroid imbalance can present
                  with similar symptoms and needs to be ruled out
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for PCOD
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Lifestyle-Based Treatment
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Balanced nutrition, focusing on whole foods, adequate
                      protein, and reduced processed sugar and refined
                      carbohydrates
                    </li>
                    <li>
                      Regular physical activity, which can meaningfully improve
                      hormonal balance and support weight management
                    </li>
                    <li>
                      Stress management, since chronic stress can worsen
                      hormonal imbalance over time
                    </li>
                    <li>
                      Adequate sleep, which plays an important role in hormonal
                      regulation
                    </li>
                    <li>
                      Gradual, sustainable weight management, rather than extreme
                      or rapid weight loss approaches, which can be
                      counterproductive
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Medical Treatment
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Hormonal medications, such as birth control pills, to help
                      regulate menstrual cycles and manage symptoms like acne or
                      excess hair growth
                    </li>
                    <li>
                      Medications to manage insulin resistance, when relevant,
                      which can also help with symptom management
                    </li>
                    <li>
                      Ovulation induction medications, for women trying to
                      conceive who are experiencing irregular or absent ovulation
                    </li>
                    <li>
                      Treatment for specific symptoms, such as topical or oral
                      treatments for acne, or hair removal options for excess
                      hair growth
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Long-Term Management
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Regular monitoring, since PCOD often requires ongoing
                      management rather than a one-time treatment
                    </li>
                    <li>
                      Periodic reassessment of treatment plans, adjusting as
                      symptoms, weight, or fertility goals change over time
                    </li>
                    <li>
                      Attention to associated risks, including monitoring for
                      related conditions like insulin resistance over the years
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Tips for Managing PCOD
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Choose complex carbohydrates over refined sugar and white
                  flour, which can help manage insulin levels
                </li>
                <li>
                  Include adequate protein at each meal, supporting satiety and
                  stable blood sugar levels
                </li>
                <li>
                  Increase fiber intake, through vegetables, whole grains, and
                  legumes
                </li>
                <li>
                  Limit processed and fried foods, which can worsen inflammation
                  and hormonal imbalance
                </li>
                <li>
                  Stay well-hydrated throughout the day
                </li>
                <li>
                  Practice portion awareness rather than extreme restriction,
                  which is generally more sustainable long-term
                </li>
                <li>
                  Consider consulting a nutritionist alongside your doctor for a
                  more personalized dietary plan, if needed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                PCOD and Fertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many women with PCOD can conceive naturally, though irregular
                  ovulation can make timing more challenging
                </li>
                <li>
                  Ovulation tracking can help identify fertile windows more
                  accurately for women trying to conceive
                </li>
                <li>
                  Medical treatment to induce ovulation may be recommended if
                  natural conception isn&apos;t occurring after a reasonable
                  period of trying
                </li>
                <li>
                  Early evaluation is helpful for women with PCOD who are
                  planning a pregnancy, allowing time to address any related
                  fertility factors
                </li>
                <li>
                  A gynaecologist experienced in both PCOD and fertility care can
                  provide integrated guidance for women navigating this specific
                  concern
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – PCOD Specialist Doctor in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers comprehensive
                diagnosis and treatment for PCOD as part of her gynaecological
                practice in Moradabad. According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her services relevant to PCOD care include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal health and menstrual disorder management, forming a
                  core part of her clinical practice
                </li>
                <li>
                  Advanced diagnostic imaging, including a Voluson E22 3D/4D
                  ultrasound machine, useful for evaluating ovarian appearance
                  as part of PCOD diagnosis
                </li>
                <li>
                  Fertility evaluation and IVF services, relevant for women with
                  PCOD who are facing difficulty conceiving
                </li>
                <li>
                  A &quot;Her Health First&quot; approach, ensuring PCOD
                  symptoms — including their emotional impact — are addressed
                  with patience rather than being dismissed as minor
                </li>
                <li>
                  Educational resources, including blog content specifically
                  addressing PCOS and infertility topics on her clinic&apos;s
                  website
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently highlight
                feeling comfortable and well-guided throughout their
                consultations — an important quality for a condition like PCOD
                that often requires long-term, personalized management. The
                clinic is located in Gandhi Nagar, Moradabad, making it
                accessible to women across the city seeking PCOD evaluation and
                treatment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your PCOD Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Coming prepared can help your doctor build a more accurate
                picture of your condition from the very first visit:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Track your menstrual cycle for a few months beforehand, noting
                  cycle length, flow, and any associated symptoms
                </li>
                <li>
                  Note weight changes over time, including how quickly any
                  recent gain or loss occurred
                </li>
                <li>
                  Keep a record of skin and hair symptoms, such as when acne or
                  excess hair growth first appeared or worsened
                </li>
                <li>
                  Note any family history of PCOD, PCOS, diabetes, or thyroid
                  conditions, since these can be relevant to diagnosis
                </li>
                <li>
                  List any medications or supplements you&apos;re currently
                  taking
                </li>
                <li>
                  Write down your specific goals for the consultation, whether
                  that&apos;s symptom relief, fertility planning, or general
                  health management
                </li>
                <li>
                  Be prepared to discuss your diet and activity levels honestly,
                  since this information helps guide lifestyle recommendations
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Living Well With PCOD: A Long-Term Perspective
              </h2>

              <p className="mb-4 text-gray-700">
                Managing PCOD is generally an ongoing process rather than a
                one-time treatment, and adopting the right mindset can make a
                real difference:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Focus on sustainable habits rather than quick fixes, since
                  crash diets or extreme exercise regimens are rarely
                  maintainable long-term
                </li>
                <li>
                  Celebrate non-scale progress, such as more regular cycles,
                  improved energy, or clearer skin, rather than focusing solely
                  on weight
                </li>
                <li>
                  Build a support system, whether through family, friends, or
                  other women managing similar symptoms, since PCOD can
                  sometimes feel isolating
                </li>
                <li>
                  Stay consistent with follow-up visits, even when symptoms feel
                  stable, since PCOD often benefits from periodic reassessment
                </li>
                <li>
                  Address the emotional side of PCOD, including any impact on
                  self-esteem or mood, as part of your overall care plan
                </li>
                <li>
                  Remember that management looks different for every woman,
                  since treatment plans are personalized based on individual
                  symptoms, goals, and response to treatment over time
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About PCOD
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;PCOD only affects overweight
                  women.&quot;{" "}
                  <strong>Fact:</strong> PCOD can occur in women of any body
                  type, including those with a normal or lower body weight.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;PCOD means you can&apos;t get
                  pregnant.&quot;{" "}
                  <strong>Fact:</strong> Many women with PCOD conceive naturally
                  or with appropriate medical support.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;PCOD is the same as PCOS.&quot;{" "}
                  <strong>Fact:</strong> While related, PCOD and PCOS are
                  distinct conditions with some differences in severity and
                  metabolic impact.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;PCOD goes away completely once
                  you lose weight.&quot;{" "}
                  <strong>Fact:</strong> Weight management can significantly
                  improve symptoms, but PCOD often requires ongoing, long-term
                  management rather than a one-time fix.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;PCOD only affects your
                  periods.&quot;{" "}
                  <strong>Fact:</strong> It can also affect skin, hair, weight,
                  mood, and long-term metabolic health, making comprehensive
                  management important.
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
                        Gynaecologist & Hormonal Health Specialist (MBBS, MS)
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