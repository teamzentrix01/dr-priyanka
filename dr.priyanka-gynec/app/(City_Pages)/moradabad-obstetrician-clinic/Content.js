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


export default function MoradabadObstetricianClinic() {
  const faqs = [
    {
      q: "What does an obstetrician do?",
      a: "An obstetrician cares for women during pregnancy, delivery and the postnatal period.",
    },
    {
      q: "Which is the best obstetrician clinic in Moradabad?",
      a: "Dr. Priyanka Gynaec, led by Dr. Priyanka Pachauri, is a trusted choice for maternity care.",
    },
    {
      q: "Is an obstetrician the same as a gynaecologist?",
      a: "Most obstetricians are also gynaecologists and treat both pregnancy and women's health.",
    },
    {
      q: "Does the clinic offer 3D/4D ultrasound?",
      a: "Yes, the clinic uses a Voluson E22 series 3D/4D ultrasound machine.",
    },
    {
      q: "Do you support normal delivery?",
      a: "Yes, normal delivery is encouraged whenever it is safe for mother and baby.",
    },
    {
      q: "Can high-risk pregnancies be managed here?",
      a: "Yes, the clinic provides close monitoring and care for high-risk pregnancies.",
    },
    {
      q: "Is paediatric care available for my newborn?",
      a: "Yes, paediatric consultations, vaccinations and newborn care are available.",
    },
    {
      q: "When should I visit an obstetrician?",
      a: "As soon as your pregnancy test is positive, ideally by 6 to 8 weeks.",
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
                Moradabad Obstetrician Clinic: Complete Maternity Care for
                Mother and Baby
              </h1>


              <p className="mb-4 text-gray-700">
                Choosing where to receive your pregnancy care is one of the most
                important decisions of your journey. The right clinic gives you
                more than a doctor&apos;s signature on a prescription. It gives
                you an experienced team, reliable diagnostics, clear
                communication and the confidence that someone is looking after
                you and your baby at every step.
              </p>


              <p className="mb-4 text-gray-700">
                If you are searching for an obstetrician clinic in Moradabad,
                Dr. Priyanka Gynaec, led by Dr. Priyanka Pachauri, offers
                complete maternity care in a warm, patient-first environment.
                This guide explains what an obstetrician does, what a good
                clinic should offer, and what you can expect at our clinic from
                pregnancy planning to postnatal recovery.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is an Obstetrician?
              </h2>


              <p className="mb-4 text-gray-700">
                An obstetrician is a doctor who specialises in pregnancy,
                childbirth and the period immediately after delivery. Most
                obstetricians are also gynaecologists, so one doctor can care
                for your overall reproductive health as well.
              </p>


              <p className="mb-2 font-medium text-gray-900">
                An obstetrician typically:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirms and monitors your pregnancy</li>
                <li>
                  Screens for complications such as diabetes, high blood
                  pressure and anaemia
                </li>
                <li>
                  Orders and interprets blood tests and ultrasound scans
                </li>
                <li>Manages high-risk pregnancies</li>
                <li>
                  Plans and performs normal, assisted or caesarean delivery
                </li>
                <li>Provides postnatal care for the mother</li>
                <li>
                  Guides you on nutrition, exercise, vaccinations and medicines
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Obstetrician vs Gynaecologist: What Is the Difference?
              </h2>


              <p className="mb-4 text-gray-700">
                Many women are unsure which doctor to see. The two fields overlap
                closely.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Obstetrics focuses on:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy</li>
                <li>Labour and delivery</li>
                <li>Postnatal recovery</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Gynaecology focuses on:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Menstrual problems</li>
                <li>PCOS, fibroids and endometriosis</li>
                <li>Fertility and contraception</li>
                <li>Menopause and reproductive health</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why it helps to see both in one clinic:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your medical history stays in one place</li>
                <li>
                  Pre-existing conditions are managed alongside pregnancy
                </li>
                <li>Care continues smoothly after delivery</li>
                <li>Future family planning is easier to discuss</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes a Good Obstetrician Clinic?
              </h2>


              <p className="mb-4 text-gray-700">
                Not every clinic is equal. Use this checklist while making your
                choice.
              </p>


              <p className="mb-2 font-medium text-gray-900">
                Qualities to look for:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A qualified and experienced obstetrician-gynaecologist
                </li>
                <li>Modern ultrasound and diagnostic equipment</li>
                <li>Clear, unhurried consultations</li>
                <li>
                  Experience with both routine and high-risk pregnancies
                </li>
                <li>
                  Support for normal delivery wherever medically safe
                </li>
                <li>Access to paediatric care for the newborn</li>
                <li>Hygienic, comfortable and respectful surroundings</li>
                <li>Easy communication through phone and WhatsApp</li>
                <li>Positive patient feedback and word-of-mouth referrals</li>
                <li>A convenient location in Moradabad</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Gynaec, Moradabad
              </h2>


              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                antenatal and postnatal care, high-risk pregnancy management,
                laparoscopic surgery and fertility care. The clinic follows a
                simple philosophy: &quot;Her Health First.&quot;
              </p>


              <p className="mb-2 font-medium text-gray-900">
                What this philosophy means in practice:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your comfort, choices and story come first
                </li>
                <li>You are heard before any treatment is advised</li>
                <li>Technology is used with empathy and patience</li>
                <li>
                  Care is planned around your life, not just your reports
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Complete Maternity Services at Our Clinic
              </h2>


              <p className="mb-4 text-gray-700">
                Our obstetric services cover every stage of motherhood.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Preconception Care
              </h3>
              <p className="mb-2 font-medium text-gray-900">Includes:</p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Health check before planning pregnancy</li>
                <li>Folic acid and vitamin advice</li>
                <li>Control of diabetes, thyroid and blood pressure</li>
                <li>
                  Guidance for women with PCOS or previous pregnancy loss
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Antenatal Care
              </h3>
              <p className="mb-2 font-medium text-gray-900">Includes:</p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early pregnancy confirmation and dating scan</li>
                <li>Routine check-ups throughout pregnancy</li>
                <li>Blood and urine investigations</li>
                <li>NT, anomaly and growth scans</li>
                <li>Gestational diabetes screening</li>
                <li>Diet, exercise and supplement guidance</li>
                <li>Vaccination advice</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                High-Risk Pregnancy Care
              </h3>
              <p className="mb-2 font-medium text-gray-900">Includes:</p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Closer monitoring and more frequent scans</li>
                <li>
                  Management of diabetes, thyroid disease and hypertension
                </li>
                <li>Care for twin pregnancies</li>
                <li>
                  Support after previous miscarriage, preterm birth or
                  caesarean
                </li>
                <li>Careful delivery planning</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnancy and Birthing Care
              </h3>
              <p className="mb-2 font-medium text-gray-900">Includes:</p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Personalised birth planning</li>
                <li>Labour monitoring and pain relief discussion</li>
                <li>Emphasis on safe normal delivery</li>
                <li>Caesarean delivery only when medically needed</li>
                <li>Emotional support for you and your family</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Postnatal Care
              </h3>
              <p className="mb-2 font-medium text-gray-900">Includes:</p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Recovery and wound care</li>
                <li>Breastfeeding support</li>
                <li>Blood pressure and sugar follow-up</li>
                <li>Contraception and family planning advice</li>
                <li>Emotional health check after delivery</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Paediatric and Newborn Care
              </h3>
              <p className="mb-2 font-medium text-gray-900">Includes:</p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Newborn examination</li>
                <li>Paediatric consultations</li>
                <li>Vaccinations as per schedule</li>
                <li>Guidance on feeding, sleep and growth</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Advanced Technology for Safer Pregnancy Care
              </h2>


              <p className="mb-4 text-gray-700">
                Accurate imaging and diagnostics allow problems to be found
                early.
              </p>


              <p className="mb-2 font-medium text-gray-900">
                Facilities highlighted at Dr. Priyanka Gynaec:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D and 4D ultrasound (Voluson E22 series) for detailed fetal
                  imaging
                </li>
                <li>
                  Anomaly and growth scans at the right gestational stage
                </li>
                <li>
                  Doppler studies when blood flow assessment is needed
                </li>
                <li>Complete laboratory investigations</li>
                <li>
                  High-definition 3D laparoscopy for related gynaecological
                  surgery
                </li>
                <li>
                  Time-lapse embryo imaging and AI-based semen analysis for
                  fertility patients
                </li>
              </ul>


              <p className="mb-2 font-medium text-gray-900">
                Why this matters for you:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clearer images mean better assessment of your baby</li>
                <li>Early detection supports timely treatment</li>
                <li>Fewer repeat visits to different centres</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Journey With Us: From First Visit to Delivery
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Book an Appointment
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Call, WhatsApp or email the clinic</li>
                <li>
                  Share your last period date and any medical conditions
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: First Consultation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed history and examination</li>
                <li>Dating ultrasound</li>
                <li>Blood and urine tests</li>
                <li>Start of supplements and personalised advice</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Regular Antenatal Visits
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Monthly visits early on, then more frequent as delivery nears
                </li>
                <li>Key scans at the recommended weeks</li>
                <li>Ongoing guidance on diet, activity and symptoms</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Third Trimester Preparation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Growth scans and position checks</li>
                <li>Discussion of delivery options</li>
                <li>
                  Labour signs, hospital bag and emergency planning
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gentle, supportive care during labour</li>
                <li>Priority on normal delivery when safe</li>
                <li>Immediate newborn care</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 6: Postnatal Follow-Up
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recovery check-ups for you</li>
                <li>Newborn vaccination and growth monitoring</li>
                <li>Family planning advice</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Conditions We Help Manage
              </h2>


              <p className="mb-4 text-gray-700">Common conditions:</p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe morning sickness</li>
                <li>Anaemia</li>
                <li>Gestational diabetes</li>
                <li>High blood pressure and preeclampsia</li>
                <li>Thyroid disorders</li>
                <li>Urinary and vaginal infections</li>
                <li>Low-lying placenta</li>
                <li>Reduced amniotic fluid or poor fetal growth</li>
                <li>
                  Threatened miscarriage and recurrent pregnancy loss
                </li>
                <li>Preterm labour signs</li>
                <li>Twin and multiple pregnancy</li>
                <li>Rh-negative blood group</li>
              </ul>


              <p className="mb-2 font-medium text-gray-900">Our approach:</p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Accurate diagnosis first</li>
                <li>Safe, pregnancy-approved treatment</li>
                <li>Close monitoring until delivery</li>
                <li>Clear explanation so you are never left guessing</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery: Our Approach
              </h2>


              <p className="mb-4 text-gray-700">
                Normal vaginal delivery is often the healthiest option for mother
                and baby when there is no medical reason to avoid it.
              </p>


              <p className="mb-2 font-medium text-gray-900">
                Benefits of normal delivery:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Faster recovery</li>
                <li>Shorter hospital stay</li>
                <li>Lower risk of surgical complications</li>
                <li>Early bonding and breastfeeding</li>
                <li>Easier future pregnancies</li>
              </ul>


              <p className="mb-2 font-medium text-gray-900">
                How we support it:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antenatal preparation and counselling</li>
                <li>Breathing and relaxation guidance</li>
                <li>Continuous monitoring in labour</li>
                <li>Timely decision-making if complications arise</li>
              </ul>


              <p className="mb-2 font-medium text-gray-900">
                A caesarean is advised only when:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The baby or mother is at risk</li>
                <li>The placenta is blocking the birth canal</li>
                <li>The baby is in an unsuitable position</li>
                <li>Labour is not progressing safely</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Women&apos;s Health Care Beyond Pregnancy
              </h2>


              <p className="mb-4 text-gray-700">
                An obstetrician clinic should support you before and after
                pregnancy as well.
              </p>


              <p className="mb-2 font-medium text-gray-900">
                Additional services available:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF treatment</li>
                <li>PCOS and menstrual disorder management</li>
                <li>
                  Laparoscopic cystectomy, myomectomy and hysterectomy
                </li>
                <li>Diagnostic hysteroscopy and polypectomy</li>
                <li>Endometriosis surgery</li>
                <li>Sacrocolpopexy for prolapse</li>
                <li>Laparoscopic sterilisation</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Signs During Pregnancy
              </h2>


              <p className="mb-4 text-gray-700">
                Contact the clinic or go to the nearest hospital without delay if
                you notice:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy vaginal bleeding</li>
                <li>Sudden fluid leakage</li>
                <li>Severe abdominal pain</li>
                <li>Severe headache with blurred vision</li>
                <li>Sudden swelling of face or hands</li>
                <li>Fits or fainting</li>
                <li>Reduced or absent baby movements</li>
                <li>High fever with chills</li>
                <li>Regular contractions before 37 weeks</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for Getting the Most From Your Obstetrician Visits
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before your appointment:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Carry previous reports and a medicine list</li>
                <li>Note your last period date</li>
                <li>Write down questions and symptoms</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During your appointment:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Share every concern, however small</li>
                <li>
                  Mention all medicines, supplements and home remedies
                </li>
                <li>Ask for clear instructions on warning signs</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After your appointment:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow the prescription exactly</li>
                <li>Keep reports in one folder</li>
                <li>Book your next visit before you leave</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Trust Dr. Priyanka Gynaec
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Empathetic care that listens before advising</li>
                <li>
                  A reputation built on mothers referring daughters and friends
                </li>
                <li>
                  Complete care from fertility to delivery to newborn health
                </li>
                <li>Modern imaging and diagnostics</li>
                <li>Special focus on high-risk pregnancies</li>
                <li>Strong support for safe, normal delivery</li>
                <li>
                  Continuity from the first visit to postnatal follow-up
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Visit Our Obstetrician Clinic in Moradabad
              </h2>


              <p className="mb-4 text-gray-700">
                Do not wait for a problem to appear before seeking care. Early
                visits give you and your baby the best possible start.
              </p>


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
