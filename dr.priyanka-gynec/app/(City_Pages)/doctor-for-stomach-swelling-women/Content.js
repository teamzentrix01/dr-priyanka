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

export default function DoctorForStomachSwellingWomenMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for stomach swelling in women?",
      a: "A gynaecologist, especially if the swelling is in the lower belly. Dr. Priyanka Pachauri consults in Moradabad.",
    },
    {
      q: "Can ovarian cysts cause a swollen stomach?",
      a: "Yes. Large cysts can cause swelling, heaviness and pressure.",
    },
    {
      q: "Can fibroids make the belly look pregnant?",
      a: "Yes. Large fibroids can enlarge the lower abdomen.",
    },
    {
      q: "Is bloating always caused by gas?",
      a: "No. Bloating lasting weeks can be due to cysts, PCOS, endometriosis or other conditions.",
    },
    {
      q: "When is stomach swelling an emergency?",
      a: "With severe pain, fever, vomiting, heavy bleeding, fainting or breathlessness.",
    },
    {
      q: "Which test finds the cause of belly swelling?",
      a: "An ultrasound is usually the first test, often with blood tests.",
    },
    {
      q: "Does PCOS cause a swollen belly?",
      a: "PCOS often causes belly weight gain and bloating, along with irregular periods.",
    },
    {
      q: "Are all cysts and fibroids cancerous?",
      a: "No. Most are non-cancerous, but they should still be evaluated.",
    },
    {
      q: "Can swelling be treated without surgery?",
      a: "Often yes, through monitoring, medicines and lifestyle changes. Surgery is only for selected cases.",
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
                Doctor for Stomach Swelling in Women: Causes, Warning Signs &
                Treatment in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                A swollen stomach is one of the most common complaints women
                bring to a gynaecologist. Some say their belly looks bigger by
                evening. Others notice a hard lump low in the abdomen. Many feel
                bloated for weeks, even when they eat very little.
              </p>

              <p className="mb-4 text-gray-700">
                Most of the time, the cause is not serious. Gas, constipation or
                weight gain can all make the belly look larger. But in women,
                stomach swelling can also come from the ovaries, uterus or
                pelvis, and these causes should never be guessed at or ignored.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains why a woman&apos;s abdomen swells, which
                signs are warnings, how a doctor finds the cause, and what
                treatment is available. It also shows how to consult Dr.
                Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does &quot;Stomach Swelling&quot; Really Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                People use the phrase for several different things:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Bloating:</strong> a tight, full, gassy feeling that
                  comes and goes.
                </li>
                <li>
                  <strong>Distension:</strong> the belly visibly expands, often
                  through the day.
                </li>
                <li>
                  <strong>A lump or mass:</strong> a hard or firm swelling in one
                  area.
                </li>
                <li>
                  <strong>Fluid build-up:</strong> a swelling that spreads
                  across the whole abdomen.
                </li>
                <li>
                  <strong>Gradual enlargement:</strong> the belly slowly grows
                  over months.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The pattern matters. Bloating that settles overnight is usually
                digestive. A swelling that stays, grows or feels hard needs a
                proper check-up.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women&apos;s Bellies Swell: Gynaecological Causes
              </h2>

              <p className="mb-4 text-gray-700">
                The lower abdomen holds the uterus, ovaries and tubes. Problems
                in these organs often show up as swelling.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fluid-filled sacs that form on the ovary.
                </li>
                <li>
                  Many are harmless and disappear on their own.
                </li>
                <li>
                  Large cysts can cause a one-sided swelling, heaviness, pain
                  and pressure on the bladder.
                </li>
                <li>
                  A twisted or ruptured cyst causes sudden severe pain and needs
                  urgent care.
                </li>
                <li>
                  Persistent or large cysts may need laparoscopic cystectomy,
                  which removes the cyst while preserving the ovary.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Non-cancerous growths in the muscle of the uterus.
                </li>
                <li>
                  Large fibroids can make the lower belly look like an early
                  pregnancy.
                </li>
                <li>
                  Other signs include heavy periods, frequent urination,
                  constipation and backache.
                </li>
                <li>
                  Treatment ranges from monitoring and medicines to laparoscopic
                  myomectomy.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. PCOS (Polycystic Ovary Syndrome)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Causes weight gain around the belly, bloating and irregular
                  periods.
                </li>
                <li>
                  Often comes with acne, extra hair growth and hair thinning.
                </li>
                <li>
                  Managed with lifestyle changes, medicines and fertility
                  support when needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tissue like the uterine lining grows outside the uterus.
                </li>
                <li>
                  Can cause a bloated belly, sometimes called &quot;endo
                  belly&quot;, especially around periods.
                </li>
                <li>
                  Other signs include severe period pain, pain during
                  intercourse and difficulty conceiving.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The uterine lining grows into the uterine wall.
                </li>
                <li>
                  The uterus enlarges and becomes tender.
                </li>
                <li>
                  Causes heavy, painful periods and lower abdominal fullness.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Infection of the uterus, tubes and surrounding tissues.
                </li>
                <li>
                  Causes lower abdominal pain, tenderness, fever and foul
                  discharge.
                </li>
                <li>
                  Needs prompt treatment to protect fertility.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The first thing to rule out in any woman of reproductive age
                  with a swelling belly.
                </li>
                <li>
                  A pregnancy test is a simple first step.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Ectopic Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A pregnancy growing outside the uterus.
                </li>
                <li>
                  Causes one-sided pain, spotting and dizziness.
                </li>
                <li>This is an emergency.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Ovarian Tumours
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most ovarian growths are benign, but some can be cancerous.
                </li>
                <li>
                  Persistent bloating, a growing belly, feeling full quickly and
                  pelvic pain lasting more than a few weeks should always be
                  checked.
                </li>
                <li>
                  Early detection greatly improves outcomes.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Ascites (Fluid in the Abdomen)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Free fluid collects inside the abdomen.
                </li>
                <li>
                  Can be linked to liver, kidney, heart, infection or ovarian
                  conditions.
                </li>
                <li>
                  The whole belly swells evenly, often with leg swelling and
                  breathlessness.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Uterine or Vaginal Prolapse
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Weakened pelvic muscles let the uterus descend.
                </li>
                <li>
                  Causes a dragging feeling, heaviness and lower belly
                  discomfort.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Non-Gynaecological Causes of a Swollen Belly
              </h2>

              <p className="mb-4 text-gray-700">
                Not every swollen belly comes from the reproductive organs.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gas and indigestion: swallowing air, fizzy drinks, heavy
                  meals.
                </li>
                <li>Constipation: hard stools and slow bowels.</li>
                <li>
                  Irritable bowel syndrome (IBS): cramps, bloating and changes
                  in bowel habit.
                </li>
                <li>
                  Lactose or gluten intolerance: bloating after milk products or
                  wheat.
                </li>
                <li>Acidity and gastritis.</li>
                <li>Intestinal infections and worms.</li>
                <li>Fatty liver and other liver conditions.</li>
                <li>
                  Kidney or urinary problems: including a full bladder that
                  cannot empty properly.
                </li>
                <li>Hernia: a bulge in the belly wall.</li>
                <li>
                  Thyroid disorders: especially an underactive thyroid.
                </li>
                <li>Weight gain and lack of exercise.</li>
                <li>Stress and poor sleep.</li>
                <li>
                  Medicines: some tablets cause bloating as a side effect.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A gynaecologist can rule out reproductive causes and guide you to
                the right specialist if the cause lies elsewhere.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Does the Type of Swelling Give a Clue?
              </h2>

              <div className="mb-6 overflow-x-auto">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="p-3 font-semibold text-gray-900">
                        Type of swelling
                      </th>
                      <th className="p-3 font-semibold text-gray-900">
                        Possible cause
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="p-3">
                        Comes and goes, worse after meals
                      </td>
                      <td className="p-3">Gas, indigestion, IBS</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Worse before periods</td>
                      <td className="p-3">
                        Hormonal changes, endometriosis
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">
                        Firm lump low in the belly
                      </td>
                      <td className="p-3">Fibroid, ovarian cyst</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Swelling on one side</td>
                      <td className="p-3">Ovarian cyst or mass</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Whole belly swells evenly</td>
                      <td className="p-3">
                        Fluid, ascites, weight gain
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">
                        Growing steadily with heavy periods
                      </td>
                      <td className="p-3">Fibroids, adenomyosis</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">
                        Swelling with irregular periods and acne
                      </td>
                      <td className="p-3">PCOS</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">
                        Swelling with fever and discharge
                      </td>
                      <td className="p-3">Pelvic infection</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Swelling with missed period</td>
                      <td className="p-3">Pregnancy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700">
                This table is only a guide. Please do not rely on it in place of
                an examination.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Often Come Along With Stomach Swelling
              </h2>

              <p className="mb-4 text-gray-700">
                Tell your doctor about any of these:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lower abdominal or pelvic pain.
                </li>
                <li>
                  Heavy, painful or irregular periods.
                </li>
                <li>
                  Bleeding between periods.
                </li>
                <li>
                  Feeling full after eating very little.
                </li>
                <li>
                  Frequent urination or trouble passing urine.
                </li>
                <li>Constipation or diarrhoea.</li>
                <li>Backache or leg pain.</li>
                <li>Pain during intercourse.</li>
                <li>Unusual vaginal discharge.</li>
                <li>
                  Unexplained weight gain or weight loss.
                </li>
                <li>Tiredness and breathlessness.</li>
                <li>Nausea or vomiting.</li>
                <li>Difficulty in getting pregnant.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flag Signs: See a Doctor Immediately
              </h2>

              <p className="mb-4 text-gray-700">Do not wait if you have:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe abdominal pain.</li>
                <li>Swelling with fever and chills.</li>
                <li>
                  Persistent vomiting with a hard, tender belly.
                </li>
                <li>Heavy vaginal bleeding.</li>
                <li>Fainting or extreme weakness.</li>
                <li>
                  Swelling with breathlessness or leg swelling.
                </li>
                <li>
                  Swelling in pregnancy with bleeding or severe pain.
                </li>
                <li>A belly that keeps growing over weeks.</li>
                <li>
                  Unexplained weight loss along with bloating.
                </li>
                <li>Blood in stool or black stools.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Consult a Gynaecologist?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bloating lasts more than 2–3 weeks.
                </li>
                <li>
                  The swelling is hard, one-sided or steadily growing.
                </li>
                <li>
                  Periods are heavy, painful or irregular along with the
                  swelling.
                </li>
                <li>You feel pelvic pain or pressure.</li>
                <li>
                  You have a family history of ovarian, uterine or breast
                  cancer.
                </li>
                <li>
                  You are trying to conceive and have a swollen belly.
                </li>
                <li>
                  Over-the-counter remedies have not helped.
                </li>
                <li>
                  You are over 40 and have new, persistent bloating.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Cause of Swelling Is Found
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed History
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  When the swelling started and how it has changed.
                </li>
                <li>
                  Relation to meals, periods and bowel habits.
                </li>
                <li>
                  Pain, fever, discharge or weight changes.
                </li>
                <li>Period pattern and pregnancy history.</li>
                <li>
                  Family history of cysts, fibroids or cancers.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Physical Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Checking the belly for lumps, tenderness and fluid.
                </li>
                <li>Pelvic examination when appropriate.</li>
                <li>General health, weight and blood pressure.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Ultrasound
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic and abdominal ultrasound to see the uterus, ovaries and
                  free fluid.
                </li>
                <li>
                  3D/4D ultrasound for clearer detail where needed.
                </li>
                <li>
                  This single test finds most gynaecological causes.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Blood and Lab Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy test.</li>
                <li>Haemoglobin and infection markers.</li>
                <li>Thyroid and hormone tests.</li>
                <li>
                  Tumour markers such as CA-125 in selected cases, interpreted
                  with the scan.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Advanced Tests When Needed
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  MRI or CT scan for complex masses.
                </li>
                <li>
                  Diagnostic laparoscopy to look directly at the pelvis and
                  treat at the same time.
                </li>
                <li>
                  Hysteroscopy if the uterine cavity needs assessment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause. There is no single remedy for a
                swollen belly.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Watchful monitoring with repeat scans for small, simple cysts.
                </li>
                <li>Hormonal medicines in some cases.</li>
                <li>
                  Laparoscopic cystectomy for large, persistent or painful
                  cysts.
                </li>
                <li>Emergency surgery for twisting or rupture.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Monitoring if small and symptom-free.
                </li>
                <li>
                  Medicines to reduce bleeding and pain.
                </li>
                <li>
                  Laparoscopic myomectomy to remove fibroids while keeping the
                  uterus.
                </li>
                <li>
                  Hysterectomy only when other options are not suitable.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Weight management, diet and regular exercise.
                </li>
                <li>
                  Medicines to regulate periods and improve insulin resistance.
                </li>
                <li>
                  Ovulation induction when pregnancy is planned.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Endometriosis and Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain relief and hormonal treatment.</li>
                <li>
                  3D laparoscopic excision for endometriosis.
                </li>
                <li>
                  Individual planning based on age and fertility goals.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Full course of antibiotics.</li>
                <li>
                  Follow-up to confirm the infection has cleared.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Ovarian Tumours
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Careful evaluation and planning.</li>
                <li>
                  Surgery and coordinated specialist care when a serious
                  condition is found.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Digestive Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diet correction and treatment of constipation.
                </li>
                <li>Testing for food intolerance.</li>
                <li>
                  Referral to a gastroenterologist if needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Fluid in the Abdomen
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Identifying and treating the underlying condition.
                </li>
                <li>
                  Coordinated care with a physician or specialist.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Home Tips for Everyday Bloating
              </h2>

              <p className="mb-4 text-gray-700">
                These help with digestive bloating only and do not replace a
                check-up for persistent swelling.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat smaller meals more slowly.
                </li>
                <li>
                  Reduce fizzy drinks, deep-fried food and excess sugar.
                </li>
                <li>
                  Add fibre through vegetables, fruits and whole grains.
                </li>
                <li>Drink enough water through the day.</li>
                <li>Walk for 20–30 minutes after meals.</li>
                <li>
                  Limit foods that trigger your gas, such as certain pulses or
                  raw onions.
                </li>
                <li>
                  Avoid chewing gum and drinking through straws.
                </li>
                <li>Sleep well and manage stress.</li>
                <li>
                  Keep a symptom diary to spot triggers.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Stomach Swelling in Women
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> A big belly is only from weight gain.{" "}
                  <strong>Fact:</strong> Cysts, fibroids and fluid can enlarge
                  the belly at any weight.
                </li>
                <li>
                  <strong>Myth:</strong> Bloating is always gas.{" "}
                  <strong>Fact:</strong> Persistent bloating can signal an
                  ovarian or pelvic condition.
                </li>
                <li>
                  <strong>Myth:</strong> Any lump in the belly is cancer.{" "}
                  <strong>Fact:</strong> Most cysts and fibroids are benign, but
                  they still need evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> Surgery is always needed for a cyst or
                  fibroid. <strong>Fact:</strong> Many are simply monitored or
                  treated with medicines.
                </li>
                <li>
                  <strong>Myth:</strong> Herbal powders can dissolve cysts and
                  fibroids. <strong>Fact:</strong> Unproven remedies waste time
                  and may delay proper care.
                </li>
                <li>
                  <strong>Myth:</strong> If it does not hurt, it is not serious.{" "}
                  <strong>Fact:</strong> Some serious conditions cause little
                  pain in the early stage.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation about your symptoms.
                </li>
                <li>
                  An abdominal examination and, if suitable, an ultrasound.
                </li>
                <li>
                  A simple explanation of what may be causing the swelling.
                </li>
                <li>
                  Tests if needed, and a clear plan for the next step.
                </li>
                <li>
                  Time to ask questions and discuss your options.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">Please bring:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous reports, scans and prescriptions.</li>
                <li>Dates of your last periods.</li>
                <li>A list of your medicines.</li>
                <li>
                  Notes about when the swelling appears and what makes it better
                  or worse.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation with Dr. Priyanka Pachauri
              </h2>

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
                        Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
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
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
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
