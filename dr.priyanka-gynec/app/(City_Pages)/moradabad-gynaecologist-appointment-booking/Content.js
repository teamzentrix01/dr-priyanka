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

export default function MoradabadGynaecologistAppointmentBooking() {
  const faqs = [
    {
      q: "What is the easiest way to book a gynaecologist appointment in Moradabad?",
      a: "Calling or messaging the clinic directly via phone or WhatsApp is usually the fastest and most reliable method.",
    },
    {
      q: "Should I mention my specific concern while booking?",
      a: "Yes, sharing a brief description of your concern helps the clinic allocate appropriate time and prepare for your visit.",
    },
    {
      q: "Can I book an appointment through WhatsApp?",
      a: "Many clinics, including Dr. Priyanka Gynaec, accept WhatsApp messages for booking inquiries and quick questions.",
    },
    {
      q: "What should I do if my concern is urgent?",
      a: "Clearly state that it's urgent when booking, or consider seeking immediate emergency care if symptoms are severe.",
    },
    {
      q: "What documents should I bring to my first appointment?",
      a: "Bring any previous medical records, ID, insurance details, and a list of your symptoms or questions.",
    },
    {
      q: "How early should I arrive for my appointment?",
      a: "Arriving slightly early helps account for registration and paperwork before your consultation begins.",
    },
    {
      q: "Does gynaecologistmoradabad.com offer online appointment booking?",
      a: "Booking appears to work through direct phone or WhatsApp contact rather than an automated online system.",
    },
    {
      q: "What should I do if I need to reschedule my appointment?",
      a: "Contact the clinic as early as possible through the same channel you used to book, and ask for the next available slot.",
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
                Moradabad Gynaecologist Appointment Booking: A Step-by-Step Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Booking a gynaecologist appointment shouldn&apos;t feel
                complicated or stressful, especially when you&apos;re dealing
                with a health concern. This guide walks through everything
                related to Moradabad gynaecologist appointment booking — the
                different ways to book, what information to prepare in advance,
                how to plan around your specific need, and what to expect once
                your appointment is confirmed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Planning Your Appointment Properly Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Taking a few extra minutes before booking can significantly
                improve your overall experience:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Reduces waiting time</strong>, since clinics can often
                  plan better when they know your specific concern in advance.
                </li>
                <li>
                  <strong>Ensures you see the right specialist</strong>,
                  especially important if your concern is specific (fertility,
                  surgery, high-risk pregnancy).
                </li>
                <li>
                  <strong>Helps you bring the right documents</strong>, avoiding
                  delays or repeat visits.
                </li>
                <li>
                  <strong>Makes the consultation more productive</strong>, since
                  you&apos;ll have your questions and history ready.
                </li>
                <li>
                  <strong>Reduces anxiety</strong>, especially for first-time
                  visits or sensitive concerns.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Ways to Book a Gynaecologist Appointment in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Depending on the clinic, you&apos;ll typically find a few
                different booking methods available:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Phone Call Booking
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The most traditional and widely used method, allowing direct
                  conversation with clinic staff.
                </li>
                <li>
                  Useful for asking quick questions about availability, fees, or
                  documents needed before booking.
                </li>
                <li>
                  Best for urgent concerns, where speaking directly can help
                  prioritize your appointment if needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. WhatsApp Booking
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Increasingly popular for its convenience and quick response
                  time.
                </li>
                <li>
                  Allows you to share basic details or questions in writing,
                  which can be easier for sensitive concerns.
                </li>
                <li>
                  Useful for confirming appointment slots without needing a live
                  phone call.
                </li>
                <li>
                  Some clinics also use WhatsApp to share reports or documents
                  conveniently.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Email Booking or Inquiry
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Suitable for detailed queries that require more explanation
                  than a quick message.
                </li>
                <li>
                  Useful when you want to share previous medical records or a
                  summary of your concern in advance.
                </li>
                <li>
                  Typically has a slightly longer response time compared to
                  phone or WhatsApp.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Walk-In Appointments
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some clinics accept walk-in patients, though this often means
                  longer waiting times.
                </li>
                <li>
                  Best reserved for non-urgent visits when your schedule is
                  flexible.
                </li>
                <li>
                  Always worth calling ahead even for walk-ins, to confirm the
                  doctor&apos;s availability that day.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Website-Based Inquiry
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many clinic websites include a contact form or listed
                  phone/WhatsApp number for booking inquiries.
                </li>
                <li>
                  Useful for researching the clinic&apos;s services at the same
                  time as reaching out to book.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Information to Prepare Before Booking Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Having these details ready makes the booking process smoother
                and helps the clinic prepare appropriately:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Your main concern or symptoms</strong>, described
                  briefly and clearly.
                </li>
                <li>
                  <strong>How long you&apos;ve experienced the concern</strong>,
                  if relevant.
                </li>
                <li>
                  <strong>Whether this is a first visit or a follow-up</strong>.
                </li>
                <li>
                  <strong>Any previous diagnosis or ongoing treatment</strong>{" "}
                  related to your concern.
                </li>
                <li>
                  <strong>Your preferred date and time</strong>, along with
                  flexibility if your first choice isn&apos;t available.
                </li>
                <li>
                  <strong>Insurance details</strong>, if you plan to use
                  insurance for the visit or any related treatment.
                </li>
                <li>
                  <strong>Emergency contact information</strong>, especially
                  important for pregnancy-related appointments.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking Tips for Different Types of Appointments
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First-Time Consultation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mention that it&apos;s your first visit, so the clinic can
                  allocate appropriate time.
                </li>
                <li>
                  Ask about required documents to bring, such as ID or previous
                  reports.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnancy (Antenatal) Appointments
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Share your approximate weeks of pregnancy or last menstrual
                  period date, if known.
                </li>
                <li>
                  Ask whether the visit will include an ultrasound or specific
                  tests, so you can prepare accordingly (like fasting, if
                  required).
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Surgery-Related Consultations
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mention if you already have a diagnosis or previous scan
                  reports, so the doctor can review them in advance.
                </li>
                <li>
                  Ask if you should bring a family member or support person,
                  especially for detailed surgical planning discussions.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Fertility or IVF Consultations
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Be ready to share both partners&apos; basic medical history,
                  if applicable.
                </li>
                <li>
                  Ask whether both partners should attend the initial
                  consultation together.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Urgent or Emergency Concerns
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clearly state that your concern is urgent when booking, so the
                  clinic can prioritize accordingly.
                </li>
                <li>
                  If experiencing severe symptoms (heavy bleeding, severe pain),
                  consider whether immediate emergency care is more appropriate
                  than a scheduled appointment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect After Booking Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Once your appointment is confirmed, here&apos;s what typically
                follows:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A confirmation message or call, often including the date,
                  time, and any preparation instructions.
                </li>
                <li>
                  Reminders, which some clinics send closer to your appointment
                  date.
                </li>
                <li>
                  Instructions for tests, if applicable — such as fasting
                  requirements before certain blood tests.
                </li>
                <li>
                  Guidance on documents to bring, including ID, previous reports,
                  or insurance details.
                </li>
                <li>
                  Information on clinic location and parking, especially helpful
                  for first-time visitors.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Reschedule or Cancel an Appointment Properly
              </h2>

              <p className="mb-4 text-gray-700">
                Life happens, and sometimes you&apos;ll need to change your
                booked appointment. Good practice includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Informing the clinic as early as possible, ideally at least a
                  day in advance when not an emergency.
                </li>
                <li>
                  Using the same channel you booked through (phone, WhatsApp, or
                  email) for consistency.
                </li>
                <li>
                  Asking about the next available slot at the time of
                  rescheduling, rather than booking separately later.
                </li>
                <li>
                  Being clear about the reason, if relevant, especially for
                  urgent concerns that might need faster rebooking.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Making the Most of Your Appointment Once Booked
              </h2>

              <p className="mb-4 text-gray-700">
                To ensure your appointment time is used effectively:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Arrive a little early to account for registration and
                  paperwork.
                </li>
                <li>
                  Bring a written list of your symptoms and questions, so you
                  don&apos;t forget anything during the consultation.
                </li>
                <li>
                  Bring all relevant medical records and reports, even if
                  you&apos;ve already discussed them over phone or WhatsApp.
                </li>
                <li>
                  Be ready to discuss your full medical and family history
                  honestly and in detail.
                </li>
                <li>
                  Take notes during the consultation, especially regarding next
                  steps or prescribed treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women searching for guidance on Moradabad gynaecologist
                appointment booking, Dr. Priyanka Pachauri&apos;s clinic (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) offers accessible booking options. Here&apos;s what her
                website and contact details suggest:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The clinic provides multiple direct contact methods — phone
                  call and WhatsApp — making it easy to inquire about
                  appointments or ask questions before booking.
                </li>
                <li>
                  An email address is also available for more detailed inquiries
                  or sharing documents in advance.
                </li>
                <li>
                  The website outlines the range of services offered (pregnancy
                  care, laparoscopic surgery, fertility/IVF treatment), which
                  can help you decide what type of appointment to request when
                  booking.
                </li>
                <li>
                  Patient testimonials on the site suggest a generally smooth,
                  well-communicated consultation experience, though the site
                  doesn&apos;t detail a specific online booking system beyond
                  direct contact.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details of Dr. Priyanka Gynaec, Moradabad
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
                      <p className="font-semibold">Call</p>
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
                      <p className="font-semibold">Clinic Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid When Booking a Gynaecologist
                Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                A few small missteps can lead to delays or a less productive
                visit. Avoid these common booking mistakes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Booking without mentioning your concern</strong> —
                  this can result in insufficient time being allocated for a
                  detailed issue that needs more discussion.
                </li>
                <li>
                  <strong>Forgetting to ask about required fasting or
                  preparation</strong> — certain tests, like some blood work,
                  may require fasting beforehand, and missing this can mean a
                  wasted trip.
                </li>
                <li>
                  <strong>Not confirming the appointment a day before</strong>{" "}
                  — especially useful for time-sensitive visits, as clinic
                  schedules can occasionally shift.
                </li>
                <li>
                  <strong>Assuming all documents are unnecessary</strong> —
                  even if you&apos;ve discussed your case over the phone,
                  physical or digital copies of previous reports are still
                  usually needed at the visit.
                </li>
                <li>
                  <strong>Booking the same day for a first-time, detailed
                  concern</strong> — first consultations often benefit from a
                  little more advance notice, allowing the clinic to plan
                  adequate time.
                </li>
                <li>
                  <strong>Not clarifying whether a specific doctor will be
                  available</strong> — if you specifically want to see one
                  doctor, always confirm they&apos;ll personally be present on
                  your chosen date.
                </li>
                <li>
                  <strong>Ignoring appointment confirmation messages</strong> —
                  always double-check the confirmed date, time, and any
                  instructions sent by the clinic.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Video or Telemedicine Consultation Options
              </h2>

              <p className="mb-4 text-gray-700">
                In addition to in-person visits, many gynaecology clinics now
                offer or are moving toward video consultations for certain types
                of visits. This can be especially useful for:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow-up visits where a physical examination isn&apos;t
                  required.
                </li>
                <li>
                  Reviewing test results and discussing next steps remotely.
                </li>
                <li>
                  Initial screening conversations, especially for women who want
                  to ask questions before committing to an in-person visit.
                </li>
                <li>
                  Women who live farther from the clinic and want to minimize
                  travel for straightforward follow-ups.
                </li>
                <li>
                  General health guidance or second opinions, where an in-person
                  exam may not be immediately necessary.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                It&apos;s important to note that not all gynaecological concerns
                are suitable for video consultation — situations involving
                physical examination, diagnostic testing, or urgent symptoms
                generally still require an in-person visit. If you&apos;re
                interested in a video consultation, it&apos;s best to ask the
                clinic directly whether this option is available and appropriate
                for your specific concern.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Multiple Appointments in Advance
              </h2>

              <p className="mb-4 text-gray-700">
                For ongoing care — such as pregnancy monitoring or a
                multi-visit treatment plan — it can help to plan ahead rather
                than booking one visit at a time:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask for a suggested visit schedule upfront, especially for
                  pregnancy care, so you can plan your calendar in advance.
                </li>
                <li>
                  Request reminders closer to each appointment date, if the
                  clinic offers this.
                </li>
                <li>
                  Block recurring time slots, if your schedule allows, to make
                  consistent care easier to maintain.
                </li>
                <li>
                  Keep a simple personal calendar or note of upcoming visits,
                  tests, and any preparation needed for each one.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Planning ahead this way reduces the chances of missed
                appointments and helps ensure continuity of care throughout your
                treatment journey.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-gray-700">
                Booking a gynaecologist appointment in Moradabad doesn&apos;t
                need to be stressful — a little preparation, choosing the right
                booking method for your need, and clearly communicating your
                concern can make the entire process smoother. Whether
                you&apos;re booking a routine check-up, pregnancy visit, surgical
                consultation, or fertility appointment, reaching out directly via
                phone or WhatsApp and being clear about your requirements is
                usually the fastest and most reliable path to getting the care
                you need.
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