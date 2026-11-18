
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Rampur?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Rampur and nearby areas travel there for pregnancy care.",
  },
  {
    q: "When should I have my first pregnancy scan?",
    a: "Usually in the early weeks after a positive pregnancy test, as advised by your doctor. Earlier scans are done if you have bleeding or pain.",
  },
  {
    q: "How many scans will I need?",
    a: "It depends on your health and pregnancy. Low-risk pregnancies need fewer scans, while high-risk pregnancies may need more.",
  },
  {
    q: "Can a scan be planned on the same day as my check-up?",
    a: "Often this can be arranged. Ask the clinic when you book.",
  },
  {
    q: "What is an anomaly scan?",
    a: "It is a detailed mid-pregnancy scan that checks the baby's organs and structure, along with the placenta and amniotic fluid.",
  },
  {
    q: "Is ultrasound safe for my baby?",
    a: "Ultrasound does not use radiation, and it is considered safe when performed for medical reasons by trained professionals.",
  },
  {
    q: "Can the baby's sex be told during the scan?",
    a: "No. Fetal sex determination is prohibited by law in India, and the clinic does not perform or disclose it.",
  },
  {
    q: "Do I need a full bladder?",
    a: "It may be advised for early scans. Ask the clinic about preparation when you book.",
  },
  {
    q: "What are the clinic timings and scan fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on the clinic website.",
  },
];

