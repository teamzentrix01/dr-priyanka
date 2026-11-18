
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Rampur?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Rampur and nearby areas travel there for antenatal care.",
  },
  {
    q: "When should I book my first antenatal visit?",
    a: "As soon as your pregnancy test is positive, ideally within the first 6 to 8 weeks.",
  },
  {
    q: "Is this page suitable for first-time mothers?",
    a: "Yes. It covers questions to ask, common myths, warning signs and a simple checklist. Your doctor will give advice specific to you.",
  },
  {
    q: "How often are antenatal checkups needed?",
    a: "Usually monthly in early and mid-pregnancy, becoming more frequent in the last trimester. Your doctor will set a schedule based on your health and risk factors.",
  },
  {
    q: "Does the clinic have 3D/4D ultrasound?",
    a: "Yes. The clinic uses a Voluson E22 3D and 4D ultrasound machine. Fetal sex determination is prohibited by law in India and is not performed.",
  },
  {
    q: "Is normal delivery possible?",
    a: "Yes. Normal delivery is prioritised whenever it is safe for mother and baby. A caesarean is advised only when medically necessary.",
  },
  {
    q: "Can the clinic manage high-risk pregnancies?",
    a: "Yes. High-risk pregnancies are monitored with closer follow-up, appropriate tests and timely decisions.",
  },
  {
    q: "Is it safe to travel during pregnancy?",
    a: "It depends on your stage and health. Ask your doctor, carry your antenatal card, take breaks and know the warning signs that need urgent care.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on the clinic website.",
  },
];

