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

export default function WhyDoIHaveLowerStomachPainWomen() {
  const faqs = [
    {
      q: "Why do I have lower stomach pain as a female?",
      a: "Common causes are period cramps, ovarian cysts, fibroids, endometriosis, infections, and bowel or urinary problems.",
    },
    {
      q: "Can lower stomach pain happen without pregnancy?",
      a: "Yes. Hormonal changes, cysts, infections and constipation can all cause it.",
    },
    {
      q: "When is lower stomach pain serious?",
      a: "When it is sudden, severe, or comes with heavy bleeding, fever, fainting or pregnancy.",
    },
    {
      q: "Why is my lower stomach pain on one side?",
      a: "Ovarian cysts, ovulation, endometriosis, or bowel and urinary causes may be responsible. An examination is needed.",
    },
    {
      q: "Is lower stomach pain before periods normal?",
      a: "Mild cramping is common. Severe or worsening pain should be evaluated.",
    },
    {
      q: "Which doctor should I see?",
      a: "A lady gynaecologist is a good first choice. Dr. Priyanka Pachauri is available in Moradabad.",
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
                Why Do I Have Lower Stomach Pain? A Complete Guide for Women
              </h1>

              <p className="mb-4 text-gray-700">
                You wake up with a dull ache below your belly button. Or the pain
                comes in waves, stays on one side, or appears only before your
                period. It is natural to ask, &quot;Why do I have lower stomach
                pain?&quot;
              </p>

              <p className="mb-4 text-gray-700">
                The answer depends on your age, your menstrual cycle, the exact
                location of the pain and the symptoms that come with it. In many
                women the cause is gynaecological, but it can also be urinary or
                digestive. This guide explains the most common reasons, the
                warning signs, and when to consult Dr. Priyanka Pachauri, a
                gynaecologist at Dr. Priyanka Gynaec in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Get Lower Stomach Pain So Often
              </h2>

              <p className="mb-4 text-gray-700">
                Several organs share the lower abdomen. That is why the cause is
                not always obvious.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The uterus, ovaries and fallopian tubes sit in the lower
                  pelvis.
                </li>
                <li>The bladder lies directly in front of the uterus.</li>
                <li>
                  The bowel (lower intestine and rectum) sits behind and beside
                  these organs.
                </li>
                <li>
                  Muscles, ligaments and nerves are shared across this region.
                </li>
                <li>
                  Hormones change every month and affect the uterus, ovaries and
                  gut together.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A problem in one organ can feel like pain from another.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes Linked to Your Menstrual Cycle
              </h2>

              <p className="mb-4 text-gray-700">
                If the pain follows a monthly pattern, hormones are usually
                involved.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Period Cramps (Dysmenorrhoea)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain starts just before or at the start of bleeding.</li>
                <li>Caused by uterine contractions.</li>
                <li>Usually settles within two to three days.</li>
                <li>
                  Pain that stops you from working or studying is not something
                  to ignore.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ovulation Pain
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A short, one-sided ache around mid-cycle.</li>
                <li>Lasts a few hours to a day or two.</li>
                <li>Usually harmless.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Premenstrual Symptoms
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bloating, heaviness and mild cramping before periods.</li>
                <li>Often comes with mood changes and breast tenderness.</li>
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
                  May cause pain during intercourse or bowel movements.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Adenomyosis
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Uterine lining grows into the muscle wall.</li>
                <li>
                  Causes heavy, painful periods and a tender, enlarged uterus.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes Linked to the Ovaries and Uterus
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fluid-filled sacs on the ovary.</li>
                <li>May cause one-sided pain, fullness or bloating.</li>
                <li>
                  Most are harmless, but twisting or rupture can cause sudden,
                  severe pain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Non-cancerous growths in the uterine wall.</li>
                <li>Cause heaviness, pressure and heavy periods.</li>
                <li>Large fibroids may press on the bladder or bowel.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                PCOS (Polycystic Ovary Syndrome)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular periods, acne, excess hair growth and weight gain.</li>
                <li>May cause bloating and pelvic discomfort.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Polyps
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Small growths inside the uterus.</li>
                <li>May cause irregular bleeding and cramping.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection of the uterus, tubes or ovaries.</li>
                <li>Causes lower belly pain, fever and unusual discharge.</li>
                <li>Early treatment protects fertility.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Prolapse
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Weak pelvic support lets the uterus descend.</li>
                <li>Causes dragging heaviness in the lower belly.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes Not Related to the Reproductive System
              </h2>

              <p className="mb-4 text-gray-700">
                A good doctor also checks for other possibilities.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Urinary Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Urinary tract infection: burning, frequent urge and lower belly
                  discomfort.
                </li>
                <li>
                  Kidney stones: severe pain that may spread from the back to the
                  lower belly.
                </li>
                <li>Bladder inflammation.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Digestive Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Constipation and trapped gas.</li>
                <li>
                  Irritable bowel syndrome: cramping with diarrhoea or
                  constipation.
                </li>
                <li>Food intolerance.</li>
                <li>
                  Appendicitis: pain starting near the navel and moving to the
                  lower right side.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Muscle and Other Causes
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A hernia: a bulge in the groin or lower abdomen.</li>
                <li>Muscle strain after exercise or heavy lifting.</li>
                <li>
                  Stress and anxiety, which can tighten abdominal and pelvic
                  muscles.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Side Is the Pain On?
              </h2>

              <p className="mb-4 text-gray-700">
                Location offers clues, but it never replaces an examination.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lower left side
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovarian cyst or ovulation pain.</li>
                <li>Constipation or bowel inflammation.</li>
                <li>Endometriosis.</li>
                <li>Urinary stones.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lower right side
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovarian cyst or ovulation pain.</li>
                <li>
                  Appendicitis, which is urgent if pain is severe and worsening.
                </li>
                <li>Ectopic pregnancy if you could be pregnant.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Centre of the lower belly
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Period cramps.</li>
                <li>Fibroids.</li>
                <li>Bladder infection.</li>
                <li>Pelvic infection.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pain spreading to the back or thighs
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Endometriosis.</li>
                <li>Pelvic inflammation.</li>
                <li>Kidney-related causes.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Do I Have Lower Stomach Pain When I Am Not Pregnant?
              </h2>

              <p className="mb-4 text-gray-700">
                Many women assume pain must mean pregnancy, but pain is common
                without it.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Period-related cramps and hormonal changes.</li>
                <li>Cysts, fibroids or endometriosis.</li>
                <li>Infections of the urinary or reproductive tract.</li>
                <li>Constipation or bowel problems.</li>
                <li>Stress and muscle tension.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A urine pregnancy test is a simple first step if your period is
                late.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lower Stomach Pain by Age Group
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teenage girls
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Period cramps are the most common cause.</li>
                <li>Irregular periods in the first years are common.</li>
                <li>Severe pain should still be evaluated.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women in their 20s and 30s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cysts, PCOS, endometriosis and infections are frequent.</li>
                <li>Pregnancy-related causes must be considered.</li>
                <li>Fertility concerns may appear.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women in their 40s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fibroids, adenomyosis and heavy bleeding are more common.</li>
                <li>Perimenopausal hormonal changes begin.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After menopause
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>New pelvic pain deserves prompt examination.</li>
                <li>Postmenopausal bleeding needs urgent evaluation.</li>
                <li>
                  Prolapse, infections and other uterine or ovarian causes are
                  possible.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lower Stomach Pain During Pregnancy
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Often normal:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild stretching or pulling as the uterus grows.</li>
                <li>Light cramping in early pregnancy.</li>
                <li>
                  Round ligament pain along the sides of the lower belly.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Needs prompt medical review:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe or one-sided pain with spotting or bleeding.</li>
                <li>Pain with fever or burning urine.</li>
                <li>Painful, regular tightening before the due date.</li>
                <li>Reduced baby movements with pain.</li>
                <li>Leaking fluid with pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags: Do Not Wait
              </h2>

              <p className="mb-4 text-gray-700">
                Seek emergency care immediately if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe lower abdominal pain.</li>
                <li>Fainting, dizziness or cold, clammy skin.</li>
                <li>Heavy bleeding that soaks pads quickly.</li>
                <li>High fever with severe pain.</li>
                <li>Severe pain with a positive pregnancy test.</li>
                <li>A hard, rigid abdomen with repeated vomiting.</li>
                <li>Pain that keeps worsening instead of settling.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs You Should Book a Consultation Soon
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain lasting more than a few days.</li>
                <li>Pain that returns every month.</li>
                <li>Pain that needs regular painkillers.</li>
                <li>Heavy, prolonged or irregular periods.</li>
                <li>Bleeding between periods.</li>
                <li>Pain during intercourse.</li>
                <li>Persistent bloating or swelling in the lower belly.</li>
                <li>Unusual or foul-smelling discharge.</li>
                <li>Difficulty conceiving.</li>
                <li>Urinary burning along with pelvic pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Doctors Find the Cause
              </h2>

              <p className="mb-4 text-gray-700">
                Diagnosis is a step-by-step process:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>History:</strong> pain pattern, periods, pregnancies,
                  bowel and urine habits.
                </li>
                <li>
                  <strong>Examination:</strong> gentle abdominal and pelvic check
                  with your consent.
                </li>
                <li>
                  <strong>Pelvic ultrasound:</strong> often the first and most
                  useful test.
                </li>
                <li>
                  <strong>Urine and blood tests:</strong> to check for infection,
                  anaemia or pregnancy.
                </li>
                <li>
                  <strong>Hysteroscopy or laparoscopy:</strong> only if other
                  tests cannot explain the pain.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Dr. Priyanka Gynaec uses high-definition 3D laparoscopy and 3D
                and 4D ultrasound to support accurate diagnosis.
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

              <p className="mb-4 text-gray-700">Patients can expect:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A listening-first approach under the clinic&apos;s &quot;Her
                  Health First&quot; philosophy.
                </li>
                <li>Clear explanations in simple language.</li>
                <li>Surgery advised only when truly needed.</li>
                <li>Privacy and comfort during every visit.</li>
                <li>Follow-up care after the first consultation.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                For a digestive or urinary cause, she can guide you toward the
                right specialist.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Depends on the Cause
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Monitoring:</strong> small, harmless cysts or fibroids
                  may need only follow-up.
                </li>
                <li>
                  <strong>Pain-relief medicines:</strong> for cramps, as advised
                  by the doctor.
                </li>
                <li>
                  <strong>Antibiotics:</strong> for pelvic or urinary infections.
                </li>
                <li>
                  <strong>Hormonal treatment:</strong> for irregular periods,
                  heavy bleeding or endometriosis.
                </li>
                <li>
                  <strong>Lifestyle plans:</strong> diet and exercise guidance,
                  especially for PCOS.
                </li>
                <li>
                  <strong>Minor procedures:</strong> hysteroscopy for polyps.
                </li>
                <li>
                  <strong>Keyhole surgery:</strong> for cysts, fibroids,
                  endometriosis or prolapse when required.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Available keyhole services include laparoscopic cystectomy,
                myomectomy, hysterectomy and endometriosis surgery. They are
                planned only when needed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Things You Can Do at Home
              </h2>

              <p className="mb-4 text-gray-700">
                These steps may give comfort but never replace a medical opinion:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Use a warm compress on the lower abdomen.</li>
                <li>Rest during severe cramping.</li>
                <li>Drink enough water.</li>
                <li>Eat fibre-rich, light meals.</li>
                <li>Walk or stretch gently.</li>
                <li>Do not hold urine for long periods.</li>
                <li>Avoid long-term painkiller use without advice.</li>
                <li>Track your symptoms in a diary.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of your last period.</li>
                <li>Record when the pain began and how it feels.</li>
                <li>Mention what makes it better or worse.</li>
                <li>Bring earlier reports, scans and prescriptions.</li>
                <li>List medicines, supplements and allergies.</li>
                <li>Write down your questions.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Painful periods are normal for every
                  woman. <strong>Fact:</strong> Severe pain should be checked.
                </li>
                <li>
                  <strong>Myth:</strong> Lower stomach pain is always gas.{" "}
                  <strong>Fact:</strong> Cysts, fibroids and infections can feel
                  similar.
                </li>
                <li>
                  <strong>Myth:</strong> Pain without pregnancy is not serious.{" "}
                  <strong>Fact:</strong> Many treatable conditions cause it.
                </li>
                <li>
                  <strong>Myth:</strong> A pelvic exam is always painful.{" "}
                  <strong>Fact:</strong> It is done gently, with consent and
                  privacy.
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
