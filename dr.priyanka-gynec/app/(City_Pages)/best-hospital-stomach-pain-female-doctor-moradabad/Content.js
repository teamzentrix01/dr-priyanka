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

export default function BestHospitalForStomachPainFemaleDoctorMoradabad() {
  const faqs = [
    {
      q: "Which is the best hospital for stomach pain with a female doctor in Moradabad?",
      a: "Dr. Priyanka Gynaec, led by Dr. Priyanka Pachauri, is a trusted women's health centre in Gandhi Nagar, Moradabad.",
    },
    {
      q: "Is lower stomach pain in women always gynaecological?",
      a: "No. It can also be digestive or urinary, and a doctor can identify the exact cause.",
    },
    {
      q: "When should I see a gynaecologist for stomach pain?",
      a: "See one when pain is in the lower belly, linked to periods, or comes with bleeding or discharge.",
    },
    {
      q: "Can ovarian cysts cause stomach pain?",
      a: "Yes. They can cause one-sided pain, bloating or pressure, and sudden severe pain needs emergency care.",
    },
    {
      q: "Is period pain normal?",
      a: "Mild cramps are common, but pain that disrupts daily life should be checked for conditions like endometriosis.",
    },
    {
      q: "Does Dr. Priyanka offer laparoscopic surgery?",
      a: "Yes. The centre offers 3D laparoscopic procedures including cystectomy, myomectomy, hysterectomy and endometriosis surgery.",
    },
    {
      q: "Is stomach pain during pregnancy dangerous?",
      a: "Mild cramps can be normal, but severe pain or bleeding needs immediate medical attention.",
    },
    {
      q: "Can I consult online or by message first?",
      a: "You can reach the centre on WhatsApp for appointment queries, directions and quick questions.",
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
                Best Hospital for Stomach Pain with a Female Doctor in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Stomach pain in women is rarely simple. It can come from the
                digestive system, but very often it comes from the uterus,
                ovaries, fallopian tubes or pelvic organs. Many women feel shy or
                uncomfortable describing this pain to a male doctor, so they delay
                treatment and suffer for months.
              </p>

              <p className="mb-4 text-gray-700">
                If you are searching for the best hospital for stomach pain with a
                female doctor in Moradabad, this guide explains what to look for,
                which conditions cause the pain, and how Dr. Priyanka Pachauri at
                Dr. Priyanka Gynaec can help.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Prefer a Female Doctor for Stomach Pain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Comfort and privacy:</strong> Women can talk openly
                  about periods, intimacy, discharge and pregnancy without
                  hesitation.
                </li>
                <li>
                  <strong>Better communication:</strong> A female doctor often
                  picks up on details women hesitate to share, which leads to more
                  accurate diagnosis.
                </li>
                <li>
                  <strong>Gentle examinations:</strong> Pelvic and abdominal
                  examinations feel less stressful in the hands of a woman
                  specialist.
                </li>
                <li>
                  <strong>Understanding of women&apos;s health stages:</strong>{" "}
                  Puberty, pregnancy, postpartum and menopause each bring
                  different types of pain.
                </li>
                <li>
                  <strong>Trust and continuity:</strong> Long-term conditions
                  such as endometriosis or fibroids need a doctor you feel safe
                  returning to.
                </li>
                <li>
                  <strong>Cultural comfort:</strong> Many families in and around
                  Moradabad prefer a lady doctor for any lower abdominal
                  complaint.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is It Stomach Pain or Pelvic Pain?
              </h2>

              <p className="mb-4 text-gray-700">
                Women often call every pain below the ribs &quot;stomach
                pain.&quot; Doctors separate it into two groups.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Upper abdominal pain (usually digestive):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Burning or gnawing pain after meals.</li>
                <li>Bloating, acidity and sour belching.</li>
                <li>
                  Pain linked to gastritis, ulcers, gallstones or acid reflux.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lower abdominal or pelvic pain (often gynaecological):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cramping that appears with your periods.</li>
                <li>Pain on one side, below the navel.</li>
                <li>Pain during intercourse.</li>
                <li>
                  Pain with heavy bleeding, spotting or unusual discharge.
                </li>
                <li>A heavy, dragging feeling in the lower belly.</li>
              </ul>

              <p className="text-gray-700">
                A gynaecologist is the right first doctor when the pain sits low
                in the abdomen, is linked to your menstrual cycle, or occurs with
                bleeding or discharge.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Gynaecological Causes of Stomach Pain in Women
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Painful Periods (Dysmenorrhea)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cramps start just before or during your period.</li>
                <li>Pain may spread to the back and thighs.</li>
                <li>
                  Mild cramps are common, but pain that stops daily work needs
                  evaluation.
                </li>
                <li>
                  It can be linked to an underlying condition like endometriosis.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tissue similar to the uterine lining grows outside the uterus.
                </li>
                <li>
                  Causes severe period pain, chronic pelvic pain and pain during
                  intercourse.
                </li>
                <li>Can affect fertility if left untreated.</li>
                <li>
                  Often misdiagnosed for years as &quot;normal period pain.&quot;
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fluid-filled sacs on the ovary.</li>
                <li>
                  Many are harmless, but some cause sharp one-sided pain,
                  bloating or pressure.
                </li>
                <li>
                  Sudden severe pain may signal a twisted or ruptured cyst, which
                  is an emergency.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Non-cancerous growths in the uterus.</li>
                <li>
                  Cause heavy periods, pelvic pressure, back pain and frequent
                  urination.
                </li>
                <li>
                  Can be treated with uterus-preserving surgery in suitable cases.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection of the uterus, tubes or ovaries.</li>
                <li>
                  Causes lower abdominal pain, fever, foul discharge and pain
                  during intercourse.
                </li>
                <li>Needs prompt treatment to protect fertility.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. PCOS (Polycystic Ovary Syndrome)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular periods, weight changes, acne and excess hair growth.</li>
                <li>May bring dull pelvic discomfort and bloating.</li>
                <li>Also affects the chances of conceiving.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Ectopic Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A pregnancy that grows outside the uterus.</li>
                <li>
                  Causes one-sided pain, spotting and sometimes dizziness or
                  fainting.
                </li>
                <li>A medical emergency, so seek care immediately.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Pregnancy-Related Pain
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild cramping can be normal in early pregnancy.</li>
                <li>Severe pain, bleeding or leaking fluid should never be ignored.</li>
                <li>Regular antenatal check-ups catch problems early.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Urinary Tract Infection (UTI)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Burning urination, urgency and lower belly pain.</li>
                <li>Easily treated when diagnosed early.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Non-Gynaecological Causes
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Gastritis, acidity and ulcers.</li>
                <li>Irritable bowel syndrome and constipation.</li>
                <li>Appendicitis, kidney stones and hernia.</li>
                <li>
                  A good doctor rules these in or out and refers you to the right
                  specialist when needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: When to Seek Help Immediately
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait for an appointment if you notice any of these:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe, stabbing pain in the lower abdomen.</li>
                <li>Pain with fainting, dizziness or a racing heartbeat.</li>
                <li>Heavy vaginal bleeding soaking through pads quickly.</li>
                <li>Pain with a missed period or positive pregnancy test.</li>
                <li>High fever with abdominal pain and foul discharge.</li>
                <li>Persistent vomiting with severe belly pain.</li>
                <li>A hard, swollen or extremely tender abdomen.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                In an emergency, go to the nearest hospital emergency department
                without delay.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Look for in the Best Hospital for Stomach Pain in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Choosing the right place matters. Check these points:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A qualified female specialist with proven experience in
                  women&apos;s health.
                </li>
                <li>
                  Modern diagnostic tools such as high-resolution ultrasound.
                </li>
                <li>
                  Minimally invasive surgery options like laparoscopy to reduce
                  pain and recovery time.
                </li>
                <li>
                  Clear explanations of your diagnosis and every treatment choice.
                </li>
                <li>
                  Follow-up care so you are not left alone after the first visit.
                </li>
                <li>
                  Easy access with clear contact options and a convenient location.
                </li>
                <li>
                  Respect for your choices and your comfort at every step.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri and Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility centre
                in Moradabad led by Dr. Priyanka Pachauri. The centre follows the
                philosophy &quot;Her Health First&quot;: listening carefully
                first, then using advanced technology with empathy and patience.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Areas of care:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gynaecology and 3D laparoscopy.</li>
                <li>Fertility and IVF.</li>
                <li>Pregnancy and birthing care.</li>
                <li>Antenatal services.</li>
                <li>Normal delivery.</li>
                <li>Endometriosis surgery.</li>
                <li>Paediatric care.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Technology available at the centre:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery.</li>
                <li>3D and 4D ultrasound machine.</li>
                <li>Time-lapse imaging incubator for embryo monitoring.</li>
                <li>AI-powered semen analysis and DNA integrity testing.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why patients trust the centre:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Expertise with heart:</strong> The site highlights gold
                  medal credentials, international fellowships and recognition in
                  laparoscopy, fertility treatment and endometriosis care.
                </li>
                <li>
                  <strong>Continuity of care:</strong> A team that knows your
                  history and supports you from the first visit through every
                  follow-up.
                </li>
                <li>
                  <strong>Patient-first approach:</strong> Families return and
                  recommend the centre because they feel heard.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Stomach Pain Is Diagnosed
              </h2>

              <p className="mb-4 text-gray-700">
                A careful diagnosis is the foundation of good treatment. A typical
                visit may include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history:</strong> When the pain started, where
                  it is, how severe it is, and how it relates to your periods.
                </li>
                <li>
                  <strong>Physical examination:</strong> A gentle abdominal and,
                  if needed, pelvic examination.
                </li>
                <li>
                  <strong>Ultrasound scan:</strong> To check the uterus, ovaries,
                  tubes and surrounding structures.
                </li>
                <li>
                  <strong>Blood and urine tests:</strong> To look for infection,
                  anaemia, hormonal issues or pregnancy.
                </li>
                <li>
                  <strong>Diagnostic laparoscopy or hysteroscopy:</strong> Only
                  when needed, to look inside the pelvis or uterus directly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options Available
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends entirely on the cause. Your doctor may recommend
                one or more of the following.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical management:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain relief and anti-inflammatory medicines.</li>
                <li>
                  Hormonal treatment for period pain, endometriosis or PCOS.
                </li>
                <li>Antibiotics for infections such as PID or UTI.</li>
                <li>Lifestyle and diet guidance.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Minimally invasive (keyhole) surgery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic cystectomy:</strong> Removes ovarian cysts
                  while preserving fertility.
                </li>
                <li>
                  <strong>Laparoscopic myomectomy:</strong> Removes fibroids while
                  preserving the uterus.
                </li>
                <li>
                  <strong>Endometriosis surgery:</strong> Excision of
                  endometriosis tissue for pelvic pain relief.
                </li>
                <li>
                  <strong>Laparoscopic hysterectomy:</strong> Used when removal of
                  the uterus is the best option.
                </li>
                <li>
                  <strong>Hysteroscopic polypectomy:</strong> Removes uterine
                  polyps without cuts.
                </li>
                <li>
                  <strong>Sacrocolpopexy:</strong> Repairs uterine and vaginal
                  vault prolapse.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of laparoscopy:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Small incisions instead of a large cut.</li>
                <li>Less pain after surgery.</li>
                <li>Shorter hospital stay.</li>
                <li>Faster return to daily life.</li>
                <li>Smaller scars.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Self-Care Tips While You Wait for Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                These steps can offer comfort, but they never replace a medical
                examination:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Keep a pain diary noting date, location, severity and triggers.
                </li>
                <li>Track your menstrual cycle and any spotting.</li>
                <li>Stay hydrated and eat light, balanced meals.</li>
                <li>Rest and avoid heavy lifting during severe cramps.</li>
                <li>Use gentle warmth on the lower belly for period cramps.</li>
                <li>Avoid taking strong painkillers repeatedly without advice.</li>
                <li>Do not ignore pain that returns every month.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Care for Women at Different Life Stages
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teenagers:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Severe period pain is not something to &quot;just tolerate.&quot;
                </li>
                <li>Early evaluation prevents long-term problems.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women planning pregnancy:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain can signal conditions such as endometriosis, fibroids or
                  tubal problems.
                </li>
                <li>Early treatment protects fertility.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnant women:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular antenatal visits catch complications early.</li>
                <li>
                  Report severe pain, bleeding or reduced baby movements
                  immediately.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                New mothers:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Persistent pain after delivery needs assessment.</li>
                <li>Postnatal check-ups support healthy recovery.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women over 40:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy bleeding, bloating and pelvic pressure deserve a prompt
                  check.
                </li>
                <li>
                  Fibroids, cysts and prolapse become more common with age.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                FAQs
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
