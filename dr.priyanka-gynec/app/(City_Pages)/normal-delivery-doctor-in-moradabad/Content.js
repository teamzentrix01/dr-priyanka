import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function NormalDeliveryDoctorMoradabadContact() {
  const faqs = [
    {
      q: "What is the contact number of Dr. Priyanka Pachauri in Moradabad?",
      a: "Call +91 90797 65578 for appointments and queries.",
    },
    {
      q: "What is the WhatsApp number for appointments?",
      a: "Message +91 89796 70705 on WhatsApp.",
    },
    {
      q: "What is the clinic's email address?",
      a: "drpriyankagynec@gmail.com.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Should I call or WhatsApp in an emergency?",
      a: "Always call. Messages may not be read immediately.",
    },
    {
      q: "When should I call during labour?",
      a: "When contractions come every 5 to 10 minutes, your water breaks or bleeding starts.",
    },
    {
      q: "What should I send on WhatsApp?",
      a: "Your name, weeks of pregnancy, your concern and clear photos of reports.",
    },
    {
      q: "Is painless delivery available?",
      a: "Yes. Epidural and walking epidural are offered after medical assessment.",
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
                Normal Delivery Doctor in Moradabad: Contact Details, Address
                and How to Reach Dr. Priyanka
              </h1>


              <p className="mb-4 text-gray-700">
                When you are pregnant, you want a doctor who is easy to reach. A
                quick question about a symptom, an appointment request or a
                worrying moment at night should never mean searching for the
                right number.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Contact Method Should You Use?
              </h2>


              <p className="mb-4 text-gray-700">
                Different situations suit different channels.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Call: +91 90797 65578
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Booking or rescheduling an appointment</li>
                <li>Asking about clinic timings</li>
                <li>Urgent questions about symptoms</li>
                <li>Labour has started or your water has broken</li>
                <li>You cannot reach us on WhatsApp</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                WhatsApp: +91 89796 70705
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sharing reports, scans or prescriptions</li>
                <li>Asking non-urgent questions</li>
                <li>Requesting appointment slots</li>
                <li>Getting the clinic location</li>
                <li>Following up after a visit</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Email: drpriyankagynec@gmail.com
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sending detailed medical history or documents</li>
                <li>Asking about packages or estimates in writing</li>
                <li>Sharing feedback or requests that are not urgent</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Visit the Clinic
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Meeting the team and seeing the facility</li>
                <li>Discussing your birth plan in person</li>
                <li>Getting a physical examination or scan</li>
              </ul>


              <p className="text-gray-700">
                <strong>Important:</strong> For emergencies, always call. Do not
                rely on WhatsApp or email alone, since a message may not be read
                immediately.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Call Us Right Away
              </h2>


              <p className="mb-4 text-gray-700">
                Do not wait for a reply by message. Call immediately if you
                notice:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular, painful contractions every 5 to 10 minutes
                </li>
                <li>Your water breaks, as a gush or a slow leak</li>
                <li>
                  Vaginal bleeding or a bloody show in late pregnancy
                </li>
                <li>Reduced or absent baby movements</li>
                <li>Severe abdominal pain</li>
                <li>Severe headache, blurred vision or sudden swelling</li>
                <li>Fever during pregnancy</li>
                <li>No sign of labour at 40 weeks</li>
              </ul>


              <p className="mt-4 text-gray-700">
                If you cannot reach us quickly and the situation feels serious,
                go to the nearest hospital and tell us as soon as you can.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When a WhatsApp Message Is Enough
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Asking when to book your first scan</li>
                <li>
                  Sharing a report for the doctor to review at your next visit
                </li>
                <li>Checking if a routine symptom needs a visit</li>
                <li>Asking which documents to bring</li>
                <li>Requesting directions to the clinic</li>
                <li>Asking about diet or exercise questions between visits</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Our team will reply as soon as possible. For anything that
                worries you, call.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Include in Your First Message
              </h2>


              <p className="mb-4 text-gray-700">
                A clear message helps us respond faster and book you correctly.
              </p>


              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your full name and age</li>
                <li>Your phone number</li>
                <li>Number of weeks pregnant, or your last period date</li>
                <li>Expected due date, if known</li>
                <li>
                  Whether this is your first pregnancy or a repeat one
                </li>
                <li>
                  Existing health conditions such as diabetes, thyroid problems
                  or high blood pressure
                </li>
                <li>Any previous caesarean or miscarriage</li>
                <li>
                  The reason for contacting us, for example check-up, second
                  opinion or emergency
                </li>
              </ul>


              <div className="mb-4 rounded-lg bg-gray-50 p-4 text-gray-700">
                <p className="mb-2 font-semibold">Sample Message</p>
                <p>
                  &quot;Hello, my name is [Name], age []. I am [] weeks pregnant
                  and would like to book an appointment for a normal delivery
                  consultation. Please let me know the available time.&quot;
                </p>
              </div>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Say When You Call
              </h2>


              <p className="mb-4 text-gray-700">
                Keep these points ready so the call is short and useful.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your name and phone number</li>
                <li>How many weeks pregnant you are</li>
                <li>Your main concern, in one or two sentences</li>
                <li>
                  Any symptoms you have right now, such as pain or bleeding
                </li>
                <li>Whether you are already a patient of the clinic</li>
                <li>
                  Where you are, so we can guide you about reaching the clinic
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Speak calmly. If you are in labour, tell us your contraction
                pattern and whether your water has broken.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Reach Our Clinic
              </h2>


              <p className="mb-4 text-gray-700">
                <strong>Area:</strong> Gandhi Nagar, Moradabad
                <br />
                <strong>Landmark:</strong> Near Old Roadways
                <br />
                <strong>Full address:</strong> A2, near Old Roadways, Gandhi
                Nagar, Moradabad, Uttar Pradesh, 244001
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tips for Reaching Us
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Search &quot;Dr. Priyanka Gynaec Moradabad&quot; on Google
                  Maps
                </li>
                <li>Call or WhatsApp us for live directions</li>
                <li>Ask a family member to share the pin location on WhatsApp</li>
                <li>
                  Plan your route in advance, especially during busy traffic
                  hours
                </li>
                <li>Keep a backup transport option for late pregnancy</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Visitors from Nearby Towns
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Call before travelling so we can guide you</li>
                <li>
                  Start early and avoid last-minute travel in late pregnancy
                </li>
                <li>Carry all reports and your ID</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Qualifications:</strong> MS (Obstetrics &amp;
                  Gynaecology), FMAS, Advanced Infertility Fellowship
                </li>
                <li>
                  <strong>Roles:</strong> Co-leads Shree Advanced Urogynae
                  Clinic and serves as a Consultant at Ujala Cygnus BrightStar
                  Hospital
                </li>
                <li>
                  <strong>Expertise:</strong> Normal delivery, high-risk
                  pregnancy care, antenatal and postnatal care, 3D laparoscopic
                  surgery and fertility treatment
                </li>
                <li>
                  <strong>Approach:</strong> Natural birth first, with timely
                  intervention when safety requires it
                </li>
                <li>
                  <strong>Philosophy:</strong> &quot;Her Health First&quot;,
                  which means your comfort, choices and story come first
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Our Normal Delivery Care Includes
              </h2>


              <p className="mb-4 text-gray-700">
                Once you contact us, here is the care you can expect.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Structured antenatal visits and scans</li>
                <li>3D/4D ultrasound for detailed fetal imaging</li>
                <li>
                  Screening for diabetes, blood pressure and thyroid issues
                </li>
                <li>Nutrition, exercise and childbirth guidance</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During Labour
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Continuous electronic fetal monitoring</li>
                <li>One-on-one nursing support during active labour</li>
                <li>
                  Painless epidural options, including walking epidural
                  assistance
                </li>
                <li>Freedom to move and use natural positions</li>
                <li>
                  Instrumental delivery (vacuum or forceps) only when needed for
                  the baby&apos;s safety
                </li>
                <li>Episiotomy care and immediate repair if required</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Safety
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Operation theatre on standby 24/7</li>
                <li>Quick shift to a caesarean if complications arise</li>
                <li>Experience in high-risk pregnancy management</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Birth
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Golden hour skin-to-skin contact</li>
                <li>Early breastfeeding support</li>
                <li>Postnatal recovery guidance</li>
                <li>Newborn and paediatric consultations and vaccinations</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions You Can Ask When You Contact Us
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Is Dr. Priyanka available this week, and at what time?</li>
                <li>What reports should I bring to the first visit?</li>
                <li>Can I get an estimate of delivery costs?</li>
                <li>Is painless delivery or walking epidural available?</li>
                <li>How do you manage high-risk pregnancies?</li>
                <li>What should I do if labour starts at night?</li>
                <li>Is the operation theatre available at all hours?</li>
                <li>How can I share my previous reports?</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Documents to Keep Ready
              </h2>


              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Photo ID</li>
                <li>Previous scans, blood tests and prescriptions</li>
                <li>Records of earlier pregnancies or surgeries</li>
                <li>A list of current medicines and supplements</li>
                <li>Blood group and thyroid or sugar reports</li>
                <li>Insurance details, if relevant</li>
                <li>A notebook with your questions</li>
              </ul>


              <p className="text-gray-700">
                Sending clear photos of your reports on WhatsApp before the visit
                can save time.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Safety Tips for Patients
              </h2>


              <p className="mb-4 text-gray-700">
                Protect yourself while looking for medical help online.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Use the numbers on our official website only</li>
                <li>
                  Be careful of listing sites showing different phone numbers
                </li>
                <li>
                  Never share your OTP, bank details or card numbers over a call
                  or chat claiming to book an appointment
                </li>
                <li>Do not pay advance amounts to unknown personal accounts</li>
                <li>Confirm the clinic name and address before travelling</li>
                <li>Ask for a receipt for any payment</li>
                <li>
                  If something feels suspicious, call our official number to
                  verify
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Us for Different Needs
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Pregnancy Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>First appointment booking</li>
                <li>Antenatal check-ups and scans</li>
                <li>High-risk pregnancy consultation</li>
                <li>Birth planning and pain relief counselling</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal delivery guidance</li>
                <li>Labour emergency calls</li>
                <li>Painless delivery options</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For After Birth
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Postnatal check-up</li>
                <li>Breastfeeding support</li>
                <li>Newborn and paediatric care</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Other Women&apos;s Health Needs
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF consultation</li>
                <li>Laparoscopic gynaecological surgery</li>
                <li>Menstrual disorders and PCOS</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Contact Dr. Priyanka Gynaec
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualified MS (O&amp;G), FMAS obstetrician</li>
                <li>Clear, patient explanations</li>
                <li>Natural-birth-first approach with honest advice</li>
                <li>Painless labour options</li>
                <li>Continuous monitoring and one-on-one nursing</li>
                <li>24/7 OT standby</li>
                <li>Care for low-risk and high-risk pregnancies</li>
                <li>
                  Antenatal, delivery, postnatal and paediatric support in one
                  place
                </li>
                <li>Fertility expertise for long-awaited pregnancies</li>
                <li>A warm team that listens</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Get in Touch Today
              </h2>


              <p className="mb-4 text-gray-700">
                Do not wait for the last trimester. Save our numbers now and
                reach out when you have a question. An early conversation makes
                the whole journey calmer.
              </p>


              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                      <p className="text-sm text-gray-700">
                        Fertility • Maternity • 3D Laparoscopy
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
