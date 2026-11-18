
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Rampur?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Rampur and nearby areas travel there for care.",
  },
  {
    q: "When should I have my first postnatal checkup?",
    a: "Usually within the first one to two weeks after delivery, and a full checkup around six weeks. Visit sooner if you have any warning signs.",
  },
  {
    q: "Can my baby's checkup and vaccination be planned with my visit?",
    a: "The clinic offers paediatric consultations, newborn care and vaccinations. Ask when you book whether both can be combined.",
  },
  {
    q: "What is checked during a postnatal visit?",
    a: "Blood pressure, weight, bleeding, uterine recovery, wound or stitches, breast and feeding concerns, emotional wellbeing and contraception needs.",
  },
  {
    q: "How long does bleeding last after delivery?",
    a: "It usually lessens over several weeks. Heavy bleeding, large clots or foul-smelling discharge needs medical review.",
  },
  {
    q: "When is it safe to travel after a C-section?",
    a: "Ask your doctor before discharge. They will advise on timing and how to travel comfortably.",
  },
  {
    q: "Is it normal to feel low after childbirth?",
    a: "Mild mood swings in the first two weeks are common. If sadness, anxiety or hopelessness continues or worsens, speak to your doctor, since postnatal depression is treatable.",
  },
  {
    q: "Can I get pregnant while breastfeeding?",
    a: "Yes, it is possible. Discuss suitable contraception at your postnatal visit.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on www.gynaecologistmoradabad.com.",
  },
];

