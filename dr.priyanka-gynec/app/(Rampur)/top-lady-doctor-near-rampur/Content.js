
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
    q: "Can I bring my daughter for a consultation?",
    a: "Yes. Teenage girls can consult for painful, heavy or irregular periods, acne or hormonal concerns. A parent may stay with her or leave her to speak privately, as she prefers.",
  },
  {
    q: "Can a newly married woman consult before planning a baby?",
    a: "Yes. A preconception consultation helps with contraception, cycle tracking, health checks and starting supplements.",
  },
  {
    q: "Is there a lady doctor for pregnancy care?",
    a: "Yes. Dr. Priyanka Pachauri provides antenatal care, normal delivery support, high-risk pregnancy management and postnatal care.",
  },
  {
    q: "Can an older woman consult for menopause concerns?",
    a: "Yes. Hot flushes, sleep trouble, pelvic floor problems and any bleeding after menopause can all be assessed.",
  },
  {
    q: "Does the clinic offer IVF?",
    a: "Yes. The clinic offers fertility and IVF treatment with time-lapse embryo monitoring and AI-powered semen analysis with DNA integrity testing.",
  },
  {
    q: "Is my consultation private?",
    a: "Yes. Concerns are discussed respectfully, and your medical details are kept confidential.",
  },
  {
    q: "Do I need an appointment before travelling?",
    a: "Yes, booking in advance is recommended. Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
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

export default function TopLadyDoctorNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Top Lady Doctor near Rampur for Every Woman in Your Family
            </h1>

            <p>
              In many homes, one trusted doctor looks after several generations
              of women. A mother brings her teenage daughter. A daughter takes
              her mother for a check-up. A newly married couple asks about
              starting a family. A trusted lady doctor becomes part of the
              family&apos;s health story.
            </p>

            <p>
              If you are searching for a top lady doctor near Rampur,{" "}
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec in
              neighbouring Moradabad is an option to consider. The clinic is
              located in <strong>Moradabad</strong>, not in Rampur, and women
              from Rampur and nearby areas travel there for consultations. Its
              philosophy is <strong>&quot;Her Health First.&quot;</strong> You
              are listened to, informed and never rushed.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why a Lady Doctor Matters to Many Families
              </h2>
              <p>
                For many women and their families, a female doctor makes
                difficult conversations easier. Daughters may feel more at
                ease asking about periods. Mothers-in-law may feel more
                comfortable when a woman examines a daughter-in-law. Women who
                have avoided check-ups for years may finally agree to one.
                This is a personal preference, and what matters most is that
                the woman feels safe to speak openly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Care for Teenage Girls
              </h2>
              <p>
                The teenage years bring many questions about periods, acne,
                weight and body changes. A gentle consultation can help a girl
                feel informed instead of anxious.
              </p>
              <p>Consider a visit if she has:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Very painful periods that disrupt school or daily life</li>
                <li>Very heavy bleeding or periods lasting over a week</li>
                <li>No periods by around 15 years of age</li>
                <li>
                  Persistently irregular cycles after the first couple of
                  years
                </li>
                <li>Significant acne or excess hair growth</li>
              </ul>
              <p>
                Irregular periods are common in the first two years after a
                girl&apos;s first period, so a doctor will assess carefully
                before giving any label. A parent can stay in the room if the
                girl prefers, or she can speak privately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Care for Young Women and Newly Married Couples
              </h2>
              <p>
                This stage often brings questions about contraception,
                planning a pregnancy and sexual health. A lady doctor can help
                you:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Choose a contraceptive method suited to your health and plans</li>
                <li>Understand your cycle and fertile days</li>
                <li>
                  Check for infections, thyroid problems or PCOS before
                  conceiving
                </li>
                <li>Start folic acid and healthy habits before pregnancy</li>
              </ul>
              <p>
                There is no need to wait for a problem. A preconception
                consultation helps the pregnancy start on a healthier footing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Care for Women Planning a Baby
              </h2>
              <p>
                If pregnancy has not happened after 12 months of trying, or
                after 6 months if you are 35 or older, an evaluation is a good
                idea. Seek help sooner if your periods are irregular or you
                have known gynaecological conditions.
              </p>
              <p>The clinic offers:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Evaluation of both partners</li>
                <li>Ovulation tracking and induction</li>
                <li>IVF with advanced laboratory support</li>
                <li>Time-lapse embryo monitoring</li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
              </ul>
              <p>
                PCOS is one of the most common and most treatable causes of
                difficulty conceiving. Many women conceive with lifestyle
                changes and ovulation induction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Care for Mothers-to-Be
              </h2>
              <p>
                Pregnancy brings joy and many questions. Antenatal care at the
                clinic includes:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Early registration and trimester-wise check-ups</li>
                <li>Ultrasound on a Voluson E22 3D/4D machine</li>
                <li>
                  Blood tests and screening for gestational diabetes, anaemia
                  and thyroid problems
                </li>
                <li>Nutrition and lifestyle guidance</li>
                <li>Labour and delivery preparation</li>
              </ul>
              <p>
                Normal vaginal delivery is prioritised wherever it is safe for
                mother and baby. If a caesarean becomes necessary, the reasons
                are explained openly so that the woman and her family
                understand the decision.
              </p>
              <p>
                Women with diabetes, high blood pressure, thyroid disease,
                previous miscarriages, twins or pregnancy after IVF receive
                closer monitoring and a planned approach to delivery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Care for New Mothers and Babies
              </h2>
              <p>
                The weeks after delivery are demanding. Recovery, feeding,
                sleep and emotions all need attention. The clinic provides:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Postnatal check-ups and recovery guidance</li>
                <li>Breastfeeding support</li>
                <li>Contraception counselling</li>
                <li>Emotional wellbeing support</li>
                <li>
                  Paediatric consultations, newborn care and vaccinations
                </li>
              </ul>
              <p>
                Families can help by encouraging new mothers to rest, eat well
                and attend follow-up visits. Persistent sadness, anxiety or
                hopelessness after birth deserves attention and is treatable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Care in the Thirties and Forties
              </h2>
              <p>
                Women in this stage often juggle work, children and household
                duties, and their own health slips down the list. Common
                concerns include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Heavy or painful periods</li>
                <li>Fibroids, ovarian cysts or endometriosis</li>
                <li>Pelvic pain</li>
                <li>Thyroid or hormonal changes</li>
                <li>Early signs of perimenopause</li>
              </ul>
              <p>
                Where treatment is needed, 3D laparoscopic options such as
                cystectomy, myomectomy and endometriosis surgery can mean
                smaller scars, less pain and quicker recovery. Surgery is
                recommended only when it is truly the best choice, and
                alternatives are always discussed first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Care Around and After Menopause
              </h2>
              <p>
                Menopause is a natural change, but its symptoms can be hard to
                live with. A lady doctor can help with:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Hot flushes, sleep trouble and mood changes</li>
                <li>Vaginal dryness or discomfort</li>
                <li>Urine leakage or a feeling of pelvic heaviness</li>
                <li>Long-term health advice</li>
              </ul>
              <p>
                Any bleeding after menopause should always be examined
                promptly. Many older women ignore pelvic floor problems out
                of embarrassment, yet they are common and treatable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Makes a Lady Doctor &quot;Top&quot; for a Family?
              </h2>
              <p>Look for these qualities:</p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong>Patience:</strong> She welcomes questions from
                  patients and family members.
                </li>
                <li>
                  <strong>Respect for privacy:</strong> Each woman can speak
                  to her privately if she wishes.
                </li>
                <li>
                  <strong>Honesty:</strong> Tests and surgery are advised only
                  when needed.
                </li>
                <li>
                  <strong>Range of services:</strong> Several family needs can
                  be met in one place.
                </li>
                <li>
                  <strong>Continuity:</strong> The team remembers each
                  woman&apos;s history.
                </li>
                <li>
                  <strong>Modern tools:</strong> Imaging and surgical options
                  that improve accuracy and safety.
                </li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Privacy Within the Family
              </h2>
              <p>
                Different generations may have different comfort levels. At
                Dr. Priyanka Gynaec, each woman&apos;s concerns are discussed
                respectfully, and her medical details are kept confidential.
                A family member may accompany her if she wishes, and she can
                always ask to speak with the doctor alone. Teenagers and
                married women alike can raise sensitive concerns without
                being judged.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning a Family Visit from Rampur
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Book in advance by phone or WhatsApp, and confirm current
                  timings
                </li>
                <li>
                  Let the clinic know if more than one woman wishes to be seen
                </li>
                <li>
                  Bring each woman&apos;s previous prescriptions, blood tests
                  and scans
                </li>
                <li>Note symptoms and questions for each person</li>
                <li>Allow extra time for travel and possible waiting</li>
                <li>
                  For pregnant women or older relatives, ask the doctor
                  whether any travel limits apply
                </li>
              </ul>
              <p>
                For emergencies, such as very heavy bleeding, sudden severe
                pain, bleeding in pregnancy or reduced baby movements, go to
                the nearest emergency facility immediately rather than
                travelling a long distance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                About Dr. Priyanka Gynaec
              </h2>
              <p>
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                centre offering gynaecology, laparoscopy, IVF and pregnancy
                care, along with paediatric support. It uses 3D laparoscopy,
                3D and 4D ultrasound, time-lapse embryo imaging and AI-powered
                semen analysis, with technology used alongside empathy and
                patience.
              </p>
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
