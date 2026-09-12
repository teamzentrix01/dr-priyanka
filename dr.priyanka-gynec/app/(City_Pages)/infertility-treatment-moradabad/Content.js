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
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function InfertilityTreatmentMoradabad() {
  const faqs = [
    {
      q: "What is the most common cause of infertility?",
      a: "Infertility can have many causes. Ovulation disorders, tubal problems, endometriosis, uterine conditions, age-related fertility changes, and male-factor infertility are among the possible causes. Sometimes no specific cause is identified.",
    },
    {
      q: "When should I see a doctor for infertility?",
      a: "Generally, evaluation is recommended after 12 months of trying to conceive if the woman is under 35. Women aged 35 or older are generally advised to seek evaluation after about 6 months of trying. Earlier evaluation may be appropriate when there are irregular periods, known reproductive conditions, or other concerns.",
    },
    {
      q: "Can PCOS cause infertility?",
      a: "PCOS can cause irregular or absent ovulation, which may make conception more difficult. Many women with PCOS can become pregnant with appropriate management.",
    },
    {
      q: "Can infertility affect men?",
      a: "Yes. Male factors can contribute to infertility. Semen analysis is commonly used to evaluate sperm concentration, movement, and morphology.",
    },
    {
      q: "What tests are done for female infertility?",
      a: "Depending on the situation, testing may include ultrasound, hormonal tests, ovarian-reserve assessment, HSG, hysteroscopy, or laparoscopy.",
    },
    {
      q: "What is the difference between IUI and IVF?",
      a: "IUI involves placing prepared sperm directly into the uterus around ovulation. IVF involves collecting eggs, fertilizing them in a laboratory, and considering embryo transfer into the uterus.",
    },
    {
      q: "Is IVF required for every infertility case?",
      a: "No. Some couples may conceive with medical treatment, ovulation induction, timed intercourse, IUI, or treatment of an underlying condition. IVF is considered when medically appropriate.",
    },
    {
      q: "Can blocked fallopian tubes be treated?",
      a: "Treatment depends on the location and severity of the blockage and the overall fertility situation. Your doctor can discuss whether surgery or assisted reproductive treatment may be appropriate.",
    },
    {
      q: "Can endometriosis affect fertility?",
      a: "Yes. Endometriosis can be associated with difficulty conceiving. Treatment depends on symptoms, severity, age, fertility goals, and previous treatment.",
    },
    {
      q: "Can fibroids affect pregnancy?",
      a: "Some fibroids can affect fertility or pregnancy depending on their size and location. Many fibroids do not cause fertility problems. Evaluation helps determine whether treatment is needed.",
    },
    {
      q: "Does age affect fertility?",
      a: "Yes. Female fertility generally declines with age, particularly because egg quantity and quality decrease over time. Age is therefore an important consideration when planning fertility evaluation.",
    },
    {
      q: "How can I book an infertility consultation in Moradabad?",
      a: "You can contact Dr. Priyanka Gynaec by phone or WhatsApp using the details provided above to schedule a consultation.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 order-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility Treatment in Moradabad – Fertility Care for Couples
              </h1>

              <p className="text-gray-700 mb-4">
                Trying to conceive without success can be frustrating and emotionally difficult for couples. Infertility can have many different causes, and sometimes more than one factor contributes to difficulty in achieving pregnancy. The good news is that evaluation can help identify possible causes and determine which treatment options may be appropriate.
              </p>

              <p className="text-gray-700">
                If you are searching for infertility treatment in Moradabad, Dr. Priyanka Pachauri provides gynaecological and fertility care for women experiencing difficulties with conception. Fertility evaluation may include assessment of ovulation, menstrual health, ovarian function, fallopian tubes, uterus, and other factors. Because fertility involves both partners, evaluation of the male partner may also be recommended.
              </p>
            </div>

            {/* Section 2 — What Is Infertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Infertility?
              </h2>

              <p className="text-gray-700 mb-4">
                Infertility generally refers to difficulty achieving pregnancy after regular unprotected intercourse for a certain period of time.
              </p>

              <p className="text-gray-700 mb-4">
                Infertility can affect women, men, or both partners. In some couples, no specific cause is identified even after evaluation.
              </p>

              <p className="text-gray-700 mb-4">
                Possible contributing factors include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Ovulation problems</li>
                <li>Polycystic ovary syndrome (PCOS)</li>
                <li>Blocked or damaged fallopian tubes</li>
                <li>Endometriosis</li>
                <li>Uterine fibroids or polyps</li>
                <li>Reduced ovarian reserve</li>
                <li>Age-related fertility changes</li>
                <li>Sperm count or motility problems</li>
                <li>Previous pelvic infections or surgeries</li>
                <li>Certain hormonal conditions</li>
                <li>Unexplained infertility</li>
              </ul>

              <p className="text-gray-700">
                Finding the possible cause is an important first step before choosing treatment.
              </p>
            </div>

            {/* Section 3 — When Should You See a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See a Doctor for Infertility?
              </h2>

              <p className="text-gray-700 mb-4">
                The appropriate time to seek evaluation depends on the woman's age and individual circumstances.
              </p>

              <p className="text-gray-700 mb-4">
                A fertility evaluation may be recommended when:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Pregnancy has not occurred after 12 months of regular unprotected intercourse</li>
                <li>The woman is 35 or older and pregnancy has not occurred after around 6 months of trying</li>
                <li>Periods are very irregular or absent</li>
                <li>There is a known history of PCOS or endometriosis</li>
                <li>There has been previous pelvic surgery</li>
                <li>There is a history of pelvic infection</li>
                <li>A male partner has known sperm or reproductive problems</li>
                <li>There have been recurrent pregnancy losses</li>
                <li>There is another medical condition that may affect fertility</li>
              </ul>

              <p className="text-gray-700">
                Women with irregular periods or known fertility-related conditions do not necessarily need to wait a full year before seeking medical advice.
              </p>
            </div>

            {/* Section 4 — Common Causes of Female Infertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Female Infertility
              </h2>

              <p className="text-gray-700 mb-4">
                Female infertility can have several causes. A proper evaluation is necessary because symptoms alone cannot determine the exact reason for difficulty conceiving.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    PCOS and Ovulation Problems
                  </h3>
                  <p className="text-gray-700 mb-2">
                    PCOS is a common hormonal condition that can interfere with regular ovulation. Women with PCOS may experience:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Irregular periods</li>
                    <li>Infrequent ovulation</li>
                    <li>Acne</li>
                    <li>Excess facial or body hair</li>
                    <li>Weight-related concerns</li>
                  </ul>
                  <p className="text-gray-700">
                    Not every woman with PCOS has infertility, but irregular or absent ovulation can make conception more difficult. Treatment focuses on the individual woman's symptoms, fertility goals, and medical needs.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Blocked Fallopian Tubes
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Fallopian tubes provide the pathway through which sperm and egg meet. Blocked or damaged tubes may occur due to:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Previous pelvic infections</li>
                    <li>Endometriosis</li>
                    <li>Previous pelvic surgery</li>
                    <li>Certain other pelvic conditions</li>
                  </ul>
                  <p className="text-gray-700">
                    Tests such as hysterosalpingography (HSG) may be recommended to assess whether the fallopian tubes are open.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Endometriosis
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Endometriosis occurs when tissue similar to the lining of the uterus grows outside the uterus. It may be associated with:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Painful periods</li>
                    <li>Chronic pelvic pain</li>
                    <li>Pain during intercourse</li>
                    <li>Difficulty conceiving</li>
                  </ul>
                  <p className="text-gray-700">
                    Depending on the patient's condition, medical treatment, fertility treatment, or surgery may be considered.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Fibroids and Uterine Polyps
                  </h3>
                  <p className="text-gray-700">
                    Fibroids are non-cancerous growths in the uterus. Some fibroids can affect fertility depending on their size and location. Uterine polyps can also affect the uterine cavity and may be evaluated when fertility problems are present. Hysteroscopy or other investigations may be recommended when an abnormality inside the uterus is suspected.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Age-Related Fertility Changes
                  </h3>
                  <p className="text-gray-700">
                    Female fertility changes with age, particularly because both the number and quality of eggs decline over time. Age is therefore an important factor when planning fertility evaluation and treatment. A fertility consultation can help couples understand how age may affect their individual treatment options.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 — Male Infertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Male Infertility Can Also Affect Conception
              </h2>

              <p className="text-gray-700 mb-4">
                Infertility is not only a female health issue.
              </p>

              <p className="text-gray-700 mb-4">
                Male factors can contribute to difficulty conceiving and may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Low sperm concentration</li>
                <li>Reduced sperm motility</li>
                <li>Abnormal sperm morphology</li>
                <li>Varicocele</li>
                <li>Hormonal problems</li>
                <li>Certain infections</li>
                <li>Previous testicular problems or surgery</li>
                <li>Lifestyle and environmental factors</li>
              </ul>

              <p className="text-gray-700">
                A semen analysis is commonly used as an initial investigation for male fertility. Both partners may need evaluation so that treatment focuses on the actual cause rather than assuming the problem is only with the woman.
              </p>
            </div>

            {/* Section 6 — Infertility Diagnosis in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility Diagnosis in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The first fertility consultation usually begins with a detailed medical and reproductive history.
              </p>

              <p className="text-gray-700 mb-4">
                Your doctor may discuss:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Menstrual cycle pattern</li>
                <li>Previous pregnancies</li>
                <li>Previous miscarriages</li>
                <li>Duration of trying to conceive</li>
                <li>Previous fertility treatment</li>
                <li>Medical conditions</li>
                <li>Previous surgeries</li>
                <li>Current medications</li>
                <li>Sexual and reproductive history</li>
              </ul>

              <p className="text-gray-700">
                Based on the consultation, appropriate investigations may be recommended.
              </p>
            </div>

            {/* Section 7 — Fertility Tests for Women */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility Tests for Women
              </h2>

              <p className="text-gray-700 mb-4">
                Depending on the individual case, evaluation may include:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ultrasound
                  </h3>
                  <p className="text-gray-700">
                    Ultrasound can help assess the uterus, ovaries, endometrium, follicles, and other pelvic structures.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hormonal Tests
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Blood tests may be recommended to evaluate certain hormones related to ovulation and reproductive health. These can include tests such as:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>AMH</li>
                    <li>FSH</li>
                    <li>LH</li>
                    <li>Thyroid-related tests</li>
                    <li>Prolactin</li>
                  </ul>
                  <p className="text-gray-700">
                    The specific tests required vary from patient to patient.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    HSG
                  </h3>
                  <p className="text-gray-700">
                    Hysterosalpingography, commonly called HSG, is an imaging test used to assess the uterine cavity and whether the fallopian tubes are open.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hysteroscopy
                  </h3>
                  <p className="text-gray-700">
                    Hysteroscopy allows a doctor to examine the inside of the uterus using a thin camera. It may be recommended when conditions such as polyps, fibroids affecting the cavity, adhesions, or other abnormalities are suspected.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Laparoscopy
                  </h3>
                  <p className="text-gray-700">
                    In selected patients, diagnostic or operative laparoscopy may be considered to evaluate conditions such as endometriosis, pelvic adhesions, or other pelvic abnormalities.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 — Fertility Tests for Men */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility Tests for Men
              </h2>

              <p className="text-gray-700 mb-4">
                A semen analysis is one of the most common initial investigations for male infertility.
              </p>

              <p className="text-gray-700 mb-4">
                It may evaluate:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Sperm concentration</li>
                <li>Sperm movement</li>
                <li>Sperm morphology</li>
                <li>Semen volume</li>
                <li>Other semen characteristics</li>
              </ul>

              <p className="text-gray-700">
                Additional investigations may be recommended depending on the results and medical history.
              </p>
            </div>

            {/* Section 9 — Infertility Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility Treatment Options in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                There is no single infertility treatment that works for every couple.
              </p>

              <p className="text-gray-700 mb-4">
                Treatment is selected according to the cause of infertility, age, duration of trying to conceive, previous treatment, test results, and reproductive goals. Treatment may include medical management, fertility procedures, surgery, or assisted reproductive techniques.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Ovulation Induction
                  </h3>
                  <p className="text-gray-700">
                    Women who do not ovulate regularly may be prescribed medicines to help stimulate ovulation. Ovulation-induction treatment requires appropriate medical supervision because medication selection and monitoring depend on the individual patient.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Timed Intercourse
                  </h3>
                  <p className="text-gray-700">
                    When ovulation is occurring but timing is difficult to determine, your doctor may guide you regarding the fertile period. Ovulation tracking may involve menstrual-cycle monitoring, ultrasound, or other appropriate methods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. IUI Treatment
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Intrauterine insemination (IUI) is a fertility treatment in which prepared sperm is placed directly inside the uterus around the time of ovulation. IUI may be considered in selected cases such as:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Some cases of unexplained infertility</li>
                    <li>Certain mild male-factor infertility cases</li>
                    <li>Some ovulation-related fertility problems</li>
                    <li>Situations involving donor sperm</li>
                  </ul>
                  <p className="text-gray-700">
                    Whether IUI is suitable depends on the couple's fertility evaluation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. IVF Treatment
                  </h3>
                  <p className="text-gray-700 mb-2">
                    In vitro fertilization (IVF) is an assisted reproductive treatment in which eggs are collected from the ovaries and fertilized with sperm in a laboratory. The resulting embryos may then be considered for transfer into the uterus.
                  </p>
                  <p className="text-gray-700 mb-2">
                    IVF may be recommended for certain situations, including:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Blocked fallopian tubes</li>
                    <li>Some cases of severe male-factor infertility</li>
                    <li>Certain cases of endometriosis</li>
                    <li>Reduced ovarian reserve</li>
                    <li>Some cases of unexplained infertility</li>
                    <li>Previous unsuccessful fertility treatments</li>
                    <li>Other conditions where IVF may provide an appropriate treatment option</li>
                  </ul>
                  <p className="text-gray-700">
                    IVF is a multi-step process and requires individualized medical planning.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Laparoscopic Treatment for Fertility Problems
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Certain structural pelvic conditions may be treated surgically when surgery is medically appropriate. Depending on the diagnosis, laparoscopic surgery may be considered for conditions such as:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Endometriosis</li>
                    <li>Selected ovarian cysts</li>
                    <li>Certain fibroids</li>
                    <li>Pelvic adhesions</li>
                    <li>Other pelvic abnormalities</li>
                  </ul>
                  <p className="text-gray-700">
                    The purpose of surgery is to address the underlying condition while considering the patient's reproductive goals.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Hysteroscopy for Uterine Conditions
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Hysteroscopy can be used to evaluate and treat selected abnormalities inside the uterine cavity. It may be considered for conditions such as:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Endometrial polyps</li>
                    <li>Certain submucosal fibroids</li>
                    <li>Intrauterine adhesions</li>
                    <li>Other abnormalities of the uterine cavity</li>
                  </ul>
                  <p className="text-gray-700">
                    Treatment is determined after appropriate evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 — Fertility Treatment and Age */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility Treatment and Age
              </h2>

              <p className="text-gray-700">
                Age is an important factor in fertility treatment, particularly for women. As a woman gets older, ovarian reserve and egg quality generally decline. This can affect the chances of natural conception and may also influence fertility treatment outcomes. For this reason, couples should not unnecessarily delay fertility evaluation when there are concerns about conception. A consultation can help you understand which tests and treatment options may be appropriate for your age and circumstances.
              </p>
            </div>

            {/* Section 11 — Can Infertility Be Treated Without IVF */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Can Infertility Be Treated Without IVF?
              </h2>

              <p className="text-gray-700 mb-4">
                Yes, IVF is not required for every couple.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the cause, treatment may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Lifestyle changes</li>
                <li>Treatment of hormonal conditions</li>
                <li>Ovulation induction</li>
                <li>Timed intercourse</li>
                <li>IUI</li>
                <li>Surgery</li>
                <li>IVF or other assisted reproductive options</li>
              </ul>

              <p className="text-gray-700">
                The simplest appropriate treatment is generally considered based on the couple's evaluation.
              </p>
            </div>

            {/* Section 12 — Fertility-Preserving Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility-Preserving Treatment
              </h2>

              <p className="text-gray-700">
                For some women, maintaining future fertility is an important part of treatment planning. When treating conditions such as fibroids, ovarian cysts, or endometriosis, the treatment approach may be selected with reproductive goals in mind. However, fertility preservation is not possible in every situation, and surgery or treatment itself can sometimes affect fertility. Discuss your future pregnancy plans with your gynaecologist before undergoing treatment.
              </p>
            </div>

            {/* Section 13 — Lifestyle and Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle and Fertility
              </h2>

              <p className="text-gray-700 mb-4">
                Medical treatment is important when an underlying fertility problem is present, but healthy lifestyle habits can also support general reproductive health.
              </p>

              <p className="text-gray-700 mb-4">
                Couples may benefit from:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Maintaining a healthy weight</li>
                <li>Eating a balanced diet</li>
                <li>Staying physically active</li>
                <li>Avoiding smoking</li>
                <li>Limiting alcohol</li>
                <li>Managing stress</li>
                <li>Getting adequate sleep</li>
                <li>Managing existing medical conditions</li>
                <li>Taking medicines and supplements only as advised by a healthcare professional</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Lifestyle changes cannot treat every cause of infertility, but they can be an important part of overall health.
              </p>
            </div>

            {/* Section 14 — What to Bring to Your Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Bring to Your Infertility Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                If you are visiting a fertility doctor in Moradabad, bringing previous medical records can make the consultation more useful.
              </p>

              <p className="text-gray-700 mb-4">
                Consider bringing:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Previous ultrasound reports</li>
                <li>HSG reports</li>
                <li>Blood test results</li>
                <li>Semen analysis reports</li>
                <li>Previous IVF or IUI records</li>
                <li>Previous surgery reports</li>
                <li>Medication details</li>
                <li>Menstrual-cycle information</li>
                <li>Previous pregnancy records</li>
              </ul>

              <p className="text-gray-700">
                Your doctor can then determine which additional evaluation, if any, may be required.
              </p>
            </div>

            {/* Section 15 — Why Choose Dr. Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka for Infertility Treatment in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides gynaecological and fertility-related consultation in Moradabad.
              </p>

              <p className="text-gray-700 mb-4">
                During a fertility consultation, the focus is on understanding the individual couple's circumstances before selecting treatment.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the diagnosis, fertility care may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Evaluation of menstrual and ovulation problems</li>
                <li>PCOS-related fertility management</li>
                <li>Assessment of uterine and ovarian conditions</li>
                <li>Fertility evaluation</li>
                <li>Infertility counselling</li>
                <li>IUI-related fertility care where appropriate</li>
                <li>IVF counselling and treatment planning</li>
                <li>Hysteroscopy</li>
                <li>Laparoscopic treatment for selected gynaecological conditions</li>
                <li>Pregnancy care after conception</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The appropriate treatment is decided according to medical evaluation rather than using a single approach for every couple.
              </p>
            </div>

            {/* Section 16 — Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility Treatment in Moradabad – Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                If you have been trying to conceive without success, an infertility consultation can help identify possible causes and explain your treatment options.
              </p>

              <p className="text-gray-700 mb-4">
                You do not always need to begin with IVF. Depending on the diagnosis, treatment may start with simpler medical or fertility approaches before moving to assisted reproductive techniques when required.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, Near Old Roadways, Gandhi Nagar,
                        Moradabad, Uttar Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:9079765578" className="hover:underline">
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a href="tel:8979670705" className="hover:underline">
                          +91 8979670705 (WhatsApp)
                        </a>
                      </div>

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Link href="/contact">
                    <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                      <Phone className="inline mr-2" size={18} />
                      Contact Us
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                      Explore Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 17 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions About Infertility Treatment in Moradabad
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}