export default function PostnatalCareDoctorNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Postnatal Care Doctor near Rampur – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              After delivery, most of the attention goes to the baby. Yet the
              mother&apos;s recovery matters just as much. Healing, feeding,
              sleep, emotions and long-term health all need medical guidance,
              and a trip to the doctor with a newborn takes planning.
            </p>

            <p>
              If you live in Rampur, Dr. Priyanka Pachauri of Dr. Priyanka
              Gynaec in neighbouring Moradabad is an option to consider. The
              clinic is located in Moradabad, not in Rampur, and women from
              Rampur and nearby areas travel there for care. It offers
              postnatal care for mothers along with newborn care and
              vaccinations for babies. Its philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is Postnatal Care?
              </h2>
              <p>
                Postnatal care, also called postpartum care, is the medical
                care a mother receives after delivery. It begins right after
                birth and continues through the first six weeks, and often
                beyond. It covers physical recovery, emotional wellbeing,
                breastfeeding, contraception and the baby&apos;s early health.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Postnatal Checkups Matter
              </h2>
              <p>
                Many women skip follow-up because they feel fine or are busy
                with the baby. But infection, heavy bleeding, high blood
                pressure, anaemia and low mood can appear after delivery
                without being obvious at first. A timely checkup helps to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Confirm that the uterus and any wound or stitches are
                  healing
                </li>
                <li>Detect infection or abnormal bleeding early</li>
                <li>Check blood pressure, weight and haemoglobin</li>
                <li>Support breastfeeding</li>
                <li>Identify signs of postnatal depression or anxiety</li>
                <li>Discuss contraception and family planning</li>
                <li>Answer your questions about the baby</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When Should You Have a Postnatal Checkup?
              </h2>
              <p>Schedules vary, but a typical pattern is:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Within the first few days:</strong> A review in the
                  hospital or clinic, especially after a caesarean, stitches
                  or complications.
                </li>
                <li>
                  <strong>Around 1 to 2 weeks:</strong> Wound check, bleeding
                  review, feeding support and the baby&apos;s weight check.
                </li>
                <li>
                  <strong>Around 6 weeks:</strong> A full postnatal checkup,
                  including a general examination and contraception discussion.
                </li>
              </ul>
              <p>
                If you had a high-risk pregnancy, diabetes, high blood pressure
                or a difficult delivery, your doctor may advise extra visits.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Postnatal Services at Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Post-delivery physical examination</li>
                <li>
                  Wound care after a caesarean, or care of stitches after a
                  normal delivery
                </li>
                <li>Review of bleeding, pain and uterine recovery</li>
                <li>Blood pressure, weight and anaemia assessment</li>
                <li>Breastfeeding guidance</li>
                <li>Nutrition and rest advice</li>
                <li>Emotional wellbeing check</li>
                <li>Contraception and family planning counselling</li>
                <li>Newborn care and paediatric consultations</li>
                <li>Baby vaccinations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Mother and Baby in One Visit
              </h2>
              <p>
                Travelling with a newborn is tiring, so combining care helps.
                The clinic offers paediatric consultations, newborn care and
                vaccinations, so a mother&apos;s check and her baby&apos;s check
                can often be planned around the same trip. Ask the clinic when
                you book which services can be combined.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery After a Normal Delivery
              </h2>
              <p>Common experiences include:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Soreness or stitches:</strong> Keep the area clean
                  and dry, and use pain relief as advised.
                </li>
                <li>
                  <strong>Vaginal bleeding (lochia):</strong> Heavier at first,
                  gradually lightening over several weeks.
                </li>
                <li>
                  <strong>Afterpains:</strong> Cramping as the uterus contracts
                  back.
                </li>
                <li>
                  <strong>Fatigue:</strong> Very common, especially with
                  broken sleep.
                </li>
                <li>
                  <strong>Breast changes:</strong> Fullness and engorgement as
                  milk comes in.
                </li>
              </ul>
              <p>
                Gentle walking, fluids, fibre-rich food and rest help. Ask your
                doctor when it is safe to resume exercise and intimacy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery After a C-Section
              </h2>
              <p>
                Recovery takes longer because it involves abdominal surgery.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Follow wound care instructions carefully</li>
                <li>
                  Support the incision when coughing, laughing or getting up
                </li>
                <li>
                  Walk gently, but avoid heavy lifting until advised
                </li>
                <li>
                  Eat well and drink plenty of fluids to avoid constipation
                </li>
                <li>Take prescribed medicines on time</li>
              </ul>
              <p>
                Report fever, increasing pain, redness, swelling or discharge
                from the wound without delay.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Follow-Up When You Live in Rampur
              </h2>
              <p>
                Early weeks with a newborn are not the easiest time to travel,
                so plan ahead.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                Ask Your Doctor Before You Leave the Hospital
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  When is my first follow-up, and what will be checked?
                </li>
                <li>
                  Which checks, such as blood pressure or wound review, could
                  be done closer to home if you agree?
                </li>
                <li>
                  When should I bring the baby for weight checks and
                  vaccinations?
                </li>
                <li>Which symptoms mean I should seek urgent care?</li>
                <li>How can I reach the clinic if I have a question?</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Make Travel Easier
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Book appointments in advance and confirm timings</li>
                <li>Travel with a family member who can help with the baby</li>
                <li>
                  Ask your doctor how and when to travel, especially after a
                  caesarean
                </li>
                <li>
                  Carry your discharge summary, medicines and the baby&apos;s
                  records
                </li>
                <li>Pack feeding supplies, spare clothes, diapers and water</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Keep a Local Plan
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Identify the nearest hospital with emergency facilities to
                  your home
                </li>
                <li>Know which warning signs mean going there straight away</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs That Need Prompt Attention
              </h2>
              <p>
                Contact your doctor or seek emergency care if you have:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Heavy bleeding that soaks a pad within an hour or passes
                  large clots
                </li>
                <li>Fever or chills</li>
                <li>Foul-smelling vaginal discharge</li>
                <li>Severe or worsening abdominal pain</li>
                <li>
                  Redness, swelling or pus at the wound or stitches
                </li>
                <li>Severe headache or vision changes</li>
                <li>Pain, redness or swelling in the leg</li>
                <li>Chest pain or breathlessness</li>
                <li>
                  Painful, hard, red areas in the breast with fever
                </li>
                <li>
                  Feelings of hopelessness, or thoughts of harming yourself
                  or the baby
                </li>
              </ul>
              <p>
                In an emergency, go to the nearest emergency facility
                immediately. Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Breastfeeding Support
              </h2>
              <p>
                Breastfeeding is natural, but it is also a skill that mother
                and baby learn together. Sore nipples, supply worries and
                engorgement are common in the early days. Your doctor can help
                with positions, latch, managing pain and understanding feeding
                frequency. Most difficulties improve with timely support, so
                ask rather than struggle alone.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Nutrition and Rest
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Eat regular, balanced meals with protein, vegetables, fruit,
                  grains and dairy
                </li>
                <li>Drink enough water throughout the day</li>
                <li>
                  Continue iron, calcium or other supplements if prescribed
                </li>
                <li>Rest whenever the baby sleeps</li>
                <li>Accept help from family with housework and meals</li>
              </ul>
              <p>
                Please avoid crash diets and heavy exercise in the early
                weeks.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Health After Childbirth
              </h2>
              <p>
                Many mothers have &quot;baby blues,&quot; with mood swings and
                tearfulness in the first two weeks, which usually settle on
                their own. Postnatal depression is different. It involves
                persistent sadness, anxiety, loss of interest, trouble bonding
                with the baby or overwhelming guilt. It is a medical condition,
                not a weakness, and it is treatable. Talk to your doctor or a
                trusted family member early.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Contraception and Family Planning
              </h2>
              <p>
                Fertility can return sooner than many women expect, even while
                breastfeeding. A postnatal checkup is the right time to discuss
                short-term and long-term options, methods suited to
                breastfeeding, and, for those who have completed their family,
                laparoscopic sterilization as a safe day-care procedure.
              </p>
            </section>

            <section className="space-y-4">
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
                  <strong>Complete care in one place:</strong> Gynaecology,
                  fertility, pregnancy and paediatric services
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice based on what you
                  truly need
                </li>
              </ul>
              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Clinic Address and Appointments
              </h2>
              <p>
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <h3 className="mb-4 text-2xl font-bold">
                  Book Your Postnatal Care Appointment
                </h3>
                <p className="mb-6">
                  Contact Dr. Priyanka Gynaec for post-delivery checkups,
                  maternal recovery guidance and newborn care.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0" />
                    <div>
                      <strong>Call for appointment:</strong>{" "}
                      <a
                        href="tel:+919079765578"
                        className="underline underline-offset-2"
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
                        className="underline underline-offset-2"
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
                        className="break-all underline underline-offset-2"
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
                        className="break-all underline underline-offset-2"
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
                  <h3 className="font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="mt-2 text-gray-700">{faq.a}</p>
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
