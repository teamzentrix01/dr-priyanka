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

export default function PregnancyComplicationsNearMe() {
  const faqs = [
    {
      q: "What are the most common pregnancy complications?",
      a: "Gestational diabetes, preeclampsia, anaemia, preterm labour, miscarriage, infections and placenta problems are the most common.",
    },
    {
      q: "How do I find a pregnancy complications specialist near me in Moradabad?",
      a: "Choose a gynaecologist experienced in high-risk pregnancy with scan facilities, such as Dr. Priyanka Gynaec, Gandhi Nagar, Moradabad.",
    },
    {
      q: "What are the early warning signs I should never ignore?",
      a: "Bleeding, severe pain, leaking fluid, severe headache, blurred vision, swelling and reduced baby movements.",
    },
    {
      q: "Is a high-risk pregnancy always dangerous?",
      a: "No. With regular monitoring and timely treatment, most high-risk pregnancies end with healthy mothers and babies.",
    },
    {
      q: "Can I have a normal delivery with a complication?",
      a: "Often yes, depending on the condition and your baby's health. Your doctor will advise the safest option.",
    },
    {
      q: "Can pregnancy complications be prevented?",
      a: "Many can be prevented or controlled through early check-ups, a healthy diet, supplements and managing existing conditions.",
    },
    {
      q: "How often should I visit the doctor during pregnancy?",
      a: "Monthly until 28 weeks, then every two weeks, then weekly near delivery. High-risk cases may need more visits.",
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
                Pregnancy Complications Near Me: Warning Signs, Causes, Treatment & Expert Care in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy is one of the most beautiful phases of a woman&apos;s
                life. For some women, though, it comes with health challenges
                that need timely attention. If you have been searching for
                &quot;pregnancy complications near me&quot;, you are probably
                worried about a symptom, a scan result or a family history. This
                guide explains the most common complications, the warning signs
                that need urgent attention, and how specialist care in Moradabad
                can keep you and your baby safe.
              </p>

              <p className="mb-4 text-gray-700">
                Most pregnancies go smoothly, but complications can develop at
                any stage, often silently. Early detection through regular
                antenatal check-ups is the most powerful tool for a safe
                delivery.
              </p>
            </div>

            {/* Section 2 — What Are Complications */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Pregnancy Complications?
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy complications are health problems that occur during
                pregnancy and may affect the mother, the baby, or both. Some
                exist before pregnancy, while others develop during it.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Some are mild and easily managed with diet, rest and medication.</li>
                <li>Some need close monitoring, extra scans and specialist supervision.</li>
                <li>A few need urgent hospital care or planned early delivery.</li>
                <li>Many are preventable or controllable when found early.</li>
              </ul>

              <p className="text-gray-700">
                A pregnancy with a higher chance of complications is called a
                high-risk pregnancy. This does not mean something will go wrong.
                It means you need more frequent monitoring and a doctor
                experienced in managing such cases.
              </p>
            </div>

            {/* Section 3 — Who Is at Higher Risk */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is at Higher Risk?
              </h2>

              <p className="mb-4 text-gray-700">
                You may need extra care if any of the following apply to you:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Age below 18 or above 35</li>
                <li>Previous miscarriage, stillbirth or preterm delivery</li>
                <li>Previous caesarean section</li>
                <li>Twin or multiple pregnancy</li>
                <li>Pre-existing diabetes, high blood pressure, thyroid disease or heart disease</li>
                <li>PCOS or a history of fertility treatment (IVF/IUI)</li>
                <li>Anaemia or low body weight</li>
                <li>Obesity (high BMI)</li>
                <li>Kidney, liver or autoimmune conditions</li>
                <li>Smoking, tobacco or alcohol use</li>
                <li>Rh-negative blood group</li>
                <li>Family history of genetic or pregnancy-related conditions</li>
              </ul>

              <p className="text-gray-700">
                If even one point applies, book an early antenatal consultation
                rather than waiting for symptoms.
              </p>
            </div>

            {/* Section 4 — Common Complications */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Pregnancy Complications
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Gestational Diabetes
              </h3>

              <p className="mb-2 text-gray-700">
                Gestational diabetes is high blood sugar that first appears
                during pregnancy, usually in the second or third trimester.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Symptoms: often none, though some women have excessive thirst, frequent urination and fatigue</li>
                <li>Risks: a large baby, difficult delivery, low sugar in the newborn, and a higher chance of type 2 diabetes later</li>
                <li>Detection: a glucose tolerance test (OGTT), usually between 24 and 28 weeks</li>
                <li>Management: a balanced diet, walking, blood sugar monitoring, and insulin or medicines when needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Preeclampsia and High Blood Pressure
              </h3>

              <p className="mb-2 text-gray-700">
                Preeclampsia is high blood pressure with signs of organ stress,
                usually after 20 weeks. It is one of the most serious pregnancy
                complications if ignored.
              </p>

              <p className="mb-2 text-gray-700">Warning signs:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe or persistent headache</li>
                <li>Blurred vision or flashing lights</li>
                <li>Sudden swelling of the face, hands or feet</li>
                <li>Pain in the upper right abdomen</li>
                <li>Sudden weight gain</li>
              </ul>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Risks: seizures (eclampsia), placental problems, poor baby growth and preterm birth</li>
                <li>Management: regular BP checks, urine protein tests, medication, rest, and a carefully timed delivery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Anaemia in Pregnancy
              </h3>

              <p className="mb-2 text-gray-700">
                Anaemia is very common among women in India.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Symptoms: tiredness, dizziness, pale skin, breathlessness and rapid heartbeat</li>
                <li>Risks: preterm labour, low birth weight and heavy bleeding after delivery</li>
                <li>Management: iron-rich foods, iron and folic acid supplements, and in severe cases an iron injection or transfusion</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Miscarriage and Threatened Miscarriage
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Warning signs: vaginal bleeding, lower abdominal cramping, passage of tissue</li>
                <li>Action: contact your doctor immediately. An early ultrasound can check the baby&apos;s heartbeat and position.</li>
                <li>Management: rest, hormonal support when advised, and treatment of the underlying cause</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Ectopic Pregnancy
              </h3>

              <p className="mb-2 text-gray-700">
                An ectopic pregnancy occurs when the embryo implants outside the
                uterus, usually in a fallopian tube.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Symptoms: one-sided pelvic pain, spotting, shoulder-tip pain or fainting</li>
                <li>Why it matters: it can be life-threatening if the tube ruptures</li>
                <li>Treatment: medication or minimally invasive laparoscopic surgery, depending on the case</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Preterm Labour
              </h3>

              <p className="mb-2 text-gray-700">
                Preterm labour is labour before 37 weeks of pregnancy.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Signs: regular tightening, lower back pain, pelvic pressure, fluid leakage or increased discharge</li>
                <li>Management: cervical length scans, medicines to slow labour, steroid injections for baby&apos;s lungs, and hospital admission when required</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Placenta Problems
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Placenta previa: the placenta covers the cervix and causes painless bleeding.</li>
                <li>Placental abruption: the placenta separates early and causes pain and bleeding.</li>
                <li>Low-lying placenta: often corrects itself as the uterus grows, but needs repeat scans.</li>
              </ul>

              <p className="text-gray-700">
                Key point: these conditions need specialist monitoring and a
                planned delivery strategy.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Intrauterine Growth Restriction (IUGR)
              </h3>

              <p className="mb-2 text-gray-700">
                IUGR means the baby is not growing at the expected rate.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Causes: placental insufficiency, maternal hypertension, infection or poor nutrition</li>
                <li>Detection: growth scans and Doppler blood-flow studies</li>
                <li>Management: improved nutrition, rest, close monitoring and timely delivery if needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Hyperemesis Gravidarum
              </h3>

              <p className="mb-2 text-gray-700">
                This is severe, persistent nausea and vomiting that goes beyond
                normal morning sickness.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Signs: being unable to keep food or water down, weight loss, dehydration</li>
                <li>Management: IV fluids, anti-nausea medicines and nutritional support</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Urinary and Vaginal Infections
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Common types: urinary tract infection, bacterial vaginosis and yeast infection</li>
                <li>Symptoms: burning urination, unusual discharge, itching or fever</li>
                <li>Why treat them: untreated infections can lead to preterm labour</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Thyroid Disorders
              </h3>

              <p className="mb-4 text-gray-700">
                Both underactive and overactive thyroid can affect the
                baby&apos;s brain development and the pregnancy. Regular TSH
                testing and correct medicine doses keep the condition well
                controlled.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Rh Incompatibility
              </h3>

              <p className="mb-4 text-gray-700">
                It occurs when an Rh-negative mother carries an Rh-positive
                baby. An anti-D injection at the right time prevents
                complications in current and future pregnancies.
              </p>
            </div>

            {/* Section 5 — Emergency Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Warning Signs: Do Not Wait
              </h2>

              <p className="mb-4 text-gray-700">
                Contact your gynaecologist or go to the nearest hospital
                immediately if you notice any of these:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy or sudden vaginal bleeding</li>
                <li>Leaking of fluid before the due date</li>
                <li>Severe abdominal pain</li>
                <li>Reduced or absent baby movements</li>
                <li>Severe headache with blurred vision</li>
                <li>Fever with chills</li>
                <li>Sudden swelling of the face and hands</li>
                <li>Fits or fainting</li>
                <li>Painful or burning urination with fever</li>
                <li>Regular contractions before 37 weeks</li>
              </ul>

              <p className="text-gray-700">
                Never self-medicate during pregnancy. Even common painkillers
                can be unsafe.
              </p>
            </div>

            {/* Section 6 — Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Pregnancy Complications Are Diagnosed
              </h2>

              <p className="mb-4 text-gray-700">
                Modern diagnosis relies on a combination of clinical examination
                and imaging.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests: haemoglobin, blood sugar, thyroid, blood group and infection screening</li>
                <li>Urine tests: protein and infection checks</li>
                <li>Ultrasound scans: Dating scan in the first trimester, NT scan at 11–14 weeks, Anomaly (level II) scan at 18–20 weeks, Growth and Doppler scans in the third trimester</li>
                <li>3D/4D imaging: gives clearer visualisation of the baby&apos;s structure and development</li>
                <li>Blood pressure monitoring: at every visit</li>
                <li>Cervical length measurement: to assess preterm labour risk</li>
                <li>Non-stress test (NST): to check baby&apos;s wellbeing in late pregnancy</li>
              </ul>
            </div>

            {/* Section 7 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment and Management Approach
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the condition, the stage of pregnancy and
                the health of both mother and baby.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Lifestyle support: nutrition counselling, safe exercise and adequate rest</li>
                <li>Medication: only those that are safe in pregnancy and prescribed by your doctor</li>
                <li>Close monitoring: more frequent visits and repeat scans</li>
                <li>Hospital admission: when a condition needs round-the-clock observation</li>
                <li>Planned delivery: the right time and mode of delivery chosen for the safest outcome</li>
                <li>Postnatal follow-up: blood pressure, sugar, mood and baby care after birth</li>
              </ul>
            </div>

            {/* Section 8 — Why Choose Dr Priyanka */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Pregnancy Complications in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you want specialist care close to home, Dr. Priyanka Gynaec
                in Moradabad offers a patient-first approach to antenatal and
                pregnancy care.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Complete pregnancy care: antenatal services, pregnancy and birthing care, and normal delivery support</li>
                <li>Advanced imaging: 3D/4D ultrasound for detailed monitoring of your baby</li>
                <li>Experience with high-risk pregnancy: structured screening, regular monitoring and personalised care plans</li>
                <li>Minimally invasive surgery: 3D laparoscopic expertise where surgical treatment is needed, such as ectopic pregnancy</li>
                <li>Fertility and IVF background: helpful for women conceiving after long-term treatment</li>
                <li>Focus on normal delivery: gentle, supportive care that prioritises natural birth wherever it is safe</li>
                <li>Continuity of care: the same team follows you from the first visit through postnatal check-ups</li>
                <li>Newborn support: paediatric consultations and vaccinations are available</li>
              </ul>

              <p className="text-gray-700">
                The clinic&apos;s philosophy is &quot;Her Health First&quot;.
                Your comfort, questions and choices stay at the centre of every
                decision.
              </p>
            </div>

            {/* Section 9 — Tips */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Healthier Pregnancy
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Register your pregnancy early and never skip antenatal visits.</li>
                <li>Take folic acid, iron and calcium as prescribed.</li>
                <li>Eat fresh fruit, vegetables, pulses, milk, nuts and whole grains.</li>
                <li>Drink plenty of water and avoid raw or unhygienic food.</li>
                <li>Walk daily or do light prenatal yoga if your doctor approves.</li>
                <li>Sleep 7–8 hours and rest on your left side in later pregnancy.</li>
                <li>Avoid tobacco, alcohol and unprescribed medicines.</li>
                <li>Track baby movements daily in the third trimester.</li>
                <li>Get vaccinated (tetanus and flu) as advised.</li>
                <li>Manage stress through breathing exercises, music or talking to family.</li>
                <li>Keep all reports and scans in one file for easy review.</li>
              </ul>
            </div>

            {/* Section 10 — When to Book */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Book a Consultation?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>As soon as you get a positive pregnancy test</li>
                <li>If you have any pre-existing health condition</li>
                <li>If you have had a pregnancy loss or complication before</li>
                <li>If your reports show any abnormal value</li>
                <li>If you are unsure about a symptom, since a quick check-up is always safer</li>
              </ul>
            </div>

            {/* Section 11 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment Today
              </h2>

              <p className="mb-6 text-black">
                Do not ignore warning signs or delay your check-up. Get expert
                guidance for a safe pregnancy and healthy baby.
              </p>

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

            {/* Section 12 — FAQs */}
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
