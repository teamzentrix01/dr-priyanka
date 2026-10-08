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


export default function NormalDeliveryDoctorAppointmentMoradabad() {
  const faqs = [
    {
      q: "When should I book my first appointment?",
      a: "As soon as pregnancy is confirmed, ideally in the first trimester.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "ID, previous reports, scans, current medicines and your last period date.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Do you treat high-risk pregnancies?",
      a: "Yes. Dr. Priyanka provides careful monitoring and planning for high-risk cases.",
    },
    {
      q: "Is painless delivery available?",
      a: "Yes. Epidural and walking epidural are offered after medical assessment.",
    },
    {
      q: "What if I have an emergency before my appointment?",
      a: "Call us immediately or go to the nearest hospital.",
    },
    {
      q: "Can I switch to Dr. Priyanka in a later month?",
      a: "Yes. Book as soon as possible and bring all previous reports.",
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
                Normal Delivery Doctor Appointment in Moradabad: How to Book
                and What to Expect
              </h1>


              <p className="mb-4 text-gray-700">
                Choosing a delivery doctor is a big step, and the first
                appointment is where trust begins. Many women delay this visit
                because they are unsure when to go, what to carry or what the
                doctor will ask. Others feel nervous about the examination.
              </p>


              <p className="mb-4 text-gray-700">
                This guide takes the worry out of it. It explains how to book a
                normal delivery doctor appointment in Moradabad, when to book,
                what happens during the visit and how to prepare. It also shows
                how to reach Dr. Priyanka Pachauri at Dr. Priyanka Gynaec
                quickly, by phone, WhatsApp or email.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Book Your First Appointment?
              </h2>


              <p className="mb-4 text-gray-700">
                Earlier is better. You do not need to wait until you feel ready.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>As soon as the pregnancy test is positive:</strong>{" "}
                  Early confirmation and guidance
                </li>
                <li>
                  <strong>In the first trimester (up to week 12):</strong> Ideal
                  for dating scan, blood tests and supplements
                </li>
                <li>
                  <strong>Before 20 weeks at the latest:</strong> For the
                  detailed anomaly scan and birth planning
                </li>
                <li>
                  <strong>If you have a high-risk condition:</strong> Book
                  immediately, since early planning matters
                </li>
                <li>
                  <strong>If you are shifting from another doctor:</strong> Book
                  early, and bring all previous reports
                </li>
                <li>
                  <strong>If you are planning a pregnancy:</strong> A
                  pre-pregnancy consultation can also be helpful
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                If you have bleeding, severe pain or reduced baby movements, do
                not wait for a routine slot. Call us at once.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Book a Delivery Doctor Early?
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your care becomes continuous, since one team knows your
                  history
                </li>
                <li>
                  Problems like anaemia, diabetes or high blood pressure are
                  found early
                </li>
                <li>
                  You have time to discuss pain relief and your birth
                  preferences
                </li>
                <li>Fear and confusion reduce when you know what is coming</li>
                <li>
                  You can plan costs, hospital bag and family support calmly
                </li>
                <li>
                  You are not choosing a doctor in a rush during the last month
                </li>
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
                Step-by-Step: What Happens When You Book
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Contact the Clinic
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Call or WhatsApp us with your basic details</li>
                <li>Our team will guide you on available timings</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Confirmation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>You receive the appointment details</li>
                <li>You are told what reports to bring</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Arrival
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reach the clinic a little early</li>
                <li>Carry your ID and previous documents</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Consultation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A friendly conversation about your health and history
                </li>
                <li>Examination and basic checks</li>
                <li>Ultrasound, if needed</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Plan and Follow-Up
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A care plan with tests and visit dates</li>
                <li>Advice on diet, supplements and activity</li>
                <li>Contact details for any questions in between</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Carry to Your First Appointment
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Photo ID</li>
                <li>Previous medical reports, scans and prescriptions</li>
                <li>A list of current medicines and supplements</li>
                <li>
                  Details of earlier pregnancies, deliveries or surgeries
                </li>
                <li>Date of your last menstrual period</li>
                <li>
                  Any test reports such as blood group, thyroid or sugar
                </li>
                <li>Insurance details, if relevant</li>
                <li>A written list of your questions</li>
                <li>A family member for support, if you wish</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What the Doctor Will Ask You
              </h2>


              <p className="mb-4 text-gray-700">
                Do not be surprised by detailed questions. They help us give
                safer care.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Date of last period and how regular your cycles are
                </li>
                <li>Previous pregnancies, miscarriages or caesareans</li>
                <li>
                  Existing health issues such as diabetes, thyroid or blood
                  pressure
                </li>
                <li>Medicines you take regularly</li>
                <li>
                  Family history of diabetes, twins or genetic conditions
                </li>
                <li>Allergies</li>
                <li>Lifestyle, diet and sleep</li>
                <li>Any symptoms like nausea, bleeding or pain</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Honest answers help us plan the best path for you.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During the Examination
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Checking weight and blood pressure</li>
                <li>General and abdominal examination</li>
                <li>
                  Ultrasound to confirm pregnancy, dates and baby&apos;s
                  wellbeing
                </li>
                <li>Blood and urine tests, as advised</li>
                <li>Discussion of results and next steps</li>
              </ul>


              <p className="mt-4 text-gray-700">
                We explain each step, and you can ask us to pause or clarify at
                any time. Your comfort and privacy are respected.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Antenatal Visit Schedule After Booking
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>First trimester:</strong> Confirmation scan, blood
                  tests, folic acid and risk screening
                </li>
                <li>
                  <strong>Second trimester:</strong> Detailed 3D/4D anomaly
                  scan, diabetes screening and growth checks
                </li>
                <li>
                  <strong>Third trimester:</strong> Growth scans, position
                  checks, birth planning and childbirth education
                </li>
                <li>
                  <strong>Final weeks:</strong> More frequent visits and a clear
                  plan for labour
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                The exact schedule is adjusted to your needs.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask at Your Appointment
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What is my expected due date?</li>
                <li>Which tests and scans do I need, and when?</li>
                <li>
                  What should I eat, and which supplements should I take?
                </li>
                <li>Which exercises are safe for me?</li>
                <li>Am I a candidate for normal delivery?</li>
                <li>Is epidural or walking epidural suitable for me?</li>
                <li>When should I call you or come to the hospital?</li>
                <li>What will the estimated costs include?</li>
                <li>Who will conduct my delivery?</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Write your questions down so nothing is forgotten.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Normal Delivery Care
              </h2>


              <p className="mb-4 text-gray-700">
                Your appointment is the doorway to complete care.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Labour and Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Natural birthing preparation and pelvic assessment
                </li>
                <li>Continuous electronic fetal monitoring</li>
                <li>One-on-one nursing support during active labour</li>
                <li>
                  Painless epidural labour analgesia, including walking epidural
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
                <li>Quick shift to caesarean if complications arise</li>
                <li>Experience with high-risk pregnancies</li>
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
                Appointments for High-Risk Pregnancy
              </h2>


              <p className="mb-4 text-gray-700">
                Some women need extra attention from the start. Book early if
                you have:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Gestational or pre-existing diabetes</li>
                <li>High blood pressure or a history of pre-eclampsia</li>
                <li>Thyroid disorders</li>
                <li>A previous caesarean or miscarriage</li>
                <li>Pregnancy after IVF or fertility treatment</li>
                <li>Twin pregnancy</li>
                <li>Age above 35</li>
              </ul>


              <p className="mt-4 text-gray-700">
                With early planning, many of these women can still aim for a
                safe normal delivery under close supervision.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs You Should Not Wait for an Appointment
              </h2>


              <p className="mb-4 text-gray-700">
                Call the clinic immediately or go to the nearest hospital if you
                notice:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal bleeding</li>
                <li>Severe abdominal pain</li>
                <li>Water breaking</li>
                <li>
                  Regular painful contractions every 5 to 10 minutes
                </li>
                <li>Reduced or absent baby movements</li>
                <li>Severe headache, blurred vision or sudden swelling</li>
                <li>Fever with pregnancy</li>
              </ul>


              <p className="mt-4 text-gray-700">
                These are emergencies and need urgent medical attention.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Make Your Visit More Comfortable
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Wear loose, comfortable clothes</li>
                <li>Eat lightly and drink water, unless told otherwise</li>
                <li>Arrive early to complete formalities calmly</li>
                <li>Bring a friend or relative for support</li>
                <li>Keep your phone charged for notes and photos of reports</li>
                <li>Tell the doctor about your fears and expectations</li>
                <li>Ask for repeat explanations if anything is unclear</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Choose Dr. Priyanka Gynaec
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualified MS (O&amp;G), FMAS obstetrician</li>
                <li>
                  Natural-birth-first approach with honest advice
                </li>
                <li>Painless labour options</li>
                <li>Continuous monitoring and one-on-one nursing</li>
                <li>24/7 OT standby</li>
                <li>3D/4D ultrasound and modern technology</li>
                <li>Care for low-risk and high-risk pregnancies</li>
                <li>
                  Antenatal, delivery, postnatal and paediatric care in one
                  place
                </li>
                <li>Fertility and IVF expertise</li>
                <li>A warm team that listens and explains</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Appointment Today
              </h2>


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
