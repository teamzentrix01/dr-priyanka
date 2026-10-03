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

export default function LadyDoctorMoradabadForTummyPain() {
  const faqs = [
    {
      q: "Who is a good lady doctor in Moradabad for tummy pain?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a trusted lady gynaecologist in Moradabad.",
    },
    {
      q: "What causes tummy pain in women?",
      a: "Common causes are period cramps, cysts, fibroids, endometriosis, infections, and bowel or urinary problems.",
    },
    {
      q: "Does Dr. Priyanka treat digestive tummy problems?",
      a: "She treats gynaecological causes. For digestive causes, she can guide you to the right specialist.",
    },
    {
      q: "Is tummy pain during periods normal?",
      a: "Mild cramps are common. Severe pain that stops daily activities should be checked.",
    },
    {
      q: "Is tummy pain normal after delivery?",
      a: "Mild cramping is common early on. Pain with fever, foul discharge or heavy bleeding needs prompt care.",
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
                Lady Doctor in Moradabad for Tummy Pain
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;My tummy hurts.&quot; Women say this about many different
                pains: a cramp before periods, a dull ache after delivery, a
                sharp twinge on one side, or a constant heaviness that will not go
                away. Because the lower tummy holds the uterus, ovaries, bladder
                and bowel, the cause is not always easy to guess.
              </p>

              <p className="mb-4 text-gray-700">
                Many women feel more at ease describing tummy pain to a lady
                doctor, especially when it relates to periods, pregnancy or
                intimate health. This guide explains the common causes, the
                warning signs and how to consult Dr. Priyanka Pachauri, a lady
                gynaecologist at Dr. Priyanka Gynaec in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why See a Lady Doctor for Tummy Pain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Greater comfort during abdominal and pelvic examination.
                </li>
                <li>Easier conversation about periods, intercourse and discharge.</li>
                <li>
                  Understanding of how pain links to the menstrual cycle.
                </li>
                <li>Less embarrassment and hesitation.</li>
                <li>
                  A private, respectful setting where you can speak freely.
                </li>
                <li>
                  Access to ultrasound and keyhole procedures when needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Doctor Is Right for Your Tummy Pain?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A lady gynaecologist is the right choice when tummy pain is:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>In the lower belly or pelvis.</li>
                <li>Linked to periods or ovulation.</li>
                <li>Present during or after intercourse.</li>
                <li>Seen with abnormal bleeding or discharge.</li>
                <li>Associated with a missed period or pregnancy.</li>
                <li>Accompanied by swelling or a lump in the lower belly.</li>
                <li>Seen after delivery or a C-section.</li>
                <li>Paired with bloating and irregular periods.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A gastroenterologist or physician is the right choice when tummy
                pain is:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Burning in the upper stomach with acid reflux.</li>
                <li>Linked to meals, nausea or repeated vomiting.</li>
                <li>Seen with black stools or blood in stool.</li>
                <li>
                  Accompanied by long-term diarrhoea or constipation with weight
                  loss.
                </li>
                <li>Associated with yellow eyes or skin.</li>
              </ul>

              <p className="text-gray-700">
                An honest note: Dr. Priyanka Pachauri is a gynaecologist, not a
                digestive specialist. She can tell you whether your tummy pain
                looks gynaecological and guide you onward if it does not.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tummy Pain at Different Stages of Life
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teenage Years
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Period cramps are the most common cause.</li>
                <li>Irregular periods in the first few years are common.</li>
                <li>Very painful periods should still be checked.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                20s and 30s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovarian cysts, PCOS and endometriosis are frequent.</li>
                <li>Pelvic infections can occur.</li>
                <li>Pregnancy-related causes must be considered.</li>
                <li>Fertility concerns may appear.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild stretching or pulling is often normal.</li>
                <li>Severe pain, bleeding or fever needs prompt review.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cramping as the uterus shrinks is common in the first days.
                </li>
                <li>
                  Pain with fever, foul discharge or heavy bleeding needs review.
                </li>
                <li>C-section wound pain should gradually improve.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                40s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fibroids, adenomyosis and heavy bleeding become more common.</li>
                <li>Perimenopausal hormone changes begin.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Menopause
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Any new pelvic pain deserves examination.</li>
                <li>Postmenopausal bleeding needs urgent evaluation.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Gynaecological Causes of Tummy Pain
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Period Cramps (Dysmenorrhoea)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain starts just before or at the start of bleeding.</li>
                <li>Usually settles within a few days.</li>
                <li>
                  Pain that stops daily routine is not something to ignore.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ovulation Pain
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A short, one-sided ache in mid-cycle.</li>
                <li>Usually mild and brief.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fluid-filled sacs on an ovary.</li>
                <li>May cause one-sided pain, fullness or bloating.</li>
                <li>Twisting or rupture can cause sudden severe pain.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Non-cancerous growths in the uterus.</li>
                <li>Cause heaviness, pressure and heavy periods.</li>
                <li>Large ones may cause visible swelling.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tissue like the uterine lining grows outside the uterus.
                </li>
                <li>
                  Causes severe period pain and ongoing pelvic pain.
                </li>
                <li>
                  May cause pain during intercourse and bowel movements.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>The uterine lining grows into the muscle wall.</li>
                <li>Causes heavy, painful periods.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular periods, weight gain and bloating.</li>
                <li>May cause pelvic discomfort.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection of the uterus, tubes or ovaries.</li>
                <li>Causes pain, fever and unusual discharge.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Prolapse
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Weak pelvic support.</li>
                <li>Dragging heaviness in the lower tummy.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Other Common Causes of Tummy Pain
              </h2>

              <p className="mb-4 text-gray-700">
                These may need a different specialist.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Urinary tract infection: burning urine and frequent urge.</li>
                <li>
                  Kidney stones: severe pain that may spread from the back.
                </li>
                <li>Constipation and gas: cramping and bloating.</li>
                <li>
                  Irritable bowel syndrome: cramping with loose or hard stools.
                </li>
                <li>
                  Appendicitis: pain moving to the lower right side, which is
                  urgent if severe.
                </li>
                <li>Hernia: a bulge in the groin or lower tummy.</li>
                <li>
                  Stress and muscle tension: tight abdominal and pelvic muscles.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: When to See a Doctor Soon
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Tummy pain lasting more than a few days.</li>
                <li>Pain that returns every month.</li>
                <li>Heavy, irregular or prolonged periods.</li>
                <li>Bleeding between periods.</li>
                <li>Pain during intercourse.</li>
                <li>Persistent bloating or swelling.</li>
                <li>Unusual or foul-smelling discharge.</li>
                <li>Burning urination with pelvic pain.</li>
                <li>A missed period with tummy pain.</li>
                <li>Repeated need for painkillers.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Signs: Go to the Hospital Immediately
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe tummy pain.</li>
                <li>Fainting, dizziness or cold, clammy skin.</li>
                <li>Heavy bleeding soaking pads quickly.</li>
                <li>High fever with severe pain.</li>
                <li>Severe pain with a positive pregnancy test.</li>
                <li>Vomiting blood or passing black stools.</li>
                <li>Chest pain or pain spreading to the arm or jaw.</li>
                <li>A hard, rigid tummy with repeated vomiting.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
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
                <li>She listens first before advising tests or treatment.</li>
                <li>Options are explained in simple, clear language.</li>
                <li>Surgery is advised only when truly needed.</li>
                <li>Privacy and comfort are respected.</li>
                <li>Care continues through follow-up visits.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services Related to Tummy Pain in Women
              </h2>

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
                  <strong>Laparoscopic hysterectomy:</strong> minimally invasive
                  uterus removal.
                </li>
                <li>
                  <strong>Endometriosis surgery:</strong> removal of
                  endometriosis for pelvic pain relief.
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
                <li>3D and 4D ultrasound for detailed imaging.</li>
                <li>Time-lapse imaging incubator for embryo monitoring.</li>
                <li>AI-powered semen analysis and DNA integrity testing.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A pelvic ultrasound is often the first test for tummy pain in
                women. It can quickly show cysts, fibroids and other pelvic
                changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>History:</strong> pain pattern, periods, pregnancies,
                  bowel and urine habits.
                </li>
                <li>
                  <strong>Examination:</strong> a gentle tummy and pelvic check,
                  always with your consent.
                </li>
                <li>
                  <strong>Tests:</strong> ultrasound, blood or urine tests where
                  needed.
                </li>
                <li>
                  <strong>Diagnosis:</strong> the probable cause explained in
                  simple words.
                </li>
                <li>
                  <strong>Treatment plan:</strong> medicines, lifestyle advice,
                  minor procedures or surgery.
                </li>
                <li>
                  <strong>Referral guidance:</strong> if the cause is digestive,
                  you are directed to the right specialist.
                </li>
                <li>
                  <strong>Follow-up:</strong> a review to check progress.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of your last period.</li>
                <li>Keep a short pain diary for one or two cycles.</li>
                <li>
                  Describe the pain: sharp, dull, cramping or burning.
                </li>
                <li>
                  Mention triggers such as meals, movement or intercourse.
                </li>
                <li>Carry previous reports, scans and prescriptions.</li>
                <li>List medicines, supplements and allergies.</li>
                <li>Mention past surgeries and pregnancies.</li>
                <li>Write your questions in advance.</li>
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
                  endometriosis or prolapse when needed.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                In suitable cases, keyhole surgery means smaller scars, less pain
                and quicker recovery than open surgery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care Tips for Mild Tummy Pain
              </h2>

              <p className="mb-4 text-gray-700">
                These steps may bring comfort but never replace medical advice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Apply a warm compress to the lower tummy.</li>
                <li>Rest during severe cramps.</li>
                <li>Drink plenty of water.</li>
                <li>Eat light, fibre-rich meals.</li>
                <li>Try gentle walking or stretching.</li>
                <li>Do not hold urine for long periods.</li>
                <li>Avoid long-term painkiller use without advice.</li>
                <li>Track your symptoms in a diary.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths About Tummy Pain in Women
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Painful periods are normal for every
                  woman. <strong>Fact:</strong> Severe pain should be checked.
                </li>
                <li>
                  <strong>Myth:</strong> Tummy pain is always gas.{" "}
                  <strong>Fact:</strong> Cysts, fibroids and infections can feel
                  similar.
                </li>
                <li>
                  <strong>Myth:</strong> Pain after delivery is always normal.{" "}
                  <strong>Fact:</strong> Pain with fever or heavy bleeding needs
                  prompt care.
                </li>
                <li>
                  <strong>Myth:</strong> A pelvic examination is always painful.{" "}
                  <strong>Fact:</strong> It is done gently, with consent and
                  privacy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Lady Doctor in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Check qualifications and practical experience.</li>
                <li>Choose a doctor who listens and explains patiently.</li>
                <li>
                  Look for modern ultrasound and laparoscopic facilities.
                </li>
                <li>Prefer honest advice without pressure to operate.</li>
                <li>Make sure privacy and comfort are respected.</li>
                <li>Read patient experiences.</li>
                <li>Consider location and convenience.</li>
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
