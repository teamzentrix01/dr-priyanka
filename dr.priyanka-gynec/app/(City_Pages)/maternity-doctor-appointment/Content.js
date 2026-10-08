import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function MaternityDoctorAppointment() {
  const faqs = [
    {
      q: "When should I book my first maternity doctor appointment?",
      a: "As soon as your pregnancy test is positive, ideally within 8 to 12 weeks.",
    },
    {
      q: "How can I book an appointment?",
      a: "By phone, WhatsApp, email, the clinic's website or a walk-in visit.",
    },
    {
      q: "What should I carry to my first visit?",
      a: "ID, previous reports, prescriptions, medicine list and your questions.",
    },
    {
      q: "What happens at the first antenatal visit?",
      a: "History, examination, ultrasound, blood tests and advice on supplements and lifestyle.",
    },
    {
      q: "How many appointments will I need in pregnancy?",
      a: "Around 10 to 14 in a normal pregnancy, and more in high-risk cases.",
    },
    {
      q: "Can I book an appointment before I am pregnant?",
      a: "Yes. A preconception visit helps you prepare your health and supplements.",
    },
    {
      q: "When should I seek an urgent appointment?",
      a: "For bleeding, severe pain, fluid leakage, reduced baby movements or severe headache.",
    },
    {
      q: "Can I consult online instead of visiting?",
      a: "Online helps for follow-up questions, but examinations and scans need an in-person visit.",
    },
    {
      q: "Do I need a postnatal appointment?",
      a: "Yes. A check-up around 6 weeks after delivery is important for your recovery.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Maternity Doctor Appointment: When to Book, How to Prepare and What to Expect
              </h1>

              <p className="mb-4 text-gray-700">
                A positive pregnancy test brings joy, excitement and a lot of
                questions. One of the first steps is to book a maternity doctor
                appointment. Many women feel unsure about when to go, what to
                carry, what questions to ask and what will happen during the
                visit.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>When to book your first appointment</li>
                <li>How to book (phone, WhatsApp, email, walk-in)</li>
                <li>How to prepare</li>
                <li>What happens at the first visit</li>
                <li>The full check-up schedule</li>
                <li>Warning signs that need urgent visits</li>
                <li>Postnatal appointments</li>
              </ul>
            </div>

            {/* Section 2 — Why Early Booking Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Booking a Maternity Doctor Appointment Early Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Early, regular care is one of the best things you can do for a
                healthy pregnancy.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of Early Appointments
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirms the pregnancy and your due date</li>
                <li>Starts essential supplements such as folic acid and iron on time</li>
                <li>Detects problems early, such as anemia, thyroid issues or high blood pressure</li>
                <li>Allows early scans to check the baby&apos;s heartbeat and position</li>
                <li>Gives you time to ask questions and reduce anxiety</li>
                <li>Helps plan safe, personalized care for the whole pregnancy</li>
                <li>Identifies high-risk pregnancy factors early</li>
              </ul>
            </div>

            {/* Section 3 — When to Book */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Book Your First Maternity Doctor Appointment?
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait until you feel sure or until symptoms appear.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Book Your First Appointment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>As soon as you get a positive pregnancy test</li>
                <li>Ideally within the first 8 to 12 weeks of pregnancy</li>
                <li>Before conceiving, if you are planning a pregnancy (a preconception visit)</li>
                <li>Sooner if you have bleeding, severe pain or vomiting that stops you from eating or drinking</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Book Earlier If You Have
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A history of miscarriage or ectopic pregnancy</li>
                <li>A previous C-section or uterine surgery</li>
                <li>Diabetes, thyroid disease, high blood pressure or PCOS</li>
                <li>Age above 35</li>
                <li>Twins or a multiple pregnancy</li>
                <li>Long-term medical conditions or regular medicines</li>
              </ul>
            </div>

            {/* Section 4 — How to Book */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book a Maternity Doctor Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Most clinics offer several simple options.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Ways to Book
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Phone call: Speak directly to the clinic to choose a time</li>
                <li>WhatsApp message: Convenient for quick queries and slot requests</li>
                <li>Email: Useful for detailed questions or sending reports in advance</li>
                <li>Website booking or contact form: Request an appointment online</li>
                <li>Walk-in visit: Possible at many clinics, though waiting time may be longer</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tips for a Smooth Booking
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mention that you are pregnant and how many weeks you think you are</li>
                <li>Share any urgent symptoms so the clinic can prioritize you</li>
                <li>Ask for the consultation fee and clinic timings</li>
                <li>Ask whether to bring anything specific</li>
                <li>Confirm the address and how to reach the clinic</li>
                <li>Save the clinic&apos;s phone and WhatsApp number in your phone</li>
              </ul>
            </div>

            {/* Section 5 — Prepare */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Prepare Before Your First Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                A little preparation makes the visit more useful.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Documents and Items to Carry
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Photo ID</li>
                <li>Previous medical records and reports</li>
                <li>Recent test results, scans or prescriptions</li>
                <li>List of current medicines and supplements</li>
                <li>Details of past pregnancies, miscarriages or surgeries</li>
                <li>Insurance papers, if relevant</li>
                <li>Notebook or phone to note down advice</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Information to Note Down
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Date of your last menstrual period (LMP)</li>
                <li>Typical length of your menstrual cycle</li>
                <li>Any symptoms you have had, such as nausea, spotting or pain</li>
                <li>Family history of diabetes, high blood pressure, twins or genetic conditions</li>
                <li>Your own medical conditions and allergies</li>
              </ul>
            </div>

            {/* Section 6 — Questions */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Write Down Before You Go
              </h2>

              <p className="mb-4 text-gray-700">
                It is easy to forget questions in the consultation room. Prepare
                your list:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Is my pregnancy progressing normally?</li>
                <li>Which supplements and medicines are safe for me?</li>
                <li>What foods should I eat or avoid?</li>
                <li>Is exercise safe for me?</li>
                <li>Can I travel, and until when?</li>
                <li>How often will I need check-ups and scans?</li>
                <li>What are the warning signs I should never ignore?</li>
                <li>How can I contact you in an emergency?</li>
                <li>Do you support normal delivery, and when would a C-section be needed?</li>
                <li>What is the estimated cost of care and delivery?</li>
              </ul>
            </div>

            {/* Section 7 — First Visit */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens at the First Maternity Doctor Appointment?
              </h2>

              <p className="mb-4 text-gray-700">
                Knowing what to expect reduces nervousness.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Typical Steps
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Registration and basic details: your name, age, contact number and medical history</li>
                <li>Detailed history: menstrual cycle, previous pregnancies, surgeries, medicines and family history</li>
                <li>Basic examination: weight, height, blood pressure and general check-up</li>
                <li>Ultrasound scan: to confirm the pregnancy, check the heartbeat and estimate the due date</li>
                <li>Blood and urine tests: hemoglobin, blood group and Rh factor, blood sugar, thyroid and infection screening</li>
                <li>Advice and prescriptions: folic acid, iron, calcium and other supplements as needed</li>
                <li>Lifestyle guidance: food, activity, sleep and safe habits</li>
                <li>Planning ahead: schedule for future visits, scans and tests</li>
              </ul>

              <p className="text-gray-700">
                How long does it take? A first visit often takes longer than
                later ones, so plan your day accordingly.
              </p>
            </div>

            {/* Section 8 — Appointment Schedule */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recommended Antenatal Appointment Schedule
              </h2>

              <p className="mb-4 text-gray-700">
                A typical schedule may look like this, though your doctor may
                adjust it:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester (Weeks 1 to 12)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>First visit within the early weeks</li>
                <li>Early ultrasound and basic blood tests</li>
                <li>Follow-up visit about once a month</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester (Weeks 13 to 27)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Monthly check-ups</li>
                <li>Anomaly scan around 18 to 20 weeks</li>
                <li>Screening for gestational diabetes around 24 to 28 weeks</li>
                <li>Vaccinations as advised</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester (Weeks 28 to 36)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Check-ups about every 2 weeks</li>
                <li>Growth scans and position checks</li>
                <li>Discussion of delivery options and birth plan</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Final Weeks (Week 36 to Delivery)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weekly check-ups</li>
                <li>Preparation for labor and hospital admission</li>
                <li>Review of warning signs and when to come in</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Estimated total: around 10 to 14 visits in a normal pregnancy,
                and more for high-risk cases.
              </p>

              <p className="text-gray-700">
                For structured prenatal care, see the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/antenatal-services"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Antenatal Services
                </a>{" "}
                page.
              </p>
            </div>

            {/* Section 9 — Tests and Scans */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests and Scans You May Be Asked to Do
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early dating scan: confirms the pregnancy and due date</li>
                <li>Blood tests: hemoglobin, blood group, sugar, thyroid and infection screening</li>
                <li>Urine tests: check for infection and protein</li>
                <li>NT scan and screening tests: in the first trimester, when advised</li>
                <li>Anomaly scan: detailed check of the baby&apos;s growth and organs</li>
                <li>Glucose tolerance test: screening for gestational diabetes</li>
                <li>Growth scans: to monitor the baby&apos;s size and fluid levels</li>
                <li>Doppler studies: in selected cases</li>
              </ul>

              <p className="text-gray-700">
                Tip: Keep all reports in one folder and bring them to every
                visit.
              </p>
            </div>

            {/* Section 10 — Tips */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Make Every Appointment More Useful
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Arrive a little early to complete formalities calmly.</li>
                <li>Wear comfortable clothing that allows easy examination.</li>
                <li>Drink water as advised, especially if your scan needs a full bladder. Confirm with the clinic first.</li>
                <li>Bring your husband or a family member for support, if you wish.</li>
                <li>Keep a pregnancy diary with symptoms, questions and baby movements.</li>
                <li>Ask for explanations in simple words if anything is unclear.</li>
                <li>Note the next appointment date before you leave.</li>
                <li>Follow the advice on medicines, diet and rest.</li>
              </ul>
            </div>

            {/* Section 11 — Urgent Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs That Need an Urgent Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait for your next scheduled visit if you notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal bleeding or leaking of fluid</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Reduced or absent baby movements</li>
                <li>Severe headache, blurred vision or sudden swelling of the face and hands</li>
                <li>High fever or burning urination</li>
                <li>Persistent vomiting with inability to drink</li>
                <li>Regular contractions before 37 weeks</li>
                <li>Chest pain or difficulty breathing</li>
                <li>Sudden swelling or pain in one leg</li>
              </ul>

              <p className="text-gray-700">
                Call your doctor immediately or go to the nearest hospital.
              </p>
            </div>

            {/* Section 12 — High-Risk */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Appointment for a High-Risk Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Some pregnancies need closer follow-up.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                You May Need More Frequent Appointments If You Have
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gestational or pre-existing diabetes</li>
                <li>High blood pressure or pre-eclampsia</li>
                <li>Thyroid disorders</li>
                <li>Twins or multiple pregnancy</li>
                <li>Previous miscarriage, preterm birth or C-section</li>
                <li>Placenta problems</li>
                <li>Age above 35 or below 18</li>
                <li>Anemia, heart disease or kidney problems</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What High-Risk Follow-Up May Include
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent check-ups and scans</li>
                <li>Special tests and monitoring</li>
                <li>Medication adjustments</li>
                <li>Careful planning of delivery</li>
              </ul>
            </div>

            {/* Section 13 — Delivery Planning */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Appointment for Delivery Planning
              </h2>

              <p className="mb-4 text-gray-700">
                By the third trimester, your appointments will focus on
                delivery.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Topics to Discuss
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal delivery or C-section, and the reasons for each</li>
                <li>Pain relief options</li>
                <li>When to come to the hospital</li>
                <li>What to pack in your hospital bag</li>
                <li>Who can stay with you</li>
                <li>Emergency arrangements</li>
                <li>Estimated costs and inclusions</li>
              </ul>

              <p className="text-gray-700">
                You can read more on the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/normal-delivery"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Normal Delivery
                </a>{" "}
                and{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/pregnancy-birthing"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pregnancy &amp; Birthing Care
                </a>{" "}
                pages.
              </p>
            </div>

            {/* Section 14 — Postnatal */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postnatal Appointments After Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Your care does not end with birth.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Typical Postnatal Visits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>First wound or recovery check: within the first 1 to 2 weeks, if advised</li>
                <li>Main postnatal check-up: around 6 weeks after delivery</li>
                <li>Extra visits: whenever you have a concern</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What the Visit Covers
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Healing of the uterus or any incision</li>
                <li>Bleeding and general recovery</li>
                <li>Blood pressure and hemoglobin</li>
                <li>Breastfeeding support</li>
                <li>Emotional health, including baby blues and postpartum depression</li>
                <li>Contraception and family planning advice</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Newborn Visits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaccinations and growth checks</li>
                <li>Feeding and sleep guidance</li>
              </ul>

              <p className="text-gray-700">
                See the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/paediatrics"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paediatric Care
                </a>{" "}
                page for newborn care.
              </p>
            </div>

            {/* Section 15 — Online vs In-Person */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Online vs In-Person Appointments
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In-Person Visits Are Best For
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>First consultation</li>
                <li>Physical examination</li>
                <li>Ultrasound scans</li>
                <li>Blood pressure and weight checks</li>
                <li>Any new or concerning symptoms</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Online (Tele) Consultations Can Help With
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Quick follow-up questions</li>
                <li>Reviewing reports</li>
                <li>Clarifying medicines or diet advice</li>
                <li>Appointment planning</li>
              </ul>

              <p className="text-gray-700">
                Important: Do not use online consultation for emergencies. Visit
                the clinic or hospital immediately.
              </p>
            </div>

            {/* Section 16 — Mistakes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid When Booking Appointments
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Waiting too long for the first visit</li>
                <li>Skipping scheduled check-ups because you feel fine</li>
                <li>Forgetting reports and repeating tests unnecessarily</li>
                <li>Not writing down questions</li>
                <li>Ignoring warning signs until the next visit</li>
                <li>Changing doctors repeatedly, which breaks continuity of care</li>
                <li>Relying only on online advice instead of examination</li>
              </ul>
            </div>

            {/* Section 17 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Maternity Appointments
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: &quot;I should wait until the second trimester to see a doctor.&quot; Fact: Early care helps detect problems and start supplements on time.</li>
                <li>Myth: &quot;If I feel fine, I do not need regular visits.&quot; Fact: Many problems, such as high blood pressure and anemia, can be silent.</li>
                <li>Myth: &quot;Ultrasound scans harm the baby.&quot; Fact: Ultrasound used as advised is considered safe.</li>
                <li>Myth: &quot;Only high-risk women need many appointments.&quot; Fact: Every pregnancy needs regular monitoring.</li>
                <li>Myth: &quot;Care ends after delivery.&quot; Fact: Postnatal check-ups are essential for your recovery.</li>
              </ul>
            </div>

            {/* Section 18 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation: Dr. Priyanka Gynaec
              </h2>

              <p className="mb-6 text-black">
                Dr. Priyanka Pachauri: Best Gynaecologist in Moradabad
              </p>

              <p className="mb-6 text-black">
                Fertility • Maternity • 3D Laparoscopy
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 19 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
