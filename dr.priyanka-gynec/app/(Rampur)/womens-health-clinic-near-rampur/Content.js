
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Rampur?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Rampur and nearby areas travel there for consultations.",
  },
  {
    q: "What kind of clinic is it?",
    a: "It is a women's health and fertility centre offering gynaecology, pregnancy care, fertility and IVF, laparoscopic surgery, hysteroscopy and paediatric care.",
  },
  {
    q: "Who will I consult?",
    a: "You will consult Dr. Priyanka Pachauri.",
  },
  {
    q: "Do I need an appointment before travelling?",
    a: "Yes, booking in advance is recommended. Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
  },
  {
    q: "Can unmarried women or teenagers visit?",
    a: "Yes. Women of any age or marital status can consult a gynaecologist for periods, hormonal concerns, infections or preventive care.",
  },
  {
    q: "Does the clinic offer IVF and pregnancy care?",
    a: "Yes. It offers fertility and IVF treatment, antenatal care, normal delivery support, high-risk pregnancy management and postnatal care.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports and scans, and the doctor will review them and explain your options.",
  },
  {
    q: "Can some follow-up checks be done closer to home?",
    a: "Some routine tests may be possible locally. Ask your doctor which ones, and share the reports with the clinic.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on the clinic website.',
  },
];