export default function PregnancyScanDoctorNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Pregnancy Scan Doctor near Rampur – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              Seeing your baby on screen for the first time is a special
              moment. Medically, pregnancy scans also do important work. They
              confirm the pregnancy, track growth, check the placenta and
              fluid, and help find concerns early. For women in Rampur, scans
              also raise a practical question: how do you fit several scans
              into a pregnancy when your doctor is in another city?
            </p>

            <p>
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec in
              neighbouring <strong>Moradabad</strong> is an option to consider.
              The clinic is located in Moradabad, not in Rampur, and women
              from Rampur and nearby areas travel there for pregnancy care. It
              uses a <strong>Voluson E22 3D and 4D ultrasound machine</strong>,
              and scans are explained by the doctor who follows your pregnancy.
              Its philosophy is <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is a Pregnancy Scan?
              </h2>
              <p>
                An ultrasound uses high-frequency sound waves to create images
                of the baby, uterus and surrounding structures. It does not
                use radiation, and it is considered safe when done for
                medical reasons by trained professionals. Scans may be done
                over the abdomen, or in early pregnancy with a slim vaginal
                probe for clearer images.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                2D, 3D and 4D Scans
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>2D:</strong> The standard flat view used for
                  measurements and most medical assessments.
                </li>
                <li>
                  <strong>3D:</strong> A three-dimensional picture that can
                  help show surface structures in selected situations.
                </li>
                <li>
                  <strong>4D:</strong> A 3D image shown moving in real time.
                </li>
              </ul>
              <p>
                2D scanning remains the foundation of routine pregnancy
                assessment. Your doctor will choose what is useful for your
                pregnancy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Key Scans and What They Check
              </h2>
              <p>
                Timing varies, and your doctor will advise the schedule that
                suits you.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Early Pregnancy (Dating) Scan
                  </h3>
                  <p>
                    Confirms that the pregnancy is in the uterus, shows the
                    heartbeat, counts the babies and helps set the due date.
                    If you have bleeding or pain early on, a scan helps find
                    the cause.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    First Trimester Screening Scan
                  </h3>
                  <p>
                    Usually near the end of the first trimester. It may include
                    a measurement at the back of the baby's neck and is often
                    combined with blood tests. It gives a risk estimate, not
                    a final diagnosis.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Anomaly Scan
                  </h3>
                  <p>
                    A detailed scan around the middle of pregnancy that checks
                    the baby's head, brain, face, spine, heart, abdomen,
                    kidneys and limbs, along with the placenta and fluid.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Growth Scans
                  </h3>
                  <p>
                    In later months, they check the baby's size, position and
                    fluid levels. They matter especially with diabetes, high
                    blood pressure or twins.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Doppler Studies
                  </h3>
                  <p>
                    In selected pregnancies, a special technique checks blood
                    flow in the umbilical cord and the baby's vessels.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Scan Timing Matters
              </h2>
              <p>
                Some scans are only useful within a particular window of
                pregnancy. A detailed scan done too early or too late may be
                less informative. For this reason, plan your scans around
                your due date, not around convenience, and book them in advance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Your Scans When You Live in Rampur
              </h2>

              <h3 className="text-lg font-semibold text-gray-900">
                Ask Your Doctor at the First Visit
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Which scans will I need, and roughly when?</li>
                <li>Which scans must be done at the clinic?</li>
                <li>
                  Can a scan be planned on the same day as an antenatal
                  check-up, so I make fewer trips?
                </li>
                <li>Is any scan time-sensitive, so I should book early?</li>
                <li>What should I do if a scan finding needs a repeat?</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Build a Scan Calendar
              </h3>
              <p>
                Once your due date is set, note the expected scan windows on
                your phone, and book each appointment as soon as you can.
                Share the dates with your family so they can plan to accompany
                you.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                Keep Every Report Together
              </h3>
              <p>
                Carry your antenatal card, scan reports and blood tests to
                every visit, and keep photos on your phone as a backup. Scans
                are compared over time, so earlier reports help the doctor.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing for a Scan
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Early scans:</strong> You may be asked to drink water
                  beforehand so the bladder is comfortably full. Follow the
                  clinic's instructions.
                </li>
                <li>
                  <strong>Later scans:</strong> Usually no special preparation
                  is needed.
                </li>
                <li>
                  Wear comfortable two-piece clothing for easy access to the
                  abdomen.
                </li>
                <li>Bring earlier scans and a list of questions.</li>
                <li>
                  You may bring your partner or a family member, if you wish.
                </li>
              </ul>
              <p>
                When you book, ask about any preparation for that specific
                scan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Happens During the Scan?
              </h2>
              <p>
                You lie comfortably on the examination couch. A gel is
                applied, and the probe is moved gently to capture images. The
                doctor takes measurements, checks the baby's organs and
                structures, and explains findings in simple language. Most
                scans are painless. A vaginal scan may cause brief, mild
                discomfort.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Scans in High-Risk Pregnancy
              </h2>
              <p>
                Women with a high-risk pregnancy may need more frequent or
                specialised scans. Examples include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Gestational or pre-existing diabetes</li>
                <li>High blood pressure or pre-eclampsia</li>
                <li>Twin pregnancy</li>
                <li>Previous miscarriage, stillbirth or preterm birth</li>
                <li>Slow growth of the baby</li>
                <li>Low-lying placenta</li>
                <li>Pregnancy after IVF or long-standing infertility</li>
              </ul>
              <p>
                Dr. Priyanka Pachauri provides high-risk pregnancy monitoring,
                so scan findings link directly to your treatment and delivery
                plan. Ask for the expected schedule early, since closer
                monitoring means more trips.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Important Note on Fetal Sex Determination
              </h2>
              <p>
                Under Indian law (the PCPNDT Act), determining or disclosing
                the sex of the baby during ultrasound is{" "}
                <strong>strictly prohibited</strong>. Dr. Priyanka Gynaec does
                not perform or disclose fetal sex determination. The focus of
                every scan is the health of mother and baby.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Understanding Your Report
              </h2>
              <p>
                Reports may include terms such as gestational age, estimated
                fetal weight, liquor (amniotic fluid) volume, placental
                position and fetal presentation. Normal ranges are broad and
                depend on your stage of pregnancy, so please avoid judging a
                report from internet comparisons. Ask your doctor to explain
                anything that worries you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Ultrasound Cannot Detect Everything
              </h2>
              <p>
                Ultrasound can find many concerns, but not all. Some
                conditions become visible only later in pregnancy or after
                birth. This is why regular antenatal follow-up matters, along
                with blood tests and your doctor's assessment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs Between Scans
              </h2>
              <p>
                Contact your doctor or seek emergency care if you have:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Vaginal bleeding</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Leaking fluid</li>
                <li>Reduced or absent baby movements</li>
                <li>
                  Severe headache, blurred vision or sudden swelling of the
                  face or hands
                </li>
                <li>High fever</li>
                <li>
                  Regular painful contractions before your due date
                </li>
              </ul>
              <p>
                Do not wait for your next scheduled scan if you are worried.
                Identify the nearest hospital with emergency and delivery
                facilities to your home. In an emergency, go to the nearest
                emergency facility immediately. Do not delay care to travel
                to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Antenatal Care Beyond Scans
              </h2>
              <p>
                Ultrasound is one part of complete pregnancy care. At Dr.
                Priyanka Gynaec, antenatal services also include trimester-wise
                check-ups, blood tests, screening for gestational diabetes and
                thyroid problems, nutrition guidance and labour preparation.
                Normal delivery is prioritised wherever it is safe. Postnatal
                care, newborn care and vaccinations are available in the same
                place.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Detailed imaging</strong> with a Voluson E22 3D/4D
                  ultrasound machine
                </li>
                <li>
                  <strong>Scan findings explained</strong> by the doctor who
                  follows your pregnancy
                </li>
                <li>
                  <strong>Clear, calm communication</strong> that puts your
                  comfort first
                </li>
                <li>
                  <strong>Antenatal, high-risk, delivery and paediatric care</strong>{" "}
                  in one place
                </li>
                <li>
                  <strong>Honest guidance,</strong> with tests advised only
                  when useful
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Clinic Address and Appointments
              </h2>
              <p>
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <h3 className="mb-4 text-2xl font-bold">
                  Book Your Pregnancy Scan Appointment
                </h3>
                <p className="mb-6">
                  For pregnancy scans and antenatal consultations, contact Dr.
                  Priyanka Gynaec directly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0" />
                    <div>
                      <strong>Call for appointment:</strong>{" "}
                      <a
                        href="tel:+919079765578"
                        className="underline underline-offset-2"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0" />
                    <div>
                      <strong>WhatsApp:</strong>{" "}
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0" />
                    <div>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all underline underline-offset-2"
                      >
                        drpriyankagynaec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 shrink-0" />
                    <div>
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all underline underline-offset-2"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#8F1738] hover:text-white"
                  >
                    Our Services
                  </Link>
                </div>
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
                  <h3 className="font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="mt-2 text-gray-700">{faq.a}</p>
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
