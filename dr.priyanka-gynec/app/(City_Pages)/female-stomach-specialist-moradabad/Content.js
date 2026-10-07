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

export default function FemaleStomachSpecialistMoradabad() {
  const faqs = [
    {
      q: "Who is a female stomach specialist in Moradabad?",
      a: "For women's pelvic and lower abdominal problems, Dr. Priyanka Pachauri is a trusted female gynaecologist in Moradabad.",
    },
    {
      q: "Is Dr. Priyanka a gastroenterologist?",
      a: "No. She is a gynaecologist. She can guide you to the right specialist for digestive causes.",
    },
    {
      q: "Can gynaecological problems cause stomach symptoms?",
      a: "Yes. PCOS, cysts, fibroids and endometriosis can cause bloating and belly pain.",
    },
    {
      q: "Why do I get bloating before periods?",
      a: "Hormonal changes commonly cause it. Severe or constant bloating should be checked.",
    },
    {
      q: "When should I see a lady doctor?",
      a: "See her if symptoms are persistent, linked to periods, or come with bleeding or discharge.",
    },
    {
      q: "Will I need surgery?",
      a: "Not always. Many conditions are treated with medicines or monitoring.",
    },
    {
      q: "Is my consultation private?",
      a: "Yes. Your details are treated with privacy and respect.",
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
                Female Stomach Specialist in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;I need a stomach specialist, preferably a lady doctor.&quot;
                Many women search for this in Moradabad. The need is real.
                Stomach discomfort, bloating, cramps and heaviness are among the
                most common complaints women bring to a clinic. Many women also
                feel more at ease speaking to a female doctor about symptoms
                linked to periods, pregnancy or intimate health.
              </p>

              <p className="mb-4 text-gray-700">
                But &quot;stomach problem&quot; can mean very different things.
                This guide explains which specialist treats what, how a
                woman&apos;s hormones and reproductive organs affect the belly,
                and when to consult Dr. Priyanka Pachauri, a gynaecologist at
                Dr. Priyanka Gynaec in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does &quot;Stomach Specialist&quot; Really Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                In medical terms, a stomach specialist is a gastroenterologist.
                They treat the digestive system: stomach, intestines, liver and
                related organs.
              </p>

              <p className="mb-4 text-gray-700">
                However, many women&apos;s &quot;stomach&quot; complaints
                actually involve the reproductive system. The uterus, ovaries and
                bowel sit close together, and their pain signals overlap. So the
                right doctor depends on the pattern of your symptoms.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A gynaecologist is the right specialist when your symptoms are
                linked to:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your menstrual cycle.</li>
                <li>Pregnancy or a missed period.</li>
                <li>Lower belly or pelvic pain.</li>
                <li>Pain during intercourse.</li>
                <li>Abnormal bleeding or discharge.</li>
                <li>A lump or heaviness in the lower abdomen.</li>
                <li>Bloating together with irregular periods.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A gastroenterologist is the right specialist when your symptoms
                are linked to:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Acid reflux or burning in the upper stomach.</li>
                <li>Pain after meals, nausea or vomiting.</li>
                <li>Black stools or blood in stool.</li>
                <li>
                  Long-term diarrhoea or constipation with weight loss.
                </li>
                <li>Jaundice or suspected liver problems.</li>
              </ul>

              <p className="text-gray-700">
                An important clarification: Dr. Priyanka Pachauri is a
                gynaecologist. She does not practise as a gastroenterologist.
                What she can do is evaluate whether your stomach complaint has a
                gynaecological cause and guide you to the right specialist if it
                does not.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Often Mistake Gynaecological Problems for Stomach
                Problems
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The uterus, ovaries and intestines lie close together in the
                  lower abdomen.
                </li>
                <li>
                  Nerves from these organs share pathways, so pain feels similar.
                </li>
                <li>
                  Hormonal changes affect digestion during the menstrual cycle.
                </li>
                <li>
                  Enlarged ovaries or fibroids can press on the bowel and
                  bladder.
                </li>
                <li>
                  Many women treat the symptom with antacids or painkillers for
                  months.
                </li>
                <li>
                  Embarrassment delays a proper gynaecological check.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Hormones Affect a Woman&apos;s Digestion
              </h2>

              <p className="mb-4 text-gray-700">
                Hormones change through the month, and the gut responds.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Before periods:</strong> bloating, gas, constipation or
                  loose stools are common.
                </li>
                <li>
                  <strong>During periods:</strong> cramping may come with nausea
                  or diarrhoea.
                </li>
                <li>
                  <strong>During ovulation:</strong> some women feel one-sided
                  lower belly pain or bloating.
                </li>
                <li>
                  <strong>In pregnancy:</strong> nausea, acidity, heartburn and
                  constipation are frequent.
                </li>
                <li>
                  <strong>Around menopause:</strong> bloating and digestive
                  changes may increase.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                These patterns are very common, but severe or persistent symptoms
                deserve medical review.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Women&apos;s Health Conditions That Cause Stomach-Type Symptoms
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Polycystic Ovary Syndrome (PCOS)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular periods and weight gain.</li>
                <li>Bloating and pelvic discomfort.</li>
                <li>May affect fertility if untreated.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe period pain and chronic pelvic pain.</li>
                <li>Painful bowel movements and bloating.</li>
                <li>
                  Frequently mistaken for irritable bowel syndrome.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fullness, bloating and one-sided lower belly pain.</li>
                <li>Most are benign, but they should be checked.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heaviness and a swollen lower abdomen.</li>
                <li>Pressure on the bowel causing constipation.</li>
                <li>Heavy periods.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pelvic Inflammatory Disease
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Lower abdominal pain with fever and discharge.</li>
                <li>Needs timely treatment.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Prolapse
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Dragging sensation in the lower belly.</li>
                <li>Can cause bowel and urinary difficulty.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Early Pregnancy
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Nausea, vomiting, bloating and cramping.</li>
                <li>Severe one-sided pain needs urgent care.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Suggest You Should See a Lady Gynaecologist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bloating that does not improve with diet changes.</li>
                <li>Lower belly pain that repeats every month.</li>
                <li>Heavy, painful or irregular periods.</li>
                <li>Pain during intercourse.</li>
                <li>
                  A feeling of fullness or a visible swelling in the lower belly.
                </li>
                <li>Constipation along with pelvic heaviness.</li>
                <li>Frequent urination with pelvic pressure.</li>
                <li>Unusual vaginal discharge.</li>
                <li>Missed period with stomach discomfort.</li>
                <li>Trouble conceiving along with pelvic pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Suggest You Should See a Digestive Specialist
              </h2>

              <p className="mb-4 text-gray-700">
                Being honest about this helps you reach the right doctor sooner.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Burning or sour taste in the upper stomach.</li>
                <li>Pain that clearly follows meals.</li>
                <li>Repeated vomiting.</li>
                <li>Blood in stool or black stools.</li>
                <li>Unexplained weight loss.</li>
                <li>Difficulty swallowing.</li>
                <li>Yellow eyes or skin.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Go to the nearest hospital emergency department if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe abdominal pain.</li>
                <li>Fainting or dizziness with pain.</li>
                <li>Heavy bleeding soaking pads quickly.</li>
                <li>High fever with severe belly pain.</li>
                <li>Severe pain during pregnancy.</li>
                <li>A hard abdomen with repeated vomiting.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Meet Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, safe-motherhood focused care. Her practice covers
                antenatal and postnatal care, high-risk pregnancies, laparoscopic
                gynaecological surgery and menstrual disorder treatment.
              </p>

              <p className="mb-4 text-gray-700">
                The clinic follows a &quot;Her Health First&quot; philosophy:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>She listens first, then advises tests or treatment.</li>
                <li>Options are explained in simple, clear language.</li>
                <li>Surgery is advised only when it is truly needed.</li>
                <li>Privacy and comfort come first.</li>
                <li>Care continues through follow-up visits.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                For women who want to discuss sensitive symptoms with a female
                doctor, this environment makes it easier to speak openly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services Related to Women&apos;s Pelvic and Abdominal Health
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec offers:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Gynaecology and laparoscopy:</strong> expert 3D
                  laparoscopic care.
                </li>
                <li>
                  <strong>Laparoscopic cystectomy:</strong> keyhole removal of
                  ovarian cysts while preserving fertility.
                </li>
                <li>
                  <strong>Laparoscopic myomectomy:</strong> uterus-preserving
                  fibroid surgery.
                </li>
                <li>
                  <strong>Endometriosis surgery:</strong> removal of
                  endometriosis tissue for pelvic pain relief.
                </li>
                <li>
                  <strong>Diagnostic hysteroscopy and polypectomy:</strong>{" "}
                  gentle examination and treatment inside the uterus.
                </li>
                <li>
                  <strong>Sacrocolpopexy:</strong> repair of uterine and vaginal
                  vault prolapse.
                </li>
                <li>
                  <strong>Fertility and IVF:</strong> personalised treatment
                  plans.
                </li>
                <li>
                  <strong>Pregnancy, antenatal and normal delivery care.</strong>
                </li>
                <li>
                  <strong>Paediatric care:</strong> newborn and child
                  consultations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology for Accurate Diagnosis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery system.</li>
                <li>3D and 4D ultrasound for detailed pelvic imaging.</li>
                <li>Time-lapse imaging incubator for embryo monitoring.</li>
                <li>AI-powered semen analysis and DNA integrity testing.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A pelvic ultrasound is often the first step for women with
                persistent belly symptoms. It can quickly show or rule out cysts,
                fibroids and other pelvic changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>History:</strong> symptoms, diet, bowel and urine
                  habits, periods, pregnancies and medicines.
                </li>
                <li>
                  <strong>Examination:</strong> a gentle abdominal and pelvic
                  check, always with your consent.
                </li>
                <li>
                  <strong>Tests:</strong> ultrasound, blood or urine tests where
                  needed.
                </li>
                <li>
                  <strong>Diagnosis:</strong> the probable cause explained
                  clearly.
                </li>
                <li>
                  <strong>Treatment plan:</strong> medicines, lifestyle advice,
                  minor procedures or surgery.
                </li>
                <li>
                  <strong>Referral guidance:</strong> if the cause looks
                  digestive, you are directed to the right specialist.
                </li>
                <li>
                  <strong>Follow-up:</strong> a review to check progress.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of your last period.</li>
                <li>Keep a symptom diary for one to two cycles.</li>
                <li>
                  Record when bloating or pain worsens during the month.
                </li>
                <li>Note food triggers, if any.</li>
                <li>Carry old scans, reports and prescriptions.</li>
                <li>List medicines, supplements and allergies.</li>
                <li>Write down your questions.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Practical Tips for a Comfortable Stomach
              </h2>

              <p className="mb-4 text-gray-700">
                These tips support general wellbeing and do not replace medical
                care:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Eat small, regular, balanced meals.</li>
                <li>
                  Include fibre-rich foods such as vegetables, fruit and whole
                  grains.
                </li>
                <li>Drink enough water through the day.</li>
                <li>Reduce excess oily, spicy and processed food.</li>
                <li>Walk or exercise regularly.</li>
                <li>
                  Manage stress through rest, breathing exercises or yoga.
                </li>
                <li>
                  Avoid long-term self-medication with antacids or painkillers.
                </li>
                <li>Maintain a healthy weight.</li>
                <li>Keep a regular sleep schedule.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches You May Be Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Monitoring:</strong> for small, harmless cysts or
                  fibroids.
                </li>
                <li>
                  <strong>Medicines:</strong> for pain, infection, hormonal
                  imbalance or heavy bleeding.
                </li>
                <li>
                  <strong>Lifestyle plans:</strong> diet and exercise guidance,
                  especially for PCOS.
                </li>
                <li>
                  <strong>Minor procedures:</strong> such as hysteroscopy for
                  polyps.
                </li>
                <li>
                  <strong>Keyhole surgery:</strong> for cysts, fibroids,
                  endometriosis or prolapse when required.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                In suitable cases, keyhole surgery means smaller scars, less pain
                and quicker recovery than open surgery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths About Women&apos;s Stomach Problems
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Every stomach problem in a woman is gas
                  or acidity. <strong>Fact:</strong> Reproductive conditions
                  often cause similar symptoms.
                </li>
                <li>
                  <strong>Myth:</strong> Bloating before periods is always
                  normal. <strong>Fact:</strong> Mild bloating is common, but
                  severe or constant bloating needs evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> Painkillers are enough for
                  period-related belly pain. <strong>Fact:</strong> Repeated need
                  for painkillers is a reason to find the cause.
                </li>
                <li>
                  <strong>Myth:</strong> Gynaecological examination is painful.{" "}
                  <strong>Fact:</strong> It is done gently, with consent and
                  privacy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Female Doctor in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Look for relevant qualifications and experience.</li>
                <li>Choose a doctor who listens and explains clearly.</li>
                <li>Check for modern ultrasound and laparoscopic facilities.</li>
                <li>Prefer honest advice without pressure to operate.</li>
                <li>Make sure privacy and comfort are respected.</li>
                <li>Read patient experiences.</li>
                <li>Consider the clinic&apos;s location and accessibility.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A patient shared on the clinic&apos;s website that they felt
                comfortable and understood from the first visit, with every step
                explained clearly.
              </p>
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