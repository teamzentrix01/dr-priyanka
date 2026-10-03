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

export default function FemaleDoctorForAbdominalPainMoradabad() {
  const faqs = [
    {
      q: "Who is a good female doctor for abdominal pain in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a trusted female gynaecologist in Moradabad.",
    },
    {
      q: "Can abdominal pain in women be gynaecological?",
      a: "Yes. Cysts, fibroids, endometriosis, infections and period problems are common causes.",
    },
    {
      q: "Does Dr. Priyanka treat digestive problems?",
      a: "She treats gynaecological causes. For digestive causes, she can guide you to the right specialist.",
    },
    {
      q: "When should I see a doctor for abdominal pain?",
      a: "See a doctor if pain lasts several days, repeats monthly, or comes with bleeding or discharge.",
    },
    {
      q: "Is period pain always normal?",
      a: "No. Severe pain that stops daily activities should be evaluated.",
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
                Female Doctor for Abdominal Pain in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Abdominal pain is common, but for women it is rarely simple. The
                pain may come from the digestive system, the urinary system or
                the reproductive organs. Because these organs sit close together,
                the pain often feels the same. Many women take painkillers or
                antacids for months before finding the real cause.
              </p>

              <p className="mb-4 text-gray-700">
                Many women also prefer to discuss such personal symptoms with a
                female doctor. They can talk openly about periods, intercourse,
                discharge and pregnancy without hesitation. This guide explains
                the causes of abdominal pain in women, the warning signs, and how
                to consult Dr. Priyanka Pachauri, a gynaecologist at Dr. Priyanka
                Gynaec in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult a Female Gynaecologist for Abdominal Pain?
              </h2>

              <p className="mb-4 text-gray-700">
                When pain is in the lower belly or pelvis, the reproductive
                system is a leading suspect. A gynaecologist is trained to
                examine and treat these organs.
              </p>

              <p className="mb-4 text-gray-700">
                Reasons women choose a female gynaecologist:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Greater comfort during pelvic and abdominal examination.
                </li>
                <li>
                  Easier discussion of periods, sexual health and pregnancy.
                </li>
                <li>
                  Specialised knowledge of the uterus, ovaries and fallopian
                  tubes.
                </li>
                <li>
                  Ability to connect pain with the menstrual cycle.
                </li>
                <li>
                  Access to pelvic ultrasound and keyhole (laparoscopic)
                  procedures when needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Doctor Should You See First?
              </h2>

              <p className="mb-4 text-gray-700">
                Choosing the right specialist saves time and worry.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                See a gynaecologist if the pain is:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>In the lower abdomen or pelvis.</li>
                <li>Linked to periods or ovulation.</li>
                <li>Present during or after intercourse.</li>
                <li>Seen with abnormal bleeding or discharge.</li>
                <li>
                  Associated with a missed period or possible pregnancy.
                </li>
                <li>
                  Accompanied by a lump or swelling in the lower belly.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                See a gastroenterologist or physician if the pain is:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Burning in the upper abdomen after meals.</li>
                <li>
                  Linked with vomiting, black stools or blood in stool.
                </li>
                <li>
                  Seen with long-term diarrhoea or constipation and weight loss.
                </li>
                <li>Associated with yellowing of the eyes or skin.</li>
              </ul>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri evaluates and treats gynaecological causes.
                If your symptoms suggest a digestive cause, she can guide you to
                the right specialist.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Abdominal Pain by Location
              </h2>

              <p className="mb-4 text-gray-700">
                The site of pain gives useful clues. This is general information,
                not a diagnosis.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lower abdomen (centre)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Period cramps.</li>
                <li>Fibroids.</li>
                <li>Uterine or pelvic infection.</li>
                <li>Bladder problems.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lower abdomen (left or right side)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovarian cysts.</li>
                <li>Ovulation pain.</li>
                <li>Endometriosis.</li>
                <li>
                  Ectopic pregnancy (emergency if sudden and severe).
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pain spreading to the back or thighs
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Endometriosis.</li>
                <li>Pelvic inflammation.</li>
                <li>Fibroid pressure.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Whole lower belly with bloating
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS.</li>
                <li>Ovarian cysts.</li>
                <li>Endometriosis.</li>
                <li>
                  Digestive causes such as gas or constipation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Gynaecological Causes of Abdominal Pain in Women
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Menstrual Cramps (Dysmenorrhoea)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain before or during periods.</li>
                <li>
                  Mild cramps are common, but pain that stops daily work needs
                  evaluation.
                </li>
                <li>
                  Can be linked to endometriosis or adenomyosis.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fluid-filled sacs on the ovary.</li>
                <li>May cause one-sided pain, fullness or bloating.</li>
                <li>Most are benign, but large or twisted cysts need urgent care.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Non-cancerous uterine growths.</li>
                <li>Cause heaviness, pressure and heavy periods.</li>
                <li>
                  Can cause frequent urination or constipation due to pressure.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uterine-lining-like tissue grows outside the uterus.
                </li>
                <li>
                  Causes severe period pain and chronic pelvic pain.
                </li>
                <li>
                  May cause pain during intercourse and bowel movements.
                </li>
                <li>Often delayed in diagnosis.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection of the reproductive organs.</li>
                <li>Causes pain, fever and unusual discharge.</li>
                <li>Early treatment protects fertility.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hormonal condition causing irregular periods.</li>
                <li>May cause bloating and pelvic discomfort.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Prolapse
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weak pelvic support.</li>
                <li>
                  Causes a dragging or heavy feeling in the lower belly.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnancy-Related Pain
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild cramping can occur in early pregnancy.</li>
                <li>
                  Severe or one-sided pain with bleeding may signal ectopic
                  pregnancy or miscarriage.
                </li>
                <li>Pain late in pregnancy needs prompt medical review.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Do Not Delay Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Book an appointment if you notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Abdominal pain lasting more than a few days.</li>
                <li>Pain that returns every month.</li>
                <li>Heavy or prolonged periods.</li>
                <li>Bleeding between periods or after menopause.</li>
                <li>Pain during intercourse.</li>
                <li>Persistent bloating.</li>
                <li>A lump or swelling in the abdomen.</li>
                <li>Foul-smelling discharge or itching.</li>
                <li>Burning urination with lower belly pain.</li>
                <li>Difficulty conceiving along with pelvic pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Symptoms: Go to the Hospital Immediately
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe abdominal pain.</li>
                <li>Fainting, dizziness or pale skin with pain.</li>
                <li>Heavy bleeding that soaks pads quickly.</li>
                <li>High fever with severe pain.</li>
                <li>
                  Severe pain with a positive pregnancy test or during pregnancy.
                </li>
                <li>A hard, rigid abdomen with vomiting.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Emergencies cannot wait for a routine appointment. Go to the
                nearest hospital emergency department.
              </p>
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
                The clinic works on the principle of &quot;Her Health First&quot;.
                You can expect:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Time to explain your symptoms without being rushed.</li>
                <li>
                  A respectful, private and judgement-free environment.
                </li>
                <li>
                  Clear explanation of the likely cause and every option.
                </li>
                <li>
                  Honest guidance on whether medicine, monitoring or surgery is
                  best.
                </li>
                <li>Continuity of care through follow-up visits.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services Available for Pelvic and Abdominal Conditions
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec offers:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Gynaecology and laparoscopy:</strong> expert 3D
                  laparoscopic care for reproductive health.
                </li>
                <li>
                  <strong>Laparoscopic cystectomy:</strong> keyhole removal of
                  ovarian cysts while preserving fertility.
                </li>
                <li>
                  <strong>Laparoscopic myomectomy:</strong> uterus-preserving
                  surgery for fibroids.
                </li>
                <li>
                  <strong>Laparoscopic hysterectomy:</strong> minimally invasive
                  uterus removal when required.
                </li>
                <li>
                  <strong>Endometriosis surgery:</strong> removal of
                  endometriosis tissue for pelvic pain relief.
                </li>
                <li>
                  <strong>Diagnostic hysteroscopy:</strong> gentle camera
                  examination of the uterine cavity.
                </li>
                <li>
                  <strong>Hysteroscopic polypectomy:</strong> removal of polyps
                  without cuts.
                </li>
                <li>
                  <strong>Sacrocolpopexy:</strong> repair of uterine and vaginal
                  vault prolapse.
                </li>
                <li>
                  <strong>Fertility and IVF:</strong> personalised plans for
                  couples.
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
                Technology That Supports Accurate Diagnosis
              </h2>

              <p className="mb-4 text-gray-700">
                Correct treatment depends on correct diagnosis. The clinic uses:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery system.</li>
                <li>3D and 4D ultrasound for detailed pelvic imaging.</li>
                <li>Time-lapse imaging incubator for embryo monitoring.</li>
                <li>AI-powered semen analysis and DNA integrity testing.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Pelvic ultrasound is often the first test for female abdominal
                pain. It can detect cysts, fibroids, fluid collections and other
                pelvic changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>History:</strong> pain type, location, timing,
                  periods, pregnancies, bowel and urine habits.
                </li>
                <li>
                  <strong>Examination:</strong> a gentle abdominal and pelvic
                  check, always with your consent.
                </li>
                <li>
                  <strong>Investigations:</strong> ultrasound, blood or urine
                  tests if required.
                </li>
                <li>
                  <strong>Diagnosis:</strong> the likely cause explained in
                  simple words.
                </li>
                <li>
                  <strong>Treatment plan:</strong> medicines, lifestyle advice,
                  minor procedures or surgery.
                </li>
                <li>
                  <strong>Follow-up:</strong> review to check your response to
                  treatment.
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
                <li>Bring previous reports, scans and prescriptions.</li>
                <li>List medicines, supplements and allergies.</li>
                <li>Write your questions beforehand.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options Explained
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause. It may include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Watchful monitoring:</strong> for small, harmless
                  cysts or fibroids.
                </li>
                <li>
                  <strong>Medicines:</strong> pain relief, antibiotics, hormonal
                  treatment or iron supplements.
                </li>
                <li>
                  <strong>Lifestyle support:</strong> diet, exercise and weight
                  management for PCOS.
                </li>
                <li>
                  <strong>Minor procedures:</strong> hysteroscopy for polyps or
                  uterine problems.
                </li>
                <li>
                  <strong>Keyhole surgery:</strong> for cysts, fibroids,
                  endometriosis or prolapse when needed.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                In suitable cases, keyhole surgery offers smaller scars, less
                pain and a quicker recovery than open surgery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Self-Care Tips While Waiting for Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                These measures may bring comfort but never replace medical
                advice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Apply a warm compress to the lower abdomen.</li>
                <li>
                  Rest and avoid strenuous activity during severe pain.
                </li>
                <li>Drink plenty of water.</li>
                <li>Eat light, fibre-rich meals.</li>
                <li>Avoid long-term self-medication with painkillers.</li>
                <li>
                  Practise gentle stretching or yoga if comfortable.
                </li>
                <li>Track your symptoms to share with the doctor.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Female Abdominal Pain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Severe period pain is normal for every
                  woman. <strong>Fact:</strong> Pain that disrupts daily life
                  should be checked.
                </li>
                <li>
                  <strong>Myth:</strong> All abdominal pain in women is gas.{" "}
                  <strong>Fact:</strong> Cysts, fibroids and infections can
                  mimic gas.
                </li>
                <li>
                  <strong>Myth:</strong> Every cyst or fibroid needs surgery.{" "}
                  <strong>Fact:</strong> Many only need monitoring or medicines.
                </li>
                <li>
                  <strong>Myth:</strong> Pelvic examination is painful and
                  embarrassing. <strong>Fact:</strong> It is done gently, with
                  consent and respect for your privacy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Female Doctor in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">Consider these points:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Relevant qualifications and practical experience.</li>
                <li>
                  A doctor who listens and answers all questions patiently.
                </li>
                <li>Modern ultrasound and laparoscopic facilities.</li>
                <li>Transparent advice with no pressure to operate.</li>
                <li>Privacy and comfort at the clinic.</li>
                <li>Positive patient experiences.</li>
                <li>Convenient clinic location.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                One patient shared on the website that they felt comfortable and
                understood from the first visit, with every step clearly
                explained.
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
