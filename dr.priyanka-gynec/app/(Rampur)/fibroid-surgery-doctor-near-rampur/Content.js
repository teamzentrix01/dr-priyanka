
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
    q: "Are fibroids cancerous?",
    a: "Fibroids are almost always non-cancerous. Your doctor will still evaluate any rapidly growing or unusual fibroid carefully.",
  },
  {
    q: "Do all fibroids need surgery?",
    a: "No. Small fibroids without symptoms may only need monitoring. Treatment is advised when they cause problems or affect fertility.",
  },
  {
    q: "Can fibroids be removed without removing the uterus?",
    a: "Yes. Myomectomy removes fibroids while preserving the uterus. It can be done laparoscopically or hysteroscopically in suitable cases.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
  },
  {
    q: "Can fibroids come back after surgery?",
    a: "New fibroids can develop in some women. Regular follow-up helps detect them early.",
  },
  {
    q: "Can I get pregnant after fibroid removal?",
    a: "Many women conceive after myomectomy. Your doctor will advise on the right timing and the safest delivery plan.",
  },
  {
    q: "Where will my surgery take place?",
    a: "Please confirm this directly with the clinic when you book.",
  },
];

export default function FibroidSurgeryDoctorNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Fibroid Surgery Doctor near Rampur – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              Uterine fibroids are very common, and many women live with heavy
              periods, pelvic pressure or pain for years. When a doctor mentions
              surgery, the first fear is often losing the uterus. In many
              cases, fibroids can be removed while the uterus is preserved.
            </p>

            <p>
              If you live in Rampur, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in Moradabad, not
              in Rampur, and women from Rampur and nearby areas travel there
              for consultations. Its philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong> Your symptoms,
              your plans for pregnancy and your preferences shape every
              decision.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              What Are Fibroids?
            </h2>

            <p>
              Fibroids, also called myomas, are non-cancerous growths in or on
              the wall of the uterus. They range from tiny to very large, and
              a woman may have one or several. By location they are often
              described as:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Subserosal:</strong> On the outer surface of the uterus
              </li>
              <li>
                <strong>Intramural:</strong> Within the muscular wall
              </li>
              <li>
                <strong>Submucosal:</strong> Just beneath the lining,
                projecting into the cavity
              </li>
              <li>
                <strong>Pedunculated:</strong> Attached by a stalk
              </li>
            </ul>

            <p>
              Location strongly influences symptoms, fertility effects and
              the best treatment.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Symptoms
            </h2>

            <p>Many fibroids cause no symptoms. When they do, they may cause:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Heavy or prolonged periods and clots</li>
              <li>Anaemia, tiredness and breathlessness</li>
              <li>Pelvic pain or pressure</li>
              <li>Frequent urination or constipation</li>
              <li>Pain during intercourse</li>
              <li>Lower back pain or an enlarged lower abdomen</li>
              <li>Difficulty conceiving or repeated miscarriage in some women</li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Does Every Fibroid Need Surgery?
            </h2>

            <p>
              No. Small fibroids without symptoms may only need regular
              monitoring. Treatment is considered when fibroids cause:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Heavy bleeding or anaemia</li>
              <li>Significant pain or pressure</li>
              <li>Bladder or bowel symptoms</li>
              <li>Difficulty conceiving or pregnancy problems</li>
              <li>Rapid growth or concerning features on imaging</li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Treatment Options at a Glance
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Observation
                </h3>
                <p>
                  Regular check-ups for small, symptom-free fibroids.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Medicines
                </h3>
                <p>
                  Can help control bleeding or pain, or temporarily reduce
                  size. They manage symptoms but may not remove the fibroid
                  permanently.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Hysteroscopic Removal
                </h3>
                <p>
                  For fibroids or polyps inside the cavity, removed through
                  the vagina with no cuts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Laparoscopic Myomectomy
                </h3>
                <p>
                  Keyhole removal of fibroids while preserving the uterus.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Hysterectomy
                </h3>
                <p>
                  Removal of the uterus, considered when other options are
                  unsuitable and a woman does not wish to conceive.
                </p>
              </div>
            </div>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Laparoscopic Myomectomy at Dr. Priyanka Gynaec
            </h2>

            <p>
              Laparoscopic myomectomy is uterus-preserving 3D keyhole surgery.
              A camera and fine instruments are passed through a few small
              incisions. The surgeon removes the fibroids and carefully
              repairs the uterine wall.
            </p>

            <p>When suitable, benefits include:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Preservation of the uterus and, for many women, fertility</li>
              <li>Smaller scars</li>
              <li>Less pain after surgery</li>
              <li>Reduced blood loss compared with open surgery</li>
              <li>A shorter hospital stay</li>
              <li>Faster return to daily activities</li>
            </ul>

            <p>
              3D visualisation supports precise removal and careful repair,
              which matters for future pregnancies. Not every fibroid is suited
              to laparoscopy. The number, size and position of fibroids, your
              age and previous surgeries influence the decision, and in some
              cases open surgery may be safer. Your surgeon will explain the
              reasons clearly.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Getting a Second Opinion From Rampur
            </h2>

            <p>
              If you have already been advised surgery, a second opinion is
              reasonable. To make it useful:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Bring all ultrasound reports, and images if you have them</li>
              <li>Bring blood tests, previous prescriptions and the written surgical advice</li>
              <li>Note treatments you have already tried</li>
              <li>Write down your questions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">
              Questions to Ask
            </h3>

            <ol className="list-decimal space-y-2 pl-6">
              <li>How many fibroids do I have, how big are they, and where?</li>
              <li>Can my uterus be preserved?</li>
              <li>Is keyhole surgery suitable, or is open surgery safer?</li>
              <li>How will this affect my fertility?</li>
              <li>What happens if I wait or use medicines instead?</li>
              <li>What is the recovery like?</li>
            </ol>

            <p>
              Your concerns are discussed respectfully, and your medical
              details are kept confidential.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Fibroids and Pregnancy
            </h2>

            <p>
              Many women with fibroids conceive and deliver normally. Some
              fibroids, especially those that distort the uterine cavity, may
              affect implantation or raise the chance of miscarriage. If you
              are trying to conceive, discuss fibroids early. The clinic also
              offers fertility and IVF services, so surgical and fertility
              planning can be coordinated under one roof. After myomectomy,
              your doctor will advise on the best time to try for pregnancy
              and the safest mode of delivery.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Planning Surgery When You Live in Rampur
            </h2>

            <h3 className="text-xl font-semibold text-gray-900">
              Ask the Clinic
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Where will the surgery take place? Please confirm this directly
                with the clinic.
              </li>
              <li>
                Which pre-operative tests can be done in advance, or closer to
                home?
              </li>
              <li>
                How long should I expect to stay, and will I need to stay in
                Moradabad afterwards?
              </li>
              <li>Who should accompany me?</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">
              Prepare for the Day
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Complete the scans and tests advised</li>
              <li>Correct anaemia before surgery, if present</li>
              <li>Share your medical history, allergies and medicines</li>
              <li>Discuss anaesthesia and follow fasting instructions</li>
              <li>Arrange help at home for the first week or two</li>
              <li>Pack comfortable clothes, identification and your records</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">
              Plan the Journey Home
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Ask when it is safe to travel and how to travel comfortably</li>
              <li>Arrange for a family member to accompany you</li>
              <li>
                Avoid lifting luggage yourself, and take breaks on long journeys
              </li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Recovery at Home
            </h2>

            <p>
              Recovery varies with each patient, but general guidance includes:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Gentle walking soon after surgery, as advised</li>
              <li>Light, balanced meals with plenty of fluids and fibre</li>
              <li>Taking medicines on time</li>
              <li>Keeping the small wounds clean and dry</li>
              <li>
                Avoiding heavy lifting and strenuous exercise until your
                doctor approves
              </li>
              <li>Attending follow-up visits</li>
            </ul>

            <p>
              Ask before you leave which follow-up checks may be possible
              closer to home.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Warning Signs After Surgery
            </h2>

            <p>Contact your doctor promptly if you notice:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Fever</li>
              <li>Heavy bleeding</li>
              <li>Worsening pain</li>
              <li>Redness, swelling or discharge from a wound</li>
              <li>Vomiting that does not settle</li>
              <li>Difficulty passing urine</li>
              <li>Calf pain or swelling</li>
            </ul>

            <p>
              If you cannot reach the clinic quickly, or the situation is
              urgent, go to the nearest emergency facility. Do not delay care
              to travel to another city.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Seek Urgent Care Before Surgery If You Have
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Very heavy bleeding that soaks a pad within an hour</li>
              <li>Dizziness or fainting</li>
              <li>Sudden severe pelvic pain</li>
              <li>Inability to pass urine</li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Why Women Trust Dr. Priyanka Gynaec
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Honest guidance:</strong> Surgery advised only when
                needed, with alternatives discussed first
              </li>
              <li>
                <strong>Focus on preserving the uterus and fertility</strong>{" "}
                wherever possible
              </li>
              <li>
                <strong>3D laparoscopic expertise</strong> and detailed
                ultrasound assessment
              </li>
              <li>
                <strong>Hysteroscopy services</strong> for fibroids and polyps
                inside the cavity
              </li>
              <li>
                <strong>Continuity you can count on:</strong> An integrated
                team that knows your history
              </li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Clinic Address and Appointments
            </h2>

            <p>
              Dr. Priyanka Gynaec is located at{" "}
              <strong>
                A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh –
                244001
              </strong>
              .
            </p>

            <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-5 text-2xl font-bold">
                Book Your Appointment
              </h2>

              <p className="mb-5">
                For fibroid evaluation, uterus-preserving treatment options or
                a second opinion about surgery, contact Dr. Priyanka Gynaec.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="underline hover:text-[#8F1738]"
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
                      className="underline hover:text-[#8F1738]"
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
                      className="break-all underline hover:text-[#8F1738]"
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
                      className="break-all underline hover:text-[#8F1738]"
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
                  View Services
                </Link>
              </div>
            </div>

            <section className="pt-4">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-4">
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
              </div>
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
