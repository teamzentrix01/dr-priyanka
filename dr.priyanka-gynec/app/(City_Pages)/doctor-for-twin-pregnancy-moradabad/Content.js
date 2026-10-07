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

export default function DoctorForTwinPregnancyMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for twin pregnancy in Moradabad?",
      a: "A gynaecologist experienced in high-risk antenatal care, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "How early can twins be detected?",
      a: "Often around 6 to 9 weeks by ultrasound. A scan at 11 to 14 weeks confirms the placenta type.",
    },
    {
      q: "Is twin pregnancy high risk?",
      a: "Yes, it needs closer monitoring, but most twins are born healthy with proper care. WhatsApp: +91 89796 70705.",
    },
    {
      q: "Can twins be delivered normally?",
      a: "Sometimes, if the first baby is head down and there are no complications. Your doctor will advise.",
    },
    {
      q: "Will I need more scans with twins?",
      a: "Yes, twin pregnancy usually needs more frequent scans and check-ups than a single pregnancy.",
    },
    {
      q: "Do I need a special diet with twins?",
      a: "Yes, you need more protein, iron, calcium and calories. Get a plan from your doctor.",
    },
    {
      q: "When are twins usually born?",
      a: "Often before 40 weeks. Your doctor decides the safest week based on your scans.",
    },
    {
      q: "Can IVF cause twin pregnancy?",
      a: "Yes, the chance is higher, especially if more than one embryo is transferred. Email: drpriyankagynaec@gmail.com.",
    },
    {
      q: "What are warning signs in twin pregnancy?",
      a: "Bleeding, fluid leakage, early labour pains, severe headache or reduced baby movements. Call immediately.",
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
                Doctor for Twin Pregnancy in Moradabad: Complete Care Guide for
                Expecting Mothers
              </h1>

              <p className="mb-4 text-gray-700">
                Finding out you are expecting twins brings double joy, and often
                a few double worries too. Questions about health, diet, scans
                and delivery are natural. If you are searching for a doctor for
                twin pregnancy in Moradabad, this guide explains what makes twin
                pregnancy different, which tests you need, how to stay healthy,
                and how delivery is planned.
              </p>

              <p className="mb-4 text-gray-700">
                Most twin pregnancies end with two healthy babies when they are
                monitored closely. The key is early diagnosis, regular check-ups
                and a doctor who understands high-risk care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Twin Pregnancy?
              </h2>

              <p className="mb-4 text-gray-700">
                A twin pregnancy means two babies are growing in the womb at the
                same time. Twins form in two ways.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fraternal (non-identical) twins:</strong> two separate
                  eggs are fertilised by two sperm. They can be the same or
                  different sex and look like ordinary siblings.
                </li>
                <li>
                  <strong>Identical twins:</strong> one fertilised egg splits
                  into two. They share the same genes and are always the same
                  sex.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Chorionicity matters:</strong> whether the babies have
                separate or shared placentas decides how closely they are
                monitored.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Twin Pregnancy Based on Placenta
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Dichorionic diamniotic (DCDA):</strong> two placentas
                  and two sacs, which is the lowest-risk type.
                </li>
                <li>
                  <strong>Monochorionic diamniotic (MCDA):</strong> one shared
                  placenta and two sacs, which needs closer monitoring.
                </li>
                <li>
                  <strong>Monochorionic monoamniotic (MCMA):</strong> one
                  placenta and one sac, which is rare and high-risk.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor identifies this type early, ideally in the first
                trimester ultrasound.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Has a Higher Chance of Twins?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Women who conceive through IVF or fertility treatment.
                </li>
                <li>
                  Women with a family history of fraternal twins, especially on
                  the mother&apos;s side.
                </li>
                <li>Women aged 35 and above.</li>
                <li>Women who have had previous twin pregnancies.</li>
                <li>Women with a taller height or higher body mass index.</li>
                <li>
                  Women who conceive soon after stopping certain contraceptives
                  (a small effect).
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Early Signs and Symptoms of Twin Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                These signs may hint at twins, but only an ultrasound confirms
                it.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Stronger or earlier morning sickness.</li>
                <li>Extreme tiredness.</li>
                <li>Faster weight gain in early weeks.</li>
                <li>A uterus that measures larger than expected.</li>
                <li>Very high pregnancy hormone levels on blood tests.</li>
                <li>Feeling movements earlier or in more areas.</li>
                <li>Increased breast tenderness.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Many single pregnancies have similar signs, so do not assume
                anything without a scan.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is Twin Pregnancy Diagnosed?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Early ultrasound (6 to 9 weeks):</strong> can show two
                  gestational sacs or two heartbeats.
                </li>
                <li>
                  <strong>Dating and chorionicity scan (11 to 14 weeks):</strong>{" "}
                  confirms the placenta type, which is best determined this
                  early.
                </li>
                <li>
                  <strong>Nuchal translucency scan:</strong> screens for
                  chromosomal risks in both babies.
                </li>
                <li>
                  <strong>Blood tests:</strong> hormone levels and routine
                  screening.
                </li>
                <li>
                  <strong>3D/4D ultrasound:</strong> gives detailed views of
                  both babies where available.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Twin Pregnancy Needs Special Care
              </h2>

              <p className="mb-4 text-gray-700">
                Twin pregnancies are considered higher risk, though most go well
                with proper monitoring.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Preterm labour:</strong> twins often arrive earlier
                  than single babies.
                </li>
                <li>
                  <strong>Low birth weight:</strong> one or both babies may grow
                  slower.
                </li>
                <li>
                  <strong>Gestational diabetes:</strong> the chance is higher in
                  twin pregnancy.
                </li>
                <li>
                  <strong>Pre-eclampsia (high blood pressure):</strong> more
                  common with twins.
                </li>
                <li>
                  <strong>Anaemia:</strong> the body needs much more iron and
                  folate.
                </li>
                <li>
                  <strong>Twin-to-twin transfusion syndrome (TTTS):</strong> a
                  rare problem in identical twins sharing a placenta.
                </li>
                <li>
                  <strong>Growth difference:</strong> one twin may grow slower
                  than the other.
                </li>
                <li>
                  <strong>Postpartum bleeding:</strong> a slightly higher risk
                  after delivery.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Knowing these risks early helps your doctor act at the right
                time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Antenatal Schedule for Twin Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Twin pregnancy needs more visits and scans than a single
                pregnancy.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>First trimester:</strong> confirm twins, placenta type
                  and viability.
                </li>
                <li>
                  <strong>11 to 14 weeks:</strong> dating scan and nuchal
                  translucency.
                </li>
                <li>
                  <strong>18 to 22 weeks:</strong> detailed anomaly scan for
                  both babies.
                </li>
                <li>
                  <strong>From 16 weeks onward (identical twins):</strong>{" "}
                  frequent scans, often every 2 weeks, to watch for TTTS.
                </li>
                <li>
                  <strong>Non-identical twins:</strong> growth scans usually
                  every 3 to 4 weeks.
                </li>
                <li>
                  <strong>24 to 28 weeks:</strong> glucose testing for
                  gestational diabetes.
                </li>
                <li>
                  <strong>Third trimester:</strong> weekly or fortnightly
                  check-ups as advised.
                </li>
                <li>
                  <strong>Blood pressure and urine checks:</strong> at every
                  visit.
                </li>
                <li>
                  <strong>Cervical length check:</strong> in selected cases to
                  assess preterm risk.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor may adjust this plan based on your own condition.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Twin Pregnancy Diet and Nutrition
              </h2>

              <p className="mb-4 text-gray-700">
                Your body works harder with two babies, so nutrition becomes
                very important.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Extra calories:</strong> you need more energy than a
                  single pregnancy, so ask your doctor for the right amount.
                </li>
                <li>
                  <strong>Protein:</strong> dal, paneer, milk, curd, eggs,
                  sprouts, chicken or fish if non-vegetarian.
                </li>
                <li>
                  <strong>Iron-rich foods:</strong> spinach, beetroot, dates,
                  pomegranate and jaggery in moderation.
                </li>
                <li>
                  <strong>Calcium:</strong> milk, curd, ragi, sesame and
                  almonds.
                </li>
                <li>
                  <strong>Folate:</strong> green leafy vegetables, lentils and
                  prescribed folic acid.
                </li>
                <li>
                  <strong>Healthy fats:</strong> nuts, seeds, a little ghee and
                  good cooking oils.
                </li>
                <li>
                  <strong>Small frequent meals:</strong> 5 to 6 meals a day so
                  you don&apos;t feel too full.
                </li>
                <li>
                  <strong>Plenty of water:</strong> water, coconut water and
                  buttermilk.
                </li>
                <li>
                  <strong>Prescribed supplements:</strong> iron, calcium,
                  vitamin D and folic acid, taken regularly.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Avoid raw or undercooked food, unpasteurised dairy, excess
                caffeine, alcohol and tobacco.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recommended Weight Gain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Twin pregnancy usually needs more weight gain than a single
                  pregnancy.
                </li>
                <li>
                  The right range depends on your pre-pregnancy weight and BMI.
                </li>
                <li>
                  Sudden weight jumps or very slow gain should be reported to
                  your doctor.
                </li>
                <li>Do not diet or restrict food during pregnancy.</li>
                <li>
                  Your doctor will set a target that suits you.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Discomforts in Twin Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Heartburn and acidity:</strong> eat small meals and
                  avoid lying down after eating.
                </li>
                <li>
                  <strong>Back pain:</strong> use a supportive posture and a
                  pregnancy pillow.
                </li>
                <li>
                  <strong>Breathlessness:</strong> the uterus presses on the
                  lungs, so rest and pace yourself.
                </li>
                <li>
                  <strong>Swollen feet:</strong> elevate your legs and avoid
                  standing for long periods.
                </li>
                <li>
                  <strong>Constipation:</strong> increase fibre and fluids.
                </li>
                <li>
                  <strong>Trouble sleeping:</strong> sleep on your side with
                  pillows between your knees.
                </li>
                <li>
                  <strong>Pelvic pressure:</strong> use gentle movement and
                  avoid heavy lifting.
                </li>
                <li>
                  <strong>Fatigue:</strong> rest more, and ask family to share
                  tasks.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Call Your Doctor Immediately
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular tightening or labour pains before 37 weeks.
                </li>
                <li>Vaginal bleeding or fluid leakage.</li>
                <li>
                  Sudden severe headache, blurred vision or flashing lights.
                </li>
                <li>
                  Sudden swelling of face, hands or feet.
                </li>
                <li>Severe pain in the upper abdomen.</li>
                <li>Reduced movements of either baby.</li>
                <li>Rapid increase in belly size within days.</li>
                <li>Fever, burning urine or foul-smelling discharge.</li>
                <li>Persistent vomiting or dizziness.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Do not wait for the next appointment if any of these appear.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Planning for Twins
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Timing:</strong> twins are often delivered earlier
                  than 40 weeks, and your doctor decides the safest week for
                  you.
                </li>
                <li>
                  <strong>Normal delivery:</strong> may be possible if the first
                  baby is head down and there are no other complications.
                </li>
                <li>
                  <strong>Caesarean section:</strong> may be advised if the
                  first baby is not head down, if the placenta position is a
                  concern, or for other medical reasons.
                </li>
                <li>
                  <strong>Second twin:</strong> its position can change after
                  the first baby is born, so an experienced team is important.
                </li>
                <li>
                  <strong>Monitoring during labour:</strong> both babies&apos;
                  heartbeats are watched closely.
                </li>
                <li>
                  <strong>Delivery in a well-equipped centre:</strong> so extra
                  help is available if required.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The best plan is one made together with your doctor after
                reviewing your scans and health.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Twin Pregnancy After IVF or Fertility Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  IVF can increase the chance of twins, especially when more
                  than one embryo is transferred.
                </li>
                <li>
                  Dr. Priyanka&apos;s clinic offers fertility and IVF services
                  with time-lapse embryo monitoring, so care can continue
                  smoothly from conception to delivery.
                </li>
                <li>
                  Single embryo transfer can lower twin risk where medically
                  appropriate.
                </li>
                <li>
                  Early scans confirm the number of babies and their placenta
                  type.
                </li>
                <li>
                  Discuss embryo number and risks with your fertility doctor
                  before treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postpartum and Newborn Care for Twins
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Feed both babies:</strong> breastfeeding twins is
                  possible with support and good positioning.
                </li>
                <li>
                  <strong>Rest and share help:</strong> sleep when the babies
                  sleep.
                </li>
                <li>
                  <strong>Watch for bleeding and infection:</strong> mothers of
                  twins need careful postnatal follow-up.
                </li>
                <li>
                  <strong>Small or early babies:</strong> may need extra newborn
                  checks.
                </li>
                <li>
                  <strong>Vaccinations and growth checks:</strong> the
                  clinic&apos;s paediatric care supports newborn consultations
                  and immunisation.
                </li>
                <li>
                  <strong>Emotional health:</strong> tiredness and stress are
                  common, so ask for support early.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is known in Moradabad for antenatal and
                postnatal care, high-risk pregnancy management and patient-first
                communication. Based on the clinic&apos;s listed services, you
                can expect:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>High-risk pregnancy focus:</strong> close attention to
                  conditions common in twins.
                </li>
                <li>
                  <strong>3D and 4D ultrasound:</strong> detailed monitoring of
                  both babies&apos; growth.
                </li>
                <li>
                  <strong>Structured antenatal care:</strong> regular scans and
                  check-ups through every trimester.
                </li>
                <li>
                  <strong>Normal delivery focus:</strong> gentle care that
                  supports natural birth wherever safe.
                </li>
                <li>
                  <strong>Fertility and IVF services:</strong> continuity for
                  women who conceive with treatment.
                </li>
                <li>
                  <strong>Newborn support:</strong> paediatric consultations and
                  vaccinations at the same centre.
                </li>
                <li>
                  <strong>Clear explanations:</strong> simple answers that
                  reduce anxiety.
                </li>
                <li>
                  <strong>Convenient location:</strong> Gandhi Nagar, Moradabad,
                  with call and WhatsApp booking.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Twin Pregnancy Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A detailed review of your medical history, previous
                  pregnancies and family history.
                </li>
                <li>
                  Ultrasound to confirm twins and identify the placenta type.
                </li>
                <li>
                  Blood tests to check haemoglobin, sugar, thyroid and infection
                  status.
                </li>
                <li>
                  Personalised diet, supplement and lifestyle advice.
                </li>
                <li>A clear scan and visit schedule.</li>
                <li>Guidance on warning signs and when to call.</li>
                <li>Early discussion of delivery options.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Healthier Twin Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Start antenatal care as soon as twins are suspected.
                </li>
                <li>Attend every scan and check-up without skipping.</li>
                <li>Take supplements exactly as prescribed.</li>
                <li>Rest often, and avoid heavy lifting or long standing.</li>
                <li>
                  Keep track of baby movements in the third trimester.
                </li>
                <li>
                  Keep the hospital bag ready by the 32nd week, since twins may
                  come early.
                </li>
                <li>Arrange help at home for after delivery.</li>
                <li>Stay emotionally connected and talk about worries openly.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Appointment
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
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

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
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
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
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