export default function AntenatalCareDoctorRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Antenatal Care Doctor near Rampur – First-Time Mother Guide
            </h1>

            <p>
              A first pregnancy brings excitement and a long list of questions.
              Everyone around you has advice, some helpful and some not. A
              trusted antenatal care doctor helps you separate fact from myth
              and gives you a clear plan.
            </p>

            <p>
              If you are looking for an antenatal care doctor near Rampur, Dr.
              Priyanka Pachauri of Dr. Priyanka Gynaec in neighbouring Moradabad
              is an option to consider. The clinic is located in Moradabad, not
              in Rampur, and women from Rampur and nearby areas travel there for
              pregnancy care. Its philosophy is &quot;Her Health First.&quot;
              You are listened to, informed and never rushed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              First Things First: Confirm and Register Early
            </h2>

            <p>
              After a positive home test, book a visit within the first 6 to 8
              weeks. Early registration lets the doctor confirm the pregnancy,
              estimate the due date, begin supplements and identify any risk
              factors. If you have diabetes, thyroid disease, high blood
              pressure or a history of miscarriage, tell the doctor at once.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Questions First-Time Mothers Should Ask
            </h2>

            <p>Write these down and bring them to your first visit:</p>

            <ol className="list-decimal space-y-2 pl-6">
              <li>Is my pregnancy low-risk or high-risk, and why?</li>
              <li>Which tests and scans do I need, and when?</li>
              <li>Which supplements should I take?</li>
              <li>What should I eat, and what should I avoid?</li>
              <li>Which medicines are safe if I fall ill?</li>
              <li>What exercise or activity is safe?</li>
              <li>Which symptoms are normal, and which need urgent care?</li>
              <li>How often will I need check-ups?</li>
              <li>What are my options for delivery?</li>
              <li>Whom do I contact if I have a worry between visits?</li>
            </ol>

            <p>A good doctor welcomes every question.</p>

            <h2 className="text-2xl font-bold text-gray-900">
              Pregnancy Myths and Facts
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: You should &quot;eat for two.&quot;
                </h3>
                <p>
                  <strong>Fact:</strong> You need extra nutrients, not double
                  the food. Balanced meals and the supplements your doctor
                  prescribes matter more than quantity.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: Pregnant women should rest completely.
                </h3>
                <p>
                  <strong>Fact:</strong> Gentle activity, such as walking, is
                  usually encouraged unless your doctor advises otherwise.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: Normal delivery depends on a woman&apos;s strength
                  alone.
                </h3>
                <p>
                  <strong>Fact:</strong> Delivery depends on the baby&apos;s
                  position and size, your health, and how labour progresses.
                  Preparation helps, but a caesarean is sometimes medically
                  necessary.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: Ultrasound harms the baby.
                </h3>
                <p>
                  <strong>Fact:</strong> Ultrasound does not use radiation, and
                  it is considered safe when performed for medical reasons by
                  trained professionals.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: Home remedies and herbal products are always safe.
                </h3>
                <p>
                  <strong>Fact:</strong> Some can be harmful in pregnancy. Ask
                  your doctor before taking anything new.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: Morning sickness means something is wrong.
                </h3>
                <p>
                  <strong>Fact:</strong> Nausea is common, particularly early
                  on. Tell your doctor if you cannot keep fluids down.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Myth: The shape of the bump predicts anything about the baby.
                </h3>
                <p>
                  <strong>Fact:</strong> It does not. Fetal sex determination is
                  prohibited by law in India, and the clinic does not perform
                  or disclose it.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              What Antenatal Care Includes
            </h2>

            <p>At Dr. Priyanka Gynaec, antenatal services include:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Early registration and trimester-wise consultations</li>
              <li>Ultrasound on a Voluson E22 3D and 4D machine</li>
              <li>Blood and urine tests</li>
              <li>Screening for gestational diabetes, thyroid problems and anaemia</li>
              <li>Blood pressure and weight monitoring</li>
              <li>Nutrition and lifestyle counselling</li>
              <li>High-risk pregnancy monitoring</li>
              <li>Labour and delivery preparation</li>
              <li>Postnatal follow-up, newborn care and vaccinations</li>
            </ul>

            <p>
              Your doctor will set the timing of visits and scans according to
              your health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Eating Well in Pregnancy
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Choose balanced meals with vegetables, fruit, pulses, grains,
                dairy and adequate protein
              </li>
              <li>Take iron, folic acid and calcium exactly as prescribed</li>
              <li>Drink plenty of fluids</li>
              <li>Avoid raw or undercooked foods and unpasteurised dairy</li>
              <li>Limit caffeine</li>
              <li>Avoid smoking, alcohol and tobacco in any form</li>
            </ul>

            <p>
              If you have anaemia, diabetes or other conditions, your doctor
              will tailor the advice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Normal Delivery and Your Birth Choices
            </h2>

            <p>
              Dr. Priyanka Pachauri prioritises normal vaginal delivery
              wherever it is safe for mother and baby. Antenatal visits help you
              prepare physically and emotionally. If a caesarean becomes
              necessary, the reasons are explained openly, so you feel included
              in the decision. Ask early about your options, pain relief and
              what to expect in labour.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              When a Pregnancy Needs Extra Care
            </h2>

            <p>You may need closer monitoring if you have:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Diabetes, high blood pressure or thyroid disease</li>
              <li>A history of miscarriage, stillbirth or preterm birth</li>
              <li>A previous caesarean</li>
              <li>Twin or multiple pregnancy</li>
              <li>Pregnancy after IVF or long-standing infertility</li>
              <li>Pregnancy at an older maternal age</li>
            </ul>

            <p>
              High-risk does not mean something will go wrong. It means closer
              follow-up, more scans and timely decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Feelings Matter Too
            </h2>

            <p>
              It is normal to feel excited, anxious or tearful in pregnancy,
              especially the first time. Share your worries with your doctor and
              family. If sadness, panic or loss of interest in daily life
              continues, please ask for support. Emotional health is part of
              antenatal care.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Warning Signs: Do Not Wait for Your Next Appointment
            </h2>

            <p>Seek urgent medical care if you have:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Vaginal bleeding</li>
              <li>Leaking fluid</li>
              <li>Severe or persistent abdominal pain</li>
              <li>Reduced or absent baby movements</li>
              <li>
                Severe headache, blurred vision or sudden swelling of the face
                or hands
              </li>
              <li>High fever</li>
              <li>Regular painful contractions before your due date</li>
              <li>Breathlessness or chest pain</li>
            </ul>

            <p>
              In an emergency, go to the nearest emergency facility immediately.
              Do not delay care to travel to another city.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Planning Visits When You Live in Rampur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Book appointments in advance and confirm timings</li>
              <li>
                Ask which visits and scans must be done at the clinic, and which
                routine checks may be possible locally if your doctor agrees
              </li>
              <li>Carry your antenatal card and all reports to every visit</li>
              <li>Travel with a family member where possible</li>
              <li>
                Take breaks on long journeys, and ask whether any travel limits
                apply as your pregnancy advances
              </li>
              <li>
                Identify the nearest hospital with emergency and delivery
                facilities to your home
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              A Simple Checklist to Keep Handy
            </h2>

            <h3 className="text-lg font-semibold text-gray-900">
              Documents
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Antenatal card</li>
              <li>All scan and blood test reports</li>
              <li>A list of medicines and supplements</li>
              <li>Identification</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">
              Contacts
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Clinic phone and WhatsApp numbers</li>
              <li>A nearby hospital with emergency and delivery facilities</li>
              <li>Family member who will accompany you</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">
              Hospital Bag (Pack by the Last Trimester)
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Comfortable clothes and sanitary pads</li>
              <li>Baby clothes and wraps</li>
              <li>Toiletries</li>
              <li>Your antenatal file</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              After the Baby Arrives
            </h2>

            <p>
              Care continues after delivery. The clinic supports recovery,
              breastfeeding, contraception counselling and emotional
              wellbeing. Paediatric consultations, vaccinations and newborn
              care are also available, so mother and baby can continue with the
              same trusted team.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Why Women Trust Dr. Priyanka Gynaec
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Expertise with heart:</strong> Training in laparoscopy,
                fertility treatment and women&apos;s health, with a
                compassionate approach
              </li>
              <li>
                <strong>Continuity you can count on:</strong> An integrated
                team that knows your history
              </li>
              <li>
                <strong>Advanced imaging:</strong> Detailed assessment with a
                Voluson E22 3D/4D ultrasound machine
              </li>
              <li>
                <strong>Complete care in one place:</strong> Fertility,
                pregnancy, delivery and paediatric services
              </li>
              <li>
                <strong>Honest guidance:</strong> Advice based on what you truly
                need
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              Clinic Address and Appointments
            </h2>

            <p>
              Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
              Nagar, Moradabad, Uttar Pradesh – 244001.
            </p>

            <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h3 className="mb-4 text-2xl font-bold">
                Book Your Antenatal Consultation
              </h3>

              <p className="mb-6">
                For pregnancy consultations and appointment details, contact
                Dr. Priyanka Gynaec.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <a
                      href="tel:+919079765578"
                      className="hover:underline"
                    >
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
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

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="break-all hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
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

            <section className="pt-4">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
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
