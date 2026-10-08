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
      q: "What is a delivery specialist?",
      a: "An obstetrician trained to manage pregnancy, labour, delivery and postnatal care.",
    },
    {
      q: "Who is a good delivery specialist in Moradabad?",
      a: "Dr. Priyanka Pachauri (MS O&G, FMAS) offers monitored, natural-birth-focused care with OT backup.",
    },
    {
      q: "When should I consult a delivery specialist?",
      a: "As soon as pregnancy is confirmed, ideally in the first trimester.",
    },
    {
      q: "Is painless delivery available?",
      a: "Yes. Epidural and walking epidural are offered after medical assessment.",
    },
    {
      q: "Can a specialist handle high-risk pregnancy?",
      a: "Yes. Dr. Priyanka provides closer monitoring and planning for high-risk cases.",
    },
    {
      q: "What if a caesarean is needed?",
      a: "Our OT is ready 24/7, so we can switch quickly and safely.",
    },
    {
      q: "What qualifications should a delivery specialist have?",
      a: "MS, DNB or DGO in Obstetrics & Gynaecology, plus valid medical registration.",
    },
    {
      q: "Do you provide care after delivery?",
      a: "Yes. We offer postnatal, breastfeeding and newborn care support.",
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
                Delivery Specialist in Moradabad: Who They Are, When You Need
                One and How to Choose
              </h1>


              <p className="mb-4 text-gray-700">
                &quot;Delivery specialist&quot; is a phrase many families use
                when they look for a doctor to handle childbirth. In medical
                terms, this is usually an obstetrician, a doctor trained in
                pregnancy, labour and delivery, and the care of the mother
                afterwards.
              </p>


              <p className="mb-4 text-gray-700">
                Choosing a delivery specialist in Moradabad is one of the most
                important decisions of your pregnancy. The right specialist
                watches over you and your baby, prepares you for labour and acts
                fast if something changes. This guide explains what a delivery
                specialist does, which qualifications matter, when you need one
                and how Dr. Priyanka Pachauri at Dr. Priyanka Gynaec approaches
                safe childbirth.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Delivery Specialist?
              </h2>


              <p className="mb-4 text-gray-700">
                A delivery specialist is a doctor with focused training in
                managing pregnancy and childbirth.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Usually an obstetrician and gynaecologist (OB-GYN)
                </li>
                <li>Manages normal vaginal deliveries</li>
                <li>Handles complicated labours and emergencies</li>
                <li>
                  Performs caesarean sections when medically needed
                </li>
                <li>Provides antenatal care before birth</li>
                <li>Provides postnatal care after birth</li>
                <li>Manages high-risk pregnancies</li>
                <li>
                  Works with anaesthetists, nurses and paediatricians
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                In short, this doctor is responsible for the safety of both
                mother and baby from early pregnancy until recovery.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does a Delivery Specialist Actually Do?
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirms pregnancy and estimates the due date</li>
                <li>Orders blood tests, urine tests and ultrasound scans</li>
                <li>
                  Screens for diabetes, high blood pressure, thyroid problems
                  and anaemia
                </li>
                <li>Advises on diet, supplements and safe exercise</li>
                <li>Monitors the baby&apos;s growth and position</li>
                <li>Plans your birth and discusses pain relief</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Monitors contractions and fetal heart rate</li>
                <li>Guides labour progress</li>
                <li>Offers pain relief options such as epidural</li>
                <li>Performs or assists with the birth</li>
                <li>
                  Uses vacuum or forceps only when needed for safety
                </li>
                <li>Switches to caesarean if complications arise</li>
                <li>Repairs any tears or episiotomy</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Delivery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Checks bleeding and recovery</li>
                <li>Supports early breastfeeding</li>
                <li>Advises on stitch care and hygiene</li>
                <li>Schedules the postnatal check-up</li>
                <li>Discusses contraception and family planning</li>
                <li>Watches for postnatal complications</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Specialist vs General Doctor: Why It Matters
              </h2>


              <p className="mb-4 text-gray-700">
                Not every doctor is trained to manage labour and obstetric
                emergencies.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Delivery specialist:</strong> Postgraduate training in
                  obstetrics and gynaecology, with experience in labour and
                  surgery
                </li>
                <li>
                  <strong>General physician:</strong> Can manage general health,
                  but not complex pregnancy or delivery
                </li>
                <li>
                  <strong>Midwife or nurse:</strong> Provides valuable support,
                  but works under a doctor for complications
                </li>
                <li>
                  <strong>Why it matters:</strong> Childbirth can change quickly,
                  so specialist skills and surgical backup are important
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Always confirm that your doctor holds a recognised obstetrics
                qualification.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Qualifications to Look For
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>MBBS as the base medical degree</li>
                <li>
                  MS (Obstetrics &amp; Gynaecology), DNB or DGO as postgraduate
                  training
                </li>
                <li>
                  Fellowships such as FMAS (minimal access surgery) or
                  infertility fellowships
                </li>
                <li>
                  Registration with the state or national medical council
                </li>
                <li>
                  Hospital affiliations with a well-equipped facility
                </li>
                <li>
                  Ongoing training in new techniques and safety practices
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                These details should be easy to find on the doctor&apos;s
                website or profile.
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


              <p className="mt-4 text-gray-700">
                Her training in both obstetrics and minimally invasive surgery
                means one specialist can support you from a routine pregnancy to
                a complex situation.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Do You Need a Delivery Specialist?
              </h2>


              <p className="mb-4 text-gray-700">
                Every pregnant woman benefits from one, but you should book
                early if you have:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A first pregnancy</li>
                <li>Previous caesarean or complicated delivery</li>
                <li>Gestational or pre-existing diabetes</li>
                <li>High blood pressure or a history of pre-eclampsia</li>
                <li>Thyroid disorders</li>
                <li>Twin or multiple pregnancy</li>
                <li>Pregnancy after IVF or other fertility treatment</li>
                <li>Age above 35</li>
                <li>Previous miscarriage or stillbirth</li>
                <li>Anaemia or low platelet count</li>
                <li>Low-lying placenta or other scan findings</li>
                <li>Reduced baby movements or growth concerns</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Early planning helps catch risks before they become emergencies.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Delivery Services at Dr. Priyanka Gynaec
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Antenatal Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Structured visits throughout pregnancy</li>
                <li>3D/4D ultrasound for detailed scans</li>
                <li>Blood tests and screening for common risks</li>
                <li>Nutrition and exercise advice</li>
                <li>Childbirth education</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Natural birthing preparation and pelvic assessment
                </li>
                <li>Continuous electronic fetal monitoring</li>
                <li>One-on-one nursing support in active labour</li>
                <li>Freedom to move and use natural positions</li>
                <li>
                  Painless epidural options, including walking epidural
                  assistance
                </li>
                <li>
                  Instrumental delivery (vacuum or forceps) only when needed
                </li>
                <li>Episiotomy care and immediate repair if required</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Emergency Readiness
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Operation theatre on standby 24/7</li>
                <li>
                  Quick shift to a caesarean when medically necessary
                </li>
                <li>Experience in managing high-risk pregnancies</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Postnatal and Newborn Care
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Golden hour skin-to-skin contact</li>
                <li>Early breastfeeding support</li>
                <li>Recovery guidance and pelvic floor advice</li>
                <li>Paediatric consultations and vaccinations</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery Support: What a Good Specialist Offers
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Honest assessment of whether you are suitable for vaginal
                  birth
                </li>
                <li>Clear explanation of the stages of labour</li>
                <li>Freedom of movement during labour</li>
                <li>Pain relief choices without pressure</li>
                <li>Respect for your preferences when safe</li>
                <li>Immediate readiness for surgery if plans change</li>
                <li>Gentle, respectful care during and after birth</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Natural birth is supported when it is safe, and a caesarean is
                recommended only for clear medical reasons.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                High-Risk Pregnancy: The Role of a Specialist
              </h2>


              <p className="mb-4 text-gray-700">
                High-risk pregnancy does not always mean a caesarean. With
                expert care, many women can still deliver safely.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits and scans</li>
                <li>Close monitoring of blood pressure and sugar</li>
                <li>Fetal growth and wellbeing checks</li>
                <li>Planning the right time and mode of delivery</li>
                <li>
                  Coordination with anaesthetists and paediatricians
                </li>
                <li>Immediate emergency backup</li>
                <li>Emotional support for anxious families</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Dr. Priyanka&apos;s experience with advanced infertility care
                helps her understand the emotional weight of a long-awaited
                pregnancy.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Painless Delivery: What Your Specialist Should Explain
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Epidural analgesia:</strong> A thin catheter in the
                  lower back delivers medicine to reduce contraction pain
                </li>
                <li>
                  <strong>Walking epidural:</strong> Uses lower doses so some
                  movement may remain
                </li>
                <li>
                  <strong>You stay awake and involved:</strong> in the birth
                </li>
                <li>
                  <strong>Suitability:</strong> Your specialist and anaesthetist
                  check if it suits you
                </li>
                <li>
                  <strong>Possible side effects:</strong> Explained before you
                  decide
                </li>
                <li>
                  <strong>Best time to discuss:</strong> During antenatal visits,
                  not during labour
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology Behind Safer Delivery
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>3D and 4D ultrasound for detailed fetal imaging</li>
                <li>Fetal monitoring tools during labour</li>
                <li>
                  High-definition 3D laparoscopy for any gynaecological surgery
                  needed later
                </li>
                <li>
                  Advanced fertility technology for women who conceived after
                  treatment
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Technology supports safety, but it works best with an attentive,
                experienced doctor.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Delivery Specialist: A Checklist
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Verify qualifications and medical registration</li>
                <li>
                  Ask about experience with normal and complicated deliveries
                </li>
                <li>Check for pain relief options such as epidural</li>
                <li>Confirm continuous fetal monitoring</li>
                <li>Ask about emergency OT and anaesthetist availability</li>
                <li>Find out who will be present at your delivery</li>
                <li>Discuss the approach to caesarean sections</li>
                <li>Ask for a written cost estimate</li>
                <li>Observe how the doctor communicates</li>
                <li>Trust your comfort level</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Specialist at the First Visit
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What is my expected due date?</li>
                <li>Am I a good candidate for normal delivery?</li>
                <li>What tests and scans will I need?</li>
                <li>Which exercises and foods are safe?</li>
                <li>Is epidural or walking epidural suitable for me?</li>
                <li>When should I call you or come to the hospital?</li>
                <li>What happens if I need a caesarean?</li>
                <li>What will the costs include?</li>
                <li>Who will conduct my delivery?</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs of Labour: When to Contact Your Specialist
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular painful contractions every 5 to 10 minutes</li>
                <li>Water breaking</li>
                <li>Bloody show or vaginal bleeding</li>
                <li>Reduced baby movements</li>
                <li>No labour by 40 weeks</li>
                <li>Severe headache, blurred vision or sudden swelling</li>
                <li>Fever or severe abdominal pain</li>
              </ul>


              <p className="mt-4 text-gray-700">
                When in doubt, call. Early advice is always better than delay.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Delivery
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Rest, fluids and protein-rich meals</li>
                <li>Stitch care and hygiene</li>
                <li>Early and frequent breastfeeding</li>
                <li>
                  Gentle walking and pelvic floor exercises when allowed
                </li>
                <li>Postnatal check-up at about 6 weeks</li>
                <li>Contraception and family planning advice</li>
                <li>Attention to emotional wellbeing</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Warning signs such as heavy bleeding, fever or severe pain need
                an immediate call.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Choose Dr. Priyanka Gynaec
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualified MS (O&amp;G), FMAS obstetrician</li>
                <li>Clear, patient communication</li>
                <li>Natural-birth-first approach with honest advice</li>
                <li>Painless labour options</li>
                <li>Continuous monitoring and one-on-one nursing</li>
                <li>24/7 OT standby</li>
                <li>3D/4D ultrasound and modern technology</li>
                <li>Care for low-risk and high-risk pregnancies</li>
                <li>
                  Antenatal, delivery, postnatal and paediatric support in one
                  place
                </li>
                <li>Fertility and IVF expertise</li>
                <li>A warm team that listens</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consult a Delivery Specialist in Moradabad Today
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
