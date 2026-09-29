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

export default function DoctorForPeriodPainMoradabad() {
  const faqs = [
    {
      q: "Who is the best doctor for period pain in Moradabad?",
      a: "Dr. Priyanka Pachauri is a trusted and experienced gynaecologist in Moradabad for diagnosing and treating severe period pain.",
    },
    {
      q: "Is severe period pain always caused by an underlying condition?",
      a: "Not always; some women have primary dysmenorrhoea without an underlying cause, but persistent severe pain should be evaluated.",
    },
    {
      q: "What is the most common cause of secondary period pain?",
      a: "Endometriosis is one of the most common underlying causes of severe, worsening period pain.",
    },
    {
      q: "Can period pain be treated without surgery?",
      a: "Yes, many cases are managed effectively with medication, hormonal therapy, and lifestyle changes.",
    },
    {
      q: "Does endometriosis affect fertility?",
      a: "Yes, if left untreated, endometriosis can affect fertility, making early diagnosis important.",
    },
    {
      q: "Is it normal for period pain to get worse over the years?",
      a: "No, progressively worsening pain often signals an underlying condition that needs evaluation.",
    },
    {
      q: "Can lifestyle changes help reduce period pain?",
      a: "Yes, heat therapy, light exercise, and dietary changes can help reduce the intensity of cramps.",
    },
    {
      q: "Does the clinic offer laparoscopic treatment for endometriosis?",
      a: "Yes, Dr. Priyanka Pachauri performs advanced 3D laparoscopic surgery for endometriosis-related pain relief.",
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
                Doctor for Period Pain in Moradabad – Complete Guide by Dr.
                Priyanka Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                Almost every woman experiences some level of discomfort during
                her periods, but for many, the pain goes far beyond mild
                cramping. Severe period pain that disrupts daily activities,
                school, or work is not something you should simply endure every
                month. If you are searching for a doctor for period pain in
                Moradabad, this guide explains what causes severe menstrual
                pain, when it needs medical attention, and how an experienced
                gynaecologist like Dr. Priyanka Pachauri can help you find
                lasting relief.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is Period Pain Normal?
              </h2>

              <p className="mb-4 text-gray-700">
                Mild cramping during the first day or two of your period is
                common and usually manageable with rest and simple home care.
                However, there is a clear difference between normal discomfort
                and pain that signals an underlying issue.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild to moderate cramping in the lower abdomen during the
                  first 1–2 days is typically normal.
                </li>
                <li>
                  Pain that responds well to rest, heat, or mild pain relief is
                  usually not concerning.
                </li>
                <li>
                  Pain that gradually reduces as the cycle progresses is a
                  normal pattern.
                </li>
                <li>
                  Pain that disrupts daily life, school, or work every single
                  cycle is not something to simply &quot;tolerate&quot;.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Period Pain Is Not Normal
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain so severe it prevents you from attending work, school, or
                  daily activities.
                </li>
                <li>
                  Pain that doesn&apos;t improve with over-the-counter pain
                  relief.
                </li>
                <li>
                  Cramps accompanied by heavy bleeding or large clots.
                </li>
                <li>
                  Pain that starts days before your period and continues after
                  it ends.
                </li>
                <li>
                  Pain during intercourse alongside period pain.
                </li>
                <li>
                  Pain that worsens progressively with each cycle over time.
                </li>
                <li>
                  Lower back pain, leg pain, or digestive symptoms accompanying
                  period cramps.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If your period pain matches any of these patterns, it&apos;s
                time to consult a gynaecologist for menstrual cramps rather than
                relying solely on painkillers month after month.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Severe Period Pain
              </h2>

              <p className="mb-4 text-gray-700">
                Severe period pain, medically known as dysmenorrhoea, can be
                primary (without an underlying condition) or secondary (caused
                by an identifiable gynaecological issue).
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Primary dysmenorrhoea:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Caused by natural uterine contractions during menstruation.
                </li>
                <li>
                  Often begins in the teenage years, shortly after periods
                  start.
                </li>
                <li>
                  Usually improves with age or after childbirth in many women.
                </li>
                <li>
                  Manageable with pain relief, heat therapy, and lifestyle
                  adjustments.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Secondary dysmenorrhoea (underlying conditions):
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Endometriosis – tissue similar to the uterine lining growing
                  outside the uterus.
                </li>
                <li>
                  Adenomyosis – uterine lining tissue growing into the muscular
                  wall.
                </li>
                <li>
                  Uterine fibroids causing pressure and cramping.
                </li>
                <li>
                  Pelvic Inflammatory Disease (PID) from infection.
                </li>
                <li>
                  Ovarian cysts causing pain that intensifies during periods.
                </li>
                <li>
                  Use of certain IUDs, which can increase cramping in some
                  women.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Severe Period Pain Should Never Be Ignored
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Untreated endometriosis can progressively worsen and affect
                  fertility over time.
                </li>
                <li>
                  Chronic pain can significantly impact mental health, sleep,
                  and daily productivity.
                </li>
                <li>
                  Relying only on painkillers can mask an underlying condition
                  that needs treatment.
                </li>
                <li>
                  Missed diagnosis of fibroids or cysts can lead to
                  complications if left unaddressed.
                </li>
                <li>
                  Long-term unmanaged pain can affect relationships, work, and
                  overall quality of life.
                </li>
                <li>
                  Early diagnosis often leads to simpler, more effective
                  treatment options.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor for Period Pain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain is severe enough to interfere with daily activities every
                  cycle.
                </li>
                <li>
                  Over-the-counter pain relief provides little to no
                  improvement.
                </li>
                <li>
                  Pain has progressively worsened over recent months or years.
                </li>
                <li>
                  Period pain is accompanied by heavy bleeding or irregular
                  cycles.
                </li>
                <li>
                  You experience pain during intercourse in addition to period
                  pain.
                </li>
                <li>
                  Pain is accompanied by digestive symptoms like bloating,
                  diarrhoea, or constipation during periods.
                </li>
                <li>
                  You are planning pregnancy and have a history of severe period
                  pain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Pachauri Diagnoses the Cause of Period Pain
              </h2>

              <p className="mb-4 text-gray-700">
                A structured evaluation helps distinguish between normal
                menstrual cramping and pain caused by an underlying
                gynaecological condition.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed discussion of pain pattern, intensity, and menstrual
                  history.
                </li>
                <li>Physical and pelvic examination.</li>
                <li>
                  Ultrasound (2D/3D/4D) to check for fibroids, cysts, or
                  adenomyosis.
                </li>
                <li>
                  Blood tests to rule out infection or other contributing
                  factors.
                </li>
                <li>
                  Diagnostic laparoscopy in suspected cases of endometriosis.
                </li>
                <li>
                  Hysteroscopy when uterine causes are suspected.
                </li>
                <li>
                  Pain pattern tracking over cycles to identify triggers and
                  severity trends.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri – Trusted Doctor for Period Pain in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a well-respected gynaecologist in
                Moradabad, known for her expertise in diagnosing and treating
                both simple and complex causes of period pain.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medal credentials with international fellowship training.
                </li>
                <li>
                  Specialized expertise in laparoscopic diagnosis and treatment
                  of endometriosis.
                </li>
                <li>
                  Access to advanced diagnostic tools, including 3D/4D
                  ultrasound imaging.
                </li>
                <li>
                  Strong track record managing fibroids, adenomyosis, and
                  chronic pelvic pain.
                </li>
                <li>
                  Known for patient, thorough consultations that go beyond just
                  prescribing painkillers.
                </li>
                <li>
                  Trusted by women across Moradabad for long-term, effective
                  pain management.
                </li>
                <li>
                  Fertility-conscious treatment approach for women planning
                  future pregnancies.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options Offered for Period Pain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Medical management with targeted pain relief and hormonal
                  therapy.
                </li>
                <li>
                  Laparoscopic excision surgery for endometriosis-related pain
                  relief.
                </li>
                <li>
                  Laparoscopic Myomectomy for fibroid-related period pain.
                </li>
                <li>
                  Diagnostic Hysteroscopy for uterine causes of pain.
                </li>
                <li>
                  Hormonal treatment to regulate and reduce painful uterine
                  contractions.
                </li>
                <li>
                  Lifestyle and dietary guidance to support long-term symptom
                  management.
                </li>
                <li>
                  Regular monitoring and follow-up to track pain improvement
                  over cycles.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri Over Long-Term Painkiller Use?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Accurate diagnosis instead of only masking symptoms with
                  medication.
                </li>
                <li>
                  Advanced laparoscopic techniques for conditions like
                  endometriosis.
                </li>
                <li>
                  Fertility-preserving treatment approach for women planning
                  pregnancy.
                </li>
                <li>
                  Long-term symptom management rather than temporary relief.
                </li>
                <li>
                  Comfortable, private environment to discuss sensitive
                  pain-related concerns.
                </li>
                <li>
                  Continuity of care with tracking of your pain pattern over
                  multiple cycles.
                </li>
                <li>
                  Reduced dependency on painkillers through addressing the root
                  cause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Period Pain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Severe period pain is just something
                  women must live with. <strong>Fact:</strong> Severe,
                  disruptive pain often has a treatable underlying cause.
                </li>
                <li>
                  <strong>Myth:</strong> Painkillers are the only solution for
                  period cramps. <strong>Fact:</strong> Identifying and treating
                  the root cause can reduce or eliminate the need for regular
                  pain relief.
                </li>
                <li>
                  <strong>Myth:</strong> Period pain always gets better after
                  marriage or childbirth. <strong>Fact:</strong> While this is
                  true for some women with primary dysmenorrhoea, it
                  doesn&apos;t apply to conditions like endometriosis.
                </li>
                <li>
                  <strong>Myth:</strong> Endometriosis is rare and unlikely to
                  be the cause. <strong>Fact:</strong> Endometriosis is a common
                  cause of chronic period pain, often underdiagnosed for years.
                </li>
                <li>
                  <strong>Myth:</strong> If pain is manageable with medicine, no
                  further evaluation is needed. <strong>Fact:</strong> Even
                  manageable pain that worsens over time should be evaluated to
                  prevent progression.
                </li>
                <li>
                  <strong>Myth:</strong> Exercise should be avoided completely
                  during painful periods. <strong>Fact:</strong> Light activity
                  and stretching can actually help reduce cramping for many
                  women.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Tips to Manage Period Pain
              </h2>

              <p className="mb-4 text-gray-700">
                Alongside medical treatment, certain everyday habits can help
                reduce the intensity of menstrual cramps.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Apply a warm compress or heating pad to the lower abdomen
                  during cramps.
                </li>
                <li>
                  Stay physically active with light exercise or stretching
                  between cycles.
                </li>
                <li>
                  Maintain a balanced diet rich in anti-inflammatory foods like
                  leafy greens and nuts.
                </li>
                <li>
                  Reduce salt, caffeine, and processed food intake, especially
                  before your period.
                </li>
                <li>Stay well-hydrated throughout your cycle.</li>
                <li>
                  Practice stress-reducing activities like yoga, meditation, or
                  deep breathing.
                </li>
                <li>
                  Get adequate sleep, as poor sleep can worsen pain perception.
                </li>
                <li>
                  Track your pain pattern, intensity, and triggers using a
                  period tracking app or diary.
                </li>
                <li>
                  Avoid excessive reliance on over-the-counter painkillers
                  without medical guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A calm, private, and understanding consultation environment.
                </li>
                <li>
                  Sufficient time to describe your pain pattern and its impact
                  on daily life.
                </li>
                <li>
                  Clear explanation of possible causes based on your history and
                  examination.
                </li>
                <li>
                  Only necessary diagnostic tests recommended for an accurate
                  diagnosis.
                </li>
                <li>
                  A step-by-step treatment plan addressing both symptoms and
                  root cause.
                </li>
                <li>
                  Guidance on lifestyle changes to support long-term pain
                  management.
                </li>
                <li>
                  Ongoing follow-up to track improvement and adjust treatment as
                  needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Period Pain and Fertility: What You Should Know
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Primary dysmenorrhoea generally does not affect fertility.
                </li>
                <li>
                  Endometriosis, if left untreated, can impact fertility over
                  time.
                </li>
                <li>
                  Adenomyosis and fibroids may affect conception depending on
                  size and location.
                </li>
                <li>
                  Early diagnosis and treatment of underlying causes improve
                  long-term fertility outcomes.
                </li>
                <li>
                  Women planning pregnancy with a history of severe period pain
                  should discuss this proactively with their doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Appointment with Dr. Priyanka Pachauri, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you are tired of severe period pain disrupting your life and
                are searching for a reliable doctor for period pain in Moradabad,
                Dr. Priyanka Pachauri&apos;s clinic offers thorough diagnosis
                and effective, long-term treatment.
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
                Severe period pain is not something you should accept as
                &quot;just part of being a woman.&quot; Whether it&apos;s caused
                by natural uterine contractions or an underlying condition like
                endometriosis or fibroids, effective treatment is available.
                Consulting an experienced doctor for period pain in Moradabad
                like Dr. Priyanka Pachauri ensures accurate diagnosis, a
                personalized treatment plan, and long-term relief so your
                periods no longer control your life.
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
