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

export default function LadyDoctorGandhiNagar() {
  const faqs = [
    {
      q: "When should I go straight to a hospital?",
      a: "For sudden severe pain, very heavy bleeding, fainting, or pregnancy-related warning signs, go immediately.",
    },
    {
      q: "How can I prepare in advance?",
      a: "Save contacts, keep a document folder and plan transport.",
    },
    {
      q: "Can I call the clinic after hours?",
      a: "Ask your doctor how to reach them and which symptoms need an immediate call.",
    },
    {
      q: "What should be in my document folder?",
      a: "Reports, prescriptions, a medicine and allergy summary, ID and insurance papers.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Can I ask for a female doctor in an emergency?",
      a: "You can ask, but prompt care comes first.",
    },
    {
      q: "Should I update my records after a visit?",
      a: "Yes. Add new reports and the follow-up plan.",
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
                Lady Doctor Near Gandhi Nagar, Moradabad: Planning for Urgent
                Situations Before They Happen
              </h1>

              <p className="mb-4 text-gray-700">
                Most people search for a lady doctor only when a problem has
                already started, often at an inconvenient hour. A little
                planning in advance means you know where to go, who to call and
                what to carry. This guide helps women and families prepare. It
                is general information, not medical advice. It names no
                individual doctors, because I cannot verify or rank them, and
                only a qualified doctor can diagnose you or advise treatment.{" "}
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
                Why Plan Ahead
              </h2>

              <p className="mb-4 text-gray-700">
                Panic makes decisions harder. A simple plan saves precious time.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clinics may be closed at night or on holidays.</li>
                <li>Travel takes longer than expected.</li>
                <li>Documents are hard to find in a hurry.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Know the Difference: Clinic or Emergency
              </h2>

              <p className="mb-4 text-gray-700">
                Not every concern needs a hospital, but some do. When unsure,
                call a doctor or hospital and ask.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Routine or Non-Urgent:</strong> Book a clinic
                  appointment.
                </li>
                <li>
                  <strong>Urgent:</strong> Needs care the same day.
                </li>
                <li>
                  <strong>Emergency:</strong> Go to a hospital emergency
                  department immediately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs That Need Immediate Care
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait for an appointment if you have any of the following.
                Go to an emergency facility or call emergency services.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden severe abdominal or pelvic pain</li>
                <li>
                  Very heavy bleeding that soaks protection every hour
                </li>
                <li>Fainting, dizziness or a racing heart</li>
                <li>
                  Heavy bleeding in pregnancy or possible pregnancy
                </li>
                <li>Reduced baby movements in pregnancy</li>
                <li>Fever with pelvic pain</li>
                <li>
                  Severe headache with vision changes or swelling in pregnancy
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs for a Same-Day Call
              </h2>

              <p className="mb-4 text-gray-700">
                Call a doctor promptly for the following. The clinic will advise
                whether to come in.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain that is worsening</li>
                <li>
                  Unusual discharge with fever or discomfort
                </li>
                <li>Side effects from a medicine</li>
                <li>
                  New symptoms after a procedure or delivery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Find Your Options in Advance
              </h2>

              <p className="mb-4 text-gray-700">
                Use calm moments to gather information. Save the details in your
                phone.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A lady doctor or clinic near your home</li>
                <li>
                  A hospital with emergency and obstetric cover
                </li>
                <li>Doctors&apos; consultation days and hours</li>
                <li>Who covers when your doctor is away</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choose Doctors Carefully
              </h2>

              <p className="mb-4 text-gray-700">
                Use reliable sources. Aim for one main doctor and one backup.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor</li>
                <li>Trusted friends and relatives</li>
                <li>Hospital and clinic listings</li>
                <li>Official medical council directories</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Verify Qualifications
              </h2>

              <p className="mb-4 text-gray-700">
                Credentials can be verified through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Hospital affiliations for deliveries or surgery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ask Your Doctor in Advance
              </h2>

              <p className="mb-4 text-gray-700">
                During a calm visit, ask the following. Write the answers down
                and share them with family.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>How do I reach you after hours?</li>
                <li>Which symptoms need an immediate call?</li>
                <li>
                  Which hospital do you advise in an emergency?
                </li>
                <li>Who covers when you are unavailable?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Keep Emergency Contacts Handy
              </h2>

              <p className="mb-4 text-gray-700">
                Save them on several phones and on paper.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your doctor&apos;s and clinic&apos;s numbers</li>
                <li>The hospital&apos;s emergency number</li>
                <li>A trusted family member or neighbour</li>
                <li>A reliable vehicle or driver</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Prepare a Health Document Folder
              </h2>

              <p className="mb-4 text-gray-700">
                Keep one folder ready to grab. Keep photo copies on your phone.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recent reports, scans and prescriptions</li>
                <li>
                  A one-page summary of medicines, allergies and past conditions
                </li>
                <li>ID and insurance papers</li>
                <li>Your doctor&apos;s contact details</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pack a Small Go-Bag
              </h2>

              <p className="mb-4 text-gray-700">
                Especially useful in pregnancy or after surgery.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The document folder</li>
                <li>Comfortable clothing</li>
                <li>Toiletries and sanitary supplies</li>
                <li>Phone, charger and some cash</li>
                <li>Items your hospital allows</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Plan Transport
              </h2>

              <p className="mb-4 text-gray-700">
                Do not drive yourself if you feel faint or in severe pain.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Decide who drives and who is the backup.</li>
                <li>
                  Know the fastest route, including at night.
                </li>
                <li>Keep fuel or a ride option ready.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Involve Your Family
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tell a trusted person where documents are kept.
                </li>
                <li>
                  Share the warning signs your doctor has explained.
                </li>
                <li>
                  Agree on who makes calls and who stays with you.
                </li>
                <li>
                  Arrange care for children or elders at home.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Telephone Advice
              </h2>

              <p className="mb-4 text-gray-700">
                Many clinics offer guidance by phone. Do not rely on a call when
                signs of an emergency are present.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Describe symptoms clearly and calmly.</li>
                <li>
                  Mention medicines, pregnancy status and recent procedures.
                </li>
                <li>
                  Follow the advice given, including going to hospital.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                At the Hospital
              </h2>

              <p className="mb-4 text-gray-700">
                Tell staff your main symptom first.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Share your medicine list and allergies.</li>
                <li>Ask for privacy during examination.</li>
                <li>
                  Request a female staff member if you prefer, though in an
                  emergency, speed comes first.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After an Urgent Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Write down the diagnosis and plan.</li>
                <li>
                  Complete tests and take medicines as directed.
                </li>
                <li>Keep the follow-up date.</li>
                <li>Update your document folder.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for an estimate where time allows.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Keep receipts and reports together.</li>
                <li>
                  Check insurance rules for emergency admission.
                </li>
                <li>Ask for an itemised bill.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Access and comfort matter most when you are unwell. Planners
                such as{" "}
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
                  <strong>Access:</strong> Step-free entry, wide doors, lift
                  access and accessible washrooms.
                </li>
                <li>
                  <strong>Privacy:</strong> Consultation doors do not open onto
                  the waiting area, and registration is discreet.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces and
                  tidy rooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, soft lighting
                  and short waits.
                </li>
                <li>
                  <strong>Order:</strong> Clear signs and a visible reception.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Dismissing urgent symptoms</li>
                <li>Unclear costs and unverifiable qualifications</li>
                <li>Poor privacy or hygiene</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Waiting for severe symptoms to settle on their own
                </li>
                <li>Having no emergency contacts saved</li>
                <li>Keeping reports scattered</li>
                <li>Not knowing which hospital to go to</li>
                <li>Self-medicating from online advice</li>
                <li>Skipping follow-up after an urgent visit</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Gandhi
                Nagar, Moradabad
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
                      <p>Gandhi Nagar, Moradabad, Uttar Pradesh, India</p>
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