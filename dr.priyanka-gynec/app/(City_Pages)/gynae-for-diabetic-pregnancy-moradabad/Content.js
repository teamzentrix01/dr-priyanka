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

export default function GynaecologistForDiabeticPregnancy() {
  const faqs = [
    {
      q: "When is gestational diabetes screening usually done?",
      a: "Typically between weeks 24 and 28 of pregnancy, though earlier screening may be recommended for higher-risk women.",
    },
    {
      q: "Does gestational diabetes mean I did something wrong during pregnancy?",
      a: "No, it results from normal pregnancy hormone changes affecting insulin sensitivity and is a manageable, recognised condition.",
    },
    {
      q: "Will I definitely need insulin if diagnosed with gestational diabetes?",
      a: "Not necessarily — many cases are managed effectively with diet and lifestyle changes alone.",
    },
    {
      q: "Does gestational diabetes go away after delivery?",
      a: "Yes, in most cases blood sugar returns to normal after delivery, though follow-up testing is recommended to confirm this.",
    },
    {
      q: "Will I need a caesarean delivery if I have diabetes in pregnancy?",
      a: "Not necessarily — many women with well-controlled diabetes have normal vaginal deliveries, depending on individual clinical factors.",
    },
    {
      q: "How often will I need check-ups during a diabetic pregnancy?",
      a: "More frequently than a standard low-risk pregnancy, allowing closer monitoring of blood sugar control and fetal growth.",
    },
    {
      q: "Does having gestational diabetes increase my future health risks?",
      a: "Yes, it increases the lifetime risk of developing type 2 diabetes, making postpartum follow-up testing important.",
    },
    {
      q: "Can I still have a healthy baby with diabetes during pregnancy?",
      a: "Yes, with proper monitoring and blood sugar management, the majority of women with diabetes in pregnancy have healthy outcomes.",
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
                Gynaecologist for Diabetic Pregnancy in Moradabad: Safe,
                Closely Monitored Care
              </h1>

              <p className="mb-4 text-gray-700">
                Diabetes during pregnancy — whether it develops during pregnancy
                itself (gestational diabetes) or existed beforehand — requires a
                more closely monitored, specialised approach to prenatal care.
                With the right management, the overwhelming majority of women
                with diabetes in pregnancy go on to have healthy pregnancies and
                healthy babies.
              </p>

              <p className="text-gray-700">
                This guide explains the difference between gestational and
                pre-existing diabetes in pregnancy, how it&apos;s screened for
                and diagnosed, what specialised monitoring involves, and how a
                well-managed diabetic pregnancy is approached from diagnosis
                through delivery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diabetes in pregnancy falls into two categories — gestational
                  diabetes (developing during pregnancy) and pre-existing
                  diabetes (present before conception) — each requiring a
                  slightly different management approach
                </li>
                <li>
                  Routine screening for gestational diabetes is a standard part
                  of prenatal care, typically performed between weeks 24 and 28
                  of pregnancy
                </li>
                <li>
                  With proper blood sugar management, most women with diabetes
                  in pregnancy have positive outcomes for both themselves and
                  their baby
                </li>
                <li>
                  Diabetic pregnancies require more frequent monitoring, closer
                  fetal surveillance, and careful delivery planning compared to
                  a standard low-risk pregnancy
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Diabetes in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Gestational diabetes mellitus (GDM).</strong> This
                  form of diabetes develops during pregnancy, typically due to
                  pregnancy hormones affecting the body&apos;s insulin
                  sensitivity, and usually resolves after delivery.
                </li>
                <li>
                  <strong>Pre-existing (pregestational) diabetes.</strong> This
                  refers to Type 1 or Type 2 diabetes that was present before
                  pregnancy began, requiring careful management planning both
                  before conception and throughout pregnancy.
                </li>
                <li>
                  <strong>Why pregnancy affects blood sugar regulation.</strong>{" "}
                  Hormones produced by the placenta can reduce the body&apos;s
                  sensitivity to insulin, and in some women, the pancreas cannot
                  produce enough additional insulin to compensate, resulting in
                  elevated blood sugar levels.
                </li>
                <li>
                  <strong>Both types require specialised monitoring, but with
                  different starting points.</strong> Pre-existing diabetes
                  typically requires more intensive early pregnancy management,
                  since blood sugar control before and during early pregnancy
                  directly affects fetal development, while gestational diabetes
                  management usually begins once diagnosed later in pregnancy.
                </li>
                <li>
                  <strong>Risk factors differ slightly but overlap
                  significantly.</strong> Family history of diabetes, higher
                  pre-pregnancy weight, older maternal age, and a previous
                  pregnancy affected by gestational diabetes are all recognised
                  risk factors for developing GDM.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Diabetic Pregnancies Need Specialised Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Uncontrolled blood sugar can affect fetal
                  growth.</strong> Elevated maternal blood sugar can cause the
                  baby to grow larger than average (macrosomia), which can
                  complicate delivery and increase certain risks for both mother
                  and baby.
                </li>
                <li>
                  <strong>It can affect the baby&apos;s blood sugar after
                  birth.</strong> Babies born to mothers with poorly controlled
                  diabetes can experience low blood sugar shortly after birth,
                  requiring careful monitoring in the newborn period.
                </li>
                <li>
                  <strong>It increases certain pregnancy complication
                  risks.</strong> Diabetes in pregnancy is associated with a
                  higher likelihood of conditions such as preeclampsia, making
                  closer blood pressure and overall monitoring important.
                </li>
                <li>
                  <strong>Pre-existing diabetes carries additional early
                  pregnancy considerations.</strong> Blood sugar levels around
                  the time of conception and in early pregnancy are linked to
                  the risk of certain birth defects, making pre-conception
                  counselling particularly valuable for women with known
                  diabetes planning pregnancy.
                </li>
                <li>
                  <strong>Delivery timing and method may need
                  adjustment.</strong> Depending on how well blood sugar is
                  controlled and the baby&apos;s estimated size, delivery
                  planning for a diabetic pregnancy sometimes differs from a
                  standard low-risk delivery plan.
                </li>
                <li>
                  <strong>The good news: proper management significantly reduces
                  these risks.</strong> With consistent monitoring and blood
                  sugar control, the vast majority of these risks can be
                  substantially minimised, allowing for a healthy pregnancy
                  outcome.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Screening and Diagnosis of Gestational Diabetes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Routine screening typically occurs between weeks 24
                  and 28.</strong> This is the standard window during which most
                  pregnant women are screened for gestational diabetes,
                  regardless of symptoms.
                </li>
                <li>
                  <strong>Earlier screening may be recommended for higher-risk
                  women.</strong> Women with significant risk factors, such as a
                  history of gestational diabetes in a previous pregnancy or a
                  strong family history, may be screened earlier in pregnancy.
                </li>
                <li>
                  <strong>The screening process involves a glucose tolerance
                  test.</strong> This typically involves drinking a glucose
                  solution followed by blood sugar measurement at specific time
                  intervals to assess how the body processes sugar.
                </li>
                <li>
                  <strong>A diagnosis is based on specific blood sugar
                  thresholds.</strong> If blood sugar levels exceed established
                  diagnostic thresholds at one or more testing points, a
                  diagnosis of gestational diabetes is confirmed.
                </li>
                <li>
                  <strong>Pre-existing diabetes is typically identified before
                  or very early in pregnancy.</strong> Women with known diabetes
                  entering pregnancy, or those diagnosed with unusually high
                  blood sugar very early in pregnancy, are managed as
                  pre-existing diabetes cases from the outset.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Diabetic Pregnancy Is Managed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Blood sugar monitoring becomes a regular part of daily
                  routine.</strong> Most women with diabetes in pregnancy are
                  guided on regular home blood sugar monitoring to track how
                  well levels are being controlled throughout the day.
                </li>
                <li>
                  <strong>Dietary management is often the first line of
                  treatment.</strong> A structured, individualised meal plan
                  focused on balanced carbohydrate intake and consistent meal
                  timing is frequently effective in managing gestational
                  diabetes, particularly in milder cases.
                </li>
                <li>
                  <strong>Physical activity is incorporated where
                  appropriate.</strong> Regular, pregnancy-safe physical
                  activity can help improve insulin sensitivity and support
                  blood sugar control alongside dietary changes.
                </li>
                <li>
                  <strong>Medical treatment is added when needed.</strong> When
                  diet and lifestyle changes alone are not sufficient to
                  maintain healthy blood sugar levels, insulin or other
                  doctor-prescribed medical treatment is introduced, tailored to
                  individual monitoring results.
                </li>
                <li>
                  <strong>More frequent prenatal visits are standard.</strong>{" "}
                  Diabetic pregnancies typically involve more frequent check-ups
                  than a standard low-risk pregnancy, allowing closer tracking
                  of blood sugar control, fetal growth, and overall maternal
                  health.
                </li>
                <li>
                  <strong>Coordinated care between obstetrics and other
                  specialists.</strong> Depending on individual circumstances,
                  care may be coordinated with an endocrinologist or
                  diabetologist alongside the obstetric team for comprehensive
                  management.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Additional Monitoring During a Diabetic Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>More frequent growth scans.</strong> Regular ultrasound
                  monitoring tracks the baby&apos;s growth pattern closely,
                  watching specifically for signs of excessive growth associated
                  with elevated blood sugar levels.
                </li>
                <li>
                  <strong>Amniotic fluid level checks.</strong> Diabetes in
                  pregnancy can sometimes be associated with changes in amniotic
                  fluid levels, making this a routine part of ongoing monitoring.
                </li>
                <li>
                  <strong>Fetal wellbeing assessments in the later
                  trimester.</strong> As pregnancy progresses, additional
                  monitoring such as fetal heart rate tracking may be
                  incorporated to confirm ongoing wellbeing.
                </li>
                <li>
                  <strong>Blood pressure monitoring at every visit.</strong>{" "}
                  Given the increased association between diabetes and
                  preeclampsia, blood pressure is checked closely and
                  consistently throughout the pregnancy.
                </li>
                <li>
                  <strong>Regular review of blood sugar logs.</strong> Bringing
                  home monitoring records to each appointment allows the care
                  team to adjust the management plan promptly based on real,
                  ongoing data rather than a single snapshot.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Planning for a Diabetic Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Timing of delivery is individualised.</strong>{" "}
                  Depending on blood sugar control, fetal growth, and overall
                  pregnancy health, the recommended delivery timing may differ
                  slightly from a standard low-risk pregnancy timeline.
                </li>
                <li>
                  <strong>Mode of delivery depends on specific clinical
                  factors.</strong> While many women with well-controlled
                  diabetes can have a normal vaginal delivery, factors such as
                  estimated baby size may influence delivery planning
                  discussions.
                </li>
                <li>
                  <strong>Blood sugar is closely monitored during labour.</strong>{" "}
                  Maintaining stable blood sugar levels throughout labour and
                  delivery is an important part of intrapartum care for diabetic
                  pregnancies.
                </li>
                <li>
                  <strong>Newborn monitoring after birth is standard
                  practice.</strong> Babies born to mothers with diabetes are
                  typically monitored for blood sugar levels shortly after birth
                  as a routine precaution.
                </li>
                <li>
                  <strong>Postpartum follow-up is an essential final step.</strong>{" "}
                  For women with gestational diabetes, blood sugar typically
                  normalises after delivery, but follow-up testing is recommended
                  to confirm this and to assess future diabetes risk.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Life After a Gestational Diabetes Diagnosis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Gestational diabetes usually resolves after
                  delivery.</strong> For most women, blood sugar returns to
                  normal once the pregnancy ends and placental hormones are no
                  longer affecting insulin sensitivity.
                </li>
                <li>
                  <strong>It does increase future diabetes risk.</strong> Women
                  who have had gestational diabetes have a higher lifetime risk
                  of developing type 2 diabetes later in life, making postpartum
                  follow-up testing and ongoing awareness genuinely important.
                </li>
                <li>
                  <strong>Future pregnancies carry a higher likelihood of
                  recurrence.</strong> Women with a history of gestational
                  diabetes are more likely to experience it again in future
                  pregnancies, which is useful information for early screening
                  in subsequent pregnancies.
                </li>
                <li>
                  <strong>Lifestyle habits established during pregnancy can have
                  lasting benefit.</strong> Dietary and activity changes adopted
                  during a gestational diabetes pregnancy often continue to
                  support long-term metabolic health well beyond delivery.
                </li>
                <li>
                  <strong>Regular follow-up supports long-term health.</strong>{" "}
                  Periodic blood sugar screening after a gestational diabetes
                  pregnancy is a reasonable, proactive step for long-term health
                  monitoring.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Diabetic Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Gestational diabetes means
                  something went wrong during pregnancy.&quot;{" "}
                  <strong>Fact:</strong> It develops due to normal pregnancy
                  hormone changes affecting insulin sensitivity and is a
                  recognised, manageable pregnancy condition, not a sign of a
                  mistake.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;If I don&apos;t have symptoms, I
                  probably don&apos;t need the screening test.&quot;{" "}
                  <strong>Fact:</strong> Gestational diabetes frequently causes
                  no noticeable symptoms, which is exactly why routine screening
                  is recommended for all pregnant women regardless of symptoms.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;A gestational diabetes diagnosis
                  means I&apos;ll definitely need insulin.&quot;{" "}
                  <strong>Fact:</strong> Many cases are managed successfully
                  through diet and lifestyle changes alone, with medication
                  added only when needed.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Diabetic pregnancies always
                  require a caesarean delivery.&quot;{" "}
                  <strong>Fact:</strong> Many women with well-controlled
                  diabetes have normal vaginal deliveries; the specific delivery
                  plan depends on individual clinical factors.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Once diagnosed, there&apos;s
                  nothing more I can do to affect the outcome.&quot;{" "}
                  <strong>Fact:</strong> Consistent blood sugar management
                  through diet, activity, monitoring, and treatment when needed
                  significantly influences pregnancy outcomes.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Gestational diabetes only matters
                  during pregnancy.&quot;{" "}
                  <strong>Fact:</strong> It carries meaningful implications for
                  future diabetes risk, making postpartum follow-up an
                  important, ongoing part of care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Specialist Care Matters for a Diabetic Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Accurate, timely diagnosis.</strong> Proper screening
                  and testing protocols ensure gestational diabetes is
                  identified promptly, allowing management to begin as early as
                  possible.
                </li>
                <li>
                  <strong>Individualised management planning.</strong> Treatment
                  is tailored specifically to each woman&apos;s blood sugar
                  patterns, lifestyle, and pregnancy stage, rather than applying
                  a generic approach.
                </li>
                <li>
                  <strong>Closer, more frequent monitoring throughout
                  pregnancy.</strong> A specialist experienced in diabetic
                  pregnancy management ensures the more intensive monitoring
                  schedule this condition requires is properly followed.
                </li>
                <li>
                  <strong>Coordinated, informed delivery planning.</strong>{" "}
                  Specialist obstetric care ensures delivery timing and method
                  decisions properly account for blood sugar control and fetal
                  growth patterns.
                </li>
                <li>
                  <strong>Confident, informed support throughout a higher-risk
                  pregnancy.</strong> Specialist guidance helps women feel
                  genuinely informed and supported, rather than anxious,
                  throughout a pregnancy that requires closer attention.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri&apos;s obstetric practice in Moradabad
                provides specialised, closely monitored care for women with
                gestational or pre-existing diabetes, combining structured blood
                sugar management with advanced ultrasound monitoring to support
                a healthy pregnancy outcome for both mother and baby.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Diabetic Pregnancy Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Whether you&apos;ve been newly diagnosed with gestational
                diabetes or are managing pre-existing diabetes during pregnancy,
                specialised, closely monitored care makes a real difference to
                your pregnancy outcome.
              </p>

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