export default function WomensHealthClinicNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Women&apos;s Health Clinic near Rampur – Dr. Priyanka Gynaec,
              Moradabad
            </h1>

            <p>
              Women&apos;s health needs change through life. A teenager may
              need guidance about painful periods. A young woman may be
              planning a pregnancy. A new mother needs recovery support, and
              a woman in her forties may be facing heavy bleeding or the start
              of menopause. A good women&apos;s health clinic can follow you
              through all these stages.
            </p>

            <p>
              If you live in Rampur, <strong>Dr. Priyanka Gynaec</strong>, led
              by <strong>Dr. Priyanka Pachauri</strong> in neighbouring{" "}
              <strong>Moradabad</strong>, is an option to consider. The clinic
              is located in Moradabad, not in Rampur, and women from Rampur
              and nearby areas travel there for care. It is a women&apos;s
              health and fertility centre offering gynaecology, laparoscopy,
              IVF and pregnancy care. Its philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What a Complete Women&apos;s Health Clinic Should Offer
              </h2>
              <p>
                Before choosing a clinic, check whether it covers these areas.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>General gynaecology:</strong> Periods, infections,
                  hormones and preventive care
                </li>
                <li>
                  <strong>Pregnancy care:</strong> Antenatal visits, scans and
                  delivery planning
                </li>
                <li>
                  <strong>Fertility care:</strong> Evaluation of both partners
                  and treatment options
                </li>
                <li>
                  <strong>Surgical care:</strong> Modern, minimally invasive
                  options when surgery is needed
                </li>
                <li>
                  <strong>Postnatal and baby care:</strong> Recovery support
                  and newborn services
                </li>
                <li>
                  <strong>Diagnostics:</strong> Accurate imaging and tests
                </li>
                <li>
                  <strong>Privacy and respect:</strong> A setting where you can
                  speak freely
                </li>
                <li>
                  <strong>Continuity:</strong> A team that remembers your
                  history
                </li>
              </ul>
              <p>
                One clinic that covers most of these saves you from repeated
                referrals, which matters even more when you travel.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Services at Dr. Priyanka Gynaec
              </h2>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Gynaecology and Hormonal Care
                </h3>
                <p>
                  Consultations for irregular, painful, missed or heavy
                  periods, PCOS, infections, pelvic pain, contraception,
                  menopause symptoms and preventive check-ups. PCOS is highly
                  treatable, and lifestyle changes, medicines and ovulation
                  induction help many women regulate cycles or conceive.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Pregnancy and Antenatal Care
                </h3>
                <p>
                  Trimester-wise check-ups, ultrasound on a Voluson E22
                  3D/4D machine, blood tests, screening for gestational
                  diabetes and thyroid problems, nutrition guidance and labour
                  preparation. Normal delivery is prioritised wherever it is
                  safe, and a caesarean is advised only when medically
                  necessary. High-risk pregnancies receive closer monitoring.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Fertility and IVF
                </h3>
                <p>
                  Evaluation of both partners, ovulation tracking and
                  induction, IVF, time-lapse embryo monitoring, and AI-powered
                  semen analysis with DNA integrity testing. Plans are
                  personalised to your age, history and test results.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  3D Laparoscopic Surgery
                </h3>
                <p>
                  Keyhole surgery generally means smaller scars, less pain
                  and quicker recovery. Procedures include laparoscopic
                  cystectomy, myomectomy, hysterectomy, endometriosis surgery,
                  sacrocolpopexy and sterilization. Surgery is recommended
                  only when it is truly the best option, and alternatives are
                  always discussed first.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Hysteroscopy
                </h3>
                <p>
                  Diagnostic hysteroscopy gently examines the uterine cavity,
                  and hysteroscopic polypectomy removes polyps without cuts.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Postnatal and Paediatric Care
                </h3>
                <p>
                  Recovery guidance, breastfeeding support, contraception
                  counselling, paediatric consultations, vaccinations and
                  newborn care.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Technology Used With Empathy
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>High-definition 3D laparoscopy</li>
                <li>Voluson E22 3D and 4D ultrasound</li>
                <li>Time-lapse imaging for embryo monitoring</li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
              </ul>
              <p>
                Technology supports the doctor&apos;s judgement. It does not
                replace the conversation with you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Care at Every Age
              </h2>
              <p>
                <strong>Teenagers:</strong> Guidance on first periods,
                painful or irregular cycles, acne and hormonal concerns, in a
                gentle setting.
              </p>
              <p>
                <strong>Twenties and thirties:</strong> Contraception, PCOS,
                pregnancy planning, fertility, pregnancy and postnatal
                recovery.
              </p>
              <p>
                <strong>Forties:</strong> Fibroids, heavy periods,
                perimenopause and preventive screening.
              </p>
              <p>
                <strong>After menopause:</strong> Evaluation of any bleeding,
                pelvic floor health and long-term wellbeing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Is It Worth Travelling From Rampur?
              </h2>
              <p>
                For routine concerns, a doctor near home may be enough. A
                longer trip can make sense when you want:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Advanced fertility or IVF care</li>
                <li>Close monitoring for a high-risk pregnancy</li>
                <li>Minimally invasive 3D laparoscopic surgery</li>
                <li>A second opinion before a major procedure</li>
                <li>
                  Several services at one place, so repeat trips are fewer
                </li>
              </ul>
              <p>
                Weigh the benefit against the effort of repeated visits, and
                ask early how often you will need to come.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How to Use a Clinic in Another City Well
              </h2>

              <h3 className="text-lg font-semibold text-gray-900">
                Before your first visit:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Book in advance by phone or WhatsApp, and confirm timings
                </li>
                <li>
                  Gather previous prescriptions, blood tests, ultrasounds and
                  surgical records
                </li>
                <li>
                  Note the date of your last period, your symptoms and your
                  questions
                </li>
                <li>List your medicines and supplements</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                At the first visit:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Ask how often you will need to return</li>
                <li>
                  Ask which checks can be done closer to home, if the doctor
                  agrees
                </li>
                <li>
                  Ask whether tests and consultations can be planned on the
                  same day
                </li>
                <li>Ask how to reach the clinic with questions afterwards</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Afterwards:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Keep all reports in one folder, plus photos on your phone</li>
                <li>Note follow-up dates in your calendar</li>
                <li>Share local test reports with the clinic</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Your First Consultation
              </h2>
              <p>
                A first visit is a conversation first. You can expect:
              </p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  A discussion of your symptoms, cycle history and medical
                  background
                </li>
                <li>
                  A gentle examination only if necessary, explained beforehand
                </li>
                <li>Ultrasound or blood tests if required</li>
                <li>A clear explanation of findings and options</li>
                <li>Time to ask questions without pressure</li>
              </ol>
              <p>
                You may bring a family member or friend, or choose to speak
                with the doctor alone. Your concerns are discussed respectfully,
                and your medical details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Signs You Should Not Wait
              </h2>
              <p>Book a visit if you notice:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Missed, irregular, very heavy or very painful periods</li>
                <li>
                  Bleeding between periods, after intercourse or after
                  menopause
                </li>
                <li>Persistent pelvic pain</li>
                <li>
                  Unusual discharge with itching, burning or odour
                </li>
                <li>A lump, cyst or fibroid found on a scan</li>
                <li>Difficulty conceiving after 6 to 12 months of trying</li>
                <li>A positive pregnancy test</li>
              </ul>
              <p>
                For sudden severe pain, very heavy bleeding, bleeding during
                pregnancy or reduced baby movements, go to the nearest
                emergency facility immediately. Do not delay care to travel to
                another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and endometriosis care,
                  with a compassionate approach
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Gynaecology,
                  fertility, pregnancy and paediatric services
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice based on what you
                  truly need
                </li>
                <li>
                  <strong>Trust earned over time:</strong> A reputation built
                  on families recommending the clinic to one another
                </li>
              </ul>
            </section>

            <section className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Clinic Address and Appointments
              </h2>
              <p className="mb-5">
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>

              <div className="space-y-3">
                <p className="flex flex-wrap items-center gap-2">
                  <Phone size={18} />
                  <strong>Call for appointment:</strong>
                  <a
                    href="tel:+919079765578"
                    className="font-semibold text-[#8F1738] hover:underline"
                  >
                    +91 90797 65578
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-2">
                  <Phone size={18} />
                  <strong>WhatsApp:</strong>
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#8F1738] hover:underline"
                  >
                    +91 89796 70705
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-2">
                  <Mail size={18} />
                  <strong>Email:</strong>
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="break-all font-semibold text-[#8F1738] hover:underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-2">
                  <Globe size={18} />
                  <strong>Website:</strong>
                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all font-semibold text-[#8F1738] hover:underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  Explore Services
                </Link>
              </div>
            </section>

            <section className="space-y-5 pt-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </section>
          </article>

          <aside className="lg:sticky lg:top-24">
            <LandingEnquiryForm />
          </aside>
        </div>
      </section>
    </main>
  );
}
