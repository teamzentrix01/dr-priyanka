import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function InfertilitySpecialistFemaleInfertility() {
  const faqs = [
    {
      q: "What are the most common causes of female infertility?",
      a: "Ovulation problems such as PCOS, blocked tubes, endometriosis, fibroids and age.",
    },
    {
      q: "When should a woman see an infertility specialist?",
      a: "After 12 months of trying, or 6 months if she is 35 or older.",
    },
    {
      q: "What tests are done for female infertility?",
      a: "Ultrasound, AMH and hormone tests, tubal check and sometimes hysteroscopy.",
    },
    {
      q: "Can PCOS be treated so I can conceive?",
      a: "Yes. Lifestyle changes and ovulation induction help many women.",
    },
    {
      q: "Can blocked fallopian tubes be treated?",
      a: "Sometimes by surgery. IVF is advised when the tubes cannot be repaired.",
    },
    {
      q: "Does low AMH mean I cannot get pregnant?",
      a: "No. It shows egg reserve, and treatment options still exist.",
    },
    {
      q: "Do I need IVF straight away?",
      a: "Not always. It depends on your cause, age and test results.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Infertility Specialist for Female Infertility: Causes, Tests and Treatment Options
              </h1>

              <p className="mb-4 text-gray-700">
                Not being able to conceive can feel lonely, especially when
                family and friends keep asking questions. Many women quietly
                blame themselves. But female infertility is a medical condition,
                not a personal failing, and most causes can be identified and
                treated with the right guidance.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what an infertility specialist does for
                women, the most common causes, the tests involved and the
                treatments that can help, from simple medicines to advanced
                options such as laparoscopy and IVF.
              </p>
            </div>

            {/* Section 2 — What Is Female Infertility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Female Infertility?
              </h2>

              <p className="mb-4 text-gray-700">
                Female infertility means difficulty in conceiving or carrying a
                pregnancy because of a problem related to the woman&apos;s
                reproductive health.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Under 35 years: no pregnancy after 12 months of regular, unprotected intercourse</li>
                <li>35 years and above: no pregnancy after 6 months</li>
                <li>Earlier evaluation: if you already know about irregular periods, endometriosis, fibroids or pelvic infection</li>
                <li>Primary infertility: you have never conceived</li>
                <li>Secondary infertility: you conceived before but are struggling now</li>
                <li>Recurrent pregnancy loss: two or more miscarriages also need evaluation</li>
              </ul>

              <p className="text-gray-700">
                Remember that infertility is shared. Male factors contribute to
                about one-third of cases, so both partners should be evaluated.
              </p>
            </div>

            {/* Section 3 — When to See a Specialist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See an Infertility Specialist?
              </h2>

              <p className="mb-4 text-gray-700">Book a consultation if:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You have been trying for 12 months (or 6 months if you are 35 or older)</li>
                <li>Your periods are irregular, very infrequent or absent</li>
                <li>You have very painful periods or chronic pelvic pain</li>
                <li>You have been told you have PCOS, endometriosis, fibroids or an ovarian cyst</li>
                <li>You have had pelvic infection, tuberculosis or abdominal or pelvic surgery</li>
                <li>You have had two or more miscarriages</li>
                <li>You have thyroid problems, diabetes or high prolactin</li>
                <li>You are over 38 and want to conceive</li>
                <li>You want to know your fertility potential before delaying pregnancy</li>
                <li>Earlier treatment, such as IUI, has not worked</li>
              </ul>
            </div>

            {/* Section 4 — What a Specialist Does */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does an Infertility Specialist Do for Women?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Takes a detailed history of your cycles, health, surgeries and lifestyle</li>
                <li>Performs a pelvic examination and ultrasound</li>
                <li>Orders targeted tests instead of unnecessary ones</li>
                <li>Identifies one or more causes</li>
                <li>Treats the underlying condition first, such as thyroid, PCOS or infection</li>
                <li>Recommends the simplest effective treatment</li>
                <li>Performs minimally invasive surgery when a structural problem is present</li>
                <li>Offers IUI and IVF when appropriate</li>
                <li>Gives honest counselling and emotional support</li>
              </ul>
            </div>

            {/* Section 5 — Common Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Female Infertility
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Ovulation Disorders
              </h3>

              <p className="mb-2 text-gray-700">
                Problems with releasing an egg are among the most common causes.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS (Polycystic Ovary Syndrome): the most frequent cause of irregular ovulation. Signs include irregular periods, acne, excess facial hair and weight gain. Often responds well to lifestyle change and ovulation induction.</li>
                <li>Thyroid disorders: both underactive and overactive thyroid disturb cycles</li>
                <li>High prolactin: can stop ovulation</li>
                <li>Premature ovarian insufficiency: the ovaries slow down earlier than expected</li>
                <li>Low ovarian reserve: fewer eggs than expected for age, often shown by a low AMH</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Blocked or Damaged Fallopian Tubes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tubes carry the egg and allow sperm to reach it.</li>
                <li>Blockage can follow pelvic infection, tuberculosis, previous surgery, ectopic pregnancy or endometriosis.</li>
                <li>It is often silent, with no obvious symptoms.</li>
                <li>Diagnosed with HSG (a dye X-ray test), sonosalpingography or laparoscopy.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Endometriosis
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tissue similar to the uterine lining grows outside the uterus.</li>
                <li>Symptoms: painful periods, pain during intercourse, chronic pelvic pain</li>
                <li>It can cause scarring, damage tubes and reduce egg quality.</li>
                <li>Some women have no pain and discover it only during fertility evaluation.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Uterine Fibroids
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Non-cancerous growths in the uterine muscle</li>
                <li>Those that press into the uterine cavity can interfere with implantation.</li>
                <li>Not every fibroid affects fertility, and size and location matter.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Uterine Polyps, Septum and Adhesions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Polyps: small growths in the uterine lining</li>
                <li>Septum: a wall of tissue dividing the uterine cavity</li>
                <li>Adhesions: scar tissue inside the uterus, often after infection or surgery</li>
                <li>These can prevent a pregnancy from implanting or growing.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Ovarian Cysts
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Some cysts are harmless and resolve on their own.</li>
                <li>Endometriomas (chocolate cysts) linked with endometriosis can affect ovarian health.</li>
                <li>Treatment is individualised to protect ovarian tissue.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Age-Related Decline
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Egg numbers and quality fall gradually from the early thirties and faster after 35.</li>
                <li>It is the strongest single factor affecting success.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Cervical Factors
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rarely, the cervix or cervical mucus does not allow sperm to pass.</li>
                <li>Sometimes helped with IUI.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Lifestyle and General Health Factors
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Obesity or very low body weight</li>
                <li>Smoking and tobacco</li>
                <li>Heavy alcohol or caffeine intake</li>
                <li>Chronic stress and poor sleep</li>
                <li>Poorly controlled diabetes</li>
                <li>Certain medicines or previous chemotherapy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Unexplained Infertility
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>About 10–15% of couples have normal test results.</li>
                <li>It does not mean you cannot conceive.</li>
                <li>IUI or IVF often helps.</li>
              </ul>
            </div>

            {/* Section 6 — Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs That May Suggest a Female Fertility Problem
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular, very short, very long or absent periods</li>
                <li>Extremely heavy or painful periods</li>
                <li>Pain during intercourse</li>
                <li>Acne, excess facial or body hair and weight gain</li>
                <li>Unusual discharge or recurrent pelvic infections</li>
                <li>Milky discharge from the breasts</li>
                <li>Hot flushes or very early menopause symptoms</li>
                <li>Repeated miscarriages</li>
              </ul>

              <p className="text-gray-700">
                Some women have no symptoms at all. Testing is the only way to
                know.
              </p>
            </div>

            {/* Section 7 — Tests */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests Used to Evaluate Female Infertility
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Detailed History and Pelvic Examination
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycle pattern, previous pregnancies, surgeries and infections</li>
                <li>Medicines, lifestyle and family history</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Transvaginal Ultrasound
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Shows the size and shape of the uterus</li>
                <li>Detects fibroids, polyps and cysts</li>
                <li>Counts resting follicles in the ovaries (antral follicle count)</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Blood Tests
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>AMH: estimates ovarian reserve</li>
                <li>FSH, LH and estradiol: assess ovarian function</li>
                <li>Prolactin: checks for high levels that block ovulation</li>
                <li>Thyroid profile (TSH): detects thyroid problems</li>
                <li>Blood sugar and insulin markers: especially in PCOS</li>
                <li>Vitamin D and iron: often low and worth correcting</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Tubal Assessment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>HSG: dye X-ray test of the uterus and tubes</li>
                <li>Sonosalpingography: an ultrasound-based alternative</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Hysteroscopy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A thin camera views the inside of the uterus.</li>
                <li>Detects and treats polyps, septum and adhesions in the same sitting where appropriate.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Diagnostic Laparoscopy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Keyhole examination of the pelvis</li>
                <li>Useful when endometriosis, adhesions or tubal disease is suspected</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Male Partner Evaluation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Semen analysis should be done early to avoid delay.</li>
              </ul>

              <p className="text-gray-700">
                Not every woman needs every test. A good specialist selects what
                is relevant to you.
              </p>
            </div>

            {/* Section 8 — Treatment Options */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Female Infertility
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause, your age and how long you have
                been trying.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Lifestyle Changes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reach and keep a healthy weight</li>
                <li>Eat a balanced diet with vegetables, fruit, pulses, nuts and whole grains</li>
                <li>Exercise moderately and regularly</li>
                <li>Quit smoking and limit alcohol and caffeine</li>
                <li>Sleep 7–8 hours</li>
                <li>Reduce stress through yoga, walking or meditation</li>
                <li>Take folic acid before and during early pregnancy</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Why it matters: in women with PCOS, even modest weight loss can
                bring back regular ovulation.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Treating Underlying Medical Conditions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid correction</li>
                <li>Prolactin-lowering treatment</li>
                <li>Blood sugar control</li>
                <li>Treating infections</li>
                <li>Correcting vitamin and iron deficiency</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Ovulation Induction
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What it is: medicines that help the ovaries mature and release an egg</li>
                <li>Forms: tablets first, and injections when needed</li>
                <li>Monitoring: follicle-tracking scans for safety and accurate timing</li>
                <li>Who it suits: PCOS and other ovulation disorders</li>
                <li>Advantage: simple, less invasive and often effective</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Hysteroscopic Treatment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Polypectomy: removal of uterine polyps without cuts</li>
                <li>Septum or adhesion removal: restores a normal uterine cavity</li>
                <li>Benefits: day-care procedure and quick recovery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Laparoscopic (Keyhole) Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Laparoscopic cystectomy: removes ovarian cysts while preserving healthy ovarian tissue</li>
                <li>Laparoscopic myomectomy: removes fibroids while preserving the uterus</li>
                <li>Endometriosis excision: removes disease and adhesions to relieve pain and improve fertility</li>
                <li>Tubal surgery and adhesion removal: in selected cases</li>
              </ul>

              <p className="mb-4 text-gray-700">Benefits of 3D laparoscopy:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Enhanced depth perception for the surgeon</li>
                <li>Small incisions</li>
                <li>Less pain</li>
                <li>Faster recovery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. IUI (Intrauterine Insemination)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Prepared sperm is placed directly into the uterus around ovulation.</li>
                <li>Suitable for: unexplained infertility, mild male factor, cervical factor and some ovulation problems</li>
                <li>Requires: at least one open fallopian tube</li>
                <li>Success reality: commonly about 10–20% per cycle, so several cycles may be advised</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. IVF (In Vitro Fertilisation)
              </h3>

              <p className="mb-2 text-gray-700">How it works:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovarian stimulation with injections</li>
                <li>Regular scans and blood tests</li>
                <li>Egg collection under sedation</li>
                <li>Fertilisation and embryo culture in the laboratory</li>
                <li>Embryo transfer into the uterus</li>
              </ul>

              <p className="mb-2 text-gray-700">Advised for:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blocked tubes</li>
                <li>Endometriosis not responding to other care</li>
                <li>Low ovarian reserve</li>
                <li>Advanced age</li>
                <li>Failed IUI cycles</li>
                <li>Severe male factor (with ICSI)</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Time-lapse embryo monitoring: lets embryos be observed
                continuously without disturbing them, which can help select the
                healthiest embryo.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Frozen Embryo Transfer and Fertility Preservation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Frozen embryo transfer: uses stored embryos in a well-prepared cycle</li>
                <li>Egg or embryo freezing: for women delaying pregnancy or facing medical treatment</li>
                <li>Best results: freezing at a younger age</li>
              </ul>
            </div>

            {/* Section 9 — Quick Guide */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Quick Guide: Which Treatment for Which Cause?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS or irregular cycles: lifestyle correction, then ovulation induction, then IUI if needed</li>
                <li>Thyroid or prolactin problem: treat the condition first</li>
                <li>Polyp, septum or adhesions: hysteroscopy</li>
                <li>Fibroids affecting the cavity: hysteroscopic or laparoscopic removal</li>
                <li>Ovarian cyst or endometriosis: laparoscopic surgery, then fertility treatment as advised</li>
                <li>Blocked tubes: IVF, or tubal surgery in selected cases</li>
                <li>Low ovarian reserve: earlier and more intensive treatment, often IVF</li>
                <li>Unexplained infertility: IUI first, then IVF</li>
                <li>Age 38 or above: faster progression to IVF is often advised</li>
              </ul>
            </div>

            {/* Section 10 — What Influences Success */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Influences Your Chances of Success
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Age: the strongest factor</li>
                <li>Ovarian reserve: quantity and quality of eggs</li>
                <li>Cause and duration of infertility</li>
                <li>Condition of the uterus and tubes</li>
                <li>Male partner&apos;s sperm quality</li>
                <li>Lifestyle and general health</li>
                <li>Choosing the right treatment at the right time</li>
                <li>Quality of the clinic and laboratory</li>
              </ul>

              <p className="text-gray-700">
                No ethical specialist can guarantee a pregnancy. Be careful with
                any clinic that does.
              </p>
            </div>

            {/* Section 11 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Female Infertility
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: infertility is always the woman&apos;s fault. Fact: male factors contribute to about one-third of cases.</li>
                <li>Myth: PCOS means you can never conceive. Fact: many women with PCOS conceive with the right treatment.</li>
                <li>Myth: a low AMH means no chance of pregnancy. Fact: AMH shows quantity, not a guarantee of outcome, and options exist.</li>
                <li>Myth: fibroids always cause infertility. Fact: only some, depending on size and position.</li>
                <li>Myth: stress alone is the main cause. Fact: stress contributes, but it is rarely the only reason.</li>
                <li>Myth: you must wait several years before seeing a doctor. Fact: early evaluation improves your options.</li>
              </ul>
            </div>

            {/* Section 12 — Natural Habits */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Natural Habits That Support Female Fertility
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain a healthy weight.</li>
                <li>Eat fresh, home-cooked, balanced meals.</li>
                <li>Start folic acid at least three months before trying.</li>
                <li>Exercise moderately.</li>
                <li>Avoid tobacco and limit alcohol.</li>
                <li>Track your cycle and ovulation.</li>
                <li>Get thyroid, sugar and vitamin D checked.</li>
                <li>Keep stress under control.</li>
                <li>Treat infections promptly.</li>
                <li>Avoid unproven remedies and self-medication.</li>
              </ul>
            </div>

            {/* Section 13 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Caring for Your Emotional Wellbeing
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sadness, anxiety and frustration are normal.</li>
                <li>Share the journey openly with your partner.</li>
                <li>Avoid comparing yourself with others.</li>
                <li>Take breaks between treatment cycles when you need them.</li>
                <li>Seek counselling if stress feels heavy.</li>
                <li>Celebrate every small step forward.</li>
              </ul>
            </div>

            {/* Section 14 — Why Choose Dr Priyanka */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Choose Dr. Priyanka Gynaec in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec brings fertility care, gynaecological
                surgery and maternity services together under the philosophy
                &quot;Her Health First&quot;.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF services: personalised plans for every couple</li>
                <li>3D laparoscopic surgery: cystectomy, myomectomy and endometriosis surgery that aims to preserve fertility</li>
                <li>Hysteroscopy services: diagnostic hysteroscopy and polyp removal</li>
                <li>GERI time-lapse imaging incubator: advanced embryo monitoring</li>
                <li>3D/4D ultrasound: detailed imaging during fertility evaluation and pregnancy</li>
                <li>Complete journey support: from the first fertility test to antenatal care, normal delivery and newborn care</li>
                <li>Unhurried, empathetic consultations: you are listened to before any plan is made</li>
                <li>Couple-focused approach: the male partner is evaluated too, with AI-powered semen analysis and DNA integrity testing available</li>
              </ul>
            </div>

            {/* Section 15 — What to Bring */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Bring to Your First Visit
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous reports, scans and prescriptions</li>
                <li>HSG, hormone and semen analysis reports, if available</li>
                <li>Your menstrual cycle dates</li>
                <li>A list of current medicines</li>
                <li>Details of past surgeries or pregnancies</li>
                <li>Your partner, if possible</li>
                <li>A list of your questions</li>
              </ul>
            </div>

            {/* Section 16 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Fertility Consultation Today
              </h2>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 17 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}