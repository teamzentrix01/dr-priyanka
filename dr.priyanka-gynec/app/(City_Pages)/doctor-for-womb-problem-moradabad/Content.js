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

export default function DoctorForWombProblemMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for womb problems in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri treats uterus, ovary and menstrual problems in Moradabad.",
    },
    {
      q: "What are the common signs of a womb problem?",
      a: "Heavy or painful periods, pelvic pain, abnormal discharge, bleeding between periods and difficulty conceiving.",
    },
    {
      q: "Are fibroids dangerous?",
      a: "Usually not. They are non-cancerous, but large ones can cause heavy bleeding and pressure.",
    },
    {
      q: "Do all fibroids need surgery?",
      a: "No. Small, symptom-free fibroids are usually just monitored.",
    },
    {
      q: "Can womb problems cause infertility?",
      a: "Yes, conditions like fibroids, polyps, adhesions and endometriosis can, but most are treatable.",
    },
    {
      q: "What is laparoscopic surgery?",
      a: "Keyhole surgery through tiny cuts using a camera, with less pain and faster recovery.",
    },
    {
      q: "Is white discharge a womb problem?",
      a: "Mild clear discharge is normal. Foul, itchy or coloured discharge needs a check-up.",
    },
    {
      q: "Can womb problems be treated without removing the uterus?",
      a: "In most cases, yes, through medicines, hysteroscopy or uterus-preserving surgery.",
    },
    {
      q: "How often should I get a gynaecological check-up?",
      a: "Once a year, or sooner if you have symptoms.",
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
                Doctor for Womb Problem in Moradabad: Symptoms, Causes & Modern
                Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                Many women in Moradabad and nearby towns quietly live with
                symptoms they do not know how to name. Heavy periods, pain in
                the lower belly, white discharge, a feeling of heaviness,
                backache, or difficulty in getting pregnant are often brushed
                off as &quot;womb problem&quot; or &quot;kamzori&quot;.
              </p>

              <p className="mb-4 text-gray-700">
                Some of these symptoms are minor and settle with simple
                treatment. Others point to conditions such as fibroids, polyps,
                infection, endometriosis or prolapse that grow worse when
                ignored. The good news is that most womb problems are
                treatable, and many can now be handled with keyhole surgery that
                avoids large cuts and long hospital stays.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what &quot;womb problem&quot; can mean, the
                common conditions, warning signs, how a gynaecologist finds the
                cause, and the treatments available. It also tells you how to
                consult Dr. Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is the Womb (Uterus)?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The womb, or uterus, is a pear-shaped muscular organ in the
                  lower abdomen.
                </li>
                <li>
                  It has an inner lining that thickens every month and sheds as
                  your period.
                </li>
                <li>
                  It holds and nourishes the baby during pregnancy.
                </li>
                <li>
                  It is connected to the ovaries by the fallopian tubes and
                  opens into the vagina through the cervix.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Because the womb affects periods, pregnancy, pain and daily
                comfort, a problem in it can be felt in many ways.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Do People Mean by &quot;Womb Problem&quot;?
              </h2>

              <p className="mb-4 text-gray-700">
                &quot;Womb problem&quot; is an everyday phrase, not a diagnosis.
                It can describe:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Very heavy, painful or irregular periods.
                </li>
                <li>
                  Lumps or growths inside or on the uterus.
                </li>
                <li>
                  Infection or inflammation in the pelvis.
                </li>
                <li>
                  Pain during periods or intercourse.
                </li>
                <li>
                  The uterus slipping down (prolapse).
                </li>
                <li>
                  Difficulty in conceiving or repeated miscarriage.
                </li>
                <li>
                  Abnormal white or foul-smelling discharge.
                </li>
                <li>
                  Bleeding after menopause or between periods.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Each of these has a different cause and a different treatment,
                so a proper examination matters.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Womb Problems Explained
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Non-cancerous muscle growths in or on the uterus.
                </li>
                <li>
                  Very common in women in their 30s and 40s.
                </li>
                <li>
                  Symptoms include heavy periods, pelvic pressure, frequent
                  urination, constipation and pain.
                </li>
                <li>
                  Large or badly placed fibroids can affect pregnancy.
                </li>
                <li>
                  Treatment ranges from monitoring and medicines to laparoscopic
                  myomectomy, which removes fibroids and preserves the uterus.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Uterine Polyps
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Small soft growths on the inner lining.
                </li>
                <li>
                  May cause irregular bleeding, spotting between periods or
                  difficulty conceiving.
                </li>
                <li>
                  Diagnosed by ultrasound and hysteroscopy.
                </li>
                <li>
                  Removed through hysteroscopic polypectomy without any cuts.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The inner lining grows into the muscular wall of the uterus.
                </li>
                <li>
                  Causes heavy, painful periods and an enlarged, tender uterus.
                </li>
                <li>
                  Often found in women in their late 30s and 40s.
                </li>
                <li>
                  Managed with medicines, and surgery in selected cases.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tissue similar to the uterine lining grows outside the uterus.
                </li>
                <li>
                  Causes severe period pain, pelvic pain, pain during
                  intercourse and infertility.
                </li>
                <li>
                  Diagnosed with ultrasound, and confirmed by laparoscopy where
                  needed.
                </li>
                <li>
                  Treated with medicines or 3D laparoscopic excision.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Heavy Menstrual Bleeding
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Soaking a pad every hour, passing large clots, or periods
                  longer than 7 days.
                </li>
                <li>
                  Can lead to anaemia, weakness and breathlessness.
                </li>
                <li>
                  Causes include fibroids, polyps, hormonal imbalance, thyroid
                  problems and PCOS.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Infection of the uterus, tubes and nearby structures.
                </li>
                <li>
                  Symptoms include lower abdominal pain, fever, foul discharge
                  and pain during intercourse.
                </li>
                <li>
                  Needs prompt treatment to protect fertility.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fluid-filled sacs on the ovary.
                </li>
                <li>
                  Many are harmless and go away by themselves.
                </li>
                <li>
                  Some cause pain, bloating or irregular periods.
                </li>
                <li>
                  Larger or persistent cysts may need laparoscopic cystectomy,
                  which removes the cyst while preserving the ovary.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Uterine and Vaginal Prolapse
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The uterus slips down because pelvic muscles weaken.
                </li>
                <li>
                  More common after several deliveries, heavy lifting or
                  menopause.
                </li>
                <li>
                  Symptoms include a feeling of something coming down, backache
                  and urinary trouble.
                </li>
                <li>
                  Treated with exercises, support devices or surgery such as
                  sacrocolpopexy.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Structural Differences of the Uterus
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A uterine septum, bicornuate uterus or other variations
                  present from birth.
                </li>
                <li>
                  May cause repeated miscarriage or difficulty in pregnancy.
                </li>
                <li>
                  Often correctable with hysteroscopy.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Uterine Scarring (Asherman&apos;s Syndrome)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Adhesions form inside the uterus after infection or repeated
                  procedures.
                </li>
                <li>
                  May cause very light or absent periods and infertility.
                </li>
                <li>
                  Treated by hysteroscopic adhesion removal.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Cervical and Uterine Cancers
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cervical cancer can be prevented and caught early through Pap
                  smear and HPV screening.
                </li>
                <li>
                  Uterine cancer often shows up as bleeding after menopause.
                </li>
                <li>
                  Early detection improves outcomes greatly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of a Womb Problem
              </h2>

              <p className="mb-4 text-gray-700">
                Do not ignore these signs:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods that are very heavy, painful or irregular.
                </li>
                <li>
                  Bleeding between periods or after intercourse.
                </li>
                <li>Bleeding after menopause.</li>
                <li>
                  Constant or repeated lower abdominal pain.
                </li>
                <li>
                  Severe cramps that stop you from working.
                </li>
                <li>Pain during intercourse.</li>
                <li>
                  White, yellow, green or foul-smelling discharge.
                </li>
                <li>
                  A feeling of heaviness or bulging in the vagina.
                </li>
                <li>
                  Frequent urination or constipation.
                </li>
                <li>
                  A swelling or hardness in the lower belly.
                </li>
                <li>
                  Backache that is not linked to strain.
                </li>
                <li>
                  Tiredness, dizziness or breathlessness from blood loss.
                </li>
                <li>
                  Difficulty conceiving or repeated miscarriage.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flag Symptoms: Get Help Quickly
              </h2>

              <p className="mb-4 text-gray-700">
                Seek care urgently if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Very heavy bleeding that soaks a pad within an hour.
                </li>
                <li>Sudden, severe pelvic pain.</li>
                <li>
                  Fever with lower abdominal pain and discharge.
                </li>
                <li>Fainting or extreme weakness.</li>
                <li>Bleeding after menopause.</li>
                <li>Bleeding or pain during pregnancy.</li>
                <li>
                  Difficulty passing urine with a swelling in the lower belly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal imbalance, including PCOS and thyroid disorders.
                </li>
                <li>
                  Age, as fibroids and adenomyosis are common in the 30s and
                  40s.
                </li>
                <li>
                  Family history of fibroids, endometriosis or gynaecological
                  cancers.
                </li>
                <li>
                  Repeated childbirth or difficult deliveries.
                </li>
                <li>
                  Infections, including untreated sexually transmitted
                  infections.
                </li>
                <li>Obesity and lack of exercise.</li>
                <li>
                  Previous uterine surgery or repeated abortions.
                </li>
                <li>Poor menstrual hygiene.</li>
                <li>Delay in getting a check-up.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Womb Problems Are Diagnosed
              </h2>

              <p className="mb-4 text-gray-700">
                A correct diagnosis prevents unnecessary medicines and
                unnecessary surgery.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed History
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Period pattern, flow, pain and duration.</li>
                <li>Pregnancies, deliveries and miscarriages.</li>
                <li>
                  Discharge, pain during intercourse and urinary symptoms.
                </li>
                <li>Past surgeries, infections and medicines.</li>
                <li>Family history.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Physical and Pelvic Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>General health, weight and blood pressure.</li>
                <li>Abdominal examination for swelling or tenderness.</li>
                <li>Gentle pelvic examination, when appropriate.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Blood and Lab Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Haemoglobin to check for anaemia.</li>
                <li>Thyroid and hormone tests where needed.</li>
                <li>Urine and discharge tests for infection.</li>
                <li>Pap smear or HPV test for cervical screening.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Imaging
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic ultrasound to see fibroids, cysts, polyps and thickness
                  of the lining.
                </li>
                <li>
                  3D/4D ultrasound for finer detail of the uterine cavity.
                </li>
                <li>
                  MRI in selected cases, such as complex fibroids or
                  adenomyosis.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Minimally Invasive Procedures
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diagnostic hysteroscopy: a thin camera looks inside the
                  uterus.
                </li>
                <li>
                  Diagnostic laparoscopy: a small camera looks at the outside of
                  the uterus, tubes and ovaries.
                </li>
                <li>Small tissue samples (biopsy) when needed.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Womb Problems
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the diagnosis, your age, symptoms, and
                whether you plan a pregnancy.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Medicines
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Medicines to reduce heavy bleeding and pain.
                </li>
                <li>
                  Hormonal treatment to regulate periods or control
                  endometriosis.
                </li>
                <li>Antibiotics for infection.</li>
                <li>Iron and vitamin supplements for anaemia.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Lifestyle Support
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Healthy weight and regular exercise.</li>
                <li>Balanced diet with iron, protein and fibre.</li>
                <li>Stress reduction and good sleep.</li>
                <li>Regular gynaecological check-ups.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Hysteroscopic Procedures
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removal of polyps, small fibroids, adhesions or a septum.
                </li>
                <li>
                  Done through the natural passage without cuts.
                </li>
                <li>Usually a short procedure with quick recovery.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Laparoscopic (Keyhole) Surgery
              </h3>
              <p className="mb-3 text-gray-700">
                Performed through tiny cuts using a high-definition 3D camera.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Laparoscopic myomectomy: removes fibroids and keeps the
                  uterus.
                </li>
                <li>
                  Laparoscopic cystectomy: removes ovarian cysts while
                  preserving the ovary.
                </li>
                <li>
                  Endometriosis excision: removes deposits and relieves pain.
                </li>
                <li>
                  Laparoscopic hysterectomy: removes the uterus when needed,
                  with faster recovery.
                </li>
                <li>
                  Sacrocolpopexy: repairs uterine or vaginal vault prolapse.
                </li>
              </ul>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                Benefits of keyhole surgery
              </h4>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Smaller cuts and less pain.</li>
                <li>Shorter hospital stay.</li>
                <li>Faster return to daily life.</li>
                <li>Lower risk of wound problems.</li>
                <li>Better cosmetic result.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Treatment for Infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Complete antibiotic course for you, and sometimes for your
                  partner.
                </li>
                <li>
                  Follow-up to confirm the infection has cleared.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Fertility-Focused Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  If the womb problem is affecting conception, treatment is
                  planned with pregnancy in mind.
                </li>
                <li>
                  Options include ovulation induction, IUI and IVF when
                  required.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Cancer Screening and Follow-up
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular Pap smears and HPV testing.</li>
                <li>
                  Prompt evaluation of any postmenopausal bleeding.
                </li>
                <li>
                  Referral and coordinated care if a serious condition is found.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Do All Womb Problems Need Surgery?
              </h2>

              <p className="mb-4 text-gray-700">
                No. This is a very common fear.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many fibroids and cysts only need regular monitoring.
                </li>
                <li>Heavy periods often improve with medicines.</li>
                <li>Infections are treated with antibiotics.</li>
                <li>
                  Surgery is advised only when symptoms are severe, the growth
                  is large, or fertility is affected.
                </li>
                <li>
                  When surgery is needed, the smallest and safest approach is
                  chosen.
                </li>
                <li>
                  A second opinion is always reasonable before any major
                  decision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Healthy Womb
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Get a gynaecological check-up once a year.
                </li>
                <li>
                  Start Pap smear screening as advised by your doctor.
                </li>
                <li>Keep a simple period diary.</li>
                <li>
                  Eat iron-rich foods such as leafy greens, dates, jaggery and
                  beetroot.
                </li>
                <li>Maintain a healthy weight.</li>
                <li>
                  Exercise regularly, including pelvic floor exercises after
                  childbirth.
                </li>
                <li>Practise safe sex and treat infections early.</li>
                <li>
                  Avoid self-medicating with hormonal pills.
                </li>
                <li>
                  Do not ignore pain, heavy bleeding or unusual discharge.
                </li>
                <li>Discuss family history with your doctor.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Womb Problems
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Every womb problem needs the uterus to
                  be removed. <strong>Fact:</strong> Many conditions are treated
                  with medicines or uterus-preserving surgery.
                </li>
                <li>
                  <strong>Myth:</strong> Fibroids are cancer.{" "}
                  <strong>Fact:</strong> Fibroids are almost always
                  non-cancerous.
                </li>
                <li>
                  <strong>Myth:</strong> White discharge is always a disease.{" "}
                  <strong>Fact:</strong> Some discharge is normal, but
                  foul-smelling, itchy or coloured discharge needs checking.
                </li>
                <li>
                  <strong>Myth:</strong> Painful periods are normal for every
                  woman. <strong>Fact:</strong> Severe pain can point to
                  endometriosis or adenomyosis.
                </li>
                <li>
                  <strong>Myth:</strong> Surgery means a long recovery.{" "}
                  <strong>Fact:</strong> Keyhole surgery often allows a quick
                  return to daily life.
                </li>
                <li>
                  <strong>Myth:</strong> Womb problems mean you cannot have
                  children. <strong>Fact:</strong> Many women conceive after
                  proper treatment.
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
                  A basic examination and an ultrasound if needed.
                </li>
                <li>
                  Simple explanations of what may be causing your problem.
                </li>
                <li>A list of tests, if required.</li>
                <li>
                  A clear treatment plan, with medicines or surgery discussed
                  openly.
                </li>
                <li>
                  Time to ask questions and take decisions comfortably.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">Please bring:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous prescriptions, scans and reports.</li>
                <li>Dates of your last periods.</li>
                <li>A list of medicines you take.</li>
                <li>Details of past surgeries or deliveries.</li>
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
