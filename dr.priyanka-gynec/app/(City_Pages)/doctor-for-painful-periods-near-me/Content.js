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

export default function DoctorForPainfulPeriodsMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for painful periods?",
      a: "A gynaecologist. Dr. Priyanka Pachauri treats period pain in Moradabad.",
    },
    {
      q: "Are painful periods normal?",
      a: "Mild cramps are common. Severe pain that disrupts daily life is not normal.",
    },
    {
      q: "What is the most common cause of severe period pain?",
      a: "Endometriosis, adenomyosis and fibroids are common causes.",
    },
    {
      q: "When should I see a doctor?",
      a: "When pain is severe, worsening, or not relieved by simple medicines.",
    },
    {
      q: "Can painful periods affect fertility?",
      a: "Some causes, like endometriosis, can. Early treatment helps.",
    },
    {
      q: "Which tests are done for period pain?",
      a: "Usually a pelvic ultrasound, with blood tests or laparoscopy if needed.",
    },
    {
      q: "Can period pain be treated without surgery?",
      a: "Often yes, with medicines and hormonal treatment. Surgery is for selected cases.",
    },
    {
      q: "Is it safe to take painkillers every month?",
      a: "Occasional use is fine. Regular use needs a doctor's advice and a search for the cause.",
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
                Doctor for Painful Periods Near Me: Causes, Treatment & Relief
                in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Mild cramps before or during a period are common. But pain that
                makes you miss college or work, lie curled up in bed, or depend
                on painkillers every month is not something you must simply put
                up with.
              </p>

              <p className="mb-4 text-gray-700">
                Many women in Moradabad suffer for years because they are told
                &quot;it is normal&quot; or &quot;it will settle after
                marriage.&quot; In reality, severe period pain often has a
                treatable cause, such as endometriosis, fibroids or hormonal
                imbalance. Finding it early protects your comfort and your
                future fertility.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains why periods hurt, when pain is a warning
                sign, and how a gynaecologist can help. It also shows how to
                consult Dr. Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Cramps or Something More?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Usually normal
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild to moderate cramping in the lower belly.
                </li>
                <li>Starts a day before or with the period.</li>
                <li>Improves within 2–3 days.</li>
                <li>
                  Eases with rest, warmth or a simple painkiller.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Not normal, get it checked
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain that stops daily activity.
                </li>
                <li>
                  Pain that keeps getting worse over the years.
                </li>
                <li>
                  Pain that starts long before or continues after bleeding.
                </li>
                <li>
                  Pain that does not improve with regular painkillers.
                </li>
                <li>
                  Pain along with very heavy bleeding.
                </li>
                <li>
                  Pain during intercourse, urination or bowel movements.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Two Types of Period Pain
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Primary Dysmenorrhea
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain with no underlying disease.</li>
                <li>
                  Begins in the teens, soon after periods start.
                </li>
                <li>
                  Caused by natural chemicals (prostaglandins) that make the
                  uterus contract.
                </li>
                <li>
                  Often improves with age or after childbirth.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Secondary Dysmenorrhea
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain caused by a condition in the pelvic organs.
                </li>
                <li>
                  Usually starts later, in the 20s, 30s or 40s.
                </li>
                <li>Tends to worsen with time.</li>
                <li>Needs proper diagnosis and treatment.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Painful Periods
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tissue like the uterine lining grows outside the uterus.
                </li>
                <li>
                  Causes severe cramps, pelvic pain, pain during intercourse and
                  difficulty conceiving.
                </li>
                <li>
                  Often missed for years, so pain gets dismissed as
                  &quot;normal&quot;.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The uterine lining grows into the uterine wall.
                </li>
                <li>
                  Causes heavy, painful periods and a tender, enlarged uterus.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Non-cancerous muscle growths in the uterus.
                </li>
                <li>
                  Cause heavy bleeding, pressure and cramping.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular periods can lead to heavy, painful bleeding after a
                  long gap.
                </li>
                <li>
                  May come with acne, weight gain and excess hair growth.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Infection of the uterus, tubes and nearby tissues.
                </li>
                <li>
                  Causes pain, fever and foul-smelling discharge.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some cysts cause one-sided pain and heaviness around periods.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Uterine Polyps
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Small growths inside the uterus that can cause cramping and
                  irregular bleeding.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. IUD (Copper T)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Can increase cramping and bleeding, especially in the first
                  few months.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Other Factors
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Stress, poor sleep and lack of exercise.</li>
                <li>Very low body weight or obesity.</li>
                <li>Family history of period pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Often Come With Painful Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding or large clots.</li>
                <li>Nausea, vomiting or loose stools.</li>
                <li>Headache and dizziness.</li>
                <li>Backache and thigh pain.</li>
                <li>Bloating and breast tenderness.</li>
                <li>Pain during intercourse.</li>
                <li>
                  Pain when passing stools or urine during periods.
                </li>
                <li>Fatigue and mood changes.</li>
                <li>Difficulty in getting pregnant.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flag Signs: Do Not Delay
              </h2>

              <p className="mb-4 text-gray-700">
                Seek care quickly if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe pelvic pain.</li>
                <li>Pain with fever or foul discharge.</li>
                <li>
                  Bleeding that soaks a pad every hour.
                </li>
                <li>Fainting or extreme weakness.</li>
                <li>
                  Pain with a missed period, as pregnancy problems must be ruled
                  out.
                </li>
                <li>
                  Pain that keeps you from work or study every month.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Doctor?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain is not relieved by simple medicines.
                </li>
                <li>It is getting worse every year.</li>
                <li>
                  You miss school, college or work because of it.
                </li>
                <li>You are trying to conceive.</li>
                <li>Your periods are also heavy or irregular.</li>
                <li>You have painful intercourse.</li>
                <li>
                  The pain started after age 25 or suddenly changed in nature.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Painful Periods in
                Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                compassionate, listening-first care. Women visit from across the
                city and nearby towns.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Your pain is taken seriously:</strong> no dismissing it
                  as &quot;normal&quot;.
                </li>
                <li>
                  <strong>Advanced ultrasound:</strong> 3D and 4D imaging for a
                  detailed view of the uterus and ovaries.
                </li>
                <li>
                  <strong>3D laparoscopy:</strong> accurate diagnosis and
                  treatment of endometriosis and cysts through keyhole surgery.
                </li>
                <li>
                  <strong>Hysteroscopy:</strong> looks inside the uterus for
                  polyps and other causes.
                </li>
                <li>
                  <strong>Fertility-friendly care:</strong> treatments planned
                  to protect your future pregnancy.
                </li>
                <li>
                  <strong>All-in-one clinic:</strong> menstrual, fertility,
                  pregnancy and surgical care under one roof.
                </li>
                <li>
                  <strong>Location:</strong> A2, near Old Roadways, Gandhi
                  Nagar, Moradabad.
                </li>
                <li>
                  <strong>Easy booking:</strong> call, WhatsApp or email.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Cause of Period Pain Is Found
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: History
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  When the pain began and how it has changed.
                </li>
                <li>
                  Timing, severity and what helps.
                </li>
                <li>
                  Flow, cycle length and other symptoms.
                </li>
                <li>Past surgeries, infections and family history.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Abdominal and, when appropriate, pelvic examination.
                </li>
                <li>General health and blood pressure.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Tests and Scans
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic ultrasound, including 3D/4D where needed.
                </li>
                <li>Haemoglobin to check for anaemia.</li>
                <li>
                  Thyroid and hormone tests if periods are irregular.
                </li>
                <li>Infection tests if PID is suspected.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Advanced Procedures, If Needed
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diagnostic hysteroscopy for the uterine cavity.
                </li>
                <li>
                  Diagnostic laparoscopy to confirm endometriosis and treat it
                  in the same sitting.
                </li>
                <li>MRI in selected cases.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Painful Periods
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Pain Relief Medicines
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Anti-inflammatory painkillers, taken as prescribed and started
                  early in the cycle.
                </li>
                <li>Medicines for nausea if needed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Hormonal Treatment
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tablets, hormonal IUD or other options to lighten periods and
                  reduce pain.
                </li>
                <li>
                  Useful for endometriosis, adenomyosis and PCOS.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Treating the Underlying Cause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antibiotics for infection.</li>
                <li>
                  Medicines for fibroids or adenomyosis.
                </li>
                <li>
                  PCOS care with lifestyle changes and cycle regulation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Minimally Invasive Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Endometriosis excision: removes deposits and relieves pain.
                </li>
                <li>
                  Laparoscopic cystectomy: removes cysts while preserving the
                  ovary.
                </li>
                <li>
                  Laparoscopic myomectomy: removes fibroids and keeps the
                  uterus.
                </li>
                <li>
                  Hysteroscopic polypectomy: removes polyps without cuts.
                </li>
                <li>
                  <strong>Benefits:</strong> smaller cuts, less pain, faster
                  recovery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Fertility Support
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  If pain is linked with difficulty in conceiving, treatment is
                  planned with pregnancy in mind.
                </li>
                <li>
                  Options include ovulation induction, IUI and IVF when
                  required.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Lifestyle Support
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular exercise, balanced diet and stress control.
                </li>
                <li>Regular follow-up to track improvement.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Home Relief for Period Cramps
              </h2>

              <p className="mb-4 text-gray-700">
                These help mild, normal cramps and do not replace medical care
                for severe pain.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Apply a hot water bag to the lower belly.
                </li>
                <li>Take a warm bath.</li>
                <li>Gentle walking or yoga.</li>
                <li>Drink warm water, ginger or herbal tea.</li>
                <li>
                  Eat light, iron-rich meals.
                </li>
                <li>
                  Cut down on caffeine, salt and junk food.
                </li>
                <li>Get enough sleep.</li>
                <li>Practise deep breathing.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths About Painful Periods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Every woman has painful periods.{" "}
                  <strong>Fact:</strong> Mild discomfort is common, but severe
                  pain is not normal.
                </li>
                <li>
                  <strong>Myth:</strong> Pain will disappear after marriage or
                  childbirth. <strong>Fact:</strong> It may not, especially if a
                  condition like endometriosis is the cause.
                </li>
                <li>
                  <strong>Myth:</strong> Painkillers every month are harmless.{" "}
                  <strong>Fact:</strong> Regular use without finding the cause
                  hides a problem and can harm the stomach and kidneys.
                </li>
                <li>
                  <strong>Myth:</strong> Painful periods mean infertility.{" "}
                  <strong>Fact:</strong> Not always, but some causes can affect
                  fertility, so early treatment helps.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation.
                </li>
                <li>Questions about your cycle and pain pattern.</li>
                <li>
                  A basic examination and, if suitable, an ultrasound.
                </li>
                <li>A simple explanation and a clear plan.</li>
                <li>Time to ask any question.</li>
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
