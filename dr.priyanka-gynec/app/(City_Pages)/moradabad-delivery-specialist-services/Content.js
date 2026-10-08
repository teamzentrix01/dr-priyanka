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

export default function DeliverySpecialistMoradabad() {
  const faqs = [
    {
      q: "What delivery specialist services are available in Moradabad?",
      a: "Antenatal care, normal and painless delivery, high-risk care, postnatal and newborn support.",
    },
    {
      q: "Who provides these services at Dr. Priyanka Gynaec?",
      a: "Dr. Priyanka Pachauri (MS O&G, FMAS) and her team.",
    },
    {
      q: "Is painless delivery available?",
      a: "Yes. Epidural and walking epidural are offered after medical assessment.",
    },
    {
      q: "Do you handle high-risk pregnancies?",
      a: "Yes. We provide closer monitoring and careful delivery planning.",
    },
    {
      q: "Is emergency care available?",
      a: "Yes. OT standby is available 24/7.",
    },
    {
      q: "Do you offer postnatal care?",
      a: "Yes. We provide recovery, breastfeeding and family planning guidance.",
    },
    {
      q: "Is newborn care included?",
      a: "We offer paediatric consultations, vaccinations and newborn guidance.",
    },
    {
      q: "When should I start antenatal care?",
      a: "As soon as pregnancy is confirmed, ideally in the first trimester.",
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
                Moradabad Delivery Specialist Services: Complete Care from First
                Scan to Newborn Check-Up
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy care is more than the day of delivery. It begins with
                your first scan, continues through months of check-ups and
                labour, and carries on into your recovery and your baby&apos;s
                early days. A good delivery specialist gives you support at
                every one of these steps.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains the full range of delivery specialist
                services in Moradabad that a mother can expect, and how they
                work together. It also shows how Dr. Priyanka Pachauri at Dr.
                Priyanka Gynaec provides complete maternity care in one place,
                from antenatal visits to normal delivery, painless labour
                options and newborn support.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Delivery Specialist Services?
              </h2>

              <p className="mb-4 text-gray-700">
                Delivery specialist services cover everything an obstetrician
                and her team do to keep mother and baby safe.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirming pregnancy and estimating the due date</li>
                <li>Regular antenatal check-ups and scans</li>
                <li>Screening for health risks</li>
                <li>Preparing you for labour</li>
                <li>Managing labour and delivery</li>
                <li>Emergency care when plans change</li>
                <li>Postnatal care for the mother</li>
                <li>Care and guidance for the newborn</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Think of it as one continuous journey, not a single event.
              </p>
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
                Our Core Delivery Specialist Services
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Antenatal Care (Care Before Birth)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early pregnancy confirmation and dating scan</li>
                <li>Routine blood and urine tests</li>
                <li>3D/4D ultrasound for detailed fetal scans</li>
                <li>Growth monitoring and position checks</li>
                <li>
                  Screening for gestational diabetes, thyroid issues and high
                  blood pressure
                </li>
                <li>Nutrition, supplement and exercise guidance</li>
                <li>Vaccination advice</li>
                <li>Childbirth education and birth planning</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Normal Delivery and Labour Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Natural birthing preparation and pelvic assessment</li>
                <li>Continuous electronic fetal monitoring</li>
                <li>One-on-one nursing support in active labour</li>
                <li>Freedom to move and choose natural positions</li>
                <li>Spontaneous labour management</li>
                <li>
                  Episiotomy care and immediate perineal repair if required
                </li>
                <li>
                  Instrumental delivery (vacuum or forceps) only when needed for
                  the baby&apos;s safety
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Painless Delivery Options
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Epidural labour analgesia</li>
                <li>Walking epidural assistance in suitable cases</li>
                <li>Assessment by the doctor and anaesthetist</li>
                <li>Counselling on benefits and possible side effects</li>
                <li>Support for rest and comfort in long labours</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. High-Risk Pregnancy Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Closer monitoring for diabetes, hypertension and thyroid
                  disorders
                </li>
                <li>Care for pregnancy after IVF or fertility treatment</li>
                <li>Planning for twins and previous caesarean cases</li>
                <li>More frequent scans and check-ups</li>
                <li>Planning the safest time and mode of delivery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Emergency Readiness
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Operation theatre on standby 24/7</li>
                <li>
                  Quick action if fetal distress or other complications develop
                </li>
                <li>Emergency intervention when medically needed</li>
                <li>Experienced handling of complex clinical situations</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Postnatal Care for Mothers
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Recovery checks after delivery</li>
                <li>Stitch care and hygiene advice</li>
                <li>Breastfeeding support</li>
                <li>Pelvic floor exercise guidance</li>
                <li>Postnatal check-up at about 6 weeks</li>
                <li>Contraception and family planning discussion</li>
                <li>Emotional wellbeing support</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Newborn and Paediatric Care
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Golden hour skin-to-skin contact</li>
                <li>Early breastfeeding help</li>
                <li>Newborn consultations</li>
                <li>Vaccinations</li>
                <li>Guidance on feeding, sleep and baby care</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Care Journey: Step by Step
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: First Consultation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Medical history and examination</li>
                <li>Scan to confirm pregnancy</li>
                <li>Basic tests and supplements</li>
                <li>A schedule for upcoming visits</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Regular Antenatal Visits
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Trimester-wise scans and tests</li>
                <li>Monitoring of your health and baby&apos;s growth</li>
                <li>Answers to every question</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Birth Planning
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discussion of normal delivery and pain relief</li>
                <li>Review of any risk factors</li>
                <li>Hospital bag and warning-sign guidance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Labour and Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Continuous monitoring and nursing support</li>
                <li>Pain relief if chosen</li>
                <li>Birth with the doctor&apos;s guidance</li>
                <li>Golden hour bonding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Recovery and Follow-Up
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Postnatal and newborn care</li>
                <li>Check-up at about 6 weeks</li>
                <li>Long-term women&apos;s health support</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Trimester-Wise Services
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester (Weeks 1–12)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy confirmation and dating scan</li>
                <li>Blood tests and supplements</li>
                <li>Management of nausea and early symptoms</li>
                <li>Early risk screening</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester (Weeks 13–28)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed anomaly scan using 3D/4D ultrasound</li>
                <li>Gestational diabetes screening</li>
                <li>Growth monitoring</li>
                <li>Diet and exercise advice</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester (Weeks 29–40)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Growth scans and baby position checks</li>
                <li>Birth plan discussion and pain relief choices</li>
                <li>Childbirth education</li>
                <li>Preparation for labour and hospital stay</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology That Supports Our Services
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>3D and 4D ultrasound for detailed imaging</li>
                <li>Fetal monitoring equipment during labour</li>
                <li>
                  High-definition 3D laparoscopy for any gynaecological surgery
                  needed later
                </li>
                <li>
                  Advanced fertility tools, including time-lapse embryo imaging
                  for women who conceived through treatment
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Technology supports safety, but the real difference comes from
                an attentive, experienced doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Can Benefit From These Services?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>First-time mothers who want clear guidance</li>
                <li>Women with healthy pregnancies who hope for a normal delivery</li>
                <li>Mothers with high-risk conditions needing closer monitoring</li>
                <li>Women who conceived after fertility treatment</li>
                <li>
                  Women who had a previous caesarean and want to explore options
                </li>
                <li>Families who want continuous care under one team</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Related Women&apos;s Health Services
              </h2>

              <p className="mb-4 text-gray-700">
                Our clinic supports women at every life stage, so you can stay
                with one trusted team.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF care</li>
                <li>3D laparoscopic gynaecological surgery</li>
                <li>Treatment for PCOS and menstrual disorders</li>
                <li>Endometriosis care</li>
                <li>Fibroid and ovarian cyst treatment</li>
                <li>Diagnostic hysteroscopy and polyp removal</li>
                <li>Care for uterine prolapse</li>
                <li>Laparoscopic sterilization</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Ask us if you want to discuss any of these alongside your
                pregnancy care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Complete Care Under One Roof Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Continuity:</strong> One team knows your history and
                  reports
                </li>
                <li>
                  <strong>Less stress:</strong> You do not run between different
                  doctors
                </li>
                <li>
                  <strong>Faster decisions:</strong> Everyone has the full
                  picture in an emergency
                </li>
                <li>
                  <strong>Better communication:</strong> Your questions are
                  answered by the same people
                </li>
                <li>
                  <strong>Smoother follow-up:</strong> Postnatal and newborn
                  care connect naturally to your delivery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Delivery Services Provider Should Offer
              </h2>

              <p className="mb-4 text-gray-700">
                Use this list to compare any provider:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualified obstetrician with a recognised degree</li>
                <li>Structured antenatal care with scans</li>
                <li>Continuous fetal monitoring in labour</li>
                <li>Pain relief options such as epidural</li>
                <li>Operation theatre ready at all hours</li>
                <li>Clear explanations of normal delivery and caesarean</li>
                <li>Support for high-risk pregnancies</li>
                <li>Postnatal and newborn support</li>
                <li>Transparent communication about costs</li>
                <li>A respectful, patient team</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Promise: Safe, Gentle, Respectful Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Natural birth is supported when it is safe
                </li>
                <li>
                  A caesarean is advised only for clear medical reasons
                </li>
                <li>You are informed and included in every decision</li>
                <li>Your comfort, privacy and dignity are respected</li>
                <li>Emergency help is always ready</li>
                <li>We listen to your fears without judgement</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs You Should Contact Us Right Away
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular painful contractions every 5 to 10 minutes</li>
                <li>Water breaking</li>
                <li>Vaginal bleeding or a bloody show</li>
                <li>Reduced or absent baby movements</li>
                <li>Severe headache, blurred vision or sudden swelling</li>
                <li>Fever or severe abdominal pain</li>
                <li>No labour by 40 weeks</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for Getting the Most From Your Delivery Services
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Book your first visit early</li>
                <li>Attend every scan and check-up</li>
                <li>Write down your questions before each visit</li>
                <li>Share all your previous reports</li>
                <li>Discuss pain relief and birth preferences in advance</li>
                <li>
                  Keep our numbers saved on your phone and your family&apos;s
                  phones
                </li>
                <li>Pack your hospital bag by week 36</li>
                <li>Plan postnatal care and newborn visits before delivery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation
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
