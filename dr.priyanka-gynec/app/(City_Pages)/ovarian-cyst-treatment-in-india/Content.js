import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function OvarianCystTreatmentIndia() {
  const faqs = [
    {
      q: "Do all ovarian cysts need treatment in India?",
      a: "No. Many small functional cysts disappear without treatment.",
    },
    {
      q: "What are the main treatment options?",
      a: "Observation, medicines and laparoscopic cystectomy, with open surgery for special cases.",
    },
    {
      q: "Is laparoscopic cyst surgery available in India?",
      a: "Yes. It is widely available, including 3D laparoscopy at modern centres.",
    },
    {
      q: "Will surgery affect my fertility?",
      a: "Laparoscopic cystectomy aims to protect fertility, but discuss your plans beforehand.",
    },
    {
      q: "How long is recovery after keyhole surgery?",
      a: "Many women go home within a day and resume light routine in about a week.",
    },
    {
      q: "Can ovarian cysts come back?",
      a: "Yes, especially functional cysts and endometriomas, so follow-up is important.",
    },
    {
      q: "When should I go to the hospital urgently?",
      a: "For sudden severe pain, fainting, vomiting with pain or heavy bleeding.",
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
                Ovarian Cyst Treatment in India: Types, Options, Surgery and How
                to Choose the Right Doctor
              </h1>


              <p className="mb-4 text-gray-700">
                Ovarian cysts are among the most common gynaecological findings
                in Indian women. Many are discovered by chance during a routine
                ultrasound. Others announce themselves with pelvic pain,
                bloating or irregular periods. Either way, the reaction is
                similar: worry, followed by a flood of conflicting advice from
                family, neighbours and the internet.
              </p>


              <p className="mb-4 text-gray-700">
                The reassuring fact is that most ovarian cysts are benign, and
                many disappear without any treatment. Those that do need care
                can be treated safely, often through modern keyhole surgery that
                protects fertility. This guide explains how ovarian cysts are
                managed in India, from diagnosis to recovery, and how to choose
                the right doctor wherever you live.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is an Ovarian Cyst?
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A fluid-filled sac that forms on or inside an ovary
                </li>
                <li>
                  Can be as small as a pea or as large as a grapefruit or more
                </li>
                <li>
                  Can occur at any age, from adolescence to after menopause
                </li>
                <li>Often painless and found only on ultrasound</li>
                <li>
                  Usually non-cancerous, though some features need closer
                  evaluation
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Ovarian Cysts Are So Common in India
              </h2>


              <p className="mb-4 text-gray-700">Several factors make cysts a frequent concern.</p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>PCOS:</strong> polycystic ovary syndrome is common
                  among Indian women and often confused with true cysts.
                </li>
                <li>
                  <strong>Endometriosis:</strong> frequently under-diagnosed,
                  and a cause of chocolate cysts.
                </li>
                <li>
                  <strong>Irregular cycles:</strong> hormonal imbalance is
                  common with changing lifestyles.
                </li>
                <li>
                  <strong>Thyroid disorders:</strong> more common in women and
                  linked with ovulation issues.
                </li>
                <li>
                  <strong>Pelvic infections:</strong> including tuberculosis in
                  some regions, which can affect pelvic organs.
                </li>
                <li>
                  <strong>Delayed consultation:</strong> many women wait until
                  symptoms become severe.
                </li>
                <li>
                  <strong>Wider use of ultrasound:</strong> more cysts are now
                  being detected incidentally.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Ovarian Cysts
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Functional Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Follicular cyst:</strong> a follicle that keeps
                  growing without releasing its egg
                </li>
                <li>
                  <strong>Corpus luteum cyst:</strong> forms after ovulation
                  when the sac fills with fluid
                </li>
                <li>
                  Usually harmless and often resolve within one to three
                  menstrual cycles
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pathological Cysts
              </h3>


              <h4 className="mb-1 font-semibold text-gray-800">
                Endometrioma (chocolate cyst):
              </h4>
              <ul className="mb-4 list-disc space-y-2 pl-8 text-gray-700">
                <li>Linked with endometriosis</li>
                <li>Filled with old blood</li>
                <li>Can cause pain and difficulty in conceiving</li>
                <li>Does not usually resolve on its own</li>
              </ul>


              <h4 className="mb-1 font-semibold text-gray-800">
                Dermoid cyst (mature teratoma):
              </h4>
              <ul className="mb-4 list-disc space-y-2 pl-8 text-gray-700">
                <li>Contains tissue such as hair, fat or skin</li>
                <li>Does not disappear by itself</li>
                <li>May twist if it grows large</li>
              </ul>


              <h4 className="mb-1 font-semibold text-gray-800">
                Cystadenoma:
              </h4>
              <ul className="mb-6 list-disc space-y-2 pl-8 text-gray-700">
                <li>Contains watery or mucus-like fluid</li>
                <li>Can grow large</li>
                <li>Usually removed surgically</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                PCOS Ovaries
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Many small, immature follicles rather than true cysts</li>
                <li>
                  Managed with lifestyle, hormonal and fertility care
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Cancerous Cysts (Rare)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Uncommon, particularly in younger women</li>
                <li>
                  More concern in postmenopausal women or with suspicious scan
                  features
                </li>
                <li>
                  Evaluated with blood tests, imaging and, when needed, surgery
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms to Watch For
              </h2>


              <p className="mb-4 text-gray-700">
                Many women have no symptoms. When they appear, they may include:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain or heaviness in the lower abdomen or pelvis, often on one
                  side
                </li>
                <li>Bloating or a feeling of fullness</li>
                <li>Pain during intercourse</li>
                <li>Painful, heavy or irregular periods</li>
                <li>
                  Frequent urge to pass urine or difficulty emptying the bladder
                </li>
                <li>Pain during bowel movements</li>
                <li>Lower backache</li>
                <li>Difficulty in conceiving</li>
              </ul>


              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Emergency Signs
              </h3>
              <p className="mb-2 text-gray-700">
                Go to a hospital immediately for:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe abdominal or pelvic pain</li>
                <li>Pain with fever, vomiting or dizziness</li>
                <li>Fainting or rapid breathing</li>
                <li>Heavy vaginal bleeding</li>
              </ul>
              <p className="mt-4 text-gray-700">
                These can indicate a burst cyst or ovarian torsion, which are
                emergencies.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Ovarian Cysts Are Diagnosed in India
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Clinical examination:</strong> history and pelvic
                  examination
                </li>
                <li>
                  <strong>Ultrasound:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Transvaginal or abdominal</li>
                    <li>The most important and widely available test</li>
                    <li>Shows size, position and internal appearance</li>
                    <li>3D/4D ultrasound: gives more detail in selected cases</li>
                  </ul>
                </li>
                <li>
                  <strong>Pregnancy test:</strong> to rule out ectopic pregnancy
                </li>
                <li>
                  <strong>Blood tests:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Hormone levels</li>
                    <li>
                      Tumour markers such as CA-125 when indicated
                    </li>
                    <li>
                      CA-125 can also rise in endometriosis, so results are read
                      in context
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>MRI or CT scan:</strong> for complex or unclear cysts
                </li>
                <li>
                  <strong>Diagnostic laparoscopy:</strong> when imaging cannot
                  give a clear answer
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Do All Ovarian Cysts Need Treatment?
              </h2>


              <p className="mb-4 text-gray-700">No. Your doctor considers:</p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Type of cyst</li>
                <li>Size and growth</li>
                <li>Symptoms</li>
                <li>Appearance on ultrasound: simple or complex</li>
                <li>Your age and menopausal status</li>
                <li>Your plans for pregnancy</li>
                <li>Whether the cyst persists or returns</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ovarian Cyst Treatment Options Available in India
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Watchful Waiting
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Suitable for:</strong> small, simple, symptom-free
                  cysts
                </li>
                <li>
                  <strong>What happens:</strong> repeat ultrasound after one to
                  three cycles
                </li>
                <li>
                  <strong>Why it works:</strong> most functional cysts resolve by
                  themselves
                </li>
                <li>
                  <strong>Advantage:</strong> no medicine or surgery, and no
                  cost beyond follow-up scans
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Medicines
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pain relief:</strong> for discomfort, as advised by
                  your doctor
                </li>
                <li>
                  <strong>Hormonal medicines:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>May prevent new functional cysts</li>
                    <li>Usually do not shrink existing cysts</li>
                    <li>Not suitable if you want to conceive</li>
                  </ul>
                </li>
                <li>
                  <strong>Treatment of underlying conditions:</strong> PCOS,
                  endometriosis or thyroid disorders
                </li>
              </ul>
              <p className="mb-6 text-gray-700">
                <strong>Caution:</strong> do not self-medicate or rely on
                unproven herbal products.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Laparoscopic Cystectomy (Keyhole Surgery)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it is:</strong> removal of the cyst through small
                  incisions using a camera and fine instruments
                </li>
                <li>
                  <strong>Fertility-preserving:</strong> healthy ovarian tissue
                  is protected
                </li>
                <li>
                  <strong>Advised for:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Large cysts that persist</li>
                    <li>Cysts causing pain or pressure</li>
                    <li>Endometriomas and dermoid cysts</li>
                    <li>Complex-looking cysts</li>
                    <li>Cysts that keep returning</li>
                  </ul>
                </li>
                <li>
                  <strong>Advantages:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Small cuts and less pain</li>
                    <li>Short hospital stay, often one day</li>
                    <li>Faster return to routine</li>
                    <li>Less scarring and fewer adhesions</li>
                    <li>
                      <strong>3D laparoscopy:</strong> offers better depth
                      perception for precise work, and is available in many
                      modern centres across India
                    </li>
                  </ul>
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Open Surgery (Laparotomy)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Used for very large cysts or when cancer is strongly suspected
                </li>
                <li>Needs a larger incision and a longer recovery</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Robotic-Assisted Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Available at some larger hospitals in metro cities</li>
                <li>Generally costlier, with benefits that depend on the case</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Removal of the Ovary (Oophorectomy)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reserved for special situations, such as a twisted ovary that
                  has lost its blood supply or a highly suspicious cyst
                </li>
                <li>
                  The aim is always to preserve the ovary whenever it is safe
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Treatment of Endometriosis
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many chocolate cysts need treatment of the underlying
                  endometriosis too.
                </li>
                <li>
                  This may include surgical excision, hormonal suppression and
                  fertility planning.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment by Type of Cyst
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Functional cyst:</strong> observation, with surgery
                  only if very large or symptomatic
                </li>
                <li>
                  <strong>Endometrioma:</strong> often laparoscopic cystectomy
                  with excision of endometriosis, planned to protect ovarian
                  reserve
                </li>
                <li>
                  <strong>Dermoid cyst:</strong> laparoscopic removal, with
                  careful technique to avoid spillage
                </li>
                <li>
                  <strong>Cystadenoma:</strong> surgical removal
                </li>
                <li>
                  <strong>PCOS ovaries:</strong> lifestyle correction, hormonal
                  regulation and ovulation induction if pregnancy is desired
                </li>
                <li>
                  <strong>Suspicious or complex cyst:</strong> detailed
                  evaluation, with surgery planned accordingly
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ovarian Cysts and Pregnancy
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cysts are common in early pregnancy, often corpus luteum
                  cysts.
                </li>
                <li>Most resolve by the second trimester.</li>
                <li>Regular scans track the cyst.</li>
                <li>
                  Surgery is considered only for large, painful, twisted or
                  suspicious cysts, and is usually done in the second trimester
                  when required.
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Tell your doctor immediately if you are pregnant or trying to
                conceive.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ovarian Cysts and Fertility
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Simple cysts usually do not affect fertility.</li>
                <li>
                  Endometriomas can reduce ovarian reserve and egg quality.
                </li>
                <li>
                  Surgery should be planned to protect healthy ovarian tissue.
                </li>
                <li>
                  After treatment, options such as ovulation induction, IUI or
                  IVF may help women who need fertility support.
                </li>
                <li>
                  Early advice benefits young women who plan to conceive later.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cost of Ovarian Cyst Treatment in India
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Observation:</strong> usually the price of
                  consultations and follow-up scans
                </li>
                <li>
                  <strong>Medicines:</strong> generally modest, though
                  long-term treatment for PCOS or endometriosis adds up
                </li>
                <li>
                  <strong>Laparoscopic cystectomy:</strong> many Indian
                  hospitals quote figures in the range of tens of thousands to
                  around a lakh of rupees or more, depending on city, hospital
                  and complexity
                </li>
                <li>
                  <strong>Open and robotic surgery:</strong> usually higher
                </li>
              </ul>


              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Factors that change the cost:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Type and size of the cyst</li>
                <li>One or both ovaries involved</li>
                <li>Surgical approach</li>
                <li>Hospital category and city</li>
                <li>Room type and length of stay</li>
                <li>Pre-operative tests and histopathology</li>
                <li>
                  Insurance: many policies cover medically necessary surgery,
                  but terms vary
                </li>
              </ul>


              <p className="text-gray-700">
                Always ask for a written, itemised estimate. These are
                indicative only. Contact the clinic for current charges.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Metro vs Tier-2 City: Where Should You Get Treated?
              </h2>


              <p className="mb-4 text-gray-700">
                Both can offer excellent care. Consider what matters most.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Metro hospitals:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Many options and large infrastructure</li>
                <li>Often busy, with shorter consultation times</li>
                <li>Higher travel, stay and hospital costs</li>
                <li>Longer waiting times at popular centres</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Regional and tier-2 city clinics:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Often more time with the main doctor</li>
                <li>A calmer, more personal experience</li>
                <li>Lower travel and living costs for local families</li>
                <li>Continuity from diagnosis through surgery and follow-up</li>
                <li>
                  Modern equipment, including 3D laparoscopy, is increasingly
                  available
                </li>
              </ul>


              <p className="text-gray-700">
                What really matters: the surgeon&apos;s experience, the
                technology, honest advice and how comfortable you feel.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Ovarian Cyst Doctor in India
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Qualifications:</strong> MBBS with MD or MS in
                  obstetrics and gynaecology
                </li>
                <li>
                  <strong>Laparoscopic training and experience:</strong> ask how
                  often the doctor performs cyst surgery
                </li>
                <li>
                  <strong>Technology:</strong> 3D or high-definition
                  laparoscopy, and on-site ultrasound
                </li>
                <li>
                  <strong>Ethical approach:</strong> advises surgery only when
                  it is truly needed
                </li>
                <li>
                  <strong>Fertility awareness:</strong> discusses preserving
                  ovaries and your pregnancy plans
                </li>
                <li>
                  <strong>Clear communication:</strong> explains the diagnosis
                  simply
                </li>
                <li>
                  <strong>Cost transparency:</strong> gives a written, itemised
                  estimate
                </li>
                <li>
                  <strong>Emergency guidance:</strong> can advise quickly in an
                  urgent situation
                </li>
                <li>
                  <strong>Follow-up:</strong> offers continued care after
                  surgery
                </li>
                <li>
                  <strong>Accessibility:</strong> responds to calls and WhatsApp
                  messages
                </li>
                <li>
                  <strong>Real patient experiences:</strong> genuine reviews and
                  referrals
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What type of cyst do I have?</li>
                <li>Does it need treatment, or can we watch it?</li>
                <li>What are my options, and which do you recommend?</li>
                <li>Is keyhole surgery suitable for me?</li>
                <li>Will my ovary and fertility be protected?</li>
                <li>What are the risks and recovery time?</li>
                <li>What will the total cost be, and what is included?</li>
                <li>What follow-up will I need?</li>
                <li>Could the cyst come back?</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect After Surgery
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hospital stay:</strong> often one day after
                  laparoscopic surgery
                </li>
                <li>
                  <strong>Pain:</strong> mild to moderate, managed with
                  medicines
                </li>
                <li>
                  <strong>Shoulder-tip pain:</strong> common for a day or two
                </li>
                <li>
                  <strong>Walking:</strong> encouraged early
                </li>
                <li>
                  <strong>Return to routine:</strong> often within about a week
                  for light work, depending on the case
                </li>
                <li>
                  <strong>Follow-up:</strong> wound check, histopathology report
                  review and scans
                </li>
                <li>
                  <strong>Avoid:</strong> heavy lifting and strenuous exercise
                  until your doctor allows
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Call your doctor for fever, severe pain, heavy bleeding, wound
                discharge or persistent vomiting.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can Ovarian Cysts Come Back?
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Functional cysts can form again with future cycles.</li>
                <li>
                  Endometriomas carry a recurrence risk, so follow-up matters.
                </li>
                <li>
                  Dermoid cysts rarely return in the same place, but new ones
                  can form.
                </li>
              </ul>


              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Prevention steps:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Attend follow-up scans</li>
                <li>Take prescribed hormonal medicines</li>
                <li>Maintain a healthy weight</li>
                <li>Manage PCOS or endometriosis</li>
                <li>Report new symptoms early</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Ovarian Health
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat a balanced diet with vegetables, fruit, pulses and whole
                  grains.
                </li>
                <li>Maintain a healthy weight.</li>
                <li>Exercise regularly.</li>
                <li>Sleep 7–8 hours.</li>
                <li>Manage stress through yoga, walking or meditation.</li>
                <li>Avoid smoking and limit alcohol.</li>
                <li>Track your menstrual cycle.</li>
                <li>Do not ignore persistent pelvic pain.</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Remember: these habits support overall health. No home remedy
                has been proven to dissolve a cyst.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Ovarian Cyst Treatment
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> every cyst needs surgery.
                  <br />
                  <strong>Fact:</strong> many functional cysts resolve on their
                  own.
                </li>
                <li>
                  <strong>Myth:</strong> a cyst means cancer.
                  <br />
                  <strong>Fact:</strong> most cysts are benign.
                </li>
                <li>
                  <strong>Myth:</strong> surgery always harms fertility.
                  <br />
                  <strong>Fact:</strong> laparoscopic cystectomy aims to preserve
                  healthy ovarian tissue.
                </li>
                <li>
                  <strong>Myth:</strong> herbs and home remedies can dissolve
                  cysts.
                  <br />
                  <strong>Fact:</strong> unproven remedies can delay proper care.
                </li>
                <li>
                  <strong>Myth:</strong> painless cysts can be ignored.
                  <br />
                  <strong>Fact:</strong> follow-up is still needed, because some
                  grow silently.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
              </h2>


              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                      <p className="text-sm text-gray-700">
                        Fertility • Maternity • 3D Laparoscopy
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