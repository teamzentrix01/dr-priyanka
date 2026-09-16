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

export default function WomensReproductiveHealthSpecialist() {
  const faqs = [
    {
      q: "Who is the best women's reproductive health specialist in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec is a highly recommended specialist in Moradabad, known for gynaecology, fertility, and laparoscopic care.",
    },
    {
      q: "What services does Dr. Priyanka Gynaec offer?",
      a: "Gynaecology, laparoscopy, fertility & IVF, pregnancy care, antenatal services, and pediatric care.",
    },
    {
      q: "Does the clinic treat PCOS and infertility?",
      a: "Yes, personalized fertility plans and PCOS management are core services offered.",
    },
    {
      q: "Is laparoscopic surgery available in Moradabad?",
      a: "Yes, 3D/4K laparoscopic surgery for fibroids, cysts, and hysterectomy is available locally.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "What is the clinic's email address?",
      a: "You can reach the clinic at drpriyankagynec@gmail.com.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Does the clinic support normal delivery?",
      a: "Yes, natural vaginal delivery is prioritized wherever medically safe.",
    },
    {
      q: "Is fertility treatment technology advanced here?",
      a: "Yes, it includes AI-based semen analysis and GERI time-lapse embryo monitoring.",
    },
    {
      q: "Can I find more health information online?",
      a: "Yes, visit the blog section at gynaecologistmoradabad.com for detailed articles.",
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
                Women&apos;s Reproductive Health Specialist in Moradabad –
                Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Finding the right women&apos;s reproductive health specialist in
                Moradabad can feel overwhelming, especially when you are dealing
                with sensitive concerns like irregular periods, fertility
                issues, pregnancy care, or gynaecological surgery. Reproductive
                health is not just about treating a problem when it appears —
                it&apos;s about having a doctor who understands your body, your
                emotions, and your life stage, and who supports you with the
                right blend of medical expertise and compassion.
              </p>

              <p className="text-gray-700">
                In this guide, we&apos;ll walk through everything you need to
                know about reproductive health care for women, the range of
                conditions a specialist treats, what to expect during a
                consultation, and why Dr. Priyanka Pachauri, a leading
                gynaecologist and fertility expert in Moradabad, has become a
                trusted name for thousands of women across Uttar Pradesh.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women&apos;s Reproductive Health Deserves Special Attention
              </h2>

              <p className="mb-4 text-gray-700">
                A woman&apos;s reproductive health journey spans decades — from
                the first menstrual cycle to menopause and beyond. Each stage
                brings its own set of challenges, and having a dedicated
                specialist by your side matters enormously.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reproductive health directly impacts fertility, hormonal
                  balance, and long-term wellbeing.
                </li>
                <li>
                  Many gynaecological conditions (PCOS, fibroids, endometriosis)
                  are silent in early stages and need timely diagnosis.
                </li>
                <li>
                  Delayed treatment of reproductive issues can affect fertility
                  and quality of life.
                </li>
                <li>
                  Regular screenings help detect problems like cervical changes,
                  ovarian cysts, or uterine abnormalities early.
                </li>
                <li>
                  Emotional and psychological support is just as important as
                  clinical treatment, especially during fertility struggles or
                  high-risk pregnancies.
                </li>
                <li>
                  Access to modern technology (3D laparoscopy, ultrasound,
                  embryo monitoring) significantly improves outcomes and
                  recovery time.
                </li>
                <li>
                  A qualified specialist doesn&apos;t just prescribe medicine —
                  she builds a long-term relationship of trust, continuity, and
                  personalized care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Women&apos;s Reproductive Health Specialist?
              </h2>

              <p className="mb-4 text-gray-700">
                A women&apos;s reproductive health specialist is typically an
                obstetrician-gynaecologist (OB-GYN) trained to diagnose and
                manage the full spectrum of female reproductive system issues.
                This includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Menstrual health and hormonal disorders</li>
                <li>Fertility evaluation and infertility treatment</li>
                <li>Pregnancy care from conception to delivery</li>
                <li>
                  Minimally invasive (laparoscopic) gynaecological surgery
                </li>
                <li>
                  Management of conditions like PCOS, fibroids, endometriosis,
                  and ovarian cysts
                </li>
                <li>Contraception counselling and family planning</li>
                <li>Adolescent and menopausal gynaecological care</li>
                <li>
                  Pediatric consultations related to newborn and child health
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Meet Dr. Priyanka Pachauri – Gynaecologist & Fertility Specialist
                in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri runs Dr. Priyanka Gynaec, a well-known
                women&apos;s health and fertility centre in Moradabad, Uttar
                Pradesh. Her clinic is built around a simple philosophy:
                &quot;Her Health First&quot; — placing the patient&apos;s
                comfort, choices, and story at the centre of every
                consultation.
              </p>

              <p className="mb-4 text-gray-700">
                Here&apos;s what sets her practice apart:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials and international fellowship training
                  in gynaecology and laparoscopy.
                </li>
                <li>
                  Recognized expertise in laparoscopic surgery, fertility
                  treatment, and endometriosis management.
                </li>
                <li>
                  Use of advanced technology including 3D/4K laparoscopy, 3D
                  &amp; 4D ultrasound (Voluson E22BT), GERI time-lapse embryo
                  imaging incubator, and AI-based semen analysis.
                </li>
                <li>
                  A patient-first approach that combines emotional support with
                  world-class clinical expertise.
                </li>
                <li>
                  An integrated care team that stays with patients through every
                  stage — first visit to follow-up.
                </li>
                <li>
                  Strong reputation built through patient trust and word-of-mouth
                  referrals rather than aggressive marketing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services Offered at Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                The clinic offers comprehensive, life-stage-based reproductive
                healthcare. Below is a breakdown of the key services:
              </p>

              <ol className="list-decimal space-y-3 pl-5 text-gray-700">
                <li>
                  <strong>Gynaecology & Laparoscopy</strong> – Expert 3D
                  laparoscopic care for a wide range of reproductive health
                  conditions. Minimally invasive approach for faster recovery
                  and reduced scarring.
                </li>
                <li>
                  <strong>Fertility & IVF</strong> – Personalized fertility
                  evaluation for couples trying to conceive. IVF and assisted
                  reproduction using AI-powered semen analysis and DNA integrity
                  testing. Time-lapse embryo monitoring (GERI incubator) to
                  select the healthiest embryos.
                </li>
                <li>
                  <strong>Pregnancy & Birthing Care</strong> – Customized
                  birthing plans tailored to each mother&apos;s health profile.
                  Support for both normal and complicated pregnancies.
                </li>
                <li>
                  <strong>Antenatal Services</strong> – Structured prenatal
                  screenings and check-ups throughout all three trimesters.
                  Nutrition guidance, risk assessment, and labor preparedness
                  counselling.
                </li>
                <li>
                  <strong>Normal Delivery</strong> – Strong emphasis on gentle,
                  natural vaginal delivery wherever medically safe. Reduced
                  dependency on unnecessary interventions.
                </li>
                <li>
                  <strong>Laparoscopic Cystectomy</strong> – Precision keyhole
                  surgery to remove ovarian cysts while preserving fertility.
                </li>
                <li>
                  <strong>Laparoscopic Myomectomy</strong> – Uterus-preserving
                  surgical removal of fibroids using advanced 3D laparoscopy.
                </li>
                <li>
                  <strong>Laparoscopic Hysterectomy</strong> – Minimally
                  invasive uterus removal with significantly faster recovery than
                  open surgery.
                </li>
                <li>
                  <strong>Sacrocolpopexy</strong> – Advanced keyhole repair for
                  uterine and vaginal vault prolapse.
                </li>
                <li>
                  <strong>Laparoscopic Sterilization</strong> – Safe, permanent,
                  day-care tubal ligation procedure.
                </li>
                <li>
                  <strong>Diagnostic Hysteroscopy</strong> – Gentle endoscopic
                  evaluation of the uterine cavity for abnormal bleeding or
                  infertility.
                </li>
                <li>
                  <strong>Hysteroscopic Polypectomy</strong> – Scarless removal
                  of uterine polyps through hysteroscopic techniques.
                </li>
                <li>
                  <strong>Endometriosis Surgery</strong> – Advanced 3D
                  laparoscopic excision for pelvic pain relief and improved
                  fertility outcomes.
                </li>
                <li>
                  <strong>Paediatric Care</strong> – Newborn care,
                  vaccinations, and compassionate pediatric consultations for
                  growing families.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Reproductive Health Conditions Treated
              </h2>

              <p className="mb-4 text-gray-700">
                Women visit a reproductive health specialist for many reasons.
                Some of the most common conditions include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>PCOS (Polycystic Ovary Syndrome)</strong> – irregular
                  periods, weight gain, and difficulty conceiving.
                </li>
                <li>
                  <strong>Infertility</strong> – both male and female factor
                  infertility evaluation and treatment.
                </li>
                <li>
                  <strong>Uterine Fibroids</strong> – benign growths causing
                  heavy bleeding or pelvic pressure.
                </li>
                <li>
                  <strong>Endometriosis</strong> – chronic pelvic pain caused by
                  tissue growth outside the uterus.
                </li>
                <li>
                  <strong>Ovarian Cysts</strong> – fluid-filled sacs that may
                  require monitoring or surgical removal.
                </li>
                <li>
                  <strong>Abnormal Uterine Bleeding</strong> – irregular, heavy,
                  or prolonged menstrual bleeding.
                </li>
                <li>
                  <strong>High-Risk Pregnancy</strong> – conditions like
                  gestational diabetes, hypertension, or multiple pregnancies.
                </li>
                <li>
                  <strong>Pelvic Organ Prolapse</strong> – weakening of pelvic
                  support structures, especially post-childbirth.
                </li>
                <li>
                  <strong>Menopausal Symptoms</strong> – hormonal changes
                  requiring management and support.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your First Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Many women feel anxious before their first gynaecology visit.
                Knowing what to expect can help ease that worry:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A detailed discussion of your medical history, menstrual
                  cycle, and current concerns.
                </li>
                <li>
                  A physical examination, only with your comfort and consent
                  prioritized throughout.
                </li>
                <li>
                  Recommended diagnostic tests such as ultrasound, blood work,
                  or hormonal panels if needed.
                </li>
                <li>
                  A clear explanation of findings in simple, understandable
                  language — not just medical jargon.
                </li>
                <li>
                  A personalized treatment plan discussed collaboratively with
                  you, not imposed on you.
                </li>
                <li>
                  An opportunity to ask questions freely about symptoms,
                  treatment options, and next steps.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose a Local Specialist in Moradabad Instead of Travelling
                to Bigger Cities
              </h2>

              <p className="mb-4 text-gray-700">
                Many women in Moradabad and nearby areas (Rampur, Amroha,
                Sambhal, Bijnor) often assume that advanced reproductive care is
                only available in Delhi or bigger metros. This is no longer
                true. Here&apos;s why staying local makes sense:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Advanced technology like 3D laparoscopy and AI-based fertility
                  diagnostics is now available right in Moradabad.
                </li>
                <li>
                  Continuity of care is easier when your doctor is nearby for
                  follow-ups, especially during pregnancy.
                </li>
                <li>
                  Lower travel stress during high-risk pregnancy monitoring or
                  post-surgical recovery.
                </li>
                <li>
                  Personalized, relationship-based care rather than a rushed,
                  transactional big-hospital experience.
                </li>
                <li>
                  Cost-effective treatment without compromising on quality or
                  technology.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for Maintaining Good Reproductive Health
              </h2>

              <p className="mb-4 text-gray-700">
                While a specialist plays a key role in your reproductive
                journey, some daily habits also support long-term health:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Track your menstrual cycle to notice irregularities early.
                </li>
                <li>
                  Maintain a balanced diet rich in iron, folic acid, and
                  essential vitamins.
                </li>
                <li>
                  Exercise regularly to support hormonal balance and healthy
                  weight.
                </li>
                <li>
                  Avoid self-medicating for menstrual pain or irregular bleeding
                  — consult a specialist instead.
                </li>
                <li>
                  Schedule routine gynaecological check-ups even without
                  symptoms, at least once a year.
                </li>
                <li>
                  Practice safe contraception and family planning based on
                  professional guidance.
                </li>
                <li>
                  Manage stress, as it can significantly impact hormonal health
                  and fertility.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                gynaecologistmoradabad.com
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A clean, mobile-friendly homepage titled &quot;Best
                  Gynaecologist in Moradabad – Dr. Priyanka Pachauri.&quot;
                </li>
                <li>
                  A dedicated Services section covering all 14 specialities,
                  from laparoscopy to fertility to pediatric care.
                </li>
                <li>
                  An About Us page detailing the doctor&apos;s credentials and
                  clinic philosophy.
                </li>
                <li>
                  A regularly updated Blogs section with patient-friendly
                  articles on topics like PCOS, endometriosis, and
                  trimester-wise pregnancy care.
                </li>
                <li>
                  Real patient testimonials and video stories building trust and
                  transparency.
                </li>
                <li>
                  Clear, easy-to-find Contact details with click-to-call and
                  WhatsApp options — a strong plus for patients seeking quick
                  appointment queries.
                </li>
                <li>
                  Structured metadata (title, description, keywords) that
                  clearly targets local search terms like &quot;best
                  gynaecologist Moradabad&quot; and &quot;IVF centre
                  Moradabad.&quot;
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Gynaec – Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Fertility Specialist (MBBS, MS)
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