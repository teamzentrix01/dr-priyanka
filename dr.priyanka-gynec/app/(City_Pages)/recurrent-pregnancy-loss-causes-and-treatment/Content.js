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

export default function RecurrentPregnancyLossMoradabad() {
  const faqs = [
    {
      q: "What is recurrent pregnancy loss?",
      a: "Losing two or more pregnancies, depending on the guideline used.",
    },
    {
      q: "What is the most common cause?",
      a: "Chromosomal abnormalities in the embryo, which are usually random.",
    },
    {
      q: "Can recurrent miscarriage be treated?",
      a: "Yes, when a cause such as APS, a uterine problem or thyroid disease is found.",
    },
    {
      q: "Is it my fault?",
      a: "No. Everyday activities, stress or exercise do not cause recurrent loss.",
    },
    {
      q: "Which tests are done?",
      a: "Ultrasound, blood tests, genetic tests and sometimes hysteroscopy.",
    },
    {
      q: "Can I conceive again after recurrent loss?",
      a: "Most couples go on to have a healthy pregnancy, even when no cause is found.",
    },
    {
      q: "When should I get evaluated?",
      a: "After two losses, or earlier if you are over 35 or have a medical condition.",
    },
    {
      q: "Is bed rest helpful?",
      a: "Routine bed rest has not been shown to prevent miscarriage.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 pt-0 pb-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Recurrent Pregnancy Loss: Causes, Tests and Treatment Options
              </h1>

              <p className="mb-4 text-gray-700">
                Losing a pregnancy is painful. Losing more than one can feel
                overwhelming, and many women quietly blame themselves. It is
                important to say this clearly first: recurrent pregnancy loss is
                rarely caused by anything you did. It is not caused by stress, a
                fall, a missed meal, exercise or intimacy.
              </p>

              <p className="text-gray-700">
                The encouraging part is that after proper evaluation, many
                couples find a treatable cause, and even when no cause is found,
                a majority still go on to have a healthy baby. This guide
                explains the causes and treatment of recurrent pregnancy loss,
                and how Dr. Priyanka Pachauri at Dr. Priyanka Gynaec, Moradabad
                can support you.
              </p>
            </div>

            {/* Section 2 — What Is RPL */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Recurrent Pregnancy Loss?
              </h2>

              <p className="mb-4 text-gray-700">
                Recurrent pregnancy loss (RPL), also called recurrent
                miscarriage, means losing more than one pregnancy before the
                baby can survive outside the womb.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How the Definition Is Used
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Many international guidelines define it as two or more pregnancy losses</li>
                <li>Some guidelines use three or more consecutive losses</li>
                <li>Losses do not always have to be back to back</li>
                <li>Evaluation is often advised after two losses, especially if you are older or have symptoms</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How Common Is It?
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A single miscarriage is common, affecting a notable share of recognised pregnancies</li>
                <li>Two or more losses are much less common</li>
                <li>Three or more are uncommon, which is why a cause is worth looking for</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Key Point
              </h3>

              <p className="text-gray-700">
                Do not wait for a third loss if you are worried. Early
                evaluation is reasonable and often helpful.
              </p>
            </div>

            {/* Section 3 — Why Miscarriages Happen */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Miscarriages Happen: A Quick Overview
              </h2>

              <p className="mb-4 text-gray-700">
                Most single miscarriages in early pregnancy happen because the
                embryo has a chromosomal abnormality. This is usually a random
                event, not a sign of a problem with the mother.
              </p>

              <p className="mb-4 text-gray-700">
                With repeated losses, doctors look for other contributors:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Parental genetic factors</li>
                <li>Uterine shape or structure</li>
                <li>Immune and clotting conditions</li>
                <li>Hormonal or metabolic disorders</li>
                <li>Infections</li>
                <li>Lifestyle and environmental factors</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Even After Full Testing
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>In roughly half of couples, no single cause is identified</li>
                <li>This is called unexplained recurrent pregnancy loss</li>
                <li>It does not mean nothing can be done, as supportive care improves confidence and outcomes</li>
              </ul>
            </div>

            {/* Section 4 — Main Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Causes of Recurrent Pregnancy Loss
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Chromosomal and Genetic Causes
              </h3>

              <p className="mb-2 text-gray-700">What it means:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Most early losses involve an embryo with an abnormal number of chromosomes</li>
                <li>In a small share of couples, one partner carries a balanced chromosomal rearrangement (such as a translocation) that increases the risk of an abnormal embryo</li>
              </ul>

              <p className="mb-2 text-gray-700">How it is evaluated:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Karyotype (chromosome) testing of both partners in selected cases</li>
                <li>Genetic counselling</li>
                <li>Testing of pregnancy tissue after a loss, when available</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Uterine and Structural Problems
              </h3>

              <p className="mb-2 text-gray-700">Common structural causes:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uterine septum (a wall of tissue dividing the cavity)</li>
                <li>Submucosal fibroids that distort the cavity</li>
                <li>Endometrial polyps</li>
                <li>Intrauterine adhesions (scar tissue)</li>
                <li>Other congenital uterine shape differences</li>
              </ul>

              <p className="mb-2 text-gray-700">How it is evaluated:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pelvic ultrasound, ideally 3D</li>
                <li>Hysteroscopy to look inside the uterus</li>
                <li>Saline sonography or MRI in selected cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Antiphospholipid Syndrome (APS)
              </h3>

              <p className="mb-2 text-gray-700">What it means:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>An autoimmune condition in which the body makes antibodies that increase clotting risk</li>
                <li>It is one of the most important treatable causes of recurrent loss</li>
              </ul>

              <p className="mb-2 text-gray-700">How it is diagnosed:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests for lupus anticoagulant, anticardiolipin and beta-2 glycoprotein antibodies</li>
                <li>Abnormal results must be confirmed by repeating the test at least 12 weeks later</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Hormonal and Metabolic Causes
              </h3>

              <p className="mb-2 text-gray-700">Conditions that may contribute:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uncontrolled diabetes</li>
                <li>Thyroid disease, especially underactive thyroid or thyroid antibodies</li>
                <li>Raised prolactin</li>
                <li>PCOS and related insulin resistance</li>
              </ul>

              <p className="mb-2 text-gray-700">How it is evaluated:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood sugar and HbA1c</li>
                <li>Thyroid profile</li>
                <li>Prolactin</li>
                <li>Hormone assessment based on your history</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Cervical Weakness (Cervical Insufficiency)
              </h3>

              <p className="mb-2 text-gray-700">What it means:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The cervix opens too early, usually causing painless losses in the second trimester</li>
              </ul>

              <p className="mb-2 text-gray-700">How it is evaluated:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Review of the history of late losses</li>
                <li>Cervical length measurement by ultrasound</li>
                <li>Examination in selected cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Inherited Clotting Disorders (Thrombophilias)
              </h3>

              <p className="mb-2 text-gray-700">What to know:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Some inherited clotting conditions have been linked to pregnancy loss, but the evidence is mixed</li>
                <li>Testing is not routine for everyone and is usually considered based on personal and family history</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Infections
              </h3>

              <p className="mb-2 text-gray-700">What to know:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe or untreated infections can cause a single loss</li>
                <li>Chronic infection of the uterine lining (chronic endometritis) is being studied in recurrent loss</li>
                <li>Routine screening for many infections is not advised unless symptoms or risk factors suggest it</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Lifestyle and Environmental Factors
              </h3>

              <p className="mb-2 text-gray-700">Factors that may raise risk:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Smoking and tobacco use</li>
                <li>Heavy alcohol use</li>
                <li>High caffeine intake</li>
                <li>Obesity or very low body weight</li>
                <li>Uncontrolled chronic illness</li>
                <li>Advancing maternal age, which raises the chance of chromosomal errors</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Male Factor
              </h3>

              <p className="mb-2 text-gray-700">What to know:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sperm DNA damage has been linked to miscarriage in some studies</li>
                <li>Evaluation of the male partner may be offered in selected cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Unexplained Recurrent Pregnancy Loss
              </h3>

              <p className="mb-2 text-gray-700">What it means:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>All standard tests are normal</li>
                <li>This is common and not a reason for despair</li>
              </ul>

              <p className="mb-2 text-gray-700">Why hope remains:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Many couples with unexplained loss go on to have a healthy pregnancy with supportive, early care</li>
              </ul>
            </div>

            {/* Section 5 — When to See Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Doctor?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Consult a Gynaecologist If
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You have had two or more pregnancy losses</li>
                <li>You have had a loss in the second trimester</li>
                <li>You are over 35 and have had a loss</li>
                <li>You have a known uterine, thyroid, clotting or autoimmune condition</li>
                <li>You are planning pregnancy after a loss and want a plan</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Seek Urgent Care During Pregnancy If
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You have heavy bleeding</li>
                <li>You have severe abdominal or shoulder-tip pain</li>
                <li>You feel faint or dizzy</li>
                <li>You pass tissue</li>
              </ul>
            </div>

            {/* Section 6 — Evaluation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Recurrent Pregnancy Loss Is Evaluated
              </h2>

              <p className="mb-4 text-gray-700">
                A full evaluation is usually done between pregnancies, though
                some tests can start earlier.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed History
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Number, timing and gestational age of each loss</li>
                <li>Whether a heartbeat was seen</li>
                <li>Menstrual and fertility history</li>
                <li>Medical conditions and medicines</li>
                <li>Family history of miscarriage, clotting or genetic disease</li>
                <li>Smoking, alcohol and caffeine use</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Examination and Imaging
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>General and pelvic examination</li>
                <li>Transvaginal ultrasound, preferably 3D</li>
                <li>Assessment of the uterine cavity and cervix</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Blood Tests
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antiphospholipid antibodies</li>
                <li>Thyroid profile and thyroid antibodies</li>
                <li>Blood sugar and HbA1c</li>
                <li>Prolactin</li>
                <li>Other tests based on your history</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Genetic Testing
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Parental karyotype in selected couples</li>
                <li>Testing of products of conception when possible</li>
                <li>Genetic counselling when needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Hysteroscopy When Indicated
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Allows direct view of the uterine cavity</li>
                <li>Can detect and sometimes treat polyps, adhesions or a septum in the same sitting</li>
              </ul>
            </div>

            {/* Section 7 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Recurrent Pregnancy Loss
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause found. Not every couple needs
                every option.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Treating Uterine Problems
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hysteroscopic polypectomy to remove polyps</li>
                <li>Hysteroscopic resection of a uterine septum</li>
                <li>Adhesiolysis to remove scar tissue</li>
                <li>Myomectomy for fibroids that distort the cavity, sometimes done laparoscopically</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Treating Antiphospholipid Syndrome
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Low-dose aspirin</li>
                <li>Low-molecular-weight heparin injections during pregnancy</li>
                <li>Close monitoring of mother and baby</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Treating Hormonal and Metabolic Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid medicine adjusted to target levels</li>
                <li>Strict blood sugar control</li>
                <li>Treatment of raised prolactin</li>
                <li>Lifestyle and weight management for PCOS and insulin resistance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Supporting Cervical Weakness
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cervical cerclage (a stitch) in selected women, usually based on history or ultrasound findings</li>
                <li>Close cervical length monitoring</li>
                <li>Progesterone in selected cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Progesterone Support
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Evidence suggests progesterone may help some women with a history of recurrent miscarriage who have bleeding in early pregnancy</li>
                <li>Your doctor will decide whether it is appropriate for you</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Genetic Options
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Genetic counselling for carriers of chromosomal rearrangements</li>
                <li>Assisted reproduction with embryo testing is an option in selected couples, but it is not proven to benefit everyone, so discuss carefully with your doctor</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Treatments With Limited Evidence
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Some immune therapies and routine anticoagulants for unexplained loss have not been shown to help consistently</li>
                <li>Be cautious about expensive or unproven treatments, and ask your doctor to explain the evidence</li>
              </ul>
            </div>

            {/* Section 8 — Supportive Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Care in the Next Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Even when no cause is found, structured early care can make a
                difference.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What This May Involve
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early booking and an early ultrasound</li>
                <li>Regular reassurance scans, as advised</li>
                <li>Folic acid and other supplements</li>
                <li>Prompt treatment of any detected condition</li>
                <li>Easy access to the clinic for questions</li>
                <li>Emotional support throughout</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Support Matters
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Studies on early, supportive care in unexplained recurrent loss suggest better outcomes for many women</li>
                <li>Feeling heard and monitored reduces anxiety</li>
              </ul>
            </div>

            {/* Section 9 — Healthy Habits */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Healthy Habits Before Trying Again
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Practical Steps
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Take folic acid before and during early pregnancy</li>
                <li>Achieve a healthy weight</li>
                <li>Control diabetes and thyroid conditions</li>
                <li>Stop smoking and tobacco</li>
                <li>Avoid alcohol</li>
                <li>Limit caffeine</li>
                <li>Eat a balanced diet with protein, greens and fruit</li>
                <li>Exercise moderately</li>
                <li>Sleep well and manage stress</li>
                <li>Review all medicines with your doctor</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Things That Do Not Cause Recurrent Loss
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal exercise</li>
                <li>Everyday stress</li>
                <li>Intercourse</li>
                <li>Travelling</li>
                <li>Eating specific foods in normal amounts</li>
              </ul>
            </div>

            {/* Section 10 — Emotional Side */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Emotional Side of Recurrent Loss
              </h2>

              <p className="mb-4 text-gray-700">
                Grief after pregnancy loss is real, and repeated loss can bring
                sadness, anxiety, guilt and exhaustion.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What You May Feel
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Deep sadness or emptiness</li>
                <li>Anger or envy</li>
                <li>Fear about trying again</li>
                <li>Strain in your relationship</li>
                <li>Isolation if others do not understand</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Can Help
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk openly with your partner and a trusted person</li>
                <li>Allow yourself time to grieve</li>
                <li>Ask your doctor about counselling</li>
                <li>Avoid blaming yourself</li>
                <li>Take breaks from social media if it hurts</li>
                <li>Seek professional help if sadness or anxiety stays overwhelming</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Remember
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your feelings are valid</li>
                <li>Asking for help is a sign of strength</li>
              </ul>
            </div>

            {/* Section 11 — Care at Clinic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Care at Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                antenatal and postnatal care, high-risk pregnancy management,
                laparoscopic gynaecological surgery and fertility care. The
                clinic follows the philosophy &quot;Her Health First,&quot; which
                means listening to your story before planning treatment.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Services Relevant to Recurrent Pregnancy Loss
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed consultation and evaluation</li>
                <li>3D/4D ultrasound (Voluson E22 series)</li>
                <li>Diagnostic hysteroscopy</li>
                <li>Hysteroscopic polypectomy</li>
                <li>3D laparoscopic myomectomy for fibroids</li>
                <li>Fertility and IVF care</li>
                <li>PCOS and hormonal treatment</li>
                <li>High-risk pregnancy monitoring</li>
                <li>Antenatal and postnatal care</li>
                <li>Paediatric and newborn care</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What You Can Expect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>An unhurried, respectful consultation</li>
                <li>Clear explanation of every test and why it is done</li>
                <li>A personalised plan for your next pregnancy</li>
                <li>Continuity from evaluation to delivery</li>
              </ul>
            </div>

            {/* Section 12 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">Book a Consultation</h2>

              <p className="mb-6 text-black">
                You do not have to go through this alone. A careful evaluation
                can bring answers, and a plan can bring hope.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Contact Dr. Priyanka Gynaec, Moradabad</p>
                    <p className="text-black">Doctor: Dr. Priyanka Pachauri</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone / Appointments</p>
                    <div className="flex flex-wrap items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8979670705" className="hover:underline">
                        +91 89796 70705 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
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
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-black">@dr.priyanka.gynae</p>
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

            {/* Section 13 — FAQs */}
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
          <div className="order-2 w-full lg:w-[400px] xl:w-[440px]">
            <div className="space-y-6 lg:sticky lg:top-24">
              <LandingEnquiryForm compact />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
