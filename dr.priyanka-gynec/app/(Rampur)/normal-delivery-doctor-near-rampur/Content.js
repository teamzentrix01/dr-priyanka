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
    q: "Who is a normal delivery doctor for patients from Rampur?",
    a: "Dr. Priyanka Pachauri provides antenatal care and delivery support, prioritising normal vaginal delivery wherever it is safe.",
  },
  {
    q: "Where will my delivery take place?",
    a: "Please confirm this with the clinic when you book, and discuss the delivery plan during your antenatal visits.",
  },
  {
    q: "Is normal delivery always possible?",
    a: "Not always. It depends on your health, the baby's position and size, and how labour progresses. Your doctor will assess this throughout pregnancy.",
  },
  {
    q: "When should I leave for delivery if I live in Rampur?",
    a: "Ask your doctor for a personal plan during the third trimester. It depends on your situation, and in an emergency you should go to the nearest hospital.",
  },
  {
    q: "Can I have a normal delivery after a previous caesarean?",
    a: "Some women can attempt a trial of labour, depending on the reason for the earlier caesarean and your current pregnancy. Discuss this with your doctor early.",
  },
  {
    q: "Can a high-risk pregnancy end in a normal delivery?",
    a: "Sometimes. Each case needs individual assessment and closer monitoring.",
  },
  {
    q: "What are the signs of labour?",
    a: "Regular, strengthening contractions, a show, leaking fluid and persistent lower back pain. Contact your doctor promptly.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on www.gynaecologistmoradabad.com.',
  },
];

export default function NormalDeliveryDoctorNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Normal Delivery Doctor near Rampur – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                Many women hope for a normal delivery but feel unsure about
                what to expect, how to prepare and who will support them. If
                you live in Rampur, there is also a practical question: how do
                you plan your birth when your doctor is in another city?
              </p>

              <p>
                <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec
                in neighbouring <strong>Moradabad</strong> offers antenatal
                care that prioritises normal vaginal delivery wherever it is
                safe for mother and baby. The clinic is located in Moradabad,
                not in Rampur, and women from Rampur and nearby areas travel
                there for pregnancy care. Its philosophy is{" "}
                <strong>&ldquo;Her Health First.&rdquo;</strong> You are
                listened to, informed and never rushed.
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is a Normal Delivery?
              </h2>
              <p>
                A normal delivery, also called vaginal delivery, is when the
                baby is born through the birth canal without surgery. Labour
                begins on its own, or is carefully induced when medically
                needed, and moves through defined stages.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Benefits of Normal Delivery
              </h2>
              <p>
                When it is medically suitable, normal delivery generally
                offers:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Faster recovery after birth</li>
                <li>No major abdominal surgery or surgical wound</li>
                <li>Lower risk of certain surgical complications</li>
                <li>Easier movement and baby care in the early days</li>
                <li>A shorter hospital stay in most cases</li>
              </ul>
              <p>
                These benefits apply when normal delivery is safe. In some
                situations, a caesarean is the better choice, and an honest
                doctor will tell you so clearly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Who Can Try for a Normal Delivery?
              </h2>
              <p>Suitability depends on individual factors. Your doctor usually considers:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The baby's position (head-down is ideal)</li>
                <li>The baby's size and growth</li>
                <li>The position of the placenta</li>
                <li>Your general health and medical conditions</li>
                <li>Previous deliveries or caesarean history</li>
                <li>How labour progresses</li>
              </ul>
              <p>
                This is assessed throughout pregnancy, not only at the last
                minute.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Antenatal Care: The Foundation of a Safe Birth
              </h2>
              <p>
                A smooth delivery starts months earlier. Antenatal services at
                the clinic include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Early registration and trimester-wise check-ups</li>
                <li>Ultrasound on a Voluson E22 3D and 4D machine</li>
                <li>
                  Blood tests and screening for gestational diabetes, anaemia
                  and thyroid problems
                </li>
                <li>Monitoring of blood pressure, weight and the baby's growth</li>
                <li>Nutrition, activity and lifestyle guidance</li>
                <li>
                  Counselling on labour, pain relief options and newborn care
                </li>
              </ul>
              <p>
                Early attention to conditions such as high blood pressure or
                diabetes greatly improves the chance of a safe delivery.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing Your Body and Mind
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Stay active:</strong> Gentle walking and doctor-approved
                  exercises help
                </li>
                <li>
                  <strong>Practise breathing and relaxation:</strong> Simple
                  techniques help during contractions
                </li>
                <li>
                  <strong>Eat well and stay hydrated:</strong> This supports
                  your energy and the baby's growth
                </li>
                <li>
                  <strong>Sleep and manage stress:</strong> Calm minds tend to
                  cope better with labour
                </li>
                <li>
                  <strong>Learn what to expect:</strong> Knowing the stages of
                  labour reduces fear
                </li>
              </ul>
              <p>
                Ask your doctor before starting any new exercise, especially
                if your pregnancy is high-risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Stages of Labour
              </h2>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  First Stage
                </h3>
                <p>
                  Contractions become regular and the cervix gradually opens.
                  This is usually the longest stage.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Second Stage
                </h3>
                <p>
                  The cervix is fully open and you push as guided. The baby is
                  born at the end of this stage.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Third Stage
                </h3>
                <p>
                  The placenta is delivered, usually soon after the baby.
                </p>
              </div>

              <p>
                Throughout labour, the baby's heartbeat and your own condition
                are monitored so any change can be handled promptly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Your Delivery When You Live in Rampur
              </h2>
              <p>
                This is the part many women forget until the last weeks. Raise
                these points early, ideally by the third trimester.
              </p>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ask Your Doctor
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Where will the delivery take place, and what facilities
                    are there?
                  </li>
                  <li>When should I leave home once labour begins?</li>
                  <li>
                    What should I do if my water breaks or contractions start
                    suddenly?
                  </li>
                  <li>
                    Which symptoms mean I should go to the nearest hospital
                    instead of travelling?
                  </li>
                  <li>
                    How do I reach the clinic or hospital team when labour
                    starts?
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Plan Your Journey
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Decide in advance who will accompany you and who will
                    drive
                  </li>
                  <li>
                    Keep transport arranged or on standby as your due date
                    nears
                  </li>
                  <li>
                    Know the route, and keep fuel and phone chargers ready
                  </li>
                  <li>
                    Consider whether staying closer to the delivery location
                    in the final weeks is practical for your family, and
                    discuss it with your doctor
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Plan for the Unexpected
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Identify the nearest hospital with emergency and delivery
                    facilities to your home
                  </li>
                  <li>Keep your antenatal card and reports with you at all times</li>
                  <li>Make sure family members know the plan</li>
                </ul>
              </div>

              <p>
                In an emergency, go to the nearest emergency facility
                immediately. Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Signs That Labour Has Started
              </h2>
              <p>Contact your doctor if you notice:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Regular contractions that grow stronger and closer together</li>
                <li>
                  A &ldquo;show,&rdquo; which is a mucus plug that may be
                  blood-tinged
                </li>
                <li>Leaking or a gush of fluid</li>
                <li>Persistent lower back pain with tightening</li>
                <li>Reduced baby movements, which needs urgent care</li>
              </ul>
              <p>
                Do not wait at home if you have heavy bleeding, severe
                constant pain, fever or no baby movements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Pain Relief and Comfort in Labour
              </h2>
              <p>
                Fear of pain is natural. Discuss options during antenatal
                visits. These may include breathing techniques, position
                changes, supportive company and medical pain relief where
                appropriate. Your doctor will explain what is suitable for
                you, along with the benefits and limits of each option.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                When a Pregnancy Needs Extra Attention
              </h2>
              <p>
                A high-risk pregnancy does not automatically rule out a normal
                delivery. Conditions such as diabetes, high blood pressure,
                thyroid disease, previous miscarriage, twins or pregnancy
                after IVF may need closer monitoring and a careful plan. Dr.
                Priyanka Pachauri assesses each case individually and chooses
                the safest route for both mother and baby.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                When a Caesarean Becomes Necessary
              </h2>
              <p>
                Safe motherhood is the real goal, not one particular method of
                birth. A caesarean may be advised if:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The baby shows signs of distress</li>
                <li>
                  Labour does not progress despite adequate time and support
                </li>
                <li>The baby is in an unfavourable position</li>
                <li>The placenta covers the cervix</li>
                <li>There are serious maternal health risks</li>
              </ul>
              <p>
                At the clinic, the reasons are explained openly so you
                understand the decision and feel included in it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Hospital Bag Checklist
              </h2>
              <p>Pack by the last trimester:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Antenatal card, reports and identification</li>
                <li>Comfortable clothes and sanitary pads</li>
                <li>Toiletries and a towel</li>
                <li>Baby clothes, wraps and diapers</li>
                <li>Phone, charger and important contact numbers</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery After a Normal Delivery
              </h2>
              <p>Postnatal care includes:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Care of any stitches and pain relief</li>
                <li>Guidance on bleeding, hygiene and warning signs</li>
                <li>Breastfeeding support</li>
                <li>Advice on diet, rest and gradual activity</li>
                <li>Contraception counselling</li>
                <li>Emotional support and follow-up visits</li>
              </ul>
              <p>
                Newborn care, paediatric consultations and vaccinations are
                also available at the clinic.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and women&apos;s health,
                  with a compassionate approach
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
                <li>
                  <strong>Advanced imaging:</strong> Detailed assessment with
                  a Voluson E22 3D/4D ultrasound machine
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Fertility,
                  pregnancy, delivery and paediatric services
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice on the safest mode
                  of delivery
                </li>
              </ul>
            </section>

            <section className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Clinic Address and Appointments
              </h2>

              <p className="mb-4">
                Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
                Nagar, Moradabad, Uttar Pradesh – 244001.
              </p>

              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="font-semibold underline"
                    >
                      +91 90797 65578
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      +91 89796 70705
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="font-semibold underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
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