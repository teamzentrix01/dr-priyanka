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

export default function DoctorForWhiteDischargeMoradabad() {
  const faqs = [
    {
      q: "Who is the best doctor for white discharge in Moradabad?",
      a: "Dr. Priyanka Pachauri is a trusted and experienced gynaecologist in Moradabad for white discharge and related infections.",
    },
    {
      q: "Is white discharge always a sign of a problem?",
      a: "No, mild clear or milky discharge without odor is normal. Color change, smell, or itching indicates a problem.",
    },
    {
      q: "What causes abnormal white discharge?",
      a: "Common causes include yeast infections, bacterial vaginosis, hormonal imbalance, and poor hygiene practices.",
    },
    {
      q: "Can white discharge affect fertility?",
      a: "Untreated recurrent infections can affect fertility over time, so timely treatment is important.",
    },
    {
      q: "Is white discharge a sign of an STI?",
      a: "Not always; most cases are due to common infections, but STI screening is done when required.",
    },
    {
      q: "Can diet or lifestyle help prevent discharge issues?",
      a: "Yes, good hygiene, cotton undergarments, and balanced blood sugar levels help reduce recurrence.",
    },
    {
      q: "Is the treatment for white discharge painful?",
      a: "No, most treatments involve oral or topical medication and are simple and comfortable.",
    },
    {
      q: "Is the consultation confidential for sensitive concerns?",
      a: "Yes, the clinic ensures full privacy and a judgment-free environment for all patients.",
    },
    {
      q: "Can white discharge occur due to stress?",
      a: "Yes, stress can disturb hormonal balance and occasionally trigger changes in discharge patterns.",
    },
    {
      q: "Should I stop wearing tight clothing if I have recurring discharge issues?",
      a: "Yes, switching to loose, breathable cotton clothing can help reduce moisture buildup and lower infection risk.",
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
                Doctor for White Discharge in Moradabad – Complete Guide by Dr.
                Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                White discharge, medically known as leucorrhoea, is one of the
                most common concerns women experience, yet it remains a topic
                many hesitate to discuss openly. Some amount of discharge is
                completely normal and healthy, but changes in color, smell,
                texture, or accompanying symptoms can signal an infection that
                needs medical attention. If you are searching for a doctor for
                white discharge in Moradabad, this guide explains what is
                normal, what isn&apos;t, and why consulting an experienced
                gynaecologist like Dr. Priyanka Pachauri is the right step.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is White Discharge Normal?
              </h2>

              <p className="mb-4 text-gray-700">
                Vaginal discharge is a natural part of the body&apos;s
                self-cleaning process, and its amount, texture, and timing can
                vary throughout the menstrual cycle.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clear or milky white discharge without odor is generally
                  normal.
                </li>
                <li>
                  Discharge often increases around ovulation (mid-cycle).
                </li>
                <li>
                  Slightly thicker discharge before periods is common.
                </li>
                <li>
                  Discharge during pregnancy may increase due to hormonal
                  changes.
                </li>
                <li>
                  Discharge that keeps undergarments feeling slightly damp
                  without irritation is usually harmless.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                However, certain changes indicate the discharge may no longer be
                normal and requires evaluation by a lady doctor for white
                discharge.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When White Discharge Becomes a Concern
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Discharge that is yellow, green, or grey in color.
                </li>
                <li>Strong, foul, or fishy odor.</li>
                <li>Thick, cottage-cheese-like texture.</li>
                <li>
                  Discharge accompanied by itching, burning, or irritation.
                </li>
                <li>Pain during urination or intercourse.</li>
                <li>
                  Blood-tinged discharge outside of your period.
                </li>
                <li>
                  Increased discharge along with lower abdominal pain.
                </li>
                <li>
                  Discharge accompanied by fever or general weakness.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you notice any of these signs, it&apos;s important to consult
                a gynaecologist for leucorrhoea rather than relying on home
                remedies alone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Abnormal White Discharge
              </h2>

              <p className="mb-4 text-gray-700">
                Abnormal discharge can result from infections, hormonal changes,
                or underlying gynaecological conditions. A proper diagnosis
                helps determine the right treatment.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Infection-related causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bacterial vaginosis due to imbalance of vaginal bacteria.
                </li>
                <li>
                  Yeast infection (candidiasis) causing thick, itchy discharge.
                </li>
                <li>
                  Trichomoniasis, a sexually transmitted infection causing
                  frothy discharge.
                </li>
                <li>
                  Urinary tract infection (UTI) sometimes accompanied by
                  discharge changes.
                </li>
                <li>
                  Pelvic Inflammatory Disease (PID) from untreated infections.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal and lifestyle causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal imbalance, including PCOS.
                </li>
                <li>Poor intimate hygiene practices.</li>
                <li>
                  Excessive use of scented soaps or vaginal washes.
                </li>
                <li>
                  Tight, synthetic undergarments trapping moisture.
                </li>
                <li>Stress and fluctuating hormone levels.</li>
                <li>
                  Uncontrolled diabetes, which increases risk of yeast
                  infections.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Other causes:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cervical erosion or inflammation.</li>
                <li>
                  Presence of a foreign object (such as a forgotten tampon).
                </li>
                <li>Sexually transmitted infections (STIs).</li>
                <li>
                  Post-pregnancy or postpartum hormonal shifts.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why You Should Never Ignore Abnormal Discharge
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Untreated infections can spread to the uterus, ovaries, and
                  fallopian tubes.
                </li>
                <li>
                  Recurrent infections may affect fertility if left untreated for
                  a long time.
                </li>
                <li>
                  Ignoring symptoms often leads to worsening itching, pain, and
                  discomfort.
                </li>
                <li>
                  Some infections can increase risk during pregnancy if not
                  treated early.
                </li>
                <li>
                  Self-medicating with over-the-counter creams without diagnosis
                  can mask the real problem.
                </li>
                <li>
                  Chronic untreated discharge issues can affect confidence,
                  comfort, and daily life.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor for White Discharge
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Discharge changes color, consistency, or develops a strong
                  odor.
                </li>
                <li>
                  Persistent itching or burning in the vaginal area.
                </li>
                <li>Discomfort during urination or intercourse.</li>
                <li>
                  Discharge continues for more than a week without improvement.
                </li>
                <li>
                  Discharge is accompanied by abdominal or pelvic pain.
                </li>
                <li>
                  You notice discharge along with unexplained fatigue or fever.
                </li>
                <li>
                  Symptoms return repeatedly despite using home remedies or
                  over-the-counter treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Diagnoses the Cause
              </h2>

              <p className="mb-4 text-gray-700">
                A precise diagnosis is essential because different infections
                require different treatments, and using the wrong medication can
                prolong the problem.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed discussion of symptoms, hygiene habits, and medical
                  history.
                </li>
                <li>Physical and pelvic examination.</li>
                <li>
                  Vaginal swab test to identify bacteria, yeast, or infection
                  type.
                </li>
                <li>Urine test to rule out urinary tract infection.</li>
                <li>
                  Blood sugar test if diabetes is suspected as a contributing
                  factor.
                </li>
                <li>
                  Pap smear when cervical causes are suspected.
                </li>
                <li>
                  Ultrasound if pelvic infection or underlying gynaecological
                  condition is suspected.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri – Trusted Doctor for White Discharge
                in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a well-established gynaecologist in
                Moradabad known for her thorough, private, and comfortable
                approach to treating women&apos;s intimate health concerns.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials and international fellowship training.
                </li>
                <li>
                  Years of experience diagnosing and treating vaginal infections
                  and hormonal discharge issues.
                </li>
                <li>
                  Access to advanced diagnostic tools and ultrasound technology.
                </li>
                <li>
                  Known for patient, judgment-free, and detailed consultations.
                </li>
                <li>
                  Strong focus on complete treatment rather than temporary
                  symptom relief.
                </li>
                <li>
                  Trusted by women across Moradabad through consistent patient
                  referrals.
                </li>
                <li>
                  Emphasis on educating patients about hygiene and prevention
                  alongside treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options Offered for White Discharge
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Oral and topical antifungal medication for yeast infections.
                </li>
                <li>Antibiotic treatment for bacterial infections.</li>
                <li>
                  Hormonal evaluation and correction for PCOS-related discharge.
                </li>
                <li>
                  Guidance on intimate hygiene and lifestyle changes.
                </li>
                <li>
                  Treatment for underlying conditions like diabetes affecting
                  recurrence.
                </li>
                <li>
                  Management of cervical erosion or inflammation when detected.
                </li>
                <li>
                  STI screening and treatment when required, handled with full
                  confidentiality.
                </li>
                <li>
                  Follow-up testing to confirm complete resolution of infection.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri Over Self-Medication?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Accurate diagnosis instead of guessing the cause from symptoms
                  alone.
                </li>
                <li>
                  Correct medication targeted to the specific type of infection.
                </li>
                <li>
                  Reduced risk of recurring infections through complete
                  treatment.
                </li>
                <li>
                  Private, comfortable, and respectful consultation environment.
                </li>
                <li>
                  Guidance on long-term prevention, not just short-term relief.
                </li>
                <li>
                  Continuity of care if symptoms return or evolve over time.
                </li>
                <li>
                  Confidential handling of sensitive health concerns.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About White Discharge
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> All white discharge is a sign of
                  infection. <strong>Fact:</strong> Normal discharge without
                  odor or irritation is healthy and expected.
                </li>
                <li>
                  <strong>Myth:</strong> Over-the-counter creams can fix any
                  discharge problem. <strong>Fact:</strong> Using the wrong
                  medication for the wrong infection type can worsen symptoms.
                </li>
                <li>
                  <strong>Myth:</strong> Only married women get vaginal
                  infections. <strong>Fact:</strong> Women of any age and
                  marital status can experience these issues.
                </li>
                <li>
                  <strong>Myth:</strong> Discharge problems always indicate an
                  STI. <strong>Fact:</strong> Most cases are due to common
                  infections like yeast or bacterial imbalance, not STIs.
                </li>
                <li>
                  <strong>Myth:</strong> Scented feminine washes help maintain
                  hygiene. <strong>Fact:</strong> These products can disturb
                  natural pH balance and worsen infections.
                </li>
                <li>
                  <strong>Myth:</strong> Once treated, the problem never
                  returns. <strong>Fact:</strong> Recurrence is common without
                  addressing underlying causes like hygiene habits or diabetes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hygiene and Prevention Tips
              </h2>

              <p className="mb-4 text-gray-700">
                Good intimate hygiene practices can significantly reduce the
                frequency of infections and abnormal discharge.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Wear breathable cotton undergarments instead of synthetic
                  fabrics.
                </li>
                <li>
                  Avoid scented soaps, sprays, or vaginal washes.
                </li>
                <li>
                  Change out of wet or sweaty clothing promptly.
                </li>
                <li>
                  Maintain proper hygiene during periods, changing
                  pads/tampons regularly.
                </li>
                <li>
                  Wipe from front to back after using the washroom.
                </li>
                <li>
                  Avoid douching, as it disrupts natural vaginal bacteria
                  balance.
                </li>
                <li>
                  Stay hydrated and maintain a balanced diet to support
                  immunity.
                </li>
                <li>
                  Manage blood sugar levels if diabetic, as high sugar increases
                  infection risk.
                </li>
                <li>
                  Avoid unprotected intercourse to reduce risk of sexually
                  transmitted infections.
                </li>
                <li>
                  Schedule routine gynaecological check-ups even without active
                  symptoms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, comfortable, and confidential consultation setting.
                </li>
                <li>
                  Open discussion about symptoms without embarrassment or
                  judgment.
                </li>
                <li>
                  Clear explanation of the likely cause based on examination and
                  tests.
                </li>
                <li>
                  Only necessary tests recommended to reach an accurate
                  diagnosis.
                </li>
                <li>
                  Step-by-step treatment plan explained in simple, understandable
                  terms.
                </li>
                <li>
                  Guidance on hygiene and prevention to avoid recurrence.
                </li>
                <li>
                  Follow-up support to confirm the infection has fully resolved.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge at Different Life Stages
              </h2>

              <p className="mb-4 text-gray-700">
                The reason behind discharge changes often depends on age and
                hormonal stage, which is why age-appropriate evaluation matters.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Teenage girls:</strong> Increased discharge is common
                  as periods begin and hormones fluctuate.
                </li>
                <li>
                  <strong>Reproductive age women:</strong> Discharge changes are
                  often linked to ovulation, PCOS, or infections.
                </li>
                <li>
                  <strong>Pregnant women:</strong> Increased discharge is common
                  due to hormonal shifts, but sudden odor or color change should
                  be checked.
                </li>
                <li>
                  <strong>Postpartum women:</strong> Discharge patterns change
                  after delivery and should return to normal gradually.
                </li>
                <li>
                  <strong>Women nearing menopause:</strong> Reduced estrogen can
                  cause dryness, making infections more likely.
                </li>
                <li>
                  <strong>Diabetic women:</strong> Higher blood sugar levels
                  increase susceptibility to recurrent yeast infections.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Immunity Support for Prevention
              </h2>

              <p className="mb-4 text-gray-700">
                A strong immune system and balanced diet can help the body
                naturally resist infections that cause abnormal discharge.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Include probiotic foods like curd/yogurt to support healthy
                  vaginal flora.
                </li>
                <li>
                  Reduce sugar intake, as high sugar levels promote yeast
                  growth.
                </li>
                <li>
                  Stay well-hydrated to support overall immune function.
                </li>
                <li>
                  Eat a balanced diet rich in vitamins, particularly vitamin C
                  and zinc.
                </li>
                <li>
                  Avoid excessive processed and fried foods that can affect
                  immunity.
                </li>
                <li>
                  Manage stress levels, as chronic stress can weaken immune
                  response.
                </li>
                <li>
                  Keep blood sugar under control if you have diabetes or a
                  family history of it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Appointment with Dr. Priyanka Pachauri, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you are looking for a reliable and experienced doctor for
                white discharge in Moradabad, Dr. Priyanka Pachauri&apos;s
                clinic offers accurate diagnosis, effective treatment, and a
                comfortable, confidential environment.
              </p>

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
                        Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call for Appointment</p>
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
              <p className="text-gray-700">
                White discharge is a normal part of a woman&apos;s health, but
                changes in color, smell, or texture — especially with itching,
                pain, or odor — should never be ignored or self-treated.
                Consulting an experienced doctor for white discharge in Moradabad
                like Dr. Priyanka Pachauri ensures an accurate diagnosis, the
                right treatment, and guidance to prevent recurrence, so you can
                feel comfortable and confident again.
              </p>
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
