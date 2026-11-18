
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "How do I book a gynaecologist appointment as a Rampur patient?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on www.gynaecologistmoradabad.com.',
  },
  {
    q: "Is the clinic in Rampur?",
    a: "No. It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
  },
  {
    q: "What details should I share when booking?",
    a: "Your name, age, reason for the visit, whether it is a first or follow-up visit, preferred days and that you are travelling from Rampur.",
  },
  {
    q: "Can tests or a scan be done on the same day?",
    a: "It depends on what you need. Ask the clinic when you book, so you can plan your day.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Previous prescriptions, blood tests, ultrasounds, surgical records, a list of medicines and your questions. If pregnant, bring your antenatal card.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "Can I book a second-opinion appointment for surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
  },
  {
    q: "What if I need to reschedule?",
    a: "Inform the clinic as early as possible by phone or WhatsApp, and offer alternative days. Do not skip time-sensitive visits without telling your doctor.",
  },
  {
    q: "Is my consultation confidential?",
    a: "Yes. Your concerns are discussed respectfully, and your medical details are kept confidential.",
  },
  {
    q: "What should I do in an emergency?",
    a: "Go to the nearest emergency facility immediately. Do not delay care to travel to another city.",
  },
];

export default function GynaecologistAppointmentForRampurPatients() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Gynaecologist Appointment for Rampur Patients – Dr. Priyanka
              Pachauri
            </h1>

            <p>
              Booking a gynaecology appointment is often the hardest step.
              When the clinic is in another city, there is an extra layer of
              planning. This guide is written for patients from Rampur who want
              to consult <strong>Dr. Priyanka Pachauri</strong> at{" "}
              <strong>Dr. Priyanka Gynaec</strong> in Moradabad.
            </p>

            <p>
              To be clear, the clinic is located in{" "}
              <strong>Moradabad</strong>, not in Rampur. Women from Rampur and
              nearby areas travel there for consultations. Its philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong> You are listened
              to, informed and never rushed.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Ways to Book
            </h2>

            <p>You can reach the clinic in any of these ways:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Phone call:</strong> +91 90797 65578
              </li>
              <li>
                <strong>WhatsApp:</strong> +91 89796 70705
              </li>
              <li>
                <strong>Website:</strong> The &quot;Book Appointment&quot;
                option on www.gynaecologistmoradabad.com
              </li>
              <li>
                <strong>Email:</strong> drpriyankagynaec@gmail.com
              </li>
            </ul>

            <p>
              WhatsApp suits many patients because you can write at your own
              pace, share your preferred days and keep the conversation for
              later reference.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              What to Tell the Clinic When You Book
            </h2>

            <p>A few details help the team plan your visit:</p>

            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Your name and age</strong>
              </li>
              <li>
                <strong>The reason for your visit,</strong> in a few words,
                such as irregular periods, pregnancy care, fertility, cyst or
                fibroid advice, or a second opinion
              </li>
              <li>
                <strong>First visit or follow-up</strong>
              </li>
              <li>
                <strong>Your preferred days,</strong> with a backup option
              </li>
              <li>
                <strong>That you are travelling from Rampur,</strong> so the
                team can think about how to group your needs
              </li>
              <li>
                <strong>Any urgent symptoms,</strong> such as heavy bleeding,
                severe pain or bleeding in pregnancy
              </li>
            </ol>

            <p>
              You do not have to share intimate details over the phone. A short
              description is enough.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Questions to Ask While Booking
            </h2>

            <p>
              Ask these at the time of booking, so there are no surprises on
              the day:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                What are the clinic&apos;s current timings, and which time
                suits a first visit?
              </li>
              <li>
                Do I need to prepare in any way, such as fasting, a full
                bladder for a scan or a particular day of my cycle?
              </li>
              <li>Can tests or a scan be done on the same day as your consultation?</li>
              <li>What should I bring?</li>
              <li>What are the consultation fees and accepted payment methods?</li>
              <li>What should I do if I am running late, or need to reschedule?</li>
            </ul>

            <p>
              Please confirm timings and fees directly with the clinic,
              because they can change.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Which Appointment Should You Ask For?
            </h2>

            <p>Different needs call for different consultations.</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  General Gynaecology
                </h3>
                <p>
                  Periods problems, PCOS, infections, pelvic pain,
                  contraception, menopause symptoms or any symptom you are
                  unsure about.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Pregnancy and Antenatal
                </h3>
                <p>
                  Pregnancy confirmation, regular antenatal visits, ultrasound
                  and delivery planning. The clinic uses a Voluson E22 3D and
                  4D ultrasound machine.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  High-Risk Pregnancy
                </h3>
                <p>
                  For diabetes, high blood pressure, thyroid disease, previous
                  miscarriage, twins or pregnancy after IVF.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Fertility and IVF
                </h3>
                <p>
                  For couples trying to conceive. Both partners are encouraged
                  to attend. The clinic offers ovulation induction, IVF,
                  time-lapse embryo monitoring, and AI-powered semen analysis
                  with DNA integrity testing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Laparoscopy or Surgery Consultation
                </h3>
                <p>
                  For cysts, fibroids, endometriosis, prolapse, or a second
                  opinion about surgery.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Hysteroscopy Consultation
                </h3>
                <p>
                  For abnormal bleeding, repeated miscarriage, suspected
                  polyps or fertility concerns.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Postnatal and Paediatric
                </h3>
                <p>
                  Recovery after delivery, breastfeeding support, newborn care
                  and vaccinations.
                </p>
              </div>
            </div>

            <p>
              If you are unsure, say so. The team can suggest the most suitable
              type of appointment.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Preparing Your Documents
            </h2>

            <p>
              Put everything in one folder, in date order, and keep photos on
              your phone as a backup.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Previous prescriptions and discharge summaries</li>
              <li>Blood test reports</li>
              <li>Ultrasound reports, and images if you have them</li>
              <li>Surgical records</li>
              <li>Your antenatal card, if pregnant</li>
              <li>A list of current medicines and supplements</li>
              <li>Your partner&apos;s reports, if you are consulting about fertility</li>
              <li>Identification</li>
            </ul>

            <p>
              If you are seeking a second opinion on surgery, also bring the
              written advice you were given.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Write Down Your Story
            </h2>

            <p>A short note saves time:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>The date of your last period and your usual cycle length</li>
              <li>When your symptoms began and how they have changed</li>
              <li>What treatments you have already tried</li>
              <li>Past pregnancies, surgeries and allergies</li>
              <li>Your three most important questions</li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Planning the Day
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Leave early enough to arrive without rushing</li>
              <li>
                Carry water and a light snack, unless you have been asked to
                fast
              </li>
              <li>Wear comfortable clothing</li>
              <li>Keep your phone charged, with the clinic&apos;s number saved</li>
              <li>Consider travelling with a family member or friend</li>
              <li>
                If you are pregnant, take breaks on long journeys and ask
                whether any travel limits apply
              </li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              What Happens at the Appointment
            </h2>

            <p>A first visit is a conversation first. You can expect:</p>

            <ol className="list-decimal space-y-2 pl-6">
              <li>
                A discussion of your symptoms, cycle history and medical
                background
              </li>
              <li>
                A gentle examination only if necessary, explained beforehand
              </li>
              <li>Ultrasound or blood tests if required</li>
              <li>A clear explanation of findings and treatment options</li>
              <li>Time to ask questions without pressure</li>
            </ol>

            <p>
              You can ask for a pause or decline any step. Your concerns are
              discussed respectfully, and your medical details are kept
              confidential.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Before You Leave the Clinic
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Ask for the plan in simple, clear words, and write it down</li>
              <li>Confirm medicines, doses and duration</li>
              <li>Ask which tests need repeating, and when</li>
              <li>Ask when you should come back, and what might change that date</li>
              <li>Ask which follow-up checks may be possible closer to home</li>
              <li>Ask how to contact the clinic with questions afterwards</li>
              <li>Book your next appointment before you leave, if one is needed</li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              Follow-Up Appointments
            </h2>

            <p>Many needs involve more than one visit:</p>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Fertility treatment:</strong> Repeat monitoring across
                a cycle
              </li>
              <li>
                <strong>Pregnancy:</strong> Regular antenatal visits, more
                often in the last trimester or with risk factors
              </li>
              <li>
                <strong>Surgery:</strong> Consultation, pre-operative tests,
                the procedure and follow-up
              </li>
              <li>
                <strong>Hormonal conditions such as PCOS:</strong> Periodic
                reviews
              </li>
            </ul>

            <p>
              Ask for the likely schedule early, so you can plan work, travel
              and family support.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              If You Need to Reschedule
            </h2>

            <p>Plans change, especially when you travel. If you need to move an appointment:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Inform the clinic as early as possible by phone or WhatsApp</li>
              <li>Offer two or three alternative days</li>
              <li>
                Do not skip a time-sensitive visit, such as a pregnancy scan,
                fertility monitoring or post-surgery follow-up, without telling
                your doctor
              </li>
            </ul>

            <p>
              If your symptoms get worse while you wait for your appointment,
              contact the clinic.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              When Not to Wait for an Appointment
            </h2>

            <p>
              Some situations need urgent care. Go to the nearest emergency
              facility immediately if you have:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Heavy bleeding that soaks a pad every hour</li>
              <li>Bleeding during pregnancy</li>
              <li>Sudden severe abdominal or pelvic pain</li>
              <li>Fainting, dizziness or breathlessness</li>
              <li>Reduced or absent baby movements</li>
              <li>Leaking fluid or regular contractions before your due date</li>
            </ul>

            <p>Do not delay care to travel to another city.</p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">
              About Dr. Priyanka Gynaec
            </h2>

            <p>
              Dr. Priyanka Gynaec is a women&apos;s health and fertility centre
              offering gynaecology, laparoscopy, IVF and pregnancy care, along
              with paediatric support. It uses 3D laparoscopy, 3D and 4D
              ultrasound, time-lapse embryo imaging and AI-powered semen
              analysis. Surgery is recommended only when it is truly the best
              option, and alternatives are always discussed first.
            </p>

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
                Patients travelling from Rampur can contact the clinic to
                discuss appointment availability, timings and preparation
                before their visit.
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
