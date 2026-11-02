
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

export default function GynaecologistAppointmentRamgangaVihar() {
  const faqs = [
    {
      q: "How do I book a gynaecologist appointment?",
      a: "Call the clinic, visit the reception or use an online form, then confirm the date, time and doctor.",
    },
    {
      q: "Can I ask for a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "What should I bring?",
      a: "Past reports, a medicine list, ID, your notes and your questions.",
    },
    {
      q: "Will I always be examined?",
      a: "No. The doctor will decide, explain the reason and ask for your permission.",
    },
    {
      q: "Can I bring someone with me?",
      a: "Yes. You can also request time alone with the doctor.",
    },
    {
      q: "Should I fast or avoid anything beforehand?",
      a: "Ask when booking, since it depends on your tests.",
    },
    {
      q: "What if I need urgent care?",
      a: "Go to an emergency facility instead of waiting for an appointment.",
    },
    {
      q: "Where can I learn more about clinic planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
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
                Gynaecologist Appointment in Ramganga Vihar, Moradabad: How to
                Book, Prepare and Get the Most from Your Visit
              </h1>

              <p className="mb-4 text-gray-700">
                Booking a gynaecologist appointment can feel awkward, especially
                the first time. Knowing how to book, what to bring and what to
                expect makes the visit calmer and more useful. This guide covers
                the whole process, from the first phone call to follow-up. It is
                general information, not medical advice. It names no individual
                doctors, because I cannot verify or rank them, and only a
                qualified doctor can diagnose you or advise treatment.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                sections on clinic environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Regular Appointments Matter
              </h2>

              <p className="mb-4 text-gray-700">
                Visits are not only for problems. Your doctor will advise how
                often you should visit.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Routine check-ups help catch concerns early.</li>
                <li>
                  They give you a chance to ask questions freely.
                </li>
                <li>
                  They support planning for pregnancy, contraception and life
                  stages.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Book Soon
              </h2>

              <p className="mb-4 text-gray-700">
                Consider booking promptly if you notice any of the following.
                Seek urgent care for sudden severe pain or very heavy bleeding.
                Do not wait for an appointment slot.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular, very heavy or painful periods</li>
                <li>Pelvic pain or unusual discharge</li>
                <li>A missed period with possible pregnancy</li>
                <li>Symptoms that keep returning</li>
                <li>Questions about contraception or fertility</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing Where to Book
              </h2>

              <p className="mb-4 text-gray-700">
                Gather options from reliable sources. Aim for two or three
                options so you can compare timing, comfort and costs.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or earlier gynaecologist</li>
                <li>Trusted friends and relatives</li>
                <li>Hospital and clinic listings</li>
                <li>
                  Official medical council directories for doctor details
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ways to Book
              </h2>

              <p className="mb-4 text-gray-700">
                Clinics usually offer several options. Confirm the booking with
                a date, time and doctor&apos;s name.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Phone Call:</strong> Good for asking questions while
                  booking.
                </li>
                <li>
                  <strong>Walk-In Registration:</strong> Useful if you want to
                  see the clinic first.
                </li>
                <li>
                  <strong>Online Form or Message:</strong> Convenient for
                  sharing details in writing.
                </li>
                <li>
                  <strong>Hospital Helpdesk:</strong> For doctors attached to a
                  hospital.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask While Booking
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Is the doctor available on my preferred day?</li>
                <li>
                  Is a female doctor available, if I prefer one?
                </li>
                <li>
                  Is an appointment compulsory, or can I walk in?
                </li>
                <li>What is the consultation fee?</li>
                <li>
                  Do I need to bring anything or avoid anything beforehand?
                </li>
                <li>
                  Is a female staff member present during examinations?
                </li>
                <li>What is the usual waiting time?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Time
              </h2>

              <p className="mb-4 text-gray-700">
                Timing can matter. Allow extra time if tests or scans may be
                advised.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask whether your cycle day affects the visit for your concern.
                </li>
                <li>Avoid rushed slots, such as just before travel.</li>
                <li>Early appointments often have shorter waits.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Prepare Your Notes
              </h2>

              <p className="mb-4 text-gray-700">
                A short list helps you remember everything. Write these on paper
                or your phone.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your main concern and when it began</li>
                <li>Your cycle dates and any changes</li>
                <li>Current medicines and supplements</li>
                <li>Past conditions, surgeries and allergies</li>
                <li>Questions you want answered</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Documents to Bring
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Earlier reports, scans and prescriptions</li>
                <li>Identity proof and any insurance details</li>
                <li>Previous clinic or hospital records</li>
                <li>Your notes and question list</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who to Bring
              </h2>

              <p className="mb-4 text-gray-700">
                Bringing someone is your choice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A trusted family member or friend can help you remember
                  advice.
                </li>
                <li>You can ask to speak to the doctor privately.</li>
                <li>
                  You can request a female staff member during any examination.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Wear
              </h2>

              <p className="mb-4 text-gray-700">
                Comfort helps, especially if an examination may be needed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Choose loose, easy-to-change clothing.</li>
                <li>
                  Avoid complicated outfits if an examination is possible.
                </li>
                <li>Wear comfortable footwear for waiting.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                On the Day: Arrival and Registration
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Arrive a little early to complete forms.</li>
                <li>Carry your documents and fee.</li>
                <li>
                  Share your details calmly, and ask for privacy if needed.
                </li>
                <li>
                  Tell staff if you feel nervous. They are used to it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                During the Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                The doctor usually begins with conversation. Be honest, even
                about sensitive topics. It helps the doctor advise you
                correctly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>You explain your concerns and history.</li>
                <li>
                  The doctor asks questions about symptoms and cycles.
                </li>
                <li>
                  Ask for clarification if anything is unclear.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If an Examination Is Needed
              </h2>

              <p className="mb-4 text-gray-700">
                Not every visit includes one. You can ask to pause or stop if
                you feel uncomfortable.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The doctor should explain what will be done and why.
                </li>
                <li>
                  Your permission should be asked before examining.
                </li>
                <li>
                  You can ask for a female staff member to be present.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests and Scans
              </h2>

              <p className="mb-4 text-gray-700">
                The doctor may advise tests. Ask whether you need to prepare,
                for example by fasting.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask what each test is for.</li>
                <li>Ask when and where to do it.</li>
                <li>Ask when results will be ready.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding the Plan
              </h2>

              <p className="mb-4 text-gray-700">
                Before leaving, make sure you understand next steps. Ask the
                doctor to write key points down if needed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What the doctor thinks is happening, in simple words
                </li>
                <li>
                  Which medicines to take, how and for how long
                </li>
                <li>Which tests to complete</li>
                <li>
                  Which symptoms need a call or urgent visit
                </li>
                <li>When your follow-up is due</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Billing and Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Clarity avoids surprises. Check insurance acceptance, if
                relevant.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask for an itemised bill.</li>
                <li>
                  Confirm what the consultation fee includes.
                </li>
                <li>
                  Ask about charges for tests, scans and follow-up.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                The setting affects how comfortable you feel. Planners such as{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                focus on these elements when designing healthcare interiors.
                Clinical standards remain the responsibility of the medical
                team.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Privacy:</strong> Consultation doors do not open onto
                  the waiting area.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, soft lighting
                  and good ventilation.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
                <li>
                  <strong>Order:</strong> Clear signs, discreet registration and
                  short waits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After the Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow medicine and test instructions exactly.
                </li>
                <li>
                  Keep all reports and prescriptions in one folder.
                </li>
                <li>
                  Book your follow-up before you leave, if advised.
                </li>
                <li>
                  Contact the clinic if symptoms worsen or something is unclear.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Rescheduling and Missed Visits
              </h2>

              <p className="mb-4 text-gray-700">
                Plans change, so handle it politely. Do not skip important
                follow-ups.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Inform the clinic as early as possible.</li>
                <li>Ask for the next available slot.</li>
                <li>Carry your reports to the new date.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags and Common Mistakes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pressure to buy packages or products</li>
                <li>
                  Poor privacy during consultation or examination
                </li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs and no itemised bill</li>
                <li>
                  Delaying a visit despite worsening symptoms
                </li>
                <li>Not asking questions or taking notes</li>
                <li>Self-medicating from online advice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Ramganga
                Vihar, Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Interior Partner</p>
                      <p>Space Build</p>
                      <p className="text-sm text-gray-600">
                        Healthcare interior planning and clinic design support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Important Note</p>
                      <p className="text-sm text-gray-600">
                        This page provides general information only. It does not
                        recommend or rank any doctor. Consult a qualified
                        healthcare professional for diagnosis and treatment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+919927611780"
                        className="hover:underline"
                      >
                        +91 99276 11780
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+918077973797"
                        className="hover:underline"
                      >
                        +91 80779 73797
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:spacebuild.india@gmail.com"
                        className="break-all hover:underline"
                      >
                        spacebuild.india@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p>Ramganga Vihar, Moradabad, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.spacebuild.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.spacebuild.co.in
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